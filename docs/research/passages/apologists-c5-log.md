Status: draft, NOT verified by Pedro

# C5 apologists research log — 2026-11-08

## Progress
- Authorized work is confined to this APFS clone and the named research files. No Git writes, app/data edits, other clones, or external writes.
- Start: 2026-11-08 09:44 UTC (approximate first command). First observed account reading: weekly 34%, window 13%; launch prompt's 24% is not the reading observed here. Shared account: deltas are account-wide, not attributable costs.
- Order call: the explicit Lutheran Baptism pace pilot is the sole exception to Catholic → Baptist → remaining traditions. After the pilot, Catholic first. No subagents.
- Read method, prior tally, tools, feature requirements and relevant decisions. Existing record inventories extracted to scratch; old quoted blocks are preserved. No claim of a new verification of old quotations.
- Scope discrepancy: actual page `refs` rows differ from the prompt's 231 entries. The tables below inventory every current row (including duplicates and overlapping ranges) from `src/content/pages/<doctrine>/<tradition>.es.ts`, read-only. Scripture-list JSON is broader and is not substituted for page rows.
- Baseline people below are an overlap-based audit of existing generated `data/passages/apologists/*.json` records, excluding sections whose explicit depth count is zero. A person on part of a range does not establish exposition of every verse; counts need manual validation. The section tally remains a separate measure.
- Current: Lutheran Baptism pilot worked; Catholic first and second harvests saved. Armstrong (1,470) and Marshall (4,186) indexes complete. Catholic corpora are complete: Catholic Answers 883 retrieved pages, Hahn 168 reflections, Catholic Productions 24 eligible transcripts from 58 pages. Catholic bounded pass closed with gaps; Baptist now starts. The eleven other non-Catholic files beyond the Lutheran Baptism pilot remain not reached. Finish and measure these Catholic corpora before moving on. Do not run original S2 scripts: their fixed paths point to the forbidden real repository.
- Status: partial

## Sources, decisions and reproducibility
- Scratch root: `~/codex-scratch/apologists/`; `tools/vindex.py` copied unchanged; `tools/tally.py` and `tools/tally_md.py` copied with repository path changed to this clone; `tools/coverage.py` generates the initial page inventory; `tools/usage.py` reads only rate-limit fields from recent session logs; `tools/crawl.py` uses curl, public WordPress REST, robots and serial waits.
- The supplied grep usage command returns nothing for JSON containing spaces. Parsing JSON finds the actual fields; check before each crawl and at least every ten minutes. Latest readings are retained in scratch metadata and subsequent checkpoints here.
- The original WordPress crawler was stopped before retrieving a page because its urllib request had not returned; curl succeeded. A curl-based serial crawler replaces that transport; this is not a response to an access block.
- No prohibited 403 sources, unsigned pieces, AI summaries or bulk subtitle downloads used.
- Negative findings are limited to a named indexed corpus and its size. No current crawl is described as a complete historical corpus until pagination has finished.

## Baseline section tally

```text
catholic  baptism         sections= 16 0:3 1:5 2:6 >=3:2
lutheran  baptism         sections=  5 0:0 1:5 2:0 >=3:0
reformed  baptism         sections=  8 0:0 1:3 2:4 >=3:1
orthodox  baptism         sections=  5 0:1 1:4 2:0 >=3:0
baptist   baptism         sections=  6 0:1 1:4 2:1 >=3:0
catholic  eucharist       sections= 14 0:1 1:3 2:8 >=3:2
lutheran  eucharist       sections=  4 0:0 1:3 2:1 >=3:0
reformed  eucharist       sections=  2 0:0 1:2 2:0 >=3:0
orthodox  eucharist       sections=  4 0:0 1:4 2:0 >=3:0
baptist   eucharist       sections=  1 0:0 1:1 2:0 >=3:0
catholic  papacy          sections= 14 0:1 1:6 2:4 >=3:3
lutheran  papacy          sections=  1 0:0 1:1 2:0 >=3:0
reformed  papacy          sections=  3 0:0 1:2 2:1 >=3:0
orthodox  papacy          sections=  4 0:2 1:0 2:2 >=3:0
baptist   papacy          sections=  2 0:0 1:2 2:0 >=3:0
catholic  sola-scriptura  sections= 14 0:2 1:4 2:7 >=3:1
lutheran  sola-scriptura  sections=  3 0:0 1:3 2:0 >=3:0
reformed  sola-scriptura  sections=  4 0:0 1:3 2:1 >=3:0
orthodox  sola-scriptura  sections=  4 0:0 1:1 2:0 >=3:3
baptist   sola-scriptura  sections=  1 0:0 1:1 2:0 >=3:0
TOTAL catholic sections 58 0: 7 1: 18 2: 25 >=3: 8  >=2: 33
TOTAL lutheran sections 13 0: 0 1: 12 2: 1 >=3: 0  >=2: 1
TOTAL reformed sections 17 0: 0 1: 10 2: 6 >=3: 1  >=2: 7
TOTAL orthodox sections 17 0: 3 1: 9 2: 2 >=3: 3  >=2: 5
TOTAL baptist sections 10 0: 1 1: 8 2: 1 >=3: 0  >=2: 1
```

## Coverage by current page entry

Numbers in the baseline column are recorded persons on overlapping existing sections, not a new verification or a claim of organisational independence. Empty evidence means no matching section in the generated research layer. `not reached` is deliberately distinct from `not found`.

### catholic · baptism

| Entry | Passage(s) | Baseline persons | C5 state / search |
|---|---|---|---|
| 1 | John.3.5 | 3: Jimmy Akin, Joe Heschmeyer, Karlo Broussard | 4 recorded (Dr. Brant Pitre, Jimmy Akin, Joe Heschmeyer, Karlo Broussard); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 25/9/35/0/1; worked |
| 2 | Matt.28.19-Matt.28.20, Mark.16.15-Mark.16.16 | 2: Joe Heschmeyer, Trent Horn | 2 recorded (Joe Heschmeyer, Trent Horn); legacy inline Heschmeyer/Horn; no duplicate quote; indexed documents A1470/M4186/CA883/H168/P24: 54/2/49/4/0; worked |
| 3 | Acts.2.38 | 2: Joe Heschmeyer, Karlo Broussard | 3 recorded (Dr. Brant Pitre, Joe Heschmeyer, Karlo Broussard); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 29/1/33/0/1; worked |
| 4 | Rom.6.3-Rom.6.4, Col.2.12 | 2: Joe Heschmeyer, Karlo Broussard | 3 recorded (Dr. Brant Pitre, Joe Heschmeyer, Karlo Broussard); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 20/9/32/5/2; worked |
| 5 | Titus.3.5 | 2: Jimmy Akin, Joe Heschmeyer | 2 recorded (Jimmy Akin, Joe Heschmeyer); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 22/3/14/0/0; worked |
| 6 | Gal.3.27 | 2: Joe Heschmeyer, Trent Horn | 2 recorded (Joe Heschmeyer, Trent Horn); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 6/2/8/2/0; worked |
| 7 | 1Cor.6.11, 1Cor.12.13 | 1: Joe Heschmeyer | 2 recorded (Dave Armstrong, Joe Heschmeyer); new 1 Cor 6:11 argument; 12:13 unchanged; indexed documents A1470/M4186/CA883/H168/P24: 27/4/15/2/0; worked |
| 8 | Rom.5.12 | 2: Jimmy Akin, Karlo Broussard | 2 recorded (Jimmy Akin, Karlo Broussard); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 16/4/5/6/0; worked |
| 9 | Acts.16.15, Acts.16.33, Acts.18.8, 1Cor.1.16 | 2: Jimmy Akin, Karl Keating | 3 recorded (Dave Armstrong, Jimmy Akin, Karl Keating); jailer additionally explained; other households unchanged; indexed documents A1470/M4186/CA883/H168/P24: 7/0/9/0/1; worked |
| 10 | Mark.10.14 | 2: Jimmy Akin, Joe Heschmeyer | 2 recorded (Jimmy Akin, Joe Heschmeyer); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 0/0/1/1/0; worked |
| 11 | 1Pet.3.20 | 3: Jimmy Akin, Joe Heschmeyer, Karlo Broussard | 3 recorded (Jimmy Akin, Joe Heschmeyer, Karlo Broussard); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 21/2/10/1/0; worked |
| 12 | 1Pet.3.21 | 2: Joe Heschmeyer, Trent Horn | 2 recorded (Joe Heschmeyer, Trent Horn); legacy inline and 1 Pet 3:20–21 source material; no duplicate quote; indexed documents A1470/M4186/CA883/H168/P24: 18/4/25/1/0; worked |
| 13 | Eph.4.30, Eph.1.13-Eph.1.14, 2Cor.1.21-2Cor.1.22 | 1: Joe Heschmeyer | 2 recorded (Joe Heschmeyer, Tim Staples); new Eph 4:30 confirmation context, not all three passages; indexed documents A1470/M4186/CA883/H168/P24: 17/0/2/3/0; worked |
| 14 | 1Tim.2.4 | 0: none mapped | 2 recorded (Taylor Marshall, Joan Summers); C5 continuation added one Summers paragraph (Catholic Answers magazine, 2003): she reads 1 Tim 2:4 for the salvation of those who never heard of Christ or were never baptized; Heschmeyer, Akin and Staples hits for Col 3:16 and Phil 3:8 were read and do not qualify (see the continuation section); indexed documents A1470/M4186/CA883/H168/P24: 18/2/4/1/0; worked |
| 15 | John.19.34, Mark.10.38 | 1: Joe Heschmeyer | 2 recorded (Joe Heschmeyer, Taylor Marshall); one source per constituent passage; deeper coverage remains; indexed documents A1470/M4186/CA883/H168/P24: 13/1/5/4/1; worked |
| 16 | Matt.3.13-Matt.3.17 | 2: Joe Heschmeyer, Karlo Broussard | 2 recorded (Joe Heschmeyer, Karlo Broussard); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 3/3/10/1/1; worked |
| 17 | 1Pet.2.5, 1Pet.2.9 | 2: Jimmy Akin, Joe Heschmeyer | 2 recorded (Jimmy Akin, Joe Heschmeyer); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 10/1/9/7/0; worked |
| 18 | Eph.4.25 | 0: none mapped | 0 recorded (none); no qualifying explanation; Armstrong two lists, all other corpora zero; indexed documents A1470/M4186/CA883/H168/P24: 2/0/0/0/0; worked |
| 19 | Gal.5.3 | 0: none mapped | 1 recorded (Joan Summers); one Summers application, zero extended expositions; indexed documents A1470/M4186/CA883/H168/P24: 0/0/1/0/0; worked |

### catholic · eucharist

