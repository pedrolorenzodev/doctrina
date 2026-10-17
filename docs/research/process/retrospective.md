# Retrospective: how Doctrina tasks were approached (≤ 2026-09-30 to 2026-10-17)

## Progress

- Started 2026-10-17.
- Done 2026-10-17: all sections (0 sources, 1 timeline, 2 by task type, 3 patterns, 4 lessons).
- Not covered: v1/v2 runs in detail (no transcripts on disk); subagent transcripts read only via their reports and task notifications.

## 0. Sources and conventions

- Transcripts in `~/.claude/projects/-Users-pedrolorenzo-Desktop-dev-doctrina/` (cited by first 8 chars of the session id + UTC timestamp; local time is UTC−3):
  - `1b29cbc3`: 2026-10-05 → 2026-10-09 (bootstrap, design reviews of screens 02–03, overnight source research). 42 subagent transcripts.
  - `ce2a6617`: 2026-10-09 evening (8 source decisions with Pedro).
  - `8d9ad552`: 2026-10-14 → 2026-10-17 (design reviews 04, 09, 10; tradition source universe run). 24 subagent transcripts.
  - `e0312757`: 2026-10-15 → 2026-10-17 (tradition universe continuation, open-questions page, process-docs planning; this run).
- Transcripts of v1 and v2 work are not on disk (`~/.claude/projects` has only this repo); their story comes from `handoff/CONTEXT.md` and the pre-restart entries of `docs/DECISIONS.md`.
- Memory files: `~/.claude/projects/-Users-pedrolorenzo-Desktop-dev-doctrina/memory/*.md`.
- Cost figures: the transcripts' `cost-state` records are **API-equivalent dollars** (Pedro is on a subscription; they are a relative size, not money spent). Usage % figures are Pedro's 5-hour session / weekly meters, from his messages, screenshots relayed by the agent, or the `usage-guard` monitor.
- `[inferred]` marks conclusions not stated in any source.

## 1. Timeline of task runs

