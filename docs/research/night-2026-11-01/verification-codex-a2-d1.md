# Verification: Codex A2 (citation-excerpts-2.md) and D1 (english-quotes.md)

Checked 2026-11-01 (overnight) by an independent verifier. Files checked: `docs/research/sources/citation-excerpts-2.md` (A2, 91 records, 67 with an excerpt, 73 excerpt texts) and `docs/research/sources/english-quotes.md` (D1, 215 records). Nothing in the repo was edited except this file. Scratch and scripts: `~/codex-night1101-scratch/v5/`.

## Progress

- Status: done (all four method steps run).
- Step 1 clipped A2 quotes: 28 excerpts end without terminal punctuation; each located in its source, continuation quoted below. 8 of them cut a sense-bearing part (marked MUST FIX), 20 only need an ellipsis or a short extension.
- Step 2 non-matches: all 17 A2 and D1 ids you listed, plus the Westminster and Trent items, are resolved. None is really different. Two needed the page image (RWCF28_7, ODositheusXV), one needed the image for a glyph (OPhilaret18), RWCF30_1 the image for the OCR-mangled first word.
- Step 3 alignment: 30 D1 records read against the registry Spanish (14 chosen, 16 random). No mismatch of passage.
- Step 4 edition lines: (a) CONFIRMED, (c) CONFIRMED, (b) half confirmed, the "first printed 1762" part is contradicted by the scan.
- Not checked: the 154 ids D1 lists as left; the 24 A2 records with no excerpt (skipped by Codex); Spanish/Latin/Greek witnesses; any printed page not reached by a page image (OCR-only matches say so).

Legend: CONFIRMED (string and locator found as stated) / WRONG (needs a correction, given with its source) / UNCONFIRMABLE (could not be settled, reason given).

Method notes: the coordinator's first check read the whole-item `_djvu.txt`, which differs from the page-level OCR Codex used (double spaces, line-end hyphens, a space before `;`), and the Trent file has line breaks inside em dashes. I re-ran with an alphanumeric-only comparison (`v5/fz.py`) and with the page-level `confessionoffaith00chur-text.json` indexed by leaf (`v5/west.py`). Westminster leaf n = printed page n - 3 (n95 = p. 92, n98 = p. 95, n248 = p. 245; checked on page images n95, n96, n98).

## 1. Clipped A2 excerpts (28)

Rule applied: an excerpt that stops inside a clause with no `…` or `[…]` (registry convention: `[…]` 146 uses, `…` 201, `[...]` 15). "Source ends" shows what the source prints right after the last word of the quote (paragraph numbers and footnote letters removed). MUST FIX means the cut removes the part that carries the doctrine or leaves a dangling clause.

