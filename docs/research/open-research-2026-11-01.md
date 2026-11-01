# Open research and data-gathering tasks (inventory of 2026-11-01)

A read-only audit of every markdown file in the repo plus the data that the docs point to (registry `src/content/registry/*.ts`, `data/site/glossary.json`, `data/site/history.json`, the 20 page files, `data/corpus/fathers/`). Numbers tagged **[measured]** were counted on 2026-11-01. Item ids (A1, B2…) are used by `docs/features/research-night.md`. Pedro's answers of 2026-11-01 (DECISIONS) unblock A6, C1, C2, H1, B2 (cutoff) and G2; they are marked **[answered 2026-11-01]**.

Headline [measured]: 616 source citations; 92 with a locator and no excerpt (Catholic 34, Lutheran 34, Reformed 19, Orthodox 5); 349 of the 473 citations that have Spanish lack English (Catholic 281, Reformed 32, Lutheran 29, Orthodox 7); `originalLang` empty for all 76 works; `videos.items` empty on 19 of 20 tradition pages (only Eucharist·Catholic has videos); apologists layer only on Baptism·Catholic (8 quotes); no page has parallels.

## A. Content dossiers & objections

- **A1. Official-layer objections for the 16 non-Catholic pages («wave 4»).** Objections to each tradition drawn from the other traditions' official texts, in their strongest honest synthesis, each answered in the tradition's own words, with status lines next to harsh wording. Unblocks «Objeciones», the 04 pages and the tree rows of 16 pages (today hidden). Sources: `docs/features/dossiers-to-web.md:79`, `ROADMAP.md` «Current state», `DECISIONS.md` 2026-10-29. Not started (every non-Catholic dossier has §Objeciones `Deferred`). L (16 × M). The debate layer stays paused.
- **A2. Excerpts for the citations with only a locator** (≈67 beyond the 25 Catholic ones of F1): Catholic CEC892, CIC336/337/341/349, CEC80/104/114, VD87…; Lutheran LAC*/LLC*/LFC*/LTr*; Reformed RWCF*/RWLC*; Orthodox ODositheusXV, OMogila106/107, OPhilaret18/20 [measured]. Unblocks the empty citation windows of all 20 pages. Sources: `DECISIONS.md` 2026-10-30 («missing texts are requested as dossier work later»). M; scans already in use (Triglot 1921, Westminster 1894 / Monterrey 1880, Robertson 1899, vatican.va).
- **A3. Lutheran Eucharist leftovers:** Theophylact («Vulgarius», Apology X.55) dates and work; the work identifications (Justin *1 Apol.* 66, Augustine *Tract.* 80.3, Irenaeus IV.18.5, «Serm. de Pass.»); DS 1752 = Trent XXII can. 2; communion of the sick beyond SD VII.83–87; re-verify what the apply pass added; body sources for the Variata and closed-communion lines. Sources: `ROADMAP.md` background queue 2, `docs/research/doctrines/eucharist/lutheran.apply.md:120-129`. S–M.
- **A4. Orthodox source gaps:** Philaret's Russian original (all Philaret quotes are English-only), the 1838 Russian recension and Dositheus 1838 collation, Mogila I.107 full Greek, Krivoshein's date, Jeremias II *Answers*, convert-reception canons and rituals. Sources: `dossiers-to-web.md:19`, `docs/research/doctrines/baptism/orthodox.md:263+`, `eucharist/orthodox.md:276+`. L. Waits on Pedro (how to finish the canonical/ritual sources, `baptism/orthodox.md` Questions item 2).
- **A5. Westminster 1894 editor line** in `eucharist/reformed.md` (~line 143) and a sweep for the wrong imprint «Offices of the Church of Scotland» (fixed only in `baptism/reformed.md`, R-06). S.
- **A6. 1689/Heidelberg/Belgic outside the Eucharist** **[answered 2026-11-01: they apply to every doctrine]**: re-verify and reinstate the displaced material kept in `*/baptist.apply.md` and `*/reformed.apply.md`. M.
- **A7. Catholic dossiers' `[pending: Codex]` items:** Baptism CIC 868 §2 (CV-1), Karmiris/1698 *Tomos* (Q5), FC XII (Q6), Greek/1921 redo (Q10), *Oros* Greek, Mansi 38:617–622 (Q14); Papacy 1895 encyclical §XIV–XIX Greek (Q18), Russo-Greek Papers and *Brief Statement* print (Q20); Sola Scriptura WCF 1647 proof-text lists (Q16), licence re-read (Q17), Augustine 396 vs 397 (Q20). Sources: `docs/research/doctrines/*/review-answers.apply.md`. M. Check the 2026-10-22 DECISIONS answers first.
- **A8. Apologetic answers unconfirmed (debate layer, paused):** listen to each quoted minute; Akin's tie to Catholic Answers; «Gagnon»/«Gognon»; 2024 *Annuario*; Cullmann; Gregory's letters; Nicaea canon 6 Greek and Latin; Baptism F-7 rows; Heschmeyer and Horn timestamps. Source: `docs/research/doctrines/apologetic-answers.md:567-572`. M.
- **A9. Status lines for harsh wording** missing on Lutheran citation windows; Trent status lines wherever other dossiers quote Trent's canons. Sources: `DECISIONS.md` «Harsh language», `lutheran.apply.md:133`. S.

