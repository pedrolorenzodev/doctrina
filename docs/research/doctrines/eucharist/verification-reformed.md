# Reformed Eucharist dossier — independent verification

## Progress

- Status: done.
- Done: inventoried and visually verified WCF 27.1–3 and 29.1–8, WLC 168–177, WSC 96–97, Trent XIII cann. 2/4/6/7 and XXII ch. 2/can. 3, Robertson's English witness and the complete Greek Dositheus clauses in Kimmel 1850 pp. 458 and 461, Formula of Concord Epitome VII.2, 15–16 in the 1921 *Concordia Triglotta*, every present-status source used in the dossier, historical editions, reuse limits and bounded negative searches. Applied every required correction to `reformed.md`: diplomatic Spanish spelling, direct Greek-to-Spanish Dositheus renderings, German-source Formula labels, current-status qualifications, Kimmel source record, licence limits and removal of the extraction checkpoint. Final stale-marker and whitespace checks pass.
- In progress: none.
- Next: none for this dossier. The next NIGHT ORDER task is `docs/research/catholic-spanish-bibles.md`.
- Decided by the agent, to confirm: a citation can pass wording from OCR only after its printed page is visually checked; until then it remains `[verified: OCR]`, never `[verified: scan]`.

## Scope and method

- Target: `reformed.md` only. `catholic.md`, every `lutheran*.md`, review pages and `data/` remain read-only.
- Editions are those named in the dossier. A transcription is a locator, not the quotation authority.
- Checks cover wording, omitted clauses, locator, source identity, translation direction, authority label, licence statement and whether the cited text actually supports the draft sentence.
- Tags follow `docs/playbooks/verification-pass.md`.

## Inventory

Repeated uses of the same locus are checked once for the source and then separately for whether each use preserves its meaning.

| Group | Loci / claims | Draft occurrences to cover | State |
|---|---|---|---|
| A · WCF | 27.1–3; 29.1–8 | definition; ten doctrine rows; denials; five “Por qué” blocks; Scripture interpretation; all four answers; practice | PASS; exact-quote corrections applied |
| B · WLC | 168–177 | definition support; preparation row; “Por qué” 1, 4–5; Scripture; OB-1/2/3 answers; all practice blocks; extraction log | PASS against scan |
| C · WSC | 96–97 | preparation row; OB-2 answer; practice | PASS; exact-quote correction applied |
| D · Trent | XIII ch. 4, cann. 2, 4, 6, 7; XXII ch. 2, can. 3 | OB-1, OB-3, OB-4, status note, source record | PASS; exact-quote corrections applied |
| E · Formula of Concord | Epitome VII.2, 15–16 | OB-2 synthesis and three objector texts | PASS against German scan |
| F · Dositheus | Decree XVII, Robertson pp. 144–150; Kimmel pp. 458, 461 | OB-1, OB-3, OB-4 objector texts and syntheses | English witness PASS; direct Greek-to-Spanish replacements PASS |
| G · Current status | OPC WCF; Church of Scotland Act V (1986); PC(USA) preface; Leuenberg §§20, 27, 32b; LCMS Constitution II; PCA/INPM adoption | harsh-language lines, OB-2 status, authority table, sources | PASS against direct sources; INPM distinction retained |
| H · Editions/licence | title pages, publication data, public-domain ages, current-site reuse limits | Conventions and Sources | PASS with current-document limits stated |
| I · Negative searches | no PD Spanish WLC; no separate sick/moribund answer in Westminster; Baptist/AG texts do not expressly reject; proof texts non-constitutional | conventions, OB-4 limit, coverage and map gaps | PASS as bounded searches |

### Exact quoted-text checklist

