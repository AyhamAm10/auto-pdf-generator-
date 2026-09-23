/**
 * ==============================================================================
 * Domain Model — Theme Configuration
 * ==============================================================================
 * 
 * Defines what a theme must provide.
 * Themes are purely declarative — they describe visual identity only.
 * ==============================================================================
 */

/**
 * Complete resolved theme configuration.
 * This is what the renderer receives — all values are resolved and ready to use.
 */
export interface ResolvedTheme {
  /** Theme identifier */
  id: string;

  /** Color palette */
  colors: {
    /** Primary color — headings, borders, table headers (e.g., "#1B365D") */
    primary: string;
    /** Secondary color — accents, ribbons, dots (e.g., "#0284C7") */
    secondary: string;
    /** Accent color — page numbers, alerts (e.g., "#DC2626") */
    accent: string;
    /** Light background for highlights and cards */
    lightBg: string;
    /** Border color for cards and elements */
    border: string;
    /** Heading text color */
    heading: string;
  };

  /** Typography settings */
  typography: {
    /** Font family stack */
    fontFamily: string;
    /** Base font size for body text */
    fontSize: string;
    /** Base line height */
    lineHeight: number;
  };

  /** Logo and watermark URIs (base64 data URIs after loading) */
  assets: {
    /** Logo data URI */
    logoUri: string;
    /** Watermark data URI */
    watermarkUri: string;
    /** Whether to show the watermark */
    showWatermark: boolean;
  };
}

/**
 * Theme definition — the static configuration that each theme file exports.
 * Asset paths are relative to the assets directory and will be resolved at load time.
 */
export interface ThemeDefinition {
  /** Theme identifier */
  id: string;

  /** Color palette */
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    lightBg: string;
    border: string;
    heading: string;
  };

  /** Typography defaults */
  typography: {
    fontFamily: string;
    fontSize: string;
    lineHeight: number;
  };

  /** Asset file names (relative to assets directory) */
  assets: {
    /** Logo file name in assets/ directory */
    logoFile: string;
    /** Watermark file name (defaults to logo if not set) */
    watermarkFile?: string;
    /** Show watermark by default */
    showWatermark: boolean;
  };
}
