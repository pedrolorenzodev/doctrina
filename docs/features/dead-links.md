# Dead links

## State

- Status, 2026-11-08 night: authorized closeout complete; final `CORPUS_SOURCE=local npm run verify` passed (exit 0, Node 24.22.1). No claim of a site-wide clean crawl. No crawler or server was restarted.
- Done: application links, 39 isolated new e2e tests, earlier 57-test navigation/switcher run, baseline crawl, all 16 visual comparison pairs and eight centered-author states. Final crawl: 140,694 URLs, 140,680 HTTP 200, 14 HTTP 404; every failure classified below.
- Remaining: Pedro's visual approval and coordinator transfer. The 14 newly exposed broken links are reported only; no further fixes are authorized in this continuation.
- Server: port 3430 had no listener; saved owned PID 34903 no longer existed (checked with `ps` and `lsof`). Nothing was signalled or stopped; no other process was touched.
- Workspace: only `doctrina-codex-links`, Node 24.22.1, local corpus. No git writes or reserved-file changes. Evidence: `~/codex-scratch/links/`.
- Latest authorization replaces all prior caps: no new step at 70% window, checkpoint at 75%; weekly absolute ceiling 50%. Relaunch start: 0% window / 32% week. Final reading: 6% window / 33% week.
- Watcher failed after saving the completed crawl because usage fields were null; it never ran verify. The watcher and crawler are no longer running. Do not restart either.

## Intent and acceptance

Implement the pasted dead-links work order using existing page-link and citation styles, without inventing pages or changing reserved files. Every changed control must navigate to an existing destination with keyboard access. Preserve intentionally inert breadcrumbs. `npm run verify`, isolated e2e navigation tests and before/after crawls are required; screenshots apply where a title gains link styling. Pedro's visual review remains required. This is an existing-control repair, not a new UI design; reference: `docs/DESIGN.md`, page links and timeline panels.

## Inventory before application edits

Evidence: scratch `inventory.cjs` / `inventory.json` scan all TSX opening elements for handlerless buttons and links without explicit href; `data-inventory.mjs` / `data-inventory.json` inspect actual content and the local corpus. All 490 distinct starting Bible references exist. All 20 Spanish tradition pages have passages. There are 40 doctrine witnesses; 34 already identify a Father entity, four identify existing councils in their text, Sardica and Firmilian lack entity pages. No active `{g:...}` tokens were found in content.