1. WCF 29.7, Spanish 1880: «real y verdaderamente [...] no carnal ni corporal, sino espiritualmente».
2. WCF 29.2, Spanish 1880: the complete “sacrificio papal” sentence and both shorter reuse fragments.
3. WCF 29.4, Spanish 1880: complete private-masses / cup / adoration / procession / reservation sentence.
4. WCF 29.5, Spanish 1880: sacramental naming and «permanecen [...] pan y vino».
5. WCF 29.6, Spanish 1880: complete transubstantiation rejection and the severe closing.
6. WCF 29.7–8, Spanish 1880: «en, con o bajo» and «no reciben la cosa significada».
7. WSC 96, Spanish 1880: «no de una manera corporal y carnal, sino por la fe».
8. Trent XIII can. 2, Ayala p. 171: retained substance / conversion / «sea excomulgado».
9. Trent XIII can. 4, Ayala p. 172: presence before/after use and reserved remains.
10. Trent XIII can. 6, Ayala pp. 172–173: latria, feast, procession, exposition, idolaters.
11. Trent XIII can. 7, Ayala p. 173: reserve and carry to the sick.
12. Trent XXII ch. 2, Ayala pp. 317–318: same victim, different manner.
13. Trent XXII can. 3, Ayala p. 325: praise/thanksgiving/memorial versus propitiatory sacrifice.
14. FC Ep VII.2, German Triglot: controversy and «Die Sakramentierer sagen nein, wir sagen ja».
15. FC Ep VII.15, German Triglot: spiritual and oral reception, supernatural/heavenly mode.
16. FC Ep VII.16, German Triglot: unworthy and unbelievers receive for judgment.
17. Dositheus XVII, Robertson p. 145: substance no longer remains.
18. Dositheus XVII, Robertson p. 148: true propitiatory sacrifice.
19. Dositheus XVII, Robertson pp. 148–149: reserved gifts are the true Body before/during/after use.
20. Current-status quoted phrases: Church of Scotland “dissociates itself”; PC(USA) “anacrónico y ofensivo”; Leuenberg non-applicability; LCMS “without reservation”.

The prose paraphrases and all printed proof-text lists remain in Groups A–I even when they do not appear in this quotation-only list.

## Verification log

### Westminster Confession, Spanish 1880

| Locus | Printed witness | Result | Finding |
|---|---|---|---|
| WCF 27.1–3 | Monterrey 1880, pp. 136–137 (PDF pp. 138–139) | **PASS** | The scan defines sacraments as signs and seals of the covenant, gives the sacramental union between sign and thing signified, and attributes efficacy to the Spirit and words of institution rather than intrinsic power or the administrator's piety. The dossier's sacramental framework preserves those claims. |
| WCF 29.1 | Monterrey 1880, p. 145 (PDF p. 147) | **PASS** | Institution on the night of betrayal, continuance until the end of the world, memorial, sealing, nourishment, obedience and communion are all visible and match the definition and doctrine table. |
| WCF 29.2 | Monterrey 1880, p. 146 (PDF p. 148) | **FAIL — wording** | The scan reads «ni de los vivos **y** ni de los muertos». Any direct quotation that silently removes the first `y` is not exact and must be corrected or explicitly marked as normalized. The rest of the paragraph, including «el sacrificio papal de la misa (como lo llaman)» and its closing judgment, is visible and supports the cited doctrinal claim. |
| WCF 29.3 | Monterrey 1880, pp. 146–147 (PDF pp. 148–149) | **PASS** | The ministerial actions and distribution to communicants present in the congregation are visible across the two pages; the locator and dossier paraphrase agree with the print. |
| WCF 29.4 | Monterrey 1880, p. 148 (PDF p. 150) | **PASS — support; correction required for quotation policy** | The scan expressly rejects private masses or solitary reception, denial of the cup, adoration, elevation, procession and conservation for supposed religious uses. The dossier preserves the sequence and uses an ellipsis for an omitted clause, but silently modernizes several accents; those accents must be restored to the print before `[verified: scan]`. |
| WCF 29.5 | Monterrey 1880, pp. 148–149 (PDF pp. 150–151) | **PASS** | The sacramental naming and the complete clause «permanecen todavía en sustancia y naturaleza, verdadera y solamente, pan y vino» are visible and accurately support the draft. |
| WCF 29.6 | Monterrey 1880, p. 149 (PDF p. 151) | **PASS — support; correction required for quotation policy** | The printed paragraph rejects the change of the substance of bread and wine into Christ's body and blood and closes «ha sido y es, la causa de muchas supersticiones y groseras idolatrías». The draft's doctrinal use is supported; direct quotation must retain the historical spelling and exact punctuation rather than silently modernize it. |
| WCF 29.7 | Monterrey 1880, pp. 149–150 (PDF pp. 151–152) | **PASS — support; correction required for quotation policy** | The scan reads «real y verdaderamente, pero no carnal ni corporal, sino espiritualmente» and later «ó en, con ó bajo el pan y el vino». The dossier preserves the doctrine but modernizes the conjunction and accents inside direct quotation; the displayed quotation must follow the print. |
| WCF 29.8 | Monterrey 1880, p. 150 (PDF p. 152) | **PASS** | The scan confirms that the ignorant and wicked receive the material elements but «no reciben la cosa significada por ellos» and incur guilt and condemnation. Locator and doctrinal use pass. |

