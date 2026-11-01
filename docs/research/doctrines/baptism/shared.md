# Baptism · shared content for page 02 (`shared.md`)

Status: draft, NOT verified by Pedro

## Progress

- Written 2026-11-01 (research night, session 1). Items B1 and B3 done below; B2 (early witnesses) is appended at the end when done.
- Source of every quote: the five Baptism dossiers in this folder (`catholic.md`, `orthodox.md`, `lutheran.md`, `reformed.md`, `baptist.md`) and the print or official edition each names. Tags are the dossier's own: `[verified: scan]` means the dossier checked it in the named print scan or official page; `[unverified]` means it did not. **Nothing here was re-fetched from the original editions tonight**: the verification of this file is a check against the dossiers and, where the dossier cites a scan, the scan.
- Spanish quotations of Lutheran, Orthodox and Baptist texts are Doctrina's own AI-assisted translations from the original language, unreviewed by Pedro, as in the dossiers.
- Agent's calls: (1) the five dossiers disagree on how much they say about the practice aspects, so each practice cell says «silencio» only where the dossier searched and found the documents it read silent; it never fills a cell with another tradition's words. (2) No claim of «what all share» is made unless a cited text of each of the five says it; where a statement is true of four, it is in «Lo que se discute», not in the common ground. (3) The wording of the three questions was checked against each tradition's own terms (table in §2).

Model followed: `src/content/pages/eucharist/doctrine.es.ts` (`common`, `practice`) and its sources in `data/site/eucharist.v2.json`.

---

## 1. Lo que todas comparten (common ground)

