# AI simplifier (UI only, mock text)

**Status:** built 2026-11-03 night (kit 224–226, S4 docs in the last block), waiting for Pedro's visual approval. Decision and Pedro's words: `docs/DECISIONS.md` «AI simplifier: UI-only test build». Research: `docs/research/ai-chat-and-simplifier.md` (§8.2 S1 and S6). Proposal: https://claude.ai/artifact/KuWgzH6TWbanSmhkcMRyRi (archive `docs/research/proposals/ai-reader/index.html`, the simplifier code from the line `/* ---------- simplifier ---------- */`, CSS `.gm`).

## Intent
See the simplifier live, as a UI test: no model, no backend, mock text written by hand. Replicate variant 1 **exactly** (the margin ring `.gm`, the version opening below the paragraph, the header line, its heights, fades and curves), except that the artifact's «En palabras simples» is replaced, in the same place, by variant 6's two-option selector **«Más claro – Muy simple»** (default «Más claro», the indicator travels between the two) with a very short label beside it («Simplificado por IA»). Where it conflicts with the design system, the design system wins and the difference is a row in the «Deviations» table.

## Where (testing only; not how it will be offered later)
1. **Tradition pages (03), Catholic and Baptist only:** `teach.definition` and the first two `teach.statements` of each page (8 pages, 3 paragraphs each = 24). Mock text in Spanish, two levels per paragraph.
2. **Ignatius to the Smyrnaeans 6.2** (`/es/historia/obras/ignatius-smyrnaeans`, Lightfoot 1889 in the local corpus; the proposal's own paragraph), mock text in **English**.
Mock texts: `src/content/simplified-texts.ts`, keyed `<doctrine>/<tradition>/<definition|statement id>` and `<work id>/<locator>`, AI-written and never in page data. Switch: `NEXT_PUBLIC_SIMPLIFIER` (`on` / `off`); unset = on in `next dev`, off in a production build. `.env.local` (not tracked) has `NEXT_PUBLIC_SIMPLIFIER=on` so Pedro's local builds and `npm run e2e` include it; the simplifier specs skip themselves when the feature is off.

## Files (the layer rule forced a different place than `src/features/simplifier/`)
`src/lib/simplifier-enabled.ts`, `src/lib/simplifier-types.ts`, `src/content/simplified-texts.ts` (mock), `src/components/simplifier/` (`simplified-paragraph.tsx` the state machine and the ring, `simplified-panel.tsx` header, text, footers, `panel-motion.ts` all the WAAPI, `use-stream.ts`, `pair-highlight.ts`, `simplifier-memory.ts`, `simplifier-text.ts` es/en strings), `e2e/simplifier.spec.ts`. `components/` may not import `content/` and features may not import each other, so the mock lives in `content/`, the UI in `components/`, and the two callers (`teach-section.tsx`, `father-body.tsx`) pass the entry in.

## Shared files touched (exact lines of the working tree)
- `src/features/doctrine/teach-section.tsx`: imports (5, 10); the helper `simplifiable` (56–72); the statement `<p>` wrapped (82–86); the definition `<p>` wrapped (108–122). The definition keeps its `mb-7.5` when not simplified; when simplified the margin and the rail cap (`rail:max-w-col`) move to the wrapper.
- `src/features/reader/father-body.tsx`: imports (4, 7); the division `<p>` wrapped by `SimplifiedParagraph` (≈260–272, the rest is re-indentation).
- `src/app/globals.css`: tokens `--text-simplified`, `--text-simplified-note`, `--leading-natural`, `--spacing-simplifier-ring` (139–144); `::highlight(simplifier-pair)` and the utilities `no-scroll-anchor`, `simplifier-ring-line` (end of file, 2534–2545).
- Specs: the 6 specs that find «Mostrar más» by `button[aria-expanded]:not([aria-haspopup])` now add `:not([data-simplifier-mark])` (`life` 5, `shell` 42, `quality` 180, `authority` 74, `citation-window` 133, `statements` 4); `statements` 14 and 35 ignore the tooltip when looking for the ghost box (`:not(.invisible)`); `doctrine-rail` 48 reads the first `p` of `.rail-body` (the definition is no longer a direct child).

## The rule that is not in the artifact (Pedro) and how it is built
- **First open of a paragraph** (kept in memory per page view, `simplifier-memory.ts`): the artifact's streaming, 45 ms per word after 200 ms, the sentence number after each sentence; «Detener» works. **Opening it again on the same paragraph** (or another one's second time): no streaming, the box wipes open and the content fades in, 380 ms `ease-reveal`. **Another paragraph** streams on its own first open. A reload plays the streaming again. Reduced motion: instant, no streaming.
- **Seamless:** the panel is a box whose height is animated (WAAPI, 380 ms `ease-reveal`) in normal flow, so the content below moves with it frame by frame; the text is laid out at its final size from the first frame (words are revealed with `visibility`, the footer reserves the taller of its two rows), so nothing changes height while streaming or when it ends; `overflow-anchor: none` on the box; `getBoundingClientRect` for exact heights (no `offsetHeight` rounding). Closing is the artifact's way (fade 120 ms, then height 380 ms after 100 ms). Switching the level cross-fades the text (180 ms) and glides the text box's height (380 ms); «Detener» glides it too. Opening or closing again mid-way continues from the current height and opacity.
- **Measured** (`e2e/simplifier.spec.ts`, 11 tests, per-frame sampling): box height monotonic; `below − box` constant to < 1 px in every frame; paragraph top and `scrollY` never move; the first open shows ≥ 8 distinct word counts and the box height never changes after the 380 ms; the second open shows every word in the first frame; a different paragraph streams; the close fades then shrinks in step; the level switch has two layers for a while and one at the end; reduced motion shows the final state in the first frame; keyboard (Enter on the ring, Esc and «Ocultar» return the focus to it); 360 px no overflow; the Father paragraph streams in English; hovering a sentence number marks its original sentence (CSS Custom Highlight); all 24 paragraphs × 2 levels pair each sentence.

