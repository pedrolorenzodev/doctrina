# Logo and favicon

Intent (Pedro, 2026-11-04): a brand mark for the app, first of all for the browser tab (favicon, must work); possibly also for link previews (WhatsApp, iMessage, Slack), the home-screen icon and the header lockup (open to analysing it). A deep research session first (references, real people's feedback, design patterns), then a proposal Artifact with ~24 variants. Origin: ROADMAP «Tab icon (favicon)», 2026-11-01 note.

Acceptance: a private proposal Artifact with ~24 variants in three families (typographic monogram, abstract/geometric sign, reinterpreted Christian symbol), each shown at 16/32/64/180 px in light and dark tab strips, as a WhatsApp preview and as a header lockup, with a «discarded and why» section. Every research claim tagged. Pedro picks; nothing is implemented in the app in this run.

Out of scope: touching `src/` (another session is working there), choosing the final mark, renaming the product, the favicon wiring (`app/icon.svg` etc.) until Pedro picks.

## Plan (/plan-run, 2026-11-04)

- Type: new combination of `research-fanout.md` (one agent, one area at a time) and `design-proposal.md` (last validated 2026-10-21 and 2026-10-29).
- Goal and done-criterion: `docs/research/logo/` holds the research (technical spec of favicons and previews in 2026, a survey of reference favicons and marks, symbol neutrality across traditions, design principles for tiny marks and what practitioners say, a variant brief); the Artifact is published and every variant was rasterised at 16 and 32 px and looked at.
- Bounded by: DECISIONS 2026-10-05 «Design principles» (AI-slop list: no crosses as decoration, no gold on navy, no cream + terracotta, no gradients, no emoji, no stock cathedrals/Bibles/hands); DECISIONS «Trust and neutrality» (AGENTS.md: no claim without a source, each tradition in its own words, Fathers never assigned to a modern tradition → a symbol tied to one tradition is marked, not used as the neutral default); DECISIONS 2026-10-29 «Proposal quality: real patterns» (use the real tokens, fonts and texture); ROADMAP «Tab icon»: «a sign, not the provisional name» (the product name may change, so a letter monogram is one family among three, flagged as name-dependent).
- Out of scope: see above.
- Setup:

  | Role | Model · effort | Writes | Starts after |
  |---|---|---|---|
  | Researcher (one agent) | Opus · high | `docs/research/logo/*` only | usage check |
  | Coordinator (this session) | Sonnet 5.5 | the Artifact source under the scratchpad, this file | researcher ends |
  | Verifier (optional, one agent) | Sonnet · high | `docs/research/logo/verification.md` | variants built; only if Pedro wants the claims checked |

  One agent at a time (Pedro, 2026-11-04). Palette: free (Pedro); variants inside the site's system are marked as such.
- Research areas (in this order, search-heavy first): (1) technical spec 2026: favicon formats and sizes, SVG with `prefers-color-scheme`, ICO, apple-touch, maskable, Next.js 16 file conventions (read `node_modules/next/dist/docs/`), browser tab rendering incl. Chrome, Safari, Firefox and Dia/Arc, link-preview image rules for WhatsApp, iMessage, Slack, X, Google; (2) survey of favicons and marks of comparable products (Bible and theology sites and apps, long-form editorial and publishing, reference works, research and study tools) with screenshots at tab size; (3) symbol vocabulary and neutrality: Chi-Rho, ichthys, IHS, Alpha-Omega, anchor, codex, scroll, lectern, guillemets, pilcrow, section sign, manicule, parallel columns; who uses which, what each tradition associates with it; (4) design theory for tiny marks and what practitioners and users actually say (critiques of religious-brand clichés, favicon postmortems, rebrand reviews, forum threads); (5) synthesis: `variant-brief.md` with ~30 candidate directions, each with the reference and source it comes from.
- Expected cost: one Opus agent with web and Playwright was ~5 session points per 11 minutes (`agent-ops.md`, 2026-10-19); this run about 45–60 minutes. Pedro's weekly cap for the day is 90 %.
- Risks and open questions for Pedro: (a) the name is provisional, so the monogram family may die with it; (b) shared WebSearch quota; (c) the other session edits the repo at the same time: nothing here touches `src/`, `ROADMAP.md` and `DECISIONS.md` are edited narrowly at the end only.
- Checks during the run: usage-guard before launch and every 5 min; the researcher's Progress block and file mtimes every ~15 min; grep the outputs for forbidden sources at the end.

## Status (2026-11-04)

- Research done by one Opus agent (26 min, 175 tool calls, ~340k tokens): `docs/research/logo/` (README, 01–05; 90 sites rasterised in `refs/`, third-party marks kept for study only).
- Proposal published (private): https://claude.ai/artifact/GTX6zW4qbxnKpvsYHYDvWx. 25 variants in four families (the research found a fourth: bookish sign or Greek letter). Source: `docs/research/logo/source/` (generator, template, build); SVGs of the ink colourway: `docs/research/logo/variants/`. Glyphs are outlined from Newsreader and Source Serif 4; the two thetas are drawn geometrically (the serif theta's bar clogs at 16 px).
- Every variant was rasterised at 16 px (2×) on Chrome's light and dark tab colours and looked at; the page was shot at 1280 (light, dark) and 390 with no console errors or horizontal scroll. Not checked: Dia, Safari and Firefox tabs (only Chrome's colours are simulated), the favicon wiring, ICO output.
- Decisions the agent took without Pedro (to confirm): 25 variants instead of the planned ~24; WhatsApp preview copy («Cada tradición, con sus propias palabras.») is example text, not site copy; no domain shown because none is defined; Greek letters from Source Serif 4, not Gentium Book Plus (the serif theta of both has a serifed bar).
- Next: Pedro picks 2–4; then colourways, 180/512 px, the 1200×630 card and the wiring (`app/icon.svg`, `apple-icon`, `opengraph-image`) after reading Next's docs; check in Dia.

