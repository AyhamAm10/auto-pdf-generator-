/**
 * ==============================================================================
 * Renderer Layout — Side Rails Renderer
 * ==============================================================================
 * 
 * Renders the HTML markup for side margin rails and micro vertical spine.
 * Appears on every page via fixed positioning.
 * ==============================================================================
 */

import { CourseInfo } from '../../domain/document';
import { ResolvedTheme } from '../../domain/theme';
import { escapeHtml } from '../utils';

export function renderSideRails(course: CourseInfo, theme: ResolvedTheme): string {
  const subjectName = escapeHtml(course.subject || '');
  const spineLabel = subjectName 
    ? `${subjectName} ✦ مركز تصوير كلية التربية`
    : `مركز تصوير كلية التربية ✦ محاضرات وملخصات جامعية`;

  return `
    <div class="side-rails-container">
      <!-- الشريط الجانبي الأيمن -->
      <div class="side-rail-right">
        <div class="side-rail-diamond"></div>
        <div class="side-rail-line"></div>
        <div class="side-rail-diamond diamond-center"></div>
        <div class="side-rail-diamond diamond-bottom"></div>
      </div>

      <!-- الشريط الجانبي الأيسر -->
      <div class="side-rail-left">
        <div class="side-rail-diamond"></div>
        <div class="side-rail-line"></div>
        <div class="side-rail-diamond diamond-bottom"></div>
      </div>

      <!-- شريط التوثيق النصي الرأسي -->
      <div class="side-spine-text-container">
        <span class="side-spine-text">${spineLabel}</span>
      </div>
    </div>
  `;
}
