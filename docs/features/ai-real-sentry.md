# AI block S-ENTRY: entry points for «any paragraph»

**Proposal (private Artifact):** https://claude.ai/artifact/RAAujgg9cZ6EoZhxV2Qqir (source: `docs/research/proposals/simplifier-entry/index.html`)

## State
- **Done:** Step 1 (proposal), Step 2 (A·1 + B built) and the follow-up: the two broken specs fixed, the four other failures classified against a clean clone of the real tree, the switch's hover colour reverted, the design note for reviewed-only pages written (nothing built for it).
- **In progress:** nothing.
- **Verification now:** `npm run verify` exit 0; `e2e/simplifier-entry.spec.ts` 11 of 11; in `simplifier-real.spec.ts`, `simplifier.spec.ts` and `early-christians.spec.ts` the only failures left are the ones that also fail on the clean base or come from my duplicate's older source (table in «Existing specs»).
- **Needs Pedro:** see «Needs Pedro» (first item: the smooth scroll to the highlighted words).
- **Not verified:** touch devices, iOS long-press selection, screen readers, WebKit and Firefox.
- **How to resume:** read this State; `source ~/.nvm/nvm.sh && nvm use`; `NEXT_PUBLIC_SIMPLIFIER=on npm run build`; `E2E_PORT=3150 npm run e2e -- e2e/simplifier-entry.spec.ts --project=chromium`.
- **Cap:** 28 % weekly. Weekly reading at the end of the follow-up: 24 %. Money spent on the API: 0 (`AI_PROVIDER=fake`).

