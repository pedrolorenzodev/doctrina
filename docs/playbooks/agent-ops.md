# Agent operations (base for every playbook)

How to run subagents on Pedro's account, and research on his Codex agent. Every other playbook assumes this one. Last validated: 2026-10-20 (retro of the debate-objections pilot).

## Models

| Model | For | Notes |
|---|---|---|
| Sonnet | Mechanical work: fetching, downloading, OCR, link checks, exact-string verification | Default for anything without judgment. |
| Opus (effort high) | Judgment: synthesis, licensing calls, applying corrections, consistency, briefs | Default for research areas. |
| Fable | Where judgment dominates: simulated expert review, hostile critic, hard synthesis | At most one Fable agent at a time. Costs ~2.5× Opus per token and still counts against the 5-hour session. It counts against the all-models weekly bar too (measured 2026-10-17: 45 → 51 % in 20 min with Fable expert and critic). |

## Sizing (measured; add a row after every run)

| Setup | Session use | Date |
|---|---|---|
| 6 agents, 4 on Fable | ~2.5 % / min | 2026-10-14 |
| 3–4 agents, Opus/Sonnet | ~0.2 % / min | 2026-10-15 |
| 2 Opus research agents, ~7 min each | ~4 points of session | 2026-10-17 |
| 1 Opus agent, web + Playwright screenshots, 11 min | ~5 points of session, ~1 weekly point | 2026-10-19 |
| 1 Opus agent, Playwright frame analysis, 11 min | ~4 points of session, ~1 weekly point | 2026-10-19 |
| Dossier pilot, one tradition (Lutheran Eucharist): Opus drafter 24 min, Sonnet verifier 14 min, Opus expert 6.5 min, Fable critic 5 min, Opus apply 16 min | ~29 points of session, ~4 weekly points | 2026-10-21 |
| Debate-objections pilot: 6 Opus (web and YouTube) + 3 Sonnet (verify, apply), three passes over 2 h 15 min | ~52 points of session (with coordination), ~9 weekly; the single Spanish YouTube pass ~15–20 session | 2026-10-20 |
| Eucharist pilot: Fable expert + Sonnet verifier 20 min (0 → 14 %), then Fable critic alone 10 min (14 → 32 %, ~1.8 %/min) | ~32 points of session, ~6 weekly | 2026-10-17 |
| Overnight Catholic wave: 3 Opus + 1 Fable at once; one doctrine through the full cycle | ~4 session points/min and ~0.7 weekly/min; ~55–70 session points per doctrine | 2026-10-18 |
| Structure proposal: 4 Opus builders (3 at once) + 1 Fable critic + 2 Opus fixers, ~70 min; the Fable critic alone ~9 session and ~2 weekly per 5 min | ~36 points of session, ~6 weekly | 2026-10-20 |
| Independent critique (Sonnet, 12 min) + pixel verifier (Sonnet, 34 min) of one page, in parallel: reports in `docs/features/` | ~1 weekly point for both (53 → 54 %, with the main session working) | 2026-10-24 |
| Neutral universe: Opus writer for 325-and-earlier, 44 min | one of four area agents (B–D ran after a weekly reset) | 2026-10-17 |

- At once: 2–3 Opus + at most 1 Fable; Sonnet as needed.
- Before a batch of a new shape: run one agent of each model for ~5 min and measure.
- Rough conversion seen once (2026-10-15): ~8 session points ≈ 1 weekly point. Re-measure.
- Usage counts the whole account, including Pedro's other sessions.

## Usage guard

- **Claude, 5-hour session ≤ 70 %** (Pedro, 2026-10-20): at 65 % no new agents; at 68 % every agent saves its progress (checkpoint message) and the run stops. It applies to the main session and to its subagents alike. At night, or close to the window's reset, more only when Pedro authorizes it explicitly, up to the number he gives. The weekly cap is set per run (this week's plan: agent memory `usage-plan-oct-2026`).
- Use Pedro's `usage-guard` skill (user skill, outside the repo) for any run with subagents: one-off check before launching, Monitor every 5 min, re-armed before its 30-minute expiry. The main session working alone checks it before each heavy step.

