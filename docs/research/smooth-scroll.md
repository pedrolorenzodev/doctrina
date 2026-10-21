# Smooth scroll for the reader's own scrolling

## Progress
- Status: done (2026-10-20, 22:43–23:01 -03)
- [x] 1. Lenis options, defaults, behavior (README + source of 1.3.27); alternatives
- [x] 2. Opinions (HN, blogs, a11y writers, Lenis authors, X); 8 live sites probed with Playwright
- [x] 3. Accessibility and performance
- [x] 4. Recommendation: three presets (A lerp 0.3, B 0.18, C 0.1)
- Not done: Reddit (blocked for the tools); no critical X posts found; Chrome's native wheel smoothing curve not measured

Tags: [verified] read on the page or in the source; [snippet] seen only in search results; [measured] read from a live site with Playwright (Chromium headless, 1440×900, one synthetic wheel event of 100 px); [computed] derived from the source formula; [opinion] the agent's judgement; [memory] written from memory, not checked. All access dates 2026-10-20.

Reddit could not be read: the search tool refuses `reddit.com` and the JSON endpoint returned nothing. X/Twitter search only surfaced promotional posts (Lenis launch, Awwwards), no critique. The critique below comes from Hacker News, accessibility writers, NN/g, Thoughtworks and Lenis' own issue tracker.

## 1. How it is done today

### Lenis (darkroom.engineering, formerly Studio Freight)

