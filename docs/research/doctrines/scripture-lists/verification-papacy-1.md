Status: draft, NOT verified by Pedro

# Verification · papacy-catholic and papacy-orthodox scripture lists (Codex round 5)

Verifier: Sonnet, 2026-11-01. Files checked: `papacy-catholic.md/.json` (113 records), `papacy-orthodox.md/.json` (46 records). Read first: `docs/research/day-2026-11-01/codex-5.md`.

## Progress

| Block | State |
|---|---|
| A. Catholic: CCC footnotes (22 locators, every cited paragraph/note) | done, all machine-matched against the cached vatican.va pages, paragraph attachment read by eye |
| A. Catholic: LG (all ~60 footnote entries mapped to section and body marker), Primacy (all 20), UUS (all 19, paragraph positions), Pastor aeternus (5), Mysterium Ecclesiae (5), UR 3 (5) | done, fetched fresh from the URLs in the records |
| A. Counts: all 113 recomputed from citedBy (not 3); inPage: all 113 recomputed programmatically against `catholic.es.ts` `scripture` | done |
| B. Orthodox: all 46 records vs OCR (Philaret, Mogila, Dositheus); page images read for Dositheus pp.122, 125, 128, 129, 131 and the 1895 English pp.37, 39, 41, 49 | done; Dositheus p.123 and all Philaret/Mogila page numbers by OCR page headers only |
| B. Counts: all 46 recomputed; inPage: all 46 recomputed against `orthodox.es.ts` | done |
| C. Scripture references not printed in the source | done, 2 clear cases plus several context-inferred ones |
| D. «Not reached» honesty | done |

Legend: CONFIRMED / WRONG / UNCONFIRMABLE. Evidence is the matched string or the image read. Scratch: `/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/65f1fb53-fec5-45ca-9e96-35ddea5dd54a/scratchpad/verif3/`.

## Verification

### A. Catholic

1. CONFIRMED · CCC 22 locators (§551 n.280, 281; §552 n.283–286; §553 n.287–289; §815 n.265; §861 n.374; §869 inline `(cf Mt 16:18)` and `(Rev 21:14)`; §880 n.398; §881 n.400; §886 n.412; §888 n.415; §893 n.424; §894 n.426; §1441 n.39–41; §1444 n.45). Each `sentence` is a verbatim substring of the cached page (`ccc/__P1L`, `__P2A`, `__P29`, `__P4C`) and the footnote marker sits inside the cited paragraph (e.g. n.286 closes §552 «strengthen his brothers in it.»; n.41 closes §1441 «to exercise in his name.»). URLs/page codes correct. The `[ETML:C/]` after «Lk 9:2» and «Mk 2:7» is printed on the Holy See page itself, so verbatim, but is markup debris to strip at import.
2. CONFIRMED · Lumen gentium notes 110, 112, 113, 114, 124, 136–166, 169–175 (about 60 entries). Every `sentence` equals the footnote text in the official English page; each body marker `(N)` falls in the §N cited (e.g. n.139 §19, n.156–159 §22, n.161–163 §24, n.164–166 §25, n.169–175 §27, n.150–155 §21). Codex's §12 defects confirmed: n.111 prints «Jn. 2:20, 27», and body marker (115) follows «manifestation of the Spirit is given… for profit» but note 115 reads «1 Thess 5:12, 19-21»; correctly left out.
3. CONFIRMED · The Primacy of the Successor of Peter (fresh fetch): notes 5, 6, 7, 9, 10, 11 are in §3; n.18 in §4; n.23 in §6; n.48, 49 in §15. Note 7 prints in full «Cf. Mt 14:28-31; 16:16-23 and par.; 19:27-29 and par.; 26:33-35 and par.; Lk 22:32; Jn 1:42; 6:67-70; 13:36-38; 21:15-19.» (19 words, clipped nothing), so John.1.42, John.6.67-70, John.13.36-38, John.21.15-19 are printed. Edition line «L'Osservatore Romano, 18 November 1998, page 5-6» printed on the page.
4. CONFIRMED · Ut unum sint §88 `( Lk 22:27)`, §90 `(2:14; cf. 2:37, 5:29)`, §91 (`16:17-19`, `22:31-32`, `Jn 21:15-19`, `15:5`, `Mt 16:17; 2 Cor 12:7-10`, `Mt 16:23`, `21:15-17`, `13:38`, `22:32`), §92 `( 2 Cor 12:9-10)`, §94 `(cf. Jn 10:11-18)`, `(cf. Mt 20:25; Mk 10:42)`, §96 `( Jn 17:21)`: every string is verbatim and its character offset lies inside the paragraph cited. But see Wrong item 3 (book names).
5. CONFIRMED · Mysterium Ecclesiae §2: `(cf. 1 Jn 2:20, 27)`, `(cf. Lk. 2:19, 51)`, `(cf. Eph 4:4, 5)` verbatim, inside §2 (offsets 4546–8843). Date «24 June 1973» is printed («on June 24, 1973»); the URL date 5 July is as Codex says.
6. CONFIRMED · Unitatis redintegratio §3 notes 19 and 20: verbatim, markers sit in §3.
7. CONFIRMED · Pastor aeternus (Latin, official page): ch. I contains «(Matth. XVI, 16-19)», «(Ioan. XXI, 15-17)» and «(Ioan. I, 42)» (chapter I runs from «CAPUT I» to «CAPUT II»); the 3 clipped sentences are verbatim, ≤ 120 words (longest 88). Edition «ASS, vol. VI (1870-1871), pp. 40-47» is printed on the page.
8. CONFIRMED · `count`: recomputed for all 113 Catholic and 46 Orthodox records (distinct `work` values in citedBy); no mismatch. Examples: John.21.15-17 = CCC, LG, Primacy, UUS, PA = 5; Matt.16.19 = CCC, LG = 2 (CCC cited twice); Luke.22.26-27 = CCC, LG = 2. The arithmetic is right; two counts are wrong in substance (Wrong items 1, 2).
9. CONFIRMED · `inPage` for all 113 Catholic records recomputed verse by verse against the 25 `refs` in `src/content/pages/papacy/catholic.es.ts` `scripture`: no mismatch (35 true, 78 false). The md summary figures also recompute: 78 new/extended, 183 distinct uncovered verse tokens. Spot checks: Luke.22.32 true (inside Luke.22.31-32); Matt.28.20 true (inside Matt.28.16-20); John.21.15-19 false (vv.18–19 not on the page); Acts.2.1-26 false.
10. CONFIRMED · Md and JSON are consistent: every `sentence` and every OSIS ref of both JSON files occurs in its md.

