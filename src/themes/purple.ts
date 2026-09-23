/**
 * ==============================================================================
 * Theme: Purple (رياض الأطفال / التربية الخاصة) — Purple
 * ==============================================================================
 * Royal purple theme for the kindergarten and special education department.
 */

import { ThemeDefinition } from '../domain/theme';

export const purpleTheme: ThemeDefinition = {
  id: 'purple',

  colors: {
    primary: '#4C1D95',     // بنفسجي ملكي
    secondary: '#7C3AED',   // بنفسجي ساطع
    accent: '#DC2626',      // أحمر للأرقام
    lightBg: '#F5F3FF',
    border: '#DDD6FE',
    heading: '#4C1D95',
  },

  typography: {
    fontFamily: "'IBM Plex Sans Arabic', 'Readex Pro', 'Cairo', sans-serif",
    fontSize: '13.5px',
    lineHeight: 1.36,
  },

  assets: {
    logoFile: 'photo_2026-09-09_13-47-29.png',
    showWatermark: true,
  },
};
