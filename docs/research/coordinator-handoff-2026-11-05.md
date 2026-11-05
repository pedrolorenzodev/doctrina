# Coordinator handoff (2026-11-05 evening): where everything stands

For a fresh coordinator session if this one is compacted or replaced. **Role of the coordinator session: organise sessions, write prompts, record decisions and estimates, merge reports; it does NOT implement or research on its own (Pedro, 2026-11-05).** Talk to Pedro in Rioplatense Spanish, very concise. Pedro commits everything himself (give `git add <files> && git commit -m "…"`); no attribution line. Never `pkill -f "next start"` (other sessions run servers): start servers with `node -e "require('next/dist/bin/next')" x start -p <port>`.

## Sessions and duplicates (work lives in `~/Desktop/dev/doctrina-*`, prompts in `~/doctrina-research-prompts/`)
| Duplicate | Session | State |
|---|---|---|
| `doctrina-be` | Backend (Supabase: Bibles, Fathers en/es, words loaded; `CORPUS_SOURCE=supabase`) | Done; integrated in the real repo (join step 1, committed) |
| `doctrina-deploy` | Deploy (lean build, gate `proxy.ts`, runbook `docs/features/deploy-demo.md`; live manual deploy at `https://doctrina.elpepo.dev`, Vercel Hobby project `doctrina`, no password by Pedro's choice) | Done; integrated by the join session, step 2 (commit pending when this was written) |
| `doctrina-fixes` | Fixes A (QA sweep fixes: `docs/features/qa-fixes.md`) | Done; join step 3 next (conflict: `top-bar.tsx`, `layout.tsx` with the logo) |
| `doctrina-pal` | Palabras (DRA panel fix, 06 pin, Spanish glosses to ≥ 93 % / 91 %) | **Still running**; join step 4 (code) now, step 6 (data) when it finishes |
| `doctrina-wide` | Anchos (wide layouts, compact rail at 1440, early christians, timeline name flip) | Done (`docs/features/wide-layouts.md`); join step 5 |
| `doctrina-qa` | QA sweep (report `docs/features/qa-sweep.md`, scripts `tools/qa/`) | Done, copied into the real repo |
| real repo | «Join» session integrating the duplicates one at a time (`~/doctrina-research-prompts/merge-all.md`, 7 steps) | In progress: steps 1–2 done |

## Pending, in order (Pedro's priorities)
1. Finish the join (steps 3–7). Step 7 = reload the Didache files and the new glosses into Supabase with `load-corpus.mjs --fathers` and `load-words.mjs --load` (Pedro's go required). Join was also asked whether to move Deploy's own decisions to DECISIONS (answer: yes).
2. **Auto-deploy** (prompt `~/doctrina-research-prompts/autodeploy.md`): after join steps 1–3 are committed and pushed and no other session is in the real repo; Pedro present; data comes from Supabase (the bucket plan of the Deploy session is superseded); noindex, keepalive cron, ignored build step, preview first.
3. **English for the whole site:** the estimate and block plan are in `docs/research/english/estimate-2026-11-05.md` (≈ 112,000 words to translate; total ≈ 13 weekly points, range 9–26; block 1 ≈ 3.4: pipeline + Eucharist). Run block 1 alone and fill the comparison table in that file.
4. **Real AI** (chat and simplifier): decisions, research brief and design brief in `docs/research/ai/real-ai-plan-notes-2026-11-05.md` (budget 5 USD, anyone with the link, simplifier without the Bible, UX of the reader switch undecided; the provider/model research is pending; the chat logic is to be designed by Opus 5.5 High when Pedro switches the model).
5. Wide review in Dia after the join; the stale e2e specs (about ten that assume some doctrines have no page) need a small cleanup session; the quality sweep's remaining packages (Father works weight: load by division now that the corpus is in Supabase; home and timeline details).
6. Parked by Pedro: the proposal for the long Pasajes blocks and the Baptist left rule; research left out of the 02 pages; the numbering UX when the edition changes (done by Palabras as a message); Fuentes screen (notes in ROADMAP: timeline strip like variant B, list like variant C, without «Reconocida por»); the favicon/logo is built (DECISIONS 2026-11-05).

## Measured calibration (weekly points; one shared integer counter)
~1 point per session-hour per session (3 sessions in parallel ≈ 2.5/h). Past estimates of build sessions ran 1.3–2× above the real spend (S1a est 3.5 → ≤ 1; B1 ~5 → ~2; Backend 6–10 → ~3; Padres round 2 ~3 → ~2). The Join session: step 1 ≈ 0.5. Estimate for steps 2–7: 2–3 points (compare at the end). Sessions cannot measure their own share while others run; compare totals.

## Files this coordinator created and not yet committed (unless Pedro did)
`docs/research/english/estimate-2026-11-05.md`, `docs/research/ai/real-ai-plan-notes-2026-11-05.md`, this file. Their decisions still have to be copied to `docs/DECISIONS.md` and `docs/ROADMAP.md` when the join session finishes (it edits those files).
