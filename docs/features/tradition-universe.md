# Tradition source universe

Working doc for an in-flight piece of work, handed from one session to another on 2026-10-15. Deleted when done (what matters moves to `DECISIONS.md`).

## Intent

Map, once, every official and recognized source of each of the six traditions (authority grades, tiered canon, editions, doctrine index), so that per-doctrine research later searches only inside that universe. Then rebuild the Eucharist pilot's content per tradition inside it, then review it with simulated experts.

Order agreed with Pedro on 2026-10-14, and why: reviewing unpolished content wastes the review, and content written without knowing what is normative for a tradition is written in someone else's mould. So: universe → content → expert review. The shared brief the research agents followed is `docs/research/traditions/BRIEF.md`.

## State (2026-10-15)

| Map | Status | Verification |
|---|---|---|
| `catholic.md` | done | `verification-catholic.md` |
| `orthodox.md` | done | **not verified** |
| `lutheran.md` | done | `verification-lutheran-reformed.md` |
| `reformed.md` | done | `verification-lutheran-reformed.md` |
| `baptist.md` | done | `verification-baptist-pentecostal.md` |
| `pentecostal.md` | done | `verification-baptist-pentecostal.md` |

No verification correction has been applied to any map yet. Subagents' raw notes and samples are in the previous session's scratchpad (`/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/8d9ad552-8a75-4987-ad1b-163a94be89d5/scratchpad/traditions/`); `/private/tmp` does not survive a reboot, so treat them as optional. Anything that matters is already in the maps (the Baptist map copied its helper's evidence into its raw log).

## Rules for the session running this

- **File ownership.** Write only in `docs/research/traditions/` and this file. Another session (design screens) owns `ROADMAP.md`, `DECISIONS.md`, `PROJECT.md`, `data/` and code: never edit them. When something must be recorded there, tell Pedro and he passes it on.
- **Don't decide the open questions below.** They define the product and touch neutrality. Lay out options with a recommendation and stop for Pedro.
- **Trust invariants** (`AGENTS.md`): no claim without a citation; keep the `[verified]` / `[snippet]` / `[memory]` tags honest; when a verification corrects a claim, update the claim and its tag, never silently.
- **Never read or use unlicensed copies of in-copyright books.** The Catholic map's Denzinger–Hünermann numbers were read from an unlicensed archive.org scan: never cite or link it; confirm DH numbers only against legitimate sources (Holy See texts that print DS/DH numbers, public-domain Denzinger editions), else leave them unconfirmed.
- No git writes (`AGENTS.md`, Git rule 1). Talk to Pedro in Spanish, briefly.

## Remaining steps, in order

1. **Verify `orthodox.md`.** Sonnet; same method and format as the other `verification-*.md` files; writes only `verification-orthodox.md`.
2. **Apply every correction** from the four `verification-*.md` files to its map: update the claim, its tag and its source. Opus, effort high; one agent per map (disjoint files) or one sequential agent. Record in each map's Progress block which verification items were applied.
3. **Cross-tradition consistency pass.** Opus, effort high. Same section structure and tag usage in all six maps; shared items told the same way everywhere (creeds, the seven councils, editions of shared texts); doctrine-index loci named identically; no map presenting a Father as belonging to it. Writes `consistency.md` with what it changed and what it couldn't.
4. **Open questions with Pedro.** Present the list below as one short page with a recommendation each, in Spanish. Pedro decides; the design session records the decisions in `DECISIONS.md`.
5. **Blocked until step 4:** rebuild the Eucharist content per tradition inside the universe (structure agreed for screens 02–04 in `ROADMAP.md`), then a simulated-expert review per tradition plus a hostile critic.

Proposed by the agent, **not yet approved by Pedro**; ask before starting: (a) a neutral universe for the shared sections (the 56 Fathers, 41 councils and 18 heresies in `data/`: works with dates and neutral descriptions, authenticity and transmission history such as Ignatius' recensions, sourced birth and death dates, best editions), which screen 09's "Sus escritos" and "Fechas y autenticidad" need; (b) a prototype of the scan → OCR → numbered divisions → collation pipeline on one real work, measuring error rate and cost at scale.

## Open questions for Pedro

Details and options live in section 10 of each map; this is the index.

- **Which family speaks for the tradition** (the biggest one; the current pilot already mixes families, against the 2026-10-14 rule of no sub-families in one presentation): Reformed (§10.1: Westminster, Three Forms, both, or INPM's list; §10.2 whether PC(USA) counts), Baptist (§10.1: SBC line, 1689, both, or adding Free Will), Pentecostal (§10.1 options a–d; §10.4 Oneness; §10.5 neo-Pentecostals).
- **Which tiers each column quotes:** Catholic (§10.1 universal magisterium only or also CELAM; §10.4 Eastern Catholic liturgies; §10.8 JDDJ), Orthodox (§10.1 councils, Crete's list, 17th-century confessions with critique; §10.6 Crete 2016; §10.7 Philaret vs ROC 2020), Lutheran (§10.1 whole Book of Concord or LWF minimum; §10.4 body statements; §10.5 Luther quotes), Pentecostal (§10.6 AG position papers).
- **Labels:** Catholic grade labels (§10.2), Vatican II default grade (§10.3), councils count (§10.6), "ex cathedra" only on the two Marian definitions (§10.7).
- **Which text or numbering:** Westminster 1647 vs revisions (Reformed §10.3), Heidelberg Q80 and anti-papal passages (Reformed §10.4), Apology numbering (Lutheran §10.3), New Hampshire 1853 (Baptist §10.4), AG 1916 vs current (Pentecostal §10.2), Greek vs Russian usage (Orthodox §10.2).
- **Spanish and copyright:** BF&M 2000 and Spanish 1689 (Baptist §10.2–3), Lutheran Spanish (§10.6), Orthodox Spanish (§10.3), Reformed Spanish weighing the family choice (§10.6), LEV "quote + link" (Catholic §10.5), AG permission (Pentecostal §10.2).
- **Smaller:** IERP (Lutheran §10.2), Calvin for INPM (Reformed §10.5), Spain without a Reformed body (Reformed §10.7), Spanish-speaking Orthodox jurisdictions (§10.4), Palamite texts (§10.5), Orthodox catechisms not mapped (§10.8), Baptist 1925 "five points" (§10.5) and Spanish voices (§10.6).

## Known errors in the current Eucharist pilot

- New Hampshire is cited as "1833, Art. 14": the numbering is the 1853 revision's and no copy of the 1833 text is known (`baptist.md`; `data/site/sources.extra.json` labels a gracegems "1853" page as 1833).
- Reformed citations mix Westminster 29.5, Heidelberg Q78 and Belgic 35 under one voice (`reformed.md` §10.1).
- The official Spanish BF&M page still shows Article VI before its 2023 amendment (`baptist.md`).
- Westminster 31.3/31.4 ("councils may err") are swapped in `reformed.md` itself; fixed in step 2.

## Running agents on Pedro's account

- Pedro shares the account and keeps each 5-hour session under ~80%; he reports usage and may ask to stop agents. Six agents in parallel (four on Fable) burned ~2.5% of a session per minute; two or three on Opus at a time is sustainable. Fable costs ~2.5× Opus per token and still counts against the session; keep it for steps where judgment dominates.
- Stopping an agent does not stop the subagents it spawned: after stopping, check `ListAgents` and stop them too. Agents may spawn subagents (Pedro wants that allowed).
- A stopped agent resumes with its context, but its model and effort can't change; to change them, launch a new agent that reads the file's Progress block. Every agent writes findings to its file as it goes, with a Progress block at the top, so a stop loses at most the current item.
- The shared web-search quota ran out during long runs; agents fell back to direct fetches, catalog APIs and archive.org. Plan the most search-heavy items first.

## Done when

All six maps verified and corrected, the consistency pass done, Pedro's answers recorded in `DECISIONS.md`. Then this file is deleted and the Eucharist rebuild starts with its own feature doc.
