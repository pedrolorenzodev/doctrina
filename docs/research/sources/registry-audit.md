_Report from the overnight source research of 2026-10-09 (agent-written; synthesis in `../sources.md`). Paths like `samples/…` refer to `~/Desktop/dev/doctrina-research-2026-10-09/samples/`, outside the repo._

# Registry provenance audit (mechanical) — overnight run

Agent: registry-audit. Date: 2026-10-09. Repo read-only. Working files: `scratchpad/samples/registry-audit/` (`inventory.py`, `compare.py`, `diffs.py`, `diffs2.py`, `nonpat.py`, `j6.py`, `j6b.py`, `pagefind.py`, `quotes.json`, `compare.json`, `j6.json`, `na/` = 34 New Advent pages, `ia/` = 28 archive.org `_djvu.txt` volumes (~90 MB), `web/`, `ccel/`).

## 1. Method (what was actually done)

1. Inventory: `inventory.py` reads `data/site/sources.extra.json` (44 entries) and counts quotes with a `sourceRef`/`sourceId` in `data/raw/eucharist.content.json` (115 citations + 12 earliestWitnesses = 127 quotes, 21 of them Bible, so 106 non-Bible), `data/site/eucharist.v2.json` (mirror), `data/site/john6.json` (86 PD-labelled + 14 withheld father passages), `data/raw/john6.fathers.json`.
2. Patristic: for every quote whose `url` is a New Advent page (38 quote rows: 37 fathers + Summa III q.75) I downloaded the New Advent page (curl, 1 req/s, 34 pages) and the matching 1885–1905 printed volume as an archive.org OCR `_djvu.txt`, normalised both (case, punctuation, hyphenation), located the quote by 4-word shingles and measured word-level coverage with difflib. Differences were then read by hand (OCR noise, footnote digits and page headers discarded).
3. Non-patristic: same procedure against PD scans (Waterworth, Triglot, Beveridge, Schaff, Robertson, Overbeck, Hapgood, Neale–Littledale, McGlothlin, Jacobs II), plus fetching Hanover, papalencyclicals.net, GHDI, bookofconcord.org pages to look for transcription artefacts and licence statements.
4. Page locators: archive.org full-text-search API (`/fulltext/inside.php`) on a 4-word anchor taken from the print wording. The number is the archive.org viewer leaf index: open `https://archive.org/details/<id>/page/n<leaf>`. They are mechanical and approximate (±1 leaf; two or three marked "amb." had more than one hit). No printed page numbers.

## 2. Inventory

Registry edition hosts (44 entries): newadvent.org 21 · bookofconcord.org 5 · archive.org 3 · no URL 3 (Cabasilas, Luther 1528, Gelasius) · ccel.org 2 (Belgic, Calvin) · one each: vatican.va, papalencyclicals.net, pravoslavieto.com, maksimologija.org, germanhistorydocs.org, opc.org, sbts.edu, gracegems.org, la.wikisource.org, ebible.org.

Quotes per edition host (106 non-Bible + 21 Bible in `eucharist.content.json`): New Advent 36 (+2 quote rows whose `url` is New Advent but whose source id (`ignatius-smyrnaeans`, `justin-first-apology`) is not in the 44-entry registry), bookofconcord.org 20, CCEL 8 (+ Heidelberg 2 and London Baptist 1689 4, not in the 44), archive.org 5 (Neale–Littledale 2, Hapgood 3), Hanover 5 (Trent, source id `trent` not in the 44), vatican.va 1 (+CCC 3, not in the 44), papalencyclicals.net 1, pravoslavieto.com 2, maksimologija.org 1, GHDI 1, opc.org 1 (+WCF 3), crivoice.org 3 (Dositheus), sbts.edu 1, la.wikisource 1, no URL 4 (Cabasilas, Luther x2, Gelasius). `new-hampshire-1833` has 0 quotes in the pilot.

URL strings in site data: `eucharist.v2.json` has New Advent 38, bookofconcord 20, CCEL 14, Hanover 5; `eucharist.content.json` New Advent 59, CCEL 16, Hanover 5; `john6.json`/`john6.fathers.json`: sermonindex 86–100 and historicalchristian.faith 85–88 (the HCF/SermonIndex dataset) and only 1 New Advent link.

