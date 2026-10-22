# Reader: notes per source

Research for taking notes in the full-text reader (sources and Bible): **general notes** on the whole source, and notes **anchored** to anything the reader selects (a word, a sentence, a paragraph, a chapter or canon; at least one word). Asked by Pedro 2026-10-21: «agregar una funcionalidad para tomar notas y que queden guardadas, por cada fuente…». Research only: nothing here is decided. Builds on `docs/research/reader-highlighting-and-features.md` (highlighting, decided as option C in `DECISIONS.md` 2026-10-21) and `docs/research/reader-side-panel.md`; neither is redone here.

Tags: [observed] seen in a screenshot under `docs/research/reader-notes/` (file named) or, where marked, under `docs/research/reader-highlighting-and-features/` · [doc] the product's own help, docs or spec, read 2026-10-21 · [review] an App Store review, quoted, fetched 2026-10-21 · [snippet] seen only in a search-result summary, not opened · [repo] a file in this repo · [inference] the agent's reasoning, neither observed nor sourced · [memory] written from memory, to verify.

## Progress
- Status: done
- Done: brief read (AGENTS, PROJECT, DESIGN, DECISIONS 2026-10-21 reader entries and design principles, reader-highlighting-and-features.md, reader-side-panel.md, agent-ops); the published proposal read (https://claude.ai/artifact/NYBF1wY8WNz2rpDAPPKutn, v5) and its local sources screenshotted; 6 products inspected with Playwright at 1440×900 and 390×844 (16 screenshots kept), plus 5 reused from the highlighting run; help pages for Apple Books, Readwise Reader, Hypothesis, Notion, Google Docs, Zotero, W3C Web Annotation, MDN storage; review corpus extended from 13,611 to 15,760 unique App Store reviews (MarginNote 3, LiquidText, Zotero, ESV Bible, Readwise added), 1,493 of them about notes, classified by theme with quotes; three compositions; discards; open questions.
- In progress: none.
- Next: Pedro's answers to §11. Then the notes options on the same proposal page (05/06), beside v5 (main rule).
- Not done, and why: YouVersion web has no note action logged out (the verse sheet holds Destacar, Copiar, Comparar, Compartir and the sign-up box; DOM read 2026-10-21, sheet already in `reader-highlighting-and-features/youversion-desktop-verse-selected`); Kindle, Apple Books, Readwise Reader, Notion, Google Docs, Zotero and Olive Tree need a login or an app, so help pages and reviews stand in; Sefaria notes ask for an account (`reader-highlighting-and-features/sefaria-desktop-notes`), and its public source sheets were tried but are not a note-taking surface (screens dropped); the Amazon Kindle help page answered 503 to the fetcher and rendered only a nav to Playwright, so Kindle export facts are [snippet]. Hypothesis was loaded on a real page with public annotations (Project Gutenberg's *Pride and Prejudice*, 430 anchored annotations and 10 unanchored per its sidebar), its client injected by script; Reddit not tried (blocked in the previous run). Touch at 390 px is a phone viewport with touch events, not the OS long-press callout.

## 0. What bounds this in the repo

- **Notes were out «for now»** («Out for now: accounts, bookmarks, notes… Accounts, bookmarks and notes come back with Supabase», PROJECT "Scope"). Pedro's request reopens notes; whether they wait for accounts is the first open question (§11). [repo]
- **Highlighting is decided**: option C, «Subrayar» in the side panel for the whole sentence or verse, and a drag toolbar («Subrayar», «Copiar cita», «Buscar»; no «Copiar enlace») below the selection on desktop, docked at the bottom on touch; five tones with «Muestra junto a Subrayar»; a soft fill, never an underline, because underline means link (DECISIONS 2026-10-21). The published v5 page still says «Colores en la barra (elegido)» in its notes and shows five dots in the panel (`doctrina-proposal-desktop-panel`, from the local sources); DECISIONS records «Muestra junto a Subrayar» as chosen later the same night. The page needs that update before notes are added to it. [repo]
- **The highlight anchor already exists** in the proposal code: `{src, ed, div, a, b, q, c, id}`: source, edition, division, character offsets inside the division, the quoted text, colour (`propuesta-05-06/fuente.js`, `unitRange`, `addRanges`). Notes can reuse it. [repo]
- **The side panel** opens on a tap on a sentence or verse: title, action row («Citar», «Copiar enlace»), «Subrayar», then tabs that slide («Usos 1», «Traducciones 1»), then «Ver el detalle completo» (`doctrina-proposal-desktop-panel`, `doctrina-proposal-390-panel`). Sections without data don't appear (v3 notes). The panel must not repeat the tapped text at length (Pedro's rejection, `reader-side-panel.md` §0). [repo, observed]
- **The reader bar** holds «Volver a donde estabas», A− A+, the translation picker on the Bible, and «Subrayados n» once there are highlights (code `paintTools2`). Under 420 px «Volver» loses «a donde estabas» to make room (v5 notes). The bar has little room on phones. [repo]
- **«Citar» copies the short citation** («Concilio de Trento, ses. XIII, cap. 4 (1551)») (DECISIONS 2026-10-21). Any export uses that form. [repo]
- **Neutrality and no comments.** Comments are out (PROJECT); the site never concludes. Public or shared notes would be comments under another name [inference].
- **No internal states in proposals** («en preparación», placeholders) (AGENTS, main rule). [repo]

## 1. Products inspected (2026-10-21)

| Product | Note on a selection | General (whole-text) note | How a note shows in the text | List, export | Account |
|---|---|---|---|---|---|
| **Bible Gateway** (`biblegateway-desktop-note-click`, `-note-typed`, `-note-save`; `biblegateway-390-note-typed`, `-note-save`) | The drag toolbar's ✎ opens the right rail's «Reflect» tab, «Your Notes», headed **«Juan 6:53»**: the note anchors to the **verse**, though only a few words were dragged. A textarea with the placeholder «Enter a note here. What stood out to you in this passage? What do you think it means? How might you apply it to your life?», and «Save» / «Cancel» | At 390 the same «Reflect» tab, opened directly, is headed **«Juan 6»**: a chapter-level note | Not reached (saving needs a login) | Not reached | **«Save» goes to a full-page «Log In»**: «You must be logged in to save and sync your notes, highlights, favorites, and pinned resources». The reading context is gone. Whether the typed text survives the login was not checked |
| **Logos web, free** (`logos-web-add-note`) | Right-click on a selection → «Add note» opens a «Notes» tab beside the Bible | — | Not reached | Desktop app: note files, searchable [doc, wiki.logos.com/Notes points to "Notes Tool"; not read in full] | The tab is an upsell: «Create your free account to get started», «Create free account», «Sign in» |
| **Hypothesis** (`hypothesis-desktop-highlight-clicked`, `-sidebar-selected`, `-tab-page-notes`, `-tab-unanchored`; `hypothesis-390-sidebar-selected`) | Selection → adder «Annotate» / «Highlight» (seen in the previous run, `reader-highlighting-and-features/hypothesis-desktop-selection-adder`) | **«Page Notes» tab** and a «New page note» button on the sidebar's edge (button label read from the client's DOM) | Annotated ranges get a **flat yellow fill**; the right edge carries a **"bucket bar"**: small count tabs level with the annotated lines («6» in both screenshots, «3» further down at 390), and a total at the bottom («422»). Clicking a fill opens the sidebar filtered to those annotations («Clear filter: 3 selected») | Each card: user, date, **the anchored quote** (italic, with a blue left bar), then the note, reply and share icons. Tabs «Annotations 430», «Page Notes», **«Unanchored 10»**: notes whose text can't be found, kept, with the old quote **struck through** (`-tab-unanchored`) | Reading public notes: none. Writing: an account |
| **Genius** (`genius-desktop-annotation-open`, `genius-390-annotation-open`) | (Reading only; writing needs an account [inference]) | The song's "About" text above the lyrics | Annotated lines carry a **grey fill**; the open one is darker. Desktop: the annotation sits **in a right column, level with the line**, with a pointer to it. Phone: a sheet over a dimmed page that **echoes the annotated lines at its top** in a white band, then the annotation | — | — |
| **YouVersion web** (DOM read; sheet in `reader-highlighting-and-features/youversion-desktop-verse-selected`) | No note action on the web verse sheet when logged out | — | — | — | The app has notes, private or shared with friends («there are privacy settings so everyone can see them or just you», 5★ 2026-08 [review]) |
| **Doctrina proposal v5** (`doctrina-proposal-desktop-panel`, `doctrina-proposal-390-panel`) | — (no notes yet) | — | The tapped sentence in `accent-weak`; division numbers («cap. 2») in the left margin at desktop, above the paragraph on phones | «Subrayados n» in the bar opens the list in the panel | — |

