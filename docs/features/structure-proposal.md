# Structure proposal (overnight, 2026-10-20)

Plan approved by Pedro in chat, 2026-10-20 00:40 («me re sirve ese alcance»). Playbooks: `docs/playbooks/design-proposal.md`, `docs/playbooks/agent-ops.md`.

## Intent

One polished proposal Artifact of Doctrina's structure in the new visual direction (dark wall / light lámina, Newsreader + Source Serif 4 + Work Sans, texture), so Pedro can judge the whole structure in the morning: screens 02 (Eucaristía), 03 (Catholic position on the Eucharist), 04 (one objection to it) and 09 (Ignatius of Antioch), all inside P1's tree sidebar, dark and light, desktop and mobile, with real content.

## Acceptance criteria

- One Artifact with three selectors: screen (02/03/04/09), mode (dark/light), width (desktop / 390 px phone in a frame).
- Every decided component working: fingerprint v2 (with pointer cursor), living ruler with "Ola" and its build requirements, right-edge tick ruler (smooth active change, smooth click scroll), citation window + simulated full-text reader, tree sidebar.
- Everything in ROADMAP "Now" item 1 for 02, 03, 04, 09; items marked "test" shown as in-screen switches.
- Real content only (data/site, the Catholic dossier, history.json, writers-to-325.md); no "borrador", "en preparación" or placeholders.
- Neutrality and the AI-slop list respected; hovers alive but few, 100–200 ms; `prefers-reduced-motion` honoured.
- No console errors and no horizontal overflow at 360, 390, 768, 1440 in both modes.

## Out of scope

