# Sources screen — coordinator handoff

## State

- 2026-11-08 night relaunch: Pedro's five requested corrections are implemented and checked. Pedro gave only a brief positive review and explicitly still owes a deeper review; do not mark the screen visually approved.
- Passed: one `npm run verify` (9122 pages); final Sources Chromium/WebKit 27/27; shared home/sidebar/soon-screen regressions 46/46; stronger individual-mark target check 2/2. The initial combined run was 72/73 because the new hover assertion sampled before its transition advanced; polling the computed color fixes that test. No application change followed the build.
- Catalogue: 97 before, 233 after; registry 76 works / 62 excluding status lines; corpus 150 works, all 150 linked, all seven Ignatius letters included. No generated JSON edited. Coverage details below.
- Compact Sources marks: 6 px height, 10 px minimum width, 14 px row pitch, width-aware packing. Home geometry retained. Sort chevron and source rows inset; clear action uses native IconButton hover and restores input focus.
- Captured and inspected only the requested changes at 360/390/768/1440 in both themes, including list, ruler tooltip and controls. Zero horizontal overflow. The enlarged ruler is taller: first row begins at y=1307/1251/1147/936 respectively. Pedro must judge this density in his deeper review; no unrequested redesign added.
- Next exact step: Pedro's deeper visual review, then coordinator integration/reconciliation using the refreshed kit. No remaining authorized implementation item. Do not pursue the earlier 39 full-suite failures.
- Preview: `http://localhost:3410/es/fuentes`; owned server restarted after build. Artifacts: `~/codex-scratch/fuentes/review-fixes/`; refreshed kit/archive: `handoff-2026-11-08/`, `sources-handoff-2026-11-08.tar.gz` under that scratch root.
- Relaunch usage: initial window 0%, week 32%; final observed window 12%, week 34%. Caps: no new step at window 70%, checkpoint at 75%; week stop at 50% total. Old usage exceptions/ceilings are superseded.
- No git writes, remote writes, deployment, other-clone edits or AI-owned file edits. Earlier global failures remain outside scope; no full-suite green claim.

## Pedro's review corrections: coverage and evidence

Cause: `getSources` previously formed IDs from the legacy source catalogues and current citation registry, using `getFatherWorks` only to enable reader links. A complete corpus work absent from those two ID sets never became a row. The accessor now unions all three inventories, and the sidebar awaits the same count. Existing corpus/registry aliases avoid duplicate works. No generator or generated file needed changing.

| Inventory | Actual count | Catalogue coverage |
|---|---:|---|
| Legacy base / extra input rows | 13 / 44 | 54 non-scripture canonical works |
| Current registry | 76 | All 62 non-status works; 14 internal status records excluded |
| Catalogue before correction | 97 | Legacy + non-status registry union; only 14 overlapping corpus works |
| Fathers corpus | 150 | All 150 represented with reader links and recorded corpus edition |
| Catalogue after correction | 233 | 97 + 136 previously omitted corpus works |
| Ignatius letters | 7 | Previously only Smyrnaeans; now all seven, with existing composition dates |

Work names, authors, bibliographies and dates come from existing content accessors and writing-to-corpus mappings. A subject's Father grouping is not used as authorship: anonymous works stay anonymous/unattributed. The 101 works without a mapped numeric composition date are included by All years or the checkbox. This fixes catalogue coverage, not missing scholarly dating metadata; no dates or editions were invented. Detailed count output: `review-fixes/count-after.json`.

| Final review-phase check | Result | Evidence under `~/codex-scratch/fuentes/` |
|---|---|---|
| Typecheck, lint, format, production build | Passed, 9122 pages | `review-fixes/verify.log` |
| Sources Chromium + WebKit | 27 passed | `review-fixes/sources-final.log` |
| Home ruler/method, sidebar, soon screens | 46 passed | `review-fixes/e2e.log` (initial combined run also includes the corrected hover-test failure) |
| Each Ignatius mark individually hot at its own center | Both engines passed; all 150 corpus reader URLs also checked | `review-fixes/mark-target.log` |
| Screenshots and overflow | 360/390/768/1440, light/dark, 36 captures; no horizontal overflow | `review-fixes/screenshots.json`, `sources-*.png`, `review-*.png` |

