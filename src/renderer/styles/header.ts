/**
 * ==============================================================================
 * Renderer Styles — Header CSS
 * ==============================================================================
 * 
 * First-page-only academic header with logo, metadata columns, and divider.
 * Matches the existing design exactly.
 * ==============================================================================
 */

export function buildHeaderCss(): string {
  return `
    /* ------------------------------------------------------------- */
    /* الترويسة العلوية — الصفحة الأولى فقط                           */
    /* ------------------------------------------------------------- */
    .lecture-header {
      position: relative;
      width: 100%;
      background: #FFFFFF;
      padding: 8px 12mm 0 12mm;
      z-index: 10;
    }

    /* الزاوية المائلة في أعلى اليسار */
    .header-corner-notch {
      position: absolute;
      top: 0;
      left: 0;
      width: 60px;
      height: 24px;
      background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
      clip-path: polygon(0 0, 100% 0, 65% 100%, 0 100%);
      opacity: 0.9;
    }

    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      padding-top: 4px;
      padding-bottom: 6px;
    }

    /* الشعار الرسمي على اليمين */
    .header-brand-logo {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 5px;
    }

    .header-logo-img {
      height: 62px;
      max-width: 88px;
      object-fit: contain;
      filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.06));
    }

    /* الأعمدة الثلاثة للبيانات */
    .header-meta-col {
      display: flex;
      flex-direction: column;
      gap: 3px;
      font-size: 12.5px;
      line-height: 1.35;
    }

    .header-meta-col.col-1 {
      flex: 1.15;
    }

    .header-meta-col.col-2 {
      flex: 1.15;
    }

    .header-meta-col.col-3 {
      flex: 0.95;
    }

    .meta-row {
      display: flex;
      align-items: baseline;
      gap: 6px;
    }

    .meta-label {
      color: #64748B;
      font-weight: 600;
      white-space: nowrap;
      font-size: 12.5px;
    }

    .meta-value {
      color: var(--primary-color);
      font-weight: 700;
      font-size: 12.5px;
    }

    .meta-value.font-bold {
      font-weight: 800;
    }

    .page-count-val {
      color: var(--primary-color);
      font-weight: 800;
    }

    /* الفاصل السفلي للترويسة */
    .header-bottom-divider {
      position: relative;
      width: 100%;
      height: 4px;
      margin-top: 4px;
    }

    .divider-main-line {
      width: 100%;
      height: 2px;
      background-color: var(--primary-color);
    }

    .divider-notch-tab {
      position: absolute;
      top: -2px;
      left: 10%;
      width: 50px;
      height: 4px;
      background: var(--secondary-color);
      border-radius: 2px;
    }

    /* شريط علوي بسيط للصفحات التالية */
    .subsequent-top-bar {
      position: relative;
      width: 100%;
      height: 18px;
      z-index: 10;
    }

    .subsequent-corner-notch {
      position: absolute;
      top: 0;
      left: 0;
      width: 48px;
      height: 15px;
      background: linear-gradient(135deg, var(--secondary-color), var(--primary-color));
      clip-path: polygon(0 0, 100% 0, 65% 100%, 0 100%);
      opacity: 0.85;
    }
  `;
}
