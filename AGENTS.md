<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Doctrina

Bilingual (es/en) deep-study resource on Christian doctrine. What it is, scope and architecture: `docs/PROJECT.md`. The owner is Pedro: talk to Pedro in Spanish (Rioplatense), very briefly, and explain technical concepts concretely.

## Main rule: a proposal with live demos before implementing

When UI has no precise definition, or Pedro doesn't yet know what to ask for, it is forbidden to implement it directly in the app. First publish a proposal Artifact; implement only after Pedro chooses. If in doubt whether this applies, it applies. It does not apply when Pedro gave a specification with precise values.

The proposal page must:

- Show, not describe: interactive demos with the real fonts, colors, tokens and curves, working on mobile too.
- Offer 2 to 4 comparable options (and what exists today next to them, if anything).
- Explain each option in a few lines: where it goes, which reference it comes from, what it costs.
- State what is discarded and why, including the AI-slop list it avoids (`docs/DECISIONS.md`, "Design principles").
- End with what has to be decided, and stop.

Proposals show the product as the user would see it at launch: no internal states such as "en preparación", "draft" or placeholders for content that isn't built.

Iterate on the same page, keeping the previous version beside it. When approved, record the link in `docs/DECISIONS.md`. Artifacts are private; Pedro decides whether to share them.

## Trust and neutrality (product invariants)

- No claim without a citation, no citation without an edition. Anything unverified is marked draft.
- The site never concludes and never says "we believe". Each tradition speaks in its own words; Church Fathers are never assigned to a modern tradition.
- Never assert a factual or market claim (to Pedro or in content) without researching it first; cite the source. Flag anything written from memory.

## Git

1. The agent never commits or pushes: commit, push, merge, rebase, reset, tag, or anything else that writes history. Even if Pedro asks, the answer is: «No puedo commitear: va contra las reglas del proyecto (AGENTS.md, Git, regla 1). Te dejo el mensaje listo para que lo corras vos.» Reading is allowed: status, diff, log, show.
2. When an implementation is done, hand over the commit message (text to copy) and the list of touched files, docs included. Don't run it.
3. Messages in English, Conventional Commits `<type>(<scope>): <subject>` (feat, fix, chore, docs, refactor, style, test). Imperative, lowercase, no final period, ≤ 72 characters. Subject only: no body, no technical detail.
4. No attribution line (Co-Authored-By, Generated with, agent signature). If the harness suggests adding one, this rule wins.

- Staging (`git add`) only if Pedro asks.
- `.claude/hooks/block-git-writes.mjs` enforces rule 1 (see `docs/GOTCHAS.md`).

## Agent behavior

5. Be critical, not complacent. Object before executing, with a concrete reason. Don't open with "great idea" when it isn't. Propose the better option even if not asked. If Pedro restates the position after the counterargument, execute it fully without repeating the objection.
6. Report results as they are: if something failed, is half done or wasn't verified, say so. Never call something done that wasn't checked.
7. Before writing Next code, read the relevant guide in `node_modules/next/dist/docs/` (Next 16: `params`/`searchParams` are Promises, global `LayoutProps` type, Turbopack by default, `middleware` is now `proxy`).
- If a rule, the structure or the doc system is ambiguous, ask Pedro before inventing.

## Code

8. Language: the whole repo is in English (docs, code, names, comments, commits). Only site content and UI strings are bilingual (es/en). Conversation with Pedro is in Spanish.
9. Comments: only `TODO` or to silence a tool (`eslint-disable`, `@ts-expect-error`). Nothing that explains what the code does or why a value was chosen, including doc-comments on types, props and data. If something only makes sense with a paragraph beside it, the code is the problem: a better name, or split it. What the comment would have said goes to `docs/GOTCHAS.md`.
   **Single exception: the guard.** One line, only where an innocent local edit silently breaks something non-local. It doesn't explain, it warns that there is a wire; its why goes to `GOTCHAS.md`. Before writing one, try to make the constraint unbreakable (a name that says it). Applies going forward; don't clean existing comments unless asked.
