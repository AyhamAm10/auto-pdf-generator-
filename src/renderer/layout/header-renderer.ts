/**
 * ==============================================================================
 * Renderer Layout — Header Renderer
 * ==============================================================================
 * 
 * Generates the HTML for the first-page academic header.
 * Matches the existing 3-column metadata layout with logo exactly.
 * ==============================================================================
 */

import { CourseInfo } from '../../domain/document';
import { ResolvedTheme } from '../../domain/theme';
import { escapeHtml } from '../utils';

/**
 * Render the first-page header HTML.
 * This header appears ONLY on the first page.
 */
export function renderHeader(course: CourseInfo, theme: ResolvedTheme, totalPages: number): string {
  return `
    <header class="lecture-header">
      <!-- الزاوية المائلة في أعلى اليسار -->
      <div class="header-corner-notch"></div>

      <!-- محتوى الترويسة: الشعار + 3 أعمدة بيانات -->
      <div class="header-inner">
        <!-- أقصى اليمين: شعار المركز الرسمي -->
        <div class="header-brand-logo">
          <img src="${theme.assets.logoUri}" alt="شعار المركز" class="header-logo-img" />
        </div>

        <!-- العمود 1: القسم - السنة - الفصل -->
        <div class="header-meta-col col-1">
          <div class="meta-row">
            <span class="meta-label">القسم:</span>
            <span class="meta-value">${escapeHtml(course.department)}</span>
          </div>
          <div class="meta-row">
            <span class="meta-label">السنة:</span>
            <span class="meta-value">${escapeHtml(course.year)}</span>
          </div>
          <div class="meta-row">
            <span class="meta-label">الفصل:</span>
            <span class="meta-value">${escapeHtml(course.semester)}</span>
          </div>
        </div>

        <!-- العمود 2: المادة - طبيعة المادة -->
        <div class="header-meta-col col-2">
          <div class="meta-row">
            <span class="meta-label">المادة:</span>
            <span class="meta-value font-bold">${escapeHtml(course.subject)}</span>
          </div>
          <div class="meta-row">
            <span class="meta-label">طبيعة المادة:</span>
            <span class="meta-value">${escapeHtml(course.subjectType)}</span>
          </div>
        </div>

        <!-- العمود 3: محاضرة - عدد الصفحات -->
        <div class="header-meta-col col-3">
          <div class="meta-row">
            <span class="meta-label">محاضرة:</span>
            <span class="meta-value">${escapeHtml(course.lecture)}</span>
          </div>
          <div class="meta-row">
            <span class="meta-label">عدد الصفحات:</span>
            <span class="meta-value page-count-val">${escapeHtml(String(totalPages))}</span>
          </div>
        </div>
      </div>

      <!-- الفاصل السفلي -->
      <div class="header-bottom-divider">
        <div class="divider-main-line"></div>
        <div class="divider-notch-tab"></div>
      </div>
    </header>
  `;
}

/**
 * Render the small corner notch that appears on subsequent pages.
 */
export function renderSubsequentPageTopBar(): string {
  return `
    <div class="subsequent-top-bar">
      <div class="subsequent-corner-notch"></div>
    </div>
  `;
}

/**
 * Build the Puppeteer header template HTML.
 * Renders the brand corner notch at the top-left on subsequent pages
 * inside the 8mm page top margin.
 * On the first page, @page :first margin-top: 0 collapses this template.
 */
export function buildPuppeteerHeaderTemplate(
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
    </style>
    <div style="width: 100%; height: 8mm; position: relative; direction: rtl; display: flex; align-items: flex-start;">
      <!-- Corner notch in top-left matching header identity -->
      <div style="position: absolute; top: 0; left: 0; width: 48px; height: 14px; background: linear-gradient(135deg, ${secondaryColor}, ${primaryColor}); clip-path: polygon(0 0, 100% 0, 65% 100%, 0 100%); opacity: 0.9;"></div>
    </div>
  `;
}

