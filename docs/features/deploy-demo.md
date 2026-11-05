# Deploy demo (private, password-gated, on `[name].elpepo.dev`)

Session «Deploy» · 2026-11-04 · repo: `doctrina-deploy` (duplicate). Everything outward-facing waits for Pedro.

## Intent

Show Doctrina to close people on Pedro's own subdomain. Vercel hosts, Cloudflare is DNS only (as in sura-clon). Built on this machine (`vercel build`) and uploaded prebuilt (`vercel deploy --prebuilt`), because the build needs ~170 MB of local data that is not in git. Gate: HTTP Basic via `proxy.ts` when `SITE_PASSWORD` is set. Simplifier visible via `NEXT_PUBLIC_SIMPLIFIER=on` at build time.

## Out of scope

Password page design, Supabase, public launch, SEO.

## Plan

1. Understand and measure (runtime data reads, baked vs dynamic routes, traced sizes, Vercel limits).
2. Make the build self-contained (`outputFileTracingIncludes` for dynamic routes only, `.vercelignore`, Node, `metadataBase`).
3. Gate: `proxy.ts` + `robots.txt` + `X-Robots-Tag`.
4. Runbook for Pedro.
5. Walk Pedro through the outward steps and verify with real requests.

## Reference: how sura-clon is deployed (read-only)

