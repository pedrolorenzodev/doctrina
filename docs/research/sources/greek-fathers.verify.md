_Report from the overnight source research of 2026-10-09 (agent-written; synthesis in `../sources.md`). Paths like `samples/…` refer to `~/Desktop/dev/doctrina-research-2026-10-09/samples/`, outside the repo._

# greek-fathers: mechanical verification (2026-10-09)

Method: curl/gh API, CDP Chrome (Wikisource history, Google Books, Stanford, todocoleccion, el.wikisource), archive.org metadata+djvu. Samples/evidence in samples/greek-fathers/verify/. No logins, no forms.

## 1. OGC corpus_catalog.tsv (3,909 works; fetched raw) — CONFIRMED, with a correction to the report
Overall correction status: not-ocr 2497, auto-corrected 888, raw-ocr 395, manual 129. Licences: CC-BY-SA-4.0 2421, PD 1233 (our OCR of PD scans), CC-BY-4.0 234.
Key works (source | license | correction | tokens):
- papias.fragmenta: cgpg | CC-BY-4.0 | manual | 708
- melito-apologetics.fragmenta: cgpg | CC-BY-4.0 | auto | 931; melito.fragmenta: dfhg | CC-BY-SA | not-ocr | 23
- basilius-theology.de-spiritu-sancto / adversus-eunomium-libri-5 / asceticon-magnum (2) / regulae-morales: ocr | PD | auto-corrected | 23.8k / 43.4k / 33.8k+27.2k / 26.7k  (report said "needs proofreading": they are auto-corrected, not raw)
- cyrillus-scr-eccl.catecheses-ad-illuminandos-1-18 / procatechesis / mystagogiae-1-5-sp: ocr | PD | auto-corrected | 72k / 2.6k / 7.7k
- gregorius-nazianzenus.epistulae-theologicae: ocr | PD | auto | 17k; carmina-de-se-ipso / dogmatica / quae-spectant-ad-alios: ocr | PD | auto
- gregorius-nyssenus.contra-eunomium (178,664) / oratio-catechetica-magna / de-vita-mosis: ocr | PD | auto-corrected
- joannes-chrysostomus.in-matthaeum-homiliae-1-90: ocr | PD | MANUAL | 322k (only manual Chrysostom); de-sacerdotio-lib-1-6, in-joannem 1-88, in-hebraeos 1-34: ocr | PD | auto
- cyrillus-theology.commentarii-in-joannem: ocr | PD | auto | 179k; **cyrillus-theology.quod-unus-sit-christus: ocr | PD | RAW-OCR | 18k**
- theodoretus.eranistes: ocr | PD | auto | 52k; historia-ecclesiastica / historia-religiosa: first1k | CC-BY-SA | not-ocr
- athanasius-theology.vita-antonii, epistulae-quattuor-ad-serapionem: ocr | PD | auto
- epiphanius.ancoratus + panarion: first1k | CC-BY-SA | not-ocr (190k tokens)
- clemens-alexandrinus protrepticus/paedagogus: first1k; stromata: perseus (161k) — all CC-BY-SA, not-ocr
- origenes.contra-celsum: first1k | CC-BY-SA | not-ocr
- hippolytus-of-rome.commentarii-in-danielem: pta | CC-BY-4.0 | not-ocr
- pseudo-dionysius-areopagita (de-divinis-nominibus, caelesti/ecclesiastica hierarchia, mystica-theologia, epistulae): cgpg | CC-BY-4.0 | **RAW-OCR** (all five)
- gregorius-palamas.homiliae (117,841) + confessio-fidei: cgpg | CC-BY-4.0 | **RAW-OCR**
- photius.amphilochia: cgpg | manual (214k); photius.bibliotheca: ocr | PD | auto (154k); photius mystagogy: NOT in catalog
- symeon-thessalonicensis.* (16 works): cgpg | CC-BY-4.0 | manual (+1 auto) — confirms READY
- maximus the Confessor: only maximus-theology.fragmentum-ex-libro-de-materia (cgpg, auto, 3k) — Mystagogy/Ambigua/Pyrrhus ABSENT (report right)
- John of Damascus: NO Exact Exposition and NO Three Treatises on Images under joannes-damascenus slugs (only minor works; some raw: sacra-parallela 109k raw, de-azymis, disputatio-christiani-et-saraceni, institutio-elementaris, de-trinitate fragment). Report right: "not in OGC".
- Andrew of Crete: andreas.fragmentum (681, auto) only; Germanus, Cabasilas: absent.
Raw-OCR total in catalog: 395 works. Raw-flagged among our needs: Pseudo-Dionysius (all), Palamas homilies, Cyril "Quod unus sit Christus", Damascene Sacra Parallela/minor.
Source: https://raw.githubusercontent.com/open-greek/open-greek-corpus/main/data/corpus_catalog.tsv (saved catalog.tsv)

