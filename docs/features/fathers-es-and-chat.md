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
