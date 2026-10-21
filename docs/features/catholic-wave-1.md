# Catholic dossiers, wave 1 (Baptism, Papacy, Sola Scriptura)

Pedro's direction (2026-10-17, 23:00): only Catholic dossiers across several doctrines until he is fully happy with the format, the data, the viewpoints and the arguments; then the Catholic column becomes the format model for the other traditions (model of format, not frame: the other traditions keep their own categories). Same plan, bounds and checks as `docs/features/justification-pilot.md`; this file only records what differs. Deleted when done (lessons go to `docs/playbooks/content-dossier.md` via `/retro`).

## Plan (/plan-run, 2026-10-17)

- **Doctrines (Pedro chose):** Baptism, Papacy, Sola Scriptura. Sola Scriptura keeps that name (Pedro, 2026-10-17 23:10: it is one of evangelicalism's central doctrines and one of the most debated between Catholics and evangelicals; the agent's proposal to frame it as the neutral "Scripture and Tradition" was discarded). The Catholic column states the Church's own position on it: what it teaches instead (Scripture and Tradition, interpreted by the Magisterium) and why it rejects Scripture alone, in its own documents' words; the evangelical arguments for *sola Scriptura* are its objections.
- **Setup per doctrine:** draft (Opus · high) → verifier (Sonnet) + expert (Opus · high; Pedro 2026-10-17: critic on Fable, expert on Opus, because in the Eucharist pilot the critic found 10 must-fix and the expert 2) → critic (Fable, one at a time) → apply (Opus · high). Output in `docs/research/doctrines/<doctrine>/`.
- **Pedro's notes on the Eucharist review Artifact** go to running agents as they arrive and to the playbook.
- **Expected cost:** ~55–65 session points per doctrine (estimate from the Eucharist pilot).

## Review Artifacts (v1, superseded by v2 below)

- Eucharist: https://claude.ai/artifact/M9eoQq4bpGawrihps2U3rh
- Justification: https://claude.ai/artifact/UYET6eBuUnNkusfX3imGWn
- Baptism: https://claude.ai/artifact/M9TNV7Dfv5GwYPsKXydxTT
- Papacy: https://claude.ai/artifact/JoqYV7ckZa54sZaTH2VMKU
- Sola Scriptura: https://claude.ai/artifact/GzS9WbPRk5PrKxZf6rQocp

## Review pages v2 (2026-10-21, rebuilt from the dossiers after the 2026-10-20 decisions; `storeKey` `-v2`)

- Eucharist: https://claude.ai/artifact/8fAQrmvQcfPConK7Bphmjf (4 open questions)
- Justification: https://claude.ai/artifact/KDGFosk5Qm41XPVDFNVHsp (17)
- Baptism: https://claude.ai/artifact/Bis5wn2aZDtgq76R5qt2He (15)
- Papacy: https://claude.ai/artifact/TLsvtNUR8yiE3UhTCSp2Nm (16)
- Sola Scriptura: https://claude.ai/artifact/3Du7AwcYCHYEfW8tQsMt2F (13)

## Handoff (2026-10-19, for the next session)

**State.** Eucharist, Justification, Baptism, Papacy and Sola Scriptura (Catholic column only) are through the whole `content-dossier` cycle: draft → verification → expert → critic → apply ("Reviews applied" closes each Progress block). Files per doctrine in `docs/research/doctrines/<slug>/`: `catholic.md` (the dossier, ends with "Questions for Pedro"), `verification-catholic.md`, `review-catholic.md`, `critic-catholic.md`. Review pages: v2 below (the v1 pages are superseded). Run log with times and costs: `docs/features/eucharist-rebuild.md`, "Overnight queue".

**Waiting on Pedro (updated 2026-10-21).** Items 2, 3 and 5 of the 2026-10-19 handoff were decided 2026-10-20 (DECISIONS «Catholic Eucharist review», «Opening a doctrine a tradition rejects», «Harsh language») and applied (`docs/research/doctrines/*/decisions-2026-10-20.apply.md`); item 4 (neutral universe B–D) is done. Open: (1) Pedro's review of the v2 review pages (below; the Eucharist one is answered and applied); (2) the Holy See quotation rule A/B/C (50 / 100 / 250 words, `docs/research/sources/holy-see-quotation.md`), tracked in ROADMAP «Now».

**After his notes.** Apply them to the five dossiers and to `docs/playbooks/content-dossier.md`; then `/retro` for this wave and the Eucharist run (candidates below); then, once Pedro is happy with the Catholic format, the other five traditions per doctrine (Catholic as the model of format, not frame), starting with a contrast check on the sparsest one (Baptist Eucharist).

**Retro candidates (not yet in the playbooks).**
- Model split worked: expert on Opus found 2 must-fix per doctrine; critic on Fable found 13–17. Keep it.
- Fable agents held findings in memory for 20 min and nearly lost them at 98 %: briefs must say "create the file first, append each finding" (done from then on; it worked).
- The usage endpoint returns 429 when polled every 60 s; 150–240 s works.
- Other sessions on the account burned ~26 session points overnight; session % is shared, coordinate before long runs.
- 3 Opus + 1 Fable ≈ 4 session points/min and ≈ 0.7 weekly points/min; one doctrine through the full cycle ≈ 55–70 session points.
- Apply agents checkpointed twice before applying anything (all time spent fetching): brief them to apply the verifier's items first from texts already fetched.
- Session cron jobs fire only when idle and can fire late (one-shot ran 45 min late); a network drop killed one agent, resuming by SendMessage worked.
- Coordinator must read each review page in full before publishing (~60k tokens per page): keep `data.js` lean.

**Review pages.** Tool in `tools/review-page/` (how-to in `docs/playbooks/content-dossier.md`, step 8); data per doctrine in `docs/research/doctrines/<slug>/review-page.data.js`. The Eucharist page was rebuilt as v2 on 2026-10-21.

**Scratch (outside the repo, until the Mac reboots).** Fetched texts agents reuse: `/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/e0312757-8967-4bde-817a-aa2702aa00ff/scratchpad/` `dl/` (Waterworth Trent), `v/` (page-split OCR of López de Ayala 1785), `just-apply/trig/` (1921 Concordia Triglotta scan text). If lost, agents re-fetch from archive.org (ids are in the dossiers).

## Retro

(filled by /retro)
