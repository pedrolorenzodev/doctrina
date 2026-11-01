# Verification: Baptism fingerprint dates and Spanish glosses

Status: draft, NOT verified by Pedro

## Progress

- Status: done (research night 2026-11-01, verifier v4, Sonnet 5.5).
- Files checked: the `## Baptism` section and «Baptism: corrections to the registry's dates and open points» of `docs/research/doctrines/fingerprint-dates.md` (38 table rows, 6 numbered points); `docs/research/sources/spanish-glosses.md` (10 table rows, «Short answer» 1-4).
- Method: every URL fetched with `curl -sL -A "Mozilla/5.0"`, tags stripped, exact-string match; scratch in `~/codex-night1101-scratch/v4/`. Quotes below are the matched strings. A page that returned 403 (BiblIndex, the Wycliffe mirror) was not read and is marked UNCONFIRMABLE; WebFetch (a model summary) was tried on BiblIndex and also got 403, and its summary of Zenodo was NOT used as evidence (Zenodo was re-read with curl through `doi.org` and the Zenodo API).
- Result, fingerprint: 38 rows: 28 CONFIRMED, 5 WRONG, 5 UNCONFIRMABLE; of the 6 numbered points, 2 need rewording (1 and 3). Result, glosses: 10 rows: 1 CONFIRMED as written (row 10), 5 CONFIRMED with a correction (rows 1, 2, 4, 5, 9), 1 partly WRONG (row 3), 3 UNCONFIRMABLE (rows 6-8); «Short answer» still stands, with four wording fixes.
- Not done: BiblIndex pages (403), Constantinople I text (CCEL page is a JavaScript shell), Mansi 31, Schroeder, the Greek Oros, `sehepunkte`, Salapatas, Dragas (no URL given), the Wycliffe mirror (403).
- Outside the two files: see «Outside the files» at the end.

## Legend

- CONFIRMED: the quoted string or the date is on the cited URL as fetched today (quoted).
- WRONG: the file states something the source contradicts or does not say; the correction follows.
- UNCONFIRMABLE: could not be read, or only second-hand evidence exists; the reason is given.

## 1. Fingerprint section

### Holy See rows

| # | Row | Verdict | Matched string and URL |
|---|---|---|---|
| F1 | *Sacrosanctum Concilium* 1963 | CONFIRMED | «CONSTITUTION ON THE SACRED LITURGY SACROSANCTUM CONCILIUM SOLEMNLY PROMULGATED BY HIS HOLINESS POPE PAUL VI ON DECEMBER 4, 1963» (vatican.va `vat-ii_const_19631204_sacrosanctum-concilium_en.html`) |
| F2 | *Unitatis redintegratio* 1964 | CONFIRMED | «Given in Rome at St. Peter's, November 21, 1964» (vatican.va `vat-ii_decree_19641121_unitatis-redintegratio_en.html`) |
| F3 | *Donum veritatis* 1990 | CONFIRMED | «who ordered its publication. Given at Rome, at the Congregation for the Doctrine of the Faith, on May 24, 1990, the Solemnity of the Ascension of the Lord.» The file's «Given at Rome … on May 24, 1990» elides «at the Congregation for the Doctrine of the Faith» with an ellipsis, so it is not a clipped quote. |
| F4 | *Gestis verbisque* 2024 | CONFIRMED | «El Sumo Pontífice Francisco, en la Audiencia concedida al suscrito Prefecto del Dicasterio para la Doctrina de la Fe el 31 de enero de 2024, aprobó la presente Nota … y ordenó su publicación. Dado en Roma, en la sede del Dicasterio para la Doctrina de la Fe, el 2 de febrero de 2024, en la fiesta de la Presentación del Señor.» (vatican.va `rc_ddf_doc_20240202_gestis-verbisque_sp.html`) |
| F5 | CIC 1983 | CONFIRMED | «I order today, January 25, 1983, the promulgation of the revised Code of Canon Law» (vatican.va `cic_introduction_en.html`). The row «same row as the Sola Scriptura table» exists there with year 1983 and the same URL. |

### Trent, Westminster, Trullo, Vienne, Gregory

