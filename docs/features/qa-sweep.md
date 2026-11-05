# QA sweep (observation only)

Session Sonnet 5.5, duplicate repo `doctrina-qa`. Started 2026-11-04 13:35, resumed 2026-11-05 09:00 after a connection loss. Nothing under `src/`, `e2e/`, `data/` or any existing file was edited. Server: `npx next start -p 3801` after `npm run build` (build OK).

## State

- **Sweep finished.** Nothing pending except what is listed in «Not covered».
- Usage log: 2026-11-04 13:35 weekly 85 % · 2026-11-05 09:02 weekly 1 % (week reset), session 4 % · 09:21 session 8 % · 09:37 session 11 % · 09:47 session 13 %, weekly 2 %.
- To re-run: start the server (`npx next start -p 3801`), then `node tools/qa/crawl.mjs`, `node tools/qa/measure.mjs` (env vars at the top of the file), `node tools/qa/interact.mjs`, `node tools/qa/focus.mjs`, `node tools/qa/english-gaps.mjs`, `node tools/qa/analyze.mjs tmp/qa/measure-all.jsonl`.

Files created (none staged): `docs/features/qa-sweep.md`, `tools/qa/crawl.mjs`, `tools/qa/routes.mjs`, `tools/qa/measure.mjs`, `tools/qa/analyze.mjs`, `tools/qa/interact.mjs`, `tools/qa/focus.mjs`, `tools/qa/english-gaps.mjs`, `tools/qa/sheet.py`, `tools/qa/sheet2.py`, and everything under `tmp/qa/` (screenshots, sheets, raw JSON; never to commit).

## A. How it was done

- **Crawl** (`tools/qa/crawl.mjs`, `tmp/qa/crawl.json`): breadth first from `/es` and `/en` over every internal `href` in the server HTML: 3628 URLs (3446 OK, 182 × 404).
- **Measurements** (`tools/qa/measure.mjs`, `tmp/qa/measure-all.jsonl`, summary `tmp/qa/analysis.txt`): 66 routes × 7 widths (360, 390, 768, 1024, 1440, 1920, 2560; heights 740, 844, 1024, 768, 900, 1080, 1440) × light and dark = 924 page loads. Per load: horizontal overflow and the elements past the right edge, text extents against `main` (left and right gutter), fixed/sticky bars, truncation, broken images, console errors and warnings, failed requests, layout shift, load timing, Greek/Hebrew without `lang`, touch-target sizes. Screenshots at 390, 1440, 2560 (+ full page at 390 and 1440 in light).
- **Touch**: same measurements with `hasTouch` + `isMobile` at 390 and 768 (`measure-touch.jsonl`, 132 loads).
- **Accessibility**: axe-core (it was already in `node_modules`; injected from there, no change to `package.json`) on all 66 routes at 390 and 1440, both themes (`measure-axe.jsonl`).
- **Interactive states** (`tools/qa/interact.mjs`, `tmp/qa/inter/`): verse panel (Palabras, Usos, Traducciones), note editor, translation picker, book/chapter picker, second translation («Debajo» / «Al lado»), text options, Ask drawer, «Tus notas», ⌘K search with a query, the tree (home and tradition page), simplifier, citation window (a dogma term), Father panel, verse page, DRA verse. At 390, 768, 1024, 1440, 2560, light and dark (190 runs).
- **Keyboard** (`tools/qa/focus.mjs`): 45 Tab presses on 9 pages at 1440, checking focus ring and order.
- **English** (`tools/qa/english-gaps.mjs`): Spanish text on 15 English pages.
- **Looked at**: contact sheets in `tmp/qa/sheets/` (A–H, R1–R2: 24 routes at 390 / 1440 / 2560; D1: four routes in dark; I390a/b and I1440a/b: interactive states). Everything else was judged from numbers, not pictures.

### Not covered

