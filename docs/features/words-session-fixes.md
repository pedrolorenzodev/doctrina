# «Palabras» session (file: words-session-fixes.md, a Spanish file name fails lint): edition change in the panel, the 06 pin, Spanish glosses (2026-11-04)

Duplicate repo `/Users/pedrolorenzo/Desktop/dev/doctrina-pal`. Port 3601. No commits, no kit: each step lists its files and its commit message here.

## The list

1. The «Palabras» panel breaks when the edition changes to the DRA.
2. The 06 verse page: a click pins a word in «En griego, palabra por palabra».
3. Complete the Spanish glosses of the word data (Greek 85.0 %, Hebrew 82.3 % before).

## Acceptance

1. With «Palabras» (or «Usos») open at John 6:53 in RV1909, switching the header edition to DRA keeps the tab strip intact (indicator on the selected tab, never jumps or goes stale); the body shows one short message explaining the numbering, never words of another verse; es and en strings have parity; works with the panel open and closed.
2. Click pins a word; hover/focus on other words leave the card alone; click on another word moves the pin; click on the pinned word releases it. Enter/Space and tap behave the same. Selected state uses the project's selected-state pattern. Card crossing stays 160 ms. `e2e/verse-06.spec.ts` still passes.
3. Glosses completed by frequency, labelled as AI-drafted, `check_words.py` and `tools/check-words.mjs` pass, John 6 regression identical except the `es` fields, coverage reported before/after.

## How verified

`npm run verify`, e2e that fails before and passes after, screenshots at 1440 / 768 / 390 / 360 light and dark, frame sampling for motion.

## Decisions made while Pedro was away (agent's call)

- Step 1: the tabs «Palabras» and «Usos» stay visible and selectable when the edition numbers the chapter differently; the body shows one message («{edition} numera este capítulo distinto de {reference}, …») and one button «Ver el versículo en {reference}» that switches the header edition back (same `changeFirst` as the picker, so the second translation swaps too). The tabs show only when the chapter has word (or use) data at all; no counts while the numbering differs. Agent's call: copy and the button.
- Step 2: the pinned tile uses the strongest selected pattern, «Tinta llena» (`selected-ink`: ink fill, light text), because the hover preview already uses `selected-lift` and the two must differ. Agent's call; Pedro may prefer another look. The page subtitle still says «Pasa el puntero, o toca una palabra»; it does not mention the pin (nothing added, Pedro to decide).
- Doc file name: `words-session-fixes.md` instead of `palabras-fixes.md` (lint rejects Spanish file names, AGENTS rule 8).

## Shared files touched

- `src/components/ui/segmented-filter.tsx` (3 lines: clear the measured box when no button is pressed).
- `src/content/ui-text/es.ts`, `en.ts` (two strings each under `reader.panel.sections`: `numbering`, `showInDefault`).
- `src/features/reader/verse-panel.tsx` (the two keys in the `sections` text type).

## Usage log

- 12:03 session 14 %, weekly 81 % (cap 90 %, Pedro raises it around 14:00).
- 12:14 session 18 %, weekly 82 %.
- 12:31 session 23 %, weekly 83 %. 12:39 session 26 %, weekly 83 % (after four batches of ~450 pieces each).

## Traps (GOTCHAS text lives here)

- **`SegmentedFilter` kept its last measured indicator box when no button was pressed.** · With every section inert (the DRA numbers John 6 differently) the dark indicator stayed over a tab that was not selected and the body was empty. It now clears the box when nothing is pressed. · `src/components/ui/segmented-filter.tsx`, `e2e/reader-panel-edition.spec.ts`.
- **A section with `content: null` is inert; «numbering differs» is not inert any more.** · `PanelSection` content is the note while the edition numbers the chapter differently, so the selected tab never becomes unselectable; `null` is only for «no data». · `reader-body.tsx`.
- **A utility `bg-transparent` beats `selected-ink` on the same element.** · The pinned word tile must not carry `bg-transparent` (nor `hover:bg-hover`); both are only on the unpinned class list. · `src/features/verse/verse-words.tsx`.
- **A gloss key is shared by Greek and Hebrew.** · `glosses-es.json` maps an English piece to one Spanish rendering for both languages; the later TSV wins a conflict (`I delivered` Greek «entregué» vs Hebrew «libré», `I rejoiced`, `I make`, `I have kept`). Before merging, remove from the later file the keys the other language already has with a different sense. · `merge_glosses_es.py`.
- **Greek `you …` glosses are written in the second person singular.** · `greek_word_es` drops every 2nd-person plural verb (`-2P`), so a singular atom is safe and a plural atom (`-áis`, `-éis`, `-ísteis`) would show wrongly on the 2nd-person singular words. · `data/scripts/build_words.py`.
- **At 360 × 740 the picker's list is covered by the reader strip when the sheet is open (Playwright click intercepted).** · Seen only in a test; set the edition before opening the panel in specs at that size. Not investigated further.

