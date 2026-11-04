# Screen 06: the verse page («Juan 6:53», any verse of any book)

Status: B6.0 written 2026-11-04; built in the DUPLICATE repo `/Users/pedrolorenzo/Desktop/dev/doctrina-v06` (clone of `55cde6c`). Pedro merges the difference into the real repo later; this file lists every file touched per block, with the commit message.

## Intent

Build, as an exact replica, the approved design of screen 06 (the verse page) of https://claude.ai/artifact/NYBF1wY8WNz2rpDAPPKutn (archive `docs/research/proposals/reader-05-06/`: `s06.html`, `fuente.js` `renderDetail`/`detailSections`, `fuente.css`, `base.css`, `data.js`). Chosen options of the proposal's switches: `dtend=costado`, `wbw=lado` («Ficha al lado»), `cite=corta`, `notas=costado`, `back=capa`. The page is the destination of the verse panel's inert button «Ver el detalle completo» (`verse-panel.tsx`).

**How I read DECISIONS 2026-10-21 «Screens 05 and 06».** It chose the layer + side panel as the way to open a verse and discarded «a site page with a «Volver» strip; the detail page and the card under the paragraph as ways to open a verse». This task keeps that: the reader still opens the panel on tap; the page exists only as the destination of «Ver el detalle completo» (and of its own link `/<lang>/biblia/<libro>/<cap>/<verso>`). The strip «Volver a donde estabas» is shown only when the reader arrived from a place that left a mark (the panel's button leaves it); with no mark the page starts at the crumbs, as the artifact does with an empty stack.

- Out of scope (TODO, not built): the source variant `tr13` (Trent paragraphs, «Leer el decreto completo», Latin section, Ayala/Waterworth editions); the English «Usos» (only Spanish pages exist); the word-page back links; the 06-only note editor inside the page (see «Nota»).

## Route (agent's call)

`/es/biblia/juan/6/53` and `/en/bible/john/6/53`: `src/app/[lang]/bible/[book]/[chapter]/[verse]/page.tsx`, rendered on demand (no `generateStaticParams`: ≈ 31,000 verses × 2 languages), the Spanish segment through the existing `spanishRewrites()` pattern (one added rewrite). Unknown book / chapter / verse → `notFound()`. Loader `src/content/get-verse-page.ts` (reuses `getReaderChapter`, `getChapterWordView`, `getChapterUses`, `numberingDiffers`).

## Data map

| Page element | Data | Source |
|---|---|---|
| title, crumbs, kicker | book name, section label, chapter, verse | `bible-books.ts`, `ui-text` |
| passage (previous / current / next verse) | verse text of the chosen edition; neighbours inside the chapter or across the chapter boundary | `getBibleChapter` via `getReaderChapter` |
| edition picker | the editions that have the verse; the choice is the site's `doctrina-translation` (`useChosenTranslation`) | `translationMeta`, `translation-choice.ts` |
| «Citar» | short citation «Juan 6:53 (Reina-Valera 1909)», text, page link | `panel.shortCitation` pattern |
| «Dónde se usa en Doctrina» | `VerseUse[]` of the verse (Spanish pages only) | `getChapterUses` |
| «En griego / hebreo, palabra por palabra» | `WordView[]` of the verse + lexicon (Strong, counts, lemma) | `getChapterWordView` |
| «Comparar traducciones» | the verse in every edition with the same numbering as the default | `getReaderChapter` views |
| «Nota», «Leer el capítulo completo» | the chapter route; notes in `note-store.ts` | `bibleChapterHref` |

## Measured (artifact `s06.html#jn6/53`, served with `charset=utf-8` on :3511, Playwright; files `…/scratchpad/m06/measure.json`, `art-<w>-<theme>.png` at 1440 / 768 / 390 / 360, light and dark)

1440 light, `main` x 272 (padding 34 112 140 64): crumbs 13 ink-3 (mb 20); `.dt-head` margin-top 30 after the strip (22 phone) — with no strip it follows the crumbs; kicker 13 ink-3 mb 8; `h1` Newsreader 300 60/61.8 (42 phone); `.dt-grid` 720 | 250 gap 56 from 1100; `#traduccion` mt 48, `h2` 36/41.4 (29 phone) with the picker at the right (button 94 × 44, 14/500, border `rule-2`, `card` fill); passage rows grid 52 | 1fr gap 12, padding 12 0; neighbours body 300 17/27.2 ink-3 (3 lines + «Mostrar más»); current row padding 16 0 18 with top/bottom hairlines, number `accent` 600 12.5, text Newsreader 300 27/38.34 ink (23 phone); source line mt 16, 13.5/20.25 ink-3 with «Leer el capítulo completo» (`ln-go` 14/500) and «Nota» (`cpy` 40 high); side column x 1078, padding-left 22, border-left `rule`, mt 48; `h2` 22/27.5 head 400; `ci-t` body 300 15.5/24 with hairlines top and bottom, padding 12 0; `ci-acts` mt 10 ml −10; blocks 55 apart; `du-t` 15.5, `du-r` 14.5 ink-3; «Ver N más» 40 high; `#griego` mt 140 (96 phone), `h2` 36, `sub` 14.5/22.5 ink-3 max 620 mb 26; `wl2` grid 1fr | 300 gap 40; `wt` padding 7 9 min-height 44, Greek 22/1.25, gloss 13 ink-2; card `padding-left 24` border-left `rule`, sticky at top bar + 24: Greek 32, translit 14 ink-3, `dl` 118 | 1fr, dt 13 ink-3, dd 16/1.45; `btn-go` 42 high; `ww-src` 13/19.5 mt 14; `#comparar` mt 140; `cf` 42 high (buttons 34), chips 38 high mt 0 mb 18, rows padding 16 0 18, name 14/500 + language 14 ink-3 ml 10, text body 300 17/27.2 ink-2; `pn` mt 84 gap 16, boxes padding 14 18 15, border `rule`, radius 6. Below 1100 the side column goes to the end: `#donde` («Dónde se usa en Doctrina», `du-g` grid 150 | 1fr, all items grouped) then `#citar`, before the footer; ≤ 899 the card sits under the words (mt 18, padding 16 0 0, top border); ≤ 720 `.dt-pass` grid 38 | 1fr gap 8, `dt-cur` 23, `du-g` one column, `pn` one column, `cf` full width.

## Checklist (ticked 2026-11-04 from screenshots at 1440 / 768 / 390 / 360 light and dark, a numeric spot comparison at 1440 and 390 (tile 68.6 × 57.5, passage rows, h2, picker, compare rows equal; the title gap and the cards' heights follow the data), and `e2e/verse-06.spec.ts`; **no pixel-diff (pixelmatch) was run and no independent verifier pass**)

### A. Header
- [x] A1 Strip `bk` «Volver a donde estabas» (button, back icon; «Volver» ≤ 420 with the rest for screen readers) + `rd-where` label (13.5 ink-3, ellipsis); sticky under the top bar, 1px `rule` hairline only once stuck (transition 150 ms); only with a mark (the panel button leaves it in `sessionStorage`).
- [x] A2 Crumbs «Biblia / Nuevo Testamento / Juan / Capítulo 6 / 6:53»; «Biblia» and the testament inert (no pages yet, DECISIONS 2026-11-01), «Juan» inert (no book page), «Capítulo 6» a link to the chapter; the last is `aria-current`.
- [x] A3 Kicker «Evangelio según san Juan» (13 ink-3 mb 8); `h1` «Juan 6:53» (60/1.03, 42 phone); title block fade-in like the other pages (`title-part`).
- [x] A4 Gap after the strip 30 (22 phone).

### B. «Traducción» (`#traduccion`)
- [x] B1 `h2` «Traducción» with the picker at the right: one button, the abbreviation only («RV1909»), 44 high, border `rule-2`, `card` fill, hover border `ink` + `hover` fill, chevron turning 200 ms; list 340 (full-width minus 32 on a phone), `panel`, radius 8, floating shadow, groups «Español» / «Inglés», current row «Marca corta», open 220 ms `ease-reveal` with the first eight rows fading in 20 ms apart, close 160 ms, flips up near the bottom; ↑ ↓ Home End Enter Esc. Hidden when the verse exists in one edition.
- [x] B2 Passage `ol`: previous verse (number link 12.5 ink-3, hover ink + underline; text 17/1.6 ink-3 clamped to 3 lines + «Mostrar más», `btn-more`), the current (hairlines; number `accent` 600; head 300 27/1.42 ink, 23 phone), next verse. Links `aria-label` «Anterior: Juan 6:52». Grid 52 | 1fr (38 ≤ 720).
- [x] B3 Source line: «Reina-Valera 1909. Dominio público.» · «Leer el capítulo completo» (`ln-go`; to the chapter at the verse) · «Nota» (`cpy`; opens the note editor of the verse: `TODO` if the site's editor lives only in the reader).
- [x] B4 `numberingDiffers` rule: an edition numbered differently from the default shows its own verse with the existing numbering note, and the sections that need the default numbering («Dónde se usa», words) are left out (panel rule).

### C. Side column (≥ 1100: 250 px, gap 56, `border-left rule`, padding-left 22, mt 48)
- [x] C1 «Citar»: `h2` 22 head 400; `ci-t` short citation (15.5/1.55 hairlines); «Citar» and «Citar con texto» side by side, «Copiar enlace» below; «Cita copiada» / «Enlace copiado» 1.6 s, width reserved.
- [x] C2 «Dónde se usa en Doctrina» 55 below «Citar»: one item (title link 15.5, line 14.5 ink-3) + «Ver N más» (`MoreButton`, plus turns 45°; FLIP; «Ver menos» hides again). Absent when the verse has no use.
- [x] C3 < 1100: both leave the column: `#donde` (full list, grouped, `du-g` 150 | 1fr, one column ≤ 720) and `#citar` as sections before the footer.

### D. «En griego, palabra por palabra» (`#griego`, wide; Hebrew: «En hebreo, …»)
- [x] D1 `h2` + sub «Cada palabra con su sentido literal. Pasa el puntero, o toca una palabra, para ver su ficha.» (14.5 ink-3 max 620).
- [x] D2 Words as buttons (`wt`: min-height 44, padding 7 9, radius 6; Greek 22 `--font-greek` over gloss 13 ink-2; hover `hover`; selected `accent-weak` → the site's selected state per DESIGN, see deviations); the transliteration row hidden (as `wl2`).
- [x] D3 Card column «Ficha al lado» (300, gap 40, `border-left rule`, padding-left 24, sticky top bar + 24; ≤ 899 under the words, mt 18, top border): Greek 32, translit 14 ink-3, `dl` 118 | 1fr: Strong, En el Nuevo Testamento (count), Significa, Forma, Palabra base; `btn-go` «Abrir el estudio de σάρξ» → `/<lang>/palabras/<id>?from=…`. Hover (mouse), focus and tap show the card; swap fades .4 → 1 in 160 ms; default word σάρξ → οὖν… (`LADO0`: G4561, G5176, G5315, else the first).
- [x] D4 `ww-src` credit line (13/1.5 ink-3, mt 14), the site's words text (deviation).

### E. «Comparar traducciones» (`#comparar`, column)
- [x] E1 `h2` + sub «Las traducciones de dominio público, una debajo de la otra. Elige la lengua y cuáles mostrar.»
- [x] E2 Segmented «Español con español» / «Inglés con inglés» / «Todas» (default: «Español con español» when there is more than one Spanish edition, else «Todas»), travelling indicator (`SegmentedFilter`, deviation); only when both languages exist.
- [x] E3 Chips per edition (`aria-pressed`, 38 high, border `rule`, radius 6, pressed: border `ink`, weight 500), hidden outside the chosen language.
- [x] E4 Rows: name 14/500 + language («español» / «inglés», 14 ink-3), text 17/1.6 ink-2 (`lang="en"` for English), hairline per row; the list changes with FLIP (enter/leave/move).

### F. Footer and page
- [x] F1 Previous / next verse boxes (`NeighborLinks`: «Anterior» / «Siguiente», «Juan 6:52»), one side only at the ends of a book.
- [x] F2 Section rhythm 140 (96 phone); edge ruler lists «Traducción», «En griego», «Comparar traducciones», «Dónde se usa» (< 1100 only), «Citar».
- [x] F3 Responsive 1100 / 899 / 720 / 420, coarse pointer 44; no horizontal overflow at 360; light and dark; reduced motion instant; focus rings as the site's.
- [x] F4 `generateMetadata` title «Juan 6:53».

## Deviations from the approved artifact (filled as blocks are built)

| Element | What the artifact does | What is built | Why |
|---|---|---|---|
| A1 strip | `bk` from a NAV stack in `sessionStorage` | the same, key `doctrina-verse-back` (`{href,label}`), set by the panel button; an inline script sets `html[data-verse-back]` before paint so the strip is in place from the first frame; «Volver» goes to the chapter at the verse (`router.push`) and clears the mark | the site has no NAV stack |
| A3 kicker | «Evangelio según san Juan» hand-written | the four Gospels: «Evangelio según san {libro}» / «The Gospel according to {book}»; every other book: «{libro}, capítulo {n}» | no data holds a kicker per book |
| A2 crumbs | «Biblia», testament, «Juan» inert, «Capítulo 6» link to 05 | the same; the chapter link is the chapter route | |
| B1 picker | `edp` own list, open 220 / close 160 + 120 delay | the site's `revealMenu` (clip reveal, 220 / 160 ms, rows fading 20 ms apart) and the `PanelPicker` look; rows copied from `TranslationRows` (lint forbids feature → feature; `TODO` consolidate in `components/`) | DESIGN «Hanging menus», reuse of the approved motion |
| B1 picker choice | stored per source (`ed-jn6`) | the site's `doctrina-translation` (shared with the reader) | one choice for the site |
| B2 passage | the unit list of the source | the verses of the chapter in the default edition; the previous / next rows are links to their own verse page | route |
| B2 «Mostrar más» | removes the clamp at once | height tween 380 ms `ease-reveal` from the clamped to the full height | smooth, no jump below (Pedro's emphasis) |
| B2 edition change | repaints at once | the passage's height tweens 380 ms `ease-reveal` so everything below moves with it | same |
| B3 «Nota» | opens the note editor in the page and shows «Tus notas» | built inert, `TODO` (the editor lives only in the reader panel) | no editor outside the panel; «Tus notas» section not built |
| B4 numbering | none (one numbering) | with an edition numbered differently: the existing numbering note, and the words and «Dónde se usa» are left out | panel rule (Pedro's parked item) |
| C1 «Citar» | short citation with the edition's full name; «Citar con texto» | same; the three buttons are the site's `CopyButton` (1.6 s, status for screen readers) without reserved width, as the panel | |
| C2 uses | hand-written lines per tradition and «Agustín…» | `getChapterUses` (the registry: page title and section, «La Eucaristía. En el pasaje Juan 6:51–58, 60–69.»); only Spanish pages | DECISIONS 2026-11-03 (open point 5) |
| C3 < 1100 | `#donde` grouped by theme («La Eucaristía», «En la historia»), then `#citar` | groups by doctrine; no «En la historia» group | data |
| D2 tile selected | `accent-weak` fill | `selected-lift` (150 ms colour + shadow) | DESIGN «Selected states» |
| D3 card swap | content replaced, new content fades .4 → 1 in 160 ms | every word's card is stacked in one grid cell, the shown one fades in and the old one out, 160 ms `ease-out` both ways; the cell has the tallest card's height from the first frame | symmetric enter / exit, no height jump |
| D2 gloss | Spanish from OpenGNT | Doctrina's Spanish; the English fallback `lang="en"` with the tag «inglés» | words-07 deviations |
| D4 credit | OpenGNT credit | the site's words credit (`reader.panel.words.source`) | DEC 2026-11-01 |
| D (Hebrew) | Greek only | Hebrew verses: the tile list is `dir=rtl`, title «En hebreo, palabra por palabra» | data |
| D breakpoint | card under the words ≤ 899 | `md` (768) | DESIGN §3 mapping 899 → 768 |
| E2 segmented | accent-filled `cf` | `SegmentedFilter` (travelling «Tinta llena» pad) | DESIGN «Segments» |
| E3 chips | border `ink`, weight 500 | `selected-lift` + weight 500, transparent border | DESIGN «Selected states» |
| E (filter choice) | stored per source (`cf-jn6`) | not stored | agent's call: nothing else on the page persists |
| F1 footer | `pn` | `NeighborLinks` | reuse |
| F2 ruler | the artifact's sections | `EdgeRuler` injected from the page (`VerseRuler`): «Traducción», «En griego», «Comparar traducciones», and below 1100 «Dónde se usa», «Citar» | DESIGN ruler |
| Out of scope | `tr13` (Trent), «Tus notas», «Leer el decreto completo», Latin | not built (`TODO` list above) | task brief |

## Decisions made while Pedro was away (agent's call)

- Route `/es/biblia/<libro>/<cap>/<verso>` ↔ `/en/bible/…` (above).
- The strip `bk` is shown only when a mark exists (`sessionStorage`, key `doctrina-verse-back`), as the artifact's NAV stack.
- Neighbour verses stay inside the chapter, as the artifact's chapter list does: at the first or last verse of a chapter the missing side is hidden (Pedro may want a jump to the next chapter).
- «Nota» inert with a `TODO`; no «Tus notas» section.
- The back mark is written by the panel button only; no other link leaves one.
- The ruler is injected into `VerseRuler` from the route because `features/*` may not import each other; `TranslationRows` copied into the picker for the same reason (`TODO` to move it to `components/`).
- Word tiles hover with the mouse only; touch picks on tap, keyboard on focus.

## Shared files touched

- `src/app/globals.css`: tokens `--spacing-dt-side`, `--spacing-word-card`, `--text-verse-*` at the end of the first `@theme`; custom variants `verse-back`, `verse-wide`, `verse-narrow` after `@custom-variant dark`; utilities `verse-grid`, `verse-pass-row`, `verse-uses-group`, `verse-facts`, `verse-words-grid`, `verse-card-sticky`, `verse-picker-list`, `transition-selected` right before `@utility entry-row`.
- `src/content/routes.ts`: one line in `spanishRewrites()` (`/es/biblia/:book/:chapter/:verse`).
- `src/content/bible-routes.ts`: new `bibleVerseHref()` before `bibleBookRoute()`.
- `src/content/ui-text/es.ts` and `en.ts`: new `versePage` block appended at the end.

## How verified

`npm run verify`; per block screenshots against the artifact at 1440 / 768 / 390 / 360, light and dark; e2e `e2e/verse-06*.spec.ts` (rAF sampling of every motion, hover/focus/touch, reduced motion, no overflow at 360).

## Usage log

- 2026-11-04 03:05 start: session 10 %, weekly 78 % (stop at 84 %).
- 2026-11-04 03:21 (B6.1–B6.4 built and tested): session 14 %, weekly 78 %.

## Blocks done (B6.1–B6.4 built together, 2026-11-04; B6.5 wiring pending)

Files created: `src/app/[lang]/bible/[book]/[chapter]/[verse]/page.tsx`, `src/content/get-verse-page.ts`, `src/lib/verse-back.ts`, `src/features/verse/{verse-back-strip,verse-back-script,verse-edition,verse-translation-picker,verse-passage,verse-cite,verse-uses,verse-words,verse-compare,verse-differs,verse-ruler}.tsx`, `e2e/verse-06.spec.ts`.
Commit message (B6.1–B6.4): `feat(verse): add the verse page with words, compare and citation`

Verified: `tsc`, `eslint` (src, e2e), build, `e2e/verse-06.spec.ts` 20 tests × 3 repeats green (picker, edition switch height continuity, citation clipboard, «Ver N más» fold frames, card crossfade frames, compare FLIP, footer, 404, English, DRA numbering, < 1100 sections, overflow 360/390/768/1440, reduced motion, Hebrew).

Looked at (Pedro, in Dia): `/es/biblia/juan/6/53` at 1440 / 768 / 390: hover over the words (the card crossfades 160 ms both ways), the picker (open / close), «Ver 2 más», chips and the segmented filter.

## State

- Done: B6.0–B6.5. `npm run verify` exit 0 (3 old lint warnings in other files). Full e2e: 1204 passed, 11 failed, none in the verse page: `early-christians:179`, `father:165/191/201`, `home-sections:4`, `scripture:19`, `search:155/166`, `soon-screens:57`, `why:146` (doctrine pages published at HEAD against tests that expect them inert; not run against a clean HEAD, so «not mine» is by reading, not measured) and `reader-ai-drawer:341` (timing). `reader-panel-words:74` failed once under 6 workers, passes alone ×3.
- Not done: pixel-diff against the artifact, an independent verifier pass (no subagent used), a check of the hover states with real touch input (only the `pointer-coarse` classes), `tr13`, «Tus notas».
- Resume: `cd doctrina-v06`, `nvm use`, `npm run build`, `npx next start -p 3501`, `npx playwright test e2e/verse-06.spec.ts`. Artifact for comparison: `node …/scratchpad/m06/serve.mjs` (:3511), `measure.mjs`.

## Shared files touched (B6.5, added)

- `src/features/reader/verse-panel.tsx`: imports `useRouter` and `rememberVerseBack`; new optional prop `detail`; the `TODO` comment is gone and the «Ver el detalle completo» button remembers the mark and goes to `detail.href` (inert when there is no `detail`).
- `src/features/reader/reader-body.tsx`: one prop `detail={…}` on the `<VersePanel>` call (after `link=`).
- `src/content/bible-routes.ts`: `swapBibleLocale` accepts an optional verse.
- `docs/DESIGN.md`: one line at the start of §«06 verse».

## Text for DECISIONS.md (to paste in the real repo)

**2026-11-04 · Screen 06 built as the destination of «Ver el detalle completo».** Built the approved 06 in a duplicate repo. Reading of 2026-10-21: the layer and the panel stay the way a verse is opened; the page is its destination and the strip «Volver a donde estabas» shows only with a mark. Agent's calls: route `/es/biblia/<libro>/<cap>/<verso>`; neighbour verses inside the chapter; «Nota» inert; the edition choice is the site's; sections that need the default numbering are left out when the edition numbers differently. Deviations: the feature doc. Not built: `tr13`, «Tus notas».

## Text for ROADMAP.md (to paste)

Done: screen 06 built in the clone, waiting for Pedro's review in Dia and his merge. Open: the `tr13` variant, «Tus notas» / note editor outside the panel, links to 06 from the glossary, Greek quotes and the word page, move `TranslationRows` to `components/`.

## Commit message and files (Pedro runs it in the real repo after merging the difference)

Message: `feat(verse): add the verse page and open it from the panel`

Files (created): `src/app/[lang]/bible/[book]/[chapter]/[verse]/page.tsx`, `src/content/get-verse-page.ts`, `src/lib/verse-back.ts`, `src/features/verse/` (11 files), `e2e/verse-06.spec.ts`, `docs/features/verse-06.md`. Files (changed): `src/app/globals.css`, `src/content/routes.ts`, `src/content/bible-routes.ts`, `src/content/ui-text/es.ts`, `src/content/ui-text/en.ts`, `src/features/reader/verse-panel.tsx`, `src/features/reader/reader-body.tsx`, `docs/DESIGN.md`. Diff against the clone's base `55cde6c` (`git diff 55cde6c` in `doctrina-v06`) shows exactly these; `playwright.config.ts` (port 3501) is the clone's, not part of the change.
