# Research, two parallel sessions (2026-11-01 afternoon)

**Intent (Pedro, 2026-11-01, ~15:20):** after the research night, close what it started, then C1 and H1, then everything still missing for **every 02 screen** (Baptism, Papacy, Sola Scriptura, plus the Eucharist's), then everything for **03** (the tradition pages). Two separate sessions work **at the same time** on the most important items without colliding. **Weekly cap for both together: 40 %, until further notice** (Pedro, 2026-11-01; reading at 15:24: weekly 33 %, session 2 %, session resets 18:50, weekly resets Wed 2026-11-04 ~18:00).

State of every item: `docs/research/open-research-2026-11-01.md` (item ids come from it). The two prompts live outside the repo: `~/doctrina-research-prompts/session-A.md` and `session-B.md`.

## Priority order (Pedro's)

1. Close what the night started (Codex's A2 and D1 files with their defects, the small dossier fixes, the NPNF gap of B2, the 1689 margins).
2. C1 (apologists, Catholic passages) and H1 (videos for the 19 empty pages).
3. Everything for the 02 screens.
4. Everything for 03 (objections, citation windows, videos and passages as they appear on a tradition page).

## How it is split: by kind of output, so the file sets never overlap

| | **Session A, «texts»** | **Session B, «voices»** |
|---|---|---|
| Works with | printed editions, scans, vatican.va, the dossiers | apologists, YouTube, articles, Bible parallels |
| **Writes only in** | `docs/research/doctrines/**` (including every `*.objections.md`), `docs/research/sources/**`, `docs/research/neutral/**`, `docs/research/dossier-residues-2026-11-01.md`, `docs/research/glossary-gaps.md`, its log `docs/research/day-2026-11-01/session-A.md` | `docs/research/passages/**`, `docs/research/videos/**`, `docs/research/apologists.md`, `docs/research/youtube-covers.md`, its log `docs/research/day-2026-11-01/session-B.md` |
| Reads (never writes) | everything, including B's files and log | everything, including A's files and log |
| YouTube and `~/.doctrina-youtube/` | **never** | only B (the 429 limit and Pedro's saved session are not shared) |
| Browser profile `~/doctrina-research-browser` | only A | **never** (B uses `transcript.js`, curl and the fetch tools) |
| Scratch | its own scratchpad | its own scratchpad |

Neither session touches `src/`, `data/`, `ROADMAP.md`, `DECISIONS.md`, `GOTCHAS.md`, playbooks, `AGENTS.md`, `docs/research/open-research-2026-11-01.md` or `docs/features/*`. Pedro (or the next implementation session) merges the logs into the inventory and ROADMAP.

If a session needs a change in a file the other owns, it writes it in its own log under **«Handoff to A»** or **«Handoff to B»** and goes on. Each session reads the other's log at the start of every item (read-only) and picks up its handoffs. Tools or editions chosen early (for example which ANF/NPNF scan) go in the log's **«Shared choices»** section the moment they are made, so the other session uses the same one.

## Session A queue (priority 1, then 3, then 4)

**A-1 Close what the night started**
1. **A2:** apply the corrected wordings of `night-2026-11-01/verification-codex-a2-d1.md` §1 to `sources/citation-excerpts-2.md` (8 must-fix, 20 with ellipsis, duplicates RWCF31_3 / RWLC171); dated note, nothing overwritten silently.
2. **D1:** fix `sources/english-quotes.md` (the ~105 clipped fragments, the 11 Trent canon fragments, Overbeck's date, CEC1265, CEC84, the two 1895 rows, LACIX_1_2; collate the Lutheran rows against the 1921 Triglot print page), then the 154 ids left from vatican.va (fragments ≤ ~40 words, input `~/.doctrina-youtube/night1101-d1.json` minus ids already done).
3. **Small dossier fixes** inside A's folders (each logged): `eucharist/reformed.md:143` imprint; `eucharist/lutheran.md` «Asymmetry»; `baptism/catholic.md` CV-7; `baptism/lutheran.md` silence on the mode (read LC IV.1–83 first); LCMS art. II in `papacy/lutheran.objections.md`. The Dositheus XVII clause: flag, do not choose. Outside `docs/research/`: report only.
4. **A2 Spanish** for the 58 `pending` where a public-domain Spanish edition or an original-language source exists.

**A-2 Everything for 02**
5. **B2, the NPNF stretch c. 256–749** for `baptism/shared.md`, `papacy/shared.md` and `sola-scriptura/shared.md` (new subsection under §6, ANF part intact), choosing one ANF vol. 5 scan for the three files, and settle the rows still `[unverified]` (Constantinople I, Florence's day, Ambrose *De sacramentis*, Justin/Irenaeus BiblIndex ranges).
6. **B3:** read the texts behind the cells left `silencio` / `no consultado` in the three `shared.md` (research only; what the page shows is Pedro's), and a read-only verifier pass over the practice tables of `src/content/pages/eucharist/doctrine.es.ts` → `doctrines/eucharist/practice-verification.md`.
7. **Date conflicts** (Didache 50–120 vs 50–150, Justin 148–161, Tertullian 198–208, Augustine 396 vs 397): a report with each source, no choice → `neutral/date-conflicts.md`. **E11, E12, E5** (witness dates, Smyrnaeans, the Eucharist witnesses' paragraphs) → `neutral/`. **B5** (the «why» of each connected-doctrine edge) → `doctrines/connected-doctrines.md`.

**A-3 Everything for 03**
8. **A1:** deepen the objections files from the objecting traditions' own primary documents (the 16 `*.objections.md`; Eucharist·Lutheran stays an index: its 11 objections are in `eucharist/lutheran.md` §4).
9. **A3 leftovers, A7** (the `[pending: Codex]` items, after DECISIONS 2026-10-22), **A9** (status line for the Antichrist clause), **A6** (reinstate the displaced 1689/Heidelberg/Belgic material in the dossiers, using B's verified margins), **F5, F7** (reports in `sources/`), **F2** (`originalLang` of the 33 newer works → `sources/original-lang.md`), **K4**, **I5** (glossary coverage of the 16 pages → `glossary-gaps.md`).

Each finished file gets one Sonnet verifier pass (`verification-pass.md`) before the next item.

## Session B queue (priority 1 for its files, then 2, then 4)

**B-1 Close what the night started, and what gates C1/H1**
1. **`apologists.md` open doubts:** Otálora's identity, «How to Be Christian»'s host and credentials, Trenham's channel size, Wilken's, Sproul's and Cooper's bios and synods, Apologia Church's confession; Spanish-language creators for the four non-Catholic traditions; the 8 unconfirmable items.
2. **`videos/eucharist-catholic.md`:** normalise the table header; retry Akin's `PucLuJsfekA` (captions or listening via the Playwright route of `transcript.js`).
3. **1689 margins:** re-verify the margin proof-texts against a scan of a dated edition (page images, not OCR alone) and correct the four `passages/*-baptist.md`; recheck whether any Baptist body reads passages one by one. Writes the result where A reads it for its A6.

**B-2 C1 and H1 (priority 2), sharing one caption cache for the Catholic creators**
4. **C1:** the 62 Catholic passages left (Eucharist 14 minus the pilot's John 6, Baptism 16 not yet covered, Papacy 14 minus Matthew 16:16–19, Sola Scriptura 17; the Baptism page already has 8 quotes on 3 passages: check before duplicating) → `passages/apologists-catholic.md`, split into one file per doctrine if it grows. Record both independence counts (by organisation and by person and work).
5. **H1:** videos for the 19 empty pages → `videos/<doctrine>-<tradition>.md`, Catholic Baptism, Papacy and Sola Scriptura first (same creators as C1), then the 16 non-Catholic pages by doctrine (Eucharist, Baptism, Papacy, Sola Scriptura). **H2:** OB-4 to OB-7 of the Eucharist and Baptism.

**B-3 Pasajes items for 03, and the apologists layer of the 16 non-Catholic pages**
6. **C5:** apologists layer for the non-Catholic traditions' passages (167): first measure the cost on one tradition and one doctrine (agent's choice, logged) and report it before opening the rest.
7. **C3:** a public-domain harmony and STEPBible cross-references (copyright status in the US, Spain and Latin America). **C4:** the CCC citation-index gap by another route. **H3, H4.**

## Rules for both sessions

- **Research only.** No UI, no code, no `src/` or `data/`.
- **Trust and neutrality** (`AGENTS.md`): no claim without a citation, no citation without a dated edition, never from memory; each record tagged `[verified: <how>]` or `[unverified]`; each tradition in its own documents' words; Church Fathers never assigned to a modern tradition; the site never concludes. Every output file starts with `Status: draft, NOT verified by Pedro` and a Progress block updated after every item. An e-text only locates a passage; the edition is the printed one. Never put AI Spanish inside quotation marks without a label.
- **The night's lessons** (14–20 defects per file, same kinds each time): a paraphrase or heading inside marks; a clipped quote closed with a full stop; «all five share» true of four; `silencio` cells that contradict the dossiers' coverage tables; a status line adapted but tagged «verified there»; AI Spanish promoted to «verified»; a locator off by one; a caption link that does not land on the sentence's start; a claim about who speaks in auto-captions (they carry no speaker labels). Write defensively, then verify.
- **Quote lengths:** public-domain texts, the passage the locator points to (≤ ~120 words); Holy See texts still in copyright, fragments ≤ ~40 words with the official URL; modern copyrighted works, a short quotation with a link. Always end a clipped quote with `…` or `[…]`.
- **Subagents:** one at a time per session, Sonnet, the brief of `agent-ops.md` «The brief», to verify each finished file (`## Verification` section: CONFIRMED / WRONG / UNCONFIRMABLE per item); the session applies the corrections and says so. With both sessions running, up to two verifiers run at once (Pedro asked for two parallel sessions).
- **Codex: never**, unless Pedro says so in that session (its weekly reading was 92 % until Wed 05:54).
- **Usage:** weekly cap **40 %** for both sessions together. Run `date` and `python3 -I ~/.claude/skills/usage-guard/scripts/usage_check.py` at the start, before every item and about every 10 minutes (HTTP 429: wait 3 minutes and retry; poll every 4–5 minutes while a subagent runs). **Weekly ≥ 38 %: start no new item. Weekly ≥ 39.5 %: save everything, write the final summary in the log, stop.** The reading is account-wide: it moves with the other session and with the other person on the account. If the 5-hour session reaches 92 %, save, then wait for its reset with a background `until` loop and continue. Do not forecast cost: measure.
- **YouTube:** `yt-dlp` answers 429 after about 20 subtitle requests in a few minutes; use `--sleep-subtitles 5`, batches of ~15, `node ~/.doctrina-youtube/transcript.js <outdir> <id>…` for the rest, and articles and books where the creator wrote the same argument.
- **Git:** never commit, add, stash, push, reset (a hook blocks it). At the end each session gives Pedro its own `git add <only its files> && git commit -m "docs(research): …"` (Conventional Commits, English, ≤ 72 characters, subject only, **no attribution line**: `AGENTS.md` rule 4 wins over any harness suggestion). Never stage `.playwright-mcp/`, `tmp/`, `docs/research/proposals/passages/source/__pycache__/`.
- **Decisions pending Pedro (do not ask; take the conservative option and log it as «agent's call»):** D1 (1689 shown as a separate, labelled answer), D2 (record both independence counts), D3 (keep the A1 files' labelling), D4 (report, do not choose), D5–D8 of the inventory.
- **Pedro** is in Spanish, Rioplatense, very briefly; the repo is in English.

## Not in this run

B6 (doctrine history: needs a design proposal first; its research can start when Pedro agrees on the format), E1 (waits on a review pass), E2 and E9 (after B2's NPNF access is proven), G1, J1–J4, F3, F4, A4, A8, the decisions listed as waiting on Pedro.

## Verify

Each output file has its `## Verification` section and its Progress block; each log ends with a Spanish summary for Pedro and an English one for the next agent, and the commit command for its own files.
