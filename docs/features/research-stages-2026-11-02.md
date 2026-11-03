# Research stages of 2026-11-02 (Pedro): finish the data, measure the cost, recalculate

Status: plan, estimates calculated by the agent on 2026-11-02 13:00 (not measured per task); stage 1a measured at 19:03 and the stages after it recalculated (section «Recalculated after stage 1a»). Written because Pedro asked to keep the estimates so that every agent records the usage at the start and the end of each task and compares it with the estimate.

## Parameter (Pedro, 2026-11-02)

- Goal of the day: **all the UI of the web, with all its functions visible, with the largest amount of data possible**. So the research finishes the **missing data volume** of each task; **no verification passes today** (no verifier subagents). Verification stays as a TODO list in each log and is done later, in detail.
- **Priority order for research (Pedro):** #1 the 02 pages (Baptism, Papacy, Sola Scriptura) → #4 «Usos» and #5 «Palabras» (verse panel and the Palabras page) → Pasajes verses (the complete lists) → Pasajes apologists → everything in English (#6) → the earliest and most popular Fathers in Spanish (#7) → objections. The last two are not planned yet.
- One session at a time for now. Everything in Sonnet 5.5 high.
- Baseline: Claude weekly **62 %** at 2026-11-02 11:59 (resets Wed 2026-11-04 17:59); 38 points to 100 %, shared with the UI work.

## How the estimates were calculated

Yesterday's research (rounds 1, 2, 3 and 5, readings 33 → 56 %) cost **23 weekly points for 40 «work + verifier + corrections» cycles** (~0.57 per cycle, the same in the rounds 1–3 and in round 5). A Sonnet verifier is 0.25–0.4 points (inferred, not measured directly), so the verifiers were ~10–16 of the 23 points and **producing everything yesterday cost ~7–13 points** (middle ~10): the 02 specification, the 20 scripture lists, 14 apologist files, the whole-Bible word data, 22 Spanish Father works, parallels and videos. Each task below is scaled from that unit by what is left. Translation is estimated at ~30 thousand words per point (one measurement: session C6). Margins are about ±40 %.

## Stages and estimates (weekly points, no verification)

