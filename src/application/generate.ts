/**
 * ==============================================================================
 * Application — Generate PDF
 * ==============================================================================
 * 
 * Main generation pipeline: validate → adapt → resolve theme → render → PDF
 * ==============================================================================
 */

import * as path from 'path';
import { DocumentData } from '../domain/document';
import { isLegacyFormat, adaptLegacyDocument } from './adapter';
import { resolveTheme } from '../themes/registry';
import { renderDocument } from '../renderer/document-renderer';
import { buildPuppeteerFooterTemplate } from '../renderer/layout/footer-renderer';
import { buildPuppeteerHeaderTemplate } from '../renderer/layout/header-renderer';
import { ResolvedTheme } from '../domain/theme';

export interface GenerateOptions {
  /** Base directory for resolving assets (logos, images) */
  assetsDir: string;
  /** Custom output path for the PDF file */
  outputPath?: string;
}

export interface GenerateResult {
  /** Path to the generated PDF */
  pdfPath: string;
  /** Path to the HTML preview */
  previewHtmlPath: string;
  /** The HTML content */
  html: string;
  /** Resolved theme */
  theme: ResolvedTheme;
  /** Resolved document data */
  document: DocumentData;
}

/**
 * Prepare document data from raw JSON input.
 * Auto-detects legacy format and converts if needed.
 */
export function prepareDocument(rawData: any): DocumentData {
  if (isLegacyFormat(rawData)) {
    console.log('📋 تم اكتشاف تنسيق البيانات القديم — جاري التحويل التلقائي...');
    return adaptLegacyDocument(rawData);
  }

  // Assume new format
  return rawData as DocumentData;
}

/**
 * Generate the complete HTML for a document.
 */
export function generateHtml(
  doc: DocumentData,
  assetsDir: string,
  totalPages?: number
): { html: string; theme: ResolvedTheme } {
  // Resolve the theme with assets
  const theme = resolveTheme(
    doc.theme,
    assetsDir,
    doc.themeOverrides
  );

  // Render the HTML document
  const html = renderDocument(doc, theme, totalPages);

  return { html, theme };
}

/**
 * Build the Puppeteer header template for a document (corner notch on subsequent pages).
 */
export function getHeaderTemplate(
  doc: DocumentData,
  theme: ResolvedTheme
): string {
  return buildPuppeteerHeaderTemplate(doc.course, theme);
}

/**
 * Build the Puppeteer footer template for a document.
 */
export function getFooterTemplate(
  doc: DocumentData,
  theme: ResolvedTheme
): string {
  return buildPuppeteerFooterTemplate(doc.course, theme);
}

