# Doctrina — project

## What it is

A bilingual (Spanish / English) **deep-study resource on Christian doctrine**. For one doctrine at a time it shows, in depth: what each tradition believes and **why**, in its **own words**, with **every primary source** (Scripture, councils, confessions, catechisms, Church Fathers) quoted exactly with edition and license; the Scripture each tradition argues from and how it reads it; the **objections** each tradition faces with its best full answer; how the doctrine is **lived**; how it **developed in the early Church**; and the **original-language text** of every verse involved. Depth is the product: the first designs were judged "far too thin, the same as asking ChatGPT". "Doctrina" is a working name.

**For whom.** Primary: the serious searcher, often young and Spanish-speaking, who watches hours of YouTube debates and wants the real documents. Secondary (likely payers): teachers, students, catechists. Beginners are welcome but secondary.

**What it is not.** Not a chatbot (no generated answers), not a debate forum, not a devotional app, not an argument for any tradition. The site never concludes.

**Trust is everything.** One misattributed quote destroys trust with every side. No claim without a citation, no citation without an edition; unverified content is shown as draft. Before launch, a serious review mechanism is required (Pedro distrusts "reviewed by someone from tradition X" badges; the mechanism is open).

**Owner.** Pedro Lorenzo, 19, Argentina. Junior React / TypeScript / React Native developer; knows Supabase. Builds with AI agents for long autonomous stretches; explain concepts clearly and concretely. Evangelical researching Catholic and Protestant claims, so close to the primary user. Brothers: Ema (frontend, WebGL, AI), Josu (AI, marketing, distribution), Matu (React Native), Santi (React).

## Goals