## B. Page 02 shared content (Baptism, Papacy, Sola Scriptura; no `shared.md` exists)

- **B1. Common ground and 1–3 neutral «Lo que se discute» questions** per doctrine, each cited and checked against every tradition. Unblocks 02's header and section and the home rows (muted). Raw material: the 20 verified dossiers. M each. The agent-written home questions are «to decide» (`twelfth-session-queue.md:72`).
- **B2. Neutral early witnesses per doctrine** (quote, author, work and locator, date, dated edition, Spanish by the three-level rule, surrounding paragraph) and the full list for page 10. Cutoff **[answered 2026-11-01: c. 749]**. Raw material: the PQ sections of the Catholic dossiers, `docs/research/neutral/writers-*.md`. L each.
- **B3. Practice comparison** (aspects × 5 traditions, cited, aspects aligned). Each page's «Cómo se vive» is raw material; the Eucharist 02 practice facts still rest on search summaries (`docs/research/content-notes.md:45,54,62,72`). M each.
- **B4. Fingerprint dates for Baptism** (`docs/research/doctrines/fingerprint-dates.md` has Papacy and Sola Scriptura). S.
- **B5. Connected doctrines' «why» per edge** (only Eucharist edges exist, `data/raw/eucharist.content.json`). S.
- **B6. Doctrine history (~25 events) per doctrine:** no page design exists; a proposal comes first. M each.

## C. Pasajes

