/**
 * ==============================================================================
 * Block Renderer — Summary
 * ==============================================================================
 */

import { SummaryBlock } from '../../domain/document';
import { escapeHtml } from '../utils';

export function renderSummary(block: SummaryBlock): string {
  const title = block.title || 'خلاصة المحاضرة والنتائج الأساسية';
  const takeaways = block.takeaways || [];

  const itemsHtml = takeaways.map(t => `
    <li class="summary-item">
      <span class="summary-check">✓</span>
      <span class="summary-text">${escapeHtml(t)}</span>
    </li>
  `).join('');

  return `
    <div class="element-summary-card">
      <div class="summary-header">
        <span class="summary-icon">🎯</span>
        <span class="summary-title">${escapeHtml(title)}</span>
      </div>
      <ul class="summary-list">
        ${itemsHtml}
      </ul>
    </div>
  `;
}
