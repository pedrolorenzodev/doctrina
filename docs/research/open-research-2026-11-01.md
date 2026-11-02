# Open research and data-gathering tasks (inventory of 2026-11-01, updated after the research night)

Replaces the first version of this file (same path, same item ids A1, B2…, so `docs/features/research-night.md` and the night logs still resolve). Sources of the states below: the night logs in `docs/research/night-2026-11-01/` (`session-1.md`, `session-2.md`, the two `verification-*.md`), the files the night wrote, and a read of `src/content/pages/*` on 2026-11-01 (afternoon). Numbers tagged **[measured]** were counted on 2026-11-01; states taken from the logs were not re-measured. Every file the night wrote is `Status: draft, NOT verified by Pedro` and had **one** verifier pass (14–20 wrong items per file, all corrected; none re-verified after the corrections).

Pedro's answers of 2026-11-01 (DECISIONS) unblock A6, C1, C2, H1, B2 (cutoff) and G2; marked **[answered 2026-11-01]**.

Headline [measured]: 616 source citations; 92 with a locator and no excerpt; 349 of the 473 citations that have Spanish lack English; `originalLang` empty for all 76 works; `videos.items` empty on 19 of 20 tradition pages; `objections.items` empty on the 16 non-Catholic pages; only `eucharist/doctrine.es.ts` exists as a doctrine page 02 (the home rows of Baptism, Papacy and Sola Scriptura are muted); apologists layer only on Baptism·Catholic (8 quotes on 3 passages); no page has parallels. Passages [measured]: 64 on the four Catholic pages (Baptism 19, Eucharist 14, Papacy 14, Sola Scriptura 17), 167 on the 16 others.

## State after the two afternoon sessions (2026-11-01, 16:40; details in `docs/research/day-2026-11-01/session-A.md` and `session-B.md`, sections «What is left» / «Left»)

Done as drafts, verified once: A2 and D1 corrections and 146 of the 154 D1 ids (8 skipped with reason: Florence ×5, Roman Catechism, John Paul II audiences ×2); 19 of the 64 A2 Spanish excerpts (45 pending, Lutheran and Orthodox); the small dossier fixes of A-1.3; the NPNF stretch for 13 witnesses (Baptism 6, Papacy 4, Sola Scriptura 3); `neutral/date-conflicts.md`, `neutral/e11-e12-findings.md`, `doctrines/b3-silence-cells.md` (13 of 18 cells); `apologists.md` open doubts (Cooper is AALC; the 322k channel is Trenham's publisher's); the 1689 margins re-read from page images into the four `passages/*-baptist.md` (primary print: London 1719); C1 for 25 of the 62 Catholic passages (`passages/apologists-catholic-<doctrine>.md`); H1 for the three Catholic pages (17 videos). **Not done:** all of A-3 (A1 deepening, A3, A7, A9, A6, F5, F7, F2, K4, I5); B5, the Eucharist practice-table verifier, 5 B3 cells; C1's other 37 passages; H1 for the 16 non-Catholic pages, H2, C5, C3, C4, H3, H4. Decisions D1, D2, D4, D6 and two more were settled the same afternoon (DECISIONS «Independence of apologists and the 1689…»).

### Round 2 (2026-11-01, 18:00; logs `session-A2.md`, `session-B2.md`)
Done as drafts: the 45 A2 Spanish excerpts (AI Spanish from the dated English, labelled); D1 Roman Catechism (Florence ×5 and John Paul II ×2 have no free English); all 17 B3 cells; date conflicts; 6 more NPNF witnesses (Basil, Leo, Sardica, Jerome, Augustine); the Eucharist practice-table verification (3 cells wrong); 8 candidate connected-doctrine edges (4 chosen, see DECISIONS); K4; C1 for 23 more passages (11 have none found); H1 for the 16 non-Catholic pages (30 videos). **Decided in the evening:** D3, D4 (Augustine 396–397), D6, the connected edges, Constantinople I, AI Spanish, glosses and attribution (DECISIONS «2026-11-01 (evening)»). Open: A-3 except K4, C3, C4, C5, H2–H4, E1/E2/E9, F5/F7/F2, I1/I5. Round 3 lanes: `docs/features/research-two-sessions.md`.

