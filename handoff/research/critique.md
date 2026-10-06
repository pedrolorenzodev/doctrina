# Design critique: Doctrina v2 (2026-10-03)

Scope: /es and /en; light and dark; 1440x900, 1024x768 and 390x844. Pages: home, doctrines index, the Eucharist overview, the history tab, the Catholic tab (with a citation open), John 6:53 (Greek word open, chapter expanded), John 6, the history index (entry open), and one detail page of each history kind: father, council, heresy, division, reformation.

Screenshots are in `research/screens/critique/`. Scripts are in `research/.critique/` (`batch.mjs` takes segmented full-page shots, `sect.mjs` scrolls to a section, `probe*.mjs` measures geometry). For pages captured in segments, `-0`, `-1` and so on are consecutive 2-viewport-high slices.

The verdict in one line: the system is not AI slop. Type, color and hairlines are disciplined. The problems are density management (the verse page) and mobile ergonomics. The study panel is underused: the right third of almost every page is empty paper while the depth gets dumped inline. Pages built by different people also drift apart in small ways.

---

## Ranked issues

### P0. Must fix

**1. The verse page's "Lo que escribieron los Padres" section is a wall, not a study desk.** P0
- Page/viewport: /es/bible/john/6/53, every viewport. The page is **8,477px tall at 1440 and 10,221px at 390**.
- What's wrong:
  - All 18 excerpts render expanded at 5 lines. Chrysostom alone stacks 5 consecutive excerpts.
  - Each excerpt carries 5 text tiers in 4 greys: work title, "Comenta 6:53–54", quote, lapis "Leer más", "Nota:", then an ink-3 "Traducción: … Ver la fuente" line with a second link style.
  - Meanwhile the 400px study column on the right stays empty for the whole scroll.
  - This is exactly the "heavy / dirty" the owner fears, and it ignores DESIGN §1 ("depth lands beside the text") and analogs §3.12 ("show less of it at once").
- Screenshots: `verse-d-1.png`, `verse-d-2.png`, `verse-d-3.png`, `verse-sec-m-2.png`
- Fix, in `src/components/bible/FathersSection.tsx` and `Clamp.tsx`:
  - Use **one row per Father** (Catena master–detail): name, dates, ruler, the first work's title, and the excerpt clamped to **2 lines** (`line-clamp-5` → `line-clamp-2` in Clamp).
  - Where a Father has more passages, add a quiet "y 4 pasajes más".
  - Clicking the row opens the full excerpt, the note, the translation credit and "Ver la fuente" in the **study panel** (a `SourceEntry`), not inline.
  - Move "Nota" and "Traducción" into the panel.
  - Target height: about 90px per Father, which puts the whole section near 1,700px instead of about 6,000.
  - Optional: add a century filter row above the list.

