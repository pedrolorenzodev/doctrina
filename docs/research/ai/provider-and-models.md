# Provider and models: research and recommendation

Researched 2026-11-06 (one research subagent fetched the official pages; raw notes with every URL: `provider-research-raw.md` beside this file). **Every price was read on the provider's page on 2026-11-06.** Tags: [verified] = official page fetched that day; [unverified] = seen only in a search result or third-party page; [estimate] = my arithmetic.

## 1. Recommendation (per function)

| Function | Recommended | Why | Fallback (other vendor, same price) | Cheaper option | Higher quality option |
|---|---|---|---|---|---|
| Chat, plan step | **Anthropic `claude-haiku-5-5`**, effort `low` | cheapest strong model with GA strict JSON schema output; the plan is a small classification and extraction | OpenAI `gpt-6-luna` (reasoning effort `none`/`low`) | `openai/gpt-oss-120b` via OpenRouter | not needed |
| Chat, answer step | **Anthropic `claude-haiku-5-5`**, effort `medium` (the model's default) | the answer is mostly selection and literal copying from a given pack, which the verification checks; Haiku's cost lets 5 USD buy ~1,200–1,800 answers | OpenAI `gpt-6-luna` | DeepSeek V4 Flash via OpenRouter (ZDR routing), only after it passes the evaluation set | **`claude-sonnet-5-5`** for the answer step only (≈ 15× the cost): switch by environment variable if the evaluation shows neutrality or recall failures that Haiku cannot fix with prompt changes |
| Simplifier | **Anthropic `claude-haiku-5-5`**, effort `low` | fast, cheap, faithful rewriting; every result is cached | OpenAI `gpt-6-luna` | `openai/gpt-oss-120b` via OpenRouter | `claude-sonnet-5-5` for the batch of pre-generated «reviewed» paragraphs (Batch API, −50 %) |
| Embeddings | **none in v1** (`chat-design.md` §2) | full-text search measured good enough; the free plan's 500 MB is the binding constraint | — | — | phase 2 candidates: Voyage `voyage-4-lite` ($0.02 / 1M, 200 M free tokens) or OpenAI `text-embedding-3-small` ($0.02 / 1M), at ≤ 512 dimensions |

**One vendor for everything in v1 (Anthropic):** one account, one key, one hard limit, one data policy to explain. The fallback vendor is wired as an adapter but **not enabled** (it would need a second funded account; Pedro's 5 USD go to one place).

**Not recommended:** Vercel AI Gateway as the paying layer (its budgets are «a soft cap, not a hard limit»; the request that crosses the limit still completes; new budgets take up to a couple of minutes to count [verified: vercel.com/docs/ai-gateway/observability-and-spend/budgets]), and Gemini Flash on this budget (3.8 Flash doubles to $1.50 / $7.50 on 2027-01-01 [verified: aistudio.google.com/docs/pricing]; 3.5 Flash-Lite is 3–5× Haiku's price; strict JSON together with function calling is still a preview). Free tiers that read user prompts (Gemini free: «human reviewers may read» inputs and outputs [verified]) are excluded on principle: the questions are about faith and may be personal.

## 2. Verified facts by provider

### Anthropic (Claude API) [verified 2026-11-06]
| Model | Input $/1M | Cached read | Cache write 5 min / 1 h | Output $/1M | Context | Source |
|---|---|---|---|---|---|---|
| `claude-haiku-5-5` (prompt ≤ 100K tokens) | 0.10 | 0.01 | 0.125 / 0.20 | 0.50 | 1M | https://platform.claude.com/docs/en/about-claude/pricing |
| `claude-haiku-5-5` (prompt > 100K) | 0.50 | 0.05 | 0.625 / 1.00 | 2.50 | | same |
| `claude-sonnet-5-5` | 2.00 | 0.10 | 2.50 / 4.00 | 10.00 | 1M | same |
| `claude-opus-5-5` | 4.00 | 0.20 | 5.00 / 8.00 | 20.00 | 1M | same |

- Batch API: −50 % (Haiku 5.5 batch $0.05 / $0.25). Prompt length tier counts cache reads and writes. Source: pricing page.
- **Tokenizer:** «Claude 4.7 and later models … approximately 30 % more tokens for the same text»: relevant when comparing per-token prices across vendors (Anthropic's cheap price buys fewer characters per token). Source: pricing page.
- **Structured outputs: GA**, `output_config.format` with a JSON schema; supported on Haiku 5.5, Sonnet 5.5, Opus 5.5; works with streaming and with strict tools. **Not supported in the schema:** string length constraints, numeric min/max, array constraints beyond `minItems` 0/1, recursive schemas, `additionalProperties` other than `false`. So every length rule of `contracts.md` is enforced by the server, not by the schema. Source: https://platform.claude.com/docs/en/build-with-claude/structured-outputs
- Prompt caching: minimum cacheable prefix 512 tokens on Haiku 5.5 / Sonnet 5.5 / Opus 5.5; TTL 5 min (write ×1.25) or 1 h (write ×2). Source: https://platform.claude.com/docs/en/build-with-claude/prompt-caching
- Haiku 5.5: adaptive thinking on by default, default effort `medium`; `budget_tokens` returns 400; thinking is billed as output; assistant prefill returns 400 (use structured outputs). Source: the `claude-api` skill reference (cached 2026-10-06), consistent with the models overview.
- **Spanish:** Global-MMLU, Spanish as % of English: Haiku 5.5 98.1 %, Sonnet 5.5 99.0 % (vendor-published; «not for ranking models»). Source: https://platform.claude.com/docs/en/build-with-claude/multilingual-support. No vendor publishes Spanish theology quality: the evaluation set measures it.
- **Hard spending limit:** prepaid credits; the API stops at zero balance; credits expire after 1 year and are non-refundable; a lower monthly limit can be set on the Billing page; tier caps (Start $500/month). Source: https://platform.claude.com/docs/en/api/rate-limits and the billing help pages linked from it. **Minimum credit purchase: «$5» [unverified, third-party page].**
- Rate limits, Start tier: 4,000 RPM, 2 M input TPM, 400 K output TPM per model; cache reads do not count toward input TPM; new organisations may start in an «Evaluation» tier whose limits are not published [verified for Start; Evaluation unverified]. Irrelevant at our volume.
- **Data:** no training on API data by default; deleted within 30 days; content flagged by safety classifiers kept up to 2 years. Source: Anthropic privacy center / commercial terms (URLs in the raw notes).
- **Deprecation:** at least 60 days' notice; Haiku 5.5 retires «not sooner than» 2027-10-07. Source: https://platform.claude.com/docs/en/about-claude/model-deprecations
- Errors: 402 `billing_error` (no credit), 429 `rate_limit_error`, 529 `overloaded_error` (retryable), 400 `invalid_request_error`. Source: the `claude-api` skill, `shared/error-codes.md`.
- **Religious content:** no usage-policy clause restricts it (religion appears only as a protected attribute). [verified, usage policy page]

### OpenAI [verified 2026-11-06, developers.openai.com]
- `gpt-6-luna`: $0.10 in, $0.01 cached, $0.50 out, 1.05 M context; strict structured outputs; tools only with reasoning effort `none` in Chat Completions (Responses API: yes); default reasoning effort `medium` generates billed reasoning tokens. https://developers.openai.com/api/docs/models/gpt-6-luna
- `gpt-6.1-terra`: $1.00 / $0.05 / $5.00. **`gpt-5-mini` and `gpt-5-nano` shut down 2026-12-11** (do not build on them). https://developers.openai.com/api/docs/pricing
- Hard limits: organisation and project budgets return 429; docs admit spend «can slightly exceed the configured amount» [verified]; one undated forum thread says they only notify [unverified].
- Data: no training unless opted in; abuse logs up to 30 days. Deprecation: ≥ 6 months for GA models.
- Embeddings: `text-embedding-3-small` $0.02 / 1M, 1,536 dimensions.

### Google Gemini API [verified 2026-11-06, aistudio.google.com/docs]
- `gemini-3.5-flash-lite` $0.30 / $0.03 cached (+ $1 per 1M tokens per hour of cache storage) / $2.50 out; `gemini-3.8-flash` $0.75 → **$1.50 from 2027-01-01**, out $3.75 → **$7.50**; `gemini-3.1-flash-lite` $0.25 / $1.50 (earliest shutdown 2027-05-07). Output includes thinking.
- Strict JSON + function calling together: «preview», Gemini 3 only.
- Hard limits: prepaid ($5 minimum) stops at $0; per-project cap «experimental», ~10 minutes of overage lag.
- Data: paid tier, no training, abuse data 55 days; **free tier: human reviewers may read prompts; used to improve products**; EEA/CH/UK users require the paid tier.

### OpenRouter (open-weights models) [verified 2026-11-06, openrouter.ai]
- No markup on tokens; 5.5 % fee on credit purchases; prepaid balance at zero → HTTP 402 (hard); per-key credit limits; not logged by default; per-request `zdr: true` fails instead of falling back to a provider that keeps data.
- `openai/gpt-oss-120b` (Apache 2.0) $0.024 / $0.087 (cheapest endpoints are often quantised; 26 providers, up to $0.35 / $0.95); `deepseek/deepseek-v4-flash-0731` $0.059 / $0.30; `qwen/qwen3.8-flash` $0.15 / $0.47; `mistralai/mistral-small-2603` $0.15 / $0.60. Structured-output support is a model-level flag; per-endpoint support **not checked** [unverified].

### Vercel AI Gateway [verified 2026-11-06, vercel.com/docs/ai-gateway]
No markup; budgets per team/project/key, **soft**; BYOK spend not counted in budgets; ZDR free per request; monthly free credit amount not on the pricing page («$5» only in search results [unverified]). Useful later for fallbacks and observability; not needed for one vendor.

## 3. Platform limits that shape the design [verified 2026-11-06]
- **Vercel Hobby:** function max duration 300 s (default and max), 2 GB memory, 4.5 MB request/response body; included per month: 1 M invocations, 4 CPU-hours of active CPU, 360 GB-hours of memory, 10 GB origin transfer; waiting on I/O (the model call) is not CPU but does consume memory GB-hours; over the limits on Hobby: «wait until 30 days have passed» (no paid overage); Hobby is «non-commercial personal use only». Sources: vercel.com/docs/limits, /docs/functions/limitations, /docs/plans/hobby.
- **Vercel BotID:** Basic free on all plans; Deep Analysis Pro only ($1 / 1,000). vercel.com/docs/botid
- **Vercel WAF rate limiting on Hobby:** 1 rate-limit rule per project (within 3 custom rules), keyed on IP or JA4, window 10 s–10 min, 1 M allowed requests included; counters per region. vercel.com/docs/vercel-firewall
- **Cloudflare Turnstile:** free, 20 widgets, unlimited challenges, no Cloudflare DNS or proxy needed; `POST https://challenges.cloudflare.com/turnstile/v0/siteverify`; a token is valid 300 s, once. developers.cloudflare.com/turnstile
- **Upstash Redis free:** 500 K commands/month, 250 MB. upstash.com/pricing
- **Supabase Free:** 500 MB database, 5 GB egress, 2 active projects, «unlimited API requests», pauses after 7 days of inactivity; over quota → read-only, pause or 402. supabase.com/pricing

## 4. Cost model [estimate, from the verified prices; to be replaced by measured `usage` after the first funded runs]

Token counts are Claude tokens (the newer tokenizer). Assumptions are written so they can be corrected with the first 20 real logs (`ai_requests` stores every call's usage).

### 4.1 One chat answer (Haiku 5.5 for both steps)
| Call | Input tokens | Output tokens (incl. thinking) | Cost |
|---|---|---|---|
| Plan (system 1,100 + author/work id list 500 + question and context 300) | 1,900 | 400 (effort `low`) | 1,900 × 0.10/1M + 400 × 0.50/1M = **$0.00039** |
| Answer (system + schema 1,900 + evidence pack ≈ 11,000 + question 100) | 13,000 | 1,800 (≈ 1,000 JSON + ≈ 800 thinking at `medium`) | 13,000 × 0.10/1M + 1,800 × 0.50/1M = **$0.0022** |
| Repair (≈ 10 % of answers) | 14,500 × 0.1 | 1,800 × 0.1 | **$0.00023** |
| **Total** | | | **≈ $0.0028** (×1.5 safety margin: **$0.0042**) |

Prompt caching barely matters here: the cacheable prefix is ≈ 1,100–1,900 tokens (≈ $0.0002 per call at full price) and at low traffic the 5-minute cache often expires between questions (then each request pays the ×1.25 write). The design marks the system prompt with `cache_control` anyway (it pays off from 2 questions within 5 minutes).

**With Sonnet 5.5 for the answer step:** 13,000 × 2/1M + 1,800 × 10/1M = $0.044, + plan $0.0004 + repairs → **≈ $0.049** (×1.5: $0.073).

### 4.2 One simplification (Haiku 5.5, effort `low`, both levels in one call)
System 750 + numbered paragraph ≈ 450 (a 300-word paragraph) → input ≈ 1,200; output ≈ 2 levels × 1.1 × 450 + thinking 100 ≈ 1,100 → 1,200 × 0.10/1M + 1,100 × 0.50/1M = **$0.00067** (×1.5: **$0.001**). A cached simplification costs $0.

### 4.3 What 5 USD buys
| Use | Expected | Pessimistic (×1.5) |
|---|---|---|
| Chat answers, Haiku 5.5 | **≈ 1,780** | ≈ 1,190 |
| Chat answers, Sonnet 5.5 answer step | ≈ 100 | ≈ 68 |
| Simplifications (cache misses) | **≈ 7,400** | ≈ 5,000 |
| One full evaluation run (82 chat + 82 judge calls on Haiku) | ≈ $0.25 | ≈ $0.40 |

### 4.4 Monthly cost by volume (cache misses; cache hits are free)
| Uses per month | Chat (Haiku) | Chat (Sonnet answer) | Simplifier |
|---|---|---|---|
| 100 | $0.28 | $4.90 | $0.07 |
| 1,000 | $2.80 | $49 | $0.67 |
| 10,000 | $28 | $490 | $6.70 |

Vercel and Supabase at these volumes stay inside the free plans [estimate]: a chat request holds a 2 GB function for ≈ 12 s ≈ 0.0067 GB-h, so 360 GB-h ≈ 54,000 answers a month before Fluid compute's sharing; CPU ≈ 0.1 s per request; the Supabase egress of a pack is ≈ 40 KB.

## 5. Model deprecation risk and how the code isolates the model
- Haiku 5.5 retires not before 2027-10-07 (≥ 60 days' notice); OpenAI GA ≥ 6 months; Google has no fixed notice.
- The model is **never named in feature code**. `src/lib/ai/models.ts` maps roles (`plan`, `answer`, `simplify`, `judge`) to `{ provider, model, effort }` read from `AI_MODEL_PLAN`, `AI_MODEL_ANSWER`, `AI_MODEL_SIMPLIFY`, `AI_MODEL_JUDGE` (defaults in that file); `src/lib/ai/prices.ts` holds the price per model, and **an unknown model refuses to run** (the budget switch could not price it). Changing a model is an environment change plus one price row; the model id is part of every cache key and log row, and the evaluation set must pass before the change ships.
- Provider adapters (`anthropic`, `fake`, `replay`; `openai` later) implement one interface (`contracts.md` §2); the official SDK of each vendor lives only inside its adapter.

## 6. Data and privacy summary (for the drawer's privacy line)
- Anthropic: no training on API data; deleted within 30 days; flagged content up to 2 years. Doctrina: question text kept 30 days for error review, no IP, no notes, no selection text (`chat-design.md` §17).
- Zero data retention (ZDR) at Anthropic requires an arrangement with Anthropic [unverified for small accounts]; not needed for v1, mentioned in risks.

## 7. Could not verify
Anthropic's minimum credit purchase and «Evaluation» tier limits; AI Gateway's free credit; OpenRouter's card-fee minimum; whether OpenAI project limits truly block; Gemini per-model rate limits; OpenAI's usage-policy text (403 to the fetcher); per-endpoint structured-output support on OpenRouter; DeepSeek's data terms; over-quota behaviour of Upstash and of Vercel WAF beyond the included requests. None of these blocks the recommendation.
