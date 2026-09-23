/**
 * ==============================================================================
 * Document Renderer
 * ==============================================================================
 * 
 * Main orchestrator that combines all styles, layout elements, and content
 * into a complete HTML document ready for PDF conversion.
 * 
 * KEY DESIGN: Content flows naturally as a single continuous document.
 * Chromium's print layout engine handles pagination via CSS break rules.
 * No manual weight estimation or fixed-height page divs.
 * ==============================================================================
 */

import { DocumentData, Section, ContentBlock } from '../domain/document';
import { ResolvedTheme } from '../domain/theme';

import { buildBaseCss } from './styles/base';
import { buildHeaderCss } from './styles/header';
import { buildFooterCss } from './styles/footer';
import { buildWatermarkCss } from './styles/watermark';
import { buildBlocksCss } from './styles/blocks';
import { buildPaginationCss } from './pagination/break-rules';

import { renderHeader, renderSubsequentPageTopBar } from './layout/header-renderer';
import { renderWatermark } from './layout/watermark-renderer';
import { renderBlocks } from './blocks';

/**
 * Build the complete CSS for the document, injecting theme variables.
 */
function buildCompleteCss(theme: ResolvedTheme): string {
  const themeVars = `
    :root {
      --theme-primary: ${theme.colors.primary};
      --theme-secondary: ${theme.colors.secondary};
      --theme-accent: ${theme.colors.accent};
      --theme-light-bg: ${theme.colors.lightBg};
      --theme-border: ${theme.colors.border};
      --theme-heading: ${theme.colors.heading};
      --theme-font-family: ${theme.typography.fontFamily};
      --theme-font-size: ${theme.typography.fontSize};
      --theme-line-height: ${theme.typography.lineHeight};
    }
  `;

  return [
    themeVars,
    buildBaseCss(),
    buildHeaderCss(),
    buildFooterCss(),
    buildWatermarkCss(),
    buildBlocksCss(),
    buildPaginationCss(),
  ].join('\n');
}

/**
 * Render all sections into a flat stream of HTML blocks.
 */
function renderAllSections(sections: Section[], theme: ResolvedTheme): string {
  return sections.map(section => {
    const sectionBlocks: string[] = [];

    // Add an H1 heading for the section title
    if (section.title) {
      // Find the first heading block to extract badge/prefix info if present
      const firstBlock = section.blocks[0];
      let badge = '';
      if (firstBlock && firstBlock.type === 'heading' && firstBlock.level === 1) {
        badge = firstBlock.badge || '';
        // Render remaining blocks (skip the first heading since we use section title)
        const titleHtml = renderBlocks([{
          type: 'heading',
          level: 1,
          text: section.title,
          badge,
        }], theme);
        sectionBlocks.push(titleHtml);

        // Render the rest of the blocks (skip first heading that was merged with section title)
        const remainingBlocks = section.blocks.slice(1);
        if (remainingBlocks.length > 0) {
          sectionBlocks.push(renderBlocks(remainingBlocks, theme));
        }
      } else {
        // Section has title but first block isn't an H1 — render section title as H1
        sectionBlocks.push(renderBlocks([{
          type: 'heading',
          level: 1,
          text: section.title,
        }], theme));
        sectionBlocks.push(renderBlocks(section.blocks, theme));
      }
    } else {
      // No section title — just render all blocks
      sectionBlocks.push(renderBlocks(section.blocks, theme));
    }

    return `
      <section class="element-section">
        ${sectionBlocks.join('\n')}
      </section>
    `;
  }).join('\n');
}

/**
 * Render a flat list of content blocks (used by the legacy adapter path).
 */
function renderFlatContent(blocks: ContentBlock[], theme: ResolvedTheme): string {
  return renderBlocks(blocks, theme);
}

/**
 * Generate the complete HTML document from DocumentData.
 * 
 * The output is a single continuous HTML document with:
 * - First-page header (appears only once at the top)
 * - Watermark overlay (fixed position, repeats on every page)
 * - Content flowing naturally through the document
 * - Footer is handled by Puppeteer's footerTemplate for accurate page numbers
 * 
 * The content area has bottom margin to prevent overlap with the footer.
 */
export function renderDocument(
  doc: DocumentData,
  theme: ResolvedTheme,
  totalPages?: number
): string {
  const css = buildCompleteCss(theme);

  // Render the first-page header
  const headerHtml = renderHeader(doc.course, theme, totalPages || 0);

  // Render the watermark (fixed position — repeats on all pages)
  const watermarkHtml = renderWatermark(theme);

  // Render all content
  let contentHtml: string;
  if (doc.sections && doc.sections.length > 0) {
    contentHtml = renderAllSections(doc.sections, theme);
  } else {
    contentHtml = '<p>لا يوجد محتوى.</p>';
  }

  return `<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>${doc.course.subject || 'محاضرة'} - ${doc.course.lecture || '1'} | مركز تصوير كلية التربية</title>
  <style>
    ${css}
  </style>
</head>
<body>
  <div class="document-root">
    <!-- العلامة المائية الشفافة (fixed position — repeats on all pages) -->
    ${watermarkHtml}

    <!-- ترويسة الصفحة الأولى فقط -->
    ${headerHtml}

    <!-- المحتوى الأكاديمي — يتدفق بشكل طبيعي عبر الصفحات -->
    <main class="page-content-area content-first-page">
      ${contentHtml}
    </main>
  </div>
</body>
</html>`;
}
