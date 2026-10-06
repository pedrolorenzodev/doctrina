# Doctrina v2 — Design system

_Read before touching UI. Tokens live in `src/app/globals.css`. This replaces the v1 "glossed page" design, which was built for a thin one-screen-per-doctrine MVP._

## 1. Concept: the study desk

Doctrina v2 is a place to **study**, not a page to skim. A study desk has a book open in the middle and everything you look up lands beside it, without closing the book. That is the whole interaction model:

- **The reading surface** is calm: one column of text at a comfortable measure, generous space, no chrome competing with it.
- **The study panel** is where depth appears. Tap a citation, a Greek word, a term, a Church Father, a verse reference: it opens *beside* the text (right panel on desktop, bottom sheet on mobile). Inside the panel you can keep following links (a back button returns), and "Open full page" promotes it to its own route. Depth is always one tap away and never in the way. (Precedent: Sefaria's connections panel, Wikipedia page previews, Matuschak's stacked notes.)
- **Every source sits on the same 2,000-year line.** The memorable element is the **time ruler**: a hairline from AD 1 to today with century ticks and one marker. It appears wherever a dated witness appears (citations, earliest witnesses, Fathers, councils, the history timeline). Dates matter to this product; the ruler makes "how early is this?" visible at a glance and ties every page to the general timeline.

The boldness lives in the time ruler and in the typography. Everything else is quiet.

## 2. Structure encodes the core model

The owner's model: neutral global sections + one tradition at a time. The doctrine header makes that structural, not decorative:

```
The Eucharist
What happens to the bread and wine in the Lord's Supper?

Overview   History & witnesses  │  Catholic  Orthodox  Lutheran  Reformed  Baptist
└──── neutral (shared) ───────┘ │  └────────── one tradition at a time ──────────┘
```

A thin vertical rule separates neutral tabs from tradition tabs. The active tab gets a 2px accent underline. These are routes, not client tabs (shareable, SEO).

## 3. Color

Materials of the subject: clean page, iron-gall ink, and **lapis** — the ultramarine of illuminated manuscripts and icons, the most precious pigment a scribe owned. Lapis is the single accent; it marks what you can open (citations, words, terms) and the active state. Nothing else is colored.

| Token | Light | Dark | Role |
|---|---|---|---|
| `--bg` | `#FAFAF8` | `#16181C` | Page. Neutral, not cream. |
| `--bg-2` | `#F1F1ED` | `#1D2025` | Recessed: panel, sheet, code-free wells. |
| `--surface` | `#FFFFFF` | `#202329` | Lifted: study panel, popovers. |
| `--ink` | `#1A1C21` | `#E8E7E3` | Text. |
| `--ink-2` | `#555A64` | `#A7AAB1` | Secondary text, attributions. |
| `--ink-3` | `#878B94` | `#777B84` | Tertiary: ticks, counts, disabled. |
| `--rule` | `#E2E2DD` | `#2D3036` | Hairlines. |
| `--rule-2` | `#CBCBC5` | `#41454C` | Stronger hairlines, ruler axis. |
| `--accent` | `#2C4A9E` | `#9EB3EE` | Lapis. Openable things, active state, ruler marker. |
| `--accent-tint` | `#E9EDF7` | `#242C42` | Selected citation, highlighted verse, hover. |

Traditions get **no colors**. They are identified by name. (Five hues side by side read as a sports table.)

Dark mode is a reading lamp: warm-neutral dark, off-white ink, lapis lifted so it doesn't glow. Three-state toggle (Auto / Light / Dark), persisted, applied before paint.

## 4. Typography

| Family | Role | Why |
|---|---|---|
| **Brygada 1918** | All reading text and headings | A revival of a 1918 Polish book face: warm, sturdy, legible at 18px, with Greek. Has character without the "editorial template" look of Cormorant / Playfair / Fraunces. |
| **Commissioner** | Interface: nav, tabs, labels, locators, buttons, metadata | Humanist sans by a Greek designer; excellent Greek; quieter and less familiar than Inter/Geist. |
| **Gentium Book Plus** | Original-language words (Greek, later Latin/Hebrew with Frank Ruhl Libre) | SIL's scholarly face for polytonic Greek. The owner asked for a dedicated Greek font. |

No monospace anywhere. Sentence case everywhere; no all-caps labels, no tracked eyebrows.

Scale (16px root):

