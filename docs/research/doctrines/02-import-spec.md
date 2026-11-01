# 02 import spec: Baptism, Papacy, Sola Scriptura (what a converter reads, field by field)

Status: draft, NOT verified by Pedro

Written by session A3, 2026-11-01 night (research only; nothing in `src/` or `data/` was touched). The shape to match is `src/content/model/doctrine-page.ts` (`DoctrinePage`) and the built example `src/content/pages/eucharist/doctrine.es.ts`. Every line number below is the line in the file named **as of this writing** (A3 edited the three `shared.md` files, so older line numbers in other logs are stale).

## Progress

- 2026-11-01 18:3x: spec written from the three `shared.md` after the decisions of DECISIONS 2026-11-01 (afternoon items 1–2, evening items 3–4) were applied to them; registry coverage checked by script against `src/content/registry/citations.ts` (738 ids); entity ids checked against `src/content/history/`.
- Verifier pass: see section «Verification» at the end (empty until the pass runs).

## How to read it

- **Status tags:** `ready` = the text is in the file named, with a dated edition and a `[verified: …]` tag of that file; `[unverified]` = the file says so or the text is a dossier paraphrase to be quoted from the print before publishing; `AI-ES` = the Spanish is Doctrina's AI-assisted translation from the dated English (DECISIONS 2026-11-01 afternoon item 3 and evening item 9): the page must label it «Traducción de Doctrina asistida por IA, desde [edition]», never inside quotation marks without that label, never `verified`; `missing` = nothing to import yet; `decision` = the model or Pedro must settle it first.
- **Single source of truth.** Quotes, English and Spanish of every witness live in the `shared.md` entry named (each entry has fixed lines `Edition:`, `Quote (en):`, `Spanish (Doctrina…):`, `Surrounding paragraph:`); this spec lists the metadata and where to read them, and does **not** copy them (a second copy would diverge on the first correction). `shared.md` §1–§3 Spanish is draft page copy.
- **Not covered here (outside the research package):** `answers` (the five traditions' summaries, grades and objection lists: they come from each tradition's dossier and the objections files, which another agent is deepening) and `lede`/`legend` (proposals below).

## 0. Cross-cutting rules for the converter

