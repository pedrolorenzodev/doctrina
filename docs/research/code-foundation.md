# Code foundation research

## Progress

- Status: done.
- Done: created this output file before reading task sources, as required; Papacy was closed first under the owner's sparse-corpus rule; read all required local sources, the installed version-matched Next.js 16.3 guides, official maintainer documentation, and concrete maintainer/practitioner issue reports for all twelve requested decision areas; recorded a Doctrina-specific recommendation, alternative, failure mode, and setup cost for each; ended with a prioritised pre-B1/deferred checklist.
- In progress: none.
- Next: task 2 in `~/.doctrina-youtube/prompt-codex-dia-4.md`: resume the official-layer second verification in the order specified there, beginning with Lutheran; do not start a debate layer.
- Decided by the agent, to confirm: treat the project-specific performance limits and the exact choice of lint plugins as recommendations, not approved product decisions; use measured baselines instead of inventing a universal JavaScript-kilobyte target.

## Scope and fixed local constraints

- [verified] The repository already fixes Next.js 16.3 App Router with Turbopack, React 19.2, strict TypeScript, Tailwind CSS 4 CSS-first tokens, ESLint 9, and npm. Source: `docs/PROJECT.md`, “Stack”; exact installed versions remain in `package.json`.
- [verified] The intended dependency direction is `app → features → components/ui → lib`; routes stay thin, features do not import one another, Server Components are the default, and `"use client"` should sit at the lowest interactive boundary. Source: `AGENTS.md`, “Code”; `docs/PROJECT.md`, “Architecture”.
- [verified] Editorial doctrine content stays reviewable in git as typed files; reference and later user data move behind an async data-access layer so Supabase does not leak through pages. Every content record needs stable IDs, provenance, edition, licence, and verification state. Source: `docs/PROJECT.md`, “Data architecture”; `.claude/rules/content.md`.
- [verified] The approved design maps its colors, typography, spacing, radii, layers, and motion variables one-to-one to Tailwind v4 `@theme` tokens. Components may not introduce hardcoded style values, CSS Modules, local `<style>` blocks, or preventive abstractions. Source: `docs/DESIGN.md` §§1–4; `.claude/rules/ui.md`.
- [verified] B1 is meant to establish tokens, fonts, locale routing/dictionaries, the no-flash theme bootstrap, and a minimal visible page; B2 then proves typed content, async getters, inline-reference validation, and build failure on unknown IDs. Source: `docs/features/implementation-start.md`, §§2–3.
- [verified] The implementation plan already recommends typed TypeScript modules with `satisfies`, localized routes under `[lang]`, `src/content`, shared source-registry levels, and rendering only published destinations. This report treats those as current project proposals/decisions and tests their supporting safeguards rather than reopening them without evidence. Source: `docs/features/implementation-start.md`, D1–D12.
- [inference] The highest-risk foundation mistakes for this site are silent content/i18n failures and dependency drift, not raw request throughput: it is a static-first editorial product where a wrong language, unresolved citation, or duplicated agent-made primitive directly damages trust.

## Installed Next.js 16.3 findings

