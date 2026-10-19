# Verification: Catholic papacy dossier

**Progress:** DONE 2026-10-17 (unattended run), checkpoint requested by the coordinator and honoured: nothing is pending, Parts A-G are all written and saved. Next (only if resumed): nothing required; optional extras are a scan read of Schaff pp. 262-266 and 268-271 for letter-level Latin, and a Mansi scan read of cols. 1031-1033. Totals (one verdict per numbered item, 73 items): 55 CONFIRMED, 12 WRONG (11 distinct findings, B2 and C2 are the same), 6 UNCONFIRMABLE. Priority 1 (claims tagged `[verified]` that carry a quote, number, date or locator) all have a verdict. Scans read by eye: Schaff vol. II pp. 260 and 261 (archive.org leaves n273, n274); Monterey 1880 pp. 12, 133, 155. WebSearch not used; direct fetches only. Only this file was written in the repo; scratch in `pap-ver/`.

Legend: CONFIRMED / WRONG (with the correct reading and the tag it should get) / UNCONFIRMABLE (with why). References are to `catholic.md` (D) by its own labels (QE-n, PQ-n, OB-n, CV-n) and line numbers.

Method: every quote in D (about 500 segments, split at `[…]`) was normalised (case, accents, i/j, u/v, ae/e, punctuation, hyphenation) and matched by exact string against the texts in `../pap-cat/dl/`, `../ap/`, `../v/`, `../o/`, `../dl/`; the Holy See Spanish and the English/Latin objecting texts were then re-matched in a stricter pass (case-folded, punctuation and spaces kept). Where the OCR breaks words (Schaff, Mansi, WCF 1880) a word-level alignment listed every differing word. Paragraph, canon, chapter and note numbers were located by scanning back in each source for the nearest numbered paragraph. Printed pages come from running heads of the OCR leaves (Schaff leaf marker = page number at the top of each page; Robertson, WCF 1894 likewise), re-checked on scans where marked. The Latin of Pastor aeternus was cross-checked against the vatican.va Latin (fresh fetch), which is clean at every quoted passage. The AI Spanish was read against the Latin/English for fidelity: no mistranslation found. No unlicensed copy was used.

Doubts recorded for the apply step (nobody to ask in an unattended run):
- A4: the dossier's "defect" of vatican.va is overstated; see A4 for the exact splice. The apply step may want to re-word the Conventions row and map correction 2.
- A14, A23: licence lines for the NPH e-text of the Triglot Latin and the Fordham copy of the 1848 Encyclical are not supported by the pages themselves; a licensing call (Opus) is needed before either text enters `data/`.
- Letter-level Latin of Schaff was checked on the scan only for pp. 260-261; everywhere else OCR alignment + vatican.va Latin (every difference was an OCR confusion, apart from W2).
- Mansi cols. 1031-1033 were checked on the OCR only (long-s). Wording matches the dossier; Mansi prints «ceterorum», the dossier «caeterorum» (spelling only).
- LCMS constitution text and the BF&M 2000 / AG silence could not be re-fetched (lcms.org 404, sbc.net blocks curl).

---

## Part A. Conventions, editions, locators

### A1 (Conventions L18, grading method)
CONFIRMED. CDF 1998 §5: «definidas como verdades divinamente reveladas por medio de un juicio solemne del Romano Pontífice cuando habla "ex cathedra", o por el Colegio de los Obispos reunido en concilio, o bien son propuestas infaliblemente por el Magisterio ordinario y universal» (cdf98_es, §5). CIC 749 §3 verbatim. List of first-paragraph truths names «la doctrina sobre el primado y la infalibilidad del Romano Pontífice» with note [27] «Cf. DS 3059-3075» (it sits in §11, the list; the dossier cites n. 27 correctly). CDF-Primado §4: «la Iglesia católica enseña, como doctrina de fe, que el Obispo de Roma es Sucesor de Pedro en su servicio primacial en la Iglesia universal [13]»; note 13 prints «Concilio Vaticano I, Constitución dogmática Pastor aeternus, cap. 2: Denz-Hün, nn. 3056-3058» (the dossier says "§4, citing", correct as to note 13). The proem phrase «cunctis fidelibus credendam et tenendam» is in the proem of PA (vatican.va Latin, before CAPUT I).

### A2 (Conventions L19)
CONFIRMED. CDF 1998 §11 (the paragraph numbered 11, «11. Ejemplificaciones»): both quoted sentences verbatim, including «si bien sólo en el paso final de la definición del Vaticano I fuera recibida como verdad divinamente revelada».

### A3 (Editions table, PA-Schaff)
CONFIRMED. Title page OCR: «HARPER & BROTHERS, FRANKLIN SQUARE 1896», «Entered according to Act of Congress, in the year 1877». Page map checked on the running heads: proem pp. 256-258 (begins on p. 256 after the end of Dei Filius; ch. I heading on p. 258), ch. 1 pp. 258-260, ch. 2 pp. 260-262 (Caput II heading p. 260; the ch. 2 canon runs from the foot of p. 261 to the top of p. 262, scan read), ch. 3 pp. 262-266, ch. 4 (Caput IV heading p. 266) to p. 271; «die decima octava Julii» is on p. 271 (18 Jul 1870). The ch. 1 canon begins at the foot of p. 259 (scan of p. 260 shows «Petrum Apostolum non esse a …» as the first line) and ends p. 260, so «pp. 259–260» is right.

### A4 (Editions table, PA-va "Defect"; map correction 2)
WRONG (overstated). Fresh fetch of vatican.va (la) and the scratch copy agree: the ch. 2 canon is complete («Si quis ergo dixerit … aut Romanum Pontificem non esse beati Petri in eodem primatu successorem; anathema sit.») and so is the end of ch. 2 (the Irenaeus sentence and «ad finem saeculorum usque firma stabit» are present). The only defect is a stray duplicate of the canon's last words («num Pontificem non esse beati Petri in eodem primatu successorem; anathema sit») spliced into ch. 3's paragraph «Tantum autem abest…» between «assignatos sibi greges,» and «singuli singulos». Correct reading: "the page repeats a fragment of the ch. 2 canon inside ch. 3's «Tantum autem abest» paragraph; nothing is missing". Tag: `[verified]`. Same fix in Coverage / map correction 2 («garbled in ch. 2–3»).

