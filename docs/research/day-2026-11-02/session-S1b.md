# Session S1b, 2026-11-02 («Pasajes: the verses each tradition uses»)

Status: draft, NOT verified by Pedro

## Progress

- 19:35 started (weekly 65 %, session 15 %; cap 70 % inclusive). Read: AGENTS.md rules, the stage plan, `gaps-summary.md`, `core-sets.md` head, A5 «Shared choices» and «Agent's calls», A3 «Shared choices», A5 scripts (`scrlib.py`, `lb.py`, `gaps.py`, `coresets.py`). Scripts and cached scan texts copied from the A5 scratchpad.
- T1 (thin lists) and T2 (Lutheran references) done 19:36–19:45; T3 (Reformed, Baptist) 19:45–20:10 with one extraction subagent for the Westminster page images; T4 (Catholic documents) 19:50–20:00; T5 (regenerate and recount) 21:20–21:25. The wall clock jumped from 20:10 to 21:20 (the laptop slept while the subagent ran); the subagent reported 90 minutes of wall clock.
- Stopped at 21:25: T1–T5 each done in the part that fitted the weekly budget; what was cut is listed below. Weekly 68 %.
- `scripture-lists/s1b-closure-2026-11-02.md` has the per-list table (counts recounted by script); `docs/research/tools/s1b/` has every script (README there); the Results table of `docs/features/research-stages-2026-11-02.md` is filled.

## Readings (usage), all written to `~/doctrina-research-prompts/usage-latest.txt`

| time | session % | weekly % | note |
|---|---|---|---|
| 19:35 | 15 | 65 | start of session, start of T1 |
| 19:45 | 18 | 66 | end of T1/T2, start of T3 |
| 19:48 | 18 | 66 | subagent running (Westminster page images) |
| 19:51 | 20 | 66 | start of T4 |
| 19:57 | 24 | 67 | end of T4 (Donovan, Vatican I, Trent) |
| 20:00 | 25 | 67 | |
| 20:10 | 30 | 68 | subagent still running |
| 21:20 | 1 | 68 | subagent had stalled while the laptop slept; scope cut sent; T5 start |
| 21:23 | 3 | 68 | after the subagent's file; end of T5 |

## Cost table

| task | start time | end time | start % | end % | points used | units of work |
|---|---|---|---|---|---|---|
| T1 thin lists | 19:35 | 19:45 | 65 | 66 | ≤ 1 | Orthodox Sola Scriptura 6 → 107 records (+105 citations), Baptism Orthodox 18 → 40 (+32), Eucharist Orthodox 14 → 32 (+28), Baptism Lutheran 6 → 8 (+2); 8 page images read |
| T2 Lutheran references | 19:41 | 19:45 | 66 | 66 | < 1 | Sola Scriptura Lutheran +9 citations, Eucharist Lutheran +8, Papacy Lutheran +2 (one new record) |
| T3 Reformed and Baptist | 19:45 | 20:10 (subagent 21:20) | 66 | 68 | ≤ 2 (subagent: 277 thousand tokens, 345 tool uses) | Belgic Art. 2, 3, 7 (3 page images) and 35 (OCR): +78 citations; Heidelberg Q. 69–82: +85 citations; Westminster Larger Catechism Q. 168–177: 70 proof blocks, +157 citations, Eucharist Reformed 53 → 210 records after Belgic, Heidelberg and Larger Catechism; 2LCF 1688 p. 102: +5 citations |
| T4 Catholic documents | 19:50 | 20:00 | 66 | 67 | < 1 | Roman Catechism footnotes (baptism +53, Eucharist +47 citations, Papacy +3), Trent Session V (2 page images) and VI: +17, Vatican I: +29 and +12, Florence +3, CCC §§91–93 +4; 2 Lumen gentium rows trimmed |
| T5 regenerate and recount | 21:20 | 21:25 | 68 | 68 | < 1 | 20 `.md` checked or regenerated (4 Codex Papacy tables rebuilt), core-sets and gaps-summary rerun, 52 rows trimmed, closure file with recounted numbers |
| whole session | 19:35 | 21:25 | 65 | 68 | 3 | records 1,119 → 1,594; new against the pages 562 → 968; citations 1,512 → 2,189 |

