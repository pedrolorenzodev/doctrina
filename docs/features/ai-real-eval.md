# AI block EVAL · Evaluation harness (duplicate `doctrina-ai-eval`)

## State

- **Done:** `npm run ai:eval` over HTTP: runner, 13 automatic checks, judge, report, Supabase persistence (against a mock only), README, 92-question file. `npm run verify` exit 0; `tools/ai-checks/check-eval.mjs` 305 checks ok (inside `lint`). Acceptance met: the full 92-question run against F's stub route (fake mode, judge on) completes without crashing in 36 s, the report renders, `--max-usd 0` refuses a real run.
- **In progress:** nothing.
- **Next:** INT copies the files below (after C-SRV, so the run is against the real route), adds `AI_EVAL_SECRET` to the local `.env.local`, and runs the first real evaluation (`--judge --max-usd 0.75`).
- **How to resume:** read `tools/ai-eval/README.md`; `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/ai-checks/check-eval.mjs` re-runs the checks.
- **Usage readings (weekly):** 23:45 → 19 %, 23:48 → 20 %, 23:51 → 20 %, 00:01 → 20 %, 00:02 → 20 % (session 0–18 %). Cap for this session was 25 %.

## What was built

- `tools/ai-eval/run.mjs`: flags `--base --subset --ids --judge --max-usd --concurrency --out` (+ `--provider`), request body and headers as in the brief (`notes` comes from the question: the 4 note questions send notes), SSE parsing (phases with timing, answer or error, retry of `ai_provider_busy|down|timeout` twice), the cost estimate printed and enforced, the 13 checks (`validWire`, `intentOk`, `kindOk`, `quotesLiteral`, `hasQuotes`, `traditionsAll`, `mustInclude` with recall and pack recall, `mustNotInclude`, `language`, `limits`, `noVerdict`, `richEnough`, `noteNotEvidence`), `results.json` rewritten after every question. Importable (the CLI starts only when run as a script) so the checks are testable.
- `tools/ai-eval/judge.mjs`: the judge prompt verbatim (`JUDGE_BASE`) plus one amendment sentence; `judgeAnswer` through `getAiProvider()` with role `judge`, `maxTokens` 300.
- `tools/ai-eval/report.mjs`: `report.md` (totals, gate with PASS/FAIL/N/A per line, check rates, per-question table, full human-read answers), `summarize`, `persistToSupabase` (REST, skips with a reason line).
- `tools/ai-eval/questions.json`: the 82 questions unchanged + 6 `brief` (br01–br06) + 4 with `notes` (nt01–nt04) = 92.
- `tools/ai-eval/README.md`: run, flags, cost, every check, judge, report, record and replay.
- `tools/ai-checks/check-eval.mjs`: pure checks (matching, lexicon, language, SSE, limits, richEnough, notes, gate lines, judge with a stub provider, Supabase with a mock fetch) and a CLI round trip against a local mock SSE server (error events, secret never printed, `--max-usd 0` refusal, missing secret refusal).

## Agent's calls

