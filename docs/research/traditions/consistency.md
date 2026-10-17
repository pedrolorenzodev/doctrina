# Cross-tradition consistency pass (six maps)

Step 3 of `docs/features/tradition-universe.md`. Run of 2026-10-15. Scope: `catholic.md`, `orthodox.md`, `lutheran.md`, `reformed.md`, `baptist.md`, `pentecostal.md`, checked against `BRIEF.md`. Only those six files and this one were edited. No git writes. The `verification-*.md` files were read as reference only.

## 0. Progress

- **Status: done (2026-10-15).** Items 1–4 below are applied in the maps and logged here. Each map's Progress block ends with "Consistency pass 2026-10-15, see consistency.md".
- Changes per map: Catholic 9 (4 loci, Ephesus ×3, 879–880, tag legend); Orthodox 5 (2 loci, canon counts, one neutrality wording, tag legend); Lutheran 12 (10 loci, filioque wording, tag legend); Reformed 7 (6 loci, tag legend); Baptist 10 (8 loci, title moved to line 1, tag legend); Pentecostal 5 (4 loci, tag legend).
- Unresolved: §5 below.
- No §10 open question was touched, so no note was added to any §10.

## 1. Structure and tags

**Sections.** All six maps have §0–§11 with the BRIEF's numbering and order (checked on headings). Small title variants, accepted as they are (the number is the key, the qualifier is the tradition's own): Catholic §2 "(in the Church's own terms)"; Orthodox §2 "(in Orthodox terms)"; Lutheran/Reformed/Baptist §3 "…the tradition itself uses"; Pentecostal §4 "The canon, by tiers and families", §6 without "(lex orandi)"; Lutheran §8 "(locus → BoC locators)"; Orthodox §8 "(locus → canon documents with locators)".

Extra sections outside the BRIEF, accepted (they are evidence or reference, not new sections): Lutheran "Abbreviations and sources used throughout" between §0 and §1; raw logs after §11 in Orthodox ("Running log"), Reformed and Baptist ("Raw findings log").

Changed:

| Map | Where | Before → after |
|---|---|---|
| baptist | top of file | The italic intro paragraph came before the H1; the H1 `# Baptist — source universe` is now line 1, like the other five. |

Not changed, listed instead (bigger than a heading rename):

- **§4 sub-heading styles differ:** Catholic `4.A T1 — …` and `4.B.2`; Orthodox and Lutheran `Tier 1 — …`; Reformed and Baptist `4A.`; Pentecostal `4.A`. Renaming them would break cross-references in text ("§4A", "4.B.2", "Tier 3 row", "4.B.5 item 8"). The tiers are tradition-specific by design (BRIEF §4), so only the label style differs. If uniform labels are wanted, do it with a script that rewrites the references too.

**Tags.** Shared vocabulary, now stated in a legend line at the top of every map (added to Lutheran, Reformed, Baptist; completed in Catholic, Orthodox, Pentecostal):

| Tag | Meaning | Maps |
|---|---|---|
| `[verified]` (+ ", source" or ", secondary") | read on a primary or authoritative page or scan | all |
| `[snippet]` | seen only in a search result | all |
| `[memory]` | agent's own knowledge, unchecked | all |
| `[2026-10-09]` | verified in the earlier source-research run (file named) | Orthodox |
| `[secondary]` / `[secondary: …]` | read only on a secondary source; not displayed as verified | Orthodox, Reformed (1) |
| `[inference]` | deduced from verified facts, not stated by the source | Catholic, Baptist, Pentecostal |
| "unconfirmed in verification-X.md item" | the verifier could not confirm it | Orthodox, Baptist, Pentecostal, Lutheran/Reformed ("unconfirmed" + item) |
| `[unconfirmed: ver. X]`, `[unconfirmed: DH]` | Catholic form of the line above; DH = only from the unusable DH copy | Catholic |
| `[unverified]`, `[not verified]` | not checked, same weight as `[memory]` | Catholic (merged subagent sections), Baptist (1) |
| `[v]`, `[m]` (Lutheran, Orthodox §8); `[V]`, `[M]` (Orthodox §1.2) | table shorthand, legend where used | Lutheran, Orthodox |

