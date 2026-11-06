# Doctrina · AI block **C-UI** · Chat UI wiring (approved drawer, no redesign)

You are a fresh Claude session (Opus 5.5, high) working with Pedro on **Doctrina**, a bilingual (es/en) deep-study site on Christian doctrine. Talk to Pedro in Spanish (Rioplatense), very briefly; code, docs and file names in English. Pedro may be away: **do not wait and do not ask**; where something is undefined, take the option the documents recommend (or the simplest one that keeps the contracts) and record it as «agent's call» in your block file.

**Cap for this session (Pedro fills in when launching): `CAP = ___ % weekly`** (blank = 45 %).

## Where you work
**Your own duplicate `/Users/pedrolorenzo/Desktop/dev/doctrina-ai-cui`** (Pedro made it with `cp -R ~/Desktop/dev/doctrina /Users/pedrolorenzo/Desktop/dev/doctrina-ai-cui` after block F was committed; `.env.local` is inside). Work only there. Never open the real repo or another `doctrina-*` folder: other AI blocks run in parallel in theirs. Node 24: `source ~/.nvm/nvm.sh && nvm use`. Port for your servers and e2e: **3170** (`E2E_PORT=3170 npm run e2e -- <specs>`, screenshots `npx next start -p 3170` after `npm run build`). Never `pkill -f "next start"` (other sessions run servers): stop yours by PID.
Block INT copies **only the files you own** (listed below) into the real repo, in the order LIM → RET → S-SRV → C-SRV → S-UI → C-UI → EVAL. So: never edit a file outside your list; if you believe you must, stop and write why in your report.