### Westminster Shorter Catechism, Spanish 1880

| Locus | Printed witness | Result | Finding |
|---|---|---|---|
| WSC 96 | Monterrey 1880, p. 205 (PDF p. 207) | **PASS — support; correction required for quotation policy** | The full answer is visible and says worthy receivers are made participants «no de una manera corporal y carnal, sino por la fé». The draft's meaning and locator pass; the direct quote must retain printed «fé» rather than modernize it silently. |
| WSC 97 | Monterrey 1880, pp. 205–206 (PDF pp. 207–208) | **PASS** | The answer and its continuation require self-examination concerning discernment, faith, repentance, love and new obedience, lest one eat and drink condemnation. The preparation/admission uses in the dossier are supported. |

### Westminster Larger Catechism, English 1894 print witness

| Loci | Printed witness | Result | Finding |
|---|---|---|---|
| WLC 168–169 | Edinburgh 1894, p. 203 (PDF p. 207) | **PASS** | Q168 defines the Supper as bread and wine given and received by Christ's appointment, showing his death and feeding worthy communicants; Q169 gives the ministerial actions and both elements. The dossier's definition and administration uses agree. |
| WLC 170–172 | Edinburgh 1894, pp. 204–206 (PDF pp. 208–210) | **PASS** | Q170 expressly denies bodily presence «in, with, or under» the elements while affirming true and real spiritual reception by faith; Q171 lists examination and preparation; Q172 admits the weak and doubting believer under its stated qualifications. The dossier's presence, preparation and pastoral uses preserve those limits. |
| WLC 173–175 | Edinburgh 1894, pp. 206–208 (PDF pp. 210–212) | **PASS** | Q173 authorizes keeping ignorant or scandalous professors from the Supper until instruction and reform; Q174 describes reverent reception, discernment, meditation, self-judgment, faith and thanksgiving; Q175 prescribes post-communion review. The dossier's practice section is supported. |
| WLC 176–177 | Edinburgh 1894, pp. 209–210 (PDF pp. 213–214) | **PASS** | Q176 identifies shared covenantal authorship, benefits and Christ as the spiritual part; Q177 distinguishes once-only baptism from the often-administered Supper and limits the latter to those able to examine themselves. The dossier uses these distinctions accurately. |

### Council of Trent, Ayala 1785 bilingual print witness

