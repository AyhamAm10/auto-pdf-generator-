# PDF Generator Bot Rules

- **Zero Over-Analysis**: Never spend time analyzing unrelated files or reading past lectures when asked for a small change. Go directly to the target file.
- **Strict Separation of Concerns**:
  - Content Layer: [data.json](file:///c:/work/zien/library%20platform/auto-generate-pdf/v2/data.json) is pure data (records with semantic `type`). No styling in JSON.
  - Styling Layer: [src/renderer/styles/](file:///c:/work/zien/library%20platform/auto-generate-pdf/v2/src/renderer/styles) & [src/themes/](file:///c:/work/zien/library%20platform/auto-generate-pdf/v2/src/themes). All font sizes, colors, margins, and layout rules live here.
- **Archive Rule**: All `data-lecture-*.json` and `build-*.js` files are archived and frozen. Do not touch or analyze them.
- **Page Break Element (bp)**: Use `{"type": "bp"}` in `data.json` to force a page break before a major section (e.g. H2) to prevent it from getting cut off at the bottom of a page. Do NOT overuse it.
- **Generate Command**: `npm.cmd run generate` generates the PDF in `output/`.