### Round 5 (night of 2026-11-01 to 11-02; logs `session-A5.md`, `session-B5.md`, `session-C5.md`, `session-C6.md`, `codex-5.md`; details and counts in `docs/features/research-two-sessions.md`, «Round 5 results»)
Done as drafts: the 20 Scripture lists (562 of 1,119 records new against the pages) with 9 verifiers; apologists for 14 non-Catholic Pasajes files (about 83 long-form blocks) and long-form under the Catholic quotes; whole-Bible word data and 22 Spanish Father works (Hermas, Irenaeus *Against Heresies* 3–5, Justin *Dialogue* 1–19 among them). **C5 is now partly done** (Orthodox Papacy and Reformed Sola Scriptura missing; almost no passage with 2 persons); **G1 is done as data** (not read by the app; the 63 MB stay out of git, DECISIONS 2026-10-23); **E8 started** (Fathers in Spanish; the loader does not read `fathers-es`). **A6 partly done** (1688 margins of 1.6–1.10, 26.1–26.6, 28.1–2, 29.3–4, 30.1–30.6 read from page images). New open items: **M1** re-verify the corrections of A5 (V1, V2, V4–V8), C5/C6 and the Spanish divisions no verifier read; **M2** regenerate the `.md` of the Papacy Catholic and Orthodox lists from their corrected `.json`; **M3** the licence of the AI Spanish translations (validator accepts only `public-domain`); **M4** Orthodox Papacy and Reformed Sola Scriptura apologists, a second person for every passage, Ligonier's 2,814-article sitemap not yet crawled; **M5** Irenaeus books 1–2, Justin 20–142, Tatian, Athenagoras, Theophilus, Melito, Clement of Alexandria in Spanish; **M6** Holy See per-page counts (F7) on the Lumen gentium rows of 128 words.

## UI that research still blocks

| UI | Needs (items) | State |
|---|---|---|
| 02 of Baptism, Papacy, Sola Scriptura + home rows | B1, B2 (c. 256–749 missing), B3, B5, B6 | Drafts, one verifier pass; gaps listed below |
| 03 / objections / tree rows of the 16 non-Catholic pages | A1 (deepen the 14 thin files) | Drafts |
| Pasajes: apologists layer, Catholic (64 passages) | C1 (2 done) | Gated by decision D2 below |
| Pasajes: apologists layer, the 16 non-Catholic pages (167 passages) | **C5, new** | Not in the first inventory |
| Pasajes: Baptist readings, parallels, Catholic gaps | C2, C3, C4, A6 | Drafts |
| Videos on 19 pages | H1, H2, H3, H4 | One page of 20 checked |
| Citation windows (excerpts and English/Spanish text) | A2, D1, F1, F2, F5, F7, A3, A7 | Codex drafts with defects open |
| «Fuentes» and its footer link | F3, F4, D2, F5 | Wait on Pedro (F3, F4) |
| Fathers (screen 09) | E1, E2, E3, E5, E9, E10, E11, E12 | Not started except E3 residue |
| Councils and movements entity pages | J1, J2 | J1 waits on Pedro |
| Word panel (07), Bible | G1, G2 | G2 answered by a finding |
| Glossary | I1, I2, I3, I4, I5 | Partly |
| Attribution / licences page | K3, K4 | Findings only |

## Decisions that gate research (Pedro)

