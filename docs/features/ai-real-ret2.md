# AI block RET round 2 · Verse-anchored retrieval of the Fathers (duplicate `doctrina-ai-ret2`)

## State

- **Done:** corpus investigated at $0; verse index of the Fathers built (68,052 links) and loaded; migration `20261106100800_ai_scripture_links.sql` applied with Pedro's yes (table + RLS, no policy, revoked from anon/authenticated; anon probe: 401 `42501` on the table and the function); pack integration; coverage line; 10 verse-anchored questions; retrieval-only check; live runs before and after; Pedro's question re-asked. `npm run verify` exit 0; `check-pack` 379 checks, `check-eval` 325. Every `ai_answers` row of my runs deleted (0 left). Servers on 3120/3121 stopped; the baseline clone `doctrina-ai-ret2-base` (an untouched copy of the real repo, used only to measure «before») deleted.
- **Not done / open:** a second migration that would rank and cap authors inside the database (`ai_fathers_by_verses` v2) was not applied: the MCP confirmation expired while Pedro was away, so ranking runs in TypeScript (`verse-links.ts`) over a plain read of the table. The applied function `ai_fathers_by_verses` is therefore **unused by the code** (harmless; drop it later or keep it for SQL inspection).
- **Next:** C-SRV round 3 (queued by the coordinator) continues in this copy.
- **How to resume:** `node --import ./tools/register-alias.mjs data/scripts/build-scripture-index.mjs` (dry run; `--dump=<file>` writes the links; `--load` replaces the table). **Rebuild the index after every reload of `ai_passages`**: the links reference passage ids and are deleted in cascade. Retrieval-only check at $0: `node --import ./tools/register-alias.mjs tmp/ai-ret2/retrieval.mjs`.

## Resumen en español (para Pedro)

| | Antes | Después |
|---|---|---|
| Índice | — | **68.052 enlaces** versículo→pasaje (55.050 por cita literal, 13.002 por referencia explícita) en 23.041 de 52.521 pasajes de Padres; tabla de **9,2 MB** (base 301 MB de 500) |
| Precisión (40 enlaces al azar, leídos) | — | **34 correctos, 1 paralelo sinóptico, 5 errores → 85 % estricto / 88 %** |
| Recall en los casos conocidos | — | Agustín *Tr. Jn* 25–27 ✓ (22–24 son Juan 5 y el comienzo de Juan 6), Crisóstomo *Hom. Jn* 45–47 ✓, Cirilo de Jerusalén *Cat.* 22 ✓ (Juan 6:53, relatos de la institución), Justino *1 Apol.* 66 ✓ (Lc 22:19, 1 Co 11:24, no Juan 6), Tertuliano *Res.* 37 ✓ (Juan 6:63), Ireneo 4.18 y 5.2 ✓ (1 Co 10:16, 11:27; no citan Juan 6), Ignacio *Rom.* 7.3 ✗ para Juan 6 (es una alusión, no una cita: el índice lo une solo a 2 Tim 2:8) |
| Las 10 preguntas ancladas en versículos: pasajes esperados **en el pack** | 11/28 | **24/28** (28/28 en el chequeo de recuperación a $0 con planes a mano) |
| Ídem, **en la respuesta** | 10/28 | **22/28** |
| Pregunta de Pedro (Juan 6, «TODOS los escritos patrísticos») | 8 citas de Padres, **4 de 8** citan versículos de Juan 6; 22 s | **7 de 7** citan versículos de Juan 6 (Clemente, Cipriano, Ambrosio, Basilio, Crisóstomo, Agustín, Cirilo de Alejandría; Crisóstomo con referencia explícita, los demás por cita literal); 27 s |
| Costo de la tarea | | $0.20 respuestas + $0.03 juez = **$0.23 de $0.60** |

Latencia de las 10 preguntas con `@low`: p50 19 s, p95 27 s (antes p50 20 s, p95 30 s).

**Lo que falta en el corpus mismo:** ninguna edición trae aparato bíblico ni notas (solo 21 obras conservan referencias en línea: Crisóstomo NPNF y Gregorio Magno); Ignacio *Rom.* 7.3 solo alude a Juan 6; no hay obras de Juan Damasceno ni de Hilario de Poitiers (verificado en `data/corpus/fathers`), y de Cirilo de Alejandría solo está el comentario a Juan.