1. `DateInfo` values below follow `src/content/model/registry.ts` (`year`, `yearEnd`, `circa`, `unconfirmed`, `alsoYears`). Ranges are the decided ones: Didache **c. 50–150** (tick c. 100), Justin **148–161** (tick c. 155), Tertullian *De baptismo* **198–208** (tick c. 200), Augustine *Contra epistulam fundamenti* **396–397** (DECISIONS 2026-11-01 afternoon item 1 and evening item 1; it is not a witness of the three pages, only a cross-reference in `sola-scriptura/shared.md` l. 144).
2. **Westminster Confession chapter 31 has two numberings.** The Edinburgh 1894 English prints 31.1 (synods needed), 31.2 («magistrates may lawfully call a synod of ministers, and other fit persons»), 31.3 (what synods determine), 31.4 («may err, and many have erred»), 31.5 (only what is ecclesiastical). The 1880 Monterrey Spanish (`doctrinasyreglam00west`, OCR) has no magistrates clause: its I says that pastors and other officers must convoke synods, and its II, III and IV are what the English calls 31.3, 31.4 and 31.5. So a Spanish sentence quoting «31.4» must name the edition («Westminster, Edimburgo 1894»), and `RWCF31_3`, `RWCF31_4`, `RWCF31_3_4` carry the Edinburgh/English numbering and have no excerpt but link to the 1880 scan, whose §3 and §4 are different articles: fix the registry before attaching (V6).
3. **Silence cells** (DECISIONS 2026-11-01 afternoon item 2): the three `shared.md` now show the text found (17 cells, `b3-silence-cells.md` has the English, the loci and the reading limits). Limits that must stay visible: Baptist BF&M 2000 was read from a Wayback copy of 2023-12-31 (the live page answers HTTP 403) that shows article VI as amended in 2023; Lutheran texts are the BookOfConcord.org web transcription of the 1921 Triglot (`[verified: web transcription, print not collated]`) and the Lutheran «Lectura personal», «Cómo debe leerse» and «Traducciones» findings come from an OCR text search of the Triglot English; the Orthodox «unidad» and «Traducciones» cells are OCR of Schaff (1896) and Robertson (1899), page images not read.
4. **Constantinople I** is two rows (DECISIONS evening item 4): the creed (381, NPNF2 14 pp. 163–164) and «canon 7» (the edition's number; the edition's note quoting Hefele, who reports Beveridge's conjecture, says it is «in no way a decree of the second General Council»; carry it as printed, no conclusion). Both are rows of the full list for page 10, not quoted witnesses.
5. **Registry ids.** For each practice cell the ids that exist in `citations.ts` are listed; `MISSING` means the id is not in the registry and the citation must be added by the implementation session (research for it: the `shared.md` line and `sources/english-quotes.md`/`citation-excerpts-2.md` where a record exists). Two families of Reformed ids exist (`WCF…` older, used by the Eucharist page; `RWCF…`/`RWLC…`/`RWSC…` newer); use `RWCF…` for these pages.
6. **Entity ids** (`Witness.entity`, fathers registry in `src/content/history/`): exist for `didache`, `ignatius-of-antioch`, `irenaeus-of-lyon`, `justin-martyr`, `tertullian`, `cyprian-of-carthage`, `cyril-of-jerusalem`, `gregory-of-nazianzus`, `augustine-of-hippo`, `ambrose-of-milan`, `basil-of-caesarea`, `jerome`, `leo-the-great`, `gregory-the-great`, `athanasius-of-alexandria`, `vincent-of-lerins`; councils `nicaea-1`, `chalcedon-451`, `carthage-418`. Constantinople I: `constantinople-1` (`timeline-sources.ts` l. 1446). Not found: Firmilian of Caesarea, Sardica (not checked in `all-fathers.ts`; the converter should check before leaving `entity` empty).

## 1. Eucharist page: the three wrong practice cells and their corrected text (data-source fix, never by hand in the page)

DECISIONS 2026-11-01 evening item 2. Source of the verdicts: `doctrines/eucharist/practice-verification.md` rows 3, 9, 12 (not an independent pass; see that file). Location in the page: `doctrine.es.ts` `practice.aspects` ids `presides` (lutheran, l. 353–356), `bread-and-wine` (reformed, l. 383–386), `leftovers` (orthodox, l. 403–406).

| Cell | Today | Corrected text (Spanish, for the data source) | Source and status |
|---|---|---|---|
| `presides` · Lutheran | «Un pastor ordenado y debidamente llamado» | «Quien ha sido debidamente llamado» (the article says nobody may teach in the Church or administer the sacraments «unless he be regularly called»; it says nothing about ordination) | AC XIV, Triglot English via BookOfConcord.org `[verified: web transcription, print not collated]`; registry id `LACXIV` exists (the cell's `citations` is empty today: add it); text is Doctrina's wording, not a quotation |
| `bread-and-wine` · Reformed | «Pan y vino, que siguen siendo «verdadera y únicamente pan y vino»» | «Pan y vino, que siguen siendo, en sustancia y naturaleza, «verdadera y solamente, pan y vino»» | WCF 29.5, printed Spanish of Monterrey 1880 (`doctrinasyreglam00west`; the OCR prints «permaneceu todavia en sustancia y naturaleza, verdadera y solamente, pan y vino, tales como fueron antes» (OCR slips for «permanecen todavía»)), `[verified: OCR text of the scan; page image not read]`; registry id `RWCF29_5` exists |
| `leftovers` · Orthodox | «Se guardan dones consagrados para la Liturgia de los Presantificados, en Cuaresma» (Quinisext can. 52) | Remove the claim. Corrected cell: «Mogila (Pregunta 107) no dice qué se hace con lo que sobra; Dositeo (Decreto XVII) dice que lo reservado en las píxides para la comunión de los moribundos es el verdadero Cuerpo del Señor» (AI-ES from Robertson 1899, to be labelled; or drop the cell until Pedro settles the wording; Philaret was not read for this row). Do **not** write «silencio» as a general Orthodox finding | Canon 52 (NPNF2 14 p. 389) says only that the Liturgy of the Presanctified is said on Lenten days and does not say gifts are kept (verifier row 12). A3 searched the OCR of Mogila (`cu31924029363094`) and Robertson 1899 (`actsdecreesofsyn00orth`) for «reserv-», «remainder», «left over», «remaining», «presanctif-»: no hit in Mogila about the gifts that remain (Questions 106–107 read by the verifier); in Robertson 1899, Decree XVII (pp. 148–149), the hit «reserved» reads «What is reserved in the Sacred Pixes for the communion of those that are about to depart [the dying] is the true Body of the Lord» (A3's first draft of this row omitted it; found by verifier V6); «remaining» also occurs in «the two remaining Mysteries»; «Presanctif» once, in the title of Robertson's 1894 liturgy edition `[verified: OCR text search; whole texts not read]`. Registry ids `OMogila107`, `MOG107` exist |

Note on the same file (report only): the Eucharist `connected` item for Baptism says «Todas las tradiciones exigen el bautismo antes de la comunión»; no dossier line cited in `connected-doctrines.md` supports «todas» (the cited texts are Baptist and Catholic). `[unverified]` — flag for the data source.

## 2. Baptism

Source file: `doctrines/baptism/shared.md` (`B`). All Spanish below is `shared.md` draft copy unless a cell says AI-ES.

### 2.1 `lede`, `legend`, `common`

| Field | Value or pointer | Status |
|---|---|---|
| `lede` | proposal (a neutral question; not decided): «¿Qué es el bautismo y a quién se le administra?» | missing (Pedro's wording) |
| `legend` | proposal: `witnessId` the Didache entry (B-W1), `citationLabel` «Didaché 7.1–3» | decision |
| `common.text` | `B` l. 21 (the quoted block) | ready as draft copy; each sentence has a text of each tradition in `B` §1a (l. 25–33) and §1b (l. 35–42); **the sentence «Todas relacionan el bautismo con una vida nueva» rests on the Baptist cell tagged `[verified: official page read by the verifier]` and a paraphrase Spanish that is not quoted**; the Lutheran 1a row is a dossier paraphrase for the triune name (V08: quote the Triglot SC IV.4 before publishing) |
| `common.questions` (1–3) | `B` §2 l. 55–57: «¿A quién se bautiza?», «¿Qué es el bautismo y para qué se hace?», «¿Con qué modo se administra?» | ready as copy; the third is a practice point (three traditions answer; Lutheran text names three acts and prescribes none: `B` l. 57 and l. 75) `[verified: LC IV read whole, web transcription]` |
| not claimed as common ground | `B` l. 45 (institution, admission to the church, non-repetition) | keep out of `common.text` |

### 2.2 `practice` (`B` §3, l. 73–78; notes l. 80–84)

Aspects (id proposal in brackets): Quién recibe [`receives`], Material y fórmula [`matter`], Modo [`mode`], Quién administra [`administers`], Repetición [`repeat`], Después del bautismo [`after`]. Cell = `B` line, column. Statuses: R ready, P dossier paraphrase (quote the print before publishing), A3 replaced from `b3-silence-cells.md` (AI-ES, limits in 0.3). Registry ids found / MISSING.

| Aspect (line) | Catholic | Orthodox | Lutheran | Reformed | Baptist |
|---|---|---|---|---|---|
| Quién recibe (73) | R: `CIC867`, `CIC867a`, `CIC851`, `CIC851a`; CIC 865 MISSING (`CIC851a` carries «851 1°, 865 §1 y 866») | R English, ES AI: `OPhilaret292`, `OPhilaret291` | P (AC IX, Ap IX.52; LC IV.57): `LACIX`, `LApIX_52`, `LLCIV_57` | R: `RWCF28_4`, `RWSC95` | R: `BNHXIV`, `BBFMVII`; «BF&M 1925 XIII» MISSING |
| Material y fórmula (74) | R: `CIC849`, `CIC854`, `CEC1239` | R English, ES AI: `ODositheusXVI` (=`DOS16`) | R: `LSCIV_2`, `LSCIV_4` (the IV.4 wording is a table row, no German quoted: P) | R: `RWCF28_2`, `RWSC94` | R: `BNHXIV`, `BBFMVII` |
| Modo (75) | R: `CIC854` | R English, ES AI: `OPhilaret290` (=`PHIL290`), `OPhilaret288` | A3-text (LC IV «poured upon» IV.36, «sprinkled» IV.45/78, «sunk under the water» IV.65, «put under the water» IV.78; web transcription, German and print not collated); `LC4` (IV.65, 74–82, 86) exists; IV.36, IV.45, IV.78 have no id | R: `RWCF28_3` (Monterrey 1880 p. 140) | R: `BNHXIV`, `BBFMVII` |
| Quién administra (76) | R: `CIC861`, `CEC1256` | R English, ES AI: `ODositheusXVI` | **A3-replaced**: AC XIV (`LACXIV`) AI-ES, web transcription | R: `RWCF28_2` | **A3-replaced**: silence confirmed, BF&M VII + NH XIV (`BBFMVII`, `BNHXIV`) |
| Repetición (77) | R (wording fixed in the dossier: «no pueden reiterarse» CIC 845 §1; «no puede ser reiterado» CEC 1272): `CIC845`, `CIC845a`, `CEC1272`, `CIC869` | R English: `OPhilaret303`; Dositheus XV `ODositheusXV` | P (LC IV.77–79 paraphrase; IV.77 «Darum bleibt die Taufe immerdar stehen»): `LLCIV_77`, `LLCIV_77_79` | R: `RWCF28_7` | **A3-replaced**: silence confirmed, BF&M VII + NH XIV |
| Después del bautismo (78) | R: `CEC1254`, `CEC1244`; CEC 1233 MISSING | P (Philaret Q.295 paraphrase): `OPhilaret295` | P: `LSCIV_12`, `LLCIV_77_79` | P (WLC 167 AI-ES, paraphrase): `RWLC167` | R: `BNHXIV`, `BBFMVII` |

Page-level notes to carry: `B` l. 82 (Orthodox «Modo» and «Después» rest on Philaret 1839, not a present rule; Euchologion not read), l. 84 (WLC 167 AI-ES), l. 83 (A3 note on the replaced cells). The Catholic «Quién recibe» cell ends «adultos tras el catecumenado (CIC 851 1°, 865)»: `CIC865` is not in the registry.

### 2.3 `witnesses.items` (`B` §6: quotes, English, Spanish and the surrounding paragraph are in each entry)

`witnesses.historyLink` is the importer's (not research). Shared fields: `edition` = the entry's «Edition» line in Spanish, as the Eucharist page does («Traducción al español de Doctrina, hecha desde la edición inglesa de dominio público: …»). All Spanish quotes are AI-ES from the English; none is `verified`.

| id (proposal) | `B` entry (line) | author · work · locator | `date` (DateInfo) | edition | status / caveat | `entity` |
|---|---|---|---|---|---|---|
| `bw-didache` | B-W1 (103) | anonymous · Didaché · 7.1–3 | `{year:50, yearEnd:150, circa:true}` | ANF 7 (Buffalo, 1886) | ready; `anonymous:true`; says nothing on infants | `didache` |
| `bw-justin` | B-W2 (110) | Justino Mártir · Primera Apología · 61 | `{year:148, yearEnd:161, circa:true}` (tick c. 155) | ANF 1 (Buffalo, 1885), Dods and Reith | ready | `justin-martyr` |
| `bw-tertullian` | B-W3 (116) | Tertuliano · Sobre el bautismo · 18 | `{year:198, yearEnd:208, circa:true}` (tick c. 200) | ANF 3 (Buffalo, 1885), Thelwall | ready; speaks of delay, not refusal; the file claims no «earliest» (V93) | `tertullian` |
| `bw-cyprian` | B-W4 (123) | Cipriano · Carta LVIII (64 en Hartel) a Fido · 6 | `{year:253, circa:true, unconfirmed:true}` | ANF 5 (Buffalo, 1886), Wallis | `[unverified]` year (not read in a dated edition); the Hartel number rests on a repo note (V98) | `cyprian-of-carthage` |
| `bw-cyril` | B-W5 (134) | Cirilo de Jerusalén · Catequesis · Procatequesis 16 | `{year:348, circa:true}` (the editor's conditional inference, not a printed date) | NPNF2 7 (1894), Gifford | ready; the authorship of the Mystagogical set is not this text | `cyril-of-jerusalem` |
| `bw-nicaea-19` | B-W6 (141) | Concilio de Nicea I · canon 19 | `{year:325}` | NPNF2 14 (1900), Percival | ready (page heading «A.D. 325») | `nicaea-1` |
| `bw-gregory` | B-W7 (147) | Gregorio Nacianceno · Oración 40 · § 17 | `{year:381}` (heading «Jan. 6, 381»; the day is not settled: do not print a day) | NPNF2 7 (1894) | ready | `gregory-of-nazianzus` |
| `bw-augustine` | B-W8 (153) | Agustín · Sobre el bautismo, contra los donatistas · IV.24 | `{year:400, circa:true}` (the volume's contents «Circa, A.D. 400») | NPNF1 4 (1887) | ready; quote ends without a full stop (sentence continues) | `augustine-of-hippo` |
| `bw-carthage` | B-W9 (159) | Concilio de Cartago, Código africano · canon CX | `{year:418, alsoYears:[419]}` (page heading «A.D. 419»; the note says «Canon ij. of Carthage, A.D. 418») | NPNF2 14 (1900) | ready; `carthage-418` exists | `carthage-418` |
| `bw-ambrose` | B-W10 (165) | Ambrosio · Sobre los misterios · 5 § 28 | `{year:387, circa:true}` (Introduction: «possibly … about A.D. 387») | NPNF2 10 (1896) | ready; the chapter number is the dossier's reading of the OCR | `ambrose-of-milan` |
| `bw-basil` | B-W11 (177) | Basilio de Cesarea · Sobre el Espíritu Santo · 27.66 | `{year:374}` (chronological table) | NPNF2 8 (1895), p. 42 | ready; the section begins on p. 40, quote from p. 42 | `basil-of-caesarea` |

Order on the page: chronological. Only B-W3, B-W4, B-W7, B-W8, B-W9 speak of infants: the file keeps them for neutrality by the five-dossier rule (`B` l. 121); the converter must not add a selection note.

### 2.4 Full list of early texts (page 10)

`B` l. 187–211 (`Full list…`, 17 rows + the Constantinople I split = 18 rows). Statuses are in its Status column; after A3: Didache, Justin, Tertullian, Cyprian, Nicaea 19, Cyril, Gregory Or. 40 (quoted), Constantinople I creed `[verified: NPNF2 14 OCR]`, Constantinople I «canon 7» `[verified: NPNF2 14 note]`; the rows Irenaeus *Demonstration* (BiblIndex range 177–200, ranges not reproduced: Cloudflare), *Apostolic Tradition* (locator `[memory]`), Origen, *De sacramentis* (the edition rates it «more or less doubtful»; NPNF2 10 holds *On the Mysteries* only), Chrysostom, Augustine locator, Trullo (year only), John of Damascus stay `[memory]` or `[source]`: **import them as list rows with their tag, never as quotes**.

### 2.5 `fingerprint.marks`

Source: `doctrines/fingerprint-dates.md` section «Baptism» (rows of l. 125–166 after A3's edits) plus the rows below that the witnesses add. Label convention: figure/work name in Spanish; the Eucharist page uses a range mark and a tick mark for the same figure (`doctrine.es.ts` l. 11–19).

| Row to add or change | `year`/`yearEnd`/`circa` | Source |
|---|---|---|
| Didaché | 50–150, tick 100 (was 50–120) | decided; `fingerprint-dates.md` edited |
| Justino Mártir | 148–161, tick 155 | decided |
| Tertuliano, *Sobre el bautismo* | 198–208, tick 200 | BKV record, range only |
| Cipriano (Carta a Fido) | c. 253 `[unverified]` | `B` B-W4 |
| Cirilo de Jerusalén | c. 348 (conditional inference) | `B` B-W5 |
| Basilio, *Sobre el Espíritu Santo* | 374 | `B` B-W11 |
| Gregorio Nacianceno, Or. 40 | 381 | same row as before |
| Constantinopla I, credo | 381 (split from canon 7; canon 7 gets no tick) | decided |
| Ambrosio | c. 387 (range 387–391 for the Eucharist row's «c. 390»: keep the existing tick) | `B` B-W10 |
| Agustín, *Sobre el bautismo* | c. 400 | `B` B-W8 |
| **Cartago 418 (new row: `fingerprint-dates.md` l. 174 said «not ticked because no Baptism page cites it»; B-W9 now cites it)** | 418 (also 419) | `B` B-W9 |
| Concilio de Vienne | 1312 (registry has 1311–1312: correction pending outside `docs/research/`) | `fingerprint-dates.md` l. ~168 |
| Catecismos de Westminster | 1648 (registry says 1647) | same |
| *Oros* de 1755 | 1755, drop «/56» | same |

### 2.6 `connected.items` (Baptism)

One edge: **Baptism → Eucharist** (DECISIONS evening item 3). See section 5. The Baptism↔Justification edges wait (`B` l. 63 updated).

### 2.7 Blocks for Baptism

- The Catholic page `src/content/pages/baptism/catholic.es.ts:1546` still carries the wrong CV-7 string «El bautismo «no puede reiterarse»» (the dossier and `review-page.data.js` were fixed; the page needs a reconversion; report only).
- Outstanding unconfirmable items in `B` l. 379–390: Lutheran mode is now resolved (LC IV read whole, web transcription); V40 (Q3 five-way) and the `[memory]` rows remain.

## 3. Papacy

Source file: `doctrines/papacy/shared.md` (`P`). The Baptist column is deliberately thin; the page must not invent a Baptist position (`P` l. 10, l. 63).

### 3.1 `lede`, `legend`, `common`

| Field | Value or pointer | Status |
|---|---|---|
| `lede` | proposal: «¿Quién tiene autoridad en la Iglesia, y hasta dónde llega?» | missing (Pedro's wording) |
| `legend` | proposal: Irenaeus, *Contra las herejías* 3.3.2 (P-W2); it needs its Latin and the ANF translators' caution shown (`P` l. 109) | decision |
| `common.text` | `P` l. 20 (the quoted block) | ready as draft copy; the Lutheran 1a cell is a dossier paraphrase of SA II.4.1/4.9 (quote the Triglot before publishing); the Baptist 1a/1b cells say «Lord», not «head» (`P` l. 30, l. 42) |
| `common.questions` | `P` §2 l. 50–52: «¿Hay en la Iglesia alguna autoridad humana por encima de la iglesia local?», «¿Puede una persona o una asamblea definir la doctrina sin error?», «¿A quién se dieron las llaves y qué es la roca?» | ready as copy; the second question's wording is closest to the Catholic framing (`P` l. 51 «Terms checked»); the third has Orthodox and Baptist gaps stated |

### 3.2 `practice` (`P` §3, l. 67–72; notes l. 74–79)

Aspects: Quién gobierna [`governs`], Cómo se elige o nombra [`appointed`], Cómo se juzgan las controversias [`controversies`], Qué se debe a la enseñanza de los pastores [`owed`], Disciplina [`discipline`], Dónde se expresa la unidad [`unity`]. A3-replaced cells are marked **A3**; AI-ES and the limits of 0.3 apply to them.

| Aspect (line) | Catholic | Orthodox | Lutheran | Reformed | Baptist |
|---|---|---|---|---|---|
| governs (67) | R: `LG22`, `CIC375`, `CIC377` | R English, ES AI: `OPhilaret279`, `ODositheusX` (Russian synodal form, 19th c.) | R: `LTr61` | R: `RWCF30_1` | R: `BBFMVI` |
| appointed (68) | R (Latin church): `CIC349`, `CIC377` | R: `ODositheusX` (pp. 413–414) | R: `LTr24` (dossier QE-3) | **A3** WCF 25 and 31 no procedure; WLC 158 («duly approved and called»): `RWLC158`, `RWCF25_3`; no 31.2 id (edition issue, 0.2) | **A3** silence confirmed in BF&M VI and NH XIII: `BBFMVI`, `BNHXIII` |
| controversies (69) | R: `CIC337`, `CIC341` | R English: `OPhilaret278` | P (Treatise 56 paraphrase): `LTr56` | R (historical numbering, see 0.2): `RWCF31_3`, `RWCF31_4`, `RWCF31_3_4` | **A3** BF&M XIV says who has no authority (`BBFMXIV` MISSING; `BNHXIII` exists) |
| owed (70) | R: `CIC752`, `CEC891` | R English: `OPhilaret282` | **A3** AC XXVIII.21–23 (`AC28_21` exists: check it covers 21–23; web transcription) | R: `RWCF31_3` | **A3** silence on a duty to pastors' teaching: `BBFMVI` (BF&M XIV, NH XIII) |
| discipline (71) | R: `CIC751`, `CIC833` | **P** Philaret Q.275: references only, text not read; `OPhilaret275` MISSING | R: `LTr60` | R: `RWCF30_4` | **A3** no text on discipline in BF&M 2000 or NH XIII–XIV (negative claim from a word search of the BF&M page; NH read) |
| unity (72) | R: `CEC1369` | **A3** Philaret Q.261 (258–260); `OPhilaret261` MISSING (OCR of Schaff II p. 484–485, page image not read) | P (SA II.4.9, hypothetical): `LSAII_4_7_9` | **A3** WCF 25.1 and 26.2 (Spanish 1880 OCR); `RWCF25_1` exists, `RWCF26_2` MISSING | **A3** BF&M XIV and NH XIII: `BBFMXIV` MISSING, `BNHXIII` |

Note to carry: the Orthodox cells rest on the 1672 confession and Philaret 1839; the 1848 and 1895 encyclicals are a distinct, dated layer (`P` l. 76). WCF 25.6 (the Pope clause) and SA II.4.10 are historical wording with status lines in their dossiers, not practice cells (`P` l. 77).

### 3.3 `witnesses.items` (`P` §6)

| id (proposal) | `P` entry (line) | author · work · locator | `date` | edition | status / caveat | `entity` |
|---|---|---|---|---|---|---|
| `pw-ignatius` | P-W1 (100) | Ignacio de Antioquía · A los romanos · salutación | `{year:107, yearEnd:110, circa:true}` | ANF 1 (Buffalo, 1885) | ready; recension and the Greek «προκαθημένη τῆς ἀγάπης» not checked | `ignatius-of-antioch` |
| `pw-irenaeus` | P-W2 (106) | Ireneo · Contra las herejías · III.3.2 | `{year:180, yearEnd:189, circa:true}` | ANF 1 (1885), Roberts and Rambaut | ready **with** the Latin and the translators' «far from sure» caution (`P` l. 109); survives only in Latin | `irenaeus-of-lyon` |
| `pw-cyprian` | P-W3 (113) | Cipriano · Sobre la unidad de la Iglesia · 4 | `{year:251, unconfirmed:true}` (`[memory]` date) | ANF 5 (1888 printing) | ready with the two-texts trap (`P` l. 117): show the Received Text as the ANF prints it; do not quote the Primacy Text as Cyprian's | `cyprian-of-carthage` |
| `pw-firmilian` | P-W4 (120) | Firmiliano de Cesarea · carta a Cipriano (LXXIV ANF / 75) | `{year:256}` (ANF heading) | ANF 5 (1886) | ready; Latin translation of a lost Greek letter | check |
| `pw-nicaea-6` | P-W5 (130) | Nicea I · canon 6 | `{year:325}` | NPNF2 14 (1900) | ready; Greek and Latin not read | `nicaea-1` |
| `pw-jerome-15` | P-W6 (136) | Jerónimo · Carta XV a Dámaso · § 2 | `{year:376, alsoYears:[377]}` | NPNF2 6 (1893) | ready | `jerome` |
| `pw-chalcedon-28` | P-W7 (142) | Calcedonia · canon 28 | `{year:451}` | NPNF2 14 (1900) | ready; the quote has a `[…]` where the Greek parenthesis was | `chalcedon-451` |
| `pw-gregory` | P-W8 (148) | Gregorio Magno · Carta V.XX a Mauricio | `{year:594, yearEnd:595}` (Book V «Indiction XIII (a.d. 594-5)»; no year printed for Ep. XX itself) | NPNF2 12 (1895) | ready; two quotes | `gregory-the-great` |
| `pw-leo` | P-W9 (161) | León Magno · Sermón III · cap. III | `{year:440, unconfirmed:true}` (the sermon's heading prints no year; ordained 29 Sept. 440 per the Introduction) | NPNF2 12 (1895), p. 117 | **decision**: the model needs a date; the sermon is an anniversary sermon of unstated year, so the page should show «desde 440» or an unconfirmed mark | `leo-the-great` |
| `pw-sardica` | P-W10 (168) | Concilio de Sárdica · canon III | `{year:343, alsoYears:[344]}` | NPNF2 14 (1900), p. 417 | ready (page image read); first of two versions; Greek and Latin not read | check |
| `pw-jerome-146` | P-W11 (174) | Jerónimo · Carta CXLVI a Evangelo · § 1 | **decision**: «The date of the letter is unknown» (heading); Jerome died c. 420, which is not a date of the letter | NPNF2 6 (1893), p. 289 | needs an «unknown date» convention (DECISIONS 2026-10-06 covers birth dates only); page image read | `jerome` |

### 3.4 Full list (page 10)

`P` l. 184–202 (17 rows after A3 added Jerome). Updated statuses: Nicaea 6, Sardica III, Chalcedon 28, Leo Serm. III, Jerome XV and CXLVI, Gregory V.XX quoted; Gregory VIII.30 dated «Indiction I, a.d. 597-8» by the edition (`neutral/e11-e12-findings.md`; the narrower «July 598» of `neutral/fathers-verification.md` has another source and its month stays `[unverified]`). Still `[memory]`: *1 Clement*, Damasus *Decree*, Leo Ep. 10 and Serm. IV, Gelasius, Chalcedon acclamation, John of Damascus.

### 3.5 `fingerprint.marks`

Source: `fingerprint-dates.md` section «Papacy» (l. 17–38, 18 rows) plus **new rows the witnesses need** (the table has none for them): Cipriano c. 251 `[unverified]`; Firmiliano 256; Sárdica 343–344; Jerónimo 376–377; León Magno 440 (see decision above); Gregorio Magno 594–595; and for 1b/1a texts the existing rows Ignacio c. 107, Ireneo c. 180, Nicea 325, Calcedonia 451. Boniface VIII *Unam sanctam* 1302 (18 Nov.), Florence *Laetentur caeli* 1439 (6 July), Vatican I 1870, the encyclicals 1848 and 1895: rows exist and are unchanged.

### 3.6 `connected.items` (Papacy)

Three edges: **Papacy → Sola Scriptura**, **Papacy → Baptism**, **Papacy → Eucharist**. Section 5.

## 4. Sola Scriptura

Source file: `doctrines/sola-scriptura/shared.md` (`S`). The page title and home row are open (`S` l. 10 item 3); the questions never use the Latin slogan.

### 4.1 `lede`, `legend`, `common`

| Field | Value or pointer | Status |
|---|---|---|
| `lede` | proposal: «¿Qué autoridad tiene la Escritura, y quién decide lo que significa?» | missing (Pedro's wording) |
| `legend` | proposal: Ireneo, *Contra las herejías* III.4.1–2 (S-W2), which must travel with S-W1 (`S` l. 109: «the importer must not use only one») | decision |
| `common.text` | `S` l. 20 | ready as draft copy; 1a Lutheran and Baptist cells need the actual passage quoted before publishing (`S` coverage table); the Lutheran text names the Scriptures as the rule, not as of divine origin (V6) |
| `common.questions` | `S` §2 l. 50–52: «¿Toda la verdad necesaria para la fe está en la Escritura?», «¿Quién decide el sentido de la Escritura?», «¿Qué libros forman la Escritura?» | ready as copy; the first is close to WCF 1.6's wording (owner's call, V21); the third is a three-way question (Lutheran and Baptist not addressed in the passages read) |

### 4.2 `practice` (`S` §3, l. 67–71; notes l. 73–78)

Aspects: Lectura personal de la Biblia [`personal-reading`], Cómo debe leerse [`how-read`], En el culto y la predicación [`worship`], Traducciones y ediciones [`translations`], Cómo se enseña lo recibido [`teaching`].

| Aspect (line) | Catholic | Orthodox | Lutheran | Reformed | Baptist |
|---|---|---|---|---|---|
| personal-reading (67) | R: `CEC2653` | R English: Dositheus Q. I «No» (Schaff II p. 433; the omission in Russian editions is not collated); `ODositheusQuestionI` MISSING | **A3** LC Preface + Ep. RN 5 (the Catechism, not Scripture; `LFCEpRN_5` exists, LC Preface id MISSING) | R: `RWCF1_8`, `RWLC156` | R (existing wording; BF&M I and VIII say nothing about reading: `BBFMI`) |
| how-read (68) | R: `CEC2653`, `VD87` | R English: Dositheus Q. II (`ODositheusII`) | **A3** no rule on how to read; the norm: Ep. RN 1 and 7 (`LFCEpRN_1_y_7`); OCR search of the English | R: `RWLC157` | R: `BBFMpre_mbulo`/`BFMpre2000` (existing wording) |
| worship (69) | R: `SC24`, `CIC767` | R: `OPhilaret42` | R: `LACXXVIII_8` | R: `RWLC158` | `escaso` (the dossier calls observed practice a map gap) |
| translations (70) | R: `CIC825` | **A3** Dositheus Q. I (a neighbouring question); no edition named; `ODositheusQuestionI` MISSING | **A3** Ep. VII, rejected thesis 8 (one rendering of Acts 3:21); `LFCEpVII` exists | R: `RWCF1_8`, `RWLC156` | **A3** silence confirmed: BF&M I and NH I (`BBFMI`, `BNHI`) |
| teaching (71) | R: `CIC760`, `CIC833` | R English: `ODositheusQuestion_III` | R/P: `LFCEpRN_1_y_7`, `LFCSDRN_8` (historical report) | R: `RWLC160` | P (preamble, dossier paraphrase): `BBFMpre_mbulo` |

### 4.3 `witnesses.items` (`S` §6)

| id (proposal) | `S` entry (line) | author · work · locator | `date` | edition | status / caveat | `entity` |
|---|---|---|---|---|---|---|
| `sw-irenaeus-1` | S-W1 (99) | Ireneo · Contra las herejías · III.1.1 | `{year:180, yearEnd:189, circa:true}` | ANF 1 (1885) | ready; survives in Latin; pair with S-W2 | `irenaeus-of-lyon` |
| `sw-irenaeus-2` | S-W2 (105) | Ireneo · Contra las herejías · III.4.1–2 | same | ANF 1 (1885) | ready; two quotes in one entry | `irenaeus-of-lyon` |
| `sw-athanasius` | SS-W5 (115) | Atanasio · Contra los paganos · § 1 | `{year:318, circa:true}` (NPNF2 4 Prolegomena table, «probable») | NPNF2 4 (1892) | ready; both halves of the sentence kept | `athanasius-of-alexandria` |
| `sw-cyril` | SS-W6 (121) | Cirilo de Jerusalén · Catequesis IV · § 17 | `{year:348, circa:true}` (conditional inference) | NPNF2 7 (1894) | ready; the lecture title is the dossier's reading | `cyril-of-jerusalem` |
| `sw-vincent` | SS-W7 (127) | Vicente de Lérins · Conmonitorio · II [5] | `{year:434}` (the edition's inference from «ante triennium ferme» after Ephesus 431) | NPNF2 11 (1894) | ready; the `[…]` replaces a longer clip stated in the entry | `vincent-of-lerins` |
| `sw-basil` | SS-W8 (139) | Basilio · Sobre el Espíritu Santo · 27.66 | `{year:374}` | NPNF2 8 (1895), pp. 40–41 | ready (pages read in images); pair with `bw-basil` | `basil-of-caesarea` |
| `sw-augustine` | SS-W9 (145) | Agustín · Sobre la doctrina cristiana · II.8.12 | `{year:397}` (NPNF1 2 Introductory Note «A. D. 397»; the other fingerprint row shows c. 396–397) | NPNF1 2 (1887), p. 538 | ready (page image read); the date line cross-refers to *Contra epistulam fundamenti* 396–397 | `augustine-of-hippo` |

### 4.4 Full list (page 10)

`S` l. 153–168. After A3: Irenaeus, Athanasius (c. 318, replaces the old c. 335), Cyril, Basil, Augustine (II.8.12), Vincent are quoted; *Against Hermogenes* 22 has a verified ANF 3 quote in its row; still `[memory]`: Tertullian *Prescription*, Clement, Origen, Festal Letter 39, Against Faustus, Laodicea and Carthage 397 canon lists, John of Damascus.

### 4.5 `fingerprint.marks`

Source: `fingerprint-dates.md` section «Sola Scriptura» (l. 40–63) plus new rows for the witnesses: Ireneo c. 180, Atanasio c. 318, Cirilo c. 348, Basilio 374, Agustín 397 (the Sola Scriptura table shows «c. 397»; the Eucharist page shows `year: 396, yearEnd: 397`), Vicente 434. The Assemblies of God 2015 row exists.

### 4.6 `connected.items` (Sola Scriptura)

Three edges: **Sola Scriptura → Papacy**, **→ Baptism**, **→ Eucharist**. Section 5.

## 5. Connected edges (DECISIONS evening item 3; `connected-doctrines.md` keeps the A2 evidence)

Spanish below is a research draft of the sentence, in the voice of the Eucharist page's `connected` items (`doctrine.es.ts` l. 426–433), neutral; every sentence uses only texts cited in the dossiers; none is page copy until Pedro reads it.

| From → to | Draft sentence (es) | Support and status |
|---|---|---|
| Baptism → Eucharist | «Los textos bautistas hacen del bautismo un requisito previo para la Cena y para ser miembro de la iglesia (Nueva Hampshire XIV; Fe y Mensaje Bautistas VII); el Catecismo católico llama al bautismo «la puerta que abre el acceso a los otros sacramentos» (CEC 1213).» | `B` l. 61; `BNHXIV`, `BBFMVII`, `CEC1213` exist; the claim that the Catholic text places the Eucharist after baptism (CEC 1233, 1244) is the dossier's line, not re-read: `CEC1233` MISSING; ready for the two quoted texts, `[unverified]` for the placement |
| Papacy → Sola Scriptura | «Quién juzga las controversias de fe es también la pregunta de Sola Scriptura: los textos católicos ponen en la Iglesia el juicio sobre el sentido de la Escritura (Dei Verbum 10); el texto reformado dice que los sínodos y concilios «may err, and many have erred» (Westminster Confession 31.4, Edimburgo 1894; en la edición española de Monterrey 1880 es el cap. XXXI, III, p. 155, con otra redacción: no se cita en español sin la etiqueta de traducción de IA).» | `P` l. 56; `DV10`, `RWCF31_4` exist; the Spanish «pueden errar…» is AI-ES from the English unless the 1880 numbering III is quoted (see 0.2); `[unverified]` |
| Sola Scriptura → Papacy | «Quién ha recibido autoridad para enseñar es la pregunta de Papado: allí los textos católicos, ortodoxos, luteranos y reformados responden sobre el papa, y los católicos, luteranos y reformados sobre la roca y las llaves; los textos bautistas leídos no nombran al papa.» | `S` l. 56; plain pointer sentence, no quotation; ready |
| Papacy → Baptism | «Los textos católicos definen la plena comunión por «los vínculos de la profesión de fe, de los sacramentos y del régimen eclesiástico» (CIC 205) y piden que los bautizados en una comunidad no católica no sean bautizados bajo condición salvo duda seria (CIC 869 §2); la página de Bautismo muestra qué dice cada tradición sobre la repetición del bautismo.» | `P` l. 57; `CIC205`, `CIC869` exist (dossier `[verified: vatican.va]`); ready |
| Papacy → Eucharist | «Quién es parte de la Iglesia y de la comunión es también quién puede comulgar: [sentence withdrawn until a cited text on who may receive communion is read, V6 G8]» | `P` l. 57 only; no text about who communes was read for this edge: `[unverified]`, needs a cited text from the Eucharist dossiers |
| Sola Scriptura → Baptism | no sentence drafted: the dossier line (`S` l. 57) names the join («qué se practica y se rechaza como «tradiciones de hombres»») but cites no text of either side | missing: needs one sentence that cites a text of each tradition on baptismal practice |
| Sola Scriptura → Eucharist | same | missing |

Edges that wait for the Justification page: Baptism→Justification, Justification→Baptism, Sola Scriptura→Justification (A2's 2, 3, 8); Eucharist→Justification already exists on the built page.

## 6. What blocks or limits the three imports (read before converting)

1. Practice cells marked P (dossier paraphrase) cannot be quoted as the document's words until the print is read: Lutheran SA II.4.9, Treatise 56, SC IV.4, LC IV.77–79; Philaret Q.275; WLC 167; Baptist preamble. Listed per cell above.
2. AI-ES everywhere except the Catholic official Spanish, the Reformed Monterrey 1880 Spanish, and Orthodox/Lutheran/Baptist cells that carry no Spanish yet. The label wording is in 0.
3. Missing registry ids: `CIC865`, `CEC1233`, `OPhilaret261`, `OPhilaret275`, `RWCF26_2`, `BBFMXIV`, `ODositheusQuestionI`, the LC Preface, the LC IV paragraphs 36/45/65/78, «BF&M 1925 XIII», and `AC28_21` covers XXVIII.21–28: confirmed. Their texts are in `b3-silence-cells.md` (A3 rows) and, where a record exists, `sources/english-quotes.md`.
4. Decisions that the model needs: Leo Sermon III year; Jerome Letter CXLVI «unknown date»; legend witnesses; ledes.
5. The Lutheran page-image collation (`sources/lutheran-triglot-collation.md`) is not done: every Lutheran quote stays `[verified: web transcription]`.

## Verification

V6 (Sonnet, 2026-11-01 18:31–18:46, 361k subagent tokens, 94 tool uses): `doctrines/verification-02-spec-A3.md`, 79 items: 55 confirmed, 19 wrong (mostly wording, format, off-by-one line numbers), 5 unconfirmable. All 21 numbered corrections were applied by A3 at 18:47 to this spec, the three `shared.md`, `connected-doctrines.md`, `fingerprint-dates.md` and `neutral/date-conflicts.md`, except: the verifier's suggested Spanish for the Orthodox «Lo que sobra» cell is kept as AI-ES to be labelled and is flagged «or drop the cell»; the open points the verifier raised and A3 did **not** resolve: (1) the Orthodox «Lectura personal» cell (Dositheus Q. I, «No», Schaff II p. 433) and the new Orthodox «Traducciones» cell (Robertson 1899, which forbids no one to read) read the same question in two editions and are not collated; (2) the registry's `RWCF31_3`/`RWCF31_4` numbering; (3) the Justin range on BiblIndex (HTTP 403) and the BF&M 2000 print (only the 2023 Wayback copy) remain unchecked. The corrected text was **not** re-verified.
