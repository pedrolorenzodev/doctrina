# Roadmap

## Current state
> Overwritten at the end of every session. 15 lines max.

**2026-10-05.** Project restarted. Done: Next 16 scaffold (`src/` structure, no pages yet, `npm run verify` passes), the agent doc system, the git guard hook, and the handoff material carried over (`data/`, `docs/research/`). No UI exists and none may be built until the page structure and design direction are approved.
Open doubts: where the data-access layer lives; `data/scripts/` not adapted (don't run).
**Next step:** Pedro reviews UX round 2 (P1–P4) and picks a structure or a mix.

## Now

1. **Decide: page structure / navigation.** Pedro's feedback on [UX round 2](https://claude.ai/artifact/CiD9tLWApMVoskyJG2KwDV): P1 sidebar tree, P2 editorial landing, P3 text + "Conexiones" rail, P4 v2 polished (summaries in `DECISIONS.md`). Iterate through the main rule (proposal page, 2–4 options). Inputs: round 1 verdicts and design principles in `DECISIONS.md`, `docs/research/`.
   - **Pedro's note on P1, screen 05 (source), 2026-10-06. Applies only if P1 (or its sidebar) is chosen; Pedro hasn't reviewed P2–P4 yet.** In the left sidebar's "Fuentes" section:
     - An author with more than one source appears once, at the same level as the other sources, by name (e.g. "Ignacio de Antioquía"); clicking it shows all of that author's sources. Careful with 2 Clement and similar cases.
     - Possibly: sources that every tradition clearly attributes to one specific tradition (Council of Trent, Catechism of the Catholic Church…) are grouped under that tradition, to find them faster. Never patristic sources, homilies and the like: they stay neutral, unless clearly from one tradition.
     - Agent notes: the registry already has `recognizedBy` per source (`data/site/sources.extra.json`). Sources recognized by several traditions (Chalcedon, Byzantine liturgies, Marburg Articles) stay neutral. Group by author only when the attribution is secure: pseudonymous works under their own name (2 Clement, Pseudo-Dionysius), debated or anonymous ones loose (Mystagogical Catecheses, Didache, Gelasius). Grouping needs an author id; today the same author appears under different strings ("Agustín" / "San Agustín"). Open: does author grouping also apply inside a tradition (Luther has 3 Lutheran sources)? Mixing authors and single works at one level may confuse; the proposal should also show "always by author".
   - **Pedro's note on P1 navigation to sources, 2026-10-06** (same condition). Pedro dislikes reaching 05 (source) directly from a partial citation in 03's "Por qué". Wanted instead:
     - **Full-text reader for every source, Bible included, whenever possible.** The citation link ("Ignacio de Antioquía, Carta a los Esmirniotas 7:1") opens the whole work, scrolled to the cited paragraph, with the cited paragraph/phrase highlighted temporarily. The reader scrolls top to bottom; "Fecha y autenticidad" and "Edición y licencia" move here from 05, placed so they don't get in the way of reading but are still seen.
     - **Selecting a paragraph in the reader** (mechanism open) navigates to the passage detail (today's 05) for that passage.
     - **One passage-detail component for Bible and non-Bible passages.** Same sections for both; "Traducción" and "Comparar traducciones" only for the Bible. Sections with no data ("Lo que escribieron los Padres", "Cómo lo lee cada tradición", "Videos"…) are not rendered, never shown empty.
     - Agreed with Pedro, 2026-10-06 (still conditional on P1):
       - The selectable unit is the work's own numbered division (verse, chapter.section, CCC §, confession article), so every passage has a stable URL; no free text selection.
       - Hybrid with sentences (Pedro chose, 2026-10-06): inside a non-Bible division every sentence can be tapped and highlighted; tapping one opens the detail of its division with that sentence highlighted, and the URL carries the sentence. Citation, translations and the original stay at division level (sentences don't align across editions; academic citations use the division). Previous / next divisions are clamped with "ver completo" when long. Discarded: the sentence as the unit (most detail sections would be empty, translations would need manual alignment, the citation wouldn't be standard).
       - Sections are data-driven, not hardcoded by type: "Traducción" / "Comparar traducciones" appear for any source that has translations or an original (Ignatius in Greek, Trent in Latin), and hide when it doesn't.
       - Word-by-word original exists only for the Bible (STEPBible tagging); other originals are plain text.
       - Full reader for every source we can. Copyrighted works (CCC, BF&M 2000) get short excerpts plus a link. Today we hold excerpts, not full texts: Pedro wants us to keep looking for ways to get complete sources (fits the Supabase reference corpus).
       - The shared detail is P1·06 (Versículo)'s UI/UX, Pedro's current favorite, plus "Citar" and "Dónde se usa en Doctrina" from 05, placed toward the end (exact position: whatever works best in the proposal). "Antes y después" is dropped: the detail uses 06's layout, the passage (verse or numbered division) with the previous one above and the next one below.
     - Pedro, 2026-10-06: the detail's word-by-word section ("En griego, palabra por palabra" in 06) should look and behave exactly the same for non-Bible sources, with the title and subtitle adapted to the language. No original available → the section isn't shown; maybe also disable navigating to the detail from that source.
       - Research (2026-10-06): feasible for Greek. [Open Greek Corpus](https://opengreek.org/) (CC BY-SA 4.0) has Greek to 1453, Patristics included, with lemma, POS and morphology per token: hand-corrected where treebanks exist, automatic elsewhere (92.5–95.3% agreement). [Open Apostolic Fathers](https://github.com/jtauber/apostolic-fathers) (Lake's text, CC BY-SA 4.0); [QuantForge's tagging](https://github.com/QuantForgeSoftware/apostolic-fathers) of it is automatic and "untested". Latin: automatic lemmatizers reach ~98% lemma accuracy ([LatinCy](https://huggingface.co/latincy/la_stanza_latincy)). Unlike STEPBible, none of this is human-verified and there are no per-word glosses: the literal meaning would come from the lemma's lexicon entry, and Spanish glosses would need AI-assisted drafting plus review. CC BY-SA → separate share-alike layer.
       - Pedro, 2026-10-06: the automatic-analysis notice must be visually quiet and dismissable by the reader once they know it. Agent proposal: dismissing hides the notice everywhere (stored in the browser; in the profile once accounts exist), and a minimal cue stays where the data is shown (e.g. "análisis automático" in small type on each word's card), so the trust rule still holds for shared links and new readers.
       - Agent notes: mark automatic tagging as unverified in the UI (trust rule); Latin needs no transliteration; define the word-study corpus for non-Bible words; English-original sources (Westminster, Baptist confessions) have nothing to show. Pedro, 2026-10-06: word by word only for Greek, Latin and Hebrew for now; German and French originals (Luther, Heidelberg, Belgic) don't get it. Pedro, 2026-10-06: the detail is enabled per division, not per source: a division opens its detail only when it has at least one study section beyond the passage text; otherwise its sentences can't be tapped. Discarded: disabling navigation for a whole source that has no original.
     - Still open: the selection mechanism in the reader; the copy of the word-by-word section per language; the way back to where the reader came from (05 has "Volver a donde estabas"). Precedent: Sefaria (every text has a reader, every segment its connections).
   - **Pedro's note on P1·07 (word study), 2026-10-06** (same condition). Pedro likes this screen a lot ("tremenda").
     - It serves any Greek or Hebrew word, not a curated set. Entry: a word in the detail's word-by-word section → its card (the popover in 06) → "Abrir el estudio de …" → the word study, whether the reader came from the Bible or a non-Bible source.
     - Remove the sidebar's "Palabras griegas" section with fixed sample words: the screen applies to every word, so a fixed list makes no sense.
     - "Dónde aparece" lists every book of the word's testament (NT for Greek, OT for Hebrew) with its count per book, books with zero included: a zero is data in itself.
     - Agent notes: the Hebrew data exists (STEPBible TAHOT + TBESH, CC BY 4.0); Hebrew words carry prefixes and suffixes, so the study is of the root lemma, and Daniel and Ezra have Aramaic. "Every OT book" needs neutral wording: TAHOT is the Hebrew Bible (39 books); the deuterocanonical books survive in Greek (Septuagint, which has no open tagged text yet), so they can't be listed with a zero as if the word were absent. With zeros shown, canonical book order reads better than sorting by count. A Greek word from a Father may not occur in the NT at all (e.g. Theotokos) and has no entry in the NT lexicon (Abbott-Smith); patristic Greek needs another lexicon and a lemma-based link instead of Strong's numbers. Proposed: Latin words open their card only, with no study page, for now.
     - Pedro, 2026-10-06: canonical book order; the Hebrew list is "En la Biblia hebrea", not "Antiguo Testamento". Under the "Dónde aparece" heading, a clean but noticeable line states the corpus. Draft copy: "En el Nuevo Testamento griego (27 libros)" / "En la Biblia hebrea (39 libros)", the Hebrew one followed by a short note that the deuterocanonical books survive in Greek and aren't counted; the edition behind the counts (NA28 for Greek) in small type. No "·"-joined strings.
   - **Pedro's note on P1·08 (timeline), 2026-10-06.** The selected item's dates must be far more noticeable (today "Padres, c. 69–155" sits in small grey type next to the category). Agreed direction, exact form to be tried later in a proposal (a small detail; the screen as a whole matters more):
     - In the detail, the date is its own labelled element, apart from the category: a Father's birth and death ("Nació c. 69", "Murió 155"), a council's year or range, a heresy's start and end (the end marked as an estimate), an anonymous work's composition range.
     - Key for Pedro: on the line itself, the selection draws its span (a Father's life from birth to death; today Fathers are drawn only at their death year, though 44 of 56 have a birth year) and marks its years on the axis.
     - "c." and contested dates stay visible: more noticeable must not look more certain (Polycarp: 155 or 156; Eusebius c. 167).
2. **Design direction approved → write `docs/DESIGN.md`** (tokens, type, color, spacing, motion, components, don'ts). Consider Google Labs' DESIGN.md format (alpha; drop it if it gets in the way).

## Next

- **Decide: where the data-access layer lives.** CONTEXT §8 says `src/data/*` (async `getDoctrine`, `getVerse`, `getFather`…); the base structure has no such folder and `lib/` must stay domain-free. Options: per-feature `data/` folders, a shared domain layer between `features` and `components/ui`, or a dedicated feature. Decide before the first page reads data.
- Port the screenshot tool (`tools/shot.mjs`, Playwright, from v2) and add an `npm run shot` script, with the first UI block.
- Adapt `data/scripts/` before running them: outputs still target v2's `src/content/data/`; raw downloads are expected in `data/raw/src/` (copy them from `~/Desktop/dev/doctrina-v2/data/raw/src/` or re-download, recording the date).
- Eucharist pilot in the chosen structure, block by block, each verified and approved.
- Verify flagged content: `docs/research/content-notes.md`, `docs/research/history-notes.md`, plus v2 bugs: Spanish locators mixing English ("Tratados on John", "Decreto on the Eucharist"); Ignatius *Smyrnaeans* context (6.2, 7.2) and the Greek in the round-2 mockups, written from memory.
- Whole-Bible reading, phase 1: text-only reader as static pages (66 books + separate deuterocanonical section; RV1909 / BSB by default; deuterocanonical books in English with a notice). Plan in `DECISIONS.md`.
- History data: for the 7 persons with no birth year (Clement of Rome, Ignatius, Melito of Sardis, Theophilus of Antioch, Methodius of Olympus, Optatus of Milevis, Vincent of Lérins), find sourced estimates and store them apart from attested dates (`DECISIONS.md`, 2026-10-06).
- Search ⌘K with "Recientes" and "Seguir donde dejaste".
- Horizontal general timeline (T1, one density, the component scrolls sideways).
- Attribution page (STEP Bible, OpenGNT, SermonIndex, "WEB" trademark rule).
- Validation hooks: PostHog events, fake door, one-question survey, email capture.
- **Decide:** second doctrine to test that the model generalizes (proposed: justification).
- **Decide:** per-locale URL slugs (`/es/doctrinas/eucaristia`).
- **Decide:** numbering conventions (psalms Hebrew vs Vulgate; Apology of the Augsburg Confession Triglotta vs Kolb–Wengert).

## Later

- **Supabase + AI phase** (after the UI/UX is settled; plan in `PROJECT.md`, "Data architecture"): verify Supabase limits and prices; import scripts to Postgres; Auth + RLS for user data (recents, bookmarks, notes, progress, error reports, email list); semantic search with pgvector; internal AI tooling with human review.
- Whole-Bible reading, phase 2: word by word for the whole Bible (STEPBible TAGNT + TAHOT) in the Supabase reference corpus.
- Spanish deuterocanonical books: OCR and correction of Torres Amat (1825). Check Straubinger's legal status before any use (Argentina 2027-01-01, Spain 2037).
- Remaining launch doctrines (justification, papacy, sola Scriptura, Mary), then the stretch set.
- Complete texts of every source, whenever licensing allows (Pedro: don't give up looking for ways to get them); copyrighted ones only as short excerpts plus a link.
- Spanish translations of patristic texts (AI-assisted draft + human review, labelled as translation).
- Videos: 7 of 15 Eucharist objections have none; confirm the affiliation of the small channels flagged in `content-notes.md`.
- Payments (Gumroad/Polar + Mercado Pago) after validation.
- **Decide:** name and domain ("Doctrina" is provisional).
- **Decide:** Anglican as a sixth tradition.
- **Decide:** patristic cutoff (conventional: John of Damascus, d. c. 749).
- **Decide:** reviewer recruitment and the "serious review" mechanism (required before launch).
- **Decide:** the unreviewed brainstorm groups (Learning, Video/audio, Trust).
- **Decide:** connected-doctrines format.
- Candidates from the v1 plan, never re-confirmed for the deep-study vision: "Report an error" on every citation; a source registry page (every source, its license, what cites it); tradition pages; an about / method page (neutrality policy, reviewers); a footer with method, sources and licenses (v2 critique); a language switch that keeps the reader's place; a persisted Auto / Light / Dark theme; print stylesheet.
- Maybe: geographic map; user-selectable palettes; custom smooth scroll (Lenis) with a desktop scrollbar, weighed against accessibility.

## Done

- 2026-10-05 · Restart: scaffold, doc system, git hook, handoff carried over.
- 2026-10-05 · UX rounds 1 and 2 (verdicts and summaries in `DECISIONS.md`).
- 2026-10-03 · v2 prototype in `doctrina-v2` + research (niche, analogs, data licenses, content and history notes, critique).
- 2026-10-02 · Vision correction to deep study; design round 1 judged too thin.
- Before 2026-10-02 · v1 thin MVP in `doctrina-v1-archivo`.
