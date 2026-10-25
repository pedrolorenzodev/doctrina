# Design

Doctrina's visual system, as approved in the structure proposal v2 (https://claude.ai/artifact/EDPtLnLWu2fHscbBgmu7rM, Pedro 2026-10-21). Read before any UI (`.claude/rules/ui.md`). Values are copied from the proposal's code; the why of each choice lives in `DECISIONS.md` (entry titles cited as «DEC date · title»). `[inference]` marks what was not read from code or DECISIONS. Approved by silence counts as approved (DEC 2026-10-20 · Structure proposal: the design direction holds); anything here may reopen on Pedro's feedback.

Reader (05, 06) and the clean-site fixes: proposal https://claude.ai/artifact/NYBF1wY8WNz2rpDAPPKutn (DEC 2026-10-21 · Screens 05 (source) and 06 (verse): the reader's structure; 2026-10-22 · Reader notes). Code: `docs/research/proposals/reader-05-06/` (current files, not `v5/`), `site-clean/`.

Tokens map 1:1 to Tailwind v4 `@theme` variables in `src/app/globals.css`. Dark mode is `[data-theme="dark"]` on `<html>`, wired as a custom variant (`@custom-variant dark (&:where([data-theme=dark], [data-theme=dark] *))`) [inference: Tailwind mechanism]; tokens are redefined under that selector, never duplicated per component.

## 1. Color

| Token (`@theme`) | Light | Dark | Use |
|---|---|---|---|
| `--color-bg` | `#e8e5de` | `#1d1d1c` | page, sticky bars, drawer, reader |
| `--color-ink` | `#1c1713` | `#f2f2f0` | headings, strong text, page links |
| `--color-ink-2` | `#2a2620` | `#d0d0cc` | prose, sidebar links, secondary UI |
| `--color-ink-3` | `#615c54` | `#9a9a96` | labels, meta, captions, dates |
| `--color-ink-prose` | `#4f4b44` | = `ink-3` | grey serif prose: `obj-s`, `esc-d`, `wl-r`, `srcl-desc` |
| `--color-rule` | `#c9c5bc` | `#3a3a38` | hairlines |
| `--color-rule-2` | `#aeaba4` | `#4d4d4a` | stronger hairlines, axes, resting link underline, box borders |
| `--color-accent` | `#2c4a9e` | `#9eb3ee` | the one accent: selection, current position, focus ring |
| `--color-accent-weak` | `rgb(44 74 158 / .1)` | `rgb(158 179 238 / .12)` | selected backgrounds |
| `--color-accent-mid` | `rgb(44 74 158 / .45)` | `rgb(158 179 238 / .45)` | ranges, borders of accent blocks |
| `--color-cite` | `#5f3d0c` | `#d6a865` | links that open in place (citations) |
| `--color-cite-weak` | `rgb(95 61 12 / .09)` | `rgb(214 168 101 / .12)` | citation hover / open |
| `--color-card` | `rgb(255 255 255 / .35)` | `rgb(255 255 255 / .03)` | `btn-go`, connected-doctrine cards |
| `--color-panel` | `#efece6` | `#262625` | citation window, search box |
| `--color-tip-bg` / `--color-tip-ink` | `#1c1713` / `#f4f1ea` | `#f2f2f0` / `#1d1d1c` | tooltips, marker labels |
| `--color-hover` | `rgb(28 23 19 / .05)` | `rgb(255 255 255 / .05)` | hover fill of rows and buttons |
| `--color-mark` | `rgb(240 200 60 / .45)` | `rgb(214 168 101 / .28)` | search match, arrival highlight in the reader, text found in «Tus notas» |
| `--color-mark-user` | `rgb(240 200 60 / .28)` | `rgb(214 168 101 / .20)` | the user's highlight without a colour; = `hl-yellow` (§1 tones) |
| `--color-danger` / `--color-danger-weak` | `#9c2f28` / `rgb(156 47 40 / .14)` | `#e8918a` / `rgb(232 145 138 / .2)` | hold-to-delete dialog only: top 2 px, «Borrar», button border and fill (on `panel`: 6.25 light, 6.38 dark) |
| `--color-danger-fill` | `rgb(156 47 40 / .28)` | `rgb(232 145 138 / .34)` | the hold button's fill while pressed |
| `--color-scrim-strong` | `rgb(28 23 19 / .4)` | `rgb(0 0 0 / .55)` | behind the delete dialog |
| scrim | `rgb(0 0 0 / .35)` | same | drawer, bottom sheet, search |
| shadow (floating only) | `0 18px 40px -18px rgb(0 0 0 / .45)` (search `.5`) | same | citation window, search box; nothing else has a shadow |

Contrast (WCAG, flat background; computed 2026-10-21):

| Text | Light on bg / panel | Dark on bg / panel |
|---|---|---|
| ink | 14.13 / 15.08 | 15.05 / 13.51 |
| ink-2 | 11.95 / 12.75 | 10.91 / 9.79 |
| ink-3 | 5.27 / 5.62 (≥ 4.7 on texture, measured) | 5.97 / 5.36 |
| ink-prose | 6.89 / 7.35 (≥ 6.1 on texture, measured) | = ink-3 |
| accent | 6.47 / 6.90 | 8.14 / 7.31 |
| cite | 7.73 / 8.25 | 7.75 / 6.96 |

- Light contrast is «Prosa oscura» (Pedro, v2 note 8). Measure light-mode text on the texture, not on flat `bg`: the old `#6b665e` passed flat (4.53) and failed on texture (4.0 darkest).
- Accent and cite are the only hues. No colour per tradition. The highlight tones below are the one exception: the reader's own marks, chosen by the user (DEC 2026-10-21 · Reader: highlighting by sentence and by dragged words).

**Highlight tones** (reader, five; soft fill, never an underline: underline means link). Names are the proposal's Spanish ones in English [inference: names].

| Token | Light fill | Dark fill | Swatch light / dark | Text on fill, on texture at its lowest (light / dark) |
|---|---|---|---|---|
| `--color-hl-yellow` | `rgb(240 200 60 / .28)` | `rgb(214 168 101 / .20)` | `#e3bb3c` / `#cfa463` | 10.8 / 7.7 |
| `--color-hl-green` | `rgb(110 175 90 / .26)` | `rgb(125 190 110 / .18)` | `#76aa5e` / `#86b878` | 9.6 / 8.2 |
| `--color-hl-sky` | `rgb(70 170 205 / .22)` | `rgb(95 180 215 / .18)` | `#4fa6c9` / `#6fb3d2` | 9.8 / 8.3 |
| `--color-hl-pink` | `rgb(225 115 150 / .22)` | `rgb(225 125 165 / .18)` | `#d6789a` / `#d48aa6` | 9.6 / 8.5 |
| `--color-hl-orange` | `rgb(235 140 55 / .26)` | `rgb(230 140 70 / .20)` | `#e08a3c` / `#d6935c` | 9.6 / 8.1 |

Swatch tokens `--color-hls-*` (12 px dot, inset 1px `rgb(0 0 0 / .12)`). Sky is greener than `accent` so it is not mistaken for the open sentence. Measured values come from the proposal's page (index.html), not recomputed here; flat-background recomputation on 2026-10-22 gives 10.0–11.1 light and 7.3–8.1 dark.
- Four marks, never mixed up: the browser's own selection; the sentence open in the panel (`accent-weak`); the arrival from a citation (`mark`, fades); the user's highlight (tone, stays). The 2 px `accent` bar at the left of the paragraph (`.was`) marks where you came from.
- Overlap: a new colour over an old one wins; two of the same colour that touch merge into one.
- Notes have no colour of their own and do not mark the text; the verse label in the panel («Juan 6:53:») and the place line in lists use `cite` (dark `#d6a865`, light `#5f3d0c`; DEC 2026-10-22 · Reader notes: «Notas al costado»…). No new token.

**Texture.** Every page surface carries an SVG noise layer: `feTurbulence type=fractalNoise numOctaves=4 seed=7 stitchTiles=stitch` → `feDiffuseLighting lighting-color=#fff diffuseConstant=1`, `feDistantLight azimuth=235`; light `baseFrequency .85, surfaceScale 1.6, elevation 62`, dark `.7, 2.6, 52`; tile 420 px, `mix-blend-mode: multiply`, opacity light `.4`, dark `1`; fixed, `pointer-events: none`. Each opaque sticky or overlay surface (top bar, living ruler, tradition switcher, 09 fixed strip, mobile drawer, reader) repeats the layer so it matches the page.

**Theme.** Light and dark, toggled by the top-bar sun/moon button (labels «Cambiar a modo claro / oscuro»). Default on first visit: the device setting (`prefers-color-scheme`) (Pedro, 2026-10-21); the reader's toggle overrides it.

## 2. Typography

Faces (Google Fonts in the proposal; `next/font` self-hosted in the build, per PROJECT):

