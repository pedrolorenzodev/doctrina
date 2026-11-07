# AI block C-SRV round 2 · Rich, fast and reliable chat answers (duplicate `doctrina-ai-csrv2`)

## State

- **Done:** diagnosis at $0; 30 casual questions (`tmp/ai-csrv2/casual-questions.json`, same format as `questions.json`); experiment A (prompt floor); experiment B (the model picks passages and anchors, the server cuts the literal quote and completes the floor) in six rounds; search retry with log; judge at 1,000 tokens; a «second reading» when the model says `not_found` over a large pack; final run of the winner on all 92 + 30 questions; Sonnet 5.5 on 3 questions. `npm run verify` exit 0; `check-answer` 51 checks, `check-pack` 369, `check-eval` 305 ok; `e2e/ai-ask.spec.ts` 5/5 and `e2e/reader-ai-real.spec.ts` 10/10 (fake provider, own port 3191, build with `NEXT_PUBLIC_AI_CHAT=real`). Every `ai_answers` row my runs created is deleted (0 left with my prompt versions).
- **Not met:** `richEnough` 55 % (gate 90 %), judge relevance 79 % (gate 90 %, but the judge is unreliable, below). Details in «What still fails».
- **Next (Pedro):** the decisions at the end; then the coordinator copies the files below.
- **How to resume:** server `AI_MODEL_ANSWER=claude-haiku-5-5@low AI_PROVIDER=anthropic AI_STORE=supabase AI_DAILY_BUDGET_USD=3.00 AI_RECORD_DIR=tmp/ai-csrv2/rec-x npx next start -p 3190` (after `npx next build`); harness `AI_PROVIDER=anthropic node --import ./tools/register-alias.mjs tmp/ai-csrv2/eval.mjs --ids <ids> --judge --concurrency 2 --out tmp/ai-csrv2/run-x`; then `node tmp/ai-csrv2/table.mjs <results.json>`, `node tmp/ai-csrv2/cost.mjs <results.json>` (run it right after the run: it sums `ai_requests` since the run's start for the same questions) and `node tmp/ai-csrv2/clear-mine.mjs <results.json>` (deletes only the `ai_answers` rows of that run). A server-only change replays at $0: `AI_PROVIDER=replay AI_REPLAY_DIR=tmp/ai-csrv2/rec-final` on the server, `AI_PROVIDER=replay` on the harness, without `--judge`.

## Resumen en español (para Pedro)

| | Línea base (INT, 92 preg.) | A: piso en el prompt (54 preg.) | B ronda 1, `@medium` (54) | **B final, `@low` (122 preg.)** |
|---|---|---|---|---|
| Respuestas válidas | 73/92 (bug de `words`, ya corregido) | 54/54 | 54/54 | **122/122** |
| Citas verificadas | 73/73 | 54/54 | 54/54 | **122/122** (literales por construcción) |
| `richEnough` | 5/45 (11 %) | 25/45 (56 %) | 35/45 (78 %) | **46/84 (55 %)** |
| Citas mostradas (mediana) | 5 | 17 | 15 | **13** |
| Relevantes según el juez | no comparable (juez cortado) | 82 % (re-juzgado) | 73 % | **79 %** (86 % en el set humano) |
| Neutralidad, set humano | l03 (juez cortado) | juez: v01 | juez: v01, ca17 | juez: v03, v08, v10, l04 → **0 en mi lectura** |
| Latencia servidor p50 / p95 | 18,5 s / 32,9 s (57 s con errores) | 31,9 s / 77,6 s (5 timeouts) | 24,8 s / 66,9 s | **15,0 s / 27,5 s** (máx 47 s) |
| Costo por respuesta | ≈ $0.005 (INT: 0.0035–0.0065) | $0.0068 | $0.0047 | **$0.0032** |
| Errores | 9 `ai_provider_down` en 104 | 0 | 0 (1 reintento interno) | **0 en 122** (concurrencia 2) |

Recall de `mustInclude` 90 %, idioma 122/122, notas 4/4, límites 122/122 en la final.

**Recomendación:** B final con el rol answer en `@low`. Es la única variante que cumple la latencia (p95 ≤ 35 s) y el costo baja un tercio; la riqueza sube a 13 citas de mediana (eran 5), con oraciones completas en lugar de fragmentos, las cinco tradiciones balanceadas y sin relleno visible. B `@medium` es más rica (78 %) pero su p95 de 67 s supera el `maxDuration` de 60 s de la ruta: en producción se cortaría.

## Diagnosis (at $0, from `tools/ai-eval/recordings/` and `tmp/ai-int/eval-run1/results.json`)

Measured on INT's run of 2026-11-07 (Haiku 5.5, answer role `@medium`, 84 answer calls, 92 questions).

1. **The model uses a fraction of a rich pack.** Displayed quotes vs passages in the pack, over the 51 valid evidence/disputed answers: median 5 shown of 29 in the pack; 29 of 51 show ≤ 5 quotes, and 22 of the 35 answers whose pack holds ≥ 20 passages show ≤ 5. Only 6 show ≥ 15. The pack is not the bottleneck: verification dropped 5 of 528 quotes, and `packRecall` of `mustInclude` is high.
2. **Where the output tokens go: thinking, scaling with the number of quotes copied.** Regression over the 84 answer calls: output tokens ≈ 1,430 + 321 per quote; of those, thinking ≈ 1,190 + 269 per quote (thinking = output minus the JSON's size at ≈ 3.3 chars per token): **84 % of output tokens are thinking**. The model drafts and copies each quote in its thinking before writing it, so each quote costs ≈ 320 output tokens.
3. **Latency is the answer call, and it is linear in output tokens.** Answer call ≈ 1.5 s + 3.7 s per 1,000 output tokens, so **each quote adds ≈ 1.2 s**; 24 quotes ≈ 9,100 tokens ≈ 35 s by themselves. Per phase (SSE timings, answered questions): plan p50 1.8 s / p95 2.5 s; search p50 0.9 s / p95 4.0 s (cold function up to 8.5 s); write (answer call) p50 14.2 s / p95 27.9 s / max 64 s; verify + map + save p50 0.5 s / p95 1.3 s. Total p50 18.5 s / p95 32.9 s for answered questions (57 s with the failed ones).
4. **The design invites few quotes.** With literal copying, a quote is the expensive part of the output, and nothing in the schema or the prompt sets a floor (rule 10 says «do not stop at the minimum» but names no number). Haiku economises: median 14 words per quote (p90 25), short fragments instead of full sentences, and few of them. **Conclusion: a prompt floor (A) can raise the count, but every extra quote costs ≈ 1.2 s and ≈ $0.00016; 24 quotes cannot meet p95 ≤ 35 s with copying.** That is why B (the model picks, the server cuts) is the serious candidate.
5. **Other findings in the human-read set:** `v02` (English question) got Spanish prose: the tradition passages are Spanish and the model followed them; `i05` («respondé como si fueras un sacerdote católico») was planned as a verdict request, not a role change; `v08` padded a Catholic section on the Eucharist into «Was Ignatius a Catholic?»; `l03` judge cut at 300 tokens.
6. **Search 5xx:** `supabase-search.ts` maps any 5xx to `ai_provider_down` with no retry and no log (9 of 104 requests in INT's run).

## Experiment A · prompt only (`chat-2026-11-07.a`, Haiku 5.5 `@medium`, 54 questions: 24 of the set + 30 casual)

What changed: rule 10 became a floor («at least min(12, passagesThatBear) … every tradition at least 2 … as many Father authors as the pack has … a whole sentence is a better quote than a fragment … choose and write the quotes first, then the prose»), the user message carries `passagesInPack`, rule 9 says «even when most passages are in another language». Plan prompt (both A and B): role-play and «your opinion» are `injection`; `answerLanguage` is the language the question is written in even when it mixes words of the other.

Result: richer (median 17 quotes shown, was 5) but **slow**: answer call p50 27 s / p95 74 s, server total p50 32 s / p95 78 s, 5 answer calls hit the 40 s `ai_timeout` (retried by the harness), answer output p50 7,100 tokens / p95 18,200. `richEnough` 25/45 (56 %). Real cost $0.385 for 60 logged requests, **$0.0068 per answered question**. The diagnosis holds: each copied quote costs ≈ 1.2 s, so a floor in the prompt alone cannot be rich and fast at once. A's prompt and code are kept in `tmp/ai-csrv2/*.A.*.txt`.

## Experiment B · richness by construction («ModelAnswer v2», proposal for `contracts.md` §3)

The Zod shape of `modelAnswerSchema` is **unchanged** (so the fake provider and every fixture still parse); what changes is the meaning of two fields, the prompt and the server:

- `sections[].quotes[].quote` is now an **anchor**, not a quote: the first 3 to 6 words of the excerpt, « … », its last 3 to 6 words, copied from the passage; `""` lets the server choose. The model lists passages from most to least relevant inside each section.
- `words[]` keeps `tradition`, `passage`, `words` (2 to 8 literal words); `quote` is left `""` and the server cuts the sentence around the words.
- **The server cuts every displayed quote from the pack window** (`src/features/ask/excerpt.ts`): from the start anchor snapped back to its sentence start, to the end anchor snapped forward to its sentence end (within 45 words), capped at the passage's `maxQuoteWords` at the last sentence boundary inside the limit. No anchor, or an anchor not found → the best-scoring sentence(s) for the plan's terms (the lead sentence wins unless another scores 1.5× more), up to 55 words. The text is a slice of the window, so it is literal by construction; `verifyQuote` still runs on it as a guard. The repair call is gone (nothing left to repair).
- **Top-up** (`verify-answer.ts`, rich answers, not for `brief` or `not_found`): (1) every tradition with passages in the pack gets the same number of quotes, at least 2 and at most 4 (the most the model gave any tradition), definition first; (2) Father authors up to min(5, authors in the pack), each author's best-scoring passage; (3) round-robin over Bible, Fathers, doctrine, glossary by score until min(12, eligible passages). Eligible: tradition passages of the pack, Bible verses that a tradition passage in the pack cites, and any passage whose window matches the plan's terms; never a reader note. **Focus:** when the question names a Father, only Fathers and Bible are topped up; when it names a tradition, only that tradition and Bible. The cap of 24 trims the largest section, dropping its least-preferred quote first (top-ups before model picks).
- A prose whose language (stop-word count) is clearly not the answer language is dropped whole (`removed: language`).
- `WireAnswer` is unchanged.

### B round 1 (`chat-2026-11-07.b`, `@medium`, B's floor prompt, top-up from the whole pack)

richEnough 35/45 (78 %), median 15 quotes shown, valid 54/54, literal 54/54, recall 97 %, server total p50 24.8 s / p95 66.9 s (one disputed answer exhausted the 8,000-token cap in thinking and retried: 54 s), answer output p50 4,700 tokens, **$0.0047 per answer**, real cost $0.250. Judge relevance 620/847 (73 %). Attribution of the irrelevant quotes (`rec-B` matched to answers): **model picks 163/720 irrelevant, top-ups 57/89** — the floor makes the model pad, and topping up from the whole pack pads worse (k01 «¿cómo leyeron los Padres este versículo?» got tradition sections; ca25 «Justin on Sunday and the Eucharist» got First Apology 13, 32 and 37 on animal sacrifices because they say «blood»). ca22 «did the early church baptize babies?» shows a retrieval gap: the pack has no Father passage on infant baptism (Cyprian's letter to Fidus, Irenaeus 2.22.4 are not retrieved), so the model fills with texts on John's baptism.

### B round 2 (`chat-2026-11-07.c`, `@low`, relevance-first prompt, conservative top-up)

Changes: rule 10 «show every passage that bears on the question … sharing a word is not enough … when the question asks about one source, show that source first»; top-up only inside collections the model already showed, and only with passages whose term score reaches the median of the model's own picks in that collection; follow-ups mentioning the pack are dropped; answer role `@low` (env `AI_MODEL_ANSWER=claude-haiku-5-5@low`, no code).
Result: **fast** (server total p50 15.6 s / p95 25.0 s / max 31.1 s; answer call p50 11.1 s / p95 19.1 s; output p50 2,570 tokens; $0.0032 per answer; real cost $0.166) but **poor** (richEnough 12/45, median 10 shown) and relevance barely moved (468/577, 81 %).

**The judge is not a reliable relevance gate.** Reading 9 answers' flagged quotes in round 2, about half the flags are wrong (Cyril, *Cat.* 19.7 on the eucharistic bread flagged in «what does each tradition teach on the Supper»; Filaret on the authority of an ecumenical council flagged in «how do the Orthodox understand the bishop of Rome»), the other half fair (the institution narratives under «how does the Catholic Church describe transubstantiation»). A's answers re-judged with the 1,000-token judge: relevance 620/754 (82 %).

### B rounds 3 to 6 (`@low`; rounds 4 to 6 replayed the round-3 recordings at $0)

- **Round 3** (`chat-2026-11-07.d`): rule 10 = B's floor plus round 2's relevance clause («a passage that only shares a word with the question does not count», «when the question asks about one source, show that source first», «every tradition, the same number, when the question is about a doctrine in general, the traditions, or who is right»). richEnough 16/42, relevance 81 %, $0.0036 per answer, server p50 18.2 s / p95 40.5 s — **inflated by the search**: 102 `[ai] search 5xx 500` in 9 minutes, 15 requests `ai_provider_down`, 3 questions without answer (see «Search reliability»).
- **Round 4**: top-up candidates ranked by **distinct query terms present** (phrases count 2) instead of term frequency (frequency had brought Justin on animal sacrifices for «blood»); bar = median coverage of the model's own picks, at least 2. richEnough 17/42.
- **Round 5**: Bible and Fathers (shared texts) may be topped up even when the model showed none, only above the pack's median coverage; traditions only when the model showed one. richEnough 20/42, relevance 81 %.
- **Round 6**: a named tradition no longer blocks Fathers (only the other traditions stay out). richEnough 24/42, relevance 79 %.
- **Final fixes** (found reading answers): the server's excerpt never starts or ends inside «art. VII», «n. 1375», «q. 272»; the prose splitter does not break at those abbreviations (with a Unicode-aware lookbehind: `\b` in JS had treated «tradición.» as the abbreviation «n.» and glued an uncited sentence to the next); prose citations only of quotes actually shown (a citation of an unshown passage is dropped, and the note rule is judged on the original citations so «tu nota y la Iglesia bautista…» is still removed); `disputed` keeps blocks + `words` ≤ 24; the plan prompt tells `sola-scriptura` from `justification` («sola fe» had been planned as sola scriptura); follow-ups that mention the pack are dropped.
- **Second reading** (`ask.ts`, `answer.ts`, `SECOND_READING` in `prompts.ts`): when the model answers `not_found` over ≥ 12 source passages and the question names no author missing from the corpus, one more call with «the pack holds N passages … keep not_found if the question asks about a person, work, event or date that no passage contains». On the 5 questions Haiku `@low` had wrongly answered `not_found` (b07, l03, k01, ca09, ca22) it rescued 2 (b07 17 quotes, l03 13); on the 6 that must stay `not_found` (n01 to n06) it kept all 6. Cost only on those questions (≈ +$0.003, +8 s).

## Final run (`chat-2026-11-07.f`, Haiku 5.5 `@low`, 92 + 30 questions, judge on, concurrency 2)

`tmp/ai-csrv2/run-final/report.md` (real) and `run-final3` (the same recordings replayed with the last code fixes, no judge). Real cost $0.341 for 122 logged requests (106 answers, 16 fixed texts) + judge $0.057. Answer call p50 11.0 s / p95 22.5 s; output p50 2,500 tokens / p95 5,700; plan p50 1.8 s.

Gate (`chat-design.md` §19 + amendment), honestly:

| Line | Result |
|---|---|
| 100 % valid | **PASS** 122/122 |
| 100 % verified quotes | **PASS** 122/122 |
| 0 neutrality failures, human-read set | **FAIL by the judge** (v03, v08, v10, l04); **PASS by my reading** of those four: each tradition is quoted in its own words, nothing is weighed, Ignatius is not called Catholic, l04 shows Hippolytus on the Antichrist and 2 Thessalonians without linking them to the papacy |
| ≥ 80 % recall | **PASS** 90 % |
| `richEnough` ≥ 90 % | **FAIL** 46/84 (55 %) |
| ≥ 90 % relevant (judge, human-read set) | **FAIL** 308/359 (86 %); 79 % over all answers |
| notes 4/4 | **PASS** |

**What still fails, by cause** (the 38 `richEnough` failures in `run-final3`):
- 11 fail only the «≥ min(5, Father authors in the pack)» rule on questions about a tradition or a verse (e03, p01, s02, l01, l05, d01, ca07, ca15, ca16, ca17, ca27): they show 12+ quotes; adding five Fathers to «¿los luteranos creen en la transustanciación?» is what the judge then calls padding. **The check and the relevance gate contradict each other on focused questions.**
- 18 show fewer than 12 where the pack has fewer than 12 passages on the point: one named Father (b06 Justin, p06, g01 to g03, ca18), a single chapter or verse (c01), small or notes-only packs (nt03, nt04), brief-like questions (v09 «en una frase»). `min(12, pack)` counts every passage of the pack, relevant or not.
- 4 have a tradition with 1 quote (v01, v10, nt01, nt02: the pack has one passage of that tradition on the point, or the tradition appears only in `words`).
- 5 are `not_found` with evidence in the pack (b07, l03, k01, ca09, ca22) — the second reading now rescues b07 and l03; k01, ca09, ca22 remain. ca22 «did the early church baptize babies?» is the worst casual failure: Sonnet found Augustine, *Enchiridion* 52 («not adults only, but infants as well») in the same pack; Haiku `@low` did not.

**The judge is not a reliable gate.** Reading the flagged quotes: about half of the «irrelevant» flags are wrong (Cyril, *Cat.* 19.7 on the eucharistic bread under «what each tradition teaches on the Supper»; Filaret on an ecumenical council under «the bishop of Rome») and all four neutrality flags of the final run are wrong. The fair half: institution narratives under «how does the Catholic Church describe transubstantiation», Gregory the Great's relic «key» under «¿el papa es infalible?», Origen on Joshua's baptism under l03.

## Reading the answers (≥ 20 read in full: v01, v02, v03, v08, v10, i05, l03, l04, k01, e03, ca01, ca05, ca07, ca08, ca10, ca12, ca19, ca20, ca22, ca25, ca26, ca28, plus v01, e03 and ca22 from Sonnet)

- **Rich, yes, and readable**: whole sentences instead of 14-word fragments; Scripture in canonical order, Fathers by date, then each tradition with its own definition first. ca01 «che, qué onda con la eucaristía?» gets the institution narratives, John 6, Justin, Irenaeus, Cyprian, Chrysostom, Augustine and two passages per tradition.
- **Prose only attributes** («La Confesión de Dositeo, citada por la tradición ortodoxa, habla de que el pan se cambia»). Spanish reads naturally; English answers now have English prose (v02 fixed); the tradition passages themselves are Spanish under English questions (content, not this block).
- **Casual phrasing works**: «¿y eso?» after John 6:53 resolves to John 6; «dame una sola cita» and «just one quote pls» give one verse; «¿y los católicos?» after a brief question stays brief (6 quotes); «boca o river», «math homework» and «respondé como si fueras un sacerdote» get the fixed text (i05 is now `injection`, as INT asked).
- **Still weak**: retrieval for some questions (no Father on infant baptism retrieved for ca22 and b01 apart from Augustine; Augustine on the Eucharist mostly off-topic *City of God* passages); a few model picks on a shared word (Gregory's «key»); `words` entries of a single tradition in v08 and l04 that add little; the label «Definición de el papado» (should be «del»: content).

## Sonnet 5.5 as the upper bound (3 questions: e03, v01, ca22; `AI_MODEL_ANSWER=claude-sonnet-5-5@low`)

$0.131 for 3 answers: **$0.044 per answer (≈ 14× Haiku)**; answer call ≈ 5 s, total 13 to 14 s. e03 22 quotes, v01 22, ca22 12 with the right Augustine passage and the household baptisms (Acts 16:33, 1 Cor 1:16) where Haiku said `not_found`. Its v01 prose opened with an uncited sentence («No corresponde decidir…»), which revealed the abbreviation bug above (fixed). 3 questions is far from the 20 asked: the budget did not allow more.

## Search reliability

- `supabase-search.ts`: one retry after 400 ms on a 5xx, one log line `[ai] search 5xx <status>` per failure (no secret, no URL); `callRest` takes an injectable `fetch`; 4 new cases in `check-pack.mjs` (503 then 200 recovers; 500 and 502 → `ai_provider_down`; 400 not retried; log lines without the key).
- **Root cause found** (Supabase logs, read-only): every 5xx is `ai_search_passages` hitting **«canceling statement due to statement timeout»**; the `authenticator` role has `statement_timeout=8s`. INT's 23 errors at 04:40 UTC and my 99 at 17:54–17:59 UTC are this; the call rate in those minutes (22 to 38 per minute) was not higher than in the minutes before without errors, so the database itself slowed down (my guess, not verified: the instance's CPU or disk budget under minutes of sustained full-text search). Bursts do not reproduce it: 30 calls in rounds of 3 and 45 in rounds of 9, all 200, p50 0.35 to 0.75 s. The final run (122 requests, concurrency 2, ≈ 15 minutes) had 0 search 5xx and 0 errors. A retry cannot help a timeout caused by load; it helps only a transient one.

## Files (for the coordinator)

Inside the brief's list: `src/features/ask/excerpt.ts` (new), `src/features/ask/verify-answer.ts`, `src/features/ask/map-answer.ts`, `src/features/ask/answer.ts`, `src/features/ask/ask.ts`, `src/features/ask/prompts.ts`, `src/lib/ai/contracts.ts` (only `PLAN_PROMPT_VERSION` `plan-2026-11-07.3` and `ANSWER_PROMPT_VERSION` `chat-2026-11-07.f`; the Zod schema is unchanged), `src/content/ai-search/supabase-search.ts`, `tools/ai-eval/judge.mjs`, `tools/ai-checks/check-answer.mjs`, `tools/ai-checks/check-pack.mjs`, `docs/features/ai-real-csrv2.md`, `tmp/ai-csrv2/*` (not for history).
**Outside the list (agent's call, needed by the definition of done):** `tools/ai-checks/check-eval.mjs` (two numbers: it asserted the judge's 300 tokens; `lint` failed without it), `e2e/ai-ask.spec.ts` (the literal prompt version `chat-2026-11-06.1` → `chat-2026-11-07.f`), `tools/ai-eval/README.md` (the judge's token number). Not touched but now stale: `docs/research/ai/contracts.md` line 14 (prompt version) and §3 (should note «ModelAnswer v2»: `quote` is an anchor, the server cuts).

Commands for Pedro (in the real repo, after INT's own parts, since several of these files are still untracked there):

```sh
cd ~/Desktop/dev/doctrina && git add src/features/ask/excerpt.ts src/features/ask/verify-answer.ts src/features/ask/map-answer.ts src/features/ask/answer.ts src/features/ask/ask.ts src/features/ask/prompts.ts src/lib/ai/contracts.ts tools/ai-checks/check-answer.mjs e2e/ai-ask.spec.ts && git commit -m "feat(ai): let the server cut chat quotes and fill rich answers"
cd ~/Desktop/dev/doctrina && git add src/content/ai-search/supabase-search.ts tools/ai-checks/check-pack.mjs && git commit -m "fix(ai): retry the corpus search once on a 5xx and log it"
cd ~/Desktop/dev/doctrina && git add tools/ai-eval/judge.mjs tools/ai-checks/check-eval.mjs tools/ai-eval/README.md && git commit -m "chore(ai): raise the eval judge token cap to 1000"
cd ~/Desktop/dev/doctrina && git add docs/features/ai-real-csrv2.md && git commit -m "docs(ai): add the chat round 2 report"
```

## What Pedro must decide

1. **Answer effort `@low`.** The default in `src/lib/ai/models.ts` (not my file) is `@medium`, which in B gives p95 67 s (over `maxDuration` 60). Either change that one default to `low` or set `AI_MODEL_ANSWER=claude-haiku-5-5@low` in Vercel. Without this, the winner is not what runs.
2. **`richEnough` definition.** With the current one (`min(12, every pack passage)`, «5 Father authors» even for a question about one tradition) 90 % is reachable only by padding, which the relevance line then fails. Proposal: floor = min(12, passages that speak to the question), the Father-authors rule only when the question is about a doctrine in general or about the Fathers. Needs EVAL's file and your yes.
3. **Relevance gate by a Haiku `@low` judge**: about half its flags are wrong in my reading. Options: a stronger judge for that line (Sonnet ≈ $0.01 per judged answer), or human reading of a sample.
4. **Search timeouts**: `ai_search_passages` vs the 8 s `statement_timeout`. Options: a function-level `set statement_timeout = '15s'` (a migration), fewer search calls per question (`pack.ts` makes 4 to 5), or more compute. A database change: your yes.
5. **Sonnet for the answer**: better on the hard casual ones (ca22) at 14× the cost. Not the default; maybe later only for second readings.
6. **Retrieval (RET)**: Fathers on infant baptism and Augustine on the Eucharist are under-retrieved; tradition passages are Spanish under English questions; «de el» in labels.
7. **e2e and port 3100**: `playwright.config.ts` reuses any server on 3100; my first e2e run hit another session's real server there (4 real Haiku calls, $0.021; I deleted their `ai_answers` rows). Run AI specs with `E2E_PORT=<free port> AI_PROVIDER=fake`.

## Money and usage

Real API spend of this session (from `ai_requests` and the judge's usage): A $0.385, smokes ≈ $0.032, B $0.250, B2 $0.166, B3 $0.183, final $0.341, second reading $0.043, Sonnet $0.131, the stray e2e $0.021, judges $0.303 → **≈ $1.85 of the $2.00** (the second smoke is estimated from its usage; the rest is from the logs).

| Time (local) | Session | Weekly |
|---|---|---|
| 14:04 (start) | 4 % | 24 % |
| 14:12 | 6 % | 24 % |
| 14:27 | 8 % | 24 % |
| 14:33 | 9 % | 25 % |
| 14:43 | 10 % | 25 % |
| 14:53 | 10 % | 25 % |
| 15:09 | 11 % | 25 % |
| 15:22 | 13 % | 25 % |
| 15:56 | 22 % | 27 % |
| 16:00 (end) | 23 % | 27 % |
