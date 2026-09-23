/**
 * ==============================================================================
 * Block Renderer — Paragraph
 * ==============================================================================
 */

import { ParagraphBlock } from '../../domain/document';
import { renderRichText } from '../utils';

export function renderParagraph(block: ParagraphBlock): string {
  const content = renderRichText(block.text, block.html);
  const highlightClass = block.highlight ? 'p-highlighted' : '';

  return `
    <p class="element-p ${highlightClass}">
      ${content}
    </p>
  `;
}