| Loci | Printed witness | Result | Finding |
|---|---|---|---|
| Session XIII, cann. 2 and 4 | Ayala 1785, pp. 171–172 (Archive leaves 192–193) | **PASS — support; correction required for quotation policy** | Canon 2 has the retained-substance denial, total conversion and the name transubstantiation; canon 4 affirms presence before and after reception and in reserved remains. The dossier's claims pass. Its displayed canon 2 excerpt silently modernizes historic spellings/accents and must be restored to the scan before `[verified: scan]`. |
| Session XIII, cann. 6–7 | Ayala 1785, pp. 172–173 (Archive leaves 193–194) | **PASS** | Canon 6 expressly includes latria, feast, procession, public exposition and the denial that adorers are idolaters; canon 7 permits reservation and honourable carrying to the sick. The synthesis and locators pass. |
| Session XXII, ch. 2 | Ayala 1785, pp. 317–318 (Archive leaves 338–339) | **PASS** | The print states that the same Christ is contained and offered bloodlessly, that the victim is one and the same, and that only the manner of offering differs; it calls the sacrifice propitiatory for living and dead. The dossier preserves the distinction from the cross. |
| Session XXII, can. 3 | Ayala 1785, p. 325 (Archive leaf 346) | **PASS — support; correction required for quotation policy** | The canon rejects reducing the Mass to praise, thanksgiving or mere remembrance and affirms propitiatory offering for living and dead. The dossier's claim passes; its direct quote must retain the print's spelling and punctuation. |

### Formula of Concord, 1921 German print witness

The controlling witness is *Concordia Triglotta* (St. Louis: Concordia Publishing House, 1921), Epitome VII, German and Latin columns, printed pp. 808, 810 and 812. The three Spanish renderings in OB-2 were checked directly against the German column; English and Latin were not used as translation intermediaries. [verified: scan]

| Locus | Printed witness | Result | Finding |
|---|---|---|---|
| Epitome VII.2 | p. 808 (PDF p. 1089) | **PASS** | The controversy asks whether Christ's true body and blood are truly and essentially present, distributed with bread and wine, and received orally by worthy/unworthy, pious/impious, believing/unbelieving communicants, for life or judgment. The dossier preserves the complete question and the close «Los sacramentarios dicen que no; nosotros decimos que sí.» [verified: scan] |
| Epitome VII.15 | p. 810 (PDF p. 1091) | **PASS** | The German says Christ's body and blood are received with the bread and wine not only spiritually through faith but also orally, not in a Capernaite manner but supernaturally and heavenly because of the sacramental union. The dossier's Spanish retains every limitation. [verified: scan] |
| Epitome VII.16 | p. 812 (PDF p. 1093) | **PASS** | The German says not only true believers and worthy communicants but also the unworthy and unbelieving receive Christ's true body and blood, not for life and consolation but for judgment and condemnation unless they repent. The dossier's Spanish is faithful. [verified: scan] |