| # | Row | Verdict | Matched string and URL |
|---|---|---|---|
| F6 | Trent V, 1546 | CONFIRMED | «Celebrated on the seventeenth day of the month of June, in the year MDXLVI.» (history.hanover.edu `ct05.html`) |
| F7 | Trent VI, 1547 | CONFIRMED | «Celebrated on the thirteenth day of the month of January, 1547.» (`ct06.html`). The «baptism in ch. 4 and 7» gloss: ch. 4 reads «cannot be effected, without the laver of regeneration, or the desire thereof»; ch. 7 not re-read. Row «same row as the Justification table» exists (Trent session VI, 1547). |
| F8 | Trent VII, 1547 | CONFIRMED | «Celebrated on the third day of the month of March, MDXLVII.» (`ct07.html`) |
| F9 | Trent XIV, 1551 | CONFIRMED | «celebrated on the twenty-fifth of November, MDLI.» (`ct14.html`). The page's own wording is «SESSION THE FOURTEENTH, Being the fourth under the Sovereign Pontiff, Julius III., celebrated on the twenty-fifth of November, MDLI.» |
| F10 | WLC and WSC, 1648 | CONFIRMED | «The General Assembly at Edinburgh adopted the Larger Catechism, July 20, 1648, and the Shorter Catechism, July 28, declaring both to be 'agreeable to the Word of God…'» (CCEL `creeds1.ix.viii.v.html`, Schaff). The file's «1647 is the Assembly's completion of the drafts» is loosely supported: the same page says the Larger Catechism was «Presented by them lately to both Houses of Parliament. Printed at London [Oct. 1647…]» and the Shorter appeared «after Nov. 25, 1647». |
| F11 | Quinisext, 692 | CONFIRMED | «the year 692, fifth indiction» and Hefele: «it was opened after September 1, 691, and before September 1, 692» (Fordham `trullo.asp`). Correction to the Note: «canon 95 itself not reached in the fetch» is untrue of the page: it carries «CANON XCV. THOSE who from the heretics come over to orthodoxy, and to the number of those who should be saved, we receive according to the following order and custom.» (harmless; the tag can say «canon 95 read»). |
| F12 | Council of Vienne, 1312 | CONFIRMED for the date; see R1 for the registry statement | «The Ecumenical Council of Vienne, in session from Oct. 16, 1311, to May 6, 1312» and «The decrees of the Council's third session, whose number and text are unknown, were published May 6, 1312, by Clement V» (encyclopedia.com «Vienne, Council of»). The file's «unverified: that *Fidei catholicae* is one of the decrees of that session» is right and stronger than it says: the article calls the third-session decrees' «number and text unknown», and mentions neither «Fidei» nor «baptism» (0 matches). The article also says «The decrees adopted at Vienne number 38 (?) in all, of which only 19 were published in the Clementinae.» Add these quotes to the Note. |
| F13 | Gregory of Nazianzus, *Oration* 40, 381 | Date CONFIRMED; URL WRONG | The cited URL `npnf207.iii.xxii.html` is *Oration* 39 (its heading: «Oration XXXIX. Oration on the Holy Lights. The Oration on the Holy Lights was preached on the Festival of the Epiphany 381, and was followed the next day by that on Baptism.»). *Oration* 40 is `npnf207.iii.xxiii.html`: «Oration XL. The Oration on Holy Baptism. Preached at Constantinople Jan. 6, 381, being the day following the delivery of that on the Holy Lights.» Both NPNF notes agree on 381; they disagree with each other on the day (Epiphany is 6 January, so «Jan. 6, being the day following» is internally inconsistent: do not print a day). Salapatas «January 380»: not checked (no URL given): UNCONFIRMABLE. |

### Remaining rows

