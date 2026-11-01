# Research session A2 («texts», round 2) · 2026-11-01 evening

Status: draft, NOT verified by Pedro

Lane: `docs/research/doctrines/**`, `sources/**`, `neutral/**`, `dossier-residues-2026-11-01.md`, `glossary-gaps.md`, this log. Continues `session-A.md`. Plan: `docs/features/research-two-sessions.md`. Cap: weekly 42 % for A2 + B2 together; stop at 41.5 %.

## Progress

- 16:53 started. Read: `session-A.md` (whole), the plan, the DECISIONS entry «Independence of apologists and the 1689…» (decisions 1–4 bind), the inventory, `verification-pass.md`, `agent-ops.md` («The brief», «Lessons»). `session-B2.md` does not exist yet (checked 16:55). Usage at start: session 27 %, weekly 37 %.

- 16:55 V3 (Sonnet, background) launched on `neutral/date-conflicts.md`, `neutral/e11-e12-findings.md`, `doctrines/b3-silence-cells.md` (the three files with no pass).
- 16:56–17:00 A-1.2 done in part: the **45 pending A2 Spanish excerpts** (40 Lutheran, 5 Orthodox) now carry AI Spanish from the dated English, labelled «Traducción de Doctrina asistida por IA, desde [edition]» (decision 3), tag `[unverified: AI Spanish…]`; the 8 Larger Catechism records got the same label wording; stale `spanishStatus` / `selection` strings that still said «pending» were rewritten; a dated note at the top of `sources/citation-excerpts-2.md` names the English defects carried over (`LSCIV_4` stray «Secondly.», `LFCSDVII_79_82` unclosed `[`, `LFCEpX_3` = `LFCEpX_3_5`). Not from the German/Latin/Greek/Russian originals (Fraktur OCR unusable; no Orthodox originals acquired): see Agent's calls.
- 17:00 D1 skipped ids: **CR38 done** (Donovan 1829, p. 229, page image read, archive.org `catechismofcounc00counuoft`); Florence ×5 and JP audiences ×2 stay skipped with a second reason each (Gill 1959 / Tanner 1990 / Curtin 2024 in copyright; Holy See Eugenius IV page Italian and Latin only; JP English pages are empty shells).
- 17:02 V3 finished (593 s, 243k subagent tokens): 9 wrong items (E11-1 Ambrose tag, E11-4 locator, E11-9 Cyril «Lent 348» conditional, E11-13 Gregory VIII.30 «no year printed» was wrong: NPNF2 12 prints Indiction I, a.d. 597-8; DC-2/DC-3 Didache tags; B3 counts 17 not 18; Bonn 1874 not 1875; AC XXVIII.23 clip). Supplement: NPNF1 4 (1887) prints **A.D. 397** for Augustine's *Contra epistulam fundamenti*. All applied by me by 17:06 (see below). Not re-verified after the corrections.
- 17:05 A-1.4 (the unresolved B3 cells) done in `doctrines/b3-silence-cells.md` (all 17 cells now have a result; the five of the second pass are in their own table with no verifier yet): Orthodox «Dónde se expresa la unidad» = Philaret Q. 261 («This unity is expressed outwardly by unity of Creed, and by communion in prayer and Sacraments.»); Reformed «Cómo se elige» = WCF 25, 31 searched (no procedure; 31.2 «magistrates may lawfully call a synod»), WLC 158 «duly approved and called»; Baptist NH I = silence confirmed; Lutheran ×3 and Orthodox «Traducciones» as written there (Lutheran: LC Preface daily reading of the Catechism, Ep. RN 5 «Bible of the laity», Ep. VII item 8 on the rendering of Acts 3:21; Orthodox: Dositheus Question I, vernacular reading). Decision 1 applied in `neutral/date-conflicts.md` (new section); Augustine flagged: its premise («no file cites a source for 397») no longer holds.
- 17:06 V4 (Sonnet, background) launched on the corrections applied after V1 and V2, CR38 and A-1.3 → `sources/verification-corrections-session-A2.md`, `doctrines/verification-corrections-session-A2.md`.

