# Doctrine 02 pages: Baptism, Papacy, Sola Scriptura (build session B2, away mode, 2026-11-03 night)

Status: B2.0–B2.4 done as far as the research allows; open TODOs below. Written in the duplicate repo `doctrina-b2`; Pedro merges it into the real repo.

## Intent

The doctrine overview page (lede, five answers, practice table, early witnesses, fingerprint, connected doctrines) for Baptism, then Papacy, then Sola Scriptura, with the Eucharist page (`src/content/pages/eucharist/doctrine.es.ts`) as the reference for components, tokens and every animation.

## Acceptance

- `status: "draft"`; no claim without citation and edition; the site never concludes; no Father is assigned to a modern tradition; AI Spanish is labelled in the edition string.
- Pages are generated, never hand-edited: `npm run verify` and the per-page screenshots/e2e pass.
- No new motion, curve or layout: the pages render with the existing `src/features/doctrine/` components.

## Out of scope

Objections of non-Catholic traditions beyond the titles the research files already hold; English page copy (`getDoctrinePage` has no `en` pages); the Justification page; the other session's files (`convert-dossier.mjs`, `dossier-md.mjs`, `merge-registry.mjs`, `review-page.*.data.js`, the 20 tradition pages, `src/features/passages/`, `src/content/get-passages.ts`).

## How a 02 page is produced (one way for all four)

`data/scripts/convert-doctrine.mjs <doctrine> [outDir]` writes `src/content/pages/<doctrine>/doctrine.es.ts` (Node 24, run with `--import ./tools/register-alias.mjs`; prettier formats the output). Its source is one of:

- `data/doctrine/<doctrine>.02.json`: the whole page as data (the Eucharist; extracted once from the hand-written page, then corrected there).
- `data/doctrine/<doctrine>.02.mjs`: the authored parts of a new page (lede, legend, the five summaries with their grade and basis, practice cells as `[text, label, citationIds]`, fingerprint marks `[year, yearEnd, label, circa]`, witness metadata, connected sentences). The converter fills the rest from the research: witness Spanish quotes from `docs/research/doctrines/<doctrine>/shared.md` (entry named by `src`), grade definitions and Catholic objection ids from the published tradition pages, non-Catholic objection titles from `docs/research/doctrines/<doctrine>/<tradition>.objections.md`.

`data/scripts/test-convert-doctrine.mjs` reconverts the Eucharist and fails if anything but the three corrected practice cells differs from the published page.

Why this way and not `convert-dossier.mjs`: that converter builds tradition pages from dossiers; a 02 page has a different shape and sources. A separate script keeps the other session's files untouched.

## Decisions made while Pedro was away (agent's calls)

1. **Dositheus Question I** (Robertson 1899 vs Schaff II p. 433 print opposite answers): the two Orthodox cells that depend on it (`personal-reading`, `translations` of Sola Scriptura) show both editions' words with their dates, side by side, and conclude nothing. Reason: the site never concludes; recommended default of the brief.
2. **Connected-edge sentences**: the drafts of spec §5 and the closure file are imported as `draft` page copy (the page is draft). The unsupported Eucharist → Baptism sentence «Todas las tradiciones exigen el bautismo antes de la comunión» is replaced in B2.4 on the Eucharist page by the same cited join seen from the Eucharist side (Baptist and Catholic texts). Papacy → Eucharist, Sola Scriptura → Baptism and → Eucharist are not shown (no cited text or «none»).
3. **Witnesses c. 256–749**: ship what is read; the unread works stay as a `TODO` list below, never filled from memory.
4. Where the spec leaves a `lede` or `legend` as a proposal, the proposal is used as written.
5. Practice cells marked P (dossier paraphrase) in the spec are written as attributed Spanish sentences, never as quotations.

## Open `TODO`s (inert, not shown)

- Spanish `paragraph` and `authorLine` of the new witnesses (the research holds English notes only): the witness card renders without them.
- Registry ids still missing for practice cells are left with an empty `citations` and the label only (as the Eucharist page already does).

## Blocks

### B2.0 · the converter and the Eucharist fixes (done)

