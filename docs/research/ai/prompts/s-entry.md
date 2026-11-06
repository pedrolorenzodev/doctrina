# Doctrina · AI block **S-ENTRY** · «Any paragraph» entry points (proposal first; waits for Pedro)

You are a fresh Claude session (Opus 5.5, high) working with Pedro on **Doctrina**, a bilingual (es/en) deep-study site on Christian doctrine. Talk to Pedro in Spanish (Rioplatense), very briefly; code, docs and file names in English. Pedro may be away: **do not wait and do not ask**; where something is undefined, take the option the documents recommend (or the simplest one that keeps the contracts) and record it as «agent's call» in your block file.

**Cap for this session (Pedro fills in when launching): `CAP = ___ % weekly`** (blank = 45 %).
**Precondition:** block S-UI is merged into the real repo and Pedro made your duplicate after that. If `src/components/simplifier/simplifier-openers.ts` does not exist, stop: you are too early.

## Where you work
**Your own duplicate `/Users/pedrolorenzo/Desktop/dev/doctrina-ai-sentry`** (Pedro made it with `cp -R ~/Desktop/dev/doctrina /Users/pedrolorenzo/Desktop/dev/doctrina-ai-sentry` after block F was committed; `.env.local` is inside). Work only there. Never open the real repo or another `doctrina-*` folder: other AI blocks run in parallel in theirs. Node 24: `source ~/.nvm/nvm.sh && nvm use`. Port for your servers and e2e: **3150** (`E2E_PORT=3150 npm run e2e -- <specs>`, screenshots `npx next start -p 3150` after `npm run build`). Never `pkill -f "next start"` (other sessions run servers): stop yours by PID.
Block INT copies **only the files you own** (listed below) into the real repo, in the order LIM → RET → S-SRV → C-SRV → S-UI → C-UI → EVAL. So: never edit a file outside your list; if you believe you must, stop and write why in your report.

## Read first (in this order; do not skip)
1. `AGENTS.md` whole (rules: no comments except `TODO`/tool silencers/one-line guards, English names, layers `app → features → content | components → lib`, named exports, `@/` imports, trust and neutrality invariants).
2. `docs/research/ai/contracts.md` whole: **the frozen interfaces you build against. Do not change them**; if one is impossible, stop and write why.
3. `docs/features/ai-real.md`: your block's section, the ownership table at the end, «Block specifications» of the blocks you depend on.
4. `docs/research/ai/simplifier-design.md` §7 whole (options, recommendation, seam, **the proposal brief**); AGENTS «Main rule: a proposal with live demos before implementing»; `docs/DECISIONS.md` «Design principles» and the AI-slop list in `docs/research/ai-chat-and-simplifier.md` §7.
5. Load the skills `artifact-design` (before writing the page) and use the Artifact tool's `quickstart` with intent `other` first. Block S-UI's report `docs/features/ai-real-sui.md` (the opener registry and the visibility store).
- Next 16 differs from your training data: read the relevant guide in `node_modules/next/dist/docs/` before Next code (route handlers: `01-app/01-getting-started/15-route-handlers.md`, `03-api-reference/03-file-conventions/route.md`, `maxDuration`, `after`). Supabase or Postgres work: load the skills `supabase` and `supabase-postgres-best-practices` first. Claude API code: load the skill `claude-api` first (use the official `@anthropic-ai/sdk`, only inside `src/lib/ai/anthropic-provider.ts`).

