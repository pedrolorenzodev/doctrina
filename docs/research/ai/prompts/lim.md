# Doctrina · AI block **LIM** · Database, limits, bot check, budget and kill switch

You are a fresh Claude session (Opus 5.5, high) working with Pedro on **Doctrina**, a bilingual (es/en) deep-study site on Christian doctrine. Talk to Pedro in Spanish (Rioplatense), very briefly; code, docs and file names in English. Pedro may be away: **do not wait and do not ask**; where something is undefined, take the option the documents recommend (or the simplest one that keeps the contracts) and record it as «agent's call» in your block file.

**Cap for this session (Pedro fills in when launching): `CAP = ___ % weekly`** (blank = 45 %).

## Where you work
**Your own duplicate `/Users/pedrolorenzo/Desktop/dev/doctrina-ai-lim`** (Pedro made it with `cp -R ~/Desktop/dev/doctrina /Users/pedrolorenzo/Desktop/dev/doctrina-ai-lim` after block F was committed; `.env.local` is inside). Work only there. Never open the real repo or another `doctrina-*` folder: other AI blocks run in parallel in theirs. Node 24: `source ~/.nvm/nvm.sh && nvm use`. Port for your servers and e2e: **3110** (`E2E_PORT=3110 npm run e2e -- <specs>`, screenshots `npx next start -p 3110` after `npm run build`). Never `pkill -f "next start"` (other sessions run servers): stop yours by PID.
Block INT copies **only the files you own** (listed below) into the real repo, in the order LIM → RET → S-SRV → C-SRV → S-UI → C-UI → EVAL. So: never edit a file outside your list; if you believe you must, stop and write why in your report.

## Read first (in this order; do not skip)
1. `AGENTS.md` whole (rules: no comments except `TODO`/tool silencers/one-line guards, English names, layers `app → features → content | components → lib`, named exports, `@/` imports, trust and neutrality invariants).
2. `docs/research/ai/contracts.md` whole: **the frozen interfaces you build against. Do not change them**; if one is impossible, stop and write why.
3. `docs/features/ai-real.md`: your block's section, the ownership table at the end, «Block specifications» of the blocks you depend on.
4. `docs/research/ai/abuse-and-cost-control.md` whole; `schema-and-api.md` §1, §3, §4; the four drafts in `docs/research/ai/migrations/` (checked on PGlite: `schema-and-api.md` §1); `docs/features/backend-stage-1-2.md` («Lessons», the anon probe, the 112 s schema reload).
5. BotID docs (Vercel): `https://vercel.com/docs/botid/get-started` and «Verify on page load» (read them with the Vercel documentation search tool or fetch).
- Next 16 differs from your training data: read the relevant guide in `node_modules/next/dist/docs/` before Next code (route handlers: `01-app/01-getting-started/15-route-handlers.md`, `03-api-reference/03-file-conventions/route.md`, `maxDuration`, `after`). Supabase or Postgres work: load the skills `supabase` and `supabase-postgres-best-practices` first. Claude API code: load the skill `claude-api` first (use the official `@anthropic-ai/sdk`, only inside `src/lib/ai/anthropic-provider.ts`).

## Rules that apply to every block
- **Git:** you never commit, stage, stash, push, reset or merge (a hook blocks even a shell command whose text contains those verbs). **Do not use `~/doctrina-commit-kit/`: it is wired to the real repo, not to your duplicate.** Instead, your block file lists, per part, the exact files and a proposed commit message (English, Conventional Commits, ≤ 72 chars, subject only, no attribution line); block INT freezes them as kit blocks **410–419** in the real repo.
- **Secrets:** never print, log, echo or commit `ANTHROPIC_API_KEY`, `SUPABASE_SECRET_KEY`, `AI_COOKIE_SECRET`, `AI_IP_SALT`, `AI_ALERT_WEBHOOK`. Scripts say only «set» or «missing». No secret in a test fixture, a recording or a screenshot.
- **Money:** without a key everything runs with `AI_PROVIDER=fake` (free). With a key (`ANTHROPIC_API_KEY` set in `.env.local`), you may spend **at most the amount your acceptance criteria name**; print the estimate before any real call; log the real cost from the response usage.
- **Supabase:** read-only on project `doctrina` (`odmmwppyaimarxkzpyuw`) unless your block says otherwise; never read the `word_*` tables.
- **Files:** you may create and edit **only** the files listed under «Files you own». Your report and decisions go to `docs/features/ai-real-lim.md` (yours). Never edit `docs/DECISIONS.md`, `docs/ROADMAP.md`, `docs/GOTCHAS.md`, `docs/PROJECT.md` (block INT copies from your file). Keep throwaway scripts in `tmp/ai-lim/`.
- **Tests:** pure checks in `tools/ai-checks/<name>.mjs` (run by `tools/check-ai.mjs` inside `npm run lint`; each prints `ok <n> checks` or throws with the failing case); e2e in your own new spec file. Never two full Playwright suites at once on this machine.
- **Definition of done (every block):** `npm run verify` passes; your checks and specs pass; the files you touched are exactly your list (`git status` compared with the list, written in your report); no secret anywhere; your block file has: what was built, every agent's call, what is inert with `TODO` and why, how to run it, measured numbers, usage readings.
- **Usage:** read `python3 -I ~/.claude/skills/usage-guard/scripts/usage_check.py` at the start, at every part boundary and every ~10 minutes; log it in your block file. HTTP 429: wait 5 minutes and retry. At the cap: finish only the edit in hand, freeze it with the kit, write the State and stop.
- **State section:** the first section of `docs/features/ai-real-lim.md` is «State» (done, in progress, next, how to resume), rewritten at every part boundary and at least every 20 minutes. After a context compaction, read it first.

