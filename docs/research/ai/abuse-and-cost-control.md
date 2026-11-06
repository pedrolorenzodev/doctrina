# Abuse and cost control

Written 2026-11-06 («AI plan» session). Pedro's decisions: anyone with the link may use it; initial budget 5 USD with a hard cap; per-IP and per-day limits, a bot check, a global daily budget that switches the feature off with a clear message, a kill switch (`real-ai-plan-notes-2026-11-05.md` §1.2–1.3). Prices and platform facts: `provider-and-models.md` (verified 2026-11-06). Names, codes and messages: `contracts.md`.

## 1. Layers, from the outside in
| # | Layer | Where | Stops | Cost |
|---|---|---|---|---|
| 1 | **Vercel WAF rate-limit rule** (Hobby allows one): path prefix `/api/ai/`, 30 requests per 60 s per IP, action 429 | Vercel dashboard (Pedro) | floods, before any function runs | free (1 M allowed requests included) |
| 2 | **Same-origin check + body caps** | route handlers | cross-site use of the endpoints, giant bodies | free |
| 3 | **Bot check: Vercel BotID Basic** on `POST /api/ai/ask` and `POST /api/ai/simplify` (invisible, no widget) | `botid` package, `src/instrumentation-client.ts`, `checkBotId()` in the guard | headless scripts and simple bots | free on all plans |
| 4 | **Per-visitor and per-IP daily quotas** (atomic counters in Supabase) | `ai_take` SQL function | one person or one script spending the budget | ~5–10 ms per request |
| 5 | **Global daily and monthly budget** with reservation (reserve before the call, settle after) | `ai_reserve` / `ai_settle` SQL functions | spend above the cap, even under concurrency | ~5–10 ms |
| 6 | **Kill switch** | `ai_settings.enabled` row (instant) and `AI_ENABLED` env (hard, needs a redeploy) | everything, at once | — |
| 7 | **Provider hard limit** | Anthropic prepaid credits (the API stops at zero) + a monthly limit on the Billing page, auto-reload off | anything the app gets wrong | — |

**Bot check choice (agent's call, decision 3 in the README).** Pedro named Turnstile as an example. Recommended instead: **BotID Basic**, because it is invisible (no widget to place: Turnstile's interactive challenge would need a place in the drawer and in the simplifier, which is new UI and would need a proposal), free, native to the host, and needs no second account. Its limits: it works only on Vercel (locally `checkBotId()` returns «not a bot»), and Basic is weaker than Deep Analysis (Pro only). Turnstile stays the second layer to add if the logs show abuse that BotID lets through; its widget placement would then go through a proposal. Both are verified free (`provider-and-models.md` §3).

## 2. Quotas (initial values; all in environment variables so Pedro can change them without code)
| Counter | Key | Limit | Env |
|---|---|---|---|
| Chat answers that call the model | visitor id | 12 per day | `AI_CHAT_PER_VISITOR_DAY` |
| Chat answers that call the model | IP hash | 40 per day | `AI_CHAT_PER_IP_DAY` |
| Chat burst | IP hash | 4 per minute | `AI_CHAT_PER_IP_MINUTE` |
| Simplifications that call the model | visitor id | 40 per day | `AI_SIMPLIFY_PER_VISITOR_DAY` |
| Simplifications that call the model | IP hash | 120 per day | `AI_SIMPLIFY_PER_IP_DAY` |
| Cached reads (answers, simplifications, `cacheOnly`) | IP hash | 400 per day | `AI_CACHED_PER_IP_DAY` |
| Global model spend | day (Buenos Aires) | **$0.25** | `AI_DAILY_BUDGET_USD` |
| Global model spend | month | **$4.00** (the remaining $1 of the first $5 is margin for the evaluation runs and rounding) | `AI_MONTHLY_BUDGET_USD` |

At Haiku prices $0.25 a day ≈ 60–90 chat answers or ≈ 250–350 simplifications [estimate]. The day rolls at 00:00 America/Argentina/Buenos_Aires.

**Visitor id.** After the first request passes BotID, the server sets `doctrina_ai` = `<random 128-bit id>.<HMAC>` (HttpOnly, Secure, SameSite=Lax, 30 days, signed with `AI_COOKIE_SECRET`). Limits apply to the visitor id **and** to the IP hash; the IP limit is three times higher because one IP is often many people.

**Why not IP alone (the shared-network risk).** Argentine mobile carriers and universities put many users behind one address (carrier-grade NAT) [inference; common practice, not measured here]; an IP-only limit of 12 would lock out a whole classroom. The cookie identifies the browser; clearing it gives a new identity, so the IP ceiling and the global budget remain the real backstop.

**IP hash.** `HMAC-SHA256(ip, AI_IP_SALT || date)`: rotates daily, cannot be reversed without the salt, stored only in the counters table and deleted after two days. The IP is read from the platform's forwarded header (`x-forwarded-for` first entry, set by Vercel); the builder confirms the header on the first preview.