- 17:10 A-2.5 **Eucharist practice-table verifier** done by me (not independent) → `doctrines/eucharist/practice-verification.md`: 15 cells, 9 CONFIRMED, 3 with a note, 3 WRONG (Lutheran «Quién preside» says «ordenado» but AC XIV says «regularly called»; Reformed «Pan y vino» has Spanish inside guillemets that the cited 1880 edition does not print: «verdadera y solamente» vs «únicamente»; Orthodox «Lo que sobra» cites Quinisext can. 52, which is about the Lenten Liturgy of the Presanctified and does not say gifts are kept).
- 17:12 B5 → `doctrines/connected-doctrines.md`: 8 candidate edges from the dossiers' own cross-pointers, each with its «why» and the dossier line; labelled «proposed, not decided»; 2 pairs have none. No verifier yet.
- 17:14 E5: nothing to write: the night's `neutral/witness-paragraphs.md` already holds the 8 paragraph outcomes and the 86-record inventory; the one hold (Damascus IV.13, acknowledged collaborator J. L. Salmond's death date) needs a primary record, not searched; not started.
- 17:15 A-2.6 NPNF stretch (partly): 6 new witnesses with dated edition, image-read pages and labelled AI Spanish, in a new subsection of each `shared.md`: Baptism B-W11 (Basil, *On the Holy Spirit* 27.66 on baptismal customs, NPNF2 8 p. 42), Papacy P-W9 (Leo, Sermon III, p. 117), P-W10 (Sardica canon III, NPNF2 14 p. 417, «A.D. 343 or 344», page image read), P-W11 (Jerome Letter CXLVI § 1, NPNF2 6 p. 289, page image read), Sola Scriptura SS-W8 (Basil 27.66 on written and unwritten customs, pp. 40–41, images read), SS-W9 (Augustine *On Christian Doctrine* II.8.12, NPNF1 2 p. 538, image read; its Introductory Note prints «The first three books were written A. D. 397»). Not done: the Constantinople I row (decision below), Justin/Irenaeus BiblIndex ranges (the Wayback has not archived the two pages; Cloudflare), the Basil letters on baptism. No verifier yet on these six.
- 17:18 A-3 A6 (part): the two handoffs of B2 applied: `baptism/baptist.apply.md` and `baptism/baptist.objections.md` «Acts 22:16» → «Acts 26:16» (as printed in both the 1719 and 1677 prints, flagged not repaired); `papacy/baptist.apply.md` got the missing 2LCF 26.3 note 6 row (Mat. 16.18…) and the 1719 vs McGlothlin edition note for 2LCF 26.4 note 8 (2 Thess. 2:2–9 vs 2:3–9). The wider reinstatement of the 1689/Heidelberg/Belgic material is **not done**.
- 17:20 A-3 K4 → `sources/enc-1848-english-print.md`: the e-text (Fordham, «© Paul Halsall») is used in four registry edition rows; a printed English edition exists (New York: J. F. Trow, 1867, 48 pp., UPenn catalogue record; translator not named) but no free scan was found.

## Usage checks

- 16:53 s27 / w37 · 16:58 s30/w37 · 17:04 s33/w38 · 17:06 s34/w38 · 17:12–17:20 endpoint HTTP 429 (eight tries) · 17:21 s41 / w39

## Shared choices (for B2)

- (inherited from A) ANF vol. 5 `antenicenefather05buff`; NPNF scan ids and the vatican.va English CCC/CIC patterns are in `session-A.md`.
- New this evening: **NPNF1 vol. II** (Augustine, *City of God* and *On Christian Doctrine*, Buffalo: The Christian Literature Company, 1887) `selectlibraryofn02auguuoft`; **Concordia Triglotta** (St. Louis: Concordia Publishing House, 1921) `concordiatriglot00unse` (English on every second leaf, see `sources/lutheran-triglot-collation.md`); Roman Catechism, Donovan 1829 (Dublin: Coyne) `catechismofcounc00counuoft`; 1894 Westminster `confessionoffaith00chur` (leaf = printed page + 3); 1880 Spanish Westminster `doctrinasyreglam00west`; Robertson 1899 (Dositheus) `actsdecreesofsyn00orth`; Mogila (Overbeck 1898) `cu31924029363094`; Schaff, *Creeds of Christendom* II `creedschristendo02scha`.

