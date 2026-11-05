# 07 · Quote, guillemet, chevron and bracket marks in brands

Fetched and rasterised 2026-11-04 with Playwright (Chromium), same method as round 1 (02): the page's `<link rel=icon>` set plus `/favicon.ico`, the tab icon picked as SVG first, else the size nearest 32; drawn at 16 and 32 px on Chrome's light (`#dee1e6`) and dark (`#35363a`) tab colours, each scaled ×3 / ×1.5 for viewing, next to the real 16 px pixel size. **Every description below is what I saw on the sheet** [verified, visual]; nothing about what a brand «means» is claimed unless sourced.

- Sheets: `refs/_sheets/brands-<family>.png` (82 sites, 74 with a usable tab icon), `refs/_sheets/resemblance-d3.png` (D3 and D4 from round 1 next to the closest brands and 24 UI icons), `refs/_sheets/containers-*.png` (used in 08).
- Files: `refs/brands/<slug>/` (icon files + `meta.json` with URLs and fetch time), `refs/ui-icons/` (Lucide 0.460.0, Material Symbols 0.23.0 rounded 700, Phosphor 2.1.1; all open-licensed icon sets, from unpkg/jsdelivr).
- No usable icon captured (blocked, timeout or none declared): Cairn, elDiario.es (touch icon only), Glasp, Lapham's Quarterly, QuillBot, Reverso, Rewind/Limitless, Siruela.
- **Third-party marks, kept for internal study only** (see README).

## 1. What a heavy « reads as, by context

