# Text entrance: refined references for reading-heavy pages

## Progress

- 2026-10-21 00:35: started. Brief: Pedro rejected the dreamorphics entrance applied site-wide («el efecto actual no es el que busco»); find 10–14 real sites, read their mechanism, group into families, recommend 3–4 presets.
- 2026-10-21 00:45: done. 27 URLs probed, 22 usable (sites 1–22 below), 6 families, 4 presets + 1 optional add-on, 6 key frames. Not done: mobile 390 px pass, Safari/Firefox, a Guardian/NYT long-read article, Awwwards listings crawl.
- Method: Playwright (Chromium 1440×900 and 390×844), init script that logs every `IntersectionObserver` option set, `Element.animate()` call, CSS `transitionrun`/`animationstart` event and inline-style mutation, plus frame captures on load and while scrolling. Captures in the session scratchpad (`…/scratchpad/text-entrance/`).

## Sites

All accessed 2026-10-21, Chromium 1440×900 unless noted. "Read" = taken from CSS/JS or the `Element.animate()` call itself; "measured" = sampled from inline-style mutations or frames.

### 1. Linear, home — https://linear.app/
- **What:** only the hero title animates on load, split by line (`span.titleLine`, 3 lines desktop / per-line mobile). Each line: opacity 0→1, `filter: blur(10px)`→0, `translateY(20%)`→0 (20 % of the line box height; about 10 px at that size, estimated). Read from the `Element.animate()` calls.
- **Timing:** 1000 ms, delay 400 ms + 33 ms per line, easing `cubic-bezier(0.25, 0.1, 0.25, 1)` (CSS `ease`), fill both. Once.
- **Not animated:** body copy, section headings and lists are static on scroll; the rest of the page "moves" through product mock-ups, not text.
- **Reduced motion:** the same 12 `animate()` calls still run (not honoured for the title).
- **Takeaway:** the blur is on one display headline, once, at the top. Never on reading text.

### 2. Anthropic, home — https://www.anthropic.com/
- **What:** hero `h1` fades in, **opacity only, no translate, no blur** (GSAP-style inline `opacity` steps; measured 0→1 between 961 ms and ~2 290 ms, curve fits ease-out cubic, ≈ 1.35 s).
- **Scroll:** in the expanding-media card, its copy pieces fade opacity 0→1 when a sentinel crosses (`rootMargin: "10000px 0px -50% 0px"`, i.e. when it reaches mid-viewport): `animate({opacity:[0,1]}, {duration:1000, delay:100·i, easing:"cubic-bezier(0.33,1,0.68,1)"})` (read). Stagger 100 ms.
- **Reduced motion:** nothing left hidden after scroll (respected).
- **Takeaway:** one slow opacity-only fade for the title, short opacity stagger for a small group. No movement at all.

### 3. BibleProject, home — https://bibleproject.com/
- **What (read from CSS):** hero badge, `h1`, subheading and play button: `@keyframes home-feature-primary-intro { 0% { opacity: 0; translate: 0 .5rem } }`, `1s ease-out backwards`, delays 0.5 / 0.6 / 0.7 / 0.8 s (100 ms stagger). Hero only.
- **Scroll:** CSS scroll-driven animations (`animation-timeline: view()` / `scroll()`, `animation-range: contain 65% contain 75%` and `40svh 50svh`), only for the hero leaving (fade + scale to 0.8) and a secondary CTA; behind `@supports (animation-timeline: scroll())`. Body sections are static.
- **Reduced motion:** 7 `prefers-reduced-motion` blocks; nothing hidden under `reduce` (respected).
- **Takeaway:** the closest niche (Bible study): an 8 px rise, 1 s, 100 ms stagger, title block only.

### 4. Paco Coursey — https://paco.me/
- **What (read):** `@keyframes enter { 0% { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: none } }`; `[data-animate] { animation: .6s both enter; animation-delay: calc(var(--stagger) * var(--delay) + var(--start)) }`, `--delay: .12s`. Each top-level block of the page gets `--stagger` 0…6 (h1 0 ms, intro 120, 240, 360… 720 ms).
- **Scope:** load only; the whole (short) page is one cascade. No IntersectionObserver for reveals. Easing `ease`.
- **Reduced motion:** the rule is wrapped in `@media (prefers-reduced-motion: no-preference)`.
- **Takeaway:** the canonical "page settles in once" cascade; works because everything is above the fold.

