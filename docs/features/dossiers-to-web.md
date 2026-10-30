# Dossiers to the web: the plan (Pedro, 2026-10-29, top priority)

Pedro, 2026-10-29 night: «pongamosle suma prioridad a los dossiers, el tenerlos HECHOS asi como los tenemos a los catolicos. HECHOS E IMPLEMENTADOS.» Budget he gave: **Codex 80 %**, **Claude 14 % of the week** (12 % already used: ~2 points left until the reset, Wed 2026-11-04 17:59). This file is written so another agent can continue it cold. Written by the agent of the sixteenth session; numbers marked «est.» are estimates from earlier runs, not measurements of this plan.

## 0. What «done and implemented» means (the target per pair)
A (doctrine, tradition) pair is **live** when: its dossier is verified and corrected; its page 03 is in `src/content/pages/<doctrine>/<tradition>.es.ts` (`status: "draft"`, like the Catholic ones: the site marks what is not fully reviewed); its citations are in the registry; `npm run verify` and its e2e pass; the tree row and tradition tab turn on by themselves (they derive from published pages); the «Pasajes» page turns on when the page has `passages` text. Scope fixed by DECISIONS 2026-10-29: 4 doctrines × 5 traditions = **20 pairs** (no Pentecostal, no Justification).
**Not part of «live» for wave 1 (decision for Pedro, §7):** the Objeciones section (every non-Catholic draft has it `Deferred`), the apologists layer, and the doctrine page 02 of Baptism, Papacy and Sola Scriptura (only the Eucharist has one).

## 1. Inventory (measured 2026-10-29 from the repo)
| Pair | Dossier today | Page today |
|---|---|---|
| Eucharist · Catholic | done, verified, critic, applied | **live** |
| Baptism · Catholic | done, verified, critic, applied | **live** |
| Papacy · Catholic | done, verified, critic, applied (`review-page.data.js`) | **live** (imported 2026-10-30, `status: draft`) |
| Sola Scriptura · Catholic | same | **live** (imported 2026-10-30, `status: draft`) |
| Eucharist · Lutheran | done, 2 verifications, critic, answers applied | **live** (imported 2026-10-30, `status: draft`; gaps in DECISIONS 2026-10-30 12:57) |
| Eucharist · Reformed | **verified S1-S3 (2026-10-29)**: 0 new WRONG, 3 must-fix applied (`verification-reformed.md`, `reformed.apply.md`) | not imported (needs a converter) |
| Eucharist · Baptist | **verified S1-S3 (2026-10-29)**: 1 WRONG (column scope), 4 must-fix applied; active dossier is now only the convention line (NH and BF&M), 123 lines; the four-family draft is preserved in `baptist.apply.md` | not imported |
| Eucharist · Orthodox | **verified S1-S3 (2026-10-29)**: 2 WRONG, 4 must-fix applied; Philaret original Russian, 1838 Dositheus collation and full Greek Mogila I.107 still unconfirmed | not imported |
| Baptism · Baptist, Reformed, Lutheran, Orthodox; Sola Scriptura · Baptist | **verified S1-S3 (2026-10-30)**: WRONG 2+2+1+1+1 applied, must-fix 4+3+3+4+4 applied; both Baptist dossiers cut to the convention line (NH and BF&M), originals preserved in `*.apply.md` | not imported |
| Sola Scriptura · Reformed, Lutheran, Orthodox; Papacy · Baptist, Reformed, Lutheran, Orthodox | **verified S1-S3 (2026-10-30)**: WRONG 1+2+2+1+2+1+2 applied, must-fix 3+3+4+4+3+3+4 applied; Papacy Baptist cut to the convention line, original preserved in its `*.apply.md` | not imported |
Count check: 20 live (every pair: Catholic ×4, Lutheran ×4, Reformed ×4, Orthodox ×4, Baptist ×4; Baptism Lutheran imported 2026-10-30 13:45, `status: draft`) + 16 non-Catholic dossiers verified (Eucharist ×4, Baptism ×4, Sola Scriptura ×4, Papacy ×4) = 20. Waves 0 done 2026-10-30. Every dossier of the 20 pairs is verified (S1-S3) as of 2026-10-30; the Spanish of all of them is unreviewed by Pedro. Next is S4/S5 (shape and import), which needs the converter generalization.
Open from the verifications: the Westminster 1894 edition line (editor) in `eucharist/reformed.md` line ~143 is flagged as wrong by the Baptism Reformed run and is not corrected; the 1689, Heidelberg and Belgic scope for non-Eucharist doctrines is undecided.

