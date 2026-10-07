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
    /* الترويسة العلوية الأكاديمية — الصفحة الأولى فقط                */
    /* ------------------------------------------------------------- */
    .lecture-header {
      position: relative;
      width: 100%;
      background: #FFFFFF;
      padding: 12px 12mm 2px 12mm;
      z-index: 10;
    }

    .header-corner-notch {
      display: none !important;
    }

    .header-inner {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      padding-top: 4px;
      padding-bottom: 8px;
    }

    /* الشعار الرسمي على اليمين */
    .header-brand-logo {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 8px;
    }

    .header-logo-img {
      height: 78px;
      max-width: 105px;
      object-fit: contain;
      filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.06));
    }

    /* الأعمدة الثلاثة للبيانات الأكاديمية */
    .header-meta-col {
      display: flex;
      flex-direction: column;
      gap: 5px;
      font-size: 14px;
      line-height: 1.45;
    }

    .header-meta-col.col-1 {
      flex: 0.95;
    }

    .header-meta-col.col-2 {
      flex: 1.15;
    }

    .header-meta-col.col-3 {
      flex: 1.35;
    }

    .meta-row {
      display: flex;
      align-items: baseline;
      gap: 7px;
    }

    .meta-label {
      color: #1E3A8A;
      font-weight: 700;
      white-space: nowrap;
      font-size: 14px;
    }

    .meta-value {
      color: var(--primary-color);
      font-weight: 700;
      font-size: 14px;
    }

    .meta-value.font-bold {
      font-weight: 800;
      font-size: 17px;
      color: var(--primary-color);
      letter-spacing: 0.2px;
    }

    .subject-type-badge {
      display: inline-flex;
      align-items: center;
      padding: 2px 10px;
      border-radius: 6px;
      font-size: 13.5px;
      font-weight: 800;
      color: #1D4ED8;
      background: #EFF6FF;
      border: 1.5px solid #93C5FD;
      box-shadow: 0 1px 2px rgba(29, 78, 216, 0.08);
    }

    .meta-doctor-row {
      margin-top: 1px;
    }

    .meta-doctor-val {
      color: #0284C7;
      font-weight: 800;
      font-size: 15px;
    }

    .meta-lecture {
      font-size: 14px;
      font-weight: 700;
      color: #1E293B;
      line-height: 1.35;
    }

    .page-count-val {
      color: var(--primary-color);
      font-weight: 800;
      font-size: 14.5px;
    }

    /* الفاصل السفلي للترويسة بألوان واضحة وغنية للطباعة */
    .header-bottom-divider {
      width: 100%;
      height: 3px;
      background: linear-gradient(to left, var(--primary-color) 0%, var(--secondary-color) 70%, #38BDF8 100%);
      margin-top: 8px;
      border-radius: 2px;
    }

    /* شريط علوي بسيط للصفحات التالية */
    .subsequent-top-bar {
      display: none;
    }
  `;
}