- [verified] Next.js is deliberately unopinionated about project organization and supports both colocation inside route segments and code outside `app`; a route is public only when a `page` or `route` file exists. Doctrina's routing-only `app` plus feature folders is therefore a project convention that needs enforcement, not behavior Next supplies. Source: installed `node_modules/next/dist/docs/01-app/01-getting-started/02-project-structure.md`.
- [verified] `"use client"` creates a module-graph boundary: everything the client entry imports joins the browser bundle. Client components still render on the server on an initial visit, so reading `window`, storage, locale-sensitive dates, or random values during render can produce hydration mismatches. Server-to-client props must be serializable; a Server Component can cross as rendered `children`, but a compound component exposed through static properties can break across the boundary. Source: installed `.../01-getting-started/05-server-and-client-components.md` and `.../02-guides/server-and-client-boundary.md`.
- [verified] App Router `params` and `searchParams` are promises; `searchParams` is request-time data and opts a page into dynamic rendering. Generated global `PageProps<'/route'>` and `LayoutProps<'/route'>` provide route-aware keys. Source: installed `.../03-file-conventions/page.md` and `layout.md`.
- [verified] Next 16's `next/root-params` exposes async getters such as `lang()` to Server Components and server utilities without prop drilling. It is unavailable in Client Components, Server Actions, and Route Handlers; the generated export names require valid JavaScript identifiers. Source: installed `.../04-functions/next-root-params.md`.
- [verified] Next's current i18n guide recommends a top-level `[lang]`, an explicit supported-locale guard that calls `notFound`, server-only dynamically imported dictionaries, and `generateStaticParams` for the supported locales. Server-loaded dictionaries do not enlarge the client JavaScript bundle. Source: installed `.../02-guides/internationalization.md`.
- [verified] `middleware` is deprecated and renamed `proxy` in Next 16. Proxy should be reserved for request-dependent redirects/rewrites, not slow fetching, and its matcher must explicitly exclude static assets or it runs for every request. A pure static export does not support Proxy or `next.config` rewrites/redirects. Sources: installed `.../01-getting-started/16-proxy.md`, `.../03-file-conventions/proxy.md`, and `.../02-guides/static-exports.md`.
- [verified] Static export and ISR are mutually exclusive. Export also loses request-dependent dynamic routes, default image optimization, Server Actions, and several other server features; ISR requires a Node runtime and has cache-coordination caveats on multiple instances. Source: installed `.../02-guides/static-exports.md` and `.../02-guides/incremental-static-regeneration.md`.
- [verified] Next's production checklist warns that request-time APIs can make an entire route—or an entire app when used at the root—dynamic, recommends keeping client boundaries small, and calls for custom not-found/error UI, local production builds, Web Vitals field data, and bundle analysis. Source: installed `.../02-guides/production-checklist.md`.
- [verified] Expected absence belongs in `notFound()` plus `not-found.tsx`; uncaught rendering faults belong in nested `error.tsx` boundaries, and the root failure needs `global-error.tsx` with its own `<html>` and `<body>`. Error boundaries do not catch ordinary event-handler failures. Source: installed `.../01-getting-started/10-error-handling.md`.
- [verified] Next's Vitest guide says Vitest currently does not support async Server Components and recommends end-to-end tests for them. Its Playwright guide recommends running E2E tests against the production build and supports Chromium, Firefox, and WebKit. Source: installed `.../02-guides/testing/vitest.md` and `playwright.md`.
- [verified] A persisted theme applied in `useEffect` flashes; directly rendering a browser-only preference can mismatch hydration. Next 16 documents a synchronous inline script in `<head>` that sets `data-theme` before first paint, paired with narrowly scoped `suppressHydrationWarning`; a strict CSP would require a nonce. Source: installed `.../02-guides/preventing-flash-before-hydration.md`.
- [verified] `next/font` downloads Google fonts at build time and self-hosts them, avoids browser calls to Google, supports variable-font axes such as `opsz`, and preloads selected subsets by default. Loading extra axes or subsets increases files/bytes, so Doctrina should include only the approved scripts and axes. Source: installed `.../03-api-reference/02-components/font.md`.

## Decision matrix

The effort labels below mean **small** (well under one implementation block), **medium** (one focused block plus verification), or **large** (a continuing subsystem). They estimate foundation work only, not the later feature itself.

### 1. Folder architecture, import boundaries, and Server/Client boundaries

**Recommended choice for Doctrina — small now, medium only if the graph grows.**

