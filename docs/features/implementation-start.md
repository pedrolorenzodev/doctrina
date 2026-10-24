# Implementation start: first coding milestone

Status: B0–B8 built (2026-10-24); see ROADMAP «Current state». Original plan drafted 2026-10-21 by a Plan agent. Pedro's calls D3, D7 (psalms), D8, D9, D12 and the spike: all the recommended options (DECISIONS 2026-10-22 «Implementation start: the six open calls»). Coding still waits for Pedro's explicit go. Gate: coding starts once Pedro has reviewed the five Catholic dossiers (DECISIONS 2026-10-21). Inputs: `DESIGN.md`, DECISIONS, `docs/research/doctrines/*/catholic.md` and `review-page.data.js`, Next 16 docs (`02-guides/internationalization.md`, `04-functions/next-root-params.md`, `03-file-conventions/layout.md`, `02-guides/preventing-flash-before-hydration.md`, `02-components/font.md`, `02-guides/view-transitions.md`).

## 1. First milestone

**Intent:** screen 03 «La posición católica» on the Eucharist, rendered from typed data through the data-access layer, inside the real shell, with the citation window. Proves data model, routing, tokens and the core trust interaction first. Why 03: 02 needs neutral content not yet written; 04 depends on 03's objection list and the window.
- ES complete; EN proves routing and UI strings (content per D3).
- All five Catholic 03 pages build from the same model; Pedro visually approves the Eucharist.
- Out: Videos (cover not designed), search trigger, tradition switcher (D9), full-text reader.

**Acceptance criteria:**
1. `/es/doctrinas/eucaristia/catolica` (shape per D3): header (crumbs, h1, lede), Qué enseña, Por qué, La Escritura que usa, Objeciones, Cómo se vive, Grado de autoridad; all content from `src/content`.
2. Citation window per DESIGN §5: draggable panel (desktop) / bottom sheet (phone), mini timeline, «Copiar cita», focus in/back, Esc order, trigger open state.
3. Shell: top bar (logo, ES/EN, theme), sidebar tree (current/ancestor, drawer below `lg`), right-edge ruler.
4. Every decided motion for these pieces; nothing under `prefers-reduced-motion`.
5. Screenshots 360/390/768/1024/1440 (+1023, 639), light/dark, vs. proposal v2 screen 03; `ui.md` checklist; critique pass; Pedro's approval.
6. The other four Catholic 03 pages build; an unresolved citation/verse/grade id fails `next build`.
7. `npm run verify` green, no horizontal scroll at 360, contrast ≥ 4.5 measured on the texture.

## 2. Decisions before code (recommendation in bold)

