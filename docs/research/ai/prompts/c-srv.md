# Doctrina · AI block **C-SRV** · Chat server: plan, evidence, answer, verification, SSE

You are a fresh Claude session (Opus 5.5, high) working with Pedro on **Doctrina**, a bilingual (es/en) deep-study site on Christian doctrine. Talk to Pedro in Spanish (Rioplatense), very briefly; code, docs and file names in English. Pedro may be away: **do not wait and do not ask**; where something is undefined, take the option the documents recommend (or the simplest one that keeps the contracts) and record it as «agent's call» in your block file.

**Cap for this session (Pedro fills in when launching): `CAP = ___ % weekly`** (blank = 45 %).

## Where you work
**Your own duplicate `/Users/pedrolorenzo/Desktop/dev/doctrina-ai-csrv`** (Pedro made it with `cp -R ~/Desktop/dev/doctrina /Users/pedrolorenzo/Desktop/dev/doctrina-ai-csrv` after block F was committed; `.env.local` is inside). Work only there. Never open the real repo or another `doctrina-*` folder: other AI blocks run in parallel in theirs. Node 24: `source ~/.nvm/nvm.sh && nvm use`. Port for your servers and e2e: **3160** (`E2E_PORT=3160 npm run e2e -- <specs>`, screenshots `npx next start -p 3160` after `npm run build`). Never `pkill -f "next start"` (other sessions run servers): stop yours by PID.
Block INT copies **only the files you own** (listed below) into the real repo, in the order LIM → RET → S-SRV → C-SRV → S-UI → C-UI → EVAL. So: never edit a file outside your list; if you believe you must, stop and write why in your report.

## Read first (in this order; do not skip)
1. `AGENTS.md` whole (rules: no comments except `TODO`/tool silencers/one-line guards, English names, layers `app → features → content | components → lib`, named exports, `@/` imports, trust and neutrality invariants).
2. `docs/research/ai/contracts.md` whole: **the frozen interfaces you build against. Do not change them**; if one is impossible, stop and write why.
3. `docs/features/ai-real.md`: your block's section, the ownership table at the end, «Block specifications» of the blocks you depend on.
4. `docs/research/ai/chat-design.md` **whole, twice** (the plan and answer prompts in §7 are to be used verbatim; the verification in §8; mapping in §6; fixed texts in §7.4; caching §18; logging §17; multi-turn §11; scope §13; fallbacks §14); `abuse-and-cost-control.md` §4 and §6; `schema-and-api.md` §3.
5. The drawer types you map to (read, never edit): `src/features/reader-ai/script.ts` (`Answer`), `quotes.ts` (`Quote`), `father-script.ts` (the pastoral regex and text, to reuse as the pre-filter: copy the regex into `fixed-texts.ts`, do not import the feature).
- Next 16 differs from your training data: read the relevant guide in `node_modules/next/dist/docs/` before Next code (route handlers: `01-app/01-getting-started/15-route-handlers.md`, `03-api-reference/03-file-conventions/route.md`, `maxDuration`, `after`). Supabase or Postgres work: load the skills `supabase` and `supabase-postgres-best-practices` first. Claude API code: load the skill `claude-api` first (use the official `@anthropic-ai/sdk`, only inside `src/lib/ai/anthropic-provider.ts`).

## Rules that apply to every block
- **Git:** you never commit, stage, stash, push, reset or merge (a hook blocks even a shell command whose text contains those verbs). **Do not use `~/doctrina-commit-kit/`: it is wired to the real repo, not to your duplicate.** Instead, your block file lists, per part, the exact files and a proposed commit message (English, Conventional Commits, ≤ 72 chars, subject only, no attribution line); block INT freezes them as kit blocks **460–469** in the real repo.
- **Secrets:** never print, log, echo or commit `ANTHROPIC_API_KEY`, `SUPABASE_SECRET_KEY`, `AI_COOKIE_SECRET`, `AI_IP_SALT`, `AI_ALERT_WEBHOOK`. Scripts say only «set» or «missing». No secret in a test fixture, a recording or a screenshot.
- **Money:** without a key everything runs with `AI_PROVIDER=fake` (free). With a key (`ANTHROPIC_API_KEY` set in `.env.local`), you may spend **at most the amount your acceptance criteria name**; print the estimate before any real call; log the real cost from the response usage.
- **Supabase:** read-only on project `doctrina` (`odmmwppyaimarxkzpyuw`) unless your block says otherwise; never read the `word_*` tables.
- **Files:** you may create and edit **only** the files listed under «Files you own». Your report and decisions go to `docs/features/ai-real-csrv.md` (yours). Never edit `docs/DECISIONS.md`, `docs/ROADMAP.md`, `docs/GOTCHAS.md`, `docs/PROJECT.md` (block INT copies from your file). Keep throwaway scripts in `tmp/ai-csrv/`.
- **Tests:** pure checks in `tools/ai-checks/<name>.mjs` (run by `tools/check-ai.mjs` inside `npm run lint`; each prints `ok <n> checks` or throws with the failing case); e2e in your own new spec file. Never two full Playwright suites at once on this machine.
- **Definition of done (every block):** `npm run verify` passes; your checks and specs pass; the files you touched are exactly your list (`git status` compared with the list, written in your report); no secret anywhere; your block file has: what was built, every agent's call, what is inert with `TODO` and why, how to run it, measured numbers, usage readings.
- **Usage:** read `python3 -I ~/.claude/skills/usage-guard/scripts/usage_check.py` at the start, at every part boundary and every ~10 minutes; log it in your block file. HTTP 429: wait 5 minutes and retry. At the cap: finish only the edit in hand, freeze it with the kit, write the State and stop.
- **State section:** the first section of `docs/features/ai-real-csrv.md` is «State» (done, in progress, next, how to resume), rewritten at every part boundary and at least every 20 minutes. After a context compaction, read it first.