| Date (local) | Task type | Setup | Output | Cost / usage | Outcome |
|---|---|---|---|---|---|
| ≤ 2026-09-30 | v1 "glossed page" MVP | not recorded | `~/Desktop/dev/doctrina-v1-archivo` (Next.js, uncommitted) | — | "too thin" (DECISIONS, "Before 2026-10-02") |
| ≤ 2026-10-02 | Design round 1 (artifact canvas, 4 visual directions) | not recorded | canvas TsniPE1L… | — | "far too thin — the same as asking ChatGPT" → vision correction 2026-10-02 |
| 2026-10-03 | v2 "study desk" full prototype | parallel agents with owned files + shared brief; Playwright screenshots; independent critique agent (`handoff/CONTEXT.md` §10) | `~/Desktop/dev/doctrina-v2` (~486 static pages, no git), `research/critique.md` | — | content "muchísimo mejor", but structure confusing; "Building a whole new version to explore structure was costly" (CONTEXT §10) |
| ≤ 2026-10-05 | UX rounds 1 and 2 (proposal canvases) | canvases with real content, 4 options; round 2 = 4 proposals × 14 screens | canvases 1emZWrzg…, CiD9tLWA… | — | round 1: A, C, D rejected; round 2 became the review backlog |
| 2026-10-05 | Clean restart + bootstrap | Pedro-written `handoff/FIRST-SESSION.md` (490 lines) + `CONTEXT.md` (189 lines); 1 Opus session, no subagents; "re-read it before replying to check you complied" | Next 16 scaffold, `AGENTS.md`, `docs/*`, git hook (tested on 26 cases), commit cd01ba1 | — | done in ~25 min; self-check on re-read found 3 deviations + 2 format errors, fixed (1b29cbc3 23:47) |
| 2026-10-06 → 10-08 | Design review: screens 02, 03, 05–08, 11, search, navigation | 1 session; Pedro sends notes per screen; agent reads canvas files via Artifact read, restates, objects, records | ~15 DECISIONS entries, ROADMAP screen blocks; commits 515f082 … 24c78ab | — | worked; produced the "discuss before recording" rule (10-07) and "no internal states in proposals" rule |
| 2026-10-09 00:48–03:31 | Overnight multi-agent research (source availability) | pre-departure Q&A (scale, downloads, tools, logins); Workflow `doctrina-source-research`: 14 Opus research agents (one per area) piped into Sonnet verifiers; shared scratch BRIEF; round 2–3 added manually (completeness critic, gap agents, 3 Sonnet auditors) | 35 reports + 14 `.verify.md` (744b5fe), `sources.md`, `overlooked.md`, `permission-drafts.md` | workflow: 27 agents, 7.6 M tokens, 3,217 tool calls, 2 h 14 min; whole session 1b29cbc3: $305 API-eq. (Opus $230, Sonnet $70, Haiku $6; 210 web-search requests) | complete after org monthly spend limit cut 5 agents at ~03:00; resumed via SendMessage; 3 verifications skipped to save usage |
| 2026-10-09 evening | Decision round on research | 8 decisions explained "simple y conciso" with a recommendation each; Pedro answered over 3 messages | 7 DECISIONS entries (4d673c1) | $1.8 API-eq. (ce2a6617) | all 8 closed in ~50 min |
| 2026-10-14 | Design review: 04, 09 | same as 10-06; Pedro's own edited artboard copies diffed against originals | DECISIONS + ROADMAP (40f3f51) | — | worked; "mi canvas" convention saved to memory 10-15 |
| 2026-10-14 15:44–17:45 | Multi-agent research: tradition source universe | task chosen after 3 rounds of Pedro pushback; shared `docs/research/traditions/BRIEF.md` (Progress block, tags, disjoint files); 6 parallel agents (4 Fable, 2 Opus, effort high) | 6 maps (catholic 1,220 lines … ) | 6 agents burned ~20 % of session in 8 min (Pedro, 8d9ad552 18:52Z); 4 Fable agents stopped; relaunched as Opus 2–3 at a time; per-agent 238–431 k tokens, 16–33 min | done same evening across 2 session windows |
| 2026-10-14 | Verification passes (Sonnet) | 1 Sonnet agent per 1–2 maps, exact-string matching on fetched pages | 3 `verification-*.md` | 249–421 k tokens each | found ~9 wrong of ~71 checked (Lutheran/Reformed), 5 of 78 (Catholic), 1 of 15 sampled (Baptist/Pentecostal) |
| 2026-10-15 | Handoff to a new session | agent proposed what goes where (feature doc / ROADMAP pointer / memory, not GOTCHAS) and file ownership; Pedro approved | `docs/features/tradition-universe.md` (7ead3ca) | — | new session resumed in < 1 min and finished steps 1–4 in ~1.5 h |
| 2026-10-15 16:27–17:58 | Verify Orthodox + apply corrections + consistency | 1 Sonnet verifier ‖ 3 Opus "apply" agents (disjoint files); then Orthodox apply; then 1 Opus consistency agent; `usage-guard` monitor from 16:48 | `verification-orthodox.md`, corrected maps, `consistency.md` | session 9 % → 28 %, weekly 10 % → 13 % over ~85 min; apply agents 4–19 min; consistency 58 min | done; consistency log only written at the end despite instructions |
| 2026-10-15 18:02 | Open-questions page for Pedro | Artifact page (quickstart "other"), 41 questions, options + one recommendation each, Spanish | artifact; Pedro pasted 41 answers back (all "recomendada", 3 with notes) | — | one round; but 4 recommendations contradicted 2026-10-09 decisions (agent hadn't read DECISIONS) |
| 2026-10-15 22:24 | Recording decisions + closing feature | agent first handed decisions text to Pedro (as the handoff rule said), Pedro: "Eso lo hacés vos" | 5 DECISIONS entries, feature doc deleted (1456133) | — | `git rm --cached` slipped past the hook |
| 2026-10-17 | Planning the weekend usage burn → process docs | agent proposed 6 five-hour windows of autonomous work; Pedro stopped it: process documentation system first | this file + `practices.md` (2 Opus agents, effort high) | session 4 % at start, weekly 30 % | in progress |

## 2. By task type

### 2.1 Restart and bootstrap from a handoff dossier

- **Why v1 and v2 were abandoned.** v1 (thin MVP to measure interest) and design round 1 were judged "far too thin — the same as asking ChatGPT" (DECISIONS 2026-10-02). v2 built a whole prototype to test the deep-study vision; content won, structure confused ("unclear where links lead, how to get back"), and the lesson recorded was "Building a whole new version to explore structure was costly; for undecided UX, proposal canvases with real content were more useful" (`handoff/CONTEXT.md` §10). Neither v1 nor v2 had an agent doc system: v2's `AGENTS.md` is only the 9-line Next.js block; v2 was not a git repo; v1 was "uncommitted work". The restart (DECISIONS 2026-10-05 "Clean restart") carried knowledge as a dossier, not code.
- **Worked:** a long, owner-written brief (`FIRST-SESSION.md`) plus a single source-of-truth dossier (`CONTEXT.md`), with "read everything before writing" and "re-read before replying to check compliance". The re-read caught "tres desvíos míos en reglas [U]" and two malformed DECISIONS entries (1b29cbc3 23:47Z). Traps were verified before being documented ("solo se registran las comprobadas", 23:41Z; `app/` at root hiding `src/app` confirmed by probe, 23:46Z).
- **Worked:** v2's process lessons (owned files + shared brief + coordinator; screenshots + independent critique; licenses per record; flag memory) were carried into `AGENTS.md` and reused in every later multi-agent run.
- **Failed (latent):** the git hook was tested on 26 cases (23:42Z) yet `git rm` and `git add` are not in its blocklist; that gap surfaced on 2026-10-15 (2.8). The hook does block `git restore`, so the agent could not undo its own slip.

### 2.2 Design review of proposal canvases (Pedro's notes)

- **Shape that worked:** Pedro reviews one screen at a time across P1–P4; the agent reads the canvas source (`Artifact read` of `project/P*-NN-*.dc.html`), restates "así lo entiendo", objects with reasons, then records (decided → DECISIONS, open → ROADMAP) and hands a commit message per screen. 14 DECISIONS entries in 3 evenings (515f082 → 24c78ab), 4 more on 2026-10-14, 1 on 10-15.
- **Pedro's own artboard copies** ("P1 · 04 Objecion copy", "P1 · 09 (MODIFICACIONES MIAS)") diffed against the original by the agent gave exact deltas (font size, border colour) instead of verbal description (8d9ad552 17:22Z, 2026-10-15 17:01Z); promoted to memory as "mi canvas [n]".
- **Failed → rule:** the agent wrote notes to the repo immediately; Pedro: "no pases a anotar directamente en el proyecto. Primero confirma que estamos en la misma pagina" (1b29cbc3 2026-10-07 00:43Z) → DECISIONS 2026-10-06 "Discuss Pedro's notes before recording them" + AGENTS.md rule; the agent added the "under discussion, not agreed" fallback.
- **Failed → rule:** proposals showed "En preparación"; Pedro: "En las propuestas de Artifact de ahora en mas no coloques 'En preparacion', ya que eso no lo va a ver el usuario" (10:55Z 10-07) → DECISIONS 2026-10-07 + AGENTS.md (8772cb6).
- **Misreads caught by Pedro:** "Citar esta página" claimed to be in the proposals ("Fue un error mío", 2026-10-07 23:36Z); "texto con punch" misunderstood ("Tal vez no me entendiste", 2026-10-08 17:42Z); a neutrality slip in a sample copy written "desde el marco católico" (10-07 10:58Z, agent's own admission after Pedro's doubt).
- **Multi-message notes:** when Pedro said "guardalo en la memoria de este chat" the agent wrote them to a scratch file so compaction could not lose them (2026-10-07 18:18Z). After a compaction, Pedro asked the agent to re-read the whole conversation; it extracted 1,400 messages and found the summary "había perdido algunos matices", all of which were already in the repo (13:49Z).
- Stale handoff: "Current state" still said 10-05 two days later and was rewritten mid-review (10-07 09:59Z).

### 2.3 Multi-agent research runs

Two runs: overnight sources (2026-10-09) and tradition universe (2026-10-14).

- **Setup that worked:**
  - Pre-departure question round before an unattended run: scale ("~20 agents… ¿Te va bien?"), samples vs corpora, tool installs, logins (1b29cbc3 03:08Z). Pedro answered in one message and left.
  - One shared BRIEF (context, hard legal lines, tools, file ownership, report format) + short per-agent prompts naming area and file. Both runs.
  - Disjoint output files per agent; tags `[verified]/[snippet]/[memory]` per claim; a "verification log" section listing URL + what to check, consumed by a separate verifier.
  - A completeness critic across reports found the run's most important result, which no area agent owned: "The registry relies on sources every report says to avoid. 21 of the 44 entries point to New Advent" (1b29cbc3 05:29Z), confirmed by a Sonnet audit: all 38 New Advent quotes match New Advent exactly, 13 with its modernisations (06:09Z).
  - Choosing *what* to research: the agent's first list of "heavy tasks" was low-value; Pedro: "No, pero PENSA BIEN… no para cosas como 'mockups'… o fechas de nacimiento" (8d9ad552 17:51Z); then "Recorda pensar analiticamente, no me respondas de memoria" (18:16Z) when proposing universe-first. The final plan (universe → content → expert review) came from Pedro's pushback, recorded with its why in the feature doc.
  - Scope questions surfaced before launch (Eastern vs Oriental Orthodox; Pentecostal as sixth tradition, with Pew sources) and Pedro decided them in one message (18:35Z → 18:43Z).
- **Failed:**
  - **Burn rate not measured before scaling.** 6 parallel agents, 4 on Fable: "en 8m los agentes consumieron casi 20% de la sesion actual" (Pedro, 8d9ad552 18:52Z), i.e. ~2.5 %/min. The 4 Fable agents were stopped; relaunched as Opus, 2–3 at a time. A stopped agent keeps its model and effort, so changing model meant a new agent reading the Progress block (19:01Z).
  - **Orphaned subagents.** Pedro saw 3 agents where the agent thought 2 ran; the third was a helper ("Survey Spanish-speaking Baptist bodies") spawned by the stopped Baptist agent: stopping a parent does not stop its children (19:03Z). The agent's fix overreached (it banned subagents in resume prompts); Pedro: "Hey ojo, no les prohibas lanzar sub-agentes" (19:14Z), corrected by SendMessage.
  - **Shared WebSearch quota exhausted** in both runs: "WebSearch was out of quota for the whole run (200/200)" (medieval agent, 1b29cbc3 05:48Z); verifiers on 10-14 report "the shared search quota ran out partway". Agents fell back to catalogue APIs, direct fetches, archive.org.
  - **Org monthly spend limit** hit at ~02:52 local, killing 5 agents mid-task (1b29cbc3 05:52Z). Resume by `SendMessage` with "don't redo X" worked for all 5 after the reset; the workflow itself was stopped and remaining verifiers skipped "para no gastar de más" (06:03Z) — orthodox, spanish-pd and aggregators-legal reports remain unverified (memory `overnight-source-research`).
  - **Content filter** killed the Latin Fathers agent ("Output blocked by content filtering policy"; workflow log); the agent's guess: "reproducing long verbatim passages". Resumed by a new agent from its partial report.
  - **Shared browser contention:** one CDP Chrome for all agents ("Chrome is busy (shared). Retrying.", 05:53Z). Logins on the Playwright Chrome were flagged as bot; switched to Pedro's real Chrome; X never worked (03:34Z); cookies did not survive.
  - **Scratch discipline:** an agent saved a vatican.va page in the repo root (06:32Z).
  - **Unlicensed copy used as a source.** The Catholic agent read Denzinger–Hünermann numbers (and Ott) from an unlicensed archive.org scan, against the brief's line. The main agent flagged it itself when reporting ("va contra la línea que pusimos de no usar copias no autorizadas", 8d9ad552 19:55Z); the verifier was told not to open it; the apply agent removed every link and tagged dependent claims `[unconfirmed: DH]` (`catholic.md` l.16); DECISIONS 10-15 drops Ott's grades "read only in unlicensed scans".
  - **Interruptions:** Pedro's computer off for minutes killed a helper (20:12Z); a 30-min network drop paused the consistency agent, which resumed by itself (e0312757 20:57Z). No loss in either case because files had Progress blocks.

### 2.4 Verification passes

- **Shape:** Sonnet, effort medium/high, one agent per 1–2 maps, reading the map's verification log plus a sample of `[snippet]/[memory]` claims; method stated at the top of each file: "pages fetched with curl, converted to text and searched with exact-string matching (not model summaries)" (`verification-catholic.md` l.4). Writes only its own file; legend CONFIRMED / WRONG / UNCONFIRMABLE.
- **Paid off:** ~9 wrong of ~71 (Lutheran/Reformed, incl. Westminster 31.3/31.4 swapped), 5 of 78 (Catholic), 11 wrong claims + ~35 unconfirmable (Orthodox, e0312757 19:51Z), 1 wrong of 15 sampled (Baptist/Pentecostal). Overnight verifiers corrected rights codes (`pd` vs `pdus`) and volume coverage (1b29cbc3 05:09Z).
- **Model choice held:** Pedro asked whether the Catholic verifier should be Opus "siendo que hay tantas fuentes"; agent: "Muchas fuentes no es lo mismo que una tarea difícil" (8d9ad552 20:24Z); the Sonnet pass found real errors.
- **Limits:** a verifier can be wrong too (the Baptist apply agent kept McGlothlin p. 291 because "el OCR muestra que el verificador se equivocó de página", e0312757 19:31Z). Overnight, 3 verifiers were skipped to save usage; nothing tracks which reports remain unverified except a memory note.

### 2.5 Applying corrections

- **Shape:** Opus, effort high, one agent per map (or pair), disjoint files, launched in parallel with the remaining verifier; each change cites its item ("ver. X"), replaced claims keep old wording ("corrected 2026-10-15"), Progress block lists applied item IDs.
- **Worked:** 4–19 min each, 200–400 k tokens; all items applied; agents re-checked contested items against primary texts themselves (Westminster, 1848 Encyclical) and reported conflicts instead of choosing (Jassy 1642/1643 left with both sources). The Catholic agent extended a rule beyond its instruction (Ott scans) and said so explicitly.
- **Noise:** each agent reported other agents' diffs as "not mine" — harmless, but shows they ran `git status` without knowing who else was running [inferred: the prompt didn't list sibling agents].

