# Reader 05, block R1: independent verification

Verifier: Sonnet, 2026-10-26. Page under test: the production build served at http://localhost:3100 (`/es/biblia/juan/6` and the edge pages). Reference: `docs/research/proposals/reader-05-06/` served on :8098 (`s05.html#jn6` in "pagina" mode, `s05.html#tr13` for `.rd-m`, `s06.html#jn6/53` for `.pn a`). Method: Playwright computed styles at 1440x900, 768x900, 390x844 and 360x800, light and dark, plus per-frame opacity sampling, keyboard Tab runs, a print emulation and a PDF.

## Verdict: PASS WITH FIXES

Nothing is broken at the structural level. There is no horizontal overflow, no console error and no failed request on any page tested. The verse block, the neighbour boxes, the crumbs and the title entrance match the reference value for value. The defects are in typographic fine print: a missing line-height on multi-line `text-ui-sm` text (the deuterocanonical notice is visibly cramped), and title and foot-heading tracking and opsz that differ from `.rd-t` and `.rd-foot h2`. There are also three coherence gaps: the sidebar for deuterocanonical books, `aria-current` on a link to another chapter, and print.

## Checks a to n

| # | Check | Ours (measured) | Reference (measured or CSS) | Result |
|---|---|---|---|---|
| a | Title | Newsreader 300, 44px (1440, 768) and 34px (390, 360), lh 1.08 (47.52 / 36.72px), colour ink (light `rgb(28,23,19)`, dark `rgb(242,242,240)`), letter-spacing `normal`, opsz 72 | `.rd-t`: same family, weight, sizes, lh and colour; letter-spacing -0.44px (34px: -0.34px; it inherits the `h1` rule -0.01em); opsz 60; `text-wrap: balance` in fuente.css | FAIL (minor): tracking, opsz and balance differ; the rest matches |
| b | Edition line | 14px, 400, ink-3 (5.27:1 light, 5.97:1 dark), margin 10px 0, lh normal | `.rd-m`: 14px, ink-3, margin 10px 0 34px (the 34px is our `mt-8.5` on the text block) | PASS |
| c | Verse text | Source Serif 4 300, 19px, lh 31.54px (1.66), ink-2, padding 8/12, radius 6px, margin `0 -12px 6px`, block 744px wide at 1440 | `.rd-p`: identical; only the margin-bottom differs (14px in `.rd-bible`; 6px in documents, which is the case we copy) | PASS |
| c | Division number | Work Sans 12px, weight 300, ink-3, tabular-nums. At 1440 and 768: absolute, left -66px, top 12px, 56px wide, right-aligned. At 390 and 360: static block, left-aligned, margin-bottom 4px | `.dn`: same values; at <= 899 margin-bottom is 2px | PASS (4px vs 2px is a small deviation, see D8) |
| d | Foot «Edición y licencia» | `h2` 22px, 300, ink, opsz 24, lh `normal`; lines 14px ink-3 with lh `normal`; border-top 1px rule, padding-top 24, margin-top 64, max 640 | `h2` 22px 300, opsz 60, lh 25.3px (1.15); `p` 14px, lh 22.4px (1.6), max 640; margin-top 64, padding-top 24 | FAIL (minor): line-height missing on the lines, opsz differs |
| e | Previous / next boxes | Padding 14/18/15/18, border 1px rule (light `rgb(201,197,188)`, dark `rgb(58,58,56)`), radius 6, small 12.5px, title 16.5px/1.4 serif, hover border rule-2 plus hover bg, 150 ms `cubic-bezier(.25,.1,.25,1)`. At 1440 two columns of 352px with 16px gap; at 390 and 360 stacked | `.pn a`: same padding, border, radius, sizes; hover `#4d4d4a` plus `rgba(255,255,255,.05)` (dark), 0.15s; two columns of 335px | PASS |
| f | Crumbs | rect identical to the reference (336,90,720x15); 13px ink-3; current item ink-2; separator "/" in rule-2 (1.8:1 and 2.0:1, decorative, `aria-hidden`); "Biblia" and the testament are inert `button`s (approved TODO) | `.crumbs` the same rect and size; the reference margin-bottom is 20px, ours is spaced by `mt-9` on the header | PASS |
| g | Entrance and reduced motion | Sampled per frame. `nav` starts at t=0, `h1` +80 ms, edition +160 ms, notice +240 ms, each fading 700 ms (`ease-title`). Opacity is 1 for all at ~900 ms; `transform` is `none` in every sample. With `reducedMotion: reduce`, `animation-name` is `none` and every sample is 1 from the first frame | The spec: 700 ms, 80 ms apart, nothing moves | PASS |
| h | Keyboard | Order at 1440: skip link, logo, search, ES/EN, theme, sidebar (about 17 stops), then main. At 390: skip link, menu, logo, search, theme, crumbs, neighbours. Focus ring 2px solid `rgb(44,74,158)`, offset 2px, visible on top bar, sidebar, crumb buttons and neighbour boxes (screenshots) | n/a | PASS. Not reached: ring contrast in dark mode. The verses are not focusable, which is fine for R1 |
| i | Overflow, console, requests | Overflow 0 at 1440, 768, 390 and 360 for juan/6, salmo/119, judas/1, abdias/1, eclesiastico/51, genesis/1 and apocalipsis/22, light and dark; 0 console errors, 0 failed requests | n/a | PASS |
| j | Contrast of ink-3 on bg | light `#615c54` on `#e8e5de` = 5.27:1; dark `#9a9a96` on `#1d1d1c` = 5.97:1 (the same for the division numbers and crumbs). ink-2 verse text: 11.95:1 and 10.91:1. The texture overlay was not included in the computation | n/a | PASS |
| k | Edge states | Psalm 119: 176 verses, 3-digit numbers are 22px wide, no overflow. Judas 1: 25 verses, previous `3 Juan 1`, next `Apocalipsis 1`. Abdías 1 (390): `Amós 9` and `Jonás 1`. Genesis 1: only «Capítulo siguiente», in the right column at 1440 and a single box at 360. Apocalipsis 22: only «Capítulo anterior». Eclesiástico 51 at 360: crumbs `Biblia / Libros deuterocanónicos / Eclesiástico`, edition line wraps to 2 lines, notice 5 lines, verse container `lang=en`, notice outside it in Spanish | n/a | PASS WITH FIXES: the notice and the 2-line edition line are cramped (D1) |
| l | Sidebar | `/juan/6`: «Nuevo Testamento» open, `Juan` has `aria-current="page"` with the current-item mark (inset accent bar plus fill), scrolled into view. `/salmo/119`: «Antiguo Testamento» open, `Salmo` current. `/eclesiastico/51`: «Libros deuterocanónicos» is a leaf with no children, nothing is marked current, no `aria-current` anywhere | n/a (the proposal shows «Capítulo 6» under the book, a known deviation) | FAIL for the deuterocanon (D3); the `aria-current` on `Juan` points at `/juan/1` (D2) |
| m | Hash `#v-53` | Verse top at 76px (360, 390; bar 52px) and 80px (768, 1440; bar 56px): 24px of room under the bar at every size. Verse ends at 242 / 159 | DESIGN §«Full-text reader»: opens at the cited paragraph 140px from the top; the proposal's CSS has `scroll-margin-top: top-h + 120px` | PASS against the brief (below the bar, with room). The page's `scroll-mt-35` (140px) is dead: `HashArrival` scrolls to bar + 24px and overrides it (D6) |
| n | Accessibility | Headings: `h1 "Juan 6"` then `h2 "Edición y licencia"`, no skips. `html lang=es`; chapter text `lang=es` (Eclesiástico `lang=en` on the verse container only). Landmarks: `header` (banner), `aside` without a name containing `nav` «Índice del sitio», one `main`, `nav` «Ruta», `header` of the page, `nav` «Capítulo anterior y siguiente». Skip link present | n/a | PASS WITH FIXES (D2, D7) |
| n | Print | No print rules in the repo. In print the sticky top bar (menu, search, ES/EN, theme) prints on page 1, the page background and texture print, and the "Saltar al contenido" skip link prints at the bottom of page 1 (it is visible in the PDF). The text, foot and neighbour boxes are fine; 6 A4 pages for John 6 | n/a | FAIL (minor, site-wide: D7) |