| File and original line | Element and intended destination | Exists now / disposition |
|---|---|---|
| `src/features/doctrine/scripture-section.tsx:30` | Scripture headings → first referenced verse (chapter for chapter-only references) | Yes; wire with existing PageLink |
| `src/features/doctrine/passages-section.tsx:31` | Objection passage references → first referenced verse | Yes; wire |
| `src/features/doctrine/witnesses-section.tsx:34` | Full doctrine history → councils, controversies and confessions through today | No; early-Christians page is narrower and is not a replacement |
| `src/features/doctrine/witness-explorer.tsx` | Witness author/entity headings → Father or council | Existing identified entities; wire |
| `src/features/doctrine/early-christians-list.tsx:46` | Witness entity headings for councils → council page | Nicea I, Carthage 418, Chalcedon exist; wire |
| `src/features/doctrine/early-christians-list.tsx:65` | Read full witness → corpus division | Existing reader mappings already wired; missing mappings require edition/locator verification, not guessed destinations |
| `src/features/history/general-timeline.tsx:541` | Main writing titles in the panel → available corpus work | Some exist; use existing writing-to-work mapping and actual corpus availability |
| `src/features/doctrine/tradition-switcher.tsx:194` | Change tradition, retaining section | Already wired for five built traditions; test rather than replace |
| `src/app/[lang]/doctrines/[doctrine]/[tradition]/{passages,objections}/page.tsx` | Change tradition within the current page type | Already wired; all passages exist and objection indexes render even without official objections |
| `src/features/home/doctrine-rows.tsx:33,43` and home route | Doctrine rows → doctrine overview | Four Spanish overviews already wired; Justification and English overviews absent |
| `src/features/doctrine/connected-section.tsx:47` | Related doctrine → overview | All displayed Spanish overviews exist and are already wired by getConnected |
| `src/features/doctrine/answers-section.tsx:136,147` | Objection rows and study links | Existing destinations already selected by publication; file reserved |
| `src/features/verse/verse-passage.tsx:184` | Add note → editor on verse page | No editor on this page; reader-only editor is not the specified destination |
| `src/app/[lang]/words/[word]/page.tsx:308` | Greek Fathers quotes | No original-language corpus; leave |
| `src/features/history/father-writings-section.tsx:30` | Writings → reader | Existing mapped works wired; absent works stay as supplied; father-view reserved |
| `src/features/history/father-timeline.tsx:279,436` | Historical events → their page | Generic events lack pages; councils already open timeline detail; currents and Fathers already linked |
| `src/features/history/general-timeline.tsx:558` | Entity page link | Fathers, councils and currents already wired |
| `src/features/history/history-index-list.tsx:103` | History and glossary indexes → entity/term | Existing entries already wired |
| `src/features/shell/search-dialog.tsx`, `src/content/get-search-index.ts` | Search results → pages / timeline entries / witnesses | Already navigate; source inspection |
| `src/features/shell/sidebar.tsx:149,175,209,433` | Disabled branches, expand/collapse controls | Delegated tree handlers exist; unavailable content remains disabled |
| `src/components/rich-text.tsx:103,108` | Section and glossary tokens | Section callbacks already supplied; no active glossary tokens |
| `src/features/home/home-footer.tsx:27,34` | Glossary / Sources | Spanish glossary wired; English glossary absent; Sources reserved |
| `src/components/breadcrumbs.tsx` | History, Bible, book, Doctrines grouping | No index destination; inert text already correct (DECISIONS 2026-11-01) |
| `src/components/citation-window/citation-window.tsx:186` | Full source | Reserved; report to owning session |
| `src/features/home/mail-form.tsx:28`, `src/features/reader/red-notice.tsx:23` | Mailing list and contact | Backend / project address missing |

## Wired

| File | Element | Destination |
|---|---|---|
| `src/content/bible-routes.ts`, `src/features/doctrine/scripture-section.tsx` | Scripture reference headings on all 20 tradition pages | First referenced verse, or chapter for a chapter-only reference; localized Bible routes |
| `src/content/get-objection-passages.ts`, `src/features/doctrine/passages-section.tsx` | Answer and objector passage references | First referenced verse/chapter |
| `src/content/get-witness-entity-href.ts`, `src/features/doctrine/{witnesses-section,witness-explorer}.tsx` | 36 identified author headings on doctrine overviews | 32 named Father headings and four council witnesses; anonymous authors, Sardica and Firmilian remain plain |
| `src/features/doctrine/early-christians-list.tsx` | Four previously inert council headings | Nicea I (two), Carthage 418, Chalcedon 451 |
| `src/content/father-writing-links.ts` | Previously unmapped profile writing titles for Theophilus and Cyril of Alexandria | Existing `theophilus-to-autolycus` and `cyril-alexandria-commentary-john` readers; the latter is the available Pusey volume I |
| `src/content/get-general-timeline.ts`, `src/app/[lang]/history/timeline/page.tsx`, `src/features/history/general-timeline.tsx` | Main writing titles with available mapped texts, Spanish and English | Reader for one work; Father's `#works` list for a collection; existing link styling and navigation tests checked, Pedro's visual review pending |

## Left inert on purpose

| Element | Reason |
|---|---|
| History, Bible and book breadcrumbs | No pages will be created; keep text with no pointer, hover or underline |
| Pentecostal tabs; Justification and untranslated English doctrine/glossary pages | Destination content absent |
| Full doctrine history | The early-Christians page does not contain the promised complete history |
| Greek Fathers block | No original-language Father corpus |
| Generic historical events | No dedicated event pages and no matching general-timeline entries |
| Missing full-text writings / witness divisions | Need corpus or verified edition-specific locator; never guess |
| Sources and all reserved AI/citation controls | Owned by other runs, explicitly excluded |

