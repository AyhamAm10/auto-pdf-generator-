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
    const englishLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    const arabicLetters = ['أ', 'ب', 'ج', 'د', 'هـ'];
    optionsHtml = `
      <div class="qa-options-list">
        ${block.options.map((opt, i) => {
          const isCorrect = block.correctOptionIndex === i;
          const optClass = isCorrect ? 'option-correct' : 'option-regular';
          
          let letter = '';
          let text = opt;
          const match = opt.match(/^([a-zA-Z\u0621-\u064A0-9])[\.\-\)]\s*([\s\S]*)$/);
          if (match) {
            letter = match[1];
            text = match[2];
          } else {
            const isEnglish = /[a-zA-Z]/.test(opt) || /[a-zA-Z]/.test(block.question);
            letter = isEnglish ? (englishLetters[i] || String(i + 1)) : (arabicLetters[i] || String(i + 1));
          }

          return `
            <div class="qa-option-item ${optClass}">
              <span class="option-marker">${escapeHtml(letter)}</span>
              <div class="option-content">
                <div class="option-text" dir="auto">${renderRichText(text)}</div>
              </div>
              ${isCorrect ? '<span class="correct-badge">✓ الإجابة الصحيحة</span>' : ''}
            </div>
          `;
        }).join('')}
      </div>
    `;
  }

  // Answer block (Clean academic style — no card, no 'الحل النموذجي')
  let answerHtml = '';
  if (block.answer) {
    answerHtml = `
      <div class="qa-answer-box">
        <span class="qa-badge-a">ج:</span>
        <div class="qa-answer-text">${renderRichText(block.answer)}</div>
      </div>
    `;
  }

  // Explanation
  let explanationHtml = '';
  if (block.explanation) {
    explanationHtml = `
      <div class="qa-explanation-box">
        <span class="exp-title">توضيح:</span> ${renderRichText(block.explanation)}
      </div>
    `;
  }

  // Multi-line Question text handling
  const qLines = (block.question || '').split('\n');
  const questionContentHtml = qLines.map(line => {
    const trimmed = line.trim();
    if (!trimmed) return '';
    const hasArabic = /[\u0600-\u06FF]/.test(trimmed);
    const hasEnglish = /[a-zA-Z]/.test(trimmed);
    const dir = hasEnglish && !hasArabic ? 'ltr' : hasArabic && !hasEnglish ? 'rtl' : 'auto';
    return `<div class="qa-q-line" dir="${dir}">${renderRichText(trimmed)}</div>`;
  }).filter(Boolean).join('');

  return `
    <div class="element-qa-card">
      <div class="qa-question-header">
        <span class="qa-badge-q">س:</span>
        <div class="qa-question-text">${questionContentHtml}</div>
        ${tagHtml}
      </div>
      ${optionsHtml}
      ${answerHtml}
      ${explanationHtml}
    </div>
  `;
}
