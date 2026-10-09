_Report from the overnight source research of 2026-10-09 (agent-written; synthesis in `../sources.md`). Paths like `samples/…` refer to `~/Desktop/dev/doctrina-research-2026-10-09/samples/`, outside the repo._

# medieval-early-modern: mechanical verification (2026-10-09)
Samples in samples/medieval-early-modern/verify/. Page content treated as data.

## 1. BNE Spanish Summa (Abad de Aparicio / Mendía, Madrid: Moya y Plaza, 1880-1883) - CONFIRMED
- Record: https://bnedigital.bne.es/bd/es/card?id=9954aec7-6ca7-43df-af44-62eb323fe35d ("5 v. : 1 retr."; signaturas 4/68676-80; Fecha 1880-1883). Each volume = 3 PDFs (two text blocks + Indice): V1 q.I-XLIX / L-CXIX; V2 I-LX / LXI-CXIV; V3 I-LXXX / LXXXI-CLXX; V4 I-XXXIX / XL-XC; V5 I-LXXII / LXXIII-XCIX.
- Rights on record (verbatim): "Obra en dominio publico. CC BY 4.0 o equivalente. Atribucion a la Biblioteca Nacional de Espana." Conditions: "Licencia CC BY 4.0 o equivalente. El uso es gratuito y no requiere autorizacion previa." Contact info.repro@bne.es. (The page's own text; BNE may claim rights only over images, which the licence waives with attribution.)
- Text layer CONFIRMED: single-page PDFs from /bd/es/pdf?id=<page-uuid> fetched inside the real browser (HTTP 200, 160-240 KB each; pdftotext returns clean Spanish; Producer ABBYY FineReader 9.0). Sampled 9 pages (V5a p.21 = Q.II a.III-IV, p.415 = Q.LXXII a.III; V5b pp.6, 201, 216, 223, 231, 251, 261, 270, 300, 329). Two-column layout and some spaced letters ("A R T I C U L O") in OCR.
- Vol. 5 covers Supplement q.1-99: V5a has 415 pages (starts q.I, ends q.LXXII a.III at printed p.401); V5b has 329 pages (q.LXXIV at p.407 ... q.XCVIII a.VII-IX at p.602). V5b then has "APENDICE. - CUESTION I, art. II" (p.617) and "APENDICE. - CUESTION II, art. VI" on purgatory (p.624) = the purgatory appendices ARE present. After that: Leo XIII's encyclical Aeterni Patris in Latin (p.632-662+) and a "Diccionario de las voces y frases mas usadas por Santo Tomas" (pp.~611 and 701 in page header numbering of the dictionary). Not individually checked: exact start page of V5b q.LXXIII (page 0) and q.XCIX.
- Cloudflare: plain curl gets 403; works only through a real browser session. First request for V5a (before browser restart) returned 0 page ids once; worked after retry.
- Not verified: Mendia's death date.

## 2. HathiTrust uc1.32106005020059 (Hugh of St Victor, On the Sacraments, Deferrari 1951) - CONFIRMED pd, with a caveat
- API brief (catalog.hathitrust.org/api/volumes/brief/htid/uc1.32106005020059.json): rightsCode "pd", usRightsString "Full view", orig University of California, record 001416862, publishDates 1951, lastUpdate 20250304. Viewer page: "Rights: Public Domain, Google-digitized.", title tag "Full View", 520 page scans.
- Title-page verso (seq 8, p.iv) verbatim: "Copyright by THE MEDIAEVAL ACADEMY OF AMERICA 1951". Title page (seq 7): English version by Roy J. Deferrari, Catholic University of America. So the book carries a 1951 copyright notice but HathiTrust classifies it as pd (consistent with a non-renewal finding, which HT does via its copyright review; I did not see the review record, memory/unverified). Risk: HT's determination is a US judgement; it is not a licence. Use only after independently checking the CCE renewal (1978-79 for 1951 works) before relying on it. Screens: ht-seq7.png, ht-seq8.png.

## 3. archive.org summatheologicao36thom / 37thom - PARTIAL (dates in metadata wrong; coverage confirmed)
- Metadata (archive.org/metadata): both title 'The "Summa theologica" of St. Thomas Aquinas', creator Aquinas, date "1912" (v.3:6 / v.3:7), publisher "London : R. & T. Washbourne, ltd.; New York : Benziger", Wellesley College Library, Boston Library Consortium, digitized 2010; no licenseurl / rights field. The metadata date 1912 and publisher are inaccurate for these two: the scanned title pages say "THIRD PART (SUPPLEMENT) QQ. LXIX-LXXXVI ... LONDON BURNS OATES & WASHBOURNE LTD ... BENZIGER BROTHERS" with imprimatur "Aug. 4, 1921" (36) and "QQ. LXXXVII-XCIX AND APPENDICES ... 1922 All rights reserved", imprimatur "Die 22 Julii, 1922" (37). Both pre-1931 = US PD either way. Translation credited "Literally translated by Fathers of the English Dominican Province".
- _djvu.txt present (36: 640 KB; 37: 567 KB). Grep: 36 has QUESTION LXIX-LXXXVI (all 18; LXXVI and LXXXI appear in the contents list but OCR garbled in headings); 37 has QUESTION LXXXVII-XCIX (all 13) plus APPENDIX I (two questions "compiled by Nicolai" from the Commentary on the Sentences: souls with original sin only; souls expiating sin in Purgatory; pp. 215-235) and APPENDIX II ("Two articles on Purgatory", p. 236).
- So 36+37 = Supplement qq.69-99 + both appendices. Supplement qq.1-68 are in the preceding volumes: summatheologicao34thom (OCR heading reads "THIRD PART (QQ. LXXXIV - SUPPL. XXXIII)", imprimatur 7 Mar 1916) and summatheologicao35thom (djvu.txt downloaded; exact q. range not checked). Both have metadata date 1912, volume v.3:4 / v.3:5.

## 4. Project Gutenberg #17611, #17897, #18755, #19950 - CONFIRMED
- 17611 "Summa Theologica, Part I (Prima Pars)" (released 26 Jan 2006, updated 3 Jan 2021); 17897 "Part I-II (Pars Prima Secundae)" (1 Mar 2006); 18755 "Part II-II (Secunda Secundae)" (4 Jul 2006); 19950 "Part III (Tertia Pars)" (28 Nov 2006). Language English. Each text title page: "Translated by Fathers of the English Dominican Province, BENZIGER BROTHERS, NEW YORK". Credits: Sandra K. Perry, "with corrections and supplementation by David McClamrock". Header: "almost no restrictions"; PG licence applies outside US checks. (Which edition: the text carries no year; 1911-25 / 2nd ed. 1920-25 attribution is from the earlier report, not re-checked here.)

## 5. EEBO-TCP TEI headers - CONFIRMED (all 8 CC0)
Fetched raw.githubusercontent.com/textcreationpartnership/<ID>/master/<ID>.xml.
- A28850: Bossuet, "A treatise of Communion under both species" (1685). Availability: TCP "has waived all copyright and related or neighboring rights ... CC0 1.0 ... This waiver does not extend to any page images or other supplementary files".
- A28837: Bossuet, "A conference with Mr. Claude, minister of Charenton, concerning the authority of the church" (1687). "Phase I text is available for reuse ... Creative Commons 0 1.0 Universal ... even for commercial purposes, all without asking permission."
- A07972: Bellarmine, "An ample declaration of the Christian doctrine ... translated by Richard Hadock" (1604). Phase I CC0 wording as A28837.
- A27362: Bellarmine, "Christian doctrine ... translated into better English than formerly" (1676). CC0 waiver wording as A28850.
- A01202: Francis de Sales, "An introduction to a deuoute life ... translated by I.Y." (1613). CC0 waiver wording.
- A11516: Sarpi, "The historie of the Councel of Trent" (1629; Phase I). CC0 Phase I wording.
- A69066: Canisius, "A summe of Christian doctrine" (1592). CC0 waiver wording.
- A01008: Floyd (I.O.), "A plea for the reall-presence" (1624). CC0 waiver wording.
- Caveat to keep: CC0 covers the keyboarded/encoded text, not the page images (EEBO/ProQuest images are separate). The underlying texts are early-modern PD anyway.

## 6. Stanford Copyright Renewals - CONFIRMED
Search "summa theologica" at exhibits.stanford.edu/copyrightrenewals (5 hits, 3 relevant):
- R612635: "Summa theologica. Vol. 1 NM: synoptical charts", orig. reg. A14975, pub. 25Jun47, renewed 16Jun75, claimant Benziger (division of Benziger Bruce & Glencoe), class PWH.
- R612636: "Vol. 2 NM: synoptical charts", orig. A18475, pub. 1Oct47, renewed 22Aug75.
- R624562: "Vol.3. Translated NM: appendices, indices & synoptical charts" (author field: Fathers of the English Dominican Province), orig. A28574, pub. 8Dec48, renewed 26Jan76.
- The new-matter claims are limited to charts / appendices / indices, not the translation text. Other hits: Morgan/Strothmann Middle High German translation (RE003274) and Farrell "Companion to the Summa" vol. IV (R495025), not relevant to the English Summa text. Caveat: the DB lists renewals; absence of a renewal for the 1920s-1925 translation volumes is not shown by this search but is irrelevant (pre-1931).
- Note the Vol. 3 1948 "appendices" are 1948 new matter; the 1922 Supplement appendices (purgatory) in archive.org vol. 37 are 1922 text, so unaffected.

## 7. Corpus Thomisticum terms - CONFIRMED (no terms page exists)
- No dedicated terms/licence page found: menu has no such entry (index, opera, android, chartae, bibliography, links, etc.); guessed paths /wcopy.html, /wterms.html, /wcondiciones.html return 404; /robots.txt 404.
- Exact wording found: home "(c) 2000-2019 Fundacion Tomas de Aquino Iura omnia asservantur"; text pages "(c) 2019 Fundacion Tomas de Aquino quoad hanc editionem Iura omnia asservantur"; English intro "(c) 2013 Fundacion Tomas de Aquino All rights reserved"; Spanish intro "Reservados todos los derechos"; Android app page "Copyright of the Latin text, Fundacion Tomas de Aquino (2015)/(2016)".
- Intro (Latin/English) invites collaboration and citation: "Si habes textum praestantiorem ... allega eum: bonum enim est diffusivum sui" and "freely available via Internet" (free access, not a reuse licence). Author page (ealarcon.html) lists third-party books marked "[Texto latino reproducido de la edicion de Alarcon]" (e.g. Sétimo Selo 2006; Concreta 2015), so reuse by others occurs by arrangement (unknown terms; not verified).