**Lo que tenés que decidir:**
1. Si borrar la función `ai_fathers_by_verses` (aplicada, no usada) o aplicar su versión v2 (ranking y tope por autor en la base). Cualquiera de las dos es una migración: necesita tu sí.
2. Si aceptás 85–88 % de precisión: los errores son frases comunes de 4 palabras y paralelos sinópticos. Subir el umbral baja el recall de los casos conocidos (Justino 66 entra por dos tiradas cortas de 4 palabras).
3. Que el planificador **inventa autores y obras** que la pregunta no nombra (va02 «How did the Fathers read John 6:53?» devolvió 9 autores y 9 obras). Lo neutralicé en el pack para los pasajes anclados (el filtro por autor solo vale si el nombre está en la pregunta; el filtro por obra solo dentro de una obra), pero la búsqueda por texto sigue filtrando por esa lista. Arreglo de fondo: el prompt del plan (C-SRV).

## What changed in the code

- `data/scripts/build-scripture-index.mjs` (new): the builder (below).
- `supabase/migrations/20261106100800_ai_scripture_links.sql` (new, applied): `ai_scripture_links` (`passage_id` → `ai_passages.id` on delete cascade, `book`, `chapter`, `verse_from`, `verse_to`, `kind` `cites|quotes`, `score`), RLS on, no policy, revoked from anon and authenticated; function `ai_fathers_by_verses` with `set search_path = ''`, execute only for `service_role` (unused, see State).
- `src/content/ai-search/verse-links.ts` (new): ranks a verse's links per passage (explicit reference 2 + score, quotation 1 + score, plus 0.1 per distinct verse of the target the passage touches, up to 10) and caps per author.
- `src/content/ai-search/types.ts`: `VerseTarget`, `CorpusSearch.fathersByVerses`, `Coverage.verseSearches`.
- `src/content/ai-search/supabase-search.ts`: `fathersByVerses` reads the links of the target, ranks them, fetches the top 300 passages, caps 8 per author, returns 60.
- `src/content/ai-search/fixture-search.ts`: `fathersByVerses` returns nothing (the fixture has no index).
- `src/content/ai-search/pack.ts`: `verseTargets` (the plan's `bibleRefs`; the whole open chapter when the question says «capítulo/chapter», even if the plan narrowed the verses; the selected verse; the open chapter when the question speaks of verses), anchored hits merged one per division and ranked above full-text hits with a topical bonus from the plan's terms, selected **first** with the per-author caps, then the full-text Fathers fill what is left; a Spanish edition of the same locator replaces the English one when the answer is Spanish; no second edition of a locator; the Fathers' quota grows to `MAX_QUOTES` (24) when the question asks for «todos/all/every/exhaustivamente»; the author filter applies to anchored hits only when the question itself names the author (biblical first names such as «Juan» excluded), the work filter only when the reader is inside a work.
- `src/features/ask/coverage-line.ts` (**outside my list**, needed for the coverage requirement): «…y los textos de los Padres que citan Juan 6.» and «Ningún texto de los Padres del corpus cita …» when a target has no hits.
- `tools/ai-checks/check-pack.mjs`: targets, anchored first, «todos», the coverage line, the «Juan» false author.
- `tools/ai-eval/questions.json`: va01–va10 (es and en; John 6:53, 6:51, 6:63, the John 6 chapter in Pedro's words, John 3:5, Matthew 26:26, 1 Corinthians 11:27–29, Romans 6:3–4, Matthew 16:18), `mustInclude` by passage-key prefix; tag `verse-anchored`.
- `tools/ai-checks/check-eval.mjs` (**outside my list**): the question count 92 → 102.

## Files and commands for the coordinator

Superseded: C-SRV round 3 continued in this copy and changed several of these files; use the commands in `ai-real-csrv3.md` for both rounds.

```sh
cd ~/Desktop/dev/doctrina && git add data/scripts/build-scripture-index.mjs supabase/migrations/20261106100800_ai_scripture_links.sql && git commit -m "feat(ai): index the Bible verses each Father passage cites or quotes"
cd ~/Desktop/dev/doctrina && git add src/content/ai-search/verse-links.ts src/content/ai-search/types.ts src/content/ai-search/supabase-search.ts src/content/ai-search/fixture-search.ts src/content/ai-search/pack.ts src/features/ask/coverage-line.ts tools/ai-checks/check-pack.mjs && git commit -m "feat(ai): retrieve the Fathers by the verses they cite"
cd ~/Desktop/dev/doctrina && git add tools/ai-eval/questions.json tools/ai-checks/check-eval.mjs docs/features/ai-real-ret2.md && git commit -m "test(ai): add verse-anchored eval questions and the round 2 report"
```

## Usage

| Time (local) | Session | Weekly |
|---|---|---|
| 17:00 (start) | 35 % | 29 % |
| 17:06 | 38 % | 29 % |
| 17:30 | 45 % | 31 % |
| 17:50 | 49 % | 31 % |
| 17:56 (end) | 52 % | 32 % |

## How the corpus cites Scripture (investigated at $0)

- **Inline references survive in only 21 of the 150 English works**: «John vi. 53», «(1 Cor. i. 25.)», «Ps. cii. 25», almost all in NPNF Chrysostom homilies and Gregory the Great (≈ 3,900 Roman-numeral and ≈ 4,000 parenthetical references). The ANF texts and most NPNF ones lost their footnotes and scripture apparatus when converted; no edition in `data/corpus/fathers` carries an apparatus field (divisions have only `locator`, `ordinal`, `heading`, `text`).
- **Headings carry the verse for homily series**: Chrysostom on John, «Homily XLVI. John 6.41,42»; on the Pauline letters, likewise. A heading reference applies to every part of that division.
- **Quotations are the main signal.** The 19th-century translators quote in KJV wording (Augustine's tractates, Cyril of Alexandria, Tertullian), sometimes Douay-like for Latin sources; the AI Spanish editions quote close to Reina-Valera 1909. Translators insert words («This do **ye** in remembrance of Me»), so long exact n-grams miss many quotations.
- **Numbering trap:** the Douay-Rheims (DRA) numbers the Psalms and some Old Testament books like the Vulgate; matching DRA keys as if they were KJV keys linked Augustine's Psalm 73 to «Ps 72:2». DRA is therefore used for the New Testament only.
- **What the corpus lacks for John 6:** Ignatius to the Romans 7.3 is an allusion («the bread of God, which is the flesh of Jesus Christ… of the seed of David»), not a quotation of John 6: the index links it to 2 Tim 2:8 only. Irenaeus *Against Heresies* 4.18 and 5.2 quote the institution narratives and 1 Corinthians, not John 6.

## The index

`data/scripts/build-scripture-index.mjs` (dry run by default, `--load` to write, `--dump=<file>` for inspection; idempotent: it deletes every link and inserts the rebuilt set). Passages come from `fatherRows()` of the loader, so keys match `ai_passages` exactly.

- **`cites`**: a regex over English and Spanish book names and abbreviations (with «1 Cor», «I Cor.», «Jn»), Roman or Arabic chapters, verses with ranges and lists; validated against the KJV verse list. Inline score 1.0, heading 0.9.
- **`quotes`**: 4-word shingles of the passage against KJV (whole Bible), DRA (New Testament) and RV1909 (Spanish editions); a shingle counts only if it occurs in at most 4 verses. A verse is linked if the passage shares one run of ≥ 7 words with it, or two separate runs totalling ≥ 8 words, and the shared words cover ≥ 25 % of the verse (a run of ≥ 10 words is enough on its own). Score = 0.8 × coverage.
- **Size:** 52,521 Father passages → 68,052 links (55,050 `quotes`, 13,002 `cites`) on 23,041 passages; built in 7 s. John 6 alone: 1,140 links on 580 passages of 57 works.
- **Precision:** 40 links drawn at random (seed 2026) and read against the verse: 34 correct for sure, 1 a synoptic parallel of the quoted verse, 5 wrong (common phrases such as «in that he saith», «the word of the LORD came unto me, saying», and one wrong verse of the same idea) → **85 % strict, 88 % counting parallels**. (Before restricting DRA to the New Testament one more was the Psalm-numbering error.)