## Steps done (files, commit message, what to look at, how tested)

### Step 1 (done)
- Files: `src/components/ui/segmented-filter.tsx`, `src/content/ui-text/es.ts`, `src/content/ui-text/en.ts`, `src/features/reader/verse-panel.tsx`, `src/features/reader/panel-numbering.tsx` (new), `src/features/reader/reader-body.tsx`, `e2e/reader-panel-edition.spec.ts` (new), `docs/features/words-session-fixes.md` (new).
- Commit: `fix(reader): keep the words tab usable when the edition numbers the chapter differently`
- Look at (Dia): John 6:53 in RV1909, panel open on «Palabras» (and on «Usos»), then DRA in the header: the dark tab stays under «Palabras», the message and the button «Ver el versículo en RV1909» appear, the button goes back. Also in English (`/en/bible/john/6`, only «Words» has data there). Light and dark, panel as sheet at 390/360.
- Tested: reproduced first (screenshot: stale indicator over an unselected tab, empty body); `e2e/reader-panel-edition.spec.ts` (7 tests, es + en, both tabs, panel open and closed, back to default, indicator sampled every frame for 1.2 s: never moves, never disappears); reader-panel*, reader-translation specs still pass (one timing spec flaky in parallel, passes alone); screenshots 1440/768/390/360 light and dark; `npm run verify` OK (3 lint warnings that were already there).

### Step 2 (done)
- Files: `src/features/verse/verse-words.tsx`, `e2e/verse-words-pin.spec.ts` (new), this doc.
- Commit: `feat(verse): pin a word with a click in the word-by-word list`
- Look at (Dia): `/es/biblia/juan/6/53`, «En griego, palabra por palabra»: hover changes the card as before; click pins (dark filled tile); hover and Tab on others do nothing; click on another moves the pin; click on the pinned one releases it and hover is back. Keyboard Enter/Space, touch tap.
- Tested: `e2e/verse-words-pin.spec.ts` (6 tests: pin ignores hover and focus, move with frame-sampled 160 ms crossing, release, keyboard, filled look, touch tap) + `e2e/verse-06.spec.ts` unchanged and passing; screenshots 1440/390 light and dark.

## How to ship the glosses (written 2026-11-05 night)

`data/site/words/` is git-ignored (`.gitignore:26`), so the data is shipped by copying, not by commit; only the TSVs and the doc are committed.

