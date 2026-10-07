/**
 * ==============================================================================
 * Theme: Ershad (الإرشاد النفسي) — Blue
 * ==============================================================================
 * Default theme. Royal blue color palette with the main center logo.
 */

import { ThemeDefinition } from '../domain/theme';

export const ershadTheme: ThemeDefinition = {
  id: 'ershad',

  colors: {
    primary: '#005BB5',     // أزرق ملكي حيوي وواضح للطباعة
    secondary: '#008A3E',   // أخضر حيوي للعناوين الفرعية والنقاط
    accent: '#DC2626',      // أحمر قوي للتنبيهات والملاحظات
    lightBg: '#F0F7FF',
    border: '#93C5FD',
    heading: '#005BB5',
  },

  typography: {
    fontFamily: "'Simplified Arabic', Arial, Tahoma, sans-serif",
    fontSize: '16px',
    lineHeight: 1.5,
  },

  assets: {
    logoFile: 'logo.png',
    showWatermark: true,
  },
};
