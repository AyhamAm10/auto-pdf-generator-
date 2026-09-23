/**
 * ==============================================================================
 * Block Renderer — Definitions
 * ==============================================================================
 */

import { DefinitionsBlock } from '../../domain/document';
import { escapeHtml } from '../utils';

export function renderDefinitions(block: DefinitionsBlock): string {
  const titleHtml = block.title
    ? `<div class="definitions-main-title">📚 ${escapeHtml(block.title)}</div>`
    : '';

  const itemsHtml = (block.items || []).map(item => {
    const exampleHtml = item.example
      ? `<div class="def-example"><span class="example-tag">مثال تطبيقي:</span> ${escapeHtml(item.example)}</div>`
      : '';

    return `
      <div class="definition-card">
        <div class="def-term-badge">${escapeHtml(item.term)}</div>
        <div class="def-body">${escapeHtml(item.definition)}</div>
        ${exampleHtml}
      </div>
    `;
  }).join('\n');

  return `
    <div class="element-definitions-wrapper">
      ${titleHtml}
      <div class="definitions-grid">
        ${itemsHtml}
      </div>
    </div>
  `;
}
