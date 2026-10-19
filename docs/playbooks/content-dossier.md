# Content dossier (one doctrine, per tradition)

The content of one doctrine for the six traditions, written as Markdown dossiers before anything enters `data/`. It feeds screens 02 (doctrine), 03 (tradition) and 04 (objection). Read `agent-ops.md` first. Status: written 2026-10-17, not yet run; the first run (the Eucharist) validates it.

## Inputs

- The source universe: `docs/research/traditions/<tradition>.md` (which documents speak for each tradition, their authority grades, editions, doctrine index). The dossier agent reads those documents themselves, not only the map.
- `DECISIONS.md` 2026-10-15: who speaks for each tradition, which texts each column quotes, labels, editions, Spanish and copyright.
- The agreed screen structures in `ROADMAP.md` ("Screen 02/03/04, agreed with Pedro").
- Translation policy: `DECISIONS.md` 2026-10-09 (three levels).

## Output

`docs/research/doctrines/<doctrine>/`:
- `<tradition>.md` × 6, sections in screen 03's order: **Qué enseña** (a short definition in the tradition's own words, quoted, with edition, locator and authority grade) · **Por qué** (its own arguments, quoted) · **La Escritura que usa** (passages its own documents cite, not ours) · **Objeciones** (each objection attributed to who raises it, with the tradition's own answer) · **Cómo se vive** (practice; unverified until sourced) · **Grado de autoridad** (of each text quoted, in the tradition's own categories) · **Fuentes** (edition and licence of each).
- `shared.md`: what all share, the Fathers' witnesses (neutral, never assigned to a tradition), the practice comparison for screen 02.
- Each file ends with a **coverage table**: section · status (full / sparse / silent / map gap) · where it searched.
- `review-<tradition>.md`, `critic.md`: the review steps below.

## Rules

- Never conclude; never "we believe"; each tradition in its own words.
- No claim without citation and edition. Tags as in `agent-ops.md`.
- Spanish quotes: a public-domain Spanish translation if one exists; otherwise an AI translation labelled as such and marked "unreviewed by Pedro" until he reads it.
- Full text only where `DECISIONS.md` 2026-10-15 (verbatim-match rule) and 2026-10-09 (three countries) allow; otherwise short quote and a link to the official page.

## Sparse sections

Each section has a minimum: Qué enseña ≥ 1 normative text; Objeciones aim for 3; La Escritura = what its own documents cite. Below the minimum after searching every relevant document in the universe, the section is marked sparse with the search log. Then, by cause:
- **The tradition is silent** (e.g. BF&M's 18 articles don't address it): say so ("sus confesiones no se pronuncian sobre esto", with where it was searched). Never fill the gap with another source or the agent's words.
- **The map has a gap** (the tradition speaks in an official text the map missed): don't use it directly. Propose adding it to the map: check it is official by the tradition's own authority categories, add it with its tag, then use it. Flag it for Pedro.
- **Asymmetry across traditions** (2 objections here, 8 there): don't pad or trim to equalize; flag it to Pedro as a design and neutrality question.
- Never invent objections, never use unofficial blogs as a tradition's voice, never present the agent's summary as the tradition's answer.

## Steps

1. `/plan-run content-dossier`. Read the inputs above; settle open scope with Pedro.
2. **Pilot one tradition first** (the one with the richest map), then adjust this playbook before the rest.
3. The other traditions, 2–3 Opus agents at a time, plus one for `shared.md`. Objections need the other traditions' maps too.
4. `verification-pass.md` on every quote, against its edition.
5. **Simulated expert per tradition** (Fable, one at a time): "Would a theologian of this tradition sign this as its position? What is missing, distorted or mislabelled?" Writes `review-<tradition>.md`.
6. **Hostile critic** (Fable or Opus): neutrality, caricature, cherry-picked quotes, unequal treatment across traditions. A reviewer told to find problems always finds some: each finding is triaged as must-fix / for Pedro / rejected with a reason.
7. `apply-corrections.md` on the dossiers.
8. **Pedro's review**: a review artifact with the content poured into the latest proposed design of screens 02, 03 and 04 (read the latest artifact from the design session; it need not be the final design), so he reads it as a user would. Sparse sections are discussed there. Built with `tools/review-page/`: an agent writes `docs/research/doctrines/<doctrine>/review-page.data.js` from the dossier (copy the shape of an existing one; only the dossier's site drafts and quoted sources, never new content), then `python3 tools/review-page/build.py <data.js> <out.html> "Revisión <Doctrina> católica"` and `node tools/review-page/check.mjs <out.html>` (no JS errors, no horizontal scroll at 360–1440 px, every source opens its panel). The coordinator reads the whole page before publishing. After Pedro's notes, edit the data file, rebuild and republish to the same Artifact; keep `storeKey` so his saved drafts survive.
9. `/retro`. Moving the content into `data/` is a separate task.

## Done when

- [ ] Every quote verified against its edition.
- [ ] Every expert and critic finding resolved or listed for Pedro.
- [ ] Every coverage table filled; every sparse section has its cause.
- [ ] Spanish quotes read by Pedro or marked unreviewed.
- [ ] Pedro reviewed the dossiers in the review artifact.

## Lessons

(none yet)
