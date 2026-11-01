Status: draft, NOT verified by Pedro

# Verification of parallels-final.md and parallels-data.json (B3-1)

Files under test: `docs/research/passages/parallels-final.md`, `docs/research/passages/parallels-data.json`.
Evidence: `rob.txt` = Gutenberg #36264 text of Robertson (paths below relative to the session scratchpad `src/`), `sb_harmonyofgosp00stev.txt` = Stevens-Burton OCR (`src/`), the 20 page files `src/content/pages/<doctrine>/<tradition>.es.ts`.
Method: all comparisons were done by scripts that parse rob.txt, the page files and the JSON independently of the generating scripts (scripts in the scratchpad `v/`), then read by hand. Legend: CONFIRMED / WRONG / UNCONFIRMABLE.

## Progress
- Check 1 (section parse): done, all 29 sections cited in the data (not only 25).
- Check 2 (passage list and counts): done, all 20 pages (not only 6).
- Check 3 (rules): done, all 231 passages recomputed independently; semantic review of all 69 with parallels.
- Check 4 (Stevens-Burton): done for the 29 sections.
- Check 5 (source claims): done.

## Check 1. Section parse (Robertson Analytical Outline)

Independent parse of rob.txt lines 280-890 gives 185 section entries, identical (reference line by reference line) to `rob_sections.json` (0 differences). The data cites 29 distinct sections; for every pair, the `ref` of the other book equals the section's whole range in that book as printed in the outline (script comparison, 179 pairs, 0 mismatches). Items:

