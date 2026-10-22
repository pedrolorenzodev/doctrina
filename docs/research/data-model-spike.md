# Data-model spike (2026-10-22)

Throwaway spike approved in DECISIONS 2026-10-22 «Implementation start: the six open calls». It converts the five reviewed Catholic dossiers into typed data and type-checks them against the model proposed in `docs/features/implementation-start.md` (D1, D2, D6, D7, D8). Nothing in `src/`, no repo file but this one touched. Facts below were measured by the scripts; `[inference]` marks my reading.

Spike project (scratchpad, not in the repo): `/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/6a07429c-471c-488c-8893-4358bbe90404/scratchpad/model-spike/` (`src/types.ts`, `works-table.mjs`, `convert.mjs`, `check.mts`, `drift.mjs`, `generated/`; `npm run all`).

## 1. Result

- All five doctrines converted and type-check (`tsc --noEmit`, `strict`, `noUncheckedIndexedAccess`): 5 `TraditionPage` modules (Eucharist 9 statements / 9 objections, Justification 10 / 7, Baptism 12 / 14, Papacy 9 / 8, Sola Scriptura 10 / 7) plus one shared registry: 69 works, 81 editions, 644 citations, 213 verse entries.
- The checker (`check.mts`) passes with 0 hard failures. A self-test injects an unknown citation, verse, glossary id, grade, token kind and a review-only key; all are detected. `tsc` also rejects an unknown citation id or grade in a structured field (compile time); ids inside prose `{c:…}`, `{v:…}`, `{g:…}` are only checkable at runtime (checker, i.e. the build).
- "Passes" needed converter decisions that are model changes (section 3). Without them the first pass failed on: `{t, rv}` objects where a string was expected, quote blocks as arrays, comma-joined ids in single-id fields, grades without `basis`, ids cited by prose that exist only in another doctrine.

## 2. Types as they ended (short)

In `src/types.ts`; shape only.

- Registry: `Work {id, title, short, kind, speaker, scheme: LocatorKind[], date?}` → `Edition {id, work, langs[], bibliography, licence}` → `Citation {id, work, kind: source|other-tradition|ecumenical|status, locator: {parts[{kind,value}], qualifier?}, date?: DateInfo, excerpts[], link?}`. `Excerpt {la?, es?, en?, de?: Passage; at?, note?, citedIn?[]}`; `Passage {text, edition, page?, translation?, derivedFrom?, verified?}`. `Verse {osis, text?, edition: "RV1909"}` keyed by OSIS passage string (`Heb.10.14,Heb.10.18`).
- Page: `TraditionPage<C, V> {doctrine, tradition, status:"draft", lede, teach{subtitle, definition, statements[]}, why{intro[], fathers[], note, closing}, scripture[], objections{order[], silentTraditions?, items[]}, life{intro[], items[]}, authority{grades: 4 Church grades, other}}`.
- `GradeLine = {kind:"church", grade, basis?} | {kind:"unclassified", reason, basis?, legacyCat}`; `SourceRef {citations: C[], label}`; `Objection {id, layer: official|debate, title, synthesis, raisedBy{traditions[], line}, objectorTexts{shown[], more[]}, answer: ({type:"p"}|{type:"quote", text[], attribution})[], apologeticAnswer?: "pending", sourcesCited: {citations[], name, dates[]}[], passages{answer[], objector[], objectorNote?}}`.
- Inline grammar actually emitted: `{c:ID,ID|label}`, `{v:OSIS,OSIS}`, `{s:section|label}` (new, replaces misused `{g:}`).

## 3. What fit, what didn't

Fit (converted 1:1, ids stable):
- Statements, definitions, Por qué (intro/fathers/closing), La Escritura que usa, Cómo se vive, Grado de autoridad rows, objection synthesis/answer/who/sources/passages: all five doctrines map onto the same page shape. Structural keys are identical across the five files.
- Typed ids: 637 of 644 registry citations are referenced by pages; every structured reference resolves.
- Locator parsing: 644 citations → 0 left without parts (except 15 non-status with no locator because the work is cited whole, e.g. Pastor aeternus proem, Fidei depositum).
- `satisfies` with a union-id generic gives a compile-time unknown-id error for structured fields.