- [verified] Keep the documented flow `app → features → components/ui → lib`, with `app` limited to route composition and Next file conventions. Enforce the highest-value prohibitions immediately in ESLint: no feature-to-feature imports, no upward imports, and no browser module importing a server-only module. `import/no-restricted-paths` models resolved-file “zones”; core `no-restricted-imports` can cover named packages and patterns but checks static imports only. Sources: [`import/no-restricted-paths`](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md); [ESLint `no-restricted-imports`](https://eslint.org/docs/latest/rules/no-restricted-imports).
- [inference] Prefer one path-aware ESLint mechanism, not three overlapping architecture tools. If `eslint-plugin-import` is already introduced for resolution/import hygiene, its zones fit the project. Otherwise, begin with core ESLint patterns and a small architecture fixture/test that proves each forbidden edge is caught. Add [dependency-cruiser](https://github.com/sverweij/dependency-cruiser/blob/main/README.md) only when cycles, orphan modules, or a graph report become real needs; it can validate custom dependency rules and graph them, but duplicates the simple ESLint job today.
- [verified] Keep Server Components as the default and place `"use client"` on the smallest leaf that owns state, an effect, or a browser API. The directive pulls the entry's imported module graph into the client bundle, initial client components still server-render, and Server-to-Client props must be serializable. Source: installed Next guides `01-getting-started/05-server-and-client-components.md` and `02-guides/server-and-client-boundary.md`.
- [inference] Mark server-only content loaders and registry modules with `server-only`; do not barrel-export server and client modules through one index. A mixed barrel makes an innocent client import capable of dragging incompatible modules across the boundary or obscuring the bundle cost.

**Alternative.** [`eslint-plugin-boundaries`](https://github.com/javierbrea/eslint-plugin-boundaries) offers richer element types and layer rules; dependency-cruiser offers whole-graph validation. Both are reasonable once the project has enough modules to justify their configuration, but neither is needed to state four layers.

**What breaks if this is left undecided.** Next will not enforce the project structure. Agents can create cross-feature coupling, duplicate shared code, import database or filesystem code into the browser graph, or move a parent to `"use client"` to silence one interaction—expanding hydration and producing non-serializable-prop or browser/server mismatch bugs.

### 2. TypeScript strictness

**Recommended choice for Doctrina — small.**

- [verified] Retain `strict`, then enable `noUncheckedIndexedAccess` and `exactOptionalPropertyTypes` before B1/B2. The former adds `undefined` to undeclared indexed values and array indexing; the latter distinguishes a missing property from a property explicitly set to `undefined`. Neither is included merely by saying “strict”. Sources: [TypeScript 4.1 release notes](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html); [`exactOptionalPropertyTypes`](https://www.typescriptlang.org/tsconfig/exactOptionalPropertyTypes.html).
- [inference] These two flags directly protect Doctrina's riskiest shapes: locale dictionary lookups, citation/source registries, and optional publication metadata. Enable them while almost no application code exists; retrofitting them after hundreds of records would create a large, noisy migration.
- [inference] Also enable `noImplicitReturns`, `noFallthroughCasesInSwitch`, and `noUncheckedSideEffectImports`. The first two protect validators and render-state switches; the third catches misspelled side-effect imports such as CSS. `useUnknownInCatchVariables` already comes with `strict`; do not repeat it as a separate achievement. Source: [TypeScript compiler options](https://www.typescriptlang.org/docs/handbook/compiler-options.html) and [`useUnknownInCatchVariables`](https://www.typescriptlang.org/tsconfig/useUnknownInCatchVariables.html).
- [inference] `noImplicitOverride` is low-cost but mostly dormant in a composition-oriented React codebase; enable it if classes appear. Defer `noPropertyAccessFromIndexSignature`: it improves signalling for open dictionaries but creates little value when dictionaries instead use exact key unions. Sources: [`noImplicitOverride`](https://www.typescriptlang.org/tsconfig/noImplicitOverride.html); [`noPropertyAccessFromIndexSignature`](https://www.typescriptlang.org/tsconfig/noPropertyAccessFromIndexSignature.html).

**Alternative.** Keep only `strict` and rely on validators/tests. That reduces short-term annotations but leaves indexed lookups and absent-vs-undefined semantics looser precisely where the content model depends on exactness.

**What breaks if this is left undecided.** A missing Spanish key, an unknown citation ID, or an out-of-bounds record lookup can type-check as a value and fail only in a page build or render. Adding the flags later can touch every dictionary and content record at once.

### 3. i18n, typed dictionaries, and locale routing

**Recommended choice for Doctrina — medium.**

- [verified] Use a top-level `[lang]`, a closed `Locale = 'es' | 'en'` set, an explicit guard that calls `notFound()`, server-only dynamic dictionary imports, and `generateStaticParams` for both locales. That is the current App Router pattern and keeps dictionaries out of client JavaScript. Source: installed Next guide `02-guides/internationalization.md`.
- [inference] Make Spanish the canonical dictionary shape and require English to `satisfies typeof es` (or both to satisfy one exact recursive schema). TypeScript's `satisfies` checks compatibility without widening away the value's precise inferred type, and an exact key record detects missing and extra keys at build time. Source: [TypeScript 4.9, `satisfies`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html).
- [inference] Put locale construction in one route helper and never concatenate `/${lang}` ad hoc. Give links a typed destination plus locale; validate that every published destination exists in both locale graphs. This prevents mixed-language navigation and one-language-only dead links.
- [verified] If hardcoded-string lint is adopted, configure attributes as well as JSX children. `eslint-plugin-i18next` defaults to its JSX-text rule, while a concrete project report shows that `aria-label` and `placeholder` escaped a JSX-text-only setup. Sources: [`eslint-plugin-i18next`](https://github.com/edvardchen/eslint-plugin-i18next); [agent-canvas issue #2019](https://github.com/OpenHands/agent-canvas/issues/2019).
- [inference] Start with typed dictionaries and a narrowly scoped hardcoded-UI check after the first real block. Allow product names, scripture abbreviations, IDs, citation locators, and test fixtures explicitly. Do not turn on a blanket `react/jsx-no-literals`: it creates false positives for content-rich pages and encourages suppression comments, which would hide the rule's useful signal.

**Alternative.** An i18n runtime library can add interpolation, plural rules, extraction, and mature lint. It is justified if B1 reveals plural/select requirements; it is unnecessary for two server-rendered dictionaries and adds another runtime vocabulary before the UI exists. [`i18next-cli`](https://github.com/i18next/i18next-cli/blob/main/README.md) can lint JSX text/attributes and interpolation parameters if the project later adopts that ecosystem.

**What breaks if this is left undecided.** Invalid locale URLs may render partial pages; keys can silently fall back or display raw identifiers; `aria-label`, title, and placeholder strings can remain English in Spanish UI; hand-built links can drop the locale; importing both dictionaries in a client boundary can inflate every route.

### 4. Tailwind v4 tokens, arbitrary values, dark mode, and shadcn

**Recommended choice for Doctrina — medium.**

- [verified] Encode the approved design's semantic colors, type, spacing, radii, shadows, and motion as top-level Tailwind v4 `@theme` variables; use ordinary `:root` variables only when no utility should be generated. `@theme` is not merely a selector: it defines which utilities and variants Tailwind generates. Source: [Tailwind theme variables](https://tailwindcss.com/docs/theme).
- [verified] Never build Tailwind class names dynamically (`bg-${tone}-500`); its scanner reads source as text and cannot understand interpolation. Map variants to complete static class strings. Source: [Tailwind class detection](https://tailwindcss.com/docs/detecting-classes-in-source-files).
- [inference] Treat bracketed arbitrary values as errors in application UI except a short, reviewed allowlist for values that genuinely must be runtime data (for example a CSS custom property consumed by a progress indicator). The existing project rule—zero hardcoded design values—is stronger and more useful than simply asking whether a Tailwind class is syntactically valid.
- [verified] `eslint-plugin-tailwindcss` v4 exposes a `no-arbitrary-value` rule, but adding a plugin creates its own compatibility surface. Verify its ESLint 9/Tailwind 4 behavior on a tiny fixture before adopting it; otherwise use a repo-local non-mutating check for bracket classes. Sources: [v4 README](https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/v4/README.md); [v4 upgrade notes](https://github.com/francoismassart/eslint-plugin-tailwindcss/blob/v4/UPGRADE.md).
- [verified] Use CSS variables for shadcn's semantic pairs and regard `baseColor`/`cssVariables` as installation-time choices. The Tailwind v4 shadcn configuration points to the CSS entry and leaves a Tailwind config path blank. Sources: [shadcn theming](https://ui.shadcn.com/docs/theming); [`components.json`](https://ui.shadcn.com/docs/components-json).
- [inference] Copy only the primitive needed for the current approved block, then adapt it to Doctrina's existing tokens. Never rerun an initializer or `--overwrite` across customised primitives: shadcn source is owned project code, and bulk regeneration can replace `globals.css` or local changes. This agrees with `.claude/rules/ui.md`.
- [verified] Apply the stored theme before first paint with the documented synchronous head script, set `data-theme`, and scope `suppressHydrationWarning` only to the element whose attribute the script changes. An effect-based switch flashes; direct browser-state rendering risks a hydration mismatch. Source: installed Next guide `02-guides/preventing-flash-before-hydration.md`.

**Alternative.** Permit arbitrary Tailwind values and periodically normalise them; or accept shadcn's default theme as a second token vocabulary. Both are faster for a throwaway prototype, but the approved design already supplies exact tokens, so they manufacture drift rather than flexibility.

**What breaks if this is left undecided.** Agents produce visually similar but different grays, gaps, radii, and animations; dark mode flashes or hydrates differently; dynamic classes disappear from production CSS; later shadcn updates overwrite owned customisation.

### 5. Component reuse and catalogue

**Recommended choice for Doctrina — small now; defer a catalogue runtime.**

- [inference] Before B1, maintain one lightweight, searchable component inventory in the implementation feature document: canonical name, import path, status (primitive/composite/block), client/server boundary, and where it is demonstrated. Require every task to search that inventory and `rg` before creating a component; one coordinator owns shared primitives and index files.
- [inference] Demonstrate components in the real approved block/page and capture Playwright screenshots at the project sizes. This reuses the actual Next, font, CSS, dictionary, and Server Component environment instead of maintaining a parallel renderer.
- [verified] Playwright visual snapshots compare pixels and are sensitive to OS, browser, fonts, hardware, and rendering environment; baselines must be produced and checked in the same environment. ARIA snapshots can assert the accessible tree, but broad automatic updates can bless unintended changes. Sources: [Playwright visual comparisons](https://playwright.dev/docs/test-snapshots); [ARIA snapshots](https://playwright.dev/docs/aria-snapshots).

**Alternative.** Re-evaluate Storybook after the primitive set stabilises and there are enough independently meaningful states to justify it. Current firsthand reports document Next 16/Vite compatibility friction and remaining React Server Component differences involving `next/link`, `next/image`, and fonts; Storybook's accessibility checks can also run before async/RSC content settles unless explicitly delayed. Sources: [Storybook issue #34688](https://github.com/storybookjs/storybook/issues/34688); [RSC issue #32650](https://github.com/storybookjs/storybook/issues/32650); [Storybook accessibility testing](https://storybook.js.org/docs/writing-tests/accessibility-testing). Ladle is lighter but still introduces a Vite-rendered second environment, so it does not remove the central mismatch.

**What breaks if this is left undecided.** Multiple agents create `Button`, `IconButton`, and `ActionButton` variants with slightly different tokens; obsolete components remain because no one knows the canonical one; a catalogue can also give false confidence if it renders differently from Next. The deferred choice avoids a setup and upgrade surface before there is a catalogue worth viewing.

### 6. Testing for an editorial content site

**Recommended choice for Doctrina — medium before B2, then incremental.**

- [inference] Use Vitest for deterministic pure code: locale guards, route builders, inline-reference parsers, citation/source-registry validators, formatters, publication-state filtering, and dictionary parity. These tests should exercise bad inputs as first-class cases because “fail the build on an unknown ID” is a product invariant.
- [verified] Do not unit-test async Server Components with Vitest: Next's own guide says that support is not available and recommends E2E instead. Source: installed Next guide `02-guides/testing/vitest.md`.
- [inference] Use Playwright against a production build for a small critical matrix: both locales; valid/invalid locale routes; theme before first paint and after reload; main navigation; citation dialog open/focus/Escape/restore-focus; a published and unavailable destination; 360-pixel horizontal overflow; Chromium plus WebKit for release-critical flows. Next recommends production-build E2E and supports Chromium, Firefox, and WebKit. Source: installed `02-guides/testing/playwright.md`.
- [verified] Add `@axe-core/playwright` to critical page states, but keep manual keyboard, focus, zoom/reflow, and screen-reader-oriented review. Playwright explicitly warns that automation catches only some accessibility issues. Source: [Playwright accessibility testing](https://playwright.dev/docs/next/accessibility-testing).
- [inference] Apply visual regression only to approved, stable blocks at fixed viewports and in one pinned CI environment. Do not snapshot whole long-form pages or every browser: content changes would create high-noise updates. Prefer role/text assertions for behavior, a small screenshot crop for visual contracts, and an ARIA snapshot only where structure is itself the contract.

**Alternative.** Only manual smoke testing is cheaper for the first page, but it cannot reliably enforce citation integrity or language parity on every change. A broad unit/snapshot suite is the opposite error: it duplicates implementation and makes editorial changes expensive.

**What breaks if this is left undecided.** Unknown references reach production, bilingual pages diverge, theme or focus regressions recur, screenshots are updated indiscriminately, and async RSC tests either fail for tooling reasons or test a fake environment.

### 7. Formatting, linting, hooks, and CI

**Recommended choice for Doctrina — small.**

- [verified] Keep ESLint for Next/React and project-specific semantic rules; add a locally pinned Prettier with an ignore file and a non-mutating `prettier --check` in verification. Prettier recommends an exact local version so formatting does not change between machines, editor integration, and a CI check. Source: [Prettier installation](https://prettier.io/docs/install/).
- [inference] Do not migrate to Biome now. Biome reports high but not identical Prettier compatibility and can replace much lint/format work, yet Doctrina still needs ecosystem/project rules for Next, imports, hardcoded UI text, and possibly Tailwind. A migration before B1 creates churn without removing those needs. Sources: [Biome comparison](https://biomejs.dev/introduction/comparison-with-other-tools/); [Biome migration](https://biomejs.dev/installation/migrate-from-other-tools/).
- [inference] Make GitHub Actions the authoritative clean check: pin the Node major, run `npm ci`, then `npm run verify`; add unit and production E2E jobs when those suites exist. npm documents that `npm ci` requires a lockfile, exits when it disagrees with `package.json`, and never rewrites either file. Sources: [`npm ci`](https://docs.npmjs.com/cli/commands/npm-ci/); [GitHub Actions Node workflow](https://docs.github.com/en/actions/tutorials/build-and-test-code/nodejs).
- [inference] Defer pre-commit automation. The repository deliberately blocks agent staging, and auto-fix/stage hooks complicate partial human commits. If Pedro later wants one, use a non-mutating staged-file check that never calls `git add`; CI remains the backstop. Prettier documents `lint-staged` as one option, not a requirement. Source: [Prettier pre-commit hooks](https://prettier.io/docs/precommit).

**Alternative.** Biome can be a fast single binary, or a hook can autoformat every commit. Either becomes attractive only after confirming it covers the exact project rules and does not conflict with the owner's staging workflow.

**What breaks if this is left undecided.** Agent/editor versions reformat each other's files, local `npm install` silently changes the lock, and a locally green build fails from a fresh checkout. Conversely, premature hooks can mutate files or staging unexpectedly.

### 8. Content pipeline, validation, and static rendering

**Recommended choice for Doctrina — medium before B2; ongoing validation grows with schemas.**

- [verified] Keep editorial doctrine content in typed TypeScript modules using `satisfies`, stable IDs, and explicit `es`/`en` fields, behind async getters. This preserves literal inference while validating the declared record shape. Source: [TypeScript 4.9, `satisfies`](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html); local `docs/PROJECT.md` and `docs/features/implementation-start.md`.
- [inference] Put all referential checks in one build-time validator: duplicate IDs; missing registry items; invalid inline-reference syntax; edition/licence/verification/provenance omissions; unknown or unpublished destinations; and required bilingual fields. Give errors record ID, field path, and source filename so an agent can repair the cause rather than bypass the check.
- [inference] Prefer TS over JSON because JSON cannot express the schema or preserve rich literals without a separate generation/validation step. Prefer TS over MDX because Doctrina's content is structured evidence, not arbitrary JSX; MDX would let editorial records import components and blur the content/render boundary.
- [verified] Next MDX requires compilation support and executes JSX; Next explicitly warns that remote MDX is executable JavaScript and must come only from trusted sources. Sources: [Next MDX guide](https://nextjs.org/docs/pages/guides/mdx); [remote MDX warning](https://nextjs.org/docs/13/pages/building-your-application/configuring/mdx).
- [inference] Start with static generation for every published route and both locales, but deploy as a normal Next Node/Vercel application rather than `output: 'export'`. A pure export would preclude Proxy, default image optimisation, ISR, and later request-aware/server features. Add ISR only when measured build duration or publication cadence demands it; do not pre-optimise a corpus that does not yet exist.
- [verified] Large static App Router builds can become material: a 2026 maintainer discussion reports 625 prerendered pages taking roughly 8–11 seconds warm and 61–84 seconds cold with multi-gigabyte memory/cache behavior; another report describes thousands of SSG pages and a multi-gigabyte `.next` output. They are firsthand reports, not universal benchmarks. Sources: [Next discussion #87283](https://github.com/vercel/next.js/discussions/87283); [Next discussion #86320](https://github.com/vercel/next.js/discussions/86320).
- [verified] ISR requires a Node runtime and is incompatible with static export. Source: installed Next guides `02-guides/incremental-static-regeneration.md` and `02-guides/static-exports.md`.

**Alternative.** MDX is appropriate if trusted authors truly need prose-level component composition; JSON plus a runtime schema is appropriate if non-TypeScript producers own content. Neither matches the current git-reviewed, typed editorial workflow.

**What breaks if this is left undecided.** Content imports UI, references fail only when clicked, unpublished routes leak into static params, builds become slow without telemetry, or a static-export commitment later blocks theme/locale routing and Supabase-era needs.

### 9. Performance budgets, fonts, images, and texture

**Recommended choice for Doctrina — small policy now, measurement throughout.**

- [verified] Use the Core Web Vitals “good” thresholds at the 75th percentile separately for mobile and desktop: LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1. These are user-experience thresholds, not a guarantee that every device/request meets them. Sources: [web.dev Web Vitals](https://web.dev/articles/vitals); [threshold methodology](https://web.dev/articles/defining-core-web-vitals-thresholds).
- [inference] Before there is a real B1 bundle, avoid inventing a universal JavaScript-kilobyte number. Use enforceable proxy budgets instead: no unapproved client dependency; client boundaries reviewed in each block; no route-wide `"use client"`; record route client-JS/build-size deltas once B1 supplies a baseline; investigate any regression rather than normalising it.
- [verified] Use `next/font` for the approved variable fonts, load only the required subsets/axes/weights, expose them through CSS variables, and verify that the exact fonts used in snapshots are present in CI. Next self-hosts the files and preloads selected subsets. Source: [Next font API](https://nextjs.org/docs/app/api-reference/components/font) and the installed version-matched guide.
- [verified] Use `next/image` for content images that benefit from sizing/optimisation, always reserve dimensions or an aspect ratio, and give `sizes` when using `fill`; otherwise browsers can fetch an image larger than its rendered slot. Source: [Next Image API](https://nextjs.org/docs/app/api-reference/components/image).
- [inference] Treat the approved paper/noise texture as a measured asset: render one static tile or single pseudo-element, never duplicate live filters across sticky layers, and compare paint/scroll traces on a low-end mobile profile with and without it. No authoritative source located states a universal cost for this exact texture; the decision must come from Doctrina's measured composition.
- [verified] Use Next's production build locally, Web Vitals field reporting when traffic exists, and bundle analysis when a route regresses. Source: [Next production checklist](https://nextjs.org/docs/app/guides/production-checklist); [package bundling guide](https://nextjs.org/docs/canary/app/building-your-application/optimizing/package-bundling).

**Alternative.** Set an arbitrary global bundle budget now or optimise every image/texture before a baseline. The former lacks a project measurement; the latter spends effort without identifying the actual bottleneck.

**What breaks if this is left undecided.** A high-level client boundary quietly ships dictionaries/content, font variants multiply, responsive images over-download, texture causes mobile repaint cost, and regressions have no baseline or field signal.

### 10. Dependencies, Node, lockfile, and upgrades

**Recommended choice for Doctrina — small.**

- [verified] Pin the active LTS major in one version file used by local tooling and CI, and express the same supported range in `package.json#engines`. As of 2026-10-22, Node 24 is Active LTS, Node 22 is Maintenance LTS, and Node 20 is EOL; Next 16 requires at least Node 20.9. Sources: [Node release schedule](https://nodejs.org/en/about/previous-releases); [Next 16 upgrade guide](https://nextjs.org/docs/app/guides/upgrading/version-16).
- [inference] Choose Node 24 for a greenfield 2026 implementation unless a concrete dependency fixture fails; use the exact major across CI and development rather than allowing any `>=20.9` runtime.
- [verified] Commit `package-lock.json`, install with `npm ci` in CI, and review dependency changes as the `package.json` plus lockfile pair. `npm ci` exits on disagreement and does not rewrite them. Source: [`npm ci`](https://docs.npmjs.com/cli/commands/npm-ci/).
- [inference] Add a dependency only when a current block needs it and record the existing alternative it replaces. Prefer platform/Next/React/TypeScript/ESLint capabilities over overlapping utilities. Do not auto-update shadcn code: it is copied source, not a normal runtime package.
- [verified] Configure weekly grouped dependency update proposals, separating production from development dependencies and grouping closely coupled framework packages. GitHub documents scheduled version updates and grouping to reduce PR volume. Sources: [optimising Dependabot PRs](https://docs.github.com/en/code-security/tutorials/secure-your-dependencies/optimizing-pr-creation-version-updates); [version update configuration](https://docs.github.com/en/code-security/how-tos/secure-your-supply-chain/secure-your-dependencies/configure-version-updates).
- [inference] No automatic merges. Next/React/Tailwind upgrades and shadcn source refreshes require the full verification command plus approved-route screenshots; security updates can be expedited but still verified.

**Alternative.** Pin every direct dependency to an exact number. That makes intent explicit but does not replace the transitive lockfile and increases routine edit churn. Ranges plus a committed lockfile and deliberate update PRs provide reproducible installs while retaining readable policy.

**What breaks if this is left undecided.** Different Node majors produce different lock/native behavior, clean CI installs drift from local work, Dependabot creates a flood of unrelated PRs, and automatic framework upgrades alter rendering or CSS without visual review.

### 11. Errors, logging, and analytics hooks

**Recommended choice for Doctrina — small error foundation before B1; vendors can wait.**

- [verified] Define the route-level absence and failure contract up front: `notFound()`/`not-found.tsx` for expected missing locale/content, nested `error.tsx` for recoverable rendering failures, and `global-error.tsx` for the root. The global boundary must render its own `<html>` and `<body>`; event-handler failures are not caught by error boundaries. Source: installed Next guide `01-getting-started/10-error-handling.md`.
- [inference] Add a tiny internal interface for reporting exceptions and product events, with a no-op/server-console implementation in development. Events use stable names and IDs only—never doctrine text, citation excerpts, search content, email, or other user-provided text. This creates a seam without shipping a vendor SDK.
- [verified] Next provides server `instrumentation.ts` and browser `instrumentation-client.ts`; the latter runs before the app becomes interactive and should stay lightweight. The official analytics guide recommends loading analytics after hydration with `next/script` and treating Web Vitals reporting separately. Sources: [Next instrumentation](https://nextjs.org/docs/app/guides/instrumentation); [Next analytics](https://nextjs.org/docs/app/guides/analytics).
- [inference] When validation begins, use PostHog for the already-planned product events and evaluate its current Next error tracking before adding a second vendor. Do not install PostHog and Sentry simultaneously at foundation time. PostHog documents both client/server Next integration and CSP/proxy concerns; Sentry remains a mature alternative if error diagnostics, releases, and source maps exceed PostHog's verified capabilities. Sources: [PostHog Next.js SDK](https://posthog.com/docs/libraries/next-js); [PostHog Next error-tracking changelog](https://posthog.com/changelog?id=2105); [Sentry for Next.js](https://sentry.io/for/nextjs/).
- [verified] A closed PostHog issue documents a past hydration mismatch in a Next integration. It is not evidence that the current release still has the bug, but it supports testing analytics-enabled production hydration rather than assuming the SDK is invisible. Source: [posthog-js issue #1645](https://github.com/PostHog/posthog-js/issues/1645).

**Alternative.** Install Sentry before B1 for deep errors/tracing, or use only host logs forever. The first is premature without users/routes; the second gives poor client failure visibility once public validation begins.

**What breaks if this is left undecided.** Expected missing records become generic 500s, the root has no usable failure UI, vendor calls leak sensitive text, two SDKs duplicate errors/session data, or late integration forces event names and consent behavior to be redesigned.

### 12. AI agents sharing one codebase

**Recommended choice for Doctrina — small process now; automate every stable invariant.**

- [verified] Keep `AGENTS.md` a short map of non-negotiable rules and route-specific instruction files, while the repo and version-matched framework docs remain the source of truth. OpenAI reports that an enormous instruction file failed in practice and uses a roughly 100-line repository map plus deeper docs; Next 16 now bundles version-matched docs and a managed AGENTS block because model memory is unreliable across framework versions. Sources: [OpenAI harness engineering](https://openai.com/index/harness-engineering/); installed Next guide `02-guides/ai-agents.md`.
- [verified] Instructions improve context but do not guarantee compliance. GitHub recommends concise, self-contained, broadly applicable custom instructions and path-specific files for specialised areas. Source: [GitHub custom instructions](https://docs.github.com/en/copilot/concepts/prompting-and-context/custom-instructions).
- [inference] Convert settled rules into machine failures: import-boundary lint, dictionary parity, content-registry validation, hardcoded-token/string checks, TypeScript flags, tests, and screenshots. Documentation explains the rule; automation prevents drift. Do not try to solve enforceable syntax or graph constraints with more prose.
- [inference] Work in one verified block at a time. Each task names owned files, acceptance criteria, explicit out-of-scope items, and the exact verification command. One coordinator owns shared files and indices; parallel agents receive disjoint file ownership. These project rules already exist and directly reduce merge collisions and half-integrated abstractions.
- [inference] Require a reuse gate before creating UI: search the component inventory and repo, name the missing responsibility, and only then create one component for a current use. After the block, delete replaced/dead code rather than leaving “v2” alternatives. TypeScript/lint catch unused bindings; dependency-cruiser can later detect orphans/cycles if the graph makes that worthwhile.
- [verified] Give agents runtime evidence: Next's agent guide recommends exposing `next dev`, browser state, and errors so the agent can inspect the result; OpenAI's own Codex guidance emphasises well-scoped issue-like prompts, repository instructions, conventions, and testing. Sources: installed Next `02-guides/ai-agents.md`; [How OpenAI uses Codex](https://openai.com/business/guides-and-resources/how-openai-uses-codex/); [iterating development workflows with Codex](https://developers.openai.com/cookbook/examples/codex/iterating-development-workflows-with-codex).
- [verified] Next maintains agent evaluations that compare a baseline against repository instructions and assert behavior with Vitest, reinforcing that agent rules should be testable artifacts rather than assumed obedience. Source: [Next agent evals README](https://github.com/vercel/next.js/blob/canary/evals/README.md).

**Alternative.** Give each agent a large self-contained prompt and reconcile afterward, or let every agent introduce preferred libraries and component names. This appears flexible but moves consistency work to integration time, when duplicated primitives and style drift are already embedded.

**What breaks if this is left undecided.** Agents trust outdated Next knowledge, duplicate components, widen client boundaries, invent tokens, edit shared indices concurrently, leave dead variants, and declare work done from code inspection without browser evidence.

## Prioritised checklist

### Decide and establish before B1

1. **Runtime reproducibility:** choose Node 24 LTS, pin the major for local/CI use, retain the lockfile, and define CI as `npm ci` followed by the repository verification command. [inference]
2. **Compiler baseline:** enable `noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, `noImplicitReturns`, `noFallthroughCasesInSwitch`, and `noUncheckedSideEffectImports` while the codebase is still small. [inference]
3. **Architecture guard:** encode `app → features → components/ui → lib`, prohibit feature-to-feature/upward edges, protect server-only loaders, and add one fixture per forbidden edge so the lint configuration itself is verified. [inference]
4. **Locale contract:** fix `Locale`, `[lang]`, invalid-locale handling, static params, server-only dictionaries, exact bilingual key parity, and one typed locale-preserving link/route helper. [inference]
5. **Design-system contract:** map approved values to `@theme`; forbid arbitrary hardcoded values and dynamic Tailwind strings; decide the reviewed exception mechanism; adapt shadcn one primitive at a time without bulk overwrite. [inference]
6. **Theme first paint:** implement and test the synchronous pre-paint theme attribute, with only the documented narrow hydration suppression. [inference]
7. **Formatting and clean verification:** pin Prettier, add `--check`, keep ESLint, and ensure a clean checkout uses the same `npm run verify`. Do not add a mutating pre-commit hook. [inference]
8. **Minimal component inventory and ownership:** establish the searchable canonical list and the “search before create” gate; shared primitives/indices have one owner per block. [inference]
9. **Error shell:** provide locale-aware not-found behavior and the minimal nested/root error boundaries before real content depends on them. [inference]
10. **Baseline evidence:** record B1 production build duration, route/client-JS output, screenshots at required viewports, WebKit smoke, no horizontal overflow, theme reload, and an initial axe/manual keyboard pass. [inference]

### Decide before or during B2

1. **Content schema and validator:** typed TS records with `satisfies`, stable IDs, provenance/edition/licence/verification requirements, bilingual fields, inline-reference resolution, duplicate detection, and actionable build errors. [inference]
2. **Test split:** Vitest for pure content/locale/route logic; Playwright against the production build for async Server Components and critical user behavior. [inference]
3. **Static route policy:** generate only published locale routes in normal Next deployment; measure build growth before considering ISR; do not select `output: 'export'`. [inference]
4. **Privacy-safe event seam:** stable typed event/error names and IDs with no content or personal text, initially backed by a no-op/development reporter. [inference]

### Can wait until a measured need exists

1. Storybook or Ladle; reconsider after several stable primitives/states justify a second renderer and current Next 16 RSC compatibility is rechecked. [inference]
2. dependency-cruiser or eslint-plugin-boundaries; add one only when simple ESLint rules cannot expose cycles, orphans, or the real graph. [inference]
3. A general i18n runtime/extraction platform; add it for demonstrated plural/select/editorial workflow needs, not for two exact dictionaries. [inference]
4. ISR; adopt only when measured build duration, page count, or publication cadence crosses a recorded project threshold. [inference]
5. A numeric route-JavaScript budget; set it from B1/B2 baselines and user-visible performance rather than an imported number. [inference]
6. PostHog's browser SDK and error tracking; add for public validation with CSP, consent/privacy, hydration, and duplicate-reporting tests. Add Sentry instead only if the required error workflow is not covered—never both by default. [inference]
7. Dependabot grouping, pre-commit checks, and visual-regression expansion; useful after CI and stable screens exist, but no hook may stage or mutate Pedro's work. [inference]
8. Supabase adapters; preserve the async content/data boundary now and implement the backend only for the first concrete user-data feature. [inference]

## Bottom line

[inference] The best foundation is deliberately small: version-pinned clean builds, stricter types, four enforced dependency layers, exact bilingual dictionaries, one token vocabulary, typed validated content, targeted production E2E, and machine-readable failure messages. The expensive alternatives—catalogue runtime, graph platform, i18n framework, ISR, and multiple observability SDKs—should remain deferred until Doctrina has measured evidence that the simpler foundation no longer covers the problem.
