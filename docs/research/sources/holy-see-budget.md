# Holy See quotation budget across the pages (F7, session A3, 2026-11-01 night)

Status: draft, NOT verified by Pedro

Research only: word counts of what the **registry** (`src/content/registry/citations.ts`) already stores for the works whose editions carry `licence: "short-quote"` in `src/content/registry/editions.ts`, restricted to the citation ids that appear in at least one page file under `src/content/pages/`. Nothing in `src/` was changed.

## Progress

- 2026-11-01 18:3x: counted by script (below); no verifier yet; the rule against which to read the numbers is not in the repo (see «Rules found»).

## Method (and its limits)

1. `citations.ts` entries (750; 12 of them have quoted keys such as `"STSA~el"`) were split at `^  ID: {`; per entry the `work` and, for each excerpt, the `es: { text: "…" }` and `en: { text: "…" }` strings were read; words = whitespace-separated tokens. Latin and German texts were **not** counted (the registry stores them for some entries; they are not shown as quotations on the pages read, not checked).
2. A citation counts as «used» when its id appears as a quoted string in any `src/content/pages/**/*.ts`. A citation used on several pages is counted **once** here: the count is the quantity of distinct text the site holds, not the number of times it is displayed.
3. The licence of a work is the licence of any of its edition rows (a work with one `short-quote` edition row is counted). `bfm-2000`, `ag-sft` and `oros-1755` carry `short-quote` but are not Holy See texts (marked).
4. Words in `es` are what the page shows for the Spanish edition; `en` is the English stored beside it. These are the registry's counts, not those of the page strings (a page may show a shorter fragment: not compared).
5. **Not done:** per-page counts (the 20 pages), counts of the page-level `quote` strings that do not go through a citation id, and the apologists' quotations.

## Rules found in the repo (the budget has no number of its own)

- `docs/research/glossary-terms.md` l. 18: «CEC, CIC, Vatican II, CDF texts: © LEV, short quotes + link.» (no word limit).
- `docs/research/sources.md` l. 80: for the CCC in English, the **USCCB allows < 5,000 words with a notice; beyond that, a licence and royalty**; LEV holds the worldwide rights; USCCB refused small web projects before. This is the only number in the repo and it concerns the English CCC.
- The «≤ ~40 words per fragment, official URL, clipped quote ends with `…`» of this session's brief is the rule A and A2 applied to `sources/english-quotes.md`; the third column below counts fragments over 40 words against that rule so the importer can see how far the registry text goes beyond it. **Whether 40 words is the site's rule is Pedro's decision**, not recorded.

## Table (distinct citations used on at least one page)