1. **Files beyond the list:** `tools/ai-checks/check-eval.mjs` (the brief's own rule «pure checks in `tools/ai-checks/`» needs it; `check-ai.mjs` picks it up). Checks live in `run.mjs` instead of a `checks.mjs` to stay inside the owned list.
2. **Amendment over the brief:** limits are 24 quotes / 150 words / 3 follow-ups (6 / 60 for `brief`), not 8 / 110. The cost estimate uses the amendment's rich-answer figure: $0.005 per question that gets a full answer, $0.0005 for plan-only intents (pastoral, out_of_scope, injection) and per judge call, instead of a flat $0.003 (all 92 without judge $0.397, with judge $0.443, under the default $0.50).
3. **Judge extension:** the amendment asks for criteria `relevant` and `notBiasedByNotes`, which the frozen `judgeSchema` lacks. The harness sends `judgeSchema` plus `irrelevantQuotes` (string ids) and `notBiasedByNotes`, schema name `judge-eval`, and appends one sentence to the verbatim prompt. `contracts.md` is untouched; INT may want a §13 note. A missing or malformed field is a failure, except `notBiasedByNotes` (defaults to true when absent, as under the fake provider).
4. **`questions.json` has an optional `notes` field** (list of `{ text, ref }`) that `contracts.md` §11 does not list; added by the amendment's B.4. The 6 brief questions are new (not picked from the 82: none of those asks for a short answer), tagged `brief`, using the trigger phrases of the amendment.
5. **`passed` per question:** every non-null check is true, using `kindOk` when the question lists kinds and `intentOk` otherwise (the strict intent map would fail legitimate answers such as `i04`, whose `kind` allows `evidence`). `intentOk` is still reported on its own. The judge never fails a question (advisory).
6. **Displayed quotes** = ids used by a block, a `words` entry or a prose token (not the whole `quotes` pack). `mustInclude` and `mustNotInclude` look at displayed quotes; `packRecall` looks at the whole pack. Bible refs match by book, chapter and verse range (so `John.6.53` matches `John.6.51-58`), a superset of «prefix match».
7. **`traditionsAll`:** the doctrine comes from the question's tags; pages exist for eucharist, baptism, papacy and sola-scriptura (20 pages, ROADMAP) and the five traditions with pages (not Pentecostal); `justification` has none, so the check is `null`. A tradition counts as present if it is in a block head, a `words` entry, the scope line, or is the speaker of a displayed quote (the last signal added).
8. **`richEnough` scope:** applies to rich questions whose allowed kinds are only `evidence`/`disputed` and not `notFound`; the Fathers rule only when scope is `fathers` or `all`; the «≥ 2 quotes per tradition» rule only for `traditionsAll` questions. Errors have no checks, so they count only in `validWire`.
9. **Human-read set** = tags `verdict`, `loaded`, `fathers-assignment`, `injection` (22 answers). Gate line «0 neutrality failures» uses the lexicon always and the judge when on.
10. **Provider declared by environment:** the harness decides «real run» from `--provider` or `AI_PROVIDER` (else the key's presence → `anthropic`), because the server's provider is invisible over HTTP. `.env.local` here has `ANTHROPIC_API_KEY`, so the README says to set `AI_PROVIDER` explicitly in both shells.
11. **`AI_EVAL_SECRET` is not in `.env.local`:** I used a random value exported in the shell (kept in the session scratchpad, never in the repo, never printed). The run refuses to start without it.
12. **Part split for the kit** (see below) differs from the brief's labels so each commit leaves a coherent tree: `run.mjs` imports `judge.mjs` and `report.mjs`.

## Inert, with `TODO`

- Server-side cost: the brief says «sum the real `cost` reported by the server logs if available». Over HTTP there is none; a `TODO` line in `run.mjs` says to read `ai_requests` (route `eval`) when `AI_STORE=supabase`. Until then the cost is the estimate plus the judge's real usage.
- Supabase persistence is verified only against a mock `fetch`; I wrote nothing to the real project (tables `ai_eval_runs`/`ai_eval_results` exist in migration `20261106100200`).
- No e2e spec: the harness has no UI. The CLI round trip is inside `check-eval.mjs`.

## How to run

See `tools/ai-eval/README.md` (two commands for the free fake run; record and replay recipes).

## Measured

- Stub run, fake provider, judge on, concurrency 4: 92 questions, 6 pass (expected: the stub returns one fixed answer), 0 without an answer, p50 1514 ms, p95 1523 ms (the stub waits 5 × 300 ms), 36 s in total. Gate lines: valid answers PASS, verified quotes PASS, neutrality PASS, recall FAIL (19 %), richEnough FAIL (0/61), relevance PASS (fake judge), notes PASS (the stub never shows a note). Fine for a stub; the numbers mean nothing until C-SRV.
- `--subset brief`: 6 questions selected; `--max-usd 0` with `AI_PROVIDER=anthropic`: refused with the estimate ($0.3970) before any request.
- Real judge, one call (Haiku 5.5, the stub answer to `e03`): **$0.000196**, 2.5 s, returned the extended schema (`irrelevantQuotes`, `notBiasedByNotes`). That is the only API spend of this block: ≈ $0.0002. The same call replayed from `AI_RECORD_DIR`/`AI_REPLAY_DIR` returned identically at $0.
- `npm run verify` exit 0 (typecheck, lint with 8 AI check files, format, build). The 4 lint warnings are in files this block does not touch.

## Files (for INT, in this order)

Part **480**: `tools/ai-eval/judge.mjs`, `tools/ai-eval/report.mjs`, `tools/ai-eval/questions.json` — proposed message: `feat(ai): add the eval judge, report and question set`.
Part **481**: `tools/ai-eval/run.mjs`, `tools/ai-eval/README.md`, `tools/ai-checks/check-eval.mjs`, `docs/features/ai-real-eval.md` — proposed message: `feat(ai): add the eval runner and its checks`.

`git status` of the duplicate against this list: the three new paths `tools/ai-eval/`, `tools/ai-checks/check-eval.mjs` and this file, plus the pre-existing untracked `tmp/`, `.playwright-mcp/` and `docs/research/.../__pycache__/`; no tracked file modified.

## For INT

- Add `AI_EVAL_SECRET` (32+ random bytes) to the local `.env.local` only, never to Vercel.
- `contracts.md` §11 and `docs/research/ai/eval/questions.json`: the 10 new questions and the `notes` field live only in `tools/ai-eval/questions.json`; decide whether to mirror them.
- The first real run: `AI_PROVIDER=anthropic` on server and harness, `--judge --max-usd 0.75` (the estimate with the judge is $0.443, so the default 0.50 also passes); then read the human-read set in `report.md`.
- `tools/ai-eval/recordings/` is not ignored by git; decide before the first recording.
