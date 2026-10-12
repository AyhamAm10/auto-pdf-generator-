/**
 * ==============================================================================
 * Block Renderer — Paragraph
 * ==============================================================================
 */

import { ParagraphBlock } from '../../domain/document';
import { renderRichText } from '../utils';

function highlightAcademicKeywords(text: string): string {
  // 1. Note lead: * ملاحظة:
  let res = text.replace(/(\*?\s*ملاحظة\s*:)/g, '<strong class="lead-note">$1</strong>');

  // 2. Question / Reason lead: علل: or علل ما يلي:
  res = res.replace(/(^|<br\/>)(\s*علل\s*[^:<\n\?؟]{0,40}[:؟\?])/g, '$1<strong class="lead-num-title">$2</strong>');

  // 3. Multi-stage: "• المرحلة الأولى:", "• المرحلة الثانية:", etc.
  res = res.replace(/(^|<br\/>)(\s*•?\s*المرحلة\s+[^:<\n]{2,30}:)/g, '$1<strong class="lead-stage-title">$2</strong>');

  // 4. Arabic letter sub-items: e.g. "• أ- المتغير الإحصائي المتقطع...:" or "أ- الشمول:"
  res = res.replace(/(^|<br\/>)(\s*•?\s*[أ-ي][\.-]\s*[^:<\n]{2,60}:)/g, '$1<strong class="lead-letter-title">$2</strong>');

  // 5. Numbered main items: e.g. "1. التعريف الأول لعلم الإحصاء:" or "• 1- بيانات وصفية...:" or "1- العينات العشوائية البسيطة...:" or "١ - المرسل:"
  res = res.replace(/(^|<br\/>)(\s*•?\s*[\d\u0660-\u0669]+[\.\-–]\s*[^:<\n]{2,60}:)/g, '$1<strong class="lead-num-title">$2</strong>');

  // 6. Bullet sub-items with title: e.g. "• مفهوم النظام البيئي:", "• أهمية المحيط المائي وخصائصه الحيوية:"
  res = res.replace(/(^|<br\/>)(\s*•\s*[^:<\n]{2,55}:)/g, '$1<strong class="lead-bullet-title">$2</strong>');

  // 7. Short sub-items like "- النوع:", "- الحالة الاجتماعية:", "- الجنسية:"
  res = res.replace(/(^|<br\/>)(\s*[-–]\s*[^:<\n]{2,45}:)/g, '$1<strong class="lead-subitem-title">$2</strong>');

  return res;
}

export function renderParagraph(block: ParagraphBlock): string {
  let content = renderRichText(block.text, block.html);
  const textStr = (block.text || '').trim();
  const isIntro = textStr.startsWith('مدخل تمهيدي:') || textStr.startsWith('تمهيد:') || textStr.startsWith('مقدمة:');
  const isAuthor = textStr.length < 100 && (/^(اعداد|إعداد|تلخيص)\b/i.test(textStr) || textStr.includes('قمر بودقة') || /^—\s*انتهت/i.test(textStr));

  const classes = ['element-p'];
  if (block.highlight) {
    classes.push('p-highlighted');
  } else if (isIntro) {
    classes.push('p-intro');
    content = content.replace(/^(مدخل تمهيدي:|تمهيد:|مقدمة:)/, '<span class="intro-prefix-badge">$1</span>');
  } else if (isAuthor) {
    classes.push('p-author-credit');
  } else {
    content = highlightAcademicKeywords(content);
  }

  return `
    <p class="${classes.join(' ')}">
      ${content}
    </p>
  `;
}
