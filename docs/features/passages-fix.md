# Pasajes: repeated passages, context ranges and priority order (Pedro, 2026-11-09)

Status: decided with Pedro, to build. Audit: `~/doctrina-research-prompts/pasajes-audit-report.md` (read-only, 503 entries in the 20 pages, proposals only). Brief for the builder: `~/doctrina-research-prompts/passages-fix.md`.

## Intent

The passage pager of every `/doctrinas/<doctrine>/<tradition>/pasajes` page must (1) show each passage once, in the context range it is always cited in, (2) group parallel accounts or very similar evidence in one section where it is strong, (3) start with the passages the tradition uses most in popular debates, then the rest by how many apologists of the corpus cite each.

## Decided by Pedro (2026-11-09, interactive answers)

- **Repeated and overlapping entries** (the four Baptist pages hold most: Baptist Baptism «Mateo 28:18-19», «28:18-20», «28:19-20», «28:19»; «Marcos 1:4» and «1:5» → «Marcos 1:4-5») become one entry; adjacent single verses become one range. Merging never loses a quote (quotes are united by key and URL).
- **Keep** the grouping of parallel accounts or very similar evidence in one section (Catholic Baptism «Mateo 28:19-20 · Marcos 16:15-16», «Romanos 6:3-4 · Colosenses 2:12»), not to be abused. **Apply the strong paralels on the Baptist pages** (baptism of Jesus: Mat 3:13-17 + Mar 1:9-11 + Luc 3:21-22; Great Commission: Mat 28:18-20 + Mar 16:15-16; the Lord's Supper accounts) and **merge only identical or contained entries** on the other pages (no new paralels on Lutheran, Reformed, Orthodox).
- **One canonical context range per central verse, the same on every page** (table «Cross-tradition canonical ranges» of the audit report; four verified in RV1909: Acts 2:37-42, 1 Pet 3:18-22, Titus 3:4-7, Matt 16:13-20; the rest are provisional proposals Pedro reviews on screen). Catholic Baptism must be like the Baptist one for Acts 2:37-42, and 1 Pet 3:21 with the verses before it.
- **Remove the off-topic entries** of the Baptist Baptism and Baptist Eucharist pages that come from the shared Baptist Faith and Message list (Supper verses on the Baptism page and the reverse; they stay on the page of their own doctrine) and **John 1:2 and 1:8** (no baptism in the verse).
- **Pages without a converter path** (Catholic Baptism and Eucharist): Pedro: follow the recommendation, but **do not follow blindly the rule «never hand-edit pages»: if editing the page by hand is quick and risks nothing particular, do it**; if it risks something (for example the hand-written Catholic Baptism citations kept as seeds, matched by exact `refs`), the builder decides and says why. Same for those hand-written citations.
- **Stale attachment bug:** Baptist Papacy entries «Sal 72:17» and «Sal 102:28» carry arguments about Mat 16 and Acts 15 because of old «page entry N» headings: move them to the right entries (with the renumbering that any merge forces on the headings of the research files' data: `data/passages/apologists/*.json` `entries`).
- **Order (option A + B):** the first entries of each page are the list below (Pedro approved all 20 as proposed from memory, no corrections); after them, the rest ordered by the number of distinct apologists of the corpus that cite each entry (more first), ties by the current order. Where a listed range was merged or regrouped, use the merged entry. **Passages missing from a page that Pedro agreed to add** (they need the tradition's own sources, a separate step with research, out of this block): Catholic Baptism Acts 22:16; Lutheran Baptism John 3:5, Acts 2:38, 1 Pet 3:21; Lutheran Sola Scriptura 2 Tim 3:16-17 (at the top); Orthodox Papacy Matt 16:18-19; Orthodox Sola Scriptura 2 Tim 3:16-17 and John 21:25.

## Agreed order (first entries; «de memoria», approved by Pedro)

| Page | Order |
|---|---|
| Baptist · Sola Scriptura | 2 Tim 3:15-17; 2 Pet 1:19-21; Matt 15:9; Acts 17:11; Isa 8:20; Prov 30:5-6; Deut 4:2 and 12:32; Rev 22:18; Gal 1:8-9; John 17:17; Ps 119:105; Matt 22:29; John 5:39; Heb 4:12 |
| Baptist · Papacy | Matt 16:15-19; Matt 18:15-20; Eph 2:19-22; 1 Pet 5:1-4; Acts 15; Eph 1:22-23 and Col 1:18; 2 Thess 2:3-9; Acts 20:28; 1 Tim 3:1-15; 1 Cor 12 |
| Baptist · Baptism | Acts 8:35-39; Matt 28:19-20; Acts 2:37-42; Rom 6:3-5; Col 2:12; Acts 16:30-33; Gal 3:27; Mark 16:16; Acts 8:12; Matt 3:13-17; Acts 18:8; 1 Cor 12:13 |
| Baptist · Supper | 1 Cor 11:23-26; Luke 22:19-20; Matt 26:26-28; 1 Cor 10:16-17; 1 Cor 11:27-29; Heb 9:25-28; Acts 2:41-42; Acts 20:7; Matt 28:19-20 |
| Catholic · Baptism | John 3:5; 1 Pet 3:20-21 (range 3:18-22); Acts 2:38 (range 2:37-42); Mark 16:16 and Matt 28:19; Rom 6:3-4 and Col 2:12; Titus 3:5; Gal 3:27; Acts 16 households; Mark 10:14; Rom 5:12; 1 Cor 6:11 and 12:13 |
| Catholic · Eucharist | John 6:51-58; Matt 26:26-28 / Mark 14 / Luke 22:19-20; 1 Cor 11:27-29; 1 Cor 10:16-17; Mal 1:11; Gen 14:18 and Ps 110:4; 1 Cor 10:21; Heb 7; Acts 2:42; 1 Cor 11:26; Exod 12 and 1 Cor 5:7 |
| Catholic · Papacy | Matt 16:16-19; John 21:15-17; Luke 22:31-32; John 1:42; Matt 10:2; Acts 2:14, 2:37 and 5:29; Matt 18:18 and 28:16-20; John 20:21; 1 Cor 15:5; Eph 2:20 and Rev 21:14 |
| Catholic · Sola Scriptura | 2 Thess 2:15; 1 Tim 3:15; 2 Tim 3:16-17; Luke 10:16; Matt 28:19-20 and Mark 16:15; Jude 3; 2 Tim 1:12-14 and 1 Tim 6:20; Acts 2:42; Matt 18:20; John 20:31 and 2 Pet 1:19-21 |
| Reformed · Baptism | Matt 28:19-20; Acts 2:38-39; Col 2:11-12; Gen 17:7 and 17:9; 1 Cor 7:14; Acts 16:33 and 2:41; Rom 4:11; Gal 3:27; Rom 6:3-5; Acts 22:16; 1 Pet 3:21; Luke 18:15-16 |
| Reformed · Supper | Matt 26:26-28 / Mark 14 / Luke 22; 1 Cor 10:16-17; 1 Cor 11:26-28; 1 Cor 10:3-4; Acts 3:21 and Luke 24:6; Acts 2:42; 1 Cor 5:7-8; Heb 7 and 9; 1 Cor 11:27-32 |
| Reformed · Papacy | Matt 16:18; Matt 16:19 and 18:17-18; Col 1:18; Eph 1:22-23; Eph 5:23-32; 2 Thess 2:3-5; Matt 23:8-10; Eph 4:11-13; 1 Cor 12:28; Acts 15; 1 Cor 1:2 and 12:12-13 |
| Reformed · Sola Scriptura | 2 Tim 3:16-17; 2 Pet 1:19-21; Isa 8:20; Acts 17:11; Rev 22:18-19; Ps 119:105; Ps 19:7-11; John 5:39; Matt 22:29; Luke 24:27 and 24:44; Eph 2:20; Heb 1:1-2; Matt 5:18 |
| Lutheran · Baptism | Matt 28:19; Mark 16:16; Titus 3:4-7; Rom 6:3-5; Eph 5:26; Eph 4:5-6; Matt 23:2 |
| Lutheran · Supper | Matt 26:26-28 / Mark 14 / Luke 22; 1 Cor 10:16; 1 Cor 11:27-29; John 6; 1 Cor 11:26; Heb 10:4-14; Mal 1:11 |
| Lutheran · Papacy | Matt 16:18-19; 2 Thess 2:4; Luke 22:25; John 21:15; Matt 18:18-19; John 20:21-23; Gal 2:7; Matt 18:2 and 1 Cor 3:6 |
| Lutheran · Sola Scriptura | (2 Tim 3:16-17 to add); Ps 119:105; Gal 1:8; Rom 1:16; Titus 1:9; 1 Tim 3; John 20:21-23 and Mark 16:15 |
| Orthodox · Baptism | John 3:5; Matt 28:19; Acts 2:38; Mark 16:16; Col 2:11-12; Acts 19:4 |
| Orthodox · Supper | John 6:54-56; Matt 26:26-28; 1 Cor 11:28-29; 1 Cor 10:17; Luke 22:19; 1 Cor 11:26; John 19:34 |
| Orthodox · Papacy | Gal 2:11; Matt 18:17; Eph 2:19-20; Eph 5:23; Eph 4:11-12; 2 Thess 2:15; Titus 3:10 (Matt 16:18-19 to add) |
| Orthodox · Sola Scriptura | 2 Thess 2:15; 1 Tim 3:15; Rom 3:2; Luke 24:44 (2 Tim 3:16-17 and John 21:25 to add) |

## How it is verified

`npm run verify`; the passages e2e and the page specs; a count of entries per page before and after with the list of merges; no quote lost (compare the number of distinct quotes per page before and after); the first entries of every page equal this table (a check or an e2e); page weight of the Baptist pages; screenshots at 1440 and 390 of a Baptist, a Catholic and a Lutheran page; Pedro's review on the 3101 server before any commit.

## Out of scope

Adding the missing passages listed above (needs the tradition's own sources); new apologist research; the original-language UI.

## Plan / Retro

Plan: brief `~/doctrina-research-prompts/passages-fix.md`, one Sonnet session in a clone; the coordinator merges and restarts the review servers. Retro: (filled when it ends).
