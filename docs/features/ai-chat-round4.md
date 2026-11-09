# AI chat round 4 · quality fixes (clone `doctrina-ai-r4`)

## State

- **Done:** items 1 to 5 (item 4 was already in the code) and 7 (evaluation rerun), plus two fixes the rerun showed (a Scripture-wording rule, the «paquete» filter), plus the follow-up (below, «Follow-up»): the second reading now runs on every «not found» whatever the pack size, and the variance was measured. `npm run verify` exit 0 (4 lint warnings in files I did not touch); e2e `notes-followup`, `ai-ask`, `reader-ai-real` pass (28) on the final code. API spend ≈ $0.54 of $1.00, then $0.26 of $0.60 for the follow-up. The `ai_answers` rows of every run are deleted; no server left running.
- **v08 (named Father, «Was Ignatius of Antioch a Catholic?»):** fixed generally, see «v08». Spend $0.11 of $0.40. `npm run verify` exit 0; checks `check-answer` 62, `check-pack` 382, `check-eval` 354; e2e 28/28. **The app's monthly budget is spent** (see «v08», last point).
- **Not met / regressions:** below, «Evaluation».
- **How to resume:** server `AI_PROVIDER=anthropic AI_STORE=supabase AI_DAILY_BUDGET_USD=4.00 npx next start -p 3190` (after `NEXT_PUBLIC_AI_CHAT=real NEXT_PUBLIC_SIMPLIFIER=on npx next build`); `AI_PROVIDER=anthropic node --import ./tools/register-alias.mjs tmp/r4/eval.mjs` (held-out 30 + `questions.json`, Haiku judge), then `node tmp/r4/summary.mjs`.

## Items

1. **Notes of other chapters (done).** `pickNotes` (`use-ask-stream.ts`) no longer drops a note of another chapter that shares no word with the question: the shared-word score is only the order (best overlap first, then most recent), inside the existing caps (`maxRelated` 6, `maxNotes` 20, `maxNotesChars` 4,000, `maxNoteChars` 1,000). The model decides relatedness (rule 12). Checks in `check-cui.mjs` (a note with no shared word travels; order; caps keep the far notes); e2e «a note of another chapter in another language travels with the question» (an English John 3:5 note with a Spanish question on John 6); eval nf07 (the same case against the real model: the sentence must appear). The unrelated case stays nf03.
2. **Plan sources (done).** The plan prompt maps «textos bíblicos», «versículos», "Bible verses", "biblical texts" to `bible`, and «qué textos bíblicos / versículos citan los X» to bible and traditions. `PLAN_PROMPT_VERSION` → `plan-2026-11-09.1`. Eval case: ho25 in the held-out set (`expect.sources: [bible, traditions]`).
3. **«de el» contractions (done).** `withContractions` (`src/content/ai-search/collections.ts`) contracts «de el» → «del» and «a el» → «al» (capitalised forms too, never inside words). It is applied to the stored tradition/doctrine/glossary labels when a row is read (`passageFromRow`: title, who, locator label; never to quoted text, which is literal) and to the loader's titles (`load-ai-passages.mjs`), so the database rows need no rewrite now and are right at the next load. Checks in `check-pack.mjs`.
4. **Search resilience (already done).** `supabase-search.ts` already retries once after 400 ms on a 5xx and logs `[ai] search 5xx <status>` (round 2, merged), with four cases in `check-pack.mjs`. Nothing changed.
5. **Prose tic (done).** Rule 5 of the answer prompt: a passage from Doctrina's tradition pages is attributed to the tradition or to the document it quotes («Para la tradición luterana…», «La Confesión de Westminster dice…»); «it is Doctrina's summary» at most once per answer. `ANSWER_PROMPT_VERSION` → `chat-2026-11-09.1` (e2e literal updated).

## Not tonight (my view)

