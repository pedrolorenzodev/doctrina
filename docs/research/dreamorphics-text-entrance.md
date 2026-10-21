# Dreamorphics text entrance

## Progress

- 2026-10-20: analysis done (source read + frame-by-frame capture in Chromium at 1440×900 and 390×844). Replica built and verified pixel-identical against the original in Chromium at both sizes (21 seeked frames each, 0 differing pixels). Proposal page: `replica.html` in the session scratchpad, handed to the coordinator to publish. Not tested: Safari/Firefox, real devices.
- Pending: Pedro's decision (adopt / adapt / drop, and where).

## What the effect is

On https://www.dreamorphics.com/ (a one-page manifesto; canonical URL `dreamagineering.com`, JSON-LD names Paisanos as publisher), every paragraph waits invisible below a line at 92 % of the viewport height. When its top edge crosses that line it "materializes": it rises 14 px, goes from 8 px blur to sharp and from transparent to opaque in 1.1 s on a strong ease-out, so the text seems to come into focus just above the bottom of the screen. On wide screens a fixed footer (folio) sits in exactly that bottom strip, so the text appears right above it. Paragraphs that enter together (fast scroll, page load) come out in a cascade, 85 ms apart. Whole paragraphs animate: there is no line, word or character splitting, no mask, gradient, backdrop-filter or clip-path, no smooth-scroll library.

## Mechanism (read from source)

Everything is in the single HTML document (inline `<style>` and one inline `<script>`; the only other request is the font `fonts/inter-tight-latin-var.woff2`). No animation library, no Lenis: `scroll-behavior` computes to `auto`.

| Part | Value | Where |
|---|---|---|
| Which elements | `.text p:not(.lines), .lines > *, .coda > :not(.lines)` (each paragraph; each line of a "lines" block; each coda child) | inline script, `querySelectorAll` |
| Waiting state | class `.pending` → `opacity: 0.001` (not 0, so Chrome still counts the text for FCP/LCP, per their comment); only `@media screen and (prefers-reduced-motion: no-preference)` | inline style, `.pending` |
| Trigger | `IntersectionObserver`, `rootMargin: "0px 0px -8% 0px"`, root = viewport; on first intersection: `unobserve`, set `--i`, `classList.replace("pending","reveal")`. Once only | inline script |
| Cascade index | `--i` = position among the entries that became visible in the same observer callback (0, 1, 2…) | inline script |
| Animation | `.reveal { animation: materialize 1100ms var(--ease-out) both; animation-delay: calc(100ms + var(--i, 0) * 85ms) }` | inline style, under `prefers-reduced-motion: no-preference` |
| Keyframes | `@keyframes materialize { from { opacity: 0.001; transform: translate3d(0, 14px, 0); filter: blur(8px); } }` (to = natural state) | inline style |
| Easing | `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)` | `:root` |
| Cover | `h1.reveal` (`--i:0`) and `.tagline.reveal` (`--i:1`) animate on load: delays 100 / 185 ms | markup |
| Chrome | `.running-head` and `.folio`: `animation: fade 1000ms ease both 1000ms` (opacity 0 → 1) | inline style |
| Hairline | `.cover::after` (1 px × clamp(2rem, 6vh, 3.5rem)): `drop 1200ms cubic-bezier(0.77, 0, 0.175, 1) both 1100ms`, `scaleY(0)` → 1 from top | inline style |
| Fixed frame | `@media (min-width: 60rem)`: running head and folio `position: fixed`, transparent background, `pointer-events: none` | inline style |
| Reduced motion | script exits; nothing is pending; `.page { animation: appear 400ms ease both }` (opacity only) | inline style + script |

Confirmed with `getAnimations()`: duration 1100, delay 100, fill both, keyframe easing `cubic-bezier(0.23, 1, 0.32, 1)`. Trigger confirmed by logging the element rect when the class flips: top at 828 + 14 px (the transform) = 842 at 1440×900; 776.5 + 14 ≈ 790 at 390×844.

