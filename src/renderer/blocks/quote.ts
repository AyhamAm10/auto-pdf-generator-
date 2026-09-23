/**
 * ==============================================================================
 * Block Renderer — Quote
 * ==============================================================================
 */

import { QuoteBlock } from '../../domain/document';
import { escapeHtml } from '../utils';

export function renderQuote(block: QuoteBlock): string {
  const authorHtml = block.author
    ? `<div class="quote-author">— ${escapeHtml(block.author)}${block.source ? ` (${escapeHtml(block.source)})` : ''}</div>`
    : '';

  return `
    <div class="element-quote">
      <span class="quote-mark">\u201C</span>
      <blockquote class="quote-text">${escapeHtml(block.text)}</blockquote>
      ${authorHtml}
    </div>
  `;
}