## Agent's calls

- **One extraction subagent (Sonnet) for the Westminster page images**, one at a time, with the brief «extract, do not verify»; not a verification pass. Its first run was too slow (zoomed crops of every page): I cut its scope to Larger Catechism Q. 168–177 (70 blocks); Larger Catechism Q. 2–4, 157–159 and Shorter Catechism Q. 2–3 were **not** extracted. Its rows are tagged as read by the subagent and not re-checked.
- **Reference lists printed under a chapter (Dositheus Confession Chapters XV–XVII and appended Questions; Belgic notes; Heidelberg print)** are recorded as printed, without claiming which clause each serves where the print does not say; each row says so in its flag. The Chapter XV list of the Confession (one list for all seven Mysteries) is listed under Baptism and Eucharist only for the verses that name them, chosen from the wording by Doctrina and flagged `[unverified]`.
- **Printed anomalies reproduced, not repaired:** `Neh. viii., 31`, `John xxi., 31`, `2 Peter iii., 5`, `1 John … xii., 3`, `John xxiii., 6`, `Gal. ii., 30`, `Gal. xxx. 15`, `Gal. iii., 12`, `Luke iii., 13`, `Acts iv. 2` (Trent, probably 4:12), `Deut. vi.` (no verse). Trent's `Gal. iii. 27` is printed 27, not 23.
- **Roman Catechism (Donovan 1829, OCR):** footnote lines read by script (lines that begin with a book abbreviation, no joining of lines, Kings and Chronicles skipped because the print uses the Vulgate numbering, «2 John»/«3 John» read as the footnote number plus John). The footnote markers and the sentence each note belongs to are lost; the page is given as the running heads' interval. A lenient scan shows this harvest is lossy (several forms are skipped) and noisy: the rows carry a flag; a verifier should sample them first.
- **Vatican I and Florence texts come from papalencyclicals.net** (the page prints no translator; the footnote style looks like Tanner's *Decrees of the Ecumenical Councils*: an attribution of Doctrina, flagged). The council's Latin on vatican.va prints no Scripture reference (Dei filius: 0 found), so the rows say «editors' footnote». The copyright status of that translation was not examined: fragments are short.
- **CCC «9193»** read as §§91–93 (the Catechism has 2,865 paragraphs); the page's list was not re-opened.
- **V7's «nine missing from AC XXVIII»**: eight are printed in AC XXVIII; Gal 5:1 is in Apology XXVIII.17 (listed there). Epitome VII Matt 11:28 «item 25» of V4 was not found (the Matt 11:28 of Epitomes/SD VII is already listed).
- **Heidelberg proofs**: found a dated print with proofs: Harbaugh's translation of the Palatinate edition (Reading, Pa.: Daniel Miller, `heidelbergcatech00harb`; the year 1889 is the Internet Archive record's, not read on the title page); OCR, quoted verse words and the reference printed together. Four references after the running head «Q. 83. Of the Keys» (Matt 18:15–17, Tit 3:10, 2 Cor 2:6–7, Matt 16:19) were not collected because the question is uncertain.
- **Lutheran Large Catechism IV** (English column, by script): only Matt 28:19, Mark 16:16, Titus 3:5 (already listed); the Triglot German column is Fraktur and unusable.
- **Codex Papacy lists**: kept their schema (no per-citation tag); my additions carry `addedBy: S1b` where the schema allowed it; their `.md` regenerated with the same table and a recomputed «Records / new / tokens» line.
- **What I did not do on purpose:** no verifier; no 1688 images beyond p. 102 (the 1688 margins repeat references the lists already hold from the 1677/1719 prints; each costs about 3 thousand tokens per page); no Heidelberg Q. 98 or other pages' proofs; Mogila Part I beyond Q. 4; the 1895 Encyclical and Jeremiah's Answers (no print in the cached texts and none fetched).