## Budget
About **4.0 weekly points raw (3.0 after the usual ×0.75 correction)**, ±50 %. If you pass 1.5× the raw figure, stop, write the State and report why.

## What you build
`POST /api/ai/ask` (SSE) and `POST /api/ai/ask/more`, per `contracts.md` §4, implementing `chat-design.md` exactly.

### Pipeline (`src/features/ask/ask.ts`, `answerQuestion(request, send)`)
1. Parse; guard (`kind: "cached"` first for an answer-cache hit by key when `turn === 1` and no history/notes; else `kind: "chat"` with `ESTIMATE_MICROS.chat`).
2. Pastoral regex (no model) → fixed `pastoral` answer.
3. `send(phase "plan")`; plan call (role `plan`, `searchPlanSchema`, `maxTokens` 600, system = the plan prompt of §7.1 + the author/work id list from `search.authors()`, user = question, locale, scope, here, selection text, the two previous questions); validate and clamp (contracts §3 limits); unknown author/work ids dropped and kept for coverage.
4. Intent `pastoral` / `out_of_scope` / `injection` → fixed texts (§7.4), no second call.
5. `send(phase "search")`; `buildPack(plan, request, getCorpusSearch())` (+ the selection as a passage when it verifies against its location; + notes as `mine` passages); `send(phase "read", n)`. Empty pack → the «not found» answer.
6. `send(phase "write")`; answer call (role `answer`, `modelAnswerSchema`, `maxTokens` 2,500, system = §7.2 with `{answerLanguage}`, `cacheSystem: true`, user = intent line + question + previous question + the `<passage …>` blocks of §5).
7. `send(phase "check")`; `verifyAnswer` (§8: quotes against windows, map spans to the full passage, section discipline, licence caps, words, prose tokens and length, verdict and Father-assignment lexicons of contracts §6); > 30 % failed or a disputed tradition emptied → one repair call; then `mapAnswer` to `WireAnswer` (§6 mapping, `scope` = `coverage-line.ts` in the answer language, `disputed`/`plain` fixed texts, `consulted`, `followups`, `more`).
8. Store in `ai_answers` (with `pack.extra` for «more», 24 h), answer cache by key when eligible, `ai_requests` log (question ≤ 500 chars; never notes or selection), settle the ticket with the real cost; `send("answer", wire)`.
Errors at any step → `send("error", aiErrorBody(code, locale))`; `max_tokens` → one retry with 1.5×; `refusal` → `ai_refused`.

### Files you own
- Replace (stub from F): `src/app/api/ai/ask/route.ts` (`sseStream`, `maxDuration = 60`, `dynamic = "force-dynamic"`).
- Create: `src/features/ask/{ask.ts,plan.ts,answer.ts,verify-answer.ts,map-answer.ts,prompts.ts,lexicon.ts,fixed-texts.ts,more.ts,coverage-line.ts}`, `src/content/ai-ask/answer-cache.ts`, `src/app/api/ai/ask/more/route.ts`, `tools/ai-checks/check-answer.mjs` (≥ 25 verification and mapping cases), `docs/features/ai-real-csrv.md`.
- Use F's stubs of `@/content/ai-search/*` and `@/content/ai-guard/guard` exactly as declared; never edit them (RET and LIM own them).

### How to run without a key
`AI_PROVIDER=fake`, `AI_STORE=memory`: the fake plan and fake answer of `contracts.md` §2.2 over F's 6-passage stub search. Write a `tmp/ai-csrv/run-eval-fake.mjs` that posts the 82 questions of `docs/research/ai/eval/questions.json` to your local route and checks: no 5xx, every `answer` validates, fixed intents right.

### Acceptance and tests
As in `docs/features/ai-real.md` «C-SRV». Real calls only with a key: the 5 named questions, ≤ $0.05, the estimate printed first; record each answer's quotes, failures and cost in your block file.

### Parts
460 prompts, plan, fixed texts · 461 verification and mapping with checks · 462 pipeline, route, SSE, caches, logs · 463 more route, fake run, real smoke, block doc.

## Final message to Pedro (Spanish, short)
What works now and how to see it (one command or URL), the kit blocks with their numbers and the exact `cd ~/doctrina-commit-kit && ./apply.sh <numbers>` command (only for the real repo; in a duplicate say «para INT»), the files you own as a list for INT, the agent's calls, what is inert, money spent on the API (if any) and the usage readings.