### 5. Rauno Freiberg — https://rauno.me/
- **What (read):** CSS `index_fadeFrames` 0.35 s, delay 0.8 s, `ease-in-out`, on the project frames only (not on text). Text is static.
- **Takeaway:** text never animates; only media frames, once, after the text is already readable.

### 6. Emil Kowalski — https://emilkowal.ski/
- **What:** no text entrance at all. The only motion is a course banner that slides from `translateY(-100%)` with a spring (`linear()` easing, 550 ms, delay 500 ms, read). Reduced motion: nothing hidden.
- **Takeaway:** the author of the "animate with purpose" doctrine leaves reading text alone.

### 7. Stripe Press, book page — https://press.stripe.com/the-art-of-doing-science-and-engineering
- **What (read):** on load the book details panel runs `productDetailsFadeIn` (opacity, 0.5 s, delay 0.3 s, linear); menu labels `MenuLabelReveal` (opacity 0 + `translateX(-5px)`, 0.2 s); shelf indicators transition `transform 0.3s ease` with delays 1.4–3.6 s (a slow cascade on the book spines, not text). No IntersectionObserver; long praise/excerpt text is static on scroll.
- **Takeaway:** the spectacle is the 3D book; the text panel only cross-fades in half a second.

### 8. Works in Progress — https://worksinprogress.co/
- **What:** no text entrance. Images fade in when loaded (`img.is-loaded`, `opacity 0.2s ease-in-out`). Skeleton shimmer while content loads.
- **Takeaway:** magazine-of-record behaviour: text is there immediately.

### 9. Asterisk — https://asteriskmag.com/
- **What:** no entrance. Hover reveals article snippets (`opacity 0.2s ease-in`). `scroll-behavior: smooth`.

### 10. The Pudding, "Are Pop Lyrics Getting More Repetitive?" — https://pudding.cool/2017/05/song-repetition/
- **What:** no entrance. Scrollytelling steps (`div.slide`) sit at opacity 0.5 and the active step is full opacity: emphasis of the paragraph being read, not an entrance. Nothing hidden.

### 11. Sefaria, Genesis 1 — https://www.sefaria.org/Genesis.1?lang=bi
- **What:** no entrance; the text range swaps in when loaded (`.loading` class removed), no fade. 
### 12. Craig Mod, "Fast Software, the Best Software" — https://craigmod.com/essays/fast_software/
- **What:** no entrance. Its only IntersectionObserver (`rootMargin: "0px 0px -5% 0px"`) watches `#read-end` to log reading completion; another lazy-loads images.

### 13. ESV.org, Romans 5 — https://www.esv.org/Romans+5/
- **What:** no entrance, no transitions.

### 14. Vercel, home — https://vercel.com/
- **What:** no text entrance; hero shader canvas fades `opacity 1.2s linear`; a word-swap `fade-in 0.2s ease-out` behind `motion-safe:`. Reading text static.

### 15. Anthropic, research article — https://www.anthropic.com/research/tracing-thoughts-language-model
- **What (measured):** only the article header (`ArticleHero` header: title, dek, meta, table of contents) fades **opacity 0→1, no movement**, 819 → ~1 610 ms (≈ 800 ms, ease-out: 0.10 at +23 ms, 0.57 at +190, 0.84 at +357, 0.96 at +524). The body, headings, figures and footnotes never animate, on load or on scroll. Reduced motion: nothing hidden.
- **Takeaway:** the best reading-page example found: the page "arrives" through its title alone.

### 16. Linear Now (editorial index) — https://linear.app/now
- **What (read):** the content wrapper fades in once, `animate({opacity:[0,1]}, {duration:200, easing:"ease-out"})`. No per-element entrance; on scroll nothing animates.
- **Takeaway:** page-level fade, not element-level.

### 17. Fondation Cartier — https://www.fondationcartier.com/en
- **What (read from CSS + measured):** page transitions with swup: `html.is-animating .transition-page, html.is-leaving .transition-page { opacity: 0; transition: opacity .35s ease-out }` and `html.is-rendering .transition-page { opacity: 1; transition: .35s ease }`. Measured on a click to /en/collection: content opacity 0.51 at 120 ms, 0 at 260 ms, 0.86 at 420 ms, 1 at 700 ms. Header and navigation stay solid; only the content area crossfades. No element-level entrance on the pages.
- **Takeaway:** museum-grade calm: motion lives in the change of page, not inside the page.

