# Eucharist · «Cómo se vive» practice table: verification of its 15 cells (session A2, 2026-11-01)

Status: draft, NOT verified by Pedro

Read-only pass over `src/content/pages/eucharist/doctrine.es.ts` (the `practice` block, lines 337–422; nothing was edited; pages are generated, so a correction goes to the dossier or converter and the page is reconverted). Each cell was checked against the text it cites. Written by the same session that wrote the table's sibling files, so it is **not independent**: it needs a second pass if the table goes to Pedro as verified.

## Progress

- 15 of 15 cells checked (3 aspects × 5 traditions): 9 CONFIRMED, 3 CONFIRMED with a note (rows 1, 11, 13), 3 WRONG (rows 3, 9, 12: Lutheran «Quién preside», Reformed «Pan y vino», Orthodox «Lo que sobra»).
- Page images were not read for any row; every quotation below was read in an OCR of a dated scan or in an official HTML page (tag `[verified: read in OCR]` / `[verified: vatican.va official English HTML]`).

## Editions used

- Catechism of the Catholic Church: the official English Vatican IntraText pages `https://www.vatican.va/archive/ENG0015/__P40.HTM` (n. 1348), `__P44.HTM` (n. 1411), `__P41.HTM` (nn. 1378–1379); Code of Canon Law: `https://www.vatican.va/archive/cod-iuris-canonici/eng/documents/cic_lib4-cann879-958_en.html` (cann. 900, 924, 926, 938, 940). Retrieved 2026-11-01.
- Mogila: *The Orthodox Confession of the Catholic and Apostolic Eastern Church*, London: Thomas Baker, 1898 (scan `cu31924029363094`), pp. 79–80 (question 107).
- Augsburg Confession XIV, XXII; Formula of Concord, Solid Declaration VII.83–87: Triglot English via BookOfConcord.org (web transcription of the 1921 Triglot; print not collated, see `sources/lutheran-triglot-collation.md`).
- Westminster Confession 27.4, 29.4, 29.5: *The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at Large*, Edinburgh: Johnstone, Hunter & Co., 1894 (scan `confessionoffaith00chur`, printed pp. 90 and 94). Spanish: *Doctrinas y reglamentos de la Iglesia Presbiteriana*, Monterrey, 1880 (scan `doctrinasyreglam00west`), OCR.
- Second London Confession: the fourth edition, London: John Marshall, 1719 (scan `bim_eighteenth-century_a-confession-of-faith-p_1719`), chapter 30 on printed pp. 119–120 (running heads in the OCR; page image not read), per DECISIONS 2026-11-01 decision 4.
- Quinisext Council, canon 52: NPNF Series 2 vol. XIV, ed. Schaff and Wace (1900), scan `selectlibraryofn14schauoft`, p. 389.

## Cells