## Handoff to B

- Nothing needed from B2. FYI: B2's handoff was applied (`baptism/baptist.apply.md` and `baptist.objections.md` «Acts 22:16» → «Acts 26:16» as printed in both the 1719 and 1677 prints; `papacy/baptist.apply.md` gained the 2LCF 26.3 note 6 row and the 1719-vs-McGlothlin note for 26.4 note 8). The 2LCF 1.4, 1.7 and 29.2 locators in the other `baptist.apply.md` files still follow different editions row by row (not touched).

## Agent's calls

- **AI Spanish for the 45 pending A2 excerpts** (decision 3 binds): translated from the dated English of each record, labelled «Traducción de Doctrina asistida por IA, desde [edition]», tagged `[unverified: AI Spanish…]`. Reason: decision 3 was taken knowing the originals are not usable from the OCR; the German/Latin/Greek/Russian originals were **not** read (Fraktur OCR of the Triglot; no Orthodox originals acquired), so none is «from the original». No verifier has checked the translations.
- **Lutheran collation (A-1.3) is half done on purpose:** every Lutheran English fragment (69 rows) was located by OCR text match on a leaf of the 1921 Triglot scan (`sources/lutheran-triglot-collation.md`), but **no page image was read**, so no web-transcription tag was upgraded. Reason: the weekly cap; the image pass is the first item for the next session.
- **B5 without Pedro's edge list:** proposed 8 candidate edges from the dossiers' own cross-pointers, labelled «proposed, not decided».
- **Practice-table verifier done by me**, not by an independent Sonnet (budget); it is marked not independent.
- **Date conflicts, decision 1:** applied as written for Didache, Justin, Tertullian; for Augustine I kept 396 as approved but wrote down that the decision's premise («no file cites a source for 397») no longer holds: NPNF1 4 (1887) prints A.D. 397; by the decision's own rule the wider range would be 396–397. Pedro's call.
- **D1 Florence ×5 and JP audiences ×2 stay skipped** (no public-domain dated English edition; the English pages are empty shells), with second reasons recorded in each record.
- **Constantinople I row:** split into creed vs «canon 7» as a proposal, not settled (in `baptism/shared.md`, after B-W11).
- **A9:** no edit: the Antichrist status note already sits under QE-5 and is repeated by pointer at l. 150, 196, 215; the open point is Pedro's question 2 (l. 224).
- **E5:** nothing new written: the night's file already holds the 8 paragraph outcomes and the inventory; the one hold (Damascus IV.13, collaborator J. L. Salmond's death date) needs a primary record that was not searched.

## Subagents

| # | Brief | Sonnet, one at a time | Result |
|---|---|---|---|
| V3 | `neutral/date-conflicts.md`, `neutral/e11-e12-findings.md`, `doctrines/b3-silence-cells.md` | 593 s, 243k subagent tokens, 77 tool uses | 9 wrong items, 4 serious (Gregory VIII.30 year was printed: Indiction I, a.d. 597-8; B3 count 17 not 18; Bonn 1874; AC XXVIII.23 clip), all applied; supplement: NPNF1 4 prints A.D. 397 for Augustine's *Contra epistulam fundamenti* |
| V4 | the corrections applied after V1 and V2, 25 random records, CR38, A-1.3 | 1392 s, 367k subagent tokens, 169 tool uses | V1's corrections: 14 of 17 confirmed, 3 wrong (DV9 duplicated, CEC1353 first excerpt and CIC212 second excerpt clipped without `[…]`), + RWCF1_3 capital, UUS90 full stop; V2's 21 corrections all confirmed; A-1.3 5 of 6 confirmed (LC IV.78 «put under the water»); CR38 confirmed. All applied except the optional ones (CEC2653 inner quotation marks, UUS95/CIC212 full stops, SS-W5/SS-W6/B-W8/P-W7 clip markers, two leftover «to check», the older ANF header «all cite» in `sola-scriptura/shared.md`) |
| V5 | the 6 new NPNF witnesses and the 5 B3 second-pass rows | 459 s, 182k subagent tokens, 49 tool uses | all six quotes, dates, editions and Spanish confirmed; 4 wrong (2 substantive: the Lutheran «Traducciones» and «Lectura personal» search reports omitted hits; 2 minor: Retractations correct three details, three footnote marks); smaller notes; all applied. Leaf numbers n854–n858, n1062–n1064, n1298, n219–n220 and the paragraph «7» of Ep. RN unconfirmed |

