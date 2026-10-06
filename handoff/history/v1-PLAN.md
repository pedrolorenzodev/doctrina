# Doctrina — Product plan

_Status: living document. Sections marked **Open** need a decision before build starts._

## 1. What it is

A bilingual (Spanish / English) reference site that answers, for one doctrine at a time:

1. **What** each of the main Christian traditions believes.
2. **Why** it believes it.
3. **Where that comes from** — the primary sources (Scripture, councils, confessions, catechisms, Church Fathers), quoted exactly, with edition and a link.

The third point is the product. Everything else exists to get the reader to the sources and let them judge for themselves.

### Who it's for

- **The searcher** (primary): a believer, often young, comparing traditions seriously. Wants the real documents, not a summary written by the other side. Consumes hours of YouTube debate; has no tool that shows the texts side by side.
- **The teacher** (secondary, likely payer): catechists, small-group leaders, apologists, theology students. Needs citable, printable, accurate material.
- Both are sensitive to bias. A single misattributed quote destroys trust with all sides.

### What it is not

- Not a chatbot. No generated answers. If AI is ever used, it only searches our curated base.
- Not a debate platform, forum, or comment section.
- Not a devotional or prayer app.
- Not an argument for any tradition. Each tradition speaks in its own words; the site does not conclude.

## 2. MVP scope

### Content

- **5 doctrines** at launch, 10 as stretch. Launch set (most-searched and most-debated): the Eucharist, justification, the papacy, sola Scriptura, Mary. Stretch: baptism, purgatory / the intermediate state, saints and intercession, the canon of Scripture, church authority / apostolic succession.
- **5 traditions**: Catholic, Orthodox, Lutheran, Reformed, Baptist/Evangelical. (Anglican is **Open** — it fits between Catholic and Reformed and complicates every table.)
- Per doctrine: central question, common ground, key Scripture passages (no interpretation), one position per tradition (summary, claims, reasons, key terms), related doctrines.
- Per citation: exact locator, text in both languages, original language when relevant, edition, license, link.
- Public-domain editions by default. Copyrighted texts (Catechism, BF&M 2000) quoted in short excerpts with links. See `src/content/sources/index.ts`.
- Every doctrine carries `status: draft | in-review | reviewed`. **Nothing ships as "reviewed" without a reader from each tradition signing off.** Reviewer names appear on the page.

### Features (in)

| Feature | Why it's in |
|---|---|
| Doctrine page with tradition switcher and side-by-side compare | The core value |
| Source panel: click any citation → full passage, edition, original text, external link | The differentiator; the thing to make feel premium |
| Doctrine index (home) | Entry point; 5–10 items, no search needed yet |
| Source registry page (`/sources`) | Shows our seriousness; every source, its license, what cites it |
| Tradition pages (`/traditions/catholic`) | Self-description + list of positions; lets one side see itself fairly represented |
| Language switch that keeps you on the same doctrine | Bilingual is a launch requirement |
| Light and dark reading themes | Long-form reading; user preference |
| "Report an error" link on every citation | Trust mechanism; also our review pipeline |
| Fully static, fast, printable | Teachers print; SEO long tail |
| Email capture + validation hooks (see §6) | The whole point of the MVP is to measure interest |

### Features (out, for now)

Search, accounts, bookmarks, notes, AI Q&A, comments, Greek/Latin interlinear, audio, PDF export, more than 5 traditions, mobile app.

## 3. Information architecture

```
/                         → redirects to /es (or Accept-Language)
/es, /en                  → Home: the question of the week + doctrine index
/es/doctrinas/[slug]      → Doctrine page
/en/doctrines/[slug]
/es/fuentes, /en/sources  → Source registry
/es/fuentes/[id]          → One source: what it is, license, every passage we cite from it
/es/tradiciones/[id]      → One tradition: self-description, its positions across doctrines
/es/acerca, /en/about     → Method, neutrality policy, reviewers, how to report an error
```

Slugs are per-locale (`eucaristia` / `eucharist`). `src/lib/i18n.ts` holds the segment names.

### Doctrine page anatomy (**Open**: final layout depends on `docs/DESIGN.md`)

```
┌──────────────────────────────────────────────────────────────┐
│ The Eucharist                                                │
│ What happens to the bread and wine in the Lord's Supper?     │
│ Common ground: …                                             │
├──────────────────────────────────────────────────────────────┤
│ Scripture everyone reads: John 6 · 1 Cor 11 · 1 Cor 10       │
├──────────────────────────────────────────────────────────────┤
│ [Catholic] [Orthodox] [Lutheran] [Reformed] [Evangelical]    │
│  ── one tradition at a time on mobile, 2–3 columns desktop   │
│  Summary                                                     │
│  What they believe        ¹ ²                                │
│  Why                       ³                                 │
│  Key terms                                                   │
├──────────────────────────────────────────────────────────────┤
│ Sources cited on this page  (¹ Trent XIII c.1  ² CCC 1374 …) │
└──────────────────────────────────────────────────────────────┘
        ↳ clicking ¹ opens the source panel (side drawer on
          desktop, bottom sheet on mobile) with the full passage
```

