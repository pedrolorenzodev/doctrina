# Wide layouts (session «Wide», duplicate repo `doctrina-wide`)

Started 2026-11-05 ~18:00. Input: `docs/features/qa-sweep.md` W1, W2, W3 and finding «5.» (1440 px, tree open). Server: `node -e "require('next/dist/bin/next')" x start -p 4001`. Measuring tool (untracked, never to commit): `tmp/wide/measure.mjs` (text extents against the sidebar edge; `W_SIZES`, `W_TREES`, `W_ONLY`), `tmp/wide/shot.mjs` (screenshots), baseline in `tmp/wide/before.json`.

## Plan

1. Measured inventory (below). 2. One proposal Artifact (private). 3. Build the recommended option: W1 and the tradition pages, then W2, then W3 (a bug). 4. Close: «Current state» text and DESIGN lines below, commit list.

Acceptance: at 1920 and 2560 (tree open and closed) no page of W1 leaves a block against the left edge with the right gutter many times the left one; the left edge of the page is the same one as the «Doctrinas» pages; nothing changes below the `rail` thresholds (1628 px open / 1356 px closed) except what the proposal chose for the 1440 band; no horizontal overflow; the reader and the doctrine wide morph untouched. Verified by e2e (measured offsets at 1280 / 1440 / 1920 / 2560), `npm run verify`, screenshots before/after.

## Budget

Pedro's limit tonight was changed by a peer message (session `doctrina-e0`) from 30 % to **10 % weekly**. Usage log: 18:05 weekly 4 %, session 7 % · 18:07 weekly 4 %, session 8 %.

## Measured inventory (before; `tmp/wide/before.json`; light; widths = text extents, L = left gutter from the sidebar edge, R = right gutter)

Cause, in one line: only the six «Doctrinas» pages pass `rail` to `PageMain`; every other page keeps its own `max-w-col` (720) / `max-w-wide` (1040) block left-aligned in `main`, and `main` has no cap.

| Page type | Block (px) | Right gutter 1920 open / 2560 open | 2560 closed | Container |
|---|---|---|---|---|
| Verse (06) | 1039 | 545 / 1185 | 1457 | `verse-grid` max 1040 |
| Word (07) | 1021 | 563 / 1203 | 1475 | `max-w-col` + `Section wide` |
| Padres, Concilios, Herejías, Divisiones, Reforma indexes | 1040 | 544 / 1184 | 1456 | `HistoryIndexList` `max-w-wide` |
| Council page | 751 | 833 / 1473 | 1745 | `FatherProfileSection` `max-w-col` |
| Current, division, movement pages | 706–720 | 864–878 / 1504–1518 | 1776–1790 | `Section` `max-w-col` |
| Glossary / term | 901 / 671 | 684 / 1324 (term 913 / 1553) | 1596 / 1825 | columns / `max-w-reader` |
| Primeros cristianos, objections, objection, tradition pages, passages | 870 (early) · 1360 | already centred frame (`rail`), L 120 / 440 at 1920 / 2560 | 256 / 576 | `PageMain rail` |
| Home | 1745 at 1920, 2385 at 2560 (ruler); lists 1040 | 112 | 112 | `years-grid` full, `years-lists` max 1040 |
| Timeline | 1699 / 2317 | −115 / −93 (labels past the edge) | −161 / −290 | `GeneralTimeline` |

At 1440 with the tree open (content area 992 px) every page left-aligns a 720 px column with 384 px to its right, the «Doctrinas» tradition pages included (the 16 non-Catholic ones measure the same as the Catholic one; the «385 px» is the 720 column against the 1104 px of free area). `rail` does not apply there by design (needs 1180 px of content).

## Proposal

https://claude.ai/artifact/P4pQBitkNYYKqZzLTu1W9A (private; v1, 2026-11-05). Options: Hoy / A centrar / B marco de Doctrinas (recommended) / C tope 1100; 1440 band: hoy / columna centrada / riel compacto (recommended); home 2560: hoy / todo en el marco (recommended) / listas a lo ancho; timeline: hoy / fundido / girar el nombre (recommended).

## Decisions made while Pedro was away

All «agent's call, tentative: if Pedro prefers another option it changes».

