# Screen 05, the reader: blocks, acceptance and cost log

Status: **R5 built 2026-10-26 (highlighting from the panel). R4 built and verified 2026-10-26 (verse panel; Sonnet verifier of R2–R4 PASS WITH FIXES, fixes applied, `reader-05-verification-r4.md`). R3 built (translation picker). R2 built (strip, text size, arrival mark). R1 built and verified 2026-10-26 (night; Sonnet verifier PASS WITH FIXES, fixes applied, report `reader-05-verification-r1.md`); R2 onwards open.** Inputs: DESIGN.md «Full-text reader (05)», «Reader side panel», «Highlighting», «Notes», «06 verse»; DECISIONS 2026-10-21/22 (reader structure, highlighting, notes), 2026-10-06 «Read the whole Bible in the site»; prototype `docs/research/proposals/reader-05-06/`; plan of the data behind it `docs/features/corpus-bibles-and-fathers.md`. Pedro's order (2026-10-25/26): build it block by block on the local files (Bibles now, Fathers when Phase 2 delivers), verify each block, freeze each block in the commit kit, Pedro approves visually before any commit; the independent Sonnet verifier runs after R1 and after R4 only (Pedro, 2026-10-26).

## Blocks

| Block | What | Reuses | Verified by |
|---|---|---|---|
| R1 | Chapter page `/es/biblia/<book>/<chapter>`: crumbs, title, edition line, one block per verse with its number in the margin (above the text below 768), edition and licence at the foot, previous and next chapter, sidebar books as links, 1,189 + deuterocanonical chapters generated at build | `PageHeader`, `Breadcrumbs`, `NeighborLinks`, title entrance, sidebar | `e2e/reader-chapter.spec.ts`, `tools/check-bible-reader.mjs`, screenshots at 1440 and 390, Sonnet verifier |
| R2 | Reader strip under the top bar (tools right), text size A− / A+ (17–29, seven steps, keeps the paragraph at the top of the viewport, disabled at the ends, remembered in the browser), the arrival mark on `#v-N` (200 ms fill, holds 1.8 s, fades 1.2 s, 2 px accent bar) | tokens `mark`, `hash-arrival`, `scroll.ts` | spec with per-frame sampling of the mark; reduced motion |
| R3 | Translation picker (listbox «Despliegue», groups Español / Inglés) and the chapter in every translation that has it, swapped on the client without navigation; a visible note when the chosen translation numbers the chapter differently (Psalms in the Douay-Rheims) | the «Despliegue» of the sidebar and the picker pattern of DESIGN | spec: keyboard (↑ ↓ Home End Enter Esc), flip up, one open at a time |
| R4 | Side panel «Panel al costado» opened by tapping a verse: reference, «Citar» (short citation) and «Copiar enlace»; ≥ 1100 a right column that makes room, below it a half sheet | `side-panel.tsx`, `escape-stack`, citation window motion | specs per frame, focus return, Esc; **Sonnet verifier** |
| R5 | Highlighting from the panel: five colours, soft fill, saved in this browser, undo bar | tokens of DESIGN «Highlight tones» | spec; storage in try/catch |
| R6 | Selection toolbar for dragged words (snaps to whole words; docked on touch) | — | spec; touch emulation |
| R7 | Notes: editor in the panel, «Notas al costado» and «Marca en el margen», delete dialog with the 3-second hold | — | spec |
| R8 | The same reader for the Fathers' works (divisions with their locators, edition and licence), once Phase 2 delivers files | `ChapterText` generalised only if a second source needs it | spec on two real works |

Out of scope here: the book index and book pages (their proposal waits for Pedro's pick), the word-by-word and the Latin («Leer en latín» needs a Latin source), «Dónde se usa en Doctrina», accounts.

## Deviations and calls (agent's, to confirm; see DECISIONS «Reader R1»)

- The corpus has no paragraph breaks, so the Bible shows **one block per verse** (the proposal's John 6 has hand-made paragraphs with inline numbers). Paragraphs could come later from the USFM of the WEB.
- Chapter pages are generated for Spanish only (English content waits, DECISIONS 2026-10-22 D3); the deuterocanonical books read in the Douay-Rheims with the decided notice.
- Sidebar books link to chapter 1 until the book pages exist (TODO at the call site); the book stays marked while any of its chapters is open.

## Cost log (Claude weekly, Sonnet 5.5 high, only session on the account that night; Pedro asked for it on 2026-10-26)

| Step | Weekly before → after | Note |
|---|---|---|
| Session start to blocks 61–62 (phases 0–1, Phase 2 prep) | 62 → 63 % | docs reading, SQL, loader, reader layer, two blocks |
| Reading the reader design and prototype | 63 → 63 % | no code |
| R1 build, specs, one full suite | 63 → 63 % | the endpoint reports whole percent: the whole of R1 cost less than one point |
| R1 Sonnet verifier (150k subagent tokens, 6 min) and its fixes | 63 → 63 % | still under one whole point |
| R2 build, specs (frames), a debugging detour, one full suite, a11y flake fix | 63 → 64 % | one point crossed during R2 |
| R3 build (picker, motion move, 16 specs, axe cases) | 64 → 64 % | |
| R4 build, verifier (186k subagent tokens, 14 min) and its eleven fixes, two full suites | 64 → 64 % | |
| R5 build (model, store, undo bar, dots, 8 specs) | 64 → 64 % | |
