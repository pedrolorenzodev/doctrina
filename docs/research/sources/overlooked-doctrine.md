_Report from the overnight source research of 2026-10-09 (agent-written; synthesis in `../sources.md`). Paths like `samples/…` refer to `~/Desktop/dev/doctrina-research-2026-10-09/samples/`, outside the repo._

# overlooked-doctrine — What each tradition actually cites, doctrine by doctrine (judgment report)

Agent: overlooked-doctrine · run 2026-10-09 · written incrementally (running log first, consolidated tables at the end).

## 1. Scope and method

Question: for each candidate doctrine (Eucharist, justification, papacy, Scripture & tradition, Mary, baptism, purgatory / intermediate state, saints & intercession, icons, canon, church authority / succession, priesthood, confession / penance, predestination & free will, Trinity / filioque, eschatology), which NON-Scripture primary sources does each tradition actually cite? Which are already in our registry (`data/site/sources.extra.json`, 44 entries), which are missing, and which missing works are needed by the most doctrines × traditions?

Difference from `overlooked-era.md` (sister report): that one ranks overlooked works by era from general knowledge (marked "memory, unverified" for who-cites-what). This one tries to **measure** who-cites-what from the traditions' own documents, mechanically where possible:

- **Catholic**: parsed ALL footnotes of the CCC (2,865 §§, 3,699 footnotes) from the `nossbigg/catechism-ccc-json` v0.0.2 dataset (built from the scborromeo/vatican.va text; used here ONLY as research data, never for publication — the CCC is © LEV/USCCB, see catholic-modern F4). Grouped §§ into doctrine ranges, normalised each footnote to a work, counted. Script + output: `samples/overlooked-doctrine/ccc_extract.py`, `ccc_norm.py`, `ccc_work_by_doctrine.tsv`, `ccc_doctrine_cites.json`.
- **Lutheran**: grepped the full English Book of Concord (Jacobs ed., 1911 printing, archive.org `thebookofconcord00unknuoft`, PD) for 70 patristic / medieval / conciliar names, assigned each hit to its confessional document (AC, Ap, SA, Tr, SC, LC, FC) and read the context. Script/output: `boc_hits.py`, `boc_ctx.txt`.
- **Reformed**: Westminster Standards proof texts are Scripture-only (verified below), so I measured the patristic layer in Calvin's *Institutes* (registry entry) and in the Second Helvetic / Belgic / 39 Articles texts (see log).
- **Orthodox**: grepped Philaret's Longer Catechism, Mogila and Dositheus (Schaff vol. 2 / Robertson 1899 OCR) for Fathers and councils (see log).
- **Baptist**: checked the 1689 LBC / BF&M / Hubmaier for non-Scripture authorities (see log).

Doctrine §-ranges used for the CCC (my choice, editable): Eucharist 1322–1419; justification 1987–2029; papacy 880–896 + 551–553, 765, 816, 834, 936–937; Scripture/Tradition/canon 74–141; Mary 484–511, 963–975, 721–726, 2617–2622, 2673–2679, 148–149; baptism 1213–1284; purgatory/eschatology 988–1065 + 668–682; saints 946–962, 2683–2684, 828, 1173; icons 1159–1162, 2129–2132, 476–477; authority/succession 857–865, 888–892, 1555–1561; priesthood 1536–1600; penance/indulgences 1422–1498; grace/free will/predestination 385–421, 600, 1037, 1730–1748, 1996–2005; Trinity/filioque 232–267; Christology 456–483.

## Running log

### R1. Registry gaps that surprised me (VERIFIED against `data/site/sources.extra.json`, 2026-10-09)
The registry has the Apology, Smalcald Articles, Large Catechism and Formula of Concord, but **not the Augsburg Confession itself, the Small Catechism, or the Treatise on the Power and Primacy of the Pope** — the AC is the base text every Lutheran doctrine page will quote first; the Treatise is THE Lutheran text on the papacy. Likewise Reformed has Belgic + Westminster Larger Catechism + Calvin, but **not the Westminster Confession, Shorter Catechism, Heidelberg Catechism, Canons of Dort, Second Helvetic, or 39 Articles**. Catholic has Aquinas + Florence (Cantate Domino) + Ecclesia de Eucharistia but **not Trent, Vatican I, Vatican II, or the CCC** (the CCC is cited in content only as excerpts, per policy). Orthodox has Philaret + Mogila + liturgies but **not the Confession of Dositheus / Synod of Jerusalem 1672 or the Encyclical of 1848**. Baptist has Abstract of Principles + New Hampshire but **not the 1689 Second London Confession or BF&M 2000**. These are the "spine" texts; they rank above any Father in the list below because each tradition cites them on every doctrine.

### R2. CCC footnote census (VERIFIED by script on the dataset; counts = footnote mentions in the §-ranges above)
Works cited in the most doctrine ranges (doctrines touched / total mentions):

| Work | Doctrines | Mentions | In registry? |
|---|---|---|---|
| Vatican II, *Lumen gentium* | 13 | 144 | NO (© LEV) |
| Council of Trent (decrees + canons) | 8 | 59 | NO (PD; Waterworth 1848) |
| Roman Missal (current; EP I = Roman Canon, Easter Vigil, prefaces) | 8 | 22 | NO (© ICEL/LEV; Latin Canon PD in older missals) |
| Vatican II, *Sacrosanctum Concilium* | 8 | 18 | NO |
| Aquinas, *Summa* etc. | 7 | 12 | YES |
| Irenaeus, *Against Heresies* | 7 | 10 | YES |
| Vatican I (*Dei Filius*, *Pastor aeternus*) | 6 | 7 | NO (PD) |
| Code of Canon Law 1983 | 5 | 34 | NO (©) |
| Vatican II, *Presbyterorum ordinis*, *Gaudium et spes*, *Ad gentes* | 5 each | 14–16 | NO |
| Ignatius of Antioch, Letters | 5 | 11 | NO |
| Paul VI, *Credo of the People of God* (1968) | 5 | 8 | NO (©) |
| Augustine, *Tractates on John* | 5 | 5 | YES |
| Vatican II, *Dei Verbum* | 4 | 55 | NO |
| Council of Florence (*Laetentur caeli*, Decree for the Armenians/Jacobites) | 4 | 12 | PARTIAL (Cantate Domino only) |
| Augustine, Sermons (227/272, 18, 58, 186, 298) | 4 | 5 | NO |
| Lateran IV (1215) | 4 | 5 | NO |
| Roman Catechism (Trent) | 3 | 7 | NO (PD Donovan 1829 — cov. catholic-modern) |
| Augustine, *Confessions* | 3 | 4 | NO |
| Gregory of Nazianzus, *Orations* (2, 40) | 3 | 4 | NO |
| Maximus the Confessor (Opuscula, Ambigua) | 3 | 3 | NO |
| Lateran Synod 649; Leo the Great (sermons, Tome); Jerome (letters, comm.); Gregory the Great; Byzantine liturgy | 3 each | 3 | NO (Byzantine liturgy partly YES) |
| Nicaea II (787) | 2 | 7 | NO |
| Lyons II (1274), Constantinople II (553), Ephesus (431), Orange II (529) | 2 each | 3–5 | NO (Chalcedon YES) |
| Justin, *First Apology* 61, 65–67 | 2 | 4 | NO (registry has only *Trypho*) |
| Ambrose, *De sacramentis* | 2 | 4 | NO (registry has *De mysteriis*) |
| Chrysostom, *Hom. 1 Cor.* (24/27, 41) | 2 | 2 | NO |
| Augustine, *On Grace and Free Will*, *On Nature and Grace* | 2 each | 2 | NO |
| Basil, *On the Holy Spirit* (18.45, 26.62) | 2 | 2 | NO |
| 1 Clement 42, 44 | 2 | 2 | NO |
| *Ineffabilis Deus* (1854), *Munificentissimus Deus* (1950) | 2 each | 2 | NO |
| Benedictus Deus (1336) | 1 | 4 | NO |
| Paul VI, *Indulgentiarum doctrina* (1967) | 1 | 7 | NO (©) |
| Roman Pontifical (ordination prayers) | 1 | 5 | NO (©; Latin of older Pontificale PD) |
| Toledo XI (675) | 1 | 4 | NO (Tejada y Ramiro PD Spanish — cov. councils-creeds) |
| John of Damascus, *On the Divine Images* | 1 | 2 | NO |
| Hippolytus (attr.), *Apostolic Tradition* 3, 8 | 1 | 2 | NO |
| Gregory the Great, *Dialogues* 4.39 (purgatory) | 1 | 1 | NO |
| Martyrdom of Polycarp 17; Polycarp *Phil.* 5; Cyril of Jerusalem *Cat.* 18; Tertullian *De paenitentia*, *De resurrectione*; Epiphanius *Panarion* 78; Origen *Hom.*; Innocent I *to Decentius*; Fulgentius; Nicetas of Remesiana; Caesarius of Arles; Chrysostom *On the Priesthood* & *On the Betrayal of Judas* 1.6 | 1 each | 1–2 | NO |

Already in the registry and cited by the CCC in these ranges: Didache 9–10, Justin *Trypho* 99, Irenaeus, Apostolic Constitutions, Cyril of Jerusalem *Mystagogical Cat.* 5, Ambrose *De mysteriis* 9, Augustine *Tract. John*, *En. Ps.*, *Letters* (98), Athanasius *De incarnatione*, John of Damascus *Exact Exposition*, Aquinas.

Observations:
1. The CCC's argument on every launch doctrine rests on **Vatican II + Trent + the liturgy (Roman Missal, Pontifical, Byzantine troparia)** far more than on Fathers. A Catholic page without Trent and LG/DV is hollow. Trent is PD (Waterworth 1848 EN; Spanish López de Ayala 1785 — cov. councils-creeds). Vatican II and the current liturgical books are the hard © block (cov. catholic-modern/councils-creeds: PERMISSION; quotation meanwhile).
2. The CCC's Fathers are a short, stable list: Ignatius, Irenaeus, Justin *1 Apol.*, 1 Clement, Polycarp, Cyprian, Tertullian, Athanasius, Basil *Spir.*, Gregory Naz. *Or.* 40/2, Gregory Nyssa, Cyril Jer., Chrysostom (*Judas*, *1 Cor.*, *Priesthood*), Ambrose (*De sacr.*, *De myst.*), Jerome, Augustine (*Conf.*, *City of God* 10.6, *Tract. John*, *Sermons*, anti-Pelagian works, *Contra ep. Manichaei* 5.6, *De virginitate*), Leo, Gregory the Great (*Dial.* 4.39), Maximus, John of Damascus (*Images*, *Exact Exp.*). All PD in Greek/Latin; nearly all in ANF/NPNF English (PD).
3. Papal Marian dogmas cite themselves: *Ineffabilis Deus* (1854, Pius IX d. 1878 → PD at source per Vatican law, catholic-modern F3) and *Munificentissimus Deus* (1950, Pius XII d. 1958 → PD under VA law from 2029 by author-death reading, or already PD by publication-year reading (1950+70 = 2020)). Both are needed for the Mary page by Catholics AND as the target of Orthodox/Protestant critique.

