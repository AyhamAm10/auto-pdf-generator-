/**
 * ==============================================================================
 * Renderer Styles — Watermark CSS
 * ==============================================================================
 * 
 * Centered transparent watermark overlay that appears on every page.
 * ==============================================================================
 */

export function buildWatermarkCss(): string {
  return `
    /* ------------------------------------------------------------- */
    /* العلامة المائية الشفافة في منتصف الصفحة                        */
    /* ------------------------------------------------------------- */
    .watermark-overlay {
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 52%;
      max-width: 380px;
      height: auto;
      max-height: 50vh;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      z-index: 1;
      opacity: 0.20;
    }

    .watermark-img {
      width: 100%;
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  `;
}
