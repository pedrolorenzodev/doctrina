# «Ver en mapa» for the history index pages: references

Researched 2026-10-27 (ninth session, queue item 1), **redone the same night** after Pedro's request: use Playwright to actually see the references, find a way into Pinterest, and look mainly for **monochrome, dark, modern, clean** references, not necessarily maps.

Pedro's idea (DECISIONS «eighth session, close»): a «Ver en mapa» button on the history index pages that turns the screen into a clean, modern, interactive map: distinguishable territories, each Father in the territory of his main or longest work, a year filter that decides which Fathers show. Nothing is built before Pedro's verdict; the map will be a proposal Artifact first.

## How it was seen

- **Pinterest, as a guest, through headless Playwright**: the search page loads its pins behind a login dialog; hiding the dialog and scrolling returns **25 pins per search**. As a guest Pinterest gives **only the image**: no title, no source link, no pin URL (the pin ids are opaque tokens). So the pins below are identified by image file (`i.pinimg.com/736x/…`, full list in `history-map-references/pinterest-pins.json`) and by their place in the contact sheets `pinterest-sheet-1…9.jpg` (pin «3.12» = sheet 3, pin 12). **No pin URLs, and nothing about the authors**; do not publish or reuse any of these images (rights are the authors').
- Real pin links and Pedro's own boards came afterwards, through a login Pedro did himself (see 1b and section 4).
- **Live sites** screenshotted with Playwright at 1440×860 (`history-map-references/live-sites.jpg`); TimeMap sat behind a Cloudflare check, Seshat answered 403, Peripleo returned Bad Gateway, HistoryMaps stayed blank: those four were not seen.

## 1. Pinterest, monochrome and dark (what Pedro asked for)

Nine searches, 225 images (many pins repeat across searches). Grouped by the approach each shows; the numbers are sheet.pin.

**A · Black cartography: white hairlines on black, no colour.** Street and terrain maps drawn only as thin light lines: 1.13 and 3.23 (a city's roads, white on black), 1.3 and 3.8 (a topographic map with spaced-out place names), 1.6 and 3.13 (transit-style linework with small labels), 1.25 (grey dark map with one label). **Useful:** the whole map is one ink on one background, so any marks we add (a Father, a council) read at once; this fits the repo's «one accent» direction. **Cost:** road and street maps are modern; for AD 100–750 the lines would have to be coasts, rivers and provinces, not streets.

**B · Territories told apart by grey tone, not hue.** 5.11 and 5.25 (an Asia map, countries in different dark greys with white labels, one hatched), 1.4 (grey terrain divided in rectangles with a name). **Useful:** exactly «territories that can be told apart» without colour; hatching and tone steps give 4–5 distinguishable regions. **Cost:** with many provinces the tones collide; would need borders and labels doing part of the work. This is the answer I would test first.

**C · A map with a single quiet control.** 1.5 (black map with one thin scrubber bar and play controls along the top edge), 1.1 and 3.15 (a dark map, one white route, one large monospaced number as the readout), 8.18, 8.22 and 1.21 (dark map, one thin orange route), 8.23 (a compass strip as a ruler). **Useful:** the **year filter as one thin line plus one big readout** instead of a toolbar; ties to the living time ruler we already built. **Cost:** the orange accent is outside our palette; the readout in monospace is not our type system.

**D · Photographs or labels laid over a base map.** 1.11, 3.12, 5.6 («Mapping»: a grid over the map with photo tiles filling cells), 1.12 and 3.21 («Places photographed»: a dark map of Japan with leader lines and names in a column). **Useful:** **leader lines from a column of names to places on the map** is a direct form for «each Father at the place of his work»; the grid is a way to group dense places. **Cost:** the photo tiles are not for us (no images of the Fathers); the column of names must scale to 56 Fathers.

**E · Dot-matrix maps.** 1.15 and 3.7 (a world map made of dots), 3.9 (the United States in dots sized by value). **Useful:** a calm, abstract base that does not pretend to be a surveyed map, which suits a world we only know approximately (places, not borders). **Cost:** low resolution; Mediterranean cities would blur together.

**F · Antiquarian charts, kept monochrome.** 5.4, 5.14, 5.15 and 5.19 (star charts and engraved atlases in white on black). **Useful:** shows that old cartography works in white-on-black, with fine engraved lines. **Cost:** ornate; risks the decoration the design principles discard; 5.2, 5.3, 5.5, 5.7, 5.9, 5.16, 5.21 and 5.24 (photographs of props: compass, globe, parchment) are **discarded** as skeuomorphic.

**G · Dark timelines.** 2.12 (three large «01 02 03» with hairlines), 2.15 and 2.24 (a thin tick scale with a single marker), 2.16 (a wave-shaped line with a dot per milestone), 8.13 and 8.16 (a vertical dotted line with entries alternating left and right, on black), 7.9 (a dark museum page with years 1833…1872 set large in a quiet column). **Useful:** large years in a light weight, one hairline, one marker; consistent with the Stripe Press-style ruler we already chose. **Cost:** 2.16 and 8.13 are decorative if used as the map's filter.

**H · Network and constellation graphs.** 6.1 and 6.4 (nodes and spokes on black), 6.18, 6.7 and 6.21 (point-and-line meshes), 6.16 and 6.17 (concentric and orbital circles). **Useful:** if a «who cites whom» or «who taught whom» view is ever wanted; for now an **aside**, not the map. **Cost:** decorative on its own; many look like AI-generated backgrounds.

**I · Dark editorial pages (not maps; the tone Pedro may like).** 7.9 and 7.15 (dark museum pages, serif, one image and one date), 7.3 and 7.12 (dark, light serif, thin rules), 9.24 («Observing culture in the night sky»: grey, a serif headline, a monospaced index), 4.2 and 4.4 (black, large light type, almost nothing else), 9.10 and 9.18 (greys named «Onyx», «Graphite», «Platinum», «Jet Black», «Ash»: an achromatic ramp). **Useful:** tone, spacing and weight of type for the map's panel and labels; the grey ramp is a ready test for territory tones in B.

**Discarded across all nine searches:** neon or blue glow (6.2, 6.11, 6.15), glassmorphism and gradient blobs (9.17, 4.6, 4.18, 4.23), isometric 3D terrain and sci-fi HUD (1.9, 1.10, 1.17, 3.14, 3.24, 8.12), green or orange-accent dashboards (6.8, 6.19, 6.24, 9.25), colourful calendars and tracker apps (2.5–2.7, 2.14, 8.6). They are the AI-slop patterns in `docs/DECISIONS.md` «Design principles» or have no use here.

### 1b. Second pass, logged in with Pedro's session: pins with real links

After Pedro logged in (a dedicated browser profile; read-only, five searches at human pace, normal window, no automation banner), the same searches return the pin's source. 160 pins from Dribbble, Behance, are.na, Savee, Cosmos and CodePen were put in four numbered sheets (`pinterest-linked-sheet-0…3.jpg`; every number, pin and source is in `pinterest-linked-pins.json`). Sources are the authors' pages; the images stay theirs. The ones that answer Pedro's brief best (monochrome or near, dark, clean):

| Sheet n | What it shows | Link | Why it matters here |
|---|---|---|---|
| 93 | «DISTANTE: Atlas Obscuro (Dark Atlas)»: a dark atlas of globe and lines in white on black | [Behance](https://www.behance.net/gallery/97830819/DISTANTE-ATLAS-OBSCURO-(DARK-ATLAS)) | The one that is literally a dark atlas, monochrome |
| 79 | «NOCTRA — Observatory Website Design, Editorial Dark UI»: dark grey cards with fine line illustrations and a serif headline | [Behance](https://www.behance.net/gallery/248063485/NOCTRA-Observatory-Website-Design-UXUI) | Tone of the panel and the index around the map: editorial, dark, quiet; the same family as the museum pages in 7.x |
| 121 | «Realtime interactive timeline»: a tick ruler on black with a round portrait and a year at each end | [Behance](https://www.behance.net/gallery/53809825/Realtime-interactive-timeline/modules/317462439) | A **person marked on a year ruler**: the Father's mark on the year filter |
| 70 | «NYC 01»: a black map with a large monospaced readout and a small data block | [Behance collection](https://www.behance.net/collection/168209559/UIUX) (a collection page, not the project) | Black map plus one big readout (group C) |
| 99 | «SinnerSchrader Creatives, Interactive Map»: a dark map, one dotted route, a white dot and a degree readout | [Dribbble](https://dribbble.com/shots/3006227-SinnerSchrader-Creatives-Interactive-Map) | One mark and one readout on black |
| 78 | «Map Interface»: a dark map, a thin line between two points, a small label | [Dribbble](https://dribbble.com/shots/2606409-Map-Interface) | Quiet label design; a warm accent on the line (outside our palette) |
| 115 | «Essence Timeline Module»: a dark page, a timeline module with a photograph | [Dribbble](https://dribbble.com/shots/7174368-Essence-Timeline-Module) | Timeline as a module of a page |
| 107, 98 | «Timeline» (two shots): thin bars and years on black; a range scrubber with a handle | [Dribbble 562262](https://dribbble.com/shots/562262-Timeline), [Dribbble 10148227](https://dribbble.com/shots/10148227-Timeline) | Year range filter as bars or a range handle (107 uses colour bars, discard the colours) |
| 15 | «Timeline»: a vertical hairline with years 2011–2015 in light type on dark | [CodePen](https://codepen.io/z-/pen/bwPBjY) | Minimal vertical list form, code available (licence unchecked) |
| 81, 77, 83, 66 | Tatiana Plakhova's «Selenographica»; «GLASS»; a visual breakdown of a film; «Map of Interactive Ideas»: white-on-black engraved or radial graphics | [Behance 30925455](https://www.behance.net/gallery/30925455/SELENOGRAPHICA), [75896217](https://www.behance.net/gallery/75896217/GLASS), [21383487](https://www.behance.net/gallery/21383487/A-Visual-Breakdown-of-Only-God-Forgives), [58219123](https://www.behance.net/gallery/58219123/MAP-OF-INTERACTIVE-IDEAS) | Fine-line monochrome graphics; radial network forms for the «who is connected» aside (group H); decorative on their own |
| 68, 76, 103 | A lined world map with a crosshair, a circular astronomical chart, a dark timeline with sepia photographs (image-only sources on Behance's CDN, no project page) | [68](https://mir-s3-cdn-cf.behance.net/project_modules/1400/03eb1d66184221.5b0da5081cf9c.png), [76](https://mir-s3-cdn-cf.behance.net/project_modules/disp/34251c11003435.56030df8868c6.jpg), [103](https://mir-s3-cdn-cf.behance.net/project_modules/1400/96c5e162601609.5a96433b5193c.png) | Antiquarian-linework and dark-timeline forms (groups F and G); no author page |

The first set (sheet.pin numbers above) mostly has no link after the second pass: Pinterest returns a different feed when logged in, and only 10 of 33 picks could be matched by image file; of those, a few link to stock sites or to a Reddit image (1.13, 1.15, 8.22, 8.23, 2.15 Instagram) and several are user uploads without a source. They stay valid as visual evidence only.

**Pedro's own boards:** the board «DOCTRINA» is about **typography**: font pairings, serif and sans-serif specimens (read 2026-10-27, 120 pins: Behance, Medium, Instagram, Payhip, studio sites). It holds no map or timeline references, so it informs type for the map's panel (light serifs, small caps-free labels), not the map's form. The other boards visible are «web-style?», «Guardado rápido», «HeyBro - Landing» and «HeyBro - Dashboard»; not read.

## 2. Live sites, now seen (replaces the first round's descriptions)

Screenshots in `history-map-references/live-sites.jpg`.

| Link | What the screenshot shows | Verdict |
|---|---|---|
| [Atlas of Ancient Rome](https://domdemetz.github.io/Ancient-Rome/) | Dark-green terrain map, **gold and amber** roads and labels, a right panel of layer presets (Political, Military…), a **bottom timeline with a play button, a year readout «100 AD» and era names** along the bar | The closest working model of «territories + year slider»; its structure (bottom timeline with eras, layer list at the side) is worth taking, its **colour is not** (amber on green, dense panel) |
| [Chronas](https://chronas.org/) | A globe or flat map filled with many bright coloured regions with labels, a left icon rail, a **bottom timeline** with the year in the centre | Shows what to avoid: dozens of hues, no hierarchy; the bottom slider is the same idea as above |
| [viz.bible, Paul's journeys](https://viz.bible/mapping-pauls-journeys/) | A **light paper-toned relief map**, italic serif place names, one coloured line per journey, buttons «First / Second / Third / Rome» in the top corner | The nicest labels in the set: serif italics on a quiet base. Light, not dark; rights reserved |
| [ORBIS](https://orbis.stanford.edu/) | A red-and-white intro dialog over the map, dated web look | Discard the look |
| [Kindred Britain](https://kindred.stanford.edu/) | A pale page with chips such as «Tree / Plot / Force» to switch layouts | A useful idea (several layouts of the same data), dated look |
| [Edinburgh maps](https://www.animatedmaps.div.ed.ac.uk/divinity_map/ad250.html) | A small flat map in cartoon green and blue with orange patches, on a purple page | Discard the look; the three-step idea only |

Not seen: TimeMap (Cloudflare check), Seshat's map page (403), Peripleo (Bad Gateway), HistoryMaps (blank): their descriptions in the first round came from search results and remain unverified by sight.

## 3. What the research says, for Pedro to react to

0. **Correction (2026-10-27, later): a finished map of this kind does exist**, which my searches missed: Sophia Scriptura's [map of early church writers](https://sophiascriptura.com/fathers/map/) (screenshots `sophiascriptura-map.jpg`, `sophiascriptura-map-controls.jpg`): «Each circle is a writer, placed where he did his main or longest work, up to the Council of Chalcedon (AD 451); diamonds are anonymous works; squares are church councils». Dark land, a **year-range filter with two handles and «Play through time»**, filters by century, language, group and tradition, and a table of all markers below. Its data (place, date range, attribution per work) is in its catalog: see `five-links-analysis.md`. What must not be taken: it colours writers by the tradition that «claims» them, which our neutrality invariant forbids. Point 1 below is superseded by this.
1. **(Superseded by 0.) No finished «Fathers on territories with a year filter» exists**; only a Logos forum request ([link](https://community.logos.com/forums/t/117211.aspx)). The pieces exist apart: the bottom year timeline (Atlas of Ancient Rome, Chronas), labels with leader lines (1.12), territories in tonal greys (5.11), one quiet readout (1.5).
2. **A monochrome map seems feasible and fits the repo**: one background, one ink, territories by grey tone and hatching, the Father marks as the one accent. The risk is legibility with many provinces; the proposal would test 3–4 provinces first.
3. **The base map is a data decision before a design one**: borders by year (needs a dataset such as Cliopatria, licence to confirm) or fixed Roman provinces plus the sees (AWMC has some layers under a non-commercial licence). A dot-matrix or schematic base (E) avoids the question but gives up territories.
4. **The data we would need is not in any of these sources**: place and date of each Father's main work, where each council met, where each movement spread; to be researched before the proposal. Claims like «áreas cristianizadas» need a source and an edition (trust rule).

## 4. The Pinterest session (done 2026-10-27)

Pedro logged in himself through `~/.doctrina-pinterest/login.mjs` (a profile dedicated to Pinterest, outside the repo; the agent never saw the password). Settings used when reading with it: a normal visible window (headless announces itself as «HeadlessChrome» in the user agent), no `--enable-automation` and no AutomationControlled flag, the window parked off-screen, a few pages with random pauses of 2–5 seconds and no bulk downloading. Pinterest's terms restrict automated access, so the profile is for reading Pedro's own account in small amounts; if Pinterest asks for a check or shows a block, stop and tell Pedro, do not work around it.
