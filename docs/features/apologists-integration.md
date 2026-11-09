# Apologists layer: integrate the 2026-11-08/09 research into the Pasajes pages

Status: built 2026-11-09 in the clone `doctrina-apologists-web` (builder session, Sonnet 5.5); waiting for the verifier's read, the coordinator's merge and Pedro's visual approval. Follows `docs/features/passages-data.md` (B3, 2026-11-03).

## Intent

The research of the 2026-11-08/09 nights (Catholic, Baptist, Reformed, Lutheran, Orthodox; audio, video and 9Marks/Credo articles) lives in `docs/research/passages/apologists-*.md` and in the logs `apologists-c5-log*.md`. The site does not show it: it reads `data/passages/apologists/*.json`, built on 2026-11-03.

## Plan (/plan-run, 2026-11-09)

- Type: new, `docs/playbooks/apologists-import.md` (written today from B3; not validated).
- Goal and done-criterion: every record of the 20 research files that can be matched to a passage of its page appears in Pasajes, with its Spanish (AI, labelled) or its original; counts reported; verify and e2e green; Pedro's visual approval.
- Bounded by: DECISIONS 2026-11-09 (rosters accepted; 1 person is enough for Lutheran, Reformed, Orthodox); 2026-11-08 (method v2, standing «to verify before publishing»); 2026-11-03 late night (translate every English quote with AI, labelled; lazy loading required; long blocks parked); 2026-11-01 late night (no length limit while private; `[long-form: trim before public release]`); 2026-11-01 (independence of apologists).
- Measured gap (coordinator, 2026-11-09, dry run in a scratch folder, nothing written to the repo): the parser reads only part of the new research. Words of blockquote lines vs words parsed: Baptist Baptism 13,004 vs 6,673; Baptist Papacy 10,970 vs 4,025; Baptist Sola Scriptura 7,885 vs 2,250; Baptist Eucharist 4,499 vs 2,505; Reformed Baptism 8,552 vs 6,110; Reformed Papacy 4,106 vs 1,849; Reformed Sola Scriptura 3,649 vs 1,543; Reformed Eucharist 1,466 vs 905. Catholic is close (e.g. Baptism 17,213 vs 15,364). The sections «C5 additions» and «Method v2 additions» are probably not read. Not yet diagnosed.
- Out of scope: the original-language UI (Spanish originals on ES, AI translations with «Leer el original», the mirror on EN: ROADMAP «To build», a separate block); English UI strings (B3.5); changing variant G; trimming long blocks; verifying each apologist's standing.
- Setup (one session at a time, as Pedro allowed):
  | Role | Model · effort | Writes | Starts after |
  |---|---|---|---|
  | Builder, in a clone `doctrina-apologists-web` | Sonnet 5.5 · high | `data/scripts/apologists-md.mjs` (+ fixtures), `data/passages/**`, the `src/content/pages/**` files that `apply-passages.mjs` rewrites, `src/content/registry/verses.ts`, the feature doc | Pedro's ok and the cap |
  | Translator, called by the builder | Haiku, one agent at a time | `data/passages/translations/*.json` through the merge script | the parser extension is done and counted |
  | Verifier | Sonnet · medium | read-only: counts, exact text of a sample, page weight | the builder's report |
  The coordinator merges the clone into the real repo, runs `npm run verify` and gives the commit commands.
