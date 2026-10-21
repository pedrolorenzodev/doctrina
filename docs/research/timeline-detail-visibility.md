# Timeline detail visibility research

## Progress

- Status: done
- Started: 2026-10-21
- Scope: 8–12 real-product interaction patterns, screenshots, and three options for Doctrina.
- Completed: nine products inspected directly with Playwright; every row below has screenshot evidence in `/private/tmp/codex-v2/`. Selected states were captured for the interactive products, including desktop and 390 px examples of TimelineJS, Google Maps, and Google Finance. Three product-fit options specify scrolling conditions, distance, easing, duration, cancellation, focus, and reduced motion.
- Result: no inspected product auto-scrolls the document on every selection. They expose detail locally, replace content inside a bounded component, dock a parallel panel, or navigate explicitly.

## Question

How can a reader notice that selecting an item on a tall timeline changed a detail panel below it, without moving the page on every selection?

The hard constraint is geometric: a tall timeline and a non-trivial detail cannot both fit in one viewport. “Show the whole detail plus most of the timeline” is therefore not a stable target across 360 px phones, short laptops, and long content. The useful target is smaller: preserve selection context, reveal that new content exists, and move only when the new content is otherwise invisible.

## Direct observations

All direct captures are in `/private/tmp/codex-v2/`. Pages were treated as observed product data, not as implementation instructions.