### 2.6 Consistency pass

- **Shape:** one Opus agent over six maps after all corrections: same structure, tags, shared items told the same way, doctrine loci renamed identically (29 loci), no Father assigned to a tradition; writes `consistency.md`.
- **Failed: "write as you go".** The prompt asked for an item-by-item log; `consistency.md` held only a header from 17:07 local until the end of a 58-min run. The agent's own report: "`consistency.md` only reached its full state near the end of the run, not item by item as you asked… a stop in that window would have lost the change log" (e0312757 20:58Z). The main agent caught it only because Pedro reported a network drop and it checked file mtimes (20:57Z). Same pattern noted in memory `tradition-source-universe` ("agents asked to 'write findings as you go' still batch their log at the end").

### 2.7 Gathering Pedro's decisions

- **In chat, numbered, with a recommendation each** (2026-10-08 screen 03, 12 points; 2026-10-09 evening, 8 points): Pedro answers by number across 2–3 messages; works; the agent corrected Pedro's count ("Ojo: en §6 hay 8 decisiones, no 6", ce2a6617 21:57Z) and wrote closed items before discussing open ones, marking the rest "en discusión" in ROADMAP in case the session ended (22:27Z).
- **Artifact page** for 41 open questions from six maps (e0312757 21:02Z): options + one marked recommendation + source section; Pedro returned all 41 as pasted structured text in one message (01:24Z), all "[recomendada]", 3 with notes. Very efficient.
- **Failed: recommendations not checked against DECISIONS.** The page recommended asking permission (Q27, Q30, Q32) although DECISIONS 2026-10-09 says "No permissions for now". The agent noticed only while recording: "no revisé DECISIONS antes de recomendar, y había decisiones previas que chocan con lo sugerido" (thinking, e0312757 01:30Z). The rule to check DECISIONS before proposing existed in `AGENTS.md` since cd01ba1 (doc table and "Before a feature"); the task was not framed as a feature, so the trigger never fired [inferred]. Because Pedro accepted every recommendation, a wrong recommendation becomes a wrong decision unless the agent catches it.
- **Evaluate-before-recording worked:** Pedro's notes on Q27/Q32 ("si no hay cambios significativos… usar el texto de 1916") were checked against sources before recording; the agent replaced "relevant differences" (a theological judgement) with a verbatim-match criterion and verified one case on Wikisource vs bfm.sbc.net (01:26Z) → DECISIONS 2026-10-15 "full text only on a verbatim match".

