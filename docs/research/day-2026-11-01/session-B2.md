Status: draft, NOT verified by Pedro

# Session B2 («voices», round 2) log, 2026-11-01 evening

Lane: `docs/research/passages/**`, `docs/research/videos/**`, `docs/research/apologists.md`, `docs/research/youtube-covers.md`, this log. Continues `session-B.md`. Plan: `docs/features/research-two-sessions.md`. Cap: weekly 42 % for A2 + B2 together; stop at 41.5 %.

## Progress

- [x] **B-1.1** Verifier pass on the C1 entries added after the first verifier (Eucharist 2 and 5, Papacy 5, 12 and the Mt 16:19 supplement, Sola Scriptura 6) and the three H1 files: `passages/verification-b2-1.md` (every quote matched verbatim; 7 of 11 locators wrong, 2 video rows wrong, 4 table rows broken by a pipe in the channel name); corrections applied.
- [~] **B-1.2** Akin `PucLuJsfekA`: done by another route (the 6:14 clip has no captions at all; its description names the full episode `Mo0BEpnpL5g`, whose captions carry the answer: `passages/apologists-catholic-eucharist.md`, «3 (supplement to the pilot)», and the video row updated). `apologists.md`, «Update 2026-11-01 evening (session B2)»: Otálora (not used), «How to Be Christian» (still unassigned), Spanish-language Catholic voices (leads only, none added). **Not done:** «contested within the tradition» for each C1 argument stays `[not searched]`.
- [~] **B-2 C1** 23 passages gained quotes (Papacy 2, 3, 6, 7, 8, 9, 10, 11, 13; Sola Scriptura 1, 5, 7, 11, 13, 14, 15; Eucharist 1, 10, 11, 14; Baptism 7, 8, 13), plus John 6:63 (Akin). Second read of every new quote: `passages/verification-b2-2.md` (45 quotes: all verbatim, locators right, one caption cue range wrong; 3 headings, 1 count line and 10 overreaching headings corrected). **11 passages still have no quote** because nothing on-point was found in the pages searched: Papacy 14; Sola Scriptura 8, 9, 12, 16, 17; Eucharist 12, 13; Baptism 14, 18, 19.
- [x] **B-2 H1** 16 files `videos/<doctrine>-<tradition>.md` for the 16 non-Catholic pages, 30 rows (Eucharist 8: Orthodox 2, Lutheran 2, Reformed 3, Baptist 1; Baptism 7; Papacy 7; Sola Scriptura 8). Every quote matched to the captions by a script; one offline Sonnet pass on «what it defends» (`videos/verification-b2-h1.md`: 25 of 30 rows supported as written, 5 wrong or overstated; all 13 corrections applied by regenerating the tables).
- [ ] **H2** OB-4..OB-7 of the Eucharist and Baptism: not started.
- [ ] **B-3** C5, C3, C4, H3, H4: not started (the weekly cap; C5 was not opened, so its cost was not measured).

## Timeline and usage (session / weekly)

- 16:53 start: session 28 %, weekly 37 % (reset Wed 18:00; session reset 18:50).
- 16:56 29/37 · 17:00 32/38 · 17:07 34/38 · 17:12 37/38 · 17:14 38/39 · 17:24 42/39 · 17:29 43/39 · 17:33 45/40 · 17:36 45/40 · 17:40 47/40 · 17:44 48/40. HTTP 429 from the usage endpoint several times (waited and retried). The reading moves with session A2 and with the Sonnet subagents (three runs of about 165k, 175k and 424k subagent tokens). Stopped at 17:45 with weekly 40 %, i.e. **not** at the 41.5 % line: what was left (C5, H2, the 11 passages, a second verifier on the corrected H1 tables) did not fit in the margin, and a further verifier run was judged to cost more than the points left; this is the agent's call, stated here so nobody reads it as the cap forcing the stop.

## Subagents (Sonnet, one at a time)

| # | Brief | Result |
|---|---|---|
| 1 | The C1 entries added after the first verifier and the three H1 files (`passages/verification-b2-1.md`) | quotes verbatim; 7 locators wrong; 2 video rows wrong; 4 format defects; all applied |
| 2 | The 23 new C1 sections plus the John 6:63 supplement (`passages/verification-b2-2.md`) | 45 quotes confirmed; 1 cue range, 3 headings, 1 count line, 10 overreaching headings corrected |
| 3 | The 16 H1 tables, semantic check against the captions, no network (`videos/verification-b2-h1.md`) | 25 supported, 3 overstated, 1 topic mismatch, 1 creator claim wrong; 13 rewordings applied |

## Agent's calls

