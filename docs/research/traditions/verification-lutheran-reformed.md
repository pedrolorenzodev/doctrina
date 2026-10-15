# Verification: Lutheran and Reformed maps

**Progress:** DONE 2026-10-14. Lutheran log 1-24 and Reformed log 1-19 checked; sampling section at the end (search quota ran out; unchecked items listed in S-L6 and S-R10). Wrong items summarised below.
Legend: CONFIRMED / WRONG / UNCONFIRMABLE. Section refs are to `lutheran.md` (L) and `reformed.md` (R). Method: pages fetched with curl and grepped (not summarised by a model), so quoted strings are exact matches.

## Lutheran

### L-log 1 (L §2.1) Epitome Rule and Norm 1, 2, 7, 8 English wording
CONFIRMED. All four quoted passages match https://bookofconcord.org/epitome/rule-and-norm/ word for word ("sole rule and standard ...", "equal to the Holy Scriptures ... witnesses", "only judge, rule, and standard ... only test-stone", "not judges ... only a testimony and declaration of the faith"). Ep RN 3 "symbol of our time" and 5 "Bible of the laity" also match.

### L-log 4 (L §2.1) Solid Declaration Rule and Norm 2, 5, 9, 10 wording
CONFIRMED. https://bookofconcord.org/solid-declaration/rule-and-norm/: ¶2 "private writings ... composed, approved, and received in the name of the churches" and "will not make or receive a separate or new confession"; ¶3 Scriptures "only true standard"; ¶5 AC "not because it was composed by our theologians, but because it has been taken from God's Word"; ¶9 Luther's "full explanations ... Latin preface"; ¶10 "useful expositions" and "unanimously accepted, definite, common form of doctrine ... all other writings should be judged". Six-step numbering (¶3 first ... ¶8 sixth) matches.

