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
    primary: '#1B365D',     // أزرق داكن ملكي
    secondary: '#0284C7',   // أزرق سماوي حيوي
    accent: '#DC2626',      // أحمر للأرقام والتنبيهات
    lightBg: '#F0F7FF',
    border: '#BAE6FD',
    heading: '#1B365D',
  },

  typography: {
    fontFamily: "'IBM Plex Sans Arabic', 'Readex Pro', 'Cairo', sans-serif",
    fontSize: '13.5px',
    lineHeight: 1.36,
  },

  assets: {
    logoFile: 'logo.png',
    showWatermark: true,
  },
};
