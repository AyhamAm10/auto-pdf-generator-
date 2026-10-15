/**
 * ==============================================================================
 * Block Renderer — Callout / Alert Box
 * ==============================================================================
 */

import { CalloutBlock } from '../../domain/document';
import { escapeHtml, renderRichText } from '../utils';

/** Default icons and titles for each callout variant (academic styling) */
const CALLOUT_DEFAULTS: Record<string, { icon: string; title: string }> = {
  note:       { icon: '■', title: 'ملاحظة' },
  important:  { icon: '◆', title: 'تنبيه أكاديمي هام' },
  exam_tip:   { icon: '★', title: 'فكرة امتحانية / سؤال دورات' },
  definition: { icon: '◄', title: 'تعريف ومفهوم اصطلاحي' },
  info:       { icon: '✦', title: 'إضاءة علمية' },
  reading:    { icon: '📖', title: 'للاطلاع' },
};

export function renderCallout(block: CalloutBlock): string {
  let variant = block.variant;
  if (!variant) {
    if (block.title === 'للاطلاع') {
      variant = 'reading';
    } else if (block.title === 'مهم') {
      variant = 'exam_tip';
    } else {
      variant = 'note';
    }
  }
  const defaults = CALLOUT_DEFAULTS[variant] || CALLOUT_DEFAULTS.note;

  const icon = block.icon || defaults.icon;
  const title = block.title || defaults.title;

  let bodyContent = '';
  if (Array.isArray(block.content)) {
    bodyContent = block.content.map(p => `<p>${renderRichText(p)}</p>`).join('');
  } else {
    bodyContent = `<p>${renderRichText(block.content)}</p>`;
  }

  return `
    <div class="element-callout callout-${variant}">
      <div class="callout-header">
        <span class="callout-icon">${icon}</span>
        <span class="callout-title">${escapeHtml(title)}</span>
      </div>
      <div class="callout-body">
        ${bodyContent}
      </div>
    </div>
  `;
}
