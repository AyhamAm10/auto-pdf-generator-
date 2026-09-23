/**
 * ==============================================================================
 * Block Renderer — Divider
 * ==============================================================================
 */

import { DividerBlock } from '../../domain/document';
import { escapeHtml } from '../utils';

export function renderDivider(block: DividerBlock): string {
  const style = block.style || 'solid';

  if (style === 'with-icon') {
    const icon = block.icon || '◆';
    return `
      <div class="element-line-icon-wrapper" style="margin: 12px 0;">
        <span class="line-segment"></span>
        <span class="line-icon-badge">${escapeHtml(icon)}</span>
        <span class="line-segment"></span>
      </div>
    `;
  }

  if (style === 'gradient') {
    return `<div class="element-line-gradient" style="margin: 12px 0;"></div>`;
  }

  return `<hr class="element-line element-line-${style}" style="margin: 12px 0;" />`;
}
