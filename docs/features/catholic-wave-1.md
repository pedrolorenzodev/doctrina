# Catholic dossiers, wave 1 (Baptism, Papacy, Sola Scriptura)

Pedro's direction (2026-10-17, 23:00): only Catholic dossiers across several doctrines until he is fully happy with the format, the data, the viewpoints and the arguments; then the Catholic column becomes the format model for the other traditions (model of format, not frame: the other traditions keep their own categories). Same plan, bounds and checks as `docs/features/justification-pilot.md`; this file only records what differs. Deleted when done (lessons go to `docs/playbooks/content-dossier.md` via `/retro`).

## Plan (/plan-run, 2026-10-17)

- **Doctrines (Pedro chose):** Baptism, Papacy, Sola Scriptura. Sola Scriptura keeps that name (Pedro, 2026-10-17 23:10: it is one of evangelicalism's central doctrines and one of the most debated between Catholics and evangelicals; the agent's proposal to frame it as the neutral "Scripture and Tradition" was discarded). The Catholic column states the Church's own position on it: what it teaches instead (Scripture and Tradition, interpreted by the Magisterium) and why it rejects Scripture alone, in its own documents' words; the evangelical arguments for *sola Scriptura* are its objections.
- **Setup per doctrine:** draft (Opus · high) → verifier (Sonnet) + expert (Opus · high; Pedro 2026-10-17: critic on Fable, expert on Opus, because in the Eucharist pilot the critic found 10 must-fix and the expert 2) → critic (Fable, one at a time) → apply (Opus · high). Output in `docs/research/doctrines/<doctrine>/`.
- **Pedro's notes on the Eucharist review Artifact** go to running agents as they arrive and to the playbook.
- **Expected cost:** ~55–65 session points per doctrine (estimate from the Eucharist pilot).

## Review Artifacts

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

**State.** Eucharist, Justification, Baptism, Papacy and Sola Scriptura (Catholic column only) are through the whole `content-dossier` cycle: draft → verification → expert → critic → apply ("Reviews applied" closes each Progress block). Files per doctrine in `docs/research/doctrines/<slug>/`: `catholic.md` (the dossier, ends with "Questions for Pedro"), `verification-catholic.md`, `review-catholic.md`, `critic-catholic.md`. Review Artifacts above; Pedro has not reviewed any yet. Run log with times and costs: `docs/features/eucharist-rebuild.md`, "Overnight queue". Nothing is committed since 0e72744.

**Waiting on Pedro.**
1. Notes on the five review Artifacts (each has "Copiar respuestas"; he pastes the text into the session).
2. Six questions repeated in every dossier, answered once on one decisions page, built 2026-10-19 and not answered yet (Pedro planned a 4-hour session on it): https://claude.ai/artifact/Wmy81AwbGJ4THaf2rGe9MZ (options shown on real dossier text; "Copiar respuestas" gives the text to paste back; sub-questions on positive statements under an objection and on the DJ 41–42 line). The six: Bible wording (RV1909 or the documents' own); what counts as an objection (do exclusive definitions such as BF&M VII "immersion of a believer" count; all reviewers say yes); how answers end (Trent's canon, plus DJ 41–42 on Lutheran objections in Justification); harsh language (Antichrist, "papists") shown with a current-status line, one rule for all; honest-gap lines when Catholic texts don't answer a point; insider terms (glossary modal plus a few inline glosses).
3. The framing rule for a tradition that rejects a doctrine named after a claim (applied in Sola Scriptura: open with the Church's own stated position, then what it teaches instead). Proposed, not confirmed; asked in chat on 2026-10-19, no answer yet.
4. Neutral universe parts B–D and its verification: paused by Pedro ("más adelante").
5. Open checks settled on 2026-10-19 (`docs/research/doctrines/wave-1-open-checks.md`, one Sonnet agent, not independently re-verified): no Orthodox withdrawal of the 1848/1895 wording found (absence of evidence, English-only search); Church of Scotland Declaratory Act V (1986) no longer affirms WCF 25.6's antichrist clause; INPM's text (1647 or 1903) still unknown. Proposed status lines are in that file, to apply with Pedro's harsh-language decision. **Flag for Pedro:** vatican.va's Terms of Use allow "personal and non-profit use only" and require prior written authorisation for reproduction, with no quotation clause; how that sits with quoting Holy See texts under the "no permissions for now" decision (2026-10-09) was researched on 2026-10-20 by a Codex agent: `docs/research/sources/holy-see-quotation.md` (not re-verified by us). Short, necessary quotations inside analysis are defensible without permission; full documents or a reader are not; Spain's art. 32 and the vatican.va browsewrap (which even claims permission for links) are the open points; three working rules (A strict 50 words, B balanced 100 words, C permissive 250 words per document per page) await Pedro's choice and counsel. Check the dossiers' quotation lengths against the chosen rule before anything reaches `data/`.

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

**Review pages.** Tool in `tools/review-page/` (how-to in `docs/playbooks/content-dossier.md`, step 8); data per doctrine in `docs/research/doctrines/<slug>/review-page.data.js`. The Eucharist Artifact was published with the earlier version of the tool; its data file is converted to the shared format (same `storeKey`) and builds and checks clean, but it was not republished.

**Scratch (outside the repo, until the Mac reboots).** Fetched texts agents reuse: `/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/e0312757-8967-4bde-817a-aa2702aa00ff/scratchpad/` `dl/` (Waterworth Trent), `v/` (page-split OCR of López de Ayala 1785), `just-apply/trig/` (1921 Concordia Triglotta scan text). If lost, agents re-fetch from archive.org (ids are in the dossiers).

## Retro

(filled by /retro)
