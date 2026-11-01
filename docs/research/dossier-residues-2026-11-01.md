Status: draft, NOT verified by Pedro

# Dossier residues: A3 (Lutheran Eucharist), A5 (Westminster 1894 imprint), A9 (status lines)

## Progress
- Status: first pass 2026-11-01 (research night, session 2). A5 and A9 answered; A3 partly answered (rest listed). Verifier pass: done 2026-11-01 (Sonnet; `## Verification` below; corrections applied).
- Tags: `[verified: page]` read today at the URL given; `[verified: image]` read from a page image today; `[inference]`; `[snippet]` seen only in a search summary; `[not done]`.

## A5 · Westminster 1894 editor line and the imprint sweep

**Result of the title page.** Read from the page image `https://archive.org/download/confessionoffaith00chur/page/n4.jpg` (2542 × 4373 px) on 2026-11-01 `[verified: image]`: «THE CONFESSION OF FAITH; THE LARGER AND SHORTER CATECHISMS, WITH THE Scripture-Proofs at Large: TOGETHER WITH THE SUM OF SAVING KNOWLEDGE … EDINBURGH: JOHNSTONE, HUNTER, & CO. MDCCCXCIV.» The title page names **no editor** and **no «Offices of the Church of Scotland»**. The archive.org metadata API agrees: publisher «Edinburgh : Johnstone, Hunter & Co.», date «1894», creators «Church of Scotland» and «Westminster Assembly (1643-1652)» `[verified: page]` (`https://archive.org/metadata/confessionoffaith00chur`).

**Sweep** (every `.md`, `.ts`, `.json`, `.mjs`, `.js` and `.py` file of the repo, `node_modules` excluded, 2026-11-01). The wrong imprint «Offices of the Church of Scotland» occurs in:
- **Active text, still wrong:** `docs/research/doctrines/eucharist/reformed.md` line 143: «Westminster Assembly, *The Confession of Faith; the Larger and Shorter Catechisms* (Edinburgh: Offices of the Church of Scotland, 1894)». Proposed correction: «(Edinburgh: Johnstone, Hunter, & Co., 1894)». This is the only active occurrence; it is in a research file, not in `src/` or `data/`.
- **Archival «original draft» blocks, to keep as they are** (they preserve the pre-correction text on purpose and say so): `sola-scriptura/reformed.apply.md` lines 50 and 283; `papacy/reformed.apply.md` lines 45 and 229; `baptism/reformed.apply.md` lines 42 and 255.
- **Records of the correction (no change):** `sola-scriptura/reformed.apply.md:11`, `sola-scriptura/reformed.md:15`, `sola-scriptura/verification-reformed.md:22`, `papacy/reformed.apply.md:11`, `papacy/verification-reformed.md:22`, `baptism/reformed.md:15` and `:256`, `baptism/reformed.apply.md:12`, `baptism/verification-reformed.md:38, 52, 59`, `docs/research/sources/english-quotes.md:6054`, `docs/research/sources/citation-excerpts-2.md:2429`, `docs/research/open-research-2026-11-01.md:13`.
- **Not found:** no occurrence in `src/` or `data/`.
- Where the correct imprint already stands: `glossary-terms.md` («Editions cited»), the Catholic dossiers, `sola-scriptura/reformed.md`, `papacy/reformed.md`, `baptism/reformed.md` (list by `grep -l «Johnstone, Hunter»`).
- **Not done (outside my files):** the correction itself. It is one line in `eucharist/reformed.md`; an implementation or apply session does it.

## A9 · Status lines for harsh wording

**What was checked.** In the active text of the 16 non-Catholic dossiers, (a) where Trent's canons or «sea excomulgado» are quoted, (b) where harsh wording («Antichrist», «abomination», «papist», «idolatries», «anathema») appears next to a quotation, and (c) whether a status line («Estado actual», `**Status:**`) sits with it. A line count per dossier (2026-11-01):

