# 10 · D3 variant brief: 16 directions from «Comillas»

For the coordinator who draws the round-2 variants. Self-contained: every «why» points to a finding (file §); round-1 rules in `../05-variant-brief.md` §0 still apply (16 px first, 3-unit minimum stroke, round-croppable, maskable, no text/gradient). Written 2026-11-04. Tags as in the README.

## 0. Verdict first (read this before drawing)

1. **D3 as drawn is the wrong object, but the idea is right.** The idea — the site's own quotation sign, whose ancestor (the diple) is the mark scribes put beside Scripture quoted in the earliest Bibles — is unclaimed and well grounded (06 §2, §5, §7; 07 §2.5). The drawing is a straight, constant-width double chevron (Newsreader's « has no curves, 06 §4) that at 16 px is the same picture as Material/Lucide «collapse / back / rewind» (07 §2.1, `refs/_sheets/resemblance-d3.png`).
2. **The slop is both container and glyph (H1 holds, but not alone).** The ink rounded square with 21.9 % corner radius is the iOS/app-store tile and the Next.js docs' own example favicon; practitioners call «icons in square boxes» and «a white circle on a black square» generic (08 §2). Put a UI chevron in an app tile and you get «a button» (08 §1).
3. **H2 holds**: « reads «back/rewind/collapse»; a curly “ reads «testimonial/speech» (07 §3).
4. **H3 holds for the story, fails if drawn faithfully**: the real Vaticanus diple is asymmetric with a hook (06 §3) and **at 16 and 32 px reads as the numeral «7»** (probe p5/p6, `refs/_sheets/probes-1.png`) [verified, visual]. Use its features (stress, asymmetry, margin placement), tamed.
5. **At 16 px every chevron is a chevron.** In the probes, pen stress, wedges, dots and asymmetry are only visible from 32 device px up (`probes-1.png`, `probes-2.png`). Pedro works on a Mac (2× screen → the tab icon is drawn at 32 device px, 01 §2), so **judge at 32 first, then check 16 for «still a single clean sign»**. Distinctiveness at 1× comes from container shape, colour and sign count, not from detail.
6. **Paper tile caution**: cream/beige + serif is now read as an «AI aesthetic» by some (Jim Nielsen 2026; Anthropic's cream favicon) (08 §1). Paper `#e8e5de` is grey-beige, not cream; never warm it toward yellow, never pair with orange/terracotta.

## 1. Fixed parameters for every variant

- Grid `viewBox="0 0 32 32"`, live area 24×24 (4-unit margin) for tiles; strokes and arm thickness **≥ 3 units** perpendicular; counters/gaps ≥ 3.
- In-system colours: ink `#1c1713`, paper `#e8e5de`, dark ink `#f2f2f0`, accent `#2c4a9e`, cite `#5f3d0c` (contrasts in 05 §0.2 and 08 §3). Paper on ink = 14.1.
- **A tile vanishes on one tab**: ink tile vs `#35363a` = 1.47; paper tile vs `#dee1e6` = 1.04. The glyph must read bare on that tab (08 §3).
- Corner radius options to compare: `rx 0` (print block), `rx 1.5` (softened block), `r 16` (circle). **Do not use `rx 6–7`** (the iOS look) except in the control.
- Optical rules (08 §5; Whitman): a right-pointing sign sits ~0.5–1 unit right of the mathematical centre; points overshoot the 24-unit box by ~0.5; re-tune weight at 16 and 32 separately if needed.
- Render every variant at 16 and 32 on `#dee1e6` and `#35363a`, in a strip with the round-1 neighbours, plus 180 px touch icon, circular crop, the header lockup (light/dark) and the share card (09 §5).
- Always show **C0 = round-1 D3** next to them as the control.

## 2. The 16 directions

Columns: **16 px** = legibility risk at 1×; **Look-alike** = what it may be mistaken for (07 §3); **Neutral** = neutrality verdict; **Name** = depends on «Doctrina» (Y/N).

### Axis 1 · The sign

**V1 · Diple de pluma (pen-stress diple).** One `>` whose upper arm is thinner and shallower and lower arm heavier, like a pen stroke; no hook.
- From: 06 §3 (Vaticanus shape, tamed), 06 §7.2, probe `a-pen-stress-diple` (`probes-2.png`).
- 16 px: low. Look-alike: «next» chevron; Plex if on a dark rounded tile (07 §3) → never `rx 6–7`. Neutral: shared, pre-division scribal sign. Name: N.
- Build (fill, one path = union of two arms): upper arm from (8, 8.6) to vertex (24.5, 16.2), perpendicular thickness 3.0; lower arm from vertex to (10, 26), perpendicular thickness 5.0; sharpen the vertex to a point at x 24.5 (overshoot); butt ends cut parallel to the tile edges. Visual centre ≈ x 16.8.

**V2 · Diple en el margen (diple beside three lines).** A small diple in a left margin, three text-line bars to its right: «Scripture set apart from the commentator's words» (Isidore I.21.13).
- From: 06 §2.1–2.3, 06 §7.5, 08 §5.2; probe p8 (`probes-1.png`).
- 16 px: medium (four parts; holds in the probe). Look-alike: **«blockquote» / «text quote» editor icon** (Lucide `text-quote`, 07 §1) — on-topic, but still UI; «list» icon. Neutral: shared. Name: N.
- Build: diple stroke 3.2, miter join: M 3.5 9.5 L 11.5 14 L 3.5 18.5; lines as rects x 14–28 at y 8 and 14.5 (h 3), x 14–24 at y 21 (h 3). Ink on paper sharp tile, or paper on ink.

**V3 · Cuña (wedge guillemet).** D3's « rebuilt as two wedges: heavy at the open ends, narrowing to the point, like a metal-type guillemet (Imprimerie nationale's Didot, 06 §2.4; Source Serif 4 Black, 06 §4).
- From: 06 §4 (construction is the problem), probe p3 and `f-wedge-guillemet` (an earlier, less tapered draft of this geometry).
- 16 px: low. Look-alike: «collapse/back» at 1× (unavoidable for any «), less so at 2× (wedges visible). Neutral: bookish, Spanish-native. Name: N.
- Build (fills): left wedge polygon (12, 7) (17.5, 7) (8.5, 16) (17.5, 25) (12, 25) (4.5, 16); right wedge = left + 10 in x: (22, 7) (27.5, 7) (18.5, 16) (27.5, 25) (22, 25) (14.5, 16). Arms run at ≈ 50° from horizontal; perpendicular thickness ≈ 4.2 at the open ends, ≈ 3.1 at the point (keep ≥ 3). Shift the pair +0.75 right for optical centre. This is the **closest evolution of what Pedro liked**.