## Tools agents have

- **Playwright, full access** (browse, screenshot, scrape pages that block plain fetches). Pedro logs the agent into YouTube or Google accounts on request: ask him instead of giving up on a login wall.
- **YouTube** (`yt-dlp` is installed): search with views and channel, `yt-dlp --flat-playlist "ytsearch20:<query>" --print "%(id)s | %(view_count)s | %(upload_date)s | %(channel)s | %(title)s"`; auto subtitles without the video, `yt-dlp --skip-download --write-auto-subs --sub-langs "en,es" --sub-format vtt -o "%(id)s" <url>`; strip timing lines and duplicate rows to read them; keep the cue times to cite a timestamp. Tested 2026-10-20 without login. Rate limit: after ~20 subtitle downloads in a few minutes from two agents at once, YouTube answered 429 and "sign in, not a bot" for ~20 minutes; run one downloading agent at a time with `--sleep-requests 2 --sleep-subtitles 5`. Pedro's YouTube session (a secondary account) is saved in `~/.doctrina-youtube/` (`profile/` for a Playwright persistent context, `cookies.txt`); on 2026-10-20 yt-dlp 2026.08.19 with those cookies failed ("The page needs to be reloaded"), so use the session through Playwright: `node ~/.doctrina-youtube/transcript.js <outdir> <id> [<id>…]` reads each watch page's transcript panel with times, `node ~/.doctrina-youtube/search.js "<query>" …` searches (both headless, saved session, ~45 s per video; 12 transcripts with no block on 2026-10-20). They load Playwright from `~/Desktop/zapatillas-research/node_modules/playwright` (another project): if that folder goes, point them at any Playwright install. Default order: yt-dlp without login until the first 429, then these scripts. Re-login: `node ~/.doctrina-youtube/login.js` (it waits for the YouTube login cookies and writes `cookies.txt`). Quote debates as short quotations (copyrighted).

## The brief (every subagent prompt has all of these)