| # | Cell | Verdict | What the source says |
|---|---|---|---|
| 1 | **Quién preside · Catholic**: «Solo un sacerdote válidamente ordenado, que actúa en la persona de Cristo» (CEC 1348, 1411) | CONFIRMED, note | CEC 1411: «Only validly ordained priests can preside at the Eucharist and consecrate the bread and the wine so that they become the Body and Blood of the Lord.» CEC 1348: «the bishop or priest acting in the person of Christ the head (in persona Christi capitis) presides over the assembly». CIC 900 §1: «The minister who is able to confect the sacrament of the Eucharist in the person of Christ is a validly ordained priest alone.» Note: 1348 names «bishop or priest»; the cell's «sacerdote» is the narrower word. |
| 2 | **Quién preside · Orthodox**: «El sacerdote, que invoca al Espíritu Santo sobre los dones» (Mogila I.107) | CONFIRMED | Question 107, first: «That no man do presume to administer this Mystery, on any Occasion whatsoever, although ever so urgent; but only a Priest lawfully ordained.» Fourth: the Priest «invoke[s]» the Holy Ghost: «0 Lord, send down from Heaven thy Holy Spirit upon us, and upon these Gifts now lying before thee» (OCR). |
| 3 | **Quién preside · Lutheran**: «Un pastor ordenado y debidamente llamado» (AC XIV) | **WRONG** (the word «ordenado») | AC XIV: «they teach that no one should publicly teach in the Church or administer the Sacraments unless he be regularly called.» The article says «called» (Latin *rite vocatus*), nothing about ordination. Correct to «Quien ha sido debidamente llamado» (or cite another text that says «ordained»; AC XXVIII and the Treatise speak of ordination, not AC XIV). The cell has no citation id (empty array). |
| 4 | **Quién preside · Reformed**: «Solo un ministro de la Palabra legítimamente ordenado» (WCF 27.4) | CONFIRMED | WCF 27.4: «There be only two sacraments ordained by Christ our Lord in the gospel, that is to say, Baptism, and the Supper of the Lord; neither of which may be dispensed by any but by a minister of the word, lawfully ordained.» |
| 5 | **Quién preside · Baptist**: «El ministro, que ora, bendice los elementos, parte el pan y los da» (2LCF 30.3) | CONFIRMED | 2LCF 30.3 (1719): «The Lord Jesus hath in this Ordinance, appointed his Ministers to Pray, and Bless the Elements of Bread and Wine […] and to take and break the Bread; to take the Cup […] to give both to the Communicants.» |
| 6 | **Pan y vino · Catholic**: «Pan de trigo, ázimo en el rito latino, y vino de vid con un poco de agua» (CIC 924, 926) | CONFIRMED | CIC 924 §1 «bread and with wine in which a little water must be mixed»; §2 «The bread must be only wheat»; §3 «The wine must be natural from the fruit of the vine»; 926: «According to the ancient tradition of the Latin Church, the priest is to use unleavened bread». |
| 7 | **Pan y vino · Orthodox**: «Pan con levadura y vino mezclado con agua» (Mogila I.107) | CONFIRMED | Question 107, third: «the purest leavened Bread, made of Grain, and the purest Wine, unmixed with any other Liquor: whereto, in the Time of Celebration, let Water be added». |
| 8 | **Pan y vino · Lutheran**: «Pan y vino; los dos se dan a todos los que comulgan» (AC XXII) | CONFIRMED | AC XXII.1: «To the laity are given Both Kinds in the Sacrament of the Lord's Supper […]». |
| 9 | **Pan y vino · Reformed**: «Pan y vino, que siguen siendo «verdadera y únicamente pan y vino»» (WCF 29.5) | **WRONG** (the quoted Spanish) | The substance is WCF 29.5: «in substance and nature, they still remain truly and only bread and wine, as they were before» (1894 p. 94). The words inside the guillemets are not the Spanish of the edition the project cites: the 1880 Monterrey edition prints «permanecen todavía en sustancia y naturaleza, verdadera y solamente, pan y vino, tales como fueron antes». Use the 1880 wording («verdadera y solamente, pan y vino»), or take the guillemets off and label the Spanish as a translation (decision 3). No citation id. |
| 10 | **Pan y vino · Baptist**: «Pan y vino» (2LCF 30.3) | CONFIRMED | 2LCF 30.3 (1719): «the Elements of Bread and Wine». |
| 11 | **Lo que sobra · Catholic**: «Se reserva en el sagrario, ante una lámpara; se adora y se lleva en procesión» (CIC 938, 940; CEC 1378–1379) | CONFIRMED, note | CIC 938 §1 «reserved habitually in only one tabernacle»; 940: «A special lamp which indicates and honors the presence of Christ is to shine continuously before a tabernacle»; CEC 1378: the Church «reserv[es] the consecrated hosts with the utmost care, exposing them to the solemn veneration of the faithful, and carrying them in procession» (a quotation inside the CEC). Note: the label cites cáns. 938, 940, but the `citations` array lists `CIC938`, `CEC1378`, `CEC1379` only: the lamp (can. 940) has no registry id. |
| 12 | **Lo que sobra · Orthodox**: «Se guardan dones consagrados para la Liturgia de los Presantificados, en Cuaresma» (Quinisext can. 52) | **WRONG** (not what the canon says; wrong question) | Canon 52 (NPNF2 14, p. 389): «On all days of the holy fast of Lent, except on the Sabbath, the Lord's day and the holy day of the Annunciation, the Liturgy of the Presanctified is to be said.» The canon does not say that gifts are kept; the «Ancient Epitome» printed after it says «the presanctified gifts shall be offered». And the row asks what is done with what is left over; the canon is about a Lenten liturgy, not about the remainder after an ordinary Liturgy. A source for what Orthodox texts say about the remaining gifts was not read here. No citation id. |
| 13 | **Lo que sobra · Lutheran**: «No se reserva para la adoración ni se lleva en procesión: fuera del uso instituido no hay sacramento» (SD VII.85–87) | CONFIRMED, note | SD VII.85: «Nihil habet rationem sacramenti extra usum a Christo institutum» (rule); VII.87: «when in the papistic mass the bread is not distributed, but offered up or enclosed, borne about, and exhibited for adoration, it is to be regarded as no sacrament». Note: the text rejects enclosing/exhibiting for adoration; it does not say what is done with consecrated elements that remain (the open A3 residue on communion of the sick). «No se reserva para la adoración» is accurate; a reader may take «no se reserva» as a flat ban, which the text does not state. |
| 14 | **Lo que sobra · Reformed**: «No se reserva, no se eleva ni se adora» (WCF 29.4) | CONFIRMED | WCF 29.4: «worshipping the elements, the lifting them up, or carrying them about for adoration, and the reserving them for any pretended religious use; are all contrary to the nature of this sacrament, and to the institution of Christ». |
| 15 | **Lo que sobra · Baptist**: «No se reserva ni se adora» (2LCF 30.4) | CONFIRMED | 2LCF 30.4 (1719): «worshipping the Elements, the lifting them up, or carrying them about for adoration, and reserving them for any pretended religious Use, are all contrary to the Nature of this Ordinance, and to the Institution of Christ.» (The 1719 text does not contain the «private masses» clause that WCF 29.4 has.) |

## Wrong items

1. Row 3 (Lutheran presides): «ordenado» is not in AC XIV (only «regularly called»).
2. Row 9 (Reformed bread and wine): the guillemets enclose a Spanish the cited Spanish edition does not print («únicamente» for the 1880's «solamente»).
3. Row 12 (Orthodox leftovers): the canon cited does not say what the cell says, and it answers a different question.

## Not checked

- Page images (all rows read in OCR or HTML); the 1719 page numbers come from OCR running heads.
- The registry ids behind each `citations` array (only the label texts were checked against the sources, plus the one mismatch noted in row 11).
- The `connected` block of the same file, and the Spanish of the cells beyond the quoted phrases.

## Agent's calls

- Counted a cell CONFIRMED when its claim is in the cited text even if the cell is shorter than the text; notes record where the Spanish can be read more strongly than the source.