Did not fit (each with an example):
1. **Citation ids are doctrine-local, not global (D6/D8).** 38 ids are shared across files; 5 mean different things: `WCF18` (XVIII.1–3 in Justification, I.8 in Sola Scriptura), `FCEP2` (Epítome II ¶11, 17–18 vs. Regla y norma ¶2), `AP2`, `BFM4` (art. IV.B vs. IV), `CEC1250` (one number vs. list). Same prefix, different work: `SC47` (Sacrosanctum Concilium) vs. `SC3` (Small Catechism). The converter renamed the later ones (`~b`, `~s`). Different ids for the same work: `DV17` (Donum veritatis) vs. `DVER17`; `FLO` vs. `FLOlae`; `ST1895` titles differ per doctrine.
2. **Edition is one free-text string per citation, not per language (D6).** 73 distinct `ED` strings; the same key varies across doctrines (`trent` 3 variants, `wcf` 5, `triglot` 5). One string mixes bibliography, licence, reading method and access notes ("leído en Wayback", "OCR"). Only the language labels («Latín y castellano: … Inglés: …») allowed a split. 30 passages are Spanish with no Spanish edition (our AI translation): they need their own edition record (`site-translation.<work>`) with `derivedFrom` (e.g. `PA1`, `DF2rev`, `WLC3`).
3. **Excerpt page/locator is a mixed text field (`pg`).** 310 values did not parse to a page: sub-locators («n. 4», «§11», «¶3»), DS numbers, translation notes, "cited in OB-3" cross-references and review remarks all share it. Model needed `at`, `note`, `citedIn`. 318 excerpts end with a `note`; of those 25 hit review language ("dosier").
4. **A "citation" is a locator plus an excerpt selection, not just a locator.** `PA4def`, `PA4neque`, `PA4open`, `PA4conv`, `PA4char` are all Pastor aeternus ch. 4; `BFM7a/b/c`, `AG6/6m/6s/6d` share one title. Title is not a key; a `qualifier` (56 citations) is needed and ids must be kept.
5. **Dates are strings with mixed precision and embedded notes.** «11 oct 1551», «1992/1997», «1311–1312», «1755/56», «may 1848», and «8 abr 1546 (sin confirmar: verificación 2, J5)» in 5 Trent IV citations. `DateInfo {year, yearEnd?, month?, day?, alsoYears?, unconfirmed?}` parses all 0 failures, but a review note lives inside the date field.
6. **Grade vocabulary is not closed (D1/D6 «only the four of the Church», DECISIONS 2026-10-15).** Besides `dogma`, `definitiva`, `magisterio`, `disciplina` the files use `trento`, `concilio`, `vat1`, `catecismo`, `acuerdo`, `sinGrado`, `sinGradoPropio`; 16 of 50 statements use one (Baptism 7, Papacy 5). The dossiers' own `rv` notes say «no es una de las cuatro categorías». Modelled as `unclassified` + `reason` + `legacyCat`; labels («Enseñado por Trento» vs «Enseñado por un concilio ecuménico») differ per doctrine and have `src` ids to resolve (`CDF11`, `CIC749`, `CDFP7`).
7. **Objection layers are encoded in ids and titles.** Debate objections are `DO-n` and their titles end in « — Frecuente en el debate» (9 stripped); Baptism uses `OB-6a/OB-6b`; the pending marker «_Respuesta apologética pendiente (capa de debate):_» sits inside the answer paragraphs (24 hits; 4 are inside real answer text and were kept). `layer` and `apologeticAnswer` are derived by the converter, not given.
8. **`who` is prose, not data.** «Suelen plantearla reformados y luteranos.» vs «Desde la tradición bautista se objeta que…»; parsed to `traditions[]` by keyword (1 of 45 not parseable: DO-2 Eucharist).
9. **Answer blocks are heterogeneous.** `string | {bq, attr}` with `bq` string or array (only 1 array case; 13 quote blocks overall); intro paragraphs sometimes `{t, rv}`.
10. **`{g:…}` is not a glossary token.** All 5 uses are `{g:Lo que escribieron los primeros cristianos}`, a link to section 02. Rewritten to `{s:early-witnesses|…}`. No glossary data exists, so a real `{g:}` has no registry to resolve against yet.
11. **Verse refs.** Spanish display refs (`Mateo 26:26, 28`) normalise to OSIS with 2 failures: «Hebreos 1:6 (Salmo 97:7); Mateo 2:11; …» (parenthetical cross-reference) and «Romanos 4:3 y siguientes». «Salmo» and «Salmos» are both used. Chapter-only refs exist («Hechos 15», «Gálatas 2»). 331 distinct OSIS segments are cited; only 229 have RV1909 text in the dossiers (102 do not, e.g. `Heb.11.6`, `Rom.11.6`): the text has to come from the Bible corpus, not the dossier. One verse has different text across doctrines (`Rom.7.17`, Baptism).
12. **D7 round trip.** Regenerating the display of La Escritura refs from OSIS: 80 of 83 match after normalising dashes and separators; the 3 misses are the 2 above plus «Lucas 24:45; 24:25-27, 44-46» (repeated chapter). Regenerating the statement source labels from work + locator: 65 of 234 single-citation labels match (all 65 `cec` labels differ: «Catecismo 1376» vs. a short name «CEC»); the labels are chosen text («Trento, ses. XXII, cánones 1, 3 y 4»), so a formatter needs per-work short names, «cann./can.» plural rules and the nbsp rule [inference: feasible, not built].
13. **Source references are groups.** 45 `sources` pairs have comma-joined ids («CEC1373,CEC1374») with one label; `SourceRef` became `{citations[], label}`. Objection «Fuentes citadas» rows are groups with a site-written name and a date list («1989 y 1991»).
14. **Statement text may carry an ungraded second sentence** (Papacy QE-2: `catholic.md` «segunda frase, fuera de la línea de grado»; data.js merges it into `text`).
15. **Opening for a rejected doctrine (DECISIONS 2026-10-20, option C).** Sola Scriptura puts the question in `DEFINITION.text` («¿Solo la Escritura? «[…]»») with empty grades and also adds a fake statement `id: "Definición"` as QE[0]. Needs `teach.opening {question, answer, source}`.

