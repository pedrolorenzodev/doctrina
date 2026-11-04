# 05 · Variant brief: 30 directions for the Doctrina mark

For the coordinator who draws the ~24 variants. Self-contained: every «why» points to the finding (file § section); read the cited section only if you need the evidence. Tags as in README. Written 2026-11-04.

## 0. Constraints every variant must meet

**Hard requirements** (from 01, 02, 04):
1. **Reads at 16 CSS px** (16 device px on 1×, 32 on 2×; Chromium `kFaviconSize = 16`, 01 §2). One idea, ≤ 3 shapes, one large counter at most two (04 §1.2).
2. **Survives both tab colours.** Chrome/Dia add no background (01 §2); Safari ignores the dark media query and plates low-contrast icons in white (01 §3); 8 of 88 surveyed icons vanish on a dark tab (02 §4). Pick one per variant and say which:
   - **Tile**: glyph on its own filled square/rounded square/circle (internal contrast does the work). Robust everywhere.
   - **Mid-luminance bare glyph**: one colour with ≥ 3:1 against both `#ffffff` and `#35363a` (table §0.2).
   - **Dark-aware SVG** (`@media (prefers-color-scheme: dark)` inside the SVG): works in Chromium/Firefox, not Safari, follows the OS not the tab, not Incognito (01 §3, 04 §2.4). Only as a refinement of a tile or mid-luminance mark, never as the only defence.
3. **Round-croppable** (Google shows favicons in a circle; Mueller 2024, 01 §2) and **maskable** (all meaning inside a centred circle of r = 0.4·w for the 512 Android icon, 01 §4).
4. **No text, no photo, no gradient, no thin script** (Apple HIG, NN/g, 04 §1.1; failures in 02 §4).
5. **Same glyph from 16 px to 180 px touch icon to the 1200×630 card to the header** (04 §1.4). The 180 px apple-touch-icon is opaque (iOS fills transparency with black, 01 §4) and doubles as iMessage's link icon (TN3156, 01 §5).
6. **Neutrality**: no tradition-owned or contested symbol as the default (03 §8): no crossed keys, Luther rose, burning bush, heart-in-hand, IHS, IC XC, 3-bar cross, Jerusalem cross, Agnus Dei, cross-and-flame, and **no «+» inside a circle** (ADL lists the circled cross as a white-supremacist sun cross, 03 §2).
7. **DESIGN.md AI-slop list**: no cross as decoration, gold on navy, cream + terracotta, parchment, stock Bible/hands, gradients, emoji. ⚠ The list also bans «icons in coloured squares» — that targets UI feature icons, but a favicon tile *is* a coloured square; **flag it to Pedro** (open question 5).

### 0.1 Grid for the SVGs

- `viewBox="0 0 32 32"`; design on whole units so 16 px lands on half-units → snap key edges to even units.
- Tile: full 32×32 square with `rx` 0 (square), 6 (iOS-like), or 16 (circle). Glyph inside a 24×24 live area (4-unit margin) for the favicon; for the maskable 512 version scale the glyph to fit a circle of r = 12.8 units.
- Minimum stroke: **3 units** (≈ 1.5 device px at 16 px, 3 px at 32) for any line that must survive; counters ≥ 4 units wide.
- Test each variant at 16 (1×), 32, 64, 180, circular crop, on `#ffffff`, `#dee1e6`, `#35363a`, `#202124`, and in a strip of 8 neighbour favicons (use `refs/_sheets/` icons as neighbours: Logos, YouVersion, Wikipedia, Claude, Medium, Sefaria, GitHub, NYT).

### 0.2 Colour (palette is free; mark in-system vs out)

Contrast ratios computed this run (WCAG formula) [verified, computed]:

