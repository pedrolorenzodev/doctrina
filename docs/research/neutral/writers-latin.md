# Neutral source universe C — Latin writers, 325–749

## Progress

- Status: done
- Done: applied the CPL/patrology rule; inventoried 21 Tier 1 and 21 Tier 2 writers/corpora; supplied dates, offices, regions, languages, principal works and dates, attribution/transmission cautions, critical references and reusable editions; recorded exclusions, owner questions and verification targets.
- In progress: none.
- Next: Task 7, councils and movements. Task 8 must check sampled dates, CPL numbers, critical editions and licences before product use.

Research date: 2026-10-20. `[verified: reuse]` points to the hands-on source and licence checks in `docs/research/sources/latin-fathers.md` and `latin-fathers.verify.md`; `[memory]` is deliberately not upgraded without a fresh authority.

## 1. Scope and rule

### 1.1 Membership

The membership test is a surviving work in the *Clavis Patrum Latinorum* (CPL) plus independent treatment in a standard patrology. The [Clavis Clavium open interface](https://clavis.brepols.net/clacla/OA/) is the preferred work-level authority; it was intermittently unavailable during this pass, so exact CPL numbers are a Task 8 priority. The endpoint remains provisional at Bede (d. 735), inside the project's working cutoff of John of Damascus (c. 749).

Part A owns writers whose work is mostly pre-325. Named movements and their fragmentary protagonists—Pelagius, Julian of Eclanum, Priscillian and Donatist authors as a group—belong in Part D, while their substantial surviving interlocutors remain here. A writer is never assigned to a modern tradition.

### 1.2 Tiers

**Tier 1 (21):** Hilary of Poitiers · Optatus of Milevis · Ambrosiaster · Ambrose of Milan · Jerome · Rufinus of Aquileia · Augustine of Hippo · Prudentius · Paulinus of Nola · Sulpicius Severus · John Cassian · Vincent of Lérins · Leo I · Prosper of Aquitaine · Peter Chrysologus · Fulgentius of Ruspe · Caesarius of Arles · Benedict of Nursia · Gregory I · Isidore of Seville · Bede.

**Tier 2:** Pacian of Barcelona · Lucifer of Cagliari · Marius Victorinus · Tyconius · Filastrius of Brescia · Damasus I · Siricius · Chromatius of Aquileia · Gaudentius of Brescia · Innocent I · Orosius · Eucherius of Lyon · Arnobius the Younger · Salvian of Marseille · Gennadius of Marseille · Boethius · Dionysius Exiguus · Cassiodorus · Gregory of Tours · Ildefonsus of Toledo · Julian of Toledo.

**Listed only:** Pelagius, Celestius, Julian of Eclanum, Priscillian, Donatus, Parmenian and Faustus of Riez are treated with the movements/disputes in Part D; imperial and papal decretals without a substantial authorial corpus belong to councils/documents; the pseudo-Augustinian and pseudo-Hieronymian corpora are anonymous work entities attached to their transmission, never silently to the historical author; later Carolingian writers fall beyond 749.

### 1.3 Edition and licence spine

| Resource | Use |
|---|---|
| OpenGreekAndLatin `csel-dev` | 331 work-level TEI texts from public-domain CSEL volumes; each checked file carries CC BY-SA 4.0 and links its scan. Best open Latin for Augustine, Ambrose, Hilary, Jerome, Rufinus, Cassian and others. `[verified: reuse]` |
| OGL `patrologia_latina-dev` | CC BY-SA 4.0 OCR/correction of PL 3–85 for works absent from CSEL; “adequate,” not automatically critical, and attribution follows the old print unless corrected. `[verified: reuse]` |
| Original ANF/NPNF scans | Public-domain print editions, 1885–1900. Use scans, not New Advent's revised pages or CCEL's restricted transcription. `[verified: reuse]` |
| Tertullian Project “Additional Texts” | Per-page public-domain releases for Optatus, Pacian, Ambrose letters, Salvian, Gregory's *Dialogues* and other gaps; permission statement applies to this collection, not its modern Tertullian Latin files. `[verified: reuse]` |
| Spanish scans | Augustine, Ambrose, Jerome, Vincent and Gregory have specific pre-20th-century routes in `latin-fathers.md` §2B; no blanket Spanish corpus exists. |

## 2. Tier 1 entries

### 2.1 Hilary of Poitiers

**Names:** Hilarius Pictaviensis · Hilary of Poitiers · Hilario de Poitiers. **Dates/office/region/language:** born c. 310; died 367/368; bishop of Poitiers by c. 350; Gaul; Latin, with Greek learning. `[memory: verify exact endpoints]`

His works arise from fourth-century trinitarian controversy, exile, biblical exposition and episcopal correspondence. *De Trinitate* is a twelve-book composition with stages, not a transcript of one event.

| Works | Date | Transmission/authenticity | Edition and licence |
|---|---|---|---|
| *De Trinitate* | c. 356–360 | accepted; revised/composite chronology debated | Smulders CCSL modern; CSEL/PL OGL CC BY-SA; NPNF2 9 PD English. `[verified: reuse]` |
| *De synodis* | 359 | accepted, written in exile | CSEL/PL OGL; NPNF2 9. |
| *In Matthaeum*, *Tractatus super Psalmos*, hymns | c. 350s–360s | core exegesis accepted; hymn corpus mixed | CSEL 22/65 and PL; work-level CPL check. |

**Dates/authenticity:** keep the Liber I/II documentary collections distinct from Hilary's authored treatises. **Checklist:** `latin-fathers.md` §4 row Hilary.

### 2.2 Optatus of Milevis

**Names:** Optatus Milevitanus · Optatus of Milevis · Optato de Milevi. **Dates/office/region/language:** active c. 360s–380s; bishop of Milevis in North Africa; birth/death unknown; Latin. `[memory: verify]`

| Work | Date | Transmission/authenticity | Edition and licence |
|---|---|---|---|
| *Against Parmenian the Donatist*, seven books | first edition c. 366–367; enlarged c. 384, debated | accepted; documentary appendices and two-stage composition need separate treatment | Ziwsa CSEL 26 in OGL CC BY-SA; Vassall-Phillips 1917 English released for copying and scan-backed. `[verified: reuse]` |

The work describes a dispute from Optatus' side and preserves documents; Part D must not treat his descriptions as Donatist self-testimony. **Checklist:** `latin-fathers.md` §4 row Optatus.

### 2.3 Ambrosiaster

**Names:** Ambrosiaster (conventional pseudonym) · Ambrosiaster · Ambrosiaster. **Dates/place/language:** anonymous Latin author active at Rome, conventionally c. 366–384; no birth, death or office can be supplied. `[memory: verify termini]`

| Works | Date | Transmission/authenticity | Edition and licence |
|---|---|---|---|
| Commentaries on the Pauline Epistles | c. 366–384, with recensions | not by Ambrose; anonymous corpus with multiple recensions | Vogels CSEL 81 reference; PL 17/OGL route must preserve pseudonym and recension. |
| *Quaestiones Veteris et Novi Testamenti* | late 4th c. | once attributed to Augustine; now grouped with Ambrosiaster, internal layers debated | Souter CSEL 50 (1908) PD/OGL if present; verify file. |

**Dates/authenticity:** his entire identity is an attribution problem; do not invent biography from the texts. `[memory; Task 8]`

### 2.4 Ambrose of Milan

**Names:** Ambrosius Mediolanensis · Ambrose of Milan · Ambrosio de Milán. **Dates/office/region/language:** c. 339–4 April 397; Roman administrator, then bishop of Milan from 374; northern Italy; Latin, working closely with Greek sources. `[memory: verify birth range]`

| Works | Date | Transmission/authenticity | Edition and licence |
|---|---|---|---|
| *De fide*, *De Spiritu Sancto* | 378–381 | accepted | CSEL/PL OGL; NPNF2 10. |
| *De officiis* | c. 386–390 | accepted | CSEL 32; NPNF2 10; Gracián 1789 Spanish PD scan. |
| *De mysteriis*; *De sacramentis* | c. 387–391 | *Mysteriis* accepted; *Sacramentis* was disputed but is widely treated as Ambrosian or from his immediate catechesis—state edition's verdict | CSEL/PL OGL; Thompson 1919 English US-PD with translator-territory check. `[verified: reuse]` |
| Letters, hymns, funeral orations and biblical works | 370s–390s | authentic core plus disputed hymns | CSEL 82; older Oxford letters via TP; each hymn checked separately. |

**Dates/authenticity:** distinguish authored works, stenographic catecheses and later Ambrosian liturgical tradition. **Checklist:** `latin-fathers.md` §4 row Ambrose.

### 2.5 Jerome

**Names:** Eusebius Sophronius Hieronymus · Jerome · Jerónimo. **Dates/function/region/language:** born c. 347; died 419/420 at Bethlehem; presbyter, translator and monastic writer; Dalmatia, Rome and Palestine; Latin and Greek, with Hebrew study. `[memory: exact dates disputed]`

| Works | Date | Transmission/authenticity | Edition and licence |
|---|---|---|---|
| Letters | c. 374–419 | accepted core; traditional numbering stable but corpus includes dubia | Hilberg CSEL 54–56 OGL; NPNF2 6 selections; López Cuesta 1613 / 1783 Spanish selections. `[verified: reuse]` |
| *De viris illustribus* | 392/393 | accepted, short literary catalogue | Richardson TU older edition/NPNF2 3 or 6; verify volume. |
| *Against Helvidius*, *Against Jovinian*, *Against Vigilantius* | 383; 393; 406 | accepted polemical works | PL/OGL; NPNF2 6. |
| Biblical commentaries and translation prefaces | 386–419 | accepted individually; Vulgate is a translation project with layers, not one dated book | CSEL/CCSL references; TP has PD prefaces. |

**Dates/authenticity:** separate historical Jerome from pseudo-Jerome and distinguish original-language basis of each biblical book. **Checklist:** `latin-fathers.md` §4 row Jerome.

### 2.6 Rufinus of Aquileia

**Names:** Tyrannius Rufinus · Rufinus of Aquileia · Rufino de Aquilea. **Dates/function/region/language:** c. 345–410/411; presbyter, monk and translator; Aquileia, Egypt and Palestine; Latin and Greek. `[memory: verify endpoints]`

| Works | Date | Transmission/authenticity | Edition and licence |
|---|---|---|---|
| *Commentary on the Apostles' Creed* | c. 404 | accepted | CSEL/PL OGL; NPNF2 3. `[verified: reuse]` |
| Apologies against Jerome | c. 400–402 | accepted, controversy documents | CSEL 46; NPNF2 3. |
| Latin translations of Origen, Eusebius and Greek ascetic works | c. 397–410 | translations often adapt their exemplars; some lost Greek survives only through him | cite Rufinus and the translated author; do not silently reconstruct Greek wording. |

**Dates/authenticity:** his translation method is part of every reader's transmission note. **Checklist:** `latin-fathers.md` §4 row Rufinus.

### 2.7 Augustine of Hippo

**Names:** Aurelius Augustinus Hipponensis · Augustine of Hippo · Agustín de Hipona. **Dates/office/region/language:** 13 November 354–28 August 430; presbyter 391, coadjutor/bishop c. 395/396, bishop of Hippo Regius; North Africa; Latin. `[memory: verify against Possidius/chronology]`

His unusually large, self-revising corpus spans autobiography, philosophy, biblical interpretation, preaching, pastoral correspondence and disputes with Manichaeans, Donatists, Pelagius and Julian. The *Retractationes* provide an authorial review but do not erase earlier texts.

| Work groups | Date | Transmission/authenticity | Edition and licence |
|---|---|---|---|
| *Confessions* | 397–401 | accepted, thirteen books | Knöll CSEL 33 OGL; NPNF1 1; Zeballos/Ribadeneyra Spanish scans, noting the verified Zeballos records contain only volume II in two cases. `[verified: reuse]` |
| *On Christian Doctrine* | begun 396/397; book IV completed c. 426/427 | accepted, two-stage composition | PL/OGL; NPNF1 2. |
| *On the Trinity* | c. 399–419/420 | accepted, long composition/revision | PL/OGL; NPNF1 3. |
| *City of God* | 413–426/427 | accepted, 22 books | Hoffmann CSEL 40 OGL; NPNF1 2; Díaz de Beyral 1893 Spanish scan complete. `[verified: reuse]` |
| anti-Donatist and anti-Pelagian groups | c. 400–420s | accepted core; state opponent and occasion per work | CSEL 42, 51–53, 60 OGL; NPNF1 4–5. |
| Sermons, letters, tractates | 386–430 | genuine core plus later discoveries and pseudo-Augustine; each item requires catalogue status | PL/CSEL OGL; NPNF is partial; modern discovered sermons may be copyrighted editions. |

**Dates/authenticity:** pseudo-Augustinian *Meditations*, *Soliloquia animae* and *Manuale* are medieval works, despite early Spanish printings. Screen 09 must tell the two-stage *Christian Doctrine* and his own late review. **Checklist:** `latin-fathers.md` §3.

### 2.8 Prudentius

**Names:** Aurelius Prudentius Clemens · Prudentius · Prudencio. **Dates/function/region/language:** born 348; alive after publishing his collected poems c. 405; Roman official turned poet; Hispania; Latin. `[memory: verify after-405 terminus]`

| Works | Date | Transmission/authenticity | Edition and licence |
|---|---|---|---|
| *Cathemerinon*, *Peristephanon*, *Psychomachia*, *Apotheosis*, *Hamartigenia*, *Contra Symmachum* | collected c. 405; individual poems earlier | accepted authorial collection, with manuscript ordering issues | Cunningham CCSL 126 modern; Bergman CSEL 61 (1926) US-PD but editor terms and OGL availability must be checked; older PL 59 PD. |

His poems treat daily prayer, martyrs, personified moral conflict, theological polemic and Roman public religion; genre must remain visible. `[memory: Task 8]`

### 2.9 Paulinus of Nola

**Names:** Pontius Meropius Anicius Paulinus · Paulinus of Nola · Paulino de Nola. **Dates/office/region/language:** c. 353/354–431; aristocrat, presbyter and bishop of Nola; Gaul, Spain and Campania; Latin. `[memory: verify episcopal date]`

| Works | Date | Transmission/authenticity | Edition and licence |
|---|---|---|---|
| Letters and poems, including annual Natalicia for Felix | c. 389–431 | accepted core; addressees and poem numbering edition-dependent | Hartel CSEL 29–30 (1894) PD/OGL check; Walsh modern translations ©. |

The corpus documents friendship networks, ascetic patronage and cult at Nola; do not reduce it to later doctrinal proof-texts. `[memory: verify]`

### 2.10 Sulpicius Severus

**Names:** Sulpicius Severus · Sulpicius Severus · Sulpicio Severo. **Dates/function/region/language:** c. 363–c. 420/425; aristocrat and ascetic writer, not securely a cleric; Gaul; Latin. `[memory: verify]`

| Works | Date | Transmission/authenticity | Edition and licence |
|---|---|---|---|
| *Chronicle* | c. 403 | accepted | Halm CSEL 1 PD/OGL; NPNF2 11. |
| *Life of Martin*, three letters, *Dialogues* | c. 396–404 | accepted Martinian dossier with later transmission | Halm CSEL 1; NPNF2 11. |

**Dates/authenticity:** distinguish Sulpicius' near-contemporary works from later Martinian hagiography. `[memory; edition route standard]`

### 2.11 John Cassian

**Names:** Iohannes Cassianus · John Cassian · Juan Casiano. **Dates/function/region/language:** born c. 360, died c. 435; monk, deacon then presbyter; Scythia? birthplace disputed, Egypt, Constantinople, Rome and Marseille; Latin, drawing on Greek monastic teaching. `[memory: birthplace disputed]`

| Works | Date | Transmission/authenticity | Edition and licence |
|---|---|---|---|
| *Institutes* | c. 420–425 | accepted, twelve books | Petschenig CSEL 17 OGL; NPNF2 11. `[verified: reuse]` |
| *Conferences* | c. 425–429 | accepted, 24 conferences; NPNF omits portions | Petschenig CSEL 13 OGL; NPNF2 11 partial. |
| *On the Incarnation against Nestorius* | 429–430 | accepted, polemical commission | CSEL 17; NPNF2 11. |

**Dates/authenticity:** the “semi-Pelagian” label is later and belongs to Part D's terminology note, not Cassian's identity line. **Checklist:** `latin-fathers.md` §4 row Cassian.

### 2.12 Vincent of Lérins

**Names:** Vincentius Lirinensis · Vincent of Lérins · Vicente de Lérins. **Dates/function/region/language:** active c. 434; monk at Lérins; death before c. 450 often inferred; Gaul; Latin. `[memory: verify death evidence]`

| Work | Date | Transmission/authenticity | Edition and licence |
|---|---|---|---|
| *Commonitorium*, under the pseudonym Peregrinus | 434 | accepted; second book largely lost except recapitulation | PL 50/OGL CC BY-SA; NPNF2 11; Cándido del Moral 1784 Spanish BNE scan. `[verified: reuse]` |

Do not turn one famous formula into the whole work; present its anti-heretical occasion and development argument. **Checklist:** `latin-fathers.md` §4 row Vincent.

### 2.13 Leo I

**Names:** Leo I Romanus · Leo I · León I. **Dates/office/region/language:** born c. 400; died 10 November 461; bishop of Rome 440–461; Italy; Latin. `[memory: birth approximate]`

| Works | Date | Transmission/authenticity | Edition and licence |
|---|---|---|---|
| Sermons | 440–461 | accepted collection with textual history | Chavasse CCSL 138 reference; PL/OGL; NPNF2 12 selections. |
| Letters, including Epistle 28 to Flavian (“Tome”) | 440–461; Tome 449 | accepted documentary corpus; conciliar acts preserve translations/recensions | Silva-Tarouca/ACO for documents; PL/OGL; NPNF2 12. `[verified: reuse]` |

**Dates/authenticity:** the Tome's reception is a Chalcedon entry, not an intrinsic property of every Leonine letter. **Checklist:** `latin-fathers.md` §4 row Leo.

### 2.14 Prosper of Aquitaine

**Names:** Prosper Tiro Aquitanus · Prosper of Aquitaine · Próspero de Aquitania. **Dates/function/region/language:** c. 390–c. 455; lay controversialist and later associated with the Roman chancery; Aquitaine/Rome; Latin. `[memory: chancery role debated, verify]`

| Works | Date | Transmission/authenticity | Edition and licence |
|---|---|---|---|
| *Carmen de ingratis*, letters/tracts on grace, *Chronicle* | 420s–455 | accepted core; *Call of All Nations* attribution to Prosper is disputed | PL 51/OGL; modern English ACW/FOTC remains protected; Spanish Villanueva 1783 is a verse paraphrase only. `[verified: reuse]` |

**Dates/authenticity:** list *De vocatione omnium gentium* as anonymous/pseudo-Prosper unless the chosen edition argues otherwise. **Checklist:** `latin-fathers.md` §4 row Prosper.

### 2.15 Peter Chrysologus

**Names:** Petrus Chrysologus · Peter Chrysologus · Pedro Crisólogo. **Dates/office/region/language:** c. 380–c. 450; bishop of Ravenna; northern Italy; Latin. `[memory: dates]`

| Works | Date | Transmission/authenticity | Edition and licence |
|---|---|---|---|
| Sermon collection | c. 425–450 | core edited under Felix; collection contains attribution questions | Olivar CCSL 24/24A reference; PL 52/OGL Latin; modern FOTC English protected. `[verified: reuse]` |
| Letter to Eutyches | 449 | accepted, also in conciliar/documentary transmission | cite critical letter/ACO context. |

No reusable complete English or Spanish set was verified; use Latin plus own translation of selected sermons. **Checklist:** `latin-fathers.md` §4 row Peter.

### 2.16 Fulgentius of Ruspe

**Names:** Fabius Claudius Gordianus Fulgentius · Fulgentius of Ruspe · Fulgencio de Ruspe. **Dates/office/region/language:** c. 462/467–527/533; bishop of Ruspe, with exile in Sardinia; North Africa; Latin. `[memory: disputed date ranges]`

| Works | Date | Transmission/authenticity | Edition and licence |
|---|---|---|---|
| *Ad Thrasamundum*, works on Trinity/incarnation/grace, letters | early 6th c. | accepted core; pseudo-Fulgentius items circulate | Fraipont CCSL 91/91A reference; PL 65 PD/OGL route if within corpus. |

**Dates/authenticity:** Task 8 must choose life dates from a critical biography and separate Fulgentius Ferrandus. `[memory]`

### 2.17 Caesarius of Arles

**Names:** Caesarius Arelatensis · Caesarius of Arles · Cesáreo de Arlés. **Dates/office/region/language:** c. 470–27 August 542; bishop of Arles from 502; Gaul; Latin. `[memory: verify birth and episcopal dates]`

| Works | Date | Transmission/authenticity | Edition and licence |
|---|---|---|---|
| Sermons | c. 502–542 | accepted core, but compiler/reuse and manuscript attribution require Morin's edition | Morin CCSL 103–104 reference; PL/OGL Latin; modern FOTC English protected. `[verified: reuse]` |
| Rules for women and men; letters | early 6th c. | accepted | de Vogüé/CCSL references; PL fallback. |

The canons of Orange II belong to Part D even though Caesarius convoked/presided. **Checklist:** `latin-fathers.md` §4 row Caesarius.

### 2.18 Benedict of Nursia

**Names:** Benedictus Nursinus · Benedict of Nursia · Benito de Nursia. **Dates/function/region/language:** conventional c. 480–c. 547; monastic founder associated with Monte Cassino; Italy; Latin. Nearly all biography comes from Gregory's *Dialogues* II, written decades later. `[memory: verify chronology limits]`

| Work | Date | Transmission/authenticity | Edition and licence |
|---|---|---|---|
| *Rule of Benedict* | c. 530s–550s, debated | accepted as the rule transmitted under Benedict; relation to the *Rule of the Master* and direction of dependence are central dating questions | de Vogüé SC/reference; older Latin editions PD; find a scan-backed PD English/Spanish before reuse. |

**Dates/authenticity:** present conventional life dates as estimates, not documented endpoints. `[memory: Task 8]`

### 2.19 Gregory I

**Names:** Gregorius I Magnus · Gregory the Great · Gregorio Magno. **Dates/office/region/language:** c. 540–12 March 604; bishop of Rome from 590; Italy; Latin. `[memory: verify birth approximation]`

| Works | Date | Transmission/authenticity | Edition and licence |
|---|---|---|---|
| *Moralia in Job* | begun before 590, revised/published later | accepted, 35 books | Adriaen CCSL 143–143B reference; PL/OGL; 1844–50 English PD; 1527 Spanish gothic scan. `[verified: reuse]` |
| *Pastoral Rule* | c. 590–591 | accepted | Judic CCSL/SC reference; PL/OGL; NPNF2 12; Alfaro 1769 Spanish complete. `[verified: reuse]` |
| Homilies on Gospels/Ezekiel | 590s | accepted collections | CCSL 141/142; PL/OGL; no complete verified PD English for Gospels. |
| *Dialogues* | c. 593–594 | traditional attribution retained but authorship has been challenged and defended | de Vogüé SC; PL/OGL; 1911 English via TP; 1532 Spanish gothic scan. |
| *Register of Letters* | 590–604 | documentary corpus with later arrangement | Norberg CCSL 140/140A; PL/OGL; NPNF2 12–13 selection. |

**Dates/authenticity:** report the *Dialogues* debate rather than presenting either side as settled. **Checklist:** `latin-fathers.md` §4 row Gregory.

### 2.20 Isidore of Seville

**Names:** Isidorus Hispalensis · Isidore of Seville · Isidoro de Sevilla. **Dates/office/region/language:** c. 560–4 April 636; bishop of Seville from c. 600; Visigothic Hispania; Latin. `[memory: verify episcopal date]`

| Works | Date | Transmission/authenticity | Edition and licence |
|---|---|---|---|
| *Etymologies* | unfinished at death; edited/sent by Braulio | accepted, 20 books; authorial state and Braulio's role matter | Lindsay 1911 Latin PD; PL/OGL; modern English 2006 protected, Brehaut 1912 selections PD lead. `[verified: reuse]` |
| *Sentences*, *On Ecclesiastical Offices*, histories and biblical works | early 7th c. | accepted core plus pseudo-Isidorian corpus | CCSL editions/reference; PL/OGL Latin. |

**Dates/authenticity:** Pseudo-Isidore is ninth-century and must never be attached to him. **Checklist:** `latin-fathers.md` §4 row Isidore.

### 2.21 Bede

**Names:** Beda Venerabilis · Bede · Beda el Venerable. **Dates/function/region/language:** c. 672/673–26 May 735; monk and presbyter at Wearmouth-Jarrow; Northumbria; Latin. `[memory: verify 672/673 convention]`

| Works | Date | Transmission/authenticity | Edition and licence |
|---|---|---|---|
| *Ecclesiastical History of the English People* | completed 731 | accepted, five books | Colgrave/Mynors OMT modern reference; Plummer 1896 Latin PD; Giles/Jane English PD scans. `[verified: reuse]` |
| Biblical commentaries, *On the Reckoning of Time*, hagiography | c. 703–735 | accepted core, individual dates vary | CCSL references; PL 90–95 is outside current OGL PL range, so use scans/OCR or other licensed editions. `[verified: reuse]` |

**Dates/authenticity:** the autobiographical notice in HE V.24 and continuations after 731 must be distinguished. **Checklist:** `latin-fathers.md` §4 row Bede.

## 3. Tier 2 entries

- **Pacian of Barcelona** (d. before 392), Latin bishop; letters to Sympronian, *On Penitents* and *On Baptism*. Gallandi/PL and the Tertullian Project's PD English route; exact CPL/date check. `[verified: reuse for edition; dates memory]`
- **Lucifer of Cagliari** (d. c. 370), Latin bishop and polemicist in the Arian controversy; CSEL 14/PL. His later followers are Part D. `[memory: verify]`
- **Marius Victorinus** (active c. 355–365), Roman rhetor and Latin theological writer; trinitarian works and Pauline commentaries, with title/recension problems. CSEL 83 / modern critical references. `[memory]`
- **Tyconius** (active c. 370–390), North African lay exegete associated with the Donatist milieu; *Book of Rules* and reconstructed Apocalypse commentary. His ideas are his own, not a summary of all Donatists. `[memory: verify]`
- **Filastrius of Brescia** (d. before 397), Latin bishop; *Diversarum hereseon liber*. CSEL 38/CCSL 9; hostile catalogue evidence. `[memory]`
- **Damasus I** (bishop of Rome 366–384), letters, epigrams and synodal documents; authorship of the so-called Decree of Damasus/Gelasian Decree must remain separate and disputed. `[memory: verify]`
- **Siricius** (bishop of Rome 384–399), decretal letters including *Directa* (385); document-level entity, not broad author corpus. `[memory]`
- **Chromatius of Aquileia** (d. c. 406/407), Latin bishop; sermons and commentary on Matthew recovered/identified in modern scholarship. CCSL 9A reference. `[memory]`
- **Gaudentius of Brescia** (active c. 400), Latin bishop; *Tractates*, including paschal sermons. Glück CSEL 68 (1936) copyright-territory check; PL fallback. `[memory]`
- **Innocent I** (bishop of Rome 401–417), decretal correspondence; use critical epistolary collections and distinguish authentic from pseudo-Isidorian texts. `[memory]`
- **Orosius** (active c. 414–418), Hispano-Roman presbyter; *Seven Books of History against the Pagans*, *Commonitorium* and *Apology*. Zangemeister CSEL 5 PD/OGL; older English PD. `[verified: reuse for corpus]`
- **Eucherius of Lyon** (d. c. 449), Latin bishop; *Praise of the Desert*, *Contempt of the World*, interpretive formulae and letters. CSEL 31/PL; modern date check. `[memory]`
- **Arnobius the Younger** (active mid-5th c.), anonymous/conventional Latin author of Psalm commentaries and disputed anti-Augustinian works; do not confuse with Arnobius of Sicca. `[memory]`
- **Salvian of Marseille** (c. 400–c. 480), presbyter and Latin writer; *On the Governance of God*, *To the Church* and letters. Pauly CSEL 8/OGL; Sanford 1930 English via TP status checked per page. `[verified: reuse]`
- **Gennadius of Marseille** (d. c. 496), presbyter; continuation of Jerome's *On Illustrious Men* and doctrinal catalogue, with attribution questions around other works. `[memory]`
- **Boethius** (c. 480–524), Roman official and philosophical/theological author; *Consolation*, logical works and *Opuscula sacra*. CPL membership/attribution of individual tractates needs verification. `[memory]`
- **Dionysius Exiguus** (d. after 525), Scythian monk at Rome; translated Greek canons and assembled decretals; chronological works. Treat collections as editorial projects. `[memory]`
- **Cassiodorus** (c. 485–c. 580), Roman official and monastic founder; *Institutions*, *Exposition of Psalms*, *Variae* and history projects. CCSL/CSEL/PL routes; work dates require verification. `[memory]`
- **Gregory of Tours** (538/539–594), bishop and Latin historian; *Histories*, miracle books and hagiography. Krusch/Levison MGH editions PD scans; modern translations protected. `[memory]`
- **Ildefonsus of Toledo** (c. 607–667), bishop and Latin writer; *On Illustrious Men*, *On the Perpetual Virginity of Mary* and liturgical works. CCSL 114A reference; PL 96 PD. `[memory]`
- **Julian of Toledo** (c. 642–690), bishop and Latin writer; *Prognosticum futuri saeculi*, historical and polemical works. CCSL 115 reference; PL 96 PD. `[memory]`

## 4. Open questions for Pedro

1. **Visible endpoint:** retain Bede/749 in research, but choose whether navigation says “antigüedad cristiana” or a narrower patristic period. Recommendation: research cutoff 749, visible period labels by work/date.
2. **Anonymous corpora:** Ambrosiaster, pseudo-Augustine, pseudo-Jerome and pseudo-Prosper need separate entity pages. Recommendation: yes; an alias can still lead users from the transmitted name.
3. **Papal letters:** options are writer pages for every bishop of Rome or document entities only. Recommendation: full writer page only for substantial corpora (Leo, Gregory); document pages for Damasus, Siricius, Innocent and Gelasius, cross-linked to short person records.
4. **Poets and historians:** Prudentius, Paulinus, Sulpicius and Gregory of Tours enlarge the universe beyond doctrinal treatises. Recommendation: keep them; later doctrine history needs hymn, cult and narrative evidence, with genre labels.
5. **Spanish coverage:** only a small subset has reusable historical translations. Recommendation: never present absence of Spanish as absence of a source; use a clearly labelled new Doctrina translation from an open original.

## 5. Verification log

1. Reopen Clavis Clavium and record exact CPL author/work numbers for all Tier 1 entries.
2. Verify Hilary's composition stages and the two-edition theory for Optatus.
3. Verify Ambrosiaster chronology, recensions and relationship between Commentary/Questions.
4. Verify *De sacramentis*' current authenticity consensus and source; do not flatten “Ambrosian.”
5. Jerome's birth/death ranges and the boundaries of his own Vulgate work.
6. Augustine: dates from the *Retractationes* and chronology; verify one CSEL and one PL OGL file plus licences.
7. Prudentius' publication date and whether CSEL 61 is present/licensed in OGL.
8. Vincent's death terminus and manuscript loss of Commonitorium book II.
9. Prosper's Roman-chancery role and *De vocatione* attribution.
10. Fulgentius' competing life dates and corpus separation from Ferrandus.
11. Benedict's life-date basis and Rule/Master dating without assuming dependence direction.
12. Gregory's *Dialogues* authorship debate from both a critic and a response.
13. Bede: birth convention, exact death date source and HE V.24/continuations.
14. Licence sample: original scan title pages for NPNF2 9, Optatus 1917, Gregory *Pastoral Rule* 1769, and one OGL TEI header each from CSEL and PL.
15. Whole file: New Advent and CCEL are not editions; no modern ACW/FOTC/CCSL translation is offered as reusable full text.
