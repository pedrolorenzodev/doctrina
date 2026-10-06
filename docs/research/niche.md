# Niche competitor UX study: Bible, patristic and theology readers

_Historical report from the v2 prototype (`~/Desktop/dev/doctrina-v2`, October 2026). Paths such as `research/screens/…`, `src/…`, `tools/…` and `docs/PLAN.md` refer to that repo; v2 screenshots of the product itself are in `docs/research/v2-screens/`._

Date: 2026-10-03. Method: Playwright, 1440x900 desktop and 390x844 mobile, deep pages (John 6:53, Gen 14:18, Strong's G5315), with clicks to open panels. Screenshots are in `research/screens/niche/` (87 files). No site blocked the bot as long as a real browser user agent was sent. Catena returns "Crawling is not permitted" to the default headless user agent. Not covered: Logos/Faithlife (paywalled), Orthodox Study Bible (no public reader), Theographic (verse search returned "No results").

## 1. Per site

**Sefaria** (the closest analog to what we are building)
- The two-pane reader works. The text column is about 980px with Hebrew right-aligned and English below it, and the selected verse gets a pale blue band. A 460px "Resources" panel on the right lists connection types with counts: Commentary (158), Talmud (4), Midrash (43), Translations (29) (`sefaria-connections-desktop`). The counts are what make the depth visible without clutter.
- Drill-down happens inside the panel: Resources → Rashi → stacked excerpts, each with an "Open" link (`sefaria-commentary-desktop`). A "‹ Resources" back link stays at the top. One level at a time, no modals.
- Translations is a list inside the same panel. Each version shows the verse text, then an italic label with year and a "Select" link (`sefaria-translations-desktop`). You preview the version before you switch to it.
- Word lookup: double-click a Hebrew word and it gets highlighted, while the panel turns into a dictionary with a short gloss first (BDB-lite) and the full lexicon below it (`sefaria-wordlookup-desktop`).
- On mobile the panel becomes a bottom half-sheet covering about 55% of the viewport, with the text still visible above it (`sefaria-connections-mobile`). An assistant banner, a language nag and a cookie box take about 25% of the first view. Topic pages put an editorial lead paragraph above each source (`sefaria-topic-desktop`).

**Catena Bible** (the best patristic-per-verse execution)
- The chapter reads as continuous prose. Clicking a verse highlights it and opens a large right sheet (about 930px) with the tabs **Patristics 24 · Media 90 · Related 17 · Greek** (`catena-commentary-open-desktop`).
- The Patristics tab is a master–detail view. On the right is a 270px list of Father cards (avatar, name, work, 4-line excerpt). On the left is the full text of the selected source, with the cited verse span highlighted in a soft marker color and the title, homily number and dates (349–407 AD) above it.
- On mobile the sheet is full-screen, the cards are swipeable ("1 of 24"), and an avatar stack shows the count (`catena-commentary-open-mobile`).
- The Greek tab is an accordion with one row per word: English gloss, then (Greek) in grey, transliteration, Strong's number and definition (`catena-greek-tab-*`).
- What fails: the Media tab is unfiltered noise. It shows Ezekiel 33 and Esther 6 videos for John 6:53 (`catena-media-tab-desktop`). In the closed state, margin snippets float at random heights (`catena-verse-desktop`), and the beige theme is close to what our brief bans.

**STEPBible**
- The interlinear has the English word above the Greek in boxed cells (`step-wordclick-desktop`). Clicking a word fills the right pane ("Word analysis": lemma, transliteration, Strong's, "occurs 247x", meaning, then grammar spelled out in plain words: Tense: Aorist, Mood: Subjunctive, "e.g. *you all maybe did*").
- Hovering a word shows a full-width teal banner at the top of the screen (`step-wordhover-desktop`). It is far from the cursor and jarring. Avoid this.

**Bible Hub**
- The interlinear grid stacks five rows per word: Strong's number / transliteration / Greek / English / parsing code (`biblehub-interlinear-desktop`). That is very complete, but there are five colors and the codes are cryptic (V-ASA-2P).
- The verse page has 25 translations stacked vertically, plus context and audio (`biblehub-verse-desktop`). The commentaries page has a 40-item "Jump to" link wall (`biblehub-commentaries-desktop`).
- With three nav bars of abbreviations and crypto ads, Bible Hub is the reference for "dirty".

**Blue Letter Bible**
- The "TOOLS" button on each verse expands **inline under the verse** into color-coded tabs (Interlinear / Bibles / Cross-Refs / Commentaries / Dictionaries / Misc) (`blb-tools-interlinear-*`). Expanding in place is right; the rainbow tab colors are not.
- The lexicon is a grid of boxed panels (`blb-lexicon-desktop`). The parts worth copying are "KJV translation count: eat (94x), meat (3x)" and the per-book occurrence chips (Mat 13, Jhn 15…), which together are a ready-made word-study widget.

**NET Bible**
- The text is on the left with superscript note numbers. The right pane has the tabs Notes / Bibles / Greek / Library (`netbible-chapter-desktop`). Translator notes are typed (tn, sn) and long-form, which is the best "why this translation" content we found.
- On mobile the right pane disappears entirely (`netbible-greek-mobile`), so the notes can't be reached.

**Bible Gateway**
- Parallel view is four equal cards (`biblegateway-parallel-desktop`). On mobile the four columns are 70px wide and the titles wrap one letter per line (`biblegateway-parallel-mobile`), which is the clearest anti-pattern in this study.

**Scaife Viewer**
- The Greek is well set, at about 18px with an 1.8 line-height and a narrow 420px measure (`scaife-reader-desktop`). The verse number sits in a grey gutter cell.
- The right rail has a "short definitions" list for every lemma on the page, with a frequency per 10k words. A glossary for the whole page is a cheap way to give context.

**The Faith Received (Mere Orthodoxy)**
- Selecting a verse in the scripture reader opens an **inline card directly below the verse** on mobile, with "2,212 citations" and expandable groups (Chapter commentaries 100…), plus "Open the Verse Desk →" (`faithreceived-verse-select-mobile`). On desktop the card docks bottom-right, far from the verse (`faithreceived-verse-select-desktop`).
- The topic page for "The Lord's Supper" has **Read / Compare / Trace / Scripture** tabs. Trace is a dot timeline with one row per tradition (Roman Catholic, Lutheran, Reformed), where each dot is a document sized by how many articles it has on the topic (`faithreceived-topic-trace-desktop`). This is the closest existing thing to our per-doctrine timeline.
- The large dark landscape hero and tracked small caps on every label cost it some calm.

**Others.**
- **New Advent** sets Greek, Douay-Rheims and Latin as three columns on one page (`newadvent-bible-desktop`). The trilingual idea is right, but the design is 2005-era: the Fathers index is a bare list on mobile, and a donation banner sits in the middle of the text.
- **Biblia (Logos)** opens the verse page on the single verse, with "Read more", Copy and "Show footnotes" (`biblia-verse-desktop`). This is the simplest form of verse→chapter.
- **YouVersion** shows version pills above the verse, then "Compare All Versions →", then **Related Videos** from BibleProject (`youversion-verse-desktop`). The chapter reader is calm, with a 600px serif measure.
- **BibleProject** puts a 16:9 poster above a summary and pairs the guide with a sticky table of contents (`bibleproject-video-*`, `bibleproject-guide-desktop`). It has the best whitespace in this study.
- **Weak:** Perseus (good morphology table, unusable chrome), Catholic Answers (stock host-photo hero), Bible Odyssey (pleasant editorial serif type, generic). viz.bible is a gallery, not UI.

## 2. Pattern library

**Verse page with chapter expand**
- Best observed: Biblia (verse first, "Read more") combined with Catena (chapter as prose, verse highlighted in place).
- Recommendation:
  - Open with the verse alone at 24–28px serif, followed by a one-line row of actions (Copy citation · Compare · Original).
  - Below it, a "Show John 6" button expands the chapter **in place**, at the standard 18px reading size, with the target verse marked by a 3px left rule plus a faint tint. Don't use a red or yellow highlighter.
  - Scroll so the verse sits at about 30% of the viewport after expanding.
  - Put two greyed verses of context before and after even in the collapsed state, the way Bible Hub's "Context" box does.
- Avoid: margin snippets floating at random heights (Catena) and verse-image filler (Biblia).

**Word by word: original, transliteration, lexical meaning**
- Best observed: the Catena Greek accordion for density, STEP for the analysis content, Sefaria for the short-gloss-first order.
- Recommendation:
  - Every word of the translation is tappable. On desktop, a popover anchored to the word (max 320px) shows the transliteration first (our brief), then the gloss, then the Greek script in a dedicated font (on toggle or in smaller type), then parsing spelled out in plain words ("aorist subjunctive, 2nd plural"), then "appears 97× · 15 in John" and "Word study →".
  - On mobile, use a bottom sheet at about 45% height.
  - Also offer a "Words" mode for the whole verse in the Catena accordion style, one row per word.
- Avoid: STEP's top-of-screen banner, Bible Hub's five stacked colored rows and raw codes like V-ASA-2P, and BLB's rainbow pills.

**Compare translations**
- Best observed: Sefaria's list in the panel with a preview, and YouVersion's pills.
- Recommendation:
  - For a single verse, use a vertical stack (never columns on mobile). The original plus transliteration sits on top, then 3–5 versions the reader picks (RVR1960, BJ, DHH, ESV, DRA…), each with a small-caps label and year.
  - Optionally show word-level diffs as an underline on the words that differ.
  - Use side-by-side columns only at ≥1024px and at most 3 columns, each at least 300px wide.
- Avoid: Bible Gateway's 70px mobile columns and Bible Hub's 25-version wall.

**Patristic commentary per verse**
- Best observed: the Catena Patristics tab.
- Recommendation:
  - Copy Catena's master–detail: a list of Fathers sorted **chronologically** (not by "relevance"), each card showing name, dates, work and a 3-line excerpt; the full reader shows the cited span marked and the context before and after.
  - Add what Catena lacks: an authenticity/dating note, a "Copy citation" link with the exact reference, and a filter by century.
  - Show the count in the tab ("Fathers 24").
  - On mobile, use a full-height sheet with swipe between Fathers.

**Objections and responses**
- No site does this well. That is our opening.
- Recommendation:
  - Borrow Sefaria's topic structure (a curated list where each item gets an editorial lead paragraph, then the sources) and The Faith Received's tabs (Read / Compare / Trace).
  - Each objection is a disclosure row: the objection in one sentence, then on expand, the tradition's response, the passages cited (each linking to its verse page), and then the videos.
  
**Per-tradition reading**
- Best observed: The Faith Received topic page, with one row per tradition and confessional documents.
- Recommendation: a segmented control (5 traditions) sticky under the page header, with the selection kept in the URL (`?t=lutheran`). The control switches content and keeps the scroll position. Mark each tradition with one neutral accent mark, not a five-color rainbow (The Faith Received uses three colors only in its chart, which is acceptable).

**Timelines**
- Best observed: The Faith Received "Trace" view.
- Recommendation: a horizontal axis with one lane per tradition plus a "Common (patristic)" lane. Dots are documents and diamonds are councils, with ecumenical councils filled. Clicking a dot opens the same source panel. On mobile, rotate to a vertical list grouped by century; don't pinch-zoom an SVG.

**Glossary popovers**
- Best observed: Scaife's page-level glossary rail, plus BibleProject's restraint.
- Recommendation: mark terms with a dotted underline only (no color). The popover holds a 2-line definition and, where definitions differ, rows like "Catholic: … / Lutheran: …", then "Full entry →". Mark only the first occurrence of each term per section.

**Source panel with context**
- Best observed: Catena's reader pane (highlighted span with context around it) and Sefaria's in-panel drill-down with a back link.
- Recommendation: one right panel (desktop 440–480px; mobile full-height sheet), opened for any citation. Its fixed layout is:
  - header: author, work, section, date, authority level
  - the quoted passage marked inside 1–2 paragraphs of context
  - "Expand context" for more
  - Copy citation
  - Original language toggle
- One level deep with "‹ Back", never stacked modals.

**Videos per verse**
- Best observed: YouVersion "Related Videos" (2-up cards), BibleProject's poster card.
- Recommendation: a 16:9 thumbnail, creator name, tradition tag, duration and a **timestamp** that jumps to the exact objection. Filter chips by tradition. Videos are curated and capped (show 4, then "All 12").
- Avoid: Catena's 90 unfiltered media items that include off-topic content.

## 3. Top 10 takeaways (ranked)

1. **Use Sefaria's skeleton**: text on the left, one contextual panel on the right with typed connections and counts. On mobile, a bottom sheet that leaves the verse visible.
2. **Copy Catena's patristic master–detail** (list of Fathers + full text with the verse span marked), but sort it by date and add dating and authenticity notes.
3. **Tabs inside the verse panel carry counts** ("Fathers 24 · Videos 6 · Words 28 · Translations 5"). Counts make the depth visible without showing it all at once.
4. **Curate the videos, don't aggregate them.** Catena's off-topic media shows how quickly volume destroys trust.
5. **Word popovers sit next to the word**: transliteration and gloss first, plain-language parsing, occurrence count. No banners, no parsing codes.
6. **Never put translation columns on mobile.** Stack them vertically, and use at most 3 columns of at least 300px on desktop.
7. **Expand the chapter in place** around the verse (Biblia + Catena), with a quiet left-rule highlight rather than a marker color.
8. **Expand inline on mobile** (The Faith Received's card under the verse, BLB's TOOLS), so the panel stays adjacent to the text it refers to.
9. **Use The Faith Received's Trace view as the per-doctrine timeline model**: lanes per tradition plus a patristic lane, dots open sources.
10. **Calm is the differentiator.** Every content-rich competitor (Bible Hub, BLB, STEP, New Advent) is cluttered, and every calm one (YouVersion, BibleProject) is thin. No site combines Sefaria-level depth with BibleProject-level typography. Ban first-visit tours, assistant banners and stacked nav bars.
