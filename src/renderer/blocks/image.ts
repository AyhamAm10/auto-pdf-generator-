/**
 * ==============================================================================
 * Block Renderer — Image
 * ==============================================================================
 */

import { ImageBlock } from '../../domain/document';
import { escapeHtml } from '../utils';

export function renderImage(block: ImageBlock): string {
  const captionHtml = block.caption
    ? `<figcaption class="image-caption">${escapeHtml(block.caption)}</figcaption>`
    : '';
  const widthStyle = block.width
    ? `style="max-width: ${block.width}; width: 100%;"`
    : '';

  return `
    <figure class="element-image-wrapper">
      <img src="${block.src}" alt="${escapeHtml(block.caption || 'صورة توضيحية')}" ${widthStyle} class="lecture-img" />
      ${captionHtml}
    </figure>
  `;
}
