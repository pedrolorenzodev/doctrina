# Doctrina — full project context (handoff dossier)

_Written 2026-10-05 for the agent that restarts the project from scratch. This is the single source of truth for everything decided, tried and learned so far. It is input material: split it into whatever documentation system the owner designs, then this folder can be archived. Everything here is in English; the site content is bilingual (es/en)._

---

## 0. How to read this folder

| Path | What it is |
|---|---|
| `CONTEXT.md` | This file. Read first, fully. |
| `history/` | Previous plans and design systems (v1, v2), and the owner's raw UX notes (`UX-NOTES.md`, append-only log). Historical: decisions in them may be superseded by this file. |
| `research/` | Research reports: niche competitors, non-niche UX analogs, data licenses, v2 design critique, content uncertainties, history-date uncertainties, and the brief given to research agents. |
| `data/raw/` | Research-grade drafts: Eucharist content, John 6 Greek/lexicon/translations/Fathers, general history. |
| `data/site/` | The same data shaped for the v2 site (compact JSON). |
| `data/scripts/` | Scripts that built the data (paths point to the old `doctrina-v2` repo; adapt before reuse). |
| `screens/` | 14 screenshots of the v2 prototype (`01-home` … `14-mobile-word`). |

Old repos (read-only references, do not develop there):
- `~/Desktop/dev/doctrina-v1-archivo` — v1 thin MVP (Next.js), uncommitted work.
- `~/Desktop/dev/doctrina-v2` — v2 deep-study prototype (Next.js 16, ~486 static pages, builds clean). Dev server used port 3412. Tools: `tools/shot.mjs`, `tools/interact.mjs`, `tools/clip.mjs` (Playwright screenshots).

---

## 1. The owner and how to work with him

- **Pepo (Pedro Lorenzo)**, 19, Argentina. Junior React/TS/React Native dev, knows Supabase (Scrimba fullstack). Good at building with AI agents; weaker at retaining/explaining technical concepts (be clear, concrete). Evangelical Christian researching Catholic vs Protestant claims; deep passion for theology; consumes YouTube apologetics. Brothers: Ema (frontend/WebGL/AI), Josu (AI/marketing/distribution), Matu (React Native), Santi (React). Speaks Rioplatense Spanish (voseo).
- **Non-negotiable rules**
  - Everything in the repo is written in **English** (code, comments, docs). Only site content and UI strings are bilingual.
  - **Never run `git commit`.** The owner commits (and runs `git init`) himself. Staging only if asked.
  - Answers to him: **very brief**. Never assert market or factual claims without researching first; cite sources.
  - When he is unsure HOW something should be (UI/UX, structure), **research and present proposals to choose from** (a Claude Design canvas / artifact), don't build a whole new version.
  - He brainstorms in unordered notes: **record them first** (append to the UX notes log by date), order later.
- He works autonomously with agents for long stretches; launching parallel agents/sub-agents, Playwright screenshots and critique passes worked well (see §10).

---

## 2. What Doctrina is

A bilingual (Spanish / English) **deep-study resource on Christian doctrine**. For one doctrine at a time it shows, in depth: what each tradition believes and **why**, in its **own words**, with **every primary source** (Scripture, councils, confessions, catechisms, Church Fathers) quoted exactly with edition and license; the Scripture each tradition argues from and how it reads it; the **objections** each tradition faces with its best full answer; how the doctrine is **lived** in practice; how it **developed in the early Church**; and the **original-language text** of every verse involved.

