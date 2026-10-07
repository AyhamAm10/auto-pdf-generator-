/**
 * ==============================================================================
 * Renderer Styles — Footer CSS
 * ==============================================================================
 * 
 * Footer ribbon with 3 beveled segments: subject, page number, lecture.
 * Matches the existing design with clip-path bevels.
 * ==============================================================================
 */

export function buildFooterCss(): string {
  return `
    /* ------------------------------------------------------------- */
    /* فوتر الصفحة الأكاديمي البسيط                                  */
    /* ------------------------------------------------------------- */
    .lecture-footer {
      position: relative;
      width: 100%;
      z-index: 10;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      margin-top: auto;
    }

    .footer-container {
      width: 100%;
      padding: 0 12mm 4px 12mm;
      box-sizing: border-box;
    }

    .footer-inner {
      width: 100%;
      border-top: 1.5px solid var(--primary-color);
      padding-top: 5px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 11px;
      line-height: 1.3;
    }

    .footer-text {
      color: #334155;
      font-size: 11px;
      font-weight: 600;
      white-space: nowrap;
    }

    .footer-page {
      color: var(--primary-color);
      font-size: 11.5px;
      font-weight: 800;
      white-space: nowrap;
    }
  `;
}