### B. Orthodox

11. CONFIRMED · Philaret Longer Catechism Q.270 (Col.1.5-6, Col.3.11, Gal.3.9), Q.272 (Eph.5.23), Q.274 (Eph.2.19-20), Q.275 (2 Thess 2:15; Titus 3:10; Titus 1:10-11; Matt 18:17), Q.277 (Eph.4.11-12). Verbatim against the Schaff OCR modulo OCR noise (e.g. «puhlican», «Ajyo sties»). The OCR page headers confirm pagination: «4,89» falls inside Q.272/273, so Q.270 and Q.272 are on p.488, Q.274–275 on p.489 (Matt 18:17 sits before the «490» header), Q.277 on p.490. Page images were NOT re-read by me (page-image leaf n501/n502/n503 URLs follow +13 consistently).
12. CONFIRMED · Mogila Part I Q.83–86 (Overbeck): 2 Cor 11:2, Eph 4:5 (Q.83); Luke 24:47, Acts 1:8, 11:2, «ver. 17», «ver. 22», «chap. xv. 2», «ver. 22», «xvi. 4 of the Acts» (Q.84); 1 Cor 3:11, Rev 21:14, Eph 5:23, Col 1:18, Acts 20:28, 1 Pet 5:4 (Q.85); Matt 18:17, 1 Tim 3:15 (Q.86). All sentences verbatim (OCR noise only). Page numbers confirmed from the printed running headers («66 The Orthodox Confession…» opens p.66 inside Q.84; «68» header falls inside Acts xx.28, hence «p. 67–68»). A scan of the whole Q.85–86 text for parenthetical references found no printed Scripture reference that Codex missed.
13. CONFIRMED · Dositheus (Robertson 1899), page images read: p.122 (n133) Decree X «Cf. Ps. xciv. [xcv.], 7»; p.125 (n136) «Cf. Heb. xii., 23», «Cf. Eph. ii., 21», «Cf. Matt. xxviii., 20»; p.128 (n139) «Cf. 1 Tim. ii., 4»; p.129 (n140) «Matt. xvi., 19», «Cf. Matt. xviii., 17», «Cf. John x., 11»; p.131 (n142) «Cf. John xv., 26», «Cf. John xvi., 13». Sentences match the images; leaf = printed page + 11 holds. Decree XII at p.131 is right (Decree XIII starts later in the OCR). Heb 2:10; 12:2 at p.123 verified by OCR only.
14. CONFIRMED · 1895 Encyclical (English facing print), images read pp.37, 39, 41, 49: p.37 notes 1 Col. i. 18, 2 Matt. xxviii. 20, 3 Gal. ii. 11, 4 Matt. xvi. 18; p.39 notes 1 Matt. xvi. 16, 2 1 Cor. iii. 10, 11, 3 Col. i. 24, 4 «Eph. ii. 19, 20. Cp. 1 Pet. ii. 4; Rev. xxi. 14.»; p.41 note 1 «See Acts of the Apostles xxviii. 15; Rom. i. 9, xv. 15–xvi; Phil. i. 13.»; p.49 note 1 «Gal. ii. 11». All 10 sentences verbatim, including the 36-word §XVIII sentence.
15. CONFIRMED · Orthodox `count` and `inPage`: counts recomputed (no mismatch); inPage recomputed against the 8 `refs` of `orthodox.es.ts` (8 true, 38 false), no mismatch; 39 uncovered tokens recomputed and equal.
16. CONFIRMED · Orthodox editions and URLs: Robertson, London: Thomas Baker, 1899; Overbeck/Lodvell 1898; Schaff Creeds II; 1895 Metallinos print. Leaf numbers resolve to the stated pages (checked on 10 pages).

