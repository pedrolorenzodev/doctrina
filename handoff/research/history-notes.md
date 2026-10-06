# History data — notes and uncertainties

File: `data/raw/history.json` (sections: meta, fathers, councils, heresies, divisions, reformation, events). Built by merging per-section fragments; cross-references (heresy → fathers/councils, division → councils, reformation → parent/influences) were normalized to existing ids and validated with node.

## Schema notes (beyond the brief)
- Every section may carry an English `note` for disputed dates/facts; `approx: true` marks uncertain dates.
- `fathers[].kind`: "person" | "work". For works, `born` is null and `died` is a conventional composition year (for sorting); show `keyWorks[].date` in the UI. `city` may be null.
- `councils[]`: `ecumenicalStatus` = "seven" | "catholic-general" | "disputed" | "local"; extra fields `ordinal` (Catholic numbering), `canons`, `approx`, `dateNote`. `against` is a heresy id or array.
- `heresies[]`: `startYear`/`endYear` (endYear of gradually fading movements is a display estimate), `councils[]`, `fathers[]`, `page` (paragraphs separated by "\n\n").
- `divisions[]`: `page` (paragraphs separated by "\n\n"), `sides[]`, `relatedCouncils[]`, `keyDates[]`.
- `reformation[]`: `kind` = "precursor" | "tradition" | "movement"; `from` (single parent or null) plus `influences[]`; `keyFigures[]` = {name:{es,en}, dates}; `keyDocuments[]` = {title:{es,en}, year, endYear?}.
- `events[]`: `kind` ∈ biblical, persecution, political, monastic, canon, bible-text, mission, theology, institution, dogma, discovery, ecumenism. Negative years = BC. Events deliberately avoid duplicating councils/divisions (except the 1204 sack).

## Merge-time decisions
- Added councils for completeness of the Catholic numbering: Lateran I (1123), II (1139), III (1179), Lyon I (1245), Vienne (1311–12), Lateran V (1512–17), plus Pisa 1409 and Basel 1431–49 (both "disputed"). Basel: which sessions count as ecumenical is debated in Catholic historiography. Lateran I canon count 22 vs 25 by collection.
- Added Fathers entry Optatus of Milevis (d. before c. 400; stored 397 approx) because Donatism references him.
- Dropped heresy reference `carthage-411` (the 411 Conference of Carthage between Catholics and Donatists is not in councils; it was a conference rather than a council). Pelagianism points to `carthage-418`.
- Fathers keyWorks date strings normalized to be language-neutral (e.g. "ante 381", "c. 318 / c. 335–337").

## Reformation section (built by the main agent)
- Presbyterian: the brief suggested 1646 (Westminster); `year` is 1560 (Scottish Reformation, Scots Confession), with Westminster 1646/1647 as key documents.
- Baptists: parent set to Puritanism/English Separatism with Anabaptist listed as an influence; the degree of Mennonite influence on Smyth is debated. Claim that the first Baptists (1609) baptized by affusion and adopted immersion c. 1641 follows standard Baptist historiography (e.g. McBeth); worth a source check before publishing.
- Great Awakenings: conventional ranges (First c. 1734–1745; Second c. 1790–1840), no single parent.
- Evangelicalism: `from` = fundamentalism refers to 20th-c. neo-evangelicalism (NAE 1942); broader evangelicalism (Bebbington) dates from the 1730s revivals.
- Restorationism: entry covers only Stone-Campbell; LDS/Adventist/JW are noted as separately classified.
- Methodist: Wesley sent 24 Articles in 1784; the American church added one on civil rulers (25).
- littleKnown claims that should get a citation before publishing: Calvin's written objection to quarterly communion (Calvin, 1561 note to the Ecclesiastical Ordinances; Institutes 4.17.43–46); Luther on private confession (Small Catechism; CA XI, XXV); Wesley's "every Lord's day" (1784 letter to American Methodists); Fundamentals "three million copies"; Henry VIII's Six Articles 1539; Parliament's 1647 abolition of Christmas/Easter/Whitsun.

