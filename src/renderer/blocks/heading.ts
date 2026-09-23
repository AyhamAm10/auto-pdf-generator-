/**
 * ==============================================================================
 * Block Renderer — Heading (H1, H2, H3)
 * ==============================================================================
 */

import { HeadingBlock } from '../../domain/document';
import { ResolvedTheme } from '../../domain/theme';
import { escapeHtml } from '../utils';

export function renderHeading(block: HeadingBlock, theme: ResolvedTheme): string {
  switch (block.level) {
    case 1: return renderH1(block);
    case 2: return renderH2(block);
    case 3: return renderH3(block);
    default: return renderH3(block);
  }
}

function renderH1(block: HeadingBlock): string {
  const badgeHtml = block.badge
    ? `<span class="h1-badge">${escapeHtml(block.badge)}</span>`
    : '';
  const iconHtml = block.icon
    ? `<span class="h1-icon">${block.icon}</span>`
    : '';

  return `
    <div class="element-h1-container">
      <div class="h1-line-accent"></div>
      <div class="h1-content">
        ${iconHtml}
        ${badgeHtml}
        <h1 class="h1-title">${escapeHtml(block.text)}</h1>
      </div>
    </div>
  `;
}

function renderH2(block: HeadingBlock): string {
  const prefixHtml = block.prefix
    ? `<span class="h2-prefix">${escapeHtml(block.prefix)}</span>`
    : `<span class="h2-dot"></span>`;

  return `
    <div class="element-h2-container">
      ${prefixHtml}
      <h2 class="h2-title">${escapeHtml(block.text)}</h2>
    </div>
  `;
}

function renderH3(block: HeadingBlock): string {
  return `
    <div class="element-h3-container">
      <h3 class="h3-title">${escapeHtml(block.text)}</h3>
    </div>
  `;
}
