# Visual references: calm, deep, and alive

_Research for the visual-direction proposal (2026-10-19). Goal: find sites that are calm and content-deep yet feel alive and premium, and name the levers that create that feeling. Builds on `analogs.md` (structure and patterns) without repeating it. Screenshots live outside the repo, in the session scratchpad `refs/` folder; filenames are listed per reference._

Tags: `[verified]` = seen on the live site or in a screenshot taken for this report; `[memory]` = not re-checked.

## Progress

- 2026-10-19: done. 11 site references plus a cross-site motion measurement (12 entries), a counter-example list, and the synthesis with three directions.
- Screenshots: 27 images (PNG, one JPG) in `/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/605747c9-b45b-424d-a17b-3e137c382055/scratchpad/refs/` (scratchpad, not the repo; copy what the proposal needs before the session ends).
- Not done: Mobbin was not used; motion was measured from CSS only (no interactions recorded); no dictionary/reference site qualified, so group 4 relies on Sefaria, Quran.com and the analogs in `analogs.md`.

---

## References

### 1. Stripe Press
- **URL:** https://press.stripe.com (book page: /the-art-of-doing-science-and-engineering)
- **Groups:** 1 typography, 3 signature, 5 motion.
- **What makes it alive and premium** `[verified]`:
  - One serif family does everything: Ivar Headline (600, plus 600 italic for the subtitle) and Ivar Text 17/25.5 at weight 500 for body. No sans at all; hierarchy comes from weight and italic, not size (the logo h1 is only 17.6px).
  - Each book page recolors the whole page from its cover: Hamming's page is mustard `#F9C350` text on a dark olive ground; the home is warm near-black `#201819` with sand `#DBC895` text. Color changes per object, but each page is strictly two colors.
  - Signature element: the home is a stack of 3D book spines (WebGL) that rotate on scroll; a vertical **tick ruler** on the left edge (one tick per book) is the navigation. It is a ruler used as an index, the same idea as Doctrina's time ruler.
  - The title gets a short 60px hairline under the author, then the body. Buttons are full-width hairline rows, not filled pills.
- **What Doctrina could take:** the left-edge tick ruler as page navigation (centuries instead of books); one family with italic as the second voice; a "page takes its tone from its object" idea, but only as a tint of the paper, never per tradition (that would be the rainbow).
- **Avoid:** dark-first theme and WebGL objects as the hero; it is a showroom for 30 books, not a study tool. Their per-page color would break "one accent".
- **Supports:** C (signature ruler, one-family serif), partly B.
- **Screenshots:** `01-stripepress-home.png`, `01-stripepress-book.png`, `01-stripepress-book-mobile.png`.

### 2. Maggie Appleton's digital garden
- **URL:** 
- **Groups:** 1 typography, 2 warmth, 3 signature.
- **What makes it alive and premium** `[verified]`:
  - Display serif with real presence: Canela Deck 56/61.6 at weight **600** for the title, and section headings in the same family at weight **100** (44px). The jump from a heavy title to hairline-thin headings is what gives the page voice; Doctrina's Brygada at one weight never gets that contrast.
  - Paper `#F6F5F1` (warm grey, not cream), ink `#353534`, muted meta `#73706D`. Two accents, each with one job: plum `#5F023E` for links and topic tags, teal for the logo leaves and the TOC dot. A short salmon rule (~160px) closes sections.
  - Signature: every note carries a **growth stage** (seedling, budding, evergreen) as a small drawn icon plus "Planted over 6 years ago / Last tended over 5 years ago". Metadata that tells you how mature the text is, set as typography.
  - Sticky collapsible "Table of Contents" on the left with a single colored dot; body ~22px with generous 44px line height.
- **What Doctrina could take:** heavy-title / thin-heading contrast within one serif family; a typographic status line (for example "Revisado contra la edición de 1566" on one line and "Actualizado en octubre de 2026" under it; no "·"-joined string, which is on the slop list) as a trust signal; a second accent reserved for exactly one role.
- **Avoid:** the hand-drawn illustrations (Doctrina has no illustrator, and they would read as playful); the tracked caps "ESSAYS / EVERGREEN" kicker (on the slop list); 2.0 line height is too loose for a study tool.
- **Supports:** B (warm paper, display weight contrast).
- **Screenshots:** `05-maggie-essay.png`, `05-maggie-body.png`, `05-maggie-mobile.png`.