### A5 (Editions table, Florencia-Mansi)
CONFIRMED. Mansi vol. 31, title leaf «TOMUS TRIGESIMUS PRIMUS … VENETIIS MDCCXCVIII». The decree «DEFINITIO … FLORENT.» runs col. 1031 (azymes, purgatory, primacy clause «Item, diffinimus sanctam apostolicam sedem …» ending «… in sacris canonibus continetur. Renovantes insuper ordinem traditum in canonibus ceterorum») into col. 1033 («venerabilium patriarcharum; ut patriarca Constantinopolitanus secundus sit post sanctissimum Romanum pontificem … salvis videlicet privilegiis omnibus, & juribus eorum»), with «Datum Florentiae … pridie» after. Cols. 1031-1033 correct. Date 6 Jul 1439 confirmed by CDF-Primado note 13 («Concilio de Florencia, Bula Laetentur caeli, 6 de julio de 1439: Denz-Hün, n. 1307»). OCR only (long-s read as f, wording unchanged).

### A6 (Editions table, Holy See URLs and dates)
CONFIRMED. Every vatican.va URL in D returns 200 (LG, CEC 551-553 / 85-100 / 880-896 / 1369 / 2244-2246, UUS es, CDF-Primado es, CDF 1998 es, Donum veritatis es, PA la). CEC 834 and 862/869 are in `p123a9p3_sp.html` (the dossier's abbreviation "…/p123a9p3_sp.html (815-870)" is right). The CIC pages listed (204-207, 208-223, 330, 331-335, 336-341, 349-359, 375-380, 747-755, 833, 1404-1416) all return 200; the bare directory URL given first returns 403 (not a page; cite the file URLs only). Dates: LG «21 de noviembre de 1964» in the text; UUS «25 de mayo de 1995»; CDF 1998 note «Dado en Roma … el 29 de junio de 1998»; CDF-Primado page title «31 octubre 1998».

### A7 (Editions table, CDF-Primado)
CONFIRMED. Note [4]: «Il Primato del Successore di Pietro nel mistero della Chiesa. Considerazioni … en Il Primato… , Appendice, pp. 493-503»; note [2]: «Il Primato del Successore di Pietro. Atti del Simposio teologico, Roma dicembre 1996, Libreria Editrice Vaticano, Ciudad del Vaticano 1998». Signed «JOSEPH Card. RATZINGER» / «+ TARCISIO BERTONE» (en: «Tarcisio Bertone, S.D.B.»; Prefect/Secretary titles in the page). Symposium «2 al 4 de diciembre de 1996» (not cited in D). Note that the dossier's "(its own n. 4)" means note [4], attached to §2, not §4.

### A8 (Conventions L23, DH numbers printed by CDF-Primado)
WRONG (minor). Printed in CDF-Primado: 181, 861, 1053, 1307, 2781, 2888, 3051, 3056-3058, 3059, 3061, 3063, 3065-3068, 3073-3074, 3112-3113 and 3114, 3305-3310, 3310 and, in note 26, «cap. 3: Denz-Hün, nn. 3060.3064» (a full stop between the numbers, probably 3060-3064, not two separate numbers «3060, 3064» as listed in D). The same list in D also puts 3060 and 3064 as separate entries in map correction 1. Correct: «3060.3064 (as printed)». Tag: `[verified]` for the string, `[inference]` for "range 3060-3064". Other numbers in the list are all present.

### A9 (Conventions L23, DS in CCC and UUS)
CONFIRMED. CEC 834 «citado por Concilio Vaticano I: DS 3057»; CEC 891 «cf. Vaticano I: DS 3074»; UUS note 152 «Cf. Conc. Ecum. Vat. I, Const. dogm. Pastor aeternus, sobre la Iglesia de Cristo: DS 3074»; UUS note 154 «Cf. … Unitatis redintegratio … 14» (the dossier's «UR 14 per UUS n. 154» is right).

### A10 (Editions, Zeferino González, 1870)
CONFIRMED. Title page: «LA DEFINICION DE LA INFALIBILIDAD PONTIFICIA, POR EL P. Fr. ZEFERINO GONZALEZ, DOMINICO … MADRID. IMPRENTA DE LOPEZ, CAVA-BAJA, 19. 1870». The Latin of the definition («Romanum Pontificem, cum ex cathedra loquitur …») is between the page-48 head and the page-49 head; no Spanish rendering of the definition follows in the text (searched «divinamente revelado», «irreformables»). The archive.org title search for «pastor aeternus» + Spanish returned zero hits. The "El Pastor Eterno" upload could not be re-checked (not needed).

### A11 (Conventions L20, Spanish levels)
CONFIRMED. Holy See Spanish is labelled «texto oficial en español» wherever quoted; Westminster 1880 «as printed» (level 1); every AI line carries «IA … sin revisar por Pedro» (QE-1 to QE-9 source blocks, OB-1 to OB-8 objecting-text blocks; Smalcald ones add «rehacer desde el alemán», Orthodox ones «rehacer desde el griego»). The AI Spanish of PA, Florence, the Treatise, Smalcald and the encyclicals was read against the Latin/English: faithful.

### A12 (Conventions L20-21, labelling of AI fragments inside site drafts)
WRONG (labelling). Three Spanish fragments of AI translation appear in quotation marks with no AI label or source line: (1) L184, intro of Por qué: «tal como siempre las entendió la Iglesia» (Vaticano I, Pastor aeternus, cap. 1): D gives only the Latin/English of that phrase (PQ-1) and the «Rests on» line does not say «traducción asistida por IA»; (2) L241, §3 table: «verdad y de fe que nunca falla» (PA ch. 4, Latin «veritatis et fidei numquam deficientis charisma»), no Latin and no AI label in the row; (3) L124, QE-5 grade line: «afirma, robustece y defiende» (see B7). Correct: add the AI label (or the Latin) to each, as every other PA Spanish in D has.

### A13 (Editions table, Triglot, English)
CONFIRMED. bookofconcord.org «About the Translation»: «The texts used here are from Triglot Concordia … (St. Louis: Concordia Publishing House, 1921). These texts are in the public domain and may be freely copied.» SA II.4 and the Treatise numbering used in D (¶ numbers) match the site's (¶1 … ¶57 checked paragraph by paragraph, see Part E).

### A14 (Editions table, Triglot Latin e-text, licence)
UNCONFIRMABLE (licence). Header of `v/tl.txt`: «Electronic Edition, Copyright 1996 by Northwestern Publishing House» (Logos citation «(1997)»). D says «NPH 1996 e-text» (right) and lists the licence as «PD text»; the underlying 1921 Triglot is public domain, but the e-text itself carries a copyright notice, and nothing in the file grants reuse. Not a quote problem; needs a licensing call before the Latin is published (short quotes in D are within the usual line).

### A15 (Editions table, Triglot origin and numbering)
UNCONFIRMABLE. «Kolb–Wengert uses the same 1–82 for the Treatise» (map `[memory in map]`), «the Smalcald Articles were written in German (Luther, 1537) and the Latin is the 1580 translation; the Treatise was written in Latin (Melanchthon, 1537)», and «Schaff's Latin follows the Acta et Decreta»: carried claims, none readable in the sources used here. Tag stays `[verified in map]` / `[memory]`.

### A16 (Editions table, WCF-1647)
CONFIRMED. Edinburgh: Johnstone, Hunter & Co., 1894 (OCR running head «THE CONFESSION OF FAITH»). XXV.6 on p. 87 (marker 87 immediately before, proof texts n and o printed in full); XXXI.4 on p. 97 (the next marker, 98, comes after it); I.10 on p. 21 (marker 21 before it). D's «p. 21–22» for I.10 is imprecise: the article is on p. 21, the ch. II heading follows on the same page; proof texts (letter z) are in the notes of p. 22 if the footnote block spills (not checked). Tag stays `[verified: OCR]`.

### A17 (Editions table, WCF-1880 pages)
CONFIRMED on scans. Doctrinas y reglamentos … Monterey 1880: I.X on p. 12 (scan: «X. El Espíritu Santo, que habla en las Escrituras, el Juez Supremo, por quien toda controversia religiosa tiene que decidirse y por quien tambien todos los decretos de los concilios …»), notes continue to p. 13; XXV.VI on p. 133 (scan); XXXI.III on p. 155 (scan, running head «Los Sínodos y Concilios»). The print has no verb before «el Juez Supremo»: D's «[es]» in brackets is a correct editorial insertion, and the OCR gap is real, not an OCR loss.

### A18 (WCF-1880 I.X quote, OB-6 L423)
WRONG (spelling). D: «podemos descansar confiadamente». The scan prints «descanzar» («podemos descanzar confiadamente», with z). Correct: quote as printed («descanzar») with `[sic]` or leave the verb out; other differences are accent/typography only («ó», «fé»).

### A19 (WCF proof texts, OB-1 L284)
WRONG (conflated). D: «Proof texts printed (1647 print, letters n and o; 1880 notes 1–2): Col 1:18; Eph 1:22 (n); Mt 23:8-10; 2 Thess 2:3-4, 8-9; Rev 13:6 (o)». The 1894 print of the 1647 text has exactly that (n: Col 1:18, Eph 1:22; o: Mt 23:8-10, 2 Thess 2:3, 4, 8, 9, Rev 13:6 on p. 88, spill-over). The 1880 Spanish notes 1-2 (scan p. 133) give Col 1:18; Ef 1:22; Mt 23:8-10; 2 Tes 2:3-5 only: no vv. 8-9, no Rev 13:6. Correct: split the two lists. XXXI.4 proof texts (letter e: Eph 2:20; Acts 17:11; 1 Cor 2:5; 2 Cor 1:24) and I.10 (Mt 22:29, 31; Eph 2:20; Acts 28:25) are right in both prints.

### A20 (WCF-OPC, current text; 1903)
CONFIRMED. `v/opcwcf.txt`: «There is no other head of the church but the Lord Jesus Christ. Nor can the pope of Rome, in any sense, be head thereof.» The OPC preface (pcaac.org WCFPreface.pdf, p. viii): in 1903 the PCUSA rewrote 25.6 and «the identification of the Roman Catholic pope as the Antichrist was removed». The PDF is the OPC preface republished by the PCA's Stated Clerk (header «as approved by the PCA Stated Clerk's office»), which supports «the PCA uses the OPC-published text».

### A21 (OPC 1936, OB-1 L285)
WRONG (quotation marks around a paraphrase). D: «except retaining … the removal of "pope as the Antichrist" in 25.6». Preface, p. ix: the Committee recommended that the Confession be adopted «in the form which they possessed» before the 1903 revisions «with two exceptions … that the change in chapter 22.3 and the removal of the reference to the pope as the Antichrist (but not the other changes) in chapter 25.6 be retained. The Assembly adopted these recommendations» (Second General Assembly, November 1936). Correct: quote that sentence, or drop the marks. Fact unchanged.

### A22 (Dositheus, Robertson 1899)
CONFIRMED. Title page: «London: Thomas Baker … 1899». Decree X heading on p. 122 (running head «THE SYNOD OF JERUSALEM» before it); «Of which Catholic Church, since a mortal man cannot universally and perpetually be head …» on p. 123; «as necessary to the Church as breath is to man» on p. 124. The decrees as a set answer the Confession of Cyril Lucar (Robertson's text speaks of the «Confession in eighteen» chapters and refers to it); I did not check that Decree X in particular answers a chapter of that Confession, but D's use («written against the Lucaris confession») is the usual reading.

### A23 (Editions table, Enc-1848, licence and edition)
WRONG (licence line). D: «PD (per the map)». The Fordham page ends: «Source: http://www.orthodoxinfo.com/ecumenism/encyc_1848.htm … a collection of public domain and copy-permitted texts … Unless otherwise indicated the specific electronic form of the document is copyright … No permission is granted for commercial use … © Paul Halsall, November 1998». So this copy is an electronic form with a copyright notice from an orthodoxinfo.com text of unnamed translation. Correct: «text read on Fordham (copy of orthodoxinfo.com; translator and print edition not given; the page's notice limits copying to personal/educational use). Licence: unconfirmed.» D already says the print edition must be collated before `data/`; add the licence to that caveat. Quotes checked (all §§ below) match this copy.

### A24 (Editions table, Enc-1895)
CONFIRMED. Metallinos, title page in Greek («… EN MANCHESTRIA … 1896» in the OCR), English by section XIV-XX; the Fordham page has the same text (sections XIV…XXV) and neither text contains the word «Antichrist» (grep on both, whole documents), which supports OB-7's «neither uses the antichrist charge in the sections read». 1848: also no «Antichrist» anywhere in the Fordham text.

### A25 (OB-7 L455, ELCA)
CONFIRMED. ELCA Constitution (Wayback copy of the CBCR, ch. 2): «…the Apology of the Augsburg Confession, the Smalcald Articles and the Treatise, the Small Catechism, the Large Catechism, and the Formula of Concord, as further valid interpretations of the faith of the Church.»

### A26 (OB-7 L455, LCMS)
UNCONFIRMABLE here. «accepts without reservation … All the Symbolical Books» is quoted in `lutheran.md` L42 with the constitution article; lcms.org returned 404 for the constitution URL tried. Not contradicted.

### A27 (OB-Not carried over, Baptist, AG, 2LCF 26.4)
UNCONFIRMABLE here. BF&M 2000 art. VI «an autonomous local congregation» and the maps' «silent» rows: sbc.net blocks curl (Cloudflare), no other copy used. Carried from `baptist.md` / `pentecostal.md` as D itself says. The 2LCF 26.4 «that Antichrist» line is only in `baptist.md` L179.

---

## Part B. §1 Qué enseña (QE-1 to QE-9)

### B1 (QE-1, L58-72)
CONFIRMED. PA ch. 1 Latin and English (Schaff p. 258) and canon (Latin and English p. 260, scan of the canon's end), vatican.va Latin identical; the Spanish AI is faithful. LG 22 «El Señor estableció solamente a Simón como roca y portador de las llaves de la Iglesia (Mt 16,18-19) y le constituyó Pastor de toda su grey (cf. Jn 21, 15 ss)» verbatim. CEC 552-553: all three quotes verbatim (552: first two; 553: «El poder de las llaves designa la autoridad para gobernar la casa de Dios, que es la Iglesia»). LG 18 «como objeto de fe inconmovible» verbatim (LG 18). Grade lines are correct as stated.

### B2 (QE-2, Latin, L80)
WRONG. D quotes the ch. 2 Latin as «… quae fundata super petram ad finem saeculorum usque firma stabit, jugiter durare necesse est». Schaff prints «ad fidem saeculorum usque» (scan of p. 260, line 11 of the Latin column: «petram ad fidem sœculorum usque firma stabit, jugiter du-rare necesse est»), an obvious misprint; vatican.va Latin, the Acta and Schaff's own English («to the end of the world») all read «ad finem». D quotes «finem» under `[verified: OCR]` and PA-Schaff without saying it silently corrects Schaff. Correct tag: keep «finem» but tag `[verified: vatican.va Latin; Schaff p. 260 prints «fidem», a misprint]`, or quote vatican.va for that word. Same fix at PQ-2 (C2). The rest of the passage is exact («Unde quicumque …» p. 261).

### B3 (QE-2, rest, L76-88)
CONFIRMED. Schaff English ch. 2 pp. 260-261 (OCR differences only); canon Latin and English pp. 261-262 (scan); CDF-Primado §3 «en su presencia y en su muerte en Roma – atestiguadas por la tradición literaria y arqueológica más antigua» and §4 (see A1), note [13]; LG 20 and CIC 331 verbatim; the grade line («Dogma … doctrina de fe, n. 4») is right.

### B4 (QE-3, L90-106)
CONFIRMED. Florence primacy clause: Latin matches Mansi (col. 1031) word for word (orthography aside) and PA ch. 3 quotes it identically; PA ch. 3 «innovamus …» and «Docemus proinde …» Latin/English (Schaff pp. 262-263; the 'one flock' sentence on p. 263), supreme-judge passage (pp. 264-265; the Latin begins p. 265), canon (Latin and English p. 265, end p. 266), vatican.va Latin identical; LG 22, CIC 331, 333 §3, 1404 verbatim; CDF 1998 §11 / n. 27 (A1). Spanish AI faithful («potiores partes» as «la parte principal» is within the Latin).

### B5 (QE-4, L108-119)
CONFIRMED. Definition: Latin (vatican.va Latin; Schaff Latin on pp. 270-271), English (Schaff, p. 270 → 271; OCR text read in full, wording identical), «die decima octava Julii». LG 25 both quotes verbatim (LG 25); CEC 891 with «cf. Vaticano I: DS 3074»; CIC 749 §1 text read.

### B6 (QE-5, quotes, L126-129)
CONFIRMED. PA ch. 3 «Tantum autem abest …» pp. 263-264 (English on p. 263; the Gregory quote ends on p. 264), Latin identical to vatican.va apart from the stray splice of A4 (D follows Schaff); LG 22 three quotes verbatim; CEC 895 verbatim; CIC 333 §1 and 336 read; Nota explicativa previa 3.ª: «la distinción no se establece entre el Romano Pontífice y los Obispos colectivamente considerados, sino entre el Romano Pontífice separadamente y el Romano Pontífice junto con los Obispos» verbatim (LG file, after §69, Nota 3).

### B7 (QE-5, grade line, L124)
WRONG. D: «That the primacy «afirma, robustece y defiende» the bishops' ordinary power». No text says that: PA ch. 3's Latin is «asseratur, roboretur ac vindicetur» (D's own AI Spanish: «es afirmada, robustecida y defendida»; Schaff: «asserted, strengthened, and protected»); CEC 895 says «la confirma y tutela». The quotation marks make it look like a source. Correct: drop the marks or quote the Latin/Spanish as in L126.

### B8 (QE-6, L131-139)
CONFIRMED. PA ch. 4 (Schaff p. 269: Latin, English); LG 25 quotes verbatim; CIC 749 §3, 752 verbatim; CEC 892 and 86 verbatim (CEC 86 quoting DV 10); grade line right.

### B9 (QE-7, L141-149)
CONFIRMED. PA proem Latin and English (Schaff p. 257; the proem occupies pp. 256-258); LG 23, UUS 97 (quote spans the paragraph numbered 97), CIC 205, CEC 838 verbatim.

### B10 (QE-8, L151-159)
CONFIRMED, with a caution. Florence patriarchs clause (Mansi col. 1033; Latin exact; Spanish AI faithful). CDF-Primado §6 and §8 verbatim: «El Episcopado y el Primado, recíprocamente vinculados e inseparables, son de institución divina. Históricamente, por institución de la Iglesia, han surgido formas de organización eclesiástica en las que se ejerce también un principio de primacía»; patriarchal system «comporta, desde los inicios, el nexo con la tradición petrina» (§6); «garante de la legítima diversidad de ritos, disciplinas y estructuras eclesiásticas entre Oriente y Occidente» (§8). LG 23 verbatim. Caution for the site draft (L153): «los patriarcados nacieron por institución de la Iglesia» drops the same §6 sentence's «este sistema pertenece a la guía de la Providencia ordinaria de Dios sobre la Iglesia»; the draft is a fair reading of the first half but a reader could take it as "merely human". Not a quote error.

### B11 (QE-9, L161-168)
CONFIRMED. UUS 88 (both quotes), 95 («encontrar una forma de ejercicio del primado que, sin renunciar de ningún modo a lo esencial de su misión, se abra a una situación nueva»), 96 («un diálogo fraterno, paciente, en el que podríamos escucharnos más allá de estériles polémicas»); CDF-Primado §7 (all three quotes), §12 («naturaleza inmutable del Primado … modalidades de ejercicio adecuadas a las circunstancias») and §13 («sólo el Papa (o el Papa con el Concilio ecuménico) tiene …»). UUS 88 also in CDF-Primado §1 as quotation of the same phrase.

---

## Part C. §2 Por qué (PQ-1 to PQ-6, Cierre)

### C1 (PQ-1, L186-190)
CONFIRMED. PA ch. 1 phrases in Latin («summi pastoris et rectoris jurisdictionem in totum suum ovile»; «tam manifestae sacrarum Scripturarum doctrinae, ut ab Ecclesia Catholica semper intellecta est») and English («this clear doctrine of Holy Scripture as it has been ever understood by the Catholic Church», p. 259); CDF-Primado §3 (quote «Primero Simón, llamado Pedro», Mt 10:2, note 5; lists in note 6; the «se encuentra en todas las expresiones…» text is in note [8], not in §3's body: D says «§3 and n. 8», correct); CEC 552.

### C2 (PQ-2, L194)
WRONG (same as B2). «ad finem saeculorum usque firma stabit» is quoted under `[verified: OCR]`; Schaff prints «fidem». LG 20 and CEC 862 verbatim.

### C3 (PQ-3, locator, L199)
WRONG. D: «ch. 4: … «ut sublata schismatis occasione Ecclesia tota una conservaretur» (English, Schaff, p. 269: "that the occasion of schism being removed, the whole Church might be kept one")». In Schaff this sentence (Latin and English) is on p. 270: the running head «270 SYMBOLA ROMANA» precedes it (Latin line 24340, English 24380 in the OCR); p. 269 ends at «Ecclesia … quae, sacris Scripturis …». Correct: p. 270.

### C4 (PQ-3, rest, L200-201)
CONFIRMED. UUS 97 «Esta función de Pedro debe permanecer en la Iglesia para que, bajo su única Cabeza, que es Cristo Jesús, sea visiblemente en el mundo la comunión de todos sus discípulos»; CDF-Primado §11 (quote of Communionis notio 14, note [43] «cf. Catecismo … n. 1369»); proem «ut vero episcopatus ipse unus et indivisus esset» (p. 257).

### C5 (PQ-4, L203-207)
CONFIRMED. PA ch. 4 pp. 266-268: «in quibus Oriens cum Occidente in fidei caritatisque unionem conveniebat» (vatican.va Latin: «charitatisque»; Schaff prints «caritatis» per OCR alignment, spelling only), Formula of Hormisdae, Lyon II, Florence, «ad hanc Sedem Apostolicam»; LG 22 (the «Ya la más antigua disciplina» quote) and UUS 95 (UR 14 quote) verbatim.

### C6 (PQ-5, UUS 91, L211)
WRONG (word dropped inside the quote). D: «es como si, desde la debilidad humana de Pedro, se manifestara …». UUS 91 reads «Es precisamente como si, desde la debilidad humana de Pedro, se manifestara …». Correct: add «precisamente» or put «[…]». Side note: the vatican.va text prints «¡Escándalo eres par mí!» (typo for «para»); D silently corrects (L211, L247). The rest of the paragraph matches (Mt 16:23, «una triple profesión de amor (cf. 21, 15-17) que se corresponde con su triple traición (cf. 13, 38)», UUS 91).

### C7 (PQ-5, CDF §15)
CONFIRMED. «No han faltado en la historia del Papado errores humanos y faltas, incluso graves: Pedro mismo se reconocía pecador. Pedro, hombre débil, fue elegido como roca, precisamente para que quedara de manifiesto que la victoria es sólo de Cristo y no resultado de las fuerzas humanas» (§15; the paragraph also cites Lc 5:8, note 48).

### C8 (PQ-6 and neutral note, L214-223)
CONFIRMED. CEC 834: Ignatius («que preside en la caridad», Ad Romanos 1, 1), Irenaeus (Adversus haereses 3, 3, 2, «citado por Concilio Vaticano I: DS 3057») and Maximus verbatim; PA ch. 2 Latin/English of the Irenaeus sentence (Schaff p. 261, footnote «From St. Irenaeus against Heresies, Book III. cap. iii.», scan); 1848 §13 («Although this saint says by no means what the followers of the Vatican would make out») in §13; CDF-Primado §3 note 12 (Ambrose, Enarr. in Ps. 40, 30); Leo in PA proem (Schaff p. 257 footnote, Sermon IV, 440) and ch. 2 (footnote 2, Sermon III); Gregory in PA ch. 3 and UUS 88; Treatise Fathers: Jerome ¶18, Gregory ¶19, Cyprian ¶14-15, Chrysostom/Hilary ¶27-29 (the paragraph break sits between «Augustine» and «Hilary»; Chrysostom follows). 1895 §XVII quotes Basil (text read). ROADMAP screen 03 note: quoted verbatim in ROADMAP L36.

### C9 (Cierre, L227)
CONFIRMED. LG 22 and PA ch. 2 (Latin «jugiter durare necesse est»; the Spanish AI «es necesario que dure» is labelled in the «Rests on» line). Minor: the LG 22 quote silently omits the inner references «(Mt 16,18-19)» and «(cf. Jn 21, 15 ss)» that the same sentence carries in the source (also L324); the line is accurate as a quotation of the sentence.

---

## Part D. §3 La Escritura que usa (L232-253)

### D1 (14-row table)
CONFIRMED (rows checked one by one against the sources they cite). Refs: Mt 16:16-19 in PA ch. 1 and ch. 4 (the 18 as «adversus inferi portas»), LG 22 (Mt 16,18-19), LG 19 (Mt 16,18), CEC 552-553 and 881, UUS 91, CDF-Primado note 9; Jn 1:42 in PA ch. 1; Jn 21:15-17 in PA ch. 1, LG 19, 22, CEC 553, 881, UUS 91; Lc 22:31-32 in PA ch. 4, LG 25, CEC 552, UUS 91; Mt 18:18 / 28:16-20 in LG 22 and CEC 553, 881 (881 quotes LG 22 «Consta que también el colegio de los apóstoles, unido a su cabeza»); Jn 20:21 in LG 18 and the PA proem (paraphrase «sicut misit …»); Mt 10:2, Mc 3:16, Lc 6:14, Hch 1:13 in CDF-Primado notes 5-6; Hch 2:14, 37, 5:29 in UUS 90; 1 Co 15:5 in UUS 91, CEC 552; Mt 16:23, Jn 13:38 in UUS 91 and Lc 5:8 in CDF note 48; Lc 22:26-27 and Mt 20:25 in UUS 88, 94 and CEC 894; Ef 2:20, Ap 21:14, 1 P 2:4 in LG 19, CEC 552 (1 P 2,4) and 869 (Ap 21,14); Jn 17:21 in the PA proem (Schaff footnote «John xvii. 21») and UUS 96; 2 Co 11:28 in CDF-Primado note 23. The Bible wording itself (RV vs documents) is Question 1, not checked.

### D2 (L253 "Not included")
CONFIRMED. UUS 97 mentions Peter «respetando la autoridad de Santiago, cabeza de la Iglesia de Jerusalén» without a reference (the paragraph numbered 97, before «Esta función de Pedro …»).

---

## Part E. §4 Objeciones (OB-1 to OB-8)

### E1 (OB-1, objecting texts, L284-290)
CONFIRMED. WCF XXV.6 (1647 print p. 87; 1880 p. 133 on scan, text as printed incl. «anti-cristo», «inícuo»; proof texts see A19); OPC current text (A20); SA II.4 ¶1 and ¶9: Latin (Triglot e-text) and English (bookofconcord.org) exact; Dositheus (A22); 1895 §XIV (Metallinos OCR: «Our Lord Jesus Christ alone is the eternal Prince and immortal Head of the Church …»). The OPC status line: see A21.

### E2 (OB-1, Catholic answer, L292-303)
CONFIRMED. UUS 97, LG 19 («siendo el propio Cristo Jesús la piedra angular»), CEC 869, LG 18 and 22 («Vicario de Cristo», «Cabeza visible de toda la Iglesia» are both in LG 18; «Vicario de Cristo» also LG 22), LG 23, UUS 95 («el Obispo de Roma pertenece a su «colegio» y ellos son sus hermanos en el ministerio»), PA ch. 1 canon: all verbatim.

### E3 (OB-2, objecting texts, L312-318)
CONFIRMED. Treatise ¶23, ¶24, ¶25, ¶30 (Latin: Triglot e-text paragraph markers «23 ]», «24 ]», «25]», «30]»; English: bookofconcord.org ¶23, 24, 30); ¶27-29 (Fathers, as C8); 1848 §11 (the quotes are in §11: Confession as the rock, «our divine Fathers, with one accord, teach …», «a simple restoration to his Apostleship»); 1895 §XIV (rock; 1 Cor 3:10-11, Eph 2:19-20).

### E4 (OB-2, Catholic answer, L320-333)
CONFIRMED. CEC 552, 553 («el único a quien Él confió explícitamente las llaves del Reino»; the HTML prints «éÉl», a typo, D normalises), LG 22 (the Mt 18:18 sentence is in LG 22: «Consta que también el colegio de los apóstoles, unido a su cabeza …»), UUS 91, PA ch. 1 Latin passages (pravae sententiae, `[verified: OCR]` and vatican.va) and AI Spanish labelled. The `[inference]` on Treatise ¶24 vs PA ch. 1 is correctly tagged.

### E5 (OB-3, objecting texts, L342-350)
CONFIRMED. Treatise ¶1-4 (Latin numbers 1-4; the Triglot e-text numbers them «1 ]»…), ¶8 (Lk 22:25; the ¶8 text holds I. Lk 22:25 and II. Mt 18; English ¶9 starts «III. John 20:21», so «¶9 Jn 20:21» is right), ¶10 (Gal 2:7f), ¶11 (1 Cor 3:6), ¶12 (Nicaea), ¶17-21 (Jerome ¶18, Gregory ¶19, Phocas ¶21); SA II.4.7-9; 1848 §13, §14; 1895 §XV, §XVI, §XVII (quotes verbatim; the canon 28 quotation is in §XV). Treatise ¶ numbering consistent between Latin e-text and bookofconcord.org.

