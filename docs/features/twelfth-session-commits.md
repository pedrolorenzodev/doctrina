# Twelfth session: commits (kit `~/doctrina-commit-kit/`, explicit numbers, in order)

`./apply.sh 192 193 194 195 196 197 198 199 200 201 202 203 204 205 206 207 208`. Each block is verified (typecheck, eslint, prettier, production build, its specs); the kit folder's `REPORT.md` says what to look at. 196 comes before 197; 198 holds whole copies of `reader-body.tsx` and `chapter-text.tsx`.

| kit | message | what to check |
|---|---|---|
| 192 | `fix(reader): drop the tooltip on the red words` | RV1909: no tooltip on Jesus' words |
| 193 | `feat(history): link each writing on a Father's page and drop the works list` | `/es/historia/padres/ignatius-of-antioch`: seven linked writings; Tertullian: 31 |
| 194 | `feat(history): animate the index lists with the shared list motion` | filter `/es/historia/padres` and `/concilios` |
| 195 | `fix(reader): keep side-by-side centred across chapters without a second text` | `/es/biblia/tobias/1` with «Al lado», Malaquías 4 above |
| 196 | `fix(reader): load the English reader's tree, stream and chapters in English` | `/en/bible/john/6`: tree with chapters, scroll keeps `/en/`, next chapters in BSB |
| 197 | `feat(shell): keep the sidebar tree as it was when switching language` | open and close branches and a book's chapters, scroll the tree, press EN / ES |
| 198 | `feat(reader): make the second side-by-side column selectable like the first` | `/es/biblia/juan/6`, «Al lado»: select, highlight, cite and click in the right column |
| 199 | `style(shell): replace the blue focus outline of fields with a grey border` | click the filter of `/es/historia/concilios` and the note editor: grey border, no blue |
| 200 | `feat(reader): offer a round read button after 8 s on the last paragraphs` | end of `/es/biblia/juan/6`: round check after 8 s of activity, grows into LEÍDO on hover; nothing marks itself |
| 201 | `feat(reader): fade highlights, hover and the note words in and out` | highlight and remove a colour, hover verses and the pen icon of a note |
| 202 | `feat(glossary): build the draft dataset of the 100 terms from the research report` | data only: `python3 data/scripts/build_glossary.py` → `data/site/glossary.json` |
| 203 | `fix(shell): restore the tree and start the title before hydration` | EN/ES several times on a long Father's work: no tree or title popping in late |
| 204 | `fix(motion): show every list row that fits on screen before revealing on scroll` | `/es/historia/padres` without scrolling: the screen fills, the next row peeks |
| 205 | `fix(reader): keep the second translation mode across chapters that lack it` | «Al lado» in Juan 6, then Tobías 1: the menu keeps «Al lado» and says the translation is missing |
| 206 | `fix(reader): keep the place when the previous chapter loads mid-scroll` | open `/es/biblia/juan/6` and flick fast up and down at once: no jump |
| 207 | `feat(glossary): add the glossary index and term pages in Spanish` | `/es/glosario` and `/es/glosario/tradicion-tradiciones` |
| 208 | `feat(glossary): add the letter strip and two columns to the index` | `/es/glosario` at 1440: strip of letters, two columns |

Docs (not in any block): `docs/DECISIONS.md`, `docs/ROADMAP.md`, `docs/features/twelfth-session-queue.md` and this file.