**V4 · Comillas de Gentium (curved «).** Outline Gentium Book Plus Bold « (flared, curved arms) — the site's Greek face, pen-like.
- From: 06 §4 (Gentium uses curves), probe p2.
- 16 px: low. Look-alike: as V3; at 32 px reads as two leaves/commas. Neutral: bookish. Name: N.
- Build: outline the glyph from `GentiumBookPlus-Bold.ttf`, scale to fit x 6–26, y 8–24, then thicken the arm ends to ≥ 3 units at 32-grid if the outline is thinner. (Round 1 found the font's Θ clogging; check the tips don't fill in at 16.)

**V5 · Diple periestigmene (diple with two dots).** One `>` with a dot above and a dot below the vertex: Isidore I.21.15 «cum geminis punctis», Unicode U+2E16.
- From: 06 §2.1, 06 §6, 06 §7.4; probes p7 and `d-diple-dots-above-below`.
- 16 px: medium (three parts). Look-alike: emoticon `>:`, «≥»-ish; with dots to the right it is `>:` — keep dots **above and below**. Neutral: shared; ⚠ its historical meaning is «edition differs», not «quotation» — say so if chosen. Name: N.
- Build: chevron stroke 3.6: M 8 10 L 21 16 L 8 22; dots r 2.3 at (22, 6.8) and (22, 25.2). None of the site fonts contain U+2E16 (06 §3), so it must be drawn.