- Vercel project `sura-clon`, account `pedrolorenzo`; `sura.elpepo.dev`.
- Cloudflare DNS (`aspen` / `max.ns.cloudflare.com`): `sura` is a CNAME to `c323c109bce0fd04.vercel-dns-017.com`, **DNS only** (no proxy), plus three CAA records (Sectigo, Google, Let's Encrypt); no wildcard. Domain registration stays at Vercel.
- `metadataBase` lives in the root layout. Env vars must be loaded on Vercel before the first deploy.

## Findings (step 1)

### Runtime data reads (`process.cwd()`)

| Reader | Reads | Used by |
|---|---|---|
| `src/content/bible/local-source.ts` | `data/sources/bibles.json`, `data/corpus/bibles/<id>{,.structure,.red}.json` | Bible chapter, verse page, `/api/bible`, passages, words |
| `src/content/get-words.ts` | `data/site/words/**` (1,502 files, 73 MB) | word page, chapter word view, `/api/words` |
| `src/content/get-father-works.ts` | `data/corpus/fathers/**` (46 MB) | Father and work pages |
| `get-glossary`, `get-history-pages`, `get-history-indexes`, `get-home-timeline` | `data/site/glossary.json`, `history.json` (read once at module load) | glossary, history, home |

Doctrine, tradition, objection and passage content is TypeScript under `src/content` (bundled, no runtime read). `data/corpus/export` (24 MB), `fathers-es` (1.8 MB), `data/raw`, `data/passages` are not read by `src`.

### Baked vs dynamic (build 2026-11-04, `NEXT_PUBLIC_SIMPLIFIER=on`, 3 min)

- 9,116 prerendered pages (SSG): Bible chapters (2 locales × 1,326), `/api/bible` and `/api/words` JSON (force-static), doctrines, traditions, objections, passages (+ `passages/data` JSON), glossary, history (fathers, works, councils, currents, divisions, reformation, timeline).
- **Dynamic (`ƒ`), only two:** `/[lang]/bible/[book]/[chapter]/[verse]` and `/[lang]/words/[word]`.
- Both dynamic routes trace the whole corpus: 1,837 files, **~154 MB** each (the 5 big Bible JSONs of 4-5 MB, plus the words and Fathers).
- Rewrites: 147 (limit «routes per deployment» 2,048).

### Size of the build output (what `vercel build` would upload)

| Part | Files | Size |
|---|---|---|
| `.next` total | 36,195 | **4.9 GB** |
| `.next/server/app` (prerendered) | 35,770 | 4.8 GB (`.html` 2.5 GB, `.segment.rsc` 1.5 GB, `.rsc` 0.77 GB, `.body` 0.24 GB) |
| of which `es/bible` | 9,282 | 1.9 GB (`en` similar) |
| `es/history` (works 411 MB) | 2,107 | 596 MB |
| `es/doctrines` | 1,937 | 142 MB |
| `es/glossary` | 700 | 115 MB |
| Static assets `.next/static` | | 3.1 MB |
| Same `server/app` as `.tgz` | 1 | **911 MB** |

Root cause of the weight: every page embeds the whole site search index twice (about 100 KB each, two inline scripts) in its HTML, its `.rsc` and its segment files. A glossary page is 575 KB of HTML; Genesis 1 is 754 KB. Not fixed here (shared UI code, out of scope): flagged as a risk and as the cheapest big win (see Decisions).

### Vercel limits (source: https://vercel.com/docs/limits, last updated 2026-09-16; https://vercel.com/docs/cli/deploy)

- **Static file uploads via CLI: 100 MB Hobby, 1 GB Pro.** Over the limit the deployment fails. The page does not say whether it counts compressed (`--archive=tgz`) or unpacked bytes.
- Source files per CLI deployment: 15,000 (for output files «no upper limit», but expect slow builds above 100,000). `--archive=tgz` is the documented way around the files limit.
- Deployments per day: 100 Hobby, 6,000 Pro. Routes per deployment: 2,048. Function duration 300 s, memory 2 GB (Hobby).
- Function bundle size (source: https://vercel.com/docs/functions/limitations, updated 2026-08-24): **250 MB uncompressed** per function (AWS limit; set `outputFileTracingIncludes`, not `includeFiles`); «large functions» up to 5 GB (beta, new projects eligible by default). Our two dynamic routes trace ~154 MB: they fit the standard limit, with ~95 MB to spare for Next's own runtime (to be verified in `vercel build`).
- Which plan Pedro has: **unknown** (the team is «pedrolorenzo-dev's projects», the naming of a personal/Hobby team). To confirm with Pedro.

## Lean build (step 2, prototype tested locally)

`LEAN_BUILD=1` makes every `generateStaticParams` except the `[lang]` one return `[]`, so pages render on first visit and stay cached. Implemented in the duplicate: `src/lib/lean-build.ts` + one line in 17 route files. The layout's `export const dynamicParams = false` had to go (it made every non-prerendered path 404; `currentLocale()` already calls `notFound()` for a bad `lang`). The two `/api/*` routes lost theirs too.

Measured (build 13 s instead of 3 min):

| | Full prerender | Lean |
|---|---|---|
| `.next` | 4.9 GB, 36,195 files | 149 MB, 804 files |
| `vercel build` output (`.vercel/output`) | not built | 22 MB, 379 files + 157 symlinks, 160 function dirs |
| Distinct files a deploy would upload | ~36,000 | 2,067 files, **162 MB raw** (data 149 MB: words 73, Fathers 49, Bibles 25) |
| Same, compressed (`tgz`) | 911 MB | ~39 MB data + ~5 MB rest |

Local checks with `next start -p 3701` on the lean build: Spanish and English home, Bible chapter (first hit 0.59 s, second 8 ms), verse, word, glossary, Father work and Father pages, doctrine, tradition, passages, objection: all 200. Unknown book, unknown chapter, `/fr`, `/en/nothing`: 404.

Open: the Hobby limit (100 MB) is documented as «size of the source files that can be uploaded» and does not say raw or compressed. 162 MB raw would not fit; ~44 MB compressed would. Only a real preview deploy answers it. Fallbacks, if it fails: minify the JSON (Bibles and Fathers are pretty-printed), or serve the words data (73 MB) from Vercel Blob or Supabase Storage.

## Gate (step 3, done and tested locally)

`src/proxy.ts` (Next 16 `proxy`, Node runtime). With `SITE_PASSWORD` unset it returns `NextResponse.next()`: nothing changes. With it set: every path except `_next/static` and `_next/image` asks for HTTP Basic (any user name, the password must match; compared in constant time; malformed header = 401, not 500), every response carries `X-Robots-Tag: noindex, nofollow`, and `/robots.txt` is answered by the proxy with `Disallow: /` (no `public/robots.txt`, so a future public launch is not blocked by a file).

Tested on the lean build with `next start -p 3701`: no password: 200, `/robots.txt` 404 (as before). With `SITE_PASSWORD=demo123`: no credentials 401 + `WWW-Authenticate`; wrong password 401; right password 200 on pages, `/api/bible/...` and a real 404; broken base64 401; `/robots.txt` 200 `Disallow: /` without credentials. `npx playwright test doctrine-header a11y --project=chromium` (70 tests) passes against the lean build with no password. `npm run typecheck`, `npm run lint` and `format:check` pass.

Use an ASCII password (the check compares characters as bytes).

## Runbook (for Pedro; run from `doctrina-deploy`, or from the real repo once the changes are merged)

Name: `doctrina.elpepo.dev`. The CLI is pinned (`vercel@65.11.0`, the version `npx` fetched on 2026-11-04) and run through `npx`: nothing is installed globally.

1. **Login** (once): `! npx vercel@65.11.0 login`
2. **Link / create the project** (done 2026-11-05): `rm -rf .vercel && npx vercel@65.11.0 project add doctrina && npx vercel@65.11.0 link --yes --project doctrina`, then set the framework to Next.js and Node to 24.x on the project (Dashboard → Settings → Build and Deployment, or the API): a new project defaults to «Other» and `vercel build` fails otherwise. Then `npx vercel@65.11.0 pull --yes --environment=preview` (or `production`).
3. **Environment** (runtime only; the build-time switch travels in the script):
   `! npx vercel@65.11.0 env add SITE_PASSWORD production` (type the password; ASCII). Do not add `NEXT_PUBLIC_SIMPLIFIER` on Vercel: with `--prebuilt` it is baked by the local build.
4. **Preview first**: `LEAN_BUILD=1 NEXT_PUBLIC_SIMPLIFIER=on npx vercel@65.11.0 build` then `npx vercel@65.11.0 deploy --prebuilt`. Preview URLs on Hobby sit behind Vercel's own login, so open it logged in to Vercel. Note the first deployment of a new project is always production.
5. **Production**: `npm run deploy:demo` (= `LEAN_BUILD=1 NEXT_PUBLIC_SIMPLIFIER=on vercel build --prod && vercel deploy --prebuilt --prod`).
6. **Domain**: `! npx vercel@65.11.0 domains add doctrina.elpepo.dev doctrina` (or Dashboard → project → Settings → Domains). Vercel shows the exact CNAME target.
7. **Cloudflare DNS** (zone `elpepo.dev`; look at the `sura` row and copy it): Type `CNAME`, Name `doctrina`, Target the value Vercel shows (for `sura` it is `c323c109bce0fd04.vercel-dns-017.com`; the project-specific value for `doctrina` will differ), Proxy status **DNS only** (grey cloud), TTL Auto. CAA: `sura` has 4 CAA records of its own (`pki.goog`, `globalsign.com`, `sectigo.com`, `letsencrypt.org`, `issue`), and the apex `elpepo.dev` already allows `letsencrypt.org`, `pki.goog`, `sectigo.com` (checked with `dig` on 2026-11-04), so a new CAA is probably not needed; if the certificate does not issue, add the same 4 on the name `doctrina`.
8. **Redeploy routine** after changing code or data: `npm run deploy:demo`. To change the password: `npx vercel@65.11.0 env rm SITE_PASSWORD production`, `env add` again, redeploy.
9. **Warm the cache** (agent does it after step 5): request the main pages once so guests get cached ones: `curl -u x:PASSWORD` over home, doctrines, traditions, Genesis 1, John 6, a Father, a word.

## Licences to flag (not decided here; sources: `docs/PROJECT.md` «Licensing rules», `docs/research/data.md`)

- **STEPBible (word data, 73 MB in the bundle):** CC BY 4.0, credit and link back; the file headers ask not to redistribute the raw files. The deploy ships the processed words JSON and serves `/api/words/...`, so it is reachable by guests behind the password. Private, gated demo: intended use. Blocks a public launch until the attribution page exists and Pedro decides about redistributing derived data.
- **OpenGNT Spanish glosses:** CC BY-SA 4.0 (share-alike): derived gloss data must be CC BY-SA. Blocks a public launch unless the layer is kept separate or released under that licence.
- **Bible editions in the bundle:** RV1909, KJV, BSB, DRA, WEB Catholic: all public domain (WEB: altered text may not be called «World English Bible»; KJV: public domain outside the UK). No copyrighted Spanish Bible is in the data.
- **Fathers:** public-domain translations by repo rule; `docs/research/data.md`: the SermonIndex dataset's CC BY covers the verse alignment, not the translations inside it.
- **AI-translated quotes (Pasajes) and the AI simplifier (`NEXT_PUBLIC_SIMPLIFIER=on`):** private audience only (DECISIONS 2026-11-03: «shown to people close to Pedro for now»); both labelled on the site.
- **Attribution page** (STEP Bible, OpenGNT, SermonIndex, the WEB trademark): required by `PROJECT.md`; not checked here whether it exists.

## Risks

- **Hobby 100 MB upload limit:** answered by the test deploy: 162 MB raw / 2,067 files went through. The limit may still count differently on other paths (not tested with `--archive=tgz`).
- **First visit to a page is slower** (measured 0.59 s for Genesis 1 locally; 8 ms after). Mitigation: warm the cache after each deploy. Hobby functions have a cold start on top. The ISR cache is per deployment: every redeploy empties it.
- **Pages weigh 0.5-1.2 MB of HTML** (search index embedded twice per page): fine on broadband, heavy on mobile data. Cheapest big win later: serve the index as one cached file.
- **Basic auth is a gate, not security**: a shared password, no rate limit. Fine for close people; do not put anything private behind it.
- **`.env.local` is read by `next build`**: the public Supabase URL and publishable key get inlined (public by design); `SUPABASE_SECRET_KEY` is not read by any code in `src`. To be safe, build with those lines removed.
- **Hobby terms**: personal, non-commercial use only. Fine for a private demo.
- **Dynamic routes after the change**: `dynamicParams` is now the default (`true`) everywhere; unknown ids are 404 through the pages' own `notFound()`. Checked for Bible chapter/book, `/fr`, `/en/nothing`; not every route was probed with a bad id.

## Test deployment (2026-11-05, authorised by Pedro: «un deploy de prueba sin dominio»)

- Pedro logged in (`npx vercel@65.11.0 login`; the first attempt failed when his internet dropped). Agent created the empty project `doctrina` (`prj_O0LUTfNO8GJVWowb3RJE6BADdSiV`, team `pedrolorenzos-projects`), linked it (`link` also wrote `VERCEL_OIDC_TOKEN` into the duplicate's `.env.local`, git-ignored), and set framework `nextjs` and Node `24.x` on the project via the Vercel API (a new project defaults to «Other» and `vercel build` fails with `STATIC_BUILD_NO_OUT_DIR`: add this to the runbook step 2).
- `vercel pull`, then `LEAN_BUILD=1 NEXT_PUBLIC_SIMPLIFIER=on vercel build`, then `vercel deploy --prebuilt --yes` (no `--archive`): **uploaded without hitting the Hobby 100 MB limit** (the 162 MB raw / 2,067 distinct files went through). So the limit does not count raw bytes of the distinct files, at least for a prebuilt deploy: answered.
- It was the project's first deployment, so Vercel made it **production**: `https://doctrina-mu.vercel.app` (deployment `doctrina-gkyq0hinb-pedrolorenzos-projects.vercel.app`, id `dpl_38DJaLM8KXgnR4k8M5ZQkXGD2y4k`). Deployment Protection is on (`vercel_authentication`, all except custom domains), so it is not public. `SITE_PASSWORD` is NOT set yet: no gate beyond Vercel's login.
- Verified with `vercel curl` (logged-in, bypasses protection): `/es`, `/en`, `/es/biblia/genesis/1`, `/es/biblia/juan/6/53` (verse), `/es/palabras/G0746` (word), `/es/doctrinas/eucaristia/catolica/pasajes`, a Father (`ignatius-of-antioch`), a work (`tertullian-de-anima`), glossary term, `/api/bible/es/Gen/1`, `/api/words/es/Gen/1`: all 200. `/es/biblia/genesis/999`, `/es/nada`, `/fr`: 404. The simplified text of the Catholic Eucharist definition and the `simplifier-*` markers are in the HTML of `/es/doctrinas/eucaristia/catolica`: the build-time switch worked with `--prebuilt`.
- Timings (include ~0.4 s of CLI overhead): first visit of a never-seen chapter 5.3 s (Genesis 1) and 3.8 s (a verse); the second visit of a chapter is a CDN `HIT` at ~0.2 s; dynamic routes (verse, word) are never cached and take ~0.9-1.2 s warm, ~4 s cold; home 0.45 s.

## Domain and auto-deploy (2026-11-05)

- Pedro's decision: **no password** (only a couple of close people will have the link). `SITE_PASSWORD` stays unset, so `proxy.ts` does nothing; no `noindex`/`robots.txt` either. (Agent had argued for the gate: licences, draft content, indexing.) Note found afterwards: `github.com/pedrolorenzodev/doctrina` is **public**, so the code and the draft content are already public; only `data/` (gitignored) is not.
- Domain `doctrina.elpepo.dev` added to the project by the agent (Vercel API, `verified: true`). Vercel's recommended DNS: **CNAME `doctrina` → `ba57ef6c940ae8c5.vercel-dns-017.com`**, DNS only (alternative: `cname.vercel-dns.com`). Pedro creates it in Cloudflare. Custom domains are outside Deployment Protection, so once it resolves the site is public to anyone with the URL.
- Pedro wants **every push to the repo to auto-deploy**. Blocker: Vercel building from GitHub has no `data/corpus` and `data/site/words` (gitignored for licences; the repo is public, so they cannot be committed). CI (`verify.yml`) builds without them. Proposal pending Pedro's OK: connect the GitHub repo to the Vercel project (production branch `main`), host the data as private files in a Supabase Storage bucket, and fetch it at build time with a small `tools/fetch-data.mjs` that skips when `data/` already exists; env on Vercel: `LEAN_BUILD=1`, `NEXT_PUBLIC_SIMPLIFIER=on`, the Supabase URL and secret key; Build Command override `node tools/fetch-data.mjs && npm run build`.

- Plan for the organiser written to `~/doctrina-autodeploy-plan.md` (patch of the repo changes: `~/doctrina-deploy.patch`, 22 files). Pedro creates the Cloudflare CNAME: done, `https://doctrina.elpepo.dev/es` answers 200.

## Decisions

- 2026-11-04 · Agent's call: no `metadataBase` (the site sets no Open Graph, canonical or other relative-URL metadata, and the build warns about nothing). Add it when sharing previews matters.
- 2026-11-04 · Agent's call: `noindex` and `robots.txt` only when `SITE_PASSWORD` is set, served by the proxy, so the real repo can launch publicly later without removing files.
- 2026-11-04 · Agent's call: CLI pinned to `vercel@65.11.0` through `npx` (no global install); `.vercel/**` added to the ESLint ignores (the build output broke `npm run lint`).
- 2026-11-04 · Pedro has the free (Hobby) plan. Agent's call, pending Pedro's OK for the real repo: lean build via `LEAN_BUILD`, not the search-index fix (that only saves 25-35 % per page; measured: of a 575 KB glossary page, ~107 KB is the index).

## Shared files touched

- `src/lib/lean-build.ts` (new), `.vercel/` (local only, fake project link for `vercel build`; must not be committed).
- `generateStaticParams` guard (`if (leanBuild) return [];` + import) in: `src/app/api/bible/.../route.ts`, `src/app/api/words/.../route.ts`, `src/app/[lang]/bible/[book]/[chapter]/page.tsx`, `doctrines/[doctrine]/page.tsx`, `doctrines/[doctrine]/early-christians/page.tsx`, `doctrines/[doctrine]/[tradition]/page.tsx`, `.../objections/page.tsx`, `.../objections/[objection]/page.tsx`, `.../passages/page.tsx`, `.../passages/data/[n]/[part]/route.ts`, `history/{fathers,works,councils,currents,divisions,reformation}/[x]/page.tsx`, `glossary/[term]/page.tsx`.
- `src/app/[lang]/layout.tsx` (removed `dynamicParams = false`).
- `src/proxy.ts` (new, the gate), `package.json` (`deploy:demo`), `eslint.config.mjs` (`.vercel/**` ignored).
- Commit messages: `feat(deploy): add a lean build that renders pages on demand` · `feat(deploy): gate the demo with a password` (`src/proxy.ts`) · `chore(deploy): add the deploy:demo script and ignore .vercel` (`package.json`, `eslint.config.mjs`, `docs/features/deploy-demo.md`)

## Usage log

- 2026-11-04 12:04 · session 15 % (reset Wed 13:40) · weekly 82 % (reset Wed 18:00) · start
- 12:12 · 18 % / 82 % · after measuring the full build
- 12:35 · 25 % / 83 % · after the lean build and `vercel build`
- 12:40 · 27 % / 84 % · after gate, lint, e2e subset, runbook
- 2026-11-05 09:10 · 6 % (reset Thu 12:39) / 1 % (reset Wed 17:59) · after the test deployment and verification (the weekly counter reset overnight)

## State

Done: steps 1-4, test deployment (`https://doctrina-mu.vercel.app`), domain added to the project. Waiting for Pedro: (1) create the Cloudflare CNAME above, (2) OK on the auto-deploy plan (data in Supabase Storage + Vercel Git connection), which also needs the real repo changes merged. Until then deploys are manual: `npm run deploy:demo` from `doctrina-deploy`. Resume: read «Domain and auto-deploy».
