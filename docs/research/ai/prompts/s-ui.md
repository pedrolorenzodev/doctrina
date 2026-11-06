# Doctrina · AI block **S-UI** · Simplifier UI wiring (approved UI, no redesign)

You are a fresh Claude session (Opus 5.5, high) working with Pedro on **Doctrina**, a bilingual (es/en) deep-study site on Christian doctrine. Talk to Pedro in Spanish (Rioplatense), very briefly; code, docs and file names in English. Pedro may be away: **do not wait and do not ask**; where something is undefined, take the option the documents recommend (or the simplest one that keeps the contracts) and record it as «agent's call» in your block file.

**Cap for this session (Pedro fills in when launching): `CAP = ___ % weekly`** (blank = 45 %).

## Where you work
**Your own duplicate `/Users/pedrolorenzo/Desktop/dev/doctrina-ai-sui`** (Pedro made it with `cp -R ~/Desktop/dev/doctrina /Users/pedrolorenzo/Desktop/dev/doctrina-ai-sui` after block F was committed; `.env.local` is inside). Work only there. Never open the real repo or another `doctrina-*` folder: other AI blocks run in parallel in theirs. Node 24: `source ~/.nvm/nvm.sh && nvm use`. Port for your servers and e2e: **3140** (`E2E_PORT=3140 npm run e2e -- <specs>`, screenshots `npx next start -p 3140` after `npm run build`). Never `pkill -f "next start"` (other sessions run servers): stop yours by PID.
Block INT copies **only the files you own** (listed below) into the real repo, in the order LIM → RET → S-SRV → C-SRV → S-UI → C-UI → EVAL. So: never edit a file outside your list; if you believe you must, stop and write why in your report.

## Read first (in this order; do not skip)
1. `AGENTS.md` whole (rules: no comments except `TODO`/tool silencers/one-line guards, English names, layers `app → features → content | components → lib`, named exports, `@/` imports, trust and neutrality invariants).
2. `docs/research/ai/contracts.md` whole: **the frozen interfaces you build against. Do not change them**; if one is impossible, stop and write why.
3. `docs/features/ai-real.md`: your block's section, the ownership table at the end, «Block specifications» of the blocks you depend on.
4. `docs/features/simplifier-ui.md` whole (the approved behaviour, the measured rules, the deviations table) and DECISIONS 2026-11-03 night «AI simplifier: UI-only test build»; `docs/research/ai/simplifier-design.md` §2 (lifecycle, the one-push rule, pending and message states) and §7.3 (the seam you create).
5. `.claude/rules/ui.md` and `docs/DESIGN.md` (tokens, the «Before calling a block done» list, pixel-perfect verification); `src/components/simplifier/*`, `src/lib/simplifier-*.ts`, `e2e/simplifier.spec.ts`.
- Next 16 differs from your training data: read the relevant guide in `node_modules/next/dist/docs/` before Next code (route handlers: `01-app/01-getting-started/15-route-handlers.md`, `03-api-reference/03-file-conventions/route.md`, `maxDuration`, `after`). Supabase or Postgres work: load the skills `supabase` and `supabase-postgres-best-practices` first. Claude API code: load the skill `claude-api` first (use the official `@anthropic-ai/sdk`, only inside `src/lib/ai/anthropic-provider.ts`).

## Rules that apply to every block
- **Git:** you never commit, stage, stash, push, reset or merge (a hook blocks even a shell command whose text contains those verbs). **Do not use `~/doctrina-commit-kit/`: it is wired to the real repo, not to your duplicate.** Instead, your block file lists, per part, the exact files and a proposed commit message (English, Conventional Commits, ≤ 72 chars, subject only, no attribution line); block INT freezes them as kit blocks **440–449** in the real repo.
- **Secrets:** never print, log, echo or commit `ANTHROPIC_API_KEY`, `SUPABASE_SECRET_KEY`, `AI_COOKIE_SECRET`, `AI_IP_SALT`, `AI_ALERT_WEBHOOK`. Scripts say only «set» or «missing». No secret in a test fixture, a recording or a screenshot.
- **Money:** without a key everything runs with `AI_PROVIDER=fake` (free). With a key (`ANTHROPIC_API_KEY` set in `.env.local`), you may spend **at most the amount your acceptance criteria name**; print the estimate before any real call; log the real cost from the response usage.
- **Supabase:** read-only on project `doctrina` (`odmmwppyaimarxkzpyuw`) unless your block says otherwise; never read the `word_*` tables.
- **Files:** you may create and edit **only** the files listed under «Files you own». Your report and decisions go to `docs/features/ai-real-sui.md` (yours). Never edit `docs/DECISIONS.md`, `docs/ROADMAP.md`, `docs/GOTCHAS.md`, `docs/PROJECT.md` (block INT copies from your file). Keep throwaway scripts in `tmp/ai-sui/`.
- **Tests:** pure checks in `tools/ai-checks/<name>.mjs` (run by `tools/check-ai.mjs` inside `npm run lint`; each prints `ok <n> checks` or throws with the failing case); e2e in your own new spec file. Never two full Playwright suites at once on this machine.
- **Definition of done (every block):** `npm run verify` passes; your checks and specs pass; the files you touched are exactly your list (`git status` compared with the list, written in your report); no secret anywhere; your block file has: what was built, every agent's call, what is inert with `TODO` and why, how to run it, measured numbers, usage readings.
- **Usage:** read `python3 -I ~/.claude/skills/usage-guard/scripts/usage_check.py` at the start, at every part boundary and every ~10 minutes; log it in your block file. HTTP 429: wait 5 minutes and retry. At the cap: finish only the edit in hand, freeze it with the kit, write the State and stop.
- **State section:** the first section of `docs/features/ai-real-sui.md` is «State» (done, in progress, next, how to resume), rewritten at every part boundary and at least every 20 minutes. After a context compaction, read it first.

