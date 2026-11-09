/**
 * ==============================================================================
 * Theme: Diploma (دبلوم التأهيل التربوي) — Petrol Navy & Amber Gold
 * ==============================================================================
 * Elegant, colorful academic theme for Diploma courses.
 * Royal petrol navy primary, vibrant teal secondary, and rich amber/gold accent.
 */

import { ThemeDefinition } from '../domain/theme';

export const diplomaTheme: ThemeDefinition = {
  id: 'diploma',

  colors: {
    primary: '#0F3B5F',     // كحلي بترولي نيلي ملكي للعناوين الرئيسية والترويسة
    secondary: '#0284C7',   // أزرق بترولي مشرق حيوي للعناوين الفرعية والمصطلحات
    accent: '#D97706',      // ذهبي عنبري فاخر للتنبيهات وعلامات التمييز
    lightBg: '#F0F9FF',     // خلفية ثلجية مائلة للبترولي الفاتح
    border: '#BAE6FD',      // حدود ناعمة
    heading: '#0F3B5F',
  },

  typography: {
    fontFamily: "'Simplified Arabic', Arial, Tahoma, sans-serif",
    fontSize: '19px',
    lineHeight: 1.75,
  },

  assets: {
    logoFile: 'photo_2026-09-09_13-47-31.png',
    showWatermark: true,
  },
};

