# Versification check: Old Testament references in the Catholic dossiers

## Progress

- Status: done (research only; no dossier, data or code changed).
- Done: read `AGENTS.md`, `docs/research/sources/versification.md`, DECISIONS 2026-10-09 (RV1909 default), `docs/features/implementation-start.md` (D7, R9). Extracted every Old Testament reference from the five `catholic.md` and five `review-page.data.js` with a script (alias table es/en/la, chapter-only and verse forms), then read each hit in context. Compared each with the RV1909 text file, the Douay-Rheims Vulgate text and the TVTMS mapping.
- Not done: the Trent and Waterworth page images were not re-read; "the document's own numbering" is what the dossier records (all `[verified: OCR/scan]` there). Book-level mentions of deuterocanonical books (canon lists) have no chapter or verse and are listed only in the notes.
- Next: Pedro decides D7 (see "Where D7 matters").

Research date: 2026-10-21. Tags: `[verified]` = measured on the file named; `[reading]` = my reading of the verse against the dossier's use, to be confirmed by a human.

## Sources used

| What | Source | Note |
|---|---|---|
| RV1909 text and numbering | eBible `spaRV1909_vpl.zip`, downloaded 2026-10-21 (public domain, as in `eucharist/rv1909-verses.md`) | the repo has no full RV1909 copy; each dossier's `review-page.data.js` holds only the verses it quotes. All 20 OT verse texts stored there match the file exactly, except the stray acrostic label in Ps 119:129 (see Notes) `[verified]` |
| Vulgate text | eBible `engDRA_vpl.zip` (Douay-Rheims, Vulgate numbering) | used only to see what Trent's Vulgate number points at |
| Numbering map KJV / Hebrew / Latin | STEPBible TVTMS (CC BY, Tyndale House), GitHub `STEPBible/STEPBible-Data`, read 2026-10-21 | `Psa.51:5 -> Hebrew 51:7, Latin 50:7`; `Isa.64:6 -> Hebrew 64:5, Latin 64:6`; no rule for the other non-psalm refs, i.e. identical `[verified]` |

RV1909 facts that decide everything below `[verified]`:

- RV1909 has 150 psalms with the Hebrew chapter numbers, but its verse numbers are KJV-style: the title is not a verse of its own (in the eBible file it is glued to v. 1). So for psalms whose Hebrew text numbers the title as v. 1-2, RV1909 verse = Hebrew verse minus 1 or 2. This is not "Hebrew numbering" in the strict sense.
- Joel has 3 chapters and Malachi 4 (as the Vulgate and KJV; Hebrew has 4 and 3). No dossier reference sits in Joel 2:28-32 or Mal 3-4, so that difference does not bite here.
- eBible's RV1909 pads 18 empty verses and has 10 chapters whose text is misaligned with KJV numbering (Num 13, 30; 1 Sa 24; 2 Ch 33; Job 39, 40; Hos 12; Jon 2; weaker Ps 64, 134; `sources/versification.md` §2). None of the references below is in those chapters; Job 35:16 is padded empty but the dossiers cite 35:7-8 only `[verified]`.

## Baptism (3 references)

| Ref as written | Where (md / js lines) | RV1909 | Hebrew / Vulgate | Document's own numbering | Use; does the text say it |
|---|---|---|---|---|---|
| Ex 4:24-26 | md 390, 406; js 372, 554 (verse text), 819 | match (EXO 4:24-26) | same / same | Westminster 1894 print, proof text (n) of WCF 28.5, KJV numbering, same | Objector proof text that neglecting a sacrament is a grave sin. The verses tell of the LORD seeking to kill Moses and Zipporah circumcising her son; "neglect" and "baptism" are not in them. `[reading]` supports only through Westminster's inference |
| Ps 51:5 | md 747; js 476, 552 (verse text), 903 | match as RV1909 numbers it (PSA 51:5 "en pecado me concibió mi madre") | **Hebrew 51:7 / Vulgate 50:7** | Baptist Faith and Message 2000, art. III, proof text with Rom 5:12 (js 476) | Listed in the debate objection "children have no sin" under "objeción". The verse says the speaker was conceived in sin: it is the BF&M's own proof of an inherited sinful nature, so it points against the objection's line, not for it. `[reading]` placement under "objeción" is doubtful; the dossier has no sentence on how debaters use it |
| Ez 18:20 | md 747; js 505 (verse text), 903 | match (EZE 18:20) | same / same | none (debate verse) | Debaters: the son does not bear the father's sin. The text says exactly that `[reading]` fits |

## Eucharist (8 references)

