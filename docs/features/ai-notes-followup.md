# Follow-up on the reader's notes (options A + B) · clone `doctrina-ai-notes`

## State

- **Done:** contract, prompt rule 12, server step, ui-text (es/en), the closing sentence (as option A) and the tappable suggestion (as option B) in the drawer, the citation that opens the note, once per note per conversation; 5 eval cases and checks; e2e (6 new, the AI suites still green); screenshots at 360, 390, tablet and desktop in light and dark; one Sonnet verifier pass; one real check (5 questions, $0.0168). `npm run verify` exit 0 (4 lint warnings in files I did not touch). The `ai_answers` rows of the real check are deleted; no server left running.
- **In progress:** nothing.
- **Next (coordinator / Pedro):** read «Conflicts» and «Not verified»; merge DECISIONS and GOTCHAS from the sections below.
- **How to resume:** `NEXT_PUBLIC_AI_CHAT=real NEXT_PUBLIC_SIMPLIFIER=on npx next build`, then `NEXT_PUBLIC_AI_CHAT=real E2E_PORT=3180 AI_PROVIDER=fake AI_STORE=memory npx playwright test e2e/notes-followup.spec.ts`. Screenshots: `AI_PROVIDER=fake AI_STORE=memory npx next start -p 3180` and `node tmp/notes-shots/shoot.mjs` (mocked answer, writes `tmp/notes-shots/*.png`). Real check: start the server with `AI_PROVIDER=anthropic AI_STORE=supabase AI_DAILY_BUDGET_USD=4.00` on 3180 and run `AI_PROVIDER=anthropic npm run ai:eval -- --base http://localhost:3180 --subset note-followup --max-usd 0.05`; then delete the run's `ai_answers` rows.

## What was built

- **Model contract** (`src/lib/ai/contracts.ts`): `modelAnswerSchema.noteFollowup = { passage, kind: "question" | "claim" | "none" }` (defaults to none, so older outputs and the fake provider parse). `WireAnswer.note?: WireNoteFollowup` = `{ kind, before, ref, after, suggestion, question, noteText }`. `ANSWER_PROMPT_VERSION` `chat-2026-11-08.1` → `chat-2026-11-08.2`.
- **Prompt** (`src/features/ask/prompts.ts`), rule 12: the model returns only the id of one clearly related note and its kind; never a note unrelated or related by a shared word; it does not describe or quote the note. Rule 11 untouched; the plan call still never sees notes.
- **Server step** (`src/features/ask/note-followup.ts`, called from `ask.ts`): accepts the id only if it is a `mine` passage of the pack; maps it to the note actually sent (`mine:<n>` → `notes[n-1]`); nothing for kind none, for a «not found» answer, for a note without a reference; builds the texts from `src/content/ui-text` with the note's own words (excerpt cut at 80 characters with «…», as the proposal does).
- **Texts** (`src/content/ui-text/es.ts`, `en.ts`, `noteFollowup`): option A's sentence «Vi tu nota de {ref}, «{excerpt}». » + «¿Querés que lo analicemos?» (a question) or «¿Querés ver qué dicen las tradiciones sobre lo que escribiste?» (a claim); option B's suggestion «Tu nota de {ref}: {question}», with «¿qué dicen las tradiciones sobre lo que escribiste?» for a claim; the question sent «{ref}, tu nota: {question}».
- **Drawer** (`src/features/reader-ai/*`): the sentence is a new paragraph after the prose, in the prose's class, revealed word by word after the prose with the same word animation; «Juan 6:53» is a button in the citation class (`data-ask-note-cite`). The suggestion is the first chip of the foot, in the same chip class (`data-ask-note-chip`); tapping it sends the question as a normal turn (with notes if the switch is still on). A note already offered in the conversation is not offered again (neither sentence nor chip).
- **Citation → note** (`src/lib/notes.ts`, `src/features/reader/reader-body.tsx`): the citation dispatches `doctrina:open-note` with the note's text; the reader instance whose chapter holds that note opens it the way a note card does (`open(verse)` + `openExisting`) and cancels the event; if no instance took it, the drawer navigates to the note's chapter at its verse.
- **Eval** (`tools/ai-eval/questions.json` nf01–nf05: a related question note, a doctrinal claim, an unrelated note, no notes, a brief answer; check `noteFollowup` in `run.mjs` and `report.mjs`; `check-eval` counts 102 → 107 and 6 → 7 brief). **Checks** (`check-answer.mjs`): exact texts for a question and a claim, nothing for none / a source id / an unknown id / not found, the 80-character cut, English copy.

## Calls I made

