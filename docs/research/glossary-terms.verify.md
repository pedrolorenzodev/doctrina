# Glossary terms — verification

## Progress
- Status: done (2026-10-21). Checked `docs/research/glossary-terms.md` (100 terms) against a corpus downloaded again from scratch (not the author's scratch files).
- Done: every quoted string in the file (313) matched mechanically against the corpus; every mismatch reviewed by hand; CEC/CCC paragraph numbers, CIC canon numbers, Vatican II article numbers, CDF sections, Orthodox/Trent/Triglot section locators checked; Spanish-vs-English pairing and the AI-translation labels checked; 15 of the 17 `[not found]` terms re-searched.
- Not done: printed page numbers of the OCR sources (see "Unconfirmable"); Normae universales de anno liturgico (D17, D26) not located on vatican.va.
- Next: apply step (`docs/playbooks/verification-pass.md`, "After"); then Pedro.

Legend: CONFIRMED / WRONG / UNCONFIRMABLE, as in `docs/playbooks/verification-pass.md`.

## Method and corpus (what "verified" means here)

- Matching: both sides reduced to letters only (accents, punctuation, digits and case removed), then exact substring search over the whole corpus; where that failed, a fuzzy alignment and a manual read of the corpus window. Pages were fetched with curl and converted to text; no model summary was trusted.
- Corpus (fetched 2026-10-21): CEC (108 pages), CCC (375 pages), CIC es (whole Code) and en (all books), LG, DV, UR, SC, OE, AG (Vatican II, es and en where cited), CDF 1998 *Professio fidei* note (es, en), CDF 1998 *Il primato* (es, en), Pius XII *Divino afflante Spiritu* (es, en), *Mysterii Paschalis*, DJ (es from the Wayback 2001 capture of the vatican.va page; en from the LWF PDF), BF&M 2000 / preamble / *Fe y Mensaje Bautistas* (via Wayback: bfm.sbc.net returns 403 to curl), AG-SFT (en: Wayback capture of 2026-09-04, as the author; es: ag.org PDF), and the archive.org OCR of Schaff II, Triglot, Trento-Ayala, Trento-Waterworth, WCF-1647 (Edinburgh 1894), WCF-1880, Robertson, the 1895 Encyclical (Metallinos), the Roman Catechism (Zorita and Donovan), and Mogila's *Orthodox Confession* (1762 English, `cu31924029363094`, not read by the author).
- Not an edition error: bfm.sbc.net and ag.org block automated fetches; both were read through the Wayback copies. The author's AG-en was the same capture.

## Totals

| Group | Count | CONFIRMED | WRONG | UNCONFIRMABLE / open |
|---|---|---|---|---|
| Full definitions (author: 75) | 75 | 74 | 1 (B9) | page numbers of OCR sources (all entries that cite one) |
| Partial (author: 8) | 8 | 8 | 0 | D27 source status (see below) |
| `[not found]` (author: 17) | 17 | 13 confirmed not found | 0 | 2 found in part (A16, D24); 2 not resolvable here (D17, D26) |

Also WRONG at a lower level (cited address, not text): the DJ Spanish URL (A28, C23) is dead. And two lines in the file are judgements without a tag (C13 note, A9 Lutheran): see "Notes for the apply step".

## Wrong items

1. **B9 · regla y norma** (Lutheran). The entry labels the Epitome heading "Of the Summary Content, Rule, and Norm" and cites it as the Triglot. The Triglot prints «OF THE SUMMARY CONTENT, RULE, AND STANDARD» (Triglot Epitome, Rule and Norm, before thesis 1; in the same text "sole rule and standard", RN 1, and "only judge, rule, and standard", RN 7). "Norm" is the Kolb–Wengert rendering, not the Triglot. Correction: heading «Rule, and Standard» (Triglot); if "Norm" is wanted, cite Kolb–Wengert and say so. The same applies to the term label «regla y norma» and the word "norma" in the Latin («norma et regula», RN 7), which is correct in the Latin; only the English heading is wrong. Tag stays `[verified: OCR]` after the fix.

2. **A28 · acuerdo ecuménico** (and C23, same capture). The Spanish DJ address cited, `https://www.vatican.va/roman_curia/pontifical_councils/chrstuni/documents/rc_pc_chrstuni_doc_31101999_cath-luth-joint-declaration_sp.html`, returns 404 today (checked 2026-10-21; the English variant too). The text itself is real: the Wayback 2001 capture of that address contains DJ 5 and DJ 29 word for word as quoted (verified). Correction: cite the Wayback capture URL as the locator (the entry already says "[verified: Wayback]" but gives the dead URL as if live). Also a lead for the apply step: look for the current Holy See address of the Spanish text.

## Confirmed, with notes

- **Official-source quotes (CEC, CCC, CIC es/en, LG, DV, UR, SC, OE, AG, CDF 1998, DJ, BF&M, AG-SFT): every one is verbatim at the locator cited.** CEC and CCC paragraph numbers match for all ~70 pairs (same number in es and en, quote inside that paragraph); CIC canon numbers match (750, 751, 752, 124, 129, 131, 331, 335, 336, 416, 845, 849, 869, 920, 1246, 1247, 1331, 206); Vatican II article numbers match (LG 25, DV 7, 21, 22, UR 1, OE 7, AG 14); CDF 1998 §11 (hecho dogmático) and the primacy note §6 (A17) match. Spanish and English are always the same passage in these.
- **Same passage, es/en, but not same page file:** A5 and A15 lines mix a CEC/CCC paragraph with a Code canon on the same bullet; each quote is in the source it names. Not an error.
- **B5 Divino afflante Spiritu:** the Spanish page and the English page number the Vulgate passage differently (the entry says n. 14 es / n. 21 en, which is how the two pages print it); both quotes are verbatim and the same passage (the omitted middle `[…]` exists in both).
- **Orthodox (Philaret Q. 17; 1895 Encyclical §XV, §XVI, §XVII; Dositheus; Schaff Q. 34–35):** verbatim in the OCR; section numbers correct (§XV "first among equals", §XVI "Oecumenical Council… supreme tribunal", §XVII pseudo-Isidorian).
- **Lutheran (Triglot):** AC II, XIII, XV; Apology III and IV; FC Ep III thesis 5, RN 1, 2, 7: verbatim; the numbering of the Epitome items matches. Latin AC XIII.3 and RN 7 verbatim.
- **Reformed:** WCF I.2, I.3, I.6, I.7, VI.5, XI.1, XV.4, XVI.4, XXXI.2/3, Shorter Catechism 33, Larger Catechism 154: verbatim in WCF-1647 (OCR) and the 1880 Spanish; numbering gaps (1647 vs American) are stated correctly in B14.
- **Trent:** Ses. V can. 5, Ses. VI cap. 7 (causes), can. 10, can. 11, Ses. IV decree: verbatim (Ayala Spanish/Latin; Waterworth English). The "reato de la pena eterna" (Ayala, cap. 14 area) and Waterworth "the guilt of original sin" (Ses. V) are there.
- **Roman Catechism (A23, D8):** Zorita Spanish and Donovan English verbatim; the same source DECISIONS 2026-10-09 line 201 names for Spanish translations.
- **AI-translated Spanish:** every Spanish line that is not an official Spanish text or a public-domain printed Spanish edition carries «traducción asistida por IA, sin revisar por Pedro» (checked line by line, all entries). I read each such translation against its English/Latin: no meaning shifts found (A3, A9, A12, A20, B9, B10, B11, B13, B15, C1, C11, C16, C17, D2, D27, E1).
- **Divergent terms:** no entry puts one tradition's definition in another's mouth. The Catholic/Reformed/Lutheran/Orthodox blocks are separate and attributed; the notes in C13 and A9 are the only places where the file speaks about one tradition through another (see below).
- **DJ 29 and Annex 2A** (C11, C23): verbatim. "This contradiction to God is as such truly sin" is DJ 29.
- **Partial (8):** A6, A15, A18, D7, D12, E2, E3 confirmed as stated (the passage does what the entry says it does and no more). D27: see below.

## `[not found]` terms: re-search

| Term | Verdict | What I searched and found |
|---|---|---|
| A16 verdaderamente episcopal | Found in part | CDF 1998, *El primado del sucesor de Pedro en el misterio de la Iglesia* §6 (vatican.va, `rc_con_cfaith_doc_19981031_primato-successore-pietro_sp.html`): «una potestad verdaderamente episcopal, no sólo suprema, plena y universal, sino también inmediata, sobre todos, tanto pastores como los demás fieles» (en: "a truly episcopal power, not only supreme, full and universal, but also immediate, over all pastors and other faithful"). It glosses the phrase; it does not define it. The author searched CEC, CIC and LG only. Same document already cited in A17. |
| A17 derecho divino / humano | Not found confirmed | CIC 129 §1 and CIC 24 §1 use "institución divina" / "derecho divino"; CEC has no definition. CDF §6 stands as the author gave it. |
| A19 sede vacante (Roman see) | Not found confirmed | CIC 335 and 416 as given. |
| A25 anatema | Not found confirmed | "anatema/anathema": zero hits in CEC, CCC, CIC es/en, LG, DV. The 1983 Code does not use it. |
| A28 acuerdo ecuménico | Not found confirmed (it is Doctrina's label) | — |
| B8 varones apostólicos | Not found confirmed | Only DV 7 and DV 18 and CEC 76 use it. |
| B15 competencia del alma, B16 sacerdocio de los creyentes | Not found confirmed | BF&M 2000 articles, *Fe y Mensaje Bautistas*, AG-SFT: only the preamble sentence. |
| C7 formalmente justos | Not found confirmed | Only Ses. VI can. 10 (Ayala); not in CEC. |
| C10 reato | Not found confirmed | Zero hits for "reato" in CEC, CIC, LG, DV, SC. |
| C16 / C17 (not in the 17, checked as a side) | Not found confirmed | "condign", "fides formata", "fe formada": zero hits in CEC, CCC, CIC, Trent (Ayala, Waterworth text). Waterworth's editorial introduction to Ses. VI contains "de condigno"; it is the editor's, not Trent's. |
| C21 perseverancia final | Not found confirmed | CEC/CCC 2016, 2849 (use only); Trent cap. 13 not searched for a definition. |
| D17 Vigilia Pascual | Not resolvable here | CEC has no definition (searched "vigilia pascual", "madre de todas las vigilias", "noche santa"). *Mysterii Paschalis* on vatican.va (es, en, la, it) is only the motu proprio text; the *Normae universales* themselves are not on that page. Still open. |
| D21 especies | Not found confirmed | CEC/CCC: uses only. (Mogila Q. 107, 1762 English, also uses "the Species only remaining", as use.) |
| D24 por vivos y difuntos | **Found in part (Trent)** | Ses. XXII cap. 2: «Quare non solum pro fidelium vivorum peccatis, poenis, satisfactionibus et aliis necessitatibus, sed et pro defunctis in Christo, nondum ad plenum purgatis, rite, juxta Apostolorum traditionem, offertur» (Ayala OCR); English: "Wherefore, not only for the sins, punishments, satisfactions, and other necessities of the faithful who are living, but also for those who are departed in Christ, and who are not as yet fully purified, is it rightly offered, agreeably to a tradition of the Apostles" (Waterworth, Ses. XXII, ch. 2). This is the source of the phrase and says what the sacrifice is offered for; CEC 1371 cites it (DS 1743). The entry calls the phrase "a set phrase of Trent's canon" and uses only CEC 1371. |
| D26 tiempo pascual | Not resolvable here | CEC and CIC 920 §2 use it; the Normae universales are not on vatican.va in the pages I could fetch. |
| D28 credobautista | Not found confirmed | "credobap-", "credobaut-", "paedobap-": zero hits in BF&M, Fe y Mensaje, AG-SFT (en, es), CEC. |
| E4 las dos espadas | Not found confirmed | CEC, CCC, CDF primacy, LG: only the sword of Mary, Peter's sword, Is 2:4. |

Also from the "Next agent" leads in the file:
- **D19 epíclesis, Orthodox.** Mogila, *Orthodox Confession* Part I, Question 107 (1762 English, archive.org `cu31924029363094`): "…the Substance of the Bread and the Substance of the Wine are changed into the very Substance of the very Body and Blood of Jesus Christ, by the operation or working of the Holy Ghost, whose Power and Influence let the Priest invoke in these Words… O Lord, send down from Heaven thy Holy Spirit upon us, and upon these Gifts now lying before thee; and make this Bread the precious Body of thy Christ… changing them by thy Holy Spirit." It describes the invocation and its effect; it does not use the word "epíclesis". The Orthodox cell is therefore "describes, does not name", not `[not found]`. Edition note: the 1762 English translation of the 1640 text (Overbeck's introduction is in the Robertson volume's front matter), not a critical edition.
- **A22 patriarcado, Orthodox.** Robertson (Dositheus): searched "patriarch is / are / means"; no defining sentence. Mogila (1762 English): only the title of the Patriarch of Jerusalem in the preface. Still `[not found]`.

## Unconfirmable

- **Printed page numbers in OCR sources** (Schaff II p. 260, 263, 270, 448, 451–452; Triglot pp. 43, 48, 49, 205, 777–779; Trento-Ayala pp. 44, 71–72, 93, 164; Trento-Waterworth pp. 19, 34–35, 45–46, 79; WCF pp. 57, 59–60): in the OCR the page number is a stray line, so I could confirm only a few mechanically (Schaff II p. 263 and 270, Waterworth p. 34 and 35 agree). The rest are not contradicted but cannot be confirmed from the OCR text. Chapter, canon, article and question numbers, which carry the locator, are confirmed. Where the two languages face each other (Schaff, Triglot), the English and the Latin of one passage can sit on facing pages (e.g. Triglot AC XIII.3: Latin p. 48, English p. 49 as the entry already says).
- **Dossier-only quotes** (`[verified in dossier]`: A3 es, A20 es, A21 *Ut unum sint* 94, B10 es, A25 López de Ayala rendering, C10 Ayala can. 5 wording, D27 Oros): not re-read in the sources; I checked only that Ayala's Spanish and Latin for Trent V can. 5 and the Latin of FC RN 7 exist in the corpus (they do).
- **Edition status of AG-SFT and BF&M texts read through Wayback:** same content as the official pages as of the capture; not a live official fetch.

## Notes for the apply step (not errors of fact)

1. **D27 Oros.** The Oros of 1755/56 (Oros of the Holy Great Church of Christ) is quoted correctly: the sentence "We receive those who come over to the Orthodox faith, who were baptized without being baptized, as being unbaptized…" is on the cited oodegr.com page (Metallinos' appendix II). But the Oros is not in the list of Orthodox texts of DECISIONS 2026-10-15 (councils; Crete's list; 17th-century confessions; Philaret) and the copy is a website transcription. Pedro should decide if it counts as an official Orthodox text for the window or only for the Baptism debate layer.
2. **C13 note.** «the Reformed confession rejects the distinction without using the words» is an inference about WCF XV.4 and carries no `[inference]` tag; it is also one tradition described through its text for another tradition's term. Suggest tagging `[inference]` or removing; the WCF quote itself is verbatim.
3. **A9 Lutheran.** AC XV.3 does not define "tradición"; it states an evaluation of «tradiciones humanas». The entry says so in its parenthesis. It is the author's choice to fill the Lutheran cell with it; mark as use, not definition, or leave `[not found]`.
4. **A23 Iglesia militante.** The Roman Catechism (1566) is the Catholic source; the entry labels it "a universal catechism of the Church". DECISIONS 2026-10-15 lists the universal magisterium (CEC, councils, CIC, Holy See documents), and 2026-10-09 line 201 names Zorita's Roman Catechism as a Spanish translation; the Roman Catechism is not itself in the 2026-10-15 list. Pedro's call.
5. **Apology numbering.** DECISIONS 2026-10-15 asks for Triglot numbering with Kolb–Wengert in parentheses. The Apology entries cite "Art. III / IV (Triglot numbering), p." without the paragraph number or the K–W parenthesis.
6. **B13.** The 1880 Spanish volume contains the Shorter Catechism Q. 88 («Qué son los médios exteriores y ordinários por los cuales Cristo nos comunica los benefícios de la redención…», p. 88 area): an official-edition Spanish for the "ordinary means" sentence, instead of the AI translation of Larger Catechism 154. Not verified word for word against the 1647 SC.
7. **C1.** Baptist `«principios de su gracia»` (es) vs "principles of His righteousness" (en): confirmed, the two editions really differ (bfm.sbc.net, Wayback). Already flagged by the author.

## Wrong items (consolidated)

- B9: English heading «Rule, and Standard» in the Triglot, not "Rule, and Norm" (Triglot, FC Epitome, RN, p. 777).
- A28 / C23: Spanish DJ URL dead (404 on 2026-10-21); cite the Wayback capture of 2001-02-16 as the locator.

## Unconfirmable (consolidated)

- OCR printed page numbers (see above).
- D17 and D26: the Normae universales de anno liturgico not found online here.
- Dossier-only quotes.
