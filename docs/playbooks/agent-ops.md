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
| Codex dossier wave 1: Eucharist Reformed (S2+S3), Baptist and Orthodox (S1-S3), ~32 min | 36 % of the 5-hour window, weekly 60 → 66 % (~2 weekly points per dossier); 3 WRONG found in 2 dossiers, 11 must-fix editorial findings applied | 2026-10-29 |
| Codex dossier waves 2-3: Baptism ×4 and Sola Scriptura Baptist verified, Sola Scriptura Reformed partial, ~35 min, cap 60 % | 49 % of the 5-hour window, weekly 66 → 74 % (~1.6 weekly points and ~8 window points per dossier); 7 WRONG and 18 must-fix applied | 2026-10-30 |

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
- **Pedro's rule, 2026-10-29: nothing here starts on its own.** No agent delegates to Codex, launches its runner or starts a queue item unless Pedro explicitly says so, and then it asks him first (task, output file, usage cap) and waits for the yes. The lines below describe how to run it after that yes.
- Codex first (its quota is shared with another person's account use, not free). Claude agents only for work that needs this session's context, such as building proposal Artifacts.
- Queue items are candidates, not approvals: once Pedro has said to start, confirm which one with him, then tell him in one line what started and where it writes. A Claude run with more than one agent, or any Fable agent, still needs `/plan-run` and his ok.
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

- 2026-10-29 · The resume-loop runner kept working across window resets, which Pedro did not ask for («límite de la sesión actual») → for a one-off run use `~/.doctrina-youtube/codex-oneshot.sh <name> <prompt-file> <kill-at>`: one `codex exec`, a watchdog that kills at the given percent, no resume. Changing the cap of a running Codex means stopping it and relaunching with a new prompt: the finished files stay on disk, and the prompt says to skip the files whose Progress has `- Status: done`.
- 2026-10-29 · Told «mandalo a Codex» without a task, the agent chose one (the corpus) and Pedro had meant the dossiers → when the task is not named, ask which one (one short question with the options) before launching.
- 2026-10-29 · A drafting pass without verification is fast: the four Baptist dossiers took ~33 min (24 % of one window) and the six Reformed and Lutheran ones ~34 min (usage not separable: the window reset at 14:37); each file ends with a Coverage table and «Questions for the owner». The verifier of the Lutheran pilot found 13 wrong quotes in ~235: nothing from a draft enters `data/` or a page before the verification pass.
- 2026-10-29 · zsh aborts the whole command line when a glob matches nothing (`docs/research/doctrines/*/orthodox.md` before the files exist): list with `find` or quote the pattern.

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


## Rules learned on 2026-10-26 (the reader night: blocks R1–R7a, one session)

- **Cost, measured because Pedro asked for it:** Claude's weekly went 62 → 65 % across the corpus phases 0–1, the Fathers' schema and the reader blocks R1–R6 (about 40 specs files' worth of work, six full suites, two Sonnet verifiers of 150–190k subagent tokens each); the endpoint reports whole percents, so a block is under a point. Sonnet 5.5 high cost far less than the 2–4 points per block I first guessed: measure, do not estimate. Ceiling that night: 68 %, inclusive.
- **A block is several commits.** Pedro wants each block split into coherent commits; freeze the whole block with `snapshot.py`, then split with `~/doctrina-commit-kit/split_block.py` (tokens/lib, components, page, specs, docs). Numbering keeps growing across the parts.
- **Build, then restart the server, then test.** `npm run verify` replaces `.next`; a running `next start` serves a stale build and navigations with a hash fail in strange ways (four specs, a long detour). Never run a suite right after a build without restarting.
- **A full suite takes 3.2–5.8 minutes and the machine can be the problem.** Hundreds of `gk` processes (GitLens/GitKraken in Pedro's editor) and Codex's OCR drove the load to 200 at 01:25; check `uptime` first, wait for it, do not kill other tools' processes.
- **Verifier brief that worked** (Sonnet, `general-purpose`, `model: sonnet`): read-only on `src`, `e2e`, `tools`, `docs` except one report file; no builds and no server restarts; scratch under `~/doctrina-scratch/…`; the proposal's CSS/JS served on port 8098 as the reference; a numbered list of checks (computed styles, frames, keyboard, touch, reduced motion, axe-by-hand, edge states); a time cap; reply with the verdict and the top defects only. Its findings were real every time (a keyboard hole, a landing jump, a sheet covering the tapped verse, a no-break space in a citation): fix them in the same block and record the report in the repo.
- **Frame specs:** sample from before the click, time from the first moving frame, assert monotonic and bounded duration, add a reduced-motion twin (a «no frame between the end values» check). They caught the picker's 14 px stop and the arrival's 47 px jump.
- **A Codex runner at its cap does not move for hours.** `night6` sat at 80 % from 01:29 with a 15-minute poll; the Fathers' files arrive in the window after its reset (`~/codex-night6-run.log`, `docs/research/sources/fathers-corpus-en.md`).
- **Stopping cleanly:** when Pedro asks to stop, finish only what is cheap, write the handoff in `docs/features/reader-05.md`, update ROADMAP and DECISIONS, leave unfrozen work marked as such, and say which spec is `fixme` and why.

## Rules learned on 2026-10-26 (the day: blocks of the navigation, one session)

- **Apply the kit with explicit prefixes, never bare.** `apply.sh` with no arguments replays every block folder in the kit root; applied ones must be moved into `applied/` (the agent does it after Pedro applies). A bare run after a partial history copies old snapshots over newer files and pushes regressions; the fix is `git checkout <last good commit> -- <files>` and a commit, not a force push.
- **Check the kit against the tree before trusting it:** compare each file with the last block that contains it (by number, not by name order) to see what a replay would change.
- **A moved file needs the old path in `deleted.txt`** of the commit that moves it (the snapshot does not see an untracked file as deleted).
- **Weekly cost, measured:** 72 → 74 % for seven blocks and their specs, no subagent; one full suite per block, run in the background and awaited with a Monitor.
- **Specs for a motion that uses `clip-path`:** parse the computed value (three values, `calc()` with exponents) and measure the visible part, not the box.
- **When Pedro says stop:** kill the suite and the server, freeze with `snapshot.py` and `split_block.py`, overwrite «Current state», write the handoff, and say exactly what was never run.
- **A gap in the kit numbers breaks `apply.sh $(seq A B)` (2026-10-26):** block 117 was never made; the glob for it matched nothing, `set -e` stopped the script after 116, and the older snapshots of 107–116 stayed copied over the newer files (the build and CI failed). Hand Pedro the explicit list of existing folders (`ls ~/doctrina-commit-kit | grep -E '^[0-9]'`), never a range; if a partial apply happens, replay the later blocks' files in order into the working tree (a copy, no git) and typecheck before anything else.
- **A ceiling is a landing, not a cliff (Pedro, 2026-10-26):** when the weekly reaches the number, finish the block in hand and write the state to the repo (ROADMAP, the feature doc's handoff, DECISIONS, lessons), then stop.
- **macOS `sed -i` needs an empty suffix (`sed -i ''`), and `#` delimiters collide with regexes: edit files with a small python script instead.**
- **Never run `snapshot.py block` twice with the same name:** the second run replaces the folder with only the files changed since the first (2026-10-26: block 147-all lost five of six files; recovered by copying them from the working tree). If a doc needs a fix after a freeze, edit it and freeze a new block, or copy the file into the right split part by hand.
- **A file reverted to its committed version is invisible to `snapshot.py`** (it only lists files that differ from HEAD), so the kit would replay an earlier block's version of it (2026-10-28: `chapter-grid.tsx` changed in 209, restored in 217). After freezing, replay check: for every file in the session's blocks, the last block's copy must equal the working tree; copy a missing reverted file into the last block by hand.

- **Approved artifact = checklist (Pedro, 2026-10-26: «no copiaste toda esa UI, está a medias»).** The whole method, validated on the home (2026-10-28): `docs/playbooks/build-approved-design.md`. When a screen or component was approved in an artifact, before building: open the artifact's local code (`docs/research/proposals/...`), list every element, label, state, motion and measurement of the part in question in the feature doc (one line each), build all of it, then screenshot ours and the artifact at the same size, theme and state, side by side (`npm run compare`, `npm run shot`), and tick each line. A block that builds «the function» of an approved component without its labels, dropdowns, transitions and item designs is not done. The current build's own improvements (Pedro's exceptions, e.g. the panel title «Tus notas») are listed in the feature doc as exceptions.
- **A browser-gesture bug is part of the page (2026-10-26):** a page that moves under the trackpad (sticky strip with negative margins, nested scrollers) can trigger the browser's history swipe; test vertical scrolling repeatedly with a trackpad-like input and check `overscroll-behavior` and any horizontal overflow before calling a reader page done.
- **The hook that blocks git writes reads the whole Bash command text:** a heredoc or a `python3 -` script that contains the words of a git write command is blocked even when it only writes a doc. Write such text with the Write tool to a scratch file and append it with `cat`.

## Rules learned on 2026-10-26 (night: blocks 155–161, the reader's corrections)
- **To copy an approved component, dump measures instead of eyeballing (worked in block 157).** A short Playwright script prints, for the artifact (`file://…/proposals/…html`) and for the build, the same elements' box, padding, radius, font size and weight, colour; then crops of the menus side by side (PIL) for what numbers do not say (texture, tone). It found a 40 px pill that had to be 34, a menu 881 px tall that had to be 480 and a heading that read differently.
- **Never build while the full suite runs.** `npm run build` swaps `.next` under the server the suite is using; wait for the `SUITE_DONE` marker (Monitor), and do doc work meanwhile.
- **Finishing the rewrite of a shared component means deleting the old one in the same block** (`filter-select.tsx`, `father-text.tsx`, `father-panel.tsx`), and adding the deleted paths to the kit part's `deleted.txt`: `snapshot.py` does not carry deletions.
- **Do not reach for `git rm --cached` to «remove» a file: the hook blocks every staging command; `rm` the file and let Pedro's `git add` record it.**
- **When the kit's `snapshot.py` ran for several blocks at once, split by feature with `split_block.py`, docs in the last part.**

## Rules learned on 2026-10-27 (round-2 review of the reader)
- **A state that «appears at once at the end» is a delayed property, not the animation: sample the real computed property per frame in both directions.** The tree's text and border showed only after the slide because the aside's `visibility` kept `drawer-motion`'s 260 ms delay; a rAF sample of `visibility` and the box width found it in one run. When a new utility sets `transition`, check which older utility sets it on the same element (an id selector beats both).
- **Motion on a panel is judged on the whole panel, not on the rows.** FLIP on the list's rows left the blocks around the list jumping when the list emptied; every block that can change height or appear needs the same treatment, and the spec samples the neighbours' tops.
- **A mark that is added for a moment is removed in the same place, both halves together** (`data-marked` and `data-arrived` left at different times; the border stayed forever). The spec asserts the end state of every part of the mark.
- **When a transition lengthens, specs that click or measure right after the trigger must wait for it** (the strip's 380 ms margin and the menus' 340 ms reveal made four specs flaky): add the wait in the spec, never shorten the animation for the test.

## Rules learned on 2026-10-27 (eighth session: D1, D2, P1)
- **A spec that reads the clock after an event is a load test, not a motion test.** With the machine at load 100–180 (GitKraken, Codex) a «+500 ms after» sample landed at the end of the fade and four timing specs failed in the full suite and passed alone (20 of 20 repeats). Sample in the page (a `requestAnimationFrame` collector installed with `addInitScript`) and assert on the frames (a frame where both parts are partial), never on a `waitForTimeout`. Re-run failures alone with `--repeat-each` before calling them defects.
- **Copy an approved component's text sizes by dumping both boxes, then look at the widths first.** The «Citar» button was 102 px against the artifact's 52 because `CopyButton` reserved the width of its «copiado» label; one dump of both rows found it.
- **Check what a new list shows against the data, not only the layout.** The translations list printed the Douay-Rheims text of the neighbouring verse because its numbering differs; the existing `numberingDiffers` already knew.
- **One block's height animation drives the blocks below it; do not translate them as well.** In `flipBlocks` the second measure is taken after the persistent blocks' height animations start (their first frame is the old height), so followers need no translate.
- **A background suite and a build are exclusive:** the suite owns `.next`; do docs only until `SUITE_DONE`.
- **Take a screenshot of every state a layout change can touch, not only the one asked for (P4).** The first P4 build looked right with the verse text and broke «Tus notas» (a `translate` on an ancestor re-anchored its `fixed` panel); the second screenshot, with that panel open, found it before any spec did.
- **A bound set at the measured value is a flaky spec.** The tab-indicator spec asserted «> 200 ms» for a slide that visibly ends at about 195–200 ms (the curve is steep at the end); it failed in two full suites and passed alone. Set bounds from the curve's own number, not from the nominal duration.

## Rules learned on 2026-10-27 (night: the continuous scroll)
- **When a structural change breaks ~100 specs, look for the one or two causes before touching a spec.** Mounting the previous chapter at load moved the page away from scroll 0, and a panel per mounted chapter made every `aside` locator ambiguous: lazily prepending and rendering the panels in one live instance dropped the failures from ~100 to 7, and those 7 were the behaviours Pedro had decided to change. Change the product to keep the old invariant (page at 0, one panel) before rewriting specs.
- **Probe the feature in the real browser before running the suite:** a 20-line spec that scrolls and prints `scrollY`, the sections and the URL found the wrong initial position, the stale tree, the Lenis limit and the one-chapter-too-far arrow in minutes, each of which a suite would have shown as a wall of red.
- **A tool's own behaviour can look like a product bug.** `locator.click()` scrolls the page by itself when the page is far down and the target is the sticky strip (a constant ≈ 439 px); I first read it as drift in the app. Reproduce with the raw mouse (`page.mouse.click` at the box) or an in-page `element.click()` before blaming the code.
- **A third-party animator can silently stop.** Lenis' own `scrollTo` with a duration created its animation and stopped it (`animate.running=false`) on the second upward call; expose the instance in a probe and read its state instead of guessing. Driving the motion per frame with `immediate` positions is boring and works.
- **Anything that shifts the document under a running smooth scroll breaks its absolute target** (a chapter mounted above): pause the code that mounts content while `isSmoothScrolling()`.
- **When Pedro says «guardá todo y armá el traspaso», write the decisions in his words first (DECISIONS), then the ordered queue in ROADMAP «Current state», then memory, and only then the prompt; never start a task from the notes.**
- 2026-10-27 · **A runner cap at or above the Codex prompt's own stop line makes a wake-up loop.** `ui1` started with `SESSION_CAP=80` while the prompt says «no new step at 75 %»: Codex woke at 77 %, replied «blocked» (~49k tokens) and exited 0, and the runner woke it again at once → set the runner's cap below the prompt's (74 here), and tell Codex in the resume message to end with one line, without reading anything, when the window is above its line.

## Rules learned on 2026-10-27 (tenth session)
- **To tell whether a failing spec is yours, build HEAD and rerun it: `git show HEAD:<file>` into the touched files (keep copies of yours in the scratchpad), `npm run build`, run the spec, restore, rebuild.** Reading with `git show` is allowed; `stash` and `checkout` are blocked. Done for `reader-parallel` (fails on HEAD too).
- **Specs run against `next start -p 3100` and reuse whatever is on that port; a dev server there makes timing specs fail on hydration (hover, fade), not on the code.** Build first and let Playwright start the production server.
- **An approved artifact is measured, not eyeballed (Pedro, 2026-10-27, the pen icon, third time).** Load its file in Playwright, take `getBoundingClientRect` of every element of the chosen option at each width (and in its hover/pressed states), write the numbers in the feature doc, measure the build the same way, compare, and read the artifact's script for behaviour (hover previews are part of the design). Scripts: `measure-artifact` / `measure-app` pattern in the scratchpad.
- **Check alignment on every format and state the user can be in, with the ink, not the boxes (Pedro, 2026-10-27, pen icon, fifth message).** I measured «Un versículo por línea» only; the user was probably in «En párrafo», where the icon was 5 px low. Compare dark pixels per element in 4× screenshots of the artifact and the build, for each format (lines, paragraph), width (wide, phone) and state (card, label).
- **When Pedro gives exact distances, implement them as CSS boxes first and test them as numbers (Pedro, 2026-10-27, «8px, 5px, 8px»).** I had been matching an artifact by eye and layering my own choices (an indent on every verse, a 20 px gap); his two plain rules replaced all of it. State the rule in one line in the spec title, assert it in pixels in every layout (lines, phone, «En párrafo»), and list what else it changes.

## Rules learned on 2026-10-28 (tenth session close: T4 and the far-jump hunt)
- **A/B a flaky spec on production builds, interleaved, 3 repeats each, same minute.** `next dev` after many file swaps (HMR) gave misleading A/B results; the machine load (15–110) moves pass rates by 20 points; one pair of runs proves nothing. Build each variant, run A, B, A, B.
- **Bisect by removing one thing at a time and keep copies in the scratchpad (`git show HEAD:path` for the clean side).** The dev-server variant that finally explained the regression was found by reading a scroll log, not by more A/B.
- **When a hunt finds nothing after ~100 randomised runs, stop, record the recipe and the logger, and say so.** Pedro parked T4b rather than pay for more.
- **Pedro, when he is away: no interaction, freeze each block for the morning (commit kit), cautious UI (smooth motion measured per frame, design system, approved artifact to the letter).** Do not wait for commits.

## Rules learned on 2026-10-28 (eleventh session: an overnight run alone)

- **Do not stop for a small cost estimate.** The weekly usage moved about 1 point over fourteen blocks; Pedro told the agent to run until the ceiling and then save, not to forecast. Check `usage-guard` between blocks and keep going.
- **Freeze with the kit and strip the docs out of each block** (`rm -rf <block>/files/docs`): `snapshot.py` takes every changed file, including docs that belong to the last «docs» commit. A file edited after its freeze goes into the next block, not back into the old one (or copy it in and update `manifest.json`).
- **Run the dev checks against a fresh production server.** A stale `next start` on 3100 served pages from the previous build and hid a fix for twenty minutes: `lsof -i :3100` and kill before `npm run build`.
- **Measure data quality by reading, not only by metric.** The red-letter alignment scored 98.9 % precision against the KJV and still showed edge glitches in half of a 12-verse hand-check of the other editions; the sample decided not to ship them.
- **Proposals built as artifacts from a script** (a Python template with `/*DATA*/` replaced by real corpus text, a `node --check` of the page script, then publish) took one pass each; keep the real text in the demos.
- **One independent review at the end of a long run is worth it.** The Sonnet reader found two real bugs (an undo reversed by the next tick, an English route that 404s) that the specs did not cover; give it the file list and ask for failing scenarios.
- **Codex stops at the quota and the runner keeps probing every four minutes**; nothing to restart. Its drafts in `data/corpus/fathers/` stay unwired until an independent reader approves them.