| Colour | on white tab | on Chrome dark tab `#35363a` | Note |
|---|---|---|---|
| ink `#1c1713` (in-system) | 17.8 | 1.47 | bare: fails dark |
| accent `#2c4a9e` (in-system) | 8.1 | 1.48 | bare: fails dark |
| accent-dark `#9eb3ee` (in-system, dark theme) | 2.1 | 5.8 | bare: fails light |
| cite `#5f3d0c` (in-system) | 9.7 | 1.24 | bare: fails dark |
| ink-3 `#615c54` (in-system) | 6.6 | 1.8 | bare: weak dark |
| bg `#e8e5de` (in-system) | 1.26 | 9.6 | bare: fails light |
| `#6b7fd6` (out-of-system, lighter accent) | 3.7 | 3.2 | works bare on both |
| `#b07a2a` (out-of-system ochre) | 3.7 | 3.25 | works bare on both — ⚠ near «gold» (slop list: gold on navy) |
| `#c0392b` (out-of-system vermilion) | 5.4 | 2.2 | weak dark |

Tile pairs: paper `#e8e5de` on ink `#1c1713` = 14.1; paper on accent `#2c4a9e` = 6.5; white on accent = 8.1; paper on cite `#5f3d0c` = 7.7.

Notes: saturated mid-blue is the most crowded colour among Christian favicons (02 §4: Logos, Biblia, Bible Hub, Catholic Answers, USCCB, LCMS, Banner of Truth…). An **ink tile** (black-brown) or a **paper tile** is unclaimed in the Christian sample (only CT and Monergism use black, 02 §1). In-system tiles: ink, paper, accent, cite. Out-of-system options must be labelled in the proposal.

## 1. Families

- **Family A · Abstract sign from the site's own devices** (name-independent): columns, margins, rulers.
- **Family B · Reinterpreted early-Christian / scribal symbol** (name-independent): staurogram, nomina sacra, codex, Christograms reduced.
- **Family C · Typographic monogram** (name-dependent: dies if «Doctrina» changes).
- **Family D · Bookish sign or sacred-script letter** (fourth family found in the research): one punctuation or scholarly sign, or one Greek letter on a tile — the Sefaria pattern (02 §2, 04 §2.2).

Name-dependence: Y = depends on «Doctrina»; N = survives a rename.

## 2. The 30 directions

### Family A · Abstract sign