**V6 · Comillas sobre la línea (« on a rule).** The guillemet sitting at x-height above a full-width rule — punctuation inside a line of text, not an arrow floating in space (RAE: angulares «se escriben centradas», 06 §6).
- From: 06 §6, 08 §5.2; probe p9.
- 16 px: low–medium. Look-alike: if the rule were vertical, «first page» `|«` (Material `first_page`); horizontal: none found. Neutral: bookish. Name: N.
- Build: V3's wedges scaled to fit x 7–25, y 6–20; rule rect x 5–27, y 23.5, h 3. Or rule full-bleed x 0–32 in a tile (it then becomes part of the container).

**V7 · Comilla cortada (guillemet cut by the tile edge).** V3's wedges knocked out of an ink square, shifted left so the left wedge's point is cut by the tile's left edge — the tile reads as a printed block with a quote notched into it (Flipboard / Shady Characters logic: the tile is part of the sign).
- From: 08 §3 (glyph cut out / cropped examples), Mantia «the icon is the squircle» (08 §2).
- 16 px: medium (a cropped point can read as a nick). Look-alike: none found. Neutral: bookish. Name: N.
- Build: square rx 0, ink; subtract V3 translated −4.5 in x (left tip at x 0, clipped); right wedge fully inside. ⚠ **Header conflict**: the bare in-site form loses the notch; if chosen, the header shows the block too (09 §2, Flipboard rule).

**V8 · Pestaña (the tile as a diple).** The tile's own outline makes the sign: a square with a `<`-shaped bite out of its left edge (one notch), or a square whose right edge comes to a point.
- From: 08 §2 (Mantia: canvas, not container), 08 §3 (Bandcamp: the shape is the mark).
- 16 px: low (one silhouette). Look-alike: **tag/label, ribbon end, «process step» arrow** — high-ish. Neutral: total. Name: N.
- Build (notch version): polygon (0,0) (32,0) (32,32) (0,32) (0,23) (9,16) (0,9) in ink; nothing inside, or a single 3-unit text line at y 14.5 from x 14 to 26. Include once; likely a discard.

**V9 · Guillemet asimétrico.** Both chevrons of « with short upper arms and long lower arms, the diple's asymmetry applied to the guillemet.
- From: 06 §3, probe `g-asym-guillemet`.
- 16 px: low. Look-alike: as V3; at 2× the asymmetry reads «handwritten» or «wrong» depending on taste. Neutral: bookish. Name: N.
- Build: two strokes 3.6, miter: M 15 9 L 6 15.5 L 13.5 25 and M 25 9 L 16 15.5 L 23.5 25.

**V10 · Diple de Vaticanus (faithful, control).** The manuscript diple as seen: short shallow upper stroke with an entry hook, long steep heavy lower stroke.
- From: 06 §3; probes p5/p6.
- 16 px: low, but **reads as the numeral «7»** at 16 and 32 [verified, visual]. Look-alike: «7», a rotated check mark. Neutral: shared. Name: N.
- Build: upper stroke M 8 10 L 23 15.5 (w 3), lower M 23 15.5 L 14 26 (w 4.6), hook q-curve at the start (w 2.6). **Draw as a labelled control to show why the faithful form is not used.**