## Budget
About **2.5 weekly points raw (1.9 after the usual ×0.75 correction)**, ±50 %. If you pass 1.5× the raw figure, stop, write the State and report why.

## What you build
The server-only tables (applied with Pedro's go), the Supabase implementation of `AiStore`, and the real guard of `contracts.md` §9.

### Files you own
- Create: `supabase/migrations/20261106100000_ai_settings.sql`, `20261106100100_ai_passages.sql`, `20261106100200_ai_caches_and_logs.sql`, `20261106100300_ai_usage.sql` (copies of the drafts; if the advisors force a change, change the draft in `docs/research/ai/migrations/` too and say so); `src/content/supabase-rpc.ts` (`rpc<T>(fn, args)` with the secret key, POST `/rest/v1/rpc/<fn>`, no caching, retries on 408/429/5xx like `supabase-rest.ts`; plus `insertRows`, `updateRows`, `selectRows` helpers with `Prefer: return=representation`); `src/content/ai-guard/{visitor.ts,budget.ts,settings.ts,alerts.ts}`; `src/instrumentation-client.ts` (`initBotId({ protect: [{ path: "/api/ai/ask", method: "POST" }, { path: "/api/ai/simplify", method: "POST" }] })`); `src/app/api/ai/status/route.ts` (`AiStatus`, `Cache-Control: private, max-age=30`); `tools/ai-usage-report.mjs`; `tools/ai-checks/{check-ai-store.mjs,check-guard.mjs}`; `docs/features/ai-real-lim.md`.
- Replace (stubs from F): `src/content/ai-store/supabase-store.ts` (every `AiStore` method against the tables and functions; `settings()` cached 30 s in memory), `src/content/ai-guard/guard.ts` (§9: kill switch from `ai_settings` + `AI_ENABLED`; same-origin check for POST; BotID `checkBotId()` for `chat`/`simplify` POSTs, skipped when `process.env.VERCEL !== "1"` (local `next start`, CI) or `AI_PROVIDER=fake`; a request with header `x-ai-eval` equal to `AI_EVAL_SECRET` (set only in local `.env.local`, never on Vercel) skips BotID and the visitor/IP quotas but still reserves budget; visitor cookie `doctrina_ai` = `<id>.<hmac>` signed with `AI_COOKIE_SECRET`, HttpOnly, Secure in production, SameSite=Lax, 30 days; IP hash = HMAC-SHA256(ip, `AI_IP_SALT` + day) from the first `x-forwarded-for` entry; quotas of `abuse-and-cost-control.md` §2 via `store.take` with buckets `chat`, `chat-min@HHMM`, `simplify`, `cached`; budget via `store.reserve` with the env caps in micro-dollars; alerts in `after()`; one `store.cleanup()` call in about 1 of 50 requests, in `after()`).
- Edit: `next.config.ts` **only** if the installed `botid` requires its config wrapper; wrap the exported config, nothing else.

### Applying the migrations (needs Pedro's yes; ask once in Spanish, in one line, and wait only for this)
«¿Aplico las 4 migraciones de IA en Supabase (tablas solo de servidor, nada público)?». After yes: apply them **in file order** with the Supabase MCP `apply_migration`, outside any build; then `get_advisors` (security and performance) and the anon probe for every new table and the four RPC functions (expect 401/404/42501, never rows); write the results in your block file. If Pedro does not answer within your session, build and test everything against the memory store and PGlite (`docs/research/ai/prototypes/pglite-check.mjs`: install `@electric-sql/pglite` in a throwaway folder under `tmp/ai-lim/`, never in the repo's `package.json`) and leave the apply as the first step for INT.

### Acceptance and tests
As in `docs/features/ai-real.md` «LIM». `check-ai-store.mjs` runs its 12 cases against the memory store always, and against Supabase when `AI_STORE=supabase` and the tables exist (it cleans the rows it creates: buckets prefixed `test-`). `check-guard.mjs` builds `Request` objects to cover: disabled, cross-origin, daily limit, minute burst, budget exhausted, cached kind with only the cached quota, cookie issued on first call and reused.

### Parts
410 migrations + supabase store · 411 guard, visitor, budget, alerts · 412 status route, BotID client, usage report, checks, block doc.

## Final message to Pedro (Spanish, short)
What works now and how to see it (one command or URL), the kit blocks with their numbers and the exact `cd ~/doctrina-commit-kit && ./apply.sh <numbers>` command (only for the real repo; in a duplicate say «para INT»), the files you own as a list for INT, the agent's calls, what is inert, money spent on the API (if any) and the usage readings.
