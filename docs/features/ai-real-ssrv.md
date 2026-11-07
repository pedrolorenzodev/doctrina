# AI block S-SRV · Simplifier server (duplicate `doctrina-ai-ssrv`)

## State

- **Done:** parts 430, 431 and 432. `npm run verify` exit 0 (built with `NEXT_PUBLIC_SIMPLIFIER=on`); `check-simplify.mjs` 51 checks ok; `e2e/ai-simplify.spec.ts` 5/5 on chromium (port 3130); real run 5/5 paragraphs passed the checks for $0.00209; Batch API path tested with 2 paragraphs for $0.00022.
- **In progress:** nothing.
- **Next:** INT copies the files below into the real repo (after LIM and RET) and deletes `e2e/ai-stubs.spec.ts` (its simplify test now fails by design, see «Verification»).
- **How to resume:** read this State; `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/check-ai.mjs` re-runs every check.
- **Usage readings (weekly / session):** 16:42 → 13 % / 13 %; 16:51 → 14 % / 18 %; 16:58 → 15 % / 21 %; 17:06 → 15 % / 23 %; 17:09 → 15 % / 23 %. Block cost ≈ 2 weekly points (budget 2.0 raw).

## What was built

`POST /api/ai/simplify` and the cache-only `GET`, per `contracts.md` §5 and `simplifier-design.md` §1–§6, §8.

- `src/content/ai-simplify/resolve-address.ts`: `parseAddress(raw)` (Bible kind → `ai_not_simplifiable`, anything else invalid → `ai_bad_request`) and `resolveAddress(address, locale)` → `{ text, sourceLang, editionId, speaker, simplifiable }`. Father divisions through `getFatherWork`; tradition pages' definition and statements; 02 paragraphs; glossary entries. Rich markup becomes plain text with the pages' own `plainRich` (citation and verse labels kept, as the page shows them). `simplifiable` = `canSimplify(text)` (and false for AI-translated text).
- `src/content/ai-simplify/cache.ts`: the §10 key through F's `simplificationCacheKey`, store read/write, rejected rows never served, `toSimplifyResponse`.
- `src/content/ai-simplify/seed-fixtures.ts`: with the fake provider and the memory store, the first request for one of the 25 test-build paragraphs seeds its reviewed mock text from `simplified-texts.ts` (by `addressId`).
- `src/features/simplify/prompt.ts`: the canonical English system prompt of §4 verbatim (`{outputLanguage}` = Spanish / English) and the user message (speaker, output language, count, numbered sentences; on a regeneration, the failed checks listed).
- `src/features/simplify/checks.ts`: the 7 checks of §5 (shape, length, numbers, quotes, names, scripts, added claims) plus the verdict lexicon of `contracts.md` §6.
- `src/features/simplify/simplify.ts`: `simplifyParagraph` (resolve → key → seed → cache; hit: guard `cached`, count, log; miss: guard `simplify` with `ESTIMATE_MICROS.simplify`, one call with both levels, checks, one regeneration with the failures, store, log `ai_requests`, settle with the real cost), `cachedSimplification` (GET, never calls the model), and the exported `generateSimplification` (testable without the guard).
- `src/app/api/ai/simplify/route.ts`: thin; `maxDuration = 30`, `dynamic = "force-dynamic"`, `Cache-Control: no-store`, guard cookie appended on success and on failure.
- `tools/ai-pregenerate-simplifications.mjs`, `tools/ai-review-simplifications.mjs`, `tools/ai-checks/check-simplify.mjs`, `e2e/ai-simplify.spec.ts`.

### Address ids S-UI must send (agent's call where the contract left them open)

| Kind | Fields |
|---|---|
| `father` | `work`, `edition` = the edition shown (the English edition id; the Spanish AI edition answers `ai_not_simplifiable`), `locator` |
| `statement` | `doctrine`, `tradition`, `id` = `definition` or the statement id (`QE-1`, `Definición`…) |
| `doctrine` | `section: "common"` + `id: "text"`; `section: "answers"` + `id: <tradition>`; `section: "connected"` + `id: <doctrine>`; `practice` and `witnesses` → `ai_not_simplifiable` |
| `glossary` | `term` = the slug of `/glosario/<slug>` or the term id (`A1`), `tradition` |

