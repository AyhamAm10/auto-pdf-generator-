/**
 * ==============================================================================
 * Application — Input Validation
 * ==============================================================================
 * 
 * Validates input data using Zod schemas.
 * Provides clear, actionable error messages.
 * ==============================================================================
 */

import { z } from 'zod';

// ---------------------------------------------------------------------------
// Content Block Schemas
// ---------------------------------------------------------------------------

const HeadingBlockSchema = z.object({
  type: z.literal('heading'),
  level: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  text: z.string().min(1),
  badge: z.string().optional(),
  prefix: z.string().optional(),
  icon: z.string().optional(),
});

const ParagraphBlockSchema = z.object({
  type: z.literal('paragraph'),
  text: z.string().optional(),
  html: z.string().optional(),
  highlight: z.boolean().optional(),
});

const ListBlockSchema = z.object({
  type: z.literal('list'),
  style: z.enum(['bullet', 'numbered', 'check', 'alpha']).optional(),
  items: z.array(z.union([
    z.string(),
    z.object({
      text: z.string(),
      subItems: z.array(z.string()).optional(),
      badge: z.string().optional(),
    }),
  ])),
});

const CalloutBlockSchema = z.object({
  type: z.literal('callout'),
  variant: z.enum(['note', 'important', 'exam_tip', 'definition', 'info']),
  title: z.string().optional(),
  content: z.union([z.string(), z.array(z.string())]),
  icon: z.string().optional(),
});

const TableBlockSchema = z.object({
  type: z.literal('table'),
  title: z.string().optional(),
  headers: z.array(z.string()),
  rows: z.array(z.array(z.string())),
  colWidths: z.array(z.string()).optional(),
});

const DefinitionsBlockSchema = z.object({
  type: z.literal('definitions'),
  title: z.string().optional(),
  items: z.array(z.object({
    term: z.string(),
    definition: z.string(),
    example: z.string().optional(),
  })),
});

const QuestionBlockSchema = z.object({
  type: z.literal('question'),
  question: z.string().min(1),
  options: z.array(z.string()).optional(),
  correctOptionIndex: z.number().int().min(0).optional(),
  answer: z.string().optional(),
  explanation: z.string().optional(),
  tag: z.string().optional(),
});

const QuoteBlockSchema = z.object({
  type: z.literal('quote'),
  text: z.string().min(1),
  author: z.string().optional(),
  source: z.string().optional(),
});

const ImageBlockSchema = z.object({
  type: z.literal('image'),
  src: z.string().min(1),
  caption: z.string().optional(),
  width: z.string().optional(),
});

const SummaryBlockSchema = z.object({
  type: z.literal('summary'),
  title: z.string().optional(),
  takeaways: z.array(z.string()),
});

const DividerBlockSchema = z.object({
  type: z.literal('divider'),
  style: z.enum(['solid', 'dashed', 'dotted', 'gradient', 'with-icon']).optional(),
  icon: z.string().optional(),
});

const ContentBlockSchema = z.discriminatedUnion('type', [
  HeadingBlockSchema,
  ParagraphBlockSchema,
  ListBlockSchema,
  CalloutBlockSchema,
  TableBlockSchema,
  DefinitionsBlockSchema,
  QuestionBlockSchema,
  QuoteBlockSchema,
  ImageBlockSchema,
  SummaryBlockSchema,
  DividerBlockSchema,
]);

// ---------------------------------------------------------------------------
// Section Schema
// ---------------------------------------------------------------------------

const SectionSchema = z.object({
  title: z.string(),
  blocks: z.array(ContentBlockSchema),
});

// ---------------------------------------------------------------------------
// Course Info Schema
// ---------------------------------------------------------------------------

const CourseInfoSchema = z.object({
  department: z.string().min(1, 'القسم مطلوب'),
  year: z.string().min(1, 'السنة الدراسية مطلوبة'),
  semester: z.string().min(1, 'الفصل الدراسي مطلوب'),
  subject: z.string().min(1, 'اسم المادة مطلوب'),
  subjectType: z.string().min(1, 'طبيعة المادة مطلوبة'),
  lecture: z.string().min(1, 'المحاضرة مطلوبة'),
  doctor: z.string().optional(),
  academicYear: z.string().optional(),
});

// ---------------------------------------------------------------------------
// Document Schema
// ---------------------------------------------------------------------------

const ThemeOverridesSchema = z.object({
  logoPath: z.string().optional(),
  watermarkPath: z.string().optional(),
  showWatermark: z.boolean().optional(),
  primaryColor: z.string().optional(),
  secondaryColor: z.string().optional(),
  fontSize: z.string().optional(),
  lineHeight: z.number().optional(),
}).optional();

export const DocumentDataSchema = z.object({
  theme: z.enum(['ershad', 'moallem', 'manahij', 'purple']),
  course: CourseInfoSchema,
  sections: z.array(SectionSchema).min(1, 'يجب أن يحتوي المستند على قسم واحد على الأقل'),
  themeOverrides: ThemeOverridesSchema,
});

// ---------------------------------------------------------------------------
// Validation function
// ---------------------------------------------------------------------------

export interface ValidationResult {
  success: boolean;
  errors?: string[];
}

/**
 * Validate document data against the schema.
 * Returns structured validation result with clear error messages.
 */
export function validateDocument(data: unknown): ValidationResult {
  const result = DocumentDataSchema.safeParse(data);

  if (result.success) {
    return { success: true };
  }

  const errors = result.error.issues.map(issue => {
    const path = issue.path.join('.');
    return `[${path}] ${issue.message}`;
  });

  return { success: false, errors };
}