### From help pages and docs [doc]

- **Apple Books** ([guide](https://support.apple.com/guide/iphone/annotate-books-iph17bf340c1/ios)): a note hangs on a highlight; deleting offers «Remove Note or Remove Highlight & Note». All notes and highlights live in one list: «Bookmarks & Highlights → Highlights», and «Tap a note to go to that location in the book». Several can be selected to share or delete.
- **Readwise Reader** ([docs](https://docs.readwise.io/reader/docs/faqs/highlights-tags-notes)): «Once highlighted, you can tap `T` to tag the highlight or `N` to add a note»; on wide screens notes and tags «appear in the right margin»; «when you hit `Enter` inside the highlight note field on web, it will save the note… use `Shift + Enter`» for a line break. **Document notes** (the whole document) live in the Notebook tab (`Shift + N`). Highlight tags and document tags are separate. Export: a `.md` file with an editable template.
- **Hypothesis** ([unanchored](https://web.hypothes.is/help/what-are-unanchored-annotations/), [page changed](https://web.hypothes.is/help/the-contents-of-a-web-page-i-annotated-changed-and-my-annotations-are-gone-what-can-i-do/)): «Annotations become Unanchored when the text in a web page changes and Hypothesis can no longer locate the original text… your annotation isn't deleted or hidden… The original anchor text will still appear on the annotation card, but it will be shown with a strikethrough.» A moved URL also orphans them.
- **Notion** ([help](https://www.notion.com/help/comments-mentions-and-reminders)): two scopes by design: a comment «at the top of [a page]» for «high-level feedback», and inline comments on selected text (`cmd/ctrl + shift + M`). Display: «Default to see all page comments in the right side of the page, or Minimal to show comment icons on the right side of the page».
- **Zotero** ([PDF reader](https://www.zotero.org/support/pdf_reader)): «Annotations added to notes will automatically include links back to the PDF page as well as citations»; «Add Note from Annotations» builds one note from all of a document's annotations; «Show on Page» returns to the spot.
- **Kindle** [snippet, no official page read]: the Notebook exports by email as HTML with a citation style (None, APA, Chicago, MLA); publishers cap how much text can be exported ([hongkiat](https://www.hongkiat.com/blog/export-kindle-highlights/)).
- **W3C Web Annotation Data Model** (Recommendation, 23 Feb 2017, [w3.org/TR/annotation-model](https://www.w3.org/TR/annotation-model/)): a TextQuoteSelector holds `exact`, `prefix` and `suffix`; a TextPositionSelector holds `start` and `end` and «is very brittle with regards to changes to the resource». Several selectors can describe the same segment, so a client can use whichever still resolves.

### What the products teach

1. **Two scopes are standard**: on a range, and on the whole thing (Hypothesis «Page Notes», Readwise document note, Notion page comment, Bible Gateway's chapter note) [observed, doc].
2. **A note quotes its anchor.** Every list (Hypothesis cards, Genius's phone sheet, Apple Books, Zotero) shows the anchored text with the note, so a note makes sense on its own [observed, doc].
3. **The text carries a quiet sign of a note**: Hypothesis's count tabs at the edge, Notion «Minimal» icons on the right, Genius's grey fill [observed, doc].
4. **Notes that lose their text are kept, not dropped** (Hypothesis «Unanchored», struck through) [observed, doc].
5. **Bible products anchor notes to the verse, or the chapter, even after a word selection** (Bible Gateway's «Juan 6:53» heading after a partial drag) [observed].
6. **Every product that saves notes asks for an account at the moment of saving**, and Bible Gateway leaves the page to do it [observed].
7. **The squeezed sidebar on phones** (Hypothesis at 390 shares the width with the text, `hypothesis-390-sidebar-selected`) and the **devotional prompt** (Bible Gateway's «How might you apply it to your life?») are the two patterns that don't fit Doctrina [observed; fit is inference].

## 2. User evidence

**Corpus.** The highlighting run's 13,611 App Store reviews (Kindle, Apple Books, YouVersion, Logos, Blue Letter Bible, Bible Gateway, Bible Hub, Olive Tree, Accordance, Verbum, Catena, Sefaria, Readwise Reader; US plus MX, ES, AR for nine), plus 2,149 new US reviews of note-heavy apps (ESV Bible 736, LiquidText 717, MarginNote 3 360, Readwise 217, Zotero 119): **15,760 unique**. **1,493 mention notes** («note», «nota», «annotat…», «apunte»): 1,086 at 4–5★, 267 at 1–2★. Most: Olive Tree 257, LiquidText 216, Kindle 141, Apple Books 132, YouVersion 131, Logos 108. [review]

Counts are reviews among those 1,493 that match a theme by keyword; one review can count for several; keywords over-count. Orders of magnitude only.

| Theme | Reviews | 4–5★ / 1–2★ | Where most |
|---|---|---|---|
| Note linked to a highlight (both in one review) | 425 | 337 / 53 | Olive Tree 88, YouVersion 66, Kindle 60 |
| Lost or erased | 256 | 144 / 87 | Olive Tree 38, LiquidText 35, Apple Books 34, YouVersion 31, Bible Gateway 26 |
| Sync across devices | 196 | 146 / 36 | Olive Tree 57, LiquidText 30, Accordance 20 |
| Export (file, email, Word, PDF) | 192 | 99 / 58 | LiquidText 79, MarginNote 36, Apple Books 26 |
| Tags, folders, organising | 186 | 142 / 26 | LiquidText 46, Olive Tree 45, MarginNote 27 |
| Praise for note-taking itself | 156 | 138 / 12 | Olive Tree 32, YouVersion 25, LiquidText 21 |
| Formatting (bold, bullets, «like a word document») | 136 | 95 / 19 | Olive Tree 29, LiquidText 27 |
| Seeing notes in the text (icon, margin, clutter) | 110 | 71 / 26 | MarginNote 34, Olive Tree 16, LiquidText 16 |
| Account or sign-in | 70 | 52 / 14 | Olive Tree 20, YouVersion 15 |
| General notes (book, chapter, journal) | 43 | 36 / 4 | YouVersion 8, LiquidText 6 |
| Typing (keyboard, small box) | 35 | 22 / 7 | Olive Tree 8, Kindle 6 |
| Privacy, public notes | 25 | 19 / 5 | YouVersion 14 |
| Dated notes | 22 | 14 / 4 | YouVersion 5, Apple Books 4 |
| Notes follow across translations / tied to a verse | 19 + 16 | — | Olive Tree 13 |

### Praised (what to copy)

- **Notes that follow the verse across translations** (medium: few reviews, all Olive Tree, very specific). «if I highlight or post a note on the verse, instead of a word, the notes and highlights track through the different versions of the Bible» (Olive Tree 5★, 2025-06); «if I change translations? All notes transfer over too» (Olive Tree 5★, 2024-06); the friction where it is unclear: «The process for attaching a note to a verse in a particular translation is quite different from attaching it so that it's visible across all translations» (Olive Tree 5★, 2021-10). [review]
- **A sign in the text that a note is there** (medium, mostly asked for by its absence). «if you add a note to a text you will not see any indication of that note when scrolling through the passage. Notes can be found under the Notes tab, but this is not helpful if you are rereading a passage» (ESV 2★, 2024-08); «There's no indication of the note being available with the verse. So I'm not sure it's much help. Not like writing in the margins of a paper Bible» (YouVersion 5★, 2025-12); «it would be great to have some kind of visual indicator on that page/verse» (YouVersion 5★, 2026-02); «I like how when you add notes it puts a note icon next to the verse… Great for the next time you come back and read!» (Logos 5★, 2023-01). The counterweight: «the note icon on the text is jarring to look at» (Kindle 4★, 2024-08). [review]
- **A note on a word, not only a verse** (medium): «I love that you can highlight specific words and take a note on a word, not just a whole verse» (Olive Tree 5★, 2025-02); «notes go where you want them in the verse, not just in the margins» (Olive Tree 5★, 2024-12). [review]
- **General notes beside anchored ones** (weak–medium): «being able to take notes on specific verses or just general notes & even categorize them» (Olive Tree 5★, 2025-02). [review]
- **Search across all notes, and tags** (medium): «The note taking system has a great search feature so you can search all of your notes at one time. It also allows you to use hashtags and tags» (Olive Tree 5★, 2026-07); 186 mentions of tags or organising, mostly positive. [review]
- **A reference typed in a note becomes a link** (weak, one review, precise): «puse una cita bíblica en las notas y se pone en azul y al seleccionar la cita me manda al texto» (Olive Tree MX 5★, 2026-09). [review]
- **Notes surviving a lost device** (medium): «When my old device broke down… I went to my account And all of my notes, all of my highlights everything-Right there!» (Olive Tree 5★, 2025-12). [review]
- **Teachers build classes from notes** (weak–medium): «I have prepared studies to share at my church by using all these features and emailing to myself the complete study with all in it, my words, Bible references, whole verses» (YouVersion 5★, 2025-06); «When preparing for ministry, sermons, Bible study, funerals… I just write the notes in the little note windows» (Olive Tree 5★, 2022-11). [review]

### Complained about (what to avoid)

- **Losing notes** (strong: 256 reviews, the top negative, worst after app updates). «14 Years of taking careful sermon and study notes, they are completely 100% gone» (Bible Gateway 1★, 2026-05); «it erased every single one of my notes for every book» (Bible Gateway 2★, 2026-08); «my notes and annotations have completely disappeared… It destroys trust in the app» (Apple Books 1★, 2026-10); «I have to write notes and then exit for it to save, and I even make duplicates» (LiquidText 2★, 2025-02). [review]
- **No way out** (medium–strong: 192 export mentions, 58 negative). «There is currently NO WAY to export or share notes, highlights, or quotes from a book at all» (Apple Books 2★, 2024-06); «I request if we can export all of our notes somehow to somewhere» (Olive Tree 5★, 2026-07); «some part of this app should be open source so that there is always a clear way to know your notes are not trapped in a proprietary format» (MarginNote 3★, 2023-10). [review]
- **Too many steps between a thought and the note** (medium). «the multistage process of having to highlight, select 'add note', then start writing… is so slow I often lose my thought» (Apple Books 2★, 2025-05); «I have to click and drag the passage, choose to highlight it. Then if I wanted to add a note, I have to click and drag again to add the note» (Olive Tree 5★, 2024-04). [review]
- **Citations forced into every copy** (weak, one review, but it names a real trap for «Citar»): «pasting text from Books into note-taking apps… always pastes a citation with the name of the book and author -every time- and there's no way to turn this off» (Apple Books 2★, 2025-09). [review]
- **Truncated notes and cramped editors** (weak–medium): «they've decided to only show truncated notes—not offering the option to view highlights or notes in full» (Apple Books 3★, 2023-08); «It's tiny and very squished together» (YouVersion 5★, 2024-12). [review]
- **The mark jumping off its words** (weak): «about 1/4 of the time, when i highlight or attach a note, my mark will jump to somewhere else on the page» (Apple Books 4★, 2026-09); «Notes also shift around on their own» (LiquidText 4★, 2024-04). [review]
- **Dated notes** asked for (weak): «i am desperate to have dated notes» (Kindle 4★, 2024-08; also quoted in the highlighting research). [review]
- **Spanish readers** talk about notes as part of the basic kit, not as a complaint: «subrayar, tomar notas y compartir versículos, es un todo en unos» (YouVersion MX 5★, 2026-10); «escribir notas en el lateral. Las opciones que da el Kindle son muy muy pobres» (Kindle ES 2★, 2026-10). [review]

### Not found

- No product publishes how many readers take notes. Searching notes is rarely mentioned (Olive Tree, LiquidText), so its weight is unknown. Markdown is never asked for by name in this corpus; «formatting» is (136). [review]

## 3. Scope and anchoring for Doctrina [inference unless tagged]

### Three scopes, one model

| Scope | What the reader picks | Stored as | Shown in another edition or translation |
|---|---|---|---|
| **Fuente** (general) | Nothing: the whole source (Trento, ses. XIII; the Gospel of John; or a whole book of the Bible?) | `{src}` | Always |
| **División** (sentence, verse, chapter, canon) | Tap a sentence or verse → panel → «Nota»; in the editor, «Sobre esta frase» or «Sobre todo el cap. 2» («Sobre este versículo» or «Sobre todo el capítulo 6» on the Bible) | `{src, div}` (+ sentence index for a sentence); the division is the work's own numbered unit and the Bible's OSIS verse id (`John.6.53`) [repo: PROJECT data architecture] | **Yes, in every edition**: the id is the same in RV1909 and BSB. Olive Tree readers praise exactly this (§2) |
| **Palabras** (≥ 1 word, any range) | Drag (long-press on touch) → toolbar → «Nota» | the highlight anchor `{src, ed, div, a, b}` + quote `q` + 32 characters of `prefix` and `suffix` (W3C TextQuoteSelector + TextPositionSelector [doc]); a range across divisions stores `div` and `divEnd` | **Only in its edition**, because words don't line up across translations (the 2026-10-06 decision already says sentences don't match across editions [repo]). In another edition the note still shows at its **division** («1 nota en RV1909»), its quote in the original edition, with «Ver en RV1909» |

- **A word note degrades to its division, never disappears.** That answers Olive Tree's confusion (one review above) without asking the reader to choose «this translation» or «all translations».
- **When an edition's text is corrected** (likely: the content is draft): re-find the range by offsets; if the text there differs from `q`, search the division for `prefix + q + suffix`, then `q` alone; if none is found, the note moves to «Sin ubicar» at the end of the list, with its quote in `ink-3` and «Este texto ya no está en esta edición». Never deleted (Hypothesis «Unanchored» [observed]). Hypothesis's fuzzy matching uses an approximate string search [memory: diff-match-patch]; for Doctrina's few, short, curated texts, exact search with prefix/suffix is likely enough.
- **Snap to words**, as highlights do; minimum one word (Pedro).

### Note and highlight

| Option | How | For | Against |
|---|---|---|---|
| **N1. A note has no fill of its own** (recommended) | «Nota» on words or a sentence marks nothing in colour; the anchored words show only while the note is open or hovered, in `accent-weak` (the «panel open» state). If the range is already highlighted, the note joins that highlight (one object, Apple Books's «Remove Note or Remove Highlight & Note» [doc]) | Colours stay the reader's own scheme; a margin sign does the "there is a note" job (§4); no sixth colour | A word note is invisible until hovered or opened |
| **N2. A note highlights** in the last colour | Kindle and Apple Books do this [memory for Kindle; doc for Apple Books] | One look shows where | Every note adds a fill; the colour loses its meaning; more noise |
| **N3. A note draws a thin mark under the words** | — | Precise | Underline means link in Doctrina (DESIGN §5, DECISIONS 2026-10-21): **discarded** |

**One step, not two.** After «Subrayar» in the toolbar, the toolbar stays for 2 s with «Nota» focused («Subrayado. Deshacer» shows meanwhile), so highlight + note never needs a second drag (Olive Tree complaint, §2).

## 4. Where it lives, with the least noise [inference unless tagged]

| Place | What it holds | Noise |
|---|---|---|
| **Drag toolbar** (decided pattern) | «Subrayar ●», **«Nota»**, «Copiar cita», «Buscar». Key **N** (Readwise's key [doc]); S, C, Esc as now | One word more in a bar that only exists while dragging |
| **Side panel** (tap on a sentence or verse) | The action row becomes «Citar», «Copiar enlace», «Subrayar ●», **«Nota»**. If the division has notes, a tab **«Notas n»** appears first among the sliding tabs («Notas 2», «Usos 1», «Traducciones 1»); with no notes there is no tab (rule: sections without data don't appear [repo]) | Nothing new until the reader has notes |
| **The text** | A sign in the margin (§5, composition A) | One small mark per noted division |
| **Reader bar** | Today «Subrayados n». Proposed: **one** button «Tus notas n» (n = notes + highlights) opening the source's list in the panel, with tabs «Notas» and «Subrayados»; the source's general note sits at the top of «Notas». On phones it fits where «Subrayados» was | Replaces a button instead of adding one |
| **Source page / reader head** | Nothing by default. A general note shows only once it exists: one line under the reader's title, «Tu nota sobre esta fuente», folded; tap unfolds it (approved «Despliegue») | Invisible for readers who never write one |
| **Site-wide «Tus notas»** | All sources, grouped by source in reading order, a search box over notes and quotes, «Copiar todas con sus citas», «Descargar». Reached from ⌘K («Tus notas» among «Recientes») [inference: no sidebar entry, to keep the documentation-style tree clean] | A page of its own, not in the tree |

**The editor.** Inside the panel (sheet on phones), never a modal over the text:
- Head: the locator and the anchor in one line, clamped to two («cap. 2: “Quiso ademas que se recibiese…”»), `ink-3`, so the note makes sense alone (§1 point 2) without repeating the passage at length (Pedro's panel rule).
- Scope line for division notes: a small segmented control «Esta frase» / «Todo el cap. 2» (Bible: «Este versículo» / «Todo el capítulo 6»).
- Field: body 300 16.5/1.55 (the quote style of the «Subrayados» list, `reader-highlighting-and-features.md` §3), grows with the text, no fixed box. Plain text with line breaks; a Bible reference typed in it («Jn 6,53», «Juan 6:53») becomes a citation link that opens the citation window (Olive Tree MX praise, §2). No formatting toolbar at launch.
- **Saves as you type** (400 ms after the last key), a quiet «Guardada» in `ink-3`; no «Guardar» / «Cancelar» (Bible Gateway's pair leads to a login; LiquidText readers «exit for it to save»). Enter = new line; Esc or ⌘/Ctrl+Enter closes (already saved). Empty on close = no note.
- Foot: the date («21 oct 2026», edited date if changed; «dated notes», §2) and «Borrar nota» → «Nota borrada. Deshacer» for 5 s (same pattern as highlights).

**Export.** «Copiar todas con sus citas» (plain text, the decided short citation) and «Descargar» (`.md`, also the backup while notes live in the browser). Example for one note:

> «Quiso ademas que se recibiese este Sacramento como un manjar espiritual de las almas» Concilio de Trento, ses. XIII, cap. 2 (1551).
> Comparar con Agustín, Tratado 26 sobre Juan.
> 21 oct 2026

(The citation goes only in exports and «Citar», never forced into a plain copy of reader text; Apple Books complaint, §2.)

## 5. Three compositions, in Doctrina's vocabulary [inference unless tagged]

Shared by all three: the scopes of §3, N1, the entry points and editor of §4, export, private by default, nothing animates under `prefers-reduced-motion`.

### A. «Marca en el margen» (recommended)

- **In the text:** in the left margin where the division number lives («cap. 2», ui 12 `ink-3`), a second line under the number: «1 nota» / «2 notas», ui 12 `ink-3`, no icon. On phones the number sits above the paragraph; the mark goes at the right end of that line. Hit area ≥ 44 px (DESIGN, touch rule). Hover or focus: the anchored words of every note in that division get `accent-weak` (180 ms fade); tap or Enter: the panel opens on that division with «Notas» as the current tab.
- **References:** Hypothesis's count tabs level with the lines (`hypothesis-desktop-highlight-clicked`), Notion's «Minimal» icons [doc], Logos's icon by the verse (praised, §2); text instead of an icon because Kindle's icon reads as «jarring» (§2) and icons in coloured squares are on the slop list.
- **Motion:** the mark fades in 200 ms when a note is saved; the panel's tabs «Deslizar» (marker 340 ms, content 16 px, DESIGN §4) when «Notas» appears or is chosen; the editor unfolds with «Despliegue» (open 220 ms, close 160 ms, as the sidebar and «Leer en latín»); lists enter with the approved cascade (`row-reveal`, 420 ms `ease-reveal`, 60 ms apart; FLIP 380 ms when one is deleted).
- **Touch:** long-press → OS selection → the docked toolbar 400 ms after the last `selectionchange` (decided) with «Nota»; «Nota» opens the sheet (max 78vh) with the field focused; the sheet sizes to `visualViewport` so the keyboard never covers the field; the selected words stay visible above the sheet (Genius echoes them at the sheet's top on phones, `genius-390-annotation-open`; Doctrina keeps them in the text instead).
- **Keyboard:** N in the toolbar and the panel; **Shift+N** in the reader opens the general note (Readwise's key for document notes [doc]); Tab reaches each margin mark in text order; Esc closes the editor, then the panel (existing Esc order).
- **Cost:** low–medium. Reuses the highlight anchor, the panel, its tabs and the toolbar; new: the margin mark, the editor, the list tab, re-anchoring.

### B. «Notas al costado» (wide screens)

- From 1280 px with the panel closed, each note shows as a short card (first two lines, its date) in a 240 px column right of the 720 px reader column, level with its division, like Genius on desktop (`genius-desktop-annotation-open`), Readwise («appear in the right margin» [doc]) and Notion «Default» [doc]. Cards that would overlap stack downwards with an 8 px gap. Opening the panel hides them (same side). Below 1280 px and on phones: A.
- **For:** notes are read while rereading, like a paper margin (the YouVersion reviewer's «writing in the margins», Kindle ES «escribir notas en el lateral»).
- **Against:** the most noise; collides with the panel's side; stacking and alignment on long divisions; two behaviours to learn. **Cost:** high.

### C. «Solo en tu cuaderno»

- Nothing in the text. Notes live in «Tus notas» (bar) and in the panel's «Notas» tab when the reader taps a sentence that has one.
- **For:** zero noise; least to build.
- **Against:** the complaint with the clearest wording in the corpus: notes nobody sees when rereading (ESV, YouVersion, §2). **Cost:** low.

**Recommendation:** A. B only as a later desktop option if readers ask; C fails the rereading case.

## 6. Storage: this browser now, accounts later [inference unless tagged]

| | Browser only (now) | With accounts (Supabase, later) |
|---|---|---|
| Where | `localStorage` (notes are small: a few hundred bytes each) or IndexedDB if notes grow; ask `navigator.storage.persist()` on the first note | `notes` table with row-level security (PROJECT data architecture [repo]) |
| Risk | Data is best-effort by default and can be evicted; persistent mode is only cleared by the user ([MDN](https://developer.mozilla.org/docs/Web/API/Storage_API/Storage_quotas_and_eviction_criteria) [snippet]); Safari has deleted script-writable storage after 7 days without a visit to the site since 2020 ([summary](https://mjtsai.com/blog/2020/03/26/safari-13-1-third-party-cookie-blocking-and-7-day-script-writeable-storage/) [snippet]; current behaviour not verified). For a reader who studies weekly on an iPhone, notes could vanish | Sync, backup |
| What the reader sees | «Se guardan en este navegador.» under the list (as for highlights), and «Descargar» as the backup | On first sign-in: «Traer las notas de este navegador» |

Losing notes is the top negative in the corpus (256 reviews) and Safari's 7-day rule hits the primary reader (young, on a phone) [inference]. So browser-only notes are a real risk, larger than for highlights (a note is the reader's own writing). Options for Pedro in §11.

## 7. Implementation sketch [inference]

- **Data:** one `notes` list per site, versioned: `{id, v: 1, src, scope: 'fuente' | 'division' | 'palabras', div?, sent?, divEnd?, ed?, a?, b?, q?, pre?, suf?, hl?: highlightId, text, created, updated, lost?: true}`. Same key scheme as highlights so one export holds both.
- **Rendering:** the margin mark is computed per division from the list (no DOM ranges stored); word ranges are resolved only on hover or open, with the same `unitRange` / offset code highlights use.
- **Re-anchoring** runs once per source and edition on open, caches the result, and flags `lost` instead of deleting.
- **Feature folder:** `src/features/reader/` keeps notes with highlights (one domain); the site-wide page imports the same data layer, not the feature (`app → features → lib`, PROJECT) [repo for the rule].
- **Later with Supabase:** the same shape as rows; `updated` decides conflicts (last write wins per note).

## 8. Discarded, and why

- **Public or shared notes** (YouVersion's friends, Hypothesis's public layer): comments under another name, out by PROJECT; a crowd layer over contested texts concludes by proxy [inference].
- **A login or upsell at the moment of saving** (Bible Gateway's full-page «Log In», Logos's «Create free account») [observed].
- **Devotional prompts** in the field («How might you apply it to your life?», Bible Gateway): Doctrina is a study tool, not devotional (PROJECT). An empty field with the placeholder «Escribí tu nota» is enough [inference].
- **«Guardar» / «Cancelar»**: autosave instead (lost-work complaints).
- **A sidebar that squeezes the text on phones** (Hypothesis at 390, `hypothesis-390-sidebar-selected`) and a **full-screen sheet that hides the text** (Genius phone, Catena in the side-panel research).
- **A fill or underline per note** (N2, N3), and note icons in the reading text (Kindle «jarring»).
- **Formatting toolbar, Markdown, handwriting, tags at launch**: tags are praised (186) but add a vocabulary to manage; later if teachers ask [inference].
- **AI summaries of notes**: generated answers are out for good (PROJECT).
- **AI-slop list** (DECISIONS 2026-10-05, "Design principles"): cream + terracotta, gold on navy, parchment textures, stock cathedrals / Bibles / hands, crosses as decoration, identical rounded shadow cards (the margin cards of B must not become these: no shadow, hairline only), gradients, ALL-CAPS tracked eyebrows, «·»-joined meta strings (the phone mark is «cap. 2» and «1 nota» at the two ends of a line, not «cap. 2 · 1 nota»), «→» glued to links, emoji, icons in coloured squares (the margin mark is a word, not an icon), giant decorative quotes (the editor's anchor line is plain `ink-3` text, not a quote band), Inter + centred bold hero, monospace locators, one colour per tradition, squeezed parallel columns on mobile, dead affordances (a «Nota» that opens a login).

## 9. Costs at a glance [inference]

| Piece | Cost |
|---|---|
| «Nota» in toolbar and panel, editor with autosave, division and word scopes | Medium (reuses highlight anchors and the panel) |
| Margin mark (A) | Low |
| «Notas» tab in the panel, «Tus notas» in the bar with two tabs | Low–medium |
| General note (Shift+N, head line) | Low |
| Edition carry-over (division notes everywhere, word notes degrade) | Low (ids already exist) |
| Re-anchoring and «Sin ubicar» | Medium |
| Export («Copiar todas con sus citas», `.md`) | Low |
| Site-wide «Tus notas» with search | Medium |
| B «Notas al costado» | High |
| Accounts and sync | High, separate project |

## 10. Not verified

- Kindle's current export options and limits, and how Kindle and Apple Books draw a note in the text: help pages and snippets only.
- Safari's 7-day storage rule as it stands in 2026, and whether `navigator.storage.persist()` exempts a non-installed site from it [snippet].
- Whether Bible Gateway keeps the typed note after the login detour.
- Hypothesis's anchoring algorithm (approximate matching) [memory].
- How Olive Tree draws its note icons in the text (reviews only).

## 11. Open for Pedro

1. **When:** notes in this browser at launch (with «Se guardan en este navegador.» and «Descargar» as backup), or wait for accounts? Agent's view: a note is the reader's own writing and Safari may delete local data after 7 days without a visit, so either launch with accounts, or launch local with a visible «Descargar» and the persist request, knowing the risk.
2. **Composition:** A «Marca en el margen» (agent's recommendation), B «Notas al costado» on wide screens, or C «Solo en tu cuaderno»?
3. **Note and highlight:** N1, a note has no colour of its own and joins a highlight if there is one (recommended), or N2, every note highlights in the last colour?
4. **The bar:** merge «Subrayados» into one «Tus notas n» with two tabs, or keep two buttons?
5. **General notes:** one per source, or several? And is a whole book of the Bible a "source" (one general note for John), or the whole Bible?
6. **Word notes in another translation:** shown at their division with «1 nota en RV1909» (recommended), or only in the edition where they were written?
7. **Site-wide «Tus notas»** at launch, or only the per-source list?
8. **Auto-linked references** inside notes («Jn 6,53» becomes a link): at launch or later?
