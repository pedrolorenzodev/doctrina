# Structure v2 — progress

Base: copy of QXgSeToG4DgDbUqms7rhCd (entrances) in this folder; v1 (EDPtLnLWu2fHscbBgmu7rM live files) under v1/.
Publish target: https://claude.ai/artifact/EDPtLnLWu2fHscbBgmu7rM (read 2026-10-21).

## Items
- [x] base.js: Objeciones screen in tree + crumbs, list cascade/FLIP (sura-clon), title entrance only, page fade on, mini year label, x-options (tree, theme, trad, contrast, gap, scroll/Lenis 1.3.26)
- [x] base.css: centring, contrast/gap variants, ghosts, lenis css
- [x] s02: práctica sources open window; transubstanciación term
- [x] s03: Objeciones section 3 + «Ver las 7 objeciones»; transubstanciación term; vf centring
- [x] s04: crumbs → Objeciones page; Fuentes citadas dates; prev/next labels
- [x] s09: no Greek names; new descriptions
- [x] sob.html: Objeciones page with switcher (5 traditions)
- [x] index.html shell: v1/v2, Objeciones screen, six test selectors, notes
- [x] verification: 40 screen shots + 8 shell shots, 0 console errors, 0 overflow, centring measured, every option verified, reduced motion verified
- [x] published 2026-10-21 as version 3 of EDPtLnLWu2fHscbBgmu7rM (v1 under v1/)

## Notes
- Lenis 1.3.27 is <2 weeks old (2026-10-15): using 1.3.26 (2026-08-05).
- Light contrast on textured bg measured: current ink-3 4.3 median (4.0 darkest) → fails.

## Iteration 2 (Pedro's notes, notas-v2-pedro.md)
- [x] 1 cascade on 02 objection rows (open: height + sura enter; close: sura exit 180 ms then height); audit added .ans-l, .cg-side, .pt-t tbody, .pm-a, .fq, .gr tbody, .qf-d, .ob-own, search results
- [x] 2 per-item reveal on scroll (batched, 60 ms stagger); FLIP arms new off-screen items instead of animating them
- [x] 3 trap recorded below
- [x] 4 open state on modal triggers (.is-open + aria-expanded)
- [x] 5 sidebar unfold default + collapse (120 ms fade, 160 ms fold, interruptible)
- [x] 6 theme: arc corner, arc from button, soft wave, feathered edge (+ fade baseline)
- [x] 7 tradition: Deslizar + one persistent indicator (retargets mid-move) default; fade baseline
- [x] verification: 40 screen shots + shell shots, 0 errors, 0 overflow, centring, each option checked (check/behave2.js), reduced motion; republished as iteration 2

### Trap: fast drag on the living ruler (note 3, not fixed)
Every pointermove that changes the set of witnesses inside the window re-renders the list (innerHTML) and runs a full FLIP. A fast drag changes the set several times within one 380–420 ms animation, so each step: cancels the running moves and enters (items snap, then restart their 120 ms delay, so they stay invisible while dragging), measures "before" from a layout that is already mid-change, spawns new exit ghosts while the previous ones are still fading (we counted 10 ghosts for 6 items), and restarts the list-height animation from the wrong height. Nodes are recreated on every render, so no item keeps its own running animation. For the real build: keep list nodes persistent by key (React keys), filter on a committed value (on drag end, or after ~100–150 ms without change) or at most one FLIP per frame, and never restart the enter animation of an item that is already entering or visible.

## Iteration 3 (notes 8–14)
- [x] defaults: contrast b, theme button, gap c, scroll apenas (base XDEF + shell first option; storage key bumped to dz-shell-v3); «Trazo firme» removed
- [x] tradition content directional: exit 140 ms toward the opposite side, enter 260 ms from the chosen side, 16 px + fade; rapid clicks collapse to the last one; indicator unchanged
- [x] 03 «Por qué» caption uses free width (minmax(220px,1fr)); D.glue makes the space before any locator number non-breaking (captions, sources, witness links, passages, citation window)
- [x] sidebar mark selector: actual / viaja / raya / pausa; animates on client switch (Objeciones) and across page loads (previous position kept in sessionStorage); no flash at start or end (checked frame by frame)
- [x] verification: 40 shots + shell, 0 errors, 0 overflow, centring, behaviour (check/behave3.js), reduced motion
- [x] republished
- [x] 3b: 03 «Por qué» captions share one shrink-to-fit column (subgrid, fit-content(340px); 300px ≤1099; full width ≤720): width = widest caption content (221px), same x, every line on one line 360–1440
- [x] 3c: 03 «Por qué»: quotes +30px left (col 1 640→670 so text width unchanged at 1440), captions +60px (indent + 30), +30px before the closing paragraph (34→64); mobile: quote and caption indented 30, +30 spacing; measured 360–1440 dark/light, no overflow, caption lines unchanged

