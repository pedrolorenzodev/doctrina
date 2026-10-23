---
paths:
  - "src/**/*.tsx"
  - "src/**/*.css"
---

# UI rules

- Read `docs/DESIGN.md` first. If it doesn't exist yet, the design direction isn't approved: don't implement UI, apply the main rule in `AGENTS.md` (proposal with live demos).
- Zero hardcoded style values: everything comes from the `@theme` tokens in `src/app/globals.css`. If a token is missing, add it first and document it in `DESIGN.md`.
- Tailwind in the element's `className`, always. Forbidden: `style={{}}`, CSS Modules, `<style>` and `@apply` in separate files. Single exception: a value computed at runtime, passed as a CSS custom property.
- Excellent responsive behavior at every size: mobile-first, Tailwind's default breakpoints, verified on mobile, tablet and desktop. How to split the work between sizes:
  - similar UI → all sizes together;
  - radically different UI → separate components;
  - same markup with very different layout → passes in increasing order, mobile first.
- Search before create: `npm run components <word>` lists existing components; reuse or extend one before writing a new one.
- Primitives with shadcn when a suitable one exists; install it with its CLI when needed.
- Don't extend preventively: tokens, components and abstractions only when a concrete piece needs them.
- Motion: every non-trivial animation or interaction goes through the main rule (proposal first). Respect `prefers-reduced-motion`. A motion library is chosen only in a proposal. How much motion Doctrina has is part of the design direction, not a given.

## Quality floor (carried from v1/v2)

- Visible keyboard focus. Text contrast ≥ 4.5:1 in every theme (v2's lightest grey failed it).
- Works at 360px with no horizontal page scroll. Never squeezed parallel columns on mobile.
- `lang` attribute on original-language text (Greek, Latin, Hebrew).
- Tap targets ≥ 44px effective on touch (v2's citation numerals were 10×15px).
- Print stylesheet: hide chrome, show sources inline.
- Sentence case for all UI copy; Spanish-first.
- Text in every button, chip and tab is centred on both axes: check it in each block's screenshots before calling the block done (Pedro, 2026-10-20: a small error that is costly; seen in 03 «Videos» filters).

## Before calling a block done (Pedro, 2026-10-20)

Check each item on the block's screenshots and in the browser; the independent critique pass (`AGENTS.md`, rule 13) gets this same list and checks it item by item.
1. Edge states: every counter, button and list in its last state. A «Mostrar N más» disappears or changes when nothing is left (never «Mostrar 0 más»); empty and single-item lists tried.
2. Centring: text in buttons, chips and tabs centred on both axes (rule above).
3. Decided patterns applied everywhere they belong: each agreed animation or hover (list cascade, link hover, the "Ola" ruler…) on every component of that kind, not only where it was first tried. Patterns: `docs/DESIGN.md`.
4. Hover and focus on everything clickable, in its pattern's style: links, rows, buttons, sources.
5. Smooth scroll on every in-page navigation (index links, the right-edge ruler, links to sections); none under `prefers-reduced-motion`.

## Pixel-perfect verification (Pedro, 2026-10-22)

- Build UI in small blocks (one component or section). Before calling a block done, its agent launches a Sonnet 5.5 verifier (Agent tool, model `sonnet`).
- Reference: the approved design's code, archived in `docs/research/proposals/site-clean/` (and `reader-05-06/`, `structure-v2/` for states it lacks), served locally. Same viewport (360, 390, 768, 1440), theme (light, dark), fonts loaded, and state (open, hovered, filtered…) on both sides.
- Static: screenshot the block's region in both, diff with pixelmatch; report the share of differing pixels and an overlay image. Anything above anti-aliasing noise is a defect to fix, not to explain away.
- Motion: drive time explicitly (Playwright clock, or pause CSS/Web Animations and set `currentTime`) and compare frames at fixed points (0, 25, 50, 75, 100 % of each animation, plus interruption mid-way); durations and curves must match DESIGN.md.
- Behaviour: every interaction of the block in the browser (keyboard, touch emulation, reduced motion, edge states from the checklist above); no console errors, no horizontal overflow.
- The verifier writes its result next to the block's feature doc; the block is done only when it passes, then Pedro approves.
