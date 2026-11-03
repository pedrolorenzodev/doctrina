# «Palabras», «Usos» and screen 07 (the word page)

Status: B1.0 written 2026-11-03, waiting for Pedro's look. Nothing in `src/` yet.

## Intent

Build, as an exact replica, the approved design of screen 07 (word study) and the «Palabras» and «Usos» tabs of the reader's verse panel, fed by the whole-Bible word data (`data/site/words/`, local and gitignored until Supabase, DECISIONS 2026-10-23).

- **Screen 07:** https://claude.ai/artifact/N3z7ZePYG8wgBJGHgiJGHP, version «v2» (published `s07v2.html`; identical to the archive `docs/research/proposals/screens-07-08/`, checked by diff 2026-11-03; only the proposal shell `index.html` differs by its wrapper). Approved by Pedro 2026-10-23: «Todo lo demás lo veo apropiado y por el momento no encuentro correcciones» (DECISIONS 2026-10-22 «Screens 07 (word study) and 08»).
- **Verse panel tabs:** `docs/research/proposals/reader-05-06/` (`fuente.js` `panelView` `words` and `uses`, `wordsHTML(u, 'filas')`, `cardHTML`, `wireWords`; `fuente.css` `.wr*`, `.wc*`, `.ww-src`, `.cd-du`, `.du-t`). The panel itself (strip, indicator, slide) is built (DESIGN «Reader stream, verse panel sections»); only the two bodies are new.
- Not built, because the approved choice excludes them: every proposal switch (`.pp`, «elegido» tags) and the non-chosen variants: «Hoy, todo abierto», «Referencias con vista previa», «Primeros y Mostrar más» (and the `Libro` picker that belongs to the last), «Grilla por grupos», «Ficha compacta», «Un renglón por sentido, plegado», the «Simple» scheme, «Siempre al lado», «Apilado», «Dos columnas», the «Entrada en inglés» variant.

## Out of scope

Screen 08, the word index, any page for Bible books, richer registry data (the 1,594 Scripture-list records), Father texts in the original languages, the Supabase move.

## Measured (the artifact served with `charset=utf-8`, Playwright, `?clean=1`, lists revealed by scrolling; scratch: `…/scratchpad/m07/measure.json` and `art-<w>-<theme>.png` for 1440, 768, 390, 360, light and dark)

1440 light, document `x` of the main column 336 (shell excluded; the site's own shell and `Section` rhythm apply): bar 36 high, `margin-bottom 40`; kicker 13/ink-3, mb 10; title block: Greek 64 (Gentium) over a Newsreader 60 line box, transliteration Newsreader italic 300 30 ink-2; lede Newsreader italic 300 24/1.38 ink-2, mt 14; facts `dl` mt 26, gap 18 44, term 12.5 ink-3 mb 3, value Source Serif 18/1.4; `h2` Newsreader 300 36/1.15; `corpus` 21/1.35 head 400; book row 36 high (padding 4 6, 14.5), bar 6 high radius 3 ink-3 at .5, count 14.5/500; sense `li` padding 20/18, title Newsreader 21, tag 12.5 padding 1 8 radius 5, description Source Serif 300 17/1.6 max 640, quote Newsreader italic 300 19/1.45 with a 2 px `rule-2` left rule and 16 padding; form row padding 12, Greek 22 Gentium, bar 6 high width `n / max × 72`; place header 19 Newsreader, `kw` rows 104 | 1fr | auto, gap 22, 16.5 Source Serif 300; Fathers: Spanish Newsreader italic 300 22/1.45, Greek Gentium 18/1.65, word box 520 max, padding 14 16, border `rule-2` radius 6; previous/next 2 columns gap 16 mt 84, padding 14 18 15, radius 6. Phone (390): h1 Greek 50, transliteration 24, lede 20, sections `margin-top` 96 (desktop 140), `h2` 29, `.facts > div` 40 % each. Full numbers: the JSON. Fonts the proposal loads: Gentium Book Plus, Newsreader, Source Serif 4, Work Sans (the site's tokens are the same: DESIGN §1–2).

## Checklist (one line per element, state and motion; tick `[x]` only side by side with the artifact at 1440 / 768 / 390 / 360, light and dark)

