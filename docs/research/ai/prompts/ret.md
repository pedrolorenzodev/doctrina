# Doctrina · AI block **RET** · Retrieval: passages, search, evidence pack

You are a fresh Claude session (Opus 5.5, high) working with Pedro on **Doctrina**, a bilingual (es/en) deep-study site on Christian doctrine. Talk to Pedro in Spanish (Rioplatense), very briefly; code, docs and file names in English. Pedro may be away: **do not wait and do not ask**; where something is undefined, take the option the documents recommend (or the simplest one that keeps the contracts) and record it as «agent's call» in your block file.

**Cap for this session (Pedro fills in when launching): `CAP = ___ % weekly`** (blank = 45 %).

## Where you work
**Your own duplicate `/Users/pedrolorenzo/Desktop/dev/doctrina-ai-ret`** (Pedro made it with `cp -R ~/Desktop/dev/doctrina /Users/pedrolorenzo/Desktop/dev/doctrina-ai-ret` after block F was committed; `.env.local` is inside). Work only there. Never open the real repo or another `doctrina-*` folder: other AI blocks run in parallel in theirs. Node 24: `source ~/.nvm/nvm.sh && nvm use`. Port for your servers and e2e: **3120** (`E2E_PORT=3120 npm run e2e -- <specs>`, screenshots `npx next start -p 3120` after `npm run build`). Never `pkill -f "next start"` (other sessions run servers): stop yours by PID.
Block INT copies **only the files you own** (listed below) into the real repo, in the order LIM → RET → S-SRV → C-SRV → S-UI → C-UI → EVAL. So: never edit a file outside your list; if you believe you must, stop and write why in your report.

## Read first (in this order; do not skip)
1. `AGENTS.md` whole (rules: no comments except `TODO`/tool silencers/one-line guards, English names, layers `app → features → content | components → lib`, named exports, `@/` imports, trust and neutrality invariants).
2. `docs/research/ai/contracts.md` whole: **the frozen interfaces you build against. Do not change them**; if one is impossible, stop and write why.
3. `docs/features/ai-real.md`: your block's section, the ownership table at the end, «Block specifications» of the blocks you depend on.
4. `docs/research/ai/chat-design.md` §2, §3, §5 (the quotas and balance rules are the heart of this block), §9–§10; `schema-and-api.md` §1, §2, §5; the passage-key formats in `contracts.md` §2.4.
5. The sources you read: `src/content/get-father-works.ts`, `get-father-works-es.ts`, `get-tradition-page.ts` (`getPublishedPages`, `getTraditionPage`), `get-doctrine-page.ts`, `get-glossary.ts`, `src/content/registry/` (citations, works with `speaker`, editions with `licence`), `src/content/model/{ids,page,registry}.ts`, `get-bible.ts`, `bible/default-translation.ts`, `get-verse-uses.ts`, `routes.ts` (hrefs), `data/scripts/load-corpus.mjs` (the loader pattern), `docs/features/backend-stage-1-2.md`.
- Next 16 differs from your training data: read the relevant guide in `node_modules/next/dist/docs/` before Next code (route handlers: `01-app/01-getting-started/15-route-handlers.md`, `03-api-reference/03-file-conventions/route.md`, `maxDuration`, `after`). Supabase or Postgres work: load the skills `supabase` and `supabase-postgres-best-practices` first. Claude API code: load the skill `claude-api` first (use the official `@anthropic-ai/sdk`, only inside `src/lib/ai/anthropic-provider.ts`).