## What is left

- **Verification not done:** the 45 AI Spanish excerpts (translation fidelity); `connected-doctrines.md`; `practice-verification.md` (not independent); the Lutheran page-image collation (69 rows, leaf table ready); the Spanish of the new witnesses beyond V5's check.
- **A-1:** the 45 Spanish from the originals (needs German/Latin page images); the 8 D1 ids: Florence ×5 and JP ×2 (no free English edition found), CR38 done.
- **A-2:** Justin/Irenaeus BiblIndex ranges (Cloudflare; the Wayback has not archived the pages); the NPNF stretch for Leo Ep. 10, Sardica canons IV–V, Basil's letters, other Jerome letters; E11 Chrysostom 388; E5 Damascus hold.
- **A-3:** A1 deepening (all 16 files), A3 leftovers, A7, A6 beyond the two handoffs (the reinstatement of the 1689/Heidelberg/Belgic material), a search for a scan of the 1688/89 print, F5, F7, F2, I5. Not started.
- Outside `docs/research/` (report only): `src/content/pages/baptism/catholic.es.ts:1546` still has the wrong CV-7 quote (reconvert); the four registry rows of the 1848 encyclical (`editions.ts` l. 706–730) rest on a text with no determined licence; `doctrine.es.ts` Eucharist practice cells rows 3, 9, 12 of `practice-verification.md`; registry fixes `vienne`, `wlc`/`wsc` 1648, `oros-1755` unchanged; `session-A.md` still says «13 of 18 cells» (the count is 12 of 17 for the first pass; all 17 now have a result).

## Summary for Pedro (español, breve)

- **Hecho (todo borrador, con verificador Sonnet por tanda):** los 45 extractos de A2 que faltaban en español (luteranos y ortodoxos) quedaron con traducción de IA etiquetada, desde el inglés fechado (no desde los originales alemán/latín/griego/ruso, que no pude leer); el Catecismo Romano (II, 4, 38) quedó con la traducción de Donovan 1829, página leída; Florencia y las audiencias de Juan Pablo II siguen sin edición inglesa libre; las 17 celdas «silencio / no consultado» de las tres `shared.md` tienen ya resultado (`doctrines/b3-silence-cells.md`); apliqué tu decisión 1 de fechas en `neutral/date-conflicts.md`; 6 testigos nuevos de los siglos IV–V (Basilio, León, Sárdica, Jerónimo, Agustín); verificador de la tabla de práctica de la Eucaristía (3 celdas mal); 8 aristas candidatas entre doctrinas (`connected-doctrines.md`); el inglés de la encíclica de 1848 sí se usa en el registro y hay una impresión de 1867 sin escaneo libre.
- **Para decidir:** (1) Agustín: tu decisión fijó 396 porque «ningún archivo cita fuente para 397», pero el NPNF de 1887 imprime A.D. 397; con tu propia regla correspondería 396–397; (2) las 3 celdas mal de la tabla de práctica de la Eucaristía (luterano «ordenado», reformado «únicamente», ortodoxo «Presantificados»); (3) cuáles de las 8 aristas pasan a «Doctrinas conectadas»; (4) la fila Constantinopla I: separar «credo» de «canon 7».
- **No hecho:** la colación de las citas luteranas contra las páginas impresas del Triglot (tengo la tabla de hojas, no leí imágenes), el español desde los originales, y casi todo A-3: A1 (las 16 objeciones), A3, A7, el resto de A6, F5, F7, F2, I5 (sólo hice los dos arreglos de A6 y K4). Corté por el tope semanal (40 % en la última lectura).
- **Ojo:** nada de lo nuevo está revisado por vos; las 45 traducciones y las aristas no pasaron por verificador.

## Summary for the next agent (English)