**Draft text for the site (neutral, no tradition's vocabulary, each sentence true of all five and cited):**

> Las cinco tradiciones bautizan con agua en el nombre del Padre, del Hijo y del Espíritu Santo. Todas relacionan el bautismo con una vida nueva. Discrepan sobre a quién se bautiza, sobre qué ocurre en el bautismo y sobre cómo se administra.

Evidence, one row per sentence and tradition (each cell is the tradition's own text):

### 1a. Agua, en el nombre del Padre, del Hijo y del Espíritu Santo

| Tradition | Text | Locator and edition | Tag |
|---|---|---|---|
| Catholic | «se confiere válidamente sólo mediante la ablución con agua verdadera acompañada de la debida forma verbal» | CIC can. 849 (1983), official Spanish, vatican.va; the Latin formula «yo te bautizo…»: CEC 1239–1240 (`catholic.md` CV-5); CIC 854 prescribes only «inmersión o infusión» | `[verified: vatican.va]` (dossier) |
| Orthodox | «τὸ ἅγιον βάπτισμα, τὸ διαταχθὲν μὲν παρὰ τοῦ κυρίου, γινόμενον δὲ ἐν ὀνόματι τῆς ἁγίας τριάδος»; «δι' ὕλης μὲν ὕδατος καθαροῦ». Philaret: «Trine immersion in water, in the name of the Father, and of the Son, and of the Holy Ghost.» | Dositheus XVI, Schaff *Creeds* II p. 425 and opening p. 423; Philaret Q.290, Schaff II p. 491 (Blackmore English) (`orthodox.md` QE-1, QE-2) | `[verified: scan]` (Greek and English); Spanish `[unverified]` |
| Lutheran | «Die Taufe ist nicht allein schlecht Wasser, sondern sie ist das Wasser in Gottes Gebot gefaßt und mit Gottes Wort verbunden.» (SC IV.2). The triune name: the dossier's table row, no German quoted for IV.4 (paraphrase: nombre del Padre, del Hijo y del Espíritu Santo) | SC IV.2 and IV.4, Triglot 1921 p. 550 (`lutheran.md` QE-1 and the «Administration» table) | `[verified: scan]`; Spanish `[unverified]` |
| Reformed | «El elemento exterior que se emplea en este sacramento es el agua, con la cual la parte que lo recibe se bautiza en el nombre del Padre, y del Hijo, y del Espíritu Santo» | WCF 28.2, Monterrey 1880 p. 140 (`reformed.md` QE-2) | `[verified: scan]` |
| Baptist | «Christian Baptism is the immersion in water of a believer, into the name of the Father [and] Son, and Holy Ghost» | New Hampshire Confession art. XIV (1853 wording), McGlothlin 1911 p. 306; BF&M 2000 art. VII (`baptist.md`, «Believers' immersion in the trinitarian name») | `[verified: scan]` |

### 1b. Una vida nueva

| Tradition | Text | Locator and edition | Tag |
|---|---|---|---|
| Catholic | «Por el Bautismo somos liberados del pecado y regenerados como hijos de Dios» ; «hace también del neófito "una nueva creatura"» | CEC 1213; CEC 1265, official Spanish, vatican.va (`catholic.md` QE-2) | `[verified: vatican.va]` |
| Orthodox | «Baptism is a Sacrament, in which a man who believes, having his body thrice plunged in water in the name of God the Father, the Son, and the Holy Ghost, dies to the carnal life of sin, and is born again of the Holy Ghost to a life spiritual and holy.» | Philaret Q.288, Schaff II p. 491 (`orthodox.md`, «Definition») | `[verified: scan]` |
| Lutheran | «ein gnadenreich Wasser des Lebens und ein Bad der neuen Geburt im Heiligen Geist» | SC IV.10, Triglot p. 550 (`lutheran.md` QE-3) | `[verified: scan]`; Spanish `[unverified]` |
| Reformed | «de su regeneracion [...] y de su sumision á Dios por Jesu-Cristo, á fin de andar en novedad de vida» | WCF 28.1, Monterrey 1880 p. 139 (`reformed.md` QE-1) | `[verified: scan]` |
| Baptist | «an act of obedience symbolizing the believer's faith in a crucified, buried, and risen Saviour, the believer's death to sin, the burial of the old life, and the resurrection to walk in newness of life in Christ Jesus» | BF&M 2000 VII, printed p. 8 (`baptist.md`, «Obedience, new life and resurrection») | `[verified: official page bfm.sbc.net/bfm2000/ read by the verifier 2026-11-01]`; the dossier's Spanish is its own paraphrase (not quoted here) |

Not claimed as common ground because it is not true of all five in the documents read: that baptism was instituted by Christ in so many words (Catholic Trent VII can. 1, Reformed WCF 28.1, Orthodox Dositheus XVI «διαταχθὲν παρὰ τοῦ κυρίου» and the Lutheran SA III.5.1 «durch seine Einsetzung befohlen» and Ap IX.52 «iuxta mandatum Christi» say it; the Baptist texts read, NH XIV and BF&M VII, use no institution language, only «act of obedience»); that it admits into the church (Catholic CEC 1213 «incorporados a la Iglesia» and Reformed WCF 28.1 «admitir la persona bautizada en la iglesia visible» say it; BF&M VII and NH XIV make baptism a prerequisite of membership, a different ordering; the Orthodox and Lutheran passages read do not say either); and that it is not repeated (Catholic, Orthodox, Reformed and Lutheran say it; the dossier of the Baptist line does not list repetition among its searched silences, and the BF&M 2000 VII text the verifier read has no sentence on it).

---

## 2. Lo que se discute (neutral questions)

Each question is worded so that no tradition's term frames it. Check against the five dossiers:

| Draft question (es) | Why it is a real disagreement (each tradition's own position, cited) | Terms checked |
|---|---|---|
| **¿A quién se bautiza?** | Catholic: «obligación de hacer que los hijos sean bautizados en las primeras semanas» (CIC 867 §1; `catholic.md` CV-1; Trent V can. 4). Orthodox: infants are baptized «For the faith of their parents and sponsors» (Philaret Q.292). Lutheran: «daß man auch die Kinder taufen soll» (AC IX, p. 46). Reformed: «deben serlo los párvulos cuyos padres son, á lo menos uno de ellos, creyentes» (WCF 28.4). Baptist: «the immersion in water of a believer» (NH XIV; BF&M VII). | No tradition's term in the wording («niños», «creyentes», «infantes» avoided). |
| **¿Qué es el bautismo y para qué se hace?** | Catholic: «significa y realiza ese nacimiento del agua y del Espíritu» (CEC 1215). Orthodox: Dositheus XVI, effects: remission of the ancestral fault and other sins. Lutheran: «Sie wirkt Vergebung der Sünden» (SC IV.6). Reformed: «significa y sella» (WSC 94). Baptist: «symbolizing» (BF&M VII) / «act of obedience». | No effect-language («ocurre», «da», «obra») and neither «sacramento» nor «ordenanza»; the first verifier found «¿Qué ocurre…?» framed the matter in the terms of three traditions and it was replaced. «Para qué se hace» is answered by all five: effects (Catholic, Orthodox, Lutheran), sign and seal (Reformed), obedience and symbol (Baptist). |
| **¿Con qué modo se administra?** | Mode: Catholic «por inmersión o por infusión» (CIC 854); Orthodox «Trine immersion» (Philaret Q.290); Reformed «La inmersion de la persona en el agua no es necesaria; sino que se administra rectamente el bautismo por la aspersion ó por la efusion del agua sobre la persona.» (WCF 28.3, Monterrey 1880 p. 140); Baptist immersion (NH XIV). Lutheran: no statement on mode in the passages the dossier read (SC IV, LC IV.10, 33–38, 56–60, 73–83; LC IV.78 speaks of pouring water without prescribing a mode): `no consultado`, read LC IV.1–83 before saying anything. The question of who administers is in §3 only (answered by three traditions). | «Modo» is not tied to a theology. A three-way question (Lutheran and Baptist cells empty) is a practice point, not a «discute». |

**Dependent questions («Lo que depende de esto», optional, each stated by the tradition's own texts):**

- *Si el bautismo se pide para la Cena:* Baptist: baptism a prerequisite to the Supper and church membership (NH XIV; BF&M VII, `baptist.md`). Catholic: the bautizado receives the other sacraments after (CEC 1213, «la puerta que abre el acceso a los otros sacramentos»). Link to the Eucharist page.
- *Si se reconoce el bautismo de otra tradición:* Catholic: «Los bautizados en una comunidad eclesial no católica, no deben ser bautizados bajo condición, a no ser que haya un motivo serio para dudar» (CIC 869 §2; `catholic.md` CV-7; UR 22). Orthodox: Dositheus XV p. 423 says people who received baptism despite deficient faith are not baptized again after acquiring full faith; the reception of converts is treated as a separate point in the dossier (Oros 1755 and the 1484/1667 acts not collated: `orthodox.md` QE-6). Link to the unity of the Church and the Papacy pages where their texts speak to it.
- *Si el perdón y la vida nueva dependen del bautismo:* Catholic (CEC 1263), Lutheran (SC IV.6), Reformed (WCF 28.1) and Baptist (BF&M VII) answer differently; the connection is to Justification (not yet a page).

---

## 3. Cómo se vive: practice comparison (B3)

Aspects aligned across the five traditions; each cell is the document's own direction, not an observation of what congregations do (all five dossiers say so). `silencio` = the documents the dossier read say nothing; `no consultado` = the dossier did not read a text that could answer. Locators are the dossier's.

| Aspect | Catholic | Orthodox | Lutheran | Reformed | Baptist |
|---|---|---|---|---|---|
| **Quién recibe** | Niños: «en las primeras semanas» (CIC 867 §1); adultos tras el catecumenado (CIC 851 1°, 865) | Infantes «For the faith of their parents and sponsors» (Philaret Q.292, Blackmore English); el creyente que profesa la fe antes (Q.291) | Niños: la gracia y la promesa no se niegan por la edad (paráfrasis del dossier de AC IX; Ap IX.52); se los lleva con oración para que Dios dé la fe (LC IV.57) | Profesantes y «párvulos cuyos padres son, a lo menos uno de ellos, creyentes» (WCF 28.4; WSC 95) | Un creyente (NH XIV; BF&M 1925 XIII, 1963/2000 VII) |
| **Material y fórmula** | Agua verdadera y «debida forma verbal» (CIC 849, 854); fórmula latina «yo te bautizo…» (CEC 1239–1240) | Agua pura, ningún otro líquido (Dositheus XVI p. 425); nombre de la Trinidad | Agua unida a la Palabra, nombre del Padre, Hijo y Espíritu Santo (SC IV.2, IV.4) | Agua, en el nombre del Padre, del Hijo y del Espíritu Santo (WCF 28.2; WSC 94) | Agua, nombre del Padre, del Hijo y del Espíritu Santo (NH XIV; BF&M VII) |
| **Modo** | «por inmersión o por infusión» (CIC 854) | Triple inmersión (Philaret Q.290; Q.288) | LC IV menciona tres acciones y no prescribe ninguna: «poured upon» (IV.36), «sprinkled» (IV.45, IV.78), «sunk under the water» (IV.65, IV.78) (texto inglés de la transcripción web del Triglot, leído entero 2026-11-01; el alemán y la página impresa no se colacionaron) | «La inmersion de la persona en el agua no es necesaria; sino que se administra rectamente el bautismo por la aspersion ó por la efusion del agua sobre la persona» (WCF 28.3, Monterrey 1880 p. 140) | Inmersión (NH XIV; BF&M VII) |
| **Quién administra** | El ministro ordinario; en caso de necesidad, «cualquier persona que tenga la debida intención» (CIC 861; CEC 1256) | «Solamente el sacerdote»; ante necesidad ineludible, otra persona ortodoxa con la intención apropiada (Dositheus XVI p. 425) | no consultado (dossier read only the catechisms' wording) | «un ministro del evangelio debidamente autorizado» (WCF 28.2, Monterrey 1880 p. 140) | silencio en los artículos leídos (`baptist.md` B-07) |
| **Repetición** | «no pueden reiterarse» (CIC 845 §1); «no puede ser reiterado» (CEC 1272); si hay duda, bajo condición (CIC 869) | «Baptism can not be repeated» (Philaret Q.303); recepción de conversos: pregunta aparte (Dositheus XV) | No se requiere otro derramar de agua; el arrepentimiento es volver al bautismo (paráfrasis del dossier de LC IV.78–79; LC IV.77: «Darum bleibt die Taufe immerdar stehen») | «El sacramento del bautismo no debe administrarse á la misma persona mas de una vez» (WCF 28.7, Monterrey 1880 p. 145) | no consultado (el dossier no lista la repetición entre sus silencios; BF&M 2000 VII no tiene frase sobre ella) |
| **Después del bautismo** | Renovación anual de las promesas en la Vigilia Pascual (CEC 1254); confirmación y Eucaristía (CEC 1233, 1244) | Los padrinos responden por la fe del bautizado y, después, se hacen cargo de él para afirmarlo en la fe (paráfrasis del dossier de Philaret Q.295) | Vida diaria de contrición y arrepentimiento (SC IV.12; LC IV.77–79) | Consideración seria y agradecida de su bautismo durante toda la vida (paráfrasis del dossier de WLC 167) | Requisito para la membresía y la Cena (NH XIV; BF&M VII) |

Notes:

- The Orthodox «Modo» and «Después del bautismo» cells quote a 19th-century Russian catechism (Philaret 1839) whose status as a modern body's present rule is not established here; the dossier says the same (`orthodox.md`, «Cómo se vive»). The Euchologion baptism rite was not read (`orthodox.md` O-08).
- The Lutheran «Quién administra» cell is empty because the Small Catechism's title (SC IV, «como el padre de familia debe enseñarlo») concerns teaching, not administration (`lutheran.md`, «Teaching in the household»).
- Reformed cell «Después del bautismo»: WLC 167's phrases are the dossier's own AI-assisted Spanish from the English; unreviewed.

## 4. Coverage

| Section | Status | What was searched |
|---|---|---|
| Common ground | full for two sentences (water and trinitarian name; a new life); every claim has a text of each tradition | the five dossiers' Qué enseña |
| Lo que se discute | three questions | the five dossiers' Qué enseña and Cómo se vive; neutral wording checked in §2 |
| Practice comparison | six aspects; Lutheran minister and Baptist minister/repetition left empty | the five dossiers' Cómo se vive; no field evidence |
| Early witnesses | §6 below (B2): ANF scans only; the NPNF stretch (c. 256–749) is listed, not quoted | ANF vols. 1, 3, 5, 7 OCR (archive.org); `neutral/writers-*.md` for dates |

## 6. Testigos neutrales de los primeros siglos (B2)

Status: draft, NOT verified by Pedro. Scope tonight: quotations from the **Ante-Nicene Fathers** (ANF) volumes, checked string by string against the archive.org OCR of the 1885–1886 Buffalo printings (Christian Literature Publishing Company; American reprint of the Edinburgh edition, ed. Roberts and Donaldson), and cleaned only of footnote marks and OCR slips (each slip is named). **The Nicene and Post-Nicene volumes (c. 256–749) were not quoted that night** (their archive.org text answered HTTP 401 then); a first stretch is quoted in the section «Nicene and Post-Nicene stretch (session A, 2026-11-01)» below, from archive.org scans that answered on the afternoon of 2026-11-01. The later witnesses not yet quoted are listed in the full list below with the tag `[memory]` or `[source: …]` and need a dated edition before use.

Rules applied (DECISIONS 2026-10-09, three levels): the **Spanish** under each quote is Doctrina's own translation **from the public-domain English of the ANF edition** (level 3, as in the Eucharist witnesses), labelled «asistida por IA, sin revisar por Pedro». No older printed Spanish edition was searched. The editors' footnotes and bracketed notes of the ANF volumes (several are polemical, written by A. C. Coxe) are **never quoted**: only the translated text. Pages are not claimed: ANF pagination is not readable in the OCR with certainty; locators are the work's own divisions (chapter or section as the ANF prints them). Dates come from `docs/research/neutral/writers-to-325.md` and carry that file's tags (most are `[memory]` there).

### Witnesses quoted

**B-W1 · Didache 7.1–3** · anonymous · date: range c. 50–150 (`writers-to-325.md` §2.2 `[verified: WP]`, positions listed there). `fingerprint-dates.md` uses the tick c. 100 and the detail range c. 50–120 for the same text: the two files disagree on the range; the source file for the range is `writers-to-325.md`, for the tick `fingerprint-dates.md`  
Edition: *The Teaching of the Twelve Apostles*, in *The Ante-Nicene Fathers* vol. 7 (Buffalo, 1886), ch. VII, as printed in archive.org `antenicenefather07buff`. `[verified: ANF 7 scan OCR, exact string]`  
Quote (en): «And concerning baptism, thus baptize ye: Having first said all these things, baptize into the name of the Father, and of the Son, and of the Holy Spirit, in living water. But if thou have not living water, baptize into other water; and if thou canst not in cold, in warm. But if thou have not either, pour out water thrice upon the head into the name of Father and Son and Holy Spirit.»  
Spanish (Doctrina, AI-assisted from the ANF English, unreviewed): «Y en cuanto al bautismo, bautizad así: habiendo dicho antes todas estas cosas, bautizad en el nombre del Padre y del Hijo y del Espíritu Santo, en agua viva. Pero si no tienes agua viva, bautiza en otra agua; y si no puedes en fría, en tibia. Pero si no tienes ninguna de las dos, derrama agua tres veces sobre la cabeza en el nombre del Padre, del Hijo y del Espíritu Santo.»  
Surrounding paragraph: the same chapter continues: «But before the baptism let the baptizer fast, and the baptized, and whatever others can; but thou shalt order the baptized to fast one or two days before.» OCR note: the ANF text prints «thus baptize ye:» with a footnote mark after «baptism».  
Why it fits a neutral list: earliest description of the rite outside the New Testament; names water, name and the alternative of pouring; says nothing on infants.

**B-W2 · Justin Martyr, *First Apology* 61** · date: use the range 148–161 with the tick c. 155 (BiblIndex, via `open-tags-verification.md` Baptism row 1, «Période 148-161»; `fingerprint-dates.md` Baptism section decides c. 155). `writers-to-325.md` §2.11 gives c. 150–155 `[memory]`, which no edition supports  
Edition: Justin, *The First Apology*, tr. M. Dods and G. Reith, ANF vol. 1 (Buffalo, 1885), ch. LXI, archive.org `antenicenefather01buff`. `[verified: ANF 1 scan OCR, exact string]`  
Quote (en): «Then they are brought by us where there is water, and are regenerated in the same manner in which we were ourselves regenerated. For, in the name of God, the Father and Lord of the universe, and of our Saviour Jesus Christ, and of the Holy Spirit, they then receive the washing with water.»  
Spanish (Doctrina, AI-assisted, unreviewed): «Luego los llevamos adonde hay agua y nacen de nuevo de la misma manera en que nosotros mismos nacimos de nuevo. Pues en el nombre de Dios, Padre y Señor del universo, y de nuestro Salvador Jesucristo, y del Espíritu Santo, reciben entonces el lavado con agua.»  
Surrounding paragraph: the chapter opens «As many as are persuaded and believe that what we teach and say is true, and undertake to be able to live accordingly, are instructed to pray and to entreat God with fasting, for the remission of their sins that are past, we praying and fasting with them», quotes John 3:5 and Isaiah 1:16–20, and continues «there is pronounced over him who chooses to be born again, and has repented of his sins, the name of God the Father and Lord of the universe». OCR slips cleaned: «(jod» → «God», «[rile]» is the OCR of the translator's bracketed word and is left out of the quote.

**B-W3 · Tertullian, *On Baptism* 18** · date: show c. 200 with the range 198–208 (BKV record CPL 8, «Date 198-208»; `writers-to-325.md` §2.19 says c. 198–203 `[memory]`)  
Edition: Tertullian, *On Baptism*, tr. S. Thelwall, ANF vol. 3 (Buffalo, 1885), ch. XVIII, archive.org `antenicenefather03buff`. `[verified: ANF 3 scan OCR, exact string]`  
Quote (en): «And so, according to the circumstances and disposition, and even age, of each individual, the delay of baptism is preferable; principally, however, in the case of little children.»  
Spanish (Doctrina, AI-assisted, unreviewed): «Y así, según las circunstancias y la disposición, e incluso la edad, de cada persona, es preferible retrasar el bautismo; principalmente, sin embargo, en el caso de los niños pequeños.»  
Surrounding paragraph: it goes on to ask «Why does the innocent period of life hasten to the "remission of sins?"», quotes «Forbid them not to come unto me» and says the unmarried should also wait «until they either marry, or else be more fully strengthened for continence». It speaks of delay, not of refusal,   
Neutrality note: of the five Baptism dossiers only the Catholic one cites early Fathers (Augustine, Justin, Ambrose, Tertullian, Irenaeus, Gregory of Nazianzus); the Orthodox, Lutheran, Reformed and Baptist dossiers cite almost none. This text is chosen because it speaks of delay of baptism for little children, so it is cited by writers on both sides of the infant-baptism question; no claim is made that it is the earliest such text. Not assigned to any modern tradition.

**B-W4 · Cyprian, Epistle LVIII (ANF numbering; Letter 64 in Hartel's numbering), to Fidus, 6** · date c. 253, council of Carthage (`writers-to-325.md` §2.24: letters 250–258 `[memory]`; the ANF heading of the letter says it is the reply of a council to Fidus on the baptism of infants before the eighth day) `[unverified: year not read in a dated edition tonight]`; the ANF numbers it Epistle LVIII, other editions 64 (a repo note, `sources/overlooked-era.md` row 16, says 64: not an edition, so `[unverified]`)  
Edition: Cyprian, *Epistles*, tr. R. E. Wallis, ANF vol. 5 (Buffalo, 1886), Epistle LVIII ch. 6, archive.org `antenicenefather05buff`. `[verified: ANF 5 scan OCR, exact string]` (Epistle LVIII is the ANF's numbering)  
Quote (en): «And therefore, dearest brother, this was our opinion in council, that by us no one ought to be hindered from baptism and from the grace of God, who is merciful and kind and loving to all. Which, since it is to be observed and maintained in respect of all, we think is to be even more observed in respect of infants and newly-born persons.»  
Spanish (Doctrina, AI-assisted, unreviewed): «Por tanto, queridísimo hermano, este fue nuestro parecer en el concilio: que por nosotros nadie sea impedido del bautismo y de la gracia de Dios, que es misericordioso, bondadoso y amante con todos. Y puesto que esto ha de observarse y mantenerse respecto de todos, pensamos que ha de observarse aún más respecto de los niños y recién nacidos.»  
OCR slips cleaned: «Cod» → «God»; the OCR reads «clearest brother», read as «dearest» against the closing line «dearest brother» of the same letter (the ANF printing may read «dearest»; to be checked on the page image).  
Surrounding paragraph: the letter answers Fidus's question whether an infant may be baptized before the eighth day, as circumcision; the council's opinion is the one quoted. Spacing out of context omitted, and the passage closes «We bid you, dearest brother, ever heartily farewell».

### Witnesses quoted, Nicene and Post-Nicene stretch (session A, 2026-11-01)

Status: draft, NOT verified by Pedro. Same rules as above (quotation from the dated English edition, string-matched in the archive.org OCR; slips named; the **Spanish is Doctrina's own AI-assisted rendering from the NPNF English, unreviewed**; editors' footnotes and bracketed notes never quoted except where a line says so; locators are the work's own divisions; page numbers are given only where the OCR running head was read, and are not collated on a page image). Editions used (all *A Select Library of Nicene and Post-Nicene Fathers of the Christian Church*, ed. Philip Schaff (First Series) and Philip Schaff and Henry Wace (Second Series); archive.org scans whose title pages were read): **First Series vol. IV**, Buffalo: The Christian Literature Company, 1887 (`selectlibraryofn04auguuoft`); **Second Series vol. VII**, New York: The Christian Literature Company; Oxford and London: Parker & Company, 1894 (`selectlibraryofn07schauoft`; Cyril tr. E. H. Gifford, Gregory tr. C. G. Browne and J. E. Swallow); **Second Series vol. X**, Oxford: James Parker and Company; New York: The Christian Literature Company, 1896 (`nicenepostnicene10unknuoft`; Ambrose tr. H. de Romestin with E. de Romestin and H. T. F. Duckworth); **Second Series vol. XIV**, New York: Charles Scribner's Sons; Oxford and London: Parker & Company, 1900 (`selectlibraryofn14schauoft`; ed. Henry R. Percival). The dates are those the edition prints; where it prints none, the line says so.

**B-W5 · Cyril of Jerusalem, *Catechetical Lectures*, Procatechesis 16** · date: Lent 348 as the editor's conditional inference, not a printed date (E. H. Gifford, Introduction p. xliv: «if Dr. Routh is correct in fixing the date of the Disputation … the Lent in which the Lectures were delivered must have been, as Touttée decides, that of 348, not of 347, as Tillemont had supposed») `[verified: NPNF2 7 Introduction, OCR; the date itself is an inference]`  
Edition: NPNF Series 2 vol. VII (1894), Procatechesis § 16. `[verified: NPNF2 7 scan OCR, exact string]`  
Quote (en): «Great is the Baptism that lies before you: a ransom to captives; a remission of offences; a death of sin; a new-birth of the soul; a garment of light; a holy indissoluble seal; a chariot to heaven; the delight of Paradise; a welcome into the kingdom; the gift of adoption!»  
Spanish (Doctrina, AI-assisted from the NPNF English, unreviewed): «Grande es el bautismo que tenéis por delante: rescate de cautivos; remisión de ofensas; muerte del pecado; nuevo nacimiento del alma; vestidura de luz; sello santo e indisoluble; carro hacia el cielo; delicia del Paraíso; acogida en el reino; don de la adopción.»  
OCR slips cleaned: the footnote mark after «you». Page: OCR running head «PROCATECHESIS. 5».  
Why it fits a neutral list: it lists what baptism gives, said to those about to receive it.

**B-W6 · Council of Nicaea, canon 19** · date: A.D. 325 (the page heading of the edition, «I. NICE. A.D. 325») `[verified: NPNF2 14 heading, OCR]`  
Edition: NPNF Series 2 vol. XIV (1900), the Canons of the 318 Holy Fathers, Canon XIX. `[verified: NPNF2 14 scan OCR, exact string]`  
Quote (en): «Concerning the Paulianists who have flown for refuge to the Catholic Church, it has been decreed that they must by all means be rebaptized; and if any of them who in past time have been numbered among their clergy should be found blameless and without reproach, let them be rebaptized and ordained by the Bishop of the Catholic Church; but if the examination should discover them to be unfit, they ought to be deposed.»  
Spanish (Doctrina, AI-assisted, unreviewed): «Respecto de los paulianistas que se han refugiado en la Iglesia Católica, se ha decretado que deben ser rebautizados en todo caso; y si alguno de ellos que en tiempo pasado haya sido contado entre su clero fuere hallado irreprochable y sin tacha, sea rebautizado y ordenado por el obispo de la Iglesia Católica; pero si el examen los descubriere no aptos, deben ser depuestos.»  
OCR slips cleaned: «fiowu» read «flown», «rebajitized» read «rebaptized» (check on the page image). The canon gives no reason for rebaptizing this group. Not assigned to any modern tradition.

**B-W7 · Gregory of Nazianzus, *Oration* 40 (On Holy Baptism), § 17** · date: «Preached at Constantinople Jan. 6, 381» (the translators' heading) `[verified: NPNF2 7 heading, OCR]`  
Edition: NPNF Series 2 vol. VII (1894), Oration XL, § XVII. `[verified: NPNF2 7 scan OCR, exact string]`  
Quote (en): «Have you an infant child? Do not let sin get any opportunity, but let him be sanctified from his childhood; from his very tenderest age let him be consecrated by the Spirit. Fearest thou the Seal on account of the weakness of nature? O what a small-souled mother, and of how little faith!»  
Spanish (Doctrina, AI-assisted, unreviewed): «¿Tienes un hijo pequeño? No dejes que el pecado encuentre ocasión alguna, sino que sea santificado desde la infancia; desde su más tierna edad sea consagrado por el Espíritu. ¿Temes el Sello por la debilidad de la naturaleza? ¡Oh, qué madre de poca alma y de cuán poca fe!»  
The same oration discusses delay of baptism in other sections (not quoted here). Not assigned to any modern tradition.

**B-W8 · Augustine, *On Baptism, against the Donatists* IV, chap. 24 (§ 32)** · date: «Circa, A.D. 400» (the volume's table of contents) `[verified: NPNF1 4 contents, OCR]`  
Edition: NPNF Series 1 vol. IV (1887), book IV chap. 24. `[verified: NPNF1 4 scan OCR, exact string]`  
Quote (en): «And if any one seek for divine authority in this matter, though what is held by the whole Church, and that not as instituted by Councils, but as a matter of invariable custom, is rightly held to have been handed down by apostolical authority, still we can form a true conjecture of the value of the sacrament of baptism in the case of infants, from the parallel of circumcision»  
Spanish (Doctrina, AI-assisted, unreviewed): «Y si alguien busca autoridad divina en este asunto, aunque lo que sostiene toda la Iglesia, y no como instituido por concilios sino como costumbre invariable, con razón se tiene por transmitido por autoridad apostólica, aun así podemos conjeturar con acierto el valor del sacramento del bautismo en el caso de los niños, a partir del paralelo de la circuncisión»  
Surrounding text: chap. 23 (§ 31) contains «And this is the firm tradition of the universal Church, in respect of the baptism of infants, who certainly are as yet unable …» and ends «… and yet no Christian will say that they are baptized to no purpose»; chap. 24 then continues with Abraham and Cornelius after the passage quoted. Page: OCR running head 461 (not collated). The quotation is closed without a full stop because the sentence goes on.

**B-W9 · Council of Carthage, African Code, Canon CX (Greek CXII bis)** · date: the Code's page heading reads «AFRICAN CODE. A.D. 419»; the edition's note says Canon CIX «is Canon j. of that synod» (Carthage, May 1, A.D. 418), and the note on Canon CX prints «This is Canon ij. of Carthage, A.D. 418 [Greek Canon 112]» (p. 497) `[verified: NPNF2 14 headings and notes, OCR and page image]`  
Edition: NPNF Series 2 vol. XIV (1900), the Code of Canons of the African Church, Canon CX. `[verified: NPNF2 14 scan OCR, exact string]`  
Quote (en): «Likewise it seemed good that whosoever denies that infants newly from their mother's wombs should be baptized, or says that baptism is for remission of sins, but that they derive from Adam no original sin, which needs to be removed by the laver of regeneration, from whence the conclusion follows, that in them the form of baptism for the remission of sins, is to be understood as false and not true, let him be anathema.»  
Spanish (Doctrina, AI-assisted, unreviewed): «Asimismo pareció bien que quien niegue que los niños recién salidos del vientre de sus madres deban ser bautizados, o diga que el bautismo es para remisión de los pecados pero que ellos no derivan de Adán ningún pecado original que deba ser quitado por el baño de la regeneración, de donde se sigue que en ellos la forma del bautismo para la remisión de los pecados ha de entenderse como falsa y no verdadera, sea anatema.»  
OCR slips cleaned: «ba})tized» → «baptized», «whieh» → «which». The canon continues with a reading of Romans 5:12 «than the Catholic Church everywhere diffused has always understood it» (not quoted). Settles the row «Carthage 418 can. 2» of the list below for the English text: the edition numbers it Canon CX and its note calls it «Canon ij. of Carthage, A.D. 418».

**B-W10 · Ambrose, *On the Mysteries* (ch. 5, § 28)** · date: the edition's Introduction says the treatise «was composed for use during Lent, but in what year cannot be fixed, possibly, from reference made to the treatise De Patriarchis, about A.D. 387» `[verified: NPNF2 10 Introduction, OCR]`  
Edition: NPNF Series 2 vol. X (1896), *Concerning the Mysteries*, § 28 (the chapter number is the dossier's reading of the OCR, to check). `[verified: NPNF2 10 scan OCR, exact string]`  
Quote (en): «You went down, then (into the water), remember what you replied to the questions, that you believe in the Father, that you believe in the Son, that you believe in the Holy Spirit.»  
Spanish (Doctrina, AI-assisted, unreviewed): «Descendisteis, pues (al agua); recordad lo que respondisteis a las preguntas: que creéis en el Padre, que creéis en el Hijo, que creéis en el Espíritu Santo.»  
Surrounding text: the next sentences say the statement is not «a greater and … a less and … a lowest person»; not quoted. Not assigned to any modern tradition.

**Rows of the list below touched by this stretch** (the table below keeps its earlier statuses; read the stretch above for the update). *Constantinople I, «creed; canon 7»*: the edition prints as canon 7 a text on receiving heretics (Arians, Macedonians, Novatians, Eunomians and others) with a note quoting Hefele (*History of the Councils* II, p. 368), who says that «Beveridge is probably right in conjecturing that the canon was only an extract from this letter to Martyrius; therefore in no way a decree of the second General Council, nor even of the Synod of 382, but at least eighty years later than the latter», and that the Quinisext Synod adopted it as its canon 95 `[verified: NPNF2 14 note, OCR]`; this is a scholar's conjecture reported by the edition, so the row is not settled, only better documented; the creed's baptism clause «We acknowledge one baptism for the remission of sins» is in the Council's own creed in the same volume (p. 163) and in Epiphanius's variant; it was not quoted. *Ambrose, «De sacramentis; De mysteriis»*: NPNF2 10's Prolegomena lists *De Sacramentis* «among works more or less doubtful … admitted by the Benedictines, but rejected, and apparently on sufficient grounds, by Ihm», and the volume contains *On the Mysteries* only `[verified: NPNF2 10 contents and Prolegomena, OCR]`; the table's «c. 387–391» is not what the edition says (it says possibly «about A.D. 387»). *Gregory, Oration 40*: the heading prints «Preached at Constantinople Jan. 6, 381»; the same volume's Oration 39 Introduction places Oration 40 on the day after Epiphany, so the day is not settled; the infant passage is § XVII.

### Full list of early texts on baptism (for page 10; to c. 749)

`[source: …]` = already read in a dossier or neutral file; `[memory]` = standard works from memory, **locator and date to verify against a dated edition before use**; all are listed so the importer sees the range, not as claims.

| Text | Author | Date (c.) | Locator | Status |
|---|---|---|---|---|
| Didache | anon. | 50–150 | 7 | quoted above `[verified: ANF 7 scan]` |
| *First Apology* | Justin | 150–155 | 61, 65 | quoted above (61) |
| *Demonstration of the Apostolic Preaching* | Irenaeus | 177–200 (BiblIndex) | 3 | `[source: catholic.md PQ-5 and Cierre]`: «El Bautismo, en efecto, es el sello de la vida eterna» (dossier's quote, not re-read); *Against Heresies* 2.22.4 and 3.17 `[memory]` |
| *On Baptism* | Tertullian | 198–203 | 1–20 (18 quoted) | quoted above |
| *Apostolic Tradition* | pseudo-Hippolytus | c. 215 or layered | 20–21 | `[source: writers-to-325.md, Apostolic Tradition row]` for the work and date; the locator 20–21 is `[memory]`; authorship and date disputed |
| Homilies on Leviticus; Commentary on Romans | Origen | c. 240–250 | Hom. Lev. 8.3; Comm. Rom. 5.9 | `[memory]`; Latin of Rufinus |
| Epistles on baptism | Cyprian | 250–258 | Ep. LVIII (ANF; 64 in Hartel) to Fidus; the rebaptism letters Ep. 69–75; *Sententiae episcoporum* (256) | LVIII.6 quoted above; the rest `[memory]` |
| Nicaea I canons | council | 325 | 19 (canon 8 `[memory]`) | canon 19 `[source: fingerprint-dates.md]`; text not read tonight |
| *Catechetical Lectures* | Cyril of Jerusalem | c. 350 | 3, Mystagogical 1–2 | `[source: neutral/writers-greek-syriac.md]` (situated Jerusalem cycle; authorship of the Mystagogical set debated) |
| Constantinople I | council | 381 | creed; canon 7 | `[unverified]` |
| *Oration* 40 | Gregory of Nazianzus | 381 (`fingerprint-dates.md`, NPNF note); dossier range 379–383 | 40.3–4 (as quoted in CEC 1216, Catholic dossier); §28 `[memory]` | `[source: catholic.md]` for the locator; 381 `[source: fingerprint-dates.md]` |
| *De sacramentis*; *De mysteriis* | Ambrose | c. 387–391 | De sacr. 2 | `[source: Catholic dossier PQ-5 area and neutral/writers-latin.md]` |
| *Baptismal Catecheses* | John Chrysostom | c. 390 | 3 | `[memory]` |
| *On Baptism against the Donatists* | Augustine | c. 400 | 4.24 | `[memory]` |
| Carthage 418 | council | 418 | can. 2 | `[memory]`: the Catholic dossier says only that Carthage 418 and Orange II were not read |
| Trullo | council | 692 | 95 | `[verified: Fordham/NPNF: year only]` |
| *Exposition of the Orthodox Faith* | John of Damascus | c. 743 | 4.9 | `[memory]` |

## 7. Verification

Verifier pass, 2026-11-01 (night), Sonnet. Method: `docs/playbooks/verification-pass.md`. Scratch (outside the repo): `~/codex-night1101-scratch/v1/` (ANF OCR text files, `tools/q.py` exact-string check of every «...» in §1–§3 against the five dossiers, `tools/anf.py` exact-string check of the §6 quotes).

### Progress

- DONE: §1 (1a, 1b, common-ground sentences, «not claimed» paragraph), §2 (five positions per question, neutral wording), §3 (all 30 cells), §6 (four ANF quotes, Spanish renderings, dates, translators, surrounding-paragraph quotes), the full list of early texts (17 rows).
- Not reached: nothing skipped. Limits: (a) the dossier tags `[verified: scan]` were taken from the dossiers, not re-collated against the page images (the brief asked for a check against the dossiers); (b) the Triglot (Lutheran) could not be re-read: the archive.org full text found under the dossier's item id is a different volume (historical introductions), so no German original was re-read tonight; (c) the Mogila, Euchologion and Oros texts were not read.
- Extra sources used tonight (all public or official): vatican.va, Código de Derecho Canónico, Spanish (`cic_libro4_cann840-848`, `cann849`, `cann850-860`, `cann861-863`, `cann864-871`, fetched 2026-11-01); the official BF&M 2000 page `https://bfm.sbc.net/bfm2000/` (art. VII); archive.org OCR of ANF vols. 1, 3, 5 and 7 (`antenicenefather01buff`, `03buff`, `05buff`, `07buff`), with second copies `antenicenefather05robe` (vol. 5) and `antenicenefather007robe` (vol. 7) to resolve OCR slips.

### Legend

- CONFIRMED: the quoted string (or the claim) matches the file/URL named.
- WRONG: does not match; the correct wording and its source are given.
- UNCONFIRMABLE: cannot be checked with the sources available tonight; reason given.
- Item IDs (`V..`) are in file order. «dossier» = one of the five Baptism dossiers; line numbers are those of `shared.md` as read at the start of this pass.

### §1 Lo que todas comparten

- V01 · 1a Catholic, CIC can. 849 quote (l. 28) · CONFIRMED · `catholic.md` («...se confiere válidamente sólo mediante la ablución con agua verdadera acompañada de la debida forma verbal.») and the official Spanish page vatican.va `cic_libro4_cann849_sp.html`: same string.
- V02 · 1a Catholic, formula «yo te bautizo en el nombre del Padre, y del Hijo y del Espíritu Santo» (l. 28) · CONFIRMED as text (`catholic.md` CV-5: «N., yo te bautizo en el nombre del Padre, y del Hijo y del Espíritu Santo»).
- V03 · 1a Catholic, locator of that formula, «CIC can. 854 and CEC 1239–1240» · WRONG (minor) · CIC 854 reads «El bautismo se ha de administrar por inmersión o por infusión, de acuerdo con las normas de la Conferencia Episcopal» (vatican.va `cann850-860`) and contains no formula; in the dossier the formula is under CEC 1239–1240 (CV-5). Correct locator: CEC 1239–1240 (CV-5) only.
- V04 · 1a Orthodox, Greek «τὸ ἅγιον βάπτισμα, τὸ διαταχθὲν μὲν παρὰ τοῦ κυρίου, γινόμενον δὲ ἐν ὀνόματι τῆς ἁγίας τριάδος» (Dositheus XVI opening, p. 423) · CONFIRMED · `orthodox.md` QE-1, same string, `[verified: scan]`.
- V05 · 1a Orthodox, «δι' ὕλης μὲν ὕδατος καθαροῦ» (Dositheus XVI p. 425) · CONFIRMED · `orthodox.md` QE-2.
- V06 · 1a Orthodox, Philaret Q.290 «Trine immersion in water, in the name of the Father, and of the Son, and of the Holy Ghost.» · CONFIRMED · `orthodox.md` QE-2, p. 491.
- V07 · 1a Lutheran, SC IV.2 «Die Taufe ist nicht allein schlecht Wasser, sondern sie ist das Wasser in Gottes Gebot gefaßt und mit Gottes Wort verbunden.» (Triglot p. 550) · CONFIRMED against the dossier (`lutheran.md` QE-1, `[verified: scan]`); German original not re-read (see Progress).
- V08 · 1a Lutheran, «The name: «Father, Son and Holy Spirit»» (SC IV.4) · WRONG (form) · not a quotation of SC IV.4: it is the English wording of a row in the dossier's «Administration and recipients» table («Name | Father, Son and Holy Spirit | SC IV.4, p. 550 [verified: scan]»). The dossier quotes no German for IV.4. Fix: drop the guillemets and write «nombre del Padre, del Hijo y del Espíritu Santo (dossier, SC IV.3–4)», or quote the German of SC IV.4 from the Triglot first.
- V09 · 1a Reformed, WCF 28.2 «El elemento exterior ... Espíritu Santo» (Monterrey 1880 p. 140) · CONFIRMED · `reformed.md` QE-2 (the dossier's quote continues «por un ministro del evangelio debidamente autorizado»; the clip ends at a clause break, acceptable).
- V10 · 1a Baptist, NH XIV «Christian Baptism is the immersion in water of a believer, into the name of the Father [and] Son, and Holy Ghost» (McGlothlin p. 306) · CONFIRMED · `baptist.md`, same string. Note: «[and]» is McGlothlin's bracket for an 1853 addition (dossier, p. 301 convention), not a Doctrina editorial insertion; the cell does not say so.
- V11 · 1b Catholic, CEC 1213 «Por el Bautismo somos liberados del pecado y regenerados como hijos de Dios» · CONFIRMED · `catholic.md` line 71.
- V12 · 1b Catholic, CEC 1265 «hace también del neófito "una nueva creatura"» · CONFIRMED · `catholic.md` QE-2 (CEC 1265 quote).
- V13 · 1b Orthodox, Philaret Q.288 · CONFIRMED · `orthodox.md` «Definition», p. 491, string-exact.
- V14 · 1b Lutheran, SC IV.10 «ein gnadenreich Wasser des Lebens und ein Bad der neuen Geburt im Heiligen Geist» · CONFIRMED · `lutheran.md` QE-3.
- V15 · 1b Reformed, WCF 28.1 «de su regeneracion [...] y de su sumision á Dios por Jesu-Cristo, á fin de andar en novedad de vida» · CONFIRMED · `reformed.md` QE-1; the single [...] hides «de la remision de sus pecados [...]» of the dossier's longer quote (acceptable).
- V16 · 1b Baptist, «Simboliza su fe en Cristo crucificado, sepultado y resucitado, su muerte al pecado, la sepultura de la vida anterior y una vida nueva en Cristo» · WRONG (form), content CONFIRMED · it is the dossier's own paraphrase, set between guillemets as if it were a quotation (the cell's tag column does say it is a paraphrase). Content check against the official text, `bfm.sbc.net/bfm2000/` art. VII, fetched tonight: «It is an act of obedience symbolizing the believer's faith in a crucified, buried, and risen Saviour, the believer's death to sin, the burial of the old life, and the resurrection to walk in newness of life in Christ Jesus.» The paraphrase is faithful. Fix: remove the guillemets (it is labelled attributed paraphrase) or quote the English sentence above (short excerpt policy in `baptist.md`).
- V17 · 1b Baptist, «act of obedience» · CONFIRMED · same official text, `baptist.md` B-05.
- V18 · Common ground, sentence 1 («bautizan con agua en el nombre del Padre, del Hijo y del Espíritu Santo») · CONFIRMED for all five · Catholic: CIC 849 + CEC 1240 (V01, V02); Orthodox: Dositheus XVI + Philaret Q.290 (V04–V06); Lutheran: SC IV.2 + IV.4 (`lutheran.md` table and Escritura row «Matthew 28:19 | SC IV.3–4 | Institution and the triune name»); Reformed: WCF 28.2; Baptist: NH XIV and BF&M VII («in the name of the Father, the Son, and the Holy Spirit»). Caveat: the Lutheran evidence is the dossier's table, not a quoted German sentence (V08).
- V19 · Common ground, sentence 2 («Todas relacionan el bautismo con una vida nueva: con morir al pecado y comenzar una vida en Cristo») · WRONG (true of fewer than five) · against the texts cited in §1b: «en Cristo» is explicit only for the Baptist (BF&M VII «newness of life in Christ Jesus») and, in the dossier but not in the cited cell, for the Reformed («ingerida en Cristo», WCF 28.1) and Catholic (CEC 1213 «miembros de Cristo»); the Orthodox cell says «born again of the Holy Ghost to a life spiritual and holy» and the Lutheran cell «Bad der neuen Geburt im Heiligen Geist» (Spirit, not Christ). «Morir al pecado» is absent from the cited Lutheran (SC IV.10) and Reformed (WCF 28.1) cells; it is in the dossiers elsewhere (Lutheran SC IV.12 «sterben mit allen Sünden», `lutheran.md` QE-6; Reformed WLC 167 «mortifying of sin», `reformed.md` PQ-4) and in the Orthodox Q.288 and Baptist VII. Catholic cell: «liberados del pecado» only (CEC 1227 «sepultado y resucita con Él» is in the dossier but not cited here). Suggested safe sentence: «Todas relacionan el bautismo con una vida nueva (nuevo nacimiento, novedad de vida)», and move «morir al pecado» and «en Cristo» to the cells that say them, adding SC IV.12 and WLC 167 as rows if the longer sentence is wanted.
- V20 · «Not claimed» paragraph, reason given for «instituted by Christ»: «the Lutheran ... text read say «Gottes Gebot»» · WRONG (reasoning; the conclusion «not common ground» still stands because of the Baptist) · `lutheran.md` PQ-1 quotes SA III.5.1 «Die Taufe ist nichts anderes denn Gottes Wort im Wasser, durch seine Einsetzung befohlen» (p. 490, `[verified: scan]`) and Ap IX.52 «iuxta mandatum Christi, Matth. 28, 19» (p. 244): the Lutheran texts do say «Einsetzung/mandatum Christi». Fix: say that the Baptist texts read (NH XIV, BF&M VII) do not use institution language, and drop the Lutheran claim.
- V21 · «Not claimed», «Catholic Trent VII can. 1» as saying baptism is instituted by Christ · CONFIRMED with note · `catholic.md` QE-1 quotes Trent VII can. 1 of the canons **on the sacraments in general** («Sacramenta novae legis non fuisse omnia a Jesu Christo ... instituta»), not a baptism canon; the cell reads as if it were baptism-specific.
- V22 · «Not claimed», «that it admits to the church (Catholic CEC 1213, Reformed WCF 28.1, Baptist BF&M VII say it...)» · WRONG (Baptist) · CEC 1213 says «incorporados a la Iglesia» and WCF 28.1 «admitir la persona bautizada en la iglesia visible», but BF&M VII (official text above) says baptism is «prerequisite to the privileges of church membership and to the Lord's Supper»: a condition for membership, not an admission. NH XIV likewise makes it prerequisite (dossier). Fix: name only Catholic and Reformed for «admits», and state the Baptist ordering separately (as the «Lo que depende de esto» list already does).
- V23 · «Not claimed», «that it is not repeated (the Baptist selected articles are silent)» · UNCONFIRMABLE · the dossier's silence claims (B-07 in `verification-baptist.md`) list administrator qualifications, numerical age, course, venue, schedule and observed practice; repetition is not among them. The dossier says it read NH XIV, BF&M 1925 XIII and 1963/2000 VII in full, so the silence is probable, but no dossier line states it. I read the official BF&M 2000 VII text tonight: it contains no sentence on repetition; NH XIV was not re-read.

### §2 Lo que se discute

- V24 · Q1 Catholic, CIC 867 §1 «obligación de hacer que los hijos sean bautizados en las primeras semanas» · CONFIRMED · `catholic.md` CV-1 and vatican.va `cann864-871`: «Los padres tienen obligación de hacer que los hijos sean bautizados en las primeras semanas» (867 §1).
- V25 · Q1 Orthodox, Philaret Q.292 «For the faith of their parents and sponsors» · CONFIRMED · `orthodox.md` QE-4, p. 492.
- V26 · Q1 Lutheran, AC IX «daß man auch die Kinder taufen soll» (p. 46) · CONFIRMED · `lutheran.md` QE-2 (German).
- V27 · Q1 Reformed, WCF 28.4 «deben serlo los párvulos cuyos padres son, á lo menos uno de ellos, creyentes» · CONFIRMED · `reformed.md` QE-3 (with «sino tambien» before «deben»; p. 142).
- V28 · Q1 Baptist, «the immersion in water of a believer» (NH XIV; BF&M VII) · CONFIRMED for NH XIV (V10). BF&M VII's own order is «the immersion of a believer in water» (official text): the string as quoted is NH's, so the «NH XIV; BF&M VII» pair is exact only for NH.
- V29 · Q2 Catholic, CEC 1215 «significa y realiza ese nacimiento del agua y del Espíritu» · CONFIRMED · `catholic.md` QE-1.
- V30 · Q2 Orthodox, Dositheus XVI effects: remission of the ancestral fault and other sins · CONFIRMED · `orthodox.md` QE-3.
- V31 · Q2 Lutheran, SC IV.6 «Sie wirkt Vergebung der Sünden» · CONFIRMED · `lutheran.md` Definition (p. 550).
- V32 · Q2 Reformed, WSC 94 «significa y sella» · CONFIRMED · `reformed.md` Definition (Monterrey p. 204).
- V33 · Q2 Baptist, «symbolizing» (BF&M VII) · CONFIRMED against the official page only · the word does not occur in `baptist.md` (which has «Simboliza», its paraphrase); it occurs verbatim in the official art. VII («an act of obedience symbolizing the believer's faith...»), `bfm.sbc.net/bfm2000/`, fetched tonight. Add that URL as the locator.
- V34 · Q2 wording «¿Qué ocurre en el bautismo?», and the claim «"Ocurre" does not presuppose that it effects» · WRONG (judgment, neutrality) · «qué ocurre» presupposes an occurrence beyond the act, which is the Catholic, Orthodox and Lutheran frame («Sie wirkt», «ἀποτελέσματα», «significa y realiza»); the Baptist cell answers a different question (what the act expresses and whose command it obeys: «symbolizing», «act of obedience») and the Reformed one is «significa y sella». The question frames the matter in the terms of three traditions. Candidate neutral wordings to test: «¿Qué es el bautismo y para qué se hace?» or «¿Qué significa el bautismo y qué da, si algo da?» (the second still presupposes giving: prefer the first). Needs Pedro's choice.
- V35 · Q3 Catholic, CIC 854 «por inmersión o por infusión» · CONFIRMED · vatican.va `cann850-860` (the canon continues «de acuerdo con las normas de la Conferencia Episcopal», omitted).
- V36 · Q3 Orthodox, «Trine immersion» (Q.290) · CONFIRMED (V06).
- V37 · Q3 Reformed, «pouring or sprinkling» rightly administer it, immersion not necessary (WCF 28.3) · CONFIRMED in substance, WRONG in form (minor) · the guillemets enclose English words that are not in any dossier: the dossier quotes the Monterrey Spanish (`reformed.md` QE-4: «La inmersion de la persona en el agua no es necesaria; sino que se administra rectamente el bautismo por la aspersion ó por la efusion del agua sobre la persona.», p. 140, `[verified: scan]`). Quote that Spanish.
- V38 · Q3 Baptist, immersion (NH XIV) · CONFIRMED (V10).
- V39 · Q3 «Lutheran: the Small and Large Catechisms read are silent on mode. The Lutheran silence is stated, not filled.» · UNCONFIRMABLE · `lutheran.md` states no silence on mode; its coverage row for LC IV is «IV.10, 33–38, 56–60, 73–83». The only mode-relevant item it reports is LC IV.78 «another pouring with water is not required», which uses pouring language. The Catholic dossier (log) lists LC IV.65 as used in OB-4, outside the Lutheran dossier's range. From memory (not verified): Luther's LC IV has a passage on the word «Taufe» and dipping; read LC IV.1–83 in the Triglot before writing «silencio».
- V40 · «Terms checked», Q3 wording «con qué modo y por quién» · UNCONFIRMABLE as neutral · the minister half is answered by three traditions only (Catholic, Orthodox, Reformed); the Lutheran cell is «no consultado» and the Baptist «silencio». A question asked of five traditions that two cannot answer from the documents read is not a «lo que se discute» of five. Suggest splitting «modo» and «quién administra», or marking the minister question as three-way.
- V41 · Q1 wording «¿A quién se bautiza?» · CONFIRMED as neutral · uses none of «niños», «creyentes», «infantes» (checked: those words occur only in tradition cells).
- V42 · Dependent questions, Baptist: baptism prerequisite to the Supper and membership (NH XIV; BF&M VII) · CONFIRMED · official BF&M VII; `baptist.md`.
- V43 · Dependent questions, Catholic CEC 1213 «la puerta que abre el acceso a los otros sacramentos» · CONFIRMED · `catholic.md` line 71.
- V44 · Dependent questions, CIC 869 §2 «...a no ser que haya un motivo serio para dudar» · CONFIRMED, clipped · vatican.va `cann864-871`: «...para dudar de la validez de su bautismo, atendiendo tanto a la materia y a la fórmula...». The cell ends the quote at «para dudar» with no ellipsis; add «[…]» or end at «bautismo».
- V45 · Dependent questions, Orthodox: reception of converts is «a distinct question» (Dositheus XV p. 423) · WRONG (form) · the words are the dossier's own section heading («Reception of converts remains a distinct question», `orthodox.md` QE-6), not Dositheus's and not an Orthodox self-description. The Dositheus XV statement actually read says people who had received baptism despite deficient faith are not baptized again after acquiring full faith. Fix: remove the guillemets and state the Dositheus content.
- V46 · Dependent questions, last bullet lists Catholic, Lutheran, Reformed, Baptist · CONFIRMED but incomplete · Orthodox (Dositheus XVI, remission) is omitted from a list that says «answer differently»; add it or say «four of five».

### §3 Practice comparison (30 cells)

- V47 · Catholic · Quién recibe · CONFIRMED (CIC 867 §1; CIC 851 1°, 865 §1: `catholic.md` CV-1, CV-3).
- V48 · Catholic · Material y fórmula · CONFIRMED (CIC 849 «debida forma verbal»; CEC 1239–1240).
- V49 · Catholic · Modo · CONFIRMED (CIC 854).
- V50 · Catholic · Quién administra · CONFIRMED (CIC 861 §2 «cualquier persona que tenga la debida intención», vatican.va `cann861-863`; CEC 1256).
- V51 · Catholic · Repetición «no puede reiterarse» (CIC 845, 869; CEC 1272) · WRONG · neither source has that string. CIC 845 §1 (vatican.va `cann840-848`): «Los sacramentos del bautismo, de la confirmación y del orden imprimen carácter y, por tanto, no pueden reiterarse.» CEC 1272: «Dado una vez por todas, el Bautismo no puede ser reiterado.» The string «no puede reiterarse» is the Catholic dossier's own CV-7 wording (`catholic.md` CV-7 puts it in quotation marks too: the dossier needs the same fix). Correct: «no pueden reiterarse» (CIC 845 §1) or «no puede ser reiterado» (CEC 1272).
- V52 · Catholic · Después del bautismo · CONFIRMED (CEC 1254; 1233, 1244: `catholic.md` CV-10, CV-11).
- V53 · Orthodox · Quién recibe · CONFIRMED (Q.292 string-exact; Q.291 «Repentance and faith; for which cause, also, before Baptism they recite the Creed»).
- V54 · Orthodox · Material y fórmula · CONFIRMED (Dositheus XVI p. 425, `orthodox.md` QE-2; the Spanish is the dossier's AI rendering).
- V55 · Orthodox · Modo · CONFIRMED (Q.290; Q.288 «having his body thrice plunged in water»).
- V56 · Orthodox · Quién administra «Solamente el sacerdote» · CONFIRMED · `orthodox.md` «The appointed minister»: «Lo realiza solamente el sacerdote» (AI rendering of the Greek `διὰ μόνου τοῦ ἱερέως`; the cell's guillemets enclose Doctrina's own Spanish, not a printed edition).
- V57 · Orthodox · Repetición «Baptism can not be repeated» (Q.303) · CONFIRMED · `orthodox.md` QE-5: «In this sense: that Baptism can not be repeated.»
- V58 · Orthodox · Después del bautismo (paraphrase of Q.295) · CONFIRMED · fair paraphrase of «In order that they may stand sureties ... and after Baptism may take him in charge, to confirm him in the faith.»
- V59 · Lutheran · Quién recibe (AC IX; Ap IX.52; LC IV.57) · CONFIRMED (`lutheran.md` table «Children», «Faith and prayer»).
- V60 · Lutheran · Material y fórmula · CONFIRMED (SC IV.2, IV.4; table).
- V61 · Lutheran · Modo «silencio ... (LC IV.78 habla de «otro derramar de agua» sin prescribir modo)» · UNCONFIRMABLE · see V39; additionally the guillemets enclose Doctrina's own Spanish of the dossier's English paraphrase («another pouring with water is not required»), not a quotation of LC IV.78, and the cited passage speaks of pouring, which cuts against «sin prescribir modo».
- V62 · Lutheran · Quién administra «no consultado» · CONFIRMED · `lutheran.md` «Teaching in the household» («not permission for every householder to administer»); no dossier row covers the minister.
- V63 · Lutheran · Repetición (LC IV.77 «Darum bleibt die Taufe immerdar stehen»; LC IV.78–79) · CONFIRMED · `lutheran.md` «Baptism remains; repentance returns to it».
- V64 · Lutheran · Después del bautismo (SC IV.12; LC IV.77–79) · CONFIRMED (`lutheran.md` QE-6; table).
- V65 · Reformed · Quién recibe · CONFIRMED (WCF 28.4; WSC 95). The cell writes «a lo menos» where the Monterrey print has «á lo menos» (`reformed.md` QE-3): orthography modernised inside guillemets.
- V66 · Reformed · Material y fórmula · CONFIRMED (WCF 28.2; WSC 94).
- V67 · Reformed · Modo (cell calls it «paráfrasis del dossier de WCF 28.3: citar el Monterrey 1880 p. 140 antes de publicar») · CONFIRMED, and the instruction is already satisfiable: `reformed.md` QE-4 prints the verbatim Spanish with `[verified: scan]` (V37).
- V68 · Reformed · Quién administra «un ministro del evangelio debidamente autorizado» (WCF 28.2, p. 140) · CONFIRMED · `reformed.md` QE-2.
- V69 · Reformed · Repetición (cell: paraphrase of WCF 28.7) · CONFIRMED, and quotable: `reformed.md` QE-7 «El sacramento del bautismo no debe administrarse á la misma persona mas de una vez.» (p. 145, `[verified: scan]`).
- V70 · Reformed · Después del bautismo (paraphrase of WLC 167) · CONFIRMED · «serious and thankful consideration», «all our life long» (`reformed.md` QE-7, Cómo se vive).
- V71 · Baptist · Quién recibe · CONFIRMED (`baptist.md` Cómo se vive).
- V72 · Baptist · Material y fórmula · CONFIRMED (same; official VII «in the name of the Father, the Son, and the Holy Spirit»).
- V73 · Baptist · Modo · CONFIRMED (NH XIV «immersion in water»).
- V74 · Baptist · Quién administra «silencio» · CONFIRMED · `baptist.md` table «Who administers? silent», B-07.
- V75 · Baptist · Repetición «silencio en los artículos leídos» · UNCONFIRMABLE · see V23.
- V76 · Baptist · Después del bautismo (requisite for membership and Supper; NH XIV; BF&M VII) · CONFIRMED (official VII). Note: the aspect is «Después del bautismo» but the cell lists a precondition of membership, not a practice after baptism; it fits the column loosely.
- V77 · Notes under the table: «Lutheran Quién administra empty because SC IV's title concerns teaching» · CONFIRMED · `lutheran.md` «Teaching in the household». «Orthodox cells quote a 19th-century Russian catechism (Philaret 1839)» · CONFIRMED · `orthodox.md` Grado de autoridad.

### §6 Early witnesses (ANF)

Texts: archive.org OCR `antenicenefather01buff`, `03buff`, `05buff` and, for the Didache, `07buff` plus the second copy `antenicenefather007robe` for the words the first OCR garbles. All strings below were searched after joining hyphenated line breaks and collapsing whitespace.

- V78 · B-W1 Didache 7.1–3, English quote · CONFIRMED · `anf7.txt` (`07buff`) reads «CHAP. VII. — CONCERNING BAPTISM, And concerning baptism,' 5 thus baptize ye : ... Having first said all these things, baptize into the name of the Father, and of the Son, and of the Holy Spirit,'^ in living water.'** But if thou 2 have not living water, baptize into other water ; and if thou canst not in cold, in warm. But if 3 thou have not either, pour out water thrice '^ upon the head into the name of Father and Son and Holy Spirit.» The only differences are footnote marks and verse numerals (1, 2, 3), which the file strips. The file names only one footnote mark; there are about eight, none of which touches a word.
- V79 · B-W1 Didache, «Surrounding paragraph» quote «But before the baptism let the baptizer fast, and the baptized, and whatever others can; but thou shalt order the baptized to fast one or two days before.» · CONFIRMED · `07buff` garbles «baptizer» (`-ibapti/.cr`) and «baptized» (`bai)tized`); the second copy `antenicenefather007robe` reads «let the 4 baptizer fast, and the baptized, and whatever others can ; but thou shalt order the baptized to fast one or two days before.» The «exact string» tag for this OCR needs the note that two words were read from a second copy.
- V80 · B-W1 Spanish · CONFIRMED · faithful; no addition or omission. «bautizad ... bautiza» switch between plural and singular follows the English «baptize ye» / «if thou have not».
- V81 · B-W1 date «range c. 50–150, tick c. 100 (writers-to-325.md §2.2 [verified: WP])» · CONFIRMED for the range, UNCONFIRMABLE for the tick · `writers-to-325.md` §2.2: «Range c. 50–150 ... [verified: WP]», with positions from c. 50–70 to c. 110–120; it gives no «tick c. 100». The tick c. 100 and a different detail range «c. 50–120» are in `fingerprint-dates.md` (rows l. 86, 127), so the two files disagree on the range (50–150 vs 50–120). Pick one and cite its file.
- V82 · B-W2 Justin, First Apology 61, English quote · CONFIRMED · `anf1.txt`: «Then they are brought by us where there is water, and are regenerated in the same manner in which we were ourselves regenerated. For, in the name of God, the Father and Lord of the universe, and of our Saviour Jesus Christ, and of the Holy Spirit, they then receive the washing with water.» (preceded by «CHAP. LXI. — CHRISTIAN BAPTISM.»).
- V83 · B-W2 surrounding quotes («As many as are persuaded ... we praying and fasting with them» and «there is pronounced over him who chooses to be born again, and has repented of his sins, the name of God the Father and Lord of the universe») · CONFIRMED · first string-exact; second string-exact except OCR «(jod» for «God», which the file names.
- V84 · B-W2 Spanish · CONFIRMED with one note · faithful; «regenerated» is rendered «nacen de nuevo» (and «regenerated» twice more the same way), which turns a technical term into the John 3 idiom; acceptable, but a reader comparing with the English will not see «regenerados». No addition.
- V85 · B-W2 date c. 150–155 (`writers-to-325.md` §2.11, `[memory]`) and the note that `open-tags-verification.md` finds only «Période 148-161» · CONFIRMED (both) · `writers-to-325.md` row «c. 150–155 ... [memory]»; `open-tags-verification.md` Baptism row 1 «“Période 148-161.”», status UNCONFIRMABLE as that narrow range. Conflict: `fingerprint-dates.md` l. 128 decides «show c. 155 with the range 148–161, not 150–155»; §6 still leads with 150–155.
- V86 · B-W2 translators «M. Dods and G. Reith» · CONFIRMED · `anf1.txt`: «the following Introductory Note of the able translators, Messrs. Dods and Reith»; chapter LXI is under the First Apology (ANF contents: First Apology p. 159).
- V87 · B-W3 Tertullian, On Baptism 18, English quote · CONFIRMED · `anf3.txt`: «And so, according to the circumstances and disposition, and even age, of each individual, the delay of baptism is preferable; principally, however, in the case of little children.» (in the chapter before «CHAP. XIX»).
- V88 · B-W3 surrounding quotes («Why does the innocent period of life hasten to the "remission of sins?"», «Forbid them not to come unto me», «until they either marry, or else be more fully strengthened for continence») · CONFIRMED · string-exact in `anf3.txt`.
- V89 · B-W3 Spanish · CONFIRMED · faithful («little children» → «niños pequeños», «age» → «edad»).
- V90 · B-W3 date c. 198–203 (`writers-to-325.md` §2.19, `[memory]`) · CONFIRMED as what that file says (row «De baptismo | 8 | c. 198–203 ... [memory]»). Conflict: `fingerprint-dates.md` l. 130 for this very work: «The record gives only “3rd century” ... [unverified: no dated edition states c. 200]. Do not use the narrower sibling date of De paenitentia (198–204)», tick c. 200, detail 200–206 from a review. §6's 198–203 is the narrow range that file warns against. `[memory]` is stated, but the page importer should use «c. 200 [unverified]».
- V91 · B-W3 «CPL 8 per the Bibliotheca Augustana record» · CONFIRMED · `fingerprint-dates.md` l. 130 cites the BKV record `bkv.unifr.ch/en/works/cpl-8/versions/de-baptismo`; translator S. Thelwall CONFIRMED (`anf3.txt`: «ON BAPTISM. [TRANSLATED BY THE REV. S. THELWALL.]»).
- V92 · B-W3 Neutrality note: «Catholic, Orthodox, Lutheran and Reformed dossiers cite other early texts for infant baptism, and the Baptist dossier none of these» · WRONG · counting patristic names in the dossiers: `catholic.md` cites Augustine, Justin, Ambrose, Tertullian, Irenaeus, Gregory of Nazianzus (via CEC); `orthodox.md` mentions only Basil (Krivoshein context) and Philaret's Dionysius for sponsors; `lutheran.md` quotes Augustine only for «word to the element»; `reformed.md` and `baptist.md` cite no Father. So only the Catholic dossier cites early texts, and not on infant baptism specifically as far as read here. Fix: state what is true («only the Catholic dossier cites patristic texts for baptism; none of the five cites a text for infant baptism from before Tertullian») after checking, or delete the sentence.
- V93 · B-W3 «the earliest text in this list that mentions little children and baptism» / «the earliest explicit mention» · UNCONFIRMABLE · no source in the file; the list itself contains Irenaeus (c. 180–189, earlier than Tertullian) with a passage commonly read as mentioning infants being «born again» (Against Heresies 2.22.4, from memory, not read tonight), which Baptist and other readers dispute as a reference to baptism. A historical priority claim made from memory on a disputed text should be dropped or cited.
- V94 · B-W4 Cyprian, Epistle LVIII 6, English quote · CONFIRMED · `anf5.txt` reads «6. And therefore, clearest brother, this was our opinion in council, that by us no one ought to be hindered from baptism and from the grace of Cod, who is merciful and kind and loving to all. Which, since it is to be observed and maintained in respect of all, we think is to be even more observed in respect of infants and newly-born persons, who ...». OCR slips «clearest» and «Cod», both named by the file.
- V95 · B-W4 «dearest» (the file says «to be checked on the page image») · CONFIRMED · the second archive.org copy of vol. 5, `antenicenefather05robe`, reads «And therefore, dearest brother, this was our opinion in council» (same American reprint). The check the file asked for is done.
- V96 · B-W4 Spanish · CONFIRMED · faithful («misericordioso, bondadoso y amante», «niños y recién nacidos» for «infants and newly-born persons»).
- V97 · B-W4 «We bid you, dearest brother, ever heartily farewell» and the ANF heading (reply of a council to Fidus on infant baptism before the eighth day) · CONFIRMED · `anf5.txt`: «EPISTLE LVIII ... TO FIDUS, ON THE BAPTISM OF INFANTS. ARGUMENT ... THAT AN INFANT MUST NOT BE BAPTIZED BEFORE THE EIGHTH DAY ...» (OCR partly garbled), «Cyprian, and others his colleagues who were present in council, in number sixty six, to Fidus».
- V98 · B-W4 «Letter 64 in Hartel's numbering» · UNCONFIRMABLE against an edition · ANF vol. 5 does not print the Hartel number in the OCR; the repo file `docs/research/sources/overlooked-era.md` row 16 says «Letters 63 ... 64 (infant baptism, Fidus)». That is a repo note, not an edition.
- V99 · B-W4 date c. 253 · CONFIRMED as labelled `[unverified]` · `writers-to-325.md` §2.24 gives only «Epistulae 250–258 [memory]»; the file says so. The ANF heading carries no year.
- V100 · B-W4 translator «R. E. Wallis» · CONFIRMED · `anf5.txt`: «CYPRIAN. [TRANSLATED BY THE REV. ERNEST WALLIS, Ph.D.]».
- V101 · §6 header: editors, Buffalo 1885–1886, «American reprint of the Edinburgh edition» · CONFIRMED · title page in `anf1.txt` and `05robe`: «THE REV. ALEXANDER ROBERTS, D.D., AND JAMES DONALDSON, LL.D., EDITORS. AMERICAN REPRINT OF THE EDINBURGH EDITION ... BY A. CLEVELAND COXE». Years 1885 (vols. 1, 3) and 1886 (vols. 5, 7) come from `writers-to-325.md` §2.0, not from the OCR.

### Full list of early texts (17 rows)

- V102 · Didache, 50–150, ch. 7 · CONFIRMED (V78, V81).
- V103 · First Apology, 150–155, ch. 61, 65 · CONFIRMED · ch. 61 (V82); ch. 65 exists, «CHAP. LXV. — ADMINISTRATION OF THE SACRAMENTS» (`anf1.txt`). Date: see V85.
- V104 · Irenaeus, `[memory]`, «the first is cited in the Catholic dossier's PQ-5 area: not re-read» · WRONG (for the note) · `catholic.md` PQ-5 and Cierre cite Irenaeus's *Demonstratio* 3 («El Bautismo, en efecto, es el sello de la vida eterna», dated 177–200, BiblIndex), not *Against Heresies* 2.22.4. The locators 2.22.4 and 3.17 stay `[memory]` and unverified. Date 180–189 is `writers-to-325.md` `[memory]`.
- V105 · Tertullian, 198–203, ch. 1–20 · CONFIRMED for «1–20» (`anf3.txt` runs to «CHAP. XX»); date: see V90.
- V106 · Apostolic Tradition, `[source: writers-to-325.md, Apostolic Tradition row]`, 20–21 · CONFIRMED for the work, date and «baptismal rite with creed questions» (row «if Hippolytus', c. 215; else a layered text of the 2nd–4th c.»); UNCONFIRMABLE for the locator «20–21», which is not in that file.
- V107 · Origen, `[memory]` · not checked (no tag claims a source); locators Hom. Lev. 8.3 and Comm. Rom. 5.9 look standard but are unverified here.
- V108 · Cyprian, Ep. LVIII; 69–75; Sententiae (256) · CONFIRMED · LVIII (V94); `writers-to-325.md` §2.24 «Sententiae episcoporum LXXXVII ... 1 Sept. 256»; in ANF the rebaptism group is Ep. LXIX–LXXV (OCR headings «LXIX TO JANUARIUS ... ON BAPTIZING HERETICS», «LXX TO QUINTUS, CONCERNING THE BAPTISM OF HERETICS», «LXXII TO JUBAIANUS», «LXXV TO MAGNUS, ON BAPTIZING THE NOVATIANS»), so «69–75» holds in both numberings as a range, though individual numbers differ between ANF and Hartel.
- V109 · Nicaea I canons 8, 19, 325, `[source: fingerprint-dates.md]` · WRONG (partly) · `fingerprint-dates.md` has only «Nicaea I, canon 19 (Paulinists) | 325 | ... Canon 19 text not re-read tonight.» (l. 131) and the council row (l. 23); canon 8 is not in it. Either drop «8» or retag it `[memory]`.
- V110 · Cyril of Jerusalem, c. 350, Cat. 3, Mystagogical 1–2, `[source: neutral/writers-greek-syriac.md]` · CONFIRMED with note · row «Procatechesis and Catecheses 1–18 | commonly 348–350» and «Mystagogical Catecheses 1–5 | c. 350–390 | attribution to Cyril or his successor John II remains disputed» (§2.4); the cell's single «c. 350» fits the Catecheses only; the parenthesis about the debated authorship is there.
- V111 · Constantinople I, 381, creed; canon 7, `[unverified]` · CONFIRMED as labelled · `fingerprint-dates.md` l. 132: «[unverified: the CCEL page did not return the council's text ...; 381 is the conventional year]».
- V112 · Gregory of Nazianzus, Oration 40, 381, locator 28, `[source: Catholic dossier QE-/PQ-5, via CEC 1216]` · WRONG (tag does not match) · `catholic.md` cites «Oratio 40, 3-4 ... quoted in CEC 1216», and dates it «379–383» (map row for Orations 38–40, 45). The locator «28» and the year 381 are not in the Catholic dossier; 381 (preached 6 January 381) is `fingerprint-dates.md` l. 133, which carries its own NPNF-note source. Correct: locator «40.3–4 (CEC 1216)» for the dossier, and cite `fingerprint-dates.md` for 381; keep «28» only with its own tag.
- V113 · Ambrose, c. 387–391, De sacr. 2, `[source: Catholic dossier PQ-5 area and neutral/writers-latin.md]` · CONFIRMED · `catholic.md` «De sacramentis 2, 2, 6, c. 387–391, authorship once disputed»; `writers-latin.md` l. 83 «De mysteriis; De sacramentis | c. 387–391 ... Sacramentis was disputed».
- V114 · Chrysostom, c. 390, 3; Augustine, c. 400, 4.24; John of Damascus, c. 743, 4.9 · not checked (`[memory]` rows; no source claimed). Locators look standard; not verified.
- V115 · Carthage 418, can. 2, `[source: Catholic dossier, «not read»]` · UNCONFIRMABLE · the Catholic dossier only says «Carthage 418 and Orange II (map 4.E) on infant baptism and original sin: not read (their DH ranges are unconfirmed in the map)»; neither the date 418 nor «can. 2» is established there. `fingerprint-dates.md` l. 173 also lists Carthage 418 as not ticked. The tag cites a source that does not contain the item's locator.
- V116 · Trullo, 692, can. 95, `[verified: Fordham/NPNF: year only]` · CONFIRMED · `fingerprint-dates.md` l. 135: «Page: “in the year 692, fifth indiction” ... canon 95 itself not reached in the fetch»; the tag says «year only» and that is accurate.

### Wrong items

1. V19 · Common-ground sentence 2 is not true of all five cited texts («en Cristo», «morir al pecado»). Highest priority: it is the text meant for the public page.
2. V20 · «Not claimed»: the Lutheran texts do say «Einsetzung» / «mandatum Christi» (SA III.5.1, Ap IX.52).
3. V22 · «Not claimed»: Baptist BF&M VII makes baptism a prerequisite of membership; it does not say baptism admits to the church.
4. V34 · Q2 wording «¿Qué ocurre en el bautismo?» frames the matter in the effect-language of three traditions; the claim that «ocurre» is neutral does not hold.
5. V92 · B-W3 neutrality note: only the Catholic dossier cites patristic texts; the claim about Orthodox, Lutheran and Reformed is false.
6. V51 · Catholic Repetición «no puede reiterarse»: not the wording of CIC 845 («no pueden reiterarse») or CEC 1272 («no puede ser reiterado»); same slip in `catholic.md` CV-7.
7. V08 · Lutheran «Father, Son and Holy Spirit» is the dossier's table wording, not a quotation of SC IV.4.
8. V16 · Baptist paraphrase set in guillemets (content faithful to the official text).
9. V45 · «a distinct question» is the dossier's heading, not an Orthodox text.
10. V03 · CIC 854 is not the locator of the formula (CEC 1239–1240 is).
11. V37 · «pouring or sprinkling» in guillemets: English words not in any dossier; quote the Monterrey Spanish.
12. V104 · Irenaeus note: the Catholic dossier cites *Demonstratio* 3, not *Against Heresies* 2.22.4.
13. V109 · Nicaea I canon 8 is not in `fingerprint-dates.md`.
14. V112 · Gregory of Nazianzus locator 28 / year 381 do not come from the tagged Catholic dossier (it gives Or. 40, 3-4 and 379–383).

### Unconfirmable

- V23, V75 · Baptist silence on repetition: not stated in the dossier; probable on the BF&M text, NH XIV not re-read.
- V39, V61 · Lutheran «silent on mode»: not stated in the dossier; the passage cited uses pouring language; LC IV.65 and neighbours outside the dossier's coverage (Triglot not re-readable tonight).
- V40 · Q3 as a five-way question (minister part answerable by three).
- V81 · Didache «tick c. 100» is in `fingerprint-dates.md`, not in `writers-to-325.md`; the two files give different detail ranges (50–150 vs 50–120).
- V93 · «earliest explicit mention» of little children and baptism: no source; Irenaeus 2.22.4 is earlier and disputed.
- V98 · Cyprian Letter 64 in Hartel numbering: only a repo note.
- V106 · Apostolic Tradition chapters 20–21: not in the cited file.
- V115 · Carthage 418 can. 2: the cited dossier says «not read».
- V107, V114 · `[memory]` rows (Origen, Chrysostom, Augustine, John of Damascus) not checked: no source is claimed.

### Date conflicts to resolve in the file (not errors of quoting)

- Didache: §6 says 50–150 (`writers-to-325.md`); `fingerprint-dates.md` says 50–120.
- Justin: §6 headline 150–155; `fingerprint-dates.md` and `open-tags-verification.md` say 148–161 (tick c. 155).
- Tertullian *De baptismo*: §6 198–203; `fingerprint-dates.md` says use c. 200 `[unverified]`, not the sibling 198–204.

### Outside this file

- `docs/research/doctrines/baptism/catholic.md` CV-7: «no puede reiterarse» is in quotation marks but is neither CIC 845 §1 nor CEC 1272 (V51).
- `docs/research/doctrines/baptism/lutheran.md`: add a sentence on SC IV.4 (German) and check LC IV.1–83 for mode before any page says «silencio».
- `docs/research/doctrines/fingerprint-dates.md` and `writers-to-325.md` give different Didache ranges (V81).

### Count

- 116 items (V01–V116). CONFIRMED 90 (this includes «with note», «clipped» and «CONFIRMED but incomplete» cases), WRONG 14 (V03, V08, V16, V19, V20, V22, V34, V37, V45, V51, V92, V104, V109, V112; V16 and V37 are wrong in form only, their content holds), UNCONFIRMABLE 10 (V23, V39, V40, V61, V75, V81 and V106 in part, V93, V98, V115), not checked 2 (V107, V114: `[memory]` rows with no source claimed). An item with two verdicts is counted under its first.

### Corrections applied by the coordinator (2026-11-01, after this pass)

Applied in the text above: V03 (formula locator), V08, V16 (BF&M VII now quoted from the official page the verifier read), V19 (common-ground sentence 2 cut to «Todas relacionan el bautismo con una vida nueva»), V20, V22, V23/V75 (Baptist repetition cell now `no consultado`), V34 (question 2 reworded «¿Qué es el bautismo y para qué se hace?»), V37 (WCF 28.3 quoted in the Monterrey Spanish), V39/V61 (Lutheran mode cell now `no consultado`), V40 (minister question moved out of «Lo que se discute» into §3 only), V45, V51, V69 (WCF 28.7 quoted), V81/V85 (date conflicts stated, source file named for each), V92, V93, V98, V104, V106, V109, V112, V115. Not applied because outside this file: the same «no puede reiterarse» slip in `catholic.md` CV-7, and that `lutheran.md` never says the catechisms are silent on mode (read LC IV.1–83 in the Triglot before any page says «silencio»). V07-style items marked CONFIRMED were left as they are. The \[unverified\] tags that remain are the verifier's UNCONFIRMABLE list.