## 4. Fields the screens need that the dossiers do not provide

- Original language per work/passage for the «Latín · original» label (DECISIONS 2026-10-20): the excerpts carry la/es/en but not which is the original. Needs `Work.originalLang` or `Excerpt.original`.
- Per-excerpt `verified` flag (D6): data.js has none; the `[verified: OCR]` tags live only in `catholic.md`. 871 excerpts, 0 with a flag.
- Dates for 56 non-status citations (Lutheran confessions: Apology 13, FC Epitome 10, Augsburg 9, AD Statement 6, Smalcald 4, Mogila 3…; Misal, OGMR). The mini timeline needs a date per citation; a work-level date (Augsburg 1530 etc.) would fill most. Work dates were not invented here.
- Structured Father attribution: `attr` is «San Juan Crisóstomo, Homilías sobre la traición de Judas (predicada en 388, según Baur), en» (the trailing «en» belongs to the citation line). Screen 03 needs author, work, date separately (DESIGN «Quote + source block»).
- Status line under a harsh objection title (DECISIONS 2026-10-22, Papacy OB-7): data.js lists the status citation among the objector texts (`STLUTAC`); which one goes under the title is not stated.
- Authority table examples (DESIGN §5): not structured; derivable from statements by grade [inference]. The empty-row text («Ninguna afirmación… tiene este grado») exists only in review notes.
- Videos (screen 03 section, Objeciones, 04): no data in the dossiers.
- Glossary entries and section anchors for `{g:}` / `{s:}`.
- English: all copy is Spanish only (D3); `Localized` fields are not in the model yet. `title` en exists only in `catholic.md` («English title:»).
- Edition scan links: `LINKS` mixes edition scans (Ayala on archive.org) and official pages per section; the model has `Citation.link` only.
- Objection counts and «Ver las N» are derivable; shown-count rule (five, six for Baptism) is not stored, `META.qeShown` is the review page's value and is stale (Justification 6).