Comparison was limited to Pedro's specified defects and the established home/history marker geometry. Enlarged marks remain separate, tooltips identify the pointed letter, row dates and the sort chevron sit inside their edges, and the clear control has hover feedback. The larger ruler's vertical footprint is disclosed above for Pedro's deeper review. No new independent critique or full regression suite was launched for these small corrections.

## Result and reference

`/es/fuentes` and `/en/sources` provide the source-type selector, interactive year window, chronological/searchable/sortable catalogue and recorded cited editions. The home footer and sidebar now link to the page, with the correct source count and language-switch destinations. Reader actions appear only for corpus IDs actually available.

Reference: Pedro's 2026-11-04 B + C direction, [Fuentes de Doctrina, seis caminos](https://claude.ai/artifact/TwjNU3FuKaSJDgTfL5nwUB), archived in `docs/research/proposals/sources-v2/`. B supplies the type selector/year-window concept; C supplies work, author, date, type and edition information. The recognition field is removed.

The native home ruler is shared through `src/components/years-ruler.tsx`, with a compatibility export for the home. The general history timeline is an ancient-history scrolling pane, whereas B calls for the compact whole-history year window. No feature imports another feature. No data generators, generated source data or new visual tokens were changed.

## Pre-review verification (retained evidence)

| Check | Result | Evidence in scratch |
|---|---|---|
| Final typecheck, lint, formatting, build | Passed; 9122 pages | `verify-final-resumed.log` |
| Final Sources Chromium + WebKit | 25 passed | `sources-final.log` |
| Shared-list, home and navigation regression | 98 passed | `regression-resumed.log` |
| Repeated Sources, three repetitions / six workers | 48 passed before the last pointer-media fix | `sources-repeated.log` |
| Complete Chromium suite | 1384 passed / 39 failed / 19 skipped; Sources passed | `full-resumed.log` |
| All failed cases repeated with one worker | 7 passed / 32 still failed | `full-failures-rerun.log` |
| Per-frame kept-row movement / interruption | Passed in final Sources test | `sources-final.log` |
| Entry/exit fixed-time samples | 0/25/50/75/100%; native timings/curves | `motion-resumed.json` |
| Static B/C comparison | Captures, computed styles, overlays and diffs reviewed | `static-final.json`, `pixel-resumed.json`, `overlay-*`, `diff-*` |
| Independent final critique | No blocking visual defect; density remains for Pedro | `critique-final.md` |

The final source-route tracing manifest includes `data/raw/v1.json` and `data/site/sources.extra.json`. Both are existing tracked files and require no new data handoff.

The final Sources checks cover rendered editions, alias deduplication, type/text/year composition, empty and no-precise-year states, visible marks, row-to-mark hover, keyboard/focus, touch resize, full-range phone overflow, segmented indicator geometry, reduced motion, available reader links, and the language switch before/after hydration. Entry is 420 ms after 120 ms (8 px to rest, reveal curve); exit is 180 ms to opacity 0 / scale .96. FLIP is 380 ms, with no controls shift and no jump on interruption.

## Global regression: remaining failures

No Sources test failed in the complete run. Repeating all 39 failed cases isolated from the rest of the suite left 32 failures:

| Area | Persistent | Observed failure |
|---|---:|---|
| Doctrine answers | 17 | Broad `button[aria-expanded]` selector also matches the simplifier; strict-mode failures before the intended toggle. |
| Doctrine header | 1 | Old nested paragraph selector no longer finds the common-ground text. |
| Early Christians | 1 | Expects Baptism's now-live early-Christians link to remain absent. |
| Fathers | 3 | Old witness counts/text; a selector expecting one doctrine link now finds Eucharist and Baptism. |
| Home sections | 1 | Expected unpublished doctrine-row states differ from the current content. |
| Scripture / Why | 2 | Tests expect inert buttons where the current screen has live page links. |
| Search | 2 | Extra Roman salutation / early-Christians results invalidate the old exact result arrays. |
| Title entrance / home alignment | 2 | First animation delay absent from the sampled array; 10.5 px alignment difference. Unresolved outside Sources. |
| Simplifier/loading/touch target | 3 | Fast-response loader expectation, level-button timeout and tablet target assertion. Protected feature left to its owner. |

