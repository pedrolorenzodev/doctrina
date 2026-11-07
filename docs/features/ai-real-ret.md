# AI block RET · Retrieval (duplicate `doctrina-ai-ret`)

## State

- **Done:** parts 420, 421, 422 and 423 are written and verified (`npm run verify` exit 0). `check-pack` 347 checks ok. The loader's dry run works on the real corpus. **Not done, on purpose:** `--load` into Supabase (LIM's migrations are not applied on the remote project: `ai_passages` and `ai_settings` answer 404), so the Supabase search class is tested only against a local PGlite copy of the same SQL (below), never against the remote.
- **In progress:** nothing.
- **Next (INT):** apply LIM's migrations, run `data/scripts/load-ai-passages.mjs --load` (Pedro's yes pending: «¿Cargo los ~54.000 pasajes en Supabase (unos 120 MB, tabla solo de servidor)?»), then `explain analyze` the three searches (see «For INT»).
- **How to resume:** read this State; `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/check-ai.mjs` re-runs every check; `git status` against «Files».
- **Usage readings (weekly):** 16:46 → 14 %, 16:58 → 15 %, 17:02 → 15 % (session 22 %). Cap 25 %. Not close.

## What was built

- `types.ts`: §2.4 unchanged, plus **optional** additions only: `Passage.draft?`, `PassageQuery.locale?`, `VerseQuery.locale?`, optional `locale` parameter on `lookupVerses` and `traditionPassages`, and the new exported types `PassageRow` (the `ai_passages` columns) and `AuthorEntry` (`authors()` entries with optional `names: { es, en }`).
- `collections.ts`: quotas (`richQuotas`, `briefQuotas`), labels es/en, speaker rule (`speakerOfWork`), licence rules, `passageFromRow(row, locale)` (the one place where a database row becomes a `Passage`: Father names and work titles by locale, hrefs, edition wording with the licence sentence, draft flag), `biblePassage`, `osisParts` (verse, range, `Matt.26.26-Matt.26.28`, chapter), Father id/year lookups.
- `windows.ts`: the tiny English and Spanish stemmer, `scoreText`, `windowAround` (≤ 1,200 characters around the first match, never cutting a word, exact `windowStart`).
- `coverage.ts`: the coverage record and nothing else.
- `fixture-passages.json`: **66 real rows + 54 real verses** (120 passages): Ignatius *Smyrn.* 6.2 (en + the Spanish AI edition), *Philad.* 4.1, *Eph.* 20.2, *Rom.* 7.3; Didache 9, 10, 14 (9 also in Spanish); Justin *1 Apol.* 65–67; Irenaeus *AH* 4.18.5, 5.2.3; Cyril of Jerusalem *Cat.* 22.1–6; for Eucharist and Baptism × the five page traditions: definition, first two statements and one registry excerpt each; the two doctrine «common» texts; three glossary rows; John 6:51–58, 1 Cor 11:23–29, Matt 26:26–28, Luke 22:19–20, John 3:5, Matt 28:19, Acts 2:38, Rom 6:3–4, Matt 16:18, 1 Cor 10:16 in BSB and RV1909. Built by `tmp/ai-ret/build-fixture.mjs` (throwaway) from the loader's own row builders, so the fixture is the real rows.
- `fixture-search.ts`: in-memory `CorpusSearch` (stemmed term and phrase overlap, length-normalised, same filters and per-group limit as the SQL function).
- `supabase-search.ts`: `CorpusSearch` over `ai_search_passages` and `ai_search_verses` through its own `fetch` to `/rest/v1/rpc/<fn>` (header `apikey` only, as `supabase-load.mjs` does); `traditionPassages` and `authors` use PostgREST selects with a 10-minute process cache; `corpusVersion` reads `ai_settings`. Errors: 5xx or network → `ai_provider_down`, anything else → `ai_misconfigured`; no secret is ever printed.
- `search.ts`: `getCorpusSearch()`: fixture when `AI_STORE=memory` or `SUPABASE_SECRET_KEY` is missing, else Supabase (checked by hand with the three combinations).
- `verse-lookup.ts`: OSIS refs and ranges → one passage per ref through `getBibleVerseTexts` (local files or Supabase by `CORPUS_SOURCE`).
- `pack.ts`: `buildPack(plan, request, search)`.
- `data/scripts/load-ai-passages.mjs`: dry run by default, `--load`, batches of 500, deletes vanished keys, writes `ai_settings.corpus_version`; exports the row builders used by the fixture script.
- `tools/ai-checks/check-pack.mjs`: 347 checks.

