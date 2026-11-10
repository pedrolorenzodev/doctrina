# Pasajes only with apologists

**What:** the Pasajes page of every tradition shows only the passages whose apologists layer has at least one argument with at least one quote, and the layer tabs read «Apologistas» (selected by default) then «Documentos oficiales».
**Why (Pedro, 2026-11-09):** the page is about how apologists popularly defend each verse in their tradition; most Protestant verses have no proper defence in the official documents, so they were filler.
**How:** `src/content/shown-passages.ts` (`shownScripture`) applied in `get-passages.ts`, `get-tradition-page.ts` (`hasPassages`), the passages page (404 at 0), the data route and its static params, `scripture-section.tsx` (count, button hidden at 0), `use-passage-store.ts` and `passages-view.tsx` (default layer, first layer in the first HTML, no disabled tab). The muted-tab text key was removed. `tools/check-passage-order.mjs` orders shown entries and reports hidden ones.
**Out of scope:** deleting hidden data; changing the tradition page's list of four passages.

## Shown / total (before: all)
| Doctrine | Baptist | Catholic | Lutheran | Orthodox | Reformed |
|---|---|---|---|---|---|
| Baptism | 17/26 | 18/18 | 6/7 | 2/9 | 19/21 |
| Eucharist | 5/16 | 12/12 | 4/17 | 5/6 | 7/9 |
| Papacy | 23/52 | 14/14 | 1/12 | 3/7 | 12/17 |
| Sola Scriptura | 24/87 | 17/17 | 1/10 | 2/4 | 19/24 |

All 20 match the numbers expected by the brief. No page has 0 shown passages (the 404 path is unexercised in data; the code is `notFound()`). Order lint: 45 listed passages hidden, 8 to add.

## Verified
`npm run typecheck`, prettier, the order lint; build with `NEXT_PUBLIC_AI_CHAT=real NEXT_PUBLIC_SIMPLIFIER=on`; e2e `passages`, `passages-order`, `scripture`, `sidebar` (all pass) plus accessibility-fixes, dead-links, tree-mark-travel, touch-targets, tradition-switcher, language-switch, objection-sources (one flaky switcher test, passes alone). Screenshots at 1440 and 390 for Sola Scriptura Baptist, Papacy Lutheran, Baptism Catholic.
