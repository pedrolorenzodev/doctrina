# Brief, second pass: objections and answers from YouTube debates (Baptism)

Read `BRIEF.md` in this folder first: its "Why", "Read first", "For each candidate objection" and "Rules" still hold. This pass fixes what the first one missed (`verification.md`, `docs/features/debate-objections-pilot.md`): the first pass found "no debates" because it looked for published transcripts. There are many organized debates on YouTube between Catholics and evangelicals or other traditions, with popular apologists and large audiences. Those are the main source now.

## Method
1. **Start from the Catholic side.** List the baptism objections that Catholic apologists answer most (Catholic Answers tracts and videos, Trent Horn, Jimmy Akin, Joe Heschmeyer, Spanish-language Catholic apologists). This is the index of what is frequent.
2. **Find the debates.** Search YouTube in English and Spanish (the site's main readers are Spanish speakers who watch these debates):
   `yt-dlp --flat-playlist "ytsearch25:<query>" --print "%(id)s | %(view_count)s | %(upload_date)s | %(channel)s | %(title)s"`
   Queries such as: catholic baptist debate baptism; infant baptism debate catholic; baptismal regeneration debate; does baptism save debate; debate bautismo católico evangélico; bautismo de infantes debate; ¿el bautismo salva? debate. Views decide which debates count as famous (prefer ≥ 10,000 views and recognised apologists); views never rank objections.
3. **Read them.** Download auto subtitles without the video:
   `yt-dlp --skip-download --write-auto-subs --sub-langs "en,es" --sub-format vtt -o "<folder>/%(id)s" <url>`
   into `/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/71d576d5-c6b0-411b-9d8a-24e6bce35bcd/scratchpad/yt/` (never into the repo). Strip timing lines and duplicate rows to read; keep cue times to cite `mm:ss`. Read the parts where objections and rebuttals are made, not every word. If subtitles fail, use Playwright on the watch page, or say so: the owner can log the agent into YouTube.
4. **For each objection** write the block of `BRIEF.md`, plus:
   - **Popular wording:** the objection as debaters actually say it (one sentence in English and its Spanish form if a Spanish debate uses it). This is the wording the site will use (DECISIONS 2026-10-20).
   - **Debates:** each with title, channel, date, views, URL with timestamp, who raises it, and at most one short quotation.
   - **Catholic answer:** where the Catholic debater or apologist answers it (URL with timestamp, or tract); one line on how. Note whether it rests on an official text (cite it) or only on apologetics (DECISIONS 2026-10-20 "Answers from apologetics").
   - **Counting rule:** sources count as independent only if they are different people not quoting each other; an author quoting or reviewing another, or a network repeating one source, counts once. Historical theologians (Calvin, Hodge, Spurgeon) count as support, not as debate frequency.
   - **Two added criteria:** the proponent belongs to the line the site uses for that tradition (Baptist = Southern Baptist convention line; Pentecostal = Assemblies of God; Reformed = Westminster family; Lutheran = Book of Concord bodies; Orthodox = canonical churches) or the block says who they are; and the objection aims at what the Catholic Church teaches today (Catechism, current Code), not at a superseded or never-defined position (e.g. limbo).
5. **Verdict:** PASSES (≥ 3 independent debates or apologists, answered by the Catholic side, anchored in an official text of the objecting tradition, both added criteria met) or FAILS (which criterion).

Reuse from the first-pass files whatever `verification.md` confirmed; don't re-search it.

## Agents and files (write only your own)
- D · Baptist and Assemblies of God, plus non-denominational evangelicals who argue the same ground (label them as such) → `baptist-ag-2.md`
- E · Reformed, Lutheran and Orthodox → `reformed-lutheran-orthodox-2.md`

File structure: `# <Group>: debate objections to Catholic Baptism, second pass` · Progress block · `## Debates found` (table: id, title, channel, date, views, language, read yes/no) · `## Objections` · `## Summary` (table: popular wording, independent sources, answered, anchored, line, current teaching, verdict) · `## Notes for the coordinator`.

Stop after about 45 minutes with the Progress block exact. Reply in English: debates found and read, objections passing (popular wording, one line each), problems.