| Entry | Passage(s) | Baseline persons | C5 state / search |
|---|---|---|---|
| 1 | Matt.26.26-Matt.26.28, Mark.14.22-Mark.14.24, Luke.22.19-Luke.22.20, 1Cor.11.23-1Cor.11.26 | 4: Jimmy Akin, Joe Heschmeyer, Karlo Broussard, Trent Horn | 4 recorded (Jimmy Akin, Joe Heschmeyer, Karlo Broussard, Trent Horn); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 35/6/44/9/0; worked |
| 2 | Luke.22.19 | 4: Jimmy Akin, Joe Heschmeyer, Karlo Broussard, Trent Horn | 4 recorded (Jimmy Akin, Joe Heschmeyer, Karlo Broussard, Trent Horn); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 14/1/22/3/0; worked |
| 3 | John.6.51-John.6.58, John.6.60-John.6.69 | 3: Jimmy Akin, Joe Heschmeyer, Karlo Broussard | 3 recorded (Jimmy Akin, Joe Heschmeyer, Karlo Broussard); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 30/7/44/4/0; worked |
| 4 | 1Cor.10.16-1Cor.10.17 | 2: Jimmy Akin, Joe Heschmeyer | 2 recorded (Jimmy Akin, Joe Heschmeyer); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 22/0/24/1/0; worked |
| 5 | 1Cor.10.21 | 2: Joe Heschmeyer, Karlo Broussard | 2 recorded (Joe Heschmeyer, Karlo Broussard); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 14/2/4/0/0; worked |
| 6 | 1Cor.11.26 | 2: Joe Heschmeyer, Karlo Broussard | 2 recorded (Joe Heschmeyer, Karlo Broussard); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 4/0/16/1/0; worked |
| 7 | 1Cor.11.27-1Cor.11.29 | 2: Jimmy Akin, Karlo Broussard | 2 recorded (Jimmy Akin, Karlo Broussard); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 18/1/30/0/0; worked |
| 8 | Mal.1.11 | 2: Jimmy Akin, Joe Heschmeyer | 2 recorded (Jimmy Akin, Joe Heschmeyer); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 13/0/6/0/0; worked |
| 9 | Gen.14.18, Ps.110.4 | 2: Joe Heschmeyer, Tom Nash | 3 recorded (Joe Heschmeyer, Taylor Marshall, Tom Nash); Marshall Gen 14; Ps 110:4 not separately expanded; indexed documents A1470/M4186/CA883/H168/P24: 8/4/4/3/0; worked |
| 10 | Heb.7.11-Heb.7.27, Heb.9.12-Heb.9.14, Heb.9.27 | 2: Joe Heschmeyer, Karlo Broussard | 2 recorded (Joe Heschmeyer, Karlo Broussard); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 25/5/17/5/0; worked |
| 11 | Exod.12, 1Cor.5.7 | 2: Joe Heschmeyer, Trent Horn | 2 recorded (Joe Heschmeyer, Trent Horn); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 7/0/10/2/1; worked |
| 12 | Heb.1.6, Ps.97.7, Matt.2.11, Matt.28.17 | 0: none mapped | 0 recorded (none); zero qualifying expositors within three reads; lists not counted; indexed documents A1470/M4186/CA883/H168/P24: 7/1/3/6/0; worked |
| 13 | 1Cor.4.1, 1Cor.11.34 | 1: Karlo Broussard | 2 recorded (Karlo Broussard, Taylor Marshall); Broussard 11:34 / Marshall 4:1; not two per constituent verse; indexed documents A1470/M4186/CA883/H168/P24: 3/1/5/1/0; worked |
| 14 | Acts.2.42, Acts.2.46, Acts.20.7 | 2: Joe Heschmeyer, Trent Horn | 3 recorded (Dr. Brant Pitre, Joe Heschmeyer, Trent Horn); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 24/6/10/2/1; worked |

### catholic · papacy

| Entry | Passage(s) | Baseline persons | C5 state / search |
|---|---|---|---|
| 1 | Matt.16.16-Matt.16.19 | 3: Jimmy Akin, Karlo Broussard, Trent Horn | 3 recorded (Jimmy Akin, Karlo Broussard, Trent Horn); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 60/5/99/3/1; worked |
| 2 | John.1.42 | 2: Joe Heschmeyer, Trent Horn | 2 recorded (Joe Heschmeyer, Trent Horn); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 6/0/14/1/1; worked |
| 3 | John.21.15-John.21.17 | 3: Joe Heschmeyer, Karlo Broussard, Trent Horn | 3 recorded (Joe Heschmeyer, Karlo Broussard, Trent Horn); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 18/0/36/2/0; worked |
| 4 | Luke.22.31-Luke.22.32 | 2: Jimmy Akin, Joe Heschmeyer | 2 recorded (Jimmy Akin, Joe Heschmeyer); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 11/1/26/1/0; worked |
| 5 | Matt.18.18, Matt.28.16-Matt.28.20 | 1: Karlo Broussard | 2 recorded (Karlo Broussard, Scott Hahn); Hahn on Matt 18; Matt 28 portion still limited; indexed documents A1470/M4186/CA883/H168/P24: 53/3/53/4/0; worked |
| 6 | John.20.21 | 1: Joe Heschmeyer | 2 recorded (Joe Heschmeyer, Taylor Marshall); commissioning-context reading with citation-range limitation; indexed documents A1470/M4186/CA883/H168/P24: 5/2/4/7/0; worked |
| 7 | Matt.10.2, Mark.3.16, Luke.6.14, Acts.1.13 | 1: Trent Horn | 2 recorded (Scott Hahn, Trent Horn); two recorded, one primacy-from-list argument; Hahn gives context; indexed documents A1470/M4186/CA883/H168/P24: 11/1/20/1/0; worked |
| 8 | Acts.2.14, Acts.2.37, Acts.5.29 | 2: Tim Staples, Trent Horn | 2 recorded (Tim Staples, Trent Horn); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 12/1/9/4/0; worked |
| 9 | 1Cor.15.5 | 1: Trent Horn | 2 recorded (Scott Hahn, Trent Horn); Hahn appearance in context of apostolic call; indexed documents A1470/M4186/CA883/H168/P24: 11/1/5/1/0; worked |
| 10 | Matt.16.23, John.13.38, Luke.5.8 | 3: Joe Heschmeyer, Karlo Broussard, Trent Horn | 3 recorded (Joe Heschmeyer, Karlo Broussard, Trent Horn); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 8/0/12/3/0; worked |
| 11 | Luke.22.26-Luke.22.27, Matt.20.25 | 3: Joe Heschmeyer, Karlo Broussard, Trent Horn | 3 recorded (Joe Heschmeyer, Karlo Broussard, Trent Horn); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 0/0/9/2/0; worked |
| 12 | Eph.2.20, Rev.21.14, 1Pet.2.4 | 2: Jimmy Akin, Trent Horn | 2 recorded (Jimmy Akin, Trent Horn); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 13/0/19/7/0; worked |
| 13 | John.17.21 | 2: Joe Heschmeyer, Karlo Broussard | 2 recorded (Joe Heschmeyer, Karlo Broussard); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 11/0/5/1/0; worked |
| 14 | 2Cor.11.28 | 0: none mapped | 2 recorded (Dave Armstrong, Suan Sonna); Armstrong + labelled Sonna turns; indexed documents A1470/M4186/CA883/H168/P24: 8/0/1/0/0; worked |

### catholic · sola-scriptura

| Entry | Passage(s) | Baseline persons | C5 state / search |
|---|---|---|---|
| 1 | Matt.28.19-Matt.28.20, Mark.16.15 | 1: Jimmy Akin | 2 recorded (Jimmy Akin, Scott Hahn); Hahn Matthew commission; Mark not separately expanded; indexed documents A1470/M4186/CA883/H168/P24: 39/2/41/4/0; worked |
| 2 | 2Thess.2.15 | 3: Jimmy Akin, Joe Heschmeyer, Karlo Broussard | 4 recorded (Dr. Brant Pitre, Jimmy Akin, Joe Heschmeyer, Karlo Broussard); Akin + Pitre explicit tradition argument; four recorded in all; indexed documents A1470/M4186/CA883/H168/P24: 37/2/41/0/1; worked |
| 3 | Jude.1.3 | 2: Jimmy Akin, Karlo Broussard | 2 recorded (Jimmy Akin, Karlo Broussard); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 3/1/2/0/0; worked |
| 4 | 1Tim.3.15 | 2: Joe Heschmeyer, Trent Horn | 2 recorded (Joe Heschmeyer, Trent Horn); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 41/2/24/0/0; worked |
| 5 | 1Tim.6.20, 2Tim.1.12-2Tim.1.14 | 3: Joe Heschmeyer, Karlo Broussard, Trent Horn | 3 recorded (Joe Heschmeyer, Karlo Broussard, Trent Horn); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 41/0/15/0/0; worked |
| 6 | Luke.10.16 | 2: Jimmy Akin, Joe Heschmeyer | 2 recorded (Jimmy Akin, Joe Heschmeyer); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 12/2/22/2/0; worked |
| 7 | Acts.2.42 | 2: Joe Heschmeyer, Trent Horn | 3 recorded (Dr. Brant Pitre, Joe Heschmeyer, Trent Horn); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 17/0/10/2/1; worked |
| 8 | Luke.2.19, Luke.2.51 | 1: Jimmy Akin | 2 recorded (Jimmy Akin, Scott Hahn); two recorded; Hahn is a short application, not a second oral-source argument; indexed documents A1470/M4186/CA883/H168/P24: 14/1/0/2/0; worked |
| 9 | Col.3.16 | 0: none mapped | 1 recorded (Scott Hahn); one short application; two CA leads remain unread at cap; indexed documents A1470/M4186/CA883/H168/P24: 2/0/2/4/0; worked |
| 10 | John.20.31, 2Tim.3.16-2Tim.3.17, 2Pet.1.19-2Pet.1.21, 2Pet.3.15-2Pet.3.16 | 2: Jimmy Akin, Joe Heschmeyer | 2 recorded (Jimmy Akin, Joe Heschmeyer); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 61/7/53/4/0; worked |
| 11 | 1Thess.2.13, Heb.4.12, Acts.20.32 | 2: Joe Heschmeyer, Trent Horn | 2 recorded (Joe Heschmeyer, Trent Horn); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 34/2/12/2/0; worked |
| 12 | Luke.24.45, Luke.24.25-Luke.24.27, Luke.24.44-Luke.24.46 | 0: none mapped | 2 recorded (Fr. John Waiss, Scott Hahn); Hahn + Waiss; specified Luke verses and limitations in records; indexed documents A1470/M4186/CA883/H168/P24: 15/0/9/7/0; worked |
| 13 | Rom.12.6 | 2: Jimmy Akin, Trent Horn | 2 recorded (Jimmy Akin, Trent Horn); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 2/0/1/0/0; worked |
| 14 | 1John.2.20-1John.2.27, John.16.13 | 2: Joe Heschmeyer, Karlo Broussard | 2 recorded (Joe Heschmeyer, Karlo Broussard); existing records preserved; their depth/standing not newly reverified; indexed documents A1470/M4186/CA883/H168/P24: 28/1/15/1/0; worked |
| 15 | Heb.1.1-Heb.1.2 | 1: Joe Heschmeyer | 2 recorded (Joe Heschmeyer, Scott Hahn); Hahn on revelation in the Son, not a canon proof; indexed documents A1470/M4186/CA883/H168/P24: 4/1/5/2/0; worked |
| 16 | Phil.3.8 | 0: none mapped | 1 recorded (Dave Armstrong); one Armstrong verse commentary; other candidates address surrounding verses; indexed documents A1470/M4186/CA883/H168/P24: 8/1/3/2/0; worked |
| 17 | Matt.18.20 | 0: none mapped | 1 recorded (Scott Hahn); one Hahn exposition; read cap; CA list not promoted; indexed documents A1470/M4186/CA883/H168/P24: 6/0/1/1/0; worked |

### baptist · baptism

