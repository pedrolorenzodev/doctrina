# Debate objections

Find, for one doctrine, the objections people actually meet in debate against a tradition's position, worded as they are said, and keep those that pass the criteria. Rule: `DECISIONS.md` 2026-10-20 "Objections from debates…" and "Answers from apologetics…". Read `agent-ops.md` first (YouTube tools and rate limits). Last validated: 2026-10-20 (Baptism pilot; its files in `docs/research/doctrines/baptism/debate-objections/`). Approved by Pedro 2026-10-20.

## Before launching

1. Read the tradition's dossier for the doctrine (`docs/research/doctrines/<slug>/<tradition>.md`, its official-layer objections) and the objecting traditions' maps (`docs/research/traditions/`).
2. `/plan-run debate-objections`. One shared `BRIEF.md` in `docs/research/doctrines/<slug>/debate-objections/` (copy the Baptism one and its `BRIEF-2.md` method, change the doctrine).

## Running

- **Start from the answering side.** List the objections its apologists answer most (Catholic Answers and similar for Catholics): that is the index of what is frequent.
- **YouTube first, Spanish and English.** Organized debates with popular apologists and large audiences are the main source (Spanish: Padre Luis Toro, Alex Apologeta, Rincón Apologético, Salvador Barragán, and their opponents). Views decide which debates count as famous, never which objection is best. Books, tracts and articles are support.
- **One downloading agent at a time** (YouTube rate-limits the IP after ~20 subtitle downloads in a few minutes): yt-dlp without login with sleeps until the first 429, then the Playwright scripts with Pedro's saved session (`agent-ops.md`, "Tools agents have"). Group agents by objecting tradition only for the reading and writing, not for parallel downloads.
- **Per objection:** popular wording exactly as said (Spanish when a Spanish debate has it); debates with minute, speaker, one short quotation; independent people (different people not quoting each other; re-uploads once; lay callers counted apart); the answering side's answer heard and the official text it rests on; the anchor in the objecting tradition's official text, verbatim with locator; overlap with the official layer; who the proponent is (recorded, never a fail).
- **How a video is read:** auto subtitles (yt-dlp) or the transcript panel (Playwright), cleaned of repeated timing rows but keeping each line's minute; the agent finds where objections are raised and answered and records the phrase as captioned, the minute and the speaker. Captions carry no speaker names and misspell names and terms, so the speaker is inferred from context and marked as inferred when it is. In the most-viewed debates (top few per doctrine) the agent reads the whole transcript, not only keyword hits, so objections said in other words aren't missed; elsewhere keyword reading is enough.
- **Passes:** ≥ 3 independent people, answered by the other side, anchored in an official text of the objecting tradition, aimed at what the answered tradition teaches today. Re-readings of the same proof texts are one grouped objection, counted as a group. A criterion the agent proposes and Pedro hasn't confirmed is recorded as a flag, never as a fail, until he confirms it.

## After

1. A verification pass (Sonnet is enough) on the passing objections: transcript passages at the minute, counts, anchors, metadata.
2. Every objection kept for the site carries a link to its exact minute (`https://www.youtube.com/watch?v=<id>&t=<seconds>s`) for each debate quoted; before publishing, someone listens to those ~20 seconds and confirms the words and the speaker against the audio.
3. Answers: official texts first. A debater's answer that contradicts official teaching never reaches the site; apologetics only where official texts are silent, anchored in official teaching.
4. Pedro reviews the list in Spanish (popular wording, counts, one line each) and keeps what he wants; the kept ones go to `DECISIONS.md` and into the dossier.
5. `/retro`.

## Sizing

Baptism, 2026-10-20 (measured): three passes over 2 h 15 min, 6 Opus + 3 Sonnet ≈ 52 session points (with coordination) and ~9 weekly. The single Spanish YouTube pass (one Opus agent, 25 videos, ~50 min) cost ~15–20 session points and gave most of the kept objections. Start with one Spanish YouTube agent; add English YouTube and books only for what it leaves short.

## Lessons

- 2026-10-20 · The first pass asked for published transcripts and found "no debates"; YouTube was the source all along (Pedro).
- 2026-10-20 · Two agents downloading subtitles at once triggered a 429 and a "not a bot" wall for ~20 minutes.
- 2026-10-20 · Requiring the proponent to belong to the column's official line excluded every real debater; the anchor in the official text is what ties an objection to a tradition.
- 2026-10-20 · Popular Catholic debaters sometimes contradict official teaching («el agua pasa a ser solamente símbolo»): answers come from official texts first.
- 2026-10-20 · Retro: the "line" criterion, the agent's own idea, failed objections before it was tested → unconfirmed criteria are flags, never fails.
