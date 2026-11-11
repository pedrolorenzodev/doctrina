# AI evaluation harness

`npm run ai:eval` asks the 92 questions of `questions.json` (the 82 of `docs/research/ai/eval/questions.json`, plus 6 brief and 4 with reader notes from the 2026-11-06 amendment) to a **running** server over HTTP, scores each answer with automatic checks, optionally asks a judge model, and writes `report.md` and `results.json`.

## Run it (free, fake provider)

Two shells, the same `AI_EVAL_SECRET` in both (32+ random bytes; local only, never on Vercel; it is not in `.env.local` by default, so export it):

```sh
export AI_EVAL_SECRET="$(openssl rand -base64 32)"   # then in the SAME shell:
npm run build && AI_PROVIDER=fake AI_STORE=memory npm run start -w @doctrina/web -- -p 3180 &
AI_PROVIDER=fake npm run ai:eval -- --base http://localhost:3180
```

`apps/web/.env.local` may hold `ANTHROPIC_API_KEY`, which makes `AI_PROVIDER` default to `anthropic`: always set `AI_PROVIDER` explicitly for the server **and** for the harness (the harness uses it to decide whether the run costs money, and the judge uses it too).

## Flags

| Flag                | Default                 | Meaning                                                                               |
| ------------------- | ----------------------- | ------------------------------------------------------------------------------------- |
| `--base`            | `http://localhost:3100` | server to ask                                                                         |
| `--subset a,b`      | all                     | questions having any of these tags (`eucharist`, `verdict`, `brief`, `notes`, …)      |
| `--ids e01,v01`     | all                     | only these ids                                                                        |
| `--judge`           | off                     | also run the judge on every answer                                                    |
| `--max-usd`         | `0.50`                  | refuse a real run whose estimate is higher; stop a real run that goes over            |
| `--concurrency`     | `2`                     | simultaneous questions                                                                |
| `--out`             | `tmp/ai-eval/<time>`    | output folder                                                                         |
| `--provider`        | from env                | declare what the server uses (`anthropic`, `fake`, `replay`) when it differs from env |

Each request is `POST /api/ai/ask` with `Origin: <base>` and `x-ai-eval: <AI_EVAL_SECRET>` (the guard then skips BotID and the per-person quotas; the budget still applies). The secret is never printed: the script only says «set» or «missing».

## Cost