- **D1 Content format:** **typed TS modules** with `satisfies`; prose keeps the review pages' inline grammar (`{c:ID|label}`, `{v:Ref}`, `{g:label}`), one parser in `lib` that throws on unknown ids. Alternatives: JSON + schema validator; MDX.
- **D2 Shape:** **one page object per doctrine × tradition** (`TraditionPage`), fixed six-tradition order, shared source registry; only Catholic filled. Alternatives: one big doctrine object; normalized tables.
- **D3 Locale routing:** root layout `src/app/[lang]/layout.tsx` (`next/root-params`, `generateStaticParams` es/en). Slugs **fully localized** (`/es/doctrinas/eucaristia/catolica`, `/en/doctrines/eucharist/catholic`; English folders + `rewrites()`; one href builder in `lib`); `/` → `/es`. EN content: **(a) EN builds shell and UI strings; EN content pages `notFound` until English copy is drafted and reviewed**; (b) AI-drafted English marked draft; (c) no `/en` yet. Never mix languages on a page. **Pedro chooses.**
- **D4 Data-access layer:** **`src/content/`** (types, modules, async getters taking the locale); flow `app → features → content → lib`; `components/ui` never imports it. Update PROJECT "Architecture".
- **D5 Features:** **`src/features/doctrine/`** (02, 03, Objeciones, 04), **`src/features/shell/`** (top bar, sidebar, edge ruler), **`src/components/citation-window/`** + mini timeline (shared with 09 and the reader).
- **D6 Source registry:** **three levels**: work → edition per language (name, licence, url, scan) → citation (work + structured locator + date + excerpts with la/es/en, edition, page, verified flag, translation level). The window never shows edition/licence (DECISIONS 2026-10-14), the data carries them.
- **D7 Locators:** stored as parts of each work's scheme; one formatter in `lib` per locale, inserting the nbsp before digits; verses keyed by OSIS with RV1909 text. **Pedro decides before B10, psalm numbering:** **(a) Hebrew numbering in site text, Vulgate kept inside quoted documents**; (b) Vulgate on Catholic pages.
- **D8 Dossier → data:** **one-off script converting `review-page.data.js` to `src/content`** (structured, Spanish site copy, stable ids), hand-checked against `catholic.md`, run per doctrine after Pedro's answers are applied. **Pedro decides:** after import, `src/content` is the source of truth for site copy and dossiers stay the research record.
- **D9 Links to unbuilt pages:** **render only what is published**: switcher only with ≥ 2 published traditions; sidebar, crumbs and page links check a published list; inline links to 04/Objeciones stay plain text, tracked here, until those land. Alternatives: disabled tabs (internal state, DECISIONS 2026-10-07); links that 404.
- **D10 Motion:** **no motion library**: CSS transitions from tokens; hooks ported from sura-clon (`use-reveal-on-view`, `use-flip-list`); Lenis 1.3.26 in one client component in the `[lang]` layout, dynamic import only without reduced motion. Motion (Framer) needs a proposal (DECISIONS 2026-10-05).
- **D11 Fonts:** **`next/font/google`** self-hosted: Newsreader and Source Serif 4 (`axes: ['opsz']`, italic), Work Sans, Gentium Book Plus 400 (`greek`, `greek-ext`); title entrance waits `document.fonts.ready` ≤ 800 ms. Alternative: `next/font/local` with OFL files.
- **D12 Token granularity:** **role tokens in `@theme`** (colors, `--text-*` roles, 4 px spacing multiples, radii, z-layers, easings, durations), one `@utility` per repeated pattern (texture, link kinds, focus), one-off grid templates as named theme variables. Alternative: Tailwind arbitrary values for one-offs. **Pedro confirms** (`ui.md` is his rule).

## 3. Blocks (one at a time; each ends with `npm run verify`, screenshots and the `ui.md` list)

- **B0 (no UI, right after the gate): done 2026-10-23** (DECISIONS «Block 0»): D1–D12 recorded; code-foundation items 1, 2, 3, 7, 8; `npm run shot`. Items 4, 5, 6, 9, 10 move into B1.
- **B1 Foundation**, split in two (agreed 2026-10-23): **B1a** tokens, fonts, texture, visible h1 + lede; **B1b** locale routing, dictionaries, theme first paint, error shell (plus code-foundation items 4, 5, 6, 9, 10: locale contract with es/en key parity, tokens, tested theme first paint, locale-aware not-found and error boundaries, baseline measurements)**:** `globals.css` tokens light/dark, `@custom-variant dark`, texture, focus, global reduced-motion, `scroll-padding-top`; fonts; `[lang]/layout.tsx` with `html lang` and inline theme script (stored choice, else `prefers-color-scheme`, `suppressHydrationWarning`); es/en UI dictionaries; rewrites and redirect. Visible: 03 h1 + lede.
- **B2 Content layer:** types (D2, D6), D8 conversion for the Eucharist, getters, inline-ref parser, build failure on unknown ids; then the other four doctrines.
- **B3 Top bar:** sticky + texture; logo; ES/EN keeping the page; theme button «Arco botón».
- **B4 Sidebar tree:** sticky own scroll; current/ancestor; «Despliegue» open/close; «Viaja»; drawer below `lg`; only published pages.
- **B5 Main column + right-edge ruler:** padding per breakpoint, ticks, 35 % active rule; Lenis «Apenas» + in-page jump.
- **B6 Primitives (`components/ui`):** link kinds, buttons, icon button, 44 px hit areas, locator formatter.
- **B7 Citation window:** 7a shell/focus/Esc/open state/sheet; 7b mini timeline; 7c drag, remembered position, clamp/re-clamp, «Copiar cita».
- **B8 Qué enseña** (scroll reveal and FLIP hooks built here) · **B9 Por qué** · **B10 La Escritura que usa** (after the psalm decision) · **B11 Objeciones** · **B12 Cómo se vive** · **B13 Grado de autoridad**.
- **B14 Milestone pass:** «Fundido» between the five pages; full screenshots; EN per D3; critique; Pedro.
- After: Objeciones page → 04 → switcher (second tradition) → Videos (after the cover proposal) → search → 02 → 09.
- Parallel: after B6, B9–B13 can go to parallel agents, one section file each; the coordinator owns `globals.css`, `src/content` types and `components/ui`.