### C. References not printed in the source

17. WRONG · Pastor aeternus ch. IV, two records, Scripture reference absent from the document. See Wrong items 1–2.
18. WRONG (tag overclaim) · Ut unum sint bare references. See Wrong item 3.
19. CONFIRMED with caveat · Primacy §6 n.23 prints only «Cor 11:28.» Codex tagged it `[unverified: English HTML omits Corinthian book number]`, which is honest, but 2Cor.11.28 is set `inPage: true` and is a real finding only if the 2 is read in; keep it tagged unverified.
20. No range wider than printed was found in either file. Checked all ranges against the printed text: «Jn 21:15-19», «16:16-23», «Acts 1:8- 2:1 ff, 9:15» (only endpoints encoded, disclosed), «Mt 10:1-42», «Rom. i. 9, xv. 15–xvi» (left out of the JSON, disclosed), Eph 4:5 for Mogila (printed «iv. 5», text reaches v.6, disclosed).

### D. «Not reached» honesty

21. CONFIRMED · Both files have a «Not reached» section and the md header says «Partial». The claims there match what I found (LG §12 defects, PA allusions without numbers, Rom 15:15–16, Philaret Q.271/272 allusions, Mogila Q.85 allusion). The one overstatement is in Wrong item 4 (footnote audit «done»). The log's «checks actually run» is also accurate on arithmetic (counts, 183, 39).

## Wrong items

