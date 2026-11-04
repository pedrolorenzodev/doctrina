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

## Usage log

- 2026-11-03 23:51 · session 7 %, weekly 77 % (stop at 84 %).

## State

Fix 1 frozen (block 227). Fix 2 frozen (block 228). Fix 3 frozen (block 229). Fix 4 frozen (block 230). Fix 5 frozen (block 231). Next: fix 6 (reader position and infinite scroll).
