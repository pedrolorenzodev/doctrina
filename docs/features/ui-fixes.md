# UI fixes (Pedro's list, 2026-11-03 night)

Session in the real repo. The Pasajes session runs in `doctrina-b3` and owns `src/features/passages/`, `src/content/get-passages.ts`, `src/content/model/page.ts`, `src/content/validate.ts`, `data/passages/`, `data/scripts/`, and the 20 generated pages `src/content/pages/<doctrine>/<tradition>.es.ts`: never edited here.

Method per fix: reproduce with a measurement, find the root cause, fix there, e2e that fails before and passes after, `npm run verify`, screenshots where visual, freeze with the kit (blocks from 227).

## The list

1. «Fuentes» reader: verse background states smooth (highlight entrance abrupt, audit every state).
2. AI simplifier: one push, not two; «Informar un error» text must be true.
3. Subtitle highlight on all 20 `/doctrinas/[doctrina]/[tradición]` pages.
4. Tree's current-page mark: every movement smooth, one mark that never disappears.
5. Tradition switcher + inert links audit.
6. Reader: chapter position bug and infinite scroll.
7. Right-edge ruler at ~1700 px.
8. Unstable tests.

## Acceptance and verification

Each fix: a measurement before (the bug) and after (fixed), an e2e that fails on the old code, `npm run verify`, screenshots 1440 / 768 / 390 / 360 light and dark where visual.

## Fix 3: the 20 emphasised subtitle words

The «subtitle» is the page header's lede (`PageHeader`, `emphasis`). The old mechanism matched only the doctrine's title («Eucaristía», «bautismo», «papado»), so Lutheran/Reformed/Baptist Eucharist («Santa Cena», «Cena del Señor») and 9 other pages had no emphasis. Now `src/content/lede-emphasis.ts` (es only, keyed doctrine → tradition) is read by the tradition route, falling back to the old rule; no page or converter touched.

| Doctrine | Catholic | Orthodox | Lutheran | Reformed | Baptist |
|---|---|---|---|---|---|
| Eucharist | Eucaristía | Eucaristía | Santa Cena | Cena del Señor | Cena del Señor |
| Baptism | bautismo | bautismo | bautismo | bautismo | bautismo |
| Papacy | papa | cabeza de la Iglesia | papado | papado | gobierno |
| Sola Scriptura | solo la Escritura | Escritura | Escritura | Escritura | Escritura |

Notes: each word is verified against the page's real lede in the data files. For Sola Scriptura the non-Catholic ones are «Escritura» without the article (the earlier proposal said «la Escritura»): one word, as the existing «Eucaristía»/«bautismo» carry no article. Not done (not asked): the doctrine landing pages (`/es/doctrinas/<doctrina>`, their lede is a question) and the objections and Pasajes headers. English: no pages yet, falls back to the old rule.

## Fix 4: the tree's mark, what was measured

Sampled per frame (page navigation by sidebar link, 1440): near moves were already one mark with continuous motion. Broken: (a) a target far from the visible part of the tree: the tree scrolled instantly (1598 px in one frame), so the mark jumped across the viewport; (b) a target inside a closed group: the group opened instantly, the rows below jumped 306 px and the mark with them; (c) a second click while the mark travels: the mark restarted from the previous row (the cancel removed the travelling mark before its position was read). Now: tree scroll and mark share one animation loop and the start box is read first; groups open animated during a travel. After: no frame with a step above 45 % of the mark's reach, tree scroll steps ≤ 30 % of its distance, one mark in every frame (5 cases in `e2e/tree-mark-travel.spec.ts`, 4 failed before).
Not covered (no row with a short mark): Bible chapters (their current marker is the chapter cell), the word page; going Bible → doctrine still launches a mark from the book row (existing behaviour, left as is).

## Fix 5: the tradition switcher and the inert controls

Switcher: every built tab now goes to the same kind of page of that tradition: the tradition page (keeping the section being read, as a `#section` hash; at the top it lands at the top), the Pasajes page, or the Objeciones page. Pentecostal stays inert (no page). No sliding indicator or content slide was added (new motion needs a proposal): the `TODO` says so. There is no doctrine switcher anywhere in the site.

Audit (grep of `TODO`, `href="#"`, `aria-disabled`, `PageLink` without `href`):

