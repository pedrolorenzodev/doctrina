Status: draft, NOT verified by Pedro

# Session S2 log (2026-11-03): Pasajes, the apologists layer

## Progress
- Started 04:54 (weekly 68 %), cut by Pedro the same morning, resumed 17:07 (weekly 71 %, cap raised to 75 %). The scratchpad was cleaned overnight: corpora, crawlers and three specs were lost (see `docs/research/tools/s2/README.md`); the generated files in the repo were not.
- Queue: T1 done to the limit of the open corpus; T2 only one passage (Lutheran John 6); T3 attempted, negative; T4 done; T5 done. No verification pass (parameter of the day).

## Cost table (weekly points; integer readings; the weekly counter is shared with Pedro's other use)
| Task | Start | End | Used | Estimate | Units of work |
|---|---|---|---|---|---|
| T1 Orthodox Papacy, Orthodox Sola Scriptura, Orthodox Eucharist (tried) | 04:54, 68 % | 05:32, 69 % | ≤ 1 | part of 4 (2–8) | 2 files written or extended; 6 persons added; 287 + 2,815 pages crawled; 11 + 2 blocks |
| T2 Lutheran John 6 | 05:07, 69 % | 05:07, 69 % | < 1 | | 1 block, 1 person |
| T3 Catholic one-person sections | 05:11, 69 % | 06:28, 69 % | < 1 | | 3 crawls (Armstrong 1,470 posts, Marshall 4,184, Scripture Catholic 1 page); 0 blocks |
| T4 block defects | 05:10, 69 % | 05:11, 69 % | < 1 | | 5 defects corrected by script |
| T1 Reformed Sola Scriptura | 17:07, 71 % | 17:10, 71 % | < 1 | | 1 file, 5 persons, 5 blocks; 545 sermons crawled, negative |
| T5 tally, apologists.md, this log | 17:09, 71 % | 17:30, 71 % | < 1 | | 1 tally file |
| **Whole session** | 68 % | 71 % | **3 points** (the part from 06:28 to 17:07, 69 → 71, includes Pedro's other use of the account and cannot be attributed) | 4 (2–8) | |

## Decisions that were the agent's call
- Persons outside `apologists.md` used as agent's calls (list in `passages/apologists-tally-2026-11-02.md`). Arakaki's reposted article by Bernstein: the speaker is the one named on orthodoxinfo, not the blog's author field.
- Orthodox Papacy: the page entries are confession proof-texts nobody argues; the file records the passages Orthodox writers do argue (Matt 16:18–19, Matt 18:17–18) beside the page entries, as B5 did for the Baptist page.
- Tally unit is the file section, not the page entry (explained in the tally file).

## Verification TODO (per file; no verifier ran)
- `apologists-orthodox-papacy.md`, `apologists-orthodox-sola-scriptura.md` (S2 block), `apologists-reformed-sola-scriptura.md`, `apologists-lutheran-eucharist.md` (S2 block): every count, every «0 documents» negative claim (re-run with word forms), every byline, the standing of each new person, block edges (start/end mid-sentence), «independent» outlets.
- Catholic blocks corrected by `t4_fix.py`: re-read the six blocks.