## Agent's calls (decisions without asking)

1. **The resolver reads `@/content/pages/index` directly** (the same objects `getTraditionPage` / `getDoctrinePage` return) because those getters import `server-only`, which cannot load in the Node checks and tools. The pages are still validated by the getters on every build.
2. **The glossary getter is imported dynamically**: `get-glossary.ts` → `routes.ts` uses an extension-less relative import the Node alias loader cannot resolve. Glossary addresses work in Next (e2e) but not in the Node tools; nothing in the pregeneration list is a glossary entry.
3. **Output language = the paragraph's own language**, never a translation: statements and 02 paragraphs are Spanish; Father paragraphs follow the edition (English for Lightfoot, as the test build's Ignatius entry). `locale` picks the glossary entry's language and the error message language.
4. **Doctrine sections** as in the table above (the contract only names `section` and `id`).
5. **Glossary**: the entry in the locale's language, else the first es/en entry; its quotation without the trailing «— CEC 85,»; AI-translated glossary entries refused like the AI Father editions.
6. **Bible addresses** are detected before schema validation and answer `400 ai_not_simplifiable` (POST and GET), as the acceptance asks; a Spanish-AI-edition address answers `ai_not_simplifiable` only when its locator exists, else `ai_not_found`; any other edition id is `ai_not_found` (the second column is never simplified).
7. **Seeding is lazy, per paragraph**, on its first request (POST or GET), only with the fake provider **and** the memory store (mock rows never reach Supabase). A mock is seeded only when its sentences are the start of the resolved text (a stale mock is not served); this lets the Sola Scriptura Catholic definition, whose page adds the source line «Concilio Vaticano II, … 1965», keep its mock. Seeded rows: `status: "reviewed"`, `model: "fixture"`. The Baptist Sola Scriptura definition and QE-1 have the same text, so they share one key (the key starts from the text hash by design).
8. **Fake identity passes the «very is shorter» sub-check only in fake mode** (`allowIdentity`); otherwise «any other address returns an aligned identity» could never hold with the fake provider. With a real model, an unsimplified «very» fails.
9. **Checks beyond §5:** the §6 verdict lexicon (a judgement in a unit that its original sentence does not make; quoted text ignored); tradition words added or dropped (this covers §6 «Father assigned to a tradition» without the author list, which needs RET's `authors()`); «this means / esto significa» at the start of any sentence inside a unit, not only the unit's first. Quoted spans are compared without «[…]», ellipses and edge punctuation; a word right after an opening quote, parenthesis or colon counts as initial for the name proxy; «I» is not a name.
10. **The checks are as strict as the design says, stricter than the hand-written test texts:** 9 of the 25 mock entries would fail them, mostly because their «very» paraphrases the official quotation inside «» (check 4 requires it verbatim). They are served as reviewed, not checked. **For Pedro:** if «Muy simple» may paraphrase a quoted confession, check 4 must loosen for `very`.
11. **`max_tokens` = max(4,000, 2.4 × chars/4 + 300)**: the floor is there because Haiku 5.5 thinks adaptively and thinking spends output tokens. A `max_tokens` stop retries once with 1.5× (not counted as the regeneration). One 25 s deadline covers every call of a request (route `maxDuration` 30 s).
12. **Order:** resolve and cache lookup first (no model, no spend), then `guardRequest` with `cached` for a hit or `simplify` for a miss. The GET calls the guard (`cached`) first on every request, then answers 200 or 204; an unknown or unsimplifiable address is a 204 on GET.
13. **Rejections:** `checks.rejections` counts them across regenerations; a rejected row is never served and is regenerated once; after the second rejection the paragraph answers `ai_not_simplifiable`.
14. **`ai_requests`:** POST hits (`cache_hit`) and misses (`ok`, or the error code with usage, cost and checks) are logged; GET prefetches are not. A failed log write does not fail the request (prints `[ai] simplify request log failed`, nothing else).
15. **The Batch tool imports `@anthropic-ai/sdk` in `tools/`.** The contract's «only `anthropic-provider.ts` imports the SDK» guards the app; a dev tool outside `src/` cannot use the adapter for batches. INT: confirm or move batching into F's adapter in a new contracts version.
16. **Pregeneration list:** 20 tradition pages × (definition + first 3 statements) + the four 02 «common» paragraphs + the first 10 divisions of Didache, Ignatius *Smyrn.* and Justin *1 Apol.* (English editions; the Spanish AI editions are off) = **111 unique paragraphs**, estimate **$0.019** on Haiku 5.5 with the batch discount. **The cache key includes the model:** pregenerate with the same `AI_MODEL_SIMPLIFY` as production, or the endpoint never hits those rows (the design's «Sonnet for reviewed texts» needs Sonnet in production too).
17. **Tools:** both load `.env.local` themselves and print only «set»/«missing»; `--limit n` added to the pregeneration tool (used for the 2-paragraph real test); `--run` refuses when the store cannot be read (here `SUPABASE_SECRET_KEY` selects F's stub store, which throws) or the estimate passes `--max-usd`. The review tool finds rows through the pregeneration list (the store has no list method; no interface change); `--approve` / `--reject` take comma-separated address ids or cache-key prefixes.
18. **Speaker** strings are English, in the shape of the prompt's examples («Ignatius of Antioch, To the Smyrnaeans (Joseph Barber Lightfoot's translation)», «the site's own summary of what the Catholic tradition teaches»).

## What is inert (and why)

- No `TODO` in this block's code. What depends on other blocks: the guard is F's stub (no quotas, no BotID, no budget: LIM); the Supabase store is F's stub, so `ai_requests` rows and cached simplifications live only in memory until LIM, and the review tool and `--run` need LIM's store to be useful.
- The review page and `--approve` / `--reject` were tested in one process against the memory store (`tmp/ai-ssrv/review-test.mjs`), not against Supabase.

## How to run

- Checks: `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/check-ai.mjs` (part of `npm run lint`).
- Endpoint, free: `NEXT_PUBLIC_SIMPLIFIER=on npm run build`, then `AI_PROVIDER=fake AI_STORE=memory npx next start -p 3130` and `curl -X POST localhost:3130/api/ai/simplify -H 'content-type: application/json' -d '{"address":{"kind":"father","work":"ignatius-smyrnaeans","edition":"lightfoot-1889","locator":"6.2"},"locale":"es"}'`. Spec: `E2E_PORT=3130 npx playwright test e2e/ai-simplify.spec.ts --project=chromium`.
- Real model: same with `AI_PROVIDER=anthropic AI_STORE=memory` (the key from `.env.local`); each miss ≈ $0.0001–0.0012.
- Pregeneration: `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/ai-pregenerate-simplifications.mjs` (dry run: list and estimate); add `--run [--max-usd 0.20] [--limit n]` to send the batch.
- Review: `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/ai-review-simplifications.mjs [--approve id,id] [--reject id]` writes `tmp/ai-review/index.html`.

## Measured numbers

Real calls (Haiku 5.5 @low, `AI_STORE=memory`, `tmp/ai-ssrv/real-run.mjs`; estimate printed first: $0.0033, cap $0.008):

| Paragraph | Words | Latency | Tokens in / cache read / cache write / out | Cost | Attempts | Second request |
|---|---|---|---|---|---|---|
| Eucharist Catholic QE-3 | 72 | 2.8 s | 220 / 0 / 809 / 367 | 307 µ$ | 1 | hit, 0 ms |
| Baptism Catholic definition | 61 | 1.6 s | 184 / 809 / 0 / 302 | 178 µ$ | 1 | hit, 1 ms |
| Eucharist Baptist QE-1 | 41 | 1.3 s | 134 / 809 / 0 / 197 | 120 µ$ | 1 | hit, 0 ms |
| Ignatius *Smyrn.* 6.2 | 93 | 2.1 s | 254 / 0 / 806 / 360 | 307 µ$ | 1 | hit, 0 ms |
| Justin *1 Apol.* 32 | 632 | 7.0 s | 1,157 / 806 / 0 / 2,110 | 1,179 µ$ | 1 | hit, 1 ms |

- Total of the five: **2,091 µ$ ($0.00209)**; the system prompt (≈ 806 tokens) is cached from the second call of each language.
- Batch API, 2 paragraphs (`--limit 2`): ended in ≈ 3.5 min, **$0.00022** with the discount, both passed the checks.
- **Money spent on the API by this block: $0.00231.**
- Cache hit over HTTP (fake, e2e): < 200 ms asserted; in process 0–1 ms.
- Quality note for the review: Haiku turned Ignatius' «hold strange doctrine» into «teach strange doctrine» in both levels, a small shift of meaning that no cheap check catches. The approved review step (§8) is where this is caught.

## Verification

- `npm run verify` (with `NEXT_PUBLIC_SIMPLIFIER=on`): exit 0; the 4 ESLint warnings are the pre-existing ones F reported; `check-ai`: 4 files ok (`check-simplify.mjs: ok 51 checks`).
- `check-simplify.mjs` covers: refusals (Bible, unknown kind, unknown work and locator, AI edition, tradition without a page, practice cell), `canSimplify` at 1,500/1,501 words, resolution and markup stripping, key format and what changes it, **all 25 mock paragraphs served from the seed**, the prompt numbering, fake identity alignment, the 8 bad outputs of the acceptance (changed number, dropped quote, added name, wrong count, too long, added «esto significa», dropped Greek word, empty unit) plus added verdict, added tradition, dropped attribution and an invented quotation, one regeneration that repairs, two failures → `ai_simplify_failed` with the spend carried, refusal → `ai_refused`, `max_tokens` → one retry with 1.5×.
- `e2e/ai-simplify.spec.ts` (5 tests, chromium, port 3130): reviewed mock texts; aligned identity then a cache hit under 200 ms and a cache-only 200; 02 and glossary paragraphs; the GET never generates (204, 400 without `cacheOnly`, 400 on garbage); refusals with the simplifier's messages.
- `e2e/ai-stubs.spec.ts` (F's, not mine): its test «the simplify stub returns the test-set paragraph…» now fails because the real route answers the seeded paragraph as `reviewed` and `cached: true`; the other 4 pass. INT deletes this spec when the real routes land (plan, block F).
- Files touched: exactly the list below (`git status` compared at the end); no secret in any file, fixture, log or output (grep for the key prefix and `ANTHROPIC_API_KEY=` empty).

## Files (for INT)

```
src/app/api/ai/simplify/route.ts           (replaces F's stub)
src/content/ai-simplify/resolve-address.ts
src/content/ai-simplify/cache.ts
src/content/ai-simplify/seed-fixtures.ts
src/features/simplify/prompt.ts
src/features/simplify/checks.ts
src/features/simplify/simplify.ts
tools/ai-pregenerate-simplifications.mjs
tools/ai-review-simplifications.mjs
tools/ai-checks/check-simplify.mjs
e2e/ai-simplify.spec.ts
docs/features/ai-real-ssrv.md
```

For DECISIONS (INT copies): agent's calls 3, 4, 7, 10, 15 and 16 are the ones Pedro may want to see.

## Commit commands (kit blocks 430–432, real repo, after the files are copied)

Part 430 · resolver, cache, seed:

```
git add src/content/ai-simplify/resolve-address.ts src/content/ai-simplify/cache.ts src/content/ai-simplify/seed-fixtures.ts && git commit -m "feat(ai): resolve simplifier addresses, cache and fake seed"
```

Part 431 · prompt, checks, call, route:

```
git add src/features/simplify/prompt.ts src/features/simplify/checks.ts src/features/simplify/simplify.ts src/app/api/ai/simplify/route.ts && git commit -m "feat(ai): add the simplifier prompt, checks and real route"
```

Part 432 · tools, checks file, spec, doc:

```
git add tools/ai-pregenerate-simplifications.mjs tools/ai-review-simplifications.mjs tools/ai-checks/check-simplify.mjs e2e/ai-simplify.spec.ts docs/features/ai-real-ssrv.md && git commit -m "chore(ai): add simplifier pregeneration, review and checks"
```
