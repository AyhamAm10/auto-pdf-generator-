/**
 * ==============================================================================
 * Domain Model — Document Data Structure
 * ==============================================================================
 * 
 * This file defines the semantic document model.
 * It describes WHAT the document contains, NOT how it is rendered.
 * 
 * No PDF coordinates, margins, font sizes, or layout hints belong here.
 * ==============================================================================
 */

// ---------------------------------------------------------------------------
// Theme Variant (selects which theme to apply)
// ---------------------------------------------------------------------------

/**
 * Built-in theme identifiers.
 * Each maps to a specific department with its own logo, colors, and identity.
 */
export type ThemeVariant =
  | 'ershad'    // قسم الإرشاد النفسي — Blue
  | 'moallem'   // قسم معلم صف — Green
  | 'manahij'   // قسم المناهج والتدريس والإدارة — Red
  | 'purple';   // قسم رياض الأطفال / التربية الخاصة — Purple

// ---------------------------------------------------------------------------
// Course Information (academic metadata for the header)
// ---------------------------------------------------------------------------

export interface CourseInfo {
  /** اسم القسم الأكاديمي (مثال: "إرشاد نفسي") */
  department: string;

  /** السنة الدراسية (مثال: "السنة الأولى") */
  year: string;

  /** الفصل الدراسي (مثال: "الفصل الأول") */
  semester: string;

  /** اسم المقرر أو المادة (مثال: "علم النفس التربوي") */
  subject: string;

  /** طبيعة المادة (مثال: "نظري"، "عملي") */
  subjectType: string;

  /** عنوان أو رقم المحاضرة (مثال: "المحاضرة 1") */
  lecture: string;

  /** اسم دكتور المادة (اختياري) */
  doctor?: string;

  /** العام الجامعي (اختياري، مثال: "2025 - 2026") */
  academicYear?: string;

  /** إجمالي عدد الصفحات للمحاضرة (محسوب أو محدد) */
  totalPages?: number;
}

// ---------------------------------------------------------------------------
// Content Blocks — the building blocks of document content
// ---------------------------------------------------------------------------

export interface HeadingBlock {
  type: 'heading';
  /** Heading level: 1 = main topic, 2 = subheading, 3 = minor heading */
  level: 1 | 2 | 3;
  /** Heading text */
  text: string;
  /** Badge label shown beside H1 headings (e.g., "المحاضرة 1") */
  badge?: string;
  /** Prefix shown before H2 headings (e.g., "أولاً:") */
  prefix?: string;
  /** Icon shown beside H1 headings */
  icon?: string;
}

export interface ParagraphBlock {
  type: 'paragraph';
  /** Plain text content */
  text?: string;
  /** Rich HTML content (alternative to text) */
  html?: string;
  /** Visual highlight with background color */
  highlight?: boolean;
}

export type ListStyle = 'bullet' | 'numbered' | 'check' | 'alpha';

export interface ListItemData {
  /** Main text of the list item */
  text: string;
  /** Sub-items under this item */
  subItems?: string[];
  /** Badge label at the start of the item */
  badge?: string;
}

export interface ListBlock {
  type: 'list';
  /** List style */
  style?: ListStyle;
  /** List items — either plain strings or structured items with sub-items */
  items: Array<string | ListItemData>;
}

export type CalloutVariant = 'note' | 'important' | 'exam_tip' | 'definition' | 'info';

export interface CalloutBlock {
  type: 'callout';
  /** Callout variant determines icon, color, and default title */
  variant: CalloutVariant;
  /** Optional custom title */
  title?: string;
  /** Body content — string or array of paragraphs */
  content: string | string[];
  /** Custom icon override */
  icon?: string;
}

export interface TableBlock {
  type: 'table';
  /** Caption/title above the table */
  title?: string;
  /** Column headers */
  headers: string[];
  /** Data rows */
  rows: string[][];
  /** Optional column width hints (e.g., ["25%", "50%", "25%"]) */
  colWidths?: string[];
}

export interface DefinitionItem {
  /** The term or concept */
  term: string;
  /** Definition/explanation */
  definition: string;
  /** Optional illustrative example */
  example?: string;
}

export interface DefinitionsBlock {
  type: 'definitions';
  /** Optional section title */
  title?: string;
  /** List of term-definition pairs */
  items: DefinitionItem[];
}

export interface QuestionBlock {
  type: 'question';
  /** Question text */
  question: string;
  /** Multiple-choice options (optional) */
  options?: string[];
  /** Index of the correct option (0-based) */
  correctOptionIndex?: number;
  /** Direct answer or model solution */
  answer?: string;
  /** Explanation of the answer */
  explanation?: string;
  /** Classification tag (e.g., "دورة 2024") */
  tag?: string;
}

export interface QuoteBlock {
  type: 'quote';
  /** Quoted text */
  text: string;
  /** Author or scholar name */
  author?: string;
  /** Source or book name */
  source?: string;
}

export interface ImageBlock {
  type: 'image';
  /** Image source (URL, file path, or data URI) */
  src: string;
  /** Caption displayed below the image */
  caption?: string;
  /** Preferred width (e.g., "80%", "350px") */
  width?: string;
}

export interface SummaryBlock {
  type: 'summary';
  /** Section title (default: "خلاصة المحاضرة والنتائج الأساسية") */
  title?: string;
  /** Key takeaway points */
  takeaways: string[];
}

export type DividerStyle = 'solid' | 'dashed' | 'dotted' | 'gradient' | 'with-icon';

export interface DividerBlock {
  type: 'divider';
  /** Visual style of the divider */
  style?: DividerStyle;
  /** Icon shown in center when style is 'with-icon' */
  icon?: string;
}

// ---------------------------------------------------------------------------
// Union of all content block types
// ---------------------------------------------------------------------------

export type ContentBlock =
  | HeadingBlock
  | ParagraphBlock
  | ListBlock
  | CalloutBlock
  | TableBlock
  | DefinitionsBlock
  | QuestionBlock
  | QuoteBlock
  | ImageBlock
  | SummaryBlock
  | DividerBlock;

// ---------------------------------------------------------------------------
// Section — a logical content grouping
// ---------------------------------------------------------------------------

/**
 * A section is a logical grouping of content blocks.
 * It is NOT a page — a section may span multiple pages.
 * The section provides semantic organization only.
 */
export interface Section {
  /** Section title (e.g., "المحاضرة الأولى: ...") */
  title: string;
  /** Content blocks within this section */
  blocks: ContentBlock[];
}

// ---------------------------------------------------------------------------
// Document — the complete document model
// ---------------------------------------------------------------------------

export interface DocumentData {
  /** Theme variant to apply */
  theme: ThemeVariant;

  /** Academic course information for the header */
  course: CourseInfo;

  /** Logical content sections */
  sections: Section[];

  /** Optional theme customization overrides */
  themeOverrides?: {
    /** Custom logo path */
    logoPath?: string;
    /** Custom watermark path */
    watermarkPath?: string;
    /** Show/hide watermark (default: true) */
    showWatermark?: boolean;
    /** Custom primary color override */
    primaryColor?: string;
    /** Custom secondary color override */
    secondaryColor?: string;
    /** Font size override (default: "14px") */
    fontSize?: string;
    /** Line height override (default: 1.25) */
    lineHeight?: number;
  };
}
