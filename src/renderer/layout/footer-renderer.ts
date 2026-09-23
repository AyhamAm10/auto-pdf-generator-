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
  const lightBg = theme.colors.lightBg;
  const border = theme.colors.border;

  return `
    <footer class="lecture-footer">
      <div class="footer-divider">
        <div class="footer-divider-notch"></div>
      </div>
      <div class="footer-row">
        <!-- اليمين: المادة -->
        <div class="footer-badge footer-subject-badge">
          <span class="footer-lbl">المادة:</span>
          <span class="footer-val">${escapeHtml(course.subject)}</span>
        </div>

        <!-- الوسط: رقم الصفحة -->
        <div class="page-capsule">
          <span class="page-text">الصفحة</span>
          <span class="current-page-num">${currentPage}</span>
          <span class="page-text">من</span>
          <span class="total-page-num">${totalPages}</span>
        </div>

        <!-- اليسار: المحاضرة -->
        <div class="footer-badge footer-lecture-badge">
          <span class="footer-lbl">محاضرة:</span>
          <span class="footer-val lecture-title-val">${escapeHtml(course.lecture)}</span>
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
  const lightBg = theme.colors.lightBg;
  const border = theme.colors.border;

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
        height: 2px;
        background: ${primaryColor};
        position: relative;
      }
      .footer-divider-notch {
        position: absolute;
        top: -1px;
        left: 10%;
        width: 45px;
        height: 4px;
        background: ${secondaryColor};
        border-radius: 2px;
      }
      .footer-row {
        width: 100%;
        padding: 4px 12mm 2px 12mm;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 11px;
      }
      .footer-badge {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 3px 10px;
        background: ${lightBg};
        border: 1px solid ${border};
        border-radius: 6px;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);
      }
      .footer-subject-badge {
        border-right: 3px solid ${primaryColor};
      }
      .footer-lecture-badge {
        border-left: 3px solid ${secondaryColor};
        max-width: 44%;
      }
      .page-capsule {
        background: ${primaryColor};
        color: #FFFFFF;
        padding: 3px 15px;
        border-radius: 14px;
        font-weight: 700;
        font-size: 11px;
        display: inline-flex;
        align-items: center;
        gap: 4px;
        box-shadow: 0 1px 3px rgba(27, 54, 93, 0.2);
      }
      .page-num-cur {
        color: #FF4D4D;
        font-weight: 900;
        font-size: 12.5px;
        padding: 0 2px;
        text-shadow: 0 0 1px rgba(0, 0, 0, 0.3);
      }
      .page-num-total {
        color: #FFFFFF;
        font-weight: 800;
        font-size: 11.5px;
        padding: 0 1px;
      }
    </style>
    <div class="footer-wrap">
      <div class="footer-divider">
        <div class="footer-divider-notch"></div>
      </div>
      <div class="footer-row">
        <!-- اليمين: المادة -->
        <div class="footer-badge footer-subject-badge">
          <span style="color: ${primaryColor}; font-weight: 700; opacity: 0.9;">المادة:</span>
          <span style="color: ${primaryColor}; font-weight: 800;">${escapeHtml(course.subject)}</span>
        </div>

        <!-- الوسط: رقم الصفحة -->
        <div class="page-capsule">
          <span style="color: #E2E8F0; font-weight: 600;">الصفحة</span>
          <span class="page-num-cur pageNumber"></span>
          <span style="color: #E2E8F0; font-weight: 600;">من</span>
          <span class="page-num-total totalPages"></span>
        </div>

        <!-- اليسار: اسم المحاضرة مع حماية مطلقة من الخروج عن الهامش -->
        <div class="footer-badge footer-lecture-badge" style="overflow: hidden;">
          <span style="color: ${primaryColor}; font-weight: 700; white-space: nowrap; flex-shrink: 0;">محاضرة:</span>
          <span style="color: ${secondaryColor}; font-weight: 800; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${escapeHtml(course.lecture)}</span>
        </div>
      </div>
    </div>
  `;
}
