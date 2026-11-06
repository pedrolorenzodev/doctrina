# Schema and API

Written 2026-11-06 («AI plan» session). Types, error codes and messages are frozen in `contracts.md`; this file holds the database, the routes and the file map.

## 1. Database (drafts in `docs/research/ai/migrations/`, **not applied**)

Order (the cleanup function references the cache and log tables, so caches come first):
1. `20261106100000_ai_settings.sql`: `ai_settings` (one row: `enabled`, `chat_enabled`, `simplify_enabled`, `corpus_version`, `last_alerts`).
2. `20261106100100_ai_passages.sql`: `ai_passages` (the chat's search table, stored `tsvector` + GIN), two **partial expression GIN indexes on `verses`** (`bsb`+`dra` English, `rv1909` Spanish), `ai_tsquery()`, `ai_search_passages()`, `ai_search_verses()`.
3. `20261106100200_ai_caches_and_logs.sql`: `ai_simplifications`, `ai_answers`, `ai_requests`, `ai_eval_runs`, `ai_eval_results`.
4. `20261106100300_ai_usage.sql`: `ai_usage_counters`, `ai_spend`, `ai_take()`, `ai_reserve()`, `ai_settle()`, `ai_cleanup()`.

**Checked [measured]:** the four files were applied in order to an empty Postgres 17 (PGlite 0.3.4, `prototypes/pglite-check.mjs`, with stub `verses` and the three Supabase roles): all apply; `ai_search_passages` ranks an English Father passage and a Spanish tradition passage from one call; `ai_search_verses('es', …)` finds John 6:53 in RV1909; `ai_take` with limit 2 returns true, true, false; `ai_reserve` + `ai_settle` leave `reserved 0, spent 2800` on both the day and the month rows; `ai_cleanup()` runs. Not checked: the planner actually using the partial `verses` indexes on the real 164,462 rows (run `explain analyze` after applying), and PostgREST exposure (run the anon probe of `docs/features/backend-stage-1-2.md`).

**Access rules (all tables):** RLS enabled with **no policy**, `revoke all … from anon, authenticated` (new tables are otherwise readable by `anon` through default privileges: Backend lesson, 2026-11-05); every function `set search_path = ''`, `revoke all … from public, anon, authenticated`, `grant execute … to service_role`. The server uses `SUPABASE_SECRET_KEY` (already in `.env.local`, server-only, never `NEXT_PUBLIC_`). Anon probe after applying (must print a 42501 or a 401/404, never rows): `curl -s -H "apikey: $NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY" "$NEXT_PUBLIC_SUPABASE_URL/rest/v1/ai_requests?limit=1"` and the same for `rpc/ai_take`.

**How migrations reach the remote project:** only Pedro's go (AGENTS; the backend precedent): the DB block copies the drafts into `supabase/migrations/` and applies them through the Supabase MCP `apply_migration` **outside a build** (a schema reload once made a call wait 112 s), then runs the security and performance advisors and the anon probe.

**Size against the free plan [estimate; measure with `pg_total_relation_size` after loading]:** `ai_passages` ≈ 52,000 Father passages + ≈ 3,000 editorial ≈ 45–60 MB with the GIN index; `verses` partial indexes ≈ 6–10 MB; caches and logs < 5 MB in the first months. Database 131 MB → **≈ 190–210 MB of 500**.

## 2. The passage loader (`data/scripts/load-ai-passages.mjs`)
Idempotent, dry run by default, `--load` to write (the `load-corpus.mjs` pattern), reads the secret key from `.env.local`:
1. **Fathers:** page through `divisions` (40 rows per request, the 2 MB cache lesson) or read `data/corpus/fathers*/` locally; split each division on blank lines; cut paragraphs over 2,400 characters at sentence boundaries into parts ≤ 1,800; `source_key = fathers:<work>:<edition>:<locator>:<part>`; `author`, `year` from `works`/`editions` metadata; `licence` from the edition (`public-domain` or `cc0-translation`), `translated_by_ai` for the Spanish AI editions, `max_quote_words` 80; `href` = the reader route with the division anchor (`src/content/routes.ts`).
2. **Traditions:** for each published tradition page (`getPublishedPages`, `getTraditionPage`): the definition and each statement (Rich text stripped to plain text by the pages' own parser), `speaker` = tradition, `doctrine`, `refs` = the OSIS references the statement cites, `licence site-authored`, `max_quote_words` 60; and each registry citation excerpt (es and en) of a work whose `speaker` is a tradition: `licence` from the edition (`short-quote`/`unconfirmed` → `max_quote_words` 40, `public-domain` → 80), `refs` from the citation's verses.
3. **Doctrine pages (02):** «Lo que todas comparten» and the history paragraphs, `speaker site`, `collection doctrine`.
4. **Glossary:** each term's per-tradition entry, `speaker` = the entry's tradition, `collection glossary`.
5. Write `ai_corpus_version` = sha256 of (`corpus_manifest` hashes + the editorial content hash) to `ai_settings.corpus_version`; delete rows whose `source_key` no longer exists; upsert the rest in batches of 500.
6. Print counts per collection and speaker, and the table size.

## 3. Routes (Next 16 route handlers, Node.js runtime, Vercel Hobby)
All under `src/app/api/ai/` so one WAF rule covers them. Every handler is thin: parse with the Zod schema of `contracts.md`, call one feature function, map errors to the codes of `contracts.md` §7. `export const dynamic = "force-dynamic"`; no `runtime` export (Node is the default; the Edge runtime is deprecated on Vercel).

| Route | Method | Body / query | Response | `maxDuration` | Owner block |
|---|---|---|---|---|---|
| `/api/ai/ask` | POST | `AskRequest` | `text/event-stream`: `phase` events, then one `answer` or `error` event | 60 | C-SRV |
| `/api/ai/ask/more` | POST | `{ answerId, offset }` | `AskMoreResponse` (JSON) — no model call | 10 | C-SRV |
| `/api/ai/simplify` | POST | `SimplifyRequest` | `SimplifyResponse` or `AiError` (JSON) | 30 | S-SRV |
| `/api/ai/simplify` | GET | `?address=<base64url JSON>&locale=es&cacheOnly=1` | `SimplifyResponse` (200) or 204 | 10 | S-SRV |
| `/api/ai/status` | GET | — | `AiStatus` (JSON, `Cache-Control: private, max-age=30`) | 10 | GUARD |

**Why SSE and not a JSON response for the chat:** the answer takes 8–15 s; phase events drive the approved live status honestly; the answer itself arrives whole (no token streaming: `chat-design.md` §1.3). Streaming works on the Node runtime with Fluid compute; the 300 s Hobby ceiling is far above the 60 s set here. **Why not Server Actions:** they are POST requests the client cannot stream events from as simply, and BotID protects route paths.

**Timeouts inside a request:** plan call 15 s, answer call 40 s, simplify call 25 s (AbortSignal); the Anthropic SDK's retries set to 1 (a 529 is retried once after 1 s; a 429 is surfaced as `ai_provider_busy`).

## 4. Environment variables (names frozen in `contracts.md` §8)
Server only (Vercel: **Sensitive**, Production and Preview): `ANTHROPIC_API_KEY`, `SUPABASE_SECRET_KEY` (exists), `AI_COOKIE_SECRET`, `AI_IP_SALT`, `AI_ALERT_WEBHOOK` (optional).
Server, not secret: `AI_PROVIDER` (`anthropic` | `fake` | `replay` | `off`), `AI_STORE` (`supabase` | `memory`), `AI_ENABLED` (`on` | `off`), `AI_MODEL_PLAN`, `AI_MODEL_ANSWER`, `AI_MODEL_SIMPLIFY`, `AI_MODEL_JUDGE`, `AI_DAILY_BUDGET_USD`, `AI_MONTHLY_BUDGET_USD`, the six quota variables, `AI_REPLAY_DIR`, `AI_RECORD_DIR`.
Client (build-time): `NEXT_PUBLIC_SIMPLIFIER` (exists), `NEXT_PUBLIC_AI_CHAT` (`real` | `scripted`, default `scripted`).
Defaults: no `ANTHROPIC_API_KEY` in production → `AI_PROVIDER` resolves to `off`; in `next dev` without a key → `fake`; Playwright sets `AI_PROVIDER=fake` and `AI_STORE=memory` explicitly.

## 5. How `CORPUS_SOURCE` and the existing loaders are reused
- The simplifier's address resolver calls the **same getters the pages use** (`getFatherWork`, `getTraditionPage`, the 02 page getter, `getGlossaryTerms`); they already switch between local files and Supabase with `CORPUS_SOURCE`, so the simplifier works offline (local) and in production (Supabase) unchanged.
- The chat's retrieval has two implementations behind one interface (`CorpusSearch`, `contracts.md` §2.4): `supabase` (the SQL functions above, through a new RPC helper beside `supabase-rest.ts`) and `fixture` (≈ 60 real passages copied into `src/content/ai-search/fixture-passages.json` by the retrieval block, searched in memory; used by `AI_PROVIDER=fake` runs, the e2e and CI, which have no Supabase secrets). Selection: `AI_STORE=memory` or no `SUPABASE_SECRET_KEY` → fixture.
- Verse text for Bible quotes is fetched by reference from `verses` (public REST, the existing `createSupabaseSelect`) or the local Bible files, through `get-bible.ts`'s existing functions.

## 6. Files the implementation creates and touches (by block; the ownership table is in `docs/features/ai-real.md`)
- **F (foundation):** `src/lib/ai/{contracts.ts,errors.ts,models.ts,prices.ts,provider.ts,anthropic-provider.ts,fake-provider.ts,replay-provider.ts,provider-env.ts,sentences.ts,normalize.ts,verify-quote.ts,simplify-limits.ts,sse.ts}`, `src/content/ai-store/{types.ts,memory-store.ts,supabase-store.ts (stub),get-ai-store.ts}`, `tools/check-ai.mjs`, `tools/ai-checks/check-verify-quote.mjs`, `tools/ai-checks/check-sentences.mjs`; edits `package.json` (deps `@anthropic-ai/sdk`, `zod`, `botid`; scripts), `package-lock.json`, `.env.example`, `playwright.config.ts` (webServer env).
- **DB:** `supabase/migrations/20261106100000…100300` (copies of the drafts), `src/content/ai-store/supabase-store.ts` (replaces the stub), `src/content/supabase-rpc.ts`, `tools/ai-checks/check-ai-store.mjs`.
- **GUARD:** `src/content/ai-guard/{guard.ts,visitor.ts,budget.ts,settings.ts,alerts.ts}`, `src/instrumentation-client.ts`, `src/app/api/ai/status/route.ts`, `tools/ai-usage-report.mjs`, `tools/ai-checks/check-guard.mjs`; edits `next.config.ts` only if BotID's setup requires its wrapper.
- **RET:** `src/content/ai-search/{types.ts,collections.ts,search.ts,supabase-search.ts,fixture-search.ts,fixture-passages.json,pack.ts,coverage.ts,windows.ts,verse-lookup.ts}`, `data/scripts/load-ai-passages.mjs`, `tools/ai-checks/check-pack.mjs`.
- **S-SRV:** `src/content/ai-simplify/{resolve-address.ts,cache.ts,seed-fixtures.ts}`, `src/features/simplify/{simplify.ts,prompt.ts,checks.ts}`, `src/app/api/ai/simplify/route.ts`, `tools/ai-pregenerate-simplifications.mjs`, `tools/ai-review-simplifications.mjs`, `tools/ai-checks/check-simplify.mjs`.
- **S-UI:** edits `src/components/simplifier/{simplified-paragraph.tsx,simplified-panel.tsx,simplifier-text.ts}`, `src/lib/simplifier-types.ts`, `src/features/doctrine/teach-section.tsx`, `src/features/reader/father-body.tsx`; creates `src/components/simplifier/{use-simplification.ts,simplifier-openers.ts}`, `src/lib/simplifier-visibility.ts`, `e2e/simplifier-real.spec.ts`.
- **C-SRV:** `src/features/ask/{ask.ts,plan.ts,answer.ts,verify-answer.ts,map-answer.ts,prompts.ts,lexicon.ts,fixed-texts.ts,more.ts}`, `src/content/ai-ask/answer-cache.ts`, `src/app/api/ai/ask/route.ts`, `src/app/api/ai/ask/more/route.ts`, `tools/ai-checks/check-answer.mjs`.
- **C-UI:** edits `src/features/reader-ai/{chat.tsx,answer.tsx,answer-parts.tsx,ask-script.tsx,reader-ask.tsx,father-ask.tsx,conversations.ts,text.ts,script.ts}`; creates `src/features/reader-ai/{live-answers.ts,use-ask-stream.ts}`, `e2e/reader-ai-real.spec.ts`.
- **EVAL:** `tools/ai-eval/{run.mjs,judge.mjs,report.mjs,questions.json (copied from docs/research/ai/eval/questions.json),recordings/}`.
- **INT:** `docs/DECISIONS.md`, `docs/ROADMAP.md`, `docs/GOTCHAS.md`, `docs/DESIGN.md` (only if a state pattern needs recording), `docs/PROJECT.md` («What it is not» and «Data architecture» lines on AI), `e2e/ai-integration.spec.ts`.