### 3. Bartosz Ciechanowski, interactive essays
- **URL:** https://ciechanow.ski/mechanical-watch/
- **Groups:** 3 signature, 5 motion.
- **What makes it alive and premium** `[verified]`:
  - The page itself is almost plain: IBM Plex Sans 19.2/30.7 in `#444` on light grey, Inter 600 title at 38px. What makes it alive is that **every figure is a live, manipulable diagram** placed in the reading column: gears turn, sliders scrub, and the text says "you can move the mass".
  - Color only carries meaning: a term in the prose is set in weight 500 and in the same color as its part in the diagram (`#E75B55` for "color-coded", amber for "spring"). Text and figure share a legend without a legend box.
  - Motion is on by default but there is a **"globally pause"** link in the second paragraph. Quiet respect for the reader.
- **What Doctrina could take:** the time ruler as a manipulable figure inside the text (drag across the centuries and the list of witnesses filters), not a decoration in the header; a term in the prose that shares weight and color with its mark on the ruler (only the lapis accent, so no rainbow); a pause control for anything that moves.
- **Avoid:** the multi-color palette (fine for gears, would become one color per tradition here); plain sans body (Doctrina reads better in serif).
- **Supports:** C.
- **Screenshots:** `12-ciechanowski-watch.png`.

### 4. Linear, "Now" (blog and changelog index)
- **URL:** https://linear.app/now
- **Groups:** 3 signature (imagery), 4 components.
- **What makes it alive and premium** `[verified]`:
  - Instead of photos, most posts get an **abstract hairline drawing**: a coiled line, a field of vertical ticks thickening toward the middle, a fan of rays. They are monochrome, drawn with the same 1px stroke as the UI, so the page gets imagery without breaking calm.
  - Inter Variable at the in-between weight **510**, title 48/48 with −1.06px tracking, card titles 20/26.6. Text `#F7F8F8` on `#08090A`. Meta "Andrew Moedinger · Oct 13, 2026" in muted grey at the foot.
  - Filter row is plain words, the active one brighter, no pills. Columns are divided by vertical hairlines, not gaps.
- **What Doctrina could take:** generative line figures made from Doctrina's own data instead of pictures: the ticks of a century, the dated dots of a doctrine's witnesses, a fan of citations. Each doctrine or Father could get a small drawn "fingerprint" from its dates. In-between weights (Commissioner is variable too) for UI labels.
- **Avoid:** dark-first, the SaaS feel, and Inter itself (on the slop list as "Inter + centered bold hero"). The "·" meta string is also on the list.
- **Supports:** C (data-drawn imagery), A (weight discipline).
- **Screenshots:** `23-linear-now.png`.

### 5. Sefaria, text reader (religious)
- **URL:** https://www.sefaria.org/Genesis.1?lang=bi
- **Groups:** 1 typography, 4 components; religious reference.
- **What makes it alive and premium** `[verified]`:
  - The reader strips everything back: the chapter opens with a centered numeral "1" over a short grey rule, then the parashah name "Bereshit" in serif. Hebrew 26.8/43 (Taamey / Cardo stack) sits right-aligned above the English in Cardo / Adobe Garamond at a softer grey. Two scripts, two sizes, two values of ink: that is the whole hierarchy.
  - Verse numbers are tiny (12px Roboto weight **100**) in the right margin, so they never interrupt the text. Footnote markers are blue superscript letters (a, b), not numbers, so they cannot be confused with verse numbers.
  - Header "Genesis 1 / Revised JPS, 2023": the edition is always named under the title.
- **What Doctrina could take:** the edition line under every text title (it matches "no citation without an edition"); letters for notes and numbers for verses; the original language larger than the translation; verse numbers in the margin at a thin weight.
- **Avoid:** the promo banners stacked above the text (AI assistant, language prompt), the bullet dots left of each verse, and the dated Roboto chrome. The reader is good; the frame around it is cluttered.
- **Supports:** A.
- **Screenshots:** `22-sefaria-genesis.png`.