The seven cases that passed in isolation were the full Fathers corpus page check, two chat-drawer motion cases, reader crumbs, highlight, note-card fade and the reader panel Uses case. This establishes that they did not reproduce in the isolated replay; it does not make the original full run green. Complete case list and error evidence: `persistent-failures.txt`, `failure-summary-final.json`, `failure-summary-rerun.json` and the two run logs in scratch. One full-run Fathers-corpus trace ZIP was unreadable; its stdout failure and successful isolated replay remain available.

No baseline build was substituted to prove every remaining failure predated this branch. The concrete selector/data mismatches above were inspected. The untouched layout/timing/simplifier assertions remain unresolved, and are not represented as fixed by Sources.

## Visual review and deliberate differences

- Native `PageHeader`, ink selection, compact/full rails and list motion replace prototype-local CSS. The mobile type strip scrolls as in B; C's table becomes wrapping entries, in two columns only under the full rail.
- 233 reconciled non-scripture works (97 before Pedro’s coverage correction) replace B/C's 43. Scripture is excluded as in B, and internal status lines are excluded. Explicit ID aliases prevent duplicate catalogue works, including New Hampshire's recorded 1853 entry.
- The native ruler spans 1–2026 rather than prototype 0–2050; the initial selection remains 50–800. Packing all marks independently of visible matches keeps the ruler and controls stationary during filtering.
- “Councils and church documents” includes the newer patriarchal/curial documents accurately; individual current rows retain their specific registry kind. No Father is assigned to a modern tradition.
- Native title size is 42 px phone / 60 px wider (reference 36/52); source titles are 15 px (B 18, C 15.5). Font families and ink colors match the site's tokens. These are deliberate native-token differences, not pixel identity.
- Threshold-40 screenshot differences range 4.39–9.95%. Overlays contain real frame, typography, ruler, data and arrangement differences. They are not anti-aliasing noise and do not prove equivalence to either complete prototype.
- Captures: 360×740, 390×844, 768×1024, 1440×900, 1920×1080, both themes, plus scrolled-list and filtered states. Initial states have zero horizontal overflow; final tests also cover full-range filtered states in both engines.
- **Phone density requires Pedro's eye:** the earlier pre-review captures had no source before scrolling at 360×740 and only the first title at the lower edge at 390×844. The enlarged ruler and complete catalogue now place first rows lower, as measured in State. Scrolled entries are readable without clipped titles or squeezed columns. This implementation is not visually approved yet.

## Data gaps and verification limits

In the pre-review catalogue, seven entries had no numeric year: `ag-sft`, `trullo`, `liturgy-basil`, `liturgy-chrysostom`, `misal`, `ogmr`, `constantinople-1`. The expanded catalogue has 101 works without a mapped numeric composition year. No print edition year is used as a composition date. The liturgies retain their recorded century labels and are included by All years / the no-precise-year checkbox. `misal` has no referenced excerpt edition in the registry and visibly says its edition awaits verification.

