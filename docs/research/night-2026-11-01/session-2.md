Status: draft, NOT verified by Pedro

# Research night 2026-11-01 · Session 2 log

Times are the machine clock (`date`) and the usage script's own reading. (An earlier version of this log carried times that were estimated, not read; they were replaced on 2026-11-01 at 02:18.)

## Progress
- Started 01:48. Usage at start: session 7 %, weekly 28 %.
- Order followed: apologists criterion → C4+C2 → A1 (Eucharist, Baptism, Sola Scriptura, Papacy) → C3 → I1+I2 → A5, A9, A3 → H2 (Eucharist·Catholic videos) → C1 pilot (2 passages). **Out of the plan's order, by my call:** C3, I1+I2 and the residues before C1 (cheaper, and C1 needs captions at a rate YouTube limits); C1 only as a pilot, H1 not started.
- Subagents (one at a time, Sonnet): (1) apologists.md, 6 wrong / 8 unconfirmable, corrected; (2) Eucharist objections ×4, 16 wrong across three files, corrected; (3) Baptism + Sola Scriptura + Papacy objections ×12: 42 wrong items (mostly: AI Spanish in guillemets without a label, status lines adapted but tagged «verified there», status lines attached to no block, one wrong attribution WLC 166 → WSC 95, «y el Tratado» in the LCMS art. II line), all corrected; (4) the remaining files (parallels, glossary-gaps, residues, videos, C1 pilot, C4/C2 joins): launched 02:32, about 30 wrong items, all corrected (notably: the C1 locators, a mis-computed preview row in parallels, the CCC 611 footnote, the C20 row of the glossary table, Papacy gap flags).