Printed before the first call. Only `AI_PROVIDER=anthropic` costs: $0.005 per question that gets a full answer (evidence and verdict intents, the amendment's estimate for a rich answer), $0.0005 per question that only needs the plan call (pastoral, out of scope, injection), $0.0005 per judge call. All 92 questions without judge ≈ $0.39; with judge ≈ $0.44. Over `--max-usd` the run is refused before any request (`--max-usd 0` refuses every real run). The server's logged cost is not visible over HTTP, so the estimate is what is summed; the judge's real cost (from the response usage) is added to it.

## What is scored

Each check is `true`, `false` or `null` (does not apply). A question passes when no check is `false` (`kindOk` when the question lists kinds, else `intentOk`).

| Check             | Rule                                                                                                                                                                                                                                                  |
| ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `validWire`       | shape of `WireAnswer`, every referenced quote id exists                                                                                                                                                                                               |
| `intentOk`        | `expect.intent` against the answer kind (`pastoral`→`pastoral`; `out_of_scope`, `injection`→`out_of_scope`; `verdict_request`→`disputed`; `evidence`→`evidence`, `not_found`, `more`)                                                                 |
| `kindOk`          | `expect.kind` contains the answer kind                                                                                                                                                                                                                |
| `quotesLiteral`   | each displayed quote's text is inside `context.before + text + context.after` (true by construction)                                                                                                                                                  |
| `hasQuotes`       | an `evidence` or `disputed` answer displays at least one quote                                                                                                                                                                                        |
| `traditionsAll`   | for `traditionsAll` questions of a doctrine with pages (eucharist, baptism, papacy, sola-scriptura), the five traditions with pages appear in block heads, `words`, the scope line, or as the speaker of a displayed quote                             |
| `mustInclude`     | every entry matches a displayed quote key (prefix; a Bible ref like `John.6.53` or `1Cor.11` matches `bible:*:` keys by book, chapter and verse range). The report also gives recall (matched/total) and `packRecall` (over the whole `quotes` map) |
| `mustNotInclude`  | no entry matches a displayed quote key                                                                                                                                                                                                                |
| `language`        | stop-word count of the prose in `expect.language`                                                                                                                                                                                                     |
| `limits`          | ≤ 24 quotes, ≤ 150 prose words, ≤ 3 follow-ups (≤ 6 and ≤ 60 for questions tagged `brief`)                                                                                                                                                            |
| `noVerdict`       | the verdict lexicon of `contracts.md` §6 finds nothing in the prose outside quote marks                                                                                                                                                               |
| `richEnough`      | evidence or disputed, rich questions: ≥ min(12, pack) displayed quotes; with scope `fathers` or `all`, ≥ min(5, Father authors in the pack) distinct displayed authors; `traditionsAll` questions: ≥ 2 quotes per tradition or listed as not found   |
| `noteNotEvidence` | questions with notes: note quotes only under «Tus notas»/«Your notes» and nothing else there, no note in `consulted` or `words`, a prose sentence citing a note cites only notes and says «tu nota»/«your note», no 5-word run of a note elsewhere  |

Displayed quotes are the ones used by a block, a `words` entry or a prose token; the rest of `quotes` is the pack («Consultó N textos»).

## Judge (`--judge`)

Runs inside the harness through `getAiProvider()` with role `judge`, `maxTokens` 1,000 (one retry at 1.5× on `max_tokens`). The system prompt is the one of the brief, verbatim (`JUDGE_BASE` in `judge.mjs`), plus one sentence asking for two more fields the 2026-11-06 amendment needs: `irrelevantQuotes` (ids of displayed quotes that do not bear on the question) and `notBiasedByNotes`. The schema is `judgeSchema` plus those two fields. Advisory: a judge `false` never fails a question, it shows in the report and in the gate lines of the human-read set.

## Report

`report.md`: totals; the gate (`chat-design.md` §19 plus the amendment: valid answers, verified quotes, neutrality in the human-read set, `mustInclude` recall ≥ 80 %, `richEnough` ≥ 90 %, relevant quotes ≥ 90 % in the human-read set, 4 of 4 note questions); the rate of each check; one row per question; and the **full answers of the human-read set** (tags `verdict`, `loaded`, `fathers-assignment`, `injection`) for Pedro to read. `results.json` has everything, including the answers and the SSE phases with their timing.

With `AI_STORE=supabase` (and `NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SECRET_KEY`) the run is also written to `ai_eval_runs` and `ai_eval_results` through the REST API; if the tables are absent or the call fails it is skipped and the line `supabase: skipped (...)` says why.

## Record and replay (a code-only change reruns at $0)

1. **Record** (real, costs money, once per prompt/model/corpus change): start the server with the real provider and a recordings folder, run the eval with the same `AI_PROVIDER=anthropic`:

   ```sh
   AI_PROVIDER=anthropic AI_RECORD_DIR=../../tools/ai-eval/recordings AI_STORE=memory npm run start -w @doctrina/web -- -p 3180 &
   AI_PROVIDER=anthropic AI_RECORD_DIR=tools/ai-eval/recordings npm run ai:eval -- --base http://localhost:3180 --judge --max-usd 0.75
   ```

   The adapter writes every call as `<replayKey>.json` (`replayKey = sha256(role | schemaName | system | user)`), the judge's too because it runs through the same adapter.

2. **Replay** (free): start a fresh server (so the in-memory answer cache does not hide anything) and run the harness in replay mode:

   ```sh
   AI_PROVIDER=replay AI_REPLAY_DIR=../../tools/ai-eval/recordings AI_STORE=memory npm run start -w @doctrina/web -- -p 3180 &
   AI_PROVIDER=replay AI_REPLAY_DIR=tools/ai-eval/recordings npm run ai:eval -- --base http://localhost:3180 --judge
   ```

   A code change that does not alter any model input (checks, verification, mapping, UI) hits every recording. A change to a prompt, the pack or the question set misses, and the missing call answers `ai_provider_down`: record again.

Recordings hold questions and quotes, never keys; do not commit the folder unless Pedro decides to.
