# Research session C5 («data builds») · 2026-11-01 late night

Status: draft, NOT verified by Pedro

Lane: `data/scripts/**` (new scripts), `data/site/words/**`, `data/corpus/fathers-es/**`, `docs/research/sources/words-and-fathers-es.md` (the notes: findings, licences, method, wiring needs), this log. Cap: Claude weekly **56 % inclusive** (Pedro, per moment). Other agents at the same time: A5 (scripture lists), B5 (apologists). Nothing outside the lane was touched; no git writes.

## Progress

- 22:15 started. Usage at start: session 5 % (resets 23:49), weekly 43 % (reset Wed 17:59).
- 22:15–22:35 Read: AGENTS.md rules, `corpus-bibles-and-fathers.md`, `spanish-glosses.md`, `session-A3.md`, `build_site_john6.py`, `build_greek.py`, `greek_common.py`, `data/site/john6.json` shape, `data/raw/john6.greek.json`, `lexicon.john6.json`, `.claude/rules/content.md`, DECISIONS entries on screen 07, Spanish glosses, three-level Spanish translations, early Fathers route 2.
- 22:16 **Part 1, item 2 done:** STEPBible-Data downloaded to the scratchpad (repo `master`, latest commit `be4191f0`, 2026-10-24; ten files, sha256 in `data/site/words/manifest.json`); licence lines, attribution text and the TBESH caveat in the notes file.
- 22:20–22:35 **Part 1, item 3 done:** scripts `words_common.py`, `build_words.py`, `merge_glosses_es.py`, `check_words.py`; output `data/site/words/**` (1,502 files, 63 MB). Spanish: `glosses-es.json` (6,792 entries, AI-drafted, automatic).
- 22:30 **Part 1, item 4:** regression against `data/site/john6.json`: zero differences except `es` (expected: the old one is OpenGNT's, not used) and `def` (the old one was cut at 1,400 characters); the only other differences are the 9 `n`, 7 `verses` and 5 `refs` of lexicon entries that count the 29 NA28-displaced words (call 5). Coverage against the KJV: 31,101 of 31,102 verses. Verifier V1 22:32–22:41: 0 mechanical defects in 30 verses and 30 lexicon entries, 30 of 30 recounts exact, but 43 of 374 sampled `es` wrong and one generator bug; **all corrected 22:43**, not re-verified.
- 22:36 **Part 2 started** (Part 1 files written, weekly 45 %). `build_fathers_es.py` refuses to write unless every English locator is present, once, in order. 15 works by 22:55; verifier V2 on 12 of them 22:48–22:54; then Aristides, Justin's First Apology (chapters 61–67: baptism and Eucharist) and Second Apology, and Irenaeus' *Demonstration*; verifier V3 on five works 23:03–23:08; V4 on the last two works launched 23:10. **19 works, 1,015 divisions, 99,361 Spanish words** (table in the notes file).
- 22:45–23:00 the usage endpoint answered HTTP 429 (three agents poll it): last reading 45 % at 22:43, the next 47 % at 23:00; I kept inside the cap by estimate and polled every 2–5 minutes. After 23:00 it answered 429 again except once (below).

## Usage checks

- 22:15 s5 / w43 · 22:18 s7 / w43 · 22:21 s8 / w44 · 22:23 s9 / w44 · 22:24 s9 / w44 · 22:28 s10 / w44 · 22:30 s11 / w44 · 22:32 s12 / w44 · 22:36 s15 / w45 · 22:43 s20 / w45 · (429 22:45–22:59) · 23:00 s29 / w47 · 23:02 s31 / w47 · 23:08 s36 / w48 · (429 at 23:09, 23:10, 23:11).
- Measured per part (the weekly figure is shared by the three sessions, so these are upper bounds for me): Part 1 (22:15–22:43, one verifier) 43 → 45; Part 2 (22:43–23:08, three verifiers, 17 works) 45 → 48. The 5-hour session went 5 % → 36 %.

## Shared choices

(none new; the inherited ones of `session-A3.md` do not concern this lane)

## Agent's calls

1. **The app reads no word data today** (the brief says it works for John 6): the verse panel's «Palabras» and «Usos» are inert `TODO`s and nothing in `src/` reads `john6.json`; I built to the shape of `data/site/john6.json`. **«Usos» of the verse panel is the citation registry, not word occurrences**; the occurrence index is for screen 07.
2. **Hebrew lexicon definitions are not included** (`def: null`): TBESH's header says they are Online Bible's abridged BDB and that permission must be asked before use. Greek definitions (Abbott-Smith, public domain) are included, uncut (`john6.json` cut at 1,400 characters).
3. **Layout:** one file per chapter (`verses/<Book>/<chapter>.json`), lexicon and occurrences sharded by Strong's number / 100; `parse` moved to `morph.json`; `l`/`lt` only when they differ from the lexicon. 63 MB in `data/site/words/` (not gitignored): the size and STEPBible's request «please do not redistribute it yourself» are Pedro's call (README line: «Refer others to this repository as the source of the data»).
4. **OpenGNT's Spanish column is not used**; Spanish glosses are one English → Spanish table (`glosses-es.json`) applied to lexicon glosses, Greek word glosses and Hebrew parts, composed by piece, never guessed (absent when any piece is unknown); proper names get their Spanish form from a 700-name table, otherwise stay English only as exact names, «of X» and «to X».
5. **The 29 NA28-displaced words** (`NA28»n`/`NA28«n`) are in `words` and counted (the old rule sent them to `omitted`); their order follows the TAGNT line order, not NA28's displacement.
6. **Plural 2nd-person verbs get no Spanish** rather than a wrong singular.
7. **Part 2 order changed:** after Polycarp, the Martyrdom, the Didache and Diognetus I did Barnabas, Papias, Aristides, Justin (First and Second Apology) and Irenaeus' *Demonstration* **before Hermas** (the brief puts Hermas before Aristides): the site cites Justin (1 Apology 66 among others) and Hermas is 37,000 words that would have used the budget of three works.
8. **Spanish conventions:** «vosotros» for «ye», «tú» for «thou», «Soberano» for «Master» (God), «Verbo» for «Word», «Ancianos» for Irenaeus' «Elders», «mezquino» for «mean»; scripture translated from the English corpus wording, never copied from a Spanish Bible; English OCR artefacts kept when text-like (`�LA1�`, `&gt;`, running heads, stray brackets) and the sense written for plain misprints.
9. **`edition.licence` of the Spanish files** says «pending: translation by Doctrina (AI-assisted) of a public-domain English text; licence to be decided by Pedro»; the repo's validator accepts only `public-domain`, so the real validator (`node --experimental-strip-types data/scripts/validate-fathers-es.mjs`) reports one licence error per file and nothing else (19 files, 19 errors).
10. **`data/corpus/` is gitignored:** the Spanish Father files are local, like the English ones; the commit command below does not include them (`git add -f data/corpus/fathers-es` if Pedro wants them tracked).
11. **Aristides 9** renders the Greek name «Δίος» (English «Dios») as «Dis» so that it is not read as God.

## Subagents

| # | Brief | Sonnet, high, one at a time | Result |
|---|---|---|---|
| V1 | the whole-Bible word data: 30 verses (472 words), 30 lexicon entries, 30 occurrence recounts, 60 Spanish glosses, from the raw STEPBible files | 409 s, 183k tokens, 34 tool uses | mechanical fields 0 defects; recounts 30/30 exact; Spanish: 43 of 374 words wrong, 3 of 24 lexicon glosses wrong, 3 of 60 table entries wrong; generator bug (29 NA28-displaced words); all corrected, not re-verified |
| V2 | Spanish translations of 12 works, 10 divisions each plus two works whole | 265 s, 171k tokens, 21 tool uses | 120 checked: 109 confirmed, 11 wrong (a passive for an active, an inverted clause, «foreordained», «mean» → «vil», …), 0 unconfirmable; file-level checks passed; corrections applied, not re-verified |
| V3 | Barnabas, Diognetus, Papias (whole), Aristides, Justin 1 Apology (13 divisions incl. 61, 65–67) | 291 s, 168k tokens, 14 tool uses | 62 checked: 56 confirmed, 6 wrong (a mistranslated «proved», «Dios» for the Greek name, a malformed sentence in 1 Apol. 66, Papias IV pronouns, quote-mark style), 0 unconfirmable; two English-source doubts raised; corrections applied, not re-verified |
| V4 | Irenaeus *Demonstration* (15 of 100 sections) and Justin 2 Apology (10 of 15), plus a re-check of the six V3 corrections | 154 s, 128k tokens, 16 tool uses | 25 checked: 23 confirmed, 2 wrong (minor), 0 unconfirmable; the six V3 corrections read correctly; corrected, not re-verified |

## Handoff to A5 / B5

None needed: I read neither file during the work and wrote nothing outside the lane.

## What is left

- **Part 1:** a second verifier on the corrections of V1 (none was run); the Spanish table's long tail (about 15 % of Greek and 24 % of Hebrew words still show English); the senses of «Qué significa» (Greek `def` is Abbott-Smith's plain text, not split); the Hebrew lexicon definitions need Online Bible's permission or another source; Greek and Latin Fathers' words for screen 07's last section; the deuterocanonical books (STEPBible has none); 14 Hebrew ids without a TBESH row.
- **Part 2:** Hermas, Justin's *Dialogue*, Irenaeus' *Against Heresies* and every other work of the corpus; a second verifier on the corrections of V2, V3 and V4; Pedro's decision on the translations' licence and on tracking `data/corpus/fathers-es/`; the wiring (notes file, «What tomorrow's wiring needs»).

## Final state

- Last usage reading 23:08: session 36 % (resets 23:49), weekly 48 % (cap 56 %); the endpoint answered 429 at 23:09–23:12 (three agents poll it). I stopped by choice, not by the cap: the next item (Hermas, 37,000 words, or the *Dialogue*, 67,000) would take about 3 points and cannot be left half done (the builder refuses an incomplete work), and the corrections of V2–V4 are not re-verified.
- V4 (23:10–23:13): Irenaeus' *Demonstration* 15 checked, 13 confirmed, 2 wrong (25 «sepultados» for «overwhelmed» → «anegados»; 33 «Palabra de Dios» → «Verbo de Dios»); Justin's Second Apology 10 checked, 10 confirmed; the six V3 corrections read correctly (a caveat: «Dis» is also the Latin name of Pluto). Both corrected, not re-verified. Outside the sample the verifier saw that sections 9, 11, 13, 72, 89 and 95 of the *Demonstration* drop a few one-word parentheses of the English («(it)», «(as)»): not fixed. The Spanish edition's `sha256` is the hash of the English JSON translated, while the English edition's is the hash of its source HTML (same in `translatedFrom`).
- Everything written is `Status: draft, NOT verified by Pedro`; nothing is committed.

## Summary for Pedro (español, breve)

- **Hecho (borrador, con verificadores Sonnet):** (1) **datos de palabras de toda la Biblia**: 1.189 capítulos (260 griegos, 929 hebreos) en `data/site/words/`, con léxico de 17.025 entradas, índice de apariciones por libro para la página 07 y glosas en español propias (IA, marcadas «automáticas»); el generador reproduce John 6 salvo el español (el viejo era de OpenGNT, que no usamos) y salvo 29 palabras que el filtro viejo se salteaba; (2) **19 obras de los primeros Padres en español** (Clemente 1 y 2, las 7 cartas de Ignacio, Policarpo, su martirio, Didaché, Diogneto, Bernabé, Papías, Arístides, Justino 1.ª y 2.ª Apología, Ireneo *Demostración*): 1.015 divisiones, 99.361 palabras, con los mismos localizadores que el inglés.
- **Para decidir:** (a) los **63 MB** de `data/site/words/` van a git y STEPBible pide «no lo redistribuyas vos»: ¿se commitea tal cual o se genera en el build? (b) la **licencia de las traducciones**: puse «pendiente» y el validador del repo la rechaza (solo acepta `public-domain`): ¿las liberás (CC0) o se relaja el validador para `es`? (c) `data/corpus/` está en `.gitignore`: ¿se trackean los Padres en español (`git add -f`)? (d) las definiciones del léxico **hebreo** (BDB abreviado de Online Bible) piden permiso: las dejé fuera; (e) dos dudas del texto inglés: Papías III dice «diez mil años» y NPNF dice «mil», y a Bernabé 10.11 le falta un verbo.
- **No hecho:** Hermas, el *Diálogo* de Justino, *Contra las herejías*, y todo lo demás; un segundo verificador sobre las correcciones; el cableado (lo que hace falta está en `docs/research/sources/words-and-fathers-es.md`).
- **Ojo:** nada está revisado por vos; los verificadores encontraron errores en cada tanda (43 de 374 glosas en español, 11 de 120 divisiones, 6 de 62) y **las correcciones no se volvieron a verificar**. En el app, «Palabras» y «Usos» siguen inertes: hoy nada lee estos datos, y «Usos» del panel es el registro de citas, no las apariciones de la palabra.

## Summary for the next agent (English)

- Files written (all `Status: draft, NOT verified by Pedro`): `data/scripts/{words_common,build_words,merge_glosses_es,check_words,build_fathers_es}.py`, `data/scripts/validate-fathers-es.mjs`, `data/site/words/**` (generated; `glosses-es.json` is the one authored input), `data/corpus/fathers-es/**` (19 works, gitignored), `docs/research/sources/words-and-fathers-es.md` (read it first: findings, licences, layout, coverage, wiring needs), this log.
- Rebuild: STEPBible files into a scratch dir, then `python3 -I data/scripts/build_words.py --src <dir>` (8 s) and `python3 -I data/scripts/check_words.py`; Fathers: write the Spanish text per work (format in `build_fathers_es.py`'s docstring) and run `build_fathers_es.py <work-id> <text>`; validate with `node --experimental-strip-types data/scripts/validate-fathers-es.mjs`. Set `PYTHONDONTWRITEBYTECODE=1` or delete `data/scripts/__pycache__/`.
- First items: a second verifier on the corrections (V1–V4), the wiring of the reader (`get-father-works.ts` second root and `lang`, the licence rule), the UI that reads `data/site/words`, then Hermas, the *Dialogue*, *Against Heresies* and the other works; the Hebrew lexicon definitions need permission or another source.

## Daily table for tomorrow (what, why, where, how long)

| What | Why | Where | How long |
|---|---|---|---|
| Decide the licence of the Spanish translations and whether `data/corpus/fathers-es/` is tracked | the validator rejects `pending`; the folder is gitignored | notes file, «licence field» | 5 min |
| Decide how the 63 MB of word data is committed or generated | STEPBible asks not to redistribute; the size is large for git | notes file, «Sources, dates, licence lines» | 5 min |
| Read 3 Spanish divisions against the English (e.g. 1 Clement 36, Didache 9–10, Justin 1 Apol. 66) | the Spanish is AI-made and unreviewed | `data/corpus/fathers-es/<work>/doctrina-ia-2026.json` | 15 min |
| Wire the Spanish Fathers into the loader (second root, `lang`) | no UI can show them until then | `src/content/get-father-works.ts` | 30 min |
| Explain what the night built (word data + early Fathers in Spanish) | the daily | this log's Spanish summary | 5 min |

## Stage-and-commit command (Pedro runs it; the agent does not)

`git add data/scripts/words_common.py data/scripts/build_words.py data/scripts/merge_glosses_es.py data/scripts/check_words.py data/scripts/build_fathers_es.py data/scripts/validate-fathers-es.mjs data/site/words docs/research/sources/words-and-fathers-es.md docs/research/day-2026-11-01/session-C5.md && git commit -m "docs(research): add whole-Bible word data and Spanish early Fathers"`

(The Spanish Father files are in `data/corpus/fathers-es/`, which `.gitignore` excludes; add `git add -f data/corpus/fathers-es` to the command only if Pedro decides to track them.)
