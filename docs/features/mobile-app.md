# Mobile app (iOS and Android): foundation and phase plan

Approved by Pedro on 2026-11-11 (written in Opus 5.5 plan mode). Agents read this whole file, then do only the phase they were given.

## Phase log (agents append «State / Next exact step» here)
- 2026-11-11: plan written in Opus 5.5 plan mode (3 Explore agents, 1 Plan agent) and **approved by Pedro**. Planning cost: session 24 % → 34 %, weekly 4 % → 6 %. Next: P0 (Pedro) and M-A, launched by the coordinator on Pedro's go.
- 2026-11-11 (M-A, A1): seven `src/content` modules now import their JSON through `@data/*` instead of `readFileSync(process.cwd())`; `tools/check-passage-focus.mjs` checks the record against `data/passages/focus/`. Verified in the clone `~/Desktop/dev/doctrina-mobile-a`: 8917 prerendered routes identical before and after, 29,669 prerendered files equal to the baseline build, `npm run verify` green, e2e 1671 passed (3 specs fail the same way on the untouched baseline), lean and git-only builds green. State: A1 ready for the coordinator to merge and for Pedro to commit and push to `main`. Next exact step: wait for «A2 GO» (branch `monorepo` in the real repo).
- 2026-11-11 (M-A, A2): the web app moved to `apps/web` on branch `monorepo` (698 files moved by `mv`, 16 with content changes); root `package.json` is the workspace root (scripts delegate to `@doctrina/web`), `apps/web/.env.local` holds the env, `localDataDir` finds `data/` from the app folder. Verified: 8917 prerendered routes identical, `npm run verify` green, e2e 1670 passed (the same 3 AI specs fail as on the baseline; 2 more passed on rerun), 32 of 32 screenshots pixel-identical against the baseline build (2 sizes, light and dark), lean Supabase build and the git-only copy (`npm ci`, verify, lean build, lint) green. State: A2 done, uncommitted; waiting for Pedro to commit, push the branch and see green CI. Next exact step: A3 (Pedro, Vercel dashboard: Root Directory `apps/web`, «Include files outside the root directory»).
- 2026-11-11 (M-A, A3): Pedro switched the Vercel Root Directory to `apps/web` after the preview passed; PR #1 merged; production READY and 15 live routes answer 200 (DECISIONS «M-A, block A2» outcome). Vercel installs only from `apps/web`: GOTCHAS.
- 2026-11-11 (preparation, no repo changes): research and prototypes kept in `~/doctrina-research-prompts/`: `mobile-M-C-prep-findings.md`, `mobile-reader-spec-findings.md`, `mobile-assets/`, `mobile-tokens/`, `mobile-data-validation-findings.md`, `mobile-spikes/selection/`; P0 status in `docs/ROADMAP.md` (Expo account ready, iPhone paired, iOS 26.5 platform installed, Apple/Google accounts, macOS and Xcode 27 pending).
- 2026-11-11 (CI e2e fix): 23 files in `apps/web/e2e` skip with a reason when git-ignored data is absent (committed with B1); the GitHub e2e job still reports 15 failed and 6 flaky timing specs (to triage).
- 2026-11-11 (M-B, B0): `packages/core` created (`@doctrina/core`, `tsconfig.base.json`, lint block with 20 fixtures, `node --test`), `lib/locale.ts` moved to `@doctrina/core/locale` (134 importers + `next.config.ts`, no fallback needed). Verified in the clone `~/Desktop/dev/doctrina-mobile-b`: 8917 prerendered routes identical to the baseline, `npm run verify` green (3 min), 207 e2e specs of shell, header, home, sidebar, language switch, reader chapter and search green, git-only Vercel-like lean build green. State: B0 delivered as a snapshot for the coordinator. Next exact step: B1 (pure leaves) in the same clone.
- 2026-11-11 (M-B, B1): pure leaves moved to `@doctrina/core` (9 `lib` modules, `bible/{red-letters, translation-meta, numbering-note}`, `words/shard-of`, `model/*`); 7 checks became `node --test` files in `packages/core/test/`; `addHighlight`/`removeRange` take `newId` as an argument. Cumulative snapshot with B0 in `~/doctrina-research-prompts/mobile-b/B1/`. Next exact step: B2 (books and references) in the same clone, if usage allows.
- 2026-11-11 (M-B, B2): books and references moved to `@doctrina/core` (`verse-names`, `bible-books`, `bible-segments`, `bible-routes`, `bible-reference/*`, `bible/{chapter-neighbors, normalize-bible, translation-defaults, default-translation}`); 8917 routes identical, verify green. Cumulative snapshot B0+B1+B2 in `~/doctrina-research-prompts/mobile-b/B2/`. Next exact step: B3 (data sources: `supabase-rest` with an injected `get`, `bible/{bible-source, supabase-source}`, `words/words-source`, `father-text/father-types`), not part of this brief.
- 2026-11-11 (M-D redo, Opus 5.5): the navigation and native-patterns Artifact was redesigned and published (version 5, Vidrio / Papel / Tinta, options A–D); only the Vidrio bottom nav bar and the Vidrio reader direction are approved so far; Pedro's detailed comments are pending. Research files in `/private/tmp/claude-501/mobile-nav/research/`.
- 2026-11-11 (selection spike): findings in `~/doctrina-research-prompts/mobile-spikes/selection/FINDINGS.md`; recommendation B (tap a verse, then extend by words), docked bottom highlight bar.
- 2026-11-11 (M-C1, paused): `apps/mobile` verified in the clone `~/Desktop/dev/doctrina-mobile-c1`, never run in the simulator; resume from `~/doctrina-research-prompts/mobile-c1/NOTES.md`; two flagged patches (React 19.3.0 for the web; root ESLint/Prettier ignore for `apps/mobile`) not applied. Next exact step: apply the patches with Pedro's ok, run the app on the iPhone 17 Pro Max simulator (build with `xcodebuild` to the simulator id), take the screenshots, then deliver M-C1.

---