## Checklist against the artifact (variant 1 + selector)
| Element / motion | Built | Note |
|---|---|---|
| Ring: 28 px hit area, 14 px circle, 1.5 px `ink-3` border, `ink` on hover, filled `ink` when open, tooltip | yes | D8, D9 |
| Ring visible on paragraph hover, on focus and while open; always visible on touch and below `md` (44 px, above the paragraph) | yes | D8 |
| Box: height 380 ms `ease-reveal`, left border 1 px `rule-2`, padding 6 / 18 / 16, text 16/1.65 `ink-2`, dashed border while writing | yes | D4, D7 |
| Header: selector «Más claro – Muy simple» (replaces «En palabras simples») + label | yes | D1, D2 |
| Streaming 45 ms/word, 200 ms delay, sentence numbers (10.5 px `cite`) after each sentence, pair marking on hover | yes | D4, D6 |
| Footer while writing: «Detener», «Escribiendo»; done: «Ocultar», «Copiar», «Guardar en Tus notas», «Informar un error», status; «Detenido» | yes | D3, D10, D11 |
| Close: fade 120 ms, height 380 ms after 100 ms | yes | |
| Level switch cross-fade 180 ms + height 380 ms | yes | D14 |
| Reduced motion | yes | |

## Deviations (agent's calls, to confirm)
| # | Artifact | Build | Why |
|---|---|---|---|
| D1 | `.seg` with an `accent-weak` indicator, 38 px high | the site's `SegmentedFilter` (`ink` fill «Tinta llena», sliding pad), 42 px high, full width on phones | DESIGN §3 «Selected states»; reuse |
| D2 | header «En palabras simples» + «Generado por IA a partir del párrafo 6.2. No es el texto de Ignacio.» | the selector + «Simplificado por IA» | Pedro's wording |
| D3 | status «Generado ahora, sin revisar» | «Texto de prueba, sin revisar» | the text is hand-written mock, not generated |
| D4 | height estimate while writing, then a 380 ms height animation when it ends | final layout from the first frame, words revealed; no height change | Pedro's seamless rule |
| D6 | original sentences wrapped in spans (`.osent`, radius 2) | CSS Custom Highlight on a Range (no DOM change, no radius) | the paragraph is React-rendered and may hold links |
| D7 | 12 px above and 12 px below the text come from the proposal page's `.page p` rule leaking | kept as measured (`mt-3`, `mb-3`) | it is what Pedro saw and approved |
| D8 | ring switches to the phone position under 720 px of the reader frame | under 768 px (`md`) | the site's page padding at 640–767 px cannot hold a ring at −40 px |
| D9 | `data-tip` tooltip | the site's `Tooltip`, aligned to the ring's right edge | reuse; no overflow at 360 |
| D10 | «Copiar» copies the text with the sentence numbers | copies the text only | a flaw not copied |
| D11 | «Guardar en Tus notas» / «Informar un error» replace their label | same, as in the AI drawer; `TODO` at each | no backend (inert, as `ui.md`) |
| D14 | the level selector exists only when not writing | choosing a level while writing stops the writing and shows that level | the proposal's variant 6 has no streaming |
| D15 | no Escape | Esc closes and returns the focus to the ring | the spec asks for it |