| Where | What it should do | Status |
|---|---|---|
| Tradition / Pasajes / Objeciones switcher | go to the chosen tradition | wired |
| Father timeline (`father-timeline`): currents | page of the current (`currentHref`) | wired |
| Father timeline: councils | «Ver en la línea de tiempo» → `/historia/linea-de-tiempo#<council>` | wired |
| Father page breadcrumb «Padres» | Fathers index | wired |
| General timeline: councils and currents | their pages | already wired (stale TODO reworded) |
| Father timeline: historical events | no page and not on the general timeline | left inert, `TODO` |
| Breadcrumb «Historia» (all history pages, timeline) | no `/historia` index page exists | left inert, `TODO` |
| Breadcrumb «Biblia» and testament (Bible chapter, word page) | no Bible index page | left inert, `TODO` |
| Doctrine witnesses link «La historia completa de …» | a per-doctrine history page does not exist | left inert (doubtful: could point to the timeline, not equivalent) |
| Early-christians list «Leer …» | the reader at that division; the witness has no work id, only a title | left inert (data would need `workId`) |
| Passage reference / passage title / «Abrir detalle» in the verse panel | verse page (06) / passage detail: not built | left inert (doubtful: could open the reader at that verse) |
| Home «Fuentes» | Fuentes page: proposal only | left inert |
| Home doctrine rows, «Estudiar la postura», connected cards | data driven: link when the doctrine/tradition has a page | already wired; the unpublished ones (justification, Pentecostal) stay muted |
| «Guardar en Tus notas» (drawer, simplifier), «Informar un error» (drawer, simplifier) | notes store / report queue | left inert (no backend) |
| Mail form, red-letter notice address | backend / project address | left inert |
| Citation window «Abrir la fuente completa» | reader at the cited division | wired where `fullSourceHref` exists, inert otherwise |
| Words page Greek-Father quotes, senses titles | data, not links | open |

Stale tests fixed while here: `header.spec` (switcher was asserted inert), `father.spec` crumbs, `soon-screens` (the home no longer mutes bautismo, papado, sola scriptura). Three `father.spec` cases («Dónde aparece»: 167, 193, 203) already failed before this work because doctrine pages now cite the Fathers in more places: not touched, for the next round.

## Fix 6: the reader's chapter jumps, what was measured

Reproduced (Chromium, real wheel events, per frame: where the verse at the top of the reading area is): (1) fast scroll down (400 wheel steps of 100 px from John 6): 71 frames where the verse on screen jumped 2700–5500 px, up to ~4000 px forward = «el scroll se teletransporta a un capítulo más lejano»; cause in GOTCHAS (trim of the window when a scroll event arrives before the observer). Scroll up across a book boundary (Luke 2 → Mark): no jumps. (2) Tree: picking a chapter that is mounted or next door navigated (full re-mount) instead of scrolling; picking the chapter the page was opened on, after the window had moved on, only changed the URL (Next saw the same URL as its own, the stream had replaced it): nothing happened on screen. Picking a far chapter lands correctly (route change).
Fixed: trim holds the reading chapter; tree chapter links scroll within the stream when they can, reset to the opening chapter when it is the one chosen, and navigate otherwise (phone drawer closes). Measured after: 0 jumps over 400 steps; tree picks of mounted chapters land on their first verse. Pinned-at-the-edge check: in 300-step flings (40 and 100 px) the viewport reached the document's end in at most 1–2 frames, so the content stays ahead locally (one fast local network: not measured on a slow one).
Not changed: how many chapters are mounted (5) and the prefetch distance. A single-frame hitch of ~4500 px appeared once in a dev-server smooth scroll of the tree jump upward (a long frame, not a layout jump); not seen on the production build.

## Fix 7: the right-edge ruler at about 1700 px

Not reproduced. Measured on the home, the doctrine landing, a tradition page and a Father's page at 1400×900, 1700×1100, 1920×1080 and 2560×1300, each with a plain mouse, device pixel ratio 2, touch emulation and mobile+touch emulation: 13 px pitch, 16×3 bars, 18 px from the edge and the same hover bulge (72, 71, 70, 67, 63 px) in every combination. DECISIONS 2026-10-29 already records the cause found then (touch emulation made the ticks 44 px tall) and its fix, marked «to confirm» by Pedro; the ROADMAP line is stale. Added a guard over four pages and four sizes (`e2e/ruler-sizes.spec.ts`) that compares every size with the 1400 px measurement. If Pedro still sees it in Dia: what is needed is the exact mode (Dia's responsive mode with which device, zoom level, pointer type), since the CSS pixels do not change with the size.

## Fix 8: unstable tests