### 6. The Met, collection object page
- **URL:** https://www.metmuseum.org/art/collection/search/436532
- **Groups:** 1 typography, 4 components.
- **What makes it alive and premium** `[verified]`:
  - A condensed display serif (Austin, weight 500, 39/46.8, −0.39px tracking) for the object title, against plain Inter for everything else. One expressive face used once per page is enough to give the page a voice.
  - Left column: title, then "Vincent van Gogh Dutch / 1887" (name underlined as a link, nationality muted, date on its own line), then location, then a 16/25.6 paragraph in grey `#6D6D6D`. Right: the object on a flat light grey field, with "Public Domain" and actions in a hairline row under it.
  - The breadcrumb is small, slash-separated and complete.
- **What Doctrina could take:** a Father or council page laid out like an object page: name in a display serif, dates on their own line, one paragraph, and the "object" on the right is the time ruler or the work list, with the licence/edition in a quiet row under it.
- **Avoid:** the red ticket button and institutional chrome; grey body text that drops contrast.
- **Supports:** A, B.
- **Screenshots:** `15-met-object.png`.

### 7. Craig Mod, essays
- **URL:** https://craigmod.com/essays/fast_software/
- **Groups:** 1 typography.
- **What makes it alive and premium** `[verified]`:
  - FF Meta Serif title at 50/50 weight 400 with −1px tracking, italic standfirst right under it, body 20/30 in `#333` on white. Hyphenation is on, so the 745px column has an even right edge without justification.
  - The first paragraph opens with a **solid black bar** in place of a drop cap: a block initial that is graphic rather than ornamental. A 150px grey rule separates sections.
- **What Doctrina could take:** a non-ornamental section opener (a short lapis bar, or the century number in the margin), CSS hyphenation in Spanish (`hyphens: auto` with `lang="es"`), tight title tracking at large sizes.
- **Avoid:** the grey ALL-CAPS tracked nav (slop list).
- **Supports:** A.
- **Screenshots:** `11-craigmod-essay.png`.

### 8. Asterisk magazine, article page
- **URL:** https://asteriskmag.com/issues/15/beware-the-permanent-periphery
- **Groups:** 1 typography, 2 color, 3 signature.
- **What makes it alive and premium** `[verified]`:
  - The headline is the event: Atlas Grotesk **900** at 77.8/77.8 with −2.3px tracking, **in the accent** `#2D90CF`, and the author's name follows at the same size in Noe Display italic. The standfirst is also in the accent, in Noe Text at ~30px. Then the body drops to black Noe Text ~18px. One accent, used big once per page, then never in the body except for footnote numerals (Atlas 700, 10.8px, accent).
  - Paper `#FAF8F0` with pure black body text. The accent changes per issue (blue here, a pink on the issue 16 cover), not per article type.
  - Signature: a **section ruler in the left margin**: short horizontal ticks at x=0–46px, one per section, spaced by the section's length, with a solid accent block showing where you are. It is a minimap of the article built from hairlines.
  - Illustrations are commissioned duotone-ish images in the same blue family with one dark red mark.
- **What Doctrina could take:** the margin ruler almost literally, with the ticks being the page's sections (or the centuries a doctrine page covers) and the block being the reader's position; accent-colored titles at large size on the doctrine page only; footnote numerals in the accent, which also fixes the "citations hard to see" problem.
- **Avoid:** a heavy grotesk 900 headline would fight Doctrina's serif voice (use a serif at large size instead); the light-blue newsletter box.
- **Supports:** C (margin ruler, big accent title), B (paper and black ink).
- **Screenshots:** `20-asterisk-article.png`, `20-asterisk-body.png` (margin ruler visible top-left), `20-asterisk-mobile.png`, `09-asterisk-home.png` (issue cover).

