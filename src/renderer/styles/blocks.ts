/**
 * ==============================================================================
 * Renderer Styles — Content Block CSS
 * ==============================================================================
 * 
 * All styles for content blocks (headings, paragraphs, lists, callouts, etc.)
 * Exact reproduction of the existing visual design.
 * ==============================================================================
 */

export function buildBlocksCss(): string {
  return `
    /* ------------------------------------------------------------- */
    /* منطقة المحتوى الداخلي                                         */
    /* ------------------------------------------------------------- */
    .page-content-area {
      position: relative;
      z-index: 5;
      padding: 8px 12mm 6px 12mm;
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: var(--base-font-size);
      line-height: var(--base-line-height);
    }

    .content-first-page {
      /* No extra padding needed — header provides spacing */
    }

    .content-subsequent-page {
      padding-top: 6px;
    }

    /* ------------------------------------------------------------- */
    /* عناصر العنوان H1                                               */
    /* ------------------------------------------------------------- */
    .element-h1-container {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 4px 0 6px 0;
      border-bottom: 2px solid var(--border-color, #E2E8F0);
      padding-bottom: 5px;
      break-after: avoid;
    }

    .h1-line-accent {
      width: 6px;
      height: 24px;
      background: linear-gradient(to bottom, var(--primary-color), var(--secondary-color));
      border-radius: 3px;
      flex-shrink: 0;
    }

    .h1-content {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-wrap: wrap;
    }

    .h1-title {
      font-size: 18px;
      font-weight: 800;
      color: var(--primary-color);
      line-height: 1.25;
    }

    .h1-badge {
      background-color: var(--light-bg);
      color: var(--primary-color);
      border: 1px solid var(--border-color);
      padding: 2px 8px;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 700;
    }

    /* ------------------------------------------------------------- */
    /* عناوين H2                                                     */
    /* ------------------------------------------------------------- */
    .element-h2-container {
      display: flex;
      align-items: center;
      gap: 8px;
      margin: 4px 0 2px 0;
      break-after: avoid;
    }

    .h2-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: var(--secondary-color);
      flex-shrink: 0;
    }

    .h2-prefix {
      color: var(--secondary-color);
      font-weight: 800;
      font-size: 15px;
    }

    .h2-title {
      font-size: 15px;
      font-weight: 700;
      color: var(--heading-color);
      line-height: 1.25;
    }

    /* ------------------------------------------------------------- */
    /* عناوين H3                                                     */
    /* ------------------------------------------------------------- */
    .element-h3-container {
      margin: 2px 0;
      break-after: avoid;
    }

    .h3-title {
      font-size: 14px;
      font-weight: 700;
      color: #334155;
      line-height: 1.25;
    }

    /* ------------------------------------------------------------- */
    /* الفقرات P                                                     */
    /* ------------------------------------------------------------- */
    .element-p {
      font-size: var(--base-font-size);
      line-height: var(--base-line-height);
      color: #1E293B;
      text-align: justify;
      text-justify: inter-word;
      margin: 0;
    }

    .p-highlighted {
      background: var(--light-bg);
      padding: 6px 10px;
      border-radius: 6px;
      border-right: 3px solid var(--secondary-color);
    }

    /* ------------------------------------------------------------- */
    /* الفواصل Line / Divider                                        */
    /* ------------------------------------------------------------- */
    .element-line {
      border: none;
      height: 1px;
      background-color: #CBD5E1;
      width: 100%;
    }

    .element-line-dashed {
      border-top: 1.5px dashed #94A3B8;
      background: transparent;
    }

    .element-line-dotted {
      border-top: 1.5px dotted #94A3B8;
      background: transparent;
    }

    .element-line-gradient {
      height: 2px;
      background: linear-gradient(to left, transparent, var(--secondary-color), transparent);
    }

    .element-line-icon-wrapper {
      display: flex;
      align-items: center;
      gap: 12px;
      width: 100%;
    }

    .line-segment {
      flex: 1;
      height: 1px;
      background-color: #CBD5E1;
    }

    .line-icon-badge {
      color: var(--secondary-color);
      font-size: 11px;
    }

    /* ------------------------------------------------------------- */
    /* القوائم List                                                   */
    /* ------------------------------------------------------------- */
    .element-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .list-item {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .list-item-content {
      display: flex;
      align-items: baseline;
      gap: 7px;
      font-size: var(--base-font-size);
      line-height: var(--base-line-height);
    }

    .list-bullet {
      color: var(--secondary-color);
      font-size: 8px;
      line-height: 1;
    }

    .list-number {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      background: var(--light-bg);
      color: var(--primary-color);
      border: 1px solid var(--border-color);
      border-radius: 50%;
      font-size: 11px;
      font-weight: 700;
      flex-shrink: 0;
    }

    .list-check {
      color: #059669;
      font-weight: bold;
      font-size: 13px;
    }

    .list-alpha {
      font-weight: 700;
      color: var(--secondary-color);
    }

    .sub-list {
      list-style: circle;
      padding-right: 22px;
      display: flex;
      flex-direction: column;
      gap: 3px;
      font-size: 13px;
      color: #475569;
      margin-top: 2px;
    }

    /* ------------------------------------------------------------- */
    /* صناديق التنبيه Callout                                         */
    /* ------------------------------------------------------------- */
    .element-callout {
      border-radius: 8px;
      padding: 8px 12px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      font-size: 13px;
      line-height: 1.36;
      break-inside: avoid;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
    }

    .callout-header {
      display: flex;
      align-items: center;
      gap: 6px;
      font-weight: 700;
      font-size: 13px;
    }

    .callout-body {
      font-size: 13px;
      line-height: 1.36;
      color: #334155;
    }

    .callout-note {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-right: 3px solid var(--secondary-color);
      color: #1E293B;
    }

    .callout-note .callout-title {
      color: var(--primary-color);
    }

    .callout-important {
      background: #FEF2F2;
      border: 1px solid #FECDD3;
      border-right: 3px solid #EF4444;
    }

    .callout-important .callout-title {
      color: #B91C1C;
    }

    .callout-exam_tip {
      background: #FFFBEB;
      border: 1px solid #FDE68A;
      border-right: 3px solid #F59E0B;
    }

    .callout-exam_tip .callout-title {
      color: #B45309;
    }

    .callout-definition {
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-right: 3px solid var(--primary-color);
    }

    .callout-definition .callout-title {
      color: var(--primary-color);
    }

    .callout-info {
      background: var(--light-bg);
      border: 1px solid var(--border-color);
      border-right: 3px solid var(--secondary-color);
      color: #1E293B;
    }

    .callout-info .callout-title {
      color: var(--primary-color);
    }

    /* ------------------------------------------------------------- */
    /* الجداول Table                                                  */
    /* ------------------------------------------------------------- */
    .element-table-wrapper {
      width: 100%;
      margin: 2px 0;
      border-radius: 6px;
      border: 1px solid #CBD5E1;
      overflow: visible;
    }

    .table-caption {
      background: #F1F5F9;
      color: #1E293B;
      font-weight: 700;
      padding: 4px 10px;
      font-size: 12.5px;
      border-bottom: 1px solid #CBD5E1;
    }

    .element-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
      line-height: 1.25;
      table-layout: auto;
    }

    .element-table th {
      background: var(--primary-color);
      color: #FFFFFF;
      font-weight: 700;
      padding: 6px 8px;
      text-align: right;
      border: 1px solid var(--primary-color);
      word-wrap: break-word;
      overflow-wrap: break-word;
    }

    .element-table td {
      padding: 5px 8px;
      border: 1px solid #E2E8F0;
      color: #1E293B;
      word-wrap: break-word;
      overflow-wrap: break-word;
      min-width: 40px;
    }

    .element-table tr.tr-odd {
      background-color: #F8FAFC;
    }

    .element-table tr.tr-even {
      background-color: #FFFFFF;
    }

    /* ------------------------------------------------------------- */
    /* المصطلحات Definitions                                          */
    /* ------------------------------------------------------------- */
    .definitions-main-title {
      font-weight: 700;
      color: var(--primary-color);
      font-size: 14px;
      margin-bottom: 6px;
    }

    .definitions-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 9px;
      align-items: start;
    }

    .definition-card {
      background: #FAFBFD;
      border: 1px solid #E2E8F0;
      border-radius: 9px;
      padding: 8px 11px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
      break-inside: avoid;
    }

    .def-term-badge {
      font-weight: 700;
      color: var(--primary-color);
      font-size: 13px;
    }

    .def-body {
      font-size: 12.5px;
      line-height: 1.35;
      color: #475569;
    }

    .def-example {
      margin-top: 4px;
      background: #F1F5F9;
      border: 1px solid #E2E8F0;
      border-radius: 6px;
      padding: 4px 8px;
      font-size: 11.5px;
      color: #475569;
      line-height: 1.32;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .example-tag {
      background: #ECFDF5;
      color: #047857;
      border: 1px solid #A7F3D0;
      padding: 1px 6px;
      border-radius: 4px;
      font-weight: 700;
      font-size: 10.5px;
      flex-shrink: 0;
    }

    /* ------------------------------------------------------------- */
    /* الأسئلة والأجوبة Q&A                                           */
    /* ------------------------------------------------------------- */
    .element-qa-card {
      background: #FAFBFD;
      border: 1px solid #E2E8F0;
      border-radius: 9px;
      padding: 8px 12px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
      display: flex;
      flex-direction: column;
      gap: 6px;
      break-inside: avoid;
    }

    .qa-question-header {
      display: flex;
      align-items: baseline;
      gap: 8px;
      font-weight: 700;
      font-size: 13.5px;
    }

    .qa-badge-q {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: var(--primary-color);
      color: #FFFFFF;
      width: 20px;
      height: 20px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: 800;
      flex-shrink: 0;
    }

    .qa-tag {
      margin-right: auto;
      background: #F1F5F9;
      color: #475569;
      font-size: 11px;
      padding: 1px 6px;
      border-radius: 4px;
    }

    .qa-options-list {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding-right: 24px;
    }

    .qa-option-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 13px;
      padding: 3px 8px;
      border-radius: 4px;
    }

    .option-correct {
      background: #ECFDF5;
      color: #065F46;
      font-weight: 700;
      border: 1px solid #A7F3D0;
    }

    .option-marker {
      font-weight: 700;
    }

    .correct-badge {
      margin-right: auto;
      font-size: 11px;
      color: #059669;
    }

    .qa-answer-box {
      background: var(--light-bg);
      border-radius: 6px;
      padding: 6px 9px;
      font-size: 13px;
      line-height: 1.25;
    }

    .qa-answer-title {
      font-weight: 700;
      margin-bottom: 3px;
    }

    .qa-badge-a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: #059669;
      color: #FFFFFF;
      width: 18px;
      height: 18px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 800;
      margin-left: 4px;
    }

    .qa-explanation-box {
      font-size: 12.5px;
      color: #475569;
      padding: 4px 9px;
    }

    .exp-title {
      font-weight: 700;
      color: #334155;
    }

    /* ------------------------------------------------------------- */
    /* الاقتباسات Quotes                                              */
    /* ------------------------------------------------------------- */
    .element-quote {
      position: relative;
      background: #F8FAFC;
      border-right: 4px solid var(--primary-color);
      padding: 8px 14px;
      border-radius: 0 6px 6px 0;
      font-style: italic;
      break-inside: avoid;
    }

    .quote-text {
      font-size: 13.5px;
      line-height: 1.25;
      color: #334155;
    }

    .quote-author {
      font-size: 12px;
      font-weight: 700;
      color: var(--primary-color);
      margin-top: 4px;
      text-align: left;
    }

    /* ------------------------------------------------------------- */
    /* الصور Images                                                   */
    /* ------------------------------------------------------------- */
    .element-image-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      break-inside: avoid;
    }

    .lecture-img {
      max-width: 100%;
      height: auto;
      border-radius: 4px;
    }

    .image-caption {
      font-size: 12px;
      color: #64748B;
      text-align: center;
    }

    /* ------------------------------------------------------------- */
    /* الخلاصة Summary                                                */
    /* ------------------------------------------------------------- */
    .element-summary-card {
      background: #FAFBFD;
      border: 1px solid #E2E8F0;
      border-radius: 9px;
      padding: 8px 12px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
      break-inside: avoid;
    }

    .summary-header {
      display: flex;
      align-items: center;
      gap: 6px;
      font-weight: 800;
      color: var(--primary-color);
      font-size: 13.5px;
    }

    .summary-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .summary-item {
      display: flex;
      align-items: baseline;
      gap: 6px;
      font-size: 13px;
      line-height: 1.25;
    }

    .summary-check {
      color: #059669;
      font-weight: 800;
    }

    /* ------------------------------------------------------------- */
    /* الأقسام Section                                                */
    /* ------------------------------------------------------------- */
    .element-section {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .section-container-title {
      font-weight: 800;
      color: var(--primary-color);
      font-size: 14px;
    }

    .section-body {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  `;
}