### 18. Museum of the Bible — https://www.museumofthebible.org/
- **What (measured from inline styles):** card grids only. Initial `opacity: 0; transform: translateY(20px)` (subtitles `translateX(-20px)`), then `opacity 1s cubic-bezier(0.5, 0, 0, 1)` + same for transform, delay 0.05 s; items fire one after another 76 ms apart (6 174 / 6 250 / 6 326 / 6 402 ms), the next row when it reaches the viewport. GSAP present. The section heading and its paragraph beside the grid are static.
- **Reduced motion:** cards still start hidden under `reduce` (not honoured; partially verified).
- **Takeaway:** stagger is reserved for a set of equal items; the explanatory text next to it does not move.

### 19. Kinfolk — https://kinfolk.com/
- **What (measured):** images only: GSAP sets `translate(0, 20px)` and `opacity 1.2s cubic-bezier(0.25, 1, 0.5, 1)` on lazy-loaded images; Lenis smooth scroll. Titles and text static.

### 20. Rijksmuseum — https://www.rijksmuseum.nl/en
- **What (read):** images only: blurred low-res placeholder (`filter: blur(20px)`) under the real image, which fades `opacity 0.4s` / `transform 0.8s` when loaded. **Blur exists, but only on image placeholders.** Text static.

### 21. Obys Agency — https://obys.agency/
- **What (read):** classic line mask reveal: `animate([{transform:"translate3d(0,110%,0)"},{transform:"translate3d(0,0%,0)"}], {duration:1600, delay:60·i, easing: linear(…expo-out…)})` on nav labels and logo paths inside `overflow: hidden` lines; image sliders `transform 1.6s cubic-bezier(0.16, 1, 0.3, 1)`. Preloader of ~11 s before the reveal.
- **Takeaway:** the Awwwards-circuit agency signature. Display only; the 1.6 s + preloader is the opposite of a reading tool.

### 22. Locomotive — https://locomotive.ca/en
- **What:** preloader with per-character scramble (`div` per char, opacity), Lenis smooth scroll, `data-scroll`. Agency showcase; character scramble is discarded for Doctrina (see families).

### Not usable (recorded so they are not retried blindly)
- https://amfa.org/ and https://www.aesop.com/: Cloudflare challenge page for the headless browser.
- https://hallow.com/: redirects to the app sign-in; no marketing page rendered.
- https://www.theguardian.com/news/series/the-long-read: consent overlay; index static, no entrance. No individual long-read article was opened. NYT not tried (paywall).
- https://sagradafamilia.org/en/, https://klim.co.nz/, https://darkroom.engineering/, https://www.apple.com/airpods-pro/, https://www.thebrowser.company/: no text entrance relevant to reading (carousel transitions, image wipes, nav menus).
- Awwwards: two searches did not surface an editorial/religion Site of the Day with a reading-page reveal; Awwwards listing pages were not crawled. Awwwards status of Obys and Locomotive is from memory, not verified.

## Families

Six families. "Reading-heavy" sites (WIP, Asterisk, Craig Mod, Sefaria, ESV, Guardian, Anthropic article, The Pudding) fall in A, B or F; none animates body paragraphs on scroll.

