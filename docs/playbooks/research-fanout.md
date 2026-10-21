# Research fan-out

A question that needs many sources across areas, one agent per area. Examples: the overnight source inventory (2026-10-09), the tradition source universe (2026-10-14), the neutral universe of Fathers, councils and heresies. Not for a single fact (search directly) or a pass over an existing file (`verification-pass.md`). Read `agent-ops.md` first. Last validated: 2026-10-21 (retro of the neutral-universe run).

## Before launching

1. Read `DECISIONS.md` for rules that bound the research: licensing (full text only if free in the US, Spain and all of Latin America; no permissions for now; never unlicensed copies), translation policy, scope (which traditions and families speak).
2. Settle scope questions with Pedro before launch (which entities, which families, how deep). Ask every blocking question in one round.
3. `/plan-run research-fanout`: areas, one output file per agent, models, expected session %, done-criterion.
4. Write a shared `BRIEF.md` in the output folder: the common rules, the section structure each file must follow, the tag legend. Each agent's prompt adds only its area.

## Running

- Search-heavy items first; the shared WebSearch quota ran out in both long runs.
- Each agent writes as it goes, with a Progress block (`agent-ops.md`, control).
- If an area is too big for one agent, the agent may spawn sub-streams with disjoint scratch files and merge them itself.

## After

1. Always a `verification-pass.md` before anything depends on the claims. Every pass so far found real errors.
2. If several reports answer parts of one question, add one cross-report critic (Opus). On 2026-10-09 it found the run's biggest problem, which no area agent owned: 21 of the 44 registry entries cite New Advent.
3. Then `apply-corrections.md`, and its consistency variant if the outputs must line up with each other.
4. Open questions the research raises go to Pedro through `decisions-page.md`; the research never decides them.
5. `/retro`.

## Done when

- [ ] Every claim tagged; no claim without a source.
- [ ] No forbidden source read or cited (grep the outputs).
- [ ] Every file's Progress block says done, or lists exactly what is left.
- [ ] Verification and corrections applied, or recorded as pending in `ROADMAP.md` (not only in memory).
- [ ] Retro run and its changes approved.

## Lessons

- 2026-10-09 · A cross-report critic found what no area agent owned → step After 2.
- 2026-10-09 · Skipped verifications were tracked only in private memory → "Done when" item 4.
- 2026-10-14 · A research agent read an unlicensed Denzinger scan despite the brief → the coordinator greps outputs; the verifier checks for it too.
- 2026-10-17 · Neutral universe (dozens of writers, four area agents, one verifier): the shared BRIEF tiered the entities so each file stayed usable (tier 1 full entries, tier 2 one paragraph, the rest listed only); the first area file still left ~220 claims as [memory], so the verification pass was required, not optional → tier in the brief; plan the pass with the run.
- 2026-10-17 · Area A found Brepols' open Clavis Clavium (guest ticket, no login) serving CPG and CPL entries; New Advent and modern copyrighted translations (Tanner, ACW, Fathers of the Church) must not be cited as editions → catalogue numbers come from Clavis Clavium; the method is in `docs/research/neutral/writers-to-325.md` §5.
- 2026-10-17 · The patristic cutoff was still open at launch → the run used the conventional end (John of Damascus, d. c. 749) so nothing is lost if Pedro picks an earlier one; flag the open scope in the brief.
- 2026-10-14 · The Orthodox/Pentecostal scope was settled with Pedro in minutes before launch; the family split per tradition was not, and became the largest set of open questions → settle entity scope first.