## Verification TODO (nothing verified in S1b; per file, in the order a verifier should take them)

1. `sola-scriptura-orthodox`: the 105 rows from the Dositheus Confession appended Questions (images read by me: check the reading of the digits `Neh. viii., 31`, `John xxi., 31`, `John xxiii., 6`, `1 John … xii., 3` on p. 209–212), Philaret Q. 14, 15, 37 (OCR), Mogila Q. 4, Decrees Questions I–II footnotes (OCR, three garbled).
2. `eucharist-reformed`: Larger Catechism Q. 168–177 (the 70 blocks of `tools/s1b/wc_proofs.json`: Q. 171 `p`, Q. 175 `b`, `i`, `l`; Q. 168 `z`), Belgic Art. 35 (OCR, `Luc xxii. 11)`, `Es. Iv. 2`), Heidelberg Q. 75–82.
3. `baptism-orthodox`, `eucharist-orthodox`: the Chapter XV list's baptism/Supper assignment; Decree XV footnotes (OCR, garbled `Luke xxii.`, `John vi. 53`); Philaret Q. 301, 305.
4. `baptism-catholic`, `eucharist-catholic`, `papacy-catholic`: Roman Catechism rows (Donovan): each footnote against the page; Trent Session VI chain (`Actsii. 38; Matth. xxviii. 19`) on the page image; Florence rows (verses identified from quoted words).
5. `sola-scriptura-catholic`, `papacy-catholic`: Dei filius and Pastor aeternus editors' footnotes (the online page has no markers; check against Tanner or a dated print).
6. `baptism-reformed`: Heidelberg Q. 69–74 rows (sentence windows from OCR; `I John v. 6` read as 1 John 5:6).
7. `sola-scriptura-reformed`: Belgic Art. 2, 3, 7 (images read by me; `Gal. xxx. 15`; the clause each note stands on was not tied).
8. `baptism-lutheran`, `eucharist-lutheran`, `sola-scriptura-lutheran`, `papacy-lutheran`: all rows `[unverified: OCR]`; collate the added ones against the Triglot page images (AC pp. 85–93, Ap pp. 443–451, SA pp. 471–475).
9. Quotation rule: the 52 trimmed rows; the Lumen gentium rows; the Holy See count per page was not computed.

## What is left

- Larger Catechism Q. 2–4, 157–159 and Shorter Catechism Q. 2–3 (Sola Scriptura·Reformed), Belgic Art. 34 notes and Q. 165–167 clause matching, Heidelberg Q. 98.
- The 1688 images: 1.1–1.3 (leaves n24–n25), 26.7 onward, the 29.1–2 clause collation (Baptist lists); BF&M official pages; Standard Confession XIII and Somerset: not touched.
- Trent: the 51 reference forms of Sessions V–XXII that the first parser lost (mostly Session VI Justification and Session XIV Penance, whose pages are not in the baptism/Eucharist lists), the page images of Sessions VI, VII, XIII, XIV, XXI, XXII; Roman Catechism on Scripture and tradition; Florence Laetentur caeli; Dei verbum footnote markers (flagged only).
- Orthodox: Mogila Part I Q. 13+ (Scripture answers), Jeremiah's Answers, the 1895 Encyclical, 1848 Encyclical.
- Cost datum for the next stage: 3 weekly points for about 35 minutes of own work plus one 345-tool-call image subagent; the usage counter moved 65 → 66 in the first 10 minutes of pure text work (about 100 citations per point there), and 66 → 68 during the subagent's 90 minutes.

## Summary for Pedro (español, breve)