(a) Files: `data/scripts/convert-doctrine.mjs`, `data/scripts/test-convert-doctrine.mjs`, `data/doctrine/eucharist.02.json`, `src/content/pages/eucharist/doctrine.es.ts`, `docs/features/doctrine-02-pages.md`.
(b) Commit: `feat(doctrine): add the 02 page converter and fix three Eucharist cells`
(c) Look at: the Eucharist page «Cómo se vive» (Lutheran «Quién preside», Reformed «Pan y vino», Orthodox «Lo que sobra»). Tested: `node --import ./tools/register-alias.mjs data/scripts/test-convert-doctrine.mjs` (only those cells differ); `npm run verify` passes.

### B2.1 · Baptism 02 (done)

(a) Files: `data/doctrine/baptism.02.mjs`, `src/content/pages/baptism/doctrine.es.ts` (generated), `src/content/pages/index.ts` (shared, see below), `e2e/doctrine-baptism.spec.ts`, `e2e/doctrine-practice.spec.ts`, `e2e/sidebar.spec.ts`, `docs/features/doctrine-02-pages.md`.
(b) Commit: `feat(doctrine): add the baptism overview page`
(c) Look at: `/es/doctrinas/bautismo` at 1440, 768, 390, 360, light and dark (the same components as the Eucharist page: no CSS or motion was touched). Tested: `npm run verify`; `e2e/doctrine-*.spec.ts` and `sidebar.spec.ts` pass; screenshots at the four widths in both themes, no horizontal overflow. Two specs of the Eucharist page changed because of what is now true: the Lutheran «Quién preside» cell has a citation (the plain cell is now Lutheran «Lo que sobra»), and the Eucharist «Doctrinas conectadas» card for Baptism is now a link, not an inert card; the sidebar link count is 121.
Not on the page (inert): witness `paragraph` and `authorLine` (research holds English only); council witnesses have no `entity` (the Fathers registry has no `nicaea-1` or `carthage-418`); the Baptist, Lutheran and Orthodox practice cells that rest on dossier paraphrase are written as attributed sentences. The witnesses c. 256–749 not yet read (Cyprian–Firmilian, Augustine against the Donatists beyond IV.24, Leo, Gregory the Great, Cyril, Origen, John of Damascus) are a `TODO`.

### B2.2 · Papacy 02 (done)

(a) Files: `data/doctrine/papacy.02.mjs`, `src/content/pages/papacy/doctrine.es.ts` (generated), `src/content/pages/index.ts` (shared), `e2e/doctrine-02-pages.spec.ts` (replaces `e2e/doctrine-baptism.spec.ts`, now covering Baptism and Papacy), `e2e/sidebar.spec.ts` (link count 123), `docs/features/doctrine-02-pages.md`.
(b) Commit: `feat(doctrine): add the papacy overview page`
(c) Look at: `/es/doctrinas/papado`. Tested: `check-content` valid (all citation ids exist), 38 specs pass, screenshot at 390 light and dark. Agent's calls: Jerome Letter CXLVI is left out of the witnesses (its letter has no date and the model needs one: needs a «fecha desconocida» convention; `TODO`); Leo Sermon III shows c. 440 with a note that the edition prints no year; the Reformed «controversies» and «owed» cells and the Orthodox «discipline» and «unity» cells carry no citation id (the `RWCF31_x` registry numbering mismatch and the missing `OPhilaret275/261` ids; labels name the work and numbering); Papacy → Eucharist is not shown (withdrawn in the spec). The Orthodox «discipline» cell says the text of Q.275 was not read, as the research does.

### B2.3 · Sola Scriptura 02 (done)

