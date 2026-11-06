# Doctrina · AI block **S-SRV** · Simplifier server

You are a fresh Claude session (Opus 5.5, high) working with Pedro on **Doctrina**, a bilingual (es/en) deep-study site on Christian doctrine. Talk to Pedro in Spanish (Rioplatense), very briefly; code, docs and file names in English. Pedro may be away: **do not wait and do not ask**; where something is undefined, take the option the documents recommend (or the simplest one that keeps the contracts) and record it as «agent's call» in your block file.

**Cap for this session (Pedro fills in when launching): `CAP = ___ % weekly`** (blank = 45 %).

## Where you work
**Your own duplicate `/Users/pedrolorenzo/Desktop/dev/doctrina-ai-ssrv`** (Pedro made it with `cp -R ~/Desktop/dev/doctrina /Users/pedrolorenzo/Desktop/dev/doctrina-ai-ssrv` after block F was committed; `.env.local` is inside). Work only there. Never open the real repo or another `doctrina-*` folder: other AI blocks run in parallel in theirs. Node 24: `source ~/.nvm/nvm.sh && nvm use`. Port for your servers and e2e: **3130** (`E2E_PORT=3130 npm run e2e -- <specs>`, screenshots `npx next start -p 3130` after `npm run build`). Never `pkill -f "next start"` (other sessions run servers): stop yours by PID.
Block INT copies **only the files you own** (listed below) into the real repo, in the order LIM → RET → S-SRV → C-SRV → S-UI → C-UI → EVAL. So: never edit a file outside your list; if you believe you must, stop and write why in your report.

## Read first (in this order; do not skip)
1. `AGENTS.md` whole (rules: no comments except `TODO`/tool silencers/one-line guards, English names, layers `app → features → content | components → lib`, named exports, `@/` imports, trust and neutrality invariants).
2. `docs/research/ai/contracts.md` whole: **the frozen interfaces you build against. Do not change them**; if one is impossible, stop and write why.
3. `docs/features/ai-real.md`: your block's section, the ownership table at the end, «Block specifications» of the blocks you depend on.
4. `docs/research/ai/simplifier-design.md` whole (the contract, the prompt texts, the checks, the cache key, the hard cases); `abuse-and-cost-control.md` §2 and §6; `schema-and-api.md` §3.
5. The resolvers you call: `src/content/get-father-works.ts` (`getFatherWork`), `get-father-works-es.ts`, `get-tradition-page.ts`, `get-doctrine-page.ts`, `get-glossary.ts`, the Rich-text parser the pages use (`src/content/parse-label.ts` and the inline-reference parser named in DECISIONS «B2a»; find it with `npm run components` / grep), `src/content/simplified-texts.ts` (the mock entries, keyed by `addressId`).
- Next 16 differs from your training data: read the relevant guide in `node_modules/next/dist/docs/` before Next code (route handlers: `01-app/01-getting-started/15-route-handlers.md`, `03-api-reference/03-file-conventions/route.md`, `maxDuration`, `after`). Supabase or Postgres work: load the skills `supabase` and `supabase-postgres-best-practices` first. Claude API code: load the skill `claude-api` first (use the official `@anthropic-ai/sdk`, only inside `src/lib/ai/anthropic-provider.ts`).