| Family | Best example | Exact parameters | For long reading |
|---|---|---|---|
| **A. No text entrance; only media fades** | Works in Progress (images `opacity .2s ease-in-out` on load), Craig Mod, Sefaria, ESV; Rijksmuseum blur-up on images only | text: none; images: 200–400 ms opacity | The norm for serious reading. Text is there the instant the page paints. |
| **B. Title block fades, opacity only** | Anthropic article header; Anthropic home `h1` | opacity 0→1, no translate, no blur; 800 ms (article) / ~1 350 ms (home), ease-out cubic `cubic-bezier(0.33,1,0.68,1)`; once on load | Excellent: one gesture of arrival, nothing else moves; zero waiting for text below. |
| **C. "Settle" cascade above the fold** | Paco Coursey; BibleProject hero | Paco: `translateY(10px)`, 600 ms `ease`, 120 ms stagger; BibleProject: `translate: 0 .5rem`, 1 s `ease-out`, 100 ms stagger; load only | Good for the page header and first screen; turns bad if extended to everything (that is dreamorphics). |
| **D. Display headline by line** | Linear hero (blur 10 px + rise 20 % + fade, 1 s, 33 ms/line); Obys (mask `translateY(110%)`→0, 1.6 s expo-out, 60 ms) | split by line, `overflow:hidden` for the mask variant | Only for one big title. Feels "agency" quickly; blur variant softens display type, never body. |
| **E. Stagger only for sets of equal items, on scroll** | Museum of the Bible card grid; Anthropic media copy pieces | MOTB: opacity + `translateY(20px)`, 1 s `cubic-bezier(0.5,0,0,1)`, 76 ms between items, per row; Anthropic: opacity only, 1 s `cubic-bezier(0.33,1,0.68,1)`, 100 ms, triggered at mid-viewport | Fine for lists (sources, witnesses, timeline entries) because each item is a unit; the explanatory paragraph next to them stays still. |
| **F. Page-level crossfade, no element entrance** | Fondation Cartier (swup), Linear Now | Cartier: out `opacity .35s ease-out`, in `.35s ease`, header stays solid; Linear Now: in 200 ms `ease-out` | Calmest "alive" option: motion marks the change of place, then the page is still. |

Also seen, not a family for Doctrina: The Pudding's scrollytelling dims inactive steps to opacity 0.5 (emphasis of the step being read; useful only for a guided narrative); Locomotive's character scramble (discarded: gimmick, unreadable during the effect, and splitting per char breaks screen readers and Greek/Hebrew shaping unless handled).

### How each differs from dreamorphics, and why it probably felt wrong (hypotheses, not tested with Pedro)

Dreamorphics: every paragraph, opacity + 14 px rise + **8 px blur**, 1.1 s, triggered when its top crosses 92 % of the viewport, 100 ms base delay + 85 ms cascade.