**V11 · » hacia el texto (sign pointing at the name).** Use the closing guillemet » (or V1's single `>`) so the sign points right, at the wordmark and the page, as the scribes' diple pointed at the quoted line (06 §7.3).
- From: 06 §3 (orientation in the manuscripts), 06 §6 (German uses »…« as opening).
- 16 px: low. Look-alike: «next / expand / skip» (Lucide `chevrons-right`), breadcrumb separator. Neutral: bookish. Name: N.
- Build: V3 mirrored (x → 32 − x), optical shift −0.75. Show in the header lockup «» Doctrina» vs «« Doctrina».

### Axis 2 · The container (apply to the best one or two signs, V1 and V3 by default)

**V12 · Bloque de imprenta (sharp ink square).** Same sign on `rx 0` (or `rx 1.5`) ink square.
- From: 08 §3 (sharp squares read «publisher/print»: Production Type, Flipboard, Le Monde, Typotheque), 08 §4.
- 16 px: low. Look-alike: depends on sign. Neutral: n/a. Name: N.
- Build: `<rect width="32" height="32" fill="#1c1713"/>`; sign in paper.

**V13 · Sello (ink circle).** Same sign on a full ink circle r 16.
- From: 08 §3 (Vercel, Grilli, Seuil, Brill); survives Google's round crop (01 §2).
- 16 px: low (a bit less room: keep the sign inside r 11). Look-alike: «play/next button in a circle» for a single `>` (Prime Video's play disc, 07 §1) — prefer the double sign here. Neutral: n/a. Name: N.
- Build: `<circle cx="16" cy="16" r="16"/>`; sign scaled to fit a 20×20 box.

**V14 · Papel con filete (paper block with an ink frame).** Paper `#e8e5de` square, 2-unit ink frame inset 0, ink sign. On light tabs the frame keeps a square silhouette; on dark tabs the paper block shows.
- From: 08 §3 (paper tile vanishes on `#dee1e6` at 1.04; hairline examples scarce), Pedro likes a paper tile (brief).
- 16 px: medium (frame = 1 px at 1×; may shimmer). Look-alike: generic «framed icon». Neutral: n/a. Name: N.
- Build: rect 32×32 paper; inner frame path 2 units wide along the edges (or a 2-unit `stroke` on a rect inset 1); sign in ink inside a 22×22 box. ⚠ Not cream; not with orange (08 §1).

**V15 · Rúbrica (red diple on paper).** V1's diple in a scribal red on a paper square: medieval scribes favoured red for scriptural quotations (Finnegan, 06 §2.3, «red being specially favoured for scriptural quotations»).
- From: Finnegan ch. 4 [verified]; DESIGN §1 (out-of-system hue).
- 16 px: low. Look-alike: YouVersion red (02 §1) in colour only; an «error/danger» red — the site's `--color-danger` is `#9c2f28` (DESIGN §1). Neutral: shared. Name: N.
- Build: paper square rx 0; diple in `#a8321f` (5.3 on paper, 5.1 on `#dee1e6`; on the dark tab the paper tile carries it). **Out of system: label it so;** check it does not collide with the delete dialog's red.

### Axis 3 · The in-site bare form (draw for the two or three survivors)

**V16 · Marca suelta + wordmark (bare lockup).** The chosen sign with no container, `fill="currentColor"`, in the header beside «Doctrina» (Newsreader 400, 23 px, DESIGN §2): ink `#1c1713` in light, `#f2f2f0` in dark via the existing `text-ink` token (09 §3).
- From: 09 §2 (Vercel, Substack, Sefaria, Linear do this), 09 §3, 09 §4.
- Variants to show side by side: (a) sign at cap height (Newsreader cap ≈ 0.675 em ≈ 15.5 px at 23 px), gap 0.35 em; (b) sign as punctuation at x-height (≈ 0.426 em ≈ 9.8 px) inside the line — «Doctrina reads as quoted; (c) sign alone (mobile header).
- 16 px: n/a. Look-alike: (b) may read as a typo «Doctrina». Neutral: n/a. **Name: (a)/(c) N; (b) Y.**
- Build: one exported path string shared by header, `icon.svg`, `apple-icon`, `opengraph-image` (09 §4). Header is a Server Component inline `<svg viewBox="0 0 32 32" aria-hidden>` inside the home link that carries the accessible name.

## 3. What I would NOT draw (and why)

| Don't | Why | Source |
|---|---|---|
| The ink rounded square with `rx 6–7` (except C0) | iOS app-tile look; named as generic / AI tell | 08 §2, §4 |
| Straight monoline chevrons («, », ‹, ›, >) | identical to UI icon sets at 16 px | 07 §2.1; 06 §4 |
| A single `>` or `›` on a dark rounded tile | Plex | 07 §2.2 |
| Bare coloured `>` | Accenture | 07 §1 |
| `« »`, `< >`, `</>` pairs | code | 07 §3 |
| Curly “ ” or ‘ ’ | testimonial/speech; DESIGN §7 «giant decorative quotes» | 07 §1, §3 |
| Two diples stacked vertically | reads as a zigzag / «Σ» / spring | `probes-2.png` (e) |
| Diple + vertical bar | «skip to end» `>|` | `probes-2.png` (h) |
| Diple + short line after it | terminal prompt `>_` | `probes-2.png` (i); 07 §1 (Hyper, PowerShell) |
| Faithful Vaticanus diple (except as V10 control) | reads «7» | 06 §3; `probes-1.png` |
| Split tile «margin column + text» | the «toggle sidebar» UI icon [inference, not rasterised] | — |
| Cream/yellowish paper, orange or terracotta anywhere | AI aesthetic (Nielsen) + DESIGN §7 | 08 §1 |
| Gradients, glows, sparkle | slop list | DESIGN §7; 08 §2 |
| Dark-aware SVG as the only dark-tab defence | Safari ignores it | 01 §3 |

## 4. Shortlist: test these 5 first (+ control)

| # | Variant | Why first |
|---|---|---|
| 1 | **V3 Cuña on V12 sharp ink square** | Keeps the sign Pedro chose, fixes both diagnosed causes (construction and container). The direct answer to «D3 but not slop». |
| 2 | **V1 Diple de pluma on V12 sharp ink square** | Tests H3: the better-grounded single sign, authored by stress. |
| 3 | **V2 Diple en el margen on paper sharp tile** | The most specific image in the research (Isidore's sentence drawn); tests the «blockquote icon» risk honestly. |
| 4 | **V7 Comilla cortada** | The authored-container option (tile = part of the sign); forces the header question. |
| 5 | **V1 or V3 on V13 ink circle** | Seal reading, best round crop; tells Pedro whether the shape of the container alone changes the «app» feeling. |
| C0 | Round-1 D3 | Control. |

Then V15 (rubric red) as the out-of-system colour test, and V16 lockups for whichever two survive.

## 5. Open questions for Pedro

1. **Sign:** keep the double « (what he liked) or move to the single diple `>` (older, more specific, but more «next»-like)?
2. **Direction:** « pointing away from the name, or » / `>` pointing at it (the manuscripts point at the text; German reads » as opening)?
3. **Container:** sharp block, circle, or a tile that is part of the sign (then the header keeps the block)? The research says avoid the rounded app tile.
4. **Paper or ink tile:** paper tile looks bare on light tabs (tile invisible) and risks the «AI beige» reading; ink tile looks bare on dark tabs. Which tab colour does he use most (Dia light/dark)?
5. **Story in public?** Should the site ever explain the sign (e.g. in an «Acerca de»: «the diple, the mark scribes put beside Scripture quoted»)? If yes, V1/V2 earn it; if never, V3 is enough.
6. **Red:** allow one out-of-system hue (rubric) for the mark, or ink/paper only?
7. **Share card:** wordmark only, or wordmark + one tagline? Domain is not recommended in the image (09 §5).
8. **Name:** the bare lockup (b) «Doctrina is name-dependent; fine while the name is provisional?

## 6. Evidence index (where each claim lives)

- History and shape: 06 §2–§4; images `refs/manuscripts/`.
- Brand look-alikes: 07 §1–§3; sheets `refs/_sheets/brands-*.png`, `resemblance-d3.png`.
- Slop and containers: 08 §2–§4; sheets `containers-*.png`.
- Two forms, wiring, card: 09; sheets `headers-light-dark.png`, `og-cards.png`.
- Construction probes (my own drawings, not proposals): `refs/probes/*.svg`, `refs/_sheets/probes-1.png`, `probes-2.png`.
