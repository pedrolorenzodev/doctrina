Status: draft, NOT verified by Pedro

# Parallel passages: a sourced, licence-checked source (C3)

## Progress
- Status: first pass 2026-11-01 (research night, session 2). Source found and downloaded; licence read; preview for the passages of the four Catholic Pasajes pages computed by script. Verifier pass: done 2026-11-01 (Sonnet; `## Verification` below; corrections applied).

## Recommendation
Use **OpenBible.info's cross-reference dataset** as the parallels source: filtered to the Gospels for «Pasajes paralelos» and kept as a general «ver también» list elsewhere. It is open (CC BY 4.0), uses the same OSIS references as the repo (`Matt.3.13`, `Mark.1.9-Mark.1.11`), carries a vote count per pair that can be thresholded, and is mostly derived from the public-domain *Treasury of Scripture Knowledge*.

## Source and licence (read 2026-11-01)
- Page: https://www.openbible.info/labs/cross-references/ `[verified: page]`: «about 340,000 cross references»; «This data draws primarily from public-domain sources, especially the Treasury of Scripture Knowledge, which provides most of the data»; seeded also with the author's Topical Bible and Twitter Bible Search data.
- Licence, exact words: «Unless otherwise indicated, all content is licensed under a Creative Commons Attribution License» (the link points to CC BY 4.0). The ESV quotations on that site are **not** under that licence `[verified: page]`; the data file holds **only references**, no verse text.
- Download: https://a.openbible.info/data/cross-references.zip (about 1.9 MB), one file `cross_references.txt`, tab-separated, header `From Verse<TAB>To Verse<TAB>Votes<TAB>#www.openbible.info CC-BY 2026-10-26` `[verified: downloaded and read]`; **344,799 pairs**; references in OSIS form with ranges (`Mark.1.9-Mark.1.11`).
- Attribution: the page prescribes no wording for the dataset. A line such as «Referencias cruzadas: OpenBible.info (CC BY 4.0)» would meet CC BY 4.0's attribution rule; where it goes on the site is open item K3.
- Not established: the licence status of the TSK itself beyond the site's own claim («public-domain»). A search turned up its history (first published about 1830 by Samuel Bagster, drawing on Thomas Scott's references) and one non-authoritative site calling it public domain (`[snippet]`). The CC BY licence is the author's on the data he compiled; the TSK origin is context, not the legal basis.
- What it is **not**: a harmony of the Gospels. It lists pairs that people or the TSK link, with votes; Gospel parallels appear among them, mixed with thematic links.