| Token | Face | Weights used |
|---|---|---|
| `--font-head` | Newsreader (opsz 6–72), Georgia | 300, 300 italic, 400 |
| `--font-body` | Source Serif 4 (opsz 8–60), Georgia | 300, 400, 500 |
| `--font-ui` | Work Sans, system-ui | 400, 500, 600 |
| `--font-greek` | Gentium Book Plus, Source Serif 4 | 400; set at `1.04em` |

Scale (desktop → ≤720 px). `font-variation-settings: "opsz" n` as listed; dates and counts always `tabular-nums`.

| Role (token `--text-*` [inference: names]) | Face / weight | Size / line-height | Colour | Notes |
|---|---|---|---|---|
| `display` h1 | head 300 | 60/1.03 → 42; tracking −.01em; opsz 72 | ink | 04 objection h1: 52/1.06 → 36/1.1 |
| `lede` | head 300 italic | 24/1.38 → 20; opsz 36 | ink-2 | under h1 |
| `h2` | head 300 | 36/1.15 → 29; opsz 60 | ink | section titles |
| `title` | head 400 | 25/1.2 (→ 23 in 02 answers); opsz 24 | ink | tradition names (02), card titles |
| `title-sm` | head 400 | 24/1.2–1.25; opsz 30 | ink | 09 subsection h3, timeline detail name |
| `defn` | head 300 | 23/1.5 → 20; opsz 24 | ink | 03 definition line |
| `h3` / `punch` | head 400 | 22/1.3 (punch 22/1.5 → 20) | ink | 03 closing line «Por qué» |
| `quote` | head 300 italic | 21/1.45; opsz 24; «» added by CSS | ink | 04 own-words and passages 19/1.5; window 20/1.45 |
| `prose` | body 300 | 19/1.66 → 18; opsz 18 | ink-2 | running text |
| `prose-answer` | body 300 | 18.5/1.62 → 17.5 | ink-2 | 02 tradition summaries |
| `list-title` | body 500 | 19/1.4 (compact 17) | ink | objection, passage titles; videos 17.5/1.45 |
| `prose-sm` | body 300 | 16.5/1.55–1.6 | ink-prose or ink-2 | syntheses, descriptions; `p-s` 17/1.6 |
| `ui-base` | ui 400 | 15 | ink | body default |
| `sub` | ui 400 | 14.5/1.55 | ink-3 | section subtitle, max 620 px |
| `meta` | ui 400 | 13–14/1.5 | ink-3 | captions, crumbs (13), sidebar links 14/1.35 |
| `label` | ui 500 | 12.5 | ink-3 | field labels, sidebar group heads, switcher label; sentence case, never caps |
| `micro` | ui 400–600 | 10.5–12 | ink-3 / tip-ink | axis labels (11, mini 10.5), tooltips 12 |
| logo | head 400 | 23; opsz 24; −.005em | ink | «Doctrina» |

## 3. Space, layout, shape

| Token | Value | Use |
|---|---|---|
| `--spacing` | 4px (Tailwind default) | base unit; proposal values off the 4 px grid (13, 15, 25) are rare |
| `--spacing-top` | 56px → 52px (≤720) | top bar height |
| `--spacing-sidebar` | 272px | sidebar column |
| `--spacing-scroll-offset` | 24px; on pages with the switcher: switcher height + 20 | `scroll-padding-top` = top + offset |
| `--spacing-section` | 140px → 96px (≤720) | between sections listed in the right-edge ruler only («Mucho aire», v2 note 11) |
| `--container-col` | 720px | reading column (60–75 characters) |
| `--container-wide` | 1040px | sections that use the width (02, 04 sources, 09); 06 sections with a side column |
| `--container-reader-wide` | 1100px | reader column when «Latín · original» is «Al lado» (two columns of 720 → 1fr 1fr, gap 40) |
| `--spacing-panel` | 400px | reader side panel (= citation window width) |
| `--spacing-note-card` | 240px | «Notas al costado» card, 40 px right of the column; ≥ 1280 px and panel closed |
| `--spacing-dt-side` | 250px | 06 side column («Citar», «Dónde se usa»), gap 56, left border `rule`, padding-left 22; ≥ 1100 px |
| `--spacing-word-card` | 300px | 06 word-by-word card column, gap 40, sticky at top bar + 24 |
| `--text-reader` (`--rd-fs`) | 17 · 19 · 21 · 23 · 25 · 27 · 29px (default 19) | reader paragraphs; also Latin (size − 2) |
| main padding | ≥1100: 34 112 140 64 · ≤1099: 30 104 120 48 · ≤899: 26 32 110 · ≤720: 22 16 96 | right padding leaves room for the edge ruler |

Breakpoints in the proposal (max-width): **1099** sidebar becomes a drawer; **899** right-edge ruler hidden, 02 practice table switches to its phone pattern, switcher hint hidden; **720** phone layout. Build with Tailwind's defaults (`ui.md`), mapped 1099 → `lg` 1024, 899 → `md` 768, 720 → `sm` 640 (agent, 2026-10-21); check each layout switch on screenshots at the new widths.

Radii (`--radius-*`): 2 (inline link fill, ticks) · 3 (focus ring, position block) · 4 (kbd, tooltips, ruler window) · 5 (small text buttons, marker label) · 6 (rows, tabs, buttons, 04 box, footer boxes) · 7 (`btn-go`) · 8 (legend, cards, segmented filter) · 10 (citation window, search) · 14 (bottom sheet top).

Lines: hairline 1px `rule`; lists draw a top line per item and a bottom line on the last. Borders on boxes 1px `rule-2`. Focus: `2px solid accent`, offset 2px, radius 3 on every `a, button, [tabindex], input, summary`.

Breakpoints of the reader (max-width): **1099** side panel becomes a half sheet (52vh) and 06's side column drops under the text; **899** division numbers go above the paragraph, word card under the words, notes marks move to the right edge, «Al lado» is not offered; **720** phone (selection toolbar docks, «Subrayados» button moves under the title, A−/A+ leave the bar, «Latín · original» moves under the title); **420** the back button says «Volver» (the rest stays for screen readers). Min-width **1100** panel at the right, **1280** note cards (Tailwind `xl`; 1100 has no default, use arbitrary or `lg`+ check [inference]).

Z-layers (`--z-*` [inference: names]): page texture 0 · frame 1 · 09 cue 3 · 09 fixed strip 4 · living ruler 5 · switcher 30 · edge ruler 30 · reader-page back strip 31 · side panel (page) 35 · top bar 40 · reader-page bar 41 · translation list 45 · drawer scrim 59 / drawer 60 (the drawer starts at top 0, over the top bar; it repeats the texture) · window scrim 69 / citation window 70 · reader 80 · side panel (inside the reader) 85 · selection toolbar 86 · search 90 · undo bar 95 · delete dialog 140.