## Events section (built by the main agent)
- Crucifixion/Pentecost: 30 or 33. Stephen and Paul's conversion c. 33–36. Paul's journeys conventional (c. 46–48, 49–52, 53–57); Rome c. 60–62.
- Claudius' expulsion: 49 (Orosius) vs 41 (minority).
- NT composition c. 50–100: dates of several books debated.
- Peter and Paul martyrdom c. 64–68 (tradition).
- Muratorian Fragment: c. 170–200 traditional vs 4th c. (Sundberg, Hahneman).
- Armenia 301 (traditional) vs c. 314. Aksum (Ezana) c. 330–350. Ulfilas consecrated c. 341.
- Edict of Milan is technically an agreement/rescript, not an edict issued at Milan.
- Codex Vaticanus c. 300–350, Sinaiticus c. 330–360 (palaeographic).
- Patrick's 432 is traditional; his career may be later in the 5th c.
- Clovis' baptism 496 traditional (up to 508 proposed).
- Benedict: Monte Cassino c. 529; Rule c. 530–550.
- Jerusalem's surrender to Umar: 637 or 638. Tours 732 (some 733). Boniface 754/755. Boris 864/865. Rus' 987–989. Leningrad Codex 1008/1009. Franciscan oral approval 1209/1210.
- Medellín 1968: the exact phrase "preferential option for the poor" was consolidated at Puebla 1979.
- Complutensian Polyglot NT printed 1514 but circulated c. 1520–1522; Erasmus' 1516 edition was the first published.


---

## Fathers — dating notes and uncertainties

Schema notes
- `kind: "work"` entries (Didache, Epistle of Barnabas, Shepherd of Hermas, Epistle to Diognetus, Pseudo-Dionysius) have `born: null` and use `died` as a conventional composition year so they sort on the timeline. The UI should show the `keyWorks[].date` range, not "died".
- `city` is `null` where unknown (Didache, Diognetus, Aphrahat, Pseudo-Dionysius). Several entries give two cities ("Antioch / Constantinople") for figures who moved.
- Every entry with a debated date has an English `note` field.
- Entries that some traditions don't count as "Fathers" are included as patristic sources, and their notes or summaries say so neutrally: Tertullian (Montanism), Novatian (schism), Eusebius (Arian sympathies), Origen (553 condemnations), Didymus (553), Theodoret (Three Chapters), Isaac of Nineveh (Church of the East).

Main uncertainties
- Clement of Rome: 1 Clement is usually dated c. 96, but some date it c. 70 or anywhere from 80 to 100. The death year (c. 99) is only traditional.
- Didache: dated c. 50–120 (stored as 100). It is probably composite, and its provenance is debated.
- Ignatius: martyrdom is traditionally put c. 107–110 (stored as 108). A minority dates it c. 120–140.
- Papias: the Exposition is dated c. 110–130 (stored as 120); an early-date school argues for c. 95–110. His birth and death years are guesses.
- Barnabas: dated c. 70–135 (stored as 130). Diognetus: dated c. 130–200 (stored as 150). Hermas: dated c. 100–150 (stored as 140).
- Polycarp: martyrdom in 155 or 156 (stored as 155); Eusebius puts it c. 167.
- Tertullian: his death is unknown, sometime after c. 220 (stored as 220). Whether he was a presbyter is debated.
- Hippolytus: who he was and what he wrote are heavily debated. The Apostolic Tradition is marked "attribution debated."
- Methodius: his see and martyrdom (c. 311) are uncertain.
- Eusebius: died 339 or 340. Aphrahat: his birth and death years are unknown; only the Demonstrations are dated internally (337–345).
- Athanasius: On the Incarnation is dated either c. 318 or c. 335–337 (stored as 335).
- Basil: death is traditionally 1 January 379; some scholars put it in 377 or 378.
- Cyril of Jerusalem: some attribute the Mystagogical Catecheses to John II of Jerusalem.
- Jerome: born c. 342–347; died 420 (some say 419).
- Theodoret: died c. 458, though c. 460 and c. 466 are also proposed.
- Pseudo-Dionysius: written c. 485–528 (stored as 500).
- Andrew of Crete: died on 4 July of 712, 726 or 740 (stored as 740). Germanus: died c. 740 (some say 733).
- Isaac of Nineveh: born c. 613 and died c. 700; both are estimates.
- John of Damascus: died traditionally in 749, but some argue for 753–754. Hieria (754) anathematized him, which suggests he had died by then.
- Prosper: "lex orandi, lex credendi" is a later condensation of the Indiculus wording. The Indiculus is probably his but not certainly.

Sources checked (WebFetch, Wikipedia): Andrew of Crete, Germanus I, Isaac of Nineveh, Theodoret, Didymus, Vincent of Lérins, Peter Chrysologus, Prosper of Aquitaine, Basil. Other dates follow standard reference works (ODCC, Britannica, New Advent) from memory and were not fetched individually.

---

## Councils — notes and uncertainties

