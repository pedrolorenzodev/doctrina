# Research night of 2026-11-01: two Claude sessions gather the data

**Intent (Pedro, 2026-11-01):** by the morning, have all (or most of the relevant) data needed to build the remaining pages and UI without blockers. Two fresh Claude sessions (Sonnet 5.5, high effort) only **research and gather data**; nobody builds UI. Pedro is away the whole night and answers nothing. Item ids come from `docs/research/open-research-2026-11-01.md` (read it first); Pedro's answers that unblock several items are in `docs/DECISIONS.md` 2026-11-01 «Pedro's answers that unblock the research night».

## Rules for both sessions

1. **Read first:** `AGENTS.md` (trust and neutrality, Git), this file, `docs/research/open-research-2026-11-01.md`, `docs/DECISIONS.md` entries of 2026-11-01, `docs/playbooks/research-fanout.md`, `docs/playbooks/verification-pass.md`, `docs/playbooks/content-dossier.md` (format and rules for doctrinal content), `docs/playbooks/agent-ops.md` («Tools agents have», «Codex», «Lessons»). Read the existing files you extend before writing.
2. **Trust:** no claim without a citation; no citation without a dated edition (title page or scan URL, locator); never from memory; each record tagged `[verified: <how>]` or `[unverified]`; a tradition speaks only in its own documents' words; Fathers are never assigned to a modern tradition; neutral wording, the site never concludes. Every output file starts with `Status: draft, NOT verified by Pedro`.
3. **Where you write:** only your own files listed below, all under `docs/research/`. Never `src/`, `data/`, `ROADMAP.md`, `DECISIONS.md`, `GOTCHAS.md`, playbooks, AGENTS or the other session's files. Write as you go (a Progress block at the top of each file, updated after every item), so a stop at any moment loses nothing.
4. **Git:** never commit, add, stash or push (the hook blocks it). Pedro commits in the morning.
5. **Pedro is away:** never ask him anything and never wait for an answer. On an ambiguity, take the most conservative option, write it in your log as «agent's call» with the reason, and go on.
6. **Usage (Claude weekly cap 39 % for both sessions together, the account's reading):** run `python3 -I ~/.claude/skills/usage-guard/scripts/usage_check.py` before every item and at least every 15 minutes. Weekly ≥ 37 %: start no new item. Weekly ≥ 38.5 %: save everything, write the final summary in your log and stop. If the 5-hour session reading reaches 92 %, save, then wait for its reset with a background `sleep` (Bash `run_in_background`) and continue.
7. **Subagents:** at most one at a time (Pedro's rule), Sonnet, each with the brief of `agent-ops.md` «The brief». Use one for the verification of each finished output file (`verification-pass.md`): it checks every quote and locator against the source and writes its verdicts into a `## Verification` section of that file; you apply its corrections.
8. **Tools:** web search and fetch, `yt-dlp` for captions, Playwright for pages that need a browser (`agent-ops.md` «Tools agents have»). Never declare a source missing before trying them.
9. **Log:** your log is `docs/research/night-2026-11-01/session-<n>.md`: what started and ended with times, usage at each check, agent's calls, what is left. It ends with a short summary for Pedro (in Spanish, brief) and for the next agent (in English): which files are ready to import and which need a decision.

## Session 1 · page 02 content + Codex delegation

Order (stop where the cap stops you):

1. **Codex delegation first (it runs while you work):** write `~/.doctrina-youtube/prompt-codex-night-2026-11-01.md` and launch it (below). Codex does **A2** (excerpts for the citations with only a locator, all four families) then **D1** (English quotes with a dated English edition, easiest families first: Westminster, Trent Waterworth 1848, Triglot English, Robertson 1899, then the rest).
2. **B4** Baptism fingerprint dates → append to `docs/research/doctrines/fingerprint-dates.md` in its existing format (only the Baptism section).
3. **B1 + B3** for Baptism, Papacy and Sola Scriptura → `docs/research/doctrines/<doctrine>/shared.md` (one per doctrine): «Lo que todas comparten» (common ground), 1–3 neutral «Lo que se discute» questions (each worded so no tradition's terms frame it; check against all five dossiers) and an optional «Lo que depende de esto», and the practice comparison (aspects aligned × Catholic, Orthodox, Lutheran, Reformed, Baptist, each cell cited). Model: what the Eucharist's 02 uses (`src/content/pages/eucharist/doctrine.es.ts`, its sources in `data/site/eucharist.v2.json`), so the import can follow the same shape.
4. **B2** neutral early witnesses (to c. 749) for the three doctrines, appended to each `shared.md`: quote, author, work and locator, date with «c.», dated edition, Spanish by the three-level policy (DECISIONS 2026-10-09), surrounding paragraph; then the full list of early texts on the doctrine (page 10). Raw material: the PQ sections of the Catholic dossiers and `docs/research/neutral/writers-*.md`.
5. **Review Codex's output** when it ends (below).
6. **G2:** does any CC BY (not BY-SA) Spanish gloss source for Greek or Hebrew exist? → `docs/research/sources/spanish-glosses.md`. If none, say so with what was searched.
7. If the cap allows: **E9** «Sus escritos» descriptions, starting with the 12 Eucharist witnesses' Fathers → `docs/research/neutral/fathers-works-descriptions.md`.

### Codex: how (session 1 only)

- **Cap: 50 % of ONE Codex 5-hour window, and only the one that starts tonight** (Pedro). No resume, no second window.
- Read `docs/playbooks/agent-ops.md` «Codex» and «Lessons» first. The prompt is self-contained (Codex knows nothing): files to read first, the exact tasks (A2 then D1, with the item text from the inventory), one output file per task (`docs/research/sources/citation-excerpts-2.md`, `docs/research/sources/english-quotes.md`), the tags, no git writes, write as you go with a Progress block, the trust rules above. Inside the prompt: check usage before every step that fetches or writes (`f=$(ls -t ~/.codex/sessions/*/*/*/*.jsonl | head -1); grep -o '"primary":{[^}]*}' "$f" | tail -1`): at 38 % start no new step, at 42 % save and end; also end if the weekly (`secondary`) reaches 95 %.
- Launch: `~/.doctrina-youtube/codex-oneshot.sh night1101 ~/.doctrina-youtube/prompt-codex-night-2026-11-01.md 48` with Bash `run_in_background` (the watchdog kills Codex at 48 %; Codex overshoots 5–15 points between checks). Before launching, note the newest Codex session file and its reading (on 2026-11-01 01:37 the newest was from Oct 30 at 41 %, stale); after launch, confirm that a new session file appears and that its `primary` starts low. Log `~/codex-night1101-run.log`.
- Time guard: if Codex is still running 4 h 30 min after launch, stop it (`pkill -f "codex exec -c"`): the window must not roll into the next one.
- **Review:** when it ends, read both output files, check a sample of at least 15 records yourself and pass each file through one verifier subagent (rule 7). Write a critical take in your log: what is usable, what is wrong, what is missing.

## Session 2 · Pasajes, apologists, objections, videos, glossary

Order (stop where the cap stops you):

1. **Apologists and creators criterion (C1/H1, short):** per tradition (Catholic, Orthodox, Lutheran, Reformed, Baptist), the most popular apologists or teachers recognized as most faithful to their tradition's documents and as treating doctrine in depth: name, affiliation, channel or site, audience size with date, evidence of fidelity and depth (who recognizes them, what they publish), and doubts (e.g. Gavin Ortlund: Reformed or Baptist?). Catholic: those already in the data (Heschmeyer, Horn, Akin, «How to be Christian», Otálora: evaluate each) plus Karlo Broussard. → `docs/research/apologists.md`.
2. **C4 + C2: Pasajes readings** for the seven missing pages: Catholic Eucharist, Papacy and Sola Scriptura (from each dossier's Scripture section; fill the gaps) and the four Baptist pairs (look for an official per-passage reading of that line; if none exists, record exactly what was searched and mark the passage «no official reading found» for the agreed copy). Each passage: reference, the tradition's own reading with citation, the dossier lines it comes from. → `docs/research/passages/<doctrine>-<tradition>.md`. With the 1689 Confession now in scope for every doctrine (DECISIONS 2026-11-01).
3. **A1: official-layer objections** for the 16 non-Catholic pages, in this order: Eucharist (Lutheran, Reformed, Orthodox, Baptist), Baptism, Sola Scriptura, Papacy. Format and rules: the Catholic pages' objections (`src/content/pages/<doctrine>/catholic.es.ts`, `objections`) and their dossiers' §Objeciones; each objection from the other traditions' official texts, its strongest honest synthesis (2–3 lines), the answer in the tradition's own documents, a status line next to harsh wording, a theme for grouping. → `docs/research/doctrines/<doctrine>/<tradition>.objections.md`. Verify each file (rule 7) before starting the next doctrine.
4. **C1: apologists' quotes per passage** for the Catholic Pasajes (~61 passages): exact quote with minute or page and URL, from the apologists that pass step 1, at least 3 independent per passage where they exist. → `docs/research/passages/apologists-catholic.md`.
5. **H2 then H1: videos**, with the step-1 criterion: map the 15 Eucharist·Catholic videos to its objections and find more per objection (Eucharist and Baptism), then videos for the 19 empty pages (title, channel, URL, language, duration, date, what it defends, checked by its captions that it says what the title says). → `docs/research/videos/<doctrine>-<tradition>.md`.
6. **C3:** a sourced, licence-checked source of parallel passages → `docs/research/passages/parallels.md`.
7. **I1 + I2:** the glossary's 9 missing terms and the 27 entries with no edition → `docs/research/glossary-gaps.md`.
8. **A3, A5, A9** (Lutheran Eucharist leftovers, Westminster 1894 imprint sweep, missing status lines) → `docs/research/dossier-residues-2026-11-01.md`.

## Not tonight

Waiting on Pedro: A4 (Orthodox canonical sources), E4, F3, F4, G5, G6, J1, J3, J4, K1–K2. Paused: the debate layer (A8), the Fathers' corpus (E6–E8). Not research: applying F1/F2/E1/J2 to the code (an implementation session does it). Design first: B6 (doctrine history page).

## Morning

The first agent of the day reads both logs, gives Pedro a short table (what is ready to import, what needs his decision), updates `ROADMAP.md` and closes this file.
