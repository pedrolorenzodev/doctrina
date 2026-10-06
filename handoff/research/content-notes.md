# Eucharist pilot content: verification notes

File: `data/raw/eucharist.content.json` (status: draft, 2026-10-03). These are the claims that a human (ideally a reader from each tradition) must check before anything moves to "in-review". Conventions are in the file's `conventions` block: `verbatim:false` means paraphrase, `esIsOurs:true` means the Spanish is our translation and must be labelled as ours in the UI.

## Editions and licensing (affects every section)

- **Westminster**: quotes come from the OPC online text (American revision). The old registry points to a CCEL edition whose 29.8 reads "and bring judgment on themselves" instead of 1646 "to their own damnation". Align the registry with a 1646 text.
- **Heidelberg / Belgic**: English is Schaff, *Creeds of Christendom* vol. 3 (1877, PD). The CRC 2011 translation is copyrighted; do not mix them. Belgic Art. 35 English follows the 1619-revised text.
- **Dositheus**: verified against crivoice.org, which is Bratcher's modernized adaptation of Robertson (1899). Check wording against the 1899 print.
- **Mogila, Orthodox Confession**: online English text does not name its edition (probably 1762 / Overbury 1898). Confirm edition and PD status.
- **Trent (Spanish)**: López de Ayala via mercaba.org; first edition 1785 or 1787 (catalogs disagree). English is the Hanover transcription of Waterworth 1848, with its OCR typos (e.g. "contentions" for "contentious", XIII ch. 1).
- **Florence, Cantate Domino (1442)**: English is Tanner 1990 (copyrighted, fair-use excerpt). Find a PD or official text.
- **Marburg Articles art. 15**: quoted from a copyrighted modern translation (GHI Washington). Replace with a PD translation if possible.
- **Cabasilas, Commentary on the Divine Liturgy ch. 29–30**: no PD English edition; the citation is a paraphrase (`verbatim:false`).
- **New Advent Fathers**: ANF/NPNF texts "revised and edited by Kevin Knight" (modernized). Fine for drafting; compare with the printed volumes before publishing.
- **Scripture**: es = RV1909, en = BSB. Two cases where the BSB is interpretive: 1 Cor 11:27 ("guilty of sinning against the body and blood") — the objection texts use the literal "guilty of the body and blood"; flag this in the UI's compare-translations view. Spanish RV1909 keeps old accents (á, ó as single words); normalize or not, but consistently.
- **Hapgood Service Book (1922) / Neale & Littledale**: page numbers are from OCR scans on archive.org.

## Neutral sections (earliestWitnesses, timeline, glossary)

- All 12 earliest-witness quotes were checked against New Advent (ANF/NPNF). Spanish is ours.
- **Dates** are conventional and some are contested: Didache (c. 50–120), Ignatius (c. 107–110; minority later dating), Mystagogical Catecheses (c. 350–390; Cyril or John II of Jerusalem), Augustine *On Christian Doctrine* III (c. 396–397).
- **Justin, 1 Apol. 66**: the note says "by transmutation" (kata metabolēn) refers to digestion. That is the common reading, but some argue it bears on the elements; keep the note neutral.
- **Theodoret note** mentions Pope Gelasius I (*De duabus naturis*, c. 492–496, attribution debated) without a quote; add a sourced quote or drop the mention.
- **Timeline items stated from general knowledge, not fetched**: Nicaea II (787) on the Eucharist not being an "image" (Session 6); Berengar's oaths 1059/1079 (wording "substantialiter converti" for 1079); Lateran IV const. 1 "transsubstantiatis"; Wycliffe *De Eucharistia* c. 1379 and Constance Session 8 (1415); Florence decrees (1439); Zwingli's 1525 *Commentary*; Marburg "Hoc est corpus meum" chalk story (traditional account); Paschasius 831–833 (rev. 844) / Ratramnus c. 843; Consensus Tigurinus 1549; BEM §§5–18.
- **Glossary**: CCC §§1128, 1131, 1324, 1353, 1362–1364, 1374–1377, 1381, 1413; Trent VII can. 8 and XIII ch. 8, can. 1–3; FC Ep VII.7, 15, 16, 22, 41–42; WCF 27.1–4, 29.1–8; 2LBCF 28.1, 30.3–8; AC XIII.1–3; Calvin IV.17.10, 32 were checked or are well-known locators. Not fetched: Apology XIII.4 (absolution as sacrament), FC SD VII.75–85, Philaret Q284–285 wording (numbering checked), Aquinas ST III q.77 a.1.
- **Glossary "ex opere operato" (Orthodox)** is our characterization; no Orthodox normative text uses the term. Have an Orthodox reader check it.
- **Glossary "metousiosis"**: the claim that the word was coined in the late Byzantine period to render *transsubstantiatio* is standard but not sourced here.

## Catholic

- Lateran IV const. 1 is cited from memory (only in an authority-level source string). Verify.
- Authority level of the Thomist account of accidents: the theological note of Constance's condemnation of Wyclif art. 2 is debated (the 45 articles were censured globally). Have a Catholic theologian confirm the wording.
- Bread of the Presence typology (Ex 25:30; Lev 24:5–9) is modern apologetics (e.g. Pitre); patristic grounding not checked.
- Augustine, *Tractates on John* 27, is used for the Catholic side but is also a Reformed proof text; the UI should not present it as uncontested.
- `raisedBy` choices are editorial judgment.