## Budget
About **2.0 weekly points raw (1.5 after the usual ×0.75 correction)**, ±50 %. If you pass 1.5× the raw figure, stop, write the State and report why.

## What you build
**Wiring (kind a)** and **states the mock never needed (kind b)**. The approved UI stays exactly as it is: same elements, tokens, heights, curves, durations. No new token, no new component kind.
- **Source:** `SimplifiedParagraph` takes `address` (`SimplifyAddress`) instead of a mock `entry`, fetches `POST /api/ai/simplify` (through `use-simplification.ts`, AbortController, 20 s timeout), keeps results per page view (the existing `simplifier-memory.ts` semantics), and on hover/focus with a fine pointer prefetches `GET …&cacheOnly=1`.
- **Pending (kind b):** nothing moves; the ring shows the approved «writing» look (its circle with the dashed border the panel uses while writing), `aria-busy="true"`, the tooltip text and a polite live region say «Simplificando…». A second press cancels and returns the ring to rest.
- **Arrival:** the existing open path, unchanged: first open of a paragraph = the approved word reveal over the final layout; later opens = the approved wipe. Both levels arrive together; the level switch is instant.
- **Messages (kind b):** error, limit, paused, off, bot check: the panel opens once with the message as its text (`ink-3`), the approved header, and the approved footer with «Reintentar» (only when `retry`) and «Ocultar». Texts: `contracts.md` §7 (simplifier variants), via `simplifier-text.ts`.
- **Status line:** «Revisado» for `status: reviewed`, «Generado por IA, sin revisar» otherwise (replaces the mock's «Texto de prueba, sin revisar»).
- **Scope tonight:** exactly the paragraphs the test build covers (the 24 Catholic and Baptist 03 paragraphs, Ignatius *Smyrn.* 6.2); `getSimplifiedText(id)` stays the gate at the call sites. Wider coverage is block S-ENTRY.
- **Seam for S-ENTRY:** `simplifier-openers.ts` (`registerOpener(id, open)`, `unregisterOpener(id)`, `openSimplifier(id)`), each `SimplifiedView` registers itself; `src/lib/simplifier-visibility.ts` (a tiny external store, `"ring-on-hover" | "hidden"`, default `"ring-on-hover"` = today) read by the ring.

### Files you own
- Edit: `src/components/simplifier/simplified-paragraph.tsx` (props, `SimplifiedParagraph`, `SimplifiedView` state, `open()`, the ring's class and aria), `simplified-panel.tsx` (message slot, status), `simplifier-text.ts` (strings), `src/lib/simplifier-types.ts` (`SimplifyStatus`), `src/features/doctrine/teach-section.tsx` (inside `simplifiable`, ≈ lines 56–72: `address` instead of `entry`), `src/features/reader/father-body.tsx` (the `SimplifiedParagraph` element, ≈ lines 443–447: `address` with the selected edition id).
- Create: `src/components/simplifier/use-simplification.ts`, `simplifier-openers.ts`, `src/lib/simplifier-visibility.ts`, `e2e/simplifier-real.spec.ts`, `docs/features/ai-real-sui.md`.
- Layer rule: `components/` cannot import `content/`; the hook calls the route with `fetch`, the types come from `@/lib/ai/contracts`.

### How to run without a key
`AI_PROVIDER=fake` (Playwright sets it): F's stub route returns the mock texts for the approved paragraphs. Mock the route in specs (`page.route`) for pending (delay 1,500 ms) and for each error code.

### Acceptance and tests
As in `docs/features/ai-real.md` «S-UI», plus the «Before calling a block done» list of `.claude/rules/ui.md` and one Sonnet verifier (Agent tool, model `sonnet`) on the pending and message states' screenshots (360, 390, 768, 1440; light and dark) against the current build at rest: zero differing pixels at rest; the verifier's report goes to `docs/features/ai-real-sui-verifier.md` (yours).

### Parts
440 hook, openers, visibility store · 441 component wiring and pending · 442 messages and status · 443 specs, screenshots, verifier, block doc.

## Final message to Pedro (Spanish, short)
What works now and how to see it (one command or URL), the kit blocks with their numbers and the exact `cd ~/doctrina-commit-kit && ./apply.sh <numbers>` command (only for the real repo; in a duplicate say «para INT»), the files you own as a list for INT, the agent's calls, what is inert, money spent on the API (if any) and the usage readings.
