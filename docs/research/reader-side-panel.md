# Reader side panel: what it should contain

Research for the side panel that opens when a reader taps a sentence of a source or a Bible verse in the full-text reader (half sheet on phones). Asked 2026-10-21, after Pedro rejected the panel content in https://claude.ai/artifact/NYBF1wY8WNz2rpDAPPKutn. That panel repeated the selected text at length, smaller than the main text, and showed the Latin in a poor format. Research only: nothing here is decided.

Tags: [observed] seen in a screenshot under `docs/research/reader-side-panel/` (file named) · [doc] the product's own help, docs or store page, read 2026-10-21 · [snippet] seen only in a search-result summary, not opened · [repo] a file in this repo · [inference] the agent's reasoning, neither observed nor sourced · [memory] written from memory, to verify.

## Progress
- Status: done
- Done: brief read (AGENTS, PROJECT, DECISIONS, ROADMAP "Now" 4 and the notes on screens 05–07, analogs.md, niche.md, DESIGN.md reader and citation window); the published proposal read (`propuesta-05-06/v1/fuente.js`, `compactHTML`); 13 products inspected with Playwright at 1440×900 and 390×844 (39 screenshots kept); feature inventory; three compositions; the original-language answer; discards; open questions.
- In progress: none.
- Next: Pedro's answers to §7. Then build the panel as a new option on the same proposal page, kept beside the current one (main rule). Not done: STEP's word panel at 390 px (scripted taps didn't open it); Accordance and Olive Tree have no web reader I could open (only download pages); Denzinger skipped on purpose (2026-10-14 lesson in `research-fanout.md`: an agent read an unlicensed Denzinger scan).

## 0. What the rejected panel held

Pedro saw this (published v1, `compactHTML` in `scratchpad/propuesta-05-06/v1/fuente.js`), in this order: the division title; **the whole division text again** (Bible: the verse; Trent: every sentence, with the tapped one marked) and its edition line; «En griego, palabra por palabra» as chips (Bible); **«En latín» as a full paragraph** in small type (Trent); «Otras traducciones» with the full text of each; «Dónde se usa en Doctrina»; then «Abrir el detalle completo» and «Copiar cita». So the panel was three copies of the same passage, stacked under the passage the reader had just tapped. [repo]

The session's current local version (`propuesta-05-06/fuente.js`, 19:00) has already cut it to: title, «Abrir el detalle completo», «Citar», «Dónde se usa». That is cleaner, but it leaves out what the reader most likely tapped for (§1, §3). [repo]

## 1. Who taps, and why

From `docs/PROJECT.md`:
- **Primary reader:** "the serious searcher, often young and Spanish-speaking, who watches hours of YouTube debates and wants the real documents".
- **Secondary readers (likely payers):** "teachers, students, catechists".
- **Key features (owner verdicts):** objections in depth; a verse page with "as much patristic commentary as exists"; "original-language words for any word of a verse: transliteration first … literal lexical meaning"; compare translations; earliest witnesses.
- **Also "yes":** copy citation with exact reference; context of a citation; authority level; term explanations in place; word study; video commentary per tradition.

The jobs below come from those lines. Each one is a question that reader brings when tapping a sentence or verse heard in a debate. Spanish UI wording in «».

| # | Job (the reader's question) | Grounding | Sentence or verse |
|---|---|---|---|
| J1 | «¿Qué dice exactamente el original?» Is the translation the debater read faithful? | PROJECT "wants the real documents"; Key "original-language words"; DECISIONS 2026-10-20 «Latín · original» label | both |
| J2 | «¿Qué significa esta palabra o este término?» (*transubstanciación*, σάρξ) | PROJECT "term explanations in place", "literal lexical meaning" | both |
| J3 | «¿Quién usa este texto, y para qué?» Where it is used in Doctrina, by which tradition | ROADMAP note 2026-10-06 («Dónde se usa en Doctrina»); one tradition at a time | both |
| J4 | «¿Qué escribieron los primeros cristianos sobre esto?» | PROJECT Key: verse page patristics, earliest witnesses | mostly verse |
| J5 | «¿Cómo lo traducen otras Biblias?» | PROJECT Key: compare translations | verse (a source has 1–2 translations) |
| J6 | «¿Cómo lo cito?» | PROJECT "copy citation with exact reference" | both |
| J7 | «¿Qué autoridad tiene esto?» (dogma, definitive doctrine…) | PROJECT "level of authority"; DECISIONS 2026-10-15 grades | sentence |
| J8 | «¿Dónde más dice esto la Escritura?» / «¿Qué pasajes cita este texto?» | [inference] from the verse-page and Scripture-dossier scope | both |
| J9 | «¿Quién responde a esto?» A video or the objection page on this very passage | PROJECT Key: objections, videos per verse | both |

[inference] Which of these is asked most often is not measured anywhere I could find (§3, evidence). The order in §4 follows the owner's "Key" list first, then what the products put first.

## 2. Products inspected (selected state, 2026-10-21)

Desktop is 1440×900; phone is 390×844 with an iPhone user agent. Every claim in this table was checked against the screenshot named.

| Product | What opens on tap | Holds, in order | Repeats the selected text? | Density and folding | Phone |
|---|---|---|---|---|---|
| **Sefaria** (`sefaria-desktop-connections`, `-commentary-list`, `-commentary-text`, `-language-menu`, `sefaria-390-tap-verse`) | Right panel «Resources», ~460 px; the verse gets a pale blue band in the text | About this Text · Table of Contents · Search in this Text · Translations (47) · RELATED TEXTS: Commentary (958), Talmud (36), Midrash (157), Halakhah (22), More · RESOURCES: Sheets (992), Web Pages, Topics (7), Manuscripts (1)… · TOOLS: Dictionaries, Compare Text, Notes, Share… | **No.** The panel holds only categories and counts; the reference sits in the reader's header («Genesis 1:1, Revised JPS, 2023») | One line per category with a count. Drill-down happens inside the panel: Commentary → list of commentators, each with a one-line description and count → stacked excerpts with «Open». One level at a time, «‹ Commentary» to go back | A bottom sheet covering ~54% of the screen (top edge at y≈388 of 844), with the tapped verse still visible above it |
| **Catena Bible** (`catena-desktop-verse-es`, `-greek-tab`, `-related-tab`, `-media-tab`, `catena-390-verse-tapped`, `-verse-es`) | Large right sheet (~930 px); the verse is underlined and tinted in the text, which stays readable | Tabs: Patrística 24 · Multimedia 5 · Relacionados 17 · Griego. Patristics is master–detail: a list of cards (avatar, Father, work, 3-line excerpt) and one full text, with «Ordenar: Más relevante» | **No.** Header «Juan 6:53» only; the Father's text marks the quoted verse | The first tab is open by default. Griego is an accordion with one row per word: English gloss (Greek), «expandir» → transliteration, Strong's, definition. Relacionados lists verses with a «high/med» weight. Multimedia first asks «¿De qué tradiciones quieres ver charlas?» (Ortodoxos orientales, Ortodoxia oriental, Católico) | **Full-screen** sheet; the text is hidden. The tab row overflows at 390 («Relacionado…» cut off). Swipeable cards, «1 de 24» |
| **Blue Letter Bible** (`blb-desktop-tools-open`, `-crossrefs`, `-commentaries`, `-bibles-tab`, `blb-390-tools-open`) | «TOOLS» on each verse expands **inline under the verse**, with Prev / Next / close | Colored tabs: Interlinear (default) · Bibles · Cross-Refs · Commentaries · Dictionaries · Misc. Interlinear opens with the Greek of the whole verse, then a table: English · Strong's · Greek (inflected, root, transliterated) · parsing pill | The Cross-Refs tab repeats the verse once, with the TSK phrases in red as anchors: a working repetition, not a copy | Very dense: the Commentaries tab lists 12 study tools + 83 text commentaries + 22 audio/video. It mixes the Heidelberg Catechism with "Redi-Answers on Jehovah's Witness Doctrine" and "Dispensational Truth" | Same inline block, full width; the tabs wrap onto two rows |
| **STEP Bible** (`step-desktop-word-flesh`, `step-desktop-initial`) | Clicking a word fills a right pane «Word analysis» (~330 px); the word gets a grey fill in the text | σάρξ (sarx) flesh (G4561) · (Noun Accusative Singular Feminine) · «This word occurs about 146 x» · Meaning (lexicon senses, then a reference list) · LSJ dictionary · Related words · Grammar spelled out («Case: Accusative», with an "i.e." example) | No: the word only | Long. The first meaning paragraph appears twice in the pane (seen in the dump and the screenshot) | Not opened by scripted taps; not verified |
| **Logos (web, free edition)** (`logos-web-passage`, `logos-web-info-panel`) | «Insights» pane beside the Bible pane, with tabs «Book info | John 6:53» | Related books: Faithlife Study Bible (2–3-line excerpt + «More »»), Commentary Critical and Explanatory (excerpt + «More »»), each with «Change» · Related passages: Cross References (first reference quoted, the rest as links + «More »») | No: «John 6:53» tab only | Collapsible groups, 3-line excerpts, «More »» to go deeper | Not checked (app.logos.com is a desktop workspace) |
| **YouVersion** (`youversion-desktop-verse-tap`, `youversion-390-verse-tap`) | Bottom action sheet; the verse gets a dotted underline | «Currently Selected: SAN JUAN 6:53 RVR1960 ›» · Highlight (5 colors) · Copy · Compare · Share · sign-up nag | **No**: reference only | 4 actions, nothing to study | Sheet ~48% high, text visible above |
| **Bible Gateway** (`biblegateway-desktop-verse-click`, `biblegateway-390-verse`) | Clicking a verse does nothing visible. A chapter-level right rail: Insights · Resources · Reflect | «Chapter Overview» marked "Human-reviewed, AI-generated". It states: "His startling language about eating flesh and drinking blood is not literal". Resources is behind a paywall (Plus) | n/a | Chapter-level, not verse-level | Tabs Passage / Insights / Resources / Reflect under the search; ads |
| **Bible Hub** (`biblehub-desktop-verse-page`, `biblehub-390-verse-page`) | No panel: every verse is its own page | In order: 25+ translations stacked, then grouped (Majority Text, Literal, Catholic…), Audio, Context, Cross References, Treasury of Scripture, Study Bible, "What Does John 6:53 Mean", Ellicott, Pulpit Commentary, Greek, Additional Resources | n/a | Everything open, three nav bars of abbreviations | One long page |
| **Biblia.com (Logos)** (`biblia-desktop-initial`, `biblia-390-verse`) | Verse page | The verse · Copy · Share · Read in Logos · Previous / Chapter / Next · Cross references · «In other versions» (NIV, CSB, NLT, LEB, KJV…) | n/a (it is the page) | Flat | Same, one column |
| **NET Bible** (`netbible-desktop-chapter`, `netbible-390-chapter`) | Right pane, chapter-level, tabs Notes · Bibles · Greek · Library | Translator notes typed tn/sn, long-form | n/a | Pane always on | **The pane disappears** at 390; notes unreachable (confirms niche.md) |
| **Scaife Viewer** (`scaife-desktop-initial`, `scaife-390-reader`) | Two rails around the Greek text | Right rail: Text mode (Normal / Highlight) · Morphology («In HIGHLIGHT text mode, select a word») · UChicago short definitions for every lemma of the passage with frequency · Perseus dictionaries | n/a | Rails of collapsible boxes, tracked caps | Two rails side by side, the text gone off screen |
| **vatican.va, Catechism in Spanish** (`vatican-desktop-catechism-es`, `-ccc-1374`, `vatican-390-catechism-es`) | Nothing: plain page | Paragraph numbers; sources inline in parentheses («Concilio de Trento: DS 1651»), no links | n/a | n/a | Desktop page shrunk |
| **New Advent, Fathers** (`newadvent-desktop-ignatius-smyrn`) | Nothing: plain page | Text, donation banner on top | n/a | n/a | not taken (the 2026-10-03 shots in niche.md cover it) |

Earlier observations reused, not re-shot: **The Faith Received** opens an inline card under the verse on phones, with «2,212 citations», expandable groups and «Open the Verse Desk →»; on desktop the card docks bottom-right, far from the verse (`docs/research/niche.md`). **New Advent's Bible** sets Greek, Douay-Rheims and Latin in three columns (niche.md). [repo]

**What every panel-based product shares** [observed, the 13 above]:
1. No panel repeats the tapped text. The text stays marked in the reader (band, tint, underline, fill), and the panel header carries only the reference.
2. The panel is an index of what exists, with counts (Sefaria, Catena tabs, BLB "12 Items / 83 Items"), or excerpts of 2–3 lines with «More» (Logos, Catena cards). Full texts open one level deeper, inside the panel.
3. Whole-passage original text lives in the reading column or a parallel pane (Sefaria «Source with Translation», Scaife, Logos parallel Bible panes, BLB's Interlinear tab opening with the whole Greek verse). Word-level analysis lives in the panel (STEP, Catena Griego, Logos Info, Scaife's rail).
4. Phones: the good ones keep the text visible above a ~50% sheet (Sefaria, YouVersion). Catena goes full-screen and NET drops the pane; both lose the text.

## 3. Feature inventory

Evidence strength: **strong** = official documentation or a store page read today, plus the owner's own "Key" verdict; **medium** = several products put it first or by default, with no usage data; **weak** = one product, or [inference].

I found no published usage measurement for any feature in these products. Searches for Sefaria, STEP, Bible Gateway and original-language tool usage came back empty (2026-10-21). "Evidence it's used" below is therefore placement, documentation and reviews, never counts of feature use, except YouVersion's sharing totals.

| Feature | Who has it | Evidence it's used | Fit with Doctrina's invariants | Data we have or can get legally | Cost |
|---|---|---|---|---|---|
| **The tapped text stays marked in the reader; the panel header shows only the reference** | Sefaria, Catena, YouVersion, Logos, STEP | Observed in all five; no panel repeats the text | Neutral | n/a | Low |
| **Citar** (copy citation, with text, link) | YouVersion (Copy, Share), Biblia (Copy), BLB (Cite this), Sefaria (Share) | YouVersion users shared 409 million verses in 2018 ([Relevant](https://www.relevantmagazine.com/culture/heres-the-most-popular-bible-verse-of-2018-according-to-youversion/), [snippet]) and 222 million in 2017, with 1.4 billion highlights, bookmarks and notes ([snippet], same search). A devotional audience, not ours [inference] | Strong: "no citation without an edition". The copied citation carries the edition, which the modal doesn't show (DEC 2026-10-14) | Built in the proposal (`citeBlock`) [repo] | Low |
| **Dónde se usa en Doctrina** (which tradition page, section and claim use this division) | No outside product. Closest: Sefaria "Sheets (992)", Faith Received "2,212 citations" | Owner's verdict (ROADMAP 2026-10-06 note) | Strong: it shows who uses the text, in their own section, without the site concluding | From the dossiers; built in the proposal (`USES_TR`, `usesOf`) [repo]. Only the Catholic column is reviewed | Low |
| **Word by word (Greek / Hebrew)**: transliteration, literal meaning, form in words, lemma, NT count, link to the word study | STEP, Catena (Griego tab), BLB (Interlinear, opened by default), Logos (Info), Scaife, Sefaria (dictionary) | Owner Key verdict; BLB opens Tools on Interlinear [observed]; Catena's App Store reviews praise the Fathers and none mention Greek ([App Store](https://apps.apple.com/app/id1218663640), [doc]: 4.9 from 5.1K ratings) | Strong if it gives the **lexical** meaning, not the contextual reading (PROJECT) | STEPBible TAGNT, TBESG, TAHOT, CC BY 4.0. The Spanish glosses come from OpenGNT, **CC BY-SA**, which clashes with DEC 2026-10-09 (CC BY only) [repo `data.md`] | Medium (built for John 6; whole NT is phase 2) |
| **Original text of a source division** (Trent's Latin, Ignatius's Greek) | Sefaria (Source / Translation / Source with Translation, in the text), New Advent (3 columns), Scaife (parallel version), Logos (parallel panes) | Medium: every product shows it as reading text, none as a panel block [observed] | Strong (J1; «Latín · original», DEC 2026-10-20) | Ayala 1785 prints Latin and Spanish [repo `glossary-terms.md`, editions table]. Waterworth 1848 for English | Low to medium |
| **Latin word by word** | Scaife (Morphology, automatic) | Weak | Medium: automatic and unverified, so a quiet notice is needed (ROADMAP note 2026-10-06) | None in repo; LatinCy is automatic, ~98% lemma accuracy [repo ROADMAP note] | High; later |
| **Lo que escribieron los Padres** (patristic texts on this verse) | Catena (first tab), Sefaria (Commentary), BLB (Commentaries) | Strong: Catena's description is built on it ("Over 200,000 passages of commentary from more than 100 Fathers") and its reviews praise exactly this ([App Store](https://apps.apple.com/app/id1218663640), [doc]). The owner's Key verse-page verdict | Strong if neutral: Fathers are never assigned to a tradition (AGENTS); sorted by date, not "relevance" (niche.md recommendation) | SermonIndex alignment, CC BY; for John 6:47–58, 86 of 100 entries are public-domain translations, English only; Spanish needs the three-level policy (DEC 2026-10-09) [repo `data.md`] | Medium to high (translation review) |
| **Cómo la usa cada tradición** (the verse in each tradition's Scripture dossier, in its own words) | None outside. The Faith Received rows per tradition are the closest (niche.md) | Owner's model: one tradition at a time, Scripture dossier per tradition | Strong, provided each reading is the tradition's own text, not a summary that concludes | Dossiers: Catholic reviewed, others pilot (proposal notes) [repo] | Low once dossiers exist |
| **Otras traducciones** (Bible) | Biblia («In other versions»), Bible Hub (25+), Sefaria (Translations 47), YouVersion (Compare) | Medium: a default in 4 of 13 [observed]; YouVersion added Compare to the verse menu ([snippet](https://biblebuyingguide.com/youversion-bible-app-significant-update/)) | Strong (PROJECT Key) | 8 public-domain editions for John 6 [repo `data.md`]; whole Bible from eBible | Low |
| **Términos** (glossary terms in this division, each tradition's definition) | Sefaria (Dictionaries), BLB (Dictionaries) | Weak outside; owner "yes" | Strong: definitions come only from official texts, per tradition (`glossary-terms.md` conventions) | 100 terms drafted and verified, not approved by Pedro [repo `glossary-terms.md`] | Low |
| **Grado de autoridad** of the division (e.g. a Trent canon) | None | Owner "yes" | Strong only where the dossier assigns a grade from the Church's four (DEC 2026-10-15) | Dossier §6 tables [repo] | Low |
| **Pasajes relacionados** (cross-references) | BLB (TSK), Logos, Catena (Relacionados 17, weighted), Biblia, Bible Hub | Medium: in 5 of 13 [observed] | **Weak**: a cross-reference list is an editorial reading. For John 6:53, TSK pairs "eat the flesh" with Mat 26:26-28 and 1 Jn 5:12 ([observed] `blb-desktop-crossrefs`); either pairing leans toward one reading [inference] | OpenBible.info, ~340,000 references, "licensed under a Creative Commons Attribution License", mostly from TSK (public domain) (openbible.info/labs/cross-references, [doc]) | Low data, high neutrality risk |
| **La Escritura que cita** (passages a source division quotes or alludes to) | vatican.va (inline in parentheses), none as a panel | Weak | Strong: it is the source's own reference, not ours | Trent's chapters quote the Last Supper words [repo `USES_TR`]; whether Ayala 1785 prints marginal references is unchecked [memory] | Medium (manual per division) |
| **Respuestas / objeciones sobre este pasaje** (link to Doctrina's objection page on this very verse) | None | Owner Key: objections; the trigger is "your doctrine is false because the Bible says X" (PROJECT) | Strong: links to pages that already follow the rules | Objection data per doctrine [repo dossiers] | Low |
| **Videos sobre este pasaje** | Catena (Multimedia, filtered by tradition first), Logos and BLB (audio/video lists) | Weak: Catena's Media tab was off-topic on 2026-10-03 (niche.md) | Medium: balanced per tradition; curated, not aggregated (DEC 2026-10-05) | 70 verified videos tied to objections, not to verses [repo PROJECT] | Medium |
| **Fecha** of the division (session, year) | Catena (Father's dates on each card) | Weak | Strong (dates matter, PROJECT) | Registry: Session XIII, 11 Oct 1551 [repo proposal `TR13.meta`] | Low |
| Highlights, notes, bookmarks | YouVersion, Logos, Sefaria | Strong for YouVersion (counts above) | Out: accounts, bookmarks and notes are out for now (PROJECT) | — | — |
| AI-generated commentary or overview | Bible Gateway (Insights), Sefaria (Library Assistant) | — | **Out for good**: "generated chat answers are out" (PROJECT). BG's overview concludes "not literal" on the very verse under dispute [observed] | — | — |
| Study-Bible or commentary excerpts that interpret | Logos (FSB: "Jesus presses the metaphor further"), BLB (83 commentaries), Bible Hub | Strong in their markets (Faithlife calls the Passage Guide "perhaps the most popular feature" [snippet](https://faithlife.com/posts/3808551), marketing copy) | Out: the site never concludes, and a modern commentary speaks for one side | — | — |

## 4. Three compositions, most useful first

The same rules hold in all three:
- **Header:** kind and reference only («Trento, sesión XIII, capítulo 4» / «Juan 6:53»), plus close. Never the text.
- **The text stays in the reader**, marked with the reader highlight (DESIGN §4 `mark`). On the phone, the reader scrolls so the tapped sentence sits just above the sheet; the proposal already does this (`openPanel`).
- **Phone:** a sheet at ~50% (Sefaria, YouVersion), draggable to ~92% (analogs.md: 60/92). Never full-screen by default (Catena's failure).
- **Sections come from data:** a section with nothing is not rendered (ROADMAP 2026-10-06). Counts are real numbers; never «en preparación».
- **Last row:** «Ver el detalle completo» (the shared detail page, 06), so the panel is a triage view, not a second detail.

### A. "Índice con cantidades": an index you open inside the panel (Sefaria + Logos Insights)

Each row: a name, a count, and one line of preview in `ink-3`. Tapping a row replaces the panel's body with that list, with «‹ Juan 6:53» to go back. One level at a time, as in Sefaria.

**Bible verse, Juan 6:53:**
1. Action row, always visible: «Citar» · «Copiar enlace» (two text buttons, not joined by a dot)
2. «En griego, palabra por palabra» — preview: the count and the first content words with their literal meaning, e.g. «φάγητε *comáis*, σάρκα *carne*…» [inference: glosses illustrative, the real ones come from the data] → opens the word list (Catena accordion, one row per word); a word opens its card in place
3. «Lo que escribieron los Padres (24)» — preview: the earliest and latest Father with their dates, from the data; sorted by date
4. «Cómo la usa cada tradición (4)» — preview: «Católica, ortodoxa, reformada, bautista»
5. «Otras traducciones (7)»
6. «Objeciones sobre este versículo (2)», only when an objection page cites it
7. «Dónde se usa en Doctrina (5)» (the proposal's data for 6:53: four tradition pages and Augustine in the history section)
8. «Ver el detalle completo»

**Source sentence, Trento ses. XIII cap. 4, second sentence:**
1. Action row: «Citar» · «Copiar enlace»
2. «Leer en latín» — not a block: it switches the reader to «Original: debajo» and scrolls to this division (§5)
3. «Términos (1)» — preview: «transubstanciación»
4. «Dónde se usa en Doctrina (2)» — preview: «Qué enseña, La transubstanciación»
5. «La Escritura que cita (1)», only if the data exists (unchecked, §3)
6. «Otras traducciones (1)» — «Waterworth (1848), inglés»
7. «Ver el detalle completo»

Collapsed by default: everything below the action row; the rows are the folding. Why first: it answers "what is there for this passage, and how much" in one glance; that is the job of a triage panel. It is the pattern of the closest analog, documented by Sefaria itself ("Click on any passage to open the Sefaria Library Resource Panel… Click on the category of your choice", help.sefaria.org, updated ~Oct 2026, [doc]). It stays short at any data volume. Cost: medium (drill-down states, a back control inside the panel).

### B. "Lo clave abierto": the key section open, the rest folded (Catena's first tab + BLB's Interlinear default)

Like A, but the most valuable section is already open. For a verse, «En griego, palabra por palabra» opens as a compact list: one row per word, Greek in its font, transliteration, literal meaning; a word opens its card in place. For a sentence, «Términos» opens if there is one, otherwise «Dónde se usa». The other sections stay folded as rows with counts.

Why second: it serves the Key verdict (original words) with zero taps, and BLB and Catena both open on an original-language or patristic view by default [observed]. Against it: for a Trent sentence there is no obvious "key" section (§3: no Latin word data), so the panel changes shape between Bible and sources [inference]. A 28-word list makes the half sheet long before the reader sees what else exists. Cost: low (no drill-down for the open section).

### C. "Pestañas": tabs inside the panel (Catena, NET, BLB)

Verse: «Palabras · Padres 24 · Tradiciones 4 · Más»; sentence: «Usos 2 · Términos 1 · Citar». Why third: it is familiar from Catena, and counts on tabs work. Against it: at 390 px Catena's tab row already overflows with four tabs («Relacionado…» cut, [observed] `catena-390-verse-tapped`). A tradition count of 6 makes the row longer. Tabs hide which sections are empty or full until each is opened. BLB's colored tabs are the rainbow on the AI-slop list. Cost: low.

**Recommendation [inference]: A**, with the one-line previews that carry B's value (the Greek preview names the key words) without opening a long list. On a desktop wider than 1280 px, B's open word list could be tried as a variant of A, since there is room.

## 5. The original language: panel, inline, or a toggle in the main text

**Answer: two places, by unit.**

1. **The original text of a division (Trent's Latin, Ignatius's Greek, the Greek of a verse as a sentence) goes in the main text, behind a reader toggle.** It sits next to the edition picker in the reader's bar: «Original: no · debajo · al lado». In the UI these are three options of a segmented control, not a «·» string. The default is «no». «Al lado» exists only from about 1100 px; on phones only «debajo», a stacked bilingual layout. The original is set at the same size as the translation, with its own label «Latín · original» (DEC 2026-10-20).
   - Evidence: every product that shows whole-passage original text shows it as reading text, never as a block in a side panel. Sefaria's own display menu reads «Source / Translation / Source with Translation», with layout options (`sefaria-desktop-language-menu`), and stacks Hebrew over English on phones (`sefaria-390-tap-verse`). Scaife and Logos add a parallel version or pane (`scaife-desktop-initial`, `logos-web-passage`). New Advent uses three columns (niche.md). BLB's Interlinear tab opens with the whole Greek verse set as text before its table (`blb-desktop-tools-open`).
   - Why not the panel: Pedro's complaint fits the evidence. A panel is 330–460 px wide in these products, so a Latin paragraph there is set small and narrow, beside the larger translation it should be compared with. Comparing two languages needs them aligned at the same size [inference].
   - Limit: the original is aligned by division, not by sentence (agreed 2026-10-06: sentences don't align across editions). So in «debajo» the Latin paragraph follows its Spanish division, and the tapped Spanish sentence can't be marked inside the Latin.
2. **The original words (word by word) go in the panel**, as a section: «En griego, palabra por palabra» / «En hebreo, palabra por palabra». STEP, Catena, Logos Info, Scaife and Sefaria's dictionary all keep word analysis beside the text [observed]. A word is a short card, which suits a panel. For Latin there is no word data (§3), so the panel shows only «Leer en latín», which turns the toggle on and scrolls; the panel never renders the Latin itself.

Discarded: the original only in the detail page (06). It takes a page change for the single most "real documents" question, J1. Also discarded: interlinear in the main text as the default (Bible Hub's five stacked rows, BLB's parsing pills, both on the slop side of niche.md).

## 6. What to discard, and why

- **Repeating the tapped text in the panel, and the full text of each translation.** No inspected panel does it (§2, point 1); it was the first thing Pedro rejected.
- **The Latin block in the panel** (§5).
- **Generated overviews** (Bible Gateway Insights, Sefaria's assistant): out for good (PROJECT). BG's concludes on the disputed verse.
- **Interpretive commentary from one side** as a panel section (Logos FSB excerpt, BLB's 83 commentaries, Bible Hub's Ellicott and Pulpit): the site never concludes, and each tradition speaks only through its own texts.
- **An unfiltered cross-reference list** (TSK or OpenBible) as a neutral-looking section: the choice of parallels is a reading (§3). If it ever comes in, only as «Pasajes que cita cada tradición», taken from the dossiers.
- **Highlights, colors, notes**: accounts are out for now.
- **A full-screen sheet on phones** (Catena) and a pane that vanishes on phones (NET).
- **Tabs that overflow at 390 px** (Catena), colored tabs (BLB), raw parsing codes («V-2AAI-3S», BLB; «V-ASA-2P», Bible Hub).
- **Lexicon dumps** (STEP's meaning block, printed twice): the card gives the literal meaning first, and the full entry belongs in the word study (07).
- **Sort by "relevance"** for the Fathers (Catena's «Más relevante»): date order, as niche.md already recommends; "relevance" is a judgement the site shouldn't make [inference].
- **AI-slop list** (DECISIONS, "Design principles"): cream + terracotta (Catena's beige is close), gold on navy, parchment, stock cathedrals / Bibles / hands, crosses as decoration (Catena's logo), identical rounded shadow cards (Catena's patristic cards), gradients, ALL-CAPS tracked eyebrows (Sefaria's «RELATED TEXTS», Scaife's rails, Catena's «ORDENAR»), «·»-joined meta strings, «→» glued to links, emoji, icons in colored squares, giant decorative quotes, Inter + centered bold hero, monospace locators (Scaife's URN), one color per tradition (BLB's rainbow tabs, Sefaria's colored book icons per category), squeezed parallel columns on mobile (Scaife's two rails at 390), dead affordances (Bible Gateway's verse click that does nothing).

## 7. Open for Pedro

1. Composition: A (index with counts and a preview line), B (the key section open) or C (tabs)? Agent's recommendation: A.
2. The original: a reader toggle «Original: no · debajo · al lado» in the main text, with the panel holding only word by word (Greek, Hebrew) and «Leer en latín»? Or do you want the original only in the detail page?
3. «Cómo la usa cada tradición» in the panel of a verse: yes, with each tradition's own words (one line from its dossier), or only as links to its «La Escritura que usa»?
4. Cross-references: leave them out, or only those the traditions' own texts pair with the verse?
5. A new candidate not in the proposal: for a source sentence, «Quién le responde» (another tradition's official text that answers this point directly, e.g. a confession that rejects transubstantiation by name), each in its own words. Useful for the debate viewer, but it needs a hand-made map per division and can read as staging a debate [inference]. In or out for launch?
6. Still open from ROADMAP "Now" 4: the Spanish Greek glosses (OpenGNT, CC BY-SA) against the CC BY-only rule. The word-by-word section in every composition depends on it.