The 14 crawl failures below are active broken links, not intentionally inert controls. None is an expected test URL.

## Needs Pedro

| Question | Suggestion |
|---|---|
| Six word-page links point to nonexistent chapters | Hand the three malformed lexicon references to the words/data owner; verify the intended references against the source and fix the generator, never the generated shards by hand |
| Eight language-switch links target a verse absent from the default destination edition | In a separate authorized block, check destination verse availability and agree on chapter fallback or an unavailable state; preserve edition-specific numbering |
| Should the verse page have its own note editor? | Implement the approved editor in a separate block; do not relabel a reader jump as an on-page editor |
| Where should complete doctrine histories go? | Keep pending until the promised broader content exists; do not send the label to early Christians only |
| What address and mailing backend should be used? | Supply the project address and choose a backend before enabling these controls |
| Missing work/edition mappings and Sardica/Firmilian entity pages? | Verify edition locators / add researched entities in their content task |
| Subworks inside collected editions need exact locator links, but `src/content/father-view.ts` is reserved | The owning session should support locator-bearing writing links for Cyril of Jerusalem’s Mystagogical Lectures (English divisions `19.1`–`23.1`), Gregory Nazianzen’s letters to Cledonius (`1.101`, `1.102`), and Leo’s Tome (`28`). Recheck the selected Spanish edition before enabling the anchor. The five theological orations are not all present as exact locators (`31` absent), so do not imply complete coverage |

## Verification

- Inherited and fresh source baseline crawls: 3,446 URLs each, all HTTP 200. `docs/features/qa-sweep.md` B2 L1/L2 identifies the old 182 failures as links to unavailable English doctrine/glossary pages, not intentional test 404s. `docs/features/qa-fixes.md` item 1 already corrected those links. Its per-row URL counts do not reconcile exactly with the aggregate, and the old raw crawl is outside this run's allowed copy; no invented reconstruction of those individual URLs.
- Final night continuation: `CORPUS_SOURCE=local npm run verify` ran exactly once and passed, exit 0, Node 24.22.1 (typecheck, lint, formatting, build; 9,120 static pages). Four existing lint warnings and build warnings for workspace lockfile, CSS optimization/parsing and metadataBase remain. Log: `~/codex-scratch/links/verify-resume-night.log`. The prior watcher did not run verification. No tests or crawl were repeated during this closeout.
- New `e2e/dead-links.spec.ts` passed alone: **39/39 Chromium tests**; previous combined run with `tradition-switcher.spec.ts`: **57/57**, including section retention and per-frame indicator assertions. No animation was changed.
- Completed final crawl: **140,694 URLs: 140,680 HTTP 200 and 14 HTTP 404**. Baseline: **3,446 URLs, zero 404s**. All baseline paths remain HTTP 200 in the final result; all 14 failures are newly reached paths. Connecting Bible references expands traversal into verse and word pages, including query variants; these are crawl URL counts, not counts of unique content pages. The historical 182 failures were corrected before this run (see the source baseline above). Interrupted intermediate crawls are superseded by the completed result. Evidence: `~/codex-scratch/links/{before,after}/tmp/qa/crawl.json`, `validation-result.json` and `finish-validation.log`.
- Visual review completed 2026-11-08: inspected all 16 before/after pairs (witness section and timeline panel at 360/390/768/1440, both themes), plus eight supplemental centered-author screenshots because the 360px original viewport did not show the new author link. No new clipping or overlap found. Desktop timeline captures have small pan/scroll-position differences; this is not a claim of pixel-identical captures. The changed title uses the existing solid page-link underline; the citation remains dotted and opens in place; anonymous author labels remain plain.
- Computed centered-author checks, all eight states: Work Sans, weight 500, solid underline, ink `rgb(28, 23, 19)` in light / `rgb(242, 242, 240)` in dark, correct Father href, target visible, zero horizontal overflow. Timeline metrics likewise show zero horizontal overflow in all eight states. Evidence: `~/codex-scratch/links/after/shots/witness-author-metrics.json`, `metrics.json`, all screenshots and `compare-*.jpg` / `centered-authors-*.jpg` in the scratch folder. These agree with `docs/DESIGN.md` §1 and the existing `link-page` / `link-cite` styles; no tokens changed.
- No full-suite, WebKit, real-device or screen-reader claim.
- Pedro's visual approval remains pending. The report is retained as the handoff requested by the work order, rather than deleted as an ordinary closed feature plan.

