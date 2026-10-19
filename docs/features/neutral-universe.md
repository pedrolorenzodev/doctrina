# Neutral source universe

The closed universe of sources for the neutral sections (earliest witnesses, history of each doctrine, screen 09 history entities): early Christian writers to the patristic cutoff, councils and synods, and the movements they condemned. Same role as `docs/research/traditions/` for the tradition columns: later doctrine agents search only inside it. Deleted when done (lessons go to `docs/playbooks/research-fanout.md` via `/retro`).

## Plan (/plan-run, 2026-10-17)

- **Type:** `research-fanout` (last validated 2026-10-17).
- **Goal and done-criterion:** four files in `docs/research/neutral/` per `docs/research/neutral/BRIEF.md`, each with Progress "done", then a verification pass and corrections. Content per entity as Pedro accepted on 2026-10-17 (recommended content): sourced birth and death dates with their debate, offices and places, writing language; works with dates and a neutral description; authenticity and transmission (recensions, loss and recovery); best critical edition and free translations under the licensing rules.
- **Bounded by:** DECISIONS 2026-10-09 (licensing: full text only if free in the US, Spain and all Latin America; no permissions; texts from dated print scans; three-level Spanish); 2026-10-06 (dates and attribution conventions, unknown births, each work's own date and authenticity in its reader); 2026-10-14 (exact dates on timelines); PROJECT.md (Fathers never assigned to a modern tradition). ROADMAP screen 09 notes.
- **Patristic cutoff:** still open in ROADMAP ("Decide"). Working scope: to John of Damascus (d. c. 749), the conventional end, so nothing is lost if Pedro picks an earlier one; flagged as an open question.
- **Out of scope:** what each writer teaches on each doctrine (that is the doctrine dossiers' `shared.md`); modern tradition claims on the Fathers (in the tradition maps); the Oriental churches' later writers beyond those the councils name.
- **Setup:**

  | Role | Model · effort | Writes | Starts after |
  |---|---|---|---|
  | A · writers to 325 | Opus · high | `docs/research/neutral/writers-to-325.md` | now |
  | B · Greek and Syriac writers 325–749 | Opus · high | `…/writers-greek-syriac.md` | a slot frees |
  | C · Latin writers 325–749 | Opus · high | `…/writers-latin.md` | a slot frees |
  | D · councils, synods, condemned movements | Opus · high | `…/councils-movements.md` | a slot frees |
  | Verifier | Sonnet | `…/verification.md` | all four |

- **Expected cost:** Opus research measured ~0.3 session points per agent-minute (agent-ops sizing); ~60–90 min each → ~20–25 points per agent, ~90 in all plus verification.
- **Risks:** scale (dozens of writers): the brief tiers them so the file stays usable; New Advent and modern copyrighted translations (Tanner, ACW, Fathers of the Church series) must not be cited as editions.
- **Checks during the run:** usage watcher; mtime every 15 min; grep outputs for forbidden sources.

## Retro

(filled by /retro)
