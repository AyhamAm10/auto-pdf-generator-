/**
 * ==============================================================================
 * Block Renderer — Question & Answer (Q&A / MCQ)
 * ==============================================================================
 */

import { QuestionBlock } from '../../domain/document';
import { escapeHtml, renderRichText } from '../utils';

export function renderQuestion(block: QuestionBlock): string {
  const tagHtml = block.tag
    ? `<span class="qa-tag">${escapeHtml(block.tag)}</span>`
    : '';

  // Multiple choice options
  let optionsHtml = '';
  if (Array.isArray(block.options) && block.options.length > 0) {
    const arabicIndex = ['أ', 'ب', 'ج', 'د', 'هـ'];
    optionsHtml = `
      <div class="qa-options-list">
        ${block.options.map((opt, i) => {
          const isCorrect = block.correctOptionIndex === i;
          const optClass = isCorrect ? 'option-correct' : 'option-regular';
          const letter = arabicIndex[i] || String(i + 1);
          return `
            <div class="qa-option-item ${optClass}">
              <span class="option-marker">${letter}</span>
              <span class="option-text">${escapeHtml(opt)}</span>
              ${isCorrect ? '<span class="correct-badge">✓ الإجابة الصحيحة</span>' : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // Answer box
  let answerHtml = '';
  if (block.answer) {
    answerHtml = `
      <div class="qa-answer-box">
        <div class="qa-answer-title"><span class="qa-badge-a">ج</span> الحل النموذجي:</div>
        <div class="qa-answer-text">${renderRichText(block.answer)}</div>
      </div>
    `;
  }

  // Explanation
  let explanationHtml = '';
  if (block.explanation) {
    explanationHtml = `
      <div class="qa-explanation-box">
        <span class="exp-title">التعليل والشرح:</span> ${renderRichText(block.explanation)}
      </div>
    `;
  }

  return `
    <div class="element-qa-card">
      <div class="qa-question-header">
        <div class="qa-q-prefix"><span class="qa-badge-q">س</span></div>
        <div class="qa-question-text">${escapeHtml(block.question)}</div>
        ${tagHtml}
      </div>
      ${optionsHtml}
      ${answerHtml}
      ${explanationHtml}
    </div>
  `;
}
