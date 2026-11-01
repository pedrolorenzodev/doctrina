Status: draft, NOT verified by Pedro

# Second-pass verification of the A3 files (verifier A3b, 2026-11-01)

Files checked: `sources/london-1688-print.md`; the «La Escritura que usa» rows of `doctrines/baptism/baptist.apply.md` and `doctrines/sola-scriptura/baptist.apply.md`; `sources/fuentes-data-gaps.md`; `sources/holy-see-budget.md`; `sources/original-lang.md`. Legend: CONFIRMED / WRONG / UNCONFIRMABLE. Everything was re-read from the primary file or page image; the author's text was not trusted.

## Progress

- Page images read (all viewed in full, 2026-11-01): 1688 print n1–n6 (montage), n25, n27, n28, n120; McGlothlin 1911 n242, n243, n244, n282, n283, n189; 1719 n15, n16, n17, n102, n103, n104 (n16 and n103 also cropped at full resolution); Waterworth title page (n5–n9 montage); Spanish Westminster n2, n3, n4 and n5–n9 montage. OCR texts: 1688, McGlothlin, Waterworth, Spanish Westminster, Schaff vol. III.
- Scripts (Node 23 with type stripping, Python `-I`) in `/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/ec08130f-fe2b-4991-aaad-935caa477a2e/scratchpad/verify-A3b/` (`budget.mjs`, `budget4.mjs`, `rep.py`, `works.mjs`). Registry files were evaluated, not edited.
- Not done: the Latin/German/other-language readings in the registry, any chapter of the 2LCF beyond the loci listed, a check of the 1.1 notes against the 1719 and McGlothlin prints (the A3 file marks them «not collated»; I did not collate them either), the NPNF2 and Triglot statements in `original-lang.md`, Spanish chapter XXXI / 25.6 of the Monterrey 1880 volume.
- Tally: 46 CONFIRMED, 15 WRONG, 9 UNCONFIRMABLE (70 verdicts; by file: 1 = 10/3/2, 2 = 10/1/2, 3 = 16/5/3, 4 = 4/5/0, 5 = 6/1/2).

## 1. `sources/london-1688-print.md`

1.1 CONFIRMED. Item metadata (`https://archive.org/metadata/bim_early-english-books-1641-1700_a-confession-of-faith-p_1688`): title «A confession of faith, put forth by the elders ...  1688», date 1688, imagecount 169, source `["IA40310604-13","microfilm"]`, description «Digitized from … IA40310604-13». The images are black-and-white microfilm frames (UMI tags visible).

1.2 CONFIRMED. «Printed p. N = leaf n(N+23)»: running head «2» on n25, «4» on n27, «5» on n28, «97» on n120. Chapter XXIX «Of Baptism» begins on p. 97 (n120).