| Ref as written | Where | RV1909 | Hebrew / Vulgate | Document's own numbering | Use; does the text say it |
|---|---|---|---|---|---|
| Mal 1:11 | md 24, 30, 298, 391; js 558, 663, 721-722 | match | same / same (Mal 1:11 in all) | Trent XXII ch. 1; CEC 1330 n. 148 (Irenaeus); Apology XXIV.31-32: all 1:11 | Catholic: pure offering in every place = the Mass; Lutheran: preaching and thanksgiving. The verse says a "presente limpio" is offered "en todo lugar" among the nations: fits both uses. **Wording gap:** RV1909 "perfume, y presente limpio"; the Vulgate (DRA) has "sacrifice ... a clean oblation" `[verified]`. The site's «presente limpio» is RV's; Trent's argument rests on the Latin word |
| Ps 110:4 | md 287, 299; js 574, 665 | match | same / **Vulgate 109:4** | Trent XXII ch. 1 "Ps. cix. 4" (md 287, 299); CEC 1333 n. 153: 110,4 | Melchizedek priest forever; the text says it `[verified]` |
| Gn 14:18 | md 299; js 530, 665 | match | same / same | CEC 1333 n. 153 | The site line says Melchizedek "ofreció pan y vino"; RV1909 says "sacó pan y vino" (DRA "bringing forth"). The verse does not say "offered"; the sacrificial sense is the Church's reading `[verified wording]` |
| Éx 12 (chapter only) | md 301; js 667 | match | same / same | Trent XXII ch. 1; CEC 1339-1340, 1364 n. 184 | The Passover: said to be the setting of the institution; the chapter institutes the Passover, the link to the Eucharist is the Church's reading `[reading]` |
| Sal 97:7 (via Heb 1:6) | md 302, 465; js 668, 766 | numbering matches (PSA 97:7). **Text does not match the use:** "los dioses todos á él se encorven" | same / **Vulgate 96:7**, whose text is "Adore him, all you his angels" `[verified]` | Trent XIII ch. 5 margin "Ps. xcvi. 7" | Used for "lo adoraron los ángeles". The RV1909 verse says "dioses", not "ángeles": the angels come from the Vulgate/LXX wording and from Heb 1:6. Only the NT verse supports the sentence in RV. Open if the site shows Ps 97:7 text |
| Lv 17:10-14 / 17:14 | md 306, 633, 635; js 568-569 (verse text) | match | same / same | none (Scripture alone, DO-2) | Debate objection "Dios prohibió beber sangre": 17:14 says "No comeréis la sangre"; supports the objection's premise |
| Is 53:10 | md 391; js 550, 721 | match | same / same | Westminster 29.2 proof text, KJV numbering, same | Objector: the Servant puts his life as expiation. The text says it; the dossier uses it for the once-for-all offering `[reading]` |
| Gn 18:2 | md 419, 434; js 531, 731 | match | same / same | Catechismus Romanus II.4 n. 40 | Scripture calls "varones" those who were angels. RV 18:2 says "tres varones"; that they are angels is the Catechism's gloss (and Gn 19:1, not cited) `[reading]` |

## Justification (11 references)

