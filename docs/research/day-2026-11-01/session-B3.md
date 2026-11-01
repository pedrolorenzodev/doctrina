Status: draft, NOT verified by Pedro

# Session B3 («voices», round 3) log, 2026-11-01 night

Lane: `docs/research/passages/**`, `docs/research/videos/**`, `docs/research/apologists.md`, `docs/research/youtube-covers.md`, this log. Continues `session-B.md` and `session-B2.md`. Cap: weekly 45 % inclusive (Pedro, per moment). Effort: medium (Pedro's experiment); verifiers at high.

## Progress

- [x] **C3** parallels for every passage: `passages/parallels-final.md` (the source decision, edition, licence by territory, attribution line, rules, limits) and `passages/parallels-data.json` (231 passages of the 20 pages; **65** with parallels, **164** pairs, 82 flagged `coarse`, 30 cross-book, **129** pairs confirmed by an independent second harmony). Source: Robertson's harmony (1922, section level, Project Gutenberg #36264) cross-checked against Stevens–Burton (1893). Verifier: `passages/verification-b3-1.md` (8 wrong items; 15 pairs removed; titles and the `coarse` definition corrected; Stevens–Burton cross-check done).
- [x] **H4** YouTube terms recheck: `youtube-covers.md`, «Recheck 2026-11-01». No revision-history entry after 1 June 2026 touches covers, embeds, attribution or the 30-day rule; three pages' «Last updated» moved to 2026-11-01 without an entry (not compared word for word).
- [x] **H3** `videos/small-channels.md` (20 channels, affiliation from each channel's own text). Verified on 8 of them (`passages/verification-b3-2.md`); the corrections are applied. The other 12 rows were not re-read by a verifier.
- [~] **C5 pilot** (Baptism): Lutheran (entry 4), Reformed (entries 4 and 17), Orthodox (entry 1) files written; Baptist: no on-point quote found (`apologists-baptist-baptism.md` records the search). Verifier `passages/verification-b3-2.md` covered the Lutheran, Reformed 17 and Orthodox files; **Reformed entry 4 was added after it and has no verifier**.
- [ ] C5 beyond the pilot, Papacy, Sola Scriptura, Eucharist: not started. Smaller closings (C1's 11 passages, Ortlund's Supper video vs the 1719 text, H1 thin pages, H2, C4): not started.

## Usage checks (session / weekly)

- 18:24 s49/w40 · 18:26 s50/w41 · 18:29 s51/w41 · 18:32 s53/w41 · 18:35 s54/w41 · 18:37 s56/w42 · 18:39 s57/w42 · 18:42 s59/w42 (the clock `date` moved slowly relative to the session: times are the tool's readings).
- The reading is shared with session A3 and the Codex session. The two verifier runs were about 199k and 120k subagent tokens.

## Subagents (Sonnet, one at a time, `effort: "high"` each)

| # | Brief | Result |
|---|---|---|
| 1 | `parallels-final.md` and `parallels-data.json` (`passages/verification-b3-1.md`): section parse, passage list, rules, Stevens–Burton cross-check, source claims | 8 wrong items: 6 groups of pairs (13) not the same event or saying, titles truncated/polluted, the `coarse` description; all applied |
| 2 | The three Baptism pilot files and `videos/small-channels.md` (`passages/verification-b3-2.md`) | 4 wrong items (a dangling pointer, the Orthodox speaker «not named», «the only video», a heading) + 5 flags; all applied |

## Effort measurement (wrong items per verifier, session at medium effort)

- `parallels-final.md` + `parallels-data.json`: **8** wrong items in 1 data file and 1 prose file (178 pairs and ~25 prose claims checked). Below the ~20 line.
- Baptism pilot files (3) + `small-channels.md` (8 of 20 rows re-read): **4** wrong items + 5 flags. Below the ~20 line.
- Not measured: `apologists-reformed-baptism.md` entry 4, `youtube-covers.md` recheck (no verifier).
- Reading: nothing here suggests going back to high effort; but these were small files (previous nights' files had 14–21 per file at larger size).

## C5 pilot: cost and availability (the measurement Pedro asked for)

- **Cost per passage:** a transcript of one video takes about 35 s with `transcript.js` (6 videos: 3 + 3 minutes); one Sonnet verifier per 3 files cost about 120k subagent tokens; the research itself (searching the transcripts by keyword, extracting quotes by script) was a few tool calls per passage. The whole C5 pilot moved the weekly reading by about 1 point (40→42 across C3 + H3 + H4 + C5 together); not separable.
- **Availability of quotes** (Baptism, 4 traditions, 1–2 entries each): **Lutheran 1 of 1** (Cooper, 1 person); **Reformed 2 of 2** (Sproul, 1 person); **Orthodox 1 of 1** (one speaker, «Father Josiah» by the description, surname inferred); **Baptist 0 of 1** (three Ortlund videos, none touches the printed passages). **In no entry were three persons reached.** The corpus is one video per tradition per topic (B2's H1 files), so the independence criterion (three persons) cannot be met for the non-Catholic pages from videos alone; it needs books or articles (White, Wilken, Fiene, De Young, Damick have none on Baptism in the video searches).
- **Match rate to the page entry:** the entries cite a passage «for» a point (e.g. 1 Cor 7:14 for the children's holiness); a video quote fits only when the creator happens to treat that verse: Cooper's «Five Proofs» covers 1 of the 9 Lutheran entries; Sproul's two videos cover 2 of the 22 Reformed entries (Col 2:11–12 and 1 Cor 7:14; Acts 16:33 is on a different argument).
- **Estimate to finish the Baptism set** (not a forecast of budget, an inventory): of the 16 non-Catholic pages' 167 passages, the pilot suggests roughly 10–20 % would get one quote from videos already in `videos/*.md`, almost none three persons. Reaching three persons needs another source type (books, articles, long-form transcripts) that this lane has not yet found.

## Agent's calls

- **C3 source: Robertson (section level) with Stevens–Burton as the cross-check; OpenBible/TSK/STEPBible not used for «Pasajes paralelos».** Reason: the rule is «same event or saying», and the cross-reference sets are thematic (the predecessor measured it; STEPBible's data is TSK-based with mixed licences). Robertson's text is public domain in the US but not free in Mexico until 2035 (life + 100, `[snippet]`), so the pairs that Stevens–Burton (free everywhere) also gives are marked `confirmedBy`; the 35 pairs without it (30 cross-book, 5 Gospel) should stay out of the launch data until Pedro decides.
- **Coarse flag and section-level data** shown conservatively (82 of 164 pairs): the page may show only non-coarse parallels by default.
- **Pairs removed after the verifier:** W1–W6 (13 pairs) and Matt 25 against Luke 21:33 (2 pairs).
- **The chapter-only refs (`John.6`, `1Cor.12`, `1Cor.5`, `Matt.24`) give no parallels** by rule.
- **H4:** the «Last updated» lines that moved to 2026-11-01 were not read as changes of rules (no revision-history entry); a word-for-word comparison with 2026-10-21 was impossible (the earlier text is not saved).
- **H3:** the affiliation is only what a channel says about itself; «Catholic» for Esteban Munilla Aguirre is an inference, Dyer Unfiltered's affiliation is not stated, De Fe Luterana does not claim to be Lutheran; Winger is the speaker of the Hosanna video by its description.
- **C5 pilot selection:** one entry per tradition for Baptism, picked where a video already read had a transcript on the same verse (Lutheran Rom 6:4; Reformed Col 2:11–12 and 1 Cor 7:14; Orthodox John 3:5; Baptist the single entry). Not picked at random: the pilot measures availability **where the best chance exists**, so the real rate is lower.
- **Reformed 1 Cor 7:14, first quote dropped** (the verifier: «it» has no antecedent alone).
- **Stop (agent's call, stated so nobody reads it as the cap forcing it):** the last weekly reading was **42 %** (18:42); from 18:43 the usage endpoint answered HTTP 429 on every retry for about two minutes (three agents poll it), so the cap could not be read; the cap (45 %) was **not** reached. I stopped there because the rest of C5 first needs Pedro's decision (the pilot shows videos alone cannot reach three persons per passage) and the small closings each need a verifier cycle of about one point; with the endpoint unreadable and a 3-point margin I did not start one.

## Shared choices

- The Stevens–Burton OCR (`archive.org/details/harmonyofgosp00stev`, the Princeton copy, plain text through `…/download/harmonyofgosp00stev/harmonyofgosp00stev_djvu.txt`) is good enough for section-level checks (the verifier read all 29 sections), not for a full machine parse (it parsed 137 of ~190 sections).
- `transcript.js` runs **one instance at a time** (a second copy fails on the browser profile lock): run it sequentially.
- (inherited) 1689 margins from the 1719 fourth London edition; catholic.com transcripts at `https://www.catholic.com/audio/<sp|drk|tjap|ddp>/<slug>`.

## Handoff to A3

- None asked. If A3's Baptism/Eucharist dossiers reference a parallel, `passages/parallels-data.json` is the source (section-level, flags as above).
- `apologists.md` was **not** updated by this session; the Orthodox speaker point («Father Josiah» in the description) and the small-channels affiliations are in `videos/` only.

## What is left

- C5: the rest of Baptism (Lutheran 8, Reformed 20, Orthodox 9 entries), Baptist none found, and all of Papacy, Sola Scriptura, Eucharist (167 passages in total); the three-person criterion needs a source type other than videos.
- C3: Pedro's decision on the 35 pairs without a second source, and on showing coarse pairs; the attribution line (K3).
- H4: before launch, a word-for-word reading of the three pages dated 2026-11-01 and the brand site's minimum size for the YouTube icon.
- H3: 12 channel rows without a verifier; the Guadalajara church's 1689 adherence; owners of Dyer Unfiltered, La Fe de la Iglesia, Dogma vs Reforma.
- Not started: C1's 11 passages, Ortlund's Supper video against the 1719 text, H1 thin pages, H2, C4.
- Nothing is in `src/` or `data/`; every file is a draft not read by Pedro.

## Resumen para Pedro (español, breve)

- **Hecho:** (1) **Paralelos (C3):** los 231 pasajes procesados; 65 tienen paralelos (164 pares) tomados de la armonía de Robertson (1922) y confirmados con otra armonía libre en todos lados (Stevens–Burton) en 129 pares. Verificador: 8 errores, ya corregidos (saqué 15 pares que no eran el mismo episodio). (2) **YouTube (H4):** no hay cambios de reglas sobre portadas, embeds ni atribución desde junio de 2026. (3) **Canales chicos (H3):** 20 canales con su afiliación según ellos mismos; ojo, un cura católico (Munilla) está en la página ortodoxa y «De Fe Luterana» tiene 3 suscriptores. (4) **Apologistas no católicos (C5), piloto de Bautismo:** 4 archivos; hay cita en luterano, reformado y ortodoxo, ninguna en bautista; **en ningún caso llegué a tres personas**.
- **Ojo:** Robertson no es libre en México hasta 2035; por eso marqué los 35 pares que solo salen de él. Con videos solos no se llega a tres personas por pasaje en las páginas no católicas: hace falta otro tipo de fuente (libros, artículos).
- **Necesitan decisión tuya:** si los paralelos «coarse» (82) se muestran; si los 35 pares sin segunda fuente quedan afuera del lanzamiento; si seguimos C5 con videos aunque no se llegue a tres personas.
- Uso al cerrar: ver el último chequeo arriba.

## Summary for the next agent (English)

- **Ready for review:** `passages/parallels-final.md` + `parallels-data.json` (verified once; Stevens–Burton cross-check in `confirmedBy`), `youtube-covers.md` (recheck appended), `videos/small-channels.md`, `passages/apologists-{lutheran,reformed,orthodox,baptist}-baptism.md` (pilot), verification reports `passages/verification-b3-{1,2}.md`.
- **Method worth reusing:** a script that parses Robertson's «Analytical Outline» into sections, then computes the parallels (rules in `parallels-final.md`); the verifier recomputed it independently; a quote extractor over `transcript.js` files (start/end strings, cue time computed); the channel's own description via `yt-dlp -J --flat-playlist --playlist-items 1 https://www.youtube.com/@<handle>/videos`.
- **Not done:** see «What is left». **Unverified:** the licence law (Mexico, Spain, Latin America), Robertson's death date and the Princeton catalogue wording (snippets), the 12 unread channel rows, Reformed entry 4.

## Table for Pedro's daily (tomorrow)

| What is ready | What you decide | What to be able to explain |
|---|---|---|
| Parallels for 65 of the 231 passages (`passages/parallels-data.json`) | Show the 82 «coarse» pairs or not; keep out the 35 pairs without a second source; the attribution line | That a parallel is the same event or saying in a harmony of the Gospels, not a thematic cross-reference; that two independent harmonies agree on 129 pairs; that Robertson is not free in Mexico until 2035 |
| YouTube recheck and 20 small channels (`youtube-covers.md`, `videos/small-channels.md`) | Whether to drop the Munilla video from the Orthodox page and the De Fe Luterana videos from the Lutheran one | That nothing changed in YouTube's rules about covers, and that affiliations come from each channel's own text |
| Baptism pilot of the apologists layer for four traditions | Whether to continue C5 with videos when three persons are not reachable | That Baptist has no quote and that no entry reached three persons |

## Commit command for session B3's files (do not run it from the agent)

`git add docs/research/day-2026-11-01/session-B3.md docs/research/passages docs/research/videos docs/research/youtube-covers.md && git commit -m "docs(research): add parallels data, small channels and C5 pilot"`

(Only the files this session touched: the whole `passages` and `videos` folders are session B's; do **not** add `docs/research/doctrines`, `sources`, `neutral`, the `*.objections.md` files, `session-A3.md`, `.playwright-mcp/`, `tmp/` or the `__pycache__` folder. If A3 or Codex wrote anything inside `passages/` or `videos/` it would be included: none was seen.)
