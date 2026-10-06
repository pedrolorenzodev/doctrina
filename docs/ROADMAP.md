# Roadmap

## Current state
> Overwritten at the end of every session. 15 lines max.

**2026-10-05.** Project restarted. Done: Next 16 scaffold (`src/` structure, no pages yet, `npm run verify` passes), the agent doc system, the git guard hook, and the handoff material carried over (`data/`, `docs/research/`). No UI exists and none may be built until the page structure and design direction are approved.
Open doubts: where the data-access layer lives; `data/scripts/` not adapted (don't run).
**Next step:** Pedro reviews UX round 2 (P1–P4) and picks a structure or a mix.

## Now

1. **Decide: page structure / navigation.** Pedro's feedback on [UX round 2](https://claude.ai/artifact/CiD9tLWApMVoskyJG2KwDV): P1 sidebar tree, P2 editorial landing, P3 text + "Conexiones" rail, P4 v2 polished (summaries in `DECISIONS.md`). Iterate through the main rule (proposal page, 2–4 options). Inputs: round 1 verdicts and design principles in `DECISIONS.md`, `docs/research/`.
2. **Design direction approved → write `docs/DESIGN.md`** (tokens, type, color, spacing, motion, components, don'ts). Consider Google Labs' DESIGN.md format (alpha; drop it if it gets in the way).

## Next

- **Decide: where the data-access layer lives.** CONTEXT §8 says `src/data/*` (async `getDoctrine`, `getVerse`, `getFather`…); the base structure has no such folder and `lib/` must stay domain-free. Options: per-feature `data/` folders, a shared domain layer between `features` and `components/ui`, or a dedicated feature. Decide before the first page reads data.
- Port the screenshot tool (`tools/shot.mjs`, Playwright, from v2) and add an `npm run shot` script, with the first UI block.
- Adapt `data/scripts/` before running them: outputs still target v2's `src/content/data/`; raw downloads are expected in `data/raw/src/` (copy them from `~/Desktop/dev/doctrina-v2/data/raw/src/` or re-download, recording the date).
- Eucharist pilot in the chosen structure, block by block, each verified and approved.
- Verify flagged content: `docs/research/content-notes.md`, `docs/research/history-notes.md`, plus v2 bugs: Spanish locators mixing English ("Tratados on John", "Decreto on the Eucharist"); Ignatius *Smyrnaeans* context (6.2, 7.2) and the Greek in the round-2 mockups, written from memory.
- Search ⌘K with "Recientes" and "Seguir donde dejaste".
- Horizontal general timeline (T1, one density, the component scrolls sideways).
- Attribution page (STEP Bible, OpenGNT, SermonIndex, "WEB" trademark rule).
- Validation hooks: PostHog events, fake door, one-question survey, email capture.
- **Decide:** second doctrine to test that the model generalizes (proposed: justification).
- **Decide:** per-locale URL slugs (`/es/doctrinas/eucaristia`).
- **Decide:** numbering conventions (psalms Hebrew vs Vulgate; Apology of the Augsburg Confession Triglotta vs Kolb–Wengert).

## Later

- **Supabase + AI phase** (after the UI/UX is settled; plan in `PROJECT.md`, "Data architecture"): verify Supabase limits and prices; import scripts to Postgres; Auth + RLS for user data (recents, bookmarks, notes, progress, error reports, email list); semantic search with pgvector; internal AI tooling with human review.
- Remaining launch doctrines (justification, papacy, sola Scriptura, Mary), then the stretch set.
- Spanish translations of patristic texts (AI-assisted draft + human review, labelled as translation).
- Videos: 7 of 15 Eucharist objections have none; confirm the affiliation of the small channels flagged in `content-notes.md`.
- Payments (Gumroad/Polar + Mercado Pago) after validation.
- **Decide:** name and domain ("Doctrina" is provisional).
- **Decide:** Anglican as a sixth tradition.
- **Decide:** patristic cutoff (conventional: John of Damascus, d. c. 749).
- **Decide:** reviewer recruitment and the "serious review" mechanism (required before launch).
- **Decide:** the unreviewed brainstorm groups (Learning, Video/audio, Trust).
- **Decide:** connected-doctrines format.
- Candidates from the v1 plan, never re-confirmed for the deep-study vision: "Report an error" on every citation; a source registry page (every source, its license, what cites it); tradition pages; an about / method page (neutrality policy, reviewers); a footer with method, sources and licenses (v2 critique); a language switch that keeps the reader's place; a persisted Auto / Light / Dark theme; print stylesheet.
- Maybe: geographic map; user-selectable palettes; custom smooth scroll (Lenis) with a desktop scrollbar, weighed against accessibility.

## Done

- 2026-10-05 · Restart: scaffold, doc system, git hook, handoff carried over.
- 2026-10-05 · UX rounds 1 and 2 (verdicts and summaries in `DECISIONS.md`).
- 2026-10-03 · v2 prototype in `doctrina-v2` + research (niche, analogs, data licenses, content and history notes, critique).
- 2026-10-02 · Vision correction to deep study; design round 1 judged too thin.
- Before 2026-10-02 · v1 thin MVP in `doctrina-v1-archivo`.