## 2. Zenodo 19915273 — CONFIRMED
API https://zenodo.org/api/records/19915273: title "Patrologia Graeca (OCRized and analyzed texts)", metadata.license = {"id": "cc-by-4.0"}, publication_date 2026-04, file PG.zip, description credits CGPG (Auwers, UCLouvain; GREgORI + Calfa). The licence field is CC BY 4.0.

## 3. Roger Pearse PG PDFs — scan IDs (page lists them in order under each volume)
Fetched https://www.roger-pearse.com/weblog/patrologia-graeca-pg-pdfs/ ; identified IDs; checked each archive.org item's djvu header myself.
- PG 87.3 (Procopius v3, John Moschus, Sophronius): Google Books id CMHUAAAAMAAJ only. IA "…_1860_87" is 87.2 (Procopius v2), not 87.3.
- PG 90 (Maximus v1): archive.org patrologicursus55migngoog (verified: djvu header "S.P.N. MAXIMI … TOMUS PRIMUS"; also patrologiaecurs182unkngoog = "PATROLOGIAE TOMUS XC")
- PG 91 (Maximus v2; Thalassius): Google Books NsPUAAAAMAAJ, lk_GcK0lXLIC (no IA id listed)
- PG 94: archive.org patrologiaecurs62migngoog (header "TOMUS XCIV", verified; used for tests), patrologicursus53migngoog (vol 94), patrologiaecurs119migngoog (vol 94 per metadata); also bim_early-english-books-1641-1700_1860_94
- PG 97 (Andrew of Crete): Google Books qiERAAAAYAAJ, uZbYAAAAMAAJ. WARNING: IA bim_…_1851_97 is Series Latina (Maximinus), NOT Greek 97.
- PG 98 (Germanus): Google Books 4LO33nBPHLkC, 6ZbYAAAAMAAJ
- PG 102 (Photius v2, Mystagogy): archive.org patrologiaecurs11migngoog (verified "TOMUS CII"), patrologicursus19migngoog ("PHOTII TOMUS SECUNDUS")
- PG 150 (Palamas v1, Cabasilas): Google Books 9Nw-ZMIR5NUC, 6L_UAAAAMAAJ, 24jYAAAAMAAJ ONLY (no IA copy listed)
- (bonus) PG 151: archive.org patrologiaecurs45migngoog + patrologicursus36migngoog (verified "TOMUS CLI").
Caveat: I opened all 10 Google Books ids in Chrome from Argentina: none exposed a "Descargar PDF" link, i.e. full-download availability NOT confirmed for 87.3, 91, 97, 98, 150 (API quota exhausted, so viewability field not read). Open item: check HathiTrust full-view for PG 87.3/97/98/150.

