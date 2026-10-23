# Gotchas

Traps that bite, and the why of every guard in the code. Format: **what** bites · **why** · **where**. Only verified traps; delete an entry when the trap leaves the code.

## Next.js and tooling

- **`tsc --noEmit` alone fails with `Cannot find name 'LayoutProps'`** on a clean clone or after deleting `.next`. · Next generates the global route types (`LayoutProps`, `PageProps`) into `.next/types`. · `package.json` → `typecheck` runs `next typegen` first; always use `npm run typecheck`.
- **A root `app/` folder makes Next silently ignore `src/app`.** · Next only looks in `src/` when there is no root `app/` (tested 2026-10-05: routes under `src/app` vanished from the build). · Repo root: never create `app/` (or `pages/`) there.
- **`proxy.ts` (formerly `middleware.ts`) must live inside `src/`.** · Next docs, `03-file-conventions/src-folder.md`. · `src/proxy.ts` when it exists.
- **Moving code paths breaks aliases and tool globs.** · `@/*` resolves to `./src/*`; any `include`, ESLint or tool path pointing at root `app/`, `components/` or `lib/` is stale. · `tsconfig.json`, `eslint.config.mjs`. Tailwind 4 needs no `content` config; if an old config with `content` ever appears, prefix `src/`.
- **`next build` warns "Next.js ignored package-lock.json in /Users/pedrolorenzo/Desktop/dev".** · A stray lockfile exists one level above the repo. Harmless: Next picks this repo. Don't set `turbopack.root` to silence it. · `~/Desktop/dev/package-lock.json` (outside the repo).
- **ESLint also lints `data/scripts/*.mjs`** (and `handoff/` while it exists): today only `no-unused-vars` warnings. · The flat config lints every JS file not ignored. · `eslint.config.mjs`.

- **Node 23 instead of 24 in a new shell.** · nvm's global default is still 23 (left as is); the repo pins 24 in `.nvmrc` and `engines`. · Run `nvm use` in the repo before `npm`; `npm install` on 23 warns about `engines`.
- **A lint rule change can silently stop catching what it should.** · Selectors and regexes in `eslint.config.mjs` fail open (no match, no error). · `tools/check-lint-rules.mjs` holds one fixture per forbidden edge and allowed case; add one with every rule change. It runs inside `npm run lint`.
- **Tailwind arbitrary values are caught only in string literals of `.tsx` files.** · The lint checks literals and template parts, not strings assembled in `.ts` helpers. · `eslint.config.mjs`; keep class strings in `.tsx`.

- **The English-names check only knows the words in its list.** · `tools/spanish-words.mjs` is a denylist: a Spanish word not in it passes, and English-looking Spanish words (`general`, `final`, `color`) are deliberately left out. · Add each miss to the list and a fixture to `tools/check-english-names.mjs` or `tools/check-lint-rules.mjs`.

## Git and environment

- **`.env*` in `.gitignore` would also ignore `.env.example`.** · The scaffold's ignore pattern is broad. · `.gitignore` → `!.env.example` re-includes it; keep that line below `.env*`.
- **`tools/review-page/check.mjs` requires `playwright-core`** (`process.env.PLAYWRIGHT_CORE || 'playwright-core'`); since 2026-10-23 the repo installs it through `playwright`. Blocked Google Fonts requests show as 4 "Failed to load resource" errors per run: expected. Template markers in `shell.html` are `__DATA__` and `__APP__`. · `tools/review-page/`.
- **The git hook matches the whole command text, not just the command.** · It is a regex over the Bash string: `echo 'run git push later'` is blocked too, and so is `git restore --staged` (unstaging). It also blocks `add`, `rm`, `mv` and `stash` (2026-10-17): `git rm --cached` once slipped through and staged a deletion, while the undo was blocked. Because it matches text, a heredoc or script passed inline that merely mentions those commands is blocked too: write the script to a file first. Rephrase the command or let Pedro run it. · `.claude/hooks/block-git-writes.mjs`.

## Data scripts

- **`data/scripts/build_bibles.py` is the exception below: adapted, run it with `python3 -I` from outside the repo.** · Downloads go to `data/raw/src/bibles/`, verses (keyed by OSIS, each edition in its own numbering: DRA is Vulgate, RV1909 and KJV put psalm titles inside verse 1, KJV keeps its ¶ marks) to `data/corpus/bibles/` (both gitignored), the manifest with URL, date and sha256 to `data/sources/bibles.json` (tracked). eBible answers 403 without a User-Agent; its VPL files use old book codes (`JOH`, `EZE`, `SOL`…). · `data/scripts/build_bibles.py`.
- **The other `data/scripts/` are not adapted to this repo: don't run them.** · `build_site_john6.py` and `build-eucharist.mjs` write to v2's `src/content/data/`, `port-v1.mjs` writes `src/content/sources.ts` and `traditions.ts` (v2 layout), and `build-eucharist.mjs` reads `objection-headlines.json` from there (it now lives in `data/site/`). The Python builders need the original downloads in `data/raw/src/` (gitignored; copy from `~/Desktop/dev/doctrina-v2/data/raw/src/` or re-download). `build-eucharist.mjs` and `port-v1.mjs` use paths relative to the working directory, so they run from the repo root. · `data/scripts/`.
