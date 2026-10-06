# Analogs: non-religious products that are deep but still calm

_Historical report from the v2 prototype (`~/Desktop/dev/doctrina-v2`, October 2026). Paths such as `research/screens/…`, `src/…`, `tools/…` and `docs/PLAN.md` refer to that repo; v2 screenshots of the product itself are in `docs/research/v2-screens/`._

How this was done: Playwright at 1440×900 and 390×844, with interactions triggered (hover previews, tap pop-ins, stacked panes, timeline brush). Screenshots are in `research/screens/analogs/`. Every claim comes from a screenshot or from measured computed styles (size / line height / measure in px). Skipped: login-walled readers (Readwise, LingQ, Readlang, Duolingo). The Met's old timeline no longer exists.

---

## 1. What to steal, site by site

**Our World in Data, topic page.** The model for our hub (`owid-topic`, `owid-hub-*`, `owid-hub2-*`).
- Below the title, authors and "Cite / Reuse this work" comes a **sticky bar of only 4 sections**.
- "Key Insights" is **5 insight tabs with one open**: text on the left, chart on the right. That is problem (b), already solved.
- A related-topics rail is marked off by one **hairline left border**, not cards.
- Mobile: the bar scrolls sideways, and the insight tabs become a carousel with the next tab peeking in.
- Body is 18/28 Lato in **navy #1d3d63**. Skip the Playfair headings, which are too close to the cliché.

**Stripe Docs** (`stripe-docs-selector-*`). A segmented control (Checkout / Elements / Mobile) plus underline sub-tabs swaps the whole guide while everything else stays fixed: left nav, breadcrumbs, and the right TOC with nested hairlines. "Optional" is a muted grey word, not a badge. Text is #3c4257, 16/26. On mobile the TOC sits behind one icon button.

**gwern.net** (`gwern-sidenotes`, `gwern-popup`, `gwern-mobile-popin-mobile`).
- Popups are **little windows**: a title bar with close / maximise / minimise / pin, about 640×470.
- Links inside a popup open stacked popups. This is the most complete "promote a preview to a page" system anywhere.
- Mobile: a **bottom pop-in** ("Footnote #1", close), the page behind dimmed, and a sticky bottom breadcrumb ("The Scaling Hypothesis · Meta-Learning").
- Steal the metadata line (dates, "certainty: likely", "importance").
- Avoid: justified text in a narrow 481px column, heavy grey boxes, and five different link decorations.

**Andy Matuschak's notes** (`matuschak-stacked-desktop`, `matuschak-hover-desktop`). Clicking a link opens a new pane to the right, and older panes slide under it. Hover shows a ~500px card holding the whole note (soft shadow, 8px radius). Each pane ends with a tinted "Links to this note" list. On mobile it becomes plain navigation.

**Tufte CSS** (`tufte-sidenotes-*`).
- The sidenote's number lines up with the line it annotates.
- On mobile, tapping the number **expands the note inline**, right under that line.
- #111 on #fffff8. Body 21/30 at a 693px measure. Headings are **italic at weight 400**, scaled 25.5 → 33 → 48.
- Small caps open sections, which saves a heading level.

**Wikipedia Vector 2022** (`wikipedia-preview-desktop`, `wikipedia-refpreview-desktop`, `wikipedia-mobile-sections-mobile`).
- The page preview is a ~450px text + image card. The reference preview is **one line**: size the popover to the content.
- The sticky left TOC folds its groups.
- On mobile, sections arrive **collapsed**.

**Distill** (`distill-article-desktop`, `distill-footnote-desktop`). The footnote opens as a **drop-down box the full width of the text column**, right under the line (hairline border, faint shadow). The byline grid uses small-caps labels between full-width hairlines. Figures sit in the gutter with their claims beside them. Text is rgba(0,0,0,.8).

**Apple Developer, video page** (`apple-wwdc-*`). The player is the width of the content. Under it: **About / Transcript / Code** tabs, a Chapters list of timestamp links, and a **searchable transcript** with timestamps in a left column. Video is treated as a document.

