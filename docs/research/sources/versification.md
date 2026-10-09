_Report from the overnight source research of 2026-10-09 (agent-written; synthesis in `../sources.md`). Paths like `samples/…` refer to `~/Desktop/dev/doctrina-research-2026-10-09/samples/`, outside the repo._

# Versification test report (agent: versification)

Everything below was computed by me on real files, downloaded 2026-10-09 from eBible.org (VPL zips) and STEPBible-Data (TVTMS). Scripts are in `samples/versification/tools/` (python3, run from the sample dir with `PYTHONPATH=tools`). Raw outputs: `diff_report.txt`, `map_<edition>_to_KJV.tsv`, `versions.json` (chapter -> verse list per edition), `tvtms.txt`.
Marked (mem) = from memory/unverified. Everything else was measured.

## 1. What was downloaded

| id | what | books / chapters / verses (VPL) | license (from the edition's own about.htm / translations.csv) |
|---|---|---|---|
| eng-kjv2006 | KJV (used as pivot "KJV standard") | 66 / 1189 / 31102 | PD |
| engbsb | BSB | 66 / 1189 / 31086 (16 verses omitted, numbers kept) | PD |
| spaRV1909 | Reina-Valera 1909 | 66 / 1189 / 31102 (18 EMPTY padded verses) | PD |
| spapddpt | Palabra de Dios para ti | 66 / 1189 / 31081 | **CC BY 4.0**, (c) 2020 Asociacion Biblica Latinoamericana (about.htm) - not PD, commercial use OK with attribution |
| spablm | Santa Biblia libre para el mundo | 81 / 1402 / 38058 | PD; about.htm says "borrador de traduccion, en revision" (draft; translated from WEB) |
| engwebu | WEB Updated (all DC) | 81 / 1402 / 38058 | PD |
| eng-web-c | WEB Catholic book order | **72** / 1278 / 33875 - **GEN, EST, DAN missing**, no 1ES/PRM/PSX/3MA/4ES/4MA | PD (translations.csv: OT 37 books) |
| engDRA | Douay-Rheims 1899 | 73 / 1334 / 35811 | PD |
| latVUC | Clementine Vulgate 1598 (+Glossa/Migne 1880 per about) | 73 / 1334 / 35809 | PD |
| grcbrent | Brenton **Greek** LXX (not English) | 52 / 1103 / 28597, OT+DC only (no NT) | PD |
| TVTMS | STEPBible versification mapping, 25,138 expanded rows | file 5.8 MB | CC BY 4.0 (Tyndale House); header says do not redistribute, link to github.com/STEPBible |

Not tested: Oso 1569 (not fetched; eBible has no Oso id; translations.csv lists spaRV1909, spav1602p (Valera 1602 Purificada, (c) 2007-2024 Iglesia Bautista Biblica de la Gracia, redistributable), spavbl, sparvg, spabll (Latin-American Biblia libre, 16 DC books vs 15 in spablm)). The "Oso Esther/Daniel empty" problem is therefore unverified by me.
VPL was used for all; DRA USFM was spot-checked: it carries `strong="H..."` attributes per word and has no verse bridges or `\d` titles (psalm title sits inside v1).

## 2. Per-edition findings: broken / missing / padded

- **spaRV1909 is NOT what its verse counts say.** Counts equal KJV exactly only because eBible padded with 18 empty verses: Num 12:16, 29:40; 1Sa 23:29; 2Sa 20:26; 2Ch 33:25; Job 35:16, 38:39-41, 40:20-24; Hos 11:12; Jon 1:17; Act 19:41; 2Co 13:14. Underneath it is Hebrew-style numbering (Jon 2:1 = KJV 1:17; Hos 12:1 = KJV 11:12; Num 30:1 = KJV 29:40; Num 13:1 = KJV 12:16) plus RV-specific shifts in Job 38-41. Text-similarity check against spapddpt (same language, both mapped to KJV numbering) shows **10 chapters whose text is misaligned if you trust "same chapter:verse = same verse"**: Num 13, Num 30, 1Sa 24, 2Ch 33, Job 39, Job 40, Hos 12, Jon 2, (Ps 64, Ps 134 weaker). Rest of the 1189 chapters align (mean Jaccard 0.37).
  TVTMS has a "SpanishRV" rule block (91 rows, only Job 39-41) but its tests expect Job 39 with 37 verses (`Job.39:37 -> Job.40:4`); eBible's RV1909 has 30, so the block does not fire. TVTMS Hebrew rules for Jon 2:1/Hos 12:1/1Sa 24:1 do not fire either (tests like `Jon.2:11=Last`, but RV1909 merged 2:10-11 into 10; `Hos.12:15=Last` etc.). Only Num 30:1-16 (16 verses), 2Co 13:12-13 and Act 19:40 map. => **Needs per-edition text-alignment QA, TVTMS is not enough for RV.**
- **spapddpt**: NRSV-style numbering (2Co 13:13 = KJV 14; 3Jn 15 verses; Rev 12:18). Omits Mark 16:10-20 (ends at 16:9), Luke 22:44, John 7:53/8:2-11, 2Co 13:14 (renumbered). TVTMS "Eng-KJV" rows map 2Co/Rev correctly; 3Jn 14-15 not mapped by my evaluator; a false-positive fired on Exo 25:7-34 (my word-length test, a prototype bug).
- **spablm / engwebu** (identical structure, 38,058 slots): 29 empty verses, same in both: Sirach 24 (1:5, 1:7, 1:21, 3:19, 10:21, 11:15, 13:14, 16:15, 17:5/9/16/18/21, 18:3, 19:18/21, 20:3/32, 22:9, 23:28, 24:18/24, 25:12, 26:19 = verses in Latin/other recensions not in Greek), Luke 17:36, Acts 8:37/15:34/24:7, Rom 16:25 (+16:26-27 absent; the doxology sits at **Rom 14:24-26** = TVTMS "PassageMoved"). Esther: EST (10 ch, 167 v) + ESG (Greek Esther with additions inline, 10 ch, 205 v, Esg 4 has 47 verse numbers with gaps). Daniel: DAN 12 ch + DNG 14 ch (Dan 3 = 97 v incl. Song, Susanna = DNG 13 64 v, Bel = DNG 14 42 v). Spanish text exists everywhere I sampled (EST 1:1, ESG 1:1, DNG 3:1/13:1, BAR 6:1, 3MA, 4ES, PSX, PRM, 1ES) - **no empty Esther/Daniel.** Only caveat: "draft" status in about.htm and the 3MA/4ES/4MA/1ES/PRM/PSX extras (Orthodox/Slavonic appendix) are present only in the engwebu/spablm family.
- **eng-web-c**: missing Genesis, Esther, Daniel entirely (translations.csv also says OT 37 books, updated 2026-10-08) -> use **engwebu** for English DC, not eng-web-c.
- **engbsb**: 15 chapters with gaps (verse numbers omitted, not shifted): Mt 17:21, 18:11, 23:14, Mk 7:16, 9:44, 9:46, 11:26, 15:28, Lk 17:36, 23:17, Jn 5:4, Ac 8:37, 15:34, 24:7, 28:29, Ro 16:24. Phil 1:16/17 swapped vs KJV (TVTMS notes it, maps it).
- **engDRA vs latVUC**: both "Vulgate" but 14 chapters differ in verse count (Gen 5, Ps 15/19/42/125/135, Isa 45/46, Jdt 4, Sir 29, Jn 11, 2Co 1, 1Th 4, 2Th 2). e.g. Jn 11:57 exists in DRA, not in latVUC. => even "Latin vs its English translation" is not 1:1; every edition needs its own mapping.
- **grcbrent** (Greek LXX): 91 verse keys appear more than once (e.g. Jos 9:2 x7, Pro 33 keys, 1Ki 11, Gen 31:50, Exo 28:29) - the VPL cannot be keyed on book/chapter/verse alone; 136 chapters have non-contiguous numbers. No NEH/EST/DAN books (Ezra+Neh merged as EZR 1-23 = LXX 2 Esdras; ESG; DNG 12 + SUS + BEL as separate books), PSA has 151 chapters, Proverbs has no ch. 30 (LXX order), JOE 4 ch, MAL 3 ch, BAR 5 + EPJ 1 (Letter of Jeremiah separate, vs Bar 6 elsewhere), Jer 1299 v vs 1364 (LXX order of Jer 25-51).

## 3. Differences vs reference (chapters with different verse counts)

Counts are chapter-level (max verse). Full lists in `diff_report.txt`.

| comparison | #chapters differing | classification |
|---|---|---|
| BSB vs KJV | 0 (16 verses omitted, numbers preserved) | critical text gaps |
| RV1909 vs KJV | 0 on paper (hidden by 18 padded empties, see above) | Hebrew numbering + RV merges |
| spapddpt vs KJV | 4: Mk 16 (9 vs 20), 2Co 13 (13 vs 14), 3Jn 1 (15 vs 14), Rev 12 (18 vs 17) | NRSV-style splits + shorter Mark ending |
| engwebu vs KJV (Protestant books) | 2: Rom 14 (26 vs 23), Rom 16 (25 vs 27) | Romans 16:25-27 moved to 14:24-26; plus 15 DC/extra books |
| DRA vs KJV | **217 chapters** (of 1189 shared) | see below |
| DRA vs latVUC | 14 | edition-level noise |

DRA vs KJV 217 chapters = Psalms **139/150** (Greek/Vulgate numbering shifts: 9-10 merged, 114-115 merged, 116 split, 147 split; plus title counted as v1 = +1 in ~100 psalms; DRA 2530 v, Vulgate 2527 v, KJV 2461 v) + 78 others: Esther 10 (13 vs 3 v) and chapters 11-16 (additions, 108 extra verses; DRA Est has 275 v vs 167); Daniel 3 (100 v vs 30: Prayer of Azariah + Song), Dan 4 (34 vs 37: Vulgate puts 3:98-100 as 4:1-3), Dan 13 Susanna (65) and Dan 14 Bel (42) as extra chapters; Job 16, 39-42; Num 11-13, 20, 29-30; Ecc 4-7; Sng 1, 5, 6; Isa 45-46; Jer 37; Eze 2; Hos 2, 13, 14; Jon 1-2; Mic 5; Hag 1-2; Joel same as KJV (3 ch) but Hebrew/Greek (Brenton) have 4; Malachi DRA 4 ch = KJV 4 vs Brenton/Hebrew 3; Gen 49-50, Exo 40, Lev 26, Jos 4/5/21, Jdg 5/21, 1Sa 20/23/24, 3 Kings 22 (54 vs 53), 1Ch 11/20, Neh 3/12; NT: Mt 17, Mk 4/8/9, **Jn 6 (72 vs 71)**, Ac 7/14/19, 2Co 13, 1Th 4, 2Th 2, Rev 12.
Deuterocanon DRA vs WEB (chapters differing): Tobit 13/14 (Vulgate recension, 298 v vs 244), Judith 14/16, Wisdom 7/19, **Sirach 47/51** (1591 v vs 1383; Latin has extra verses and swaps the order around 30:25-33:13a/36), Baruch 2/6 (Bar 6 = Letter of Jeremiah: 72 v in DRA, 73 in WEB, separate book EPJ in Brenton), 1 Mac 3/16, 2 Mac 3/15. Brenton vs DRA: Sirach 47 chapters differ, Tobit 12, Judith 14.

Specific cases asked for, as measured:
- **Psalms**: Brenton = Greek numbering (151 ch) and agrees with DRA in 141 of 150 shared chapters; Hebrew/KJV differ in 139. Titles: counted as v1 in Vulgate/Hebrew (Ps 3 DRA 9 v, KJV 8); Brenton also 9 here.
- **Malachi 3-4 / Joel 2-3**: no problem between KJV and Vulgate (both Mal 4 / Joel 3); Brenton shows the Hebrew/Greek shape (Mal 3 ch/24 v, Joel 4 ch). TVTMS Hebrew/Greek rows cover this.
- **John 6**: DRA/Vulgate splits KJV 6:51 into 6:51 + 6:52, shifting every verse after by +1 (72 v vs 71); confirmed by text (DRA 6:52 "If any man eat of this bread..." = KJV 51b; DRA 6:53 "The Jews therefore strove" = KJV 52). Jn 11:57 DRA only.
- **3 John 14-15 / Rev 12:18 / 2Co 13:12-14 / Php 1:16-17 / Acts 19:40-41**: TVTMS opens with exactly these (KJV vs NRSV vs SBLG); all present in the editions as described above.
- **Romans 16:25-27**: WEB family has it at 14:24-26 and empties 16:25-27 (TVTMS "PassageMoved").
- **Daniel 3, Esther additions, Sirach, Baruch 6**: see above; WEB/spablm put them in separate books (DNG, ESG, EPJ-less Bar 6), DRA/Vulgate in the same book (Dan 13-14, Est 10:4-16:24).
- **1 Kings/3 Kings, Nehemiah/2 Esdras**: not a numbering problem in eBible files: VPL uses canonical English codes (DRA "3 Kings" is stored as 1KI, "1 Kings" as 1SA, Neh as NEH; first verses confirm). Chapter counts are identical. It is a display-name problem only. Brenton is the exception (Ezra+Neh merged as 23 ch).

## 4. TVTMS: does it cover DRA -> English (KJV)?

Format (verified): tab-separated text. Part 1 "Condensed": blocks starting `$Psa.9:1-10:18`, one header line per tradition with TESTS (e.g. `Latin + Greek: Psa.9:39=Last & Psa.9:TextBeforeV1=NotExist`) then rows with the equivalent range in English KJV / Hebrew / Latin / Greek / others (very readable by humans). Part 2 "Expanded" (from line 4150): 25,138 verse-level rows: `SourceType | SourceRef | StandardRef | Action | NoteMarker | notes... | AncientVersions | Tests`. Standard = KJV/NRSV-based; Latin and Greek columns exist per section; actions: Keep, Renumber, Concatenation, MergedPrev, DividedPrev, IfEmpty, LongVerse (LXX moved text), etc. Refs use SIL/UBS-like codes (Jol, Nam, Ezk, Sng, Mrk, Jhn...), subverse marks `!a`/`!b`.
Tests used: `Ref=Last | Exist | NotExist`, subverse `Ref.n=Exist`, `TextBeforeV1` (psalm title), word-count comparisons (`Gen.6:1<Gen.6:2`, with "leeway"). Share of rows by test type: exist/last 22.7k, psalm-title 3.1k, subverse 3.0k, word-length 2.3k.

I wrote a ~100-line evaluator (`tools/tvtms_map.py` + `cover.py`) that, for a given edition, evaluates every row's tests against that edition's verse list and collects fired rules. Results, DRA -> KJV:
- 4,722 DRA verses get a non-identity KJV target. KJV verses not reached: **9 of 31,102** (1Ch x2, Gen, 1Sa, Neh, Sng, Isa, 1Th, 2Th - ambiguity in my "first candidate" choice, not TVTMS gaps). Same for latVUC: 19 unreached.
- Cross-check with real text: mean word-overlap (Jaccard) between DRA verse and the KJV verse it maps to vs the same-number KJV verse: **Psalms 0.454 (mapped) vs 0.048 (identity)** over 1706 verses; Dan 0.514/0.465; Job 0.405/0.380; Ecc 0.435/0.354; Sng 0.526/0.415; Hag 0.585/0.246; Jn 0.714/0.700. Overall 0.531 vs 0.500. So the mapping is right where it moves things, and a naive "same number = same verse" is wrong for ~90% of Psalm verses and ~4,700 verses overall.
- Hard cases specifically (rules found and fired): Ps 9:1 -> 9:Title; 9:2-21 -> 9:1-20; **9:22-39 -> 10:1-18**; 10:2-8 -> 11:1-7; **113:1-8 -> 114:1-8; 113:9-26 -> 115:1-18; 114:1-9 -> 116:1-9; 115:1-10 -> 116:10-19; 116:1-2 -> 117:1-2**; **146:1-11 -> 147:1-11; 147:1-20 -> 147:12-20**; Jn 6:51 -> 6:51!a, 6:52 -> 6:51!b, 6:53 -> 6:52 ... 6:72 -> 6:71; Mal 3-4 and Joel: identity for Latin (correct; Hebrew rows exist separately); 3 Kings 22:50-54 -> 22:49-53 (rule exists; fires only if word-length tests pass); Dan 3:24-90 -> `S3Y.1:1-68` (Song of the Three, as separate pseudo-book), Dan 3:100 -> Dan 4:3, Dan 13 -> Sus 1:*, Dan 14 -> Bel 1:*; Est 10:4-16:24 left in Est.* ("Latin2"); Sir 29:5-6 -> 29:5!a/!b ("Latin2-DRA" rows: TVTMS has rows specifically for DRA, 34 rows).
- Where TVTMS does **not** help: (1) editions with eBible padding/merges (RV1909, see above); (2) no coverage when an edition has its own divisions not seen by the authors; (3) Brenton duplicate keys need LongVerse handling; (4) some word-length tests cannot be reproduced exactly (my prototype misfired on spapddpt Exo 25:7-34 and missed 3Jn); (5) no Spanish-specific data beyond the 91 Job rows (SpanishRV) and 91 "FrenchNEG" rows.

Difficulty: moderate. Parsing is trivial (TSV), evaluation of 90% of tests is exact-match on verse lists; the remaining 10% (word-length, subverse, Esther A-F lettered chapters) need care. Compile once offline into a static JSON per edition; do not evaluate at runtime.

## 5. Recommended id scheme

1. **Canonical verse id = OSIS-style `Book.chapter.verse` in the TVTMS "Standard" versification (KJV/NRSV English)**, e.g. `Ps.23.1`, `John.6.51`, `1Kgs.4.21`. Book ids = OSIS (`1Sam`, `1Kgs`, `1Chr`, `Ezra`, `Neh`, `Song`, `Tob`, `Jdt`, `Wis`, `Sir`, `Bar`, `EpJer`, `1Macc`, `2Macc`, `AddEsth`, `PrAzar`, `Sus`, `Bel`, `PrMan`, `1Esd`, `2Esd`, `3Macc`, `4Macc`, `Ps151`) - so "3 Kings"/"2 Esdras" are display aliases per tradition, not ids. Sub-verse suffix `a/b/c` when an edition splits a standard verse (John 6:51a/b in the Vulgate; 2Co 13:12). For text that has no standard verse (Vulgate-only Sirach verses, LXX Esther additions, moved LXX verses), mint ids in the same book with a suffix (e.g. `Sir.1.5.vul`) and mark them tradition-specific rather than force-fitting.
2. **Per edition store the native reference as published** (`native: "Ps 22:2"`, the label the reader sees: Catholic/Orthodox readers see "Ps 22 (23)") and a **static mapping table native-ref -> [canonical ids]** (many-to-many: concatenation, split, merge, empty). The reader shows native numbers; citations, study pages, cross-edition parallels and Father quotations all key on canonical ids. Mapping per edition is data (JSON, 5k rows for DRA, <60 for the English/Spanish Protestant ones), generated by TVTMS + QA, committed.
3. Pivot choice rationale: TVTMS is keyed to KJV/NRSV; Hebrew-numbered Psalms in the pivot is a minor oddity for Latin/Greek readers but is what makes the 25k rules reusable. Alternative pivot "Vulgate/LXX numbering" has no equivalent dataset.
4. **QA gate per edition (cheap, automatic)**: after mapping, compare text of each canonical id against a same-language reference edition (Jaccard on content words) and list chapters under a threshold. This found 10 misaligned RV1909 chapters TVTMS missed, and proves Psalms. Add ~50 golden tests (Ps 9/10/113-116/147, Jn 6:51-52, Mal 3-4, Joel, Dan 3, Est 10-16, Rom 14/16, 3Jn, 2Co 13, Rev 12, Sir 29-36, Bar 6).
5. Prefer USFM over VPL for production: DRA USFM has Strong's markup and keeps psalm titles inside v1 (no `\d`), VPL flattens; check bridges/sub-verses per edition. For Brenton use the TAGOT/Swete or eBible USFM, VPL has 91 duplicate keys.

Effort (my estimate): parser + evaluator hardened with golden tests **2-3 days**; per Bible edition **0.5-1 day** (generate mapping, run QA, hand-fix <=20 chapters); Greek LXX/Brenton and Sirach/Esther/Daniel Latin-only verses **+2-3 days**; RV1909/Spanish Hebrew-numbered chapters need hand alignment (10 chapters, 0.5 day). Reader UI can ship with identity mapping for same-versification pairs (KJV/BSB/RV/WEB nearly 1:1 apart from the cases above) before the Latin/Greek ones are done.

## 6. Verified vs unverified
- Verified by me: all counts, gaps, empties, duplicates, license lines in about.htm, translations.csv metadata, TVTMS structure and rule examples, text-similarity numbers, John 6/Jn 11/1Ki 22/Job 38-40/Jon 2 text checks.
- Not verified: Oso 1569 behaviour; whether eBible's about-page claim for latVUC edition (Clementine 1598 + Migne 1880) is accurate; eng-web-c missing Genesis/Esther/Daniel reason (only observed: translations.csv OT 37 books); prototype evaluator is not production-quality (word-length tests simplified, first-candidate choice in many-to-one cases); the "~90% of Psalm verses" number is from word-overlap on 1706 verses with a crude tokenizer.
- Items for a follow-up mechanical pass: (a) fetch eBible `spaoso`/other Spanish ids once identified and run the same padded-empty check; (b) run the same TVTMS pass on spav1602p and spabll (Latin American Biblia libre, 16 DC); (c) USFM versions of RV1909/PDDPT to see whether eBible padding is only in VPL.
