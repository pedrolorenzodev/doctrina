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
