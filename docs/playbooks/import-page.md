# Import a dossier's page into `src/content` (Catholic pages with a `review-page.data.js`)

Done for the Eucharist (B2b, by hand) and Baptism (2026-10-24, with these steps). Papacy and Sola Scriptura Catholic were imported with the finishing automated (2026-10-30); Justification is next. The Lutheran Eucharist (and every non-Catholic page) has no `review-page.data.js`, only a markdown dossier: it needs a new converter first.

## Steps

The converter finishes the page itself (2026-10-30): nothing is edited by hand in the page or the registry (DECISIONS «Pages are never corrected by hand»). To change the result, change the dossier data, `data/scripts/dossier-fields.mjs` (the `short` names and the topic, agent's calls to confirm), the SCRUBS or the rules in `data/scripts/convert-dossier.mjs`, and convert again.

1. **Add the doctrine's fields** to `data/scripts/dossier-fields.mjs`: `topic`, a `short` for every statement id and every official objection id (the converter throws when one is missing). Statement shorts are lowercase, for use mid-sentence in «Grado de autoridad»; objection shorts are sentence case, the sidebar name.
2. **Convert into a scratch folder, never straight into `src`**: `CONTENT_OUT=<scratch>/out node data/scripts/convert-dossier.mjs <doctrine>` (Node 24: `nvm use 24`). Read its report (unparsed locators and dates, pending markers, `unbalancedQuotes`). It already turns straight quotes into «…», drops the debate layer, sets the subtitles, `videos` with no items and `authority.other` to `{}`.
3. **Merge the registry** with `node --import ./tools/register-alias.mjs data/scripts/merge-registry.mjs <scratch>/out`: the existing entry wins, an edition's `works` are united. Because the existing entry wins, never merge twice with a different result: if the validator makes you change the converter, restore the four registry files from `git show HEAD:src/content/registry/<name>.ts > src/content/registry/<name>.ts` (a read-only git command and a plain file write) before merging again.
4. **Copy the page** `<scratch>/out/pages/<doctrine>/catholic.es.ts` to `src/content/pages/<doctrine>/` and register it in `src/content/pages/index.ts`.
5. **Format** the generated files: `npx prettier --write` on the four registry files and the page (`npm run verify` fails on them otherwise).
6. **Validate** with `node --disable-warning=MODULE_TYPELESS_PACKAGE_JSON --import ./tools/register-alias.mjs tools/check-content.mjs` (prints every failure). Review language («dosier», file names, «sin confirmar», «verificación», «pendiente») is removed with a SCRUBS entry in the converter, never in the output.
7. **Look at it**: `npm run verify`, the specs, the page at 1440 and 390 in both themes. Record the wording the agent invented (the shorts, the scrubs) in DECISIONS as «agent's calls, to confirm».

Eucharist and Baptism were finished by hand before this and keep fields the converter does not produce (for example the objection themes): the converter refuses to run on them until their fields are added.
