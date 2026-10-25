# Import a dossier's page into `src/content` (Catholic pages with a `review-page.data.js`)

Done for the Eucharist (B2b, by hand) and Baptism (2026-10-24, with these steps). Justification, Papacy and Sola Scriptura Catholic pages are next. The Lutheran Eucharist (and every non-Catholic page) has no `review-page.data.js`, only a markdown dossier: it needs a new converter first.

## Steps

1. **Convert into a scratch folder, never straight into `src`** (a straight run rebuilds the registry from only the doctrines named and overwrites hand edits): `CONTENT_OUT=<scratch>/out node data/scripts/convert-dossier.mjs <doctrine>` (Node 24: `nvm use 24`). Read its report (unparsed locators and dates, pending markers, editions of other works).
2. **Merge the registry** with `node --import ./tools/register-alias.mjs data/scripts/merge-registry.mjs <scratch>/out`: the existing entry wins, an edition's `works` are united. Check the printed counts.
3. **Copy the page** `<scratch>/out/pages/<doctrine>/catholic.es.ts` to `src/content/pages/<doctrine>/` and register it in `src/content/pages/index.ts`.
4. **Finish it by hand** (the converter predates these fields; `npm run typecheck` lists what is missing):
   - `short` on every statement (lowercase, for use mid-sentence in «Grado de autoridad») and on every official objection (sidebar name, sentence case); `scriptureSubtitle`, `objections.subtitle`, `authority.subtitle`, `videos: { subtitle, items: [] }` (a section with no items is not rendered).
   - Straight quotes `"…"` to «…» in every string (single-quoted and double-quoted-with-escapes); balance checked.
   - Drop the debate-layer objections (`layer: "debate"`) and their ids from `objections.order` until that layer resumes (DECISIONS «Pedro's answers after B14»).
   - `authority.other` to `{}` (the converter read junk into it); keep `grades`.
   - Plain-text «(Catecismo N)» parentheses to `{c:CEC<N>|Catecismo N}` tokens when the id exists in the registry.
5. **Validate** with `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/check-content.mjs` (prints every failure): review language («dosier», file names, «sin confirmar», «verificación», «pendiente»; strip notes such as «sin español en el dosier» in the registry), «edition of another work» (an edition used by a citation of a work not in its `works`), unknown ids.
6. **Look at it**: `npm run verify`, `npm run e2e`, the page at 1440 and 390 in both themes. Record the wording you invented (short names) in DECISIONS as «agent's calls, to confirm».