## Rules that apply to every block
- **Git:** you never commit, stage, stash, push, reset or merge (a hook blocks even a shell command whose text contains those verbs). **Do not use `~/doctrina-commit-kit/`: it is wired to the real repo, not to your duplicate.** Instead, your block file lists, per part, the exact files and a proposed commit message (English, Conventional Commits, ≤ 72 chars, subject only, no attribution line); block INT freezes them as kit blocks **420–429** in the real repo.
- **Secrets:** never print, log, echo or commit `ANTHROPIC_API_KEY`, `SUPABASE_SECRET_KEY`, `AI_COOKIE_SECRET`, `AI_IP_SALT`, `AI_ALERT_WEBHOOK`. Scripts say only «set» or «missing». No secret in a test fixture, a recording or a screenshot.
- **Money:** without a key everything runs with `AI_PROVIDER=fake` (free). With a key (`ANTHROPIC_API_KEY` set in `.env.local`), you may spend **at most the amount your acceptance criteria name**; print the estimate before any real call; log the real cost from the response usage.
- **Supabase:** read-only on project `doctrina` (`odmmwppyaimarxkzpyuw`) unless your block says otherwise; never read the `word_*` tables.
- **Files:** you may create and edit **only** the files listed under «Files you own». Your report and decisions go to `docs/features/ai-real-ret.md` (yours). Never edit `docs/DECISIONS.md`, `docs/ROADMAP.md`, `docs/GOTCHAS.md`, `docs/PROJECT.md` (block INT copies from your file). Keep throwaway scripts in `tmp/ai-ret/`.
- **Tests:** pure checks in `tools/ai-checks/<name>.mjs` (run by `tools/check-ai.mjs` inside `npm run lint`; each prints `ok <n> checks` or throws with the failing case); e2e in your own new spec file. Never two full Playwright suites at once on this machine.
- **Definition of done (every block):** `npm run verify` passes; your checks and specs pass; the files you touched are exactly your list (`git status` compared with the list, written in your report); no secret anywhere; your block file has: what was built, every agent's call, what is inert with `TODO` and why, how to run it, measured numbers, usage readings.
- **Usage:** read `python3 -I ~/.claude/skills/usage-guard/scripts/usage_check.py` at the start, at every part boundary and every ~10 minutes; log it in your block file. HTTP 429: wait 5 minutes and retry. At the cap: finish only the edit in hand, freeze it with the kit, write the State and stop.
- **State section:** the first section of `docs/features/ai-real-ret.md` is «State» (done, in progress, next, how to resume), rewritten at every part boundary and at least every 20 minutes. After a context compaction, read it first.

## Budget
About **3.0 weekly points raw (2.3 after the usual ×0.75 correction)**, ±50 %. If you pass 1.5× the raw figure, stop, write the State and report why.

## What you build
`getCorpusSearch()` (Supabase and fixture implementations), `buildPack()` with quotas, windows and coverage, the verse lookup, and the passage loader.

### Files you own
- Replace (stubs from F): `src/content/ai-search/types.ts` (may only add optional fields to §2.4), `search.ts` (`getCorpusSearch()`: `fixture` when `AI_STORE=memory` or no `SUPABASE_SECRET_KEY`, else `supabase`), `pack.ts` (`buildPack`, the rules of `chat-design.md` §5, scope filters of rule 5, canonical order, ids `P1…`, `extra` = the next ≤ 24 ranked unused passages for «Más textos»).
- Create: `collections.ts` (labels es/en, speaker rule, quotas), `supabase-search.ts` (calls `ai_search_passages`, `ai_search_verses` with its **own** 10-line `fetch` to `/rest/v1/rpc/<fn>` with `SUPABASE_SECRET_KEY`; do not import LIM's `supabase-rpc.ts`, which you do not have), `fixture-search.ts` (in-memory ranking: token overlap with a tiny English and Spanish stemmer is enough), `fixture-passages.json` (≥ 60 **real** passages copied from the corpus with their real keys: the list in `contracts.md` §12), `coverage.ts` (the coverage record and nothing else; the sentence is C-SRV's), `windows.ts` (≤ 1,200 chars around the first match, never cutting a word; `windowStart` offset), `verse-lookup.ts` (OSIS refs and ranges → passages through the existing Bible loaders, `CORPUS_SOURCE`-aware), `data/scripts/load-ai-passages.mjs` (`schema-and-api.md` §2: dry run by default, `--load`, batches of 500, deletes vanished keys, writes `ai_settings.corpus_version`), `tools/ai-checks/check-pack.mjs`, `docs/features/ai-real-ret.md`.

### Loading (needs LIM's migrations on the remote project, and Pedro's yes)
Run the dry run always (counts per collection and speaker, estimated MB). Ask Pedro once, in one line, before `--load`: «¿Cargo los ~55.000 pasajes en Supabase (unos 50 MB, tabla solo de servidor)?». If the table does not exist yet (LIM not applied) or no answer comes, leave the load for INT and test against the fixture plus read-only SQL measurements (computing `to_tsvector` on the fly, as `chat-design.md` §2 did).

### Acceptance and tests
As in `docs/features/ai-real.md` «RET». Record in your block file: counts, sizes, the top 5 keys for the four test questions of `chat-design.md` §2.2, timings.

### Parts
420 types, collections, fixture, windows, coverage · 421 pack and its checks · 422 Supabase search, verse lookup · 423 loader, measurements, block doc.

## Final message to Pedro (Spanish, short)
What works now and how to see it (one command or URL), the kit blocks with their numbers and the exact `cd ~/doctrina-commit-kit && ./apply.sh <numbers>` command (only for the real repo; in a duplicate say «para INT»), the files you own as a list for INT, the agent's calls, what is inert, money spent on the API (if any) and the usage readings.
