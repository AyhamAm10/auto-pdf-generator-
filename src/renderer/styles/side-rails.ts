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
    /* الهوامش الجانبية الجمالية — تكرار على كل الصفحات              */
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
      width: 4px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    /* الشريط الجانبي الأيسر */
    .side-rail-left {
      position: fixed;
      left: 6mm;
      top: 25mm;
      bottom: 18mm;
      width: 4px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    /* الخط الرأسي الرفيع المتدرج */
    .side-rail-line {
      position: absolute;
      top: 6px;
      bottom: 6px;
      left: 50%;
      transform: translateX(-50%);
      width: 1.5px;
      background: linear-gradient(
        to bottom,
        transparent,
        var(--secondary-color) 10%,
        var(--primary-color) 50%,
        var(--secondary-color) 90%,
        transparent
      );
      opacity: 0.70;
    }

    /* النقاط والزخارف الميكروية في أعلى وأسفل الشريط */
    .side-rail-diamond {
      width: 4px;
      height: 4px;
      background: var(--secondary-color);
      transform: rotate(45deg);
      opacity: 0.85;
      flex-shrink: 0;
      border-radius: 0.5px;
    }

    .side-rail-diamond.diamond-bottom {
      background: var(--primary-color);
    }

    .side-rail-diamond.diamond-center {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) rotate(45deg);
      width: 3.5px;
      height: 3.5px;
      background: var(--secondary-color);
      opacity: 0.85;
      z-index: 2;
    }

    /* شريط التوثيق النصي الرأسي في الهامش الأيسر */
    .side-spine-text-container {
      position: fixed;
      left: 6mm;
      top: 50%;
      transform: translate(-50%, -50%) rotate(-90deg);
      transform-origin: center center;
      background: #FFFFFF;
      padding: 0 8px;
      white-space: nowrap;
      pointer-events: none;
      z-index: 4;
    }

    .side-spine-text {
      font-size: 8px;
      font-weight: 700;
      color: var(--primary-color);
      opacity: 0.50;
      letter-spacing: 1.5px;
      font-family: var(--font-family);
    }
  `;
}
