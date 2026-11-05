# 08 · Why it reads as AI-slop, and the container

Accessed 2026-11-04. Tags as in the README. «Pattern (n)» = n independent sources say the same thing. Practitioner sources are opinion; where a source sells design services I say so.

## 1. The short answer

- **H1 mostly holds.** The specific combination in D3 — a white/paper glyph centred in a dark rounded square whose corner radius is the iOS app-icon proportion — is the default favicon of the current web: it is literally the example in Next.js's own docs (black tile, white «A»), it is what Vercel-ecosystem and AI products ship (Linear, Bolt, v0, Cursor, Warp, Perplexity, Underware), and practitioners name «icons in square boxes» and «a white circle on a black square» as tells (§2). D3's tile is `rx 7` on a 32 grid = **21.9 % of the width**, i.e. the iOS squircle look [verified, computed from `variants/d3-guillemet.svg`].
- **But it is not only the container.** The glyph is a straight constant-width double chevron, identical at 16 px to the UI «collapse/back» icon (07 §2, 06 §4). Container + UI glyph together = «a button from a vibe-coded app». Change only one and half the problem stays [inference from 06, 07].
- **A new risk the brief did not name:** Jim Nielsen (2026-07-29) lists «beige/cream colors, orange accents, and serif typefaces» among aesthetics his brain «associates with AI» (§2). Doctrina is paper + serif. A **paper tile with a serif glyph** can read as «Anthropic/Claude-like» (Anthropic's favicon is a black `A\` on a cream tile, 02 §3 and `refs/containers/anthropic/`). DESIGN §7 already bans «cream + terracotta»; keep the paper tile away from warm cream and never pair it with an orange/terracotta accent.
- **What reads as authored** (pattern 5): a real idea, specific drawing decisions (optical corrections, consistent stroke logic, deliberate asymmetry), and provenance you could explain in one sentence. The diple has the provenance; it needs the drawing.

## 2. What practitioners say makes a mark look AI-made, generic or vibe-coded

| Source | Quote (short) | Bearing on D3 |
|---|---|---|
| HN, amanzi, 2026-08-12, on a site claiming «100 % human»: https://news.ycombinator.com/item?id=49267966 [verified via HN API] | «Lots of cards with hover effects, **icons in square boxes**, the button shapes … has Claude written all over it.» | icon-in-a-tile as an AI tell (H1) |
| HN, phendrenad2, 2026-09-21, reviewing a Show HN: https://news.ycombinator.com/item?id=49782191 [verified] | «Your logo is a "big O", get something more unique… fix your favicon, it's **a white circle on a black square**» | exactly D3's construction, called generic |
| HN, mike_hearn, 2026-07-19 (thread «Why do AI company logos look like buttholes?»): https://news.ycombinator.com/item?id=48967940 [verified] | AI logos «are all just adaptations to app store rules»: «They have to be square», «solid backgrounds and rounded corners», «simple solid geometries», recognisable «at a wide range of sizes» → «this boring-ass Sahara Desert of visuals» | the container rules themselves produce sameness (H1) |
| Louie Mantia, «The Shape of Apps», Parakeet, 2026-07-15: https://parakeet.co/blog/the-shape-of-apps/ [verified] | under the squircle mandate «some of the platform's best icons look worse, while some of the platform's worst icons look better»; distinguishes treating the squircle as a container vs as a canvas, where «the icon **is** the squircle»; arbitrary shapes «scaled down onto "custom-colored squircles"» = «Squircle Jail» | a glyph floating in a squircle is the levelled, generic case; the alternative is to make the tile part of the sign |
| John Gruber on Mantia, 2026-07-16: https://daringfireball.net/linked/2026/07/16/mantia-shape-of-apps [verified] | «a compelling defense of the direction Apple has taken» | counter-view: the squircle helps system harmony |
| Jim Nielsen, «The AI Aesthetic», 2026-07-29: https://blog.jim-nielsen.com/2026/ai-aesthetic/ [verified]; HN discussion (378 points): https://news.ycombinator.com/item?id=49117099 [verified] | sparkle = AI; «a lot of AI apps use tiny icons»; «beige/cream colors, orange accents, and serif typefaces»; HN jjcm: LLMs write «consistent» design code, «You end up aligning on a generic mean»; NicuCalcea: beige + orange «probably refers to the design guidelines of Anthropic, Mistral, Microsoft AI» | **paper + serif is itself near the «AI look»** |
| Jim Nielsen, «Visual design homogeneity at scale», 2025-06-06: https://blog.jim-nielsen.com/2025/visual-design-homogeneity-at-scale/ [verified] | committee feedback dilutes: «when everyone's feedback gets incorporated, that's what often emerges»; small teams keep a taste that «doesn't dilute» | authored = one clear decision |
| Radek Sienkiewicz, «Why do AI company logos look like buttholes?», 2025-04-10: https://velvetshark.com/ai-company-logos-that-look-like-buttholes [verified] | shared features: round shapes, gradient, central focal point, radiating elements; causes: copycat effect, design by committee; «the depressing sameness in modern design» | centred, symmetric, safe = generic |
| HN, roundabout-host, 2026-08-13, «Ask HN: How can you tell a site/app is vibe coded?»: https://news.ycombinator.com/item?id=49290499 [verified] | «Often there is the Inter font. Corners are usually quite rounded, there are lots of gradients.» | rounded corners as tell |
| Jeff Humble, «7 Signs a UI Has Been Vibe Coded», The Fountain Institute (Apr 24, year not shown): https://www.thefountaininstitute.com/blog/signs-vibe-coded-ui [verified] | «Purple-to-indigo gradients have become the Times New Roman of AI-generated design»; «everything goes in a card»; emoji as icons | D3 avoids these; the tile is the «card» of favicons [inference] |
| Impeccable (Paul Bakaus's open-source anti-slop design tool), `reference/new-work.md` v4.4.0, read from the locally installed skill; repo https://github.com/pbakaus/impeccable [verified locally; repo not opened] | «Gradients, glass, **generic icon tiles**, and many-vertex `clip-path` polygons where an authored asset belongs are the gap wearing chrome» | AI-tooling itself flags icon tiles |
| Next.js 16.3.8 docs, `app-icons.md` (local) [verified] | the documented `app/icon.tsx` example renders `background: 'black'`, `color: 'white'`, the letter `A` centred in 32×32 | the framework's default favicon *is* D3's construction |
| r/logodesign, «Can you spot human Vs AI logo design?» (u/hankgreen1, ~1 y ago): https://www.reddit.com/r/logodesign/comments/1o87kr8/ read via Playwright [verified] | Weekly-Zucchini8131 (370 pts): AI tells = «Inconsistent rounded corners, and mish mosh of sharp and rounded angles», «lifeless»; the human one: «All consistent line widths, the white space itself is treated appropriately»; ChickyBoys: «none of them are clever or have a clear concept»; inspectorpickle (74): «humans regularly put out terrible generic work that looks like this too» | authored = consistent stroke logic + a concept |
| r/logodesign, «Do these logos look like AI» (~10 mo ago): https://www.reddit.com/r/logodesign/comments/1puutva/ [verified] | «Some of the line work is just not very smooth which is what makes it look a bit AI»; others: «too ugly + precise to be AI» | «AI look» is about genericness, not imperfection |
| IV Whitman, «The Mark of the Maker», Esque Design, 2026-01-15: https://esquedesign.netlify.app/journal/why-bespoke-logo-design-still-matters [verified; design-studio blog] | «you get the center of the bell curve»; «hundreds of micro-decisions»; «Optical balance…», «The way a letterform's weight needs to be adjusted at small scales», «mathematical centering and perceptual centering» | concrete authored decisions to apply |
| Sagi Haviv, D&AD, 2019-01-22: https://www.dandad.org/insights/features/graphic-design-sagi-haviv-features-opinions [verified] | «A computer would not have had the capability to break the rules» | authored = a deliberate break |
| Round 1, 04 §1.1 (Rand, Bierut, Haviv) | a mark «point[s]», needs «a good reason» | provenance matters |

Reddit note: old.reddit.com shows a login wall; **new reddit.com pages loaded in Playwright without login** this run (round 1 was blocked). Threads and comments above were read there; scores are as displayed. No mirrors used.

Patterns:
- **(4) Tile + centred glyph is a convention of app-store icons and AI-built UI, read as generic**: amanzi, phendrenad2, mike_hearn, Mantia, Impeccable (+ Next docs example as evidence of the default).
- **(5) Authored = idea + specific drawing decisions**: Whitman, Reddit thread (consistent stroke logic, concept), Haviv, Rand (04), Jim Nielsen 2025.
- **(2) Cream/beige + serif is now an AI-associated aesthetic**: Nielsen 2026 + HN NicuCalcea. Weak but directly relevant to Doctrina.

## 3. Containers that survive both tabs: real examples

All rasterised this run (`refs/_sheets/containers-container.png`, `containers-type.png`; round-1 sheets for Economist/FT/Medium etc.) [verified, visual]. Key fact for every tile [verified, computed]: **a tile in a site colour disappears on one of the two tabs** — ink `#1c1713` vs dark tab `#35363a` = 1.47; paper `#e8e5de` vs light tab `#dee1e6` = 1.04. So on that tab the glyph alone is seen: an ink tile looks like a bare paper glyph on dark tabs; a **paper tile looks like a bare ink glyph on light tabs**. The glyph must work bare anyway.

| Container | Real examples (seen) | How it reads at 16 px | Dark/light |
|---|---|---|---|
| **Ink rounded square (iOS radius) + light glyph** (= D3) | Linear, Bolt, v0, Underware `v`, Warp, Plex, Le Monde (dark), Next docs example | «app», «dev tool», «AI product» | ok both (tile fades on dark) |
| **Sharp square, rx 0** | Flipboard (red), Production Type (red `P`), Typotheque (orange), Academia `A` and Perlego `P` (white), Practical Typography `PT` (white), Scribd `[s]` (green), Sefaria (navy), Anthropic (cream), round 1: Economist, FT, NYRB, Loeb | «publisher / editorial / print»: corners read as a printed block, not a button [inference] | ok both |
| **Circle** | Vercel, Grilli `GT`, Bloomberg `B`, Brill `B`, Seuil `S`, Typewolf `&`, Quotefancy `"`, Vodafone, Fundéu `F̄`, Monocle | «seal / badge / coin»; survives Google's circular crop by construction | ok both |
| **Full-bleed paper/white tile** | Anthropic (cream), Readwise `R`, Academia, Perlego, Practical Typography, Fonts In Use, Lit Hub (beige), Goodreads (beige) | on light tabs the tile vanishes and the glyph reads bare; on dark tabs a light square | ok both |
| **Paper tile with a hairline** | TypeTogether (ring outline round `tt`); none square found | hairline < 1 device px at 16 px vanishes [inference from 0.5 px per unit] | marginal |
| **Glyph cut out of / built from the tile** (tile = part of the sign) | **Flipboard** (white `F` is the negative space of the red square); **Shady Characters** (the pilcrow's bowl is a red rounded block, the stems cut beside it); Substack (bookmark ribbon notched from an orange tile); Bandcamp (the parallelogram tile *is* the mark) | most «designed» of the set; no floating-glyph look | ok both |
| **Glyph offset / cropped by the edge** | Guardian `G` (fills the tile almost edge to edge), Shady Characters (bleeds), Le Monde `M` (fills) | confident, editorial; breaks the centred-glyph default | ok both |
| **Split tile** | Microsoft four squares (PowerShell), Fonts In Use (page-layout blocks), Dinamo (`ABC` blocks), Linear (stripes) | busy at 16 px | ok |
| **Notched or folded corner** | none among 153 refs | the folded corner is the generic «document/file» icon [memory, not checked against an icon set] | n/a |
| **Bare mid-luminance glyph** | Typography.com green `&`, Commercial Type blue `C`, Claude terracotta spark, Verso red `V`, Accenture purple `>`, The Verge purple | reads as «a sign», no app frame | ok both if ≥ 3:1 both sides |
| **Bare dark glyph** (fails) | Klim blackletter `k`, Wallpaper* asterisk, Quartz `QZ`, AOC, Pitchfork (all vanish or nearly on dark) | — | **fails dark** (round 1: 8/88 do) |

Bare favicon colour, checked against **both** Chrome tab colours [verified, computed, WCAG]: only a narrow band of relative luminance ≈ 0.21 passes 3:1 on `#dee1e6` and `#35363a` at once. `#8a7f6c` (a warm grey) gives 3.00 / 3.06 and neutral `#808080` 3.01 / 3.06 — both exactly at the limit, i.e. a dull mid-grey mark. Near misses: `#7d766b` 3.43 / 2.69, `#8a8378` 2.86 / 3.22, and the out-of-system `#6b7fd6` from 05 §0.2 is 2.84 on `#dee1e6` / 3.24 on `#35363a` (05 measured it against white, where it passes). → A bare favicon in one fixed colour is possible only as a flat mid-grey; the in-site bare mark must swap with the theme instead (09).

## 4. Testing round 1's advice (05) against this evidence

| Round-1 statement | Verdict now |
|---|---|
| «Tile: robust everywhere» (05 §0) | **Still true technically**, but the ink rounded-square tile is the generic AI/app default (§2). Prefer sharp (rx 0–1) or circle, or make the tile part of the sign. |
| «Ink tile or paper tile is unclaimed in the Christian sample» (05 §0.2) | True for Christian sites; **not** for the wider tab strip: ink rounded tiles are everywhere in dev/AI tools; cream tiles are Anthropic's. |
| «Mid-luminance bare glyph» (05 §0) | Harder than 05 says: against Chrome's light strip `#dee1e6` (not white) only a flat mid-grey (`#8a7f6c`, `#808080`) reaches 3.0 on both (§3). Bare favicon = not recommended. |
| D3 «16 px: low risk… Heavy serif guillemets look less like UI arrows than geometric ones» (05 §2) | **Contradicted**: Newsreader's « is geometric (06 §4) and at 16 px matches Material/Lucide (07 §2). |
| «icons in coloured squares» exemption question (05 §5 q5) | Evidence says Pedro's instinct is right: a coloured rounded square *is* the slop pattern; a print-like sharp block or a circle is a different object. |
| «Dark-aware SVG only as refinement» (05 §0) | Unchanged (Safari ignores it; 01 §3). |

## 5. What would make D3 feel authored [inference from §2–3, 06, 07]

1. **Sign:** draw the diple or guillemet as *writing*: asymmetric arms (the Vaticanus diple's short shallow upper arm and long steep lower arm, 06 §3), pen or wedge stress, an entry hook, or the dots of the *periestigmene*. No straight monoline chevrons.
2. **Placement:** put the sign where a scribe put it — in the **margin of a column of lines**: a tile that shows 2–3 text lines with the diple beside them is the most specific image in the whole research (Isidore: «to set apart or point out the testimonies of Scripture»). Test whether lines survive 16 px (3-unit bars, 2-unit gaps, max 3 lines; 05 §0.1).
3. **Container:** sharp square or full-bleed block (print), circle (seal), or a tile that the sign cuts into (Flipboard/Shady Characters logic). Avoid the iOS 22 % radius.
4. **Optics, not geometry:** perceptual centring (a `>` must sit right of the mathematical centre), overshoot of the point past the grid, stroke weight tuned at 16 and 32 separately (Whitman; 04 §1.2).
5. **Colour:** ink and paper are fine; avoid cream-yellow paper and any orange/terracotta pairing (Nielsen; DESIGN §7). The accent blue tile is in the crowded Christian-site blue (02 §4).

## Could not open / confirm

- Brand New (UnderConsideration) reviews: paywalled (unchanged from round 1).
- Creative Bloq «Why do all AI company logos look the same?»: body not returned by the fetcher.
- Apple's exact app-icon corner radius ratio (the 21.9 % figure is D3's own; the iOS value is commonly quoted around 22 % [memory, not checked]).
- No study measures whether users perceive tile vs no-tile favicons as more or less «AI». All evidence above is practitioner opinion plus our rasters.