## Iteration 4 (notes 21 and 22, Codex research)
- [x] 21: in-page selector «que se note el detalle»: actual / la primera vez (A) / avance fijo (B, sticky 64 px peek, hidden while the detail is in view) / solo si no se ve (C); A and C scroll with 360/320 ms ease-reveal, never up, cancel on wheel/touch/keys, keyboard activation focuses the detail heading; reduced motion = instant, no animation. The old «debajo / en su fila / al costado» switch is gone (Pedro: keep below).
- [x] 22: dating rows rewritten with Codex's date grammar, each naming the dated object and the scholar (source-link style, window «Quién es»: name, field, position, work, life; living ones' mini line runs to 2026; Decrept: birth only; Lechner: «Nacimiento: no publicado», no line). Primary: tradition, Decrept, Pervo, Barnes, Vinzent ×2; behind «Mostrar las 9 de la historia del debate»: Zahn, Harnack 1878/1897, Lightfoot, Lake, Joly, Schoedel, Hübner, Lechner. Format selector: two lines (default) vs Codex one-line «·»/«—» (on the slop list). «Desde la década de 1970» row corrected (Vinzent dates the collection, not a forgery). Axis now 95–200.
- [x] verification: 40 shots, 0 errors, 0 overflow, centring, behaviour (check/s09t.js, s09c.js, rm9.js)
- [x] 4b verifier corrections: Decrept no birth year, RSR 82/3; Lechner b. 1962, German, row reworded as Schreiber's grouping (still behind «Mostrar»); Pervo = death; Barnes per abstract; Schoedel «Nació en 1929 o 1930; murió en 2024»; Harnack 1878 «según la mayoría… como lo recoge», 1897 = 110–117 / quizá 117–125 (p. 406), pp. 400–406; Lake = critics' tendency; Vinzent «después de 170, a más tardar hacia 177»; no «vive»/abbreviations; «años 140»; Hadrian reign band (117–138) drawn and labelled on Harnack 1878 (default, to approve). Vinzent print year 2024 vs online 2023 not confirmed.
- [x] 4c–4e trust rule: removed unverified datings (Schoedel, Joly, Pervo, Vinzent ×2), Joly out of the 1970s row; visible: tradition, Decrept, Barnes; behind «Mostrar las 7»: Zahn, Harnack 1878, Lightfoot, Harnack 1897, Lake, Hübner, Lechner

## Final round (Pedro's notes 17–21)
- [x] sidebar mark «Viaja» default; 09 «Avance fijo» default, strip link = detail link, scroll-scrubbed hand-off; 09 dates one chronological list (merge via FLIP); Harnack reign band kept
- [x] verification: 40 shots + shell, 0 errors, 0 overflow, centring, strip tests (slow/fast scroll, ±1 px at boundary, resize, selection change while shown, reduced motion) in check/strip.js
- [x] republished

## APPROVED STATE (v2, Pedro 2026-10-21) — for the DESIGN.md writer
Source: https://claude.ai/artifact/EDPtLnLWu2fHscbBgmu7rM (latest version). Files: estructura-v2/{base.css, base.js, s02, s03, sob, s04, s09}.html. Values below are the shipped defaults (base.js XDEF / CSS).

Structure
- «Objeciones» is its own page per tradition (sob.html): sidebar child of each tradition at the level of «Pasajes», normal selected state, ancestor while 04 is open; breadcrumb and 04 footer lead there; 03 «Objeciones» shows 3 + btn-go «Ver las N objeciones». Tradition switcher on that page (none on 04). Other traditions show title-only rows for now (accepted).
- 04 footer: «Anterior: todas las objeciones» / «Siguiente objeción» + destination title.
- 09 letters: no Greek name; short neutral description per letter (ignatius-letters-descriptions.md) ending in a short quote whose locator opens the citation window (label «Traducción de Doctrina asistida por IA, desde la edición de Kirsopp Lake (… 1912)»).