### 9. Works in Progress, article page (revisited for visual levers only)
- **URL:** https://worksinprogress.co/issue/the-seven-vices-of-highly-effective-victorians/
- **Groups:** 1 typography, 2 color.
- **What makes it alive and premium** `[verified]`:
  - Paper `#FFF7F4` (a faint blush, not cream) with black ink. Editor-Bold 48/62 title, Editor-Regular 32/40 dek, serif body ~19/27, and **every UI label in GT America Mono Light** 12–16px. The serif/mono split makes the chrome feel like an instrument and the text like a book.
  - The hero is a **public-domain engraving recolored to one ink** (teal), full width. Old material, modern treatment: it reads as editorial, not as heritage kitsch.
  - Flat 1px black boxes, 0 radius, a yellow `Sign up` button as the only fill.
- **What Doctrina could take:** monochrome-recolored public-domain images (a manuscript page of Ignatius, a council fresco) printed in lapis on paper, used once per page at most; a single-ink treatment avoids the "stock cathedral" problem because it is clearly a print, not a photo.
- **Avoid:** mono for UI labels in Doctrina (the slop list bans monospace locators); the blush paper is close to cream.
- **Supports:** B.
- **Screenshots:** `19-wip-article.jpg`, `19-wip-body.png`.

### 10. Quran.com, verse-by-verse reader (religious)
- **URL:** https://quran.com/1
- **Groups:** 4 components; religious reference.
- **What makes it alive and premium** `[verified]`:
  - Word-by-word: every Arabic word is a `role="button"` that highlights on hover and shows a **one-line dark tooltip** with the gloss ("the Most Gracious ›"). The chevron says "there is more" without opening a panel. This is the right size for a word preview: one line, the meaning first.
  - Each verse ends in a quiet row of text actions (Tafsirs, Lessons, Reflections, Answers, Hadith, Related Content) in muted grey with outline icons, separated by short vertical hairlines. Depth is one click away and visible as words, not badges.
  - Figtree UI in deep navy `#00163D` instead of black.
- **What Doctrina could take:** the one-line word tooltip with a chevron (for Greek words on hover; click opens the study panel); a per-verse row of named connections ("Padres (12)", "Objeciones", "Otras traducciones").
- **Avoid:** the boxed surah header with pill buttons, the announcement bar, the subscribe pop-up: the frame is generic app UI. Not a visual-direction reference, only a component one.
- **Supports:** A.
- **Screenshots:** `06-quran-wordhover.png`, `06-quran-surah.png`.

### 11. Rauno Freiberg, "Craft"
- **URL:** https://rauno.me/craft
- **Groups:** 3 signature (navigation), 5 motion.
- **What makes it alive and premium** `[verified]` for layout and measured CSS; the interactions themselves were not exercised.
  - The page's top navigation is a **row of tiny tick and box shapes** (each a section), with the active one filled yellow. Navigation drawn as a ruler, again.
  - Measured motion: 79 elements fade opacity at **0.2s ease**, colors at 0.15s; nothing longer than 0.2s, no animation on load.
  - Small demos (each a little orange-dot diagram) instead of screenshots.
- **What Doctrina could take:** short, uniform durations (150–200ms) for every hover and fade; nav or index as a row of marks.
- **Avoid:** the grey rounded cards (slop list), the grid-of-projects layout.
- **Supports:** C (marks as navigation), A (motion discipline).
- **Screenshots:** `25-rauno-craft.png`.

### 12. Motion measured across the references
`[verified]` by reading computed `transition` and `animation` values on load (script `motion.mjs`). Most frequent declarations per site:

| Site | Hover / color | Movement | On-load animation | `prefers-reduced-motion` rule |
|---|---|---|---|---|
| Linear "Now" | color 0.1s ease | transform+opacity 0.1s `cubic-bezier(.25,.46,.45,.94)`; borders/shadows 0.16s | none | yes |
| Stripe Docs | color 0.1s `cubic-bezier(0,0,.4,1)` | box-shadow 0.2s; opacity 0.2s ease-out | none | not found |
| Rauno | background/color 0.15s | opacity 0.2s ease | none | not found |
| Asterisk | color 0.2s | all 0.2–0.25s ease-in-out (the margin ruler) | none | not found |
| Maggie Appleton | color 0.18s | transform 0.24s `cubic-bezier(.23,1,.32,1)`; one springy `cubic-bezier(.34,1.36,.64,1)` on buttons | `dropCapInk` 0.76s (the drop cap "inks in"), `mv-cascade-in` 0.26s | yes |
| Stripe Press | background 0.1s | transform 0.3–0.4s ease(-out) on book spines | WebGL scroll | not found |

