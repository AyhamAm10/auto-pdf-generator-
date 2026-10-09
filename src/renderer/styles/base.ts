/**
 * ==============================================================================
 * Renderer Styles — Base CSS
 * ==============================================================================
 * 
 * CSS reset, page setup, typography, direction, and print rules.
 * These are the foundational styles that all other styles build upon.
 * ==============================================================================
 */

export function buildBaseCss(): string {
  return `
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800;900&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&family=Readex+Pro:wght@300;400;500;600;700&display=swap');

    :root {
      --primary-color: var(--theme-primary, #1B365D);
      --secondary-color: var(--theme-secondary, #0284C7);
      --accent-color: var(--theme-accent, #DC2626);
      --light-bg: var(--theme-light-bg, #F0F7FF);
      --border-color: var(--theme-border, #CBD5E1);
      --heading-color: var(--theme-heading, #1B365D);
      --font-family: var(--theme-font-family, 'Simplified Arabic', Arial, Tahoma, sans-serif);
      --base-font-size: var(--theme-font-size, 18px);
      --base-line-height: var(--theme-line-height, 1.5);
    }

    @page {
      size: A4 portrait;
      margin-top: 8mm;
      margin-bottom: 16mm;
      margin-left: 0mm;
      margin-right: 0mm;
    }

    @page :first {
      margin-top: 0mm;
      margin-bottom: 16mm;
    }

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      -webkit-print-color-adjust: exact !important;
      print-color-adjust: exact !important;
    }

    html, body {
      margin: 0;
      padding: 0;
      background-color: #FFFFFF;
      font-family: var(--font-family);
      font-size: var(--base-font-size);
      line-height: var(--base-line-height);
      direction: rtl;
      color: #1E293B;
      -webkit-font-smoothing: antialiased;
    }

    /* Single continuous content container — no fixed page heights */
    .document-root {
      width: 210mm;
      margin: 0 auto;
      background: #FFFFFF;
    }

    @media print {
      body {
        background: transparent;
      }
      .document-root {
        margin: 0;
      }
    }
  `;
}
