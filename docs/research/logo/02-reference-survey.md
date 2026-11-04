# 02 · Reference survey: 90 sites, their tab icons, rasterised

Run 2026-11-04. All icons were fetched this run by a Playwright script (Chromium 1.63, desktop UA) that opened each home page, read every `<link rel~="icon">` (incl. `apple-touch-icon`, `mask-icon`), downloaded the files plus `/favicon.ico`, and stored them in `refs/<site>/` with a `meta.json` (URLs, sizes, media, theme-color, fetch time). Seven sites blocked the script; a headed retry got four of them (YouVersion, TGC, GOARCH, Banner of Truth, Perseus). **Third-party marks kept for study only; never reuse them** (see README).

How to read the sheets (`refs/_sheets/`):
- `christian-*.png`, `text-study-*.png`, `editorial-tools-*.png` (light and dark): per site, a tab chip in Chrome's light (`#ffffff` on `#dee1e6`) or dark (`#35363a` on `#202124`) colours holding (1) the icon at true 16 CSS px, (2) the browser's 16×16 downscale shown 3× with hard pixels, (3) the 32×32 downscale shown 2×; then the largest apple-touch-icon at 60 px with iOS-like corners. Dark sheets were rendered with `prefers-color-scheme: dark`, so SVG favicons with a dark media query switch, as in Chrome.
- `large-*.png`: the largest file of each site on a checkerboard (shows transparency).
- `measures.json`: per icon at 32 px, opaque coverage, corner opacity (tile vs bare), mean luminance and its contrast ratio against a white tab and Chrome's dark tab `#35363a`. Crude (an average over the whole icon), but it flags icons that vanish.
- `picks.json`: which file the sheet used as «the tab icon» (SVG first, else the `rel=icon` closest to 32 px, else `/favicon.ico`).

Every description below was checked against the sheets by eye [verified, visual]; the «tile / bare» call combines the eye check with `measures.json`. The method approximates Chrome; real tabs in Dia, Safari and Firefox were not screenshotted (see «Limits»).

## 1. Christian reference and church sites (37; 36 with an icon)

| Site | Mark | Form | 16 px read | Dark tab |
|---|---|---|---|---|
| YouVersion (bible.com) | red book cover «HOLY BIBLE» | rounded tile | text turns to mush; reads as «red book» | ok (tile) |
| Logos (logos.com) | magnifier with a cross in the lens, white on blue | rounded tile | clear | ok |
| Biblia (Faithlife) | same magnifier-cross as Logos | rounded tile | clear; identical to Logos in a tab strip | ok |
| Faithlife | white flame on green | tile | clear | ok |
| Blue Letter Bible | open Bible in front of a monitor with a cursor | bare | busy; the screen detail is lost | fair |
| BibleGateway | dark-red doorway/arch outline (its 2013 logo, «a place where you can enter», see 04 §2.3); touch icon is the «Bible Gateway» wordmark tile | bare (tab), wordmark tile (touch) | thin outline, unreadable | **vanishes** (contrast 1.45) |
| Bible Hub | open book with wings in a blue circle | round tile | ok at 32, busy at 16 | ok |
| BibleProject | cyan open-book / pennant shape | bare | clear silhouette | ok (cyan is mid-luminance) |
| ESV.org | «ESV» script monogram, beige | bare | thin script breaks up at 16 | weak on both |
| Ligonier | tree inside a rounded-triangle shield, in a white circle | round tile; SVG switches to a black circle in dark | clear | ok (dark variant) |
| Desiring God | four arrows converging on the centre, white on red | tile | clear | ok |
| The Gospel Coalition (+ Coalición, its Spanish site) | «TGC» white on green | tile | letters merge at 16 | ok |
| Christianity Today | «CT» white serif on black | tile | ok at 32, thin at 16 | ok |
| Monergism | gold «M» on black, photographic shading | tile | ok | ok |
| CCEL | yellow octagonal gem with facets, grey frame | round tile | reads as a yellow blob | ok |
| New Advent | a painted icon of Christ (photo) | tile | a face-coloured blob | ok |
| Catholic Answers | «CA» monogram in a blue shield | tile | ok at 32 | ok |
| Vatican.va | crossed keys and tiara, beige | bare | illegible lace | weak |
| USCCB | white Greek cross in a navy circle | round tile | very clear | ok — but the shape is the circled equal-armed cross (see 03 §Celtic/sun cross) |
| OCA | «OCA» condensed blue letters | bare | letters too narrow | fair |
| GOARCH | seal with a cross and IC XC NI KA, grey line art | tile (white) | illegible | ok (white tile) |
| Ancient Faith | thin dome outline, light blue | bare | almost invisible on light | fair |
| OrthodoxWiki | cross in a round seal, blue and green | bare | busy | ok |
| LCMS | tall blue cross with crossing strokes | bare | ok on light | **vanishes** (1.78) |
| ELCA | cross over a globe, stained-glass colours | bare | busy | **weak** (1.64) |
| Banner of Truth | white figure carrying a banner, navy tile | tile | figure unreadable | ok |
| Hallow | white halo over a white disc on purple (touch); bare purple disc + halo (tab) | bare (tab) | a purple dot | **vanishes** (1.43) |
| Glorify | orange «G» on peach | tile | ok | ok |
| Pray.com | «P» white on black (tab), «PRAY» (touch) | tile | clear | ok |
| Dwell | white sound-wave / heart on pink (touch), red (tab) | tile | ok | ok |
| Olive Tree | white olive tree on green | tile | blob | ok |
| Bible Study Tools | white star-burst on orange | tile (not square) | clear | ok |
| STEPBible | teal horizontal bars stepping down | bare | clear | ok |
| GotQuestions | two overlapping blue speech bubbles | bare | clear | ok |
| ACI Prensa | white globe-and-dove on a red circle | round tile | busy | ok |
| Early Christian Writings | **no favicon** (browser default) | — | — | — |

