/**
 * ==============================================================================
 * CLI Entry Point
 * ==============================================================================
 * 
 * Main entry point for the PDF Generator Bot (v2).
 * Usage: ts-node src/main.ts [input.json] [output.pdf]
 * ==============================================================================
 */

import * as fs from 'fs';
import * as path from 'path';
import { prepareDocument, generateHtml, getHeaderTemplate, getFooterTemplate } from './application/generate';
import { generatePdf } from './infrastructure/pdf-engine';

async function main(): Promise<void> {
  const args = process.argv.slice(2);

  // Determine input/output paths
  const defaultDataFile = fs.existsSync(path.join(__dirname, '..', 'data.json'))
    ? path.join(__dirname, '..', 'data.json')
    : path.join(__dirname, '..', 'sample-data.json');
  const inputPath = args[0] ? path.resolve(process.cwd(), args[0]) : defaultDataFile;
  const outputDir = path.join(__dirname, '..', 'output');
  const outputPdf = args[1] ? path.resolve(process.cwd(), args[1]) : path.join(outputDir, 'lecture.pdf');
  const previewDir = path.join(outputDir);

  // Assets directory (self-contained in v2)
  const assetsDir = path.join(__dirname, '..', 'assets');

  console.log('');
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log('║   📄  مولد المحاضرات PDF v2 — مركز تصوير كلية التربية   ║');
  console.log('╚══════════════════════════════════════════════════════════╝');
  console.log('');

  // Step 1: Read input JSON
  console.log(`📂 قراءة البيانات: ${inputPath}`);
  if (!fs.existsSync(inputPath)) {
    console.error(`❌ ملف البيانات غير موجود: ${inputPath}`);
    process.exit(1);
  }

  let rawData: any;
  try {
    const jsonContent = fs.readFileSync(inputPath, 'utf-8');
    rawData = JSON.parse(jsonContent);
  } catch (err) {
    console.error(`❌ خطأ في قراءة JSON: ${err}`);
    process.exit(1);
  }

  // Step 2: Prepare document (auto-detect and convert legacy format)
  console.log('🔄 تجهيز بيانات المستند...');
  const doc = prepareDocument(rawData);
  console.log(`   ✓ القالب: ${doc.theme}`);
  console.log(`   ✓ المادة: ${doc.course.subject}`);
  console.log(`   ✓ المحاضرة: ${doc.course.lecture}`);
  console.log(`   ✓ الأقسام: ${doc.sections.length}`);

  // Step 3: Generate HTML & layout templates
  console.log('🎨 إنشاء المستند HTML...');
  let { html, theme } = generateHtml(doc, assetsDir);

  // Save HTML preview
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  const htmlPreviewPath = path.join(outputDir, 'preview.html');
  fs.writeFileSync(htmlPreviewPath, html, 'utf-8');
  console.log(`   ✓ HTML: ${htmlPreviewPath}`);

  // Step 4: Generate header & footer templates
  const headerTemplate = getHeaderTemplate(doc, theme);
  const footerTemplate = getFooterTemplate(doc, theme);

  // Step 5: Generate PDF (Pass 1)
  console.log('🖨️  تحويل إلى PDF...');
  let result = await generatePdf({
    html,
    headerTemplate,
    footerTemplate,
    pdfPath: outputPdf,
    previewDir,
    generatePreviews: true,
  });

  // If pageCount is detected, re-render pass 2 to inject accurate page count into the first-page header
  if (result.pageCount > 0) {
    const pass2 = generateHtml(doc, assetsDir, result.pageCount);
    fs.writeFileSync(htmlPreviewPath, pass2.html, 'utf-8');
    result = await generatePdf({
      html: pass2.html,
      headerTemplate,
      footerTemplate,
      pdfPath: outputPdf,
      previewDir,
      generatePreviews: true,
    });
  }

  console.log('');
  console.log('╔══════════════════════════════════════════════════════════╗');
  console.log(`║   ✅  تم إنشاء PDF — ${result.pageCount} صفحات`);
  console.log(`║   📄  ${result.pdfPath}`);
  console.log('╚══════════════════════════════════════════════════════════╝');
  console.log('');
}

main().catch(err => {
  console.error('❌ خطأ غير متوقع:', err);
  process.exit(1);
});
