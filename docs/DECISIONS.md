# Decisions

Newest first. Entries dated before the 2026-10-05 restart come from the v1 and v2 prototypes (consolidated from `handoff/`); they hold unless marked "Replaced by". Things not yet decided live in `ROADMAP.md` as "Decide:", never here. An "owner verdict" on a prototype is feedback, not an adopted design.

## 2026-10-07 · Navigation: P1's tree sidebar, documentation style (Pedro chose; to validate in a polished proposal)
**Chosen:** the navigation of UX round 2's P1: a tree sidebar always present on desktop, in the style of code documentation. Collapsible and expandable, open by default. It marks the current page and shows what surrounds it; jumping between distant branches ("Doctrinas / Eucaristía / Católica / Objeciones / x" → "Doctrinas / Sacerdocio / Católica / Objeciones / x", or to the Bible) keeps the visited branches expanded, so the tree doubles as a visual history the reader can collapse. Expanded branches reset on each visit (not remembered between visits). The content of each screen is still being decided.
- Agent proposals to test in the polished proposal, not yet confirmed by Pedro: a "collapse all but where I am" control; the sidebar scrolls itself to the current branch; the Bible tree goes down to book → chapter only (verses are picked on the chapter page); a small filter inside the sidebar for long lists (56 Fathers, 41 councils); on mobile the sidebar becomes a menu that opens on demand (review P1's mobile screens 12–14); around 1024px the sidebar starts collapsed.
**Why:** compared with the headers of P2–P4, the sidebar wins by far for Pedro: at any moment it shows which page you're on and what surrounds it, moving between distant pages is easy, and the expanded branches remind you where you've been so you can go back.
**Discarded:** P2, P3 and P4's header navigation. Remembering expanded branches between visits.

## 2026-10-06 · Who raises an objection: out of previews, quiet on the objection page (Pedro chose)
**Chosen:** objection previews (doctrine pages, screen 02 in every proposal) show only the objection and the position it targets, not who raises it. The objection's own page keeps the attribution once, quietly ("Suelen plantearla reformados y bautistas"), not as a highlighted fact.
**Why:** Pedro cares about the objection, not who raises it; in a preview it is noise. On the objection page the attribution protects neutrality: an objection with no owner reads as the site making it, while an attributed one shows the site reports rather than attacks; it also helps a reader place an argument met in real life. `raisedBy` is editorial judgment flagged for review (`docs/research/content-notes.md`), so showing it less lowers the risk of misattribution.
**Discarded:** removing the attribution everywhere; keeping it in previews. If P2 is chosen, its "Quién objeta a quién" grid needs rethinking under this decision.

## 2026-10-06 · Search: P1's component, with results that explain themselves (Pedro chose)
**Chosen:** after comparing the four search screens (UX round 2, screen 11), P1's is the base: the cleanest, and its breadcrumb path ("La Eucaristía / Católica / Objeción") gives the key information simply. Changes, each result having at most two lines under its title:
- Line 1: the breadcrumb path and, on the same line but clearly apart, the date when the item has one (verses, objections and words have none). How to separate them is tried visually in a proposal: date at the far right with no symbol (agent's recommendation), a thin vertical rule, or a small symbol (Pedro's idea; note the design principles ban "·"-joined strings).
- Line 2: why the item matched, with the query highlighted in yellow as in P3: an explanatory phrase (Docetismo: "Negaba la realidad de la carne de Cristo", as in P4) or, for Fathers and sources, a verbatim fragment of the quote, visibly marked as a quote (Spanish guillemets «…», "…" when cut; never rewritten to fit).
- Line 2 always comes from the result's real text, never from hidden keywords. If the match came another way ("carne" → σάρξ; later, semantic search by meaning), the line says so ("sarx, «carne» en griego").
- The yellow highlight is the functional mark for a match, not a second decorative accent; it needs a dark-mode variant that stays readable.
**Why:** in P1, searching "carne" returned Ignacio de Antioquía and Docetismo through hidden keywords, with nothing on screen explaining why; a reader new to the subject couldn't tell.
**Discarded:** P2–P4 search layouts as the base; showing results matched only by invisible keywords.

## 2026-10-06 · Unknown birth dates are shown as unknown, with sourced estimates (Pedro chose)
**Chosen:** when no ancient source gives a person's birth date, the UI says so instead of omitting it: "Nacimiento: desconocido; suele estimarse c. 35 (algunos, hasta c. 50)", with the estimate's source. On the timeline, a life span whose start is estimated begins with a faint or dashed stroke. Applies to every such person, not only Ignatius; anonymous works show their composition range instead.
**Why:** Pedro couldn't find Ignatius' birth on P1·09. Our data leaves it empty because it is unattested: "c. 35" is a modern estimate (English Wikipedia says c. 33 with no citation; other sources give c. 35 to 50), while his death has ancient support (Eusebius). Showing both in the same format would make the estimate look as solid as the attested date.
**Discarded:** omitting unknown births; filling them with an estimate formatted like an attested date.

## 2026-10-06 · Death dates: words, and † where space is tight (Pedro chose)
**Chosen:** no "m." abbreviation (Pedro didn't read it as "murió"). Where there is room, words: "Nació c. 69", "Murió 155" (en: "Born", "Died"). In compact places (timeline labels, lists, compact cards), "†" before the date, with a tooltip saying "murió" and visually hidden text for screen readers ("murió en 155"). The † is used only for death, never as a footnote mark or anything else.
**Why:** † is a known convention for death; screen readers read it as "dagger"; a young reader may not know it, so it only replaces words where space forces it. It is a meaningful typographic sign, not a cross as decoration (allowed by the design principles).
**Discarded:** "m." / "d."; † everywhere.

## 2026-10-06 · Read the whole Bible in the site (Pedro chose)
**Chosen:** a feature of its own, independent of the page-structure choice: any book and chapter, read continuously, with the same reader as the other sources; every verse opens its detail.
- Canon: the 66 books plus the deuterocanonical books in a separate section that says Catholics and Orthodox receive them as Scripture and Protestants don't; its heading gives both names (deuterocanonical / apocrypha).
- Deuterocanonical books in Spanish: shown in English (Douay-Rheims) with a notice that Spanish isn't available yet; an OCR and correction project for Torres Amat (1825, public domain) comes later. Straubinger is not used until its legal status is checked (public domain in Argentina from 2027-01-01, protected in Spain until 2037, and the site is read in both).
- Default translations: Reina-Valera 1909 in Spanish (the only complete public-domain one; old spelling), BSB in English; the others are selectable.
- Two phases: first text-only reading as static pages (1,189 chapters, no database needed); then word by word for the whole Bible (STEPBible TAGNT + TAHOT) with the Supabase reference corpus.
**Why:** the full 66-book text and the tagged Greek NT and Hebrew Bible are openly available (`docs/research/data.md`); a separate section is the most neutral way to show a contested canon; text-only reading doesn't need the database.
**Discarded:** a canon selector (more complexity); Spanish only with the 66 books (Catholic and Orthodox readers would miss books); waiting for Straubinger.

## 2026-10-06 · Discuss Pedro's notes before recording them (Pedro chose)
**Chosen:** a note, idea or fix from Pedro is not written to the repo right away. The agent first states how it understood it, corrects or objects where needed, and both discuss until they agree; only then is it recorded (decided items here, open ones in `ROADMAP.md`). If a session may end mid-discussion, the pending point goes to `ROADMAP.md` marked "under discussion, not agreed". Rule in `AGENTS.md`, Work process.
**Why:** Pedro wants to be sure the agent understood and to settle corrections before anything is recorded. The "under discussion" fallback is the agent's addition, accepted by Pedro: the agent remembers nothing between sessions.
**Discarded:** recording notes immediately, before agreement.

## 2026-10-05 · Motion rule adapted to Doctrina (Pedro chose)
**Chosen:** the origin project's UI rule "motion is a central part of the site" is dropped; kept: every non-trivial animation goes through the main rule, `prefers-reduced-motion` is mandatory, a motion library is chosen only in a proposal. How much motion Doctrina has is part of the design direction.
**Why:** the rule came from a visual site; Doctrina's principles so far are calm, with motion only in response to the reader (v2: nothing animates on load).
**Discarded:** copying the rule as is.

## 2026-10-05 · No raw notes log (Pedro chose)
**Chosen:** Pedro's loose notes are recorded in the same session, in Pedro's words: decided items here, open items in `ROADMAP.md`. The old `UX-NOTES.md` (append-only log, in `~/Desktop/dev/doctrina-v2/docs/`) was distilled into this file and the roadmap.
**Why:** one place per fact; the doc system has no notes file.
**Discarded:** a `docs/NOTES.md` inbox.
**Replaced in part by:** 2026-10-06 · Discuss Pedro's notes before recording them (when to record; there is still no notes log).

## 2026-10-05 · Where the handoff material went (Pedro chose)
**Chosen:** `data/raw`, `data/site`, `data/scripts` at the root; research reports in `docs/research/`; the 14 v2 screenshots in `docs/research/v2-screens/`. The v1/v2 plans and design systems were distilled into the docs instead of copied; the originals are identical to `docs/PLAN.md` and `docs/DESIGN.md` in `~/Desktop/dev/doctrina-v1-archivo` and `~/Desktop/dev/doctrina-v2`.
**Why:** the root holds configs, docs and tool scripts; keeping `data/scripts/` next to `data/raw/` preserves most of the scripts' relative paths.
**Discarded:** everything under `docs/` (mixes data with docs); leaving the screenshots out of git.

## 2026-10-05 · Git guard as a local hook (agent)
**Chosen:** `.claude/hooks/block-git-writes.mjs`, a PreToolUse hook on Bash registered in `.claude/settings.json`. Blocks commit, push, merge, rebase, reset, tag, cherry-pick, revert, am, commit-tree, update-ref, filter-branch/repo, replace, and work-discarding commands (clean -f, branch -D, checkout ., restore, stash drop/clear).
**Why:** the rule asks for the `git-guardrails-claude-code` skill's hook extended with commit, merge, rebase and tag; that skill isn't installed here, so the same idea was written directly. Deterministic rules go in hooks.
**Discarded:** installing the skill (not available in this environment).

## 2026-10-05 · shadcn for primitives (rules win over v1)
**Chosen:** UI primitives come from shadcn when a suitable one exists, installed with its CLI when needed (`.claude/rules/ui.md`).
**Why:** Pedro's project rules. Replaces v1's "no component library, avoid the shadcn look".
**Discarded:** v1's no-library stance.

## 2026-10-05 · Scaffold choices (agent)
**Chosen:** `create-next-app --empty` with `src/`, `@/*`, Tailwind 4, ESLint 9, npm; Next 16.3.8, React 19.2.8. No `page.tsx` yet: `/` is a 404 until the first route is approved. `README.md`, demo fonts and demo assets dropped. `.env.example` lists the Supabase variable names with no values. Default exports only where Next requires them (named-export rule otherwise). The screenshot tool (`tools/shot.mjs` in v2) is ported when the first UI block needs it.
**Why:** no UI before the design direction is approved; nothing created "just in case"; CONTEXT §8 asks for `.env.example` from the start.
**Discarded:** keeping the scaffold's demo page and Geist fonts.

## 2026-10-05 · Documentation system
**Chosen:** `CLAUDE.md` imports only `AGENTS.md` (< 200 lines: process and hard rules). On-demand docs: `PROJECT`, `ROADMAP` (with the "Current state" handoff), `DECISIONS`, `GOTCHAS`; `DESIGN.md` after the design direction is approved; `docs/features/<name>.md` per non-trivial feature; path rules in `.claude/rules/`.
**Why:** context is the scarce resource and long files lower adherence (Anthropic recommends < 200 lines); `@import` doesn't save context; context files that summarize the repo don't improve results and raise cost > 20% (arXiv 2602.11988, measured on bug fixing); deterministic rules belong in hooks. Sources: [memory](https://code.claude.com/docs/en/memory), [best practices](https://code.claude.com/docs/en/best-practices), [long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents), [context engineering](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents), [agents.md](https://agents.md), [DESIGN.md](https://github.com/google-labs-code/design.md) (alpha, April 2026).
**Discarded:** a separate `STATE.md`; one file per decision (ADR); a big PRD imported every session.

## 2026-10-05 · Code structure: `src/` with feature folders
**Chosen:** `src/app` (routing only) → `src/features` → `src/components/ui` → `src/lib`, one-way dependencies. Details and rationale: `PROJECT.md`, "Architecture".
**Why / Discarded:** see `PROJECT.md` (the reasoning lives there).

## 2026-10-05 · Clean restart as `doctrina`
**Chosen:** a new repo built from Pedro's first-session brief; `doctrina-v1-archivo` and `doctrina-v2` become read-only references; `handoff/` is archived by Pedro after confirming everything was carried over.
**Why:** Pedro's decision: restart cleanly what the two prototypes explored.
**Discarded:** continuing development in `doctrina-v2`.

## 2026-10-05 · Supabase + AI, after the UI/UX is settled
**Chosen:** editorial content stays in git; reference corpus and user data go to Supabase; AI = user-visible semantic search (pgvector) plus internal tooling with human review; no generated chat answers. Full plan: `PROJECT.md`, "Data architecture".
**Why:** a CTO (a friend of Pedro's brother) may hire Pedro on shipping a product with AI + databases + Supabase; the AI feature must be demoable. Chat answers would break neutrality and trust and cost per query with no revenue.
**Discarded:** generated chat answers; moving editorial content to the DB now.

## 2026-10-05 · UX round 2 requested: four complete proposals
**Chosen:** a [second canvas](https://claude.ai/artifact/CiD9tLWApMVoskyJG2KwDV) with four proposals, 14 screens each (home, doctrine, tradition, objection, source, verse, word study, timeline, history entity, witnesses, search, 3 mobile): **P1** documentation-style sidebar tree; **P2** editorial landing (B evolved: objections grouped by target tradition plus a who-objects-to-whom grid, rich witnesses strip); **P3** text + "Conexiones" rail (Sefaria model, grouped connections with counts); **P4** v2 polished (all critique fixes). Pedro's feedback is pending; it is the first item in `ROADMAP.md`.
**Why:** Pedro was still undecided between the v2 structure and B, and asked to see how all current features would look in each.
**Discarded:** building another full version to explore structure (too costly in v2).

## 2026-10-05 · Owner verdicts on UX round 1
Canvas: [UX round 1](https://claude.ai/artifact/1emZWrzgH7utqFHpri1R3C) (structures A guided chapters, B hub + section pages "portada y fichas", C stacked panes trail, D questions with a tradition lens; timelines T1 horizontal, T2 vertical by century, T3 lanes per tradition; ⌘K search).
**Chosen:**
- **T1 horizontal timeline, kept** ("loved"). No zoom tabs ("Dos mil años", "Primeros siglos", "Siglos IV y V"): one density close to the "Siglos IV y V" view, with readable names. The whole span is explored by scrolling the timeline component horizontally; the page never scrolls sideways. The timeline page's header, footer and layout adapt to it (e.g. full-bleed, full-height).
- **Search ⌘K with "Recientes" and "Seguir donde dejaste": try it.** Concept and UI liked.
**Why:** Pedro's feedback on the canvas, recorded in the v2 `UX-NOTES.md` log.
**Discarded:** A, C and D ("no me gustan para nada"). B was the least disliked but not convincing: its "most discussed objections" mixed objections to different traditions, so it was unclear whose objection it was (and the reader may not care about, say, objections to the Lutheran position there); its "earliest witnesses" felt too basic and thin; its section page ("ficha") and the overall structure didn't convince either.

## 2026-10-05 · Design principles carried into the restart
**Chosen:** calm, clean, intuitive, "pleasant to use" despite the depth. One accent. Hairlines instead of cards. Real reading typography (serif for reading, a distinct sans for UI, a dedicated font for Greek). Two clearly distinct link types (opens beside vs goes to a page). Breadcrumbs. Every item has one stable URL. Timelines large, with written labels. Spanish-first copy, sentence case. Depth hidden by default and one click away.
**AI slop to avoid (list in every proposal):** cream + terracotta (#F4F1EA), gold on navy, parchment textures, stock cathedrals / Bibles / hands, crosses as decoration, identical rounded shadow cards, gradients, ALL-CAPS tracked eyebrows, "·"-joined meta strings, "→" glued to links, emoji, icons in colored squares, giant decorative quotes, Inter + centered bold hero, monospace locators, one color per tradition (rainbow), squeezed parallel columns on mobile, dead affordances (a search box that does nothing).
**Research conclusions behind them** (`docs/research/niche.md`, `analogs.md`): Sefaria is the closest analog (text + connections panel with counts, panel state in the URL); Catena Bible for patristic commentary per verse (master–detail, sorted by date, not relevance); The Faith Received is the closest concept (Read / Compare / Trace / Scripture); OWID topic pages for depth without weight; a Stripe-docs-style switcher that keeps your section; word popovers with transliteration and literal meaning first, no raw parsing codes; never translation columns on mobile; curate videos, don't aggregate. Calm is the differentiator: deep sites are cluttered, calm ones are thin.
**Why:** these held across v1, round 1, v2 and both UX rounds, and Pedro's feedback kept confirming them.
**Discarded:** see the v1 and v2 entries below.

## 2026-10-03 · v2 "study desk" prototype and Pedro's verdict
**Chosen:** a full prototype built in `~/Desktop/dev/doctrina-v2` (screenshots in `docs/research/v2-screens/`): Brygada 1918 for reading, Commissioner for UI, Gentium Book Plus for Greek; a single lapis accent `#2C4A9E` on `#FAFAF8` (dark `#9EB3EE` on `#16181C`); hairlines, no cards; the signature **2,000-year time ruler** on every dated source; light / dark / auto theme. A **study panel** beside the text (bottom sheet on mobile) where citations, words, terms and Fathers open, with back and "open full page". IA: doctrine header with neutral tabs (Overview, History & witnesses) | tradition tabs; per-tradition study page; objection pages; verse pages; general history with 290 entity pages. Full token tables: `docs/DESIGN.md` in the v2 repo.
**Why:** test the deep-study vision of 2026-10-02 with real content, replacing the thin v1 MVP.
**Owner verdict:** information and resources "muchísimo mejor" than v1, and the visual design "a great improvement". **But** page structure and section order confused: unclear where links lead, how to get back to a place, timelines too small to read and understand (though "extremely valuable"). The core problem left to solve: **how to offer this much information**.
**Critique worth keeping** (`docs/research/critique.md`): the typography system, the time ruler, the history index's sticky overview with brush, the verse reader's core (chapter expands in place, transliteration first) and the honesty notes. Main failures: the Fathers wall on the verse page, invisible traditions on mobile, tiny tap targets, `--ink-3` contrast, underused study panel.

## 2026-10-02 · Vision correction: deep study, one tradition at a time
**Chosen:** a deep-study resource (beginners secondary). One tradition at a time is the core model; side-by-side only in specific features. Neutral sections (common ground, history of the doctrine focused on the early Church as literal evidence, patristic commentary on verses) never assigned to a modern tradition. Scripture dossier per tradition. Owner feature verdicts (key / yes / maybe / parked) recorded in `PROJECT.md`, "Scope".
**Why:** [design round 1](https://claude.ai/artifact/TsniPE1LdXxgLh2SX47HTA) (four visual directions, one screen per doctrine with a summary and a few sources) was judged "far too thin — the same as asking ChatGPT".
**Discarded:** the thin one-screen-per-doctrine MVP; compare-all-columns as the default view; internal diversity within a tradition (parked).

## Before 2026-10-02 · v1 "glossed page" (historical)
**Chosen:** a thin MVP built in `~/Desktop/dev/doctrina-v1-archivo`: Literata + Public Sans, paper / iron-gall ink / rubric red, sources in a sticky margin, one screen per doctrine with a tradition switcher.
**Why:** the MVP existed to measure interest (validation hooks, fake door).
**Owner verdict:** too thin. Replaced by the 2026-10-02 vision correction and the v2 design.

## Before 2026-10-03 · Technical defaults (carried, not re-confirmed)
**Chosen:** Next.js App Router with static generation (SSG / ISR); Tailwind `@theme` tokens; `next/font` self-hosted; content as typed modules / JSON in git, no CMS; bilingual routing under `/{es|en}` with English route segments for now (v2); Vercel; PostHog free tier (needs return visits and scroll depth, which Plausible can't do); Gumroad or Polar + Mercado Pago (no Stripe in Argentina).
**Why:** SEO and i18n routing, Pedro knows React, diffable reviewable content, zero-config hosting.
**Discarded:** a CMS; Plausible; Stripe.
