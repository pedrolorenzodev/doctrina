# Debate objections pilot (Baptism)

Test, on one doctrine, the layer decided on 2026-10-20 ("Objections from debates", `DECISIONS.md`): objections taken from the most famous debates and apologetics, filtered by frequency and by the other side's answer, anchored in the objecting tradition's official texts. If the process yields good objections, it extends to every doctrine.

## Plan (/plan-run, 2026-10-20)

- **Type:** `research-fanout` (last validated 2026-10-17), then `verification-pass`.
- **Goal and done-criterion:** for Baptism, objections raised in debate against the Catholic position, each with: its wording; where it is raised (at least three independent debates, books or articles, with names, dates, URLs, short quotations only); the Catholic apologists' answer to it (proof the other side takes it seriously); the official text of the objecting tradition it rests on, verbatim with locator, from our tradition maps; overlap with the official-layer objections OB-1 to OB-7 in `docs/research/doctrines/baptism/catholic.md`; and a verdict (passes / fails, and which criterion). Done when the three group files say "done", the verification pass is applied, and Pedro has a short Spanish summary to judge whether the process gives the objections he hears in real debates.
- **Bounded by:** DECISIONS 2026-10-20 "Objections from debates…", "Popular objections: a labelled tier…", "Objections: four objector texts, a deep answer", "Harsh language…"; 2026-10-17 (don't equalise objection counts, don't fill from outside); 2026-10-15 "Who speaks for each tradition" (Baptist = BF&M and New Hampshire; Pentecostal = Assemblies of God only; Reformed = Westminster family; 1689 out of the column) and "Which texts each column quotes"; 2026-10-09 licensing (copyrighted texts: short quotations plus a link).
- **Out of scope:** writing site copy; answers to the objections beyond locating the Catholic apologists' answer; other doctrines; objections against non-Catholic positions; the mark's visual design.
- **Setup:**

  | Role | Model · effort | Writes | Starts after |
  |---|---|---|---|
  | Coordinator (this session) | — | `docs/research/doctrines/baptism/debate-objections/BRIEF.md`, this file | now |
  | A · Baptist and Assemblies of God | Opus · high | `…/debate-objections/baptist-ag.md` | BRIEF |
  | B · Reformed and Lutheran | Opus · high | `…/debate-objections/reformed-lutheran.md` | BRIEF |
  | C · Orthodox | Opus · high | `…/debate-objections/orthodox.md` | BRIEF |
  | Verifier | Sonnet | `…/debate-objections/verification.md` | A, B, C |
  | Apply + summary | coordinator | the three files; summary in this file | verifier |

- **Expected cost:** three Opus web agents for ~30–40 min ≈ 15–25 session points and ~3–4 weekly; verifier ≈ 3–5 session points. One window. Weekly now 57 %, Pedro's ceiling for Wed 06:00 is 80 %.
- **Risks and open questions:** debate videos rarely have readable transcripts, so the agents lean on published transcripts, books and major apologetics sites (dates and URLs required); "famous" is judged by frequency across independent sources, never by views or comments; the shared WebSearch quota may run out (fetch directly); the Orthodox side may yield few debate objections (that is a finding, not a gap to fill).
- **Checks during the run:** usage-guard (Claude caps: 65 % no new agents, 68 % checkpoint and stop); mtime of each file every 15 min; no `[memory]` text counted as a source.

## Progress