## 4. Content pipeline

1. **Draft** in `src/content/doctrines/<id>.ts` from the normative documents of each tradition. Public-domain editions from Wikisource / Archive.org / bookofconcord.org / hanover.edu, not CCEL (asks permission for commercial use).
2. **Verify** every locator against the edition. Add `url` when a deep link exists.
3. **Translate** what only exists in one language; mark it as our translation in the UI.
4. **Review**: one reader per tradition checks that their position is stated as they would state it. Their name goes in `reviewers`.
5. **Publish** by flipping `status`. Pages with `draft` render a visible banner.

## 5. Technical decisions

| Decision | Choice | Why |
|---|---|---|
| Framework | Next.js 16, App Router, static export where possible | SEO, i18n routing, the owner knows React |
| Styling | Tailwind v4 with `@theme` tokens; no component library | Full control over the look; avoid the "shadcn look" |
| Fonts | `next/font` (self-hosted) | No layout shift, no third-party requests |
| Content | Typed TS modules | Type-checked citations; no CMS to run; diffable in git |
| Analytics | PostHog (free tier) | Need return visits and scroll depth; Plausible can't do retention |
| Hosting | Vercel | Zero-config for Next |
| Payments (later) | Gumroad or Polar + Mercado Pago | Stripe isn't available in Argentina |

## 6. Validation hooks (organic only, no paid ads)

Built into the MVP from day one, because the MVP exists to measure:

- Events: `read_complete` (≥75% scroll + 90s), `citation_open`, `tradition_switch`, `language_switch`, `email_signup`, `price_click`.
- **Fake door** on every doctrine page: "Full guide: 30 doctrines, printable PDF + citation tables" with a price. Click → honest message ("not built yet; leave your email for 50% off") + email field.
- **One-question survey** after `read_complete`: "What are you using this for?" (curiosity / family discussion / study / teaching others). Teaching is the payer hypothesis.
- Go / iterate / stop thresholds live in the launch plan (external doc), applied at ≥1,000 unique visitors.

## 7. Roadmap

| Phase | Deliverable | Done when |
|---|---|---|
| **0. Foundations** (now) | Repo, content model, design system, this plan | `npm run build` passes; DESIGN.md approved by owner |
| **1. One doctrine, perfect** | Eucharist page + source panel + home, both languages, light/dark | Owner would show it to Ema without embarrassment |
| **2. Five doctrines** | Content drafted and verified; source and tradition pages; about page | All 5 at `in-review` |
| **3. Measure** | PostHog, fake door, survey, email | Events verified in PostHog |
| **4. Review & launch** | One reviewer per tradition; fix; flip to `reviewed` | Launch checklist in the distribution plan |

## 8. Known gaps in the current build

- `Citation.locator` is a plain string, so "Juan 6:53" shows in the English UI. Make it `Localized`.
- Mobile: sources render as a list at the end of the page; the bottom sheet from DESIGN.md §4 is not built.
- Compare view (two or three traditions as columns) is not built; only one tradition at a time.
- Source registry, tradition pages and about page are routed in the header but have no page yet.
- No analytics or validation hooks yet (§6).
- Theme follows the system only; add an Auto / Light / Dark toggle that persists (DESIGN.md §8).
- Source weight label (dogmatic definition / confession / Father / theologian) and in-source highlight of the quoted phrase: from the competitor review, see DESIGN.md §8.

## 9. Vision correction (2026-10-02)

The owner's intent is a **deep-study resource**: learn in depth what each tradition believes, its reasons, and how the doctrine developed historically. A beginner-friendly layer is welcome, but it is secondary. The first design round (four directions, one screen per doctrine with a summary and a few sources) was judged far too thin. Sections 2–3 must be rewritten around depth before more UI work. Every depth feature multiplies content work; see the content-cost note in §10.

### Structure decisions and ideas from the owner (2026-10-02, not yet ordered)