## Orthodox

- The 2001 Holy See recognition of the Anaphora of Addai and Mari (PCPCU, *Guidelines for Admission to the Eucharist between the Chaldean Church and the Assyrian Church of the East*, 20 July 2001) is used in the epiclesis response; stated from knowledge, not fetched.
- Claim that Meletius Syrigos's revision of Mogila (Iași 1642) moved the moment of change to the epiclesis is not cited.
- Apostolic Constitutions VIII.13 says "children" (paidia), not explicitly infants.
- Practice details (St Basil's Liturgy about ten times a year, confession from age seven in Russian practice, fasting from midnight) vary by jurisdiction.
- Merge fix: the draft attributed "Be fruitful and multiply" to the Damascene's analogy; corrected to Gen 1:11 for the Damascene and Gen 1:28 for Cabasilas. Verify the Cabasilas chapter.

## Lutheran

- Luther, *Confession Concerning Christ's Supper* (1528): both citations are paraphrases; exact WA 26 / LW 37 pages, the purse and dove examples, and the mapping of the three modes to "local / definitive / repletive" need checking.
- Smalcald Articles III.6.5: the Triglotta reads "sophistical subtlety" (not the familiar "subtle sophistry"). Kept.
- Apology X locator: Triglotta running number ¶54 vs Kolb–Wengert X.1. Decide one numbering system for the site.
- Uncited: Brenz vs Chemnitz on ubiquity; Lutheran rejection of the word "consubstantiation" (secondary literature only); the Variata (1540) wording.
- Practice facts (LCMS 1995 resolution on every-Sunday communion; wine requirement; ELCA *Use of the Means of Grace* 1997; LCMS/WELS closed communion) come from search summaries, not fetched documents.

## Reformed

- Calvin locators: the sursum corda is IV.17.36 in Beveridge numbering (not .12 or .31). IV.17.32 "I rather feel than understand it" is Beveridge; "experience" is the copyrighted Battles wording.
- Augustine Ep. 187 not available on New Advent; replaced by *Tractates on John* 30.1 and 50.13.
- *Tractates on John* 26.18: NPNF brackets some words as doubtful; check the Latin (CCL 36).
- Calvin IV.17.33 in Beveridge cites "1 Cor. 11:7" (misprint for 11:27).
- Frequency, Geneva's quarterly practice, Scottish communion seasons, and wine/juice policy per denomination were not verified. PCA BCO 58 is PCA-specific.
- Merge fix: the draft said Ignatius and Justin both wrote against Docetists; corrected (only Ignatius did; Justin addressed pagans).

## Baptist / Evangelical

- Each response says which strand speaks (memorial / BF&M 2000, or Reformed Baptist / 1689). 23 of 24 quotes were checked word for word: 1689 Confession (original spelling, ccel.org), BF&M 2000 in English and the official Spanish, Abstract of Principles, New Hampshire 1833, Tertullian, Augustine (incl. *Contra Adimantum* 12.3 in Latin, PL 42), Theodoret.
- Gelasius, *De duabus naturis* §14: seen only in secondary sources; `verbatim:false`; section number unverified.
- Augustine, *Expositions on the Psalms*: locator "Ps. 98 (99), §8" mixes Vulgate and Hebrew numbering; pick one convention site-wide.
- The official Spanish BF&M renders "anticipate His second coming" as "anuncian su segunda venida".
- Uncited prose: Ratramnus (c. 843); the 12th-century first use of "transubstantiation"; Welch's pasteurized communion grape juice (1869).
- Practice statistics (2012 LifeWay survey of SBC pastors: 57% quarterly, 18% monthly, 1% weekly; open vs baptized-only invitations) come from search summaries, are SBC-only and 14 years old.
- 1 Cor 11:29: the response argues from the critical text ("the body"); RV1909 follows the Textus Receptus ("el cuerpo del Señor"), so the Spanish quote and the argument don't match exactly.
- All Spanish renderings of the 1689, Abstract, New Hampshire and the Fathers are ours.

## Videos

- 70 videos, all checked with YouTube oEmbed on 2026-10-03 (title and channel verbatim). 20 are in Spanish.
- Objection-level coverage is thin. **No video yet** for: `orth-epiclesis-vs-words`, `lut-is-means-signifies`, `lut-body-in-heaven-ubiquity`, `ref-real-absence`, `ref-unworthy-receive-body`, `bapt-early-church-realism`, `bapt-participation-and-judgment`. Mapping was strict: only titles that name the objection were mapped.
- Channel tradition needs checking: "Iglesia Bautista Reformada de Guadalajara" (Reformed Baptist) is used for both Reformed and Baptist videos; "Esteban Munilla Aguirre" (Orthodox?), "Dogma vs Reforma", "Soy Luterano", "De Fe Luterana" and "Jose Luis La Torre-Cuadros" are small channels whose affiliation was not confirmed. Dropped: Dr Robert M. Haddad (Catholic-leaning, was mis-tagged as Reformed).
- Shameless Popery, "Does This Verse Disprove the Eucharist?" is probably about John 6:63, but the title doesn't say so; it is tagged `doctrine`.
- "Hosanna Christian Fellowship of Bellflower" is Mike Winger's former church channel. Confirm it before crediting him.