(a) Files: `data/doctrine/sola-scriptura.02.mjs`, `src/content/pages/sola-scriptura/doctrine.es.ts` (generated), `src/content/pages/index.ts` (shared), `e2e/doctrine-02-pages.spec.ts`, `e2e/sidebar.spec.ts` (link count 125), `docs/features/doctrine-02-pages.md`.
(b) Commit: `feat(doctrine): add the sola scriptura overview page`
(c) Look at: `/es/doctrinas/sola-scriptura`. Tested: `check-content` valid; 138 doctrine/sidebar specs pass; shots at 1440 and 360, light and dark. Agent's calls: both Irenaeus entries are shown and cross-noted (the research says the importer must not use only one); the legend is Irenaeus III.4.1–2; the two Orthodox Dositheus Question I cells show the two editions' words (Schaff 1896 «No», Robertson 1899) with no conclusion; the Baptist «worship» cell says the passages read say little (the research calls the observed practice a map gap) and has no citation id; the Lutheran «Lectura personal» uses `LFCEpRN_5` only (the Large Catechism preface id is not in the registry). Not shown: Sola Scriptura → Baptism and → Eucharist (no cited sentence: spec §5 and closure F3/F4).

### B2.4 · wiring (done, minimal)

(a) Files: `data/doctrine/eucharist.02.json`, `src/content/pages/eucharist/doctrine.es.ts` (regenerated), `data/scripts/test-convert-doctrine.mjs`, `e2e/doctrine-practice.spec.ts`, `docs/features/doctrine-02-pages.md`.
(b) Commit: `fix(doctrine): cite the baptism link on the eucharist page`
(c) The tree rows, the doctrine switcher, the crumbs and the «Doctrinas conectadas» links needed no code: they read `spanishDoctrinePages`, so each new page appears by itself (checked by `e2e/sidebar.spec.ts`). Connected cards now link both ways for Baptism↔Eucharist and Papacy↔Sola Scriptura, and Papacy → Baptism links to the Baptism page; Baptism → Papacy is not a decided edge. No English UI strings were added (`getDoctrinePage` serves no English pages yet), so there is no parity to keep. The old Eucharist sentence «Todas las tradiciones exigen el bautismo antes de la comunión…» is gone; the new one cites only the texts of the Baptism page's edge. `docs/ROADMAP.md`, `docs/DECISIONS.md`, `docs/DESIGN.md` and «Current state» were **not** touched (away mode): Pedro or the merge task must tick the ROADMAP and record the decisions above.

## Still open (inert, never filled from memory)

- Witnesses c. 256–749 not read: Cyprian–Firmilian (beyond what is quoted), Augustine against the Donatists (beyond IV.24), Leo, Gregory the Great, Cyril, Origen, John of Damascus; Jerome Letter CXLVI (no date: needs a «fecha desconocida» convention); Cyprian Ep. LXX and the Seventh Council of Carthage (closure H) not imported.
- Spanish `paragraph` and `authorLine` for the 28 new witnesses.
- Registry ids still missing (cells carry the label only): `OPhilaret261`, `OPhilaret275`, `RWCF26_2`, `BBFMXIV`, `ODositheusQuestionI`, LC Preface, LC IV.36/45/65/78, the Reformed 31.3–4 numbering fix.
- The practice cells that are dossier paraphrase are written as attributed sentences: quote the print before publishing.
- Not verified by Pedro: every lede, legend, summary, short cell text and note in the three `data/doctrine/*.02.mjs` files is an agent's call from the research files.
- Full English parity of the 02 pages.

## Shared files touched

- `src/content/pages/index.ts`: line `import { baptismDoctrine } from "@/content/pages/baptism/doctrine.es";` and `export const spanishDoctrinePages = { eucharist: eucharistDoctrine, baptism: baptismDoctrine, papacy: papacyDoctrine };` and its import.
- `e2e/sidebar.spec.ts` (link count) and `e2e/doctrine-practice.spec.ts` (two cells/cards that changed meaning): see B2.1.

## Usage log

- 22:03 start: session 26 %, weekly 75 %.
- 22:08 after B2.0: session 28 %, weekly 75 %.
- 22:17 after B2.1: session 31 %, weekly 76 %.
- 22:21 after B2.2: weekly 76 %.
- 22:28 after B2.3 and B2.4: session 2 %, weekly 76 % (final; no block left that the research allows without new reading).
- Cap changed by a message from the coordinating session (doctrina-a8, 'Pedro's new shared weekly limit'): stop at weekly 82 %; poll at every block and every ~10 minutes.
