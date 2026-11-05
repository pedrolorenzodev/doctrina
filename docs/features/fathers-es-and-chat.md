# Fathers in Spanish, a translation switch and the AI chat in the Fathers' reader

Session «Padres», 2026-11-04. Pedro's words are quoted in the task prompt; this file keeps the list, how each item is verified and what the next session needs.

## List and acceptance

1. **Chat drawer: horizontal scroll moves the verses.** Fixed when a horizontal or diagonal wheel over the question chips slides only the chips. Verified by an e2e that failed before (page moved 42 px) and passes after.
2. **The 22 Spanish works in the reader.** Loader + validation of `data/corpus/fathers-es/`; same paragraph ids as the English edition; the Spanish text is labelled «Traducido con IA» like Pasajes; read marks, notes and highlights keep working per edition. Verified by a validator check, e2e and screenshots.
3. **Translation switch in the Fathers' fixed header.** The Bible reader's picker (abbreviation only, groups «Español» / «Inglés», choice remembered); only works with a Spanish edition offer the choice. Verified by e2e.
4. **AI chat in the Fathers' reader, as in the Bible.** Selection toolbar «Preguntar», header button on the left (same spacing as the right side), drawer and tree never open together; scripted answers for Ignatius to the Smyrnaeans, the Didache and Justin's First Apology citing only real passages of the local corpus. Verified by e2e and screenshots.

## Decisions made while Pedro was away
- See DECISIONS 2026-11-04: separate choice key; English first; ordinals aligned by locator; two partial works offered with their range; no «Borrador» line on the AI text; simplifier off on it; licence `cc0-translation`; the picker is always present (one option when there is no Spanish).

## Shared files touched
- `src/features/reader-ai/chat.tsx` (step 1), `e2e/reader-ai-drawer.spec.ts`, `docs/GOTCHAS.md`, `docs/DECISIONS.md`, `src/content/ui-text/{es,en}.ts`, `src/content/father-text/validate-father-file.ts`, `tools/check-fathers-corpus.mjs`, `data/scripts/build_fathers_es.py`.
- Not mine, seen failing: `npm run lint` stops at `check-english-names` because of the logo session's `docs/research/logo/round-2/refs/brands/citas-in/*` (Spanish word «citas»); the rest of the lint chain passes when run without it.

## Usage log
- 12:03 session 14 %, weekly 81 % (cap 90 %). 12:08 session 16 %, weekly 82 %. 12:5x steps 2–3 done.

## State
- Done: step 1 (block 235); steps 2 and 3 (block 236): loader `get-father-works-es.ts`, `ByFatherEdition`, `FatherStrip` picker, page `history/works/[work]`, e2e `father-edition.spec.ts` (7 pass), screenshots 1440/390 light and dark checked.
- Step 4 done (block 237): `ask-script.tsx` (context), `father-script-data.ts` + `father-script.ts`, `father-ask.tsx`, button in `father-strip.tsx`, toolbar «Preguntar» in `father-body.tsx`, `conversations.ts` per script, `tools/check-father-script.mjs` in the lint chain, `e2e/father-ask.spec.ts` (9 pass) + `reader-ai-drawer.spec.ts` (39 pass) + 70 others green.
- Next: Pedro's review in Dia; open: the scripted answers are only Spanish (as the Bible's); on phones the header button is hidden as in the Bible.

## Round 2 (2026-11-04/05)

1. **Dark wall texture 30 % milder.** `--wall-ink-opacity` dark .3 → .21; light .126 and the page background (`--texture-opacity`) untouched. Only two elements use `selected-ink` (segmented filter, scope control), both read the token. Verified: computed `::before` opacity 0.3 → 0.21 dark, 0.126 light unchanged; e2e `selected-states.spec.ts` «wall layer» failed before (0.3) and passes after; screenshots `tmp/shots/round2/wall-{before,after}-{dark,light}.png`.
2. **Edition by site language on first visit.** `defaultEdition = locale === "es" && spanish ? "es" : "en"` in the work page, passed to `ByFatherEdition`, the picker and `FatherAsk`. Verified: `father-edition.spec.ts` (first visit es/en, choice wins and is remembered, no-Spanish work shows English); `father-reader` and `father-ask` specs pre-set the English choice (`helpers.ts`).
3. **Reading-content translation.** The work's `h1`, `workName` (panel, citations), the `prologue`/`preface`/`moscow` markers follow the edition's language (`markers` in `ui-text`, `father-marker.ts`); the division headings and the Spanish titles come from the Spanish corpus. Page-level parts (breadcrumb current, document title, chat context, the partial-range line) stay in the site language. Verified: three new specs in `father-edition.spec.ts`; screenshots `tmp/shots/round2/s3-*` (1440/390, light/dark, es/en).
4. **«Segunda traducción».** `createSecondChoiceStore`, `fatherSecondStore`, `ParallelMenu`/hooks with a store argument, `FatherStrip` button, `FatherBody` over `views` (both editions), page wrapper widens for side. Verified: `e2e/father-second.spec.ts` (15 pass), Bible `reader-parallel` and `reader-translation` still pass; screenshots `tmp/shots/round2/s4-*` (1440 side/below, 390 below, light/dark, Bible beside).
5. **Notes preview cards.** `NoteCards` (`topOf`), `FatherBody` cards + word previews + `hideLabel`, `fatherTop`; the page wrapper already carried `reader-column`. Verified: `e2e/father-note-cards.spec.ts` (17 pass, the Bible's geometry numbers: 40 px, 240 px, 8 px gap, shift 297/151/83/66, 0 → 57 px), Bible `reader-note-cards` still green; screenshots `tmp/shots/round2/s5-*` beside the Bible's.

### Decisions made while Pedro was away (round 2)
- Step 1 read as «30 % less than now» (.3 × .7 = .21), the same reading as the 2026-10-31 light tuning (.18 → .126).

### Not mine, seen failing
- `e2e/selected-states.spec.ts` «the current tradition tab is lifted…» fails in light and dark: the tab button is now transparent because block 234 moved the fill to the sliding indicator; the spec is stale. Not touched.

### Usage log (round 2)
- 2026-11-05 09:02 session 4 %, weekly 1 % (week had reset).

### State (round 2)
- Step 1 done, frozen as block 238. Step 2 done (dev server; full run on the build pending at the end). Step 3 done. Step 4 done. Step 5 done. Next: full verify on the build, critique pass, final report.