## Final crawl: all 14 HTTP 404 URLs

Every row is a **real broken internal link**. The crawl follows emitted hrefs; none of these was an intentional negative test. Missing destination verses are expected from the supplied edition data, but exposing a link to their 404 page is still a navigation defect. No application changes were made for these findings, per Pedro's restricted continuation order.

| URL | First referring page | Classification / evidence |
|---|---|---|
| `/es/biblia/juan/22` | `/es/palabras/G1096?from=Heb.7.23` | Real broken link: invalid chapter from lexicon sense reference `John.22.29` |
| `/es/biblia/santiago/22` | `/es/palabras/G0032G?from=Heb.1.6` | Real broken link: invalid chapter from lexicon sense reference `Jas.22.25` |
| `/en/bible/john/22` | `/en/words/G1096?from=Heb.7.23` | Real broken link: invalid chapter from lexicon sense reference `John.22.29` |
| `/en/bible/james/22` | `/en/words/G0032G?from=Heb.1.6` | Real broken link: invalid chapter from lexicon sense reference `Jas.22.25` |
| `/es/biblia/lucas/34` | `/es/palabras/G1074?from=Luke.7.31` | Real broken link: invalid chapter from lexicon sense reference `Luke.34.17` |
| `/en/bible/luke/34` | `/en/words/G1074?from=Luke.7.31` | Real broken link: invalid chapter from lexicon sense reference `Luke.34.17` |
| `/en/bible/acts/28/29` | `/es/biblia/hechos/28/29` | Real broken language-switch link: verse key absent from destination default corpus (BSB) |
| `/es/biblia/2-corintios/13/14` | `/en/bible/2-corinthians/13/14` | Real broken language-switch link: verse key absent from destination default corpus (RV1909) |
| `/en/bible/matthew/23/14` | `/es/biblia/mateo/23/14` | Real broken language-switch link: verse key absent from destination default corpus (BSB) |
| `/en/bible/matthew/18/11` | `/es/biblia/mateo/18/11` | Real broken language-switch link: verse key absent from destination default corpus (BSB) |
| `/en/bible/acts/15/34` | `/es/biblia/hechos/15/34` | Real broken link: invalid chapter from lexicon sense reference `Luke.34.17` |
| `/en/bible/acts/8/37` | `/es/biblia/hechos/8/37` | Real broken language-switch link: verse key absent from destination default corpus (BSB) |
| `/en/bible/john/5/4` | `/es/biblia/juan/5/4` | Real broken language-switch link: verse key absent from destination default corpus (BSB) |
| `/es/biblia/hechos/19/41` | `/en/bible/acts/19/41` | Real broken language-switch link: verse key absent from destination default corpus (RV1909) |

Source checks: `src/content/get-word-page.ts` (`sensesOf` / `place`) turns the supplied lexicon references into chapter hrefs without checking chapter existence. `data/site/words/lexicon/G000.json` contains `G0032G` → `Jas.22.25`; `G010.json` contains `G1096` → `John.22.29` and `G1074` → `Luke.34.17`. The local Bible corpus ends those books at chapters 5, 21 and 24 respectively. Generated data was read only.

For the eight verse URLs, the source key exists and the destination key does not in `data/corpus/bibles/{rv1909,bsb}.json`. `src/content/language-switch.ts` delegates Bible paths to `swapBibleLocale` without verse availability; `src/content/get-verse-page.ts` rejects a verse absent from the destination's default edition. This explains the 404 without assuming that equal verse numbers identify equivalent text across editions. These findings extend the original inventory's word-page and language-switch coverage; the unchanged disabled controls remain in the table above.

## Inventory details for unavailable writing targets

The timeline now links 43 of 113 main-writing rows per locale using 150 available corpus works. The remaining rows below have no mapped standalone reader. Some are subworks inside collections and require the reserved `father-view.ts` locator support noted above; no unverified fuzzy match was applied. The matching full-text links already shown separately on Father profiles stay available.

