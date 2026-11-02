Status: draft, NOT verified by Pedro

# Verification: Eucharist scripture lists, Reformed and Orthodox (verifier 2)

Files checked (generated 2026-11-01 by session A5): `eucharist-reformed.md/.json`, `eucharist-orthodox.md/.json`. Verified 2026-11-01 by a Sonnet verifier, on page images unless said otherwise.

## Progress

- [x] A(i) WCF 29, page images (archive.org confessionoffaith00chur leaves n96-n98, printed pp. 93-95): all six sections, every letter.
- [x] A(ii) Larger Catechism, page images (leaves n205-n213, printed pp. 202-210): Q.168, 169, 171, 172, 173, 174, 175, 176 fully (every letter), plus Q.170 and Q.177 handling.
- [x] A(iii) Shorter Catechism Q.96-97, page images (leaves n248-n249, printed pp. 245-246; not p. 247).
- [x] A(iv) Belgic Art. 35 in Schaff III (OCR text only, pp. 428-431; page images not opened). Heidelberg Q.75-82: OCR grep only.
- [x] A(v) OCR over-reads: found inside A(i)-A(iii).
- [x] B Dositheus XVII, page images (leaves n154-n161); Philaret Q.329-350 and Mogila Q.106-107 on the OCR text (Schaff II, Overbeck); no page images for those two.
- [x] C counts, inPage, md vs JSON for ALL rows of both files (script), not a sample.
- [x] D sentence marks.

Legend: CONFIRMED / WRONG / UNCONFIRMABLE (`docs/playbooks/verification-pass.md`). "Record" = a JSON citedBy entry (row = passage).

Summary: Orthodox file: the Scripture refs of every record are right, but 6 records carry the wrong locator (Mogila Q.106 should be Q.107), the Philaret page range is wrong, the scope note about Dositheus is incomplete, and one Philaret ref is missing (Q.350). Reformed file: unusable as a per-question locator list. The WCF, Larger Catechism and Belgic records contain about 60 wrong or misplaced entries and omit dozens of printed refs. Shorter Catechism Q.96-97 and Larger Catechism Q.168 are fully correct.

## Verification

### A. Reformed

**1. WCF 29.1 (letter a, p. 93): WRONG, partly.** Printed: 1 Cor 11:23, 24, 25, 26; 10:16, 17, 21; 12:13.
- Right in record: 1Cor.11.23, 11.24, 11.25, 11.26, 10.16.
- Missing: 1 Cor 10:17, 10:21.
- Not printed in 29.1 (OCR garbage or refs of other sections): `Heb.10.21`, `Heb.10.17`, `Heb.7.26-Heb.7.27` (only 7:27 is printed, and in 29.2), `1Cor.12.13-1Cor.12.14` (only 12:13 is printed), `1Cor.12.18`, `Matt.26.25-Matt.26.27` (printed 26:26, 27, and in 29.2 letter c).
- `Heb.7.23-24` and `Heb.10.11-12` are real refs but of 29.2 letter d, not 29.1.

**2. WCF 29.2 (letters b, c, d; "sins of the quick or dead", "praise unto God for the same", "elect"): WRONG.**
- Printed b: Heb 9:22, 25, 26, 28. c: 1 Cor 11:24-26; Matt 26:26, 27. d: Heb 7:23, 24, 27; 10:11, 12, 14, 18.
- In record and correct: Heb.9.22, Heb.9.28.
- Missing: Heb 9:25-26; all of c; all of d (7:23-24, 7:27, 10:11-12, 10:14, 10:18). The d refs exist in the record only under 29.1, scrambled.
- In record but belong to 29.3: `Mark.14.22-Mark.14.24`, `1Cor.11.23-1Cor.11.26` (the print says "With 1 Cor. xi. 23-26", letter e), `Acts.20.7` and `1Cor.11.20` (letter f).
- Wrong refs: `Mark.14.20`, `Mark.14.28`. The print has "Ver. 28" (= Matt 26:28) and "Ver. 20" (= Luke 22:20), not Mark.

**3. WCF 29.3 (letters e, f): WRONG.** Printed e: Matt 26:26, 27 [see c]; 26:28; Mark 14:22, 23, 24; Luke 22:19, 20; 1 Cor 11:23-26. f: Acts 20:7; 1 Cor 11:20. Record: only Matt.26.26 and Matt.26.27 (correct). Missing: Matt 26:28, Luke 22:19-20 here; the others sit in 29.2.