## 5. Inconsistencies across the five doctrines

- Naming: `DV17` / `DVER17`; `FLO*`; `ST*` status ids (`STWCF`, `STLUT`, `STLUTAC`, `ST1895`); `AG6/6m/6s/6d`; `SC` prefix used for two works; objection ids `OB-6a/6b`; QE id `Definición` (Sola Scriptura only).
- Locator schemes: Trent by `ses.`/`cap.`/`canon` but «sesión V (decreto sobre el pecado original), canon 5» and «ses. VII, De los sacramentos en general, canon 1» embed a heading; Westminster with American numbering («29.6 y 29.5»); Apology «IV (II), ¶73» (Triglot numbering plus Kolb–Wengert in parentheses); BFM «art. IV.B»; CIC «cann. 851 1°, 865 §1 y 866»; Lutheran texts use `¶` or roman-dot. 45 citations have a free-text `locus` part (named heading, «Declaración», «proemio»), 56 a qualifier in parentheses.
- Grade vocabulary: see 3.6. Four rows in `catholic.md` §6, six or seven rows in data.js GRADES.
- Objection layers: only Eucharist and Baptism have `DO-` items; Baptism lists `DO-3, DO-5, DO-7` first, Eucharist places `OB-5` after `OB-7` (`OB_ORDER` is a review proposal, not the dossier order); Justification, Papacy, Sola Scriptura have no debate layer; `OB_LIST_NOTE` (traditions that raise none) is null in Sola Scriptura.
- Title quotes: `"…"` (Eucharist, Justification), `«…»` (Baptism, Sola Scriptura OB-3).
- Editions: the same key carries different text per doctrine (item 3.2); `kind` values differ («Acuerdo ecuménico» only in Justification).
- Review vocabulary in site-facing fields: 4 answers with the pending marker inside real text, 6 `objectorNote`s mentioning «dosier», 5 date notes «sin confirmar».

## 6. data.js vs catholic.md drift

`drift.mjs` compared 245 fields (statement text, grade, titles, syntheses, definition, closing, counts). Result: 9 text differences, 4 id-set differences, 7 grade differences, 1 order difference, 5 count differences; about half are parser noise. Confirmed, per doctrine (not fixed, as asked):