- **One tradition at a time is the core model.** The reader studies a single tradition in depth; other traditions are one click away. Side-by-side comparison only in a few specific features, not by default.
- **Some sections are neutral (global), not per tradition**: Common ground, History of the doctrine, Patristic commentary.
- **History of the doctrine is neutral and focused on the early Church**: the Apostolic Fathers and the Church Fathers of the first centuries, presented as literal evidence (what each Father actually wrote), **never assigned to a present-day tradition**. Rationale: claiming Ignatius or Irenaeus for one tradition is itself contested ("they weren't Catholic"). Not the full 2,000 years. **Open:** where to set the cutoff without losing major figures like Jerome. Data point: the conventional end of the patristic era is Isidore of Seville (d. 636) in the West and John of Damascus (d. c. 749) in the East, which includes Jerome (d. 420) and Augustine (d. 430).
- **Scripture dossier is per tradition**, not global. Each tradition lists the passages *it* uses as arguments (e.g. Catholics read Old Testament types such as the manna or Melchizedek as prefiguring the Eucharist; Protestants don't). Avoids implying a shared reading that doesn't exist.
- **Patristic commentary on the doctrine's key verses** (global section): for each relevant verse, what the Fathers wrote about it, where such commentary exists. Candidate data: `sermonindex/early-church-fathers` on Hugging Face (≈68K patristic passages aligned to verses, CC BY 4.0), and the model of Catena Bible.
- **Video commentary on key verses, per tradition**: e.g. on John 6 in the Catholic view, links to Trent Horn, Joe Heschmeyer, Jimmy Akin, Catholic Answers; equivalent creators for each other tradition. For readers who learn better by video and audio.

### Owner's verdicts on the brainstorm (2026-10-02)

**Key (owner's top priority)**
- **Objections and responses, in depth.** The section the owner cares about most. Real-life trigger: "your doctrine is false because the Bible says X". For each objection: the tradition's *best* full defense (not three lines), the passages it cites inside that defense, and **videos of creators answering that exact objection**.
- **Original-language words for ANY word of a verse**, not a hand-picked few: original script, transliteration, and the word's **literal lexical meaning** (not its meaning in this verse, which would be interpretation). Implementation idea, to verify: open, word-tagged Greek/Hebrew texts (e.g. STEPBible's tagged texts, CC BY), Strong's numbers and public-domain lexicons (Strong's, Thayer); BSB and RV1909 have Strong's-tagged editions.

**Yes**
- **How it is lived**: what actually happens in the Mass, the Divine Liturgy, a Lutheran service, a Baptist Lord's Supper; likewise for other doctrines (what a pope, priest or elder does in practice).
- **Connected doctrines**: how doctrines depend on each other (Eucharist → priesthood → apostolic succession → papacy). Format still unclear.
- **Context of a citation**: the paragraphs before and after every quote.
- **Authenticity and dating notes** on every source; dates are especially important.
- **Copy citation with exact reference.**
- **Level of authority**: e.g. in Catholic teaching, distinguish dogma from doctrine from theological opinion, to avoid false attributions.

**Not convinced (parked)**
- Internal diversity within a tradition.

**Bible (owner's verdicts)**
- **Verse page — key.** Maximum information for every verse a tradition uses as an argument; never skimp. Includes:
  - **Expand to the whole chapter** with the argued verse highlighted, so the reader can see full context; collapsed by default to just the verse.
  - **As much patristic commentary as exists**, plus theologians up to the early-Church cutoff we set.
  - **Many videos** explaining the passage (same as for each doctrine overall).
- **Word study — yes.** Where a word appears and how often.
- **Compare translations — definitely, very important.** Original text with transliteration, plus several translations the reader picks from our catalog.

**History, neutral (owner's verdicts)**
- **Timelines, both kinds**: per doctrine, and a **general timeline of Christian history**, including:
  - when each Church Father lived and when their best-known writings appeared;
  - all councils, ecumenical and local, with ecumenical ones emphasized;
  - the major heresies and when they were formulated, each opening a page that explains it;
  - the divisions, e.g. 451 (Oriental Orthodox) and 1054 (East–West), each opening an in-depth page on the controversy;
  - the Protestant Reformation and how Protestantism developed afterwards, its branches, including data that is often not taught.
- **Geographic map — maybe, lower priority.** Where each Father lived; where the apostles and first Christians traveled; how Christianity spread from Jesus onward.
- **Earliest witness of [X] — definitely, extremely valuable.**

**Still to review**: Learning, Video/audio, Trust groups of the brainstorm.

## 10. Owner's feature backlog (2026-10-02, owner's priority order; to be re-planned)

**Next**
- **Term explanations in place.** Any term a reader doesn't know ("concilio", "consagración", "sacramento") can be explained without leaving the page, concisely, faithful to the sources and to each tradition. Where traditions define a term differently, show each definition. Proposed approach: a curated glossary in `src/content/glossary`, terms auto-marked in the text, tap/hover to open. No AI generation.

**Medium**
- **Original-language words**: a dedicated font for Greek (and later Latin/Hebrew); show a **transliteration** first (e.g. *metousíōsis*), with the Greek script available on demand.
- **Custom scroll** (owner's brother Ema's pattern from another project): Lenis smooth scrolling, fast rather than heavy; a custom ~400px scrollbar in the brand colors with the thumb in the accent, native scrollbar hidden on desktop. On mobile keep native scroll and only style the native bar. To evaluate against accessibility and reading comfort before adopting.

**Maybe**
- **User-selectable color palettes** (a few curated options).
- **Video sources per doctrine**: recognized apologists and teachers on YouTube, linked from each doctrine, because many people learn better through video and audio. Must be balanced across traditions to keep neutrality.

## 11. Open decisions

1. **Anglican** as a sixth tradition, or fold into notes?
2. **Compare view default**: one tradition at a time (calmer, mobile-first) vs. all columns at once (the "wow", but dense). Prototype both in Phase 1.
3. **Original-language text**: show Latin/Greek inline from day one, or Phase 2?
4. **Name and domain.** "Doctrina" is a working title.
5. **Reviewer recruitment**: who are the first five readers?
