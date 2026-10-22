# Reader: highlighting, and the other features readers single out

Research for (A) highlighting / underlining text in the full-text reader (sources and Bible), deciding first the visual functions and the UI/UX, and only later how to save them per user; and (B) the other features users praise or ask for in long-text reading and study products. Asked 2026-10-21. Research only: nothing here is decided. Builds on `docs/research/reader-side-panel.md` (the tap-a-sentence panel; not redone here).

Tags: [observed] seen in a screenshot under `docs/research/reader-highlighting-and-features/` (file named) · [doc] the product's own help, docs or store page, read 2026-10-21 · [review] a user review or forum post, quoted, read 2026-10-21 · [snippet] seen only in a search-result summary, not opened · [repo] a file in this repo · [inference] the agent's reasoning, neither observed nor sourced · [memory] written from memory, to verify.

## Progress
- Status: done
- Done: brief read (AGENTS, PROJECT, DESIGN, DECISIONS, ROADMAP "Now" 3–4, reader-side-panel.md, niche.md, agent-ops, research-fanout); 9 products inspected with Playwright at 1440×900 and 390×844, 3 more attempted (35 screenshots kept); help pages for Apple Books, Readwise Reader, Hypothesis, Logos, Kindle, Medium; 13,611 unique App Store reviews from 13 apps (US, plus MX / ES / AR for 9 of them) classified by feature, with quotes; three compositions; open questions.
- In progress: none.
- Next: Pedro's answers to §12. Then a proposal Artifact with live demos of the chosen highlighting compositions (main rule), built on the 05/06 proposal page.
- Not done, and why: Kindle web reader (the sample reader at read.amazon.com never finished loading headless, `kindle-desktop-sample-loaded`; the full Cloud Reader needs an Amazon login); Apple Books has no web reader (help page used instead); Readwise Reader, Google Docs and Notion need a login (help pages used for Readwise; Docs and Notion skipped as not needed); Hypothesis's public proxy is closed («Access to Via is now restricted», `hypothesis-desktop-initial`), so its client was embedded on a local test page with Juan 6 text instead; Catena and esv.org rendered no selectable text to the script. Touch selection at 390 px is **scripted** (a JS range plus synthetic pointer/touch events): it shows what each site's own code does with a selection, not the OS long-press callout, which headless Chromium doesn't draw. Reddit's JSON endpoints answered «Blocked»; forum evidence comes from web search and publisher forums. The review corpus is in the session scratchpad (`…/scratchpad/hl/rev/uniq.json`), not in the repo.

## 0. What bounds this in the repo

- **The selectable unit.** Agreed 2026-10-06 (ROADMAP "Now" 3): «The selectable unit is the work's own numbered division (verse, chapter.section, CCC §, confession article)… no free text selection», with the hybrid that «inside a non-Bible division every sentence can be tapped and highlighted; tapping one opens the detail of its division with that sentence highlighted, and the URL carries the sentence». That was decided for *navigation to the detail*. Free-range highlighting reopens it, so it is the first question in §12. [repo]
- **Tap already has a job.** Tapping a sentence or verse opens the detail / side panel (ROADMAP "Now" 4 is still deciding which). Any highlight gesture must not collide with that tap. [repo]
- **Underline already means "link".** DESIGN §5 has three link underlines: page link (1px `rule-2`, offset 4), citation (dotted 1.5px `cite`), glossary term (dotted 1.5px `ink-3`), plus the faint source link (dotted 1px). A user underline in the reading text would read as one more link kind [inference from repo].
- **Marks already in use.** `--color-mark` (light `rgb(240 200 60 / .45)`, dark `rgb(214 168 101 / .28)`) is the search match and the *arrival* highlight (reader opened at a cited paragraph: fill in 200 ms, hold 1.8 s, fade 1200 ms, a 2 px accent bar stays). `--color-accent` / `accent-weak` are «selection, current position». [repo DESIGN §1, §4]
- **Accounts, bookmarks and notes are out for now** («come back with Supabase», PROJECT "Scope"). So anything at launch is per browser. [repo]
- **Neutrality.** The site never concludes; a crowd signal over a contested text ("most highlighted") would be a judgement by proxy [inference from AGENTS invariants].

## 1. Products inspected (2026-10-21)

Desktop 1440×900; phone 390×844, iPhone user agent, touch. Every visual claim was checked against the named screenshot.

