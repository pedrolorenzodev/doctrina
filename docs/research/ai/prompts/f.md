# Doctrina · AI block **F** · Foundation: contracts in code, provider and model isolation, store, stubs

You are a fresh Claude session (Opus 5.5, high) working with Pedro on **Doctrina**, a bilingual (es/en) deep-study site on Christian doctrine. Talk to Pedro in Spanish (Rioplatense), very briefly; code, docs and file names in English. Pedro may be away: **do not wait and do not ask**; where something is undefined, take the option the documents recommend (or the simplest one that keeps the contracts) and record it as «agent's call» in your block file.

**Cap for this session (Pedro fills in when launching): `CAP = ___ % weekly`** (blank = 45 %).

## Where you work
**The real repo `/Users/pedrolorenzo/Desktop/dev/doctrina`.** No other AI block runs in it at the same time. Node 24: `source ~/.nvm/nvm.sh && nvm use`. Port for your servers and e2e: **3100** (`E2E_PORT=3100 npm run e2e -- <specs>`, screenshots `npx next start -p 3100` after `npm run build`). Never `pkill -f "next start"` (other sessions run servers): stop yours by PID.
Pedro commits your kit blocks himself; then he copies the tree for the next blocks.

## Read first (in this order; do not skip)
1. `AGENTS.md` whole (rules: no comments except `TODO`/tool silencers/one-line guards, English names, layers `app → features → content | components → lib`, named exports, `@/` imports, trust and neutrality invariants).
2. `docs/research/ai/contracts.md` whole: **the frozen interfaces you build against. Do not change them**; if one is impossible, stop and write why.
2b. **`docs/research/ai/amendment-2026-11-06.md` whole** (Pedro, 2026-11-06: rich answers by default and the reader's notes are not sources). It overrides any number or rule below that contradicts it; its section C says what changes for your block.
3. `docs/features/ai-real.md`: your block's section, the ownership table at the end, «Block specifications» of the blocks you depend on.
4. `docs/research/ai/chat-design.md` §6 and §8, `simplifier-design.md` §4–§5, `abuse-and-cost-control.md` §4, `schema-and-api.md` §3–§4, `provider-and-models.md` §2 and §5.
5. The prototype `docs/research/ai/prototypes/verify-quote.mjs` and its cases `docs/research/ai/prototypes/test-verify.mjs` (the algorithm is also fully specified in `chat-design.md` §8.1–§8.2).
6. The existing code you must not break: `src/lib/simplifier-types.ts`, `src/content/simplified-texts.ts`, `src/content/supabase-rest.ts`, `src/content/corpus-env.ts`, `playwright.config.ts`, `package.json`.
- Next 16 differs from your training data: read the relevant guide in `node_modules/next/dist/docs/` before Next code (route handlers: `01-app/01-getting-started/15-route-handlers.md`, `03-api-reference/03-file-conventions/route.md`, `maxDuration`, `after`). Supabase or Postgres work: load the skills `supabase` and `supabase-postgres-best-practices` first. Claude API code: load the skill `claude-api` first (use the official `@anthropic-ai/sdk`, only inside `src/lib/ai/anthropic-provider.ts`).

## Rules that apply to every block
- **Git:** you never commit, stage, stash, push, reset or merge (a hook blocks even a shell command whose text contains those verbs). Use the commit kit (it is wired to this real repo): once `git status` and `python3 ~/doctrina-commit-kit/snapshot.py baseline`; then per finished part `python3 ~/doctrina-commit-kit/snapshot.py block <NN-name> "<message>" <report.md>` with numbers **400–409** (your range; never outside it). Messages: English, Conventional Commits, ≤ 72 chars, subject only, no attribution line. Never run `apply.sh`. Read `~/doctrina-commit-kit/README.txt` and `docs/playbooks/agent-ops.md` («Rules learned on 2026-10-25») before the first snapshot.
- **Secrets:** never print, log, echo or commit `ANTHROPIC_API_KEY`, `SUPABASE_SECRET_KEY`, `AI_COOKIE_SECRET`, `AI_IP_SALT`, `AI_ALERT_WEBHOOK`. Scripts say only «set» or «missing». No secret in a test fixture, a recording or a screenshot.
- **Money:** without a key everything runs with `AI_PROVIDER=fake` (free). With a key (`ANTHROPIC_API_KEY` set in `.env.local`), you may spend **at most the amount your acceptance criteria name**; print the estimate before any real call; log the real cost from the response usage.
- **Supabase:** read-only on project `doctrina` (`odmmwppyaimarxkzpyuw`) unless your block says otherwise; never read the `word_*` tables.
- **Files:** you may create and edit **only** the files listed under «Files you own». Your report and decisions go to `docs/features/ai-real-f.md` (yours). Never edit `docs/DECISIONS.md`, `docs/ROADMAP.md`, `docs/GOTCHAS.md`, `docs/PROJECT.md` (block INT copies from your file). Keep throwaway scripts in `tmp/ai-f/`.
- **Tests:** pure checks in `tools/ai-checks/<name>.mjs` (run by `tools/check-ai.mjs` inside `npm run lint`; each prints `ok <n> checks` or throws with the failing case); e2e in your own new spec file. Never two full Playwright suites at once on this machine.
- **Definition of done (every block):** `npm run verify` passes; your checks and specs pass; the files you touched are exactly your list (`git status` compared with the list, written in your report); no secret anywhere; your block file has: what was built, every agent's call, what is inert with `TODO` and why, how to run it, measured numbers, usage readings.
- **Usage:** read `python3 -I ~/.claude/skills/usage-guard/scripts/usage_check.py` at the start, at every part boundary and every ~10 minutes; log it in your block file. HTTP 429: wait 5 minutes and retry. At the cap: finish only the edit in hand, freeze it with the kit, write the State and stop.
- **State section:** the first section of `docs/features/ai-real-f.md` is «State» (done, in progress, next, how to resume), rewritten at every part boundary and at least every 20 minutes. After a context compaction, read it first.

## Budget
About **2.0 weekly points raw (1.5 after the usual ×0.75 correction)**, ±50 %. If you pass 1.5× the raw figure, stop, write the State and report why.

## What you build
Everything the other nine blocks import, with **stubs that already behave like the final thing**, so seven blocks can start in parallel after Pedro commits yours. Contracts §1–§5, §7, §8, §10, §12 become code here.

### Files you own (create)
- `src/lib/ai/contracts.ts` — constants (§1), Zod schemas and types (§3, §4, §5), `toProviderSchema()`, `addressId()`, `ESTIMATE_MICROS = { chat: 6000, simplify: 1500, judge: 2000 }`.
- `src/lib/ai/errors.ts` — §7 exactly (codes, HTTP statuses, retry flags, every es/en message, chat and simplify variants).
- `src/lib/ai/provider.ts` (§2.1 types), `provider-env.ts` (`getAiProvider()` resolution rules of §2.1), `models.ts`, `prices.ts` (rows: `claude-haiku-5-5` 0.10/0.01/0.125/0.50, `claude-sonnet-5-5` 2/0.10/2.50/10, `claude-opus-5-5` 4/0.20/5/20 USD per 1M tokens, `fake` 0), `anthropic-provider.ts` (the only SDK import; mapping of §2.1), `fake-provider.ts` (§2.2, deterministic by role), `replay-provider.ts` (§2.2 replay and recording).
- `src/lib/ai/cache-keys.ts` (§10), `dates.ts` (`dayKey`, `monthKey` in America/Argentina/Buenos_Aires via `Intl.DateTimeFormat`), `normalize.ts` + `verify-quote.ts` (the algorithm of `chat-design.md` §8.1–§8.2, returning `{ ok, spans, display } | { ok: false, reason }` with reasons `too-short | not-found | gap-too-long | too-many-segments`), `sentences.ts` (the deterministic splitter of `simplifier-design.md` §4: «.», «?», «!» and «;» before a capital; never inside `6.2`-style numbers; abbreviations `p. ej.`, `etc.`, `cf.`, `St.`, `ch.`, `vol.`, `Mr.`, `i.e.`, `e.g.`; closing quotes stay with their sentence), `simplify-limits.ts` (`canSimplify`), `sse.ts` (`sseStream(run: (send) => Promise<void>): Response` with `event`/`data` lines, `Cache-Control: no-store`, `X-Accel-Buffering: no`).
- `src/lib/ai/fixtures/wire-answer.es.json` — one valid `WireAnswer` (kind `evidence`, 3 quotes: Ignatius *Smyrn.* 6.2 Lightfoot text, John 6:53 RV1909, the Catholic Eucharist definition; prose with `{q:…}` tokens; `consulted` 5 ids; 2 followups), used by the stub route and by C-UI/EVAL until C-SRV lands.
- `src/content/ai-store/types.ts` (§2.3 exactly), `memory-store.ts` (Maps; `seedSimplifications(rows)`), `get-ai-store.ts`, `supabase-store.ts` (**stub**: every method throws `AiError("ai_misconfigured")`; LIM replaces it).
- **Stubs with the final signatures, handed over:** `src/content/ai-guard/guard.ts` (`guardRequest` returns a ticket with visitor `"stub"`, checks only `getAiProvider() !== null` → else `ai_disabled`; `settleTicket` no-op; `aiStatus` from the provider) → **LIM**; `src/content/ai-search/types.ts` (§2.4 exactly), `search.ts` (`getCorpusSearch()` returns an in-memory search over 6 passages written inline: Ignatius *Smyrn.* 6.2, Justin *1 Apol.* 66, Didache 9, John 6:53 BSB and RV1909, the Catholic Eucharist definition), `pack.ts` (`buildPack` returns those passages with ids P1–P6, windows = text, coverage all `found`) → **RET**; `src/app/api/ai/simplify/route.ts` (POST: validates `simplifyRequestSchema`; returns `getSimplifiedText(addressId(address))` from `src/content/simplified-texts.ts` as `SimplifyResponse` with `status: "generated"`, `cached: false`, or 404 `ai_not_found`; GET cacheOnly → 204) → **S-SRV**; `src/app/api/ai/ask/route.ts` (POST: validates `askRequestSchema`, streams `phase` plan/search/read/write/check 300 ms apart, then the fixture answer with a fresh `answerId`) → **C-SRV**. Each stub has one `TODO` line naming its owner block.
- `tools/check-ai.mjs` (runs every `tools/ai-checks/*.mjs` in order, exits non-zero on the first failure), `tools/ai-checks/check-verify-quote.mjs` (≥ 20 cases: the 9 of the prototype plus curly and angle quotes, brackets, `Æ`, hyphenation, Spanish `«Mí»` vs `mi` must differ, three segments rejected, gap > 400 rejected, Greek kept), `check-sentences.mjs` (≥ 15 cases es/en, including `Smyrn. 6.2`, `p. ej.`, a quote ending a sentence), `check-contracts.mjs` (the fixture validates; `toProviderSchema` output has `additionalProperties: false` everywhere and no unsupported keyword; prices exist for every default model; `aiErrorBody` has both languages for every code).
- `e2e/ai-stubs.spec.ts` (the two stub routes answer as described; INT deletes it later); `docs/features/ai-real-f.md`.

### Existing files you edit (exact points)
- `package.json`: `npm install --save-exact @anthropic-ai/sdk zod botid` (latest stable versions published at least two weeks ago; write the versions in your report); in `scripts.lint` append ` && node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/check-ai.mjs`; add `"ai:eval": "node --import ./tools/register-alias.mjs tools/ai-eval/run.mjs"` and `"ai:usage": "node --import ./tools/register-alias.mjs tools/ai-usage-report.mjs"`. `package-lock.json` by npm only.
- `.env.example`: append every variable of `contracts.md` §8 that is missing, with its default or empty.
- `playwright.config.ts`: `const port = Number(process.env.E2E_PORT ?? 3100);` and `webServer: { …, env: { ...process.env, AI_PROVIDER: process.env.AI_PROVIDER ?? "fake", AI_STORE: process.env.AI_STORE ?? "memory" } }` (check the Playwright 1.63 `webServer.env` type).

### How to run without a key
Everything: `AI_PROVIDER=fake` (the default in `next dev` without a key). With a key: one smoke call (`node --import ./tools/register-alias.mjs tmp/ai-f/smoke.mjs`: role `plan`, schema `{ ok: boolean }`, `maxTokens` 50) costs < $0.001; skip it without a key and say so.

### Acceptance and tests
As in `docs/features/ai-real.md` «F · Foundation». Plus: `npm run verify` green; the whole existing e2e suite still passes once (sequentially) because `playwright.config.ts` changed.

### Parts (freeze each with the kit)
400 lib contracts, errors, models, prices, providers · 401 verification, sentences, cache keys, checks · 402 store and stubs (guard, search, pack, routes) · 403 package, env, playwright, stub spec, block doc.

## Final message to Pedro (Spanish, short)
What works now and how to see it (one command or URL), the kit blocks with their numbers and the exact `cd ~/doctrina-commit-kit && ./apply.sh <numbers>` command (only for the real repo; in a duplicate say «para INT»), the files you own as a list for INT, the agent's calls, what is inert, money spent on the API (if any) and the usage readings.
