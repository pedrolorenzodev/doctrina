# Design proposal

Any UI without a precise definition goes through a proposal Artifact first. The rule itself and what the page must contain are in `AGENTS.md` ("Main rule"); this playbook is how to run it. Last validated: 2026-10-21 (retro of the structure proposal).

## Before

1. Read `docs/DESIGN.md` if it exists, `DECISIONS.md` (design principles, the AI-slop list, everything decided about this screen) and the screen's notes under "Now" in `ROADMAP.md`.
2. Use real Doctrina content (e.g. the Eucharist pilot), never placeholders or internal states such as "en preparación".
3. Inputs as needed: `docs/research/analogs.md`, `docs/research/critique.md`.

## The page

- 2–4 comparable options, plus what exists today; interactive, real fonts, colors and curves, working on mobile.
- Each option: where it goes, which reference it comes from, what it costs.
- What is discarded and why, including the AI-slop list.
- A reference idea is explained with a small demo on real Doctrina content, never with values in words (sizes, hex, "levers"). For "copy it exactly", an agent first measures the original (source code plus per-frame DOM measurements with Playwright).
- Before showing a reference agent's description, check each visual claim against its screenshot.
- When a component resembles one whose animation or interaction Pedro already approved (`DESIGN.md`), one option is always reusing that approved pattern (Pedro, 2026-10-21: the reader's tabs should move like the Objeciones tradition switcher).
- Ends with what has to be decided, and stops.

## Multi-screen proposal (the structure proposal, overnight 2026-10-20)

- The coordinator builds a shared base in the scratchpad (`base.css`, `base.js`: tokens, texture, type, components) and a brief for builders; one Opus builder per screen file, at most three at once; only the coordinator touches the base, builders ask for base changes in their Progress block.
- The brief forbids [memory]-tagged text outright and anything uncited, and lists every decided component; the page has screen, mode and width selectors.
- Verify with Playwright: each screen at 360/390/768/1440 in dark and light, console errors, `scrollWidth > innerWidth`; then one Fable critic on the screenshots (15-minute cap) against the ROADMAP notes, the AI-slop list and neutrality; triage must-fix / should-fix, fix, re-shoot.
- Anything the agent decided without Pedro goes in a "decided by the agent" list for him.
- Fingerprint dates, Ignatius facts and RV1909 verses missing from the repo were sent to Codex as questions (answered in `docs/research/`) instead of invented.

## Iterating

- Iterate on the same page, keeping the previous version beside it. A new «v[n]» label only for a substantial round of changes; small fixes and picks go into the current version (Pedro, 2026-10-21).
- Pedro's notes: restate how you understood each, object where needed, agree, and only then record (decided → `DECISIONS.md`; open → `ROADMAP.md`, "under discussion, not agreed" if the session may end).
- When Pedro sends notes over several messages, save them to a scratch file at once; compaction has lost nuances before.
- "mi canvas [n]" means Pedro's edited copy of screen n in the [UX round 2 canvas](https://claude.ai/artifact/CiD9tLWApMVoskyJG2KwDV): find it in `project/canvas.json` by title ("… copy" or "(MODIFICACIONES MIAS)", placed to the left/bottom) and diff it against the original P-board; it shows the approach he prefers, not a final design.
- When approved, record the link in `DECISIONS.md`.

## Lessons

- 2026-10-29 · A proposal frame built from hand-copied tokens looked like AI-slop to Pedro («no tiene el background tipo pared, las fonts no me convencen, los espaciados tampoco») → build the frame with the site's real pieces: `--texture-image` and `--texture-opacity` from `globals.css` (the `texture-page` overlay at 420 px), the exact type roles of `DESIGN.md` §2 with their `opsz`, the spacing numbers of the existing patterns, and the patterns themselves (the «cita + fuente» block, `date-mark`, `--external-mark`, the tradition-switcher tabs with the sliding indicator, the footer «Anterior / Siguiente», the quote role `head 300 italic` with `«»` by CSS). Read `DESIGN.md` §7 «Don'ts» as a checklist before publishing: «·»-joined metadata, arrows glued to links, boxed or pill controls, tiny grey labels, identical rounded cards, ad hoc spacing.
- 2026-10-29 · Pedro picks a base and refines in rounds (A → C → E → G): after a pick, delete the discarded variants only when he says so, keep the chosen one beside the new ones, and when he inspects in the browser he sends exact CSS values (`color: var(--ink-3)`): apply them as given.
- 2026-10-29 · Use all the real content the repo has (the 19 passages with their five editions and the apologists' verified quotes) and hide a layer that has no data instead of showing a placeholder; keep the generator (`docs/research/proposals/<name>/source/`) so the next agent can rebuild the page.
- 2026-10-29 · Research for a design proposal: read the repo's own research first, then a standard WebSearch per question; cite only what the results confirm and say what could not be confirmed.

- 2026-10-20 · A coordinator-owned base plus one file per builder gave four screens in ~15 min each with no conflicts → "Multi-screen proposal".
- 2026-10-20 · The Fable critic caught real trust problems the builders had marked "decided by agent" ([memory] text shown as final, uncited practice cells) → forbid [memory]-tagged text in the builder brief.
- v2 (before 2026-10-05) · A full build was the costly way to learn the structure was wrong → proposal canvases with real content.
- 2026-10-07 · Notes over several messages lost nuance after compaction → scratch file.
- 2026-10-19 · Pedro couldn't judge references described with numbers and "levers" (Maggie Appleton, Ciechanowski, Linear, The Met, Craig Mod); a small demo on real content settled each in one look → demo rule in "The page".
- 2026-10-19 · The reference agent called Craig Mod's drop cap «I» "a solid black bar" → check visual claims against the screenshot.
- 2026-10-19 · A frame-by-frame agent rebuilt Stripe Press's ruler to two decimals in 11 min (`docs/research/stripe-press-ruler.md`) → measure before copying.

## Field guide: a proposal Artifact that replicates a real page (central-verse proposal, 2026-11-09; Pedro: «increíblemente sorprendente»)

Written by the agent that built it; unvalidated beyond that run. Honest limits it states: no numeric pixel diff was run (add one before claiming «pixel-perfect»), the `quickstart` call was skipped (do it), and the quotes were not read one by one before counting evidence.

Result: https://claude.ai/artifact/XQrDNnEYsMRp9HJqAqRxpi (private). Work dir: `/private/tmp/claude-501/central-verse/` (capture.mjs, capture2.mjs, build.py, demo.css, demo.js, doc.html, bar.html, shots.mjs, evid.py). Nothing was edited in the repo.

### 1. Capturing and rebuilding the real page
- Do not redraw. Open the review server (`:3101`) with the repo's own Playwright (`node_modules/playwright/index.mjs`, import it by absolute path from a script stored outside the repo) at 1440x900, `waitUntil: "networkidle"`, wait ~1.5 s for hydration, then take `document.documentElement.outerHTML`. Strip `<script>`, `<link rel=preload|stylesheet>`.
- CSS: read the `<link rel=stylesheet>` hrefs from the page (3 files in `/_next/static/chunks/`), download them, concatenate, inline in one `<style>`. Fonts: every `url(../media/x.woff2)` in the CSS was downloaded from the same server and replaced by a `data:font/woff2;base64` URI (46 files, 1.5 MB; all subsets kept, the page was 2.9 MB in the end, limit is 16 MB).
- The `<html>` carries the next/font variable classes (`newsreader_..__variable` etc.) and `data-theme`, `data-title-ready`, `--spacing-scroll-offset`. They matter: without them the fonts fall back and the title animation stays hidden. I set them from a tiny inline script at the top of the file.
- Tokens and themes come for free: the site's compiled CSS defines `:root` tokens and `[data-theme="dark"]` overrides. The replica just toggles `data-theme` on `<html>`; the site's own moon button is rewired to the same toggle. Default theme follows `prefers-color-scheme`.
- Other states of the page (other passages) were captured by clicking the real ruler buttons in Playwright (`nav[aria-label="Pasajes"] button`, filter `visible`) and saving the right column's `outerHTML` (`div.min-w-0`) per passage into a JSON. The replica swaps that column in, so the apologists layer, tabs and pager are real for every passage shown. A first attempt selected `nav button[aria-label]` and hit the sidebar's twisty buttons: select by the component's own aria-label.
- Dead on purpose: all JS of the site is gone, so translation tabs, ruler clicks, tree, search and links are inert (a capture-phase click handler cancels `<a>` navigation).

### 2. Keeping everything except the studied piece identical
- Frozen: the whole captured DOM and CSS. The variants never touch it; they only add attributes (`data-role=focus|context`, `data-big`) to the existing verse `<p>` elements and are styled by `html[data-cv="x"] .cv-stage[data-live] [data-role=...]` rules in a second `<style>`. Pseudo-elements (`::before`) draw marks; no markup of the site is moved.
- How I checked: full-page screenshots of the live page and of the replica at the same size, looked at side by side (sidebar, top bar, tabs, pager, texture, both themes). I did NOT run a numeric pixel diff; if you need to claim "pixel-perfect", add one (Playwright screenshot of both, `pixelmatch` or PIL `ImageChops`). Also check element sizes with `getBoundingClientRect` for the studied block.
- Keep your own UI outside the replica and visibly different: a fixed floating bar (panel colour, `shadow-floating`, labelled "Esta barra no es parte de la página") and a full-screen overlay for the long text.

### 3. The background-wall texture trap
- In this site `body.texture-page:after` is `position: fixed; inset: 0; z-index: 0; mix-blend-mode: multiply`. It is harmless only because the whole app sits in `div.relative.z-1`. Earlier artifacts broke this by losing that wrapper (texture above letters).
- Because the Artifact skeleton owns `<html>` and `<body>`, I moved the body classes to a wrapper div (`#cvroot.texture-page ...`) and kept the inner `div.relative.z-1` untouched. My bar and overlay live outside it, opaque, with no texture.
- Verification: `getComputedStyle(document.body,'::after')`/the wrapper z-index, plus 2x screenshots (`deviceScaleFactor: 2`) of a body-text clip in light and dark: letters must have clean strokes with the grain only between them. Never put the texture or a blend mode on anything above text.

### 4. Variants, switch, comparison, themes, 390 px
- One chip row (Actual, A to F), one caption line per variant, a passage chip row, Dark/Light, "Con el actual encima" (clones the stage without `data-live` and labels both), and "Leer la propuesta completa". State lives in the URL hash (`#v=marca&p=john&t=dark&c=1&d=1&m=1`), which made my screenshots scriptable (`shots.mjs`) and works for reviewers.
- Cover cases, not just the happy one: 1 central (John 3:5), 1 central in a long block (Acts 2:38), 2 adjacent central verses (Rom 6:3-4; adjacent marks/fills must merge, I fixed a visible seam with `:has(+ [data-role=focus])`), blocks of 2 verses untouched.
- A variant that hides text (E, collapsed context) needs wrapping the words in a span: `overflow:hidden` on the `<p>` clipped the absolutely positioned verse number. Animate with the site's own curve/duration (380 ms `--ease-reveal`) and honour `prefers-reduced-motion`.
- Check each variant in light and dark and at 390x844 (`shots.mjs` takes `w`/`h`); numerals are inline on phones, so marks need a phone offset.

### 5. The proposal text
- Order of work: repo first (`DESIGN.md` verse/current-vs-neighbour pattern in the 06 row, Marca corta, "four marks never mixed up", Don'ts, DECISIONS slop list, passages-page.md, `src/features/passages`), then 8 web references (search, cite only what the result text confirms; say what you could not confirm), then build.
- Per variant: what it is, where it goes (file/component), reference, cost (tokens, accessibility, print, conflicts with `mark`/`accent-weak`/red letters/lit phrases), risk. Then discarded with reasons (the slop list), data, decisions, and a "limits of this demo" note. Data section: compute counts from the real `spanishPages` dump (`node --import ./tools/register-alias.mjs <script outside repo>`), and test any selection rule on Pedro's own calibration examples before proposing it.

### 6. Artifact-tool gotchas
- The skeleton wraps the file: publish `<title>`, `<style>`, content only; no `<html>/<head>/<body>`. Convert the captured document accordingly (classes of `<html>`/`<body>` go to script/wrapper).
- No external hosts except the allowlist: fonts and all CSS inlined; no library needed.
- I loaded `artifact-design` and skipped `quickstart` (the tool description asks for quickstart first for new pages); it published fine, but do the quickstart call.
- Updating: same file path or `url` keeps the link; use `label`. Icon only on the first publish. Fixed bar needs `env(safe-area-inset-bottom)`. `[hidden]` overlays rely on the skeleton's reset.

### 7. Not replicated, and what I would change
- Translation tabs, ruler navigation, tree, search, smooth scroll (Lenis) and the other 14 passages are static/missing; the central-verse choices in the demo were mine, flagged as such.
- Redo differently: run a numeric pixel diff between live and replica; use a real 390 px frame (iframe) so the phone view is visible on a desktop; test the evidence rule before building the variants' captions; read the quotes by hand before quoting counts.
