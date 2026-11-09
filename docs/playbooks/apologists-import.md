# Import the apologists research into the Pasajes pages

Written 2026-11-09 from the one run of this type (B3, 2026-11-03, `docs/features/passages-data.md`). **Not yet validated**: the first run under this playbook ends with `/retro`.

## Use when

`docs/research/passages/apologists-<tradition>-<doctrine>.md` gained records (new people, new cuts) that the Pasajes pages do not show yet. Changes data and parsers, never the design of variant G.

## Steps

1. **Dry-run the parser** into a scratch folder (copy `build-apologists.mjs` with `OUT` and `SRC` pointing at absolute paths; it needs `apologists-md.mjs` and `passage-refs.mjs` beside it). Compare per file the words in blockquote lines (`grep -E '^\s*> '`) with the words the parser kept. A gap means a section shape the parser does not read: extend `apologists-md.mjs` (tests with fixtures from the real files), never touch the research files to fit it.
2. **Run `build-apologists.mjs`** in the repo; read the report (sections, quotes, words, issues, `locatorFallback`).
3. **Translate** the new quotes and titles: `translation-batches.mjs` (batches by passage rank), one agent at a time, `merge-translations.mjs` checks (same paragraph count, length ratio, numbers). Quotes already in Spanish (Spanish speakers) get no translation and no AI label. A refusal by the translating model is not worked around: what it refuses stays in the original language, labelled (DECISIONS 2026-11-03 late night).
4. **`apply-passages.mjs`** for the pairs touched. Unmatched sections are listed, never forced onto a passage.
5. **Verify**: `npm run verify`, `e2e/passages.spec.ts` and the doctrine page specs; page weight and lazy loading on the heaviest pages (Baptist, 61 to 102 passages) measured; screenshots at 1440, 768, 390 and 360 of one passage with 0, 1 and 2 or more persons, plus one with a Spanish original and one with an AI translation.
6. **Report** counts as B3 did: sections imported and unmatched, passages with 0, 1 and 2 or more persons per page, quotes in Spanish, in AI Spanish and in the original. Commit commands in blocks: data and scripts together, docs apart.

## Done when

All 20 pairs rebuilt, counts reported, verify and e2e green, screenshots compared, Pedro's visual approval before the commit commands.

## Lessons

- B3: the translating model declined full texts of in-copyright works; the rest was shown in English, labelled.
- B3: the Baptist pages carried every quote in the HTML (~830 KB): the lazy per-passage route exists (`.../passages/data/[n]/[part]/route.ts`); check it still keeps pages light after the data grows.