Missing author fields are not inferred. Bibliographies remain verbatim, including their original languages and licence qualifications. Legacy dating disagreements (for example Didache's catalogue 50–120 versus other dating records) were not researched or resolved in this UI task. No historical date, edition or licence is newly certified here; the page carries the registry-review notice.

The published external Artifact could not be independently fetched through an Artifact connector; its supplied complete archive was opened in Chromium and B/C read in full. The requested Sonnet verifier was unavailable in the earlier run; that independent pass used the inherited model. No independent agent was launched on this relaunch. No new contrast calculation or print render was performed for this screen; existing tokens are reused. Pedro's visual approval remains outstanding.

## Implementation findings

The Sources checks caught and resolved zero-year sentinel omissions, filter-dependent ruler height, wrong/missing corpus aliases, untranslated title/date labels, misclassified document wording, full-range touch hit-area overflow, the fine-pointer pseudo-element displacement, and interrupted list movement. The shared `flipList` now measures the painted boxes before cancelling an existing move. Details of the nonlocal traps live in `docs/GOTCHAS.md`.

Sources-related existing tests were updated for the live footer/sidebar links and the added sidebar link count. The obsolete tooltip selector was narrowed to exclude the tradition indicator. AI-owned paths were left unchanged. Initial untracked `.playwright-mcp/`, `tmp/` and the passages proposal's `__pycache__/` were left alone.

## Preview and coordinator handoff

While the owned local server is running: `http://localhost:3410/es/fuentes` and `http://localhost:3410/en/sources`. After a completed build, start it with `npx next start -p 3410` from this copy. Restart the owned server after rebuilding; never stop another session's process.

The kit contains exact copies in `files/`, an existing-file diff in `patches/existing.patch`, the base commit in `base.txt`, and verification evidence. Prefer the patch/reconciliation for shared files; never overwrite another session’s changes blindly. Copy only these files: The commit command is prepared for Pedro after verification review and visual approval; it has never been executed.

- `docs/DECISIONS.md`
- `docs/DESIGN.md`
- `docs/GOTCHAS.md`
- `docs/ROADMAP.md`
- `docs/features/sources-screen.md`
- `e2e/home-method.spec.ts`
- `e2e/sidebar.spec.ts`
- `e2e/soon-screens.spec.ts`
- `e2e/sources.spec.ts`
- `src/app/[lang]/page.tsx`
- `src/app/[lang]/sources/page.tsx`
- `src/components/years-ruler.tsx`
- `src/content/get-home-timeline.ts`
- `src/content/get-language-availability.ts`
- `src/content/get-site-tree.ts`
- `src/content/get-sources.ts`
- `src/content/language-switch.ts`
- `src/content/routes.ts`
- `src/content/site-tree.ts`
- `src/content/source-kinds.ts`
- `src/content/source-labels.ts`
- `src/content/ui-text/en.ts`
- `src/content/ui-text/es.ts`
- `src/features/home/home-footer.tsx`
- `src/features/home/years-ruler.tsx`
- `src/features/sources/source-item.tsx`
- `src/features/sources/sources-catalogue.tsx`
- `src/features/sources/sources-view.tsx`
- `src/lib/list-motion.ts`
- `src/lib/years-data.ts`
- `tools/qa/routes.mjs`

```sh
cd ~/Desktop/dev/doctrina && git add docs/DECISIONS.md docs/DESIGN.md docs/GOTCHAS.md docs/ROADMAP.md docs/features/sources-screen.md e2e/home-method.spec.ts e2e/sidebar.spec.ts e2e/soon-screens.spec.ts e2e/sources.spec.ts 'src/app/[lang]/page.tsx' 'src/app/[lang]/sources/page.tsx' src/components/years-ruler.tsx src/content/get-home-timeline.ts src/content/get-language-availability.ts src/content/get-site-tree.ts src/content/get-sources.ts src/content/language-switch.ts src/content/routes.ts src/content/site-tree.ts src/content/source-kinds.ts src/content/source-labels.ts src/content/ui-text/en.ts src/content/ui-text/es.ts src/features/home/home-footer.tsx src/features/home/years-ruler.tsx src/features/sources/source-item.tsx src/features/sources/sources-catalogue.tsx src/features/sources/sources-view.tsx src/lib/list-motion.ts src/lib/years-data.ts tools/qa/routes.mjs && git commit -m "feat(sources): add the bilingual source catalogue"
```

## Pedro's second review: marks off their years, clipped placeholder (2026-11-08)

**Cause of the drift, measured before any tuning** (`/es/fuentes`, 134 marks): (1) in the compact ruler every mark is a bar of at least 10 px (`min-w-2.5!`) anchored at its **left edge** to its year, so its center sits 5 px to the right of the year: **+10 years at 1440 (track 992 px) and +28 years at 390 (track 358 px)**; a source of 2024 centered on 2034 and 2052, i.e. right of the axis end. (2) The axis labels of the shared ruler are placed for the home: «1» left-aligned and «2026» right-aligned to the end tick, so the «2026» text is centered on **year 1999 at 1440 and 1951 at 390** and every mark from about 1950 to 2024 sits above that text. The packing (`packRows`, the 18 px clearance) was not the cause: it only decides rows, and after centering there are 0 overlaps in a row (minimum gap 14.6 px at 1440, 26.1 px at 390).

**Fix (compact ruler only; the home's ruler is untouched):** in `src/components/years-ruler.tsx` a compact bar is centered on the middle of its dates (`--x` = percent of (start + end) / 2, `-translate-x-1/2`; a ranged source still spans start to end, a point source is its 10 px minimum centered on the year), and all five axis labels are centered on their ticks in the compact ruler (the home keeps «1» left and «2026» right). No size, pitch or packing changed (6 px height, 10 px minimum width, 14 px pitch as before), so there is no deviation from the home or the general timeline beyond centering. Side effect: the first and last marks and labels stick out of the track by up to 5 px (marks) and about 14 px («2026»); inside the page gutter, 0 px of horizontal page overflow at 390 and 1440.

**Tolerance:** 1 px between a mark's center and its year's position on the axis, the axis computed from the centers of the «500» and «1500» labels (about 2 years at 1440, 2.8 years at 390); the «1» and «2026» labels are held to the same 1 px. Measured after: every mark's center equals its year (`centerYear` = start year for all point sources).

**Cause of the clipped placeholder:** the search input reserves `pr-12` (48 px) for the clear button **always**, although the button only exists when there is a query. At 1440 the field is 198 px wide, so the room for text was 198 − 12 − 48 = 138 px against a placeholder of 143 px («Buscar título o autor», 14 px): the last letter was cut. **Fix** (`src/features/sources/sources-catalogue.tsx`): `pr-12` only while `query` is not empty. The room is now 174 px at 1440, and the placeholder fits at 360, 390, 768, 1024, 1440 and 1728 (the narrowest measured field is 213 px at 360), so no shorter variant by width was needed.

**Checks:** `npm run verify` exit 0. `e2e/sources.spec.ts` gained 8 cases (marks within 1 px at 1440 and 390; placeholder not clipped at six widths); with `home-method`, `ruler`, `ruler-sizes`, `sidebar` and `soon-screens`: 77 passed (port 3230, `AI_PROVIDER=fake`). The home ruler at 1440 (light, reduced motion) is **byte-identical** before and after (`cmp` of the element screenshots). Screenshots in `/private/tmp/claude-501/ff/`: `ruler-after-{light,dark}-{360,390,768,1440}.png`, `search-after-{light,dark}-{360,390,768,1440}.png`, `ruler-before-{light,dark}-1440.png`, `search-before-{light,dark}-1440.png`, `home-ruler-{before,after}.png`, `clip-390-dark.png` (the right edge with «2026»). I looked at the 1440 light ruler, the 1440 light search field and the 390 dark right-edge clip; the other sizes were captured, not all inspected one by one.

**Not verified:** WebKit and touch (the new cases run in Chromium only); the Sources layout at 360 and 768 beyond the placeholder test (no change expected: heights are unchanged); hover tooltips of centered marks beyond the existing specs that pass.

**For DECISIONS:** 2026-11-08 · Sources ruler: marks are centered on their year and the axis labels centered on their ticks in the compact ruler (the home's ruler is unchanged); tolerance 1 px; the search field reserves room for the clear button only when it is shown.

**For GOTCHAS:** the shared `YearsRuler` has two layouts: the home's (bars start at the year, «1» left and «2026» right) and `compact` (centered); a change to the shared geometry must be checked against both, and against the 1 px test in `e2e/sources.spec.ts`.

**Files:** `src/components/years-ruler.tsx`, `src/features/sources/sources-catalogue.tsx`, `e2e/sources.spec.ts`, `docs/features/sources-screen.md`. **Counter:** 45 % at the start, 46 % at the end.

### Pedro's choice: the compact axis ends at 2000 (2026-11-08)

At about 0.49 px per year a source of 2010 is 8 px from 2026, and a centered «2026» label covered it. **Pedro chose:** in the compact Sources ruler only, the axis labels are **1, 500, 1000, 1500 and 2000**, each centered on its tick; the line still spans to 2026 and there is no label at its end. The home ruler keeps «1» … «2026» (`compactAxisYears` in `src/components/years-ruler.tsx`; the test checks the label years and that «2000» sits within 1 px of its year).

### The ruler jumped in height on every load (Pedro, 2026-11-08)

**Cause, measured** (per-frame height of `[data-years-track]` from the first frame, CPU slowed 6×): the first render, on the server and on the client before the first measurement, packed the rows with a default track width of 328 px (`Math.max(trackWidth, 328)`), giving 36 rows and a **650 px** ruler; after `ResizeObserver` measured the real track it re-packed with the real width and the ruler dropped to **440 px at 1440 and 580 px at 390**: the abrupt change Pedro saw. Hydration order (font, JS) only decided when it happened.

**Fix:** the packing no longer depends on a measured width. The compact ruler packs the rows **on the server for 10 track-width buckets** (328, 344, 360, 380, 440, 520, 620, 760, 900 and 1040 px, each packed with the clearance of its smallest width, so no overlap at any width inside it) and CSS picks the bucket with **container queries** (`@container` on the ruler's wrapper; `yr-compact-axis` and `yr-compact-row` in `globals.css` choose `--axis-top` and each bar's row from the inline variables `--at0…` and `--r0…`). The height is therefore right in the first paint, with or without JavaScript, and nothing re-packs after hydration. Chosen over «reserve a height» (the final height depends on the width) and over «hide until measured» (blank, then a pop). The JS keeps the measured width only for the tooltip.

**Deviation, written down:** a bucket uses the clearance of its smallest width, so the ruler can have a few more rows than the exact packing: 650 → **454 px at 1440** (was 440 after the jump), **608 px at 390** (was 580). Still 0 overlaps in a row (minimum gap 17.1 px at 1440, 27.7 px at 390) and marks still within 1 px of their year. The home ruler does not use the buckets (`packed` has one entry for it): its 1440 screenshot is byte-identical before and after.

**Checks:** `e2e/sources.spec.ts` has 4 new cases (1440 and 390, light and dark): the ruler's height sampled every frame from navigation with the CPU slowed 6× varies by at most 1 px, and the page's cumulative layout shift is below 0.02. Measured before the fix: 650 → 440 and 650 → 580. `npm run verify` exit 0; `sources`, `home-method`, `ruler`, `ruler-sizes`, `sidebar`, `soon-screens`: 81 passed. Screenshots in `/private/tmp/claude-501/ff/` (`ruler-final-*`, `search-final-*`, `home-ruler-final.png`, `clip-390-dark.png`, the last showing the labels ending at 2000).

**Not verified:** WebKit and touch; the exact bucket boundaries between 600 and 1100 px (the buckets are conservative, only 1440 and 390 were measured); no real throttled network. **Incident:** the Mac's data volume hit 100 % during the build (`no space left on device`); I deleted only this clone's `.next` (3.2 GB, regenerated by the build); other sessions may be affected.

**For DECISIONS:** 2026-11-08 · Compact Sources ruler: axis labels 1–2000 (Pedro's choice); the rows are packed on the server by width bucket and selected with container queries, so the ruler has its final height at first paint.

**For GOTCHAS:** a layout that depends on a measured width must not be re-packed after mount: pack for width buckets on the server and let CSS choose (`@container`); Tailwind arbitrary values are forbidden by lint, so such selectors live as `@utility` in `globals.css`. The compact ruler's bucket list lives in two places (the array `compactBuckets` and the `@container` rules of `yr-compact-axis` and `yr-compact-row`): change both.
