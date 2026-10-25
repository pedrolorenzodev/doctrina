# Page 03 verification (Católica, `/es/doctrinas/eucaristia/catolica`)

Verifier: Sonnet 5.5 agent, read-only. Date 2026-10-24. Reference: `docs/research/proposals/site-clean/s03.html` (served at :8099). Built page at :3100. Method: `.claude/rules/ui.md`, "Pixel-perfect verification". Scripts and images: `/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/1d1a1f16-4327-4786-bcdd-e57599ec46a8/scratchpad/verify/` (overlays in `overlay/`, element crops in `el/`, raw numbers in `diff-results.json`, `el-results.json`, `beh/*.json`).

## How to read the numbers

- Pixel share = pixels where any channel differs by more than 24, over the overlap of both crops (top-aligned). Both pages were loaded, fonts ready, scrolled through (reveals done), fixed layers hidden, default state, mouse parked at 0,0.
- Whole-block shares are dominated by copy differences (the build uses reviewed copy: different text, extra citations, a sixth tab "Pentecostal", different line wraps), so they are not defect measures. Block heights differ for the same reason (objections 651 vs 881 etc.).
- "Heading strip" = h2 (+ sub where it exists) of each block: copy is the same on both sides, so this is a clean style measure. At 1440 it is 0.00% in every block except why and objections (1.1%), where the strip includes a few px of the following paragraph.
- To separate copy from style, I also compared (a) computed styles and boxes of about 85 corresponding elements per viewport and (b) pixel crops of elements with identical text, with the element top snapped to an integer pixel (padding added to `main` on both sides). Only (b)-type findings are listed as defects below.
- Both sides give the same geometry for h1, lede, crumbs, every h2 and sub, list rows, btn-more, btn-go, video filter and its counts, at 1440, 1023, 900, 390 and 360.

## Pixel share per block and viewport

Copy differences are included in these numbers. 1024 and 768 differ by design (see "Breakpoint mapping").

#### 1440 px

| Block | Height ref / build (px) | Whole block light | Whole block dark | Heading strip light | Heading strip dark |
|---|---|---|---|---|---|
| header | 276 / 276 | 0.47% | 0.46% | - | - |
| #que-ensena / #teach | 1413 / 1462 | 7.08% | 6.97% | 0.00% | 0.00% |
| #por-que / #why | 883 / 1021 | 11.73% | 11.70% | 1.11% | 1.12% |
| #escritura / #scripture | 850 / 903 | 7.78% | 7.53% | 0.00% | 0.00% |
| #objeciones / #objections | 651 / 881 | 8.65% | 8.40% | 1.09% | 1.08% |
| #como-se-vive / #life | 1712 / 1739 | 4.03% | 3.96% | 0.00% | 0.00% |
| #autoridad / #authority | 947 / 947 | 2.05% | 2.01% | 0.00% | 0.00% |
| #videos / #videos | 617 / 617 | 2.60% | 2.61% | 0.00% | 0.00% |

#### 1023 px

| Block | Height ref / build (px) | Whole block light | Whole block dark | Heading strip light | Heading strip dark |
|---|---|---|---|---|---|
| header | 272 / 272 | 0.54% | 1.57% | - | - |
| #que-ensena / #teach | 1413 / 1462 | 8.03% | 8.35% | 0.00% | 1.01% |
| #por-que / #why | 930 / 1219 | 11.70% | 11.63% | 1.26% | 1.27% |
| #escritura / #scripture | 850 / 903 | 9.06% | 8.76% | 1.98% | 1.99% |
| #objeciones / #objections | 652 / 881 | 9.83% | 9.55% | 1.23% | 1.23% |
| #como-se-vive / #life | 1711 / 1739 | 6.86% | 6.74% | 2.27% | 2.28% |
| #autoridad / #authority | 947 / 947 | 2.59% | 2.55% | 0.00% | 0.00% |
| #videos / #videos | 618 / 618 | 2.19% | 2.21% | 0.00% | 0.00% |

#### 1024 px

| Block | Height ref / build (px) | Whole block light | Whole block dark | Heading strip light | Heading strip dark |
|---|---|---|---|---|---|
| header | 272 / 310 | 8.71% | 11.24% | - | - |
| #que-ensena / #teach | 1413 / 1701 | 11.53% | 11.31% | 10.48% | 10.19% |
| #por-que / #why | 930 / 1406 | 12.34% | 12.26% | 3.48% | 3.48% |
| #escritura / #scripture | 850 / 1058 | 11.84% | 11.51% | 11.07% | 10.93% |
| #objeciones / #objections | 652 / 984 | 11.74% | 11.45% | 7.86% | 7.74% |
| #como-se-vive / #life | 1711 / 2146 | 11.72% | 11.54% | 5.96% | 6.00% |
| #autoridad / #authority | 947 / 1128 | 11.28% | 11.13% | 12.07% | 11.87% |
| #videos / #videos | 618 / 642 | 9.68% | 10.70% | 6.27% | 6.13% |