**4. WCF 29.4 (g, h, i): refs right, incomplete.** Printed g 1 Cor 10:6; h Mark 14:23, 1 Cor 11:25, 26, 27, 28, 29; i Matt 15:9. Record has 10:6, Mark 14:23, 11:25, 11:26, Matt 15:9: all CONFIRMED. Missing 1 Cor 11:27, 11:28, 11:29 ("Ver. 27 / 28 / 29").

**5. WCF 29.5 (k, l): CONFIRMED.** Matt 26:26-28 (k); 1 Cor 11:26-28 and Matt 26:29 (l). Complete.

**6. WCF 29.6 (m): CONFIRMED.** Acts 3:21; 1 Cor 11:24-26; Luke 24:6, 39. Complete.

**7. WCF 29.7 and 29.8: ABSENT.** The notes say "garbled in the OCR (no reference parsed)": the page image is clean. Printed 29.7 (n, o): 1 Cor 11:28; 10:16. 29.8 (p, q): 1 Cor 11:27, 28, 29; 2 Cor 6:14, 15, 16; 1 Cor 5:6, 7, 13; 2 Thess 3:6, 14, 15; Matt 7:6. None is in the record.

**8. Larger Catechism Q.168 (z-e, pp. 203-204): CONFIRMED.** All 8 records are printed in this block and nothing is missing (Luke 22:20; Matt 26:26-28; 1 Cor 11:23-26; 10:16; 11:24; 10:14-16; 10:21; 10:17). Only the sentence is a placeholder.

**9. Larger Catechism Q.169 (letter f, p. 204): WRONG, partly.** Printed: 1 Cor 11:23, 24; Matt 26:26-28; Mark 14:22, 23, 24; Luke 22:19, 20.
- Right in record: Matt 26:26, 27, 28; Luke 22:19; Mark 14:22-23.
- Wrong: `1Cor.10.16` (printed in Q.168 b, not 169), `1Cor.10.24`, `Mark.14.29` (the print has 1 Cor 11:24 and Mark 14:24).
- Missing: 1 Cor 11:23, 11:24, Mark 14:24, Luke 22:20.

**10. Larger Catechism Q.170 (g, h, i, k): handling WRONG.** Printed: Acts 3:21; Matt 26:26, 28; 1 Cor 11:24-29; 10:16. No Q.170 locator exists. `Acts.3.21` and `Matt.26.26` are assigned to Q.171, where they are not printed. The note "may sit in a neighbouring block" is true but the records state "Q. 171" as fact.

**11. Larger Catechism Q.171 (l-z, pp. 204-206): WRONG, partly (8 of 26 records).** Printed l 1 Cor 11:28; m 2 Cor 13:5; n 1 Cor 5:7, Exod 12:15; o 1 Cor 11:29; p 1 Cor 13:5, Matt 26:28; q Zech 12:10, 1 Cor 11:31; r 1 Cor 10:16, 17, Acts 2:46, 47; s 1 Cor 5:8, 11:18, 20; t Matt 5:23, 24; v Isa 55:1, John 7:37; w 1 Cor 5:7, 8; x 1 Cor 11:25, 26, 28, Heb 10:21, 22, 24, Ps 26:6; y 1 Cor 11:24, 25; z 2 Chr 30:18, 19, Matt 26:26. 18 records are right. Wrong: `Acts.3.21` (Q.170), `1Cor.11.22` (the "Ver. 22" is Heb 10:22), `1Cor.10.24`, `Exod.12.28`, `Zech.12.26-Zech.12.28`, `Matt.26.24` (print: Matt 5:24), `1Cor.11.47` (Acts 2:47), `1Cor.11.18-1Cor.11.20` (18 and 20 are printed, 19 is not). Missing: Isa 55:1, John 7:37 (put under Q.172), Acts 2:47, Heb 10:22, 10:24, 2 Chr 30:19, Matt 5:24, 1 Cor 11:20, 1 Cor 11:25-26 (put under Q.172).

