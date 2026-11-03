Status: draft, NOT verified by Pedro

# Apologists tally, session S2 (2026-11-03): persons per section, before and after

## Progress
- Counted by script (`docs/research/tools/s2/tally.py`, `tally_md.py`) from the files: **before** = the files as committed at `HEAD` (2026-11-02 night), **after** = the working tree at the end of S2. **Unit = a section of an `apologists-*.md` file** (one heading = one passage or a group of passages), **not** a page entry: a section may bundle several passages, and a passage may be in two sections (the old Trenham section and the S2 section of Orthodox Sola Scriptura 1 Tim 3:15 count separately). The number is the last «**N persons**» of the section's count line (so a section whose depth test gives 0 persons counts as 0). The prompt's figures (52 Catholic sections, 167 non-Catholic passages) are by page entry and are not reproduced by this unit; the **change** is what this file measures.
- Not verified by anyone (parameter of the day: no verification pass).

## Table (20 pages)

| Page | Sections before / after | 0 before → after | 1 | 2 | ≥ 3 | ≥ 2 before → after |
|---|---|---|---|---|---|---|
| catholic · baptism | 16 → 16 | 3 → 3 | 5 → 5 | 6 → 6 | 2 → 2 | 8 → 8 |
| lutheran · baptism | 5 → 5 | 0 → 0 | 5 → 5 | 0 → 0 | 0 → 0 | 0 → 0 |
| reformed · baptism | 8 → 8 | 0 → 0 | 3 → 3 | 4 → 4 | 1 → 1 | 5 → 5 |
| orthodox · baptism | 5 → 5 | 1 → 1 | 4 → 4 | 0 → 0 | 0 → 0 | 0 → 0 |
| baptist · baptism | 6 → 6 | 1 → 1 | 4 → 4 | 1 → 1 | 0 → 0 | 1 → 1 |
| catholic · eucharist | 14 → 14 | 1 → 1 | 3 → 3 | 8 → 8 | 2 → 2 | 10 → 10 |
| lutheran · eucharist | 3 → 4 | 0 → 0 | 3 → 3 | 0 → 1 | 0 → 0 | 0 → 1 |
| reformed · eucharist | 2 → 2 | 0 → 0 | 2 → 2 | 0 → 0 | 0 → 0 | 0 → 0 |
| orthodox · eucharist | 4 → 4 | 0 → 0 | 4 → 4 | 0 → 0 | 0 → 0 | 0 → 0 |
| baptist · eucharist | 1 → 1 | 0 → 0 | 1 → 1 | 0 → 0 | 0 → 0 | 0 → 0 |
| catholic · papacy | 14 → 14 | 1 → 1 | 6 → 6 | 4 → 4 | 3 → 3 | 7 → 7 |
| lutheran · papacy | 1 → 1 | 0 → 0 | 1 → 1 | 0 → 0 | 0 → 0 | 0 → 0 |
| reformed · papacy | 3 → 3 | 0 → 0 | 2 → 2 | 1 → 1 | 0 → 0 | 1 → 1 |
| orthodox · papacy | 0 → 4 | 0 → 2 | 0 → 0 | 0 → 2 | 0 → 0 | 0 → 2 |
| baptist · papacy | 2 → 2 | 0 → 0 | 2 → 2 | 0 → 0 | 0 → 0 | 0 → 0 |
| catholic · sola-scriptura | 14 → 14 | 2 → 2 | 4 → 4 | 7 → 7 | 1 → 1 | 8 → 8 |
| lutheran · sola-scriptura | 3 → 3 | 0 → 0 | 3 → 3 | 0 → 0 | 0 → 0 | 0 → 0 |
| reformed · sola-scriptura | 0 → 4 | 0 → 0 | 0 → 3 | 0 → 1 | 0 → 0 | 0 → 1 |
| orthodox · sola-scriptura | 1 → 4 | 0 → 0 | 1 → 1 | 0 → 0 | 0 → 3 | 0 → 3 |
| baptist · sola-scriptura | 1 → 1 | 0 → 0 | 1 → 1 | 0 → 0 | 0 → 0 | 0 → 0 |