#### 900 px

| Block | Height ref / build (px) | Whole block light | Whole block dark | Heading strip light | Heading strip dark |
|---|---|---|---|---|---|
| header | 272 / 272 | 0.43% | 1.70% | - | - |
| #que-ensena / #teach | 1413 / 1462 | 9.30% | 9.69% | 0.00% | 1.17% |
| #por-que / #why | 1021 / 1249 | 12.18% | 12.12% | 1.46% | 1.47% |
| #escritura / #scripture | 851 / 903 | 10.19% | 9.85% | 0.00% | 0.00% |
| #objeciones / #objections | 651 / 882 | 12.06% | 11.73% | 1.43% | 1.42% |
| #como-se-vive / #life | 1712 / 1739 | 6.39% | 6.28% | 0.00% | 0.00% |
| #autoridad / #authority | 947 / 947 | 3.03% | 2.98% | 0.00% | 0.00% |
| #videos / #videos | 617 / 617 | 3.39% | 3.47% | 0.00% | 0.00% |

#### 768 px

| Block | Height ref / build (px) | Whole block light | Whole block dark | Heading strip light | Heading strip dark |
|---|---|---|---|---|---|
| header | 268 / 306 | 8.98% | 9.25% | - | - |
| #que-ensena / #teach | 1413 / 1614 | 13.68% | 13.42% | 9.67% | 9.46% |
| #por-que / #why | 1052 / 1342 | 13.49% | 13.40% | 3.83% | 3.84% |
| #escritura / #scripture | 876 / 1008 | 11.55% | 11.19% | 10.94% | 10.78% |
| #objeciones / #objections | 652 / 959 | 11.55% | 11.20% | 7.15% | 7.01% |
| #como-se-vive / #life | 1738 / 2035 | 12.65% | 12.45% | 5.26% | 5.31% |
| #autoridad / #authority | 947 / 1075 | 12.28% | 12.13% | 10.65% | 10.44% |
| #videos / #videos | 617 / 643 | 8.28% | 8.44% | 5.88% | 5.75% |

#### 390 px

| Block | Height ref / build (px) | Whole block light | Whole block dark | Heading strip light | Heading strip dark |
|---|---|---|---|---|---|
| header | 246 / 246 | 0.85% | 2.37% | - | - |
| #que-ensena / #teach | 2123 / 2273 | 13.14% | 13.19% | 0.00% | 1.71% |
| #por-que / #why | 1571 / 1862 | 15.14% | 15.05% | 0.00% | 0.00% |
| #escritura / #scripture | 1261 / 1393 | 12.45% | 12.01% | 0.00% | 0.00% |
| #objeciones / #objections | 876 / 1338 | 14.02% | 13.61% | 0.00% | 0.00% |
| #como-se-vive / #life | 2678 / 2685 | 15.49% | 15.24% | 4.85% | 4.88% |
| #autoridad / #authority | 1291 / 1269 | 2.96% | 2.91% | 0.00% | 0.00% |
| #videos / #videos | 650 / 649 | 12.66% | 12.62% | 7.27% | 6.94% |

#### 360 px

| Block | Height ref / build (px) | Whole block light | Whole block dark | Heading strip light | Heading strip dark |
|---|---|---|---|---|---|
| header | 289 / 289 | 0.70% | 2.12% | - | - |
| #que-ensena / #teach | 2229 / 2355 | 13.68% | 13.74% | 0.00% | 1.54% |
| #por-que / #why | 1686 / 1954 | 15.71% | 15.62% | 2.93% | 2.96% |
| #escritura / #scripture | 1340 / 1445 | 12.79% | 12.34% | 0.00% | 0.00% |
| #objeciones / #objections | 924 / 1488 | 14.83% | 14.39% | 4.98% | 4.84% |
| #como-se-vive / #life | 2820 / 2877 | 14.33% | 14.09% | 0.00% | 0.00% |
| #autoridad / #authority | 1473 / 1420 | 13.45% | 13.27% | 0.00% | 0.00% |
| #videos / #videos | 697 / 698 | 9.17% | 9.19% | 3.62% | 3.41% |

#### Element crops
| Config | Same-text elements compared | Pixel-identical | Different box size | Differing pixels (>0.1%) |
|---|---|---|---|---|
| 1440-dark | 59 | 44 | 6 | 9 |
| 1440-light | 59 | 44 | 6 | 9 |
| 360-light | 57 | 46 | 5 | 6 |
| 390-dark | 57 | 2 | 6 | 49 |
| 390-light | 57 | 46 | 6 | 5 |