1.3 CONFIRMED. 1.1 notes on n25: (c) «Heb. 1. 1.»; (d) «Pro.22.19, 20, 21. Rom.15.4. 2 Pet.1.19, 20.». (Not collated against 1719/McGlothlin, by the file's own statement and by mine.)

1.4 CONFIRMED. n27 note (g) of 1.4: «2 Pet. 1. 19 20,21. 2 Tim.3.16. 2 Thess.2.13. 1 Joh. 5.9.» (no comma after «19» in the print). Reads «1 Joh. 5.9» as stated.

1.5 CONFIRMED. n28 note (b) of 1.5: «Joh.16.13, 14. 1 Cor.2.10, 11,12. 1 John 2. 2,20,27.» Reads «1 John 2.2,20,27» as stated.

1.6 CONFIRMED. n120: (c) «Rom.6.3,4,5. Col.2.12. Gal.3.27.»; (d) «Mark 1.4. Acts 26. 16.»; (e) «Rom.6.2.4.» (points between 2 and 4 at this resolution; the file's hedge «a point or comma; not 6.24» is right). The 1688 print reads «Acts 26. 16», not 22.16.

1.7 CONFIRMED. n120, note (f) of 29.2: «Mar.16.16. Acts 8.36,37.»

1.8 CONFIRMED. McGlothlin 1911 cells: n242 (printed p. 229) note 7 «2 Pet. 1. 19, 20, 21. 2 Tim. 3. 16. 2 Thes. 2. 13. 1 Joh. 5. 19.»; note 8 «1 Joh. 2. 2, 20, 27.»; n283 (p. 270) 29.1 notes 3–5 «Rom. 6. 3, 4, 5. Col. 2. 12. Gal. 3. 27.», «Mar. 1. 4. Act. 26. 16.», «Rom. 6. 2, 4.»; 29.2 note 6 «Mar. 16. 16. Act. 8. 36, 37.». McGlothlin's own words (OCR, p. 219): «[The following is a reproduction of the original edition of 1677.]», so «(the 1677 print)» is his claim, as the file says.

1.9 CONFIRMED. 1719 readings: n15 (p. 28) (g) «2 Pet. 1.19,20,21. 2 Tim. 3.16. 2 Thess. 2.13. 1 John 5.9.»; n16 (p. 29) (b) «John 16.13,14. 1 Cor. 2.10,11,12. 1 John 1. 2,20,27.»; n103 (p. 116) «Rom. 6.3,4,5. Col. 2.12. Gal. 3.27.», «Mark 1.4. Acts 26.16.», «Rom, 6. 24.», (d) «Mark 16.16. Acts 8.37,38.». Item metadata of the 1719 scan: «A Confession of faith … The fourth edition», 1719, 121 images (offset printed+13).

1.10 WRONG (minor). The 1719 cell of the 29.1 row labels the notes «(c) … (d) … (e)». Those are the 1688 letters. In the 1719 the three notes are (a) Rom 6.3,4,5 …, (b) Mark 1.4 …, (c) Rom, 6. 24. (n103 footer; (d) is the 29.2 note). Correction below.

1.11 WRONG (minor). Title-page quote: the print reads «… against the Church in the Poultrey. 1688» (n2 image), not «Poultry». The title block otherwise matches: «A CONFESSION OF FAITH, Put forth by the Elders and Brethren Of many CONGREGATIONS OF CHRISTIANS, (Baptized upon Profession of their Faith) IN London and the Country. With an APPENDIX concerning Baptism. … London: Printed for John Harris, at the Harrow against the Church in the Poultrey. 1688.» The title page image is now read (leaf n2); the licence «Aug. 15. 1688. Licensed, and Entered according to Order.» is on its own leaf (n1) before the title page, not after.

1.12 CONFIRMED. The OCR title block contains the quoted words (OCR of the title page is garbled: «Paulory», «Poulrgy», «Poultrey»; the quote is a clean-up, flagged as OCR-based by the file).

1.13 UNCONFIRMABLE. «The contents list «29. Of Baptism» on the OCR's printed page 96–97»: the OCR contents lines are garbled (l. 747 «2 8. Of Baptiſm and Y! rhe PECE s.», l. 751 «29. Of Baptiſm, © | f ,») and carry no legible page numbers for 28–29. What the page image does show is chapter XXIX starting on p. 97.

1.14 WRONG. «It shows that the 1719 and the 1688 first print differ at two of the five loci read (1.5 note b, 29.2 note f)». The file's own table has three differing loci: 1.5 (b), 29.1 note (e) (1688 «Rom.6.2.4.», 1677 «Rom. 6. 2, 4.», 1719 «Rom, 6. 24.») and 29.2 (f). The five rows are 1.4 (agree), 1.5 (differ), 29.1 c/d (agree) plus 29.1 e (differ), 29.2 (differ), and 1.1 (not collated). Correct statement: three of the four collated loci differ; 1.4 and 29.1 notes c/d agree; 1.1 was not collated. In all three differences the 1688 equals the 1677, the 1719 is the odd one out. The sentence «So «1719 reproduces 1688» is false as a general statement» stands.

1.15 UNCONFIRMABLE. The title and heading call the 1688 print the «first print». The scan is titled «1688» and says «With an Appendix concerning Baptism»; the text was already printed in 1677 (McGlothlin, p. 219–220: «Printed in the Year, 1677»). Whether 1688 is the first printing of the form adopted in 1689 is not shown by anything I read; say «the 1688 print» without «first» unless a source is found.

## 2. Baptist apply rows (Scripture used)

Editions in the rows: «1719» (n102–n104), «McGlothlin 1911 (the 1677 print)» (n242–n244, n282, n283) and «1688» (n27, n28, n120). Readings checked against my own page reads.

2.1 CONFIRMED. `baptism/baptist.apply.md` l. 197, row 2LCF 29.1: 1719 p. 116 «Rom. 6.3,4,5. Col. 2.12. Gal. 3.27.», «Mark 1.4. Acts 26.16.», «Rom, 6. 24.»; McGlothlin p. 270 «Rom. 6. 2, 4.»; 1688 p. 97 «Rom.6.2.4.»; «Acts 26.16» in all three; the old «Acts 22:16» is indeed absent from every print.

2.2 WRONG (mixing). Same row, column «References actually located»: «Romans 6:2,4» is the 1677/1688 reading and sits next to the 1719 header (1719 prints «Rom, 6. 24.»). The explanation is in the third column, but the references column itself mixes editions. Correction below.

2.3 CONFIRMED. Row 2LCF 29.2: 1719 p. 116 note (d) «Mark 16.16. Acts 8.37,38.»; McGlothlin p. 270 «Mar. 16. 16. Act. 8. 36, 37.»; 1688 p. 97 «Mar.16.16. Acts 8.36,37.». «The 1719 is the odd one out» is right. No mixing in the row.

2.4 CONFIRMED. Row 29.3, 1719 p. 117 (n104) note (e) «Matt. 28. 19, 20. with Acts 8. 38.»; McGlothlin p. 270 «Mat. 28. 19, 20, with Act. 8. 38.».

2.5 CONFIRMED. Row 29.4, 1719 p. 117 note (f) «Matt. 3. 16. John 3. 23.»; McGlothlin p. 270 «Mat. 3. 16. Joh. 3. 23.».

2.6 CONFIRMED. Row 28.1, 28.2: 1719 p. 115 (n102) (a) «Matth. 28. 19, 20. 1 Cor. 11. 26.»; p. 116 (b) «Matt. 28. 19. 1 Cor. 4. 1.»; McGlothlin p. 269 (n282) notes 1–2 identical in content.

2.7 CONFIRMED. `sola-scriptura/baptist.apply.md` row 2LCF 1.4: 1719 p. 28 (g) …«1 John 5.9»; McGlothlin p. 229 «1 Joh. 5. 19.»; 1688 p. 4 «1 Joh. 5.9.». Editions labelled, not mixed.

2.8 UNCONFIRMABLE. Row 2LCF 1.5 (l. 212): «**1 John 1:2,20,27** (as the 1719 prints it)». The 1719 footer reads «1 John 1. 2,20,27.» (full-resolution crop of n16): a point after the «1», comma after the «2». Reading it as «1:2,20,27» is an interpretation of printer's punctuation (the same kind of ambiguity the file flags for «6. 24»). Reproduce the print, e.g. «1 John 1. 2,20,27». The other readings in the row (McGlothlin «1 Joh. 2. 2, 20, 27.», 1688 «1 John 2. 2,20,27.»; «the 1719 is the odd one out») are CONFIRMED.

2.9 CONFIRMED. Row 2LCF 1.6: 1719 p. 29 (i) «2 Tim. 3.15,16,17. Gal. 1.8,9.»; p. 30 (k) «John 6.45. 1 Cor. 2.9,10,11,12.», (l) «1 Cor. 11.13,14. & Ch. 14. 26. & 40.»; McGlothlin pp. 229–230 notes 9, 11, 12 the same.

2.10 CONFIRMED. Row 2LCF 1.7: 1719 p. 30 (m) «2 Pet. 3.16.», (n) «Psalm 19.7. & 119, 130.»; McGlothlin p. 230 «2 Pet. 3. 16.», «Ps. 19. 7. and 119.».

2.11 CONFIRMED. Row 2LCF 1.8–10 (McGlothlin pp. 230–231): n243 notes 15–21 («Rom. 3. 2.», «Isa. 8. 20.», «Act. 15. 15.», «John 5. 39.», «1 Cor. 14. 6, 9, 11, 12, 24, 28.», «Col. 3. 16.», «2 Pet. 1. 20, 21. Act. 15. 15, 16.») and n244 note 21 «Mat. 22. 29, 31. Eph. 2. 20. Acts 28. 23.». Edition labelled (1677); «11–12» in the row is a harmless normalisation of «11, 12». The 1719 notes for 1.8–10 were not read (the row says so).

2.12 CONFIRMED. Row First London VII (p. 176): McGlothlin n189 (printed p. 176) VII «Joh. 5 . 39 / 2 Tim. 3 . 15, 16, 17. / Col. 21 . 18, 23. / Matth. 15 . 9.»; VIII «Acts 3 . 22, 23 / Heb. 1 . 1, 2 / 2 Tim. 3 , 15, 16, 17. / 2 Cor. 1 . 20.» The print-kept «21. 18, 23» is exact.

2.13 UNCONFIRMABLE. Rows for First London give no edition (1644, 1646, 1651/52): McGlothlin's volume has a «Second Edition, 1646» section and a text headed as the original; I did not establish which of his texts p. 176 reproduces. «No claim without an edition» applies. No mixing of editions inside any 2LCF row except 2.2.

## 3. `sources/fuentes-data-gaps.md`

3.1 CONFIRMED. `src/content/registry/editions.ts` l. 425–451: `cec.la/es/en/de` all read «Catecismo de la Iglesia Católica. © Libreria Editrice Vaticana: cita breve y enlace.», licence `short-quote`, no year or URL.

3.2 WRONG. «the English IntraText index … carries in its page metadata «copyright (c) Libreria Editrice Vaticana, Citta del Vaticano 1993»». The string is not in the `<meta>` tags (those give only `creator` «Copyright © Libreria Editrice Vaticana», `date.issued` 20031104). It is in the page's visible «Credits» block, row «Printed source»: «CATECHISM OF THE CATHOLIC CHURCH - Latin  text copyright (c) Libreria Editrice Vaticana, Citta del Vaticano 1993». So 1993 is the copyright year of the **Latin text**, printed on the English index page, and says nothing about an English edition. Footer: «[2003 11 04]» (IntraText stamp). Source: `https://www.vatican.va/archive/ENG0015/_INDEX.HTM`, read today (200, 38,941 B).

3.3 CONFIRMED. Spanish index (`…/catechism_sp/index_sp.html`, 200, 64,949 B): «CARTA APOSTÓLICA «LAETAMUR MAGNOPERE» POR LA QUE SE APRUEBA LA EDICIÓN TÍPICA LATINA DEL CATECISMO DE LA IGLESIA CATÓLICA» then «CONSTITUCIÓN APOSTÓLICA «FIDEI DEPOSITUM»». Latin index (`…/catechism_lt/index_lt.htm`, 200, 71,124 B): «LITTERAE APOSTOLICAE «LAETAMUR MAGNOPERE» QUIBUS APPROBATUR ATQUE PROMULGATUR LATINA … TYPICA EDITIO» then «CONSTITUTIO APOSTOLICA «FIDEI DEPOSITUM»».

3.4 CONFIRMED (with a note). «None of these pages names the printed edition (1992 or 1997) the online text reproduces»: true as stated (no page says «this is the edition of …»). But the Spanish and Latin index pages do carry the 1997 letter approving the typical edition, so they are not silent about 1997; the proposed edition line should not suggest otherwise.

3.5 CONFIRMED. *Fidei depositum*, «Given on 11 October 1992» (`…/apost_constitutions/documents/hf_jp-ii_apc_19921011_fidei-depositum.html`, 200).

3.6 CONFIRMED. *Laetamur magnopere*: «From Castel Gandolfo, August 15, 1997» (`…/apost_letters/1997/documents/hf_jp-ii_apl_15081997_laetamur.html`, 200, 41,124 B; the URL stored in `citation-excerpts.md` l. 914).

3.7 UNCONFIRMABLE. «the two URLs A3 tried returned a 1.8 kB page»: the URLs are not named. The repo's own URL above returns the full letter, so the letter can be re-read.

3.8 CONFIRMED. `editions.ts` l. 1106 (`trent.en`) has no year; l. 818 (`ayala.en`) says «Londres, Burns and Oates, 1848» and names `cu31924029369760`.

3.9 CONFIRMED. Waterworth, archive.org `cu31924029369760`: the title page IMAGE (leaf n7, w900) reads «THE CANONS AND DECREES OF THE SACRED AND OECUMENICAL COUNCIL OF TRENT … TRANSLATED BY THE REV. J. WATERWORTH … London: Burns and Oates, Ld. New York: Catholic Publication Society Company.» with no year; the next leaf adds «Burns and Oates, Ld., Printers, London, W.». The preface ends «Newark, May 22nd, 1848» (OCR l. 200; the preface leaf was not viewed as an image). Item metadata: date 1848, publisher «London : Burns and Oates, N.Y., Catholic Publication Society».

3.10 UNCONFIRMABLE. «the scan is a later printing of unknown year; «Burns and Oates, Ld.» and the New York co-publisher are not the 1848 imprint»: the inference rests on the «Ld.» and the New York co-publisher, which I could not date from a source in this pass (my own belief that both postdate 1848 is from memory). Keep «year not printed on the title page» and drop the dating claim until a source dates the imprint.

3.11 CONFIRMED. Spanish Westminster title page (archive.org `doctrinasyreglam00west`, leaf n2): «DOCTRINAS Y REGLAMENTOS de la Iglesia Presbiteriana, FORMULADOS POR LA ASAMBLEA DE WESTMINSTER; COTENIENDO La confesion de fé, Forma de Gobierno, Disciplina, Directorio de culto Y Reglas para los tribunales; TRADUCIDOS DEL INGLES POR H. C. THOMSON, Y el Catecismo menor. MONTEREY. Tipografía del Comercio. [A.] Lagrange y Hno. 1880.» The words «y el Catecismo menor» are on the title page.

3.12 WRONG. The file says the translator's and printer's names are «garbled/unreadable» and writes «Monterey [sic in OCR]». On the image the translator is **H. C. Thomson**, the printer line is **«Tipografía del Comercio. [A.] Lagrange y Hno.»** (first initial in an ornamental capital), and the place is printed **«MONTEREY»** (not an OCR error). The registry's «Monterrey» (`wcf.es` l. 135, `wcat.en` l. 1036) is therefore a modernised spelling of the printed «Monterey».

3.13 CONFIRMED. Leaf n4, first page of «LA CONFESION DE FE HECHA POR LA ASAMBLEA DE WESTMINSTER», prints «… la confesion de fé, los catecismos menor y mayor, el directorio de culto y la forma de gobierno, que ahora con algunas alteraciones pertenecientes al gobierno civil, forman la constitucion de la iglesia Presbiteriana en los Estados Unidos de América.»

3.14 WRONG (paraphrase). The file says «the Confession, «con algunas alteraciones pertenecientes al gobierno civil», forms the constitution…». The subject of the clause is the whole set (confession, both catechisms, directory, form of government), not the Confession alone. This note is therefore weaker evidence that the Confession text itself is the American revision.

3.15 CONFIRMED. The Shorter Catechism is in the volume: running head «Catecismo menor.» from OCR l. 7705, questions P. 1 … P. 107 (OCR l. 10040–10075, «P. 107. ¿Qué nos enseña la conclusion de la Oracion del Señor?»), index entry «Catecismo menor. 163». The Larger Catechism is not: no «Catecismo mayor» running heads or questions beyond P. 107; «mayor» appears only in running prose (OCR l. 64, 13976).

3.16 CONFIRMED. `editions.ts` l. 1036: «El volumen de Monterrey 1880 solo trae la Confesión» is wrong, as the file says. Additional finding: `wcf.es` (l. 131–135) lists `works: ["wcf","wlc","wsc"]` with the Monterey bibliography, but the volume holds no Larger Catechism (`wlc`).

3.17 UNCONFIRMABLE. «the Spanish is the American-revised text … chapter XXXI has no clause about magistrates calling synods … 25.6 still contains the Pope clause»: I did not read chapters XXXI or XXV of the Monterey volume. The preface sentence (3.13) is consistent with it but is not proof (see 3.14).

3.18 CONFIRMED. `wcf.es` bibliography (l. 135): «Español: Monterrey, Tipografía del Comercio, 1880. Dominio público.».

3.19 CONFIRMED. Schaff vol. III (archive.org `creedschristendo03scha`, item date 1877, publisher «New York : Harper»): OCR title page «THE CREEDS OF CHRISTENDOM … KOURTH [sic] EDITION— REVISED AND ENLARGED. Volume III. THE EVANGELICAL PROTESTANT CREEDS, WITH TRANSLATIONS. NEW YORK: HARPER & BROTHERS, FRANKLIN SQUARE», «Entered according to Act of Congress, in the year 1877, by Harper & Brothers.» Regex counts of the headings: «THE HEIDELBERG CATECHISM» 22, «THE BELGIC CONFESSION» 27 (whitespace-tolerant).

3.20 CONFIRMED (added). The 22 and 27 hits are running heads. Start pages from the volume's own contents list (OCR l. 17414–17424): Heidelberg Catechism «German and English … 307», Belgic Confession «French and English … 383». Cross-check: the first «THE HEIDELBERG CATECHISM. A.D. 1563.» heading precedes the p. 308 marker; the Belgic section follows the p. 382 marker and its running head sits on p. 385.

3.21 WRONG. «The Latin and Dutch/German originals are in the same volume». The contents list says Heidelberg is «German and English» and the Belgic Confession «French and English»; the editor's note says the Belgic was «composed in French» and collated with French, Dutch and Latin copies, but only French and English texts are printed. No Dutch text and no Latin Belgic text are listed. Correct: German (HC) and French (BC) originals.

3.22 CONFIRMED. «The McGlothlin 1911 text reproduces the 1677 printing (p. 219)» (see 1.8) and the 1688 item and publisher (see 1.1, 1.11). The 1688 «first print» wording carries the caveat of 1.15.

3.23 WRONG. Section 5 list, recomputed from `editions.ts` (254 rows) as «works with two or more edition rows in one language»: bfm-2000 (en, es), cdf-note-1998 (la, es, en, de), donum-veritatis (la, es, en, de), dositheus (en, es, la, de), enc-1895 (es: `site-translation.enc-1895.es`, `enc1895.es`), florence-exsultate (la, es, en, de), florence-laetentur (la, es, en, de), lateran-4 (la, en), lg (la, es, en, de), mogila (en: `overbeck.en`, `mogila.en`), sc (la, es, en, de), trent (la, es, en), wlc (en, es), wsc (en, es). The file wrongly lists `pf-1989` (one row per language: `cdf98.*`, shared with `cdf-note-1998`) and `wcf` (`wcf.en`, `wcf.es` only), and omits `enc-1895` and `mogila`.

3.24 CONFIRMED. The remaining entries of the section 5 list (cdf-note-1998, donum-veritatis, florence-laetentur, florence-exsultate, lg, sc, dositheus, trent, bfm-2000, lateran-4, wlc, wsc) and the row names given for them match the registry.

## 4. `sources/holy-see-budget.md`

4.1 CONFIRMED. Repo rules: `docs/research/sources.md` l. 80 («PERMISSION: CCC (EN: USCCB < 5,000 words with notice; beyond → licence + royalty; USCCB has refused small web projects; LEV holds worldwide rights) …»); `docs/research/glossary-terms.md` l. 18 («**Copyright.** CEC, CIC, Vatican II, CDF texts: © LEV, short quotes + link. …»; the quoted sentence is the second of the line).

4.2 CONFIRMED. Set of works (those with a `short-quote` edition row that have at least one citation id appearing as a quoted string in `src/content/pages/**/*.ts`): the same 29 works as the table; the «Pages» and «Which pages» columns match; ids per work match except `bfm-2000` (7, not 6).

4.3 WRONG (method). The table is reproduced exactly by a parser that reads only double-quoted `text: "…"` values and splits entries at unquoted keys (my emulation gave 3896/395 for CEC, 1398/41 DV, etc., identical to the table). The real file has 750 citation entries, not 738 (12 ids have quoted keys, e.g. `"STSA~el"`, `"BBFMpre_mbulo~pb"`), and 81 `text:` values are single-quoted (texts that contain `"`). Those texts were dropped. Evaluating the module (Node type stripping) gives the true counts below.

4.4 WRONG (numbers). Rows whose numbers change (es words / en words; ids), all other rows are unchanged:

| Work | Table (es / en) | Recount (es / en) | Over-40 fragments, recount |
|---|---|---|---|
| `cec` | 3896 / 395 | 5156 / 395 | es 47 (table lists 32); added CEC1128 62, CEC1213 101, CEC1216 60, CEC1252 68, CEC1267 60, CEC1306 51, CEC1336 41, CEC1360 66, CEC1373 51, CEC1378 61, CEC1400 48, CEC582 56, CEC85 48, CEC882 73, CEC889 63; en 4 (same) |
| `lg` | 1043 / 13 | 1103 / 13 | es 7 (adds LG12 60) |
| `cdf-primado` | 525 / 0 | 557 / 0 | same 3 |
| `uus` | 371 / 26 | 502 / 26 | es 1 (UUS94 92) |
| `ur` | 443 / 32 | 443 / 243 | en 1 (UR21 211) |
| `ede` | 224 / 74 | 271 / 74 | es EdE12 47 and 46 |
| `bfm-2000` (7 ids) | 207 / 190 | 213 / 202 | same two |
| `cdf-note-1998` | 110 / 0 | 149 / 0 | CDF98 45 |
| `jp-audience-1989` | 0 / 0 | 115 / 0 | JP89 88 |
| `gestis-verbisque` | 0 / 0 | 17 / 0 | none |

4.5 WRONG. «Holy See texts only … 10833 Spanish words and 837 English words». The table's own rows sum to those figures, but the recount is 12,534 Spanish and 1,048 English words (excluding `bfm-2000` and `oros-1755`).

4.6 WRONG. «(the longest: CEC 83 with 83 words, CEC 113 with 79, CEC 108 with 75, CEC 76 with 70)» contradicts the file's own table (CEC1261 116, CEC1256 92, CEC1257 81, CEC1353 81 are longer). Recount: CEC1261 116, CEC1213 101, CEC1256 92, CEC83 83, CEC1257 81. Also «32 of its fragments exceed 40» → 47; «Lumen gentium 6 of 12» → 7. «Dei Verbum 13» and «Unitatis redintegratio 4 of 4» are correct.

4.7 WRONG (minor). «all rows except the three marked»: two rows are marked (`bfm-2000`, `oros-1755`); `ag-sft` has no row (no used citation).

4.8 CONFIRMED. The other 19 rows (dei-verbum 1398/41, cic 1091/27, mysterium-fidei 347/93, mysterium-ecclesiae 190, sacramentum-caritatis 181, sc 179/42, oros-1755 145/148, sempiternus-rex 137, verbum-domini 134, florence-cantate 129, divino-afflante 112, gs 69, donum-veritatis 62, oe 48, pf-1989 43, ogmr 36, pcpcu-2001 26/94, dh 24, jp-audience-1991 15) and their over-40 lists are reproduced by the recount.

4.9 CONFIRMED. The Spanish CEC is the largest block and the English CEC is 395 words (< 5,000), both after the recount. Method limits stated by the file (de/la not counted, no per-page counts, shared ids counted once) are accurate; I did not recount per page.

## 5. `sources/original-lang.md`

5.1 CONFIRMED. `works.ts` has 76 works, 14 `status-*`, 62 others. `citation-excerpts.md` («Original-language records», l. 901 on) has 43 records, 3 of them `status-*` (stwcf, stsa, st1895), so 40 non-status records. Difference: exactly the 22 ids of the table (small-catechism, treatise, wsc, constantinople-1, trullo, chalcedon, new-hampshire, pastor-aeternus, dei-filius, dei-verbum, dh, gs, providentissimus, divino-afflante, sempiternus-rex, mysterium-ecclesiae, verbum-domini, uus, cdf-primado, pf-1989, pft, enc-1848).

5.2 CONFIRMED. No work has `originalLang` (0 of 76); the field is `originalLang?: DocLang` at `src/content/model/registry.ts` l. 38 with the TODO at l. 37.

5.3 CONFIRMED. `docLangs = ["la","es","en","de","el"]` (`ids.ts` l. 7). The earlier records use `fr` (cec), `it` (gestis-verbisque, jp-audience-1989, jp-audience-1991) and `ru` (philaret).

5.4 CONFIRMED. Re-requested (reconstructed from the table's abbreviated paths): dei-verbum `…/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_lt.html` 200, 46,303 B; dh `…vat-ii_decl_19651207_dignitatis-humanae_lt.html` 200, 44,177 B; gs `…vat-ii_const_19651207_gaudium-et-spes_lt.html` 200, 231,512 B; providentissimus `https://www.vatican.va/content/leo-xiii/la/encyclicals/documents/hf_l-xiii_enc_18111893_providentissimus-deus.html` 200, 89,940 B; mysterium-ecclesiae `…/cfaith/documents/rc_con_cfaith_doc_19730705_mysterium-ecclesiae_lt.html` 200, 30,259 B; verbum-domini `…/benedict-xvi/la/apost_exhortations/documents/hf_ben-xvi_exh_20100930_verbum-domini.html` 200, 34,526 B; uus `…/john-paul-ii/la/encyclicals/documents/hf_jp-ii_enc_25051995_ut-unum-sint.html` 200, 192,572 B. All match the kB in the table.

5.5 WRONG (overreach). Level B for `verbum-domini`: the Latin HTML page has no text, only the title, the language bar and a «[ pdf ]» link (about 1 kB of visible text in 35 kB of HTML). The Latin text is in the linked PDF `https://www.vatican.va/content/dam/benedict-xvi/pdf/apost_exhortations/documents/hf_ben-xvi_exh_20100930_verbum-domini_lt.pdf` (200, 684,554 B, 150 pages; body read, e.g. «3. Per XII Coetum Generalem Ordinarium Synodi Episcoporum de Dei Verbo …»). Level B stands only through the PDF. The other six B pages do carry Latin body text (first lines: dei-verbum «Sacrosancta Synodus verbis S. Ioannis …», dh «hac nostra aetate magis in dies conscii fiunt», gs «Gaudium et spes, luctus et angor …», providentissimus «LEONIS DIVINA PROVIDENTIA PAPAE XIII LITTERAE ENCYCLICAE», mysterium-ecclesiae «Mysterium Ecclesiae, a Concilio Vaticano II …», uus Latin body, 1,963 Latin function words).

5.6 UNCONFIRMABLE (404s), but the real pages exist. The guessed URLs are not named, so the 404s cannot be re-requested. Real Latin pages (all 200, Latin body checked):
- *Divino afflante Spiritu*: `https://www.vatican.va/content/pius-xii/la/encyclicals/documents/hf_p-xii_enc_19430930_divino-afflante-spiritu.html` (93,494 B; «PIUS PP. XII LITTERAE ENCYCLICAE DIVINO AFFLANTE SPIRITU»).
- *Sempiternus Rex Christus*: `…/pius-xii/la/encyclicals/documents/hf_p-xii_enc_19510908_sempiternus-rex-christus.html` (71,341 B).
- *Pastor aeternus*: `https://www.vatican.va/content/pius-ix/la/documents/constitutio-dogmatica-pastor-aeternus-18-iulii-1870.html` (48,365 B; «PIUS EPISCOPUS SERVUS SERVORUM DEI SACRO APPROBANTE CONCILIO»).
- *Dei Filius*: `https://www.vatican.va/content/pius-ix/la/documents/constitutio-dogmatica-dei-filius-24-aprilis-1870.html` (55,934 B; the URL already stored in `citations.ts` l. 12215).
Why the guesses failed: the Latin Pius XII pages use `yyyymmdd` in the file name (19430930), the English and Spanish ones use `ddmmyyyy` (30091943); the councils' Latin pages sit under `pius-ix/la/documents/`, not under `archive/hist_councils`. These four can move from level C to B.

5.7 CONFIRMED. «A 1, B 7, C 12, open 2 (22)» matches the table (A: new-hampshire; B: dei-verbum, dh, gs, providentissimus, mysterium-ecclesiae, verbum-domini, uus; open: cdf-primado, pf-1989). After 5.6: A 1, B 11, C 8, open 2.

5.8 CONFIRMED. Inherited basis statements: `wcf` and `wlc` records are `en` (so `wsc` inherits `en`); `lg`, `ur`, `oe`, `sc`, `sacramentum-caritatis`, `ede` are `la`; `cdf-note-1998` is `la`, `gestis-verbisque` is `it`; `editions.ts` has `enc1848.la/es/en/de` and no `.el` (l. 701–), has `pa.la` (l. 342), `df.la` (l. 853) and `pft.la`; «Site statements (14 works), earlier records give `es` for three, other eleven» is arithmetically right.

5.9 UNCONFIRMABLE. The basis sentences about the Triglot (`small-catechism`, `treatise`), NPNF2 vol. 14 (`constantinople-1`, `trullo`, `chalcedon`), McGlothlin's New Hampshire text, the Fordham translation of the 1848 encyclical and «AAS 35 (1943) not read» were not re-checked here (sources not opened). They are labelled C/A with no overclaim in the file.

## Corrections to apply

Format: file, line, old text → new text.

1. `docs/research/sources/london-1688-print.md` l. 14: «(the title page **image** was not read)» → «(title page image read by verifier A3b, leaf n2)»; «Poultry, 1688» → «Poultrey. 1688»; «and «Aug. 15. 1688, Licensed, and Entered according to Order»» → «and, on the leaf before the title page, «Aug. 15. 1688. Licensed, and Entered according to Order»»; «The contents list «29. Of Baptism» on the OCR's printed page 96–97.» → «Chapter XXIX «Of Baptism» begins on printed p. 97 (n120); the OCR contents lines are garbled and give no legible page numbers.»
2. `london-1688-print.md` l. 23, 1719 column: «(c) «Rom. 6.3,4,5. Col. 2.12. Gal. 3.27.»; (d) «Mark 1.4. Acts 26.16.»; (e) «Rom, 6. 24.»» → «(a) «Rom. 6.3,4,5. Col. 2.12. Gal. 3.27.»; (b) «Mark 1.4. Acts 26.16.»; (c) «Rom, 6. 24.» (the 1719 letters; the 1688 letters are c, d, e)».
3. `london-1688-print.md` l. 22, 1719 column: «1 John 1.2,20,27.» → «1 John 1. 2,20,27.».
4. `london-1688-print.md` l. 31: «differ at two of the five loci read (1.5 note b, 29.2 note f), where 1719 differs from both earlier prints, and agree at 1.4 where 1677 differs» → «differ at three of the four loci collated (1.5 note b, 29.1 note «Rom.6.2.4.» / 1719 «Rom, 6. 24.», 29.2 note f), where 1719 differs from the 1688 and the 1677 (which agree with each other), and agree at 1.4 (where 1677 differs) and at the other two 29.1 notes; 1.1 was not collated».
5. `london-1688-print.md` l. 1 and l. 5/13: «1688 first print» → «1688 print» (until a source shows it is the first printing of the 1689 form). Same wording in `fuentes-data-gaps.md` l. 33 («the 1688 first print») and in both baptist.apply files («1688 first print»).
6. `docs/research/doctrines/baptism/baptist.apply.md` l. 197, References column: «Romans 6:2,4» → «Romans 6:2,4 (1677 and 1688; the 1719 prints «6. 24»)».
7. `docs/research/doctrines/sola-scriptura/baptist.apply.md` l. 212: «**1 John 1:2,20,27** (as the 1719 prints it)» → «**1 John 1. 2,20,27** (as the 1719 prints it; the punctuation is the printer's)».
8. `docs/research/sources/fuentes-data-gaps.md` l. 14: «carries in its page metadata «copyright (c) Libreria Editrice Vaticana, Citta del Vaticano 1993»» → «carries in its «Credits» block, row «Printed source», «CATECHISM OF THE CATHOLIC CHURCH - Latin text copyright (c) Libreria Editrice Vaticana, Citta del Vaticano 1993» (the year belongs to the Latin text)». Also l. 16: «(1993 según el sitio)» → «(1993, año de copyright del texto latino según el sitio)» or drop the year.
9. `fuentes-data-gaps.md` l. 22 (end): «(«Burns and Oates, Ld.» and the New York co-publisher are not the 1848 imprint)» → delete, or mark `[memory, not verified]`.
10. `fuentes-data-gaps.md` l. 26: «traducidos del inglés por [name garbled] … Tipografía del Comercio, [printer's names garbled], 1880» and «Monterey [sic in OCR]» → «traducidos del inglés por H. C. Thomson, y el Catecismo menor. MONTEREY. Tipografía del Comercio. [A.] Lagrange y Hno. 1880» and «`[verified: OCR text and title page image (leaf n2)]`»; delete «the translator's and printer's names are unreadable in the OCR». Add: «The registry's «Monterrey» is a modernised spelling of the printed «Monterey».»
11. `fuentes-data-gaps.md` l. 28: «says the Confession, «con algunas alteraciones pertenecientes al gobierno civil», forms the constitution» → «says the documents of the Assembly (confession, catechisms, directory, form of government), «con algunas alteraciones pertenecientes al gobierno civil», form the constitution»; and mark the chapter XXXI / 25.6 findings as not re-checked by the verifier.
12. `fuentes-data-gaps.md` l. 27, add at the end: «`wcf.es` (l. 131–135) lists `wlc` among its works, but the 1880 volume has no Larger Catechism.»
13. `fuentes-data-gaps.md` l. 32: «The Latin and Dutch/German originals are in the same volume (not read).» → «The same volume prints the German original of the Heidelberg Catechism («German and English», p. 307) and the French original of the Belgic Confession («French and English», p. 383); the 22 and 27 heading hits are running heads.»
14. `fuentes-data-gaps.md` l. 38: delete «`pf-1989` and» and «`wcf`/» (leave «`wlc`/`wsc`»); add «`enc-1895` (`site-translation.enc-1895.es` and `enc1895.es`)» and «`mogila` (`overbeck.en` and `mogila.en`)».
15. `docs/research/sources/holy-see-budget.md` l. 13: «(738)» → «(750; 12 have quoted keys)» and add «single-quoted `text:` values (81) are read too»; replace the table with the recount of 4.4 (rows `cec`, `lg`, `cdf-primado`, `uus`, `ur`, `ede`, `bfm-2000`, `cdf-note-1998`, `jp-audience-1989`, `gestis-verbisque`). l. 59: «all rows except the three marked): 10833 Spanish words and 837 English words» → «all rows except the two marked): 12534 Spanish words and 1048 English words». l. 63: «32 of its fragments exceed 40 words (the longest: CEC 83 with 83 words, CEC 113 with 79, CEC 108 with 75, CEC 76 with 70)» → «47 of its fragments exceed 40 words (the longest: CEC 1261 with 116 words, CEC 1213 with 101, CEC 1256 with 92, CEC 83 with 83)». l. 64: «Lumen gentium 6 of 12» → «Lumen gentium 7 of 12».
16. `docs/research/sources/original-lang.md` l. 41 (`verbum-domini`): «Latin page on vatican.va, HTTP 200, 35 kB» → «Latin page on vatican.va is a title stub (HTTP 200, 35 kB, no body); the Latin text is the PDF `…/hf_ben-xvi_exh_20100930_verbum-domini_lt.pdf` (HTTP 200, 685 kB, 150 pp.)».
17. `original-lang.md` l. 32, 33, 38, 39 (pastor-aeternus, dei-filius, divino-afflante, sempiternus-rex): replace the 404 sentences with the real Latin pages of 5.6 and set Level C → B; l. 48: «A 1, B 7, C 12, open 2 (22)» → «A 1, B 11, C 8, open 2 (22)».
