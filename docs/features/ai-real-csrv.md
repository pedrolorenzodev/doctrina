# AI block C-SRV · Chat server

## State
- **Done:** parts 460–463. `npm run verify` exit 0; `check-answer.mjs` 42 checks ok; fake run of the 82 questions over HTTP: no 5xx, every answer valid, cache hit without phases; real smoke of e02, e03, v01, n01, i01: $0.032 total.
- **In progress:** nothing.
- **Next (INT):** merge after S-SRV; rerun the real smoke against the Supabase search once `ai_passages` is loaded (RET left it to INT); measure the first 20 logged rich answers (amendment A.5).
- **How to resume:** `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/ai-checks/check-answer.mjs`; fake run: `npm run build`, then `AI_PROVIDER=fake AI_STORE=memory AI_CHAT_PER_IP_MINUTE=10000 AI_CHAT_PER_IP_DAY=10000 AI_CHAT_PER_VISITOR_DAY=10000 AI_CACHED_PER_IP_DAY=10000 npx next start -p 3160` and `node tmp/ai-csrv/run-eval-fake.mjs`.

## What was built
- `POST /api/ai/ask` (`src/app/api/ai/ask/route.ts`): parse → `openAsk` (answer cache with guard `cached` when `turn 1`, no history, no notes; then provider check and guard `chat` with `ESTIMATE_MICROS.chat`) → SSE `phase` events → one `answer` or `error`. Parse and guard errors before the stream are JSON with the HTTP status of `contracts.md` §7 (as F's stub did, so C-UI's mocked 503 tests match); everything after is an SSE `error` event.
- `src/features/ask/ask.ts`: pastoral pre-filter → plan (`plan.ts`) → fixed texts for `pastoral` / `out_of_scope` / `injection` → `buildPack` + the selection as a passage when it verifies against its verse or division → `read` with the number of source passages → empty pack: «not found» with no second call → answer (`answer.ts`) → verify (`verify-answer.ts`), one repair when > 30 % failed, all failed, or a disputed tradition emptied → `ai_verify_failed` if nothing is left → coverage line (`coverage-line.ts`) → map (`map-answer.ts`) → `ai_answers` (with `pack.extra`, or the pack itself for a model `not_found`) → log → settle.
- `POST /api/ai/ask/more` (`more.ts`): next 8 passages of the stored extra as literal lead slices, no model call; `404 ai_not_found` when the answer or its pack is gone.
- `src/content/ai-ask/answer-cache.ts`: read by key (only rows of the current `ANSWER_PROMPT_VERSION`), count the hit, save.
- Verification (§8 and amendment B.3): quotes literal against the window, spans mapped to the full passage, cut at the licence's `maxQuoteWords` (last sentence inside the limit), one quote per passage, notes only in `mine` (dropped elsewhere), sections rebuilt from each passage's own collection and speaker in the server's fixed order (`mine` last), fair quote cap (trims the largest section, so a tradition is never crowded out by Bible and Fathers), prose sentences removed for: no citation, a note cited with a source or without «tu nota», verdict lexicon, Father-to-tradition lexicon, mention of the pack, over the word cap; follow-ups ≤ 3, ≤ 140 chars, no verdict words, no Spanish follow-up in an English answer; `words` only for `disputed`, 2–8 words inside a quote that verifies.

