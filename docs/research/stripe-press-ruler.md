# Stripe Press tick ruler: reverse-engineered

_Research for rebuilding the left-edge tick ruler of https://press.stripe.com and reusing its hover motion on Doctrina's horizontal "fingerprint" strip (2026-10-19). Scripts and frames live outside the repo, in the session scratchpad `stripe-ruler/` folder._

Tags: `[verified]` = measured in the live page or read in its source; `[inferred]` = deduced, not measured.

## Progress

- 2026-10-19: done. Source read (controller, page controller, CSS), live measurements at 1440/1024/900/768/390, per-frame JSON for hover in, hover out, step and sweep, screencast crops, rebuild spec and a tested 50-line sketch. Gaps listed at the end.
- Scratchpad: `/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/605747c9-b45b-424d-a17b-3e137c382055/scratchpad/stripe-ruler/` (scripts `measure.mjs`, `record3.mjs`, `screencast.mjs`, `scroll.mjs`, `sketch.js`, `sketch-test.html`; data `rec1440-gpu/`; frames `cast/`).

## Source facts (read in the bundles) `[verified]`

Controller `PressHomepageMenu` (`v1-chunk-3E6H4BUZ.js`), page controller `PressHomepage` (`v1-Page-IQ2DHPWI.js`), CSS `v1-Menu-b7d5063837e4314c5ab0.css`. Plain DOM, no SVG/canvas, no animation library: every motion in the ruler is a CSS transition; JS only writes `transform: scaleX(k)` and toggles classes.

Markup per tick:
```html
<button class="PressHomepageMenu__productIndicator" data-js-slug="built-to-grow">
  <div class="PressHomepageMenu__productIndicatorFill"></div>
  <div class="PressHomepageMenu__label PressHomepageMenu__label--productIndicator">Built to Grow</div>
</button>
```

CSS (verbatim, minified source):
```css
.PressHomepageMenu{position:fixed;top:0;left:0;height:calc(var(--screenHeight)*0.833);padding:calc(10px + 1vw);display:flex;flex-direction:column;justify-content:space-between}
@media (min-width:811px){.PressHomepageMenu{height:var(--screenHeight)}}
.PressHomepageMenu__productList{margin-left:4px}
@media (max-width:899px){.PressHomepageMenu__productList{display:none}}
.PressHomepageMenu__productIndicator{position:relative;width:16px;height:13px;cursor:pointer;padding:5px 0;transition:transform .3s;transform:scaleX(0);color:var(--color);opacity:0}
.PressHomepageMenu__productIndicatorFill{width:100%;height:100%;background:var(--color);opacity:.3;transition:transform .2s;transform-origin:0 0}
.PressHomepageMenu__productIndicator--isActive .PressHomepageMenu__productIndicatorFill,
.PressHomepageMenu__productIndicator:hover .PressHomepageMenu__productIndicatorFill{opacity:1}
.PressHomepageMenu--isInitialized .PressHomepageMenu__productIndicator{opacity:1;transform:scaleX(1)}
.PressHomepageMenu__label{position:relative;opacity:0;transform-origin:0 50%;font-size:15px;white-space:nowrap;user-select:none;color:var(--color);display:none}
.PressHomepageMenu__label--productIndicator{position:absolute;padding-left:90px;left:0;top:-3px}
.PressHomepage--isIndicatorLabel .PressHomepageMenu__label{display:block}
.PressHomepage--isIndicatorLabel .PressHomepageMenu__productIndicator:hover .PressHomepageMenu__label{animation:MenuLabelReveal .2s ease forwards}
@keyframes MenuLabelReveal{0%{transform:translateX(-5px);opacity:0}to{transform:translateX(0);opacity:1}}
```

