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
    primary: '#4C1D95',     // بنفسجي ملكي للعناوين الرئيسية
    secondary: '#0E7490',   // بترولي حيوي للعناوين الفرعية والمفاتيح (لون متباين ليس من مشتقات البنفسجي)
    accent: '#DC2626',      // أحمر للأرقام والتنبيهات
    lightBg: '#F5F3FF',
    border: '#DDD6FE',
    heading: '#4C1D95',
  },

  typography: {
    fontFamily: "'Simplified Arabic', Arial, Tahoma, sans-serif",
    fontSize: '18px',
    lineHeight: 1.5,
  },

  assets: {
    logoFile: 'photo_2026-09-09_13-47-29.png',
    showWatermark: true,
  },
};