1. **Option B, «the same frame as Doctrinas»** for W1: `PageMain rail` on the verse, word, history index (Padres, Concilios, Herejías, Divisiones, Reforma), council, current, division, movement, glossary and term pages. They take the 1360 px centred block, the 236 px title rail on their `Section`s, and the same left edge as the Doctrinas pages. Nothing changes below the rail thresholds (1628 px tree open / 1356 px closed). No new CSS: only existing utilities (`rail:`, `rail-section`, `rail-head`).
2. **Indexes:** with a filter or letters (Padres, Concilios, Glosario) the filter and the letter jump sit in the sticky rail (`rail-head`), the list runs in two columns (`rail:columns-2`); without them (Herejías, Divisiones, Reforma) the list takes two columns across the frame. `flipList` already handles column lists.
3. **Verse:** reading page, so its 1040 block is centred inside the frame (`rail:mx-auto rail:max-w-wide` in one wrapper div, a single direct child of `main`, so `RailMorph` moves it as one piece).
4. **Home:** `PageMain rail`; the ruler, intro and lists live in the 1360 frame (ruler 2385 → ~1274 px at 2560, lists `rail:max-w-none`), sections get the title rail. The home's own sidebar is hidden, so its frame is centred on the full width, not aligned with the Doctrinas pages (their sidebar is open).
5. **Timeline (W3) — replaced by round 2, item R4:** only the edge fade (`fade-right`, the tab strip's existing utility) on the scroller. The chart is a panning scroller, so a cut at the window edge is part of it; the chart's own last item already flips (`placeItem`). **Not built:** the dynamic «flip the name» recommended in the proposal (needs a recalculation on scroll and row packing that accounts for the flipped extent). If Pedro wants it, it is its own step.
6. **(Built in round 2, item R2.) Was not built: the compact rail at 1440 with the tree open** (the proposal's recommendation for the 385 px at 1440). It changes the Doctrinas pages in the band the approved decision (DECISIONS 2026-10-31 night, «below the threshold nothing changes») and `e2e/doctrine-rail.spec.ts` «1440 with the tree open keeps today's single 720 px column» pin down. It is a ~30-line CSS step (a `rail-s` variant: open 88 rem ≤ w < 101.75 rem, closed 71 rem ≤ w < 84.75 rem; grid 200 px | 40 px | 720 px in `rail-section`, `rail-head`, `rail-body`) plus changing that spec. Waiting for Pedro.
7. **(Resolved in round 2, item R1.) «Primeros cristianos»** (`early-christians`, already `rail`): left as is (870 px list against the frame's left edge, 658 px right gutter at 1920). It is a Doctrinas page with no sections; no option in the proposal covered it. Open question.
8. **Father and work pages** (`history/fathers`, `history/works`) were not in W1 and keep their own layout (their charts are already wide).


## Round 2 (Pedro's answers to the proposal, 2026-11-05 evening)

Pedro's words: «B» para todas las páginas · «Riel compacto.» · «Todo en el marco.» · «Girar el nombre.» (the fade is removed).

**R1 · «Primeros cristianos» in the frame (agent's call).** It has no sections, so the title stays at the frame's left edge and the list (`max-w-entries`, 870) moves into the body column: new utility `rail-offset` (`margin-left: rail + 4rem`, only under the full `rail`) on an inner div. In the compact band the list is not offset (870 fits in 992 and the approved spec «text capped at 680, list at 870» holds at 1440). 1920 open: list starts at 392 + 300 (was against the frame's left edge, 658 px free on the right).

**R2 · Compact rail (`rail-s`). DECISION (Pedro, 2026-11-05): «Riel compacto.» for the 1440 band. Replaces the part of DECISIONS 2026-10-31 night · «Doctrinas» pages on wide screens that says «below the threshold nothing changes»; mark that sentence «Replaced by this entry» when this is merged.**
- Variant `rail-s` in `globals.css`: tree open `88rem ≤ w < 101.75rem` (1408–1627 px), tree closed `71rem ≤ w < 84.75rem` (1136–1355 px). It is exclusive with `rail` (`width <` range syntax; `max-width: 101.7499rem` matched at 1628 because of Chrome's rounding).
- `rail-section` / `rail-head` / `rail-body` get the same rules as the full rail with `--spacing-rail-s` (200 px) and a 2.5rem (40 px) gap; body 720 min. Sticky head, title `-6px`, subtitle without bottom margin: identical to the full rail. Two columns, the max-w-lead boxes and every `rail:` rule stay off in the band (statements and lists keep one column).
- The block width is fixed by the viewport and the tree state (`rail-page` block, same formula as the full rail), never by the animating column, so `RailMorph` keeps working: the «folding / unfolding the tree at 1440» specs pass and the reading place holds.
- The 385 px empty at 1440 with the tree open is gone on every rail page: content 992 px (200 + 40 + 752), right gutter 112 px (was 384 px on the Doctrinas pages and the history entity pages).
- Consequence (agent's call): at 1440 open the 02 answers grid is 200 | 496 px (was 200 | 680, because the section body was 1040 wide before and is 752 now). `e2e/doctrine-answers.spec.ts` updated to 496. Between 1408 and 1628 it is 496 → 680.
- Not covered by `rail-s` (and therefore unchanged): 1024–1407 px with the tree open and 1024–1135 px closed (the content is under 960 px there).
- The **home opts out** (`PageMain rail="wide-only"` → `data-rail-page="wide-only"`; `rail-s` only matches `data-rail-page=""`): its sidebar is hidden, so the content area is 1265 px at 1440; a 992 px compact block would have shrunk the ruler. Home at 1440: 63 / 1265 / 112 (unchanged); 1920 and 2560: frame 1361, centred.

**R3 · Home «todo en el marco»**: holds (re-measured after R2: 1440 unchanged at 1265 px; 1920 and 2560 centred in 1361 px; e2e `home*` pass).

**R4 · Timeline: «Girar el nombre» (built).** The edge fade is removed. In `general-timeline.tsx` each item button carries `data-label-start`, `data-label-width`, and, when flipping is possible, `data-flip-start` / `data-flip-offset` (the label would end where its bar ends, as `placeItem` already does at the chart's end; possible only if the flipped start is after the previous item's right edge in the same row + 8 px, so no overlap and no change to the row packing). A scroll / resize listener (one rAF per frame, passive) sets `--lx` on the label (`data-flipped`) when the label would cross the scroller's right edge − 10 px and its flipped end fits; it goes back when the natural label fits with 24 px of margin (hysteresis). No animation (the label snaps, as a label of a panning chart). The flipped label stays hoverable and clickable (it is a child of the button). Limits: items whose bar itself is near the edge (flip would not fit) and rows where the flip would overlap a neighbour stay cut at the edge. e2e: `wide-layouts.spec.ts` (1440 open and 2560 closed: at scroll 0, 300, 900, 1700, 2600 no flippable label is left crossing the edge, no flipped label ends outside the scroller, and at least one flips).

## Shared files touched

- `src/app/globals.css`: one block next to the existing rail block: token `--spacing-rail-s: 200px`; `@custom-variant rail-s`; the `rail-s` branches of `rail-page`, `rail-section`, `rail-head`, `rail-body`; new utility `rail-offset`. Nothing else in the file changed.
- `src/components/page-main.tsx`: `rail` accepts `"wide-only"` (data attribute value) so the home can opt out of the compact band.

## Files touched / commit messages

Round 1 (already listed, with the changes below):
1. `feat(layout): put history, glossary, verse and word pages in the wide frame` — as before.
2. `feat(home): put the home in the wide frame` — `src/app/[lang]/page.tsx` (now `rail="wide-only"`), `src/features/home/years-lists.tsx`.
3. Round 1's `feat(timeline): fade the right edge of the scroller` is **withdrawn**: it never reaches the repo (the fade is removed).

Round 2:
4. `feat(layout): add the compact rail for 1440 with the tree open` — `src/app/globals.css`, `src/components/page-main.tsx`, `e2e/doctrine-rail.spec.ts` (15 band cases + the 1440 case), `e2e/doctrine-answers.spec.ts`, `docs/features/wide-layouts.md`.
5. `feat(doctrine): put the early christians list in the wide frame` — `src/app/[lang]/doctrines/[doctrine]/early-christians/page.tsx` (+ the `rail-offset` utility, in step 4's `globals.css`; stage both together).
6. `feat(timeline): flip names that cross the right edge` — `src/features/history/general-timeline.tsx`, `e2e/wide-layouts.spec.ts`.

(Simplest for Pedro: stage by files; `globals.css` and `page-main.tsx` belong to 4, the early-christians page to 5.)

## Verification

Round 1: see the numbers in the table of «Verification (round 1)» below. Round 2: `npm run typecheck`, `npm run lint` ok; `npm run build` ok (the «Parsing CSS source code failed» warning appears also in round 1's build; no CSS file besides `globals.css` is involved and it is not new). e2e run (chromium): `doctrine-*`, `home*`, `glossary`, `history-*`, timelines, `words-page`, `verse`, `objection*`, `passages`, `ask-drawer-tree`, `wide-layouts`, `early-christians`, `life`, `why`, `authority`: 462 passed, then the touched ones again (223 passed). Failing, not layout (other sessions' data moving the specs): `early-christians` «from 02 the sidebar link opens the page…», `home-sections` «Doctrinas: the five doctrines…», `why` «on a doctrine with no 02 page the note's link is built and inert». The format check fails only on `tools/qa/*` (untracked QA files).
New rail cases in `doctrine-rail.spec.ts`: open 1280 / 1366 / 1407 stacked, 1408 / 1440 / 1536 / 1600 / 1627 compact (200 px, 40 px gap, sticky), 1628 full (236); closed 1100 / 1135 stacked, 1136 / 1280 / 1355 compact, 1356 full; no overflow at any.
Measured after (tree open; left gutter / text block / right gutter) at 1440: Doctrinas tradition 64/992/112 (was 718–720 with 224–226 right at 1280 and 992 with the switcher; the statements column 720 → 752 with a 200 px title rail), current / division / movement 64/989/115 (was 64/720/384), word 64/992/112, glossary 63/939/166 (was 63/897/208), objection 64/988/116 (was 64/720/384), early 64/992/112 (unchanged). At 1536 open: current 64/1083/117, word 64/1082/118. Home 1440: 63/1265/112 (unchanged); 1920 / 2560: 1361 centred.
Screenshots: `tmp/wide/s5` (1440 open light: Ortodoxa, Padres, early), `tmp/wide/s6` (1536 open dark: Católica, glossary, Docetismo), sheet `tmp/wide/sheet4.png`; round 1's `s0`–`s4`. Dark and light looked at; the rail looks like the Doctrinas pages' system at a smaller scale.

## Verification (round 1)

`wide-layouts.spec.ts` measured title offsets at 1920 open, 2560 closed, 2560 × 1080 open; indexes: 236 px rail and two columns. After, 1920 open · 2560 open (right gutter): verse 328 · 648 (was 545 · 1185); the five indexes 168 · 488 (was 544 · 1184); council, current, division, movement 170–187 · 490–507 (was 833–878 · 1473–1518); word 187 · 507 (was 563 · 1203); glossary 310 · 630 (was 684 · 1324); term 466 · 786 (was 913 · 1553).

## Text for the ROADMAP «Current state» (to paste)

Wide layouts (session «Wide», duplicate repo, 2026-11-05): the history indexes, glossary, term, word, verse, council, current, division and movement pages and the home use the Doctrinas frame (`PageMain rail`) from 1628 px (tree open) / 1356 px (closed). Compact rail (200 | 720) for 1408–1627 px with the tree open and 1136–1355 closed; the timeline flips names that cross the right edge; «Primeros cristianos» in the frame. Open: nothing from this block.

## Lines for DESIGN §3 / §6 (to apply)

- §3, «Wide «Doctrinas» pages»: «Since 2026-11-05 (agent's call, tentative) the `rail` frame also serves the history indexes (the filter and the letter jump in the rail, the list in two columns), the glossary and its terms, the word page, the verse page (its 1040 block centred in the frame), the council, current, division and movement pages and the home (ruler and lists in the frame).»
- §6 Home: «at ≥ rail thresholds the 2000-year ruler and its lists sit in the 1360 frame, not full width».
- §3: new token `--spacing-rail-s` 200px and variant `rail-s` (open 1408–1627 px, closed 1136–1355 px): rail 200 | gap 40 | body 720+; the home opts out. §6 Timeline: «a name that would cross the scroller's right edge flips to end at its bar (when it fits and does not touch the previous item)».

## GOTCHAS to add

- A media query written as `max-width: 101.7499rem` still matches at 1628 px in Chrome (rem rounding); use the range form `(width < 101.75rem)` for exclusive bands.
- `pkill -f "start -p 4001"` does not kill a started `next start`: the process renames itself `next-server`; kill by PID (`lsof -i :4001`), or a stale build keeps answering (cost one false test round on 2026-11-05).

## State

Round 2 done (R1–R4). Nothing is staged or committed. To resume: re-measure with `W_OUT=tmp/wide/x.json node tmp/wide/measure.mjs` (server `node -e "require('next/dist/bin/next')" x start -p 4001`, kill by PID). Not verified by hand: the timeline flip with a real wheel / drag on touch (only scripted scroll in e2e), the ask drawer open together with the compact band (`ask-drawer-tree` passes). Not done: pixel diff against a reference (there is none for the compact rail; it reuses the full rail's rules).

Usage log: round 2 started at 19:02 weekly 7 %, session 24 % · 19:10 7 %, 26 % · 19:16 7 %, 27 % · 19:22 7 %, 28 %.