Motion (all off under prefers-reduced-motion)
- Page title entrance «Título»: header block children fade 0→1, 700 ms, cubic-bezier(0.33,1,0.68,1), 80 ms apart, no movement.
- Page change: main content fades in 220 ms ease-out; header and sidebar solid.
- List cascade (sura-clon): --ease-reveal cubic-bezier(0.22,1,0.36,1); entrance per item the first time it scrolls into view (IntersectionObserver rootMargin 0 0 -15% 0), items already visible at load don't animate; batch stagger 60 ms; 420 ms; rise 8 px. FLIP on change: moves 380 ms; exits fade + scale(0.96) 180 ms as ghost copies; enters after 120 ms, 40 ms apart, max 8 steps; list height animates (after the exit when shrinking). New items that land off-screen wait for the scroll entrance. Applied to every list of equal items (see LISTS in base.js), 02 objection rows on open (box height 380 ms + enter) and close (exit 180 ms, then height 380 ms), search results, 09 dates merge.
- Sidebar branch: «Despliegue» open: height 220 ms ease-reveal, children fade 200 ms, 20 ms apart (max 8); close: children fade 120 ms, height 160 ms cubic-bezier(0.4,0,0.2,1); interruptible from current height.
- Sidebar current mark: «Viaja»: one mark (bg accent-weak + 2 px inset accent bar) slides from old row to new, 360 ms ease-reveal; handed to the row's own style with no blink; also across page loads (previous position kept).
- Theme change: «Arco botón»: View Transition, new theme revealed by a circle clip-path growing from the theme button, 650 ms cubic-bezier(0.65,0,0.35,1); no animation where View Transitions are unsupported.
- Tradition switch (Objeciones): one persistent indicator travels between tabs 340 ms ease-reveal, retargets mid-move, tab widths reserve bold; content directional by tab order: old exits 16 px toward the opposite side + fade, 140 ms cubic-bezier(0.4,0,1,1); new enters 16 px from the chosen side, 260 ms ease-reveal, list 30 ms after header; rapid clicks collapse to the last.
- Smooth scroll: Lenis 1.3.26 (jsDelivr), «Apenas» lerp 0.3, wheel only (syncTouch false), wheelMultiplier 1, not created under reduced motion; prevented in sidebar, citation window, reader, search, tab strip. In-page jumps use lenis.scrollTo.
- 09 timeline detail: «Avance fijo»: 64 px strip (sticky to the viewport bottom inside the timeline block) with name, date, one-line summary and the detail's own page link; enters 240 ms (opacity + 8 px), content crossfade 160 ms; opacity scrubbed by scroll as the detail arrives (from 40 px before to 30 px after the hand-off point), reduced motion = on/off with hysteresis.
- Citation/glossary triggers keep their hover look while their window is open (.is-open + aria-expanded).

Colour, type, spacing
- Light contrast «Prosa oscura»: light-mode --ink-3 #615c54 (≥4.7:1 on the textured paper), grey serif prose (.esc-d, .obj-s, .wl-r, .srcl-desc) #4f4b44 (≥6.1:1); dark mode unchanged. «Trazo firme» rejected.
- Section spacing «Mucho aire»: .sec margin-top 140 px desktop, 96 px ≤720 px (was 84/64); only between ruler sections.
- Text centred on both axes in buttons, chips, tabs.
- Locator numbers never break from their word (non-breaking space before digits in captions, sources, citation window, dates).
- 03 «Por qué»: quotes indented 30 px; author/source blocks share one shrink-to-fit column (subgrid, fit-content(340 px); 300 px ≤1099 px; full width ≤720 px), +30 px gap (78 px column gap, quote column 670 px); 44 px before the first quote; 64 px after the last.

Content patterns
- 02 «La práctica» sources: faint grey, dotted underline at rest, hover + citation window (quote where the repo has Spanish text).
- «transubstanciación» is a glossary term (Trent XIII cap. 4).
- 09 «Fechas y autenticidad»: one chronological list (earliest estimated date first; a range sorts by its first year). Collapsed: tradition c. 107–110, Decrept julio de 116, Barnes años 140; «Mostrar las 7 de la historia del debate» interleaves Lake, Zahn, Lightfoot, Harnack 1897, Harnack 1878, Hübner, Lechner. Each row: date (Codex grammar: «c. 110», «105–117», «años 140», «época de Trajano (98–117)», «segunda mitad del siglo II») + dated object + scholar as source link + publication year. Scholar window «Quién es»: name, field, position, work; life «Nació en 1942» (no «vive», no abbreviations), mini line to today for the living. Non-numeric reign dates drawn as the reign span with its years written (Harnack 1878: «reinado de Adriano, 117–138»), approved. Title format: kept, Pedro to decide later (Codex one-line «·/—» alternative still in the selector). Only verifier-confirmed datings shown (Pervo, Vinzent, Schoedel, Joly hidden).

Still open (not part of approval): 09 date-title format; Ignatius letter translations unreviewed by Pedro; tree «cascade/sura» and other non-chosen options remain only as comparison.