| Tradition | Sections before → after | ≥ 2 persons before → after |
|---|---|---|
| catholic | 58 → 58 | 33 → 33 |
| lutheran | 12 → 13 | 0 → 1 |
| reformed | 13 → 17 | 6 → 7 |
| orthodox | 10 → 17 | 0 → 5 |
| baptist | 10 → 10 | 1 → 1 |

## What changed in S2 (persons added, by section)
- **Orthodox · Papacy (new file):** Matt 16:18–19 (2 persons: Maxwell, Arakaki), Matt 18:17–18 (2: Arakaki in depth, Maxwell ~110 words), Eph 2:19–20 (depth 0: one sentence each), Gal 2:11 (depth 0: a passing reference).
- **Orthodox · Sola Scriptura:** 1 Tim 3:15 (5 persons with Trenham: Bernstein, Farley, Azarvan, Whiteford), 2 Thess 2:15 (5: Arakaki, Bernstein, Whiteford, Farley, Azarvan; contested within the tradition by Fr. Stephen De Young, as quoted by Arakaki), 2 Tim 3:15–17 (3: Whiteford, Arakaki, Bernstein). Three outlets for five persons.
- **Reformed · Sola Scriptura (new file):** 2 Tim 3:15–17 (2: Watkins, McGraw), Rev 22:18–19 (1: MacArthur), Rom 1:19–20 with Ps 19:1 (1: Mathison), Ps 19:7 (1: Beeke), all Ligonier.
- **Lutheran · Eucharist:** John 6 (2 persons with Cooper: Hale).
- **Catholic:** no new person (T3 not achieved, below). Block defects A4–A7 and A27 of `verification-b5-5.md` corrected by script (`tools/s2/t4_fix.py`): list items restored (papacy, 1 Cor 11:34), label lines marked (eucharist), the two 2,867-word blocks cut to windows, the episode-summary label (sola scriptura).

