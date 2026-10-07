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
  const rawDoctor = course.doctor || course.professor || 'قضيب البان';
  const doctorName = (rawDoctor.startsWith('د.') || rawDoctor.startsWith('د/'))
    ? rawDoctor
    : `د. ${rawDoctor}`;

  return `
    <header class="lecture-header">
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

        <!-- العمود 2: المادة - طبيعة المادة - الدكتور -->
        <div class="header-meta-col col-2">
          <div class="meta-row">
            <span class="meta-label">المادة:</span>
            <span class="meta-value font-bold">${escapeHtml(course.subject)}</span>
          </div>
          <div class="meta-row">
            <span class="meta-label">طبيعة المادة:</span>
            <span class="meta-value subject-type-badge">${escapeHtml(course.subjectType || 'مؤتمتة')}</span>
          </div>
          <div class="meta-row meta-doctor-row">
            <span class="meta-label">الدكتور:</span>
            <span class="meta-value meta-doctor-val">${escapeHtml(doctorName)}</span>
          </div>
        </div>

        <!-- العمود 3: محاضرة - عدد الصفحات - العام الجامعي -->
        <div class="header-meta-col col-3">
          <div class="meta-row">
            <span class="meta-label">محاضرة:</span>
            <span class="meta-value meta-lecture">${escapeHtml(course.lecture)}</span>
          </div>
          <div class="meta-row">
            <span class="meta-label">عدد الصفحات:</span>
            <span class="meta-value page-count-val">${escapeHtml(String(totalPages || course.totalPages || 0))}</span>
          </div>
          ${course.academicYear ? `
          <div class="meta-row">
            <span class="meta-label">العام الجامعي:</span>
            <span class="meta-value">${escapeHtml(course.academicYear)}</span>
          </div>
          ` : ''}
        </div>
      </div>

      <!-- الفاصل السفلي للترويسة بتصميم انسيابي وألوان قوية وواضحة للطباعة -->
      <div class="header-bottom-divider"></div>
    </header>
  `;
}

/**
 * Render the small corner notch that appears on subsequent pages.
 */
export function renderSubsequentPageTopBar(): string {
  return '';
}

/**
 * Build the Puppeteer header template HTML.
 * Kept clean and minimal so it does not repeat or conflict with the first-page header.
 */
export function buildPuppeteerHeaderTemplate(
  course: CourseInfo,
  theme: ResolvedTheme
): string {
  return '<span></span>';
}

