# Apply corrections (and the consistency variant)

Apply a verification file to the file it checked; then, when several files must line up, a consistency pass across them. Read `agent-ops.md` first. Last validated: 2026-10-17.

## Apply

- Opus, effort high; one agent per checked file (or per pair), disjoint files. It edits only the checked file(s); anything outside (e.g. a wrong label in `data/`) is listed in its reply for the coordinator.
- Go through the whole verification file, not only its "Wrong items" list:
  - WRONG → fix the claim, its tag and its source, everywhere it appears (indexes, tables, logs).
  - Notes with a corrected URL, date or locator → apply.
  - CONFIRMED items the file tagged `[snippet]` / `[memory]` → upgrade the tag, citing the verification item.
  - UNCONFIRMABLE → keep the claim, never as `[verified]`, with "unconfirmed in <verification file> <item>".
  - Conflicting sources → show both with their sources; don't pick silently.
- Never correct silently: a changed claim carries its source; keep the old wording beside it as "corrected <date>" when it was cited elsewhere.
- The apply agent may disagree with the verifier, with evidence, and says so.
- Don't decide open questions; if a correction touches one, add a one-line note to it.
- Progress block: items applied by ID, then "Verification applied <date>" and anything not applied with why.

## Consistency variant

After every file of a set is verified and corrected. One Opus agent (effort high) edits the set and writes `consistency.md` as it goes:
1. Same section structure and tag vocabulary in every file (rename headings at most; restructuring is listed, not done).
2. Shared items told the same way everywhere; disagreements settled on a primary source (e.g. 2026-10-15: Ephesus 431 dated from Tanner and the Catholic Encyclopedia, not Wikipedia).
3. Canonical names for anything other work will join on (e.g. the 29 doctrine loci).
4. Neutrality: no file presents a Church Father as belonging to a tradition.

## Done when

- [ ] Every verification item applied or listed as not applied with a reason.
- [ ] Outside-scope fixes listed for the coordinator, and passed to Pedro or to the owning session.
- [ ] Consistency: `consistency.md` lists every change (file, section, before → after, source) and what stays unresolved.

## Lessons

- 2026-10-15 · The consistency agent left `consistency.md` empty for an hour and wrote it at the end → the coordinator checks its mtime every 15 min.
- 2026-10-15 · An apply agent extended a licensing rule on its own (Ott's scans, same rule as Denzinger) and said so → good pattern: apply the rule's intent and report it.