## Files written (all under docs/research/)
| File | Item | State |
|---|---|---|
| `apologists.md` | criterion (C1/H1) | verified once, corrected; 8 unconfirmable items open |
| `passages/{eucharist,papacy,sola-scriptura}-catholic.md` | C4 | generated from page data + dossier rows; gap flags; CCC-index gap research failed (see file); verified (alignment confirmed, 3 gap flags corrected) |
| `passages/{eucharist,baptism,sola-scriptura,papacy}-baptist.md` | C2 | generated; official per-passage reading: none found in convention texts; 1689 margins from the displaced dossier material, not re-verified; verified once, corrected |
| `doctrines/eucharist/{reformed,lutheran,orthodox,baptist}.objections.md` | A1 | verified once, corrected |
| `doctrines/{baptism,sola-scriptura,papacy}/{lutheran,reformed,orthodox,baptist}.objections.md` | A1 | verified once, 42 wrong corrected; 1 to 2 objections per file; unconfirmable: every Triglot/German/Latin string, Ayala/Waterworth locators, BF&M prints (no page images) |
| `passages/parallels.md` | C3 | OpenBible CC BY 4.0 dataset recommended; preview for 64 passages; verified once, corrected |
| `glossary-gaps.md` | I1 + I2 | carry-over table; verified once, corrected |
| `dossier-residues-2026-11-01.md` | A3, A5, A9 | A5 and A9 answered, A3 partly; verified once, corrected |
| `videos/eucharist-catholic.md` | H2 (Eucharist·Catholic only) | 15 titles checked against captions (14 confirmed, Akin's unreadable); candidates for OB-2, OB-3; none for OB-4..7; verified once, corrected |
| `passages/apologists-catholic.md` | C1 | pilot of 2 passages (John 6, Matthew 16:16–19); neither reaches 3 independent persons; verified once, corrected |

## Usage at the close
02:48 session 34 %, weekly 32 % (cap 37 %: no further item started).

## Usage checks (weekly stays at 28–30 %)
01:48 s7/w28 · 01:50 s8/w28 · 01:52 s9/w28 · 01:55 s10/w28 · 01:57 s11/w28 · 01:59 s12/w28 · 02:01 s13/w29 · 02:04 s14/w29 · 02:07 s16/w29 · 02:09 s17/w29 · 02:11 s18/w30 · 02:13 s20/w30 · 02:15 s21/w30. (Session reset 04:09; weekly reset Wed 17:59.)

## Agent's calls
- **Apologists criterion:** observable proxies (standing in the tradition's institutions, depth, audience) for «fidelity and depth»; Catholic Answers staff counted as one organisation for independence; Ortlund → Baptist recommended with a stated open conflict about the 1689 (DECISIONS 2026-10-15 vs 2026-11-01 item 3); Dyer flagged as most followed but not confirmed representative.
- **caffeinate:** Pedro asked in-session; it was already running (pid 31015, `-dis -t 46800`, about 13 h from about 01:50); nothing launched.
- **C4+C2:** the Catholic files are a join of existing page data and dossier rows (no new doctrine). Baptist «official reading»: none in BF&M/New Hampshire/Abstract (dossier tables, SBC page by search snippet, two searches); the 1689 margin proof-texts are the only per-clause assignment, taken from `baptist.apply.md`, not re-verified (item A6).
- **A1:** the inventory said every non-Catholic dossier had §Objeciones deferred; `eucharist/lutheran.md` already has 11 full objections (not yet on the page) and `eucharist/reformed.apply.md` held 4 retained drafts (used). The other 14 files were built from quotations already verified in other dossiers, not from fresh source reading, plus WCF read on opc.org; this is why they are shorter (2 to 3 objections) than the Catholic pages' 7 to 11, and why several answers say «the dossier has no text on this».
- **A1, texts aimed at Rome:** the Reformed and Lutheran texts rejecting transubstantiation, the Mass sacrifice and adoration are listed as objections to the Orthodox line because Dositheus uses the same terms; flagged in the file for Pedro. Same for the Catholic texts (*Pastor aeternus*, Trent IV) listed as objections to the Protestant lines.
- **1689 Confession:** shown as a separate, labelled answer wherever the convention texts are thin; DECISIONS 2026-10-15 vs 2026-11-01 item 3 left open.
- **C3:** recommended OpenBible.info's CC BY 4.0 cross-reference dataset (344,799 pairs, OSIS references, votes); the preview shows its limits (high-vote pairs are often thematic, not parallels).
- **Verifier lessons applied before the third verifier:** quotations inside marks must be in the dossier they cite; Spanish renderings I wrote are marked AI; tags never promote an AI Spanish or OCR; «shown whole» only when it is.

## What is left (for the next agent)
- C1: 62 passages left (method in `passages/apologists-catholic.md`).
- H1 (videos for the 19 empty pages): not started. H2: Baptism part and the other pages not started.
- Verification: every file of this session has had one Sonnet pass (see each `## Verification`); none has been re-verified after corrections, and none has been read by Pedro.
- A3 leftovers listed in `dossier-residues-2026-11-01.md`.

## Summary for Pedro (español, breve)
- **Listo para importar tras tu revisión:** las 4 objeciones de Eucaristía·Reformada (venían del material guardado del dossier), `apologists.md` (criterio, con dudas abiertas: Dyer, Ortlund, «How to Be Christian», Otálora), `passages/parallels.md` (recomiendo el dataset de OpenBible, CC BY 4.0), `glossary-gaps.md` (7 de los 9 términos vacíos ya tenían dato en `glossary-terms.md`; faltaba pasarlo al JSON).
- **Descubrimiento:** Eucaristía·Luterana ya tenía 11 objeciones completas en el dossier y la página no las importó; el inventario decía que no había nada.
- **Necesitan decisión tuya:** (1) qué hacer con la Confesión de 1689: dos decisiones se contradicen (2026-10-15 la descartó, 2026-11-01 la aplica a todo) y varias respuestas bautistas dependen de eso; (2) si los textos que apuntan a Roma («popish», «papistic») o los católicos que afirman la postura contraria (Trento IV, *Pastor aeternus*) cuentan como objeciones a las otras líneas, porque la regla dice «rechaza en palabras»; (3) dónde ponés la atribución CC BY de OpenBible.
- **Lo que no se hizo:** C1 completo (solo 2 de los 64 pasajes), H1 (videos de las 19 páginas vacías), el resto de H2 (Bautismo). YouTube cortó con 429 y cerré en vez de forzar.
- **Ojo:** los 14 archivos de objeciones nuevos (Bautismo, Sola Scriptura, Papado, Eucaristía Ortodoxa y Bautista) son más cortos que los de las páginas católicas (1 a 3 objeciones) y varias respuestas dicen «el dossier no tiene texto sobre esto»: no es un hueco de la investigación, es lo que los documentos dicen. Todo es borrador; nada pasó a `src/` ni a `data/`.
- Uso al cerrar: semanal 32 %, sesión 34 % a las 02:48 (tope 37 %).

## Summary for the next agent (English)
- **Ready to import after Pedro's review:** `doctrines/eucharist/reformed.objections.md` (carried from `reformed.apply.md` l. 22–124, verified), `doctrines/eucharist/lutheran.objections.md` (index only: the content is `lutheran.md` §4, 11 objections; the page `lutheran.es.ts` has `objections.items: []`), `apologists.md`, `passages/parallels.md`, `glossary-gaps.md`, `dossier-residues-2026-11-01.md` (A5: fix `eucharist/reformed.md:143` imprint to «Johnstone, Hunter, & Co., 1894»).
- **Drafts needing a decision before import:** the other 14 `*.objections.md` (each lists «Agent's calls» and status lines; CCC numbers per Trent canon not assigned for Baptism; ST-PA's CEC 882/891 unchecked). Decisions: the 1689 Confession scope (DECISIONS 2026-10-15 vs 2026-11-01 item 3); whether texts aimed at Rome, or Catholic affirmations, count as objections to the other lines.
- **Fixes the verifiers asked for that remain:** `lutheran.md` «Asymmetry» says «Orthodox 4» but lists five; Dositheus XVII clause translated two ways («especie y figura» in `reformed.apply.md`, «apariencia y figura» in `orthodox.md`): fix one wording before import; LCMS art. II names the Smalcald Articles but not the Treatise.
- **Not done:** C1 for 62 of the 64 passages (method and two worked passages in `passages/apologists-catholic.md`); H1 (19 pages' videos); H2 for Baptism and objections OB-4 to OB-7 of Eucharist·Catholic (no candidates found); C4 CCC-index gap-fill (no usable source found); A3 leftovers (see residues file). YouTube rate limit: yt-dlp 429 after about 20 subtitle requests; use `~/.doctrina-youtube/transcript.js`.
- **Unverified at the page-image level:** every Triglot and Book of Concord German/Latin string, Ayala/Waterworth locators, BF&M prints, the 1689 Spanish (AI).