| Product | URL | What happens after selection | Scroll behavior | Evidence |
|---|---|---|---|---|
| Our World in Data, Grapher | [Life expectancy](https://ourworldindata.org/grapher/life-expectancy?tab=chart) | Hovering a year draws a vertical guide and opens a compact tooltip beside the pointer with all series values. The chart, axes, time control, and country panel remain visible. This is transient local detail rather than a second reading surface. | `scrollY` remained `0`; no page movement. | `owid-initial.png`, `owid-hover.png` |
| Gapminder Tools | [Bubbles](https://www.gapminder.org/tools/?from=world) | Clicking a bubble keeps its name beside the mark, draws dashed projections to both axes, fades the other bubbles, checks the same country in the docked selector, and changes the side controls to that country. The selected object is explained in place and echoed in a persistent panel. | `scrollY` remained `0`; no page movement. | `gapminder-initial.png`, `gapminder-selected.png` |
| Knight Lab TimelineJS | [Women in computing example](https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1xuY4upIooEeszZ_lCmeNx24eSFWe0rHe9ZdqH2xqVNk&font=Default&lang=en&initial_zoom=2&height=650) | Clicking a time marker replaces the large story slide above the ruler. The selected marker receives a white raised label while the remaining markers fade. Detail and navigation are one bounded component, so the detail never appears outside the current frame. | No document scroll; the internal timeline pans to keep the selected marker visible. | `timelinejs-initial.png`, `timelinejs-selected.png` |
| Google Maps | [Museums in Buenos Aires](https://www.google.com/maps/search/museums+in+Buenos+Aires?hl=en) | Selecting a result adds a detail column between the result list and map; the chosen map pin turns red and carries its label. Context remains in both the list and map while the detail is independently scrollable. | `scrollY` remained `0`; the viewport does not move. | `google-maps-results.png`, `google-maps-detail.png` |
| Flourish Timeline | [Official timeline example](https://public.flourish.studio/story/1775472/) | The timeline keeps several event cards visible at once. Separate story-level previous/next controls advance a short explanatory caption while the visualization stays in the same bounded frame; the live embed records the state in `#slide-n`. | `scrollY` remained `0`; transitions happen inside the embed. | `flourish-clean-initial.png`, `flourish-next.png` |
| Google Finance | [Apple quote](https://www.google.com/finance/quote/AAPL:NASDAQ?hl=en) | Hovering a point adds a dot, vertical guide, date label, and a compact price/volume tooltip inside the chart. On 390 px the point remains emphasized in the plot without opening another surface; the summary and range controls stay in place. | `scrollY` remained `0` on desktop and mobile. | `google-finance-initial.png`, `google-finance-desktop-hover.png`, `google-finance-mobile-hover.png` |
| ArcGIS StoryMaps | [Create Map Timeline](https://storymaps.arcgis.com/stories/1cc5981ca8e5431ca745c7d2d1190df9) | The immersive slide keeps the map full-frame and overlays a compact title/date card. Advancing from `01 / 06` to `02 / 06` changes the period, point color and data layer in place; previous/next arrows and the sequence counter remain fixed. | The document stayed at the same `scrollY` (`1808`) while the internal slide changed. | `arcgis-next.png`, `arcgis-advanced.png` |
| Tableau Public | [Super Sample Superstore](https://public.tableau.com/views/SuperSampleSuperstore/SuperDescriptive?:showVizHome=no) | Hovering a trend mark opens a compact tooltip directly beside it (`11/1/2021`, `$35,441 CP Sales`). The remaining dashboard, comparison line, filters, and regional selector remain visible. | `scrollY` remained `0`; no reflow or document movement. | `tableau-initial.png`, `tableau-mark-hover.png` |
| The Met, Heilbrunn Timeline | [Timeline of Art History](https://www.metmuseum.org/essays/timeline-of-art-history) | The landing page treats chronologies as explicit destinations. Selecting “Ancient Greece, 1000 B.C.–1 A.D.” navigates to a dedicated chronology with objects, a compact time band, and related map; it does not inject a detail below the landing page. | Explicit page navigation rather than automatic scrolling. | `met-initial.png`, `met-chronology.png` |

### Mobile evidence

- TimelineJS keeps the active story and selected marker in one viewport at 390 × 844: `timelinejs-mobile-selected.png`.
- Google Maps turns the docked desktop detail into a full-width, independently scrollable mobile panel: `google-maps-mobile-detail.png`.
- Google Finance keeps point detail inside the compact chart at 390 × 844: `google-finance-mobile-hover.png`.

Apple Health was considered but not counted: the supplied current-guide URL redirected to the iPhone User Guide home rather than an inspectable chart interaction (`apple-health-initial.png`). A product claim based on an older guide would not meet the project's verification rule.

## Patterns that transfer

1. **Echo the selection in two places.** Gapminder uses the selected mark and a checked row; Maps uses the result, detail panel, and map pin. A changed panel alone is too weak.
2. **Use local detail for confirmation, long detail for reading.** OWID, Finance, and Tableau keep the first response close to the selected datum.
3. **Keep the timeline and detail in one bounded composition when possible.** TimelineJS and Flourish avoid the discoverability problem structurally.
4. **If detail is spatially separate, give it a persistent edge.** Maps docks it; it does not append an unannounced block below the working surface.
5. **Do not auto-move on every exploratory selection.** None of the directly observed products moved the document viewport in response to repeated mark selection.

## Options for Doctrina

### Option A — First-use reveal, then a local cue

On the first selection in the session, if the detail heading is below the viewport, scroll only the minimum distance that places the detail heading at `72%` of the viewport height. This deliberately leaves roughly the upper `70%` of the timeline visible; it does not promise that the whole detail fits. Keep the selected point's halo and add a thin connector that ends at a short label, `Ver detalle abajo ↓`, beside the selected event. The label remains until the detail intersects the viewport once; later selections update in place with no automatic scroll.

- Motion: `360ms`, `cubic-bezier(0.22, 1, 0.36, 1)`; cap the movement at `40vh`. If the required movement is larger, place the detail heading at the bottom edge and let the reader continue manually.
- Reduced motion: instant scroll, no animated connector; focus moves to the detail heading only for keyboard activation, never for pointer activation.
- Cost: session memory, intersection tracking, and a cue whose anchor must survive timeline pan/resize.
- Trade-off: teaches the relationship once and then stays quiet, but a reader who returns much later may miss a subsequent update.

### Option B — Persistent compact preview at the timeline edge

Never move the page on selection. Attach a `64–88px` preview strip to the lower edge of the timeline: date, event title, one-line summary, and `Leer detalle ↓`. It appears on the first selection, updates on later selections, and is visually connected to the selected point through the existing selected-state treatment rather than a long line. Activating `Leer detalle` scrolls the full panel heading to `24px` below the top safe area.

- Motion: preview enters with `opacity 0 → 1` and `translateY(8px → 0)` over `240ms`, `cubic-bezier(0.22, 1, 0.36, 1)`; content changes cross-fade over `160ms` without changing strip height.
- Reduced motion: no transform or cross-fade; content swaps immediately.
- Mobile: the same strip is a non-modal bottom peek above browser chrome, not a draggable sheet; it must not cover timeline controls.
- Cost: permanent vertical space and duplicated title/summary content.
- Trade-off: clearest repeated-use behavior and no surprise movement; the extra strip can make an already tall component feel taller.

### Option C — Conditional minimum scroll on every selection

After each selection, test the detail panel. If any part of its heading and first paragraph is already visible, do nothing. If it is entirely below the viewport, scroll the minimum distance that reveals the heading plus `96px` of content, with the selected portion of the timeline still visible above. Add `10px` separation only as optical padding; do not try to fit the whole variable-height detail.

- Motion: `320ms`, `cubic-bezier(0.22, 1, 0.36, 1)`; never scroll upward automatically; cancel immediately on wheel, touch, Page Up/Down, or pointer drag.
- Reduced motion: instant minimum scroll; preserve focus rules from Option A.
- Cost: visibility calculation after layout and careful cancellation when the user starts scrolling.
- Trade-off: strongest guarantee that each change is noticed, but repeated selection near the top can still feel like the page is tugging at the reader.

## Recommendation and decision

Option B is the safest default because it copies the shared lesson from Gapminder, Maps, TimelineJS, and Tableau: acknowledge selection where it happens, then let the reader choose deeper disclosure. Option A is the lighter alternative if the strip adds too much height. Option C should be used only if testing shows that readers still miss changes after seeing A or B; it is the only option that repeatedly moves the document.

Pedro has to choose **A, B, or C** for the live proposal. Do not combine them before testing: a preview strip plus first-use auto-scroll would signal the same change twice.
