/**
 * ==============================================================================
 * Renderer — Utility Functions
 * ==============================================================================
 * 
 * HTML escaping and rich text processing utilities.
 * ==============================================================================
 */

/**
 * Escape HTML special characters to prevent XSS.
 */
export function escapeHtml(str: string | number | null | undefined): string {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Process rich text — either return raw HTML or escape plain text.
 * Preserves newlines as <br/> in plain text.
 */
export function renderRichText(text?: string, html?: string): string {
  if (html) return html;
  if (!text) return '';
  return escapeHtml(text).replace(/\n/g, '<br/>');
}
