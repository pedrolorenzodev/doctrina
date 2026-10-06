# Doctrina v2 — Product plan

_Status: living document. Started 2026-10-03 as a fresh project, replacing the thin v1 MVP (`~/Desktop/dev/doctrina`, kept untouched for reference)._

## 1. What it is

A bilingual (es/en) **deep-study** resource on Christian doctrine. For each doctrine: what each tradition believes and why (in its own words, with every source), the Scripture each tradition argues from and how it reads it, the objections it faces with its best full answers, how it is lived, how the doctrine developed in the early Church, and the original-language text of every verse involved. Beginners are welcome but secondary.

Traditions: Catholic, Orthodox, Lutheran, Reformed, Baptist/Evangelical. Not a chatbot, not a forum, never concludes for a side.

## 2. Core model (owner-confirmed)

- **One tradition at a time.** Each tradition gets its own study page; others are one tab away. Side-by-side compare only in specific features.
- **Neutral sections** shared by all: common ground, history of the doctrine, earliest witnesses, patristic commentary on verses. Church Fathers are never assigned to a modern tradition.
- **Scripture dossier per tradition**: the passages *it* argues from (including typology), and how it reads them.

## 3. Information architecture

```
/{locale}                                   Home
/{locale}/doctrines                         Doctrine index
/{locale}/doctrines/{doctrine}              Overview (neutral): common ground, five answers, earliest witnesses, connected doctrines
/{locale}/doctrines/{doctrine}/history      History & witnesses (neutral): earliest witness per claim, doctrine timeline
/{locale}/doctrines/{doctrine}/{tradition}  Tradition study: what it teaches (with authority level), why, Scripture dossier, objections, how it is lived, videos
/{locale}/doctrines/{doctrine}/{tradition}/objections/{id}   One objection: the tradition's full answer, sources, passages, videos
/{locale}/bible/{book}/{chapter}/{verse}    Verse page: verse → whole chapter, Greek word by word (transliteration, lexical meaning, word study), compare translations, Fathers on the verse, how each tradition reads it, videos
/{locale}/history                           General timeline of Christian history
/{locale}/history/{kind}/{id}               Father, council, heresy, division, Reformation branch
```

Route segments are English in both locales for now. **Open:** per-locale slugs (`/es/doctrinas/eucaristia`) for Spanish SEO.

Interaction backbone (see `docs/DESIGN.md`): everything the reader looks up opens in the **study panel** beside the text (right column on desktop, bottom sheet on mobile), with "Back" inside the panel and "Open full page" to promote it.

## 4. Feature status

| Feature (owner verdict) | Status |
|---|---|
| Tradition study page (one at a time) | Built |
| Source panel: quote, highlighted phrase, context before/after, original, edition, license, dating, copy citation | Built (context/highlight fields need content) |
| Level of authority on claims | Built (first claim per tradition; needs content for the rest) |
| Objections and responses, in depth (KEY) | Built: list + full page with sources, passages, videos |
| Scripture dossier per tradition | Built |
| How it is lived | Built |
| Videos per tradition / objection, playing in the panel | Built (verified IDs only) |
| Earliest witnesses (neutral) | Built |
| Doctrine timeline | Built |
| Connected doctrines | Built as a list; graph view later |
| Term explanations in place (glossary) | Built: first occurrence auto-marked, per-tradition definitions |
| Verse page: verse → chapter, Greek word by word, word study, compare translations, Fathers on the verse | Built for John 6 |
| General timeline + Father / council / heresy / division / branch pages | Built (264 items) |
| Per-doctrine document trace (one lane per tradition + early witnesses) | Built |
| Light / dark / auto theme, persisted | Built |
| Search (⌘K) | Placeholder only |
| Geographic map, palettes, custom scroll | Not started (maybe / lower) |
| Internal diversity within a tradition | Parked |

## 5. Data sources