## 2. Text study and reference (11; 10 with an icon)

| Site | Mark | Form | 16 px read | Dark tab |
|---|---|---|---|---|
| Sefaria | one white Hebrew letter on navy (`theme-color #18345D`) | tile | very clear | ok |
| Quran.com | Arabic calligraphy «Qur'an», gold | bare | thin strokes break | fair |
| Wikipedia | «W» serif on white | round tile | clear | ok (white tile) |
| Wikisource | blue globe-and-iceberg (the Wikisource logo) | bare | busy | ok |
| Perseus | white running figure on red (low-res) | tile | blob | ok |
| SEP (Stanford) | black silhouette of The Thinker on white | tile | odd blob | ok |
| Internet Archive | white temple columns on black | tile | clear | ok |
| Project Gutenberg | «PG» red on pale blue | tile | ok | ok |
| Britannica | white thistle on navy | round tile | blob | ok |
| JSTOR | ornate «J» on a red ornamented square | tile | busy | ok |
| Scaife Viewer | **no favicon** | — | — | — |

## 3. Editorial, publishing, study and product tools (42)

| Site | Mark | Form | Dark tab |
|---|---|---|---|
| Stripe Press | serves Stripe's favicon (white parallelogram on violet), not its own mark | rounded tile | ok |
| Works in Progress | line portrait of a man in glasses | tile | ok |
| Aeon | white «a» on dark red | tile | ok |
| Are.na | two black asterisk-stars; SVG flips to white in dark | bare, dark-aware | ok |
| Readwise | «R» black on very light tile | tile | ok |
| Kindle | reader under a tree, photo-blue | tile | ok |
| Apple Books (apple.com) | Apple logo in a white circle | bare circle | ok |
| Penguin | the penguin in an orange oval | bare | ok |
| Oxford University Press | white crescent ring on navy circle | round tile | ok |
| Loeb Classical Library | white serif «L» on grey | tile | ok |
| Library of America | open book with stars above, black lines | bare | **vanishes** (1.74) |
| NYRB | «NYR» white on red | tile | ok |
| Folio Society | «FS» monogram in an oval, black on white | tile | ok |
| Medium | «Me» white on black | tile | ok |
| Substack | white bookmark-lines on orange | rounded tile | ok |
| Ghost | white ring in a black rounded square | tile | ok |
| Notion | «N» in an isometric cube, black outline on white | bare (white fill) | ok |
| Obsidian | violet crystal; SVG has a dark variant | bare, dark-aware | ok |
| Linear | white diagonal stripes in a circle, black rounded tile | tile | ok |
| Arc | red/blue overlapping «A» ribbon | bare | ok |
| Dia | white dome on a black rounded tile; SVG dark-aware | tile | ok |
| Anthropic | «A\» black on cream | tile | ok |
| Claude | terracotta spark (radiating strokes) | bare | ok (mid-luminance) |
| Perplexity | white lattice/book glyph on black | tile | ok |
| Kagi | magnifier with an orange ball | bare | ok |
| Mubi | 7 black dots | bare | **vanishes** (1.71) |
| Letterboxd | three dots orange/green/blue on slate | tile | ok |
| Goodreads | «g» on beige | tile | ok |
| New York Times | blackletter «T» | bare | **vanishes** (1.55) |
| The New Yorker | Eustace Tilley (top hat) | bare | fair |
| The Economist | white «E» on red | tile | ok |
| Financial Times | «FT» on salmon | tile | ok |
| The Atlantic | red «A» on white | tile | ok |
| gwern.net | blackletter «G»; separate dark PNG via `media` | tile | ok (dark-aware) |
| Our World in Data | «Data» on navy with a red base band | tile | ok |
| Every | script «E»; dark PNG via `media` + dark-aware SVG | bare, dark-aware | ok |
| Vercel | white triangle in a black circle | round tile | ok |
| Stripe | white parallelogram on violet | rounded tile | ok |
| GitHub | octocat, near-black | bare | **vanishes** in this render (1.22); GitHub ships a `mask-icon` and an `alternate icon`, and may swap by script |
| Figma | five coloured shapes | bare | ok |
| Raycast | red diagonal mark on black | tile | ok |
| Craft | navy split shape; separate light/dark ICO and PNGs via `media` | bare, dark-aware | ok |

