# Fathers in Spanish, a translation switch and the AI chat in the Fathers' reader

Session «Padres», 2026-11-04. Pedro's words are quoted in the task prompt; this file keeps the list, how each item is verified and what the next session needs.

## List and acceptance

1. **Chat drawer: horizontal scroll moves the verses.** Fixed when a horizontal or diagonal wheel over the question chips slides only the chips. Verified by an e2e that failed before (page moved 42 px) and passes after.
2. **The 22 Spanish works in the reader.** Loader + validation of `data/corpus/fathers-es/`; same paragraph ids as the English edition; the Spanish text is labelled «Traducido con IA» like Pasajes; read marks, notes and highlights keep working per edition. Verified by a validator check, e2e and screenshots.
3. **Translation switch in the Fathers' fixed header.** The Bible reader's picker (abbreviation only, groups «Español» / «Inglés», choice remembered); only works with a Spanish edition offer the choice. Verified by e2e.
4. **AI chat in the Fathers' reader, as in the Bible.** Selection toolbar «Preguntar», header button on the left (same spacing as the right side), drawer and tree never open together; scripted answers for Ignatius to the Smyrnaeans, the Didache and Justin's First Apology citing only real passages of the local corpus. Verified by e2e and screenshots.

## Decisions made while Pedro was away
- (none yet)

## Shared files touched
- `src/features/reader-ai/chat.tsx` (step 1), `e2e/reader-ai-drawer.spec.ts`, `docs/GOTCHAS.md`.

## Usage log
- 12:03 session 14 %, weekly 81 % (cap 90 %). 12:08 session 16 %, weekly 82 %.

## State
- Done: step 1 (frozen as block 235).
- Next: step 2.