**A1 · Hexapla columns.** Three solid vertical bars of equal width side by side, the middle one slightly taller (the column being read).
- Why: parallel columns are the visual ancestor of comparing texts (Origen's Hexapla, six columns, before 240; Eusebian canon tables) — patristic, owned by no modern tradition (03 §6); the product shows each tradition «in its own words» side by side on request (PROJECT.md).
- 16 px: low risk (three 6-unit bars, 3-unit gaps).
- Neutrality: shared + bookish. Name: N.
- Similar: generic «bar chart» and «pause» icons; Intercom's logo (vertical bars in a tile) [memory]. Keep bars equal and unrounded to avoid «chart».
- Build: tile; bars x = 7, 13.5, 20 (w 5), y 8→24 (middle 6→26). Square ends.

**A2 · Two columns and a gutter.** Two tall slabs with a gap — a page spread / diptych seen as blocks.
- Why: same as A1, reduced to «facing texts».
- 16 px: low. Neutrality: bookish. Name: N.
- Similar: «pause» ⏸ [memory] — high risk; mitigate with unequal widths (left 9, right 7) or a top overline joining them.
- Build: two rects 8×18 and 6×18, gutter 3.

**A3 · Canon-table arch.** Two or three columns under one round arch (Eusebian canon tables are arcaded columns of numbers).
- Why: 03 §6 (Eusebian canons, late antique, in «nearly all Greek and Latin manuscripts»).
- 16 px: medium (arch + columns = many parts).
- Neutrality: shared. Name: N.
- Similar: Internet Archive's temple columns (02 §2) and Bible Gateway's doorway (02 §1) — **high resemblance risk**; museum/bank logos. Include once to show it, likely discard.
- Build: semicircle r 10 (stroke 3) over three 3-unit columns.

**A4 · Margin gloss.** Three or four horizontal text lines (bars) with one short mark in the left margin (the reader's note / the paragraphos).
- Why: the reader's margin notes and highlights are core features (DESIGN «Notes»); the Greek *paragraphos* was «a horizontal line in the margin» (03 §6).
- 16 px: medium (lines must be ≥ 3 units with 2-unit gaps → max 4 lines).
- Neutrality: bookish. Name: N.
- Similar: generic «text align / list» icons [memory] — needs the margin mark in accent to be distinctive; STEPBible's stepped bars (02 §1).
- Build: lines x 12→26 at y 9, 14, 19, 24 (h 3); margin bar x 5→9 at y 14 (accent).

**A5 · The ruler.** A vertical line with one tick out of line (the site's right-edge section ruler / time ruler).
- Why: the ruler is a signature component of the site (DESIGN «Right-edge section ruler», «Living time ruler»).
- 16 px: medium-high (thin ticks die). Neutrality: neutral. Name: N.
- Similar: generic «timeline» icons.
- Build: spine 3 units; 4 ticks 3×6, one 3×10 in accent.

**A6 · Quire edge.** A closed book seen from the fore-edge: a stack of 3–4 thick lines inside a rounded bracket (the quire of a codex).
- Why: codex = the early-Christian book form (03 §6); avoids the «open Bible» cliché (02 §4, 04 §2.1).
- 16 px: medium. Neutrality: bookish. Name: N.
- Similar: Substack's bookmark lines and STEPBible (02 §3, §1), «database / stack» icons.
- Build: three bars 20×3 with 2-unit gaps, left cap rounded r 4.

**A7 · Offset square (the open question).** A square with one corner cut / one quadrant shifted — «a question open between voices».
- Why: Rand — a mark need not describe (04 §1.1); abstract slot is open among Christian sites (6 of 36, 02 §4).
- 16 px: low. Neutrality: total. Name: N.
- Similar: many tech marks (Stripe's parallelogram, Raycast, Linear — 02 §3): risk of «generic startup».
- Build: 20×20 square, top-right quadrant moved +3,−3.

### Family B · Reinterpreted early-Christian / scribal symbol

**B1 · Staurogram ⳨ (heavy).** Tau-rho ligature: a T whose stem carries a rho's bowl, in one weight.
- Why: earliest Christian visual reference to the cross, in 𝔓66/𝔓75 (c. 200), a scribal abbreviation inside the word *stauros*; pre-dates every modern tradition; almost nobody uses it as a brand (03 §1).
- 16 px: low-medium (needs a big bowl counter ≥ 6 units).
- Neutrality: shared; ⚠ Hurtado reads it as a pictogram of the crucified — Reformed readers who reject images of Christ may object (03 §1, §4). Name: N.
- Similar: a «P» with a crossbar — Pinterest «P», PayPal «P» [memory]; Coptic symbol U+2CE8.
- Build: stem 4 units x 14→18, y 6→26; crossbar 4 units y 12→16, x 7→25; bowl: rho bowl on the stem's top-right, outer r 6, stroke 4. Draw in Gentium Book Plus as reference, then rebuild geometric.

**B2 · Nomen sacrum ΘΣ with overline.** Two Greek capitals (Θ Σ, «God») under a heavy overline.
- Why: nomina sacra are the scribal mark of reverence in the earliest manuscripts, shared by all (03 §1); overline also echoes the Slavonic titlo.
- 16 px: high (two letters + bar) — try at 32 first; maybe only as the 180 px / header version.
- Neutrality: shared. Name: N.
- Similar: none found.
- Build: Gentium Book Plus Bold Θ and Σ at cap height 14, bar 3 units above with 2-unit gap, spanning both.

**B3 · Single Θ with overline (nomen sacrum reduced).** One theta under the overline.
- Why: B2 reduced to one letter for 16 px; Θ = θεός / θεολογία.
- 16 px: low (circle + bar inside + overline).
- Neutrality: shared. Name: N.
- Similar: «⊖ / null set / theta» math signs [memory]; the overline distinguishes it.
- Build: ring outer r 9 stroke 3.5; crossbar 3; overline 3 units, 2 above the ring.

**B4 · Constructed codex.** A closed book as a solid block with a spine band and two clasps notches — geometric, not a drawing.
- Why: codex distinctively Christian in the 2nd–3rd c. (03 §6); a solid closed block avoids the «open Bible» cliché (04 §2.1).
- 16 px: low (it's a rectangle) — risk it reads as «phone» or «door».
- Neutrality: shared + bookish. Name: N.
- Similar: generic book icon; YouVersion's red book (02 §1) — avoid red, avoid any text.
- Build: rect 18×24 rx 2; spine band 3 units on the left; two 2×3 notches on the right edge.

**B5 · Chi-Rho reduced (control).** The standard ☧ drawn heavy.
- Why: include as the **control** to show what the cliché looks like next to the others (03 §1: shared but imperial and the commonest Christian monogram).
- 16 px: low. Neutrality: shared, commonplace. Name: N.
- Similar: countless church logos [memory].
- Build: X strokes 3.5, P stem 4, bowl r 5.

**B6 · IX monogram / Ichthys wheel.** Six- or eight-spoke wheel from superimposed letters.
- Why: earliest monograms (03 §1).
- 16 px: low. Neutrality: shared.
- Similar: **Claude's spark and Are.na's asterisks** (02 §3), generic asterisk — high resemblance risk. Include once to show why it is discarded.
- Build: 6 spokes, stroke 3.5, r 11.

**B7 · Alpha-Omega ligature.** Α and Ω sharing one stroke.
- Why: Rev 1:8; catacombs (03 §1).
- 16 px: high (two glyphs). Neutrality: shared; generic «beginning/end» (03 §1). Name: N.
- Similar: many «AO» monograms [memory].
- Build: Ω's left foot = Α's right leg; stroke 3.5.

**B8 · Overline on a blank.** The nomina-sacra overline alone above an empty tile — «the name is reverenced, not drawn».
- Why: §4 of 03 (no images of God for Reformed; anthropomorphic icons for Orthodox) → a sign that refuses depiction is the most neutral sacred sign there is [inference].
- 16 px: low (one bar) but **reads as «minimise» or a hyphen**. Neutrality: total. Name: N.
- Build: tile; bar 16×3 at y 10.

**B9 · Tau.** A heavy T (tau) as the cross-form of the earliest descriptions (Tertullian on Ezek 9:4, 03 §1).
- 16 px: low. Neutrality: ⚠ Franciscan tau (03 §2). Name: N (coincides with nothing in «Doctrina»).
- Similar: every «T» logo (NYT, T-Mobile) [memory]. Probably discard.

### Family C · Typographic monogram (name-dependent)

**C1 · «D» in Newsreader on an ink tile.** Paper `#e8e5de` capital D, Newsreader (the site's display serif), on `#1c1713`.
- Why: single letter on tile is the commonest editorial pattern that reads at 16 px (02 §4: Aeon, Economist, Loeb); CT went typographic (04 §2.2).
- 16 px: low. Neutrality: total. **Name: Y.**
- Similar: single-«D» marks are common; check the final drawing against a trademark/logo search before adopting [memory, not checked]. In-system colours.
- Build: Newsreader Bold/Display D at cap height 20, optically centred (shift +0.5 right for the bowl).

**C2 · «d» lowercase in Newsreader italic on paper tile.** Ink lowercase italic d on `#e8e5de`.
- Why: lowercase gives a distinctive ascender silhouette (Aeon's «a», Goodreads «g», 02 §3).
- 16 px: low-medium (italic thins). **Name: Y.** In-system.

**C3 · «D» with overline (D̄).** The site's D under the nomina-sacra bar.
- Why: joins the scribal device (03 §1) to the name; overline makes a plain letter ownable.
- 16 px: low-medium. **Name: Y.** Neutrality: total.

**C4 · «D» whose bowl is a column pair.** The D's counter split by a vertical bar (two columns inside the letter).
- Why: name + Hexapla idea (A1).
- 16 px: medium (thin counters). **Name: Y.**
- Similar: «Ð» (eth) [memory].

**C5 · «D» built from a guillemet.** A vertical stem + one large «›» forming a D-like shape.
- Why: the site quotes every tradition in «» (DESIGN, 03 §6).
- 16 px: low. **Name: Y.** Similar: play/next icons ▷ [memory] — risk.

**C6 · Δ (Greek delta) in Gentium Book Plus on tile.** Greek initial of Δοκτρίνα/δόγμα/διδαχή.
- Why: the site already sets Greek in Gentium Book Plus (DESIGN §2); Sefaria pattern (D1).
- 16 px: low (triangle). **Name: Y-ish** (Δ also = «delta, change»). Neutrality: secular.
- Similar: **Vercel's triangle** (02 §3) and every «delta» brand [memory] — high resemblance risk.

**C7 · «DO» / «Dc» ligature.** Two letters fused.
- 16 px: high. **Name: Y.** Include only if Pedro wants a wordmark-like monogram; expect it to fail (02 §4: multi-letter monograms degrade).

### Family D · Bookish sign or sacred-script letter

**D1 · Θ on a tile (Sefaria pattern, Greek).** One Greek capital in Gentium Book Plus, paper on ink (or white on accent).
- Why: Sefaria — the closest analog in mission — uses one letter of its sacred script on a navy tile and reads perfectly at 16 px (02 §2); no Christian site in the sample uses a Greek letter (02 §4 «open territory»); the site's Greek font is Gentium (DESIGN §2).
- 16 px: low. Neutrality: shared (NT and Fathers wrote Greek; owned by none). Name: N.
- Similar: math theta, «Theta» brands [memory]. B3 is this + overline.
- Build: Gentium Book Plus Bold Θ at cap height 20.

**D2 · Λ on a tile (Logos).** Greek lambda, initial of Λόγος (John 1:1).
- 16 px: low. Neutrality: shared. Name: N.
- Similar: **Half-Life λ, AWS Lambda** [memory]; «Logos» is also the leading Bible software brand (03 §1) — double risk. Show it, likely discard.

**D3 · Single guillemet «.** One heavy opening guillemet as the whole mark.
- Why: the site's own quotation device; Spanish-native punctuation (Josse Bade 1527, 03 §6); «each tradition speaks in its own words» = quotation (AGENTS.md).
- 16 px: low (two chevrons, stroke 4). Neutrality: secular-bookish. Name: N.
- Similar: rewind/«back» chevrons ⏪ [memory]; Codecademy-like «<<» marks [memory]. Heavy serif guillemets (Newsreader) look less like UI arrows than geometric ones.
- Build: Newsreader Bold «, scaled to x-height 18; or two 4-unit chevrons, 60° angle.

**D4 · Guillemet pair « » around nothing.** Empty quotation: «the site quotes, never concludes» (AGENTS.md «never concludes»).
- 16 px: medium (four chevrons) — tighten. Neutrality: total. Name: N.
- Similar: code-brackets icons [memory].

**D5 · Pilcrow ¶ (filled bowl).** Heavy pilcrow, the medieval paragraph mark.
- Why: 03 §6 (rubrication; paragraphos).
- 16 px: low. Neutrality: bookish. Name: N.
- Similar: the «show formatting» button in every editor [memory] — reads «text editor», not «doctrine».

**D6 · Obelus ÷ / asterisk (Origen's critical signs).** 
- Why: Origen's Hexapla used them (03 §6).
- 16 px: low. Neutrality: bookish, patristic.
- Similar: **÷ reads as division; asterisk = Claude/Are.na** (02 §3). Discard-likely; include one to document.

**D7 · Manicule ☞.**
- 16 px: fails (a hand). DESIGN bans stock hands (photos) — still a hand. Discard; listed for completeness (03 §6).

## 3. Discard list (don't draw, or draw once only as a labelled control)

| Direction | Reason | Source |
|---|---|---|
| Plain cross, Latin or Greek | default church sign; DESIGN bans crosses as decoration; reads «Christian organisation» | 03 §2, §7; 04 §2.1 |
| Cross or plus inside a circle | ADL sun cross (white-supremacist use) | 03 §2 |
| Crossed keys, Luther rose, burning bush, heart-in-hand, IHS, IC XC, 3-bar cross, Agnus Dei, cross-and-flame | tradition-owned (some registered/WIPO-filed) | 03 §3 |
| Jerusalem cross, Celtic cross | contested | 03 §2 |
| Dove, flame, open Bible, praying hands, halo | church-logo clichés; slop list | 04 §2.1; DESIGN §7 |
| Good Shepherd, Lamb, icon of Christ | images of Christ: rejected by Reformed; Lamb not used by Orthodox; illegible at 16 px | 03 §4, §5 |
| Anchor | early, but reads maritime | 03 §5 |
| Magnifier (+ cross) | Logos and Biblia own it | 02 §1 |
| Asterisk / spark / six-spoke | Claude, Are.na | 02 §3 |
| Triangle Δ alone | Vercel | 02 §3 |
| § section sign | reads «law» | 03 §6 |
| Manicule | a hand; illegible | 03 §6 |
| Multi-letter wordmarks (DOC, Doctrina) | degrade at 16 px | 02 §4 |
| Gold glyph on navy | slop list | DESIGN §7 |
| One colour per tradition (five-colour mark) | slop list («one colour per tradition») and DESIGN | DESIGN §7 |
| Bare ink/accent glyph without tile | vanishes on dark tabs | §0.2, 02 §4 |

## 4. Recommended shortlist: the 8 to test first

1. **A1 Hexapla columns** — ink tile, paper bars (in-system). Strongest neutral story, safe at 16 px.
2. **D1 Θ on a tile** (Gentium) — the Sefaria pattern for Greek; open territory.
3. **B3 Θ with overline** — D1 + the scribal bar; most ownable of the letter marks.
4. **B1 Staurogram** — earliest Christian sign, ownable; test whether people read it as «P».
5. **D3 Single guillemet «** — the site's own device, Spanish-native; test against «rewind».
6. **B4 Constructed codex** — the early-Christian book form without the open-Bible cliché.
7. **C1 «D» in Newsreader on ink tile** — control for the name-dependent family.
8. **C3 «D» with overline** — the name-dependent option that still carries a scribal idea.

For each: render at 16/32/64/180, circular crop, light and dark Chrome tabs, a strip of 8 neighbours, the 1200×630 card (mark small, page title large, no text in the image per Apple's advice — or text only on the card's left half; 01 §5), and the header lockup next to the wordmark in Newsreader.

## 5. Open questions for Pedro

1. **Name-dependence**: is a «D» acceptable given the name is provisional (Haviv: without a name you need «a good reason for a symbol» — here the reason exists; 04 §1.1)?
2. **Palette**: stay in the site's tokens (ink / paper / accent / cite tiles) or allow an out-of-system colour for recognisability in a tab strip (a lighter blue `#6b7fd6` or other mid-luminance hue works bare on both themes; the site's accent sits in the most crowded colour among Christian sites)?
3. **Tile or bare**: tile is robust everywhere (Safari included); bare needs a mid-luminance colour.
4. **Is a scribal/Greek mark too scholarly** for the primary user («the serious searcher, often young and Spanish-speaking», PROJECT.md)? The research says scholarly reads as credible (04 §2.2), but recognition will be low at first.
5. **Slop-list wording**: «icons in coloured squares» — confirm a favicon tile is exempt (it is the standard favicon form, 02 §4).
6. **Staurogram**: acceptable given Hurtado's reading as a crucifixion pictogram (Reformed sensitivity, 03 §1, §4)?
7. **Link previews**: one site-wide card, or one per page (doctrine title, per language, via `app/[lang]/opengraph-image.tsx`, 01 §6)?
8. Note for the record: PROJECT.md lists six MVP traditions including **Pentecostal**; the brief to this research said five.
