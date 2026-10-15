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
 * Wrap quoted text in a span with secondary color.
 * Supports standard quotes (&quot;), curly quotes (“...”), and Arabic/French quotes («...»).
 */
export function highlightQuotes(str: string): string {
  return str
    .replace(/(&quot;)([^&<>\n]+?)(&quot;)/g, '<span class="quote-secondary">$1$2$3</span>')
    .replace(/(“)([^”<>\n]+?)(”)/g, '<span class="quote-secondary">$1$2$3</span>')
    .replace(/(«)([^»<>\n]+?)(»)/g, '<span class="quote-secondary">$1$2$3</span>');
}

/**
 * Process rich text — either return raw HTML or escape plain text.
 * Preserves newlines as <br/> in plain text and highlights quoted terms.
 */
export function renderRichText(text?: string, html?: string): string {
  if (html) return html;
  if (!text) return '';
  const escaped = escapeHtml(text).replace(/\n/g, '<br/>');
  return highlightQuotes(escaped);
}