| § | Outline reference line (rob.txt line) | Data ref(s) | Verdict |
|---|---|---|---|
| 21 | `Mark 1:2-6; Matt. 3:1-6; Luke 3:3-6.` (344-345) | Matt.3.1-6, Luke.3.3-6 | CONFIRMED |
| 24 (baptism) | `Mark 1:9-11; Matt. 3:13-17; Luke 3:21-23.` (354-355) | Mark.1.9-11, Luke.3.21-23 | CONFIRMED |
| 41 | `Mark 1:16-20; Matt. 4:18-22; Luke 5:1-11.` (420-421) | Mark.1.16-20, Matt.4.18-22 | CONFIRMED |
| 47 | `Mark 2:13-17; Matt. 9:9-13; Luke 5:27-32.` (434-436) | Mark.2.13-17, Luke.5.27-32 | CONFIRMED |
| 54 | `Matt. 5-7; Luke 6:17-49.` (454-456) | Luke.6.17-49 | CONFIRMED (range; but see Check 3, W4) |
| 64 | `Mark 4:1-34; Matt. 13:1-53; Luke 8:4-18.` (502-503) | Mark.4.1-34, Luke.8.4-18 | CONFIRMED (range; see W5) |
| 70 | `Mark 6:6-13; Matt. 9:35-11:1; Luke 9:1-6.` (540-542) | Mark.6.6-13, Luke.9.1-6 | CONFIRMED (range; see W6) |
| 77 | `Mark 7:1-23; Matt. 15:1-20; John 7:1.` (563-566) | Matt.15.1-20, John.7.1 | CONFIRMED (range; see W3) |
| 82 | `Mark 8:27-30; Matt. 16:13-20; Luke 9:18-21.` (581-583) | Mark.8.27-30, Luke.9.18-21 | CONFIRMED |
| 83 | `Mark 8:31-37; Matt. 16:21-26; Luke 9:22-25.` (584-586) | Mark.8.31-37, Luke.9.22-25 | CONFIRMED |
| 85 | `Mark 9:2-8; Matt. 17:1-8; Luke 9:28-36.` (589-591) | Mark.9.2-8, Luke.9.28-36 | CONFIRMED |
| 90 | `Mark 9:33-37; Matt. 18:1-5; Luke 9:46-48.` (602-604) | Mark.9.33-37, Luke.9.46-48 | CONFIRMED |
| 123 | `Mark 10:13-16; Matt. 19:13-15; Luke 18:15-17.` (708-710) | all three | CONFIRMED |
| 125 | `Mark 10:32-45; Matt. 20:17-28; Luke 18:31-34.` (715-717) | all three | CONFIRMED (range; see W2) |
| 134 | `Mark 12:18-27; Matt. 22:23-33; Luke 20:27-40.` (745-747) | Mark, Luke | CONFIRMED |
| 137 | `Mark 12:38-40; Matt. 23:1-39; Luke 20:45-47.` (754-756) | Mark, Luke | CONFIRMED |
| 139 | `Mark 13:1-37; Matt. 24, 25; Luke 21:5-36.` (763-766) | Mark.13.1-37, Matt.24, Matt.25 | CONFIRMED |
| 144 | `Mark 14:17; Matt. 26:20; Luke 22:14-16, 24-30.` (779-781) | Mark.14.17, Matt.26.20 | CONFIRMED (range; WRONG as parallel, see W1) |
| 147 | `Mark 14:27-31; Matt. 26:31-35; Luke 22:31-38; John 13:31-38.` (788-790) | all four | CONFIRMED |
| 148 (Last Supper, 1 Cor 11:23-26) | `Mark 14:22-25; Matt. 26:26-29; Luke 22:17-20; 1 Cor. 11:23-26.` (791-793) | all four | CONFIRMED (note: the user brief says "48-ish"; it is § 148) |
| 159 | `Mark 15:1-5; Matt. 27:2, 11-14; Luke 23:1-5; John 18:28-38.` (819-820) | Mark, Matt.27.2 and Matt.27.11-14 (two entries), Luke | CONFIRMED |
| 167 | `Mark 15:42-46; Matt. 27:57-60; Luke 23:50-54; John 19:31-42.` (835-837) | Mark, Matt, Luke | CONFIRMED |
| 171 | `Mark 16:2-8; Matt. 28:5-8; Luke 24:1-8; John 20:1.` (848-850) | Mark, Matt, John.20.1 | CONFIRMED |
| 176 | `Mark 16:12-13; Luke 24:13-32.` (861-863) | Mark.16.12-13 | CONFIRMED |
| 177 | `Luke 24:33-35; 1 Cor. 15:5.` (864-866) | Luke.24.33-35 | CONFIRMED |
| 178 | `Mark 16:14; Luke 24:36-43; John 20:19-25.` (867-869) | all three | CONFIRMED |
| 179 | `John 20:26-31; 1 Cor. 15:5.` (870-872) | John.20.26-31, 1Cor.15.5 | CONFIRMED |
| 181 | `Mark 16:15-18; Matt. 28:16-20; 1 Cor. 15:6.` (876-878) | Mark, Matt, 1Cor.15.6 | CONFIRMED |
| 183 | `Luke 24:44-49; Acts 1:3-8.` (881-882) | Acts.1.3-8 | CONFIRMED |
| 19 and 24, 53, 152 (asked in brief) | § 19 = `Luke 2:51-52.` (337-338: "the eighteen years at Nazareth"), so the baptism is § 24, as the data uses. § 53 = `Mark 3:13-19; Luke 6:12-16.` (452-453), not used by the data (the data's `54` is the Sermon on the Mount). § 152 = `Mark 14:26, 32-42; Matt. 26:30, 36-46; Luke 22:39-46; John 18:1.` (801-802), not used in the data (rule 2 sliver, see Check 3). | | CONFIRMED (data does not use 19, 53, 152) |

Section titles (`sectionTitles`), compared with the outline titles:
- 171: data has `THE VISIT OF THE WOMEN TO THE TOMB OF JESUS ABOUT`; the outline title continues `SUNRISE SUNDAY MORNING AND THE MESSAGE OF THE ANGELS ABOUT THE EMPTY TOMB` (848-849). WRONG (truncated).
- 147: data stops at `...WARNS THE DISCIPLES`; the outline continues `(PETER IN PARTICULAR) AGAINST DESERTION, WHILE ALL PROTEST THEIR LOYALTY` (788-789). WRONG (truncated).
- 64: data has `THE FIRST GREAT GROUP OF PARABLES Introduction to the Group`; the title is only `THE FIRST GREAT GROUP OF PARABLES` (502); the extra words are a subheading (504). WRONG (polluted).
- 54: data appends all eight subheadings (`The Place and the Audience (1) The Introduction ...`, lines 457-476) to the title `THE SERMON ON THE MOUNT. ... CHRIST'S STANDARD OF RIGHTEOUSNESS` (454-455). WRONG (polluted).
- All other titles equal the outline. 13 pair entries across the 4 sections above carry a wrong title.

## Check 2. Passage list and counts

- All 20 pages in the JSON (not only 6) compared with the `scripture` array of the page files, parsing `refs` at the entry level of each page: for every page, number of entries equal and, for every entry, `passage` = 1-based index and `refs` equal in order. CONFIRMED for: baptism/{baptist 1, catholic 19, lutheran 9, orthodox 10, reformed 22}, eucharist/{baptist 1, catholic 14, lutheran 21, orthodox 7, reformed 9}, papacy/{baptist 5, catholic 14, lutheran 15, orthodox 7, reformed 19}, sola-scriptura/{baptist 1, catholic 17, lutheran 10, orthodox 4, reformed 26} (all as the specified four pages). Total 231. (`eucharist/doctrine.es.ts` has no `scripture` array and is not among the 20: consistent.)
- `_meta.counts`: pages 20 CONFIRMED; passages 231 CONFIRMED; passagesWithParallels 69 CONFIRMED; parallelPairs 179 CONFIRMED; coarsePairs 74 CONFIRMED (counted over the JSON). Passages with none: 162 = 231 - 69 CONFIRMED. Cross-book pairs: 30 (not stated in the prose; `kind` assigned correctly for all 179 pairs, Acts and 1 Cor only).
- `_meta.coarse` wording: it says coarse is true when "the passage's own range and the parallel's range in the section differ in size by more than a factor of two, or the section range exceeds 40 verses". Recomputing: that reading (passage's own refs) disagrees with the data in 115 of 179 pairs. The data is reproduced exactly (0 differences in 179) by this rule: the section's whole range in the matched book (sum of its pieces) versus the section's range in the parallel's book differ by more than 2x, or either exceeds 40 verses; cross-book pairs are 21 of 30 also coarse by size, the rest (9, e.g. 1 Cor 11:23-26, Acts 1:3-8) are `cross-book` but not coarse. The description in parallels-final.md ("the harmony's section ranges differ in size") is the right one; the `_meta.coarse` text is WRONG (misdescribes what was computed).

## Check 3. Rules

Independent recomputation: for each of the 231 passages, the sections matched (coverage >= half of each ref's verses), the other books' ranges as parallels, own-overlap dropped, chapter-only refs skipped. Result: 0 differences with the JSON for the set of (section, book) parallels; 0 differences for the `coarse` flag with the size rule above. So the rules are applied as stated (rule 1 to 5 CONFIRMED mechanically).

### 3a. Eight passages with no parallel (all CONFIRMED)
1. baptism/catholic 1, John 3:5: in § 32 `John 2:23-3:21.` (John only). CONFIRMED.
2. eucharist/catholic 1: four refs equal § 148's four ranges (`Mark 14:22-25; Matt. 26:26-29; Luke 22:17-20; 1 Cor. 11:23-26.`); every parallel overlaps an own ref (rule 4). CONFIRMED.
3. eucharist/catholic 3, John 6:51-69: § 76 `John 6:22-71.` John only. CONFIRMED.
4. papacy/catholic 3, John 21:15-17: § 180 `John 21.` John only. CONFIRMED.
5. papacy/lutheran 8, Matt 18:18: § 92 `Matt. 18:15-35.` Matthew only. CONFIRMED.
6. papacy/catholic 13, John 17:21: § 151 `John 17.` John only. CONFIRMED.
7. sola-scriptura/reformed 4, Luke 1:3-4: § 1 `Luke 1:1-4.` Luke only. CONFIRMED.
8. sola-scriptura/catholic 6, Luke 10:16: § 102 `Luke 10:1-24.` Luke only (Robertson's appendix lists «Sending the Twelve and Sending the Seventy: §§ 70 and 102», rob.txt 27143, as a doublet, not a section parallel). CONFIRMED.
Also CONFIRMED: rule 5 (chapter-only refs `John.6` in eucharist/lutheran 15, `1Cor.12` in papacy/baptist 3, `1Cor.5` in papacy/reformed 17 yield none) and the sliver example in parallels-final.md: Mark 14:26 and Matt 26:30 cover 1 of 5 verses of the passage (0.2) in § 152, and baptism/baptist 1 and eucharist/baptist 1 get no § 152 parallels.

### 3b. Passages with parallels (all 69 reviewed; the questionable ones first)

WRONG (not the same saying or event, shown by the outline itself):

- W1. Mark 14:17 and Matt 26:20 as parallels of Luke 22:25-27 (papacy/lutheran 1 `Luke.22.25`; papacy/catholic 11 `Luke.22.26-27`). § 144 reads `Mark 14:17; Matt. 26:20; Luke 22:14-16, 24-30.` (rob.txt 781): Mark 14:17 is only the setting `And when it was evening he cometh with the twelve` and Matt 26:20 the same; the rebuke about greatness (Luke 22:24-30) is in Luke alone. Robertson's own appendix lists «The Twelve Contending for Supremacy: §§ 90, 125, 144» (rob.txt 27148), i.e. Luke 22:25-27 is a doublet of Mark 10:42-45 / Matt 20:25-28 (§ 125), and Stevens-Burton's footnote on Mark 10:43,44 (§ 114) cross-references `Luke 22: 26 ... (§133.)` (sb line 12299). The two pairs are coarse-flagged but are still not the same event or saying. Remove both (4 pairs).
- W2. Luke 18:31-34 as parallel of Matt 20:25 (papacy/catholic 11) and of Mark 10:38 (baptism/catholic 15; also flagged coarse). § 125's Luke range is the third passion prediction only (Luke omits the request of James and John); S-B splits the section: § 113 `Mt. 20:17-19. Mk. 10:32-34. Lu. 18:31-34.` and § 114 `Mt. 20:20-28. Mk. 10:35-45.` (sb lines 1142-1146), so Luke 18:31-34 is not grouped with the saying. Remove the Luke pairs for these two passages (2 pairs). The Matt 20:17-28 / Mark 10:32-45 pairs stay.
- W3. John 7:1 as parallel of Mark 7:4 (baptism/reformed 12). § 77 `Mark 7:1-23; Matt. 15:1-20; John 7:1.` (566): John 7:1 (`After these things Jesus walked in Galilee...`) is a chronological note, not the hand-washing event; S-B § 69 is `Mt. 15: 1-20. Mk. 7: 1-23.` and puts John 7:1 in § 82 `Jo. 7: 1-52.` (sb lines 920, 1004). Remove (1 pair).
- W4. Luke 6:17-49 as parallel of Matt 5:17-18 / Matt 5:18 (sola-scriptura/baptist 1; sola-scriptura/reformed 17; coarse-flagged). The outline's subsections for § 54 give `(2) The Theme of the Sermon ... Matt. 5:13-20.` with no Luke reference (rob.txt 461-464); Luke 6 has nothing for Matt 5:13-20 in this harmony. Remove (2 pairs); the page can keep «Sermón del monte» as an event-level label only if Pedro wants.
- W5. Mark 4:1-34 and Luke 8:4-18 as parallels of Matt 13:24-30 and 13:47 (papacy/reformed 7; coarse). The outline's subsections: `(c) Parable of the Tares: Matt. 13:24-30.` (511-512) and `(d) The Parable of the Net: Matt. 13:47-50.` (524-525), Matthew only; the Mark/Luke ranges are the Sower and the Seed/Mustard parables. Remove (2 pairs).
- W6. Mark 6:6-13 and Luke 9:1-6 as parallels of Matt 10:2 (papacy/catholic 7, the list of the Twelve; coarse). § 70 is the sending of the Twelve, and the names list is not in those verses; Robertson's appendix gives «The Lists of the Twelve: §§ 53 and 70» as separate incidents (rob.txt 27135), and S-B § 48 groups the list with the Mark 3 / Luke 6 choosing of the Twelve: `[Mt. 10: 2-4.] Mk. 3: 13-190. Lu. 6: 12-19.` (sb line 815). The real parallels (Mark 3:16, Luke 6:14) are already own refs. Remove (2 pairs).
- W7. The `sectionTitles` problems of Check 1 (13 pair entries) and the `_meta.coarse` description (Check 2).

UNCONFIRMABLE as "same saying" (same event in the harmony; not wrong by the stated rule, but the coarse flag is missing or over-optimistic; recommended: label «mismo episodio», or flag coarse):
- Matt 16:16-19 and Matt 16:15-19 against Mark 8:27-30 / Luke 9:18-21 (§ 82; papacy/catholic 1, papacy/lutheran 6, papacy/reformed 8 and 15, papacy/baptist 1; coarse=false). Only Matt 16:16 has a counterpart (Mark 8:29, Luke 9:20); Matt 16:17-19 (the keys) is Matthew-only. The outline gives no subsection. Unconfirmable at verse level; the rule says it is the same event.
- Luke 22:31-32 against Mark 14:27-31, Matt 26:31-35, John 13:31-38 (§ 147; papacy/catholic 4; coarse=false): same event (warning to Peter), the saying «Simon, Simon, Satan has asked to sift you» is Luke-only.
- Luke 5:8 against Mark 1:16-20 / Matt 4:18-22 (§ 41; papacy/catholic 10; coarse): same event (call of Peter), but Luke's miraculous draught is different material (Robertson's appendix: «Calling Disciples: §§ 28, 41, and 53»; «Miraculous Draught of Fishes: §§ 41 and 180»).
- Matt 23:2 and 23:8-10 against Mark 12:38-40 / Luke 20:45-47 (§ 137; baptism/lutheran 8; papacy/reformed 10; coarse): same discourse (S-B § 127 groups the same), the sayings «chair of Moses» and «call no man father» are not in Mark/Luke.
- John 19:34 against the Synoptic burial (§ 167; baptism/catholic 15; eucharist/orthodox 7; coarse): S-B groups John 19:34 with the crucifixion (`Jo. 19: 16b-37`, § 140) and only John 19:38-43 with the burial (§ 141); the Robertson title says «after proof of his death» but the spear is John-only.
- John 18:36 against Mark 15:1-5, Matt 27:2 / 27:11-14, Luke 23:1-5 (§ 159; coarse): same trial scene; the saying is John-only; Matt 27:2 (delivered to Pilate) is only the setting.
- Luke 21:33 / Matthew-only discourse material against `Matt.25` (§ 139; sola-scriptura/baptist 1, eucharist/lutheran 18; coarse): the same discourse in the harmony, but Matt 25 (the parables) is not a counterpart of Luke 21:33 (Matt 24:35 is). Suggest keeping `Matt.24` only.
- Mark 16:14 and Luke 24:36-43 against John 20:21-23 (§ 178; papacy; coarse for Mark 16:14): same appearance; the commission of John 20:21 is placed by Robertson in three separate sections («The Three Commissions: §§ 178, 181, and 183», rob.txt 27165).
- Cross-book pairs (30): 1 Cor 15:6 (§ 181) set with the Galilee commission; 1 Cor 15:5 (§§ 177, 179); Acts 1:3-8 with Luke 24:44-49 (§ 183); 1 Cor 11:23-26 with the Gospel Supper (§ 148). These are Robertson's identifications; Stevens-Burton does not list 1 Cor or Acts in its outline (Check 4).

CONFIRMED (mechanically and semantically; the outline shows one event in the same section): baptism/catholic 10, 16; baptism/lutheran 1, 2, 5, 9; baptism/orthodox 3, 5, 8, 9 (Mark 16:15-18 vs Matt 28; Matt 16:24 vs Mark 8:34/Luke 9:23); baptism/reformed 1, 8, 13, 18; eucharist/catholic 2, 6, 12; eucharist/lutheran 2, 3, 7, 16; eucharist/orthodox 1, 5, 6; eucharist/reformed 4, 5, 9; papacy/lutheran 2, 3, 9, 13; papacy/orthodox none; papacy/reformed 6, 14, 15, 16; sola-scriptura/lutheran 6, 7; sola-scriptura/catholic 1, 10 (apart from the cross-book items above); sola-scriptura/orthodox 4; sola-scriptura/reformed 8, 23; plus the Gospel-only pairs of the passages listed above.

## Check 4. Stevens-Burton cross-check (OCR, `sb_harmonyofgosp00stev.txt` lines 540-1359)

S-B section numbers differ from Robertson's. "Confirmed" = S-B has one section grouping the same passages of the same Gospels (S-B range may be wider).

| Robertson § | S-B section and refs (sb line) | Result |
|---|---|---|
| 21 | § 18 `Mt. 3:1-12. Mk. 1:1-8. Lu. 3:1-18` (see § 18 line above 633) | CONFIRMED (wider) |
| 24 | § 19 `Mt. 3:13-17. Mk. 1:9-11. Lu. 3: 21, 22 [23a]` (633) | CONFIRMED |
| 41 | § 38 `Mt. 4:18-22. Mk. 1:16-20. Lu. 5:1-11` | CONFIRMED |
| 47 | § 42 `Mt. 9:9-13. Mk. 2:13-17. Lu. 5:27-32` | CONFIRMED |
| 54 | § 49 `Mt. chaps. 5, 6, 7, [8:1]. Lu. 6:20-49`; Luke 6:17-19 in § 47 (bracketed) | CONFIRMED at section level (S-B gives no finer grouping; does not support Matt 5:13-20 against Luke) |
| 64 | § 57 `Mt. 13:1-53. Mk. 4:1-34. Lu. 8:4-18` | CONFIRMED |
| 70 | § 63 `Mt. 9:35. Mk. 6:6b` and § 64 `Mt. 9:36-11:1. Mk. 6:7-13. Lu. 9:1-6` | CONFIRMED (split in two) |
| 77 | § 69 `Mt. 15:1-20. Mk. 7:1-23`; John 7:1 is in § 82 `Jo. 7:1-52` | S-B groups differently: Mark/Matt confirmed; the John 7:1 pair NOT confirmed |
| 82 | § 75 `Mt. 16:13-20. Mk. 8:27-30. Lu. 9:18-21` | CONFIRMED |
| 83 | § 76 `Mt. 16:21-28. Mk. 8:31-9:1. Lu. 9:22-27` | CONFIRMED (wider) |
| 85 | § 77 `Mt. 17:1-13. Mk. 9:2-13. Lu. 9:28-36` | CONFIRMED (wider) |
| 90 | § 81 `Mt. chap. 18. Mk. 9:33-50. Lu. 9:46-50` | CONFIRMED (wider) |
| 123 | § 111 `Mt. 19:13-15. Mk. 10:13-16. Lu. 18:15-17` | CONFIRMED |
| 125 | § 113 `Mt. 20:17-19. Mk. 10:32-34. Lu. 18:31-34` and § 114 `Mt. 20:20-28. Mk. 10:35-45` | S-B groups differently: Matt/Mark pairs confirmed (113 + 114); Luke 18:31-34 only with 20:17-19 / 10:32-34 |
| 134 | § 125 `Mt. 22:15-40. Mk. 12:13-34. Lu. 20:20-40` | CONFIRMED (wider) |
| 137 | § 127 `Mt. chap. 23. Mk. 12:38-40. Lu. 20:45-47` | CONFIRMED |
| 139 | § 131 `Mt. chaps. 24, 25. Mk. chap. 13. Lu. 21:5-38` | CONFIRMED |
| 144 | § 133 The Last Supper `Mt. 26:17-30. Mk. 14:12-26. Lu. 22:7-30. Jo. 13:1-30`; footnote at Mark 10:43-44 (§ 114) cross-refers Luke 22:26 (§ 133) | S-B groups differently (one large section): all three passages are in § 133 but S-B does not pair Mark 14:17 with Luke 22:24-30 |
| 147 | § 134 `Mt. 26:31-35. Mk. 14:27-31. Lu. 22:31-38. Jo. 13:31-16:33` | CONFIRMED (John wider) |
| 148 | § 133 (same large section; no 1 Cor in the outline or body) | S-B groups differently: Gospels confirmed at event level; 1 Cor 11:23-26 NOT in S-B |
| 159 | § 139 `Mt. 27:[2] 11-31. Mk. 15:1-20. Lu. 23:1-25. Jo. 18:28-19:16a` | CONFIRMED (wider) |
| 167 | § 141 `Mt. 27:57-61. Mk. 15:42-47. Lu. 23:50-56a. Jo. 19:38-43` (John 19:16b-37 is in § 140) | CONFIRMED for Matt/Mark/Luke; John 19:31-37 differs (so John 19:34 is not in the burial) |
| 171 | § 143 `Mt. 28:1-10. Mk. 16:1-11. Lu. 23:56b-24:12. Jo. 20:1-18` | CONFIRMED (wider) |
| 176 | § 145 `Mk. 16:12, 13. Lu. 24:13-35` | CONFIRMED (wider) |
| 177 | Luke 24:33-35 is in § 145 (with Emmaus); no 1 Cor | S-B not readable for the pair (1 Cor 15:5 not in S-B): NOT confirmed |
| 178 | § 146 `Mk. 16:14. Lu. 24:36-43. Jo. 20:19-25` | CONFIRMED |
| 179 | § 147 `Jo. 20:26-29` (+ § 151 `Jo. 20:30, 31`); no 1 Cor | NOT confirmed (cross-book) |
| 181 | § 149 `Mt. 28:16-20. Mk. 16:15-18` | CONFIRMED for the Gospel pair; 1 Cor 15:6 NOT confirmed |
| 183 | § 150 `Mk. 16:19, 20. Lu. 24:44-53`; no Acts 1 | NOT confirmed (Acts); Luke part only |

S-B has no 1 Cor reference at all (`grep` for `Cor` hits nothing relevant) and cites Acts only in a footnote at Luke 6:15 (`See Luke vi. 15; Acts i. 13`, lines 6111, 9528), which matters to no pair.

Sections suitable for `confirmedBy: stevens-burton-1893` (Gospel pairs): 21, 24, 41, 47, 54 (section level only), 64, 70, 82, 83, 85, 90, 123, 134, 137, 139, 147, 159, 167 (Matt/Mark/Luke), 171, 176, 178, 181 (Mark-Matt pair only). Also 148 at event level for the three Gospels.
Sections or pairs NOT confirmed: 77 (John 7:1 pair), 125 (Luke pairs), 144 (Mark 14:17 / Matt 26:20 pairs; large § 133), 148 (1 Cor), 177, 179, 183 (cross-book), and every `1Cor` / `Acts` pair in the data; also the John 19:34 pairs of § 167. S-B not readable: none of the 29 sections was unreadable in this OCR.

## Check 5. Claims in «The source, edition and licence»

- «COPYRIGHT, 1922, BY HARPER & BROTHERS», in the e-text: rob.txt line 100-101 `COPYRIGHT, 1922,` / `BY HARPER & BROTHERS` (line 90-98 `HARPER & BROTHERS PUBLISHERS / NEW YORK AND LONDON`). CONFIRMED.
- Title, author, Gutenberg #36264, release 2011-05-29: rob.txt lines 21-32 `Title: A Harmony of the Gospels for Students of the Life of Christ / Based on the Broadus Harmony in the Revised Version`, `Release Date: May 29, 2011 [EBook #36264]`; https://gutenberg.org/ebooks/36264 fetched 2026-11-01: `Release Date May 29, 2011`, `Public domain in the USA.`. CONFIRMED.
- 185 section entries (1-184, with 128a and 128b): independent parse = 185; numbers 1-184 all present (128 replaced by 128a and 128b). CONFIRMED.
- «giving the references in each Gospel (plus Acts and 1 Cor where Robertson places them)»: sections 148, 177, 179, 181 (1 Cor) and 183 (Acts) in the outline. CONFIRMED.
- Appendix «Similar Incidents and Chief Repeated Sayings»: heading at rob.txt line 221 (table of contents, `SIMILAR INCIDENTS AND`) and 27121 `SIMILAR INCIDENTS AND CHIEF REPEATED SAYINGS`; the line `Baptism of Death: �� 108 and 125.` at 27159 (the symbols are `§§` damaged by the encoding). CONFIRMED. (The claim that «the data does not include them»: the data includes no § 108, and § 125 only as a Matt/Mark/Luke section pair, not as the doublet Luke 12:50: CONFIRMED.)
- The prose examples: «Mark 14:26 for the Last Supper ... Gethsemane» CONFIRMED (Check 3a); «Matthew 23 against Mark 12:38-40» (§ 137), «Matt 5-7 against Luke 6:17-49» (§ 54), «the Pilate section against John 18:36» (§ 159); «1 Cor 15:6 with the Galilee commission in Matt 28:16-20» (§ 181), «1 Cor 15:5 with Luke 24:33-35» (§ 177), «Acts 1:3-8 with Luke 24:44-49» (§ 183): CONFIRMED against the outline lines above.
- «John-only sayings that Robertson sets alone in a section (John 3:5, the Bread of Life discourse 6:51-69, 17:21)»: § 32 `John 2:23-3:21.`, § 76 `John 6:22-71.`, § 151 `John 17.`: CONFIRMED.
- Stevens and Burton, 1893, 1902 printing: https://archive.org/metadata/cu31924029339474 fetched 2026-11-01: `title: A harmony of the Gospels for historical study...`, `creator: ['Stevens, William Arnold, 1839-1910', 'Burton, Ernest De Witt, 1856-1925']`, `date: 1902`; the OCR itself prints `Copyright, 1893, 1902,` (sb line 73) and `Christmas, Anno Domini 1893.` (line 439). CONFIRMED (authors' dates, 1893/1902).
- «Princeton Theological Seminary's scan is catalogued "No Copyright - United States"»: not fetched. UNCONFIRMABLE here.
- Robertson 1863-1934, died 24 September 1934: not fetched (snippet in the file). UNCONFIRMABLE here.
- Mexico term life + 100 (art. 29), «free from 1 January 2026» for Burton (died 1925), Spain and Latin America: legal claims, not checked, per instructions. UNCONFIRMABLE.
- STEPBible / TSKe licences: not checked. UNCONFIRMABLE.

## Consolidated lists

Wrong items: 8
1. W1. Mark 14:17 and Matt 26:20 listed as parallels of Luke 22:25-27 (papacy/lutheran 1; papacy/catholic 11): 4 pairs; § 144.
2. W2. Luke 18:31-34 listed as parallel of Matt 20:25 (papacy/catholic 11) and Mark 10:38 (baptism/catholic 15): 2 pairs; § 125.
3. W3. John 7:1 listed as parallel of Mark 7:4 (baptism/reformed 12): 1 pair; § 77.
4. W4. Luke 6:17-49 listed as parallel of Matt 5:17-18 / 5:18 (sola-scriptura/baptist 1; sola-scriptura/reformed 17): 2 pairs; § 54.
5. W5. Mark 4:1-34 and Luke 8:4-18 listed as parallels of Matt 13:24-30 / 13:47 (papacy/reformed 7): 2 pairs; § 64.
6. W6. Mark 6:6-13 and Luke 9:1-6 listed as parallels of Matt 10:2 (papacy/catholic 7): 2 pairs; § 70.
7. `sectionTitles` truncated for § 171 and § 147 and polluted with subheadings for § 64 and § 54 (13 pair entries).
8. `_meta.coarse` text misdescribes the rule actually computed (section ranges, not the passage's own range).
Effect: 13 of the 179 pairs (items 1 to 6) should go if the same-saying requirement is kept; 166 would remain, and 4 passages would be left with no parallel (papacy/lutheran 1, papacy/catholic 7, papacy/reformed 7, sola-scriptura/reformed 17), so 65 passages with parallels and 166 pairs (to be recounted after the apply step).

Unconfirmable: the "same saying" level of the non-coarse Matt 16:16-19 and Luke 22:31-32 pairs; Luke 5:8; Matt 23:2 and 23:8-10; John 19:34 and John 18:36 pairs; Matt 25; Mark 16:14 for John 20:21; all 30 cross-book pairs (1 Cor and Acts are absent from Stevens-Burton); Princeton catalogue wording; Robertson's death date; Mexico, Spain and Latin American term; STEPBible and TSKe licences.