| # | Row | Verdict | Evidence |
|---|---|---|---|
| F14 | Didache c. 100 | CONFIRMED | Eucharist table row «Didache | c. 100 | yes … preserve the dossier's disputed range c. 50–120». |
| F15 | Justin, *First Apology*, c. 155 | UNCONFIRMABLE | BiblIndex returns HTTP 403 (Cloudflare «Just a moment…») to curl and to WebFetch. Second-hand only: `docs/research/doctrines/open-tags-verification.md` lines 17 and 37 quote «Période 148-161.» A web search found BKV (`cpg-1073a`) saying only «2nd century»; a search summary said 147-161 from the addressees: not evidence. The tag `[verified: BiblIndex, range only]` is not reproducible tonight: change to `[verified in open-tags-verification.md, not re-fetched]`. |
| F16 | Irenaeus, *Demonstration*, c. 190 | UNCONFIRMABLE | Same: 403. Second-hand: `open-tags-verification.md` line 38, «Period 177-200.» Same tag change. |
| F17 | Tertullian, *De baptismo*, c. 200 | WRONG (source statement) | The file says «The record gives only «3rd century»». The cited record says: «Tertullianus: De baptismo (ed. J.-P. Migne) … Identifier CPL 8 Date 198-208» (bkv.unifr.ch `/en/works/cpl-8/versions/de-baptismo`), and the Evans edition record (`…/de-baptismo-ed-evans`) says «Ernest Evans, London 1964 … Date 198-208». «3rd century» appears nowhere on either page (0 matches). Correct row: show c. 200 with the range 198–208, tag `[verified: BKV record, range]`. The site is the Bibliothek der Kirchenväter (BKV, Fribourg; page footer «Faculty of Theology, Patristics and History of the Early Church … © 2026 Gregor Emmenegger»), not «Bibliotheca Augustana». «De paenitentia 198–204» matches `open-tags-verification.md` line 39. sehepunkte 2006: not read, UNCONFIRMABLE. |
| F18 | Nicaea I canon 19, 325 | CONFIRMED | Papacy table row «Council of Nicaea I | 325» exists. Canon 19 text not read (the file says so). |
| F19 | Constantinople I, 381 | UNCONFIRMABLE | `npnf214.vi.ii.html` returns a JavaScript shell (about 460 characters of text), as the file says. The file's tag is honest. |
| F20 | Ambrose, *De sacramentis*, c. 390 | UNCONFIRMABLE (tag overstated) | `neutral/writers-latin.md` line 83 does say «*De mysteriis*; *De sacramentis* | c. 387–391 … `[verified: reuse]`», so the dossier agrees with the row. But the Baptism row's own tag `[verified: reuse of the neutral map; not re-fetched tonight]` is a verified tag on something no source was read for tonight. Retag `[unverified: dossier only]`. |
| F21 | Fourth Lateran, 1215 | CONFIRMED | Eucharist table row «Fourth Lateran Council | 1215» exists. |
| F22 | Florence, *Exsultate Deo*, 1439 | UNCONFIRMABLE | `doctrines/baptism/catholic.md` line 52 says «22 Nov 1439: «decimo Kalendas Decembris», … not on the leaf read here, so unconfirmed». The row reports this accurately with `[unverified]`. |
| F23 | Luther, Small Catechism, 1529 | CONFIRMED for 1529; sub-claims UNCONFIRMABLE | Wikipedia: «Luther's Small Catechism … is a catechism written by Martin Luther and published in 1529». «Composition late 1528–1529» and «first added in the 1531 third edition» are not on the cited page (0 matches for 1528 near the catechism; 1531 absent). Keep them only with another source. |
| F24 | Luther, Large Catechism, 1529 | CONFIRMED | «published in April 1529» and «Title page of the first edition of Luther's Large Catechism (Wittenberg 1529)» (Wikipedia). |
| F25 | Augsburg Confession, 1530 | WRONG (cross-reference) | The row says «same row as the Papacy table»: the Papacy table has no Augsburg Confession row. It is in the Sola Scriptura, Justification and Eucharist tables (1530 in all three). Year is right; fix the pointer. |
| F26 | Apology, 1531; FC Epitome, 1577 | CONFIRMED | Sola Scriptura rows «Apology of the Augsburg Confession | 1531» and «Formula of Concord | 1577». The Sola Scriptura row says «Formula of Concord», not Epitome; same year. |
| F27 | WCF 1647; NH 1853; BFM 2000; Dositheus 1672; Encyclical 1895; Lumen gentium 1964; CCC 1992 | CONFIRMED | Rows exist with the same year: WCF in the Papacy table (1647), New Hampshire in the Justification table (1853), BFM in Sola Scriptura (2000), Dositheus in Papacy (1672), Patriarchal and Synodical Encyclical in Papacy (1895), *Lumen gentium* in Papacy (1964), CCC in Sola Scriptura (1992). |
| F28 | Mogila, 1643 | CONFIRMED (against the dossier only) | `doctrines/baptism/orthodox.md` line 222: «Mogila's approved Greek revision has the patriarchal act of 11 March 1643 … read in Overbeck p. 10». The scan was not re-read here. |
| F29 | Philaret, 1839 | CONFIRMED (against the dossier only) | `orthodox.md` line 230: «Philaret's 1839 catechism … Schaff p. 445 prints the approval title and identifies Blackmore's 1845 English translation». The «1820s first edition» remark is marked unverified in the file. |
| F30 | *Oros*, 1755 | CONFIRMED for the date; registry statement partly wrong | Wikipedia: «In June 1755, Cyril V issued a circular letter … and a month later he issued the formal order «Oros (Tome) of the Holy Great Church of Christ»»; also «in 1755 he issued the Oros». Dragas/Metallinos «only 1755»: no URL, 0 matches on the Wikipedia page: UNCONFIRMABLE. See the registry check below. |

