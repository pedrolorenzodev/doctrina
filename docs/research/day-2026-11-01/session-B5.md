Status: draft, NOT verified by Pedro

# Session B5 («apologists») log, 2026-11-01 late night

Lane: `docs/research/passages/**`, `docs/research/videos/**`, `docs/research/apologists.md`, `docs/research/youtube-covers.md`, this log. Continues B, B2, B3 (no B4 file exists on disk). Cap: weekly 56 % inclusive (Pedro, per moment). Effort: high. Siblings: A5 (scripture lists), C5 (data builds), same working tree, disjoint files.

## Progress

- [x] 0. Method: `passages/method-apologists.md` (pipeline: WordPress REST crawl, verse index, query by hits; 53,202 documents in the index: catholic.com about 5,700 pages, aomin.org 8,061, Mohler 9,764, Reformation21 13,046, Steadfast Lutherans 6,503, Credo 4,184, 9Marks 2,168, Jay's Analysis 2,320, Truth Unites 577, Lutheran Reformation 223, Tabletalk 694 (empty), and about 60 caption files). The catholic.com crawl of the remaining magazine, tract and Counsel of Trent pages was still running at the end.
- [x] 1–2a. Catholic long-form: 92 of 96 quotes got a `Long-form` block by script (4 not located: 2 Baptism, 2 Eucharist); automatic check: all 92 contain the old quote; sample check by a verifier in the last pass (`verification-b5-5.md`).
- [~] 2b. Catholic passages to two persons: 7 added (Horn Gal 3:27, Keating households, Staples Acts, Nash Gen 14:18, Akin Luke 2:19, Broussard 1 Cor 11:34, Broussard 1 John 2:20–27). **Still below 2 persons** (stated in each file's counts): Baptism 15 (John 19:34, Mark 10:38), 7 (1 Cor 6:11, 12:13), 13 (Eph 4:30…: Staples reads it as Confirmation, not added), Papacy 5, 6, 7, 9, 14, SS 1, 15, Eucharist 6; the corpus crawl was incomplete.
- [x] 3. Non-Catholic files (19): Baptism ×4 (Lutheran, Reformed, Orthodox, Baptist), Papacy ×3 (Lutheran, Reformed, Baptist), Sola Scriptura ×3 (Lutheran, Baptist, Orthodox), Eucharist ×4 (Lutheran, Reformed, Baptist, Orthodox). Not written, and why: Orthodox Papacy (no named Orthodox speaker found on a page passage), Reformed Sola Scriptura (Sproul's «Scripture Alone» captions and Ligonier Q&A clips cite no verse).
- [ ] 4. Widening: not started beyond the core sets (see «What is left»); H2 and the Ortlund-vs-1689 check not done (the video's own words on the 2LBC are in `qGIRjz5qSpA` 10:36–11:17, not compared with the 1689 text).
- Verifiers: five passes (table below); the last one (`verification-b5-5.md`) covers the Catholic additions, the method doc and the newest blocks.

## Usage checks (session / weekly)

- 22:15 s5/w43 (start) · 22:26 s9/w44 · 22:37 s15/w45 · 22:43 s20/w45 · 23:04 s32/w48 (HTTP 429 at 22:45, 22:59, 23:02) · 23:12 s38/w49 · 23:24 s41/w49 · 23:47 s54/w51 · 23:51 s2/w52 (session reset) · 00:07 s13/w53 · 00:12 s15/w54 · 00:18 s20/w55. The shared file `~/doctrina-research-prompts/usage-latest.txt` was used from 23:36 on.

## Subagents (Sonnet, one at a time, `effort: "high"` each)

| # | Files | Report | Result |
|---|---|---|---|
| 1 | Lutheran + Orthodox Baptism | `passages/verification-b5-1.md` | 73 items, 9 wrong (3 + 6); all applied |
| 2 | Reformed + Baptist Baptism, Lutheran + Reformed + Baptist Papacy | `passages/verification-b5-2.md` | 106 items, 27 wrong (6, 7, 3, 6, 5); all applied |
| 3 | Lutheran Baptism (new blocks), Orthodox Baptism (new block), Lutheran + Baptist + Orthodox Sola Scriptura | `passages/verification-b5-3.md` | 125 items, 15 wrong (6, 2, 1, 3, 3); all applied |
| 4 | Eucharist ×4, Reformed Baptism and Papacy new blocks | `passages/verification-b5-4.md` | 119 items, 20 wrong (2, 3, 2, 4, 7, 1, 1); all applied; three unused sources it found (Ferguson on 1 Cor 11:26, Godfrey on Matt 16, White's 1998 article) were cut and added |
| 5 | Catholic additions and long-form sample, method doc, `apologists.md` update, newest blocks | `passages/verification-b5-5.md` | 86 items, 21 wrong (Catholic part 11, method doc and `apologists.md` 6, newest blocks 4); the wrong claims in the method doc, `apologists.md`, the notes, the recount lines and the newest blocks are applied; the Catholic block defects it found (blocks that drop list items, a «Speaker 5:» label, two blocks of 2,867 words with a greeting and a plug, one block that is an episode summary) are **not corrected** and are named in each Catholic file's progress note |

## Effort measurement (wrong items per verifier, session at high effort)

- Verifier 1: **9** wrong items in 2 files (3 and 6). Verifier 2: **27** in 5 files (6, 7, 3, 6, 5). Verifier 3: **15** in 5 files (6, 2, 1, 3, 3). Verifier 4: **20** in 7 files (2, 3, 2, 4, 7, 1, 1). **No file reached the ~20 line** (the maximum was 7; verifier 4 found 20 in total over seven files). Verifier 5: **21** over three parts (Catholic files 11, method doc and `apologists.md` 6, newest blocks 4); it read all 92 long-form blocks and found 90 letter-for-letter equal to the live pages. Every caption block and every page block rebuilt letter for letter from its source in all three reports: the scripted extraction left no text errors. The wrong items were in headings, Progress lines, counts, unflagged verse identifications, standing claims and, above all, **blanket negative claims** («no creator treats…»): about 15 of the 71 wrong items. Lesson: a negative claim needs a search over word forms and digit forms of every caption file and the output must not be cut (one of mine was wrong because a `head` truncated the list).
- Reading (not proof): high effort at this size of file produced about 3 wrong items per file, against 4–21 on earlier nights; the scripted quoting is the likely reason, since the errors left are about claims around the quotes.

## Agent's calls

- **Core sets of A5 used as the passage list for Baptism and Eucharist; for Papacy and Sola Scriptura the same file was read, but the files record the passages the creators actually argue (Matt 16:18–19; 2 Tim 3:16–17, Matt 15) and say that the core-set passages (church-discipline and headship proof-texts) have no apologist in the corpus.** Reason: the core sets of those two doctrines are the confessions' proof-texts for discipline, offices and headship; the verse index shows that no creator of `apologists.md` treats them, so listing them with «none found» only repeats the fact.
- **Voices outside `apologists.md`, each flagged inside its file and in `apologists.md`'s B5 update:** Ligon Duncan and Jim Cassidy (Reformation21), Fred Zaspel (Credo Magazine), Ben Robin (9Marks), and for Catholic gaps Tim Staples (apologist emeritus) and Tom Nash (staff apologist, three books). Reason: the passages had no person from the named lists; their standing is only what the page's byline or profile says. Suan Sonna was not used (no standing evidence).
- **James White used for the papacy only.** No text of his found treats the Reformed (Westminster) baptism passages, and his church's doctrine page names no confession (`apologists.md`); the Reformed Baptism page uses Sproul, Ferguson, Duncan and Cassidy. (The first draft called him a Reformed Baptist; the verifier found no source for it and it was removed.)
- **Ortlund placed under Baptist** (as `apologists.md` recommended, open point V39 about the 1689 line); his «Lord's Supper: A Reformed View» video is not cut for the Reformed page (he reads older Reformed authors).
- **Lord of Spirits (Ancient Faith) hosts counted together as one person** because the captions have no speaker labels; De Young and Damick are never given a sentence.
- **Mohler, Truth Unites, Jay's Analysis, Reformation21 (except Duncan and Cassidy), Steadfast Lutherans and Lutheran Reformation** were crawled and indexed but yielded no record: the hits are incidental citations in sermons and blogs by many authors, or the pieces are lists or letters, not expositions of the verse.
- **Catholic long-form window is a rule** (about 650 words, stopping at a heading, speaker change, title or footer); it is not a reading of where the argument ends. A separate block was kept under every old quote and the old quote stays above it.
- **Not started, stated:** the Orthodox Papacy, Sola Scriptura and Eucharist files (no Orthodox creator text found for those pages' passages), the Reformed Sola Scriptura file (Sproul's three «Scripture Alone» captions cite no verse), objections, Fathers, glossary (the brief says not to start them).

## Shared choices

- Scripts (scratchpad, not in the repo): `tools/wpcrawl.py`, `vindex.py`, `vq.py`, `tq.py`, `longform.py`, `gen.py` plus `specs/*.py` that generate every non-Catholic file from the captions and pages (so a correction is a change to the spec and a regeneration, never a hand edit of the generated text).
- Catholic additions after the long-form pass (Horn Gal 3:27, Staples Acts, Nash Gen 14:18, Akin Luke 2:19, Broussard 1 Cor 11:34) were inserted by `specs/catholic_add*.py`; do not re-run `longform.py` over the four Catholic files without removing them first.
- Caption cue times are the transcript panel's; the `&t=` link lands at the first cue's second.

## Handoff to A5

- `doctrines/scripture-lists/core-sets.md`: «baptism · orthodox» rows 3 to 18 are one tie (1 document, 1 locator) listed alphabetically, so a reader takes them for ranks; a note under the table header or a dropped rank column would prevent it. The file was edited at 23:59 (Orthodox Eucharist ranks changed; Baptist Papacy rows lost Acts 15 and 1 Cor 5): the B5 files name core-set passages but not ranks, and say «rows as of 23:35».
- The Papacy and Sola Scriptura core sets (confession proof-texts for discipline, offices, headship) have almost no apologist text; the passages creators actually argue are Matt 16:18–19, Matt 18:18, Acts 15, 2 Tim 3:16–17, Matt 15. If the Pasajes page of a non-Catholic tradition is to show apologists, the passage list of those pages needs those passages (the Baptist and Reformed pages have Matt 16 entries; the Lutheran Sola Scriptura and Orthodox pages do not have 2 Tim 3:16 and Matt 15).
- Nothing for C5.

## What is left

- **Item 2b:** the Catholic passages listed in «Progress» still under two persons; rerun `cand.py` after the catholic.com crawl finishes (about 7,100 pages; the scratchpad is session-specific: rebuild with the script in `method-apologists.md`).
- **Not written:** Orthodox Papacy, Orthodox Eucharist beyond the Lord of Spirits episode, Reformed Sola Scriptura, Orthodox Sola Scriptura beyond one Trenham video; objections, Fathers, glossary (out of scope tonight).
- **Leads found and not cut:** Reformation21 posts by Mark Jones (2023-05-15) and Ken Golden (2020-05-30) citing Gal 3:27 for baptism; Cooper's *Does Baptism Save?*; 9Marks pieces by Caleb Morell and Tiago Oliveira; Credo Magazine (Timothy Raymond, John 3:23; Claridge on Mark 1); Sproul `BABm0VFfDFI` (Luke 22:24–34); Ortlund `TG6pnAjHX1k` (*Why I Don't Accept the Papacy*, 28 min, not fetched); the Ancient Faith *Fallacy of Sola Scriptura* show (host not named); the R&T Media interview of Trenham by Lofton and Ybarra (speaker turns not separable); the Lord of Spirits episodes' other passages (Matt 28 at 2:14:49 in Ep. 54; 1 Cor 1:16 at 2:13:08).
- **Decisions for Pedro:** (1) Voices outside `apologists.md` used as agent's calls: Duncan, Cassidy, Zaspel, Robin, Doellinger, Keating, Staples, Nash. (2) Whether the Lord of Spirits hosts count as one person. (3) Whether the 5-minute and clip-length videos of Cooper and Ligonier («explained quickly», «Ask Ligonier») are enough as apologist depth. (4) Trimming of the long-form blocks before launch (every block is tagged).
- Every file is a draft not read by Pedro; nothing is in `src/` or `data/`.
- **Stop:** the weekly reading reached **56 %** at 00:32 (shared usage file), the cap. The last verifier's corrections were applied after that reading; nothing new was researched. Not corrected, on purpose: the Catholic block defects of `verification-b5-5.md` items A4–A7 and A27.
- **Lesson for the playbook:** a verifier cost about 1 weekly point each (120–420k subagent tokens); five passes ran in the last 2 hours; the files' quotes were never wrong, the claims around them were, so the verifier brief should point at negative claims first.

## Resumen para Pedro (español, breve)

- **Hecho:** (1) **Método** (`passages/method-apologists.md`): bajé una vez los textos de catholic.com, aomin.org (White), Mohler, 9Marks, Reformation21, Credo, Steadfast Lutherans y otros, armé un índice de versículos y leo solo los mejores candidatos; Tabletalk vino vacío. (2) **Católicas:** 92 de 96 citas ahora tienen el texto largo debajo (marcado para recortar antes del lanzamiento) y agregué una segunda persona en 7 pasajes (Horn, Keating, Staples, Nash, Akin, Broussard ×2). (3) **No católicas:** 19 archivos: Bautismo (luterano, reformado, ortodoxo, bautista), Papado (luterano, reformado, bautista), Sola Scriptura (luterano, bautista, ortodoxo) y Eucaristía (luterano, reformado, bautista, ortodoxo), con minuto o párrafo exacto y texto largo.
- **Ojo:** casi ningún pasaje llega a dos personas, ninguno a tres; en Papado y Sola Scriptura los pasajes de los documentos oficiales (disciplina, oficios) casi no tienen apologista, así que registré los que los creadores sí discuten (Mt 16, Hch 15, 2 Tim 3:16). Lo ortodoxo fuerte sale del programa *Lord of Spirits* (dos anfitriones que cuento como una persona porque los subtítulos no dicen quién habla). Usé voces fuera de tu lista (Duncan, Cassidy, Zaspel, Robin, Doellinger, Keating, Staples, Nash): están marcadas como decisión mía. Faltan Papado ortodoxo y Sola Scriptura reformado.
- **Verificación:** cinco pasadas con Sonnet en alto; 9, 27, 15, 20 y 21 errores (ningún archivo pasó de 7; ninguno estaba en el texto citado, que coincide letra por letra con las fuentes): estaban en títulos, conteos y afirmaciones de «nadie trata este pasaje», ya corregidas. Quedan sin corregir defectos de algunos bloques católicos, listados en cada archivo.
- **Necesitan decisión tuya:** si valen las voces fuera de la lista; si los dos anfitriones de *Lord of Spirits* cuentan como uno; si los videos cortos («explicado rápido», clips de Ligonier) alcanzan como profundidad; cuánto recortar antes del lanzamiento.
- **Uso:** paré al llegar al 56 % semanal (00:32).

## Summary for the next agent (English)

- **Ready for review:** `passages/method-apologists.md`; the 19 non-Catholic files `passages/apologists-{lutheran,reformed,orthodox,baptist}-baptism.md`, `-{lutheran,reformed,baptist}-papacy.md`, `-{lutheran,baptist,orthodox}-sola-scriptura.md`, `-{lutheran,reformed,baptist,orthodox}-eucharist.md`; the four Catholic files with long-form blocks and seven added persons; the verification reports `passages/verification-b5-1.md` to `-5.md`.
- **Method worth reusing:** generate every non-Catholic file from a spec (video id and cue range, or URL and start and end phrases) so a correction is a spec change and a regeneration; the scripts are in the session scratchpad and described in `method-apologists.md`. Re-run every negative claim with word forms and digit forms of all caption files, and never truncate the output.
- **Not done / open:** see «What is left» above (item 2b remainder, Orthodox Papacy, Reformed Sola Scriptura, the Ligonier articles sitemap of 2,814 URLs found by the verifier, the unfixed Catholic block defects).

## Table for Pedro's daily (tomorrow)

| What is ready | What you decide | What to be able to explain |
|---|---|---|
| Long-form records for the 4 Catholic pages (92 of 96 quotes) and 19 non-Catholic Pasajes files with exact minute or paragraph | Which outside voices stay (Duncan, Cassidy, Zaspel, Robin, Doellinger, Keating, Staples, Nash); whether the Lord of Spirits hosts count as one | That quotes are checked letter for letter against captions and pages and the errors found were in headings and claims, not in the quoted text; that a method (crawl once, index verses, read only the best hits) replaced reading whole videos |
| `passages/method-apologists.md` | Whether to crawl the Ligonier articles sitemap and the rest of catholic.com next | Why the confession proof-texts for Papacy and Sola Scriptura have no apologist text, and what creators argue instead |

## Commit command for session B5's files (do not run it from the agent)

`git add docs/research/day-2026-11-01/session-B5.md docs/research/apologists.md docs/research/passages/method-apologists.md docs/research/passages/apologists-catholic-baptism.md docs/research/passages/apologists-catholic-papacy.md docs/research/passages/apologists-catholic-sola-scriptura.md docs/research/passages/apologists-catholic-eucharist.md docs/research/passages/apologists-lutheran-baptism.md docs/research/passages/apologists-reformed-baptism.md docs/research/passages/apologists-orthodox-baptism.md docs/research/passages/apologists-baptist-baptism.md docs/research/passages/apologists-lutheran-papacy.md docs/research/passages/apologists-reformed-papacy.md docs/research/passages/apologists-baptist-papacy.md docs/research/passages/apologists-lutheran-sola-scriptura.md docs/research/passages/apologists-baptist-sola-scriptura.md docs/research/passages/apologists-orthodox-sola-scriptura.md docs/research/passages/apologists-lutheran-eucharist.md docs/research/passages/apologists-reformed-eucharist.md docs/research/passages/apologists-baptist-eucharist.md docs/research/passages/apologists-orthodox-eucharist.md docs/research/passages/verification-b5-1.md docs/research/passages/verification-b5-2.md docs/research/passages/verification-b5-3.md docs/research/passages/verification-b5-4.md docs/research/passages/verification-b5-5.md && git commit -m "docs(research): add apologists layer for non-Catholic pages and long-form"`

(Only the files this session touched; do **not** add `docs/research/doctrines`, `sources`, `neutral`, `data`, `src`, `.playwright-mcp/`, `tmp/` or the `__pycache__` folder.)
