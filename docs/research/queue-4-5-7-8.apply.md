# Queue items 4, 5, 7, 8: log (2026-10-21)

Sources opened: Concordia Triglotta Latin (archive.org `ConcordiaTriglotta_Latin`, OCR); López de Ayala 1785 (`elsacrosantoyec00madgoog`, OCR); Waterworth (`cu31924029369760`, OCR, page headers); Lake, *Apostolic Fathers* vol. 1, Loeb 1912 (`apostolicfathers01lake`, OCR); ANF vol. 1 at newadvent.org/fathers/0109.htm; UX round 2 canvas (claude.ai/artifact/CiD9tLWApMVoskyJG2KwDV, files P1–P4 `*-05-Fuente`).

## Item 7: applied (data files)

| File | Place | Before → after | Source | Tag |
|---|---|---|---|---|
| `data/site/sources.extra.json` | `new-hampshire-1833`: `date`, `year`, `edition.year` | 1833 → 1853 | gracegems page is titled "of 1853"; `docs/research/traditions/verification-baptist-pentecostal.md` l. 53, 188; `traditions/baptist.md` l. 205; `doctrines/fingerprint-dates.md` l. 75 (the 1833 original has no surviving copy; the printed text is Brown's 1853 revision) | verified (existing files) |
| `data/raw/eucharist.content.json` | same entry (`date`, `year`, `edition.year`) and 2 prose/source strings "New Hampshire (1833)" / "Confession (1833)" | 1833 → 1853 | same | same |
| `data/site/eucharist.v2.json` | 3 strings (es prose, en prose, `source` line) | (1833) → (1853) | same | same |
| `data/site/eucharist.v2.json` | 4 locators "Tratados on John 25.12 / 26.18 / 27.5 / 30.1" | → "Tratados sobre Juan …" | Spanish title of Augustine's *In Iohannis evangelium tractatus* | editorial |
| `data/site/eucharist.v2.json` | 2 locators "Decreto on the Eucharist, cap. 1 / 3" | → "Decreto sobre la Eucaristía, cap. …" | Trent XIII title, as in the dossier | editorial |
| `data/site/eucharist.v2.json` | 2 locators "Sesión XXII (1562), Doctrine on the Sacrifice of the Mass, cap. 1 / 2" (same hybrid pattern, not named by the item) | → "Doctrina sobre el sacrificio de la Misa" | Trent XXII title | editorial |

Not touched (report): the id `new-hampshire-1833` stays (it is referenced in `docs/` and in `handoff/data/...` copies; renaming it ripples). `handoff/data/site/sources.extra.json` and `handoff/data/raw/eucharist.content.json` carry the same 1833. `eucharist.v2.json` still has many Spanish locators that are wholly English ("Homilies on John 47", "Homilies on Hebrews 17.6", "On the Lapsed 25", "Exact Exposition of the Orthodox Faith IV.13", "Expositions on the Psalms…", "On the Incarnation 17.1", "Anaphora, after the institution narrative…", "Notes on the Divine Liturgy, note 22", "Sesión 11 (4 February 1442), Bull of Union with the Copts", "Parte V (Sacrament of the Altar)", "Art. VII (Baptism and the Lord's Supper)") and one in `raw` line 3085 not checked. Not in the item; listed for the next sweep. JSON parses after the edits.

## Item 8: Ignatius, *Smyrnaeans* 6.2 and 7.2 and the Greek (mockups P2-05, P3-05, P4-05)

- Greek of 7.1 in the mockups: CONFIRMED word for word against Lake 1912 vol. 1, Greek text of IGN. SMYRN. vii (pp. ~258–260 by OCR page numbers): Εὐχαριστίας καὶ προσευχῆς ἀπέχονται, διὰ τὸ μὴ ὁμολογεῖν τὴν εὐχαριστίαν σάρκα εἶναι τοῦ σωτῆρος ἡμῶν Ἰησοῦ Χριστοῦ τὴν ὑπὲρ τῶν ἁμαρτιῶν ἡμῶν παθοῦσαν, ἣν τῇ χρηστότητι ὁ πατὴρ ἤγειρεν. The transliteration line matches it. Lake prints no variant in this sentence. [verified: OCR]
- 6.2 (context before): content CONFIRMED against Lake Greek (περὶ ἀγάπης οὐ μέλει αὐτοῖς, οὐ περὶ χήρας … ἢ διψῶντος). 7.2 (after): CONFIRMED (Lake: refrain from such men, heed prophets and above all the Gospel, "the Passion has been revealed to us and the Resurrection accomplished", avoid divisions).
- Docetism context CONFIRMED: Lake ch. 2, 4.2, 5.2 ("do not confess that he was clothed in flesh", σαρκοφόρον); the mockups' «los docetas» is supported.
- Findings for Pedro: (1) the mockup Spanish mixes two English editions. P2-05 6.2 «el preso o el liberado» follows Lake ("prisoner, or him released from prison"); ANF, the edition the mockup cites, says "of the bond, or of the free" (P3/P4 follow ANF). (2) 7.1 «tratarlo con respeto» is ANF's rendering ("treat it with respect"); the Greek is ἀγαπᾶν = "to love" (Lake: "it were better for them to have love"). If the site keeps ANF it should say so; the Greek does not say "respect". (3) ANF has no 6.1/6.2 and 7.1/7.2 numbering; the numbers come from Lake/Lightfoot. (4) Not checked here: the dates (c. 107–110, c. 140), recensions, «medicina de inmortalidad» (Eph. 20.2).

## Item 4: Eucharist correction 7 (dossier `docs/research/doctrines/eucharist/catholic.md`)

Verified, no change needed:
- Apology XXIV Latin vs Triglot Latin scan: ¶1 «nos non abolere missam, sed religiose retinere ac defendere» (and the next sentence); ¶19 (propitiatory / eucharistic species; the dossier's Latin stops at «gratias agamus», the print continues «seu gratiam referamus»: a clipped quote, not marked); ¶22 «unicum tantum in mundo fuit sacrificium propitiatorium, videlicet mors Christi»; ¶89; ¶92 (the print's «proculpa» is OCR for «pro culpa»). AC XXIV.24–27 Latin (Heb 10:10, 14). [verified: OCR, Triglot Latin]
- AC XXII.1–2 Latin («Laicis datur utraque species sacramenti in coena Domini … Bibite ex hoc omnes. Ubi manifeste praecepit Christus de poculo, ut omnes bibant») and XXII.12 (print: «solet apud nos emitti [omitti] processio»). [verified: OCR]
- Apology XXII.2 Latin (the dossier says "Latin not read"): read now; the Spanish drafted from the English matches the Latin in sense («Si Christus instituit pro tota ecclesia, cur altera species adimitur parti ecclesiae? Cur prohibetur usus alterius speciei? Cur mutatur ordinatio Christi, praesertim quum ipse vocet eam testamentum suum?»). [verified: OCR]
- Ayala p. 174, XIII can. 11 Spanish: running head "174 CONCIL. TRIDENT."; text identical to the dossier's quote (including «anticipar necesariamente la confesion sacramental habiendo confesor» and the last sentence). [verified: OCR]
- Waterworth pages (printed pages from the scan's running heads): can. 11 p. 84 (incl. "burthened", "thereupon excommunicated"); XIII ch. 1 p. 76, ch. 2 p. 77, ch. 3 and ch. 4 p. 78, ch. 5 p. 79, ch. 6 p. 80, ch. 7 pp. 80–81, can. 1–2 p. 82, can. 3 pp. 82–83, can. 6 and 8 p. 83; XXI ch. 1 p. 140, ch. 2 p. 142, ch. 3 p. 142, cann. 2–3 p. 143; XXII ch. 1 p. 153, ch. 2 p. 154–155 (the line "the victim is one and the same" is p. 155), ch. 6 pp. 156–157, cann. 1–3 p. 158, can. 4 and can. 9 p. 159 (can. 9 text confirmed), Decretum de observandis pp. 159–161. All dossier pages agree except the two below.

Proposed corrections (NOT applied: item 5 limits dossier edits to tags):
1. catholic.md l. 248: "Trento-Waterworth, pp. 76–77" for the XIII ch. 1 quote («He testified, in express and clear words… is denied») → the whole quoted passage is on p. 76 (ch. 2 starts p. 77). Change to "p. 76".
2. catholic.md l. 530: "Waterworth pp. 155–157" for XXII ch. 2 and ch. 6 → ch. 2 begins on p. 154 (heading and first lines), so "pp. 154–157".
3. catholic.md ll. 842–843 (Weak spots): "Left unchecked: Latin of Apology XXIV and AC XXII; Ayala p. 174; Waterworth page numbers" is now stale; and l. 483 "Latin not read" for Ap XXII.2 → "Latin read 2026-10-21".

Fathers' dates (dossier, PQ-4):
- Ambrose, *De mysteriis* «c. 387–391»: PARTLY. NPNF 2.10 (ccel.org/ccel/schaff/npnf210.iii.vi.html) says "The date is not certain, but may be about a.d. 387." A search result showed a BnF authority record with «vers 387-391», but the BnF page fetched gave no date. So 387 is supported, 391 is not confirmed; the range comes from `writers-latin.md` (`[verified: reuse]`). Suggest «hacia 387–391» marked unconfirmed upper end, or «c. 387» with the NPNF source.
- Cyril of Jerusalem, *Mystagogical Catecheses* «c. 350–390»: UNCONFIRMABLE as a range. Searches: Cyril was bishop c. 350–387, John II 387–417; scholars date the set to the 380s (390s if by John). The dossier's upper bound 390 does not cover the John hypothesis (390s). Keep the dispute label; suggest «c. 350–390s» or «siglo IV, a Cirilo o a Juan II».
- Chrysostom 388 (Baur): not re-checked (already `[verified: page, secondary]`).
- Ignatius c. 107–110 and Justin 148–161: already settled in open-tags-verification.md rows 1–2; not reopened.
- Other Fathers in OB sections: not swept.

## Item 5: [memory] / [snippet] tags in the five Catholic dossiers

Result of the scan: most hits are the tag legend (definitions) or history lines saying a tag was replaced (eucharist, baptism, and the history lines of the others): left untouched. Live tags changed (tags only, plus the words needed to keep the sentence true):

| File, line | Before | After | Source | Tag |
|---|---|---|---|---|
| justification l. 198 | "How much it binds Catholics is debated" `[memory in map]` | `[verified: page, secondary]` Scampini, *Teología* 108 (UCA 2012) abstract treats the JDDJ's canonical-normative value as an open question; the map's sentence is not his wording | repositorio.uca.edu.ar/handle/123456789/6949 | page, secondary |
| justification l. 205 | LCMS CTCR report 1999 `[snippet in map]` | title and year confirmed: *The Joint Declaration on the Doctrine of Justification in Confessional Lutheran Perspective*, St. Louis: CTCR, LCMS, 1999; report itself not read | resources.lcms.org/history/lutherans-and-roman-catholics-today/ (footnote 2) | page, secondary |
| justification l. 323 | same `[snippet in map]` | pointer to l. 205; still "not stated until the report is read" | same | page, secondary |
| justification l. 618 | Jeremiah II First Answer `[memory in map]` | that its chs. 4–6 treat justification by faith alone, faith/Scripture/sacraments and works: Runciman excerpt; the Answer itself not read | pravoslavieto.com/inoverie/protestantism/luther/luther_had_his_chance.htm | page, secondary |
| papacy l. 309 | Kolb–Wengert numbering 1–82 `[memory in map; unconfirmed in V A15]` | `[unconfirmable]` for Kolb–Wengert (not PD, not read); the Triglot Latin Treatise runs ¶1–82 (¶81 lost in OCR) | Triglot Latin scan, `DE POTESTATE ET PRIMATU PAPAE` | unconfirmable + OCR |
| sola-scriptura l. 469 | Augustine's date `[memory]` (stale: PQ-6 already has 396) | 396 with sources; flag: NPNF 4 (Stothert) gives about 397, Macquarie thesis 396, BiblIndex page returned 403 so I did not reopen it | open-tags row 5; ccel NPNF 4 | verified (mixed) |
| sola-scriptura l. 652 | *Aperuit illis* `[memory: title, date, content]` | read on vatican.va: motu proprio, 30 Sep 2019, n. 3 «the Third Sunday in Ordinary Time is to be devoted to the celebration, study and dissemination of the word of God»; also changed "Not fetched" to "Not used" | vatican.va EN | verified |

Not changed (not a dossier tag): papacy l. 141, Gregory the Great Ep. VIII.30, "fecha pendiente". New Advent's text (Registrum VIII.30 to Eulogius) says the Nativity baptisms of the Angli happened "in this first indiction", i.e. the letter is after Christmas 597 and within indiction 1 (to Aug 598), so 598; the exact month is not in the page. A date label «598» could replace «pendiente» once a dated edition (Norberg, CCSL 140A) confirms it.