| Stage | Task | What is left to produce | Estimate (range) | Weekly after |
|---|---|---|---|---|
| **1a** | **#1 the 02 data** | the `MISSING` registry ids and the `[unverified]`/paraphrase rows of the three `shared.md`, the withdrawn connected-edge sentences, the `silencio` / `no consultado` cells, NPNF witnesses c. 256–749 | **1** (0.5–1.5) | ~63 |
| **1a** | **#4 «Usos» / #5 «Palabras» (data)** | the Spanish gloss tail (16 % of Greek and 24 % of Hebrew words without `es`), the senses of the Greek lexicon, the Hebrew definitions from a free source; the «En los Padres» section is **not** included (no original-language Father texts) | **2.5** (2–4); allocation for the log: gloss tail 1.0, senses 0.7, Hebrew 0.8 | ~66 |
| **1b** | **Pasajes: verses** | documents not read (Florence, Lateran IV, Roman Catechism, Dei Filius, CIC, Westminster Larger and Shorter Catechism proofs, Belgic Art. 2–7 and 35, Heidelberg Eucharist, Mogila, the 1895 encyclical, FC XII), the 1688 margins of 1.1–1.3, 29.1–2, 30.7–8, the nine AC XXVIII and seven Lutheran Eucharist references the verifiers saw, the `.md` tables of Papacy Catholic and Orthodox regenerated from their `.json`, the Holy See per-page count | **3.5** (2.5–5) | ~69 |
| **2** | **Pasajes: apologists** | the 231 passages of the pages to ≥ 2 persons (today 8 of the 167 non-Catholic passages have 2; Orthodox Papacy and Reformed Sola Scriptura have none): new sources (the Ligonier sitemap of 2,814 URLs, books and articles), then reading; **the most uncertain line: it can be limited by missing material, not by budget** | **8** (5–12) | ~77 |
| **3** | **Everything in English (#6)** | ~190 thousand words of content (pages 55 thousand, history 53 thousand, glossary 24 thousand, plus the new texts of the 02 pages and objections) and the 154 English quotes with a dated edition still missing; the code that serves English is **not** counted | **7** (5–10) | ~84 |
| later | #7 early Fathers in Spanish (~12 points for the missing ~285 thousand words of the early tier), objections | not planned | — | — |

Total of stages 1–3: **~22 points (15–33)**, leaving ~16 for building the UI (the only measured UI datum: ~6 points on 2026-10-30 for the converter, three readers and 16 pages).

Stage 1a is the first session (`~/doctrina-research-prompts/session-S1a.md`, cap 68 %). After it, the estimates of 1b, 2 and 3 are recalculated from the measured costs before the next prompt is written.

## Recalculated after stage 1a (agent, 2026-11-02 19:30)

Datum: S1a did 4 tasks in ~27 minutes for **at most 1 weekly point** (64 → 65 %; integer readings). The plan said 3.5: overestimated ≥ 3.5×. Cross-check with yesterday: 5.7 points per hour for three sessions with verifiers ≈ 1.9 per session-hour. So the working rule is **≤ ~2 points per session-hour**, and the stages are estimated in session-hours (each a guess from the amount of reading or writing, ±50 %; one datum from S1a and one from C6, which wrote ~168 thousand Spanish words in 63 minutes). Baseline now: weekly **65 %** at 19:24.

| Stage | Session-hours | Points (range) | Weekly after | Why |
|---|---|---|---|---|
| **1b** Pasajes: verses | ~2.5 | **3** (1.5–5) | ~68 | ~25 documents or document sets to read for references, 4 thin lists to extend, regeneration of the `.md` from the `.json`, Holy See trimming; mostly mining of known printed texts |
| **2** Pasajes: apologists | ~3 | **4** (2–8) | ~72 | reading is cheap, but finding persons is not: the range is limited by material, not by budget; Orthodox Papacy and Reformed Sola Scriptura have no source yet |
| **3** Everything in English | ~2.5 | **3** (2–5) | ~75 | ~190 thousand words at C6's measured speed (~1.2 h), plus the 154 English quotes with a dated edition (~1 h); the code that serves English is not counted |
| later | — | not planned | — | #7 early Fathers (the missing ~285 thousand words of the early tier: ~1.5 h of writing at C6's speed, but it needs the original and a verifier on the divisions, so ~4–6 points), objections |

Stages 1b–3 together: **~10 points (5.5–18)**, down from the 18.5 of the first plan, leaving ~25 of the 35 points to 100 % for the UI (the only measured UI datum: ~6 points on 2026-10-30 for the converter, three readers and 16 pages). Pedro chose the cap of each prompt; the agent proposes it from the table above (stage 1b: 70 %).

## Rule for every agent that works on a stage (goes into each prompt)

1. At the **start and at the end of each task** run `python3 -I ~/.claude/skills/usage-guard/scripts/usage_check.py` (HTTP 429: wait 5 minutes and retry; never stop for it) and write the reading in the log table below.
2. Write in the log, per task: start reading, end reading, **points used**, the estimate above, the difference, and **the units of work done** (files written, glosses added, rows closed, minutes) so that a cost per unit can be computed.
3. At the end of the session, fill the «Results» table of this file.

## Results (filled by the agents)

| Date | Stage / task | Start % | End % | Used | Estimate | Units of work | Note |
|---|---|---|---|---|---|---|---|
| 2026-11-02 | 1a · T1 #1 the 02 data | 64 (18:36) | 65 (18:47) | ≤ 1 (integer readings) | 1 (0.5–1.5) | 22 closure items in `doctrines/02-closure-2026-11-02.md` (registry ids, paraphrase cells, 3 edge drafts + 1 «none», 2 + 2 witnesses), 11 min | Cheaper than the estimate, but the ceiling was not reached: the witnesses c. 256–749 were only started (4 added; 7 candidate works listed as not read). One finding that blocks two Orthodox cells: Robertson 1899 and Schaff II print opposite answers to Dositheus Q. I. |
| 2026-11-02 | 1a · T2a #4 Spanish gloss tail | 65 (18:47) | 65 (19:03) | < 1 (integer readings) | 1.0 | 3,021 pieces given Spanish in 6 batches (2,336 Hebrew word parts, 308 Hebrew lexicon, 377 Greek); Hebrew words with `es` 74.0 → 82.3 %, Greek 83.5 → 85.0 %; 16 min | Yield per piece falls fast: Hebrew ~20 words/piece at rank 1–370, ~12 at 370–890, ~8 at 890–1,430, ~6 at 1,430–1,850; Greek ~3.7 words/piece from the start. Ceiling not reached. |
| 2026-11-02 | 1a · T2b #5 Greek senses | 65 (18:53) | 65 (18:57) | < 1 (integer readings) | 0.7 | 1 script; 5,583 entries; 1,529 with ≥ 2 numbered senses; 4,961 senses; 39,069 OSIS refs; 6 min | Titles/examples of senses not built (not invented): TODO for Pedro or the UI. |
| 2026-11-02 | 1a · T2c #5 Hebrew definitions | 65 (18:57) | 65 (18:58) | < 1 (integer readings) | 0.8 | 1 script; OSHB Hebrew Lexicon (CC BY 4.0, BDB public domain), commit 21c9add; 11,181 of 11,442 entries (97.7 %); 6 min | Licence read and recorded first; unmatched 261 entries are mostly pronominal suffixes. |
| 2026-11-02 | **1a total** | 64 | 65 | **≤ 1 point (64 → 65 at 1-point resolution; 27 min wall time)** | 3.5 | all of the above | The whole stage cost at most one weekly point; the plan's 3.5 was overestimated by ≥ 3.5×. Estimates for 1b, 2 and 3 should be recalculated from time and tokens, not from points. |
| 2026-11-02 | 1b · T1 the thin lists (Baptism·Lutheran, Sola Scriptura·Orthodox, Baptism·Orthodox, Eucharist·Orthodox) | 65 (19:35) | 66 (19:45) | ≤ 1 (integer readings) | part of 3 (1.5–5) | records 6→8, 6→107, 18→40, 14→32; citations +2, +105, +32, +28; documents read: Philaret Q. 1–62, 285–306, 315–350, Dositheus Decrees II, XV and Confession Chapters XV–XVII and appended Questions (page images n212–n216, n220–n223), Mogila Q. 4, Apology IX, Smalcald III V, Large Catechism IV, Epitome and Solid Declaration XII; ~10 min | The Orthodox Sola Scriptura list grew 17× from one finding: the Confession's appended Questions I–III print reference lists of 37, 21 and 30 references that no earlier session had read. |
| 2026-11-02 | 1b · T2 the Lutheran references the verifiers saw | 66 (19:41) | 66 (19:45) | < 1 | part of 3 | 9 + 8 + 1 references added (Sola Scriptura 24→33, Eucharist 70→78, Papacy 55→56 records); Triglot English OCR, no page images | V7's «nine missing from AC XXVIII»: eight are in AC XXVIII, Gal 5:1 is in Apology XXVIII. The Triglot page images were not collated. |
| 2026-11-02 | 1b · T3 Reformed and Baptist proofs | 66 (19:45) | 68 (20:10) | ≤ 2 (one Sonnet extraction subagent: 277 thousand tokens, 345 tool uses, 90 min wall clock, the laptop slept for part of it) | part of 3 | Belgic Art. 2, 3, 7 notes from 3 page images (+45 citations, +34 records in Sola Scriptura·Reformed), Art. 35 notes from OCR (+33 citations), Heidelberg Q. 69–82 from the Palatinate edition (Harbaugh, OCR; +31 citations in Baptism·Reformed, +54 in Eucharist·Reformed), Westminster Larger Catechism Q. 168–177: 70 proof blocks from page images by the subagent (+103 records, +157 citations), 2LCF 1688 p. 102 (+5 citations); Larger Catechism Q. 2–4, 157–159 and Shorter Q. 2–3 NOT done (cut for budget); 1688 margins of 1.1–1.3, 26.7+, 29.1–2 NOT read | An image-reading subagent cost about as much as everything else in the session together: 345 tool calls for 10 questions. Heidelberg proofs exist in a dated print (Palatinate edition) and parse well from OCR. |
| 2026-11-02 | 1b · T4 the Catholic documents never read | 66 (19:50) | 67 (19:57) | < 1 | part of 3 | Roman Catechism (Donovan 1829 OCR footnotes: baptism, Eucharist, the Church and Peter; +~100 citations, markers lost), Trent Session V pp. 23–24 (page images) and Session VI (OCR), Vatican I Dei filius and Pastor aeternus (online editors' footnotes: +29 and +12 citations), Florence (3 rows from quoted words), Lateran IV c. 1 (read in full: no Scripture), CCC §§91–93, 2 Lumen gentium rows trimmed | Trent: the print reads «Acts iv. 2» and «Gal. iii. 27» (the suspected 4:12 and 3:23 are not what the print gives). A lenient scan found 51 reference forms the first parser lost in Trent Sessions V, VI, XIII, XIV (only the baptism ones were added). |
| 2026-11-02 | 1b · T5 regenerate and recount | 68 (21:20) | 68 (21:25) | < 1 | part of 3 | 20 `.md` regenerated or checked against their `.json`, `core-sets.md` and `gaps-summary.md` rerun, `s1b-closure-2026-11-02.md` recounted by script; 52 rows trimmed | The four Codex Papacy `.md` were stale; regenerated with the same table. |
| 2026-11-02 | **1b total** | 65 (19:35) | 68 (21:25) | **3 points** | 3 (1.5–5) | records 1,119 → 1,594; new against the pages 562 → 968; citations 1,512 → 2,189; about 35 minutes of my own work plus the subagent | On the estimate. Without the subagent the stage would have cost about 1–2 points. No verification pass (parameter of the day); the Verification TODO is in `day-2026-11-02/session-S1b.md`. |
