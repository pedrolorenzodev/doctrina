# Justification, Catholic pilot

The Catholic dossier on justification, through verification, expert and critic, so Pedro reviews it together with the Eucharist pilot. The other five traditions wait for his notes on both pilots. Deleted when done (lessons go to `docs/playbooks/content-dossier.md` via `/retro`).

## Plan (/plan-run, 2026-10-17)

- **Type:** `content-dossier` (first run in progress on the Eucharist; this second pilot runs before Pedro's notes on the first, by his choice of option A on 2026-10-17 at 22:40).
- **Goal and done-criterion:** `docs/research/doctrines/justification/catholic.md`, verified, reviewed by a simulated Catholic expert and a hostile critic, corrected, with its questions for Pedro listed. Pedro's review is a later step (same Artifact shape as the Eucharist pilot).
- **Bounded by:** the same decisions as `docs/features/eucharist-rebuild.md` ("Bounded by"), plus what the Eucharist pilot's reviews taught: attribute every closing line to the Church ("Para la Iglesia católica, …" or a quote), never in the site's voice; state the grading method once; each objection quotes the objector's strongest official text and proof texts; balance rule (when the Catholic answer grows, the objector's strongest text goes in too); coverage table honest about what was not searched.
- **Out of scope:** the other five traditions; `shared.md`; `data/`; design changes.
- **Setup:**

  | Role | Model · effort | Writes | Starts after |
  |---|---|---|---|
  | Catholic dossier | Opus · high | `docs/research/doctrines/justification/catholic.md` | now |
  | Verifier | Sonnet | `…/verification-catholic.md` | dossier done |
  | Simulated Catholic expert | Fable | `…/review-catholic.md` | dossier done |
  | Hostile critic | Fable | `…/critic-catholic.md` | expert done |
  | Apply corrections | Opus · high | `catholic.md` | all three |

- **Expected cost:** Eucharist pilot measured ~32 session points for the two Fable reviews (20 min); draft ~55 min Opus. Estimate 55–65 session points in all.
- **Risks:** a second pilot before Pedro's notes may repeat an approach error he would have caught (accepted with option A); the Lutheran and Reformed objections are the heart of this doctrine, so the objector side must be as strong as the Catholic side (Joint Declaration 1999 and its reception are in the maps).
- **Checks during the run:** usage watcher (85 % no new agents, 92 % checkpoint); output mtime every 15 min; grep for forbidden sources.

## Retro

(filled by /retro)
