/**
 * ==============================================================================
 * Block Renderer — Bilingual (English + Arabic Translation)
 * ==============================================================================
 * 
 * Renders parallel English text with its direct Arabic translation.
 * Designed specifically for foreign language study booklets (نوطة لغة).
 * ==============================================================================
 */

import { BilingualBlock } from '../../domain/document';
import { escapeHtml, renderRichText } from '../utils';

export function renderBilingual(block: BilingualBlock): string {
  const badgeHtml = block.badge
    ? `<span class="bilingual-badge-en">${escapeHtml(block.badge)}</span>`
    : `<span class="bilingual-badge-en">ENGLISH</span>`;

  const notesHtml = block.notes
    ? `<div class="bilingual-notes"><span class="notes-icon">💡 إضاءة لغوية:</span> ${escapeHtml(block.notes)}</div>`
    : '';

  return `
    <div class="element-bilingual-card">
      <div class="bilingual-en-section">
        <div class="bilingual-meta-bar">${badgeHtml}</div>
        <div class="bilingual-en-text" dir="ltr">${renderRichText(block.english)}</div>
      </div>
      <div class="bilingual-ar-section">
        <div class="bilingual-ar-header">
          <span class="bilingual-badge-ar">الترجمة العربية المعتمدة</span>
        </div>
        <div class="bilingual-ar-text" dir="rtl">${renderRichText(block.arabic)}</div>
        ${notesHtml}
      </div>
    </div>
  `;
}