## Decisions made while Pedro was away (agent's calls)
1. Files under `src/components/simplifier/`, `src/content/`, `src/lib/` (the layer rule), not `src/features/simplifier/`.
2. Variant 1's header carries the selector and the label; the proposal's sub-line is replaced by the label and the footer status says it is test text.
3. The chosen level is remembered per paragraph for the page view; every paragraph opens in «Más claro» the first time.
4. «First time» is marked when the panel opens (closing mid-stream still counts).
5. Ring in `md` as above; tooltip aligned to the end.
6. Mock texts keep every qualification and add nothing: quoted words are only kept inside quotation marks when verbatim, otherwise paraphrased without quotes and keeping the attribution («Fe y Mensaje Bautistas», «Lumen gentium 18»…); one unit of a simplified text may hold more than one sentence so that the sentence numbers keep matching the original.
7. Father paragraph: Ignatius to the Smyrnaeans 6.2 (about 110 AD; the paragraph the proposal used; English text in the local corpus).
8. The save and report buttons only change their label, as in the AI drawer.

## Left inert or open
- `TODO` «Guardar en Tus notas» (the notes store) and «Informar un error» (the content-error queue).
- Not built: pair marking by touch; the sentence numbers are not focusable (as in the artifact); the selection-toolbar entry; any other paragraph.
- To look at: the phone ring sits 34 px above the paragraph's top-right corner (as the artifact) and can touch the line above on the definition; the selector spans the full width on phones.

## How it is verified
`npm run verify`; `e2e/simplifier.spec.ts` (and the whole suite); computed styles of every element compared with the published artifact at 1440 and 390 (same except the rows above); Pedro's visual approval before the commit command.

## Verification result (2026-11-03 night)
`npm run verify` passes (3 warnings, none in the new files). Full suite, 3 workers: 1164 passed, 12 failed, 1 skipped. Ten were WebKit overflow/timeline specs that passed when rerun alone (load: three sessions share the machine). Two fail on every run and are not caused by the simplifier: `general-timeline.spec.ts:332` (the ruler re-aim) also fails on a clean build of HEAD; `reader-parallel.spec.ts:98` («Al lado», a 26 px offset between columns) fails on this tree and timed out on the HEAD copy (that copy had no way to be proven equal, so it is not verified that HEAD also has the 26 px offset). Neither page uses the simplifier.

## Usage log (Claude weekly, `usage_check.py`)
| Moment | Weekly |
|---|---|
| Start of the session | 76 % |
| After S1 (kit 224) | 77 % |
| After S2 (kit 225) | 77 % |
| After S3 and the full suite (kit 226) | 77 % |