### L-log 5 (L §4 Tier 2 List A) Luther references in SD
CONFIRMED with one improvement. SD VII.33 (last Confession), VII.41 (Luther "most distinguished teacher ... can and should be derived from no other source"), III.67 (Galatians commentary), II.44 (Luther on free will), VIII.86 (That These Words Still Stand Firm + Large Confession, "well-grounded explanations of the majesty of Christ") all match the cited paragraphs.
IMPROVEMENT (list A row "A late writing on Christ's human nature ... SD VIII.85, not identified"): SD VIII.85 (https://bookofconcord.org/solid-declaration/person-of-christ/) identifies it: "the little book concerning the Last Words of David, which Dr. Luther wrote shortly before his death" (1543; "Jesus ... is 1543 years old this year"). So the work is *Von den letzten Worten Davids* (1543). The WA location is [memory] only; not checked.

### L-log 2 (L §2.1) Triglot Latin/German wording, line numbers
CONFIRMED. Archive.org items `ConcordiaTriglotta_Latin` / `_German` (file names are `CONCORDIA TRIGLOTTA-Latin_djvu.txt` and `...-German_djvu.txt`; the `ConcordiaTriglotta_Latin_djvu.txt` style name in the log 404s, use the real file name). Latin l.13246 "unicam regulam et normam", l.13253 "testium loco", l.13287 "iudex, norma et regula ... ad Lydium lapidem". German l.14079 "einige Regel und Richtschnur", l.14115 "einigen Probierstein", l.14119 "allein Zeugnis und Erklärung des Glaubens". Line numbers in the log are right to within the stated ranges.

### L-log 3 (L §2.2) "normans"/"normata" absent from the BoC
CONFIRMED. grep -i "normans|normata" in the Triglot Latin (19,152 lines) and German (20,344 lines) e-texts: 0 hits each.

### L-log 20 (L §4 Canon) Ap XXI.9 2 Macc 15:14 "somnium"
CONFIRMED. Triglot Latin l.5422-5423: "testimonium nullum de mortuis orantibus exstat in Scripturis, praeter illud somnium sumptum ex libro Machabaeorum posteriore, 2 Macc. 15, 14."

### L-log 21 (L §8 Images/Mary) SA I.4 "semper virgine" only in Latin
CONFIRMED. Latin l.7142 "ex Maria, pura, sancta sempervirgine nasceretur" (written as one word *sempervirgine*); German l.8514 "von der reinen, heiligen Jungfrau Maria geboren" has no "ever-virgin". Note for the doc: the Latin spelling is the single word `sempervirgine`, so a literal search for "semper virgine" will miss it.

### L-log 6 (L §1.2, §4 Tier 4) LCMS Handbook 2023, Const. art. II, VI; Bylaw 1.6.2(b)(7)
CONFIRMED. https://idwlcms.org/gotodownloadfile.php?file=1557 (a PDF, ~812 KB text): Art. II "accepts without reservation: 1. The Scriptures ... only rule and norm of faith and of practice; 2. All the Symbolical Books ... the three Ecumenical Creeds ..., the Unaltered Augsburg Confession, the Apology ..., the Smalcald Articles, the Large Catechism, the Small Catechism, and the Formula of Concord" (Treatise not named: correct). Art. VI "1. Acceptance of the confessional basis of Article II"; "4. Exclusive use of doctrinally pure agenda, hymnbooks, and catechisms". Bylaw 1.6.2(b)(7): statements "shall be 'accepted and used as helpful expositions and explanations' (FC SD Rule and Norm 10)". Not checked: the page numbers (pp. 11-13, 34-35); the edition year "2023" is the doc's claim, not re-checked.

### L-log 7 (L §1.2) ELCA CBCR ch. 2.03-2.06
CONFIRMED (Wayback copy, ~715 KB text). 2.03 "inspired Word of God and the authoritative source and norm of its proclamation, faith, and life"; 2.04 "true declarations of the faith of this church"; 2.05 "accepts the Unaltered Augsburg Confession as a true witness to the Gospel, acknowledging as one with it in faith and doctrine all churches that likewise accept the teachings of the Unaltered Augsburg Confession"; 2.06 "the other confessional writings in the Book of Concord, namely, the Apology ..., the Smalcald Articles and the Treatise, the Small Catechism, the Large Catechism, and the Formula of Concord, as further valid interpretations of the faith of the Church". Page "p. 19" not checked.

### L-log 8 (L §1.1) LWF Constitution Art. II, III.1, V.1.a
CONFIRMED. https://lutheranworld.org/sites/default/files/2024-02/lwf_constitution_en.pdf: II (doctrinal basis) text matches verbatim; III.1 "a communion of churches which confess the triune God, agree in the proclamation of the Word of God and are united in pulpit and altar fellowship" (the doc's ellipsis is fine); V.1.a "consists of churches which accept the doctrinal basis set forth in Article II". "as amended 2017" not re-checked. Also https://lutheranworld.org/who-we-are (fetched): "153 member churches, including two associate member churches ... 99 countries ... over 78 million Christians": CONFIRMED.

### L-log 9 (L §1.1) CELC Art. II.2 "not in so far as, but because"
CONFIRMED via WebFetch (curl is blocked by a Cloudflare/ModSecurity page): https://celc.info/information/constitution/ Art. II Section 2 "not in so far as, but because they are a correct exposition of the pure doctrine of the Word of God." The opening words ("accepts the Confessions of the Evangelical Lutheran Church contained in the Book of Concord of 1580") were not displayed in the fetch excerpt; the fetch summarised them as "the Lutheran confessions of 1580".

### L-log 10 (L §1.1) ILC basis wording
PARTIALLY CONFIRMED. https://ilcouncil.org/about/ via WebFetch: "on the basis of an unconditional commitment to the Holy Scriptures as the inspired and infallible Word of God" is verbatim; the remainder ("and to the Lutheran Confessions contained in the Book of Concord as the true and faithful exposition of the Word of God") could not be reproduced by the fetch tool (quote-length limit; it confirmed only that the same sentence commits to the Confessions in the Book of Concord). The second half is UNCONFIRMABLE verbatim in this run. The "~59 member listings" count was not checked.

### L-log 11 (L §1.2) IELU Estatuto Título 2 Art. 2
CONFIRMED. https://ielu.org/quienes-somos/ text matches (Escrituras "única regla infalible y práctica con las cuales todas las doctrinas y expositores habrán de ser juzgados"; AC "correcta manifestación de fe"; creeds "importantes testimonios derivados de las Sagradas Escrituras"; Apology, SA, catechisms, FC "como en armonía con la única, pura e inmutable fe escritural"). The page prints the four points in a scrambled order (1, 3, 2, 4); the doc's order is by content, fine. The words "Título 2, Art. 2" were not visible in the extracted text (not re-checked).

### L-log 12 (L §1.2) IERP basis and ~20,000 members
CONFIRMED. https://ierp.org.ar/quienes-somos/: creeds (Apostólico, Niceno, Atanasiano), "especial el Catecismo Menor de Martín Lutero, el Catecismo de Heidelberg y la Confesión de Augsburgo", Barmen and Leuenberg all present. Size: "alrededor de 20 mil miembros ... 45 congregaciones" (doc says ~20,000 and 45: matches).
NOTE: the log line says "Basis: SC, Heidelberg, AC, Barmen, Leuenberg" but omits the three ancient creeds, which the page lists first; the section text includes them, so no error in §1.2.

### L-log 13 (L §1.2) IELA self-description; ILC membership sentence 4 Jul 2019
CONFIRMED on the two checked points. https://www.iela.org.ar/quienes-somos/: "Reconoce a la Biblia como norma de fe, vida y enseñanza", "250 congregaciones en 16 provincias". ILC tag page (WebFetch): post "German Lutherans declare fellowship with six new church bodies", dated 4 July 2019: "SELK, the AALC, IELA, ELMDF, ILSN, DELSiN, and the Mission Province are all members of the International Lutheran Council".
UNCONFIRMABLE: "LCMS partner since 1905" (L §1.2 IELA row): the string "1905" is not on the IELA quienes-somos page; no source cited for it in the log; not searched further.

### L-log 14 (L §1.2) Church of Sweden Kyrkoordning 1 kap. 1 §
CONFIRMED. https://www.svenskakyrkan.se/filer/KO%201%20jan%202019.pdf (ed. 1 Jan 2019): "är sammanfattad i den apostoliska, den nicenska och den athanasianska trosbekännelsen samt i den oförändrade augsburgska bekännelsen av år 1530, är bejakad och erkänd i Uppsala mötes beslut år 1593, är förklarad och kommenterad i Konkordieboken samt i andra av Svenska kyrkan bejakade dokument." Chapter 1 is titled "Svenska kyrkans tro, bekännelse och lära".

### L-log 15 (L §1.2) Church of Norway Kirkeordning § 1
CONFIRMED on wording, WRONG on one date. A Lovdata printout (18.10.2023) hosted at sandefjord.kirken.no (the PDF named in the doc) gives: "§ 1. Den norske kirkes læregrunnlag. Den norske kirke er en evangelisk-luthersk kirke som bekjenner troen på den treenige Gud ... uttrykt i den apostoliske, den nikenske og den athanasianske trosbekjennelse samt Den uforandrede augsburgske bekjennelse fra 1530 og Luthers lille katekisme." The tag can be upgraded from [snippet] to verified (on a hosted Lovdata copy, not lovdata.no itself).
WRONG: L §1.2 Norway row says "(in force 1 Jan 2024)". The same printout says chapter 1 was "Tilføyd ved forskrift 9 okt 2020 nr. 2797 (i kraft 1 jan 2021)"; the Kirkeordning is FOR-2019-03-30-2307 (adopted by Kirkemøtet 30 March 2019). I found nothing that puts § 1 in force on 1 Jan 2024. Correct value: in force 1 Jan 2021 (chapter 1 inserted by regulation of 9 Oct 2020).

### L-log 18 (L §4 Tier 5) JDDJ §41 wording and date
CONFIRMED. https://lutheranworld.org/sites/default/files/2022-02/original_jddj_english.pdf: §41 "Thus the doctrinal condemnations of the 16th century, in so far as they relate to the doctrine of justification, appear in a new light: The teaching of the Lutheran churches presented in this Declaration does not fall under the condemnations from the Council of Trent. The condemnations in the Lutheran Confessions do not apply to the teaching of the Roman Catholic Church presented in this Declaration." Date: "solemn confirmation of this Joint Declaration on 31 October 1999 in Augsburg".

### L-log 19 (L §4 Tier 4) LCMS CTCR library statements 1851 / 1932 / 1973
CONFIRMED. https://resources.lcms.org/reading-study/ctcr-library-lcms-doctrinal-statements/: Walther's Theses on the Ministry "approved by the Synod in 1851"; Brief Statement "Adopted by the LCMS in 1932"; 1973 convention resolved A Statement of Scriptural and Confessional Principles "to be Scriptural and in accord with the Lutheran Confessions, and therefore a formulation which derives its authority from the Word of God ...".

### L-log (WELS, L §1.2; not numbered in the log)
CONFIRMED. https://wels.net/about-wels/what-we-believe/this-we-believe/: "Luther and others authored the six Lutheran confessions" and WELS Lutherans "still subscribe" (fetch summary; the page does not list the six by name).

### L-log 16 (L §2, §4, §9) Bente (PG #26909) quotes
CONFIRMED (full PG text, https://www.gutenberg.org/cache/epub/26909/pg26909.txt, grepped). Exact strings found: "Self-evidently, only such are symbols of particular churches as have been approved and adopted by them" (Intro; the log calls it §1, section number not checked); "Like the Smalcald Articles, Luther's Catechisms achieved their symbolical authority by themselves, without resolutions of princes estates, and theologians. The Thorough Declaration ... is merely chronicling actual facts when it adopts the Catechisms" (§115 area); "the Tract is not enumerated as a separate confessional writing, but is treated as an appendix to the Smalcald Articles" (§79); "the Variata was used by Lutherans without any public opposition and recognized as the Augsburg Confession" (§35 "Variata Disowned by Lutheran Church"); Wittenberg Concord "the princes and estates nevertheless passed no resolution requiring its subscription" (§78 area); Apology "a private work" and "received official recognition" (Schweinfurt 1532, Smalcald 1537; §60); Tract signed "upon order of the princes"; Visitation Articles "till 1836 ... Self-evidently they are not an integral part of the Book of Concord" (§217); "In Sweden the Formula was adopted 1593 by the Council of Upsala" (§284); "about 8,000" signatures; Preface "not to depart even a finger's breadth ... vel a rebus ipsis vel a phrasibus"; FC "neither in this nor in any other writing, to recede in the least from that oft-cited Confession, nor to propose another or new confession"; Office of the Keys "Not being formulated by Luther, however, they were not received into the Book of Concord" (§113); Christian Questions first published 1549, authorship claimed for Luther "very early" (§113); Catalog of Testimonies "a private work of Andreae and Chemnitz, and not a part of the confession". The Triglot German e-text has no "Christliche Frage" text (absent, as claimed) but does contain Morgensegen/Benedicite (l.10457, 10493), consistent with §4.
Bente's list of territories that did not adopt the FC (L §9 item 7) CONFIRMED in §284: "not adopted in Brunswick, Wolfenbuettel, Holstein, Hesse, Pomerania (where however, the Formula was received later), Anhalt, the Palatinate, ... Bremen, Danzig, Magdeburg, Nuernberg, Weissenburg, Windsheim, Frankfort-on-the-Main, Worms, Speyer, Strassburg"; the Denmark part follows in the same sentence ("In Sweden and De...") and was not read to the end.

### L-log 17 (L §4 numbering concordance) Apology numbering
CONFIRMED. Trinity chart (https://trinityh.org/.../Book-of-Concord-Reading-2019-2020-Chart-2-pages-1-2.pdf) shows Tappert/Kolb continuous Ap IV (1-400) while the Triglotta restarts "(III.)" at 156.1 after IV "...142.75-155.121", and "(VI.)280.1" after XII "...266.57-281.97". Triglot Latin e-text: l.2350-2362 ends IV at ¶121 and "(Art. III) De Dilectione et Impletione Legis. 1]" begins; l.4497 "(Art. VI.) De Confessione et Satisfactione." Note: the log's second line number, l.2858, is Ap IV ¶123 (Latin continues numbering there), not the Ap VI restart (that is l.4497); the claim itself is right, the l.2858 pointer is off. https://bookofconcord.org/defense/of-ecclesiastical-order/ begins "Article XIV ... 24 The Fourteenth Article": ¶24 start CONFIRMED.

### L-log 22 (L §4 Tier 3) Catalog of Testimonies page
CONFIRMED. https://bookofconcord.org/testimonies/: "Though not a formal part of the Lutheran Confessions, per se, the Catalog of Testimonies was widely used ..."; byline "by Jakob Andreae (1528-1590) and Martin Chemnitz (1522-1586)"; ¶181 "Christian reader, these testimonies ... have been here set forth, not with this meaning that our Christian faith is founded upon the authority of men. For the true saving faith is to be founded upon no church-teachers, old or new, but only and alone upon God's Word".

### L-log 23 (L §7) archive.org ids and dates
MOSTLY CONFIRMED (all 14 ids exist; metadata via https://archive.org/metadata/<id>):
- Chemnitz_Examen_1573 (1573), Quenstedt and TheologiaDidactico (1685), bub_gb_kWqYTQ-EqHAC (Gerhard Loci, 1657), locitheologicit03gerhgoog (1863), doctrinaltheolog00schmuoft (c1899), conservativerefo0000unse (1875 printing), christlichedogma0002piep and ...0004piep (1917), Christliche_Dogmatik_Dritter_Band (1920), Walther_ProperDisctinctionLawGospel1929 (1929): CONFIRMED.
- WRONG: `bub_gb_Vjo6XkW2eiEC` is labelled "(1566 ed.)" in L §7; archive metadata gives date 1573 and title "Examen decretorum Concilii Tridentini ... Tertia pars" (the third part). Not a 1566 edition per the metadata.
- WRONG (probably): `properdistinctio0000unse` is labelled "1897 German" in L §7; archive metadata: title "the proper distinction between law and gospel", language "eng", date 1897. It looks like an English edition, not the German original; open the scan to settle.
- Minor: `doctrinaltheolog0000henr` date is "1875-1889" in metadata (doc says 1875). The Krauth item is the 1875 printing of the 1871 work (doc says so).

### L-log 24 (L §4 Tier 2 List A) WA locations
See the sampling section below.

### L-log 24 (L §4 Tier 2 List A, WA column, all [memory])
Result: coarse volume numbers CONFIRMED, page ranges mostly UNCONFIRMABLE, two DISCREPANT.
- Volume-level check (Wikipedia "Weimar edition", https://en.wikipedia.org/wiki/Weimar_edition_of_Martin_Luther%27s_works, secondary): WA 18 = 1525 (De servo arbitrio year ok), WA 23 = 1527, WA 26 = 1528, WA 37 = 1533/34, WA 39 = disputations 1535-45, WA 40 = Galatians lectures, WA 42-44 = Genesis lectures, WA 50 = 1536/39 (Councils 1539 ok), WA 54 = 1543/46 (Short Confession 1544, Preface 1545 ok), DB 7 = NT epistles/Revelation (Romans preface ok), WA 22 = postil. All consistent with the doc's volume numbers.
- DISCREPANT: *Vom Abendmahl Christi, Bekenntnis* — doc "WA 26:261-509"; Gruber (https://gruber.lstc.edu/luthers_works/1528.php, a Luther's Works bibliography) gives "WA 26.241-509"; Wikipedia gives 261-509. Sources conflict on the start page; do not cite 261 without checking the WA volume.
- DISCREPANT: *Das diese Wort Christi ... noch fest stehen* — doc "WA 23:64-283"; Gruber (https://gruber.lstc.edu/luthers_works/1527.php) gives "WA 23.38-320". (64-283 may be the text without introductions; not established.) Also LW 37:3-150 per Gruber.
- UNCONFIRMABLE (searched, no page-range source found): Konziliis WA 50:509-653; Kurzes Bekenntnis WA 54:141-167; De servo arbitrio WA 18:600-787; Galatians WA 40 I-II; Torgau sermon WA 37:62-72; Postil WA 22, 21; Antinomian writings WA 39 I / WA 50:461-477; Latin preface WA 54:179-187; Romans preface WA DB 7:2-27.
- Not in the doc but useful: the unidentified "late writing" (SD VIII.85) is the Last Words of David (1543), see L-log 5.

## Reformed

### R-log 1 (R §2, §3, §4) PCA BCO 2026
CONFIRMED on four points, WRONG on one [memory] item. https://www.pcaac.org/wp-content/uploads/2026/07/BCO_2026.pdf: Preface III "The Constitution of the Presbyterian Church in America, which is subject to and subordinate to the Scriptures of the Old and New Testaments, the inerrant Word of God ..." and 26-1 same wording: CONFIRMED. 21-4 f-g: "the difference is neither hostile to the system nor strikes at the vitals of religion": CONFIRMED (the text appears twice, applicant and candidate versions). 26-3: three-fourths of GA present and voting, three-fourths of presbyteries, then a subsequent GA by three-fourths: CONFIRMED. Part III prefatory: "The Directory for Worship is an approved guide ... it does not have the force of law and is not to be considered obligatory in all its parts. BCO 56, 57 and 58 have been given full constitutional authority": CONFIRMED.
WRONG (R §2 item 6, [memory]): the phrase "ministerial and declarative" is NOT in PCA BCO 3-2 (that paragraph is about the powers of order and of jurisdiction). It appears in the PCA's Preliminary Principles (principle 7: "All church power ... is only ministerial and declarative since the Holy Scriptures are the only rule of faith and practice") and in BCO 11-2 ("The jurisdiction of Church courts is only ministerial and declarative"). Correct locators: Preliminary Principles 7, BCO 11-2.

### R-log 2 (R §4) WCF Preface PDF on pcaac.org
CONFIRMED. https://www.pcaac.org/wp-content/uploads/2019/11/WCFPreface.pdf: "© copyright 2005, 2007 by The Orthodox Presbyterian Church"; "originally prepared and published by the Committee on Christian Education of the Orthodox Presbyterian Church"; text lists the 1788 revisions (PCUSA formed 1788, revised 20.4, 23.3...), 1887 (final sentence of 24.4 removed), 1903 (16.7, 22.3 rewritten, Declaratory Statement) and OPC 1936 decisions (First GA June 1936; Second GA Nov 1936 adopted the pre-1903 form with two exceptions). Also: "The Scripture proof texts ... are not a part of the constitution itself" (R §2 item 8): CONFIRMED, but note the sentence is in this edition's preface, not in the OPC Form of Government.

### R-log 3 (R §2, §3) OPC Form of Government
CONFIRMED. https://opc.org/BCO/FG.html: Ch. XXXII.1 "The constitution of the Orthodox Presbyterian Church, subordinate to the Scriptures of the Old and New Testaments, consists of its standards of doctrine, government, discipline, and worship, namely, its Confession of Faith, Larger and Shorter Catechisms, Form of Government, Book of Discipline, and Directory for the Public Worship of God." XV.9: actions "amending or adding to the subordinate standards shall not be binding unless they have been approved by the general assembly and presbyteries in the manner provided ... for the amendment of the constitution". Vow text "as containing the system of doctrine taught in the Holy Scriptures" and "only infallible rule of faith and practice": present (Ch. XXIII). (The "XXIII.8" paragraph number was not isolated.)

### R-log 4 (R §2, §3, §4) PC(USA) Book of Order 2025-27
CONFIRMED (copy at pnne.org, "Book of Order 2025/2027", © 2025 Interim Unified Agency). Preface: Book of Confessions = Nicene Creed, Apostles' Creed, Scots Confession, Heidelberg Catechism, Second Helvetic Confession, Westminster Confession, Shorter Catechism, Larger Catechism, Barmen, Confession of 1967, Belhar, A Brief Statement of Faith = 12 documents (12 CONFIRMED). F-2.02 "These confessional statements are subordinate standards in the church, subject to the authority of Jesus Christ, the Word of God ... While confessional standards are subordinate to the Scriptures, they are, nonetheless, standards" CONFIRMED. W-4.0404 b "unique and authoritative witness to Jesus Christ in the Church universal, and God's Word to you" and c "essential tenets of the Reformed faith as expressed in the confessions of our church as authentic and reliable expositions": CONFIRMED. G-6.03: study committee of not fewer than fifteen, approval in writing of two-thirds of the presbyteries, then enactment by a later GA: CONFIRMED. G-2.0105 exists (Freedom of Conscience; not read for wording). "Also find the official pcusa.org copy": not done (UNCONFIRMABLE that an official copy was located; the pnne.org copy is a synod-hosted copy).

### R-log 5 (R §4, §6) PC(USA) Spanish Book of Confessions 2016
CONFIRMED. https://pcusa.org/sites/default/files/2016-spanish-book-of-confessions-electronic.pdf: front-matter note lists the specific anti-Catholic passages: Scots chapters XVIII and XXII; Heidelberg Q&A 80; Second Helvetic chapters II, III, XVII, XX; "Capítulos XXII, XXV y XXIX de la Confesión de Westminster de la Fe se han modificado para eliminar el lenguaje anacrónico y ofensivo"; sections are marked with an asterisk. Extra (not in doc): the same note says "Capítulo XXVIII de la Confesión francesa no tiene rango constitucional" (this refers to the French/Gallican Confession as a historical confession in the book's front matter; not checked which edition of the Book contains it). El Faro credit: "La traducción de los Catecismo Menor y Mayor de Westminster ... se hizo utilizando como base la versión en Español de ... Publicaciones El Faro ... de la Iglesia Nacional Presbiteriana de México": CONFIRMED. Bible text "Reina Valera, revisión de 1960": CONFIRMED. Page "p. iii": the note sits on a page marked "iii LIBRO DE CONFESIONES"; CONFIRMED.

### R-log 6 (R §2, §3) URCNA Church Order
CONFIRMED. https://www.urcna.org/church-order: Introduction "We believe and are fully persuaded that the Reformed confessions do fully agree with this Word of God and therefore do subscribe to the Belgic Confession, the Heidelberg Catechism, and the Canons of Dort"; Art. 29 (Appeals by Assemblies) "settled and binding, unless it is proved that they are in conflict with the Word of God or the Church Order"; Arts. 39-46 are worship/sacraments (39 "Psalms and Hymns", 45 "Admission to the Lord's Supper", 46 "Administration of the Lord's Supper"). Scripture wording "inspired, infallible, and inerrant" present.

### R-log 7 (R §2) URCNA Form of Subscription
CONFIRMED. https://www.urcna.org/liturgical-forms-form-of-subscription: "all the articles and points of doctrine contained in the Belgic Confession and the Heidelberg Catechism of the Reformed Churches, together with the explanation of some points of the aforesaid doctrine made by the National Synod of Dordrecht, 1618-1619, do fully agree with the Word of God."

### R-log 8 (R §2, §3) CRCNA pages
CONFIRMED. /welcome/beliefs: "the only infallible rule for faith and life"; three ecumenical creeds as "ecumenical expressions"; three confessions "whose doctrines fully agree with the Word of God"; Belhar and Our World Belongs to God "adopted by synod as contemporary testimonies". /node/3943469: "In 2012, Synod replaced the Form of Subscription with this Covenant for Officebearers"; "doctrines fully agree with the Word of God"; "promise to be formed and governed by them". /node/4482373: "synod declares this affirmation 'an interpretation of [a] confession' (Acts of Synod 1975, p. 603). Therefore, this interpretation has confessional status." Heidelberg page: Synod 2004 "Q&A 80 can no longer be held in its current form as part of our confession"; Synod 2006 kept it in the text with the last three paragraphs bracketed; "The Reformed Church in America retains the original full text": CONFIRMED.
Note: the phrase 'CRC "without reservation"' (R §2 item 7) does not occur in the Covenant page; its source is the Synod 2025 FAQ (see sampling section).

### R-log 9 (R §4) Belgic Confession and Canons of Dort on crcna.org
CONFIRMED. Belgic page: "The text of Article 36 is presented in two forms in this edition because the Christian Reformed Church in 1938 and 1985 decided to revise it". Canons page: "the Reformed Church in America does not give confessional status to the Rejection of Errors".

### R-log 10 (R §4) RCA creeds and confessions page
CONFIRMED. https://www.rca.org/about/theology/creeds-and-confessions/: "Four statements of belief, known in the RCA as Standards of Unity ...: the Heidelberg Catechism, the Belgic Confession, the Canons of Dort, and the Confession of Belhar. In 1978, the RCA approved Our Song of Hope as a contemporary statement of faith."

### R-log 11 (R §4) Church of Scotland Articles Declaratory
CONFIRMED on wording via the Free Presbyterian Magazine reproduction (Sept 1921): Art. II "The principal subordinate standard of the Church of Scotland is the Westminster Confession of Faith approved by the General Assembly of 1647, containing the sum and substance of the Faith of the Reformed Church"; Art. V "This Church has the inherent right ... to frame or adopt its subordinate standards, to declare the sense in which it understands its Confession of Faith, to modify the forms of expression..." UNCONFIRMABLE: the legislation.gov.uk 1921 c. 29 Schedule (my fetch of the Geo5/11-12/29 URL returned empty); so the statute's own text was not read.

### R-log 12 (R §4, §6) INPM Constitución 2002
CONFIRMED. Art. 351 lists: Credos (Apostólico, Niceno, Atanasiano, De Calcedonia); Segunda Confesión Helvética; Confesión de Fe de Westminster; Catecismo Mayor; Catecismo Menor; La Institución Cristiana de Juan Calvino; Catecismo de Ginebra; Confesión de Fe de la Iglesia de Escocia; Cánones de Dort; Catecismo de Heidelberg; plus an INPM own confession "Próxima a elaborar". "Estos documentos ... presentan el sistema de doctrina reformada y calvinista". Art. 32 lists the Belgic Confession (so the R §4 remark "INPM lists it in Art. 32 but not Art. 351" is CORRECT). Art. 11 "solamente ministerial y declarativa" and Art. 12 "la suprema autoridad": CONFIRMED. Arts. 352-356 amendment path via presbyteries then General Assembly: CONFIRMED (Art. 356 GA decides on revision). UNCONFIRMABLE: "check for a newer INPM constitution" was not searched.

### R-log 13 (R §4) IPCH Estatuto Art. 3
CONFIRMED. https://ipch.cl/documentos/Estatuto-IPCH.pdf: "declara su fe mediante la adopción de la Confesión de Fe de Westminster del año mil novecientos tres como símbolo doctrinal oficial, a la que reconoce como conteniendo el sistema de doctrina enseñado en las Sagradas Escrituras".

### R-log 14 (R §4) Hungarian Reformed Church common constitution
CONFIRMED on content. §1(1): "la Biblia ... hite kifejezőjéül az Apostoli Hitvallást, a II. Helvét Hitvallást (1566) és a Heidelbergi Kátét (1563) fogadja el". UNCONFIRMABLE: a non-test official URL (not searched; the file is hosted on the `teszt.` subdomain).

### R-log 15 (R §4) IEE confesión de fe
CONFIRMED. https://www.iee-es.org/confesion-de-fe/: art. I "no reconocemos carácter autoritativo, independiente de las Sagradas Escrituras, a la llamada Tradición Eclesiástica"; the site footer says the IEE (founded 1869) is member of the World Council of Churches, the World Communion of Reformed Churches and the World Methodist Council (all present).

### R-log 16 (R §6) CLIR 2010 Westminster edition
CONFIRMED. https://setru.ipuy.org.uy/assets/confesion-de-fe-de-westminster.pdf: "Los estándares de Westminster / Alonzo Ramírez ... San José, Costa Rica: Confraternidad Latinoamericana de Iglesias Reformadas, CLIR, 2010. 384 p. ISBN: 978-9968-894-23-4"; "© 2010 por la Confraternidad Latinoamericana de Iglesias Reformadas"; Bible quotes "Reina Valera, revisión 1960"; the editorial note says Ramírez's earlier Confession translation had been published by CLIE (Spain) and that the CLIR edition is a new translation including the Form of Government.

### R-log 17 (R §4A, §11) archive.org `confessionoffaith00chur`: Church of Scotland acts
CONFIRMED. Item title "The Confession of faith : the larger and shorter catechisms ... With Acts of Assembly and Parliament ... 1894". OCR text: "Assembly at Edinburgh, August 27, 1647. Sess. 23. Act approving the Confession of Faith" ("agree unto, and approve the said Confession, as to the truth of the matter; (judging it to be most orthodox, and grounded upon the word of God;)" and "a common Confession of Faith for the three Kingdoms"); "Assembly at Edinburgh, July 2, 1648. Sess. 10. Act approving the Larger Catechism" ("a Directory for catechising such as have made some proficiency in the knowledge of the grounds of religion"); "Assembly at Edinburgh, February 3, 1645. Sess. 10. Act ... for the establishing ... of the Directory for the Publick Worship of God"; "February 10, 1645. Sess. 16. Act ... approving the Propositions concerning Kirk-government, and Ordination of Ministers". (Doc's pairing of 10 Feb = Form of Church-Government and 3 Feb = Directory is right.) The two caveats of the 1647 act were not re-read here.

### R-log 18 (R §2, §3) ccel.org Schaff Creeds III quoted wording
CONFIRMED (URLs need the `.html` suffix: `https://ccel.org/ccel/schaff/creeds3.iv.viii.html`; the log's URLs without it return "Page Not Found"). Belgic IX "we do willingly receive the three creeds, namely, that of the Apostles, of Nice, and of Athanasius; likewise that which, conformable thereunto, is agreed upon by the ancient fathers". Gallican V "we confess the three creeds, to wit: the Apostles', the Nicene, and the Athanasian, because they are in accordance with the Word of God" (found in creeds3.iv.vii). SHC II "we do not despise the interpretations of the holy Greek and Latin fathers, nor reject their disputations and treatises as far as they agree with the Scriptures; but we do modestly dissent from them when they are found to set down things differing from, or altogether contrary to, the Scriptures" and "in the same order we also place the decrees and canons of councils". Scots preface "satisfactioun fra the mouth of God, that is, fra his haly scriptures". Not individually re-read: Belgic VI, VII, Scots XIX wording.

### R-log 19 (R §11 "unverified items") see per-item results
- HC Q numbers other than 65/68/78/80: sampled in the sampling section.
- WCF 27.4 wording: CONFIRMED. Schaff (https://www.ccel.org/ccel/schaff/creeds3.iv.xvii.ii.html) ch. XXVII sec. IV "There be only two sacraments ordained by Christ our Lord in the gospel, that is to say, Baptism and the Supper of the Lord". (The same Schaff page shows 1647 numbering IV for sec. 4 of ch. XXVII; section numbers in ch. 27 do not shift between 1647 and 1788.)
- PCA BCO 3-2 "ministerial and declarative": WRONG, see R-log 1 (correct: Preliminary Principles 7, BCO 11-2).
- Remaining items (CRC CO Art. 29, 39 Articles 1643, Statenvertaling, Bavinck/Berkhof/Bullinger editions, WCRC figures, Debrecen 1567): see the sampling section.

### R extra finding (R §2 item 2, R §4A "Text variants") WCF ch. 31 numbering is inverted
WRONG. R §4A says "Chapter numbering shifts between 1647 (31.3) and 1788 (31.4) in ch. 31", and R §2 item 2 cites "WCF 31.4 (1788 numbering) councils 'may err ...'". The 1647 text (Edinburgh 1894 print, archive.org `confessionoffaith00chur`) has: I assemblies, II magistrates may call a synod, III "It belongeth to synods and councils ministerially to determine controversies", IV "All synods or councils since the apostles' times ... may err", V ecclesiastical only. Schaff (ccel creeds3.iv.xvii.ii) prints that paragraph as "IV. [III.]" (1647 number, American 1788 number in brackets). So: "may err" is 31.4 in the 1647 text and 31.3 in the 1788/American (PCA, OPC) text, because the 1788 revision dropped 1647 sec. II (magistrates). Correct both places: 1647 = 31.4, 1788 = 31.3. (The R §4A parenthetical "20.4, 23.3, 31.2 → civil magistrate" refers to the sections that were changed and is consistent: 1647 31.2 is the magistrate section.) Not re-checked against a current PCA print.

## Sampling of [snippet] / [memory] claims

Search budget note: the shared WebSearch quota ran out partway; the items marked "not searched" below could not be retried via search (pages were fetched directly where possible).

### Lutheran

#### S-L1 (L §1.3) Walther 1858 essay quotes [snippet]
CONFIRMED (secondary). https://lutheranchronicles.substack.com/p/walther-on-unconditional-subscription quotes "By a conditional subscription to the Symbols the subscriber does not pledge himself to accept every doctrine ..." and "Therefore an unconditional subscription is indispensable."; says the essay was first delivered at the Western District Convention in 1858 and republished in April 1947 in Concordia Theological Monthly vol. XVIII. The primary (CTM scan) was not read.

#### S-L2 (L §1.3) Tomczak essay on quia/quatenus
CONFIRMED. https://www.wls.wels.net/.../Hermeneutics-and-the-Confessions-Tomczak.pdf: "just a way to distinguish a quia ('because') from a quatenus ('in so far as') subscription?" The essay uses the terms in passing (a question), it does not define them in a formal definition; the doc's "Definition as used in confessional Lutheran literature" is a fair but light use.

#### S-L3 (L §4 Canon) Luther Bible 1534 Apocrypha heading [snippet]
UNCONFIRMABLE. https://www.die-bibel.de/luther-und-die-apokryphen returns 403 to scripts; no alternate source tried (search quota exhausted).

#### S-L4 (L §4 Tier 3/9) Facts from Bente beyond §§ in the log
CONFIRMED in the PG text: Latin textus receptus of the FC "published at Leipzig in 1584"; Latin edition 1580 by Selneccer "privato et festinato instituto"; Torgau Book (Feb 1576 Maulbronn formula context); Visitation Articles printed 1593; ~8,000 signatures. NOT FOUND in Bente: the string "June 25, 1580" (L §4 says the German BoC was published at Dresden on 25 June 1580); not checked elsewhere (UNCONFIRMABLE from Bente; the date itself is widely stated but I did not verify it).

#### S-L5 (L §4 doctrine index) Ap XIV.24 quote and KW offset
CONFIRMED. https://bookofconcord.org/defense/of-ecclesiastical-order/ ¶24 contains "it is our greatest wish to maintain church-polity and the grades in the Church [old church-regulations and the government of bishops]". Ap XIII.3 (https://bookofconcord.org/defense/of-the-number-and-use-of-sacraments/) "If we call Sacraments rites which have the command of God, and to which the promise of grace has been added": CONFIRMED. The Ap XIII.4 quote "Baptism, the Lord's Supper, and Absolution ..." was not found by exact string (not searched with variants): UNCONFIRMABLE as quoted.

#### S-L6 (L §1.1, §9) Not checked
Wikipedia/Logos pages for the norma normans/normata usage ([snippet]); ILC/CELC rejection of the JDDJ ([snippet]); WELS constitution (doc says not found online); Preface of the BoC re-read; ILC "~59 member listings" count; SELK/LCMS items. Not searched because of the quota; the L file itself marks them [snippet] or open.

### Reformed

#### S-R1 (R §2 item 6, §9) PCA good-faith subscription "2003"
CONFIRMED on the year of the BCO 21-4 amendment. PCA 31st GA (2003) actions report (https://www.pcahistory.org/pca/ga/actions/31stGA_2003_Actions.pdf, pdftotext): "An amendment to BCO 21-4 regarding doctrinal subscription was approved"; the amendment requires candidates to state differences and lets the presbytery approve differences that are not out of accord with any fundamental of the system. The report does not itself use the words "good faith" in the extracted text; the 2002 (30th GA) report is the source that headed the proposal "Good-Faith Subscription" (found only via search snippet).

#### S-R2 (R §9 item 7) Church of Scotland: failed 1974 change [snippet]
UNCONFIRMABLE. The cited article (https://ojs.st-andrews.ac.uk/index.php/TIS/article/download/1871/1390) downloads as a PDF whose text my extractors could not read (3,467 bytes of text only); not retried via search (quota). Art. II and Art. V wording are verified (see R-log 11).

#### S-R3 (R §4B) CRC "without reservation" [Synod 2025 FAQ]
CONFIRMED. https://www.crcna.org/Synod2025FAQ: "Synod did not change the requirement for officebearers to sign the Covenant for Officebearers 'without reservation.'" Cited article: Church Order Supplement, Article 5 (the page adds that synod later amended Art. 5-a separately).

#### S-R4 (R §1) WCRC size [snippet]
CONFIRMED (updated wording). https://wcrc.eu/about/members/: "230+ member churches ... active in more than 105 countries ... 100 million individual members". The doc says "~100 million Christians in 230+ churches" and "105-109 countries": the page says "more than 105", so "105-109" is not supported as a range by this page.

#### S-R5 (R §4B) Second Helvetic Confession adoption in Hungary "synod of Debrecen 1567" [snippet]
PARTIALLY CONFIRMED. https://en.wikipedia.org/wiki/Second_Helvetic_Confession lists adoption in Hungary in 1567 (also Scotland 1566, France 1571, Poland 1578) and Bullinger as author (written 1562, revised 1564, published 1566 per other sources), but does not name a Synod of Debrecen. "Synod of Debrecen" remains UNCONFIRMABLE here (Wikipedia is secondary and the search quota was gone).

#### S-R6 (R §4B) Scots Confession and French Confession [memory]
CONFIRMED (secondary, Wikipedia). Scots Confession 1560, six Johns (Knox, Winram, Spottiswood, Willock, Douglas, Row), 25 chapters, "superseded by the Westminster Confession of Faith on 27 August 1647": matches R §4B ("1560, Knox and five others; 25 articles; superseded in practice by WCF since 1647"). Gallican Confession 1559 Synod of Paris, Calvin's draft (35 articles expanded to 40): matches R ("1559, Synod of Paris (Calvin's draft), 40 articles"); Belgic 1561 by Guido de Brès modelled on it: matches.

#### S-R7 (R §9, memory) Westminster Assembly revised the Thirty-Nine Articles in 1643
CONFIRMED with a correction. Warfield and Symington (via search results, https://www.monergism.com/thethreshold/sdg/warfield/warfield_makingwest.html and graceonlinelibrary.org Symington): Parliament's order of 5 July 1643 set the Assembly to revise the Articles; work ran roughly 8 July - 12 Oct 1643; sources differ on whether it reached art. 15 or 16 ("first fifteen" in Symington, "first sixteen" in Warfield and Murray, who says it was on the 16th when ordered on 12 Oct to turn to church government). The doc's "Articles 1-15" is thus not firm: use "the first fifteen or sixteen". [Search-result evidence only; pages not opened.]

#### S-R8 (R §6) Protestantse Kerk in Nederland [memory]
CONFIRMED (secondary). https://en.wikipedia.org/wiki/Protestant_Church_in_the_Netherlands: founded 1 May 2004 from most of the Dutch Reformed Church, most of the Reformed Churches in the Netherlands and the Evangelical Lutheran Church; church order names the unaltered Augsburg Confession and Luther's catechism plus Heidelberg Catechism, Genevan Catechism, Belgic Confession, Canons of Dordt; also Barmen and Leuenberg acknowledged. The church order itself was not read.

#### S-R9 (R §8 index) Heidelberg Q numbers
CONFIRMED by topic for Q 19, 21, 35, 52, 53, 54, 57, 58, 59, 60, 65, 68, 78, 83-85, 86, 94, 96, 98, 108, 109 (CRC/RCA 2011 text, https://www.crcna.org/welcome/beliefs/confessions/heidelberg-catechism). Q80: confirmed existing and the note that it was absent from the first edition and shorter in the second (CRC page). Not checked: the SHC, Belgic and Dort locators in the same table (e.g. SHC 11, 14, 19, 25, 29; B 29-31, 37) and WLC/WSC question ranges.

#### S-R10 (R §4, various) Not checked
Statenvertaling commission, Bavinck/Berkhof/Bullinger editions, Turretin/Princeton, PKN church order, URCNA keeping Q80 in full, RPCNA Spanish Constitución, Free Church/Free Presbyterian items, PC(USA) "essential tenets" non-enumeration (my search of the Book of Order found no list in W-4.0404 but that is only absence in that passage), CRC Church Order Art. 29, SHC 1566 "chapters 30" (the Wikipedia page cites up to ch. 30), Hungarian official URL, newer INPM constitution.

## Summary of WRONG findings (for quick use)
1. R §4A and §2 item 2: WCF ch. 31 "may err" paragraph is 31.4 in the 1647 text and 31.3 in the 1788/American text; the doc has them reversed.
2. R §2 item 6: "ministerial and declarative" is not PCA BCO 3-2; correct locators are Preliminary Principles 7 and BCO 11-2.
3. L §1.2 Norway: § 1 was inserted in force 1 Jan 2021 (regulation of 9 Oct 2020), not "1 Jan 2024".
4. L §7: `bub_gb_Vjo6XkW2eiEC` is a 1573 third part of Chemnitz's Examen, not a "1566 ed."; `properdistinctio0000unse` is catalogued as an English edition (1897), not "German".
5. L §4 Tier 2 list A: SD VIII.85 is identified (Luther's Last Words of David, 1543), the doc says "not identified".
6. L Tier 2 WA column: two page ranges disagree with Gruber (WA 26.241-509 vs 261-509; WA 23.38-320 vs 64-283); the rest unconfirmable.
7. R §11 item 18 and L §11 item 2: two log URLs/file names need correcting (ccel `.html` suffix; archive.org file names), which is a log issue, not a content error.
8. R §1 WCRC "105-109 countries": the page says "more than 105".
9. L log item 17: the pointer "l.2858" is Ap IV ¶123, not the Ap VI restart (that is l.4497).
