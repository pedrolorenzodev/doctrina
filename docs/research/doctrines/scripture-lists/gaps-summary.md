# Gaps summary: Scripture lists against the pages' `scripture` lists

Status: draft, NOT verified by Pedro

Generated 2026-11-01 by session A5 from the 20 `scripture-lists/*.json` files (the four Papacy files for Catholic, Orthodox, Lutheran, Reformed are Codex's partial checkpoints; the other 16 are A5's). «New» = a passage the documents cite that no verse of the page's `scripture` list covers (A5 files: single-range records; Codex files: its own `inPage`). Ranking of the «ten most important new»: distinct documents citing it, then distinct locators. A passage cited by one document at one locator is the usual case; a new passage is not yet a recommendation to add it to a page. All counts come from drafts: see each file's tags and the verification files.

| Page | Records | New | Verifier (Sonnet) | Main routes not reached |
|---|---|---|---|---|
| baptism · catholic | 92 | 58 | V1 (+ parser audit) | Florence, *Exsultate Deo* (FLOexs) and Lateran IV constitution 1 (LAT1): cited by the page, no Scripture reference collected in this pass (n; Roman Catechism and CIC canons cited by the page (CIC 842, 849, 854, 861, 867, 869): canons carry no Scripture references. |
| baptism · lutheran | 6 | 0 | V1 | Formula of Concord (Epitome XII, Solid Declaration XII) on the Anabaptists and baptism: not searched in this pass.; Augsburg Confession IX: prints no Scripture reference (checked the English column, ~70 words). |
| baptism · reformed | 79 | 38 | V2 | Scripture proofs of Heidelberg Q. 69–74 and Belgic Art. 34 in a printed Reformed edition other than Schaff 1877: none read.; Westminster 1894 page images: not read; every record is `[unverified: OCR]`. |
| baptism · baptist | 61 | 26 | V2 (+1688 margins read by A5) | 1688 print: 28.1–2, 29.1–4 read on page images (A3: 29.1–2; A5: 28.1–2, 29.3–4); the 1688 wording of 29.1 and 29.2 clauses was not collated ; BF&M 1925/1963/2000 proof-text lists were not re-read from the official pages in this pass. |
| baptism · orthodox | 18 | 10 | no | 1895 Encyclical of the Patriarchate of Constantinople (the page/dossier use it for the reception of Western baptism): not searched in this p; Dositheus Decree XV (the Mysteries) and the Jeremiah Answers: not searched for references. |
| eucharist · catholic | 60 | 31 | V4 | Florence (Exsultate Deo, Laetentur caeli), Lateran IV, Roman Catechism (Donovan 1829) cited by the page: not read for references.; Sacrosanctum concilium 55, Orientalium ecclesiarum 5–6, GIRM, CIC canons, John Paul II audiences, Pontifical Council notes: not searched (no |
| eucharist · lutheran | 70 | 35 | V4 | Verifier V4 reports seven references printed in the English columns that this list lacks (Heb 10:10, 1 Pet 2:5, Heb 13:15, 1 Pet 1:2, Heb 5:; Triglot page images not read: every record is `[unverified: OCR]`. |
| eucharist · reformed | 53 | 14 | V5 + V9 (rebuilt from images) | Larger Catechism Q. 169–177 proof blocks: the first OCR parse was rejected by verifier V5 (about a third of the records wrong, Q. 170 refs f; WLC/WSC clause-to-letter matching not done (interleaved columns). |
| eucharist · baptist | 47 | 13 | no (1688 margins read by A5) | 2LCF 30.7–30.8 margins (1688 pp. 102–103) and all of chapter 30 in the 1719 print: not read; 30.1–30.6 (and 28.1) read on the 1688 page imag; First London, Standard, Somerset: the dossier found no Supper chapter comparable to 2LCF 30; not searched here. |
| eucharist · orthodox | 14 | 3 | V5 | Mogila: V5 found the six references under Q. 107 in the print (the OCR run from the «Question 106» heading covers Q. 106–107); Q. 108 onward; Philaret Q. 318–346 (the Liturgy) was scanned by regex for «Book roman. N»; Philaret Q. 350 added after V5. Orthodox 1895 encyclical and Jer |
| papacy · catholic | 114 | 79 | V3 (corrections applied to JSON) | CCC: §§85–86, 551–553, 815–818, 833–838, 861–862, 869–870, 880–896, 1369, 1441/1444, 2035, 2244–2246 fetched; footnote audit done for biblic; LG official English §12 notes have defects: note 111 prints “Jn. 2:20, 27” without 1; notes 115–116 do not align with the adjacent body quot |
| papacy · lutheran | 55 | 39 | V6 (corrections applied to JSON) | Triglot OCR route succeeded. Images fetched but not yet read for AC pp.85/87/89/91/93; Ap pp.443–451 and SA pp.471–475 not visually collated; AC XXVIII.25 also quotes the power given “to edification, and not to destruction” without a local verse number; explicit 2 Cor.13:10 is enco |
| papacy · reformed | 103 | 57 | V6 (corrections applied to JSON) | 1894 proof lists: no image collation in this pass. WCF25.6 note o prints 2 Thess.2:3,4,8,9 (last verse continues onto p.88), unlike the curr; WCF30.3 prints 1 Cor.11:27 “to the end”; WCF31.2 prints 2 Chr.19:8 “to the end”. These two open ranges are documented here rather than given |
| papacy · baptist | 70 | 22 | V8 | 2LCF 26.7 onward in the 1688 print not read; 26.1–26.6 read on the page images by A5.; 2LCF 26.1, 26.2, 26.5 onward margins; First London and Somerset church chapters; AP XIV; NH XIII: not searched here. |
| papacy · orthodox | 46 | 38 | V3 (corrections applied to JSON) | 1848 encyclical: dossier route is Fordham web transcription; not used as a dated print. No licensed/public-domain print collated this pass. ; 1895 §XIV p. 41 note 1 also prints “Rom. i. 9, xv. 15–xvi”: the open cross-chapter range has no explicit end verse. Rom. 1:9 is encoded; Rom |
| sola-scriptura · catholic | 37 | 13 | V7 | CCC 9193: paragraph not found by the page parser; Footnote markers «(3)» of Dei verbum are dropped from the quoted fragments without a mark (V7). |
| sola-scriptura · lutheran | 24 | 11 | V7 | AC XXVIII English refs V7 reports as missing: Acts 15:20, Acts 5:29, 1 Pet 5:3, 1 Tim 4:1, Gal 5:1, 1 Cor 11:5, 14:30, 14:40, Phil 2:14 (the; Triglot page images not read: every record is `[unverified: OCR]` except the two rows taken from the dossier. |
| sola-scriptura · reformed | 62 | 9 | V9 (rebuilt from images) | Larger Catechism Q. 2–4 and 157–159 and Shorter Catechism Q. 2–3 proof blocks: the first OCR parse was removed after verifier V5 found about; Belgic Confession Art. 2–7 (Schaff III 1877) notes: not collected. |
| sola-scriptura · baptist | 102 | 63 | V8 | 2LCF 1.1–1.3 margins (1688 pp. 1–2, leaves n24–n25): not read; the 1719 notes for 1.8–1.10 not read. 1688 pp. 4–9 (1.4–1.10) read on page im; Standard Confession XIII (Acts 24:14 / 2:42) and Somerset: not collected as Scripture-for-Scripture rows. |
| sola-scriptura · orthodox | 6 | 3 | no | Philaret page images not read (`[unverified: OCR]`); Q. 43–55 (the New Testament canon) not scanned for references.; Mogila Part I Q. 1–12 scanned for references (Q. 4 is the passage on Scripture and tradition; the other references there are about faith and |

## baptism · catholic

92 records, 58 new against the page.

Ten most important new passages:

- `Rom.8.17`: 2 document(s) (CCC; Council of Trent (Waterworth 1848))
- `1Cor.6.19`: 1 document(s) (CCC)
- `2Cor.5.17`: 1 document(s) (CCC)
- `1Cor.10.1-1Cor.10.6`: 1 document(s) (CCC)
- `1Cor.12.27`: 1 document(s) (CCC)
- `1Cor.16.15-1Cor.16.16`: 1 document(s) (CCC)
- `1Cor.6.15`: 1 document(s) (CCC)
- `1John.4.10`: 1 document(s) (CCC)
- `1John.5.6-1John.5.8`: 1 document(s) (CCC)
- `1Pet.1.23`: 1 document(s) (CCC)

Not reached (from the list's own section):

- Florence, *Exsultate Deo* (FLOexs) and Lateran IV constitution 1 (LAT1): cited by the page, no Scripture reference collected in this pass (not read for references).
- Roman Catechism and CIC canons cited by the page (CIC 842, 849, 854, 861, 867, 869): canons carry no Scripture references.
- Trent: Waterworth OCR only. Known gaps after the V1 verification: the OCR parser does not catch every form («Actsii.», roman «X», «John i.' 29», «viii. i»), so some printed references of Sessions V, VI and VII (e.g. Session V John 1:29, Rom 8:1, Rom 6:4, Eph 4:22-24, 2 Tim 2:5; Session VI ch. 6 Heb 11:6) may be missing; the «sentence» is a window of OCR text, not the decree sentence; `Acts 4:2` is probably Acts 4:12 and Gal 3:23 (Session XIV) probably Gal 3:27 (unconfirmed, page image not read).
- CCC: every paragraph the page cites (including the ones listed only in `citations:` arrays) was parsed from the official English pages, footnotes AND inline references; 2 readings are flagged where the page prints a non-existent verse or a missing colon.

## baptism · lutheran

6 records, 0 new against the page.

Ten most important new passages:


Not reached (from the list's own section):

- Formula of Concord (Epitome XII, Solid Declaration XII) on the Anabaptists and baptism: not searched in this pass.
- Augsburg Confession IX: prints no Scripture reference (checked the English column, ~70 words).
- Triglot page images not read: every record is `[unverified: OCR]` (the loci and sentences were matched in the OCR text).

## baptism · reformed

79 records, 38 new against the page.

Ten most important new passages:

- `Matt.3.11`: 2 document(s) (Belgic Confession; Westminster Confession of Faith)
- `1Cor.1.11-1Cor.1.13`: 1 document(s) (Larger Catechism)
- `1Cor.10.2`: 1 document(s) (Belgic Confession)
- `1Cor.12.25-1Cor.12.27`: 1 document(s) (Larger Catechism)
- `1Cor.15.29`: 1 document(s) (Larger Catechism)
- `1Cor.3.5`: 1 document(s) (Belgic Confession)
- `1Cor.3.7`: 1 document(s) (Belgic Confession)
- `1Cor.6.11`: 1 document(s) (Belgic Confession)
- `Acts.10.2`: 1 document(s) (Westminster Confession of Faith)
- `Acts.10.22`: 1 document(s) (Westminster Confession of Faith)

Not reached (from the list's own section):

- Scripture proofs of Heidelberg Q. 69–74 and Belgic Art. 34 in a printed Reformed edition other than Schaff 1877: none read.
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

18 records, 10 new against the page.

Ten most important new passages:

- `Gal.3.27`: 2 document(s) (Confession of Dositheus (Synod of Jerusalem 1672); Orthodox Confession of Peter Mogila)
- `1Cor.6.11`: 1 document(s) (Orthodox Confession of Peter Mogila)
- `Acts.16.33`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `Acts.8.12`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `Col.3.9`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `Heb.6.4`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `Matt.19.12`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `Matt.3.11`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `Rom.5.19`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `Titus.3.5`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))

Not reached (from the list's own section):

- 1895 Encyclical of the Patriarchate of Constantinople (the page/dossier use it for the reception of Western baptism): not searched in this pass.
- Dositheus Decree XV (the Mysteries) and the Jeremiah Answers: not searched for references.
- Philaret Q. 292–293 (infants): no Scripture reference printed there (checked the OCR text).
- Mogila and Philaret records are `[unverified: OCR]` (page images not read); Dositheus XVI was read on the page images (printed pp. 139, 140, 142; p. 141 and 143 carry no scripture footnote).

## eucharist · catholic

60 records, 31 new against the page.

Ten most important new passages:

- `1Cor.12.13`: 1 document(s) (CCC)
- `2Cor.11.26`: 1 document(s) (CCC)
- `Eph.1.5`: 1 document(s) (Council of Trent (Waterworth 1848))
- `Gal.3.24`: 1 document(s) (CCC)
- `Heb.4.6`: 1 document(s) (Council of Trent (Waterworth 1848))
- `Heb.9.5`: 1 document(s) (Council of Trent (Waterworth 1848))
- `Isa.11.2`: 1 document(s) (Council of Trent (Waterworth 1848))
- `John.10.15`: 1 document(s) (Ecclesia de Eucharistia)
- `John.10.17-John.10.18`: 1 document(s) (Ecclesia de Eucharistia)
- `John.10.25`: 1 document(s) (CCC)

Not reached (from the list's own section):

- Florence (Exsultate Deo, Laetentur caeli), Lateran IV, Roman Catechism (Donovan 1829) cited by the page: not read for references.
- Sacrosanctum concilium 55, Orientalium ecclesiarum 5–6, GIRM, CIC canons, John Paul II audiences, Pontifical Council notes: not searched (no Scripture reference expected in the clause cited; not checked).
- Trent: Waterworth OCR; windows are the 90 words of OCR text before the printed reference, not a verified decree sentence. Only the doctrinal decrees of Sessions XIII, XXI, XXII were scanned (not the reform decrees), not only the chapters the page cites. After V4 the parser still misses some printed references (e.g. Mal 1:11, 1 Cor 10:21 and about 15 more on the same pages): treat the Trent rows as incomplete.

## eucharist · lutheran

70 records, 35 new against the page.

Ten most important new passages:

- `1Cor.10.17`: 1 document(s) (Apology)
- `1Cor.11.33`: 1 document(s) (Augsburg Confession)
- `1Cor.4.1`: 1 document(s) (Apology)
- `1Tim.6.15`: 1 document(s) (Solid Declaration)
- `2Cor.3.6`: 1 document(s) (Apology)
- `2Cor.5.20`: 1 document(s) (Apology)
- `2Cor.9.12`: 1 document(s) (Apology)
- `Dan.11.38`: 1 document(s) (Apology)
- `Deut.16.10`: 1 document(s) (Apology)
- `Exod.20.7`: 1 document(s) (Augsburg Confession)

Not reached (from the list's own section):

- Verifier V4 reports seven references printed in the English columns that this list lacks (Heb 10:10, 1 Pet 2:5, Heb 13:15, 1 Pet 1:2, Heb 5:1, Gal 5:19, Col 3:4): the regex patterns of this pass did not locate them in the OCR; the Epitome VII range was corrected (ten rows from Epitome VI removed); Matt 9:12 / 11:5 and similar «N; N» continuations were read from the print as the print gives them.
- Triglot page images not read: every record is `[unverified: OCR]`.
- The Apology and Solid Declaration windows were matched by regex; named references without numbers («as St. Paul says»), and the Smalcald Articles III VI («as Paul says»), were not searched exhaustively.
- Formula of Concord Epitome/SD VII German and Latin columns were not used.

## eucharist · reformed

53 records, 14 new against the page.

Ten most important new passages:

- `1Cor.10.6`: 1 document(s) (Westminster Confession of Faith)
- `1Cor.11.20`: 1 document(s) (Westminster Confession of Faith)
- `1Cor.2.14`: 1 document(s) (Belgic Confession)
- `1Cor.5.13`: 1 document(s) (Westminster Confession of Faith)
- `2Cor.6.14`: 1 document(s) (Belgic Confession)
- `2Cor.6.14-2Cor.6.16`: 1 document(s) (Westminster Confession of Faith)
- `2Cor.6.15`: 1 document(s) (Belgic Confession)
- `2Thess.3.14-2Thess.3.15`: 1 document(s) (Westminster Confession of Faith)
- `2Thess.3.6`: 1 document(s) (Westminster Confession of Faith)
- `Acts.20.7`: 1 document(s) (Westminster Confession of Faith)

Not reached (from the list's own section):

- Larger Catechism Q. 169–177 proof blocks: the first OCR parse was rejected by verifier V5 (about a third of the records wrong, Q. 170 refs filed under Q. 171, Q. 176 refs belonging to Q. 177, dozens of printed refs missing) and removed; they need a page-image reading (printed pp. 202–210, leaves n205–n213). Only Q. 168 (confirmed by V5) and the Shorter Catechism Q. 96–97 (confirmed) are kept.
- WLC/WSC clause-to-letter matching not done (interleaved columns).
- Belgic Art. 35: about 20 notes in French abbreviations (Marc, Luc, Jean, Act., Es.) printed with the French column were skipped by the parser (V5).
- Heidelberg Q. 75–82 quoted institution words (1 Cor. 11, Matt. 26) are not assigned to verses.
- Schaff III page images not read: the Belgic Art. 35 records are `[unverified: OCR]` (V9: the `printed` strings are OCR noise and the 8 records are an incomplete subset); WCF 29, LC Q. 168 and SC Q. 96–97 were read on the page images and confirmed by V9.

## eucharist · baptist

47 records, 13 new against the page.

Ten most important new passages:

- `Acts.3.21`: 1 document(s) (Second London Confession (1689))
- `Exod.20.4-Exod.20.5`: 1 document(s) (Second London Confession (1689))
- `Heb.9.25-Heb.9.26`: 1 document(s) (Second London Confession (1689))
- `Heb.9.28`: 1 document(s) (Second London Confession (1689))
- `Luke.24.39`: 1 document(s) (Second London Confession (1689))
- `Luke.24.6`: 1 document(s) (Second London Confession (1689))
- `Matt.15.9`: 1 document(s) (Second London Confession (1689))
- `1Cor.4.1`: 1 document(s) (Baptist Faith and Message 1925)
- `2Cor.6.14-2Cor.6.15`: 1 document(s) (Second London Confession (1689))
- `Gal.3.1`: 1 document(s) (Orthodox Creed (1678))

Not reached (from the list's own section):

- 2LCF 30.7–30.8 margins (1688 pp. 102–103) and all of chapter 30 in the 1719 print: not read; 30.1–30.6 (and 28.1) read on the 1688 page images by A5.
- First London, Standard, Somerset: the dossier found no Supper chapter comparable to 2LCF 30; not searched here.

## eucharist · orthodox

14 records, 3 new against the page.

Ten most important new passages:

- `1Cor.11.23`: 1 document(s) (Orthodox Confession of Peter Mogila)
- `John.6.51`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `Matt.16.16`: 1 document(s) (Orthodox Confession of Peter Mogila)

Not reached (from the list's own section):

- Mogila: V5 found the six references under Q. 107 in the print (the OCR run from the «Question 106» heading covers Q. 106–107); Q. 108 onward is other mysteries.
- Philaret Q. 318–346 (the Liturgy) was scanned by regex for «Book roman. N»; Philaret Q. 350 added after V5. Orthodox 1895 encyclical and Jeremiah's Answers not searched.
- Mogila and Philaret: `[unverified: OCR]`, page images not read.

## papacy · catholic

114 records, 79 new against the page.

Ten most important new passages:

- `Acts.20.28`: 2 document(s) (Catechism of the Catholic Church; Lumen gentium)
- `John.10.11`: 2 document(s) (Catechism of the Catholic Church; Lumen gentium)
- `John.20.21-John.20.23`: 2 document(s) (Catechism of the Catholic Church; Lumen gentium)
- `John.21.15-John.21.19`: 2 document(s) (The Primacy of the Successor of Peter; Ut unum sint)
- `Luke.6.13`: 2 document(s) (Catechism of the Catholic Church; Lumen gentium)
- `Mark.16.15`: 2 document(s) (Catechism of the Catholic Church; Lumen gentium)
- `Mark.3.13-Mark.3.19`: 2 document(s) (Catechism of the Catholic Church; Lumen gentium)
- `Acts.1.8`: 1 document(s) (Lumen gentium)
- `1Cor.4.15`: 1 document(s) (Lumen gentium)
- `1Cor.1.11`: 1 document(s) (Unitatis redintegratio)

Not reached (from the list's own section):

- CCC: §§85–86, 551–553, 815–818, 833–838, 861–862, 869–870, 880–896, 1369, 1441/1444, 2035, 2244–2246 fetched; footnote audit done for biblical references, but no exhaustive inline-reference audit beyond §869. Some are dossier context beyond the current page’s citations. __P46, __P47, __P49 and __P4A were fetched while locating §1441; correct target is __P4C.
- LG official English §12 notes have defects: note 111 prints “Jn. 2:20, 27” without 1; notes 115–116 do not align with the adjacent body quotations. These unresolved references were excluded rather than silently repaired; collate the official Spanish or print. Notes with ff./sqq. encode only starting verses. Note 162’s “Acts 1:8- 2:1 ff, 9:15” is ambiguous: only its explicit endpoints and 9:15 were encoded.
- Pastor aeternus proem alludes to John 17:21 and 20:21 without verse numbers. No new OSIS mapping was invented for the allusions; ch. IV’s identifiable quotations are already supported by the current page but their numeric locators are absent from this HTML. Schaff 1877/1896 scan was not collated in this pass.
- GS 42/76 and Sempiternus Rex Christus fetched, but not exhaustively audited for references. Donum veritatis 17, CDF Professio fidei commentary, CIC cited canons and Florence Mansi clause not reached. No claim of silence.
- Full surrounding citing sentences are not included for copyright Holy See works: exact citing parentheses/footnotes are stored. Retrieve context at the linked locator before import; this is a deliberate agent’s call, not a completed sentence audit.
- CDF note 7 says “and par.”: unspecified parallels were not inferred; note 23’s English “Cor 11:28” lacks the epistle number and is tagged unverified.

## papacy · lutheran

55 records, 39 new against the page.

Ten most important new passages:

- `Gal.1.8`: 2 document(s) (Augsburg Confession; Treatise on the Power and Primacy of the Pope)
- `2Cor.10.4`: 2 document(s) (Augsburg Confession; Treatise on the Power and Primacy of the Pope)
- `Acts.5.29`: 2 document(s) (Apology of the Augsburg Confession; Treatise on the Power and Primacy of the Pope)
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

37 records, 13 new against the page.

Ten most important new passages:

- `1John.3.2`: 1 document(s) (Dei verbum)
- `1Tim.6.14`: 1 document(s) (Dei verbum)
- `2Cor.1.20`: 1 document(s) (Dei verbum)
- `2Cor.10.5-2Cor.10.6`: 1 document(s) (Dei verbum)
- `2Cor.3.13`: 1 document(s) (Dei verbum)
- `2Cor.4.6`: 1 document(s) (Dei verbum)
- `John.1.1-John.1.18`: 1 document(s) (Dei verbum)
- `John.14.9`: 1 document(s) (Dei verbum)
- `John.17.4`: 1 document(s) (Dei verbum)
- `John.3.34`: 1 document(s) (Dei verbum)

Not reached (from the list's own section):

- CCC 9193: paragraph not found by the page parser
- Footnote markers «(3)» of Dei verbum are dropped from the quoted fragments without a mark (V7).
- Dei Filius (First Vatican Council): the Holy See page is Latin only in this pass; not read for references.
- Vatican II LG 12, 25; UR 21; SC 7, 24, 51; DH 10; UUS 79; VD 46, 87; Trent VI ch. 8, 20; CIC canons; CDF commentary: cited by the page, not read for references.
- CCC paragraphs: the footnotes of every cited paragraph and the inline references were parsed (including DV and Trent cross-references, which are not Scripture and not counted).

## sola-scriptura · lutheran

24 records, 11 new against the page.

Ten most important new passages:

- `2Cor.13.10`: 1 document(s) (Augsburg Confession)
- `2Cor.13.8`: 1 document(s) (Augsburg Confession)
- `2Tim.3.16`: 1 document(s) (Formula of Concord, Solid Declaration)
- `Acts.15.10`: 1 document(s) (Augsburg Confession)
- `Acts.15.29`: 1 document(s) (Augsburg Confession)
- `Col.2.16-Col.2.23`: 1 document(s) (Augsburg Confession)
- `John.16.12-John.16.13`: 1 document(s) (Augsburg Confession)
- `Luke.10.16`: 1 document(s) (Augsburg Confession)
- `Matt.15.13-Matt.15.14`: 1 document(s) (Augsburg Confession)
- `Matt.7.15`: 1 document(s) (Augsburg Confession)

Not reached (from the list's own section):

- AC XXVIII English refs V7 reports as missing: Acts 15:20, Acts 5:29, 1 Pet 5:3, 1 Tim 4:1, Gal 5:1, 1 Cor 11:5, 14:30, 14:40, Phil 2:14 (the patterns of this pass did not locate them); corrected after V7: ranges widened, Ps 119:105 locator, OCR slips, hyphen joins (the page images of pp. 85, 87, 89, 855–857 were read by V7).
- Triglot page images not read: every record is `[unverified: OCR]` except the two rows taken from the dossier.
- The Apology (Art. IV, VII, XV on traditions) and the Smalcald Articles (II, II/III): not searched for references.

## sola-scriptura · reformed

62 records, 9 new against the page.

Ten most important new passages:

- `Isa.59.21`: 1 document(s) (Westminster Confession of Faith)
- `Luke.16.29`: 1 document(s) (Westminster Confession of Faith)
- `Luke.16.31`: 1 document(s) (Westminster Confession of Faith)
- `Matt.4.10`: 1 document(s) (Westminster Confession of Faith)
- `Matt.4.4`: 1 document(s) (Westminster Confession of Faith)
- `Matt.4.7`: 1 document(s) (Westminster Confession of Faith)
- `Prov.22.19-Prov.22.21`: 1 document(s) (Westminster Confession of Faith)
- `Ps.19.1-Ps.19.3`: 1 document(s) (Westminster Confession of Faith)
- `Rom.3.2`: 1 document(s) (Westminster Confession of Faith)

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

6 records, 3 new against the page.

Ten most important new passages:

- `1Cor.11.2`: 1 document(s) (Orthodox Confession of Peter Mogila)
- `Eph.5.27`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))
- `Ps.26.5`: 1 document(s) (Confession of Dositheus (Synod of Jerusalem 1672))

Not reached (from the list's own section):

- Philaret page images not read (`[unverified: OCR]`); Q. 43–55 (the New Testament canon) not scanned for references.
- Mogila Part I Q. 1–12 scanned for references (Q. 4 is the passage on Scripture and tradition; the other references there are about faith and the Trinity and are not collected); the rest of Mogila not searched.
- Dositheus Decree II refs from the Greek; Jeremiah's Answers; the 1848 Encyclical: not searched.
