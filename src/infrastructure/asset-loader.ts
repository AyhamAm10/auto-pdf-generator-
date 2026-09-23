/**
 * ==============================================================================
 * Infrastructure — Asset Loader
 * ==============================================================================
 * 
 * Handles loading images from the filesystem and converting to base64 data URIs
 * for embedding in HTML. Supports PNG, JPG, SVG.
 * ==============================================================================
 */

import * as fs from 'fs';
import * as path from 'path';

/**
 * MIME type mapping for common image extensions.
 */
const MIME_TYPES: Record<string, string> = {
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  svg: 'image/svg+xml',
  gif: 'image/gif',
  webp: 'image/webp',
};

/**
 * Resolve an image path and return it as a base64 data URI.
 * 
 * Supports:
 * - Already-resolved data URIs (returned as-is)
 * - HTTP/HTTPS URLs (returned as-is)
 * - Absolute file paths
 * - Relative file paths (resolved against assetsDir)
 * - File names (resolved against assetsDir)
 * 
 * @param imagePath - Path, URL, or data URI of the image
 * @param assetsDir - Base directory for resolving relative paths
 * @returns Base64 data URI string
 */
export function loadAssetAsDataUri(imagePath: string, assetsDir: string): string {
  if (!imagePath) {
    return '';
  }

  // Already a data URI or URL — return as-is
  if (
    imagePath.startsWith('data:') ||
    imagePath.startsWith('http://') ||
    imagePath.startsWith('https://')
  ) {
    return imagePath;
  }

  // Resolve the full file path
  const fullPath = path.isAbsolute(imagePath)
    ? imagePath
    : path.join(assetsDir, imagePath);

  if (!fs.existsSync(fullPath)) {
    console.warn(`[Asset Loader] File not found: ${fullPath}`);
    return imagePath; // Return original path as fallback
  }

  try {
    const ext = path.extname(fullPath).replace('.', '').toLowerCase();
    const mime = MIME_TYPES[ext] || 'image/png';
    const fileBuffer = fs.readFileSync(fullPath);
    return `data:${mime};base64,${fileBuffer.toString('base64')}`;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.warn(`[Asset Loader] Failed to read file ${fullPath}: ${message}`);
    return imagePath;
  }
}