## Persons added, with the three-proxy test
The test is in `docs/research/apologists.md` (standing in the tradition's institutions, depth of books or degrees, audience). In S2 **only what the page itself shows was recorded**; the rest is `standing: to verify before publishing` (DECISIONS 2026-11-02 round 5 point 1). All are agent's calls outside `apologists.md`.

| Person | Tradition | Where the person speaks | Proxy 1 (institution), from the page | Proxy 2 (books, degrees) | Proxy 3 (audience) |
|---|---|---|---|---|---|
| Robert Arakaki | Orthodox | Orthodox-Reformed Bridge blog (Ancient Faith network) | his About page: attended Gordon-Conwell Theological Seminary, came to Orthodoxy from the Reformed tradition; no clerical title on the pages read | not checked | not checked |
| Fr. John Maxwell | Orthodox | Orthodox Research Institute reprint of «The Dawn» (Diocese of the South, OCA, Oct 1998) | byline: mission pastor, Ss. George & Alexandra Mission, Fort Smith, Arkansas | not checked | not checked |
| Fr. James Bernstein | Orthodox | orthodoxinfo.com | byline «Fr. James Bernstein», «a Jewish convert to Christ via evangelical Protestantism» (his own words) | not checked | not checked |
| Fr. John Whiteford | Orthodox | orthodoxinfo.com | the webmaster's note: a former Nazarene associate pastor, B.A. in Religion, received into the Orthodox Church; «Father» in the page | B.A. (the page) | not checked |
| Fr. Lawrence Farley | Orthodox | OrthoChristian.com | byline «Fr. Lawrence Farley» | not checked | not checked |
| Dr. Amir Azarvan | Orthodox | OrthoChristian.com | byline «Dr. Amir Azarvan»; the page names no church post | doctorate implied by «Dr.»: not checked | not checked |
| Rev. Philip Hale | Lutheran | Steadfast Lutherans | byline «Rev. Philip Hale – St. Paul, Bancroft and St. John, Lyons NE»; synod not stated | not checked | not checked |
| Keith Mathison, Joel Beeke, Eric Watkins, Ryan McGraw | Reformed | Ligonier articles | the byline under the title (Ligonier); their offices not checked | not checked | not checked |
| John MacArthur | Baptist-adjacent, published by Ligonier | Ligonier article | the page: pastor-teacher of Grace Community Church and chancellor of The Master's University (1939–2025) | not checked | not checked |

**Not counted as persons:** the Orthodox Christian Information Center's «Papal Supremacy» (unsigned Q&A from *Orthodox Tradition* XVII/1, 2000), the OCA's «On this Rock» (unsigned, one paragraph), the Steadfast Lutherans pieces with no named author (Acts 2:38, the Laymen's Commentary on the Epitome), Ligonier's «Who Wrote the Bible?» (marked «Summarized by AI»).

## Passages still under two persons, and what was tried
- **Orthodox · Papacy:** Eph 5:23, Eph 4:11–12, Titus 3:10, Col 1:18, 1 Cor 3:10–11, Matt 28:20, Rev 21:14 (no text names them against the papacy: Arakaki's index of 287 posts, OCA, orthodoxinfo, Orthodox Research Institute, OrthoChristian read); Eph 2:19–20 and Gal 2:11 (one sentence each). Patristic Nectar's «An Orthodox Perspective on Roman Catholicism» (1 h 17, Trenham): captions read, no verse named on the papacy. Not tried: Meyendorff and Hopko (printed or audio), Farley's «The Papal Claims» names no verse.
- **Orthodox · Eucharist:** all four sections at 1 (Lord of Spirits hosts = one person). Tried: Arakaki's index (no document with depth on John 6, 1 Cor 10:16–17, 11:29, Matt 26:26, Luke 22:19; John 19:34 none), the OCA «The Orthodox Faith» Holy Eucharist page (unsigned on the page; 1 Cor 11:23–26 quoted in one paragraph), Pravmir's «The Mystery of the Holy Eucharist» (Bishop Atanasije (Jevtić); 1 Cor 10 named once). A second Orthodox person for the Eucharist passages is an input for Pedro (a book or a transcript).
- **Orthodox · Sola Scriptura:** Rom 3:2, Eph 5:27, Ps 26:5, Luke 24:44 as an Orthodox argument: none found (0 documents in Arakaki's index for Rom 3:2, Eph 5:27, Ps 26; Luke 24:44 one sentence).
- **Reformed · Sola Scriptura:** 2 Pet 1:21, Rom 15:4, Gal 1:8–9, Isa 8:20, Acts 17:11, 1 Tim 3:15, Matt 15, John 5:39, Acts 15:15, 1 Cor 14:40 (mentions only in the 2,815 Ligonier articles); Rev 22:18, Rom 1:19–20, Ps 19:7 at one person. Ligonier sermons (all 545 manuscripts fetched and searched): negative, no passage. Not tried (budget): Reformation21, Credo, aomin.org, Sproul and Ferguson captions.
- **Lutheran (Baptism, Papacy, Sola Scriptura, Eucharist other than John 6), Baptist (all four), Reformed (Baptism 3 sections, Eucharist 2, Papacy 2):** untouched in S2 except Lutheran John 6. Leads read and not cut: 9Marks (Caleb Morell on Acts; Tiago Oliveira; Sam Emadi) with short or quoted paragraphs on Acts 2:38, Acts 8:38, Rom 6:3–4, 1 Cor 11, below the depth test; Steadfast Lutherans' Acts 2:38 article (no author named on the page).
- **Catholic (T3):** not achieved. Indexed and read for 19 one-person sections: Dave Armstrong's blog (1,470 posts through its Blogger feed), Taylor Marshall (4,184 posts), Scripture Catholic (John Salza's site, `robots.txt` crawl-delay 30 s, one page read). Armstrong's verse hits are one-line list items (e.g. «50 New Testament Proofs for Petrine Primacy…», 1,760 words in one block for 50 verses) or exchange pages mixing his words with opponents', which need per-post reading to separate the speakers; Taylor Marshall had no hit among the top results for the 19 verses; Scripture Catholic's notes are one to three sentences per verse. No block was added. Scott Hahn, Brant Pitre, Robert Barron: not tried (printed works and video).

## If a page cannot reach ≥ 2 from the open corpus (inputs for Pedro)
Orthodox Eucharist (a book such as a priest's commentary, or a paid Ancient Faith transcript); Orthodox Papacy beyond Matt 16 and 18 (a printed book); Reformed Sola Scriptura beyond Scripture's own proof-texts (the Ligonier sermons, a book); the Baptist pages (no creator text beyond Ortlund, Robin and Zaspel found); the Catholic one-person sections (a per-post reading of Armstrong, or Hahn and Pitre's books).