Reading of the element table: of 59 same-text elements at 1440 (light and dark), 44 are pixel-identical, 6 have a different box size (real, listed below) and 9 differ in pixels. Of those 9: tsw-tab2 (tab width, D3), scr-d-cite and why-note (inline wrap position depends on surrounding copy / D2), vid-li1 and vid-list (D1), and 4 sub-0.2% crops in authority (th1, th4, on1: subpixel glyph position in a table whose text differs; on1-a 1.7% is one glyph pair). At 390 and 360 (light) 46 of 57 are identical.

Unexplained: in dark theme at 390 and 360 only 2 of 57 same-text elements are pixel-identical (differences are on glyph edges, max channel difference 76; background texture is identical, computed colours, fonts, smoothing and geometry are identical; re-run once and reproduced). Light at the same widths and dark at 1440 are identical. I did not find the cause (see "Not verified").

## Real style defects (b)

All values measured with `getComputedStyle` / `getBoundingClientRect`, light theme unless stated; the same values hold in dark.

| # | Element | Property | Reference | Built | Where / effect |
|---|---|---|---|---|---|
| D1 | Video list links (`#videos ul li a`, ref `.vl a.ln-go`) | `font-variation-settings` | `normal` (auto optical size, opsz = font size 17.5 px desktop, 16.5 px phone) | `"opsz" 18` (class `opsz-18`) | Link width 492.8 vs 490.5 px at 1440 (first video, same text). At 390 the box is 347 vs 342 wide, at 360 244.8 vs 324.1 (wrap point moves). Cause of the 2.60% share in `#videos` at 1440, where heights are equal. |
| D2 | In-text page links: `#why` "Lo que escribieron los primeros cristianos" (`why-note-link`), `#scripture` passage titles, `#objections` titles | `display` (element) | `a` with `display: inline` | `button.link-page` with `display: inline-block` | A button cannot wrap mid-line. why-note: ref link box 670x40 starts on line 1 and wraps, built 300x23 jumps to line 2 (1440). At 390: ref 338x50, built 310x33. Passage title links are 1 px taller (36 vs 35) at every width. Visible as a different line break. |
| D3 | Switcher tabs (`#tsw` buttons, class `reserve-bold`) | width of non-current tabs | tab "Ortodoxa" 84.08 px (390: 77.86) | 84.58 px (390: 78.34) | +0.5 px per non-current tab, so tab 3..n shift by 0.5, 1.0, 1.5 px; tab text pixels differ 4.6% (1440). Current tab identical (77.67). |
| D4 | Focus ring (`:focus-visible`) on tabs, btn-more, btn-go, video filter buttons, citations | `border-radius` while focused | 3 px (DESIGN section 3: "radius 3 on every a, button...") | tab 6, btn-more 6, filter 6, btn-go 7, citation 2 | Outline itself (2 px accent, offset 2 px) is identical. Only the ring corner radius differs. |
| D5 | Authority "En esta página:" links (`#authority td p a`, first link) | `text-decoration-color` on hover | changes from rgb(174,171,164) to rgb(42,38,32) | does not change (stays rgb(174,171,164)) | Measured hovering the text of "la presencia real" at 1440. Focus-visible does change it in the build. |
| D6 | Citation group inside the definition (`#teach` `.defn`, cite button) | `line-height` | 21.75 px (1.5, inherited) | 22.475 px | Box height 21.8 vs 22.5. Paragraph height is equal (138 px), so no visible shift. Minor. |

Checked and not defects (identical to the reference): font family/size/weight/line-height/colour/padding/margins/borders of h1, lede, crumbs, tabs, h2, sub, list items, passage and objection titles, life label/text columns (168 px / 528 px, gap 24), authority th/td (190 px th, paddings), video filter (padding 3, radius 8, min-height 34), counts, btn-go (radius 7, min-height 42), btn-more (min-height 40). Text centring in tabs, btn-go, btn-more, filter buttons and count chips: offsets 0.00 px (btn-more -1.00 on both sides because of the -10 px margin and the icon), identical to the reference at 1440 and 390. Hover colours and fills match for crumbs, tabs, btn-more, btn-go, filter, video links, passage links, citations; hover pixel crops of tab/btn-go/filter/btn-more are 0.0000% different (tab 4.2%, D3). Sticky switcher border appears (rgb(201,197,188) 1px) when stuck and is transparent at the top on both sides. No horizontal overflow at 320, 360, 390, 768, 1024, 1440 (also with all lists expanded): scrollWidth equals clientWidth, no element outside the viewport. No console errors on either page.

