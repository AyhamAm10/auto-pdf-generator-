/**
 * ==============================================================================
 * Renderer Layout — Page Setup
 * ==============================================================================
 * 
 * A4 page dimensions, margins, and usable content area calculations.
 * ==============================================================================
 */

/** A4 page dimensions in mm */
export const PAGE_DIMENSIONS = {
  width: 210,     // mm
  height: 297,    // mm
} as const;

/** Page margins in mm */
export const PAGE_MARGINS = {
  horizontal: 10, // mm (both left and right)
  top: 0,         // mm (handled by header/content padding)
  bottom: 0,      // mm (handled by footer)
} as const;

/** Footer height in px (approximate) */
export const FOOTER_HEIGHT = 38; // px

/** Header height in px (approximate, first page only) */
export const HEADER_HEIGHT = 100; // px approximate