1. WRONG · `papacy-catholic.json` record `Luke.22.32`, citation «Pastor aeternus, ch. IV, promise». Pastor aeternus ch. IV quotes «Ego rogavi pro te, ut non deficiat fides tua, et tu aliquando conversus confirma fratres tuos» with no Scripture reference printed (ch. I prints «Ioan. XXI», «Matth. XVI», «Ioan. I»; ch. IV prints none). The record's own `loc` says «no numbered reference supplied for ch. IV quotations», yet the tag says «explicit reference matched» and `how: inline`. This is the verse identified from memory, which the rule forbids. Correct: remove this citation from the record (count 5 becomes 4: CCC, LG, Primacy, UUS), or keep it in a separate list labelled «unreferenced quotation» with tag `[memory]`/`[unverified]`. The md header also says «explicit reference matched» for the whole file.
2. WRONG · record `Matt.16.18`, citation «Pastor aeternus, ch. IV, Formula of Hormisdas»: same defect; «Tu es Petrus, et super hanc petram aedificabo Ecclesiam meam» is printed without a locator. Correct: count 4 becomes 3 (CCC, LG, Primacy); tag as unreferenced quotation. Note the `sentence` is verbatim and in the right chapter; only the reference is not printed.
3. WRONG (tag/wording) · Ut unum sint bare chapter:verse parentheticals, records `John.21.15-John.21.17` (UUS), `Luke.22.32`, `1Cor.15.5`, `Acts.2.14`, `Acts.2.37`, `Acts.5.29`, `John.13.38`, `Luke.22.31-Luke.22.32`, `Matt.16.17-Matt.16.19`. The sentence field («(cf. 22:32)», «(cf. 15:5)», «(16:17-19)») carries no book name; the book is taken from the surrounding prose (Luke, First Letter to the Corinthians, Acts, Matthew, John). The attribution is reasonable and contextually explicit in §90–91, but the tag «explicit reference matched» overclaims: correct tag «reference printed; book from preceding sentence», and the sentence field should include the prose that names the book (≤ 40 words) or the md note must say so.
4. WRONG · «Not reached» claims «footnote audit done for biblical references» for CCC §§551–553. CCC §551 note 282, «Lk 22:29-30.» (attached to «sit on thrones judging the twelve tribes of Israel»), is printed on the Holy See page and is missing from the JSON (no record contains Luke.22.29-30). Correct: add record `Luke.22.29-Luke.22.30` (CCC §551, note 282, count 1, not on the page) or retract the «audit done» claim. My scan of the notes of §§551–553, 815, 861, 869, 880–896, 1441, 1444 found no other Bible reference omitted.
5. WRONG (counting) · Dositheus counts rest on the English translator's notes, not the Confession. Records `Matt.18.17` (count 3) and `Matt.28.20` (count 2) include Robertson's printed «Cf.» footnotes. Codex says «Robertson notes are not newly certified as present in the original Greek recension» but still counts Dositheus as a citing work. Correct: for `Matt.18.17` the primary-text witnesses are 2 (Philaret, Mogila); for `Matt.28.20` the only one is the 1895 Encyclical (count 1); or flag these rows «editor's note» in `how` instead of «inline (footnote reference)». Same caution applies to the 1895 «Cp. 1 Pet. ii. 4; Rev. xxi. 14» note (records `1Pet.2.4`, and `Rev.21.14` count 2 with Mogila): the attached sentence is the Eph 2:19-20 quotation, not a passage citing those verses; `Rev.21.14` count should be 1 (Mogila) if «Cp.» is not a citation.
6. Minor · Mogila «(ver. 17)», «(ver. 22)» (twice), «chap. xv. 2», «xvi. 4 of the Acts» are encoded as Acts.11.17, Acts.11.22, Acts.15.22, Acts.15.2, Acts.16.4 by carrying the chapter from the preceding printed reference. Correct in substance but not tagged as context-derived; add the note to `loc`.
7. Minor · Catholic sentence fields are mostly bare citing parentheses or footnote strings («Cf. Jn. 21:15-17.»), not the citing sentence. Disclosed by Codex, so not a defect against its own claim, but it does not meet the brief; the import step must still fetch context. Also strip the page debris «[ETML:C/]» from records `Luke.9.2` and `Mark.2.7`.

## Unconfirmable

- CCC: edition. The English page states no year; nothing could be collated with a dated print or the 1997 typical edition. Codex says the same.
- Pastor aeternus: Latin official page only; the Schaff 1877/1896 print was not collated by Codex nor by me. No claim of the shared text with the Latin of Denzinger was tested.
- Philaret and Mogila: confirmed through OCR plus printed running headers; their page images were not viewed by me (only Dositheus and the 1895 print were viewed). Dositheus p.123 not viewed.
- Dositheus: whether Robertson's footnotes reproduce the Greek recension's own references (1672 vs 1690) cannot be settled here.
- Codex's usage and tool claims (weekly percentages, downloads, «no git writes») are not checkable from the files.
- CCC inline-reference audit beyond §869, LG 12 official Spanish text, Florence/canons, 1848 encyclical: not reached by the lists and not checked by me.

## Summary

Counts of what was checked: about 150 distinct citation locators re-found in source (22 CCC, about 60 LG, 20 Primacy, 19 UUS, 5 PA, 5 ME, 5 UR; 46 Orthodox records / 55 citations), plus all `count` and `inPage` values of both files recomputed. Result: nearly all sentences, locators and editions CONFIRMED; 5 WRONG items of substance (2 records of Pastor aeternus ch. IV with a reference read from memory, UUS tag overclaim, one CCC footnote omitted despite «audit done», Dositheus/1895 editorial notes counted as citations) and 2 minor ones.