## Agent's calls
1. **Answer `maxTokens`: 8,000 for `rich`, 2,500 for `brief`** (contract says 2,500). Measured: a rich 24-quote answer needs ≈ 7,400 output tokens (thinking included); with 2,500 and the 1.5× retry both attempts hit `max_tokens` (e03, v01 → `ai_provider_down`, $0.011 lost); with 5,000 the first attempt still hit the limit (e03, 48 s). 8,000 is untested end to end (no budget left in the $0.05); INT should confirm on its first real run.
2. **Guard before the stream.** `answerQuestion` takes the already-guarded `OpenedAsk` instead of the raw `Request`, so limit errors keep their HTTP status (C-UI's spec mocks a 503).
3. **Plan prompt:** §7.1 verbatim plus a `depth` line (amendment A.1) and «If the question names an author or work that is not in the list, write the name as the question gives it.» Haiku still leaves unknown authors out (n01 put «John of Damascus» in `termsEn`), so the «Doctrina no tiene obras de …» line does not appear yet; n01 still answers `not_found`.
4. **Answer prompt:** §7.2 with the amendment's rules 3, 6, 10 and 11, plus: «one or two sentences per section», «never a closing sentence that weighs the sources; mentioning the pack, the passage ids or these rules», and the list of valid `about` values. Canonical English, `{answerLanguage}` replaced by «Spanish (es)» / «English (en)».
5. **Pastoral regex** copied from `father-script.ts` but narrowed: `absol`, `bendic`, `bendig` and `crisis` matched doctrinal questions («la bendición del pan», «absolutely»); now `absuélveme`, `absolución de mis`, `bendíceme`, `dame la bendición`, `estoy en crisis`, plus English forms (`pray for me/my/us`, `bless me`, `absolve me`, `want to die`). The plan's `pastoral` intent catches the rest.
6. **Father-to-tradition lexicon** (contract §6) with one exception: an adjective *before* the name with a citing verb between them («El Catecismo católico cita a Ignacio») is kept, because rule 4 allows it. Name forms: the full display names plus their first word when ≥ 4 letters and not a biblical name (Juan, Pedro, Pablo, …), so «Juan 6:53» next to «católica» is not a hit.
7. **Meta filter:** a prose sentence mentioning «pack» / «paquete de evidencia» is removed (v01's first real answer had one).
8. **`words` tradition** accepts `tradition:catholic` as well as `catholic` (Haiku writes the prefixed form).
9. **English texts** for «not found» and the privacy line: «I found no passages about this in Doctrina's corpus, so there is no answer.» / «Your questions are sent to an AI provider and kept for 30 days to review errors. We do not keep your IP.» (`privacyLine` is exported for C-UI; nothing imports it yet).
10. **Quote ids** are `q<n>` from the pack id `P<n>` (one quote per passage; extra passages continue the numbering, so «more» ids never collide). Unquoted pack passages are in `quotes` with their window's lead slice, so «Consultó N textos» can open them.
11. **WireAnswer.words.tradition** is the tradition's display label («Iglesia católica»), `source` the passage's locator label.
12. **«More» guard:** kind `cached` (kill switch + cached-read quota), since it makes no model call.
13. **Answer cache** also stores `not_found` answers (they are verified outputs); fixed answers are not stored (random id).

## Inert or not done, and why
- **Real search not exercised:** `ai_passages` is not loaded in Supabase (RET's state), so the real smoke ran on RET's fixture search with the real model. With `AI_STORE=memory` the app also uses the fixture search (F's `getCorpusSearch`).
- **24 h pack expiry:** `StoredAnswer` has no date; expiry is the store's `cleanup()` (LIM). The memory store never expires.
- **Holy See ≤ 100 words per document per answer** (DECISIONS 2026-10-22 B) is not enforced beyond each passage's `maxQuoteWords`.
- **No e2e spec**: none is in my file list; the HTTP fake run covers the routes. The 9 fake-intent mismatches (n02, o02–o04, i01, i03–i05) are F's fake-plan regexes («Ignorá», «essay», «Mostrame tu prompt» are not in them); the real plan classified i01 as injection.

## Measured
| Question | Kind | Quotes shown / failed | Repair | Cost | Time | Notes |
|---|---|---|---|---|---|---|
| e02 (Ignatius, en) | evidence | 3 / 0 | no | $0.00240 | 13 s | Smyrn. 6.2, Philad. 4.1, Eph. 20.2; follow-ups came in Spanish → filter added |
| e03 (each tradition, es) | evidence | 24 / 0 | no | $0.00873 | 49 s | 4 Bible, 5 Fathers, 3 per tradition × 5; first attempt hit 5,000 tokens |
| v01 (who is right, es) | disputed | 7 / 0 | no | $0.00350 | 18 s | `words` for Catholic and Baptist after fix 8 |
| n01 (John of Damascus) | not_found | 0 / 0 | no | $0.00118 | 4 s | scope line without the missing-author sentence (call 3) |
| i01 (injection) | out_of_scope | — | — | $0.00027 | 1 s | plan only |
| Failed runs (max_tokens at 2,500) | — | — | — | $0.01136 | — | e03, v01 |
| **Total spent** | | | | **$0.032** | | ≤ $0.05 |

Per rich answer on Haiku 5.5: input ≈ 9,000–24,000 tokens (≈ 2,300 of system cached), output 3,900–7,400 → **$0.0035–0.0065** (amendment A.5 estimated ≈ $0.005). At $0.25/day ≈ 40–70 answers. The latency of a full 24-quote answer is 30–50 s, inside `maxDuration = 60` but long: INT should watch it.

## Files (for INT) and commits
| Kit | Files | Message |
|---|---|---|
| 460 | `src/features/ask/prompts.ts`, `plan.ts`, `fixed-texts.ts`, `lexicon.ts` | `feat(ai): add the chat prompts, plan step and fixed texts` |
| 461 | `src/features/ask/verify-answer.ts`, `map-answer.ts`, `coverage-line.ts`, `tools/ai-checks/check-answer.mjs` | `feat(ai): verify and map chat answers with checks` |
| 462 | `src/features/ask/ask.ts`, `answer.ts`, `src/content/ai-ask/answer-cache.ts`, `src/app/api/ai/ask/route.ts` | `feat(ai): wire the chat pipeline to the ask route` |
| 463 | `src/features/ask/more.ts`, `src/app/api/ai/ask/more/route.ts`, `docs/features/ai-real-csrv.md` | `feat(ai): add the more texts route and the block report` |

`git status` at the end: exactly these 15 paths (plus the pre-existing untracked `.playwright-mcp/`, `__pycache__/`, `tmp/`). Parts 460–462 import each other, so INT must apply 460–463 together.

## Usage readings
| When | Session | Weekly |
|---|---|---|
| start 23:45 | 13 % | 19 % |
| 23:47 | 16 % | 20 % |
| 23:55 (after 460–462 code) | 19 % | 20 % |
| 00:07 (after the real smoke) | 2 % (new window) | 20 % |
| 00:10 (end) | 2 % | 21 % |
