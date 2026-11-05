# Backend stages 1 and 2: corpus and word data in Supabase

Status: **built and verified on 2026-11-05** (session «Backend», duplicate repo `doctrina-be`, started 2026-11-04). Plan: `docs/research/backend/plan-2026-11-04.md`. Corpus background: `docs/features/corpus-bibles-and-fathers.md`. Not committed: Pedro commits (messages below).

## What is in Supabase now (project `odmmwppyaimarxkzpyuw`, `sa-east-1`)

| Data | Rows | Tables | Public read |
|---|---|---|---|
| 5 Bibles (RV1909, KJV, BSB, DRA, WEB) | 164,462 verses, 6,229 chapters, 2,493 structure rows, 9,832 verses with red letters | `translations`, `books`, `verses`, `chapters`, `chapter_structure` | yes (public domain) |
| 150 English Fathers' works | 150 works, 150 editions, 15,654 divisions | `works`, `editions`, `divisions` | yes |
| 22 Spanish Fathers' works (AI-assisted, cc0-translation) | 22 editions (`language = 'es'`), 2,168 divisions | same tables | yes |
| Word data (STEPBible, «do not redistribute») | 1,189 chapters, 17,025 lexicon entries, 17,039 occurrence rows, 66,171 places, 27,277 Spanish glosses | `word_*` | **no**: `anon` and `authenticated` have no grant (HTTP 42501), RLS on with no policy, read only with the secret key |
| Manifest | 181 rows (`corpus_manifest`: 5 Bibles, 172 Father editions, 4 word datasets) | | yes |

Database size: **131 MB** of the 500 MB free plan (limit for loading: 400 MB).

## How to switch

- `CORPUS_SOURCE=supabase` (unset or anything else = `local`, the default for tests and offline work) switches **all three**: Bibles, Fathers (list, reader, Spanish editions) and the word data. Needs `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` (Bibles, Fathers) and `SUPABASE_SECRET_KEY` (word data, server only; never `NEXT_PUBLIC_`).
- Loaders (idempotent, hash-checked, dry run by default): `node --import ./tools/register-alias.mjs data/scripts/load-corpus.mjs [--load]` (Bibles), `... --fathers [--load]` (English and Spanish Fathers), `node data/scripts/load-words.mjs [--load] [chapters|lexicon|occurrences|small]` (words; reads `data/site/words`). They read the secret key from `.env.local`.
- Checks: `node tools/check-supabase.mjs` (counts with both keys), `tools/check-bible-parity.mjs [--all]`, `tools/check-fathers-parity.mjs`, `tools/check-words-parity.mjs`, `tools/dump-word-views.mjs <out>` (run once per source and `cmp`), `tools/check-words.mjs` (runs on either source). The parity tools need `--env-file=.env.local` or the `.env.local` loading they do themselves.

## Decisions made while Pedro was away (agent's call; move the lasting ones to `DECISIONS.md`)

