/**
 * ==============================================================================
 * Renderer — Pagination Break Rules
 * ==============================================================================
 * 
 * CSS break property rules for intelligent page splitting.
 * These rules are applied via CSS classes to control how content flows
 * across page boundaries in Chromium's print layout engine.
 * ==============================================================================
 */

export function buildPaginationCss(): string {
  return `
    /* ------------------------------------------------------------- */
    /* CSS Print Pagination Rules                                     */
    /* ------------------------------------------------------------- */
    
    /* Headings: avoid breaking after (keep with following content) */
    .element-h1-container,
    .element-h2-container,
    .element-h3-container {
      break-after: avoid;
      break-inside: avoid;
    }

    /* Paragraphs: allow natural splitting */
    .element-p {
      orphans: 2;
      widows: 2;
    }

    /* Lists: allow splitting between items */
    .element-list {
      break-inside: auto;
    }

    .list-item {
      break-inside: avoid;
    }

    /* Callouts: prefer keeping together, but allow split if needed */
    .element-callout {
      break-inside: avoid;
    }

    /* Tables: allow splitting but repeat headers */
    .element-table-wrapper {
      break-inside: auto;
    }

    .element-table thead {
      display: table-header-group;
    }

    /* Definitions: cards should not split */
    .definition-card {
      break-inside: avoid;
    }

    .definitions-grid {
      break-inside: auto;
    }

    /* Q&A cards: keep together */
    .element-qa-card {
      break-inside: avoid;
    }

    /* Quotes: keep together */
    .element-quote {
      break-inside: avoid;
    }

    /* Images: never split */
    .element-image-wrapper {
      break-inside: avoid;
    }

    /* Summary cards: keep together */
    .element-summary-card {
      break-inside: avoid;
    }

    /* Sections: allow free splitting */
    .element-section {
      break-inside: auto;
    }
  `;
}
