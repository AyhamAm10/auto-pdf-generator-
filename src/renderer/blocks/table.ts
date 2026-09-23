/**
 * ==============================================================================
 * Block Renderer — Table
 * ==============================================================================
 * 
 * Table with proper text wrapping, RTL support, and safe overflow handling.
 * Tables use break-inside: auto to allow splitting across pages.
 * Table headers repeat when a table spans multiple pages (via <thead>).
 * ==============================================================================
 */

import { TableBlock } from '../../domain/document';
import { escapeHtml, renderRichText } from '../utils';

/** Minimum readable font size — never go below this */
const MIN_TABLE_FONT_SIZE = 11; // px

export function renderTable(block: TableBlock): string {
  const titleHtml = block.title
    ? `<div class="table-caption">${escapeHtml(block.title)}</div>`
    : '';

  const headers = block.headers || [];
  const rows = block.rows || [];
  const colWidths = block.colWidths || [];

  // Generate column width styles
  const thHtml = headers.map((h, i) => {
    const widthStyle = colWidths[i] ? `style="width: ${colWidths[i]};"` : '';
    return `<th ${widthStyle}>${escapeHtml(h)}</th>`;
  }).join('');

  // Generate data rows with alternating colors
  const rowsHtml = rows.map((row, rIndex) => {
    const rowClass = rIndex % 2 === 0 ? 'tr-even' : 'tr-odd';
    const cellsHtml = row.map(cell => `<td>${renderRichText(cell)}</td>`).join('');
    return `<tr class="${rowClass}">${cellsHtml}</tr>`;
  }).join('\n');

  return `
    <div class="element-table-wrapper">
      ${titleHtml}
      <table class="element-table">
        <thead>
          <tr>${thHtml}</tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    </div>
  `;
}
