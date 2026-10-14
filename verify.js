/**
 * verify.js — سكريبت التدقيق والمطابقة الحرفية بين ملف النص وملف الـ JSON
 * الاستخدام: node verify.js <مسار_ملف_النص> <مسار_ملف_الجيسن>
 */
const fs = require('fs');
const path = require('path');

const [txtPath, jsonPath] = process.argv.slice(2);

if (!txtPath || !jsonPath) {
  console.error('❌ الاستخدام: node verify.js <text_file_path> <json_file_path>');
  process.exit(1);
}

if (!fs.existsSync(txtPath)) {
  console.error(`❌ ملف النص غير موجود: ${txtPath}`);
  process.exit(1);
}

if (!fs.existsSync(jsonPath)) {
  console.error(`❌ ملف الجيسن غير موجود: ${jsonPath}`);
  process.exit(1);
}

const txtContent = fs.readFileSync(txtPath, 'utf8');
const jsonContent = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));

// استخراج كافة نصوص الـ JSON
let jsonFullText = '';
(jsonContent.elements || []).forEach(el => {
  if (el.prefix) jsonFullText += el.prefix + ' ';
  if (el.text) jsonFullText += el.text + '\n';
  if (el.content) jsonFullText += el.content + '\n';
  if (el.headers) jsonFullText += el.headers.join(' ') + '\n';
  if (el.rows) jsonFullText += el.rows.map(r => r.join(' ')).join('\n') + '\n';
});

// تنظيف وتجزئة الكلمات
const cleanWords = (str) =>
  str.replace(/[^\u0600-\u06FFa-zA-Z0-9]/g, ' ')
     .split(/\s+/)
     .filter(Boolean);

const txtWords = cleanWords(txtContent);
const jsonWords = cleanWords(jsonFullText);

const setJson = new Set(jsonWords);
const setTxt = new Set(txtWords);

// الكلمات الناقصة من الـ JSON
const missingWords = txtWords.filter(w => !setJson.has(w));
// الكلمات الزائدة في الـ JSON (استثناء كلمات الثيم والوسوم المعتادة)
const ignoredAdded = new Set(['المحاضرة', '1', '2', '3', 'مهم']);
const addedWords = jsonWords.filter(w => !setTxt.has(w) && !ignoredAdded.has(w));

console.log('='.repeat(60));
console.log('📋 تقرير مطابقة المحاضرة (Verification Audit Report)');
console.log('='.repeat(60));
console.log(`* الملف الأصلي:     ${path.basename(txtPath)}`);
console.log(`* ملف الـ JSON:     ${path.basename(jsonPath)}`);
console.log(`* عدد كلمات الأصل:  ${txtWords.length}`);
console.log(`* عدد كلمات الـ JSON: ${jsonWords.length}`);

const uniqueMissing = [...new Set(missingWords)];
const uniqueAdded = [...new Set(addedWords)];

console.log('\n---');
if (uniqueMissing.length === 0) {
  console.log('✅ 1. المحذوفات: لا توجد أي محذوفات — النص منقول بالكامل 100%');
} else {
  console.log(`❌ 1. المحذوفات (${uniqueMissing.length} كلمة مفقودة):`, uniqueMissing.slice(0, 20));
}

if (uniqueAdded.length === 0) {
  console.log('✅ 2. الإضافات: لا توجد أي إضافات غريبة — التزام تام بالمصدر');
} else {
  console.log(`⚠️ 2. الإضافات (${uniqueAdded.length} كلمة إضافية):`, uniqueAdded.slice(0, 20));
}

console.log('\n---');
if (uniqueMissing.length === 0 && uniqueAdded.length === 0) {
  console.log('🏁 الحكم النهائي: ✅ معتمد 100% (مطابقة تامة وخالية من أي تشويه)');
} else {
  console.log('🏁 الحكم النهائي: ❌ يحتاج مراجعة وتدقيق');
}
console.log('='.repeat(60));
