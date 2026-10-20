# Agent operations (base for every playbook)

How to run subagents on Pedro's account, and research on his Codex agent. Every other playbook assumes this one. Last validated: 2026-10-20.

## Models

| Model | For | Notes |
|---|---|---|
| Sonnet | Mechanical work: fetching, downloading, OCR, link checks, exact-string verification | Default for anything without judgment. |
| Opus (effort high) | Judgment: synthesis, licensing calls, applying corrections, consistency, briefs | Default for research areas. |
| Fable | Where judgment dominates: simulated expert review, hostile critic, hard synthesis | At most one Fable agent at a time. Costs ~2.5× Opus per token and still counts against the 5-hour session. Its weekly bar is separate; whether it also counts against the all-models weekly bar is unmeasured. |

## Sizing (measured; add a row after every run)

| Setup | Session use | Date |
|---|---|---|
| 6 agents, 4 on Fable | ~2.5 % / min | 2026-10-14 |
| 3–4 agents, Opus/Sonnet | ~0.2 % / min | 2026-10-15 |
| 2 Opus research agents, ~7 min each | ~4 points of session | 2026-10-17 |
| 1 Opus agent, web + Playwright screenshots, 11 min | ~5 points of session, ~1 weekly point | 2026-10-19 |
| 1 Opus agent, Playwright frame analysis, 11 min | ~4 points of session, ~1 weekly point | 2026-10-19 |

- At once: 2–3 Opus + at most 1 Fable; Sonnet as needed.
- Before a batch of a new shape: run one agent of each model for ~5 min and measure.
- Rough conversion seen once (2026-10-15): ~8 session points ≈ 1 weekly point. Re-measure.
- Usage counts the whole account, including Pedro's other sessions.

## Usage guard

Use Pedro's `usage-guard` skill (user skill, outside the repo) for any run with subagents: one-off check before launching, Monitor every 5 min. Thresholds: the ones Pedro sets for the run (he changes them often; the week's plan is in agent memory `usage-plan-oct-2026`); if he set none, 65 % no new agents; 70 % checkpoint message to every running agent; 75 % hard stop; weekly 80 % warn Pedro. Re-arm the Monitor before its 30-minute expiry.

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

- 2026-10-14 · Six agents with four on Fable burned ~2.5 %/min unannounced → measure-first rule and the Fable limit.
- 2026-10-14 · Stopping a parent left a helper running → `ListAgents` after stopping.
- 2026-10-15 · The consistency agent wrote its log only at the end of 58 min → the 15-minute mtime check.
- 2026-10-15 · Apply agents reported each other's diffs as unknown → brief item 6 (siblings).
- 2026-10-15 · A handoff's "the other session owns DECISIONS" outlived its reason → ownership rules state reason and expiry.
- 2026-10-20 · The overnight Codex watchdog script failed on every attempt (`unexpected argument '-s'`, a flag written from memory) and nothing reported it; Codex finished on its own → test any unattended script once, end to end, before leaving it running.
