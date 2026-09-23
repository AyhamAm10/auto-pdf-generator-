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
      height: 1.5px;
      background: linear-gradient(to left, var(--secondary-color), var(--primary-color), var(--secondary-color));
      opacity: 0.85;
    }

    .footer-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: 5px 12mm 3px 12mm;
    }

    .footer-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 4px 14px;
      background-color: #FAFBFD;
      border: 1px solid #E2E8F0;
      border-radius: 20px;
      font-size: 11px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
    }

    .footer-lecture-badge {
      max-width: 44%;
      overflow: hidden;
    }

    .footer-lbl {
      color: #64748B;
      font-weight: 600;
      font-size: 10.5px;
      white-space: nowrap;
      flex-shrink: 0;
    }

    .footer-val-subject {
      font-weight: 700;
      font-size: 11.5px;
      color: var(--primary-color);
      white-space: nowrap;
    }

    .footer-val-lecture {
      font-weight: 700;
      font-size: 11.5px;
      color: var(--secondary-color);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    /* كبسولة رقم الصفحة في المركز */
    .page-capsule {
      background-color: var(--primary-color);
      color: #FFFFFF;
      padding: 4px 16px;
      border-radius: 20px;
      font-weight: 600;
      font-size: 11px;
      display: inline-flex;
      align-items: center;
      gap: 5px;
      box-shadow: 0 2px 4px rgba(27, 54, 93, 0.15);
    }

    .page-text-muted {
      color: rgba(255, 255, 255, 0.75);
      font-weight: 500;
      font-size: 10.5px;
    }

    .current-page-num {
      color: #FF4D4D;
      font-weight: 900;
      font-size: 12.5px;
      padding: 0 2px;
      text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
    }

    .total-page-num {
      font-weight: 700;
      color: #FFFFFF;
      font-size: 11.5px;
      padding: 0 1px;
    }
  `;
}