- **C1 method round 2:** re-crawled 1,742 catholic.com pages (Shameless Popery 294, Dr. Karlo 50, The Jimmy Akin Podcast 108, A Daily Defense 372, plus 920 magazine pages whose address matches the four doctrines) with `curl` workers at about 1 request/second each, indexed paragraph by paragraph with the speaker label (named labels only; «Speaker 1:» is never attributed) or byline, and every quote **extracted from the page text by a script** (start and end strings), so a quote cannot differ from the page; the locator is computed from the same paragraph. The scripts live in the scratchpad (lost when the session ends); the method is in each file's Progress block.
- **Independence:** both counts on every new section; **one work = one page**, except that a print-edition reprint of an online article (Horn's «Refuting Papal Myths» = «Defending the Papacy») counts once. Every voice found is Catholic Answers staff, so every passage is 1 by organisation. **No voice outside Catholic Answers was searched** (D2 allows it only for a passage that cannot reach three persons and only if the creator passes `apologists.md`): not done for lack of budget. Passages left below three persons are named in each file's count lines.
- **A quote is not used** when it is only a Bible quotation inside the article, when it answers a different argument from the page entry's (Heschmeyer on Acts 2:14, for oral proclamation not for Peter's leadership), or when it reports an opponent's words; each case is named in the count line.
- **Otálora is left out** (a title on his channel calls the pope an anti-pope; 227 subscribers; identity unconfirmed; titles only, content not read). **HTBC** is not counted toward independence (host and tradition not named on its site). **Fr. Luis Toro** is only a lead (role not established).
- **Akin `PucLuJsfekA`:** the quote comes from the captions of the full episode (YouTube lists them as subtitles, not automatic captions) at 1:39:29 and 1:40:26; that the clip equals that stretch is an `[inference]` from the duration (about 6 min) and the clip's description; «Akin» rests on the caller's «Hi Jimmy» and the clip's description (captions have no speaker labels).
- **H1 method:** candidates by `yt-dlp` flat search per creator and topic; captions through `transcript.js` (the yt-dlp subtitle route answered HTTP 429 after the first three videos); quotes matched by script, cue start time computed from the match. Wilken, Fiene, Damick and De Young had no on-topic video in the searches, so the Lutheran and Orthodox pages rest on Cooper, Dyer and a Patristic Nectar channel whose speaker is not named; the Lutheran Baptism page has one video only. A third-party channel (clips, re-uploads) is marked in the rows.
- **Filing:** Ortlund's «The Lord's Supper: A Reformed View» is filed on the Reformed page, not the Baptist one, because the verifier read it as the Reformed view built on Watson; the Baptist Eucharist page has one video.

## Shared choices (for A2)

- (inherited from B) 1689 margins: the 1719 fourth London edition is primary (`archive.org/details/bim_eighteenth-century_a-confession-of-faith-p_1719`, image index = printed page − 13); McGlothlin 1911 (`archive.org/details/baptistconfessio00mcgl`, index = printed page + 13) is the 1677 print, variant only.
- catholic.com transcripts: `https://www.catholic.com/audio/<sp|drk|tjap|ddp>/<slug>`, all in `https://www.catholic.com/sitemap.xml`; Catholic Answers Live (`/audio/cal/`, 5,248 pages) and Catholic Answers Focus carry only a description, no transcript.
- YouTube: `--print` makes `yt-dlp` simulate and write no captions (add `--no-simulate`); subtitle downloads answer 429 after about 20 requests in minutes; `transcript.js` takes about 35 s per video. bash on macOS is 3.2 (no `declare -A`).

## Handoff to A

- A2's log (read 17:40) says the earlier handoff was applied (Acts 26:16; 2LCF 26.3 note 6) and asks nothing of B2. Still open from before: the 2LCF 1.4, 1.7 and 29.2 locators in the other `baptist.apply.md` files follow different editions row by row.
- `videos/*` is B's; A2 may read the new Lutheran and Orthodox tables if its objections files need a video: nothing was written into any `doctrines/` file.

## What is left

- C1: 11 passages with no on-point quote; every «contested within the tradition» is `[not searched]`; Horn's books (not read); Spanish-language voices (leads only); any voice outside Catholic Answers.
- H1: the Lutheran Baptism page has one video, the Baptist Eucharist page one; no Spanish-language video; the speaker of the Patristic Nectar videos is unconfirmed; H2 (videos per objection, OB-4..OB-7 of the Eucharist, Baptism) not started.
- C5 (apologists layer for the 16 non-Catholic pages, 167 passages: cost not measured; the corpus problem stays: no transcript source for Trenham, De Young, Damick, Cooper, White, Sproul, Ortlund except YouTube captions at about 35 s per video), C3, C4, H3, H4 not started.
- Nothing is in `src/` or `data/`; every file is a draft not read by Pedro.