Tally of the 38 table rows: CONFIRMED 28 (Didache, Nicaea I, Quinisext, Lateran IV, Trent V, VI, VII, XIV, WLC, WSC, Small and Large Catechism, Apology, FC Epitome, WCF, New Hampshire, BFM, Mogila, Dositheus, Philaret, Encyclical 1895, SC, LG, UR, DV, CIC, CCC, GV); WRONG 5 (Tertullian, Gregory URL, Augsburg pointer, Vienne and *Oros*: the date is right but the «registry says» statement is wrong, counted here); UNCONFIRMABLE 5 (Justin, Irenaeus, Constantinople I, Ambrose, Florence).

### «Registry says» statements and the three proposed corrections

Where the dates live: `src/content/registry/works.ts` has no `date` field for these works; dates are per citation in `src/content/registry/citations.ts`. The file says «(`citations.ts`, work `vienne`)», which is the right place.

| # | Statement in the file | Verdict | Evidence |
|---|---|---|---|
| R1 | `vienne`: «The registry says 1311 … the year the council opened» | WRONG (incomplete) | `citations.ts`, citation `VIEN` (line 16497, `work: "vienne"`): `date: { year: 1311, yearEnd: 1312 }`. The registry already records the span 1311–1312, not 1311 alone. Correction 1 should read: `year: 1311, yearEnd: 1312` → `year: 1312` (drop `yearEnd`), if the promulgation convention is adopted. «The year the council opened» is correct as history (encyclopedia.com: «in session from Oct. 16, 1311») but the registry carries no comment saying so. |
| R2 | `wlc`, `wsc`: «The registry says 1647» | CONFIRMED | Counted from `citations.ts`: `work: "wlc"` 17 citations all `year: 1647`; `work: "wsc"` 6 citations all `year: 1647`; `work: "wcf"` 62 citations `year: 1647`. Changing to 1648 touches 23 citations. Note `editions.ts` line 1036 labels the volume «(texto de 1647)» (the 1894 Edinburgh print of the 1647 text): a different thing from the adoption year, so the edition label should stay. |
| R3 | `oros-1755`: «The registry says «1755/56»» | WRONG (partly) | The string «1755/56» is the title in `works.ts` line 509 (`title: "Oros de Constantinopla (1755/56)"`). The date fields are `year: 1755, alsoYears: [1756]` in two citations (`citations.ts` lines 19787-19788 and 19818-19819). Correction 3 must say: remove `alsoYears: [1756]` from both citations and drop «/56» from the work title. |

