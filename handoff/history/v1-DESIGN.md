# Doctrina — Design system

_Read before touching UI. Tokens live in `src/app/globals.css`; this document explains the decisions behind them._

## 1. Concept: the glossed page

Medieval and early-modern editions of Scripture and the Fathers put the **text in the center and the commentary in the margins** (the _Glossa Ordinaria_, the Talmud page, Erasmus' annotated New Testament). A modern critical edition does the same with its _apparatus_: small numerals in the running text point to the sources at the foot or side of the page.

That is exactly our product: a tradition's words, and the documents they rest on, visible together. So the interface is a **glossed page**: a calm reading column, and a margin where the sources live. The memorable element is the apparatus — the citation marks and the source margin. Everything else stays quiet so that it can be the thing you remember.

Direct precedent: Sefaria (sources open in a side panel next to the text), the Stanford Encyclopedia of Philosophy (dense, trusted, unadorned), print critical editions.

### What we refuse

These are the clichés of the niche and of generated design. None appear in this product:

- Parchment or paper textures, gold-on-navy, stock photos of cathedrals or open Bibles, crosses as decoration.
- The AI cream (#F4F1EA) with a terracotta accent; a near-black with one acid accent.
- Identical rounded cards with the same shadow for everything; gradients as decoration.
- ALL-CAPS tracked eyebrow labels above every heading; meta strings joined with "·"; "→" glued to link text.
- Monospace for references. A locator like _Trent, Session XIII, ch. 4_ is prose, not code.
- One color per tradition shouting in a five-hue rainbow.
- Emoji, icons in colored squares, decorative giant quotation marks.
- Cormorant Garamond light italic as the default display face (it has become the "editorial template" look).

## 2. Color

Materials of the subject: paper, iron-gall ink (blue-black when fresh), and the **rubric** — the red ink scribes used for headings, initials and marks of structure. Red is not an "accent"; it is the color of apparatus. It marks structure and citations, never mood.

| Token | Light | Dark | Role |
|---|---|---|---|
| `--paper` | `#F5F5F2` | `#1C1D21` | Page ground. Cool, slightly grey — unbleached linen, not cream. |
| `--paper-2` | `#ECECE8` | `#24262B` | Recessed areas: source margin, panels. |
| `--ink` | `#1E2028` | `#E6E5E0` | Body text. Blue-black, like iron-gall ink. |
| `--ink-2` | `#5C5F6A` | `#A2A4AC` | Secondary text, attributions. |
| `--rule` | `#D5D5D0` | `#353840` | Hairlines. |
| `--rubric` | `#A6382B` | `#E0786A` | Citation marks, active state, section marks. The only saturated color on the page. |
| `--rubric-2` | `#F4E6E2` | `#3A2723` | Rubric tint for hover and selected citation. |

Tradition tints — used **only** as a 3px left rule on a position and as a wash behind its panel in compare view. Desaturated so five can sit together without noise. They are not brand colors and do not appear in text.

| Tradition | Light wash | Rule |
|---|---|---|
| Catholic | `#F1E9E6` | `#8E5A4E` |
| Orthodox | `#F1ECDF` | `#8A7440` |
| Lutheran | `#E8ECEF` | `#4E6273` |
| Reformed | `#E7EEEA` | `#4C6B5A` |
| Evangelical | `#EEEAE4` | `#7A6A55` |

Dark mode is a **reading lamp**, not an inversion: warm-neutral dark paper, off-white ink, rubric lifted and desaturated so it doesn't glow. Tradition washes become darker versions of the same hue at ~8% opacity over `--paper-2`.

## 3. Typography

Two families, clearly distinct in role.

**Literata** (variable, optical sizes) — reading. Designed for long-form reading on screens (Google Play Books). Real italics, small caps, **Greek and Cyrillic**, which we need for original texts. Used for: all running text, quotations, doctrine titles.

**Public Sans** — interface. Quiet, neutral grotesque without the Inter/Geist familiarity. Used for: navigation, tradition switcher, labels, buttons, locators, metadata. Never for body text.

No monospace anywhere.

### Scale (rem; 1rem = 16px; fluid with `clamp`)

| Role | Face | Size | Leading | Notes |
|---|---|---|---|---|
| Doctrine title | Literata 400 | `clamp(2.25rem, 4.5vw, 3.25rem)` | 1.1 | Regular weight, not bold. Size and space carry it. |
| Question | Literata 400 italic | `clamp(1.25rem, 2vw, 1.5rem)` | 1.35 | The italic is for the question only. |
| Section heading | Literata 500 | `1.375rem` | 1.25 | |
| Body | Literata 400 | `1.0625rem` (17px) | 1.65 | Measure **≤ 66ch**. |
| Quotation | Literata 400 | `1.0625rem` | 1.6 | Set apart by the rubric mark and indent, **not** by italic or giant quotes. |
| Original language | Literata 400 | `1rem` | 1.6 | Greek/Latin, `--ink-2`. |
| UI label | Public Sans 500 | `0.8125rem` (13px) | 1.4 | Sentence case. Tracking normal. |
| Locator | Public Sans 400 | `0.8125rem` | 1.4 | e.g. _Session XIII, ch. 4_. `--ink-2`, tabular figures. |
| Citation mark | Public Sans 500 | `0.7em` superscript | | `--rubric`. |

Headings get `text-wrap: balance`. Numerals are `tabular-nums` in locators only.

## 4. Layout

Grid: 12 columns, max content width 1200px, side gutter `clamp(1rem, 4vw, 3rem)`.

**Doctrine page, desktop (≥ 1024px):** reading column 7 cols (≈ 66ch), source margin 4 cols, sticky, 1 col gap. The margin shows the sources cited in the section currently on screen; clicking a citation mark scrolls the margin to that source and gives it the rubric tint.

```
┌ header ─────────────────────────────────────────────────────────┐
│ Doctrina        Doctrines  Sources  Traditions  About    ES|EN  │
├─────────────────────────────────────────────────────────────────┤
│  The Eucharist                              │                   │
│  What happens to the bread and wine …       │  Sources on this  │
│                                             │  page             │
│  Common ground ──────────────────────       │                   │
│  Every tradition celebrates …               │  ¹ Trent, XIII    │
│                                             │    canon 1        │
│  [Catholic] Orthodox  Lutheran  Reformed  … │    "If any one    │
│  ───────────────────────────────────────    │     denieth…"     │
│  ▍The bread and wine truly become …         │                   │
│  ▍                                          │  ² CCC §1374      │
│   What they believe                         │                   │
│   Christ is contained … substantially.¹ ²   │  ³ Ignatius,      │
│                                             │    Smyrn. 7:1     │
│   Why                                       │                   │
│   Jesus' words are read literally …³        │                   │
└─────────────────────────────────────────────┴───────────────────┘
```

**Compare view (desktop):** two or three positions as columns with their tradition wash; sources collapse to marks that open a drawer. Default is **one tradition at a time**; compare is a mode the reader turns on. (Open decision in PLAN.md §8.)

**Mobile (< 768px):** single column. Tradition switcher is a horizontally scrollable row pinned under the header. Citation marks open a **bottom sheet** with the source. Margin content appears as a "Sources on this page" section at the end.

Alignment: everything left-aligned. Nothing centered except the empty state.

## 5. Components

- **Citation mark** — superscript numeral, `--rubric`, 44px tap target via padding. Hover: `--rubric-2` background. Active: filled rubric, paper-colored numeral.
- **Source entry** (margin / sheet) — numeral, source title (Public Sans 500), locator (`--ink-2`), quotation (Literata), original text if any, edition line with license, "Open in edition" link. A 1px `--rule` above each; no card box.
- **Position** — 3px left rule in the tradition's rule color; summary set larger (1.1875rem); then "What they believe" / "Why" / "Key terms" as small Public Sans headings.
- **Tradition switcher** — text buttons in Public Sans, active one underlined 2px in the tradition's rule color. Not pills, not tabs with boxes.
- **Draft banner** — full-width `--rubric-2` strip under the title: "Draft. Citations not yet verified by a reviewer." Plain, no icon.
- **Language switch** — "ES / EN" text, active in `--ink`, inactive `--ink-2`. Preserves the current doctrine.
- **Buttons** — 1px `--ink` border, 4px radius, Public Sans 500. Fill on hover. One primary per screen at most.
- **Links in prose** — underline 1px, offset 3px, `--ink`; hover moves to `--rubric`.

Radius: 4px for controls, 0 for anything typographic, 12px only for the mobile sheet. Shadows: only the sheet and the drawer, `0 -8px 32px rgba(0,0,0,.12)`.

## 6. Motion

One orchestrated moment: opening a source. The margin entry receives the rubric tint and the page scrolls it into view (220ms, `cubic-bezier(.2,.7,.2,1)`). The bottom sheet slides up (260ms). Switching tradition cross-fades the position (160ms). Nothing animates on page load. `prefers-reduced-motion` disables all of it.

## 7. Voice

Sentence case everywhere. Plain verbs: "Open in edition", "Report an error", "Compare". The site never says "we believe"; it says "the Catholic Church teaches", "the Westminster Confession states". Attribution is always visible. Errors and empty states say what happened and what to do.

## 8. References (competitor UI review, 2026-10-01)

Screenshots of 16 niche sites were reviewed. What we take and what we leave:

**Take**
- **Catena** (catenabible.com): sources physically beside the text, and the quoted phrase highlighted *inside* the source passage. Our margin should highlight the exact words that support the claim.
- **The Faith Received** (Mere Orthodoxy): the closest concept to ours. Borrow the idea of "the same question in each tradition's own document" side by side, and a timeline of documents per tradition (Ignatius 107 → Trent 1551 → Augsburg 1530 → Westminster 1646 → Dositheus 1672) as a later feature.
- **Magisterium AI**: a visible *weight* for each source. Add a quiet label to each source entry: dogmatic definition, confession, catechism, Church Father, theologian.
- **denominationdifferences.com**: the right data model (question → answer per tradition → sources per cell). A small agreement table at the foot of each doctrine (real presence? sacrifice? change of substance?) is a good Phase 2 feature, done calmly.
- **ESV.org / churchfathers.org**: typographic discipline, quiet superscripts, no images at all.

**Leave**
- Gold or amber on navy with Cinzel, stained glass, stars (Exegesis, TheoSumma).
- Renaissance painting heroes, stock photos of Bibles and hands, library arches.
- ChatGPT skin: Inter, centered 60px bold headline, prompt chips, black pill button.
- Saturated color per denomination in table cells.
- Parallel columns on mobile (BibleGateway at 390px is unreadable). Mobile uses the tradition switcher, never squeezed columns.
- Citations with no link to the full text, and the opposite (every noun a link).
- Empty "sources will appear here" panels. Our margin is always full because the page is static.

**Non-religious analogs** (Sefaria, Ground News, AllSides, Perseus, OED, Versus, Every, Linear, 19 sites):
- **Sefaria** is the closest analog. Its source panel has three levels: categories with counts, then a list of sources with a one-line bio, then the passage itself in the panel, with an "Open" that promotes it to its own reading column. Panel state lives in the URL. On mobile the panel is a bottom sheet right under the highlighted line. This is the model for our margin and mobile sheet.
- **Ground News**: a segmented control that swaps the same slot in place (we already do this with the tradition switcher) and a small key-value rail with counts. A future "at a glance" rail could list: number of sources per tradition, earliest witness, authority level.
- **OED**: faceted tabs on an entry. A doctrine page could later split into facets (Positions / History / Sources / Differences).
- **Theme**: the best readers (Ground, Etymonline) offer Auto / Light / Dark and persist the choice. We only follow the system today; a three-state toggle is in the gaps list.
- The review recommends monospace for metadata. We keep our decision against it (§1): locators are prose and are set in Public Sans with tabular figures.

Our palette and type already sit inside the direction the review points to (near-white paper, one ink, a restrained red, a real reading serif), without the cream-and-terracotta look of The Faith Received.

## 9. Quality floor

Keyboard focus visible (2px `--rubric` outline, 2px offset). Contrast ≥ 4.5:1 for text in both themes (rubric on paper is 6.9:1). `lang` attributes on original-language text. Works at 360px. Print stylesheet: hide chrome, show sources inline after each position.