### A. Page bar and title block (`.wd-bar`, `.wd-head`)
- [ ] A1 Breadcrumb «Biblia / Nuevo Testamento / σάρξ»; the last is `aria-current` and shows the Greek word. «Biblia» and «Nuevo Testamento» inert (DECISIONS 2026-11-01: no pages for them). For Hebrew: «Antiguo Testamento».
- [ ] A2 «Transliteración» switch at the right of the bar (`tl-t`): 36 high, label 13 ink-3, track 26×15 with a 9 px knob that slides 11 px in 200 ms; on: label ink-2, track `accent-weak` + accent border, knob accent; hover `hover` fill; `aria-pressed`; the choice is remembered (key `tl`, default on) and applies to the whole site's Greek («offers to turn it on», DECISIONS 2026-10-22); wraps under the breadcrumb on a phone.
- [ ] A3 «Viniste desde …» line (`.ctx`, 13.5 ink-3, margin −22 0 28): only when the reader arrived from a verse («Juan 6:53», a link) or a place («Ignacio de Antioquía»); absent otherwise.
- [ ] A4 Kicker «Estudio de una palabra griega» (13 ink-3, mb 10) / «… hebrea».
- [ ] A5 `h1`: the word (Greek 64 on desktop, 50 ≤ 720) and, beside it, its transliteration in italic (30, 24 ≤ 720) that follows the switch; baseline aligned, gap 4 22.
- [ ] A6 Lede paragraph (Newsreader italic 300 24/1.38 ink-2, mt 14; 20 ≤ 720).
- [ ] A7 Header facts, «En fila» (`dl.facts`): term 12.5 ink-3 over value 18/1.4 (secondary 15 ink-3); the six facts: Significado literal · Clase de palabra · En el Nuevo Testamento («147 veces» a quiet source link that opens the citation window «Texto griego NA28 · datos de STEPBible (Tyndale House), CC BY 4.0», plus «en 126 versículos») · Genitivo (Greek with transliteration) · Palabras derivadas (two lines, each Greek + translit + «N veces») · Número de Strong (`G4561`, UI font 15 ink-2).

### B. «Dónde aparece» (`#donde`, wide 1040)
- [ ] B1 `h2`, then «En el Nuevo Testamento» (21 head 400, mt 18; the title no longer says «27 libros») and «Versículos por libro, en el orden del canon.» (13 ink-3, mb 22).
- [ ] B2 Two columns (gap 56, max 960; one column ≤ 720): left «Evangelios», «Hechos», «Cartas de Pablo»; right «Hebreos y las otras cartas», «Apocalipsis»; group header 12.5/500 ink-3 (padding 16 0 6, none above the first of a column).
- [ ] B3 Row (button) = name (132 col) | bar | count (34): 36 high, hairline on top, padding 4 6, 14.5 ink-2; hover `hover` fill + ink and bar opacity .5 → .8 (150 ms); bar width `n / max × 100 %`, min 3 px; count 14.5/500 ink tabular. Zero rows: not buttons, ink-3, count «0» weight 400, no bar. All 27 books in canon order, zeros included. For Hebrew: the Old Testament's books in canon order (the artifact has no OT layout: groups are an adaptation, listed).
- [ ] B4 Selected row: `accent-weak` fill (site: the selected state rule of DESIGN «Selected states»), bar accent, weight 500, `aria-pressed`. Click filters «Los lugares» to that book and scrolls to it (`scrollToEl`); click again clears.
- [ ] B5 Tip «Tocá un libro para ver sus versículos.» (13 ink-3, mt 14).
- [ ] B6 ≤ 1099: columns gap 40 and row grid 118 | 1fr | 30; coarse pointer: row min-height 44.