## 0. Context
Pedro (2026-11-10/11) wants an iOS + Android app (React Native, TypeScript, Expo) that will be **the product's priority** from now on, with, over time, every feature of the web. The web (`doctrina.elpepo.dev`, Next.js 16) already implements the approved designs pixel-perfect. The goal is to **use what exists intelligently**: share the logic and data (one tested copy), port the design system (tokens, motion constants, behaviour specs), and **rewrite the views** with native components (React Native cannot render the web's DOM, CSS or Tailwind). Best practices, scalable, secure, simple (no pattern without a second use). This plan must let the coordinator launch agents with «Read `docs/features/mobile-app.md` and start phase M-x», with no further research.

**Pedro's decisions (2026-11-11, recorded in DECISIONS «Mobile app: foundation plan approved»):**
1. **Full monorepo** (npm workspaces): `apps/web` (the current site, moved), `apps/mobile` (new), `packages/core` (shared, framework-free).
2. **Online with cache in v1:** Bible and Fathers read from Supabase and cached on the phone; editorial content bundled in the app and updatable over the air (EAS Update); full offline packs later.
3. **AI (chat, simplifier) after the reader and the content**, in its own phase with its own security.
4. **The approved web designs at 390 px are the spec of each screen**; proposals (Artifact) only for native pieces; **the mobile navigation is thought through in advance** (what to add or change for the clearest, most intuitive UX) before any screen is built.

**Bounded by:** DECISIONS 2026-11-10 «Mobile app…»; 2026-11-11 «Nothing pending is urgent…», «usage rule» (never past 60 % of the 5-hour session); 2026-10-09 licence rules (an app that bundles or caches texts distributes them: same «free everywhere» rule, PDDPT CC BY-SA when added); 2026-11-07 «Real AI…» (budgets, notes never as sources); trust and neutrality invariants (AGENTS.md); git rules (agents never commit, Pedro commits block by block); one agent at a time (memory: one subagent at a time unless Pedro allows two).

---

## 1. Target architecture

