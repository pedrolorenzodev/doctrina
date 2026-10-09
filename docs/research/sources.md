# Sources: how to get every text the site needs, legitimately (es/en)

_Research run of 2026-10-09 (overnight, agent-led, Pedro asleep). Research, not legal advice. Detailed per-area reports with evidence URLs are in `docs/research/sources/`; this file is the synthesis. Anything marked (memory) or (snippet) was not verified on a primary page._

**How it was done.** 14 research agents (one per area) + Sonnet verifiers on each area's key claims, then a completeness critic, then targeted rounds for the gaps (medieval/early-modern, Spanish gaps, rites and hymnody, Latin-American copyright, lexicons, versification, registry and dataset audits). Licences were read on the actual licence/terms pages; feasibility was tested hands-on (downloads, OCR with Tesseract on real page images, renewal-database queries). No accounts, no logins, no emails sent, no paywalls touched. Samples, OCR tests and scripts are outside the repo in `~/Desktop/dev/doctrina-research-2026-10-09/`.

**Interruptions.** At ~03:00 the organisation's spend limit stopped the last five agents; after the limit reset they were resumed with their context and all finished. The web-search quota (200) ran out mid-run, so late agents searched through catalog APIs and a browser instead of forums. Not run (to save usage): the mechanical verification of the orthodox, spanish-pd and aggregators-legal reports (the critic covered their high-stakes claims).

## 1. The answer in one screen

