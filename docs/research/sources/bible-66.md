_Report from the overnight source research of 2026-10-09 (agent-written; synthesis in `../sources.md`). Paths like `samples/…` refer to `~/Desktop/dev/doctrina-research-2026-10-09/samples/`, outside the repo._

# bible-66 — The 66-book Bible: original-language data, Spanish and English full Bibles, APIs

Agent: bible-66 · Date: 2026-10-09 · Status: DONE (written incrementally; sections 2a–2f are the log, 3–7 the synthesis)

## 1. Scope and method
Covered: (a) original-language texts and word data beyond TAHOT/TAGNT, versification, lexicons; (b) every Spanish full Bible I could find with a legitimate open route (Protestant, Catholic, modern open), plus 20th-c. Catholic copyright terms; (c) English PD/open incl. Catholic; (d) Bible APIs (note only).
How: licenses read on the repos' own LICENSE/README files (curl/gh api), eBible.org `translations.csv` + each edition's `copyright.htm`, CrossWire module confs from 7 SWORD repositories (main, beta, attic, Xiphos, Wycliffe, experimental, STEP), archive.org advancedsearch + metadata + `_djvu.txt` downloads, Project Gutenberg (gutendex), GitHub search (gh), Door43 catalog API, es.wikisource (through Chrome after the API rate-limited me), Stanford Copyright Renewal Database JSON API, publisher pages via the shared Chrome (Amazon, YouVersion terms). Hands-on: compared 7 doctrinal key verses across 6 Spanish open Bibles; downloaded and inspected OCR of Scío 1869, Torres Amat 1894 (OT+NT), Versión Moderna 1893, Besson 1948; ran tesseract (spa) on a Versión Moderna page; spot-compared PDDPT against Biblia Textual 3 (via bolls.life JSON) to check independence.

## 2. Findings log (incremental)

### 2a. Original-language texts and word data (all licenses read on the repo's own LICENSE/README, 2026-10-09)