1. **The question sent by the chip** is «Juan 6:53, tu nota: …» while the chip reads «Tu nota de Juan 6:53: …»: the Artifact shows exactly that pair (its `SENT` question vs. its chip label), so I copied both (see Conflicts).
2. **English copy** is mine (the Artifact is Spanish only): «I saw your note on {ref}, «{excerpt}». » + «Do you want us to look into it?» / «Do you want to see what the traditions say about what you wrote?»; «Your note on {ref}: …»; «{ref}, your note: …».
3. **Once per note per conversation** is computed in the client (`chat.tsx`, by the note's text) for both the sentence and the chip, as the proposal says for A and B.
4. **Brief answers:** the sentence is outside the 60-word cap because it is its own field, not prose (proposal, A). **Not found:** nothing (proposal). The server also returns nothing for a note without a reference (the citation would lead nowhere).
5. **The citation to a note in another chapter** navigates to that chapter at the note's verse; it does not open the note editor there (no cross-page channel exists).
6. Notes and highlights travel together as «notes» (existing code); a highlight can be picked only if the model judges it related, and then the citation looks for a note with that text and, finding none, navigates to nothing.

## Artifact checklist (approved A + B)

| Element | Artifact | Built |
|---|---|---|
| Sentence position | last paragraph of the prose | ✓ `[data-ask-note-line]` right after the prose paragraph (e2e checks the order) |
| Sentence letter and animation | same as the prose, word by word | ✓ prose class; per-frame e2e: > 5 distinct word counts, monotonic |
| Sentence copy, question | «Vi tu nota de Juan 6:53, «¿Qué significan “carne” y “sangre” acá?». ¿Querés que lo analicemos?» | ✓ exact (e2e and real run) |
| Sentence copy, claim | «… ¿Querés ver qué dicen las tradiciones sobre lo que escribiste?» | ✓ exact |
| «Juan 6:53» is a citation that leads to the note | yes | ✓ citation class; opens the note in the text (e2e) |
| Suggestion position and style | first chip, same thin-bordered button | ✓ first chip, same class (verifier) |
| Suggestion copy | «Tu nota de Juan 6:53: ¿qué significan “carne” y “sangre” acá?» / «Tu nota de Juan 6:63: ¿qué dicen las tradiciones sobre lo que escribiste?» | ✓ exact |
| Tap sends the question as a normal turn | yes | ✓ request body checked in e2e |
| Unrelated note | nothing shown | ✓ e2e and real run (nf03) |
| Option C's trimmed sentence, «Hoy» | not in the product | ✓ absent |
| Nothing added | no icon, emoji, arrow, card | ✓ verifier |

## Conflicts (not resolved by me)

- The Artifact's tapped question («Juan 6:53, tu nota: …») and its chip label («Tu nota de Juan 6:53: …») differ; built as shown. Pedro may want them equal.
- The Artifact flashes the note in a demo list; in the site the citation opens the note editor at its verse (the existing way to open a note). For a note in another chapter the site navigates to the verse without opening it.

## Not verified

- Touch and WebKit (Playwright ran Chromium only); the per-frame measure is on Chromium.
- A real answer with a real note of Pedro's (the real check used the eval's notes).
- The orphan word «acá?» on the second line of the chip at 432 px (verifier, cosmetic; the chip text is the Artifact's).

## Real check (one, ≤ $0.05)

Estimate $0.025; real cost **$0.0168** (from `ai_requests`). nf01 question note → sentence and chip exact; nf02 claim → the traditions invitation, exact; nf03 unrelated note → nothing; nf04 no notes → nothing; nf05 brief → sentence and chip. 5/5, p50 23 s.

## Files and commands

```sh
cd ~/Desktop/dev/doctrina && git add src/lib/ai/contracts.ts src/features/ask/prompts.ts src/features/ask/note-followup.ts src/features/ask/ask.ts src/content/ui-text/es.ts src/content/ui-text/en.ts tools/ai-checks/check-answer.mjs && git commit -m "feat(ai): offer a follow-up on the reader's related note"
cd ~/Desktop/dev/doctrina && git add src/features/reader-ai/answer.tsx src/features/reader-ai/answer-parts.tsx src/features/reader-ai/ask-script.tsx src/features/reader-ai/chat.tsx src/features/reader-ai/live-answers.ts src/features/reader-ai/script.ts src/features/reader/reader-body.tsx src/lib/notes.ts && git commit -m "feat(reader-ai): show the note sentence and suggestion in answers"
cd ~/Desktop/dev/doctrina && git add e2e/notes-followup.spec.ts e2e/ai-ask.spec.ts tools/ai-eval/questions.json tools/ai-eval/run.mjs tools/ai-eval/report.mjs tools/ai-checks/check-eval.mjs docs/features/ai-notes-followup.md && git commit -m "test(ai): cover the note follow-up cases"
```

## Usage readings (Claude weekly; cap 45 %)

| Time | Session | Weekly |
|---|---|---|
| 22:21 (start) | 26 % | 38 % |
| 22:28 | 28 % | 38 % |
| 22:38 (end) | 30 % | 39 % |

## For DECISIONS

2026-11-08 · Chat: follow-up on the reader's notes, options A + B. Pedro: «Quiero que combinemos exactamente la propuesta A y B, es decir, que el copy del texto final del agente sea del mismo estilo exactamente que la propuesta A, pero además que también haya una sugerencia abajo del mismo estilo que la de la propuesta B. (OJO, no quiero la propuesta C, que combina los dos pero con un copy muy recortado de texto, eso no quiero, sino lo que te propuse).» And the «Juan 6:53» citation leads to the note («Sí, lleva a la nota en el texto»). Built: one note at most, chosen by id by the model with its kind (question, claim, none); the server writes the sentence and the suggestion with the note's own words; a claim gets «¿Querés ver qué dicen las tradiciones sobre lo que escribiste?», never a correction. Proposal: https://claude.ai/artifact/Y4C28LK6hHMCewcBqGrCz7.

## For GOTCHAS

- The note follow-up's citation crosses features through a window event (`openNoteEvent` in `src/lib/notes.ts`): `reader-body` must cancel the event when it opens the note, or the drawer also navigates.
- The model never writes the note's words: `noteFollowup` carries only an id and a kind; the server maps `mine:<n>` to `request.notes[n-1]`. Changing how `pack.ts` keys notes breaks this mapping.
- `note-followup.ts` imports `ui-text/es` and `en` directly: `get-ui-text` imports `server-only`, which the Node check runner cannot load.