Screens 01, 05–08, 10; any code in `src/`; new dossier content; web research (Codex's job tonight); the six-decisions page and the review Artifacts.

## How it is verified

Playwright screenshots of each screen at 360/390/768/1440 in dark and light, console errors and `scrollWidth > innerWidth` checked; one independent Fable critique of the screenshots against the ROADMAP notes, the AI-slop list, neutrality and "live hovers, not repeated"; must-fix items applied and re-shot. Pedro's visual approval in the morning.

## Plan

1. Coordinator builds the shared base in the scratchpad (`base.css`, `base.js`: tokens, texture, type, sidebar, header, right-edge ruler, fingerprint, living ruler, citation window, reader, links, buttons, proposal switches).
2. Four Opus builders, at most three at once, one screen file each (`s02.html`, `s03.html`, `s04.html`, `s09.html`); only the coordinator touches the base. mtime check every 15 min.
3. Coordinator assembles the shell (`index.html`) with the three selectors.
4. Screenshots and checks; one Fable critic; must-fix applied; publish.
5. Close: link in ROADMAP (Now, item 2), this Progress, `/retro` candidates, summary for Pedro, commit message.

Usage limits for the night (Pedro): weekly ≤ ~59 % (no new agents at 55, checkpoint 57, stop 58); session to 04:49 up to 100 % (no new agents 90, checkpoint 95); session 04:49–09:49 ≤ 50 % (no new agents 40, checkpoint 45, stop 50).

## Progress

- 02:18 · **Done.** Published: https://claude.ai/artifact/EDPtLnLWu2fHscbBgmu7rM (version 1). Link added to ROADMAP (Now, item 2) and to the design index (row «Para revisar», version 2). Final check: 4 screens × 360/390/768/1440 × dark/light, no console errors, no page overflow (only inside sideways-scrolling boxes: 03's tradition tabs, 09's timeline); shell selectors and in-frame navigation tested with Playwright. Usage at the end: session 43 %, weekly 46 % (started at 7 % / 40 %). Sources stay in the session scratchpad and in the Artifact's files (`base.css`, `base.js`, `s02.html`…`s09.html`, `index.html`).
- Applied from the critique: switches compacted and the three site-wide ones moved to the shell; one in-text citation form (named, in parentheses, body serif) in 02, 03, 04; one locator grammar; objection syntheses rewritten to length, without attribution, shared by 03 and 04; 02 «La práctica» cut to three fully cited rows (no sub-families or surveys); 02 connected card sized to content; 09 letter blurbs and unsourced dating rows removed, one shared axis, timeline starts empty; one citation-window kicker and axis; 44 px hit areas; video list unified; 04 passages as quoted verses.
- Not done: the six other letters of Ignatius and the other eleven witnesses open only the cited passage (no neighbouring text in the repo); several Hebrews verses have no RV1909 text in the repo; authority definitions for non-Catholic traditions not researched; the Pentecostal tradition absent.
- `/retro` candidates (not run; needs Pedro): (1) a coordinator-owned base plus one file per builder worked: four screens in ~15 min each, no conflicts; (2) builders and fixers asked for base changes through their Progress block, cheap and clear; (3) Fable critic cost ~9 session points and ~2 weekly per 5 min, highest of the night: give it a 15-minute cap in the brief; (4) the critic caught real trust problems the builders had marked as "decided by agent" ([memory] text shown as final, uncited practice cells), so the brief should forbid [memory]-tagged text outright; (5) sizing row: 4 Opus builders (3 at once) + 1 Fable + 2 Opus fixers ≈ 36 session points and 6 weekly points over ~70 min.
- 01:08 · Start. Usage: session 7 %, weekly 40 %.
- 02:05 · All four screens built (02 at 01:31, 04 at 01:30, 03 at 01:35, 09 at 01:47). Fable critic done (22 findings: 6 must-fix, 10 should-fix; `critique.md` in the scratchpad). Base fixes applied by the coordinator (compact switches, site-wide switches moved to the shell, one citation-window kicker and axis, no clamped syntheses, 44 px hit areas, clean view toggle). Two Opus fix agents launched: s03+s04, s02+s09. Usage 02:03: session 38 %, weekly 45 %.
- 01:40 · Base ready and smoke-tested (`base.css`, `base.js`, `template.html`, `BRIEF-builders.md` in the session scratchpad); builders 02, 03, 04 launched (Opus); shell `index.html` written. Usage 01:17: session 9 %, weekly 40 %.
- 01:30 · Inputs read (playbooks, ROADMAP notes, DECISIONS, todo-junto source, UX round 2 P1/P2 screens saved locally). Feature doc written.

## Decided by the agent, to confirm

Superseded by v2, approved 2026-10-21 (DECISIONS «Structure proposal v2 approved»): the fingerprint dates are in `fingerprint-dates.md`, the Ignatius birth and letter descriptions in `neutral/births-and-ignatius.md` and `neutral/ignatius-letters-descriptions.md`. Still open: the Pentecostal tradition has no content, so it stays absent.

- Only five traditions appear (Catholic, Orthodox, Lutheran, Reformed, Baptist): the Pentecostal tradition joined on 2026-10-14 but has no Eucharist content yet, and showing it empty would be a placeholder.
- Fingerprints of the connected-doctrine cards use the dates from «todo junto» (written from memory); `docs/research/doctrines/fingerprint-dates.md` was "not started" at 01:08.
- Links to pages outside the proposal show a small proposal note instead of navigating (no dead affordances, no fake pages).

- 09 shows "Nacimiento: desconocido" without the "suele estimarse c. 35" estimate: the repo has no source for it.
- 09's letter descriptions removed until verified (they are tagged [memory] in `writers-to-325.md`).
- 02 «La práctica» keeps only rows where all five traditions have a cited official text; the Baptist cells use the Second London Confession because the BF&M 2000 is silent there.
- Fingerprints follow Codex's `fingerprint-dates.md` (Status: done by 02:20): «La justificación» with its twelve dates; Eucharist with the corrections listed there (Didache tick at c. 100 inside c. 50–120, Augustine 397, Paschasius 831 and Ratramnus c. 844 split, Calvin 1536 and Consensus Tigurinus 1549 split, Westminster 1647). Artifact version 2.

## Questions for Codex

All answered (2026-10-20/21): `neutral/births-and-ignatius.md`, `neutral/ignatius-letters-descriptions.md`, `doctrines/eucharist/rv1909-verses.md`.

- A sourced estimate of Ignatius' birth (the "c. 35" in DECISIONS 2026-10-06), with edition.
- Titles and years of the works behind each dating of Ignatius (Decrept, Pervo, Barnes, Vinzent), now cited by name only.
- Verification of the seven letters' contents and places of writing (`writers-to-325.md`, tagged [memory]).
- RV1909 text for Hebreos 7:24, 9:14, 9:27, 10:10, and the other proof texts listed in s04's notes.
