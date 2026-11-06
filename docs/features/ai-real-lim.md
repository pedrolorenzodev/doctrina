# AI block LIM · Database, limits, bot check, budget, kill switch (duplicate `doctrina-ai-lim`)

## State

- **Done:** parts 410, 411 and 412 are written. The four migrations are **applied** to project `doctrina` (Pedro said yes on 2026-11-06); advisors and the anon probe are clean; `check-ai-store` passes on memory and on the real Supabase tables; `check-guard` passes. `npm run verify` and `e2e/ai-lim.spec.ts`: see «Verification».
- **In progress:** nothing.
- **Next (INT):** copy the files below into the real repo in kit blocks 410–412; **do not re-apply the migrations** (already live; the remote versions were assigned by the MCP and differ from the file names); add the `src/proxy.ts` exception for BotID (see «Open points for INT»).
- **How to resume:** read this State; `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/check-ai.mjs` re-runs every check; `AI_STORE=supabase node … tools/ai-checks/check-ai-store.mjs` re-runs the store cases against Supabase.
- **Usage readings (weekly):** 16:46 → 14 %, 16:48 → 14 %, 17:23 → 16 %, 17:28 → 16 %, 17:30 → 16 % (session 28 %). Used by this block ≈ 2 weekly points of the 2.5 raw budget. Cap for this session: 25 % weekly.

## What was built

- `supabase/migrations/20261106100000…100300_*.sql`: copies of the drafts, **unchanged except the first comment line** (the advisors forced no change; the drafts in `docs/research/ai/migrations/` stay as they are).
- `src/content/supabase-rpc.ts`: `rpc`, `selectRows`, `insertRows` (optional `upsertOn`), `updateRows`; secret key, `cache: "no-store"`, 4 attempts on network errors and 408/429/5xx.
- `src/content/ai-store/supabase-store.ts`: every `AiStore` method; `settings()` cached 30 s in memory.
- `src/content/ai-guard/`: `guard.ts` (§9), `visitor.ts` (cookie, IP hash, origin check, secret compare), `budget.ts` (caps from env, reserve, «cannot cover» test), `settings.ts` (kill switch, feature off), `alerts.ts` (webhook alerts).
- `src/app/api/ai/status/route.ts`, `src/instrumentation-client.ts` (BotID client for `/api/ai/ask` and `/api/ai/simplify`), `next.config.ts` (wrapped with `withBotId`: the installed `botid` needs it for its challenge-script rewrites), `tools/ai-usage-report.mjs`, `tools/ai-checks/{check-ai-store,check-guard}.mjs`, `e2e/ai-lim.spec.ts`.

## Agent's calls

