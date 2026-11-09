# Apply the citation excerpts (clone `doctrina-ai-p2`, 2026-11-08)

## State

- **Done:** all **92** citations that had `excerpts: []` now carry their research excerpts, plus the **2 repairs** (`T13c7`: Spanish added beside the existing English; `T13can9`: replaced, old text kept in `corrections`). **0 remain empty.** Verifier: 14 of 15 records OK; the one defect (T13c7 lost its English passage) was fixed in the script and the registry regenerated (`apply-excerpts-verifier.md`). `npm run verify` exit 0; `citation-window`, `doctrine-witnesses` and `objection-sources` specs 74 passed (port 3200, fake provider). Screenshots of one Catholic (CEC 1382) and one Lutheran (Augsburg XXIV.1–3) citation window, light and dark, 390 and 1440: both open with their text.
- **AI label shown (follow-up, same day):** the citation window now shows the label of an AI Spanish excerpt (call 9). `verify` exit 0; `citation-window`, `doctrine-witnesses`, `objection-sources`, `dating` specs pass (94, plus the 2 new label cases; one WebKit phone-sheet case failed once on timing and passed twice in a row afterwards); screenshots of the Lutheran window (Augsburg XXIV.1–3) at 390 and 1440, light and dark.
- **Open (needs Pedro or the coordinator):** the Holy See quotation budget is **not allocated** (below); MISAL's edition proposal and the two `unverified`/`verified` records (calls 4 and 6); 34 internal strings were kept out of the registry (call 5).
- **Re-run:** `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs data/scripts/apply-excerpts.mjs` on a registry that still has the empty citations (`--dry` prints the report without writing; `--hold-holy-see` leaves the Holy See records empty instead).

## Counts

| | |
|---|---|
| Empty citations before | 92 |
| Got an excerpt | **92** (25 from `citation-excerpts.md`, 67 from `citation-excerpts-2.md`) |
| Stay empty | **0** (no record is marked unusable; nothing was held) |
| Repaired | 2: `T13c7` (the research note says «add alongside»: the existing English excerpt stays, the Spanish is appended), `T13can9` (the note says «replace»: replaced, old text kept in `corrections`) |
| Excerpts in these 94 citations | 102 (29 carry `corrections` entries) |
| Passages | Spanish 101: AI-assisted 53, official 33, printed original 4, published 1880 edition 11 (no level, like the existing `wcf.es` passages); English 65 (64 new + the kept `T13c7` English) |
| Records the research tags `unverified` | 2 (`ODositheusXV`, `OPhilaret18`): applied with the tag kept, see calls |
| By work | CEC 24, large-catechism 8, fc-epitome 8, wlc 8, wcf 10, augsburg 7, cic 5, fc-sd 3, trent 2, apology 2, small-catechism 2, smalcald 2, treatise 2, mogila 2, philaret 2, verbum-domini 1, sc 1, misal 1, dositheus 1, wsc 1 |

## Holy See quotation budget (DECISIONS 2026-10-22, option B: 100 words per Holy See document per page, 50 for short or restricted texts)

Measured as the research did: Spanish words in the citation windows of every citation of that document cited on the page. «Existing» is before this change.

| Page | Document | Cap | Existing | Added | |
|---|---|---|---|---|---|
| baptism/catholic | CEC | 100 | 1,875 | 66 | over |
| baptism/catholic | SC | 100 | 0 | 9 | ok |
| baptism/doctrine | CEC | 100 | 206 | 14 | over |
| eucharist/catholic | CEC | 100 | 1,653 | 57 | over |
| eucharist/catholic | CIC | 100 | 457 | 18 | over |
| eucharist/catholic | Roman Missal | 50 | 0 | 13 | ok |
| papacy/catholic | CEC | 100 | 796 | 28 | over |
| papacy/catholic | CIC | 100 | 392 | 81 | over |
| papacy/doctrine | CIC | 100 | 139 | 58 | over |
| sola-scriptura/doctrine | Verbum Domini | 100 | 0 | 27 | ok |