## Resumen para Pedro (español, breve)

- **Hecho:** (1) cerré lo que quedaba: verificador sobre las citas y videos del turno anterior (locators corregidos); (2) Akin en Juan 6:63: el clip de 6 min no tiene subtítulos, pero el episodio completo sí, y ahí está la cita; (3) C1: 23 pasajes más con citas literales (Papado 9, Sola Scriptura 7, Eucaristía 4, Bautismo 3), sacadas por script del texto de catholic.com y revisadas por un verificador; (4) H1: los 16 archivos de videos para las páginas no católicas (30 videos, citas de subtítulos con minuto), con un verificador que corrigió 13 filas.
- **Ojo:** los 4 apologistas son de Catholic Answers: por organización siempre cuenta 1; por persona, varios pasajes llegan a 3 pero muchos quedan en 1 o 2. Quedan **11 pasajes sin cita**. Otálora lo dejé afuera (su canal llama «antipapa» a Francisco; 227 suscriptores). Las páginas luteranas y ortodoxas dependen de Cooper, Dyer y un canal de Patristic Nectar sin hablante nombrado; Bautismo luterano tiene un solo video.
- **Necesitan decisión tuya:** si busco voces fuera de Catholic Answers para los pasajes con menos de 3 personas; si Ortlund va en la página Reformada o Bautista cuando el video es de otra línea (dejé uno en cada caso, ver `videos/eucharist-reformed.md`).
- Uso al cerrar: semanal 40 %, sesión 48 % (17:44). No llegué al tope de 41,5 %: paré porque otro verificador costaba más de lo que quedaba.

## Summary for the next agent (English)

- **Ready for review:** `passages/apologists-catholic-{baptism,eucharist,papacy,sola-scriptura}.md` (23 new passages + the John 6:63 supplement; each quote extracted from catholic.com page text by script; second read in `passages/verification-b2-2.md`), `videos/<doctrine>-<tradition>.md` ×16 (30 rows with caption quotes and cue times; semantic pass in `videos/verification-b2-h1.md`), `apologists.md` (evening update), the corrected `videos/{baptism,papacy,sola-scriptura}-catholic.md` and `videos/eucharist-catholic.md` row for Akin.
- **Method worth reusing:** a paragraph index of the catholic.com crawl with named speaker labels, then quotes extracted by start/end strings (no retyping), locators computed from the same index; `transcript.js` when yt-dlp subtitles answer 429; a script that finds a quote in captions and gives its cue time.
- **Not done:** 11 Catholic passages; any voice outside Catholic Answers; «contested within the tradition»; H2; C5, C3, C4, H3, H4; Spanish-language videos.
- **Unverified:** the speakers of the Patristic Nectar videos and of the clips channels; «what it defends» of long videos was judged from the regions the verifier read (see its «Cannot judge»); the verifier's own cue times for corrections were not re-read.

## Table for Pedro's daily (tomorrow)

| What is ready | What you decide | What to be able to explain |
|---|---|---|
| 23 more Catholic passages with exact quotes (`passages/apologists-catholic-*.md`) | Whether to search voices outside Catholic Answers for passages below three persons (D2 allows it, with the criterion of `apologists.md`) | That every quote is cut by script from the catholic.com page, that the transcripts are machine-made, and that by organisation every passage counts 1 |
| 16 video tables for the non-Catholic pages (`videos/*.md`, 30 videos) | Which creators the Lutheran and Orthodox pages should use (Wilken, Fiene, Damick, De Young gave nothing on these topics); Ortlund's Reformed-vs-Baptist filing | That the quotes come from YouTube's automatic captions with their minute, that captions carry no speaker labels, and which channels are clips channels |
| `apologists.md` evening update | Whether Otálora stays out; whether HTBC may count once its host is named | Why an anti-pope title on a channel is a conflict with the Papacy page's official sources (titles only, not watched) |

## Commit command for session B2's files (do not run it from the agent)

`git add docs/research/apologists.md docs/research/day-2026-11-01/session-B2.md docs/research/passages docs/research/videos && git commit -m "docs(research): add round-2 Catholic quotes and non-Catholic videos"`

(`docs/research/passages` and `docs/research/videos` are session B's folders; do **not** add `docs/research/open-research-2026-11-01.md`, `docs/research/doctrines`, `sources`, `neutral`, `session-A2.md`, `.playwright-mcp/`, `tmp/` or the `__pycache__` folder.)