## Round 2 plan (/plan-run, 2026-11-04): refine D3 «Comillas»

- Pedro's feedback (verbatim in his words, understanding given in chat, not yet confirmed): D3 is the one that convinced him most (simplicity, closest to the site's goal) but «me parece muy AI-SLOP por ahora». His picture: tile + ink in most places; in the header and physical places inside the site, no tile and the opposite colour to the theme (dark theme → paper, light → ink); «OJO… no tomes esto como decisión absoluta»: paper tile is also interesting. One share image for the whole site; domain `doctrina.elpepo.dev`. Wants D3 variants improving or taking similar-but-different angles.
- Goal and done-criterion: `docs/research/logo/round-2/` with the research; an updated proposal (same page, round 1 kept beside) with ~16 D3 variants across sign and container, the bare-in-site / tile-in-favicon system shown in both themes, and the site-wide share card with the domain.
- Bounded by: round 1 (above); DESIGN §7 «giant decorative quotes», «icons in coloured squares»; Trust and neutrality (a sign tied to a tradition is marked).
- Setup: one Opus researcher (writes only `docs/research/logo/round-2/*`), then this session draws and publishes. One agent at a time.
- Research areas: (1) history of the guillemet and of scribal quotation signs, above all the diple (>) that marks Scripture quotations in early Christian manuscripts, with neutrality verdicts; (2) brands and favicons made of quotes, guillemets, chevrons or brackets, and what they resemble (rewind, back, code); (3) what practitioners say makes a logo or icon read as AI-generated or generic, and tile and container alternatives; (4) how brands use a tile favicon with a bare in-page mark, dark-mode inversion with `currentColor`, and the Next.js wiring; (5) a D3 variant brief of ~16 directions.

## Round 2 status (2026-11-04)

- Research (one Opus agent, ~36 min, 202 tool calls, ~430k tokens): `docs/research/logo/round-2/` (06 quotation sign and diple, 07 quote/chevron marks in brands, 08 AI-slop and containers, 09 two-form system and share card, 10 variant brief; 153 rasters in `refs/`).
- Proposal: same Artifact, version 2: round 2 on top (C0 control + 15 directions, «Una marca, dos formas» stage), round 1 kept below. Sources: `docs/research/logo/source/` (`generate-variants-round-2.py`, `proposal-template-v2.html`, `round-2.css`, `round-2.js`, `build-proposal-v2.py`); SVGs: `docs/research/logo/round-2/variants/`.
- Verified: each variant rasterised and looked at at 16 css px on 2× (32 device px) and at 32; page shot at 1280 (light, dark) and 390, no console errors, no horizontal scroll. Not verified: Dia, Safari, Firefox; trademark look-alikes; no code in `src/`.
- Agent's calls, to confirm with Pedro: V3 «Cuña» is drawn smaller and with a slight taper, and at a glance changes little from D3 (said so in its card); the paper tile is not warmed (research warns it may read as «AI beige»); the share card carries the wordmark and no domain (the app shows the domain under the card, as drawn in the mock); the mock tagline «Cada tradición, con sus propias palabras.» is example text. Research notes outside this folder to fix when convenient: `03-symbol-neutrality.md` §6 (Bade/Alde printers), `05-variant-brief.md` D3 and §0.2 (`#6b7fd6` fails on `#dee1e6`, 2.84), and `src/app/[lang]/layout.tsx` has no `metadataBase` (needed for the share image).

## Retro

(filled by /retro)