Reading: the premium-feeling sites keep **hover and color at 100–200ms** and spend longer durations (0.25–0.4s) only on objects that move in space. The only on-load animation is a single typographic one (Maggie's drop cap inking in). That is the quiet way to make a page feel alive: one small first-paint gesture, everything else responsive.

---

## Counter-examples (seen, rejected for this brief)

All `[verified]` from screenshots taken for this report.
- **The Pudding** (`08-pudding-home.png`, `08-pudding-story.png`, `08-pudding-story-2.png`): very alive, but by being loud: rainbow tiles, hand-lettered logo, ornamental borders, giant gold quote marks. Proof that "alive" via illustration and color destroys calm.
- **BibleProject** (`17-bibleproject-home.png`): the best-crafted religious site found, but it is an animation studio's marketing home: full-bleed illustrated hero, condensed hand-drawn title, pill badge. Fine for video, wrong register for study.
- **ESV.org** (`18-esv-john6.png`): the reader has a classic two-line drop numeral for the chapter and italic section heads, which works; the rest (three toolbars, colored bookmarks, a sign-up modal on arrival) is cluttered.
- **Lapham's Quarterly** (`03-lapham-home.png`) and **Public Domain Review** (`02-pdr-home.png`): the content is the dream (dated voices from history, curated public-domain material) but both use tracked caps, social-icon rows, centered logo headers and boxed sidebars: the "heritage magazine" look Doctrina must avoid.
- **Klim, Letterform Archive, Quran.org, Rijksmuseum collection**: premium but loud (full-bleed color fields, image heroes, ALL-CAPS "COLLECTION"); screenshots discarded.
- **Religious study sites in general:** apart from Sefaria's reader and Quran.com's word tooltips, none found that is both calm and well designed. Search for award-winning Bible study sites returned only marketing sites (Web Marketing Association awards to Thomas Nelson, Lutheran Bible Translators) `[search result, not visited]`.

---

## Synthesis

### What actually makes these pages feel alive (and what v2 lacks)

v2 is disciplined but **flat in three ways**: one serif at one weight, the accent used only at text size, and the signature ruler confined to small inline strips. The references that feel alive without noise all add *contrast* (in size, weight or ink) at one or two points per page, and keep everything else as calm as v2 already is.

1. **One loud typographic moment per page, then silence.** Asterisk sets the title at 78px in the accent and drops to black 18px body; Maggie Appleton sets a 600-weight title over 100-weight headings; The Met uses its display serif once. v2's titles are big but at the same weight and ink as the body, so nothing "happens". Refs: 2, 6, 8.
2. **The ruler as navigation, not as a figure.** Three unrelated sites draw their navigation as a row of marks: Stripe Press (left-edge ticks, one per book), Asterisk (margin ticks, one per section, with a position block), Rauno (tick shapes in the header). Doctrina already owns the ruler; making it the page's minimap (centuries or sections in the margin, reader position as a lapis block) turns the signature into something used on every scroll. Refs: 1, 8, 11.
3. **The accent at scale, once.** Asterisk's accent appears big (title, standfirst) and then tiny (footnote numerals) and nowhere in between. Doctrina's lapis today appears only at link size, which is why the palette reads "sad". Refs: 8, 1.
4. **Imagery drawn from the content's own data.** Linear uses 1px generative line drawings instead of photos; Ciechanowski's figures are the explanation itself. For Doctrina: per-doctrine "fingerprints" drawn from the dates of its witnesses, the century ticks of a Father's life, a fan of citations. No stock images, no crosses, and every picture is true. Refs: 3, 4.
5. **Metadata that signals care.** Sefaria names the edition under every title; Maggie Appleton prints "Planted / Last tended"; The Met gives dates their own line. A quiet status line (edition on one line, revision date on the next, never "·"-joined) is both a trust signal and a texture that makes a page feel looked-after. Refs: 2, 5, 6.
6. **Paper and ink with a little temperature.** All the warm references avoid cream: `#F6F5F1` (Maggie, warm grey), `#FAF8F0` (Asterisk, near-white), `#FFF7F4` (WIP, faint blush), with near-black ink (`#353534`) or pure black. v2's `#FAFAF8` with grey body text is the coldest of the set. Refs: 2, 8, 9.
7. **Fast, uniform motion plus one first-paint gesture.** Hover and color at 100–200ms everywhere (Linear 0.1s, Rauno 0.15–0.2s, Stripe Docs 0.1–0.2s); longer only for things moving in space. The one on-load animation worth copying is typographic (Maggie's drop cap inking in over 0.76s). Ref: 12.
8. **Previews sized to their content.** Quran.com's one-line word tooltip with a chevron, Sefaria's letter footnotes: the smaller the preview, the calmer the page. Refs: 5, 10.

### Three directions for the proposal page

All three keep: hairlines, no cards, one accent, serif for reading, Gentium Book Plus for Greek, light/dark. Fonts verified to exist on Google Fonts (HTTP 200 from `fonts.googleapis.com/css2`).

**A. Current, polished.** Brygada 1918 stays for reading (19/30) but uses its weight range: titles 600, section headings 400 italic, so headings stop looking like body text. Commissioner at variable in-between weights (UI 450, active 560) for labels. Paper `#FAFAF8`, ink `#1B1D21` (darker than v2), muted `#5F636B` (passes 4.5:1, fixes the v2 `--ink-3` issue), hairline `#E3E3DE`. Lapis `#2C4A9E` for links, active states and citation numerals (set at weight 600 so they are findable); dark theme `#9EB3EE` on `#16181C`. New: the section minimap in the left margin (ticks per section, lapis block for position, 200ms) and an edition/status line under every text title. Motion: 150ms color, 200ms opacity, nothing on load. It is the safe choice: it answers "basic" with weight and detail, not with new ideas.

**B. Warmer, editorial.** Newsreader (variable, optical sizes) replaces Brygada: display optical size at 64–72px weight 300 for doctrine titles, with the question in italic at the same family; body 19/30 at text optical size. Hanken Grotesk for UI. Paper `#F6F5F1` (warm grey, not cream), ink `#22201C`, muted `#6B675F`, hairline `#E2DED6`. Lapis deepened to `#24418F` so it holds on warm paper; dark theme `#A9B9EC` on `#191816`. One page-level image per doctrine or Father: a public-domain print (manuscript page, council fresco, engraving) recolored to a single lapis ink, WIP-style, never a photo. The first paragraph of each tradition's statement opens with a two-line drop initial that inks in once (≈0.6s, disabled with reduced motion). Risk: images must be sourced and licensed per page, and a print-heavy page can slide toward "heritage" if overused; at most one per page.

**C. More character, strong signature.** The time ruler becomes the site's identity and navigation. Brygada 1918 for body (keeps the v2 voice) and Brygada 700 at 72–88px **in lapis** for doctrine titles (Asterisk move), with the tradition name in italic at the same size. Commissioner for UI, tabular lining numerals for every date. Paper `#FAF9F6`, ink `#121417`, muted `#5E6168`; lapis `#2C4A9E` used big (titles, the ruler's position block) and tiny (citation numerals) and nowhere in between. Signature pieces: (1) a vertical century ruler in the left margin of doctrine and tradition pages where each tick is a century, dots are the witnesses cited on that page, and the lapis block tracks the passage being read; (2) a generated line "fingerprint" per doctrine, drawn from the dates of its witnesses, used as the doctrine's image in lists and in the share card; (3) the home's hero is a manipulable ruler (drag the window across 2,000 years, the list of witnesses below filters), Ciechanowski-style, with a pause/reduced-motion fallback. Risk: the most build cost (the ruler must work on mobile as a top strip, and the minimap must stay legible in Spanish and English), and the big lapis title must be kept to the doctrine page or it becomes a brand stunt.
