/**
 * ==============================================================================
 * Block Renderer — List
 * ==============================================================================
 */

import { ListBlock, ListItemData } from '../../domain/document';
import { escapeHtml } from '../utils';

export function renderList(block: ListBlock): string {
  const style = block.style || 'bullet';
  const items = block.items || [];

  const itemsHtml = items.map((item, index) => {
    let text = '';
    let badge = '';
    let subItemsHtml = '';

    if (typeof item === 'string') {
      text = escapeHtml(item);
    } else {
      const itemData = item as ListItemData;
      text = escapeHtml(itemData.text || '');
      if (itemData.badge) {
        badge = `<span class="list-badge">${escapeHtml(itemData.badge)}</span>`;
      }
      if (Array.isArray(itemData.subItems) && itemData.subItems.length > 0) {
        subItemsHtml = `
          <ul class="sub-list">
            ${itemData.subItems.map(sub => `<li>${escapeHtml(sub)}</li>`).join('')}
          </ul>
        `;
      }
    }

    const marker = getListMarker(style, index);

    return `
      <li class="list-item">
        <div class="list-item-content">
          ${marker}
          ${badge}
          <span class="list-item-text">${text}</span>
        </div>
        ${subItemsHtml}
      </li>
    `;
  }).join('\n');

  return `
    <ul class="element-list list-style-${style}">
      ${itemsHtml}
    </ul>
  `;
}

function getListMarker(style: string, index: number): string {
  switch (style) {
    case 'numbered':
      return `<span class="list-number">${index + 1}</span>`;
    case 'check':
      return `<span class="list-check">✓</span>`;
    case 'alpha': {
      const arabicLetters = ['أ', 'ب', 'ج', 'د', 'هـ', 'و', 'ز', 'ح', 'ط', 'ي'];
      const letter = arabicLetters[index % arabicLetters.length];
      return `<span class="list-alpha">${letter}</span>`;
    }
    default:
      return `<span class="list-bullet">●</span>`;
  }
}