| Entry | Passage(s) | Baseline persons | C5 state / search |
|---|---|---|---|
|1|Matt.3.6|0: none mapped| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |
|2|Matt.3.11|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 0/0/1; no read spent on this row; not reached |
|3|Matt.3.13-Matt.3.17|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 4/0/0; no read spent on this row; not reached |
|4|Matt.3.16|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/0/0; no read spent on this row; not reached |
|5|Matt.26.26-Matt.26.30|0: none mapped| 1 recorded (Andrew Wilson); C5 added Andrew Wilson (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 10/0/0; worked |
|6|Matt.28.18-Matt.28.19|1: Ben Robin| 2 recorded (Ben Robin, Bobby Jamieson); C5 added Bobby Jamieson (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 124/7/2; worked |
|7|Matt.28.18-Matt.28.20|1: Ben Robin| 2 recorded (Ben Robin, Bobby Jamieson); C5 added Bobby Jamieson (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 142/7/2; worked |
|8|Matt.28.19-Matt.28.20|1: Ben Robin| 2 recorded (Ben Robin, Bobby Jamieson); C5 added Bobby Jamieson (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 139/6/1; worked |
|9|Matt.28.19|1: Ben Robin| 2 recorded (Ben Robin, Bobby Jamieson); C5 added Bobby Jamieson (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 121/6/1; worked |
|10|Mark.1.4|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 0/0/1; no read spent on this row; not reached |
|11|Mark.1.5|0: none mapped| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |
|12|Mark.1.9-Mark.1.11|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 0/0/1; no read spent on this row; not reached |
|13|Mark.1.9-Mark.1.10|0: none mapped| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |
|14|Mark.14.22-Mark.14.26|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 4/0/1; no read spent on this row; not reached |
|15|Mark.16.16|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/0/1; no read spent on this row; not reached |
|16|Luke.3.21-Luke.3.22|0: none mapped| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |
|17|Luke.22.19-Luke.22.20|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 6/0/0; no read spent on this row; not reached |
|18|John.1.2|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 6/3/0; no read spent on this row; not reached |
|19|John.1.8|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 4/0/0; no read spent on this row; not reached |
|20|John.1.31|0: none mapped| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |
|21|John.3.22-John.3.23|1: Gavin Ortlund| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|22|John.3.23|1: Gavin Ortlund| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|23|Acts.2.37-Acts.2.38|1: Ben Robin| 3 recorded (Ben Robin, Caleb Morell, Tiago Oliveira); C5 added Caleb Morell, Tiago Oliveira (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 23/1/0; worked |
|24|Acts.2.37-Acts.2.42|1: Ben Robin| 5 recorded (Ben Robin, Bobby Jamieson, Caleb Morell, Tiago Oliveira, Trent Hunter); C5 added Bobby Jamieson, Caleb Morell, Tiago Oliveira, Trent Hunter (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 71/3/2; worked |
|25|Acts.2.38|1: Ben Robin| 3 recorded (Ben Robin, Caleb Morell, Tiago Oliveira); C5 added Caleb Morell, Tiago Oliveira (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 21/1/0; worked |
|26|Acts.2.41|0: none mapped| 3 recorded (Bobby Jamieson, Caleb Morell, Trent Hunter); C5 added Bobby Jamieson, Caleb Morell, Trent Hunter (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 23/1/0; worked |
|27|Acts.2.41-Acts.2.42|0: none mapped| 3 recorded (Bobby Jamieson, Caleb Morell, Trent Hunter); C5 added Bobby Jamieson, Caleb Morell, Trent Hunter (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 54/2/0; worked |
|28|Acts.8.12|0: none mapped| 1 recorded (Caleb Morell); C5 added Caleb Morell (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 4/0/0; worked |
|29|Acts.8.35-Acts.8.39|1: Gavin Ortlund| 3 recorded (Gavin Ortlund, Caleb Morell, Sam Emadi); C5 added Caleb Morell, Sam Emadi (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 7/1/0; worked |
|30|Acts.8.36-Acts.8.38|1: Gavin Ortlund| 3 recorded (Gavin Ortlund, Caleb Morell, Sam Emadi); C5 added Caleb Morell, Sam Emadi (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 5/0/0; worked |
|31|Acts.8.36-Acts.8.37|1: Gavin Ortlund| 3 recorded (Gavin Ortlund, Caleb Morell, Sam Emadi); C5 added Caleb Morell, Sam Emadi (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 5/0/0; worked |
|32|Acts.8.36-Acts.8.39|1: Gavin Ortlund| 3 recorded (Gavin Ortlund, Caleb Morell, Sam Emadi); C5 added Caleb Morell, Sam Emadi (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 6/0/0; worked |
|33|Acts.8.37-Acts.8.38|1: Gavin Ortlund| 3 recorded (Gavin Ortlund, Caleb Morell, Sam Emadi); C5 added Caleb Morell, Sam Emadi (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 5/0/0; worked |
|34|Acts.8.37|1: Gavin Ortlund| 3 recorded (Gavin Ortlund, Caleb Morell, Sam Emadi); C5 added Caleb Morell, Sam Emadi (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 5/0/0; worked |
|35|Acts.8.38|1: Gavin Ortlund| 3 recorded (Gavin Ortlund, Caleb Morell, Sam Emadi); C5 added Caleb Morell, Sam Emadi (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 5/0/0; worked |
|36|Acts.8.38-Acts.8.39|1: Gavin Ortlund| 3 recorded (Gavin Ortlund, Caleb Morell, Sam Emadi); C5 added Caleb Morell, Sam Emadi (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 6/0/0; worked |
|37|Acts.16.30-Acts.16.33|0: none mapped| 1 recorded (Caleb Morell); C5 added Caleb Morell (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 5/1/0; worked |
|38|Acts.16.32-Acts.16.34|0: none mapped| 1 recorded (Caleb Morell); C5 added Caleb Morell (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 3/0/1; worked |
|39|Acts.18.8|0: none mapped| 1 recorded (Caleb Morell); C5 added Caleb Morell (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 3/0/1; worked |
|40|Acts.20.7|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 4/1/0; no read spent on this row; not reached |
|41|Acts.26.16|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|42|Rom.6.1|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 18/2/1; no read spent on this row; not reached |
|43|Rom.6.2|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 21/2/1; no read spent on this row; not reached |
|44|Rom.6.3-Rom.6.5|2: Ben Robin, Fred Zaspel| 4 recorded (Ben Robin, Fred Zaspel, David Schrock, Tiago Oliveira); C5 added David Schrock, Tiago Oliveira (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 27/3/4; worked |
|45|Rom.6.4|2: Ben Robin, Fred Zaspel| 4 recorded (Ben Robin, Fred Zaspel, David Schrock, Tiago Oliveira); C5 added David Schrock, Tiago Oliveira (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 25/1/3; worked |
|46|1Cor.4.1|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 9/0/0; no read spent on this row; not reached |
|47|1Cor.10.16|0: none mapped| 3 recorded (Bobby Jamieson, Caleb Batchelor, Tiago Oliveira); C5 added Bobby Jamieson, Caleb Batchelor, Tiago Oliveira (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 15/3/0; worked |
|48|1Cor.10.21|0: none mapped| 1 recorded (Tiago Oliveira); C5 added Tiago Oliveira (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 2/0/0; worked |
|49|1Cor.11.23-1Cor.11.29|0: none mapped| 3 recorded (Andrew Wilson, Caleb Batchelor, Tiago Oliveira); C5 added Andrew Wilson, Caleb Batchelor, Tiago Oliveira (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 32/3/0; worked |
|50|1Cor.11.26|0: none mapped| 2 recorded (Andrew Wilson, Tiago Oliveira); C5 added Andrew Wilson, Tiago Oliveira (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 20/3/0; worked |
|51|1Cor.12.13|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 29/1/0; no read spent on this row; not reached |
|52|1Cor.15.28-1Cor.15.29|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/3/0; no read spent on this row; not reached |
|53|1Cor.15.29|0: none mapped| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |
|54|Gal.3.27|0: none mapped| 1 recorded (David Schrock); C5 added David Schrock (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 15/0/2; worked |
|55|Col.2.12|1: Fred Zaspel| 2 recorded (Fred Zaspel, Tiago Oliveira); C5 added Tiago Oliveira (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 6/1/0; worked |
|56|Col.3.3|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 9/1/1; no read spent on this row; not reached |
|57|Titus.3.5|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 6/3/0; no read spent on this row; not reached |
|58|Heb.6.1-Heb.6.2|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 4/1/0; no read spent on this row; not reached |
|59|Heb.10.22|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 8/0/2; no read spent on this row; not reached |
|60|Rev.1.5|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 3/1/0; no read spent on this row; not reached |
|61|Rev.7.14|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/0/0; no read spent on this row; not reached |

### baptist · eucharist

| Entry | Passage(s) | Baseline persons | C5 state / search |
|---|---|---|---|
|1|Exod.20.4-Exod.20.5|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/1/1; no read spent on this row; not reached |
|2|Matt.3.13-Matt.3.17|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 4/0/0; no read spent on this row; not reached |
|3|Matt.3.16|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/0/0; no read spent on this row; not reached |
|4|Matt.7.6|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 3/0/0; no read spent on this row; not reached |
|5|Matt.15.9|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/2/0; no read spent on this row; not reached |
|6|Matt.26.26-Matt.26.27|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 5/0/0; no read spent on this row; not reached |
|7|Matt.26.26-Matt.26.30|0: none mapped| 1 recorded (Andrew Wilson); C5 added Andrew Wilson (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 10/0/0; worked |
|8|Matt.26.26-Matt.26.28|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 6/0/0; no read spent on this row; not reached |
|9|Matt.26.26|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 4/0/0; no read spent on this row; not reached |
|10|Matt.26.30|0: none mapped| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |
|11|Matt.28.19-Matt.28.20|0: none mapped| 1 recorded (Bobby Jamieson); C5 added Bobby Jamieson (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 139/6/1; worked |
|12|Matt.28.20|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 105/2/1; no read spent on this row; not reached |
|13|Mark.1.4|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 0/0/1; no read spent on this row; not reached |
|14|Mark.1.9-Mark.1.11|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 0/0/1; no read spent on this row; not reached |
|15|Mark.14.22-Mark.14.26|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 4/0/1; no read spent on this row; not reached |
|16|Luke.3.21-Luke.3.22|0: none mapped| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |
|17|Luke.22.17|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 4/0/0; no read spent on this row; not reached |
|18|Luke.22.19-Luke.22.20|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 6/0/0; no read spent on this row; not reached |
|19|Luke.24.6|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|20|Luke.24.39|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|21|John.3.23|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|22|Acts.2.41-Acts.2.42|0: none mapped| 2 recorded (Bobby Jamieson, Caleb Morell); C5 added Bobby Jamieson, Caleb Morell (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 54/2/0; worked |
|23|Acts.2.41|0: none mapped| 2 recorded (Bobby Jamieson, Caleb Morell); C5 added Bobby Jamieson, Caleb Morell (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 23/1/0; worked |
|24|Acts.3.21|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|25|Acts.8.35-Acts.8.39|0: none mapped| 1 recorded (Caleb Morell); C5 added Caleb Morell (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 7/1/0; worked |
|26|Acts.8.38-Acts.8.39|0: none mapped| 1 recorded (Caleb Morell); C5 added Caleb Morell (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 6/0/0; worked |
|27|Acts.16.30-Acts.16.33|0: none mapped| 1 recorded (Caleb Morell); C5 added Caleb Morell (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 5/1/0; worked |
|28|Acts.20.7|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 4/1/0; no read spent on this row; not reached |
|29|Rom.6.3-Rom.6.5|0: none mapped| 2 recorded (David Schrock, Tiago Oliveira); C5 added David Schrock, Tiago Oliveira (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 27/3/4; worked |
|30|1Cor.4.1|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 9/0/0; no read spent on this row; not reached |
|31|1Cor.10.16-1Cor.10.17|0: none mapped| 3 recorded (Bobby Jamieson, Caleb Batchelor, Tiago Oliveira); C5 added Bobby Jamieson, Caleb Batchelor, Tiago Oliveira (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 35/3/0; worked |
|32|1Cor.10.16|0: none mapped| 3 recorded (Bobby Jamieson, Caleb Batchelor, Tiago Oliveira); C5 added Bobby Jamieson, Caleb Batchelor, Tiago Oliveira (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 15/3/0; worked |
|33|1Cor.10.21|0: none mapped| 1 recorded (Tiago Oliveira); C5 added Tiago Oliveira (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 2/0/0; worked |
|34|1Cor.11.23-1Cor.11.26|0: none mapped| 4 recorded (Andrew Wilson, Bobby Jamieson, Caleb Batchelor, Tiago Oliveira); C5 added Andrew Wilson, Bobby Jamieson, Caleb Batchelor, Tiago Oliveira (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 22/3/0; worked |
|35|1Cor.11.23-1Cor.11.29|0: none mapped| 4 recorded (Andrew Wilson, Bobby Jamieson, Caleb Batchelor, Tiago Oliveira); C5 added Andrew Wilson, Bobby Jamieson, Caleb Batchelor, Tiago Oliveira (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 32/3/0; worked |
|36|1Cor.11.23|0: none mapped| 2 recorded (Caleb Batchelor, Tiago Oliveira); C5 added Caleb Batchelor, Tiago Oliveira (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 15/2/0; worked |
|37|1Cor.11.24|0: none mapped| 2 recorded (Caleb Batchelor, Tiago Oliveira); C5 added Caleb Batchelor, Tiago Oliveira (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 15/2/0; worked |
|38|1Cor.11.24-1Cor.11.25|0: none mapped| 4 recorded (Andrew Wilson, Bobby Jamieson, Caleb Batchelor, Tiago Oliveira); C5 added Andrew Wilson, Bobby Jamieson, Caleb Batchelor, Tiago Oliveira (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 18/2/0; worked |
|39|1Cor.11.26|0: none mapped| 3 recorded (Andrew Wilson, Bobby Jamieson, Tiago Oliveira); C5 added Andrew Wilson, Bobby Jamieson, Tiago Oliveira (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 20/3/0; worked |
|40|1Cor.11.27|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 18/2/0; no read spent on this row; not reached |
|41|1Cor.11.28|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 18/2/0; no read spent on this row; not reached |
|42|1Cor.11.29|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 16/2/0; no read spent on this row; not reached |
|43|2Cor.6.14-2Cor.6.15|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 13/0/1; no read spent on this row; not reached |
|44|Gal.3.1|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 6/1/0; no read spent on this row; not reached |
|45|Col.2.12|0: none mapped| 1 recorded (Tiago Oliveira); C5 added Tiago Oliveira (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 6/1/0; worked |
|46|Heb.9.25-Heb.9.26|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 0/0/1; no read spent on this row; not reached |
|47|Heb.9.28|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/0/1; no read spent on this row; not reached |

### baptist · papacy

| Entry | Passage(s) | Baseline persons | C5 state / search |
|---|---|---|---|
|1|Ps.72.17|1: Gavin Ortlund| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/0/1; no read spent on this row; not reached |
|2|Ps.102.28|1: Gavin Ortlund| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |
|3|Matt.16.15-Matt.16.19|1: Gavin Ortlund| 2 recorded (Gavin Ortlund, Trent Hunter); C5 added Trent Hunter (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 82/1/3; worked |
|4|Matt.16.18|1: Gavin Ortlund| 2 recorded (Gavin Ortlund, Trent Hunter); C5 added Trent Hunter (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 56/1/3; worked |
|5|Matt.18.15-Matt.18.20|1: Gavin Ortlund| 3 recorded (Gavin Ortlund, Stephen J. Wellum, Trent Hunter); C5 added Stephen J. Wellum, Trent Hunter (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 136/0/2; worked |
|6|Matt.18.18-Matt.18.19|1: Gavin Ortlund| 3 recorded (Gavin Ortlund, Stephen J. Wellum, Trent Hunter); C5 added Stephen J. Wellum, Trent Hunter (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 72/0/1; worked |
|7|Matt.18.20|1: Gavin Ortlund| 3 recorded (Gavin Ortlund, Stephen J. Wellum, Trent Hunter); C5 added Stephen J. Wellum, Trent Hunter (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 77/0/1; worked |
|8|Matt.28.18-Matt.28.20|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 142/7/2; no read spent on this row; not reached |
|9|Matt.28.20|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 105/2/1; no read spent on this row; not reached |
|10|John.10.16|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 9/0/0; no read spent on this row; not reached |
|11|John.12.32|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 4/0/0; no read spent on this row; not reached |
|12|Acts.2.41-Acts.2.42|0: none mapped| 1 recorded (Stephen J. Wellum); C5 added Stephen J. Wellum (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 54/2/0; worked |
|13|Acts.2.47|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 14/0/0; no read spent on this row; not reached |
|14|Acts.5.11-Acts.5.14|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 11/0/0; no read spent on this row; not reached |
|15|Acts.6.3-Acts.6.6|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 52/0/0; no read spent on this row; not reached |
|16|Acts.11.26|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|17|Acts.13.1-Acts.13.3|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 21/0/0; no read spent on this row; not reached |
|18|Acts.14.23|0: none mapped| 1 recorded (Stephen J. Wellum); C5 added Stephen J. Wellum (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 31/0/0; worked |
|19|Acts.14.27|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 9/0/0; no read spent on this row; not reached |
|20|Acts.15.1|1: Gavin Ortlund| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|21|Acts.15.1-Acts.15.30|1: Gavin Ortlund| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 16/1/0; no read spent on this row; not reached |
|22|Acts.15.11|1: Gavin Ortlund| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/0/0; no read spent on this row; not reached |
|23|Acts.15.30-Acts.15.31|1: Gavin Ortlund| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 3/0/0; no read spent on this row; not reached |
|24|Acts.16.5|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/0/0; no read spent on this row; not reached |
|25|Acts.17.10|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 3/3/0; no read spent on this row; not reached |
|26|Acts.18.28|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|27|Acts.20.28|0: none mapped| 1 recorded (Benjamin Merkle); C5 added Benjamin Merkle (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 85/0/0; worked |
|28|Rom.1.7|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 4/1/0; no read spent on this row; not reached |
|29|1Cor.1.2|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 11/0/0; no read spent on this row; not reached |
|30|1Cor.3.16|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 11/2/2; no read spent on this row; not reached |
|31|1Cor.5.4-1Cor.5.6|0: none mapped| 2 recorded (Stephen J. Wellum, Trent Hunter); C5 added Stephen J. Wellum, Trent Hunter (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 60/0/1; worked |
|32|1Cor.5.4-1Cor.5.5|0: none mapped| 2 recorded (Stephen J. Wellum, Trent Hunter); C5 added Stephen J. Wellum, Trent Hunter (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 57/0/1; worked |
|33|1Cor.7.17|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|34|1Cor.9.13-1Cor.9.14|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 11/0/0; no read spent on this row; not reached |
|35|1Cor.12|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 30/1/2; no read spent on this row; not reached |
|36|1Cor.15.1|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 14/1/0; no read spent on this row; not reached |
|37|Gal.3.28|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 27/0/2; no read spent on this row; not reached |
|38|Eph.1.10|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 12/3/0; no read spent on this row; not reached |
|39|Eph.1.20-Eph.1.22|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 19/1/1; no read spent on this row; not reached |
|40|Eph.1.22-Eph.1.23|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 18/0/0; no read spent on this row; not reached |
|41|Eph.1.22|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 18/0/0; no read spent on this row; not reached |
|42|Eph.2.19-Eph.2.22|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 43/4/1; no read spent on this row; not reached |
|43|Eph.3.8-Eph.3.11|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 26/0/1; no read spent on this row; not reached |
|44|Eph.3.21|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 10/0/1; no read spent on this row; not reached |
|45|Eph.4.11-Eph.4.12|0: none mapped| 1 recorded (Benjamin Merkle); C5 added Benjamin Merkle (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 129/1/2; worked |
|46|Eph.5.22-Eph.5.32|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 62/2/4; no read spent on this row; not reached |
|47|Eph.5.23|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 27/0/3; no read spent on this row; not reached |
|48|Eph.5.26-Eph.5.27|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 35/0/3; no read spent on this row; not reached |
|49|Eph.5.27|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 34/0/3; no read spent on this row; not reached |
|50|Eph.5.32|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 30/1/4; no read spent on this row; not reached |
|51|Phil.1.1|0: none mapped| 1 recorded (Ben Robin); C5 added Ben Robin (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 17/0/0; worked |
|52|Col.1.18|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 8/4/2; no read spent on this row; not reached |
|53|2Thess.2.2-2Thess.2.9|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/0/1; no read spent on this row; not reached |
|54|2Thess.2.3-2Thess.2.9|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/0/1; no read spent on this row; not reached |
|55|2Thess.2.11-2Thess.2.12|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/1; no read spent on this row; not reached |
|56|1Tim.2.9-1Tim.2.14|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 43/0/2; no read spent on this row; not reached |
|57|1Tim.3.1-1Tim.3.15|0: none mapped| 2 recorded (Ben Robin, Benjamin Merkle); C5 added Ben Robin, Benjamin Merkle (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 199/5/3; worked |
|58|1Tim.4.14|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 12/1/0; no read spent on this row; not reached |
|59|Heb.11.39-Heb.11.40|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|60|Heb.12.22-Heb.12.23|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 11/1/0; no read spent on this row; not reached |
|61|Heb.12.23|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 11/1/0; no read spent on this row; not reached |
|62|1Pet.5.1-1Pet.5.4|0: none mapped| 1 recorded (Benjamin Merkle); C5 added Benjamin Merkle (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 148/0/0; worked |
|63|Rev.2|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 17/1/3; no read spent on this row; not reached |
|64|Rev.2.1-Rev.3.22|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 3/0/0; no read spent on this row; not reached |
|65|Rev.3|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/0/1; no read spent on this row; not reached |
|66|Rev.12.17|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|67|Rev.13.8|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/1/0; no read spent on this row; not reached |
|68|Rev.14.1|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|69|Rev.18.2|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|70|Rev.21.2-Rev.21.3|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 12/3/2; no read spent on this row; not reached |

### baptist · sola-scriptura

| Entry | Passage(s) | Baseline persons | C5 state / search |
|---|---|---|---|
|1|Exod.24.4|0: none mapped| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |
|2|Deut.4.1-Deut.4.2|0: none mapped| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |
|3|Deut.12.32|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|4|Deut.17.19|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 4/0/0; no read spent on this row; not reached |
|5|Josh.1.7|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 3/0/0; no read spent on this row; not reached |
|6|Josh.8.34|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 3/0/0; no read spent on this row; not reached |
|7|Ps.19.7-Ps.19.10|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/1/0; no read spent on this row; not reached |
|8|Ps.19.7|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/1/0; no read spent on this row; not reached |
|9|Ps.119.1-Ps.119.8|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/3/0; no read spent on this row; not reached |
|10|Ps.119.11|0: none mapped| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |
|11|Ps.119.89|0: none mapped| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |
|12|Ps.119.105|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/1/0; no read spent on this row; not reached |
|13|Ps.119.130|0: none mapped| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |
|14|Ps.119.140|0: none mapped| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |
|15|Prov.30.5-Prov.30.6|0: none mapped| 1 recorded (David King); C5 added David King (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 1/0/0; worked |
|16|Isa.8.20|0: none mapped| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |
|17|Isa.34.16|0: none mapped| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |
|18|Isa.40.8|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 4/0/0; no read spent on this row; not reached |
|19|Jer.15.16|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|20|Jer.36|0: none mapped| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |
|21|Jer.36.1-Jer.36.32|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 0/0/1; no read spent on this row; not reached |
|22|Matt.5.17-Matt.5.18|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 10/0/1; no read spent on this row; not reached |
|23|Matt.15.9|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/2/0; no read spent on this row; not reached |
|24|Matt.18.17-Matt.18.19|0: none mapped| 1 recorded (Stephen J. Wellum); C5 added Stephen J. Wellum (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 119/0/2; worked |
|25|Matt.18.20|0: none mapped| 1 recorded (Stephen J. Wellum); C5 added Stephen J. Wellum (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 77/0/1; worked |
|26|Matt.22.29|0: none mapped| 1 recorded (Samuel Parkison); C5 added Samuel Parkison (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 2/0/0; worked |
|27|Matt.22.29-Matt.22.30|0: none mapped| 1 recorded (Samuel Parkison); C5 added Samuel Parkison (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 5/0/0; worked |
|28|Matt.22.29-Matt.22.31|0: none mapped| 1 recorded (Samuel Parkison); C5 added Samuel Parkison (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 5/0/0; worked |
|29|Matt.22.31|0: none mapped| 1 recorded (Samuel Parkison); C5 added Samuel Parkison (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 0/0/0; worked |
|30|Matt.24.23|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/1; no read spent on this row; not reached |
|31|Luke.16.29-Luke.16.31|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/1/1; no read spent on this row; not reached |
|32|Luke.21.33|0: none mapped| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |
|33|Luke.24.44-Luke.24.46|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 7/2/1; no read spent on this row; not reached |
|34|John.5.39|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 9/0/2; no read spent on this row; not reached |
|35|John.5.46-John.5.47|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/2/0; no read spent on this row; not reached |
|36|John.6.45|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 6/1/0; no read spent on this row; not reached |
|37|John.10.35|1: Gavin Ortlund| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 0/0/2; no read spent on this row; not reached |
|38|John.16.13-John.16.15|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 7/2/0; no read spent on this row; not reached |
|39|John.16.13-John.16.14|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 7/2/0; no read spent on this row; not reached |
|40|John.17.12|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/0/0; no read spent on this row; not reached |
|41|John.17.17|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 11/0/0; no read spent on this row; not reached |
|42|John.20.30-John.20.31|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 4/0/1; no read spent on this row; not reached |
|43|John.21.25|0: none mapped| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |
|44|Acts.2.16|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 3/0/0; no read spent on this row; not reached |
|45|Acts.3.22-Acts.3.23|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 0/0/1; no read spent on this row; not reached |
|46|Acts.15.1|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|47|Acts.15.11|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/0/0; no read spent on this row; not reached |
|48|Acts.15.15-Acts.15.16|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/0/0; no read spent on this row; not reached |
|49|Acts.15.15|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/0/0; no read spent on this row; not reached |
|50|Acts.15.30-Acts.15.31|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 3/0/0; no read spent on this row; not reached |
|51|Acts.17.10|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 3/3/0; no read spent on this row; not reached |
|52|Acts.17.11|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 11/3/1; no read spent on this row; not reached |
|53|Acts.18.28|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|54|Acts.28.23|0: none mapped| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |
|55|Rom.1.16|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 23/1/0; no read spent on this row; not reached |
|56|Rom.3.2|1: Gavin Ortlund| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |
|57|Rom.10.13|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 11/0/1; no read spent on this row; not reached |
|58|Rom.11.31-Rom.11.32|0: none mapped| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |
|59|Rom.15.4|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 8/1/0; no read spent on this row; not reached |
|60|Rom.15.4-Rom.15.5|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 11/1/0; no read spent on this row; not reached |
|61|Rom.16.25-Rom.16.26|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|62|1Cor.1.20|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 5/1/0; no read spent on this row; not reached |
|63|1Cor.2.6-1Cor.2.7|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 3/1/0; no read spent on this row; not reached |
|64|1Cor.2.9-1Cor.2.12|0: none mapped| 1 recorded (Gregg R. Allison); C5 added Gregg R. Allison (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 6/1/0; worked |
|65|1Cor.2.10-1Cor.2.12|0: none mapped| 1 recorded (Gregg R. Allison); C5 added Gregg R. Allison (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 6/0/0; worked |
|66|1Cor.5.4-1Cor.5.6|0: none mapped| 2 recorded (Stephen J. Wellum, Trent Hunter); C5 added Stephen J. Wellum, Trent Hunter (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 60/0/1; worked |
|67|1Cor.11.13-1Cor.11.14|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 7/0/2; no read spent on this row; not reached |
|68|1Cor.14.4|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|69|1Cor.14.6|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/0/0; no read spent on this row; not reached |
|70|1Cor.14.9|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|71|1Cor.14.11-1Cor.14.12|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 6/0/0; no read spent on this row; not reached |
|72|1Cor.14.24|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 6/0/2; no read spent on this row; not reached |
|73|1Cor.14.26|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 11/1/1; no read spent on this row; not reached |
|74|1Cor.14.28|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/0/0; no read spent on this row; not reached |
|75|1Cor.14.40|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 5/0/0; no read spent on this row; not reached |
|76|2Cor.1.20|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 8/1/1; no read spent on this row; not reached |
|77|Gal.1.8-Gal.1.9|0: none mapped| 2 recorded (Stephen J. Wellum, Trent Hunter); C5 added Stephen J. Wellum, Trent Hunter (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 32/1/0; worked |
|78|Gal.5.22|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 20/1/0; no read spent on this row; not reached |
|79|Eph.2.20|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 29/3/1; no read spent on this row; not reached |
|80|Col.2.18|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 4/1/0; no read spent on this row; not reached |
|81|Col.2.23|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/0/0; no read spent on this row; not reached |
|82|Col.3.16|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 51/1/1; no read spent on this row; not reached |
|83|2Thess.2.7|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/1; no read spent on this row; not reached |
|84|2Thess.2.13|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|85|2Tim.3.15-2Tim.3.17|1: Gavin Ortlund| 3 recorded (Gavin Ortlund, David King, Gregg R. Allison); C5 added David King, Gregg R. Allison (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 58/1/2; worked |
|86|2Tim.3.16|1: Gavin Ortlund| 3 recorded (Gavin Ortlund, David King, Gregg R. Allison); C5 added David King, Gregg R. Allison (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 51/1/2; worked |
|87|Heb.1.1-Heb.1.2|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 12/4/2; no read spent on this row; not reached |
|88|Heb.1.1|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 10/1/2; no read spent on this row; not reached |
|89|Heb.4.12|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 16/5/0; no read spent on this row; not reached |
|90|1Pet.1.25|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|91|2Pet.1.19-2Pet.1.21|1: Gavin Ortlund| 3 recorded (Gavin Ortlund, David King, Gregg R. Allison); C5 added David King, Gregg R. Allison (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 8/0/1; worked |
|92|2Pet.1.19|0: none mapped| 1 recorded (Gregg R. Allison); C5 added Gregg R. Allison (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 4/0/0; worked |
|93|2Pet.1.20-2Pet.1.21|1: Gavin Ortlund| 3 recorded (Gavin Ortlund, David King, Gregg R. Allison); C5 added David King, Gregg R. Allison (9Marks article, on at least part of the row); indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents: 7/0/1; worked |
|94|2Pet.3.16|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/0/0; no read spent on this row; not reached |
|95|1John.1.2|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 2/0/0; no read spent on this row; not reached |
|96|1John.2.2|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 7/0/4; no read spent on this row; not reached |
|97|1John.2.20|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 3/0/0; no read spent on this row; not reached |
|98|1John.2.27|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 4/0/0; no read spent on this row; not reached |
|99|1John.5.9|0: none mapped| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |
|100|1John.5.19|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|101|2John.1.7-2John.1.10|0: none mapped| measured, not read: indexed 9Marks/Credo/Truth Unites 2100/1000/577 documents mentioning it: 1/0/0; no read spent on this row; not reached |
|102|Rev.22.18|0: none mapped| not found: zero documents mention it in the indexed 9Marks (2,100), Credo (1,000) and Truth Unites (577) corpora; not a claim about the open web |

### lutheran · baptism

| Entry | Passage(s) | Baseline persons | C5 state / search |
|---|---|---|---|
| 1 | Matt.28.19 | 1: Jordan B. Cooper | 3 recorded (Cooper, Zickler, Halvorson); written arguments short; indexed Lutheran Reformation 223 (2 documents), Steadfast 6503 (80 documents); worked |
| 2 | Mark.16.16 | 0: none mapped | 1 recorded (Andrew Preus); short application; indexed Lutheran Reformation 223 (2 documents), Steadfast 6503 (29 documents); worked |
| 3 | Titus.3.5-Titus.3.7 | 1: Jordan B. Cooper | 1 existing (Cooper); read budget exhausted; additional hits not read; indexed Lutheran Reformation 223 (3 documents), Steadfast 6503 (68 documents); worked |
| 4 | Rom.6.4 | 1: Jordan B. Cooper | 2 recorded (Cooper, Surburg); indexed Lutheran Reformation 223 (2 documents), Steadfast 6503 (51 documents); worked |
| 5 | Matt.28.19 | 1: Jordan B. Cooper | 3 recorded (Cooper, Zickler, Halvorson); written arguments short; indexed Lutheran Reformation 223 (2 documents), Steadfast 6503 (80 documents); worked |
| 6 | Eph.5.26 | 0: none mapped | 0 qualifying persons mapped; list/context mentions only; read budget exceeded once; indexed Lutheran Reformation 223 (4 documents), Steadfast 6503 (41 documents); worked |
| 7 | Eph.4.5-Eph.4.6 | 0: none mapped | 2 recorded (Birkholz, Rolf Preus); partial-range applications; indexed Lutheran Reformation 223 (1 documents), Steadfast 6503 (44 documents); worked |
| 8 | Matt.23.2 | 0: none mapped | 1 recorded (Edmon); other candidates reprint Luther; indexed Lutheran Reformation 223 (0 documents), Steadfast 6503 (5 documents); worked |
| 9 | Mark.16.16 | 0: none mapped | 1 recorded (Andrew Preus); short application; indexed Lutheran Reformation 223 (2 documents), Steadfast 6503 (29 documents); worked |

### lutheran · eucharist

| Entry | Passage(s) | Baseline persons | C5 state / search |
|---|---|---|---|
| 1 | Matt.26.26-Matt.26.28, Mark.14.22-Mark.14.24, Luke.22.19-Luke.22.20, 1Cor.11.23-1Cor.11.25 | 1: Jordan B. Cooper | not reached |
| 2 | Matt.26.27 | 0: none mapped | not reached |
| 3 | Mark.14.23 | 0: none mapped | not reached |
| 4 | 1Cor.10.16 | 1: Jordan B. Cooper | not reached |
| 5 | 1Cor.11.27-1Cor.11.29 | 1: Jordan B. Cooper | not reached |
| 6 | 1Cor.11.28 | 0: none mapped | not reached |
| 7 | 1Cor.11.26 | 0: none mapped | not reached |
| 8 | Heb.10.4, Heb.10.10, Heb.10.14 | 0: none mapped | not reached |
| 9 | Isa.53.10 | 0: none mapped | not reached |
| 10 | Mal.1.11, Lev.3, Lev.7, Ps.56 | 0: none mapped | not reached |
| 11 | John.4.23-John.4.24 | 0: none mapped | not reached |
| 12 | Acts.3.21 | 0: none mapped | not reached |
| 13 | Eph.1.22 | 0: none mapped | not reached |
| 14 | John.1.14, Col.2.9, Acts.10.38, 2Cor.5.19 | 0: none mapped | not reached |
| 15 | John.6 | 2: Jordan B. Cooper, Rev. Philip Hale | not reached |
| 16 | Matt.11.28, Matt.9.12, 2Cor.12.9, Rom.14.1 | 0: none mapped | not reached |
| 17 | Gen.22 | 0: none mapped | not reached |
| 18 | Luke.21.33, Matt.28.18, Matt.17.5 | 0: none mapped | not reached |
| 19 | Gen.1.28 | 0: none mapped | not reached |
| 20 | 1Cor.14.2-1Cor.14.9 | 0: none mapped | not reached |
| 21 | Rom.6.9 | 0: none mapped | not reached |

### lutheran · papacy

| Entry | Passage(s) | Baseline persons | C5 state / search |
|---|---|---|---|
| 1 | Luke.22.25 | 0: none mapped | not reached |
| 2 | Matt.18.2 | 0: none mapped | not reached |
| 3 | John.20.21 | 0: none mapped | not reached |
| 4 | Gal.2.7 | 0: none mapped | not reached |
| 5 | 1Cor.3.6 | 0: none mapped | not reached |
| 6 | Matt.16.18-Matt.16.19 | 1: Jordan B. Cooper | not reached |
| 7 | John.21.15 | 0: none mapped | not reached |
| 8 | Matt.18.18 | 0: none mapped | not reached |
| 9 | John.20.23 | 0: none mapped | not reached |
| 10 | Matt.18.19 | 0: none mapped | not reached |
| 11 | 2Thess.2.4 | 0: none mapped | not reached |
| 12 | Titus.1.5 | 0: none mapped | not reached |
| 13 | John.20.21-John.20.23, Mark.16.15 | 0: none mapped | not reached |
| 14 | Rom.1.16 | 0: none mapped | not reached |
| 15 | John.18.36, Luke.12.14 | 0: none mapped | not reached |

### lutheran · sola-scriptura

| Entry | Passage(s) | Baseline persons | C5 state / search |
|---|---|---|---|
| 1 | Ps.119.105 | 0: none mapped | not reached |
| 2 | Gal.1.8 | 1: Rev. Paul Doellinger | not reached |
| 3 | 1Tim.3 | 0: none mapped | not reached |
| 4 | Titus.1.9 | 0: none mapped | not reached |
| 5 | John.10.12, Jer.15.19 | 0: none mapped | not reached |
| 6 | John.20.21-John.20.23 | 0: none mapped | not reached |
| 7 | Mark.16.15 | 0: none mapped | not reached |
| 8 | Rom.1.16 | 0: none mapped | not reached |
| 9 | John.18.36, Luke.12.14 | 0: none mapped | not reached |
| 10 | Phil.3.20, 2Cor.10.4 | 0: none mapped | not reached |

### reformed · baptism

| Entry | Passage(s) | Baseline persons | C5 state / search |
|---|---|---|---|
| 1 | Matt.28.19-Matt.28.20 | 2: Ligon Duncan, Sinclair B. Ferguson | not reached |
| 2 | 1Cor.12.13 | 0: none mapped | not reached |
| 3 | Rom.4.11 | 1: Sinclair B. Ferguson | not reached |
| 4 | Col.2.11-Col.2.12 | 2: Ligon Duncan, R. C. Sproul | not reached |
| 5 | Gal.3.27 | 0: none mapped | not reached |
| 6 | Rom.6.3-Rom.6.5 | 0: none mapped | not reached |
| 7 | Titus.3.5 | 2: Jim Cassidy, R. C. Sproul | not reached |
| 8 | Mark.1.4 | 0: none mapped | not reached |
| 9 | Acts.22.16 | 1: James White | not reached |
| 10 | Heb.9.10, Heb.9.19-Heb.9.22 | 0: none mapped | not reached |
| 11 | Acts.2.41, Acts.16.33 | 0: none mapped | not reached |
| 12 | Mark.7.4 | 0: none mapped | not reached |
| 13 | Mark.16.15-Mark.16.16, Acts.8.37-Acts.8.38 | 0: none mapped | not reached |
| 14 | Gen.17.7, Gen.17.9 | 0: none mapped | not reached |
| 15 | Gal.3.9, Gal.3.14 | 0: none mapped | not reached |
| 16 | Acts.2.38-Acts.2.39 | 3: James White, Ligon Duncan, R. C. Sproul and Derek Thomas | not reached |
| 17 | 1Cor.7.14 | 1: R. C. Sproul | not reached |
| 18 | Luke.18.15-Luke.18.16, Rom.11.16 | 0: none mapped | not reached |
| 19 | John.3.5, John.3.8 | 0: none mapped | not reached |
| 20 | Eph.5.25-Eph.5.26, Acts.2.38, Acts.2.41 | 3: James White, Ligon Duncan, R. C. Sproul and Derek Thomas | not reached |
| 21 | 1Pet.3.21 | 2: James White, Jim Cassidy | not reached |
| 22 | Rom.6.22 | 0: none mapped | not reached |

### reformed · eucharist

| Entry | Passage(s) | Baseline persons | C5 state / search |
|---|---|---|---|
| 1 | Matt.26.26-Matt.26.28, Mark.14.22-Mark.14.24, Luke.22.19-Luke.22.20, 1Cor.11.23-1Cor.11.26 | 2: R. C. Sproul, Sinclair B. Ferguson | not reached |
| 2 | 1Cor.10.16-1Cor.10.17, 1Cor.10.21, 1Cor.12.13 | 0: none mapped | not reached |
| 3 | Heb.7.23-Heb.7.24, Heb.7.27, Heb.9.22, Heb.9.25-Heb.9.26, Heb.9.28, Heb.10.11-Heb.10.12, Heb.10.14, Heb.10.18 | 0: none mapped | not reached |
| 4 | Matt.26.26-Matt.26.29, 1Cor.11.26-1Cor.11.28 | 1: Sinclair B. Ferguson | not reached |
| 5 | Acts.3.21, Luke.24.6, Luke.24.39, 1Cor.11.24-1Cor.11.26 | 1: Sinclair B. Ferguson | not reached |
| 6 | 1Cor.10.3-1Cor.10.4, 1Cor.10.16, 1Cor.11.28 | 0: none mapped | not reached |
| 7 | 1Cor.11.27-1Cor.11.32, 2Cor.13.5 | 0: none mapped | not reached |
| 8 | 1Cor.5.7-1Cor.5.8, 1Cor.10.16-1Cor.10.17, 1Cor.11.31 | 0: none mapped | not reached |
| 9 | Acts.2.42, Acts.2.46-Acts.2.47, 1Cor.11.25-1Cor.11.26 | 1: Sinclair B. Ferguson | not reached |

### reformed · papacy

| Entry | Passage(s) | Baseline persons | C5 state / search |
|---|---|---|---|
| 1 | Eph.1.10, Eph.1.22-Eph.1.23 | 0: none mapped | not reached |
| 2 | Col.1.18 | 0: none mapped | not reached |
| 3 | Eph.5.23, Eph.5.27, Eph.5.32 | 0: none mapped | not reached |
| 4 | 1Cor.1.2, 1Cor.12.12-1Cor.12.13 | 0: none mapped | not reached |
| 5 | Eph.4.11-Eph.4.13 | 0: none mapped | not reached |
| 6 | Isa.59.21, Matt.28.19-Matt.28.20 | 0: none mapped | not reached |
| 7 | 1Cor.13.12, Matt.13.24-Matt.13.30, Matt.13.47 | 0: none mapped | not reached |
| 8 | Matt.16.18 | 2: James White, W. Robert Godfrey | not reached |
| 9 | Eph.1.22 | 0: none mapped | not reached |
| 10 | Matt.23.8-Matt.23.10 | 0: none mapped | not reached |
| 11 | 2Thess.2.3-2Thess.2.5 | 0: none mapped | not reached |
| 12 | Isa.9.6-Isa.9.7 | 0: none mapped | not reached |
| 13 | 1Tim.5.17, 1Thess.5.12 | 0: none mapped | not reached |
| 14 | 1Cor.12.28, Ps.2.6-Ps.2.9, John.18.36 | 1: James White | not reached |
| 15 | Matt.16.19, Matt.18.17-Matt.18.18 | 2: James White, W. Robert Godfrey | not reached |
| 16 | John.20.21-John.20.23, 2Cor.2.6-2Cor.2.8 | 0: none mapped | not reached |
| 17 | 1Cor.5, 1Tim.5.20 | 0: none mapped | not reached |
| 18 | Acts.15.15, Acts.15.19, Acts.15.24, Acts.15.27-Acts.15.31, Acts.16.4, Matt.18.17-Matt.18.20 | 1: James White | not reached |
| 19 | Eph.2.20, Acts.17.11, 1Cor.2.5, 2Cor.1.24 | 0: none mapped | not reached |

### reformed · sola-scriptura

| Entry | Passage(s) | Baseline persons | C5 state / search |
|---|---|---|---|
| 1 | Rom.1.19-Rom.1.20, Rom.1.32, Rom.2.1, Rom.2.14-Rom.2.15 | 1: Keith Mathison | not reached |
| 2 | 1Cor.1.21, 1Cor.2.13-1Cor.2.14 | 0: none mapped | not reached |
| 3 | Heb.1.1-Heb.1.2 | 0: none mapped | not reached |
| 4 | Luke.1.3-Luke.1.4, Rom.15.4 | 0: none mapped | not reached |
| 5 | Isa.8.20, Rev.22.18 | 1: John MacArthur | not reached |
| 6 | 2Tim.3.15, 2Pet.1.19 | 2: Eric Watkins, Ryan McGraw | not reached |
| 7 | Eph.2.20, Rev.22.18-Rev.22.19, 2Tim.3.16 | 3: Eric Watkins, John MacArthur, Ryan McGraw | not reached |
| 8 | Luke.24.27, Luke.24.44, 2Pet.1.21 | 0: none mapped | not reached |
| 9 | 2Tim.3.16, 1John.5.9, 1Thess.2.13 | 2: Eric Watkins, Ryan McGraw | not reached |
| 10 | 1Tim.3.15 | 0: none mapped | not reached |
| 11 | 1John.2.20, 1John.2.27, John.16.13-John.16.14, 1Cor.2.10-1Cor.2.11 | 0: none mapped | not reached |
| 12 | 2Tim.3.16-2Tim.3.17, Gal.1.8, 2Thess.2.2 | 2: Eric Watkins, Ryan McGraw | not reached |
| 13 | John.6.45, 1Cor.2.9-1Cor.2.10, 1Cor.2.12 | 0: none mapped | not reached |
| 14 | 1Cor.11.13-1Cor.11.14, 1Cor.14.26, 1Cor.14.40 | 0: none mapped | not reached |
| 15 | 2Pet.3.15-2Pet.3.16, Ps.119.105, Ps.119.130 | 0: none mapped | not reached |
| 16 | Ps.19.7-Ps.19.8, Ps.19.11 | 1: Joel Beeke | not reached |
| 17 | Matt.5.18 | 0: none mapped | not reached |
| 18 | Isa.8.20, Acts.15.15, John.5.46 | 0: none mapped | not reached |
| 19 | John.5.39 | 0: none mapped | not reached |
| 20 | 1Cor.14.6, 1Cor.14.9, 1Cor.14.11-1Cor.14.12, 1Cor.14.24, 1Cor.14.27-1Cor.14.28 | 0: none mapped | not reached |
| 21 | Col.3.16, Rom.15.4 | 0: none mapped | not reached |
| 22 | Acts.15.15, John.5.46 | 0: none mapped | not reached |
| 23 | Matt.22.29, Matt.22.31, Eph.2.20 | 0: none mapped | not reached |
| 24 | Acts.28.25 | 0: none mapped | not reached |
| 25 | Eph.2.20, Acts.17.11, 1Cor.2.5, 2Cor.1.24 | 0: none mapped | not reached |
| 26 | Acts.17.11 | 0: none mapped | not reached |

### orthodox · baptism

| Entry | Passage(s) | Baseline persons | C5 state / search |
|---|---|---|---|
| 1 | John.3.5 | 1: Fr. Josiah Trenham | not reached |
| 2 | Acts.19.4 | 0: none mapped | not reached |
| 3 | Matt.28.19 | 0: none mapped | not reached |
| 4 | Acts.2.38 | 0: none mapped | not reached |
| 5 | Mark.16.16 | 0: none mapped | not reached |
| 6 | Col.2.11-Col.2.12 | 1: the hosts of The Lord of Spirits | not reached |
| 7 | Eph.2.2 | 0: none mapped | not reached |
| 8 | Mark.16.17 | 0: none mapped | not reached |
| 9 | Matt.16.24 | 0: none mapped | not reached |
| 10 | 2Pet.2.20 | 0: none mapped | not reached |

### orthodox · eucharist

| Entry | Passage(s) | Baseline persons | C5 state / search |
|---|---|---|---|
| 1 | Matt.26.26-Matt.26.28 | 1: the hosts of The Lord of Spirits | not reached |
| 2 | 1Cor.10.17 | 1: the hosts of The Lord of Spirits | not reached |
| 3 | 1Cor.11.28-1Cor.11.29 | 0: none mapped | not reached |
| 4 | John.6.54, John.6.56 | 1: the hosts of The Lord of Spirits | not reached |
| 5 | Luke.22.19 | 1: the hosts of The Lord of Spirits | not reached |
| 6 | 1Cor.11.26 | 0: none mapped | not reached |
| 7 | John.19.34, John.20.29 | 1: the hosts of The Lord of Spirits | not reached |

### orthodox · papacy

| Entry | Passage(s) | Baseline persons | C5 state / search |
|---|---|---|---|
| 1 | Eph.5.23 | 0: none mapped | not reached |
| 2 | Eph.2.19-Eph.2.20 | 1: Fr. John Maxwell | not reached |
| 3 | Eph.4.11-Eph.4.12 | 0: none mapped | not reached |
| 4 | 2Thess.2.15 | 0: none mapped | not reached |
| 5 | Titus.3.10, Titus.1.10-Titus.1.11 | 0: none mapped | not reached |
| 6 | Matt.18.17 | 2: Fr. John Maxwell, Robert Arakaki | not reached |
| 7 | Gal.2.11 | 1: Robert Arakaki | not reached |

### orthodox · sola-scriptura

| Entry | Passage(s) | Baseline persons | C5 state / search |
|---|---|---|---|
| 1 | 1Tim.3.15 | 5: Dr. Amir Azarvan, Fr. James Bernstein, Fr. John Whiteford, Fr. Josiah Trenham, Fr. Lawrence Farley | not reached |
| 2 | 2Thess.2.15 | 5: Dr. Amir Azarvan, Fr. James Bernstein, Fr. John Whiteford, Fr. Lawrence Farley, Robert Arakaki | not reached |
| 3 | Rom.3.2 | 0: none mapped | not reached |
| 4 | Luke.24.44 | 0: none mapped | not reached |

## Inputs for Pedro

- Prior-session corpus limits are documented in `apologists-tally-2026-11-02.md`. No new claim that a book or paid transcript is necessary has yet been established by C5.

## Lutheran pilot checkpoint — 09:52 UTC

- Lutheran Reformation: 223 posts, three REST pages; source snapshots in `corp/lutheran-reformation/posts-*.json`, robots permits public posts; delay 1.5 seconds. Index: 1,099 keys, 1,511 mentions, `meta/index-lutheran.txt` (later combined indexes will replace `idx/`).
- Documents mentioning page passages: Matt 28:19 = 2; Mark 16:16 = 2; Titus 3:5 = 3; Rom 6:4 = 2; Eph 5:26 = 4; Eph 4:5 = 1; Matt 23:2 = 0. Range counts are not summed across verses.
- Read windows: Flamme, “The Sufficiency of Scripture”; Zickler, “Concerning Rebaptism”; Flamme, “True Worship”; Schuermann, “Smalcald Article Study: The Gospel”; Bestul, “Formula of Concord Study”; Karkan, “Vocation”; “The Marriage Booklet”; Doellinger, “Genesis 2”; Preus, “First Commandment”; Birkholz, “Luther’s Baptismal Rites”. Zickler is a signed contemporary author, not Luther himself; his embedded Luther quotations must be distinguished from his own words.
- Method mistake: the first reading script iterated all distinct hits rather than limiting each passage to three. Eph 5:26 exposed four windows (one over budget). No further candidate reading for those seven distinct passages in this run; candidate selection must use a persisted per-passage read ledger before opening windows. This is not evidence that every source was exhausted.
- Steadfast robots.txt returns HTTP 404; this means no robots file, not an article access block. Public REST probe returns HTTP 200. The first crawler treated missing robots as fatal; corrected to allow absent robots and keep serial waits. Full crawl running in `corp/steadfast/`, `meta/crawl-steadfast.log`.
- The initial urllib crawler made no saved post requests; curl transport is used throughout. The successful 100-post curl transport probe is retained as `meta/lutheran-probe.json`, not added a second time to the corpus.

## Pilot close and Catholic start — approximately 09:58 UTC

- Pilot: all nine current entries worked; recorded-person coverage ≥2 on four page rows (two duplicate Matt 28 rows, Rom 6:4, Eph 4:5–6), versus zero baseline rows. This includes short and partial-range applications and does not establish two deep expositors for each verse. Remaining below two: five rows. Seven new persons, seven works; three outlets across the file. All new standing requires verification before publication.
- Timing estimate: ~14 minutes including orientation and initial coverage inventory; weekly 34 → 36%, +2 account-wide points. Shared-account costs cannot be assigned precisely. No CPH/LCMS corpus claim and no new captions.
- Read budget is now persisted in `meta/pilot-read-plan.json`; prior LR reads are listed above. Eph 5:26 over-read is explicitly retained as a method failure. Two Matthew 23 candidates are Luther reprints, not contemporary apologists; not counted. Surburg is the speaker in a Norm Fisher repost; Fisher is not counted.
- Catholic corpus call: current sitemap has 31,775 URLs. Selected **899** URLs from magazine/article/tract and the five named transcript routes by a fixed four-doctrine keyword filter over slugs. This is a bounded topical corpus, **not** all catholic.com and not a reconstruction of the earlier 1,963-page corpus. URL manifest: `meta/catholic-urls.json`; raw HTML: `cc/html/`; indexable text: `cc/corpus/`; serial crawler: `tools/crawl-cc.py` (1.5-second waits, stop on 403/429, quota check every twenty pages).
- Armstrong Blogger feed reports 1,470 posts but returned only 43 on a request for 500. Corrected pagination uses the actual returned length, not requested length or the advertised next link; otherwise hundreds of posts would be skipped. Current snapshots in `corp/armstrong/feed-*.json` and converted `posts-*.json`; crawler `tools/crawl-blogger.py`. Earlier 43-post “done” was a crawler error, not a corpus negative.
- Global network scheduler `tools/net.py` serializes all crawl/byline requests with a shared file lock and at least 1.5 seconds between completed requests. Catholic Answers crawler was checkpointed after its first few pages and restarted with this lock; saved pages skipped, no duplicate corpus records. Crawler logs retained. This permits local indexing during network work without simultaneous HTTP requests.

## Baseline audit correction — 10:00 UTC

- The initial generated-JSON-only audit missed the Catholic Baptism page's legacy inline quotes. Read those records too before selecting new candidates: Matt 28 has Heschmeyer and Horn, plus Otálora (excluded by the existing decision); Acts 2:38 has Broussard and Heschmeyer. Existing inline records are now included in every row's baseline. No old passage is called empty merely because its research Markdown lacks a matching section; duplicates will be checked against both locations.
- Another existing generated-data defect: the Catholic Jude 3 section is encoded as Jude chapter 3, verses 1–999, whereas the page ref is Jude.1.3. No data edits authorized. Inline records restore its baseline; scratch query will supplement the one-chapter reference syntax. Do not claim absence from an uncorrected index or generated mapping.
- Source counts and coverage counts are different: the legacy section tally also counts non-passage headings such as “Verification” as zero-person sections. Retain that script's before/after for comparability, but do not present its zero count as the number of empty page entries.

## Catholic Baptism first harvest — approximately 10:04 UTC

- Armstrong: 1,470 documents, 10,154 indexed keys, 36,188 mentions; build ~36 seconds. `indexes/armstrong/{docs.json,index.json,texts.pkl,stats.json}`; all four Catholic candidate manifests in `meta/candidates-armstrong-catholic-*.json`. Mentions counted by document, first three ranked by occurrence count; no verse-by-verse web search.
- Read eight distinct first candidates for the Baptism group; reused already opened posts for other passages. `meta/reads.jsonl` records targeted reads. Added two exact, nonduplicated cuts from posts 523 and 14. Post 523 offers an actual printed-book excerpt online (2004, pp. 102–111); not an input requiring Pedro to obtain the book for this argument.
- Speaker verification of the infant-baptism dialogue: HTML blue text is the unnamed Baptist pastor; the selected “Now, of course” and “In other words” replies have no blue ancestor. Do not flatten the dialogue and attribute every line to Armstrong. Post 368 (“Documentation of Robert Sungenis…”) explicitly consists of Sungenis quotations: rejected as Armstrong evidence. Post 138’s first hit quotes Luther, not Armstrong: rejected for baptism exposition. Post 1173 is about mortal/venial sin; post 1081’s seals are a citation list; post 967’s Mark 10:38 reference is a list about penance; post 639’s Eph 4:25 is a list about truth. None is counted as verse-level baptism exposition.
- Source limits: Scripture Catholic `robots.txt` returned HTTP 406 (~300-byte block). No articles fetched and no workaround attempted. `sources/salza/robots.txt`, `meta/crawl-salza.log`, `tools/salza.py` retain the response. This is blocked, not “not found in the corpus”. Marshall crawl underway, `corp/marshall/`, `meta/crawl-marshall.log`.
- Known limitation of the index: occurrences count embedded quotations and lists equally; ranking is a reading aid, not evidence of exposition or of the speaker. The record must explain partial coverage of grouped page entries.

## Catholic second harvest — approximately 10:10 UTC

- Marshall corpus complete: **4,186** posts (42 REST pages), index 2,471 keys and 4,679 mentions; build ~12 seconds. Source snapshots `corp/marshall/`; source index `indexes/marshall/`; four Catholic hit/ranking manifests in `meta/candidates-marshall-catholic-*.json`. The 2026-11-03 historical size 4,184 is not substituted for today's count.
- Added: 1 Tim 2:4 (Marshall explaining the commission’s reasoning on unbaptized infants); Mark 10:38 (Marshall’s online book excerpt); Gen 14:18 (Marshall’s online Paul-book excerpt); 1 Cor 4:1 (Marshall’s application to priestly ministry); John 20 commissioning context (Marshall); 2 Cor 11:28 (Armstrong’s answer to Engwer). Exact portions and partial-range limitations are in each record. No claim that merely combining one speaker on one verse and another on a different verse gives two per verse.
- Marshall negatives: the Gal 3:27 post is a liturgical application; the “Holy Ghost” piece uses 1 Cor 12:13 in a short postscript; the 500-witness article is resurrection chronology, not a papacy argument; the Mary/philosophy article does not argue oral transmission; the Hebrews 1:2 hit in the deuterocanon post is a quotation from Athanasius, not Marshall’s exegesis; the Roman Polanski post's 1 Cor 4:1 application is retained with its limited depth stated. No Church Father is counted as a contemporary voice.
- St. Paul Center is not WordPress at the old API route (HTTP 404). Its robots permits public posts and advertises a sitemap. Eight sitemaps enumerate 2,729 post URLs. **168** URLs explicitly titled “Scott Hahn reflects…” were selected as a bounded written-reflections corpus, rather than the many daily audio/video pages. Manifest `sources/hahn/reflection-urls.json`, sitemap snapshots and all URLs in `sources/hahn/`; serial crawl `tools/crawl-hahn.py`, snapshots `corp/hahn/`, log `meta/crawl-hahn.log`. No claim that these are all Hahn’s writings.

## Catholic page-row checkpoint

- Every Catholic row now has Armstrong/Marshall document counts in its Progress table and this log. These two corpora are finished; Catholic Answers/Hahn are still pending. Zero indexed documents is reported only for the named corpus, not for the whole open web.
- Baseline recorded-person row coverage (with legacy inline records included): **44/64** rows ≥2. Current after the first two harvests: **48/64** rows ≥2 on at least part of each grouped entry. This is not the stronger “two deep readings per constituent verse” claim. The legacy section tally is a separate metric and will be rerun at handoff.
- A local script initially failed on integer/string concatenation before writing any second-harvest record; corrected and rerun once. No partial duplicate additions were produced.

## Verification and checkpoint — 2026-11-08, approximately 10:18 UTC

- `nvm use` selected Node 24.22.1; `npm run verify` **passed** (typecheck, lint and tool checks, formatting, production build). Log: `meta/verify.log`. No runtime/source changes were made. Build’s metadataBase warning is retained in the log.
- `tools/audit-records.py`: **16 new quoted paragraphs matched 16/16** against the retrieved source texts after whitespace normalization. It also checks every prior committed line remains in order in each edited research file; no prior block or tag was deleted. Wrapped lines in the new quotes were normalized for Markdown rendering; wording and punctuation were not changed. Audit output: `meta/quote-audit.json`. This is an automated exact-text check, not an independent theological or standing review.
- Marshall identity check: the five cited pages’ HTML structured bylines name **Dr Taylor Marshall**. Cached HTML in `html/`; `meta/marshall-bylines.json` and `.log`; no reliance on a generic WordPress user as speaker. His church office and broader standing remain unverified as the records state.
- Catholic Answers pages expose the article/transcript body and author in `__NEXT_DATA__.props.pageProps.content`. Updated the source-index reader to use `content.body`, title, date and author from the saved HTML, excluding menus and scripts. No refetch is needed. Any fallback to full-page text is explicitly marked in metadata and cannot silently establish a qualifying quote.
- Catholic Productions robots permits public blog HTML; its sitemap lists 455 articles. Selected **58** by a fixed doctrine-related slug filter; `sources/pitre/{robots.txt,sitemap.xml,articles.xml,selected-urls.json}`. `tools/crawl-pitre.py` stores snapshots in `corp/pitre/`; log `meta/crawl-pitre.log`. No store/product, checkout or paid media requests. Text must be attributed to the actual speaker/author on each article, not automatically to Pitre.
- Latest observed weekly/window: **39% / 46%** at 10:17 UTC; first observed weekly 34%, +5 account-wide points so far. All source requests share `tools/net.py`’s lock and spacing. Source crawlers recheck weekly before each group of twenty pages and stop at 50%; main checks at least every ten minutes.

### Scratch tools currently written/copied

- `tools/audit-records.py` (2,147 bytes).
- `tools/candidates.py` (1,379 bytes).
- `tools/catholic-first.py` (6,502 bytes).
- `tools/catholic-progress.py` (4,243 bytes).
- `tools/catholic-second.py` (9,227 bytes).
- `tools/coverage.py` (6,808 bytes).
- `tools/crawl-blogger.py` (1,617 bytes).
- `tools/crawl-cc.py` (1,719 bytes).
- `tools/crawl-hahn.py` (2,297 bytes).
- `tools/crawl-pitre.py` (2,297 bytes).
- `tools/crawl.py` (1,225 bytes).
- `tools/hahn-maps.py` (629 bytes).
- `tools/hahn-sitemap.py` (428 bytes).
- `tools/marshall-bylines.py` (786 bytes).
- `tools/net.py` (862 bytes).
- `tools/pilot-additions.py` (4,538 bytes).
- `tools/pilot-byline.py` (623 bytes).
- `tools/pilot-finish.py` (10,147 bytes).
- `tools/pitre-map.py` (790 bytes).
- `tools/probe-hahn.py` (577 bytes).
- `tools/probe-pitre.py` (583 bytes).
- `tools/read-candidates.py` (1,755 bytes).
- `tools/salza.py` (827 bytes).
- `tools/source-index.py` (2,505 bytes).
- `tools/tally.py` (1,864 bytes).
- `tools/tally_md.py` (1,056 bytes).
- `tools/usage.py` (538 bytes).
- `tools/vindex.py` (9,421 bytes).
- `tools/wpcrawl-original.py` (1,123 bytes).

- Scripts are local execution aids, not repository changes. Resume from existing snapshots/manifests; do not restart a finished crawl or reread a rejected candidate. The C5 log itself remains partial until all twenty files meet the defined worked-pass finish line.

## Hahn harvest and Catholic Productions eligibility correction — approximately 10:30 UTC

- Hahn: **168 written reflections**, 4,081 keys, 5,729 mentions; no publication date was established on the pages examined, so each record identifies the retrieved web edition without inventing a year. Source title explicitly names Scott Hahn. Seven nonduplicated cuts added: Acts 1:12–14 context; 1 Cor 15:5 appearance in the context of calling; Matt 28 commission; Luke 2 / Col 3 application; Luke 24 / apostolic understanding; Heb 1 / revelation in the Son; Matt 18 / Church authority. Two cross-references reuse cuts once rather than repeating the same words. `meta/hahn-harvest.json` records the cuts.
- Depth limitations retained: the Acts 1 list is not an exposition of Peter’s rank; Mary / Col 3 is a short application; the Eph 1:3–14 reflection does not explain the seal; the Gal 3:26–29 reference explains the family of faith without expounding verse 27; the Phil 3:8–14 reflection emphasizes verses 10–14 rather than verse 8; the Christmas reflection does not expound the worship command of Heb 1:6. None of those last four is promoted into a new qualifying exposition.
- Catholic Productions: 58 pages crawled; **24 contain a marked “Full Transcript” section**. Initial index included unsigned editorial summaries, FAQs and product/review boilerplate. The first three candidate windows exposed that problem: Blood & Water, Corpus Christi Year C, and Papal Authority over Liturgy are descriptions of Pitre’s teaching, not transcribed first-person words. **No quotation or person was added from those summaries.** Reindexed only the marked full-transcript segments; now **136 keys, 217 mentions**, 24 eligible documents, 34 excluded pages. Updated all four Pitre candidate manifests. This correction prevents summary references from masquerading as Pitre’s own verse expositions.
- Future Pitre lead, already indexed but not read because the Baptism entry 15 read budget is spent: document 38, “Why Was Jesus Baptized? The Baptism & the Cross,” contains a marked transcript with John 19:34. A later run can inspect that actual speaker segment; do not use document 3’s editorial summary as a substitute.
- Read budgets count shared already-opened documents too. Source indexes do not determine who speaks or what is explained; the eligible-segment boundary must be selected first. No new captions, paid transcripts or print scans used.

## Catholic Productions transcript harvest — approximately 10:35 UTC

- Five signed-speaker transcript cuts: John 3:5 (159 words), Acts 2:38 (110), Rom 6:3–11 (174), 2 Thess 2:15 within Mark 7 (166), Acts 2:42’s four activities (197). Stored once each; the Acts cut is cross-referenced for the other doctrine. Exact cuts in `meta/pitre-harvest.json`. This adds Pitre outside Catholic Answers for several already-populated passages and gives the explicit tradition argument a second fuller voice after Akin.
- Checked the three Baptism legacy-inline passage records before adding a different work/person; no Heschmeyer/Broussard quote copied a second time. John 6 and Matt 16 of the Catholic pilot are not repeated.
- The John 1:35–42 transcript (document 34) reads Cephas in the Bible passage but its own exposition concerns John’s disciples and the Lamb of God, not Peter’s renaming; no new Papacy person added from that mere reading.
- The initial publisher-description candidates remain rejected; the usable cut must lie inside the marked transcript and outside quoted third-party material. No caption or paid-content access was needed.

## Additional verse-commentary record

- Phil 3:8: kept Armstrong’s actual explanation of the comparison with knowing Christ (from the already-opened post 1265), explicitly as commentary in a justification debate, not a canon/authority proof. The historical charge following it is not copied. One person, not two. The other two read candidates do not provide a second explanation of verse 8; no claim that no open commentary exists outside this budget.

## Catholic Answers final harvest — approximately 10:45 UTC

- Completed the **899-URL topical manifest**: **883 pages retrieved**, 16 HTTP 404s (retained in `meta/crawl-cc-errors.jsonl`). No 403/429 workaround. Body-only index: 4,851 keys, 12,462 mentions, ~17 seconds. Raw HTML in `cc/html/`, original full-page text in `cc/corpus/`; actual index text uses the saved `content.body`, author and date fields. Source index `indexes/catholic/`; four full hit/ranking manifests in `meta/candidates-catholic-catholic-*.json`.
- Added: Staples on Eph 4:30’s seal in the **confirmation**, not baptism-only, context; Summers’ brief Gal 5:3 supporting citation (zero extended-depth persons); Sonna’s labelled dialogue argument on 2 Cor 11:28 (not assigned to bylined host Horn); Waiss on Luke 24:25–27 and 45. `meta/catholic-final-cuts.json` retains the exact cuts. Each record keeps the context limitation.
- Eucharist adoration entry: the three-read budget was Armstrong’s proof list, Hahn’s Christmas reflection (not an exposition of Heb 1:6’s worship command), and Peters’ Jehovah’s Witnesses proof list. Peters’ section 8 gives a proposition plus Bible and Watchtower quotations, not an extended verse-level explanation; not promoted into a qualifying person. Matthew 18:20 in that same article is a supporting divinity proof, not a new extended Sola Scriptura exposition.
- Remaining open-source leads are not called absent: Catholic Col 3:16 has two Catholic Answers hits (Heschmeyer, Akin), Phil 3:8 has three (Staples and Armstrong), and 1 Tim 2:4 has four; the relevant read budgets were spent before those candidates could be opened. These are **next-run inputs**, not claims that only a paid book can help. The full manifests allow resuming without a crawl or a web hunt.

## Catholic ordered pass close — 2026-11-08 10:51 UTC

- All **64 current page rows worked**, with five completed indexed corpora, explicit negative/limited results and per-row counts. Recorded persons on at least part of a grouped row: **44/64 → 57/64** with ≥2. **This is not a count of two deep expositors for every constituent verse.** Short applications, inherited unverified depth, confirmation context and cross-range combinations are explicitly retained as limitations. Seven rows remain below two recorded persons.
- Workflow call: “complete” for moving to Baptist means the prompt’s **worked-pass finish line** (≥2 or what was found plus a scoped search line), with the three-candidate cap respected. It does not erase the under-two/depth gaps or claim all open texts were exhausted. A new run should start with the saved uncut Catholic leads, not a fresh crawl.
- Catholic approximate duration: ~51 minutes after the pilot (09:58–10:49 UTC); observed weekly 36 → 43%, +7 account-wide points. Exact source/quote audits will be rerun after the handoff additions; the earlier `npm run verify` passed.
- Baptist now takes priority; all **280** actual current page rows will be inventoried against its named corpora, with existing bylines and rejected S2 candidates checked before adding anything. Remaining non-Catholic work stays not reached until those four files are worked or a named block/read cap stops that file.

## Baptist start and quote-audit correction — approximately 10:50 UTC

- Catholic pass closes with **57/64** rows having ≥2 recorded persons on at least part of the entry, from 44/64; seven below two, with explicit depth/range/read-cap limitations. The ordered-workflow call and all source counts are above. No claim of complete two-person depth on every verse.
- The first expanded quote audit reported five missing matches because the checker had not loaded the new Catholic Answers index at all. Added that source to the checker’s lookup, then reran; the source cuts themselves were not changed. This was a checker coverage failure, not a source-text correction. Audit now includes all saved source indexes.
- Catholic elapsed estimate corrected to **~51 minutes** (09:58–10:49 UTC); latest account weekly **43%**, versus 36% at pilot close, **+7 shared-account points**. Timing/cost includes crawl waits and concurrent account usage.
- Started Baptist public corpora. 9Marks uses custom `article`, not `posts`; snapshots/log `corp/9marks/`, `meta/crawl-9marks.log`. Four Baptist Progress blocks set to partial; current page rows still not reached until measurement. Existing Ortlund, Robin and Zaspel blocks are preserved. All eleven other non-Catholic files beyond the Lutheran pilot stay not reached.

## Baptist continuation (Claude, 2026-11-08, after the Codex window cap)

- **Indexes built** with `tools/source-index.py` (9Marks 2,100 documents, 8,226 verse keys; Credo 1,000 documents; Truth Unites 577), then `tools/baptist-rank.py` ranked every one of the 280 Baptist page rows across the three corpora (`meta/baptist-ranked.json`). Byline of each page was read from the saved page's own author metadata (JSON-LD `author`), fetched once per document through `tools/net.py` (`tools/bread.py`; HTML cached under `corp/9marks/html/`). Founders (403) and every other blocked source were left alone.
- **Reads:** 27 windows of about 2,000 to 3,000 characters over 25 distinct documents (Baptist and Catholic leads together) (ledger: `meta/reads.jsonl`), never more than about one window per document; no whole document read, no web search per passage.
- **Written:** 26 Baptist records (12 + 6 + 8, several of them the same passage placed in two doctrine files) from 14 distinct bylines (Tiago Oliveira, Caleb Morell, David Schrock, Andrew Wilson, Caleb Batchelor, Trent Hunter, Benjamin Merkle, Gregg R. Allison, David King, Samuel Parkison, Bobby Jamieson, Sam Emadi, Stephen J. Wellum, Ben Robin; all 9Marks articles) and one Catholic record (Joan Summers). Each quote was cut by script from the stored text between two marker phrases I chose after reading the window, so the wording is the page's; `tools/audit-bapt.py` matched **100 of 100** new quote paragraphs exactly (whitespace-normalized) against the stored page texts. Every new person has `standing: to verify before publishing`; the page's own line (byline) is the only identification; nothing was researched about their churches or offices.
- **Baptist rows with at least 2 recorded persons, on at least part of the row** (not the stronger claim of two deep expositors per verse): baptism 2 → **23** of 61; eucharist 0 → **11** of 47; papacy 0 → **8** of 70; sola scriptura 0 → **6** of 102. Total 2 → **48** of 280. Every row of the four Baptist tables now says one of: `worked` (with the persons), `measured, not read` (documents counted, no read spent) or `not found` (named corpora and sizes). The 280-row coverage is **not complete**: the budget went to the best-matching articles, not to every row.
- **What the corpora do and do not give.** Baptism and the Lord's Supper rows have real, on-point expositions in 9Marks (Oliveira, Morell, Schrock, Wilson, Batchelor, Jamieson, Hunter). Papacy rows are read through congregational polity (Matt 16:19, 18:15–20, Acts 14:23, 1 Tim 3): Hunter, Wellum, Merkle, Robin; none addresses a papal claim and none should be taken as the Baptist answer to Rome. Sola Scriptura rows are thin: Allison (2 Pet 1:19–21, 2 Tim 3:15–17, 1 Cor 2), King (2 Tim 3:16, 2 Pet 1:21, Prov 30:5), Parkison (Matt 22:29); most proof-text rows (Ps 119, Isa 8:20, Deut 4:2, Rev 22:18, Acts 17:11) have zero or one passing mention in the three corpora, which is a limit of these corpora, not of the tradition. A 9Marks byline is a person writing in a ministry with many authors; no quote is attributed to «9Marks».
- **Catholic gaps worked:** 1 Tim 2:4 (baptism row 14): a second person (Joan Summers). Read and **not qualifying**: Heschmeyer «The Bible Against Tradition?» (Col 3:16 appears inside a quoted Vatican II passage, not his words), Akin «The Heart, the Bible, and Science» (Col 3:16 used for the heart as seat of emotion, not for the word of Christ), Staples «Where Is the Immaculate Conception in the Bible?» (Phil 3:8–12 as a passing contrast). **Not read, still open:** Catholic Productions document 38, the other 1 Tim 2:4 hits, Eph 4:25, Heb 1:6 group.
- **Not done:** Lutheran (three doctrines), Reformed, Orthodox, and any new Baptist source beyond the three crawled ones (Southern Baptist seminary and association sites, Baptist Union). Scripture Catholic (406) and Founders (403) remain blocked.
- **Tools added** (scratch): `tools/baptist-rank.py`, `tools/bread.py`, `tools/bapt-add.py`, `tools/audit-bapt.py`, `tools/bapt-coverage.py`; `meta/batch1.json` to `batch4.json` hold the record definitions.
- **Section tally rerun** (`tools/tally.py`, the stricter measure: persons within one section's argument): Baptist 36 sections, 0 persons: 1, 1 person: 34, 2 persons: 1; Catholic 71 sections, at least 2: 49. The row measure above and this section measure differ on purpose: the new Baptist records are separate arguments by separate authors, so each section shows one person while the row table counts the persons across sections.