- **Primary user:** the serious searcher (often young, Spanish-speaking, hours of YouTube debates) who wants the real documents. Teachers / students / catechists are secondary (likely payers). Beginners are welcome but secondary.
- **Not:** a chatbot (no generated answers), a debate forum, a devotional app, or an argument for any tradition. The site never concludes; it never says "we believe".
- **Trust is everything:** one misattributed quote destroys trust with every side. Rule: **no claim without a citation, no citation without an edition**; unverified content is marked draft.
- **Vision correction (2026-10-02):** the first designs were "far too thin — the same as asking ChatGPT". Depth is the product.
- Working name "Doctrina" (provisional; name and domain open).
- **Business:** validate willingness to pay (fake-door price button, email list, preorder; teachers as payer hypothesis). **Distribution is 100% organic, no paid ads** (Reddit, Discord, Facebook groups, faceless TikTok, creators, ForoCristiano). Payments later via Gumroad/Polar + Mercado Pago (no Stripe in Argentina). Earlier reports: market research https://claude.ai/artifact/6Eq9R7NujEDCAZ7t4R7LkM ; launch/distribution plan https://claude.ai/artifact/8eizgsjCq1A6fXAmyPCyL8 (its ads/budget sections no longer apply).
- **Career angle (2026-10-05):** a CTO (friend of Pepo's brother) may hire Pepo if he ships a product with **AI + databases + Supabase**. Decision: build that into Doctrina (see §8). The AI feature must be user-visible and demoable.

---

## 3. Core content model (owner-confirmed)

- **Traditions (MVP):** Catholic, Orthodox, Lutheran, Reformed, Baptist/Evangelical. **No Anglican** for now (open).
- **One tradition at a time** is the default reading mode; other traditions one click away. Side-by-side comparison only in specific features (it was liked as "compare this question" inside a page, not as the default).
- **Neutral (global) sections**, shared by all and never assigned to a modern tradition: common ground; history of the doctrine; **earliest witnesses** (what Apostolic Fathers / Church Fathers literally wrote); patristic commentary on verses. Rationale: claiming Ignatius or Irenaeus for one tradition is itself contested. Patristic cutoff is open; conventional end of the era is John of Damascus (d. c. 749), which keeps Jerome and Augustine.
- **Scripture dossier is per tradition** (the passages *that* tradition argues from, incl. typology such as manna or Melchizedek), never a single shared reading.
- **Launch doctrines:** Eucharist (pilot, drafted), justification, the papacy, sola Scriptura, Mary. Stretch: baptism, purgatory/intermediate state, saints and intercession, canon of Scripture, church authority/apostolic succession.

---

## 4. Features

### Confirmed by the owner
**Key (top priority)**
- **Objections and responses in depth**: for each objection, the tradition's best full defense (not three lines), the passages it cites, and **videos of creators answering that exact objection**. Real-life trigger: "your doctrine is false because the Bible says X".
- **Verse page**: maximum information for every verse a tradition argues from. Collapsed to the verse, **expandable to the whole chapter** with the verse highlighted; **as much patristic commentary as exists**; many videos explaining the passage.
- **Original-language words for ANY word of a verse**: original script, **transliteration first** (script on demand), and the word's literal **lexical** meaning (not its contextual interpretation). Dedicated Greek font (later Latin, Hebrew).
- **Compare translations**: original text with transliteration plus several translations the reader picks.
- **Earliest witness of X** ("extremely valuable").

**Yes**
- How it is lived (Mass / Divine Liturgy / Lutheran Divine Service / Reformed and Baptist Lord's Supper: who presides, elements, who may receive, frequency…).
- Connected doctrines (Eucharist → sacrifice → priesthood → apostolic succession → papacy). Format still open.
- Context of a citation (paragraphs before and after).
- Authenticity and dating notes on every source; **dates matter**.
- Copy citation with exact reference.
- **Level of authority** (e.g. Catholic dogma vs doctrine vs theological opinion; confessional vs not).
- Word study (where a word appears, how often).
- **Timelines, both**: per doctrine, and a **general timeline of Christian history** (Fathers and their writings; all councils, ecumenical emphasized; heresies each with a page; divisions 431 / 451 / 1054 / Reformation each with an in-depth page; Reformation branches and their development, including little-known facts).
- **Term explanations in place** (curated glossary; per-tradition definitions where they differ; no AI generation).
- Video commentary per tradition on verses and doctrines (balanced across traditions).
- **Search ⌘K with "Recientes" and "Seguir donde dejaste"** (liked in UX round 1; "definitely try it").
- **General timeline as a horizontally scrolling component** (UX round 1 T1 was loved; see §6).

**Maybe / lower priority**: geographic map (where Fathers lived, missions, spread of Christianity); user-selectable color palettes; custom smooth scroll (Lenis) with a custom scrollbar on desktop (to evaluate against accessibility).

**Parked**: internal diversity within a tradition.

**Not yet reviewed by the owner** (brainstorm groups): "Learning", "Video/audio", "Trust" (incl. a serious reviewer feature — the owner distrusts "someone from tradition X reviewed it" badges and wants a serious review mechanism before launch).

**Out for now (v1 list)**: accounts, bookmarks, notes, AI Q&A, comments, audio, PDF export, more than 5 traditions, mobile app. (Accounts/bookmarks/notes come back with Supabase, §8.)

### Validation hooks (from v1 plan, still intended)
Events: read_complete (≥75% scroll + 90 s), citation_open, tradition_switch, language_switch, email_signup, price_click. Fake door on doctrine pages ("Full guide: 30 doctrines, printable PDF + citation tables" with a price → honest "not built yet" + email). One-question survey after read_complete ("What are you using this for?"). Analytics: PostHog (free tier).

---

## 5. Content and data status (all DRAFT)

**Eucharist pilot** (`data/raw/eucharist.content.json`, `data/site/eucharist.v2.json` + `eucharist.v1.json`):
- 5 positions (summary, claims, reasons with citations) from v1.
- Per tradition: 3 objections (15 total) with full multi-paragraph answers, citations (Scripture, normative documents, Fathers), passages and verified videos; 10 dossier passages (50 total) with role (primary/supporting/typology) and how-read; how it is lived (paragraphs + 8 practice facts); authority levels.
- 15 glossary terms with per-tradition definitions; 12 earliest witnesses (Didache → John of Damascus) with full quotes and neutral reading notes; 25-event doctrine timeline (Didache → BF&M 2000); doctrine dependency edges.
- 70 real YouTube videos verified via oEmbed (20 in Spanish); 7 of 15 objections still have no video.
- Short Spanish headlines for objections were hand-written (`objection-headlines.json`).
- Doubts to verify: `research/content-notes.md` (memory-quoted citations, practice statistics, a Gelasius quote, psalm numbering, 1 Cor 11:29 text-critical mismatch, etc.).

**John 6** (`data/raw/john6.*`, `data/site/john6.json`):
- Greek word-tagged text from **STEPBible TAGNT (CC BY 4.0)**: 1,289 words, SBL-style transliteration, morphology, English and Spanish glosses (Spanish glosses are **CC BY-SA 4.0** via OpenGNT → share-alike).
- Lexicon: STEPBible TBESG (CC BY 4.0), definitions Abbott-Smith (1922, PD); NT occurrence counts and references (e.g. σάρξ 147).
- 8 public-domain translations: BSB, KJV, WEB, Douay-Rheims (verse numbers remapped), YLT, Reina-Valera 1909, Scío 1797 (Catholic Spanish), Biblia Libre para el Mundo.
- Fathers on John 6:47–58 from SermonIndex/HistoricalChristianFaith alignment: 100 entries, **only 86 safely public domain** (14 unverified or likely copyrighted — do not publish). Patristic texts are English only (Spanish pending; candidate for AI-assisted translation with human review).
- STEPBible asks not to redistribute raw files and to credit/link back.

**General history** (`data/raw/history.json`): 56 Fathers, 41 councils, 18 heresies (each with an explainer page), 10 divisions (each with "how each side tells it"), 20 Reformation branches (with little-known facts), 119 events. Many dates written from reference memory; see `research/history-notes.md`.

**Licensing rules**: public-domain editions by default; copyrighted texts (Catechism of the Catholic Church, BF&M 2000) only as short excerpts linked to the official source; copyrighted Spanish Bibles (RVR1960, NVI, Biblia de Jerusalén) need permission; Straubinger is copyrighted in Argentina until 2027-01-01. CCEL asks permission for commercial use — prefer Wikisource / Archive.org / bookofconcord.org / New Advent sources with PD translations.

**Known content bugs in v2**: some Spanish locators mix English ("Tratados on John", "Decreto on the Eucharist"); Ignatius' Smyrnaeans context (6.2, 7.2) and Greek in the round-2 mockups were written from memory and must be checked.

---

## 6. Design and UX history (what worked, what didn't)

1. **v1 "glossed page"** (Literata + Public Sans, paper / iron-gall ink / rubric red, sources in a sticky margin). Structure: one screen per doctrine with tradition switcher. Verdict: too thin.
2. **Design round 1** (canvas https://claude.ai/artifact/TsniPE1LdXxgLh2SX47HTA, 4 visual directions). Verdict: far too thin in content → triggered the deep-study vision.
3. **v2 "study desk"** (built 2026-10-03 in `doctrina-v2`; screenshots in `screens/`; system in `history/v2-DESIGN.md`):
   - Visual: Brygada 1918 (reading), Commissioner (UI), Gentium Book Plus (Greek); single lapis accent #2C4A9E on #FAFAF8; hairlines, no cards; signature **2,000-year time ruler** on every dated source; light/dark/auto.
   - Interaction: a **study panel** beside the text (bottom sheet on mobile) where citations, words, terms, Fathers open.
   - IA: doctrine header with neutral tabs (Overview, History & witnesses) | tradition tabs; per-tradition study page; objection pages; verse pages; general history + 290 entity pages.
   - **Owner verdict**: information and resources "muchísimo mejor" than v1; the visual design "a great improvement". **But** page structures and section order confused him: unclear where links lead, how to get back to a place, timelines too small to read and understand (though "extremely valuable"). Core problem to solve: **how we offer this much information**.
4. **UX round 1** (canvas https://claude.ai/artifact/1emZWrzgH7utqFHpri1R3C): structures A guided chapters, B hub + section pages ("portada y fichas"), C stacked panes trail, D questions with a tradition lens; timelines T1 horizontal, T2 vertical by century, T3 lanes per tradition; ⌘K search.
   - **A, C, D rejected** ("no me gustan para nada").
   - **B least disliked**, but not convincing: its "most discussed objections" mixed traditions without making the target clear (and the reader may not care about other traditions there); its "earliest witnesses" was too thin.
   - **T1 loved**: keep it, but **no zoom tabs**; one density like the "Siglos IV y V" view with readable names; explore the whole span by **scrolling the timeline component horizontally** (the page doesn't scroll sideways); adapt header/footer/layout of that page accordingly.
   - **Search liked**: try it.
   - Owner undecided between v2 structure and B.
5. **UX round 2** (canvas https://claude.ai/artifact/CiD9tLWApMVoskyJG2KwDV): four complete proposals, 14 screens each (home, doctrine, tradition, objection, source, verse, word study, timeline, history entity, witnesses, search, 3 mobile): **P1** documentation-style sidebar tree; **P2** editorial landing (B evolved, objections by target tradition + who-objects-to-whom grid, rich witnesses strip); **P3** text + "Conexiones" rail (Sefaria model, grouped connections with counts); **P4** v2 polished (all critique fixes). **Owner feedback pending** — this is where the new project resumes.

**Design principles that held across rounds**: calm, clean, intuitive, "pleasant to use"; not AI slop (no cream+terracotta, gold on navy, parchment, stock cathedrals, identical rounded shadow cards, gradients, ALL-CAPS eyebrows, emoji, Inter, rainbow per tradition, squeezed columns on mobile); one accent; hairlines; real reading typography; two clearly distinct link types (opens beside vs goes to a page); breadcrumbs; every item has one stable URL; timelines large with written labels; Spanish-first copy, sentence case.

Key research conclusions (`research/niche.md`, `analogs.md`): Sefaria is the closest analog (text + connections panel with counts, panel state in URL); Catena Bible for patristic commentary per verse (sort by date, not relevance); The Faith Received (Mere Orthodoxy) closest concept (Read / Compare / Trace / Scripture); OWID topic pages for depth without weight; Stripe-docs-style switcher that keeps your section; word popovers with transliteration and literal meaning first, no raw parsing codes; never translation columns on mobile; calm is the differentiator (deep sites are cluttered, calm ones are thin).

---

## 7. Technical decisions (from v1/v2; revisit freely)

- Next.js 16 App Router (this version differs from training data: `proxy.ts` not `middleware.ts`; global `PageProps<"/route">` / `LayoutProps`; read `node_modules/next/dist/docs/` before using unfamiliar APIs), React 19, TypeScript, Tailwind v4 (`@theme` tokens), `next/font`. Static generation (SSG / ISR). Vercel hosting.
- Content as typed modules / JSON (diffable, reviewable). No CMS.
- Bilingual routing under `/{es|en}`; per-locale slugs (`/es/doctrinas/eucaristia`) still open.
- Analytics PostHog; payments Gumroad/Polar + Mercado Pago.
- Quality floor: visible focus, contrast ≥ 4.5:1 (v2's lightest grey failed), works at 360 px, `lang` on original-language text, reduced motion respected, print stylesheet.

---

## 8. Roadmap: Supabase + AI (decided 2026-10-05, after the UI/UX is settled)

- **Editorial content** (doctrines, positions, objections, glossary, witnesses) stays in git as typed files (human-written, reviewed, diffable). Later, if non-developer reviewers join, move it to the DB with an admin and a review workflow.
- **Reference corpus** (full tagged Bible incl. Hebrew OT — OSHB / STEPBible TAHOT —, lexicon, translations, patristic passages, history, source registry) → **Supabase Postgres**, loaded by idempotent import scripts.
- **User data** (accounts, recents / "Seguir donde dejaste", bookmarks, notes, progress, error reports, email list) → Supabase with Auth and row-level security.
- Pages stay static / ISR; only search and personal data query at runtime. Doctrines reference verses by OSIS id (`John.6.53`).
- **AI**: (1) **semantic search** (pgvector) over our curated content — user-visible, the demo feature; (2) internal tooling with human review: draft Spanish translations of Fathers (marked as translation), citation checking against editions, cross-link and glossary suggestions. **No generated chat answers** (breaks neutrality and trust; costs per query with no revenue).
- **Prepare the codebase from the start**: a data-access layer (`src/data/*` async `getDoctrine`, `getVerse`, `getFather`… — pages never import JSON directly); table-shaped data with stable ids (OSIS refs, slugs, source ids); provenance on every record (license, edition, verified flag); `.env.example`, no secrets in the repo.
- Rough table sketch: books, verses, words (verse, position, original, transliteration, lemma, morphology, glosses), lemmas (Strong's, definition, counts), verse_texts (verse, edition, text), editions (license); works, patristic_passages (text, locator, license) + passage_verses; persons, councils, heresies, divisions, events; profiles, history, bookmarks, notes, progress, error_reports.
- Supabase limits and prices: verify before deciding.

---

## 9. Open decisions

1. **Page structure / navigation** — choose among round-2 P1–P4 (or a mix). Top priority.
2. Name and domain ("Doctrina" is provisional).
3. Anglican as a sixth tradition.
4. Patristic cutoff.
5. Per-locale URL slugs.
6. Reviewer recruitment and the "serious review" mechanism.
7. The unreviewed brainstorm groups (Learning, Video/audio, Trust).
8. Connected-doctrines format.
9. Second doctrine to test that the model generalizes (proposed: justification).

---

## 10. Process lessons

- Parallel agents worked well when each owned distinct files and a shared brief; a coordinator owning shared files (indexes, shared components) avoided conflicts.
- Always look at screenshots (Playwright) before calling UI done; an independent critique agent found real problems (page walls, mobile tab overflow, tiny tap targets, contrast).
- Data agents must record licenses per record and flag anything from memory; several quotes and dates were written from memory and need verification.
- Building a whole new version to explore structure was costly; for undecided UX, proposal canvases with real content were more useful.
