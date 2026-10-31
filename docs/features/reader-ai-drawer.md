# Reader AI chat, variant 3 «Cajón a la izquierda» (UI only)

Intent: the UI of variant 3 of the «IA en el lector» proposal (https://claude.ai/artifact/KuWgzH6TWbanSmhkcMRyRi, archived in `docs/research/proposals/ai-reader/index.html`), exactly as the proposal, with scripted answers and no model calls. Decisions and Pedro's words: `DECISIONS.md` 2026-10-28 «AI chat in the reader: Pedro chose variant 3».

Out of scope: the simplifier (every variant), any backend, AI calls, saving to the notes store.

## Round 2: the inside of the drawer (2026-10-31, Pedro's picks; DECISIONS 2026-10-31)

Source of truth: `docs/research/proposals/ai-chat/source/template.html` (the published artifact v1), options `ctx: line, cmp: pinned, sg: chips, pl: pill, speed: 100, scroll: follow, status: live, ans: blocks, len: none, fu: chips, fAsk, fHist`. Everything inside the drawer follows it pixel for pixel, «(actual)» options included.

Blocks (each stops for Pedro's review and commit):
1. Context line «Una línea, se abre a pedido» (scope «Todo el corpus», notes on by default).
2. Pinned composer, chips over it with the empty heading, the selection line (hover; press scrolls the reader to the verse as third with the 2 s mark), «Seguir y soltar» with the «↓» button.
3. The answer as the artifact draws it: live status with seconds and «Consultó N textos», 100 ms per word with a softer word entry and no line jump, quotes and prose, follow chips, actions; quote citations open the site's citation window.
4. «Nueva conversación» and «Preguntas anteriores» (history in `localStorage`, the artifact's three examples as mock), «Preguntar sobre esto» on a selected fragment of an answer.

Deliberate differences (agent's calls), block 2: the chip row folds in 220 ms on the first question (the artifact removes it at once); the field gets the focus on opening only with a fine pointer (the artifact always focuses it; on a phone that would raise the keyboard every time); the artifact's field grows to 120 px when opened from a verse (a measuring slip of its own), the build keeps 40 px. The «Biblia» answer's verse links lead to Matthew 26 and 1 Corinthians 11 with the third-verse arrival.

Deliberate difference (agent's call), block 1: the artifact paints the head and the context line with a flat `--bg` that hides the wall texture under them (a seam in dark mode); the build keeps the texture continuous, as the approved drawer had it.

**Open, to see again after block 4 (Pedro, 2026-10-31):** the fade and shadow between the answers and the pinned composer are «una mejora» but do not fully convince him; left as is for now.

Usage log (Claude, Opus 5.5 high; weekly % from `usage_check.py`):
| Step | Weekly before | Weekly after |
|---|---|---|
| Session review and plan | 23 % | 23 % |
| Block 1, context line (built, measured against the artifact, specs, verify) | 23 % | 24 % |
| Block 2, pinned composer, chips, selection line, follow and release (built, measured, 315 reader specs, verify) | 24 % | 24 % |
| Pedro's note on block 2: the composer's own background looked abrupt → no own background (the drawer's texture), answers fade in 24 px, `shadow-strip` while text is hidden below | 24 % | 25 % |

## State (2026-10-29)

- **Integrated in this repo (fourteenth session), not committed yet.** New files copied verbatim from the kit; `reader-body.tsx` and `selection-toolbar.tsx` by patch; `reader-strip.tsx` and the chapter `page.tsx` merged by hand (`6b98b48` had removed the tree button, so the `treeToggle` hunks are gone). The clone `~/Desktop/dev/doctrina-ai` and the kit are no longer the place to work: everything happens here.
- **Pedro's review:** a very good base, far from finished; the refinements come from him in the next session.
- **Verified here:** typecheck, lint, format and build pass; `e2e/reader-ai-drawer.spec.ts` 28/28 (three specs now fold the tree with the header menu, `button[aria-controls="site-sidebar"]`; the opening-motion spec is timing-sensitive and failed once under 4 workers, passes alone and under 2).
- **Tests:** `e2e/reader-ai-drawer.spec.ts`, 28 tests.

## Files

New: `src/lib/ask-drawer.ts` (store: open, pill, focus), `src/components/ask-button.tsx` (the strip and phone button; in `components/` because features cannot import each other), `src/features/reader-ai/` (`ask-drawer.tsx` drawer and sheet, `drawer-room.ts` tree fold and column room, `reader-ask.tsx` orchestration and citations, `what-it-sees.tsx`, `scope-control.tsx`, `chat.tsx`, `answer.tsx` scripted timeline, `answer-parts.tsx`, `answer-actions.tsx`, `cite-preview.tsx` hover card, `quote-window.tsx`, `back-bar.tsx`, `word-marks.ts`, `motion.ts`, `tokens.ts`, `text.ts` es/en strings, `script.ts`, `quotes.ts`), `e2e/reader-ai-drawer.spec.ts`.
Modified: `src/features/reader/reader-strip.tsx` (optional `ask` slot after the chapter arrows), `reader-body.tsx` (phone button, selection «Preguntar» with pill, note cards hidden while open), `selection-toolbar.tsx` (optional «Preguntar» after «Nota»), `src/app/[lang]/bible/[book]/[chapter]/page.tsx` (strings and mount).

## Left to do

1. **Tokens and strings (next block, after Pedro commits the integration):** `globals.css` and `ui-text` were off-limits in the clone: every value without a token travels as a runtime CSS variable (`tokens.ts`, `motion.ts`, inline styles in `drawer-room.ts`). Move them to `@theme`/utilities and the strings of `text.ts` to `src/content/ui-text/es.ts`/`en.ts`. Table of names: `~/doctrina-ai-drawer-kit/tools/integration-notes.md`. Check against the kit's measuring scripts (`tools/measure/`) so nothing moves a pixel.
2. **Phone entry:** the artifact puts «Preguntar» in the strip; it went under the title beside «Tus notas» because the strip had no room with the tree button. That button is gone now: re-check 360/390 and move it back if it fits.
3. **Inert with TODO:** «Guardar en Tus notas» and «Informar un error» only change their label. «Tus notas y subrayados» and the «mine» answer are scripted (1 nota, 1 subrayado verde, 6:56 and 6:53), not read from the real notes.
4. **Not built:** the drawer in the Fathers' reader; the English script (the UI strings are translated, the answers stay Spanish).
5. **Source Serif 4 italic is not loaded** by `src/lib/fonts.ts`: the green-highlight quote and the pill excerpts use a synthesized italic (about 7 px wider per line than the artifact).
6. Before any real answer: DECISIONS 2026-10-05 «no generated chat answers» still stands (`ROADMAP.md` «Later»).
7. The GOTCHAS of the drawer are written (2026-10-29).

## Deliberate differences from the artifact (agent's calls, to confirm)

Listed in `DECISIONS.md` 2026-10-28; the main ones: the back bar aligns with the strip, the verse arrival is the reader's own (2 s), the suggestions' fold absorbs its 18 px gap, the green quote keeps the ink colour, the switch and scope persist on reopen, the hover card hides on the drawer's scroll, note cards hide while the drawer is open.

## How it was verified, and how to repeat it

- The artifact served on 8299 (`~/doctrina-ai-drawer-kit/tools/artifact/`, variant through `localStorage["doctrina-ai-proposal"] = {"feat":"chat","vi":2}`), the app's production build on 3200 (3100 belonged to the home session).
- `tools/measure/artchat.mjs` and `appchat.mjs` dump position, size, font, colour and background of every drawer element in the nine answer states; `cmp.py` compares them row by row (0 mismatches except the synthesized italic). `timeline.mjs` samples the answer timeline (within 15 ms of the artifact); `vis.mjs` and `notesmotion.mjs` sample the drawer and the column per frame (monotonic 496 → 530 px; with note cards 423 → 530 px).
- One Sonnet verifier (`tools/verifier/`, its report `VERIFIER.md`) found 8 defects, all fixed and retested: the drawer was invisible during its motion (`visibility` switched at the wrong end), `/` did not focus the field, the hover card captured the pointer, Esc with the card open closed the drawer, an 18 px scroll-anchor jump in the phone sheet, focus-ring radii, the pill's line height, the scope buttons' line height.

## Checklist (measured on the artifact, 1240 px frame and 390 px phone frame; all built and checked unless noted)

Entry
- [x] Strip button «Preguntar» after the chapter arrows: 34 px high, padding 0 10, radius 6, Work Sans 500 13.5, ink-2; hover bg hover + ink; pressed bg accent-weak + ink; tooltip «Tecla /».
- [ ] Phone: «Preguntar» in the strip (built under the title beside «Tus notas»; see «Left to do» 4).
- [x] Key «/» (outside inputs) opens the drawer and focuses the field after 260 ms.
- [x] Selection toolbar «Preguntar» after «Nota» (ink), Bible selections only; opens the drawer with the selection as a pill.

Drawer (≥ 1100 px)
- [x] Fixed left 0, under the top bar, bottom 0, width 380, border-right rule, bg, texture.
- [x] Enter: opacity 200 ms ease-standard, translateX −24 → 0 260 ms ease-move; exit reverse, visible until the end.
- [x] Text column moves right (drawer + 48) in 260 ms ease-move; strip content starts at drawer + 14.
- [x] Tree open: it folds in the same motion; the column travels monotonically; closing brings it back.
- [x] Head 51 high, title Newsreader 400 19/1.25, close 36 × 36; body padding 18 22 40, scrolls, overscroll contain.
- [x] Escape, the strip button and the close button close it.

Sheet (< 1100 px)
- [x] Full width, 54 % of the viewport, radius 14 14 0 0, border-top rule-2, shadow, translateY 100 % → 0 260 ms ease-move; grip 28 × 4; head 57 high. No scrim; the text gets bottom room.

«Lo que puede ver»
- [x] Label, «Este capítulo» row with the real chapter and translation.
- [x] «Tus notas y subrayados» switch (34 × 20, knob 220 ms ease-reveal, role switch); revealed line «1 nota 1 subrayado ● verde» (max-height 260 ms ease-reveal).
- [x] «Dónde busca» segmented control (Juan 6 / Biblia / Padres / Todo el corpus, default Todo el corpus), indicator sliding 340 ms ease-reveal.

Chat
- [x] Suggestions (off: Padres / tradición / palabras; on: the third becomes «¿Qué subrayé en verde…?»), rows 44 high with chevron.
- [x] Textarea 40–120 auto-grow, placeholder «Pregunta sobre <capítulo>», «Preguntar» → «Detener»; Enter sends, Shift+Enter new line.
- [x] Pill above the input (fades in 200 ms after 80 ms), removable.
- [x] Asking: the suggestions fold, the question pops in (420 ms, 8 px), the body scrolls to it.
- [x] Answer: meta, «Buscando en el corpus» 750 ms, quotes 280 ms apart, prose 55 ms per word, follow-up chips, actions.
- [x] Every scripted answer and route: padres, trad, razon, words (marks in 6:51 and 6:53), mine, meaning, none, scopeMiss + «Buscar en los Padres», pastoral; redirects by scope and switch; «Detener» adds «Detenida.».
- [x] Thread role=log aria-live polite; reduced motion shows everything at once.

Citations
- [x] Quote block (Newsreader italic 300 17/1.5, locator dotted underline).
- [x] Hover card after 200 ms (320 wide, 150 ms in, 120 ms out), pointer passes through it.
- [x] Verse link scrolls to the verse with the arrival and shows «Volver a donde estabas».
- [x] Father link opens the work at the paragraph; tradition link opens the citation window (phone: sheet with scrim).
- [x] Touch: first tap shows the card, second opens.

Themes, sizes
- [x] Light and dark; 360, 390, 768, 1440; no horizontal overflow.
