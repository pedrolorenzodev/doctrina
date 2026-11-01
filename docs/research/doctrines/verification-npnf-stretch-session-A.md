Status: draft, NOT verified by Pedro

# Verification: session A, Nicene and Post-Nicene stretch (NPNF witnesses)

Checked 2026-11-01 by an independent verifier. Files checked: the subsection «Witnesses quoted, Nicene and Post-Nicene stretch (session A, 2026-11-01)» in `docs/research/doctrines/baptism/shared.md` (B-W5 to B-W10 and its «Rows … settled» paragraph), `docs/research/doctrines/papacy/shared.md` (P-W5 to P-W8) and `docs/research/doctrines/sola-scriptura/shared.md` (SS-W5 to SS-W7). Nothing in the repo was edited except this file. Scratch (scans, scripts, page images) is in the session scratchpad outside the repo.

## Progress

- Status: DONE. All 13 witnesses, the three «Rows settled» paragraphs and the three edition lines were checked.
- baptism/shared.md: DONE (B-W5 to B-W10, rows paragraph, edition paragraph).
- papacy/shared.md: DONE (P-W5 to P-W8, rows paragraph, edition paragraph).
- sola-scriptura/shared.md: DONE (SS-W5 to SS-W7, header sentence, rows paragraph).
- Page images read: NPNF2 14 p. 40 (Nicaea canon 19), p. 287 (Chalcedon canon 28), pp. 496–497 (African Code Canon CX and its notes), NPNF2 7 p. 5 (Procatechesis 16), NPNF1 4 p. 461 (Augustine), NPNF2 10 Introduction to On the Mysteries.
- Not done: no page image for the Gregory the Great, Athanasius, Jerome, Vincent, Gregory of Nazianzus and Cyril Introduction passages (OCR only; the OCR matched except where listed). Spanish was judged by me against the English only.

Legend: CONFIRMED (string and locator found as stated) / WRONG (needs a correction, given with its source and tag) / UNCONFIRMABLE (could not be settled, reason given).

Counts (per item ID below): baptism/shared.md 26 CONFIRMED, 9 WRONG, 1 UNCONFIRMABLE; papacy/shared.md 19 CONFIRMED, 5 WRONG, 1 UNCONFIRMABLE; sola-scriptura/shared.md 11 CONFIRMED, 7 WRONG, 1 UNCONFIRMABLE. In the Wrong items list below, BR.1 and BR.2 are written as one entry.

## Method notes

- Scans: the eight `_djvu.txt` files named in the brief, downloaded with curl. The comparison script strips everything but letters, finds every occurrence of each segment (split at `[…]`), then diffs the printed span word by word against the quote to see punctuation, case and hyphenation.
- A letter-only match returns the first occurrence. For B-W5 the first occurrence is the editor's Introduction (NPNF2 7, p. xliv area), which re-quotes the Procatechesis with different punctuation («you ; a ransom to captives, a remission …», «new birth», «adoption."»). The file's wording matches the real § 16 (p. 5), not the Introduction. CONFIRMED on page image.
- The archive.org `_page_numbers.json` is unreliable: for vol. XIV it maps printed p. 496 to leaf n539 (the real leaf is n537) and for the Augustine volume it maps p. 461 to n474 (the real leaf is n472). Leaves used here were read from the images.
- OCR slips seen and not listed by the file are named per witness. Footnote marks inside quotes are not counted as defects.
- Scope of «CONFIRMED» for quotes: every segment is in the cited scan in order, the punctuation of the file equals the print unless a WRONG item says otherwise, and the cut ends are checked (what the print has after the last word).

## 1. baptism/shared.md

### Edition paragraph

