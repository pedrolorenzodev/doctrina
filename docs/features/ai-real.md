# Real AI for the chat and the simplifier: the executable plan

## State (planning session «AI plan», 2026-11-06, duplicate `doctrina-aiplan`)

- **Done:** repo read; Supabase read-only feasibility tests; quote-verification prototype; provider research (one subagent); migrations drafted and checked in PGlite; all design documents; the evaluation set (82 questions); this plan; the block prompts; risks; README.
- **In progress:** nothing. Usage of this planning session: weekly 9 % → 11 %, session 3 % → 11 %.
- **Next (Pedro):** read `docs/research/ai/README.md` («Decisions for Pedro»), do «What Pedro must do» below, launch block F.
- **How to resume after a compaction:** read this State, then `docs/research/ai/README.md`; every deliverable is listed there.

Intent: a working real-AI version of the chat drawer and the simplifier, with the approved UI unchanged, grounded and verified answers, and spend capped at Pedro's 5 USD. Designs: `docs/research/ai/` (`chat-design.md`, `simplifier-design.md`, `abuse-and-cost-control.md`, `schema-and-api.md`, `provider-and-models.md`, `risks-and-obstacles.md`). Frozen interfaces: `docs/research/ai/contracts.md`. Prompts to launch each block: `docs/research/ai/prompts/`.

Out of scope: a redesign of the drawer or the simplifier; accounts; embeddings; translating quotes; the English-site translation work; auto-deploy (both planned separately; interactions in `risks-and-obstacles.md`).

## What Pedro must do (before or while block F runs)

1. **Anthropic account and credit** (≈ 10 minutes): go to `https://platform.claude.com` → sign up (use the e-mail you want the bills on) → Settings → Billing → buy **5 USD** of prepaid credit (the API stops at zero: this is the hard cap) → **turn auto-reload off** → set the monthly spend limit to **5 USD** if the page offers it.
2. **API key:** Settings → API keys → «Create key», name `doctrina-prod`. Copy it once. **Never paste it in a chat with an agent.**
3. **Local key:** open `~/Desktop/dev/doctrina/.env.local` in your editor and add one line `ANTHROPIC_API_KEY=<the key>`; also add `AI_COOKIE_SECRET=` and `AI_IP_SALT=` each followed by the output of `openssl rand -base64 32` (run it twice in a terminal, one value per variable). Duplicates made later copy `.env.local`, so they inherit the key.
4. **Vercel:** project `doctrina` → Settings → Environment Variables → add `ANTHROPIC_API_KEY`, `AI_COOKIE_SECRET`, `AI_IP_SALT` with **Sensitive** on, for Production and Preview; add `AI_PROVIDER=anthropic`, `AI_STORE=supabase`, `NEXT_PUBLIC_AI_CHAT=real` (plain). The deploy script bakes `NEXT_PUBLIC_*` at build time: block INT adds `NEXT_PUBLIC_AI_CHAT=real` to `deploy:demo` the way `NEXT_PUBLIC_SIMPLIFIER=on` is.
5. **Vercel firewall (after the first deploy with the routes):** project → Firewall → «Add rule» → name `ai-rate-limit`, if *Request Path* *starts with* `/api/ai/`, then **Rate limit**: fixed window 60 s, 30 requests, key IP, action 429 → Save → Publish.
6. **BotID:** nothing to create (it is on by default for Vercel projects; block LIM installs the package).
7. **Optional alerts:** in a Discord server of yours: channel settings → Integrations → Webhooks → New → copy URL → `.env.local` and Vercel as `AI_ALERT_WEBHOOK` (Sensitive).
8. **Supabase migrations:** when block LIM asks, say yes to applying the four migrations to project `doctrina` (they create server-only tables; nothing public changes).
9. **Decisions:** answer the list in `docs/research/ai/README.md` (each has a recommendation; silence = the recommendation).