- Waiting for `doctrina-d3` is not required: translations are keyed by the quote's hash, so what `d3` adds later only needs its own delta (a second, small run).
- Expected cost: no estimate (Pedro: estimates overshoot). Measured reference: B3 on 2026-11-03 (parser, 6 translation agents, apply, verify) took the weekly counter 75 → 77 %. The new volume is larger (the Baptist files grew about threefold). The builder checks the counter at each step; Pedro sets the cap.
- Risks and open questions for Pedro:
  1. **Cap** for this run (Claude weekly 60 % now, 62 % was tonight's; the week resets Wednesday 18:00).
  2. **Translation refusals:** the Haiku agent refused full copyrighted transcripts in B3 and no workaround is allowed; the quotes it refuses stay in English, labelled. Codex could translate them only if Pedro says so explicitly.
  3. **Page weight:** the Baptist pages already weighed ~830 KB; the new data roughly doubles their quotes. The lazy route exists; the verifier measures.
  4. **Matching:** research rows come from the page's passage list, but new sections may cite verses that are not passages of that page (unmatched are listed, not forced).
  5. **Audio locators** («minutes X to Y», timestamped URLs) are a new shape; the builder shows one example in the report before translating.
- Checks during the run: usage guard before each heavy step; modification time every 15 minutes; one agent at a time; dry-run report to the coordinator before translations start.

## Acceptance

See the playbook's «Done when». Plus: no Spanish text is invented; every AI Spanish quote carries its original beside it and the label; `npm run verify` and the passages e2e pass.

## Result (builder, 2026-11-09)

**Diagnosis of the gap (`data/scripts/apologists-md.mjs`; research files untouched):** (1) 141 argument lines have no letter (`**Argument ·`, all Method v2) and the C5 lead-ins `**C5 addition (date) ·`, `**C5 further argument ·`, `**Argument B (added by B5) ·` were not argument headers, so their bullets were dropped without an issue; (2) the Method v2 bullet grammar `Work: «T»; show/channel: X; <date>; <URL>; minutes|minute range A–B` was not read (work, outlet, date and URL came from the identity text before «Work:», and the transcription date could pass as the quote date); (3) headings `baptism entries 6, 7…`, `Catholic Baptism entry 18 ·` and verses only inside parentheses gave no passage. Also added: persons unified by a mapping in the parser (Carlos Andres/Andrés Murr, Stephen/Stephen J. Wellum, Brant/Dr. Brant Pitre), a `language` field per quote (`es` for Murr's 37 quotes), locator shapes «minutes A–B», «minute range: A–B», «paragraph(s)/whole paragraph/segment beginning «X»». Fixture test: `data/scripts/test-apologists-md.mjs`. Regression: the 192 quotes that existed before come out identical (speaker, work, outlet, date, locator, URL).

**Parsed vs research (words in blockquote lines):** Baptist Baptism 12,925 / 13,004; Papacy 10,933 / 10,980; Sola Scriptura 7,855 / 7,895; Eucharist 4,443 / 4,499; Reformed Baptism 8,497 / 8,552; Papacy 4,091 / 4,106; Sola Scriptura 3,622 / 3,649; Eucharist 1,461 / 1,466; Catholic 17,183 / 17,213 (Baptism), 13,333 / 13,401, 16,592 / 16,862, 16,537 / 16,756.

**Per page (passages with 0 / 1 / ≥ 2 persons; sections imported of total; quotes placed: Spanish original / AI Spanish / English):**

| Page | Passages | Sections | 0 / 1 / ≥ 2 | Quotes (es / AI / en) |
|---|---|---|---|---|
| Baptism · Catholic | 19 | 21 of 21 | 0 / 1 / 18 | 1 / 50 / 0 |
| Baptism · Baptist | 61 | 34 of 35 | 18 / 13 / 30 | 19 / 97 / 0 |
| Baptism · Reformed | 22 | 21 of 21 | 2 / 11 / 9 | 0 / 37 / 0 |
| Baptism · Lutheran | 9 | 6 of 8 | 3 / 3 / 3 | 0 / 14 / 0 |
| Baptism · Orthodox | 10 | 2 of 5 | 8 / 2 / 0 | 0 / 2 / 0 |
| Eucharist · Catholic | 14 | 15 of 15 | 0 / 2 / 12 | 0 / 34 / 0 |
| Eucharist · Baptist | 47 | 19 of 20 | 19 / 10 / 18 | 8 / 61 / 0 |
| Eucharist · Reformed | 9 | 4 of 5 | 2 / 5 / 2 | 0 / 9 / 0 |
| Eucharist · Lutheran | 21 | 4 of 4 | 17 / 3 / 1 | 0 / 5 / 0 |
| Eucharist · Orthodox | 7 | 4 of 4 | 2 / 5 / 0 | 0 / 5 / 0 |
| Papacy · Catholic | 14 | 15 of 15 | 0 / 1 / 13 | 0 / 34 / 0 |
| Papacy · Baptist | 70 | 41 of 42 | 36 / 16 / 18 | 23 / 62 / 0 |
| Papacy · Reformed | 19 | 13 of 14 | 6 / 10 / 3 | 0 / 16 / 0 |
| Papacy · Lutheran | 15 | 1 of 1 | 14 / 1 / 0 | 0 / 1 / 0 |
| Papacy · Orthodox | 7 | 4 of 4 | 4 / 2 / 1 | 0 / 5 / 0 |
| Sola Scriptura · Catholic | 17 | 18 of 18 | 0 / 2 / 15 | 0 / 36 / 0 |
| Sola Scriptura · Baptist | 102 | 33 of 33 | 67 / 11 / 24 | 12 / 65 / 0 |
| Sola Scriptura · Reformed | 26 | 17 of 17 | 5 / 18 / 3 | 0 / 27 / 0 |
| Sola Scriptura · Lutheran | 10 | 1 of 3 | 9 / 1 / 0 | 0 / 1 / 0 |
| Sola Scriptura · Orthodox | 4 | 3 of 4 | 2 / 0 / 2 | 0 / 10 / 0 |

(The Catholic Spanish original of Baptism is the seeded Otálora quote. Baptist ≥ 2 persons come out within two of the research's own counts, 30/61, 18/47, 18/70, 24/102 against 30, 16, 20, 25: the research counts rows by its own entry numbers; the difference was not investigated.)

**Verifier (Sonnet, read-only) and what it found:** exact text of all 409 parsed quotes equals the research blockquotes (0 mismatches), URL, work and speaker match in all 409, every file is at 100 % of its blockquote words (the three Catholic files above 100 % because inline-only quotes add words), 571 AI quotes match `quotes.json` by hash and keep original and paragraph count, no speaker has two spellings on one page, six translations read side by side with their originals showed no omission, addition, wrong number or softened claim (transcript mishearings are carried over, not corrected; «great commission» came out «gran mandato»). **It found one real bug, fixed:** 14 quotes showed the retrieval date (8 or 9 Nov 2026) as their date, because the ISO pattern captured «retrieved 2026-11-08» / «reopened 2026-11-09» and M/D/YYYY dates (Staples 5/30/2023, Summers 2/1/2003, Waiss 8/15/2025, Sonna 7/28/2022) were not read; «date not established» (Scott Hahn ×8, one White) fell back to the retrieval date. Now retrieval clauses are ignored, M/D/YYYY is read (US order), «date not established» gives «Sin fecha indicada», and the White article reads «May 8, 1998» (it has `outlet:` instead of `show/channel:`). 12 quotes changed, all intended; fixtures added; pages re-applied, verify and passages e2e re-run green. No quote shows 8 or 9 Nov 2026; the one «noviembre de 2026» left is a real episode date (Sproul, 1 Nov 2026).

**Also for Pedro/the coordinator (not done by this block):** the Catholic Baptism page keeps 8 older quotes from `data/passages/apologists/seeds/baptism-catholic.json` (B3; Heschmeyer ×3, Horn ×2, Broussard ×2, Otálora ×1) that are not in the research `.md`; some join passages with «[…]». Murr papacy «17 de agosto de 2026» comes from a «channel inventory; video page not fetched» note in the research. «Dr.» is kept for Pitre, Edmon and Azarvan as the research writes them.

**Not matched (13 sections, listed not forced):** Baptist Baptism «Household baptisms · Wellum answers the paedobaptist argument» (no verse in the heading); Baptist Eucharist «John 6 and 1 Cor 10:3–4 (not in the core set)»; Baptist Papacy «Philippians 1:1 · Ortlund» (no such passage on the page); Reformed Eucharist «Hebrews · Sproul» (no chapter); Reformed Papacy «Christ the head of the body · Ferguson (Eph 4:15–16)»; Lutheran Baptism «Other passages Cooper reads for baptism…» (5 quotes) and «Acts 16:33 and the household baptisms»; Lutheran Sola Scriptura «2 Tim 3:16–17» and «Matt 15:1–9»; Orthodox Baptism «Gal 3:27» and two «Other passages the … reads»; Orthodox Sola Scriptura «2 Tim 3:15–17». Three older notes remain from B3 (entry numbers that do not overlap the heading's verses: Baptist Papacy entries 1 and 2, Reformed Papacy 15, Catholic Sola Scriptura 3).

**Translation:** 147 quotes (30,477 words) in 7 batches and 184 titles, Haiku, one agent at a time, the same prompt each time; Murr's 37 Spanish quotes excluded. Declined by the translating model: none. Merge checks passed (paragraphs, length ratio); numbers differ and were kept for a look in 7 quotes (word-numbers such as «Hebrews one», «16th century» → «siglo XVI»; the verifier read a sample). The agents kept transcription errors as they stand. No quote stays in English.

**Locator fallback («Ver la página enlazada»):** from 33 down to 16, all Catholic (baptism 7, eucharist 3, papacy 4, sola scriptura 2): free-text notes of web articles and publisher transcripts of an unrepeated shape («two paragraphs beginning “X” and “Y”», «reply after…», «Horn turn…», «sentence-bounded segment from… to…»). Listed, not fixed.

**Page weight (production build, HTML of `/es/doctrines/<d>/<t>/passages`, raw / gzip):** unchanged, 605 to 726 KB raw (Baptism·Baptist 673,749 → 673,637; Sola Scriptura·Baptist 725,605 → 725,576) and 66 to 75 KB gzip, because quotes load lazily per passage. Largest lazy payload in the verifier's report.

**Verify:** `npm run verify` exit 0 (only the 4 existing lint warnings); `e2e/passages.spec.ts` 16 passed (one assertion changed, see below). Doctrine specs (`doctrine-02-pages`, `-answers`, `-header`, `-witnesses`, `-lede-emphasis`, `-practice`, `-rail`): 173 passed, 26 failed in `doctrine-answers` (the simplifier button now matches the toggle selector, strict-mode violation), `doctrine-header` (Ignatius tip «c. 107–108» against the expected «c. 107–110»; «Lo que todas comparten» text); none touches Pasajes or the apologists data and none was run against the previous build, so «not caused by this change» is an inference, not a measurement.

**Screenshots:** Baptism·Baptist at 1440, 768, 390 and 360 (`scratchpad/shots/`): Marcos 1:4 (0 persons, button muted), Mateo 3:16 (1 person, AI), Mateo 3:6 (2 persons, one AI translation of James White and one Spanish original of Murr), Marcos 16:16 (1 person, Spanish original), Hechos 2:38 (4 persons, AI). No horizontal overflow at any size. No independent critique pass (not a UI change).

**Agent's calls, to confirm:**
- «Sin fecha indicada» is shown as the date of the Schreiner video cuts (the research gives none: `show/channel: YouTube; ;`).
- The outlet of those cuts is the research's «YouTube» (the host church is in the identity text, not in the outlet field).
- Persons unified as «Carlos Andrés Murr», «Stephen J. Wellum», «Dr. Brant Pitre» (the majority or correct form).
- A Spanish-original quote carries neither `lang` nor the AI label (the page is Spanish); the English-side treatment is the separate original-language block.
- `e2e/passages.spec.ts`: the «muted where there is no data» assertion used 1 Tim 2:4 on Catholic Baptism, which now has data (Joan Summers); it checks Eph 5:26 on Lutheran Baptism instead.
- M/D/YYYY dates are read in US order (Catholic Answers prints 5/30/2023, 8/15/2025, 7/28/2022); 2/1/2003 and 3/4/2023 are therefore 1 Feb 2003 and 4 Mar 2023.
- Locator wording for new shapes: «Minutos A a B», «Párrafo(s) que empieza(n) «X»», «Fragmento que empieza «X»» (the end of a «from… to…» range is dropped).

**Files:** `data/scripts/{apologists-md,apologists-load,translation-batches}.mjs`, `data/scripts/test-apologists-md.mjs` (new, not wired into `npm run lint`: run it with `node`), `data/passages/apologists/*.json` (20), `data/passages/translations/{quotes,titles}.json`, the 13 pages `src/content/pages/{baptism/{baptist,catholic,lutheran,reformed},eucharist/{baptist,catholic,reformed},papacy/{baptist,catholic,reformed},sola-scriptura/{baptist,catholic,reformed}}.es.ts`, `e2e/passages.spec.ts`, this file, `docs/GOTCHAS.md`. `src/content/registry/verses.ts` unchanged.

## Retro

(filled by /retro)
