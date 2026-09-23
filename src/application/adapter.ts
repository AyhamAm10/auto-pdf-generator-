/**
 * ==============================================================================
 * Application — Legacy Format Adapter
 * ==============================================================================
 * 
 * Converts the old LectureDocument format (meta + elements[])
 * to the new DocumentData format (course + sections[]).
 * 
 * This allows the new system to accept existing JSON data without modification.
 * ==============================================================================
 */

import { DocumentData, Section, ContentBlock, ThemeVariant } from '../domain/document';

/**
 * Legacy data format from the old bot.
 */
interface LegacyDocument {
  meta: {
    department: string;
    year: string;
    semester: string;
    subject: string;
    subjectType: string;
    lecture: string;
    totalPages?: number | string;
    professor?: string;
    academicYear?: string;
  };
  theme?: {
    branchId?: string;
    logoPath?: string;
    watermarkPath?: string;
    showWatermark?: boolean;
    primaryColor?: string;
    secondaryColor?: string;
    fontSize?: string;
    lineHeight?: number | string;
    fontFamily?: string;
  };
  elements?: LegacyElement[];
  pages?: Array<{
    pageNumber?: number;
    elements?: LegacyElement[];
  }>;
}

interface LegacyElement {
  type: string;
  [key: string]: any;
}

/**
 * Map legacy branchId to new ThemeVariant.
 */
function mapBranchToTheme(branchId?: string, department?: string): ThemeVariant {
  const id = (branchId || '').toLowerCase();
  const dept = (department || '').toLowerCase();

  // Green theme
  if (id === 'moallem' || id === 'green' || dept.includes('معلم') || dept.includes('صف')) {
    return 'moallem';
  }

  // Red theme
  if (id === 'manahij' || id === 'teqniyat' || id === 'red' ||
      dept.includes('مناهج') || dept.includes('تقنيات') || dept.includes('إدارة')) {
    return 'manahij';
  }

  // Purple theme
  if (id === 'purple' || id === 'atfal' ||
      dept.includes('طفول') || dept.includes('أطفال') || dept.includes('خاصة')) {
    return 'purple';
  }

  // Default: blue
  return 'ershad';
}

/**
 * Convert a legacy element to a new ContentBlock.
 */
function convertElement(el: LegacyElement): ContentBlock | null {
  if (!el || !el.type) return null;

  switch (el.type) {
    case 'h1':
      return {
        type: 'heading',
        level: 1,
        text: el.text || '',
        badge: el.badge,
        icon: el.icon,
      };

    case 'h2':
      return {
        type: 'heading',
        level: 2,
        text: el.text || '',
        prefix: el.prefix,
      };

    case 'h3':
      return {
        type: 'heading',
        level: 3,
        text: el.text || '',
      };

    case 'p':
      return {
        type: 'paragraph',
        text: el.text,
        html: el.html,
        highlight: el.highlight,
      };

    case 'line':
      return {
        type: 'divider',
        style: el.style || 'solid',
        icon: el.icon,
      };

    case 'list':
      return {
        type: 'list',
        style: el.style || 'bullet',
        items: el.items || [],
      };

    case 'callout':
    case 'box':
      return {
        type: 'callout',
        variant: el.variant || 'note',
        title: el.title,
        content: el.content || '',
        icon: el.icon,
      };

    case 'table':
      return {
        type: 'table',
        title: el.title,
        headers: el.headers || [],
        rows: el.rows || [],
        colWidths: el.colWidths,
      };

    case 'definitions':
      return {
        type: 'definitions',
        title: el.title,
        items: el.items || [],
      };

    case 'qa':
      return {
        type: 'question',
        question: el.question || '',
        options: el.options,
        correctOptionIndex: el.correctOptionIndex,
        answer: el.answer,
        explanation: el.explanation,
        tag: el.tag,
      };

    case 'quote':
      return {
        type: 'quote',
        text: el.text || '',
        author: el.author,
        source: el.source,
      };

    case 'image':
      return {
        type: 'image',
        src: el.src || '',
        caption: el.caption,
        width: el.width,
      };

    case 'summary':
      return {
        type: 'summary',
        title: el.title,
        takeaways: el.takeaways || [],
      };

    case 'section':
      // Legacy sections contain nested elements
      // Flatten them into blocks
      if (el.elements) {
        const blocks = convertElements(el.elements);
        // Wrap in a section-like structure
        return blocks.length > 0 ? blocks[0] : null;
      }
      return null;

    default:
      console.warn(`[Adapter] Unknown legacy element type: ${el.type}`);
      return null;
  }
}