## Rules that apply to every block
- **Git:** you never commit, stage, stash, push, reset or merge (a hook blocks even a shell command whose text contains those verbs). **Do not use `~/doctrina-commit-kit/`: it is wired to the real repo, not to your duplicate.** Instead, your block file lists, per part, the exact files and a proposed commit message (English, Conventional Commits, ≤ 72 chars, subject only, no attribution line); block INT freezes them as kit blocks **450–459** in the real repo.
- **Secrets:** never print, log, echo or commit `ANTHROPIC_API_KEY`, `SUPABASE_SECRET_KEY`, `AI_COOKIE_SECRET`, `AI_IP_SALT`, `AI_ALERT_WEBHOOK`. Scripts say only «set» or «missing». No secret in a test fixture, a recording or a screenshot.
- **Money:** without a key everything runs with `AI_PROVIDER=fake` (free). With a key (`ANTHROPIC_API_KEY` set in `.env.local`), you may spend **at most the amount your acceptance criteria name**; print the estimate before any real call; log the real cost from the response usage.
- **Supabase:** read-only on project `doctrina` (`odmmwppyaimarxkzpyuw`) unless your block says otherwise; never read the `word_*` tables.
- **Files:** you may create and edit **only** the files listed under «Files you own». Your report and decisions go to `docs/features/ai-real-sentry.md` (yours). Never edit `docs/DECISIONS.md`, `docs/ROADMAP.md`, `docs/GOTCHAS.md`, `docs/PROJECT.md` (block INT copies from your file). Keep throwaway scripts in `tmp/ai-sentry/`.
- **Tests:** pure checks in `tools/ai-checks/<name>.mjs` (run by `tools/check-ai.mjs` inside `npm run lint`; each prints `ok <n> checks` or throws with the failing case); e2e in your own new spec file. Never two full Playwright suites at once on this machine.
- **Definition of done (every block):** `npm run verify` passes; your checks and specs pass; the files you touched are exactly your list (`git status` compared with the list, written in your report); no secret anywhere; your block file has: what was built, every agent's call, what is inert with `TODO` and why, how to run it, measured numbers, usage readings.
- **Usage:** read `python3 -I ~/.claude/skills/usage-guard/scripts/usage_check.py` at the start, at every part boundary and every ~10 minutes; log it in your block file. HTTP 429: wait 5 minutes and retry. At the cap: finish only the edit in hand, freeze it with the kit, write the State and stop.
- **State section:** the first section of `docs/features/ai-real-sentry.md` is «State» (done, in progress, next, how to resume), rewritten at every part boundary and at least every 20 minutes. After a context compaction, read it first.

## Budget
About **2.5 weekly points raw (1.9 after the usual ×0.75 correction)**, ±50 %. If you pass 1.5× the raw figure, stop, write the State and report why.

## Step 1 · The proposal (then STOP)
Publish one Artifact following the brief in `simplifier-design.md` §7.4 exactly (real content, real fonts and tokens, the approved ring and panel, demos working on phone width; today's state beside the options; each option's place, reference and cost; what is discarded and why; what to decide). Record the link in your block file. Then **stop** and tell Pedro in Spanish, in three lines, what to choose. Do not build anything until he answers.

## Step 2 · Build the chosen entry points (after Pedro's choice)
- Use only `openSimplifier(id)` and `setSimplifierVisibility()`; **never** edit `src/components/simplifier/*` (S-UI's files). If the choice needs a component change there, write it as a request in your block file and stop.
- Widen the addresses at the call sites the choice covers: tradition pages 03 (every statement and definition), Father divisions passing `canSimplify` (not AI editions), 02 prose sections, glossary entries; remove the `getSimplifiedText` gate there.
- Files you own: the host of the switch or button the choice names (create a new component under `src/components/` or the reader feature; edit the existing «Aa» menu component only at the point where its options are listed), the call sites `teach-section.tsx`, `father-body.tsx`, the 02 page section component, the glossary term page component (each only at the `SimplifiedParagraph` element), `e2e/simplifier-entry.spec.ts`, `docs/features/ai-real-sentry.md`. List every file and edit point in your block file before editing.
- Acceptance: the proposal's chosen behaviour, pixel-perfect against the approved Artifact (the verification rules of `.claude/rules/ui.md`), one Sonnet verifier, `npm run verify`, the simplifier specs (`simplifier.spec.ts`, `simplifier-real.spec.ts`) still green.

## Final message to Pedro (Spanish, short)
What works now and how to see it (one command or URL), the kit blocks with their numbers and the exact `cd ~/doctrina-commit-kit && ./apply.sh <numbers>` command (only for the real repo; in a duplicate say «para INT»), the files you own as a list for INT, the agent's calls, what is inert, money spent on the API (if any) and the usage readings.
