# Build an approved design

How to turn a design Pedro approved in an artifact into the site, as an exact replica. Validated on 2026-10-28 (thirteenth session, the home, kit 209–218): Pedro found nothing to correct in the replica («visualmente es exquisito») and only asked for refinements. The rules this builds on: `AGENTS.md` (blocks, verification), `.claude/rules/ui.md`, `agent-ops.md` («Approved artifact = checklist», «measured, not eyeballed»).

## Before writing code

1. Read the artifact with the Artifact tool (`action: read`) and diff it against the archived copy in `docs/research/proposals/<screen>/index.html`; the published one wins. The archive may lack `<!doctype html>` (quirks mode: forms get a 1em bottom margin); the published page has it.
2. Read the chosen option's code end to end: its CSS block, its `html()` and `init()`, every shared helper it calls (headers, rows, FLIP, reveal, edge ruler, citation window). Behaviour lives in the script, not only in the CSS.
3. Ask Pedro, in one batched question, only what the artifact cannot answer: usage ceiling, features with no backend (keep the proposal's behaviour with a TODO, or inert), content the proposal invented (keep, flag `draft` in data), anything you would design yourself (proposal page, or «decidilo vos y lo vemos hecho»). Record the answers in `DECISIONS.md` at once.
4. Measure the proposal before building. Serve the archive with a handler that adds `charset=utf-8`, open it in Playwright, select the option, and stretch the proposal's frame to the viewport so container queries match the site:
   ```
   .doc{padding:0!important;max-width:none!important}.doc-head,.optnote,.cmp,.linkline,.ctl{display:none!important}
   .frame{max-width:none!important;width:100vw!important;height:auto!important;border:0!important;overflow:visible!important;container-type:inline-size!important;container-name:site!important}
   .site{position:static!important;overflow:visible!important}
   ```
   For every element of the option take `getBoundingClientRect` plus computed font, weight, line height, colours, padding, at 1440/768/390/360, light and dark, both reader states («Primera vez», «Vuelve»), and full-page screenshots. Write the numbers in `docs/features/<screen>.md` with one checklist line per element, state and motion.

## Building

- Blocks of one section or component, each verified before the next (`AGENTS.md` rule 10). Number kit blocks continuously; freeze each with `snapshot.py`, remove `docs/` from the block folder, give Pedro the `apply.sh` numbers.
- Real data only, through a loader in `src/content/` (the home: `get-home-timeline.ts` from `data/site/history.json`). Where the data disagrees with the proposal's text, the data wins and the difference is listed (councils marked approximate read «c. 49»).
- Reuse the site's components where the proposal had a local copy of the same thing (`MoreButton`, `InPlaceLink`, `Tooltip`, the drawer, the top bar, `RevealList`, the edge ruler); list each 1–2 px difference this causes.
- Port behaviour, not shortcuts: copy constants (durations, delays, snaps, thresholds) from the script, then fix what the proposal does wrong and say so (its FLIP snapped rows when interrupted; ours continues from the visible position).
- Positions computed at runtime go through CSS variables (`style={{ "--x": … }}` + `left-(--x)`); vertical geometry that depends on the width is computed per range in CSS (`years-rows`), never from a measured width, so nothing jumps on load.
- Before adding an `@utility` or token, grep for the name: Tailwind 4 silently merges two utilities with the same name (GOTCHAS).
- Nested list changes use `flipKeyed` (`src/lib/keyed-flip.ts`) with the change wrapped in `flushSync`.

## Verifying each block

1. typecheck, eslint, prettier on the touched files; `npm run lint` before freezing.
2. A spec in `e2e/<screen>*.spec.ts` for every behaviour: texts and order, links, every interaction (mouse, keyboard, touch via CDP `Input.dispatchTouchEvent`), edge states (empty, single, last), reduced motion, no overflow at 360. Read transient state (animations, ghosts) in the same `evaluate` as the trigger; use `transitionrun` events for CSS transitions started by React updates; run with `--repeat-each=3 --workers=6` to flush out timing flakes.
3. Measure the build with the same selectors as the proposal (for a component with states, such as a chat, dump each state on both sides with one script per side and compare the rows with a diff script) and compare number by number (positions relative to each section's top when an earlier section's height differs on purpose); pixel-diff each section crop (PIL, threshold 40 per channel). Anything above anti-aliasing is a defect or a listed deliberate difference.
4. Motion per frame: sample the moving element with `requestAnimationFrame` and check monotonic, no jump, interruption mid-way continues from where it is. Sample every property the transition touches, `visibility` included: a `visibility` switched at the wrong end leaves an element invisible during a slide whose opacity and transform look right (the AI drawer, 2026-10-28: it popped in at 283 ms and vanished at 12 ms).
5. Kill the old `next start` on 3100 before each build (`kill $(lsof -ti :3100)`); a server left running serves stale chunks and the measurements come back empty.
6. Never rebuild while a verifier subagent is using the server.

## After the big blocks

- One Sonnet verifier (read-only, writes only to the scratchpad) with the proposal served, the harness CSS, the files to read, and the checks: static diff, behaviour against the proposal's script for several states, motion frame by frame including interruption, the agent-designed parts against their DECISIONS entry, quality floor. Rerun its own scripts after fixing.
- Name the interaction checks in the verifier's brief; that is where the static diff is blind (the AI drawer's verifier found: focus after a shortcut key, an overlay capturing the pointer, Esc with two layers open, scroll anchoring moving a sheet).
- The full e2e suite before handing over; rerun failures alone to tell timing flakes from regressions.
- After freezing, replay check: for every file in the session's blocks, the last block's copy equals the working tree (a file reverted to HEAD is invisible to `snapshot.py`).

## When another session holds the repo

Work in a local clone (`git clone ~/Desktop/dev/doctrina ~/Desktop/dev/doctrina-<feature>`) on its own port (never the other session's), keep a copy of every existing file before touching it, and deliver a kit with `files/`, `patches/` for the existing files, the base commit, `REPORT.md` and `message.txt`. Integrate the kit into the repo before any refinement round, so the next changes are made on the real tree (the AI drawer, 2026-10-28).

## Reporting to Pedro

Per block, in Spanish: what to look at (route, widths, states), how it was tested (numbers), deliberate differences from the proposal, open decisions, the `apply.sh` command. Docs go in a separate commit command because they are removed from the blocks.