### C. «Qué significa» (`#significa`, column 720) — «Sentidos: todos abiertos»
- [ ] C1 `h2` + sub «Los usos que el léxico de Abbott-Smith (1922) distingue, con un versículo de ejemplo de cada uno. La etiqueta dice de dónde viene el uso.» (14.5/1.55 ink-3, max 620).
- [ ] C2 Hairline list (top per item, bottom on the last, padding 20 0 18, max 760). Each sense: title (Newsreader 21/1.3), origin tag beside it (`otag`, 12.5 ink-3, border `rule-2`, radius 5: «Uso griego» / «Modo de hablar hebreo»), plain description (Source Serif 300 17/1.6 ink-2, max 640, a Greek word in it with its transliteration), example quote (left rule 2 `rule-2`, padding-left 16, Newsreader italic 300 19/1.45 ink with «» added by CSS, the word marked with `mark`) with its reference as a link below (14/500), then a fold «Los N lugares que cita el léxico» (`<details>`: «+» turning 45° in 200 ms, 13.5/500 ink-2, min 32 high) listing the references as links separated by commas (14, line 1.8, ink-2, no wrap per reference).
- [ ] C3 Note «Traducción de Doctrina asistida por IA, desde Abbott-Smith, … (1922, dominio público), en la versión de STEPBible (CC BY 4.0). Texto de los ejemplos: Reina-Valera 1909.» (13/1.55 ink-3, mt 16, max 640).
- [ ] C4 `btn-more` «Ver la entrada original, en inglés» (`MoreButton`, plus icon): opens the original entry (Source Serif 300 15.5/1.6, `pre-line`, max 680, padding-top 16) with a 420 ms rise (opacity, 8 px, `cubic-bezier(.22,1,.36,1)`); label becomes «Ocultar la entrada original»; `aria-expanded`; reduced motion: none.

### D. «Sus formas» (`#formas`, column 720)
- [ ] D1 `h2` + sub «El griego cambia la terminación según el caso y el número … las seis formas que aparecen …, con las veces que se usa cada una.» (the count of forms comes from the data).
- [ ] D2 Rows in textbook order (nominative, genitive, dative, accusative, singular then plural), grid 170 | 1fr | 110 | 150 (gap 24, padding 12, hairlines, max 820): Greek form (Gentium 22 with translit 14), case and number («Nominativo singular», 15 ink-2), bar (6 high, width `n / max × 72` px, ink-3 .5) + count (15/500, min 2ch, right), button «Ver los N versículos» / «Ver el versículo» (13.5/500 ink-2, hover `hover`, right aligned). ≤ 860: 2 columns, case on its own line, button under, left aligned. Coarse: min-height 44.
- [ ] D3 The button sets the form filter of «Los lugares» and scrolls there.
- [ ] D4 Note «Caso y número de cada aparición: análisis de STEPBible (TAGNT).» with the source link (citation window).