JS (verbatim excerpts, de-minified names kept):
```js
var I = 1.4, L = .1;                       // intro delay base, per-tick stagger (s)
handleMouseEnterIndicator = e => {         // e = hovered index
  if (this.isXSmallScreen) return;         // < 600px: no effect
  dispatch("Page:menuLabelEnabled");       // adds PressHomepage--isIndicatorLabel
  let t = 2.5, s = 2;
  this.productIndicatorEls.forEach((n, i) => {
    let o = Math.abs(e - i) / this.productIndicatorEls.length * Math.PI,
        r = Math.max(1, Math.cos(o) * s + t);
    this.setIndicatorScaleX(n, r);         // fill.style.transform = `scaleX(${r})`
  });
};
handleMouseLeaveIndicator = () => { dispatch("Page:menuLabelDisabled"); all -> scaleX(1) };
// per tick: el.style.transitionDelay = `${i*0.1 + 1.4}s`; click -> handleClickBook(i) + handleMouseLeaveIndicator()
```
Note the transition delay is set on the button, whose own `transition` is `transform .3s` (intro scaleX 0→1); the fill's `transform .2s` has no delay, so hover is never delayed.

Page controller (`v1-Page-IQ2DHPWI.js`):
- Breakpoints: `isSmallScreen = clientWidth < 900`, `isXSmallScreen = clientWidth < 600`.
- Active tick on scroll (shelf view): `updateCenterListProduct` picks the last book whose top satisfies `top - canvasHeight * (isSmall ? .1 : .333) < scrollY`, then `menu.toggleActiveIndicator(old, new)` (class swap, so the active fill jumps to opacity 1 with no transition).
- Detail view: same, with `productDetailsTop - canvasHeight * bookTriggerPercent <= scrollY` (`bookTriggerPercent` .25 desktop, .3 small).
- Click: `activateProductDetailsList(i)` sets `document.scrollingElement.scrollTop = target` directly (instant jump, no smooth scroll); the perceived motion is the WebGL camera/book transition, not the page scroll.
- Ruler color: `setMenuCssColor` sets `--color` per tick from the WebGL book colors depending on which book is behind each tick (so ticks over a light spine change color).

## Structure `[verified]` (1440×900, home, shelf view)