- **D1. 1689 / Heidelberg / Belgic in every doctrine.** DECISIONS 2026-10-15 discarded the 1689; 2026-11-01 answer 3 applies it everywhere. The files show it as a separate, labelled answer until Pedro confirms (gates A6, C2, parts of A1).
- **D2. What «independent» means for the Catholic apologists.** Heschmeyer, Horn, Akin and Broussard are all Catholic Answers staff, so counted by organisation no passage reaches 3. `apologists.md` counts by person and work; `passages/apologists-catholic.md` counts by organisation. Recommended: count by person and work, and add voices outside Catholic Answers (his list is not closed, DECISIONS 2026-10-29), each assessed with the same criterion. Record both counts meanwhile. Gates C1 and C5.
- **D3. Objections aimed at Rome.** Do Reformed/Lutheran texts rejecting transubstantiation, the Mass sacrifice or adoration count as objections to the Orthodox line (they use Dositheus's terms), and do Trent IV / *Pastor aeternus* count as objections to the Protestant lines? The rule says «rejects in words». Gates the scope of A1.
- **D4. Date conflicts** between `fingerprint-dates.md` and `neutral/writers-to-325.md`: Didache (50–120 vs 50–150), Justin (148–161, ticked c. 155), Tertullian (198–208); also Augustine 396 vs 397 (A7).
- **D5. Glosses (G2).** Keep Doctrina's own STEPBible-based glosses (recommended) or ask the author of *Lexicon Omnium Gentium* which English source it used and under what licence.
- **D6. Sola Scriptura question 1** is worded close to WCF 1.6; what the three «Cómo se vive» tables show in cells left `silencio` / `no consultado` (reading those texts is research; what the page shows is Pedro's).
- **D7. Where the CC BY attribution goes** (OpenBible, STEPBible, OpenGNT, SermonIndex, «WEB»): K3.
- **D8. Open points outside the night's files:** `eucharist/lutheran.md` «Asymmetry» says «Orthodox 4» but lists five; the Dositheus XVII clause is translated two ways («especie y figura» in `reformed.apply.md`, «apariencia y figura» in `orthodox.md`); LCMS art. II names the Smalcald Articles but not the Treatise (`papacy/catholic.md` l. 300 vs `papacy/lutheran.md` L-06); the Antichrist clause in `papacy/lutheran.md` lacks its own status line (A9).
- Still waiting on Pedro from before: A4, E4, F3, F4, G4, G5, G6, J1, J3, J4, K1, K2, L1–L3. Paused: A8, E6–E8. E1 waits on a review pass. B6 needs a proposal first.

## A. Content dossiers & objections

- **A1. Official-layer objections for the 16 non-Catholic pages.** Night result: 16 files `docs/research/doctrines/<doctrine>/<tradition>.objections.md`, verified once (16 + 42 + ~30 wrong corrected). `eucharist/lutheran` is an index only: its 11 objections already live in `eucharist/lutheran.md` §4 and `lutheran.es.ts` has `objections.items: []` (import, not research). The other 14 hold 1–3 objections each (the Catholic pages have 7–11), built from quotations already verified in other dossiers plus WCF on opc.org; many answers say «the dossier has no text on this», which is a limit of the method, not proof the documents are silent. **Open:** reread each objecting tradition's own primary documents (Triglot, Westminster, Dositheus/Mogila/Philaret/1895 encyclical, 1689, Trent/CCC) and add objections where they speak; keep status lines next to harsh wording; apply D3 when answered. L.
- **A2. Excerpts for the citations with only a locator.** Night result (Codex, `sources/citation-excerpts-2.md`): 91 ids, 67 with excerpt (73 texts), 24 skipped (already in `citation-excerpts.md`); quotes are real. **Open:** 28 excerpts clipped (8 must be corrected: `LSAII_4_7_9`, `RWLC173`, `RWCF29_4`, `LACXXV_1`, `LACXXIV_1_3`, `LFCEpRN_1_y_7`, `LFCSDVII_83_84__87`, `CEC892`; 20 need an ellipsis), the corrected wordings are in `night-2026-11-01/verification-codex-a2-d1.md` §1; duplicates (RWCF31_3 vs 31_3_4, RWLC171 vs 171_172); **58 Spanish texts `pending`** (level 1 where a public-domain Spanish edition exists, otherwise from the original language, labelled AI-assisted); Lutheran text is a BookOfConcord.org web transcription, not the 1921 Triglot print page. S–M.
- **A3. Lutheran Eucharist leftovers.** Partly done in `dossier-residues-2026-11-01.md` (Theophylact b. c. 1050 d. c. 1108; Justin *1 Apol.* 66, Augustine *Tract.* 80.3, Irenaeus IV.18.5 located; CCC 611 n. 433). **Open:** Apology X.55–56 names no work for «Vulgarius»; Augustine's Latin «Accedit verbum ad elementum»; Chrysostom «Serm. de Pass.» vs *De proditione Iudae* I.6; communion of the sick beyond SD VII.83–87; body sources for the Variata and closed communion; DS 1752 = Trent XXII can. 2 in a source that prints the pair. S–M.
- **A4. Orthodox source gaps** (Philaret's Russian original, 1838 recension, Mogila I.107 Greek, Krivoshein, Jeremias II, convert-reception canons). Waits on Pedro (`baptism/orthodox.md` Questions item 2). L.
- **A5. Westminster 1894 editor line.** Found, not applied: the only active wrong imprint is `eucharist/reformed.md:143`; correct «Edinburgh: Johnstone, Hunter, & Co., 1894» (`dossier-residues-2026-11-01.md`). S.
- **A6. 1689/Heidelberg/Belgic outside the Eucharist** **[answered 2026-11-01: they apply to every doctrine; see D1]**. Not done: re-verify against a scan of a dated edition (read page images, not OCR alone) the margin proof-texts kept in `*/baptist.apply.md` and `*/reformed.apply.md`, which the four `passages/*-baptist.md` files use unverified, and reinstate them. M.
- **A7. Catholic dossiers' `[pending: Codex]` items** (Baptism CIC 868 §2, Karmiris/1698 *Tomos*, FC XII, *Oros* Greek, Mansi 38:617–622; Papacy 1895 encyclical §XIV–XIX Greek, Russo-Greek Papers, *Brief Statement*; Sola Scriptura WCF 1647 proof-text lists, licence re-read, Augustine 396 vs 397). Not started; read the 2026-10-22 DECISIONS answers (`doctrines/*/review-answers.apply.md`) first. M.
- **A8. Apologetic answers unconfirmed (debate layer, paused).**
- **A9. Status lines for harsh wording.** Answered in `dossier-residues-2026-11-01.md` (harsh-wording table); open point D8 (Antichrist clause in `papacy/lutheran.md`). S.

## B. Page 02 shared content (Baptism, Papacy, Sola Scriptura)

- **B1. Common ground and 1–3 neutral questions** and **B3. practice comparison.** Night result: `docs/research/doctrines/{baptism,papacy,sola-scriptura}/shared.md` (350/304/299 lines; §7 verification 116/83/83 items, 14/20/20 wrong, corrected). **Open:** rows still `[unverified]` (Constantinople I, Florence's day, Ambrose *De sacramentis*, Justin/Irenaeus BiblIndex ranges); cells marked `silencio` / `no consultado` because the dossiers did not read those texts (reading them is research); D6. Also **re-verify the Eucharist practice tables** of `src/content/pages/eucharist/doctrine.es.ts` (built the same way as the files that needed 14–20 corrections; never re-verified; read-only pass, report in `docs/research/`). M.
- **B2. Neutral early witnesses.** Night result: §6 of each `shared.md`, **only ANF, authors before c. 256**, string-matched in archive.org OCR (ANF vols 1, 3, 5, 7); the three files use different ANF vol. 5 scans (choose one). **Open:** the NPNF stretch c. 256–749 (cutoff answered): archive.org answered 401 and CCL navigation failed at night; try Playwright on CCL, HathiTrust, Wikisource or the scan through a real browser; New Advent only locates, it is not the edition. Candidates: Cyprian, Firmilian, Augustine on baptism and the Donatists, Leo, Gregory, Cyril, Ambrose, whatever each file's §6 and `neutral/writers-*.md` list. L each.
- **B4. Fingerprint dates for Baptism.** Done (draft): 38 rows in `fingerprint-dates.md` (28 confirmed, 5 corrected, 5 unconfirmable). Proposes registry fixes, **report only, outside `docs/research/`**: `vienne` `yearEnd: 1312`, `wlc`/`wsc` 1647→1648, `oros-1755` loses `alsoYears` and the «/56». Date conflicts: D4.
- **B5. Connected doctrines' «why» per edge** (only Eucharist edges exist, `data/raw/eucharist.content.json`). Not started. S.
- **B6. Doctrine history (~25 events) per doctrine:** no page design exists; a proposal comes first. M each.

## C. Pasajes

- **C1. Apologists layer, the 64 Catholic passages.** Criterion in `apologists.md` (**[answered 2026-11-01]**: the most popular, recognized as most faithful to their tradition's documents and deep on doctrine; Catholic: Heschmeyer, Horn, Akin, «How to Be Christian», Otálora + Karlo Broussard; open doubts: «How to Be Christian» host and credentials, Otálora's identity). Night result: pilot of 2 passages in `passages/apologists-catholic.md` (John 6, Matthew 16:16–19); neither reaches 3 independent persons (D2); the method is written in the file. **Open:** 62 passages (the Baptism page already has 8 quotes on 3 passages: check before duplicating). Each quote: exact words, minute or page, URL, tag; record both independence counts. yt-dlp answers HTTP 429 after about 20 subtitle requests: use `~/.doctrina-youtube/transcript.js` and prefer articles and books. L.
- **C2. Baptist Pasajes.** Night result: `passages/{eucharist,baptism,sola-scriptura,papacy}-baptist.md`: **no official per-passage reading found** in BF&M 1925/1963/2000, New Hampshire, the Abstract (per Pedro's answer the page says so); the 1689 margin proof-texts come from `baptist.apply.md`, not re-verified (A6). **Open:** recheck whether any Baptist body reads passages one by one (SBC, London Baptist, ARBCA, Baptist Union); Baptist apologists (Ortlund: Baptist or Reformed is an open conflict with D1). L.
- **C3. Parallels, sourced.** Night result: `passages/parallels.md` recommends OpenBible.info's CC BY 4.0 cross-reference dataset (344,799 pairs; preview for the 64 Catholic passages); its high-vote pairs are often thematic, not parallels. **Open:** a public-domain harmony (Huck, Robertson, Stevens–Burton: check publication years and copyright in the US, Spain, Latin America) and STEPBible cross-references were not searched. M.
- **C4. Catholic Pasajes of Eucharist, Papacy, Sola Scriptura.** Night result: `passages/{eucharist,papacy,sola-scriptura}-catholic.md`: join of page data and dossier rows with gap flags (verified once). **Open:** the CCC citation-index gap fill found no usable source (vatican.va has no index; try other official or print-scan sources, Wayback, a print index scan). M.
- **C5 (new). Apologists layer for the 16 non-Catholic pages (167 passages [measured]: Baptism 42, Eucharist 38, Papacy 46, Sola Scriptura 41).** Not in the first inventory. DECISIONS 2026-10-29 / `docs/features/passages-page.md`: every tradition that turns on needs the same layer; criteria as C1; a passage without data keeps its tab muted. `apologists.md` lists candidates per tradition (Orthodox: Trenham, De Young, Damick, Dyer; Lutheran: Cooper, Wilken, Fiene; Reformed: White, Sproul/Ligonier; Baptist: Ortlund) with gaps: Spanish-language creators for the four traditions, independent recognition, Trenham's channel size, Wilken's and Sproul's bios, Cooper's synod, Apologia Church's confession. Suggest measuring cost on one tradition and one doctrine before opening the rest. L.

## D. English

- **D1. English quotes with a dated English edition.** Night result (Codex, `sources/english-quotes.md`): 213 done + 2 unverified of 369; quotes are real. **Open:** **154 ids left** (Vatican II LG/UR/DV/SC, most of CEC 552–2246, CIC 212/833/1404, UUS, CDF documents, Florence, *Pastor aeternus*; input list `~/.doctrina-youtube/night1101-d1.json`); ~105 fragments end mid-clause; 11 Trent canon fragments lack the anathema frame or give the condemned proposition bare (T6c20, T6can11, T7sacr7, T7b3, T7b4, T7b10, T22can, T7b7, T7b13, T13can9, T7sacr9); Overbeck's «first printed 1762» is contradicted by the scan's own notice; CEC1265 and CEC84 strings not found on the official page; the two 1895 encyclical rows and LACIX_1_2 not fetched; Lutheran text is a web transcription. Corrected wordings in `night-2026-11-01/verification-codex-a2-d1.md` §2 onward. Holy See texts in copyright: fragments ≤ ~40 words (F7). L.
- **D2. New Advent Fathers' English against the printed ANF/NPNF volumes** (`sources/registry-resourcing.md`; the «replace» rows wait on Pedro, F4). Not started. M.

## E. Fathers & dates

- **E1. Apply the Fathers verification ledger** (34 CHANGE, 19 QUALIFY) and its unconfirmed residue. Waits on a review pass. M.
- **E2. «Fechas y autenticidad» for the other 55 Fathers** (today only Ignatius). Not started. L.
- **E3. Ignatius dating residue** (Schoedel p. 5, Joly p. 115, Pervo pp. 134–135, a citable source for «c. 107–110»). S.
- **E4. Birth years of 7 persons.** Waits on Pedro (stay null?).
- **E5. Witness paragraphs and the Eucharist page-10 inventory** (`neutral/witness-paragraphs.md`: 8 outcomes saved, 86 inventory records, nothing applied). M.
- **E6–E8.** Fathers' English corpus reading pass, corpus continuation and translator clearance, Spanish Fathers production. Paused.
- **E9. «Sus escritos» descriptions for the 56 Fathers** (only Ignatius researched; each needs a dated edition per work, so it depends on B2's NPNF access). Not started. L.
- **E10. Spanish labels of 105 works**, the English Fathers registry, a registry entry for `aristides-apology`. S–M.
- **E11. Fathers' dates in the dossiers** (Chrysostom 388 «según Baur», Ambrose *De mysteriis*, *Mystagogical Catecheses*, Gregory Ep. VIII.30 → 598). S.
- **E12. Ignatius *Smyrnaeans* 6.2 vs 7.1.** S.

## F. Citations, registry & excerpts

- **F1.** Apply `sources/citation-excerpts.md` (research done, repo-only). **F2.** `originalLang` for the 33 newer works. **F3.** Shared edition bibliographies; waits on Pedro. **F4.** Registry re-sourcing to dated scans; waits on Pedro. **F5.** «Fuentes» data gaps (repeated works, Belgic/Heidelberg/London with no edition, Waterworth without year, CEC edition, Spanish Westminster). **F6.** Shared councils with speaker `orthodox`: confirm the neutrality rule. **F7.** Holy See quotation budget across the 20 pages (word counts per text). All as in the first inventory; none started by the night.

## G. Bible and word data

- **G1.** STEPBible TAGNT/TAHOT + TBESG/TBESH for the whole Bible (today John 6 only); after the dossiers. L.
- **G2. Spanish glosses.** Night result (`sources/spanish-glosses.md`): one CC BY 4.0 Spanish gloss dataset exists (*Lexicon Omnium Gentium*, Zenodo 10.5281/zenodo.19099634; LLM-generated with MiniMax M2.5, English source unnamed); OpenGNT's Spanish layer has no licence line of its own (its README is BY-SA since 2018-08-27); no other CC BY or public-domain Spanish source found. Recommendation: keep the decided route (own AI-drafted glosses from STEPBible's CC BY English, labelled automatic). Decision D5.
- **G3.** Spanish section headings and paragraphs (editorial layer seeded from BSB). **G4.** Spanish deuterocanon; waits on Pedro. **G5.** Spanish Bible wording when an argument rests on it; waits on Pedro. **G6.** PDDPT's conflicting licence statements; waits on Pedro.

## H. Videos

- **H1. Videos for the 19 empty tradition pages** (criterion as C1; v2 pool of 70 Eucharist videos in `content-notes.md:78`). Not started. Per video: title, channel, URL, language, duration, date, what it defends, checked against its captions; output `videos/<doctrine>-<tradition>.md`. L.
- **H2. Videos per objection.** Night result (`videos/eucharist-catholic.md`): the 15 existing Eucharist·Catholic videos checked against captions, 14 confirmed (Akin's `PucLuJsfekA` has no readable captions); only OB-1 has videos (+ candidate `vpOV2kYPGbs`); candidates OB-2 `_oD0K0qdAQs` (Heschmeyer, strong), OB-3 `jv17wOIn-0w` (speaker unnamed); **none found for OB-4 to OB-7**. **Open:** OB-4..OB-7, and Baptism. The file's table header has rows with an extra column to normalise. M.
- **H3.** Affiliation of small channels (`content-notes.md:80-82`). **H4.** YouTube compliance (official attribution icon, recheck the terms' revision history, `youtube-covers.md`). Not started. S.

## I. Glossary

- **I1. Terms with no entry.** Night result (`glossary-gaps.md`): of the 9 empty terms (A28, C3, C16, C17, C24, D28, E2, E3, E4) seven already have data in `glossary-terms.md` (verified 2026-10-21) and never reached `data/site/glossary.json` (import, not research); D28 and E4 are `[not found]`. **Open:** 15 fully `[not found]` terms; D17/D26 need the *Normae universales de anno liturgico* (1969); A22 lacks its Orthodox cell. S–M.
- **I2.** The 27 quoted entries without edition: carry-over table with the edition table in `glossary-gaps.md`; B13 and D27 already answered by Pedro (2026-10-22). S.
- **I3.** Kolb–Wengert numbers for the Apology (needs a licensed copy; probably «not possible»: report what was tried). **I4.** B13 (1880 Shorter Catechism Q. 88 vs 1647) and the *Oros* Greek. **I5.** Glossary coverage of the 16 new pages. Not started.

## J. History entities

- **J1.** Councils and movements verification log; waits on Pedro for §4 Q1–5. **J2.** Apply `content-and-history-notes.verify.md` to `history.json` (the divisions and Reformation texts are unverified v2 prose). **J3.** Short labels for the 119 timeline events; waits on Pedro. **J4.** Neutral-universe questions; waits on Pedro.

## K. Licences & legal

- **K1.** FNA art. 6 exemption procedure (Pedro files it). **K2.** Lawyer questions (`sources/legal-gaps.md:322-350`). **K3.** Where CC BY attribution goes (STEPBible, OpenGNT, OpenBible, SermonIndex, «WEB»); D7. **K4.** The 1848 encyclical's English e-text (translator unknown, «© Paul Halsall»): is it used?

## L. Other

- **L1.** Supabase paid-plan price. **L2.** Browser storage for notes (Safari) before launch. **L3.** Model decisions that gate data (Fathers and «Por qué» reasons with no place in the model; the doctrine-history page).

## Not research (an implementation session does it)

F1, F2, F6 (a confirm), G1 (after the dossiers), G3 (authoring), B6 (design first), L1–L3, importing the night's files (A1 Eucharist·Lutheran, I1's seven terms, the registry fixes of B4 and A5).