**12. Larger Catechism Q.172 (a-h, pp. 205-206): WRONG, partly (7 of 28).** Printed a Isa 50:10, 1 John 5:13, Ps 88, Ps 77:1-12, Jonah 2:4, 7; b Isa 54:7-10, Matt 5:3-4, Ps 31:22, Ps 73:13, 22, 23; c Phil 3:8-9, Ps 10:17, Ps 42:1, 2, 5, 11; d 2 Tim 2:19, Isa 50:10, Ps 66:18-20; e Isa 40:11, 29, 31, Matt 11:28, 12:20, 26:28; f Mark 9:24; g Acts 2:37, 16:30; h Rom 4:11, 1 Cor 11:28. 21 records right. Wrong: `1Cor.5.7-1Cor.5.8`, `1Cor.11.25-1Cor.11.26` (both Q.171), `1Cor.5.1-5.3`, `1Cor.11.4`, `1Cor.11.7`, `1Cor.11.9-1Cor.11.10` (all OCR of "Ver. 1, 2, 3, 4, 7, 9, 10" of Ps 77 and Jonah), `John.7.37` (Q.171). Missing: Isa 50:10, 1 John 5:13, Ps 88, Ps 77, Isa 54:7-10, Ps 73:13-23, Ps 66:18-20.

**13. Larger Catechism Q.173 (i, k, pp. 206-207): WRONG (7 of 10).** Printed: 1 Cor 11:27-31 "to the end"; Matt 7:6; 1 Cor 5; Jude 23; 1 Tim 5:22; 2 Cor 2:7. Right: `1Cor.11.29`, `1Cor.11.31`, `1Cor.11.27-1Cor.11.28`. Wrong: `1Cor.11.26`, `Luke.22.19`, `1Cor.10.3`, `10.5`, `10.11` (all Q.174 o/p), `Luke.22.31` and `Luke.22.80` (the print has "Ver. 30, 31" of 1 Cor 11). Missing: 1 Cor 11:30, Matt 7:6, 1 Cor 5, Jude 23, 1 Tim 5:22, 2 Cor 2:7.

**14. Larger Catechism Q.174 (l-a, pp. 207-208): WRONG (2 of 13).** Wrong: `1Chr.29.18` (Q.175 d), `John.6.26-John.6.27` ("Ver. 26, 27" is 1 Cor 11:26-27). Right: Zech 12:10, Acts 2:42, Exod 24:8, Ps 22:26, John 1:16, John 6:35, 1 Cor 10:3-5, 11:17, Phil 3:9, Heb 12:28, Rev 22:17. Missing: Lev 10:3, Ps 5:7, 1 Cor 11:26-27, 11:29, 11:31, Luke 22:19, 1 Cor 10:11, 10:14, Ps 63:4-5, 2 Chr 30:21, Jer 50:5, Ps 50:5.

**15. Larger Catechism Q.175 (b-l, pp. 208-209): WRONG (6 of 26).** Wrong: `Ps.28.12`, `Ps.36.1` and `Ps.36.6` (print: Ps 36:10), `Acts.2.2`, `Acts.2.4-5`, `Acts.2.30-31` (print: 1 Cor 11:30, 31). `Song.5.1` is too narrow (printed Cant 5:1-6). Missing: Ps 36:10, Cant 3:4, Song 5:2-6, 1 Cor 10:3-5, 10:12, 11:17, 11:30-31, Ps 50:14, Ps 85:8, Ps 123:1-2.

**16. Larger Catechism Q.176 (m-q, pp. 209-210): WRONG (8 of 20).** Right (12): 1 Cor 10:16, 11:26, 11:23, Rom 4:11, Matt 26:27-28, Matt 28:19, 28:19-20, John 1:33, Rom 6:3-4, 1 Cor 4:1, Col 2:12, Heb 5:4. The record is complete for Q.176's own block, but it also contains 8 records from Q.177 (r-w, p. 210), labelled Q.176: `Gen.17.7`, `Matt.3.11`, `Acts.2.38-39`, `1Cor.7.14`, `Gal.3.27`, `Titus.3.5` (r, s), `1Cor.11.23-1Cor.11.24` (print: t = 11:23-26), `1Cor.11.28-1Cor.11.29` (w). The note says Q.177 "not separated", but the records say Q.176.

**17. Shorter Catechism Q.96-97 (pp. 245-246): CONFIRMED.** Q.96 letter e: 1 Cor 11:23-26, 10:16, both in record. Q.97 f-l: 11:28-29, 2 Cor 13:5, 1 Cor 11:31, 10:16-17, 5:7-8, all in record. No ref of Q.98 or of baptism leaks in. Only the claim "refs may include the next question's proofs" is not borne out.

