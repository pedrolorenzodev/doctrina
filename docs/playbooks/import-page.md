# Import a dossier's page into `src/content` (all 20 pairs, 2026-10-30)

The four Catholic pages come from a hand-built data file (`review-page.data.js` per doctrine). The other 16 come from `review-page.<tradition>.data.js` files that **map the verified Markdown dossier**: the converter hands each one a `dossier` object, so no quote is typed. Nothing is ever corrected in a page or in the registry by hand (DECISIONS 2026-10-30 «Pages are never corrected by hand»): change the dossier, the data file, `data/scripts/dossier-fields.mjs` or the converter, and convert again.

## The pieces

- `data/scripts/convert-dossier.mjs`: `node convert-dossier.mjs <doctrine>[:<tradition>] ...` (default tradition `catholic`; Node 24). Builds a page and a registry in `CONTENT_OUT`. Fails if a non-Catholic data file holds a quote that is not verbatim in a dossier it read (site-text status lines are exempt). SCRUBS removes review language and `(QE-n)` cross-references; `guillemets` turns straight quotes into «…».
- `data/scripts/dossier-fields.mjs`: per pair, `title`, `topic`, the subtitles, and the `short` of every statement (and objection). The converter throws when one is missing. Shorts and subtitles are agent's calls (DECISIONS).
- `data/scripts/dossier-md.mjs` (`readDossier`), the readers a data file can call (`dossier.*`):
  - `quote(block, label)` and `citationsOf(block)`: bullet lists with `- AC X, German (...): «...»` and indented language sub-bullets (the Lutheran Eucharist pilot, numbered sections `## 1.`).
  - `quoteEntries(block)`: blockquotes `> “original”` then `> «Spanish»` followed by a `— WORK loc, language, p. N` line (Lutheran, Reformed, Baptist Codex drafts; Spanish originals of the 1880 Monterrey Westminster, English originals with AI Spanish, FIFO pairing).
  - `boldEntries(block)`: `**Dositheus XVI**, Greek, p. 425:` headers followed by bare quote lines (the Orthodox dossiers; also councils and the 1895 encyclical).
  - `block(id)`, `siteText(block, label)`, `table(section)`, `quotedParagraphs`, `lineQuote`, `languageQuotes`, plus `dossier.text` (the whole Markdown) for a regex. `readOtherDossier(doctrine, tradition)` reads another dossier (the Lutheran authority table; a status line).
- Works: `data/scripts/dossier-works.mjs` (`WORK_DEFS`: title regex and locator scheme; add the work here before citing it).
- `data/scripts/merge-registry.mjs`: unites the excerpts of a shared citation (error if the same id names another passage), unites an edition's `works`, keeps the existing entry otherwise and prints «work differs».

## A data file, by recipe (model: any `review-page.*.data.js` of 2026-10-30, e.g. `baptism/review-page.reformed.data.js`)

`ED` (edition strings; a label «Inglés:», «Griego:», «Español:»... splits the edition by language; an AI Spanish must not sit under an official Spanish edition), `LINKS`, `WORK` (title, short, date per siglum), `cite(work, loc, excerpt)` building `SRC`, `entriesOf(text, fallback)` from a reader, `say(lead, entry)`, then `DEFINITION`, `QE` (each: `id`, optional `question` and `status` (ids of `Estado actual` citations), `text`, `grades` with the tradition's own category ids, `sources`), `PORQUE` (`intro`, `fathers: []`, `note`, `closing`), `ESCRITURA` (Spanish book names, `Jeremías`, `Deuteronomio`, `Josué` exist; chapter ranges like `2-3` expand only the first chapter: write `2; 3`), `VIVE`, `GRADES`, `OBJ = {}`, `META`. Statements that the dossier gives only as prose become Spanish sentences that attribute (never a Spanish quote made from an English original that the verification left English-only: Philaret). A harsh quoted wording needs a status line (`status`): reuse an existing `STWCF~p`/`ST1895~p` or the dossier's own Spanish «Estado» text; a site-written line is allowed and flagged in DECISIONS. Register the page in `src/content/pages/index.ts`.

## Steps, per batch (convert every uncommitted pair together)

1. Restore the four registry files from HEAD with `git show HEAD:src/content/registry/<name>.ts > src/content/registry/<name>.ts` (read-only git, a plain file write) **if the registry has uncommitted changes**, then convert **all pairs whose registry changes are not committed yet in one run** (an id merged earlier by a run that did not include them is lost). The scratch folder is outside the repo.
2. `merge-registry.mjs <scratch>`; read «work differs» and the counts.
3. Copy `<scratch>/pages/<doctrine>/<tradition>.es.ts` to `src/content/pages/<doctrine>/`, then `npx prettier --write` on the registry and the pages.
4. `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/check-content.mjs` and `npm run typecheck`.
5. Regression: the pages of earlier pairs must come out **byte-identical** after a reader or converter change (keep a copy of them before).
6. `npm run verify`, the page specs (`e2e/lutheran-eucharist.spec.ts` holds the per-page checks), and a sweep of the rendered text of every new page: English words, `»»`, straight quotes, `{c:`, `null`, Greek letters in Spanish text. Look at one screenshot per new family of content.
7. Record the wording you invented (shorts, leads, scripture sentences, status lines, omissions) in DECISIONS as «agent's calls, to confirm», and give Pedro the commit commands (code and data; docs apart).

Limits known: no objections on the non-Catholic pages (the section and the tree row hide themselves), no print pages, the Fathers and reasons of «Por qué» have no field beyond the intro and closing, citations with a locator and no excerpt are accepted (their window shows work, locator, date and link).