- Only Chromium (no WebKit/Safari, no real phone); no screen reader; no slow network.
- Interactive-state pictures at 768, 1024 and the dark ones were captured and measured (no overflow, no panel outside the viewport) but not looked at one by one. At 2560 dark three runs failed because the local server was killed (see «Environment»).
- The AI drawer was only opened, not asked; note saving, highlighting, and the simplifier's answer were not exercised.
- Hover-only behaviour was checked in the code (`Tooltip`, `PressTooltip`) and on the touch runs, not by scanning every CSS `:hover` rule.
- Pages looked at at 1920 only through numbers.
- English: only the 15 pages listed in `english-gaps.mjs`.
- Environment: the local `next start` was killed twice by something outside this session (another session's `ps` line was visible in the same machine); I restarted it. It is not an app crash (no stack trace in `tmp/server*.log`).

## B. Findings

Severity scale: blocker (broken or unreachable), high (looks clearly wrong), medium, low. Paths are under `tmp/qa/`. «Sheet» = `tmp/qa/sheets/`.

### B1. What works (so nobody re-checks it)

| Check | Result |
|---|---|
| Horizontal overflow | 0 on 66 routes × 7 widths × 2 themes, and on 190 interactive runs |
| Console errors and warnings | none, except the expected 404 of the 404 route |
| Failed requests | only aborted prefetches (`_rsc` … `ERR_ABORTED`: Next cancels them when you leave a page); no 4xx/5xx on assets |
| Images and fonts | no broken image; fonts ready on every load |
| Layout shift | 0 on every page. The values up to 2.0 on Bible routes came from my scripted scroll through the continuous stream (it lands on another chapter); re-measured without scrolling: 0 |
| Doctrine pages, Catholic tradition, Passages, objection at 1920 and 2560 | centred 1360 block with equal gutters (`rail`) |
| Reader (Bible chapter, deuterocanon, Father work) at all widths | centred column; panel, drawer and pickers fit the viewport at 390 (bottom sheet), 768, 1024, 1440, 2560 |
| Dark theme | coherent on the 8 routes looked at |
| Focus ring and skip link | «Saltar al contenido» is the first Tab stop; ring visible on every control tried |
| Touch targets | links, citations and crumbs have a 44 px hit area (`hit-44`); the real misses are listed below |
| Spanish internal links | 0 broken (3446 pages OK) |

### B2. Issues

| ID | Screen | Width / theme | Finding | Sev | Evidence | Probable cause · file | Fix (one line) |
|---|---|---|---|---|---|---|---|
| L1 | Every Spanish doctrine page (81: doctrines, traditions, Pasajes, Objeciones, objections, Primeros cristianos) | all | The «EN» link in the top bar goes to `/en/doctrines/...`, which does not exist: 404. 82 URLs. | blocker | `crawl.json` (404 group `/en/doctrines/*`) | English doctrine pages are not built; the switcher links to the mirrored URL anyway · language switcher in the top bar, `src/content/routes.ts` | Link to the English home (or hide the switcher) when the English page does not exist. |
| L2 | English home `/en` and the sidebar on English pages | all | Links to `/en/glossary` and 100 `/en/glossary/<term>` pages: all 404. | blocker | `crawl.json` | The glossary has no English route. | Hide the glossary entry in English, or build it. |
| L3 | English site | all | Only home, History (296 pages) and Bible (1326 pages) exist. No doctrines, objections, passages, early Christians, glossary, words. A visitor who switches to EN from a doctrine page leaves the product. | high | `english-gaps.mjs`, crawl | product scope | Question for Pedro: is the English site meant to launch with only History and Bible? |
| W1 | Verse page (06), word page (07), Padres / Concilios / Herejías / Divisiones / Reforma indexes, council / current / division / Reformation-movement pages, glossary and term, «Primeros cristianos» (3 of 4 doctrines), Objeciones list and objection pages | 1920, 2560 | Content is a 720–1040 px block against the left edge; the right gutter is 540–910 px at 1920 and 1130–1550 px at 2560, against 64 px on the left. Pedro's known concern, confirmed. At 1440 with the tree open the same happens on the 16 non-Catholic tradition pages and objections (right gutter ≈ 385 px against 64 px). | high | `analysis.txt` «WIDE LAYOUT»; Sheet B, C, D, F, G | `PageMain` gets the `rail` prop only on the six doctrine pages (`src/components/page-main.tsx`); the others use `container-col` / `container-wide` left-aligned (`src/components/section.tsx`, per page) | Question for Pedro: centre the block, or widen it? DESIGN §3 has no rule beyond 720 / 1040 / 1100 / rail 1360. |
| W2 | Home | 1920, 2560 | The 2000-year ruler spans the full width (2385 px at 2560) but the intro and the lists under it stay near 1100 px at the left: the right half is empty beneath a full-width chart. | medium | Sheet A | `years-grid` full width vs `years-lists` (DESIGN §6 home) | Question: cap the ruler, or let the lists use the width. |
| W3 | Timeline (08) | 1440, 2560 | Names on the right end of the chart are cut by the page edge («Melitón de Sardes, fo…», «Tex…», «Novaci…»). No way to read them without panning, and at 2560 the chart is wider than the screen anyway. | medium | Sheet E | labels anchored at the bar start with no clamp · timeline feature | Flip or clamp labels that would pass the right edge. |
| W4 | Global 404 | 390–2560 | Outside the locale layout: no header, no tree, no search; Spanish and English stacked; left-aligned at 2560. At 390 and 1440 the headings were still invisible 500 ms after load (entrance animation); fine after 1.5 s. | low | Sheet R2, H | `src/app/global-not-found.tsx` (by design in DESIGN §6) | Only the entrance timing is worth a look. |
| W5 | Tradition switcher and chapter strips | 390 | The tab row is cut at the right («Ba…»); Pentecostal is only reachable by swiping. That is the scroll cue, but nothing says there is more. | low | Sheet A, D1 | horizontal scroller | Question: is the cut-off enough of a cue? |
| T1 | «En palabras simples» button (simplifier) next to each statement | 390, 768 touch | 28 × 28 px, no hit area (19 doctrine pages). | medium | `measure-touch.jsonl` | missing `hit-44` | Add `hit-44`. |
| T2 | Word pages: «Transliteración» switch 147×36; verse page: edition buttons 38 px high; Father works: verse-number buttons 7×20; Pasajes ruler ticks 25×34; home footer links «Glosario» and «Fuentes» 20 px high | 390, 768 touch | Below 44 px with no extra hit area. | low | `measure-touch.jsonl` | missing `hit-44` | Same. |
| T3 | Home: the five edition chips (RV1909, BSB, KJV, WEB, DRA) | touch | The full edition name is a hover/focus tooltip (`Tooltip`); there is no tap equivalent (the sidebar uses `PressTooltip` for this). A tap does nothing. | medium | `src/features/home/bible-rows.tsx`, `src/components/ui/tooltip.tsx` | wrong tooltip component | Use `PressTooltip` there. |
| A1 | Search button in the top bar | all (65 pages) | Accessible name «Buscar» does not contain its visible text «Buscar doctrinas, versículos…» (WCAG 2.5.3, axe `label-content-name-mismatch`). | medium | `measure-axe.jsonl` | `aria-label` in `search-provider` / top bar | Make the label start with the visible text. |
| A2 | Word pages (Strong's glosses), Father works in English (12 spots in Tractates), the Hebrew word on `lang=es` | all | Greek and Hebrew inside `lang="en"` / `lang="es"` text with no `lang` of their own. | medium | `measure-all.jsonl` (`badLang`) | text pieces do not wrap Greek/Hebrew runs | Wrap runs in `lang="grc"` / `lang="he"`. |
| A3 | Home (390, `.mb-2`), word page option text (390), Wisdom 1 title part (1440), Psalm 23 `h1` (dark, 1440) | spots | Contrast below AA. | medium | `measure-axe.jsonl` | to find per case | Check each with the token values. |
| A4 | History indexes (5), Pasajes (3), global 404 | spots | Heading jumps h1 → h3; two landmarks with the same name on Pasajes; the global 404 has no `<title>`. | low | `measure-axe.jsonl` | | Fix in the components. |
| A5 | «Filtrar por nombre» inputs (Padres, Glosario) | 1440 | No visible focus ring (may use a border change). | low | `focus.mjs` | | Check; add the ring if it is only the border. |
| A6 | Search button placeholder | 768 | «Buscar doctrinas, versículos, Padres, pala…» is truncated with an ellipsis, nothing else shows it. | low | `analysis.txt` (TRUNCATED, 183 pages) | `span.truncate` | Shorter text below 1024 px. |
| C1 | Draft banners on the glossary, glossary terms, word pages and Father works («Borrador: estas definiciones todavía no tuvieron una revisión independiente», «Borrador: los datos de palabras aún no están verificados…») | all | Visible internal state on a launch page; it follows the trust invariant («unverified is marked draft») and conflicts with the DESIGN rule against internal states in anything shown. | question | Sheet G, D | content policy | Question for Pedro: keep, or reword for visitors? |
| P1 | Father works | all | HTML 1.7 MB gzipped (5.3 MB raw) for the biggest (Chrysostom on Matthew; Augustine's City of God 4.9 MB raw); first paint 1.5 s, load 4.3 s locally on `next start`; 69 pages over 1.5 MB raw. | medium | `crawl.json`, `measure-all.jsonl` | the whole work is in the page | Load by division on demand (as the passages already do). |
| P2 | Every page | all | 480–800 KB of raw HTML even for a glossary term (60–100 KB gzipped): fine on a good connection. | low | `crawl.json` | the tree/search data travels with each page | Only if mobile loading is slow in practice. |
| E1 | English Bible pages | all | The Ask drawer's suggested questions are Spanish («¿Qué dijo Crisóstomo sobre…?»); the English verse page shows the Spanish Bible text in the comparison list. | low | `english-gaps.mjs` | | Translate the suggestions. |
| K1 | Tab order | 1440 | A keyboard user passes 20–40 sidebar links before the text. The skip link covers it. | low | `focus.mjs` | | none needed |

### B3. Severity count (de-duplicated)

| Severity | Count | IDs |
|---|---|---|
| blocker | 2 | L1, L2 |
| high | 2 | L3, W1 |
| medium | 8 | W2, W3, T1, T3, A1, A2, A3, P1 |
| low | 9 | W4, W5, T2, A4, A5, A6, P2, E1, K1 |
| question for Pedro | 1 | C1 |

## C. Work packages (ordered by impact for a first-time visitor)

Estimates are session-hours of Sonnet-class work including screenshots and `npm run verify`. Under `AGENTS.md`, UI without a precise definition needs a proposal Artifact first; those packages say so.

| # | Package | Fixes | Estimate | Note |
|---|---|---|---|---|
| 1 | **English switcher and dead links** | L1, L2 (and E1 strings) | 1–1.5 h | Needs one decision (L3): link the switcher to `/en` and hide the glossary in English, or build the English pages (content work, not counted here). |
| 2 | **Wide layouts of the non-doctrine pages** | W1 | 1.5 h proposal + 3–4 h build | Proposal first: the design system has no answer; show the 1920/2560 options with real content. |
| 3 | **Home and timeline at very wide screens** | W2, W3 | 2 h | W2 needs a choice; W3 is a bug. |
| 4 | **Touch targets and tap equivalents** | T1, T2, T3 | 1–1.5 h | `hit-44` and `PressTooltip` already exist. |
| 5 | **Accessibility polish** | A1–A6 | 2 h | Mechanical. |
| 6 | **Father works weight** | P1 | 3 h | By division, on demand; touches the reader stream, so with its e2e specs. |
| 7 | **Draft wording** | C1 | 0.5 h once decided | |
| 8 | **Small polish** | W4, W5 | 1 h | |

## D. Not worth fixing now

- `ERR_ABORTED` on `_rsc` prefetches and the `NoFallbackError` lines in the server log (Next's own behaviour on 404s and cancelled prefetches).
- Console 404 when you open a missing route.
- Layout shift and the «wrong chapter» seen on Bible routes after a scripted scroll: an artefact of the continuous stream plus my script.
- Horizontal panning of the timeline and the father «Tiempo contemporáneo» strip at 390: by design («Deslizá la línea»).
- The text extents that run past the viewport on Bible pages (`right = 469` at 390): hidden note cards, not visible content.
- Doctrine pages at ≈ 1 s on `next start` locally: they are dynamic; not measurable here against Vercel.
- P2 until real-device loading says otherwise; K1 (the skip link solves it).

## E. Questions for Pedro (design system has no answer)

1. Wide screens, non-doctrine pages (W1): centre the 720/1040 block in the free space, or give each page type a wider layout, or cap the whole site at some width?
2. Home at 2560 (W2): cap the ruler, or let the lists use the width?
3. English launch scope (L3): only History and Bible in English, with the switcher sending doctrine pages to `/en`?
4. Draft banners (C1): keep the wording, or soften it for visitors?
5. Tradition switcher at 390 (W5): is the cut-off tab enough of a cue?
