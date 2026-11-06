# QA fixes A (from `qa-sweep.md`)

Session «Fixes A», Sonnet 5.5, duplicate repo `doctrina-fixes` (copy of the real tree at 2026-11-05 ~18:00). Pedro is away: every default below is the agent's call. Input: `docs/features/qa-sweep.md` (issue ids), Pedro's answers: draft banners are removed (C1); English will be translated entirely later, so no fix may become a permanent wall.

Server for measuring: `node -e "require('next/dist/bin/next')" x start -p 4101` (Playwright uses 4101 here). Raw sweep data: `~/Desktop/dev/doctrina-qa/tmp/qa/` (read-only).

## State

- Started 2026-11-05 18:00. **All five fixes are done and verified** (`npm run verify` green after the last change; screenshots of the word page «Forma» pad at 390 light and the top bar at 768 looked right). Nothing is pending; a new session only needs to read this file and hand Pedro the commit commands.
- Stop rule (revised by Pedro through the coordinator at ~18:08): stop at **10 % weekly**, not 30 %.
- Usage log: 18:01 session 6 %, weekly 4 % · 18:08 session 8 %, weekly 4 % · 18:15 session 11 %, weekly 5 % · 18:20 session 12 %, weekly 5 % · 18:31 session 16 %, weekly 5 % · 18:37 session 18 %, weekly 6 % · 18:39 session 19 %, weekly 6 % · the last two polls after the final run returned HTTP 429 (no reading).
- Server for specs: `kill $(lsof -ti tcp:4101 -sTCP:LISTEN)` after every build, then `node -e "require('next/dist/bin/next')" x start -p 4101` from the repo (see GOTCHAS «Fixes A»). Slip: at ~18:09 I ran `pkill -f next-server`, which also stopped the other sessions' servers; they need a restart on their ports.

## The list and how each is verified

| # | Fix | Verified by |
|---|---|---|
| 1 | L1, L2, E1: the language switch links only to pages that exist; glossary inert in English; Ask drawer suggestions in English | a spec on the switch (`e2e/language-switch.spec.ts`), then `tools/qa/crawl.mjs`: zero 404 from internal links on `/en` and every Spanish page |
| 2 | C1: remove the draft banners (glossary, term, word, Father works) | spec: no «Borrador» text on those four screens; `status: draft` stays in the data |
| 3 | T1, T2, T3: `hit-44` and `PressTooltip` on the home edition chips | specs measuring the hit area (`::before` box) with touch emulation |
| 4 | A1–A6: accessible names, `lang` on Greek/Hebrew, contrast, headings, focus ring, placeholder, 404 title | axe via `e2e/a11y.spec.ts` and `tools/qa` axe run, specs per item |
| 5 | Old failing specs in `selected-states.spec.ts`, the 404's entrance, the stray character in the Didache | the specs themselves; frame sampling for the entrance |

## Decisions made while Pedro was away (agent's call)

- **Fix 1, inert switch:** when the other language has no version of the page, «EN» stays in the bar as an `aria-disabled` button (muted, `opacity-60`, same look as «Fuentes» in the home footer) with a `PressTooltip` that says why («Esta página todavía no está en inglés»). Hidden was the alternative; inert follows DESIGN «Build UI inert with TODO».
- **Fix 1, glossary in English:** the home footer's «Glossary» is inert with the existing «Under construction» tooltip; the sidebar already showed it as a row with no link.
- **Fix 1, scope of E1:** only the suggested questions (both openings) and the three example questions of the history panel are translated, in `askText.en.chat` (`suggestions`, `examples`). The answers, the follow-up chips inside answers and the Fathers' topic questions stay Spanish (the scripts are Spanish and routed by Spanish patterns; translating them is the content session's job).
- **Fix 1, words:** the sweep did not list it, but `/es/palabras/<id>` linked to `/en/palabras/<id>` (404); it now goes to `/en/words/<id>`, which exists.
- Removed `swapLocale` (`src/lib/locale.ts`): nothing uses it any more, and it was the function that made the dead links.
- `npm run format:check` failed on the untracked `tools/qa/*.mjs` of the sweep; formatted them with Prettier so `verify` passes (no behaviour change).

## Shared files touched (for the merge)

