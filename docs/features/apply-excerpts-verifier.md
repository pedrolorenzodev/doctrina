# apply-excerpts verifier (read-only, 2026-11-08)

Method: every registry block was loaded programmatically and compared field by field with its research record (texts, editions, page, verified, at, note, source.*, corrections, research notes), then each quoted string was searched in `~/codex-night1101-scratch/` (`~/codex-night1027-scratch/` does not exist). Only records that have an `excerpts` array exist for the script, so the "skipped" stubs for CEC1341, CEC1376, CEC1382, SC64, CIC921 and T7sacr12 in `citation-excerpts-2.md` were correctly ignored.

Common to all 15: every `text` (es and en) is identical character for character to the record; `page`, `verified`, `at`, `note`, `source.url`, `source.locator`, `source.edition`, `source.checkedAt`, `source.tag`, `source.verificationAttempt` and the `correction` / `correctionV1` entries are carried; the `research` object equals the record's non-excerpt fields. Nothing invented. The only differences are the intended ones (withheld `source` strings in corrections, the withheld `source.tag` of ODositheusXV and OPhilaret18, registry locators kept, MISAL edition kept).

## Per id

| id | Registry vs record | Source on disk | Verdict |
|---|---|---|---|
| CEC1382 | identical, `cec.es`, official | source not on disk | OK |
| CEC1341 (2 excerpts, 1341 and 1363) | identical, `cec.es`, official | source not on disk | OK |
| CEC1376 | identical, `cec.es`, official | source not on disk | OK |
| SC64 | identical, `sc.es`, official | source not on disk | OK |
| MISAL | identical; edition `misal.es`; `research.proposedEditionUpdate` present; registry locator is empty (`parts: []`) while the record has one | source not on disk | OK |
| T7sacr12 | identical, `trent.es`, printed-original, page 113, verified scan | source not on disk | OK |
| T13can9 (repair) | new text identical; `corrections` has the repair with `textBefore: ["«en Pasqua florida»"]`, equal to the text at `git HEAD`; the record says "replace", so replacing is right | source not on disk (the fragment only appears in a registry dump, not in a source) | OK |
| T13c7 (repair) | see defect below | new es text: source not on disk; old en text found in `TheCanonsAndDecrees.txt` (Waterworth, with footnote text interleaved) | DEFECT |
| LACXXIV_1_3 | en and es identical; es `triglot.es`, `translation: "ai-assisted"`, research label kept in `label` and `translationNote`, `derivedFrom: "triglot.en"`; `correction` carried | en found in `ac.txt` / `ac-mass.txt` / `v1/triglot.txt`: same words, only the page number "2" and line-break hyphens interleaved; es is an AI translation, not checkable | OK |
| LLCV_86_87 | same pattern, `triglot.es` / `triglot.en` | en: exact match (normalised whitespace) in `lc-altar.txt` | OK |
| RWCF29_4 | en `wcf.en`; es `wcf.es` (1880 Monterrey print, no AI flag; `translationNote` = "published Spanish edition (1880), not AI"), `normalisation` carried, `correction` and `correctionV1` carried | en in `confessionoffaith00chur.xml`: same words (footnote markers only). es in `doctrinasyreglam00west.xml`: same words except OCR noise ("6" for "ó", "cuando este sola" for "cuando esté sola", "ò"), which the record's `normalisation` declares | OK |
| RWLC173 | en `wcat.en`, es `site-translation.wlc.es`, ai-assisted, `derivedFrom: "wcat.en"` | en in `confessionoffaith00chur.xml`: same words, interrupted by an interleaved proof-text column and a footnote marker; es is AI | OK |
| ODositheusXV | en `robertson.en`, es `site-translation.dositheus.es`, ai-assisted | en in `actsdecreesofsyn00orth.txt`: same words; the source OCR reads "[z.e.," and the registry "[i.e.," as the record says (page image read by the earlier verifier) | OK |
| OPhilaret18 | en `schaff.en`, es `schaff.es`, ai-assisted, `derivedFrom: "schaff.en"`, `correction` carried | en in `creedschristendo02scha.txt`: same words; OCR "lioly" is "holy" as the record says | OK |
| CIC921 | identical, `cic.es`, official, page "can. 921 §1" | source not on disk | OK |

## Defect

**T13c7**: at `git HEAD` the citation had one passage, `en` / `trent.en` / page `80–81` (the Waterworth text). The script replaced the whole `excerpts` array with the Spanish passage only. The old English passage survives only as a string in `corrections[0].textBefore`; its edition (`trent.en`) and page (`80–81`) are gone from the structured data. The record's own `note` (copied into the registry unchanged) says: "Add this Spanish witness alongside the existing English excerpt, not as a replacement for it." So the registry now has a `note` that refers to an English excerpt that is no longer there, and the record's instruction was not followed. (For T13can9 the record says "replace", so that one is correct.)

## Observations (not defects)

- `schaff.es` is used here for the first time (0 uses at `git HEAD`; `triglot.es` has 114). Its bibliography in `editions.ts` says pp. 491–492 while the passage cites p. 448; that bibliography text is older than this change and the same for `schaff.en`.
- AI Spanish passages use `site-translation.*` editions for WLC and Dositheus but `triglot.es` / `schaff.es` for Augsburg, Large Catechism and Philaret; both are valid edition ids for those works.

## Counts

- OK: 14
- Defects: 1 (T13c7)
- Checked against a source on disk: 6 ids (LACXXIV_1_3, LLCV_86_87, RWCF29_4, RWLC173, ODositheusXV, OPhilaret18), English or Spanish print text only; their AI Spanish is not checkable against any source.
- Not checkable against a source ("source not on disk"): 9 ids (CEC1382, CEC1341, CEC1376, SC64, MISAL, T7sacr12, T13can9, T13c7 new text, CIC921).