| Dataset | What it adds beyond TAHOT/TAGNT | License (verified) | Evidence | Verdict |
|---|---|---|---|---|
| **OSHB / morphhb** (Open Scriptures Hebrew Bible) | WLC text + lemma (augmented Strong's) + morphology, OSIS XML, stable per-word ids | Text: WLC public domain; lemma/morph: **CC BY 4.0**, attribution string prescribed: "Original work of the Open Scriptures Hebrew Bible available at https://github.com/openscriptures/morphhb" | https://github.com/openscriptures/morphhb/blob/master/LICENSE.md | READY. Mostly redundant with TAHOT (TAHOT already incorporates OSHB morphology); useful as cross-check and for stable word ids |
| **MACULA Hebrew** (Clear.Bible / Biblica) | Syntax trees (Westminster/Groves), LXX Greek equivalents per Hebrew word, SDBH semantic domains, participant referents, English+Chinese glosses | Clear's data **CC BY 4.0** ("© 2022-2024 Biblica, Inc"). BUT the **SDBH semantic-domain fields (@sdbh, @lexdomain, @coredomain, @contextualdomain) are "©2000-2021 United Bible Societies. Used with permission"** – i.e. NOT covered by CC BY | https://github.com/Clear-Bible/macula-hebrew/blob/main/LICENSE.md | READY for trees, glosses, LXX equivalents, referents; **drop the SDBH fields** (or ask UBS) |
| **MACULA Greek** | Syntax trees (Nestle1904 and SBLGNT), morphology, Clear word senses, semantic frames, participant referents, synonyms, Berean glosses (PD), Cherith glosses (CC BY), N1904↔SBLGNT word mapping | Clear's data **CC BY 4.0**. BUT `@ln`/`@domain` (Louw-Nida via UBS **MARBLE**) are "Used with permission" – NOT CC BY | https://github.com/Clear-Bible/macula-greek/blob/main/LICENSE.md | READY minus `@ln`/`@domain`. Best open source for Greek syntax/discourse data |
| **SBLGNT** (text) | Critical text (2010, Holmes) | **CC BY 4.0 since v1.1 (2022-12-19)**; "Copyright 2010 SBL and Logos". v1.2 (2023-07-10) adds Jn 7:53–8:11 | https://github.com/LogosBible/SBLGNT (README "License") | READY. Note: older sources (MorphGNT README) still point to the old restrictive SBLGNT EULA – the CC BY relicense supersedes it for the text from the LogosBible repo |
| **MorphGNT SBLGNT** (morphology/lemmas) | Tauber's parsing + lemmas on SBLGNT | **CC BY-SA 3.0** (share-alike!) | https://github.com/morphgnt/sblgnt README | WORK: usable commercially, but SA means our derived word-data files must be released BY-SA. TAGNT/MACULA (CC BY) avoid that |
| **Robinson-Pierpont Byzantine 2018** | Byzantine Majority text with parsing, Strong's, apparatus vs NA/ECM; TEI and CSV Unicode | **Public domain** ("All the code and text contained in this folder is in the Public Domain"; GitHub: Unlicense) | https://github.com/byztxt/byzantine-majority-text | READY |
| **Antoniades 1904/1912 Patriarchal text** | The Ecumenical Patriarchate's official NT text (= the text read in Greek Orthodox churches) with Robinson parsing + Strong's | **Public domain** ("Public Domain. Copy freely.") | https://github.com/byztxt/greektext-antoniades | READY. **Valuable for the Orthodox column**: the NT Greek as the Orthodox Church reads it |
| Westcott-Hort 1881 (Robinson parsing) | | Public domain ("Copy freely") | https://github.com/byztxt/greektext-westcott-hort | READY |
| Textus Receptus: Stephanus 1550, Elzevir 1624, Scrivener 1894 | The Greek behind KJV / RV1602 lineage | PD (byztxt repos; no LICENSE file, README says PD for WH/Antoniades; Scrivener/Stephens: check per repo) | https://github.com/byztxt | READY (verify per-repo statement) |
| **Tischendorf 8th** (Sandborg-Petersen, from Clint Yale's text) | Sinaiticus-leaning critical text with morphology + Strong's + lemmas | **Public domain** ("This text and its analysis are in the Public Domain. Copy freely.") | https://raw.githubusercontent.com/morphgnt/tischendorf-data/master/word-per-line/2.8/README.txt | READY |
| **Nestle 1904** (biblicalhumanities) | Base text of MACULA Greek | Text PD (Diego Santos' transcription declared PD); morphology **CC0**; XML markup **CC BY-SA 4.0**; glosses from Berean (now PD) | https://github.com/biblicalhumanities/Nestle1904 (per-folder READMEs) | READY (use morph/xhtml to avoid SA; or take it via MACULA, CC BY) |
| SR GNT (Center for NT Restoration, Bunning) | Statistical-restoration text from early MSS | **CC BY 4.0** (GitHub license) | https://github.com/Center-for-New-Testament-Restoration/SR | READY (niche) |
| **TVTMS** versification | Maps Eng/Heb/Lat/Grk traditions | CC BY (file name and repo description) | STEPBible-Data/Versification | READY (already known) |
| **TFLSJ** (STEPBible) | Full LSJ entries for every Bible-relevant Greek word (incl. LXX), formatted | **CC BY** (file name "STEPBible.org CC BY") | https://github.com/STEPBible/STEPBible-Data/tree/master/Lexicons | READY. Not in our current notes: gives full LSJ depth, not just the brief TBESG |
| TTESV (STEPBible ESV tagging) | | **CC BY-NC** + ESV is © | same repo, Tagged-Bibles | AVOID |

**Lexicons**
| Lexicon | Status (verified) | Evidence |
|---|---|---|
| Abbott-Smith, *Manual Greek Lexicon of the NT* (1922) TEI | "is in the public domain" (complete since v1.0, 2017) | https://github.com/translatable-exegetical-tools/Abbott-Smith |
| Dodson Greek-English lexicon | **CC0** / "in all of its forms, in the public domain" | https://github.com/biblicalhumanities/Dodson-Greek-Lexicon |
| BDB (outline + Strong's links, OSHB) | Markup **CC BY 4.0**; BDB and Strong's text PD | https://github.com/openscriptures/HebrewLexicon |
| BDB unabridged (Eliran Wong, marvel.bible) | "Public domain document" | https://github.com/eliranwong/unabridged-BDB-Hebrew-lexicon |
| LSJ (Perseus lexica repo) | **CC BY-SA 4.0** (SA) – prefer STEPBible TFLSJ (CC BY) | https://github.com/PerseusDL/lexica |
| Strong's | Text PD (1890); OSHB/STEP derivatives CC BY | (memory for the openscriptures/strongs repo; its README did not resolve) |
| Spanish-language lexicon | No open Spanish Greek/Hebrew lexicon found yet → see §2f | |

### 2b. Spanish – modern open Bibles on eBible.org (verified on each edition's copyright page, 2026-10-09; eBible list: https://ebible.org/Scriptures/translations.csv)

Key verses compared locally (samples/bible-66/*_vpl): Jn 1:1, Jn 6:53, Mt 16:18, Rom 3:28, Lk 1:28, 1 Co 11:24, Is 7:14.

| ID | Title | Books | License (verified) | Character | Verdict |
|---|---|---|---|---|---|
| **spapddpt** | **Palabra de Dios para ti – Biblia Latinoamericana Textual** (Francisco y Joyce Liévano; © 2020 Asociación Bíblica Latinoamericana / Latinamerican Textual Bible Foundation) | 66 | **CC BY 4.0** (https://ebible.org/spapddpt/copyright.htm). Publisher blurb (Amazon, read via Chrome): "se puede copiar libremente sin regalías … ni siquiera sea publicada en un libro para la venta". A search snippet claims the print edition says CC BY-SA 4.0 – not verified; either way commercial use is allowed | Literal ("lo más textual posible"), Latin-American "ustedes", from **NA27 + BHS**; brackets for supplied words ("[las] puertas del Hades"), Hebrew divine names (Yavé, ʼAdonay). Jn 6:53 "Si no comen la carne del Hijo del Hombre y beben su sangre, ustedes no tienen vida." | **READY – best modern literal Spanish under an open license found.** Strong candidate for the default modern es-419 reading text. Check: brackets/ʼAdonay rendering in UI; independence from the © Biblia Textual: I compared Mt 16:18, Rom 3:28, Jn 6:53–54 with BTX3 (bolls.life JSON) – wording clearly differs (BTX3: "os digo", "mastica", "Sostenemos entonces"; PDDPT: "les digo", "come", "Concluimos, pues") |
| **spabes** | La Biblia en Español Sencillo (Irma Flores, AudioBiblia.org) | 66 | Copyright page of the 2026 edition: **"Public Domain"** (https://ebible.org/spabes/copyright.htm). Older details page: "© 2018, 2019 AudioBiblia.org/Irma Flores … Creative Commons Reconocimiento 4.0" (https://ebible.org/bible/details.php?id=spabes) | Simple modern Latin-American Spanish; Is 7:14 "una joven está embarazada" (dynamic, theologically loaded choice) | READY (secondary "easy" text). Not neutral enough as the default |
| **spabll** | Santa Biblia libre Latinoamericano | 66 + **16 DC** | **Public Domain**; marked "borrador de traducción" | Latin-American adaptation of BLM ("ustedes") | READY-with-caveat: draft. **Only PD Spanish full Bible with deuterocanon in "ustedes" Spanish** |
| spablm | Santa Biblia libre para el mundo (D. Williams & M. P. Johnson) | 66 + 15 DC | Public Domain; draft | Peninsular "vosotros" | READY (already known); draft |
| **spavbl** | Versión Biblia Libre (J. Gallagher & S. Barrios de Ávila) | 66 | **CC BY-SA 4.0** | Very free/paraphrastic (Jn 6:53 "no podrán vivir realmente") | Not recommended for doctrine (paraphrase + SA) |
| sparvg | Reina Valera Gómez | 66 | © Humberto Gómez: "Totalmente prohibido … reproducirlo con fines de lucro"; free only for free distribution without changes. CrossWire conf says CC BY-NC-ND 4.0 | KJV-only revision of RV1909 | **AVOID** (non-commercial) |
| spav1602p | Valera 1602 Purificada | 66 | © Iglesia Bautista Bíblica de la Gracia; "Prohibida su reproducción con fines de lucro" | KJV-only revision | **AVOID** |
| spaLBLA, spanblh | LBLA, NBLH | | © Lockman, not redistributable | | PERMISSION |

### 2c. Spanish – historic public-domain Bibles (text located and OCR quality tested by me)

**Catholic**

- **Torres Amat — best route found: Barcelona, Subirana Hermanos, 1894, "Segunda edición corregida con esmero", 2 vols (OT incl. deuterocanon + NT)**, scanned by Internet Archive in 2026: https://archive.org/details/lasagradabiblia0000dfel (OT, 1,152 pp, includes Tobías etc.) and https://archive.org/details/lasagradabiblia0000dfel_f1h6 (NT). I downloaded both `_djvu.txt` OCR files (samples/bible-66/ta_dfel_djvu.txt, ta_f1h6_djvu.txt) and read Gn 1, Tb 1, Jn 1 and Jn 6: **OCR is very clean** (modern type; errors are few and mechanical: "s." for "5.", "ast" for "así", "Ja" for "la"; footnote markers * ° ” attached to words; footnotes at page foot, hyphenation at line ends). Verse numbers are inline ("54. Jesús, empero, les dijo…") so verse segmentation is reliable; numbering is **Vulgate** (Jn 6:54 = modern 6:53) → map with TVTMS. The notes ("ilustrada con notas") must be stripped (they are separable blocks at page foot). Spelling is 1890s ("crió", "á") – keep as-is or modernise accents only (like CrossWire did for RV1865). Verdict **WORK (M)**: script: page-split → drop running heads/footnotes → join hyphens → split on `^\d+\. ` → validate verse counts per chapter against the Vulgate versification → LLM-assisted correction of residual OCR errors with human spot checks. Torres Amat died 1847 → PD everywhere. This gives **the only complete Catholic Spanish Bible with deuterocanon that we can legitimately publish**.
  - Other scans: 1823–25 first edition (Madrid, Amarita; archive A030134–A030142, bub_gb_* volumes; also a user upload combining parts with OCR: https://archive.org/details/sagrada-biblia-torres-amat-completa), Paris 1836 (17 vols with Latin), Montaner y Simón 1883–84 (Doré, AI156–AI159; https://archive.org/details/torresamatbiblia), Stampley 1965 US reprint (lending-only, avoid).
  - **Caution on ready-made digital "Torres Amat" texts** (bibliatodo.com "Biblia Torres Amat 1825", theWord/e-Sword/MySword modules): they use modernised wording ("creó", not the 1894 "crió"), the theWord file is `.ont` (66 books only, no deuterocanon), and a Catholic e-Sword collection lists "Biblia Torres-Amat **Actualizada – Terranova Editores**" – i.e. at least one circulating digital text is a modern publisher's updated edition, likely ©. Provenance unknown → **do not copy**; OCR our own from the 1894 scans. Evidence: https://theword-modules.com/spanish/biblia-torres-amat-1798/ ; https://eswordcatolico.wordpress.com/ ; https://www.bibliatodo.com/la-biblia/Torres-amat/genesis-1 (Gn 1:1 "creó").
- **Scío de San Miguel (1790–93; 2nd ed. 1797)**: NT already in CrossWire `SpaScioNT` (PD, "obra original digitalizada", released 2026-03-22). **No complete digital OT text found anywhere** (searched archive.org, GitHub, CrossWire main/beta/attic, eBible, Gutenberg, Wikisource via web search). Routes:
  - Protocanonical OT: Bible-society single-volume edition **Cambridge, C. J. Clay, 1869** (no notes, no deuterocanon): https://archive.org/details/labibliaelanti00scio – I tested the OCR (scio1869_djvu.txt): good quality (Jn 1:1, Jn 6:54, Nm 5 read cleanly; isolated errors like "Q)je", "\'^erbo"). Also London, Bagster 1797: https://archive.org/details/labibliaoelantig00scio .
  - Deuterocanon: only in Catholic editions with Latin in parallel and notes: Barcelona 1852 (https://archive.org/details/lasantabiblia00migugoog), Madrid Gaspar y Roig 1854 (https://archive.org/details/lasantabibliatr00migugoog, Cervantes Virtual also has it: https://www.cervantesvirtual.com/obra/la-santa-biblia-2/), Madrid 1807 Ibarra multi-volume (labibliavulgatal01scio…), a 6-PDF bilingual set (https://archive.org/details/biblia-vulgata-bilingue-felipe-scio-de-san-miguel_20241231). Two-column Latin/Spanish with notes → harder OCR.
  - Verdict **WORK (L)**. Recommendation: Torres Amat first (one Catholic Spanish Bible is enough for launch); Scío later, if ever.

**Protestant**

| Edition | Best digital source | License (verified) | Quality | Verdict |
|---|---|---|---|---|
| Reina-Valera 1909 | eBible spaRV1909; CrossWire SpaRV; also USFM CC0 at https://github.com/palabra-de-dios/Reina-Valera-1909 | PD | Clean | READY (known) |
| **Reina-Valera 1865** (Valera 1602 revised, NY 1865) | CrossWire `SpaRV1865` (source https://github.com/MC1171611/valera1865 ; "con arreglos ortográficos" = only accent rules updated, 2018–19, corrected "to match the final text sent to printer"); also USFM CC0 at https://github.com/palabra-de-dios/Reina-Valera-1865 | PD (CrossWire conf); CC0 (GitHub) | Clean, full 66 | READY. Useful as the 19th-c. Protestant text |
| Reina-Valera 1858 NT | CrossWire `SpaVNT`; Gutenberg #5878 | PD | | READY (NT only) |
| Reina-Valera 1862 NT | Project Gutenberg #5879 (https://www.gutenberg.org/ebooks/5879) | PD (Gutenberg: copyright False) | | READY (NT only); full 1862 Bible not found digitally |
| **Biblia del Oso 1569** (Casiodoro de Reina) | **https://github.com/palabra-de-dios/Biblia-del-Oso-1569 — USFM, CC0**, original spelling with long ſ, tildes (ã, ẽ) and ¶ marks ("ENEL principio ya era la Palabra: y la Palabra era acerca de Dios"). 66-book files; **Esther and Daniel files are empty (88/92 bytes) and the 1569 apocrypha are not included** | CC0 (GitHub license); text PD | Diplomatic transcription, good | READY for historical display (66 books minus Est/Dan); the 1569 deuterocanon would need OCR from the facsimile (archive.org `BibliaDeCasiodoroDeReina1569`, `la-biblia-del-oso`; OCR there is poor because of 16th-c. type) |
| Valera 1602 | Gutenberg has only Matthew (#5877). GitHub `dckire/reyna-valera` (HTML, no license, unclear which text). No verified complete diplomatic transcription found | | | WORK (L) via facsimile OCR; low priority (1865 covers it) |
| Enzinas NT 1543, Pérez de Pineda NT 1556 | Not found as digital text (only facsimiles/scholarly editions; search snippets only) | | | BLOCKED/low priority (historical curiosities) |
| SpaTDP (Mt–Rom, "Traducción de dominio público", based on WEB) | CrossWire | PD | partial | Not useful |

**Other PD-era Spanish translations (found and assessed)**

| Edition | Status / reasoning | Source | Verdict |
|---|---|---|---|
| **Versión Moderna (H. B. Pratt), New York: American Bible Society, 1893** (from Hebrew/Greek; Protestant) | Pratt d. 1912 → PD everywhere; US pre-1931 | Scan + OCR: https://archive.org/details/lasantabibliacon00prat (Princeton). OCR tested (vm1893_djvu.txt): **mediocre** ("cdacl", "liija", "Jerusaleni") → would need re-OCR (tesseract spa on page images) + correction. Digital e-Sword "VM 1929" modules exist but say "uso personal / prohibida la venta" and have no rights-holder authority → don't copy | WORK (M) after the tesseract test in §2f; NT also scanned separately (New York, ABS 1915: https://archive.org/details/elnuevotestament00unse_4). Low priority (RV1909 already covers the Protestant reading text) |
| **Pablo Besson NT** (Buenos Aires; Swiss Baptist in Argentina; from the Greek "texto común") | Besson d. 1932 → PD in Argentina since 2003 (life+70) and Spain since 2013 (life+80). 1st ed. 1919 → PD in US (pre-1931). **2nd ed. 1948** (Junta de Publicaciones de la Convención Evangélica Bautista; preface by Dante Daglio says it is "en muchos pasajes una nueva traducción" from Besson's own corrections) → in the **US probably restored by URAA until 2043** (Argentine work still protected in Argentina on 1 Jan 1996; my reasoning, not a lawyer's) | Only the 2nd ed. is scanned: https://archive.org/details/nuevo-testamento-de-pablo-besson-i (Public Domain Mark by uploader; OCR present). 1919 ed.: no scan found (one is privately owned per https://lamejortraducciondelabiblia.blogspot.com/2019/07/nuevo-testamento-de-pablo-besson-1.html) | WORK (M) for a Baptist/Argentine-flavoured NT; US risk on the 1948 text. Nice-to-have, not core |
| **Jünemann** (Chilean Catholic; NT 1928 from Greek; OT from the **Septuagint**, published posthumously 1992) | Jünemann d. 1938 → his rights expired in Chile/Argentina (2008) and Spain (2018). NT 1928 → PD in US too. **OT/LXX first published 1992** → US: unpublished pre-1978 work published 1978–2002 is protected **until at least 2047** (17 U.S.C. §303(a)); plus the 1992 editors' (Centro de ex alumnos del Seminario Conciliar de Concepción) editorial layer. The archive.org PDF (https://archive.org/details/biblia-padre-guillermo-junemann) appears to be a copy of the 1992 edition → don't use | Sources: https://es.wikipedia.org/wiki/Biblia_de_J%C3%BCnemann (snippet), http://www.scielo.org.co/scielo.php?script=sci_arttext&pid=S0120-131X2020000200119 | NT 1928: WORK (find a 1928 scan – none found yet). OT (LXX in Spanish!): PERMISSION/BLOCKED for a US-hosted site until 2047 → pass to the LXX/deuterocanon researcher |
| Petisco (base of Torres Amat) | PD (d. 1800) | archive.org `sagrada-biblia-jose-miguel.-petisco` is only a .mobi of unknown provenance | Covered by Torres Amat |

**20th-century Catholic Spanish Bibles – copyright terms (death dates via search results; verify on the Wikipedia/RAH pages listed)**

| Bible | Translators (death) | Argentina (life+70, joint work → last survivor) | Spain (life+80 for deaths before 7-12-1987) | US (foreign work, URAA: 95 years from publication) | Verdict |
|---|---|---|---|---|---|
| Nácar-Colunga (BAC, 1944) | Eloíno Nácar Fuster (d. 10-06-1948), Alberto Colunga (d. 22-04-1962) | 2033 | 2043 | 2040 (1944+95) | PERMISSION (BAC) |
| Bover-Cantera (BAC, 1947) | José M.ª Bover (d. 1954), Francisco Cantera Burgos (d. 1978) (memory, unverified) | 2049 | 2059 | 2043 | PERMISSION (BAC) |
| Straubinger / Biblia Platense (1944–51) | Juan Straubinger (d. 1956) | **PD from 2027-01-01** (already in our notes) | 2037 | **~2039–2047 (URAA, 95 years from each volume's publication)** – new point, not in our notes | Even after 2027, a US-hosted site serving US readers is exposed. Options: wait; or serve it geo-limited from a non-US host (legal advice needed). CrossWire's "Public Domain" label is wrong for Spain/US |
Sources: https://en.wikipedia.org/wiki/Elo%C3%ADno_N%C3%A1car_F%C3%BAster ; https://dbe.rah.es/biografias/4695/alberto-colunga-cueto ; URAA rule: 17 U.S.C. §104A (memory of the statute; verify).

### 2d. English

Open/PD editions on eBible (copyright pages read 2026-10-09; list: https://ebible.org/Scriptures/translations.csv)

| Use | Edition | Status (verified) | Notes |
|---|---|---|---|
| Modern default (Protestant canon) | **BSB** (engbsb) | PD since 2023-04-30 ("Licensing is not required for any use", https://berean.bible/licensing.htm) | Also Berean Interlinear glosses PD |
| Modern with deuterocanon | **WEB / WEB Updated / WEB Catholic** (engwebp, engwebu, eng-web-c) | PD; "World English Bible" is a trademark: if you change the text don't call it WEB (https://ebible.org/eng-web-c/copyright.htm) | eng-web-c = Catholic book order |
| Catholic traditional | **Douay-Rheims 1899** (engDRA) | PD | Already in use |
| Anglican/historic with Apocrypha | **Revised Version 1885/1895 with Apocrypha** (eng-rv) | PD ("Copy freely", https://ebible.org/eng-rv/copyright.htm) | **Not in our notes yet**: the Anglican tradition's own late-19th-c. revision, with Apocrypha |
| KJV | eng-kjv (with Apocrypha), engkjvcpb (Cambridge Paragraph Bible 1873, with Apocrypha) | PD outside the UK. **In the UK the KJV is under Crown letters patent** (printing/importing *printed* copies needs permission; eBible's note, https://ebible.org/engkjvcpb/copyright.htm) | Web display in the UK is generally treated as fine; note only |
| Others | ASV 1901, Geneva 1599, YLT, Darby, Webster, Tyndale NT, JPS 1917 Tanakh, Brenton LXX, LXX2012 | PD | |
| Avoid/© | NET (© Biblical Studies Press – commercial use needs permission, https://netbible.com/copyright/), LSV (© 2020 Covenant Press; its open license not verified by me), FBV (© Gallagher, CC BY-SA per eBible), T4T, ULB (CC BY-SA) | | |

**Catholic English beyond DRA – copyright checks (Stanford Copyright Renewal Database, queried via its JSON API, 2026-10-09: https://exhibits.stanford.edu/copyrightrenewals)**

| Edition | Renewal record found? | Status |
|---|---|---|
| **Knox** NT (US ed. Sheed & Ward, pub. 25-Oct-1944) | **Yes**: R525394, renewed 13-Mar-1972, claimant Sheed & Ward | © in US (to 2040). **UK/EU: Knox died 1957 → public domain from 2028-01-01** (life+70; memory for the death date, verify). Could be served geo-limited later; not now |
| **Spencer NT** (1937) | **Yes**: R368882, renewed 28-Sep-1965 (Dominican Fathers) | © |
| **Kleist–Lilly NT** (1954) | **Yes**: RE142957, renewed 1982 (Macmillan/Bruce) | © |
| Confraternity OT volumes (Genesis 1948, Sapiential 1955, Prophets 1961) | **Yes** (R628212, RE154476, RE482567) | © |
| **Confraternity NT 1941** (revision of Challoner-Rheims) | **No renewal found** — I searched by title ("New Testament", "Challoner-Rheims"), by claimant (Confraternity of Christian Doctrine; St. Anthony's Guild, which renewed many of its 1941 titles in 1969 but not this one) | **Probably PD in the US** (renewal was due 1968–69). Not proven: check the printed CCE renewal lists for 1968–1969 (books) for "New Testament"/"Confraternity" before relying on it. Outside the US it is a corporate/anonymous work: Argentina 50 years from publication (Ley 11.723 art. 8, memory) → PD; Spain anonymous 80 years (pre-1987 regime, memory) → PD since 2022. A transcription of unknown provenance exists at http://haydock1859.tripod.com/confraternity/index.html (discussed at http://catholicbibles.blogspot.com/2015/09/confraternity-nt-online.html). Verdict: WORK + verification; gives a readable 20th-c. Catholic NT |
| RSV-CE, NABRE, NJB, ESV-CE | © (NCC / USCCB / DLT / Crossway) | PERMISSION |
| CPDV (Ronald L. Conte Jr., 2009) | Self-declared public domain (not verified on a license page) | Private, non-approved translation by a controversial lay author; **not recommended** for a neutral reference site |

### 2e. Bible APIs (note only – none needed if we self-host PD/CC texts)

| API | Terms (read 2026-10-09) | Fit |
|---|---|---|
| **API.Bible** (American Bible Society) | Free "Starter" plan is non-commercial and requires a visible link to api.bible; commercial use only for the copyrighted Bibles whose commercial licenses you add to a paid plan; cached content must be refreshed at least every 30 days; web apps must implement **FUMS** usage tracking (https://api.bible/terms-and-conditions; pricing per search snippet: Pro from US$29/month + per-translation fees, unverified) | Only relevant if we later license RVR1960/NVI/etc. Tracking + 30-day cache rule clash with a static reader |
| **YouVersion Platform** (new, 2025–26) | Read the agreement via Chrome (samples/bible-66/yv_terms.txt): paid apps are allowed but must "conspicuously … advise Users that the YouVersion Bible App is provided at no cost"; forbids services that "replicate or compete with YouVersion"; and "**We are not providing You rights in biblical works … which You must obtain from their respective owners**" (https://platform.youversion.com/terms) | Possible embed route for copyrighted Spanish Bibles, but the rights still come from each publisher; the "compete" clause is a risk for a Bible reader |
| bible-api.com (Tim Morgan) | Free, "don't abuse my server", 15 requests/30 s, no Spanish, open source (self-hostable) | Not needed |
| getBible / get.bible | Open-source, serves CrossWire/PD texts (not checked in depth) | Not needed |
| bolls.life | Code GPL-3.0 (https://github.com/Bolls-Bible/bain); serves many **copyrighted** translations without a visible licensing basis | **Avoid** as a source for copyrighted texts |

### 2f. More findings (Spanish)

- **es.wikisource already has part of Torres Amat (Paris 1836 edition, with notes) proofread from DjVu**: category https://es.wikisource.org/wiki/Categor%C3%ADa:La_Sagrada_Biblia → volumes III, VIII, XIII (Gospels), XIV, XV (epistles), XVI. Read via Chrome: https://es.wikisource.org/wiki/La_Sagrada_Biblia_(XIII)/Juan has the full text of John with note markers ("1 En el principio [1] era ya el Verbo [2], y el Verbo estaba en Dios [3]…"). Site license CC BY-SA 4.0 (footer); the underlying 1836 text is PD and a faithful transcription adds no copyright in the US. Use: **cross-check for our 1894 OCR** (different edition, so differences must be expected), or as a second Torres Amat witness for the NT. (The Wikimedia API rate-limited me – HTTP 429 – so I checked pages through the browser only.)
- **Spanish word-level data (Spanish ↔ Hebrew/Greek)**: unfoldingWord's Latin-American gateway project (Fundación Idiomas Puentes) publishes **"Texto Puente Literal" (es-419 TPL/GLT), word-aligned to UHB/UGNT (Strong's, lemma, morphology on every Spanish word), CC BY-SA 4.0** – https://git.door43.org/es-419_gl/es-419_glt (manifest: rights CC BY-SA 4.0, version 41, modified 2026-05-25). **But only 6 books are actually there (Rut, Ester, Jonás, Nehemías, Tito, 3 Juan)**; the older es-419_obt repo lists 66 books in its manifest but holds only 4 files. Useful later as a model/partial interlinear; not a full solution. Companion CC BY-SA resources: es-419 **Palabras de Traducción** (key-term dictionary), Notas de Traducción, Academia de Traducción (Door43 catalog, lang=es-419).
- Hands-on OCR test (**Versión Moderna 1893**, page n300 of https://archive.org/details/lasantabibliacon00prat): archive.org's old OCR is poor, but **re-OCR with tesseract 5 `-l spa --psm 1` on the 1737×2745 page image is near-perfect** (samples/bible-66/vm_p300_tess.txt: "9 En seguida, llamando el rey á Siba, siervo de Saúl, le dijo: Todo cuanto era de Saúl…"; only stray marks like "1 () ?" for a drop-cap chapter number). So bad IA OCR is not a blocker: re-OCR page images. Page images are fetchable one by one at `https://archive.org/download/<id>/page/n<N>.jpg`.

## 3. Recommended canonical stack (es/en)

**Reading texts (what the in-site reader shows by default)**

| Slot | Spanish | English |
|---|---|---|
| Default modern (66 books) | **Palabra de Dios para ti – Biblia Latinoamericana Textual** (CC BY 4.0, literal, NA27/BHS, Latin-American) — new find | **BSB** (PD) |
| Classic Protestant | **Reina-Valera 1909** (PD); optional RV1865 (PD/CC0) | **KJV** (PD outside UK) |
| Catholic with deuterocanon | **Torres Amat, Barcelona 1894** — our own OCR edition (WORK M); meanwhile **Biblia libre para el mundo / Latinoamericano** (PD, draft, has DC) as stopgap | **Douay-Rheims 1899** (PD) + **WEB Catholic** (PD) for modern English |
| Anglican / with Apocrypha | (RV1909 has none; Oso 1569 apocrypha would need OCR) | **Revised Version 1895 with Apocrypha** (PD) |
| Orthodox | (no Spanish Orthodox Bible found; LXX-based Jünemann OT is © in the US until 2047) | Brenton LXX (PD) + **Antoniades Patriarchal Greek NT** for the Greek |
| Historical witness (optional) | Biblia del Oso 1569 diplomatic (CC0, 64 books), Scío NT 1797 (PD) | Geneva 1599, Tyndale NT |

**Word data**: keep STEPBible TAHOT/TAGNT (CC BY) as the spine; add **MACULA Greek/Hebrew (CC BY)** for syntax trees, participant referents and Hebrew→LXX equivalents — **minus the UBS-licensed fields** (`@ln`, `@domain`, SDBH fields); TFLSJ (CC BY) for full LSJ entries; Abbott-Smith (PD) and Dodson (CC0) as extra English lexicons; BDB (PD). Alternate Greek texts all PD/CC BY: Byzantine RP2018, Antoniades, Tischendorf 8, WH, N1904, SBLGNT (CC BY since 2022). **Avoid** MorphGNT-SBLGNT morphology (CC BY-SA) unless we accept share-alike for our word files; avoid TTESV (NC). TVTMS (CC BY) maps Vulgate numbering for Torres Amat/Scío/DRA.

Attribution page must add: OSHB, MACULA (Biblica/Clear), SBL/Logos (SBLGNT), Asociación Bíblica Latinoamericana (PDDPT), Biblical Humanities (N1904 XML if used), plus the existing STEP/OpenGNT/WEB notes.

## 4. Creative alternatives and workarounds found
1. **A modern open Spanish Bible exists**: PDDPT (CC BY 4.0) — avoids the RVR1960/NVI permission problem for the modern Spanish text. Publisher states it may be copied "sin regalías … ni siquiera sea publicada en un libro para la venta".
2. **Catholic Spanish with deuterocanon via OCR of a clean 1894 edition** whose IA OCR is already ~99% — not the 1823 first edition (long notes, older type). Wikisource's partial 1836 transcription can be used to cross-check.
3. **Re-OCR beats archive.org's old OCR**: tesseract 5 on IA page images (`/page/nN.jpg`) gave near-perfect text where IA's djvu text was poor (Versión Moderna).
4. **Do not copy "ready" digital Torres Amat texts** (bibliatodo, e-Sword/theWord): at least one circulating file is a modern © "actualizada" edition.
5. **Patriarchal (Antoniades) Greek NT, PD with full parsing** — a way to show "the Orthodox Church's own NT text" without inventing anything.
6. **Renewal-database route** worked: Knox/Spencer/Kleist-Lilly confirmed renewed (©); Confraternity NT 1941 shows **no renewal** → probably US PD (needs one more CCE check).
7. **Calendar watch**: Straubinger (Argentina PD 2027-01-01, but see US/URAA), Knox (UK PD 2028-01-01), Nácar (d. 1948) does not free Nácar-Colunga (Colunga d. 1962).

## 5. Blockers and what was tried
- **No complete digital Scío OT** anywhere (archive.org, GitHub, CrossWire main/beta/attic/Xiphos/Wycliffe/STEP, eBible, Gutenberg, Wikisource). Only route: OCR (1869 Bible-society edition for protocanon; Latin/Spanish Catholic editions for deuterocanon). L effort.
- **Spanish Orthodox/LXX Bible**: Jünemann's LXX OT (pub. 1992) is US-protected until 2047 by §303(a) (my reading) — PERMISSION from the 1992 publisher if wanted.
- **Copyrighted modern Spanish Catholic Bibles** (Nácar-Colunga, Bover-Cantera, BJ, Biblia de América, Libro del Pueblo de Dios): permission only (BAC / Desclée / Verbo Divino / San Pablo). Not needed for launch given Torres Amat + PDDPT.
- **Full Spanish word alignment**: none open and complete; Texto Puente Literal (CC BY-SA) has only 6 books aligned; OpenGNT Spanish glosses (CC BY-SA, already known) remains the only full NT option.
- **Enzinas 1543 / Pérez de Pineda 1556 / Valera 1602 full**: no transcription found; facsimile-only.
- Wikimedia API rate-limited me (HTTP 429), so Wikisource coverage was checked only through 3 browser page views.

## 6. Verified by me vs. from snippets/memory
**Verified on the primary page/file**: all licenses in §2a (repo LICENSE/README); eBible copyright pages for spapddpt, spabes, spabll, spablm, spavbl, sparvg, spav1602p, englsv, engnet, eng-rv, engkjvcpb, eng-web-c, engwebu; CrossWire confs (SpaRV1865, SpaScioNT, SpaRVG, SpaPlatense, SpaTDP; STEP LXX_th, SBLG_th, SRGNT_sb); GitHub license of Biblia-del-Oso-1569/Reina-Valera-1865/1909 repos (CC0, via gh api); archive.org metadata and OCR samples (Scío 1869, Torres Amat 1894 OT/NT, Versión Moderna 1893, Besson 1948 preface); Door43 TPL manifest + LICENSE; Stanford renewal records (Knox R525394, Spencer R368882, Kleist-Lilly RE142957, Confraternity OT volumes; absence for Confraternity NT 1941); API.Bible terms; YouVersion Platform agreement text; bible-api.com page; Amazon blurb of PDDPT (rights statement and base texts); BTX3 vs PDDPT 4-verse comparison.
**From search snippets (not opened)**: Nácar and Colunga death dates; Jünemann publication history; Besson biography; PDDPT print edition "CC BY-SA" claim; API.Bible pricing.
**Memory / my legal reasoning (verify)**: Bover (d. 1954) and Cantera (d. 1978) dates; Knox death 1957; URAA restoration analysis for Straubinger, Besson 1948, Nácar-Colunga; 17 U.S.C. §303(a) for Jünemann OT; Argentina art. 8 (anonymous/corporate works 50 years) and Spain anonymous-work term for the Confraternity NT; CPDV's public-domain dedication; LSV license; BLM being derived from WEB. Side note for the LXX researcher (memory, reasoning only): Rahlfs died 1935 → his 1935 *Septuaginta* (not the 2006 Hanhart revision) is PD in Germany since 2006, and in the US its URAA-restored term would end 2030 (PD from 2031-01-01). STEP's `LXX_th` SWORD module is **non-commercial** (Amato/LXXM) — avoid.

## 7. Items for a mechanical verification pass
1. https://ebible.org/spapddpt/copyright.htm and the PDDPT print colophon (Amazon "Look inside" / publisher) — confirm CC BY 4.0 vs BY-SA 4.0, and that ABL (Asociación Bíblica Latinoamericana) is the rights holder.
2. https://ebible.org/spabes/copyright.htm vs https://ebible.org/bible/details.php?id=spabes — confirm which applies to the 2026 text (PD vs CC BY 4.0).
3. CCE renewal volumes for 1968 and 1969 (books, archive.org `catalogofcopyrig3221lib…` series or HathiTrust) — search "New Testament", "Confraternity", "St. Anthony Guild" to confirm the 1941 Confraternity NT was not renewed.
4. https://archive.org/details/lasagradabiblia0000dfel and `_f1h6` — confirm title pages (Barcelona, Subirana, 1894, 2nd ed.), and that all deuterocanonical books + Esther/Daniel additions are present (grep TOBÍAS/JUDIT/SABIDURÍA/ECLESIÁSTICO/BARUC/MACABEOS).
5. https://github.com/palabra-de-dios/Biblia-del-Oso-1569/blob/main/LICENSE — confirm CC0 text; note Esther/Daniel files are empty.
6. https://github.com/Clear-Bible/macula-greek and macula-hebrew — list exactly which attributes come from MARBLE/SDBH ("used with permission") so they are stripped.
7. https://exhibits.stanford.edu/copyrightrenewals — renewal R525394 (Knox NT 1944); also check Knox OT (1948–50) renewals.
8. Wikipedia/RAH pages for Bover (d. 1954) and Cantera Burgos (d. 1978); Ronald Knox death date (1957).
9. https://es.wikisource.org/wiki/Categor%C3%ADa:La_Sagrada_Biblia — list which Torres Amat 1836 books are fully proofread.
10. https://git.door43.org/es-419_gl/es-419_glt — re-check book count (6 aligned books on 2026-10-09).
11. https://api.bible/terms-and-conditions and pricing page — confirm commercial plan cost and FUMS requirement.
12. https://github.com/byztxt/greektext-scrivener and greektext-stephens — confirm the PD statement per repo.