**Linear changelog** (`linear-changelog-*`). The date sits in a left column on a 1px vertical line with an accent dot; the entry sits on the right; filter tabs and search go on top. Variable Inter at **510 / 590**. On mobile the line goes and the date becomes a kicker above the title.

**Chronas** (`chronas-map-*`). A **two-level time ruler**: an overview strip (500 BCE–2000) above a zoomed strip with a red cursor and **labelled era bands**. On mobile the labels collide where eras are short, and our early centuries are that dense.

**Histography** (`histography-explore-desktop`). **Every dot is an event**, so density shows where things happen at a glance. Categories come with counts, a bottom **range brush** picks the era, and hover shows a year cursor with an image and label. Take the mechanics; reject the skin (texture, tracked caps).

**Scaife Viewer and Logeion** (`scaife-*`, `logeion-word-*`).
- Scaife: line-numbered Greek, a right panel with the **vocabulary for the passage** (lemma, gloss, frequency), and a "Highlight" mode that makes words clickable.
- Logeion: big lemma, short definition, frequency, and **dictionary tabs**, with a "nearby words" rail.
- **Anti-example:** Scaife on mobile keeps two tool columns side by side, and the text disappears.

**Works in Progress and Aeon** (`wip-article-*`, `aeon-essay-*`). WIP uses a serif (18/27) for reading, **mono for every UI label**, and flat 1px boxes with 0 radius. Aeon's body is 22/31, and its one accent is spent on pull quotes.

**SEP** (`sep-*`). Keep "First published …; substantive revision …" and the numbered sections. Reject the red gradient frame and the boxed panels.

**Etymonline** (`etymonline-word-*`). Three ad units around one paragraph show why we never run ads.

---

## 2. Patterns for our problems

**(a) Topic hub without the weight.** Use OWID's structure.
- Header band: title, a one-sentence thesis, and "last revised · cite · sources" in small muted type.
- Then a **sticky section bar of at most 6 items**. Height 48px, hairline at the bottom; the active item goes dark, with no pill.
- Each hub section is a **summary plus entry points**, never the full content. Depth lives on subpages.
- Spacing: 96–128px between sections on desktop, 64px on mobile, with a hairline above each heading.
- A "Connected doctrines" rail (220–260px) with a 1px left border.
- At most two flat card treatments site-wide.

**(b) One tradition at a time.**
- A Stripe-style segmented control at the top of the content column, **persistent** in the URL and localStorage. It swaps content in place while the TOC and header stay fixed.
- Map section ids across traditions so switching keeps the reader at the same section. Crossfade ~150ms, no slide.
- Inside a section, OWID-style tabs (for example, objections: one open, the rest in a row).
- The sticky bar names the tradition in text ("Reading: Lutheran ▾"). One accent, no colour per tradition.
- Mobile: a sticky chip row that scrolls sideways, with the next chip peeking in.

**(c) Previews, panels, promote to page.** Three tiers, chosen by content size.
1. *Glossary term*: a 320–400px card. Opens after 300ms of hover intent, fades in 120ms, stays open 200ms after the pointer leaves. Hairline border, shadow no bigger than `0 4px 16px rgb(0 0 0/.08)`.
2. *Footnote / citation*: a Tufte margin sidenote at ≥1280px (margin 240–280px). Narrower than that, Distill's full-column drop-down.
3. *Source, Father's text, verse*: a gwern-style popup whose title bar holds the source name, "Open in panel", "Open page" and close.
   - "Open in panel" puts it in a Matuschak right pane, 520–600px.
   - Keep at most 2 panes. Older panes collapse to a 40px spine with a vertical title.
   - Add `?panel=` to the URL so the view can be shared.

Mobile: tap opens a **bottom sheet** at 60% height, draggable to 92%, with the same title bar and the page behind dimmed 25%. A link inside the sheet pushes a new view **inside that sheet** with a back arrow; never stack sheets. Footnotes expand inline.