| Ref as written | Where | RV1909 | Hebrew / Vulgate | Document's own numbering | Use; does the text say it |
|---|---|---|---|---|---|
| Gn 15:6 | md 18, 22, 286, 290, 717; js 221, 656 | match | same / same | CEC 146 writes "Gn 15,6"; DJ 10 | "Creyó á Jehová, y contóselo por justicia": the text says it. The CEC quote is Rom 4:3 |
| Prov 17:15 (Prov. in Concord) | md 384, 390-391, 422; js 414-415, 730, 749 | match | same / same | Formula of Concord (Triglot, as quoted in the dossier), same | "El que justifica al impío ... abominación": uses "justificar" in the forensic sense the Lutheran text claims `[reading]` |
| Ps 32:1 | md 480; js 466 | match as RV1909 numbers it | same (Heb 32:1) / **Vulgate 31:1** | Triglot Latin "[Ps. 32, 1 sq.]": Hebrew chapter number | Bracket in the Triglot text, next to Rom 4:6. Verse: "Bienaventurado aquel cuyas iniquidades son perdonadas"; "without works" is Paul's, not the psalm's `[reading]` |
| Sal 16:2 | md 483, 506; js 452, 798 | match | same (Heb 16:2) / **Vulgate 15:2** | Westminster 16.5, proof text (q), KJV numbering | RV "mi bien á ti no [aprovecha]": supports "our goodness does not reach God". The Vulgate reads "bonorum meorum non eges", close in sense |
| Job 22:2-3 | md 483, 506; js 452, 798 | match | same / same | same list | Questions on whether man profits God: supports |
| Job 35:7-8 | same | match (35:16 padded empty, not cited) | same / same | same list | Supports |
| Is 64:6 | md 483, 506; js 452, 798 | match (RV = KJV = 64:6) | **Hebrew 64:5** / Vulgate 64:6 `[verified: TVTMS]` | same list | "todas nuestras justicias como trapo de inmundicia": says it |
| Ps 119:112 | md 266 (note only) | match (PSA 119:112) | same / **Vulgate 118:112** | Trent "Ps. cxviii. 112" (Waterworth margin) | Only used to explain Trent's numbering; the Trent sentence it marks is in the dossier. Verse (RV): "incliné ... á poner por obra tus estatutos de continuo, hasta el fin"; the Vulgate (DRA "for ever, for the reward") has the "reward" clause that RV1909 lacks |
| Zac 1:3 | md 278, 570, 583; js 88, 645, 831, 844 | match | same / same | Trent VI ch. 5 margin "Zachar. 1" (chapter only; 1:3 inferred, Ayala p. 69) | "Volveos á mí ... y yo me volveré á vosotros". **Wording gap:** Trent (Ayala) says "Convertios á mi"; RV says "volveos". The argument is about conversion preceded by grace, the Spanish verb differs from Trent's `[reading]` |
| Lam 5:21 | md 278, 570, 583; js 88, 645, 831, 837, 844, 899 | match | same / same (DRA 5:21 "Convert us, O Lord") | not in Trent's margin (dossier marks it `[inference]`) | RV "Vuélvenos, oh Jehová, á ti, y nos volveremos": same structure as Trent's «Conviertenos á tí ... y seremos convertidos»; wording gap as above |
| Joel 2 (chapter only) | md 278, 583; js 645, 837, 844 | match (Joel 2 exists; 2:12-13 is "convertíos á mí") | same / same | Trent margin "Joel 2" | Chapter only; the verse is the dossier's inference (2:12-13) `[reading]` |

## Papacy (0 references)

No Old Testament reference with book, chapter or verse in `papacy/catholic.md` or `papacy/review-page.data.js` (searched with the same alias table plus roman numerals and the Latin abbreviations). Its passages are all New Testament.

## Sola scriptura (12 references)

| Ref as written | Where | RV1909 | Hebrew / Vulgate | Document's own numbering | Use; does the text say it |
|---|---|---|---|---|---|
| Ps 119:105 | md 345, 375, 482, 513; js 341-343, 541, 742, 843 | match (file prefixes "NUN."; the dossier text drops it) | same / **Vulgate 118:105** | Formula of Concord Epitome, Latin "Ps. 119, 105" (Hebrew chapter); WCF 1.7 | "Lámpara es á mis pies tu palabra": Lutheran use as the rule of faith. The verse says the word guides; "only rule" is the Lutheran reading `[reading]` |
| Ps 119:130 | md 482, 513; js 843 | match | same / Vulgate 118:130 | WCF 1.7 proof text | "hace entender á los simples": supports clarity for the unlearned |
| Is 8:20 and 8:19-20 | md 350, 375, 384, 407, 552, 567; js 397, 427, 457, 509-510, 742, 766, 888 | match | same / same | WLC 3, WCF 1.1, 1.8 (KJV numbering) | "¡A la ley y al testimonio!": says to test teaching by the law and the testimony; the step to "all the Scripture" is Westminster's `[reading]` |
| Ps 19:1-3 | md 384; js 397, 768 | match as RV1909 numbers it (title is inside v. 1 in the file) | **Hebrew 19:2-4 / Vulgate 18:2-4** `[verified: TVTMS, DRA]` | WCF 1.1 proof text, KJV numbering | General revelation. Vv. 1-2 say it. RV v. 3 "No hay dicho, ni palabras, ni es oída su voz" reads as a negation, where KJV has "[where] their voice is not heard" `[reading]` |
| Prov 22:19-21 | md 384, 407; js 397, 537, 766 | match | same / same | WCF 1.1 | "¿No te he escrito tres veces ...?": a written teaching; the RV "tres veces" is one reading of an uncertain Hebrew word (KJV: "excellent things") `[reading]` |
| Is 59:21 | md 454, 473; js 417, 508, 813-814 | match | same / same | WCF 1.5 (l) | The Spirit and the words "no faltarán": supports the Spirit with the word |
| Os 8:12 | md 455, 473; js 462, 531, 813-814 | match | same / same | WLC 4 (g) | "las grandezas de mi ley" written: used for the Scripture's majesty; the verse says the law was written and counted as strange. Loose `[reading]` |
| Sal 119:18, 129 | md 455, 473; js 462, 543, 813 | match | same / Vulgate 118:18, 118:129 | WLC 4 (g) | Light of the Scripture: 119:18 says it. **Dossier text for 129 keeps the acrostic label "PE."** (the eBible RV file has it; the 119:105 entry drops "NUN.") |
| Sal 12:6 | md 455, 473; js 462, 544, 813 | match as RV1909 numbers it | **Hebrew 12:7 / Vulgate 11:7** `[verified: TVTMS, DRA]` | WLC 4 (h) | "palabras limpias": purity of the word, says it |
| Sal 119:140 | md 455, 473; js 462, 542, 813 | match | same / Vulgate 118:140 | WLC 4 (h) | "Sumamente acendrada es tu palabra": says it |
| Sal 19:7-9 | md 455, 473; js 462, 545, 813 | match as RV1909 numbers it | **Hebrew 19:8-10 / Vulgate 18:8-10** `[verified: TVTMS, DRA]` | WLC 4 (l) | The law that "vuelve el alma", enlightens: says it |
| 2 Mac 15:14 | md 584 only | **absent: RV1909 has no deuterocanonical books** | same as Vulgate / same (DRA 2 Mac 15:14: Onias names Jeremias praying for the people) | Apology XXI.9, same number | Lutheran text calls it "the dream taken from the Second Book of Maccabees" and uses it as Scripture testimony for the saints praying. Needs another Spanish edition if the site ever shows the verse; the dossier does not quote it |