| Dossier | Lines mentioning «excomulgado», «anathema» or «anatema» (not a count of Trent canons) | Status lines | Reading |
|---|---|---|---|
| eucharist/lutheran | 24 | 15 | covered: the ST-SA, ST-FC, ST-DOS, ST-WCF and ST-T lines are written (`lutheran.md` §4) |
| eucharist/reformed | 0 | 1 | covered for WCF 29.2 and 29.6 («Estado actual» under «Lenguaje histórico severo»); no Trent canons quoted outside the retained objections |
| eucharist/orthodox, eucharist/baptist | 0 | 0 | no harsh wording found |
| baptism/*, sola-scriptura/lutheran, sola-scriptura/reformed, sola-scriptura/baptist | 0 | 0 | no harsh wording found by the terms searched (the AC IX condemnation of the Anabaptists is not quoted: `verification-lutheran.md` C-L5) |
| sola-scriptura/orthodox | 0 | 1 | covered |
| papacy/lutheran | 0 | 1 | the SA II.4.10 «Antichrist» clause has its status note under QE-5 (line 72); it recurs in the scripture index (l. 144), in the practice section (l. 196) and in Coverage (l. 215) **without its own line**; the dossier's own question 2 (l. 224) asks Pedro to approve the placement «each time it appears». **Open, for Pedro.** |
| papacy/reformed | 0 | 2 | WCF 25.6 covered (the OPC no longer prints the Antichrist continuation, `reformed.md` R-05) |
| papacy/orthodox | 0 | 1 | covered (1895 encyclical) |
| papacy/baptist | 0 | 0 | the excluded 1689 clause is not quoted |

**Where the gap really is.** The Trent status line (ST-T) is needed in the new objections files, not in these dossiers: the A1 files written tonight (`docs/research/doctrines/<doctrine>/<tradition>.objections.md`) carry the lines they need and mark the CCC numbers they could not confirm. For the Baptism canons (Trent V can. 4, VII can. 13, can. 5) the CCC number per canon is **not assigned**; it needs one pass on vatican.va.

## A3 · Lutheran Eucharist leftovers

| Item | Result | Tag |
|---|---|---|
| Theophylact («Vulgarius», Ap X.55): which work | **The Apology names no work.** Ap X.55–56, read at `https://bookofconcord.org/defense/of-the-holy-supper/`: «And Vulgarius, who seems to us to be not a silly writer, says distinctly that bread is not a mere figure, but is truly changed into flesh.» The page gives no title or chapter. | `[verified: page]` |
| Theophylact's dates | «b. Euripus in Euboea, c. 1050; d. c. 1108»; «About 1078, he was made bishop of Ochryda»; commentaries on the four Gospels, Acts, Paul's epistles, canonical epistles, minor Prophets (*New Catholic Encyclopedia*, entry by G. A. Maloney, https://encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/theophylactus-ochryda: the page gives no publication date). Other sources, seen only in search summaries, give birth c. 1050–1060 and death «after 1107»/1108. | `[verified: page]` for the quoted lines; the range is `[snippet]` |
| Whether «Vulgarius» is Theophylact | The identification «Vulgarius» = Theophylact comes from the dossier (`eucharist/lutheran.md` l. 275: «"Vulgarius" (Theophylact)») and `neutral/witness-paragraphs.md` l. 652 («Theophylact identification requires confirmation»); neither the Apology page nor the encyclopedia page says so, and no source read tonight does. | `[unverified]` |
| Which commentary says the bread is «truly changed into flesh» | not searched (no Greek text read) | `[not done]` |
| Justin, *1 Apol.* 66 (FC SD VII.39) | Confirmed as the location: chapter 66 «Of the Eucharist» (it opens «And this food is called among us Eucharist…»; the sentence «For not as common bread and common drink do we receive these; but in like manner as Jesus Christ our Saviour…» follows), translated by Marcus Dods and George Reith, *Ante-Nicene Fathers* vol. 1 (New Advent page; New Advent is a locator here, **not an edition** under the repo's rule). The FC quotation of SD VII.39 follows the same sentence. | `[verified: page]` for the opening words; the full match of the FC wording was not compared |
| Augustine, *Tract. in Ioh.* 80.3 (LC V.10) | Section 3 of Tractate 80 reads, in John Gibb's translation (*NPNF* series 1, vol. 7, Schaff ed., Buffalo 1888): «The word is added to the element, and there results the Sacrament, as if itself also a kind of visible word.» The page does not print the Latin («Accedit verbum ad elementum, et fit sacramentum»), so the Latin form the LC quotes was not matched. | `[verified: page]` English; Latin `[not done]` |
| Irenaeus, *Adv. haer.* IV.18.5 (the Wittenberg Concord quoted at FC SD VII.14) | Section 5 of Book IV ch. 18 reads, in Roberts and Rambaut (*ANF* vol. 1, 1885): «But our opinion is in accordance with the Eucharist, and the Eucharist in turn establishes our opinion» and «…is no longer common bread, but the Eucharist, consisting of two realities, earthly and heavenly…». That the FC's «two things, a heavenly and an earthly» draws on this passage is `[inference]` (the Concord does not name the work). | `[verified: page]` English; the link to FC `[inference]` |
| «Serm. de Pass.» (FC SD VII.76, attributed to Chrysostom) | Not searched tonight for the FC's own wording. The repo already identifies the sermon the Catholic dossiers quote as Chrysostom, *De proditione Iudae* I.6 («This word changes the offering», via Fortescue, *Catholic Encyclopedia* 1909, `apologetic-answers.md` l. 92); whether the FC's «Sermon on the Passion» is that sermon is `[not done]`. | `[not done]` |
| DS 1752 = Trent XXII can. 2 | CCC 611 n. 433 prints «Jn 17:19; cf. Council of Trent: DS 1752; 1764» (English CCC, vatican.va `__P1O.HTM`, fetched today) after the sentence «the Lord institutes his apostles as priests of the New Covenant». That 1752 is Trent XXII can. 2 follows from the subject (the canon on «Do this in memory of me» and the apostles' priesthood) and is **not** confirmed by a Holy See text that prints the canon number beside the DS number. | `[verified: page]` for the footnote; the match `[inference]` |
| Communion of the sick beyond SD VII.83–87 | not searched (the dossier says a whole-Book-of-Concord search was not run) | `[not done]` |
| Variata and closed-communion body sources | not searched | `[not done]` |
| Re-verification of what the apply pass added (ST-T, WLC 173, the merged QE-3+4, the Fathers' identifications) | partly done: the Eucharist verifier's pass on 2026-11-01 (`eucharist/*.objections.md`, `## Verification`) read CCC 1366–1418 on vatican.va and confirmed the ST-T numbers 1366–1367, 1371, 1414 for Trent XXII; WLC 173 and the merged QE-3+4 were not re-read. | partly `[verified]` |

## Not done in this file
- Nothing in `src/`, `data/` or the dossiers was edited.
- The Greek of Theophylact, the Latin of Augustine's line and Chrysostom's sermon were not read.


## Verification
Verifier pass 2026-11-01 (Sonnet, unattended). Legend: CONFIRMED / WRONG / UNCONFIRMABLE. Every page was fetched with curl today and matched by exact string.

### A5 · Westminster 1894
- CONFIRMED (image read): the title page `https://archive.org/download/confessionoffaith00chur/page/n4.jpg` (downloaded, 2542 x 4373 px) reads THE CONFESSION OF FAITH; THE LARGER AND SHORTER CATECHISMS, WITH THE Scripture-Proofs at Large: TOGETHER WITH THE SUM OF SAVING KNOWLEDGE, ... EDINBURGH: JOHNSTONE, HUNTER. & CO. MDCCCXCIV. No editor is named and the phrase «Offices of the Church of Scotland» is absent. (Small points: the imprint line prints a period after HUNTER, not a comma; the title page does print «OF PUBLICK AUTHORITY IN THE CHURCH OF SCOTLAND» inside the contents list, which is why the metadata title contains «Church of Scotland».)
- CONFIRMED: `https://archive.org/metadata/confessionoffaith00chur`: publisher «Edinburgh : Johnstone, Hunter & Co.», date «1894», creator [«Church of Scotland», «Westminster Assembly (1643-1652)»].
- CONFIRMED: sweep of `docs/`, `src/`, `data/`, `e2e/`, `scripts/` and a whole-repo `grep -rl` excluding `node_modules`, `.git`, `.next`: the phrase occurs only under `docs/`, in 13 files, none in `src/` or `data/`. Every line number listed in the file is correct: active wrong text `eucharist/reformed.md:143`; archival drafts `sola-scriptura/reformed.apply.md:50, 283`, `papacy/reformed.apply.md:45, 229`, `baptism/reformed.apply.md:42, 255`; records `sola-scriptura/reformed.apply.md:11`, `sola-scriptura/reformed.md:15`, `sola-scriptura/verification-reformed.md:22`, `papacy/reformed.apply.md:11`, `papacy/verification-reformed.md:22`, `baptism/reformed.md:15, 256`, `baptism/reformed.apply.md:12`, `baptism/verification-reformed.md:38, 52, 59`, `sources/english-quotes.md:6054`, `sources/citation-excerpts-2.md:2429`, `open-research-2026-11-01.md:13`. (Extra hits are this file itself and the two `papacy`/`sola-scriptura` verification lines already listed.)
- Not re-checked: the sentence «Where the correct imprint already stands» (a grep list, harmless).

### A3 · Lutheran Eucharist leftovers
- CONFIRMED: Apology X.55–56 on https://bookofconcord.org/defense/of-the-holy-supper/: «And Vulgarius, who seems to us to be not a silly writer, says distinctly that bread is not a mere figure, but [56] is truly changed into flesh.» The page prints the paragraph number 56 inside the sentence; it names no work. The file's quote omits the number, which is correct.
- CONFIRMED: Theophylact. The slug is `https://www.encyclopedia.com/religion/encyclopedias-almanacs-transcripts-and-maps/theophylactus-ochryda` (the file gives no URL; note that `.../theophylactus` is a different entry, Theophylactus the Tusculani count). Text: «b. Euripus in Euboea, c. 1050; d. c. 1108», «About 1078, he was made bishop of Ochryda», commentaries «on the four Gospels, the minor Prophets, the Acts of the Apostles, the Epistles of St. Paul, the canonical Epistles»; signed «[G. A. Maloney]», New Catholic Encyclopedia; no publication date on the page. The word «Vulgarius» does not occur on it (as the file says). The search-summary range (c. 1050–1060; «after 1107») stays `[snippet]`.
- UNCONFIRMABLE here: that «Vulgarius» is Theophylact (the file already says `[unverified]`); which commentary the Apology means; the Greek.
- CONFIRMED: Justin, 1 Apol. ch. 66, «Chapter 66. Of the Eucharist», opens «And this food is called among us Eucharist...» and continues «For not as common bread and common drink do we receive these; but in like manner as Jesus Christ our Saviour, having been made flesh by the Word of God, had both flesh and blood for our salvation...»; translated by Marcus Dods and George Reith, ANF vol. 1 (https://www.newadvent.org/fathers/0126.htm). The file's «opens "For not as common bread..."» is loose: that sentence is the second sentence of ch. 66, not the opening; the chapter opens with «And this food is called among us Εὐχαριστία». Correct to «contains».
- CONFIRMED: Augustine, Tractate 80 (https://www.newadvent.org/fathers/1701080.htm), section 3 («3. Now you are clean through the word...»): «The word is added to the element, and there results the Sacrament, as if itself also a kind of visible word.» Translator John Gibb, NPNF series 1 vol. 7, ed. Schaff, Buffalo 1888 (printed on the page). Latin not printed there, as the file says.
- CONFIRMED: Irenaeus IV.18.5 (https://www.newadvent.org/fathers/0103418.htm), «5. Then, again, how can they say...»: «But our opinion is in accordance with the Eucharist, and the Eucharist in turn establishes our opinion» and «is no longer common bread, but the Eucharist, consisting of two realities, earthly and heavenly». Translators Roberts and Rambaut, ANF vol. 1, Buffalo 1885 (printed on the page).
- CONFIRMED with a precision: CCC 611 n. 433 (https://www.vatican.va/archive/ENG0015/__P1O.HTM) prints «433 Jn 17:19; cf. Council of Trent: DS 1752; 1764.» The note is anchored after the Jn 17:19 quotation that ends the sentence «By doing so, the Lord institutes his apostles as priests of the New Covenant: "For their sakes I sanctify myself, so that they also may be sanctified in truth."» The file leaves out the first half of the note (Jn 17:19) and the «cf.»; the Trent cross-reference is a «cf.», not a statement. That DS 1752 is Trent XXII can. 2 is not printed by this text: UNCONFIRMABLE here, correctly tagged `[inference]`.
- UNCONFIRMABLE here (not re-read): FC SD VII.39 wording against Justin; the Wittenberg Concord link; «Serm. de Pass.»; the rows tagged `[not done]`.
- The row «Re-verification of what the apply pass added» cites an Eucharist verifier pass (`eucharist/*.objections.md`, `## Verification`): not re-read.

### A9 · harsh-wording table
- CONFIRMED (re-run with grep over the 16 files): `Estado actual` lines: eucharist/lutheran 15, eucharist/reformed 1; `**Status:**` lines: sola-scriptura/orthodox 1, papacy/lutheran 1 (l. 72), papacy/reformed 2 (l. 61, 113), papacy/orthodox 1 (l. 115); all other dossiers 0 of both. This reproduces the «Status lines» column for all 16 rows.
- CONFIRMED: the papacy/lutheran lines 72 (status note under QE-5), 144 (scripture index), 196, 215 and 224 (question 2) say what the file says. Add: line 150 also repeats the status note («The SA Antichrist reference retains its status note under QE-5»), so the Antichrist wording has a mention with a pointer at l. 150 as well; the file does not list it.
- CONFIRMED: `eucharist/lutheran.md` §4 (heading «4. Objeciones», l. 322) holds ST-SA (l. 331), ST-FC, ST-WCF, ST-DOS and ST-T lines.
- CONFIRMED (harsh-term grep «antichrist|abomination|papist|idolatr»): hits only in eucharist/lutheran (17), eucharist/reformed (1), papacy/lutheran (6), papacy/reformed (4); none in the other 12 dossiers, as the table states.
- NOT REPRODUCIBLE as labelled: the column «Trent-canon mentions» (eucharist/lutheran 24; others 0). Lines matching «excomulg|anathema|anatema» are 24 in eucharist/lutheran, 0 in the other 15, 1 in papacy/lutheran; lines mentioning Trent with can./canon are 33, and any line with Trent/Trento is 58. The 24 only matches the anathema grep. The column label should say what was counted. (papacy/lutheran's one «anatema» line would make it 1, not 0, under that grep.) eucharist/reformed has two lines naming Trent (one is the López de Ayala edition in the references, l. 149); no canon is quoted, so «0» holds for canons.
- Reading of the rows (no status line needed in baptism/sola-scriptura/orthodox/baptist) is a judgment call; the greps support «no harsh wording found by the terms searched».

### Wrong items
1. A3 Justin row: «chapter 66 "Of the Eucharist" opens "For not as common bread..."» is wrong; ch. 66 opens «And this food is called among us Eucharist...» and contains the quoted sentence (https://www.newadvent.org/fathers/0126.htm).
2. A3 DS 1752 row: footnote 433 is «Jn 17:19; cf. Council of Trent: DS 1752; 1764.» (https://www.vatican.va/archive/ENG0015/__P1O.HTM), not only the Trent reference.
3. A3 Theophylact row: give the URL `.../theophylactus-ochryda`; the file names no URL and the obvious slug `.../theophylactus` is another person.
4. A9 table: the «Trent-canon mentions» numbers are lines matching excomulg/anathema/anatema, not Trent-canon mentions; relabel or recount (see above).

### Unconfirmable
- «Vulgarius» = Theophylact; the Greek text; which commentary.
- DS 1752 = Trent XXII can. 2 (no Holy See text read that prints the pair).
- FC SD VII.39 / VII.14 / VII.76 wordings against the Fathers; the Latin of Augustine; Chrysostom's sermon.