Sources cross-checked (Wikipedia): Synod of Elvira, Council of Arles, Third Council of Toledo, Council of Frankfurt, Fourth Council of Constantinople (Catholic), Councils of Carthage, Synod of Hippo, Decretum Gelasianum, Fourth Lateran, Second Lyon, Synods of Antioch, Second Orange, Lateran 649, Synod of Jerusalem 1672. Everything else is from standard reference knowledge (ODCC / New Advent-level facts).

Schema additions beyond the brief: `approx`, `dateNote`, `ordinal` (ecumenical numbering), `canons` (number), `ecumenicalStatus` ("seven" | "catholic-general" | "disputed" | "local"), `note` (English). Added beyond the requested list: Antioch 268, Carthage 418 (anti-Pelagian), Ephesus 449, Lateran 649, Constance, Dort.

Uncertain / disputed points:
- Jerusalem: c. 48–50; relation of Acts 15 to Gal 2 debated.
- Antioch: 264–269; the rejection of homoousios is known only from 4th-c. reports. `against: adoptionism` (dynamic monarchianism).
- Elvira: date c. 300–314 (proposals range 295–324); Meigne argued only canons 1–21 are original.
- Arles 314: canon count usually 22, varies by collection.
- Rome 382: the "Damasine" canon list survives only in the Decretum Gelasianum; Dobschütz (1912) dated the Decree to c. 519–553. Tome of Damasus date c. 377–382 uncertain.
- Hippo 393 (8 Oct): acts lost; known through the Breviarium Hipponense adopted at Carthage 397.
- Carthage 397 vs 419: 397 commonly cited as "13 epistles of Paul + Hebrews", 419 as "14 epistles of Paul" — from memory of the Latin texts; verify against a critical edition (CCSL 149) before publishing as a quote.
- Carthage 418: 8 canons (9 in some collections).
- Carthage 419: 138 canons Latin / 135 Greek.
- Constantinople I: 4 canons (Latin) vs 7 (Greek); creed first attested at Chalcedon.
- Ephesus 431: whether the Twelve Anathemas were formally adopted is debated.
- Ephesus 449: marked ecumenicalStatus "disputed", ecumenical false; Oriental Orthodox assess it differently.
- Chalcedon: "30 canons" = 27 + disputed 28 + 29–30 from minutes; attendance traditionally 630, modern estimates ~350–370.
- Constantinople II: Origenist anathemas' conciliar status debated.
- Toledo III: Filioque interpolation question in the recited creed.
- Trullo 692: partial later Roman acceptance (often attributed to John VIII) — uncertain.
- Constantinople 869–70: 27 canons Latin / 14 Greek; Catholic counting as ecumenical dates from late 11th c. (Dvornik). 879–80: John VIII's approval contested; "some Orthodox" count it as 8th — not a formal Orthodox definition.
- Lyon II: union repudiated by Andronikos II; Blachernae 1285.
- Florence: formal Orthodox repudiation by a synod in Constantinople 1484.
- Dort: TULIP is a modern mnemonic.
- Ecumenical flag: true for the seven, for Catholic general councils (Lateran IV, Lyon II, Constance, Florence, Trent, Vatican I, Vatican II) and for Constantinople 869–70 (status "disputed"). False for 879–80 and Trullo (status "disputed") and all local synods.

---

## Heresies — notes and uncertainties

Source: `heresies.json` (18 entries), built from `heresies.mjs`.

### IDs that other sections must match
- Councils referenced: jerusalem-49, antioch-268, arles-314, carthage-411, carthage-419, nicaea-i, constantinople-i, ephesus-431, ephesus-449, chalcedon-451, orange-529, constantinople-ii, lateran-649, constantinople-iii, nicaea-ii, frankfurt-794. `arles-314` and `carthage-411` (Donatist conference) were not in the directive's list; drop them if the councils section does not define them.
- Fathers referenced beyond the directive's list: hilary-of-poitiers, theodoret-of-cyrus, origen, cyprian, clement-of-alexandria. Make sure they exist in `fathers` or remove them.
- `carthage-419` is used for Pelagianism. The anti-Pelagian canons were actually issued at Carthage in **418**; they were later collected in the African code of 419. The text says 418 and explains this.