**18. Belgic Art. 35 (Schaff III pp. 428-431, OCR): refs printed on Art. 35, none from Art. 34 or 36: CONFIRMED.** The Art. 34 footnote "Col. ii. 11" is correctly absent. But the list is incomplete and has an over-read. `Eph.3.1`: WRONG, the print is "Eph. iii. 17" (OCR "1 7"). Missing (French abbreviations Marc/Luc/Jean/Act./Es. were skipped): Mark 14:22; Luke 22:19, 20; 1 Cor 11:23-25; John 3:5, 3:6, 5:23, 25, 6:32-33, 51, 6:35, 6:55-56, 6:63, 10:28; 1 John 5:12; 1 Cor 10:16-17; Acts 3:21; Mark 16:19; Isa 55:2; Rom 8:22-23. Present and correct: Matt 26:26, 26:11, 1 Cor 11:29, 2:14, 10:2-4, 2 Cor 6:14, 15.

**19. Heidelberg Q.75-82 "no Scripture refs in Schaff III": CONFIRMED** by OCR grep only (no book-abbreviation hit in that range); page not opened.

**20. Sentences (D), Reformed: WRONG in part.**
- WCF 29.1 sentence starts "/^UIl Lord Jesus ... instituted \J the sacrament": OCR junk in place of "OUR" and the ornament. Not verbatim.
- WCF 29.2 sentence keeps the footnote letter "dead;b" and line-break hyphens ("by him- self", "perpe- tual"). Same in 29.1/29.3.
- WCF 29.4, 29.5, 29.6: empty string, with no placeholder and no flag saying so.
- Placeholders for LC, SC, Belgic are declared by the record and acceptable.

**21. OCR over-reads (v): WRONG** (many). Examples: "Luke 22.80", "Zech 12.26-28", "1Cor.11.47", "Mark.14.29", "Heb.7.26", "Eph.3.1" (all above). The records' own flag lists only two of them.

### B. Orthodox

**22. Dositheus XVII footnote refs: CONFIRMED.** p. 144: marker * after «This is My Body.» → "Matt. xxvi., 26"; marker † after «for the remission of sins.» → "Ibid., ver. 28" (= Matt 26:28). p. 145: marker ‡ after «poured out for the life of the world.» → "John vi., 51". The other markers on pp. 144-145 (‡ § || ¶ on 144; * † § || ¶ on 145) are Greek or editor's notes, not Scripture. Leaves n155 and n156 = printed pp. 144 and 145 as stated.

**23. Dositheus scope note: WRONG.** The file says XVII is "pages 144-146 read" and p. 146 carries a liturgical quotation only. Decree XVII runs from p. 143 to p. 150 (Decree XVIII begins p. 150); I read leaves n154 to n161. pp. 146-150 print no Scripture reference (p. 146 footnote is a Liturgy quotation, p. 148 notes are Greek and "reference to the Apostolic Liturgies", p. 149 Greek). So the three refs are complete, but the file never read pp. 147-150. The `Matt.26.26` and `Matt.26.28` records each carry the whole sentence (both institution words), although each marker sits on one clause; acceptable but wide.

**24. Philaret: refs CONFIRMED; page range WRONG; edition note imprecise.**
- Q.329 "1 Cor. x. 17" in the answer: CONFIRMED. Q.338 "Matt. xxvi. 26, 27, 28": CONFIRMED. Q.341 "1 Cor. xi. 28, 29": CONFIRMED. Q.342 "John vi. 56" then "John vi. 54": CONFIRMED. Q.344 "Luke xxii. 19": CONFIRMED. Sentences are verbatim (OCR "divelleth" is "dwelleth").
- The edition string says "pp. 491-493 range". These questions are on Schaff II pp. 496-499 (Q.329 p. 496; Q.338 p. 497; Q.340-342 p. 498; Q.343-344 p. 499).
- The OCR title page reads "Harper & Brothers, 1896", with the 1877 act of copyright; the record says "1877 ed.".
- Missing: Q.350 prints "1 Cor. xi. 26" (p. 499). The range was set to Q.318-346 and the page `eucharist/orthodox.es.ts` itself cites Philaret Q.350 for 1 Cor 11:26. No other Scripture ref in Q.315-350 (Q.316 and Q.332 name no verse).