## Rules that apply to every block
- **Git:** you never commit, stage, stash, push, reset or merge (a hook blocks even a shell command whose text contains those verbs). **Do not use `~/doctrina-commit-kit/`: it is wired to the real repo, not to your duplicate.** Instead, your block file lists, per part, the exact files and a proposed commit message (English, Conventional Commits, ≤ 72 chars, subject only, no attribution line); block INT freezes them as kit blocks **430–439** in the real repo.
- **Secrets:** never print, log, echo or commit `ANTHROPIC_API_KEY`, `SUPABASE_SECRET_KEY`, `AI_COOKIE_SECRET`, `AI_IP_SALT`, `AI_ALERT_WEBHOOK`. Scripts say only «set» or «missing». No secret in a test fixture, a recording or a screenshot.
- **Money:** without a key everything runs with `AI_PROVIDER=fake` (free). With a key (`ANTHROPIC_API_KEY` set in `.env.local`), you may spend **at most the amount your acceptance criteria name**; print the estimate before any real call; log the real cost from the response usage.
- **Supabase:** read-only on project `doctrina` (`odmmwppyaimarxkzpyuw`) unless your block says otherwise; never read the `word_*` tables.
- **Files:** you may create and edit **only** the files listed under «Files you own». Your report and decisions go to `docs/features/ai-real-ssrv.md` (yours). Never edit `docs/DECISIONS.md`, `docs/ROADMAP.md`, `docs/GOTCHAS.md`, `docs/PROJECT.md` (block INT copies from your file). Keep throwaway scripts in `tmp/ai-ssrv/`.
- **Tests:** pure checks in `tools/ai-checks/<name>.mjs` (run by `tools/check-ai.mjs` inside `npm run lint`; each prints `ok <n> checks` or throws with the failing case); e2e in your own new spec file. Never two full Playwright suites at once on this machine.
- **Definition of done (every block):** `npm run verify` passes; your checks and specs pass; the files you touched are exactly your list (`git status` compared with the list, written in your report); no secret anywhere; your block file has: what was built, every agent's call, what is inert with `TODO` and why, how to run it, measured numbers, usage readings.
- **Usage:** read `python3 -I ~/.claude/skills/usage-guard/scripts/usage_check.py` at the start, at every part boundary and every ~10 minutes; log it in your block file. HTTP 429: wait 5 minutes and retry. At the cap: finish only the edit in hand, freeze it with the kit, write the State and stop.
- **State section:** the first section of `docs/features/ai-real-ssrv.md` is «State» (done, in progress, next, how to resume), rewritten at every part boundary and at least every 20 minutes. After a context compaction, read it first.

## Budget
About **2.0 weekly points raw (1.5 after the usual ×0.75 correction)**, ±50 %. If you pass 1.5× the raw figure, stop, write the State and report why.

## What you build
`POST /api/ai/simplify` and the cache-only `GET`, per `contracts.md` §5, with the prompt, sentence alignment, checks and cache of `simplifier-design.md`.

### Files you own
- Replace (stub from F): `src/app/api/ai/simplify/route.ts` (thin: parse, call `simplifyParagraph`, map `AiError` to `aiErrorBody(code, locale, "simplify")` and its status, append the guard cookie; `export const maxDuration = 30`; GET with `cacheOnly=1` never generates).
- Create: `src/content/ai-simplify/resolve-address.ts` (address → `{ text, sourceLang, editionId, speaker, simplifiable }` through the getters; Bible and unknown kinds refused; AI-translated Father editions refused in v1; `canSimplify`), `cache.ts` (keys of §10, `getAiStore()` read/write, `rejected` never served), `seed-fixtures.ts` (with `AI_PROVIDER=fake`, the store is seeded once from `simplified-texts.ts` by `addressId`, so the approved test paragraphs return their reviewed mock texts); `src/features/simplify/simplify.ts` (guard kind `cached` for hits, `simplify` for misses with `ESTIMATE_MICROS.simplify`; one model call, role `simplify`, both levels; checks; one regeneration with the failures listed; store; log `ai_requests`; settle), `prompt.ts` (the English canonical prompt of `simplifier-design.md` §4 verbatim, the user message format: numbered sentences, speaker, output language), `checks.ts` (the 7 checks of §5 with the lexicon of `contracts.md` §6); `tools/ai-pregenerate-simplifications.mjs` (`simplifier-design.md` §8; `--dry-run` default prints the list and the estimate; Batch API only with `--run` and a key; `--max-usd` default 0.20), `tools/ai-review-simplifications.mjs` (writes `tmp/ai-review/index.html`; `--approve`/`--reject`), `tools/ai-checks/check-simplify.mjs` (alignment, the 8 bad outputs of the acceptance, the key format), `docs/features/ai-real-ssrv.md`.

### Acceptance and tests
As in `docs/features/ai-real.md` «S-SRV». Real calls only with a key, ≤ $0.01 total, the estimate printed first.

### Parts
430 resolver, cache, seed · 431 prompt, call, checks, route · 432 tools, checks file, block doc.

## Final message to Pedro (Spanish, short)
What works now and how to see it (one command or URL), the kit blocks with their numbers and the exact `cd ~/doctrina-commit-kit && ./apply.sh <numbers>` command (only for the real repo; in a duplicate say «para INT»), the files you own as a list for INT, the agent's calls, what is inert, money spent on the API (if any) and the usage readings.