| Context | What chevron/quote signs mean there | Evidence (rasterised this run) |
|---|---|---|
| **UI icon sets** (the vocabulary every web user has learned) | `«` = «collapse sidebar», «first / previous», «back»; `»` = «expand», «next», «skip»; `<` `>` = back / next / disclosure; `< >` = code; `"` = quote / testimonial | Lucide `chevrons-left`, `chevrons-right`, `chevron-left/right`, `code`, `quote`, `message-square-quote`; Material `keyboard_double_arrow_left/right`, `chevron_left`, `arrow_back_ios`, `first_page`, `code`, `format_quote`; Phosphor `caret-double-left`, `code`, `quotes` |
| **Media players** | double triangles = rewind / fast-forward; a single heavy chevron = Plex | Lucide/Material/Phosphor `rewind`, `fast_rewind`, `fast-forward`; Plex: one heavy **yellow `>` on a black rounded tile** |
| **Code / dev tools** | angle brackets and `>` = markup, prompt, code | htmx `</>` (white, blue slash), freeCodeCamp `( 🔥 )` on navy, Brackets `[ ]` on blue tile, Haskell `>λ=` in purple, Codecademy `C_`, Hyper `⚡_` (prompt), VS Code ribbon (reads as a `<`) |
| **Corporate «forward» chevrons** | a bare `>` or `<` as the whole brand | Accenture: bare purple `>` (gradient); Xing: teal `>` + green `<`; Citroën: double chevron (an illegible grey blob at 16 px) |
| **Speech / talk** | a curly quote or bubble = conversation, comments | Vodafone: white comma-shaped speech mark in a red circle; Quotefancy: white `"` (66-style) on a blue circle; The Conversation: red speech-bubble outline; Hypothesis: `h.` in a red speech-bubble tile; Disqus: `D` bubble |
| **Quote and highlight products** | almost none use a quote mark | Readwise Reader: serif `R` on white; Goodreads: `g` on beige; Kindle: Amazon smile on orange; Quotebacks: arrow-in-a-box; Wikiquote: dot with radiating arcs (reads «audio/broadcast»); BrainyQuote: coloured pinwheel; Quote Investigator: magnifier; Proverbia: `P` on maroon; citas.in: tree (folder `refs/brands/quotes-site-in/`, renamed for the repo's English-only file-name check); The Marginalian: black and white leaf/page halves on yellow. **Only Quotefancy (of 20) uses a quotation mark.** |
| **Spanish and French publishers, press, language bodies** | **none use « »** | Le Monde blackletter `M` on black; El País serif `E`; La Nación `LN` on blue; Letras Libres `LL`; Le Figaro winged `F`; Libération a red horizontal lozenge (a `<>` silhouette at 16 px); Courrier international globe; Seuil `S` in a circle; Gallimard `nrf`; Actes Sud `AS` monogram; Anagrama a triangle; Acantilado a plain red square; Mediapart drawing; OpenEdition flower; AOC wordmark; RAE crest; Fundéu `F` **with an overline** on teal; Linguee script `L`; DeepL a «share»-like node `>` in a hexagon; WordReference `wR` |
| **Editorial publishers** | chevron as letter | Verso: a **red `V`** (a downward chevron); The Verge: purple `V`-like slash pair |
| **Type and punctuation sites** (from `containers`, 08) | punctuation as the whole mark | Typography.com (Hoefler&Co): bare green ampersand `&`; Typewolf: `&` in a mauve circle; **Shady Characters** (Keith Houston's blog on punctuation): a pilcrow `¶` whose bowl is a red rounded block |

Other refs fetched: Kodi (blue diamonds), Pocket Casts (red rings), Infuse (`FC`), Prime Video (play triangle in circle), Chevron (the oil company's striped shield; at 16 px the chevrons are not legible), Off-White (crossed arrows `X`), Codepen cube, MDN `M`, Svelte `S`, Astro `A`, W3Schools `w³`, Coder `C■`, Warp, PowerShell (serves the Microsoft four squares), Markdown Guide `M↓`, iA Writer `iA`, Quartz `QZ`, Lit Hub `L`, Paris Review bird, Discourse bubble, Comillas University crest (Jesuit university named after the town of Comillas; naming coincidence only).

**Literature:** Flavorwire's «Logo Design, Punctuated» (Flavorwire Staff, 2009-12-09, https://www.flavorwire.com/55351/logo-design-punctuated [verified]) lists punctuation logos: Accenture's «greater than symbol … floating about the letters», Aol., EAT., Vitra, and **Godpress**, whose «quotation marks as the letters G and D symbolize the fact that prayer is simply talking to God» — a religious use of quotes as *speech*, not as *citation*. Off-White's quotation-mark motif is reported as lacking federal trademark protection (nss magazine via search [snippet]). Two searches for brands whose logo is a guillemet found none [snippet, negative].

## 2. Findings

1. **At 16 px, D3 is visually the same object as a UI icon in a tile.** On `resemblance-d3.png` the round-1 D3 tile and Material `keyboard_double_arrow_left` / Lucide `chevrons-left` reduce to the same two short strokes; the tile only adds the «app icon» frame. The serif character of Newsreader's guillemet does not survive at 16 px because the glyph has no curves or stress to begin with (06 §4) [verified, visual + computed]. **H2 holds** for the reading «back / collapse / rewind / previous».
2. **A single heavy `>` on a dark rounded tile is already Plex.** Any diple drawn as a plain chevron on an ink tile sits next to Plex (yellow on black) in silhouette; a bare `>` sits next to Accenture [verified, visual]. → H3's diple is only safe if it keeps the manuscript features (asymmetry, hook, dots) and does not sit alone in a dark rounded tile.
3. **`« »` / `< >` pairs read as code.** D4 at 16 px is Material `code` / Lucide `code` in a tile; Libération's lozenge shows that a pair touching at the tips becomes a diamond [verified, visual].
4. **Curly “quote” marks read as speech or testimonials,** never as «Scripture/source quoted»: Vodafone, Quotefancy, The Conversation, Hypothesis, Godpress (Flavorwire) [verified]. The site's own slop list bans «giant decorative quotes» (DESIGN §7); I found no practitioner article calling the device a cliché (search returned only templates and stock icons that use it, which shows ubiquity, not judgement) [snippet].
5. **Open territory is real.** No Spanish or French publisher, newspaper or language body in the sample (19 + 6) uses « » as its mark; among 20 quotation/highlight products only one uses a quote sign [verified, visual]. So the *idea* is unclaimed; the *drawing* (straight double chevron) is not — it belongs to UI.
6. **Punctuation brands that work** do it with a glyph that has **its own drawn character** (Hoefler&Co's ampersand; Shady Characters' pilcrow built from a block; Fundéu's `F` + overline), not with a geometric arrow [verified, visual; inference about «why»].

## 3. Resemblance map (for D3 and its candidate variants)

Reading at 16 px in a tab strip [verified, visual for the brands/icons named; reading is my inference].

| Candidate | Most likely mistaken for | Named look-alikes | Risk |
|---|---|---|---|
| D3: heavy straight « on ink rounded tile | «collapse / back / first page / rewind» UI control | Material `keyboard_double_arrow_left`, Lucide `chevrons-left`, Phosphor `caret-double-left`; media rewind | **high** |
| « on paper tile or bare | same as above, minus «app» | same | high |
| » (closing / German opening) | «next / expand / skip»; breadcrumb separator | Lucide `chevrons-right`, Material `keyboard_double_arrow_right` | high |
| single ‹ | iOS «back» | Material `arrow_back_ios`, Lucide `chevron-left` | **very high** |
| plain geometric `>` | «next», disclosure, terminal prompt; Plex; Accenture | Plex (yellow on black tile), Accenture (purple bare), PowerShell/Hyper prompts, Haskell `>λ` | **very high** |
| `« »` / `< >` pair | code | htmx `</>`, Material/Lucide/Phosphor `code`, Brackets | high |
| `«»` touching at the tips | lozenge, «diamond» | Libération | medium |
| curly `“ ”` | testimonial, speech, comments | Quotefancy, Vodafone, Material `format_quote`, The Conversation | high (and DESIGN §7 «giant decorative quotes») |
| `>` rotated / chevron down | `V` | Verso, The Verge | medium |
| **asymmetric manuscript diple** (short shallow upper arm, long steep heavy lower arm, entry hook) | a numeral «7», a check mark ✓ rotated, a «z» | none of the 153 rasterised refs; generic «7» marks [inference] | **low–medium** (new risk: «7») |
| **dotted diple ⸖** (> with two dots) | «greater-than with dots»; a face/emoticon `>:`; math | none found | low (but odd) |
| « with a baseline rule under it | «first page / skip to start» (`|«`) if the rule is vertical; with a horizontal rule: none found | Material `first_page` (vertical bar) | medium if vertical, low if horizontal |
| « drawn with pen stress (Gentium-like, curved, wedge) | a pair of leaves or commas; rain drops | none found | low–medium |

## 4. What this means for D3 [inference]

- The concept (the site's own quotation sign, Spanish-native, ancestor = Scripture-marking diple) is unclaimed and good; **the construction is the problem**: straight constant-width chevrons are UI arrows, and the tile turns them into an «app button».
- To escape the UI reading, the sign must look *written or typeset*, not *iconographic*: pen stress or wedge, asymmetry, an entry hook, dots, an x-height relation to a baseline/line of text, or a margin position beside «lines».
- Avoid: single `>` in a dark rounded tile (Plex), a bare purple/coloured `>` (Accenture), any symmetric `<` `>` pair (code), curly quotes (testimonial).

## Could not confirm

- Accenture's or Plex's own statements about what their chevrons mean (Wikipedia's Accenture article has no logo text; plex.tv/about returned 403).
- Whether the Rewind app (now Limitless) used a « mark (site timed out).
- Brands using « » outside the sampled sites (no trademark search done).