New Advent's own footer on every page I fetched: "Revised and edited for New Advent by Kevin Knight." and "Copyright © 2026 by New Advent LLC" (e.g. https://www.newadvent.org/fathers/310123.htm).

## 3. Headline findings

- **Patristic quotes sourced from New Advent: 38 rows. (a) match print verbatim where New Advent differs = 0. (b) match New Advent's edited wording where it differs from print = 13 rows (11 distinct passages). (c) identical in both = 25 rows (3 of them differ only in orthography). (d) not found = 0.** Every one of the 38 matches New Advent at 100% coverage; none follows the print in a place where New Advent departs from it. For the 13 testable rows the evidence is decisive; the 25 untestable rows (identical text) are almost certainly from the same source, because the URL is New Advent's.
- New Advent's edit is systematic modernisation of the 1885–1900 text: *saith/says, profiteth/profits, speaketh/speaks, dwelleth/dwells, ye/you, thou/thee/you, Except/Unless, "are become"/"have become", "certainly"/"surely"* (details in §4). This is the layer New Advent claims as © (edited text). Replacing with the print wording is cheap (S per quote) and removes the issue.
- **Trent: the 5 quotes were copied from Hanover** (`history.hanover.edu`, which forbids commercial use per round-1): they reproduce Hanover's typing artefacts ("which,-recorded", "any one" vs the 1848 print "anyone", "connexion" vs print "connection", "contentions" vs print "contentious"). Hanover reproduces Waterworth 1848 (PD), so the fix is to re-quote from the Cornell scan `cu31924029369760`.
- Cantate Domino: confirmed from Tanner (page footer: "Decrees of the Ecumenical Councils, ed. Norman P. Tanner"; site © 2000-2026) — a © translation. No PD English found (round-1); own translation from Latin.
- Marburg Art. 15: the quote is the GHDI translation by Ellen Yutzy Glebe (page: "Translation: Ellen Yutzy Glebe", © German Historical Institute Washington 2003-2026). PD equivalent exists: Jacobs, Book of Concord vol. II (1883), `jacobs_introductions`, where Art. XV reads "we are not at this time agreed ... bodily present".
- **Mislabelled "public-domain" john6 passages:** si-33366 (Ambrose, labelled "ANF/NPNF via New Advent"), si-33393 (Clement, "ANF vol. 2"), si-33397, si-33416 and si-33430 (Cyril "Library of the Fathers, Pusey") are modern translations (words like "humankind", "marvelous", "realize", "…" ellipses; style matches ACCS/IVP) and do not match the printed volumes (coverage 0.48–0.67 against Pusey, 0.65–0.69 against NPNF/ANF). They should join the 14 already withheld. The other john6 passages check out against print (see §5).
- bookofconcord.org is clean: "These texts are in the public domain and may be freely copied" (https://bookofconcord.org/copyright/), text = Triglot 1921. All 20 quotes match the Triglot scan.
- Registry metadata errors found (years/translators), see §7.

## 4. Patristic quotes sourced from New Advent (38 rows)

Source = current registry/URL. Class as defined above. Print edition and archive.org id for the replacement; leaf = viewer index. Effort S = copy the wording from the scan and re-verify.

| # | Quote (locator) | NA page | Finding | Class | Replacement print edition (archive.org id, leaf) | Effort |
|---|---|---|---|---|---|---|
| 0 | Chrysostom, Hom. John 47 | 240147 | Quote has "says/profits/speaks"; print has "saith/profiteth/speaketh" | b | NPNF1 vol. 14 (1889), `aselectlibraryof14unknuoft`, n189 | S |
| 1 | Augustine, Tract. John 27.5 | 1701027 | "profits" vs print "profiteth" | b | NPNF1 vol. 7 (1888), `aselectlibrary07unknuoft`, n187 | S |
| 9, 102 | Chrysostom, Hom. Heb. 17.6 | 240217 | Identical except "tomorrow" vs print "to-morrow" | c (orthographic) | NPNF1 vol. 14, `aselectlibraryof14unknuoft`, n468 | S |
| 10 | Didache 14 | 0714 | "says the Lord" vs print "saith the Lord" | b | ANF vol. 7 (1886, tr. Riddle), `antenicenefather07robeuoft`, n403 | S |
| 94 | Didache 14.1–3 | 0714 | Identical in the quoted words | c | same, n403 | S |
| 14 | Cyril Jer., Cat. 22.4 | 310122 | "Unless you eat my flesh" vs print "Except ye eat my flesh"; "you" vs "ye" | b | NPNF2 vol. 7 (1894), `niceneandpostnic07unknuoft`, n230 | S |
| 30 | Cyril Jer., Cat. 22.6 | 310122 | "you" vs print "thee" | b | same, n231 | S |
| 20 | Cyril Jer., Cat. 23.7 | 310123 | "surely" vs print "certainly" | b | same, n54 (amb.) | S |
| 100 | Cyril Jer., Cat. 23.7 | 310123 | same sentence, same difference | b | same | S |
| 15 | Augustine, Faustus 32.13 | 140632 | "Israelities/cornerstone" vs print "Israelites/corner stone" (orthography only) | c | NPNF1 vol. 4 (1887), `aselectlibrary04unknuoft`, n346 | S |
| 19 | Damascene, Exact Exp. IV.13 | 33044 | Identical | c | NPNF2 vol. 9 (1899), `selectlibraryofn09scha`, n458 | S |
| 29 | Damascene IV.13 | 33044 | Identical (footnote digit only) | c | same | S |
| 105 | Damascene IV.13 | 33044 | Identical | c | same, n459 | S |
| 33 | Cyprian, Lapsed 25 | 050703 | Identical | c | ANF vol. 5 (1886), `antenicenefather05robeuoft`, n476 | S |
| 34 | Cyprian, Lapsed 9 | 050703 | Identical | c | same | S |
| 35 | Apostolic Constitutions VIII.13 | 07158 | Identical | c | ANF vol. 7, `antenicenefather07robeuoft`, n512 | S |
| 36 | Augustine, Merits I.34 | 15011 | Identical ("without"/"with out" is OCR spacing) | c | NPNF1 vol. 5, `psychologybriefe05jameuoft` | S |
| 65, 87 | Augustine, Letter 98.9 | 1102098 | Identical | c | NPNF1 vol. 1 (1887), `aselectlibraryof01unknuoft` | S |
| 66 | Augustine, Tract. John 25.12 | 1701025 | "do you/you have" vs print "dost thou/thou hast" | b | NPNF1 vol. 7, `aselectlibrary07unknuoft`, n176 | S |
| 71 | Augustine, Tract. John 26.18 | 1701026 | "dwells/eats/drinks/does" vs print "dwelleth/eateth/drinketh/doth" | b | same, n185 | S |
| 79 | Augustine, Tract. John 30.1 | 1701030 | Identical | c | same, n198 | S |
| 84, 103 | Augustine, Doctr. Christ. III.16.24 | 12023 | "Unless you eat ... you" vs print "except ye eat ... ye" | b | NPNF1 vol. 2 (1887), `aselectlibrary02unknuoft`, n585 | S |
| 86 | Augustine, Ps. 98 §8 | 1801099 | "you" vs print "ye" (x2) | b | NPNF1 vol. 8 (1888), `aselectlibrary08unknuoft`, n502 | S |
| 88 | Theodoret, Eranistes II (short) | 27032 | Identical | c | NPNF2 vol. 3 (1892), `aselectlibraryn14wacegoog` (Google scan; also `cu31924031002110`, whose OCR is damaged at this page), n221 | S |
| 104 | Theodoret, Eranistes II (long) | 27032 | "have become" vs print "are become" | b | same, n221 | S |
| 73 | Chalcedon Definition | 3811 | Identical (the footnote interrupts the page) | c | NPNF2 vol. 14 (1900 ed. via Scribner 1916), `selectlibraryofn14scha`, n307 | S |
| 76 | Athanasius, Incarnation 17.1 | 2802 | Identical | c | NPNF2 vol. 4 (1892), `niceneandpostnic04unknuoft`, n138 | S |
| 83, 99 | Tertullian, Marcion IV.40 | 03124 | Identical | c | ANF vol. 3 (1885), `antenicenefather03robeuoft`, n432 | S |
| 95 | Ignatius, Smyrnaeans 7.1 | 0109 | Identical | c | ANF vol. 1 (1885), `antenicenefather01buff`, n118–123 (amb.) | S |
| 96 | Justin, 1 Apol. 66 | 0126 | Identical | c | same, n231 | S |
| 97 | Justin, Dial. 41 | 01283 | Identical | c | same | S |
| 98 | Irenaeus, AH IV.18.5 | 0103418 | Identical | c | same, n572 | S |
| 101 | Ambrose, Mysteries 9.52 | 3405 | Identical | c | NPNF2 vol. 10 (1896), `nicenepostnicene10unknuoft`, n351 | S |
| 13 | Aquinas, ST III q.75 a.5 | summa/4075 | Identical to the 1914 Dominican Fathers scan | c | Summa III QQ 60–83 (London: Washbourne / Benziger, 1914), `summatheologicao33thom`, n289 | S |

Counts: b = 13 rows (0, 1, 10, 14, 20, 30, 66, 71, 84, 86, 100, 103, 104); c = 25 rows; a = 0; d = 0. Notes: (1) volume IDs were corrected after a first pass hit mislabelled Google scans (`aselectlibraryn04/07/14wacegoog` are NPNF2 vols 8, 6, 3, not 4, 7, 14). (2) 1920s–1960s reprints are on archive.org too but only pre-1931 scans are cited here.

CCEL cross-check: `https://ccel.org/ccel/schaff/npnf114/cache/npnf114.txt` (header "Rights: Public Domain") has the print wording ("profiteth"), so quote #0 did not come from CCEL. Round-1 says CCEL asks commercial users to ask; rebuilding from scans avoids both CCEL and New Advent.

## 5. john6 patristic passages (86 PD-labelled; HCF/SermonIndex)

Method as above on 36 passages with an exact New Advent page, plus 26 Catena Aurea passages against Newman (`p1catenaaureaco04thomuoft`) and 16 Cyril passages against Pusey (`commentaryongosp01cyri`), plus 9 more ANF/NPNF passages against the ANF volumes.

- Of 36 NPNF/ANF passages with a New Advent page: 18 closer to print, 11 identical in both, 7 apparently closer to NA but those are HCF excerpts spliced from non-adjacent sentences (windows misalign; checked by reading diffs for si-33372/33433/33443). No evidence these were taken from New Advent: the HCF text keeps "dwelleth/eateth/saith".
- Catena Aurea: 22 of 26 match Newman 0.82–1.00; 4 lower (0.48–0.72) are spliced excerpts. Cyril: 13 of 16 match Pusey 0.95–1.00; **3 do not (si-33397, si-33416, si-33430): modern wording**.
- Other mislabelled: si-33366 and si-33393 (above). si-33418 (Hippolytus, spurious) has "spoke" where print has "spake" (minor).
- The dataset's own warning already withholds 14 (9 "unverified", 5 "likely-copyrighted"); these 5 additional should join them until replaced. Replacement: Pusey (Library of the Fathers 1874, `commentaryongosp01cyri`), NPNF2 vol. 10 (Ambrose), ANF vol. 2 (Clement Paedagogus, `antenicenefather02robeuoft`).

## 6. Non-patristic quotes

| Quote | Current source (as cited) | Finding | Recommended replacement | Effort |
|---|---|---|---|---|
| Trent XIII ch.1, ch.3, can.8; XXII ch.1, ch.2 (#2,3,12,5,6) | Hanover (history.hanover.edu) | Translation = Waterworth 1848; wording = Hanover's transcription (artefacts above). Hanover: commercial use not granted (round-1) | Waterworth 1848, Cornell scan `cu31924029369760` (n349 ch.1, n351 ch.3, n356 can.8, n426/428 Sess. XXII) or Buckley 1851 (`canonsanddecree00buckgoog`, also en.wikisource); Schroeder 1941 only via HathiTrust pdus | S |
| Florence, Bull of Union with the Copts (#16) | Tanner via papalencyclicals.net | © Tanner confirmed on page; text is a literal Tanner rendering | no PD English (round-1): own translation from Latin (Mansi XXXI / Denzinger Latin), labelled ours | S (short) |
| Cabasilas ch. 29-30 (#24) | Hussey–McNulty 1960 (SPCK) | Entry marked verbatim:false (paraphrase), no URL; nothing copied verbatim from the © edition as far as the data shows | If a quotation is wanted: Greek PG 150 / Gass 1849 (`diemystikdesnik00kavagoog`) + own translation; else permission (SPCK/SVS) | S–M |
| Marburg Art. 15 (#42) | GHDI, tr. Glebe (©) | modern translation, © GHI 2003-2026 | Jacobs, Book of Concord vol. II (1883), `jacobs_introductions`, Art. XV (OCR interleaves two columns; ~book pp. 69-74 per round-1) | S |
| Mogila Q107 (#21) | maksimologija.org | matches Overbeck 1898 (1762 translation) at 0.95 (OCR noise only) | Overbeck 1898, `cu31924029363094`, n87 (collate with 1762 ECCO scan) | S |
| Philaret Q338, Q340 (#22, 28) | pravoslavieto.com | matches Schaff, Creeds II (1877) = Blackmore 1845, 0.94–1.00 | Schaff vol. II `creedschristendo02scha`, n511 (also Blackmore, `doctrineofrussia00blac`) | S |
| Dositheus Decree 17 (#25–27) | crivoice.org | = Robertson 1899 (`actsdecreesofsyn00orth`, n161). #27's opening "He is not present typically..." is not verbatim: print reads "we believe the Lord Jesus Christ to be present, not typically" | Robertson 1899, fix #27 or bracket the edit | S |
| Hapgood (#23, 31, 32) | archive.org 03510459.emory.edu | matches 0.98–1.00 | already PD scan, no change (url: `03510459.emory.edu`; djvu file name is `03510459_djvu.txt`) | none |
| Neale–Littledale (#17, 18) | archive.org `liturgiesofssmar00cathiala` | matches 1.00 (Basil: footnote interrupts) | none (n161 / n180) | none |
| Book of Concord (20 quotes: Epitome, SD, LC, SA, Ap.) | bookofconcord.org | matches Triglot 1921 (`concordiatriglot00unse`) 0.87–1.00; low scores are German/Latin column interleaving. Site states the text is PD | keep; cite Triglot 1921 edition + scan id | none |
| Calvin, Inst. IV.17, II.13 (6 quotes) | CCEL | match Beveridge 1845 print (0.89–1.00) | Beveridge 1845 vol. 3 `institutesofthec03calvuoft` (n402 IV.17.10, n435 IV.17.32); vol. 2 `institutesofreli02calvuoft` | S |
| Belgic Art. 35 (#60, 70) | CCEL Schaff vol. 3 | matches Schaff 1878 vol. 3 (`creedsofchristen187803scha`, n448); #70 OCR-limited (0.63) | Schaff vol. 3; note CRC 2011 text is © and is not this one | S |
| Heidelberg Q48, Q76 | CCEL Schaff | 0.92–0.94 (OCR noise) | Schaff vol. 3 | S |
| WCF 29.7, 29.8, 8.7 (#61, 67, 78) | opc.org | 29.7 identical to Schaff; 29.8 and 8.7 0.68–0.94 (OCR/window) | Schaff vol. 3 or 1646 original | S |
| WLC Q174 (#72) | opc.org | not found in Schaff vol. 3 scan (not checked further) | 1647 original text via Schaff/Wikisource; unverified | S |
| London Baptist 1689 ch. 30 (#80, 81, 91, 92) | CCEL | match McGlothlin 1911 (`baptistconfessio00mcgl`) 0.90–1.00 | McGlothlin 1911 n22/n285 | S |
| Abstract of Principles XVI (#93) | sbts.edu | not in any scan I checked; 1858 text, PD by date (memory, unverified) | verify against a pre-1931 print | S |
| BF&M 2000 (#82, 90) | bfm.sbc.net | © SBC; short excerpts, registry already marks fair-use | keep short excerpt + link; permission for more | none |
| CCC §1336, 1366, 1413; Ecclesia de Eucharistia §12 | vatican.va | © Libreria Editrice Vaticana; excerpts | keep short + link | none |
| Luther 1528 (#44, 51); Gelasius (#89) | none / not fetched | #44, #51 are paraphrases (verbatim:false); #89 English wording has no edition behind it (Latin Thiel not fetched) | do not display in quotation marks; PL 59 Latin + own translation | S |
| Aquinas ST III q.75 (#13) | New Advent | identical to 1914 scan (see §4) | `summatheologicao33thom`, n289 | S |

Other prints verified present for later use: Triglot full scan 7.6 MB; Schaff vol. III includes the English Belgic, Heidelberg and WCF.

## 7. Registry metadata errors (from the New Advent "About this page" blocks and the scans)

| Registry entry | Registry says | Actual (scan or NA source block) |
|---|---|---|
| `didache` | ANF vol. 7, Roberts & Donaldson, 1885 | ANF vol. 7, tr. M. B. Riddle, 1886 (`Copyright, 1886` in scan) |
| `justin-dialogue` | Roberts & Donaldson | tr. Dods & Reith (NA) |
| `augustine-on-christian-doctrine` | 1890 | 1887 (`Copyright, 1887` in scan) |
| `chrysostom-hom-hebrews` | 1890 | 1889 |
| `theodoret-eranistes` | 1890 | 1892 |
| `cyril-jerusalem-mystagogical` | 1890 | 1894 (NA) |
| `john-damascus-exact-exposition` | 1890 | 1899 (vol. 9, Scribner 1908 scan) |
| `ambrose-on-the-mysteries` | 1890 | 1896 |
| `chrysostom-hom-john` (name) / `augustine-contra-faustum` | "(rev. Kevin Knight, New Advent)" in the edition name | the edition name itself cites the New Advent revision, i.e. the registry names the © layer as the edition |

## 8. Recommendations (order)

1. Replace the 13 type-(b) quotes (11 passages) with print wording from the scans in §4; re-point the 38 New Advent URLs to archive.org leaf links (or Wikisource) and keep New Advent only as an optional "read on" link. Effort S per quote, about half a day total including proofreading; a script can reuse `compare.py` to confirm each replaced quote at coverage 1.0 against the scan.
2. Replace the 5 Trent quotes (Hanover) from the Waterworth scan; replace Marburg with Jacobs II; own translation for Cantate Domino.
3. Move si-33366, 33393, 33397, 33416, 33430 into the withheld set.
4. Correct the registry years/translators (§7).
5. Calvin, Belgic, Heidelberg, LBC 1689 quotes already equal the print, so only the URLs/edition notes need changing (CCEL asks permission for commercial reuse per round-1; the PD words are available from the scans).

## 9. Verified vs not

Verified by me: all quote-vs-scan coverage numbers (scripts in samples), New Advent footer wording, bookofconcord.org copyright statement, papalencyclicals.net Tanner attribution, GHDI translator credit, Hanover vs print artefacts, CCEL txt header "Rights: Public Domain", archive.org leaf numbers via full-text search.
Not verified / memory: legal conclusions about whether New Advent's modernisations are copyrightable (round-1 `aggregators-legal.md` reasoning only), Abstract of Principles and WLC text provenance, ACCS attribution of the five john6 passages (inferred from style; I did not find the IVP text), Hanover's current ToS (taken from round-1). OCR coverage below 1.0 on scans is mostly noise; every difference reported as (b) was read by hand.

## 10. Items worth a further mechanical pass

- Re-run `compare.py` after the quotes are replaced (expect coverage 1.0 against the scans and no New Advent-only tokens).
- Fetch and compare the remaining john6 PD passages not mapped to a New Advent page (Tertullian, Hippolytus, Ignatius Eph.: coverage 0.66–1.0, Hippolytus lower; likely OCR/window issues).
- Locate printed page numbers for each leaf (viewer index vs printed folio) before showing page citations to users.