The pools were **already far above the cap before this change**, so the new fragments (about 360 words in total across pages, each fragment a few words) cannot be made compliant by appending or by withholding: the open question is the one the research states (what counts against the cap: inline text, the citation window, or only what is visible at once). **I applied them and I do not call it compliance.** If Pedro wants the cap applied to windows, the allocation has to be decided first; `--hold-holy-see` regenerates the version without the Holy See records (24 CEC, 5 CIC, SC64, MISAL, VD87 stay empty). Limits of the measurement: it covers the pages under `src/content/pages/` that cite the ids; Holy See records not cited by those pages (for example CEC 80, 104, 114) are not in the table.

## Calls I made (the script does them, nothing by hand)

1. **Registry model grew by optional fields** (`src/content/model/registry.ts`), so every label, tag, edition and correction the records carry has a place: `Passage.label` (the research's full edition text when it is not a registry edition id, e.g. «Traducción de Doctrina asistida por IA, desde …»), `translationNote` (the research's `translation` text when it is not one of the model's levels, or the AI note), `tag`, `normalisation`; `Excerpt.source` (`url`, `locator`, `edition`, `checkedAt`, `tag`, `verificationAttempt`) and `Excerpt.corrections` (the `correction`, `correctionV1`, `correctionV2` entries and the repair); `Citation.research` (every other record-level field: `status`, `spanishStatus`, `selection`, `numbering`, `tag`, `reason`, `verification`, `proposedEditionUpdate`, `sourceSHA256`, `workTitle`, `officialIndex`, `sourceEdition`, `sourceURL`, `sourceLocator`, `checkedAt`). None of them is read by the UI today.
2. **Edition ids:** the research records of the first file already use registry ids; the second file uses bibliographic text, so the script resolves it: an exact registry id first; then a fixed table for the 10 ambiguous cases (`wlc/wsc` English → `wcat.en`; `wsc` published Spanish → `wcf.es`; AI Spanish of `wlc`, `wsc`, `dositheus` → `site-translation.<work>.es`; `dositheus` English → `robertson.en`; `mogila` English → `overbeck.en`; `trent` Spanish → `trent.es`; `sc` Spanish → `sc.es`); everything else must have exactly one candidate or the script stops. The research text is kept in `label` whenever it differs from the id.
3. **AI Spanish** gets `translation: "ai-assisted"`, the research label in `label` and `translationNote`, `derivedFrom` = the English edition of the same excerpt, and the tag `[unverified: AI Spanish from the English, unreviewed by Pedro]` in `tag`.
4. **Registry locators kept** where the research differs (22 cases: `(Lutero)` suffixes, `1223` against `1223–1224`, `921 §1` against `921`, `Session XIII, chapter VII` against `XIII 7`, and so on). The research locator is not stored; the list is in the script's output. **MISAL:** the research proposes a new edition `misal.es` (the 2026 Vatican booklet) whose text contradicts the registry's «Citada en el Catecismo, n. 1353.»; I kept the registry's edition id and stored the proposal in `research.proposedEditionUpdate`. Nobody should read the MISAL excerpt as cited from the Catechism until that is decided.
5. **Review vocabulary:** the content validator rejects strings with `.md`, «verificación», etc. 34 strings tripped it (32 `corrections[].source` that name research files, and the `source.tag` of the two records the verifier upgraded, which cite a verification file). They are **not in the registry**; the script writes them to `docs/research/sources/citation-excerpts-withheld.json` (id, path, text). Quoted text that tripped the rule would stop the script; none did.
6. **Two research files disagree with themselves, kept both:** `ODositheusXV` and `OPhilaret18` have the record-level tag `[unverified]` and a `reason`, and the excerpt-level tag `[verified: page image …; upgraded 2026-11-01]`. Registry: `research.tag` and `research.status` say unverified, `source.tag` was withheld by call 5, so the registry only carries the «unverified» side for those two; the upgrade is in the withheld file and in the research Markdown. Decide which one is true before the label is shown.
7. **Repairs, decided by the research's own note:** `T13can9` («Replace the present isolated … fragment») is replaced and its old text kept in `corrections` (`label: "repair"`, date 2026-11-08, source file, old text); `T13c7` («Add this Spanish witness alongside the existing English excerpt») keeps its English excerpt and gets the Spanish after it. My first run replaced both; the verifier caught it (`T13c7` lost `trent.en`, page 80–81) and the script now reads the note.
8. **`--hold-holy-see`** exists so the coordinator can choose the other reading of the budget.
9. **The AI label in the window** (coordinator's request, DECISIONS 2026-11-01 decision 3). The window has **no edition line today** (it shows the quote, the work, the locator, the date and the actions); the only line of that kind is the small `ink-3` line above the quote that says «Texto en inglés» when the quote is not in the site language. I reused that slot, same classes, no new element: when the quote shown is a passage with `translation: "ai-assisted"` and a `label`, the line shows the label **instead of** the language line (the label already names the source edition and the language is Spanish, the site language, so the language line does not appear for these anyway). Only `ai-assisted` passages show it, because 84 other passages (English and official Spanish) also carry a `label` (the research's bibliographic text for official or English passages) and DECISIONS only asks for the AI label; the official excerpt shows nothing new. Plumbing: `CitationView.quoteLabel?` (optional, so the other builders are untouched), computed in `buildCitationView` from the same passage `pickQuote` picks (`pickQuote` behaves as before); the window renders it with `data-quote-label`. **Also changed:** «Copiar cita» appends the label in parentheses when there is one (the copied text is also an AI Spanish quote). **For Pedro:** the label is the research's full text and is long (about 6 lines at 390: «Traducción de Doctrina asistida por IA, desde F. Bente and W. H. T. Dau (eds./trans.), Concordia Triglotta: …»); shortening it is a copy decision, not made here. Files: `src/lib/citation-view.ts`, `src/content/citation-view.ts`, `src/components/citation-window/citation-window.tsx`, `e2e/citation-window.spec.ts` (2 new cases: an AI Spanish window shows the label above the quote, and the copy action; a Catecismo 1382 window shows none).

## What I did not do

- The 43 work-language records of `citation-excerpts.md` (`originalLang`, fr/it/ru model codes, Augsburg de/la and Florence la/el): they are not part of the 92 excerpts; nothing changed in `works.ts` or `ids.ts`.
- The research sources are not in the repo (snapshots in the Codex scratch folders): the verifier could only compare registry against the research records, and against the cached sources where they exist on disk.
- No other UI change.
- No full e2e suite; only the three citation specs above, plus `verify`.
- **Verifier (Sonnet, 15 records, `apply-excerpts-verifier.md`):** every text identical to its record; 6 records also matched against cached sources on disk (Triglot, Westminster, Robertson, Schaff; only OCR noise differs, declared by the records); 9 had no source on disk (the CEC, SC, CIC, MISAL, Trent strings: the official Vatican snapshots are not in the scratch folders). The AI Spanish cannot be checked against any source. Noted, not a defect: `schaff.es` is used for the first time and its bibliography says pp. 491–492 while the passage cites p. 448.

## Files (this change only; the clone holds other modified files from other sessions)

`data/scripts/apply-excerpts.mjs` (new), `src/content/registry/citations.ts`, `src/content/model/registry.ts`, `src/lib/citation-view.ts`, `src/content/citation-view.ts`, `src/components/citation-window/citation-window.tsx`, `e2e/citation-window.spec.ts`, `docs/research/sources/citation-excerpts-withheld.json` (new, generated), `docs/features/apply-excerpts.md`, `docs/features/apply-excerpts-verifier.md`.

## For DECISIONS

2026-11-08 · The 92 empty citation windows are filled from the research (script `data/scripts/apply-excerpts.mjs`); the registry model gained optional provenance fields; the Holy See budget was **not** allocated: applied without claiming compliance, option left in the script (`--hold-holy-see`); the window now shows the AI label of AI Spanish excerpts in the line above the quote; MISAL edition proposal and the two `unverified`/`verified` records are open.

## For GOTCHAS

- **The registry validator rejects internal vocabulary** (`.md`, «verificación», «pendiente»…) in any registry string; provenance that names research files goes to `docs/research/sources/citation-excerpts-withheld.json`, never into `citations.ts`.
- **`apply-excerpts.mjs` is not idempotent:** it fills `excerpts: []` and replaces the two repairs; run it only on a registry with the empty citations (restore the file from the repository first, by reading `git show HEAD:…`, never by a git write).

## Usage readings (weekly)

| Moment | Weekly |
|---|---|
| Start | 41 % |
| End | see the message |