- Eucharist: `OB_ORDER` puts OB-5 after OB-7, md numeric order (deliberate in the review page; the md has the dossier order). OB-1 and OB-2 syntheses: data.js turns parenthetical refs «(Hebreos 9:25-26; 10:14, 18)» into `{v:}` tokens; text otherwise equal. PC(USA) is already in data.js `STWCF` (matches the md).
- Justification: `META.qeShown` 6 while the rule is five (DECISIONS 2026-10-22); `catholic.md` log says data.js still shows «six visible statements, brackets in OB-2 and the old §6 row». QE-9 and OB-3: same parenthetical-to-token difference. Data.js has `GRADES` 6 rows (`acuerdo`, `catecismo` extra) vs 4 in md §6.
- Baptism: closing line stale (md: CEC 1257 «Dios ha vinculado la salvación al sacramento…»; data.js: the Trent-on-infants line); md reworded CV-1 (can. 868 §2, canon text pending) and data.js CV-1 has no «868». md still lists `OB-7` (retired 2026-10-21) and `OB-6`; data.js has 14 objections matching the md's active ones; 7 `GRADES` rows vs 4.
- Papacy: QE-2 data.js adds the second sentence (Peter's death in Rome) that md labels «fuera de la línea de grado» [an extra field, not stale]; md logs changes to the OB-3 and OB-6 answers (Q17, Q21) not diffed here; 7 `GRADES` rows vs 4.
- Sola Scriptura: **OB-7 is still in data.js** but md moved it to a debate-layer candidate on 2026-10-22 (7 vs 6 official objections); closing text stale (Q2 reworded); definition: data.js is the question opener, md's field is the positive definition; md log also says UR 21 clause added, OB-5 site note removed (`OB_LIST_NOTE` is null, consistent) and Augustine's date removed from the site draft (not diffed); 6 `GRADES` rows vs 4.
- Parser noise, not drift: Justification closing, Sola Scriptura multi-grade parse, Eucharist QE-5..8 grade lines, Justification «CV-10» (md says «No CV-10»), Baptism OB-6/OB-7 headings.
- Not covered by the script: objection answers, objector-text selection, scripture notes, citations' quotes. A full diff needs the md parsed into the same model [inference: that is the real D8 job].

## 7. Concrete changes to D1 / D2 / D6 / D7 before B2

D1 (typed modules + inline grammar)
1. Keep typed modules with `satisfies TraditionPage<CitationId, …>`: it worked and caught structured-id errors at `tsc`. Prose refs need the parser as a build step (checker did it).
2. Grammar: `{c:ID,ID|label}` (allow lists), `{v:OSIS[,OSIS]}` (OSIS inside, display generated), `{g:id}` only for real glossary ids, add `{s:section|label}` for section links. State that quote-only blocks are separate nodes, not markup.
3. Convert `{t, rv}` / `{bq}` shapes at import; nothing review-only enters `src/content`.

D2 (one page per doctrine × tradition)
4. Add to `TraditionPage`: `teach.opening` (question + answer) for rejected doctrines; `Statement.aside` for the ungraded second sentence; `Objection.layer` and `Objection.titleStatus` (status citation under a harsh title); `Objection.raisedBy.traditions[]` plus the debate line; `apologeticAnswer` as a content state; `authority` with `unclassified` entries.
5. Store the shown-count rule in code, not content.

D6 (three-level registry)
6. Global citation ids derived from work + locator (+ qualifier) instead of the dossier's local ids; keep an `idMap` for the import (5 collisions found).
7. Split `Edition.bibliography`, `licence`, `access` (notes), `scan`; one edition per language; add `site-translation` edition with `derivedFrom`; add `Work.originalLang`, `Work.date`; keep `Passage.verified` optional and fill it from the md tags.
8. Citation = work + `locator` + `qualifier` + excerpts; allow several citations per same locator when the excerpt selection differs, or move the selection into `Excerpt.at`.
9. Group references (`SourceRef.citations[]`, `CitationGroup`) are part of the model; objection «Fuentes citadas» keeps a site-written group name.

D7 (locators and verses)
10. Locator kinds seen: session, chapter, canon, article, question, number, paragraph, section, part, constitution, decree, ref (roman-dot), locus (named heading), plus `qualifier`. A per-work scheme list is enough to validate; the formatter needs per-work short names and plural rules (65 of 234 labels regenerated without them).
11. Verses keyed by OSIS passage strings; parser must accept cross-chapter ranges, chapter-only refs and reject parenthetical cross-references; normalise «Salmo/Salmos». Verse text comes from the Bible corpus, not the dossiers (102 of 331 cited segments have no text there). The psalm-numbering call (RV1909 numbering in site text) is untested: the dossiers cite Psalms (`Ps.110.4`, `Ps.119.*`, `Ps.51.5`, `Ps.16.2`, `Ps.19.7-9`, `Ps.12.6`) and the spike has no corpus to compare numbering [inference: check each against the RV1909 file before B10].

D8 (conversion)
12. A converter from data.js is feasible (644 citations in one pass, 0 type errors after the changes above), but its source of truth must be the md after Pedro's answers: data.js is stale in at least Sola Scriptura (OB-7), Baptism (closing, CV-1) and Justification (qeShown, OB-2 brackets) and merges fields the md keeps apart.