### E6 (OB-3, Catholic answer, L352-365)
CONFIRMED. UUS 88, 94 (D's quote omits the inner «(cf. Mt 20, 25; Mc 10,42)» between «poderosos» and the dash; minor), 95, CDF-Primado §6, §7; Florence AI Spanish labelled; PA ch. 3 canon. Honest note: PA ch. 3 «Ep. ad Eulog. Alexandrin. l. VIII ep. XXX» is in the vatican.va Latin («I. VIII ep. XXX») and the Treatise ¶19 says «writing to the patriarch at Alexandria»; the identification is correctly tagged `[inference]`.

### E7 (OB-4, objecting texts, L374-375)
CONFIRMED. 1848 §11: «The Throne of Rome is esteemed that of St. Peter by a single tradition …» and «The blessed Peter, even in his own person, was judged before all …»; 1895 §XIV: both long quotes verbatim.

### E8 (OB-4, Catholic answer, L377-388)
CONFIRMED. CDF-Primado §3 («pertenece a la estructura perenne de la Iglesia de Cristo y que esta sucesión está fijada en la sede de su martirio»), §4 («enriquecida también con la predicación y el martirio de San Pablo»), §6 («es plenamente consciente de la función de las sedes apostólicas en la Iglesia antigua, especialmente de las consideradas petrinas –Antioquía y Alejandría–»), UUS 90 («la Iglesia de Pedro y de Pablo»); PA ch. 2 canon.

### E9 (OB-5, objecting texts, L396-399)
CONFIRMED. 1895 §XVI (quote with its «[…]»), 1848 §15 (both quotes), Treatise ¶49 (Latin «alterum, quod iudicium eripit ecclesiae …»; English ¶49 «The second, that he wrests the decision from the Church») and ¶56 (Latin and English).

### E10 (OB-5, Catholic answer, L401-411)
CONFIRMED. LG 22, LG 25 («nunca puede faltar el asenso de la Iglesia por la acción del mismo Espíritu Santo»), CDF-Primado §10 (the quote and note [42] «can. 1404 … Denz-Hün, n. 3063»), PA ch. 3 and ch. 4 (Schaff pp. 268-269; «Romani autem Pontifices, prout …» begins p. 268; AI Spanish labelled).

### E11 (OB-6, objecting texts, 1895 and Westminster, L421-423)
CONFIRMED. 1895 §XVIII (long quote verbatim, Metallinos spellings «Oecumenical») and §XIV («subject only to the synodical ordinances …»); WCF XXXI.4 and I.10 (1647 print pp. 97, 21; 1880 pp. 155, 12-13, scans; spelling issue in A18); proof texts (e) and (z) (see A19).

### E12 (OB-6, Catholic answer, L425-438)
CONFIRMED (quotes). PA ch. 4 (p. 269), LG 25 («no da una sentencia como persona privada»; «siempre de acuerdo con la misma Revelación, a la cual deben atenerse y conformarse todos»; «reside también en el Cuerpo de los Obispos cuando ejerce el supremo magisterio …»), CIC 749 §3, CDF-Primado §15, CEC 86 (DV 10), PA ch. 4 definition (Spanish AI labelled). Lc 22:32 as Spanish in the text: Scripture wording, Question 1.

### E13 (OB-6, bridge sentence, L429, L435, L632)
UNCONFIRMABLE (inference, not in any cited text). «Para la Iglesia, la infalibilidad no es ausencia de pecado ni de error en todo, sino la asistencia prometida a Pedro (Lc 22:32) cuando define para toda la Iglesia.» PA ch. 4 supports «assistance promised to Peter … when he defines»; CDF §15 says there were «errores humanos y faltas, incluso graves» in the history of the papacy; no text says «la infalibilidad no es ausencia de pecado ni de error en todo». The opening «Para la Iglesia» presents it as the Church's claim. Recommended: tag `[inference]` in the dossier and let Pedro drop it, or replace it by CEC 891-892 («esta infalibilidad abarca todo el depósito…»; the assistance in 892 is «sin llegar a una definición infalible») plus CDF §15 as two separate quotes.

### E14 (OB-7, objecting texts, L447-457)
CONFIRMED. SA II.4 ¶3 (Latin «mere diabolica acta et instituta», English «purely diabolical affairs and transactions»), ¶4 (Latin «Prostant enim omnes ipsius bullae … rugit ut leo»; Apoc. 12, 1), ¶10-11 (the English second sentence «This is, properly speaking to exalt himself above all that is called God …» is ¶11); Treatise ¶38, ¶39-40 (the «tripliciter» sentence is ¶40, «plane notae antichristi» ¶39), ¶57 (Latin «necesse est ei tamquam antichristo adversari», English «it is necessary to resist him as Antichrist»), ¶41 proof texts; WCF XXV.6 second clause; 1848 §4: «§ 4. Of these heresies diffused, with what sufferings the LORD hath known, over a great part of the world, was formerly Arianism, and at present is the Papacy.» (D's «…» elides «with what sufferings the LORD hath known, over a great part of the world, » correctly). Current status of the OPC/PCUSA: A20-A21; ELCA A25; LCMS A26.

### E15 (OB-7, Catholic answer, L459-472)
CONFIRMED. CEC 86 (full quote with «para enseñar puramente lo transmitido»), CDF-Primado §7 (the two quotes, incl. «tiene los límites que proceden de la ley divina y de la inviolable constitución divina de la Iglesia contenida en la Revelación»), PA ch. 3 «Haec est catholicae veritatis doctrina, a qua deviare salva fide atque salute nemo potest», CEC 838 (quoting UR 3), UUS 88 and 96, PA ch. 4.

### E16 (OB-8, L474-494)
CONFIRMED. Treatise ¶31 (Latin and English), ¶33 (Latin «Quare Bonifacii Octavi Constitutio et cap. Omnes, distinct. 22 …»); the bracket after ¶34 with Unam sanctam («Porro subesse Romano pontifici … de necessitate salutis») is an editors' note in the Triglot (it cites Hier deutet auch Bonifacius… in German), so D's remark is right. Answer: PA ch. 3 phrases (AI labelled in QE-3), CEC 2245 («por razón de su misión y de su competencia, no se confunde en modo alguno con la comunidad política», GS 76, 3) and 2246 («todos y sólo aquellos medios que sean conformes al Evangelio», GS 76, 5), CDF-Primado §2 («como demuestra la historia, ha constituido también una defensa de la libertad de los Obispos y de las Iglesias particulares frente a las injerencias del poder político») and §7.

### E17 (OB, "Not carried over", L496-505)
CONFIRMED where checkable: Dositheus p. 124 «as necessary to the Church as breath is to man» (A22); Chalcedon c. 28 inside 1895 §XV; Honorius inside §XVIII. Baptist, AG, 2LCF: A27. The asymmetry counts (8 objections; Lutherans 6, Orthodox 6, Reformed 3) agree with which OB blocks contain which sources (OB-1: WCF, SA, Dositheus, 1895; OB-6: 1895 + WCF; OB-7: SA, Treatise, WCF 1647).

---

## Part F. §5 Cómo se vive and §6 Grado de autoridad

### F1 (§5 intro, L513-517)
CONFIRMED. CEC 1369 («Toda la Iglesia se une … Encargado del ministerio de Pedro en la Iglesia, el Papa es asociado a toda celebración de la Eucaristía en la que es nombrado como signo y servidor de la unidad de la Iglesia universal»), CIC 205, 751, 752, 335 verbatim (335: «Al quedar vacante la sede romana … nada se ha de innovar en el régimen de la Iglesia universal»).

### F2 (CV-1 to CV-10, L523-532)
CONFIRMED (every quote verbatim and every number correct). CV-1 CEC 1369; CDF-Primado §11 («Toda válida celebración de la Eucaristía expresa esta comunión universal con Pedro y con la Iglesia entera, o la reclama objetivamente»). CV-2 CIC 205, 751. CV-3 CEC 891 («hay que aceptar sus definiciones con la obediencia de la fe»); CIC 749 §3. CV-4 CIC 752; LG 25; CEC 892. CV-5 CIC 212 §1 and §3 («el derecho, y a veces incluso el deber»). CV-6 CIC 349 (cardinals provide for the election), 332 §1 («mediante la elección legítima por él aceptada juntamente con la consagración episcopal») and 332 §2 («… pero no que sea aceptada por nadie»). CV-7 CIC 335. CV-8 CIC 377 §1, 375 §2. CV-9 CIC 833. CV-10 CIC 337 §1, 341 §1; LG 22. Grade line right. Schaff's «Feast of St. Peter's Chair at Antioch, February 22» is on p. 257 (L534).

### F3 (§6 first table, L542-547)
CONFIRMED. CIC 750 §1, 750 §2, 752 verbatim (750 §1 truncated before «que se manifiesta en la común adhesión …» with the sentence ending at «ordinario y universal»; acceptable); CDF 1998 §11 for the two examples; Donum veritatis 17 on vatican.va (es): «Por este mismo motivo las decisiones magisteriales en materia de disciplina, aunque no estén garantizadas por el carisma de la infalibilidad, no están desprovistas de la asistencia divina y requieren la adhesión de los fieles» (the dossier writes «Las» sentence-initial; verified here, no longer only «in eucharist/catholic.md §6»).

### F4 (§6 second table, L551-564)
CONFIRMED where checkable. The grade of each text is the dossier's own assignment, correctly tagged `[verified]` / `[inference]` as sources allow (CDF 1998 §11; CDF-Primado §4 «doctrina de fe»). CCC «a sure norm for teaching the faith» (Fidei depositum) was not re-read here; it is from the map (4.F), unconfirmed here.

---

## Part G. §7 Fuentes, Coverage, map corrections, forbidden sources

### G1 (§7 table)
CONFIRMED (URLs return 200; see A6). Donum veritatis 17 now verified (F3).

### G2 (Forbidden sources check, L581)
CONFIRMED CLEAN. Grep of `catholic.md` for newadvent, new advent, ewtn, papalencyclicals, tanner, denzinger, hünermann, ott, catholiccrusade: hits only in the sentence that says they were not used (L581) and in the negative mention of «Ott» there. The URLs in D (grep) are all vatican.va, bookofconcord.org, opc.org, sourcebooks.web.fordham.edu. archive.org is named only for PD scans (Schaff, Mansi, Westminster 1894 and 1880, Robertson, Metallinos, González). DS/DH numbers appear only as printed by CEC 834/891, UUS 152, CDF 1998 n. 27 and CDF-Primado (A8-A9). The Triglot Latin e-text and the Fordham 1848 copy are the two sources with licence caveats (A14, A23); neither is on the forbidden list.

### G3 (Coverage / map corrections, L599-603)
1. CDF-Primado date and DH numbers: CONFIRMED (A6, A7, A8; note the 3060.3064 reading).
2. «vatican.va Latin of PA is garbled in ch. 2–3»: WRONG, see A4.
3. «No public-domain Spanish of PA found»: CONFIRMED as absence (archive.org title search returned nothing; González quotes only Latin).
4. Florence primacy clause in Mansi 31 cols. 1031–1033: CONFIRMED (A5).

---

## Consolidated lists

### Wrong items (what to fix, with the correct reading)

| # | Where in D | Fix |
|---|---|---|
| A4 | L30 and map correction 2 | vatican.va Latin is complete; only a stray fragment of the ch. 2 canon is repeated inside ch. 3's «Tantum autem abest» paragraph. |
| A8 | L23, L600 | CDF-Primado note 26 prints «nn. 3060.3064» (one item, probably 3060-3064); not two numbers 3060 and 3064. |
| A12 | L184, L241, L124 | Spanish AI fragments in quotation marks with no AI label: «tal como siempre las entendió la Iglesia», «verdad y de fe que nunca falla», «afirma, robustece y defiende». |
| A18 | L423 | WCF 1880 prints «descanzar», not «descansar». |
| A19 | L284 | Split the proof-text lists: 1647 print = Col 1:18, Eph 1:22; Mt 23:8-10, 2 Thess 2:3, 4, 8, 9, Rev 13:6; 1880 notes = Col 1:18, Ef 1:22; Mt 23:8-10, 2 Tes 2:3-5. |
| A21 | L285 | The OPC 1936 clause is quoted in marks but is a paraphrase; real wording: «the removal of the reference to the pope as the Antichrist (but not the other changes) in chapter 25.6 be retained». |
| A23 | L272 | Enc-1848 licence is not «PD (per the map)» on the page used: Fordham's notice says the electronic form is © Halsall 1998, no commercial use; translation and print edition unknown. |
| B2, C2 | L80, L194 | Schaff p. 260 prints «ad fidem saeculorum usque» (misprint); D's «ad finem» is the Acta/vatican.va reading and must not be tagged as read in Schaff's OCR. |
| B7 | L124 | «afirma, robustece y defiende» is not a quotation of any text (Latin «asseratur, roboretur ac vindicetur»; CEC 895 «confirma y tutela»). |
| C3 | L199 | The «ut sublata schismatis occasione» sentence is on Schaff p. 270 (Latin and English), not p. 269. |
| C6 | L211 | UUS 91 reads «Es precisamente como si…»; «precisamente» dropped inside the quote. Side note: source typo «par mí» silently corrected in L211 and L247. |

Minor non-errors worth a glance at the apply step: footnote marks and inner scriptural references silently omitted from LG 18, LG 22 (L227, L324), UUS 94 (L354); Mansi prints «ceterorum», D «caeterorum»; QE-8's draft sentence omits CDF §6's «Providencia ordinaria de Dios» half; the «CIC …/documents/» URL is a bare directory (403).

### Unconfirmable

| # | Item | Why |
|---|---|---|
| A14 | Licence of the NPH 1996 Triglot Latin e-text | The file carries «Copyright 1996 NPH»; no reuse grant read. |
| A15 | Kolb–Wengert numbering 1–82; SA German/Latin 1580; Tr Latin; «Schaff's Latin follows the Acta» | Carried from the maps; not in any source read here. |
| A26 | LCMS «without reservation» | lcms.org constitution URL 404; carried from `lutheran.md`. |
| A27 | BF&M 2000 art. VI wording; Baptist/AG «silent»; 2LCF 26.4 | sbc.net blocks curl; carried from the maps. |
| E13 | OB-6 bridge sentence («la infalibilidad no es ausencia de pecado ni de error en todo») | No cited text says it; it is the agent's inference (tag `[inference]`). |
| F4 | CCC «a sure norm for teaching the faith» (Fidei depositum) | Not re-read; from the map. |

Counts: 73 items; CONFIRMED 55, WRONG 12 (A4, A8, A12, A18, A19, A21, A23, B2, B7, C2, C3, C6; B2 and C2 are one finding), UNCONFIRMABLE 6 (A14, A15, A26, A27, E13, F4). Items with a confirmed core and a WRONG detail are counted once as WRONG. All priority-1 quote segments (about 500) matched or are listed above.
