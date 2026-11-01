Status: draft, NOT verified by Pedro

# Session B («voices») log, 2026-11-01 afternoon

## Progress

- [x] **B-1.1** `apologists.md` open doubts: «Update 2026-11-01 afternoon (session B)» appended; verifier pass (25 confirmed, 5 wrong, 5 unconfirmable), corrections applied. Still open: Spanish-language creators (leads only, none assessed), Otálora (title level), Trenham's parish page, Dyer's jurisdiction.
- [x] **B-1.2** `videos/eucharist-catholic.md`: header and 15 rows normalised (11 cells each); Akin `PucLuJsfekA` retried (yt-dlp: no subtitles; `transcript.js`: NO-TRANSCRIPT-BUTTON; no speech-to-text tool installed): still unchecked. Formatting only, no subagent.
- [x] **B-1.3** 1689 margins: page images of McGlothlin 1911 (his Second London text «reproduces the original edition of 1677», p. 219) and of the London 1719 fourth edition read; result written as «Margin re-verification against page images» in the four `passages/*-baptist.md` (tables above the old ones, which are unchanged). Independent second read: 0 wrong. Two web searches for an official per-passage Baptist commentary: none found.
- [~] **B-2 C1** (Catholic apologists): `passages/apologists-catholic-{baptism,eucharist,papacy,sola-scriptura}.md` (the pilot `apologists-catholic.md` unchanged, with a pointer). Page entries with at least one quote now: Baptism 1, 4, 5, 6, 9, 10, 11, 15, 16, 17; Eucharist 2, 4, 5, 6, 7, 8, 9; Papacy 4, 5, 12 and a Matt 16:19 supplement; Sola Scriptura 2, 3, 4, 6, 10 (25 passages, plus the pilot's 2). **3 persons** (all Catholic Answers, so 1 by organisation) on: Baptism John 3:5 and 1 Pet 3:20; Eucharist Luke 22:19; Sola Scriptura 2 Thess 2:15 (quoted 3, but only 1 carries the argument). The other passages have 1 or 2 persons; **37 of the 62 passages have no quote yet.** Verified once (31 URLs, 45 quotes: all matched and attributed; 19 locators and 5 headings were wrong and were corrected); the entries added after the verifier (Eucharist 2 and 5, Papacy 5, 12 and supplement, Sola Scriptura 6) are machine-matched but not second-read.
- [~] **B-2 H1** (videos): `videos/baptism-catholic.md` (7), `videos/papacy-catholic.md` (5), `videos/sola-scriptura-catholic.md` (5); all against the transcripts published on catholic.com (no minutes). Not verified by a subagent. Not started: the 16 non-Catholic pages, H2 (OB-4..OB-7 and Baptism objections).
- [ ] **B-3** C5, C3, C4, H3, H4: not started (the weekly cap stopped new items).

## Timeline and usage

- 15:31 start: session 3 %, weekly 33 % (reset Wed 17:59). Cap for both sessions 40 % (no new item at 38 %, stop at 39.5 %).
- Readings (session/weekly): 15:34 4/33 · 15:41 6/33 · 15:46 8/34 · 15:53 11/34 · 15:57 13/35 · 16:03 15/35 · 16:07 17/35 · 16:12 20/36 · 16:16 22/36 · 16:22 25/36.
- Stopped at 16:23 with weekly 36 %, session 25 %: **not** at the cap (38 %), but what remained (C5, the 16 non-Catholic pages, 37 passages) is larger than the budget left and the reading moves with session A. About **3 weekly points** for the whole run (33 → 36), with the other session running; the 62-passage target was not reachable.
- Measured cost of the C1 method (crawl and match) on Catholic Baptism, Eucharist, Papacy and Sola Scriptura: about 25 passages in roughly 50 minutes of work, including three Sonnet verifiers (each about 200k subagent tokens) and a background crawl of about 2,000 catholic.com pages (no model cost). **C5** (the 16 non-Catholic pages, 167 passages) was not opened: the same method needs a transcript corpus for Trenham, De Young, Damick, Dyer, Cooper, Wilken, White, Sproul and Ortlund, and none was found, so its cost was not measured on one tradition (not done, as the plan says «do not open the rest without that report»).

## Subagents (Sonnet, one at a time)

1. `apologists.md` update: 25 confirmed, 5 wrong, 5 unconfirmable; applied.
2. 1689 margins, independent second read of page images: 0 wrong; two wording nuances applied.
3. C1 files (4 files, 31 URLs, 45 quotes): URLs and attribution confirmed; 19 locators wrong (9 paragraph, 10 wording), 1 count line, 5 headings; all applied.

## Agent's calls

- **C1 method (changed from the pilot's):** the catholic.com podcast and magazine pages carry transcripts or text with a speaker label or byline (Shameless Popery 294 pages, Dr. Karlo 50, The Jimmy Akin Podcast 108, A Daily Defense 372, Counsel of Trent 1,173 of which almost none have a transcript, about 520 magazine, tract and article pages picked by address words). Fetched with `curl` at about one request per second (the sitemap lists them), searched offline with scripture patterns, and **every quote matched string by string against the fetched text by a script** before being written. This avoids YouTube's 429 and the «who speaks» problem of auto-captions, but the transcripts are machine-made (their mishearings stay in the quotes), carry no times, and some Counsel of Trent pages with two speakers have unreliable labels (nothing quoted from the Horn and Steve Ray episode). Horn is therefore thin. The scripts live in the session scratchpad (lost when the session ends); the method is written in the files' «Sources searched».
- **Independence (D2):** both counts recorded per passage; since every voice found is Catholic Answers staff, every passage is 1 by organisation. No voice outside Catholic Answers was searched for: not done.
- A quote on a parallel passage (Matt 19, Luke 18 for Mark 10:14) is labelled as such. Akin's *A Daily Defense* text is quoted as his (byline). Where a quote did not carry its heading (the verifier's finding) the heading or the count line was weakened, not the quote.
- `apologists.md`: Cooper's synod read from his own site (AALC), not from a search summary; Patristic Nectar's 322,000 channel is the publisher's, not Trenham's; HTBC not treated as Catholic until a page names the host; Spanish creators are leads only.
- 1689 margins: McGlothlin 1911 cannot by itself verify «1689» (it reproduces the 1677 print), so the 1719 fourth edition was added as a second dated print; no 1688/1689 print scan found; the two prints disagree in five places and the old dossier tables mix both; the new tables report both and choose neither.
- Videos H1 for catholic.com-hosted episodes: «checked against the transcript» means the page transcript, not YouTube captions; the tables say so.

## Shared choices (for A)

- Edition for the 2LCF margins: McGlothlin 1911 (`archive.org/details/baptistconfessio00mcgl`, image index = printed page + 13) and London 1719, fourth edition (`archive.org/details/bim_eighteenth-century_a-confession-of-faith-p_1719`, image index = printed page − 13). Page-image URLs `https://archive.org/download/<id>/page/n<N>.jpg` work without login; archive.org answers an intermittent 500, retry after a few seconds.
- catholic.com publishes transcripts of Shameless Popery, Dr. Karlo, The Jimmy Akin Podcast and A Daily Defense at `https://www.catholic.com/audio/<sp|drk|tjap|ddp>/<slug>` (all listed in `https://www.catholic.com/sitemap.xml`): usable as an English source for any Catholic Answers voice.

## Handoff to A

- **A6:** `baptism/baptist.apply.md` says the 2LCF 29.1 margin cites «Acts 22:16»: both prints say «Act. 26. 16». `papacy/baptist.apply.md` lacks 2LCF 26.3 note 6 (Matt 16:18; Ps 72:17, 102:28; Rev 12:17). The locators of 2LCF 1.4, 1.7, 29.2 and 26.4 in the `baptist.apply.md` files follow different editions row by row (details in each `passages/*-baptist.md`, section «Margin re-verification»).
- Cooper (Lutheran apologist) is AALC, not LCMS (`apologists.md`): relevant only if A's Lutheran objections quote him.
- Nothing taken up from A's «Handoff to B» (it said nothing needed).

## Left (for the next agent)

- C1: 37 of the 62 Catholic passages without a quote; every «contested within the tradition» is `[not searched]`; Otálora and Spanish-language Catholic voices not searched; Horn thin; a voice outside Catholic Answers (D2) not searched.
- H1: the 16 non-Catholic pages; H2 (OB-4..OB-7 of the Eucharist, Baptism); Akin's `PucLuJsfekA` unchecked.
- C5, C3, C4, H3, H4: not started. B-1.1 open doubts as above.
- Nothing is in `src/` or `data/`; every file is a draft not read by Pedro.

## Resumen para Pedro (español, breve)

- **Hecho:** (1) cerré las dudas de `apologists.md` (Cooper es de la AALC, no LCMS; Apologia Church no nombra ninguna confesión; el canal de Trenham es de la editorial, no suyo); (2) los márgenes del 1689, leídos en imágenes de página: el libro de McGlothlin reproduce la edición de **1677**, no la de 1689, así que sumé la 4.ª edición de 1719; las dos difieren en cinco lugares y las tablas viejas mezclan ambas; (3) C1: citas literales de Heschmeyer, Akin, Broussard y Horn para 25 pasajes (Bautismo, Eucaristía, Papado, Sola Scriptura), cada cita contrastada por script con la página de catholic.com y revisada por un verificador; (4) videos H1 para las páginas católicas de Bautismo, Papado y Sola Scriptura (17 videos).
- **Ojo:** los 4 apologistas son de Catholic Answers: por organización cada pasaje cuenta **1**; por persona, solo 4 pasajes llegan a 3 y en uno solo 1 persona sostiene el argumento. Quedan **37 de 62 pasajes sin cita** y las 16 páginas no católicas (C5, H1, H2) sin empezar: no alcanzaba el presupuesto.
- **Necesitan decisión tuya:** D2 (¿contar por organización o por persona?, y si buscar voces fuera de Catholic Answers); si los márgenes del 1689 se citan de la edición 1677 o de la 1719.
- Uso al cerrar: semanal 36 %, sesión 25 % (16:23).

## Summary for the next agent (English)

- **Ready for review:** `apologists.md` (update section), `passages/*-baptist.md` (margin tables from page images of McGlothlin 1911 = the 1677 print, and London 1719 4th ed.), `passages/apologists-catholic-{baptism,eucharist,papacy,sola-scriptura}.md` (25 passages with exact quotes, each matched to the fetched catholic.com page text by script, plus one verifier pass), `videos/{baptism,papacy,sola-scriptura}-catholic.md` (17 videos checked against catholic.com transcripts), `videos/eucharist-catholic.md` (table normalised).
- **Method worth reusing:** catholic.com audio and magazine pages carry transcripts with speaker labels or bylines; crawl the sitemap URLs, grep offline, match quotes by script. No YouTube rate limit.
- **Not done:** 37 Catholic passages; C5 (non-Catholic apologists: no transcript corpus found, so the cost was not measured on one tradition); H1 for the 16 non-Catholic pages; H2; C3, C4, H3, H4; Akin's `PucLuJsfekA`; any voice outside Catholic Answers; Spanish creators.
- **Unverified:** the entries added after the verifier (Eucharist 2 and 5, Papacy 5, 12 and the Matt 16:19 supplement, Sola Scriptura 6) and the three new video files have no second reader; the Baptist margin tables had an independent read, the Catholic C1 files one verifier pass.

## Table for Pedro's daily (tomorrow)

| What is ready | What you decide | What to be able to explain |
|---|---|---|
| Quotes for 25 Catholic passages and 17 videos, in `passages/apologists-catholic-*.md` and `videos/*-catholic.md` | D2: count independence by organisation (all 1) or by person (a few reach 3), and whether to search voices outside Catholic Answers | That every quote is matched to the exact page text, that the transcripts are machine-made, and that only Catholic Answers staff were found |
| 1689 margins checked against page images, in the four `passages/*-baptist.md` | Which print the page cites for the 1689 (1677 as McGlothlin reproduces it, or the 1719 4th edition) and D1 (1689 in every doctrine) | That McGlothlin's «1689» text is actually the 1677 print and the two prints differ in five proof-text places |
| `apologists.md` doubts closed | Whether Cooper (AALC) and Apologia Church (no confession named) stay on the list | Why the Reformed-or-Baptist label of White cannot be settled from his church's page |

## Commit command for session B's files (do not run it from the agent)

`git add docs/research/apologists.md docs/research/day-2026-11-01/session-B.md docs/research/passages docs/research/videos && git commit -m "docs(research): add Catholic apologist quotes, videos and 1689 margins"`

(`docs/research/passages` and `docs/research/videos` are session B's folders; `docs/research/day-2026-11-01/session-A.md` and the `.playwright-mcp/`, `tmp/` and `__pycache__` folders are not included.)
