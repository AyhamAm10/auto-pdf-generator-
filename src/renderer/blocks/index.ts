/**
 * ==============================================================================
 * Block Renderer — Registry
 * ==============================================================================
 * 
 * Maps content block types to their renderer functions.
 * Adding a new block type = add a new renderer file + register here.
 * ==============================================================================
 */

import { ContentBlock } from '../../domain/document';
import { ResolvedTheme } from '../../domain/theme';

import { renderHeading } from './heading';
import { renderParagraph } from './paragraph';
import { renderList } from './list';
import { renderCallout } from './callout';
import { renderTable } from './table';
import { renderDefinitions } from './definitions';
import { renderQuestion } from './question';
import { renderQuote } from './quote';
import { renderImage } from './image';
import { renderSummary } from './summary';
import { renderDivider } from './divider';

/**
 * Render a single content block to HTML.
 */
export function renderBlock(block: ContentBlock, theme: ResolvedTheme): string {
  switch (block.type) {
    case 'heading':
      return renderHeading(block, theme);
    case 'paragraph':
      return renderParagraph(block);
    case 'list':
      return renderList(block);
    case 'callout':
      return renderCallout(block);
    case 'table':
      return renderTable(block);
    case 'definitions':
      return renderDefinitions(block);
    case 'question':
      return renderQuestion(block);
    case 'quote':
      return renderQuote(block);
    case 'image':
      return renderImage(block);
    case 'summary':
      return renderSummary(block);
    case 'divider':
      return renderDivider(block);
    default:
      console.warn(`[Block Registry] Unknown block type: ${(block as any).type}`);
      return '';
  }
}

/**
 * Render an array of content blocks to HTML.
 */
export function renderBlocks(blocks: ContentBlock[], theme: ResolvedTheme): string {
  return blocks.map(block => renderBlock(block, theme)).join('\n');
}