## 3. Where the counters live (compared)
| Option | Atomic | Durable | Free | Latency from `gru1` | Verdict |
|---|---|---|---|---|---|
| **Supabase table + SQL function** (`insert … on conflict do update … returning`) | yes | yes | yes (counts toward 500 MB: negligible) | a few ms in region (`sa-east-1`, the backend doc measured 68–112 ms from Buenos Aires to it; from São Paulo it should be single-digit, to confirm) | **chosen**: no new account, same place as the caches and logs |
| Vercel Runtime Cache | no (get-then-set races) | no (ephemeral, per region) | yes | ~1 ms | no: not a counter |
| Upstash Redis (free: 500 K commands/month, 250 MB) | yes (`INCR`) | yes | yes | low | good, but a third account and key; keep as the fallback if Supabase latency hurts |
| Vercel WAF rate limit | — | per region | 1 rule on Hobby | edge | used as layer 1 only (one rule, no per-day windows) |

The SQL (`ai_take`, `ai_reserve`, `ai_settle`) is in `migrations/20261106100200_ai_usage.sql`; all are `security definer`, `set search_path = ''`, executable only by `service_role`.

## 4. Budget reservation (no overshoot under concurrency)
1. Before a model call: `ai_reserve(p_day, p_month, p_estimate_micros, p_daily_cap, p_monthly_cap)` adds the **pessimistic** estimate to today's and this month's `reserved_micros` in one statement and returns `false` if either total would pass its cap. Estimates: chat answer `6,000` micro-dollars ($0.006, the bound from `max_tokens`), simplification `1,500`, judge `2,000`.
2. After the call: `ai_settle(…, p_reserved, p_actual)` moves the reservation to `spent_micros` with the real cost computed from the response's `usage` and `src/lib/ai/prices.ts`.
3. A crash between the two leaves a reservation: it is over-counted (safe side) and cleared by the daily roll.
4. When the reservation fails: the feature answers `ai_budget_exhausted` (§6) until the next day (daily) or month (monthly), and an alert fires (§5).

## 5. Alerts and the kill switch
- **Alerts:** optional `AI_ALERT_WEBHOOK` (a Discord or Slack incoming-webhook URL; free). The server posts once when daily spend passes 50 % and 100 %, monthly 80 % and 100 %, and when the verification failure rate of the day passes 20 % (a model or prompt problem). Sent in `after()` so the request is not delayed; de-duplicated by a `last_alert` column. Without the webhook, `node tools/ai-usage-report.mjs` prints today's and the month's spend, counts, failures and top error codes.
- **Kill switch, instant:** in the Supabase SQL editor, `update public.ai_settings set enabled = false where id = 1;` (or per feature: `chat_enabled`, `simplify_enabled`). The server reads the row with a 30-second in-memory cache. **Hard:** `AI_ENABLED=off` in Vercel's environment and a redeploy; also the state with no `ANTHROPIC_API_KEY`.
- **What the reader sees when off:** the chat's typed questions answer with the «switched off» text; the suggestion chips keep their scripted answers; the simplifier opens its panel with the same message; cached answers and simplifications are still served (they cost nothing).

## 6. Behaviour at the limit (what the user sees; texts in `contracts.md` §7)
| Code | HTTP | Chat (drawer, `plain` answer) | Simplifier (panel text) |
|---|---|---|---|
| `ai_rate_limited` (burst) | 429 | «Hiciste varias preguntas seguidas. Esperá un minuto y volvé a intentar.» | «Pediste varias simplificaciones seguidas. Esperá un minuto.» |
| `ai_daily_limit` (visitor or IP) | 429 | «Llegaste al límite de preguntas de hoy. Mañana podés seguir; las preguntas sugeridas siguen funcionando.» | «Llegaste al límite de simplificaciones de hoy.» |
| `ai_budget_exhausted` | 503 | «La IA está pausada por hoy porque se usó todo el presupuesto del día. Las preguntas sugeridas siguen funcionando.» | «La simplificación está pausada por hoy.» |
| `ai_disabled` | 503 | «La IA está apagada por ahora. Las preguntas sugeridas siguen funcionando.» | «La simplificación está apagada por ahora.» |
| `ai_bot_check_failed` | 403 | «No pudimos comprobar que la pregunta viene de una persona. Recargá la página y probá de nuevo.» | same idea |
English texts in `contracts.md`. The retry button appears only for `ai_rate_limited` and network errors.

## 7. Bot and scraping defence beyond the quotas
- `POST` only for anything that may call the model; `GET` only for cache reads (`cacheOnly=1`), never generating.
- Responses `Cache-Control: private, no-store`.
- Question ≤ 600 characters, history ≤ 1,500, notes ≤ 4,000, body ≤ 16 KB; addresses validated against the loaders (unknown → 404, not a model call).
- The answer cache makes repeated identical questions free; the simplification cache does the same per paragraph; a scraper walking every paragraph hits the per-IP cached-read limit and then the global budget.
- The site's public repo shows the prompts: accepted (they are not secrets; the protections are code).

## 8. Cost of the evaluation set (from the same 5 USD)
- One full run on Haiku (82 questions: plan + answer, ≈ 10 % repairs, + one judge call each) ≈ **$0.25–0.40** [estimate].
- One comparison of the answer step on Sonnet 5.5 for 20 questions ≈ **$1.00–1.50**.
- Reruns after code-only changes: **$0** with recorded responses (`AI_PROVIDER=replay`).
- Plan for the first 5 USD: two Haiku runs + one Sonnet subset ≤ **$2**, the rest (≥ $3) for real users ≈ 700–1,000 answers. Evaluation spend goes through the same `ai_reserve` (role `eval`) so it can never eat the users' day unnoticed.