### Dates that are approximate or disputed
- Montanism start: c. 156–157 (Epiphanius) vs c. 172 (Eusebius); scholars range c. 135–177. `startYear` is 156.
- Arius' dispute begins c. 318–320 (estimates vary up to 323). `startYear` is 318.
- Iconoclasm start: "726–730". Brubaker & Haldon question the traditional narrative, which comes from later, pro-icon sources. `startYear` is 726. Wikipedia gives the second phase as 814/815–842/843. We use 815–843.
- Frankfurt synod: conventionally 794 (June 794). One Wikipedia article (Spanish Adoptionism) gives 795. We keep 794.
- Spanish Adoptionism: Regensburg 792, Frankfurt 794, Rome under Leo III 798, Aachen 799. Elipandus d. c. 805, Felix d. 818.
- Paul of Samosata was deposed in 268 (some sources say 264–268 for the synods) and removed c. 272 under Aurelian.
- Sabellius was excommunicated c. 220 (Callistus' pontificate was 217–222).
- Donatism: Caecilian consecrated c. 311/312 (disputed).
- The term "Semi-Pelagian" is late 16th century and is attributed to Theodore Beza (per Wikipedia), in the context of the Molinist controversy. Orange 529 was approved by Boniface II in 531.
- Oriental Orthodox agreements: Paul VI and Shenouda III (May 1973); John Paul II and Zakka I (1984); with the Eastern Orthodox at Anba Bishoy (1989) and Chambésy (1990). There is also a 1994 Common Christological Declaration between John Paul II and Mar Dinkha IV (Assyrian Church of the East); it appears under nestorianism.
- Hieria 754: "over 330 bishops" (the traditional figure is 338).
- `endYear` values for movements (e.g. gnosticism 400, marcionism 450, montanism 550, ebionites 400) are rough fade-out estimates for timeline display, not documented end dates.

### Neutrality choices
- Nestorianism: the page notes that the Church of the East rejects the label, mentions the Book of Heracleides debate, and states that the debate is still open.
- Monophysitism: Eutychianism and miaphysitism are kept separate. Oriental Orthodox also condemn Eutyches.
- Modalism: Oneness Pentecostalism is mentioned only as "often compared"; the page adds that its adherents nuance or reject the label.
- Semi-Pelagianism: the page notes the Orthodox objection that the category is Augustinian and is not the same as "synergy".

---

# Divisions — research notes

Section: `divisions` (10 entries). Built by scratchpad/build-divisions.mjs.

## Council ids referenced (must match `councils` section ids, or be remapped at merge)
ephesus-431, chalcedon-451, constantinople-553, constantinople-680, toledo-iii, frankfurt-794,
constantinople-869, constantinople-879, lyon-ii, florence, vatican-i, vatican-ii, pisa-1409,
constance, basel, lateran-v, trent. (pisa-1409, basel, lateran-v, constantinople-553/680 may not exist in the councils list.)

## Verified (WebFetch, Wikipedia)
- 1054: bull laid on Hagia Sophia altar 16 July 1054; Cerularius's synod anathematised the legates four days later (20 July); no excommunication of Western Christianity as a whole.
- Filioque: Toledo III 589; sung liturgically in Rome only from 1014.
- Church of the East: synods 410 (Isaac), 424 (Dadisho), 484 (Beth Lapat), 486 (Acacius); Edessa school closed 489; Babai the Great d. 628; Sulaqa 1552–53; 1964/1968 split; 1994 Christological declaration; 2001 Addai and Mari.

## Uncertainties / judgment calls
- Toledo III (589) as first Filioque insertion is conventional; some scholars think the creed text in the acts was interpolated later. Worded "usually traced to".
- Armenian rejection of Chalcedon: Dvin 506 (distancing, Henotikon context) vs Dvin 555 (formal rejection); dates and content debated. Worded accordingly.
- Synod of 486 and clerical marriage: said "clergy" generally; whether it covered bishops is unclear (later synods regulated it), so bishops omitted.
- 95 Theses posting on the church door: noted as debated; 31 Oct 1517 letter to Albert of Mainz is secure.
- Luther "we are all Hussites" — letter to Spalatin, Feb 1520 (not 1519).
- Marian burnings "some 280" (commonly 283–284 cited).
- Western Schism allegiances simplified (Castile 1381 and Aragon 1387 joined Avignon later; Naples alternated).
- Anglican affirmation of JDDJ: ACC 2016, formal association 2017 -> written "2016–2017".
- Photian: Dvornik's "no second Photian schism" thesis is the majority view, not unanimous.
- Dates "c." in prose: Boris I baptism c. 864; Jacob Baradaeus consecration c. 542/543.
- Hussites entry (optional) added; endYear 1457 is the founding of the Unitas Fratrum, not an end of the movement.
