# Simplifier loading state: proposal (nothing built)

**Proposal (private Artifact):** https://claude.ai/artifact/K9cnDGvV1iAZZgWXgb7Y5R (source: `docs/research/proposals/simplifier-loading/index.html`)

## State
- **Done:** research, the proposal Artifact, and (Pedro chose option B with a 200 ms delay) the implementation: see «Implemented».
- **Next:** Pedro's veto or confirmation of the agent's calls in «Implemented».
- **Checked once:** Chromium 1280 px, light, no console errors, no horizontal overflow; the loader appears 201 ms after the press with the 200 ms delay. Not verified: a real phone, dark theme and reduced motion by eye (the reduced-motion fallback is simulated with a toggle and with the media query), screen readers.
- **Cap:** 28 % weekly; reading at the end: 27 %. No API spend.

## What was read (the real thing)
- `simplified-paragraph.tsx`: the ring is a button, 28 px hit (44 px on phones), with an `<i>` of 14 px (`size-3.5`), 1.5 px border (`simplifier-ring-line`), `border-ink-3`; open: `border-ink bg-ink`; pending: the same `<i>` gets `border-dashed` and nothing else; `aria-busy` on the button, tooltip and a polite live region say «Simplificando…»; a second press or Esc cancels; nothing else moves while pending (one-push rule). Transition on the border colour 150 ms `ease-standard`.
- `docs/DESIGN.md` §4: motion is subtle and reader-driven; under `prefers-reduced-motion` nothing animates and states still change; curves `--ease-standard`, `--ease-smooth` (`cubic-bezier(.32,.72,.0,1)`), durations in the 100 to 700 ms list.
- Real size: 14 px circle, 1.5 px line, same on desktop and phone (the hit area grows to 44 px).

## Research (what I verified through web search results, and what I did not)
Verified in search results (I read result summaries and excerpts, not always the full page):
- **Primer (GitHub) Spinner** (primer.style/product/components/spinner, `/ui-patterns/loading/`): for waits of about 1 to 3 s; under 1 s no loading state at all, because a flashing indicator can feel distracting and make the product slower; the `delay` prop accepts `'short'` (300 ms), `'long'` (1000 ms) or a number; place it next to the content it replaces without layout shift; the spinner is an SVG with no text, so screen readers do not announce it and it needs an `aria-live` message.
- **Mozilla Acorn** (acorn.firefox.com, «Loading indicators»): do not show a spinner for actions under 200 ms (a shorter flash reads as confusion); keep it for at least 400 ms once shown.
- **Nielsen's response-time limits** (via nngroup.com and Nielsen's own site, uxtigers.com; summaries only): 0.1 s feels instant, 1 s keeps the flow of thought, 10 s risks attention; under about 1 s show nothing; once an indicator appears it should stay at least about half a second; for 2 to 10 s an indeterminate indicator is enough.
- **Apple Human Interface Guidelines, progress indicators**: an indeterminate indicator (activity indicator) is an animated image; every platform has a circular one that appears to spin; preferred when space is constrained; keep indicators moving, because a stationary one can read as stalled.
- **Material Design 2 guidelines** (m2.material.io): indeterminate circular indicators grow and shrink while moving along an invisible track; recommended for short indeterminate waits (under 5 s). **I did not find the Material 3 specification page**; the numbers some third-party ports give (48 dp, 4 dp stroke, ≈1.3 s constants) are not verified.
- **shadcn/ui Spinner** (ui.shadcn.com registry): a thin wrapper over Lucide's `Loader2Icon` with `animate-spin`, `role="status"` and `aria-label="Loading"`; it does not depend on Radix.

Not verified (do not rely on them): Linear's, Vercel's and Stripe's loaders; Radix itself; WCAG 2.3.3 wording; any claim about the iOS eight-spoke bars, the Bootstrap thick ring or bouncing dots being «dated» beyond my judgment; that `transform` and `opacity` animations run on the compositor (general browser knowledge, not checked here); frame-rate measurements.

## Options (details and live demos in the Artifact)
All keep the 14 px box, the 1.5 px line, the same place, the site's tokens (`ink`, `rule-2`), and `aria-busy` plus the live region.
- **A. Arc that turns.** SVG, a faint `rule-2` track and a three-quarter `ink` arc with round caps; one `transform: rotate` animation, 1 s per turn, with a gentle speed change each half turn. Reference: Apple, Primer, shadcn (the most common form). Cost: compositor-only.
- **B. The dashed ring itself, turning.** The existing `<i>` rotates at 2.4 s per turn. Continuity with today. Cost: CSS only. Risk: the dashes of a 14 px rounded border are uneven; it reads more as decoration than as «loading».
- **C. Trim that draws and undraws.** SVG with animated `stroke-dasharray` plus a 1.6 s turn. Reference: Material 2's grow-and-shrink. Cost: repaints every frame (negligible at 14 px) but not compositor-only.
- **D. A dot that orbits.** The ring stays as a faint track and a 4 px dot circles it, 1.1 s per turn. Reference: own idea, no source found. Cost: CSS only. Reads like a bead more than an arc.

