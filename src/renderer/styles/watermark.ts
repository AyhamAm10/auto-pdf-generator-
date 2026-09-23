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
      top: 52%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 380px;
      height: 380px;
      display: flex;
      align-items: center;
      justify-content: center;
      pointer-events: none;
      z-index: 1;
      opacity: 0.065;
    }

    .watermark-img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
      filter: grayscale(80%);
    }
  `;
}
