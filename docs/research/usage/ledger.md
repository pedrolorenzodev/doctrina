# Usage ledger: measuring the weekly counter against real tokens

Purpose (Pedro, 2026-11-06): a skill `estimate-weekly-usage` that answers «how many weekly points would task X spend?» from data, not from intuition. Time does not matter, only weekly points.

## What is measured
- **Weekly counter:** `usage_check.py --raw` returns `seven_day.utilization`, an **integer** (e.g. `13.0`). One reading has ±0.5 point of rounding, so a window needs ≥ 3 points to be usable.
- **Tokens:** every Claude Code session writes exact usage per message and per model to `~/.claude/projects/**/*.jsonl` (subagents included). `tools/usage/measure.py` sums them (input, output, cache read, cache write), de-duplicating streamed messages, and converts them to an **equivalent cost** with the API prices of each model (`PRICES` in the script; Sonnet 5.5, Opus 5.5, Haiku 5.5 as of 2026-11-06). The equivalent cost is a hypothesis for how the subscription counts usage: calibration tests it.
- **Not captured:** claude.ai web or desktop chats and other devices (they spend the same counter but leave no transcript). A «clean» window has none.

## Commands (from the repo root)
| Command | What it does |
|---|---|
| `python3 -I tools/usage/measure.py start <label>` | Records the counter now (writes `docs/research/usage/marks.jsonl`) |
| `python3 -I tools/usage/measure.py end <label>` | Records the counter again |
| `python3 -I tools/usage/measure.py report <label> [--project <folder-substring>]` | Tokens, equivalent cost and sessions between the marks, the counter delta, equivalent cost per point, and a ledger row to paste below |
| `python3 -I tools/usage/measure.py window --since <ISO time> [--until <ISO time>] [--project <substring>]` | Tokens of any window without marks (works for sessions already running) |
| `python3 -I tools/usage/measure.py week` | Tokens of the current week against the current counter |

## Protocol for a calibration run (a task sent alone)
1. Nothing else uses Claude (no other session working, no claude.ai chat, no other device). Idle open sessions are fine.
2. `start <label>` right before sending the prompt; `end <label>` right after the final report.
3. The window must not cross the weekly reset (Wednesday 18:00): `report` flags it.
4. Aim for ≥ 3 points of spend; smaller tasks are measured together in one window.
5. Run `report`, paste its row below, and write what the task was (type, model, subagents, how many files/tests).

## Rows
`Equivalent cost` is from the tokens of all sessions in the window. `Points` is the counter delta (`?` when the window had no marks). `Clean` = no other Claude use.

| Label | Start | Sessions | Equivalent cost | Points | Clean | Task, model, notes |
|---|---|---|---|---|---|---|
| week 2026-11-04 18:00 → 2026-11-06 14:00 | 2026-11-04 18:00 | 12 | $90.11 (Sonnet $71.92, Opus $18.18) | 13 | no (several sessions, plus Pedro's other use unknown) | Rough whole-week point: **≈ $6.9 per point** if the counter were proportional to equivalent cost. Not a calibration, only a first order of magnitude |
| ai-block-f | 2026-11-06 13:30 | 1 | $3.78 (Sonnet, one session, no subagents) | +1 as the session itself read it (12 → 13) | no (Join steps 7 to 8 ran in parallel) | Block F of the real-AI plan (contracts, providers, store, stubs, 840+ checks, 5 e2e). Plan estimate 1.5 to 2.0 points (raw) or 1.5 (×0.75). At $6.9 per point, $3.78 is ≈ 0.55 point: the counter's +1 is consistent with rounding, and the estimate was ≈ 3× too high |

Correction (2026-11-06, twice): the window of a run starts when its sessions started and ends when they ended. Both come from the transcripts (`measure.py window` prints each session's first and last message), never from the `start` mark, the time of the coordinator's reply, or the time the reports are read. Several Claude Code sessions in parallel **are** a clean window, because every transcript is captured. Only usage that leaves no transcript (claude.ai, the desktop app, another device) pollutes a window.

| tanda-1 | 2026-11-06 16:42 → 17:30 (-03), **48 min of wall time** | 4 blocks (S-SRV Opus 28 min of activity; S-UI Sonnet 34; LIM Sonnet 44; RET Sonnet 21) = **≈ 127 session-minutes**, plus this coordinator | $17.44 for the 4 blocks ($17.73 with the coordinator's $0.29): Opus $7.32, Sonnet $10.41 | **+3** (13 at launch → 16 at 17:30, the last reading of the sessions) | yes until 17:35 | Four real-AI build blocks in parallel, launched by Pedro at ≈ 16:45 (his message at 16:50 says «hace 4m») and ended 17:07, 17:10, 17:17, 17:30. **≈ $5.9 per point** (±1 point of rounding: $4.4 to $8.8) and **≈ 1.4 points per session-hour**. Consistent with the whole-week rough figure ($6.9). Earlier versions of this row measured from the start mark (16:13) or from when the reports were read: both wrong. Plan raw estimate for the 4 blocks: 9.5 points (7.1 corrected); real ≈ 3. A later reading of 19 at 20:34 is not part of this window: only $0.71 of transcripts exist after 17:35, so the +3 between 17:30 and 20:34 left no transcript |

## Calibration questions (answered by the data, in this order)
1. Is `points ≈ k × equivalent cost` stable across clean runs (spread ≤ ±25 %)?
2. Does Opus weigh what its price says (2× Sonnet) or something else? (needs one clean Opus run, or a regression over several weeks)
3. Does the cache-read price weigh what it says, or more? (the bulk of every session's tokens)
4. Do past weeks agree? Rebuild each week from the transcripts (kept ≈ 30 days) against the final counter noted in the memory files.

When 1 to 3 hold with ≥ 4 clean points, build the skill: per task type, the ledger gives the typical equivalent cost (median and range) and the skill returns `points = k × cost` with the range and the number of runs it rests on; with fewer than 3 runs of the type it answers «no data» and says which similar type to use.