## Timing (recommended)
- 0 ms: the ring takes `ink` at once and `aria-busy` plus «Simplificando…» are announced at once. Only the visual spin is delayed.
- **Spin appears at 200 ms** (Mozilla's floor; Primer offers 300 ms): a cache hit (50 to 150 ms by the server design) shows no spin; a new simplification (about 2 to 5 s) hardly notices 200 ms.
- **Once visible, 400 ms minimum** (Mozilla): it matters only when the answer lands between 200 and 600 ms, a rare case that costs at most 350 ms.
- The panel opens once, as today; the ring goes to its open state; second press or Esc cancels and the ring returns to rest.
- **Reduced motion:** nothing animates; the spin is replaced by a static three-quarter arc (not the closed resting ring). The tooltip and live region keep saying «Simplificando…».

## Recommendation
**A**, with a 200 ms delay, a 400 ms minimum, and the static arc under reduced motion. It reads as «loading» with no explanation, is compositor-only, keeps the size and the ink, and has no glow. Honest note: it is also the most common shape (shadcn's spinner is the same idea); it differs only in the faint track and the speed change. C is livelier but repaints and is closest to a library spinner.

## Discarded
Thick Bootstrap ring, iOS eight bars (no room at 14 px), bouncing dots, conic gradients and glows, glowing pill, sparkles, a floating «AI» badge (DECISIONS «Design principles» AI-slop list); a box or skeleton that fills where the panel will open (a second push); visible «Simplificando…» text beside the circle; a progress bar or percentage (there is nothing honest to measure).

## To decide (Pedro)
1. The shape: A, B, C or D.
2. The delay before the spin: 0, 200 or 300 ms.
3. The 400 ms minimum once visible: yes or no.
4. Under reduced motion: static arc, or today's dashed ring.

## If built (not done)
Files: `src/components/simplifier/simplified-paragraph.tsx` (the `<i>` and the pending class; a timer for the delay and the minimum, cleared on cancel), `src/app/globals.css` (one keyframe and its utility), a spec in `e2e/` that measures the spin at the delay, the cache-hit case with no spin, cancel, and reduced motion per frame. `aria-busy` and the live region stay as they are.

## Usage readings
- 15:54 session 22 %, weekly 27 %; 15:57 session 22 %, weekly 27 % (proposal end).
- Implementation: 16:10 session 24 %, weekly 27 %; 16:16 session 26 %, weekly 27 %; 16:38 session 30 %, weekly 28 % (end).

## Implemented (Pedro chose option B, the dashed ring turning, with a 200 ms delay)
Pedro: «Opción B, la línea punteada girando, con retraso de 200 ms. No me convence TOTALMENTE, pero es una buena opción para no estar mucho tiempo gastado en algo tan pequeño.»

**What it does** (replaces only the pending look of the ring):
- At the press the ring takes the strong ink colour at once (solid line); `aria-busy`, the tooltip and the live region «Simplificando…» are on at once.
- At 200 ms, and not before, the line becomes dashed in ink and the ring turns, 2.4 s per turn, linear, until the answer arrives. Same 14 px box, 1.5 px line, same place; nothing else moves.
- If the answer arrives before 200 ms (a cache hit) no dashed ring is ever shown and the panel opens at once.
- Once the dashed ring is shown it stays at least 400 ms: if the answer lands earlier, the panel waits until the dashed ring has been visible 400 ms (an answer that arrives between 200 and 600 ms after the press opens the panel at 600 ms). During that wait the ring is still busy, and a second press or Esc cancels it with no panel.
- Rest, hover, open, the panel, and cancel by second press or Esc are unchanged.
- Reduced motion: the dashed ring appears at 200 ms and does not turn (the Artifact's fallback for B).

**Files and edit points**
- `src/components/simplifier/simplified-paragraph.tsx`: constants `spinDelayMs` (200) and `spinMinMs` (400); state `spinning` and `holding`; refs for the timers; `busy = pending || holding` replaces `simplification.pending` in `aria-busy`, the tooltip, the live region, the Esc handler, the press handler and the ring's visibility; `open` starts the 200 ms timer, awaits the answer, holds the loader to its minimum, then reveals; `stopWaiting` cancels the request or the hold; the `<i>` class is `border-ink-3` at rest, `border-ink` while busy before the spin, `border-dashed border-ink simplifier-ring-turn` while spinning. `use-simplification.ts` is unchanged.
- `src/app/globals.css`: utility `simplifier-ring-turn` (animation only under `prefers-reduced-motion: no-preference`) and its keyframes.
- `e2e/simplifier-loading.spec.ts` (new, 9 tests, per-frame measurements) and `e2e/simplifier-real.spec.ts` (the «pending» test expected a dashed ring from the first frame; it now expects solid, then dashed from frame 5 to 25, then dashed until the end).
- Note for the coordinator: in my duplicate `simplified-paragraph.tsx` also carries the two lines of the selection highlight from the earlier block (`takeSimplifierMark`); if the real repo already merged that block the diff is only this change.

**Agent's calls (Pedro may veto)**
1. **400 ms minimum visible**, taken from the Artifact (Mozilla's figure): it can delay the panel after a fast-but-not-instant answer.
2. **Reduced motion** shows the Artifact's fallback for B: a static dashed ink ring from 200 ms. (The static arc I recommended was for option A.)
3. **Speed and easing:** 2.4 s per turn, `linear`, infinite, as in the Artifact.
4. **Colour:** the pressed and dashed ring use `ink`, as in the Artifact; today's dashed ring used `ink-3`, so the loader is darker than the old pending look.
5. **0 to 200 ms the ring is solid ink** (as in the Artifact), where today it turned dashed at once.
6. **During the 400 ms hold** `aria-busy` stays true and the live region stays «Simplificando…».
No conflict with the current site was found.

**Verification**
- `e2e/simplifier-loading.spec.ts`: 9 of 9 (chromium). Per frame: the dashed ring starts at 199 to 260 ms and never before; it turns at 130 to 170 degrees per second (2.4 s per turn); size 14×14 and the ring's centre constant (< 0.5 px); paragraph top and the next element constant (< 1 px) and `scrollY` constant; border colour equals the `ink` token (desktop light, 390 dark, 360 light); a 60 ms answer shows no dashed frame and no rotation; a 260 ms answer keeps the loader at least 380 ms (frame granularity) and the panel opens at least 395 ms after the onset; cancel by second press and by Esc return the ring to a solid border with no panel; reduced motion: dashed and angle 0 in every frame; rest and open keep their look.
- `simplifier-entry` 11 of 11; `simplifier-real` and `simplifier`: same two failures as before this change (the bot-check text, from this duplicate's older server code, and the level cross-fade, which also fails on the real tree); `aria-busy` and the live region are checked in the new spec and in the existing pending test.
- Sonnet verifier: see below.
- Not verified: a real phone or touch, screen readers, WebKit, Firefox.

**Verifier** (one Sonnet 5.5; per-frame computed styles on both sides; its report text came back as its final message because it could not write the file; scripts, raw frames and screenshots are in `tmp/ai-sentry/verify2/`)
PASS against the Artifact's option B: rest ring 14×14, solid, same colours in light and dark; pressed, solid with the colour easing from `ink-3` to `ink` in about 150 ms, the same ramp as the Artifact; dashed onset 205 to 218 ms over 7 runs (Artifact 210 to 214 ms); dashed, 14×14, `ink`, 2.4 s linear infinite; the first rotated frame is the frame after the onset; after the answer the panel opens and the ring ends filled `ink` with no animation; hold after onset 401.7 ms (Artifact 400.8 ms); reduced motion: dashed from about 208 ms, no animation, no transform; fast answers (130 and 180 ms, and the in-memory recall path): zero dashed frames; same circle size, dash count, thickness and colours at 1440, 390 and 360, light and dark; `aria-busy` true from the first frame, the live region and the tooltip say «Simplificando…» until the panel opens; cancel by second press and by Esc, also during the hold.
Defects and what was done:
1. **Desktop ring sits 3 px lower than in the Artifact (23.3 px from the paragraph top against 20.3 px), at rest too.** Not caused by this change: it is the position of the existing ring (the `top-simplifier-ring` wrapper holds an inline-flex tooltip span that sits on the line's baseline). The Artifact's mock placed the ring differently from the real component. **Not resolved**: it is a pre-existing difference between the Artifact's demo and the site, outside the pending state. Phone (390, 360) matches.
2. **Info: BotID.** The POST leaves about 100 ms after the press (Vercel BotID wraps `fetch`), so the fastest network answer is about 130 ms and a 60 ms answer cannot happen on the real route; the 200 ms delay still keeps a cache hit free of any dashed frame (checked at 130 and 180 ms). My spec uses a mocked 60 ms answer.
Not verified: that the 1.5 px line really draws 1.5 px (both sides compute 1 px at 1x and 2x); a real touch device.

**Commit command (for the real repo; in this duplicate: for INT)**
```
git add src/components/simplifier/simplified-paragraph.tsx src/app/globals.css e2e/simplifier-loading.spec.ts e2e/simplifier-real.spec.ts docs/features/simplifier-loading-proposal.md docs/research/proposals/simplifier-loading/index.html && git commit -m "feat(simplifier): turn the dashed ring while a simplification loads"
```