**25. Mogila Q.106: locator WRONG, refs and sentences CONFIRMED.** Overbeck pp. 79-81: Q.106 is a short answer with no Scripture ref. All six refs (John 19:34, 20:29, 6:54, 1 Cor 11:23, Matt 16:16, 1 Cor 11:26) are in Q.107 (pp. 79-81). The page file cites "Mogila I.107". Sentences are verbatim with correct […]. Not printed in Q.107 and not in the record: the "I am chief" line (1 Tim 1:15) has no printed ref, so correctly absent.

**26. Orthodox sentences (D): CONFIRMED.** All sentence strings are verbatim with […] at clips; straight quotes replace the printed curly ones in Dositheus (typographic only).

### C. Counts and tables

**27. count / locCount / inPage, ALL rows (script, both files): CONFIRMED internally.** Orthodox 14 rows, Reformed 151 rows: count = distinct works, locCount = distinct (work, loc), inPage = overlap with the `scripture` refs of the page, all as stated; 11/14 and 51/151 as in the headers. The values are however built on wrong locators (e.g. Orthodox `1Cor.11.26` should be 2 works with Q.350; Reformed `Heb.10.21` is 1/1, not 2/2, because the WCF 29.1 cite is wrong). Several inPage = yes values are only produced by the bogus refs (e.g. `Matt.26.25-Matt.26.27`).

**28. md tables equal JSON: CONFIRMED.** Every row (passage, count/locators, in page, locators) and every `sentence` equals its JSON record in both files.

## Wrong items

1. Reformed WCF 29.1: remove `Heb.10.21` (cite), `Heb.10.17`, `Heb.7.26-Heb.7.27`, `1Cor.12.14`, `1Cor.12.18`, `Matt.26.25-Matt.26.27`; correct 29.1 = 1 Cor 11:23-26, 10:16, 10:17, 10:21, 12:13.
2. Reformed WCF 29.2: remove `Mark.14.20`, `Mark.14.28`; move `Mark.14.22-24`, `1Cor.11.23-26`, `Acts.20.7`, `1Cor.11.20` to 29.3; add 29.2 c (1 Cor 11:24-26, Matt 26:26-27) and d (Heb 7:23-24, 7:27, 10:11-12, 10:14, 10:18), Heb 9:25-26.
3. Reformed WCF 29.3: add Matt 26:28, Luke 22:19-20; 29.4 add 1 Cor 11:27-29; 29.7 and 29.8 are absent (page image is legible; refs listed in item 7).
4. Reformed LC Q.169: remove `1Cor.10.16`, `1Cor.10.24`, `Mark.14.29`; add 1 Cor 11:23, 24, Mark 14:24, Luke 22:20.
5. Reformed LC Q.171: remove the 8 records of item 11; add the missing ones. Q.170 has its own block (Acts 3:21, Matt 26:26, 28, 1 Cor 11:24-29, 10:16) and is not Q.171.
6. Reformed LC Q.172: remove the 7 records of item 12; Q.173: remove 7 (item 13); Q.174: remove `1Chr.29.18`, `John.6.26-27`; Q.175: remove 6 (item 15); Q.176: move 8 Q.177 records out (item 16).
7. Reformed: `Eph.3.1` is `Eph.3.17`; Belgic 35 lacks about 20 printed refs (item 18).
8. Reformed sentence of WCF 29.1: OCR junk "/^UIl ... \J"; 29.4-29.6: empty, no placeholder.
9. Orthodox Mogila: locator "I. Q. 106" must be "I. Q. 107" for all six records (page cites I.107).
10. Orthodox Philaret: "pp. 491-493 range" must be pp. 496-499 (Q.329-344), edition imprint "1896 (copyright 1877)"; add `1Cor.11.26` at Q.350 (page 499), the range Q.318-346 omits Q.347-350.
11. Orthodox Dositheus: Decree XVII is pp. 143-150, not "pages 144-146"; pp. 147-150 carry no Scripture ref.

## Unconfirmable

- Belgic Art. 35 refs and the Heidelberg "no references" claim: read in the OCR of Schaff III only; the page images were not opened. The Belgic list of missing refs above comes from the same OCR (French abbreviations; digit errors such as "G"/"5" possible).
- Philaret (Schaff II) and Mogila (Overbeck): OCR text only, no page image. Quotes read cleanly and match the refs, but digits and the "Q.350" page number rest on the OCR.
- The author's claim that the Schaff Philaret text is "in the English of Blackmore": not checked.
- Page-level claim that "the owner's page uses these locators" was not tested beyond reading `src/content/pages/eucharist/orthodox.es.ts` (it cites Mogila I.107 and Philaret Q.350).