### Tokens and utilities added while building B9–B14 (2026-10-24; values are the clean site's)
- Text roles (`--text-*`, with line height): `quote` 21/1.45 · `punch` 22/1.5 (`punch-mobile` 20) · `note` 14.5/1.6 · `passage` 19/1.4 (title of a passage or objection) · `passage-body` 16.5/1.6 · `synthesis` 16.5/1.55 · `life-label` 14/1.45 · `grade` 20/1.35 (`grade-mobile` 19) · `example` 13.5/1.7 · `video` 17.5/1.45 (`video-mobile` 16.5) · `defn-source` 14.5 (inherits the line height) · `objection` 52/1.06 (`objection-mobile` 36/1.1; h1 of 04) · `box-quote` 19/1.5 (own-words quotes in 04's box and the quote block of its answer) · `source-name` 15/1.45 · `reference` 15.5/1.5 (a passage's reference in 04) · `--leading-group` 1.3 (group headings) · `passage-compact` 17/1.4 and `synthesis-compact` 15/1.55 (compact objection list) · `neighbor-label` 12.5 and `neighbor-title` 16.5/1.4 (04 footer) · `axis` 11 (fingerprint labels) · `legend` 14/1.65 · `question` 19/1.35 (02 «Lo que se discute»); radii 1 and 4. Utilities: `fp-mark`, `fp-draw`, `fp-tip-in`, `max-w-tip` (fingerprint), `witness-by` 13.5/1.6 · `practice` 15/1.5 · `practice-aspect` 21/1.3 · `card` 15.5/1.55; utilities `lr-*` (living ruler), `witness-row`, `practice-wide` / `practice-narrow` (table from 900 px); `answer-name` 25/1.2 (`answer-name-mobile` 23) · `answer` 18.5/1.62 (`answer-mobile` 17.5) · `row` 16/1.45 · `go` 14.5; utility `answer-grid` (200 | 680 px from 1100, 170 px | 1fr from 640, one column under); `common-grid` (text | 240 px side column from 1100 px; the side list stacked under that, max 560), `title-part-3..5`. Utility `source-row` (dated source row grid: name | 104 px date | 180–300 px timeline; name | date and the timeline below under 640 px). Others: `--leading-label` 1.2, `--radius-8` 8 px, `--container-wide` 1040 px, `--container-synthesis` 680 px, `--container-entries` 870 px (10), `--ease-title`, `--shadow-current-underline`.
- Utilities in `globals.css`: `figure-grid` and `figure-row` («Por qué» figures; two columns from 1280 px), `label-row` (168 px label | text, one column under 640), `paragraph-gap` (.55em between paragraphs), `link-example` (quiet in-page link), `link-crumb`, `reserve-bold` (a tab keeps the bold width), `fade-right` and `no-scrollbar` (the switcher's strip), `quiet-links` (page links in `ink-2`), `page-fade` («Fundido»), `title-part` and `title-part-0..2` («Título»), `hit-44`.
- Links: in-place links (`link-cite`, `link-term`, `link-source`) are inline `span role="button"`; a page link or button without a destination renders as a `button` and does nothing (rule in `ui.md`). The doctrine's name in 03's lede takes `cite` at weight 400.
- Focus: `2px solid accent`, offset 2, radius 3 on every focusable element, defined outside the base layer so it beats the elements' own radius; the colour is set on the element, not only on focus.

## 4. Motion

Rule: subtle, smooth, driven by the reader; few signature animations (DEC 2026-10-19 · Doctrine fingerprint; DEC 2026-10-05 · Motion rule). Under `prefers-reduced-motion: reduce` nothing animates: every transition and animation is off, scrolls jump, Lenis is not loaded, states still change.

| Token | Value | Use |
|---|---|---|
| `--ease-standard` | `cubic-bezier(.25,.1,.25,1)` (CSS `ease`) | hovers, tooltips, fingerprint, Ola tween |
| `--ease-reveal` | `cubic-bezier(0.22, 1, 0.36, 1)` | list cascade, FLIP, sidebar, switcher, marks |
| `--ease-title` | `cubic-bezier(0.33, 1, 0.68, 1)` | title entrance |
| `--ease-move` | `cubic-bezier(.4,0,.2,1)` | position block, drawer, sheet, branch fold |
| `--ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | tradition content exit |
| `--ease-sweep` | `cubic-bezier(0.65, 0, 0.35, 1)` | theme arc |
| ease-in-out cubic (JS) | `t<.5 ? 4t³ : 1−(−2t+2)³/2` | programmatic scroll |
| durations | 100 · 120 · 140 · 150 (`fast`) · 160 · 180 · 200 (`mid`) · 220 · 240 · 260 · 300 · 340 · 360 · 380 · 420 · 650 · 700 ms; reader timers: 400 (autosave) · 1200 (arrival fade) · 1600 («copied» label) · 1800 (arrival hold) · 2400 (return flash) · 3000 (hold to delete) · 5000 (undo bar) ms | per pattern below |
| staggers | 20 (tree) · 30 (fingerprint ticks, switcher parts) · 40 (FLIP enter) · 60 (scroll reveal) · 80 (title parts) · 100 (edge-ruler ticks) ms; cap 8 steps | |
| distances | rise 8px (lists) · 16px (switcher, panel content) · 5px (labels) · 6px (window, undo bar, dialog) · 4px (selection toolbar) · 24px (side panel) · exit scale .96 | |

Durations have no Tailwind namespace; keep them as plain variables in `@theme` [inference].

| Pattern | Trigger | Motion | Interruption | Reduced motion |
|---|---|---|---|---|
| Hover / press | pointer, focus | colour, fill, underline 150 ms standard | CSS | instant |
| Title entrance «Título» (built 2026-10-24: crumbs, h1, lede) | page load, after fonts (wait ≤ 800 ms) | header block (crumbs, kicker, h1, lede, fingerprint, caption, facts) fades 0→1, 700 ms `ease-title`, 80 ms apart, no movement; content stays visible without JS (2 s CSS failsafe) | none | visible at once |
| Page change «Fundido» (built 2026-10-24) | moving to another screen | main content fades in 220 ms ease-out; top bar and sidebar stay solid; not on the first load; to review later | — | none |
| Scroll reveal | an item of a list of equals first enters the viewport (IntersectionObserver, rootMargin `0px 0px -15% 0px`), once | from opacity 0 and +8 px, 420 ms `ease-reveal`; items arriving together go 60 ms apart; items already in view at load are not animated | — | none |
| List change (FLIP) | filter, show more/less, reorder | staying items slide to new place 380 ms; leaving items fade + scale .96 in 180 ms as ghost copies; new items rise 8 px in 420 ms after 120 ms, 40 ms apart, ≤ 8 steps; list height animates 380 ms (after the 180 ms exit when shrinking); new items landing below 85 % of the viewport wait for the scroll reveal | a new change cancels running moves and re-measures (see GOTCHAS for the drag case) | instant |
| Expand group (02 «Ver las objeciones que recibe») | button | open: height 380 ms `ease-reveal` + rows enter as FLIP new items; close: rows fade + .96 in 180 ms, then height → 0 in 380 ms; label «Ver las objeciones que recibe» / «Ocultar las objeciones»; plus icon turns 45° (200 ms) | cancels and restarts from current height | instant |
| Sidebar branch «Despliegue» | twisty | open: height from current to full 220 ms `ease-reveal`, children fade in 200 ms ease-out, 20 ms apart (cap 8), no rise; close: children fade 120 ms ease-in, height → 0 in 160 ms `ease-move`; chevron 90° in 150 ms | continues from where it is | instant |
| Sidebar current mark «Viaja» | page change, tradition switch | one mark slides old row → new, 360 ms `ease-reveal` (§8) | starts from the mark's current box | jumps |
| 09 fixed strip «Avance fijo» | timeline selection; scroll | enters 240 ms (opacity + 8 px); content crossfade 160 ms; opacity scrubbed by scroll at the hand-off (§8) | follows scroll | on/off with hysteresis |
| Tradition switch «Deslizar» | tab | indicator: one persistent element slides (translate + width) 340 ms `ease-reveal`; content: by tab order, old exits 140 ms `ease-exit` to opacity 0 and −16 px × direction, new enters 260 ms `ease-reveal` from +16 px × direction, header then list 30 ms apart; tab strip scrolls the chosen tab into view | indicator retargets from its current position; clicks during the exit only change the target, the last one enters | instant swap |
| Theme «Arco botón» | theme button | View Transition: the new theme is revealed by a circle growing from the button's centre to the farthest corner, 650 ms `ease-sweep`; all CSS transitions off during it | — | instant (also without View Transition support) |
| Wheel smooth scroll «Apenas» | mouse wheel / trackpad | Lenis 1.3.26, `lerp: 0.3`, `smoothWheel: true`, `syncTouch: false`, `wheelMultiplier: 1`, `anchors: false`, `stopInertiaOnNavigate: true`, `allowNestedScroll: false`; prevented inside sidebar, citation window, reader, search, switcher strip and any sideways scroller; no `duration` | native touch and keyboard | not loaded |
| In-page jump | index links, edge ruler, section links, ruler marker tap | duration `min(720, 380 + |Δy| × 0.08)` ms, ease-in-out cubic, through Lenis when present; lands at top bar + offset | wheel, touch or a scroll key stops it | instant |
| Fingerprint | load; pointer over strip | ticks draw in (scaleY 0→rest) 300 ms ease, delay 300 + 30 × i ms; hover bulge §5 at 200 ms ease; label fades in rising 5 px, 200 ms | follows nearest tick | static |
| Living ruler «Ola» | pointer near markers | §5; every lift is a fixed 200 ms `ease-standard` tween from its current value | targets change only when the snapped witness changes | instant |
| Edge-ruler entry | load | ticks draw in scaleX 0→1, 300 ms ease, delay 900 + 100 × i ms | — | static |
| Citation window | open / close | desktop: opacity + 6 px, 200 ms ease; phone sheet: translateY(100 %) → 0, 260 ms `ease-move`, scrim 200 ms | — | instant |
| Reader highlight | reader opened at a paragraph | paragraph fill `mark` in 200 ms, holds 1.8 s, fades over 1200 ms; a 2 px accent bar stays on its left | — | fill without fade |
| Mobile drawer | menu button | translateX(−102 %) → 0, 240 ms `ease-move`; scrim 240 ms; the drawer sits above its scrim and the top bar | CSS | instant |
| Reader layer | tap a citation's «Abrir la fuente completa» | layer fades 200 ms (`mid`); focus to «Volver a donde estabas». Close: layer fades, the origin link flashes `mark` (2.4 s keyframes: 8 % → 70 % held, then out) and takes focus | Esc closes only if the panel and the delete dialog are closed | instant; no flash fade |
| Side panel «Panel al costado» | tap a sentence or verse (a tap with text selected does nothing) | ≥ 1100: opacity 200 ms + translateX 24 → 0, 260 ms `ease-move`; the text column makes room (padding-right = panel + 48; layer: panel width). < 1100: half sheet (52vh, radius 14 14 0 0, grip 28×4), translateY(100 %) → 0, 260 ms `ease-move`, text never narrows, its bottom padding grows | tap another sentence retargets; the content swaps (tabs below) | instant |
| Panel tabs «Deslizar» (Pestañas) | tab | same as the tradition switch: indicator 340 ms `ease-reveal`; body exit 140 ms `ease-exit` (−16 px × direction), enter 260 ms `ease-reveal` | as the switch | instant |
| Translation picker | button | list opens as «Despliegue»: height 0 → full 220 ms `ease-reveal`, options fade 200 ms 20 ms apart; closes 120 ms fade, 160 ms height; chevron 90° in 200 ms; flips up when there is less room below than needed and more above; list max 420 px or the room, scrolls inside | opens one at a time | instant |
| «Leer en latín» of one paragraph | panel button, or «Ocultar» | opens 220 ms `ease-reveal` (height) with the label and text fading 200 ms, 20 ms apart; closes 120 + 160 ms | continues from current height | instant |
| Selection toolbar | pointer up on dragged words (10 ms later; on touch 400 ms after the selection settles) | appears 150 ms `ease-reveal` (opacity + 4 px up); leaves 100 ms `ease`; docked version slides from the bottom edge | hides on scroll (floating one), Esc, or an empty selection | instant |
| Highlight add / remove | «Subrayar», a colour dot, key S | fill changes 200 ms; undo bar fades + rises 6 px, 150 ms, stays 5 s; a new change restarts the 5 s | «Deshacer» restores the previous list | instant |
| Notes «Notas al costado» → «Marca en el margen» | window ≥ 1280 and panel closed → cards; panel opens or window narrows → marks | marks fade in 200 ms `ease-out`; cards appear in place, no tween: this is exactly what Pedro approved («Esto lo mantenemos tal cual», DECISIONS 2026-10-22 «Reader notes»); the proposal's «mismo movimiento» wording is stale; both repaint on resize (150 ms debounce) | repaint cancels the previous set | instant |
| Note editor | «Nota» | opens in the panel: height 0 → full + fade 220 ms `ease-reveal`; saves 400 ms after the last key, label «Guardada»; Esc or ⌘/Ctrl+Enter saves and closes | — | instant |
| Hold to delete | press and hold «Mantener para borrar» (pointer, Enter, Space) | dialog: backdrop 150 ms, box rises 6 px 200 ms `ease-reveal`; fill grows scaleX 0 → 1 linearly over 3000 ms; at 1 the note is deleted and the undo bar shows «Nota borrada.» + «Deshacer» | release, blur or pointer cancel returns the fill in 220 ms `ease-reveal` and says «Soltaste antes de tiempo. La nota no se borró.» | the hold stays 3 s; fills without tween |
| Text size A− / A+ | button | instant change; the paragraph at the top of the viewport keeps its place; the ends disable the button (opacity .4) | — | same |
| «Dónde se usa» «Ver N más» · «Comparar traducciones» filter | button · filter | list changes as FLIP (§4 list change); the filter's indicator travels 340 ms `ease-reveal` | — | instant |

## 5. Components

### Links (three kinds, never mixed) — DEC 2026-10-05 · Design principles; ROADMAP «Now» 1, screen 03/04
| Kind | Look | Hover / focus | Open state |
|---|---|---|---|
| Goes to another page (`ln-go`) | ink, weight 500, underline 1px `rule-2`, offset 4px | underline `currentColor`, 2px | — |
| Opens here: citation (`ln-side`) | `cite`, dotted underline 1.5px, offset 4px | fill `cite-weak`, underline solid | while its window is open: keeps the hover look, `aria-expanded="true"`, `aria-haspopup="dialog"`; cleared on close or when another opens (v2 note 4) |
| Opens here: glossary term (`term`) | inherits colour, dotted underline 1.5px `ink-3` | fill `hover`, underline ink | same as citation |
| Faint source (02 «La práctica», `pt-src`) | ink-3, dotted 1px `rule-2`, offset 3px | ink-2, fill `hover`, underline `currentColor` | same |
| Leaves the site (`ext`) | adds a 0.72em external-link mark after the text | — | — |

- Every in-place link has a 44 px tall hit area (pseudo-element).
- Locators never break before their number: the space before a digit in a locator is non-breaking («homilía 1, 6», «Catecismo 1375»).
- Breadcrumbs: 13 px ink-3, «/» separators in `rule-2` with 8 px each side; hover ink + underline (offset 3); current step ink-2, not a link. Every step leads to a real page (DEC 2026-10-14).
- Quiet row link (02 «Objeciones que recibe»): whole row, body 400 16/1.45 ink-2, chevron right in ink-3; hover fill + ink, chevron moves 2 px right. Kept as is (ROADMAP note (4), «keep exactly as it is, for now»).
- «→» is never glued to a link.

### Buttons
| Family | Look | States |
|---|---|---|
| Expand here (`btn-more`) | no border, min-height 40, ui 500 13.5 ink-2, plus icon | hover fill; expanded: icon 45°, label «Mostrar menos». Labels: «Mostrar N más» / «Mostrar N afirmaciones más»; videos add 5 at a time with «Ves n de N» beside; when nothing is left the button disappears (never «Mostrar 0 más»); after «Mostrar menos», if the list top is above the viewport, scroll back to it |
| Go to another page (`btn-go`) | 1px `rule-2`, radius 7, min-height 42, `card` fill, ui 500 14 ink | hover: border ink, fill `hover`. «Ver los N pasajes», «Ver las N objeciones», «Abrir la fuente completa» |
| Leaves the site, in the citation window | text link: ink-2, underline `rule-2` offset 4, external mark («Leer en vatican.va») | hover ink, underline `currentColor` |
| Segmented filter (`vf`, 03 videos) | 3px padding, 1px `rule`, radius 8; items min-height 34, radius 6, 13.5, count 12 ink-3 | hover fill; pressed `accent-weak` + ink 500; full width on phones |
| Chips (02 phone «La práctica») | min-height 38, 1px `rule`, radius 6 | pressed: border ink, ink 500 |
| Icon button | 36×36, radius 6 | hover fill |

- Text in every button, chip and tab is centred on both axes.
- Tap targets ≥ 44 px effective on touch (`ui.md`): the proposal's 32–42 px controls (sidebar rows, tabs, filter, icon buttons, `btn-more`, `btn-go`) get a 44 px hit area on touch without changing their visible size (agent, 2026-10-21; `ui.md` wins over the proposal).

### Citation and glossary window (built in B7 as the functional base; its redesign proposal is still pending, see DEC 2026-10-24 · B7) (shared modal) — ROADMAP «Now» 1, screen 03 «Shared modal»; DEC 2026-10-14 · Edition, translation and licence leave the citation modal
- Desktop: floating, non-blocking panel (`aria-modal="false"`), 400 px wide, max-height `min(560px, 100vh − 96px)`, `panel`, 1px `rule-2`, radius 10, floating shadow. First open: right side (x = viewport − 400 − 112, or − 24 below 900 px), y = top bar + offset + 40. Dragged by its header; remembers where it was left for the next one; clamped 8 px inside the viewport with ≥ 120 px visible, re-clamped on resize.
- Phone (≤ 720): bottom sheet, full width, max-height 78vh, radius 14 14 0 0, grip 28×4, scrim; not draggable.
- Header: kind label («Cita», «Glosario», «Grado de autoridad», «Escritura», «Quién es»), close button. Body, in order: title (glossary), quote (head italic 300 20/1.45, «»), definition (body 300 17/1.6), who (500) + work and locator (ink-3), date row (label + date ui 500 15 tabular) and its mini timeline, actions: «Abrir la fuente completa» (`btn-go`), external text link, «Copiar cita» (→ «Cita copiada» for 1.6 s). No edition, translation or licence.
- Focus moves into the window on open, returns to the trigger on close. Esc closes (order: search, reader, window, drawer).

### Mini timeline (in the window and in dated source lists) — DEC 2026-10-14 · Every highlighted point states its exact date
- 34 px tall; axis 1px `rule-2` at 18 px; end and round-year ticks 7 px with 10.5 px labels, end labels anchored inward; span 1–800 or 1–2026 (or the list's shared span).
- Point 9 px accent; a range is a 7 px `accent-mid` band with the point at its middle; the exact year (or range) in ui 600 11.5 accent above, kept inside 8–92 %.
- Every timeline shows its start and end years and each item's own year.

### Dated source list (04 «Fuentes citadas», 09 «Sus escritos»)
- Row grid: `minmax(0,1fr) 104px minmax(180px,300px)`, gap 6 24, padding 16 0, hairlines. Name: citation link 500 (or plain 500 ink); work below in ink-3; date column ui 500 15 ink tabular (full date «17 sep 1562» when known, else the year; the marker shows the year); description (09) spans columns 1–2 in body 300 16.5/1.55.
- All rows share one axis so they compare at a glance; 09 draws the shared axis once above the list instead of per row.
- Hover: the row's point scales 1.25. Phone: name | date, then the mini timeline full width.
- Groups (04): ui 500 13 ink-3 headings.

### Sidebar tree (built in B4; the full tree, with inert rows, since 2026-10-24) — DEC 2026-10-07 · Navigation: P1's tree sidebar; DEC 2026-10-20 · «Objeciones» is its own page
- Desktop ≥ 1100: sticky under the top bar, full height, own scroll (thin scrollbar `rule-2`, overscroll contained), border-right `rule`, padding 22 14 40 18. ≤ 1099: drawer `min(320px, 86vw)` from the left with scrim, opened by the menu button (40×40), closed by scrim, Esc or navigation.
- Groups «Doctrinas», «Biblia», «Historia», «Consulta»: label style, 22 px apart.
- Row: min-height 32, radius 6, hover fill; twisty 22×28 with 10 px chevron (leaf: empty spacer); link ui 14/1.35 ink-2, count at the right in 12 ink-3 tabular; children indented 13 + 8 px with a 1px `rule` guide.
- States: current = `accent-weak` fill + inset 2 px accent bar, link ink 500, `aria-current="page"`; ancestors of current = link ink; expanded = every visited branch in the session (reset between visits); control «Contraer todo menos dónde estoy» at the top right (12 px ink-3).
- On load and on drawer open the current row is scrolled to 35 % of the sidebar height.
- Current mark animation: §8.

### Tradition switcher (built inert 2026-10-24: current tab carries the style; the sliding indicator waits for a second page) — DEC 2026-10-08 · Tradition switcher that keeps your section; DEC 2026-10-14 (none on 04)
- Sticky under the top bar at the top of the content column, full bleed to the main padding, `bg` + texture; bottom hairline appears once stuck. Label «Tradición» (hidden ≤ 720); hint at the right «Al cambiar, sigues en la misma sección.» / «…en las objeciones.» (hidden ≤ 899).
- Tabs: ui 14 (13.5 phone), padding 8 11 (8 9), min-height 36, radius 6, ink-2; hover fill + ink; current ink 500. Tab width reserves the bold weight so marking never shifts tabs. Overflowing strip scrolls sideways (no scrollbar) with a 44 px fade at the right edge while more is hidden.
- Indicator: one element, always present: `accent-weak` fill + inset 2 px accent underline; moves per §4.
- Fixed tradition order site-wide (Católica, Ortodoxa, Luterana, Reformada, Bautista; Pentecostal joins per DEC 2026-10-14 · Six traditions). Each tradition has its own URL; switching keeps the section.

### Right-edge section ruler (Stripe Press) — ROADMAP «Now» 1, screen 02 horizontal space; `docs/research/stripe-press-ruler.md`
- One tick per section with `data-label` (≥ 2 sections, else none); fixed at the right edge (`max(18px, safe-area)`), vertically centred; hidden ≤ 899.
- Tick 16×3, radius 2, ink at .3; hit area 64×13. Active (last section whose top is above 35 % of the viewport; the last one at page bottom): accent, opacity 1; colour change fades (260 ms), no gliding mark.
- Hover (mouse): cosine bulge scaleX `max(1, 2.5 + 2·cos(π·|i − hover| / N))`, N = max(count, 16), 200 ms; the hovered section's name (head 400 15, ink) appears 90 px to the left, fading in while moving 5 px. Focus does the same.
- Click: smooth jump; the clicked tick stays active for 800 ms.

### Doctrine fingerprint — DEC 2026-10-19 · Doctrine fingerprint, with Stripe Press motion
- Strip from year 1 to 2026; 48 px tall in the doctrine header (40 default), baseline 1px `rule-2`, a 4 px mark per century. One 2 px tick per cited text or event at its year (ink .45), ranges as a faint band (ink .12). Axis labels 1, 500, 1000, 1500, 2026 (11 px). Caption under it: «Los textos y hechos que esta página cita, por fecha.»
- Rest height factor 1/4.5; hover bulge `max(1, 2.5 + 2·cos(π·min(d,1))) / 4.5`, d = distance in px / `min(286, 0.35 × width)`; hovered tick accent (range accent .3). Label (tip style) «Name, year» (ranges «c. a–b»), kept inside 14–86 %.
- Touch: label stays 1.4 s after lifting. Mouse click on a tick runs the page's pick action. `role="img"` with a count label.
- Appears in the doctrine header, doctrine cards (incl. «Doctrinas conectadas») and, still, in the share image.

### Living time ruler (02 «Lo que escribieron los primeros cristianos») — DEC 2026-10-19 · Living time ruler; DEC 2026-10-20 · "Ola"
- Sticky at the top of its section (z 5), padding 30 12 10, `bg` + texture, bottom hairline once stuck (150 ms). Track 58 px; axis at 30 px; span 1–800; ticks every 50 years (100s 9 px, 50s 5 px); labels every 100 (odd hundreds hidden ≤ 720).
- Marker: 9 px dot, `bg` fill, 1.5 px ink-2 border; a 3 px ink-3 segment (.45) along the witness's years. Outside the window: border `rule-2`, segment .18. Hovered or selected: accent dot and segment; scale 1.3 (hovered) / 1.2 (selected).
- «Ola»: the pointer snaps to the nearest witness within 40 px; neighbours within 140 px rise `−14·(0.5 + 0.5·cos(π·d/140))` px on a 1 px accent stem (.6) that grows from the axis upward and never shows below it; the hovered one rises 22 px with its label (tip style, «**Name**, date»); the selected one (no hover) stays at 14 px with its label. Labels near the ends (< 15 %, > 75 %) anchor inward.
- Reading position: an `accent-weak` block with 1px `accent-mid` border, 23 px tall, covering the years of the witness being read ±7 px, moves 220 ms `ease-move`.
- Filter: drag on the track draws a window (`accent-weak`, 1px accent, radius 4, 29 px) with two handles (14 px, 3 px accent grip, `ew-resize`); years snap to 10; minimum 10 years; drag the window to move it; handles take ←/→ by 10 years. Drag starts after 5 px; a tap picks the nearest marker and jumps to its quote.
- **Built 2026-10-25, improvements over the proposal (DECISIONS «02 Doctrine, block 4»):** the pointer area is the whole stage (the label zone above the axis included), so the hover survives going up to the label; snapping takes 40 px with the mouse (44 on touch), the current witness holds until another is closer by `min(4 px, gap/4)` or the pointer is 52 px away (no flicker, and packed markers stay reachable); the cursor is a pointer while a witness is snapped; the window moves by dragging its body anywhere (a tap on it still picks the witness beside it); the markers are one tab stop, ←/→ move between them and Enter jumps; markers take no pointer events (a click would have picked the neighbour under its dot); under 640 px a row stacks its date above the quote.
- Status line (13 ink-3, `aria-live`): «N testigos. Arrastra sobre la regla para elegir años.» / «n de N testigos, años a a b» + «Mostrar todos». Empty: «Ningún testigo de estos años en esta doctrina.»
- List row: grid 110 px date column | quote block, gap 20, padding 22 8, hairline; date 13.5 ink-3; quote; author ui 500 13.5 ink; work + locator as citation link. Hovering a row lights its marker and vice versa (row fill `accent-weak`). Preview shows only quote, author, work + locator, date (ROADMAP «Now» 1, screen 02 note).

### Lists of equals
- Hairline lists (`rule` top per item, bottom on the last). Every list of equal items uses the scroll reveal and FLIP of §4: witnesses, objections (02, 03, Objeciones page, 04 «Otras objeciones»), sources, passages, videos, connected doctrines, «Qué enseña», «Cómo se vive», «Grado de autoridad», 02 answers and «Lo que se discute», 02 practice rows, 03 «Por qué» quotes, 04 own-words quotes, 09 facts, dating rows, recensions, «Dónde aparece», search results (DEC 2026-10-21 · Entrances).
- Objection list (03, Objeciones page, 04 «Otras objeciones»): one component. Title as page link in `list-title`; synthesis 2 lines (3 max) in `prose-sm` ink-prose, max 680 px; padding 20 0 22 (compact 14 0 16, title 17, synthesis 15). No attribution, no counts.
- Passages (03, 04): quote 19/1.5 + reference as page link 15.5 + note 14 ink-3; padding 25 0 in 03 (Pedro), 18 0 19 in 04.
- Label + text rows (03 «Cómo se vive»): grid 168 px label (ui 500 14 ink-3) | text body 300 16.5/1.6; single column on phones.
- Authority table (03 «Grado de autoridad»): label column 190 px head 400 20/1.35; meaning body 300 16.5/1.6; examples 13.5 ink-3 with links; stacked on phones.
- Videos: title as external page link body 500 17.5; meta 13.5 ink-3 «Canal, en español». Cover image per DEC 2026-10-20 · Videos show their cover image (not in the proposal; to design).

### Facts
- Header facts (09): `dl` in a wrapping row, gap 18 44 (14 28 phone, two per row); term 12.5 ink-3; value body 18/1.4 ink, secondary part 15 ink-3. Labels in words: «Nació», «Murió», «Obispo de», «Escribió en». Unknown birth: «Nació: desconocido; suele estimarse c. 35» with its source (DEC 2026-10-06 · Unknown birth dates). «†» only where space is tight, with «murió» tooltip and hidden text (DEC 2026-10-06 · Death dates).
- Facts table (09 «Quién fue»): rows 120 px term (13 ink-3) | value (body 16.5/1.45 ink), padding 10 0, hairlines; when the section is ≥ 900 px wide it sits beside the text (640 | 260 px, gap 56) with term above value.

### Quote + source block (03 «Por qué»)
- Order: intro paragraph (`prose`, 44 px below) → figures → closing line (`punch`) → note to the neutral 02 section (14.5/1.6 ink-3 with page link).
- Each figure: lead line (14 ink-3, full width); quote in column 1, indented 30 px; caption in column 2, top-aligned with the quote: 6 px padding over a `rule` hairline, ui 14/1.5 — author 500 ink, work ink-3, date 500 ink tabular (6 px above), citation link 13.5 («Citado en el Catecismo 1375», 8 px above).
- Grid `minmax(0,670px) fit-content(340px)`, gap 30 78; all figures share the columns (subgrid), so every caption has the same x and the width of the widest caption, each line on one line. ≤ 1099: `minmax(0,1fr) fit-content(300px)`, column gap 62. ≤ 720: one column, caption under its quote, both indented 30.
- Built (B9): the two-column grid starts at 1280 px (`xl`); below it the caption sits under its quote, indented 30, in one column (the sidebar leaves too little width between 1024 and 1279).
- 64 px between the last figure and the closing line. Citations in the text are named («Trento, ses. XIII, cap. 1»), not numbered, and a run of them is one parenthesis separated by «;», with the sentence's punctuation after it: «(Lucas 22:19; Mateo 26:28; Catecismo 1336).»

### 02 components
- Legend under the header: 1px `rule`, radius 8, padding 14 14 14 18, text 14/1.65 ink-2 explaining both link kinds with one live example each; «Entendido» (min-height 36, 1px `rule-2`, radius 6) closes it.
- «Lo que todas comparten»: text column 720 | side column 240, gap 56; side items «Lo que se discute» (label) + question (head 19/1.35), hairline rows. Stacked ≤ 1099.
- «Lo que todas comparten»: «Con las preguntas» on (ROADMAP note 7, «definitivamente»). «Las cinco respuestas»: each tradition's «Objeciones que recibe» starts folded (Pedro, 2026-10-21).
- «Las cinco respuestas» row: grid 200 px | 680 px, gap 14 56, padding 30 0 32 (170 px, gap 36 ≤ 1099; one column ≤ 720): tradition name (`title`); «Grado de autoridad» label + term (500 ink) + basis (13 ink-3); summary; «Ver las objeciones que recibe» (`btn-more`) opening «Objeciones que recibe» (quiet rows); «Estudiar la postura …» page link.
- «La práctica» table: fixed layout, first column 124 px; head ui 500 13.5 ink over a `rule-2` line; row heads ui 500 13 ink-3; cells body 300 15/1.5 ink-2, padding 16 14; row hover fill; sources as faint source links. ≤ 899: «Un aspecto por vez» (chips, then each tradition under the chosen aspect: name ui 500 13 + text body 300 16.5/1.55).
- «Doctrinas conectadas»: cards, the one allowed exception to hairlines (flat, 1px `rule`, radius 8, `card`, padding 20 20 18, no shadow; never spread elsewhere): title `title` with an underline that appears on hover/focus, text body 300 15.5 ink-2 → ink on hover/focus, fingerprint below. One column (max 720) with the published doctrines; 3 / 2 / 1 columns when there are more.

### 04 components
- Kicker «Objeción a la postura católica» close to the title (crumbs 44 px above it, 30 on phones).
- «La objeción» box: 1px `rule-2`, radius 6, no fill, padding 26 30 24 (20 18 18): synthesis, then «En sus propias palabras» (hairline, 13 ink-3 label) with quotes 19/1.5 ink-2 and source lines (14 ink-3, locator kept whole), «Mostrar» for more. Under the box, quietly: who raises it (14 ink-3) (DEC 2026-10-06 · Who raises an objection).

### Footer previous / next (04, 09)
- Two boxes, `1fr 1fr`, gap 16: 1px `rule`, radius 6, padding 14 18 15; small label 12.5 ink-3 above the title (body 16.5/1.4 ink); next box right-aligned; hover border `rule-2` + fill. Phone: stacked, left-aligned. 09: 84 px above.
- Labels say where each leads: 04 «Anterior: todas las objeciones» / «Siguiente objeción» (Pedro, final v2 note 21).
- First or last item: the missing box is not shown; the other keeps its column (agent, 2026-10-21).

### 10 components (built 2026-10-25) — DEC 2026-10-23 · Screen 10; DEC 2026-10-24 · Screens 10 and 11: option C
- Header: h1 with the `objection` size (52/1.06 → 36/1.1; the title is long), lede as everywhere; under it «Cómo se eligen estos textos» (`MoreButton`, the fold of 02's objections: 380 ms height, text rising; the proposal used a bare `details`).
- Entry (a list of equals, §5 «Lists of equals»): `entry-row` grid 150 px date | text, gap 8 40 (one column under 640), padding 34 0 38 (26 0 30 on phones), `rule` hairline on top, last one closed. Date ui 500 15 ink tabular, `pt` 3; a note under it (12.5/1.45 ink-3: contested date or authorship). Heading `h2` ui 400 15/1.45 ink-3: the author as page link (an anonymous work: the work's name) + «, » + work and locator (no comma before a number). One line on who the author was (14/1.5 ink-3; first sentence of the 09 summary). The work's paragraph, body 300 19/1.66 → 18, max 680: context in `ink-3`, the sentence on the doctrine in `ink` (a `mark` with no fill, never underline or colour); no paragraph on file → the quote alone in `ink`. «Leer … en la obra completa» (page link, 14.5, min-height 40) 16 px below.
- Tokens: `date-note` 12.5/1.45, `--container-entries` 870 (150 + 40 + 680), `entry-row`; `PageHeader` takes `long`.

### Search (⌘K) — DEC 2026-10-06 · Search: P1's component
- Top-bar trigger: 36 px, up to `min(380px, 40vw)`, 1px `rule`, radius 6, `card`, placeholder «Buscar doctrinas, versículos, Padres, palabras», ⌘K key; icon only ≤ 720.
- Overlay (scrim, 12vh from top); box 620 px, `panel`, radius 10, shadow; input 52 px, 16 px; results: title head 18 ink; line 1 path (12.5 ink-3) with the date at the far right; line 2 why it matched (13.5 ink-2), query in `mark`. Empty query shows «Recientes». No match: «Nada coincide con «q»…». ↑/↓ moves, Enter opens, Esc closes.

### Full-text reader (05) — DEC 2026-10-21 · Screens 05 (source) and 06 (verse): the reader's structure
- **Layer** over the page (never a page with a «Volver» strip, DEC discarded): `bg` + texture, fade per §4, takes over the viewport (page scroll locked). Bar 56 px: «Volver a donde estabas» (ui 500 14, min-height 40; «Volver» ≤ 420) + where you came from (13.5 ink-3, ellipsis) + tools at the right; bottom hairline `rule`. Column 720, padding 44 20 120; title head 300 44/1.08 (34 phone); division number in the left margin (ui 12 ink-3, 56 px wide, 66 px left; above the paragraph ≤ 899); paragraphs body 300 `--rd-fs`/1.66 ink-2, padding 8 12, radius 6. Opens at the cited paragraph, 140 px from the top, with the arrival mark of §4. Close returns focus to the origin link (flash per §4). 06 as a page: the same strip sticks under the top bar (`bk`, hairline once stuck).
- **Bar tools** (right, left to right): «Tus notas n» (or «Nota» when there is none; hidden ≤ 720, moves under the title) · A− A+ (segmented, 30 px, seven steps 17–29, disabled at the ends, keeps your place) · hairline · translation picker (Bible only) · «Latín · original» No / Debajo / Al lado (documents with Latin; ≤ 720 under the title without «Al lado»). Touch: 44 px targets.
- **Translation picker** (05 bar and 06): one button showing only the abbreviation («RSV», 34 px in the bar, 44 px in 06); the list (340 px max, `panel`, 1px `rule-2`, radius 8, floating shadow) in two groups «Español» / «Inglés» (group head 12.5 ink-3; no «Todas»), each row «Revised Standard Version (RSV)» (full name, abbreviation in ink-3), min-height 44, current = `accent-weak` + inset 2 px accent. Listbox: ↑ ↓ Home End Enter Esc. Flips up near the bottom; list z above the sticky strip. Selected from the same data as «Comparar traducciones».
- **«Latín · original»** (`og`): label 12.5 ink-3 + segmented No / Debajo / Al lado (3px pad, 1px `rule`, radius 8; pressed `accent-weak`). Debajo: each Latin paragraph under its translation; Al lado: two columns inside `container-reader-wide` (≥ 1100 only). «Leer en latín» (panel): only that paragraph's Latin under it, tag «Latín · original» (ui 12 500) + «Ocultar».
- **Latin look «Con raya»** (all Latin in the reader): indented 18 px, 1px `rule-2` line at the left, body 300 at reader size − 2, line-height 1.6, `ink-prose`; never the translation's size or colour.
- **Edition and licence** at the foot (`h2` 22, 14 ink-3, max 640), with the edition select; whether «Fecha» and «Edición y licencia» stay at the foot is open (DEC 2026-10-21 · Screens 05 and 06: Open).

### Reader side panel «Pestañas» — DEC 2026-10-21 · Screens 05 and 06
- Right column `--spacing-panel` (400), `bg` + texture, left border `rule`; from 1100 it covers the full height inside the reader and its header (56 px, ref in head 400 19 + close) lines up with the reader bar's hairline; page: under the top bar. < 1100: half sheet with grip. Body scrolls inside (overscroll contained, padding 20 22 40).
- Content = the decided minimum, in this order [inference: order of the proposal's markup]: reference; «Abrir el detalle completo»; «Subrayar» with the five colour dots; «Nota»; «Leer en latín» (documents); «Citar» (short, per DEC «Citar» copies the short citation) and «Copiar enlace»; «Dónde se usa en Doctrina» (≈ 55 px below «Citar»). It never repeats the selected text or shows Latin by default.
- Tabs: «Términos», «Usos», «Traducciones» and «Notas n» (only when the division has notes), segmented (3px pad, 1px `rule`, radius 8, min-height 34, count 12 ink-3) with the «Deslizar» indicator; content under a tab list rows of `pr-row` (title ui 500 15 + count, preview 13.5 ink-3 one line, chevron) that open a compact detail (title head 400 24, text body 300 17/1.6, sections separated by a hairline, 24 above).

### Highlighting — DEC 2026-10-21 · Reader: highlighting by sentence and by dragged words
- Two ways, one result: «Subrayar» in the panel marks the whole sentence/verse (with a highlight already there it says «Quitar subrayado»); dragging over words opens the **selection toolbar**. Selection snaps out to whole words. A touch with text selected opens nothing.
- **Selection toolbar** (`hl-tb`): `panel`, 1px `rule-2`, radius 8, floating shadow, padding 3, buttons min-height 36 radius 6 ui 500 13.5: five colour dots (32 px; 44 on touch; current ringed `ink` 1.5 px over a 2 px `panel` gap), «Subrayar», «Nota», hairline, «Copiar cita», «Buscar». Below the selection, left-aligned to it inside the column; above it if no room. Phone or touch: docked to the bottom edge, `bg` + texture, top hairline, safe-area padding, buttons 44 px, full width. Keys: S highlights, C copies the citation, N writes a note, Esc closes. No «Copiar enlace» here (it stays in the panel).
- **Colours in the bar** («Colores en la barra»): the five dots are always visible in the toolbar and the panel; tapping one highlights in that colour. In «Subrayados» a coloured dot marks each item.
- **Undo bar** (`hl-undo`): centred bottom (24 px + safe area; at the top, under the top bar, ≤ 720), `panel`, 1px `rule-2`, radius 8, shadow, text 13.5 + «Deshacer»; «Subrayado.», «Subrayado quitado.», «Nota borrada.». 5 s.
- **«Subrayados»** list (panel, in text order): quote 3 lines body 300 16.5/1.55, place in `cite` 13 + date 13 ink-3, «Copiar todos con sus citas», «Se guardan en este navegador». In the Bible a highlight shows only in the translation where it was made. Not on 06 yet: only in the reader.

### Notes — DEC 2026-10-22 · Reader notes: «Notas al costado»…
- **Scopes:** about the whole source (general), about a sentence/verse/division, about words (several verses: the range takes first to last verse touched, «Juan 6:53-58»). A note on a unit shows in every translation; a note on words stays in its edition and shows in the others at its division («Juan 6:53, en BSB»); if its words are gone it moves to «Sin ubicar» and is never deleted.
- **«Notas al costado»** (default ≥ 1280 and panel closed): card at the right, 240 px, 40 px from the column, at its division's height (pushed down to keep 8 px between cards): left border 1px `rule-2` → `accent` on hover/focus, padding 6 8 8 14; place 12 ink-3, text body 300 15/1.5 two lines ink-2, date 12 tabular. Hover or focus marks the note's words with `accent-weak`.
- **«Marca en el margen»** (< 1280 or panel open): «1 nota» / «N notas» under the division number (ui 12 ink-3, no icon; Bible: after the verse number), hit area padded 12/8; hover underline + ink; opens the panel on «Notas». ≤ 899 at the right edge of the paragraph.
- **Entry points:** «Nota» in the selection toolbar (N) and in the panel; Shift+N or «Nota» in the bar for a note on the whole source; on 06 «Nota» beside «Leer el capítulo completo». Whole-source note shows as a `btn-more` «Tu nota sobre esta fuente» that unfolds.
- **Editor** (in the panel; half sheet on phone): ref line 13.5 ink-3 (2 lines), «Esta frase» / «Todo el capítulo» segmented in Trento, textarea (min-height 88, auto-grow, 1px `rule-2`, radius 6, body 300 16.5/1.55), footer 12.5 ink-3: «Guardada», date, «Borrar nota».
- **Delete dialog** (`alertdialog`, modal, rest of the page inert): `panel`, 400 px max, radius 8, top 2 px `danger`, title head 400 23 with «Borrar» in `danger`, the note's place (13.5 ink-3) and its first 90 characters (14.5), «Cancelar» + «Mantener para borrar» (1px `danger`, `danger` text, fill grows while held, 3 s). Keyboard: hold Enter/Space; focus starts on «Cancelar» and is trapped; Esc closes without deleting; status line in `aria-live`.
- **«Tus notas n»** (bar → panel): tabs «Notas» / «Subrayados» with the sliding indicator; «Notas» order: whole source, then «En el texto» by position, then «Sin ubicar»; each row: place 13 ink-3 (struck through when lost), text 3 lines body 300 16, date 12.5. Export: «Copiar todas con sus citas» (short citation), «Copiar en Markdown (.md)» (a download on the site; the proposal copies the text).
- **Filters «Campo y menú»**: search field (min-height 40, 1px `rule`, radius 6, `/` focuses, Esc clears, ignores case and accents, shows the matching excerpt with `mark`) + two small pickers «Mostrar» (Todas / Sobre la fuente / En el texto; in «Subrayados» the five colours) and «Ordenar» (Texto / Recientes) in the translation picker's style; status «n de N notas» (`aria-live`). Empty: one line («Ninguna nota dice «q».») + «Quitar filtros». Discarded: filter by chapter; with/without note in highlights.
- Saving per user (browser storage at launch) is open (ROADMAP «Now» 4).

### 06 verse
- Header: the strip's hairline sits 30 px (22 phone) from the title, the same as 03's switcher-to-title. «Citar» and «Dónde se usa en Doctrina» in a side column (≥ 1100, `--spacing-dt-side`) beside «Traducción»; «En griego, palabra por palabra» and «Comparar traducciones» use the full width. Passage: previous/next division in body 300 17/1.6 ink-3 (3 lines + «Mostrar más»), the current one 21/1.62 ink (Bible: head 300 27/1.42), number column 52 px.
- **«Citar»**: `ci-t` short citation (body 300 15.5 in the column) + «Citar» (copies the short form → «Cita copiada» 1.6 s) and «Citar con texto» side by side, «Copiar enlace» below. The full citation lives only on the source page.
- **«Dónde se usa en Doctrina»**: place + text, hairline rows (title body 15.5, line 14.5 ink-3); one item and «Ver N más» (`btn-more`; FLIP; «Ver menos» hides again).
- **«En griego, palabra por palabra»** «Ficha al lado»: the words as buttons (min-height 44; Greek head `--font-greek` 22 + gloss 13 ink-2) in a wrapping row; on hover, tap or focus the card column shows: Greek 32, transliteration 14 ink-3, `dl` (118 px term | value): **Strong** first, **En el Nuevo Testamento** (count) second, then Significa, Forma, Palabra base; «Abrir el estudio de …» (`btn-go`). Sticky; ≤ 899 under the words. OpenGNT licence is open (DEC Open).
- **«Comparar traducciones»**: segmented filter «Español con español» (default) / «Inglés con inglés» / «Todas» (travelling indicator; starts on «Todas» when each language has one translation), chips per translation, rows name 14 500 + abbreviation, text body 300 17/1.6, list as FLIP.

### Top bar
- Built in B3: logo, language switch, theme button; menu button (B4) and search trigger are not built yet.
- Sticky, 56 px, `bg` + texture, bottom hairline: menu button (≤ 1099), logo, search, ES / EN (13 px; current ink 500; hidden ≤ 720), theme button.

## 6. Screens (order of sections)

Why each order and content: ROADMAP «Now» item 1 (screen notes) and the DECISIONS entries cited there.

| Screen | Header | Sections in order |
|---|---|---|
| 02 Doctrine | crumbs · h1 · lede (the question) · fingerprint + caption · link legend | Lo que todas comparten (with «Lo que se discute») · Las cinco respuestas · Lo que escribieron los primeros cristianos (living ruler; then link to the full history) · La práctica · Doctrinas conectadas (always last) |
| 03 Tradition | crumbs · switcher · h1 «La posición católica» · lede «Cómo la Iglesia católica entiende la Eucaristía, con sus propias fuentes.» | Qué enseña (5 statements by default, more when one the objections target would otherwise be hidden — Baptism 6, DECISIONS 2026-10-22 — + «Mostrar»; grade, a 1px × 14 px `rule-2` divider, sources) · Por qué · La Escritura que usa («Ver los N pasajes») · Objeciones (3 + «Ver las N objeciones») · Cómo se vive · Grado de autoridad · Videos |
| Objeciones page | crumbs · switcher · h1 «Objeciones a la posición …» · lede | the objection list (44 px below the header) |
| 04 Objection | crumbs · kicker · h1 | La objeción · La respuesta católica · Fuentes citadas · Pasajes · Videos · Otras objeciones · footer previous / next |
| 10 Early Christians (`…/primeros-cristianos`) | crumbs · h1 «Lo que escribieron los primeros cristianos sobre la Eucaristía» (the 04 size) · lede · «Cómo se eligen estos textos» (folded) | the list of texts, chronological (the page has no sections, so no right-edge ruler) |
| 05 Source (reader) | layer bar: «Volver a donde estabas», tools · crumbs · title · meta | the text by division (chapters as 12.5 ink-3 heads) · edition and licence at the foot; side panel on tap |
| 06 Verse | strip «Volver a donde estabas» · crumbs · title · lede | the passage with the division before and after · «Citar» + «Dónde se usa en Doctrina» (side column) · En griego, palabra por palabra · Comparar traducciones |
| 09 History entity | crumbs · kicker («Uno de los Padres apostólicos») · h1 · facts · «Ver en la línea de tiempo» | Tiempo contemporáneo · Quién fue (text + facts table) · Sus escritos · Fechas y autenticidad · Dónde aparece en Doctrina (place in a left column, 150 px) · footer previous / next |

Error shell (not from the proposal; built in B1b from the tokens): 404 and 500 pages use the `display` h1 and the `lede` for the message and `btn-go`-style actions (min-height 44, `--radius-7`, `text-ui-sm`); the global 404 and 500 show Spanish and English one after the other, because they render outside the locale layout. Spanish system copy is neutral («vuelva», «Intentar de nuevo»), no voseo.

Not designed yet: 01 home, 11 search results page (the ⌘K component above is designed). 07 word study and 08 timeline have an open proposal, not approved.

## 7. Don'ts

From the AI-slop list (DEC 2026-10-05 · Design principles carried into the restart): cream + terracotta (#F4F1EA), gold on navy, parchment textures, stock cathedrals / Bibles / hands, crosses as decoration, identical rounded shadow cards, gradients, ALL-CAPS tracked eyebrows, «·»-joined meta strings, «→» glued to links, emoji, icons in coloured squares, giant decorative quotes, Inter + centred bold hero, monospace locators, one colour per tradition, squeezed parallel columns on mobile, dead affordances.

Rejected by Pedro:
- Craig Mod devices: heavy drop cap, italic standfirst, tight title tracking, short centred rule between sections, hyphenation (DEC 2026-10-19).
- Asterisk: left-margin section ruler, large accent title, accent citation numerals, warm paper with pure black text (DEC 2026-10-19). The Met object page and its image treatments (set aside, DEC 2026-10-19).
- Ruler markers: «Halo», «Lupa», larger dots, colour-only hover without snapping; opening the window from a marker; the static 1–2026 v2 ruler (DEC 2026-10-19, 2026-10-20).
- Fingerprint: highlight-only, narrow lens with overshoot (DEC 2026-10-19).
- Entrances: «Sin», «Título por líneas», «Asentarse», the proposal's «Listas», «Dreamorphics» (DEC 2026-10-21).
- Theme change: straight diagonal or vertical sweeps (v2 note 6). Light contrast «Trazo firme» (heavier weights), for now (v2 note 8).
- Sidebar current mark that switches off on the old row and on on the new (v2 note 14); a tradition indicator that is a temporary copy (it cuts at the end, v2 notes 7, 10).
- Wheel smoothing floatier than Lenis's default (lerp < 0.1).
- 09: Greek names under letter titles; manuscript notes in place of descriptions; a «Leer el detalle» button that adds nothing; one-line dates joined with «·» or «—» (v2 notes 16, 18, Codex format).
- «m.» or «d.» for death; «†» where words fit (DEC 2026-10-06).
- Edition, translation or licence in the citation window (DEC 2026-10-14); «Citar esta página» (DEC 2026-10-08); a tradition switcher on 04 (DEC 2026-10-14); an «En esta página» index column (ROADMAP 02 note).
- In previews: who raises an objection, counts («4 párrafos de respuesta, 7 fuentes»), interpretive titles on witness quotes (DEC 2026-10-06; ROADMAP 02/03 notes).
- Internal states in anything shown («en preparación», «borrador» as placeholder) (DEC 2026-10-07).
- Cards outside «Doctrinas conectadas»; shadows outside floating layers; «Mostrar 0 más».

## 8. Last fixes of v2 (approved 2026-10-21)

### Sidebar current mark «Viaja» (v2 notes 14, 17)
- One mark (`accent-weak` fill + inset 2 px accent bar, radius 6) slides from the old current row to the new one, translate + size, 360 ms `ease-reveal`; at the end the new row's own style takes over with no blink. Runs on client switches (tradition switcher) and across page changes (the sidebar persists in the layout [inference: the proposal kept the previous position in sessionStorage because it reloads]). A row inside a collapsed branch resolves to its nearest visible ancestor. Reduced motion: the mark jumps.

### 09 «Tiempo contemporáneo» and «Avance fijo» (v2 notes 18, 21)
- Timeline: groups with sticky labels (12.5 ink-3) over hairlines; rows 40 px; a person is a span bar (6 px, `rule-2`; dashed where the start is estimated), a work or event a point or range; label 13.5 ink-2 under its mark. Hover: label ink + underline, bar ink-3. Selected (`aria-pressed`): label ink 600, bar ink. The page's own entity is accent (label 500). Axis 1px ink-3 with 6 px ticks and 12 px labels; the selection's years are written on the axis (ink 600) and the entity's in accent. ≤ 720: the timeline scrolls sideways inside its box (780 px wide) with a hint line; the page never scrolls sideways.
- Detail below the timeline (18 px gap, hairline, min-height 150): kind (12.5 ink-3), name (`title-sm`), dates (ui 500 14 ink), text (body 300 16.5/1.55, max 62ch), its page link. Empty state text in 14 ink-3.
- «Avance fijo»: when an item is selected, a 64 px strip sticks to the bottom of the viewport inside the timeline block and takes no layout space (zero-height sticky wrapper, strip positioned inside it): hairline `rule-2` on top, `bg` + texture; name (head 400 18, 16.5 phone) + dates (ink-3, tabular), one-line summary (ink-2, ellipsis), and the detail's own page link at the right («Ir a la página de Clemente de Roma», page-link style, 44 px hit area); no «Leer el detalle» button. Enters 240 ms (opacity + 8 px, `ease-reveal`); a new selection crossfades its content in 160 ms. As the detail arrives, the strip's opacity follows the scroll (from 40 px before to 30 px after the point where the detail reaches the strip), so the hand-off has no jump; hidden while the detail is in view. Reduced motion: on/off with hysteresis, no fade.
- Keyboard: arrows move the selection; activation by keyboard moves focus to the detail heading.

### 09 «Fechas y autenticidad» (v2 notes 19, 20, 22)
- One chronological list: earliest estimated date first; a range sorts by its first year (110–140 → 110). Collapsed: the most useful rows; «Mostrar las N de la historia del debate» interleaves the rest in date order (merge via FLIP; first hidden row's top line dashed), «Ocultar la historia del debate» folds them back.
- Row: grid `minmax(0,1fr) 300px`, gap 4 24, padding 11 0, hairlines. Left: the date in ui 500 ink (one grammar: «c. 110», «105–117», «años 140», «época de Trajano (98–117)», «segunda mitad del siglo II»), then what is dated and by whom (14.5/1.45 ink-3) with the scholar as a citation link and the publication year. Right: track 20 px (32 with a label), axis 1px `rule`, range 7 px ink-3, point 9 px, open end dashed, end tick 2×11; a reign shown as an outlined band with its name and years written under it («reinado de Adriano, 117–138»). Shared axis below the list (11.5 ink-3, ends anchored inward). Highlighted row: accent. Phone: track under the text.
- Scholar window «Quién es»: name, field, position, work, life in words («Nació en 1942»; no «vive», no abbreviations), mini timeline running to today for the living.
- Title format of the rows: kept for now, Pedro decides later.

### 09 «Sus escritos» (v2 notes 16, 18)
- Each letter: title (no Greek name), date, a short neutral description ending in a short quote whose locator opens the citation window. Shared axis above the list (label 13.5 ink-3 | mini timeline 180–300 px).
