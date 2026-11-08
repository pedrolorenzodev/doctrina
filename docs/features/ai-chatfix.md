# AI chatfix: timeline in the chat's citation windows, and the proposal for the reader's notes (2026-11-07)

## State

- **Task A (timeline in the chat's citation window and hover card): built and verified**, except the points under «Not verified». `npm run typecheck`, `lint` (with the 10 `ai checks`) and `format:check` pass; the build passes both normal and with `NEXT_PUBLIC_AI_CHAT=real`. `npm run verify` was not run as one command to the end (the first run died of a full disk during the build; typecheck, lint, format and build were then run separately and pass).
- **Task B (proposal for the follow-up on the reader's notes): published, nothing built.** https://claude.ai/artifact/Y4C28LK6hHMCewcBqGrCz7 (private; Pedro decides whether to share). It ends with what Pedro must decide.
- Port 3160 only; `AI_PROVIDER=fake`; no real AI call. The server on 3160 is stopped.

## Task A: what was built

The server computes the date from the site's own data and sends it on the wire quote; the client puts it in the shared `CitationView.date`; the hover card and the window render the same component.

- **Fathers:** the date of the writing in `history` data, the one the Father's own page shows: `father.works[i].date` and `.year`, found through `writingWorkIds` (workId → writing). Label = the site's string (e.g. «c. 348–350»); years from the same parser the Father page uses (`writingYears`, moved to `src/content/writing-years.ts` so Node tools can load it).
- **Tradition sources** (confessions, catechisms, councils, theologians): `buildCitationView(...).date`, i.e. `citation.date ?? work.date` of the registry, the code behind the 02/03 windows (formatted with `formatDate`, with «(sin confirmar)» when unconfirmed). The live passage key `tradition:<doctrine>:<tradition>:cite:<citationId>:…` gives the citation id.
- **Bible verses:** no date, as elsewhere.
- **Live answers:** `WireQuote.date` is set in `wireQuote` (`src/features/ask/map-answer.ts`), so `ask`, the «más» route and the cache carry it. `liveQuoteViews` copies it into the view.
- **Scripted and fake answers:** the two server pages compute `quoteDates` with `scriptQuoteDates` and pass it to `ReaderAsk`/`FatherAsk`. Father quotes use `fatherWorkDate(quote.father.workId)`. The six tradition quotes of the Bible script map to registry citation ids (`ccc1336`→`CEC1336`, `trent8`→`T13can1`, `phil340`→`OPhilaret339_340`, `apol10`→`LApX_54`, `bfm7`→`BFM7`); the map holds ids, never years.
- **Hover card:** the same block as the window (`CitationDate`: «Fecha» label, bold year, `MiniTimeline`), after the source line and before the «Cita comprobada» line (in the window the order is quote, who and locator, edition, date; the card has no separate edition line). The block is now one component (`src/components/citation-window/citation-date.tsx`) used by the window and the card; its look and the tokens did not change. Only the top margin differs (`mt-2.5` in the card, `mt-3.5` in the window) to follow each one's rhythm.

### Files and edit points

- `src/components/citation-window/citation-date.tsx` (new), `citation-window.tsx` (uses it).
- `src/content/quote-dating.ts` (new: `fatherWorkDate`, `citationDate`, `passageDate`), `src/content/writing-years.ts` (new), `src/content/father-view.ts` (imports `writingYears`).
- `src/lib/ai/contracts.ts` (`WireQuote.date`), `src/features/ask/map-answer.ts` (`wireQuote`).
- `src/features/reader-ai/quote-dates.ts` (new), `quote-views.ts`, `ask-script.tsx` (`liveQuoteViews`), `reader-ask.tsx` (`quoteDates` prop), `father-ask.tsx`, `cite-preview.tsx`.
- `src/app/[lang]/bible/[book]/[chapter]/page.tsx`, `src/app/[lang]/history/works/[work]/page.tsx` (pass `quoteDates`).
- Tests: `e2e/reader-ai-drawer.spec.ts` (4 new: Father and tradition card and window; a work without a date; a verse), `e2e/reader-ai-real.spec.ts` (1 new, live answer with a stubbed wire quote; runs only with `NEXT_PUBLIC_AI_CHAT=real`), `tools/ai-checks/check-answer.mjs` (1 new check: `wireQuote` dates).

### Verification

- Chromium on 3160, normal build: `reader-ai-drawer`, `father-ask`, `citation-window`, `ai-ask`, `reader-ai-real`, `father-reader`: 82 passed, 15 skipped (the real-mode file skips without the flag). Real build: `reader-ai-real`, `reader-ai-drawer`, `father-ask`: 64 passed, 4 skipped; no failure, so none new against the base.
- Screenshots (56, at 360, 390, 820 and 1440, light and dark) of card and window for a Father quote, a tradition quote, an undated Father work, and a 02 page's window as reference, plus one Sonnet verifier subagent over them: date block present where expected and absent for the undated work; identical type, spacing and colour to the 02 window; nothing clipped in the 360/390 sheets. Its two side notes, not caused by this change: the taller card sits 8 px from the top at 1440 (it flips above the link as before) and the tradition card overlaps the drawer's «Ir al final» arrow at some widths (existing stacking).

### Sources that show no timeline (the site has no date for them)

- **97 of the 150 Father corpus works** have no writing mapped to a dated entry in `father-writing-links.ts` (the Father's own page lists them without a date too): 2-clement, ambrose-de-excessu-fratris, ambrose-de-paenitentia, ambrose-de-spiritu-sancto, ambrose-de-viduis, ambrose-de-virginibus, ambrose-selected-letters, aristides-apology, athenagoras-plea-christians, athenagoras-resurrection-dead, augustine-de-catechizandis-rudibus, augustine-de-doctrina-christiana, augustine-de-fide-et-symbolo, augustine-enchiridion, augustine-sermon-on-the-mount, augustine-tractates-john, basil-hexaemeron, basil-letters, the 13 chrysostom-homilies-* (1-thessalonians … titus, john), clement-alexandria-prophetic-eclogues, clement-alexandria-quis-dives-salvetur, the 10 cyprian-* (ad-demetrianum … testimonia-ad-quirinum), cyril-alexandria-commentary-john, gregory-great-selected-letters, gregory-nazianzus-selected-letters and -selected-orations, the 12 gregory-nyssa-*, hippolytus-against-noetus, hippolytus-christ-antichrist, leo-great-selected-letters, martyrdom-polycarp, origen-commentary-john, origen-commentary-matthew, origen-letter-africanus, origen-letter-gregory, tatian-address-greeks, tatian-diatessaron-arabic, the 22 tertullian-*, theodoret-selected-correspondence, theophilus-to-autolycus. This includes Augustine's Tractates on John and *On Christian Doctrine*, the Father sources the John 6 question surfaces most, so many live Father quotes will show no timeline until their dates are researched and mapped.
- **28 registry citations** (`citationDate` returns null): `STSA~el`, `STSA~pl`, `STORT~eo`, `OConstantinopleI3`, `OTrullo36`, `OChalcedon28`, `STDOS~po`, `STWCF~er`, `STWCF~p`, `STLUT~p`, `STLUTAC~p`, `ST1848~p`, `ST1895~p`, `T6c8`, `T6c20`, `STLUT~s`, `PHIL290`, `AG6`, `AG6m`, `AG6s`, `AG6d`, `AG5`, `AG5b`, `MISAL`, `OGMR`, `STWCF`, `STSA`, `ST1895`.
- **Scripted quote with no registry citation:** `belg35` (Belgic Confession art. 35). The registry has no Belgic work.
- **Tradition passages that are not excerpts** (statements, definitions, doctrine and glossary rows): no citation id, no date.

## Calls I made

1. **Where the date is computed:** on the server, in `wireQuote`, and sent in `WireQuote.date`. Discarded: computing it in the client (the registry is server-only and heavy).
2. **No death-year fallback for undated Father works.** The retrieval loader stores `father.died` as `year` for them, but showing «† 430» as the date of a work would be a wrong fact; the brief says no block. Filling the data (with sources) is the real fix.
3. **`trent8` maps to `T13can1`**, the registry citation of Session XIII (11 Oct 1551): the registry has no citation of canon 8 itself, but dates every Session XIII citation the same.
4. **`apol10` maps to `LApX_54`** (Apology, art. X, 1531): the registry's nearest citation of art. X.
5. **`ccc1336`** shows «1992/1997»: that is the registry's own label for the Catechism (`alsoYears`).
6. **Cached answers:** an answer stored before this change has no `date` on its quotes, so it shows no timeline until it expires or the prompt version changes. I did not bump `ANSWER_PROMPT_VERSION` (it is a cache key, and nothing in the prompt changed). Pedro or the coordinator can bump it if stale cached answers matter.
7. **Preview position of the block:** after the source line, before the check line (see above).

## Not verified

- A live answer against the real model and the real Supabase corpus (fake provider only; the live wire shape is covered by the stubbed e2e and the `check-answer` check).
- `npm run verify` as one command to the end (see State).
- The WebKit project.
- Hover on a real touch device (the card is a hover affordance; on touch only the window opens).

## Task B: the proposal

https://claude.ai/artifact/Y4C28LK6hHMCewcBqGrCz7. Built with the drawer's real fonts (Newsreader, Source Serif 4, Work Sans from Google Fonts), the real colour tokens in light and dark, the paper texture, and the real classes' sizes (`text-synthesis`, `text-passage-compact`, `text-label`, chips and actions of the foot). Real content: Pedro's John 6 question about the Protestants and the Eucharist, with quotes copied from the site's data (Apología art. X, Confesión Belga 35, Fe y Mensaje Bautistas VII). Three cases (a note with a question on John 6:53; a note with a doctrinal claim on John 6:63; a note unrelated, Psalm 23:1) and three options (A a closing sentence in the prose, B a tappable suggestion under the answer, C both), each beside «Hoy» (the answer's real ending). Tapping the note suggestion runs a short turn (phases, then quotes) so the effect is visible. At 360 px it stacks, with «Hoy» behind a button. The page also lists, per option, where it goes, its source, its cost and its behaviour in brief answers, with no results and in follow-ups; what is discarded; and the three things to decide (A/B/C with my recommendation of C, the sentence text, and whether the «Juan 6:53» citation leads to the note).

Agent's calls in the proposal:
- The note's own words are quoted by the server in the sentence and the suggestion; the model only returns the note id and its type (question, claim, none). The paraphrase of Pedro's example («donde te preguntabas…») is offered as the alternative and flagged as riskier.
- «Hoy» is not interactive (`inert`), and the reader's composer is left out of the frame (it would be a field that does nothing).
- In the demo the citations in the answer are plain text in the citation style (they do not open the window, as it would need the whole drawer).
- Nothing shows internal states or placeholders.

## Usage readings (Claude weekly; cap 45 %)

19:31 start: 36 % · 19:58 after Task A build: 37 % · 20:15 end: 37 % (session 21 %).

## For DECISIONS

- **2026-11-07 · Chat citation windows show the timeline.** Pedro: «de la misma manera que lo hacemos en los modals del resto de la web». Built: Fathers from the writing's date in the history data; tradition sources from the registry's `citation.date ?? work.date`; the hover card and the window render the shared `CitationDate`; verses have none. **Agent's calls:** no death-year fallback; `trent8` and `apol10` map to the registry's nearest citation of that session and article; cached answers made before the change show no timeline. **Open (Pedro):** 97 of the 150 Father corpus works and 28 registry citations have no date in the data, among them Augustine's Tractates on John: dating them needs researched, cited dates (a data task).
- **Proposal for the follow-up on the reader's notes:** https://claude.ai/artifact/Y4C28LK6hHMCewcBqGrCz7 (options A, B, C; recommendation C; decisions pending).

## For GOTCHAS

- `src/content/quote-dating.ts` is imported by `src/features/ask/map-answer.ts`, which Node tools load (`tools/ai-checks/check-answer.mjs`): it must not import `father-view.ts`, `routes.ts` or anything with `server-only` (Node cannot resolve them). `writingYears` lives in its own file for that reason; `en` and `es` UI text are imported directly, not through `getUiText` (`server-only`).
- `registry.citations` has a literal type: index it after `Object.hasOwn`.
- `Quote.father.workId` of a scripted quote must be a work that `father-writing-links.ts` maps, or the scripted quote shows no timeline.
- Capture scripts that hover a citation right after closing the window need the pointer moved away first, or the card does not reopen.