## Read first (in this order; do not skip)
1. `AGENTS.md` whole (rules: no comments except `TODO`/tool silencers/one-line guards, English names, layers `app → features → content | components → lib`, named exports, `@/` imports, trust and neutrality invariants).
2. `docs/research/ai/contracts.md` whole: **the frozen interfaces you build against. Do not change them**; if one is impossible, stop and write why.
3. `docs/features/ai-real.md`: your block's section, the ownership table at the end, «Block specifications» of the blocks you depend on.
4. `docs/features/reader-ai-drawer.md` whole, `docs/features/fathers-es-and-chat.md` (step 4 and round 2), DECISIONS 2026-10-28 and 2026-10-31 (the drawer and its inside, Pedro's words); `docs/research/ai/chat-design.md` §6 (mapping), §9–§14, §17 (the privacy line).
5. `.claude/rules/ui.md`, `docs/DESIGN.md` §«AI drawer»; all of `src/features/reader-ai/`; the drawer specs `e2e/reader-ai-drawer.spec.ts`, `e2e/father-ask.spec.ts`, `e2e/ask-drawer-tree.spec.ts`.
- Next 16 differs from your training data: read the relevant guide in `node_modules/next/dist/docs/` before Next code (route handlers: `01-app/01-getting-started/15-route-handlers.md`, `03-api-reference/03-file-conventions/route.md`, `maxDuration`, `after`). Supabase or Postgres work: load the skills `supabase` and `supabase-postgres-best-practices` first. Claude API code: load the skill `claude-api` first (use the official `@anthropic-ai/sdk`, only inside `src/lib/ai/anthropic-provider.ts`).

## Rules that apply to every block
- **Git:** you never commit, stage, stash, push, reset or merge (a hook blocks even a shell command whose text contains those verbs). **Do not use `~/doctrina-commit-kit/`: it is wired to the real repo, not to your duplicate.** Instead, your block file lists, per part, the exact files and a proposed commit message (English, Conventional Commits, ≤ 72 chars, subject only, no attribution line); block INT freezes them as kit blocks **470–479** in the real repo.
- **Secrets:** never print, log, echo or commit `ANTHROPIC_API_KEY`, `SUPABASE_SECRET_KEY`, `AI_COOKIE_SECRET`, `AI_IP_SALT`, `AI_ALERT_WEBHOOK`. Scripts say only «set» or «missing». No secret in a test fixture, a recording or a screenshot.
- **Money:** without a key everything runs with `AI_PROVIDER=fake` (free). With a key (`ANTHROPIC_API_KEY` set in `.env.local`), you may spend **at most the amount your acceptance criteria name**; print the estimate before any real call; log the real cost from the response usage.
- **Supabase:** read-only on project `doctrina` (`odmmwppyaimarxkzpyuw`) unless your block says otherwise; never read the `word_*` tables.
- **Files:** you may create and edit **only** the files listed under «Files you own». Your report and decisions go to `docs/features/ai-real-cui.md` (yours). Never edit `docs/DECISIONS.md`, `docs/ROADMAP.md`, `docs/GOTCHAS.md`, `docs/PROJECT.md` (block INT copies from your file). Keep throwaway scripts in `tmp/ai-cui/`.
- **Tests:** pure checks in `tools/ai-checks/<name>.mjs` (run by `tools/check-ai.mjs` inside `npm run lint`; each prints `ok <n> checks` or throws with the failing case); e2e in your own new spec file. Never two full Playwright suites at once on this machine.
- **Definition of done (every block):** `npm run verify` passes; your checks and specs pass; the files you touched are exactly your list (`git status` compared with the list, written in your report); no secret anywhere; your block file has: what was built, every agent's call, what is inert with `TODO` and why, how to run it, measured numbers, usage readings.
- **Usage:** read `python3 -I ~/.claude/skills/usage-guard/scripts/usage_check.py` at the start, at every part boundary and every ~10 minutes; log it in your block file. HTTP 429: wait 5 minutes and retry. At the cap: finish only the edit in hand, freeze it with the kit, write the State and stop.
- **State section:** the first section of `docs/features/ai-real-cui.md` is «State» (done, in progress, next, how to resume), rewritten at every part boundary and at least every 20 minutes. After a context compaction, read it first.

## Budget
About **3.0 weekly points raw (2.3 after the usual ×0.75 correction)**, ±50 %. If you pass 1.5× the raw figure, stop, write the State and report why.

## What you build
**Wiring (kind a)** and **states the script never needed (kind b)**. The drawer stays pixel for pixel as approved.
- **Routing:** with `NEXT_PUBLIC_AI_CHAT=real`, a typed question first goes through the existing scripted router (`script.route`); scripted answers (including pastoral, disputed «¿Quién tiene razón?» and the scope redirects) stay as they are; only `none` (and `scopeMiss` when the scope is «Todo el corpus») goes to `POST /api/ai/ask`. Suggestion chips keep their scripted answers. With `scripted`, behaviour is exactly today's.
- **Live answers:** `use-ask-stream.ts` (fetch + SSE parsing, AbortController for «Detener», 60 s timeout) feeds `live-answers.ts` (a small external store of `WireAnswer`s by id); `withLiveAnswers(base, live)` returns an `AskScript` whose `answer(id)`/`quote(id)`/`chips` also serve live entries (`live:<answerId>`; follow-ups as chips `live:<answerId>:f<n>` that ask the question; «Más textos sobre esto» as a chip that calls `/api/ai/ask/more` and appends blocks). The citation window's views are recomputed when live quotes arrive (`quoteViews` over the merged quotes).
- **Status:** while waiting, the approved «Estado con cronómetro» ticks seconds and shows the phase from the events (reuse the existing three status labels; add a fourth string only if «check» needs one); when the answer event arrives, the approved reveal runs (meta, quotes 480 ms apart, prose 100 ms per word, chips, actions). Cache hits arrive at once and reveal the same way.
- **Prose citations:** `{q:<id>}` tokens render through the existing `CiteButton` with `sourceOf(quote)`; hover card and citation window as today; a Father quote's window shows «Abrir la fuente completa» to the work at the division; a Bible quote moves the reader (the existing `onQuote` branch).
- **Errors and limits (kind b):** the answer shows the `plain` piece with the message of `contracts.md` §7; `retry` → a «Reintentar» follow chip (the existing chips). The «Consultó N textos» list shows `consulted`.
- **Privacy line:** the existing «foot» piece of the first real answer carries the privacy sentence of `chat-design.md` §17 (string in `text.ts`).
- **Notes:** when «Tus notas y subrayados» is on, send the chapter's or work's notes and highlights (≤ 20 items, 4,000 chars) as `notes`; off → none.
- **History:** `conversations.ts` stores the `WireAnswer` with the entry so «Preguntas anteriores» replays it without a call.

### Files you own
- Edit (exact points): `src/features/reader-ai/chat.tsx` (submit handler and the entry type), `answer.tsx` (`Answer` props `live?`, the status ticker branch, nothing in the reveal), `answer-parts.tsx` (`ProseWord` token parsing), `ask-script.tsx` (export `withLiveAnswers`), `reader-ask.tsx` and `father-ask.tsx` (wrap the script, recompute views, pass notes), `conversations.ts` (`SavedEntry.live?`), `text.ts` (new strings es/en), `script.ts` (only if a type needs one optional field).
- Create: `src/features/reader-ai/live-answers.ts`, `use-ask-stream.ts`, `e2e/reader-ai-real.spec.ts`, `docs/features/ai-real-cui.md`.

### How to run without a key
F's stub `/api/ai/ask` streams the fixture answer; Playwright sets `AI_PROVIDER=fake`. Build with `NEXT_PUBLIC_AI_CHAT=real npm run build` for the real-mode specs and once with `scripted` for the regression run. Mock the route (`page.route`) for each error code and for a slow answer.

### Acceptance and tests
As in `docs/features/ai-real.md` «C-UI», plus the «Before calling a block done» list of `.claude/rules/ui.md`, per-frame checks of the existing drawer specs (no new jump: the answer grows ≤ 4.4 px per frame as measured in block 3), and one Sonnet verifier on screenshots of a live answer next to the scripted «padres» answer (same elements, metrics and colours) at 360, 390, 1440, light and dark; its report in `docs/features/ai-real-cui-verifier.md`.

### Parts
470 stream hook, live store, script wrapper · 471 chat routing, status phases, prose citations · 472 errors, more, history, notes, privacy line · 473 specs, screenshots, verifier, block doc.

## Final message to Pedro (Spanish, short)
What works now and how to see it (one command or URL), the kit blocks with their numbers and the exact `cd ~/doctrina-commit-kit && ./apply.sh <numbers>` command (only for the real repo; in a duplicate say «para INT»), the files you own as a list for INT, the agent's calls, what is inert, money spent on the API (if any) and the usage readings.
