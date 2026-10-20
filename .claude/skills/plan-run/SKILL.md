---
name: plan-run
description: Plan a Doctrina task before running it. Picks the playbook for the task type in docs/playbooks/, checks DECISIONS.md, writes the plan into docs/features/<task>.md and asks Pedro to approve. Use before any task that launches subagents or repeats a known task type (research fan-out, verification, applying corrections, content dossier, debate objections, design proposal, decisions page), and before writing a playbook for a new task type.
---

# Plan a run

Argument: the task type (a playbook name), e.g. `/plan-run research-fanout`. No argument: infer the type from the request and say which.

1. **Pick the playbook.** Read `docs/playbooks/agent-ops.md` and `docs/playbooks/<type>.md`. If no playbook fits, the task is a new type: write `docs/playbooks/<new-type>.md` first (same sections as the others: use when / steps / done when / lessons), show it to Pedro and wait for his ok.
2. **Check what bounds it.** Read `docs/ROADMAP.md` ("Current state" and the task's item) and every `DECISIONS.md` entry that applies (licensing, scope, who speaks, translation, process). List them in the plan with their dates.
3. **Write the plan** in `docs/features/<task>.md` (create it; it also holds the intent, acceptance criteria and out-of-scope that `AGENTS.md` asks for):

   ```markdown
   ## Plan (/plan-run, <date>)
   - Type: <playbook> (last validated <date>)
   - Goal and done-criterion: …
   - Bounded by: DECISIONS <date> <title>; …
   - Out of scope: …
   - Setup:
     | Role | Model · effort | Writes | Starts after |
   - Expected cost: <session % per window, from the playbook's sizing table or agent-ops.md>; windows needed: …
   - Risks and open questions for Pedro: …
   - Checks during the run: usage-guard; mtime every 15 min; …

   ## Retro
   (filled by /retro)
   ```
4. **Ask Pedro** in Spanish, at most 10 lines: what will run, how many agents and models, expected usage, what he must answer before launch. Wait for his ok. Small changes he asks for go into the plan before launching.
5. Then run it following the playbook. When it ends, `/retro`.

The skill only points to the playbook; method text lives in `docs/playbooks/`, never here.
