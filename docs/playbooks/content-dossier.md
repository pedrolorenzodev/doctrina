# Content dossier (one doctrine, per tradition)

The content of one doctrine for the six traditions, written as Markdown dossiers before anything enters `data/`. It feeds screens 02 (doctrine), 03 (tradition) and 04 (objection). Read `agent-ops.md` first. Status: run for five Catholic doctrines (Eucharist, Justification, Baptism, Papacy, Sola Scriptura) since 2026-10-17; sizing in `agent-ops.md`; the other five traditions are not started. Last validated: 2026-10-21 (retro of the Eucharist and Justification pilots).

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
- Attribute every closing line to the tradition ("Para la Iglesia católica, …" or a quote), never in the site's voice. State the grading method once. Each objection quotes the objector's strongest official text and proof texts; when the answer grows, the objector's strongest text grows too. The coverage table says honestly what was not searched.
- Quote originals from the print scan; e-texts only to locate a passage (the Lutheran pilot's 4 wrong Book of Concord quotes were e-text slips). Name each tradition's scan OCR path in the drafter's brief.
- Spanish renderings only from the original language, never from an English translation.
- Status lines go next to harsh words wherever they show, screen 03 included; they state facts about church bodies (approval, current constitution), never theologians' opinions. The shared ones (Trent, Dositheus, Westminster, Smalcald…) live in one file the coordinator owns, so every dossier says the same.
- An objection's synthesis ends on the objector's own words, never an argument its text doesn't make; show the objector's positive formulation the answer addresses; a confession's portrait of its 16th-century opponents is not a later body's position.
- Every agent writes each section to its file as soon as it is done; Progress describes only what is on disk. The coordinator checks headings (`grep '^## '`) and mtimes, not the Progress line.
- Full text only where `DECISIONS.md` 2026-10-15 (verbatim-match rule) and 2026-10-09 (three countries) allow; otherwise short quote and a link to the official page.

## Drafting pass (2026-10-29)

Pedro's fast mode: one Codex pass per tradition that writes the dossier files only, without Steps 4–9. Order file: the dossier template of `~/.doctrina-youtube/prompt-codex-dossiers-others-2026-10-29.md` (a copy of the Baptist one with the file list changed); per tradition across its doctrines, because the same documents answer all of them. Rules in the prompt: the sections of «Output», §Objeciones left `Deferred by the owner (2026-10-23).`, «Qué enseña» opens with what the tradition affirms, Spanish only from the original language, each file's Progress says `Status: draft, NOT verified`, tags `[verified: scan]` only if the printed edition was checked, `silent`/`sparse` with the bounded searches in the Coverage table, usage checks before every step. Done so far (all unverified): Baptist, Reformed and Lutheran for Baptism, Sola Scriptura and Papacy (Baptist also Eucharist; Reformed and Lutheran Eucharist predate it); Orthodox running. Pentecostal and Justification are out of scope for now (DECISIONS 2026-10-29). Next: the verification pass of every draft (Step 4), then the rest.

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
5. **Simulated expert per tradition** (Opus; it found ~2 must-fix per doctrine, the critic 13–17): "Would a theologian of this tradition sign this as its position? What is missing, distorted or mislabelled?" Writes `review-<tradition>.md`.
6. **Hostile critic** (Fable, one at a time; its brief says "create the file first, append each finding as you go"): neutrality, caricature, cherry-picked quotes, unequal treatment across traditions. A reviewer told to find problems always finds some: each finding is triaged as must-fix / for Pedro / rejected with a reason.
Order that worked (Lutheran pilot): verifier and expert in parallel right after the draft, then the critic; the apply agent may start on the verifier and expert items while the critic runs, on a frozen copy of the draft so line numbers resolve.
7. `apply-corrections.md` on the dossiers. Brief the apply agent to apply the verifier's items first, from texts already fetched, and only then fetch more.
   7b. A short Sonnet re-verification of everything the apply step added or redid.
8. **Pedro's review**: a review artifact with the content poured into the latest proposed design of screens 02, 03 and 04 (read the latest artifact from the design session; it need not be the final design), so he reads it as a user would. Sparse sections are discussed there. Built with `tools/review-page/`: an agent writes `docs/research/doctrines/<doctrine>/review-page.data.js` from the dossier (copy the shape of an existing one; only the dossier's site drafts and quoted sources, never new content), then `python3 tools/review-page/build.py <data.js> <out.html> "Revisión <Doctrina> católica"` and `node tools/review-page/check.mjs <out.html>` (no JS errors, no horizontal scroll at 360–1440 px, every source opens its panel). The coordinator reads the whole page before publishing. After Pedro's notes, edit the data file, rebuild and republish to the same Artifact; keep `storeKey` so his saved drafts survive.
9. `/retro`. Moving the content into `data/` is a separate task.

## Done when

- [ ] Every quote verified against its edition.
- [ ] Every expert and critic finding resolved or listed for Pedro.
- [ ] Every coverage table filled; every sparse section has its cause.
- [ ] Spanish quotes read by Pedro or marked unreviewed.
- [ ] Pedro reviewed the dossiers in the review artifact.

## Lessons

- 2026-10-21 · Lutheran Eucharist pilot (first non-Catholic dossier, ~55 min): drafter's Progress ran ahead of the file, e-text slips, Spanish from English, harsh words without status on screen 03 → the five rules above and step 7b.
- 2026-10-17 · The Eucharist pilot's expert found 2 must-fix and its critic 10 (later doctrines: 2 vs 13–17) → expert on Opus, critic on Fable.
- 2026-10-17 · Pedro's reading of the Eucharist pilot, carried into Justification → the attribution, grading-method, objector-text and balance rules above.
- 2026-10-17 · The pilot gate held (Catholic first, Pedro's notes, then the rest) and the second pilot ran before his notes by his choice; no approach error resurfaced → still pilot one tradition first.
- 2026-10-18 · A Fable critic held its findings in memory for 20 min and nearly lost them at 98 % session → brief: create the file first, append each finding.
- 2026-10-18 · Apply agents checkpointed twice having applied nothing (all time spent fetching texts) → apply the verifier's items first.
- 2026-10-18 · Verifiers on the five Catholic dossiers found 5–18 wrong items each (silent misprint fixes, clipped or paraphrased quotes, Spanish unlabelled, an unlicensed e-text; Justification's Lutheran Spanish was redone from the 1921 Triglot print scan) → the verification step is not optional.
- 2026-10-18 · The coordinator read each review page in full before publishing (~60k tokens per page) → keep `review-page.data.js` lean.
- 2026-10-20 · The v1 review pages were built before the new visual direction and had to be rebuilt as v2 → build review pages once the design direction is approved, or expect a rebuild (cheap with `tools/review-page/`).
