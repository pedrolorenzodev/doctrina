---
name: retro
description: Close a Doctrina run with a short after-action review that ends in concrete changes to its playbook. Use when a planned run (/plan-run) ends, is stopped for good, or Pedro rejects its output, and before deleting its feature doc.
---

# Retro

1. **Gather the numbers** from the plan in `docs/features/<task>.md`, the agents' reports and the usage script: agents planned vs launched, models, minutes, session % at start and end, weekly % change, rework passes, items Pedro rejected or corrected.
2. **Write the four answers** under `## Retro` in the feature doc, briefly:
   1. What was supposed to happen (from the plan).
   2. What actually happened (numbers first).
   3. Why the differences.
   4. Changes: 1–5 concrete edits, each to a named file with a checkable end state (a playbook step, a checklist item, a sizing-table row, a hook, a line in `AGENTS.md`). A change to the system beats a note to remember. Prefer: wrong twice → a rule in the playbook or `AGENTS.md`; must always happen → a hook.
3. **Ask Pedro** in Spanish: the four answers in a few lines and the list of changes; "¿los aplico? (sí / cuáles no)".
4. **Apply the approved changes**: edit the playbook(s), add a dated line to their "Lessons" (what happened → what changed), add the run's numbers to the sizing table, update "Last validated". A change to a project rule (not just a method step) also gets a `DECISIONS.md` entry with its why.
5. **Close the feature doc**: anything else that matters moves to `DECISIONS.md` or `ROADMAP.md`, then delete the file, per `AGENTS.md`. Hand Pedro the commit message.

Rejected changes are noted in the retro with Pedro's reason, not applied.