## Pedro's decision (his words, for DECISIONS)
«Me gustó mucho el concepto de la opción "A" (Interruptor en «Aa» · A·1 Arriba, en la fila de la ruta), que sea una elección para todo el sitio (el switch de habilitar para simplificar) de la forma que recomienda el agente, y que al activar la función, los círculos se muestren 2 s.»
Later the same night: «sigamos la recomendación del agente de A + B (A·1), B en las páginas de LECTOR PATRÍSTICAS». B simplifies the whole paragraph; the selected words get the momentary yellow highlight in the simplified text when they are found (Pedro's full text is in the launch brief, point 5).

## What was built
- **The choice** (`src/lib/simplifier-preference.ts`): `localStorage` key `doctrina-simplify` (`on`/`off`, default off, one choice for the whole site), same store pattern as `reader-format.ts` (`useSyncExternalStore`). Turning it on calls `setSimplifierVisibility("ring-on-hover")` and shows the rings for 2000 ms through `html[data-simplifier-reveal]`; turning it off calls `setSimplifierVisibility("hidden")`. Reduced motion: no reveal (as in the Artifact).
- **The switch** (`src/components/simplify-switch.tsx`): `role="switch"`, `aria-checked`, track 30×18 with a 1.5 px border (the ring's `simplifier-ring-line`), knob 11 px at 2 px, travel 12 px, 180 ms `ease-smooth`, label 15 px, hit height 36 px (44 px on coarse pointers). Each instance syncs the store to the visibility once on mount, so any page with a switch starts with the saved choice.
- **A·1, route row:** `Breadcrumbs` takes an optional `aside`; with it the row is a flex row with the breadcrumb on the left and the switch on the right (label «Simplificar», `aria-label` «Simplificar párrafos»). On the tradition pages and the 02 pages (`doctrines/[doctrine]`).
- **A, «Aa» menu of the Fathers' reader:** `TextOptions` gets an optional `simplify` text; when given it renders, below the rows, a hairline and the group «Ayudas de lectura» with the switch «Simplificar párrafos» and the help text of the Artifact. The works page passes it only when `simplifierEnabled`; the Bible reader does not, so it has no switch.
- **Widened addresses** (the `getSimplifiedText` test-set gate is gone; the gate is now `simplifierEnabled` so the layout with the flag off is unchanged):
  - `teach-section.tsx`: every statement and the definition of the 03 pages (`statement` addresses).
  - `common-section.tsx`: the 02 «Lo que todas comparten» text (`doctrine`, `common`, `text`).
  - `answers-section.tsx`: each tradition's summary on 02 (`doctrine`, `answers`, `<tradition>`).
  - `father-body.tsx`: every division of an English (non-AI) edition for which `canSimplify(division.text)` passes.
- **B, selection toolbar:** `SelectionToolbar` gets optional `onSimplify` and `canSimplify` and the string `simplify`; the button «Simplificar» sits right after «Preguntar» with the same style. Only the Fathers' reader passes `onSimplify`, and `canSimplify` is false for the second column, the Spanish AI edition and a division over the limit (the button is not rendered). It calls `requestSimplifierMark(id, selected text)` and then `openSimplifier(id)` (the one way to open).
- **Highlight** (`src/lib/simplifier-selection.ts`, `src/lib/simplifier-mark-request.ts`, one optional prop `selection` on `SimplifiedPanel`, two lines in `simplified-paragraph.tsx`): after the panel is open and the text has finished streaming (+400 ms), the selected words found verbatim in the aligned simplified sentence get the site's `bg-mark` for 2 s (200 ms in, 1200 ms out, `ease-standard`, the same timings as `arrival-mark`), then fade out completely. Only the words are marked, never a fallback sentence.

## Files and edit points
Created: `src/lib/simplifier-preference.ts`, `src/lib/simplifier-selection.ts`, `src/lib/simplifier-mark-request.ts`, `src/components/simplify-switch.tsx`, `e2e/simplifier-entry.spec.ts`, `docs/research/proposals/simplifier-entry/index.html`, this doc.
Edited (edit point):
- `src/components/breadcrumbs.tsx` (the `aside` prop and the wrapper row)
- `src/features/reader/text-options.tsx` (the `simplify` text and the group after `TextSettings`)
- `src/features/reader/selection-toolbar.tsx` (`simplify` text, `onSimplify`, `canSimplify`, the button after «Preguntar»)
- `src/features/reader/father-body.tsx` (the address gate, `editionId`, `simplifySelection`, two toolbar props)
- `src/features/doctrine/teach-section.tsx`, `common-section.tsx`, `answers-section.tsx` (the `SimplifiedParagraph` element only)
- `src/app/[lang]/doctrines/[doctrine]/page.tsx`, `src/app/[lang]/doctrines/[doctrine]/[tradition]/page.tsx` (the `aside` of `Breadcrumbs`)
- `src/app/[lang]/history/works/[work]/page.tsx` (the `simplify` text; `editionId` in the view)
- `src/components/simplifier/simplified-panel.tsx` (the one optional prop `selection`, the marking; the rest of the panel unchanged), `simplified-paragraph.tsx` (two lines: take the request, pass the prop)
- `src/content/ui-text/es.ts`, `en.ts` (`shell.simplifyRow`, `reader.textOptions.simplify`, `reader.toolbar.simplify`)
- `e2e/helpers.ts` (`storeSimplifyOn`), `e2e/simplifier-real.spec.ts`, `e2e/simplifier.spec.ts` (see «Existing specs»)
- `src/app/globals.css` (one rule: `html[data-simplifier-reveal] [data-simplifier-mark] { opacity: 1 }`; there is no other way to show the rings from outside the component)

## Agent's calls (to confirm; Pedro may veto in the morning)
1. **Default is off, so the old behaviour (rings on the test paragraphs) is gone until the switch is on.** Pedro's choice (nothing visible at rest). The simplifier specs need `doctrina-simplify=on` (see below).
2. **02 pages: `common/text` and `answers/<tradition>` only.** `connected/<doctrine>` (cards that are links) is not wired: a ring inside a link card is a different interaction to propose. `practice` and `witnesses` are refused by the server.
3. **Glossary entries are not wired** (not built). The entries are `blockquote` quotations with their own type role; `SimplifiedParagraph` only takes the tones `prose`, `definition` and `reader`, so a ring would sit wrongly. **Request for S-UI's component:** a fourth tone (`quote`) for the glossary's `font-head text-quote` blockquote. Until then the glossary page has no switch and no rings.
4. **The match uses the server's own sentence split** (`entry.original`, made with `splitSentences` on the server and aligned with `clear`/`very`) instead of splitting again in the browser: same function, same result, no second copy. Words are compared after `normalize` and with edge punctuation stripped, case-sensitive; a selection inside one sentence only; a selection spanning two sentences gets no highlight.
5. **No highlight when the selection starts in one paragraph and ends in another** (ranges > 1): the paragraph where it starts is simplified (as Pedro said), no highlight. **No highlight when ≥ 95 % of the paragraph is selected.**
6. **Highlight timing starts when the streaming reveal ends** (+400 ms for the box to finish opening), so the 2 s are seen on the words, not before they appear.
7. **The Spanish AI editions never show the button** (`canSimplify` false); the second column neither. The switch itself still shows in the «Aa» menu there (the Artifact's menu has no per-edition state); it only changes what appears where rings exist.
8. **Switch label on the route row is «Simplificar» with `aria-label` «Simplificar párrafos»**, as in the Artifact; in the menu the label is «Simplificar párrafos».
9. **Sync on mount:** a page that has rings but no switch would start with the default visibility (`ring-on-hover`); every page with rings has a switch today (03, 02, Fathers) so the saved choice is applied there. A first paint before hydration can show the rings on a phone for a moment when the choice is off (the component's SSR default is `ring-on-hover`; changing that default is in S-UI's file `src/lib/simplifier-visibility.ts`, not mine). Not measured.

## Conflicts with the Artifact (not resolved, as required)
- The Artifact's «Aa» menu replica shows two stepper rows («Grosor del texto», «Interlineado»); the real menu has more rows (size, weight, line spacing, width, alignment). The new group is placed after the real rows, with the same group heading, switch and help text. Not a conflict in behaviour; flagging it.
- The Artifact's panel word reveal and motion were simplified in the demo; the real panel uses the approved motion, unchanged here.
- The switch has no hover colour change, as in the Artifact (the one I had added was reverted).

## Finding in S-UI's Father address (needs INT's attention)
`father-body.tsx` sent `edition: selected.id`, which is the picker id (`"en"` / `"es"`). The server (`resolve-address.ts`) only knows the real edition id (`lightfoot-1889`), so with the fake provider and memory store **a Father ring answered `ai_not_found` (404)** and the panel showed the generic message. S-UI's spec asserts the body names `"en"`, which is why it did not notice. Fixed here: the works page adds `editionId: edition.edition.id` to each view and `father-body.tsx` sends `selected.editionId`.

## Existing specs

**Changes made to the specs (mechanical; nothing weakened).** I started from the real tree's version of `simplifier-real.spec.ts` (it has INT's edits: the poll that fixed the race, the «not reviewed» status test, the new bot-check text and a `fixme` on the Father test) and applied only:
- `e2e/helpers.ts`: `storeSimplifyOn(context)` (an init script that stores `doctrina-simplify=on`), because the switch is off by default now.
- `e2e/simplifier-real.spec.ts`: a `beforeEach` that stores it, and the same in the one test that opens its own context; the `fixme` and its TODO removed from «the Father's paragraph asks with a father address that names the edition» (it already asserted `lightfoot-1889`; my `editionId` fix makes it true); that test now looks for the ring of paragraph 6.2 (`#d-6.2`) instead of ring 0, because every division has a ring now and ring 0 is the prologue.
- `e2e/simplifier.spec.ts`: the same `beforeEach` and context line; «the 8 Catholic and Baptist pages…» now asserts that every simplifier container of the page has exactly one ring and that there are at least 3 (it asserted exactly 3), then still drives the first three paragraphs, both levels, sentence by sentence.

**The four other failures, against a clean clone of the real tree** (`cp -cR` of `/Users/pedrolorenzo/Desktop/dev/doctrina` built with `NEXT_PUBLIC_SIMPLIFIER=on`, `AI_PROVIDER=fake`, port 3155, `doctrina-simplify=on` stored; the clone is deleted). The clone has no switch, so its rings are visible by default.

| Test | In the clean base | With my changes | Verdict |
|---|---|---|---|
| `simplifier-real.spec.ts` «a second press while pending cancels…» (`:112`) | passes (its spec has INT's `expect.poll` before the count) | passes with that spec | **Not mine.** It failed in my duplicate only because my duplicate had the older spec without the poll (a race). |
| `simplifier-real.spec.ts` «the default status is «Generado por IA»» (`:290`) | the test no longer exists: INT split it into «the status line says…» and «a result that is not reviewed says…» | the two new tests pass | **Not mine.** An old test in my older copy. |
| `simplifier.spec.ts` «switching the level cross-fades…» (`:212`, now `:216`) | **fails** (`toBeGreaterThan(1)`, received 0) | fails the same way | **Older than my changes** (S-UI's report already listed it). |
| `early-christians.spec.ts` «from 02 the sidebar link opens the page…» (`:295`) | **fails** (`toHaveCount(0)`, received 1) | fails the same way | **Older than my changes.** |

Also seen: «message state ai_bot_check_failed» fails in my duplicate because the real tree's spec expects the newer text «el pedido» and my duplicate's server code is older than the real tree (the duplicate was cloned before INT's edits). Not mine.
Final run in my duplicate (entry, `simplifier-real`, `simplifier`, `early-christians`; chromium): 74 passed, 3 skipped, four failures: the two older ones above, the bot-check text (stale source in the duplicate) and the Father spec, which I then fixed (it looked at ring 0) and re-ran alone: it passes. INT, who has the newer source, should expect only the `simplifier.spec` cross-fade and `early-christians:295` to fail, as in the base.

## Measured
- **Highlight hit rate** (script `tmp/ai-sentry/rate.mjs` over the 20 first hand-written test entries, real `findSelectionMark`): 3 consecutive words from the middle of the first sentence: found in «Más claro» 5 of 20, in «Muy simple» 2 of 20; the longest single word: 11 of 20 and 7 of 20. So the highlight appears only part of the time, as expected: simplifying rewrites words. On the fake provider (identity text) it always appears. A later improvement is word-level alignment from the model (changes the contract and the prompt; not done).
- **Ring reveal** (`simplifier-entry.spec.ts`): all rings at opacity 1 at 400 ms after turning on, opacity 0 at ~2.8 s on desktop; paragraph top and the next element's top identical before, during and after (no layout shift).

## Verification
- `npm run typecheck`, `npm run lint` (0 errors, 4 pre-existing warnings), `npm run format:check`: pass. `NEXT_PUBLIC_SIMPLIFIER=on npm run build`: compiles and generates every route.
- `e2e/simplifier-entry.spec.ts`: 11 of 11 (default off; switch beside the breadcrumb; 2 s reveal without movement; survives a reload; keyboard Space and Enter; 02 pages; phone 390 without overflow; the «Aa» switch; the toolbar button marks the words and the mark fades; no mark when the whole paragraph is selected; no button in the Bible reader; on a phone the marked words are scrolled into view).
- Screenshots at 1440, 820, 390, 360, light and dark, in `tmp/ai-sentry/shots/`.
- `npm run verify` (typecheck + lint + format:check + build): exit 0.
- Sonnet verifier: see «Verifier».

## Verifier
One Sonnet 5.5 verifier compared the build with the Artifact (report: `tmp/ai-sentry/verify/report.md`; measured with Playwright on the production build). PASS: switch geometry (track 30×18, knob 11 px, travel 12 px, gap 10 px, hit 36 / 44 px), light and dark colours identical to the Artifact; placement at the right end of the route row at 1440 and 820, wrapping under the breadcrumb at 390 and 360 exactly as the Artifact does; no horizontal overflow at 1440, 820, 390, 360; «Aa» group, hairline and help text; «Simplificar» after «Preguntar» with the same style, text centred, absent from the Bible toolbar; highlight colour equals the `bg-mark` token in both themes, held 2.0 s then a 1.2 s fade; rings at opacity 1 at 0.5 s and 1.5 s and 0 at 2.5 s on desktop, always visible on 390 and 360; label contrast 9.8 to 12.8:1 and help 5.4:1; focus ring reached by one Tab, 6.5:1 light, 8.1:1 dark, Space toggles.
Defects found, and what was done:
1. **(functional, phones)** the highlighted words were below the fold at 390 and 360 and nothing scrolled to them. Fixed: when the highlight starts, if the first marked word is within 64 px of an edge or outside the viewport the panel scrolls it to the centre (smooth; instant under reduced motion); if it is already on screen nothing moves. Tested (`on a phone the marked words are brought into view`). **Agent's call, to confirm:** this is a small scroll Pedro did not specify.
2. **(fidelity)** the route-row label was 15 px `ink-2` and the menu help 14 px; the Artifact has 14 px `ink-3` and 13 px. Fixed: the route-row switch takes `row` (14 px `ink-3`, hover `ink`), the menu keeps 15 px, and the help is 13 px.
3. **(minor, left as is)** the highlight covers the trailing comma and the leading space of the words (it marks whole words of the panel, which carry their punctuation and their leading space).
4. **(info)** on a 390 touch phone the toolbar wraps with Preguntar on the second row; the real bar has six colour dots and a longer «Copiar cita» than the Artifact's, so the wrap point differs. Not a defect of this block.
5. **(not confirmed)** in one dark 390 screenshot the first sentence of the original and the first words of the simplified text showed a tan background; probably the approved sentence-pair hover under touch emulation. Not caused by this block, cause not checked.
The Artifact has no demo of the highlight, so it was compared with the token only.

## Needs Pedro
1. **Smooth scroll to the highlighted words (my addition, confirm or remove).** On a phone the simplified text opens below the fold, so the yellow words could not be seen. When the highlight starts, if the first marked word is within 64 px of an edge of the screen or outside it, the page scrolls it to the centre (smooth; instant with reduced motion). If the word is already visible nothing moves. Pedro did not ask for it. To remove it: delete the `scrollIntoView` lines in the effect of `simplified-panel.tsx` and the test «on a phone the marked words are brought into view».
2. The highlight marks whole words with their punctuation and leading space (the comma after «widow» is yellow too).
3. A Father ring answers `ai_not_found` in any tree where `father-body.tsx` still sends the picker id; INT's tree needs my `editionId` fix (see the finding above).

## Design note: reviewed-only pages (nothing built)
New decision (Pedro, via the coordinator): live AI generation only for Father divisions; on the tradition pages (kind `statement`) and, as a conservative call, the 02 pages and the glossary, only a **reviewed** simplification may be served.

What the switch and the rings must do on those pages:
- **A ring exists only on a paragraph that has a reviewed version.** Never a ring that leads to a refusal. The Father reader is unchanged: a ring on every English-edition division that passes `canSimplify`, and the «Simplificar» button of the selection toolbar.
- **The route-row switch is shown only on a page that has at least one reviewed paragraph** (a switch that changes nothing is a dead control). The 2 s reveal then shows rings only on those paragraphs. A page with none has no switch.
- The panel status on those pages is always «Revisado».

What my code needs to know which paragraphs are reviewed (two options):
1. **Recommended: a build-time manifest** `src/content/ai-simplify/reviewed-ids.ts`: `Record<addressId, textSha256>`, written by `tools/ai-review-simplifications.mjs` when Pedro approves (`--approve`), and a pure helper `isReviewedSimplification(address, text)` that compares the hash of the resolved text (so an edited paragraph loses its ring until it is reviewed again). The pages are static, so this costs no request and the rings and the switch are right in the first paint. A check in `tools/ai-checks/` should fail when a manifest id no longer resolves or its hash is stale. The server uses the same helper to refuse a non-reviewed non-Father address (`ai_not_simplifiable`).
2. A `cacheOnly` probe for every paragraph at page load: not recommended. It is 10 to 20 requests per tradition page, counts against the anti-scraping counter, and the rings would appear after hydration (a late pop-in).

What I would change in my files (not done):
- `teach-section.tsx`, `common-section.tsx`, `answers-section.tsx`: replace `simplifierEnabled ?` with `simplifierEnabled && isReviewedSimplification(address, text) ?` (the resolved plain text is available server-side through the page data).
- `[tradition]/page.tsx` and `doctrines/[doctrine]/page.tsx`: pass `aside` only when the page has a reviewed paragraph (`hasReviewedSimplification(page)`).
- `e2e/simplifier-entry.spec.ts`: «every statement of the page gets a ring» becomes «only the reviewed ones»; add a page with none (no switch) and a check that no ring ever answers with a refusal.
- `simplifier.spec.ts` «the 8 pages…» and the `simplifier-real.spec.ts` status tests change with it (status «Revisado» only).
- Glossary stays unbuilt.
- No change to `father-body.tsx`, the toolbar, the highlight, the switch or the store.

## What is inert
Nothing is inert with a `TODO`. Not built: glossary entries and the 02 `connected` cards (calls 2 and 3), option E (not chosen), the Spanish AI editions (off by decision).

## For DECISIONS (2026-11-07, night)
Pedro chose A·1 + B from the proposal (link above): switch «Simplificar párrafos» in the Fathers' «Aa» menu and in the route row of the tradition and 02 pages; one choice for the whole site, stored in `localStorage` (`doctrina-simplify`, default off); rings visible for 2 s when it is turned on; «Simplificar» in the Fathers' selection toolbar (whole paragraph; selected words highlighted in the simplified text, momentarily, when found verbatim). Discarded: C (always-visible rings), D alone, E (section button), a floating «AI» button, sparkle icons, gradients, a glowing pill. Agent's calls: the list above.

## For GOTCHAS
- The simplifier's rings are hidden by default now; any spec or tool that expects rings must store `doctrina-simplify=on` first.
- `Breadcrumbs` with `aside` moves the `title-part` intro classes from the `nav` to the wrapper row; keep them together or the row's intro animation breaks.
- The Father address needs the real edition id (`editionId`), not the picker id (`"en"`/`"es"`); the server answers `ai_not_found` otherwise.
- The highlight depends on the server's `original` and `clear`/`very` being aligned sentence by sentence (the contract's N units); if that alignment changes, `findSelectionMark` marks the wrong words.
- `html[data-simplifier-reveal]` in `globals.css` is the only way the rings are shown from outside `SimplifiedParagraph`; renaming `data-simplifier-mark` breaks the reveal silently.

## Commit commands (for the real repo; in this duplicate: for INT)
```
git add src/lib/simplifier-preference.ts src/components/simplify-switch.tsx src/components/breadcrumbs.tsx src/features/reader/text-options.tsx src/app/globals.css src/content/ui-text/es.ts src/content/ui-text/en.ts "src/app/[lang]/doctrines/[doctrine]/page.tsx" "src/app/[lang]/doctrines/[doctrine]/[tradition]/page.tsx" && git commit -m "feat(simplifier): add the simplify switch to the route row and Aa"
git add src/lib/simplifier-selection.ts src/lib/simplifier-mark-request.ts src/components/simplifier/simplified-panel.tsx src/components/simplifier/simplified-paragraph.tsx src/features/reader/selection-toolbar.tsx src/features/reader/father-body.tsx src/features/doctrine/teach-section.tsx src/features/doctrine/common-section.tsx src/features/doctrine/answers-section.tsx "src/app/[lang]/history/works/[work]/page.tsx" && git commit -m "feat(simplifier): simplify any paragraph and from the selection bar"
git add e2e/helpers.ts e2e/simplifier-entry.spec.ts e2e/simplifier-real.spec.ts e2e/simplifier.spec.ts docs/features/ai-real-sentry.md docs/research/proposals/simplifier-entry/index.html && git commit -m "test(simplifier): cover the switch, the toolbar and the widened addresses"
```

## Usage readings
- 01:26 session 6 %, weekly 21 % (Step 1 start); 01:34 9 %, 22 % (Step 1 end)
- 02:06 session 10 %, weekly 22 % (Step 2 start); 02:14 12 %, 22 %; 02:31 14 %, 23 %; 02:37 16 %, 23 %; 02:43 17 %, 23 %; 02:48 17 %, 23 % (end of Step 2)
- Follow-up: 14:11 session 6 %, weekly 24 %