| Test | Cause | Fix |
|---|---|---|
| `reader-parallel` «Al lado» aligns | two `boundingBox()` calls, the stream moved between them under load (14.7 px); alone it is 0 px | both boxes read in one `page.evaluate`, tolerance tightened to < 1 px |
| `general-timeline` «a second click mid-slide» | the aim point (30 % of the ruler) was inside the window box 200 ms into the first slide, so the press grabbed the window and the 1 px of jitter dragged it (instant). A property of the geometry, not a bug | aim at 2 % and assert the window is not there |
| `reader-keep-position` «A+» | a real bug: with a scroll event in the same frame as the layout change, `useKeepTopVerse` recorded its anchor too late and restored nothing (454 px drift, 4 of 16 runs at 6 workers) | the hook no longer records during an unsettled layout; 16 of 16 and 54 of 54 under load after |

Related to fix 6: same family as the stream trim bug.

## Decisions made while Pedro was away

(agent's call, newest last)

- Fix 1: the Fathers' reader (`father-body.tsx`) had the same bug and no fade-out at all (plain `transition-colors`, no `data-leaving` rule); it now uses `highlight-mark` too, so both readers share one behaviour. Audit of the other verse-background states (sampled per frame at 1440): hover and pressed fade in and out in ~280 ms, arrival mark 200 ms in, recolour 280 ms, word-mark layer fades by opacity: all already smooth. Not screenshotted: colours unchanged, only the entrance timing.

- Fix 2: «Informar un error» said «Lo revisará una persona» and nobody reviews it: now «Gracias. Esta versión todavía no envía reportes.» / «Thank you. This version does not send reports yet.» in the simplifier and, same false claim, in the AI drawer (`src/features/reader-ai/text.ts`).

## Shared files touched

- `src/app/globals.css` (`highlight-mark`), `src/features/reader/chapter-text.tsx`, `src/features/reader/father-body.tsx`, `docs/GOTCHAS.md`, `e2e/reader-highlight.spec.ts` (fix 1).
- `src/components/simplifier/panel-motion.ts`, `src/components/simplifier/simplifier-text.ts`, `src/features/reader-ai/text.ts`, `e2e/simplifier.spec.ts`, `docs/GOTCHAS.md` (fix 2).
- `src/content/lede-emphasis.ts` (new), `src/app/[lang]/doctrines/[doctrine]/[tradition]/page.tsx`, `e2e/doctrine-lede-emphasis.spec.ts` (new) (fix 3).
- `src/features/shell/tree-motion.ts`, `src/features/shell/sidebar.tsx`, `e2e/tree-mark-travel.spec.ts` (new), `docs/GOTCHAS.md` (fix 4).
- `src/features/doctrine/tradition-switcher.tsx`, the three tradition route pages (main, objections, passages), `src/content/father-timeline.ts`, `src/features/history/father-timeline.tsx`, `src/features/history/general-timeline.tsx`, `src/app/[lang]/history/fathers/[father]/page.tsx`, `e2e/tradition-switcher.spec.ts` (new), `e2e/header.spec.ts`, `e2e/father.spec.ts`, `e2e/soon-screens.spec.ts` (fix 5).
- `src/features/reader/reader-stream.tsx`, `src/components/chapter-grid.tsx`, `src/features/reader/book-picker.tsx`, `src/features/shell/sidebar.tsx` (fix 4 + 6), `e2e/reader-stream-scroll.spec.ts` (new), `docs/GOTCHAS.md` (fix 6).
- `src/features/reader/use-keep-top-verse.ts` (fix 8), `e2e/ruler-sizes.spec.ts` (new), `e2e/general-timeline.spec.ts`, `e2e/reader-parallel.spec.ts`, `docs/GOTCHAS.md` (fix 7, 8).

## Usage log

- 2026-11-03 23:51 · session 7 %, weekly 77 % (stop at 84 %).

## Full suite (chromium, 3 workers, 2026-11-04 ~01:30)

1132 passed, 12 failed, 1 skipped. Mine and fixed afterwards: `timeline.spec:32` (the current's detail link is now a link) and `tree-mark-travel` «second click» (the per-frame limit now scales with the frame time; 30 of 30 under load). The other ten are older and about content that changed under them (doctrines without a page were asserted inert; the two new doctrines' pages cite the Fathers more), not touched here: `early-christians:179`, `father:167/193/203`, `home-sections:4`, `scripture:19/51`, `search:155/166`, `why:146`. Next round: update each expectation to the published pages (they are stale tests, not bugs, from what each message shows; not verified against a clean HEAD build).

## State

All 8 items worked through in order and frozen in the kit: fixes 1–6 as blocks 227–232, fixes 7–8 (ruler guard, test stabilisations, `use-keep-top-verse.ts`, the `timeline` and `tree-mark-travel` spec updates) as block 233. `npm run verify` passes.
Open: the doubtful inert controls (table in Fix 5), the ten stale specs above, Pedro's confirmation of the ruler in Dia, the verse-page and Fuentes destinations that do not exist, a slow-network check of the stream's look-ahead.