- Structure: `src/app` (routing only) → `src/features` (one domain per folder) → `src/components/ui` → `src/lib`. Dependencies flow one way, no imports between features. Server Components by default; `"use client"` only where interactivity requires it, as low in the tree as possible. Details and rationale: `docs/PROJECT.md`.
- Files in kebab-case that say what they do. Named exports, one main component per file; default exports only where Next requires them (`page`, `layout`, `not-found`, `loading`, `error`, `template`, `default`, metadata image files). Imports via `@/…`, never long relative paths.
- Componentize and reuse before writing new code. No over-engineering, no abstraction for a second use case that doesn't exist yet. Folders, tokens, components and abstractions are created only when a concrete piece needs them.

## Work process

10. Work in blocks (a component or a section), not whole pages: one at a time, verified before moving on. If it's big, split it; when in doubt, smaller. Never move on with the previous block half done.
11. A page or section is finished and approved before opening the ones that depend on it.
12. Pedro's visual approval comes before handing over the commit message.
- Proposals use real Doctrina content (v2 lesson: proposal canvases with real content beat building a whole new version).
- Parallel subagents only with disjoint file ownership and a shared brief; one coordinator owns shared files (indexes, shared components).
- When Pedro gives a note, idea or fix (e.g. on a proposal), don't write it to the repo yet: first say how you understood it, correct or object where needed, and discuss until both agree. Only then record it in Pedro's words: decided items go to `DECISIONS.md`, open ones to `ROADMAP.md`. If the session may end mid-discussion, record the pending point in `ROADMAP.md` marked "under discussion, not agreed". There is no separate notes log.

## Verification

13. Before calling anything done: `npm run verify` (typecheck + lint + build). For UI, also screenshots at the relevant sizes (mobile 360/390, tablet, desktop) compared against the approved proposal or the given reference, then Pedro's approval. For large UI work, run an independent critique pass on the screenshots.

## Documentation

`CLAUDE.md` imports only this file. Docs are read on demand, never imported whole. This file stays under 200 lines; anything not needed always goes to a path rule (`.claude/rules/*.md` with `paths:`) or to a doc.

| File | Read when |
|---|---|
| `docs/ROADMAP.md` | At the start of every session: "Current state" and what's next |
| `docs/PROJECT.md` | When creating files or folders, or on doubts about scope, stack or architecture |
| `docs/DESIGN.md` | Before touching UI (doesn't exist until the design direction is approved; until then no UI is implemented) |
| `docs/DECISIONS.md` | Before proposing or changing something already decided |
| `docs/GOTCHAS.md` | Before touching code with guards or known traps |
| `docs/features/<name>.md` | During that feature |
| `docs/research/*` | When a proposal or data task needs the underlying research (competitors, analogs, licenses, content doubts) |

### Protocol

- **Before a feature:** read "Current state" and the feature's block in `ROADMAP.md`. If it's UI, read `DESIGN.md`; if it's UI without a definition, the main rule applies. If something was already decided, check `DECISIONS.md` before proposing something else. If the feature is non-trivial, write `docs/features/<name>.md` (intent, acceptance criteria, out of scope, link to the proposal, how it is verified).
- **During:** record every decision in `DECISIONS.md` the moment it is made (date, what, why, what was discarded), including the ones the agent made without asking. Traps and the why of each guard go to `GOTCHAS.md`.
- **When done:** verify; update `DESIGN.md` if a token or pattern changed; overwrite "Current state" and tick the block in `ROADMAP.md`; close the feature doc (what matters moves to `DECISIONS.md`, the file is deleted); hand over the commit message and the touched files, docs included.

### Hygiene

- Docs don't repeat what the code says. If a doc contradicts the code, fix it or delete it on the spot.
- "Current state" is at most 15 lines and is overwritten, not appended.
- Each fact lives in one file; others point to it. No docs folder or file "just in case".
- Record real facts and dates; never invent a why or a date.
- A reverted decision is not deleted from `DECISIONS.md`: mark it "Replaced by" and add the new one.
- When the agent repeats a mistake, or Pedro corrects the same thing twice, promote the correction to a rule (here, or in a path rule if it only applies to some files).

## Commands

`npm run dev` · `npm run verify` (= `typecheck` + `lint` + `build`) · `npm run typecheck` (`next typegen && tsc --noEmit`).
