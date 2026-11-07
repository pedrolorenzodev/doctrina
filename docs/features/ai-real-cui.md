## State (rewritten at every part boundary)

- **Done:** parts 470 to 473. `npm run verify` exit 0; `check-cui.mjs` 24 checks; `e2e/reader-ai-real.spec.ts` 10/10 with `NEXT_PUBLIC_AI_CHAT=real`; `reader-ai-drawer`, `father-ask`, `ask-drawer-tree` 51 passed + 2 skipped (real) and 53 passed (scripted, build without the variable); verifier report in `ai-real-cui-verifier.md` (one defect, fixed).
- **Next:** block INT copies the files below, in the order of the plan.
- **Cap:** 25 % weekly (Pedro's instruction in the launch message). Readings: start 19 %, after the code 21 %, end 21 %.
- **Resume:** `NEXT_PUBLIC_AI_CHAT=real npm run build && E2E_PORT=3170 NEXT_PUBLIC_AI_CHAT=real npm run e2e -- e2e/reader-ai-real.spec.ts` (kill the server on 3170 by PID before rebuilding).

## What is built

Files (all owned): `src/features/reader-ai/{live-answers.ts,use-ask-stream.ts}` (new), `chat.tsx`, `answer.tsx`, `answer-parts.tsx`, `ask-script.tsx`, `reader-ask.tsx`, `conversations.ts`, `text.ts`, `script.ts`, `e2e/reader-ai-real.spec.ts`, this file. `father-ask.tsx` needed no edit: `ReaderAsk` wraps whichever base script it receives, so the Fathers' reader is covered by the same code.

Behaviour, in one pass:
- `NEXT_PUBLIC_AI_CHAT=real` (read in `reader-ask.tsx`): the typed question goes through `script.route`; only `none` goes to `POST /api/ai/ask` (SSE). With `scripted` nothing changes (53 existing specs pass on a build without the variable).
- `use-ask-stream.ts`: fetch plus SSE parser, `AbortController` for «Detener», 60 s timeout, error mapping from the body or the HTTP status; `more()` for `/api/ai/ask/more`; `pickNotes` (chapter notes by verse, then chapter highlights, then up to 6 related notes from elsewhere by keyword overlap; ≤ 20 items, ≤ 4,000 characters, ≤ 1,000 per note).
- `live-answers.ts`: external store of `WireAnswer`s. Quote ids are namespaced `answerId~quoteId` (two answers can both have `q1`); `{q:…}` tokens, blocks, words and `consulted` are rewritten on entry. Entry ids are `live:<answerId>`, chips `live:<answerId>:f<n> | more | retry`.
- `withLiveAnswers(base, live, labels)` (`ask-script.tsx`): live ids resolve to a script `Answer` (cached per `WireAnswer`, so already revealed answers never replay); `liveQuoteViews` builds the citation-window views (Father: «Abrir la fuente completa» to `fatherWorkHref#d-<anchor>`; other quotes with `href`: that href).
- `answer.tsx`: while waiting, the approved ticker shows the real phase (`plan/search/read` → «Buscando en los Padres», `write` → «Redactando», `check` → «Comprobando las citas en la edición») and real seconds; when the answer arrives, the approved reveal runs. Errors are `fixed` plain answers with a «Reintentar» chip when `retry`.
- `chat.tsx`: `startLive` shared by typed questions, follow-up chips, retry and «Más textos sobre esto» (a new answer of kind `more`, offset = blocks already appended for that root answer). The resolved entry stores the raw `WireAnswer` (`SavedEntry.live`, without `context`); `reader-ask.tsx` puts saved answers back in the store when a conversation is picked in «Preguntas anteriores», so the replay makes no call.

## Agent's calls

1. **Typed free questions in real mode skip the scripted «none» text.** Two existing assertions in `e2e/father-ask.spec.ts` (no passage → «no hay respuesta»; work without questions → «Todavía no hay respuestas preparadas») are skipped when `NEXT_PUBLIC_AI_CHAT=real` (2 lines added; they pass in scripted). Needed for INT: it is the one edit outside «my» new spec.
2. **`scopeMiss` never goes live.** It only exists for the scopes «chapter» and «Biblia»; with «Todo el corpus» it cannot occur, so the brief's second condition has nothing to do.
3. **Prose citation label.** Bible quote: `sourceOf` («Juan 6:53»). Any other quote: only the locator (`work`), because the button is atomic and the full `who, work` label wrapped badly (verifier D1).
4. **Meta line.** Live answers show «Generada por IA. {coverage line}» (the server-built `scope`) in place of «Buscado en: {scope name}»; `more` answers show «Más pasajes de la misma búsqueda, citados tal cual.» (no model ran).
5. **Phase labels.** The three approved strings cover all five events; no fourth string. Order of the labels follows the events (`write` before `check`), so «Comprobando…» appears last and, with the stub, for a few milliseconds.
6. **Father quotes carry no `father` field in the drawer `Quote`** (live `original` is `""`; the hover card would draw an empty `««»` block). The hover card therefore says «Cita comprobada en el texto que guarda Doctrina» instead of the Father wording, and the window still has «Abrir la fuente completa». Better fix for INT, if wanted: a one-line guard in `cite-preview.tsx` (hide the original block when empty) and pass `father` through `toQuote`.
7. **Bible quotes from the model** navigate by `WireQuote.href` (in place when the chapter is the active one, else `router.push(href?place=third#v-N)`); scripted ones keep their branch. The real server must send `href` for Bible quotes.
8. **History.** Errors and stopped answers are not saved; example history rows stay in real mode (the TODO at their call site is still there, `chat-design.md` §14 says to drop them once answers are real: Pedro/INT decides).
9. **Highlights' text** comes from the DOM (`[data-verse-text="N"]`, only when exactly one match), because the highlight store keeps offsets, not text; none found → the highlight is not sent.
10. **Not built:** the «Nueva conversación» chip after 6 questions (`turn` is clamped to 6; the server's reply decides what the reader sees), the answer cache hint «cached» in the UI.

## Inert, with TODO

Nothing new is inert. The two existing `TODO`s of the drawer («Guardar en Tus notas», «Informar un error», example history) are untouched.

## Measured

- 24-quote answer (mocked route, 8 verses, 7 authors), 390 and 1440: first paint of the answer to the actions row 12.8 to 13.0 s (quotes: the first 8 at 480 ms, the other 16 at 160 ms and a 200 ms fade; prose capped at 6 s, 150 words at 40 ms); 24 blockquotes; no horizontal overflow; drawer scroll ≤ 17 px per frame.
- Answer height per frame: the live and the scripted answer show the same one-frame spike (+213 / −223 px and back, measured on the answer's rect when a block is inserted, before the 220 ms growth takes over): not new, not fixed here (the brief's «≤ 4.4 px» refers to the settled growth measured in block 3).
- Screenshots: `tmp/ai-cui/shots/` (live and scripted at 360/390/1440, light and dark).
- Money spent on the API: none (fake provider and mocked routes only). Usage: start 19 %, end 21 % weekly.

## How to run

`NEXT_PUBLIC_AI_CHAT=real npm run build`, then `E2E_PORT=3170 NEXT_PUBLIC_AI_CHAT=real npm run e2e -- e2e/reader-ai-real.spec.ts e2e/reader-ai-drawer.spec.ts e2e/father-ask.spec.ts e2e/ask-drawer-tree.spec.ts`. By hand: build as above, `npx next start -p 3170`, open `/es/biblia/juan/6`, press «Preguntar» and type a question the script does not know («¿Qué opinan los vecinos del barrio?»). The route is F's stub until C-SRV lands (it also lacks `/api/ai/ask/more`; the spec mocks it).

## Files for INT (in the order of the plan, C-UI step)

Edit: `src/features/reader-ai/{chat.tsx,answer.tsx,answer-parts.tsx,ask-script.tsx,reader-ask.tsx,conversations.ts,text.ts,script.ts}`, `e2e/father-ask.spec.ts` (2 skips). Create: `src/features/reader-ai/{live-answers.ts,use-ask-stream.ts}`, `e2e/reader-ai-real.spec.ts`, `tools/ai-checks/check-cui.mjs`, `docs/features/ai-real-cui.md`, `docs/features/ai-real-cui-verifier.md`. `father-ask.tsx` unchanged.

## Kit blocks (to freeze at INT as 470–479)

| Block | Files | Message |
|---|---|---|
| 470 | `live-answers.ts`, `use-ask-stream.ts`, `ask-script.tsx`, `script.ts`, `tools/ai-checks/check-cui.mjs` | `feat(ai): add the live answer store, stream hook and script wrapper` |
| 471 | `chat.tsx`, `answer.tsx`, `answer-parts.tsx`, `reader-ask.tsx`, `text.ts` | `feat(ai): route typed questions to the live chat with real status phases` |
| 472 | `conversations.ts` (and the retry, more, notes and privacy parts already inside the files above) | `feat(ai): save live answers in the conversation history` |
| 473 | `e2e/reader-ai-real.spec.ts`, `e2e/father-ask.spec.ts`, `docs/features/ai-real-cui*.md` | `test(ai): cover the live chat in the drawer` |

The parts 471 and 472 touch the same files; INT can freeze 471 and 472 as one block if the split is not clean.

## Usage log

| Moment | Weekly |
|---|---|
| Start | 19 % |
| After reading, building the code and lint | 20 % |
| After the specs and the regression runs | 21 % |
| End | 21 % |