- Files written or changed (all `Status: draft, NOT verified by Pedro`): `sources/citation-excerpts-2.md` (45 AI Spanish added and labelled; V4 corrections; RWSC97 Spanish upgraded to verified on a page image), `sources/english-quotes.md` (CR38 done; DV9, CEC1353, CIC212, UUS90 corrected; T13can9 upgraded; second skip reasons for Florence ×5 and JP ×2), `sources/lutheran-triglot-collation.md` (leaf table, 69 rows, **no page image read**), `sources/enc-1848-english-print.md` (K4), `doctrines/b3-silence-cells.md` (17 cells; five second-pass rows), `doctrines/connected-doctrines.md` (B5), `doctrines/eucharist/practice-verification.md`, `doctrines/{baptism,papacy,sola-scriptura}/shared.md` (new subsections B-W11, P-W9–P-W11, SS-W8–SS-W9; Constantinople I proposal; stale cells fixed), `doctrines/baptism/{baptist.apply,baptist.objections}.md` and `doctrines/papacy/baptist.apply.md` (A6 handoffs), `doctrines/eucharist/reformed.md` (WSC pages), `neutral/date-conflicts.md` (decision 1), `neutral/e11-e12-findings.md`, and five verification files (V3 ×2, V4 ×2, V5).
- Method lessons: (1) V4 found that case was lost when matching OCR ignoring case (RWCF1_3) and that a «done» record can silently become a duplicate after a correction (DV9): re-read the whole record after each cut; (2) NPNF OCR interleaves editors' notes and footnotes: quote from page images; (3) the usage endpoint answered HTTP 429 from 17:06 to 17:21 and again at 17:38 while two sessions and two subagents polled it: poll less often; (4) a negative claim from an OCR search must list what the search did find (V5 caught two incomplete search reports).
- First items for the next session: the Triglot page-image pass (leaf table ready), a verifier on the 45 AI Spanish, then A-3 (A1 deepening, A7, A6 reinstatement, F-items, I5).

## Daily table for tomorrow (what, why, where, how long)

| What | Why | Where | How long |
|---|---|---|---|
| Decide Augustine 396 or 396–397 | the decision's premise changed (NPNF1 4 prints 397) | `neutral/date-conflicts.md`, «What decision 1 settles» | 5 min |
| Look at the 3 wrong cells of the Eucharist practice table | they are on a page already built | `doctrines/eucharist/practice-verification.md`, rows 3, 9, 12 | 10 min |
| Pick which of the 8 connected-doctrine edges become sentences | B5 had no edge list | `doctrines/connected-doctrines.md` | 10 min |
| Read the 17 B3 results and say which replace «silencio» | decision 2 | `doctrines/b3-silence-cells.md` | 15 min |
| Explain briefly what the day's research did | the daily | this log's Spanish summary | 5 min |

## Final state and commit command

- Last usage reading: 17:38 session 46 %, weekly 40 % (the endpoint answered HTTP 429 from 17:06 to 17:21 and again at 17:38). Stopped there: the cap is 41.5 % and one more verifier costs about a point.
- Stage-and-commit command for session A2's files only (Pedro runs it; the agent does not):

`git add docs/research/day-2026-11-01/session-A2.md docs/research/sources/citation-excerpts-2.md docs/research/sources/english-quotes.md docs/research/sources/lutheran-triglot-collation.md docs/research/sources/enc-1848-english-print.md docs/research/sources/verification-corrections-session-A2.md docs/research/doctrines/b3-silence-cells.md docs/research/doctrines/connected-doctrines.md docs/research/doctrines/eucharist/practice-verification.md docs/research/doctrines/eucharist/reformed.md docs/research/doctrines/baptism/shared.md docs/research/doctrines/baptism/baptist.apply.md docs/research/doctrines/baptism/baptist.objections.md docs/research/doctrines/papacy/shared.md docs/research/doctrines/papacy/baptist.apply.md docs/research/doctrines/sola-scriptura/shared.md docs/research/doctrines/verification-b3-silence-cells-session-A2.md docs/research/doctrines/verification-corrections-session-A2.md docs/research/doctrines/verification-session-A2-final.md docs/research/neutral/date-conflicts.md docs/research/neutral/e11-e12-findings.md docs/research/neutral/verification-date-conflicts-e11-e12-session-A2.md && git commit -m "docs(research): add AI Spanish, NPNF witnesses and B3 cell results"`