Turnstile is **not** needed with the recommended BotID (decision 3 in the README); if you choose Turnstile instead: `https://dash.cloudflare.com` → Turnstile → Add widget → hostname `doctrina.elpepo.dev` and `localhost` → mode «Invisible» → copy the site key to `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and the secret to `TURNSTILE_SECRET_KEY` (Sensitive), and block LIM's prompt gets one extra paragraph (in its file).

## Blocks

Common to every block: the rules in each prompt (AGENTS, git hook, commit kit, ports, usage cap, State section, final report); the contracts; `npm run verify`; no key printed or committed; the block writes its report and decisions to `docs/features/ai-real-<block>.md` (its own file) and never edits `docs/DECISIONS.md`, `docs/ROADMAP.md`, `docs/GOTCHAS.md` (INT copies from the block files). Points: weekly points, «raw» and «×0.75» (our past estimates ran high); measured rate ≈ 1 point per session-hour; uncertainty ±50 %.

| Block | What | Kind of UI work | Depends on (real) | Built against (stub) | Runs in | Port | Kit numbers (frozen by F and INT only: the kit is wired to the real repo) | Raw | ×0.75 |
|---|---|---|---|---|---|---|---|---|---|
| **F** | Foundation: contracts in code, provider + model isolation (anthropic, fake, replay), store interface + memory store, stubs for every cross-block seam, deps, env, test runner | none | — | — | **real repo**, alone, first | 3100 | 400–409 | 2.0 | 1.5 |
| **LIM** | Migrations (applied with Pedro's go), Supabase store, guard (BotID, quotas, budget, kill switch), status route, usage report | none | F | — | duplicate `doctrina-ai-lim` | 3110 | 410–419 | 2.5 | 1.9 |
| **RET** | Passage loader, search (Supabase + fixture), evidence pack with quotas and coverage, verse lookup | none | F (LIM's migrations to load the table; until then the fixture) | F's stubs | duplicate `doctrina-ai-ret` | 3120 | 420–429 | 3.0 | 2.3 |
| **S-SRV** | Simplifier endpoint: address resolver, sentence alignment, prompt, checks, cache, fake seed, pre-generation and review tools | none | F | F's guard stub, memory store | duplicate `doctrina-ai-ssrv` | 3130 | 430–439 | 2.0 | 1.5 |
| **S-UI** | Simplifier wiring: address instead of mock entry, pending state, message states, opener registry seam | (a) wiring + (b) states | F | F's stub route `/api/ai/simplify` | duplicate `doctrina-ai-sui` | 3140 | 440–449 | 2.0 | 1.5 |
| **S-ENTRY** | «Any paragraph» entry points | **(c) new UI: waits for Pedro's choice** (proposal first) | S-UI merged | S-UI's opener registry | duplicate `doctrina-ai-sentry` | 3150 | 450–459 | 2.5 (1.0 proposal + 1.5 build) | 1.9 |
| **C-SRV** | Chat endpoint: plan, retrieval call, answer, verification, mapping, SSE, answer cache, «more texts» | none | F | F's stubs of `ai-search` and guard | duplicate `doctrina-ai-csrv` | 3160 | 460–469 | 4.0 | 3.0 |
| **C-UI** | Chat wiring: live answers behind the approved drawer, real phases, `{q:…}` citations, follow-ups, pending/error/limit states | (a) wiring + (b) states | F | F's stub route `/api/ai/ask` | duplicate `doctrina-ai-cui` | 3170 | 470–479 | 3.0 | 2.3 |
| **EVAL** | Evaluation harness over HTTP: runner, judge, report, recordings | none | F | F's stub route | duplicate `doctrina-ai-eval` | 3180 | 480–489 | 1.5 | 1.1 |
| **INT** | Merge in order, real-key smoke tests, evaluation run, e2e, docs (DECISIONS, ROADMAP, GOTCHAS, PROJECT), deploy flags, launch checklist | none | all but S-ENTRY | — | **real repo** | 3100 | 490–499 | 2.0 | 1.5 |
| | **Total** | | | | | | | **24.5** | **18.4** |

No block needs «what was searched and not found» as new UI: it is carried by the drawer's existing `scope` line and «Consultó N textos» list (`chat-design.md` §10).

### Dependency graph and order

```
F ──┬── LIM ───────────────┐
    ├── RET ───────────────┤
    ├── S-SRV ─────────────┤
    ├── S-UI ──────────────┼── INT ── (launch)
    ├── C-SRV ─────────────┤
    ├── C-UI ──────────────┤
    └── EVAL ──────────────┘
