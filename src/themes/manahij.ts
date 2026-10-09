/**
 * ==============================================================================
 * Theme: Manahij (المناهج وتقنيات التعليم والإدارة) — Red
 * ==============================================================================
 * Ruby red / maroon theme for the curriculum and education technology department.
 */

import { ThemeDefinition } from '../domain/theme';

export const manahijTheme: ThemeDefinition = {
  id: 'manahij',

  colors: {
    primary: '#881337',     // بوردو / عنابي داكن للعناوين الرئيسية
    secondary: '#005BB5',   // كحلي أزرق حيوي للعناوين الفرعية والمفاتيح (لون متباين مع البوردو)
    accent: '#DC2626',      // أحمر قوي للتنبيهات
    lightBg: '#FFF1F2',
    border: '#FECDD3',
    heading: '#881337',
  },

  typography: {
    fontFamily: "'Simplified Arabic', Arial, Tahoma, sans-serif",
    fontSize: '18px',
    lineHeight: 1.5,
  },

  assets: {
    logoFile: 'photo_2026-09-09_13-47-31.png',
    showWatermark: true,
  },
};