## 4. Patterns (counts from the tables; one site may count once)

| Pattern | Christian (36) | Text study (10) | Editorial/tools (42) |
|---|---|---|---|
| Letter or monogram on a tile | 8 (CT, TGC, Coalición, CA, Monergism, Glorify, Pray, BibleGateway touch) | 4 (Sefaria, Wikipedia, PG, JSTOR) | 14 (Aeon, Economist, FT, Medium, NYRB, Goodreads, Loeb, Readwise, Atlantic, gwern, Anthropic, Notion, Folio, OWID) |
| Bare letters | 2 (ESV, OCA) | 0 | 2 (NYT, Every) |
| Christian symbol (cross, book, dove, flame, halo, seal, keys, icon) | 20 (YouVersion, Logos, Biblia, Faithlife, BLB, Bible Hub, BibleProject, Ligonier, New Advent, Vatican, USCCB, GOARCH, Ancient Faith, OrthodoxWiki, LCMS, ELCA, Banner of Truth, Hallow, Olive Tree, ACI Prensa) | 0 | 0 |
| Abstract / geometric sign | 6 (Desiring God, CCEL, STEP, GotQuestions, Dwell, Bible Study Tools) | 0 | 18 (Claude, Linear, Vercel, Raycast, Perplexity, Obsidian, Arc, Dia, Mubi, Are.na, Craft, Stripe, Stripe Press, Substack, Letterboxd, Ghost, OUP, Figma) |
| Pictorial / mascot | — (counted as symbol) | 6 (SEP, Archive, Britannica, Wikisource, Perseus, Quran calligraphy) | 8 (Penguin, New Yorker, WIP, Kindle, Library of America, GitHub, Apple Books, Kagi) |

Counting rule: a book, cross, globe-with-cross, flame, halo, seal, keys or painted icon counts as «Christian symbol». Desiring God's converging arrows and CCEL's gem count as abstract.

**What dominates the Christian-reference space** [inference from the table]:
1. **Books and crosses**: 20 of 36 use a Christian symbol; open or closed books (YouVersion, Blue Letter Bible, Bible Hub, BibleProject), crosses (Logos/Biblia, USCCB, LCMS, ELCA, OrthodoxWiki, GOARCH), and church-body seals (Vatican, GOARCH). A book or a cross would sit in the most crowded slot.
2. **Initials on a coloured tile** for media brands (CT, TGC, CA, Monergism, Glorify, Pray).
3. **Saturated blue** is the most common colour among the Christian icons by eye (Logos, Biblia, Bible Hub, Catholic Answers, USCCB, LCMS, Banner of Truth, OCA, GotQuestions, OrthodoxWiki) [visual reading, hues not measured]. Doctrina's accent `#2c4a9e` would land in that crowd.
4. Two Bible products share one mark (Logos and Biblia: same magnifier-cross), and two TGC sites share «TGC» — a reminder that in a tab strip a mark is identified by shape and colour, not by name.

