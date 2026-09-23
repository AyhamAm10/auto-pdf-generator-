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
    /* فوتر الصفحة بتصميم هندسي راقٍ متناسق مع الترويسة العلوية      */
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

    .footer-divider {
      width: 100%;
      height: 2px;
      background-color: var(--primary-color);
      position: relative;
    }

    .footer-divider-notch {
      position: absolute;
      top: -1px;
      left: 10%;
      width: 45px;
      height: 4px;
      background-color: var(--secondary-color);
      border-radius: 2px;
    }

    .footer-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 4px 12mm 2px 12mm;
    }

    .footer-badge {
      display: inline-flex;
      align-items: center;
      gap: 5px;
      padding: 3px 10px;
      background-color: var(--light-bg);
      border: 1px solid var(--border-color);
      border-radius: 6px;
      font-size: 11px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
    }

    .footer-subject-badge {
      border-right: 3px solid var(--primary-color);
    }

    .footer-lecture-badge {
      border-left: 3px solid var(--secondary-color);
      max-width: 44%;
    }

    .footer-lbl {
      color: var(--primary-color);
      font-weight: 700;
      font-size: 11px;
      white-space: nowrap;
      flex-shrink: 0;
      opacity: 0.95;
    }

    .footer-val {
      font-weight: 800;
      font-size: 11.5px;
      color: var(--primary-color);
    }

    .lecture-title-val {
      color: var(--secondary-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* كبسولة رقم الصفحة في المركز */
    .page-capsule {
      background-color: var(--primary-color);
      color: #FFFFFF;
      padding: 3px 15px;
      border-radius: 14px;
      font-weight: 700;
      font-size: 11px;
      display: inline-flex;
      align-items: center;
      gap: 4px;
      box-shadow: 0 1px 3px rgba(27, 54, 93, 0.2);
    }

    .current-page-num {
      color: #FF4D4D;
      font-weight: 900;
      font-size: 12.5px;
      padding: 0 2px;
      text-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
    }

    .total-page-num {
      font-weight: 800;
      color: #FFFFFF;
      font-size: 11.5px;
      padding: 0 1px;
    }

    .page-text {
      color: #E2E8F0;
      font-weight: 600;
    }
  `;
}
