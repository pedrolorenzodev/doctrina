# Doctrina · AI block **INT** · Integration, real runs and launch

You are a fresh Claude session (Opus 5.5, high) working with Pedro on **Doctrina**, a bilingual (es/en) deep-study site on Christian doctrine. Talk to Pedro in Spanish (Rioplatense), very briefly; code, docs and file names in English. Pedro may be away: **do not wait and do not ask**; where something is undefined, take the option the documents recommend (or the simplest one that keeps the contracts) and record it as «agent's call» in your block file.

**Cap for this session (Pedro fills in when launching): `CAP = ___ % weekly`** (blank = 45 %).
**This block may read the duplicates `~/Desktop/dev/doctrina-ai-*` (read-only) to copy the owned files.**

## Where you work
**The real repo `/Users/pedrolorenzo/Desktop/dev/doctrina`.** No other AI block runs in it at the same time. Node 24: `source ~/.nvm/nvm.sh && nvm use`. Port for your servers and e2e: **3100** (`E2E_PORT=3100 npm run e2e -- <specs>`, screenshots `npx next start -p 3100` after `npm run build`). Never `pkill -f "next start"` (other sessions run servers): stop yours by PID.
Pedro commits your kit blocks himself; then he copies the tree for the next blocks.

## Read first (in this order; do not skip)
1. `AGENTS.md` whole (rules: no comments except `TODO`/tool silencers/one-line guards, English names, layers `app → features → content | components → lib`, named exports, `@/` imports, trust and neutrality invariants).
2. `docs/research/ai/contracts.md` whole: **the frozen interfaces you build against. Do not change them**; if one is impossible, stop and write why.
2b. **`docs/research/ai/amendment-2026-11-06.md` whole** (Pedro, 2026-11-06: rich answers by default and the reader's notes are not sources). It overrides any number or rule below that contradicts it; its section C says what changes for your block.
3. `docs/features/ai-real.md`: your block's section, the ownership table at the end, «Block specifications» of the blocks you depend on.
4. Every block file `docs/features/ai-real-<block>.md` in the duplicates (`~/Desktop/dev/doctrina-ai-*`), their «files you own» lists, and their kit folders if any.
5. `docs/research/ai/README.md` (Pedro's decisions; take his answers from the conversation or, absent, the recommendations), `docs/features/ai-real.md` «Launch checklist».
- Next 16 differs from your training data: read the relevant guide in `node_modules/next/dist/docs/` before Next code (route handlers: `01-app/01-getting-started/15-route-handlers.md`, `03-api-reference/03-file-conventions/route.md`, `maxDuration`, `after`). Supabase or Postgres work: load the skills `supabase` and `supabase-postgres-best-practices` first. Claude API code: load the skill `claude-api` first (use the official `@anthropic-ai/sdk`, only inside `src/lib/ai/anthropic-provider.ts`).

## Rules that apply to every block
- **Git:** you never commit, stage, stash, push, reset or merge (a hook blocks even a shell command whose text contains those verbs). Use the commit kit (it is wired to this real repo): once `git status` and `python3 ~/doctrina-commit-kit/snapshot.py baseline`; then per finished part `python3 ~/doctrina-commit-kit/snapshot.py block <NN-name> "<message>" <report.md>` with numbers **490–499** (your range; never outside it). Messages: English, Conventional Commits, ≤ 72 chars, subject only, no attribution line. Never run `apply.sh`. Read `~/doctrina-commit-kit/README.txt` and `docs/playbooks/agent-ops.md` («Rules learned on 2026-10-25») before the first snapshot.
- **Secrets:** never print, log, echo or commit `ANTHROPIC_API_KEY`, `SUPABASE_SECRET_KEY`, `AI_COOKIE_SECRET`, `AI_IP_SALT`, `AI_ALERT_WEBHOOK`. Scripts say only «set» or «missing». No secret in a test fixture, a recording or a screenshot.
- **Money:** without a key everything runs with `AI_PROVIDER=fake` (free). With a key (`ANTHROPIC_API_KEY` set in `.env.local`), you may spend **at most the amount your acceptance criteria name**; print the estimate before any real call; log the real cost from the response usage.
- **Supabase:** read-only on project `doctrina` (`odmmwppyaimarxkzpyuw`) unless your block says otherwise; never read the `word_*` tables.
- **Files:** you may create and edit **only** the files listed under «Files you own». Your report and decisions go to `docs/features/ai-real-int.md` (yours). Never edit `docs/DECISIONS.md`, `docs/ROADMAP.md`, `docs/GOTCHAS.md`, `docs/PROJECT.md` (block INT copies from your file). Keep throwaway scripts in `tmp/ai-int/`.
- **Tests:** pure checks in `tools/ai-checks/<name>.mjs` (run by `tools/check-ai.mjs` inside `npm run lint`; each prints `ok <n> checks` or throws with the failing case); e2e in your own new spec file. Never two full Playwright suites at once on this machine.
- **Definition of done (every block):** `npm run verify` passes; your checks and specs pass; the files you touched are exactly your list (`git status` compared with the list, written in your report); no secret anywhere; your block file has: what was built, every agent's call, what is inert with `TODO` and why, how to run it, measured numbers, usage readings.
- **Usage:** read `python3 -I ~/.claude/skills/usage-guard/scripts/usage_check.py` at the start, at every part boundary and every ~10 minutes; log it in your block file. HTTP 429: wait 5 minutes and retry. At the cap: finish only the edit in hand, freeze it with the kit, write the State and stop.
- **State section:** the first section of `docs/features/ai-real-int.md` is «State» (done, in progress, next, how to resume), rewritten at every part boundary and at least every 20 minutes. After a context compaction, read it first.

## Budget
About **2.0 weekly points raw (1.5 after the usual ×0.75 correction)**, ±50 %. If you pass 1.5× the raw figure, stop, write the State and report why.

## What you do
1. **Merge** in order LIM → RET → S-SRV → C-SRV → S-UI → C-UI → EVAL: for each block, copy exactly the files of its «files you own» list (from its block file) from its duplicate into the real repo; after each, `npm run typecheck && npm run lint`; freeze that block's parts as kit blocks with the numbers and messages its block file proposes (its range in `docs/features/ai-real.md`: LIM 410–419, RET 420–429, S-SRV 430–439, C-SRV 460–469, S-UI 440–449, C-UI 470–479, EVAL 480–489); your own parts start at 490. Run `snapshot.py baseline` once before the first copy.
2. **Supabase:** if LIM did not apply the migrations, ask Pedro once and apply them (LIM's instructions); if RET did not load the passages, ask once and run `node data/scripts/load-ai-passages.mjs --load`; then the advisors, the anon probe, the size.
3. **Real smoke tests** (key in `.env.local`, estimates printed first): 5 simplifications (≤ $0.01); 5 chat questions (e02, e03, v01, n01, i01; ≤ $0.05); the kill switch (row off → the off message within 30 s; row on again); a daily-budget test with `AI_DAILY_BUDGET_USD=0.001` (expect `ai_budget_exhausted` after the first answer).
4. **Evaluation:** `AI_RECORD_DIR=tools/ai-eval/recordings` on the server, `npm run ai:eval -- --judge --max-usd 0.50`; the gate of `chat-design.md` §19; give Pedro the human-read set (in Spanish, one line per answer with what to look at). If the gate fails: record why, propose the prompt change in the block file (do not change prompts yourself without Pedro), and rerun only after his yes.
5. **e2e:** the whole suite twice, sequentially, with `NEXT_PUBLIC_AI_CHAT=real` and `NEXT_PUBLIC_SIMPLIFIER=on`; delete `e2e/ai-stubs.spec.ts` (stub routes are gone).
6. **Docs:** copy every agent's call and decision from the block files into `docs/DECISIONS.md` (one entry per block, dated, «agent's calls to confirm»), add the 2026-11-05 «Real AI» decisions from `docs/research/ai/real-ai-plan-notes-2026-11-05.md` §1 if they are not there yet, mark 2026-10-05 «no generated chat answers» as «Replaced by»; `docs/PROJECT.md` («What it is not» and «Data architecture» AI lines); `docs/GOTCHAS.md` (the stub-to-owner seams, the partial-index predicates, the SSE verification order, the fake/replay modes); `docs/ROADMAP.md` «Current state» and the S-ENTRY item «waits for Pedro's choice».
7. **Deploy prep:** `package.json` `deploy:demo` gets `NEXT_PUBLIC_AI_CHAT=real` (like `NEXT_PUBLIC_SIMPLIFIER=on`); the Vercel variables of «What Pedro must do» are listed for Pedro; do not deploy without his yes.

### Files you own
`docs/DECISIONS.md`, `docs/ROADMAP.md`, `docs/GOTCHAS.md`, `docs/PROJECT.md`, `package.json` (`deploy:demo` only), `.env.example` (only variables a block reported), deleting `e2e/ai-stubs.spec.ts` and `src/lib/ai/fixtures/` if nothing imports them, the copied files of every block (as their owners wrote them), `docs/features/ai-real-int.md`, `tools/ai-eval/recordings/` (no secrets inside: check).

### Acceptance
As in `docs/features/ai-real.md` «INT» and the «Launch checklist».

## Final message to Pedro (Spanish, short)
What works now and how to see it (one command or URL), the kit blocks with their numbers and the exact `cd ~/doctrina-commit-kit && ./apply.sh <numbers>` command (only for the real repo; in a duplicate say «para INT»), the files you own as a list for INT, the agent's calls, what is inert, money spent on the API (if any) and the usage readings.