- **Second excerpt per Father passage** (`notBareQuotation`): when a Father quotes a long verse, the comment does not fit in 80 words. A second, comment-only excerpt (the sentences after the quotation, with «[…]» before) would show what the Father thinks; it is a change of the quote contract (two spans per passage), the verification and the drawer's quote block, so it needs a proposal.
- **Spanish tradition passages under English questions:** the tradition pages exist only in Spanish; translating them (AI-assisted, marked) or showing them with an «in Spanish» note is a content decision, not code.
- **A stronger relevance judge:** Haiku `@low` flags about half its «irrelevant» quotes wrongly; Sonnet on a sample (≈ $0.004 per answer at `@low`) is the honest gate. Making it the default judge of the harness costs ≈ $0.5 per full run.
- **Server-side safety net for `noteFollowup: none`:** offering a same-chapter note whose words share stems with the plan's terms would be deterministic and testable, but it changes the approved design (the model chooses) and can misfire on a note that only shares a word; I would measure first how often the model misses after rule 12 was rewritten (nf06 and nf07 tell).

## Evaluation (item 7): held-out 30 + `questions.json` 109, `@medium`, Haiku judge on all, Sonnet on 20 held-out answers

| | Round 3 | Round 4 |
|---|---|---|
| Valid answers | 32/32 | 138/139 (v10 `ai_verify_failed` once) |
| Held-out scope faithful | 28/28 | **26/26** |
| Held-out requested traditions present or listed | 14/14 | **12/13** (ho15 answered «not found») |
| Relevance by Sonnet (20 held-out answers) | 90 % | **84 % (122/146)** — regression, below the 90 % gate |
| Relevance by Haiku | 82 % (32 answers) | 79.5 % (760/956, all 139) |
| Neutrality failures, human-read set (Haiku judge) | 0 | 1 (v02) in the full run; **0 after the Scripture-wording rule** on the 10 verdict questions (v10 flagged by the Haiku judge there, prose attributed; I read it as a judge false alarm) |
| Note follow-up cases | — | **7/7** (nf06 Pedro's case, nf07 other chapter in English) |
| Server latency p50 / p95 | 14.5 s / 37.6 s | **15.5 s / 31.5 s** |
| Cost per answer | $0.0030 | **$0.0026** |
| «Doctrina» mentions in prose | (not counted in round 3) | 18 of 108 answers mention Doctrina; **3 mention it twice or more** |

Regressions reported, not hidden (both revisited in «Follow-up»):
- **Sonnet relevance 90 % → 84 %.** Re-measured: 89 % twice on the final code; it was variance between runs, not a drop.
- **«not found» on answerable questions:** ho15, v06 and v08. The second reading ran only over packs of ≥ 12 passages; now it runs on every «not found» (v06 and ho15 answer; v08 does not, see below).
- **v04** wrote «La Escritura del paquete…»: the meta filter now catches «paquete» alone (`verify-answer.ts`, check added).

API spend of the round: evaluation $0.370 + Haiku judge $0.048 + Sonnet $0.082 + verdict re-measure $0.034 + its judge $0.004 = **$0.54**.

## Follow-up (coordinator: general second reading, variance)

**Change.** `ask.ts`: the second reading runs when the first reading says «not found» and every asked source has passages in the pack (`coverage.missingAuthors` empty), whatever the pack size (the ≥ 12 minimum is gone). Same cost bound: one extra call at most, only on «not found» (≈ +4 to 5 s, ≈ $0.001). No question, tradition or verse is special-cased. `ANSWER_PROMPT_VERSION` → `chat-2026-11-09.3` (behavior change; old cached answers are not served). Prompts did not change.

**Repeats** (each asked 3 times; the answer row is deleted between attempts so no cache hit):

| | Run 1 | Run 2 | Run 3 | Held-out run | Round 3 |
|---|---|---|---|---|---|
| ho15 (Orthodox, infant baptism) | evidence, 4 quotes | evidence, 2 | evidence, 4 | not found (second reading ran) | evidence, 4 quotes (one sample) |
| v06 | disputed, 24 | disputed, 22 | disputed, 4 | — | not in round 3's set |
| v08 («Was Ignatius of Antioch a Catholic?») | not found (second reading ran) | not found (second reading ran) | not found (search found no Ignatius passage, so no second reading) | — | not in round 3's set |

Round 3's recordings no longer exist, so its column is the number I reported then. ho15 answers 3 of 4; v06 3 of 3; v08 0 of 3. v08 is not a second-reading case: Doctrina holds 14 Ignatius works (Smyrnaeans included), but the pack either lacks the passage that would answer or the model declines a verdict question; that is retrieval or the verdict rule, not tonight's change. Across the 4 «not found» answers where the second reading ran (v08 ×2, ho15, ho24) it rescued none; it costs little and is general, so I keep it.

**Relevance by Sonnet** (`@low`, the first 20 held-out evidence/disputed answers of one held-out run on the final code, judged twice):

| | Judge pass 1 | Judge pass 2 |
|---|---|---|
| Relevant quotes | 119/134 (89 %) | 119/134 (89 %) |
| Neutrality failures | 0 | 0 |

The judge is stable on the same answers (spread 0). Across answer runs: round 4's first run 84 %, the final run 89 % (mean 86.5 %, spread 5 points); round 3 had 90 % on one run. A 5-point swing between runs of the same code is the noise; 89 % is inside it, so neither the attribution rule nor the Scripture-wording rule is implicated and **nothing was reverted**.

**Held-out 30 on the final code** (no Haiku judge): valid 30/30, scope faithful 26/26, requested traditions 12/13 (ho15), «not found» 3 (ho02: no Orthodox text on Matthew 16:18, honest; ho15 and ho24 after the second reading), server p50 14.5 s, p95 68.9 s (two answer calls of 60+ s without a second reading: model latency, not the change), $0.0031 per answer.

Follow-up spend: repeats $0.021 + held-out $0.093 + Sonnet $0.149 = **$0.26**.

## v08 (coordinator: a named Father got no answer)

**Causes (two, both general).**
1. **The plan dropped the Fathers.** For «Was X a Catholic?» the plan sometimes reads «Catholic» as the source (`sources: ["traditions"]`, 1 run of 3 for v08). The Fathers were then not searched, so the pack held no Ignatius passage, and because the author list was empty the coverage line said «Doctrina has no works by ignatius-of-antioch yet», which is false. Name forms were not the cause: «Ignatius of Antioch», «Ignacio de Antioquía», «Tertullian», «Orígenes», «Cyril of Jerusalem», «Cipriano de Cartago» all resolve to their ids in the plan and in the search.
2. **The answer refused a question the pack could answer.** When the Fathers were searched, the pack held 7 Ignatius passages (Smyrnaeans 8 among them), but none says «catholic» in English (Lightfoot writes «universal Church»). Rule 4 forbids saying a Father was Catholic and rule 1 says «not_found» without evidence, so the model answered «not found» even after the second reading.

**Fixes.**
- `plan.ts` (`clampPlan`): a known author or work the question names adds `fathers` to the plan's sources when the plan restricted them without it. Naming a Father names that source. Deterministic; no author is special-cased. Questions without a named author are unchanged (check added).
- `pack.ts`: a named author is reported missing only when the Fathers were searched (a question limited to the Bible no longer says «Doctrina has no works by X»). Check added.
- Plan prompt: «whether a person belonged to a tradition» is a `verdict_request`.
- Answer prompt, rule 4: a question whether a person was Catholic, Orthodox, Protestant or of another tradition is disputed, not missing. Never yes or no, never «not found» while the pack holds that person's passages. Show his own passages on what the traditions dispute (the Church, bishops, the Eucharist, baptism, Scripture), then the traditions' passages.
- `PLAN_PROMPT_VERSION` → `plan-2026-11-09.2`, `ANSWER_PROMPT_VERSION` → `chat-2026-11-09.4` (e2e literal). Eval: v11–v15 added to `questions.json` (114; `check-eval` count).
- A first version also told the plan that a named author asks for the Fathers; it pushed «¿Qué dice Ireneo sobre la eucaristía?» to Fathers only (1 of 2), so I removed it and kept the deterministic rule in code.

**Real runs** (answer rows deleted after each ask):

| Question | Before | After the fix |
|---|---|---|
| v08 «Was Ignatius of Antioch a Catholic?» | not found 0/3 | **6/6 answered** (disputed, 7 to 12 quotes) |
| v11 «¿Ignacio de Antioquía era católico?» | — | 3/3 (disputed, 7 to 13; Fathers + Catholic pages) |
| v12 «Was Tertullian a Protestant?» (one name) | — | 3/3 (5 to 23) |
| v13 «¿Orígenes era ortodoxo?» (one name, Spanish) | — | 3/3 (7 to 10) |
| v14 «Was Cyril of Jerusalem Orthodox or Catholic?» (place name) | — | 3/3 (12 to 15; Cyril + Catholic and Orthodox pages) |
| v15 «¿Cipriano de Cartago era católico?» («de» form) | — | 3/3 (8 to 13; the first plan called it evidence, then verdict) |

The prose stays attributed: «Ignatius of Antioch writes to churches about the authority of their bishop… In the Spanish translation of that letter he writes «la Iglesia universal»»; no answer says that a Father was Catholic, Orthodox or Protestant (`noVerdict` passes on all).

Named-Father questions that were already answered still answer: p06 7, p03 6 to 8, g01 3 to 11, br03 1 to 3 quotes. **e02** («What does Ignatius say about the Eucharist?») shows 3 to 6 quotes against 15 in round 4's run. This is not caused by this fix: with the round 4 plan prompt the plan also restricts e02 to the Fathers 3 times of 3 (the rule «what the Fathers say → fathers»), and the pack holds 6 Ignatius passages on the Eucharist. That is faithful to the question, but thinner than before. Not changed tonight.

**The app's monthly budget is spent.** The last runs got `ai_budget_exhausted`: `AI_MONTHLY_BUDGET_USD` is not set, so the cap is the default $4, and November's `ai_requests` sum to $4.00 (1,241 requests, mostly evaluation runs). Every server on this database (the review servers too) refuses live answers until Pedro raises `AI_MONTHLY_BUDGET_USD` or the month changes. I did not change it.

Spend: plan diagnostics $0.015 + 32 answers $0.092 = **$0.11**.

## Calls I made

1. Item 4 was already merged (round 2): no change, recorded here.
2. Contractions are applied when rows are read and in the loader, not by rewriting the database (the brief forbids database changes for item 4 and asks for no reload).
3. After the full run showed v02 paraphrasing Matthew 16:18 into one reading, I added a general rule to rule 3 (describe Scripture with its own words; never say what a disputed word, image or pronoun refers to) and re-measured only the 10 verdict questions ($0.04).
4. The «paquete» meta filter (seen in v04).
5. Other Playwright suites of other sessions were running during my runs (in other clones and ports); mine used port 3190 only.
6. Follow-up: v08 left as «not found» (retrieval/verdict, not the second reading); the variance did not point at a round 4 change, so no revert.
7. v08: a named Father adds the Fathers in code, not by a plan-prompt sentence (the sentence narrowed other questions). I did not raise the app's monthly budget when it ran out; I stopped the real runs there.

## Files

`src/features/reader-ai/use-ask-stream.ts`, `src/features/ask/prompts.ts`, `src/features/ask/verify-answer.ts`, `src/features/ask/ask.ts`, `src/lib/ai/contracts.ts` (`PLAN_PROMPT_VERSION` `plan-2026-11-09.1`, `ANSWER_PROMPT_VERSION` `chat-2026-11-09.3`), `src/content/ai-search/collections.ts`, `data/scripts/load-ai-passages.mjs`, `e2e/notes-followup.spec.ts`, `e2e/ai-ask.spec.ts`, `tools/ai-eval/questions.json`, `tools/ai-checks/{check-answer,check-cui,check-eval,check-pack}.mjs`, `docs/features/ai-chat-round4.md`.

```sh
cd ~/Desktop/dev/doctrina && git add src/features/reader-ai/use-ask-stream.ts tools/ai-checks/check-cui.mjs e2e/notes-followup.spec.ts && git commit -m "feat(reader-ai): send notes of other chapters without shared words"
cd ~/Desktop/dev/doctrina && git add src/features/ask/prompts.ts src/features/ask/verify-answer.ts src/features/ask/ask.ts src/lib/ai/contracts.ts e2e/ai-ask.spec.ts tools/ai-checks/check-answer.mjs && git commit -m "fix(ai): plan bible sources, literal scripture, reread not found"
cd ~/Desktop/dev/doctrina && git add src/content/ai-search/collections.ts data/scripts/load-ai-passages.mjs tools/ai-checks/check-pack.mjs && git commit -m "fix(ai): contract de el and a el in Spanish passage labels"
cd ~/Desktop/dev/doctrina && git add tools/ai-eval/questions.json tools/ai-checks/check-eval.mjs docs/features/ai-chat-round4.md && git commit -m "test(ai): add the cross-chapter note case and the round 4 report"
```

v08 (after round 4 was merged; new commits only):

```sh
cd ~/Desktop/dev/doctrina && git add src/features/ask/plan.ts src/content/ai-search/pack.ts src/features/ask/prompts.ts src/lib/ai/contracts.ts e2e/ai-ask.spec.ts tools/ai-checks/check-answer.mjs tools/ai-checks/check-pack.mjs && git commit -m "fix(ai): search the Fathers when a question names one"
cd ~/Desktop/dev/doctrina && git add tools/ai-eval/questions.json tools/ai-checks/check-eval.mjs docs/features/ai-chat-round4.md && git commit -m "test(ai): add named Father tradition-label cases"
```

## Usage (weekly; ceiling 45 %, stop at 43 %)

| Time | Session | Weekly |
|---|---|---|
| 01:26 (start) | 5 % | 40 % |
| 01:55 | 7 % | 40 % |
| 02:07 (end of round 4) | 9 % | 40 % |
| 02:19 (follow-up) | 10 % | 40 % |
| 02:34 (end of follow-up) | 11 % | 41 % |
| 02:37 (v08 start) | 11 % | 41 % |
| 03:02 (v08 end) | 12 % | 41 % |

## For DECISIONS

2026-11-09 · Chat round 4 (Pedro: «sí» to the quality round and to sending notes of other chapters). Notes of other chapters travel with the question even without shared words, ordered by overlap then recency, inside the existing caps; the model decides relatedness. «textos bíblicos» and «versículos» ask for the Bible in the plan. Spanish labels contract «de el»/«a el». Tradition-page passages are attributed to the tradition or its document, «Doctrina's summary» at most once per answer. Scripture is described with its own words, never paraphrased into one reading. The second reading runs on every «not found» whose asked sources are in the pack, whatever its size (one extra call at most). A question that names a Father searches the Fathers even when the plan restricted the sources; «Was X a Catholic?» is answered as a disputed question with that person's own words, never yes or no.

## For GOTCHAS

- Labels of `ai_passages` rows are contracted when read (`withContractions` in `passageFromRow`), not in the database: the stored titles still say «de el» until the next load.
- `clampPlan` adds `fathers` to a restricted `sources` when a known author or work is named: a question like «what do Lutherans say about Augustine?» now also searches Augustine.
- `AI_MONTHLY_BUDGET_USD` defaults to $4; evaluation runs count against it like visitors' questions, and when it is spent every server on the database answers `ai_budget_exhausted`.
- `pickNotes` now sends notes of other chapters without shared words: the request carries up to 6 such notes; the caps (`maxNotes`, `maxNotesChars`, `maxNoteChars`) are what bounds cost and privacy.