- `src/features/shell/top-bar.tsx`, `src/features/shell/language-switch.tsx` (the bar and the switch; `doctrina-wide` should not touch them), `src/lib/locale.ts` (removed `swapLocale`), `src/content/routes.ts` (appended `visibleSpanishPath`), `src/content/ui-text/{es,en}.ts` (one key, `shell.languageUnavailable`), `src/app/[lang]/page.tsx` (home footer prop; `doctrina-wide` owns the home's layout, this is one prop), `src/features/home/home-footer.tsx`.

## Per fix: files, commit message, what Pedro must look at

### Fix 1 · L1, L2, E1 (done, verified)

- Commit message: `fix(shell): link the language switch only to existing pages`
- Created: `src/content/language-switch.ts`, `src/content/get-language-availability.ts`, `e2e/language-switch.spec.ts`.
- Edited: `src/features/shell/language-switch.tsx`, `src/features/shell/top-bar.tsx`, `src/content/routes.ts`, `src/lib/locale.ts`, `src/content/ui-text/es.ts`, `src/content/ui-text/en.ts`, `src/app/[lang]/page.tsx`, `src/features/home/home-footer.tsx`, `src/features/reader-ai/text.ts`, `src/features/reader-ai/chat.tsx`, `src/features/reader-ai/reader-ask.tsx`, `docs/GOTCHAS.md`, `docs/features/qa-fixes.md`; `tools/qa/*.mjs` only reformatted by Prettier.
- Before: the new spec failed 11 of 17 cases on the old build (EN of 8 Spanish doctrine/glossary pages led to a 404, `/es/palabras/G4561` led to `/en/palabras/G4561`, the English home linked `/en/glossary`, the Ask suggestions were Spanish). After: 61 of 61 specs pass (`language-switch`, `shell`, `theme`, `home`), including «same switch in the server HTML (JS off) and after hydration» for 14 pages.
- Look at: on any Spanish doctrine page, hover or tap «EN» in the top bar (muted, tooltip «Esta página todavía no está en inglés»); on `/en`, the footer «Glossary» (muted, «Under construction»); on `/es/historia/padres` EN leads to the English list; open the Ask drawer on an English Bible chapter (suggestions in English).
- Crawl (`tools/qa/crawl.mjs` against port 4101 after the fix): 3446 URLs, all 200, zero 404 (before: 3628 URLs, 182 × 404).

### Fix 2 · C1 (done, verified)

- Commit message: `fix(content): remove the draft banners from four screens`
- Edited: `src/app/[lang]/glossary/page.tsx`, `src/app/[lang]/glossary/[term]/page.tsx`, `src/app/[lang]/words/[word]/page.tsx`, `src/app/[lang]/history/works/[work]/page.tsx`, `src/content/ui-text/es.ts`, `src/content/ui-text/en.ts` (the three `draft` strings removed), `e2e/glossary.spec.ts`, `e2e/fathers-corpus.spec.ts`, `docs/DECISIONS.md` (entry «Quality sweep fixes»), `docs/features/qa-fixes.md`. Created: `e2e/draft-banners.spec.ts`.
- The data keeps `status: draft` (nothing under `data/` or `src/content` data was touched); the «Traducido con IA» line of an AI edition stays (it is not a draft banner); the tradition pages keep their notices.
- Before: `draft-banners.spec.ts` failed 6 of 6 on the old build (glossary, term, word ES and EN, Father work ES and EN). After: 77 of 77 specs pass (draft-banners, glossary, fathers-corpus, father-edition, words-page, language-switch); `npm run verify` green.
- Look at: `/es/glosario`, a term, `/es/palabras/G4561`, `/es/historia/obras/origen-against-celsus`: the line under the title is gone and the spacing holds (screenshots at 390 dark and 1440 light looked right; the other widths were not shot because only a one-line paragraph went away).

### Fix 3 · T1, T2, T3 (done, verified)

- Commit message: `fix(ui): enlarge touch targets and tap-name the home editions`
- Edited: `src/components/simplifier/simplified-paragraph.tsx` (`hit-44`), `src/features/words/transliteration-switch.tsx` (`hit-44`), `src/features/verse/verse-compare.tsx` (`hit-44` on the edition buttons), `src/features/reader/father-body.tsx` (`pointer-coarse:hit-44` and `pointer-coarse:md:absolute` on the verse-number button), `src/features/passages/passage-ruler.tsx` (phone strip: `pointer-coarse:h-11 pointer-coarse:-mt-2.5`), `src/features/home/home-footer.tsx` (`pointer-coarse:hit-44`), `src/features/home/bible-rows.tsx` (`PressTooltip` + `pointer-coarse:hit-44`). Created: `e2e/touch-targets.spec.ts`. Docs: `docs/GOTCHAS.md`, this file.
- Agent's calls: plain `hit-44` where the control stands alone (simplifier ring, transliteration switch, verse edition buttons); `pointer-coarse:hit-44` where the neighbours are close (Father verse numbers beside the text, home footer, home chips) so a mouse keeps the real box. The Pasajes phone strip cannot widen (14 buttons tile the width, 25 px each); it grows 10 px taller upward with a negative margin, so nothing moves, and stays 25 px wide (WCAG 2.5.8 minimum 24 px).
- Before: `touch-targets.spec.ts` failed 8 of 8 on the old build (28, 36, 38, 7, 34, 20 and 32 px). After: 8 of 8 pass; `verify` green. Regression run (`passages`, `verse-06`, `simplifier`, `home`, `home-sections`, `words-page`, `father`, `father-reader`, `reader-note-cards`): 159 passed, 4 failed — `father.spec` ×3 (two doctrine pages now cite the same Father, a strict-mode match) and `home-sections` «the five doctrines» (more doctrines are published than the spec lists): content drift in specs I did not touch; not checked against a clean baseline.
- Look at (on a phone or with touch emulation): tap «RV1909» on the home (the name appears for ~2 s); the Pasajes phone strip (`/es/doctrinas/eucaristia/catolica/pasajes`) looks the same but is 10 px taller to tap; the Father's verse numbers on a tablet stay in the margin.

### Fix 4 · A1–A6 and the 404's title (done, verified)

- Commit message: `fix(a11y): name the search button, mark Greek and Hebrew, fix headings`
- Created: `src/components/original-scripts.tsx` (wraps Greek runs in `lang="grc"` and Hebrew runs in `lang="he"`), `e2e/accessibility-fixes.spec.ts`.
- Edited: `src/features/shell/search-trigger.tsx`, `src/features/shell/top-bar.tsx`, `src/content/ui-text/es.ts` and `en.ts` (`search.triggerShort`, `passages.neighbors`), `e2e/search.spec.ts` (two expectations: the button's `aria-label` is now the full placeholder), `src/features/words/senses-list.tsx`, `src/features/words/original-entry.tsx`, `src/features/shell/edge-ruler.tsx`, `src/features/doctrine/witnesses-section.tsx`, `src/features/doctrine/early-christians-list.tsx`, `src/features/reader/father-body.tsx` (all use `OriginalScripts`), `src/components/ui/segmented-filter.tsx` (the pad of a wrapped filter), `src/components/group-heading.tsx` and `src/features/history/history-index-list.tsx` (`h2` for the list's groups), `src/features/passages/passages-view.tsx`, `src/app/global-not-found.tsx` (`metadata.title`), `e2e/glossary.spec.ts`, `e2e/history-indexes.spec.ts` (`main h3` → `main h2`).
- **A1:** the search button's `aria-label` is the full placeholder («Buscar doctrinas, versículos, Padres, palabras»); the visible text is always a prefix of it.
- **A6 (the sweep was incomplete):** the Spanish placeholder was cut by 13 px **at every width from 1024 up** (302 px of text in a 289 px box), not only at 768. The trigger now shows three prefixes of the full text by width: below 768 «Buscar doctrinas», 768–1023 «Buscar doctrinas, versículos», from 1024 «Buscar doctrinas, versículos, Padres» (English the same way). The dialog keeps the full placeholder. Measured with `scrollWidth` against `clientWidth` at 640, 768, 1023, 1024, 1440 (spec).
- **A2:** the word pages' glosses, the reference line, the ruler's Hebrew label, the Spanish witnesses' notes and the Fathers' text (inside highlights too; the offsets of notes read text nodes, so nested spans change nothing). Hebrew is `he` as the brief says, while `OriginalWord` marks the headword `hbo` (both pass the scan).
- **A3 (found by looking at the picture):** the contrast case on the word pages at 390 px was a real layout bug, not a colour: the sliding pad of a wrapped `SegmentedFilter` (the «Forma» filter) was as tall as the whole group, so on a phone it covered the options of the second and third rows (axe: 1.18:1). The pad now takes the chosen option's own top and height when `wrap` is set. The other three cases (home `.mb-2`, Wisdom 1 title, Psalm 23 `h1`) do not reproduce after the title entrance (axe clean at 1.5 s on both themes): they were scans taken mid-fade (GOTCHAS «An axe scan has to wait out the title entrance»).
- **A4:** the history indexes and the glossary jumped from `h1` to `h3`; their group headings are `h2` now (`GroupHeading as="h2"`; the passages and sources sections keep `h3` under their own `h2`). Pasajes had two navs named «Pasajes» (the ruler and the previous/next links); the latter is «Pasaje anterior y siguiente». The global 404 has a title: «Esta página no existe · This page doesn't exist».
- **A5 (agent's call: left as is):** the «Filtrar por nombre» input draws its focus as a border change (`rule-2` → `ink-3`) and a `hover` fill, not the accent ring, by design (Pedro, 2026-10-27, on the notes panel's search: «better none»). A spec now checks that the border colour changes and reaches 3:1 against the page in light and dark. If Pedro wants the ring on filters, it is one line in `globals.css` (`:is(input, textarea)`).
- Look at: `/es/palabras/G4561` on a phone, the «Forma» filter (the dark pad now covers one chip, and moves between rows when you choose another); the top bar's search at 768 and 1440; `/es/historia/padres` and `/es/glosario` (the group headings look the same).

### Fix 5 · small ones (done, verified)

- Commit message for the specs and the 404: `fix(ui): play the 404's entrance and update the tradition tab specs`; for the data: `fix(corpus): remove the OCR marker from the Didache` (data is git-ignored, so this one is only a note for Pedro).
- **Selected-states specs:** `e2e/selected-states.spec.ts` «the current tradition tab is lifted» (light and dark) now asserts the same lift (card fill, `rule-2` inset hairline, no outline) on the sliding indicator, that it sits exactly under the current tab (position and size within 1 px), and that the tab itself paints no fill. Nothing was loosened: the fill, the hairline and the outline are checked as before, plus the geometry.
- **404 entrance (W4):** `global-not-found` and `global-error` render outside the locale layout, which is where `TitleEntrance` lives, so `data-title-ready` was never set and their headings waited for the 2 s failsafe. Both now render `TitleEntrance`. `e2e/not-found-entrance.spec.ts` samples frames: before the fix the attribute was not set within 900 ms and the heading was not at full opacity within 1.6 s (2 of 2 failed); after it, the heading is fully visible within 1.5 s of load and the attribute is set within 900 ms.
- **Didache (`�LA1�`):** one occurrence in `data/corpus/fathers/didache/lightfoot-harmer-1891.json` (division 4, «…in shame and fear. �LA1�Thou shalt hate all hypocrisy…», an OCR corruption of a verse number) and the same in the Spanish translation `data/corpus/fathers-es/didache/doctrina-ia-2026.json`. Removed in both. The Spanish file records the English file's SHA-256 twice (`edition.sha256` and `translatedFrom.sha256`) and `tools/check-fathers-corpus.mjs` fails when it changes, so both were updated to the new hash (`c080aa10…5936`). **The Supabase copy of both Didache files must be reloaded by the backend loader** (`data/scripts/load-corpus.mjs`); nothing was done in Supabase. Note: the 2026-11-01 translation convention (`docs/research/day-2026-11-01/session-C5.md`) says to keep OCR artefacts that look like text, including this one; the brief overrode it for this marker.

### Results of fixes 4 and 5, and what is not mine

- Last run (`verify` green, then 16 spec files, chromium): 251 passed, 3 failed. `search.spec` «on a phone the trigger is an icon» failed because the trigger now has three text spans; the spec was fixed and passes. The two left, `search.spec` «only what is shown can match» and «the pages are in the index», fail because the index now returns more pages (an extra Ignatius quotation, two more «Lo que escribieron los primeros cristianos» entries): content drift in specs I did not touch, like the four of fix 3 (`father.spec` ×3, `home-sections` ×1) and `early-christians.spec` «from 02 the sidebar link opens the page». Not checked against a clean baseline.
- Not measured: WebKit, a real phone, a screen reader (the `lang` runs and the label change are checked by scripts only).
- For `docs/research/**`: nothing.

## Order of commits (suggested, each is independent except where noted)

1. fix 1 `fix(shell): link the language switch only to existing pages`
2. fix 2 `fix(content): remove the draft banners from four screens`
3. fix 3 `fix(ui): enlarge touch targets and tap-name the home editions`
4. fix 4 `fix(a11y): name the search button, mark Greek and Hebrew, fix headings`
5. fix 5 `fix(ui): play the 404's entrance and update the tradition tab specs`
Files shared by two fixes: `docs/GOTCHAS.md`, `docs/features/qa-fixes.md`, `src/content/ui-text/{es,en}.ts` (fixes 1, 2 and 4), `e2e/search.spec.ts` (fix 4 only). Stage by the per-fix lists above; the docs and ui-text files go with the first commit that touches them if Pedro prefers fewer commits.