| Father identifier | Main-writing titles left as supplied |
|---|---|
| `melito-of-sardis` | Sobre la Pascua (Peri Pascha) |
| `hippolytus-of-rome` | Tradición apostólica (atribución debatida); Comentario a Daniel |
| `origen` | Hexapla |
| `novatian` | Sobre la Trinidad |
| `dionysius-of-alexandria` | Sobre las promesas (fragmentos) |
| `methodius-of-olympus` | El banquete (sobre la virginidad); Sobre la resurrección |
| `lactantius` | Instituciones divinas; Sobre la muerte de los perseguidores |
| `eusebius-of-caesarea` | Vida de Constantino; Demostración evangélica |
| `aphrahat` | Demostraciones (23) |
| `hilary-of-poitiers` | Sobre la Trinidad; Comentario a Mateo |
| `athanasius-of-alexandria` | Carta festal 39 (canon bíblico) |
| `ephrem-the-syrian` | Himnos sobre la fe; Himnos sobre el paraíso; Himnos de Nísibis (Carmina Nisibena) |
| `basil-of-caesarea` | Contra Eunomio; Reglas monásticas (Asceticon) |
| `cyril-of-jerusalem` | Catequesis mistagógicas (atribución debatida) |
| `gregory-of-nazianzus` | Cinco discursos teológicos; Poemas (incluido De vita sua); Cartas teológicas a Cledonio |
| `gregory-of-nyssa` | Vida de Moisés |
| `optatus-of-milevis` | Contra los donatistas (Contra Parmenianum) |
| `didymus-the-blind` | Sobre el Espíritu Santo (traducción latina de Jerónimo); Comentario a Zacarías (papiros de Tura) |
| `epiphanius-of-salamis` | Ancorato; Panarion (Botiquín contra las herejías) |
| `john-chrysostom` | Sobre el sacerdocio |
| `rufinus-of-aquileia` | Traducción de Sobre los principios de Orígenes; Historia eclesiástica (traducción y continuación de Eusebio); Comentario al Credo de los Apóstoles |
| `jerome` | Vulgata (traducción latina de la Biblia); Sobre los hombres ilustres; Cartas |
| `augustine-of-hippo` | Sobre la Trinidad |
| `john-cassian` | Instituciones cenobíticas; Colaciones (Conferencias) |
| `cyril-of-alexandria` | Tercera carta a Nestorio (con los Doce Anatematismos); Sobre la unidad de Cristo |
| `vincent-of-lerins` | Conmonitorio |
| `peter-chrysologus` | Sermones (colección de Félix de Ravena) |
| `prosper-of-aquitaine` | Contra el Colator; Capítulos sobre la gracia (Indiculus, atribución probable); Crónica |
| `theodoret-of-cyrrhus` | Historia religiosa (de los monjes de Siria) |
| `leo-the-great` | Tomo a Flaviano (Carta 28) |
| `caesarius-of-arles` | Sermones; Regla para las vírgenes |
| `gregory-the-great` | Moralia in Iob (Comentario moral a Job); Diálogos |
| `isidore-of-seville` | Etimologías; Sobre los oficios eclesiásticos; Historia de los godos |
| `sophronius-of-jerusalem` | Carta sinodal; El prado espiritual (con Juan Mosco) |
| `maximus-the-confessor` | Mistagogia; Ambigua; Disputa con Pirro |
| `isaac-of-nineveh` | Discursos ascéticos (Primera parte); Segunda parte (redescubierta en 1983) |
| `bede` | Sobre el cómputo del tiempo (De temporum ratione); Historia eclesiástica del pueblo inglés |
| `andrew-of-crete` | Gran Canon penitencial |
| `germanus-of-constantinople` | Historia eclesiástica y contemplación mística (sobre la Divina Liturgia) |
| `john-of-damascus` | Tres discursos sobre las imágenes; Fuente del conocimiento (incl. Exposición exacta de la fe ortodoxa) |

## Coordinator handoff

