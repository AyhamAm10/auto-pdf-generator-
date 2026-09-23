/**
 * ==============================================================================
 * Renderer Layout — Watermark Renderer
 * ==============================================================================
 * 
 * Generates the centered watermark overlay.
 * ==============================================================================
 */

import { ResolvedTheme } from '../../domain/theme';

/**
 * Render the watermark overlay HTML.
 * Returns empty string if watermark is disabled.
 */
export function renderWatermark(theme: ResolvedTheme): string {
  if (!theme.assets.showWatermark || !theme.assets.watermarkUri) {
    return '';
  }

  return `
    <div class="watermark-overlay">
      <img src="${theme.assets.watermarkUri}" class="watermark-img" alt="Watermark" />
    </div>
  `;
}