## Defects, by severity

No blocker. The first four are worth fixing before Pedro's visual approval. D5 and D6 are records for R2/R3 and the repo's design docs.

**D1 (medium): multi-line `text-ui-sm` text has `line-height: normal`.**
- The deuterocanonical notice is 5 lines at 360px and 3 lines at 1440px, packed at about 16px per line. See `shots/edge-_es_biblia_eclesiastico_51_360.png` and `shots/deutero-1440.png`.
- The 2-line edition line at 360px has the same problem. The foot lines are single lines, but they are also `normal`, against the reference 22.4px (1.6).
- The reference uses lh 1.55 for the hint (`.rd-hint`) and 1.6 for `.rd-foot p`.
- Fix:
  - `src/app/[lang]/bible/[book]/[chapter]/page.tsx`, the notice `<p>` (line with `mt-5.5 mb-0 max-w-140`): add `leading-[1.55]`.
  - Same file, the edition `<p>` (`mt-2.5 mb-0 text-ui-sm`): add `leading-[1.55]`.
  - `src/features/reader/chapter-foot.tsx`, both `<p>`: add `leading-[1.6]`. Alternatively add a line-height to `--text-ui-sm` in `src/app/globals.css`, but that touches every user of the token, so do not do it casually.

**D2 (medium): `aria-current="page"` on a link that goes to another page.**
- The sidebar link `Juan` points to `/es/biblia/juan/1` while the user is on chapter 6. Assistive technology announces "current page" for a different URL.
- Fix, where the sidebar sets `aria-current` for `book/*` leaves (`src/features/shell/sidebar.tsx`, the `route` match): use `aria-current="true"` (location) when the href does not equal the pathname, keeping the visual mark. Alternatively wait for the book page (the TODO in `src/content/site-tree.ts`, `book()`); then it is the page itself.

