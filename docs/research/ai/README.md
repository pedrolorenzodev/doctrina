# Real AI (chat and simplifier): index, decisions for Pedro, open questions

Planning session «AI plan», 2026-11-06, Opus 5.5 high, in the duplicate `doctrina-aiplan`. Planning only: nothing under `src/`, `e2e/` or Supabase was changed. The executable plan is `docs/features/ai-real.md`.

## Files
| File | What it is |
|---|---|
| `real-ai-plan-notes-2026-11-05.md` | Pedro's decisions and the brief (input, from the coordinator) |
| `provider-and-models.md` | Verified prices, limits, data terms; recommendation per function; cost per answer and per simplification; what 5 USD buys; monthly cost at 100 / 1,000 / 10,000 |
| `provider-research-raw.md` | The research subagent's raw notes with every URL (fetched 2026-11-06) |
| `chat-design.md` | How the chat answers: objections to the brief, measurements, collections, plan → retrieve → answer → verify, schema, verification, the real prompts (en canonical, es), refusals, length, «what was searched», multi-turn, languages, scope, fallbacks, injection, copyright, logging, caching, evaluation |
| `simplifier-design.md` | Address-only endpoint (threat and design), lifecycle with the one-push rule, cache, contract and prompts, checks, hard cases, the «any paragraph» options with one recommendation, the proposal brief, pre-generation |
| `abuse-and-cost-control.md` | Layers (WAF, BotID, quotas, budget reservation, kill switch, provider cap), counters compared, alerts, what the user sees, cost of the evaluation |
| `schema-and-api.md` | Tables, routes, environment variables, the passage loader, reuse of `CORPUS_SOURCE` and the loaders, files per block |
| `migrations/*.sql` | Four draft migrations, **not applied**, checked on Postgres 17 (PGlite) |
| `contracts.md` | The frozen interfaces between blocks (types, schemas, routes, keys, errors and UI messages, env names, fakes) |
| `eval/questions.json` | 82 evaluation questions (52 es, 30 en; 54 evidence, 14 verdict requests, 5 out of scope, 5 injection, 4 pastoral; multi-turn, scope, selection, language mixing, coverage gaps) |
| `prompts/*.md` | One self-contained launch prompt per block: `f`, `lim`, `ret`, `s-srv`, `s-ui`, `s-entry`, `c-srv`, `c-ui`, `eval`, `int` |
| `prototypes/` | The quote-verification prototype and its cases, the PGlite migration check, the editorial count script |
| `risks-and-obstacles.md` | 28 risks ranked, with mitigations; objections to the plan itself |
| `docs/features/ai-real.md` | State, what Pedro must do, blocks, dependency graph, tonight's order, launch checklist, ownership table |

## Decisions for Pedro (each with the agent's recommendation; silence = the recommendation)
1. **Provider and models:** Anthropic, `claude-haiku-5-5` for the plan, the answer and the simplifier; `claude-sonnet-5-5` for the answer step only if the evaluation shows failures Haiku cannot fix. *Recommended.* (≈ $0.003 per answer → ≈ 1,200–1,800 answers per 5 USD; Sonnet ≈ $0.05 → ≈ 100.)
2. **Budget split:** app caps $0.25 per day and $4.00 per month; the first 5 USD keeps ≤ $2 for evaluation runs. *Recommended.*
3. **Bot check:** Vercel BotID Basic (invisible, free, no widget to place) instead of Cloudflare Turnstile (which would need a place for its challenge: new UI). *Recommended: BotID;* Turnstile only if the logs show abuse.
4. **Reader's notes:** when «Tus notas y subrayados» is on, send up to 20 notes of the chapter or work with the question (never stored or logged). *Recommended: yes* (otherwise the switch promises something the AI does not see).
5. **Simplifier on the AI-translated Spanish Fathers:** keep it off (the 2026-11-04 decision; it would be AI over AI). *Recommended: off.*
6. **Translating quotes in answers:** no (a translated quote cannot be verified); later, an optional labelled «Traducir esta cita» beside the verified original. *Recommended: not in v1.*
7. **Typed questions that the scripted router recognises** keep their reviewed scripted answers; only the rest goes to the AI. *Recommended* (free, reviewed, keeps the specs).
8. **Logging:** question text kept 30 days for error review, no IP, no notes; the privacy line «Tus preguntas se envían a un proveedor de IA y se guardan 30 días para revisar errores. No guardamos tu IP.» *Recommended;* wording yours.
9. **Limits per person:** 12 AI answers and 40 simplifications per day (IP ceilings 40 and 120). *Recommended* for a close-circle demo; raise later.
10. **«Only evidence, no interpretation»:** the answer may have ≤ 110 words of attributive prose («Ignacio, en *A los esmirniotas* 6.2, dice…»), never a judgement; the order of traditions is fixed by the server. *Recommended* (`chat-design.md` §1.2: a bare list reads worse and the selection is already editorial).
11. **«Any paragraph» simplifier:** a proposal Artifact with A (switch in «Aa», off by default) + B (selection toolbar in the Fathers' reader) as the recommendation, E and today's rings beside them. *Recommended:* run block S-ENTRY's step 1 after S-UI.
12. **Pre-generated, reviewed simplifications** of ≈ 120 key paragraphs with Sonnet through the Batch API (≈ $0.60), reviewed by you with a local page. *Recommended after launch.*
13. **Phase 2 candidates** (not tonight): evidence-only mode when the AI is off (no model, the search's texts as quotes); embeddings if the evaluation shows recall gaps (fits the free plan only at ≤ 512 dimensions); speaker tags for dialogue works.

## Open questions (could not close)
- Anthropic's minimum credit purchase and the limits of a new account's «Evaluation» tier [unverified; only a third-party page says $5].
- Whether BotID works with the current **prebuilt manual deploys** (`vercel deploy --prebuilt`) without extra build integration: to test on the first preview (LIM).
- SSE through Vercel to the browser without buffering (headers set; to confirm on the first preview).
- Which forwarded header carries the client IP on this project (to confirm on the first preview).
- The planner's use of the partial `verses` indexes on the real 164,462 rows (`explain analyze` after applying).
- Haiku 5.5's real token use at effort `low`/`medium` (thinking is billed as output; the cost model assumes 100–800 thinking tokens): measured from the first 20 logged calls.
- Haiku's quality on Spanish theology and on literal copying under the neutrality rules: only the evaluation can say.
- Whether Pedro sees the pending and error states as «states of approved components» (no proposal) or as new UI (then they join the S-ENTRY proposal).
