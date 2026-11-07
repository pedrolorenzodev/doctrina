# ai-real-sui: independent visual verification

Scope: PNGs in `tmp/ai-sui/shots/{base,new,new2}`. Method: exact RGB diff with PIL (`ImageChops.difference`, any channel non-zero counts), regions clustered on a 12 px grid. Contrast computed with the WCAG 2.x formula from sampled pixels. No source file edited.

## 1. REST (approved UI unchanged at rest)

**rest-full, base vs new: 24 of 24 files compared (3 routes x 4 widths x 2 schemes), 0 differing pixels in every one.** Same dimensions in every pair (e.g. 360x13576, 1440x4240, 1440x5279). No defect.

**rest-view, base vs new (16 files):** 13 files are 0 px. Three differ:

| File | px | bbox (x0,y0,x1,y1) | Element | Explanation |
|---|---|---|---|---|
| dark-768-catholic | 50 | 734,429,750,458 | right-edge page ruler ticks | animated ruler |
| light-1440-catholic | 29 | 1406,442,1422,471 | right-edge page ruler ticks | animated ruler |
| dark-360-baptist | 3371 | 223,216,358,241 | hover tooltip «En palabras simples» | fade state, see below |

- Ruler: crop of dark-1440-catholic (base / new / new2) shows the ticks with different lengths (the last tick is a bar in base and new, a dot in new2). It is the same noise inside the same build. new vs new2 (same build, two runs) also differs in 3 of 16 files, all ruler-only: dark-1440-catholic 38 px (1406,442,1422,471), dark-768-baptist 47 px (734,409,750,439), light-768-catholic 41 px (734,429,750,458). Conclusion: ruler noise is run-to-run noise, not caused by the change.
- Tooltip in dark-360-baptist: base shows the tooltip fully opaque, new and new2 show it at low opacity (new vs new2 = 0 px, so both runs agree). Cause: `src/components/ui/tooltip.tsx` has `delay-300` + `duration-150` and the shot is taken 300 ms after hover, which is exactly the start of the fade, so the capture is racing the transition. The file is unmodified in `git status`, and the other 15 pairs match to the pixel. Judged capture timing, not a regression, but I cannot prove it from stills alone (see doubts).

## 2. PENDING (rest-view vs pending-view in new/, 16 keys)

Every key has exactly the same three kinds of region, nothing else:

| Region | bbox example (light-1440-catholic) | size | px |
|---|---|---|---|
| Tooltip box (text «En palabras simples» to «Simplificando…») | 1233,240,1368,266 | 135x26 | 3502 (3368 to 3505 across keys) |
| Ring (14 px, now dashed) | 1347,213,1361,227 | 14x14 | 83 (75 at 390 px) |
| Ruler ticks (only at 768 and 1440) | 1406,442,1422,497 | 16x55 | 153 to 368 |

At 360/390 only two regions exist (tooltip + ring). Ring bbox is 14x14 (13x14 at 390) in all keys, same position as the resting ring, so nothing else changed in the paragraph. No text moved, no layout shift, no region over the paragraph text or the rest of the page.

Crops inspected: light-1440-catholic (4x) and dark-360-baptist (5x). The dashed ring (about 8 dashes) sits on the same centre and diameter as the solid ring, is legible in both themes, and visibly lighter in weight than the solid ring (expected). The tooltip reads «Simplificando…» fully opaque at 400 ms (dark ink on light, light ink on dark, as the approved tooltip). Source string: `simplifier-text.ts` `pending: "Simplificando…"`.

## 3. MESSAGE (error / limit)

Viewed: light-360 and dark-360 (both routes, both codes via the 8-up contact sheets), dark-390 baptist, light-768 catholic, light-1440 baptist, dark-1440 catholic, plus all 8 images at 390 and at 360 in contact sheets.

- Colour: sampled message text pixels are exactly (97,92,84) = `#615c54` = `--color-ink-3` in light and (154,154,150) = `#9a9a96` = ink-3 in dark. Not the body ink-2 (`#2a2620` / `#d0d0cc`). Matches `text-ink-3` in `simplified-panel.tsx`.
- Contrast (text vs sampled paper, my numbers): light 4.98:1 against the median grain pixel, 4.52:1 against the darkest 1 % of grain pixels, 4.21:1 against the single darkest grain pixel; flat-token ratio is 5.27:1. Dark 6.16:1 median, 5.97:1 worst. Light passes 4.5 on typical background, with little margin; the textured paper makes isolated pixels dip below 4.5. This is the same ink-3 as the existing «Simplificado por IA» label and the footer buttons, so it is the approved palette, not a new problem.
- No clipping or overflow at 360 / 390: message wraps to two lines («...Probá de nuevo más tarde.» / «Llegaste al límite de simplificaciones de hoy.»), panel and left rule contain it, no horizontal scroll visible.
- Header: selector «Más claro / Muy simple» (Más claro selected) + «Simplificado por IA», same as the approved open panel (`tmp/simplifier/open-1440.png`): same selector box, spacing, label position. At 360 the label wraps under the selector, as in the approved narrow layout.
- Footer: «Ocultar» aligned to the message's left edge (the -ml-2 / px-2 offset works), «Reintentar» next to it at 8 px gap. Text centred in buttons (`inline-flex justify-center`). Present in every ai_provider_down image (16 of 16 checked in contact sheets), absent in every ai_daily_limit image. Correct.
- Content below: citation line, rule and next paragraph sit below the panel with a normal gap in all inspected images; nothing overlaps the panel or the footer.
- The tooltip «En palabras simples» stays visible beside the filled ring while the message is shown, because the pointer is still on the ring in the shot; same as the approved open state.

## 4. Defects and doubts

No defects found.

Doubts (none blocks):

1. Low. `dark-360-baptist-rest-view.png`, region 223,216,358,241: tooltip opacity differs from base (3371 px). Almost certainly the 300 ms hover delay racing the 150 ms fade at capture time; `tooltip.tsx` is untouched. A rerun with 450 ms wait would settle it.
2. Low. Message text on light paper is 4.52 to 4.98:1 (4.21:1 on the darkest single grain pixels). Passes AA on the typical background, little margin. Same token as the rest of the muted text.
3. Info. The level selector in message states is active (still clickable); stills cannot show whether it does anything useful there. Behaviour question, not visual.
4. Info. The dashed ring is a still frame; whether it rotates or pulses cannot be judged from PNGs (spec says nothing else moves).