**Rare / open territory in the Christian space:**
- **A single letter of a sacred-text script on a tile** — used by Sefaria (Hebrew) for Jewish text study; no Christian site in the sample uses a Greek letter or Greek ligature (Chi-Rho, staurogram, nomina sacra) as its favicon.
- **Typographic or scribal signs** (pilcrow, section sign, overline, guillemets, asterisk/obelus, columns) — none in the Christian sample; the editorial world uses bare signs (Are.na's asterisks, Substack's bookmark lines, Claude's spark).
- **Quiet, neutral-colour tiles** (black/ink, grey, cream) — CT and Monergism are black; no Christian site uses an off-white or paper tile like Anthropic, Readwise or Goodreads.

**Legibility at 16 px** [verified, visual + measures]:
- Fails: detailed pictures (New Advent's painted icon, Banner of Truth's figure, Vatican keys/tiara, GOARCH seal, Olive Tree), thin script (ESV, Quran.com, Every), multi-letter wordmarks (TGC, YouVersion «HOLY BIBLE», NYR, OCA).
- Works: one heavy shape with one counter (Sefaria letter, USCCB cross-in-circle, Logos magnifier, Vercel triangle, Medium «Me» is borderline), filled tiles with a single white glyph (Aeon, Economist, Desiring God, Pray).
- **Vanish on a dark Chrome tab** (bare dark glyph, contrast < 2:1 against `#35363a`): BibleGateway, LCMS, ELCA, Hallow, NYT, GitHub (static file), Mubi, Library of America. **Weak on a light tab**: Ancient Faith (thin pale line), ESV (beige), Quran.com (gold). Sites that handle dark tabs do it with a tile (most), a dark-aware SVG (Are.na, Obsidian, Dia, Ligonier, OrthodoxWiki, Every) or `media`-switched PNG/ICO (Craft, gwern, Every).

**Format adoption in this sample:** 26 of 90 sites ship an SVG icon; 6 SVGs contain `prefers-color-scheme` (Every, Are.na, Dia, Obsidian, Ligonier, OrthodoxWiki); 3 sites switch files with `media` (Craft, gwern, Every). For comparison, iconmap.io's 2021 crawl of 425,909 favicons found SVG in 1.1 % of `<link rel="icon">` files (2.5 % in the top 1,000) and PNG in 71.6 %; median file 1.9 KB; 56 % of ICO files hold a single image (https://iconmap.io/blog, accessed 2026-11-04 [verified]).

## 5. What this means for Doctrina [inference]

- Avoid the two crowded slots (book, cross) and saturated mid-blue as the primary colour, or accept looking like a sibling of Logos/Biblia/USCCB.
- The open slots that fit a primary-source, multi-tradition study tool: a scribal or Greek-letter sign on a tile (the Sefaria pattern applied to Greek), a typographic sign, or a geometric sign built from the site's own devices (columns, guillemets).
- A tile (or a mid-luminance single colour) is the robust answer to dark tabs; most editorial brands that read well at 16 px use one white glyph on a solid tile.

## Limits

- Folder names: Biblia.com is stored as `refs/faithlife-bible-reader/` and TGC's Spanish site as `refs/tgc-spanish/` (the repo's English-only file-name check rejects «biblia»).

- Chrome tab rendering was simulated (canvas downscale + Chrome's tab colours); Dia, Safari, Firefox tabs were not captured. Safari ignores the dark media query (01 §3).
- «Tab icon» pick is a heuristic; sites that swap favicons with JavaScript (possibly GitHub) are shown with their static file.
- Two sites serve no favicon (Early Christian Writings, Scaife Viewer); Google's s2 favicon cache returned a redirect for both.
- Colour families are by eye, not measured hues.