### 1.1 Repository
```
doctrina/                      (npm workspaces root; Node 24 ≥ 24.3, .nvmrc 24)
├─ apps/web/                   current Next.js site, unchanged behaviour (Vercel Root Directory = apps/web)
├─ apps/mobile/                Expo app (SDK 58 at the time of writing; re-verify at M-C launch)
├─ packages/core/              @doctrina/core: framework-free TS (no React, no DOM, no Node built-ins, no Next)
├─ data/                       stays where M-A decides (see §3 M-A)
├─ docs/  tools/  .claude/  .github/
```
Rules: `packages/core` never imports React, DOM, Node built-ins, `next/*` or `server-only` (lint rule + its own tsconfig without `lib: dom`). Apps depend on core; core depends on nothing of ours. No `packages/ui` shared between web and native (different primitives; YAGNI). One React Native version; React is never a dependency of core (web 19.2.8 vs Expo 58's 19.3.0 coexist only if core stays React-free).

### 1.2 What `packages/core` holds (from the inventory, verified 2026-11-11)
**Rule: a module moves to core only when a mobile phase needs it (YAGNI).** M-B moves the first blocks (locale, user-data model, Bible books and references, data sources, stores); the rest of this list moves inside the mobile phase that first uses it. Where bundled editorial JSON lives (core or a `@doctrina/data` workspace over `data/`) is decided in M-C with the bundle-size measurement.
- **Model and Bible:** `content/model/*`, `bible-books`, `verse-names`, `bible-segments`, `bible-reference/*` (parser, resolver, versification table), `bible/{bible-source, chapter-neighbors, default-translation, translation-meta, translation-defaults, red-letters, normalize-bible, numbering-note, supabase-source + supabase-rest}` (the Next-only `next:{tags}` fetch option becomes an injected fetch).
- **Routes and i18n:** `routes.ts`, `bible-routes.ts` (also the map for deep and universal links), `lib/locale`, `ui-text/{es,en,types,error-text}` (the app uses the same strings; app-only strings are added to the same objects, typed).
- **User data model:** `lib/{notes, highlights, read-chapters}` (types, validators, reducers), plus a **storage adapter interface** under the stores (web: localStorage; mobile: expo-sqlite).
- **Formatting and logic:** formatters (`format-*`, `parse-label`, `split-source-name`, `expand-verses`), `validate*`, `shown-passages`, `simplified-manifest`, father and timeline helpers, `lib/{search-match, text-pieces, word-snap, inline-refs, punctuation, transliterate-greek, timeline-*}`, `words/{words-source, shard-of}`, `father-text/{types, validate}`, `lib/ai/{contracts (zod), errors, dates, sentences, verify-quote, normalize}`.
- **Editorial data:** `pages/*` (2.8 MB, Spanish) and `registry/*` (1.3 MB), the JSON now read with `readFileSync` (names, glossary, history, home timeline, passage focus, source catalogue) as static imports.
- **Design tokens:** `tokens` generated from `apps/web/src/app/globals.css` (`@theme`, `[data-theme="dark"]`, the `<40rem` overrides) plus the motion constants of `src/lib/*-motion.ts` and DESIGN.md §4: colours light/dark, type roles (size, absolute line height, letter spacing), radii, spacing, z, easings (bezier tuples), durations. Generated by a script with a lint check that it matches the CSS (one source of truth: the web CSS).
- Stays web-only: `src/app`, `src/components`, every `.tsx` in `src/features`, DOM/motion/scroll `lib` modules, init scripts, fonts, proxy, and **all AI server code** (it is the backend the app calls).

### 1.3 Mobile stack (official docs, read 2026-11-11; URLs in §8)
| Concern | Choice | Why |
|---|---|---|
| Runtime | Expo SDK 58: RN 0.88, React 19.3.0, New Architecture (mandatory since SDK 55), iOS 16.4+, Android 7+ | current stable |
| Builds | **Development builds** (not Expo Go), EAS Build profiles `development`, `preview`, `production`; EAS Submit; **EAS Update** for JS/data (editorial content OTA) with runtime versions | store apps need dev builds; OTA keeps content current |
| Navigation | Expo Router ~58, typed routes; layout decided in M-D (tabs/stack/drawer); every screen deep-linkable; universal links (`applinks:doctrina.elpepo.dev`) and Android App Links with `.well-known` files served by `apps/web/public` | web URLs open the app |
| Language | TypeScript strict (SDK 58 default strict TS API) | |
| Styling | `StyleSheet` + a typed theme (`useTheme()` → tokens for the active scheme); no NativeWind (stable 4.2.7 is Tailwind v3; v5 is RC) | simple, no Tailwind dialect mismatch |
| Theme | system / light / dark, stored; same `doctrina-theme` semantics | parity |
| Fonts | `expo-font` config plugin (embedded, OFL; static TTF/OTF; optical sizes as static instances where Newsreader/Source Serif need them) | no runtime loading |
| Texture | the «wall» tile pre-rendered to PNG per theme (420 px) and tiled with opacity; Skia only if the approximation fails Pedro's review | RN has no multiply blend |
| Icons | `react-native-svg` with the ~30 inline paths of the web | same geometry |
| Motion | Reanimated 4 (+ worklets) and Gesture Handler 3; constants from core tokens; `useReducedMotion` | same curves and durations |
| Lists | virtualised lists for long content (reader, indexes); the exact component (FlashList v2 or FlatList) chosen and verified in M-E | |
| Storage | `expo-sqlite`: `kv-store` for preferences; tables for notes, highlights, read chapters, last place, recents, conversations; a cache table for chapters and Fathers divisions | one store, queryable, FTS later |
| Data | Supabase REST with the publishable key (tables already anon-readable: translations, books, verses, chapters, chapter_structure, works, editions, divisions); words via the web's static `/api/words/…`; editorial content bundled from core | no new backend for v1 |
| HTTP | `fetch` / `expo/fetch` (streaming for AI later), one client with timeouts and retries | |
| Tests | `jest-expo` + React Native Testing Library 14 (Jest 30) for units and components; core tested by a plain runner in CI; **Maestro** for E2E (EAS Workflows jobs) | official guidance |
| Quality | ESLint flat config with the repo's rules adapted (layers for mobile: `app` (routes) → `features` → `components` → `lib`/core; no feature-to-feature imports; English names), Prettier, typecheck | same discipline as the web |
| Monitoring | none in v1 (decide before public release; privacy labels depend on it) | YAGNI |

### 1.4 Data flow and caching (v1)
- **Bible:** chapter = rows from Supabase (`verses`, `chapter_structure`) through core's `supabase-source` with an injected fetch; cached in SQLite on first read (key: translation, book, chapter, content version); stale-while-revalidate; red letters and structure from the same source. The web's `/api/bible/…` JSON remains an alternative if Supabase egress or limits become a problem (decide in M-E with numbers).
- **Fathers:** works, editions and divisions from Supabase (anon), cached per division.
- **Words:** `/api/words/<locale>/<book>/<chapter>` (static, CDN); cached.
- **Editorial content** (doctrines, traditions, objections, passages, history entities, glossary, search index): bundled from core into the JS bundle; updated with EAS Update. Size budget measured in M-C (≈ 4 MB of TS today; if the bundle grows too large, move pieces to JSON assets fetched once).
- **User data:** only on the device (no accounts in v1); export/import (Markdown/JSON) later; schema versioned with migrations from day one.
- **Offline (v1):** what was read stays readable; clear offline states; full downloads are a later phase.

### 1.5 Security and privacy (designed in from M-C)
- The app holds no secrets: only `EXPO_PUBLIC_*` config (API base URL, Supabase URL and publishable key). Secrets stay on Vercel.
- `SITE_PASSWORD` Basic auth (src/proxy.ts) also covers `/api/*` when set: the app must not depend on it (check with Pedro whether it is set in production before M-E).
- AI later (M-K): a mobile token endpoint that verifies **App Attest / Play Integrity** (`@expo/app-integrity`, real devices) and issues a short-lived signed token; the AI guard accepts that token instead of BotID + cookie; same rate limits and budgets per install; **explicit consent before the first AI use** (Apple 5.1.2(i)); **report an answer** (Apple 1.2/4.7, Google AI-content policy).
- Privacy: notes and highlights never leave the device except inside an AI request the user sends (as on the web, after consent). A privacy policy page on the web (`/privacidad`, `/privacy`) linked inside the app (Apple 5.1.1). Privacy manifest reasons (`ios.privacyManifests`), nutrition labels and Google Data safety filled from what the app really does.

### 1.6 Design system port (how screens are built)
- **Spec order per screen:** (1) the approved web design at 390 px (the live page + its e2e specs + DESIGN.md + the approved Artifact linked in DECISIONS), (2) the native patterns approved in M-D, (3) DESIGN.md «Don'ts» and the AI-slop list.
- **Port, don't copy:** read the web component end to end (behaviour lives in the script), copy constants from core tokens, rebuild the view with RN primitives; measure the native screen against the web at 390 (and 360) in light and dark; list deliberate differences.
- **Shared tokens only from core**; no hard-coded colours or sizes in the app (lint rule: no literal colours outside the theme).

---

### 1.7 Mobile-first mindset: review on devices, not on the web (Pedro, 2026-11-11)
From now on code, review and conversation are **mobile-first**: Pedro does not test the app on the web. Every visual review of the app is done **in the iOS simulator and on his physical iPhone 14 Pro** (a development build), plus Android when the phase says so. The coordinator **asks Pedro which tools he has installed and guides him step by step** (commands verified on the official docs at that moment, never from memory) before the first screen he has to look at (end of M-C), and again whenever a phase needs something new (TestFlight, Play testing). Agents report «what to look at» as app screens and gestures on the simulator and the iPhone, with the command to run the dev build, not as web routes. Checked on 2026-11-11: Xcode 26.6 with iPhone 17 simulators, Android Studio, watchman and the `eas` CLI are installed; not checked: the iPhone's iOS version and Developer Mode, Pedro's Apple ID / Developer Program enrolment, an Expo account. Note (research of 2026-11-11): Expo Go on a physical device runs SDK 57 during the SDK 58 transition, so the app is reviewed in its own development build, not in Expo Go.

## 2. Mobile navigation (Pedro: think it through in advance) — the input to phase M-D
The web's IA: a sidebar tree with four groups (`src/content/site-tree.ts`): **Doctrinas** (4 doctrines × 5 traditions, objections, Pasajes, early Christians), **Biblia** (OT, deuterocanon, NT → chapters), **Historia** (timeline, Fathers → works, councils, heresies, divisions, Reformation), **Referencia** (glossary, sources); plus the home, the ⌘K search, the reader's panels (notes, AI chat, simplifier) and the planned Notes page.
**Starting hypothesis for M-D (to test against 3 to 4 alternatives, not a decision):** a bottom tab bar with **Inicio · Biblia · Doctrinas · Historia · Tú** (notes, highlights, reading history, settings), search reachable from every tab's header (and the Bible lookup grammar of core in it), the reader as a full-screen stack with its own chrome (top strip hides on scroll), the tree replaced by per-tab index screens plus breadcrumbs as back navigation, sheets for panels. Alternatives to show: (A) the hypothesis; (B) 4 tabs with Search as a tab; (C) a drawer that mirrors the web tree (closest to the web, weaker on phones); (D) reader-first (the Bible as the home) with a library tab. M-D must also define: deep-link mapping of every web URL to an app screen (from `routes.ts`), back behaviour, state restoration (last place), tablet layout, and the native text-selection pattern for highlights and notes (the riskiest UX piece).

---

## 3. Phases (one agent at a time; each ends with Pedro's review and his commits)

Common to every phase: brief = this file + the phase section; **Sonnet 5.5, effort high**, unless the phase says otherwise; works in a clone `~/Desktop/dev/doctrina-mobile-<phase>` (APFS `cp -cR`; stop if it exists) except where noted; no git writes (commit commands in blocks: code and data, tests, docs); MAILBOX checkpoints; **usage: session ≤ 60 %** and the weekly cap the coordinator gives, checked every ~10 min; at the cap save «State / Next exact step» in this file's phase log and stop; one independent Sonnet verifier (read-only) at the end of each big phase; AGENTS.md rules (English, no comments except TODO/guards, named exports, kebab-case, `@/` per app). Estimates are ranges from measured sizing (`agent-ops.md`: a build agent with ~80 tool uses = 0–2 weekly points; an artifact agent ≈ 1); each phase reports the real cost.

### P0 · Pedro's prerequisites (no agent)
1. Apple Developer Program ($99/year) and Google Play developer account ($25 once) in his name; an Expo account (free tier: 15 iOS + 15 Android builds a month, low priority).
2. Decide the **app name and bundle ids** (the web's name «Doctrina» is provisional; DECISIONS lists «Decide: name and domain»): needed before the first store build (M-E), not before M-A.
3. **Start Google Play closed testing early:** a new personal account needs **12 testers opted in for 14 consecutive days** before production; recruit them at M-E.
4. Tell the coordinator whether `SITE_PASSWORD` is set on Vercel production.

### M-A · Monorepo conversion (web behaviour unchanged) — detail in §3.1
Blocks A1 (JSON imports, ships in the current layout) → A2 (the move, on branch `monorepo`) → A3 (Pedro switches Vercel Root Directory after green CI and a good preview). Cost 1–3 points. Model: Sonnet 5.5 high + verifier (production at stake: the coordinator also reproduces the Vercel build).

### M-B · `packages/core` extraction — detail in §3.1
Blocks B0 (skeleton + `locale`) → B1 (pure leaves) → B2 (books and references) → B3 (data sources) → B4 (storage adapter and stores); B5 (`ui-text`) moves at the start of M-C. Each block ships to `main` with verify and e2e green. Cost 1–3 points.

### M-C · Mobile foundation (scaffold, no product screen)
Goal: `apps/mobile` runs as a development build on the iOS simulator and an Android emulator, with the foundation every screen needs. Steps: create with `create-expo-app` on the **latest stable SDK verified at launch** (the default template may lag the newest SDK: pin explicitly); TypeScript strict; Expo Router with typed routes and a placeholder route tree; ESLint (layers, English names, no literal colours), Prettier, typecheck; `app.config.ts` (scheme, bundle ids from P0 or placeholders, associated domains and intent filters prepared but off); EAS profiles (`development`, `preview`, `production`) and runtime-version policy; env config (`EXPO_PUBLIC_API_BASE_URL`, `EXPO_PUBLIC_SUPABASE_URL`, `EXPO_PUBLIC_SUPABASE_KEY`) with validation at start; **theme** (tokens from core, `ThemeProvider`, system/light/dark, stored), **fonts** (expo-font plugin), **texture** (pre-rendered tiles), **icons** (react-native-svg set), **i18n** (core ui-text, device locale + stored choice), **storage** (expo-sqlite: kv-store prefs; migrations; repositories for notes/highlights/read chapters over core's adapter), **data clients** (Supabase REST via core with injected fetch, `/api/words`, cache table, timeouts, retries, offline detection), error boundary and a minimal logger (no third-party telemetry), reduced motion; jest-expo + RNTL tests for theme, storage, data clients; a Maestro smoke flow; CI job (typecheck, lint, test for core and mobile; no EAS build in CI yet). Done when: a dev build shows a token-styled screen in ES/EN, light/dark, reading one real chapter's verses from Supabase through core (a technical check screen, not a product screen), tests green, `npm run verify` of the web still green. Cost 1–3 points.

**Device review at the end of M-C (§1.7):** the agent writes in this file the exact, verified steps to install the development build on the iOS simulator and on Pedro's iPhone 14 Pro (signing and provisioning route, Developer Mode on the phone, `npx expo run:ios` and/or an EAS `development` build with the device registered, how to start the dev server and reconnect); the coordinator walks Pedro through them and confirms he sees the technical check screen on both.

### M-D · Navigation and native patterns proposal (Artifact, no app code)
Goal: Pedro approves the app's navigation and the native-only patterns before any product screen. Per AGENTS.md «Main rule» and `docs/playbooks/design-proposal.md`: phone frames (390 and a tablet) with **real content and the site's real tokens and fonts**, interactive demos, 3–4 navigation options (§2) plus: the reader chrome on a phone, **native text selection for highlights and notes**, sheets (notes panel, verse panel, settings «Aa»), search entry, settings and «Tú», offline and loading states, deep-link behaviour; references studied with sources (Apple HIG tab bars, Material navigation, YouVersion, Logos, Blue Letter Bible, Bible Gateway, Apple Books); what is discarded and why; what Pedro must decide. Cost ≈ 1–2 points. Done when Pedro approves (recorded in DECISIONS with the link).

### M-E · First vertical slice: the Bible reader (read-only) and the first store builds
Goal: a real product screen in testers' hands. The approved navigation shell (M-D) with the Bible tab: book and chapter selection, the chapter reader (verse numbers, red letters, translation picker with RV1909/BSB/KJV/DRA/WEB-C, previous/next, keep position, last place restored), light/dark, ES/EN, cached reading; universal links for Bible URLs; `preview` builds to **TestFlight internal** and **Play internal → closed testing** (start the 14-day clock). Verification: RNTL tests, Maestro flows (open chapter, switch translation, next chapter, relaunch restores place, offline after first read), screenshots at 390/360 light/dark compared with the web, on a real iPhone and Android device by Pedro. Cost 2–4 points.

### M-F · Reader complete
Highlights and notes with the native selection pattern of M-D (the stored data model stays the web's: `{verse, from, to}` offsets via core `word-snap`), «Tus notas» panel, note cards adapted to phone, second translation (below / side by side on tablet), «Aa» text settings, read-chapter marks, the verse panel; Fathers' works reader (same reader, editions). Biggest phase: split into blocks (selection → highlights → notes → panels → second translation → Fathers). Cost 4–8 points across blocks.

### M-G · Search and Bible lookup
Native search with the core search index (bundled) and the approved Bible lookup design (variant G, Artifact `6zY5dTSvroMykTqkV8oLuE`, DECISIONS 2026-11-10/11) using core `bible-reference`; the stacked view per Pedro's decisions. Cost 2–4.

### M-H · Doctrines
Screens 02 (doctrine), 03 (tradition), 04 (objection), objections index, Pasajes «Pliego», early Christians; the living rulers rebuilt with Reanimated/Gesture Handler (or Skia if needed). Cost 4–7 across blocks.

### M-I · History and home
Fathers pages (09), councils, heresies, divisions, Reformation, indexes, timeline (08), the home (01, years ruler). Cost 4–7.

### M-J · Reference and word study
Glossary and terms, sources, words (07), verse page (06). Cost 2–4.

### M-K · AI on mobile (backend + app)
Web backend: mobile token endpoint with App Attest / Play Integrity verification (tiered enforcement, telemetry first), the guard accepting the token, per-install limits within the existing budgets, AI-content report endpoint and storage; app: consent screen (once, revocable in settings), the chat (streaming via `expo/fetch`), the simplifier, report an answer. Cost 3–6. Opus only if Pedro decides (memory: Opus for the AI server blocks).

### M-L · Store readiness and submission (Pedro's closing review)
Checklist built from the official guidelines (URLs §8): 4.2 minimum functionality (native value: offline reading, notes, selection, share), 5.1.1 privacy policy link in app and in App Store Connect, 5.1.2(i) AI consent, 1.2/4.7 AI filtering and reporting, privacy manifest reasons, nutrition labels, age-rating questionnaire (new tiers), account deletion (only if accounts ever exist), Google target API level (36 today), Data safety form, AI-generated content reporting, screenshots and metadata ES/EN, review notes; then submission. Cost 1–3.

### 3.1 M-A and M-B detail (Plan agent, read-only, 2026-11-11; files read are listed at the end)

**Choices and reasons.**
- **`data/`, `tools/`, `docs/`, `supabase/`, `handoff/` stay at the repo root.** Tools, `data/scripts` (mjs and py) and e2e read `data/` relative to the working directory; `.gitignore` already ignores `/data/corpus/`, `/data/raw/src/`, `/data/site/words/`; mobile will need the same JSON; `warm-cache.yml` sparse-checks out `tools`. Root scripts keep the root as working directory.
- **The real risk of the move is the working directory:** seven modules read `join(process.cwd(), "data/...")` (`item-names`, `source-catalogue`, `get-glossary`, `get-history-indexes`, `get-history-pages`, `get-home-timeline`, `passage-focus`); Turbopack traces them today (`.next/server/app/[lang]/page.js.nft.json`). So they become static JSON imports first (A1), shipped in the current layout. The pattern exists: `src/content/ai-search/fixture-search.ts` uses `with { type: "json" }`.
- **No `turbopack.root` / `outputFileTracingRoot`:** Next infers the root from the single root lockfile (`node_modules/next/dist/server/config.js` 833–869). Done-criterion: no «inferred your workspace root» warning. Never create a lockfile inside a workspace.
- **History:** the agent uses plain `mv` (the hook blocks `git mv`/`git add`); content is unchanged, so git detects ~693 renames; `--follow` and blame keep working. Pedro stages and commits.
- **Vercel Root Directory → `apps/web` only after the branch's CI is green**, with «Include files outside the root directory» enabled (core and `data/` live outside). A failed build never replaces production.

**A0 · Pedro.** Commit pending docs; clean or ignore `tmp/`, `.playwright-mcp/`, `__pycache__/`; `git switch main && git pull && git status`.

**A1 · JSON imports instead of file reads (current layout, ships to production).**
1. `tsconfig.json` paths: `"@data/*": ["./data/*"]`; `tools/alias-loader.mjs` maps `@data/` to `<repo>/data/` (same `new URL` approach as `SRC`).
2. Rewrite six modules to `import x from "@data/site/<file>.json" with { type: "json" }` (cast `as unknown as T` where needed) and drop `node:fs`/`node:path`: `item-names` (names.json), `get-glossary` (glossary.json), `get-history-*` and `get-home-timeline` (history.json), `source-catalogue` (`data/raw/v1.json`, `data/site/sources.extra.json`).
3. `passage-focus.ts`: an explicit record of the 20 imports of `data/passages/focus/<doctrine>-<tradition>.json` (≈ 80 KB); `tools/check-passage-focus.mjs` asserts the record keys equal the folder's file list.
Done when: `grep -nE "readFileSync|process\.cwd"` in those 7 files finds nothing; `npm run verify` and `npm run e2e` green; the prerendered route list (`Object.keys(require('./.next/prerender-manifest.json').routes).sort()`) identical before and after; `tsc` time about the same. Commit: `refactor(content): import site json instead of reading files`.

**A2 · The move (branch `monorepo`, Pedro runs `git switch -c monorepo`).**
1. Move to `apps/web/`: `src/`, `e2e/`, `next.config.ts`, `postcss.config.mjs`, `playwright.config.ts`, `tsconfig.json`, `.env.example`, and the untracked `.env.local` (Next loads env from the app folder; tell Pedro). Delete stale root `.next/`, `next-env.d.ts`, `tsconfig.tsbuildinfo`. There is no `public/` today.
2. `apps/web/package.json`: `name "@doctrina/web"`, private, same engines; scripts `dev`, `build`, `start`, `typecheck` (`next typegen && tsc --noEmit`), `e2e`; the 7 dependencies at the same versions; devDependencies `@tailwindcss/postcss`, `tailwindcss`, `@types/react`, `@types/react-dom`, `@playwright/test`.
3. Root `package.json`: `"workspaces": ["apps/*", "packages/*"]`; devDependencies `eslint`, `eslint-config-next`, `prettier`, `typescript`, `@types/node`, `playwright`; `dev/build/start/typecheck/e2e` delegate with `npm run <x> -w @doctrina/web`; `lint`, `format`, `verify` and every tools script unchanged (cwd = root).
4. `rm -rf node_modules && npm install` at the root; `npm ls next react react-dom typescript tailwindcss eslint` shows the same versions; no `apps/web/package-lock.json`.
5. `apps/web/tsconfig.json`: `"@data/*": ["../../data/*"]`.
6. `eslint.config.mjs` stays at the root: globs `src/**` → `apps/web/src/**`; `settings: { next: { rootDir: "apps/web/" } }`; ignore `apps/web/.next/**`, `apps/web/next-env.d.ts`.
7. `tools/eslint-plugin-doctrina.mjs` and `tools/alias-loader.mjs`: `SRC` → `../apps/web/src`.
8. Paths in tools and data scripts: `../src/` → `../apps/web/src/` (13 tools); `tools/ai-checks` `../../src/` → `../../apps/web/src/`; `data/scripts/*.mjs` `../../src/` and `"src/content…"` → `apps/web/src/…`; cwd-relative strings in `ai-simplify-levels`, `ai-write-simplified-manifest`, `components.mjs`, `brand-assets` (`appDir`), `check-names` (`walk("src")`, `OWNERS`), `ai-checks/check-eval`, `ai-checks/check-simplify` (incl. the string compared at line 400); `.env.local` → `apps/web/.env.local` in the 9 `loadEnvFile` calls; `check-english-names.mjs` kebab rule on `^(apps|packages)/[^/]+/src/` with fixtures; `check-lint-rules.mjs` fixture paths prefixed `apps/web/`. Done when `grep -rnE "\.\./src/|[\"'\`(]src/|\"\.env\.local\"" tools data/scripts` only shows reviewed hits.
9. Local corpus readers (`bible/local-source.ts`, `words/local-words-source.ts`, `father-text/local-father-source.ts`): use `localDataDir` from a new `apps/web/src/content/local-data-dir.ts` (first of `<cwd>/data` or `<cwd>/../../data` that contains `sources/`); Vercel never uses them (`CORPUS_SOURCE=supabase`).
10. e2e: in the 10 specs, `helpers.ts` and `playwright.config.ts`, `"data/…"` → `"../../data/…"`.
11. `.gitignore`: drop the leading `/` of `node_modules`, `.next/`, `out/`, `build`, `coverage`; `.prettierignore`: anchor `/data/`, `/docs/`, `/handoff/`, `/tmp/`.
12. `.github/workflows/verify.yml`: artifact paths → `apps/web/playwright-report`, `apps/web/test-results`; the rest unchanged; `warm-cache.yml` unchanged.
13. `.claude/rules/ui.md` paths → `apps/web/src/**/*.tsx|css`; move the Next-generated block of the root `AGENTS.md` into `apps/web/AGENTS.md` with `apps/web/CLAUDE.md` = `@AGENTS.md` (Next writes agent files into the app folder: `node_modules/next/dist/server/lib/app-info-log.js`).
14. Docs: `AGENTS.md` (structure, commands), `docs/PROJECT.md` (tree), `GOTCHAS.md` and playbooks (`` `src/`` → `` `apps/web/src/``), ROADMAP «Current state», a DECISIONS entry (old entries untouched); GOTCHAS: `AI_REPLAY_DIR`/`AI_RECORD_DIR` now resolve from `apps/web`.
Verify: `npm run verify` and `npm run e2e` from the root; same prerendered route list as A1; `npm run dev` serves `/es`; a local `LEAN_BUILD=1 CORPUS_SOURCE=supabase` build; CI on the PR is the build without ignored data.
Pedro's commands: `git add -A package.json package-lock.json apps src e2e next.config.ts postcss.config.mjs playwright.config.ts tsconfig.json .env.example eslint.config.mjs .gitignore .prettierignore .github .claude tools data/scripts docs AGENTS.md && git commit -m "refactor(repo): move the web app to apps/web in npm workspaces"`; check `git diff HEAD~1 -M --diff-filter=R --name-only | wc -l` (≈ 693); `git push -u origin monorepo && gh pr create --fill`.

**A3 · Vercel switch (Pedro, dashboard; no pushes to `main` meanwhile).** After green PR CI: Settings → Build and Deployment → Root Directory `apps/web`, «Include files outside the root directory» enabled, install/build commands default, env unchanged. Redeploy the branch preview; the log shows the install at the repo root, no root warning, success (the preview is SSO-protected: open it in Pedro's browser or `vercel curl`). Smoke: `/es`, a Bible chapter, `/api/bible/…`, glossary, history, a doctrine's Pasajes, `/api/ai/status`. Merge; confirm the production build, the live site and a green warm-cache run. **Rollback:** Instant Rollback to the previous production deployment; Root Directory back to empty; `git revert` the merge. After the switch, `deploy:demo` needs a fresh `vercel pull` (test before relying on it).

**B · Design of `packages/core`.**
- `package.json`: `@doctrina/core`, private, `"type": "module"`, `"sideEffects": false`, `"exports": { "./*": "./src/*.ts" }`, scripts `typecheck` (`tsc --noEmit`) and `test` (`node --test`). No barrel, no build step. Inside core, imports use the package name (`@doctrina/core/bible-books`), never relative paths. Web depends on `"@doctrina/core": "*"`; Turbopack transpiles workspace packages (`transpilePackages` only if a build fails).
- `tsconfig.base.json` at the root (shared strict options); web extends it keeping `dom`, `jsx`, plugins, paths; core extends it with `lib: ["ES2023"]`, `types: []`, `include: ["src"]`, plus `src/globals.d.ts` declaring only `setTimeout` and `console`.
- Lint for `packages/core/src/**`: `no-restricted-imports` (`react*`, `next`, `next/*`, `server-only`, `react-native*`, `expo*`, `@/*`, `@doctrina/web`, `node:*` and Node built-ins) and `no-restricted-globals` (`window`, `document`, `localStorage`, `sessionStorage`, `navigator`, `location`, `addEventListener`, `removeEventListener`, `process`, `crypto`), plus `doctrina/english-names`; fixtures in `check-lint-rules.mjs` (React, `node:fs`, `next/cache`, `@/lib/x`, `localStorage` fail; `@doctrina/core/locale` passes).
- Tests: a `tools/check-*.mjs` that imports only core moves unchanged to `packages/core/test/` (`node --test`); `lint` adds `&& npm test -w @doctrina/core`; checks that also read `data/` (`check-bible-reference`, `check-names`, `check-content`) stay in `tools/`.
- Config: core never reads `process.env`; `corpus-env`, `site-url`, `lean-build`, `simplifier-enabled` stay in web; mobile gets its own `env.ts` (Supabase URL and publishable key only).
- HTTP: `supabase-rest` takes `get: (url, headers) => Promise<HttpResponse>` (minimal structural type: `ok`, `status`, `headers.get`, `json`, `text`); web passes `nextGet(tag)` with `cache: "force-cache"` and `next: { tags: [tag] }`; mobile passes `fetch`.
- Storage: `type KeyValueStorage = { read(key): string | null; write(key, value): void; watch?(key, onChange): () => void }`; stores become factories (`createHighlightStore(storage, newId)`; `newId` injected because `crypto.randomUUID` in `lib/highlights.ts:17` is not on Hermes); web keeps its files and exported names, instantiating with `browserStorage` (localStorage in try/catch, `watch` via the `storage` event); mobile uses `expo-sqlite/kv-store` sync methods without `watch`; no global singleton.
- Server-only getters: when one moves, core keeps the pure logic, web keeps `import "server-only"` plus a re-export; only when mobile needs it.

**B blocks (dependency order; each: `grep -rn "\"@/<moved path>\"" apps tools` empty, verify incl. core typecheck and tests green, e2e green, same route list; commit `refactor(core): move <group> to @doctrina/core`).**
- **B0** skeleton, tsconfigs, lint block and fixtures, test script, `lib/locale.ts` → `core/src/locale.ts` (134 importers, sed `"@/lib/locale"` → `"@doctrina/core/locale"`); `next.config.ts` imports `@doctrina/core/locale` (riskiest: Next loads the config with its own transpile hook `next/dist/build/next-config-ts/transpile-config.js`; fallback: import `../../packages/core/src/locale.ts`); `AGENTS.md` flow `… → lib → @doctrina/core` and PROJECT.md. Extra check: `node -e 'import("@doctrina/core/locale").then(m=>console.log(m.defaultLocale))'` prints `es`.
- **B1** pure leaves: `lib/{highlights, notes, read-chapters, text-pieces, word-snap, search-match, inline-refs, punctuation, transliterate-greek}`, `content/model/*`, `bible/{red-letters, translation-meta, numbering-note}`, `words/shard-of`; tests `check-{highlights, notes, read-chapters, text-pieces, red-letters, inline-refs, search}` move.
- **B2** `verse-names`, `bible-books`, `bible-segments`, `bible-routes`, `bible-reference/*`, `bible/{chapter-neighbors, normalize-bible, translation-defaults, default-translation}` (`routes.ts` stays in web: `next.config` uses `spanishRewrites`).
- **B3** `supabase-rest` (injected `get`), `bible/{bible-source, supabase-source}`, `words/words-source`, `father-text/father-types` (web keeps `get-bible`, `corpus-env`, `local-*`, and `supabase-words-source` because it needs the secret key).
- **B4** `storage.ts`, then `highlight-store`, `note-store`, `read-chapter-store`, `translation-choice`, `second-translation` as factories with `browserStorage` in web; `check-second-translation` moves; extra e2e focus on highlights, notes, reader (cross-tab sync).
- **B5** `ui-text` (`es`, `en`, `types`, `error-text`) at the start of M-C; `get-ui-text` stays web's server-only wrapper.

**Not now (YAGNI):** `pages/*`, `registry/*`, `history/*`, `validate*`, formatters, the A1 JSON getters, `lib/ai/*`, timeline helpers, `routes.ts`, search index, the other ~10 web-UI stores (theme, reader size…), fonts, tokens, components; no Turborepo, no compiled core, no shared config object, no «skip unaffected» Vercel toggle yet.

**Risks (M-A/M-B).** Turbopack stops tracing `data/` → A1 bundles them, preview check. Pushes to `main` during the root switch → freeze `main`, rollback. Lockfile changes versions → `npm install` not `update`, compare `npm ls`. `next.config` cannot load core → found in B0, relative-import fallback. Node type-stripping under `node_modules` → symlink resolves to `packages/core`; B0's `node -e` proves it. Large JSON slows `tsc` → measured in A1. React 19.2.8 (web) vs 19.3.0 (mobile) → core never depends on React; in M-C align web to 19.3.x if Next allows, else check `npm ls react` and nested copies. Hermes gaps (`normalize`, `Intl`, `crypto`) → `newId` injected, search folding tested on a device in M-C. Metro watching `data/` (≈ 220 MB ignored) → `blockList` in M-C. Words need the secret key → mobile uses the web's static `/api/words` route.

Files the Plan agent read: `package.json`, `eslint.config.mjs`, `tools/alias-loader.mjs`, `tools/eslint-plugin-doctrina.mjs`, `src/content/passage-focus.ts`, `AGENTS.md`, `tsconfig.json`, `next.config.ts`, `playwright.config.ts`, `.gitignore`, `.prettierignore`, `.github/workflows/{verify,warm-cache}.yml`, `.claude/{settings.json, hooks/block-git-writes.mjs, rules/*.md}`, `tools/check-{lint-rules, english-names, names, bible-reader, ai}.mjs`, `src/content/{corpus-env, supabase-rest, source-catalogue, ui-text/*, bible/local-source, bible/supabase-source}.ts`, `src/lib/{highlight-store, translation-choice, lean-build, site-url, simplifier-enabled}.ts`, `docs/PROJECT.md`, and in `node_modules/next/dist`: the `transpilePackages`, `turbopack`, `output` docs, `server/config.js`, `build/next-config-ts/transpile-config.js`.

---

## 4. How the coordinator launches a phase
Template (brief file `~/doctrina-research-prompts/mobile-<phase>.md`, ≤ 30 lines): «You are a fresh Sonnet 5.5 (effort high) session. Read `AGENTS.md`, then `docs/features/mobile-app.md` entirely, then phase **M-x**: do exactly that phase, nothing else. Clone `cp -cR ~/Desktop/dev/doctrina ~/Desktop/dev/doctrina-mobile-<x>` (stop if it exists). Cap: weekly N %, session 60 %. Report to the coordinator named in `~/doctrina-research-prompts/COORDINATOR.txt` via MAILBOX at each block; final message in Spanish: what was done, verification numbers, deliberate differences, commit commands in blocks, counter start/end.» The coordinator verifies (file-by-file diff against the real repo, `npm run verify`, the phase's own checks), merges, and gives Pedro the commit commands; Pedro commits; the next phase starts after his ok.

## 5. Verification (global)
- Web never regresses: `npm run verify` (from the new layout after M-A) and the CI-like build without git-ignored data, at the end of every phase that touches shared code; Vercel **preview** deploy before production after M-A.
- Core: its tests run in CI and locally; the lint rule forbids React/DOM/Node/Next imports.
- Mobile: typecheck, lint, jest-expo + RNTL, Maestro flows per feature (translated from the web's e2e specs as the acceptance list), dev builds on simulator/emulator, and Pedro on real devices for each slice; screenshots vs the web at 390/360 light/dark.

## 6. Risks and mitigations
| Risk | Mitigation |
|---|---|
| M-A breaks the live site (Vercel root, CI, hooks, tools paths) | preview deploy first; CI-like build; rollback = revert the move commit; Pedro changes Vercel Root Directory only after the preview passes |
| Duplicate React (web 19.2.8, mobile 19.3.0) | core has no React; `npm ls react` and `expo-doctor` in CI; per-app React pinned |
| Native text selection for highlights is hard (RN Text exposes no selection range) | M-D designs it first; M-F prototypes it as its first block; fallback options decided with Pedro |
| Continuous reader stream on native (variable-height prepends) | M-E measures the list component; keep-position logic ported with tests |
| Editorial bundle size (≈ 4 MB TS) | measure in M-C; move to fetched JSON assets if needed |
| Supabase anon egress/limits | cache aggressively; fall back to the web's static JSON if numbers say so |
| Store rejection (4.2, AI, privacy) | native value from v1; consent and reporting before AI ships; M-L checklist |
| Weekly usage overrun | session ≤ 60 %; one agent at a time; phases split into blocks |

## 7. Docs to update when the plan is approved
Copy this plan into `docs/features/mobile-app.md` (replacing the draft skeleton; it becomes the plan agents read); DECISIONS entry with Pedro's four answers; ROADMAP «Now» bullet «Mobile app» pointing to the phases; after M-A: `AGENTS.md` (commands, paths), `docs/PROJECT.md` (structure), `docs/GOTCHAS.md`; a playbook `docs/playbooks/mobile-phase.md` written after M-C's retro (not before).

## 8. Sources (official, read 2026-11-11)
Expo SDK 58: https://docs.expo.dev/versions/latest/ · https://expo.dev/changelog/sdk-58 · New Architecture: https://docs.expo.dev/guides/new-architecture/ · Router: https://docs.expo.dev/router/introduction/ , native tabs https://docs.expo.dev/router/advanced/native-tabs/ , drawer https://docs.expo.dev/router/advanced/drawer/ · Universal links: https://docs.expo.dev/linking/ios-universal-links/ , App Links: https://docs.expo.dev/linking/android-app-links/ · Monorepos: https://docs.expo.dev/guides/monorepos/ · DOM components: https://docs.expo.dev/guides/dom-components/ · Tailwind/NativeWind: https://docs.expo.dev/guides/tailwind/ , https://www.nativewind.dev/v5 · Reanimated: https://docs.expo.dev/versions/latest/sdk/reanimated/ · Gesture Handler: https://docs.expo.dev/versions/latest/sdk/gesture-handler/ · SQLite: https://docs.expo.dev/versions/latest/sdk/sqlite/ · FileSystem: https://docs.expo.dev/versions/latest/sdk/filesystem/ · SecureStore: https://docs.expo.dev/versions/latest/sdk/securestore/ · Fonts: https://docs.expo.dev/develop/user-interface/fonts/ · Pricing: https://expo.dev/pricing · EAS Update: https://docs.expo.dev/eas-update/introduction/ · Dev builds: https://docs.expo.dev/develop/development-builds/introduction/ · App integrity: https://docs.expo.dev/versions/latest/sdk/app-integrity/ , https://developer.android.com/google/play/integrity/overview · Apple guidelines: https://developer.apple.com/app-store/review/guidelines/ · Apple privacy: https://docs.expo.dev/guides/apple-privacy/ , https://developer.apple.com/app-store/app-privacy-details/ · Apple program: https://developer.apple.com/programs/ · Google target SDK: https://developer.android.com/google/play/requirements/target-sdk · Data safety: https://support.google.com/googleplay/android-developer/answer/10787469 · AI content: https://support.google.com/googleplay/android-developer/answer/13985936 · Testers rule: https://support.google.com/googleplay/android-developer/answer/14151465 · Unit testing: https://docs.expo.dev/develop/unit-testing/ · Maestro jobs: https://docs.expo.dev/eas/workflows/pre-packaged-jobs/
Marked unverified by the research: Expo DOM components' production status; whether `@expo/app-integrity` works in Expo Go; Apple App Attest throttling; sharing with Next.js in a monorepo as an official pattern.