/**
 * Convert an array of legacy elements to new ContentBlocks.
 */
function convertElements(elements: LegacyElement[]): ContentBlock[] {
  return elements
    .map(el => {
      if (el.type === 'section' && Array.isArray(el.elements)) {
        // Recursively flatten section contents
        return convertElements(el.elements);
      }
      const block = convertElement(el);
      return block ? [block] : [];
    })
    .flat();
}

/**
 * Split a flat list of blocks into logical sections.
 * Sections are delimited by H1 headings.
 */
function splitIntoSections(blocks: ContentBlock[]): Section[] {
  if (blocks.length === 0) {
    return [{ title: '', blocks: [] }];
  }

  const sections: Section[] = [];
  let currentTitle = '';
  let currentBlocks: ContentBlock[] = [];

  for (const block of blocks) {
    if (block.type === 'heading' && block.level === 1) {
      // Start a new section
      if (currentBlocks.length > 0 || currentTitle) {
        sections.push({ title: currentTitle, blocks: currentBlocks });
      }
      currentTitle = block.text;
      currentBlocks = [];
      // Don't add the H1 heading to the blocks — it will be rendered from section title
    } else {
      currentBlocks.push(block);
    }
  }

  // Push the final section
  if (currentBlocks.length > 0 || currentTitle) {
    sections.push({ title: currentTitle, blocks: currentBlocks });
  }

  // If no sections were created (no H1 headings), wrap everything in one section
  if (sections.length === 0) {
    return [{ title: '', blocks }];
  }

  return sections;
}

/**
 * Check if the data appears to be in legacy format.
 */
export function isLegacyFormat(data: any): boolean {
  return (
    data &&
    typeof data === 'object' &&
    'meta' in data &&
    typeof data.meta === 'object' &&
    ('elements' in data || 'pages' in data) &&
    !('course' in data)
  );
}

/**
 * Convert legacy LectureDocument format to new DocumentData format.
 */
export function adaptLegacyDocument(legacy: any): DocumentData {
  const doc = legacy as LegacyDocument;
  const meta = doc.meta || {} as LegacyDocument['meta'];

  // Gather all elements from either elements[] or pages[]
  let allElements: LegacyElement[] = [];

  if (Array.isArray(doc.elements) && doc.elements.length > 0) {
    allElements = doc.elements;
  } else if (Array.isArray(doc.pages)) {
    for (const page of doc.pages) {
      if (Array.isArray(page.elements)) {
        allElements.push(...page.elements);
      }
    }
  }

  // Convert elements to new content blocks
  const blocks = convertElements(allElements);

  // Split into logical sections
  const sections = splitIntoSections(blocks);

  // Map theme
  const themeVariant = mapBranchToTheme(doc.theme?.branchId, meta.department);

  return {
    theme: themeVariant,
    course: {
      department: meta.department || 'كلية التربية',
      year: meta.year || 'السنة الدراسية',
      semester: meta.semester || 'الفصل الأول',
      subject: meta.subject || 'المادة الأكاديمية',
      subjectType: meta.subjectType || 'نظري',
      lecture: meta.lecture || '1',
      doctor: meta.professor,
      academicYear: meta.academicYear,
      totalPages: meta.totalPages ? Number(meta.totalPages) : undefined,
    },
    sections,
    themeOverrides: doc.theme ? {
      logoPath: doc.theme.logoPath,
      watermarkPath: doc.theme.watermarkPath,
      showWatermark: doc.theme.showWatermark,
      primaryColor: doc.theme.primaryColor,
      secondaryColor: doc.theme.secondaryColor,
      fontSize: doc.theme.fontSize,
      lineHeight: typeof doc.theme.lineHeight === 'number' ? doc.theme.lineHeight : undefined,
    } : undefined,
  };
}
