_Report from the overnight source research of 2026-10-09 (agent-written; synthesis in `../sources.md`). Paths like `samples/…` refer to `~/Desktop/dev/doctrina-research-2026-10-09/samples/`, outside the repo._

# Critic — completeness and consistency review of the round-1 source research

Agent: critic · 2026-10-09 · Inputs: BRIEF.md, the 14 round-1 reports and the 5 `*.verify.md` files. Round-2 areas (Western medieval/early-modern 750–1700; remaining Spanish gaps for Lutheran/Reformed/Baptist/Orthodox) are excluded from the gap list on purpose.
Method: read each report's tables, blockers and verified-vs-memory sections, and the logs where needed. I did no new web research beyond five small checks, each marked **[critic-checked]**: (1) the Vatican law text saved by catholic-modern; (2) archive.org metadata and front matter of the Aventrot 1952 item; (3) archive.org metadata of the Monterrey 1880 WCF; (4) Wikipedia summary for Kirsopp Lake's dates; (5) a read-only grep of the repo's `data/site/sources.extra.json` and `data/site/*.json`.

---

## 0. Gist

- The research is broad and mostly well evidenced. The legal frame is the same in every report: a text is safe only if it is free in the US, Spain and Argentina at once.
- **The most urgent finding is in our own repo, not in the reports [critic-checked].** 21 of the 44 registry entries give New Advent as the edition URL. Site data contains 60 New Advent links, 16 CCEL links and 5 Hanover links. The Trent quotes come from Hanover, which forbids commercial use (verified). Cantate Domino comes from Tanner via papalencyclicals.net, and Tanner is copyrighted. Cabasilas is the 1960 Hussey–McNulty translation (copyrighted). The Marburg Articles are a modern GHDI translation. Every report says not to source from these sites. The registry needs re-sourcing to scans before anything else.
- **Three contradictions change verdicts:**
  - The Holy See's term is counted from the Pope's death when he is named, not from publication. Vatican II is therefore protected at source to about 2049, not 2034.
  - es.wikisource *Ciudad de Dios* and the Spanish *Sacrosantos concilios* are modernised or paraphrased. Both are WORK, not READY.
  - The Hallock translations of Aphrahat on tertullian.org are not public domain in Spain or Argentina: the translator died in 1984, not 1944.
- **Biggest coverage gaps:**
  - Rites and liturgical books for baptism and ordination (Rituale, Pontificale, Lutheran and Reformed forms).
  - Hymnody for Mary and the Eucharist (Akathist, Latin hymns, Wesley).
  - A Latin lexicon licence for word-by-word study.
  - No modern Catholic Spanish Bible.
  - Nobody audited the two datasets already in use (SermonIndex, HistoricalChristianFaith).
  - Terms in other Latin American countries (Mexico is life+100, from memory).
- **Decisions only Pedro can make:** the licence of our translations; the jurisdiction gate and calendar; the FNA levy and the operating entity; the order of permission letters; the AI-translation and review policy; the Bible slots.

---

## 1. Contradictions between reports

