# AI block F · Foundation (duplicate `doctrina-ai-f`)

## State

- **Done:** parts 400, 401, 402 and 403 are written and verified: `npm run verify` green (exit 0), `check-ai` 3 files ok, `e2e/ai-stubs.spec.ts` 5/5 on chromium. The full existing e2e suite has 17 failures, 13 of them pre-existing at `HEAD` and 4 from this duplicate's other uncommitted work (see «Verification»); none from this block.
- **In progress:** nothing.
- **Next:** the coordinator copies the files below into the real repo; Pedro commits with the per-part commands.
- **How to resume:** read this State; `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/check-ai.mjs` re-runs every check.
- **Usage readings (weekly):** 15:12 → 12 %, 15:16 → 12 %, 15:21 → 13 %, 15:26 → 13 %, 15:37 → 13 %, 15:48 → 13 % (session 11 %).

## What was built

Everything the other blocks import, per `docs/research/ai/contracts.md` §1–§5, §7, §8, §10, §12, with stubs that behave like the final thing.

- `src/lib/ai/`: `contracts.ts` (constants, Zod schemas, wire types, `addressId`, `toProviderSchema`, `ESTIMATE_MICROS`, plus `askMoreRequestSchema` and `AskMoreResponse` for C-SRV), `errors.ts`, `provider.ts`, `provider-env.ts`, `models.ts`, `prices.ts`, `anthropic-provider.ts` (the only SDK import), `fake-provider.ts`, `replay-provider.ts`, `cache-keys.ts`, `dates.ts`, `normalize.ts`, `verify-quote.ts`, `sentences.ts`, `simplify-limits.ts`, `sse.ts`, `fixtures/wire-answer.es.json`.
- `src/content/ai-store/`: `types.ts`, `memory-store.ts`, `get-ai-store.ts`, `supabase-store.ts` (stub).
- Stubs with the final signatures: `src/content/ai-guard/guard.ts` (→ LIM), `src/content/ai-search/{types,search,pack}.ts` (→ RET), `src/app/api/ai/simplify/route.ts` (→ S-SRV), `src/app/api/ai/ask/route.ts` (→ C-SRV). Each has one `TODO(<block>)` line.
- Checks: `tools/check-ai.mjs` + `tools/ai-checks/{check-verify-quote,check-sentences,check-contracts}.mjs` (29 + 27 + 840 checks).
- Spec: `e2e/ai-stubs.spec.ts` (INT deletes it later).

Dependencies (all published at least two weeks before 2026-11-06): `@anthropic-ai/sdk` **1.2.0** (2026-10-23; 1.3+ are newer), `zod` **4.6.7** (2026-10-12), `botid` **1.5.11** (2026-03-03; 1.5.12 is from 2026-10-28). `botid` is installed but unused until LIM.

## Agent's calls (decisions without asking)

