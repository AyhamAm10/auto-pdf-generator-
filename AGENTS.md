# Project Guidelines & Agent Directives (AGENTS.md)

See [agent.md](file:///c:/work/zien/library%20platform/auto-generate-pdf/v2/agent.md) and [role.md](file:///c:/work/zien/library%20platform/auto-generate-pdf/v2/role.md) for full details.

## Core Rules for any AI Assistant:
1. **Speed & Zero Over-Analysis**:
   - For minor edits (font size, color, text), go directly to the target file.
   - Do NOT spend time scanning unrelated files or archived lectures.
   - Edit only the single file responsible.

2. **Strict Layer Isolation**:
   - **Data/Content edits**: Edit `data.json` ONLY. No styling tags in JSON.
   - **Style/Template edits**: Edit `src/renderer/styles/` or `src/themes/` ONLY. NEVER edit `data.json` for style changes.

3. **Single Active Data Source**:
   - `data.json` is the ONLY active data file.
   - All `data-lecture-*.json` and `build-*.js` files are archived and frozen. Do not touch or analyze them.

4. **Fast Routing**:
   - Element font sizes (`h1`, `h2`, `h3`, `p`, etc.) -> `src/renderer/styles/blocks.ts`
   - Base typography -> `src/renderer/styles/base.ts` or theme files
   - Active Lecture Content -> `data.json`
   - Page Break -> `{"type": "bp"}` in `data.json` (use judiciously to prevent orphan headings)
   - Generate command -> `npm.cmd run generate`

5. **Formatting Rules & Content Delimiters (Parentheses, Quotes, Callouts, Q&A)**:
   - **Parentheses `(...)`**: Remarks or notes inside parentheses stay **as-is in the running paragraph (`p`)**. Do NOT extract them into a separate callout box titled "مهم".
   - **Quotation Marks `"..."`**: Any word or phrase in quotes (`"..."`, `“...”`, `«...»`) is automatically styled with the secondary theme color (`var(--secondary-color)`).
   - **Doctor Commentary & Exam Notes `$$ ... $$`**: Text delimited by `$$ ... $$` is placed in `{"type": "callout", "title": "مهم"}`.
   - **Supplementary Reading `~ ... ~`**: Text delimited by `~ ... ~` is placed in `{"type": "callout", "title": "للاطلاع"}`.
   - **Questions & Answers (`س` and `ج`)**: Use `س:` for questions and `ج:` for answers (styled automatically as distinct bold leads).
   - **Paragraph Priority & Clean Callouts**: Flowing paragraphs (`p`) always have primary priority. Callouts are reserved strictly for explicit delimiters (`$$...$$` or `~...~`) and maintain basic academic styling with subtle transparency.

6. **Fast PDF Extraction & Generation Pipeline**:
   - For processing new lecture PDFs into JSON and generating documents, strictly follow [generate.md](file:///c:/work/zien/library%20platform/auto-generate-pdf/v2/generate.md).
   - Zero inspection of source code files (`.ts`, `.js`, `.css`). Read only `.md` files and target PDF.