Lesson from wave 1 (2026-10-29): the Baptist draft used four families although DECISIONS 2026-10-15 fixes the Baptist column to the convention line (NH and BF&M). Every wave prompt must state each tradition's column from that entry; the Baptist drafts for Baptism, Sola Scriptura and Papacy probably carry the same scope error. Orthodox ×4 and the Baptist/Reformed/Lutheran drafts exist as `docs/research/doctrines/<doctrine>/<tradition>.md`.

## 2. The pipeline per pair, with owner, gate and cost
| # | Stage | Owner | Input → output | Gate | Cost (est.) |
|---|---|---|---|---|---|
| S1 | **Verify** every quote, edition, locator, date against the print edition (`docs/playbooks/verification-pass.md`; the Lutheran pilot found 13 wrong quotes in ~235; the Catholic ones 5–18 per dossier) | **Codex** | dossier → `verification-<tradition>.md` | every priority-1 claim has a verdict | ~4–8 weekly points per dossier (measured 2026-10-20: 8 pts, extra-high effort, 22 min; high effort should be nearer 4) |
| S2 | **Apply** corrections (`apply-corrections.md`; verifier's items first, from texts already fetched), set `Status: verified`, re-verify only what was added | **Codex** | verification file → corrected dossier + `<tradition>.apply.md` | zero WRONG left or each listed for Pedro | ~2–3 pts |
| S3 | **Critic** (neutrality, caricature, cherry-picking, harsh words without status line) | Codex, in the S1 prompt as a second section (a Fable critic costs Claude budget we do not have) | dossier → findings appended to the verification file, triaged must-fix / for Pedro / rejected | must-fix applied in S2 | ~1 pt |
| S4 | **Shape for import**: the converter reads `docs/research/doctrines/<doctrine>/review-page.data.js` (Catholic shape only). Either generalize the converter to read a Markdown dossier, or have Codex write `review-page.<tradition>.data.js` from it (`tools/review-page/`, copy an existing one) | Claude generalizes the converter ONCE (`data/scripts/convert-dossier.mjs`, 510 lines, takes `<doctrine>`, hard-codes `tradition: "catholic"` at line ~416); Codex writes the data files | verified dossier → `review-page` data | converter report has no unparsed locators | converter: Claude ~1–2 % once; data files Codex ~2 pts each |
| S5 | **Import** (`docs/playbooks/import-page.md`, 6 steps: convert into a scratch folder, merge registry, copy page, finish by hand, `check-content.mjs`, verify + e2e + screenshots) | Codex does steps 1–5 on a branch-free working tree under the validator; **Claude** (or Pedro's next session) does the visual check and the commit message | review-page data → page file + registry | `npm run verify`, `npm run e2e` green, page seen at 1440 and 390, light and dark | Codex ~3 pts; Claude ~0.5 % per page for screenshots and review |
| S6 | **Pedro reviews the live page** in the browser (the tradition page is the review artifact; no review artifact is built) | Pedro | — | his visual approval, then he commits | his time |
Spanish quotes: public-domain Spanish translation if one exists, otherwise AI translation labelled and marked «unreviewed by Pedro» (existing rule; the page shows the label).

## 3. Capacity and the honest arithmetic
- **Codex now (read from its session file 2026-10-29 21:15):** 5-hour window 34 % at its last check (the window reset 19:38, so it is fresh); **weekly 60 %, resets 2026-11-04 05:54.** Pedro's «80 %» is ambiguous: if it means the **weekly** quota there are **20 points** left = about **3–5 verifications**, then nothing until Nov 4; if it means the **5-hour window** (as in the earlier caps) the weekly will go past 80 %, to about 100 %. **Ask Pedro which, before launching** (`AGENTS.md`: Codex only on his say-so, after telling him task, file and cap).
- **Full job (est.):** S1+S2+S3 for 14 drafts + 2 near-done ≈ 16 × ~8 = ~130 weekly points; S4 data files ≈ 16 × 2; S5 ≈ 18 × 3. ≈ **2.5 to 3 weekly quotas of Codex** at this effort. The job is calendar-bound by Codex's weekly quota, not by Claude. Cheaper options, in order: (a) verify at high effort, not extra-high; (b) verify only what the page will show (definitions, grades, passages, life), not coverage tables; (c) drop the debate layer (already dropped); (d) go live in waves instead of waiting for all 20.
- **Claude now:** ~2 points left this week. Do not start the converter generalization before the reset (Wed 17:59) unless Pedro raises the cap. What costs almost nothing now: this plan, Codex prompts, reading outputs.

## 4. Waves (each wave ends with pairs LIVE and a commit by Pedro; do not start a wave's S5 before Pedro committed the previous one: `AGENTS.md`, task-by-task pings)
- **Wave 0 — quick wins, no Codex:** import the two Catholic pairs that already have `review-page.data.js` (Papacy, Sola Scriptura) with the existing converter (`import-page.md`; `nvm use 24`). Needs Claude budget → after the Nov 4 reset. Result: 4 of 4 Catholic pages live.
- **Wave 1 — Eucharist, the richest doctrine:** Lutheran (verified) and Reformed (verify S1–S3 first) → converter generalization (S4) → import both. Result: the first non-Catholic pages live; the converter is proven. In parallel Codex starts S1–S3 on Eucharist Baptist and Orthodox.
- **Wave 2 — Baptism (Pedro's strongest interest, passages page with the apologists layer):** Baptist, Reformed, Lutheran, Orthodox → S1–S5. The Baptism doctrine page 02 does not exist (§7).
- **Wave 3 — Sola Scriptura ×4, then Papacy ×4.**
- **Wave 4 — what wave 1 left out** (§7): objections official layer, apologists layers for the other traditions (Pedro's names: Gavin Ortlund → Reformed or Baptist, to check; Dr. Jordan B. Cooper → Lutheran; others to research), doctrine pages 02.
Inside a wave: Codex runs S1+S2+S3 for **all pairs of the wave in one session per tradition** (the same documents answer every doctrine of a tradition: reading them once is what made the drafting pass cheap), while Claude converts and imports the pairs already verified: a pipeline, so neither idles.

## 5. How Codex runs (mechanics, from `agent-ops.md` «Codex» and «Background work»)
- Pedro runs Codex; the agent writes the prompt file and hands it over, or uses the runner `~/.doctrina-youtube/codex-resume-run*.sh <name> <session-id> <done-files>` / `codex-oneshot.sh` (log `~/codex-<name>-run.log`; the last run was `dossiers3`, ended 15:07 exit 0, drafting 4 dossiers took 24–33 % of a 5-hour window).
- Prompt skeleton (self-contained; copy `~/.doctrina-youtube/prompt-codex-dossiers-others-2026-10-29.md` as the base): files to read first (`AGENTS.md`, `docs/PROJECT.md`, `docs/playbooks/verification-pass.md`, `docs/playbooks/apply-corrections.md`, `docs/playbooks/content-dossier.md`, DECISIONS 2026-10-15, 2026-10-09, 2026-10-29), the exact dossiers, one output file per dossier, tags, no git writes, write as you go with a Progress block and `Status: done` when finished, **the stop rule** (stop adding steps at 40 % of the window, save by 45 %, never pass the cap Pedro gives), the order of the tradition's doctrines.
- Usage check (read-only): `f=$(ls -t ~/.codex/sessions/*/*/*/*.jsonl | head -1); grep -o '"primary":{[^}]*}\|"secondary":{[^}]*}' "$f" | tail -2` (`primary` = 5 h, `secondary` = weekly; `resets_at` is a Unix time). Pedro's app shows usage inverted (remaining): confirm which he means.
- After each Codex run: read the output files, give a critical take, mark the queue (`ROADMAP.md` «Background queue»), then the next.

## 6. Guardrails (do not repeat the known traps)
- **NEVER correct a page by hand (Pedro, 2026-10-30, DECISIONS «Pages are never corrected by hand»).** Fix the dossier or the converter and convert again. Registry corrections are the one exception and are noted in DECISIONS.
- Nothing from a draft enters `data/` or a page before S1–S2. Trust invariants: no claim without citation and edition; the site never concludes; each tradition in its own words; Church Fathers never assigned to a modern tradition (`AGENTS.md`).
- `node data/scripts/convert-dossier.mjs` must run with `CONTENT_OUT=<scratch>/out` (a straight run rebuilds the registry and overwrites hand edits); merge with `merge-registry.mjs`. Node 24 (`nvm use`). Tailwind utilities names must be unique (GOTCHAS).
- Never write git history; hand Pedro the stage-and-commit command per block; docs in their own command. Another session may be editing `docs/ROADMAP.md`/`DECISIONS.md`: add narrowly.
- Reformed Eucharist dossier says «Status: done» while the other drafts say «draft, NOT verified»: confirm what was actually run before trusting it.
- The home, the tree and the tabs show a pair as «En construcción» until its page is published: publishing a page turns the pair on everywhere; the English locale counts as built only if a Spanish page exists (the pages are Spanish-only today).

## 7. Decisions for Pedro (ANSWERED 2026-10-29 night: 5-hour window; no Objeciones in wave 1; Codex-only critic first; doctrine pages 02 after the tradition pages as a BIG priority; waves ok, wave 0 after Nov 4; keep the «unreviewed» label. See DECISIONS)
1. **Which «80 %» of Codex:** the 5-hour window or the weekly quota (weekly is at 60 %, resets Nov 4 05:54)? And overnight rules (the 5-hour window never at 100 %).
2. **Objeciones:** go live without them (wave 1, recommended: the section simply does not render) and add the official-layer objections in wave 4, or hold every non-Catholic page until its objections are researched (weeks more)?
3. **Critic tier:** Codex-only critic inside S1 (recommended, cheap) and the pages stay `status: "draft"`, or a Claude Fable critic per dossier (not affordable this week)?
4. **Doctrine pages 02** for Baptism, Papacy and Sola Scriptura: needed for the home rows and the «five answers» comparison; each needs a `shared.md` that does not exist. Wave 4 or earlier?
5. **Order of waves** (above) and whether Wave 0 waits for the Nov 4 reset.
6. **Pedro's review of AI-translated Spanish quotes:** keep the «unreviewed» label on the live pages (existing rule) or batch his reading?

## 8. State at the close of the sixteenth session (2026-10-30) and next actions

**Done:** all 20 pairs are live as `status: draft` (waves 0 to 3 of §4 and S4/S5 for every pair; Codex ran S1 to S3 only and was off for the import). How it was built and what to do next: `docs/playbooks/import-page.md` (pieces, recipe, steps), `docs/GOTCHAS.md` «Dossier import», `DECISIONS.md` entries of 2026-10-30 (the agent's calls to confirm are listed there). Measured: about 15 to 25 minutes and under 1 weekly point of Claude per pair once the dossier family's reader exists.

**Next, in this order (Pedro decides the order):**
1. **Pedro's review of the 16 non-Catholic pages** and of the agent's calls (shorts, leads, scripture sentences, status lines, omissions): every correction goes to the dossier, the data file, `dossier-fields.mjs` or the converter, then reconvert (never edit a page).
2. **Wave 4**: the objections of the 16 pages (official layer; the section and the tree row hide themselves while empty), the Fathers and the reasons of «Por qué» (needs a model decision), the citations with no excerpt (dossier work), print pages, the doctrine pages 02 of Baptism, Papacy and Sola Scriptura (each needs a `shared.md` that does not exist), the apologists layers of the other traditions.
3. **Open defects:** `e2e/reader-keep-position.spec.ts` «A+ keeps the verse at the top» (first full run, 389 px drift, not investigated); the shared edition bibliographies (GOTCHAS); the Westminster 1894 editor line in `eucharist/reformed.md`; 1689/Heidelberg/Belgic scope outside the Eucharist; the Neutral/English versions of all these pages (they exist only in Spanish).
4. Codex only on Pedro's say-so, asking him first.
