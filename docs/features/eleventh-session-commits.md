# Eleventh session: commits for the morning

Blocks are frozen in `~/doctrina-commit-kit/` (`./apply.sh 169 170 171 172 173 174 175 176 177 178 179 180 181 182 183 184 185 186 187 188 189 190 191`, explicit numbers, in order). Each block is verified (typecheck, eslint, prettier, production build, its e2e specs) and has a `REPORT.md` in its kit folder with what to look at. Dependencies: 175 needs 174 and 177 needs 174 and 175; 173, 174, 175, 177 and 180 all touch `src/content/ui-text/es.ts` and `en.ts` (apply in order); 172 builds on 171 and 178 on 171 and 172 (same `chapter-text.tsx`). Every kit folder holds full copies of its files, so an in-order apply reproduces the working tree.

| kit | message | what to check |
|---|---|---|
| 169 | `fix(reader): copy citations without the site address` | /es/biblia/juan/6: select words, «Copiar cita», paste: no address; same on a Father's work; «Copiar enlace» in the verse panel still copies the link |
| 170 | `style(reader): put the selection bar on the page background with texture` | select words at 1440 and 390, light and dark, against R2 of the artifact (padding and heights not measured); «Copiar cita» crisp in dark |
| 171 | `feat(reader): add a translation dropdown to each side-by-side column head` | «Segunda traducción» → «Al lado» at 1440: an abbreviation dropdown over each column's name, a hairline under both; choosing the other column's translation swaps them |
| 172 | `feat(reader): keep the side-by-side column heads on screen while scrolling` | PROVISIONAL (option A of the proposal https://claude.ai/artifact/8R8YqZ8x6sH9WHhZXHA8iU): heads pinned under the strip while scrolling a chapter, following it when it hides; choose A, B, C or today |
| 173 | `feat(search): group results by kind and offer to resume where you left off` | ⌘K: typed «carne» shows groups with three rows and «Ver N más»; empty shows «Seguir donde dejaste» (page, «ayer»/date) before «Recientes» |
| 174 | `feat(history): add pages for councils and condemned currents` | /es/historia/concilios/trent, /es/historia/corrientes/marcionism; the timeline panel's «Ir a la página de…» links |
| 175 | `feat(history): add the five index pages with a filter` | /es/historia/padres, /concilios, /herejias, /divisiones, /reforma and the sidebar entries; the filter on Padres and Concilios |
| 176 | `feat(reader): serve the Bible reader in English` | /en/bible/john/6 (BSB), /en/bible/tobit/1 (DRA), ES/EN switch keeps the chapter |
| 177 | `feat(history): add pages for divisions and Reformation movements` | /es/historia/divisiones/<any>, /es/historia/reforma/<any>; the index rows of both are links now; breadcrumbs link their index |
| 178 | `feat(reader): show the pen icon and spaced markers in the Fathers' reader` | a Father's work with a note: locator, pen, «1 nota», text at 8 / 5 / 8 px, level with the first line |
| 179 | `feat(reader): show the words of Jesus in red in the KJV` | KJV chosen in the reader: Jesus' words red (local corpus file, not committed); computed red for BSB, RV1909, DRA prepared but not wired (edge glitches in a hand-checked sample) |
| 180 | `feat(reader): mark a chapter read by reading pace with a button when unsure` | PROVISIONAL (option D of https://claude.ai/artifact/9DmJutSiNoGbUmca2zfEdK): scroll straight to a chapter's end: not marked, an offer with «Marcar como leído»; read at pace: marks itself; undo bar both ways |
| 181 | `feat(corpus): carry sections, paragraphs and red letters in the Supabase source` | code and checks only: migration file, loader, source and mock checks (`npm run lint`); nothing applied, nothing loaded; needs Pedro's go to apply the migration and run the loader with `--load` |
| 182 | `fix: address the review of the night's reader, search and history blocks` | undo of an auto-mark no longer reversed; English currents index route; paragraphs of the story texts; no timeline link after year 800; search expansion reset and count; migration reloads the schema cache |
| 183 | `fix(reader): keep the Fathers' markers level with the text under a heading` | a Father's division with a heading: the locator and pen level with the first text line |
| 184 | `feat(reader): show red letters in RV1909, BSB and DRA with a closable notice` | RV1909 / BSB / DRA: Jesus' words red, one quiet closable line under the edition name, hover cue; data files are local (gitignored) |
| 185 | `feat(history): list the Fathers' corpus works in the sidebar with a draft label` | sidebar «Padres» opens to ~105 works; a draft line on each draft work |
| 186 | `feat(history): link new corpus works to their Father by author` | works that Codex adds later (Gregory the Great, Leo) appear by themselves |
| 187 | `feat(history): list a Father's readable works on his page` | /es/historia/padres/origen: «Leer sus obras» with links; father.spec updated (also for block 173's grouping) |
| 188 | `feat(history): serve the Fathers and the history pages in English` | /en/history/fathers/origen, /en/history/works/…, councils, currents, divisions, Reformation, timeline; the English sidebar lists the Fathers and their works |
| 189 | `feat(shell): keep the page when switching language on the history routes` | ES / EN on any history page keeps the page |
| 190 | `revert(reader): drop the sticky side-by-side column heads` | Pedro: keep «Al lado» as implemented; removes kit 172's sticky heads (apply last of the lot, the later blocks carry whole copies of chapter-text) |
| 191 | `feat(history): capitalize the language fact on English Father pages` | /en/history/fathers/origen: «Wrote in: Greek» |

**Pedro's decisions of the morning:** skip nothing else, but note: kit 172 is undone by 190; kit 180 (reading pace) is provisional and will be replaced by the button design in `docs/features/twelfth-session-queue.md`.

Plain commands for the first five (the later blocks touch many files each: use the kit, or read each kit folder's `files/` list):

```
git add src/features/reader/reader-body.tsx src/features/reader/father-body.tsx e2e/reader-selection.spec.ts && git commit -m "fix(reader): copy citations without the site address"
git add src/features/reader/selection-toolbar.tsx && git commit -m "style(reader): put the selection bar on the page background with texture"
git add e2e/reader-parallel.spec.ts src/features/reader/column-head.tsx src/features/reader/chapter-text.tsx src/features/reader/reader-body.tsx "src/app/[lang]/bible/[book]/[chapter]/page.tsx" && git commit -m "feat(reader): add a translation dropdown to each side-by-side column head"
git add src/app/globals.css src/features/reader/chapter-text.tsx e2e/reader-parallel.spec.ts && git commit -m "feat(reader): keep the side-by-side column heads on screen while scrolling"
git add e2e/search.spec.ts src/lib/search-match.ts "src/app/[lang]/layout.tsx" src/features/shell/search-dialog.tsx src/features/shell/last-place-recorder.tsx src/features/shell/last-place.ts src/content/ui-text/es.ts src/content/ui-text/en.ts && git commit -m "feat(search): group results by kind and offer to resume where you left off"
```

Docs (not in any block; written as the night went):

```
git add docs/DECISIONS.md docs/GOTCHAS.md docs/ROADMAP.md docs/playbooks/agent-ops.md docs/features/eleventh-session-queue.md docs/features/tenth-session-queue.md docs/features/twelfth-session-queue.md docs/features/eleventh-session-commits.md && git commit -m "docs: record the eleventh session's blocks"
```

Not committed on purpose: `docs/research/history-map-references*`, `five-links-analysis.md`, the `analogs.md` line, `tmp/`.