Not changed: the Catholic `[unconfirmed: ver. X]` form and the other maps' "unconfirmed in verification-…" form are equivalent; rewriting ~100 Catholic tags to the other form gains nothing and risks errors, so both are defined as synonyms.

## 2. Shared items

### 2.1 Ephesus 431: end date (settled)

Only `catholic.md` gives day dates; `orthodox.md` gives "431" (consistent). Finding: **31 July 431 is the last recorded session, not the close.**

- Tanner's introduction (papalencyclicals.net copy): opening "On 22 June, however, before the arrival either of the Roman legates or the eastern bishops led by John of Antioch, Cyril of Alexandria began the council"; fifth session 17 July, sixth 22 July; the emperor "approved neither and sent the bishops away"; no closing date [verified, https://www.papalencyclicals.net/councils/ecum03.htm, fetched 2026-10-15].
- J. Chapman, "Council of Ephesus", *Catholic Encyclopedia* vol. 5 (1909, PD): "In the seventh and last session on 31 July (it seems)"; "The synod was dissolved about the beginning of October, and Cyril arrived amid much joy at Alexandria on 30 October" [verified, https://www.newadvent.org/cathen/05491a.htm, fetched 2026-10-15].
- Price–Graumann, *The Council of Ephesus of 431: Documents and Proceedings* (Translated Texts for Historians 72, Liverpool 2020): publisher's description "after four months the council was dissolved without having ever properly met" [snippet only; the book is in copyright and was not read; a copy found on isidore.co was not opened]. ACO I (Schwartz) not consulted.
- Wikipedia's "22 June – 31 July 431" (the source of the previous correction) gives the last session as the end.

| Map | Where | Before → after | Source |
|---|---|---|---|
| catholic | 4.B.2 entry 3, heading | "Ephesus, 22 Jun - 31 Jul 431" (Wikipedia, [snippet]) → "opened 22 Jun 431; last session 31 Jul 431; dissolved by the emperor about the beginning of Oct 431", with the history of the entry kept | Tanner [verified], Chapman [verified], Price–Graumann [snippet] |
| catholic | 4.B.2 entry 3, Docs | session 7 "31 Aug?" (from DH) → 31 Jul 431 "it seems" | Chapman [verified] |
| catholic | 4.B.5 discrepancies | "entry 3 now gives 31 Jul with the caveat" → settled as above; display "22 June – c. October 431" or "opened 22 June 431" | same |

Display rule for the site: "Éfeso, 431 (abierto el 22 de junio; disuelto hacia comienzos de octubre)". The dissolution date is approximate in the sources ("about"), so never print a day.

### 2.2 Constantinople 879–880 as "eighth" in Orthodox usage

| Map | Where | Before → after | Source |
|---|---|---|---|
| catholic | 4.B.1.4, Constantinople IV vs 879–80 | "I did not verify an Orthodox primary statement here [memory]" → quotes the 1848 Encyclical §5 xi: the Filioque "was subjected to anathema … by the eighth Ecumenical Council, congregated at Constantinople" [verified], pointing to `orthodox.md` (which keeps the count at seven) | https://sourcebooks.web.fordham.edu/mod/1848orthodoxencyclical.asp, fetched 2026-10-15 |

### 2.3 The seven councils: dates and counts compared

Catholic 4.B.2 entries 1–7 against Orthodox Tier 1 table: years agree for all seven (325, 381, 431, 451, 553, 680–681, 787). Day dates appear only in the Catholic map (each tagged there). Canon counts agree (Nicaea I 20; Constantinople I 7 Greek / 4 old Latin; Ephesus 8; Chalcedon 30; Nicaea II 22; Constantinople III none). Definition placements agree (Chalcedon session 5; Nicaea II horos session 7).

| Map | Where | Before → after | Source |
|---|---|---|---|
| orthodox | Tier 1, note under the table | Nicaea I 20 canons, Constantinople I 7, Constantinople II 14 anathemas "not recounted [memory]" → counts [verified]: "The Canons of the 318 Holy Fathers" I–XX; Hefele in Percival's "Introduction on the Number of the Canons": "The old Greek codices and the Greek commentators of the Middle Ages, Zonaras and Balsamon, enumerate seven", old Latin versions "only recognize the first four"; "The Capitula of the Council" I–XIV (pp. 312–316). "Session 8" stays unconfirmed: NPNF14 prints the Capitula after "Extracts from the Acts, Session VII" and "The Sentence of the Synod" with no session number | NPNF14 (Percival 1900), IA `sevenecumenicalc00perc`, OCR from the previous run's scratch (`…/8d9ad552…/scratchpad/traditions/orthodox/npnf14n.txt`) |

Compatible, not changed:
- **Trullo:** Orthodox "691/2", Catholic "692" (COGD, Nedungatt). NPNF14 p. 357 quotes Hefele: "it was opened after September 1, 691, and before September 1, 692"; Percival's running head is "QUINISEXT. A.D. 692" [verified, same OCR]. Shared form for the site: "Concilio Quinisexto (in Trullo), 691/692".
- **How Trullo is counted:** Catholic, after Nedungatt, "in the East regarded as part of the 6th"; Orthodox "canonical completion of the Fifth and Sixth (Penthekte)", Pedalion "under the sixth". Both are attributed; in the site the Orthodox column uses the Orthodox wording.
- **Who counts what:** Catholic 21 (the seven + 14 Western general councils, a received convention: Nedungatt); Orthodox seven (Pedalion, OCA) plus later councils "of universal authority" (Crete 2016 §3); Lutheran receives the three creeds, not a list of councils; Reformed: councils "may err" (WCF 31.4 in 1647 / 31.3 in later texts); Baptist and Pentecostal: none. Each map says this in its own words; no conflict.

### 2.4 Creeds

| Creed | Catholic | Orthodox | Lutheran | Reformed / Baptist / Pentecostal |
|---|---|---|---|---|
| Apostles' | T1, CCC 194 | not mapped (the map names no Orthodox text that receives it) | BoC *Tria Symbola* | received by CRC, PC(USA), Hungary, Gallican V, Belgic IX; Orthodox Creed 1678 art. XXXVIII (General Baptists) |
| Niceno-Constantinopolitan | T1, Latin text with *Filioque* | "Symbol of faith", without *Filioque* in every book read | Western text with *Filioque* | same Western text where received; IPHC art. 4 has the *filioque* clause in its own words |
| Athanasian (*Quicumque*) | T1, CCC 192 | not mapped | BoC | CRC yes, PC(USA) Book of Confessions no; Gallican V, Belgic IX; Orthodox Creed 1678 |
| Chalcedonian definition | council definition (T2) | EC 4 definition (Tier 1) | via Cat. Test. only | INPM and IPCH add it (Reformed §3) |

| Map | Where | Before → after | Source |
|---|---|---|---|
| lutheran | Tier 1 row 1 | "Filioque wording: [memory, to check in Triglot p. 30]" → adds the bookofconcord.org (Triglot English) wording "who proceedeth from the Father and the Son" [verified]; Triglot page number still unchecked | https://bookofconcord.org/ecumenical-creeds/nicene-creed/, fetched 2026-10-15 |

Not changed:
- Spanish names differ by tradition: Catholic "Símbolo de los Apóstoles", "Símbolo atanasiano"; Lutheran "Credo Apostólico", "Atanasiano"; Orthodox "Símbolo de la fe". These follow each tradition's own Spanish usage; keep them per column.
- Athanasian Creed verse numbering: Catholic "40–44 verses (numbering varies) [memory]", Lutheran "Triglot ¶¶1–40 [memory]". Not checked: the bookofconcord.org text has no verse numbers. Both stay [memory] until the Triglot or Schaff II scan is read.

### 2.5 Editions of shared texts

- **NPNF14:** both maps that use it cite H. R. Percival (ed.), *The Seven Ecumenical Councils*, NPNF 2nd series vol. 14 (1900), PD, IA `sevenecumenicalc00perc`. Consistent.
- **Mansi:** volumes agree where both maps give them (Nicaea I 2; Trullo 11; others in Catholic only, tagged unconfirmed: DH).
- **Schaff, *Creeds of Christendom*:** Catholic and Orthodox cite vol. II (1877); Reformed cites vol. III through ccel.org and once "3rd/4th ed. appendix". Not contradictory, but the edition behind ccel is not named in any map. Not checked here; whoever builds citations should name the edition once and use it everywhere.
- **Tanner, *Decrees of the Ecumenical Councils*:** cited only by Catholic (papalencyclicals.net copy of his introductions, facts and short quotes only). No conflict.
- **Reina–Valera 1960:** Reformed [verified] (CLIR credit "© Sociedades Bíblicas Unidas") and Pentecostal [verified] ("© Sociedades Bíblicas en América Latina 1960, renewed © SBU 1988"; Bible Gateway "basic text most used by the evangelical Spanish-speaking church") agree. Lutheran and Baptist say Spanish use of RVR 1960 from [memory]; the Pentecostal citation covers Spanish-speaking evangelicals in general, not those bodies, so their tags were left as they are.

### 2.6 Scripture canon facts

No conflict. Catholic: Trent IV (8 Apr 1546), CCC 120 "46 … (45 if we count Jeremiah and Lamentations as one) and 27"; Orthodox: no single conciliar list, Trullo c.2 receives disagreeing lists, Greek and Russian usages differ; Lutheran: no list in the BoC; Reformed and Baptist: 66 books (WCF 1.2–1.3; 2LCF 1.2–1.3); Pentecostal: IPHC art. 5 "66 books", others silent. Laodicea c.59–60, Carthage c.24, Athanasius' Festal Letter 39 appear only in the Orthodox map.

## 3. Doctrine-index loci

**Canonical list** (BRIEF §8 wording, capitalised; one change: "the papacy / primacy" → "Papacy / primacy", which five maps already used). All six §8 tables now use these names in this order (checked by script):

1. Scripture and its authority
2. Canon of Scripture
3. Tradition
4. Trinity
5. Christology
6. Creation and the fall / original sin
7. Grace and free will
8. Predestination / election
9. Justification
10. Sanctification
11. Law and gospel
12. The Church
13. Church authority and apostolic succession
14. Papacy / primacy
15. Sacraments in general
16. Baptism
17. Confirmation / chrismation
18. Eucharist (presence and sacrifice)
19. Penance / confession
20. Marriage
21. Holy orders / ministry
22. Anointing of the sick
23. Holy Spirit, Spirit baptism and spiritual gifts
24. Mary
25. Saints and intercession
26. Images / icons
27. Purgatory and the intermediate state
28. Last things
29. Worship

**Join rule:** the join key is the text of the locus cell before " — " (space, em dash, space). What follows the dash is the map's own qualifier or a sub-row, kept so no information is lost. Sub-rows come right after one another (Lutheran Eucharist has three).

| Map | Before → after |
|---|---|
| catholic | Creation, fall, original sin → Creation and the fall / original sin; Church authority, apostolic succession → Church authority and apostolic succession; Holy Spirit, Spirit baptism, gifts → Holy Spirit, Spirit baptism and spiritual gifts; Purgatory, intermediate state → Purgatory and the intermediate state |
| orthodox | Sanctification (theosis) → Sanctification — theosis; Holy Spirit, Spirit baptism, spiritual gifts → Holy Spirit, Spirit baptism and spiritual gifts |
| lutheran | Creation, fall, original sin → Creation and the fall / original sin; Sanctification / good works → Sanctification — good works; Church authority, ministry, apostolic succession → Church authority and apostolic succession — with ministry; Confirmation → Confirmation / chrismation; Eucharist — presence → Eucharist (presence and sacrifice) — presence; Eucharist — sacrifice / Mass → Eucharist (presence and sacrifice) — sacrifice / Mass; Both kinds → Eucharist (presence and sacrifice) — both kinds; Penance / confession / absolution → Penance / confession — absolution; Holy Spirit, Spirit baptism, gifts → Holy Spirit, Spirit baptism and spiritual gifts; Purgatory / intermediate state → Purgatory and the intermediate state |
| reformed | Tradition (Fathers, councils) → Tradition — Fathers, councils; Creation, fall, original sin → Creation and the fall / original sin; Sanctification, good works, perseverance → Sanctification — good works, perseverance; Church authority, ministry, apostolic succession → Church authority and apostolic succession — with ministry; Holy Spirit, Spirit baptism, gifts → Holy Spirit, Spirit baptism and spiritual gifts; Purgatory, intermediate state → Purgatory and the intermediate state |
| baptist | Scripture & authority → Scripture and its authority; Creation, fall, original sin → Creation and the fall / original sin; Sanctification / perseverance → Sanctification — perseverance; Church authority, apostolic succession → Church authority and apostolic succession; Confirmation → Confirmation / chrismation; Eucharist (presence, sacrifice) → Eucharist (presence and sacrifice); Holy Spirit, Spirit baptism, gifts → Holy Spirit, Spirit baptism and spiritual gifts; Purgatory / intermediate state → Purgatory and the intermediate state |
| pentecostal | Creation, fall, original sin → Creation and the fall / original sin; Church authority, apostolic succession → Church authority and apostolic succession; Holy Spirit, Spirit baptism, gifts → Holy Spirit, Spirit baptism and spiritual gifts; Purgatory / intermediate state → Purgatory and the intermediate state |

Only the locus cells changed; no cell content was touched.

## 4. Neutrality (Fathers)

Searched all six maps for the 56 Fathers in `data/site/history.json` (Clement of Rome to John of Damascus) and for phrasing such as "our Fathers", "Orthodox/Catholic Fathers", "Orthodox theologian". Protestant maps: every mention is a confession's own wording (SHC II, Belgic IX, Gallican V, Orthodox Creed XXXVIII) or a locator (SA II.2 Augustine; Catalog of Testimonies). Catholic: the Doctors of the Church (§7.2) already carry the caution that Fathers among them are not assigned to a modern tradition. Orthodox: §2.3, §3 rows 11 and 13 and the OCA/Crete passages are the Church's own words, quoted and cited.

| Map | Where | Before → after |
|---|---|---|
| orthodox | §7 row 1 (John of Damascus), "Why it counts" | "Church Father: cited as the Church's witness, never as 'Orthodox theologian'" → "Church Father: listed because these Orthodox documents cite and receive him, not as belonging to the Orthodox tradition; never present him as an 'Orthodox theologian'" |

For Pedro, not decided here: whether a pre-schism Father should appear at all in a tradition's "representative voices" table (Orthodox §7 row 1 is the only case). The row is useful because it records which Orthodox documents cite him; the alternative is to move it into §2.3 as a reception note.

## 5. Not fixed, and why

1. §4 sub-heading styles (1 above): cross-references would break.
2. Constantinople II, "session 8" for the fourteen anathemas: unconfirmed in both maps (Catholic from DH, Orthodox from memory); NPNF14 does not number the session.
3. Athanasian Creed verse numbering: [memory] in Catholic and Lutheran; no numbered source read.
4. Schaff edition behind ccel.org: not named in any map.
5. Lutheran and Baptist RVR 1960 usage claims: still [memory].
6. Catholic 4.B.2 day dates for the other six councils rest partly on DH [unconfirmed: DH] and on Tanner's page; only Ephesus was re-researched here, as asked.
7. The Catholic Progress block line "Ephesus end date 31 Jul 431 (4.B.2)" is history of the verification step and was left as written; the new Progress line points here.