**D3 (medium): a deuterocanonical chapter has no place marked in the sidebar.**
- On `/es/biblia/eclesiastico/51` «Libros deuterocanónicos» is a childless leaf, so nothing is current and nothing opens. Check (l) asks for the book of the open chapter to be marked.
- Fix: either mark the leaf `bible/deutero` as current while any deuterocanonical chapter is open (`src/content/site-tree.ts` line ~208 and the current-matching in `sidebar.tsx`), or record this as a known gap in `docs/features/reader-05.md` until the deuterocanon gets its book list.

**D4 (low): title tracking and opsz differ from the reference.**
- Ours is `letter-spacing: normal` with opsz 72. `.rd-t` inherits -0.01em from `h1` (-0.44px at 44px, -0.34px at 34px) and uses opsz 60, plus `text-wrap: balance`.
- The `display` token has -0.01em in DESIGN §3 and the reader title is not a `display`, so this is a call for Pedro. If the target is "same as the proposal":
  - `src/components/page-header.tsx` `titleSizes.reader`: add `tracking-[-0.01em]`.
  - Replace the base `opsz-72` with `opsz-60` for the reader size. That needs a size-conditional class, because the base is hard-coded in the `h1` className.
  - Add `text-balance`.
- The foot `h2` has the same issue: ours is `opsz-24`, the reference is 60, and lh is `normal` against 1.15. Fix in `chapter-foot.tsx` (`opsz-24` becomes `opsz-60 leading-[1.15]`).

**D5 (low): the number floats above the first-line baseline.**
- At 1440 and 768, the 12px number's box bottom is 276.5 against 284.5 for the 19px text (range rects, v-1), so the number baseline sits about 5px above the first line's baseline. In the screenshots it reads as slightly raised.
- This is exactly the proposal's `top: 12px`, so it is not a regression. Raise it with Pedro in the visual review; the baseline-aligned value would be about `top: 17px` (`md:top-3` becomes `md:top-4.25`).

**D6 (low): `scroll-mt-35` is dead.**
- `chapter-text.tsx` sets `scroll-mt-35` (140px), but `src/features/shell/hash-arrival.tsx` and `scrollToLayoutPosition` in `src/lib/scroll.ts` land the verse at bar + 24px. DESIGN says 140px from the top.
- Decide in R2 (the arrival mark) which one wins. Until then the class is misleading; remove it or make the global offset read the element's `scroll-margin-top`.

**D7 (low): print.**
- The site has no `@media print`. The top bar and the "Saltar al contenido" skip link print on page 1 of John 6.
- Fix, global in `src/app/globals.css` plus the shell: `print:hidden` on the top bar, the skip link and the sidebar, and a plain background in print. Not an R1 regression, but a reader page is the first place anyone prints.

**D8 (low): small coherence points.**
- Below 768 the number margin-bottom is 4px (`mb-1`); `.dn` is 2px.
- Between 768 and about 900 the margin number is only 10px from the viewport edge, and 3-digit numbers (Psalm 100 to 150) sit 4px from it, because the page padding at 768 is 48px and the number extends 66px left of the verse block (`shots/psalm-768.png`). It does not overflow or clip, but one more step of side padding, or putting the number above the text below 900 as the proposal does, would be safer. It is a known mapping (899 to 768), so this is a call for Pedro.
- The crumbs «Biblia» and the testament are `button`s with no action. That is the approved "inert with TODO" pattern, but they are tab stops; confirm Pedro accepts the dead tab stops until the index pages exist.

## Not reached

- Dark-theme focus ring colour and its contrast (the ring was measured in light only).
- Hover on neighbour boxes at 360 and 390 (touch).
- Screenshot diffs of every size in both themes side by side with the reference; the numeric computed-style comparison was done at all 8 combinations and the screenshots read at 1440 light, 768 light, 390 and 360 dark, 360 light (Eclesiástico) and 390 (Apocalipsis).
- Genesis 1 and Judas 1 screenshots (only measured).
- Contrast of the text over the paper texture (the computation uses the flat background).
- A screen reader pass; only the DOM (landmarks, headings, `lang`) was inspected.
- Real browser print dialog; the PDF came from Chromium's `page.pdf`.

## Key screenshots (scratch folder `/Users/pedrolorenzo/doctrina-scratch/reader-verify-r1/shots/`)

- `ours-1440-light-top.png`, `ref-1440-light-top.png` (ours vs reference), likewise `-768-`, `-390-`, `-360-` in light and dark (`ours-<w>-<theme>-top.png`, `ours-<w>-<theme>-full.png`, `ref-<w>-<theme>-top.png`)
- `edge-_es_biblia_eclesiastico_51_360.png` and `edge-..._full.png` (D1)
- `deutero-1440.png` (D1, D3)
- `psalm-768.png` (D8)
- `hash-390.png`, `hash-768.png`, `hash-1440.png`, `hash-360.png`
- `focus-crumb.png`, `focus-nbox.png`
- `print.png`, `print-juan6.pdf`, `pdf50-1.png`, `pdf50last-6.png` (D7)
- Raw data: `measure.json`, `cmp-out.txt`, `checks2.json` in `/Users/pedrolorenzo/doctrina-scratch/reader-verify-r1/`