1. **Versions** as above, one step behind the latest where the latest was under two weeks old.
2. **`AiError`** has an explicit `code` field instead of the parameter property `constructor(readonly code)` of the contract: Node's type stripping (the `check-ai` runner) does not support parameter properties. Same behaviour.
3. **`getAiProvider`** lives in `provider-env.ts` and is re-exported from `provider.ts`, so the contract's import path works without a runtime cycle (the adapters only `import type` from `provider.ts`).
4. **Fake provider input conventions** (C-SRV and S-SRV prompts must follow them for the fake to work): the plan call's user text carries a line `question: <text>`; the answer call's user text carries `answerLanguage: es|en` (or `locale:`) and `intent: <intent>` lines and `<passage id="P1" collection="…" speaker="…" who="…">…</passage>` blocks (attributes decoded for `&quot; &lt; &gt; &amp;`); the simplify call's user text has numbered lines `1. text` / `[1] text`. Fake answers never quote `collection="mine"` passages. For `disputed`, the fake fills `words` for the passages whose collection is `tradition`.
5. **`toProviderSchema`** also strips `exclusiveMinimum`, `exclusiveMaximum`, `format`, `multipleOf` (not supported by the provider's structured outputs) besides the keywords of the contract; it uses `z.toJSONSchema(…, { target: "draft-2020-12", io: "output" })` and drops `$schema`.
6. **`verifyQuote` offsets**: spans index `passage.normalize("NFC")` (the passage is NFC-normalised first, as the prototype's index map would otherwise drift); `display` is the original slice of that string. Hyphenation joins are handled inside the index map (the prototype's pre-replace broke the map). Minimum is 4 words for the whole quote and for each segment (the prototype's 3 is now 4, per `chat-design.md` §8.2). The ellipsis forms `…`, `...`, `[…]`, `[...]` split the quote.
7. **`costMicros`** uses the Haiku 5.5 long-prompt row (0.50/0.05/0.625/2.50) when the prompt (input + cache read + cache write) exceeds 100,000 tokens, as `provider-and-models.md` §2 lists; rounding is up.
8. **Budget arithmetic in the memory store**: `reserve` fails when `reserved + spent + estimate` would pass the cap, for the day and the month; `settle` moves the reservation to spent.
9. **Memory store** is a process singleton on `globalThis[Symbol.for("doctrina.ai.memory-store")]` so Next's separate route bundles and HMR share it. `seedSimplifications(rows)` and `getMemoryStore()` are exported from `memory-store.ts` for S-SRV.
10. **Coverage in the pack stub**: the five page traditions `found`, Pentecostal `no-page` (the prompt said «all found»; `no-page` for Pentecostal is what §2.4 specifies for the real thing). The stub passages are ordered P1–P6 as the pack order requires: RV1909, BSB, Didache, Ignatius, Justin, the Catholic definition.
11. **Stub routes call the stub guard** (`guardRequest` / `settleTicket`) so S-SRV and C-SRV see the final call pattern: `ai_disabled` appears when the provider is off. The locale of an error body is read from the raw body even when validation fails.
12. **Simplify stub** returns `404 ai_not_found` when the simplifier switch is off in the build (`getSimplifiedText` returns nothing then); `e2e/ai-stubs.spec.ts` skips the success test in that case and passes with `NEXT_PUBLIC_SIMPLIFIER=on`.
13. **Billing-error alert**: the Anthropic adapter only logs `[ai] provider credit exhausted` to the server console (no secret); the real alert is LIM's (`alerts.ts`).
14. **Extra exports** beyond the contract, all additive: `sha256`, `hereKey`, `selectionHash`, `isCacheableAsk`, `answerCacheKey`, `simplificationCacheKey`, `replayKey` in `cache-keys.ts`; `splitSentences` in `sentences.ts`; `MemoryAiStore`.
15. `package.json`: `ai:eval` and `ai:usage` point at files that do not exist yet (inert until EVAL and LIM).
16. `guard.ts` carries one file-level `eslint-disable @typescript-eslint/no-unused-vars` (the stub keeps the final signature with unused parameters).

## What is inert (and why)

- `supabase-store.ts`: every method throws `ai_misconfigured` (`TODO(LIM)`).
- `guard.ts`: no quotas, no budget, no BotID, no kill switch (`TODO(LIM)`); `botid` is installed but not used.
- `ai-search/search.ts`, `pack.ts`: six real passages inline, no Supabase (`TODO(RET)`).
- Both routes: fixtures and mock texts only (`TODO(S-SRV)`, `TODO(C-SRV)`).
- The Anthropic adapter: tested against a local mock server (below), **never against the real API** (no key in this duplicate). `tmp/ai-f/smoke.mjs` (throwaway, not part of the tree) runs the one 50-token call when `ANTHROPIC_API_KEY` is set; skipped here.

## How to run

- Checks: `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/check-ai.mjs` (also part of `npm run lint`).
- Stub routes: `npm run build` (add `NEXT_PUBLIC_SIMPLIFIER=on` to see the simplify success path), `E2E_PORT=3190 npx playwright test e2e/ai-stubs.spec.ts --project=chromium`; or `AI_PROVIDER=fake npx next start -p 3190` and `curl -N -X POST localhost:3190/api/ai/ask -H 'content-type: application/json' -d '{…}'`.
- Without a key everything runs with `AI_PROVIDER=fake` (the default outside production). With `ANTHROPIC_API_KEY` set and no `AI_PROVIDER`, the adapter is chosen.

## Measured numbers

- `verifyQuote` on 54,000 characters: < 50 ms asserted in the check; the prototype measured 2.8 ms on 38,000.
- Adapter against the mock server (usage 1,000 input, 500 cache read, 100 cache write, 200 output on Haiku 5.5): cost 218 µ$ (217.5 rounded up). Request shape verified: `model`, `max_tokens`, one `system` text block with `cache_control: ephemeral`, one user message, `output_config.effort` and `output_config.format.type = json_schema`. Refusal and `max_tokens` stop reasons map (json `null`); 402 → `ai_budget_exhausted`, 429 → `ai_provider_busy`, 400 → `ai_misconfigured`, 500 → `ai_provider_down`, an aborted signal → `ai_timeout`; recording wrote one file and replay read it back.
- Money spent on the API: **$0** (no key).

## Verification

- `npm run verify`: exit 0 (typecheck, lint with `check-ai` 3 files, `format:check`, build). The four ESLint warnings printed are pre-existing files (`data/scripts/build-eucharist.mjs`, `data/scripts/port-v1.mjs`, `e2e/reader-note-delete.spec.ts`, `tools/qa/focus.mjs`).
- `e2e/ai-stubs.spec.ts`: 5 passed (chromium), with the simplifier switch on and off in the build.
- Full existing e2e suite (`E2E_PORT=3190`, build with `NEXT_PUBLIC_SIMPLIFIER=on`): 1,429 passed, 4 skipped, **17 failed** (11.6 min, chromium). None touches the AI files. How it was checked: a clean copy of `HEAD` plus only this block's files, built the same way, fails **13** of the 17 (`shell` /fr and /foo 404 heading, `search` ×2, `father` ×3, `soon-screens` ×2, `why`, `scripture`, `home-sections`, `early-christians:179`); a clean copy of `HEAD` **without** this block fails the same set (14 in that run), so those 13 are pre-existing at `HEAD`. The other four (`home.spec.ts:130`, `simplifier.spec.ts:212`, `tree-mark-travel.spec.ts` ×2) pass on `HEAD` + this block and fail only in this duplicate's working tree, which carries other sessions' uncommitted edits (`src/features/home/years-lists.tsx`, `src/components/page-main.tsx`, `globals.css`, history and glossary pages); they also fail when rerun alone, so they are deterministic there and not flakiness. The coordinator should know the baseline is red on these 13 before INT.

## Files (for the coordinator)

Created:

```
src/lib/ai/contracts.ts  errors.ts  provider.ts  provider-env.ts  models.ts  prices.ts
src/lib/ai/anthropic-provider.ts  fake-provider.ts  replay-provider.ts  cache-keys.ts  dates.ts
src/lib/ai/normalize.ts  verify-quote.ts  sentences.ts  simplify-limits.ts  sse.ts
src/lib/ai/fixtures/wire-answer.es.json
src/content/ai-store/types.ts  memory-store.ts  get-ai-store.ts  supabase-store.ts
src/content/ai-guard/guard.ts
src/content/ai-search/types.ts  search.ts  pack.ts
src/app/api/ai/simplify/route.ts  src/app/api/ai/ask/route.ts
tools/check-ai.mjs
tools/ai-checks/check-verify-quote.mjs  check-sentences.mjs  check-contracts.mjs
e2e/ai-stubs.spec.ts
docs/features/ai-real-f.md
```

Edited (exact hunks):

- `package.json`
  - `scripts.lint`: append ` && node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/check-ai.mjs` after the existing last command (`… tools/check-words.mjs`).
  - `scripts`: add after `"shot"`: `"ai:eval": "node --import ./tools/register-alias.mjs tools/ai-eval/run.mjs",` and `"ai:usage": "node --import ./tools/register-alias.mjs tools/ai-usage-report.mjs",`.
  - `dependencies`: add `"@anthropic-ai/sdk": "1.2.0"`, `"botid": "1.5.11"` (before `lenis`) and `"zod": "4.6.7"` (after `react-dom`, which gains a trailing comma).
- `package-lock.json`: written by `npm install --save-exact @anthropic-ai/sdk@1.2.0 zod@4.6.7 botid@1.5.11` (105 insertions, 5 deletions); copy the whole file.
- `.env.example`: appended 24 lines after `NEXT_PUBLIC_SITE_URL=…`: `ANTHROPIC_API_KEY=`, `AI_PROVIDER=`, `AI_STORE=`, `AI_ENABLED=on`, `AI_MODEL_PLAN=claude-haiku-5-5@low`, `AI_MODEL_ANSWER=claude-haiku-5-5@medium`, `AI_MODEL_SIMPLIFY=claude-haiku-5-5@low`, `AI_MODEL_JUDGE=claude-haiku-5-5@low`, `AI_DAILY_BUDGET_USD=0.25`, `AI_MONTHLY_BUDGET_USD=4.00`, `AI_CHAT_PER_VISITOR_DAY=12`, `AI_CHAT_PER_IP_DAY=40`, `AI_CHAT_PER_IP_MINUTE=4`, `AI_SIMPLIFY_PER_VISITOR_DAY=40`, `AI_SIMPLIFY_PER_IP_DAY=120`, `AI_CACHED_PER_IP_DAY=400`, `AI_COOKIE_SECRET=`, `AI_IP_SALT=`, `AI_ALERT_WEBHOOK=`, `AI_EVAL_SECRET=`, `AI_REPLAY_DIR=`, `AI_RECORD_DIR=`, `NEXT_PUBLIC_AI_CHAT=scripted`, `NEXT_PUBLIC_SIMPLIFIER=`.
- `playwright.config.ts`: `const port = 3100;` → `const port = Number(process.env.E2E_PORT ?? 3100);`; in `webServer`, after `reuseExistingServer: !process.env.CI,` add `env: { ...process.env, AI_PROVIDER: process.env.AI_PROVIDER ?? "fake", AI_STORE: process.env.AI_STORE ?? "memory" },` (formatted by Prettier over four lines).

Note: `package.json` and `package-lock.json` are in part 403, so parts 400–402 type-check only once 403 is applied (they import `zod` and the SDK). Commit all four in order.

## Commit commands (Pedro; each is one command, run in the real repo after the files are copied)

Part 400 · providers and contracts:

```
git add src/lib/ai/contracts.ts src/lib/ai/errors.ts src/lib/ai/provider.ts src/lib/ai/provider-env.ts src/lib/ai/models.ts src/lib/ai/prices.ts src/lib/ai/anthropic-provider.ts src/lib/ai/fake-provider.ts src/lib/ai/replay-provider.ts src/lib/ai/cache-keys.ts src/lib/ai/dates.ts && git commit -m "feat(ai): add contracts, errors, models and providers"
```

Part 401 · verification, sentences, checks:

```
git add src/lib/ai/normalize.ts src/lib/ai/verify-quote.ts src/lib/ai/sentences.ts src/lib/ai/simplify-limits.ts src/lib/ai/sse.ts src/lib/ai/fixtures/wire-answer.es.json tools/check-ai.mjs tools/ai-checks/check-verify-quote.mjs tools/ai-checks/check-sentences.mjs tools/ai-checks/check-contracts.mjs && git commit -m "feat(ai): add quote check, sentence split and ai checks"
```

Part 402 · store and stubs:

```
git add src/content/ai-store/types.ts src/content/ai-store/memory-store.ts src/content/ai-store/get-ai-store.ts src/content/ai-store/supabase-store.ts src/content/ai-guard/guard.ts src/content/ai-search/types.ts src/content/ai-search/search.ts src/content/ai-search/pack.ts src/app/api/ai/simplify/route.ts src/app/api/ai/ask/route.ts && git commit -m "feat(ai): add store and stubs for guard, search and routes"
```

Part 403 · package, env, playwright, spec, doc:

```
git add package.json package-lock.json .env.example playwright.config.ts e2e/ai-stubs.spec.ts docs/features/ai-real-f.md && git commit -m "chore(ai): add sdk deps, env vars and stub e2e spec"
```