- **C1. Apologists layer for every passage of the 4 Catholic pages** (~61 passages: Baptism 19 with 3 having data, Eucharist 14, Papacy 14, Sola Scriptura 17) [measured]: exact quotes with minute or page and URL, at least 3 independent apologists per passage. Criterion **[answered 2026-11-01]**: the most popular apologists recognized as most faithful to their tradition's documents and deep on doctrine; Catholic: those we have plus Karlo Broussard. Source: `docs/features/passages-page.md:48-56`. L.
- **C2. Baptist Pasajes:** each Baptist page has one block of BF&M proof-texts with no verse assigned to each clause (Papacy has 5 entries). **[answered 2026-11-01]**: look for an official per-passage reading; if none, the page says no official document of that line reads the passage. Also the Baptist apologists (Gavin Ortlund: Reformed or Baptist, to check). L.
- **C3. Parallels for every passage, sourced** (built but empty; the proposal's sets were unsourced): a public-domain harmony or a licensed cross-reference dataset. M.
- **C4. Catholic Pasajes of Eucharist, Papacy and Sola Scriptura** (only Baptism·Catholic has a «Pasajes» page): each passage's full reference and the tradition's own reading with citation, from the dossiers' Scripture sections; gaps researched. M.

## D. English

- **D1. English quotes with a dated English edition:** 349 of 473 [measured] plus the 92 without any excerpt. Mostly lookup: CCC and Vatican II on vatican.va (quotation caps), Trent Waterworth 1848, Lutheran Triglot English, Westminster original English, Orthodox Robertson 1899 / Mogila 1762 / Philaret English. L.
- **D2. New Advent Fathers' English against the printed ANF/NPNF volumes** (`docs/research/sources/registry-resourcing.md` re-sourced 127/127 Eucharist quotes; not applied; the «replace» rows wait on Pedro, F4). M.

## E. Fathers & dates

- **E1. Apply the Fathers verification ledger** (34 CHANGE, 19 QUALIFY) and its unconfirmed residue (Theodoret c. 440; the Damascene's 743 and image treatises; Chrysostom 344; Tertullian 204 and 207–213; Justin's *Apology*; Cyril 351; *De natura et gratia*; Novatian; «died before N»; dates in prose). `ROADMAP.md` background 2c. M. Waits on a review pass.
- **E2. «Fechas y autenticidad» for the other 55 Fathers** in the `FatherDating` shape (today only Ignatius). L.
- **E3. Ignatius dating residue:** Schoedel p. 5, Joly p. 115, Pervo pp. 134–135, a citable source for «c. 107–110» (`docs/research/neutral/ignatius-books-verification.md:19-61`). S.
- **E4. Birth years of 7 persons** (Clement of Rome, Ignatius, Melito, Theophilus, Methodius, Optatus, Vincent of Lérins). Waits on Pedro (stay null?).
- **E5. Witness paragraphs and the Eucharist page-10 inventory:** 8 outcomes saved, 86 inventory records, nothing applied (`docs/research/neutral/witness-paragraphs.md`). M.
- **E6. Fathers' English corpus reading pass:** 118 draft works unread; the ten apostolic works failed review-1 and the defects are still in the files. Paused (`DECISIONS.md` «corpus paused»). L.
- **E7. Corpus continuation and translator clearance** (Novatian; Lewis–Martley, Oxford Galatians, Salmond, Randell, Browne and Swallow). Paused. M.
- **E8. Spanish Fathers production** (Camino 1807, Manero 1789, Ribadeneyra, Scío; Molina and Díaz de Beyral). Not ordered. L.
- **E9. «Sus escritos» descriptions for the 56 Fathers** (only Ignatius researched). L.
- **E10. Spanish labels of 105 works** (`src/content/father-work-links.ts`), the English Fathers registry (unproofread), a registry entry for `aristides-apology`. S–M.
- **E11. Fathers' dates in the dossiers:** Chrysostom 388 «según Baur»; Ambrose *De mysteriis* 387–391; *Mystagogical Catecheses* range; Gregory Ep. VIII.30 → 598. S.
- **E12. Ignatius *Smyrnaeans* 6.2 vs 7.1** (corpus vs witness). S.

## F. Citations, registry & excerpts

- **F1. Apply `docs/research/sources/citation-excerpts.md`** (27 Catholic records, 43 work languages; gates listed in its header). Research done, not applied. S–M, repo only.
- **F2. `originalLang` for the 33 newer works.** S.
- **F3. Shared edition bibliographies** (18 records; Mansi col. 1055 vs 1031–1033). Waits on Pedro (a bibliography per doctrine).
- **F4. Registry re-sourcing to dated scans** (44/44 entries, 127/127 quotes; withhold 5 John 6 passages). Waits on Pedro («replace» rows).
- **F5. «Fuentes» data gaps:** repeated works in three status rows; Belgic, Heidelberg, London cited with no edition; Waterworth without year; CEC edition and Spanish Westminster incomplete (`twelfth-session-queue.md:71`). S.
- **F6. Shared councils with speaker `orthodox`** (`chalcedon`, `constantinople-1`, `trullo`, `src/content/registry/works.ts:163-192`). Confirm the neutrality rule.
- **F7. Holy See quotation budget across the 20 pages** (word counts per text). S.

## G. Bible and word data

- **G1. STEPBible TAGNT/TAHOT + TBESG/TBESH for the whole Bible** (screen 07, the verse panel's «Palabras»; today John 6 only). L. After the dossiers.
- **G2. Spanish glosses** **[answered 2026-11-01: confirm no CC BY Spanish source; else own glosses from STEPBible's CC BY English]**. M.
- **G3. Spanish section headings and paragraphs:** no public-domain source; an editorial layer seeded from BSB (`docs/research/sources/section-headings.md:59-63`). L authoring.
- **G4. Spanish deuterocanon** (Torres Amat 1894 OCR; Straubinger's status). Waits on the paying-public-domain question.
- **G5. Spanish Bible wording when an argument rests on it** (Ps 97:7, Mal 1:11, Gn 14:18, 2 Macc 15:14; D7). Waits on Pedro.
- **G6. PDDPT's conflicting CC BY / CC BY-SA statements.** Waits on Pedro.

## H. Videos

- **H1. Videos for the 19 empty tradition pages** (criterion **[answered 2026-11-01]**, as C1; v2 pool of 70 Eucharist videos in `docs/research/content-notes.md:78` as a start). L.
- **H2. Map the 15 Eucharist·Catholic videos to its 7 objections** (only OB-1 has its 3) and find more per objection for Eucharist and Baptism; check each video says what its title says. M.
- **H3. Affiliation of small channels** (`docs/research/content-notes.md:80-82`). S.
- **H4. YouTube compliance:** the official attribution icon, recheck of the terms' revision history (`docs/research/youtube-covers.md`). S.

## I. Glossary

- **I1. 9 terms with no entry** (A28, C3, C16, C17, C24, D28, E2, E3, E4) [measured], 15 fully `[not found]`, D17/D26 need the *Normae universales de anno liturgico* (1969), A22 lacks its Orthodox cell (`docs/research/glossary-terms.md:857-872`). S–M.
- **I2. 27 quoted entries with no edition, 2 tagged «pending»** [measured] (`data/site/glossary.json`). S.
- **I3. Kolb–Wengert numbers for the Apology** (needs a licensed copy). S.
- **I4. B13 (1880 Shorter Catechism Q. 88 vs 1647) and the *Oros* Greek** (D27). S.
- **I5. Glossary coverage of the 16 new pages** (authority categories and new vocabulary). M.

## J. History entities

- **J1. Councils and movements verification log** (`docs/research/neutral/councils-movements.md:113-123`, `docs/research/traditions/consistency.md:169-177`). M–L. Waits on Pedro for §4 Q1–5.
- **J2. Apply `docs/research/content-and-history-notes.verify.md` to `history.json`**; the divisions and Reformation texts are unverified v2 prose. M.
- **J3. Short labels for the 119 timeline events.** Waits on Pedro.
- **J4. Neutral-universe questions** (cutoff answered; Coptic/Armenian «Part E», anonymous corpora, Hippolytus, 2 Clement, the word «Padre», Spanish name forms). Waits on Pedro.

## K. Licences & legal

- **K1.** FNA art. 6 exemption procedure (Pedro files it). **K2.** Lawyer questions (`docs/research/sources/legal-gaps.md:322-350`). **K3.** Where CC BY attribution goes (STEPBible, OpenGNT, SermonIndex, «WEB»). **K4.** The 1848 encyclical's English e-text (translator unknown, «© Paul Halsall»): is it used?

## L. Other

- **L1.** Supabase paid-plan price. **L2.** Browser storage for notes (Safari) before launch. **L3.** Model decisions that gate data: the Fathers and reasons of «Por qué» that the model has no place for; the doctrine-history page.