| Product | How selection starts | What appears | Actions | How a highlight renders | Overlap / adjacent | Review list | Touch (390) | Account |
|---|---|---|---|---|---|---|---|---|
| **YouVersion (bible.com)** (`youversion-desktop-verse-selected`, `-two-verses`, `-after-highlight-click`, `-adjacent-highlights`, `-reselect-highlighted`, `-after-reload`, `-after-copy`; `youversion-390-verse-selected`, `-two-verses`, `-after-highlight-click`, `-dark-highlights`) | **Tap a verse** (no drag). Each further tap adds a verse to the selection (6:53–54, then 6:51,53) | A bottom sheet: «Actualmente seleccionado: SAN JUAN 6:53-54 RVR1960 ›», then rows «Destacar» with 5 colour dots, «Copiar», «Comparar», «Compartir», and a box «¿Quieres guardar tus resaltados en todos tus dispositivos? Regístrate o Inicia sesión». Selected verses get a dotted underline | Highlight (yellow `#fffe00`, green `#5dff79`, cyan `#00d6ff`, orange `#ffc66f`, pink `#ff95ef`), copy, compare, share. Re-selecting a highlighted verse adds a ⊖ "remove" before the dots | **Whole verse**, saturated flat fill, verse number included. In dark mode the same saturated fill with black text inside, the verse number barely visible on yellow (`youversion-390-dark-highlights`) | Two adjacent verses in two colours touch with a hard edge, no gap (`-adjacent-highlights`). One colour per verse; a new colour replaces the old | Not on web (app has one) [memory] | Same sheet, ~half the screen, text visible above | **Highlights apply without an account, but vanish on reload** (`youversion-desktop-after-reload`: 6:53–54 plain again; nothing in `localStorage`). A toast «Accede a tus resaltados desde cualquier dispositivo, siempre. Crear una cuenta gratuita» appears right after highlighting |
| **Bible Gateway** (`biblegateway-desktop-drag-selection`, `-after-yellow`, `biblegateway-390-scripted-selection`) | **Drag over any text** (partial verse) | Desktop: a floating white toolbar just below the start of the selection | 4 colour dots (yellow, red, blue, green), clear ⊗, note ✎, share ↗, a ☺ that opens emoji reactions («🙌🙏❤️✊😇⭐🙂💎», read from the DOM) | Not seen: the first colour tap navigates to a full-page login | — | — | The same toolbar **docked at the bottom of the screen**, full width, 64 px tall, colours shown pale (`biblegateway-390-scripted-selection`), so it never sits on the text or the OS callout | **Required**: «You must be logged in to save and sync your notes, highlights, favorites, and pinned resources» on a separate page (`-after-yellow`); the reading context is gone |
| **Logos web, free edition** (`logos-web-john6`, `-drag-selection`, `-toolbar-hover`, `-context-menu`, `-after-highlight`) | Drag over text (the text is drawn on a canvas, not DOM) | A floating mini toolbar **below** the selection: «Copy», «Explain» ✦, «Ask» ✦, «Search», «⋯»; second row: a copy icon and 5 highlighter swatches drawn as a marked «A», plus an underline «A». Right-click opens a two-column menu: «Selection» / «Reference John 6:53» / related events; «Copy», «Visual Copy», «Study Assistant: Explain / Ask», «Highlight» + 5 swatches, «Add note», «Search: Inline / Bible / All Resources / All Open» | Copy, AI explain/ask, search (in the book, in the Bible, in the library), 5 highlight styles + underline, note | Not seen: a swatch opened a «Notes» tab with «Create your free account to get started» (`-after-highlight`) | Desktop app: styles are user-defined palettes, applied by shortcut keys, erased per range (Ctrl+Shift+K), searchable with `highlight:*` ([Logos wiki](https://wiki.logos.com/Highlighting), [doc]) | Desktop: search `highlight:*` [doc] | not checked (desktop workspace) | Required for highlights |
| **Medium** (`medium-desktop-selection`, `medium-390-selection`) | Drag (any range) | A small black tooltip **centred above** the selection | Logged out: «Highlight», «Share» | Not seen (needs login). Medium's glossary: readers «highlight passages… to tell the author they liked them»; followers see them ([help.medium.com glossary](https://help.medium.com/hc/en-us/articles/360006341833), [snippet]) | — | — | The same tooltip above the selection (scripted) | Required |
| **Hypothesis** (embedded client on a local test page; `hypothesis-desktop-selection-adder`, `hypothesis-390-selection-adder`) | Drag (any range) | A small white "adder" **below** the selection, with a pointer to it | «Annotate» (a) and «Highlight» (h), keys shown in their labels | Help: highlights «are always private (visible only to you…) and do not provide the ability to add comments or tags»; private by default «to avoid pages being cluttered» ([help](https://web.hypothes.is/help/whats-the-difference-between-an-annotation-and-a-highlight/), [snippet]) | — | Sidebar and profile search [snippet] | Adder below the selection, left-aligned at the column edge | Required to save |
| **Apple Books** (no web reader; [Apple help](https://support.apple.com/guide/iphone/annotate-books-iph17bf340c1/ios), [doc]) | «Touch and hold a word, move the grab points to adjust the selection, then tap Highlight» | System edit menu | Highlight; «To change the highlight color or switch to underline, tap the text, tap Highlight, then tap an option»; Add Note; Remove; Share; «Translate, Search, or Copy» | Colours or **underline** | — | «Bookmarks & Highlights → Highlights»; tap one to jump; multi-select to share or delete | native | Apple ID |
| **Readwise Reader** ([docs](https://docs.readwise.io/reader/docs/faqs/highlights-tags-notes), [doc]) | Selection, or keyboard: arrows move a focus indicator paragraph by paragraph, **H** highlights it | — | Highlight, note (N), tag (T); stylus highlights «as soon as your stylus touches the text» | **«Auto-highlighting… converts any selected text into a highlight immediately»** (Shift+H toggles). «Reader doesn't support multiple colors of highlights»; tags instead | Drag a highlight's handles «to merge disparate highlights into a single highlight» | Notebook tab (Shift+N) | annotation bar when a highlight is selected | Required (paid [memory]) |
| **Kindle** (web not reachable; [Tom's Guide](https://tomsguide.com/how-to/how-to-highlight-text-and-make-notes-on-your-kindle), [snippet]) | Tap and hold, drag handles | — | Highlight in 4 colours, note, look up (dictionary) | Colours; **Popular Highlights**: other readers' passages shown with a dotted underline and a count, on by default ([TNW](https://thenextweb.com/news/how-to-turn-off-popular-highlights-amazon-kindle), [snippet]) | — | Notebook | native | Amazon account |
| **Sefaria** (`sefaria-desktop-selection`, `sefaria-desktop-notes`, `sefaria-390-scripted-selection`) | Clicking a segment selects it (pale blue band); drag gives only the browser's selection | **No popover** on drag. The segment's Resources panel has «TOOLS: Add to Sheet, Dictionaries, Compare Text, Notes, Share» | Notes → a modal «Don't lose that thought! Create a free account…» | No user highlighting (a reviewer asks «Colored Highlighters Please», 2025-11 [review]) | — | — | native selection only | Notes need an account |
| **Blue Letter Bible web** (`blb-desktop-drag-selection`, `blb-desktop-copy-options`) | Drag gives only the browser selection; the hovered verse gets a pale yellow box | No popover. Per-verse copy icon, and a «COPY OPTIONS» panel | Copy formats: verse-reference order, delimiters «[Jhn 1:1 KJV]», «Abbreviate Books», «Use SBL Abbrev.», «En dash not Hyphen», «Quotes Around Verses» | Web: none seen. A reviewer on the app: «you cannot highlight or underline individual words or a portion of a verse, but can only highlight a complete verse» (2023 [review]) | — | — | not checked | — |
| **Biblia.com** (`biblia-desktop-drag-selection`) | Drag gives only the browser's grey selection | Nothing | — | — | — | — | — | — |
| **The Faith Received** (`faithreceived-desktop-verse-selected`, `faithreceived-390-verse-selected`, `faithreceived-390-text-selection`) | Tap a verse (each verse is `role="button"`) | Desktop: the verse gets a pale tint and a 2 px terracotta underline. Phone: an inline card under the verse («VERSE John 6:1», «Open the Verse Desk→», «187 citations in the library», groups with counts) and a bottom tab bar «Commentary · Citations · Reception · Verse Desk» | No user highlighting or notes | — | — | — | inline card | — |

Not reached: Kindle web, Apple Books web (none exists), Readwise, Google Docs, Notion, Catena, esv.org (reasons in Progress).

### What the products teach [observed unless tagged]

1. **Two models.** *Unit* highlighting (YouVersion: tap verses, colour the whole verse) and *range* highlighting (Bible Gateway, Logos, Medium, Hypothesis, Apple Books, Kindle, Readwise: select any words). Users of unit-only apps ask for ranges: «Me gustaría tener la posibilidad de resaltar solo palabras, sin la necesidad de que sea el versículo completo» (YouVersion AR, 2★, 2021); «To give us the ability to highlight partial words or phrases, instead of whole verses» (YouVersion US, 2026); «I love being able to highlight with specificity — even a single word» (Olive Tree, 2025) [review].
2. **Where the toolbar goes.** Above the selection (Medium), below it (Hypothesis, Logos, Bible Gateway desktop), or **docked at the bottom on phones** (Bible Gateway, YouVersion's sheet). Below or docked keeps clear of the OS edit menu, which iOS and Android draw above a selection [memory: platform behaviour, not visible headless].
3. **Every product that saves highlights asks for an account at the moment of highlighting**, and two lose the reader on the way: Bible Gateway leaves the page for a login; Logos opens an upsell tab. YouVersion is the only one that lets you highlight logged out, and it **forgets on reload**.
4. **Colour palettes are the norm (4–5 colours), and the exception is deliberate**: Readwise ships one colour and uses tags; Hypothesis highlights are one colour, private, and noteless. Apple Books is the one that offers **underline** as a style.
5. **Rendering.** Flat saturated fills of the whole verse (YouVersion) dominate the page, more so in dark mode. A reviewer: «el resaltar un versículo hace que los demás se vean muy claros y cueste leer el capítulo completo» (YouVersion AR, 2026) [review]. Overlap is handled by replacement (YouVersion) or merging (Readwise); an Olive Tree reviewer: «highlight sections will start overlapping, including headings, and looking sloppy» (2022) [review].
6. **Copy carries the reference.** YouVersion's «Copiar» put on the clipboard the text, then «SAN JUAN 6:51,53», then the URL `…/JHN.6.51,53.RVR1960` (read from the clipboard). BLB exposes citation formats (SBL abbreviations, delimiters).
7. **Search from a selection** (Logos inline / Bible / library; Apple Books «Search») and **look up** (Kindle dictionary, Apple Books) sit next to highlight in the same menu.
8. **AI on selection** is now in Logos's first row («Explain», «Ask»). Out for Doctrina for good (PROJECT).

## 2. Which actions fit Doctrina

| Action | Who has it | Fit with Doctrina | Without an account? | Verdict [inference] |
|---|---|---|---|---|
| **Copiar cita** (text + reference + edition + link) | YouVersion, BLB, Logos, Apple Books | Strong: "no citation without an edition"; already built in the proposal (`citeBlock`) [repo] | Yes | Launch |
| **Copiar enlace** to this sentence / range | YouVersion (URL in the copy), Medium «Share» | Strong: the URL already carries the sentence (ROADMAP 2026-10-06). For a free range, a text fragment `#:~:text=` (supported from Chrome 81, iOS Safari 16.1, Firefox 131 per caniuse data [doc]) | Yes | Launch |
| **Subrayar** (one style) | all except Sefaria, BLB web, Biblia, TFR | Medium: a personal mark is neutral; demand is the strongest of all (§9) | Yes, in this browser (`localStorage`); sync later | Launch if Pedro wants it (local only), or later with accounts |
| Several colours | YouVersion 5, Logos 5, BG 4, Kindle 4 | Weak: colour coding asks the reader to build a scheme; Doctrina has one accent and bans "one colour per tradition"; readers could colour by tradition, which the site would then be displaying [inference]. Readwise ships one colour on purpose | Yes | No for launch; revisit if readers ask |
| Underline as a style | Apple Books, Logos | Weak: underline is already the link vocabulary (§0) | — | No |
| **Nota** | BG, Logos, Apple Books, Kindle, Hypothesis, Readwise | Medium; but a note kept only in a browser is easy to lose, and lost notes are the top complaint (§9) | Technically yes; risky | Later, with accounts |
| **Buscar en Doctrina** (the selection into ⌘K) | Logos, Apple Books | Strong: ⌘K exists in the design | Yes | Launch (low cost) |
| Definir / glosario | Kindle, Apple Books | Strong only for curated glossary terms (no generated definitions); terms already open in place as `term` links | Yes | Only when the selection is a glossary term [inference]; otherwise no |
| Lista «Tus subrayados» | Apple Books, Kindle Notebook, Readwise Notebook | Medium; useful to teachers [inference] | Yes, local | Launch together with Subrayar |
| Compartir to social / emoji reactions | BG (☺ reactions), YouVersion | Weak: devotional pattern, not a study one | — | No |
| Popular / top highlights | Kindle, Medium | **Against neutrality**: a crowd ranking of passages in a contested text concludes by proxy; also disliked by readers (§9) | — | No, for good |
| AI explain / ask | Logos | Out for good (PROJECT) | — | No |

## 3. Three compositions, in Doctrina's vocabulary

Shared rules for all three:
- **Tap stays the panel's.** A tap (no movement, no selection) on a sentence or verse opens the detail / panel as decided in ROADMAP "Now" 4. Highlighting never needs the tap.
- **One style, no palette.** Light: fill `rgb(240 200 60 / .28)`; dark: `rgb(214 168 101 / .20)`, both weaker than `mark` so the text keeps its ink and the page doesn't shout (YouVersion's failure). `box-decoration-break: clone`, radius 2, no padding change, so lines don't shift. Proposed as a new token `--color-mark-user` [inference: values to tune on the texture, contrast measured on texture as DESIGN §1 requires].
- **Four marked states, told apart.** Native selection (browser); panel open on a sentence = `accent-weak` fill (accent is «selection, current position», DESIGN §1); arrival = existing `mark` + 2 px accent bar, fading; user highlight = `mark-user`, persistent, no bar. Search matches stay in the search box only.
- **Merge, don't stack.** A new highlight that overlaps or touches an existing one in the same division becomes one highlight (Readwise's merge). With one style there is nothing to nest.
- **Remove where it is.** Selecting inside or tapping-and-holding an existing highlight offers «Quitar subrayado» (YouVersion's ⊖, Apple Books «Remove»).
- **Snap to words.** Ranges extend to whole words; a highlight may cross divisions and is stored per division [inference].
- **Reduced motion:** everything appears and disappears at once.

### A. «Frase entera» — the unit is the sentence or verse (YouVersion's model, Doctrina's unit)

- **How:** the panel or detail that a tap already opens gains one action in its action row: «Citar», «Copiar enlace», **«Subrayar»** (→ «Quitar subrayado» when it is highlighted). No selection toolbar at all; the browser's own selection still copies plain text.
- **What gets marked:** the whole sentence (sources) or the whole verse (Bible), the same unit the URL already carries. A verse highlight keys on the OSIS id, so it can also show in another translation of the same verse [inference].
- **Where it comes from:** YouVersion's sheet (`youversion-desktop-two-verses`), The Faith Received's verse tap.
- **Cost:** low. No new gesture, no conflict with the tap, anchors are stable ids (division + sentence index), nothing to re-anchor when a text is corrected.
- **Against:** no partial highlights, the most requested change in unit-only apps (§1, point 1). Two taps to highlight (open panel, then «Subrayar»).

### B. «Barra al seleccionar» — free range, small toolbar (Hypothesis / Logos / Bible Gateway)

- **Desktop:** drag (or Shift+arrows) over any words. On `pointerup` with a non-empty selection inside the reader column, a toolbar appears **below the last line of the selection**, its left edge at the selection's start, 8 px gap; it flips above when it would pass under the bottom of the viewport, and is clamped 8 px inside the 720 px column. Selections by keyboard show it after 300 ms without change.
- **Toolbar:** `panel` fill, 1px `rule-2`, radius 8, the floating shadow (DESIGN allows it on floating layers), height 36, text buttons ui 500 13.5 `ink-2` with hover fill: «Subrayar», «Copiar cita», «Copiar enlace», «Buscar». No icons-only buttons, no colours. On an existing highlight: «Quitar subrayado», «Copiar cita». Keys while it is open: **S** subrayar, **C** copiar cita, **Esc** closes and clears (Hypothesis shows its keys in the labels; Readwise uses H) [inference for the letters].
- **Motion:** opacity 0→1 and 4 px rise, 150 ms `ease-reveal`; hides in 100 ms on collapse or scroll start; after «Subrayar» the fill fades in over 200 ms (the same 200 ms as the arrival highlight), the selection collapses and the toolbar closes. A new selection while it is open moves it (re-measure, no stacking).
- **Phone and tablet:** long-press and the OS grab points make the selection (Apple Books, Kindle). The toolbar is **docked at the bottom**, full width, above the safe area, 56 px, `bg` + texture with a top hairline, the same four actions with 44 px hit areas (Bible Gateway's dock, `biblegateway-390-scripted-selection`). It appears 400 ms after the last `selectionchange` (handles fire continuously while dragging) and never covers the OS menu, which sits above the selection [memory]. If the panel's half sheet is open, the bar replaces the sheet's action row instead of stacking [inference].
- **Anchors:** division id + edition id + character offsets + the exact quote with 32 characters before and after (the W3C Web Annotation "text quote selector" Hypothesis uses [memory]). If an edition correction moves the text, the quote re-finds it; if it can't, the highlight is listed as not found rather than dropped [inference].
- **Where it comes from:** `hypothesis-desktop-selection-adder` (below, pointer), `logos-web-drag-selection` (below, two rows), `biblegateway-desktop-drag-selection`, `medium-desktop-selection` (above).
- **Cost:** medium to high: selection handling on touch, the tap-vs-select rule (a tap while a selection exists only clears it), re-anchoring.
- **Against:** reopens the 2026-10-06 "no free text selection" agreement; accidental selections (§9: «accidentally highlighting text», Verbum 2019; «not being able to undo whatever you've highlighted by mistake», Logos 2024 [review]) → needs an undo («Subrayado. Deshacer» for 5 s) [inference].

### C. «Frase, y rango si arrastrás» — A as the base, B's toolbar only on drag (hybrid)

- Tap → panel with «Subrayar» (whole sentence or verse), as in A. Drag on desktop or long-press on touch → B's toolbar for a partial range. One style for both, merged when they touch.
- **Why it might be the best fit:** the unit stays the default (cheap, stable, matches the URL), and the most requested refinement (part of a verse) exists for those who look for it. The two paths never compete for the same gesture.
- **Cost:** B's cost plus A's (small).
- **Against:** two ways to do one thing; the reader must discover the drag [inference].

**Recommendation [inference]: C if Pedro wants partial highlights at launch; A if launch should stay small.** B alone is weaker than C: it gives up the free, stable sentence highlight Doctrina already has the machinery for.

### Lists and review (all compositions)

- In the reader's bar: «Subrayados (n)» opens, in the side panel (sheet on phones), the work's highlights in text order: the quote in body 300 16.5/1.55 (3 lines max), the locator as a citation link, the date in ink-3. Tapping one scrolls there and runs the arrival highlight on it.
- A site-wide «Tus subrayados» page grouped by work, with «Copiar todo con sus citas» (one block per highlight, each with its reference and edition) [inference: useful for teachers preparing a class].
- Under the list, one quiet line: «Se guardan en este navegador.» It states a fact the reader needs (clearing the browser deletes them), so it is not an internal state in the sense of DECISIONS 2026-10-07 [inference; Pedro to confirm].

## 4. Local first, accounts later

| Piece | Works without accounts | Needs accounts (Supabase) |
|---|---|---|
| Copiar cita, Copiar enlace, Buscar | Yes, nothing stored | — |
| Subrayar, Quitar, list «Subrayados» | Yes: `localStorage`, keyed by work + edition + division (+ offsets and quote in B/C). Survives reloads, unlike YouVersion web (`youversion-desktop-after-reload`) | Sync across devices; backup |
| Export («Copiar todo con sus citas») | Yes | — |
| Notes | Technically yes, but one cleared browser loses them | Yes: notes come back with accounts (PROJECT) |
| Moving local highlights into an account | — | On first sign-in, offer to bring the browser's highlights in [inference] |

`localStorage` has no structural problem for this size (a highlight is ~200 bytes) [inference]. The account prompt, when it exists, should come at the list, never at the moment of highlighting (Bible Gateway and Logos break the reading there, §1 point 3) [inference].

## 5. Discarded, and why

- Colour palettes, underline styles, emoji reactions, social share sheets (§2).
- Popular / top highlights (neutrality; disliked, §9).
- A login wall or upsell at the moment of highlighting (BG, Logos).
- Whole-verse saturated fills and colours that keep full saturation in dark mode (YouVersion).
- A toolbar above the selection on touch (collides with the OS menu) [memory].
- AI «Explain» / «Ask» on a selection (Logos) — generated answers are out for good.
- **AI-slop list** (DECISIONS 2026-10-05, "Design principles"): cream + terracotta (TFR's verse tint and underline sit close), gold on navy, parchment textures, stock cathedrals / Bibles / hands, crosses as decoration, identical rounded shadow cards, gradients, ALL-CAPS tracked eyebrows (TFR «RECEPTION HISTORY», Sefaria «TOOLS»), «·»-joined meta strings, «→» glued to links (TFR «Open the Verse Desk→»), emoji (BG's reactions), icons in coloured squares, giant decorative quotes, Inter + centred bold hero, monospace locators, one colour per tradition (a palette invites it), squeezed parallel columns on mobile, dead affordances (BG's highlight dots that lead to a login).

## 6. Part B method

- **Corpus:** Apple's public review feed (`itunes.apple.com/{cc}/rss/customerreviews/…/json`, up to 500 «most helpful» + 500 «most recent» per app and store), 13,611 unique reviews: Kindle 2,351, Apple Books 1,941, YouVersion 2,542, Logos 1,291, BLB 1,004, Bible Gateway 973, Bible Hub 870, Olive Tree 870, Accordance 576, Verbum 554, Catena 301, Sefaria 182, Readwise Reader 156. Stores: US for all; MX, ES, AR for YouVersion, Logos, Kindle, Bible Gateway, BLB, Olive Tree, Verbum, Catena, Apple Books. Fetched 2026-10-21. [review]
- **Counts** are reviews that *mention* a feature by keyword (English and Spanish), not usage; one review can count for several features; keyword matching over-counts generic words. «pos» = 4–5★, «neg» = 1–2★. Treat them as orders of magnitude.
- **Not covered by the feed:** STEP, Perseus / Scaife, The Faith Received, Bible Hub web (no app reviews for the web products). Forum and press evidence used there instead.
- No product publishes feature-usage numbers that I found (same finding as `reader-side-panel.md` §3).

## 7. Mentions by feature (rough)

| Feature | Reviews mentioning | 4–5★ / 1–2★ | Where most |
|---|---|---|---|
| Highlighting | 1,020 | 729 / 192 | Kindle 188, Apple Books 187, Olive Tree 158, YouVersion 145 |
| Notes / annotations | 1,029 | 792 / 154 | Olive Tree 256, Kindle 141, YouVersion 131 |
| Lost highlights or notes, sync | 437 | 292 / 114 | Kindle 128, Olive Tree 97, Apple Books 78 |
| Commentary, Fathers | 875 | 820 / 26 | BLB 208, Bible Hub 160, Catena 149 (half of Catena's 301) |
| Original language, Strong's, interlinear | 714 | 652 / 45 | BLB 237, Bible Hub 151, Accordance 98 |
| Search | 863 | 599 / 197 | spread |
| Copy / share / cite | 613 | 491 / 81 | YouVersion 182 |
| Dictionary / look up | 562 | 482 / 54 | Kindle 115, BLB 111 |
| Ads (complaint) | 553 | 115 / 352 | Bible Gateway 373 |
| Reading plans, streaks, progress | 390 | 278 / 75 | YouVersion 128 |
| Typography (font, size, spacing) | 303 | 199 / 67 | Kindle 91, Apple Books 73 |
| Parallel / side by side | 302 | 267 / 23 | BLB 79, Olive Tree 67, Bible Hub 37 |
| Bookmarks | 250 | 143 / 81 | Apple Books 94 |
| Footnotes, cross-references | 224 | 200 / 19 | Olive Tree 54, BLB 49 |
| Highlight colours / underline | 163 | 129 / 22 | Kindle 44, Olive Tree 35 |
| Reading position memory | 160 | 103 / 38 | Bible Gateway 41, Kindle 38 |
| Page turn vs scroll (complaint about changes) | 113 | 36 / 61 | Apple Books 72 |
| Offline | 111 | 84 / 22 | Logos 23, YouVersion 21 |
| AI | 93 | 57 / 25 | Logos 37, Kindle 19, Readwise 17 |
| Dark mode | 68 | 33 / 21 | Apple Books 25 |
| Accidental taps / selections | 41 | 18 / 18 | Apple Books 16, Kindle 11 |
| Keyboard shortcuts | ~30 | — | Readwise, Logos |

## 8. Features readers praise or ask for, with fit and priority

Evidence strength: **strong** = hundreds of mentions across several apps, mostly in one direction, plus quotes; **medium** = dozens, or one product's docs; **weak** = a few quotes or [inference]. Priority is the agent's [inference]; launch / later / no.

| Feature | Evidence (quotes are [review], date and stars) | Fit with Doctrina | Cost | Priority |
|---|---|---|---|---|
| **Original language in reach** (tap a word: Greek/Hebrew, meaning) | Strong: 714 mentions, 652 positive. «You can tap a passage and it will allow you to look at the Hebrew or Greek Interliner for that passage» (BLB 5★, 2025); «it gets me closer to the Greek and Hebrew texts without having to know the languages» (STEP testimonial, curated, [snippet]) | Already a Key verdict; lexical meaning, transliteration first (PROJECT) | Medium (data in hand for John 6) | Launch (already planned) |
| **Church Fathers per verse** | Strong: 149 of Catena's 301 reviews; «the best reference material I have on the early church father's commentary» (Catena 5★, 2025); «Catena lets the user choose to see commentary from the fathers of the Church, turning off commentaries from other sources» (5★, 2024) | Key verdict; neutral, by date | Medium–high | Launch (already planned) |
| **Compare translations / side by side** | Strong: 302 mentions, 267 positive. «I can have the Greek side by side with the English and changing versions is a breeze without losing the other side» (Accordance 5★, 2025); «podes comparar versículos y traducciones» (YouVersion AR 5★, 2026) | Key verdict; stacked on phones (DECISIONS) | Low–medium | Launch (already planned) |
| **Highlight** | Strong demand: 1,020 mentions; partial-verse requests (§1). Strong risk: lost highlights are the top complaint — «with this latest release have lost all my highlights—several hundred» (Bible Gateway 1★, 2026-05); «cada vez que le da la gana se me borra todo lo que he escrito o subrayado» (Apple Books ES 1★, 2023) | Neutral personal tool; needs storage that doesn't lose data | A low, C medium–high | Pedro decides (§12 Q1–Q2); local only if at launch |
| **Notes** | Strong: 1,029 mentions. «A great resource to be sure, but it doesn't appear to have any way for a reader to add notes for one's own use» (Sefaria 4★, 2021); «i am desperate to have dated notes» (Kindle 4★, 2024) | Fits, but needs accounts to be safe | Medium + accounts | Later (accounts) |
| **Remember where I was** | Medium–strong: 160 mentions, complaints when it fails. «It resets back to Genesis everyday, when it used to hold my place» (Bible Gateway 3★, 2022); «It's only needs to do one thing hold my place» (Apple Books 1★, 2026-10) | Already in scope: ⌘K «Seguir donde dejaste» (DECISIONS 2026-10-05); local without accounts | Low | Launch |
| **Copy with the reference** | Medium: complaints when it goes. «Most recent update no longer allows copying to clipboard with verse reference» (Bible Gateway 2★, 2017); «Tampoco he conseguido encontrar la opción de copiar para cuando quieres enviarle a alguien una referencia bíblica» (Logos ES 4★, 2018); «It is impossible to correctly copy as a citation utilizing curly quotes» (Accordance 1★, 2025) | Strong (trust rule); exists | Low | Launch (exists) |
| **Search** | Strong: 863 mentions (praise and complaint) | ⌘K designed | Medium (pgvector later) | Launch (planned) |
| **Text size** | Medium: 303 typography mentions. «I love that I can change the font size as I have aged, and now require large print» (Olive Tree 5★, 2025); «Personalizar el tamaño de letra y fondo… lo hace muy funcional» (Kindle MX 5★, 2024) | Fits if limited to size (2–3 steps) in the reader; fonts and spacing stay designed [inference] | Low | Launch (size only) |
| **Calm, no ads** | Strong (negative): 553 mentions, 352 at 1–2★; Bible Gateway 373. «Way too many ads that make it impossible to literally read THE BIBLE» (BG 1★, 2026); «Content Second to None - But Ads» (Bible Hub 2★, 2024) | Already a principle («calm is the differentiator») | — | Principle, not a feature |
| **Dictionary / glossary lookup** | Strong for Kindle: «I can look up definitions of words by highlighting» (Kindle 5★, 2018) | Curated glossary only, in place (exists as `term`) | Low | Launch (exists) |
| **Spanish** | Medium: «Excelente aplicación pero por favor lancen la versión en español!!!» (Sefaria 5★, 2019); «wish it was in Spanish cus my mother doesn't know English» (Catena 5★, 2026); «I use the app in Spanish, when I search for a book and chapter it shows in english» (Logos 3★, 2026) | Core (bilingual, Spanish-first) | — | Launch (core) |
| **Cross-references / footnotes** | Medium: 224 mentions, 200 positive. «I can get lost in the word of God… as I tap through one cross-reference, commentary and a Greek word after another» (Bible Hub 5★, 2020) | Weak for generic cross-refs (an editorial reading; `reader-side-panel.md` §3); strong for a source's own notes and the passages each tradition cites | Low–medium | Later, only from the traditions' own texts |
| **Keyboard navigation** | Weak–medium: «It's keyboard shortcuts on the web version are amazing» (Readwise 5★, 2023); «No support for external keyboards» (Readwise 3★, 2022) | Fits a desktop study tool; ⌘K exists | Low | Later (reader: next/previous division, S/C for B/C) |
| **Offline** | Medium: 111 mentions, mostly praise where it works and anger where it fails («Resources do not fully download in IOS rendering it useless on an airplane», Logos 5★, 2018) | Web site; a PWA cache of read pages is possible | Medium | Later |
| **Dark mode** | Weak–medium: 68 mentions | Exists | — | Launch (exists) |
| **Reading progress** | Weak–medium: «I also love that it shows me the percent I'm at in the book… how many minutes I have left in a chapter» (Kindle 5★, 2025); «Need a scrollable progress bar, not a statement of percentage» (Apple Books 1★, 2023) | Fits long sources as a thin position line in the reader bar [inference]; streaks and plans don't (not a devotional app) | Low | Later (progress line); no (streaks, plans) |
| **Don't change the reading mode under people** | Medium (negative): 113 page/scroll mentions, mostly 1–2★ after Apple Books' change («Era una gozada pasar páginas…», ES 1★, 2022) | One scroll mode, kept | — | Principle |
| **Popular highlights** | Weak–medium (negative): «And popular highlights, ugh!» (Kindle 1★, 2026); press: a Redditor compared them to kids trespassing on your lawn, as summarised from [Gizmodo](https://gizmodo.com.au/?p=1212852) [snippet]; defenders like it in nonfiction ([snippet]) | Against neutrality | — | No, for good |
| **AI explain** | Mixed: 93 mentions; Logos 37 | Out for good | — | No |
| Focus mode | No evidence found in the corpus [inference] | The reader is already a full-screen layer | — | No separate feature |

**Top five beyond highlighting, by evidence:** (1) original language in reach — strong; (2) Fathers per verse — strong; (3) compare translations — strong; (4) remember where I was — medium–strong; (5) copy with the reference — medium, and the cheapest to get wrong. All five are already in Doctrina's scope; the evidence confirms the scope rather than adding to it. The one new, low-cost item the evidence adds is **text size in the reader** (medium).

## 9. Evidence specific to highlighting and touch

- **Lost data is the dominant negative.** 437 mentions of lost highlights/notes or sync (114 at 1–2★), across Kindle, Olive Tree, Apple Books, Bible Gateway. Readers screenshot their highlights as a workaround: «tengo que hacer captura de pantalla de lo que voy subrayando» (Apple Books ES 1★, 2023). → If Doctrina ships local highlights, the list must say where they live, and export must exist [inference].
- **Accidental selection is real on touch.** 41 mentions: «The highlighting feature is almost twice as twitchy and jumpy as before, and I find it even harder to remove highlighting that was done by mistake» (Apple Books 2★, 2023); «accidentally highlighting text» (Verbum 4★, 2019). → Readwise's auto-highlight on selection would make this worse; Doctrina should require one explicit tap on «Subrayar» and offer undo [inference].
- **Partial highlights are asked for wherever they're missing** (YouVersion, BLB, §1 point 1).
- **Colour is praised by people who colour-code** («I highlight lots of scripture in different colors based on the reading plan I'm using», Olive Tree 5★, 2024; «more color options for highlights (preferably a color picker)», Kindle 4★, 2024) [review]. This is a real use; the case against it for launch is Doctrina's design and neutrality, not lack of demand.

## 10. Costs at a glance [inference]

| Item | Cost | Depends on |
|---|---|---|
| A «Frase entera» + local list | Low (1 action, stable ids, `localStorage`) | The 05/06 decision on the panel |
| B / C toolbar, touch dock, re-anchoring | Medium–high | A text-anchoring model (quote + offsets) and the edition registry |
| «Copiar enlace» to a range (text fragment) | Low | — |
| «Buscar» from selection | Low | ⌘K |
| Text size control | Low | DESIGN reader tokens |
| Reading position («Seguir donde dejaste») | Low | ⌘K «Recientes» |

## 11. Not verified

- How Kindle, Apple Books and Readwise *render* highlights (colour, opacity, dark mode) and how they merge overlaps: help pages only, no screenshots.
- The iOS / Android edit-menu position over a selection [memory].
- Text-fragment support numbers come from caniuse's data file (Chrome 81, iOS Safari 16.1, Firefox 131) [doc]; not tested in Doctrina's targets.
- Medium's current visibility rules for highlights (its glossary vs a secondhand quote of support disagree) [snippet].

## 12. Open for Pedro

1. **Which composition for launch:** A «Frase entera» (whole sentence or verse, from the panel), B «Barra al seleccionar» (any words, toolbar), or C (A plus B's toolbar on drag)? Agent's recommendation: C if partial highlights matter at launch, else A. C and B reopen the 2026-10-06 "no free text selection" agreement for this one purpose.
2. **At launch or later?** Ship highlighting local-only now («Se guardan en este navegador.» under the list), or wait for accounts? The evidence says lost highlights are the top complaint; local-only with export is honest about it.
3. **One style only** (no colours, no underline), or do you want 2–3 colours despite the design and neutrality concerns?
4. **The four marked states**: panel-open sentence in `accent-weak`, user highlight in a weaker `mark`, arrival highlight unchanged. OK to test these in the proposal?
5. **Notes**: later with accounts (agent's view), or a local note now?
6. **Text size** in the reader (2–3 steps): add to the reader proposal?
7. **A verse highlight across translations**: show it when the reader switches from RV1909 to BSB (verse-level, possible in A), or only in the edition where it was made?