Deviations where the build follows DESIGN.md and not the prototype (not defects): "Mostrar menos" scrolls the list top back into view (list top 129 px after closing; prototype stays at -1716); videos show no "Mostrar 0 más" (button disappears; prototype shows it); focus-visible on citations and links also gets the hover fill (DESIGN: "Hover / focus"); icon turns with the `rotate` property (45 deg, 200 ms) instead of `transform`.

Copy and content differences seen (not style): sixth tab "Pentecostal"; definition shows three citations in parentheses instead of one; "Por qué" intro is three paragraphs; figure captions differ; the authority definitions in the build have no opening or closing guillemets around the canon quotations while the prototype has « » (verify if intended).

## Breakpoint mapping (deliberate)

- 1023 and 900 px: layouts agree (x positions and widths of crumbs, switcher, h1, lede, h2, list, life columns, authority th, filter are equal; block shares in the table are the same as at 1440).
- 768 px: build keeps `md` paddings (left 48) and shows the switcher hint, the prototype uses its 899 rules (left 32, hint hidden). h1 x 48 vs 32, text width 616 vs 704, life text column 424 vs 512. Expected from the 899 to 768 mapping.
- 1024 px: build shows the sidebar (main x 336, width 576), the prototype is still in drawer mode (<1100): x 48, width 720. Expected.

## Motion (from `getAnimations()`, no frame sampling), against DESIGN section 4

| Pattern | Reference | Built | Result |
|---|---|---|---|
| Title entrance | 3 parts, 700 ms, `cubic-bezier(.33,1,.68,1)`, delays 0/80/160, opacity only, 2 s failsafe | `title-in` 700 ms, same curve, delays 0/80/160, fade only; failsafe delay 2000 ms | match |
| Page fade | n/a in prototype | `page-fade` 220 ms `ease-out` | matches DESIGN (220 ms ease-out) |
| Scroll reveal (`#scripture` list) | `row-reveal` 420 ms `cubic-bezier(.22,1,.36,1)`, translateY 8 px, opacity 0 to 1, delays 0 and 60 ms | identical keyframes, duration, easing, delays 0 and 60 | match. Difference: the prototype also animates one row that is in view at load; the build animates none at load (DESIGN: items already in view are not animated). |
| Show more, `#teach` | height 380 ms `ease-reveal` (1068 to 2197 px); 2 new rows rise 8 px, 420 ms, delays 120 and 160 | height 380 ms (1117 to 2324 px); 2 rows 420 ms, delays 120/160 | match |
| Show less | 3 ghost rows 180 ms `ease-out` to opacity 0 scale .96; height 380 ms delay 180 | same (3 ghosts 180 ms, height 380 ms delay 180) | match |
| `#life` open/close | rows 420 ms delays 120/160/200; ghosts 180 ms x6; height 380 ms, delay 180 on close | same | match |
| `#videos` more | row 420 ms delay 120; height 380 ms | same | match |
| Hover/press transitions | 150 ms `ease` | 150 ms `cubic-bezier(.25,.1,.25,1)` (= ease), 200 ms on the icon rotation | match |
| Reduced motion | 0 animations in load, scroll, open and close; 0 elements with non-zero transition or animation duration | same: 0 and 0 in every phase | match |

Interruption of a FLIP mid-way was not tested.

## Not verified

- Cause of the dark-theme glyph-edge differences at 390 and 360 (D-unknown above); also dark 1023 header (1.57%) and dark teach heading strip at 1023/390/360 (1.0 to 1.7%) show the same effect.
- Whole-block style at 1024 and 768 beyond the layout mapping above (differences there are layout, not measured per element).
- Touch emulation: the 44 px hit areas (`hit-44`, `pointer-coarse:min-h-11`) were not measured.
- Hover and focus were measured on 19 representative elements, not every clickable element; hover was measured on the light theme only. The many-line link hover (`why-note-link` in the prototype) was measured at a text point: both sides change to 2 px underline.
- Lenis wheel scroll, in-page jump duration (`min(720, 380+|dy|*.08)`), scroll-padding offset under the sticky switcher, hash arrival, and instant jumps under reduced motion.
- Interrupting animations (click during a FLIP), the list expanded to its full length for video (second click) in pixels, citation window, drawer and sidebar (shell, outside this page's blocks), top-bar search (absent in the build screenshot at 1440: ref shows a search field, build does not; shell, not checked further).
- Pixel diffs of the open states: only button, label, icon rotation and item counts were compared (teach 5 to 9, life 8 to 14, videos 5 to 10 on both sides).
- Copy correctness and edition/citation rules (out of scope).