- **Almost nothing is blocked outright.** Every hard wall is a *permission* track: the Holy See (CCC, Compendium, Pius XII → today, Vatican II, CIC 1983, current Missal), modern ecumenical texts (JDDJ, BEM, ARCIC…), BF&M 2000, modern Bibles, a few modern critical editions (Melito, Palamas' *Triads*, Symeon).
- **English is mostly READY or WORK** from public-domain prints (ANF/NPNF, Schaff, Triglot, Waterworth, Robertson, EEBO-TCP…), rebuilt from scans.
- **Spanish is mostly our own translation** from PD originals, except a valuable set of PD Spanish books worth OCR: Torres Amat 1894 Bible (with deuterocanon), López de Ayala's Trent (1785), Vatican I (Goyena 1880), Zorita's Roman Catechism (1819), Astete, the Westminster Confession (Monterrey 1880), Valera's *Institución* (1597, BNE CC BY), *Ciudad de Dios* (Díaz de Beyral, 1893), Cyprian (1807), the *Reformistas Antiguos Españoles* and the Spanish mystics.
- **The binding constraints are labour and law, not availability**: OCR + proofreading + translation review; Spain's life+80 rule for translators who died before 1987; US URAA (foreign books 1931–77 protected 95 years from publication); an unresolved Argentine levy on public-domain works (see §3).
- **The per-verse patristic datasets are only 45.5 % publishable** as PD translations once filtered (the rest is © modern translations, ACCS-style excerpts, machine translations or broken links): see "Patristic commentary per verse" below.
- **Urgent, in our own repo**: 21 of the 44 registry entries cite New Advent as the edition, 2 cite CCEL, the Trent quotes come from Hanover (non-commercial), *Cantate Domino* from Tanner (©), Cabasilas from Hussey–McNulty 1960 (©). All must be re-sourced to dated print scans. **Audited quote by quote** (`sources/registry-audit.md`): all 38 New Advent-sourced quotes match New Advent exactly, and 13 of them carry its modernised edits ("saith" → "says", "ye" → "you") instead of the 1885–1900 print → they were copied from New Advent; the 5 Trent quotes carry Hanover's typing artefacts; *Cantate Domino* is Tanner's ©; Marburg is the © GHDI translation (Jacobs 1883 is the PD alternative); Cabasilas and Luther 1528 are paraphrases. Fine: the 20 Book of Concord quotes match the Triglot scan, and Calvin, Belgic, 1689, Mogila, Philaret, Hapgood match PD prints (only the URL needs changing). In `john6`, 5 passages labelled PD are modern translations (si-33366, 33393, 33397, 33416, 33430) and should be withheld like the other 14. 8 registry entries have wrong years or translators (e.g. Didache = Riddle 1886).

## 2. Ground rules learned (apply to every text)

1. **A text is publishable in full only if it is free in the US (hosting), Spain and Argentina at once** (and, if they are target markets, Mexico and the rest of Latin America: see `sources/legal-gaps.md`).
   - US: published before 1931 → PD. US works 1931–63 → PD only if the copyright was not renewed (check Stanford Renewal DB / NYPL CC0 renewal data / CCE scans; a "not found" is not proof). **Foreign works 1931–77 → 95 years from publication (URAA), renewal irrelevant** — this blocks most 20th-c. Spanish translations in the US.
   - Spain: life+80 for authors who died before 7 Dec 1987 → a translator must have died **in 1945 or earlier**. Anonymous works: 70 years from publication.
   - Argentina: life+70 → translator died **in 1955 or earlier**. Our own new translation of a PD original is ours (Ley 11.723 art. 24).
   - Rule of the shorter term (Spain art. 199.4, Argentina art. 15): a US-PD **pre-1931** US translation is also free in Spain/Argentina. For 1931–63 unrenewed US works it is likely but needs a lawyer.
2. **Translations have their own copyright**: the translator's death date matters, not the Father's.
3. **Scan libraries' terms are contract, not copyright** → always do **our own OCR** from page images; never re-host their images or OCR.
   - HathiTrust: "There are no restrictions on use of text transcribed from the images" (Google-digitized items: Google *requests* no commercial re-hosting of its images/OCR).
   - **BNE (Biblioteca Nacional de España): PD scans are CC BY 4.0, commercial use OK** with the credit line "Imágenes procedentes de los fondos de la Biblioteca Nacional de España". The best Spanish source.
   - **Gallica** charges for commercial reuse → avoid Gallica-only sources.
   - **Biblioteca Virtual Miguel de Cervantes**: its transcriptions are protected (25-year editorial right) and personal-use only → finding aid only.
4. **Never ingest from**: New Advent (claims © on its "revised and edited" text), CCEL (asks permission for commercial use; © on its XML), Hanover Historical Texts (non-commercial), Corpus Corporum (non-commercial downloads), Augustinus.it (© Città Nuova; forbids even deep links), Documenta Catholica Omnia (non-profit wording, unknown provenance), user uploads with fake dates on archive.org/Scribd (Ruiz Bueno, Ciudad Nueva, Ramírez Torres), "ready" digital Torres Amat texts (at least one is a modern © "actualizada" edition). **Licence badges on Hugging Face/GitHub are not evidence** (a CCC dump labelled MIT; Creeds.json labels the © 2011 CRC Belgic "Public Domain").
5. **Good open sources**: Wikisource (legally usable, CC BY-SA on edits; but many en.wikisource ANF/NPNF pages are unproofread CCEL imports → collate against scans), Project Gutenberg (strip the PG name), **EEBO-TCP / Evans-TCP (CC0, hand-keyed, everything printed in English before 1700)**, Roger Pearse's tertullian.org "Additional Fathers" (PD-dedicated by him — still check each translator's date: Hallock's Aphrahat is not PD in Spain/Argentina), Open Greek and Latin (CC BY-SA), Open Greek Corpus (CC BY), Digital Syriac Corpus (CC BY), Coptic SCRIPTORIUM (CC BY), STEPBible (CC BY), MACULA (CC BY minus UBS fields), eBible.org (per edition).
6. **Share-alike**: translating *from* a CC BY-SA file (e.g. First1KGreek TEI) makes our translation an adaptation → CC BY-SA. Translating from the underlying PD print (Migne, pre-1931 editions) leaves us free. Decision for Pedro (§6).
7. **Holy See**: Vatican law CXCVII (2017) art. 5 §4 counts 70 years from publication *or from the author's death when the author is named*; older acts fall under the frozen 1960 Italian regime → Pius XI free; Pius XII free at source 1 Jan 2029 (US 2039–46); Vatican II 2049 at source (US 2059–61), not 2034. LEV claims all rights worldwide; it has granted web permissions before (papalencyclicals.net). vatican.va's terms even forbid deep links without permission.
8. **Quotation as a bridge** while permissions are pending: Argentina art. 10 (up to 1,000 words per quote, didactic/critical, only what is indispensable); Spain art. 32 (weak fit for a paid site); USCCB allows < 5,000 words of the US English CCC with notice. Recommendation from the reports: ≤ ~300 words per quote, only passages the page comments on, full citation + © notice.
9. **OCR is solved for our purposes** (hands-on tests): 18th–19th-c. Spanish print ≈ 1–2 % character error with Tesseract `spa+spa_old` after thresholding; 16th-c. long-s print ≈ 4 % (archive.org's own OCR: 12 %); Fraktur German near-perfect with `frk`; 19th-c. Greek ≈ 93–98 % with `grc` (systematic errors, lexicon-fixable); column-crop for bilingual/parallel books. Pipeline: page images → Tesseract → LLM-assisted correction against the image → verse/section count validation → human spot check.

## 3. Risks Pedro should know about

- **Argentina "dominio público pagante"** (Fondo Nacional de las Artes): the text in force is **Res. 662/2022** (it replaced the revoked Res. 625/2022): making a PD literary work available in the digital environment costs 3 "módulos" per work per year (ARS 40,000 each → **ARS 120,000 per work per year**; no later change found). It reaches payers "domiciliada o no en el país" for works commercialised in Argentina, card issuers are collection agents, and it **explicitly covers derivative works, translations included — so our own translations of PD originals are probably not exempt** (this corrects `sources/spanish-pd.md`). No enforcement against any website found. Uruguay and Bolivia have similar levies on the books. Lawyer questions in `sources/legal-gaps.md` §11.
- **US URAA** turns many "obviously free" 20th-c. foreign texts into protected ones in the US (Straubinger until ~2039–47 even though Argentina frees it in 2027; Jünemann's Spanish Septuagint until 2047; Mingana's Theodore until 2028/29).
- **Translator death dates** decide Spain/Argentina for ~20 key texts and are unverified for many (list in `sources/critic.md` §2.5).
- **"No renewal found"** results back about ten US translations (Schroeder's councils and Trent, Outler's *Confessions*, the Rudder 1957, BF&M 1963, Confraternity NT 1941…). A database search can't prove a negative; check the CCE renewal volumes page by page before relying on them.

## 4. Recommended path per category

Verdicts: READY (usable now) · WORK (legal, needs OCR/cleanup/translation) · PERMISSION · BLOCKED. Full tables per work in each report.

### Bible (`sources/bible-66.md`, `sources/deutero-orthodox.md`)
| Slot | Spanish | English | Original / data |
|---|---|---|---|
| Default modern, 66 books | **Palabra de Dios para ti – Biblia Latinoamericana Textual** (eBible `spapddpt`, **CC BY 4.0**, literal from NA27/BHS) — new find | **BSB** (PD) | TAHOT/TAGNT (CC BY) spine; **MACULA Greek/Hebrew** (CC BY; drop the UBS-licensed `@ln`/`@domain`/SDBH fields); TFLSJ full LSJ (CC BY); Abbott-Smith (PD), Dodson (CC0), BDB (PD); SBLGNT now CC BY; Byzantine RP2018, Antoniades (Patriarchal text), Tischendorf, WH, N1904 all PD |
| Classic Protestant | RV1909 (PD); RV1865 (PD/CC0) | KJV | |
| Catholic with deuterocanon | **Torres Amat, Barcelona 1894** (archive.org, clean OCR, Vulgate numbering) → our own edition (WORK M). Stopgap: Biblia libre para el mundo/Latinoamericano (PD drafts translated from the WEB) | DRA 1899; WEB Catholic (PD) | Clementine Vulgate (PD) |
| Anglican / Apocrypha | Reina 1569 / Valera 1602 apocrypha (PD scans, OCR) | **Revised Version 1895 with Apocrypha** (PD) | |
| Orthodox | none PD (Jünemann's LXX: US-protected to 2047 → permission) | Brenton LXX (PD) | **Swete LXX via First1KGreek (CC BY-SA)** + morphology (CC BY-SA) avoids Rahlfs/CCAT; Hebrew Ben Sira (`bensira-xml`, CC BY-SA); Ge'ez via Beta maṣāḥǝft (licence to confirm) |
- Gaps: no modern Catholic Spanish Bible under an open licence (the permission-path task in `sources/legal-gaps.md` was cut off; rights holders: BAC, Desclée, Verbo Divino, San Pablo, CEA).
- **Versification, tested on the real files** (`sources/versification.md`): DRA vs KJV differ in 217 of 1,189 chapters (139 are Psalms; the rest the usual Vulgate cases: John 6 shifts after 6:51, Esther, Daniel 3/13/14); STEPBible TVTMS maps DRA → KJV almost completely (same-number matching would misalign ~90 % of Psalm verses). **Trap:** eBible's RV1909 matches KJV counts only because 18 empty verses were padded; 10 chapters are really misaligned (Num 13 and 30, 1 Sam 24, 2 Chr 33, Job 39–40, Hos 12, Jon 2) and TVTMS fixes only one → per-edition checks. eng-web-c lacks Genesis, Esther and Daniel (use engwebu for the English deuterocanon); Brenton's Greek file has duplicate keys and merges Ezra–Nehemiah. Recommended ids: OSIS in the TVTMS/KJV pivot versification + a static native→canonical table per edition (≈ 2–3 days for the parser, then 0.5–1 day per edition).

### Church Fathers
- **Greek** (`sources/greek-fathers.md`): originals from First1KGreek/Perseus/PTA (CC BY-SA) and **Open Greek Corpus** (~350 patristic works OCR'd from Migne PG, CC BY) + own OCR of Migne for gaps. English: ANF/NPNF rebuilt from scans (PD everywhere), Project Gutenberg's *Ante-Nicene Christian Library* volumes (double-proofread), Lightfoot 1891 for the Apostolic Fathers (Lake's Loeb is free in Spain only from 2027). Spanish: almost no PD (Scío's *Sacerdocio* 1773, martyr acts, some homilies) → own translation; two undigitised PD Spanish sets (Caminero 1878–79, Segalá–Parpal 1916) could be bought and scanned. BLOCKED: Melito's *Peri Pascha*, Didymus on Zechariah, Palamas' *Triads*, Symeon (modern critical editions) → quotation + permission.
- **Latin** (`sources/latin-fathers.md`): originals from Open Greek and Latin CSEL + PL (CC BY-SA; Corpus Corporum is NC). English: NPNF/ANF scans; Tertullian Project. Spanish PD to OCR: *Ciudad de Dios* (1893, HathiTrust, near-perfect OCR), *Confesiones* (Zeballos 1781/93), Cyprian (1807, incl. *De lapsis*, *De unitate*), Jerome's letters, Gregory's *Pastoral* (1769, free rendering), Vincent's *Conmonitorio* (1784). Nothing blocked.
- **Syriac, Coptic, Ethiopic, Armenian** (`sources/oriental-fathers.md`): Digital Syriac Corpus (CC BY 4.0: Aphrahat, Ephrem, Narsai, Jacob of Serugh, Isaac of Nineveh…), Coptic SCRIPTORIUM (CC BY); PD English (Budge, Wensinck, Brightman; Connolly free in Spain 2029). Spanish: own translation.

### Patristic commentary per verse (`sources/dataset-audit.md`)
The two datasets behind the "what the Fathers wrote on this verse" feature are much less clean than assumed:
- **SermonIndex** (68,240 passages) has no translation/series field; 97.5 % of it matches **HistoricalChristianFaith (HCF)** by text, so provenance must come from HCF.
- HCF calls everything public domain, which is false in places: © modern translations (Litteral/Consolamini, Archer 1958, Ward, Hilary CUA 2012, Chadwick 1954, Outler 1955: 7 %), ACCS-style passages with no URL (20 %, treat as ©), **its own ChatGPT/Claude machine translations of Latin/Greek (18.5 %)**, and 8.3 % whose link points to a file that doesn't contain the quote.
- **Allow-list rule** (use HCF directly): source URL present + quote found verbatim in the linked file + series on the PD list (ANF, NPNF incl. Oxford Library of the Fathers, Catena Aurea 1841–45, Pusey, Payne Smith, translators ≤ 1930) + author within the patristic cutoff → **31,046 passages (45.5 %)**. Adding HCF's machine translations as a labelled "unreviewed" layer → 64 % (Pedro's call).
- Launch-passage coverage after the rule: John 6: 397 of 472; Matthew 16: 98; Luke 1: 300; but **Romans 3–5 only 145 of 478 and James 2 only 8 of 95** (justification is thin), 1 Cor 3:15 only 1 (purgatory). SermonIndex has no deuterocanon; HCF has 16 in-cutoff rows on 2 Maccabees 12.

### Councils and creeds (`sources/councils-creeds.md`)
- English READY: NPNF vol. 14 (councils 1–7 + local canons), Schaff's *Creeds* vol. 2, **Waterworth 1848 / Buckley 1851 Trent** (replace the Hanover quotes), Schroeder's *Disciplinary Decrees* 1937 (no renewal found).
- Spanish WORK: **López de Ayala's Trent (1785)**, **Vatican I (Goyena, *Digesto eclesiástico argentino* 1880; Bravo y Tudela 1871)**, Tejada y Ramiro's canons (Latin–Spanish). *Los sacrosantos concilios* (1793) is a paraphrase → not usable as a text.
- Own translation (short Latin/Greek): Orange 529, Florence decrees, Photian council, Palamite synods, the 1848 and 1872 Orthodox texts.
- PERMISSION: Vatican II (LEV). Denzinger translations are ©: use primary texts + DH numbers.

### Catholic modern (`sources/catholic-modern.md`)
- READY/WORK: Roman Catechism (McHugh–Callan 1923 EN; **Zorita 1819 Latin–Spanish**, ~99 % OCR), **Astete** (es.wikisource), Ripalda, Baltimore Catechism (Gutenberg), Pius X catechism (Spanish 1914), encyclicals up to 1930 (Latin from AAS scans + PD or own translations), CIC 1917, Tridentine Missal (PD English 1916/1924), Möhler's *Symbolism*, Bossuet.
- PERMISSION: CCC (EN: USCCB < 5,000 words with notice; beyond → licence + royalty; USCCB has refused small web projects; LEV holds worldwide rights), Compendium (best first licence target; FlockNote precedent), Pius XII → today, CIC 1983, current Missal. Drafts to LEV/USCCB/CEE in `permission-drafts.md`.

### Orthodox (`sources/orthodox.md`)
- English READY: Dositheus (Robertson 1899), Mogila (Overbeck 1898), Philaret (Blackmore 1845 / Schaff), Hapgood's Service Book (1906/1922), Robertson's bilingual Divine Liturgies (1894), the 1895 Patriarchal Encyclical (1896).
- Greek: **Michalcescu 1904** — one clean PD source for all the symbolic books + the Chrysostom liturgy (Tesseract ≈ 95–98 %).
- Spanish: no PD Orthodox Spanish text at all → own translation (Divine Liturgy, Dositheus, Mogila, encyclicals are short) or permission (Cantauque monastery, OCMC Guatemala, Monte Casino Philokalia). The PD Greek Philokalia (Athens 1893) gives back-door access to parts of Palamas and Symeon.

### Lutheran, Reformed, Anglican (`sources/protestant-magisterial.md`)
- **Lutheran EN READY: Triglot 1921 via bookofconcord.org** ("may be freely copied", verified). Spanish: no PD → own translation from Latin/German, or clarify the Misión Luterana de Puerto Rico translation's licence (see `sources/spanish-gaps.md`). Luther 1528 *Confession Concerning Christ's Supper*: English only in LW 37 (renewed) → own translation from WA 26.
- **Reformed**: Schaff vol. 3 (Latin/French/German originals + PD English) via column-crop OCR; Westminster (PD; **Spanish Monterrey 1880**); **Calvin's *Institución*, Valera 1597 (BNE, CC BY 4.0)** + Usoz 1858; Heidelberg Spanish (Aventrot via a 19th-c. reprint, likely usable); Belgic/Dort/Second Helvetic Spanish → own. Avoid Creeds.json/CRC 2011 texts.
- **Anglican**: EEBO-TCP (CC0) for Cranmer, Jewel, Hooker, Homilies; 39 Articles (Schaff); Spanish BCP 1715/1864 (BNE CC BY). UK caveat: BCP 1662 under Crown rights.
- Spanish Reformation originals (no translation needed): Valera's *Dos tratados* (papacy, Mass), *Reformistas Antiguos Españoles* (Usoz & Wiffen, 20 vols, PD).

### Baptist and free church (`sources/free-church.md`)
- English READY: **McGlothlin 1911** (one PD backbone for Baptist + early Anabaptist confessions), 1689 (Apache-licensed YAML with proof texts), BF&M 1925 and 1963 (1963 not renewed), Menno Simons 1871, Martyrs Mirror, AG 1916, Wesley, Spurgeon.
- Spanish: 1883 Mexican Methodist Articles (PD); 1689 → own translation, 40–65 % seedable from the PD Spanish Westminster; or ask Peregrino.
- PERMISSION: BF&M 2000 (EN + official ES), current AG Statement, Lausanne Covenant / Manila, Chicago Statement Exposition. Lausanne's Cape Town Commitment (EN) and the Chicago Statement articles already allow reproduction with credit.

### Medieval and early modern (`sources/medieval-early-modern.md`)
- **Aquinas, *Summa***: English Dominican translation is US-PD (the 1947 Benziger renewals cover only charts, indices and appendices) → Project Gutenberg #17611, #17897, #18755, #19950 (Parts I–III); the Supplement (suffrages, prayers to saints, purgatory) from the 1921–22 London volumes on archive.org. Spain: depends on the translator attribution (Shapcote d. 1947?) — check. Verified: the 1947–48 renewals (R612635, R612636, R624562) claim only charts, indices and appendices; Gutenberg #17611/#17897/#18755/#19950 = Parts I, I-II, II-II, III; the Supplement and its purgatory appendices are in archive.org `summatheologicao36thom`/`37thom` (1921–22). **Spanish: the 1880–83 BNE translation (Madrid, Moya y Plaza, 5 vols) is complete incl. the Supplement and the purgatory appendices, with a clean ABBYY text layer, "CC BY 4.0 o equivalente"** (served page by page behind Cloudflare; ask info.repro@bne.es for bulk files). Latin: Leonine scans (Corpus Thomisticum is all rights reserved; Corpus Corporum NC); the Leonine OCR also yields Cajetan's commentary.
- **EEBO-TCP (CC0, keyed text only, not the images)** has Bossuet's *Exposition* (1672) and *Communion under both species* (1685), Pascal's *Provincial Letters* (1657), Bellarmine's catechism and *Ample declaration*, Canisius' *Summe*, Sarpi's *History of the Council of Trent* (1629), Francis de Sales, the Roman Catechism (1687), Hosius (1567).
- **Spanish PD**: Pascal (Montejo 1846), Bossuet's *Exposición* (1755), Bellarmine's *Declaración copiosa* (1618/1889), Kempis (Nieremberg).
- Hugh of St Victor, *De sacramentis* (Deferrari 1951): HathiTrust "pd" (a US determination), but the verso carries a 1951 notice → check the 1978–79 renewal records; Spain/Argentina via the shorter-term rule (lawyer).
- Corpus Thomisticum: "Iura omnia asservantur", no reuse licence → don't copy its Latin.
- Renewed (avoid): Pegis' *Contra Gentiles* (1955–57), Winter's Erasmus (1961).
- No PD English or Spanish: Lombard, Bonaventure, Scotus, Paschasius, Lanfranc, Cano, Suárez, Erasmus' *De libero arbitrio*, Bellarmine's *Controversiae* → own translation from the PD Latin. (A Boyne Archives AI translation of Cano exists: draft quality only.)

### Rites and hymnody (`sources/rites-hymnody.md`)
Every rite and hymn the launch doctrines will likely quote has a pre-1931 English version whose translator died before 1945 (free in US, Spain and Argentina). Spanish is mostly our own translation.
- **Catholic**: Latin Rituale/Pontificale/Breviary PD. English READY: **Lynch, *The Rite of Ordination* (1912, Latin/English)** with the full ordination prayer; McMahon's episcopal consecration (1910); *The Sacristy Manual* (1905: baptism, burial, prayers for the dead); **Bute's Roman Breviary (1879/1908)** (hymns by named Victorian translators: attribute each). Gap: the sacramental absolution formula in PD English. Weller's *Roman Ritual* (1950–52): no renewal found.
- **Orthodox**: Hapgood (1906) has baptism, chrismation, confession, ordinations and requiem; the **Akathist** in Woodward–Birkbeck (1917, Greek facing).
- **Hymns**: Caswall (1851) for *Pange lingua*, *Lauda Sion*, *Adoro te*, *Salve Regina*, *Ave maris stella* (check our wording against the 1851 print; later hymnals altered it); Luther's chorales (Massie, Bacon, Winkworth). Wesley's *Hymns on the Lord's Supper* (1745): text PD, scan to confirm. The *Sub tuum* papyrus photo is "All rights reserved" (Manchester): quote the text, link out for the image.
- **Lutheran**: *Formula missae*, *Taufbüchlein*, *Deutsche Messe* READY in German/Latin (Weimar edition); English Philadelphia ed. vol. 6 (1932; no renewal found) is free in the US and Argentina, but Strodach died 1947 → Spain only from 1 Jan 2028; our own translation until then.
- **Reformed**: Calvin's Genevan forms (Beveridge 1849) and the Dutch Reformed forms (RCA *Liturgy* 1873) READY in English. **Spanish: *Libro de fórmulas* of the Iglesia Presbiteriana en México (El Faro, 1905)** with baptism, Supper, ordination and a Directory for worship (WORK, OCR). Aventrot's 1628 Spanish forms: no scan; an 1885 Madrid reprint is catalogued at the Ateneo de Madrid, not digitised → reproduction request.
- **Anglican**: 1549/1552 Ordinals (Parker Society 1844) READY outside the UK; Spanish Ordinal inside Alvarado's *Liturgia Ynglesa* (1715) → WORK.
- **Spanish hymns**: Cabrera's 1878 hymnal (incl. *Castillo fuerte*), Lope de Vega's and García's (1862) *Ave maris stella*; other 19th-c. hymnals need each translator's death date checked.

### Spanish gaps, round 2 (`sources/spanish-gaps.md`)
- **Casiodoro de Reina's *Confessión de fe christiana* unblocked**: the 1601 Spanish–German edition (Kassel) digitised by ULB Halle under Public Domain Mark → WORK (S–M; long-s OCR ≈ 85–90 % before correction).
- **Calvin's Geneva Catechism in Spanish** (London 1596, Valera's revision) on archive.org → re-OCR (archive.org used the wrong language). **Chrysostom's *Sacerdocio*** (Scío 1776) on BNE (CC BY).
- **Wesley's 52 Standard Sermons in Spanish exist** (Nashville 1891, tr. Primitivo A. Rodríguez; reissued 1920): US-PD, held by US libraries, not scanned → scan request. Round 1 thought none existed.
- **Spanish Heidelberg**: the only 1628 Aventrot copy is at Leiden (1149 H 18, not scanned); use the 1885 Madrid reprint and ask Leiden for a scan to collate.
- **Lutheran**: the Misión Luterana de Puerto Rico page only says the Book of Concord text is "Dominio Público, traducido por un equipo de voluntarios" next to an unversioned CC BY logo and "©2025" → ask (contact form; message drafted in the report). Pre-1931 Spanish Small Catechisms exist in print (Swensson c. 1903–04, Cobián 1930) but are not digitised → ask a holding library. No pre-1931 Spanish Augsburg Confession exists.
- **Orthodox**: Izrastzoff's Chrysostom liturgy is from 1945 → PD in Argentina, protected in Spain to 2033 and likely in the US to 2040 → not usable.
- **Still our own translation**: Augsburg and Formula of Concord, Belgic, Dort, Second Helvetic, Westminster Larger Catechism (a mis-scanned 1896 Princeton Spanish *Constitución* may contain it → rescan request), Baptist confessions, Orthodox liturgy and catechisms, Didache, Ignatius, Justin's *Dialogue*, Cyril's *Mystagogies*.
- Translator death dates for the US mission prints (Rodríguez, Swensson, Cobián) not found → Spain/Argentina status open.
- **Creative route that recurs**: many pre-1931 Spanish mission translations exist in print but not online → library reproduction requests or buying a copy and scanning it.

### Other Spanish-speaking countries, Vatican terms, lexicons, Catholic Spanish Bible (`sources/legal-gaps.md`)
- **Terms** (primary statutes via WIPO Lex / official gazettes): life+70 in Chile, Peru, Uruguay, Paraguay, Ecuador, El Salvador, Nicaragua, Costa Rica, Dominican Republic; Colombia life+80; Panama life+80 for deaths before 1994; Guatemala and Honduras life+75 (they apply the shorter foreign term); Venezuela life+60; Bolivia and Cuba life+50; Puerto Rico = US law.
- **Mexico is life+100**, but the extensions weren't retroactive: a translator who died **≤ 1951** is free there (secondary source; lawyer). Mexico, Peru and Uruguay don't apply the rule of the shorter term, so US-unrenewed 1931–63 translations may still be protected there. Mexico: anonymous works are free while the author is unknown.
- **Practical line: a translator who died ≤ 1945 is safe in every country checked today.** From 1 Jan 2033 Mexico binds: deaths ≥ 1952 stay protected until death year + 101.
- Uruguay and Bolivia also have "dominio público pagante" levies on the books (collection practice not found).
- **Holy See** (frozen Italian law 1960–2011, Pope named as author, life+50 — the most defensible reading): Pius XI encyclicals free at source and in the US (zero-day margin: term ended 31 Dec 1995); **Pius XII free at source 1 Jan 2029, in the US 2039–46; Vatican II 2049 at source, 2059–61 in the US.** An alternative reading (state administration, 20 years) would make all of it US-PD now — don't plan on it.
- **Lexicons**: READY Whitaker's Words (any use), LatinCy (MIT), Lewis & Short via Perseus (CC BY-SA), Coptic Dictionary Online (CC BY-SA), Payne Smith 1903 (PD). WORK: **de Miguel 1867 Latin–Spanish dictionary (PD, OCR) — the best source of Spanish definitions**. PERMISSION: SEDRA (Syriac). Avoid: Gaffiot 2016 (NC-ND), LEMLAT and the CIRCSE WordNet (NC). Crum's Coptic dictionary (1939) is probably US-protected to 2035.
- **Modern Catholic Spanish Bible**: *Libro del Pueblo de Dios* (Fundación Palabra de Vida + Verbo Divino) is already served by BibleGet I/O, a free Catholic Bible API → a digital licence has been granted before; CEE Bible (CEE/BAC), Biblia de Jerusalén (Desclée), Biblia de América (La Casa de la Biblia). None is on YouVersion or API.Bible's public catalogue. Fallbacks Bible societies already license: the interconfessional BTI/BHTI and Dios Habla Hoy with deuterocanon (with imprimatur). Spanish request to the LPD owners drafted (`sources/legal-gaps.md` §6.4).

## 5. Best finds of the night
1. **PDDPT**: a literal modern Latin-American Spanish Bible under CC BY 4.0 — removes the RVR1960/NVI permission problem for the default reading text.
2. **Torres Amat 1894** (Barcelona) with clean OCR → the only legitimate complete Catholic Spanish Bible with deuterocanon.
3. **BNE scans are CC BY 4.0 for commercial use** — the master key for Spain-printed PD books.
4. **Open Greek Corpus** (CC BY): ~350 patristic works OCR'd from Migne, no NC strings — the Greek Fathers' originals problem largely solved.
5. **Digital Syriac Corpus** (CC BY): Aphrahat, Ephrem, Narsai, Isaac of Nineveh…
6. **EEBO-TCP (CC0)**: hand-keyed English Reformation texts with no OCR needed.
7. **Michalcescu 1904**: all Orthodox symbolic books in one clean PD Greek volume.
8. **Spanish PD gems**: López de Ayala's Trent, Goyena's Vatican I (an Argentine imprint), Zorita's bilingual Roman Catechism, Monterrey 1880 Westminster, Valera's *Institución* and *Dos tratados*, *Ciudad de Dios* 1893, Cyprian 1807.
9. **Antoniades Patriarchal Greek NT** (PD, parsed): the NT as the Orthodox Church reads it.
10. **Renewal mining** settled several 1930s–50s translations (some free, some not) — e.g. Confraternity NT 1941 likely US-PD; Fathers of the Church (CUA), Tappert's Book of Concord, Luther's Works renewed (©).

## 6. Decisions for Pedro (options and evidence in `sources/critic.md` §4)
1. **Re-source the registry** to dated print scans (scan id + page per paragraph); Wikisource/Gutenberg only where scan-backed or proofread.
2. **Licence of our own translations**: proprietary (translate from PD prints, use BY-SA files only as witnesses) vs CC BY-SA (Sefaria-like openness) vs mixed.
3. **Jurisdiction gate**: publish in full only what is free in US + Spain + Argentina (+ which other countries?), plus a "free on" calendar for blocked texts (2027: Lake in Spain, Straubinger in Argentina, Luther Philadelphia vol. 5; 2028–29: Mingana's Theodore in the US, Connolly in Spain, Pius XII at source).
4. **One legal consult** before launch (Argentine FNA levy, operating entity, Spain shorter-term rule for 1931–63 US works, Vatican term, Pius XI in the US).
5. **Permission letters**: order and who signs (drafts in `permission-drafts.md`; suggested order: LEV + Dicastery for Communication → Christian Unity bundle + LWF + WCC → SBC → Lausanne/Alliance/CPCE → Spanish holders (Misión Luterana PR, Peregrino, Byler, Cantauque/OCMC, ATR) → a Catholic Spanish Bible publisher). A public demo URL helps every letter.
6. **AI-translation policy**: label wording, whether unreviewed drafts may show (as *borrador*), 100 % review of passages quoted on doctrine pages, who reviews (and specialists for Syriac/Ge'ez/Armenian/Arabic).
7. **Bible slots** (§4 table) and the **spelling layer** (diplomatic text as printed + optional modernised layer labelled as ours).
8. **Anglican now or later.**

## 7. Next work this enables (not started)
- An OCR + correction pipeline script (page images → Tesseract → LLM correction → structure validation) and a provenance schema (scan id, page, edition, licence) per paragraph.
- A renewal-check script over NYPL's CC0 renewal data for every 1931–63 US candidate.
- Re-sourcing the 44 registry entries and the Eucharist pilot quotes.
- Torres Amat 1894 edition; López de Ayala Trent; Monterrey 1880 Westminster; Zorita Roman Catechism.
- The translation pipeline for Spanish (Greek/Latin → es) with the review rules from decision 6.
- Volume estimate: Spanish for the registry + spine texts + shortlist is well over a million words → capacity planning.

## 8. Detailed reports (`docs/research/sources/`)
| File | Area |
|---|---|
| `bible-66.md` | Originals, word data, Spanish/English Bibles, APIs |
| `deutero-orthodox.md` | Deuterocanon, Orthodox/Ethiopian/Syriac extra books |
| `greek-fathers.md`, `latin-fathers.md`, `oriental-fathers.md` | Church Fathers by language |
| `councils-creeds.md` | Creeds, ecumenical/regional/Orthodox councils, Vatican law |
| `catholic-modern.md` | CCC, catechisms, encyclicals, canon law, missals, permission plan |
| `orthodox.md` | Confessions, catechisms, liturgy, Philokalia, Byzantine theologians |
| `protestant-magisterial.md` | Lutheran, Reformed, Anglican, Zwingli |
| `free-church.md` | Baptist, Anabaptist, Methodist, Pentecostal, Evangelical |
| `spanish-pd.md`, `spanish-gaps.md` | Spanish PD texts, legal frame, OCR tests, remaining gaps |
| `aggregators-legal.md`, `legal-gaps.md` | Aggregators' terms, legal memo, Latin America, lexicons, Catholic Bible permissions |
| `medieval-early-modern.md`, `rites-hymnody.md` | Rounds 2–3 gaps |
| `registry-audit.md`, `dataset-audit.md`, `versification.md` | Audits and tests |
| `BRIEF.md` | The brief every agent worked from (context, legal lines, tools) |
| `overlooked-era.md`, `overlooked-doctrine.md` | Overlooked writings (synthesis in `../overlooked.md`) |
| `critic.md` | Contradictions, unverified high-stakes claims, gaps, decisions |
| `*.verify.md` | Mechanical verification passes |