### E. «Los lugares, uno por uno» (`#lugares`, wide) — «Por libros, plegado»
- [ ] E1 `h2`; status «Los 126 versículos del Nuevo Testamento donde aparece, en el orden del canon, con la Reina-Valera 1909.» (13.5/1.5 ink-3, mb 16).
- [ ] E2 Form filter (`vf`, «como el de Videos (03)»: segmented, padding 3, border `rule`, radius 8, buttons min 34, 13.5; «Todas» + one per form with its Greek, translit and a count in 12 ink-3; the count follows the book filter; ≤ 720 full width). Site: `SegmentedFilter` as built for Videos (DESIGN «Selected states»: not the artifact's accent fill).
- [ ] E3 Filter chips line (`lg-f`, only when filtering): «N de 126 versículos», a chip per active filter (book name / form) with ×, «Quitar filtros»; chips 32 high, border `rule-2`, radius 6, hover border ink + `hover`; hidden without filters.
- [ ] E4 List of books, only books that have visible verses; each row = a button (name Newsreader 19 | «N versículos» 13 ink-3 | chevron that turns 90° in 200 ms), min 44; hover underlines the name. Opening: panel height + opacity 220 ms `cubic-bezier(.22,1,.36,1)`; closing 160 ms `cubic-bezier(.25,.1,.25,1)`; open books are remembered; the book filter opens its book; a filter change re-draws the list with FLIP; reduced motion: none.
- [ ] E5 Inside a book: rows 104 | 1fr | auto (gap 22, padding 9, hairlines): reference link («6:53», `aria-label` with the book), fragment of the verse around the marked word (Source Serif 300 16.5, one line with ellipsis; ≤ 720 two lines, clamp), the form tag on the right (Greek 15 + translit + «· acus. sing.», 12.5 ink-3, no wrap; ≤ 720 in the first line). Several forms in one verse are joined with « ; ».
- [ ] E6 Edition note «Texto en español: Reina-Valera 1909 (dominio público). Está marcada la palabra «carne» donde la traducción la usa. Efesios 2:15 corresponde a 2:14 en la numeración del NA28.» (13/1.55 ink-3, max 700, mt 14).

### F. «En los Padres que cita Doctrina» (`#padres`, column) — «Español primero, con la ficha de la palabra»
- [ ] F1 `h2` + sub «Dónde aparece la palabra en los textos griegos de los Padres que Doctrina ya cita.»
- [ ] F2 One item with hairlines top and bottom (padding 22 0 20): Spanish quote (Newsreader italic 300 22/1.45 ink, «» by CSS, the word in `b` weight 400); Greek (Gentium 18/1.65 ink-2, mt 16, the word marked with `mark`) and its transliteration line (italic UI 15/1.6 ink-3, mt 6, follows the switch); the word box (max 520, padding 14 16, border `rule-2`, radius 6: «La palabra en esta cita» 12.5, form Greek 22 + translit, «Caso y número: …», link «Ver los N lugares con esta forma» that sets the form filter and scrolls); the source line (14 ink-3, «Ignacio de Antioquía» in `b`, the work as a citation-window link, date) and «Griego de la edición de Kirsopp Lake (1912). Traducción de Doctrina asistida por IA.» (12.5 ink-3).
- [ ] F3 The citation link opens the citation window with the quote and the reader «Carta a los Esmirniotas» at 7.1.

### G. Footer navigation (`.pn`)
- [ ] G1 Two links (grid 1fr 1fr, gap 16, mt 84, max 1040; one column ≤ 720): small label (12.5 ink-3) over a body 16.5 line with the Greek (18) + translit + gloss; border `rule`, radius 6, padding 14 18 15, hover border `rule-2` + `hover`; the second right-aligned (left ≤ 720).
- [ ] G2 Coming from a verse: «Palabra anterior en Juan 6:53» / «… siguiente …» (the neighbours inside the verse, with their lemma and gloss); otherwise «Palabra anterior» / «Palabra siguiente» (lexicon neighbours).

### H. Page-wide
- [ ] H1 Section rhythm: gap 140 between sections (96 on a phone), `scroll-margin` under the bar; the edge ruler lists the sections (data-label): «Dónde aparece», «Qué significa», «Sus formas», «Los lugares», «En los Padres». (**Order is the artifact's: «Sus formas» sits between «Qué significa» and «Los lugares»**; the session brief listed it last.)
- [ ] H2 Entrance: the title block fades in (`title-fade`, the site's `page-fade`); lists use the scroll reveal and FLIP (`RevealList`).
- [ ] H3 Responsive: ≥ 1100, ≤ 1099, ≤ 860, ≤ 720, coarse pointer (sizes above); no horizontal overflow at 360.
- [ ] H4 Dark mode: the same tokens (`mark` dark, `accent-weak` dark, panel and text values of DESIGN §1).
- [ ] H5 Focus: `:focus-visible` outlines as the site's.
- [ ] H6 Tab title and metadata (the site's pattern; not in the artifact).

### P. Verse panel tab «Palabras» (reader artifact `words`, 'filas')
- [ ] P1 Tab label «Palabras» with a count (the verse's words, `.n` 12 ink-3); body = hairline list (top per item, bottom on the last) of one row per word.
- [ ] P2 Row (button, min 44, padding 9 6, radius 4, hover `hover`): grid minmax(120,170) | 1fr | 22 (gap 4 18): Greek or Hebrew word (`--font-greek` 20/1.3 ink), gloss (Source Serif 300 16.5/1.45 ink-2) followed by its transliteration (`small`, 12.5 ink-3, margin-left 10; follows the switch), chevron turning 90° in 200 ms; `aria-expanded`.
- [ ] P3 Expanding opens the word card under the row: height and opacity 380 ms `ease-reveal`; closing: opacity 180 ms `ease-in` then height 380 ms `ease-reveal` (delay 180); reduced motion: none. Card (padding 4 6 18): word 32 Gentium, transliteration 14 ink-3 (mb 14), `dl` 118 | 1fr with hairlines (term 13 ink-3, value Source Serif 16 ink): Strong · En el Nuevo Testamento («147 veces, 12 en Juan») · Significa · Forma (parse in Spanish) · Palabra base (lemma Greek + (translit)); `btn-go` «Abrir el estudio de σάρξ» (opens screen 07; inert until B1.4 lands).
- [ ] P4 Source line under the list (`ww-src`, 13/1.5 ink-3, mt 14): «Griego: STEP Bible, CC BY 4.0. Glosas: …». **Text must change** (open point 4).

### U. Verse panel tab «Usos» (reader artifact `uses`)
- [ ] U1 Tab label «Usos» with a count; body = list `cd-du` (no bullets; item padding 9 0, hairline above all but the first; the first has no top padding).
- [ ] U2 Item: a link to the place (body 18/1.4 `ln-go`, e.g. «La posición católica, La Escritura que usa») and, in a block under it, a 14/1.45 ink-3 line saying how the verse is used there. The link opens the page at that section.
- [ ] U3 No item: the tab is shown without content only if Pedro keeps «visible and inert» (DECISIONS 2026-10-27); when data exists, it lists; for a verse nothing cites, an empty state is **not** in the artifact (open point 5).

## Deviations from the approved artifact (filled as blocks are built)

| Element | What the proposal had | What the site has | Design-system reason |
|---|---|---|---|
| (none yet) | | | |

## Data conflicts and open points (batched to Pedro 2026-11-03; defaults in brackets)

1. **«En los Padres»**: no original-language Father text exists in the corpus. [Built inert with a `TODO` that says why; no invented quote.]
2. **«Qué significa»**: the design has a plain title, a Spanish description and an example per sense; the data has numbered Abbott-Smith senses in **English** with OSIS references (1,529 entries have ≥ 2 senses; 4,020 have one undivided definition), no titles, no Spanish. [Show the numbered senses in English, labelled «Abbott-Smith (1922), en inglés»; example verse = the sense's first reference in RV1909; tag «Léxico»; plain title as a `TODO`. Option: have Spanish descriptions and plain titles drafted by AI, labelled, for the most frequent words first: needs your yes and a cost.]
3. **Header facts and lede**: «Genitivo», «Palabras derivadas» and the lede prose were written by hand for σάρξ; no field gives them (the lexicon has `pos`, `gloss`, `glossEs`, counts, `formOf`). [Per word, a fact is shown only when its data exists (Significado literal, Clase de palabra translated from `pos`, counts, Strong; Genitivo for nouns when readable from the verses); the lede is the Spanish gloss («Carne.») and the lexicon's short definition; each omission listed here.]
4. **Credit line of «Palabras»**: the artifact says «Glosas: Open Greek New Testament, CC BY-SA 4.0»; DECISIONS 2026-11-01 (answer 5) says OpenGNT is not used. [«Texto original y análisis: STEPBible (Tyndale House), CC BY 4.0. Glosas en español: de Doctrina, redactadas con IA, sin revisar.»; Spanish missing → English, labelled.]
5. **«Usos»**: «how the verse is used there» (the 14 px line) does not exist as data; the registry has citations per page. [Link text = page title and section; the line = the section's own label; richer wording later.]
6. **«Sus formas»** needs the form → case and number of each occurrence; `occurrences` has forms and counts only. [Add `fm` (form → morph code) to `build_words.py` and regenerate (8 s); touches data scripts, not `src/`.]
7. **«Los lugares»**: the artifact marks «carne» inside the RV1909 text by a hand-written pattern; no data says which Spanish word translates the Greek one. [Verse text unmarked, no guessing (trust rule); `TODO`.]
8. **Hebrew**: the artifact was drawn for Greek. It has no font for Hebrew (Gentium has no Hebrew letters), no OT book layout, one undivided BDB entry instead of senses. [Noto Serif Hebrew through `next/font` as a new font token; OT books in canon order with the same row; BDB entry shown as the «Qué significa» body in English, labelled; each difference listed.]
9. **Route**: agent's call, recorded in DECISIONS: `/es/palabras/<dStrong>` and `/en/words/<dStrong>` (`G4561`, `H7225G`: the lexicon's own ids; the Spanish segment through the existing rewrites); «Viniste desde» via `?from=John.6.53` (a verse) or a Father page id.
10. **Licence to flag**: STEPBible asks «please do not redistribute it yourself»; the data is derived and stays local until Supabase. Not resolved here.

## Acceptance

Every checklist line ticked or listed in the deviations table; John 6 regression of the loader; one Hebrew chapter; `npm run verify`; e2e specs for every behaviour (switch memory, filters, folds, motion frames, keyboard, 360 overflow); screenshots at 360/390/768/1440, light and dark, side by side with the artifact; Pedro's approval before each commit command.

## Usage log

- 2026-11-03 18:39 (start of B1.0): session 7 %, weekly 72 % (cap 82 % inclusive). B1.0: reading and measuring the artifact, writing this file.