### How `buildPack` works (rich; brief in brackets)

1. Scope (`contracts` rule 5 of `chat-design.md` §5, with the two cross cases: `chapter` with a Father here → work, `work` with a Bible here → chapter): `all` everything; `chapter` Bible limited to the chapter plus tradition passages whose refs touch it; `work` Fathers of that work; `bible` Bible only; `fathers` Fathers only.
2. Fathers: search pool of 60 (3 per author in SQL; 12 when the plan names an author, so the leftovers feed «Más textos»), one edition per locator (the answer language's edition if it is in the pool, else the best ranked), then tiers: the best passage of every author, then each author's second, then third, up to **16 [8]**, **≤ 3 [2] per author**.
3. Traditions: with a plan doctrine, every tradition that has a page gets the same maximum **4 [3]**: definition, best statements by term overlap, best registry excerpt (≥ 8 words, answer language preferred); `plan.traditions` narrows. Without a doctrine: FTS, top per tradition above rank 0.01.
4. Bible up to **12 [8]**: plan references first (guaranteed), then the references each tradition cites round-robin, then FTS if fewer than 6 [3] (always inside the chapter for `chapter` scope); chapter-only references (`John.6`) are searched inside the chapter; ranges never overlap, longest range 8 verses; one edition (the reader's translation from the Bible reader, else RV1909/BSB, DRA for the deuterocanon); FTS hits from another edition are re-read in that edition.
5. Doctrine (02 page) up to 3 [2], glossary up to 3 [2], reader's notes up to 6 **outside every quota** (collection `mine`, key `mine:<n>`, last in the pack, never in coverage or `extra`; ranked by overlap, notes with no overlap fill the rest).
6. Canonical order, ids `P1…`; budget: windows shrink 1,200 → 900 → 700 → 500, then passages are dropped (glossary, doctrine, Fathers, Bible, the fattest tradition) into `extra`; budget `PACK_TOKEN_BUDGET` [`_BRIEF`] at chars/3.2 plus 220 characters of header per passage. `extra` = the next ≤ 24 unused passages, normalised rank across collections.
7. Coverage: counts per collection, per-tradition `found` / `none` / `no-page` (`no-page` = the tradition has no page for the plan's doctrines; only the traditions the plan asked for appear when it narrowed; none when scope has no traditions), `missingAuthors`, `bibleEdition`, `fatherWorks` = distinct works searched (150 now).

## Agent's calls

1. **Hrefs and names rebuilt in `collections.ts`** instead of importing `routes.ts` / `site-tree.ts` / `get-glossary.ts`: those modules cannot be loaded by Node (`routes.ts` has two extensionless `./` imports), and both the loader and `check-pack` run in Node. Local copies cover Father works (with the reader's `#d-<locator>` anchor), tradition pages, doctrine pages, glossary terms; Bible links use the real `bible-routes.ts`. If `routes.ts` changes a slug, `collections.ts` must follow (GOTCHA for INT).
2. **Labels are produced per request locale** (`PassageQuery.locale`), not stored: the table keeps the Spanish title; names of Fathers and work titles come from `allFathers` and `workName`.
3. **`edition_label` stores the base** (translator + year, or the registry bibliography) and `[draft]` as a suffix when the corpus edition is `status: draft` (65 of the 172 editions; the table has no status column). `passageFromRow` appends the licence sentence («Dominio público.», «Cita breve con enlace a la fuente.», …) and «Borrador sin verificar.» / «Unverified draft.», sets `draft: true`.
4. **Father year** = the writing's year from the history data (`writingWorkIds` index) with the Father's death year as fallback; `author` stores the **Father id** of the history data (`ignatius-of-antioch`, `didache`), found with `worksByFather`, so «at most 3 per author» groups Ignatius's seven letters together.
5. **Tradition rows**: definition, every statement, and registry excerpts (Spanish and English only; Latin, German and Greek are not loaded) of a citation found anywhere on the page whose work's `speaker` is that tradition. The definition row's `refs` are its inline verses **plus the page's `scripture` references** (that is how «the passages each tradition cites» reaches the Bible quota). Ecumenical and site-speaker works are skipped.
6. **Doctrine rows**: only «Lo que todas comparten» and the connections between doctrines (`doctrine:<d>:common:common`, `doctrine:<d>:connected:<other>`); the practice table and the witness quotes are not loaded (the Fathers are in their own collection).
7. **Glossary rows**: one per term and tradition, text = the first real quote (Spanish, then English under key suffix `:en`); entries without a quote or marked not found are skipped; all marked draft (the glossary file is `status: draft`).
8. **Tiny Father paragraphs are not merged** (5,839 paragraphs are under 100 characters): the spec says split on blank lines; the count stays at 52,521 and the pack drops nothing for it. Revisit if tiny passages rank too high in the real run.
9. **A named author lifts the SQL per-group limit to 12** (the pack still keeps 3 per author, as the amendment says). Consequence for Pedro and C-SRV: a question about one Father gets 3 passages from him in the answer and the rest in «Más textos»; if that feels poor, the rule «never more than 3 from one author» (amendment A.4 rule 10) is the thing to relax.
10. **`fatherWorks` = distinct works searched** (150), not the 172 editions the design example mentions.
11. **`Passage.maxQuoteWords`**: public domain and CC0 80; short quote and unconfirmed 40; site-authored 60; reader notes 200.
12. `buildPack`'s `search` parameter is required (no default import of `getCorpusSearch`), so `pack.ts` does not depend on `search.ts`; C-SRV calls `buildPack(plan, request, getCorpusSearch())`.
13. **Commit parts reordered slightly** from the prompt so every part compiles and passes `lint` alone: `search.ts` and `supabase-search.ts` travel with the verse lookup (422), the pack's check uses `fixtureSearch` directly.

## What is inert (and why)

- The Supabase search class has never run against the remote project: tables not applied. It was verified indirectly: the SQL functions run in PGlite over the real rows and the pack runs on a PGlite adapter with the same mapping code (`passageFromRow`, `biblePassage`); the HTTP layer (`call`) is 25 lines and untested against the real endpoint. **First thing for INT after loading:** `AI_STORE=supabase` and one `getCorpusSearch().searchPassages(...)` call.
- `--load` was never run.
- `traditionPassages` caches 10 minutes in the process: a reload of the corpus is seen after that time or a restart.

## How to run

- Checks: `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/ai-checks/check-pack.mjs` (also inside `npm run lint` through `check-ai`).
- Dry run of the loader: `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs data/scripts/load-ai-passages.mjs` (prints counts, size estimate, corpus version; sends nothing). `--load` needs LIM's migrations and `.env.local`.
- Rebuild the fixture after a content change: `tmp/ai-ret/build-fixture.mjs` (throwaway, not in the tree; copies picked keys from `buildAllRows()`).

## Measured numbers

All on this machine, real data, **PGlite 0.3.4 (Postgres 17 compiled to WebAssembly, in memory)**; native Postgres is faster, by how much I did not measure.

- **Dry run:** 53,745 rows, 44.5 MB of text, `corpus_version` is a hash (16 hex), 0.6 s.

| Collection / speaker | Rows |
|---|---|
| fathers / shared | 52,521 (≈ 52,000 ± 10 % ✓) |
| tradition | 1,052: catholic 670, lutheran 134, reformed 98, orthodox 97, baptist 53 (≥ 1,000 ✓, the five page traditions present ✓; pentecostal none, as designed) |
| doctrine / site | 10 |
| glossary | 162: catholic 123, reformed 14, lutheran 13, orthodox 10, baptist 2 |

- **Size of `ai_passages` (PGlite, after loading the 53,745 rows):** total **122 MB** = heap 65 MB + TOAST 31 MB + indexes 26 MB (GIN `tsv` 16 MB, `source_key` unique 6.6 MB, work 2.0 MB, pkey 1.2 MB, scope 0.6 MB, author 0.6 MB). The design estimated 45–60 MB. The Bible partial indexes on `verses` (BSB + DRA + RV1909, 97,981 rows): 2.9 MB English + 1.7 MB Spanish. **Database 131 MB + 122 MB + 5 MB ≈ 258 MB**: over the «under 250 MB» line of the launch checklist (item 3), well under the 400 MB ceiling and the 500 MB plan. **Decision for Pedro/INT**; if 250 matters, dropping `ai_passages_work_idx` and `ai_passages_author_idx` saves 2.6 MB only; the real lever is not loading Spanish AI editions (22 works) or the longest works, not worth it.
- **Planner:** `explain analyze` shows the GIN index `ai_passages_tsv_idx` (Bitmap Index Scan) for phrase and OR searches (3.5 ms and 5.3 ms for 411 and 4,020 hits); the partial `verses_fts_es_idx` is used on RV1909 (24 ms for 920 hits); the author-filtered search 37 ms.
- **Finding for INT/LIM (the migration is theirs, I did not touch it):** `ai_search_passages` as drafted takes **≈ 1.4 s** in PGlite for a broad Fathers question (5,024 hits) although the match step is 78 ms and ranking 33 ms: the cost is the wide rows (`p.*` with `text` and `tsv`) going through the CTE, window sort and `limit`. A rewrite that ranks only `(id, group, rank)` and joins the full rows for the top 20 returns the **same keys in ≈ 470 ms (3× faster)**; there the `where` also uses `(lang = 'es' and tsv @@ es) or (lang <> 'es' and tsv @@ en)`, which lets the planner use a BitmapOr of the GIN index instead of filtering the whole `fathers` set. The acceptance «< 150 ms» on Supabase is **not demonstrated**: native speed unknown; after loading, run `explain analyze` of three searches and, if above 150 ms, apply the rewrite (tested in PGlite in a form that returned only `id, source_key, rank`, same keys as the draft; the last `select` below adds the remaining columns and was **not run**):

  ```sql
  with q as (
    select public.ai_tsquery('english'::regconfig, p_terms_en, p_phrases_en) as en,
           public.ai_tsquery('spanish'::regconfig, p_terms_es, p_phrases_es) as es
  ), hits as (
    select p.id, coalesce(p.author, p.speaker) as grp,
           ts_rank_cd(p.tsv, case p.lang when 'es' then q.es else q.en end, 1) as rank
    from public.ai_passages p, q
    where p.collection = any (p_collections)
      and (p_doctrines is null or p.doctrine is null or p.doctrine = any (p_doctrines))
      and (p_speakers is null or p.speaker = any (p_speakers))
      and (p_authors is null or p.author = any (p_authors))
      and (p_works is null or p.work_id = any (p_works))
      and ((p.lang = 'es' and p.tsv @@ coalesce(q.es, ''::tsquery))
        or (p.lang <> 'es' and p.tsv @@ coalesce(q.en, ''::tsquery)))
  ), ranked as (
    select h.*, row_number() over (partition by h.grp order by h.rank desc) as n from hits h
  ), top as (
    select r.id, r.rank from ranked r where r.n <= greatest(p_per_group, 1)
    order by r.rank desc limit least(greatest(p_limit, 1), 60)
  )
  select p.id, p.source_key, p.collection, p.speaker, p.doctrine, p.lang, p.work_id, p.edition_id, p.locator,
         p.part, p.author, p.year, p.title, p.edition_label, p.licence, p.translated_by_ai, p.max_quote_words,
         p.href, p.refs, p.text, t.rank
  from top t join public.ai_passages p on p.id = t.id order by t.rank desc;
  ```

- **Top results through the real SQL functions over the real rows (PGlite):**
  - Q1 «¿Qué dice Ignacio sobre la Eucaristía?» (author filter): 1 `fathers:ignatius-smyrnaeans:lightfoot-1889:6.2:0` (0.1057), 2 `ignatius-ephesians:…:8.2:0`, 3 `ignatius-philadelphians:…:4.1:0`; Smyrn. 6.2 is **first** (acceptance: top 3 ✓). Ignatius Romans 7.3 and Ephesians 20.2 are not in the top 3 for these terms: they use «bread of God», not «eucharist/flesh».
  - Q2 «¿Qué dijeron los Padres sobre la presencia real?»: Irenaeus *AH* 5.14.1, Augustine *Tractates on John* 27.4, Tertullian *On the Flesh of Christ* 13.1, 10.0, 19.0, Augustine *De fide et symbolo* 10.4, Chrysostom *Hebrews* 13.11, Origen *De principiis* 3.5.2. Through `buildPack` (16 Fathers, 16 authors): Justin *1 Apol.* 66, Irenaeus 5.14.1, Clement of Alexandria *Paed.* 1.6.13, Tertullian, Origen, Hippolytus, Athanasius, Cyril of Jerusalem *Cat.* 13.21, Basil, Gregory of Nyssa, Chrysostom, Ambrose, Augustine, Cyril of Alexandria, Theodoret, Leo.
  - Q3 infant baptism, Fathers: Augustine *Tractates on John* 5.21, 5.4, 5.6, Origen *Matthew* 13.17, Chrysostom *1 Thess.* 10.20, Clement of Alexandria *Paed.* 1.5, Cyprian *Ad Fortunatum*, Chrysostom *1 Tim.* 13.28. Through `buildPack`: Didache 7 (Spanish AI edition), Theophilus, Tertullian *De baptismo* 9, Origen, Cyril of Jerusalem *Cat.* 3.5, Basil, Gregory Nazianzen 39.24, Gregory of Nyssa, Ambrose, Chrysostom, Augustine, Cyril of Alexandria, Tatian…
  - Q4 Sola Scriptura (traditions, es): `tradition:sola-scriptura:catholic:QE-8`, `catholic:cite:CEC105`, `catholic:cite:DV12`, `orthodox:QE-5`, `reformed:cite:RWCF1_4`.
  - Bible FTS stays as noisy as the design said (RV1909 «carne, sangre, comer»: Lev 17:14, Lev 26:29, Deut 12:23 first; John 6:54–56 only when the search is limited to John 6): confirms that Scripture must enter mainly through the traditions' cited references, which is what the pack does (Q1–Q5 packs hold John 6:51–58, 1 Cor 10:16, 11:23–26, Matt 26:26–28, Luke 22:19–20 for the Eucharist and John 3:5, Matt 28:19, Acts 2:38, Rom 6:4, Col 2:11–12, Titus 3:5–7 for baptism).
- **Pack on the real data (PGlite adapter, 5 questions):** 37 to 53 passages, ~6,000 to ~12,300 tokens (budget 24,000), `extra` 24, 16 distinct Father authors in four of five, 12 Bible refs, 20 tradition passages (4 × 5), all five traditions `found`, Pentecostal `no-page`; `buildPack` time 173 to 1,538 ms **inside PGlite WASM** (not representative).
- **Fixture pack** (`check-pack`): full run of 347 checks in about 1 s; the Eucharist pack has 42 passages with Baptist at 3 (the fixture holds only 3 rows for it).

## Verification

- `npm run verify`: **exit 0** (typecheck, lint with `check-ai` 4 files ok, `format:check`, build). The four ESLint warnings are in files that existed before (`data/scripts/build-eucharist.mjs`, `data/scripts/port-v1.mjs`, `e2e/reader-note-delete.spec.ts`, `tools/qa/focus.mjs`). `git status` shows, besides F's files, exactly this list under «Files»; nothing else touched.
- `check-pack`: 347 checks (fixture shape and keys, John 6:51–58 and 1 Cor 11:23–29 in both editions, equal tradition treatment, ≤ 3 per author, one edition per locator, Spanish edition preferred, canonical order, ids, notes last and outside coverage, budgets rich and brief, windows, every scope, named and missing authors, justification without pages, narrowed traditions, English labels and hrefs, empty search, OSIS parsing, lookups, window unit cases, row labelling, draft flag).
- No e2e spec: this block has no route and no UI.

## For INT

1. After LIM's migrations: Pedro's yes → `data/scripts/load-ai-passages.mjs --load` (≈ 54,000 rows, batches of 500; roughly 110 requests plus 55 key pages) → report table size → `explain analyze` three searches.
2. Consider LIM's migration rewrite of `ai_search_passages` (above) **before** loading if you want the 150 ms target; the TypeScript side does not change (same columns plus `rank`).
3. GOTCHA: «`collections.ts` rebuilds hrefs and names because `routes.ts` cannot be imported from Node; keep them in sync».
4. GOTCHA: «`edition_label` ends with ` [draft]` for draft editions; `passageFromRow` turns it into `draft: true` (the table has no status column)».
5. C-SRV: `Passage.draft` exists (optional); show or ignore. `WireQuote.edition` can use `editionLabel` as is (it already carries the licence and draft sentences); «Traducido con IA» still comes from `translatedByAi`. `PackPassage.window` of a `mine` passage is the whole note.
6. Pedro, decision 9 above (named Father: 3 passages) and the 258 MB size.

## Files (for INT)

Created or replaced, all inside the RET list:

```
src/content/ai-search/types.ts            (replaces F's stub; optional additions only)
src/content/ai-search/collections.ts
src/content/ai-search/windows.ts
src/content/ai-search/coverage.ts
src/content/ai-search/fixture-passages.json
src/content/ai-search/fixture-search.ts
src/content/ai-search/pack.ts             (replaces F's stub)
src/content/ai-search/verse-lookup.ts
src/content/ai-search/supabase-search.ts
src/content/ai-search/search.ts           (replaces F's stub)
data/scripts/load-ai-passages.mjs
tools/ai-checks/check-pack.mjs
docs/features/ai-real-ret.md
```

Throwaway (not part of the commit): `tmp/ai-ret/` (probes, `build-fixture.mjs`, `dump-rows.mjs`, `dump-verses.mjs`, `e2e-pglite.mjs`, `verify.log`) and, outside the repo, the PGlite scripts in the session scratchpad.

## Commit parts (for block INT, kit blocks 420–423 in the real repo; English, ≤ 72 chars)

| Part | Files | Message |
|---|---|---|
| 420 | `src/content/ai-search/types.ts`, `collections.ts`, `windows.ts`, `coverage.ts`, `fixture-passages.json` | `feat(ai): add passage collections, fixture, windows and coverage` |
| 421 | `src/content/ai-search/fixture-search.ts`, `pack.ts`, `tools/ai-checks/check-pack.mjs` | `feat(ai): build the evidence pack with quotas and checks` |
| 422 | `src/content/ai-search/verse-lookup.ts`, `supabase-search.ts`, `search.ts` | `feat(ai): add the Supabase search and the verse lookup` |
| 423 | `data/scripts/load-ai-passages.mjs`, `docs/features/ai-real-ret.md` | `feat(ai): add the passage loader and the retrieval notes` |

Money spent on the API: **$0** (no model call: the block has none). Secrets: none printed; scripts only checked «set / missing» (`NEXT_PUBLIC_SUPABASE_URL`, `SUPABASE_SECRET_KEY`, `ANTHROPIC_API_KEY` are set in `.env.local`; the remote answered 404 for `ai_passages` and `ai_settings`, 200 for `works`).
