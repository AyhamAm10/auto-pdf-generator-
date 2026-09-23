/**
 * ==============================================================================
 * Infrastructure — PDF Engine (Puppeteer Wrapper)
 * ==============================================================================
 * 
 * Handles browser launch, HTML→PDF conversion, and preview generation.
 * Wraps Puppeteer with retry logic and proper resource cleanup.
 * ==============================================================================
 */

import puppeteer, { Browser, Page } from 'puppeteer';
import * as path from 'path';
import * as fs from 'fs';

export interface PdfOptions {
  /** Full HTML content to render */
  html: string;
  /** Puppeteer header template HTML */
  headerTemplate?: string;
  /** Puppeteer footer template HTML */
  footerTemplate?: string;
  /** Output PDF file path */
  pdfPath: string;
  /** Output directory for page preview images */
  previewDir?: string;
  /** Whether to generate page preview images */
  generatePreviews?: boolean;
}

export interface PdfResult {
  pdfPath: string;
  pageCount: number;
  previewPaths: string[];
}

/**
 * Launch Puppeteer browser with fallback options.
 */
async function launchBrowser(): Promise<Browser> {
  const options: Parameters<typeof puppeteer.launch>[0] = {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--font-render-hinting=none',
      '--disable-web-security',
    ],
  };

  try {
    return await puppeteer.launch(options);
  } catch (err) {
    // Fallback: try finding Edge or Chrome manually
    console.warn('[PDF Engine] Default Puppeteer launch failed, trying system browser...');

    const systemBrowsers = [
      'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
      'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
      'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    ];

    for (const browserPath of systemBrowsers) {
      if (fs.existsSync(browserPath)) {
        return await puppeteer.launch({
          ...options,
          executablePath: browserPath,
        });
      }
    }

    throw new Error(
      'لم يتم العثور على متصفح. يرجى تثبيت Chrome أو Edge، أو تشغيل: npx puppeteer browsers install chrome'
    );
  }
}

/**
 * Generate PDF from HTML content using Puppeteer.
 */
export async function generatePdf(options: PdfOptions): Promise<PdfResult> {
  const { html, footerTemplate, pdfPath, previewDir, generatePreviews } = options;

  // Ensure output directory exists
  const pdfDir = path.dirname(pdfPath);
  if (!fs.existsSync(pdfDir)) {
    fs.mkdirSync(pdfDir, { recursive: true });
  }

  let browser: Browser | null = null;

  try {
    browser = await launchBrowser();
    const page: Page = await browser.newPage();

    // Set viewport to A4 width
    await page.setViewport({ width: 794, height: 1123 });

    // Load the HTML content
    await page.setContent(html, {
      waitUntil: 'domcontentloaded',
      timeout: 30000,
    });

    // Wait for fonts to load
    await page.evaluate('document.fonts ? document.fonts.ready : Promise.resolve()');

    // Small delay for rendering to settle
    await new Promise(resolve => setTimeout(resolve, 500));

    // Generate PDF — @page in CSS controls print margins
    const pdfOptions: any = {
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      margin: {
        top: '0mm',
        right: '0mm',
        bottom: '0mm',
        left: '0mm',
      },
    };

    // Add header / footer templates if provided
    if (footerTemplate || options.headerTemplate) {
      pdfOptions.displayHeaderFooter = true;
      pdfOptions.headerTemplate = options.headerTemplate || '<span></span>';
      pdfOptions.footerTemplate = footerTemplate || '<span></span>';
    }

    await page.pdf(pdfOptions);

    console.log(`✅ تم إنشاء ملف PDF: ${pdfPath}`);

    // Count pages
    let pageCount = 1;
    try {
      // Quick way to count pages — check the PDF for page objects
      const pdfBuffer = fs.readFileSync(pdfPath);
      const pdfText = pdfBuffer.toString('latin1');
      const matches = pdfText.match(/\/Type\s*\/Page\b/g);
      if (matches) {
        pageCount = matches.length;
      }
    } catch {
      // Fallback count
    }

    // Generate preview images if requested
    const previewPaths: string[] = [];
    if (generatePreviews && previewDir) {
      if (!fs.existsSync(previewDir)) {
        fs.mkdirSync(previewDir, { recursive: true });
      }

      // Take a full-page screenshot
      try {
        await page.setViewport({ width: 794, height: 1123 });
        const fullPreviewPath = path.join(previewDir, 'preview-full.png');
        await page.screenshot({
          path: fullPreviewPath,
          fullPage: true,
        });
        previewPaths.push(fullPreviewPath);
        console.log(`   ✓ صورة معاينة: ${fullPreviewPath}`);
      } catch (err) {
        console.warn('[PDF Engine] Preview generation failure:', err);
      }
    }

    return {
      pdfPath,
      pageCount,
      previewPaths,
    };
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
