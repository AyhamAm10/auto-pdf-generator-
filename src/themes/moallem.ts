/**
 * ==============================================================================
 * Theme: Moallem (معلم صف) — Green
 * ==============================================================================
 * Emerald green theme for the classroom teacher department.
 */

import { ThemeDefinition } from '../domain/theme';

export const moallemTheme: ThemeDefinition = {
  id: 'moallem',

  colors: {
    primary: '#064E3B',     // أخضر زمردي عميق
    secondary: '#059669',   // أخضر حيوي
    accent: '#DC2626',      // أحمر للأرقام
    lightBg: '#ECFDF5',
    border: '#A7F3D0',
    heading: '#064E3B',
  },

  typography: {
    fontFamily: "'Simplified Arabic', Arial, Tahoma, sans-serif",
    fontSize: '16px',
    lineHeight: 1.5,
  },

  assets: {
    logoFile: 'photo_2026-09-09_13-47-29 (2).png',
    showWatermark: true,
  },
};
