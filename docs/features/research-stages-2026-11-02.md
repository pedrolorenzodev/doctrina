# Research stages of 2026-11-02 (Pedro): finish the data, measure the cost, recalculate

Status: plan, estimates calculated by the agent on 2026-11-02 13:00 (not measured per task). Written because Pedro asked to keep the estimates so that every agent records the usage at the start and the end of each task and compares it with the estimate.

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

## Rule for every agent that works on a stage (goes into each prompt)

1. At the **start and at the end of each task** run `python3 -I ~/.claude/skills/usage-guard/scripts/usage_check.py` (HTTP 429: wait 5 minutes and retry; never stop for it) and write the reading in the log table below.
2. Write in the log, per task: start reading, end reading, **points used**, the estimate above, the difference, and **the units of work done** (files written, glosses added, rows closed, minutes) so that a cost per unit can be computed.
3. At the end of the session, fill the «Results» table of this file.

## Results (filled by the agents)

| Date | Stage / task | Start % | End % | Used | Estimate | Units of work | Note |
|---|---|---|---|---|---|---|---|
| | | | | | | | |