**(d) Timelines.**
- *General timeline*:
  - A Chronas-style **two-level ruler**: an overview of 30–1800 AD with a brush, above a zoomed band.
  - Era bands labelled in small caps on hairlines.
  - Histography-style **density dots** per category: Fathers, writings, councils, heresies, schisms.
  - Ecumenical councils stand out by **size and weight, never colour**. Uncertain dates draw as range bars marked "c.".
- *Per-doctrine timeline*: Linear's vertical layout. A 120–160px date column in tabular numerals, a 1px rule with dots, and a one-line claim plus source on the right.
- Mobile: vertical only, with a sticky **century scrubber** on the right edge (like the iOS contacts index).

**(e) Video that doesn't look like YouTube.**
- Treat each video like Apple does: a player at reading width (≤880px) with our own poster frame and a lite-embed facade, so no YouTube chrome shows before the reader presses play.
- Under it: creator, tradition, length, and **chapters that deep-link to the exact objection** ("Answers 'John 6 is metaphor', 12:40–18:05"). Add a transcript tab when one exists.
- Lists are **rows, not a thumbnail wall**: a 160px thumbnail, title, creator, and the timestamp range it answers.

**(f) Hover a word and see its meaning.**
- An "Original language" toggle, off by default, like Scaife's Highlight mode.
- With it on, a dotted underline appears **only on hover**. Clicking a word tints it and fills a right panel: transliteration first, then script, lemma, literal gloss, morphology, frequency, and other occurrences.
- A Scaife-style **vocabulary list** under the verse.
- A Logeion-style word page with tabs per lexicon.
- Mobile: tap a word to open a half-height sheet. Swiping the sheet moves to the next or previous word, with the verse still visible above.

**(g) Mobile, overall.**
- One column, always. Never show two tool columns under 768px.
- The TOC becomes a sticky bar showing the current section, and tapping it opens a sheet.
- Rails become sheets, sidenotes expand inline, the tradition picker becomes chips, and timelines go vertical.
- Wikipedia-style **collapsed sections** on long pages.

---

## 3. Visual quality bar: what separates these from generic AI UI

1. **Body text is big and the measure is controlled.** 17–22px with 1.45–1.65 line height, and 60–75 characters per line (Tufte 21/30 at 693px, WIP 18/27, OWID 18/28, gwern 19/31). Generic UI uses 16px across a 900px+ column.
2. **Small, steady jumps in the type scale.** About ×1.25–1.33 per step (Tufte 21 → 25.5 → 33 → 48). Hierarchy comes from **space**, not from giant headlines.
3. **Headings aren't automatically bold.** Tufte italic 400, WIP 400, SEP 300–400, Linear 510/590. Weight 700 everywhere is the giveaway.
4. **Text isn't pure black on pure white.** #111 on #fffff8, rgba(0,0,0,.8), navy #1d3d63, slate #3c4257: contrast is tuned, not maxed.
5. **Hairlines do the structuring.** 1px rules, left-border rails, TOC lines. No shadowed cards. Radius 0–4px; previews may go to 8px.
6. **One accent, used only for links, the active state, or a single pull quote.** Colour inside content carries data (OWID's charts), never decoration.
7. **Two type families with fixed roles.** Serif for reading, sans or mono for UI (WIP, gwern), instead of one sans everywhere.
8. **Metadata set as typography.** Distill's byline grid, SEP's revision dates, gwern's certainty line. Trust comes from precise small type, not badges.
9. **Little chrome, mostly words.** Icons appear only where they act (gwern's popup buttons). Secondary labels are muted words, not pills.
10. **The margin carries notes and figures** (Tufte, Distill), so the reading column stays clean.
11. **Interactions are instant and quiet.** Hover intent, ~120–150ms fades, no bounce, and popovers sized to their content (Wikipedia's one-line reference vs its 450px page preview).
12. **Depth is hidden by default and one click away.** Collapsed sections, one insight at a time, panes on demand. The light-feeling sites hold as much content as the heavy ones; they just show less of it at once.