1. The remote project lacked the sixth migration (`chapter_structure` + `verses.red`): applied from `supabase/migrations/20261028030000_corpus_structure_red.sql`. Remote migration version numbers differ from the file names (the MCP assigns its own); content is identical.
2. Advisors flag unindexed foreign keys (`verses`, `chapters`, `chapter_structure` on `book`; `editions.translated_from`), INFO level. Left: `verses_book_idx` was dropped on purpose (size), `books` and `editions` are never deleted from, every real query filters on the primary key prefix. The security advisor shows `rls_enabled_no_policy` (INFO) for the seven `word_*` tables: intended, that is how they stay server-only.
3. `translations.ordinal` (migration `translations_ordinal`): the reader lists translations in manifest order; `order=id` changed it.
4. `editions` gets `title`, `status`, `translated_from` (FK to the English edition) and `extra json` (every other provenance field: verification, licence evidence, coverage notes, `translatedFrom.file/sha256`). The Spanish file carries its own work title, so the title lives on the edition; the `works` row is written only from the English file.
5. `getFatherWorks()` returns metadata without divisions (`FatherWorkSummary`); only `getFatherWork(id)` loads divisions. Every caller of the list only read metadata, so no page changed.
6. Word data model: documents where the data is a document, rows where it is queried. `word_chapters` (verse tokens per chapter) and `word_lexicon` (entry) keep the original JSON as the **`json` type, not `jsonb`**: `jsonb` reorders object keys and the word page renders `forms` in file order. `word_occurrences` + `word_places` (one row per word and book, `refs text[]`, generated `ref_count`) are the precomputed per-word per-book counts. Words are not normalized to one row per token: the aggregates already exist and a token table would cost about 90 MB for nothing the pages ask.
7. **`public.word_scan(p_id)`** (SQL function, `stable`, executable only by `service_role`): returns, for one word, the tokens of every verse where it occurs, in one round trip. The word page used to read every chapter file (up to ~700 chapters) for words under 1,200 verses; over Supabase that was 700 requests. Over 1,200 verses the page does not list places (`placesCap`), unchanged.
8. Bulk reads replace per-item reads wherever a page looped: `getLexiconBrief` (the chapter's words: 1 request for 150 ids, was 2 per word, and the cause of the first Supabase build failing with timeouts), `getPlaceWords`, `getBibleVerseTexts` (the word page printed up to 1,155 verses one by one). The local source implements the same methods.
9. Data Cache: `fetch` with `cache: "force-cache"` and tags `corpus-bible`, `corpus-fathers`, `corpus-words`. Divisions are read 40 rows per request because the cache refuses entries over 2 MB (a page of 400 Augustine tractates was 2.8 MB). The REST helper retries 4 times on network errors and 408/429/5xx (a transient `fetch failed` happened once).
10. The word source switch follows `CORPUS_SOURCE` (one switch) and throws if `SUPABASE_SECRET_KEY` is missing; the module does not use the `server-only` package because the tools run it under plain Node. It cannot reach a client bundle anyway (it is reached only from `get-words.ts`, which `get-chapter-word-view.ts` and the server pages import; none is imported by a client component).
11. `get-chapter-word-view` builds `lexicon` in first-appearance order (it was completion order: the `/api/words` bodies differed between two builds of the same source).
12. The words folder was replaced by `doctrina-pal/data/site/words` (read-only copy, newer: 2026-11-04, Spanish glosses Greek 4,670/5,583 and Hebrew 9,863/11,442; its `check_words.py` exits 0). My previous folder is in the session scratchpad (`words-backup`). The pal folder may still grow: re-run `load-words.mjs --load` after copying again; it deletes and reloads the datasets whose hash changed.
13. The session clock jumped overnight (it was 09:01 on 2026-11-05 when I resumed); the weekly counter had reset (1 %), so the by-the-clock caps of 2026-11-04 no longer applied. Usage stayed far below any cap.

## Measured sizes

| Moment | Database size |
|---|---|
| Stage 0 (empty tables) | 11 MB |
| After the 5 Bibles | 47 MB (+36 MB) |
| After the Fathers (English 15,654 + Spanish 2,168 divisions) | 83 MB (+36 MB) |
| After the word data | 130 MB (+47 MB: chapters 18 MB, lexicon 9.7 MB, occurrences 6.7 MB, places 9.9 MB, glosses and the rest) |
| Final | 131 MB |

Largest relations: `verses` 35 MB, `divisions` 35 MB, `word_chapters` 18 MB.

## Parity results

| Check | Result |
|---|---|
| Bibles, every chapter of the five editions: verses, red letters, structure, single verse, chapter index, translations list (`check-bible-parity.mjs --all`) | 18,693 comparisons, 164,462 verses, **0 differences** |
| Fathers, all 150 English and 22 Spanish files, full text and provenance (`check-fathers-parity.mjs`; null and absent keys equal) | 301 comparisons, 17,822 divisions, **0 differences** |
| Words (`check-words-parity.mjs`): 1,189 chapters, 17,023 lexicon entries and their occurrences, parse names, shard ids, with key order compared as text | 35,393 comparisons, **0 differences, 0 key-order differences** |
| Word pages and chapter views (`dump-word-views.mjs` on both sources, `cmp`): 56 words × 2 locales (the 6 largest listable words, a sample, 4 unlisted) and 7 chapters × 2 locales | **byte-identical** (7.3 MB) |
| `tools/check-words.mjs` (John 6 regression included) | ok on `local` and on `supabase` |
| Whole site built with `CORPUS_SOURCE=supabase` (first build, Bibles and Fathers only) against the local build: SSR HTML with scripts stripped | 3,449 of 3,457 pages identical; the other 8 differ only by a `next-size-adjust` meta tag; 2,652 `/api/bible` bodies identical |
| Flight payload (`.rsc`, inline scripts) | not comparable between two builds even of one source (row ids and chunk order change); not used |
| Anonymous access to word tables and `word_scan` | HTTP 42501 permission denied |

## End-to-end results

- Full Playwright suite (chromium, 3 workers) on a `CORPUS_SOURCE=supabase` build (Bibles and Fathers from Supabase, words local): 1,168 passed, 21 failed, 1 skipped.
- The 21 failures run serially: 14 fail, 11 pass, **and the same 14 fail on the `local` build** (doctrine pages «Dónde aparece», search index, tradition tabs, selected states, home sections, scripture, why, early-christians): not caused by this work, they come from the unfinished work of the other sessions copied into the duplicate. The other 7 are animation-timing specs that fail only under parallel load.
- Full suite on the final `local` build: 1,175 passed, **14 failed** (the same 14), 1 skipped.
- `npm run verify` (typecheck, lint with its checks including `check-words`, format check, build) on `local`: passes; the only warnings are three unused variables in files this work did not touch.
- Words on the final Supabase build (Bibles, Fathers and words all from Supabase): `words-page`, `reader-panel-words`, `reader-panel-uses`, `father-reader`, `fathers-corpus`, `father-edition`, `reader-chapter`, `reader-translation`: **83 passed**.
- Mistake caught on the way: a second `next start` on port 3901 fails with `EADDRINUSE` and the old server (`next-server`, not matched by `pkill -f "next start"`) kept serving, so for a while the e2e ran against a stale server. Every number above comes after killing the listener by PID and checking the server log for `EADDRINUSE`.

## Production readiness (step 1.4)

- **Static stays static.** Pages built with `generateStaticParams` (Bibles 2,652 chapters × 2 locales, Fathers' works 300 pages, `/api/bible`, `/api/words`) read Supabase only at build: 3:11 on `supabase` against 2:08 on `local` (all three sources). Runtime reads exist only for the dynamic word page (`/[lang]/words/[word]`, dynamic because it reads `?from=`) and are cached by the Data Cache with tags.
- **Latency from this machine** (Buenos Aires, Cloudflare edge EZE to `sa-east-1`), median of 15: one chapter 97–105 ms, 40 divisions 142 ms, a one-row read 112 ms (min 68 ms). Not measured from Vercel `gru1`: no deployment from this session; a function in São Paulo next to a `sa-east-1` database should be a few milliseconds per round trip; confirm on the first preview.
- **The dynamic word page cold** (this machine, empty cache): sarx 1.8 s, logos 1.5 s, θεός (1,155 verses) 3.9 s; warm 30–50 ms; θεός warm 2.1 s (its `word_scan` answer is 1.83 MB and a page with more verses passes the 2 MB cache limit: those pages are never cached). **This is the one thing to improve before real traffic**: options, in order of effort: (a) pre-warm the cache after a deploy by requesting the most visited words; (b) make the page static with ISR by moving the `?from=` part out of the server render (a UI change, not mine to make); (c) trim what `word_scan` returns (only the matching tokens, not whole verses).
- **Invalidation.** After reloading data: `revalidateTag("corpus-bible", "max")`, `"corpus-fathers"`, `"corpus-words"` from a Route Handler or Server Action (none exists yet: Stage 3 builds the publish step), or redeploy. The corpus is immutable, so `force-cache` never expires on its own.
- **Free plan.** The project pauses after 7 days of inactivity (restorable); a paused project makes every build and every uncached read fail. Pro never pauses and has daily backups. A transient PostgREST schema reload after a migration made one call wait 112 s: apply migrations outside builds.
- **Not done / left:** a staging project or branch; `supabase` CLI migrations in CI; backups (the local `data/` folders are still the only copy of the sources: copy them elsewhere); trimming the verse-text queries for the word page (1,155 verses take 2 s uncached).

## What remains for deployment (Pedro)

1. Vercel project environment variables (Production and Preview): `CORPUS_SOURCE=supabase`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `SUPABASE_SECRET_KEY` (mark it **Sensitive**, server only). Function region `gru1` (São Paulo).
2. Decide the plan (Pro recommended before anyone outside the close circle uses it).
3. Copy `data/` somewhere safe (it is gitignored and has no backup).
4. After merging this work into the real repo: re-run the three loaders there only if the local data changed (the remote already holds today's data).

## Notes for Stage 3 and beyond (not started)

- The pattern that worked: interface with two implementations behind one environment variable; a loader with a dry run, hash per dataset in `corpus_manifest` and a count check; a parity tool that compares both sources on everything, not on a sample. Reuse it for editorial documents.
- Look for loops before loading: any `await` inside a loop over ids is an N+1 once the source is remote (found three). A SQL function that returns exactly what the page needs beats paging raw rows.
- Keep documents as `json` when key order matters; use `jsonb` only where order is irrelevant and indexing helps.
- Every new table needs its own grant decision: new tables here are readable by `anon` through default privileges (a probe returned 0 rows, not 42501) until `revoke` is run; the word tables got an explicit `revoke all ... from anon, authenticated`.
- PostgREST reloads its schema cache after `notify pgrst, 'reload schema'`; on this free instance a call during the reload waited 112 s. Run migrations when nothing builds.
- The Spanish Fathers use English ordinals in the reader (`get-father-works-es.ts` aligns by locator); the database stores each edition's own ordinals.

## Shared files touched (merge notes for the real repo)

Files other sessions own or also changed (check for conflicts before merging):
- `src/content/get-father-works.ts` (rewritten: types moved to `father-text/father-types.ts`, source switch) and `src/content/get-father-works-es.ts` (**new in the Padres session, untracked here**; I changed its read to go through the source). The page `src/app/[lang]/history/works/[work]/page.tsx` is **not** touched by me and keeps working (same exports).
- `src/content/get-bible.ts`, `src/content/bible/{bible-source,local-source,supabase-source}.ts`, `src/content/get-words.ts`, `src/content/get-chapter-word-view.ts`, `src/content/get-word-page.ts` (scan and verse texts), `data/scripts/load-corpus.mjs`, `.env.example`.
- No file under `src/features/`, `src/app/`, `panel-*`, doctrine or tradition pages was edited.

## Steps log (files and commit messages)

Stage 0 — verify: `tools/check-supabase.mjs`, `docs/features/backend-stage-1-2.md`. Commit: `chore(backend): add supabase check and stage notes`.

Step 1.1 — Bibles: `supabase/migrations/20261104130000_translations_ordinal.sql`, `data/scripts/load-corpus.mjs`, `data/scripts/supabase-load.mjs` (new), `src/content/bible/supabase-source.ts`, `src/content/supabase-rest.ts` (new), `src/content/corpus-env.ts` (new), `src/content/get-bible.ts`, `tools/check-bible-parity.mjs` (new). Commit: `feat(corpus): load the five Bibles into supabase and read them`. Look at: `CORPUS_SOURCE=supabase npm run dev`, open a chapter; run `check-bible-parity.mjs --all`.

Steps 1.2 and 1.3 — Fathers: `supabase/migrations/20261104140000_editions_provenance.sql`, `data/scripts/load-corpus.mjs`, `src/content/father-text/{father-types,local-father-source,supabase-father-source}.ts` (new), `src/content/get-father-works.ts`, `src/content/get-father-works-es.ts`, `tools/check-fathers-parity.mjs` (new). Commit: `feat(corpus): load the Fathers into supabase and read them`. Look at: `/es/history/works/irenaeus-against-heresies` and `/es/history/works/1-clement` with `CORPUS_SOURCE=supabase`.

Step 2 — words: `supabase/migrations/20261105100000_words.sql`, `20261105101000_words_json_columns.sql`, `20261105110000_words_scan.sql`, `data/scripts/load-words.mjs` (new), `src/content/words/{words-source,local-words-source,supabase-words-source,shard-of}.ts` (new), `src/content/get-words.ts`, `src/content/get-chapter-word-view.ts`, `src/content/get-word-page.ts`, `src/content/get-bible.ts` and the Bible sources (bulk verse texts), `src/content/supabase-rest.ts` (retry), `tools/check-words-parity.mjs`, `tools/dump-word-views.mjs` (new), `.env.example`. Commit: `feat(words): load the word data into supabase and read it server-side`. Look at: a word page on `CORPUS_SOURCE=supabase` (`/es/words/G4561`, `/es/words/G2316`), `node tools/check-supabase.mjs`, the anon check below.

One-line anon check (should print 42501): `curl -s -H "apikey: $NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY" "$NEXT_PUBLIC_SUPABASE_URL/rest/v1/word_lexicon?limit=1"`.

Whole stage in one commit if preferred: `feat(backend): load the corpus and word data into supabase`.

## Usage log

| Time | Session | Weekly |
|---|---|---|
| 2026-11-04 13:34 | 35 % | 85 % |
| 2026-11-05 09:01 | 4 % | 1 % |
| 2026-11-05 09:30 | 9 % | 2 % |
| 2026-11-05 09:51 | 13 % | 3 % |
| 2026-11-05 10:36 | 14 % | 3 % |

## State

Stages 0, 1 and 2 done and verified. Remaining only what is under «Production readiness / Not done» and «What remains for deployment». Next, if asked: pre-warming or ISR for the word page, Stage 3 (editorial publish pipeline), staging project.
