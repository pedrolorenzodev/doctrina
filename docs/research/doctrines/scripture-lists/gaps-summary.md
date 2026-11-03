# Gaps summary: Scripture lists against the pages' `scripture` lists

Status: draft, NOT verified by Pedro

Regenerated 2026-11-02 by session S1b (first generated 2026-11-01 by session A5) from the 20 `scripture-lists/*.json` files (the four Papacy files for Catholic, Orthodox, Lutheran, Reformed are Codex's partial checkpoints; the other 16 are A5's). «New» = a passage the documents cite that no verse of the page's `scripture` list covers (A5 files: single-range records; Codex files: its own `inPage`). Ranking of the «ten most important new»: distinct documents citing it, then distinct locators. A passage cited by one document at one locator is the usual case; a new passage is not yet a recommendation to add it to a page. All counts come from drafts: see each file's tags and the verification files.

| Page | Records | New | Verifier (Sonnet) | Main routes not reached |
|---|---|---|---|---|
| baptism · catholic | 135 | 94 | V1 (+ parser audit) | Trent: Waterworth OCR only. Known gaps after the V1 verification: the OCR parser does not catch every form («Actsii.», roman «X», «John i.' ; CCC: every paragraph the page cites (including the ones listed only in `citations:` arrays) was parsed from the official English pages, foot |
| baptism · lutheran | 8 | 2 | V1 | Read in this session in the Triglot English column: Augsburg Confession IX (~70 words, no reference printed), Apology IX (the whole article:; Not read for this page: Large Catechism IV in the German column (the Triglot German OCR is Fraktur and unusable), Formula of Concord Solid D |
| baptism · reformed | 89 | 45 | V2 | Heidelberg Q. 69–74 proofs: read in the Palatinate edition (Harbaugh, Reading 1889, OCR) in S1b; Belgic Art. 34 notes: unchanged.; Westminster 1894 page images: not read; every record is `[unverified: OCR]`. |
| baptism · baptist | 61 | 26 | V2 (+1688 margins read by A5) | 1688 print: 28.1–2, 29.1–4 read on page images (A3: 29.1–2; A5: 28.1–2, 29.3–4); the 1688 wording of 29.1 and 29.2 clauses was not collated ; BF&M 1925/1963/2000 proof-text lists were not re-read from the official pages in this pass. |
| baptism · orthodox | 40 | 27 | no | Philaret Q. 285–306 (Of Baptism) read in full on the OCR text (Schaff II pp. 491–493): Q. 288, 289, 291, 294, 296, 297 (already listed), 301; Dositheus: Decree XV (OCR, pp. 135–137), Chapter XV and Chapter XVI of the Confession (page images, pp. 201–202) read; the Decrees' Mystery  |
| eucharist · catholic | 95 | 58 | V4 | Sacrosanctum concilium 55, Orientalium ecclesiarum 5–6, GIRM, CIC canons, John Paul II audiences, Pontifical Council notes: not searched (no; Trent: Waterworth OCR; windows are the 90 words of OCR text before the printed reference, not a verified decree sentence. Only the doctrinal |
| eucharist · lutheran | 78 | 41 | V4 | Triglot page images not read: every record is `[unverified: OCR]`.; S1b: the seven references verifier V4 listed (Heb 10:10, 1 Pet 2:5, Heb 13:15, 1 Pet 1:2, Heb 5:1, Gal 5:19 ff., Col 3:4) were found in the  |
| eucharist · reformed | 210 | 146 | V5 + V9 (rebuilt from images) | Larger Catechism Q. 168–177 proof blocks (printed pp. 203–210): read on the page images by an extraction subagent in S1b (70 blocks; letters; Larger Catechism Q. 168–177 proof blocks (printed pp. 203–210): read on the page images by an extraction subagent in S1b (70 blocks; letters |
| eucharist · baptist | 47 | 13 | no (1688 margins read by A5) | 2LCF 30.7–30.8: the 1688 print p. 102 was read on the page image in S1b (margin notes l, m, n: the same references as McGlothlin's 1677 text; First London, Standard, Somerset: the dossier found no Supper chapter comparable to 2LCF 30; not searched here. |
| eucharist · orthodox | 32 | 20 | V5 | Philaret Q. 315–350 read in full on the OCR text (Schaff II pp. 495–499): references printed at Q. 329, 338, 341, 342, 344, 350 (all already; Dositheus: Decree XV (OCR; footnotes partly garbled), Chapter XV and Chapter XVII of the Confession (page images, pp. 201, 205) read; Decree |
| papacy · catholic | 121 | 77 | V3 (corrections applied to JSON) | CCC: §§85–86, 551–553, 815–818, 833–838, 861–862, 869–870, 880–896, 1369, 1441/1444, 2035, 2244–2246 fetched; footnote audit done for biblic; LG official English §12 notes have defects: note 111 prints “Jn. 2:20, 27” without 1; notes 115–116 do not align with the adjacent body quot |
| papacy · lutheran | 56 | 40 | V6 (corrections applied to JSON) | Triglot OCR route succeeded. Images fetched but not yet read for AC pp.85/87/89/91/93; Ap pp.443–451 and SA pp.471–475 not visually collated; AC XXVIII.25 also quotes the power given “to edification, and not to destruction” without a local verse number; explicit 2 Cor.13:10 is enco |
| papacy · reformed | 103 | 57 | V6 (corrections applied to JSON) | 1894 proof lists: no image collation in this pass. WCF25.6 note o prints 2 Thess.2:3,4,8,9 (last verse continues onto p.88), unlike the curr; WCF30.3 prints 1 Cor.11:27 “to the end”; WCF31.2 prints 2 Chr.19:8 “to the end”. These two open ranges are documented here rather than given |
| papacy · baptist | 70 | 22 | V8 | 2LCF 26.7 onward in the 1688 print not read; 26.1–26.6 read on the page images by A5.; 2LCF 26.1, 26.2, 26.5 onward margins; First London and Somerset church chapters; AP XIV; NH XIII: not searched here. |
| papacy · orthodox | 46 | 38 | V3 (corrections applied to JSON) | 1848 encyclical: dossier route is Fordham web transcription; not used as a dated print. No licensed/public-domain print collated this pass. ; 1895 §XIV p. 41 note 1 also prints “Rom. i. 9, xv. 15–xvi”: the open cross-chapter range has no explicit end verse. Rom. 1:9 is encoded; Rom |
| sola-scriptura · catholic | 65 | 37 | V7 | Footnote markers «(3)» of Dei verbum are dropped from the quoted fragments without a mark (V7).; Dei Filius (First Vatican Council): the Holy See page is Latin only in this pass; not read for references. |
| sola-scriptura · lutheran | 33 | 20 | V7 | Triglot page images not read: every record is `[unverified: OCR]` except the two rows taken from the dossier.; The nine references V7 reported as missing from AC XXVIII were looked for in the Triglot English OCR: eight are printed in AC XXVIII (Acts 1 |
| sola-scriptura · reformed | 96 | 40 | V9 (rebuilt from images) | Larger Catechism Q. 2–4 and 157–159 and Shorter Catechism Q. 2–3 proof blocks: the first OCR parse was removed after verifier V5 found about; Belgic Confession Art. 2–7 (Schaff III 1877) notes: not collected. |
| sola-scriptura · baptist | 102 | 63 | V8 | 2LCF 1.1–1.3 margins (1688 pp. 1–2, leaves n24–n25): not read; the 1719 notes for 1.8–1.10 not read. 1688 pp. 4–9 (1.4–1.10) read on page im; Standard Confession XIII (Acts 24:14 / 2:42) and Somerset: not collected as Scripture-for-Scripture rows. |
| sola-scriptura · orthodox | 107 | 102 | no | Philaret Q. 1–62 read (OCR, Schaff II pp. 445–455): references collected from Q. 14, 15, 18, 23, 32, 37, 58, 60; Q. 2, 4, 5, 6, 8 and 62 pri; Philaret page images not read (`[unverified: OCR]`). |

## baptism · catholic

135 records, 94 new against the page.

Ten most important new passages:

- `Eph.4.22`: 2 document(s) (Council of Trent (Waterworth 1848); Roman Catechism (Catechism of the Council of Trent))
- `Eph.5.26`: 2 document(s) (CCC; Roman Catechism (Catechism of the Council of Trent))
- `Rom.8.1`: 2 document(s) (Council of Trent (Waterworth 1848); Roman Catechism (Catechism of the Council of Trent))
- `Rom.8.17`: 2 document(s) (CCC; Council of Trent (Waterworth 1848))
- `1Cor.6.19`: 1 document(s) (CCC)
- `2Cor.5.17`: 1 document(s) (CCC)
- `Acts.4.2`: 1 document(s) (Council of Trent (Waterworth 1848))
- `Mark.1.10`: 1 document(s) (Roman Catechism (Catechism of the Council of Trent))
- `1Cor.1.30`: 1 document(s) (Council of Trent (Waterworth 1848))
- `1Cor.10.1`: 1 document(s) (Roman Catechism (Catechism of the Council of Trent))

Not reached (from the list's own section):

- Trent: Waterworth OCR only. Known gaps after the V1 verification: the OCR parser does not catch every form («Actsii.», roman «X», «John i.' 29», «viii. i»), so some printed references of Sessions V, VI and VII (e.g. Session V John 1:29, Rom 8:1, Rom 6:4, Eph 4:22-24, 2 Tim 2:5; Session VI ch. 6 Heb 11:6) may be missing; the «sentence» is a window of OCR text, not the decree sentence; `Acts 4:2` is probably Acts 4:12 and Gal 3:23 (Session XIV) probably Gal 3:27 (unconfirmed, page image not read).
- CCC: every paragraph the page cites (including the ones listed only in `citations:` arrays) was parsed from the official English pages, footnotes AND inline references; 2 readings are flagged where the page prints a non-existent verse or a missing colon.
- Roman Catechism (Donovan 1829, OCR): the footnote lines of the chapter on baptism were read by script (lines that begin with a book abbreviation; Part II, about pp. 109–137); the running heads give every second page only; the quoted-words-without-reference cases of the text were not collected; Florence *Exsultate Deo* and Lateran IV c. 1: see the closure file.
- Trent (S1b): Session V canons 3 and 5 (printed pp. 23–24) read on the page images: Acts iv. 2 is printed as «iv. 2» (not 4:12) and Gal. iii. 27 as 27 (not 23); Session VI chapter 7 notes read in the OCR only; the remaining sessions V, VI, VII, XIII, XIV, XXI, XXII page images were not read; a lenient scan of the OCR of those sessions found 51 reference forms the first parser lost (mostly Session VI Justification: Rom, Matth, John, James; Session XIV Penance: John 20:22–23, Matt 18:18, James 5:14, Luke 13:5, Ps 6:7, Ps 50:6): only the baptism ones are collected here.
- Florence, Exsultate Deo (Armenians): read the baptism passage in the online English text; the only Scripture wording is «unless we are born again of water and the spirit, … as Truth says» (John 3:5, identified); Lateran IV c. 1 read in full: it prints no Scripture reference and quotes no verse; the Roman Catechism and CIC canons: CIC canons carry no Scripture references.

## baptism · lutheran

8 records, 2 new against the page.

Ten most important new passages:

- `Gen.17.7`: 1 document(s) (Epitome of the Formula of Concord)
- `Gen.17.9`: 1 document(s) (Solid Declaration of the Formula of Concord)

Not reached (from the list's own section):

- Read in this session in the Triglot English column: Augsburg Confession IX (~70 words, no reference printed), Apology IX (the whole article: one reference, Matt 28:19, already listed; the promise to little children and the argument from the gift of the Holy Ghost carry no reference), Smalcald Articles III V (one quoted wording, «a washing in the Word», Eph 5:26, already listed; no reference printed), Small Catechism IV and Large Catechism IV (the four and three references already listed; Large Catechism IV prints no other reference, counted by script over the English text between the headings «Of Baptism» and «Of the Sacrament of the Altar»), Epitome XII (one reference: Gen 17:7 ff.) and Solid Declaration XII (one reference: Gen 17:9), both on the Anabaptist errors on baptism.
- Not read for this page: Large Catechism IV in the German column (the Triglot German OCR is Fraktur and unusable), Formula of Concord Solid Declaration II and VII on baptism, the Treatise on the Power and Primacy of the Pope.
- All records `[unverified: OCR]` (no Triglot page image was read for this list).

## baptism · reformed

89 records, 45 new against the page.

Ten most important new passages:

- `1Cor.6.11`: 2 document(s) (Belgic Confession; Heidelberg Catechism)
- `Eph.4.22-Eph.4.24`: 2 document(s) (Belgic Confession; Heidelberg Catechism)
- `John.19.34`: 2 document(s) (Belgic Confession; Heidelberg Catechism)
- `Matt.3.11`: 2 document(s) (Belgic Confession; Westminster Confession of Faith)
- `Rev.1.5`: 2 document(s) (Heidelberg Catechism; Larger Catechism)
- `1Cor.1.11-1Cor.1.13`: 1 document(s) (Larger Catechism)
- `1Cor.10.2`: 1 document(s) (Belgic Confession)
- `1Cor.12.25-1Cor.12.27`: 1 document(s) (Larger Catechism)
- `1Cor.15.29`: 1 document(s) (Larger Catechism)
- `1Cor.3.5`: 1 document(s) (Belgic Confession)

Not reached (from the list's own section):

- Heidelberg Q. 69–74 proofs: read in the Palatinate edition (Harbaugh, Reading 1889, OCR) in S1b; Belgic Art. 34 notes: unchanged.
- Westminster 1894 page images: not read; every record is `[unverified: OCR]`.
- Q. 166–167 clause attribution of the proofs (interleaved columns).

## baptism · baptist

61 records, 26 new against the page.

Ten most important new passages:

- `Mark.16.16`: 4 document(s) (First London Confession (1646); Orthodox Creed (1678); Second London Confession (1689); Standard Confession (1660))
- `Gal.3.27`: 4 document(s) (Baptist Catechism (e-text, Q. 97–101); NAFWB Treatise (2026) XVIII.1; Orthodox Creed (1678); Second London Confession (1689))
- `1Cor.4.1`: 2 document(s) (Baptist Faith and Message 1925; Second London Confession (1689))
- `Acts.18.8`: 2 document(s) (First London Confession (1646); Standard Confession (1660))
- `Acts.2.38`: 2 document(s) (Orthodox Creed (1678); Standard Confession (1660))
- `Mark.1.4`: 2 document(s) (Baptist Faith and Message 1925; Second London Confession (1689))
- `1Cor.12.13`: 1 document(s) (Orthodox Creed (1678))
- `1Cor.15.28-1Cor.15.29`: 1 document(s) (First London Confession (1646))
- `1Cor.15.29`: 1 document(s) (NAFWB Treatise (2026) XVIII.1)
- `Acts.2.37-Acts.2.38`: 1 document(s) (First London Confession (1646))

Not reached (from the list's own section):

- 1688 print: 28.1–2, 29.1–4 read on page images (A3: 29.1–2; A5: 28.1–2, 29.3–4); the 1688 wording of 29.1 and 29.2 clauses was not collated clause by clause.
- BF&M 1925/1963/2000 proof-text lists were not re-read from the official pages in this pass.
- Philadelphia Confession and Somerset: not used (the page and dossier do not rest on them). NAFWB, BUGB and the Baptist Catechism e-text are listed from the dossier rows only.

## baptism · orthodox

40 records, 27 new against the page.

Ten most important new passages:

- `Gal.3.27`: 2 document(s) (Confession of Dositheus (Synod of Jerusalem 1672); Orthodox Confession of Peter Mogila)
- `Heb.6.4`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `Mark.1.4`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `Titus.3.5`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `1Cor.6.11`: 1 document(s) (Orthodox Confession of Peter Mogila)
- `1Pet.3.21`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `Acts.10.47`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `Acts.16.33`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `Acts.22.16`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `Acts.8.12`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))

Not reached (from the list's own section):

- Philaret Q. 285–306 (Of Baptism) read in full on the OCR text (Schaff II pp. 491–493): Q. 288, 289, 291, 294, 296, 297 (already listed), 301 (Matt 16:24) and 305 (2 Pet 2:20) added; Q. 285–287, 290, 292, 293, 295, 298, 299, 300, 302, 303, 304, 306 print no Scripture reference (Q. 298 quotes Cyril of Jerusalem, Q. 295 Dionysius, Q. 299 Dionysius and Tertullian, with no Scripture reference); Q. 307–314 (Unction with Chrism: 1 John 2:20, 27; 2 Cor 1:21–22; Acts 8:14, 16; Exod 30:25; 1 Kings 1:39) belong to a different Mystery and are not collected.
- Dositheus: Decree XV (OCR, pp. 135–137), Chapter XV and Chapter XVI of the Confession (page images, pp. 201–202) read; the Decrees' Mystery lists give Mark 1:4 etc. only through Chapter XV. 1895 Encyclical (reception of Western baptism) and Jeremiah's Answers: not read (no print in the cached texts).
- Philaret and Mogila records are `[unverified: OCR]`; Mogila Q. 102–103 was not re-read in this session; Dositheus Decree XVI (pp. 139, 140, 142) and Confession Chapters XV–XVI were read on page images.

## eucharist · catholic

95 records, 58 new against the page.

Ten most important new passages:

- `John.13.1`: 2 document(s) (CCC; Roman Catechism (Catechism of the Council of Trent))
- `1Cor.12.13`: 1 document(s) (CCC)
- `2Cor.11.26`: 1 document(s) (CCC)
- `Acts.1.10`: 1 document(s) (Roman Catechism (Catechism of the Council of Trent))
- `Acts.5.41`: 1 document(s) (Roman Catechism (Catechism of the Council of Trent))
- `Eph.1.5`: 1 document(s) (Council of Trent (Waterworth 1848))
- `Gal.3.24`: 1 document(s) (CCC)
- `Gal.5.6`: 1 document(s) (Roman Catechism (Catechism of the Council of Trent))
- `Heb.10.20`: 1 document(s) (Roman Catechism (Catechism of the Council of Trent))
- `Heb.4.6`: 1 document(s) (Council of Trent (Waterworth 1848))

Not reached (from the list's own section):

- Sacrosanctum concilium 55, Orientalium ecclesiarum 5–6, GIRM, CIC canons, John Paul II audiences, Pontifical Council notes: not searched (no Scripture reference expected in the clause cited; not checked).
- Trent: Waterworth OCR; windows are the 90 words of OCR text before the printed reference, not a verified decree sentence. Only the doctrinal decrees of Sessions XIII, XXI, XXII were scanned (not the reform decrees), not only the chapters the page cites. After V4 the parser still misses some printed references (e.g. Mal 1:11, 1 Cor 10:21 and about 15 more on the same pages): treat the Trent rows as incomplete.
- Roman Catechism (Donovan 1829, OCR): the footnote lines of the chapter on the Eucharist were read by script (Part II, about pp. 143–177); markers and pages not collated. Florence and Lateran IV: see the closure file.
- Roman Catechism (Donovan 1829, OCR): the footnote lines of the chapter on the Eucharist were read by script (Part II, about pp. 143–177); markers and pages not collated. Florence and Lateran IV: see the closure file.
- Florence: the passage on the form of the Eucharist read (two quoted wordings, no reference printed); Exsultate Deo on the Eucharist (the section on the seven sacraments) names no Scripture; Laetentur caeli not searched for the Eucharist.

## eucharist · lutheran

78 records, 41 new against the page.

Ten most important new passages:

- `1Cor.10.17`: 1 document(s) (Apology)
- `1Cor.11.33`: 1 document(s) (Augsburg Confession)
- `1Cor.4.1`: 1 document(s) (Apology)
- `1Pet.1.2`: 1 document(s) (Apology of the Augsburg Confession)
- `1Pet.2.5`: 1 document(s) (Apology of the Augsburg Confession)
- `1Tim.6.15`: 1 document(s) (Solid Declaration)
- `2Cor.3.6`: 1 document(s) (Apology)
- `2Cor.5.20`: 1 document(s) (Apology)
- `2Cor.9.12`: 1 document(s) (Apology)
- `Col.3.4`: 1 document(s) (Solid Declaration of the Formula of Concord)

Not reached (from the list's own section):

- Triglot page images not read: every record is `[unverified: OCR]`.
- S1b: the seven references verifier V4 listed (Heb 10:10, 1 Pet 2:5, Heb 13:15, 1 Pet 1:2, Heb 5:1, Gal 5:19 ff., Col 3:4) were found in the Triglot English OCR with the printed forms V4 gave and are now listed, with Heb 10:14 (the next reference in the sentence of Heb 10:10); the remaining V4 item (Epitome VII, Matt 11:28, «item 25») was not found: the only Matt 11:28 in the Formula of Concord Eucharist articles is the one of Solid Declaration VII already listed.
- Apology XXIV: the «Ex. 29, 39 sq.; Dan. 8, 11 sq.; 12, 11» of the Latin column (V4: the English OCR garbled) was not read.
- Epitome VII and Solid Declaration VII (Eucharist) and Solid Declaration VIII: Scripture references the regex missed (named references without numbers): see T2 in the closure file; not searched beyond the V4 list.

## eucharist · reformed

210 records, 146 new against the page.

Ten most important new passages:

- `John.6.35`: 3 document(s) (Belgic Confession; Heidelberg Catechism; Larger Catechism)
- `Matt.7.6`: 3 document(s) (Heidelberg Catechism; Larger Catechism; Westminster Confession of Faith)
- `1Cor.11.20`: 2 document(s) (Larger Catechism; Westminster Confession of Faith)
- `1Cor.5.13`: 2 document(s) (Heidelberg Catechism; Westminster Confession of Faith)
- `Acts.20.7`: 2 document(s) (Belgic Confession; Westminster Confession of Faith)
- `John.6.51`: 2 document(s) (Belgic Confession; Heidelberg Catechism)
- `John.6.63`: 2 document(s) (Belgic Confession; Heidelberg Catechism)
- `1Cor.11.17`: 1 document(s) (Larger Catechism)
- `1Cor.2.14`: 1 document(s) (Belgic Confession)
- `2Chr.30.18-2Chr.30.19`: 1 document(s) (Larger Catechism)

Not reached (from the list's own section):

- Larger Catechism Q. 168–177 proof blocks (printed pp. 203–210): read on the page images by an extraction subagent in S1b (70 blocks; letters matched to clauses by eye, clause words typed from the image; not re-checked by S1b nor by a verifier): a verifier should re-read the Q. 171 and Q. 175 blocks first (Q. 171 «p»: the print reads «1 Cor. xiii. 5. [See above in letter m.]» while block m prints 2 Cor. xiii. 5; Q. 168 first block is lettered z).
- Larger Catechism Q. 168–177 proof blocks (printed pp. 203–210): read on the page images by an extraction subagent in S1b (70 blocks; letters matched to clauses by eye, clause words typed from the image; not re-checked by S1b nor by a verifier): a verifier should re-read the Q. 171 and Q. 175 blocks first (Q. 171 «p»: the print reads «1 Cor. xiii. 5. [See above in letter m.]» while block m prints 2 Cor. xiii. 5; Q. 168 first block is lettered z).
- Belgic Art. 35: the notes of pp. 428–431 were read in the OCR text (S1b), with the French-column abbreviations (Marc, Luc, Jean, Act., Es.) mapped; the page images were not read for this article.
- Heidelberg Q. 75–82 quoted institution words (1 Cor. 11, Matt. 26) are not assigned to verses.
- Schaff III page images of Art. 35 not read: the Belgic Art. 35 records are `[unverified: OCR]`; WCF 29, LC Q. 168 and SC Q. 96–97 were read on the page images and confirmed by V9.
- WLC/WSC clause-to-letter matching: done for Q. 168–177 only (the clause field of each row is the answer words carrying the letter); the other questions of the Larger and Shorter Catechisms are not matched.

## eucharist · baptist

47 records, 13 new against the page.

Ten most important new passages:

- `2Cor.6.14-2Cor.6.15`: 1 document(s) (Second London Confession (1689))
- `Acts.3.21`: 1 document(s) (Second London Confession (1689))
- `Exod.20.4-Exod.20.5`: 1 document(s) (Second London Confession (1689))
- `Heb.9.25-Heb.9.26`: 1 document(s) (Second London Confession (1689))
- `Heb.9.28`: 1 document(s) (Second London Confession (1689))
- `Luke.24.39`: 1 document(s) (Second London Confession (1689))
- `Luke.24.6`: 1 document(s) (Second London Confession (1689))
- `Matt.15.9`: 1 document(s) (Second London Confession (1689))
- `Matt.7.6`: 1 document(s) (Second London Confession (1689))
- `1Cor.4.1`: 1 document(s) (Baptist Faith and Message 1925)

Not reached (from the list's own section):

- 2LCF 30.7–30.8: the 1688 print p. 102 was read on the page image in S1b (margin notes l, m, n: the same references as McGlothlin's 1677 text at 30.8; 30.7's note l is new to this list); the 1688 margins of chapter 30 for 30.2–30.6 were read earlier by A5; chapter 30 in the 1719 print was not read; p. 102 ends with the catchword «CHAP.» (a new chapter follows); p. 103 was not read.
- First London, Standard, Somerset: the dossier found no Supper chapter comparable to 2LCF 30; not searched here.

## eucharist · orthodox

32 records, 20 new against the page.

Ten most important new passages:

- `1Cor.11.23`: 2 document(s) (Confession of Dositheus (Synod of Jerusalem 1672); Orthodox Confession of Peter Mogila)
- `John.6.53`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `Mark.14.22`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `1Cor.10.16`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `1Cor.11.27`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `1Cor.12.13`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `2Cor.5.7`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `Acts.1.9`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `Acts.3.21`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `Col.3.1`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))

Not reached (from the list's own section):

- Philaret Q. 315–350 read in full on the OCR text (Schaff II pp. 495–499): references printed at Q. 329, 338, 341, 342, 344, 350 (all already listed); Q. 315–328, 330–337, 339, 340, 343, 345–349 print no Scripture reference (Q. 340 quotes John of Damascus; Q. 343 refers to Mogila I Q. 90; Q. 332 mentions blood and water from the pierced side without a reference).
- Dositheus: Decree XV (OCR; footnotes partly garbled), Chapter XV and Chapter XVII of the Confession (page images, pp. 201, 205) read; Decree XVII read earlier on page images (pp. 143–150).
- Mogila Q. 106–107 read earlier (six references in Q. 107); Q. 108 onward is other Mysteries. 1895 Encyclical and Jeremiah's Answers: not read (no print in the cached texts).
- Mogila and Philaret: `[unverified: OCR]`, page images not read.

## papacy · catholic

121 records, 77 new against the page.

Ten most important new passages:

- `Acts.20.28`: 2 document(s) (Catechism of the Catholic Church; Lumen gentium)
- `John.10.11`: 2 document(s) (Catechism of the Catholic Church; Lumen gentium)
- `Luke.6.13`: 2 document(s) (Catechism of the Catholic Church; Lumen gentium)
- `Mark.16.15`: 2 document(s) (Catechism of the Catholic Church; Lumen gentium)
- `Acts.1.8`: 1 document(s) (Lumen gentium)
- `1Cor.4.15`: 1 document(s) (Lumen gentium)
- `1Cor.1.11`: 1 document(s) (Unitatis redintegratio)
- `1Cor.11.18-1Cor.11.19`: 1 document(s) (Unitatis redintegratio)
- `1Cor.11.22`: 1 document(s) (Unitatis redintegratio)
- `1Cor.12.11`: 1 document(s) (Lumen gentium)

Not reached (from the list's own section):

- CCC: §§85–86, 551–553, 815–818, 833–838, 861–862, 869–870, 880–896, 1369, 1441/1444, 2035, 2244–2246 fetched; footnote audit done for biblical references, but no exhaustive inline-reference audit beyond §869. Some are dossier context beyond the current page’s citations. __P46, __P47, __P49 and __P4A were fetched while locating §1441; correct target is __P4C.
- LG official English §12 notes have defects: note 111 prints “Jn. 2:20, 27” without 1; notes 115–116 do not align with the adjacent body quotations. These unresolved references were excluded rather than silently repaired; collate the official Spanish or print. Notes with ff./sqq. encode only starting verses. Note 162’s “Acts 1:8- 2:1 ff, 9:15” is ambiguous: only its explicit endpoints and 9:15 were encoded.
- Pastor aeternus proem alludes to John 17:21 and 20:21 without verse numbers. No new OSIS mapping was invented for the allusions; ch. IV’s identifiable quotations are already supported by the current page but their numeric locators are absent from this HTML. Schaff 1877/1896 scan was not collated in this pass.
- GS 42/76 and Sempiternus Rex Christus fetched, but not exhaustively audited for references. Donum veritatis 17, CDF Professio fidei commentary, CIC cited canons and Florence Mansi clause not reached. No claim of silence.
- Full surrounding citing sentences are not included for copyright Holy See works: exact citing parentheses/footnotes are stored. Retrieve context at the linked locator before import; this is a deliberate agent’s call, not a completed sentence audit.
- CDF note 7 says “and par.”: unspecified parallels were not inferred; note 23’s English “Cor 11:28” lacks the epistle number and is tagged unverified.

## papacy · lutheran

56 records, 40 new against the page.

Ten most important new passages:

- `Acts.5.29`: 3 document(s) (Apology of the Augsburg Confession; Augsburg Confession; Treatise on the Power and Primacy of the Pope)
- `Gal.1.8`: 2 document(s) (Augsburg Confession; Treatise on the Power and Primacy of the Pope)
- `2Cor.10.4`: 2 document(s) (Augsburg Confession; Treatise on the Power and Primacy of the Pope)
- `Luke.10.16`: 2 document(s) (Apology of the Augsburg Confession; Augsburg Confession)
- `Matt.7.15`: 2 document(s) (Augsburg Confession; Treatise on the Power and Primacy of the Pope)
- `1Cor.11.5`: 1 document(s) (Augsburg Confession)
- `1Cor.14.30`: 1 document(s) (Augsburg Confession)
- `1Cor.14.40`: 1 document(s) (Augsburg Confession)
- `1Pet.2.9`: 1 document(s) (Treatise on the Power and Primacy of the Pope)
- `1Pet.5.1`: 1 document(s) (Treatise on the Power and Primacy of the Pope)

Not reached (from the list's own section):

- Triglot OCR route succeeded. Images fetched but not yet read for AC pp.85/87/89/91/93; Ap pp.443–451 and SA pp.471–475 not visually collated this pass. Treatise pp.505/507/511/519/521/525–527 remain OCR-only. Tags distinguish these from pp.513/515/517/523 image checks.
- AC XXVIII.25 also quotes the power given “to edification, and not to destruction” without a local verse number; explicit 2 Cor.13:10 is encoded from XXVIII.36. SA II.4 prints Rev.12 as a chapter-only reference (p.473), not a verse: retained here, not silently converted to a verse in JSON.
- Treatise §62 prints “2 John 1” (p.523). The single-chapter book reference was left outside the verse-only JSON because this pass did not settle whether the print means the verse or the chapter. §10 Gal.2:7 f., §62 Titus1:5 f. and §72 Gal.1:7 f. remain at their starting verse; endpoint not inferred. §22’s Matt16:18 f. is joined to adjacent verse19, also expressly quoted as keys in that paragraph.
- Treatise §39 prints 2 Thess.2:3 while quoting words extending into verse4; encode the printed reference only. SA II.4’s separate 2:4 reference remains distinct. Likewise 1 Cor.3:6 is preserved as printed in Tr §11, not silently “corrected” to the following quotation’s verse.
- Other loci in AC/Ap, Small and Large Catechisms, Formula of Concord (including rule-and-norm passages), and SA outside II.4 were not exhaustively searched. No claim of a complete Book of Concord inventory or silence. Present-day church-body subscription is outside this research list.
- Web transcription not used as evidence. Public-domain English is stored directly; no Spanish translation through English. Citing fragments taken from OCR remain literal normalized OCR (line-break words joined), and must be collated before import; no clean transcription is implied by their quotation marks.

## papacy · reformed

103 records, 57 new against the page.

Ten most important new passages:

- `Acts.15.2`: 1 document(s) (Westminster Confession of Faith)
- `Acts.15.4`: 1 document(s) (Westminster Confession of Faith)
- `Rev.2-Rev.3`: 1 document(s) (Westminster Confession of Faith)
- `1Cor.15.25`: 1 document(s) (Westminster Larger Catechism)
- `1Cor.7.14`: 1 document(s) (Westminster Confession of Faith)
- `1Tim.1.20`: 1 document(s) (Westminster Confession of Faith)
- `1Tim.2.1-1Tim.2.2`: 1 document(s) (Westminster Confession of Faith)
- `2Chr.29-2Chr.30`: 1 document(s) (Westminster Confession of Faith)
- `2Thess.1.8-2Thess.1.9`: 1 document(s) (Westminster Larger Catechism)
- `2Thess.2.8-2Thess.2.9`: 1 document(s) (Westminster Confession of Faith)

Not reached (from the list's own section):

- 1894 proof lists: no image collation in this pass. WCF25.6 note o prints 2 Thess.2:3,4,8,9 (last verse continues onto p.88), unlike the current page’s Spanish-edition range 3–5. WLC45 OCR prints Isa.55:6 beside wording suggesting another verse; it is preserved as OCR, not silently corrected. Image must settle the number.
- WCF30.3 prints 1 Cor.11:27 “to the end”; WCF31.2 prints 2 Chr.19:8 “to the end”. These two open ranges are documented here rather than given invented end verses. Whole chapters Rev.2–3, 2 Chr.29–30 and Ps.110 are retained without expanding into artificial verse counts.
- WCF31.5 apparatus p.97–98, WCF1.10 and 23.4; WLC43–44,62–65,191; WSC23–26: not extracted before the usage cutoff. No claim of silence.
- Heidelberg and Belgic: requested Schaff III scan creedschristendo03scha downloaded successfully. Inspected OCR headers: Heidelberg/Belgic sections are multilingual (the Belgic pages located at leaves431–436, printed416–421, show French/Latin columns); not collated or extracted before cutoff. The scan’s title/imprint must be checked against the requested 1877 edition before quoting. These sources remain required for this doctrine under the November 1 decision.
- OPC locator route not needed for the WCF loci located directly in the 1894 scan; not consulted as a substitute for that historical apparatus. No present-day adoption or universal Reformed-position claim is made.

## papacy · baptist

70 records, 22 new against the page.

Ten most important new passages:

- `Ps.102.28`: 2 document(s) (Orthodox Creed (1678); Second London Confession (1689))
- `Ps.72.17`: 2 document(s) (Orthodox Creed (1678); Second London Confession (1689))
- `Eph.1.10`: 2 document(s) (Orthodox Creed (1678); Second London Confession (1689))
- `John.10.16`: 2 document(s) (Orthodox Creed (1678); Second London Confession (1689))
- `Eph.4.11-Eph.4.12`: 1 document(s) (Second London Confession (1689))
- `Matt.28.18-Matt.28.20`: 1 document(s) (Second London Confession (1689))
- `Rev.12.17`: 1 document(s) (Second London Confession (1689))
- `1Cor.15.1`: 1 document(s) (Second London Confession (1689))
- `2Thess.2.11-2Thess.2.12`: 1 document(s) (Second London Confession (1689))
- `2Thess.2.2-2Thess.2.9`: 1 document(s) (Second London Confession (1689))

Not reached (from the list's own section):

- 2LCF 26.7 onward in the 1688 print not read; 26.1–26.6 read on the page images by A5.
- 2LCF 26.1, 26.2, 26.5 onward margins; First London and Somerset church chapters; AP XIV; NH XIII: not searched here.

## papacy · orthodox

46 records, 38 new against the page.

Ten most important new passages:

- `Col.1.18`: 1 document(s) (Mogila, Orthodox Confession; Patriarchal and Synodal Encyclical (1895))
- `Rev.21.14`: 1 document(s) (Mogila, Orthodox Confession; Patriarchal and Synodal Encyclical (1895))
- `1Cor.3.11`: 1 document(s) (Mogila, Orthodox Confession)
- `1Pet.5.4`: 1 document(s) (Mogila, Orthodox Confession)
- `1Tim.3.15`: 1 document(s) (Mogila, Orthodox Confession)
- `2Cor.11.2`: 1 document(s) (Mogila, Orthodox Confession)
- `Acts.1.8`: 1 document(s) (Mogila, Orthodox Confession)
- `Acts.11.17`: 1 document(s) (Mogila, Orthodox Confession)
- `Acts.11.2`: 1 document(s) (Mogila, Orthodox Confession)
- `Acts.11.22`: 1 document(s) (Mogila, Orthodox Confession)

Not reached (from the list's own section):

- 1848 encyclical: dossier route is Fordham web transcription; not used as a dated print. No licensed/public-domain print collated this pass. Its full apparatus remains unextracted.
- 1895 §XIV p. 41 note 1 also prints “Rom. i. 9, xv. 15–xvi”: the open cross-chapter range has no explicit end verse. Rom. 1:9 is encoded; Rom. 15:15 through chapter 16 is recorded here but left out of the OSIS array pending a deliberate chapter-range representation. Read English §§XIV–XIX OCR, but not the entire encyclical or all Greek facing pages. No claim of full coverage.
- Dositheus X p. 126 editorial Kimmel note invokes Rev. ii and iii without verse numbers; left outside the verse-only JSON. It is editorial apparatus, not the confession’s own direct proof text. Robertson notes are not newly certified as present in the original Greek recension.
- Philaret Q.271 has biblical promise allusions without printed numeric references; Q.272’s Noah/baptism allusion likewise lacks a printed number. Do not silently add Matt.16:18, Matt.28:20, Eph.3:21 or 1 Pet.3:21. Mogila Q.85’s apostolic-foundation allusion has no Ephesians number. Q.83’s printed Eph.4:5 quotation reaches words of verse 6, but only its printed verse 5 is encoded. Q.84 likewise prints Luke24:47, Acts11:2/17 and Acts15:22 beside longer quotations; only the printed references are encoded.
- Received canons (Constantinople I 3, Chalcedon 28, Trullo 36) and other conciliar loci (Honorius, 879–880, 1484) were not newly searched for Scripture in this pass. The dossier’s “no proof list” statement has not been independently certified.
- Mogila’s immediately adjacent Q.86 was included as an agent’s call: it explicitly names conciliar judgment of popes, so excluding it merely because the old dossier stopped at Q.85 would miss the requested doctrine. Other sections of Mogila were not exhaustively searched.

## sola-scriptura · catholic

65 records, 37 new against the page.

Ten most important new passages:

- `1Tim.2.4`: 1 document(s) (Dei filius (First Vatican Council, 1870))
- `Rom.1.20`: 1 document(s) (Dei filius (First Vatican Council, 1870))
- `1Cor.2.9`: 1 document(s) (Dei filius (First Vatican Council, 1870))
- `1John.3.2`: 1 document(s) (Dei verbum)
- `1Pet.2.9`: 1 document(s) (Dei filius (First Vatican Council, 1870))
- `1Tim.6.14`: 1 document(s) (Dei verbum)
- `2Cor.1.20`: 1 document(s) (Dei verbum)
- `2Cor.10.5-2Cor.10.6`: 1 document(s) (Dei verbum)
- `2Cor.3.13`: 1 document(s) (Dei verbum)
- `2Cor.4.6`: 1 document(s) (Dei verbum)

Not reached (from the list's own section):

- Footnote markers «(3)» of Dei verbum are dropped from the quoted fragments without a mark (V7).
- Dei Filius (First Vatican Council): the Holy See page is Latin only in this pass; not read for references.
- Vatican II LG 12, 25; UR 21; SC 7, 24, 51; DH 10; UUS 79; VD 46, 87; Trent VI ch. 8, 20; CIC canons; CDF commentary: cited by the page, not read for references.
- CCC paragraphs: the footnotes of every cited paragraph and the inline references were parsed (including DV and Trent cross-references, which are not Scripture and not counted).
- Dei filius: the Holy See Latin prints no reference; the editors' footnotes 3–35 of the online English reproduction were collected in S1b (marker positions not available).
- CCC 9193: the Catechism has no paragraph 9193 (2,865 paragraphs); agent's call in S1b: it is read as §§91–93 (a joined range) and those three paragraphs are collected; the page's scripture list was not re-opened to confirm.

## sola-scriptura · lutheran

33 records, 20 new against the page.

Ten most important new passages:

- `1Cor.11.5`: 1 document(s) (Augsburg Confession)
- `1Cor.14.30`: 1 document(s) (Augsburg Confession)
- `1Cor.14.40`: 1 document(s) (Augsburg Confession)
- `1Pet.5.3`: 1 document(s) (Augsburg Confession)
- `1Tim.4.1`: 1 document(s) (Augsburg Confession)
- `2Cor.13.10`: 1 document(s) (Augsburg Confession)
- `2Cor.13.8`: 1 document(s) (Augsburg Confession)
- `2Tim.3.16`: 1 document(s) (Formula of Concord, Solid Declaration)
- `Acts.15.10`: 1 document(s) (Augsburg Confession)
- `Acts.15.20`: 1 document(s) (Augsburg Confession)

Not reached (from the list's own section):

- Triglot page images not read: every record is `[unverified: OCR]` except the two rows taken from the dossier.
- The nine references V7 reported as missing from AC XXVIII were looked for in the Triglot English OCR: eight are printed in AC XXVIII (Acts 15:20, Acts 5:29, 1 Pet 5:3, 1 Tim 4:1, 1 Cor 11:5, 14:30, 14:40, Phil 2:14) and Gal 5:1 is printed in Apology XXVIII.17, not in the Confession; all nine are now listed.
- The seven references of the nine V7 reports that the other lists (Papacy · Lutheran) also lack: Acts 5:29 (AC XXVIII) and 1 Pet 5:3 were added to that list too.

## sola-scriptura · reformed

96 records, 40 new against the page.

Ten most important new passages:

- `1Pet.4.11`: 1 document(s) (Belgic Confession)
- `2Tim.3.14`: 1 document(s) (Belgic Confession)
- `Isa.1.12`: 1 document(s) (Belgic Confession)
- `John.4.25`: 1 document(s) (Belgic Confession)
- `1Cor.12.6`: 1 document(s) (Belgic Confession)
- `1Cor.15.2`: 1 document(s) (Belgic Confession)
- `1Cor.15.2-1Cor.15.3`: 1 document(s) (Belgic Confession)
- `1Cor.2.4`: 1 document(s) (Belgic Confession)
- `1Pet.1.1`: 1 document(s) (Belgic Confession)
- `1Tim.1.3`: 1 document(s) (Belgic Confession)

Not reached (from the list's own section):

- Larger Catechism Q. 2–4 and 157–159 and Shorter Catechism Q. 2–3 proof blocks: the first OCR parse was removed after verifier V5 found about a third of comparable catechism blocks wrong; they need a page-image reading (the proofs of the Larger Catechism are printed in interleaved columns).
- Belgic Confession Art. 2–7 (Schaff III 1877) notes: not collected.
- WCF clause-to-letter matching not done.

## sola-scriptura · baptist

102 records, 63 new against the page.

Ten most important new passages:

- `1Cor.14.9`: 2 document(s) (Orthodox Creed (1678); Second London Confession (1689))
- `Acts.15.15-Acts.15.16`: 2 document(s) (Orthodox Creed (1678); Second London Confession (1689))
- `Col.3.16`: 2 document(s) (Orthodox Creed (1678); Second London Confession (1689))
- `Eph.2.20`: 2 document(s) (Baptist Faith and Message 1925; Second London Confession (1689))
- `Isa.8.20`: 2 document(s) (Orthodox Creed (1678); Second London Confession (1689))
- `1Cor.11.13-1Cor.11.14`: 1 document(s) (Second London Confession (1689))
- `1Cor.14.11-1Cor.14.12`: 1 document(s) (Second London Confession (1689))
- `1Cor.14.24`: 1 document(s) (Second London Confession (1689))
- `1Cor.14.26`: 1 document(s) (Second London Confession (1689))
- `1Cor.14.28`: 1 document(s) (Second London Confession (1689))

Not reached (from the list's own section):

- 2LCF 1.1–1.3 margins (1688 pp. 1–2, leaves n24–n25): not read; the 1719 notes for 1.8–1.10 not read. 1688 pp. 4–9 (1.4–1.10) read on page images: A3 (1.4, 1.5) and A5 (1.6–1.10).
- Standard Confession XIII (Acts 24:14 / 2:42) and Somerset: not collected as Scripture-for-Scripture rows.

## sola-scriptura · orthodox

107 records, 102 new against the page.

Ten most important new passages:

- `Rom.10.10`: 2 document(s) (Confession of Dositheus (Synod of Jerusalem 1672); Orthodox Confession of Peter Mogila)
- `2Tim.3.16`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `Acts.17.11`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `John.5.39`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `1Cor.11.12`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `1Cor.11.2`: 1 document(s) (Orthodox Confession of Peter Mogila)
- `1Cor.12.28`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `1Cor.15.3-1Cor.15.4`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `1Cor.2.10`: 1 document(s) (Longer Catechism of the Eastern Church (Philaret))
- `1Cor.2.7-1Cor.2.8`: 1 document(s) (Longer Catechism of the Eastern Church (Philaret))

Not reached (from the list's own section):

- Philaret Q. 1–62 read (OCR, Schaff II pp. 445–455): references collected from Q. 14, 15, 18, 23, 32, 37, 58, 60; Q. 2, 4, 5, 6, 8 and 62 print references about catechism, faith and works and the theological virtues, not collected; Q. 16–17, 19–22, 24–31, 33–36, 38–57 print no Scripture reference (Q. 33 and 34 name the books of the Old Testament, Q. 44–55 the New Testament, none with a verse; Q. 24 quotes Basil, Q. 18 Irenaeus).
- Philaret page images not read (`[unverified: OCR]`).
- Mogila Part I Q. 1–12 read in the OCR: Q. 4 (the sources of the articles of faith: Scripture and tradition) collected; Q. 1 (James), Q. 8 (the Trinity), Q. 9, 11, 12 print references about faith and the Trinity, not collected; the rest of Mogila Part I that mentions Scripture (Q. 16–36, Q. 54–126) was not read for this page.
- Dositheus: Decree II (p. 113, three footnotes), the Decrees' appended Questions I–III (pp. 152–156, OCR; Question III prints none), and the Confession's appended Questions I–III (pp. 208–212, read on the page images, reference lists). Decree III (predestination) prints 1 Tim 2:4, James 1:13, Luke 15:7: not collected (not about Scripture). Question IV (images) prints none in the lines read.
- Jeremiah's Answers and the 1848 Encyclical: not read (no print in the cached texts).