- **Hecho (borrador, sin verificadores):** llené los huecos de las listas de «Pasajes». Registros 1.119 → 1.594; citas 1.512 → 2.189; pasajes nuevos frente a las páginas 562 → 968. Lo más grande: Sola Scriptura Ortodoxo pasó de 6 a 107 (las listas de referencias de las Preguntas de Dositeo, leídas en la imagen), Eucaristía Reformado 53 → 210 (Catecismo Mayor P. 168–177 desde las imágenes, Heidelberg P. 75–82, Belgic 35), Bautismo Católico 92 → 135 y Eucaristía Católico 60 → 95 (Catecismo Romano de Donovan, Trento, Florencia), Sola Scriptura Católico 37 → 65 (Dei Filius).
- **No hecho:** Catecismo Mayor P. 2–4 y 157–159 y Menor P. 2–3, los márgenes 1688 (salvo p. 102), el resto de Trento, Jeremías y la Encíclica de 1895. Verificación pendiente, lista por archivo arriba.
- **Costo:** 3 puntos semanales (65 → 68), en línea con la estimación. Un subagente leyendo imágenes costó casi la mitad.

## Summary for the next agent (English)

- Read `scripture-lists/s1b-closure-2026-11-02.md` (counts recounted by script) and the «Verification TODO» above. All additions are unverified; the ones read on page images say so in their tag.
- Scripts: `docs/research/tools/s1b/` (README there); every script is idempotent and rewrites `.json` and `.md`; the four Codex Papacy lists keep their own schema (`codexmd.py` renders their `.md`).
- The extraction subagent was slow (345 tool uses for 10 questions): if the Westminster proofs are continued, split by question, give it the leaf numbers, and consider cropping the proof area only.

## Commit command (do not run; it is Pedro's)

```
git add docs/research/day-2026-11-02/session-S1b.md docs/research/doctrines/scripture-lists/baptism-catholic.json docs/research/doctrines/scripture-lists/baptism-catholic.md docs/research/doctrines/scripture-lists/baptism-lutheran.json docs/research/doctrines/scripture-lists/baptism-lutheran.md docs/research/doctrines/scripture-lists/baptism-orthodox.json docs/research/doctrines/scripture-lists/baptism-orthodox.md docs/research/doctrines/scripture-lists/baptism-reformed.json docs/research/doctrines/scripture-lists/baptism-reformed.md docs/research/doctrines/scripture-lists/core-sets.md docs/research/doctrines/scripture-lists/eucharist-baptist.json docs/research/doctrines/scripture-lists/eucharist-baptist.md docs/research/doctrines/scripture-lists/eucharist-catholic.json docs/research/doctrines/scripture-lists/eucharist-catholic.md docs/research/doctrines/scripture-lists/eucharist-lutheran.json docs/research/doctrines/scripture-lists/eucharist-lutheran.md docs/research/doctrines/scripture-lists/eucharist-orthodox.json docs/research/doctrines/scripture-lists/eucharist-orthodox.md docs/research/doctrines/scripture-lists/eucharist-reformed.json docs/research/doctrines/scripture-lists/eucharist-reformed.md docs/research/doctrines/scripture-lists/gaps-summary.md docs/research/doctrines/scripture-lists/papacy-catholic.json docs/research/doctrines/scripture-lists/papacy-catholic.md docs/research/doctrines/scripture-lists/papacy-lutheran.json docs/research/doctrines/scripture-lists/papacy-lutheran.md docs/research/doctrines/scripture-lists/papacy-orthodox.md docs/research/doctrines/scripture-lists/papacy-reformed.md docs/research/doctrines/scripture-lists/s1b-closure-2026-11-02.md docs/research/doctrines/scripture-lists/sola-scriptura-catholic.json docs/research/doctrines/scripture-lists/sola-scriptura-catholic.md docs/research/doctrines/scripture-lists/sola-scriptura-lutheran.json docs/research/doctrines/scripture-lists/sola-scriptura-lutheran.md docs/research/doctrines/scripture-lists/sola-scriptura-orthodox.json docs/research/doctrines/scripture-lists/sola-scriptura-orthodox.md docs/research/doctrines/scripture-lists/sola-scriptura-reformed.json docs/research/doctrines/scripture-lists/sola-scriptura-reformed.md docs/research/tools/s1b docs/features/research-stages-2026-11-02.md && git commit -m "docs(research): fill the Pasajes lists with the missing verses"
```
