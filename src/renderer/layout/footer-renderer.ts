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
  const primaryColor = theme.colors.primary;
  const secondaryColor = theme.colors.secondary;

  return `
    <footer class="lecture-footer">
      <div class="footer-divider"></div>
      <div class="footer-row">
        <!-- اليمين: المادة -->
        <div class="footer-badge">
          <span class="footer-lbl">المادة:</span>
          <span class="footer-val footer-val-subject">${escapeHtml(course.subject)}</span>
        </div>

        <!-- الوسط: كبسولة رقم الصفحة -->
        <div class="page-capsule">
          <span class="page-text-muted">الصفحة</span>
          <span class="current-page-num">${currentPage}</span>
          <span class="page-text-muted">من</span>
          <span class="total-page-num">${totalPages}</span>
        </div>

        <!-- اليسار: المحاضرة -->
        <div class="footer-badge footer-lecture-badge">
          <span class="footer-lbl">محاضرة:</span>
          <span class="footer-val footer-val-lecture">${escapeHtml(course.lecture)}</span>
        </div>
      </div>
    </footer>
  `;
}

/**
 * Build the Puppeteer footer template HTML.
 * This uses special Puppeteer CSS classes for dynamic page numbers.
 * 
 * The footer template must be a complete, self-contained HTML string
 * with inline styles (Puppeteer does not support external CSS in templates).
 */
export function buildPuppeteerFooterTemplate(
  course: CourseInfo,
  theme: ResolvedTheme
): string {
  const primaryColor = theme.colors.primary;
  const secondaryColor = theme.colors.secondary;

  return `
    <style>
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      .footer-wrap {
        width: 100%;
        font-family: 'IBM Plex Sans Arabic', 'Readex Pro', 'Cairo', sans-serif;
        direction: rtl;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }
      .footer-divider {
        width: 100%;
        height: 1.5px;
        background: linear-gradient(to left, ${secondaryColor}, ${primaryColor}, ${secondaryColor});
        opacity: 0.85;
      }
      .footer-row {
        width: 100%;
        padding: 5px 12mm 3px 12mm;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 11px;
      }
      .footer-badge {
        display: inline-flex;
        align-items: center;
        gap: 6px;
        padding: 4px 14px;
        background: #FAFBFD;
        border: 1px solid #E2E8F0;
        border-radius: 20px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.02);
      }
      .footer-lbl {
        color: #64748B;
        font-weight: 600;
        font-size: 10.5px;
        white-space: nowrap;
        flex-shrink: 0;
      }
      .footer-val-subject {
        color: ${primaryColor};
        font-weight: 700;
        font-size: 11.5px;
        white-space: nowrap;
      }
      .footer-val-lecture {
        color: ${secondaryColor};
        font-weight: 700;
        font-size: 11.5px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .page-capsule {
        background: ${primaryColor};
        color: #FFFFFF;
        padding: 4px 16px;
        border-radius: 20px;
        font-weight: 600;
        font-size: 11px;
        display: inline-flex;
        align-items: center;
        gap: 5px;
        box-shadow: 0 2px 4px rgba(27, 54, 93, 0.15);
      }
      .page-text-muted {
        color: rgba(255, 255, 255, 0.75);
        font-size: 10.5px;
        font-weight: 500;
      }
      .page-num-cur {
        color: #FF4D4D;
        font-weight: 900;
        font-size: 12.5px;
        padding: 0 2px;
        text-shadow: 0 0 1px rgba(0, 0, 0, 0.2);
      }
      .page-num-total {
        color: #FFFFFF;
        font-weight: 700;
        font-size: 11.5px;
        padding: 0 1px;
      }
    </style>
    <div class="footer-wrap">
      <div class="footer-divider"></div>
      <div class="footer-row">
        <!-- اليمين: المادة -->
        <div class="footer-badge">
          <span class="footer-lbl">المادة:</span>
          <span class="footer-val-subject">${escapeHtml(course.subject)}</span>
        </div>

        <!-- الوسط: كبسولة رقم الصفحة -->
        <div class="page-capsule">
          <span class="page-text-muted">الصفحة</span>
          <span class="page-num-cur pageNumber"></span>
          <span class="page-text-muted">من</span>
          <span class="page-num-total totalPages"></span>
        </div>

        <!-- اليسار: اسم المحاضرة -->
        <div class="footer-badge" style="max-width: 44%; overflow: hidden;">
          <span class="footer-lbl">محاضرة:</span>
          <span class="footer-val-lecture">${escapeHtml(course.lecture)}</span>
        </div>
      </div>
    </div>
  `;
}
