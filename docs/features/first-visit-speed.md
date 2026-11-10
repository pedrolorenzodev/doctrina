# First visit speed (Pedro, 2026-11-10; clone `doctrina-speed`)

Brief: `~/doctrina-research-prompts/first-visit-speed.md`. Goal: a page nobody has opened since the last deploy is fast. Production is `https://doctrina.elpepo.dev`, built lean (`LEAN_BUILD=1`): a page renders on its first visit and the CDN keeps it until the next deploy.

## Acceptance

1. After every production deploy, a workflow requests the pages worth warming, politely, and prints counts by status and `x-vercel-cache`.
2. The search index is in no page; it is one cached, hashed file that loads when the search is about to be used, and search behaves as before.
3. The Bible reader prefetches its two neighbours only when it is cheap to do so, and no longer twice.

## Out of scope

Word and verse pages (not cached at all today, see «Findings»), the sidebar tree markup, anything outside the Bible reader's prefetch.

## Findings (measured 2026-11-10)

- **Cold cost by kind, production, gzip bytes and TTFB of the first request:** Bible chapter 0.28-0.57 s, 69-96 KB; doctrine, tradition, objection, early Christians 0.30-0.40 s, 73-116 KB; Father page 0.30 s, 84 KB; **work page 1.08 s, 254 KB** (the heaviest); glossary, Fuentes, reformation index are prerendered. A cache `HIT` is 0.06-0.20 s.
- **Verse and word pages are never cached** (`cache-control: private, no-cache, no-store`): 0.45 s every time, 1.5-2.6 s on a cold function. They have no `generateStaticParams`, so Next builds them as fully dynamic. Warming them is pointless; see «To confirm».
- **The search index was in the HTML once, not twice** (108 KB raw, ~28 KB gzip per page, in the flight data); the rest of the weight is the markup: the sidebar `<nav>` is ~410 KB raw (63 % of a Father page) but ~16 KB gzip.
- **Next prefetched the reader's neighbours twice** (RSC of the arrows' `Link`s + the stream's JSON), immediately and without looking at the connection.

## Block 1: warm-up

`tools/warm-cache.mjs` (`npm run warm-cache`), `warm-cache-plan.mjs` (pure functions), `warm-cache-bible.json` + `warm-cache-bible.mjs` (`npm run warm-cache:bible`), `check-warm-cache.mjs` (in lint), `.github/workflows/warm-cache.yml`.

- **Which URLs.** Crawl from `/es` and `/en`, following only links under doctrines, history, Fuentes and the glossary (the sidebar tree lists every doctrine page, tradition, objection, Passages page, Father, work, council, current, division and reformation entity; the glossary index lists the terms), plus the Bible chapters from the committed manifest (the runner has no corpus), plus the hashed search index of each locale. Discovered by crawling, not listed: it cannot go stale. The Bible manifest can, so lint compares it with the corpus whenever the corpus exists.
- **Not warmed:** verse and word pages (uncacheable today; 31,000 and 17,000 per language if they were), `/api/bible` and `/api/words` JSON (fetched by the reader at idle), Passages data JSON (loaded as the reader moves).
- **A run:** 3,430 requests (778 pages + 2,652 chapters; the 2,646 MISS were all chapters), 6 in parallel, 193 s on a cold cache, 11 s for the 778 non-Bible pages once warm; 0 errors, 0 retries; transfer ~3.4k x ~90 KB gzip = ~310 MB (~210 MB after block 2), all `Fast Data Transfer`; the MISS requests are the function invocations (2,646 per deploy, 2,646 x ~10 = ~26k a month at ten deploys). The repo is public, so the Actions minutes are free; a run is ~4 minutes with the 30 s alias delay.
- **Politeness:** 6 workers, 30 s timeout, up to 4 attempts with exponential backoff (500 ms x 2^n) honouring `Retry-After` (capped at 30 s), abort when 25 % of the last 40 pages failed (5xx, 429 or network), 25 minute budget (the rest is reported as «not reached»), exit 1 on any 5xx or if `/es`, `/en` or a search index is not a 200.
- **Trigger.** `deployment_status` (Production, success), `repository_dispatch` `vercel.deployment.success` (environment production), `status` (context `Vercel`, success, a branch named `main`) and `workflow_dispatch`. The repo has no GitHub Deployments (API returns `[]`), only the `Vercel` commit status, so the first one may never fire; whichever does, `concurrency` at job level keeps one run. None of the four could be exercised here (no push).
- **Pedro tries it:** push; Actions tab, `warm-cache`, «Run workflow» on `main` (finishes in ~4 minutes; the step summary has the table); then after the next deploy check that a run appeared by itself, and which event started it.

## Block 2: lighter pages

`src/content/search-index-asset.ts` (memoised JSON + sha256 prefix per locale), `src/app/api/search-index/[locale]/[hash]/route.ts` (static, `immutable`, `dynamicParams = false`), `src/features/shell/search-index-client.ts` (fetch once, keep in memory), `search-provider.tsx` (carries `indexUrl`), `search-trigger.tsx` (loads on pointer enter and focus), `search-dialog.tsx` (loads on open; no «none» or «empty» until loaded; Enter waits). Sizes, before and after, in the mailbox report and below.

## Block 3: neighbour prefetch

The reader already did it: see Findings. Changes: `ChapterStep` links `prefetch={false}`; `ReaderStream` loads the two neighbours' JSON when idle (`src/lib/when-idle.ts`, moved out of `passages-view.tsx`) and not under `saveData`, `effectiveType` slow-2g/2g/3g or `prefers-reduced-data` (`src/lib/data-saver.ts`); the two-ahead loop of `extend` obeys the same guard. «Already cached» was already true: `loadChapter` keeps one promise per chapter.

## To confirm with Pedro (agent's calls)

- Verse and word pages: add `generateStaticParams() { return [] }` so they are cached after the first visit (tested in the clone, see report).
- Workflow triggers: four events instead of the brief's one, because the repo has no GitHub Deployments.
- Stale tab after a deploy: its search gets a 404 until the next navigation.
- The sidebar markup (410 KB raw, 16 KB gzip) is the next big raw-size item, not touched.

## Known limits

- The warm-up requests from one GitHub region; Vercel's CDN cache is per region, so a visitor elsewhere can still get a MISS (served from the ISR store without a render). Not measurable from here.
- A failed or 404 index request leaves the search box silent (no error state) until it is reopened; a stale tab after a deploy behaves the same.
- The workflow was not run (needs a push); the `status` context name `Vercel` is what the commit status API returned today.

## Verification

`npm run verify` (flags on), the Vercel-like build with no git-ignored data, `search.spec.ts` (47), reader, sidebar and passages specs on port 3520, a Sonnet verifier at the end.