Transfer only the files below from this clone. For shared `DECISIONS.md`, `GOTCHAS.md` and `ROADMAP.md`, merge this clone’s scoped diff hunks rather than overwriting newer real-repo entries from other sessions. Do not copy `.next`, scratch outputs or the pre-existing untracked `.playwright-mcp/`, `tmp/`, or research `__pycache__/` directories. No reserved file was changed. The old watcher failed before verification; the manual continuation found no owned server still running. See State for final validation.

- `docs/DECISIONS.md`
- `docs/GOTCHAS.md`
- `docs/ROADMAP.md`
- `docs/features/dead-links.md`
- `e2e/dead-links.spec.ts`
- `src/app/[lang]/history/timeline/page.tsx`
- `src/content/bible-routes.ts`
- `src/content/father-writing-links.ts`
- `src/content/get-general-timeline.ts`
- `src/content/get-objection-passages.ts`
- `src/content/get-witness-entity-href.ts`
- `src/features/doctrine/early-christians-list.tsx`
- `src/features/doctrine/passages-section.tsx`
- `src/features/doctrine/scripture-section.tsx`
- `src/features/doctrine/witness-explorer.tsx`
- `src/features/doctrine/witnesses-section.tsx`
- `src/features/history/general-timeline.tsx`
- `tools/qa/crawl.mjs`

Commands for Pedro **after successful final validation, visual approval and coordinator transfer**; never executed by the agent.

Implementation:

```sh
cd ~/Desktop/dev/doctrina && git add 'src/app/[lang]/history/timeline/page.tsx' src/content/bible-routes.ts src/content/father-writing-links.ts src/content/get-general-timeline.ts src/content/get-objection-passages.ts src/content/get-witness-entity-href.ts src/features/doctrine/early-christians-list.tsx src/features/doctrine/passages-section.tsx src/features/doctrine/scripture-section.tsx src/features/doctrine/witness-explorer.tsx src/features/doctrine/witnesses-section.tsx src/features/history/general-timeline.tsx && git commit -m "fix(navigation): connect existing doctrine and history links"
```

Tests:

```sh
cd ~/Desktop/dev/doctrina && git add e2e/dead-links.spec.ts && git commit -m "test(navigation): cover restored links"
```

QA tool:

```sh
cd ~/Desktop/dev/doctrina && git add tools/qa/crawl.mjs && git commit -m "fix(qa): detach crawler links from source html"
```

Documentation:

```sh
cd ~/Desktop/dev/doctrina && git add docs/DECISIONS.md docs/GOTCHAS.md docs/ROADMAP.md docs/features/dead-links.md && git commit -m "docs(navigation): record dead-link audit and handoff"
```

## Retrospective

Existing link styling sufficed; no design proposal or token changes were needed. Existing QA fixes explain the historical crawl failures. Matching actual corpus metadata found two omissions that a TODO-only scan missed. Subworks in collected editions need explicit edition-aware locators in the owning session; title similarity is insufficient.

## Next exact step

Pedro reviews the existing visual evidence, then the coordinator transfers only the listed files and scoped shared-doc hunks. Commands above are supplied at Pedro's explicit request for later use, after his visual approval and transfer. No further crawl, runner, server, application change or test run is needed for this handoff. The 14 active broken links require a separate authorized follow-up; their report is not a claim that the entire site is free of broken links.

## 2026-11-08 QA crawler correction

The unmodified crawler crashed at the default 4 GiB Node heap limit after its 9,000-fetch progress line; it did not produce a final count. Captured href substrings kept their large parent HTML strings reachable through the crawl maps. Copying each decoded href through a UTF-8 Buffer detaches it without changing the URL text or traversal. A controlled Node 24 `--expose-gc` reproduction holding 200 hrefs from separate 250 KB documents retained 47.73 MiB before and 0.27 MiB after. Reproduction: `~/codex-scratch/links/crawl-retention.cjs`. Failure log: `after/crawl-progress-oom.log`. The retry reports heap use every 250 fetches and passed 9,250 URLs at 13 MiB heap, beyond the old failure point. Rejected: simply raising the heap limit, which would leave the retention bug and compete with the other session for memory.
