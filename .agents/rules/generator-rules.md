# PDF Generator Bot Rules

- **Zero Over-Analysis**: Never spend time analyzing unrelated files or reading past lectures when asked for a small change. Go directly to the target file.
- **Strict Separation of Concerns**:
  - Content Layer: [data.json](file:///c:/work/zien/library%20platform/auto-generate-pdf/v2/data.json) is pure data (records with semantic `type`). No styling in JSON.
  - Styling Layer: [src/renderer/styles/](file:///c:/work/zien/library%20platform/auto-generate-pdf/v2/src/renderer/styles) & [src/themes/](file:///c:/work/zien/library%20platform/auto-generate-pdf/v2/src/themes). All font sizes, colors, margins, and layout rules live here.
- **Archive Rule**: All `data-lecture-*.json` and `build-*.js` files are archived and frozen. Do not touch or analyze them.
- **Formatting & Content Delimiters**:
  - Parentheses `(...)`: Remain inside running paragraphs (`p`). Never extract into callout boxes.
  - Quotations `"..."`: Colored automatically with the secondary theme color (`var(--secondary-color)`).
  - Doctor Commentary `$$...$$`: Placed in callout element with `title: "مهم"`.
  - Supplementary Reading `~...~`: Placed in callout element with `title: "للاطلاع"`.
  - Q&A Leads: Use `س:` for question and `ج:` for answer, each on its own line (question line is colored automatically, answer stays black).
  - Lecture Separator: `{"type": "lecture", "text": "المحاضرة الثانية"}` only when certain a new lecture begins (explicit in source or from the user); otherwise never separate.
  - Priority: Standard flowing paragraphs (`p`) always have primary priority. Callouts are reserved strictly for explicit delimiters (`$$...$$` and `~...~`) and use a light semi-transparent background.
- **Strict Direct Text-to-JSON Generation (Zero-Script Rule)**:
  - **FORBIDDEN**: Never create parser scripts, node tools, or temporary files in `scratch/`.
  - **FORBIDDEN**: Never read or modify code/builder files (`.ts`, `.js`, `.css`).
  - **MANDATORY**: When the user provides lecture text, parse it directly in-memory and write/update [data.json](file:///c:/work/zien/library%20platform/auto-generate-pdf/v2/data.json) immediately in a single step using file tools.
- **Generate Command**: `npm.cmd run generate` generates the PDF in `output/`.