| id | verdict | what the source continues with | correct wording |
|---|---|---|---|
| LSAII_4_7_9 (anchor sa-ii-iv-0007) | WRONG, MUST FIX | `would yield and accept this (which, nevertheless, is impossible; …), nevertheless, even in this way Christianity would not be helped, but many more sects would arise than before.` The quote is only the supposition ("supposing the Pope would yield…"); the Articles' answer is dropped. | End the excerpt at `…nevertheless, even in this way Christianity would not be helped, but many more sects would arise than before.` (keep the parenthesis or put `[…]` for it) |
| RWLC173 (leaf n209) | WRONG, MUST FIX | The quote is a subject with no predicate: `Such as are found to be ignorant or scandalous, notwithstanding their profession of the faith` + `, and desire to come to the Lord's supper, may and ought to be kept from that sacrament, by the power which Christ hath left in his church, until they receive instruction, and manifest their reformation.` The predicate is on the next leaf (n210, p. 207). | Extend to `…and desire to come to the Lord's supper, may and ought to be kept from that sacrament, by the power which Christ hath left in his church, until they receive instruction, and manifest their reformation.` and change the locator to `pp. 206–207; 173; archive leaves n209–n210` |
| RWCF29_4 (leaf n97) | WRONG, MUST FIX | Quote is the tail of the subject list: `the lifting them up, or carrying them about for adoration, and the reserving them for any pretended religious use` + `; are all contrary to the nature of this sacrament, and to the institution of Christ.` The verdict is missing. | Extend to `…for any pretended religious use; are all contrary to the nature of this sacrament, and to the institution of Christ.` (the OCR confirms the continuation to `Christ`; full sentence also begins at `Private masses…`) |
| LACXXV_1 (ac-xxv-0001) | WRONG, MUST FIX | Ends on a dangling `And`. Source: `…examined and absolved. And the people are most carefully taught concerning faith in the absolution, about which formerly there was profound silence.` | Drop the final ` And` (end at `absolved.`) or extend with the sentence above |
| LACXXIV_1_3 (ac-xxiv-0001) | WRONG, MUST FIX | Ends `retained among`. Source: `…for the Mass is retained among us, and celebrated with the highest reverence.` | Extend to `…retained among us, and celebrated with the highest reverence.` |
| LFCEpRN_1_y_7, second excerpt (ep-rule-and-norm-0007) | WRONG, MUST FIX | Ends `right`. Source: `…as to whether they are good or evil, right or wrong.` | Add ` or wrong.` |
| LFCSDVII_83_84__87, first excerpt (sd-vii-0083) | WRONG, MUST FIX | Ends `but the command of Christ, This`. Source: `This do (which embraces the entire action or administration in this Sacrament, that in an assembly of Christians bread and wine are taken, consecrated, distributed, received, eaten, drunk, and the Lord's death is shown forth at the same time) must be observed unseparated and inviolate, as also St. Paul places before our eyes the entire action of the breaking of bread or of distribution and reception, 1 Cor. 10:16.` | Either extend to `…must be observed unseparated and inviolate.` (clause end; the sentence goes on to `as also St. Paul…`) or end at `…the command of Christ, This do […]` |
| CEC892 (vatican.va sp) | WRONG, MUST FIX | Ends inside the sentence, after a quotation of LG 25. Official page: `…"adherirse con espíritu de obediencia religiosa" ( LG 25) que, aunque distinto del asentimiento de la fe, es una prolongación de él.` The omitted relative clause says the assent is distinct from the assent of faith. | Extend to `…"adherirse con espíritu de obediencia religiosa" (LG 25) que, aunque distinto del asentimiento de la fe, es una prolongación de él.` |
| LACXXII_1_2__12, first excerpt (ac-xxii-0001) | CLIPPED | `…Drink ye all of it,` + `where Christ has manifestly commanded concerning the cup that all should drink.` | Extend to `…Drink ye all of it, where Christ has manifestly commanded concerning the cup that all should drink.` |
| LLCV (lc-v-0001) | CLIPPED | `…by which Christ has instituted it,` + `and which every one who desires to be a Christian and go to the Sacrament should know.` | Extend to that full sentence |
| RWCF29_1 (leaf n96, checked on image p. 93) | CLIPPED | `…the sacrifice of himself in his death` + `, the sealing all benefits thereof unto true believers, their spiritual nourishment and growth in him, their further engagement in and to all duties which they owe unto him, and to be a bond and pledge of their communion with him, and with each other, as members of his mystical body.` | Extend to `…as members of his mystical body.` |
| RWCF29_8 (leaf n98, image p. 95) | CLIPPED | `…yet they receive not the thing signified thereby` + `; but by their unworthy coming thereunto are guilty of the body and blood of the Lord, to their own damnation.` | Extend to `…to their own damnation.` |
| RWSC97 (leaf n249) | CLIPPED | `…to discern the Lord's body` + `, of their faith to feed upon him, of their repentance, love, and new obedience; lest, coming unworthily, they eat and drink judgment to themselves.` | Extend to `…eat and drink judgment to themselves.` |
| RWLC177 (leaf n213) | CLIPPED | `…ingrafting into Christ` + `, and that even to infants; whereas the Lord's supper is to be administered often…` | Extend to `…ingrafting into Christ, and that even to infants` (clause end before the `;`), or add `[…]` |
| OPhilaret18 (Schaff II, leaf n462, p. 448, image checked) | CLIPPED | `…the sure repository of holy tradition` + `, or, as St. Paul expresses it, The Church of the living God, the pillar and ground of the truth. 1 Tim. iii. 15.` | Extend to `…the pillar and ground of the truth.` |
| CEC104 (vatican.va sp) | CLIPPED | `…su alimento y su fuerza` + `(cf. DV 24), porque, en ella, no recibe solamente una palabra humana, sino lo que es realmente: la Palabra de Dios (cf. 1 Ts 2,13).` | Extend to `…la Palabra de Dios (cf. 1 Ts 2,13).` |
| RWCF31_3, RWCF31_3_4 (same text, leaf n100) | CLIPPED | `…and government of his church` + `; to receive complaints in cases of maladministration, and authoritatively to determine the same: which decrees and determinations, if consonant to the word of God, are to be received with reverence and submission, not only for their agreement with the word, but also for the power whereby they are made, as being an ordinance of God, appointed thereunto in his word.` The omitted half is the part about the authority of synod decisions. | Extend to `…appointed thereunto in his word.` or `[…]` |
| RWCF31_5 (leaf n100) | CLIPPED | `…nothing but that which is ecclesiastical` + `; and are not to intermeddle with civil affairs, which concern the commonwealth, unless by way of humble petition, in cases extraordinary; or by way of advice for satisfaction of conscience, if they be thereunto required by the civil magistrate.` | Extend to `…by the civil magistrate.` |
| RWCF1_3 (leaf n21) | CLIPPED | `…no part of the canon of the scripture` + `; and therefore are of no authority in the church of God, nor to be any otherwise approved, or made use of, than other human writings.` | Extend to `…than other human writings.` |
| RWCF29_3 (leaf n96) | CLIPPED | `…from a common to a holy use` + `; and to take and break the bread, to take the cup, and (they communicating also themselves) to give both to the communicants;` (sentence continues on leaf n97) | Add `[…]` after `holy use` |
| RWLC160 | CLIPPED | `…that they attend upon it` + `with diligence, preparation and prayer; examine what they hear by the scriptures; …` | Add `[…]` |
| RWLC169 | CLIPPED | `…thanksgiving, and prayer` + `; to take and break the bread, and to give both the …` (OCR cut by a footnote) | Add `[…]` |
| RWLC171, RWLC171_172 (identical text) | CLIPPED | `…by examining themselves` + `of their being in Christ, of their sins and wants; of the truth and measure of their knowledge, faith, repentance; love to God …` (OCR cut by a footnote) | Add `[…]` |
| RWLC174 | CLIPPED | `…they wait upon God in that ordinance` + `, diligently observe the sacramental elements and actions, needfully discern the Lord's body…` | Add `[…]` |
| RWLC175 | CLIPPED | `…and with what success` + `; if they find quickening and comfort, to bless God for it…` | Add `[…]` |
| CIC349 | CLIPPED | `…según la norma del derecho peculiar` + `; asimismo, los Cardenales asisten al Romano Pontífice…` | Add `[…]` |