## Alternatives considered (not adopted, not verified)
- A public-domain printed harmony (Huck's *Synopsis*, A. T. Robertson's *Harmony*, Stevens and Burton): publication years, copyright status in Spain and Latin America (the repo's rule: free in the US, Spain and all of Latin America) and an e-text were **not checked**. `[not searched]`
- STEPBible's cross-reference data: `[not searched]`.

## How the preview was computed
For each passage of `src/content/pages/<doctrine>/catholic.es.ts` (`scripture`), every pair whose «From» verse lies inside the passage was taken. **Gospel pairs:** passage in a Gospel and target in another Gospel. **Other pairs:** the five highest-voted pairs whose target is in a different book. Votes are the dataset's. «Other» excludes Gospel-to-Gospel pairs; a chapter-only reference such as `Exod.12` counts the whole chapter (row 11 was first computed wrongly from verse 1 only and corrected after the verifier). Nothing was filtered by meaning: a high-vote pair can be a thematic link, not a parallel, and the Gospel list needs a human pass before anything shows as «paralelo».


## El bautismo · Catholic page, 19 passages

**1.** `John.3.5`
- Gospel pairs (votes): `Matt.3.11` (28); `Mark.16.16` (20); `Matt.18.3` (11); `Matt.28.19` (10); `Luke.13.3` (9); `Matt.5.20` (7)
- Other top pairs (votes): `Ezek.36.25-Ezek.36.27` (115); `Eph.5.26` (63); `Acts.2.38` (56); `1Cor.6.11` (39); `1Pet.3.21` (39)

**2.** `Matt.28.19-Matt.28.20, Mark.16.15-Mark.16.16`
- Gospel pairs (votes): `John.11.25-John.11.26` (203); `John.3.36` (194); `Mark.16.15-Mark.16.16` (186); `John.3.18-John.3.19` (146); `John.3.15-John.3.16` (140); `John.5.24` (113)
- Other top pairs (votes): `Rom.10.9-Rom.10.14` (183); `Acts.2.38` (130); `Acts.2.38-Acts.2.39` (109); `Acts.1.8` (90); `Isa.41.10` (84)

**3.** `Acts.2.38`
- Gospel pairs (votes): none
- Other top pairs (votes): `Mark.16.16` (76); `Luke.24.47` (61); `1Pet.3.21` (53); `Rom.6.3` (41); `Matt.3.2` (34)

**4.** `Rom.6.3-Rom.6.4, Col.2.12`
- Gospel pairs (votes): none
- Other top pairs (votes): `2Cor.5.17` (56); `Col.3.10` (39); `Eph.4.22-Eph.4.24` (35); `Gal.3.27` (29); `1Pet.3.21` (28)

**5.** `Titus.3.5`
- Gospel pairs (votes): none
- Other top pairs (votes): `Eph.2.8-Eph.2.9` (90); `2Tim.1.9` (61); `1Cor.6.11` (48); `1Pet.1.3` (30); `1Pet.3.21` (29)

**6.** `Gal.3.27`
- Gospel pairs (votes): none
- Other top pairs (votes): `Rom.13.14` (33); `1Cor.12.13` (21); `Rom.6.3-Rom.6.4` (19); `1Pet.3.21` (14); `Eph.4.24` (13)

**7.** `1Cor.6.11, 1Cor.12.13`
- Gospel pairs (votes): none
- Other top pairs (votes): `Col.3.5-Col.3.7` (24); `Rom.6.17-Rom.6.19` (21); `Eph.4.5` (20); `Acts.22.16` (18); `Rom.8.30` (17)

**8.** `Rom.5.12`
- Gospel pairs (votes): none
- Other top pairs (votes): `1Cor.15.21-1Cor.15.22` (76); `Jas.1.15` (27); `Gen.2.17` (24); `Ps.51.5` (22); `Gen.3.19` (19)

**9.** `Acts.16.15, Acts.16.33, Acts.18.8, 1Cor.1.16`
- Gospel pairs (votes): none
- Other top pairs (votes): `Heb.13.2` (9); `1Cor.1.16` (7); `Gen.19.3` (6); `Luke.24.29` (6); `1Cor.1.13-1Cor.1.17` (6)

**10.** `Mark.10.14`
- Gospel pairs (votes): `Matt.19.14` (16); `Matt.18.4` (15); `Matt.18.10` (14); `Luke.18.15-Luke.18.16` (11); `Luke.9.54-Luke.9.56` (7)
- Other top pairs (votes): `Ps.131.1-Ps.131.2` (13); `1Pet.2.2` (11); `2Tim.3.15` (9); `1Cor.14.20` (8); `1Cor.7.14` (8)

**11.** `1Pet.3.20`
- Gospel pairs (votes): none
- Other top pairs (votes): `Heb.11.7` (13); `2Pet.2.5` (12); `Gen.6.3` (11); `Gen.6.5` (10); `Gen.8.18` (8)

**12.** `1Pet.3.21`
- Gospel pairs (votes): none
- Other top pairs (votes): `Mark.16.16` (27); `Ezek.36.25-Ezek.36.26` (19); `Acts.2.38` (18); `Acts.22.16` (18); `Gal.3.27` (18)

**13.** `Eph.4.30, Eph.1.13-Eph.1.14, 2Cor.1.21-2Cor.1.22`
- Gospel pairs (votes): none
- Other top pairs (votes): `2Cor.1.22` (84); `1Thess.5.19` (58); `Isa.63.10` (46); `2Tim.2.19` (34); `2Cor.5.5` (32)

**14.** `1Tim.2.4`
- Gospel pairs (votes): none
- Other top pairs (votes): `Ezek.18.32` (61); `2Pet.3.9` (51); `Ezek.18.23` (45); `Titus.2.11` (36); `Ezek.33.11` (27)

**15.** `John.19.34, Mark.10.38`
- Gospel pairs (votes): `Luke.12.50` (8); `Matt.20.21-Matt.20.22` (5); `John.18.11` (4); `Luke.22.42` (3); `Matt.27.62` (2); `Matt.26.39` (1)
- Other top pairs (votes): `1John.5.6` (14); `Zech.13.1` (10); `Zech.12.10` (10); `1John.5.8` (8); `Titus.3.5-Titus.3.7` (7)

**16.** `Matt.3.13-Matt.3.17`
- Gospel pairs (votes): `Luke.3.21-Luke.3.22` (18); `Mark.1.10` (18); `Luke.9.35` (18); `Mark.9.7` (16); `John.1.31-John.1.34` (15); `John.4.34` (13)
- Other top pairs (votes): `Isa.42.1` (36); `Ps.2.7` (26); `Isa.11.2` (21); `2Pet.1.17` (14); `Isa.42.21` (12)

**17.** `1Pet.2.5, 1Pet.2.9`
- Gospel pairs (votes): none
- Other top pairs (votes): `Exod.19.5-Exod.19.6` (214); `Deut.7.6` (200); `Rev.1.6` (131); `Rev.5.10` (115); `Isa.61.6` (105)

**18.** `Eph.4.25`
- Gospel pairs (votes): none
- Other top pairs (votes): `Col.3.9` (33); `Zech.8.16` (30); `Prov.12.22` (26); `Rom.12.5` (15); `Prov.12.17` (11)

**19.** `Gal.5.3`
- Gospel pairs (votes): none
- Other top pairs (votes): `Rom.2.25` (14); `Jas.2.10-Jas.2.11` (9); `Deut.27.26` (5); `Eph.4.17` (4); `Deut.31.21` (4)


## La Eucaristía · Catholic page, 14 passages

**1.** `Matt.26.26-Matt.26.28, Mark.14.22-Mark.14.24, Luke.22.19-Luke.22.20, 1Cor.11.23-1Cor.11.26`
- Gospel pairs (votes): `Luke.22.18-Luke.22.20` (21); `Mark.14.22-Mark.14.24` (18); `John.6.33-John.6.35` (15); `Matt.26.26-Matt.26.29` (15); `Mark.14.22-Mark.14.25` (13); `Matt.26.26-Matt.26.28` (13)
- Other top pairs (votes): `Heb.10.4-Heb.10.14` (37); `Heb.9.14-Heb.9.22` (34); `1Cor.11.23-1Cor.11.29` (30); `Lev.17.11` (29); `1Cor.10.16` (25)

**2.** `Luke.22.19`
- Gospel pairs (votes): `Mark.14.22-Mark.14.24` (18); `Matt.26.26-Matt.26.28` (13); `John.6.51` (7); `Matt.14.19` (6); `John.6.23` (5)
- Other top pairs (votes): `1Cor.11.23-1Cor.11.29` (30); `1Cor.10.16` (25); `1Cor.10.4` (10); `Ps.111.4` (9); `Titus.2.14` (8)

**3.** `John.6.51-John.6.58, John.6.60-John.6.69`
- Gospel pairs (votes): `Matt.26.26-Matt.26.28` (25); `Luke.9.62` (20); `Luke.22.19` (18); `Matt.16.16` (14); `Matt.19.22` (12); `Luke.9.20` (9)
- Other top pairs (votes): `Gal.5.25` (63); `Heb.4.12` (60); `Ps.119.93` (57); `Ps.119.130` (45); `Ps.119.50` (43)

**4.** `1Cor.10.16-1Cor.10.17`
- Gospel pairs (votes): none
- Other top pairs (votes): `Matt.26.26-Matt.26.28` (18); `Acts.2.42` (12); `Heb.3.14` (11); `1John.1.7` (10); `John.6.53-John.6.58` (10)

**5.** `1Cor.10.21`
- Gospel pairs (votes): none
- Other top pairs (votes): `Matt.6.24` (31); `1Kgs.18.21` (22); `2Cor.6.15-2Cor.6.17` (13); `Isa.65.11` (10); `Deut.32.37-Deut.32.38` (6)

**6.** `1Cor.11.26`
- Gospel pairs (votes): none
- Other top pairs (votes): `Rev.1.7` (13); `Heb.9.28` (13); `John.14.3` (10); `Acts.1.11` (8); `1John.2.28` (8)

**7.** `1Cor.11.27-1Cor.11.29`
- Gospel pairs (votes): none
- Other top pairs (votes): `John.6.51` (25); `Gal.6.4` (22); `2Cor.13.5` (18); `Heb.10.29` (16); `Lam.3.40` (16)

**8.** `Mal.1.11`
- Gospel pairs (votes): none
- Other top pairs (votes): `Isa.45.6` (10); `Isa.54.5` (7); `Heb.13.15-Heb.13.16` (6); `Isa.66.19-Isa.66.20` (5); `Matt.28.19` (5)

**9.** `Gen.14.18, Ps.110.4`
- Gospel pairs (votes): none
- Other top pairs (votes): `Heb.7.17` (27); `Heb.5.6` (26); `Heb.7.21` (22); `Ps.110.4` (19); `Heb.6.20-Heb.7.3` (18)

**10.** `Heb.7.11-Heb.7.27, Heb.9.12-Heb.9.14, Heb.9.27`
- Gospel pairs (votes): none
- Other top pairs (votes): `2Cor.5.10` (68); `Rom.8.34` (53); `Eccl.12.14` (41); `Eccl.12.7` (40); `1John.2.1-1John.2.2` (39)

**11.** `Exod.12, 1Cor.5.7`
- Gospel pairs (votes): none
- Other top pairs (votes): `Heb.11.28` (37); `1Pet.1.19-1Pet.1.20` (24); `Eph.4.22` (21); `1John.1.7` (18); `Num.33.4` (15)

**12.** `Heb.1.6, Ps.97.7, Matt.2.11, Matt.28.17`
- Gospel pairs (votes): `Luke.2.16` (18); `John.5.22-John.5.23` (9); `Luke.2.38` (7); `Luke.2.26-Luke.2.32` (7); `John.5.23` (4)
- Other top pairs (votes): `Isa.60.6` (37); `Ps.72.10` (27); `Ps.97.7` (20); `Deut.32.43` (19); `1Pet.3.22` (19)

**13.** `1Cor.4.1, 1Cor.11.34`
- Gospel pairs (votes): none
- Other top pairs (votes): `1Pet.4.10` (24); `Titus.1.7` (13); `1Tim.3.9` (12); `Eph.6.19` (9); `2Cor.4.5` (8)

**14.** `Acts.2.42, Acts.2.46, Acts.20.7`
- Gospel pairs (votes): none
- Other top pairs (votes): `Heb.10.25` (50); `1John.1.3` (36); `1John.1.7` (26); `Eph.6.18` (18); `Jude.1.20` (18)


## El papado · Catholic page, 14 passages

**1.** `Matt.16.16-Matt.16.19`
- Gospel pairs (votes): `John.11.27` (64); `John.1.42` (34); `John.20.23` (28); `Mark.14.61` (24); `John.10.27-John.10.30` (24); `John.20.31` (19)
- Other top pairs (votes): `Eph.2.19-Eph.2.22` (82); `1Cor.3.9-1Cor.3.11` (71); `Isa.28.16` (58); `1John.4.15` (49); `Isa.22.22` (44)

**2.** `John.1.42`
- Gospel pairs (votes): `Matt.16.17-Matt.16.18` (5); `Matt.10.2` (5); `Luke.5.8` (4); `Mark.3.16` (3); `Luke.6.14` (2)
- Other top pairs (votes): `1Cor.3.22` (8); `1Cor.15.5` (7); `1Cor.1.12` (6); `Gal.2.9` (5); `1Cor.9.5` (5)

**3.** `John.21.15-John.21.17`
- Gospel pairs (votes): `Luke.22.32` (10); `Mark.14.72` (10); `Matt.16.17` (5); `Matt.18.10` (4); `Luke.19.10` (3); `Mark.14.29` (2)
- Other top pairs (votes): `Isa.40.11` (20); `1John.4.19` (20); `Rom.15.1` (18); `Acts.20.28` (16); `2Cor.5.14-2Cor.5.15` (14)

**4.** `Luke.22.31-Luke.22.32`
- Gospel pairs (votes): `John.21.15-John.21.17` (25); `John.17.9-John.17.11` (23); `Matt.18.3` (5); `John.17.15-John.17.21` (5); `Mark.14.72` (3); `John.14.19` (3)
- Other top pairs (votes): `1Pet.5.8` (32); `Zech.3.1` (28); `1Pet.5.8-1Pet.5.10` (24); `Job.1.6-Job.1.12` (22); `Rom.8.34` (22)

**5.** `Matt.18.18, Matt.28.16-Matt.28.20`
- Gospel pairs (votes): `Mark.16.15-Mark.16.16` (186); `John.3.35` (98); `Luke.24.47-Luke.24.48` (74); `John.14.18-John.14.23` (41); `John.17.2` (35); `John.20.23` (30)
- Other top pairs (votes): `Acts.2.38-Acts.2.39` (109); `Acts.1.8` (90); `Isa.41.10` (84); `1Pet.3.22` (71); `Acts.19.3-Acts.19.5` (61)

**6.** `John.20.21`
- Gospel pairs (votes): `Matt.28.18-Matt.28.20` (17); `Mark.16.15-Mark.16.18` (14); `Luke.24.47-Luke.24.49` (11); `Matt.10.40` (9); `Matt.10.16` (9)
- Other top pairs (votes): `Acts.1.8` (13); `2Tim.2.2` (8); `Heb.3.1` (6); `Isa.63.1-Isa.63.3` (3)

**7.** `Matt.10.2, Mark.3.16, Luke.6.14, Acts.1.13`
- Gospel pairs (votes): `John.1.42` (5); `John.6.8` (4); `John.12.22` (4); `Luke.5.10` (4); `Matt.4.21` (4); `Luke.11.49` (3)
- Other top pairs (votes): `Luke.22.12` (6); `Acts.1.13` (5); `Mark.14.15` (5); `Matt.10.2-Matt.10.4` (4); `Mark.2.14` (4)

**8.** `Acts.2.14, Acts.2.37, Acts.5.29`
- Gospel pairs (votes): none
- Other top pairs (votes): `1Sam.15.24` (32); `Mark.7.7-Mark.7.9` (26); `Gen.3.17` (23); `Luke.3.10` (9); `Rev.14.8-Rev.14.12` (8)

**9.** `1Cor.15.5`
- Gospel pairs (votes): none
- Other top pairs (votes): `Mark.16.14` (9); `Acts.1.2-Acts.1.14` (4); `John.20.19-John.20.26` (4); `John.1.42` (3); `Luke.24.34-Luke.24.49` (3)

**10.** `Matt.16.23, John.13.38, Luke.5.8`
- Gospel pairs (votes): `Mark.8.33` (17); `Luke.22.34` (12); `Matt.26.34` (11); `Mark.14.30` (10); `John.6.70` (9); `Luke.4.8` (6)
- Other top pairs (votes): `Rom.8.5-Rom.8.8` (28); `Col.3.2` (25); `Phil.3.19` (22); `1Cor.2.14-1Cor.2.15` (15); `Isa.6.5` (13)

**11.** `Luke.22.26-Luke.22.27, Matt.20.25`
- Gospel pairs (votes): `Luke.22.25-Luke.22.27` (17); `Matt.20.28` (13); `John.13.12-John.13.17` (8); `Mark.10.42` (7); `John.13.5-John.13.16` (6); `Mark.9.35` (5)
- Other top pairs (votes): `1Pet.5.5` (7); `1Pet.5.3` (5); `2Cor.8.9` (5); `3John.1.9-3John.1.10` (4); `Phil.2.7-Phil.2.8` (4)

**12.** `Eph.2.20, Rev.21.14, 1Pet.2.4`
- Gospel pairs (votes): none
- Other top pairs (votes): `1Pet.2.4-1Pet.2.5` (25); `Ps.118.22-Ps.118.23` (23); `Isa.28.16` (22); `1Pet.2.7-1Pet.2.8` (18); `Acts.4.11-Acts.4.12` (18)

**13.** `John.17.21`
- Gospel pairs (votes): none
- Other top pairs (votes): `1Cor.12.12` (32); `Col.3.11-Col.3.14` (26); `1Cor.12.25-1Cor.12.27` (20); `Phil.1.27` (19); `Zech.14.9` (10)

**14.** `2Cor.11.28`
- Gospel pairs (votes): none
- Other top pairs (votes): `1Cor.7.17` (6); `Rom.15.16` (5); `Acts.20.18-Acts.20.35` (4); `Acts.15.40-Acts.15.41` (3); `Rom.16.4` (3)


## Sola Scriptura · Catholic page, 17 passages

**1.** `Matt.28.19-Matt.28.20, Mark.16.15`
- Gospel pairs (votes): `Mark.16.15-Mark.16.16` (186); `Matt.28.19` (83); `Luke.24.47-Luke.24.48` (74); `John.14.18-John.14.23` (41); `John.15.16` (33); `John.20.21` (32)
- Other top pairs (votes): `Acts.2.38-Acts.2.39` (109); `Acts.1.8` (90); `Isa.41.10` (84); `Acts.19.3-Acts.19.5` (61); `Isa.49.6` (57)

**2.** `2Thess.2.15`
- Gospel pairs (votes): none
- Other top pairs (votes): `1Cor.11.2` (19); `1Cor.16.13` (12); `Phil.4.1` (8); `Rom.16.17` (7); `1Cor.15.58` (6)

**3.** `Jude.1.3`
- Gospel pairs (votes): none
- Other top pairs (votes): `1Tim.6.12` (29); `Phil.1.27` (24); `2Tim.1.13` (13); `Titus.1.4` (13); `Rev.12.11` (12)

**4.** `1Tim.3.15`
- Gospel pairs (votes): none
- Other top pairs (votes): `1Pet.2.5` (16); `Eph.2.21-Eph.2.22` (14); `1Chr.22.13` (6); `1Thess.1.9` (6); `Matt.16.18-Matt.16.19` (6)

**5.** `1Tim.6.20, 2Tim.1.12-2Tim.1.14`
- Gospel pairs (votes): none
- Other top pairs (votes): `Jude.1.24` (27); `Titus.1.9` (26); `1Pet.4.19` (25); `Heb.7.25` (20); `Phil.4.9` (18)

**6.** `Luke.10.16`
- Gospel pairs (votes): `John.13.20` (18); `Matt.10.40` (13); `John.12.44` (8); `John.12.48` (7); `Mark.9.37` (7); `John.5.22-John.5.23` (7)
- Other top pairs (votes): `1Thess.4.8` (15); `Mal.1.6` (6); `Num.16.11` (4); `Acts.5.4` (4); `Num.14.11` (3)

**7.** `Acts.2.42`
- Gospel pairs (votes): none
- Other top pairs (votes): `Heb.10.25` (50); `1John.1.3` (36); `1John.1.7` (26); `Eph.6.18` (18); `Jude.1.20` (18)

**8.** `Luke.2.19, Luke.2.51`
- Gospel pairs (votes): `Mark.6.3` (3); `Matt.3.15` (2)
- Other top pairs (votes): `Prov.4.4` (6); `Gen.37.11` (5); `1Sam.21.12` (5); `Dan.7.28` (5); `Hos.14.9` (4)

**9.** `Col.3.16`
- Gospel pairs (votes): none
- Other top pairs (votes): `Ps.119.11` (106); `Eph.5.19` (88); `John.15.7` (84); `Rom.10.17` (70); `Jer.15.16` (62)

**10.** `John.20.31, 2Tim.3.16-2Tim.3.17, 2Pet.1.19-2Pet.1.21, 2Pet.3.15-2Pet.3.16`
- Gospel pairs (votes): `Luke.1.4` (8); `Luke.24.47` (7); `Matt.27.54` (7); `Mark.16.16` (7); `Matt.16.16` (7); `Matt.4.3` (3)
- Other top pairs (votes): `Rom.15.4` (270); `Heb.4.12` (225); `2Pet.1.19-2Pet.1.21` (160); `Mark.12.24` (120); `Ps.19.7-Ps.19.11` (117)

**11.** `1Thess.2.13, Heb.4.12, Acts.20.32`
- Gospel pairs (votes): none
- Other top pairs (votes): `Jer.23.29` (220); `Isa.55.11` (197); `Eph.6.17` (128); `Ps.119.130` (116); `1Pet.1.23` (95)

**12.** `Luke.24.45, Luke.24.25-Luke.24.27, Luke.24.44-Luke.24.46`
- Gospel pairs (votes): `John.1.45` (13); `John.5.39` (12); `John.5.46` (12); `John.5.45-John.5.47` (11); `John.3.14` (7); `Mark.9.19` (6)
- Other top pairs (votes): `Acts.16.14` (35); `1John.5.20` (33); `Zech.12.10` (32); `Ps.119.18` (31); `Isa.53.2-Isa.53.12` (30)

**13.** `Rom.12.6`
- Gospel pairs (votes): none
- Other top pairs (votes): `1Pet.4.10-1Pet.4.11` (23); `1Cor.7.7` (22); `1Cor.12.28-1Cor.12.31` (19); `1Cor.12.4-1Cor.12.11` (18); `1Cor.13.2` (12)

**14.** `1John.2.20-1John.2.27, John.16.13`
- Gospel pairs (votes): none
- Other top pairs (votes): `1Cor.2.10-1Cor.2.13` (98); `John.14.26` (52); `1John.2.27` (42); `1Cor.2.13` (40); `1John.2.20` (39)

**15.** `Heb.1.1-Heb.1.2`
- Gospel pairs (votes): none
- Other top pairs (votes): `2Pet.1.20-2Pet.1.21` (46); `John.1.3` (38); `1Cor.8.6` (35); `Col.1.16-Col.1.18` (35); `John.1.14` (28)

**16.** `Phil.3.8`
- Gospel pairs (votes): none
- Other top pairs (votes): `Jer.9.23-Jer.9.24` (52); `Rom.8.18` (34); `Acts.20.24` (29); `John.17.3` (24); `2Pet.1.3` (18)

**17.** `Matt.18.20`
- Gospel pairs (votes): `John.20.26` (29); `John.20.19` (19); `John.8.58` (6)
- Other top pairs (votes): `1Cor.5.4` (97); `Rev.21.3` (62); `Zech.2.5` (32); `Rev.2.1` (15); `Exod.20.24` (14)


## Counts
64 passages processed; 24 have at least one Gospel pair; the rest have only «ver también» pairs.


## Verification
Verifier pass 2026-11-01 (Sonnet, unattended). Legend: CONFIRMED / WRONG / UNCONFIRMABLE. Evidence: page fetched with curl, zip downloaded and unpacked, every preview row recomputed by script from `cross_references.txt` (the whole file, 64 rows, not 3 samples).

### Source and licence
- CONFIRMED: the page says «About 340,000 cross references identify commonalities between different parts of the Bible».
- CONFIRMED: «Unless otherwise indicated, all content is licensed under a Creative Commons Attribution License»; the link target is `https://creativecommons.org/licenses/by/4.0/`. The page also says «All Scripture quotations, unless otherwise indicated, are taken from The Holy Bible, English Standard Version. Copyright ©2001 by Crossway Bibles».
- WRONG (minor, quote not literal): the file puts «Most of the data comes from the public-domain Treasury of Scripture Knowledge» inside guillemets. The page reads: «This data draws primarily from public-domain sources, especially the Treasury of Scripture Knowledge, which provides most of the data. It also includes data (to seed the initial votes) from my Topical Bible and Twitter Bible Search.» Fix: quote that sentence, or remove the guillemets and paraphrase. Source: https://www.openbible.info/labs/cross-references/.
- CONFIRMED: seeded also from the author's Topical Bible and Twitter Bible Search.
- CONFIRMED: zip at https://a.openbible.info/data/cross-references.zip is 1,983,632 bytes (about 1.9 MB); it holds one file, `cross_references.txt` (8,303,003 bytes, dated 2026-10-26 inside the zip); tab-separated; header line exactly `From Verse<TAB>To Verse<TAB>Votes<TAB>#www.openbible.info CC-BY 2026-10-26`.
- CONFIRMED: 344,800 lines including the header = **344,799 pairs**.
- CONFIRMED: ranges in OSIS form (`Mark.1.9-Mark.1.11` occurs twice in the data).
- CONFIRMED: the data file holds only references and votes, no verse text.
- UNCONFIRMABLE: TSK first published about 1830 by Samuel Bagster, drawing on Thomas Scott; «public domain» beyond the site's own statement (the file already tags this `[snippet]` and says it is context, not the legal basis; that is the right reading). Not re-searched.
- Observation (not an error): the page prescribes no attribution wording; the file says the same.

### Preview rows (recomputed)
- CONFIRMED: 64 passages in the four sections (19 + 14 + 14 + 17); the Catholic pages `src/content/pages/{baptism,eucharist,papacy,sola-scriptura}/catholic.es.ts` hold 19, 14, 14 and 17 `refs` entries, so the counts match the pages.
- CONFIRMED: 24 passages have at least one Gospel pair (counted in the file's own blocks and reproduced by script).
- CONFIRMED: the three requested rows, vote by vote: Baptism 1 `John.3.5` (Gospel: Matt.3.11 28, Mark.16.16 20, Matt.18.3 11, Matt.28.19 10, Luke.13.3 9, Matt.5.20 7; other: Ezek.36.25-27 115, Eph.5.26 63, Acts.2.38 56, 1Cor.6.11 39, 1Pet.3.21 39); Baptism 3 `Acts.2.38` (none; Mark.16.16 76, Luke.24.47 61, 1Pet.3.21 53, Rom.6.3 41, Matt.3.2 34); Baptism 16 `Matt.3.13-Matt.3.17` (Luke.3.21-22 18, Mark.1.10 18, Luke.9.35 18, Mark.9.7 16, John.1.31-34 15, John.4.34 13; other: Isa.42.1 36, Ps.2.7 26, Isa.11.2 21, 2Pet.1.17 14, Isa.42.21 12).
- CONFIRMED: the other 60 rows (all except Eucharist 11) reproduce exactly (same targets, same votes), including the mixed-book rows Papacy 7 and Sola Scriptura 10. Rule that reproduces them: «Gospel pairs» = source verse in one Gospel, target in another Gospel; «Other» = all remaining pairs whose target is in a different book from its source verse (so Gospel-to-Gospel pairs never appear in «Other»; a Gospel target from a non-Gospel source, e.g. `2Tim.3.16` to `Mark.12.24` (120), does).
- WRONG (1 row differs from the data): Eucharist **11** `Exod.12, 1Cor.5.7`. The chapter-only ref `Exod.12` was skipped; only `1Cor.5.7` was used. Correct «Other top pairs» for the whole passage: `Heb.11.28` (37, from Exod.12.13); `1Pet.1.19-1Pet.1.20` (24); `Eph.4.22` (21); `1John.1.7` (18, from Exod.12.13); `Num.33.4` (15, from Exod.12.12). The file's `Col.3.5-Col.3.9` (15), `Exod.12.5-Exod.12.6` (9) and `Isa.53.7-Isa.53.10` (9) are real pairs of `1Cor.5.7` but fall outside the top five once the chapter counts. Effect: low (the only chapter-only reference among the 64).
- Imprecision: the sentence «five highest-voted pairs whose target is in a different book» omits that Gospel-to-Gospel pairs are excluded from the «Other» list.
- Observation, not an error: «Other» lists give only target and votes; nothing in the file is presented as a parallel without the «needs a human pass» warning. No tag claims more than the check supports.

### Wrong items
1. «Most of the data comes from the public-domain Treasury of Scripture Knowledge» in guillemets is not the page's wording: use «This data draws primarily from public-domain sources, especially the Treasury of Scripture Knowledge, which provides most of the data.» (https://www.openbible.info/labs/cross-references/).
2. Preview row Eucharist 11 (`Exod.12, 1Cor.5.7`): corrected «Other» list above, recomputed from the downloaded data file.
3. «How the preview was computed»: say that «Other» excludes Gospel-to-Gospel pairs, and that chapter-only refs (`Exod.12`) count the whole chapter.

### Unconfirmable
- TSK publication history (about 1830, Bagster, Scott) and its «public domain» status beyond the site's own claim.
- The «Alternatives considered» section is tagged `[not searched]` by its author; nothing to verify.