### R3. Book of Concord citation census (VERIFIED by grep + reading context; Jacobs 1911 printing, archive.org `thebookofconcord00unknuoft`; line numbers refer to `samples/overlooked-doctrine/jacobs1911.txt`)
Name hits per document (AC / Ap / SA / Tr / LC / FC): Augustine 6/32/7/3/2/11; Ambrose 4/10/–/1/–/2; Jerome 1/10/2/6/–/1; Cyprian 2/5/2/4/–/1; Epiphanius –/11/–/–/–/–; Bernard –/10/1/–/1/–; Chrysostom 2/2/–/1/–/5; Gregory (I) 2/4/–/1/–/3; scholastics (Biel 3, Scotus 5, Thomas 7, Gerson 9, Lombard 2) mainly Ap; Luther's own writings 30 in Ap notes + 86 in FC.
What they actually quote, by doctrine (context read):
- **Justification** — AC VI and XX: "Ambrose" (= Ambrosiaster) "he who believes in Christ is saved… by faith alone" (l.1716, 1996); AC XX: Augustine *De spiritu et littera* (l.1994); Ap IV: Bernard (l.9466–9679, "we will add also the judgment of Bernard"), Jerome *Dialogue against the Pelagians* (l.5497), Cyprian *On the Lord's Prayer* (l.7327), Tertullian (l.9908), Augustine *De gratia et libero arbitrio* (l.7305); Ap answers Leo X's bull *Exsurge Domine* (l.3784, 8051, 9611) and the Roman *Confutatio*.
- **Eucharist** — Ap X.55: the Greek "canon of the Mass" (epiclesis), Theophylact ("Vulgarius… bread is truly changed into flesh") and Cyril of Alexandria on John 15 (l.8790–8805). FC SD VII.37–39: "Justin, Cyprian, Augustine, Leo, Gelasius, Chrysostom" and Justin *1 Apol.* 66 quoted (l.32060–32092). **FC SD VII.76 quotes Chrysostom's "sermon concerning the passion" = *De proditione Judae* 1.6 (l.32498) — the very passage CCC 1375 cites** (same text, opposite conclusions: transubstantiation vs. sacramental union). AC XXII: Cyprian, Jerome, Pope Gelasius (both kinds) (l.2176–2180).
- **Papacy / ministry** — the *Treatise on the Power and Primacy of the Pope* (NOT in registry) is a patristic dossier: Nicaea can. 6 (Alexandria/Rome parallel), Cyprian's letter to Cornelius on episcopal election "divine tradition and apostolic observance", Jerome Ep. 146 to Evangelus ("Rome or Eugubium… same merit and priesthood"), Gregory the Great refusing "universal bishop" (to Eulogius), Chrysostom/Hilary/Cyprian/Augustine/Origen/Bede on "upon this rock", and rejects Ps.-Dionysius and the Clementines as forgeries (l.17610–18163).
- **Purgatory** — SA II.2: "The Papists quote here Augustine… Augustine does not write that there is a purgatory" (l.16136–16155); Ap XII long section on purgatory and satisfactions (l.9103–10843); Ap XXIV.96 uses Epiphanius on Aerius: "Neither do we favor Aerius" (verified on bookofconcord.org/defense/of-the-mass/).
- **Saints** — Ap XXI: the opponents cite Jerome *Against Vigilantius* and Cyprian's request to Cornelius (l.12056–12062).
- **Christology / Trinity** — the **Catalog of Testimonies** (bookofconcord.org/testimonies/, fetched): councils of Ephesus (Cyril's anathema 11 on the life-giving flesh) and Chalcedon (via Evagrius), Leo's Tome, Athanasius *Ep. to Epictetus*, Theodoret *Eranistes* (5×), Gelasius (3×), Cyril (4×), Chrysostom *Hom. Heb.* 17, Basil, Gregory of Nyssa, Eustathius, Origen *De principiis* 2.6, Oecumenius, Theophylact, John of Damascus. **Three of these are already in our registry (Theodoret *Eranistes*, Gelasius *Two Natures*, Chrysostom *Hom. Heb.*)** — the registry was evidently built from the same dossier; the Catalog itself is missing.
- **Mary** — no Marian Father citations surfaced by the grep; the SA I and FC SD VIII.24 Marian titles ("ever virgin", "Mother of God") are from memory (unverified; OCR double-spacing defeated phrase grep).

### R4. Calvin's *Institutes* census (VERIFIED by script on Allen 1813 translation, Gutenberg #45001 + #64392 (PD); counts = lines naming the Father inside chapters mapped to doctrines; output `samples/overlooked-doctrine/inst_hits.out`)
- Augustine 217 lines, everywhere (free will 48, predestination 25, Eucharist 23, justification 17, Scripture/authority 15, penance 14, sacraments 14, papacy 9, images 7, purgatory 7…).
- **Papacy (IV.6–7)**: Gregory the Great 25 (letters against John the Faster's "universal bishop"), Leo I 17, Council of Constantinople 20 (can. 3, 28 of Chalcedon context), Carthage/African councils 11 (Apiarius, appeals), Cyprian 8, Nicaea 8, Ephesus/Chalcedon 5 each, Bernard 4 (*De consideratione*), Eusebius 3.
- **Orders (IV.3–5)**: Jerome 8 (presbyter = bishop), Gregory I 11, Cyprian 5, Ambrose 5.
- **Penance (III.3–4)**: Chrysostom 11, Augustine 14, Lombard 3.
- **Images (I.11–12)**: Augustine 7, Gregory I 2 (letter to Serenus), Elvira, Nicaea II/Irene, Epiphanius' letter, Lactantius, Eusebius.
- **Trinity (I.13)**: Augustine 8, Tertullian 5 (*Against Praxeas*), Hilary 5, Irenaeus 4.
- **Baptism (IV.15–16)**: Augustine 5, Epiphanius 2, Tertullian, Cyprian, Carthage.
(Allen's translation drops most of Calvin's marginal work titles, so works are inferred from context; the Beveridge 1845 translation would give titles — verification item.)

### R5. Orthodox texts census (VERIFIED by grep on other agents' saved OCR: `samples/orthodox/schaff_v2.txt`, `actsdecreesofsyn00orth.txt`, `answer1895.txt`)
- **Philaret, Longer Catechism** (registry): Basil *On the Holy Spirit* 27 on unwritten tradition (Q24); Cyril of Jerusalem *Cat.* 4 + Athanasius *Festal 39* + John of Damascus for the OT canon (Q31–35); Ephesus can. 7 (no other creed) + Damascene for the procession of the Spirit (Q242); Basil's homily on the Forty Martyrs + Cyril's liturgy explanation for invocation of saints (Q264); Gregory Nazianzen *Against Julian* + Damascene on relics (Q267); Damascene on the Eucharist (Q340); Liturgy of St James (Q377); ecumenical councils and canons (Q68–73, 273–281).
- **Synod of Jerusalem 1672** (Robertson 1899): ~60 mentions of Cyril Lucaris — it is a point-by-point answer to **Lucaris' *Confession* (1629)**, which is therefore a needed primary source (the "Calvinist Orthodox" text the Orthodox condemned); also Laodicea (canon), Basil (10), Jeremias II (7), Mogila, Chrysostom, Ps.-Dionysius.
- **Patriarchal Encyclical of 1895** (Anthimos VII, reply to Leo XIII's *Praeclara gratulationis*; English "The Answer of the Great Church of Constantinople…", Manchester 1896, archive.org `answerofgreatchu0000eust`): one text that states the Orthodox objection on **six launch doctrines** — filioque (l.997, 1043), baptism by sprinkling/affusion (l.949, 1222), unleavened bread (l.773, 1311), purgatorial fire (l.949, 1419), the immaculate conception (l.950, 1431–1432), papal infallibility and primacy (l.951, 1514–2106); cites Vincent of Lérins, Photius, the cases of Popes Liberius, Vigilius and Honorius, Chalcedon. Highest value-per-word Orthodox text not in the registry.

### R6. Reformed / Baptist confessions: proofs are Scripture-only (VERIFIED)
NonlinearFruit/Creeds.json files (cloned by protestant-magisterial; Unlicense): WCF (33 ch.), 1689 LBC (32 ch.), Heidelberg, Canons of Dort — zero patristic names in the texts or proof lists. Second Helvetic is the exception: 20 patristic mentions, verified in Schaff III Latin (`samples/protestant-magisterial/schaff3-1877.txt` l.20530–24200): Theodosius' edict *Cunctos populos* + the creed of Pope Damasus (preface), Augustine *De civitate Dei* on the apocrypha (I), Lactantius and Epiphanius' letter against the painted curtain (IV: images), Augustine *De vera religione* (IV–V: worship of saints), *Enchiridion* (VII), *De bono perseverantiae* (X: predestination), councils of Nicaea, Constantinople, Ephesus, Chalcedon + Athanasian Creed (XI), Cyprian and Jerome *Comm. Titus* (XVIII: ministry), Augustine against the Donatists (XVIII). So for Reformed pages the patristic layer must come from Calvin + 2HC; for Baptist pages there is none in the confessions — Baptist authors argue from Scripture and, historically, from Tertullian *De baptismo* 18 and the Didache (verified in A. H. Strong, *Systematic Theology* vol. 3, 1907, Gutenberg #45283, l.15564, 16445; Strong cites Bunsen's *Hippolytus* contra at l.15748).

### R7. Hands-on checks of PD routes for items nobody else had covered (VERIFIED, 2026-10-09)
- **Ambrose, *De sacramentis* (+ *De mysteriis*)** — T. Thompson (tr.), J. H. Srawley (ed.), *St. Ambrose "On the Mysteries" and the treatise "On the Sacraments"*, SPCK/Macmillan 1919 ("First published 1919" on the title page OCR). archive.org `stambroseonmyste00ambruoft` (also `stambroseonmyste00ambr`, `StAmbroseOnTheMysteries`). djvu.txt 301 kB; sample (De myst. 53–54, "Before the blessing of the heavenly words another kind of thing is named, after consecration it is designated 'body'") is clean apart from footnote markers. PD in the US (pre-1931). Spain/Argentina depend on Thompson's and Srawley's death dates (not checked → verification item). Saved `samples/overlooked-doctrine/ambrose1919.txt`.
- **Optatus** — O. R. Vassall-Phillips, *The Work of St. Optatus… against the Donatists*, 1917: archive.org `theworkofstoptat00philuoft` (exists; text not sampled). US-PD.
- **Mark of Ephesus on purgatory** — L. Petit, *Documents relatifs au concile de Florence I: La question du Purgatoire à Ferrare*, Patrologia Orientalis 15 fasc. 1 (Paris: Firmin-Didot, 1920; volume dated 1927): Greek texts of Mark's two responses "Περὶ τοῦ καθαρτηρίου πυρός" + the Latin memoranda, with French translation. archive.org `patrologiaorient15pariuoft` (Toronto; djvu.txt 2.8 MB, not access-restricted) and `patrologia-orientalis-volume-15`. Greek OCR sampled: readable but with systematic κ→χ confusion ("χαὶ" for "καὶ") → regex fix + tesseract `grc` re-OCR. Original PD; Petit d. 1927 (memory, unverified) → his French translation PD in ES/AR too. Saved `po15.txt`. This is THE Orthodox primary text on purgatory and is otherwise only in © modern English.
- **1895 Patriarchal Encyclical** — `answerofgreatchu0000eust`: "Answer of the Great Church of Constantinople to the Papal Encyclical on Union: in the original Greek with an English translation", ed. Archim. Eustathius Metallinos, 1896 (metadata); PDF + djvu.txt, no access restriction flag. Greek + English in one PD (US) book.
- **Chrysostom, *De proditione Judae* 1.6** (CCC 1375 + FC SD VII.76): no PD English translation found (search 2026-10-09: only catholiclibrary.org "Fathers-Synchronized-EN" (origin/licence unknown — do not use), blog translations). Greek PG 49:373–392 PD → own translation of the homily (short, S).

## 2. Results

### 2.1 The "spine" texts — confessional/magisterial documents each tradition cites on (almost) every doctrine
These rank first: one document covers 10–16 doctrine pages for its tradition. Ranking by number of our 16 doctrines it speaks to (from `samples/overlooked-doctrine/ranking_conf.md`, my mapping; chapter coverage of WCF/1689/2HC/Dort verified from chapter titles, others from memory of their contents).

| # | Text | Trad. | Doctrines | Original | English | Spanish | Verdict | Details |
|---|---|---|---|---|---|---|---|---|
| 1 | Second Helvetic Confession (1566) — the only Reformed confession with a patristic apparatus (R6) | REF | 16 | Latin PD | Schaff III appendix PD | none PD → own | WORK M | protestant-magisterial |
| 2 | Second London Baptist Confession 1677/89 | BAP | 15 | Eng PD | reformed-standards YAML (Apache-2.0) | all Spanish © → own / ask Peregrino | EN READY · ES WORK | free-church |
| 3 | Westminster Confession + Shorter Catechism (registry has only the WLC) | REF | 14 | Eng PD | PD | Thomson 1880 PD | EN READY · ES WORK S | protestant-magisterial |
| 4 | **Augsburg Confession** (registry has Apology but not AC!) | LUT | 13 | Lat/Ger PD | Triglot (bookofconcord.org) PD | none PD (Misión Luterana PR licence unclear; CPH ©) | EN READY · ES WORK/PERM | protestant-magisterial |
| 5 | Synod of Jerusalem 1672 / Confession of Dositheus | ORT | 12 | Greek PD (Kimmel 1850) | Robertson 1899 PD | own | EN READY-ish · ES WORK | orthodox |
| 6 | Council of Trent | CAT | 11 (CCC-verified 11/11) | Latin PD | Waterworth 1848 PD | López de Ayala 1785 PD | WORK S–M | councils-creeds |
| 7 | Baptist Faith & Message 2000 | BAP | 10 | © SBC | © | © | PERMISSION | free-church |
| 8 | Vatican II *Lumen gentium* (+ *Dei Verbum*, *Gaudium et spes*, *Sacrosanctum Concilium*, *Presbyterorum ordinis*) | CAT | LG 5 + DV 4 (CCC: LG 144 footnotes in 13 doctrine ranges) | © Holy See to ~2034–35 | © LEV | © LEV | PERMISSION | councils-creeds, catholic-modern |
| 9 | Patriarchal Encyclical 1895 | ORT | 5–6 (verified R5) | Greek PD | Metallinos 1896 PD (US) | own | WORK S | orthodox |
| 10 | Heidelberg Catechism | REF | 5 | Ger PD | 1863 tr. PD | Aventrot 1628 PD | WORK S | protestant-magisterial |
| 11 | Encyclical of the Eastern Patriarchs 1848 | ORT | 4 | Greek PD | translator of the circulating EN unknown → own | own | WORK | orthodox |
| 12 | Roman Catechism (Trent) | CAT | 3 (CCC-verified) | Latin PD | Donovan 1829 PD | check | WORK S–M | catholic-modern |
| 13 | Vatican I (*Dei Filius*, *Pastor aeternus*) | CAT | 3 (CCC-verified) | Latin PD | Manning 1871 / Schaff 1877 PD | own | WORK S | councils-creeds |
| 14 | Treatise on the Power and Primacy of the Pope (missing from registry) | LUT | 3 (verified R3) | Lat PD | Triglot PD | own | EN READY | protestant-magisterial |
| 15 | Small Catechism (missing from registry) | LUT | 3 | Ger PD | Triglot PD | own | EN READY | protestant-magisterial |
| 16 | Catalog of Testimonies (BoC appendix) | LUT | Christology (verified) | Lat/Ger PD | Triglot via bookofconcord.org/testimonies/ (verified page) | own | EN READY | — |
| 17 | Canons of Dort | REF | 1 (predestination) but decisive | Latin PD | Schaff III PD | own | EN READY | protestant-magisterial |
| 18 | Thirty-nine Articles + BCP + Homilies + Ordinal | ANG | 14 (if Anglican is added) | PD | PD (UK Crown caveat) | 1715/1864 Spanish BCP PD | WORK | protestant-magisterial |
| 19 | Mediaeval/early-modern Catholic definitions cited by CCC: Florence *Laetentur* + Decree for the Armenians, Lyons II, Lateran IV, *Benedictus Deus*, Orange II, Toledo XI, Lateran 649, *Decretum Damasi*, *Ineffabilis Deus*, *Munificentissimus Deus* | CAT | 1–3 each (CCC-verified) | Latin PD (Munificentissimus: VA-law PD from 2029 at the latest) | own translations from Latin (short) / Denzinger-based | own; Tejada y Ramiro for Spanish councils | WORK S each | councils-creeds, catholic-modern |
| 20 | *Exsurge Domine* 1520 and the Roman *Confutatio* 1530 — the Catholic texts the Lutheran confessions answer | CAT/LUT | 2–3 | Latin PD | Reu 1930 / Jacobs II 1883 PD (Confutatio) | own | WORK S | overlooked-era |

Full table with all 52 such texts: `samples/overlooked-doctrine/ranking_conf.md`.

### 2.2 Cross-tradition works (Fathers, councils, medieval) ranked by how many traditions × doctrines need them
Ranking = number of the five core traditions that cite the work, then number of doctrine×tradition cells, then number of cells verified in the tradition's own document. "Verified" = found in CCC footnotes / BoC / Institutes / Philaret / 2HC / Jerusalem 1672 / 1895 / Strong as described above; the rest are memory (standard knowledge, unverified). Full 145-row table: `samples/overlooked-doctrine/ranking_crosstrad.md`; evidence per cell: `evidence.json`.

| # | Work (missing from registry) | Traditions | Doctrines | Verified cells | English | Spanish | Verdict |
|---|---|---|---|---|---|---|---|
| 1 | Eusebius, *Ecclesiastical History* (canon lists 3.25, 4.26, 6.25; succession lists) | all 5 | CA PA | 1/6 | NPNF2 1 PD | none PD → own | READY/WORK |
| 2 | Muratorian Fragment | all 5 | CA | 0/5 | ANF 5 PD | own (S) | READY/WORK S |
| 3 | **Epiphanius, *Panarion*** (75 Aerius → prayers for the dead; 78–79 Mary; Collyridians) | CAT LUT ORT REF | BA MA PU | 3/4 | **no PD English** → own translation of sections | own | WORK (sections S) |
| 4 | Canons of the councils (Nicaea 6, Constantinople 3, Chalcedon 28, Sardica 3–5, African Code, Laodicea 59–60, Apostolic Canons) | LUT ORT REF (+CAT) | AU CA PA SS | 7/7 | NPNF2 14 PD (Wikisource) | Tejada y Ramiro PD | READY/WORK |
| 5 | Cyprian, Letters (63, 64, 67, 73–75; to Cornelius) | CAT LUT REF | AU BA PA PR PU SA | 6/7 | ANF 5 PD | Camino y Orella 1807 (spanish-pd; check which letters) | READY/WORK |
| 6 | Augustine, *City of God* (10.6, 20–22) | CAT LUT REF | CA ES EU PU SA SS | 4/7 | Dods PD | Díaz de Beyral 1893 / es.wikisource (latin-fathers) | READY/WORK S |
| 7 | Ephesus 431 + Cyril's letters & 12 anathemas | CAT LUT ORT | MA TR | 5/6 | NPNF2 14 PD | Tejada PD | READY/WORK |
| 8 | Cyprian, *De unitate* (both versions of ch. 4) | CAT ORT REF | AU PA | 2/6 | ANF 5 PD | Camino y Orella 1807 PD | READY/WORK |
| 9 | Bernard (sermons on the Annunciation; *De consideratione*) | CAT LUT REF | JU PA PD SS | 5/5 | Eales / Lewis 1908 PD | own | READY/WORK |
| 10 | Chrysostom, *Hom. 1 Corinthians* (24, 27, 41) | CAT ORT REF | EU PU | 3/5 | NPNF1 12 PD | own | READY/WORK |
| 11 | Nicaea II (787) | CAT ORT REF | EU IC SA | 2/5 | NPNF2 14 PD | Tejada PD (profession) | READY/WORK |
| 12 | Augustine, *On Grace and Free Will* + *On Nature and Grace* | CAT LUT REF | JU PD | 3/4 | NPNF1 5 PD | own | READY/WORK |
| 13 | Vincent of Lérins, *Commonitorium* | CAT ORT REF | PA SS | 2/4 | NPNF2 11 PD | Cándido del Moral 1784 (BNE) PD | READY/WORK S |
| 14 | Gregory Nazianzen, *Oration 40* | BAP CAT ORT | BA TR | 2/4 | NPNF2 7 PD | own | READY/WORK |
| 15 | Chrysostom, homilies on repentance | LUT ORT REF | PD PE | 3/3 | NPNF1 9 (partly) | own | READY/WORK |
| 16 | Cyril of Jerusalem, *Catecheses* 1–18 | CAT ORT REF | CA ES SS | 2/3 | NPNF2 7 PD | own | READY/WORK |
| 17 | **Chrysostom, *On the Betrayal of Judas* 1.6** (same passage in CCC 1375 and FC SD VII.76) | CAT LUT ORT | EU | 2/3 | **no PD English** | own | WORK S |
| 18 | Athanasian Creed | CAT LUT REF (+ANG) | TR | 2/4 | BCP/BoC PD | BoC Spanish / own | READY |
| 19 | Jerome, *Against Helvidius* | BAP CAT REF | MA | 0/3 | NPNF2 6 PD | own | READY/WORK |
| 20 | Ignatius of Antioch, 7 letters | CAT ORT (+Prot. reply) | AU ES EU MA PA PR | 6/7 (CCC ×11) | Lake/Lightfoot PD | own | READY/WORK |
| 21 | Augustine, *Confessions* (9.11–13) | CAT REF | EU JU PD PU | 4/5 | Pusey PD | Zeballos 1781/93 PD | READY/WORK M |
| 22 | Basil, *On the Holy Spirit* (27; 18.45; 26.62) | CAT ORT | IC SA SS | 3/5 | NPNF2 8 PD | own | READY/WORK |
| 23 | Gregory the Great, Letters (Eulogius, John the Faster, Serenus) | LUT REF | IC PA PR | 4/4 | NPNF2 12–13 PD | own | READY/WORK |
| 24 | Hippolytus (attr.), *Apostolic Tradition* | BAP CAT | AU BA PR | 3/4 | Easton 1934 (US only) | own | READY(US)/WORK |
| 25 | Justin, *First Apology* 61, 65–67 | CAT LUT | BA EU | 3/3 | ANF 1 PD | own | READY/WORK |
| 26 | Augustine, *Contra ep. Manichaei* 5.6 | CAT LUT (+REF reply Inst I.7.3) | AU SS | 2/3 | NPNF1 4 PD | own | READY/WORK S |
| 27 | Augustine, *On Baptism against the Donatists* | CAT REF | AU BA | 2/3 | NPNF1 4 PD | own | READY/WORK |
| 28 | Augustine, *De cura pro mortuis* | CAT REF | PU SA | 1/3 | NPNF1 3 PD | own | READY/WORK |
| 29 | Constantinople III (Honorius) | CAT ORT | PA TR | 2/2 | NPNF2 14 PD | own | READY |
| 30 | Chrysostom, *Hom. Matthew* 54 ("this rock") | LUT REF | PA SS | 2/2 | NPNF1 10 PD | own | READY/WORK |
| 31 | Hilary, *De Trinitate* | LUT REF | PA TR | 2/2 | NPNF2 9 PD | own | READY/WORK |
| 32 | Augustine, *On the Spirit and the Letter* | LUT REF (+CAT) | JU | 2/2 | NPNF1 5 PD | own | READY/WORK |
| 33 | Tertullian, *De baptismo* | BAP REF | BA | 2/2 | ANF 3 PD | own | READY/WORK |
| 34 | Gregory of Nyssa, *Catechetical Oration* | CAT ORT | EU TR | 1/2 | NPNF2 5 PD | own | READY/WORK |
| 35 | Leo I, Sermons 3–5 + Letters 104–106; *Tome* | CAT REF LUT | PA TR | 2/4 | NPNF2 12 PD | own | READY |
| 36 | Gregory the Great, *Dialogues* IV.39 | CAT LUT | PU | 1/2 | 1911 PD; TCP 1608 CC0 | Ocaña 1532 (gothic; hard) → own | READY/WORK |
| 37 | Jerome, *Against Vigilantius* | CAT LUT | SA | 1/2 | NPNF2 6 PD | own | READY/WORK |
| 38 | John of Damascus, *On the Divine Images* | CAT ORT | IC | 1/2 | Allies 1898 PD | own | WORK M |
| 39 | Chrysostom, *On the Priesthood* | CAT ORT | PR | 1/2 | NPNF1 9 PD | Scío 1773 PD | READY/WORK S |
| 40 | Protevangelium of James | CAT ORT (Prot. contra) | MA | 0/2 | ANF 8 PD | own | READY/WORK |
| 41 | Augustine, Sermons (131, 186, 227, 272, 298) | CAT (+REF reads 272) | ES EU JU MA | 4/4 | partly NPNF1 6 | own | WORK |
| 42 | Ambrose, *De sacramentis* | CAT (+LUT/REF read it) | BA EU | 2/2 | **Thompson 1919 PD (US), verified R7** | own | WORK S |
| 43 | Mark of Ephesus, Florence writings on purgatory | ORT | PU ES TR | 0/3 | **own from Petit PO 15 (1920, verified R7)** | own | WORK M |
| 44 | Photius, *Mystagogy of the Holy Spirit* | ORT | TR PA | 2/2 | own (modern ©) | own | WORK M |
| 45 | Cyril Lucaris, *Confession* (1629) | ORT (contra) | PD + others | 1/1 | own from Kimmel 1850 | own | WORK S |

### 2.3 Doctrine × tradition matrix (what each tradition cites; registry items first, then missing items with the evidence tag)
Tags: `CCC…` = CCC footnote at that §; `BoC:` = Book of Concord document; `Inst` = Calvin *Institutes*; `Phil Q` = Philaret question; `2HC` = Second Helvetic chapter; `J1672` = Synod of Jerusalem; `E1895` = 1895 Encyclical; `Strong` = A. H. Strong 1907; `…(Creeds.json)` = chapter titles checked; `m` = memory, unverified. ANG is listed for completeness (Anglican is "maybe later").

#### Eucharist (EU)
- Already in registry and cited: CAT: Didache 9-10, Irenaeus AH 4.18, Cyril Jer. Myst. 5, Ambrose De myst. 9, Augustine Tract. Jn 26, Aquinas III.73-75, Ecclesia de Eucharistia (CCC footnotes) · ORT: Liturgies of Chrysostom/Basil, Hapgood, Cabasilas, Philaret, Mogila, Damascene Exact Exp. IV.13 · LUT: Ap X, SA III.6, LC V, FC VII, Luther 1528, Marburg · REF: Institutes IV.17-18, Belgic 35, WLC 168-177, Gelasius Two Natures (Inst IV.17 + FC SD VII) · BAP: New Hampshire, Abstract
- **CAT** (missing): Council of Trent, decrees & canons (1545-63) — *CCC1366-1377*; Lateran IV (1215), constitutions 1, 21 — *m*; Ignatius of Antioch, seven letters — *CCC1331,1369,1405*; Justin, First Apology — *CCC1345,1351,1355*; Ambrose, De sacramentis — *CCC1383,1393*; Chrysostom, On the Betrayal of Judas 1.6 — *CCC1375*; Chrysostom, Homilies on 1 Corinthians (24, 27, 41) — *CCC1397*; Augustine, Sermons (131, 186, 227, 272, 298…) — *CCC1396*; Augustine, City of God — *CCC1372*; Augustine, Confessions — *CCC1371*; Cyril of Alexandria, Commentary on Luke — *CCC1381*; Roman Missal (Roman Canon, Easter Vigil, prefaces) — *CCC1333,1353,1383*; Paul VI, Mysterium fidei (1965) — *CCC1374,1378*; Fulgentius, Contra Fabianum — *CCC1394*; Council of Constance (communion under one kind) — *m*
- **ORT** (missing): Chrysostom, On the Betrayal of Judas 1.6 — *m*; Chrysostom, Homilies on 1 Corinthians (24, 27, 41) — *m*; Synod of Jerusalem 1672 / Confession of Dositheus — *m(orthodox report: Decree XVII)*; Gregory of Nyssa, Catechetical Oration — *m*; Symeon of Thessalonica, On the Sacred Liturgy — *m*; Nicaea II (787) definition + canons — *m*
- **LUT** (missing): Justin, First Apology — *BoC:FC-SD VII (Justin "not as common bread")*; Chrysostom, On the Betrayal of Judas 1.6 — *BoC:FC-SD VII.76*; Augsburg Confession (1530) — *BoC:AC X*; Luther, Small Catechism (1529) — *m*; Theophylact, Commentary on John (Vulgarius) — *BoC:Ap X (Vulgarius)*; Cyril of Alexandria (Eucharistic christology; In Jo. 15) — *BoC:FC-SD VII (Cyril)*; Roman Confutation of the Augsburg Confession (1530) — *BoC:Ap answers it*; Luther, Babylonian Captivity (1520) — *m*
- **REF** (missing): Chrysostom, Homilies on 1 Corinthians (24, 27, 41) — *Inst IV.17 (Chrysostom x6; works not identified in Allen tr.)*; Heidelberg Catechism (1563) — *m*; Westminster Confession + Shorter Catechism (1647) — *WCF-chapters(Creeds.json)*; Second Helvetic Confession (1566) — *m*; Consensus Tigurinus (1549) — *m*; Ratramnus, De corpore et sanguine Domini — *m*
- **BAP** (missing): Second London Baptist Confession (1677/89) — *1689-chapters(Creeds.json)*; Baptist Faith & Message 2000 — *m*
- **ANG** (missing): Thirty-nine Articles (1571) — *m*; Book of Common Prayer — *m*; Cranmer, Defence of the True Doctrine of the Sacrament — *m*

#### Justification (JU)
- Already in registry and cited: LUT: Ap IV, SA II.1, FC III · REF: Institutes III.11-18, Belgic 22-24, WLC 70-73 · ORT: Philaret, Mogila · BAP: NH, Abstract · CAT: Aquinas I-II.113, Augustine Tract. Jn 72 (CCC1994)
- **CAT** (missing): Council of Trent, decrees & canons (1545-63) — *CCC1989-2016*; Augustine, Sermons (131, 186, 227, 272, 298…) — *CCC2009*; Augustine, Confessions — *CCC2002*; Council of Orange II (529) — *CCC1037*; Augustine, On Grace and Free Will + On Nature and Grace — *CCC2001*; Athanasius, Letters to Serapion — *CCC1988*; Gregory of Nyssa, Homilies on the Song / Life of Moses — *CCC2015*; Leo X, Exsurge Domine (1520) — *BoC:Ap (bull of Leo X)*
- **ORT** (missing): Synod of Jerusalem 1672 / Confession of Dositheus — *m*; Jeremias II, Answers to the Tübingen theologians (1576-81) — *m*; Mark the Ascetic, On Those Who Think They Are Justified by Works — *m*; Gregory Palamas, Triads / homilies — *m*
- **LUT** (missing): Augsburg Confession (1530) — *BoC:AC IV, VI, XX*; Roman Confutation of the Augsburg Confession (1530) — *BoC*; Leo X, Exsurge Domine (1520) — *BoC:Ap*; Ambrosiaster, Commentary on Paul ("sola fide") — *BoC:AC VI, XX*; Augustine, On the Spirit and the Letter — *BoC:AC XX*; Bernard of Clairvaux (sermons; De consideratione) — *BoC:Ap IV (x10)*; Jerome, Dialogue against the Pelagians — *BoC:Ap IV*; Cyprian, On the Lord's Prayer — *BoC:Ap IV*; Luther, Commentary on Galatians (1535) — *m*; Scholastics as opponents (Biel, Scotus) — *BoC:Ap (Biel, Scotus, Thomas, Gerson)*
- **REF** (missing): Heidelberg Catechism (1563) — *m*; Westminster Confession + Shorter Catechism (1647) — *WCF-chapters(Creeds.json)*; Second Helvetic Confession (1566) — *m*; Augustine, On the Spirit and the Letter — *Inst (Augustine x17)*; Bernard of Clairvaux (sermons; De consideratione) — *Inst III.11-18 (Bernard x6)*; Canons of Dort (1619) — *Dort-heads(Creeds.json)*
- **BAP** (missing): Second London Baptist Confession (1677/89) — *1689-chapters(Creeds.json)*; Baptist Faith & Message 2000 — *m*
- **ANG** (missing): Thirty-nine Articles (1571) — *m*; Books of Homilies (1547/1571) — *m*; Hooker, Laws of Ecclesiastical Polity; Learned Discourse — *m*

#### Papacy (PA)
- Already in registry and cited: CAT: Irenaeus AH 3.3.2 (CCC834) · LUT: SA II.4 · REF: Institutes IV.6-7, Belgic 31-32 · ORT: Philaret Q (Christ sole head)
- **CAT** (missing): Ignatius of Antioch, seven letters — *CCC834*; Vatican I, Dei Filius + Pastor aeternus (1870) — *CCC891*; Vatican II, Lumen gentium (1964) — *CCC880-896*; Maximus the Confessor (Opuscula, Ambigua, Disputation with Pyrrhus) — *CCC834*; Cyprian, De unitate ecclesiae (both versions of ch. 4) — *m*; Leo I, Sermons 3-5, 82 (Peter); Letters 104-106 — *m*; Optatus, Against Parmenian — *m*; Council of Florence, Laetentur caeli (1439) + Decree for the Greeks — *m*; Boniface VIII, Unam sanctam (1302) — *m*; 1 Clement — *m*; Council of Sardica (343) canons 3-5 — *m*
- **ORT** (missing): Cyprian, De unitate ecclesiae (both versions of ch. 4) — *m*; Encyclical of the Eastern Patriarchs (1848) — *m(orthodox report)*; Patriarchal Encyclical of 1895 (reply to Leo XIII) — *E1895 (infallibility)*; Canons of the ecumenical & local councils (Nicaea 6, Const. 3, Chalcedon 28, Laodicea 59-60…) — *Phil + E1895 (canon 28)*; Constantinople III (681) incl. condemnation of Honorius — *E1895 (Honorius)*; Vincent of Lérins, Commonitorium — *E1895*; Photius, Mystagogy of the Holy Spirit; Encyclical 866 — *E1895*; Nilus Cabasilas, On the Primacy of the Pope — *m*
- **LUT** (missing): Augsburg Confession (1530) — *BoC:AC XXVIII*; Canons of the ecumenical & local councils (Nicaea 6, Const. 3, Chalcedon 28, Laodicea 59-60…) — *BoC:Tr (Nicaea can. 6)*; Treatise on the Power and Primacy of the Pope (1537) — *BoC:Tr (whole text)*; Cyprian, Letters (63, 64, 67, 73-75; to Cornelius) — *BoC:Tr (to Cornelius)*; Jerome, Letter 146 to Evangelus — *BoC:Tr*; Gregory the Great, Letters (to Eulogius, John the Faster, Serenus) — *BoC:Tr (to Eulogius)*; Chrysostom, Homilies on Matthew (54 on "this rock") — *BoC:Tr (Upon this rock)*; Hilary, De Trinitate — *BoC:Tr*
- **REF** (missing): Westminster Confession + Shorter Catechism (1647) — *WCF-chapters(Creeds.json)*; Second Helvetic Confession (1566) — *m*; Bernard of Clairvaux (sermons; De consideratione) — *Inst IV.7 (De consideratione)*; Cyprian, De unitate ecclesiae (both versions of ch. 4) — *Inst IV.6-7 (Cyprian x8)*; Leo I, Sermons 3-5, 82 (Peter); Letters 104-106 — *Inst IV.6-7 (Leo x17)*; Canons of the ecumenical & local councils (Nicaea 6, Const. 3, Chalcedon 28, Laodicea 59-60…) — *Inst IV.6-7 (Constantinople x20, Nicaea x8, Chalcedon x5)*; Gregory the Great, Letters (to Eulogius, John the Faster, Serenus) — *Inst IV.6-7 (Gregory I x25)*; African Code / Council of Carthage 419 (Apiarius) — *Inst IV.6-7 (Carthage x11)*; Eusebius, Ecclesiastical History — *Inst IV.6*
- **BAP** (missing): Second London Baptist Confession (1677/89) — *1689-chapters(Creeds.json)*
- **ANG** (missing): Thirty-nine Articles (1571) — *m*; Jewel, Apology of the Church of England (1562) — *m*

#### Scripture & Tradition (SS)
- Already in registry and cited: CAT: Irenaeus AH 3.3.1 (CCC77), Aquinas I.1.10 · ORT: Philaret Q16-24, Mogila I.4, Damascene · LUT: FC "Rule and Norm" · REF: Belgic 2-7, Institutes I.7-9, IV.8-10 · BAP: NH 1, Abstract 1 · Augustine De doctrina christiana (canon 2.8)
- **CAT** (missing): Council of Trent, decrees & canons (1545-63) — *CCC120*; Bernard of Clairvaux (sermons; De consideratione) — *CCC108*; Vatican I, Dei Filius + Pastor aeternus (1870) — *CCC90*; Vincent of Lérins, Commonitorium — *m*; Vatican II, Dei Verbum (1965) — *CCC74-141*; Augustine, Against the Fundamental Epistle of Manichaeus (5.6) — *CCC119*; Augustine, Predestination of the Saints — *CCC92*; Gregory the Great, Homilies on Ezekiel — *CCC94*; Origen, Homilies (Lev., Ex., Ezek.) — *CCC113*; Jerome, Commentary on Isaiah prol. — *CCC133*; Basil, On the Holy Spirit — *m*; Newman, Essay on Development (1845/78) — *m*
- **ORT** (missing): Synod of Jerusalem 1672 / Confession of Dositheus — *m*; Encyclical of the Eastern Patriarchs (1848) — *m*; Canons of the ecumenical & local councils (Nicaea 6, Const. 3, Chalcedon 28, Laodicea 59-60…) — *Phil Q68-73*; Vincent of Lérins, Commonitorium — *E1895*; Basil, On the Holy Spirit — *Phil Q24*
- **LUT** (missing): Augsburg Confession (1530) — *m*; Augustine, Against the Fundamental Epistle of Manichaeus (5.6) — *m*; Gerson (cited by AC/Ap) — *BoC:AC/Ap*
- **REF** (missing): Augustine, City of God — *2HC I*; Westminster Confession + Shorter Catechism (1647) — *WCF-chapters(Creeds.json)*; Second Helvetic Confession (1566) — *2HC I-II*; Canons of the ecumenical & local councils (Nicaea 6, Const. 3, Chalcedon 28, Laodicea 59-60…) — *Inst IV.8-9 (Nicaea x8, Ephesus x5)*; Vincent of Lérins, Commonitorium — *m*; Chrysostom, Homilies on Matthew (54 on "this rock") — *Inst I.7-9*; Cyril of Jerusalem, Catechetical Lectures 1-18 — *m*
- **BAP** (missing): Second London Baptist Confession (1677/89) — *1689-chapters(Creeds.json)*; Baptist Faith & Message 2000 — *m*
- **ANG** (missing): Thirty-nine Articles (1571) — *m*; Hooker, Laws of Ecclesiastical Polity; Learned Discourse — *m*; Jewel, Apology of the Church of England (1562) — *m*

#### Mary (MA)
- Already in registry and cited: CAT: Irenaeus AH 3.22.4 (CCC494), Justin Trypho 100 · ORT: Liturgies, Philaret · REF: Belgic 18
- **CAT** (missing): Ignatius of Antioch, seven letters — *CCC496,498*; Augustine, Sermons (131, 186, 227, 272, 298…) — *CCC510*; Vatican II, Lumen gentium (1964) — *CCC963-975*; Pius IX, Ineffabilis Deus (1854) — *CCC491*; Pius XII, Munificentissimus Deus (1950) — *CCC966*; Ephesus 431 + Cyril's 2nd/3rd Letters to Nestorius & 12 Anathemas — *CCC495*; Lateran Synod 649 canons — *CCC496,503*; Epiphanius, Panarion (75 Aerius, 78-79 Mary) — *CCC494*; Jerome, Letters (15, 22, 51, 146) — *CCC494*; Origen, Contra Celsum — *CCC498*; Augustine, On Holy Virginity — *CCC506,963*; Sub tuum praesidium — *m*; Protevangelium of James — *m*; Jerome, Against Helvidius — *m*
- **ORT** (missing): Patriarchal Encyclical of 1895 (reply to Leo XIII) — *E1895 (immaculate conception rejected)*; Ephesus 431 + Cyril's 2nd/3rd Letters to Nestorius & 12 Anathemas — *m*; Protevangelium of James — *m*; Dormition homilies (John of Damascus, Germanus, Andrew of Crete) — *m*; Akathist Hymn — *m*
- **LUT** (missing): Augsburg Confession (1530) — *BoC:AC XXI*; Ephesus 431 + Cyril's 2nd/3rd Letters to Nestorius & 12 Anathemas — *BoC:Catalog*; Luther, Commentary on the Magnificat (1521) — *m*; Catalog of Testimonies (appendix to BoC) — *BoC:Catalog (Ephesus)*
- **REF** (missing): Second Helvetic Confession (1566) — *m*; Jerome, Against Helvidius — *m*
- **BAP** (missing): Baptist Faith & Message 2000 — *m*; Jerome, Against Helvidius — *m(con)*
- **ANG** (missing): Thirty-nine Articles (1571) — *m*; Book of Common Prayer — *m*

#### Baptism (BA)
- Already in registry and cited: CAT: Augustine Tract. Jn 80 (CCC1228), Ep. 98 (CCC1274), De peccatorum meritis · ORT: Philaret, Mogila, Hapgood (rite), Cyril Myst. 2, Ap. Const. · LUT: Ap IX, SA III.5, LC IV · REF: Institutes IV.15-16, Belgic 34, WLC 165-167 · BAP: Didache 7 (Strong), NH, Abstract
- **CAT** (missing): Council of Trent, decrees & canons (1545-63) — *CCC1250-1264*; Justin, First Apology — *CCC1216*; Ambrose, De sacramentis — *CCC1225*; Roman Missal (Roman Canon, Easter Vigil, prefaces) — *CCC1217-1221 (Easter Vigil)*; Cyprian, Letters (63, 64, 67, 73-75; to Cornelius) — *m*; Council of Florence, Decree for the Armenians (1439) — *CCC1213,1263*; Roman Catechism (Trent, 1566) — *CCC1213*; Gregory Nazianzen, Oration 40 On Baptism — *CCC1216*; Irenaeus, Demonstration of the Apostolic Preaching — *CCC1274*; Origen, Commentary on Romans 5.9 — *m*; Hippolytus (attr.), Apostolic Tradition — *m*; Augustine, On Baptism against the Donatists — *m*
- **ORT** (missing): Synod of Jerusalem 1672 / Confession of Dositheus — *m*; Patriarchal Encyclical of 1895 (reply to Leo XIII) — *E1895 (sprinkling)*; Gregory Nazianzen, Oration 40 On Baptism — *m*; Chrysostom, Baptismal Instructions — *m*
- **LUT** (missing): Augsburg Confession (1530) — *BoC:AC IX*; Luther, Small Catechism (1529) — *BoC:SC IV*
- **REF** (missing): Heidelberg Catechism (1563) — *m*; Westminster Confession + Shorter Catechism (1647) — *WCF-chapters(Creeds.json)*; Second Helvetic Confession (1566) — *m*; Cyprian, Letters (63, 64, 67, 73-75; to Cornelius) — *Inst IV.16*; African Code / Council of Carthage 419 (Apiarius) — *Inst IV.16 (Carthage)*; Epiphanius, Panarion (75 Aerius, 78-79 Mary) — *Inst IV.15 (Epiphanius x2)*; Augustine, On Baptism against the Donatists — *Inst IV.15*; Tertullian, De baptismo — *Inst IV.15-16*
- **BAP** (missing): Second London Baptist Confession (1677/89) — *1689-chapters(Creeds.json)*; Baptist Faith & Message 2000 — *m*; Gregory Nazianzen, Oration 40 On Baptism — *m*; Hippolytus (attr.), Apostolic Tradition — *Strong (contra)*; Tertullian, De baptismo — *Strong (De baptismo)*; Schleitheim Confession (1527) — *m*; Hubmaier, On the Christian Baptism of Believers (1525) — *m*
- **ANG** (missing): Thirty-nine Articles (1571) — *m*; Book of Common Prayer — *m*

#### Purgatory / intermediate state (PU)
- Already in registry and cited: CAT: — · ORT: Mogila I.64-66, Philaret, Liturgies (memorials), Hapgood (Panikhida), Cyril Myst. 5.9-10 · LUT: Ap XII/XXIV, SA II.2 · REF: Institutes III.5
- **CAT** (missing): Council of Trent, decrees & canons (1545-63) — *CCC1031*; Chrysostom, Homilies on 1 Corinthians (24, 27, 41) — *CCC1032*; Augustine, City of God — *m*; Augustine, Confessions — *m*; Council of Florence, Laetentur caeli (1439) + Decree for the Greeks — *CCC1031*; Cyprian, Letters (63, 64, 67, 73-75; to Cornelius) — *CCC1028*; Benedict XII, Benedictus Deus (1336) — *CCC1022,1023,1031*; Lyons II (1274), profession of Michael Palaeologus — *CCC1022,1032*; Gregory the Great, Dialogues IV — *CCC1031*; Ambrose, Exposition of Luke — *CCC1025*; Augustine, Enchiridion — *m*; Augustine, De cura pro mortuis gerenda — *m*; Passion of Perpetua and Felicity — *m*; Tertullian, De corona / De monogamia — *m*
- **ORT** (missing): Chrysostom, Homilies on 1 Corinthians (24, 27, 41) — *m*; Synod of Jerusalem 1672 / Confession of Dositheus — *m*; Patriarchal Encyclical of 1895 (reply to Leo XIII) — *E1895 (purgatorial fire)*; Epiphanius, Panarion (75 Aerius, 78-79 Mary) — *m (Aerius)*; Mark of Ephesus, on purgatorial fire / Florence writings — *m*
- **LUT** (missing): Augustine, City of God — *BoC:SA II.2 (Augustine named; work = memory)*; Leo X, Exsurge Domine (1520) — *m (condemned Luther theses 37-40 on purgatory)*; Epiphanius, Panarion (75 Aerius, 78-79 Mary) — *BoC:Ap XXIV (Aerius)*; Gregory the Great, Dialogues IV — *m*
- **REF** (missing): Augustine, Confessions — *Inst III.5*; Westminster Confession + Shorter Catechism (1647) — *WCF-chapters(Creeds.json)*; Second Helvetic Confession (1566) — *m*; Augustine, De cura pro mortuis gerenda — *Inst III.5 (Augustine x7)*
- **BAP** (missing): Second London Baptist Confession (1677/89) — *1689-chapters(Creeds.json)*; Baptist Faith & Message 2000 — *m*
- **ANG** (missing): Thirty-nine Articles (1571) — *m*; Books of Homilies (1547/1571) — *m*

#### Saints, intercession, relics (SA)
- Already in registry and cited: CAT: Aquinas · ORT: Philaret Q264-267, Cyril Myst. 5, Mogila III · LUT: Ap XXI, SA II.2.25 · REF: Institutes III.20.21-27, Belgic 26 · Augustine Contra Faustum 20.21 (memory)
- **CAT** (missing): Council of Trent, decrees & canons (1545-63) — *CCC2132*; Augustine, City of God — *m*; Vatican II, Lumen gentium (1964) — *CCC954-959*; Basil, On the Holy Spirit — *CCC2684*; Roman Catechism (Trent, 1566) — *CCC947-952*; Augustine, De cura pro mortuis gerenda — *m*; Martyrdom of Polycarp — *CCC957*; Nicetas of Remesiana, Explanation of the Creed — *CCC946*; Jerome, Against Vigilantius — *m*
- **ORT** (missing): Synod of Jerusalem 1672 / Confession of Dositheus — *m*; Nicaea II (787) definition + canons — *m*; Basil, Homily on the Forty Martyrs — *Phil Q264*; Gregory Nazianzen, Against Julian (Or. 4) — *Phil Q267*
- **LUT** (missing): Augsburg Confession (1530) — *BoC:AC XXI*; Cyprian, Letters (63, 64, 67, 73-75; to Cornelius) — *BoC:Ap XXI*; Jerome, Against Vigilantius — *BoC:Ap XXI*
- **REF** (missing): Westminster Confession + Shorter Catechism (1647) — *WCF-chapters(Creeds.json)*; Second Helvetic Confession (1566) — *2HC V (Augustine De vera religione)*; African Code / Council of Carthage 419 (Apiarius) — *Inst III.20*; Augustine, Of True Religion — *2HC IV-V*
- **BAP** (missing): Second London Baptist Confession (1677/89) — *1689-chapters(Creeds.json)*
- **ANG** (missing): Thirty-nine Articles (1571) — *m*

#### Icons / images (IC)
- Already in registry and cited: CAT: Aquinas II-II.81.3 ad 3 (CCC2132) · ORT: Damascene Exact Exp. IV.16, Mogila · REF: Institutes I.11-12, WLC 107-110
- **CAT** (missing): Council of Trent, decrees & canons (1545-63) — *CCC2132*; Nicaea II (787) definition + canons — *CCC1160,1161,2132,476-477*; Basil, On the Holy Spirit — *CCC2132*; Lateran Synod 649 canons — *CCC476*; John of Damascus, Three Treatises on the Divine Images — *CCC1159,1162*
- **ORT** (missing): Nicaea II (787) definition + canons — *m*; Basil, On the Holy Spirit — *m*; John of Damascus, Three Treatises on the Divine Images — *m*; Theodore the Studite, On the Holy Icons — *m*; Synodikon of Orthodoxy (843) — *m*
- **LUT** (missing): Luther, Against the Heavenly Prophets (1525) — *m*
- **REF** (missing): Nicaea II (787) definition + canons — *Inst I.11 (Irene)*; Heidelberg Catechism (1563) — *m*; Second Helvetic Confession (1566) — *2HC IV*; Gregory the Great, Letters (to Eulogius, John the Faster, Serenus) — *Inst I.11 (Ep. to Serenus)*; Augustine, Of True Religion — *2HC IV*; Epiphanius, Letter to John of Jerusalem (curtain image; Jerome Ep. 51) — *2HC IV + Inst I.11*; Lactantius, Divine Institutes 2 (images) — *2HC IV + Inst I.11*; Council of Elvira (c. 306) canon 36 — *Inst I.11*; Libri Carolini / Opus Caroli — *m*
- **BAP** (missing): Second London Baptist Confession (1677/89) — *1689-chapters(Creeds.json)*
- **ANG** (missing): Books of Homilies (1547/1571) — *m*

#### Canon (CA)
- Already in registry and cited: CAT: Florence Cantate Domino (= DS 1334-1336, CCC120) · ORT: Damascene Exact Exp. IV.17 (Philaret Q31) · REF: Belgic 4-6 · Augustine De doctrina christiana 2.8
- **CAT** (missing): Council of Trent, decrees & canons (1545-63) — *CCC120*; Eusebius, Ecclesiastical History — *m*; Decretum Gelasianum / Council of Rome 382 canon list — *CCC120*; Hippo 393 / Carthage 397 canon list — *m*; Innocent I, Letter to Exsuperius (canon) — *m*; Muratorian Fragment — *m*
- **ORT** (missing): Synod of Jerusalem 1672 / Confession of Dositheus — *m*; Canons of the ecumenical & local councils (Nicaea 6, Const. 3, Chalcedon 28, Laodicea 59-60…) — *J1672 (Laodicea)*; Eusebius, Ecclesiastical History — *m*; Cyril of Jerusalem, Catechetical Lectures 1-18 — *Phil Q31-33*; Athanasius, Festal Letter 39 — *Phil Q33-35*; Apostolic Canons — *m*; Muratorian Fragment — *m*
- **LUT** (missing): Eusebius, Ecclesiastical History — *m*; Luther, Prefaces to the Bible (Apocrypha, James, Hebrews) — *m*; Chemnitz, Examination of the Council of Trent — *m*; Muratorian Fragment — *m*
- **REF** (missing): Augustine, City of God — *2HC I*; Westminster Confession + Shorter Catechism (1647) — *WCF-chapters(Creeds.json)*; Second Helvetic Confession (1566) — *2HC I*; Eusebius, Ecclesiastical History — *m*; Jerome, Vulgate prefaces (Prologus galeatus; Solomon) — *Inst IV.9 (Jerome on Maccabees)*; Muratorian Fragment — *m*
- **BAP** (missing): Second London Baptist Confession (1677/89) — *1689-chapters(Creeds.json)*; Eusebius, Ecclesiastical History — *m*; Muratorian Fragment — *m*
- **ANG** (missing): Thirty-nine Articles (1571) — *m*; Jerome, Vulgate prefaces (Prologus galeatus; Solomon) — *m (39 Art VI cites Jerome)*

#### Church authority / succession (AU)
- Already in registry and cited: CAT: Irenaeus AH 3.3, Ap. Const. · ORT: Philaret Q274-281, Mogila I.84-85 · LUT: Ap VII-VIII, XIV, XXVIII; SA III.10 · REF: Institutes IV.1-5, Belgic 27-32 · BAP: NH, Abstract
- **CAT** (missing): Ignatius of Antioch, seven letters — *CCC896,1549*; Vatican I, Dei Filius + Pastor aeternus (1870) — *CCC891*; Vatican II, Lumen gentium (1964) — *CCC860-862,1555*; Cyprian, De unitate ecclesiae (both versions of ch. 4) — *m*; 1 Clement — *CCC861,1577*; Augustine, Against the Fundamental Epistle of Manichaeus (5.6) — *CCC119*; Hippolytus (attr.), Apostolic Tradition — *CCC1586*; Tertullian, De praescriptione haereticorum — *m*
- **ORT** (missing): Ignatius of Antioch, seven letters — *m*; Synod of Jerusalem 1672 / Confession of Dositheus — *m*; Cyprian, De unitate ecclesiae (both versions of ch. 4) — *m*; Encyclical of the Eastern Patriarchs (1848) — *m*; Canons of the ecumenical & local councils (Nicaea 6, Const. 3, Chalcedon 28, Laodicea 59-60…) — *Phil Q69-73*; Apostolic Canons — *m*
- **LUT** (missing): Augsburg Confession (1530) — *BoC:AC V, VII, XXVIII*; Treatise on the Power and Primacy of the Pope (1537) — *BoC:Tr*; Cyprian, Letters (63, 64, 67, 73-75; to Cornelius) — *BoC:Tr*; Jerome, Letter 146 to Evangelus — *BoC:Tr*; Augustine, Against the Letters of Petilian — *BoC:AC XXVIII*
- **REF** (missing): Westminster Confession + Shorter Catechism (1647) — *WCF-chapters(Creeds.json)*; Second Helvetic Confession (1566) — *2HC XVII-XVIII*; Cyprian, De unitate ecclesiae (both versions of ch. 4) — *2HC XVIII + Inst IV.1-2*; Augustine, On Baptism against the Donatists — *2HC XVIII (Donatists)*; Jerome, Commentary on Titus 1:5 — *2HC XVIII + Inst IV.3-5*
- **BAP** (missing): Second London Baptist Confession (1677/89) — *1689-chapters(Creeds.json)*; Baptist Faith & Message 2000 — *m*
- **ANG** (missing): Thirty-nine Articles (1571) — *m*; Hooker, Laws of Ecclesiastical Polity; Learned Discourse — *m*; Anglican Ordinal (1550/1662) — *m*; Leo XIII Apostolicae curae (1896) + Saepius officio (1897) — *m*

#### Priesthood / ordination (PR)
- Already in registry and cited: CAT: Aquinas, Augustine Tract. Jn 5.15 (CCC1584), Ap. Const. VIII · ORT: Philaret, Mogila, Hapgood (ordination), Ap. Const. · LUT: Ap XIII, SA III.10 · REF: Institutes IV.3-5, IV.19, Belgic 30-31
- **CAT** (missing): Council of Trent, decrees & canons (1545-63) — *CCC1582,1584*; Ignatius of Antioch, seven letters — *CCC1549,1554*; Vatican II, Lumen gentium (1964) — *CCC1555-1589*; 1 Clement — *CCC1577*; Hippolytus (attr.), Apostolic Tradition — *CCC1569,1586*; Leo XIII Apostolicae curae (1896) + Saepius officio (1897) — *m*; Roman Pontifical, ordination prayers — *CCC1541-1543,1586*; Chrysostom, On the Priesthood — *CCC1551*; Gregory Nazianzen, Oration 2 (flight; priesthood) — *CCC1564,1589*; Polycarp, To the Philippians — *CCC1570*; Innocent I, Letter to Decentius — *CCC1564*; Pius XII, Sacramentum ordinis (1947) — *CCC1573*
- **ORT** (missing): Synod of Jerusalem 1672 / Confession of Dositheus — *m*; Apostolic Canons — *m*; Chrysostom, On the Priesthood — *m*
- **LUT** (missing): Augsburg Confession (1530) — *BoC:AC V, XIV*; Treatise on the Power and Primacy of the Pope (1537) — *BoC:Tr*; Luther, To the Christian Nobility (1520) — *m*
- **REF** (missing): Westminster Confession + Shorter Catechism (1647) — *WCF-chapters(Creeds.json)*; Second Helvetic Confession (1566) — *2HC XVIII*; Cyprian, Letters (63, 64, 67, 73-75; to Cornelius) — *Inst IV.3-5*; Gregory the Great, Letters (to Eulogius, John the Faster, Serenus) — *Inst IV.4-5 (Gregory x11)*; Jerome, Commentary on Titus 1:5 — *Inst IV.3-5 (Jerome x8)*
- **BAP** (missing): Second London Baptist Confession (1677/89) — *1689-chapters(Creeds.json)*; Baptist Faith & Message 2000 — *m*
- **ANG** (missing): Thirty-nine Articles (1571) — *m*; Anglican Ordinal (1550/1662) — *m*; Leo XIII Apostolicae curae (1896) + Saepius officio (1897) — *m*

#### Confession / penance / indulgences (PE)
- Already in registry and cited: CAT: Cyprian De lapsis, Augustine Tract. Jn 12 (CCC1458) · ORT: Philaret, Mogila, Hapgood · LUT: Ap XI-XII, SA III.3, III.8 · REF: Institutes III.3-5, IV.19
- **CAT** (missing): Council of Trent, decrees & canons (1545-63) — *CCC1426-1472*; Lateran IV (1215), constitutions 1, 21 — *m*; Leo X, Exsurge Domine (1520) — *m*; Roman Catechism (Trent, 1566) — *CCC1431,1450,1468*; Tertullian, De paenitentia — *CCC1446*; Ambrose, Letters — *CCC1429*; Jerome, Commentary on Ecclesiastes — *CCC1456*; Paul VI, Indulgentiarum doctrina (1967) — *CCC1471-1478*; Shepherd of Hermas — *m*
- **ORT** (missing): Synod of Jerusalem 1672 / Confession of Dositheus — *m*; Basil, canonical letters (188, 199, 217) — *m*
- **LUT** (missing): Augsburg Confession (1530) — *BoC:AC XI, XII, XXV*; Luther, Small Catechism (1529) — *m*; Leo X, Exsurge Domine (1520) — *m*; Luther, 95 Theses — *m*; Gregory the Great, Homilies (Gospels, Ezekiel) — *BoC:Ap XII (Gregory on repentance)*; Chrysostom, homilies on repentance etc. — *BoC:Ap XII (Chrysostom)*
- **REF** (missing): Heidelberg Catechism (1563) — *m*; Westminster Confession + Shorter Catechism (1647) — *WCF-chapters(Creeds.json)*; Second Helvetic Confession (1566) — *m*; Chrysostom, homilies on repentance etc. — *Inst III.3-4 (Chrysostom x11)*; Peter Lombard, Sentences — *Inst III.4*
- **BAP** (missing): Second London Baptist Confession (1677/89) — *1689-chapters(Creeds.json)*
- **ANG** (missing): Book of Common Prayer — *m*

#### Predestination & free will (PD)
- Already in registry and cited: ORT: Mogila, Philaret, Damascene Exact Exp. II.29-30 · LUT: Ap XVIII, FC II, XI · REF: Institutes II.2-5, III.21-24, Belgic 14-16 · BAP: Abstract IV-V, NH · CAT: Augustine De peccatorum meritis
- **CAT** (missing): Council of Trent, decrees & canons (1545-63) — *CCC2005*; Augustine, Confessions — *CCC385*; Council of Orange II (529) — *CCC1037*; Augustine, On Grace and Free Will + On Nature and Grace — *CCC2001*; Augustine, Predestination of the Saints — *CCC92*; Innocent X, Cum occasione (1653, Jansenism) — *m*
- **ORT** (missing): Synod of Jerusalem 1672 / Confession of Dositheus — *J1672 (vs Lucaris)*; Chrysostom, homilies on repentance etc. — *Inst (Calvin quotes Chrysostom as opponent)*; Cyril Lucaris, Confession (1629) — *J1672*; John Cassian, Conference 13 — *m*
- **LUT** (missing): Augsburg Confession (1530) — *m*; Augustine, On Grace and Free Will + On Nature and Grace — *m*; Luther, Bondage of the Will — *m*; Erasmus, Diatribe on Free Will (1524) — *BoC:FC (Erasmus)*; Augustine, Against Julian — *BoC:FC-SD II*
- **REF** (missing): Westminster Confession + Shorter Catechism (1647) — *WCF-chapters(Creeds.json)*; Second Helvetic Confession (1566) — *2HC X*; Augustine, On Grace and Free Will + On Nature and Grace — *Inst II.2-5, III.21-24 (Augustine x73)*; Bernard of Clairvaux (sermons; De consideratione) — *Inst II.2-3*; Canons of Dort (1619) — *Dort-heads(Creeds.json)*; Peter Lombard, Sentences — *Inst II.2*; Augustine, Gift of Perseverance — *2HC X*; Remonstrance (1610) / Arminius — *m*
- **BAP** (missing): Second London Baptist Confession (1677/89) — *1689-chapters(Creeds.json)*; Baptist Faith & Message 2000 — *m*; Orthodox Creed (General Baptist 1678) — *m(free-church report)*
- **ANG** (missing): Thirty-nine Articles (1571) — *m*; Lambeth Articles (1595) — *m*

#### Trinity / Christology / filioque (TR)
- Already in registry and cited: all: Chalcedon Definition, Athanasius De incarnatione, Damascene Exact Exp. I · LUT: Catalog sources Theodoret Eranistes + Gelasius + Chrysostom Hom. Heb. (all three already in registry, verified in /testimonies/) · REF: Institutes I.13, Belgic 8-11
- **CAT** (missing): Lateran IV (1215), constitutions 1, 21 — *CCC253-254*; Gregory of Nyssa, Catechetical Oration — *CCC457*; Council of Florence, Laetentur caeli (1439) + Decree for the Greeks — *CCC246-248*; Constantinople III (681) incl. condemnation of Honorius — *CCC475*; Ephesus 431 + Cyril's 2nd/3rd Letters to Nestorius & 12 Anathemas — *CCC466*; Gregory Nazianzen, Oration 40 On Baptism — *CCC256*; Lyons II (1274), profession of Michael Palaeologus — *CCC248*; Nicene-Constantinopolitan Creed — *CCC242,245*; Toledo XI creed (675) — *CCC245-255*; Leo I, Quam laudabiliter (Ep. 15, 447) — *CCC247*; Fides Damasi — *CCC254*; Constantinople II (553) anathemas — *CCC253,258,468*; Athanasian Creed — *CCC266*; Augustine, On the Trinity — *CCC264*; Caesarius of Arles, Sermons — *CCC232*; Leo I, Tome (Ep. 28) — *m*
- **ORT** (missing): Gregory Palamas, Triads / homilies — *m*; Encyclical of the Eastern Patriarchs (1848) — *m*; Patriarchal Encyclical of 1895 (reply to Leo XIII) — *E1895 (filioque)*; Photius, Mystagogy of the Holy Spirit; Encyclical 866 — *E1895*; Ephesus 431 + Cyril's 2nd/3rd Letters to Nestorius & 12 Anathemas — *Phil Q242 (Ephesus can. 7)*; Mark of Ephesus, on purgatorial fire / Florence writings — *m*; Gregory Nazianzen, Theological Orations 27-31 — *m*
- **LUT** (missing): Augsburg Confession (1530) — *BoC:AC I, III*; Ephesus 431 + Cyril's 2nd/3rd Letters to Nestorius & 12 Anathemas — *BoC:Catalog*; Catalog of Testimonies (appendix to BoC) — *BoC:Catalog*; Athanasian Creed — *m (in BoC)*; Leo I, Tome (Ep. 28) — *BoC:Catalog*; Athanasius, Letter to Epictetus — *BoC:Catalog*
- **REF** (missing): Westminster Confession + Shorter Catechism (1647) — *WCF-chapters(Creeds.json)*; Second Helvetic Confession (1566) — *2HC III, XI*; Hilary, De Trinitate — *Inst I.13 (Hilary x5)*; Athanasian Creed — *2HC XI*; Tertullian, Against Praxeas — *Inst I.13 (Tertullian x5)*
- **BAP** (missing): Second London Baptist Confession (1677/89) — *1689-chapters(Creeds.json)*; Orthodox Creed (General Baptist 1678) — *m*
- **ANG** (missing): Thirty-nine Articles (1571) — *m*; Athanasian Creed — *m*

#### Eschatology (ES)
- Already in registry and cited: CAT: Irenaeus AH 4.18, 5.32 · ORT: Philaret, Mogila · LUT: Ap XVII · REF: Institutes III.25, Belgic 37 · BAP: NH, Abstract
- **CAT** (missing): Lateran IV (1215), constitutions 1, 21 — *CCC999*; Ignatius of Antioch, seven letters — *CCC1010-1011*; Augustine, Sermons (131, 186, 227, 272, 298…) — *CCC1039,1064*; Augustine, City of God — *m*; Cyril of Jerusalem, Catechetical Lectures 1-18 — *CCC1050*; Benedict XII, Benedictus Deus (1336) — *CCC1022-1023*; Lyons II (1274), profession of Michael Palaeologus — *CCC1059*; Tertullian, De resurrectione carnis — *CCC991,1015*; Anathemas against Origen (543/553) — *m*; Vatican II, Gaudium et spes — *CCC1006-1008,1048-1050*
- **ORT** (missing): Synod of Jerusalem 1672 / Confession of Dositheus — *m*; Mark of Ephesus, on purgatorial fire / Florence writings — *m*; Gregory of Nyssa, On the Soul and Resurrection — *m*
- **LUT** (missing): Augsburg Confession (1530) — *BoC:AC XVII*
- **REF** (missing): Westminster Confession + Shorter Catechism (1647) — *WCF-chapters(Creeds.json)*; Second Helvetic Confession (1566) — *m*
- **BAP** (missing): Second London Baptist Confession (1677/89) — *1689-chapters(Creeds.json)*; Baptist Faith & Message 2000 — *m*; Scofield Reference Bible notes (1909/1917) — *m*
### 2.4 Judgment: what to add first (my recommendation, ordered)
1. **Close the registry's own holes in traditions it already covers** (cheap, PD, EN ready today): Augsburg Confession, Small Catechism, Treatise on the Power and Primacy, Catalog of Testimonies (all bookofconcord.org/Triglot); Westminster Confession + Shorter Catechism; Heidelberg; Canons of Dort; Second Helvetic; 1689 LBC; Synod of Jerusalem 1672; Council of Trent; Vatican I; Roman Catechism. Without these, a doctrine page cannot open with "the tradition in its own words".
2. **The 1895 and 1848 Orthodox encyclicals** — the most efficient Orthodox texts: one document states the Orthodox position against Rome on filioque, papacy/infallibility, purgatory, immaculate conception, baptism mode, azymes (verified R5).
3. **The patristic "battleground" passages** — texts both sides quote, which is exactly what a neutral site should show side by side: Cyprian *De unitate* 4 (two versions), Ignatius, 1 Clement 42–44, Irenaeus (have), Eusebius HE, council canons (Nicaea 6, Constantinople 3, Chalcedon 28, Sardica, African Code) for the papacy page; Chrysostom *Judas* 1.6 (CCC 1375 = FC SD VII.76), Justin *1 Apol.* 66 (CCC 1355 = FC SD VII.39), Ambrose *De sacr.* IV, Augustine Sermon 272 / Tract. Jn 26 for the Eucharist; Augustine's anti-Pelagian set + Orange II + Bernard + Ambrosiaster for justification; Epiphanius *Panarion* 75 and 78–79, Jerome *Helvidius*/*Vigilantius*, Augustine *De cura*, Gregory *Dialogues* IV for Mary/purgatory/saints; Vincent, Basil *Spir.* 27, Augustine *C. ep. Man.* 5.6, Cyril Jer. *Cat.* 4 for Scripture & tradition; Athanasius *Festal 39*, Muratorian, Jerome's prologues, Laodicea 59–60, Carthage, Damasus for the canon.
4. **Catholic modern texts** (Vatican II, CCC, current Missal/Pontifical, Paul VI) — PERMISSION track (catholic-modern/councils-creeds drafted the requests); meanwhile quote short, commented passages and lean on the PD sources the CCC itself footnotes (R2 obs. 2).
5. **Orthodox mediaeval voices** that have no PD English: Mark of Ephesus (Petit 1920 Greek+French → own EN/ES), Photius *Mystagogy*, Palamas, Nilus Cabasilas *On the Primacy*; plus Lucaris' *Confession* (the text Jerusalem 1672 answers).

## 3. Creative alternatives and workarounds
1. **PD translations hidden inside PD confessional works.** The Triglot (1921, PD) translates every patristic passage the Lutheran confessions quote (e.g. FC SD VII.76 = Chrysostom *Judas* 1.6; FC SD VII.39 = Justin *1 Apol.* 66; Catalog = Athanasius, Cyril, Leo, Theodoret…); Calvin's *Institutes* in Allen 1813 (EN) and **Valera 1597 (ES, BNE CC BY 4.0, verified by protestant-magisterial)** translate the Augustine/Gregory/Cyprian/Jerome quotes Calvin uses; Tejada y Ramiro (ES) and NPNF14 (EN) translate the canons. For short passages that have no other PD English/Spanish (Chrysostom *Judas*, Ambrosiaster, Bernard), these give a legitimate PD rendering — labelled "as quoted in FC SD VII.76 (Triglot tr.)" — next to our own translation from the original. Caveat: they translate via Latin/German and sometimes abridge; never present them as the critical text.
2. **Use the CCC as an index, not as the text.** R2 shows that apart from Vatican II/Missal/Canon Law, the CCC's sources are PD (Trent, Florence, Lyons II, Benedictus Deus, Orange II, Fathers). A Catholic doctrine page can quote those PD sources in full and cite "CCC §n" as a pointer with a short quotation, which keeps the CCC within the USCCB 5,000-word / AR 1,000-words-per-quote limits analysed by catholic-modern.
3. **Same passage, both traditions** (Chrysostom *Judas* 1.6 in CCC 1375 and FC SD VII.76; Justin *1 Apol.* 66 in CCC 1355 and FC SD VII.39; Cyprian to Cornelius in Ap XXI and Tr; Jerome on bishops in Tr and 2HC XVIII vs. CCC's Ignatius) — a product feature, not just sourcing: the reader shows the Father's text once, with each tradition's reading attached. Data for this pairing is in `evidence.json`.
4. **Bilingual PD editions solve original + translation at once:** Metallinos 1896 (1895 Encyclical, Greek+English), Petit PO 15 (Mark of Ephesus, Greek+French), Kimmel 1850 (Greek+Latin Orthodox confessions), Tejada y Ramiro (Latin+Spanish councils), Ratramnus 1688 (Latin+English, TCP CC0).
5. **EEBO-TCP (CC0, hand-keyed)** also covers 1646 WCF (A96226), 1571 39 Articles (A72013), Gregory's *Dialogues* 1608 (A02208), *City of God* 1610 (A22641) — cleaner than OCR for those English texts (IDs from TCP.csv saved by overlooked-era; per-file CC0 headers not opened by me).
6. **Baptist pages need few non-Scripture sources** — verified that 1689/WCF proofs are Scripture-only (R6). The legitimate "historical" layer for Baptists is: Didache 7 (registry), Tertullian *De baptismo* 18, Gregory Naz. *Or.* 40, Hubmaier, Schleitheim, and PD Baptist theologians (Strong 1907 Gutenberg #45283, Gill, Carson 1831) — don't force patristic material onto them.

## 4. Blockers that remain (and what was tried)
- **Vatican II, CCC, current Roman Missal & Pontifical, *Mysterium fidei*, *Indulgentiarum doctrina*, *Credo of the People of God*, *Inter insigniores*, *Ordinatio sacerdotalis*, *Ut unum sint*** — © LEV/USCCB/ICEL; only permission or quotation (covered in depth by catholic-modern and councils-creeds; not redone).
- **BF&M 2000** — © SBC; permission or quotation (free-church).
- **JDDJ 1999, BEM 1982, Ravenna 2007** — ecumenical texts © LWF/WCC/Holy See (overlooked-era L1).
- **No PD English** (→ our own translation, labelled): Epiphanius *Panarion* (Williams ©), Chrysostom *Judas* (searched, none), Gregory of Nyssa *Hom. Song*, Athanasius *Letters to Serapion* (Shapland 1951 ©), Augustine *Against Julian*, *De vera religione*, Nicetas, Origen *Hom.* and *Comm. Romans*, Ambrosiaster, Mark of Ephesus, Photius *Mystagogy*, Palamas, Maximus, Theodore the Studite, Lucaris, Jeremias II (Mastrantonis ©), Erasmus *Diatribe*, Luther *Against the Heavenly Prophets* (LW ©).
- **No PD Spanish** for almost all Protestant confessions (AC, Small Catechism, Dort, 2HC, 1689 — all Spanish versions ©) — own translation or permission (protestant-magisterial, free-church).
- **Jurisdiction gaps**: US-PD-only 1919–1934 English translations (Easton 1934 *Apostolic Tradition*; Thompson/Srawley 1919 Ambrose; Vassall-Phillips 1917 Optatus) are not automatically PD in Spain/Argentina — translator death dates needed.

## 5. Verified by me vs. memory
VERIFIED (scripts/files in `samples/overlooked-doctrine/`): registry gaps (R1); all CCC counts and § numbers (R2, dataset `nossbigg/catechism-ccc-json` v0.0.2); every BoC citation with a line number (R3); Calvin chapter counts (R4); Philaret Q numbers, Jerusalem 1672 counts, 1895 Encyclical topics with line numbers (R5, on other agents' saved OCR); WCF/1689/Dort Scripture-only proofs and chapter titles, 2HC patristic citations by chapter (R6); Strong 1907 lines; archive.org existence/metadata of Ambrose 1919, Optatus 1917, PO 15 (Mark of Ephesus), Metallinos 1896; OCR samples of Ambrose 1919 and PO 15; bookofconcord.org Catalog of Testimonies page.
FROM OTHER AGENTS' REPORTS (cited, not re-verified): all licence facts for New Advent, CCEL, Wikisource, bookofconcord.org copyright page, vatican.va/LEV/USCCB terms, Vatican law CXCVII, Spanish PD editions (Zeballos, Díaz de Beyral, Camino y Orella, Cándido del Moral, Scío, Valera, Thomson, Aventrot, Tejada y Ramiro, López de Ayala), EEBO-TCP CC0.
MEMORY (unverified; marked `m` in the matrix): which confession article treats which doctrine for AC/Heidelberg/39 Articles/BF&M/Dositheus/1848; Orthodox citations of Mark of Ephesus, Photius, Palamas, Dormition homilies, Akathist, Synodikon, Studite; Lateran IV, Constance, Unam sanctam, Cum occasione, Lambeth Articles, Hubmaier, Scofield as cited sources; death dates of Petit (1927), Srawley, Thompson; Metallinos edition's translator identity.

## 6. Mechanical verification pass (URL + exactly what to check)
1. https://archive.org/details/stambroseonmyste00ambruoft — title-page verso: any renewal/© notice; then death years of T. Thompson and J. H. Srawley (Spain needs ≤1945, Argentina ≤1955).
2. https://archive.org/details/answerofgreatchu0000eust — who translated the English (Metallinos?) and death year; confirm the English is complete (all sections), and that the item is not "borrow only" in the web UI.
3. https://archive.org/details/patrologiaorient15pariuoft — confirm fasc. 1 publication year (1920) and that both Mark of Ephesus responses are complete; Petit's death year.
4. https://archive.org/details/theworkofstoptat00philuoft — Optatus 1917: Vassall-Phillips' death year; OCR quality of book II ch. 2–3 (cathedra Petri).
5. PARTLY DONE: https://bookofconcord.org/power-and-primacy/treatise-compiled-at-smalcald/ carries the Treatise with Triglot paragraph numbers (verified: §18 Jerome "Rome, or Eugubium…", §19 Gregory). Still check: /testimonies/ paragraph anchors, and that both fall under the site's Triglot PD statement on /copyright/.
6. https://bookofconcord.org/other-resources/sources-and-context/roman-confutation/ and /exsurge-domine/ — source and translator of these two (are they Reu 1930 / PD, or the site's own ©?).
7. DONE (verified on https://bookofconcord.org/defense/of-the-mass/, 2026-10-09): Ap XXIV.96 — "Epiphanius testifies that Aerius held that prayers for the dead are useless. With this he finds fault. Neither do we favor Aerius…" (the Lutheran position does not reject all prayer for the dead — relevant nuance for the purgatory page).
8. FC SD VIII.24 and SA I.4 (bookofconcord.org) — confirm the Marian wording ("ever virgin", "mother of God") quoted in the matrix as memory.
9. Calvin *Institutes*, Beveridge 1845 (archive.org) — for IV.6–7 and IV.17, list the exact patristic works cited (Allen omits titles).
10. https://www.catholiclibrary.org/ ("Fathers-Synchronized-EN") — only to confirm its translations are NOT reusable (licence/terms page); do not copy.
11. Camino y Orella, *Obras de San Cypriano* 1807 (HathiTrust ucm.532423481x) — which letters (63, 64, 67, 73–75, to Cornelius) and whether *De unitate* ch. 4 follows the "primacy" or "received" text.
12. Kimmel 1850 (archive.org monumentafideie00kimmgoog) — page range of Lucaris' Confession; OCR quality of the Latin column.
13. TCP files A96226 (WCF 1646), A72013 (39 Articles 1571), A02208 (Gregory *Dialogues* 1608) — open each XML and confirm the CC0 `<availability>` header.
14. DONE (verified in Creeds.json): WCF 25.6 and 1689 26.4 both say the Pope "is that Antichrist, that man of sin". Remaining check: the American-revised WCF (1788, used by OPC/PCA) changed ch. 25.6 (memory, unverified) — the edition we pick for the papacy page changes what the "Reformed confession" says; record the edition explicitly.
