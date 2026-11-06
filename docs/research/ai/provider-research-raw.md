# LLM provider research (raw) — fetched 2026-11-06

Scope: CHAT (tool calls + strict JSON with cited passage ids, es/en), SIMPLIFIER (cheap paragraph rewrite, sentence-aligned JSON), optional EMBEDDINGS.
Rule followed: every number below was read today (2026-11-06) on the URL cited next to it. Anything only seen in a search snippet or third-party page is marked **[unverified: search]**. Pages were read through a fetch tool that summarises long pages; where the summary could be ambiguous I re-fetched asking for exact text. OpenRouter numbers come from its public JSON API (`/api/v1/models`, `/api/v1/models/<id>/endpoints`), read today.

All prices USD per 1M tokens ("MTok").

---

## 1. Anthropic (Claude API)

Current lineup (models overview: https://platform.claude.com/docs/en/about-claude/models/overview): Claude Fable 5.1, Claude Opus 5.5, Claude Sonnet 5.5, Claude Haiku 5.5. All: 1M context, 128K max output, adaptive thinking, tool use. Legacy still available: Fable 5, Opus 5, Opus 4.8/4.7/4.6/4.5, Sonnet 5, Sonnet 4.6, Haiku 4.5.

| model | input | cached input (cache hit) | cache write 5m / 1h | output | context | structured output | tool use | source | fetched |
|---|---|---|---|---|---|---|---|---|---|
| claude-haiku-5-5 (prompt ≤100K tok) | $0.10 | $0.01 | $0.125 / $0.20 | $0.50 | 1M | yes (GA) | yes | https://platform.claude.com/docs/en/about-claude/pricing | 2026-11-06 |
| claude-haiku-5-5 (prompt >100K tok) | $0.50 | $0.05 | $0.625 / $1 | $2.50 | 1M | yes | yes | same | 2026-11-06 |
| claude-sonnet-5-5 | $2 | $0.10 (0.05x) | $2.50 / $4 | $10 | 1M | yes | yes | same | 2026-11-06 |
| claude-opus-5-5 | $4 | $0.20 (0.05x) | $5 / $8 | $20 | 1M | yes | yes | same | 2026-11-06 |
| claude-fable-5-1 | $10 | $0.25 (0.025x) | $12.50 / $20 | $50 | 1M | yes | yes | same | 2026-11-06 |
| claude-sonnet-5 (legacy) | $2 | $0.20 | $2.50 / $4 | $10 | — | yes | yes | same | 2026-11-06 |
| claude-haiku-4-5 (legacy) | $1 | $0.10 | $1.25 / $2 | $5 | — | yes | yes | same | 2026-11-06 |

- Batch API: 50% off input and output; Haiku 5.5 batch = $0.05 in / $0.25 out (≤100K prompt). Source: pricing page above.
- Haiku 5.5 is priced by prompt length; "A request's prompt length counts all of its input tokens, including cache reads and cache writes." Other 4.6+ models get the full 1M at standard price. Source: pricing page.
- Tokenizer note (pricing page): "Claude 4.7 and later models … use a newer tokenizer … approximately 30% more tokens for the same text." Relevant when comparing per-token prices across vendors.
- `inference_geo: "us"` = 1.1x multiplier (pricing page).
- Structured outputs: GA, `output_config.format` with `json_schema`; no beta header needed; supported list includes claude-haiku-5-5, claude-sonnet-5-5, claude-opus-5-5. Works with tool use in the same request (strict tools `strict: true`) and with streaming. Not supported: recursive schemas, numeric constraints (min/max), string length constraints, array constraints beyond minItems 0/1, `additionalProperties` other than false; max 20 strict tools/request. Source: https://platform.claude.com/docs/en/build-with-claude/structured-outputs
- Prompt caching: minimum cacheable prompt 512 tokens for Opus 5.5 / Sonnet 5.5 / Haiku 5.5 (4,096 for Haiku 4.5). TTL 5 min (write 1.25x) or 1 h (write 2x). Caching works with tools (order tools → system → messages). Source: https://platform.claude.com/docs/en/build-with-claude/prompt-caching
- Tool-use system prompt overhead for Haiku 5.5: 286 tokens (auto/none), 406 (any/tool). Source: pricing page.
- Spanish quality evidence (official, vendor-published): Global-MMLU zero-shot, % of the same model's English score: Spanish = Haiku 5.5 98.1%, Sonnet 5.5 99.0%, Opus 5.5 99.3%, Fable 5.1 99.4% (max effort; vendor says not for ranking models). Source: https://platform.claude.com/docs/en/build-with-claude/multilingual-support

## 2. OpenAI

Current flagship lineup (models page: https://developers.openai.com/api/docs/models): GPT-6 Astra, GPT-6.1 Sol, GPT-6.1 Terra, GPT-6 Luna — all 1.05M context, 128K max output, function calling. (openai.com/api/pricing returned 403; developers.openai.com is the official docs host — platform.openai.com/docs/pricing 301-redirects there.)

Pricing source: https://developers.openai.com/api/docs/pricing (Standard tier, short context ≤272K input).

| model | input | cached input | cache write (30m / 12h) | output | context | structured output | tool use | source | fetched |
|---|---|---|---|---|---|---|---|---|---|
| gpt-6-luna | $0.10 | $0.01 | $0.125 / $0.25 | $0.50 | 1.05M (max input 922K) | yes | yes (Chat Completions: only with reasoning effort `none`; Responses API: yes) | https://developers.openai.com/api/docs/models/gpt-6-luna | 2026-11-06 |
| gpt-6.1-terra | $1.00 | $0.05 | $1.25 / $2.50 | $5.00 | 1.05M | yes | yes | https://developers.openai.com/api/docs/models/gpt-6.1-terra | 2026-11-06 |
| gpt-6.1-sol | $2.00 | $0.10 | $2.50 / $5.00 | $10.00 | 1.05M | not checked on model page | yes | pricing page | 2026-11-06 |
| gpt-6-astra | $10.00 | $1.00 | $12.50 / $25.00 | $50.00 | 1.05M | not checked | yes | pricing page | 2026-11-06 |
| gpt-5.6-luna | $0.20 | $0.02 | $0.25 / $0.50 | $1.20 | — | not checked | — | pricing page | 2026-11-06 |
| gpt-5.4-mini | $0.75 | $0.075 | — | $4.50 | — | not checked | — | pricing page | 2026-11-06 |
| gpt-5-mini (DEPRECATED, shutdown 2026-12-11) | $0.25 | $0.025 | — | $2.00 | — | — | — | pricing + deprecations pages | 2026-11-06 |
| gpt-5-nano (DEPRECATED, shutdown 2026-12-11) | $0.05 | $0.005 | — | $0.40 | — | — | — | same | 2026-11-06 |

- Long context (>272K input) roughly doubles input price (e.g., gpt-6-luna $0.20 / cached $0.02 / output $0.75). Source: pricing page.
- Batch: "roughly halved" vs Standard; Flex matches Batch for listed models. Source: pricing page.
- Regional processing / data residency: +10% (pricing page).
- gpt-6-luna knowledge cutoff 2026-05-18; reasoning effort `none`…`max`, default `medium` (model page). Note: the default reasoning effort generates billed reasoning tokens; for the simplifier set `none`/`low`.
- Spanish quality evidence: no official per-language table found for these models. **Not checked further.**

## 3. Google Gemini API

Docs moved: ai.google.dev/gemini-api/docs/* now 301 → aistudio.google.com/docs/*.
Pricing source: https://aistudio.google.com/docs/pricing (Standard paid tier). **Price changes already announced on that page** are shown as "now → from date".

| model | input | cached input (context caching) | cache storage $/1M tok/hour | output | context (in / out) | structured output | tool use | source | fetched |
|---|---|---|---|---|---|---|---|---|---|
| gemini-3.8-flash ("New") | $0.75 → **$1.50 from 2027-01-01** | $0.075 → $0.15 | $0.50 → $1.00 | $3.75 → **$7.50** | 1,048,576 / 65,536 | yes | yes | https://aistudio.google.com/docs/models/gemini-3.8-flash + pricing | 2026-11-06 |
| gemini-3.6-flash (previous gen, stable) | $0.75 → $1.50 from 2027-01-01 | $0.075 → $0.15 | $0.50 → $1.00 | $3.75 → $7.50 | not checked | not checked | not checked | pricing | 2026-11-06 |
| gemini-3.5-flash-lite (stable) | $0.30 | $0.03 | $1.00 | $2.50 | 1,048,576 / 65,536 | yes | yes | https://aistudio.google.com/docs/models/gemini-3.5-flash-lite + pricing | 2026-11-06 |
| gemini-3.1-flash-lite (stable; earliest shutdown 2027-05-07) | $0.25 | $0.025 | $1.00 | $1.50 | not checked | not checked | not checked | pricing + deprecations | 2026-11-06 |
| gemini-2.5-flash-lite (not deprecated) | $0.10 | $0.01 | $1.00 | $0.40 | not checked | not checked | not checked | pricing | 2026-11-06 |
| gemini-4-argon (top model, no free tier) | $2.00 → $4.00 from 2026-12-01 | $0.10 → $0.20 | not listed | $10 → $20 | 1M / 65K | not checked | not checked | pricing + models page | 2026-11-06 |
| gemini-3.1-pro-preview | $2 (≤200K) / $4 | $0.20 / $0.40 | $4.50 | $12 / $18 | — | — | — | pricing | 2026-11-06 |

- Batch tier: gemini-3.8-flash $0.375 → $0.75 in, $1.875 → $3.75 out; gemini-3.5-flash-lite $0.15 in / $1.25 out; gemini-3.1-flash-lite $0.125 in / $0.75 out (pricing page).
- Output price includes thinking tokens ("Output (incl. thinking)").
- Structured output: `response_format` with `schema`; combining Structured Outputs with Function Calling is "available only to Gemini 3 series models" and described as a preview feature. Not enforced: minLength/maxLength, min/maxProperties, uniqueItems, contains. "Very large or deeply nested schemas may be rejected." Source: https://aistudio.google.com/docs/structured-output
- gemini-2.5-pro and gemini-2.5-flash are deprecated; from 2026-12-01 requests to them are rerouted to gemini-3.8-flash and gemini-3.5-flash-lite respectively (models page https://aistudio.google.com/docs/models).
- Grounding with Google Search: 5,000 free requests/month (Gemini 3+), then $14 / 1,000 (pricing page). Not needed for this project.
- Spanish quality evidence: no official per-language table found. **Not checked further.**

## 4. OpenRouter (router for open-weights models)

Fees and policy:
- "AI Gateway"-style: OpenRouter FAQ says "there is no markup on inference pricing"; fee is charged on credit purchase. https://openrouter.ai/docs/faq
- Platform fee on credit purchases: **5.5% (Standard), 8% (Business)**; "no minimums and no lock-in". https://openrouter.ai/pricing
- Card fee minimum $0.80 and crypto 5% flat — **[unverified: search]** (OpenRouter blog post seen only in search results: https://openrouter.ai/blog/announcements/simplifying-our-platform-fee/).
- BYOK: first $25,000/month list-price inference free of fee, then 5%. https://openrouter.ai/pricing
- Prepaid as hard cap: zero/negative balance → HTTP 402 ("Adding credits to put your balance above zero allows you to use those models again"); optional per-key credit limit (`limit_source: openrouter_key_limit`). https://openrouter.ai/docs/api-reference/limits
- Paid models: "no platform-level request cap" (provider 429s still possible). Free `:free` variants: 20 RPM; 50 req/day (<10 credits purchased) or 1,000 req/day (≥10). Same URL.
- Logging: "Prompt and completion are not logged by default"; opt-in logging gives 1% discount. https://openrouter.ai/docs/faq
- ZDR routing: per-request `zdr: true` or account-wide privacy setting routes only to ZDR endpoints; if none qualifies the request fails instead of falling back. https://openrouter.ai/docs/features/zdr
- Budgets & spend controls: listed for Standard/Business/Enterprise, not Free. https://openrouter.ai/pricing

Candidate open-weights models (prices = OpenRouter model-level listing from https://openrouter.ai/api/v1/models, read 2026-11-06; actual price depends on the provider routed to — see endpoint ranges):

| model (OpenRouter id, HF weights id) | input | cached input | cache write | output | context | structured output | tool use | source | fetched |
|---|---|---|---|---|---|---|---|---|---|
| deepseek/deepseek-v4-flash-0731 (HF deepseek-ai/DeepSeek-V4-Flash-0731; 284B MoE, 13B active) | $0.059 | $0.035 | n/a | $0.30 | 1,048,576 | `structured_outputs` + `response_format` | `tools` | https://openrouter.ai/api/v1/models ; endpoints: https://openrouter.ai/api/v1/models/deepseek/deepseek-v4-flash-0731/endpoints (29 providers, $0.059–$0.44 in, $0.18–$1.32 out) | 2026-11-06 |
| qwen/qwen3.8-flash (HF Qwen/Qwen3.8-Flash-Next) | $0.15 | $0.016 | n/a | $0.47 | 1,000,000 | yes | yes | models API | 2026-11-06 |
| mistralai/mistral-small-2603 (Mistral Small 4, HF Mistral-Small-4-119B-2603) | $0.15 | $0.015 | n/a | $0.60 | 262,144 | yes | yes | models API | 2026-11-06 |
| openai/gpt-oss-120b (Apache 2.0, released 2025-08) | $0.024 | $0.021 | n/a | $0.087 | 131,072 | yes | yes | models API; endpoints: 26 providers, $0.024–$0.35 in, $0.087–$0.95 out | 2026-11-06 |
| google/gemma-4-31b-it | $0.20 | — | n/a | $0.40 | 262,144 | yes | yes | models API | 2026-11-06 |

Caveat: "supports structured_outputs/tools" is an OpenRouter model-level flag; per-provider support varies (not checked endpoint by endpoint). Cheapest endpoints are often fp4/fp8 quantized.

## 5. Vercel AI Gateway

- "AI Gateway charges no markup and no platform fee on tokens. You pay the provider's list price"; BYOK also no fee (paid tier only; needs purchased credits). "You're responsible for any payment processing fees that may apply." https://vercel.com/docs/ai-gateway/pricing (page last_updated 2026-09-08)
- Free tier: subset of models, lower per-model rate limits; first credit purchase ends the monthly free credit. Amount of the monthly free credit is **not stated on the current pricing page or the landing page** (https://vercel.com/ai-gateway). "$5 per month" appears only in search snippets/community posts → **[unverified: search]**.
- Budgets: team / project / API key / user scopes, daily/weekly/monthly/none refresh, min $1; exceeded → HTTP 402 `quota_for_entity_exceeded`. **"A budget is a soft cap, not a hard limit. The check runs at the start of each request, so the request that crosses the limit still completes."** New key budgets may not be counted for "up to a minute or two"; changes take "up to about 5 minutes". BYOK spend is NOT counted in budgets. https://vercel.com/docs/ai-gateway/observability-and-spend/budgets
- Prepaid AI Gateway Credits + optional auto top-up (off by default). Pricing page.
- ZDR: per-request free; team-wide $0.10 / 1,000 requests; requires Pro, Enterprise, or purchased credits ("Free credits don't count"). Pricing page.
- Supports AI SDK, OpenAI Chat Completions/Responses, Anthropic Messages APIs; provider/model fallbacks. https://vercel.com/docs/ai-gateway

## 6. Other cheap options (brief)

- **DeepSeek official API** (https://api-docs.deepseek.com/quick_start/pricing): `deepseek-flash` (V4.1-Flash-1017): cache hit $0.006, cache miss $0.30, output $1.20 at peak; off-peak half ($0.003 / $0.15 / $0.60). `deepseek-v4-pro`: $0.044 / $1.32 / $3.96 peak. 1M context, JSON output, tool calls; strict mode not mentioned. Peak = 01:00–04:00 and 06:00–10:00 UTC Mon–Fri. Legacy name `deepseek-v4-flash` "retired", served by V4.1-Flash-1017. Data-location/training terms NOT checked.
- **Mistral** (https://mistral.ai/pricing): only figure on page: "Mistral Large costs $0.5 /M tokens in and $1.5 /M tokens out"; batch −50%; cached input up to −90%. Other model prices and free-tier data terms not on that page; not checked further.
- **Groq, Cerebras**: not checked (time). Both appear as providers of gpt-oss-120b on OpenRouter at $0.15/$0.60 (Groq) and $0.35/$0.75 (Cerebras) — OpenRouter endpoint listing, 2026-11-06.

---

## Rough per-answer cost (my arithmetic, not a vendor figure)

Assumptions: CHAT answer = 3,000 cached system tokens (cache read) + 9,000 uncached tool-result/input tokens + 1,200 output tokens, single pass. Ignores: re-sending context across 2–4 tool turns (adds input), reasoning/thinking tokens (billed as output), cache writes on cold start, tokenizer differences (Claude 4.7+ tokenizer ≈ +30% tokens).

| model | ≈ $ per answer | ≈ $ per 1,000 answers |
|---|---|---|
| claude-haiku-5-5 | 0.0015 | 1.53 |
| gpt-6-luna | 0.0015 | 1.53 |
| deepseek-v4-flash-0731 via OpenRouter (cheapest listing) | 0.0010 | 1.00 (+5.5% credit fee) |
| gemini-3.1-flash-lite | 0.0041 | 4.13 |
| deepseek-flash official (peak) | 0.0042 | 4.16 |
| gemini-3.5-flash-lite | 0.0058 | 5.79 |
| gemini-3.8-flash (now / from 2027-01-01) | 0.0115 / 0.0230 | 11.48 / 22.95 |
| gpt-6.1-terra | 0.0152 | 15.15 |
| claude-sonnet-5-5 | 0.0303 | 30.30 |

---

## Hard spending limits

| provider | mechanism | hard cap or alert? | source |
|---|---|---|---|
| Anthropic | Prepaid credits: "If you run out of credits, you can no longer call the API … until you add more" (auto-reload optional). Tier monthly spend cap (Start $500, Build $1,000, Scale $200,000) → requests paused, 429 `enforced_spend_limit_reached`. User-set org spend limit below tier cap on Billing page → 400 when reached. Workspace spend limits (not on default workspace). | **Hard** (credits, tier cap, user limit) | https://support.claude.com/en/articles/8977456-how-do-i-pay-for-my-claude-api-usage ; https://platform.claude.com/docs/en/api/rate-limits |
| OpenAI | Org and project "hard spend limit" → 429 `organization_spend_limit_exceeded` / `project_spend_limit_exceeded`; monthly. "Recorded spend can slightly exceed the configured amount." Spend alerts are notification-only. A community thread says project limits were notification-only in practice **[unverified: search, undated]**; third-party says hard limits added 2026-07-22 **[unverified: search]**. | **Hard (with small overshoot)** per current docs | https://developers.openai.com/api/docs/guides/spend-limits ; https://developers.openai.com/api/docs/guides/rate-limits |
| Google Gemini | (a) Prepay: $5 min, $5,000 max; at $0 "all API keys in all projects linked to that billing account will stop working". (b) Tier spend caps per billing account: Tier 1 $250/month, Tier 2 $2,000, Tier 3 $20k–$100k+ → service paused until the 1st. (c) Project spend cap: "Experimental … limited in scope", "overages for around a 10 minute latency period". (d) Spend-based rate limit Tier 1: $10 per rolling 10 min. | Prepay and tier caps **hard**; project cap **hard-ish, experimental, ~10 min lag** | https://aistudio.google.com/docs/billing ; https://aistudio.google.com/docs/rate-limits |
| OpenRouter | Prepaid balance → 402 at zero; optional per-key credit limit → 402. | **Hard** | https://openrouter.ai/docs/api-reference/limits |
| Vercel AI Gateway | Budgets (team/project/key/user) → 402, but **soft cap** (crossing request completes; activation lag). Prepaid credits. BYOK not counted. | **Soft cap** + prepaid | https://vercel.com/docs/ai-gateway/observability-and-spend/budgets |

## Rate limits at the entry tier

- **Anthropic**: tiers Evaluation (new orgs, "limits below the standard limits", unspecified) → Start → Build → Scale → Custom. Start tier: Haiku 5.5 / Sonnet 5.5 / Opus 5.5 each 4,000 RPM, 2,000,000 ITPM, 400,000 OTPM. Cache reads do NOT count toward ITPM. Qualification thresholds per tier (credit purchase amounts) are not on this page → not verified. https://platform.claude.com/docs/en/api/rate-limits
- **OpenAI**: tiers Free (allowed geography; $100/month usage limit), Build ($5 total credit purchases; $500/month), Launch ($100; $5,000/month), Grow ($500; $200,000/month). gpt-6-luna Build: 5,000 RPM, 2,000,000 TPM. gpt-6.1-terra Build: 5,000 RPM, 1,000,000 TPM. https://developers.openai.com/api/docs/guides/rate-limits ; model pages above.
- **Gemini**: Free (active project), Tier 1 (linked billing account), Tier 2 ($100 paid + 3 days), Tier 3 ($1,000 + 30 days). Per-model RPM/TPM/RPD are NOT on the docs page ("View your active rate limits in AI Studio") → **not verified**. Tier 1 batch enqueued tokens: 3.8 Flash 3M, 3.5 Flash-Lite 10M. https://aistudio.google.com/docs/rate-limits
- **OpenRouter**: paid models no platform-level request cap; free variants 20 RPM + 50 or 1,000/day. https://openrouter.ai/docs/api-reference/limits
- **Vercel AI Gateway**: free tier per-model limits lower than paid; numbers not checked (https://vercel.com/docs/ai-gateway/rate-limits not fetched).

## Data retention & training

| provider | training on API data | retention | source |
|---|---|---|---|
| Anthropic | "By default, we will not use your inputs or outputs from our commercial products" (API included); exceptions: feedback you submit, explicit opt-in. | "we automatically delete inputs and outputs on our backend within 30 days of receipt or generation", except Files API (your control), ZDR agreement, Usage Policy enforcement, law; flagged content up to 2 years. A third-party claim of 7 days **[unverified: search]**. | https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training ; https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data |
| OpenAI | "data sent to the OpenAI API is not used to train or improve OpenAI models" unless opt-in. | Abuse monitoring logs "retained for up to 30 days"; Responses API application state 30 days by default (`store`); ZDR requires approval. | https://developers.openai.com/api/docs/guides/your-data |
| Google Gemini | Paid: Google "doesn't use your prompts … or responses to improve our products". Free (Unpaid Services): "human reviewers may read, annotate, and process your API input and output" and content used "to provide, improve, and develop Google products and services and machine learning technologies". Pricing page row "Used to improve our products": free tier Yes / paid No. **EEA, Switzerland, UK: "You may use only Paid Services when making API Clients available to users"** there. | Abuse monitoring: "Google retains the following data for fifty-five (55) days". Optional project logs (paid) 7/14/28/55 days **[unverified: search — logs-policy page seen only in search]**; "new paid projects log by default" **[unverified: search]**. | https://aistudio.google.com/docs/terms ; https://aistudio.google.com/docs/usage-policies ; https://aistudio.google.com/docs/pricing |
| OpenRouter | Depends on routed provider; ZDR routing available. | Prompts/completions not logged by default (metadata is). | https://openrouter.ai/docs/faq ; https://openrouter.ai/docs/features/zdr |
| Vercel AI Gateway | ZDR / "disallow prompt training" filters available (paid credits or Pro). | Underlying provider terms apply ("subject to their terms listed on each model's page"). | https://vercel.com/docs/ai-gateway/pricing ; https://vercel.com/docs/ai-gateway |

## Free tiers

- **Gemini**: free tier on Flash / Flash-Lite / embeddings (not Gemini 4 Argon, not 3.1 Pro Preview); free-tier data used to improve products + human review; not allowed for apps serving EEA/CH/UK users. Google Cloud welcome credit "can't be used towards the Gemini API or AI Studio". https://aistudio.google.com/docs/pricing ; https://aistudio.google.com/docs/billing ; https://aistudio.google.com/docs/terms
- **OpenAI**: "Free" usage tier exists (allowed geography, $100/month usage limit) — what models/limits it includes not checked. https://developers.openai.com/api/docs/guides/rate-limits
- **Anthropic**: no free API tier found; prepaid credits (expire 1 year, non-refundable). Minimum purchase not stated on the official help page; "$5 minimum" only on a third-party doc **[unverified: search]**. https://support.claude.com/en/articles/8977456-how-do-i-pay-for-my-claude-api-usage
- **OpenRouter**: `:free` model variants (rate-limited). https://openrouter.ai/docs/api-reference/limits
- **Vercel AI Gateway**: monthly free credit on a model subset; amount **[unverified: search — "$5"]**.
- **Voyage (embeddings)**: 200M free tokens per model. https://www.mongodb.com/docs/voyageai/management/billing/

## Deprecation policy (date-stamped risk)

| provider | notice | current status of candidates | source |
|---|---|---|---|
| Anthropic | "at least 60 days' notice before model retirement for publicly released models" + published "not sooner than" dates | claude-haiku-5-5 active, not sooner than **2027-10-07**; sonnet-5-5 ≥ 2027-09-28; opus-5-5 ≥ 2027-09-22; haiku-4-5 ≥ 2026-10-15 (date passed, still Active); sonnet-4-5 retires 2026-11-30 | https://platform.claude.com/docs/en/about-claude/model-deprecations |
| OpenAI | GA models ≥ 6 months; specialized variants ≥ 3 months; previews can be ~2 weeks | gpt-5-mini & gpt-5-nano shut down **2026-12-11**; gpt-5.4-nano and gpt-5.1 shut down 2027-04-01; GPT-4o/4o-mini/4.1/4.1-mini shut down 2027-01-14; gpt-6-luna / gpt-6.1-terra not listed as deprecated | https://developers.openai.com/api/docs/deprecations |
| Google | No fixed period stated: "We will communicate the exact shutdown date to users with advance notice"; listed dates are "earliest possible dates" | gemini-3.1-flash-lite earliest shutdown 2027-05-07; 3.5-flash-lite / 3.6-flash / 3.8-flash none announced; gemini-embedding-001 2028-05-14; 2.5 Pro/Flash rerouted 2026-12-01 | https://aistudio.google.com/docs/deprecations ; https://aistudio.google.com/docs/models |
| OpenRouter / open weights | Router can drop providers anytime, but weights are public so another host can serve them; DeepSeek official API already retired `deepseek-v4-flash` name (aliased to V4.1) | — | https://api-docs.deepseek.com/quick_start/pricing |
| Vercel AI Gateway | Follows upstream providers (not checked) | — | — |

## Embeddings

| model | price $/1M tok | dims | max input | multilingual | source |
|---|---|---|---|---|---|
| OpenAI text-embedding-3-small | $0.02 | 1536 default | 8,192 | no MIRACL figure on current page (MTEB 62.3%) | https://developers.openai.com/api/docs/pricing ; https://developers.openai.com/api/docs/guides/embeddings |
| OpenAI text-embedding-3-large | $0.13 | 3072 default | 8,192 | MTEB 64.6% | same |
| Gemini gemini-embedding-2 | $0.20 (text) ; free tier available | 3072 default, 128–3072 (rec. 768/1536/3072) | 8,192 | "over 100 languages" | https://aistudio.google.com/docs/pricing ; https://aistudio.google.com/docs/embeddings |
| Gemini gemini-embedding-001 | $0.15 | 3072 default, 128–3072 | 2,048 | not stated | same |
| Voyage voyage-4-lite (Anthropic-recommended vendor; Anthropic has no own embedding model) | $0.02 (200M free) | 1024 default (256/512/2048) | 32,000 | voyage-4 / voyage-4-large described as "multilingual retrieval" | https://platform.claude.com/docs/en/build-with-claude/embeddings ; https://www.mongodb.com/docs/voyageai/management/billing/ |
| Voyage voyage-4 | $0.06 (200M free) | 1024 default | 32,000 | "general-purpose and multilingual retrieval" | same |
| Voyage voyage-4-large | $0.12 (200M free) | 1024 default | 32,000 | "best general-purpose and multilingual retrieval quality" | same |

## Usage-policy clauses on religion

- Anthropic Usage Policy: mentions religion only as a protected attribute (no discrimination "on the basis of … religion") and bars biometric inference of "religious or philosophical beliefs". No restriction on religious/theological content. https://www.anthropic.com/legal/aup
- Google Gemini API Additional Terms: no mention of religion found. https://aistudio.google.com/docs/terms
- OpenAI usage policies: page returned 403 → **not checked**.

## Unverified / could not check

1. Anthropic minimum credit purchase (official help page names no minimum; "$5" only on a third-party doc) and the credit amounts that qualify for Start/Build/Scale tiers.
2. Anthropic "Evaluation tier" actual limits (page says only "below the standard limits").
3. Vercel AI Gateway monthly free credit amount ("$5" only in search snippets/community posts; not on current official pages) and free-tier rate limits.
4. OpenRouter card fee minimum $0.80 / crypto 5% (blog post seen only in search).
5. OpenAI hard spend limits actually blocking at project level (docs say yes; one undated community thread says notification-only).
6. Gemini per-model RPM/TPM/RPD for Free and Tier 1 (docs point to AI Studio console).
7. Gemini paid-project request logging default and 7/14/28/55-day options (search only).
8. OpenAI usage-policy text on religion (403); openai.com/api/pricing (403) — used developers.openai.com instead.
9. Structured-output support flags for gpt-6.1-sol / gpt-6-astra / gemini-3.6-flash / gemini-3.1-flash-lite not checked on their model pages.
10. Per-provider structured-output/tool support for each OpenRouter endpoint (only model-level flags checked); whether DeepSeek V4 Flash is permissively licensed (only the HF id was seen).
11. DeepSeek official API data location / training terms; Mistral per-model prices; Groq and Cerebras direct pricing.
12. Spanish-quality evidence for OpenAI, Gemini and open models (only Anthropic publishes a per-language table; none found for others).
13. Anthropic third-party claim of 7-day API log retention (official page says 30 days).

---

## Platform (added on coordinator request, fetched 2026-11-06)

### Vercel Hobby
- Function max duration (Fluid compute, Node/Bun/Python): **Hobby 300s default and 300s max** (Pro: 300s default, 800s max, 1800s beta). Memory Hobby 2 GB / 1 vCPU. Request/response body max 4.5 MB. Concurrency auto-scales up to 30,000. Edge runtime: must start responding within 25s, stream up to 300s. https://vercel.com/docs/functions/limitations
- Included per month on Hobby: Function Invocations first 1,000,000; Active CPU 4 CPU-hrs; Provisioned Memory 360 GB-hrs; Fast Origin Transfer first 10 GB; Fast Data Transfer first 100 GB; CDN Requests first 1,000,000. https://vercel.com/docs/plans/hobby (also https://vercel.com/docs/limits/fair-use-guidelines)
- Note (limitations page): "Waiting for I/O (e.g. calling AI models, database queries) does not count towards active CPU time"; provisioned memory = memory × instance running time (so long streamed LLM calls consume GB-hrs, not CPU-hrs).
- Exceeding on Hobby: "In most cases, if you exceed your usage limits on the Hobby plan, you will have to wait until 30 days have passed before you can use the feature again." No spend management on Hobby ("Spend Management: N/A"). https://vercel.com/docs/plans/hobby
- Non-commercial term: "Hobby teams are restricted to non-commercial personal use only." Commercial = deployment used "for the purpose of financial gain of anyone involved in any part of the production", e.g. requesting/processing payment from visitors, advertising a product/service, being paid to build/host the site, affiliate-primary sites, ads (AdSense). "Asking for Donations does not fall under commercial usage." https://vercel.com/docs/limits/fair-use-guidelines
- Hobby WAF: up to 3 custom rules, up to 10 IP blocks; DDoS mitigation on; Attack Mode optional. https://vercel.com/docs/plans/hobby

### Vercel BotID
- "BotID is available on all plans." Basic: "provided free of charge for all plans". Deep Analysis (Kasada): **Pro only**, $1 per 1,000 `checkBotId()` Deep Analysis calls; Enterprise custom. Not available on Hobby. https://vercel.com/docs/botid

### Vercel WAF rate limiting
- "WAF Rate Limiting is available on all plans." Hobby: **1 rate-limit rule per project** (counts within the 3 custom rules), keys IP or JA4 digest, fixed window 10s–10min, **1,000,000 allowed requests included**. Pro: 40 rules/project, usage-based (regional price). Counters are per region ("traffic … in multiple regions can exceed the limit"). Actions: 429 default, Log, Deny, Challenge. https://vercel.com/docs/vercel-firewall/vercel-waf/rate-limiting
- Over-1M behaviour on Hobby not stated on that page → not verified.

### Cloudflare Turnstile
- Free: up to 20 widgets/account, 10 hostnames per widget, "Unlimited challenges (traffic or verification requests)"; analytics 7-day lookback. Enterprise: unlimited widgets, 200 hostnames, any-hostname widget, 30-day analytics, ephemeral IDs, off-label branding. https://developers.cloudflare.com/turnstile/plans/
- Cloudflare DNS / proxy not required: "Turnstile can be used independently without requiring other Cloudflare services." (So a DNS-only Cloudflare domain, or no Cloudflare DNS at all, works.) Same URL.
- Server validation: `POST https://challenges.cloudflare.com/turnstile/v0/siteverify` with `secret` + `response` (optional `remoteip`, `idempotency_key`); token valid 300s; single-use; no siteverify rate limit stated. https://developers.cloudflare.com/turnstile/get-started/server-side-validation/
- Data: processes "client IP address, TLS Fingerprint, User-Agent Header and Sitekey and associated origin"; used "solely to protect web properties…" and "to refine and improve our bot detection algorithms"; not to "identify, profile or target any individuals"; Cloudflare = processor for bot detection, controller for improving Turnstile. Last updated June 18, 2025. https://www.cloudflare.com/turnstile-privacy-policy/
- "No persistent tracking cookies" claim: **[unverified: search]** (third-party only).

### Upstash Redis (counter store alternative)
- Free: 500K commands/month, 250 MB data, 10 GB bandwidth/month, 1 database, 10 MB max request. Pay-as-you-go $0.20 per 100K commands. Behaviour when the free quota is exceeded not stated on the page → not verified. https://upstash.com/pricing/redis

### Supabase Free
- 500 MB database per project; 5 GB egress + 5 GB cached egress; 1 GB file storage; 50,000 MAU; 500,000 Edge Function invocations; 2 active projects; "Unlimited API requests"; "Free projects are paused after 1 week of inactivity." https://supabase.com/pricing
- Exceeding quota: notification, then grace period, then possible restrictions: "Pausing projects", "Switching databases to read-only mode", "Disabling new project launches/transfers", API requests answered with "402 status code"; no new grace period on repeat. Lifts at next billing cycle or on upgrade to Pro. https://supabase.com/docs/guides/platform/billing-faq

### Platform — unverified
- Vercel WAF rate-limit behaviour beyond the 1M included allowed requests on Hobby.
- Vercel `/docs/limits` page itself not fetched (numbers taken from /docs/plans/hobby and fair-use page, which agree).
- Upstash Free over-quota behaviour.
- Turnstile cookie behaviour.
