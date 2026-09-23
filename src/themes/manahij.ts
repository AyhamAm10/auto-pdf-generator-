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
    primary: '#881337',     // عنابي داكن
    secondary: '#E11D48',   // أحمر ياقوتي
    accent: '#DC2626',      // أحمر للأرقام
    lightBg: '#FFF1F2',
    border: '#FECDD3',
    heading: '#881337',
  },

  typography: {
    fontFamily: "'IBM Plex Sans Arabic', 'Readex Pro', 'Cairo', sans-serif",
    fontSize: '13.5px',
    lineHeight: 1.36,
  },

  assets: {
    logoFile: 'photo_2026-09-09_13-47-31.png',
    showWatermark: true,
  },
};