## 4. DESIGN traps → GOTCHAS entries or guards

| Trap | Block | Form |
|---|---|---|
| Contrast on texture | B1 | GOTCHA |
| Sticky bar texture | B1/B3 | One `texture` utility for every opaque layer; GOTCHA: tile stays viewport-fixed [inference] |
| View Transition disables transitions | B3 | Guard in the theme toggle |
| Scroll offset | B5 | Guard: Lenis `scrollTo` offset and CSS scroll-padding from one token |
| Lenis options | B5 | GOTCHA + guard: nested scrollers need `data-lenis-prevent`; no `scroll-behavior: smooth` with Lenis |
| Locator nbsp | B6 | Locators only through the formatter; GOTCHA |
| Modal re-clamp | B7c | Guard in the clamp function |
| Title entrance failsafe | B1 | Guard on the 2 s CSS failsafe |
| FLIP off-screen hand-off | B8 | GOTCHA |
| Tab bold width | switcher | Hidden bold copy reserves width |
| Persistent indicator | switcher | Guard: switcher above `[tradition]` in `[doctrine]/layout.tsx` [inference; check] |
| Fast-drag ruler filter, «Ola» tween | 02 ruler | GOTCHA + guard |
| 09 strip takes no layout | 09 | Guard on the zero-height sticky wrapper |
| `next/font` without `axes: ['opsz']` | B1 | GOTCHA (opsz silently does nothing) |
| Changing `[lang]` may remount the root | B3 | Check; «Viaja» sessionStorage fallback [inference] |
| `shadcn init` rewrites `globals.css` | first shadcn use | Add components one by one |

## 5. Can start now, without crossing the gate

- The 05/06 reader decisions (DECISIONS 2026-10-21 «Screens 05 (source) and 06 (verse)», «Reader: highlighting…», and 2026-10-22 «Reader notes…») extend the blocks after the milestone (reader layer, side panel, highlighting, notes), not the first milestone.
- Doc fixes: prune the per-screen notes now in DESIGN from ROADMAP "Now"; Apology numbering is decided (ROADMAP "Next", `.claude/rules/content.md` still call it open); the data-access item in ROADMAP "Next" moves to D4.
- Pedro's calls as he makes them: D3 (EN content), D8, D9, D12, psalm numbering.
- Archive the approved v2 proposal's files in the repo (e.g. `docs/research/structure-proposal-v2/`) so blocks compare against real values.
- English UI string list for the shell, as a doc.
- **Question for Pedro: is a data-model spike "coding"?** (a) types as a schema on paper, checked against the five dossiers; (b) throwaway TS spike in the scratchpad converting the five `review-page.data.js` and type-checking them, nothing in `src/`; (c) wait for the gate. The agent leans to (b).

## 6. Risks

- R1 No English site copy → D3.
- R2 Drift dossier / review data / `src/content` → D8 + a diff report per conversion re-run.
- R3 Holy See quotation rule A/B/C open (ROADMAP "Now" 3) → no public deploy until decided; excerpt length enforced in the citation.
- R4 Proposal source: archived 2026-10-22 in `docs/research/proposals/` (`structure-v2/`, `reader-05-06/`, `screens-07-08/`; source files only, the published artifacts are the reference for behaviour).
- R5 Texture cost (`feTurbulence` on every sticky layer with Lenis) [inference] → render the tile once to a static image in B1; measure in B5.
- R6 Animations across navigation need persistent client components above the changing segment → check remounts in B4.
- R7 Two View Transition users (theme arc vs. React `<ViewTransition>`) → keep one mechanism.
- R8 Unbuilt destinations → D9; plain-text links listed here.
- R9 Versification (psalms; RV1909 numbering, `docs/research/sources/versification.md`) → check every OT reference before B10.
- R10 Static output of rewrites and EN `notFound` → check `next build` route list in B1.
- R11 Time and usage: 15 blocks; parallel agents only on disjoint files after B6.
