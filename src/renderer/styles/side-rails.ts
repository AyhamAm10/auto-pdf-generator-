/**
 * ==============================================================================
 * Renderer Styles — Side Rails CSS
 * ==============================================================================
 * 
 * Elegant vertical side rails and micro running spine for the empty margins.
 * Displays on every page via fixed positioning, matching the visual identity.
 * ==============================================================================
 */

export function buildSideRailsCss(): string {
  return `
    /* ------------------------------------------------------------- */
    /* الهوامش الجانبية الأكاديمية — خط تأطير ناعم ونظيف             */
    /* ------------------------------------------------------------- */
    .side-rails-container {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      z-index: 2;
    }

    /* الشريط الجانبي الأيمن */
    .side-rail-right {
      position: fixed;
      right: 6mm;
      top: 25mm;
      bottom: 18mm;
      width: 1.5px;
      background: linear-gradient(180deg, var(--secondary-color) 0%, #BAE6FD 15%, #BAE6FD 85%, var(--primary-color) 100%);
      opacity: 0.65;
    }

    /* الشريط الجانبي الأيسر */
    .side-rail-left {
      position: fixed;
      left: 6mm;
      top: 25mm;
      bottom: 18mm;
      width: 1.5px;
      background: linear-gradient(180deg, var(--secondary-color) 0%, #BAE6FD 15%, #BAE6FD 85%, var(--primary-color) 100%);
      opacity: 0.65;
    }

    .side-rail-line,
    .side-rail-diamond,
    .side-spine-text-container {
      display: none !important;
    }
  `;
}