S-UI merged ── proposal (Pedro chooses) ── S-ENTRY ── small join
```
After F is committed, **all seven middle blocks can run at the same time** (disjoint files, stubs for every seam). Real dependencies show up only at INT: C-SRV needs RET's real search and LIM's real guard; S-SRV needs LIM's guard; the UIs need the real routes; EVAL needs everything. **Merge order at INT:** LIM → RET → S-SRV → C-SRV → S-UI → C-UI → EVAL (each a copy of its owned files over the real repo; the stub files are replaced by their owners' versions).

### Tonight's sequence (what works soonest)
1. **F** (≈ 1.5 h), Pedro commits it (kit 400–409).
2. Pedro creates the duplicates from the committed tree (`cp -R ~/Desktop/dev/doctrina ~/Desktop/dev/doctrina-ai-<block>` for each, `.env.local` included) and launches, in this priority if he cannot run all at once: **S-SRV + S-UI + LIM** (the simplifier is the smaller pipeline and proves keys, limits, cache), then **RET + C-SRV + C-UI**, then **EVAL**. With three sessions in parallel (≈ 2.5 points/h measured), the middle wave takes ≈ 4–5 h.
3. **INT** for the simplifier part first (merge LIM, S-SRV, S-UI; smoke test with the real key: ≤ 10 simplifications ≈ $0.01), so the simplifier is real while the chat blocks finish; then merge the chat blocks and run the evaluation.
4. **S-ENTRY** starts only after Pedro chooses in the proposal (its prompt does the proposal first and stops).

## Block specifications

Each block's full prompt is in `docs/research/ai/prompts/<block>.md`; it is self-contained (rules, files, edit points, contracts, tests, done, budget, report). The summary below is the reference for INT and for the ownership check.

### F · Foundation
- **Goal:** everything other blocks import exists and compiles, with stubs that behave like the real thing, so the seven middle blocks start together.
- **Acceptance:** `npm run verify` passes; `node tools/check-ai.mjs` runs ≥ 3 check files (`check-verify-quote`, `check-sentences`, `check-contracts`) with 0 failures, including the 9 quote cases of `docs/research/ai/prototypes/test-verify.mjs` turned into checks plus Spanish ones; with `AI_PROVIDER=fake` the stub routes answer: `curl -N -X POST localhost:3100/api/ai/ask` streams `phase` events then an `answer` that validates against `WireAnswer`; `POST /api/ai/simplify` with the Ignatius address returns the mock entry; with `AI_PROVIDER=anthropic` and a key, one `plan`-role call with a 20-token schema returns valid JSON (cost < $0.001; skipped if no key); a missing price row throws `ai_misconfigured`.
- **Out:** real guard, real search, real feature logic, any UI.
- **Creates:** `src/lib/ai/{contracts.ts,errors.ts,models.ts,prices.ts,provider.ts,provider-env.ts,anthropic-provider.ts,fake-provider.ts,replay-provider.ts,cache-keys.ts,dates.ts,normalize.ts,verify-quote.ts,sentences.ts,simplify-limits.ts,sse.ts}`, `src/lib/ai/fixtures/wire-answer.es.json`; `src/content/ai-store/{types.ts,memory-store.ts,get-ai-store.ts,supabase-store.ts}` (the last a stub that throws `ai_misconfigured`); **stubs handed over to their owners:** `src/content/ai-guard/guard.ts` (→ LIM), `src/content/ai-search/{types.ts,search.ts,pack.ts}` (→ RET), `src/app/api/ai/simplify/route.ts` (→ S-SRV), `src/app/api/ai/ask/route.ts` (→ C-SRV); `tools/check-ai.mjs`, `tools/ai-checks/{check-verify-quote.mjs,check-sentences.mjs,check-contracts.mjs}`; `docs/features/ai-real-f.md`.
- **Edits (exact points):** `package.json` — `dependencies` add `@anthropic-ai/sdk`, `zod`, `botid` (exact versions, `npm install --save-exact`); `scripts.lint` append ` && node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/check-ai.mjs`; add `scripts["ai:eval"] = "node --import ./tools/register-alias.mjs tools/ai-eval/run.mjs"` and `scripts["ai:usage"] = "node --import ./tools/register-alias.mjs tools/ai-usage-report.mjs"` (the files come later; the scripts are inert until then); `package-lock.json` (by npm); `.env.example` — append every variable of `contracts.md` §8 with defaults; `playwright.config.ts` — `const port = Number(process.env.E2E_PORT ?? 3100)` instead of `3100`, and `webServer.env: { ...process.env, AI_PROVIDER: process.env.AI_PROVIDER ?? "fake", AI_STORE: process.env.AI_STORE ?? "memory" }`.
- **Tests:** the three check files; one e2e `e2e/ai-stubs.spec.ts` (the two stub routes answer; deleted by INT when the real routes land).

### LIM · Database, limits and switches
- **Goal:** the Supabase tables and functions exist (applied with Pedro's go), the Supabase store implements `AiStore`, and `guardRequest`/`settleTicket`/`aiStatus` enforce BotID, quotas, budget and the kill switch.
- **Acceptance:** the four migrations applied in order to project `doctrina`; security and performance advisors show no new WARN/ERROR; the anon probe returns no rows for every new table and function; `check-ai-store.mjs` runs the same 12 cases against the memory store and (when `AI_STORE=supabase`) against Supabase, including `take` limit 2 → true, true, false; reserve/settle arithmetic; concurrency: 20 parallel `reserve(6000)` with a cap of 60,000 → exactly 10 true; `check-guard.mjs` covers each error code of §9 with a fake request; `/api/ai/status` returns `{chat, simplify}`; `npm run ai:usage` prints today's and the month's spend without secrets.
- **Out:** feature logic; Turnstile (unless Pedro chose it).
- **Creates:** `supabase/migrations/20261106100000_ai_settings.sql` … `100300_ai_usage.sql` (copies of `docs/research/ai/migrations/`, unchanged unless the advisors require a change, then the draft is updated too), `src/content/supabase-rpc.ts`, `src/content/ai-guard/{visitor.ts,budget.ts,settings.ts,alerts.ts}`, `src/instrumentation-client.ts`, `src/app/api/ai/status/route.ts`, `tools/ai-usage-report.mjs`, `tools/ai-checks/{check-ai-store.mjs,check-guard.mjs}`, `docs/features/ai-real-lim.md`.
- **Replaces (owned from F):** `src/content/ai-store/supabase-store.ts`, `src/content/ai-guard/guard.ts`.
- **Edits:** `next.config.ts` **only** if BotID's installed version requires its config wrapper (wrap the exported config; nothing else changes).

### RET · Retrieval
- **Goal:** `getCorpusSearch()` and `buildPack()` return balanced, windowed evidence with coverage, from Supabase in production and from a fixture in tests.
- **Acceptance:** the loader's dry run prints counts per collection and speaker (≈ 52,000 Father passages ± 10 %, ≥ 1,000 tradition rows, all five page traditions present); after `--load` (with Pedro's go, after LIM's migrations) the table size is reported and `explain analyze` of three searches shows the GIN indexes used and < 150 ms; `check-pack.mjs` on the fixture: for «¿Qué enseña cada tradición sobre la Eucaristía?» every tradition with a page appears and Pentecostal is `no-page`; Fathers ≤ 2 per author; pack ≤ `PACK_TOKEN_BUDGET` (chars/3.2); windows ≤ 1,200 chars and contain a query term; the four §2.2 test questions of `chat-design.md` return the canonical passages from Supabase (Ignatius *Smyrn.* 6.2 in the top 3 for the Ignatius question).
- **Out:** model calls; answer logic.
- **Creates:** `src/content/ai-search/{collections.ts,supabase-search.ts,fixture-search.ts,fixture-passages.json,coverage.ts,windows.ts,verse-lookup.ts}`, `data/scripts/load-ai-passages.mjs`, `tools/ai-checks/check-pack.mjs`, `docs/features/ai-real-ret.md`.
- **Replaces (owned from F):** `src/content/ai-search/{types.ts,search.ts,pack.ts}` (types may only add optional fields to `contracts.md` §2.4).

### S-SRV · Simplifier server
- **Goal:** `POST /api/ai/simplify` and the cache-only `GET` per `contracts.md` §5, with the prompt, alignment, checks and cache of `simplifier-design.md`.
- **Acceptance:** fake mode: the 24 test-build paragraphs and Ignatius 6.2 return the mock texts (seeded), any other valid address returns an aligned identity simplification; a Bible-like or unknown address → `ai_not_simplifiable` / `ai_not_found`; the checks catch 8 crafted bad outputs (changed number, dropped quote, added name, wrong count, too long, added «esto significa», dropped Greek word, empty unit); real mode (key present): 5 paragraphs (2 Catholic, 1 Baptist, Ignatius 6.2, one 600+-word Father division) simplify and pass the checks, cost logged < $0.01; second request is a cache hit (< 200 ms locally); `canSimplify` refuses > 1,500 words.
- **Creates:** `src/content/ai-simplify/{resolve-address.ts,cache.ts,seed-fixtures.ts}`, `src/features/simplify/{simplify.ts,prompt.ts,checks.ts}`, `tools/ai-pregenerate-simplifications.mjs`, `tools/ai-review-simplifications.mjs`, `tools/ai-checks/check-simplify.mjs`, `docs/features/ai-real-ssrv.md`.
- **Replaces (owned from F):** `src/app/api/ai/simplify/route.ts`.

### S-UI · Simplifier wiring (kind a + b)
- **Goal:** the approved simplifier gets its text from `/api/ai/simplify` with the one-push rule intact, and shows pending, error, limit and off states with the approved elements.
- **Acceptance:** `e2e/simplifier.spec.ts` (11 tests) passes unchanged against the fake provider; new `e2e/simplifier-real.spec.ts`: pending state shows the dashed ring with `aria-busy` and **no layout shift** (paragraph top, `scrollY` and the next element's top constant to < 1 px from press to response); the box then opens once (height monotonic, `below − box` constant per frame, as the existing spec measures); error (route mocked to 503) opens the panel with the message and «Reintentar»; a second press during pending cancels; reduced motion instant; 360/390/768/1440 light and dark screenshots compared with the current build: no pixel change at rest.
- **Out:** new entry points (S-ENTRY); new tokens (if one seems needed, stop and report).
- **Edits (exact points):** `src/components/simplifier/simplified-paragraph.tsx` — props type (`entry` → `address: SimplifyAddress | undefined`, keep `id`), `SimplifiedParagraph` (render children when no address or `!simplifierEnabled`), `SimplifiedView` state (result from `useSimplification`), `open()` (fetch then the existing open path), the ring's `className` (pending modifier); `simplified-panel.tsx` — accept `message?: { text: string; retry: boolean }` and the `status` («Revisado» / «Generado por IA, sin revisar»), render the message in the text slot with the approved footer; `simplifier-text.ts` — new strings (pending, retry, the §7 simplifier messages, statuses); `src/lib/simplifier-types.ts` — add `SimplifyStatus`; `src/features/doctrine/teach-section.tsx` — inside `simplifiable` (≈ lines 56–72) pass `address={{ kind: "statement", doctrine, tradition, id: key }}` where `getSimplifiedText(id)` is defined (the same 24 paragraphs as today) instead of `entry`; `src/features/reader/father-body.tsx` — the `SimplifiedParagraph` element (≈ lines 443–447) passes `address={{ kind: "father", work: workId, edition: <the selected edition id>, locator: division.locator }}` when `selected.simplified && getSimplifiedText(...)` (the same paragraph as today).
- **Creates:** `src/components/simplifier/{use-simplification.ts,simplifier-openers.ts}`, `src/lib/simplifier-visibility.ts`, `e2e/simplifier-real.spec.ts`, `docs/features/ai-real-sui.md`.

### S-ENTRY · «Any paragraph» entry points (kind c: waits for Pedro)
- **Step 1:** publish the proposal Artifact from the brief in `simplifier-design.md` §7.4, then **stop** until Pedro chooses.
- **Step 2 (after the choice):** build the chosen entry points using only `openSimplifier(id)` and `setSimplifierVisibility()`; widen the addresses from the test set to every paragraph the choice covers (03 statements and definitions, Father divisions passing `canSimplify`, 02 prose, glossary entries).
- **Edits:** the call sites it widens (`teach-section.tsx`, `father-body.tsx`, the 02 page section, the glossary term page) and the host of the switch (the «Aa» menu component, decided by the choice); **never** the simplifier components.
- Not part of tonight.

### C-SRV · Chat server
- **Goal:** `POST /api/ai/ask` (SSE) and `POST /api/ai/ask/more` per `contracts.md` §4, with the plan, pack, answer, verification, mapping, fixed texts, caches and logs of `chat-design.md`.
- **Acceptance:** fake mode + fixture: the 82 evaluation questions run through the route without a 5xx; every `answer` validates against `WireAnswer`; intents of the fake plan match the expected ones for pastoral, out-of-scope and injection; verification unit cases (≥ 25: literal, case, curly quotes, ellipsis two segments, three segments rejected, gap > 400 rejected, wrong passage id, quote over `maxQuoteWords` cut, verdict sentence removed, Father-assignment sentence removed, section moved, all quotes failed → `ai_verify_failed` after one repair) pass; a cache hit returns without phases; `more` returns 8 literal blocks; real mode (key): 5 questions (e02, e03, v01, n01, i01) produce verified answers, cost logged < $0.05 total.
- **Creates:** `src/features/ask/{ask.ts,plan.ts,answer.ts,verify-answer.ts,map-answer.ts,prompts.ts,lexicon.ts,fixed-texts.ts,more.ts,coverage-line.ts}`, `src/content/ai-ask/answer-cache.ts`, `src/app/api/ai/ask/more/route.ts`, `tools/ai-checks/check-answer.mjs`, `docs/features/ai-real-csrv.md`.
- **Replaces (owned from F):** `src/app/api/ai/ask/route.ts`.

### C-UI · Chat wiring (kind a + b)
- **Goal:** typed questions that the scripted router does not answer go to `/api/ai/ask`; the answer appears through the approved timeline (status with real phases, quotes, word reveal, chips, actions); errors and limits use the existing `plain` piece; chips and scripted routes keep their reviewed answers.
- **Acceptance:** every existing drawer spec passes with `NEXT_PUBLIC_AI_CHAT=real` and with `scripted` (`reader-ai-drawer`, `father-ask`, `ask-drawer-tree`); new `e2e/reader-ai-real.spec.ts` (fake provider): a typed unscripted question shows the live status with seconds, then quotes and prose with `{q:…}` citations that open the citation window (Father → «Abrir la fuente completa» href), the «Consultó N textos» list, follow-up chips that ask again, «Más textos sobre esto»; 503 `ai_budget_exhausted` (route mocked) shows the message as `plain`; reduced motion; 360/390/1440 light and dark compared with the scripted answer's screenshots (same elements, same metrics).
- **Edits (exact points):** `src/features/reader-ai/chat.tsx` — the submit handler (route: scripted `routeQuestion` first; `none` (and `scopeMiss` when not scoped) → live), the entry type gains a live id; `answer.tsx` — `Answer` props gain `live?: { phase: AskPhase | null; error: AiErrorBody | null }`; the status ticker uses the live phase while waiting, then the existing reveal; `answer-parts.tsx` — `ProseWord` parses `{q:<id>}` into `CiteButton target={{ quote: id }}` with `sourceOf(quote)`; `ask-script.tsx` — `AskScriptData` unchanged; export `withLiveAnswers(base, live)`; `reader-ask.tsx` and `father-ask.tsx` — wrap the script with the live store and recompute `quoteViews` when it changes; `conversations.ts` — `SavedEntry` gains optional `live?: WireAnswer`; `text.ts` — new strings (phase labels if the existing ones do not cover a phase, the privacy line); `script.ts` — none, unless a type needs one optional field.
- **Creates:** `src/features/reader-ai/{live-answers.ts,use-ask-stream.ts}`, `e2e/reader-ai-real.spec.ts`, `docs/features/ai-real-cui.md`.

### EVAL · Evaluation harness
- **Goal:** `npm run ai:eval -- [--subset tag] [--replay|--record] [--base http://localhost:3100]` runs the 82 questions over HTTP, scores the automatic checks, optionally calls the judge, writes `tmp/ai-eval/<run>/report.md` and, with `AI_STORE=supabase`, rows in `ai_eval_runs`/`ai_eval_results`.
- **Acceptance:** against F's stub route in fake mode the run completes and the report lists per-question checks; `--replay` with a recordings dir reruns at $0; the judge prompt (`judge.mjs`) is the one in its prompt file; the cost estimate is printed before a real run and the run refuses to start above `--max-usd` (default 0.50).
- **Creates:** `tools/ai-eval/{run.mjs,judge.mjs,report.mjs,questions.json,README.md}`, `docs/features/ai-real-eval.md`.

### INT · Integration and launch
- **Goal:** merge in order, replace stubs, run everything real, record decisions, prepare the deploy.
- **Acceptance:** `npm run verify`; the whole e2e suite twice in a row (sequentially) with `NEXT_PUBLIC_AI_CHAT=real` and `NEXT_PUBLIC_SIMPLIFIER=on`; the evaluation on Haiku with the gate of `chat-design.md` §19 (100 % valid JSON, 100 % verified quotes displayed, 0 neutrality failures in the human-read set, ≥ 80 % `mustInclude` recall), spend < $0.50; the simplifier smoke test; the kill switch tested (row off → off message within 30 s); the anon probe; DECISIONS entries copied from the block files with dates; ROADMAP «Current state»; GOTCHAS for the guards; the launch checklist below ticked with Pedro.
- **Edits:** `docs/DECISIONS.md`, `docs/ROADMAP.md`, `docs/GOTCHAS.md`, `docs/PROJECT.md` (the «What it is not» line on generated answers and the «Data architecture» AI bullet, marked «Replaced by» per the 2026-11-05 decision), `package.json` (`deploy:demo` gets `NEXT_PUBLIC_AI_CHAT=real`), `.env.example` if a block added a variable; deletes `e2e/ai-stubs.spec.ts` and `src/lib/ai/fixtures/` if unused.

## Launch checklist (Pedro, with INT)
1. Credit 5 USD bought, auto-reload off, monthly limit set; key in `.env.local` and Vercel (Sensitive).
2. Migrations applied; advisors clean; anon probe returns nothing.
3. Passages loaded; database size under 250 MB.
4. Evaluation gate passed; the human-read set (all `verdict`, `loaded`, `fathers-assignment` and `injection` questions, ≈ 30 answers) read by Pedro.
5. Kill switch tested; daily budget $0.25 and monthly $4.00 set; alerts webhook (optional) receives a test.
6. WAF rule published.
7. Deployed with `NEXT_PUBLIC_AI_CHAT=real`; one chat question and one simplification on the live site; `ai_requests` shows them with cost.
8. Privacy line visible in the drawer; DECISIONS records «Replaced by» on 2026-10-05 «no generated chat answers».

## Ownership check (block × shared file × owner)

Test applied to each prompt: «could an agent that knows only this prompt and the files it names build it, and would it touch a file another block owns?». Results: every middle block imports only F's files and its own; every cross-block seam has an F stub with the final signature; no two middle blocks list the same file under «Creates», «Replaces» or «Edits». Two risks found and fixed while writing: (1) both chat blocks needed the drawer's `script.ts` types → C-SRV uses only `contracts.md` wire types, C-UI owns every `reader-ai` file; (2) both simplifier blocks needed `simplifier-types.ts` → S-SRV returns `SimplifyResponse` from `contracts.ts` and never imports the UI types.

| Shared file | Owner | Other blocks that need it, and their seam |
|---|---|---|
| `package.json`, `package-lock.json` | F (deps, lint chain, `ai:*` scripts); INT (`deploy:demo`) | middle blocks add no dependency; if one is truly needed, they report it and INT adds it |
| `.env.example` | F | others report new variables to INT |
| `playwright.config.ts` | F | each block sets `E2E_PORT` in its shell |
| `next.config.ts` | LIM (only the BotID wrapper, if needed) | — |
| `src/lib/ai/*` | F | everyone imports; changes only by a new `contracts.md` version |
| `src/content/ai-store/types.ts`, `memory-store.ts`, `get-ai-store.ts` | F | LIM implements `supabase-store.ts` against `types.ts` |
| `src/content/ai-store/supabase-store.ts` | F stub → **LIM** | — |
| `src/content/ai-guard/guard.ts` | F stub → **LIM** | S-SRV, C-SRV call `guardRequest`/`settleTicket` |
| `src/content/ai-search/types.ts`, `search.ts`, `pack.ts` | F stub → **RET** | C-SRV calls `getCorpusSearch`, `buildPack` |
| `src/app/api/ai/simplify/route.ts` | F stub → **S-SRV** | S-UI calls it over HTTP |
| `src/app/api/ai/ask/route.ts` | F stub → **C-SRV** | C-UI, EVAL call it over HTTP |
| `src/content/simplified-texts.ts` | nobody edits (read by S-SRV's seed, by S-UI's call sites as the test-set gate) | — |
| `src/components/simplifier/*`, `src/lib/simplifier-types.ts`, `src/lib/simplifier-visibility.ts` | **S-UI** | S-ENTRY uses `openSimplifier`/visibility only |
| `src/features/doctrine/teach-section.tsx`, `src/features/reader/father-body.tsx` | **S-UI** (tonight); **S-ENTRY** (later, after S-UI is merged) | sequential, never concurrent |
| `src/features/reader-ai/*` | **C-UI** | — |
| `src/features/ask/*`, `src/content/ai-ask/*`, `src/app/api/ai/ask/more/route.ts` | **C-SRV** | — |
| `src/features/simplify/*`, `src/content/ai-simplify/*` | **S-SRV** | — |
| `supabase/migrations/202611061*` , `src/content/supabase-rpc.ts`, `src/content/ai-guard/*` (rest), `src/instrumentation-client.ts`, `src/app/api/ai/status/route.ts` | **LIM** | RET's `supabase-search.ts` imports `supabase-rpc.ts`: **seam:** RET writes its own RPC call with `fetch` in `supabase-search.ts` (10 lines) and does not import LIM's helper |
| `data/scripts/load-ai-passages.mjs`, `src/content/ai-search/*` (rest) | **RET** | — |
| `tools/check-ai.mjs` | F (runs every `tools/ai-checks/*.mjs`) | each block adds only its own file in `tools/ai-checks/` |
| `tools/ai-eval/*` | **EVAL** | — |
| `docs/DECISIONS.md`, `docs/ROADMAP.md`, `docs/GOTCHAS.md`, `docs/PROJECT.md` | **INT** | each block writes `docs/features/ai-real-<block>.md` |
| `e2e/*` | each block its own new spec; existing specs edited by nobody but C-UI/S-UI if a selector truly changes (report it) | — |
