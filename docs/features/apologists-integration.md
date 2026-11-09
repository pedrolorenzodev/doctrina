# Apologists layer: integrate the 2026-11-08/09 research into the Pasajes pages

Status: planned, not started. Follows `docs/features/passages-data.md` (B3, 2026-11-03).

## Intent

The research of the 2026-11-08/09 nights (Catholic, Baptist, Reformed, Lutheran, Orthodox; audio, video and 9Marks/Credo articles) lives in `docs/research/passages/apologists-*.md` and in the logs `apologists-c5-log*.md`. The site does not show it: it reads `data/passages/apologists/*.json`, built on 2026-11-03.

## Plan (/plan-run, 2026-11-09)

- Type: new, `docs/playbooks/apologists-import.md` (written today from B3; not validated).
- Goal and done-criterion: every record of the 20 research files that can be matched to a passage of its page appears in Pasajes, with its Spanish (AI, labelled) or its original; counts reported; verify and e2e green; Pedro's visual approval.
- Bounded by: DECISIONS 2026-11-09 (rosters accepted; 1 person is enough for Lutheran, Reformed, Orthodox); 2026-11-08 (method v2, standing «to verify before publishing»); 2026-11-03 late night (translate every English quote with AI, labelled; lazy loading required; long blocks parked); 2026-11-01 late night (no length limit while private; `[long-form: trim before public release]`); 2026-11-01 (independence of apologists).
- Measured gap (coordinator, 2026-11-09, dry run in a scratch folder, nothing written to the repo): the parser reads only part of the new research. Words of blockquote lines vs words parsed: Baptist Baptism 13,004 vs 6,673; Baptist Papacy 10,970 vs 4,025; Baptist Sola Scriptura 7,885 vs 2,250; Baptist Eucharist 4,499 vs 2,505; Reformed Baptism 8,552 vs 6,110; Reformed Papacy 4,106 vs 1,849; Reformed Sola Scriptura 3,649 vs 1,543; Reformed Eucharist 1,466 vs 905. Catholic is close (e.g. Baptism 17,213 vs 15,364). The sections «C5 additions» and «Method v2 additions» are probably not read. Not yet diagnosed.
- Out of scope: the original-language UI (Spanish originals on ES, AI translations with «Leer el original», the mirror on EN: ROADMAP «To build», a separate block); English UI strings (B3.5); changing variant G; trimming long blocks; verifying each apologist's standing.
- Setup (one session at a time, as Pedro allowed):
  | Role | Model · effort | Writes | Starts after |
  |---|---|---|---|
  | Builder, in a clone `doctrina-apologists-web` | Sonnet 5.5 · high | `data/scripts/apologists-md.mjs` (+ fixtures), `data/passages/**`, the `src/content/pages/**` files that `apply-passages.mjs` rewrites, `src/content/registry/verses.ts`, the feature doc | Pedro's ok and the cap |
  | Translator, called by the builder | Haiku, one agent at a time | `data/passages/translations/*.json` through the merge script | the parser extension is done and counted |
  | Verifier | Sonnet · medium | read-only: counts, exact text of a sample, page weight | the builder's report |
  The coordinator merges the clone into the real repo, runs `npm run verify` and gives the commit commands.
- Waiting for `doctrina-d3` is not required: translations are keyed by the quote's hash, so what `d3` adds later only needs its own delta (a second, small run).
- Expected cost: no estimate (Pedro: estimates overshoot). Measured reference: B3 on 2026-11-03 (parser, 6 translation agents, apply, verify) took the weekly counter 75 → 77 %. The new volume is larger (the Baptist files grew about threefold). The builder checks the counter at each step; Pedro sets the cap.
- Risks and open questions for Pedro:
  1. **Cap** for this run (Claude weekly 60 % now, 62 % was tonight's; the week resets Wednesday 18:00).
  2. **Translation refusals:** the Haiku agent refused full copyrighted transcripts in B3 and no workaround is allowed; the quotes it refuses stay in English, labelled. Codex could translate them only if Pedro says so explicitly.
  3. **Page weight:** the Baptist pages already weighed ~830 KB; the new data roughly doubles their quotes. The lazy route exists; the verifier measures.
  4. **Matching:** research rows come from the page's passage list, but new sections may cite verses that are not passages of that page (unmatched are listed, not forced).
  5. **Audio locators** («minutes X to Y», timestamped URLs) are a new shape; the builder shows one example in the report before translating.
- Checks during the run: usage guard before each heavy step; modification time every 15 minutes; one agent at a time; dry-run report to the coordinator before translations start.

## Acceptance

See the playbook's «Done when». Plus: no Spanish text is invented; every AI Spanish quote carries its original beside it and the label; `npm run verify` and the passages e2e pass.

## Retro

(filled by /retro)