- Latest on npm: **1.3.27**, published 2026-10-15 [verified, registry.npmjs.org/lenis]. darkroom's own sites already run **2.0.0-dev.5** (`window.lenisVersion`) with a reorganised options shape (`wheel: {smooth, lerp, multiplier}`, `touch: {smooth: false, …}`, `programmatic`, `nested`) [measured, darkroom.engineering and lenis.dev bundles]. 2.0 is not released; build on 1.3.x and expect a migration.
- How it works: it does **not** translate the page. It listens to `wheel`/`touch`, calls `preventDefault()`, and moves the real scroll position with `window.scrollTo(…, {behavior: "instant"})` every frame, so the scrollbar, `position: sticky`, find-in-page and IntersectionObserver keep working [verified, source `dist/lenis.mjs` 1.3.27, lines 351–360, 539–543, 585–640].
- The curve: with `lerp`, each frame does `value = damp(value, target, lerp*60, dt)`, i.e. `lerp(x, y, 1 − e^(−lerp·60·dt))`, frame-rate independent (cites Rory Driscoll's damping article). The animation ends when `Math.round(value) === Math.round(target)` [verified, source lines 24–38, 76–92]. So the time constant is **τ = 1 / (60·lerp) s**: 50 % of a wheel tick arrives after 0.69 τ, 90 % after 2.3 τ [computed].
- Precedence trap: in `Animate.advance`, `duration && easing` is checked **before** `lerp`. If you pass `duration`, Lenis also fills in the default easing and the duration curve wins, even though the README says "duration is ignored when lerp is set" [verified, source lines 79–92, 443]. Pass only `lerp`.

Options and defaults (1.3.27) [verified, README https://raw.githubusercontent.com/darkroomengineering/lenis/main/README.md and constructor at source line 434]:

| Option | Default | What it does / note for Doctrina |
|---|---|---|
| `lerp` | `0.1` | Smoothing intensity 0–1; lower = floatier. The one knob that matters. |
| `duration` / `easing` | unset / expo-out `min(1, 1.001 − 2^(−10t))` | Fixed-time curve instead of lerp. Wins over lerp if set (see trap). |
| `smoothWheel` | `true` | Smooths wheel events (mouse wheel **and** trackpad, which arrive as `wheel`). |
| `syncTouch` | `false` | Touch stays fully native unless enabled; "can be unstable on iOS < 16". |
| `syncTouchLerp`, `touchInertiaExponent` | `0.075`, `1.7` | Only with `syncTouch`. |
| `wheelMultiplier` | `1` | Scales distance per wheel tick. Changing it changes the scroll *rate*. |
| `touchMultiplier` | `1` | Only matters with `syncTouch`. |
| `autoRaf` | `false` | `true` runs its own rAF loop; otherwise call `lenis.raf(time)`. |
| `anchors` | `false` | `true` (or ScrollToOptions with `offset`) smooths `#hash` link clicks. |
| `stopInertiaOnNavigate` | `false` | Stops the glide when an internal link is clicked. |
| `prevent` | — | `(node) => boolean`; true = don't smooth inside that node. Same as `data-lenis-prevent` (also `-wheel`, `-touch`, `-vertical`, `-horizontal`). |
| `allowNestedScroll` | `false` | Auto-detects nested scrollers, "checks the DOM on every scroll event", costs performance; README prefers `data-lenis-prevent`. |
| `virtualScroll` | — | Hook per input event; returning `false` skips Lenis for that event (it then scrolls natively) [verified, source `onVirtualScroll`]. |
| `respectReducedMotion` | `true` | With `prefers-reduced-motion: reduce`, lerp is forced to 1 and programmatic scrolls jump; README says don't disable it. |
| `autoResize` | `true` | ResizeObserver. |
| `overscroll` | `true` | Like `overscroll-behavior`. |
| `autoToggle`, `infinite`, `orientation`, `gestureOrientation`, `wrapper`, `content`, `eventsTarget`, `naiveDimensions` | — | Not needed for Doctrina. |

Behaviour by input [verified, source unless noted]:
- **Touch (phones, tablets):** native by default. With `syncTouch: false` the touch branch sets `isScrolling = "native"` and returns without `preventDefault`. darkroom's own 2.0 defaults keep `touch.smooth: false` [measured]. Edoardo Lunardi: "leave `syncTouch` set to `false`, there is usually no reason to enable smooth scroll on mobile or touch devices" [verified, https://www.edoardolunardi.dev/blog/building-smooth-scroll-in-2025-with-lenis, 2025-09-28].
- **Trackpad:** treated as wheel, so it gets smoothed too. There is no trackpad detection: issue #237 "Optionally disable smooth scrolling on trackpads" (opened 2023-10-01) says macOS trackpads already have momentum and Lenis on top feels "too loose and unresponsive"; maintainer arzafran: "i don't think there's a reliable way to detect trackpad only"; still open, labelled `blocked`, last comment 2026-01-13 [verified, https://github.com/darkroomengineering/lenis/issues/237].
- **Keyboard (Page Down, Space, arrows, Home/End):** Lenis has no `keydown` handler; these scroll natively and Lenis just syncs its state in `onNativeScroll` [verified, source, no `keydown` in the file]. darkroom.engineering adds its own arrow-key handler (`scrollTo(scroll ± 100, {lerp: .2})`) [measured, bundle]; Doctrina should not.
- **Pinch zoom:** `ctrlKey` wheel events are ignored, so zoom stays native [verified].
- **Nested scroll areas:** wheel inside a modal, the sidebar or a sideways scroller would drive the page unless marked `data-lenis-prevent` (Lenis' CSS adds `overscroll-behavior: contain` to those) [verified, README + `dist/lenis.css`].
- **Sticky:** works, the page really scrolls [verified, README]. **Fixed:** "may lag on pre-M1 Macs running Safari" [verified, README].
- **Anchors:** "blocked during smooth scrolling unless `anchors` is enabled" [verified, README].
- **iframes** (embedded video): wheel over them stops smoothing; the CSS sets `pointer-events: none` on iframes while smoothing [verified, CSS].
- **Safari** caps the loop at 60 fps, 30 fps in Low Power Mode [verified, README].
- **CSS `scroll-behavior: smooth`** on `html` does not fight Lenis: its writes use `behavior: "instant"` [verified, source 539–543].
- The rAF loop runs **every frame, even idle**, when `autoRaf` is on [verified, source `raf`, line 726–731].

### Alternatives

- **GSAP ScrollSmoother:** translates a `content` wrapper with `matrix3d()` to "catch up" to the native scroll; `smooth` = seconds to catch up, default **0.8**; no smoothing on touch-only devices unless `smoothTouch`; "`position: fixed` elements will be fixed to the `content` rather than the viewport" [verified, https://gsap.com/docs/v3/Plugins/ScrollSmoother/]. Transform-based, so worse for Doctrina's sticky ruler and study panel.
- **Locomotive Scroll v5:** built on top of Lenis (adds parallax/in-view helpers); README says v5 is in beta [snippet, https://dev.to/jqueryscript/locomotive-scroll-v5-lightweight-parallax-smooth-scroll-library-3fkj]. Nothing extra for us.
- **Native `scroll-behavior: smooth`:** only affects programmatic scrolls and anchor jumps, not the user's wheel. The browser's own wheel smoothing (Chrome on Windows/Linux, Firefox "Use smooth scrolling") already exists at the OS/browser level [memory; the HN thread https://news.ycombinator.com/item?id=24293722 mentions Firefox's setting, snippet].
- **No library:** the honest baseline; the proposal must show it next to the presets.

## 2. Opinions

### Against (or "only if…")
- **NN/g, "Scrolljacking 101"** (Sara Paul, 2023-08-06): scrolljacking "changes the speed and sometimes the direction of scrolling"; "The majority of our study participants were at least mildly disoriented"; text combined with altered scrolling caused the most severe issues; "scrolljacking leads to more user pain than benefits". It does not address light inertia on top of native scroll [verified, https://www.nngroup.com/articles/scrolljacking-101/].
- **Hacker News, "Lenis – Get smooth or die trying"** (2022-11-17, 22 points): graypegg: "please never use this on anything I'm expected to actually read"; p1necone: "If I'm reading primarily text content just give me a regular article format with a regular scrollbar"; javawizard on an M1 Air: "it takes a few hundred milliseconds to start moving"; quanticle: fans spin up, "feels a bit laggy" on a weak laptop; nikonyrh: odd with Page Down; rco8786: broke two-finger swipe back on Mac (2022 version). gw98: "Smooth as butter. No fans" on a desktop [verified, https://news.ycombinator.com/item?id=33622411].
- **HN "Tell HN: In my entire life, I have never enjoyed a scrolljacking website"** (2023-06-30, 44 points): uniformly hostile; IIsi50MHz: "mentally blacklist the site" [verified, https://news.ycombinator.com/item?id=36542038].
- **Thoughtworks Technology Radar** (Oct 2024, "Assess"): "the library can have issues with accessibility, particularly with vertical and horizontal scrolling interactions… it needs careful implementation" [verified, https://www.thoughtworks.com/radar/languages-and-frameworks/lenis].
- **Lenis issue #237** (above): the trackpad double-smoothing complaint, unsolved since 2023 [verified].
- **Accessibility writers:** Heather Migliorisi (CSS-Tricks, 2017-04-14): JS smooth scroll to anchors leaves keyboard focus behind; fix with `tabindex="-1"` + `focus()` after the scroll. Comment by Michael Schofield: "keyboard navigation != scroll intent" (tab should move at the speed of focus; wheel may be animated) [verified, https://css-tricks.com/smooth-scrolling-accessibility/]. Amber Hinds (Equalize Digital, 2023-10-10): with a theme's smooth scroll on, the skip link "visually appears to scroll down to the content, but is entirely nonfunctional" for keyboard and screen-reader users [verified, https://theadminbar.com/accessibility-weekly/watch-out-for-smooth-scroll/].
- 21st.dev (2026-08-21): libraries must be "tested with a wheel, Page Down, and a screen reader" and need a reduced-motion path that disables them fully; on a wheel, interpolation "smears" discrete input. Its harsher claims ("Page Down… have to be reimplemented", find-in-page breaks) are about transform-based libraries and do not apply to Lenis [verified, https://21st.dev/blog/smooth-scroll-react].
- Forum complaints: Lenis + ScrollTrigger choppy on mobile, top reply "disable Lenis on mobile"; a Webflow user saw Space scroll the page while typing in a form (fixed in a later Lenis) [snippet, https://gsap.com/community/forums/topic/38517-scrolltrigger-and-lenis/, https://discourse.webflow.com/t/help-form-fields-with-lenis-smooth-scroll/222293].

### For
- Michael Vestergaard (iliketoplay.dk, May 2026; his tweet inspired Lenis): the classic problem is "hijacking scroll entirely"; "Lenis does not do this… the browser is still scrolling, the scrollbar still reflects where you are"; his own library toggles by input type because identical behaviour on touch and mouse "is usually wrong"; "try Lenis. It earned its reputation." [verified, https://iliketoplay.dk/insights/smooth-scroll/].
- Lenis authors (lenis.dev): smooth scroll used to be "hacky, heavy, inaccessible"; the smoothness was "a happy accident" of syncing WebGL and DOM; they claim no accessibility trade-offs without detail [verified, https://lenis.dev/]. Studio Freight on X: "our new standard" (arzafran, 2022) [snippet, https://x.com/arzafran/status/1548798985300762625].
- Edoardo Lunardi: keeps "sticky, snap, anchor links, and accessibility intact", example uses `lerp: 0.1` [verified, link above].
- Adoption: Lenis showcases Netflix Careers, GTA VI, Google, realfood.gov, ndstudio.gov [verified, https://lenis.dev/]; Framer ships an official Lenis plugin [snippet, https://x.com/framer/status/1914747536935674222].

### What "too floaty" vs "subtle" means in numbers
No source states a threshold. The vocabulary in the sources: "too loose and unresponsive" (trackpad, default lerp), "a few hundred milliseconds to start moving", "laggy"; on the other side a WordPress reviewer wanted "a stronger effect" from a plugin that was too subtle [snippet, https://it.wordpress.org/plugins/smooth-scrolling-with-lenis/]. Lenis' default (lerp 0.1, ~385 ms to 90 %) is what showcase sites ship; it is the most common source of the "loose" complaint on Mac trackpads. Anything below 0.1 is the "floaty" end.

### Live sites [measured, 2026-10-20]
Response to one 100 px wheel event: time until the page has covered 50 / 90 / 99 % of the distance (includes ~20–30 ms input latency). Config read from the shipped bundle.

| Site | Lenis | Config in bundle | 50 % | 90 % | 99 % |
|---|---|---|---|---|---|
| darkroom.engineering (Lenis' authors) | 2.0.0-dev.5 | wheel `lerp: .125`; touch smooth off; own arrow keys `lerp: .2` | 111 ms | 328 ms | 578 ms |
| lenis.dev | 2.0.0-dev.5 | (same codebase) | 121 ms | 354 ms | 588 ms |
| jobs.netflix.com | 1.2.3 | no override found → defaults (lerp 0.1) | 125 ms | 392 ms | 724 ms |
| ndstudio.gov | 1.3.26 | `{autoRaf: false, lerp: .1, duration: 1.2, smoothWheel: !prefersReducedMotion}` → duration wins: 1.2 s expo-out | 145 ms | 411 ms | 728 ms |
| realfood.gov | 1.3.25 | not isolated; curve identical to ndstudio (same studio) | 144 ms | 413 ms | 728 ms |
| landonorris.com | 1.1.20 | `{lerp: 0.1, smoothWheel: true, syncTouch: true, touchMultiplier: 1.25}` | 585 ms | 898 ms | 1222 ms |
| rockstargames.com/VI | 1.3.17 | horizontal gallery: `lerp: .07` (`.9` under a flag), `wheelMultiplier: 1.2`, not on touch | page scroll locked in the probe | — | — |
| press.stripe.com | none | native | — | — | — |

Reading: everybody ships ≈ the default; darkroom itself is a little tighter (0.125). Lando Norris shows the cost of main-thread scrolling: a heavy WebGL page delays the first movement by ~0.5 s, exactly HN's "a few hundred milliseconds to start moving". The only lerp below 0.1 found (0.07) is a showpiece horizontal gallery. unseen.co uses a different library (`asscroll`); itsoffbrand.com was locked by its preloader.

## 3. Accessibility and performance

- **Reduced motion.** WCAG 2.3.3 (AAA) exempts "basic page scrolling" because the user controls it, and flags motion added *by* scrolling; the sufficient techniques are the `prefers-reduced-motion` media query in CSS (C39) or JS (SCR40) [snippet, https://w3c.github.io/wcag/understanding/animation-from-interactions.html, https://w3.org/WAI/WCAG22/Techniques/css/C39]. Lag-and-glide on top of the reader's input is added motion, so turn it off under `reduce`. Lenis does this by default (`respectReducedMotion: true` forces lerp 1 and instant programmatic scrolls) [verified]. ndstudio.gov goes further and passes `smoothWheel: !prefersReducedMotion` [measured]. Do both: don't even instantiate Lenis under `reduce`.
- **Trackpad users (most Mac readers).** macOS already produces momentum as a stream of wheel events; Lenis lerps that stream again, so it can only add lag there. It cannot tell trackpad from mouse (#237) [verified]. A heuristic through `virtualScroll` (return `false` for events that look like a trackpad) is possible but maintainers call detection unreliable; a Logitech mouse was misdetected [verified, #237]. [opinion] This is the strongest reason to keep the preset tight: whatever we pick will be felt mostly on trackpads, where the benefit is smallest.
- **Mouse wheel users (Windows/Linux, Mac with a plain mouse).** This is where smoothing visibly helps: discrete 100 px notches become a glide. Chrome and Firefox already smooth wheel notches on several platforms [memory, not checked]; Lenis replaces that with its own curve.
- **Keyboard (Page Down, Space, arrows, Home/End).** Untouched, native [verified]. Don't add a keydown handler (darkroom does) [opinion: keyboard is not scroll intent, Schofield above].
- **Focus and skip links.** For our own in-page jumps (ruler, witness markers, citation reader), move focus to the target after the scroll ends (`tabindex="-1"` + `focus({preventScroll: true})` in `onComplete`) and update the hash [verified as the fix, CSS-Tricks; Lenis `scrollTo` has `onComplete`, source line 752].
- **Find-in-page, scroll restoration, screen readers.** All native because the document really scrolls; find-in-page jumps natively and Lenis resyncs on the native scroll event [verified, source `onNativeScroll`]. Back/forward restoration is the browser's; Lenis `resize()` resets its target to the actual position [verified, source]. Screen readers don't emit wheel events [opinion]. Transform-based libraries (ScrollSmoother) are the ones that risk these [verified, 21st.dev + GSAP docs].
- **Input lag.** By construction: with lerp 0.1, half a wheel notch arrives after ~115 ms and 90 % after ~385 ms [computed; measured 125/392 ms on jobs.netflix.com]. Smoothing also runs on the main thread (native wheel scroll runs on the compositor), so any long task delays the first movement; landonorris.com took 585 ms to move at all [measured]. Doctrina is mostly static HTML, so this risk is low but real on pages with the living ruler, filters and the study panel [opinion].
- **Battery / CPU.** With `autoRaf: true` the loop wakes every frame even when idle [verified]. Small but constant; the HN fan complaints were on heavier 2022 pages [verified, HN]. [opinion] Use `autoRaf` (simplest) but measure on a mid laptop; if it shows, drive `raf` only while `isScrolling`.
- **Safari:** 60 fps cap, 30 fps in Low Power Mode, so the glide looks steppier there [verified, README].
- **Where to switch it off:** touch devices (keep `syncTouch: false`); `prefers-reduced-motion: reduce`; inside the study panel / bottom sheet, the sidebar tree, modals and the citation window, the horizontal timeline T1 and any sideways scroller (`data-lenis-prevent`); while a modal is open (`lenis.stop()` / `start()`); over embedded video iframes (automatic).

## 4. Recommendation for Doctrina

### Shared base (all three presets)
```js
new Lenis({
  autoRaf: true,
  smoothWheel: true,          // wheel + trackpad
  syncTouch: false,           // phones and tablets stay native
  wheelMultiplier: 1,         // never change the distance per notch (NN/g: rate changes = scrolljacking)
  respectReducedMotion: true, // and don't create Lenis at all under `reduce`
  anchors: false,             // our jumps call lenis.scrollTo themselves (see below)
  stopInertiaOnNavigate: true,
  allowNestedScroll: false,   // mark nested scrollers with data-lenis-prevent instead
  lerp: /* preset */,
  // no `duration`: it would override lerp
})
```
Plus Lenis' CSS, `data-lenis-prevent` on the study panel, sidebar, modals, citation window and T1 timeline, and `lenis.stop()` while a modal is open.

### The presets (numbers [computed] from τ = 1/(60·lerp), for one 100 px notch; names and choice [opinion])

| Preset | `lerp` | τ | 50 % | 90 % | settles (<0.5 px) | Reference |
|---|---|---|---|---|---|---|
| **A · Apenas** ("barely") | `0.3` | 56 ms | 39 ms | 128 ms | ~300 ms | Takes the edge off a mouse notch; on a trackpad close to native. |
| **B · Sutil** ("subtle") | `0.18` | 93 ms | 64 ms | 213 ms | ~490 ms | Between native and darkroom's own 0.125. |
| **C · Notable** ("noticeable") | `0.1` | 167 ms | 115 ms | 384 ms | ~880 ms | Lenis default; what jobs.netflix.com ships and ~ndstudio/realfood [measured]. Upper limit: the "too loose on trackpad" complaint (#237) is about this value. |

Nothing below 0.1 (the floaty end: GTA VI's gallery at 0.07). Show **native (no library)** beside them, as it is today. The demo must be tried on Pedro's Mac with the trackpad **and** with a mouse wheel: the presets feel very different on each. [opinion] Expected pick: B, or A if the trackpad lag bothers him; C is there to show where "pasarse" starts.

### How it meets what is already decided
- **Right-edge section ruler:** it reads the real scroll position (Lenis moves the real scroll), so it keeps working; update it from `lenis.on('scroll')` or the native `scroll` event, either works [verified that Lenis writes real scroll]. Its active block will lag the input by the same τ, which looks consistent [opinion].
- **In-page smooth jumps** (ruler clicks, a witness marker scrolling to its quote, the citation reader opening at a paragraph): call `lenis.scrollTo(target, {offset: -header, duration: …, onComplete: focus target})` instead of `scrollIntoView({behavior: 'smooth'})`, so one engine owns the scroll and a wheel during a jump interrupts it cleanly. Under reduced motion Lenis makes them instant [verified]. On touch, where Lenis is idle for input, `lenis.scrollTo` still works for programmatic jumps [verified: `syncTouch` only gates touch input]. Their curve is a separate decision from the wheel preset [opinion].
- **Sticky living time ruler and sticky headers:** `position: sticky` keeps working [verified, README].
- **ROADMAP "Later: custom smooth scroll (Lenis) with a desktop scrollbar":** this research covers the scroll feel only; a custom scrollbar is a separate item.

### Strongest arguments
For:
1. Lenis eases the real scroll, so sticky, find-in-page, keyboard, focus and screen readers stay native (Vestergaard, Lunardi, source).
2. With a mouse wheel, notches become a continuous glide; it is the "subtle, smooth, driven by the reader" motion already chosen for the site (DECISIONS 2026-10-19).
3. Cheap and reversible: one small dependency, touch untouched, reduced-motion handled by default.

Against:
1. On Mac trackpads it can only add lag on top of OS momentum, and Lenis can't detect trackpads (#237, open since 2023).
2. Readers of long text are the group most hostile to it (HN: "never use this on anything I'm expected to actually read"; NN/g: text plus altered scrolling = worst).
3. It moves scrolling to the main thread and keeps a rAF loop alive; any heavy moment delays the first movement (landonorris.com: 585 ms measured).

Status: done (2026-10-20 23:01 -03)