| Work | Ids used | Words `es` | Words `en` | Pages | Which pages | Fragments over 40 words `es` (id, words) | Fragments over 40 words `en` |
|---|---|---|---|---|---|---|---|
| `cec` | 135 | 5156 | 395 | 5 | baptism/catholic, eucharist/catholic, eucharist/doctrine, papacy/catholic, sola-scriptura/catholic | 47 fragments: the 32 listed plus CEC1128 62, CEC1213 101, CEC1216 60, CEC1252 68, CEC1267 60, CEC1306 51, CEC1336 41, CEC1360 66, CEC1373 51, CEC1378 61, CEC1400 48, CEC582 56, CEC85 48, CEC882 73, CEC889 63 (longest CEC1261 116) (V7 recount; earlier list: CEC552 51, CEC834 47, CEC881 42, CEC2035 53, CEC76 70, CEC83 83, CEC105 52, CEC108 75, CEC113 79, CEC120 68, CEC2041 67, CEC2181 52, CEC405 41, CEC1127 76, CEC1250 75, CEC1256 92, CEC1257 81, CEC1257 42, CEC1258 51, CEC1260 43, CEC1261 116, CEC1269 60, CEC1272 48, CEC1275 47, CEC1085 73, CEC1346 41, CEC1353 81, CEC1375 54, CEC1375 71, CEC1379 57, CEC1401 62, CEC1457 64) | CEC1213 70, CEC1216 41, CEC1375 55, CEC1375 56 |
| `dei-verbum` | 12 | 1398 | 41 | 1 | sola-scriptura/catholic | DV5 47, DV7 154, DV8 46, DV8 53, DV8 79, DV9 103, DV10 80, DV10 161, DV11 91, DV11 48, DV12 154, DV21 113, DV22 72 | DV9 41 |
| `cic` | 49 | 1091 | 27 | 5 | baptism/catholic, eucharist/catholic, eucharist/doctrine, papacy/catholic, sola-scriptura/catholic | CIC750 50, CIC752 49, CIC842 44, CIC845 46, CIC849 64, CIC861 43, CIC869 46 | — |
| `lg` | 12 | 1103 | 13 | 4 | baptism/catholic, eucharist/catholic, papacy/catholic, sola-scriptura/catholic | 7 fragments (the earlier 6 plus LG12 60) (V7 recount; earlier list: LG18 69, LG22 58, LG25 216, LG25 83, LG25 46, LG16 48) | — |
| `cdf-primado` | 10 | 557 | 0 | 1 | papacy/catholic | CDFP3 52, CDFP12 47, CDFP15 46 | — |
| `ur` | 4 | 443 | 243 | 3 | baptism/catholic, papacy/catholic, sola-scriptura/catholic | UR3 48, UR6 75, UR21 199, UR22 92 | UR21 211 (V7 recount; earlier list: —) |
| `uus` | 8 | 502 | 26 | 2 | papacy/catholic, sola-scriptura/catholic | UUS94 92 (V7 recount; earlier list: —) | — |
| `mysterium-fidei` | 6 | 347 | 93 | 1 | eucharist/catholic | MF11 50, MF32 56, MF46 69 | — |
| `ede` | 7 | 271 | 74 | 1 | eucharist/catholic | EdE12 47 and 46 (plus the earlier one) (V7 recount; earlier list: EdE12 46) | EdE12 46 |
| `bfm-2000` (not Holy See: © SBC) | 7 | 213 | 202 | 6 | baptism/baptist, eucharist/baptist, eucharist/doctrine, papacy/baptist, sola-scriptura/baptist, sola-scriptura/catholic | BFMpre2000 64, BFM7 105 | BFMpre2000 59, BFM7 94 |
| `mysterium-ecclesiae` | 2 | 190 | 0 | 1 | papacy/catholic | ME2 49, ME3 70 | — |
| `sacramentum-caritatis` | 3 | 181 | 0 | 1 | eucharist/catholic | SCa13 45, SCa66 48 | — |
| `sc` | 4 | 179 | 42 | 2 | baptism/catholic, eucharist/catholic | SC7 48, SC47 86 | SC47 42 |
| `oros-1755` (not Holy See: public domain in print (registry licence field says short-quote: to check)) | 2 | 145 | 148 | 1 | baptism/catholic | OROSb 115 | OROSb 118 |
| `sempiternus-rex` | 1 | 137 | 0 | 1 | papacy/catholic | SRX 55 | — |
| `verbum-domini` | 3 | 134 | 0 | 1 | sola-scriptura/catholic | VD19 54, VD29 51 | — |
| `florence-cantate` | 1 | 129 | 0 | 1 | eucharist/catholic | FLOcd 129 | — |
| `divino-afflante` | 1 | 112 | 0 | 1 | sola-scriptura/catholic | DAS 45, DAS 41 | — |
| `cdf-note-1998` | 1 | 149 | 0 | 2 | papacy/catholic, sola-scriptura/catholic | CDF98 45 (V7 recount; earlier list: CDF98 45) | — |
| `gs` | 2 | 69 | 0 | 1 | papacy/catholic | GS76 43 | — |
| `donum-veritatis` | 2 | 62 | 0 | 4 | baptism/catholic, eucharist/catholic, papacy/catholic, sola-scriptura/catholic | — | — |
| `oe` | 2 | 48 | 0 | 1 | eucharist/catholic | — | — |
| `pf-1989` | 1 | 43 | 0 | 1 | sola-scriptura/catholic | PF1989 43 | — |
| `ogmr` | 1 | 36 | 0 | 1 | eucharist/catholic | — | — |
| `pcpcu-2001` | 1 | 26 | 94 | 1 | eucharist/catholic | — | PCPCU 75 |
| `dh` | 1 | 24 | 0 | 1 | sola-scriptura/catholic | — | — |
| `jp-audience-1991` | 1 | 15 | 0 | 1 | eucharist/catholic | — | — |
| `gestis-verbisque` | 1 | 17 | 0 | 1 | baptism/catholic | — | — |
| `jp-audience-1989` | 1 | 115 | 0 | 1 | eucharist/catholic | JP89 88 (V7 recount; earlier list: —) | — |

**Holy See texts only (all rows except the two marked):** 12,534 Spanish words and 1,048 English words (recount by V7) held across the used citations. The English CCC alone is 395 words (of the USCCB's 5,000).

## What the numbers say

- The English CCC in the registry is far below 5,000 words; the Spanish CCC (5,156 words after the recount, 135 ids) is the largest block and 47 of its fragments exceed 40 words (the longest: CEC 1261 with 116 words, CEC 1213 with 101, CEC 1256 with 92, CEC 83 with 83).
- Dei Verbum has 13 Spanish fragments over 40 words (1,398 words in 12 ids), the densest ratio; Lumen gentium 7 of 12, *Unitatis redintegratio* 4 of 4.
- Nothing here says a quotation is excessive: the repo has no limit to measure against except the English-CCC figure. The first decision for Pedro is the per-fragment and total rule for Spanish Holy See texts (LEV), the second whether to ask for the permissions drafted in `permission-drafts.md` before launch.

## Handoff

Pages are generated: a rule on fragment length would apply to the dossiers/converter, never by hand in the pages. Outside `docs/research/`: nothing was changed.