1. **Blur on body text.** In the sample, blur appears only on one display headline once (Linear) or on image placeholders (Rijksmuseum). Blurred serif paragraphs read as "out of focus" right where the eye lands.
2. **Everything animates.** 0 of the reading-heavy sites animate paragraphs on scroll. Repeating one effect on every block contradicts Doctrina's own motion rule ("few signature animations rather than the same one everywhere", DECISIONS 2026-10-19) and competes with the fingerprint's draw-in, which is already the signature.
3. **Waiting for text.** With the trigger at 92 % plus 100 ms delay and 1.1 s duration, the last ~8 % of the screen is empty and the next lines are still soft when the reader reaches them; on a fast scroll the 85 ms cascade adds more delay. On a page you read top to bottom (and come back to), that is latency, not delight.
4. **Too long for too little movement.** 1.1 s for 14 px; the references that move text use 0.6–1 s for 8–10 px, or opacity alone.
5. **Context.** Dreamorphics is a one-page manifesto read once; Doctrina is a reference people return to, where an entrance seen on every visit becomes friction (frequency argument from Emil Kowalski's writing, cited from memory).

## Recommended presets to try on Doctrina's real pages

Common rules for all: content is visible without JS (hide only after the script adds a class, as dreamorphics does with `opacity: 0.001` so LCP still counts); `prefers-reduced-motion: reduce` → no entrance at all; body paragraphs, block quotes and footnotes never animate; nothing below the first screen waits for a scroll trigger except preset 3's lists; once per page view; nothing replays on back/forward cache restore.

```json
[
  {
    "name": "title-fade",
    "label_es": "Solo el título, fundido",
    "selector_scope": "page header block only: kicker, h1, dek/standfirst, meta line ([data-entrance=title] > *)",
    "from": { "opacity": 0, "y": 0, "blur": 0, "clip": null },
    "duration_ms": 700,
    "easing": "cubic-bezier(0.33, 1, 0.68, 1)",
    "stagger_ms": 80,
    "trigger_rootMargin": null,
    "trigger": "load",
    "once": true,
    "split": "none",
    "source": "Anthropic article header (opacity only, ~800 ms ease-out)"
  },
  {
    "name": "settle",
    "label_es": "Asentarse al entrar",
    "selector_scope": "page header block + the first-screen blocks only (elements whose top < viewport height at load: header, first section heading, first paragraph group, fingerprint strip); everything below the fold is static",
    "from": { "opacity": 0, "y": 8, "blur": 0, "clip": null },
    "duration_ms": 600,
    "easing": "cubic-bezier(0.25, 1, 0.5, 1)",
    "stagger_ms": 90,
    "trigger_rootMargin": null,
    "trigger": "load",
    "once": true,
    "split": "none",
    "source": "Paco Coursey (10 px, 600 ms, 120 ms stagger) and BibleProject hero (8 px, 1 s ease-out, 100 ms)"
  },
  {
    "name": "lists-on-scroll",
    "label_es": "Listas que llegan de a una",
    "selector_scope": "title-fade on the header, plus sets of equal items only: source lists, witness/Father lists, timeline entries, related-doctrine cards ([data-entrance=list] > li); max 8 items staggered, the rest appear with the 8th; headings, paragraphs and quotes static",
    "from": { "opacity": 0, "y": 12, "blur": 0, "clip": null },
    "duration_ms": 600,
    "easing": "cubic-bezier(0.25, 1, 0.5, 1)",
    "stagger_ms": 60,
    "trigger_rootMargin": "0px 0px -10% 0px",
    "trigger": "intersection (per list, not per item)",
    "once": true,
    "split": "none",
    "source": "Museum of the Bible card grid (20 px, 1 s, 76 ms) shortened for reading; Anthropic media copy (opacity, 100 ms)"
  },
  {
    "name": "headline-lines",
    "label_es": "Título línea por línea",
    "selector_scope": "the h1 of doctrine and tradition pages only (not section headings), split into rendered lines, each wrapped in an overflow:hidden line box; the rest of the header fades in with title-fade after the last line",
    "from": { "opacity": 1, "y": "105%", "blur": 0, "clip": "line mask (overflow hidden)" },
    "duration_ms": 900,
    "easing": "cubic-bezier(0.16, 1, 0.3, 1)",
    "stagger_ms": 70,
    "trigger_rootMargin": null,
    "trigger": "load",
    "once": true,
    "split": "lines",
    "source": "Obys line mask (110 %, 1.6 s expo-out, 60 ms) shortened; Linear hero line split (33 ms/line) without its blur"
  }
]
```

Optional add-on, combinable with any of the four (family F): `{ "name": "page-fade", "label_es": "Cambio de página fundido", "selector_scope": "main content area only; header, nav and study panel stay solid", "from": { "opacity": 0 }, "duration_ms": 220, "easing": "ease-out", "stagger_ms": 0, "trigger": "client navigation", "once": "per navigation", "split": "none" }` (Linear Now 200 ms; Fondation Cartier 350 ms out + 350 ms in). How to wire it in Next 16 (template fade vs View Transitions) must be checked in `node_modules/next/dist/docs/` before building.

Notes for the coordinator:
- `headline-lines` needs line splitting that re-runs on resize and font load and keeps the original text for screen readers (`aria-label` on the h1, split spans `aria-hidden`); Spanish/English titles wrap differently, so split after `document.fonts.ready`. It is the riskiest of the four and the most "agency".
- Suggested comparison order for Pedro: current (no entrance, v2 state) → `title-fade` → `settle` → `lists-on-scroll` → `headline-lines`, each on the same real doctrine page, dark and light, 390 px and desktop.

## Key frames (`docs/research/text-entrance/`)

- `a-none-craigmod-load-700ms.jpg`: family A, essay fully readable at 700 ms.
- `b-title-fade-anthropic-t1200ms.jpg`: family B, home `h1` at ~40 % opacity, no movement.
- `c-settle-cascade-paco-mid.jpg`: family C, name and intro mid-cascade, rest not yet in.
- `d-headline-lines-linear-blur7px.jpg`: family D, Linear title lines at opacity 0.23 / blur 7.7 px.
- `e-list-stagger-motb-t250ms.jpg`: family E, cards at opacity 0.75 / 0.57 / 0.22 / 0.06 while the heading and paragraph beside them are static.
- `f-page-crossfade-cartier-t120ms.jpg`: family F, content at 0.51 opacity leaving, header solid.

## Limits

- Desktop Chromium 1440×900 only; the 390 px mobile pass and Safari/Firefox were not run. Linear has separate mobile line spans (`show-mobile`), not inspected.
- Durations "measured" from inline-style sampling are ±20 ms (MutationObserver granularity). GSAP-driven easings are fitted, not read.
- Reduced-motion checks only count hidden elements after load and after a 1 800 px scroll under `reducedMotion: 'reduce'`.

Status: done