1. Objective, and why it matters to the project (one paragraph).
2. Files it may write (exact paths) and that it writes nothing else; no git writes.
3. Files to read first (`AGENTS.md`, the playbook, `BRIEF.md`, prior decisions that bound it).
4. Output format and the tags `[verified]` / `[snippet]` / `[memory]`.
5. Forbidden sources (unlicensed copies of in-copyright books; anything `DECISIONS.md` rules out) and the licensing line.
6. Sibling agents running in parallel and the files each owns.
7. Shared resources and how to back off: the WebSearch quota is shared and has run out in every long run (do search-heavy items first; fall back to direct fetches, catalogue APIs, archive.org); a shared browser if any.
8. Progress block at the top of its file, updated after each item; checkpoint protocol: if messaged, write everything including what it was about to do next, then stop.
9. Reply format: a short summary (counts, problems, anything outside its files that needs fixing).
10. Tools: name the ones the task needs from "Tools agents have" (Playwright, yt-dlp, Pedro's saved sessions). A source is never declared missing before trying them.

## Control during a run

- Every ~15 min: check each output file's modification time; message any agent that hasn't written in 15+ min. "Write as you go" in the brief is not enough on its own.
- Stopping a parent agent does not stop the subagents it spawned: check `ListAgents` and stop them too. Agents may spawn subagents (Pedro wants that allowed).
- A stopped agent resumes with its context and its original model. To change model or effort, launch a new agent that reads the file's Progress block.
- To resume after a limit: message the same agent "done: X; don't redo; continue from Y".
- A network drop pauses agents; they resume on their own. Check mtimes after.

## Unattended runs

- Before Pedro leaves: one round of every blocking question (scale, scope, downloads, logins, limits).
- Pedro keeps the terminal open, the Mac awake (`caffeinate -dis`) and online.
- At the 5-hour cap: checkpoint, stop, then wait for the reset with a background `until` loop on the usage script and relaunch from Progress blocks.

## Background work

We are racing the clock (`AGENTS.md`): the queue in `ROADMAP.md`, "Background queue", should always have something running while Pedro talks or decides.

- A task qualifies when it depends on no pending decision of Pedro's: research, verification, applying corrections, preparing data. Never content or UI that a pending "Decide:" could invalidate.
- Codex first (its quota is separate from the shared Claude account). Claude agents only for work that needs this session's context, such as building proposal Artifacts.
- Queue items are already approved: launch the next one without asking, and tell Pedro in one line what started and where it writes. A Claude run with more than one agent, or any Fable agent, still needs `/plan-run` and his ok.
- Check usage before launching (Claude: `usage-guard`; Codex: below). When a task ends, mark it in the queue, review its output, and launch the next.
- Keep the queue at three or more ready items. When a conversation produces new work that qualifies, add it.

## Codex (research agent)

Pedro runs research in his Codex app (`/goal`), not in Claude subagents: web research, verification, licensing, source hunting, applying corrections to research files. The agent writes the prompt; Pedro pastes it (`pbcopy < <file>` puts it on his clipboard).

- The prompt is self-contained: Codex knows nothing. It names the files to read first (`AGENTS.md`, `PROJECT.md`, the `DECISIONS.md` entries that bound it, the playbook, prior research), the exact question, one output file per task, the tags, no git writes, write-as-you-go with a Progress block and the line `Status: done` when finished, the usage cap, and a reply in Spanish with a commit message.
- Usage: `f=$(ls -t ~/.codex/sessions/*/*/*/*.jsonl | head -1); grep -o '"primary":{[^}]*}\|"secondary":{[^}]*}' "$f" | tail -2` (`secondary` = weekly, `primary` = 5 hours; `resets_at` is a Unix time). Pedro's Codex app shows usage inverted (remaining, not used): confirm which one he means.
- **Division of labour** (Pedro, 2026-10-21 night: «esta noche y mañana a la mañana, deleguemos todas las investigaciones a Codex, y nosotros implementamos código o artifact»): research goes to Codex; Claude implements code or artifacts.
- **Caps** (Pedro, 2026-10-21/22, replacing 2026-10-20's 70 %): daytime 5-hour session: no new step at 75 %, checkpoint and stop at 80 % (Codex overshoots by 5–15 points between checks), never 100 %. Night 23:00 to 08:00: the 5-hour window must NEVER reach 100 % (Pedro, 2026-10-22 01:00, «de mucha importancia»): Codex stops at 82 %, the runner waits at 85 %, and a watchdog in the runner kills `codex exec` at 92 %. Weekly: stop at 98 %, and Pedro fires a weekly reset when the agent signals. Night of 2026-10-22 only (Pedro: «puede llegar al 95%»): Codex stops at 90 %, runner waits at 90 %, watchdog at 95 % (`codex-resume-run-2.sh` takes `SESSION_CAP`, `NIGHT_CAP`, `KILL_AT`; chain `codex-chain-noche-5.sh`). Every Codex prompt states them, checks usage before each task, and a paused run writes `Paused: <which limit>` and the reset time in its Progress block.
- **Runner:** `~/.doctrina-youtube/codex-resume-run.sh <name> <session-id> <done-files…>` (log `~/codex-<name>-run.log`; the day runs log to `~/codex-day-run.log`). A done-file ending in `#second` means the "Second pass" section's last `Status:` is `done`. Environment: `MSG_OVERRIDE` replaces the resume message, `SKIP_FIRST` skips the first usage check. It rechecks every 15 minutes; after 5 failed resumes it starts a fresh session from `~/.doctrina-youtube/prompt-codex-fallback.md`. Chains that run several runners in a row: `codex-chain-noche-3.sh`, `codex-chain-noche-4.sh`.
- Pedro pastes Codex's summary back; the agent reads the output files and gives a critical take before anything depends on them. A research output still needs a verification pass (`research-fanout.md`).
- Sizing: one verification task at extra-high effort took ~8 weekly points in ~22 min (2026-10-20). The overnight run of 2026-10-20 (eight tasks, high effort, cap 35 %) finished all eight; its final usage wasn't recorded. Add a row after each run.

## Files and parallel sessions

- One output file per agent; disjoint ownership. One coordinator owns shared files (indexes, `BRIEF.md`, playbooks).
- Pedro may run another session in parallel (design screens). It writes `ROADMAP.md` and `DECISIONS.md` in their current format; so does this one. Add entries narrowly, never restructure, and hand Pedro the commit message right after, so each session starts from a committed tree.
- An ownership rule in a handoff states its reason and when it expires.

## Guardrails

- Git writes, staging included, are Pedro's; `.claude/hooks/block-git-writes.mjs` blocks them (`docs/GOTCHAS.md`).
- After a run, grep outputs for forbidden sources before anything depends on them.
- Research outputs go to `docs/research/`; nothing reaches `data/` or the site without Pedro's review.

## Lessons

- 2026-10-17 · The usage endpoint returned 429 when polled every 60 s and a 5-minute poll missed a 72 → 80 % jump → poll every 150–240 s, every 2 min above 65 %.
- 2026-10-18 · Other sessions on the account burned ~26 session points overnight with none of the run's agents running → session % is shared; check it before a long run and don't read it as only this run's.
- 2026-10-18 · A cron one-shot fired 45 min late and a network drop killed one agent → cron fires only when idle; resume a dead agent by SendMessage with "done: X; continue from Y".
- 2026-10-20 · The Fable critic of the structure proposal was the most expensive step of the night → give a Fable reviewer a 15-minute cap in its brief.
- 2026-10-14 · Six agents with four on Fable burned ~2.5 %/min unannounced → measure-first rule and the Fable limit.
- 2026-10-14 · Stopping a parent left a helper running → `ListAgents` after stopping.
- 2026-10-15 · The consistency agent wrote its log only at the end of 58 min → the 15-minute mtime check.
- 2026-10-15 · Apply agents reported each other's diffs as unknown → brief item 6 (siblings).
- 2026-10-15 · A handoff's "the other session owns DECISIONS" outlived its reason → ownership rules state reason and expiry.
- 2026-10-20 · The overnight Codex watchdog script failed on every attempt (`unexpected argument '-s'`, a flag written from memory) and nothing reported it; Codex finished on its own → test any unattended script once, end to end, before leaving it running.
- 2026-10-20 · The Baptism debate pilot found "no debates" because the brief asked for published transcripts and the agents didn't use YouTube; Pedro: there are many, with large audiences → "Tools agents have" (yt-dlp, Playwright) and every brief that touches debates names them.
- 2026-10-20 · Retro of the debate-objections pilot: the brief named no video tools, so the first pass declared "no debates" → brief item 10 (tools, never declare a source missing before trying them).
- 2026-10-20 · Codex overshot its 5-hour cap twice (73 % and 83 % against a stop at 68 %) because it checks usage every 20 minutes and long steps run between checks → in Codex prompts, check before every step that fetches or writes, not only every 20 minutes, and stop at 60 %.
- 2026-10-21 · The night watcher's `codex exec resume <id>` failed at 04:10 with "thread already has an active writer": the Codex app keeps its open conversation locked, so a CLI resume can't take it over. Fixed by hand at 04:24 with a new `codex exec` session fed a continuation prompt (read the Progress blocks, skip finished tasks) → for unattended runs, start the night task from the CLI (`codex exec`, so the watcher can `resume` its own thread), or have the watcher start a new session with a continuation prompt instead of resuming the app's thread. Scripts: `~/.doctrina-youtube/codex-continue.sh`.
- 2026-10-21 · The runner declared "all tasks done" when Claude finished the files Codex was waiting on → the done-files are Codex's own pending outputs, never files Claude may also complete.
- 2026-10-21 · After a weekly reset the session file's last usage reading is stale and the runner stopped on it → `SKIP_FIRST` skips the first check.
- 2026-10-21 · A 4-hour blind sleep missed the start of the night window → the runner rechecks every 15 minutes.
- 2026-10-21 · Two chains started two runners on the same session → a chain waits for both the runner and `codex exec` to end, with a head start before it checks.
- 2026-10-21 · `usage-guard` read 1 % as 100 % → the endpoint reports percent, not a fraction (fixed).
- 2026-10-23 · A Codex session resumed for two days grew to a 127 MB history and sent ~450k input tokens per step; two night windows burned 87 % and 92 % in ~25 min each → a fresh session per work order (`codex-resume-run-2.sh` accepts `new` as session id plus `PROMPT_FILE`, and `SESSION_CAP`/`NIGHT_CAP`/`KILL_AT`) and context-economy rules in the prompt. First fresh window still went 0 → 79 % in 30 min (~200k tokens per step after 15 min), so context alone is not the cause; next test: reasoning effort "medium" (global `~/.codex/config.toml`).
- 2026-10-23 · A Claude session left open overnight costs one cache rebuild (~120k tokens) on return, but the larger cost is length: per-request context grew from ~78k to ~197k over the session → hand off to a fresh session before a new block of work.
- 2026-10-23 · Codex wrote downloads to `tmp/` in the repo root → prompts say scratch goes outside the repo.

## Rules learned on 2026-10-24

- **Do not build, verify or restart `next start` while a subagent is testing against the running site**: a build replaces `.next` and breaks its server. Edit `src` and run typecheck and lint only, or wait for its notification.
- A verifier that runs long can be asked to wrap up with `SendMessage`; it writes its report with what it measured and lists what it did not reach.
- Subagents need Pedro's go each time (he approved the critique and verifier of page 03 only); read-only on `src`, one report file each, scratch under the session scratchpad (which is lost when the session ends: anything reusable goes into `tools/` or `data/scripts/`).
- Pedro's usage line, 2026-10-24: Claude weekly around 55 % unless he says otherwise (the account is shared); Codex may use up to 98 % of its 5-hour window only while he says so.

## Codex runner (night6): restart with a different cap

The runner is `~/.doctrina-youtube/codex-resume-run-3.sh`; its caps come from the environment of the process, so changing them means restarting it between two Codex runs (never while `codex exec` is running: `pgrep -f "codex exec"`). Stop the old one with `pkill -f "codex-resume-run-3.sh night6"`, then from `~/.doctrina-youtube`:

`SESSION_CAP=99 NIGHT_CAP=99 KILL_AT=99 MSG_OVERRIDE="<owner override text>" nohup ./codex-resume-run-3.sh night6 01a16ba8-3d06-7bc2-a756-8396275757cb <the five done files> > /dev/null 2>&1 &`

The done files (absolute paths under `docs/research/`) are `neutral/fathers-verification.md`, `sources/fathers-full-texts.md` and `doctrines/eucharist/{baptist,pentecostal,orthodox}.md`. The runner finishes when all five say `- Status: done`. Two processes in `ps` are normal (the script and its watchdog subshell). Defaults without the variables: session cap 80, night 85, kill at 92, weekly 98. The log is `~/codex-night6-run.log` and it prints `primary=` and `weekly=` each cycle. On 2026-10-24 it was started with 99 / 99 / 99 and the override «up to 98 %, no new step at 95 %, stop and write at 98 %»; the 5-hour window reset at 00:16 and the weekly one on Fri 2026-10-30 18:34.

## Rules learned on 2026-10-25 (Pedro away, solo block-by-block run)

- **Never two full Playwright suites at once, and never edit `src` or specs while one runs.** Two concurrent runs plus a Monitor loop pushed the load average to 47–85; the failures were timeouts, not bugs, and sequential reruns passed (519/519). A Monitor that waits for a run must watch for the process to exit, not count output lines (it counted lines and mistook one run for two). Run the suite 2–3 times in a row, each after the previous one exited.
- **Pedro away = a commit kit, never a commit.** `~/doctrina-commit-kit/` (outside the repo): `snapshot.py baseline` records every changed file's hash, `snapshot.py block <NN-name> "<message>" [report.md]` freezes the files changed since the last snapshot into `<NN-name>/files/` with `message.txt`, `deleted.txt` and `REPORT.md`; `apply.sh [NN …]` (Pedro runs it) copies the files over the repo, stages exactly those and commits one block each. The agent never runs `apply.sh`. After the last block, check that the kit equals the working tree (every kit file hashes the same as its repo file, and no changed file is missing); a docs edit made after a block was frozen must be re-frozen into the last block or Pedro commits stale docs. Never touches `docs/research/` or `tmp/`. A block message follows the project rule (Conventional Commits, no body, no attribution line).
- **Usage during the absence:** Pedro's ceiling was 62 % of the Claude weekly (58 % at the end, reset Wed 2026-10-28 ~18:00); no subagents without his go. Report the usage before and after.
- 2026-10-25 · The runner looped for ~10 hours with exit 127 because the Codex app moved its binary (`/Applications/Codex.app/…` → `/Applications/ChatGPT.app/Contents/Resources/codex-cli/bin/codex`) and its 5-failure fallback spawned the same missing binary → after every Codex app update run `codex --version` with the path in `CODEX=` before leaving a runner overnight, and read the tail of the log in the morning; when relaunching, pass `MSG_OVERRIDE` (the default message in `codex-resume-run-3.sh` is an old order).
- **Short verification protocol (Pedro approved it 2026-10-25, to try on the next blocks and review):** the full suite took 4–5 min and `verify` rebuilt what a manual `npm run build` had just built, so a block cost ~20 min of checks. Per block: the specs of the block's own files plus `npm run verify` (it builds; do not build by hand first), then restart `next start` and run those specs; one full-suite run before freezing the block into the kit; a small CSS or text fix runs only the specs of the touched files. Two full runs in a row only at the end of the day or after a cross-cutting change (tokens, shared components, `list-motion`, `scroll`, `focus`). Never two suites at once, as before. Review after a few blocks: if a regression slipped past, go back to the full protocol.
- 2026-10-25 · A kit snapshot taken while a reviewing subagent was running copied its temporary `tmp-review-*.mjs` scripts into the block → `snapshot.py` now ignores root files named `tmp-…`; never freeze a block while a subagent that writes scratch files in the repo root is still running, and delete such files before the snapshot.
- 2026-10-25 (night) · **Data an agent transcribes from a report is checked by an independent reader.** An Opus agent wrote 46 Fathers' date entries from Codex's report; a Sonnet comparison of all 51 entries against the report found 11 with a discrepancy (one year the report rejects, kinds that did not fit, qualifiers missing, one Spanish phrase with two approximators). Cost ~100k tokens. Never merge transcribed data without that pass; give the checker the rules the writer had and ask only for discrepancies with the exact fix.
- 2026-10-25 (night) · **A grammar for data is a model, not a patch.** The uncertain dates needed a typed `life` per Father, one helper (`father-life.ts`) used by the header, both timelines, the profile and the search, and a merge file (`all-fathers.ts`) so the generated `fathers.ts` is never edited; four specs asserted the old values and were updated deliberately. Do the model and six cases first, freeze that block, then fill the rest with an agent.
- 2026-10-25 (night) · **Check what a connector can see before planning on it.** The claude.ai Supabase connector listed only another organization's project and refused the new one («You do not have permission»). Run `list_projects` and one read on the real ref at the start; the fix is on Pedro's side (re-authorize or a scoped token).
- 2026-10-25 (night) · **Restarting the Codex runner to change its first order:** `MSG_OVERRIDE` is read once when the script starts, so changing the message file does nothing to a running runner: kill it, write the new message file and relaunch with `MSG_OVERRIDE="$(cat file)" SESSION_CAP=80 nohup ./codex-resume-run-3.sh <name> <session> <done-file>…` from `~/.doctrina-youtube/`, with the new report file first among the done files.
- 2026-10-25 (night) · **The runner's `NIGHT_CAP` (default 85) replaces `SESSION_CAP` from 23:00 to 08:00, and its watchdog kills Codex at `KILL_AT` (default 92):** to let Codex use a whole window set `NIGHT_CAP`, `SESSION_CAP` and `KILL_AT` together and give it a message without the 75/80 % pause, then swap back after the reset (`~/.doctrina-youtube/swap-runner-2352.sh` is the template: it kills the runner and `codex exec resume`, relaunches, sleeps until the reset and relaunches with the usual rules).
- 2026-10-25 (night) · **Tools that need a git word in the text are blocked even when harmless** (`git stash list` inside a long command); keep git reads to `status`, `diff`, `log`, `show`.