## 4. Wikisource NPNF — answer: CCEL imports, not scan-based, not transcluded from Index
Series I Vol IX–XIV and Series II Vol III, IV, V, VII, VIII, IX, XIV sampled (volume pages + 2 subpages each, wikitext read via CDP): no <pages index=>/<pagelist>/Page: usage anywhere (pagetags false in all 24 sampled subpages); volume pages carry {{TextQuality|50%}}; subpages have no quality tag and an empty "notes" field.
Page history (3 subpages checked: S.I Vol IX Priesthood Book I; S.I Vol X Homily 29; S.II Vol V On Infants' Early Deaths; S.II Vol IX Exact Exposition Book II): first revision is by "Polbot", Feb 2008, summary: "Importing from Christian Classics Etherial Library, using an automated script".
The series page https://en.wikisource.org/wiki/Nicene_and_Post-Nicene_Fathers:_Series_I carries the banner: "This work is not backed by a scanned copy of the edition from which it was transcribed."
=> Wikisource NPNF = CCEL text via bot import. Same lineage as CCEL (see item 10). Not an independent source.

## 5. Google Books Scio 1773 (id QWliAAAAcAAJ) — PDF/EPUB offered; other editions exist
Rendered page (books.google.com.ar): "Los seis libros de S. Juan Chrysostomo sobre el sacerdocio… por el padre Phelipe Scio de San Miguel", Pedro Marin 1773, 276 p., original from Biblioteca Británica, digitised 26 May 2015. Page shows buttons "Descargar PDF" and "Descargar EPUB" (links with output=pdf / output=epub). I did NOT download: a plain curl of the PDF URL was redirected to Google's /sorry/ CAPTCHA, and I did not try to bypass it. So: download offered in the browser UI = confirmed; file itself = not fetched.
Other editions (Google search tbm=bks):
- 1863 Imprenta de Pablo Riera, Barcelona, 300 p., three copies, ALL with PDF/EPUB download links: Sqs6DWdLHmwC (Biblioteca Abadia de Montserrat), 75w1o9NWuooC (Biblioteca de Catalunya), G9xQAAAAcAAJ (Biblioteca Episcopal Seminario Barcelona). Title "Los seis libros de San Juan Crisostomo sobre el sacerdocio. Traducidos del griego en castellano por el P. Felipe Scio de San Miguel".
- 1776 (En la Imprenta de Pedro Marin, 356 p.): id 0y28GwAACAAJ — "No preview", no PDF.
- Second 1773 record bm4czQEACAAJ (276 p.): "No preview".
Conclusion: 1773 and 1863 are both downloadable; 1863 has three alternative scans.

## 6. Stanford Copyright Renewal DB — no renewal found (searched in Chrome, read-only)
Queries (all fields): Oulton; Eusebius; Ecclesiastical history Eusebius; Basil; Deferrari; Saint Basil The letters; Easton; Easton apostolic tradition; Apostolic tradition; Hippolytus; Loeb classical library; Kirsopp Lake.
- Loeb Eusebius vol 2 (Oulton 1932): "Oulton" = 0 results. "Eusebius" returns only "A New Eusebius" and Deferrari's Fathers of the Church vol 19 "Eusebius Pamphili: ecclesiastical history (books 1-5)" RE082911, pub 17 Jun 1953 (different book; (c) alive until 2049ish). NOT the Loeb. -> no renewal found for Oulton/Loeb vol 2.
- Basil Letters vol 4 (Loeb, Deferrari 1934): no Loeb record at all ("Loeb classical library" = 0). CAUTION: the DB has renewals for a DIFFERENT work: "Saint Basil: letters 1-185 Vol 1" (RE028537, renewed 11 Jul 1979) and "Saint Basil letters Vol 2 (186-368)" (RE155120, 9 Feb 1983, Sister Agnes Clare Way) = Fathers of the Church (1951/1955), (c). Don't confuse with Deferrari Loeb. Also "Saint Basil: ascetical works" (FOTC, translation from Latin & Greek) renewed.
- Easton, Apostolic Tradition (1934): no record titled Apostolic Tradition/Hippolytus. Easton renewals present are for other books: R127722 (1926, renewed 1954), R221468 (1930, renewed 1958), R612254 (The Pastoral Epistles, 1947 -> renewed 1975), R358589 (Robbins & Easton, 1937). So no renewal found for the 1934 book.
Limits: absence in a text search is strong evidence, not proof (Loeb volumes may be registered under publisher "Putnam"/"Harvard UP" with title keywords I did not try beyond the above; UK-first-published 1932/1934 Heinemann works would need URAA analysis, which I did not do). Consistent with report.

## 7. tertullian.org — dates
- Irenaeus, Proof of the Apostolic Preaching: page header "(1920) pp. 69-151", J. Armitage Robinson; Robinson 9 Jan 1858 – 7 May 1933 (Wikipedia, fetched) -> PD everywhere (d. >70 yrs ago). Site statement on the Ferrar page: "public domain - copy freely" appears on the site generally.
- Eusebius Demonstratio Evangelica: Tr. W.J. Ferrar, SPCK/Macmillan 1920 (title page text). Ferrar death year: NOT verified (no Wikipedia article found, search budget exhausted) -> mark memory/unverified. US: 1920 pub = PD.
- Cyril, That Christ is One: LFC 47 (1881) pp. 237-319, "Translated by P. E. Pusey" (page text). Pusey death year NOT verified here (memory: d. 1880; 1881 volume is posthumous-era anyway; pre-1931 US PD).
- Basil Address to Young Men: translation in Frederick Morgan Padelford, Essays on the Study and Use of Poetry by Plutarch and Basil the Great, Yale Studies in English 15 (1902); Padelford 1875-1942 (Wikipedia summary) -> life+70 ends 2012: PD. (Report listed this item generically; this is the edition tertullian.org hosts.)
- Chrysostom extras on tertullian.org: Four Discourses (Lazarus), tr. F. Allen, Longmans 1869 (page). Allen's death year not verified. **Adversus Judaeos on tertullian.org: translator UNKNOWN** ("I have been unable to track down the translator" per site preface; site declares it PD). Do not rely on it as a licensed edition.
- Also verified: Robinson's Irenaeus is at tertullian.org/fathers/irenaeus_02_proof.htm; Ferrar vol 1 preface at eusebius_de_01_preface.htm.

## 8. Gutenberg — ANCL volumes now on PG (search results via site search, 13 queries)
Present: #77576 The writings of the Apostolic Fathers (new vs. report); #71937 and #73020 Clement of Alexandria vol 1-2; #70561 and #70693 Origen vol 1-2. Also (not ANCL) Hippolytus Philosophumena (Legge) #65478/#67116.
NOT found: Justin Martyr/Athenagoras, Irenaeus, Methodius, Tertullian, Cyprian, Lactantius, Arnobius, Novatian, Gregory Thaumaturgus, Hippolytus (ANCL). (Search is by the site's own text search; absence = not found there today.)

## 9. el.wikisource Damascene images — provenance: Kotter-type critical text, NOT Migne; no source stated
- Page has no source/edition note; Talk page does not exist. History: created 28 Jan 2008 by user Pvasiliadis as a single 372,306-byte paste, summary "με γεια!"; later only category/format edits; moved 2018.
- Text comparison with PG 94 (archive.org patrologiaecurs62migngoog OCR): the 3 sentences ("Ἐχρῆν μὲν ἡμᾶς… ἀναξιότητος", "Πῶς εἰκονισθήσεται τὸ ἀόρατον…", "Ἕτερον γάρ ἐστιν ἡ τῆς λατρείας προσκύνησις…") and "Οὐ βασιλέων ἐστὶ νομοθετεῖν τῇ ἐκκλησίᾳ" are word-identical to PG apart from capitalisation (PG: Ἐκκλησία/Θεός/Υἱός; wiki lowercases) and punctuation/orthography. Words alone do not separate Migne from Kotter.
- Decisive indicators of a modern critical edition: (a) editorial angle-bracket supplements in the text (<ἧκον>, <Χριστοῦ>, <ὄντες>, <ὕλης>, <τῶν ἄλλων>, <...> x11) which Migne never prints; (b) oration headings differ from PG ("πρὸς τοὺς καταλέγοντας τὰς εἰκόνας λόγος δεύτερος": no PG match); (c) the patristic florilegium appended after Or. 3 is in the Kotter layout. Conclusion: derived from Kotter (Die Schriften des Johannes von Damaskos III, De Gruyter 1975) (inference, not stated on page). Treat as © critical edition = do not use as source text; use only as collation aid. Wikisource licence statement on page: CC BY-SA 4.0 (contributor layer) — does not cleanse a © base text.

## 10. gregorycrane/nicenefathers — CONFIRMED CCEL-derived, with licence trap
Repo (no GitHub licence field; README "TEI XML for the ante- and post-nicene fathers series"): anf01-09, npnf101-114, npnf201-214.xml. Headers (anf01, anf02, npnf101, 109, 204, 205, 208 read): <availability> "Available under a Creative Commons Attribution-ShareAlike 4.0 International License" (University of Leipzig, Gregory Crane; "Digital Divide Data: Corrected and encoded the text"), BUT <sourceDesc> publisher "Grand Rapids, MI: Christian Classics Ethereal Library", and the embedded CCEL front matter is present in anf01 as in all others: "...This PDF file is copyrighted by the Christian Classics Ethereal Library. It may be freely copied for non-commercial purposes as long as it is not modified. All other rights are reserved. Written permission is required for commercial use." (anf01 text offset ~486k bytes; also in npnf204). => whole set CCEL-derived; the CC BY-SA 4.0 label by Leipzig does not remove the CCEL notice. Policy: ask CCEL or use independent transcriptions.

## 11. todocoleccion — price/availability
- Caminero, Los Santos Padres: only 1 lot: "CAMINERO, Francisco - LOS SANTOS PADRES COLECCION ESCOGIDA DE SUS HOMILIAS Y SERMONES TRADUCIDOS AL…", Imp. Propaganda Católica, Madrid 1878, 468 p., 22 cm, leather binding, **35.00 EUR (offers accepted)**, seller "Libros con Historia" (Navarra), lot https://www.todocoleccion.net/libros/caminero-francisco-santos-padres-coleccion-escogida-sus-homilias-sermones-traducidos-al~x690431565 . That is ONE volume, not the 5-vol set; a complete set not listed.
- Obras escogidas de patrología griega (Barcelona 1916): searches "obras escogidas de patrologia griega", "obras escogidas patrologia", "patrologia griega" -> 0 relevant lots ("Sin resultados" for the exact phrase). Not available there now. (Did not check iberlibro/others.)
Note: buying a physical copy only gives a scan source if we digitise; mechanical/personal copy -> scanning for publication of PD (pre-1931; Caminero d. 1900s, memory) is the project's decision.

## 12. PTA pta_data — licences per file: NC is NOT limited to one file
Repo README: "The individual files are licensed by different Creative Commons Licenses... mentioned in the header of each file." Authenticated GitHub code search + header reads found NC-licensed files:
- data/pta0036/pta001/pta0036.pta001.pta-grc1.xml: Anonymus Cyzicenus (Gelasius of Cyzicus) Historia ecclesiastica, GCS 2002 (Hansen) — **BY-NC-SA 3.0** (the Greek text file; this matches OGC's "single BY-NC-SA file" for Greek — not our author).
- data/pta0041/pta001/pta0041.pta001.pta-Mss.xml (Vita Cononis, Ms s): BY-NC-SA 3.0 (the -grc1 and -deu1 editions of the same work are BY-SA 4.0).
- pta0100.pta001-010 *.pta-deu1.xml (German translation of Athanasius Werke III, Dokumente zur Geschichte des arianischen Streites): **BY-NC 3.0 DE**; the Greek (-grc1) of the same works is CC BY 4.0.
- pta9999.* *.pta-syc*.xml (Peshitta, ETCBC): BY-NC 4.0 (~27 files by search).
For OUR works (the 106 OGC catalog entries with source=pta, mapped through OGC's pta_crosswalk.json and every edition file header read): licences found = by-sa-4.0 (236 files), by-4.0 (66), unknown (19, all Severian of Gabala manuscripts), **by-nc-3.0 (10) and by-nc-sa-3.0 (1)** — the NC hits are exactly the Athanasius-Werke-III German translations (pta0100.*) and the Konon Ms file. None are Greek editions of Athanasius De incarnatione/Contra gentes, Chrysostom, Eusebius, Origen, Theodoret, Cyril, Hippolytus (those are BY-SA 4.0 / BY 4.0). So: Greek texts we want = clean; **do not ingest the German translation files of pta0100 (NC), pta0041 Ms, pta0036 grc1**. Per-file checking script output: samples/greek-fathers/verify/pta_lic_check.json.

## 13. archive.org "Clemente de Alejandría" Spanish uploads — do not use (modern ©)
- clemente-de-alejandria-protreptico: metadata date 1900, licenseurl "publicdomain/mark/1.0", uploader rangelyessika412@gmail.com, added 2026-06-26. The PDF's own title page (djvu): "CLEMENTE DE ALEJANDRÍA, PROTRÉPTICO. Introducción, traducción y notas de M.ª Consolación Isart Hernández. Editorial Gredos, Biblioteca Clásica Gredos 199 ... © EDITORIAL GREDOS, S.A.U., 2008. Depósito legal M-26.801-2008. ISBN 978-84-249-1669-9". Filename "…Protréptico, Gredos.pdf". => in copyright (Gredos 2008), fake "1900"/PD-mark.
- clemente-de-alejandria-stromata_202606: date 1910, same uploader, 2026-06-20. Content: "LOS STROMATA (Clemente de Alejandría)" a modern Spanish compilation whose notes say the translation follows "Fuentes Patrísticas n. 7 (libro 1), Madrid, Editorial Ciudad Nueva, 1996" (and FP n.10, 1998), with variants from Domingo Mayor SJ, Stromatéis, Abadía de Silos 1994 (Studia Silensia XVI), Sources Chrétiennes n.30/38 references. No © page, but derived from © translations (Ciudad Nueva 1996/98; Silos 1994). => do not use.

## 14. New Advent — CONFIRMED no reuse terms
https://www.newadvent.org/fathers/0101.htm (HTTP 200, 24,979 chars of text): footer exactly: "Source. Translated by Alexander Roberts and James Donaldson. From Ante-Nicene Fathers, Vol. 1. Edited by Alexander Roberts, James Donaldson, and A. Cleveland Coxe. (Buffalo, NY: Christian Literature Publishing Co., 1885.) Revised and edited for New Advent by Kevin Knight." and "Copyright © 2026 by New Advent LLC. Dedicated to the Immaculate Heart of Mary." No licence/reuse sentence on this page or on /fathers/ index; /about.htm, /terms.htm, /copyright.htm = 404. So: still no stated reuse terms; "revised and edited" implies editorial layer claimed by New Advent LLC. (I did not look for a separate terms page beyond those URLs.)

## Not verified / limits
- Death years of Ferrar, Pusey, F. Allen, Easton, Oulton, Deferrari, Lowther Clarke (search budget exhausted; Wikipedia has no/unfound articles) — still memory.
- Google Books PDF itself (CAPTCHA to curl); viewability of PG 87.3/91/97/98/150 Google copies.
- Wikisource sample covers 2 subpages per volume, not every page.
