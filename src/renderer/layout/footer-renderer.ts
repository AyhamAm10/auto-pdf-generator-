/**
 * ==============================================================================
 * Renderer Layout — Footer Renderer
 * ==============================================================================
 * 
 * Generates the HTML for the page footer with 3 beveled segments.
 * Designed to work with Puppeteer's footerTemplate for accurate page numbering.
 * ==============================================================================
 */

import { CourseInfo } from '../../domain/document';
import { ResolvedTheme } from '../../domain/theme';
import { escapeHtml } from '../utils';

/**
 * Render the footer HTML for a specific page.
 * Used when building explicit page-by-page output.
 */
export function renderFooter(
  course: CourseInfo,
  theme: ResolvedTheme,
  currentPage: number,
  totalPages: number
): string {
  return `
    <footer class="lecture-footer">
      <div class="footer-container">
        <div class="footer-inner">
          <span class="footer-text">${escapeHtml(course.subject)}</span>
          <span class="footer-page">الصفحة ${currentPage} من ${totalPages}</span>
          <span class="footer-text">مركز تصوير كلية التربية</span>
        </div>
      </div>
    </footer>
  `;
}

/**
 * Build the Puppeteer footer template HTML.
 * Ultra-simple, clean academic text with subtle divider line.
 */
export function buildPuppeteerFooterTemplate(
  course: CourseInfo,
  theme: ResolvedTheme
): string {
  return `
    <style>
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      .footer-container {
        width: 100%;
        padding: 0 12mm 4px 12mm;
        box-sizing: border-box;
        font-family: 'Simplified Arabic', Arial, Tahoma, sans-serif;
        direction: rtl;
      }
      .footer-divider {
        width: 100%;
        height: 1.5px;
        background: linear-gradient(to left, ${theme.colors.primary}, ${theme.colors.secondary});
        margin-bottom: 4px;
      }
      .footer-row {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 11px;
        line-height: 1.2;
      }
      .footer-text {
        color: #334155;
        font-size: 11px;
        font-weight: 600;
        white-space: nowrap;
      }
      .footer-page {
        color: ${theme.colors.primary};
        font-size: 11.5px;
        font-weight: 800;
        white-space: nowrap;
      }
    </style>
    <div class="footer-container">
      <div class="footer-divider"></div>
      <div class="footer-row">
        <span class="footer-text">${escapeHtml(course.subject)}</span>
        <span class="footer-page">الصفحة <span class="pageNumber"></span> من <span class="totalPages"></span></span>
        <span class="footer-text">مركز تصوير كلية التربية</span>
      </div>
    </div>
  `;
}
