# Gotchas

Traps that bite, and the why of every guard in the code. Format: **what** bites · **why** · **where**. Only verified traps; delete an entry when the trap leaves the code.

## Next.js and tooling

- **`tsc --noEmit` alone fails with `Cannot find name 'LayoutProps'`** on a clean clone or after deleting `.next`. · Next generates the global route types (`LayoutProps`, `PageProps`) into `.next/types`. · `package.json` → `typecheck` runs `next typegen` first; always use `npm run typecheck`.
- **A root `app/` folder makes Next silently ignore `src/app`.** · Next only looks in `src/` when there is no root `app/` (tested 2026-10-05: routes under `src/app` vanished from the build). · Repo root: never create `app/` (or `pages/`) there.
- **`proxy.ts` (formerly `middleware.ts`) must live inside `src/`.** · Next docs, `03-file-conventions/src-folder.md`. · `src/proxy.ts` when it exists.
- **Moving code paths breaks aliases and tool globs.** · `@/*` resolves to `./src/*`; any `include`, ESLint or tool path pointing at root `app/`, `components/` or `lib/` is stale. · `tsconfig.json`, `eslint.config.mjs`. Tailwind 4 needs no `content` config; if an old config with `content` ever appears, prefix `src/`.
- **`next build` warns "Next.js ignored package-lock.json in /Users/pedrolorenzo/Desktop/dev".** · A stray lockfile exists one level above the repo. Harmless: Next picks this repo. Don't set `turbopack.root` to silence it. · `~/Desktop/dev/package-lock.json` (outside the repo).
- **ESLint also lints `data/scripts/*.mjs`** (and `handoff/` while it exists): today only `no-unused-vars` warnings. · The flat config lints every JS file not ignored. · `eslint.config.mjs`.

## Git and environment

- **`.env*` in `.gitignore` would also ignore `.env.example`.** · The scaffold's ignore pattern is broad. · `.gitignore` → `!.env.example` re-includes it; keep that line below `.env*`.
- **The git hook matches the whole command text, not just the command.** · It is a regex over the Bash string: `echo 'run git push later'` is blocked too, and so is `git restore --staged` (unstaging). Rephrase the command or let Pedro run it. · `.claude/hooks/block-git-writes.mjs`.

## Data scripts

- **`data/scripts/` are not adapted to this repo: don't run them.** · `build_site_john6.py` and `build-eucharist.mjs` write to v2's `src/content/data/`, `port-v1.mjs` writes `src/content/sources.ts` and `traditions.ts` (v2 layout), and `build-eucharist.mjs` reads `objection-headlines.json` from there (it now lives in `data/site/`). The Python builders need the original downloads in `data/raw/src/` (gitignored; copy from `~/Desktop/dev/doctrina-v2/data/raw/src/` or re-download). `build-eucharist.mjs` and `port-v1.mjs` use paths relative to the working directory, so they run from the repo root. · `data/scripts/`.