Facsimile: [Internet Archive, `ConcordiaTriglotta`](https://archive.org/details/ConcordiaTriglotta/page/n1088/mode/2up). The scan pages were read visually; scan-derived OCR served only as a locator. [verified: scan]

### Confession of Dositheus, Robertson 1899 print witness

| Locus | Printed witness | Result | Finding |
|---|---|---|---|
| Decree XVII: substance | Robertson 1899, p. 145 (Archive leaf 156) | **PASS — English witness; FAIL — Spanish translation direction** | The page says that after consecration the substance of bread and wine no longer remains but the Lord's Body and Blood under the species/form and accidents. The dossier's Spanish accurately follows Robertson's English, but the project rule requires agent Spanish to be translated from the original language, not through English; the Spanish quotation cannot pass yet. Robertson prints only selected Greek phrases in notes, not the complete Greek clause. |
| Decree XVII: sacrifice | Robertson 1899, p. 148 (Archive leaf 159) | **PASS — English witness; FAIL — Spanish translation direction** | The page calls it a true and propitiatory sacrifice offered for all Orthodox, living and dead, for the benefit of all. The English locator and doctrinal synthesis pass; the displayed Spanish derived through Robertson does not. |
| Decree XVII: reservation | Robertson 1899, pp. 148–149 (Archive leaves 159–160) | **PASS — English witness; FAIL — Spanish translation direction** | The print says the reserved gift for the dying is the true Body and, before, during and after use, remains in all respects the true Body of the Lord. The English witness supports the synthesis; the Spanish quotation must be replaced by a translation made directly from a complete Greek original. |

**Resolved correction:** the Robertson-based Spanish failed only because it passed through English. The complete Greek clauses have now been checked in Kimmel's print and translated directly below. The English witness remains a corroborating translation, not the source of the new Spanish.

### Confession of Dositheus, Kimmel 1850 Greek print witness

E. J. Kimmel, ed., *Monumenta fidei ecclesiae orientalis*, pars I (Jena: Friedrich Mauke, 1850), prints the Greek and Latin in parallel columns. The complete Internet Archive facsimile derives from the New York Public Library copy and identifies the volume as a Google digitization. Decree XVII begins on printed p. 456; the three clauses used by this dossier occur on pp. 458 and 461. Page images, not OCR, govern the following readings. [verified: scan]

| Claim | Greek checked against the scan | Direct Spanish rendering | Result |
|---|---|---|---|
| Substance no longer remains | «Ἔτι μετὰ τὸν ἁγιασμὸν τοῦ ἄρτου καὶ τοῦ οἴνου οὐκ ἔτι μένειν τὴν οὐσίαν τοῦ ἄρτου καὶ τοῦ οἴνου, ἀλλ᾽ αὐτὸ τὸ σῶμα καὶ τὸ αἷμα τοῦ κυρίου ἐν τῷ τοῦ ἄρτου καὶ τοῦ οἴνου εἴδει καὶ τύπῳ, ταὐτὸν εἰπεῖν, ὑπὸ τοῖς τοῦ ἄρτου συμβεβηκόσιν.» (p. 458) | «Asimismo, después de la consagración del pan y del vino ya no permanece la sustancia del pan y del vino, sino el cuerpo mismo y la sangre del Señor bajo la especie y figura del pan y del vino; es decir, bajo los accidentes del pan.» **[traducción propia asistida por IA desde el griego]** | **PASS — blocker resolved** [verified: scan] |
| True and propitiatory sacrifice | «Ἔτι εἶναι θυσίαν ἀληθῆ καὶ ἱλαστήριον προσφερομένην ὑπὲρ πάντων τῶν εὐσεβῶν ζώντων καὶ τεθνεώτων καὶ ὑπὲρ ὠφελείας πάντων, ὡς κεῖται ῥητῶς ἐν ταῖς τοῦ μυστηρίου προσευχαῖς ὑπὸ τῶν ἀποστόλων τῇ ἐκκλησίᾳ παραδοθείσαις κατὰ τὴν πρὸς αὐτοὺς διαταγὴν τοῦ κυρίου.» (p. 461) | «Asimismo, es un sacrificio verdadero y propiciatorio, ofrecido en favor de todos los fieles, vivos y difuntos, y para beneficio de todos, como se expresa claramente en las oraciones del misterio, transmitidas a la Iglesia por los apóstoles conforme al mandato del Señor recibido por ellos.» **[traducción propia asistida por IA desde el griego]** | **PASS — blocker resolved** [verified: scan] |
| Reservation for the dying | «Ἔτι καὶ πρὸ τῆς χρήσεως εὐθὺς μετὰ τὸν ἁγιασμὸν καὶ μετὰ τὴν χρῆσιν τὸ φυλαττόμενον ἐν ταῖς ἱεραῖς θήκαις πρὸς μετάληψιν τῶν ἀποδημῆσαι μελλόντων ἀληθὲς εἶναι τοῦ κυρίου σῶμα, καὶ κατὰ μηδὲν διαφέρον ἑαυτοῦ, ὥστε πρὸ τῆς χρήσεως μετὰ τὸν ἁγιασμόν, ἐν τῇ χρήσει καὶ μετὰ τὴν χρῆσιν, εἶναι κατὰ πάντα τὸ ἀληθὲς τοῦ κυρίου σῶμα.» (p. 461) | «Asimismo, tanto antes del uso, inmediatamente después de la consagración, como después del uso, lo conservado en los sagrados receptáculos para la comunión de quienes están por partir es el verdadero cuerpo del Señor y en nada difiere de sí mismo; de modo que, antes del uso después de la consagración, durante el uso y después del uso, es en todos los aspectos el verdadero cuerpo del Señor.» **[traducción propia asistida por IA desde el griego]** | **PASS — blocker resolved** [verified: scan] |

Facsimiles: [Internet Archive, NYPL copy](https://archive.org/details/monumentafideie00kimmgoog/page/n527/mode/2up) and [Google Books, Lyon Public Library copy, p. 461](https://books.google.com/books?id=eDVAQJuseAEC&pg=PA461). The NYPL gutter cuts initial letters on p. 461; the independent Lyon copy preserves the whole Greek column and controls the complete strings above. OCR was used only to locate the leaves. Kimmel's parallel Latin agrees with Robertson's later English on all three propositions. [verified: scan]

### Present-status documents

| Body / document | Direct witness | Result | Finding |
|---|---|---|---|
| Orthodox Presbyterian Church | [Official WCF, ch. 29](https://opc.org/wcf.html), §§2, 6 | **PASS** | The OPC's current text retains both «most abominably injurious» in §2 and «gross idolatries» in §6. The dossier may therefore describe those phrases as present in this church's received text. [verified] |
| Presbyterian Church in America | [*The Westminster Confession of Faith and Catechisms*, preface](https://www.pcaac.org/wp-content/uploads/2019/11/WCFPreface.pdf), title page and pp. iii–iv | **PASS** | The volume says that the OPC Committee on Christian Education prepared and published the text and that it is republished as the PCA's Confession and Catechisms with approval from the PCA Stated Clerk's office and Christian Education and Publications. This supports saying that the PCA uses this OPC-produced text; it does not justify calling the PDF an independent PCA critical edition. [verified] |
| Church of Scotland | [Act V 1986](https://churchofscotland.org.uk/__data/assets/pdf_file/0014/1823/1986_act_05.pdf), §§1–2 | **PASS** | The act names WCF 29.2, says that the Church «no longer affirms» the listed teaching, and «dissociates itself» from it; it does not name WCF 29.6. The dossier's distinction between §§2 and 6 is therefore required. [verified] |
| Presbyterian Church (U.S.A.) | [*Libro de Confesiones* (2016), preface](https://pcusa.org/sites/default/files/2016-spanish-book-of-confessions-electronic.pdf), p. iii | **PASS** | The Spanish preface says that chapters XXII, XXV and XXIX were modified to remove «lenguaje anacrónico y ofensivo» and that the condemnations do not represent the current PC(USA) position. The draft's status summary preserves that scope. [verified] |
| Iglesia Nacional Presbiteriana de México / El Faro | [*Confesión de Fe y Catecismos* (2001)](https://studylib.es/doc/7353647/confesi%C3%B3n-de-fe), foreword and ch. XXIX | **PASS — qualified** | The foreword records review, approval and support for immediate publication by the denomination's Theology Department acting through the General Assembly; the volume ends at chapter XXXIII and prints the severe ch. XXIX language. This is a denomination-approved published edition, but the located pages are not a constitutional clause selecting one textual edition. The dossier must retain that distinction. [verified] |
| Community of Protestant Churches in Europe | [Leuenberg Agreement, official download page](https://www.leuenberg.eu/download/leuenberg-agreement/), English §§20, 27, 32b and Spanish §§20, 27, 32b | **PASS** | Section 20 makes historical condemnations inapplicable where the stated consensus is held; §27 says the differences are not simply irrelevant but no longer obstruct fellowship; §32b says the condemnations no longer apply to the current doctrinal position of assenting churches. The dossier's ecumenical-status note must preserve all three qualifications. [verified] |
| Lutheran Church—Missouri Synod | [*2023 Handbook*, Constitution art. II](https://idwlcms.org/gotodownloadfile.php?file=1557), p. 13 | **PASS — host qualified** | Article II says that the Synod and every member accept without reservation all the Symbolical Books, including the Formula of Concord. The copy checked is served by an LCMS district rather than `lcms.org`; it supports the content claim but the host must be identified accurately. [verified] |

The PCA preface also states that the proof texts are supplied for convenience and are not part of the constitutional text. That directly supports the dossier's refusal to treat those citations as confessional wording. [verified]

### Editions and reuse status

| Edition / document | Check | Result |
|---|---|---|
| Westminster, Edinburgh 1894 | Title and publication data in the scanned volume; published before 1929 | **PASS.** Public-domain historical print; the dossier must cite the print rather than attribute a new confession to the 1894 publisher. [verified: scan] |
| Westminster, Monterrey 1880 | Title and imprint in the scanned volume; published before 1929 | **PASS.** Public-domain Spanish print. Diplomatic quotations must retain its spelling unless explicitly labelled as modernized. [verified: scan] |
| Trent, López de Ayala, 2nd ed., Madrid 1785 | Title and imprint in the scanned volume; published before 1929 | **PASS.** Public-domain Spanish print. [verified: scan] |
| *Concordia Triglotta*, St. Louis 1921 | Title and imprint in the scanned volume; published before 1929 | **PASS.** Public-domain print. The checked Spanish renderings are new translations from its German column and require their translation label. [verified: scan] |
| Robertson, London 1899 | Title and imprint in the scanned volume; published before 1929 | **PASS.** Public-domain English translation, retained only as corroboration after the Spanish was remade from Greek. [verified: scan] |
| Kimmel, Jena 1850 | Title and imprint in the scanned volume; published before 1929 | **PASS.** Public-domain Greek/Latin print and controlling original-language witness for the three Dositheus clauses. [verified: scan] |
| Current church documents | OPC HTML; PCA, Church of Scotland, PC(USA), Leuenberg and LCMS PDFs/pages | **PASS — limited use.** No broad republication licence was established in this pass. The dossier uses only short phrases or paraphrases with direct links and makes no public-domain claim for them. [not found: reuse licence] |

### Bounded negative searches

Negative results below apply only to the named source universe; none is a claim that no such text exists anywhere.

| Question | Corpus checked | Result |
|---|---|---|
| Public-domain Spanish WLC | The project's source inventory and its Reformed/Spanish-gap reports, including `docs/research/sources.md`, `sources/protestant-magisterial.md` and `sources/spanish-gaps.md`; local dossier/source search for «Catecismo Mayor» / «Larger Catechism» | **NOT FOUND.** The inventory consistently identifies WLC Spanish as an own-translation gap. The dossier may state «no encontrado en el inventario del proyecto», not «no existe». [not found] |
| Separate Westminster answer about urgent communion of the sick or dying | WCF 29.1–8, WLC 168–177 and WSC 96–97 in the checked prints | **NOT FOUND.** The texts reject reservation and describe normal administration but do not give a separate pastoral answer to this case. OB-4's limit is accurate and bounded. [not found] |
| Express Baptist or AG rejection of Westminster's Eucharistic teaching | BF&M 2000 VII, New Hampshire XIV and AG Statement of Fundamental Truths 6, as transcribed and source-controlled in the project maps | **NOT FOUND.** They define the Supper as symbolic/memorial but do not reject the Westminster claims in words. This finding applies to these selected column texts only; it does not describe every Baptist confession. [not found] |
| Constitutional status of Westminster proof texts | PCA/OPC edition preface checked directly | **NOT FOUND as constitutional text; affirmative contrary evidence found.** The preface says the proof texts are supplied for convenience and are not part of the constitutional text. [verified] |