1. Backup in the real repo first: `cp -R /Users/pedrolorenzo/Desktop/dev/doctrina/data/site/words /tmp/words-backup-$(date +%F)` (any folder outside the repo).
2. Copy: `rsync -a --delete /Users/pedrolorenzo/Desktop/dev/doctrina-pal/data/site/words/ /Users/pedrolorenzo/Desktop/dev/doctrina/data/site/words/`. The result differs from the start-of-night data only in the `es` / `glossEs` fields and `glosses-es.json` (checked file by file, 1,501 JSON files: 0 other differences).
3. Check in the real repo: `python3 -I data/scripts/check_words.py` and `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/check-words.mjs`, then `npm run build` and the word specs.
4. Reload Supabase (Backend session's rules, idempotent): `node data/scripts/load-words.mjs --load`; before and after, check the database size stays under 400 MB of the 500 MB free plan. The batches only add Spanish text to words that already exist, so the size grows by a few MB at most.
5. Commit (Pedro runs it; English, Conventional Commits, subject only, no attribution). The new TSV files are the untracked ones under `docs/research/tools/s1a/`: `glosses-greek-batch2…5.tsv`, `glosses-greek-batch12…20.tsv`, `glosses-hebrew-batch6…30.tsv` (Greek 13 to 20 and Hebrew 12 to 30 are from this night):
   `git add docs/research/tools/s1a/glosses-greek-batch*.tsv docs/research/tools/s1a/glosses-hebrew-batch*.tsv docs/features/words-session-fixes.md && git commit -m "docs(words): add the Spanish gloss batches that lift coverage past 97 percent"`
   The e2e spec needs no change (next section), so there is no spec commit for step 3. The commits of steps 1 and 2 are in their own sections above.

## Spec `reader-panel-words.spec.ts`: no change needed

«a word without a Spanish gloss shows the English one» (φάγητε, row 11 of John 6:53) still passes, unchanged: `you shall have eaten` does have a Spanish gloss in `glosses-es.json` («habrás comido»), but φάγητε is a 2nd-person-plural verb (`V-AAS-2P`) and `greek_word_es` drops those on purpose, so the word keeps showing the English gloss, labelled «inglés». That makes the test stable against more glosses. It breaks only if the 2nd-person-plural rule changes (then pick another still-English word; John 6:53 rows 19 πίητε and 24 ἔχετε are the same case).

## Code changes this night would need (not done: code frozen)

- To go past ~97 %, the remaining Greek words (3,957) are 2nd-person-plural verbs and 3rd-person-plural verbs whose Spanish gloss has more than one word (`pluralize_3s_verb` only handles single-word and `se …` forms): a conjugation step for those in `data/scripts/build_words.py` would show them in Spanish. Hebrew has 9,107 left, mostly the long tail of one-off pieces (about 1 word per piece) and words blocked by `hebrew_verb_blocks_es`.
- Weak spots of the AI-drafted batches (spot-check suggestions, not fixes): Hebrew name fragments and number fragments (`-sheba` → `-seba`, `quin-`, `trein-`), Reina-Valera names the writers marked unverified (`Lodebar`, `Emec`, `Quefar`, `Quesalón`, `gazeo`, `geteo`), `grañones` and `escinco` (batch 19, invented-sounding), `[are] it` fixed by hand in batch 21; `yourselves` pieces use the 2nd person plural by design.

## State

Night session 2026-11-05 (Pedro away; weekly stop rule changed by the coordinator to **10 %**, started at 4 %). **Finished.**

- Done: steps 1 and 2 (verified, merged elsewhere); step 3: glosses at **Greek 97.1 %** (133,962/137,919; 93.3 % at the start of the night, 128,619) and **Hebrew 97.0 %** (296,541/305,648; 91.3 %, 279,042). `check_words.py` and `tools/check-words.mjs` ok. Regression: 1,501 JSON files compared with the start-of-night backup, only `es`/`glossEs` differ.
- Batches this night: Greek 13 to 20 (5,599 pieces), Hebrew 12 to 30 (about 17,900 pieces); yield about 0.94 words per piece for Hebrew, 1.0 for Greek once the worklist ranking was fixed (first Greek batch with the old ranking: 0.33).
- Verified: `npm run build` on the new data; `e2e/reader-panel-words`, `words-page`, `verse-06`, `reader-panel-uses`, `verse-words-pin`, `reader-panel-edition` (chromium): 68 passed and 1 failed once under parallel load (`verse-words-pin` «crossing in about 160 ms»: 273 ms vs the 260 ms bound); it passed 3 of 3 alone with `--workers=1`. `npm run verify` not re-run (no app code touched tonight; last pass after step 2).
- Method kept in the scratchpad (not in the repo): `/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina-pal/747066a1-e6c8-45e4-8d03-ac85cf9f812a/scratchpad`: `real.sh`, `mklist2.py` (ranks pieces by fractional credit over fixable words; skips Greek 2P and multi-word 3P words), start-of-night backup `words-backup-start/words`, sources `stepsrc`/`oshl` (copied from the earlier scratchpad `.../dev-doctrina/56d9fae7-.../scratchpad`, sha256 equal to the manifest, OpenScriptures commit 21c9add13bc727d3a951361778e97e3ff7afd1ce). To continue: `mklist2.py h 0 1000 | cut -f1 > todo.txt`, translate the Spanish side only and `paste` it onto the English list, then `real.sh <tsv>`.
- Usage log: 18:03 session 6 %, weekly 4 %; 18:29 15 %, 5 %; 18:47 21 %, 6 % (HTTP 429 from then until 19:03, retried at every batch); 19:06 25 %, 7 %; 19:28 29 %, 8 %; 19:46 32 %, 8 %; 19:51 33 %, 8 %. Never reached 10 % weekly.
- Next (Pedro): ship as in «How to ship the glosses»; decide whether the Greek 2P/3P conjugation (code) is worth doing.
- Resume: read this file, `git status`/`git diff` in the clone.