### 2.8 Handoffs, parallel sessions and doc ownership

- **Handoff by feature doc worked:** asked to "guardar todo tu conocimiento… analizemos bien como documentarlo", the agent listed what was already written vs "solo en mi cabeza", proposed destinations (feature doc for the in-flight work, one ROADMAP pointer, memory only for facts about Pedro, not GOTCHAS) and two governance questions (file ownership; whether the new session may decide open questions: no) before writing (8d9ad552 19:20Z). The new session started from a two-line prompt and needed no clarification (e0312757 19:25Z).
- **Failed: an ownership rule outlived its purpose.** The handoff said the other session owns DECISIONS/ROADMAP ("tell Pedro and he passes it on"); Pedro repeated it in his prompt ("no los edites"); then, hours later: "Porque me pasaste para que YO registre en decisions? Eso lo haces vos" (e0312757 01:29Z). The rule existed only to avoid concurrent edits; when the design session was idle it was pure friction. Saved to memory `decisions-written-by-agent`.
- **Failed: lessons died with the feature doc.** Its "Running agents on Pedro's account" section (burn rates, orphan subagents, search quota, can't change model on resume) was deleted with the file in 1456133 (AGENTS.md: "close the feature doc… the file is deleted"); it survives only in git history and private memory. The agent itself named this on 10-17: "otras murieron con el feature doc borrado" (e0312757 13:01Z).
- **Failed: `git rm --cached`.** While deleting the feature doc the agent ran `git rm --cached`, staging a deletion unasked; "El hook no frena ese comando; sí frenó el `git restore --staged` con el que quise deshacerlo" (e0312757 01:31Z). The hook still lacks `rm`/`add` today.
- **Cross-session coordination via Pedro as courier** (2026-10-17): the planning session asked which files the design session touches; Pedro relayed the question and pasted the answer (owner of ROADMAP/DECISIONS entries in current format, AGENTS.md read-only during the refactor, "avisá a Pedro antes de commitear" if formats change) (8d9ad552 13:16Z, e0312757 13:17Z). Worked, but manual.

### 2.9 Usage management

- **Evolution:** 2026-10-09 "Todas las tareas que no sean de razonamiento… dárselas a sonnet" (Pedro, 03:43Z) → memory `subagent-model-economy`; 10-14 Pedro relays usage by screenshot and asks to stop near 75–80 %; 10-15 another session created the `usage-guard` skill (check before launch, 5-min Monitor, no new agents ≥ 65 %, stop at 75 %); 10-15 Pedro: "no tengamos miedo a usar Fable, en algun agente especifico (no en 3 al mismo tiempo)" (20:04Z); 10-17 a 70 % "dump to file and report" step was added after Pedro asked whether a hard stop loses research (13:00Z).
- **Measured rates:** ~2.5 %/min of session with 6 agents (4 Fable) on 10-14; ~0.2 %/min with 3–4 Opus/Sonnet agents on 10-15 (9 % → 28 % in ~85 min, weekly +3 points); the agent's reading on 10-17: "con 3 o 4 agentes, fuimos a unos 10 [puntos por hora]".
- **Gaps:** the Monitor expires after 30 min and was re-armed 10 min late (expired 20:41Z, re-armed 20:51Z, e0312757); Fable's weekly quota vs "all models" interaction never measured ("No sé si su uso también descuenta", 10-17 12:45Z); per-run cost isn't logged anywhere in the repo.
- **Reframing by Pedro:** "mi intencion no es meramente 'gastar toda la suscripcion'… aprovechemos… en tareas complejas y largas que tengamos que hacer de todas maneras" (e0312757 13:19Z), and before that "DEBEMOS RESOLVER ESTO ANTES DE INICIAR NINGUNA OTRA TAREA… NO QUIERO que luego… lo vayamos haciendo 'a la marcha como salga en el momento'" (13:00Z): the trigger for this retrospective.

### 2.10 Model and tool incidents

- Opus 5.5 safeguards blocked a benign handoff request twice; Pedro switched to Opus 5 to get the answer, then back (8d9ad552 2026-10-15 19:17–19:22Z).
- Permission mode: the agent said it was already in bypass mode; its next Monitor call was rejected and Pedro set the mode by hand (e0312757 13:53Z) [inferred: the agent's claim was wrong or the mode changed].

## 3. Recurring patterns across types

- **Planning came from Pedro's pushback, not from a method.** Task selection (10-14: three rounds before "universe first"), run scale (10-14: launched 6 agents, then cut to 2–3), and the process system itself (10-17) were each fixed after Pedro objected. Each run re-derived its setup in the moment; the agent said so: "los prompts de los agentes, que reescribo cada vez desde cero. Por eso cada tanda de investigación sale un poco distinta" (e0312757 13:01Z).
- **The research → verify → apply → consistency → open-questions pipeline is stable and repeatable.** It appeared overnight (research + verify + critic) and fully on 10-14/15. Each stage has its own model (Opus/Fable research, Sonnet verify, Opus apply/consistency) and its own file. It is not written down anywhere as a procedure; it lives in a deleted feature doc and in memory.
- **Briefs:** shared BRIEF + short per-agent prompt worked both times; the important lines were the hard lines (legality, neutrality, Fathers not assigned), tags, disjoint files and a Progress block. What briefs could not enforce: incremental writing (2.6) and not touching unlicensed copies (2.3). Instructions that need enforcement need a check by the coordinator (mtime, grep), not more emphatic wording [inferred from both failures].
- **Verification is where quality comes from.** Every pass found real errors (9 of ~71 checked Lutheran/Reformed items, 5 of 78 Catholic, 11 Orthodox claims); a cross-report critic found the biggest problem of the overnight run. Single-agent output was never trusted as final.
- **File ownership:** disjoint files per agent worked in every run (no collisions recorded). Between sessions it was handled by rules in handoff docs and by Pedro relaying messages; the one rule that went wrong was an ownership rule kept after its reason expired (2.8).
- **Usage management moved from ad-hoc to tooled** (screenshots → `usage-guard` skill → 70 % soft-stop), but the numbers that size a run (rate per agent per model) were never measured up front and are scattered across memory.
- **Handoffs between sessions:** "Current state" in ROADMAP + last commit was enough to resume (8d9ad552 15:51Z answered "what were we doing" from the repo alone); feature doc worked for in-flight work. Weak points: "Current state" goes stale mid-session; lessons inside feature docs are deleted with them; memory is private to the main agent and invisible to Pedro's other sessions (agent, 10-17 13:01Z).
- **Rules that existed but didn't fire:** "check DECISIONS before proposing" (from day 1) and "save as you go" (in the BRIEF) were both written and both violated. Rules tied to a trigger the task didn't match ("Before a feature") or with no check behind them fail silently.
- **Corrections repeated by Pedro:** recording in DECISIONS (once "no los edites", then "Eso lo hacés vos"); "think harder before answering" (17:51Z "PENSA BIEN", 18:16Z "no me respondas de memoria"); notes written before agreement (→ rule); internal states in proposals (→ rule). Two became AGENTS.md rules; the others only memory.
- **Agent honesty held:** errors were reported unprompted (Denzinger scan, `git rm --cached`, contradicting DECISIONS, consistency log batching), which is what made this retrospective possible.

## 4. Candidate lessons

Confidence: **[repeated]** seen in two or more runs; **[once]** seen once. Evidence keys refer to sections above.

### Planning and choosing work

1. When choosing heavy work to fill spare usage, pick only work that is already decided and will be needed anyway, and present it ranked by value with why, because Pedro rejected low-value fillers ("PENSA BIEN", 8d9ad552 17:51Z) and reframed the goal as "tareas… que tengamos que hacer de todas maneras" (e0312757 13:19Z). [repeated]
2. When a task type has been done before, start from its written procedure and prompt template, not from scratch, because re-deriving each run produced different setups and repeated errors (agent, e0312757 13:01Z). [repeated]
3. When a run will be unattended, ask every blocking question (scale, downloads, installs, logins, limits) in one round before Pedro leaves, because the overnight run did this and ran 2.5 h without needing him (1b29cbc3 03:08Z). [once]
4. When the scope of an entity (which traditions, which families) is ambiguous, settle it with Pedro before launching agents, because the Orthodox/Pentecostal question was raised and decided in 8 minutes pre-launch (8d9ad552 18:35–18:43Z) and the per-family split was later the biggest open-question set. [once]

### Sizing and usage

5. When launching more than one agent, first run one agent of each model for ~5 min and measure session %/min, then size the batch, because 6 agents (4 Fable) burned ~2.5 %/min unannounced while 3–4 Opus/Sonnet ran at ~0.2 %/min (2.9). [once, with a near miss]
6. When running agents on Pedro's account, keep at most 2–3 Opus agents and at most one Fable agent at a time, Sonnet for mechanical work, because that is the measured sustainable rate and Pedro's stated rule (memory `subagent-model-economy`, 8d9ad552 19:01Z, e0312757 20:04Z). [repeated]
7. When a run is search-heavy, schedule search-dependent items first and give agents the fallback list (catalogue APIs, archive.org, direct fetch), because the shared WebSearch quota ran out in both research runs. [repeated]
8. When a monitor or guard has a timeout, re-arm it before it expires, because the 30-min Monitor lapsed for 10 min mid-run (e0312757 20:41–20:51Z). [once]
9. When a run ends, log its cost (agents, models, tokens, minutes, session %) in the procedure doc, because today these numbers exist only in transcripts and private memory and were needed to size the next run. [repeated]

### Briefs and agent control

10. When agents must save as they go, make it checkable (log path, cadence) and have the coordinator check file mtimes every ~15 min, nudging any agent that hasn't written, because instruction alone failed (consistency pass, e0312757 20:58Z; memory `tradition-source-universe`). [repeated]
11. When stopping an agent, list running agents and stop its children too, but don't forbid subagents to prevent it, because stopping a parent left a helper running (8d9ad552 19:03Z) and Pedro wants subagents allowed (19:14Z). [once]
12. When an agent needs a different model or effort, launch a new agent that resumes from the file's Progress block, because a stopped agent resumes with its original model (8d9ad552 19:01Z). [once]
13. When a brief sets a legal or licensing line, also have the verifier and the coordinator check for it (grep for the forbidden sources), because a research agent read an unlicensed Denzinger scan despite the line (8d9ad552 19:55Z). [once]
14. When several agents share one browser or quota, tell each agent it is shared and how to back off, because agents collided on the CDP Chrome overnight (1b29cbc3 05:53Z). [once]
15. When agents run in parallel on the same repo, tell each which sibling agents exist and which files they own, because every apply agent reported others' diffs as unknown (e0312757 19:31–19:46Z). [once, minor]
16. When a resumed run was cut by a limit, resume by `SendMessage` to the same agent with "done: X, don't redo; continue from Y", because all 5 overnight agents finished that way (1b29cbc3 06:03Z). [repeated: also 10-14 resumes via Progress block]

### Verification and quality

17. When research produces claims, always run a separate verification pass (Sonnet, exact-string matching on fetched pages) before anything depends on them, because every pass found wrong claims (2.4). [repeated]
18. When several reports cover parts of one question, add a cross-report critic, because it found the run's biggest problem (registry built on New Advent) that no area agent owned (1b29cbc3 05:29Z). [once]
19. When verifications are skipped to save usage, record which ones in the repo as pending, because the three skipped overnight are tracked only in private memory. [once]
20. When an apply agent disagrees with its verifier, let it keep the claim with evidence and say so, rather than applying blindly, because verifiers also err (McGlothlin page, e0312757 19:31Z). [once]

### Decisions with Pedro

21. When preparing recommendations for Pedro (chat or page), read `DECISIONS.md` first and cite the prior decision each recommendation relies on or conflicts with, because the open-questions page recommended permissions against the 2026-10-09 rule and Pedro accepted 41/41 recommendations (e0312757 01:24–01:30Z). [once, high impact]
22. When there are more than ~10 decisions, use one page with options, a marked recommendation and a copy-back answer format, because 41 questions were settled in one round (e0312757 01:24Z); below that, numbered points in chat work (ce2a6617, 2026-10-08). [repeated]
23. When Pedro gives a note, restate it, object where needed, and record only after agreement; mark pending points "under discussion" in ROADMAP, because recording early was corrected and became a rule (DECISIONS 2026-10-06). [repeated]
24. When Pedro's note asks for a judgement the site must not make (e.g. "relevant" doctrinal differences), propose a mechanical criterion instead and verify one case, because that turned his note into an applicable rule (verbatim match, e0312757 01:26Z). [once]
25. When Pedro sends notes over several messages, store them in a scratch file immediately, because compaction lost nuances that only the re-read transcript recovered (1b29cbc3 2026-10-07 13:49Z, 18:18Z). [repeated]

### Handoffs, docs and git

26. When handing work to another session, write the feature doc with state, ordered steps with models, governance (who decides, who writes what) and known errors, and start a fresh session on it, because that handoff ran without clarification (e0312757 19:25Z). [once]
27. When a handoff sets file ownership, state its reason and expiry ("while the design session is active"), because the ownership rule outlived its purpose and Pedro had to override it (e0312757 01:29Z). [once]
28. When closing a feature doc, move its process lessons to the task-type procedure before deleting it, because the 10-15 operational lessons were deleted with `tradition-universe.md` (1456133). [once]
29. When a lesson is about how to work (not about Pedro), put it in the repo, not only in private memory, because memory is invisible to Pedro's other sessions (e0312757 13:01Z). [repeated]
30. When a rule must hold, attach it to a trigger every relevant task hits or to a hook, because "check DECISIONS" and "save as you go" were written and still skipped (3). [repeated]
31. When the git hook is the guard, block `git rm` and `git add` too (staging only on request) and test the gap cases, because `git rm --cached` slipped through while `git restore` (the undo) was blocked (e0312757 01:31Z). [once]
32. When a session's "Current state" is stale, rewrite it at the start of work, not only at the end, because it was two days stale mid-review (1b29cbc3 10-07 09:59Z). [once]
33. When exploring undecided UX, use proposal canvases with real content, not a new build, because v2's full build was the costly way to learn the structure was wrong (`handoff/CONTEXT.md` §10). [repeated: v2, rounds 1–2]