1. **Applied the migrations with the Supabase MCP** after Pedro's yes, in file order, as four migrations named `ai_settings`, `ai_passages`, `ai_caches_and_logs`, `ai_usage`.
2. **`cached` kind checks the global switch only** (`AI_ENABLED=off` or `ai_settings.enabled=false`), not the per-feature flags nor the provider: a cached read costs nothing and the contract says kill switch + cached quota. Note `abuse-and-cost-control.md` §5 says cached answers are served while the AI is off; the contract wins, so with the switch off they are not.
3. **Missing `Origin` passes** the same-origin check (curl, Playwright's `request`, the evaluation runner send none); a present, different origin or `Sec-Fetch-Site: cross-site` is `ai_bad_request`. Non-browser clients are handled by BotID, quotas and budget.
4. **The eval header is ignored when `VERCEL=1`**, besides being unset on Vercel (`AI_EVAL_SECRET` compared in constant time).
5. **Without `AI_COOKIE_SECRET` / `AI_IP_SALT`**: a fixed development secret off Vercel (this duplicate's `.env.local` has no `AI_COOKIE_SECRET`); on Vercel (`VERCEL=1`) it is `ai_misconfigured`.
6. **Counter keys:** buckets `chat` / `simplify` with keys `ip:<hash>` and `v:<visitor>`; `chat-min@HHMM` (Buenos Aires clock) with the IP hash; `cached` with the IP hash. Order of checks: burst, IP day, visitor day. A request refused by a later check has already consumed the earlier counters (cheap, safe side).
7. **Budget reserved last**, after every quota passes, so a refused quota never leaves a reservation. `settleTicket` is idempotent per ticket (a `WeakSet`).
8. **`after()` is imported dynamically** inside `defer` (plain Node cannot resolve `next/server`, so the checks need the fallback); if `after` is unavailable the work runs at once and its errors are swallowed. Deferred: the 1-in-50 `cleanup()` and the spend alerts.
9. **Alerts:** only with `AI_ALERT_WEBHOOK` set. Daily 50 % and 100 %, monthly 80 % and 100 % (spend fractions after each successful reservation, deduplicated per period by `markAlert`); a refused reservation fires the 100 % alert of whichever period is closer to its cap. The payload carries both `content` (Discord) and `text` (Slack) [not tested against either service]. `alertCreditExhausted(store, day)` is exported for the routes (S-SRV, C-SRV) to call when the provider answers `ai_budget_exhausted` (the Anthropic adapter lives in `lib` and cannot import `content`).
10. **Hit counters** (`countSimplificationHit`, `countAnswerHit`) are read-then-write (the drafts have no increment function and the plan keeps them unchanged): approximate under concurrency, harmless.
11. **`markAlert`** is an optimistic conditional update of `ai_settings.last_alerts` (filter on the key's old value); alert names are `[a-z0-9_]+`. Two different alerts racing may overwrite each other's mark (worst case: one duplicate alert).
12. **`putSimplification` / `putAnswer` upsert** (`on_conflict=cache_key`, merge): a second `putAnswer` with the same key returns the existing `answer_id`.
13. **Status:** `off` = switch, feature flag or no provider; `paused` = the budget cannot cover one more estimate (chat 6,000 µ$, simplify 1,500 µ$); any store error → both `off`.
14. **BotID:** `checkBotId()` for `chat`/`simplify` POSTs when `VERCEL=1` and `AI_PROVIDER` is not `fake`; an exception (BotID unavailable) fails closed as `ai_bot_check_failed`. In `next dev` the library itself returns «human».

## Open points for INT

- **`src/proxy.ts` must let BotID's proxy path through** (not mine, not edited): `withBotId` rewrites `/149e9513-01fa-4fb0-aad4-566afd725d1b/2d206a39-8ed7-437e-a3be-862e0f06eea3/…` to Vercel, but `isOutsideEveryLocale` sends any first segment that is not a locale, `api` or `_…` and whose last segment has no dot to `/_not-found` **before** the rewrite runs (only the `…/a-4-a/c.js` challenge URL has a dot). Add that first segment to the exception in `isOutsideEveryLocale` (and a line in `GOTCHAS.md`). **Not testable locally** (the destination is `api.vercel.com`); check on the first preview that a protected POST from the page succeeds and a `curl` POST gets `ai_bot_check_failed`.
- **The Vercel project must have BotID enabled** (Firewall → Bot Management) and the WAF rate-limit rule of the plan.
- **e2e against the real guard:** the per-IP minute limit is 4 for requests without `x-forwarded-for` (all share the key `unknown`). Specs that call `/api/ai/ask` more than 3 times a minute must send a distinct `x-forwarded-for` (as `e2e/ai-lim.spec.ts` does) or run with `AI_CHAT_PER_IP_MINUTE` raised in the server's environment.
- The failure-rate alert (> 20 % of the day's verifications) is **inert**: `TODO(INT)` in `alerts.ts`; it needs a count over `ai_requests` that `AiStore` does not expose. `npm run ai:usage` prints the failures meanwhile.
- `npm run ai:usage` prints a `MODULE_TYPELESS_PACKAGE_JSON` warning because F's script lacks `--disable-warning=MODULE_TYPELESS_PACKAGE_JSON`; harmless.

## Database results (applied 2026-11-06 ≈ 20:23 UTC)

- Applied in order, no error; remote versions assigned by the MCP.
- **Security advisor:** only INFO `rls_enabled_no_policy` for the nine new tables (intended: that is how they stay server-only, same as the `word_*` tables); no WARN or ERROR, no function finding.
- **Performance advisor:** only INFO: `unused_index` on the new, still empty indexes (expected) and the four unindexed foreign keys that were there before; no WARN or ERROR.
- **Anon probe** (publishable key): the nine tables answer 401 `42501 permission denied`; `rpc/ai_take`, `ai_reserve`, `ai_settle`, `ai_cleanup` and `ai_search_verses` answer 401 `42501 permission denied for function`. No rows anywhere.
- **Sizes:** `verses_fts_en_idx` 2,984 kB, `verses_fts_es_idx` 1,744 kB (the estimate was 6–10 MB for both). Database 168 MB now (131 MB measured on 2026-11-05; the new objects explain only ≈ 5 MB; the rest was not investigated). `explain analyze` of the verse search was **not** run (that is block RET's loader and search work; the indexes exist).
- `check-ai-store` against Supabase: 19 cases ran on the real tables, including `take` limit 2 → true, true, false and 20 parallel `reserve(6000)` under a 60,000 cap → exactly 10 true; the rows it created (buckets `test-…`, year 2099, `test_check_…` alerts) were deleted by the check; verified 0 rows left.

## What is inert

- The failure-rate alert (above); webhook delivery is untested against Discord or Slack (a local HTTP sink verifies the payload).
- BotID on a real Vercel request (not testable here).
- The Supabase store is used only when `SUPABASE_SECRET_KEY` is set and `AI_STORE` is not `memory`; Playwright and the lint checks force `memory`.

## How to run

- Checks: `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/check-ai.mjs` (part of `npm run lint`); Supabase cases: `AI_STORE=supabase node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/ai-checks/check-ai-store.mjs` (reads `.env.local`, prints only «ok»).
- Spend: `npm run ai:usage`.
- Spec: `npm run build` then `E2E_PORT=3110 npm run e2e -- e2e/ai-lim.spec.ts`.
- Status: `curl -s localhost:3110/api/ai/status` → `{"chat":"on","simplify":"on"}`.
- Kill switch: `update public.ai_settings set enabled = false where id = 1;` (or `chat_enabled` / `simplify_enabled`); effective within 30 s per server instance.
- Eval bypass locally: put `AI_EVAL_SECRET` in `.env.local` and send `x-ai-eval: <value>`.

## Measured numbers

- `check-ai-store`: 19 checks per store; memory 0.1 s, Supabase ≈ 5.7 s in total from Buenos Aires.
- `check-guard`: 51 checks.
- Money spent on the API: **$0** (no model call was made; `AI_PROVIDER=fake`).

## Verification

- `npm run verify`: exit 0 (typecheck, lint with `check-ai` 5 files ok, `format:check`, build). The four ESLint warnings are pre-existing files.
- `E2E_PORT=3110 npm run e2e -- e2e/ai-lim.spec.ts e2e/ai-stubs.spec.ts --project=chromium`: 7 passed (memory store, fake provider). The full existing suite was **not** run (this block touches no UI; the baseline is red on 13 specs per `ai-real-f.md`).
- End to end against Supabase: `AI_STORE=supabase AI_PROVIDER=fake npx next start -p 3110`; `/api/ai/status` → `{"chat":"on","simplify":"on"}` with `Cache-Control: private, max-age=30`; one `POST /api/ai/ask` streamed five phases and an answer with the `Set-Cookie` (`HttpOnly; SameSite=Lax; Secure`), reserved 6,000 µ$ and settled 0 (`npm run ai:usage`: spent $0.0000, reserved $0.0000). The test rows were deleted afterwards (counters and spend: 0 rows).
- Files touched, compared with `git status`: exactly the list under «Files (for INT)»; the other modified or untracked entries (`package.json`, `package-lock.json`, `.env.example`, `playwright.config.ts`, `docs/features/ai-real-f.md`, `e2e/ai-stubs.spec.ts`, `src/lib/ai/`, `src/content/ai-store/{types,memory-store,get-ai-store}.ts`, `src/content/ai-search/`, the two stub routes, `tools/check-ai.mjs`, `tools/ai-checks/check-{verify-quote,sentences,contracts}.mjs`) are block F's, untouched by this block.
- No secret printed, logged or committed; scripts print only «set»/«missing»/«ok».

## Files (for INT)

Created:

```
supabase/migrations/20261106100000_ai_settings.sql  20261106100100_ai_passages.sql
supabase/migrations/20261106100200_ai_caches_and_logs.sql  20261106100300_ai_usage.sql
src/content/supabase-rpc.ts
src/content/ai-guard/visitor.ts  budget.ts  settings.ts  alerts.ts
src/instrumentation-client.ts
src/app/api/ai/status/route.ts
tools/ai-usage-report.mjs
tools/ai-checks/check-ai-store.mjs  check-guard.mjs
e2e/ai-lim.spec.ts
docs/features/ai-real-lim.md
```

Replaced (stubs from F): `src/content/ai-store/supabase-store.ts`, `src/content/ai-guard/guard.ts`.
Edited: `next.config.ts` (import `withBotId` from `botid/next/config`; `export default withBotId(nextConfig);`).

## Commit commands (kit blocks 410–412, frozen by INT in the real repo; «para INT»)

Part 410 · migrations and Supabase store:

```
git add supabase/migrations/20261106100000_ai_settings.sql supabase/migrations/20261106100100_ai_passages.sql supabase/migrations/20261106100200_ai_caches_and_logs.sql supabase/migrations/20261106100300_ai_usage.sql src/content/supabase-rpc.ts src/content/ai-store/supabase-store.ts && git commit -m "feat(ai): add server-only tables and the supabase store"
```

Part 411 · guard:

```
git add src/content/ai-guard/guard.ts src/content/ai-guard/visitor.ts src/content/ai-guard/budget.ts src/content/ai-guard/settings.ts src/content/ai-guard/alerts.ts && git commit -m "feat(ai): add the guard with quotas, budget and kill switch"
```

Part 412 · status route, bot check, report, checks:

```
git add src/app/api/ai/status/route.ts src/instrumentation-client.ts next.config.ts tools/ai-usage-report.mjs tools/ai-checks/check-ai-store.mjs tools/ai-checks/check-guard.mjs e2e/ai-lim.spec.ts docs/features/ai-real-lim.md && git commit -m "feat(ai): add status route, bot check, usage report and checks"
```