Method: Live measurements done at 1440×900 (GPU Chromium, 60 fps sampling via in-page `requestAnimationFrame` reading computed `transform` of every fill). Raw JSON: `stripe-ruler/rec1440-gpu/{hover10,hover0,step10to11,sweep}.json`. Note: with software WebGL the page renders at ~3 fps, and with WebGL disabled the hover never fires (the menu's `isXSmallScreen` stays at its default `true` until the WebGL `canvasReady` event), so only the GPU run is valid.

- **Container:** `.PressHomepageMenu`, `position: fixed; top: 0; left: 0`, full viewport height (≥ 811px wide), padding `calc(10px + 1vw)` = 24.4px at 1440. Column with `justify-content: space-between`: logo top, tick list middle, "?" about button bottom.
- **Tick list:** `.PressHomepageMenu__bookList` at x = 28.39 (padding 24.39 + `margin-left: 4px`), y = 321.5, 34 × 296px box, vertically centred in the 900px viewport (because of `space-between`).
- **Count:** 20 book ticks + 1 film icon + 1 podcast icon (16 × 12 SVGs, opacity .3 / 1 active, not scaled). The JS treats all 22 as one list, so **N = 22** in the falloff formula (confirmed: tick 0 settles at 2.785 when tick 10 is hovered = `2.5 + 2·cos(10π/22)`).
- **One tick:** `<button>` 16 × 13px, `box-sizing: border-box`, `padding: 5px 0` → the visible fill is **16 × 3px**. Pitch = **13px** (buttons stacked with no margin; gap between bars 10px). The 13px button is the hit target; there is no gap between hit targets, so the pointer never "falls between" ticks.
- **Fill:** `background: var(--color)` (white `rgb(255,255,255)` on the dark home), **opacity .3 at rest, 1 when hovered or active**. `transform-origin: 0 0` → it grows to the right only (left edge pinned at x = 28.39).
- **Colour:** `--color` per tick is set by JS from the book colours (the ruler re-tints itself where it overlaps a spine; on the home at rest every tick read white).
- **Labels:** one per tick, absolutely positioned, `padding-left: 90px; top: -3px` → text starts 90px right of the tick's left edge (beyond the 72px max fill), Ivar Headline 600, 15px, letter-spacing .32px, same `--color`. Hidden (`display:none`) except while the pointer is on the ruler.
- **Active tick:** class `--isActive` → fill opacity 1, no length change. At load with scroll 0 no tick carried the class in my runs (`[verified]` that it was absent; why is `[inferred]`: `updateCenterListProduct` only flags it on scroll/initialisation of the camera).
- **Intro:** each tick button starts at `scaleX(0)`/opacity 0; when the menu gets `--isInitialized` it goes to `scaleX(1)` with `transition: transform .3s` (CSS default `ease`) and `transition-delay: 1.4s + i·0.1s` (tick 0 at 1.4s, tick 19 at 3.3s). Opacity flips to 1 instantly. So the ruler "draws itself" top-to-bottom, one tick every 100ms.

## Hover `[verified]`

What moves: **only the fill's length** (`scaleX`), growing rightwards. No x offset, no vertical movement, no thickness change. Colour/opacity: the hovered tick's fill jumps .3 → 1 instantly (no transition on opacity); neighbours stay at .3.

Neighbours: **all ticks** get a new target, not just a few. Target scale for tick `i` when tick `h` is hovered, N = 22:

`scale(i) = max(1, 2.5 + 2·cos(π·|i − h| / N))`

| distance d | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12 | 14 | 16 | ≥17 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| scale | 4.50 | 4.48 | 4.42 | 4.32 | 4.18 | 4.01 | 3.81 | 3.33 | 2.79 | 2.21 | 1.67 | 1.19 | 1 (clamped) |
| length px (16·scale) | 72 | 71.7 | 70.7 | 69.1 | 66.9 | 64.2 | 61.0 | 53.3 | 44.6 | 35.4 | 26.7 | 19.0 | 16 |

So it is a very wide, flat-topped cosine bump (FWHM ≈ ±10 ticks): hovering pushes out the whole ruler, with the hovered tick only ~0.3% longer than its immediate neighbours. The "dock" feel comes from the broad bulge sliding with the pointer, not from a sharp peak. The hovered tick is singled out by **opacity** (1 vs .3) and by its **label**, not by length.

Label: on entering the ruler `PressHomepage--isIndicatorLabel` is added (all labels become `display:block` but stay opacity 0); the hovered one runs `MenuLabelReveal` .2s `ease`: opacity 0 → 1 and `translateX(-5px)` → 0. Leaving a tick hides its label instantly (no fade-out); leaving the ruler removes the class.

### Per-frame measurement, hover in on tick 10 (pointer enters at t = 0)

Frames at ~16.7ms. Values are `scaleX` read from computed style; length = 16 × scale px.

| t (ms) | d=0 (tick 10) | d=1 | d=3 | d=5 | d=10 (tick 0) | label opacity / x |
|---|---|---|---|---|---|---|
| 5 | 1.00 (opacity → 1) | 1.00 | 1.00 | 1.00 | 1.00 | 0 / −5 |
| 21 | 1.00 | 1.00 | 1.00 | 1.00 | 1.00 | 0 / −5 |
| 38 | 1.25 | 1.25 | 1.24 | 1.22 | 1.13 | .07 / −4.64 |
| 54 | 1.77 | 1.77 | 1.73 | 1.66 | 1.39 | .22 / −3.90 |
| 70 | 2.43 | 2.42 | 2.36 | 2.23 | 1.73 | .41 / −2.96 |
| 88 | 3.01 | 3.00 | 2.91 | 2.73 | 2.03 | .58 / −2.12 |
| 104 | 3.47 | 3.46 | 3.34 | 3.12 | 2.26 | .71 / −1.47 |
| 121 | 3.81 | 3.79 | 3.66 | 3.42 | 2.43 | .80 / −0.99 |
| 137 | 4.06 | 4.04 | 3.90 | 3.63 | 2.56 | .87 / −0.63 |
| 154 | 4.24 | 4.22 | 4.07 | 3.79 | 2.65 | .93 / −0.38 |
| 170 | 4.36 | 4.34 | 4.19 | 3.89 | 2.71 | .96 / −0.20 |
| 187 | 4.44 | 4.42 | 4.26 | 3.96 | 2.75 | .98 / −0.08 |
| 204 | 4.49 | 4.47 | 4.31 | 4.00 | 2.78 | 1.00 / −0.02 |
| 221 | 4.50 | 4.48 | 4.32 | 4.01 | 2.79 | 1 / 0 |

Every tick moves in lockstep (same progress curve, different end values) because they share one transition. The progress column `(s−1)/(target−1)` at tick 10 is 0.07, 0.22, 0.41, 0.57, 0.70, 0.80, 0.87, 0.92, 0.96, 0.98, 1.00: exactly CSS `ease` = `cubic-bezier(.25,.1,.25,1)` over 200ms, starting one frame after the pointer event.

### Hover out (pointer leaves to the stage)

Opacity back to .3 and label gone on the first frame; lengths then return to 1 with the same 200ms `ease`: tick 10 went 4.50 → 4.25 → 3.73 → 3.07 → 2.48 → 2.03 → 1.69 → 1.44 → 1.26 → 1.14 → 1.06 → 1.01 → 1.00 at 16.7ms steps.

### Moving to the next tick (10 → 11, after settling)

`mouseleave` (all targets → 1) and `mouseenter` (new targets) fire in the same task, so each fill's transition is simply retargeted from its current value; the bump slides down by one tick over 200ms `ease` (tick 0: 2.79 → 2.50; tick 19: 3.06 → 3.33; hovered pair barely changes, 4.48 ↔ 4.50). Opacity swaps instantly; the new label replays its 200ms reveal.

### Sweep (pointer down the ruler at ~20 ticks/s)

Raw: `sweep.json`. Each pointer step restarts a 200ms `ease` toward a shifted target, so the bulge trails the pointer by ~2 ticks (~100ms) and its crest only reaches ~4.40–4.43 while moving, settling to 4.50 ~150ms after the pointer stops. When the pointer reaches tick 19 the top ticks (0–2) relax back to 1. This trailing, softly-chased crest is the "liquid" feel; there is no spring and no rAF loop.

Frame evidence (screencast at ~60 fps, crops 300 × 330px of the ruler): `stripe-ruler/cast/crop/{in,out,sweep}_<ms>.png` and contact sheets `stripe-ruler/cast/sheet-in-all.png`, `sheet-out.png`, `sheet-sweep.png`. The screencast drops frames now and then (CDP emits on damage), so use the JSON numbers above for timing and the images for shape. Note: frame filenames carry an unknown constant offset between Node's clock and the browser's frame timestamps (first hover-in frame is named +234ms); the order is right, the absolute ms are not.

## Timing `[verified]`

| What | Property | Duration | Easing | Delay | Source |
|---|---|---|---|---|---|
| Tick length on hover in/out and retarget | fill `transform: scaleX()` | 200ms | `ease` (CSS default = `cubic-bezier(.25,.1,.25,1)`) | 0 | `.PressHomepageMenu__productIndicatorFill{transition:transform .2s}`; measured progress fits `ease`/200ms with RMS error 0.003 |
| Hovered/active tick brightness | fill `opacity` .3 → 1 | instant | none | 0 | no transition declared; measured jump in one frame |
| Label reveal | `opacity` 0 → 1, `translateX(-5px)` → 0 | 200ms | `ease` | 0 | `@keyframes MenuLabelReveal`, `animation: … .2s ease forwards` |
| Label hide | — | instant | — | — | `:hover` lost / class removed |
| Intro (first paint) | tick button `scaleX(0)` → 1 | 300ms | `ease` | 1.4s + 0.1s × index | `transition: transform .3s` + inline `transitionDelay` |
| Return / film / podcast items fade in | `opacity` | 300ms | `ease` | 0 | `.PressHomepageMenu__film{transition:opacity .3s}` |

No springs, no lerp, no rAF loop, no animation library in the ruler (searched the controller: only `classList`, `style.transform`, `style.transitionDelay`). The softness comes entirely from re-targeting a short CSS `ease` transition on every pointer event. `prefers-reduced-motion`: no rule in `v1-Menu-*.css` `[verified]`; the site does not reduce this motion.

## Scroll and click `[verified]`

- **Active tick follows scroll.** On the shelf, the active index is the last book whose list position minus a third of the viewport height (`0.333 × innerHeight`; `0.1` under 900px) is above `scrollY`. Measured at 1440×900: scroll 200 → tick 1, 600 → 3, 1200 → 6, 2400 → 13 (≈ one tick per 185px of scroll). The swap is a class change, so the bright tick jumps, it does not glide. At `scrollY = 0` no tick was active in any run (a quirk of the init check, `[inferred]` from the code: index 0 is never flagged because it equals the initial `centerProductIndex`).
- **Click.** Calls `activateProductDetailsList(i)`: sets `document.scrollingElement.scrollTop` straight to that book's detail section (measured jump to 15469px in a 63955px document, no smooth scroll), adds `PressHomepage--isActiveProduct`, recolours the whole page and the ruler's `--color` from the book (Boom → ruler `rgb(235,173,203)` on maroon), shows the "Return to shelf" arrow above the ruler, and calls `handleMouseLeaveIndicator()` so the bulge collapses with the 200ms ease. Screenshot: `stripe-ruler/after-click-small.png`.
- **3D stack in sync (brief).** The WebGL camera moves with scroll (`cameraScrollRatio`); on click it switches to the single-book view and the book twirls. Not to be copied.

## Mobile and breakpoints `[verified]`

- `< 900px` wide: `.PressHomepageMenu__productList{display:none}` → **no ruler at all** (measured 0 × 0 at 390×844 and 768×1024). Mobile shows only the logo and the full-width book stack (`stripe-ruler/d390/full-small.png`).
- `< 600px`: the JS hover handler also returns early (`isXSmallScreen`), irrelevant since the list is hidden.
- 900–1440: ruler visible, same tick sizes (16 × 3, pitch 13); only the container padding scales with `calc(10px + 1vw)` (x = 23 at 900, 24.2 at 1024, 28.4 at 1440). There is no touch behaviour to copy.

## Rebuild spec

Values are Stripe's `[verified]` unless tagged. A test page built from this spec (`stripe-ruler/sketch-test.html`) reproduced Stripe's settled lengths to two decimals (2.78 … 4.50 … 3.06 for a hover on tick 10 of 22) `[verified]`.

**Geometry (vertical ruler)**
- Tick hit box 16 × 13px, contiguous (no gaps), `padding: 5px 0`, `box-sizing: border-box`; visible bar 16 × 3px; pitch 13px.
- Bar: `background: currentColor`, opacity .3 at rest, 1 when hovered/active; `transform-origin: left center` equivalent (`0 0` in Stripe; the bar is 3px tall so it makes no difference).
- Ruler fixed at the left edge, inset `calc(10px + 1vw) + 4px`, vertically centred. Hidden below 900px.
- Label: absolute, `left: 0; top: -3px; padding-left: 90px` (starts 18px past the longest bar), 15px, weight 600, letter-spacing .32px, same colour as the ticks.

**Hover falloff**
- Target for every tick when tick `h` is hovered: `k(i) = max(1, 2.5 + 2·cos(π·d))`, with `d = |i − h| / N` (N = total ticks). Peak 4.5× (16 → 72px), clamp to 1× at `d ≥ 0.77`.
- For unevenly spaced ticks use pixel distance instead: `d = |x_i − x_h| / spanPx`, with `spanPx = N × pitch = 22 × 13 = 286px` to match Stripe's bulge width (bulge reaches rest at ±220px, half-height at ±≈130px) `[inferred]` (an equivalence, not something Stripe does).
- Leave: every tick back to 1.

**Motion**
- Length: `transition: transform 200ms ease` on the bar; nothing else animates the bars. Re-targeted on every hover change (no queueing, no spring).
- Brightness: opacity change with no transition.
- Label: `@keyframes` 200ms `ease`, opacity 0 → 1 and `translateX(-5px)` → 0, `forwards`; hide instantly.
- Intro (optional): bars `scaleX(0 → 1)`, 300ms `ease`, stagger 100ms per tick after a 1.4s delay. For Doctrina, 1.4s + 2.2s of stagger is long `[inferred]`; keep the shape, shorten the numbers if used at all.
- Active (scroll-linked) tick: class swap, opacity only, no glide.

**Reduced motion** (Stripe has none; recommendation `[inferred]`): under `prefers-reduced-motion: reduce` set the bar transition to `none` and show the label without the keyframe. Optionally skip the bulge entirely and keep only opacity + label, since twenty bars changing length at once is still a lot of movement.

**Input** `[inferred]`: Stripe listens to `mouseenter`/`mouseleave` per tick and does nothing on touch (the ruler is hidden on small screens anyway). For keyboard, apply the same targets on `focus` and reset on `blur`; tick buttons need an accessible name (Stripe relies on the label text inside the button).

**Horizontal fingerprint adaptation** `[inferred]`
- Rotate the geometry: bar 3px wide × 16px tall (or the strip's rest height), grows **upward** with `scaleY` and `transform-origin: bottom`. Same 4.5× peak, same 200ms `ease`, same instant opacity .3 → 1.
- Ticks sit at year positions on a 1–2026 axis, so they are neither evenly spaced nor contiguous. Use the pixel-distance falloff and pick the hovered tick as the one **nearest the pointer** on `pointermove` over the whole strip (the sketch does this); this mimics Stripe's contiguous hit boxes, so the bulge never drops while sweeping across empty years.
- Many ticks per pixel (dense centuries) will make the bulge look like a solid hill; the spec does not cover that case.

**Vanilla-JS sketch** (50 lines; tested, copy at `stripe-ruler/sketch.js`). Markup: `root > [data-tick] > [data-tick-fill] + .label`; CSS as above, with `.is-hovered .fill{opacity:1}`, `.is-labelled .label{display:block}`, `.is-labelled .is-hovered .label{animation:reveal .2s ease forwards}`.

```js
function tickRuler(root, { axis = "y", spanPx = null } = {}) {
  const ticks = [...root.querySelectorAll("[data-tick]")];
  const fills = ticks.map((t) => t.querySelector("[data-tick-fill]"));
  const scale = axis === "y" ? "scaleX" : "scaleY";
  const n = ticks.length;
  let centers = [];
  let current = -1;
  const measure = () => {
    centers = ticks.map((t) => {
      const r = t.getBoundingClientRect();
      return axis === "y" ? r.top + r.height / 2 : r.left + r.width / 2;
    });
  };
  const distance = (i, h) =>
    spanPx ? Math.abs(centers[i] - centers[h]) / spanPx : Math.abs(i - h) / n;
  const enter = (h) => {
    if (h === current) return;
    current = h;
    root.classList.add("is-labelled");
    ticks.forEach((t, i) => {
      const k = Math.max(1, 2.5 + 2 * Math.cos(Math.PI * distance(i, h)));
      fills[i].style.transform = `${scale}(${k})`;
      t.classList.toggle("is-hovered", i === h);
    });
  };
  const leave = () => {
    current = -1;
    root.classList.remove("is-labelled");
    ticks.forEach((t, i) => {
      fills[i].style.transform = `${scale}(1)`;
      t.classList.remove("is-hovered");
    });
  };
  const nearest = (p) => {
    let best = 0;
    centers.forEach((c, i) => { if (Math.abs(c - p) < Math.abs(centers[best] - p)) best = i; });
    return best;
  };
  measure();
  addEventListener("resize", measure);
  root.addEventListener("pointermove", (e) => {
    if (e.pointerType !== "mouse") return;
    enter(nearest(axis === "y" ? e.clientY : e.clientX));
  });
  root.addEventListener("pointerleave", leave);
  ticks.forEach((t, i) => {
    t.addEventListener("focus", () => enter(i));
    t.addEventListener("blur", leave);
  });
}
```

## Gaps

- Not determined: why no tick is active at `scrollY = 0` beyond the code reading (looks like an init quirk); exact per-tick `--color` rules while the ruler overlaps spines (code read, not measured across the shelf).
- Screencast frame filenames have a constant clock offset; the timing evidence is the in-page per-frame JSON, not the PNG names.
- Measured in headless Chromium with GPU on macOS only; Safari/Firefox not checked (pure CSS transitions, so differences are unlikely `[inferred]`).