- 2026-10-20 16:25 · Approved by Pedro («lanzate esos agentes»). BRIEF written; agents A, B, C launched (Opus); usage monitor armed (threshold 68 %). Usage at launch: session ~7 %, weekly 57 %.
- 16:43 · A, B, C done. Candidates 26, pass 9 (Baptist/AG 4 of 11, Reformed/Lutheran 2 of 8, Orthodox 3 of 7). Findings: no published Catholic-vs-other debate on Baptism with a transcript in any group (sources are sermons, tracts, books, seminary and ministry sites); most passing objections repeat the official layer (OB-1, OB-2, OB-6a/b, OB-7); proponents are often outside the column's line (Particular Baptists, Orthodox anti-ecumenists) or attack "baptismal regeneration" without naming Rome; one objection targets a superseded position (limbo). Verifier (Sonnet) launched. Usage 16:34: session 20 %, weekly 59 %.
- 16:58 · Verifier done (`verification.md`): of 9 passes, 6 hold (BA-1, BA-3, BA-5, DO-RL-1; OD-2 and OD-4 weak), 3 become fails (BA-2, DO-RL-4, OD-1); 20 corrections listed, including a rule for counting networks (an author quoting another) and historical theologians. Corrections not applied yet: the second pass may replace these files.
- 16:58 · Pedro on the findings: (1) the search missed the many organized debates on YouTube between Catholics and evangelicals with popular apologists and large audiences ("too strict about 'public debate'"); (2) agreed: each objection worded as it is heard in popular debate (recorded in DECISIONS). Proposed second pass (awaiting ok): YouTube debates first (views pick which debates count as famous, not which objection is best), starting from the objections Catholic apologists answer, with two added criteria (proponent from the column's line; aimed at current Catholic teaching); one agent tests transcript access for 10 minutes first.

- 17:00 · Second pass launched (Pedro: use the YouTube transcript process; agents have Playwright and yt-dlp, recorded in `agent-ops.md`): `BRIEF-2.md`; D (Baptist/AG) and E (Reformed/Lutheran/Orthodox), Opus; usage monitor re-armed. yt-dlp search and auto subtitles tested without login on a Trent Horn–Gavin Ortlund baptism dialogue (148k views).

- 17:12 · Second pass done, incomplete. D (Baptist/AG): 34 debates found, 10 read (8 en, 2 es); 2 of 9 pass (D-1 "baptism doesn't save, you're baptized because you're saved"; D-6 "show me one baby baptized in the Bible"). E (Reformed/Lutheran/Orthodox): 37 videos, 18 read; 2 pass plus one weak (E-1 ex opere operato; E-4 Orthodox rebaptism, strict current only; E-7 infant communion, practice). Blocked: from ~17:00 YouTube rate-limited the IP (429, "sign in, not a bot"); ~17 Spanish debates unread (Luis Toro 1.2M/579k/521k, Alex Apologeta, Rincón Apologético, Salvador Barragán). Finding: no debater read belongs to the column's line (non-denominational evangelicals, Ortlund American Baptist, Castro Church of God); the "line" criterion would exclude real debate. Candidate merge: Acts 2:38, 1 Pet 3:21, Mark 16:16, 1 Cor 1:17, John 3:5 as one move ("re-reading the 'baptism saves' verses").

- 18:05 · Third pass (F, Spanish YouTube) done: 25 videos read (16 by yt-dlp until a 429 at 17:23, then 12 by Playwright with Pedro's saved session, no block). Now passing (independent people): «Muéstreme en la Biblia un solo bebé bautizado» (10); «Un bebé no puede creer ni arrepentirse» (12); new «Los niños no tienen pecado» (9, anchored BF&M III); «Bautizar es sumergir» (5); «El bautismo no salva: lo que salva es la sangre de Cristo» (12); «El ladrón en la cruz no se bautizó» (7, but CCC 1257–1260 already allow it); grouped verses objection (6). Near misses: «para vuestros hijos», Acts 16 households, early Church (general anchor or aimed at an apologist). Catholic answers heard that contradict official teaching (Toro «solamente símbolo» vs Trent VII can. 2; immersion as John's baptism vs CCC 1239) must not reach the site: answers come from official texts first. Scripts saved in `~/.doctrina-youtube/`.

- 18:40 · Pedro kept all seven passing objections (two infant-baptism ones separate). Verification of the Spanish pass: all seven still pass (counts 7, 10, ≤11, 9, 6, 5, 6); corrections applied. Playbook drafted: `docs/playbooks/debate-objections.md`, awaiting Pedro's ok. Usage at the end: session ~60 %, weekly ~65 %.

## Retro
(filled by /retro)
