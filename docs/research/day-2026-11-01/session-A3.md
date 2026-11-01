# Research session A3 («texts», round 3) · 2026-11-01 night

Status: draft, NOT verified by Pedro

Lane: `docs/research/doctrines/**` except the 16 `*.objections.md`, `sources/**`, `neutral/**`, `glossary-gaps.md`, `dossier-residues-2026-11-01.md`, this log. Continues `session-A.md` and `session-A2.md`. Cap: Claude weekly **45 % inclusive** (Pedro; per moment). Other agents at the same time: B3 (passages, videos), Codex (objections files).

## Progress

- 18:22 started. Read: `session-A.md`, `session-A2.md`, DECISIONS entries of 2026-11-01 (evening and afternoon), `connected-doctrines.md`, `b3-silence-cells.md`. Usage at start: session 49 % (resets 18:50), weekly 40 %. `session-B3.md` and `codex-3.md` do not exist yet (checked 18:22).

- 18:23–18:30 Item 1 (a) done: decisions applied to the three `shared.md` (Baptism: 3 B3 cells, dates, Constantinople I split in two rows, stale coverage and list rows; Papacy: 9 B3 cells, list rows; Sola Scriptura: 5 B3 cells, Augustine cross-reference, list rows), `fingerprint-dates.md` (Didache 50–150, Justin 148–161, Constantinople I split), `connected-doctrines.md` (decided edges), `neutral/date-conflicts.md` (Augustine 396–397). Found while doing it: the 1880 Monterrey Spanish Westminster has no WCF 31.2 magistrates clause (its ch. XXXI is numbered differently from Edinburgh 1894): recorded in the spec and in the Papacy note. Searched Mogila and Robertson 1899 OCR for the consecrated gifts that remain: no hit (Eucharist Orthodox «Lo que sobra» corrected text proposed in the spec).
- 18:30 (b) done: `doctrines/02-import-spec.md` written (shape, per-doctrine fields, practice cells with registry ids checked by script against `citations.ts`, witness tables with `DateInfo`, fingerprint rows to add, connected edges with Spanish drafts, the Eucharist page's three corrected cells, blocks). (c) verifier V6 (Sonnet) launched 18:31 on the spec and all edits → `doctrines/verification-02-spec-A3.md`.

- 18:32–18:39 Item 2 (A6) in part: **a scan of the 1688 first print of the Second London Confession exists** (archive.org `bim_early-english-books-1641-1700_a-confession-of-faith-p_1688`, London: John Harris, 1688, EEBO microfilm, 169 images); five margin readings made on page images (`sources/london-1688-print.md`): 1688 agrees with 1719 at 1.4 (1 John 5.9) and with the 1677 print at 1.5 (1 John 2.2,20,27) and 29.2 (Acts 8.36,37), so «1719 = 1688» is false at two of five loci read. B's 1719-primary margins applied to `baptism/baptist.apply.md` (2LCF 28.1–2 added, 29.2 → 1719 with the 1677 variant, 29.3–4) and `sola-scriptura/baptist.apply.md` (1.4, 1.5, 1.6 + note l, 1.7, First London VII «Col. 21. 18, 23» kept as printed), each with the 1688 reading. NOT done: `papacy/baptist.apply.md` beyond A2's two handoffs, `eucharist/baptist.apply.md`, the Heidelberg/Belgic/WCF rows of the `reformed.apply.md` files (nothing displaced there was identified: those files keep their old scope notes), a verifier on the new rows.
- 18:36–18:41 Item 3 (Fuentes): `sources/fuentes-data-gaps.md` (F5: CEC edition not stated by the Holy See pages; Waterworth's «1848» is the preface date and the scan's printing year is unknown; the 1880 Spanish Westminster is the American-revised text, announces and contains the Shorter Catechism, so the registry's «solo trae la Confesión» is wrong for the WSC; Schaff III 1877 for Heidelberg and Belgic English; the edition rows that repeat a language), `sources/holy-see-budget.md` (F7, script counts: Holy See texts held in the registry 10,833 Spanish and 837 English words, English CCC 395 of the USCCB's 5,000, 32 Spanish CEC fragments over 40 words; no rule of the site's own in the repo), `sources/original-lang.md` (F2: the earlier research covers 40 non-site works; the 22 left are proposed with an evidence level; `fr`, `it`, `ru` are outside `DocLang`). No verifier yet on these three.

## Usage checks

- 18:22 s49 / w40 · 18:27 s50/w41 · 18:30 s52/w41

## Shared choices

- (inherited from A and A2) ANF vol. 5 `antenicenefather05buff`; NPNF scan ids and vatican.va patterns in `session-A.md`; NPNF1 vol. II `selectlibraryofn02auguuoft`; Concordia Triglotta `concordiatriglot00unse`; 1894 Westminster `confessionoffaith00chur`.

## Handoff to B3

- FYI for `passages/*-baptist.md`: a scan of the 1688 first print of the Second London Confession exists (`sources/london-1688-print.md`); at 2LCF 1.5 note (b) and 29.2 note (f) the 1688 reads like the 1677 print and **not** like the 1719 (1 John 2.2,20,27; Acts 8.36,37); at 1.4 note (g) it reads like the 1719 (1 John 5.9). Nothing else needed from B3.

## Handoff to Codex

- `codex-3.md` did not exist when A3 stopped reading for it (18:47), so item 6 (verify Codex's objections additions) was not started. Nothing to hand to Codex.

## Agent's calls

- **Augustine 396–397:** applied as decided; in the three `shared.md` the dates of *Contra epistulam fundamenti* appear only as a cross-reference (SS-W9); the witness there is *On Christian Doctrine* (397 in NPNF1 2, c. 396–397 on the Eucharist page): kept separate.
- **Orthodox «Lo que sobra» (Eucharist, data fix):** first drafted as «Mogila y Dositeo no dicen…»; the verifier found Dositheus XVII does speak of what is reserved for the dying; corrected in the spec, flagged «or drop the cell».
- **Spanish for the 17 replaced cells:** English fragments from `b3-silence-cells.md` plus Doctrina's own Spanish descriptive sentence, marked `[IA]` with the label rule in each file's A3 note; the Reformed WCF 25.1 and 26.2 are the printed Spanish of Monterrey 1880 (OCR). Not a decision of Pedro's: he decided that text replaces «silencio»; the Spanish wording is a proposal.
- **Registry ids and entity ids** checked by script; the spec marks MISSING ones instead of inventing ids.
- **A6 narrowed:** only the Baptism and Sola Scriptura Baptist margins were reinstated from B's readings; the 1688 scan found and five loci read; the rest of A6 not done.
- **F2 narrowed:** the earlier research covers 40 non-site works; only the 22 left were proposed, 12 of them at evidence level C.
- **Item 4 (Fathers in the 02 pages), item 5 (I5/I1) and item 7 not started:** weekly 42 % with two verifiers and the 02 package taking the budget; item 6 had nothing to verify yet.

## Subagents

| # | Brief | Sonnet, one at a time | Result |
|---|---|---|---|
| V6 | `02-import-spec.md` and the A3 edits to the three `shared.md`, `fingerprint-dates.md`, `connected-doctrines.md`, `date-conflicts.md` | 932 s, 361k subagent tokens, 94 tool uses | 79 items: 55 confirmed, 19 wrong (one substantive: the Orthodox «Lo que sobra» correction ignored Dositheus XVII's reserved-for-the-dying passage; the rest wording, `[…]` marks, line numbers, WCF 31.5, `alsoYears`), 5 unconfirmable; 21 corrections applied, not re-verified |
| V7 | `sources/london-1688-print.md`, the A6 rows in two `baptist.apply.md`, `fuentes-data-gaps.md`, `holy-see-budget.md`, `original-lang.md` | 852 s, 276k subagent tokens, 93 tool uses; read page images of the 1688, 1719 and McGlothlin prints | 70 verdicts: 46 confirmed, 15 wrong, 9 unconfirmable. All five 1688 readings confirmed on the images; wrong items: the file's own «two of five loci» (it is three of four collated), the 1719 note letters, «Poultrey», «first print» unsupported (renamed «1688 print»), the CEC 1993 copyright is in the Credits block and belongs to the Latin text, the Spanish Westminster translator H. C. Thomson and printer A. Lagrange y Hno. (title page read), Schaff III originals (Heidelberg German, Belgic French), the «repeated works» list, the budget undercount (12,534 es / 1,048 en, 47 CEC fragments over 40 words, because the script missed 81 single-quoted texts and 12 quoted keys), four Latin pages found for level C works; all 17 corrections applied, not re-verified |

## What is left

- **Not started:** item 4 (Fathers who are witnesses in the 02 pages: E9, E2, the E1/E11 corrections → `neutral/fathers-02-witnesses.md`), item 5 (I5/I1 glossary), item 6 (Codex's objections: `codex-3.md` did not exist at 19:02), item 7 (details, Triglot page-image collation, verifier on the 45 AI Spanish excerpts).
- **Item 1 done and verified once (corrections not re-verified):** the three `shared.md`, `fingerprint-dates.md`, `connected-doctrines.md`, `date-conflicts.md`, `02-import-spec.md`. Open points the verifier raised: Orthodox «Lectura personal» (Dositheus Q. I «No») against the new Orthodox «Traducciones» (Robertson) not collated; registry ids `RWCF31_3`/`RWCF31_4` carry the Edinburgh numbering but link to the 1880 scan; Justin's BiblIndex range and the BF&M 2000 print remain unchecked.
- **Item 2 (A6) partial:** Baptism and Sola Scriptura Baptist margins reinstated with the 1719 as primary and the 1677 and 1688 variants; the 1688 print scan found (five loci read; the rest of the margin, the text variants and 1.1 not collated); not done: `papacy/baptist.apply.md` beyond A2's two handoffs, `eucharist/baptist.apply.md`, the Reformed Heidelberg/Belgic rows.
- **Item 3 done and verified once:** F5, F7 (counts recomputed by the verifier), F2 (22 works proposed; 11 at level B, 8 at C, 2 open, 1 at A; `fr`/`it`/`ru` are outside `DocLang`).
- Outside `docs/research/` (report only): `src/content/pages/baptism/catholic.es.ts:1546` still has the wrong CV-7 quote; the Eucharist page's three practice cells (corrected text in `02-import-spec.md` §1) and its `connected` sentence «Todas las tradiciones exigen el bautismo antes de la comunión» (unsourced); registry: `wcat.en` says the 1880 volume holds only the Confession (it also holds the Shorter Catechism), `wcf.es` lists `wlc` (not in the volume), `trent.en` has no year, the four `cec.*` rows state no edition, `RWCF31_3`/`RWCF31_4` numbering, `vienne`, `wlc`/`wsc` 1648, `oros-1755` as in A2.
- Method lessons: (1) a script count over `citations.ts` must evaluate the module or handle single-quoted strings and quoted keys (V7 found 12,534 against my 10,833 words); (2) the two verifiers found 19 and 15 wrong items, one substantive each (Dositheus XVII; the budget): a negative claim from a word search must list the hits, and I repeated that omission once; (3) microfilm EEBO scans on archive.org have readable page images at `/download/<id>/page/n<leaf>_w1000.jpg`; (4) weekly went 40 → 43 % in 45 minutes with two Sonnet verifiers (about a point each); the usage endpoint answered HTTP 429 once (18:46) and recovered.

## Final state

- Last usage reading 19:02: session 2 % (reset 23:49), weekly 43 % (cap 45 %). Stopped by choice: the next item (Fathers, E9/E2) needs a verifier and about two points, which would reach the cap with nothing left to finish a file; Pedro can raise the cap.
- The commit command below includes `connected-doctrines.md`, `date-conflicts.md` and the `shared.md` files that A2 also changed; if Pedro has not run A2's command, this one carries both sessions' edits to those files. Nothing was reverted.

## Summary for Pedro (español, breve)

- **Hecho (borrador, con verificador Sonnet por tanda):** (1) tus decisiones aplicadas a las tres `shared.md` (fechas, las 17 celdas «silencio», Constantinopla I en dos filas, aristas); (2) `doctrines/02-import-spec.md`: un solo archivo con todo lo que el conversor necesita para las páginas 02 de Bautismo, Papado y Sola Scriptura (qué está listo y qué no, ids que faltan en el registro, fechas por testigo, aristas con su frase, y las 3 celdas mal de la Eucaristía con el texto corregido); (3) **encontré un escaneo de la edición de 1688 de la Confesión de Londres** y leí 5 márgenes: la de 1719 difiere de la de 1688 en 3 de 4 lugares comparados, así que «1719 = 1688» es falso; (4) los tres archivos de «Fuentes» (huecos de edición, presupuesto de citas de la Santa Sede, idioma original de 22 obras).
- **Para decidir:** (a) ¿seguimos con 1719 como edición principal de la Confesión de Londres o pasamos a 1688 donde haya escaneo? (`sources/london-1688-print.md`); (b) ¿qué regla de palabras por cita para los textos de la Santa Sede en español? (hoy hay 12.534 palabras y 47 fragmentos del Catecismo con más de 40); (c) la celda ortodoxa «Lo que sobra» de la Eucaristía: Dositeo habla de lo reservado para los moribundos, así que no alcanza con «silencio»; (d) la fecha del sermón III de León Magno y de la carta CXLVI de Jerónimo (el modelo exige año).
- **No hecho:** los Padres de las páginas 02 (E9, E2), el glosario (I5), verificar lo de Codex (no había terminado), el resto de A6 (Papado, Eucaristía, Heidelberg/Belga). Paré por el tope (43 % de 45 %).
- **Ojo:** nada está revisado por vos; las correcciones de los dos verificadores no se volvieron a verificar.

## Summary for the next agent (English)

- Files written or changed (all `Status: draft, NOT verified by Pedro`): `doctrines/02-import-spec.md` (new; the file an implementation session reads), `doctrines/{baptism,papacy,sola-scriptura}/shared.md` (B3 cells replaced, lists and coverage updated, A3 notes), `doctrines/{baptism,sola-scriptura}/baptist.apply.md` (A6 rows), `doctrines/fingerprint-dates.md`, `doctrines/connected-doctrines.md`, `neutral/date-conflicts.md`, `sources/london-1688-print.md`, `sources/fuentes-data-gaps.md`, `sources/holy-see-budget.md`, `sources/original-lang.md`, `doctrines/verification-02-spec-A3.md`, `sources/verification-A3-second-pass.md`, this log.
- First items for the next session: Fathers witnesses (item 4 of the A3 queue), I5/I1, Codex's objections verifier once `codex-3.md` ends, the remaining A6 (papacy and eucharist `baptist.apply.md`, Reformed Heidelberg/Belgic), a verifier on the corrections of V6 and V7, the Triglot page-image pass (leaf table in `sources/lutheran-triglot-collation.md`), the verifier on the 45 AI Spanish excerpts.

## Daily table for tomorrow (what, why, where, how long)

| What | Why | Where | How long |
|---|---|---|---|
| Read the spec and say which fields you accept | it is the file the 02 import reads | `doctrines/02-import-spec.md` (start with §0 and §6) | 15 min |
| Choose Londres 1719 or 1688 as primary | the scan exists and the two differ | `sources/london-1688-print.md` | 5 min |
| Set a word rule for Holy See quotes | the registry holds 12,534 words and 47 long CEC fragments | `sources/holy-see-budget.md` | 5 min |
| Decide the Orthodox leftovers cell, the Leo and Jerome dates | the model needs a value | `02-import-spec.md` §1, §3.3 | 10 min |
| Explain what the night's research did | the daily | this log's Spanish summary | 5 min |

## Stage-and-commit command (Pedro runs it; the agent does not)

`git add docs/research/day-2026-11-01/session-A3.md docs/research/doctrines/02-import-spec.md docs/research/doctrines/verification-02-spec-A3.md docs/research/doctrines/baptism/shared.md docs/research/doctrines/papacy/shared.md docs/research/doctrines/sola-scriptura/shared.md docs/research/doctrines/baptism/baptist.apply.md docs/research/doctrines/sola-scriptura/baptist.apply.md docs/research/doctrines/fingerprint-dates.md docs/research/doctrines/connected-doctrines.md docs/research/neutral/date-conflicts.md docs/research/sources/london-1688-print.md docs/research/sources/fuentes-data-gaps.md docs/research/sources/holy-see-budget.md docs/research/sources/original-lang.md docs/research/sources/verification-A3-second-pass.md && git commit -m "docs(research): add 02 import spec, 1688 scan and Fuentes data"`