LFCSDVII_69_71 ends with `;` and the source prints `;` there: CONFIRMED, no change.

Also found in step 1: RWCF31_3 and RWCF31_3_4 have identical text, and RWLC171 and RWLC171_172 too (the combined ids say 3–4 and 171–172 but quote only the first). Decide whether to keep both ids or point each to its own text.

## 2. Non-matches resolved

### A2

| id | verdict | evidence |
|---|---|---|
| LACXXIV_6_7 | CONFIRMED (inline paragraph number) | https://bookofconcord.org/augsburg-confession/of-the-mass/ prints `For none are admitted 7 except they be first examined.` (the `7` is the paragraph number); Codex's string omits it. |
| VD87 | CONFIRMED (spacing and italics) | Official Spanish page: `se comienza con la lectura ( lectio ) del texto, que suscita la cuestión sobre el conocimiento de su contenido auténtico: ¿ Qué dice el texto bíblico en sí mismo ?` Same words; the page has spaces inside `( lectio )` and around the italic question. https://www.vatican.va/content/benedict-xvi/es/apost_exhortations/documents/hf_ben-xvi_exh_20100930_verbum-domini.html |
| RWCF1_3, RWLC169, 171, 171_172, 173, 174, 175, 177, RWCF31_3, RWCF31_3_4 | CONFIRMED against page-level OCR | Each string found on the leaf named in its record (leaf = json index). Only difference: the 1894 print has a space before `;` and `:` (`conscience ;`). RWLC160 also found on leaf n202. |
| ODositheusXV | CONFIRMED on the page image | OCR reads `[z.e.,`; the image of leaf n146 (https://archive.org/download/actsdecreesofsyn00orth/page/n146_w900.jpg) shows `Evangelical Mysteries [i.e., Sacraments of the Gospel Dispensation], and that they are seven.` under `DECREE XV`, page header 135. Locator `p. 135` is right (the OCR header `145` belongs to a different leaf, n156). The tag may be upgraded from `[unverified]`. |
| OMogila106 | CONFIRMED | `The holy Eucharist, or the Body and Blood of our Lord Jesus Christ, under the visible Species of Bread and Wine: Wherein, really and properly, and according to the Thing itself, Jesus Christ is present.` found in `cu31924029363094.txt` under `Question 106`, header `Catholic and Apostolic Eastern Church. 79`. Differs from the coordinator's string only by the space before the colon. |
| OPhilaret18 | CONFIRMED on the page image | Leaf n462 (https://archive.org/download/creedschristendo02scha/page/n461_w1000.jpg): `All true believers united by the holy tradition of the faith, collectively and successively, by the will of God, compose the Church; and she is the sure repository of holy tradition, or, as St. Paul expresses it…`, page 448. OCR `lioly` is a glyph error. Text is clipped (section 1). The tag may be upgraded. |

### D1

| id | verdict | evidence |
|---|---|---|
| RWCF28_7 | CONFIRMED on the page image | OCR of leaf n95 (p. 92) misses the line; the image (https://archive.org/download/confessionoffaith00chur/page/n95_w1000.jpg) prints `VII. The sacrament of baptism is but once to be administered to any person.` at the foot of the main text, p. 92. Locator right. |
| RWCF30_1 | CONFIRMED on the page image | OCR `npHE Lord Jesus … hath therein J_ appointed`; image of leaf n98 (p. 95): `I. THE Lord Jesus, as king and head of his church, hath therein appointed a government in the hand of church-officers, distinct from the civil magistrate.` (drop cap T). The excerpt starts at `as king` (fragment). |
| T6c8 | CONFIRMED | `TheCanonsAndDecrees.txt`: `because that none of those things which precede justification — whether faith or works — merit the grace itself of justification.` (em dashes, line break after the first dash). The sentence continues `For, if it be a grace, it is not now by works…`; the final period is the one before `For`. |
| T6can11, T6c20, T13c5, T21c1, T21c2, T21c3, T21can1, T22c2, T22c6, T22can, T22can8, T22decr | CONFIRMED | All found in the Waterworth 1848 text (`TheCanonsAndDecrees.txt`) once punctuation and line breaks are ignored; they are fragments that stop before the next word (see section 5, Trent canons). |
| LACIX_1_2 | CONFIRMED (inline paragraph number) | `Of Baptism they teach that it is necessary 2 to salvation, and that through Baptism is offered the grace of God…`; the `2` is the paragraph number. https://bookofconcord.org/augsburg-confession/of-baptism/ |
| O1895encyclicalXVI | CONFIRMED | `answerofgreatchu0000eust.txt`: `…But on important questions which needed the sanction of the universal Church an appeal was made to an Oecumenical Council, which alone was and is the supreme tribunal in the universal Church. Such was…`. English text is on p. 43 (the OCR page marker `43` precedes it, `44` follows). The excerpt is a complete clause, source period present. |
| O1895encyclicalXVIII | CONFIRMED | Same file: `The orthodox Eastern and catholic Church of Christ, with the exception of the Son and Word of God, who was ineffably made man, knows no one that was infallible upon earth.` followed by `Even the Apostle Peter himself…`. Codex's own check string matched. |
| CEC1265 | CONFIRMED (footnote markers) | Official English page https://www.vatican.va/archive/ENG0015/__P3N.HTM prints: `1265 Baptism not only purifies from all sins, but also makes the neophyte "a new creature," an adopted son of God, who has become a "partaker of the divine nature," 68 member of Christ and coheir with him, 69 and a temple of the Holy Spirit. 70` (68, 69, 70 are footnote numbers); the excerpt omits them. |
| CEC84 | CONFIRMED (footnote marker) | https://www.vatican.va/archive/ENG0015/__PM.HTM: `84 The apostles entrusted the "Sacred deposit" of the faith (the depositum fidei), 45 contained in Sacred Scripture and Tradition, to the whole of the Church.` (`45` is the footnote number). |
| Other Westminster and Trent items | CONFIRMED | 32 Westminster D1 records checked against the page-level OCR: 30 match on the leaf named, RWCF28_7 and RWCF30_1 resolved above. All 30 Trent items match the 1848 text. |

## 3. Alignment of D1 with the registry Spanish (30 records)

Method: registry text read from `src/content/registry/citations.ts`, English fragment compared by meaning with the Spanish fragment it should translate. Aligned = same passage, not another part of the paragraph.

CONFIRMED aligned (14 chosen): RWCF28_5 (middle Spanish fragment `la gracia y la salvacion, no son tan inseparablemente unidas…`), RWSC26 (`Cristo ejecuta el oficio de Rey sujetándonos á sí mismo`), RWCF25_2 (`la casa y familia de Dios`), T22c2 (`sola offerendi ratione diversa` = `the manner alone of offering being different`), T13c5 (`latriae cultum, qui vero Deo debetur`), T7b4, T6c8 (`ninguna de las cosas que preceden á la justificacion…`), LACX, LTr25, LFCSDRN_8 (`usados públicamente en iglesias, escuelas y casas`; `[private]` is the Triglot's own bracket), LSAII_4_10, CEC1366, ODositheusXVII, O1895encyclicalXVI (`único tribunal supremo en la Iglesia universal`).

CONFIRMED aligned (16 more, random draw seed 5): CEC121, LSCIV_6, CIC938, CEC1254, CIC861, CIC842, CEC1399 (registry fragment is the UR 15 quotation inside CEC 1399), RWCF28_7, CEC1360, CIC752, LApIX_52, RWCF1_9, T7b13, RWCF29_6, CEC1259, CEC1269.

No mismatch of passage found. Two small points, not mismatches:
- CEC1259: the English fragment stops at `assures them the salvation`; the registry Spanish goes on `que no han podido recibir por el sacramento`. The English loses the relative clause (UNDERLENGTH, add `that they were not able to receive through the sacrament`).
- ODositheusXVII: English begins `We believe` (the Greek `Πιστεύομεν`); the registry Spanish begins at `El santísimo misterio…` with no verb. Harmless.

## 4. Edition lines

| claim | verdict | evidence |
|---|---|---|
| (a) Westminster 1894, `Edinburgh: Johnstone, Hunter & Co., 1894` | CONFIRMED | Title page image (`confessionoffaith00chur-title.jpg`): `EDINBURGH: JOHNSTONE, HUNTER & CO.` and `MDCCCXCIV`. Archive metadata: publisher `Edinburgh : Johnstone, Hunter & Co.`, date 1894. |
| (b) Mogila scan is Overbeck 1898 | CONFIRMED | Title page OCR: `EDITED WITH PREFACE BY J. J. OVERBECK, D.D. AND WITH INTRODUCTORY NOTICE BY J. N. W. B. ROBERTSON. London: THOMAS BAKER, SOHO SQUARE. 189S.` (OCR `189S`); archive metadata: T. Baker, 1898; Cornell shelfmark `BX345 .P49 1898`. |
| (b) `…English translation first printed 1762` | UNCONFIRMABLE, contradicted by the scan | The scan's own Introductory Notice (leaf n8, image checked) prints `…attributed to Philip Lodvel … and was originally published in 1772`, and in the same paragraph says Lodvel died 14 March 1767. The scan is internally inconsistent; `1762` is not in any text read. Do not state 1762 as a fact without another source; if kept, tag `[memory]` or quote the scan: `originally published in 1772 (the notice's own date; it also says Lodvel died in 1767)`. |
| (c) Schaff vol. II title page 1896 | CONFIRMED | OCR of the title page: `Volume II. THE GREEK AND LATIN CREEDS, WITH TRANSLATIONS. NEW YORK HARPER & BROTHERS, FRANKLIN SQUARE 1896`, followed by `Entered according to Act of Congress, in the year 1877`. Archive metadata date is 1877. Also in the same book: Schaff's note dated December 1889 about the added Leo XIII encyclical. |
| Dositheus, Robertson 1899, London: Thomas Baker | CONFIRMED | Archive metadata: `The acts and decrees of the Synod of Jerusalem … translated … with notes by J.N.W.B. Robertson`, T. Baker, 1899. |
| Eustratiades/Metallinos 1896 (O1895 records) | CONFIRMED with a caveat | Title-page OCR: `ANSWER OF THE GREAT CHURCH OF CONSTANTINOPLE TO THE PAPAL ENCYCLICAL ON UNION … EDITED BY … EUSTATHIUS METALLINOS … Published at the expense of the Orthodox Greek Community in Manchester`; `1896` appears as OCR on the cover leaf. The title page itself was not viewed as an image. Record id `O1895encyclical…` names 1895 (the encyclical) while the edition is 1896. |

## 5. Other findings

### Trent canons cut out of their frame (D1, WRONG for reading)

Trent canons have the form `If any one saith, X; let him be anathema.` Seven D1 fragments start with `If any one saith` and stop before the anathema; four more give only the condemned proposition with no frame, so it reads as Trent's own claim. A fragment must keep the frame or say it is the condemned proposition.

- Start `If any one saith…` and end without `let him be anathema`: T6c20, T6can11, T7sacr7, T7b3, T7b4, T7b10, T22can.
- Condemned proposition quoted bare: T7b7 (`…made debtors but to faith alone, and not to the observance of the whole law`), T7b13 (`it is better that the baptism of such be omitted, than that … they should be baptized in the faith alone of the Church`: Canon 13 of baptism condemns this), T13can9 (`at least at Easter`), T7sacr9.
- Correct examples already in the file: T13can5, T22can8 (end with `let him be anathema.`).

### Fragments without an ellipsis (D1)

105 of 215 D1 texts end inside a clause with no ellipsis (list produced by `v5/endchk.py D1`). D1 says it supplies "a matched fragment", and the checker found no period added where the source has none, but the reader sees a full sentence ending. Apply the same rule as A2: end at the source's own punctuation or add `[…]`. Examples where meaning is cut: CEC1259 (above), CEC1269, CEC1371 (`…also offered for the faithful departed` + `who "have died in Christ but are not yet wholly purified"`), LSAII_4_10, LTr9, LTr23.

### Tags

- A2 and D1 mark many records `[verified: … scan-backed OCR …]`. For Westminster the page-level OCR plus my image checks support that. Items whose tag says only OCR and where an image changed the reading: ODositheusXV, OPhilaret18, RWCF28_7, RWCF30_1 can move from `[unverified]` to verified on the strength of the page images listed above.
- D1 locator for Trent items says `XXII 1, 3 y 4` (Spanish `y` inside an English-language record): cosmetic.

## Wrong items

1. LSAII_4_7_9: quote is only the supposition; add the answer (`…would not be helped, but many more sects would arise than before.`).
2. RWLC173: subject without predicate; extend to `…and manifest their reformation.`; locator pp. 206–207.
3. RWCF29_4: subject list without the verdict `are all contrary to the nature of this sacrament, and to the institution of Christ.`
4. LACXXV_1: ends on `And`.
5. LACXXIV_1_3: ends `retained among`.
6. LFCEpRN_1_y_7 (second excerpt): ends `right`; add `or wrong.`
7. LFCSDVII_83_84__87 (first excerpt): ends `This`.
8. CEC892: omits `que, aunque distinto del asentimiento de la fe, es una prolongación de él.`
9. D1 Trent fragments cut from the anathema frame: T6c20, T6can11, T7sacr7, T7b3, T7b4, T7b10, T22can (no anathema), T7b7, T7b13, T13can9, T7sacr9 (bare proposition).
10. Traps list: Mogila `first printed 1762` is contradicted by the scan (`1772`, with Lodvel's death in 1767).
11. CEC1259 English fragment shorter than the registry Spanish fragment.
12. All other clipped A2 ids in section 1 (ellipsis or extension): LACXXII_1_2__12, LLCV, RWCF29_1, RWCF29_8, RWSC97, RWLC177, OPhilaret18, CEC104, RWCF31_3, RWCF31_3_4, RWCF31_5, RWCF1_3, RWCF29_3, RWLC160, RWLC169, RWLC171, RWLC171_172, RWLC174, RWLC175, CIC349.

## Unconfirmable

- Mogila translation `first printed 1762` (the scan says 1772; no source read gives 1762).
- Printed-page numbers of the Trent items: D1 itself says `printed page not independently collated`; I did not collate them either.
- Triglot (BookOfConcord.org) items: the web transcription cannot be tied to a printed page of the 1921 Triglot; nothing to check against.
- Vatican pages: official HTML only, no print edition; checked as the page prints them.
- The 154 ids D1 lists as left and the 24 A2 records with no excerpt: not in scope.
- Eustratiades/Metallinos title page as an image: only OCR read (the `1896` and imprint); the page 43 locator is from OCR page markers, not from an image.
