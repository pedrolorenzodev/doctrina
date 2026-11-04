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

## Decisions made while Pedro was away

(agent's call, newest last)

- Fix 1: the Fathers' reader (`father-body.tsx`) had the same bug and no fade-out at all (plain `transition-colors`, no `data-leaving` rule); it now uses `highlight-mark` too, so both readers share one behaviour. Audit of the other verse-background states (sampled per frame at 1440): hover and pressed fade in and out in ~280 ms, arrival mark 200 ms in, recolour 280 ms, word-mark layer fades by opacity: all already smooth. Not screenshotted: colours unchanged, only the entrance timing.

## Shared files touched

- `src/app/globals.css` (`highlight-mark`), `src/features/reader/chapter-text.tsx`, `src/features/reader/father-body.tsx`, `docs/GOTCHAS.md`, `e2e/reader-highlight.spec.ts` (fix 1).

## Usage log

- 2026-11-03 23:51 · session 7 %, weekly 77 % (stop at 84 %).

## State

Fix 1 done and frozen as block 227. Next: fix 2 (simplifier double push).
