/**
 * ==============================================================================
 * Renderer Styles — Content Block CSS
 * ==============================================================================
 * 
 * Print-friendly academic styles modeled after university lecture handouts
 * (like "ذهبية مكتبة مدرسية.pdf").
 * Clean typography, vibrant print colors (Royal Blue + Emerald Green + Crimson Red),
 * line-height 1.5, static layout without excessive web cards.
 * ==============================================================================
 */

export function buildBlocksCss(): string {
  return `
    /* ------------------------------------------------------------- */
    /* منطقة المحتوى الداخلية                                         */
    /* ------------------------------------------------------------- */
    .page-content-area {
      position: relative;
      z-index: 5;
      padding: 4px 12mm 4px 12mm;
      display: block;
      font-size: var(--base-font-size);
      line-height: var(--base-line-height);
    }

    .content-first-page {
      /* Spacing handled by header */
    }

    .content-subsequent-page {
      padding-top: 6px;
    }

    /* ------------------------------------------------------------- */
    /* عناصر العنوان H1 (العنوان الأساسي الرئيسي للمحاضرة)            */
    /* ------------------------------------------------------------- */
    .element-h1-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 8px 0 6px 0;
      padding: 7px 0 8px 0;
      border-bottom: 2px solid var(--primary-color);
      border-top: 2px solid var(--primary-color);
      break-after: avoid;
      page-break-after: avoid;
    }

    .h1-centered-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3px;
      width: 100%;
    }

    .h1-title {
      font-size: 20px;
      font-weight: 800;
      color: var(--primary-color);
      line-height: 1.4;
      text-align: center;
      margin: 0;
    }

    .h1-badge {
      display: inline-block;
      color: var(--primary-color);
      font-size: 13px;
      font-weight: 700;
      margin-bottom: 2px;
    }

    /* ------------------------------------------------------------- */
    /* عناوين H2 الأكاديمية الرئيسية (أولاً: ، ثانياً: ...)            */
    /* ------------------------------------------------------------- */
    .element-h2-container {
      display: flex;
      align-items: center;
      gap: 7px;
      margin: 12px 0 5px 0;
      padding-bottom: 3px;
      border-bottom: 1.5px solid var(--primary-color);
      break-after: avoid;
      page-break-after: avoid;
    }

    .h2-prefix {
      color: var(--primary-color);
      font-weight: 800;
      font-size: 20px;
      display: inline-flex;
      align-items: center;
      flex-shrink: 0;
    }

    .h2-title {
      font-size: 20px;
      font-weight: 800;
      color: var(--primary-color);
      line-height: 1.4;
    }

    /* ------------------------------------------------------------- */
    /* عناوين H3 الأكاديمية الفرعية — لون أخضر حيوي بارز ونظيف        */
    /* ------------------------------------------------------------- */
    .element-h3-container {
      margin: 9px 0 3px 0;
      break-after: avoid;
      page-break-after: avoid;
    }

    .h3-title {
      font-size: 18px;
      font-weight: 800;
      color: var(--secondary-color);
      line-height: 1.4;
    }

    /* ------------------------------------------------------------- */
    /* الفقرات P الأكاديمية                                          */
    /* ------------------------------------------------------------- */
    .element-p {
      font-size: var(--base-font-size, 18px);
      line-height: var(--base-line-height);
      color: #111827;
      text-align: justify;
      text-justify: inter-word;
      margin: 3.5px 0;
    }

    /* تمييز العناصر والعناوين الفرعية داخل الفقرات بألوان طباعية حيوية متناسقة ومتباينة */
    .lead-num-title {
      color: var(--secondary-color);
      font-weight: 800;
      font-size: 18px;
    }

    .lead-letter-title {
      color: var(--secondary-color);
      font-weight: 800;
      font-size: 18px;
    }

    .lead-stage-title {
      color: var(--secondary-color);
      font-weight: 800;
      font-size: 18px;
    }

    .lead-subitem-title {
      color: var(--secondary-color);
      font-weight: 800;
      font-size: 18px;
    }

    .lead-bullet-title {
      color: var(--secondary-color);
      font-weight: 800;
      font-size: 18px;
    }

    .lead-note {
      color: var(--accent-color);
      font-weight: 800;
      font-size: 18px;
    }

    .p-highlighted {
      border-right: 3.5px solid #D97706;
      padding: 5px 10px;
      color: #111827;
      font-weight: 500;
      background: #FFFBEB;
    }

    /* مدخل تمهيدي / مقدمة المحاضرة */
    .p-intro {
      border-right: 4px solid var(--primary-color);
      padding: 8px 12px;
      font-size: 16px;
      line-height: 1.6;
      color: #0F172A;
      margin: 5px 0 8px 0;
      background: #EFF6FF;
      border-radius: 2px;
    }

    .intro-prefix-badge {
      color: var(--primary-color);
      font-weight: 800;
      font-size: 16.5px;
      margin-left: 5px;
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
      border-top: 1px dashed #94A3B8;
      background: transparent;
    }

    .element-line-dotted {
      border-top: 1px dotted #94A3B8;
      background: transparent;
    }

    .element-line-gradient {
      height: 1.5px;
      background: linear-gradient(to left, var(--primary-color), var(--secondary-color), transparent);
    }

    .element-line-icon-wrapper {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
    }

    .line-segment {
      flex: 1;
      height: 1px;
      background-color: #CBD5E1;
    }

    .line-icon-badge {
      color: var(--primary-color);
      font-size: 11px;
    }

    /* ------------------------------------------------------------- */
    /* القوائم List                                                   */
    /* ------------------------------------------------------------- */
    .element-list {
      list-style: none;
      padding: 0;
      margin: 3px 0;
      display: flex;
      flex-direction: column;
      gap: 3px;
    }

    .list-item {
      display: flex;
      flex-direction: column;
      gap: 2px;
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
      font-size: 12px;
      line-height: 1;
      font-weight: 800;
    }

    .list-number {
      display: inline-block;
      min-width: 22px;
      color: var(--secondary-color);
      font-size: 14.5px;
      font-weight: 800;
      flex-shrink: 0;
      text-align: right;
    }

    .list-check {
      color: var(--secondary-color);
      font-weight: 800;
      font-size: 13px;
    }

    .list-alpha {
      font-weight: 800;
      color: var(--secondary-color);
    }

    .sub-list {
      list-style: circle;
      padding-right: 20px;
      display: flex;
      flex-direction: column;
      gap: 2px;
      font-size: 13px;
      color: #333333;
      margin-top: 2px;
    }

    /* ------------------------------------------------------------- */
    /* صناديق التنبيه الأكاديمية — تصميم ورقي بستاتيك بسيط           */
    /* ------------------------------------------------------------- */
    .element-callout {
      padding: 7px 12px;
      display: flex;
      flex-direction: column;
      gap: 3px;
      font-size: var(--base-font-size);
      line-height: var(--base-line-height);
      break-inside: avoid;
      page-break-inside: avoid;
      margin: 5px 0;
      border-radius: 2px;
    }

    .callout-header {
      display: flex;
      align-items: center;
      gap: 7px;
      font-weight: 800;
      font-size: 14px;
      padding-bottom: 2px;
    }

    .callout-icon {
      font-size: 13px;
      line-height: 1;
    }

    .callout-body {
      font-size: var(--base-font-size);
      line-height: var(--base-line-height);
      color: #111827;
    }

    .callout-body p {
      margin: 2px 0;
      text-align: justify;
    }

    /* ملاحظة — أزرق */
    .callout-note {
      background: #EFF6FF;
      border-right: 4px solid var(--primary-color);
      color: #111827;
    }

    .callout-note .callout-header {
      color: var(--primary-color);
    }

    /* تنبيه هام — أحمر */
    .callout-important {
      background: #FEF2F2;
      border-right: 4px solid var(--accent-color);
      color: #111827;
    }

    .callout-important .callout-header {
      color: var(--accent-color);
    }

    /* سؤال / فكرة امتحانية — ذهبي */
    .callout-exam_tip {
      background: #FFFBEB;
      border-right: 4px solid #D97706;
      color: #111827;
    }

    .callout-exam_tip .callout-header {
      color: #B45309;
    }

    /* تعريف ومفهوم — بنفسجي */
    .callout-definition {
      background: #F5F3FF;
      border-right: 4px solid #7C3AED;
      color: #111827;
    }

    .callout-definition .callout-header {
      color: #6D28D9;
    }

    /* إضاءة علمية — أخضر */
    .callout-info {
      background: #F0FDF4;
      border-right: 4px solid var(--secondary-color);
      color: #111827;
    }

    .callout-info .callout-header {
      color: var(--secondary-color);
    }

    /* ------------------------------------------------------------- */
    /* الجداول الأكاديمية — ترويسة ملونة وحدود واضحة للطباعة         */
    /* عدم فصل عنوان الجدول عن محتواه إطلاقاً                         */
    /* ------------------------------------------------------------- */
    .element-table-wrapper {
      width: 100%;
      margin: 8px 0;
      border: 1.5px solid var(--primary-color);
      background: #FFFFFF;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .table-caption {
      background: var(--primary-color);
      color: #FFFFFF;
      font-weight: 800;
      padding: 6px 12px;
      font-size: 13.5px;
      text-align: center;
      break-after: avoid;
      page-break-after: avoid;
    }

    .element-table {
      width: 100%;
      border-collapse: collapse;
      font-size: 13px;
      line-height: 1.45;
      table-layout: auto;
      background: #FFFFFF;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .element-table th {
      background: var(--primary-color);
      color: #FFFFFF !important;
      font-weight: 800;
      padding: 6px 9px;
      text-align: center;
      border: 1px solid #FFFFFF;
      word-wrap: break-word;
      overflow-wrap: break-word;
      font-size: 13px;
    }

    .element-table td {
      padding: 5px 9px;
      border: 1px solid #94A3B8;
      color: #111827;
      word-wrap: break-word;
      overflow-wrap: break-word;
      min-width: 40px;
    }

    .element-table tr.tr-odd {
      background-color: #FFFFFF;
    }

    .element-table tr.tr-even {
      background-color: #F0F7FF;
    }

    /* ------------------------------------------------------------- */
    /* المصطلحات Definitions                                          */
    /* ------------------------------------------------------------- */
    .definitions-main-title {
      font-weight: 800;
      color: var(--primary-color);
      font-size: 14px;
      margin-bottom: 6px;
    }

    .definitions-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      align-items: start;
    }

    .definition-card {
      background: #FFFFFF;
      border: 1px solid #CBD5E1;
      border-right: 3.5px solid var(--secondary-color);
      padding: 7px 10px;
      display: flex;
      flex-direction: column;
      gap: 3px;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .def-term-badge {
      font-weight: 800;
      color: var(--primary-color);
      font-size: 13px;
    }

    .def-body {
      font-size: 12.5px;
      line-height: 1.45;
      color: #333333;
    }

    .def-example {
      margin-top: 3px;
      background: #F8F8F8;
      border: 1px solid #DDDDDD;
      padding: 3px 7px;
      font-size: 12px;
      color: #333333;
      line-height: 1.35;
      display: flex;
      align-items: center;
      gap: 5px;
    }

    .example-tag {
      color: var(--secondary-color);
      border: 1px solid #86EFAC;
      padding: 1px 6px;
      font-weight: 800;
      font-size: 11px;
      flex-shrink: 0;
    }

    /* ------------------------------------------------------------- */
    /* الأسئلة والأجوبة Q&A (المواد المؤتمتة) — تصميم ورقي أكاديمي  */
    /* ------------------------------------------------------------- */
    .element-qa-card {
      background: #FAFAFA;
      border: 1px solid #CBD5E1;
      border-right: 4px solid var(--primary-color);
      padding: 9px 12px;
      display: flex;
      flex-direction: column;
      gap: 6px;
      break-inside: avoid;
      page-break-inside: avoid;
      margin: 5px 0;
    }

    .qa-question-header {
      display: flex;
      align-items: flex-start;
      gap: 7px;
      font-weight: 800;
      font-size: 14px;
    }

    .qa-question-text {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .qa-q-line {
      line-height: 1.5;
      color: #0F172A;
    }

    .qa-badge-q {
      display: inline-block;
      color: var(--primary-color);
      font-size: 13.5px;
      font-weight: 800;
      flex-shrink: 0;
      min-width: 20px;
    }

    .qa-tag {
      margin-right: auto;
      color: var(--primary-color);
      font-size: 11px;
      font-weight: 700;
      padding: 1px 6px;
      border: 1px solid #93C5FD;
    }

    .qa-options-list {
      display: flex;
      flex-direction: column;
      gap: 4px;
      padding-right: 22px;
    }

    .qa-option-item {
      display: flex;
      align-items: flex-start;
      gap: 7px;
      font-size: 13px;
      padding: 4px 8px;
      border: 1px solid #E2E8F0;
      background: #FFFFFF;
      color: #333333;
      margin-bottom: 1px;
    }

    .option-correct {
      background: #F0FDF4 !important;
      color: #065F46 !important;
      font-weight: 700;
      border: 1.5px solid var(--secondary-color) !important;
    }

    .option-marker {
      display: inline-block;
      min-width: 18px;
      color: #333333;
      font-size: 11px;
      font-weight: 800;
      flex-shrink: 0;
    }

    .option-correct .option-marker {
      color: var(--secondary-color);
    }

    .option-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 1px;
    }

    .option-text {
      line-height: 1.4;
    }

    .correct-badge {
      margin-right: auto;
      font-size: 11px;
      font-weight: 800;
      color: var(--secondary-color);
      padding: 1px 6px;
      align-self: center;
    }

    .qa-answer-box {
      background: #EFF6FF;
      border-right: 3px solid var(--primary-color);
      padding: 5px 9px;
      font-size: 13px;
      line-height: 1.4;
    }

    .qa-answer-title {
      font-weight: 700;
      margin-bottom: 2px;
    }

    .qa-badge-a {
      display: inline-block;
      color: var(--secondary-color);
      font-size: 12px;
      font-weight: 800;
      margin-left: 3px;
    }

    .qa-explanation-box {
      font-size: 12.5px;
      color: #444444;
      padding: 3px 8px;
      border-right: 2px solid #CBD5E1;
    }

    .exp-title {
      font-weight: 700;
      color: #333333;
    }

    /* ------------------------------------------------------------- */
    /* الاقتباسات Quotes                                              */
    /* ------------------------------------------------------------- */
    .element-quote {
      position: relative;
      background: #F8FAFC;
      border: 1px solid #E2E8F0;
      border-right: 3.5px solid var(--primary-color);
      padding: 7px 12px;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .quote-text {
      font-size: 13px;
      line-height: 1.5;
      color: #333333;
    }

    .quote-author {
      font-size: 11.5px;
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
      page-break-inside: avoid;
    }

    .lecture-img {
      max-width: 100%;
      height: auto;
    }

    .image-caption {
      font-size: 12px;
      color: #555555;
      text-align: center;
    }

    /* ------------------------------------------------------------- */
    /* الخلاصة Summary                                                */
    /* ------------------------------------------------------------- */
    .element-summary-card {
      background: #EFF6FF;
      border: 1px solid #BFDBFE;
      border-right: 4px solid var(--secondary-color);
      padding: 9px 12px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .summary-header {
      display: flex;
      align-items: center;
      gap: 5px;
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
      gap: 2px;
    }

    .summary-item {
      display: flex;
      align-items: baseline;
      gap: 5px;
      font-size: 13px;
      line-height: 1.4;
    }

    .summary-check {
      color: var(--secondary-color);
      font-weight: 800;
    }

    /* ------------------------------------------------------------- */
    /* الأقسام Section                                                */
    /* ------------------------------------------------------------- */
    .element-section {
      display: block;
    }

    .section-container-title {
      font-weight: 800;
      color: var(--primary-color);
      font-size: 14px;
    }

    .section-body {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    /* ------------------------------------------------------------- */
    /* بطاقات الترجمة الثنائية (إنكليزي ومترجم للعربية)               */
    /* ------------------------------------------------------------- */
    .element-bilingual-card {
      background: #FFFFFF;
      border: 1px solid #CBD5E1;
      margin: 4px 0;
      break-inside: avoid;
      page-break-inside: avoid;
    }

    .bilingual-en-section {
      background: #F8FAFC;
      padding: 7px 11px;
      direction: ltr;
      text-align: left;
      border-left: 3px solid var(--primary-color);
    }

    .bilingual-meta-bar {
      margin-bottom: 3px;
    }

    .bilingual-badge-en {
      display: inline-block;
      font-size: 10px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      color: var(--primary-color);
    }

    .bilingual-en-text {
      font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
      font-size: 13px;
      line-height: 1.45;
      color: #111827;
      font-weight: 500;
    }

    .bilingual-ar-section {
      background: #FFFFFF;
      padding: 7px 11px;
      direction: rtl;
      text-align: right;
      border-top: 1px solid #E2E8F0;
      border-right: 3px solid var(--secondary-color);
    }

    .bilingual-ar-header {
      margin-bottom: 3px;
    }

    .bilingual-badge-ar {
      display: inline-block;
      font-size: 10.5px;
      font-weight: 700;
      color: var(--secondary-color);
    }

    .bilingual-ar-text {
      font-family: var(--theme-font-family);
      font-size: 12.5px;
      line-height: 1.45;
      color: #333333;
    }

    .bilingual-notes {
      margin-top: 4px;
      background: #FFFBEB;
      border-top: 1px solid #FDE68A;
      padding: 3px 7px;
      font-size: 11.5px;
      color: #92400E;
      line-height: 1.35;
    }

    .notes-icon {
      font-weight: 700;
    }
  `;
}
