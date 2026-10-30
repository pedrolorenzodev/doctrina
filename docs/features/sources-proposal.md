# «Fuentes» redo: analysis and proposal plan (2026-10-30)

Pedro's brief (2026-10-30): look at the approved designs he liked most across the repo's pages (his approval notes), and from that build an artifact with design directions varied among themselves and a MUCH better UI/UX, clean and useful for what the user needs on THAT screen («qué espera ver y qué necesita hacer el usuario en esta página?»). The screen was not named: the agent assumed **«Fuentes»** (DECISIONS 2026-10-29: the first proposal is «hecho a medias» and «muy feo»; redo it on the design system with a simple filter by TYPE of source). Pedro can redirect.

## Data (real, from the registry)
`docs/research/proposals/sources-v2/source/sources.json`: the 44 sources the old proposal carried (id, kind `k`, title `t`, author `a`, date text `d`, `rb` = traditions that recognize it, licence, edition `ed` + year, years `y`/`ye`). Kinds: church-father 21, confession 9, theologian 4, liturgy 3, catechism 3, council 2, papal 1, scripture 1. 34 distinct authors; Augustine alone has 7 works. Fathers have empty `rb` (neutral: never assigned to a modern tradition).

## What the reader expects and needs on «Fuentes» (agent's analysis)
1. Find one source fast (by author, by title, by type). 2. Understand what it is: who, when, which edition, how reliable (licence, who recognizes it) without opening it. 3. Open it to read (full-text reader). 4. Browse to discover: by era, by tradition's own documents. Not needed: a ranking, a conclusion, a summary of what it teaches.

## What Pedro approved and liked (DECISIONS), reused
Passages «Pliego» (G): generous space per block, left ruler; the dated source list with one shared axis (04 «Fuentes citadas», 09 «Sus escritos»); the tradition switcher «Deslizar»; the home's ruler of years that drives a list; the history indexes «A with C's filter, intro ≤ 3 lines»; the glossary index; the doctrine fingerprint and living ruler; subtle smooth motion; wall texture and the three type faces.

## Directions planned
Hoy (baseline, 44 rows in load order) · A «Pliego por tipo» · B «Dos mil años» (timeline first) · C «Tabla de consulta» · D «Voces» (tradition tabs) · E «Autor y sus obras» (master-detail).

## Result
Published 2026-10-30: https://claude.ai/artifact/TwjNU3FuKaSJDgTfL5nwUB (version 1), archived with its generator in `docs/research/proposals/sources-v2/` (`source/template.html` + `build.py` + `sources.json`; run `python3 build.py` inside `source/`). Six views on the real site frame (top bar, tree, wall texture, type roles): Hoy (baseline), A Pliego por tipo, B Dos mil años (draggable year window), C Tabla de consulta (sortable, searchable), D Voces (tradition tabs with «Deslizar»), E Autor y sus obras (master-detail). All have the filter by type (counts included). Selectors in the proposal use the neutral fill from the selectors proposal. Nothing decided. Verified in headless Chromium only (no console errors); mobile layout of each view not screenshotted, only built with breakpoints. «Reconocida por» shows text, never colour; Fathers show nothing (site rule).
Weekly usage when finished: 18 % (cap for this task: stop at 19 %).