**2. On mobile, 4 of the 5 traditions are invisible.** P0
- Page/viewport: every /es/doctrines/eucharist/* page at 390.
- What's wrong:
  - The tab row is 643px wide inside a 358px box, scrolls sideways, and has no fade, chevron or peek; it ends at a clipped "Orto".
  - The core model is "one tradition at a time, the others one click away". On a phone the reader can't see that the other traditions exist.
- Screenshots: `euch-m-0.png`, `cath-m-0.png`, `toc-open-m.png`, `en-euch-m-dark.png`
- Fix, in `src/components/doctrine/DoctrineHeader.tsx`:
  - Below 720px, split into **two rows**. Row 1 holds the neutral tabs (Panorama, Historia y testigos). Row 2 holds the five traditions as a scroll row with `mask-image: linear-gradient(to right, #000 85%, transparent)`.
  - On mount, call `scrollIntoView({inline:"center"})` on the active tab.
  - The alternative is a "Leyendo: Católica ▾" select (analogs §2b).

**3. Citation numerals are 10×15px tap targets.** P0
- Page/viewport: /es/doctrines/eucharist/catholic at 390, measured.
- What's wrong:
  - The `button[aria-expanded]` numerals measure **10.2×14.7px** (font 12.24px, padding 1.2/2.4px). DESIGN §6 promises 44px.
  - "¹ ²" sit 4px apart, so a thumb hits the wrong source.
- Screenshot: `cath-m-0.png`
- Fix, on the citation trigger in `src/components/study/RichText.tsx` (or its `<Open>` citation variant):
  - Add `relative` plus a pseudo hit-area: `after:absolute after:-inset-x-2 after:-inset-y-3 after:content-['']`.
  - Raise the numeral to `text-[0.75em] px-[3px]`, and add `ml-0.5` between adjacent numerals.
  - With `@media (pointer:coarse)`, add `min-w-6`.

**4. `--ink-3` is used for readable text and fails the contrast floor in both themes.** P0
- Page/viewport: every page.
- What's wrong:
  - `#878B94` on `#FAFAF8` is about **3.3:1**. `#777B84` on `#16181C` is about **4.2:1**. DESIGN §10 requires 4.5:1.
  - DESIGN reserves ink-3 for ticks, counts and disabled states, but it now carries real text:
    - the "Borrador…" notice and each tradition's self-description;
    - the panel hint;
    - the Greek license paragraph;
    - every "Traducción: …" line;
    - the 18px **context verses 6:52 and 6:54**;
    - quiet history dates.
- Screenshots: `cath-d-0.png`, `verse-d-0.png`, `verse-dk-0.png`, `histidx-d-0.png`
- Fix, in `src/app/globals.css`: set light `--ink-3: #6F737C` and dark `--ink-3: #8C9099` (both ≥4.5:1). Alternatively, switch those text uses to `text-ink-2` and keep ink-3 for ruler ticks and counts only.

### P1. Should fix before showing anyone

**5. The doctrine tab bar jumps 47px when you switch tabs.** P1
- Page/viewport: /es/doctrines/eucharist compared with /history and /catholic, at 1440 and 1024.
- What's wrong:
  - The overview uses the full `text-title` with `pt-12 md:pt-16`. Subpages use `compact` (`text-[clamp(2rem,4vw,2.75rem)]`, `pt-8`).
  - The tabs sit at y=347 on the overview and y=300 everywhere else, so every switch between Panorama and a tradition shifts the whole page.
- Screenshots: `euch-d-0.png` against `cath-d-0.png` and `hist-d-0.png`
- Fix: in `DoctrineHeader.tsx`, render every doctrine route with the same header (use compact everywhere, or full everywhere). The `compact` prop should only be used on pages without tabs.

**6. The mobile bottom sheet hides the thing you tapped.** P1
- Page/viewport: 390, with a citation open on /catholic or a Greek word open on the verse page.
- What's wrong:
  - The sheet opens to about 80–88% of the viewport. The sentence carrying the numeral, or the interlinear word, ends up under it.
  - The reader loses "where am I", which niche §1 (Sefaria) and analogs §2c (60% snap) both warn about.
- Screenshots: `cath-cite-m.png`, `word-m.png`
- Fix, in `src/components/study/StudyPanel.tsx`:
  - Open at a **60dvh** snap point with a drag handle up to 92dvh.
  - Before opening, scroll the trigger to about 15% from the top (`window.scrollTo({top: triggerTop - headerH - 16})`) so it stays visible above the sheet.

**7. The docked desktop panel is clipped below the fold.** P1
- Page/viewport: /es/bible/john/6/53 at 1440 with a word open.
- What's wrong:
  - The sticky panel is 812px tall, starts at y=227 and ends at y=1039 in a 900px viewport.
  - Its inner scroller extends 138px below the screen, so the end of the panel (including "Estudio de la palabra: 1069 veces…") can't be reached until the page itself scrolls.
- Screenshot: `word-d.png`
- Fix: in the `StudyLayout` / `StudyPanel` panel container, use `sticky top-[72px] h-[calc(100dvh-88px)]`. The height should be capped by the viewport, not the content: `max-h-[calc(100dvh-var(--panel-top)-16px)]`.

**8. Zero counts and blank pages make the product look empty.** P1
- Page/viewport:
  - /es/doctrines/eucharist: five rows of "Estudiar (0 objeciones, 0 pasajes)".
  - The verse TOC: "Videos sobre este pasaje 0".
  - /es/doctrines/eucharist/history: a completely blank page under the tabs, with only the panel hint to its right.
- What's wrong: content will arrive, but the *rendering* has no empty-state logic. The raw parenthetical "(0 objeciones, 0 pasajes)" is also clunky even when the numbers are non-zero.
- Screenshots: `euch-d-0.png`, `euch-t-0.png`, `hist-d-0.png`, `hist-m-dark.png`, `verse-d-0.png`
- Fix:
  - In `src/app/[locale]/doctrines/[slug]/page.tsx:88`: link text "Estudiar la postura católica", with counts on their own line as `font-sans text-small text-ink-2` ("12 objeciones, 8 pasajes"), omitted when 0.
  - In `Toc.tsx`: hide the count when it is 0.
  - Give the history page a centered empty state (DESIGN allows centered only here): one sentence plus a link to /history.

**9. The search box is fake.** P1
- Page/viewport: the header on every page at ≥768. At 390 there is no search at all.
- What's wrong:
  - "Buscar ⌘K" is a `disabled` button with `title="Próximamente"`, styled exactly like a live input.
  - It is the most prominent control in the header, and it does nothing. Dead affordances are a classic generated-UI tell and they erode trust.
- Screenshot: `home-d-0.png` (header)
- Fix: in `src/components/shell/SiteHeader.tsx:31`, remove it until search ships. If it must stay, render plain ink-3 text "Búsqueda: próximamente" with no input chrome and no ⌘K.

**10. The home hero is a 5–6 line, 60px sentence with a stranded ruler.** P1
- Page/viewport: /es and /en at 1440.
- What's wrong:
  - The H1 runs 5 lines in Spanish and **6 in English** ("Study in depth what / each Christian / tradition believes, …"). It is the heaviest thing on the site.
  - The ruler sits vertically centered about 250px below the H1's top with dead space above it, so the two don't read as one composition.
  - The first screen at 390 is all headline.
- Screenshots: `home-d-0.png`, `en-home-d.png`, `home-m-0.png`
- Fix, in `src/app/[locale]/page.tsx`:
  - Shorten the H1 to about 8 words ("Qué cree cada tradición cristiana, y por qué") and keep the rest in the dek.
  - Or set it at `clamp(2.25rem,4vw,3.25rem)` with `max-w-[20ch]`.
  - Use `items-start` on the hero grid so the ruler block's top aligns with the H1 cap height.

**11. The home page truncates each tradition's own confession mid-clause.** P1
- Page/viewport: /es at 1440.
- What's wrong:
  - Five 200px columns with a line clamp produce "…cambia la…", "…La…", "…el…".
  - Cutting a tradition's self-statement mid-sentence is a neutrality problem, and the five-up equal-column strip is the one card-grid pattern on the site.
- Screenshot: `home-d-0.png`
- Fix: render the five answers as the same hairline rows used on the overview (name in a 160px left column, full sentence on the right, no clamp), or as two rows of max 3 at ≥340px each.

**12. Verse page, "Cómo lo lee cada tradición" is a link farm.** P1
- Page/viewport: /es/bible/john/6/53, all viewports.
- What's wrong: five rows read "Ver cómo lee Juan 6 la tradición X", with no content, the same sentence five times.
- Screenshot: `verse-sec-d-0.png`
- Fix, in `src/components/bible/TraditionReadings.tsx`:
  - For each tradition, show a one-sentence reading of *this verse* and its authority label ("Dogma (Trento XIII)", "Confesión").
  - Follow it with a quiet "Estudiar" link.
  - If a tradition has no reading yet, omit its row instead of linking to nothing.

**13. Chapter page: the only way into the deep verse pages is a 10px blue superscript.** P1
- Page/viewport: /es/bible/john/6 at 1440 and 390.
- What's wrong:
  - Studied verses are marked only by lapis verse numbers (47–59).
  - The 400px right column is empty.
  - There is no prev/next chapter and no book navigation.
- Screenshots: `chap-d-0.png`, `chap-d-1.png`, `chap-m-0.png`
- Fix, in `src/components/bible/ChapterReader.tsx`:
  - Make a studied verse a hover target (`hover:bg-accent-tint` on the verse span).
  - At ≥1100, put a margin note aligned to the verse in the right column ("6:53 · 18 Padres, griego"; avoid "·"-joined strings, so use two lines). It opens a verse preview in the study panel.
  - Add "‹ Juan 5 / Juan 7 ›" at the top and bottom.

**14. Long history prose has no openable marks, so the study desk does nothing there.** P1
- Page/viewport: /es/history/divisions/east-west-1054 and /heresies/arianism, all viewports.
- What's wrong:
  - Thousands of words mention Nicea, Atanasio, León IX, Focio, Toledo 589 and Constantinopla 381. All of them exist as entries, and none can be tapped.
  - The right column still says "Tocá una cita, una palabra o un término subrayado…".
- Screenshots: `hd-division-d-0.png`, `hd-heresy-d-0.png`
- Fix: in the content and `RichText`, wrap the first mention per section of any known entity in `<Open entry>` (council, father, heresy). These are lapis openable marks that open in the panel.

**15. The three pillars don't link to each other.** P1
- Page/viewport: history detail pages, the verse page.
- What's wrong:
  - Ignatius's page doesn't say he is quoted on John 6:53 or in the Eucharist history.
  - "Luteranismo" doesn't link to /doctrines/eucharist/lutheran.
  - Father names on the verse page aren't links to the Father pages.
  - Every page is a dead end for the serious reader, the opposite of the "connected doctrines" promise.
- Screenshots: `hd-father-d-0.png`, `hd-ref-d-0.png`, `verse-d-1.png`
- Fix:
  - On father pages, add a "Citado en" section listing verse pages and doctrine sections (from the existing fathers-by-verse data).
  - On the matching reformation branch pages, add "Qué enseña sobre: La Eucaristía".
  - On the verse page, make the Father name an `<Open>` to the person entry.

**16. The history index is 20,202px on desktop and 30,979px on mobile.** P1
- Page/viewport: /es/history, at 390 especially.
- What's wrong:
  - All 264 rows render. The sticky brush helps on desktop, but on mobile there is no sticky era jump.
  - "Event" rows are set in ink-2 at 15px, so they look disabled next to the entity rows.
- Screenshots: `histidx-d-0.png`, `histidx-d-1.png`, `histidx-m-0.png`
- Fix, in `src/components/history/Timeline.tsx`:
  - Collapse each century after 6 rows with "Mostrar los 22 del siglo II".
  - Make the era row (Apóstoles / Padres / Edad Media…) sticky under the header at <720 as well.
  - Change `titleClass.quiet` to `text-ink` at 400. Weight already separates the hierarchy, and the grey says "disabled".

**17. The word panel has a broken Spanish grammar line, a raw code, and the wrong section order.** P1
- Page/viewport: /es/bible/john/6/53 with μή open, at every viewport.
- What's wrong:
  - It reads "Gramática: **Negativo partícula**" (adjective-noun order), with "PRT-N" underneath. Niche §2 says to avoid raw parsing codes.
  - About 20 lines of English Abbott-Smith come *before* "Estudio de la palabra" (the frequency, which is the more useful part for this reader).
- Screenshots: `word-d.png`, `word-m.png`
- Fix:
  - In `src/lib/morph.ts`, emit noun-first Spanish with agreement ("Partícula negativa").
  - In `src/components/study/renderers/WordEntry.tsx:271`, drop the visible code (keep it in a `title` attribute).
  - Move the word-study block above the lexicon and clamp the lexicon to 4 lines with "Leer la entrada completa".

**18. English keeps leaking into the Spanish product.** P1
- Page/viewport: /es pages.
- What's wrong:
  - English quotes are acknowledged, but these smaller things aren't:
    - "Ciudad: Antioch";
    - "Sobre las fechas (nota en inglés)" right under an h2 that already says "Sobre las fechas";
    - work titles ("Epistle of Ignatius to the Ephesians", "Homily on the Gospel of John 47", "Treatise IV. On the Lord's Prayer").
  - For a Spanish-speaking primary user these read as unfinished.
- Screenshots: `hd-father-d-0.png`, `histclick-d.png`, `verse-d-1.png`
- Fix:
  - Translate work titles and place names in the data (cheap and short). Keep the long quotes in English behind `lang="en"`, as now.
  - Remove the duplicated "Sobre las fechas" label.

**19. No footer, so attribution clutters the reading column.** P1
- Page/viewport: every page (`footer` count = 0).
- What's wrong:
  - There is nowhere for method, sources and licenses, or "about", which a neutrality-claiming theology site needs for trust.
  - As a result, license paragraphs are inlined in the reading flow: four lines of STEPBible/CC credits under the interlinear, a public-domain note under the translations, and "Traducción: ANF…" under every excerpt.
- Screenshots: `verse-d-0.png`, `verse-d-1.png`
- Fix:
  - Add `SiteFooter` with "Método", "Fuentes y licencias" and "Acerca de", in hairline-separated small UI (avoid "·" joins).
  - Collapse per-section credits into a single "Fuentes" `<details>` at the section end, in ink-2 small text.

### P2. Polish

**20. At 1024px the TOC becomes a full-width boxed card with the browser's default ▶.** P2
- Screenshots: `euch-t-0.png`, `bapt-t-dark.png`, `toc-open-m.png`
- What's wrong: the box spans 984px while the text column is 700px. A bordered, radiused box is the only "card" in an otherwise hairline system.
- Fix, in `src/components/study/Toc.tsx`:
  - Constrain it to the reading column (`max-w-[68ch]`).
  - Drop the border and radius in favor of `border-y border-rule`.
  - Use `list-none` on `summary`, with a custom 10px chevron in ink-3.
  - Between 720 and 1099px, consider keeping the left rail (200px + 68ch fits in 1024).

**21. The same thing is styled differently on different pages.** P2
- Screenshots: `hd-council-d-0.png` against `hd-father-d-0.png`; `euch-d-0.png` against `verse-sec-d-0.png`; `cath-cite-d.png` against `verse-d-1.png`
- What's wrong:
  - Heresy link rows are Brygada 600 lapis on the council page and 400 lapis on the father page.
  - Tradition names are Commissioner 500 at 14px on the overview and Brygada 400 at 19px on the verse page.
  - Quotations have a lapis left rule in the panel and a grey `rule-2` rule on the page (DESIGN says `rule-2`).
- Fix:
  - Extract `<EntityRow>` and `<TraditionName>` components into `src/components/study/` and use them everywhere.
  - Set the quote rule to `border-rule-2` always. Lapis is reserved for active/openable states.

**22. The panel hint shows on pages with nothing to tap, and the docked panel looks like a floating card.** P2
- Screenshots: `euch-d-0.png`, `hd-father-d-0.png`, `hist-d-0.png`, `cath-cite-d.png`
- What's wrong:
  - "Tocá una cita…" appears on the overview, the father page and the empty history tab, none of which contain openable marks.
  - When docked at ≥1100, the panel has a 12px radius and `--shadow-panel`. DESIGN §6 limits shadows to the overlay or sheet.
- Fix:
  - Render the hint only when the page registers at least one `<Open>`. Otherwise use the column for a "Conectado con" rail (left hairline, per analogs §2a).
  - When docked, use `rounded-none shadow-none border-l border-rule bg-transparent`.

**23. The panel header is inconsistent across kinds.** P2
- Screenshots: `cath-cite-d.png` against `histclick-d.png`
- What's wrong:
  - Source panels have only "×".
  - Person and Council panels have "Abrir página completa".
  - Source panels also stack two kind labels ("Fuente", then "Concilio").
- Fix: in `StudyPanel.tsx`, keep a fixed header slot of back, kind and "Abrir página completa" (or "Abrir en la edición" for sources) plus ×. Show one kind label only.

**24. The history overview chart is illegible, and some rows render empty rulers.** P2
- Screenshots: `histidx-d-0.png`, `histidx-d-1.png`, `en-hist-t.png`
- What's wrong:
  - Lane labels are about 9px.
  - The six legend glyphs are cryptic, and Padres and Reforma look nearly identical.
  - The chart's bottom hairline overshoots the column by about 12px on each side.
  - Heresies whose range starts at the century edge (Gnosticismo and Ebionitas, c. 100–400) draw an **empty** track.
  - "Siglo I" appears as a header under two different eras.
- Fix, in `Timeline.tsx`:
  - Make labels at least 11px.
  - Use distinct glyph shapes, or drop the glyphs from the filter chips.
  - Clamp the range bar to the window with an arrow cap.
  - Fold the boundary rows into the era where they start.

**25. Mobile chrome is heavy, and tab patterns differ between the Bible and doctrine pages.** P2
- Screenshots: `home-m-0.png`, `verse-m-0.png`, `chap-m-0.png`
- What's wrong:
  - The sticky header is 83px over two rows (10% of the viewport, permanently).
  - Before content starts, header plus doctrine header plus tabs plus TOC take about 560px of 844.
  - The verse translation tabs **wrap** to a second row with an orphaned separator, while the doctrine tabs **scroll**.
- Fix:
  - Make the header a single 56px row (logo, ES/EN, theme, menu), with the nav row hiding on scroll-down.
  - Give both tab systems the same scroll-plus-fade pattern.
  - Add a skip link, which is also currently missing.

---

## Five things to keep (don't let anyone "improve" these away)

1. **The typographic system really avoids slop.**
   - Brygada for reading, Commissioner for UI and Gentium for Greek, with fixed roles.
   - Sentence case everywhere, with no caps eyebrows, gradients, pills, icons-in-squares or cards.
   - Headings at weight 400–500. Hairline rows carry the structure.
   - It already reads like Tufte / OWID, not a template (`cath-d-0.png`, `hd-council-d-0.png`).
2. **The time ruler as a recurring signature.**
   - It appears on the home page, in every panel, on every Father and in the history header, and it means something each time ("how early is this?").
   - The hollow vs. filled marker for uncertain dates is a good touch (`home-d-0.png`, `verse-d-1.png`).
3. **The history index's sticky overview with a brush that follows the scroll**, plus rows that tint, show a 2px lapis bar and open in the panel. It is the best interaction in the product (`histclick-council-d.png`).
4. **The verse reader's core.**
   - Expanding the chapter in place, with the target verse on a lapis rule and tint and the action row staying put (`chapter-d.png`, `chapter-m.png`).
   - The interlinear with transliteration first, script, then gloss (`verse-d-0.png`).
   - Prev/next verse.
5. **One accent and a real dark "reading lamp", plus the honesty notes.**
   - Lapis only on openable or active states. Dark mode holds up everywhere (`cath-cite-d-dark.png`, `histidx-dk-0.png`).
   - "Borrador. Las citas todavía no fueron verificadas…" and "Nota: no cita Juan 6 literalmente" build the kind of trust this audience needs.