| # | Numbered point | Verdict |
|---|---|---|
| P1 | `vienne` 1311 → 1312 | Reword per R1 (the registry has 1311 and 1312 already; the unverified membership caveat is right, see F12). |
| P2 | `wlc`, `wsc` 1647 → 1648; WCF stays 1647 | CONFIRMED (F10, R2). |
| P3 | `oros-1755` | Reword per R3. |
| P4 | Trent ticks 1546, 1547, 1547, 1551 | CONFIRMED (F6-F9); the phrase «all verified against the Hanover text's own date lines» is accurate. |
| P5 | Open points | Accurate; add Tertullian (now has a 198–208 record, F17) and the Gregory URL (F13). |
| P6 | Not ticked | Not checked against pages (no claim of a source). |

Other claims checked: «the 23 registry works the five Baptism pages cite»: counting `citations: [...]` ids in `src/content/pages/baptism/*.es.ts` and mapping them to their works gives exactly 23 distinct works (apology, augsburg, bfm-2000, cec, cic, donum-veritatis, dositheus, fc-epitome, florence-exsultate, gestis-verbisque, large-catechism, lateran-4, lg, new-hampshire, philaret, sc, small-catechism, trent, ur, vienne, wcf, wlc, wsc): CONFIRMED as a number. Note that this list does not contain `mogila`, `oros-1755` or `enc-1895`, which the table includes (the table says it also adds «early witnesses and councils», but these three are registry works, not early witnesses); the Oros citations in `citations.ts` exist, so either the Orthodox page cites them by another route or they are not yet cited: ask the coordinator before relying on «23 = the cited works». Rows with a date asserted and no source read tonight: Ambrose (F20), Florence (F22), Mogila (F28), Philaret (F29), Nicaea I canon 19 text, Lateran IV, Constantinople I, Justin, Irenaeus.

## 2. Glosses file

Primary readings tonight: Zenodo (`doi.org/10.5281/zenodo.19099634` page and `zenodo.org/api/records/19099634`, both HTTP 200 with a browser User-Agent; `zenodo.org/records/…` returns 403 to the default UA), OpenGNT raw README and its 223-commit README history via the GitHub API, STEPBible-Data README and TBESG header, macula-greek and macula-hebrew `LICENSE.md`, translation.bible, CrossWire ModInfo, Wikidata:Licensing.

### (a) Lexicon Omnium Gentium (row 5; «Short answer» 1-2)