See `research/data.md` for licenses. Greek: STEPBible TAGNT (CC BY 4.0, attribution required). Translations: public-domain editions only (BSB, KJV, WEB, Douay-Rheims, RV1909, …). Copyrighted Spanish Bibles (RVR1960, NVI, BJ) need permission. History data: `data/raw/history.json` (drafted; see `research/history-notes.md` for dates to verify). Eucharist content drafts: `data/raw/eucharist.content.json` (see `research/content-notes.md`).

**Everything is draft.** No citation ships as reviewed until checked against its edition and read by a reviewer from each tradition.

## 6. Build log

_Updated at the end of each work session._

**2026-10-03 (autonomous session, owner away).**
- Research: niche competitors (`research/niche.md`, 87 screenshots), non-niche UX analogs (`research/analogs.md`, 63 screenshots), data licenses (`research/data.md`), Eucharist content notes (`research/content-notes.md`), history notes (`research/history-notes.md`), design critique (`research/critique.md`).
- Design system from scratch: `docs/DESIGN.md` ("study desk", study panel, 2,000-year time ruler).
- Built every route in §3 for the pilot (Eucharist, John 6, general history): about 480 static pages, `next build` passes.
- Content: 5 tradition studies with 15 objections (full answers, sources, passages, verified videos), 50 dossier passages, authority levels, how it is lived, 15 glossary terms, 12 earliest witnesses, 25-event doctrine timeline, doctrine dependency chain; John 6 Greek word by word with lexicon and NT word study, 8 public-domain translations, 86 public-domain patristic excerpts; 264 history items.
- Content builders: `tools/port-v1.mjs`, `tools/build-eucharist.mjs`, `data/scripts/build_site_john6.py`.

**Next (proposed, not yet approved by the owner):**
1. Owner review of the design direction and the IA (this is the expensive-to-change part).
2. Verify the flagged doubts in `research/content-notes.md` and `research/history-notes.md`.
3. Search (⌘K) over doctrines, verses, Fathers and terms.
4. Second doctrine (justification) to test that the model generalizes.
5. Per-locale slugs; analytics and validation hooks from v1 PLAN §6.

## 7. Open decisions

1. Per-locale URL slugs.
2. Patristic cutoff (conventional: John of Damascus, d. c. 749).
3. Anglican as a sixth tradition.
4. Name and domain ("Doctrina" is a working title).
5. Reviewer recruitment and the "serious review" feature.
6. Remaining brainstorm groups not yet reviewed by the owner: Learning, Video/audio, Trust.

## 8. Supabase + AI (decided 2026-10-05, after the v2 UI/UX is settled)

Doctrina will add a database and AI features in the near future (it also serves as the owner's portfolio piece). Agreed angle:
- **Editorial content** (doctrines, positions, objections, glossary, witnesses) stays in git as typed files: human-written, reviewed, diffable.
- **Reference corpus** (full tagged Bible, lexicon, translations, patristic passages, history, source registry) moves to **Supabase Postgres**, loaded by idempotent import scripts (`data/scripts/`).
- **User data** (accounts, recents / "Seguir donde dejaste", bookmarks, notes, progress, error reports, email list) in Supabase with Auth + row-level security.
- Pages stay static / ISR; only search and personal data query at runtime.
- **AI**: semantic search (pgvector) over our curated content (user-visible, priority); internal tooling with human review (draft Spanish translations of Fathers, citation checking, cross-link and glossary suggestions). **No generated chat answers.**

Prepare the codebase when v2 coding resumes (see §6 Next):
1. A data-access layer (`src/data/*`: async `getDoctrine`, `getVerse`, `getFather`…) so pages never import JSON directly; swapping to Supabase touches only this layer.
2. Table-shaped data from the import scripts (rows with stable ids: OSIS refs, slugs, source ids).
3. Provenance on every record (license, edition, verified flag), needed for both review and AI pipelines.
4. `.env.example` and config for Supabase keys; no secrets in the repo.