| Role | Face | Size / leading |
|---|---|---|
| Page title | Brygada 400 | `clamp(2.5rem, 5vw, 3.75rem)` / 1.05, tracking -0.01em |
| Question / dek | Brygada 400 italic | `clamp(1.25rem, 2.2vw, 1.5rem)` / 1.35, `--ink-2` |
| Section heading (h2) | Brygada 500 | 1.625rem / 1.2 |
| Sub-heading (h3) | Brygada 600 | 1.1875rem / 1.3 |
| Body | Brygada 400 | 1.125rem (18px) / 1.65, measure ≤ 68ch |
| Quotation | Brygada 400 | 1.0625rem / 1.6, 2px `--rule-2` left rule, no italics, no giant quote marks |
| Greek | Gentium Book Plus | 1.15em of context |
| UI | Commissioner 400/500 | 0.875rem / 1.4 |
| Small UI / locator | Commissioner 400 | 0.8125rem / 1.4, tabular figures |

## 5. Layout

Max width 1360px. Gutter `clamp(1rem, 4vw, 2.5rem)` (16px on phones).

**Study layout (doctrine, tradition, verse pages), ≥ 1100px:**

```
┌ header ────────────────────────────────────────────────────────────────────────────┐
│ Doctrina    Doctrines  Bible  History  Sources            Search ⌘K    ES EN   ◐   │
├────────────────────────────────────────────────────────────────────────────────────┤
│ doctrine header (title, question, tabs)                                            │
├──────────────┬───────────────────────────────────────────┬─────────────────────────┤
│ On this page │  reading column (≤ 68ch)                  │  study panel (400px)    │
│ (sticky TOC, │                                           │  opens on demand,       │
│  200px)      │                                           │  sticky, own scroll     │
└──────────────┴───────────────────────────────────────────┴─────────────────────────┘
```

When the panel is closed the reading column stays where it is (no reflow jump); the right area is empty paper. Below 1100px the panel overlays from the right (max 440px). Below 720px it is a bottom sheet (88dvh max, drag handle, Esc / swipe / scrim to close) and the TOC becomes a "On this page" disclosure under the header.

Left-aligned everything. Nothing centered except empty states.

## 6. Components

- **Openable mark** (citation numeral, word, term, reference): lapis text; terms get a 1px dotted underline in `--ink-3`; hover → `--accent-tint` background; active (its panel is open) → filled tint + solid underline. 44px effective tap target via padding on touch.
- **Study panel**: header row = kind label (Commissioner 13px `--ink-2`: "Source", "Word", "Term", "Person") + back + "Open full page" + close. Body scrolls independently. Content uses the same typography as the page, one step smaller.
- **Time ruler**: 1px `--rule-2` axis, century ticks 4px (`--ink-3`), labels at 1 / 500 / 1000 / 1500 / 2000 in small UI. Marker: 7px lapis dot; ranges ("c. 150–200") as a 3px lapis bar. Height 22px. Optional faint bands for the patristic era (to 749).
- **Authority label**: plain text in small UI before a claim's sources: "Dogma (Trent XIII, can. 1)", "Confession", "Theological opinion". No pills, no colors.
- **Section list rows** (e.g. the five answers, objections list): rows separated by hairlines, title in Brygada 500, one-line summary, a quiet "Study" link. Not cards.
- **Video item**: 16:9 thumbnail at 160px with 6px radius, title (Brygada 500), channel + length in small UI. Clicking plays inline in the panel (youtube-nocookie). Never autoplay. No red YouTube chrome.
- **Buttons**: text buttons by default. One filled lapis button per screen at most, 6px radius.

Radius: 6px for controls and thumbnails, 12px for the mobile sheet top, 0 for typographic blocks. Shadows only on the overlay panel / sheet: `0 12px 40px -12px rgb(0 0 0 / .18)`.

## 7. Motion

Only in response to the reader. The panel slides in 240ms `cubic-bezier(.2,.8,.2,1)`; inside-panel navigation cross-fades 140ms; the chapter expand animates height 260ms. Nothing animates on page load. `prefers-reduced-motion` turns all of it off.

## 8. Voice

Plain verbs, sentence case: "Study this tradition", "Open full page", "Show whole chapter", "Copy citation". The site never says "we believe". Attribution is always visible: "the Council of Trent teaches", "the Westminster Confession states". Neutral sections never assign a Church Father to a modern tradition.

## 9. Refused (niche and AI clichés)

Cream + terracotta; gold on navy; parchment textures; stock cathedrals, Bibles, hands; crosses as decoration; identical rounded cards with soft shadows; gradient washes; ALL-CAPS eyebrows; "·"-joined meta strings; "→" glued to links; monospace locators; emoji; icons in colored squares; giant decorative quotes; one color per tradition; Inter + centered bold hero; squeezed parallel columns on mobile.

## 10. Quality floor

Visible focus (2px lapis outline, 2px offset). Text contrast ≥ 4.5:1 in both themes. `lang` on original-language text. Works at 360px with no horizontal scroll. Print: hide chrome and panel, show sources inline.