| Claim | Verdict | Evidence |
|---|---|---|
| Title, Zenodo DOI, v1.0.0, 18 March 2026 | CONFIRMED | «Published March 18, 2026 | Version 1.0.0 Dataset Open Lexicon Omnium Gentium: An Open Multilingual Biblical Lexicon (Strong's Concordance, 28 Languages, 547K Definitions)»; author «Uy, E. Timothy … Loqu8, Inc.»; API `"doi": "10.5281/zenodo.19099634"`. |
| Licence «Creative Commons Attribution 4.0 International» | CONFIRMED | Page: «Rights License Creative Commons Attribution 4.0 International»; API `"license": {"id": "cc-by-4.0"}`. |
| «generated by a large language model (MiniMax M2.5) from curated English source definitions» | CONFIRMED | «The dataset was produced via LLM translation (MiniMax M2.5) from curated English source definitions at a total cost under $2 USD, achieving a 99.96% fill rate.» |
| 28 languages including Spanish; 19,570 entries | CONFIRMED | «It contains 547,756 definitions across 28 languages (English, Hebrew, German, French, Spanish, …), covering all 19,570 Strong's entries for biblical Hebrew and Greek.» |
| «Spanish (547,756 definitions)» | WRONG (misleading) | 547,756 is the total across all 28 languages, not the Spanish count. The record gives no Spanish-only count. In «Short answer» 1 the parenthesis attaches to «Spanish»: fix to «547,756 definitions in all, no per-language count given». |
| Record does not name the English source or its licence | CONFIRMED | API metadata has no `related_identifiers`, `notes`, `references` or `rights` field; the description names none. |
| Paper only «submitted» | CONFIRMED | «This dataset accompanies the paper «Lexicon Omnium Gentium: An Open Multilingual Biblical Lexicon via LLM Translation» submitted to Digital Scholarship in the Humanities.» |
| «`zenodo.org/api/records/…` returned 403», so «the API and the full description could not be read» | Stale | The API returns 200 to curl with a Chrome-style User-Agent, and the full description is quoted above. The conclusion (English source unnamed) is unchanged. |
| «Strong's own definitions are public domain» | UNCONFIRMABLE | Not in the file's sources; from memory. Flag it. |

### (b) OpenGNT (row 1; «Short answer» 3)

| Claim | Verdict | Evidence |
|---|---|---|
| Main text «Creative Commons Attribution-ShareAlike 4.0», «Based on a work at github.com/eliranwong/OpenGNT» | CONFIRMED | README «# License: The main text of Open Greek New Testament Project, OGNT in short, is released under the following license: … Open Greek New Testament Project by Eliran Wong is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License. Based on a work at https://github.com/eliranwong/OpenGNT.» (raw README, `master`). |
| Spanish literal translation has no licence line | CONFIRMED, with a nuance | The only Spanish text is «Spanish Literal Translation: La traducción al español fue mapeada y ajustada por E. Barrientos al texto del Proyecto OGNT del módulo para el Programa E-Sword del Proyecto GALEED 2017 «Una traducción literal palabra por palabra al español» auspiciado por Biblioteca Hispana, Última Revisión: 01 de febrero de 2017…»: a credit, no licence, no word «licen» in it. Nuance the file omits: line 46 reads «The base text and the rest of Open Greek New Testament Project is released under a public license described below», and the licence that follows is BY-SA 4.0. So the README arguably puts the whole project, not only the base text, under BY-SA, while the upstream GALEED module's own licence is unstated. Either reading excludes the Spanish layer from Pedro's CC BY-only rule. |
| Berean Interlinear «Used by Permission» | CONFIRMED | «Copyright ©2016, 2018 by Bible Hub Used by Permission. All Rights Reserved Worldwide.» |
| Chinese Standard Bible CC BY-NC-ND 4.0 | CONFIRMED | «licensed under the Creative Commons Attribution-Non Commercial-No Derivatives 4.0 International License». |
| Mounce © 1993 | CONFIRMED | «Mounce Concise Greek-English Dictionary … Copyright 1993 All Rights Reserved». |
| «Older revisions of the same README (mirrored at `content.bibletranslationtools.org/WycliffeAssociates/OpenGNT`) say CC BY-NC-ND 4.0 / non-commercial» | WRONG for the upstream history; mirror UNCONFIRMABLE | The mirror returns 403. The upstream README's licence block, over all 223 revisions of `README.md`: 2018-07-11 CC BY-ND 4.0; 2018-08-25 CC BY-NC-SA 4.0; since 2018-08-27 CC BY-SA 4.0 (unchanged to the 2022 revisions and today). BY-NC-ND 4.0 appears in the README only for the Chinese Standard Bible. The «Spanish Literal Translation» credit first appears in the 2018-09-20 revision (`1eaad4f`), already under BY-SA. So the claim «Corrects the premise … the Wycliffe mirror's older text says non-commercial» has no support; drop it. |
| Verdict «Not usable» | Stands | BY-SA at best. |
| DECISIONS 2026-11-01 says «OpenGNT's CC BY-SA Spanish glosses» | CONFIRMED | `docs/DECISIONS.md` line 11 (answer 5): «OpenGNT's CC BY-SA Spanish glosses are not used.» The file's statement that this premise is not confirmed by the README also stands. |

### (c) STEPBible-Data and MACULA (rows 2, 3)

| Claim | Verdict | Evidence |
|---|---|---|
| STEPBible-Data labelled CC BY 4.0 | CONFIRMED | README line 1: «# STEPBible Data Repository **CC BY 4.0**»; «Credit it to «STEP Bible» linked to www.STEPBible.org». TBESG header: «Data created by www.STEPBible.org based on work at Tyndale House Cambridge (CC BY 4.0)». File names end «STEPBible.org CC BY.txt». |
| «Read the repository's current `LICENSE` file» | Cannot be done | There is no `LICENSE` or `LICENSE.md` in the repo root (raw URLs 404; GitHub API `license: null`; root listing: Lexicons, Morphology codes, Older Formats, Proper Nouns, README.md, Tagged-Bibles, Translators Amalgamated OT+NT, Versification, _config.yml). The licence statement is the README and the file headers. Rewrite the advice accordingly. |
| «the STEP project page and a mirror still say CC BY-NC 3.0 / 4.0 (older)» | UNCONFIRMABLE | Not fetched; no source named. |
| New useful fact | for K3 | The TBESG header says «The Brief lexicon is based on the Abbott-Smith definitions … For a few words where Abbott-Smith lacks a definition, one is supplied from MiddleLiddel (MD) or STEPBible scholars»: the provenance of the English glosses, relevant to the same question the file asks of Lexicon Omnium Gentium. Not checked whether Abbott-Smith is public domain. |
| MACULA Greek «top level CC BY 4.0» | CONFIRMED (now from the primary file) | macula-greek `LICENSE.md`: «MACULA Greek Linguistic Datasets © 2022-2024 by Biblica, Inc is licensed under CC BY 4.0». GitHub API shows the repo licence as `NOASSERTION` («Other»). |
| «semantic domain data used with permission» | CONFIRMED | «Word sense data from the United Bible Societies MARBLE project. (`@ln`, `@domain`) Used with permission.» |
| «SIL glosses a custom licence» | WRONG / unfounded | Neither `LICENSE.md` mentions SIL glosses. The glosses are: Berean Interlinear (`@gloss`), «officially placed into the public domain as of April 30, 2023», and «Cherith Glosses for the Greek New Testament, by Andi Wu … licensed under … CC BY 4.0. This information is represented in the `English` and `Chinese` attributes.» macula-hebrew: «Cherith Glosses for the Hebrew Old Testament … CC BY 4.0» (English and Mandarin) and «Semantic Dictionary of Biblical Hebrew … ©2000-2021 United Bible Societies. Used with permission.» |
| No Spanish gloss | CONFIRMED | No «Spanish» in either README or `LICENSE.md`. «One page also lists Mandarin»: confirmed in the licence files (Chinese/Mandarin from Cherith). |

### (d) translation.bible and the remaining rows

| Row | Verdict | Evidence |
|---|---|---|
| 4 UBS dictionaries, «released, in their entirety, under CC BY-SA 4.0» | CONFIRMED | «These UBS resources have been released, in their entirety, under the Creative Commons Attribution-ShareAlike 4.0 International (CC BY-SA 4.0) license.» (`translation.bible/open-access-resources/`). «Spanish? Not stated»: confirmed, no «Spanish» on the page. «(© UBS 2019)»: not on this page (the only line is «© Copyright United Bible Societies»): UNCONFIRMABLE. |
| 6 Strong's Spanish editions; 7 Tamez; 8 DGENT | UNCONFIRMABLE | Not fetched; commercial or © by the file's own report; plausible, no source in the file beyond search results. |
| 9 Spanish RV1909 with Strong's numbers | CONFIRMED, name WRONG | The module is `SpaRV1909` («Reina-Valera 1909 con números de Strong», version 1.0.1, 2012-07-19), not `SpaRV1909Strongs` (`ModInfo.jsp?modName=SpaRV1909Strongs` says «No module found»). Licence quotes: «El texto de la Reina-Valera 1909 es de dominio público. Las etiquetas con los números de Strong han sido editadas por Rubén Gómez.» and «Distribution License Copyrighted; Permission to distribute granted to CrossWire» (crosswire.org `ModInfo.jsp?modName=SpaRV1909`). The `[snippet]` tag can become `[verified]`. |
| 10 Wikidata lexemes CC0 | CONFIRMED (licence) | «Wikidata requires a CC0 license, which is equivalent to public domain» (`wikidata.org/wiki/Wikidata:Licensing`). Coverage still unmeasured, as the file says. |

### Does the «Short answer» still stand?

Yes. (1) a CC BY 4.0 Spanish gloss dataset exists, is LLM-generated and its English source is unnamed (all CONFIRMED); (2) its provenance caveats stand; (3) no other CC BY or public-domain Spanish gloss set was found by this check either; OpenGNT's Spanish layer has no licence line and its README licence is BY-SA; (4) the recommendation (keep the decided route; ask the author which English dictionary and licence) is unaffected. Four wording fixes: the 547,756 count, the stale «API 403», the «older revisions say CC BY-NC-ND» claim (drop it), and the STEPBible «read the LICENSE file» advice (there is none; cite the README and file headers).

## Outside the files

- `src/content/registry/works.ts` line 509: the title «Oros de Constantinopla (1755/56)» and `src/content/registry/citations.ts` lines 19788 and 19819 (`alsoYears: [1756]`) carry the «/56» that point 3 removes.
- `src/content/registry/citations.ts`: 23 citations (`wlc` 17, `wsc` 6) carry `year: 1647` if the 1648 correction is adopted; `VIEN` carries `year: 1311, yearEnd: 1312`.
- `docs/research/doctrines/baptism/shared.md` line 109 and V85 (line 267) cite `fingerprint-dates.md` line 128 for Justin's tick; they inherit the unreproducible BiblIndex tag (F15). The coordinator owns that file: no edit made.
- Gregory's URL appears only in `fingerprint-dates.md` (line 133): `…iii.xxii.html` → `…iii.xxiii.html`.

## Wrong items

1. F17 Tertullian: «The record gives only «3rd century»» is false; the record says «Date 198-208» (both editions). Show c. 200, range 198–208, `[verified: BKV record]`; the site is Bibliothek der Kirchenväter, not «Bibliotheca Augustana».
2. F13 Gregory: URL is *Oration* 39; use `https://ccel.org/ccel/schaff/npnf207.iii.xxiii.html` («Preached at Constantinople Jan. 6, 381, being the day following the delivery of that on the Holy Lights.»). Do not print a day (the two NPNF notes disagree).
3. F25 Augsburg Confession: «same row as the Papacy table» → Sola Scriptura (or Justification or Eucharist) table.
4. R1 / P1 `vienne`: registry is `year: 1311, yearEnd: 1312`, not 1311.
5. R3 / P3 `oros-1755`: «1755/56» is the title; the date is `year: 1755, alsoYears: [1756]`.
6. F20 Ambrose: tag `[verified: reuse …]` on a row for which no source was read tonight; retag unverified.
7. F15 / F16 BiblIndex tags `[verified: BiblIndex, range only]`: not reproducible (403); retag as second-hand from `open-tags-verification.md`.
8. F11 Quinisext: «canon 95 itself not reached» is untrue (canon 95 is on the cited Fordham page).
9. Glosses: «Spanish (547,756 definitions)»: total, not Spanish.
10. Glosses row 1: «older revisions … CC BY-NC-ND 4.0 / non-commercial» contradicted by the upstream README history (BY-ND, then BY-NC-SA for two days, then BY-SA since 2018-08-27); mirror unreadable.
11. Glosses row 2: no `LICENSE` file exists in STEPBible-Data; the licence statement is the README and file headers.
12. Glosses row 3: «SIL glosses a custom licence»: not in macula's licence files; glosses are Berean (public domain since 30 Apr 2023) and Cherith (CC BY 4.0).
13. Glosses row 9: module name is `SpaRV1909`.
14. Glosses row 4: «(© UBS 2019)» is not on the cited page.

## Unconfirmable

- BiblIndex Justin «Période 148-161» and Irenaeus «Period 177-200» (403; second-hand quotes in `open-tags-verification.md`).
- Constantinople I date and text (CCEL JavaScript shell).
- Florence *Exsultate Deo* 22 November 1439 (Mansi 31 leaf not read; dossier says so).
- Ambrose *De sacramentis* c. 390 (dossier range only).
- Nicaea I canon 19, Lateran IV constitution 1, Trent VI ch. 7 (not read).
- Luther Small Catechism «composition late 1528–1529» and the 1531 edition; Salapatas (January 380); Dragas/Metallinos (1755); sehepunkte 2006.
- Mogila 11 March 1643 and Philaret 1839 (consistent with the dossier; the scans were not re-read).
- Wycliffe mirror of OpenGNT (403); STEP project page «CC BY-NC 3.0 / 4.0 (older)».
- Glosses rows 6-8 (commercial Spanish lexica), «Strong's own definitions are public domain», Abbott-Smith's status, the UBS «© 2019».