- BE.1 · Editions NPNF2 vol. VII (New York: CLC; Oxford and London: Parker & Company, 1894; Cyril tr. Gifford, Gregory tr. Browne and Swallow), vol. X (Oxford: James Parker and Company; New York: CLC, 1896; Ambrose tr. H. de Romestin with E. de Romestin and H. T. F. Duckworth), vol. XIV (New York: Charles Scribner's Sons; Oxford and London: Parker & Company, 1900; ed. Henry R. Percival) · CONFIRMED · title pages and contents of the three scans.
- BE.2 · «all *A Select Library …*, ed. Philip Schaff and Henry Wace», which includes First Series vol. IV (Augustine, Buffalo, CLC, 1887) · WRONG · the Augustine title page reads «EDITED BY PHILIP SCHAFF, D.D., LL.D. … IN CONNECTION WITH A NUMBER OF PATRISTIC SCHOLARS» and prints no Wace; «Schaff and Wace» is the Second Series. Tag: `[verified: NPNF1 4 title page, OCR]`. Fix: say «First Series vol. IV ed. Philip Schaff; Second Series vols. VII, X, XIV ed. Philip Schaff and Henry Wace (vol. XIV tr./ed. Percival)». The scan's title page does not print «First Series» either; that label is the library's, not read.

### B-W5 · Cyril of Jerusalem, Procatechesis 16

- B5.1 · Quote · CONFIRMED · NPNF2 7 p. 5, § 16, page image: «Great is the Baptism that lies before you: a ransom to captives; a remission of offences; a death of sin; a new-birth of the soul; a garment of light; a holy indissoluble seal; a chariot to heaven; the delight of Paradise; a welcome into the kingdom; the gift of adoption!» Identical, including `new-birth`, semicolons and the `!`. The footnote mark after «you» is footnote 8 (an editor's note: «S. Basil has a passage in praise of Baptism almost the same …»), not quoted.
- B5.2 · Date line: «Lent 348 … `[verified: NPNF2 7 Introduction, OCR]`» · WRONG (stronger than what was read) · the quoted words are printed (Introduction, the page headed «xliv INTRODUCTION.»): «the Lent in which the Lectures were delivered must have been, as Touttée decides, that of 348, not of 347, as Tillemont had supposed». But that sentence is the end of a conditional chain: «If we may assume that the outbreak of this heresy is to be dated from the famous disputation between Archelaus and Manes in 277, it follows that Cyril must have made this statement in 347 or 348. And further, if Dr. Routh is correct in fixing the date of the Disputation between July and December 277, the Lent in which the Lectures were delivered must have been, as Touttée decides, that of 348 …». The same Introduction says on another ground that the Lectures were before 350 (Constans died early in 350) and puts the Persian-war allusion at «348 … apparently». Correct wording: «Lent 348, the editor's inference (E. H. Gifford, Introduction), resting on Cat. vi. 20 «full seventy years ago» and two stated assumptions; before 350 on other grounds». Tag: `[verified: NPNF2 7 Introduction, OCR; editor's inference, conditional]`. The Procatechesis belongs to the same Lent (the Introduction says it «preceded» the Lectures).
- B5.3 · Edition, locator, page · CONFIRMED · Procatechesis § 16; running head «PROCATECHESIS. 5» and the page image show § 16 on p. 5; title page of vol. VII: NY CLC and Oxford and London Parker, 1894; Cyril by E. H. Gifford (contents).
- B5.4 · Spanish · CONFIRMED · faithful, no addition or omission. Minor: the English ends with «!», the Spanish ends with a full stop.
- B5.5 · «Why it fits a neutral list: one of the fullest early lists of what baptism gives» · WRONG (unsupported claim) · no source in the file or the repo compares early lists. Fix: «a list of what baptism gives, said to those about to receive it» (drop «one of the fullest early»). Tag: remove the comparison or mark `[unverified]`.

### B-W6 · Council of Nicaea, canon 19

- B6.1 · Quote · WRONG (clipped quote closed with a full stop) · NPNF2 14 p. 40, page image: the canon prints «… let them be rebaptized and ordained by the Bishop of the Catholic Church ; but if the examination should discover them to be unfit, they ought to be deposed. Likewise in the case of their deaconesses …». The file ends «… Catholic Church.» as if the sentence ended. Correct wording: end the quote «… let them be rebaptized and ordained by the Bishop of the Catholic Church;» (semicolon, as printed) or add «[…]» and, for a complete sentence, extend to «… they ought to be deposed.» The Spanish needs the same change (it ends «Iglesia Católica.»).
- B6.2 · OCR slips: «fiowu» → «flown», «rebajitized» → «rebaptized» · CONFIRMED on the page image: printed «flown for refuge», «rebaptized»; «in past time» is printed as «in / past time» (line break), not «in the past time». Unlisted OCR slips, all correct in the quote: «iu» → «in», «clerg}-» → «clergy», «l)e» → «be». No change needed.
- B6.3 · Date «A.D. 325 (the page heading «I. NICE. A.D. 325»)» · CONFIRMED · page image p. 40 running head «I. NICE. A.D. 325».
- B6.4 · Edition and locator · CONFIRMED · Canon XIX, p. 40; contents: «The Canons of 318 Holy Fathers assembled in the City of Nice, in Bithynia».
- B6.5 · Spanish · CONFIRMED as to faithfulness («en todo caso» for «by all means», «en tiempo pasado» for «in past time»); it inherits the clip of B6.1. The file's line «The canon gives no reason for rebaptizing this group» is true of the canon; the editor's notes on the same page do discuss the baptismal formula of the Samosatans (not quoted), which is worth one clause.

### B-W7 · Gregory of Nazianzus, Oration 40, § 17

- B7.1 · Quote · CONFIRMED · NPNF2 7, Oration XL, § XVII (the section opens «XVII. Art thou young?»). Identical to the OCR («Have you an infant child? … and of how little faith!»); the print continues «Why, Anna even before Samuel was born …», so the closing «!» is correct.
- B7.2 · Date as printed «Preached at Constantinople Jan. 6, 381» · CONFIRMED · the heading reads «Preached at Constantinople Jan. 6, 381, being the day following the delivery of that on the Holy Lights.» (OCR «Constantinopk»). The file's quote is the first part of the heading; the heading goes on.
- B7.3 · The day (6 January) · UNCONFIRMABLE as a fixed day · the same volume's Introduction to Oration 39 says that oration «was preached on the Festival of the Epiphany 381, and was followed the next day by that on Baptism», while the Oration 40 heading prints Jan. 6; the Introduction to Oration 38 calls «Dec. 25, 380» or «Jan. 6, 381» an open doubt for that oration. So the edition is not consistent on the day. Safe claim: the year 381 and the heading's «Jan. 6». The file's «(the day)» in the rows paragraph should say «as the heading prints it».
- B7.4 · Locator and edition · CONFIRMED · Oration XL, § XVII, vol. VII (1894).
- B7.5 · Spanish · CONFIRMED · faithful. «de poca alma» for «small-souled» is a calque (the English word means petty-minded); acceptable, optional «de poco ánimo».

### B-W8 · Augustine, On Baptism IV, chap. 24 (§ 32)

- B8.1 · Quote · CONFIRMED · NPNF1 4, p. 461, page image: «Chap. 24.—32. And if any one seek for divine authority in this matter, … from the parallel of circumcision, which was received by God's earlier people …». The file closes after «circumcision» with no full stop, which is right because the sentence goes on.
- B8.2 · Date «Circa, A.D. 400» in the volume's table of contents · CONFIRMED · printed «Circa, A. D. 400 . 411–514» for «On Baptism, against the Donatists».
- B8.3 · Locator and page · CONFIRMED · «Chap. 24.—32.», book IV; page 461 (image n472; the running head reads «Chap. XXIV.] ON BAPTISM, AGAINST THE DONATISTS. 461»; the chap. 23 text is on the same page).
- B8.4 · «Surrounding text: chap. 23 (§ 31) ends «And this is the firm tradition of the universal Church, in respect of the baptism of infants»» · WRONG · chap. 23 does not end there. The print (p. 461) runs: «And this is the firm tradition of the universal Church, in respect of the baptism of infants, who certainly are as yet unable "with the heart to believe unto righteousness, and with the mouth to make confession unto salvation," as the thief could do; nay, who even, by crying and moaning when the mystery is performed upon them, raise their voices in opposition to the mysterious words, and yet no Christian will say that they are baptized to no purpose.» Correct: write «chap. 23 (§ 31) closes with a sentence that begins «And this is the firm tradition … infants, who certainly are as yet unable […] and yet no Christian will say that they are baptized to no purpose.»» Tag: `[verified: NPNF1 4 p. 461, image]`.
- B8.5 · Spanish · CONFIRMED · faithful.

### B-W9 · Council of Carthage, African Code, Canon CX

- B9.1 · Quote · CONFIRMED · NPNF2 14 pp. 496–497, page images: «Likewise it seemed good that whosoever denies that infants newly from their mother's wombs should be baptized, or says that baptism is for remission of sins, but that they derive from Adam no original sin, which needs to be removed by the laver of regeneration, from whence the conclusion follows, that in them the form of baptism for the remission of sins, is to be understood as false and not true, let him be anathema.» The page break falls after «laver of» (p. 496 to p. 497); the next print is a new paragraph («For no otherwise …»), so the closing full stop is right. OCR slips «ba])tized», «ba})tism», «whieh» correct as listed.
- B9.2 · Date and headings · CONFIRMED · title heading «THE CANONS OF THE CCXVII BLESSED FATHERS WHO ASSEMBLED AT CARTHAGE, COMMONLY CALLED THE CODE OF CANONS OF THE AFRICAN CHURCH. A.D. 419» and running head «AFRICAN CODE. A.D. 419» on both pages; p. 496 note: «Canon CVIII. is the introduction to the Synod of Carthage of May 1, A.D. 418; and Canon CIX. is Canon j. of that synod.» The heading «CANON CX. (Greek cxii. bis)» is printed (OCR «ex.»).
- B9.3 · «(the note itself does not number Canon CX; this reading is the dossier's)» and «Settles the row … as to the edition's numbering (Canon CX), not as to «can. 2»» · WRONG · the note under the Ancient Epitome of Canon CX, p. 497, prints: «This is Canon ij. of Carthage, A.D. 418 [Greek Canon 112].» (page image; «ij.» is the Latin-style numeral for 2). So the edition does number it: Canon CX of the Code is canon 2 («ij.») of the 418 synod. Correct wording: «the edition's note on Canon CX says: «This is Canon ij. of Carthage, A.D. 418 [Greek Canon 112]»», and the row «Carthage 418, can. 2» is settled by the edition for this text (English text only). The date of the canon is 418 (synod of May 1), while 419 is the Code's heading; say both. Tag: `[verified: NPNF2 14 p. 497, image]`.
- B9.4 · «continues with a reading of Romans 5:12 «as the Catholic Church everywhere diffused has always understood it»» · WRONG (a word of the file inside quotation marks) · the print reads «… and so death passed upon all men in that all have sinned," than the Catholic Church everywhere diffused has always understood it.» The word is «than», not «as». Correct: «For no otherwise can be understood what the Apostle says [Romans 5:12] … than the Catholic Church everywhere diffused has always understood it».
- B9.5 · Edition and locator · CONFIRMED · Canon CX, Greek cxii. bis; vol. XIV, 1900.
- B9.6 · Spanish · CONFIRMED · faithful; adds the article in «para remisión de los pecados» for «for remission of sins» (harmless).

### B-W10 · Ambrose, On the Mysteries, ch. 5, § 28

- B10.1 · Quote · CONFIRMED · NPNF2 10, «Concerning the Mysteries», § 28 under «CHAPTER V.» (the heading precedes § 26; the file's «chapter number is the dossier's reading, to check» can now be removed): «You went down, then (into the water), remember what you replied to the questions, that you believe in the Father, that you believe in the Son, that you believe in the Holy Spirit.» The next print is «The statement there is not: I believe in a greater and in a less and in a lowest person». The file's «a greater and … a less and … a lowest person» elides only «in».
- B10.2 · Date · CONFIRMED · Introduction (page image, unnumbered page before the treatise): «The treatise was composed for use during Lent, but in what year cannot be fixed, possibly, from reference made to the treatise De Patriarchis, about A.D. 387.» (OCR «Rent», read «Lent» on the image; the slip is not listed in the file). The same Introduction says authorship by Ambrose is «now universally admitted».
- B10.3 · Edition and locator · CONFIRMED · title page and contents («On the Mysteries»); translators as listed.
- B10.4 · Spanish · CONFIRMED · faithful.

### «Rows … settled» paragraph

- BR.1 · Constantinople I, canon 7 · WRONG (attribution and strength) · the words are printed, NPNF2 14 p. 185: «… Beveridge is probably right in conjecturing that the canon was only an extract from this letter to Martyrius; therefore in no way a decree of the second General Council, nor even of the Synod of 382, but at least eighty years later than the latter. This canon, with an addition, was afterwards adopted by the Quinisext Synod as its ninety-fifth, without, however, giving its origin.» They sit under the label «(Hefele, History of the Councils, Vol. II., p. 368)» in the notes, not in an «editor's note quoting Beveridge»: it is Hefele reporting Beveridge's conjecture («probably right in conjecturing»). The preceding note (p. 184–185) adds that the Greek canonist counts «six Canons only» for this council. So the row is not «settled»: the edition prints a conjecture and a counter-count, and the quote is attributed wrongly. Correct wording: «a note in NPNF2 14 p. 185 quoting Hefele (History of the Councils, II, p. 368): Beveridge «is probably right in conjecturing …»; and that the Quinisext Synod adopted it as its ninety-fifth». The canon's list (Arians, Macedonians, Sabbatians, Novatians, Quarto-decimans, Apollinarians; then Eunomians, Montanists, Sabellians) is printed. Tag: `[verified: NPNF2 14 p. 185, OCR; Hefele, not Percival's own]`.
- BR.2 · «the form read here is Epiphanius's variant, which has «We acknowledge one baptism for the remission of sins»» · WRONG (misleading) · the creed printed as the Council's own, p. 163, already has «We acknowledge one Baptism for the remission of sins, [and] we look for the resurrection of the dead and the life of the world to come. Amen.» (capital B); Epiphanius's creed from the Ancoratus (cap. cxx.), printed in the notes p. 164, has «one baptism» in lower case; Epiphanius's longer creed (OCR p. 164–165) has «And in one baptism of penitence». Correct: «the Council's creed (p. 163) has «We acknowledge one Baptism for the remission of sins»; the Ancoratus creed (cap. cxx., p. 164) has the same clause; the longer Ancoratus creed has «one baptism of penitence»». Page numbers of the image were not collated (OCR heads only).
- BR.3 · Ambrose: Prolegomena «among works more or less doubtful … admitted by the Benedictines, but rejected, and apparently on sufficient grounds, by Ihm» · CONFIRMED (quote) · printed in the Prolegomena, section «VII. Doubtful and Spurious Works», item 3: «Among works more or less doubtful are De Sacramentis, admitted by the Benedictines, but rejected, and apparently on sufficient grounds, by Ihm.» The volume's contents list On the Mysteries and no De Sacramentis. Note: this does not settle the table row («c. 387–391», «De sacr. 2»): the edition dates On the Mysteries «about A.D. 387» only, and says nothing of 391.
- BR.4 · Gregory, Oration 40: «Jan. 6, 381» and § 17 · CONFIRMED as printed; see B7.3 for the day-level caveat.
- Note outside the paragraph: the table rows below it (Nicaea I «text not read tonight», Carthage 418 `[memory]`, Constantinople I `[unverified]`, Augustine `[memory]`, Cyril «c. 350», Ambrose «c. 387–391») still carry the old statuses though the paragraph says they are settled. Not counted.

## 2. papacy/shared.md

### Edition paragraph

- PE.1 · vol. VI Jerome (New York: CLC; Oxford and London: Parker & Company, 1893), vol. XII Leo the Great and Gregory the Great (1895), vol. XIV (Scribner's; Parker; 1900; ed. Henry R. Percival), series ed. Schaff and Wace · CONFIRMED · title pages.

### P-W5 · Council of Nicaea, canon 6

- P5.1 · Quote · CONFIRMED · NPNF2 14 p. 15, «CANON VI.»: «Let the ancient customs in Egypt, Libya and Pentapolis prevail, that the Bishop of Alexandria have jurisdiction in all these, since the like is customary for the Bishop of Rome also. Likewise in Antioch and the other provinces, let the Churches retain their privileges.» The print continues with a new sentence («And this is to be universally understood …»), so the full stop is right.
- P5.2 · Date «I. NICE. A.D. 325» · CONFIRMED · running head on pp. 15 and 40 (image p. 40).
- P5.3 · Edition and locator · CONFIRMED · Canon VI; p. 15 (OCR head «15»).
- P5.4 · «The editor's Ancient Epitome of the canon (not quoted) renders «As also the Roman bishop over those subject to Rome»» · WRONG (minor, attribution) · the words are printed under «Ancient Epitome of Canon VI.» (OCR «Borne» for «Rome», an unlisted slip); the epitome is an ancient text printed by the editor, not the editor's own. Fix: «the Ancient Epitome of Canon VI, as printed by the editor».
- P5.5 · Spanish · CONFIRMED.
- P5.6 · «Settles the row «Nicaea I, canon 6» as to the English text; the Greek and Latin were not read» · CONFIRMED.

### P-W6 · Jerome, Letter XV, § 2

- P6.1 · Quote · CONFIRMED · NPNF2 6, Letter XV, § 2: «As I follow no leader save Christ, so I communicate with none but your blessedness, that is with the chair of Peter. For this, I know, is the rock on which the church is built!» (the print has footnote 16 after «built!»; the church is lower case). OCR identical.
- P6.2 · Date «written in 376 or 377 A.D.» · CONFIRMED · printed: «This letter, written in 376 or 377 A. D., illustrates Jerome's attitude towards the see of Rome at this time held by Damasus, afterwards his warm friend and admirer.»
- P6.3 · Edition and locator · CONFIRMED · «LETTER XV. TO POPE DAMASUS.» under the running head «LETTERS XIV.–XV.»; Jerome vol. VI, 1893.
- P6.4 · Surrounding text · CONFIRMED · the heading names the two questions (true bishop of the three claimants of Antioch; «hypostases»); § 2 prints «I cannot, owing to the great distance between us, always ask of your sanctity the holy thing of the Lord»; the editor's footnote 19 offers two readings of «the holy thing of the Lord» (the Eucharist bread, or «You are the oracle of God»), not quoted.
- P6.5 · Spanish · CONFIRMED · faithful. Minor: «la Iglesia» (capital) for the print's «the church» (lower case); «la iglesia» would mirror the print.

### P-W7 · Council of Chalcedon, canon 28

- P7.1 · Quote · CONFIRMED apart from P7.2 · NPNF2 14 p. 287, page image: «For the Fathers rightly granted privileges to the throne of old Rome, because it was the royal city. And the One Hundred and Fifty most religious Bishops, actuated by the same consideration, gave equal privileges (ἴσα πρεσβεῖα) to the most holy throne of New Rome, justly judging that the city which is honoured with the Sovereignty and the Senate, and enjoys equal privileges with the old imperial Rome, should in ecclesiastical matters also be magnified as she is, and rank next after her; so that …». «Rome» (OCR «Koine», «Eome») and «equal privileges» confirmed on the image. The file's close without a full stop is right (a semicolon follows in print).
- P7.2 · The Greek parenthesis dropped inside the quotation marks without a mark · WRONG (style, disclosed only in the note) · the quote reads «gave equal privileges to the most holy throne» while the print has «gave equal privileges (ἴσα πρεσβεῖα) to the most holy throne». Correct: «gave equal privileges [Greek: ἴσα πρεσβεῖα] to the most holy throne» or «gave equal privileges […] to the most holy throne». Tag: unchanged.
- P7.3 · Date «THE COUNCIL OF CHALCEDON. A.D. 451» · CONFIRMED · the section title page prints «THE FOURTH ECUMENICAL COUNCIL. THE COUNCIL OF CHALCEDON. A.D. 451.» and the running head of p. 287 reads «CHALCEDON. A.D. 451».
- P7.4 · «editor's notes on the canon (not quoted) include a note that it «was expressly renewed by canon xxxvi. of the Council of Trullo»» · WRONG (attribution) · printed words: «It is certain that this canon was expressly renewed by canon xxxvi. of the Council of Trullo and from that time has been numbered by the Greeks among the canons …» under the name VAN ESPEN (the notes are anthologised by Percival). Fix: «a note by Van Espen printed in the edition».
- P7.5 · Edition, locator, page · CONFIRMED · Canon XXVIII, p. 287 (image); `orthodox.md` PQ-4 also gives Percival p. 287.
- P7.6 · Spanish · WRONG (word changed) · «porque era la ciudad imperial» renders «because it was the royal city»; the English keeps «royal» and uses «imperial» separately in «old imperial Rome». Correct: «porque era la ciudad real». The rest is faithful; «piadosísimos» for «most religious» is acceptable.

### P-W8 · Gregory the Great, Epistle XX, Book V

- P8.1 · Quote 1 · CONFIRMED · NPNF2 12, p. 170 area, «EPISTLE XX. To Mauricius Augustus.»: «For to all who know the Gospel it is apparent that by the Lord's voice the care of the whole Church was committed to the holy Apostle and Prince of all the Apostles, Peter.» The print continues «For to him it is said, Peter, lovest thou Me?».
- P8.2 · Quote 2 · CONFIRMED · same letter: «Lo, he received the keys of the heavenly kingdom, and power to bind and loose is given him, the care and principality of the whole Church is committed to him, and yet he is not called the universal apostle; while the most holy man, my fellow-priest John, attempts to be called universal bishop.» OCR slips «heaven! v kingdom» (listed) and a stray «he . is» (not listed, harmless). The text between the two quotes (Matth. xvi. 18, the other Petrine verses) is not marked as omitted; they are two separate quotes, so acceptable.
- P8.3 · «the edition prints no year at the letter in the pages read» · WRONG (incomplete) · the letter itself carries no closing date line, but the volume does date the book and the group: the Prolegomena print «Book V. Indiction XIII. (a.d. 594-5)» and, in the summary of «this year», list «A long one to the Emperor Maurice (Ep. 20), earnestly desiring him to disallow the title»; Epistle XVIII is «dated Kal. Jan. Indict. 13 (i.e. Jany a.d 595)» and ends «Given in the Kalends of January; Indiction 13.» in the text. The letters between XVIII and XX print no date. Correct: date «Book V, Indiction XIII (A.D. 594–5), the edition's Prolegomena; Ep. XVIII is dated January 595; Ep. XX has no date line of its own» with tag `[verified: NPNF2 12 Prolegomena (Book V), OCR: year range of the book, not the letter's own date]`. «595» as a single year is still not printed for Ep. XX.
- P8.4 · Edition and locator · CONFIRMED · Epistle XX, Book V (book heading «BOOK V.»; the volume prints no «Registrum» title, it uses «Epistles of St. Gregory the Great»; «Registrum Epistolarum» is the Prolegomena's name for the collection).
- P8.5 · Spanish · CONFIRMED · faithful.
- P8.6 · Page number of the Prolegomena Book V summary · UNCONFIRMABLE · the OCR running head is garbled («PROLEGOMENA. ^.^jjj»); give the heading, not a page.

### «Rows … settled» paragraph

- PR.1 · Rows paragraph (Nicaea c. 6 English read; Chalcedon c. 28 line added; Epistle XX read, XVIII not, year unverified) · CONFIRMED apart from P8.3 (the year range is printed); the Chalcedon line and the Nicaea line are as in P5 and P7. The table rows still read `[memory]` («Nicaea I, canon 6 … `[memory]`»).

## 3. sola-scriptura/shared.md

### Header

- SH.1 · «The three texts are cited by Catholic, Orthodox and Protestant writers alike» · WRONG (unsupported factual claim) · no source is given. The repo shows: Vincent of Lérins quoted inside the Catholic dossier (Dei Filius ch. 4, `catholic.md` l. 209) and in the neutral writers file; Cyril of Jerusalem and Athanasius named in `orthodox.md` l. 196 as «witnesses cited by Philaret»; nothing in the sola-scriptura dossiers shows a Protestant citing these three passages. Fix: delete the clause or replace by «each is quoted here for what it says»; tag `[unverified]` if kept.
- SH.2 · Editions: vol. IV (NY CLC; Oxford and London Parker; 1892; Athanasius), vol. VII (1894; Cyril tr. Gifford), vol. XI (1894; Sulpitius Severus, Vincent of Lérins, John Cassian) · CONFIRMED · title pages and contents.

### SS-W5 · Athanasius, Against the Heathen, § 1

- SS5.1 · Quote · CONFIRMED · NPNF2 4, «AGAINST THE HEATHEN», § 1: «For although the sacred and inspired Scriptures are sufficient to declare the truth, — while there are other works of our blessed teachers compiled for this purpose, if he meet with which a man will gain some knowledge of the interpretation of the Scriptures, and be able to learn what he wishes to know, — still, as we have not at present in our hands the compositions of our teachers, we must communicate in writing to you what we learned from them […]». The OCR number «3.» precedes «For although» (sentences of § 1 are numbered 1–7 in the text); the print continues «— the faith, namely, of Christ the Saviour; lest any should hold cheap the doctrine taught among us». The footnote after «sufficient» (the file says only «footnote marks») is footnote 2: «Constantly insisted on by Athan. Cf. de Incarn. 5, and note on de Decr. 32», and footnote 3 after «teachers»: «De Incarn. 56. a; he may also be referring to works from the Alex. school, such as Orig. de Princ.»; neither is quoted.
- SS5.2 · Date `[unverified]` («the edition's Prolegomena dating of the work was not located») · WRONG (stale: the dating is printed) · the Prolegomena, Chapter III § 1, list «(1) 318: *Two books 'contra Gentes,' viz. c. Gent. and de Incarn.», the chronological table prints «318. Probable date of the contra Gentes, his first book», and the Introduction to the treatise says «How long before the limit thus fixed the work was composed it is impossible to say with certainty … Hence the date usually adopted, viz. in or shortly before 318 [OCR «b.c», read A.D.], the twenty-first year (probably) of Athanasius' age». Correct wording: «c. 318, the edition's «probable date» (usually adopted: in or shortly before 318; not certain)». Tag: `[verified: NPNF2 4 Prolegomena ch. III § 1 and Introduction to Contra Gentes, OCR]`. The table row in the same file («Athanasius … c. 335 … CG 1») contradicts this and should say 318 for Contra Gentes (335 is not in the edition for that work).
- SS5.2b · The year in the Introduction is OCR «318 b.c» · UNCONFIRMABLE on the image · the OCR glyph «b.c» is certainly a slip for «a.d.» in context (the work is Athanasius's), but the page image was not read. The Prolegomena list and table print 318 without that slip.
- SS5.3 · Edition and locator · CONFIRMED.
- SS5.4 · Spanish · WRONG (minor, ambiguity) · «con las cuales quien se encuentre ganará algún conocimiento» renders «if he meet with which a man will gain some knowledge». «Quien se encuentre con las cuales» can read as «whoever finds himself with which»; «a man … if he meet with» means comes across them. Correct: «y con las cuales, si alguien se topa con ellas, ganará algún conocimiento de la interpretación de las Escrituras». «y además hay otras obras» for «while there are other works» is a mild addition of «además».
- SS5.5 · Neutrality note («both halves are quoted») · CONFIRMED.

### SS-W6 · Cyril of Jerusalem, Lecture IV, § 17

- SS6.1 · Quote · CONFIRMED · NPNF2 7, Lecture IV, § 17: «For concerning the divine and holy mysteries of the Faith, not even a casual statement must be delivered without the Holy Scriptures; nor must we be drawn aside by mere plausibility and artifices of speech. Even to me, who tell thee these things, give not absolute credence, unless thou receive the proof of the things which I announce from the Divine Scriptures.» The print continues «For this salvation which we believe depends not on ingenious reasoning, but on demonstration of the Holy Scriptures.» The sentences before it read «Have thou ever in thy mind this seal, which for the present has been lightly touched in my discourse, by way of summary, but shall be stated, should the Lord permit, to the best of my power with the proof from the Scriptures.», so «the mysteries of the Faith» there means the summary just given; the file's closing line mentions the summary as not quoted.
- SS6.2 · Date «Lent 348 (the edition's Introduction: the Lectures «must have been» those of 348)» · WRONG (stronger than what was read) · same as B5.2: the sentence is conditional (two «if» clauses, Introduction p. xliv). Use the same correction.
- SS6.3 · Edition, locator, lecture title · CONFIRMED · contents and heading: «Lecture IV. On the Ten points of Doctrine : Colossians ii. 8» (print has lower-case «points»; the file's «Points» is a case change inside the title; harmless, drop the «to check»).
- SS6.4 · Spanish · CONFIRMED · faithful.

### SS-W7 · Vincent of Lérins, Commonitory, ch. II

- SS7.1 · Quote · CONFIRMED · NPNF2 11, ch. II [5.]: «But here some one perhaps will ask. Since the canon of Scripture is complete, and sufficient of itself for everything, and more than sufficient, what need is there to join with it the authority of the Church's interpretation? For this reason, — because, owing to the depth of Holy Scripture, all do not accept it in one and the same sense […] Therefore, it is very necessary, on account of so great intricacies of such various error, that the rule for the right understanding of the prophets and apostles should be framed in accordance with the standard of Ecclesiastical and Catholic interpretation.» OCR slip «gseat» (listed). The final full stop is right (the next print is «[6.] Moreover …»).
- SS7.2 · Description of what the `[…]` replaces · WRONG (incomplete) · the file says it replaces «the list of heretics … and a footnote». It also replaces the first and key part: «but one understands its words in one way, another in another; so that it seems to be capable of as many interpretations as there are interpreters. For Novatian expounds it one way, Sabellius another, Donatus another, Arius, Eunomius, Macedonius, another, Photinus, Apollinaris, Priscillian, another, Iovinian, Pelagius, Celestius, another, lastly, Nestorius another.» The footnote on the page is Tillemont's French note on the author's style, unrelated. Correct: list the omitted sentence as above.
- SS7.3 · Locator «ch. II (§§ 4–5 of the edition's numbering)» · WRONG · both segments are in the paragraph marked «[5.]»; «[4.]» is the paragraph before it (the two ways: «the authority of the Divine Law, and then, by the Tradition of the Catholic Church»), not quoted; the edition prints bracketed numbers [4.], [5.], [6.], not «§». Correct: «ch. II, [5.]».
- SS7.4 · Date words «three years previously to the time at which he was writing» and «This gives the date of the Commonitory 434» · CONFIRMED as words (printed «as having been held some three years previously to the time at which he was writing «ante triennium ferme.» This gives the date of the Commonitory 434.»).
- SS7.5 · «the edition's Prolegomena» and tag `[verified: NPNF2 11 Prolegomena, OCR]` · WRONG (label) · the page is headed «INTRODUCTION.» in the scan for the Commonitory. Fix: «Introduction»; the date is the editor's inference from «ante triennium ferme» (Ephesus, 431), as the print says.
- SS7.6 · Spanish · CONFIRMED · faithful. Minor: «tan variados errores» for «such various error» (singular in print; «tan variado error»).

### «Rows … settled» paragraph

- SR.1 · «The three texts above are now read in the dated edition (they were `[memory]`)» · CONFIRMED for the quotes; the table rows (Cyril «4.17» `[memory]`, Athanasius `[memory]`, «c. 335») still carry the old status and the 335 date (see SS5.2). Basil and others not read: noted by the file.

## Wrong items (corrections to apply)

Baptism
1. BE.2 · Edition line: Schaff alone for NPNF1 4.
2. B5.2 · Cyril date: Lent 348 is a conditional editorial inference (Introduction p. xliv); give both «if» clauses.
3. B5.5 · Drop «one of the fullest early lists».
4. B6.1 · Nicaea c. 19: end at «Catholic Church;» or extend to «… they ought to be deposed.»; same in the Spanish.
5. B8.4 · Augustine chap. 23 does not «end» at «… baptism of infants»; give the full continuation.
6. B9.3 · Carthage: the note prints «This is Canon ij. of Carthage, A.D. 418 [Greek Canon 112].»; the row «Carthage 418, can. 2» is settled for the English text.
7. B9.4 · «as the Catholic Church …» is «than the Catholic Church everywhere diffused has always understood it».
8. BR.1 and BR.2 · Constantinople I note: it is Hefele (II, p. 368) reporting Beveridge's conjecture; the row is not «settled»; the creed clause is in the Council's creed (p. 163) too (counted as one item group: 2 items).

Papacy
9. P5.4 · Ancient Epitome is not the editor's own.
10. P7.2 · Mark the Greek parenthesis dropped in the quote.
11. P7.4 · The Trullo note is Van Espen's.
12. P7.6 · Spanish «royal city» not «ciudad imperial».
13. P8.3 · Gregory date: the edition prints Book V «Indiction XIII (a.d. 594-5)» and dates Ep. XVIII to January 595; Ep. XX has no line of its own.

Sola Scriptura
14. SH.1 · Remove or support «cited by Catholic, Orthodox and Protestant writers alike».
15. SS5.2 · Athanasius date is printed: c. 318 (probable); fix the table row «c. 335».
16. SS5.4 · Spanish «quien se encuentre con las cuales».
17. SS6.2 · Cyril date: same as item 2.
18. SS7.2 · The `[…]` also hides «but one understands its words in one way … lastly, Nestorius another.»
19. SS7.3 · Locator is ch. II [5.], not «§§ 4–5».
20. SS7.5 · «Prolegomena» is the «Introduction»; the date is an inference from «ante triennium ferme».

## Unconfirmable

- B7.3 · whether the oration was preached on 6 January or the next day: the same volume prints both («Jan. 6» in the Oration 40 heading; Epiphany, with Oration 40 «the next day», in the Oration 39 Introduction).
- P8.6 · page number of the Prolegomena summary of Book V (garbled OCR head).
- SS5.2b · the printed reading of «318» in the Introduction (OCR «b.c»); the Prolegomena list and table are clean.
- Not settled by any source here: the Gregory the Great date as a single year («595» is not printed for Ep. XX).

## Outside the three subsections

- The rows of the three «Full list of early texts» tables are unchanged by session A (statuses `[memory]` or «text not read tonight» for Nicaea I, Cyril, Athanasius, Augustine, Carthage 418, Constantinople I); update the table or reword the «settled» paragraphs.
- `baptism/shared.md` table: row «Oration 40 … 381 (`fingerprint-dates.md`, NPNF note)» is consistent with the heading; row «*De sacramentis*; *De mysteriis* … c. 387–391» is not supported by the edition (see BR.3).
- `sola-scriptura/shared.md` table: row «Athanasius … c. 335» contradicts the edition's 318 (SS5.2).