### Type and colour (computed)

- Font: Inter Tight variable (self-hosted latin subset), weight 450 for text, 650 strong, 700 headings; only the upright face is declared, so italics are synthesized. Fallback: Arial with `size-adjust: 96.3855%`, `ascent-override: 100.5078%`, `descent-override: 25.0256%`.
- Text column: `max-width: 34rem` (544 px), `font-size: clamp(1.0625rem, 0.98rem + 0.3vw, 1.25rem)` = 20 px at 1440, 17 px at 390; line-height 1.55 (31 / 26.35 px); letter-spacing −0.008em; `p + p` 0.5em; `section + section` 2.75em.
- Colours: paper `#f3ede1` with an SVG fractal-noise grain tile (240 px), ink `#1a1814`, secondary `#6b665c`; `mark` is inverted (ink background, paper text, 0.14em side padding).
- Gutter `clamp(1.25rem, 4vw, 3rem)` (48 / 20 px); folio padding `clamp(1rem, 3vh, 2rem)`.

## One entrance, frame by frame

Measured with animations paused and seeked (`currentTime`), 1440×900, computed style of the entering paragraph. t = 0 is the moment the class flips (≤ 1 frame after the top edge crosses the 92 % line, since the observer runs in the rendering step).

| t (ms) | opacity | translateY | blur |
|---|---|---|---|
| 0–100 | 0.001 | 14 px | 8 px (delay) |
| 150 | 0.19 | 11.3 | 6.5 |
| 200 | 0.37 | 8.9 | 5.1 |
| 250 | 0.52 | 6.8 | 3.9 |
| 300 | 0.64 | 5.0 | 2.9 |
| 400 | 0.81 | 2.7 | 1.5 |
| 500 | 0.90 | 1.4 | 0.8 |
| 700 | 0.98 | 0.3 | 0.2 |
| 1000 | 0.999 | 0.01 | 0.01 |
| 1200 | 1 | 0 | 0 |

Perceptually: nothing for 100 ms, a blurred grey smudge at ~150 ms, readable but soft by ~400 ms, then a long, nearly invisible settle. Fast scroll: a 700 px jump revealed 7–8 paragraphs in one callback, delays 100, 185, 270 … 695 ms (`05-…`). Frames: `dreamorphics-text-entrance/01…06` (red line = trigger line, drawn by us).

## Mobile (390×844)

Same mechanism and parameters. Differences come only from the layout: no fixed chrome below 60rem (running head scrolls away with the cover, folio sits at the end of the page), text 17 px / 26.35 px, gutter 20 px, trigger line at 776.5 px. The bottom 8 % strip (67.5 px) is therefore empty paper instead of the folio.

## Replica and verification

`replica.html` (session scratchpad) runs the original CSS and script scoped inside a scrollable "screen" (`container-type: size`; `vw`→`cqw`, `vh`/`svh`→`cqh`, `fixed`→`absolute` relative to the screen, observer `root` = the screen). Font: Inter Tight from Google Fonts, upright axis only (so italics are synthesized as in the original). Check: the screen was forced to full viewport, filled with the original's markup, and seeked frames (cover at 9 times, one entrance at 9 times, fast-scroll cascade at 3 times) were diffed against the live site: 0 differing pixels at 1440×900 and 390×844 in headless Chromium. In the published page the screen is shorter than a real viewport (min(900 px, viewport − 120 px)), so the 8 % line is 8 % of that screen.

## Uncertain or not covered

- Only Chromium (Playwright, headless, no GPU). Safari's `filter: blur` on large text and Firefox were not checked.
- Real-time video was recorded (`recordVideo`), but recording slowed the page clock, so all timings above come from seeked frames and the source, not the video.
- Not replicated: the signature's SVG pen-stroke animation and hover effects other than the folio link.
- The Google Fonts build of Inter Tight matched their self-hosted file pixel for pixel today; a future font update could differ.
