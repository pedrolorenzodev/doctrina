Status: draft, NOT verified by Pedro

# Verification of session A edits: english-quotes.md (D1) and citation-excerpts-2.md (A2)

Checked 2026-11-01 by an independent verifier (Sonnet) in the same tree. Files checked: `docs/research/sources/english-quotes.md` (section «Added by session A», 154 records; earlier part: corrected records) and `docs/research/sources/citation-excerpts-2.md` (28 records with `correction`). Nothing in the repo was edited except this file. Scripts and fetched pages are in the verifier's scratchpad (outside the repo); method as in `docs/research/night-2026-11-01/verification-codex-a2-d1.md`.

## Progress

- Step 1 (D1 «Added by session A», 145 done records, 225 excerpts, 56 source URLs): DONE. All 56 URLs fetched (HTTP 200). Every fragment segment found on its page (with whitespace, quote-style and footnote-marker normalisation) except spacing artefacts listed below. Locators checked by position (CEC paragraph numbers, section numbers, canon numbers): 1 wrong (GV), 3 Pastor aeternus page locators checked against OCR heads: 2 wrong. Word counts: 3 over about 40 words, 2 borderline at 41. 59 fragments end mid-sentence without `[…]`. 
- Step 2 (alignment sample): DONE. 39 records read against the registry Spanish (32 with an id ending in an even digit among the first 60 done, plus NEP, CDF98, CDFP68, LG22, SC55, UUS95, PF1989). 38 aligned, 1 mismatch (UUS95, 3rd excerpt).
- Step 3 (9 skipped records): DONE. JP89 and JP91 reasons CONFIRMED; CIC212 reason WRONG (the official English page for Book II cann. 208-329 exists and contains can. 212); FLO x5 and CR38 UNCONFIRMABLE (licence and edition statements not checkable on the Holy See site).
- Step 4 (corrections in D1's earlier part): DONE. 11 Trent records: words found in Waterworth 1848, frame faithful in 10, 1 WRONG use of `[…]` (T13can9); two further Trent canons left as bare condemned propositions (T13can4, T21can1). Seven named records (CEC1259, CEC1269, CEC1371, LSAII_4_10, LTr9, LTr23, O1895encyclicalXVI): all CONFIRMED. 87 `clipped mid-clause` records: text before `[…]` unchanged in all 87; continuation in the source confirmed for 86; 1 WRONG (RWCF29_2: the page prints a full stop, so `[…]` is not honest).
- Step 5 (A2 corrections, 28 records): DONE. 26 of 28 corrected texts are in their sources and end completely (7 Lutheran on BookOfConcord.org, 17 Westminster on the page-level OCR and, for RWCF29_1, RWCF29_4, RWLC173 and RWSC97, page images, 3 vatican.va, OPhilaret18 in Schaff); RWLC173 locator CONFIRMED (pp. 206-207, leaves n209-n210); Mogila records CONFIRMED against the scan image (leaf n8) but the A2 «Traps» list still says `first printed 1762`. WRONG: RWCF29_4 (English punctuation differs from the 1894 page), RWSC97 Spanish (comma, accent, misprint), the A2 Traps line, RWCF29_4 `pp. 94`.
- Final lists («Wrong items», «Unconfirmable») at the end of the file: DONE.

Legend: CONFIRMED (string and locator found as stated) / WRONG (needs a correction, given with its source and the tag it should get) / UNCONFIRMABLE (could not be settled, reason given).

Method (step 1): each `sourceURL` fetched with `curl -sL -A "Mozilla/5.0" -m 60`; HTML converted to text (scripts, styles and `<sup>` removed; `(110)`, `[ 20 ]`, `(8*)` footnote markers removed; whitespace, curly quotes and dashes normalised); each fragment split on `[…]` and every segment searched as an exact string; a second pass squeezed spaces before punctuation and compared again; a third (alphanumeric-only) pass was used only to classify misses. Locator test: the fragment position must lie after the marker of paragraph N (CEC: ` N ` before a capital; conciliar and papal texts: `N.` at paragraph start; CIC: `Can. N`) and before the next marker. Order test: `[…]` segments appear on the page in the order given, and a `[…]` hides a real gap.

## 1. D1 «Added by session A»: the 145 done records

### 1.1 Strings and tags

CONFIRMED: every segment of every fragment of the 142 non-Pastor-aeternus done records is on its cited Holy See page, in the order given, with the footnote markers removed. Tag text («verified: vatican.va official English HTML; … exact string … checked») is supported for the string; the alignment part is judged in step 2.

Exceptions that are CONFIRMED only with a typographic defect (the words are on the page, the text as written has a character the page does not have):

| id (excerpt) | defect | correct text |
|---|---|---|
| CEC1353 (2nd) | stray space before `)` | `(or the power of his blessing) on the bread and wine` |
| UUS88 (2nd) | stray space before the full stop | `servus servorum Dei.` |
| UUS94 (2nd) | stray spaces inside `( episkopein )` and before the comma | `"keeping watch" (episkopein), like a sentinel` |
| VD19 (1st) | stray space before the full stop | `that of inspiration.` |
| VD29 (1st) | stray space before the full stop | `the life of the Church.` |
| EdE13 (1st) | stray space before the comma | `a sacrifice in the strict sense, and not only in a general way` |
| CDFP7 (1st) | stray space before the comma | `a primacy of honour, or be conceived` |
| GV (1st) | spaces after the opening quotation marks and before the full stop; curly closing quote | page: `"I baptize you in the name of the Creator…" and "In the name of your dad and mom…we baptize you."` |
| SC55 (1st) | the first `[…]` stands where nothing is omitted: the page reads `remaining intact , communion` (a stray space in the page, no words) | `remaining intact, communion under both kinds may be granted when the bishops think fit […] in cases to be determined by the Apostolic See` (no `[…]` after `intact`) |
| CEC582 (2nd) | a closing quotation mark is added after `clean.)`; the page continues `clean.). . . What comes out of a man is what defiles a man` inside the same quotation | end `…(Thus he declared all foods clean.) […]` without inventing the closing quote |
| CEC2653 (1st, 2nd) | inner quotation marks written as `"` where the page has `'` (the Catechism quotes a quotation); harmless but not verbatim | cosmetic, no change needed if the editor accepts it |

### 1.2 Locators

All CEC paragraph numbers, all conciliar and papal section numbers, and all CIC canon numbers contain the fragments they are cited for, except:

| id | stated | correct | evidence |
|---|---|---|---|
| GV | `Introduction` (locator, `at` and `sourceLocator`) | `Presentation` (the unnumbered opening section) | On https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_ddf_doc_20240202_gestis-verbisque_en.html the page opens `Note GESTIS VERBISQUE On the Validity of the Sacraments Presentation In their January 2022 Plenary Assembly …` and the sentence `instead of using the established formula for Baptism, formulas such as the following were used: "I baptize you in the name of the Creator…" …` is in that first section; the heading `Introduction` and `1.` start about 3,500 characters later |
| CEC2653 | `at` `2653–2654`, sourceLocator `n. 2653` | both fragments are in n. 2653 (2654 starts after them) | harmless: `at` is a range, sourceLocator is right |
| CIC941 | `at` `941 y 944` | the fragment is canon 944 §1 (sourceLocator says so) | consistent with the registry id covering two canons; CONFIRMED |

### 1.3 Pastor aeternus (3 records, OCR of Schaff vol. II, `creedschristendo02scha.txt`)

The text is the whole-item OCR; page boundaries are read from the running heads (`… 269` and `270 SYMBOLA ROMANA`), each page printing Latin first and English below it.

| id | words in OCR | locator | verdict |
|---|---|---|---|
| PA3can | found: `If, then, any shall say that the Roman Pontiff has the office mere- ly of inspection or direction, and not full and sujDreme power …` (glyph `sujDreme` read as `supreme`, hyphen joins) up to `… both over each and all the` / next page `churches, and over each and all the pastors and the faithful : let him be anathema.` | pp. 265–266 CONFIRMED: English begins on p. 265 (before the head `266 SYMBOLA ROMANA`), `churches` and the anathema are on p. 266 | WRONG (minor): the OCR prints `faithful : let him be anathema` (colon), the record writes `[…]; let him be anathema.` Correct: `… over each and all the churches […]: let him be anathema.` Tag stays `[unverified: …]`, correct as written. 94+5 = 99 words, under the public-domain 120 limit. |
| PA4conv | found, in order: `sometimes as- sembling oecumenical Councils, or asking for the mind of the Church scattered throughout the world` … (the English line breaks at `de-` at the bottom of the page) … `fined as to be held those things which with the lielp of God they had recognized as conformable witli tiie sacred Scriptures and Apos- tolic traditions.` (glyph errors `lielp`, `witli`, `tiie` read as `help`, `with`, `the`) | `p. 269 by the OCR running head`: WRONG. The first segment is on p. 268 (it comes before the head `DOGMATIC DECREES OF THE VATICAN COUNCIL. 269`), only `defined as to be held …` is on p. 269. Correct: `pp. 268–269` | tag `[unverified]` CONFIRMED. 41 words (public domain, fine). |
| PA4char | found: `This gift, then, of truth and never-failing faith was conferred by heaven upon Peter and his suc- cessors in this chair, that they might perform their high office for the salvation of all` | `p. 270`: WRONG. The sentence is before the head `270 SYMBOLA ROMANA`, so it is on p. 269. Correct: `p. 269` | WRONG: ends `in this chair` with no `[…]` while the sentence continues `, that they might perform their high office …` (clipped quote). Correct: `… upon Peter and his successors in this chair […]` or extend to `…for the salvation of all`. Tag `[unverified]` CONFIRMED. |

### 1.4 Word counts (whitespace split; limit about 40 words for Holy See texts, F7)

| id (excerpt) | words | verdict |
|---|---|---|
| DV5 (1st) | 45 | WRONG: over the limit; cut to about 40 (end earlier at a clause with `[…]`) |
| UUS88 (3rd) | 42 | WRONG: over the limit |
| LG25 (1st) | 42 (segments 30 + 12) | WRONG: over by 2; trim |
| CEC1346 (1st) | 41 | borderline; trim one word or accept |
| DV9 (1st) | 41 | borderline; trim one word or accept |

All other excerpts are 40 words or fewer in total. The word-count test is on the text without `[…]`.

### 1.5 Fragments that end without `[…]` (the clip rule of the first verification)

The rule applied in the earlier part of D1 (a fragment that stops inside a clause ends with `[…]` or at the source's own punctuation) is not applied in the new section. 59 excerpts end where the page continues with a comma, semicolon, `and`, `whose`, `which`, a dash or a new clause, and 20 end at a sentence end of the page but without the full stop (this second group only lacks a full stop; harmless).

CLIPPED (add ` […]` or extend to the page's own punctuation): CEC818 (both), CEC2041 (2nd), CEC2653 (1st), CEC1094, CEC977, CEC1428, CEC1085 (2nd), CEC1106, CEC1336 (both), CEC1346 (2nd, ends `"one single act of worship"` where the page goes on with `"; The Eucharistic table…`), CEC1348, CEC1353 (both), CEC1412, CEC1414, CEC582 (1st), LG10, LG22 (3rd), LG23 (2nd), UR3 (3rd), UR22, DV4, DV7, DV8 (both), DV10 (3rd), DV11 (1st), DV22 (2nd), SC55, OE5, OE6, UUS88 (1st, 3rd), UUS94 (2nd), UUS96, VD17, VD46, MF46 (both), EdE26, SCa13, SCa48, CDFP4 (1st), CDFP6 (2nd), CDFP7 (2nd), CDFP10, CDFP11 (both), ME2, ME3, CDF98 (4th), CDF11, DAS (3rd, 4th, 5th), CIC833, PA4char.

Source continuation for the ones where the cut removes a qualifying clause (examples): CDFP11 (2nd) ends `or objectively calls for it` and the page continues `", as in the case of the Churches which are not in full communion with …`; ME2 ends `restricted to matters of faith and morals` and continues `, which is present when the whole People of God unhesitatingly holds a…`; CDF11 ends `the sacrificial nature of the eucharistic celebration` and the page goes on `;the foundation of the Church by the will of Christ;the doctrine on the primacy …` (a list item, the fragment hides that it is one item of a list); DAS (3rd) ends `confirmation of this same doctrine by the original texts` and continues `or the having recourse on any and every occasion to the aid of these …`.

Ends at the page's own full stop but written without it (benign): CEC403 (2nd), CEC405, CEC1346 (1st), LG18 (3rd), UUS90 (2nd), UUS95 (3rd), UUS97 (3rd), CDFP2, CDFP4 (2nd), CDFP5, CDFP68 (2nd), CDF98 (1st, 2nd, 3rd), CDF5, CIC760, CIC767, CIC825, CIC844, CIC941.

Not clipped: SRX (3rd) ends `Peter has spoken through Leo'` where the page closes the quotation and a footnote follows.

## 2. Alignment sample (39 records)

Sample: the done records among the first 60 of the list whose id ends in 0, 2, 4, 6 or 8 (CEC552, CEC818, CEC834, CEC838, CEC1444, CEC2246, CEC66, CEC76, CEC108, CEC138, CEC1094, CEC1992, CEC980, CEC1128, CEC1212, CEC1426, CEC1428, CEC1446, CEC1106, CEC1336, CEC1346, CEC1348, CEC1412, CEC1414, CEC1418, CEC582, LG10, LG12, LG14, LG16, LG18, LG20) plus LG22, NEP, CDF98, CDFP68, SC55, UUS95, PF1989 (39 in all; the even-digit rule yields 32, more than the 25 asked). The Spanish `es.text` of each was read from `src/content/registry/citations.ts` (read-only), and each English excerpt compared with the Spanish fragment it should translate.

WRONG:

| id | problem | correct English |
|---|---|---|
| UUS95, 3rd excerpt (`If disagreements in belief and discipline arose among them, the Roman See acted by common consent as moderator`) | Not the counterpart of the Spanish fragment `«contra la voluntad de unos y otros, lo que debía ser un servicio pudo manifestarse bajo una luz bastante distinta»`. It is another quotation of the same §95 (`For a whole millennium Christians were united in "a brotherly fraternal communion of faith and sacramental life ... If disagreements … moderator"`). The Spanish quotation is the one from the address to Patriarch Dimitrios I a few lines later. | `for a great variety of reasons, and against the will of all concerned, what should have been a service sometimes manifested itself in a very different light` (https://www.vatican.va/content/john-paul-ii/en/encyclicals/documents/hf_jp-ii_enc_25051995_ut-unum-sint.html, §95; 26 words). Keep the tag; the Spanish fragment `«el Obispo de Roma pertenece a su «colegio» …»` also has an English counterpart in §95 (`The Bishop of Rome is a member of the "College", and the Bishops are his brothers in the ministry`) that is not given. If the old sentence is wanted it is a different Spanish fragment and must not sit in this record's pairing. |

CONFIRMED as the same passage (the other 38). Notes, not defects:

- Partial coverage, stated by the record's own `alignment` field: only the Spanish fragments with a counterpart are paired. Not paired: CEC552 `«Piedra viva»`; CEC834 ok; LG22 Spanish fragments 4 and 5 (`No hay concilio ecuménico…`, `Ya la más antigua disciplina…`); CDF98 `«la doctrina sobre el primado y la infalibilidad…»` and `«la inerrancia de los textos sagrados inspirados»`; CDFP68 the first Spanish fragment (`El Episcopado y el Primado…`); UUS95 the `«vicarios y legados»` fragment.
- PF1989: the English `which the Church […] sets forth to be believed as divinely revealed` puts the `[…]` exactly where the Spanish keeps `mediante un juicio solemne o mediante el Magisterio ordinario y universal`; same sentence, but the clause that the Spanish carries is the one the English drops. Acceptable as a partial; flag if a bilingual pair is shown side by side.
- CDF98 4th excerpt `the legitimacy of the election of the Supreme Pontiff or of the celebration of an ecumenical council` is wider than the Spanish `«la legitimidad de la elección del Sumo Pontífice»` (the `or of the celebration of an ecumenical council` part has no Spanish counterpart in the registry text).
- CEC1426: the English is a longer sentence than the Spanish fragment `«a fin de que sirva de prueba…»`; the Spanish clause is the last part of it. Same passage.

## 3. The 9 skipped records

Fetched 2026-11-01 with the same curl settings.

| id | stated reason | verdict | evidence |
|---|---|---|---|
| JP89 | English audience page of 13 September 1989 is an empty shell («PDF generation in progress», only DE/ES/FR/IT) | CONFIRMED | https://www.vatican.va/content/john-paul-ii/en/audiences/1989/documents/hf_jp-ii_aud_19890913.html returns HTTP 200, 32,584 bytes of HTML, but the text of the page is only the site menu, `PDF generation in progress..... DE - ES - FR - IT .` and the footer (about 570 characters of text, no audience). The Spanish page (`/es/audiences/1989/...`) has the text (`El Espíritu Santo y la Eucaristía`), so the Spanish registry source exists and the English one does not. |
| JP91 | same, 30 January 1991 | CONFIRMED | https://www.vatican.va/content/john-paul-ii/en/audiences/1991/documents/hf_jp-ii_aud_19910130.html: HTTP 200, same shell, `PDF generation in progress..... DE - ES - FR - IT .`, no body text. |
| CIC212 | «The official English Code on vatican.va has no page for cann. 208–223 (its English index lists Book II only for cann. 204–207, 330–367, 368–430, 431–459, 731–746; the URL pattern cic_lib2-cann208-223_en.html returns 404)» | WRONG (the skip is not justified) | The 404 is true (`.../eng/documents/cic_lib2-cann208-223_en.html` returns 404; so does `cann224-231`). But the English index https://www.vatican.va/archive/cod-iuris-canonici/cic_index_en.html lists Book II also as `cic_lib2-cann208-329_en.html` (linked through anchors `#TITLE_I.` … `#TITLE_V.`), `cann460-572`, `cann573-606`, `cann607-709`, `cann710-730`. https://www.vatican.va/archive/cod-iuris-canonici/eng/documents/cic_lib2-cann208-329_en.html returns HTTP 200 (71 KB) and prints `Can. 212 §1. Conscious of their own responsibility, the Christian faithful are bound to follow with Christian obedience those things which the sacred pastors, inasmuch as they represent Christ, declare as teachers of the faith or establish as rulers of the Church.` and `§3. According to the knowledge, competence, and prestige which they possess, they have the right and even at times the duty to manifest to the sacred pastors their opinion on matters which pertain to the good of the Church …`. Counterparts of the two Spanish fragments of the registry (`«todo aquello que los Pastores sagrados … establecen como rectores de la Iglesia»`, `«el derecho, y a veces incluso el deber»`) exist in canon 212 §1 and §3. Correct the reason and do the record: fragment 1 `those things which the sacred pastors, inasmuch as they represent Christ, declare as teachers of the faith or establish as rulers of the Church` (c. 212 §1, 24 words); fragment 2 `they have the right and even at times the duty` (c. 212 §3, 10 words); tag `[verified: vatican.va official English HTML …]` once both strings are re-matched. The stated list of Book II pages in the skip reason is also wrong. |
| FLO, FLOpat, FLOlae, FLOexs, FLOcd | no dated English edition with a clear licence found; Tanner (Georgetown 1990) is in copyright or web transcriptions of unnamed provenance; the Spanish is from Mansi; for FLOcd, vatican.va has Cantate Domino in Latin only | UNCONFIRMABLE | A web search for the bulls on vatican.va returned no Holy See English page and no public-domain dated edition; it also returned a 2024 commercial translation (Curtin, Dalcassian) and Wikipedia pages of unknown provenance. The claims about Tanner's copyright and that vatican.va has no English text of the Florence bulls could not be confirmed or refuted from the Holy See site in this pass (the site has no catalogue of conciliar decrees to search). Nothing in the record is asserted as a quote, so nothing to correct; the reason is only an admission of not done. |
| CR38 | no English edition identified in this pass (candidates McHugh-Callan 1923, Donovan 1829); the registry Spanish is the 1833 Zorita translation | UNCONFIRMABLE | Not checked in this pass: whether the two candidate editions exist as dated scans. The statement is an honest «not done»; it makes no factual claim about a source text. |

## 4. Corrections in D1's earlier part

### 4.1 The 11 Trent canon records (Waterworth 1848, `TheCanonsAndDecrees.txt`)

Method: each segment between `[…]` matched in the Waterworth text with line-end hyphens, spaces and footnote letters ignored (alphanumeric comparison), then the canon read in context to see which words each `[…]` hides and whether `; let him be anathema.` is the canon's own ending. The `correction.textBeforeCorrection` of every record is contained in the current text.

| id | canon in Waterworth | verdict |
|---|---|---|
| T6c20 | Session VI, Canon xx: `If any one saith, that the man who is justified and how perfect soever, is not bound to observe the command- ments of God and of the Church, but only to believe ; as if indeed the Gospel were a bare and absolute promise of eternal life, without the condition of observing the commandments ; let him be anathema.` | CONFIRMED: full canon, no `[…]`, words identical |
| T6can11 | Session VI, Canon xi: `… and is inherent in them ; or even that the grace, whereby We are justified, is only the favour of God ; let him be anathema.` | CONFIRMED: `[…]` stands for the real omitted clause `; or even that the grace … is only the favour of God`, frame complete |
| T7sacr7 | Session VII, sacraments, Canon vii: `… always, and to all men, even though they receive them righdy, but (only) sometimes, and to some persons ; let him be ana- thema.` | CONFIRMED: `[…]` stands for `even though they receive them rightly, but (only) sometimes, and to some persons` |
| T7b3 | Session VII, baptism, Canon iii | CONFIRMED: complete canon |
| T7b4 | Session VII, baptism, Canon iv | CONFIRMED: complete canon |
| T7b10 | Session VII, baptism, Canon x (`If any saith`, as printed) | CONFIRMED: complete canon |
| T22can | Session XXII, Canon i (`… that Christ is given us to eat ; let him be anathema.`) | CONFIRMED: complete canon; locator `XXII 1, 3 y 4` is the registry's, the quoted canon is canon 1 |
| T7b7 | Session VII, baptism, Canon vii: `… made debtors but to faith alone, and not to the observance of the whole law(k) of Christ ; let him be anathema.` | CONFIRMED: complete canon (footnote letter `(k)` omitted; ` of Christ` was added by the edit and is in the source) |
| T7b13 | Session VII, baptism, Canon xiii | CONFIRMED: complete canon, both limbs joined by `or, that it is better …`, as in the source |
| T7sacr9 | Session VII, sacraments, Canon ix | CONFIRMED: complete canon |
| T13can9 | Session XIII, Canon ix: OCR prints `If any one denieth, that all and each of Christ's faithful of both sexes are bobnd, when they hate attained to years of discretion, to communicate every year, at least at Easter, in accordance with the precept of holy Mother Church ; let him be anathema.` | WRONG: both `[…]` stand for words that the page prints, not for omissions: the first hides `bound, when they have attained to years of discretion,` (OCR `bobnd`, `hate`), the second hides `in accordance with the precept of holy Mother Church`. The first hides the very word that carries the canon («are bound to communicate»). A `[…]` used for illegible OCR claims an omission that is not one. Correct: `If any one denieth, that all and each of Christ's faithful of both sexes are bound, when they have attained to years of discretion, to communicate every year, at least at Easter, in accordance with the precept of holy Mother Church; let him be anathema.` (https://archive.org/details/TheCanonsAndDecrees, Waterworth 1848, Session XIII canon ix; OCR text read, page image not), tag `[unverified: OCR glyph errors in «bound» and «have»; page image not collated]` until the page image is read; or keep `[…]` only for `in accordance with the precept of holy Mother Church`. |

Same defect class, not in the earlier list of 11 (condemned proposition without frame, so it reads as Trent's own claim; found while scanning the earlier part):

| id | what the record says | canon | correct wording / tag |
|---|---|---|---|
| T13can4 | `only during the use, whilst it is being taken […]` | Session XIII, Canon iv: `If any one saith, that, after the consecration is completed, the body and blood of our Lord Jesus Christ are not in the admirable sacrament of the Eucharist, but (are there) only during the use, whilst it is being taken, and not either before or after ; and that, in the hosts, … which are reserved or which remain after communion, the true body of the Lord remaineth not ; let him be anathema.` (OCR line break `be- fore`) | give the frame: `If any one saith, that, after the consecration is completed, the body and blood of our Lord Jesus Christ are not in the admirable sacrament of the Eucharist, but (are there) only during the use, whilst it is being taken […]; let him be anathema.` Tag unchanged ([verified], same scan). |
| T21can1 | `all and each of the faithful of Christ ought to receive both species of the most holy sacrament of the Eucharist […]` | Session XXI, Canon i: `If any one saith, that, by the precept of God, or, by necessity of salvation, all and each of the faithful of Christ ought to receive both species of the most holy sacrament of the Eucharist ; let him be anathema.` | `If any one saith, that, by the precept of God, or, by necessity of salvation, all and each of the faithful of Christ ought to receive both species of the most holy sacrament of the Eucharist; let him be anathema.` The `[…]` is also unwarranted: only the frame `; let him be anathema` follows. Tag unchanged. |

### 4.2 The seven named records

| id | source read | verdict |
|---|---|---|
| CEC1259 | https://www.vatican.va/archive/ENG0015/__P3M.HTM n. 1259: `For catechumens who die before their Baptism, their explicit desire to receive it, together with repentance for their sins, and charity, assures them the salvation that they were not able to receive through the sacrament. 1260 …` | CONFIRMED: ends at the page's full stop; 28 words; first words of the sentence (`For catechumens who die before their Baptism,`) are not quoted, as the fragment begins at `their explicit desire` |
| CEC1269 | https://www.vatican.va/archive/ENG0015/__P3N.HTM n. 1269: `Having become a member of the Church, the person baptized belongs no longer to himself, but to him who died and rose for us. From now on …` | CONFIRMED |
| CEC1371 | https://www.vatican.va/archive/ENG0015/__P41.HTM n. 1371: `The Eucharistic sacrifice is also offered for the faithful departed who "have died in Christ but are not yet wholly purified," so that they may be able to enter into the light and peace of Christ: Put this body anywhere! …` | CONFIRMED: `[…]` is honest (the page continues with a colon and a long quotation) |
| LSAII_4_10 | https://bookofconcord.org/smalcald-articles/ii/of-the-papacy/ `10 This teaching shows forcefully that the Pope is the very Antichrist, who has exalted himself above, and opposed himself against Christ because he will not permit Christians to be saved without his power, which, nevertheless, is nothing, and is neither ordained nor commanded by God. 11 …` | CONFIRMED: ends at the page's full stop |
| LTr9 | https://bookofconcord.org/power-and-primacy/treatise-compiled-at-smalcald/ `9 … Christ sends forth His disciples on an equality, without any distinction [so that no one of them was to have more or less power than any other], when He says: As My Father hath sent Me …` | CONFIRMED: the bracket is the page's own; `[…]` honest (`, when He says: …` follows) |
| LTr23 | same page, `23 In all these passages Peter is the representative of the entire assembly of apostles [and does not speak for himself alone, but for all the apostles], as appears from the text itself. For Christ asks …` | CONFIRMED |
| O1895encyclicalXVI | OCR of `answerofgreatchu0000eust.txt`: `… an appeal was made to an Oecumenical Council, which alone was and is the supreme tribunal in the universal Church. Such was the ancient constitution of the Church …` in section XVI, page marker `44` follows a few lines later | CONFIRMED: the sentence ends with a full stop in the OCR; the page-43 locator is from OCR page markers as before |

### 4.3 The `clipped mid-clause` records (87 in D1's earlier part; 105 corrections in all with the 6 `clipped`, 1 `UNDERLENGTH` and the 11 Trent canons)

- All 87: the text before the trailing ` […]` equals `correction.textBeforeCorrection` after whitespace normalisation (checked by script, not by sample).
- Continuation in the source after the last quoted word, read for 86 of them: the 48 Holy See and BookOfConcord.org records on the live pages (next words: `, and are distributed …`, `; the "plunge" into the water symbolizes`, `, for the Church carries in her Tradition …`, etc.), the Westminster records in the page-level OCR (`confessionoffaith00chur-text.json`), the Trent and Dositheus records in their OCR files. In every one the source continues in the same sentence, so `[…]` is honest, with one exception:
  - RWCF29_2: the record reads `the alone propitiation for all the sins of the elect […]`; the scan page (archive.org `confessionoffaith00chur`, leaf n96, printed p. 93, page image read) prints `…Christ's one only sacrifice, the alone propitiation for all the sins of the elect.d` followed by the next paragraph `III.`. The sentence ends there. WRONG: `[…]` claims an omission that does not exist. Correct: `the alone propitiation for all the sins of the elect.` (footnote letter omitted); tag unchanged.
- T21can1 and T13can4 are `[…]` records of the same set that are also canon fragments without their frame; see 4.1.

## 5. A2 file (citation-excerpts-2.md): the 28 records with a `correction` field

Method: Lutheran records re-fetched from BookOfConcord.org (the page numbers every sentence with a small integer, which splits sentences in the transcription; matched with those markers removed); Westminster English matched in the page-level OCR (`confessionoffaith00chur-text.json`, list index = leaf, printed page = leaf - 3) by word, then by punctuation, with footnote letters and line-end hyphens ignored; Westminster Spanish matched in `doctrinasyreglam00west-text.json` (printed page = leaf - 1) and, where the result mattered, the page image was read (RWCF29_2 in D1 §4, RWCF29_4, RWLC173, RWSC97 Spanish); vatican.va records on the live pages; OPhilaret18 in `creedschristendo02scha.txt`; Mogila on the OCR text and the image of leaf n8.

### 5.1 Lutheran (7), all CONFIRMED

| id | what the page prints after the quoted words | verdict |
|---|---|---|
| LACXXIV_1_3 | `…celebrated with the highest reverence.` then `Nearly all the usual ceremonies…` | CONFIRMED: complete sentence; XXIV.1–3 correct |
| LACXXV_1 | `…previously examined and absolved.` then `And the people are most carefully taught…` | CONFIRMED: dangling `And` gone, ends at the full stop |
| LACXXII_1_2__12 | `…concerning the cup that all should drink.` then `And lest any man…` | CONFIRMED |
| LLCV | `…go to the Sacrament should know.` then `For it is not our intention…` | CONFIRMED |
| LFCEpRN_1_y_7 (2nd excerpt) | `…good or evil, right or wrong.` then `But the other symbols…` | CONFIRMED |
| LFCSDVII_83_84__87 (1st excerpt) | `…must be observed unseparated and inviolate` then `, as also St. Paul places before our eyes…` | CONFIRMED: `[…]` is honest |
| LSAII_4_7_9 | segments `And supposing that the Pope would yield … (which, nevertheless, is impossible; ` and `), nevertheless, even in this way Christianity would not be helped, but many more sects would arise than before.` then `For since men would have to be subject to this head…` | CONFIRMED: the first `[…]` stands for `for thus he would have to suffer his entire realm …` (real omission); the sentence now ends at the Articles' own full stop |

### 5.2 Westminster English (17 records)

Words, order and ends confirmed in the OCR for all; printed-page and leaf locators confirmed (RWCF1_3 p. 18 leaf n21; RWCF31_3, RWCF31_3_4 and RWCF31_5 p. 97 leaf n100; RWCF29_1 and RWCF29_3 p. 93 leaf n96; RWCF29_4 p. 94 leaf n97; RWCF29_8 p. 95 leaf n98; RWLC160 n202; RWLC169 n206; RWLC171 and RWLC171_172 n207; RWLC174 n210; RWLC175 n211; RWLC177 n213; RWSC97 n249).

| id | verdict |
|---|---|
| RWCF1_3, RWCF31_3, RWCF31_3_4, RWCF31_5, RWCF29_1, RWCF29_3, RWCF29_8 | CONFIRMED (differences with the OCR are only line-end hyphen splits and footnote letters). RWCF29_1 ends `…as members of his mystical body.` and RWCF29_8 `…to their own damnation.` as the page does; RWCF29_3 `…to a holy use; […]` is honest (the page continues `and to take and break the bread…`); RWCF31_3 ends `…appointed thereunto in his word.`, RWCF31_5 `…required by the civil magistrate.` |
| RWLC160, RWLC169, RWLC171, RWLC171_172, RWLC174, RWLC175, RWLC177 | CONFIRMED: every `[…]` replaces a continuation printed on the page (`; examine what they hear by the scriptures`, `, take and break the bread`, `, by examining themselves of their being in Christ`, `, diligently observe the sacramental elements`, `; if they find quickening and comfort`, `; whereas the Lord's supper is to be administered often`). Ids RWLC171 and RWLC171_172 carry the same text (stated in the correction). |
| RWLC173 | CONFIRMED: now `Such as are found to be ignorant or scandalous, notwithstanding their profession of the faith, and desire to come to the Lord's supper, may and ought to be kept from that sacrament, by the power which Christ hath left in his church, until they receive instruction, and manifest their reformation.` The first half is at the foot of p. 206 (leaf n209), the rest at the top of p. 207 (leaf n210, page image read: `per, may and ought to be kept from that sacrament, by the power which Christ hath left in his church,i until they receive instruction, and manifest their reformation.k`). Locator `pp. 206–207; archive leaves n209–n210` CONFIRMED (the quote jumps over the proof-text footnotes of p. 206, which is the printed layout). |
| RWCF29_4 | WRONG (punctuation). The record reads `Private masses, or receiving this sacrament by a priest, or any other, alone; as likewise, the denial of the cup to the people, worshipping the elements, …`. The scan (leaf n97, printed p. 94, page image read) prints `…or any other, alone;g as likewise the denial of the cup to the people;h worshipping the elements, the lifting them up, or carrying them about for adoration, and the reserving them for any pretended religious use; are all contrary to the nature of this sacrament, and to the institution of Christ.i` The record adds a comma after `likewise` and puts a comma where the page has a semicolon after `people`. The alphanumeric comparison used earlier cannot see this. Correct: `Private masses, or receiving this sacrament by a priest, or any other, alone; as likewise the denial of the cup to the people; worshipping the elements, the lifting them up, or carrying them about for adoration, and the reserving them for any pretended religious use; are all contrary to the nature of this sacrament, and to the institution of Christ.` Tag as before (`verified`, scan-backed; image read now). The Spanish (1880, leaf n149, p. 148) has `pueblo; la adoracion` and is fine. Also the page field reads `pp. 94`: should be `p. 94`. |
| RWSC97 | CONFIRMED for the English (leaf n249, p. 246, ends `…judgment to themselves.`). Spanish: see 5.3. |

### 5.3 Westminster Spanish (the 1880 volume, 9 records with a printed Spanish text)

Matched in the page-level OCR of `doctrinasyreglam00west` (printed page = leaf − 1): RWCF1_3, RWCF29_1, RWCF29_3, RWCF29_4, RWCF29_8, RWCF31_3, RWCF31_3_4, RWCF31_5 CONFIRMED (differences are OCR glyphs: `dei` for `del`, `liacen` for `hacen`, accents). RWCF31_3 and RWCF31_3_4 have the right section: 1880 chapter XXXI, II (the 1894 English numbers it III), leaf n155, p. 154. The tags (`[unverified: page-level OCR …]`, normalisation stated) are accurate and need no change.

RWSC97, Spanish (leaf n206, p. 205, page image read) WRONG in three small points: the page prints `…de su arrepentimiento, amor y nueva obediencia, para que no sea, que recibiendo indignamente el sacramento, coman y beban su propia condenacon.` The record has `obediência` (an accent the page does not print), `para que no sea que` (the page has a comma after `sea`), and `condenacion` (the page's own misprint `condenacon`, normalised without a note, although the normalisation field speaks only of OCR glyphs). Correct: `nueva obediencia, para que no sea, que recibiendo indignamente el sacramento, coman y beban su propia condenacon [sic].`; tag may stay `[unverified]` or become `[verified: page image read]`.

The seven RWLC records carry a Spanish text declared as an AI translation made by session A from the English; not a source text, so nothing to match; each corrected Spanish text follows the corrected English (checked by eye).

### 5.4 vatican.va Spanish (3) and Philaret

| id | verdict |
|---|---|
| CEC892 | CONFIRMED: https://www.vatican.va/archive/catechism_sp/p123a9p4_sp.html n. 892 `A esta enseñanza ordinaria, los fieles deben "adherirse con espíritu de obediencia religiosa" (LG 25) que, aunque distinto del asentimiento de la fe, es una prolongación de él.` (then n. 893) |
| CEC104 | CONFIRMED: `…sino lo que es realmente: la Palabra de Dios (cf. 1 Ts 2,13).` |
| CIC349 | CONFIRMED: `[…]` stands for `; asimismo, los Cardenales asisten al Romano Pontífice…` |
| OPhilaret18 | CONFIRMED: Schaff vol. II, p. 448 (the head `449` follows): `…the pillar and ground of the truth.` then footnote `1 Tim. iii. 15.`; OCR glyph `lioly` for `holy` (the tag says so); the page-image reading is the earlier verifier's, I did not re-read it |

### 5.5 Mogila (OMogila106, OMogila107)

CONFIRMED. The scan's introductory notice (archive.org `cu31924029363094`, leaf n8, page image read) prints: `The present version of the famous Catechism of Peter Mogila is attributed to Philip Lodvel, otherwise Lodvill, or Ludville and was originally published in 1772. … He died on the 14th of March, 1767, and was buried in Stratford-le-Bow Churchyard`. The two records' edition line says the old English translation was «originally published in 1772» and gives its translator's death as 1767, internally inconsistent, no date for the first printing claimed: faithful to the scan. Neither record states 1762. Text and locators: Question 106 and Question 107 are both on p. 79 (the running head `80` comes after Question 107's first paragraph); OCR strings match: `The holy Eucharist, or the Body and Blood of our Lord Jesus Christ, under the visible Species of Bread and Wine : Wherein, really and properly, and according to the Thing itself, Jesus Christ is present.` and `First, That no man do presume to administer this Mystery, on any Occasion whatsoever, although ever so urgent; but only a Priest lawfully ordained.` One residue: `citation-excerpts-2.md`, «Traps» list, still reads `Mogila scan is Overbeck 1898, a revision of the English translation first printed 1762; it is not the 1762 printing itself.` WRONG: replace with the wording used in english-quotes.md «Traps» (`… Its introductory notice says the old English translation was «originally published in 1772» and, in the same paragraph, that its translator died in 1767; … no date for the first printing is claimed`).

## Wrong items

Serious (the text or a locator misleads):

1. UUS95 (D1 added section), 3rd excerpt: not the counterpart of the Spanish fragment. Replace with `for a great variety of reasons, and against the will of all concerned, what should have been a service sometimes manifested itself in a very different light` (§95, vatican.va ut-unum-sint page).
2. GV: locator `Introduction` is wrong; the fragment is in the opening `Presentation`.
3. PA4char: ends `in this chair` without `[…]` (clipped), and locator `p. 270` should be `p. 269`.
4. PA4conv: locator `p. 269` should be `pp. 268–269` (the first segment is on p. 268).
5. RWCF29_4 (A2): English punctuation differs from the 1894 page (comma after `likewise`; comma for the page's semicolon after `people`). Correct wording in 5.2.
6. RWCF29_2 (D1 earlier part): `[…]` added after a sentence that the page ends with a full stop; correct `…the alone propitiation for all the sins of the elect.`
7. T13can9 (D1): the two `[…]` stand for OCR-garbled words that the page prints (`bound, when they have attained to years of discretion,`), not for omissions; the first hides the word that carries the canon. Correct wording in 4.1.
8. T13can4 and T21can1 (D1): condemned proposition without the canon's frame; give `If any one saith, …; let him be anathema.` (wording in 4.1).
9. CIC212 (D1 skipped): reason is wrong; the English page `cic_lib2-cann208-329_en.html` exists and has canon 212. Do the record (fragments in §3).
10. `citation-excerpts-2.md` «Traps»: still says `first printed 1762`.
11. Word limit over about 40: DV5 (45), UUS88 3rd (42), LG25 (42); borderline 41: CEC1346 1st, DV9 1st.

Minor (typography, clip rule):

12. Spurious spaces or a curly quote in CEC1353 2nd, UUS88 2nd, UUS94 2nd, VD19, VD29, EdE13, CDFP7 1st, GV (corrections in 1.1).
13. SC55: a `[…]` after `intact` where nothing is omitted; CEC582 2nd: an invented closing quotation mark after `clean.)`.
14. PA3can: `[…]; let him be anathema.` should be `[…]: let him be anathema.` (OCR prints a colon).
15. RWSC97 Spanish: `obediência` (no accent on the page), missing comma after `sea`, silent correction of the misprint `condenacon`.
16. RWCF29_4 page field `pp. 94` should be `p. 94`.
17. 59 excerpts in the D1 added section end mid-sentence without `[…]` (list in 1.5); 20 more end at the page's full stop but without it (harmless).

## Unconfirmable

- FLO, FLOpat, FLOlae, FLOexs, FLOcd (D1 skipped): the licence and availability statements (Tanner 1990 in copyright; vatican.va has no English text; Cantate Domino in Latin only) could not be confirmed or refuted from the Holy See site; no quote is asserted, so nothing to correct.
- CR38 (D1 skipped): whether McHugh-Callan 1923 or Donovan 1829 exist as dated scans was not checked; the record is an honest «not done».
- Printed page numbers of Trent records (the record says `printed page not independently collated`), of Pastor aeternus (inferred from OCR running heads; for PA3can the pages 265–266 are consistent with the heads) and of the Lutheran rows (web transcription of the 1921 Triglot, no print page checkable).
- Pastor aeternus text itself stays `[unverified]` (OCR glyph errors `sujDreme`, `lielp`, `witli`, `tiie`; no page image read).
- T13can9 exact wording of `bound` and `have attained` (OCR `bobnd`, `hate`): needs the page image of Waterworth 1848, Session XIII, canon ix.
- Alignment sample: Spanish fragments with no English counterpart are by design not paired; whether the unpaired ones can be paired was not judged.
- A2 Spanish AI translations (RWLC160, RWLC169, RWLC171, RWLC171_172, RWLC173, RWLC174, RWLC175, RWLC177): no source text exists to check them against.
- OPhilaret18 page image: relied on the earlier verifier's reading.
- Not checked in this pass: the registry-side `edition` lines of the 145 new Holy See records (`site edition issued 2003-11-04` for the CEC, dates of the encyclicals); only strings, locators, word counts and alignment were checked as asked.