## Summary of mismatches

Numbering mismatches between the dossiers and RV1909: none. Every reference as written resolves to the right text in RV1909 `[verified]`. The numbering differences are with other systems, and they are what D7 decides.

Mismatches of other kinds:

1. **Ps 97:7 (eucharist md 302, js 668):** the RV1909 verse says "dioses", the sentence it sits in says "ángeles" (Trent's Vulgate). Medium.
2. **Mal 1:11 (eucharist):** RV1909 "perfume" and "presente"; Trent's argument uses the Latin for sacrifice and clean oblation. The dossier quotes only «presente limpio». Low.
3. **Gn 14:18 (eucharist js 665):** the site line says "ofreció"; the RV1909 verse behind the link says "sacó". Low.
4. **Ps 51:5 (baptism):** placed on the objection side, but it is the objector's own proof of an inherited nature. Doubtful placement, no text issue.
5. **Ps 119:129 (sola scriptura js 543):** the stored text carries the acrostic label "PE.". Also Ps 19:1, 32:1, 51:1 carry the title inside v. 1 in the RV1909 file; if a verse key is the RV text, titles and acrostic labels must be stripped.
6. **Zac 1:3 and Lam 5:21 (justification):** the verb in Trent's Spanish ("convertios", "conviértenos") is not RV's ("volveos", "vuélvenos"). Not a numbering issue; the dossier already marks Lam 5:21 and the verse numbers as inference.
7. **2 Mac 15:14 and the canon lists:** not in RV1909. Book-level mentions with no verse (sola-scriptura md 155, 158, 522, 529, 539; js 402, 610, 854, 869) need no verse text.

## Where D7 matters

- **Psalm chapters (a Vulgate number would differ by 1):** Trent's own references are Ps 109:4 (110:4), 96:7 (97:7), 118:112 (119:112); the others come from Protestant documents. Under option (b), "Vulgate on Catholic pages", Westminster's printed Ps 19:7-9, 12:6, 16:2, 119:* and the Concord's Ps 32:1 would be renumbered to 18, 11, 15, 118, 31 and no longer match what those documents print. This is an argument for (a): keep each document's number.
- **"Hebrew numbering in site text" is not one thing.** RV1909 uses Hebrew chapters but KJV verses. Where they differ, "Hebrew" and "RV1909 keys" give different verses: Ps 51:5 (Hebrew 51:7), Ps 19:1-3 (19:2-4), Ps 19:7-9 (19:8-10), Ps 12:6 (12:7), and Isa 64:6 (Hebrew 64:5). If D7 (a) means chapters Hebrew and verses as RV1909, no dossier reference changes. If it means a strict Hebrew verse number, these five need a mapping (TVTMS has the rows). Ps 110:4, 97:7, 119:*, 16:2 and 32:1 are the same in Hebrew and RV1909.
- **Only chapters change under the Vulgate** (the verse number is the same as Hebrew) for Ps 110:4, 97:7, 119:*, 16:2, 32:1, and Isaiah, Joel, Malachi references are unaffected.
- **Joel and Malachi:** no reference falls in Joel 2:28-3:5 or Mal 3-4; RV1909 and the Vulgate agree with each other there.
- **Content, not numbering:** Ps 97:7 (angels in Vulgate, gods in RV1909) is the one place where choosing RV1909 for the displayed verse changes what the verse says in the argument. Needs Pedro's call or a note in the verse window, not a numbering rule.