- **Validate willingness to pay**: fake-door price button, email list, preorder; teachers are the payer hypothesis. Validation hooks below.
- **Distribution is 100% organic, no paid ads**: Reddit, Discord, Facebook groups, faceless TikTok, creators, ForoCristiano. Earlier reports: [market research](https://claude.ai/artifact/6Eq9R7NujEDCAZ7t4R7LkM), [launch and distribution plan](https://claude.ai/artifact/8eizgsjCq1A6fXAmyPCyL8) (its ads and budget sections no longer apply).
- **Payments later** via Gumroad or Polar + Mercado Pago (Stripe isn't available in Argentina).
- **Portfolio**: a CTO may hire Pedro on shipping a product with AI + databases + Supabase. The AI feature must be user-visible and demoable (see "Data architecture").

## Content model (owner-confirmed)

- **Traditions (MVP):** Catholic, Orthodox, Lutheran, Reformed, Baptist/Evangelical. No Anglican for now (open).
- **One tradition at a time** is the default reading mode; the others are one click away. Side-by-side comparison only inside specific features (liked as "compare this question" within a page, not as the default).
- **Neutral (global) sections**, shared and never assigned to a modern tradition: common ground; history of the doctrine; **earliest witnesses** (what Apostolic and Church Fathers literally wrote); patristic commentary on verses. Claiming Ignatius or Irenaeus for one tradition is itself contested. Patristic cutoff is open; the conventional end is John of Damascus (d. c. 749), which keeps Jerome and Augustine.
- **Scripture dossier per tradition**: the passages *that* tradition argues from, typology included (manna, Melchizedek), never a single shared reading.
- **Launch doctrines:** many, the most important ones; the number isn't set yet (changed 2026-10-07, see `DECISIONS.md`). Drafted so far: the Eucharist (pilot). Candidates named earlier: justification, the papacy, sola Scriptura, Mary, baptism, purgatory / intermediate state, saints and intercession, canon of Scripture, church authority / apostolic succession.

## Scope (owner verdicts)

**Key (top priority)**
- **Objections and responses in depth**: per objection, the tradition's best full defense (not three lines), the passages it cites, and videos of creators answering that exact objection. Trigger: "your doctrine is false because the Bible says X".
- **Verse page**: maximum information for every verse a tradition argues from. Collapsed to the verse, expandable to the whole chapter with the verse highlighted; as much patristic commentary as exists; many videos on the passage.
- **Original-language words for any word of a verse**: transliteration first (script on demand), the word's literal **lexical** meaning (not its contextual interpretation). Dedicated Greek font (later Latin, Hebrew).
- **Compare translations**: original text with transliteration plus several translations the reader picks.
- **Earliest witness of X** ("extremely valuable").

**Yes**: reading the whole Bible in the site (confirmed 2026-10-06; canon, translations and phases in `DECISIONS.md`); how it is lived (who presides, elements, who may receive, frequency…); connected doctrines (Eucharist → sacrifice → priesthood → apostolic succession → papacy; format open); context of a citation (paragraphs before and after); authenticity and dating notes on every source (dates matter); copy citation with exact reference; level of authority (Catholic dogma vs doctrine vs theological opinion; confessional vs not); word study (where a word appears, how often); timelines, both per doctrine and a general timeline of Christian history (Fathers and writings; all councils, ecumenical emphasized; heresies each with a page; divisions 431 / 451 / 1054 / Reformation each with an in-depth page; Reformation branches incl. little-known facts); term explanations in place (curated glossary, per-tradition definitions, no AI generation); video commentary per tradition, balanced; search ⌘K with "Recientes" and "Seguir donde dejaste"; the general timeline as a horizontally scrolling component.

**Maybe / lower**: geographic map (where Fathers lived, missions, spread); user-selectable color palettes; custom smooth scroll (Lenis) with a custom desktop scrollbar, to weigh against accessibility.

**Parked**: internal diversity within a tradition.

**Not yet reviewed by Pedro** (don't build): the "Learning", "Video/audio" and "Trust" brainstorm groups.

**Out for now**: accounts, bookmarks, notes, AI Q&A, comments, audio, PDF export, more than 5 traditions, mobile app. Accounts, bookmarks and notes come back with Supabase. **Generated chat answers are out for good** (they break neutrality and trust, and cost per query with no revenue).

**Validation hooks** (still intended): events `read_complete` (≥ 75% scroll + 90 s), `citation_open`, `tradition_switch`, `language_switch`, `email_signup`, `price_click`. Fake door on doctrine pages ("Full guide: 30 doctrines, printable PDF + citation tables" with a price → honest "not built yet" + email). One-question survey after `read_complete` ("What are you using this for?"). Analytics: PostHog free tier.

## Content and data

All content is **draft**. Inventory in `data/` (`raw/` research drafts, `site/` the same data shaped for the v2 site, `scripts/` the builders). Per-file details and licenses: `docs/research/data.md`; doubts to verify: `docs/research/content-notes.md`, `docs/research/history-notes.md`.

- **Eucharist pilot**: 5 positions; per tradition 3 objections (15) with full answers, citations and passages, 10 dossier passages (50), how it is lived, authority levels; 15 glossary terms, 12 earliest witnesses, 25-event doctrine timeline, doctrine dependency edges; 70 YouTube videos verified via oEmbed (20 in Spanish), 7 of 15 objections still without a video; hand-written Spanish objection headlines.
- **John 6**: STEPBible TAGNT Greek (1,289 words) with transliteration, morphology and English/Spanish glosses; TBESG lexicon with NT counts; 8 public-domain translations; 100 patristic entries on 6:47–58, **only 86 safely public domain** (the other 14 must not be published). Patristic texts are English only; Spanish pending (candidate for AI-assisted translation with human review, labelled as translation).
- **General history**: 56 Fathers, 41 councils, 18 heresies with explainer pages, 10 divisions ("how each side tells it"), 20 Reformation branches, 119 events. Many dates from reference memory.

**Licensing rules**
- Public-domain editions by default. Copyrighted texts (Catechism of the Catholic Church, BF&M 2000) only as short excerpts linked to the official source.
- Copyrighted Spanish Bibles (RVR1960, NVI, Biblia de Jerusalén, and the others listed in `data.md`) need written permission. Straubinger is protected in Argentina until 2027-01-01.
- CCEL asks permission for commercial use: prefer Wikisource, Archive.org, bookofconcord.org, New Advent with PD translations.
- STEPBible data is CC BY 4.0 (credit and link back, don't redistribute raw files); its Spanish glosses come from OpenGNT under CC BY-SA 4.0 (share-alike).
- An attribution page is needed (STEP Bible, OpenGNT, SermonIndex, the "WEB" trademark rule).

## Stack

Next.js 16.3 (App Router, Turbopack) · React 19.2 · TypeScript (strict) · Tailwind CSS 4 (CSS-first, `@theme` tokens, no `tailwind.config`, PostCSS via `@tailwindcss/postcss`) · ESLint 9 · npm. Exact versions: `package.json`.

Carried from v1/v2, not yet re-confirmed (revisit freely): `next/font` self-hosted; static generation (SSG / ISR); Vercel hosting; editorial content as typed files / JSON in git (no CMS); bilingual routing under `/{es|en}`; PostHog; Gumroad/Polar + Mercado Pago.

## Architecture

```
src/
  app/                routing only: layouts, pages, metadata, globals.css
  features/<feature>/ one folder per domain: components/, and hooks, types, data… only when needed
  components/ui/      reusable primitives with no domain logic
  lib/                pure functions and constants, no React, no domain
data/                 content drafts and builder scripts (not imported by code yet)
docs/                 these docs; docs/research/ holds the research reports and v2 screenshots
```

- **`app/`**: only what Next needs to route. Pages are thin: they import a feature component and pass props; no business logic, state or complex UI in a `page.tsx`. Route groups `(group)` when different layouts are needed.
- **`features/<name>/`**: everything of one domain together. A change or bug in that domain is solved in one folder; deleting the feature is deleting the folder.
- **`components/ui/`**: generic primitives (button, tag, card…). If only one feature uses it, it lives in that feature.
- **Dependencies flow one way: `app → features → components/ui → lib`.** A feature never imports from another feature; shared code moves up to `components/` or `lib/`.
- **Server Components by default**; `"use client"` as low in the tree as possible.
- Start minimal. Any other folder (`hooks/`, `types/`, `config/`, `services/`…) is created when a concrete piece needs it. Over-structuring, giant global components and business logic inside pages are documented mistakes.
- Root keeps only `public/`, `.env.*`, configs, docs and tool scripts.

**Why this shape.** `src/` is a preference, not an official best practice (Next's docs call themselves unopinionated): it leaves the root for configuration and docs and puts all code in one place, which also helps an agent. Routing-only `app/` plus feature folders is the literature's consensus for mid-size projects; grouping by file type scatters related code as it grows. Discarded: code in the root without `src/`; colocating code per route inside `app/` with private `_folders` (valid, but features are clearer when a piece is reused across pages); client/server role directories (extra folders without need). No rule on barrel files (`index.ts` re-exports): no solid source supports one. Sources: `node_modules/next/dist/docs/01-app/01-getting-started/02-project-structure.md`, `.../03-api-reference/03-file-conventions/src-folder.md`, [GitHub discussion 190342](https://github.com/orgs/community/discussions/190342), [dev.to: App Router directory design](https://dev.to/pipipi-dev/app-router-directory-design-nextjs-project-structure-patterns-31eo).

**Applying it to existing code.** It is a target, not a blind recipe: if code already has a clear, working organization, respect it and document the difference. What matters is grouped domains, thin routes, shared code apart and one-way dependencies. Migrate step by step, run `npm run verify` after each step, and never mix a migration with behavior changes.

## Data architecture (target, decided 2026-10-05; built after the UI/UX is settled)

- **Editorial content** (doctrines, positions, objections, glossary, witnesses) stays in git as typed files: human-written, reviewed, diffable. If non-developer reviewers join later, it moves to the DB with an admin and a review workflow.
- **Reference corpus** (full tagged Bible including Hebrew OT via STEPBible TAHOT or OSHB, lexicon, translations, patristic passages, history, source registry) → **Supabase Postgres**, loaded by idempotent import scripts.
- **User data** (accounts, recents / "Seguir donde dejaste", bookmarks, notes, progress, error reports, email list) → Supabase with Auth and row-level security.
- Pages stay static / ISR; only search and personal data query at runtime. Doctrines reference verses by OSIS id (`John.6.53`).
- **AI**: (1) semantic search (pgvector) over our curated content, user-visible, the demo feature; (2) internal tooling with human review: draft Spanish translations of Fathers (labelled as translation), citation checking against editions, cross-link and glossary suggestions. No generated chat answers.
- Prepared from the start: table-shaped data with stable ids (OSIS refs, slugs, source ids); provenance on every record (license, edition, verified flag); `.env.example`, no secrets in the repo. Pages never import JSON directly: they go through an async data-access layer (`getDoctrine`, `getVerse`, `getFather`…), so swapping to Supabase touches only that layer. **Where that layer lives is open** (see `ROADMAP.md`).
- Rough table sketch: books, verses, words (verse, position, original, transliteration, lemma, morphology, glosses), lemmas (Strong's, definition, counts), verse_texts (verse, edition, text), editions (license); works, patristic_passages (text, locator, license) + passage_verses; persons, councils, heresies, divisions, events; profiles, history, bookmarks, notes, progress, error_reports.
- Supabase limits and prices: verify before deciding.

## Related locations

- `~/Desktop/dev/doctrina-v1-archivo`: v1 thin MVP. `~/Desktop/dev/doctrina-v2`: v2 deep-study prototype (~486 static pages; Playwright tools in `tools/`; research screenshots in `research/screens/`; original data downloads in `data/raw/src/`). Both are read-only references: never develop there.