| # | Topic | What the reports say | Which looks right, and why | What would settle it |
|---|---|---|---|---|
| C1 | **Vatican term of protection** | councils-creeds: Vatican II protected "until ~2034–2036" (70 years from publication). overlooked-era #174 and overlooked-doctrine R2: Pius XII's *Munificentissimus Deus* "already PD by publication-year reading". catholic-modern F3: conservative reading is the Pope's death + 70. | **catholic-modern.** [critic-checked] Law CXCVII art. 5 §4 reads: "settanta anni a partire dall'anno di prima pubblicazione … *ovvero dall'anno di morte dell'autore ove questi sia indicato nell'opera*". Encyclicals and Vatican II acts name the Pope as author. So: Pius XII documents are free at source from about 2029. Vatican II and Paul VI from about 2049, not 2034. In the US, URAA gives 95 years from publication anyway: Vatican II about 2058–60, Pius XII 2039–45. | An Italian/Vatican lawyer on "ove questi sia indicato" for conciliar acts. Until then, plan with the later date. |
| C2 | **Wikisource ANF/NPNF as a "clean, contract-free" base** | aggregators-legal, greek-fathers and councils-creeds recommend en.wikisource as the CCEL-free route. latin-fathers found those pages carry CCEL anchor ids, so they are CCEL imports. The councils verify found NPNF2-14 at 50%, with no scan behind it. greek-fathers found gregorycrane/nicenefathers (CC BY-SA) is also CCEL-derived. | **Both are partly right.** Legally Wikisource is usable: no US copyright in a faithful transcription, and CCEL's terms bind CCEL's users, not Wikisource readers. But it is not an independent witness, and many volumes are unproofread. The "rebuild from Wikisource" advice is partly circular. | For each volume, check whether it is transcluded from an `Index:` scan page (scan-backed and proofread). For pages that are not scan-backed, collate against the archive.org scan before publishing. Record the scan id and page per paragraph. |
| C3 | **es.wikisource *La ciudad de Dios* (Díaz de Beyral)** | latin-fathers: "READY after collation (S)". latin verify: wording is modernised, not verbatim ("opiniones adversativas y contrarias" became "opiniones contrarias"), and the source edition is only on the talk page. | **The verify.** It is WORK: transcribe from HathiTrust uc1.$b246568–71 (the 1893 scans, near-perfect OCR). Use Wikisource only as an aid. The modernisations are contributor edits under CC BY-SA. | Done (the verify diffed it). |
| C4 | ***Los sacrosantos concilios* (1793–96) as Spanish for councils 8–18** | councils-creeds: "canons translated, sometimes condensed → WORK M". councils verify: Lateran IV c.1 is a paraphrase with commentary mixed in (no "Firmiter credimus"; attributes dropped). | **The verify.** Not usable as the text of any canon. At most a labelled historical witness. Spanish for Lateran IV, Lyon, Florence and Vienne becomes our own translation from the Latin. | Spot-check one more council (Florence, tomo VII) before discarding it entirely. |
| C5 | **Hallock's Aphrahat Dem. 2 and 7** (tertullian.org) | oriental-fathers §2.6: translator "1877–1944", PD in Spain and Argentina. aggregators-legal lists Aphrahat Dem. 2 and 7 among Pearse's PD items. oriental verify: the translator is Frank H. Hallock, **1901–1984**. | **The verify.** Not PD in Spain (life+80 → 2064) or Argentina (→ 2054). US: Dem. 2 (JSOR 14, 1930) is PD. Dem. 7 (JSOR 16, 1932) is PD only if not renewed (unchecked). General lesson: Pearse's "copy freely" is his own judgement, not a grant from the rights holder. Check each page's translator. | A renewal search for JSOR 16 (1932) in the CCE periodical renewals 1959–60. Meanwhile, our own translation from the Digital Syriac Corpus. |
| C6 | **Heidelberg Catechism in Spanish (Aventrot)** | spanish-pd: the IA "Revisión 1952" is a user upload, likely copyrighted → BLOCKED pending a 1628 scan. protestant-magisterial and overlooked-doctrine: the 1628 text is PD, the 1952 reprint only modernises spelling → WORK S. | **Closer to protestant-magisterial.** [critic-checked] The front matter reads "Reedición 1952", a free gift edition of Prof. Wisse ("La venta de este libro está prohibida"). The appendix credits "nuestro amigo el catedrático Dr. D. Eduardo Böhmer" (d. 1906). So the 1952 booklet reprints a 19th-century Böhmer-circle edition. The residual risk is a thin layer of 1952 spelling changes. | Locate the 19th-century edition (Böhmer's *Bibliotheca Wiffeniana* or the Usoz/Böhmer circle) or the 1628 Amsterdam print (Jores de Henghel), and cite that. Note: the 1628 edition also carries Reformed baptism and Supper forms (see gap G1). |
| C7 | **Mingana's Theodore of Mopsuestia (1932/33)** | greek-fathers and Pearse: PD. aggregators-legal and oriental-fathers: US-protected under URAA until 2027/2028, so PD in the US on 1 Jan 2028 (Creed) and 1 Jan 2029 (Sacraments). | **aggregators-legal and oriental-fathers** for a US-hosted site. The oriental verify could not prove there was no simultaneous US edition. | The title-page verso of Woodbrooke Studies 5–6 (Heffer, Cambridge only?). Then put the date on the PD calendar. |
| C8 | **Lake's *Apostolic Fathers* (Loeb 1912–13)** | greek-fathers: Lake d. 1946, so not PD in Spain until 2027. overlooked-era shortlist #2: "Ignatius READY EN (Lake, CC BY-SA)". | **greek-fathers.** [critic-checked] Wikipedia: Lake 1872–1946, so PD in Spain on 1 Jan 2027. Until then use Lightfoot 1891 (PD everywhere). Lake via Perseus is also CC BY-SA. | Nothing more. Note it on the calendar. |
| C9 | **Spanish Westminster Confession base and translator** | protestant-magisterial: Monterrey 1880, "[H. C. Thomson]". spanish-pd: no translator on the title page, so anonymous. free-church: seed the Spanish 1689 from Hodge/Arellano 1897. | [critic-checked] The IA record says only "trad. del Inglés". The Thomson name is a cataloguer's attribution. Both 1880 and 1897 are PD in the US; either way the risk is low. Use **1880 as the base** (complete WCF + Shorter Catechism with proofs) and 1897 as a second witness. If the 1689 is seeded from a WCF text, seed it from the same one. | The Princeton catalogue record for the attribution source. Death dates for Thomson and Arellano (only matters if Mexico is a target, see D3). |
| C10 | **Torres Amat on es.wikisource** | bible-66: proofread parts exist (III, VIII, XIII–XVI). deutero-orthodox: "barely started". | **Both are partly right** (bible verify): Gospels, Acts–1 Corinthians, the catholic epistles and Revelation are proofread (1836 edition). The OT, **including every deuterocanonical book**, is practically absent. | Done. The deuterocanon comes from OCR of the 1894 Barcelona edition (verify: complete and clean). |
| C11 | **Revised Version 1895 Apocrypha on eBible (eng-rv)** | deutero-orthodox: 2 Esdras 7:35 has modern contractions, so the text may be WEB-contaminated. | **Refuted by the verify:** zero contractions, archaic style, and the 7:36–105 fragment restored with the RV note. eng-rv is READY. | Done. |
| C12 | **Rahlfs 1935 Septuagint, US status** | bible-66: URAA-restored, PD in the US from 2031. deutero-orthodox: the German §70 scholarly-edition term may have expired by 1960, so no restoration. | **Unresolved but moot.** Both reports choose Swete (First1KGreek, CC BY-SA) and avoid CCAT-derived data. | Only if Rahlfs is ever wanted: a German lawyer on §70 vs §2 UrhG. |
| C13 | **Rule of the shorter term (Spain art. 199.4, Argentina art. 15) for US-PD translations** | catholic-modern: VERIFIED texts, "PD in AR/ES". aggregators-legal: same conclusion plus a ⚖ caveat (the Falcon transitional rule). free-church: "memory". | Same conclusion with different confidence. Solid for **pre-1931** US works. For **1931–63 unrenewed** US works (Schroeder, Outler, the Rudder, BF&M 1963, Confraternity NT) treat it as likely but take legal advice. | One question to a Spanish lawyer (aggregators §3.8 q1). |
| C14 | **Schroeder's *Trent* (1941)** | councils-creeds: "usable everywhere". councils verify: HathiTrust code `pdus`, but "Limited (search only)" from Argentina; the IA copy is lending-only. | The legal status is fine (Schroeder d. 1942; no renewal found). The problem is **access**: no open scan reachable from Argentina. | A US-based person downloads the HathiTrust pdus pages, or we buy the TAN reprint and scan it. Not urgent: Waterworth 1848 and Buckley 1851 already cover Trent in English. |
| C15 | **Aquinas *Summa*, English** | aggregators-legal: "translation PD (Benziger renewal covers only the charts) → READY". The registry's edition URL is New Advent. | The US status is right. Not checked by anyone: **Spain.** The English Dominican translation was published in London (1911–25) and is usually credited to Laurence Shapcote (d. 1947, **memory, unverified**). If attributable to him, Spain protects it to the end of 2027. If treated as anonymous ("Fathers of the English Dominican Province"), art. 27 gives 70 years from publication, so PD. | Shapcote's death date (VIAF/LoC), plus legal advice on whether a later-revealed author defeats art. 27. Round-2 medieval agent: please confirm. |
| C16 | **LEV phone numbers** | +39 06 698 45363 (Foreign Rights page, verified twice) vs 06 6984 5766 (LEV contact page, catholic-modern). | Both were verified on different LEV pages. Not a real conflict. | Write to diritti.lev@spc.va, the email both pages give. |
| C17 | **CCC dataset (nossbigg)** | aggregators-legal: avoid (MIT label void). overlooked-doctrine used it to count footnotes. | No conflict: research-only internal use is defensible. It must **never** enter the repo or the site. | None needed. Keep it in the scratchpad only. |
| C18 | **Pius XI encyclicals 1931–39 in the US** | catholic-modern Tier B: "likely PD", a hypothesis that the 1960 Vatican law froze Italian life+50, so they were PD at source before 1996 and not restored. overlooked-era §4.7: "all pre-1939 papal docs PD at source". | At source: yes (Pius XI d. 1939). **In the US it is a hypothesis built on two memory facts:** Italian law 633/1941's term as of 1960, and the "static reception" in Vatican law XII/1960. Worst case, PD in the US on 1 Jan of publication year + 96 (2027–2035). | Read the Vatican law XII/1960 text and Italian art. 25 L.633/1941 as of 1960. Then lawyer sign-off. |

Minor, no action: spabes (PD now vs older CC BY: commercial use allowed either way); the Book of Steps base text in the Digital Syriac Corpus cites Kitchen 2009, not Kmosko (verify), a low risk under Spanish art. 129.2.

---

## 2. High-stakes claims resting on memory or snippets, ranked

A decision depends on each of these. Ranking = (money or legal exposure) × (how many texts depend on it) × (how weak the evidence is).

1. **Our own registry's provenance (not a memory claim, but unchecked).** [critic-checked] 21 of 44 entries use New Advent as the edition URL. Others: Calvin and Belgic via CCEL; Trent quotes via Hanover; Cantate Domino via papalencyclicals.net (Tanner); Marburg via GHDI (Glebe); Mogila via maksimologija.org; Philaret via pravoslavieto.com; the Westminster Larger Catechism via opc.org; New Hampshire via gracegems.org.
   - **Exact check:** diff every English quote in `data/site/eucharist.v2.json` (and `john6.json`) against (a) the New Advent page and (b) the archive.org scan of the same NPNF or ANF volume.
   - If quotes match New Advent's "revised and edited" wording rather than the 1885–1900 print, they were copied from New Advent and must be replaced.
   - Then repoint every `edition.url` to a scan id and page.
2. **The Argentine FNA "dominio público pagante" levy** (spanish-pd: Res. 625/2022 verified; module value ARS 40,000 via Decreto 666/2024, "may lag").
   - What is unverified: (a) the current module value; (b) any FNA resolution after 2022 changing Rubro 12.3; (c) whether it reaches a US-hosted site run by a non-Argentine entity; (d) what counts as one "obra"; (e) whether our own new translations fall outside it. Point (e) is spanish-pd's reading, not a lawyer's.
   - It could mean ARS 120,000 per PD work per year, multiplied by hundreds of works.
   - **Check:** Boletín Oficial search "Fondo Nacional de las Artes resolución arancel dominio público 2023..2026", the current Decreto 1030/2016 art. 28 module, and one Argentine IP lawyer.
3. **Vatican and Holy See terms and URAA** (C1, C18): this drives Pius XI, Pius XII, *Munificentissimus Deus* (Mary page) and Vatican II timing. **Check:** the lawyer questions in C1/C18, plus the US URAA restoration status of Holy See works (the Holy See joined Berne in 1935).
4. **US "no renewal found" negatives used as backbone texts.** All come from Stanford DB or NYPL title/claimant searches, which cannot prove a negative. Affected texts:
   - Schroeder *Disciplinary Decrees* 1937 and *Trent* 1941;
   - Outler's Confessions 1955;
   - the Rudder (Cummings) 1957;
   - BF&M 1963;
   - the Confraternity NT 1941 (only the 1969 CCE volumes were scanned; 1968 and 1970 were not);
   - Lasance's *New Roman Missal* 1937;
   - Lumpkin 1959;
   - Philadelphia Luther vols 4 and 6;
   - Easton's *Apostolic Tradition* 1934;
   - Oulton's Eusebius HE vol. 2, 1932.

   **Exact check per title:** (a) original registration in the CCE (with notice); (b) the renewal volumes for publication year +27/+28, read by page index rather than OCR grep; (c) for renewals filed 1978 or later, publicrecords.copyright.gov; (d) the HathiTrust CRMS rights code.
5. **Translator death dates that gate Spain (died ≤1945) and Argentina (≤1955).** Unverified or memory-only for: Thompson and Srawley (Ambrose 1919, a Eucharist pilot item); Vassall-Phillips (Optatus 1917, papacy); Easton (1950?); Mendía (Spanish Summa 1880); Abad de Aparicio (1922, snippet); Arellano (1910, snippet); Hubert W. Brown; J. N. W. B. Robertson (Dositheus 1899 and the liturgies 1894); Metallinos (1895 Encyclical); L. Petit (Mark of Ephesus, PO 15, 1927?); A. E. Johnston (NPNF2 13); Gwynn; Issaverdens; Segalá (1938?); E. W. Brooks (1955?); Shapcote (C15); Deferrari; Bannwart; Tejada y Ramiro; Overbeck (1905, Wikipedia only). **Check:** VIAF/LoC/BNE authority records. The reports have flagged most of these individually.
6. **URAA for UK or European 1931–77 publications** quoted as "US-PD" somewhere: Mingana's Woodbrooke Studies vols 3–7; the British LCC volumes (Burleigh, Burnaby, Greenslade); Hodgson's *Bazaar* (1925 is fine; check reprints); the Kadloubovsky Philokalia; Barmen. **Check:** first-publication place and any US edition within 30 days (title-page verso).
7. **The Misión Luterana de Puerto Rico Spanish Book of Concord.** Its claim "dominio público, voluntarios" plus CC BY icons conflicts with "©2025" and with introductions that look derived from Kolb–Wengert. It would solve the whole Lutheran Spanish gap if clarified. **Check:** a written request asking which source was translated and for an explicit CC BY or CC0 on the confession texts. Round-2 Spanish agent may already cover this.
8. **The Anglican BCP 1662 in the UK** (CUP's 500-word rule is a snippet; CUP's page returned 404) and **US BCP 1979 "public domain"** (seen only via a Commons quote of Church Publishing's brochure). **Check:** Church Publishing's own permissions page; CUP's King's Printer permissions page.
9. **Creeds.json Heidelberg = Canadian Reformed Book of Praise (©)** is a snippet. It matters for any import from Creeds.json or ReformedDevs. **Check:** the Book of Praise copyright page.
10. **Beta maṣāḥǝft Enoch and Jubilees: CC BY-SA vs Ran HaCohen's non-commercial terms.** The conflict is verified. Low priority for launch. **Check:** a one-line confirmation from Beta maṣāḥǝft or HaCohen.

Already solid (no further check needed): BNE scans under CC BY 4.0 for commercial use; HathiTrust's note that "there are no restrictions on use of text transcribed from the images"; EEBO-TCP CC0 (five headers); CCEL, New Advent, Hanover, Corpus Corporum and Documenta Catholica Omnia terms; USCCB 5,000-word rule; vatican.va ToS including the anti-deep-link clause; Lausanne Cape Town Commitment EN reuse; PDDPT CC BY 4.0; MACULA's UBS fields "used with permission"; Digital Syriac Corpus CC BY 4.0.

---

## 3. Coverage gaps

Excluded on purpose: Western 750–1700 theologians and the remaining Spanish Lutheran/Reformed/Baptist/Orthodox texts (round 2 is on them).

**G1. Rites and liturgical books for the launch doctrines.** Baptism, ordination and penance pages quote rites, not only confessions. Nobody covered:
- **Catholic:** *Rituale Romanum* (1614; 1925 typical edition, PD) for baptism and the dead; *Pontificale Romanum* (ordination prayers, which the CCC cites ×5); Roman Breviary (Marian antiphons). English: Bute's Breviary 1879 (PD, memory); Weller's *Roman Ritual* 1950–52 (renewal unknown).
- **Lutheran:** *Taufbüchlein* 1526, *Deutsche Messe* 1526, *Formula Missae* 1523 (German PD; English Philadelphia ed. vol. 6, 1932: renewal "not found" per protestant-magisterial).
- **Reformed:** Dutch Reformed liturgical forms (baptism, Supper) in 19th-century English, and in Spanish inside Aventrot 1628 (C6).
- **Anglican:** Ordinal 1550/1662, central to *Apostolicae curae* and *Saepius officio*.
- **Orthodox:** baptism and chrismation (Hapgood has them; not called out).

Effort S–M each. Mostly PD.

**G2. Hymnody** (relevant to Mary and the Eucharist):
- **Orthodox:** the Akathist and Theotokia. Greek is PD; English via Neale or Littledale (PD); Spanish needs our own translation.
- **Latin:** *Pange lingua*, *Lauda Sion*, *Adoro te* (Aquinas; round-2 medieval may cover), *Sub tuum praesidium*, *Salve Regina*, *Ave maris stella*. Originals PD; Neale and Caswall English PD.
- **Lutheran:** Luther's chorales (Winkworth English PD).
- **Methodist:** Wesley's *Hymns on the Lord's Supper* 1745 (only mentioned).
- **Spanish:** 19th-century evangelical hymnals (unsearched).

Nobody searched hymnody systematically.

**G3. The Bible reader:**
- (a) **No modern Catholic Spanish Bible exists under an open licence.** Torres Amat 1894 is archaic; spablm/spabll are drafts translated from the WEB (a Protestant-originated base). Straubinger is free in Argentina only from 2027 (Spain 2037, US about 2039–47). Nácar-Colunga, BJ, Biblia de América and Libro del Pueblo de Dios need permission. Nobody drafted a request to a Catholic Bible publisher (BAC, Desclée, Verbo Divino, San Pablo, CEA).
- (b) **Versification:** everyone says "map with TVTMS", but nobody tested RV1909 ↔ Torres Amat (Vulgate) ↔ DRA ↔ PDDPT ↔ the LXX-based Psalms on real files. The bible verify noted that Jn 6:54 in the Vulgate equals 6:53 in modern Bibles. This needs one hands-on pass before the reader's division ids are fixed.
- (c) **Nova Vulgata** (the Catholic official Latin, copyrighted by the Holy See/LEV) and Weber–Gryson are not mentioned. The Clementine is the only Latin.
- (d) **A Latin lexicon and morphology licence for word-by-word study** is not covered: Lewis & Short via Perseus (CC BY-SA), Whitaker's Words (licence?), LatinCy (in the brief, licence not rechecked). Also Syriac (Payne Smith 1903, PD; SEDRA terms?) and Coptic (Crum 1939: possible URAA).
- (e) **Spanish definitions for Greek and Hebrew word study:** none open except the OpenGNT glosses (CC BY-SA) and Texto Puente (6 books). Our own glosses are needed. Nobody estimated the effort.

**G4. Datasets already in use but never audited.** The SermonIndex HF dataset ("translations mostly ANF/NPNF but not all", per the brief) and the HistoricalChristianFaith Commentaries-Database. Nobody listed which passages come from non-PD translations. Check by grepping their source fields against the copyrighted series named tonight (FOTC, ACW, Loeb after 1930, Ramsey, New City Press, Popular Patristics).

**G5. Other audience jurisdictions.** All analysis is US/Spain/Argentina. The brief says "rest of Latin America". **Mexico is life+100 (memory, unverified)**, which would catch any translator who died after 1925, including several Mexican mission imprints (Thomson/Arellano). Colombia, Chile, Peru: terms not checked. The UK (English readers): BCP 1662 Crown rights only. Decide the target list (D3) before calling anything "READY everywhere".

**G6. Launch-doctrine holes left after the reports** (for the Spanish side, everything is "own translation" by default):
- **Eucharist (pilot):** no PD English for Luther's 1528 *Confession* (LW 37 renewed), Cabasilas, Chrysostom *De proditione Judae* 1.6, Paschasius, or the Florence decrees. All need our own translation from WA 26, PG 150, PG 49, PL and Mansi.
- **Mary:** *Munificentissimus Deus* (free at source in 2029; US later; English NCWC translation renewal unchecked); Epiphanius *Panarion* 78–79 (no PD English); Akathist (G2).
- **Papacy:** Nilus Cabasilas *On the Primacy* (only mentioned; no edition located). The *Exsurge Domine* and *Confutatio* translations on bookofconcord.org have unclear provenance (overlooked-doctrine item 6).
- **Purgatory:** *Benedictus Deus* and Florence *Laetentur* (own translations, short). *Indulgentiarum doctrina* is copyrighted.

**G7. Capacity.** Every report labels Spanish "own translation (AI-assisted, reviewed)", but nobody summed the volume. On a rough reading, Spanish for the registry plus the spine texts and the 30-item shortlist is well over a million words. Reviewer sourcing for Syriac, Ge'ez, Armenian, Arabic and Coptic is unaddressed (oriental-fathers flags the need). This is a planning gap, not a source gap.

**G8. Anglican Spanish modern text.** The *Libro de Oración Común* 1989 is copyrighted by the Church Pension Fund (snippet only). The PD Spanish options (BCP 1715, 1837–1864) are 18th–19th century Church of England texts, not the texts used by today's Spanish-speaking Anglicans. No permission draft exists. This only matters if Anglican joins at launch (D11).

---

## 4. Cross-cutting decisions Pedro must make

**D1. Edition of record and re-sourcing the registry.**
- Evidence: §2 item 1 (21/44 entries on New Advent; Hanover, Tanner, CCEL); aggregators-legal §2.
- Options:
  - (a) Every text is rebuilt from a dated print scan (archive.org, HathiTrust, BNE, Google), with our own OCR and provenance per paragraph (scan id + page). Wikisource and Gutenberg serve only as aids or collation witnesses.
  - (b) Accept Wikisource and Gutenberg text as-is where scan-backed.
  - (c) Ask CCEL for a ThML licence to save OCR work.
- Recommendation: (a), with (b) allowed for scan-backed Wikisource and proofread Gutenberg. Rule to record in DECISIONS: "a licence badge on HF/GitHub is evidence of nothing; trace every text to a dated print".

**D2. Licence of our own translations and data, given CC BY-SA inputs.**
- Evidence: greek-fathers §4; latin-fathers §5.1; aggregators §2.3. CC FAQ: share-alike bites only on adaptations. PTA's new critical editions (e.g. Athanasius *De incarnatione*) may carry real EU scholarly-edition rights. MorphGNT, Swete-Morpheus and the Perseus LSJ are BY-SA data.
- Options:
  - (a) Proprietary translations: translate only from the underlying PD print (Migne, pre-1931 GCS/CSEL, Lightfoot), using BY-SA files as witnesses. Word data from CC BY sources only (TAGNT, MACULA minus UBS fields, TFLSJ).
  - (b) Publish our translations under CC BY-SA. This is compatible with selling access, but anyone may copy them. Closest to the Sefaria model; good for trust.
  - (c) Mixed: proprietary by default, BY-SA where a BY-SA edition was truly used (e.g. PTA critical texts).
- Pedro must also decide whether contributing OCR back to Wikisource or palabra-de-dios (which would then be BY-SA or CC0) is wanted.

**D3. Jurisdiction gate and PD calendar.**
- Evidence: aggregators §3.6 table; URAA cases (Mingana, Pius XII, Straubinger, Besson 1948, Jünemann OT under §303 to 2047, Knox); Spain life+80 cases (Connolly to 2028, Lake to 2026, Easton, Hallock).
- Options:
  - (a) Strict: publish in full only what is PD in the US, Spain and Argentina at once. Everything else is short quotation plus a dated "free on" entry.
  - (b) Geo-split serving (Vercel geo headers or a non-US host for Spain/Argentina-only texts): complex, VPN-leaky, needs legal advice.
  - (c) Our own translation now, swapping in the historic translation when it frees.
- Also decide whether Mexico, the rest of Latin America and the UK are in scope (G5).
- Recommendation: (a) + (c), plus a calendar file (2027: Lake in Spain, Straubinger in Argentina, Luther Philadelphia vol. 5, Woodbrooke vol. 3 in the US; 2028/29: Mingana Theodore in the US, Connolly in Spain, Pius XII at source).

**D4. The Argentine FNA levy, the operating entity, and one legal consult.**
- Evidence: spanish-pd §2 (Res. 625/2022 verified); aggregators §3.8 lists 5 lawyer questions; add the questions from C1, C13, C15 and C18, and the Argentina art. 8 hypothesis for Vatican II (councils-creeds).
- Options: (a) one consult (Argentine IP plus a Spanish IP question) before launch; (b) operate through a US LLC and argue there is no Argentine exploitation; (c) favour our own new translations (outside "dominio público" by the text of the resolution); (d) budget the levy for the few historic Spanish texts we keep.
- The entity choice also determines who signs the permission letters.

**D5. Permission letters: order and form.**
- Evidence:
  - drafts already written: LEV (catholic-modern §7, councils-creeds §7), SBC, Lausanne, Alliance, Assemblies of God, WHF, Byler and Peregrino (free-church), CCEL (aggregators §4.5), Beth Mardutho (oriental), Jünemann (deutero);
  - a generic EN/ES template (aggregators §4.3–4.4);
  - the Sefaria–JPS model: ask for a display-only licence scoped to Doctrina, not an open licence.
- Suggested order by value × likelihood:
  1. LEV + Dicastery for Communication (one email: CCC, Compendium, Pius XII→today, *Ecclesia de Eucharistia*, deep-link permission);
  2. Dicastery for Promoting Christian Unity bundle (JDDJ, ARCIC, Ravenna, Catholic–Baptist 2010), plus LWF and WCC (BEM);
  3. SBC (BF&M 2000 EN + ES);
  4. Lausanne, Alliance (Chicago Exposition + permission for our Spanish), CPCE Leuenberg (easy);
  5. Spanish holders who fill tradition gaps: Misión Luterana PR (clarify CC BY), Peregrino (1689), Byler (Anabaptist), Cantauque or OCMC-Guatemala (Orthodox liturgy), ATR (Westminster Larger Catechism);
  6. a Catholic Spanish Bible publisher (G3a);
  7. optional: CCEL, Beth Mardutho, Beta maṣāḥǝft, Jünemann heirs.
- Before sending: a public demo URL (several drafts reference one); one signatory or entity (D4); an honest statement of the paid plans (every draft already says "may become paid"). Expect a USCCB refusal for the full CCC (precedents).

**D6. AI-translation policy.**
- Evidence: spanish-pd §6.8 pipeline; greek-fathers §9; Pearse's AI-draft precedent; the invariant "anything unverified is draft".
- To decide:
  - the label wording, e.g. "Traducción de Doctrina (asistida por IA, revisada por …) a partir de [edición]";
  - whether unreviewed passages may appear at all (as *borrador*) or only reviewed ones;
  - a 100% review rule for passages quoted on doctrine pages;
  - who reviews (named people; specialist reviewers for Syriac, Ge'ez, Armenian, Arabic);
  - whether Boyne Archives machine translation (CC0, anonymous uploader) and Open Greek Corpus raw OCR may serve as drafts.

**D7. Interim quotation-only policy for copyrighted texts.**
- Evidence: Argentina art. 10 (≤1,000 words per quote, didactic, only what is indispensable, compensation clause if the quotes are the "main part"); Spain art. 32 ("fines docentes o de investigación", a weak fit for a paid site); USCCB 5,000 words for the CCC in English (unclear whether per work or per site); vatican.va §5 forbids deep links without DPC permission.
- To decide: a per-quote cap (catholic-modern suggests ≤300 words); a site-wide CCC word counter; linking to vatican.va now vs only after DPC permission.

**D8. Bible slots.**
- Evidence: bible-66 §3; deutero-orthodox F17 (spablm fine as a reading text, spabll a loose paraphrase).
- To decide:
  - Default modern Spanish: PDDPT (CC BY 4.0; literal; renders "Yavé"/"ʼAdonay"; small foundation) vs RV1909 (PD, archaic, Protestant-identified).
  - Catholic with deuterocanon: OCR Torres Amat 1894 (WORK M) vs showing spablm (a draft translated from the WEB) as a stopgap. A neutrality question: can a Protestant-made draft represent the Catholic Bible? Or seek a modern Catholic licence (G3a).
  - Orthodox extras: spablm labelled, or our own from Swete.
  - Whether Protestant pages quote the Apocrypha from Reina 1569/Valera 1602 (deutero F15 neutrality idea).

**D9. Spelling layers.** A diplomatic text (exactly as printed) plus an optional modernised layer labelled as ours (Spain art. 41 integrity; OCR must never silently modernise, as the IA ABBYY layer does per deutero F5). Decide whether citations always point to the diplomatic text.

**D10. Anglican now or later.** If now: the Crown/CUP question for UK readers (or serve the 39 Articles from Schaff 1877 and the liturgy from the US BCP 1928/1979); Spanish only from 18th–19th century BCPs (G8).

---

## 5. State of the world (one screen)

Counts are approximate and come from each report's per-work table, rows deduplicated. EN and ES are counted separately: READY = full text usable now; WORK = OCR, cleanup or our own translation (legal and feasible); PERM = needs a rights holder; BLOCKED = no legitimate full-text path even with work (quotation only).

| Tradition / category | EN: R / W / P / B | ES: R / W / P / B | Key texts (status) |
|---|---|---|---|
| **Bible (66 + deuterocanon)** | R ~8 (BSB, KJV, DRA, WEB-C, RV1895+Apoc, Brenton, ASV) · W 1 (Confraternity NT 1941, verify) · P modern (NABRE, RSV-CE, NJB) · B 0 | R 4 (PDDPT, RV1909, RV1865, spablm draft) · W 4 (**Torres Amat 1894** DC, Scío, Reina 1569 Apocrypha, Versión Moderna) · P modern Catholic/Protestant · B 0 (Jünemann OT = permission, US §303 to 2047) | Originals and word data READY (TAHOT/TAGNT, MACULA minus UBS, Swete LXX BY-SA, SBLGNT CC BY). Gaps: modern Catholic Spanish; versification test |
| **Greek Fathers** (39 works) | R 25 · W 12 · P 0 · B 1 (Melito) | R 0 · W 37 · P 0 · B 1 | Greek: First1KGreek/Perseus/PTA + **Open Greek Corpus Migne OCR (CC BY)**. EN: ANF/NPNF via scans; Lightfoot until 2027 (not Lake) |
| **Latin Fathers** (21 authors) | R ~15 · W ~6 (FOTC/ACW gaps) · P 0 · B 0 | R 0 · W 21 (PD Spanish to OCR: Confessions 1781/93, **City of God 1893**, Cyprian 1807, Vincent 1784, Gregory 1769) · B 0 | Latin: OGL CSEL + PL (CC BY-SA). EN: NPNF/ANF scans, Tertullian Project, Outler (US-only) |
| **Oriental Fathers** (~30) | R ~13 · W ~15 (own) · P 0 · B 0 (Nag Hammadi quotation only) | R 0 · W all | **Digital Syriac Corpus (CC BY)** + aligned PD English (Connolly: Spain 2029; Wensinck, Budge, Brightman). Theodore/Mingana: US 2028/29 |
| **Councils and creeds** (~21) | R ~10 (NPNF14, Schaff II, **Waterworth/Buckley Trent**, Schroeder 1937) · W ~8 (own: Orange, Toledo III, Florence, Photian, Palamite, 1848) · P 2 (Vatican II, Tanner) · B 1 (Denzinger translations) | R 0 · W ~18 (**López de Ayala Trent 1785**, **Goyena/Bravo y Tudela Vatican I**, Tejada canons, 19th-c. creeds) · P 1 (Vatican II) | Vatican II: free at source about 2049 (C1); LEV letter |
| **Catholic modern magisterium** (19) | R 2 (Baltimore, McHugh–Callan 1923) · W ~8 (encyclicals ≤1930, CIC 1917, Tridentine Missal, Möhler) · P 7 (CCC, Compendium, Pius XII→, CIC 1983, current Missal, YOUCAT) · B 0 | R 1 (**Astete**) · W ~8 (**Zorita 1819 Roman Catechism**, Ripalda, Pius X 1914) · P 7 | CCC = quotation + link until a licence. *Ecclesia de Eucharistia* = LEV |
| **Orthodox** (18) | R ~8 (**Robertson 1899 Dositheus**, Overbeck 1898 Mogila, Blackmore/Schaff Philaret, Hapgood, Robertson 1894 Liturgies, 1896 Encyclical) · W ~7 · P 3 (Philokalia EN, Triads, modern statements) · B 0 | R 0 · W ~15 (own, from **Michalcescu 1904** Greek) · P 4 (Cantauque, OCMC, Monte Casino, Mileant) | No PD Spanish Orthodox text at all; Rudder US-PD but no open scan |
| **Lutheran** | R ~8 (**Triglot via bookofconcord.org**, PD) · W 3 (Marburg via Jacobs II, Luther 1528 own) · P 0 · B 0 | R 0 · W all · P (CPH Meléndez; Misión Luterana PR to clarify) | Registry misses the AC, Small Catechism and Treatise. Round 2 covers Spanish |
| **Reformed** | R ~8 (Schaff III, Allen's Institutes, WCF/WSC, TCP Calvin tracts) · W ~5 (Heidelberg/Belgic/2HC via Schaff OCR) · P 0 | R 0 · W ~8 (**Thomson 1880 WCF**, **Valera 1597 Institución (BNE CC BY)**, Aventrot Heidelberg, **Valera *Dos tratados***) · P (ATR for WLC; Faith Alive) | Avoid Creeds.json Belgic, Heidelberg and Second Helvetic texts |
| **Baptist / free church** | R ~15 (**McGlothlin 1911**, reformed-standards 1689 Apache, BF&M 1925/1963, Menno 1871, Martyrs Mirror, AG 1916) · W ~5 · P 6 (BF&M 2000, AG current, Lausanne, Manila, Chicago Exposition) · B 0 | R 2 (**Methodist Articles 1883**, Cape Town ES = P) · W ~10 · P ~6 (Peregrino 1689, Byler, WHF, SBC ES) | Spanish 1689: own translation (40–65% seedable from the 1880/97 WCF) or Peregrino |
| **Anglican** (if added) | R ~8 (**EEBO-TCP CC0**: Cranmer, Jewel, Hooker, Homilies; US BCP 1979; 39 Articles) · P 1 (BCP 1662 in the UK) | W 2 (BCP 1715/1864 Spanish, BNE) · P (LOC 1989) | TCP is the cleanest English route before 1700 |
| **Spanish-language originals** | — | R 2 (BNE ePub *Tesoro de místicos*, Astete) · W ~25 (Reformistas Antiguos Españoles, Ávila's 27 Eucharist treatises, Granada, Teresa, Lima 1584, BAE) | Native Spanish voices with no translation needed |
| **Modern ecumenical** (1931→) | R 2 (US BCP 1979; Cape Town EN) · P ~12 (JDDJ, BEM, ARCIC, Leuenberg, Ravenna/Chieti, Catholic–Baptist 2010, Crete 2016, Barmen) | P all | One letter per holder covers several texts (D5) |
| **Our registry today (44)** [critic-checked] | ~25 point to a non-reusable host as edition (New Advent ×21, CCEL ×2) or a copyrighted/NC source (Hanover Trent quotes, Tanner, Hussey–McNulty, GHDI) | — | Re-source first (D1, §2 item 1) |

**Overall:**
- Almost nothing is BLOCKED outright. The hard copyright walls are the Holy See, modern ecumenical texts, BF&M 2000 and modern Bibles, and all are permission tracks.
- English is mostly READY or WORK from PD scans.
- Spanish is overwhelmingly our own translation. The exceptions are a dozen strong PD Spanish books, Trent, Vatican I, the WCF and the Spanish Reformers.
- The binding constraints are labour (OCR plus translation review), the Spain life+80 rule, US URAA, and an unresolved Argentine levy.
