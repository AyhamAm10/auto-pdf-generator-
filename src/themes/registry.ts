/**
 * ==============================================================================
 * Theme Registry
 * ==============================================================================
 * 
 * Centralized registry of all available themes.
 * To add a new theme:
 *   1. Create a new theme file (e.g., src/themes/my-theme.ts)
 *   2. Import and register it here
 *   3. Add the variant to ThemeVariant union in domain/document.ts
 * ==============================================================================
 */

import { ThemeDefinition, ResolvedTheme } from '../domain/theme';
import { ThemeVariant } from '../domain/document';
import { loadAssetAsDataUri } from '../infrastructure/asset-loader';

import { ershadTheme } from './ershad';
import { moallemTheme } from './moallem';
import { manahijTheme } from './manahij';
import { purpleTheme } from './purple';

// ---------------------------------------------------------------------------
// Registry
// ---------------------------------------------------------------------------

const themeRegistry: Record<string, ThemeDefinition> = {
  ershad: ershadTheme,
  moallem: moallemTheme,
  manahij: manahijTheme,
  purple: purpleTheme,
};

/**
 * Get the list of all registered theme IDs.
 */
export function getAvailableThemes(): string[] {
  return Object.keys(themeRegistry);
}

/**
 * Check if a theme variant is registered.
 */
export function isValidTheme(variant: string): variant is ThemeVariant {
  return variant in themeRegistry;
}

/**
 * Get a theme definition by its variant ID.
 * Throws if the theme is not found.
 */
export function getThemeDefinition(variant: ThemeVariant): ThemeDefinition {
  const theme = themeRegistry[variant];
  if (!theme) {
    throw new Error(
      `Theme "${variant}" is not registered. Available themes: ${getAvailableThemes().join(', ')}`
    );
  }
  return theme;
}

/**
 * Resolve a theme definition into a fully resolved theme with loaded assets.
 * This loads logo/watermark files and converts them to base64 data URIs.
 */
export function resolveTheme(
  variant: ThemeVariant,
  assetsDir: string,
  overrides?: {
    logoPath?: string;
    watermarkPath?: string;
    showWatermark?: boolean;
    primaryColor?: string;
    secondaryColor?: string;
    fontSize?: string;
    lineHeight?: number;
  }
): ResolvedTheme {
  const definition = getThemeDefinition(variant);

  // Load logo
  const logoUri = overrides?.logoPath
    ? loadAssetAsDataUri(overrides.logoPath, assetsDir)
    : loadAssetAsDataUri(definition.assets.logoFile, assetsDir);

  // Load watermark (defaults to logo)
  const watermarkFile = definition.assets.watermarkFile || definition.assets.logoFile;
  const watermarkUri = overrides?.watermarkPath
    ? loadAssetAsDataUri(overrides.watermarkPath, assetsDir)
    : loadAssetAsDataUri(watermarkFile, assetsDir);

  const showWatermark = overrides?.showWatermark ?? definition.assets.showWatermark;

  return {
    id: definition.id,

    colors: {
      primary: overrides?.primaryColor || definition.colors.primary,
      secondary: overrides?.secondaryColor || definition.colors.secondary,
      accent: definition.colors.accent,
      lightBg: definition.colors.lightBg,
      border: definition.colors.border,
      heading: definition.colors.heading,
    },

    typography: {
      fontFamily: definition.typography.fontFamily,
      fontSize: overrides?.fontSize || definition.typography.fontSize,
      lineHeight: overrides?.lineHeight ?? definition.typography.lineHeight,
    },

    assets: {
      logoUri,
      watermarkUri,
      showWatermark,
    },
  };
}
