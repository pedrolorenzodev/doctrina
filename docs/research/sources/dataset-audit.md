_Report from the overnight source research of 2026-10-09 (agent-written; synthesis in `../sources.md`). Paths like `samples/…` refer to `~/Desktop/dev/doctrina-research-2026-10-09/samples/`, outside the repo._

# Dataset audit: SermonIndex ECF index + HistoricalChristianFaith (HCF) databases

Run: 2026-10-09 (overnight). Read-only on the repo. Files: `scratchpad/samples/dataset-audit/` (scripts, `per_work_summary.csv`, `stats2_rows.json`, `spot_check_hcf.json`, `final.pkl`, `wd_scan.json`, `wd_tree.json`). Large raw files deleted at the end; every script re-downloads what it needs.

## 0. Headline

1. **The SermonIndex dataset has no translation, series or license field per passage.** Fields: id, reference, book, chapter, verse, verse_end, father, source_work, quotation, url (always a `sermonindex.net/commentary/ecf/<BOOK>/<ch>/` page), words. The only provenance hint is a parenthetical in `father` ("as quoted by Aquinas") and 1,129 rows whose `source_work` says "(tr. J. Litteral, draft)". The README's "the underlying translations are public domain" is an assertion, not data.
2. The text is a snapshot of **HCF Commentaries-Database** (97.5% of passages, 66,531 of 68,240, match an HCF row by normalised text prefix). Provenance therefore has to be recovered from HCF: `source_url` -> file in HCF **Writings-Database** -> header of that file.
3. **The HCF source URL is not reliable evidence of the translation.** 5,642 passages (8.3%) point to a Writings-Database file that does not contain the quoted words (HCF replaced the file with a newer translation, the quote text stayed from an older import). Confirmed case: John 6:51 "You are God's beggar..." (Augustine Sermon 83.2) links to a ChatGPT-4o translation file, but the quote itself is not in it (it is Hill's WSA text, as the earlier John 6 triage said).
4. **HCF's "everything is public domain" claim is false for parts of its own text**: Alcuin/Revelation file carries an explicit "© Translation copyrighted, Consolamini Publications, 2016"; Jerome on Daniel is Archer 1958; Stromata III is Chadwick 1954 (LCC); Enchiridion is Outler 1955 (LCC); Hilary on Matthew link is CUA Press 2012; Odes of Solomon is Charlesworth.
5. A large part of the "public domain" text is **machine translation made by HCF** (ChatGPT 3.5/4/4o, Claude via their "Translation-Tools" skill) of PD Latin/Greek (Migne, GCS): Bede (all), Jerome (Matthew, Isaiah, Ezekiel, most minor prophets, many letters), Ambrose, Ambrosiaster, Augustine Sermons, parts of Origen, Gregory the Great. HCF dedicates them to the public domain (CC0 tooling repo). They are not "human-reviewed".
6. **~20% of the dataset (13,792 passages, "ACCS-style") has no source URL at all** and its wording and titles are those of the Ancient Christian Commentary on Scripture (IVP). Treat as copyrighted until proven otherwise.

## 1. What was downloaded (all verified by me)

| Item | Source | Size | Result |
|---|---|---|---|
| SermonIndex `quotation.jsonl`, `father.jsonl`, `verse.jsonl`, README | HF resolve URL; file list via `https://huggingface.co/api/datasets/sermonindex/early-church-fathers` (lastModified 2026-09-10, cc-by-4.0, no OT-deutero: 66 books) | 95 MB / 25 KB / 81 MB | 68,240 quotations, 349 fathers, 18,656 verses. `verse.jsonl` is just the same text regrouped; deleted. |
| HCF `commentaries.sqlite` (release `latest`, 2026-09-22) | github.com/HistoricalChristianFaith/Commentaries-Database/releases | 160 MB | 91,936 rows, 325 authors/works, 34 books incl. Tobit, Judith, 1-2 Macc, Wisdom, Sirach, Baruch. 17,255 rows have no `source_url`; 70,781 point to `historicalchristian.faith/by_father.php?file=...`; ~3.9k external (New Advent 2,440, CCEL 432, Google Books ~400, archive.org 248, Litteral's Google site 129...). |
| HCF `Writings-Database` (tar.gz of master, streamed, never stored) | codeload.github.com | ~300 MB unpacked | 5,995 files (5,493 HTML). Header+tail of every file recorded (`wd_heads.json` deleted), full-file regex scan for copyright/AI markers (`wd_scan.json` kept). |
| HCF READMEs, LICENSE, git log (blobless clone) | GitHub | tiny | see 2 |

## 2. HCF licensing statements (read in the repos)

- Commentaries-Database LICENSE (created 2026-03-05): public-domain dedication for the compilation + a **fair-use notice for copyrighted excerpts**; "downstream users are responsible for their own fair-use analysis... the public-domain dedication does not extend to the fair-use excerpts". So HCF itself admits the database contains copyrighted excerpts. Fair use is not a licence that Doctrina (commercial, Vercel/US + Argentina/Spain readers) inherits.
- Writings-Database README: "All works in this repo are in the public domain", sources listed: ANF/NPNF, Roger Pearse's texts and translations, "Migne's PL/PG translated into English via ChatGPT". Writings-Database-Non-English: "our translations (all in the public domain)". Translation-Tools: LLM-assisted workflow (Claude), CC0.
- Jerome/Letters README: "Most letters are NPNF II vol. VI (PD)... the rest are translated via ChatGPT 3.5 from the Latin in Migne".
- Commit messages (git log, verified): "add new public domain translations" (Gregory the Great homilies/Ezekiel, 2026-02-17); "Standardize Bede table-of-contents machine-translations" (2026-09-22); 2026-01/02 "remove old bulk import", "remove those lacking sources", "remove existing FORTY GOSPEL HOMILIES": the maintainer has been replacing sourceless/old imports with their own translations, which is exactly why quote text and linked file diverge in the dataset snapshot.
- Litteral (Patristic Bible Commentary, source of "(tr. J. Litteral, draft)" rows and of the Oecumenius, Alcuin, Cassiodorus, Rabanus files): his site advertises "Buy Patristic Commentaries in print"; no open licence found on the homepage; one file carries an explicit (c). Treat as author-copyrighted.

## 3. Method (so counts are reproducible)

1. Joined each SI passage to an HCF row by the first 200 alphanumeric characters of the text (66,531 matches; unmatched 1,709 = 1,109 Litteral drafts + 379 Ambrosiaster + 218 Origen, all ACCS-style/Litteral titles).
2. From the HCF `source_url` took the Writings-Database file path; read its header/tail/full scan for translator, series, "ChatGPT", copyright lines.
3. **Text verification**: 5 x 30-character windows of each quote searched in the linked file (and, with an Aho-Corasick automaton over 131k probes, in *all* 5,554 Writings-Database text files). Quote counted as verified if found in the linked file; if found only elsewhere, labelled by the file where it was found; if found nowhere and URL exists -> MISMATCH.
4. Classes (final):
   - **PD**: pre-1931 human translation. Evidence tiers: (a) marker in file or Newman Catena Aurea 19,543; (b) series inferred from folder/title (e.g. Chrysostom NPNF, Augustine on the Psalms NPNF 8, Gregory Morals = Oxford Library of the Fathers), text verified in file 7,827; (c) text found in another PD file 2,846; (d) external link to ANF/NPNF/New Advent (text not verified) 830.
   - **AI/NEW**: machine translation by HCF (explicit marker or commit evidence) 11,038 + undocumented "new translations" 1,594 (Gregory, Cyril Isaiah/Minor Prophets, Didymus Genesis).
   - **COPY**: named modern translator / explicit (c) / known commercial print: Consolamini/Litteral (Alcuin 2016 (c); Oecumenius, Cassiodorus, Rabanus, Litteral drafts), Archer 1958, Chadwick 1954, Outler 1955, Hilary FOTC 2012, Ward (Desert Fathers), Charlesworth, Pearse-commissioned modern PDFs (Hooker; Hippolytus Daniel PDF).
   - **ACCS (no URL)**: no source URL; modern-English ACCS-style citation titles ("PAULINE COMMENTARY FROM THE GREEK CHURCH", "CATENA", "INTRODUCTORY TRACTATE ON THE LETTER OF JAMES"...). *Attribution to ACCS is an inference from the titles and wording (memory, unverified: I could not full-text search ACCS; web-search and Google Books quotas were exhausted by other agents).*
   - **MISMATCH**: URL exists but quote not in file.
   - **UNK**: rest (324).

## 4. Counts, whole dataset (68,240 passages)

| Class | Passages | % | Notes |
|---|---|---|---|
| PD | 31,046 | 45.5 | Catena Aurea (Newman) 7,846; ANF/NPNF/LF volumes (Tertullian, Chrysostom, Augustine, Cyril on John (Pusey) / on Luke (Payne Smith), Cyprian, Irenaeus, Clement...) |
| AI/NEW | 12,632 | 18.5 | HCF machine translation; 8,086 total passages are "as quoted by Aquinas" (separate flag) |
| COPY | 4,804 | 7.0 | Litteral/Consolamini ~3,100, Archer 330, Ward 275, Alcuin (c) 200, Hilary FOTC 152, LCC 83+4, Charlesworth 4 ... |
| ACCS (no URL) | 13,792 | 20.2 | Theodoret 1,281; Chrysostom 975; Ambrosiaster 937; Augustine 810; Ephrem 742; Cyril Alex 495; Theodore of Mopsuestia 489; Pelagius 462; Caesarius 441; Basil 439; Andreas 416; Jerome 374 |
| MISMATCH | 5,642 | 8.3 | Jerome Isaiah 765, Augustine Sermons 574, Jerome Ezekiel 428, Bede Homilies 257, Augustine Letters 248, City of God 193, Origen John 235, Cyril Isaiah 126, Ambrose Luke 119 ... |
| UNK | 324 | 0.5 | |

Cut-off check (father default year <= 749, HCF `father_meta`): PD 30,267; PD+AI/NEW 42,896. The remainder of the dataset is Bede-onwards medieval (Alcuin, Rabanus, Aquinas, Luther, Wesley, C.S. Lewis appear as "fathers").

Spot check of the earlier John 6:47-58 triage (100 entries): previous 86 PD / 9 unverified / 5 ©. Now: 84 PD, 8 ACCS (no URL), 5 MISMATCH (incl. Hill's Sermon 83), 2 COPY (Ward), 1 AI. Consistent, slightly stricter.

## 5. Counts for launch-doctrine passages

Overlap rule: passage [verse, verse_end] intersects the range. SI contains no deuterocanon.

| Set | n | PD | AI/NEW | COPY | ACCS | MISM. | UNK | A = PD | B = PD+AI/NEW | A, <=749 | B, <=749 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| John 6 | 472 | 397 | 6 | 3 | 21 | 44 | 1 | 397 (84%) | 403 | 374 | 380 |
| Matthew 16 | 150 | 98 | 25 | 5 | 12 | 10 | 0 | 98 (65%) | 123 | 93 | 118 |
| Matthew 26 | 409 | 277 | 107 | 12 | 7 | 6 | 0 | 277 (68%) | 384 | 255 | 362 |
| Luke 22 | 356 | 227 | 81 | 3 | 38 | 7 | 0 | 227 (64%) | 308 | 224 | 305 |
| 1 Cor 10-11 | 355 | 233 | 7 | 8 | 86 | 20 | 1 | 233 (66%) | 240 | 233 | 240 |
| Romans 3-5 | 478 | 145 | 83 | 3 | 230 | 11 | 6 | 145 (30%) | 228 | 145 | 228 |
| James 2 | 95 | 8 | 20 | 13 | 49 | 5 | 0 | 8 (8%) | 28 | 8 | 28 |
| Luke 1 | 492 | 300 | 128 | 2 | 26 | 34 | 2 | 300 (61%) | 428 | 270 | 398 |
| John 19:25-27 | 31 | 23 | 0 | 0 | 1 | 6 | 1 | 23 | 23 | 23 | 23 |
| 1 Cor 3:15 | 4 | 1 | 0 | 0 | 3 | 0 | 0 | 1 | 1 | 1 | 1 |
| Matt 28:19 | 15 | 12 | 1 | 1 | 0 | 1 | 0 | 12 | 13 | 12 | 13 |
| Acts 2:38 | 8 | 3 | 2 | 1 | 1 | 1 | 0 | 3 | 5 | 3 | 5 |
| John 3:5 | 37 | 34 | 1 | 0 | 1 | 1 | 0 | 34 | 35 | 34 | 35 |
| 2 Maccabees 12 | SI: 0 | (HCF has 34 rows on 2 Macc 12; 16 are <=749 and mostly New Advent ANF/NPNF links; Ambrose via FOTC on archive.org (c); Arius/Epiphanius via Panarion (Brill, (c)); the rest are Rabanus (856), Aquinas, Luther, Wesley, C.S. Lewis) | | | | | | | | | |
| NT total | 43,645 | 24,327 | 6,304 | 2,634 | 7,649 | 2,489 | 242 | 24,327 | 30,631 | | |
| OT total | 24,595 | 6,719 | 6,328 | 2,170 | 6,143 | 3,153 | 82 | 6,719 | 13,047 | | |

Reading: John 6, Matthew 26, 1 Cor 10-11, Luke 1/22, Matthew 16 are well covered by PD. **Romans 3-5 (justification) and James 2 are the weak spots**: most of the patristic commentary there is ACCS-style (Ambrosiaster, Pelagius, Theodoret, Theodore of Mopsuestia, Cyril of Alexandria on Romans) with no PD source; only Chrysostom/Augustine/Origen-Rufinus (the latter is HCF machine translation) survive. 1 Cor 3:15 (purgatory) is essentially all ACCS-style. John 3:5 and Matt 28:19 (baptism) are covered.

## 6. Source-series classification (works with the most passages)

(Full list: `per_work_summary.csv`, top 600 father/works.) Evidence for each class marked V (seen in a file/page I opened), M (memory, unverified).

| Series / work | Passages (approx.) | Class | Evidence |
|---|---|---|---|
| Aquinas, *Catena Aurea* (Matthew, Luke, John, Mark; Fathers "as quoted by Aquinas") | 7,846 | PD | V: file "Translator Preface" refers to the Oxford translation of the Catena; folder LIST OF AUTHORS cites "Oxford Translation, 1839". M: Newman/Parker 1841-45, edited by Newman. |
| Chrysostom Homilies on Matthew, John, Acts, Romans, 1-2 Cor, Eph, Phil, Col, Thess, Tim, Tit, Heb | ~5,600 | PD | V: files carry NPNF/Oxford-LF footnote structure; Schaff/Oxford translator marker in several. Series inferred for those without header. |
| Augustine Tractates on John, Psalms (Enarrationes), City of God, Letters, Confessions, Sermon on the Mount | ~2,500 | PD | V: NPNF markers; but City of God 193 and Letters 248 are MISMATCH (quote text is another, modern translation) |
| Cyril of Alexandria on John (Pusey 1874), on Luke (Payne Smith 1859) | ~1,050 | PD | V: "[Translated by P. E. Pusey]" in file; Pearse-hosted |
| Tertullian (Thelwall/Holmes, ANF) | ~2,600 | PD | V |
| Irenaeus, Clement of Alexandria, Hippolytus Refutation, Origen De Principiis/Celsus/John (ANF/NPNF), Cyprian, Ignatius... | ~3,000 | PD | V |
| Gregory the Great, Morals on Job | 1,165 | PD | V: heading "THE BOOKS OF THE MORALS OF ST. GREGORY THE POPE... VOLUME II" (Oxford Library of the Fathers, M: 1844-50) |
| Philoxenus (Budge 1894), Cosmas (McCrindle 1897) via Pearse | ~800 | PD | V: Pearse headers |
| Salvian (Sanford 1930) | 10 | PD (US) | V: Pearse note "copyright records... not renewed... public domain in the USA"; published 1930, so PD in the US regardless as of 2026 |
| Bede (all commentaries and homilies) | ~4,000 | AI | V: "Translated from Migne" headers; HCF commit message calls them machine translations |
| Jerome Matthew, Isaiah, Ezekiel, Jeremiah, minor prophets, Hebrew Questions, many Letters | ~3,800 | AI | V: "Translated into English using ChatGPT"; Isaiah/Ezekiel/Galatians etc. use the newer Translation-Tools workflow ("Latin source: ... verified against page images"). **Most Isaiah/Ezekiel passages are MISMATCH** (old text, new file). |
| Ambrose (Luke, Psalms, minor), Ambrosiaster (when sourced) | ~900 | AI | V: "Translated into English using ChatGPT" |
| Augustine Sermons | 799 | AI | V: Introduction: "translated into English using Chatgpt 4o". Mostly MISMATCH (574): quoted text is Hill (WSA). |
| Origen Homilies Genesis/Exodus/Numbers/Joshua/Luke/Romans (Rufinus), Matthew (GCS) | ~1,400 | AI | V: "Latin source / Greek source ... This English translation is released into the public domain" |
| Gregory the Great 40 Gospel Homilies, Ezekiel, 1 Kings, Song; Cyril Isaiah/Minor Prophets; Didymus Genesis | ~2,000 | NEW (undocumented) | V: no translator named; commits "add new public domain translations". Provenance cannot be checked. |
| Oecumenius (Acts, Rev, Hebrews, Pastoral, Gal, Catholic Epp.) , Cassiodorus, Rabanus (Litteral's site) | ~1,800 | COPY | V: "Translated by John Litteral"; his site sells print editions; no licence |
| Alcuin on Revelation | 200 | COPY | V: "(c) Translation copyrighted, Consolamini Publications, 2016. Translated by Sarah Van Der Pas, edited by John Litteral" |
| Augustine "Annotations on Job", "Questions on Genesis/Deut." "(tr. J. Litteral, draft)" | 1,129 | COPY | V: SI `source_work` field |
| Jerome Commentary on Daniel | 330 | COPY | V: CCEL/Pearse page "(1958) pp. 15-157 [Translated by Gleason L. Archer]" (Baker, M) |
| Desert Fathers (Google Books link) | 275 | COPY | M: Benedicta Ward, Penguin; Google Books page did not expose publisher to curl |
| Hilary, Commentary on Matthew (archive.org link) | 152 | COPY | V: archive.org metadata: Catholic University of America Press, 2012 (FOTC 125) |
| Clement Stromata III (Chadwick, LCC 1954); Augustine Enchiridion (Outler, LCC 1955); Odes of Solomon (Charlesworth) | 83+19; 4 | COPY | V: headers |
| Hippolytus Commentary on Daniel (PDF), Origen Homilies on Ezekiel (Hooker-Pearse PDF) | 260; 101 | COPY/unknown | V: file names/types; modern translations, not inspected (PDF) |
| Theodoret, Ambrosiaster, Pelagius, Theodore of Mopsuestia, Ephrem, Caesarius, Basil..., "CATENA", "PAULINE COMMENTARY FROM THE GREEK CHURCH" (no URL) | 13,792 | ACCS-style | V: no URL; M: ACCS (IVP) citation format. Unverified |

## 7. Spot checks (~20 opened)

Fetched the linked Writings-Database file and searched the quote for 17 stratified passages (`spot_check_hcf.json`): quote found in 15; not found in 2 (Jerome Letter 118 and Cyril Isaiah, consistent with the MISMATCH finding). Headers read for: Bede Luke, Jerome Isaiah, Jerome Matthew, Augustine Sermons Introduction, Chrysostom Homily 45 on John, Catena Aurea John 6, Cyril on John (Pusey), Origen/Matthew, Ambrose Luke (ChatGPT), Enchiridion (Outler), Stromata III (Chadwick), Alcuin ((c) 2016), Oecumenius Gal. (Litteral), Odes of Solomon (Charlesworth), Jerome Daniel (Archer 1958, also opened on ccel.org), New Advent `/fathers/0715.htm` (Apostolic Constitutions, Donaldson, ANF 7 - confirmed PD series), archive.org Hilary (CUA 2012), archive.org Migne PG 82 (the Theodoret "source URL" is the Greek original, not the English text). HCF rendered pages (`by_father.php`) are JS shells and show nothing without the Writings-Database raw files.

## 8. Recommended allow-list rule

Use **HCF directly (Commentaries-Database + Writings-Database), not SermonIndex** (SI adds verse alignment only; it is a derivative snapshot with no provenance, and the HCF data is richer: deuterocanon, source titles, URLs). If SI is kept, join it to HCF.

Publish a passage in full only if ALL hold:

1. **Source URL exists** and resolves to a Writings-Database file or to ANF/NPNF/Schaff/Yonge/Whiston/Charles pages (New Advent `/fathers/`, CCEL `anf*`/`npnf*`, tertullian.org `fathers2`). No URL = reject (13,792).
2. **The quote text is found in that file** (normalised substring check, as in section 3). Else reject (5,642).
3. **File's series is on the allow-list**: ANF, NPNF I/II (includes Oxford Library of the Fathers volumes), Library of the Fathers/Oxford Translation, *Catena Aurea* (Oxford 1841-45), Pusey (Cyril on John), Payne Smith (Cyril on Luke), Yonge (Philo), Whiston (Josephus), Charles (Enoch/Jubilees), McCrindle, Budge, other translators dated 1930 or earlier (Sanford 1930 is OK after 1 Jan 2026), and nothing else. Anything with a modern named translator or a post-1930 date or a (c) line = reject.
4. **Deny-list overrides** (by file/series): Consolamini/Litteral (all), Archer 1958, LCC (Chadwick, Outler), FOTC/CUA, WSA/New City Press (Hill), ACCS, Ward, Charlesworth, Wolf, Magi/Kenny/Duffy Aquinas, Pearse-commissioned modern PDFs.
5. For the patristic feature, also filter father date <= ~749 (Alcuin, Rabanus, Aquinas, Luther, Wesley, C.S. Lewis are in both datasets).

Tier B (decision for Pedro, not for the allow-list by default): HCF machine translations (AI/NEW). They are public-domain by HCF's dedication and legally lower-risk (translation of PD originals, AI output not human-authored: US Copyright Office position, M unverified), but they are unreviewed LLM output (Commodian file itself warns "sometimes the AI will add additional details"), one Augustine file contains a model refusal ("The text is locked for copyright reasons, and I cannot provide an exact translation..."), and the site's invariant "no claim without a citation, no citation without an edition" cannot be met with an edition that is "ChatGPT 3.5". Suggest: use only as a clearly labelled "machine translation, unreviewed" layer, or treat as raw material for our own human-reviewed translation from the PD Latin/Greek (the route the brief allows).

### Estimated survivors

| Rule | Passages | % of 68,240 |
|---|---|---|
| Strict A (PD, all evidence tiers) | 31,046 | 45.5% |
| A, only evidence tiers (a)+(c) (marker in file; text verified in a PD file) | 22,389 | 32.8% |
| A and father <= 749 | 30,267 | 44.4% |
| A + tier B (PD + AI/NEW, verified) | 43,678 | 64.0% |
| A + B and <= 749 | 42,896 | 62.9% |

Launch sets under strict A: John 6 397/472, Matt 16 98/150, Matt 26 277/409, Luke 22 227/356, 1 Cor 10-11 233/355, Romans 3-5 145/478, James 2 8/95, Luke 1 300/492, John 19:25-27 23/31, 1 Cor 3:15 1/4, Matt 28:19 12/15, Acts 2:38 3/8, John 3:5 34/37.

Note: tier (a)+(c) number = 19,543 + 2,846 = 22,389. The 7,827 "series inferred from folder" passages are real NPNF/Oxford LF material in all cases I opened, but the file has no header proving it; they should be verified by a spot check against ccel.org/newadvent per work before launch (Chrysostom Acts/1 Cor/Eph/..., Augustine on the Psalms, Gregory Morals).

## 9. Items worth a mechanical verification pass

1. ACCS attribution of the 13,792 no-URL passages: take 30 quotes and full-text search them in a licensed/legitimate index (Google Books snippets when quota allows; Logos/Biblia only via a rights-holder), or ask HCF (issue on Commentaries-Database) which source those rows came from.
2. Re-run the text-verification against the **current** Writings-Database after each HCF release (it changes weekly; section 3 script `stream5.py`), and pin the commit SHA of both HCF repos in the registry.
3. Per work, confirm the series for the "inferred" PD folders: ccel.org/ccel/schaff/npnf1x.html volumes (URL pattern in HCF file path -> volume).
4. Gregory the Great Homilies on Ezekiel / 40 Gospel Homilies / 1 Kings and Cyril Isaiah/Minor Prophets: provenance undocumented. Compare a paragraph to Hurst (Cistercian 1990), Gray (1990), Tomkinson (2008) and Hill (FOTC) to rule out copying, or treat as AI.
5. Pearse-hosted "public domain" statements for modern translations (Archer 1958 Daniel, Edgecomb 2006, McGregor Ecclesiastes, Hooker Ezekiel) are claims by the host or translator, not by the rights holder; Archer's Baker 1958 edition: check the Stanford Copyright Renewal Database before use.
6. Desert Fathers (Google Books id UkbZy7-SqjkC): confirm publisher/translator.
7. Whether SermonIndex is aware that its dataset licence (CC BY 4.0) covers only their alignment: contact/issue on the HF dataset page if we redistribute any SI-derived row.

## 10. Limits of this audit

- Web search and Google Books API quotas were exhausted by the run; license statements about ACCS/FOTC/Ward/Penguin/Baker are from file headers, archive.org metadata or memory and are marked as such.
- Class assignment for 7,827 PD passages rests on folder/series inference (with text verified in the linked file).
- Quote verification uses 30-character windows after stripping non-alphanumerics: HCF files that differ only in typography still match; very short quotes (179 of 68,240 < 46 alphanumerics) are matched by URL only.
- SI "father" is the dataset's attribution (tradition's name), including pseudepigrapha and post-patristic authors.
