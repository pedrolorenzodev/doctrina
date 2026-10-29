# Eucharistic witness paragraphs and coverage

## Progress

- Status: in progress
- Done: read all twelve current witness entries in src/content/pages/eucharist/doctrine.es.ts; confirmed eight entries lack paragraph. All eight existing Spanish quotations are explicitly Doctrina translations of English editions, not quotations from a named Spanish public-domain printing. Citation-excerpts research is finished and remains separate.
- In progress: eight paragraph outcomes checkpointed (seven contexts and one explicit clearance hold); coverage inventory now has 86 sourced records, distinguishing actual works from unidentified citation labels and naming chronology gaps. Continue beyond the twelve screen selections; no claim of exhaustive scholarship.
- Next: resume coverage inventory at StoneI(1909),chapterIII; chapterII’s identified Christian works have saved records but individual-date/imprint checks remain expressly pending. Add the modern Frank2001 Theodore/Chrysostom catechesis comparison from the cached publisher references. Revisit the Damascus contributor death lead. Theodoret paragraph print collation is now done; its whole work is held. Cyril’s first volume is now held but does not cover John15.

## Source and language constraint

The current site file labels all eight Spanish quotations “Traducción al español de Doctrina” and names an English ANF/NPNF source. Consequently no Spanish public-domain edition is identified by those entries. This is an observation about the cited witnesses, not a claim that no old Spanish translation exists anywhere. The owner’s fallback is therefore recorded in English from the named translation. An English paragraph cannot contain a Spanish sentence string-exactly; each record preserves the existing Spanish quotation separately and supplies an exact English sentence for highlighting within its English paragraph. Completing the proprietary Spanish context is a separate application/translation step; do not pass off a new Spanish paragraph as a historical printed translation. `[CONFIRMED: src/content/pages/eucharist/doctrine.es.ts, witness entries, repository snapshot 2026-10-28; DECISIONS.md 2026-10-09, own translations proprietary]`

## Paragraph records

### ew-malachi-offering

```json
{
  "witnessId": "ew-malachi-offering",
  "author": "Justino Mártir",
  "work": "Diálogo con Trifón",
  "locator": "41",
  "paragraphLang": "en",
  "paragraph": "“And the offering of fine flour, sirs,” I said, “which was prescribed to be presented on behalf of those purified from leprosy, was a type of the bread of the Eucharist, the celebration of which our Lord Jesus Christ prescribed, in remembrance of the suffering which He endured on behalf of those who are purified in soul from all iniquity, in order that we may at the same time thank God for having created the world, with all things therein, for the sake of man, and for delivering us from the evil in which we were, and for utterly overthrowing principalities and powers by Him who suffered according to His will. Hence God speaks by the mouth of Malachi, one of the twelve [prophets], as I said before, about the sacrifices at that time presented by you: ‘I have no pleasure in you, saith the Lord; and I will not accept your sacrifices at your hands: for, from the rising of the sun unto the going down of the same, My name has been glorified among the Gentiles, and in every place incense is offered to My name, and a pure offering: for My name is great among the Gentiles, saith the Lord: but ye profane it.’ [So] He then speaks of those Gentiles, namely us, who in every place offer sacrifices to Him, i.e., the bread of the Eucharist, and also the cup of the Eucharist, affirming both that we glorify His name, and that you profane [it]. The command of circumcision, again, bidding [them] always circumcise the children on the eighth day, was a type of the true circumcision, by which we are circumcised from deceit and iniquity through Him who rose from the dead on the first day after the Sabbath, [namely through] our Lord Jesus Christ. For the first day after the Sabbath, remaining the first of all the days, is called, however, the eighth, according to the number of all the days of the cycle, and [yet] remains the first.",
  "highlightQuoteEn": "He then speaks of those Gentiles, namely us, who in every place offer sacrifices to Him, i.e., the bread of the Eucharist, and also the cup of the Eucharist, affirming both that we glorify His name, and that you profane [it].",
  "existingQuoteEs": "Habla, pues, de aquellos gentiles, es decir, de nosotros, que en todo lugar le ofrecemos sacrificios, esto es, el pan de la Eucaristía y también la copa de la Eucaristía, afirmando que nosotros glorificamos su nombre y que vosotros lo profanáis.",
  "spanishParagraph": null,
  "edition": "George Reith, trans., ‘Dialogue of Justin, Philosopher and Martyr, with Trypho, a Jew,’ in The Ante-Nicene Fathers, vol. 1 (Buffalo, NY: Christian Literature Publishing Company, 1885), 194–270.",
  "editionYear": 1885,
  "page": "numbered division; no new page claim",
  "sourceURL": "https://en.wikisource.org/wiki/Ante-Nicene_Fathers/Volume_I/Dialogue_with_Trypho",
  "scanURL": "https://archive.org/details/antenicenefather01buff",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: complete source division; exact English highlight containment; multiple body anchors in dated print OCR",
  "spanishStatus": "UNCONFIRMABLE as a historical printed Spanish paragraph: the current quotation is a proprietary Doctrina translation of English. Supply its complete own translation before Spanish highlighting, or display English with an English highlight.",
  "applicationNote": "No historical Spanish printing is named. Reith is translator; Roberts and Donaldson are volume editors.",
  "verification": {
    "sourceSHA256": "da022b1daa10b7c29115f868061b77c845aa1af9a4c23dd6df9a2461fff8fff8",
    "printOcrSHA256": "0f054a2bf07597de1d7fdc5dc34423465330eb2a8aef5fd603bf87285eeaf6e1",
    "matchedTenWordAnchors": [
      "and the offering of fine flour sirs i said which",
      "on behalf of those who are purified in soul from",
      "having created the world with all things therein for the",
      "and for utterly overthrowing principalities and powers by him who",
      "of the twelve prophets as i said before about the",
      "for my name is great among the gentiles saith the",
      "who in every place offer sacrifices to him i e",
      "on the first day after the sabbath namely through our"
    ],
    "normalization": "Decoded source text; whitespace normalized; editorial footnotes omitted; section number retained where present. Original wording is not retranslated."
  }
}
```

### ew-figure

```json
{
  "witnessId": "ew-figure",
  "author": "Tertuliano",
  "work": "Contra Marción",
  "locator": "IV.40",
  "paragraphLang": "en",
  "paragraph": "In like manner does He also know the very time it behoved Him to suffer, since the law prefigures His passion. Accordingly, of all the festal days of the Jews He chose the passover. In this Moses had declared that there was a sacred mystery: “It is the Lord’s passover.” How earnestly, therefore, does He manifest the bent of His soul: “With desire I have desired to eat this passover with you before I suffer.” What a destroyer of the law was this, who actually longed to keep its passover! Could it be that He was so fond of Jewish lamb? But was it not because He had to be “led like a lamb to the slaughter; and because, as a sheep before her shearers is dumb, so was He not to open His mouth,” that He so profoundly wished to accomplish the symbol of His own redeeming blood? He might also have been betrayed by any stranger, did I not find that even here too He fulfilled a Psalm: “He who did eat bread with me hath lifted up his heel against me.” And without a price might He have been betrayed. For what need of a traitor was there in the case of one who offered Himself to the people openly, and might quite as easily have been captured by force as taken by treachery? This might no doubt have been well enough for another Christ, but would not have been suitable in One who was accomplishing prophecies. For it was written, “The righteous one did they sell for silver.” The very amount and the destination of the money, which on Judas’ remorse was recalled from its first purpose of a fee, and appropriated to the purchase of a potter’s field, as narrated in the Gospel of Matthew, were clearly foretold by Jeremiah: “And they took the thirty pieces of silver, the price of Him who was valued and gave them for the potter’s field.” When He so earnestly expressed His desire to eat the passover, He considered it His own feast; for it would have been unworthy of God to desire to partake of what was not His own. Then, having taken the bread and given it to His disciples, He made it His own body, by saying, “This is my body,” that is, the figure of my body. A figure, however, there could not have been, unless there were first a veritable body. An empty thing, or phantom, is incapable of a figure. If, however, (as Marcion might say,) He pretended the bread was His body, because He lacked the truth of bodily substance, it follows that He must have given bread for us. It would contribute very well to the support of Marcion’s theory of a phantom body, that bread should have been crucified! But why call His body bread, and not rather (some other edible thing, say) a melon, which Marcion must have had in lieu of a heart! He did not understand how ancient was this figure of the body of Christ, who said Himself by Jeremiah: “I was like a lamb or an ox that is brought to the slaughter, and I knew not that they devised a device against me, saying, Let us cast the tree upon His bread,” which means, of course, the cross upon His body. And thus, casting light, as He always did, upon the ancient prophecies, He declared plainly enough what He meant by the bread, when He called the bread His own body. He likewise, when mentioning the cup and making the new testament to be sealed “in His blood,” affirms the reality of His body. For no blood can belong to a body which is not a body of flesh. If any sort of body were presented to our view, which is not one of flesh, not being fleshly, it would not possess blood. Thus, from the evidence of the flesh, we get a proof of the body, and a proof of the flesh from the evidence of the blood. In order, however, that you may discover how anciently wine is used as a figure for blood, turn to Isaiah, who asks, “Who is this that cometh from Edom, from Bosor with garments dyed in red, so glorious in His apparel, in the greatness of his might? Why are thy garments red, and thy raiment as his who cometh from the treading of the full winepress?” The prophetic Spirit contemplates the Lord as if He were already on His way to His passion, clad in His fleshly nature; and as He was to suffer therein, He represents the bleeding condition of His flesh under the metaphor of garments dyed in red, as if reddened in the treading and crushing process of the wine-press, from which the labourers descend reddened with the wine-juice, like men stained in blood. Much more clearly still does the book of Genesis foretell this, when (in the blessing of Judah, out of whose tribe Christ was to come according to the flesh) it even then delineated Christ in the person of that patriarch, saying, “He washed His garments in wine, and His clothes in the blood of grapes”—in His garments and clothes the prophecy pointed out his flesh, and His blood in the wine. Thus did He now consecrate His blood in wine, who then (by the patriarch) used the figure of wine to describe His blood.",
  "highlightQuoteEn": "Then, having taken the bread and given it to His disciples, He made it His own body, by saying, “This is my body,” that is, the figure of my body.",
  "existingQuoteEs": "Luego, tomando el pan y dándolo a sus discípulos, lo hizo su propio cuerpo diciendo: “Esto es mi cuerpo”, es decir, la figura de mi cuerpo. Pero no habría podido haber figura si antes no hubiera habido un cuerpo verdadero.",
  "spanishParagraph": null,
  "edition": "Peter Holmes, The Five Books Against Marcion, ANF III (Buffalo: Christian Literature Publishing Company, 1885), book IV chapter XL.",
  "editionYear": 1885,
  "page": "numbered division; no new page claim",
  "sourceURL": "https://ccel.org/ccel/s/schaff/anf03.xml",
  "scanURL": "https://archive.org/details/antenicenefather03robeuoft",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: complete source division; exact English highlight containment; multiple body anchors in dated print OCR",
  "spanishStatus": "UNCONFIRMABLE as a historical printed Spanish paragraph: the current quotation is a proprietary Doctrina translation of English. Supply its complete own translation before Spanish highlighting, or display English with an English highlight.",
  "applicationNote": "Use ANF III (1885), the stated witness, separately from the corpus’s ANCL VII (1868) bibliographic label. Same Holmes translation; paragraph checked against the actual ANF source.",
  "verification": {
    "sourceSHA256": "a6eee75d691b7a3dfe045bb2998ad01c7f1b5c17d46ec58606678e7aeea82a35",
    "printOcrSHA256": "01a0daf55852b98bd3cbc7696521fdc8ea824d60d7f20ec747c9b6197b559795",
    "matchedTenWordAnchors": [
      "in like manner does he also know the very time",
      "have desired to eat this passover with you before i",
      "he not to open his mouth that he so profoundly",
      "what need of a traitor was there in the case",
      "the figure of my body a figure however there could",
      "well to the support of marcion s theory of a",
      "like a lamb or an ox that is brought to",
      "called the bread his own body he likewise when mentioning",
      "not possess blood thus from the evidence of the flesh",
      "his flesh under the metaphor of garments dyed in red",
      "the flesh it even then delineated christ in the person"
    ],
    "normalization": "Decoded source text; whitespace normalized; editorial footnotes omitted; section number retained where present. Original wording is not retranslated."
  }
}
```

### ew-epiclesis-change

```json
{
  "witnessId": "ew-epiclesis-change",
  "author": "Cirilo de Jerusalén (atribuido)",
  "work": "Catequesis mistagógicas",
  "locator": "5.7",
  "paragraphLang": "en",
  "paragraph": "7. Then having sanctified ourselves by these spiritual Hymns, we beseech the merciful God to send forth His Holy Spirit upon the gifts lying before Him; that He may make the Bread the Body of Christ, and the Wine the Blood of Christ; for whatsoever the Holy Ghost has touched, is surely sanctified and changed.",
  "highlightQuoteEn": "Then having sanctified ourselves by these spiritual Hymns, we beseech the merciful God to send forth His Holy Spirit upon the gifts lying before Him; that He may make the Bread the Body of Christ, and the Wine the Blood of Christ; for whatsoever the Holy Ghost has touched, is surely sanctified and changed.",
  "existingQuoteEs": "Después, habiéndonos santificado con estos himnos espirituales, suplicamos al Dios misericordioso que envíe su Espíritu Santo sobre los dones presentes, para que haga del pan el cuerpo de Cristo y del vino la sangre de Cristo; porque todo lo que el Espíritu Santo toca queda santificado y cambiado.",
  "spanishParagraph": null,
  "edition": "Richard William Church, trans., revised by Edwin Hamilton Gifford, The Catechetical Lectures of S. Cyril, Nicene and Post-Nicene Fathers, Second Series, VII (New York: Christian Literature Company, 1894).",
  "editionYear": 1894,
  "page": "154",
  "sourceURL": "https://ccel.org/ccel/s/schaff/npnf207.xml",
  "scanURL": "https://archive.org/details/cu31924079626705",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: complete source division; exact English highlight containment; multiple body anchors in dated print OCR",
  "spanishStatus": "UNCONFIRMABLE as a historical printed Spanish paragraph: the current quotation is a proprietary Doctrina translation of English. Supply its complete own translation before Spanish highlighting, or display English with an English highlight.",
  "applicationNote": "Correct English edition year 1894, not the generic 1890 currently stated. Printed Lecture XXIII.7 = Mystagogical V.7; preserve disputed Cyril/John II attribution.",
  "verification": {
    "sourceSHA256": "3ac73f4179c0b7d6e66e6fea04ae572e64c0e4a80e8fa38980b40366c8a13928",
    "printOcrSHA256": "e8d4f5c798ca95b848052913c59ea1007e752283f313eab3d2d50fe119a47c83",
    "matchedTenWordAnchors": [
      "beseech the merciful god to send forth his holy spirit",
      "god to send forth his holy spirit upon the gifts",
      "forth his holy spirit upon the gifts lying before him",
      "spirit upon the gifts lying before him that he may",
      "gifts lying before him that he may make the bread",
      "him that he may make the bread the body of",
      "may make the bread the body of christ and the",
      "bread the body of christ and the wine the blood",
      "of christ and the wine the blood of christ for"
    ],
    "normalization": "Decoded source text; whitespace normalized; editorial footnotes omitted; section number retained where present. Original wording is not retranslated."
  }
}
```

### ew-word-changes-nature

```json
{
  "witnessId": "ew-word-changes-nature",
  "author": "Ambrosio de Milán",
  "work": "Sobre los misterios",
  "locator": "9.52",
  "paragraphLang": "en",
  "paragraph": "52. We observe, then, that grace has more power than nature, and yet so far we have only spoken of the grace of a prophet’s blessing. But if the blessing of man had such power as to change nature, what are we to say of that divine consecration where the very words of the Lord and Saviour operate? For that sacrament which you receive is made what it is by the word of Christ. But if the word of Elijah had such power as to bring down fire from heaven, shall not the word of Christ have power to change the nature of the elements? You read concerning the making of the whole world: “He spake and they were made, He commanded and they were created.” Shall not the word of Christ, which was able to make out of nothing that which was not, be able to change things which already are into what they were not? For it is not less to give a new nature to things than to change them.",
  "highlightQuoteEn": "But if the word of Elijah had such power as to bring down fire from heaven, shall not the word of Christ have power to change the nature of the elements? You read concerning the making of the whole world: “He spake and they were made, He commanded and they were created.” Shall not the word of Christ, which was able to make out of nothing that which was not, be able to change things which already are into what they were not? For it is not less to give a new nature to things than to change them.",
  "existingQuoteEs": "Si la palabra de Elías tuvo poder para hacer bajar fuego del cielo, ¿no tendrá la palabra de Cristo poder para cambiar la naturaleza de los elementos? [...] La palabra de Cristo, que pudo hacer de la nada lo que no existía, ¿no podrá cambiar las cosas que ya existen en lo que no eran?",
  "spanishParagraph": null,
  "edition": "On the Mysteries, translated by H. De Romestin, assisted by E. De Romestin and H. T. F. Duckworth, NPNF, Second Series, X (New York: Christian Literature Company, 1896).",
  "editionYear": 1896,
  "page": "324",
  "sourceURL": "https://ccel.org/ccel/s/schaff/npnf210.xml",
  "scanURL": "https://archive.org/details/selectlibraryofn10scha",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: complete source division; exact English highlight containment; multiple body anchors in dated print OCR",
  "spanishStatus": "UNCONFIRMABLE as a historical printed Spanish paragraph: the current quotation is a proprietary Doctrina translation of English. Supply its complete own translation before Spanish highlighting, or display English with an English highlight.",
  "applicationNote": "Correct NPNF II.10 edition year 1896, not the generic 1890. Printed section 52 is the complete paragraph; its final sentence is retained.",
  "verification": {
    "sourceSHA256": "c6f1a9d66653852d8b743c84a613c72c521dfb1b05602f0a2eff400c17665ee8",
    "printOcrSHA256": "619127bceb5b80926008129256e87264c2c6ef2310427be40437cfa386c795a4",
    "matchedTenWordAnchors": [
      "we observe then that grace has more power than nature",
      "to change nature what are we to say of that",
      "where the very words of the lord and saviour operate",
      "sacrament which you receive is made what it is by",
      "of christ but if the word of elijah had such",
      "to bring down fire from heaven shall not the word",
      "have power to change the nature of the elements you",
      "the making of the whole world he spake and they",
      "he commanded and they were created shall not the word",
      "which was able to make out of nothing that which",
      "be able to change things which already are into what",
      "not for it is not less to give a new"
    ],
    "normalization": "Decoded source text; whitespace normalized; editorial footnotes omitted; section number retained where present. Original wording is not retranslated."
  }
}
```

### ew-augustine-figure

```json
{
  "witnessId": "ew-augustine-figure",
  "author": "Agustín de Hipona",
  "work": "Sobre la doctrina cristiana",
  "locator": "III.16.24",
  "paragraphLang": "en",
  "paragraph": "24. If the sentence is one of command, either forbidding a crime or vice, or enjoining an act of prudence or benevolence, it is not figurative. If, however, it seems to enjoin a crime or vice, or to forbid an act of prudence or benevolence, it is figurative. “Except ye eat the flesh of the Son of man,” says Christ, “and drink His blood, ye have no life in you.” This seems to enjoin a crime or a vice; it is therefore a figure, enjoining that we should have a share in the sufferings of our Lord, and that we should retain a sweet and profitable memory of the fact that His flesh was wounded and crucified for us. Scripture says: “If thine enemy hunger, feed him; if he thirst, give him drink;” and this is beyond doubt a command to do a kindness. But in what follows, “for in so doing thou shall heap coals of fire on his head,” one would think a deed of malevolence was enjoined. Do not doubt, then, that the expression is figurative; and, while it is possible to interpret it in two ways, one pointing to the doing of an injury, the other to a display of superiority, let charity on the contrary call you back to benevolence, and interpret the coals of fire as the burning groans of penitence by which a man’s pride is cured who bewails that he has been the enemy of one who came to his assistance in distress. In the same way, when our Lord says, “He who loveth his life shall lose it,” we are not to think that He forbids the prudence with which it is a man’s duty to care for his life, but that He says in a figurative sense, “Let him lose his life”—that is, let him destroy and lose that perverted and unnatural use which he now makes of his life, and through which his desires are fixed on temporal things so that he gives no heed to eternal. It is written: “Give to the godly man, and help not a sinner.” The latter clause of this sentence seems to forbid benevolence; for it says, “help not a sinner.” Understand, therefore, that “sinner” is put figuratively for sin, so that it is his sin you are not to help.",
  "highlightQuoteEn": "This seems to enjoin a crime or a vice; it is therefore a figure, enjoining that we should have a share in the sufferings of our Lord, and that we should retain a sweet and profitable memory of the fact that His flesh was wounded and crucified for us.",
  "existingQuoteEs": "“Si no comiereis la carne del Hijo del hombre y bebiereis su sangre, no tendréis vida en vosotros”, dice Cristo. Esto parece mandar un crimen o una maldad; es, por tanto, una figura, que manda que participemos de los padecimientos del Señor y que guardemos un recuerdo dulce y provechoso de que su carne fue herida y crucificada por nosotros.",
  "spanishParagraph": null,
  "edition": "J. F. Shaw [identified as James Johnston Shaw], trans., On Christian Doctrine, Nicene and Post-Nicene Fathers, First Series, 2 (Buffalo: Christian Literature Company, 1887).",
  "editionYear": 1887,
  "page": "563",
  "sourceURL": "https://ccel.org/ccel/s/schaff/npnf102.xml",
  "scanURL": "https://archive.org/details/selectlibraryofn02auguuoft",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: complete source division; exact English highlight containment; multiple body anchors in dated print OCR",
  "spanishStatus": "UNCONFIRMABLE as a historical printed Spanish paragraph: the current quotation is a proprietary Doctrina translation of English. Supply its complete own translation before Spanish highlighting, or display English with an English highlight.",
  "applicationNote": "Correct NPNF I.2 year 1887, not the generic 1890. Printed book III chapter XVI section 24 is recovered in full, including the enemy/hunger and Tobit examples after the quoted sentence.",
  "verification": {
    "sourceSHA256": "b8ca21dfa7d553681651f85197064b0fe52ae6c17e5e17252df9301536a4ae2a",
    "printOcrSHA256": "83764bb1de9cc664b045631124365b686c6734eebf6a715fd18c4b351db7cc94",
    "matchedTenWordAnchors": [
      "if the sentence is one of command either forbidding a",
      "son of man says christ and drink his blood ye",
      "a figure enjoining that we should have a share in",
      "fact that his flesh was wounded and crucified for us",
      "beyond doubt a command to do a kindness but in",
      "one pointing to the doing of an injury the other",
      "one who came to his assistance in distress in the",
      "to think that he forbids the prudence with which it",
      "sense let him lose his life that is let him",
      "which his desires are fixed on temporal things so that",
      "a sinner the latter clause of this sentence seems to"
    ],
    "normalization": "Decoded source text; whitespace normalized; editorial footnotes omitted; section number retained where present. Original wording is not retranslated."
  }
}
```

### ew-one-sacrifice-remembrance

```json
{
  "witnessId": "ew-one-sacrifice-remembrance",
  "author": "Juan Crisóstomo",
  "work": "Homilías sobre Hebreos",
  "locator": "homilía 17.6",
  "paragraphLang": "en",
  "paragraph": "[6.] What then? do not we offer every day? We offer indeed, but making a remembrance of His death, and this [remembrance] is one and not many. How is it one, and not many? Inasmuch as that [Sacrifice] was once for all offered, [and] carried into the Holy of Holies. This is a figure of that [sacrifice] and this remembrance of that. For we always offer the same, not one sheep now and to-morrow another, but always the same thing: so that the sacrifice is one. And yet by this reasoning, since the offering is made in many places, are there many Christs? but Christ is one everywhere, being complete here and complete there also, one Body. As then while offered in many places, He is one body and not many bodies; so also [He is] one sacrifice. He is our High Priest, who offered the sacrifice that cleanses us. That we offer now also, which was then offered, which cannot be exhausted. This is done in remembrance of what was then done. For (saith He) “do this in remembrance of Me.” ( Luke xxii. 19.) It is not another sacrifice, as the High Priest, but we offer always the same, or rather we perform a remembrance of a Sacrifice.",
  "highlightQuoteEn": "What then? do not we offer every day? We offer indeed, but making a remembrance of His death, and this [remembrance] is one and not many.",
  "existingQuoteEs": "¿Qué, pues? ¿No ofrecemos cada día? Ofrecemos, sí, pero haciendo memoria de su muerte, y esta [memoria] es una y no muchas. [...] Porque ofrecemos siempre lo mismo, no hoy una oveja y mañana otra, sino siempre lo mismo, de modo que el sacrificio es uno. [...] No es otro sacrificio, como el del sumo sacerdote, sino que ofrecemos siempre el mismo, o más bien hacemos memoria de un sacrificio.",
  "spanishParagraph": null,
  "edition": "Thomas Keble, revised by John Keble and Frederic Gardiner, Homilies on Hebrews, Nicene and Post-Nicene Fathers, First Series, volume 14 (Christian Literature Company, 1889).",
  "editionYear": 1889,
  "page": "449",
  "sourceURL": "https://ccel.org/ccel/s/schaff/npnf114.xml",
  "scanURL": "https://archive.org/details/selectlibraryofn14auguuoft",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: complete source division; exact English highlight containment; multiple body anchors in dated print OCR",
  "spanishStatus": "UNCONFIRMABLE as a historical printed Spanish paragraph: the current quotation is a proprietary Doctrina translation of English. Supply its complete own translation before Spanish highlighting, or display English with an English highlight.",
  "applicationNote": "Correct NPNF I.14 year 1889 (with reprint/copyright caveat in corpus provenance), not the generic 1890. Translation by Thomas Keble, revised by John Keble and Frederic Gardiner; Gardiner alone is incomplete credit. Preserve the printed subsection [6.], not the entire homily.",
  "verification": {
    "sourceSHA256": "b130406978fbceb7bcd0774b0e8b09905f35a020a2300c1baf02f314a2d5a70a",
    "printOcrSHA256": "9e365468ac78365521bb725fc269c15a44b7a2ba47aacae6430bdddf3d6fe37e",
    "matchedTenWordAnchors": [
      "what then do not we offer every day we offer",
      "remembrance of his death and this remembrance is one and",
      "and carried into the holy of holies this is a",
      "our high priest who offered the sacrifice that cleanses us",
      "of what was then done for saith he do this"
    ],
    "normalization": "Decoded source text; whitespace normalized; editorial footnotes omitted; section number retained where present. Original wording is not retranslated."
  }
}
```

### ew-symbols-remain

```json
{
  "witnessId": "ew-symbols-remain",
  "author": "Teodoreto de Ciro",
  "work": "Eranistes (Diálogos)",
  "locator": "Dialogue II, The Unconfounded, Orthodoxus reply after Eranistes’s Eucharistic analogy",
  "paragraphLang": "en",
  "paragraph": "Orth.—You are caught in the net you have woven yourself. For even after the consecration the mystic symbols are not deprived of their own nature; they remain in their former substance figure and form; they are visible and tangible as they were before. But they are regarded as what they are become, and believed so to be, and are worshipped as being what they are believed to be. Compare then the image with the archetype, and you will see the likeness, for the type must be like the reality. For that body preserves its former form, figure, and limitation and in a word the substance of the body; but after the resurrection it has become immortal and superior to corruption; it has become worthy of a seat on the right hand; it is adored by every creature as being called the natural body of the Lord.",
  "highlightQuoteEn": "For even after the consecration the mystic symbols are not deprived of their own nature; they remain in their former substance figure and form; they are visible and tangible as they were before.",
  "existingQuoteEs": "Porque aun después de la consagración los símbolos místicos no quedan privados de su propia naturaleza; permanecen en su sustancia, figura y forma anteriores; son visibles y tangibles como antes. Pero se los considera como lo que han llegado a ser, se cree que lo son y se los adora como lo que se cree que son.",
  "spanishParagraph": null,
  "edition": "Blomfield Jackson, trans., Theodoret: Dialogues (Eranistes), NPNF, Second Series, III (New York: Christian Literature Company, 1892)",
  "editionYear": 1892,
  "page": "200–201",
  "sourceURL": "https://ccel.org/ccel/s/schaff/npnf203.xml",
  "sourceLocator": "iv.ix.iii-p640 (digital pointer only, not a printed paragraph number)",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: exact English highlight, complete speaking turn, multiple scan-OCR anchors and visual reading across printedpp.200–201;1892 title imprint read at PDFp.3",
  "spanishStatus": "No Spanish public-domain witness is named by the current site quotation: it is a Doctrina translation. This does not assert that no historical Spanish translation exists anywhere.",
  "applicationNote": "Correct edition year 1892, not the generic 1890. This reply is an unnumbered paragraph within Dialogue II, not a fabricated section 640. The whole speaking turn includes its opening retort and its subsequent image/archetype explanation. The surrounding dialogue also includes the reply of Eranistes; do not turn Orthodoxus’s speech into an isolated authorial definition without identifying the dialogue speaker. The numbered division is Dialogue II; there is no independently numbered subsection in this edition.",
  "sourceSHA256": "f2683481bded09cf90369589dd40330e231c83e6dbd4cb1aec730c9b90f9ec3a",
  "scanURL": "https://archive.org/details/cu31924031002110/page/n215/mode/2up",
  "verification": {
    "scanPdfSHA256": "99f6329737bd4f81bedca8bf36da793c103db74a43b33a999c2ef6aab899f79a",
    "pdfPages": [216, 217],
    "printedPages": ["200", "201"],
    "titlePdfPage": 3,
    "titleImprint": "New York:Christian Literature Company;Oxford and London:Parker & Company,1892",
    "printOcrChecks": [
      "you are caught in the net you have woven yourself",
      "they remain in their former substance figure and form",
      "it has become worthy of a seat on the right hand"
    ]
  }
}
```

### ew-not-a-figure

```json
{
  "witnessId": "ew-not-a-figure",
  "author": "Juan Damasceno",
  "work": "Exposición exacta de la fe ortodoxa",
  "locator": "IV.13",
  "paragraph": null,
  "paragraphLang": "en",
  "existingQuoteEs": "El pan y el vino no son meras figuras del cuerpo y la sangre de Cristo (¡Dios no lo permita!), sino el cuerpo mismo deificado del Señor; porque el Señor dijo: “Esto es mi cuerpo”, no “esto es figura de mi cuerpo”; y “mi sangre”, no “figura de mi sangre”.",
  "spanishParagraph": null,
  "edition": "S. D. F. Salmond, with acknowledged assistance by James L. Salmond, An Exact Exposition of the Orthodox Faith, NPNF II.9 (1899), translator note dated Aberdeen, 1 September 1898",
  "sourceURL": "https://ccel.org/ccel/s/schaff/npnf209.xml",
  "sourceLocator": "iii.iv.iv.xiii, book IV chapter XIII; target paragraph iii.iv.iv.xiii-p36, printed p.83b",
  "checkedAt": "2026-10-28",
  "tag": "UNCONFIRMABLE: complete public-domain fallback held on acknowledged collaborator clearance; source and exact location recovered",
  "applicationNote": "Current 1890 date is incompatible with the checked 1898 translator note and 1899 volume. The complete numbered division is chapter IV.13, not only its paragraph on figures. Do not invent a historical Spanish paragraph: existing Spanish text is a Doctrina translation.",
  "clearanceLead": "Modern Ecclegen family research reports son James Laing Salmond (Barry,5 June1867), physician, died London July1918, buried Allenvale. This is a secondary lead, now recorded in fathers-corpus-en.md; primary corroboration remains pending. The official charity record is a will of Mrs I.F.Salmond dated May1935, not his probate. It does not prove his death date."
}
```

## Coverage inventory

Scope checkpoint, 2026-10-28: the named directory currently supplies three main tradition dossiers (catholic.md, lutheran.md, reformed.md), plus review/verification files. Orthodox, Baptist and Pentecostal Eucharist dossiers are not present there in the checked file inventory. This is not a claim that those traditions lack witnesses. The Reformed dossier section “Fathers and later theologians” explicitly uses no Father as a Reformed voice; its silence is not evidence of an empty historical corpus.

For a scholarly comparison, this pass uses Darwell Stone, A History of the Doctrine of the Holy Eucharist, vol.I (London: Longmans, Green,1909), especially chaptersII–III, then the early patristic portions of chaptersIV–V. [Dated scan and OCR](https://archive.org/details/historyofdoctrin01ston). Stone is a named historical selection, not a neutral final arbiter of disputed dates or an exhaustive proxy for all later scholarship. The work’s title/imprint and contents were checked. No promise that twelve selections contain “all” relevant patristic texts is justified by this bounded audit.

Rows distinguish complete corpus holdings, draft corpus acquisitions and mere excerpt/source possession. Having one paragraph is not having the whole work. Chronology below reuses the completed fathers-verification.md audit, with its editions and warnings, where expressly stated; current-page dates that were not verified remain labelled.

### Inventory: ew-sacrifice

```json
{
  "witnessId": "ew-sacrifice",
  "author": "Anónimo",
  "work": "Didaché",
  "locator": "14.1–3",
  "date": "Latter first century / first half of second century; composite layers. Cambridge Edition of Early Christian Writings, Didache introduction (2025), and Lake I (1912), pp.305–307, as audited in fathers-verification.md.",
  "edition": "Joseph Barber Lightfoot and J. R. Harmer, The Apostolic Fathers: Revised Texts with Short Introductions and English Translations (London and New York: Macmillan, 1891), 229–235.",
  "holding": "data/corpus/fathers/didache/lightfoot-harmer-1891.json",
  "holdingStatus": "verified acquisition in existing corpus report",
  "scope": "Currently shown on screen10",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: current selection and actual corpus holding; chronology qualifications retained explicitly"
}
```

### Inventory: ew-flesh

```json
{
  "witnessId": "ew-flesh",
  "author": "Ignacio de Antioquía",
  "work": "Carta a los Esmirniotas",
  "locator": "7.1",
  "date": "Traditional Trajanic placement; modern proposals extend into the second century. Lake I (1912), pp.166–167; full named-scholar alternatives are in fathers-verification.md. Do not label 107–110 a verified interval.",
  "edition": "Joseph Barber Lightfoot, The Apostolic Fathers, Part II, S. Ignatius, S. Polycarp: Revised Texts with Introductions, Notes, Dissertations, and Translations, 2nd ed., vol. II (London and New York: Macmillan, 1889), 567–571.",
  "holding": "data/corpus/fathers/ignatius-smyrnaeans/lightfoot-1889.json",
  "holdingStatus": "verified acquisition in existing corpus report",
  "scope": "Currently shown on screen10",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: current selection and actual corpus holding; chronology qualifications retained explicitly"
}
```

### Inventory: ew-not-common-bread

```json
{
  "witnessId": "ew-not-common-bread",
  "author": "Justino Mártir",
  "work": "Primera Apología",
  "locator": "66",
  "date": "148–161, BiblIndex CPG1073 edition-level range, as audited in fathers-verification.md; current 150–155 is narrower than the verified evidence.",
  "edition": "Marcus Dods, trans., ‘The First Apology of Justin,’ in The Ante-Nicene Fathers, vol. 1 (Buffalo, NY: Christian Literature Publishing Company, 1885), 163–187.",
  "holding": "data/corpus/fathers/justin-first-apology/dods-1885.json",
  "holdingStatus": "verified acquisition in existing corpus report",
  "scope": "Currently shown on screen10",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: current selection and actual corpus holding; chronology qualifications retained explicitly"
}
```

### Inventory: ew-malachi-offering

```json
{
  "witnessId": "ew-malachi-offering",
  "author": "Justino Mártir",
  "work": "Diálogo con Trifón",
  "locator": "41",
  "date": "After First Apology; conventional c.155–160 placement is approximate, not a dated colophon (fathers-verification.md, Justin row).",
  "edition": "George Reith, trans., ‘Dialogue of Justin, Philosopher and Martyr, with Trypho, a Jew,’ in The Ante-Nicene Fathers, vol. 1 (Buffalo, NY: Christian Literature Publishing Company, 1885), 194–270.",
  "holding": "data/corpus/fathers/justin-dialogue-trypho/reith-1885.json",
  "holdingStatus": "verified acquisition in existing corpus report",
  "scope": "Currently shown on screen10",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: current selection and actual corpus holding; chronology qualifications retained explicitly"
}
```

### Inventory: ew-two-realities

```json
{
  "witnessId": "ew-two-realities",
  "author": "Ireneo de Lyon",
  "work": "Contra las herejías",
  "locator": "IV.18.5",
  "date": "c.180–189, bounded by Eleutherus named in III.3.3; existing fathers-verification.md audit and CPG1306–1307.",
  "edition": "Alexander Roberts and W. H. Rambaut, trans., ‘Against Heresies,’ in The Ante-Nicene Fathers, vol. 1 (Buffalo, NY: Christian Literature Publishing Company, 1885), 309–567.",
  "holding": "data/corpus/fathers/irenaeus-against-heresies/roberts-rambaut-1885.json",
  "holdingStatus": "verified acquisition in existing corpus report",
  "scope": "Currently shown on screen10",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: current selection and actual corpus holding; chronology qualifications retained explicitly"
}
```

### Inventory: ew-figure

```json
{
  "witnessId": "ew-figure",
  "author": "Tertuliano",
  "work": "Contra Marción",
  "locator": "IV.40",
  "date": "207–213 for the extant third edition; BiblIndex CPL14 / Sources Chrétiennes edition audit in fathers-verification.md. Book I’s 207/208 self-date must not date every book.",
  "edition": "Peter Holmes, trans., The Five Books Against Marcion, Ante-Nicene Christian Library, vol. 7 (Edinburgh: T. & T. Clark, 1868), 1–478.",
  "holding": "data/corpus/fathers/tertullian-against-marcion/holmes-1868.json",
  "holdingStatus": "verified acquisition in existing corpus report",
  "scope": "Currently shown on screen10",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: current selection and actual corpus holding; chronology qualifications retained explicitly"
}
```

### Inventory: ew-epiclesis-change

```json
{
  "witnessId": "ew-epiclesis-change",
  "author": "Cirilo de Jerusalén (atribuido)",
  "work": "Catequesis mistagógicas",
  "locator": "5.7",
  "date": "Mystagogical corpus attribution and date debated (Cyril / John II); c.350–390 is a broad current placement, not a settled personal composition date. The completed fathers-verification.md audit cites Doval. The publisher page now checked directly identifies Georgia Frank, “Taste and See,” Church History 70.4 (December2001), pp.619–643, note19, which reports Doval’s 351 proposal for the main Catecheses. Its pp.129–132 reference belongs to Doval’s study, not to Frank’s article; do not apply the main Catecheses date to the Mystagogical corpus.",
  "edition": "Richard William Church, trans., revised by Edwin Hamilton Gifford, The Catechetical Lectures of S. Cyril, Nicene and Post-Nicene Fathers, Second Series, VII (New York: Christian Literature Company, 1894).",
  "holding": "data/corpus/fathers/cyril-jerusalem-catechetical-lectures/church-gifford-1894.json",
  "holdingStatus": "draft",
  "scope": "Currently shown on screen10",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: current selection and actual corpus holding; chronology qualifications retained explicitly"
}
```

### Inventory: ew-word-changes-nature

```json
{
  "witnessId": "ew-word-changes-nature",
  "author": "Ambrosio de Milán",
  "work": "Sobre los misterios",
  "locator": "9.52",
  "date": "c.390; closely related post-Easter catecheses, Mysteries before391. Reuse the qualified work chronology in fathers-verification.md; exact catechetical year not established.",
  "edition": "On the Mysteries, translated by H. De Romestin, assisted by E. De Romestin and H. T. F. Duckworth, NPNF, Second Series, X (New York: Christian Literature Company, 1896).",
  "holding": "data/corpus/fathers/ambrose-de-mysteriis/de-romestin-1896.json",
  "holdingStatus": "draft",
  "scope": "Currently shown on screen10",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: current selection and actual corpus holding; chronology qualifications retained explicitly"
}
```

### Inventory: ew-augustine-figure

```json
{
  "witnessId": "ew-augustine-figure",
  "author": "Agustín de Hipona",
  "work": "Sobre la doctrina cristiana",
  "locator": "III.16.24",
  "date": "Books I–III belong to the earlier composition, current page c.396–397; book IV’s later completion must not date this excerpt. Exact year of this section remains to be checked in its dated introduction.",
  "edition": "J. F. Shaw [identified as James Johnston Shaw], trans., On Christian Doctrine, Nicene and Post-Nicene Fathers, First Series, 2 (Buffalo: Christian Literature Company, 1887).",
  "holding": "data/corpus/fathers/augustine-de-doctrina-christiana/shaw-1887.json",
  "holdingStatus": "draft",
  "scope": "Currently shown on screen10",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: current selection and actual corpus holding; chronology qualifications retained explicitly"
}
```

### Inventory: ew-one-sacrifice-remembrance

```json
{
  "witnessId": "ew-one-sacrifice-remembrance",
  "author": "Juan Crisóstomo",
  "work": "Homilías sobre Hebreos",
  "locator": "homilía 17.6",
  "date": "Current page c.403–404, homilies published after the preacher’s death. The exact preaching interval is not independently established by this paragraph acquisition; retain as draft pending chronology source.",
  "edition": "Thomas Keble, revised by John Keble and Frederic Gardiner, Homilies on Hebrews, Nicene and Post-Nicene Fathers, First Series, volume 14 (Christian Literature Company, 1889).",
  "holding": "data/corpus/fathers/chrysostom-homilies-hebrews/keble-gardiner-1889.json",
  "holdingStatus": "draft",
  "scope": "Currently shown on screen10",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: current selection and actual corpus holding; chronology qualifications retained explicitly"
}
```

### Inventory: ew-symbols-remain

```json
{
  "witnessId": "ew-symbols-remain",
  "author": "Teodoreto de Ciro",
  "work": "Eranistes (Diálogos)",
  "locator": "diálogo II",
  "date": "447; Eranistes work date in the completed fathers-verification.md audit, Theodoret row, distinct from uncertain death date.",
  "edition": "Blomfield Jackson, trans., Theodoret: Dialogues (Eranistes or Polymorphus), Nicene and Post-Nicene Fathers, Second Series, III (New York: Christian Literature Company; Oxford and London: Parker & Company,1892),pp.160–249.",
  "holding": "data/corpus/fathers/theodoret-eranistes/jackson-1892.json",
  "holdingStatus": "draft: complete work in5 coarse units, finer divisions pending",
  "scope": "Currently shown on screen10",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: current selection and actual corpus holding; chronology qualifications retained explicitly"
}
```

### Inventory: ew-not-a-figure

```json
{
  "witnessId": "ew-not-a-figure",
  "author": "Juan Damasceno",
  "work": "Exposición exacta de la fe ortodoxa",
  "locator": "IV.13",
  "date": "Late-life, multiply revised Exposition, early eighth century; c.743 is not secure. Andrew Louth chronology/edition audit in fathers-verification.md, John of Damascus row.",
  "edition": "Salmond, NPNF II.9 (1899), source XML only",
  "holding": "No normalized full work; contributor clearance held",
  "holdingStatus": "not held as normalized corpus work",
  "scope": "Currently shown on screen10",
  "checkedAt": "2026-10-28",
  "tag": "CONFIRMED: current selection and actual corpus holding; chronology qualifications retained explicitly"
}
```

### Inventory: ignatius-ephesians

```json
{
  "author": "Ignatius of Antioch",
  "work": "To the Ephesians",
  "locator": "20.2",
  "date": "Same disputed middle-recension chronology as Smyrnaeans; Lake I (1912), pp.166–167, and completed fathers-verification.md audit.",
  "edition": "Lightfoot, Apostolic Fathers II.2 (1889); ANF I (1885) is the alternative translation witness",
  "source": "Catholic Eucharist dossier PQ4; official Spanish Catechism1331/1405, Vatican HTML snapshot2026-10-27",
  "tag": "CONFIRMED: explicit dossier/official text reference and actual holding",
  "note": "Same author on screen10, different letter: not covered merely by showing Smyrnaeans7.1.",
  "holding": "data/corpus/fathers/ignatius-ephesians/lightfoot-1889.json",
  "holdingStatus": "verified acquisition in corpus report",
  "heldEdition": "Joseph Barber Lightfoot, The Apostolic Fathers, Part II, S. Ignatius, S. Polycarp: Revised Texts with Introductions, Notes, Dissertations, and Translations, 2nd ed., vol. II (London and New York: Macmillan, 1889), 543–550.",
  "inventoryId": "ignatius-ephesians",
  "checkedAt": "2026-10-28"
}
```

### Inventory: chrysostom-betrayal-judas

```json
{
  "author": "John Chrysostom",
  "work": "On the Betrayal of Judas, homily I",
  "locator": "1.6; PG49,380",
  "date": "Maundy Thursday388 according to Chrysostomus Baur, Der heilige Johannes Chrysostomus I(1929), p.235, checked in completed fathers-verification.md. Preserve named-scholar qualifier.",
  "edition": "PG49 (dated Migne edition, exact imprint not newly checked); official CCC1375 reproduces a Spanish excerpt",
  "source": "Catholic Eucharist dossier PQ4; Catechism1375, Vatican official Spanish HTML",
  "tag": "CONFIRMED: work/locator via official quoting document; full primary homily and PG imprint remain to be acquired",
  "note": "The old Catholic dossier says Baur’s book was unread; that is superseded by the completed neutral audit, which checked his 1929/1930 volumes. Not the Hebrews homily shown on screen10.",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "chrysostom-betrayal-judas",
  "checkedAt": "2026-10-28"
}
```

### Inventory: ambrose-sacraments

```json
{
  "author": "Ambrose of Milan",
  "work": "On the Sacraments",
  "locator": "IV.28; IV.7; V.7 (CCC’s division style)",
  "date": "c.390, related post-Easter catecheses; individual year uncertain; qualified work audit in fathers-verification.md.",
  "edition": "Official Catechism Spanish witness, paragraphs1383 and1393; English full work not in acquired NPNF Mysteries JSON",
  "source": "Catholic Eucharist dossier source list includes CEC1393; official Catechism Eucharist page supplies cited work and locators",
  "tag": "CONFIRMED: official reference; distinct work, not held; numbering crosswalk to book/chapter/section still required",
  "note": "Do not mistake the acquired De mysteriis for De sacramentis. Preserve older attribution debate and present attribution separately from the translation’s imprint.",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "ambrose-sacraments",
  "checkedAt": "2026-10-28"
}
```

### Inventory: cyril-alexandria-john

```json
{
  "author": "Cyril of Alexandria",
  "work": "Commentary on John",
  "locator": "John15, cited by Apology X.55–56; exact commentary book/section not recovered",
  "date": "Probably mid-420s, completed fathers-verification.md, Cyril of Alexandria row; no exact date for the cited passage established.",
  "edition": "Concordia Triglotta(1921), Apology X, quoted in Lutheran dossier; primary commentary edition not yet identified here",
  "source": "Lutheran Eucharist dossier PQ5; source attribution identified there as inference",
  "tag": "UNCONFIRMABLE: author/work candidate is plausible but exact primary passage must be recovered",
  "note": "Not Cyril of Jerusalem. Work identity and wording cannot be certified solely because the confession names Cyril on John15.",
  "holding": "data/corpus/fathers/cyril-alexandria-commentary-john/pusey-1874.json",
  "holdingStatus": "PARTIAL draft:complete Pusey1874 volumeI only; does not cover the cited John15 locus",
  "inventoryId": "cyril-alexandria-john",
  "checkedAt": "2026-10-28",
  "heldEdition": "Philip Edward Pusey, trans., Commentary on the Gospel according to S.John by S.Cyril, Archbishop of Alexandria, vol.I:S.JohnI–VIII, Library of the Fathers43 (Oxford:James Parker & Co.;London:Rivingtons,1874),pp.1–684.",
  "citedLocusHeld": false
}
```

### Inventory: augustine-john

```json
{
  "author": "Augustine of Hippo",
  "work": "Tractates on John",
  "locator": "80.3 (Large Catechism V.10 attribution candidate);26.13(CCC1398)",
  "date": "Corpus c.406–420; tractate80 in later dictated block419–420, completed fathers-verification.md. Do not apply that narrower date to tractate26 without its own check.",
  "edition": "J.Gibb and J.Innes, NPNF I.7(1888); source of Latin formulation quoted by LC still needs direct wording comparison",
  "source": "Lutheran Eucharist dossier PQ5; Catechism1398; completed neutral chronology",
  "tag": "CONFIRMED: holding and CCC reference; LC’s exact Latin attribution remains to be collated",
  "note": "The Lutheran dossier marks80.3 from memory. Corpus acquisition permits checking it next; do not silently upgrade Accedat/Accedit wording without reading the Latin source.",
  "holding": "data/corpus/fathers/augustine-tractates-john/gibb-innes-1888.json",
  "holdingStatus": "draft",
  "heldEdition": "John Gibb and James Innes, trans., Tractates on the Gospel of John, Nicene and Post-Nicene Fathers, First Series, 7 (Buffalo: Christian Literature Company, 1888).",
  "inventoryId": "augustine-john",
  "checkedAt": "2026-10-28"
}
```

### Inventory: theophylact-unnamed

```json
{
  "author": "Vulgarius (Theophylact identification requires confirmation)",
  "work": "Unidentified commentary or passage cited by Apology",
  "locator": "Apology X.55–56",
  "date": "Not established in the checked dossier; this witness may fall outside the early-patristic period and cannot inherit Cyril’s date.",
  "edition": "Concordia Triglotta(1921), Apology X; underlying Greek work not located",
  "source": "Lutheran Eucharist dossier PQ5 explicitly leaves identity/date/work unresolved",
  "tag": "UNCONFIRMABLE: citation label only, not an identified work",
  "note": "Do not invent a Commentary on Mark or a passage number to fill this gap.",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "theophylact-unnamed",
  "checkedAt": "2026-10-28"
}
```

### Inventory: chrysostom-passion-label

```json
{
  "author": "John Chrysostom (as the Formula of Concord cites him)",
  "work": "Sermon on the Passion (confessional citation label)",
  "locator": "Formula of Concord, Solid Declaration VII.76",
  "date": "Unestablished until exact primary work identity is recovered. The resemblance to Betrayal of Judas I.6 is not itself a dated identification.",
  "edition": "Concordia Triglotta(1921), Formula of Concord, Solid DeclarationVII",
  "source": "Lutheran Eucharist dossier PQ5, quoting FC’s label",
  "tag": "UNCONFIRMABLE: do not count as a second independently identified Chrysostom work",
  "note": "Candidate duplicate of Betrayal of Judas; keep the confession’s actual citation label while recovering the primary source.",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "chrysostom-passion-label",
  "checkedAt": "2026-10-28"
}
```

### Inventory: greek-canon-unnamed

```json
{
  "author": "Anonymous liturgical text",
  "work": "Greek canon of the Mass, unnamed anaphora",
  "locator": "Apology X.55–56",
  "date": "Not established; the confession does not identify a particular liturgy.",
  "edition": "Concordia Triglotta(1921), Apology X",
  "source": "Lutheran Eucharist dossier PQ5",
  "tag": "UNCONFIRMABLE: document family named, exact recension not identified",
  "note": "Do not label this Basil or Chrysostom solely from general liturgical knowledge.",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "greek-canon-unnamed",
  "checkedAt": "2026-10-28"
}
```

### Inventory: fc-named-fathers-unlocated

```json
{
  "author": "Cyprian; Leo I; Gregory; Ambrose; Augustine; Gelasius; Chrysostom (names as cited by the confession)",
  "work": "Unspecified patristic testimonies",
  "locator": "FC SDVII.37 names Justin,Cyprian,Augustine,Leo,Gelasius,Chrysostom; the dossier separately records a thesis naming Chrysostom,Cyprian,Leo,Gregory,Ambrose,Augustine",
  "date": "Individual works and dates not supplied by the cited confessional sentence.",
  "edition": "Concordia Triglotta(1921), Formula of Concord; Lutheran dossier source register",
  "source": "Lutheran Eucharist dossier lines109 and277, snapshot2026-10-28",
  "tag": "CONFIRMED: named-author reference; UNCONFIRMABLE as a full list of underlying works",
  "note": "A name list is not a recovered bibliography. Several authors have corpus holdings, but no particular work can be marked held on the strength of this sentence.",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "fc-named-fathers-unlocated",
  "checkedAt": "2026-10-28"
}
```

### Inventory: augustine-city-sacrifice

```json
{
  "author": "Augustine of Hippo",
  "work": "City of God",
  "locator": "X.6",
  "date": "413–426 for the whole work, NPNF I.2(1887), editor’s preface p.v and Dods’s preface p.xii, both read in source XML; no narrower date for bookX claimed.",
  "edition": "Marcus Dods / George Wilson, NPNF I.2(1887); acquired corpus excludes booksV–VIII but includesX",
  "source": "Official Catechism1372, in the Catholic source family; NPNF source https://ccel.org/ccel/s/schaff/npnf102.xml",
  "tag": "CONFIRMED: primary edition chronology and held book; whole corpus is partial",
  "note": "Not a complete22-book holding: the absent Smith-translated booksV–VIII remain a clearance hold.",
  "holding": "data/corpus/fathers/augustine-city-of-god/dods-wilson-1887.json",
  "holdingStatus": "draft",
  "heldEdition": "Marcus Dods and George Wilson; books V–VIII by J. J. Smith excluded pending clearance, trans., The City of God (Books I–IV, IX–XXII), Nicene and Post-Nicene Fathers, First Series, 2 (Buffalo: Christian Literature Company, 1887).",
  "inventoryId": "augustine-city-sacrifice",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-ignatius-trallians

```json
{
  "author": "Ignatius of Antioch",
  "work": "To the Trallians",
  "locator": "8",
  "date": "Same disputed middle-recension chronology as the current Smyrnaeans witness; Lake I(1912),pp.166–167 and completed fathers-verification.md. No independently dated letter inferred.",
  "edition": "Lightfoot, Apostolic Fathers II.2(1889)",
  "source": "Darwell Stone, A History of the Doctrine of the Holy Eucharist I (London:Longmans,Green,1909), chapterII, primary-work footnotes at the cited discussion. Dated OCR: https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: work/passages cited by Stone and actual corpus holding; per-work dates remain qualified or expressly unconfirmed",
  "note": "Stone pp.25 and50; the letters are distinct works from the one screen10 shows.",
  "role": "direct Eucharistic testimony",
  "holding": "data/corpus/fathers/ignatius-trallians/lightfoot-1889.json",
  "holdingStatus": "verified acquisition in corpus report",
  "heldEdition": "Joseph Barber Lightfoot, The Apostolic Fathers, Part II, S. Ignatius, S. Polycarp: Revised Texts with Introductions, Notes, Dissertations, and Translations, 2nd ed., vol. II (London and New York: Macmillan, 1889), 554–558.",
  "inventoryId": "stone-ignatius-trallians",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-ignatius-romans

```json
{
  "author": "Ignatius of Antioch",
  "work": "To the Romans",
  "locator": "7",
  "date": "Same disputed middle-recension chronology as the current Smyrnaeans witness; Lake I(1912),pp.166–167 and completed fathers-verification.md. No independently dated letter inferred.",
  "edition": "Lightfoot, Apostolic Fathers II.2(1889)",
  "source": "Darwell Stone, A History of the Doctrine of the Holy Eucharist I (London:Longmans,Green,1909), chapterII, primary-work footnotes at the cited discussion. Dated OCR: https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: work/passages cited by Stone and actual corpus holding; per-work dates remain qualified or expressly unconfirmed",
  "note": "Stone pp.25 and50; the letters are distinct works from the one screen10 shows.",
  "role": "direct Eucharistic testimony",
  "holding": "data/corpus/fathers/ignatius-romans/lightfoot-1889.json",
  "holdingStatus": "verified acquisition in corpus report",
  "heldEdition": "Joseph Barber Lightfoot, The Apostolic Fathers, Part II, S. Ignatius, S. Polycarp: Revised Texts with Introductions, Notes, Dissertations, and Translations, 2nd ed., vol. II (London and New York: Macmillan, 1889), 558–562.",
  "inventoryId": "stone-ignatius-romans",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-ignatius-philadelphians

```json
{
  "author": "Ignatius of Antioch",
  "work": "To the Philadelphians",
  "locator": "4–5",
  "date": "Same disputed middle-recension chronology as the current Smyrnaeans witness; Lake I(1912),pp.166–167 and completed fathers-verification.md. No independently dated letter inferred.",
  "edition": "Lightfoot, Apostolic Fathers II.2(1889)",
  "source": "Darwell Stone, A History of the Doctrine of the Holy Eucharist I (London:Longmans,Green,1909), chapterII, primary-work footnotes at the cited discussion. Dated OCR: https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: work/passages cited by Stone and actual corpus holding; per-work dates remain qualified or expressly unconfirmed",
  "note": "Stone pp.25 and50; the letters are distinct works from the one screen10 shows.",
  "role": "direct Eucharistic testimony",
  "holding": "data/corpus/fathers/ignatius-philadelphians/lightfoot-1889.json",
  "holdingStatus": "verified acquisition in corpus report",
  "heldEdition": "Joseph Barber Lightfoot, The Apostolic Fathers, Part II, S. Ignatius, S. Polycarp: Revised Texts with Introductions, Notes, Dissertations, and Translations, 2nd ed., vol. II (London and New York: Macmillan, 1889), 563–566.",
  "inventoryId": "stone-ignatius-philadelphians",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-first-clement

```json
{
  "author": "Clement of Rome (traditional attribution)",
  "work": "First Clement",
  "locator": "40–44; Stone’s discussion of ordered offerings and ministry",
  "date": "75–110, last decade of first century most probable; completed fathers-verification.md, Clement row.",
  "edition": "Lightfoot, Apostolic Fathers, revised text and translation(1890)",
  "source": "Darwell Stone, A History of the Doctrine of the Holy Eucharist I (London:Longmans,Green,1909), chapterII, primary-work footnotes at the cited discussion. Dated OCR: https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: work/passages cited by Stone and actual corpus holding; per-work dates remain qualified or expressly unconfirmed",
  "note": "",
  "role": "ecclesial offerings/ministry context; not an explicit institution narrative",
  "holding": "data/corpus/fathers/1-clement/lightfoot-1890.json",
  "holdingStatus": "verified acquisition in corpus report",
  "heldEdition": "Joseph Barber Lightfoot, The Apostolic Fathers: A Revised Text with Introductions, Notes, Dissertations, and Translations, Part I, S. Clement of Rome, 2nd ed., vol. II (London: Macmillan, 1890), 271–305.",
  "inventoryId": "stone-first-clement",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-barnabas

```json
{
  "author": "Anonymous, attributed to Barnabas",
  "work": "Epistle of Barnabas",
  "locator": "2.4–10",
  "date": "Not individually dated in this acquisition pass; Stone places the cited evidence in his ante-Nicene chapter. Exact work chronology remains draft rather than inferred from an author’s death.",
  "edition": "Lightfoot–Harmer, Apostolic Fathers(1891)",
  "source": "Darwell Stone, A History of the Doctrine of the Holy Eucharist I (London:Longmans,Green,1909), chapterII, primary-work footnotes at the cited discussion. Dated OCR: https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: work/passages cited by Stone and actual corpus holding; per-work dates remain qualified or expressly unconfirmed",
  "note": "Stone pp.42–45 uses its rejection of animal sacrifices as comparative evidence. His early70–79 date is a historical proposal, not adopted as present consensus.",
  "role": "comparative sacrificial vocabulary",
  "holding": "data/corpus/fathers/barnabas/lightfoot-harmer-1891.json",
  "holdingStatus": "verified acquisition in corpus report",
  "heldEdition": "Joseph Barber Lightfoot and J. R. Harmer, The Apostolic Fathers: Revised Texts with Short Introductions and English Translations (London and New York: Macmillan, 1891), 269–288.",
  "inventoryId": "stone-barnabas",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-diognetus

```json
{
  "author": "Anonymous",
  "work": "To Diognetus",
  "locator": "3.4–5",
  "date": "Not individually dated in this acquisition pass; Stone places the cited evidence in his ante-Nicene chapter. Exact work chronology remains draft rather than inferred from an author’s death.",
  "edition": "Lightfoot–Harmer, Apostolic Fathers(1891)",
  "source": "Darwell Stone, A History of the Doctrine of the Holy Eucharist I (London:Longmans,Green,1909), chapterII, primary-work footnotes at the cited discussion. Dated OCR: https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: work/passages cited by Stone and actual corpus holding; per-work dates remain qualified or expressly unconfirmed",
  "note": "Stone p.43; do not turn its rejection of material sacrifices into an explicit Eucharistic formula.",
  "role": "comparative sacrificial vocabulary",
  "holding": "data/corpus/fathers/epistle-diognetus/lightfoot-harmer-1891.json",
  "holdingStatus": "verified acquisition in corpus report",
  "heldEdition": "Joseph Barber Lightfoot and J. R. Harmer, The Apostolic Fathers: Revised Texts with Short Introductions and English Translations (London and New York: Macmillan, 1891), 503–511.",
  "inventoryId": "stone-diognetus",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-aristides

```json
{
  "author": "Aristides (attributed in transmitted versions)",
  "work": "Apology",
  "locator": "Syriac version1 and13; Armenian/Greek forms distinguished",
  "date": "Not individually dated in this acquisition pass; Stone places the cited evidence in his ante-Nicene chapter. Exact work chronology remains draft rather than inferred from an author’s death.",
  "edition": "J.R.Harris and J.Armitage Robinson, Texts and Studies I.1(1891),pp.28,31,36,47,100; actual held edition recorded separately",
  "source": "Darwell Stone, A History of the Doctrine of the Holy Eucharist I (London:Longmans,Green,1909), chapterII, primary-work footnotes at the cited discussion. Dated OCR: https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: work/passages cited by Stone and actual corpus holding; per-work dates remain qualified or expressly unconfirmed",
  "note": "Stone p.43 distinguishes Syriac,Armenian,Greek witnesses; do not collapse different versions into one locator.",
  "role": "comparative sacrificial vocabulary",
  "holding": "data/corpus/fathers/aristides-apology/harris-robinson-1891.json",
  "holdingStatus": "verified acquisition in corpus report",
  "heldEdition": "J. Rendel Harris and J. Armitage Robinson, The Apology of Aristides on Behalf of the Christians from a Syriac MS. Preserved on Mount Sinai (Cambridge: Cambridge University Press, 1891), 35–51.",
  "inventoryId": "stone-aristides",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-athenagoras

```json
{
  "author": "Athenagoras of Athens",
  "work": "Plea for the Christians (Supplicatio / Legatio)",
  "locator": "13",
  "date": "Not individually dated in this acquisition pass; Stone places the cited evidence in his ante-Nicene chapter. Exact work chronology remains draft rather than inferred from an author’s death.",
  "edition": "Primary work identified by Stone as Supplicatio13; exact English public-domain translation imprint not independently verified here",
  "source": "Darwell Stone, A History of the Doctrine of the Holy Eucharist I (London:Longmans,Green,1909), chapterII, primary-work footnotes at the cited discussion. Dated OCR: https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: work/passages cited by Stone and actual corpus holding; per-work dates remain qualified or expressly unconfirmed",
  "note": "Stone pp.43–45; a normalized full English work is not currently held.",
  "role": "comparative sacrificial vocabulary",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "stone-athenagoras",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-clement-paedagogus

```json
{
  "author": "Clement of Alexandria",
  "work": "The Instructor (Paedagogus)",
  "locator": "I.6.38,42–43; II.2.19–20",
  "date": "c.195–200, approximate bracket in completed fathers-verification.md; not an exact colophon.",
  "edition": "William Wilson, ANFII(1885)",
  "source": "Darwell Stone, A History of the Doctrine of the Holy Eucharist I (London:Longmans,Green,1909), chapterII, primary-work footnotes at the cited discussion. Dated OCR: https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: work/passages cited by Stone and actual corpus holding; per-work dates remain qualified or expressly unconfirmed",
  "note": "Stone pp.25–26 and38. Existing corpus retains untranslated Latin material in II.10; do not describe its English coverage as complete.",
  "role": "direct Eucharistic testimony",
  "holding": "data/corpus/fathers/clement-alexandria-paedagogus/wilson-anf-1885.json",
  "holdingStatus": "draft",
  "heldEdition": "William Wilson, trans., The Instructor, Ante-Nicene Fathers II (Buffalo: Christian Literature Publishing Company, 1885).",
  "inventoryId": "stone-clement-paedagogus",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-clement-stromata

```json
{
  "author": "Clement of Alexandria",
  "work": "Stromata",
  "locator": "V.10/11.67; VII.6.30,34; retain Stone’s differing chapter references until crosswalk checked",
  "date": "Begun c.198–203 and continued later; approximate completed fathers-verification.md bracket.",
  "edition": "William Wilson, ANFII(1885)",
  "source": "Darwell Stone, A History of the Doctrine of the Holy Eucharist I (London:Longmans,Green,1909), chapterII, primary-work footnotes at the cited discussion. Dated OCR: https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: work/passages cited by Stone and actual corpus holding; per-work dates remain qualified or expressly unconfirmed",
  "note": "Stone pp.26,44–45 uses sacrifice/prayer comparisons. Existing corpus bookIII retains Latin instead of full English.",
  "role": "Eucharistic/sacrificial interpretation with comparative vocabulary",
  "holding": "data/corpus/fathers/clement-alexandria-stromata/wilson-anf-1885.json",
  "holdingStatus": "draft",
  "heldEdition": "William Wilson, trans., The Stromata, Ante-Nicene Fathers II (Buffalo: Christian Literature Publishing Company, 1885).",
  "inventoryId": "stone-clement-stromata",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-origen-celsus

```json
{
  "author": "Origen",
  "work": "Against Celsus",
  "locator": "III.51 (comparison); VII.1; VIII.21,33",
  "date": "Not individually dated in this acquisition pass; Stone places the cited evidence in his ante-Nicene chapter. Exact work chronology remains draft rather than inferred from an author’s death.",
  "edition": "Frederick Crombie, ANFIV(1885)",
  "source": "Darwell Stone, A History of the Doctrine of the Holy Eucharist I (London:Longmans,Green,1909), chapterII, primary-work footnotes at the cited discussion. Dated OCR: https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: work/passages cited by Stone and actual corpus holding; per-work dates remain qualified or expressly unconfirmed",
  "note": "Stone pp.30,38,41,46. Direct VIII.33 and comparative apologetic passages must not be treated as equally direct Eucharistic statements.",
  "role": "direct Eucharistic testimony",
  "holding": "data/corpus/fathers/origen-against-celsus/crombie-anf-1885.json",
  "holdingStatus": "draft",
  "heldEdition": "Frederick Crombie, trans., Against Celsus, Ante-Nicene Fathers IV (Buffalo: Christian Literature Publishing Company, 1885).",
  "inventoryId": "stone-origen-celsus",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-origen-leviticus

```json
{
  "author": "Origen, transmitted principally through Rufinus’s Latin",
  "work": "Homilies on Leviticus",
  "locator": "VI.2; VII.5; XIII.3,6",
  "date": "239–242, BiblIndex CPG1416 / Sources Chrétiennes edition range already checked in fathers-verification.md.",
  "edition": "Primary homily references in Stone; full dated English translation not acquired",
  "source": "Darwell Stone, A History of the Doctrine of the Holy Eucharist I (London:Longmans,Green,1909), chapterII, primary-work footnotes at the cited discussion. Dated OCR: https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: work/passages cited by Stone and actual corpus holding; per-work dates remain qualified or expressly unconfirmed",
  "note": "Stone pp.27,51,53. A Latin/Rufinus transmission witness is not the lost whole Greek original.",
  "role": "direct Eucharistic testimony",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "stone-origen-leviticus",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-origen-numbers

```json
{
  "author": "Origen",
  "work": "Homilies on Numbers",
  "locator": "XVI.9",
  "date": "Not individually dated in this acquisition pass; Stone places the cited evidence in his ante-Nicene chapter. Exact work chronology remains draft rather than inferred from an author’s death.",
  "edition": "Stone chapterII; primary homily edition/English full-text route not acquired",
  "source": "Darwell Stone, A History of the Doctrine of the Holy Eucharist I (London:Longmans,Green,1909), chapterII, primary-work footnotes at the cited discussion. Dated OCR: https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: work/passages cited by Stone and actual corpus holding; per-work dates remain qualified or expressly unconfirmed",
  "note": "Stone p.27; distinct from acquired Against Celsus and On First Principles.",
  "role": "direct Eucharistic testimony",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "stone-origen-numbers",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-origen-matthew

```json
{
  "author": "Origen",
  "work": "Commentary on Matthew, Latin Commentary Series",
  "locator": "85–86",
  "date": "Not individually dated in this acquisition pass; Stone places the cited evidence in his ante-Nicene chapter. Exact work chronology remains draft rather than inferred from an author’s death.",
  "edition": "Stone chapterII, pp.27–28,38; exact English edition not yet acquired",
  "source": "Darwell Stone, A History of the Doctrine of the Holy Eucharist I (London:Longmans,Green,1909), chapterII, primary-work footnotes at the cited discussion. Dated OCR: https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: work/passages cited by Stone and actual corpus holding; per-work dates remain qualified or expressly unconfirmed",
  "note": "Do not identify the Latin Commentary Series numbers as Greek book85 or86. Deferred ANFIX commentary acquisition does not itself prove these Latin-series passages are covered.",
  "role": "direct Eucharistic testimony",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "stone-origen-matthew",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-origen-john

```json
{
  "author": "Origen",
  "work": "Commentary on John",
  "locator": "XXXII.24(16), Stone’s dual numbering",
  "date": "Not individually dated in this acquisition pass; Stone places the cited evidence in his ante-Nicene chapter. Exact work chronology remains draft rather than inferred from an author’s death.",
  "edition": "Stone chapterII,p.28; English ANFIX portions must be checked against the cited book",
  "source": "Darwell Stone, A History of the Doctrine of the Holy Eucharist I (London:Longmans,Green,1909), chapterII, primary-work footnotes at the cited discussion. Dated OCR: https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: work/passages cited by Stone and actual corpus holding; per-work dates remain qualified or expressly unconfirmed",
  "note": "Do not mark held merely because other Origen works are normalized; ANFIX’s English selection is not automatically the complete surviving commentary.",
  "role": "direct Eucharistic testimony",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "stone-origen-john",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-origen-jeremiah

```json
{
  "author": "Origen",
  "work": "Homilies on Jeremiah",
  "locator": "XVIII(elsewhereXIX).13",
  "date": "Not individually dated in this acquisition pass; Stone places the cited evidence in his ante-Nicene chapter. Exact work chronology remains draft rather than inferred from an author’s death.",
  "edition": "Stone chapterII,pp.38,53; primary homily numbering crosswalk pending",
  "source": "Darwell Stone, A History of the Doctrine of the Holy Eucharist I (London:Longmans,Green,1909), chapterII, primary-work footnotes at the cited discussion. Dated OCR: https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: work/passages cited by Stone and actual corpus holding; per-work dates remain qualified or expressly unconfirmed",
  "note": "Preserve the alternate homily numbering rather than silently choosing one.",
  "role": "direct Eucharistic testimony",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "stone-origen-jeremiah",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-origen-exodus

```json
{
  "author": "Origen, transmitted through Rufinus’s Latin",
  "work": "Homilies on Exodus",
  "locator": "XIII.3",
  "date": "Not individually dated in this acquisition pass; Stone places the cited evidence in his ante-Nicene chapter. Exact work chronology remains draft rather than inferred from an author’s death.",
  "edition": "Stone chapterII,p.38; complete dated English translation not acquired",
  "source": "Darwell Stone, A History of the Doctrine of the Holy Eucharist I (London:Longmans,Green,1909), chapterII, primary-work footnotes at the cited discussion. Dated OCR: https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: work/passages cited by Stone and actual corpus holding; per-work dates remain qualified or expressly unconfirmed",
  "note": "Stone cites care not to drop the consecrated body as context for reverence toward the divine word.",
  "role": "direct Eucharistic testimony",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "stone-origen-exodus",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-cyprian-cup

```json
{
  "author": "Cyprian of Carthage",
  "work": "To Caecilius, on the Cup of the Lord",
  "locator": "Oxford/Stone Letter63, especially9,14; ANF Epistle62, corpus62.section",
  "date": "253 according to the checked ANF1886 header note; broader correspondence date250–258 in completed fathers-verification.md.",
  "edition": "R.E.Wallis, ANFV(1886), EpistleLXII, Oxford-crosswalk/date footnote at iv.iv.lxii-p2",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, cited footnotes and discussion; https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/reference and actual holdings; date/recension limitations explicit",
  "note": "Important numbering correction: Stone’s LXIII is ANF’s LXII, verified directly in the source footnote. Do not link63.14 into the ANF corpus for this passage.",
  "role": "direct Eucharistic testimony",
  "holding": "data/corpus/fathers/cyprian-correspondence/wallis-anf-1886.json",
  "holdingStatus": "draft",
  "heldEdition": "Robert Ernest Wallis, trans., The Epistles of Cyprian, Ante-Nicene Fathers V (Buffalo: Christian Literature Company, 1886).",
  "inventoryId": "stone-cyprian-cup",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-cyprian-lapsed

```json
{
  "author": "Cyprian of Carthage",
  "work": "On the Lapsed",
  "locator": "2,15–16,22,25–26",
  "date": "251, explicitly printed in the ANF1886 source note, and completed fathers-verification.md.",
  "edition": "R.E.Wallis, ANFV(1886), TreatiseIII, dated header iv.v.iii-p2",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, cited footnotes and discussion; https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/reference and actual holdings; date/recension limitations explicit",
  "note": "",
  "role": "direct Eucharistic testimony",
  "holding": "data/corpus/fathers/cyprian-de-lapsis/wallis-anf-1886.json",
  "holdingStatus": "draft",
  "heldEdition": "Robert Ernest Wallis, trans., On the Lapsed, Ante-Nicene Fathers V (Buffalo: Christian Literature Company, 1886).",
  "inventoryId": "stone-cyprian-lapsed",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-cyprian-prayer

```json
{
  "author": "Cyprian of Carthage",
  "work": "On the Lord’s Prayer",
  "locator": "18",
  "date": "252 according to the checked ANF1886 header note; not presented as a new modern consensus finding.",
  "edition": "R.E.Wallis, ANFV(1886), TreatiseIV, dated header iv.v.iv-p2",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, cited footnotes and discussion; https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/reference and actual holdings; date/recension limitations explicit",
  "note": "",
  "role": "direct Eucharistic testimony",
  "holding": "data/corpus/fathers/cyprian-de-dominica-oratione/wallis-anf-1886.json",
  "holdingStatus": "draft",
  "heldEdition": "Robert Ernest Wallis, trans., On the Lord's Prayer, Ante-Nicene Fathers V (Buffalo: Christian Literature Company, 1886).",
  "inventoryId": "stone-cyprian-prayer",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-cyprian-unity

```json
{
  "author": "Cyprian of Carthage",
  "work": "On the Unity of the Church",
  "locator": "8,17",
  "date": "251, checked dated source note; completed fathers-verification.md.",
  "edition": "R.E.Wallis, ANFV(1886), TreatiseI, dated note iv.v.i-p5",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, cited footnotes and discussion; https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/reference and actual holdings; date/recension limitations explicit",
  "note": "The famous section4 has variant recensions; this row’s Eucharistic loci are8/17. Do not erase the text-history note retained in corpus metadata.",
  "role": "direct Eucharistic testimony",
  "holding": "data/corpus/fathers/cyprian-de-unitate/wallis-anf-1886.json",
  "holdingStatus": "draft",
  "heldEdition": "Robert Ernest Wallis, trans., On the Unity of the Church, Ante-Nicene Fathers V (Buffalo: Christian Literature Company, 1886).",
  "inventoryId": "stone-cyprian-unity",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-cyprian-testimonies

```json
{
  "author": "Cyprian of Carthage",
  "work": "Testimonies to Quirinus",
  "locator": "I.16",
  "date": "Individual work date not established here; preserve the ante-Nicene placement of Stone’s discussion as a historical classification, not a modern precise date.",
  "edition": "R.E.Wallis, ANFV(1886)",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, cited footnotes and discussion; https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/reference and actual holdings; date/recension limitations explicit",
  "note": "Stone p.49 cites the Malachi testimony; exact work date still needs its own checked introduction.",
  "role": "direct Eucharistic testimony",
  "holding": "data/corpus/fathers/cyprian-testimonia-ad-quirinum/wallis-anf-1886.json",
  "holdingStatus": "draft",
  "heldEdition": "Robert Ernest Wallis, trans., That we are to be urgent in prayers., Ante-Nicene Fathers V (Buffalo: Christian Literature Company, 1886).",
  "inventoryId": "stone-cyprian-testimonies",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-cyprian-other-letters

```json
{
  "author": "Cyprian correspondence, including letters by other senders",
  "work": "Other letters cited on Eucharistic practice",
  "locator": "Stone/Oxford letters1,11,15–17,31,57–58,69–70,73,75; individual sections in Stone’s footnotes; each needs ANF crosswalk",
  "date": "250–258 for Cyprian-era correspondence, qualified completed neutral audit; do not assign one year or one author to every letter.",
  "edition": "R.E.Wallis, ANFV(1886), Correspondence",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, cited footnotes and discussion; https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/reference and actual holdings; date/recension limitations explicit",
  "note": "This is a collection-level inventory remainder, not an independently verified mapping of every Stone letter number to an ANF locator. Roman clergy/other senders must keep their own authorship.",
  "role": "direct Eucharistic testimony",
  "holding": "data/corpus/fathers/cyprian-correspondence/wallis-anf-1886.json",
  "holdingStatus": "draft",
  "heldEdition": "Robert Ernest Wallis, trans., The Epistles of Cyprian, Ante-Nicene Fathers V (Buffalo: Christian Literature Company, 1886).",
  "inventoryId": "stone-cyprian-other-letters",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-dionysius-xystus

```json
{
  "author": "Dionysius of Alexandria",
  "work": "Letter to Xystus/Sixtus, excerpt preserved in Eusebius",
  "locator": "Eusebius Church History VII.9",
  "date": "Within Dionysius’s250–264 correspondence, completed fathers-verification.md; exact letter year unestablished here.",
  "edition": "A.C.McGiffert, NPNFII.1(1890), Eusebius VII.9; Stone p.40 also cites Feltoe, Dionysius of Alexandria,p.58",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, cited footnotes and discussion; https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/reference and actual holdings; date/recension limitations explicit",
  "note": "Held only as Eusebius’s embedded quotation, not as a complete normalized Dionysius correspondence. Eucharistic participation and a baptismal-doubt narrative occur together.",
  "role": "direct Eucharistic testimony",
  "holding": "data/corpus/fathers/eusebius-church-history/mcgiffert-1890.json",
  "holdingStatus": "draft",
  "heldEdition": "Arthur Cushman McGiffert, trans., The Church History of Eusebius, Nicene and Post-Nicene Fathers, Second Series, I (New York: Christian Literature Company, 1890).",
  "inventoryId": "stone-dionysius-xystus",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-dionysius-fragment

```json
{
  "author": "Dionysius of Alexandria (attributed fragment)",
  "work": "Fragment on body and blood, source distinct from the Sixtus letter",
  "locator": "Routh, Reliquiae Sacrae III,pp.230–231; Feltoe,p.103; compare Eusebius VII.26",
  "date": "Individual work date not established here; preserve the ante-Nicene placement of Stone’s discussion as a historical classification, not a modern precise date.",
  "edition": "Editions named by Stone p.40; the exact Routh/Feltoe imprints and primary fragment have not been newly checked",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, cited footnotes and discussion; https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/reference and actual holdings; date/recension limitations explicit",
  "note": "Eusebius VII.26 names writings; possession of Eusebius does not establish possession of every separately edited fragment.",
  "role": "direct Eucharistic testimony",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "stone-dionysius-fragment",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-hippolytus-proverbs

```json
{
  "author": "Attributed to Hippolytus",
  "work": "Fragment on Proverbs",
  "locator": "Proverbs9.1–2; Fabricius,Hippolyti Opera I,p.282; PG10,cols625/628; shorter Tischendorf version,p.227",
  "date": "Individual work date not established here; preserve the ante-Nicene placement of Stone’s discussion as a historical classification, not a modern precise date.",
  "edition": "Primary fragment editions cited in Stone p.39; not yet acquired",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, cited footnotes and discussion; https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/reference and actual holdings; date/recension limitations explicit",
  "note": "Stone explicitly reports uncertain origin/history and a shorter version that restricts the Eucharistic language attributable to Hippolytus. Do not show the longer fragment as undisputed.",
  "role": "direct Eucharistic testimony",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "stone-hippolytus-proverbs",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-hippolytus-genesis

```json
{
  "author": "Attributed to Hippolytus",
  "work": "Fragment on Genesis",
  "locator": "Genesis38.19; Bonwetsch–Achelis,Hippolytus Werke I.2,p.96",
  "date": "Individual work date not established here; preserve the ante-Nicene placement of Stone’s discussion as a historical classification, not a modern precise date.",
  "edition": "Primary fragment edition cited in Stone p.39; exact imprint not newly checked",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, cited footnotes and discussion; https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/reference and actual holdings; date/recension limitations explicit",
  "note": "Not included merely because Refutation,On Christ and Antichrist and Against Noetus are held. Fragment identity/authenticity remains separate.",
  "role": "direct Eucharistic testimony",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "stone-hippolytus-genesis",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-hippolytus-canons

```json
{
  "author": "Anonymous / traditionally Hippolytan attribution",
  "work": "Canons of Hippolytus",
  "locator": "Sections146–147; other Eucharistic prayer references in Stone chapterII",
  "date": "Individual work date not established here; preserve the ante-Nicene placement of Stone’s discussion as a historical classification, not a modern precise date.",
  "edition": "Edition/recension must still be recovered from Stone’s apparatus and the primary church-order source",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, cited footnotes and discussion; https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/reference and actual holdings; date/recension limitations explicit",
  "note": "Stone’s1909 late-second/third-century placement is not adopted as current consensus; do not treat the title as proof of personal authorship by Hippolytus.",
  "role": "direct Eucharistic testimony",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "stone-hippolytus-canons",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-apostolic-statutes

```json
{
  "author": "Anonymous church-order tradition",
  "work": "Statutes of the Apostles",
  "locator": "Horner’s edition,pp.137,140–141,156–157,178–181,200–201,243,255–257,261,276–277,319–320,326,344–345",
  "date": "Individual work date not established here; preserve the ante-Nicene placement of Stone’s discussion as a historical classification, not a modern precise date.",
  "edition": "Horner edition cited repeatedly in Stone,pp.28,33,39,41; exact imprint/recension to be checked",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, cited footnotes and discussion; https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/reference and actual holdings; date/recension limitations explicit",
  "note": "Do not silently collapse Stone’s Ethiopic/Arabic/Sahidic church-order witnesses into a single modern Apostolic Tradition or assign them all to Hippolytus.",
  "role": "direct Eucharistic testimony",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "stone-apostolic-statutes",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-didascalia

```json
{
  "author": "Anonymous",
  "work": "Syriac Didascalia of the Apostles",
  "locator": "Gibson’s edition,pp.47–48,68",
  "date": "Individual work date not established here; preserve the ante-Nicene placement of Stone’s discussion as a historical classification, not a modern precise date.",
  "edition": "Gibson edition cited by Stone,pp.28,46; primary printing not yet acquired",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, cited footnotes and discussion; https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/reference and actual holdings; date/recension limitations explicit",
  "note": "Different work from the Apostolic Constitutions; a later expansion does not establish possession of this Syriac source.",
  "role": "direct Eucharistic testimony",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "stone-didascalia",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-verona-church-order

```json
{
  "author": "Anonymous church-order tradition",
  "work": "Verona Latin fragments of the Apostles’ church order",
  "locator": "Hauler’s edition,pp.107,112,117–118",
  "date": "Individual work date not established here; preserve the ante-Nicene placement of Stone’s discussion as a historical classification, not a modern precise date.",
  "edition": "Hauler edition cited by Stone,pp.28,33,39,41; exact imprint/primary fragments not newly checked",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, cited footnotes and discussion; https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/reference and actual holdings; date/recension limitations explicit",
  "note": "Preserve the historical source label and version; modern attribution must be verified separately.",
  "role": "direct Eucharistic testimony",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "stone-verona-church-order",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-abercius

```json
{
  "author": "Abercius epitaph / epigraphic witness",
  "work": "Epitaph of Abercius",
  "locator": "Lightfoot,Apostolic Fathers II.1,pp.480–481; Ramsay,Cities and Bishoprics of Phrygia II,pp.722–723",
  "date": "Individual work date not established here; preserve the ante-Nicene placement of Stone’s discussion as a historical classification, not a modern precise date.",
  "edition": "Edition references transcribed from Stone,p.38",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, cited footnotes and discussion; https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/reference and actual holdings; date/recension limitations explicit",
  "note": "Stone’s second-century placement is an historical dating proposal. Current epigraphic dating and reconstruction must be checked before display; not a complete continuous literary work.",
  "role": "direct Eucharistic testimony",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "stone-abercius",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-pectorius

```json
{
  "author": "Pectorius / Autun epigraphic witness",
  "work": "Autun inscription (Pectorius)",
  "locator": "First portion; fish/bread imagery, Stone pp.35–36",
  "date": "Individual work date not established here; preserve the ante-Nicene placement of Stone’s discussion as a historical classification, not a modern precise date.",
  "edition": "Stone1909 transcribes/translates the inscription; independent epigraphic edition/date not yet checked",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, cited footnotes and discussion; https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/reference and actual holdings; date/recension limitations explicit",
  "note": "Stone dates the first portion late second/early third century. Preserve that as his proposal, not a verified modern date; the inscription’s layers must be dated separately.",
  "role": "direct Eucharistic testimony",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "stone-pectorius",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-tertullian-de-resurrectione-carnis

```json
{
  "author": "Tertullian (traditional full-work attribution; disputed continuations noted separately)",
  "work": "On the Resurrection of the Flesh",
  "locator": "8,14,17,23,37,63",
  "date": "Individual work date remains to be checked in its dated critical introduction. The completed neutral audit gives a secure literary floruit197–220, which is not used as an exact date for every work.",
  "edition": "Dated English edition actually held is listed in heldEdition; Stone’s discussion is a separate1909 scholarly witness",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, especially footnotes in the figure/representation discussion(pp.29–37) and sacrifice discussion(pp.43–53); https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/passages and actual holding; exact work date remains qualified/unconfirmed",
  "note": "Direct Eucharistic statements8/37; other cited contexts are comparative vocabulary.",
  "role": "direct/mixed Eucharistic source",
  "holding": "data/corpus/fathers/tertullian-de-resurrectione-carnis/holmes-anf-1885.json",
  "holdingStatus": "draft",
  "heldEdition": "Peter Holmes, trans., On the Resurrection of the Flesh, Ante-Nicene Fathers III (Buffalo: Christian Literature Publishing Company, 1885), printed page range 545–595 (last-page work/editorial boundary requires visual review).",
  "inventoryId": "stone-tertullian-de-resurrectione-carnis",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-tertullian-de-oratione

```json
{
  "author": "Tertullian (traditional full-work attribution; disputed continuations noted separately)",
  "work": "On Prayer",
  "locator": "5–6,18–19",
  "date": "Individual work date remains to be checked in its dated critical introduction. The completed neutral audit gives a secure literary floruit197–220, which is not used as an exact date for every work.",
  "edition": "Dated English edition actually held is listed in heldEdition; Stone’s discussion is a separate1909 scholarly witness",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, especially footnotes in the figure/representation discussion(pp.29–37) and sacrifice discussion(pp.43–53); https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/passages and actual holding; exact work date remains qualified/unconfirmed",
  "note": "Direct bread/Eucharistic participation and sacrificial practice; do not reduce the work to one formula.",
  "role": "direct/mixed Eucharistic source",
  "holding": "data/corpus/fathers/tertullian-de-oratione/thelwall-1869.json",
  "holdingStatus": "verified acquisition in corpus report",
  "heldEdition": "Sydney Thelwall, trans., ‘De oratione,’ in The Writings of Tertullian, vol. 1, Ante-Nicene Christian Library, vol. 11 (Edinburgh: T. & T. Clark, 1869), 178–204.",
  "inventoryId": "stone-tertullian-de-oratione",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-tertullian-de-corona

```json
{
  "author": "Tertullian (traditional full-work attribution; disputed continuations noted separately)",
  "work": "On the Chaplet",
  "locator": "3,15",
  "date": "Individual work date remains to be checked in its dated critical introduction. The completed neutral audit gives a secure literary floruit197–220, which is not used as an exact date for every work.",
  "edition": "Dated English edition actually held is listed in heldEdition; Stone’s discussion is a separate1909 scholarly witness",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, especially footnotes in the figure/representation discussion(pp.29–37) and sacrifice discussion(pp.43–53); https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/passages and actual holding; exact work date remains qualified/unconfirmed",
  "note": "Section3’s Eucharistic practice and offerings are direct; the other comparison has a different argumentative role.",
  "role": "direct/mixed Eucharistic source",
  "holding": "data/corpus/fathers/tertullian-de-corona/thelwall-anf-1885.json",
  "holdingStatus": "draft",
  "heldEdition": "Sydney Thelwall, trans., The Chaplet, or De Corona, Ante-Nicene Fathers III (Buffalo: Christian Literature Publishing Company, 1885), printed page range 93–104 (last-page work/editorial boundary requires visual review).",
  "inventoryId": "stone-tertullian-de-corona",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-tertullian-de-pudicitia

```json
{
  "author": "Tertullian (traditional full-work attribution; disputed continuations noted separately)",
  "work": "On Modesty",
  "locator": "6,9,14",
  "date": "Individual work date remains to be checked in its dated critical introduction. The completed neutral audit gives a secure literary floruit197–220, which is not used as an exact date for every work.",
  "edition": "Dated English edition actually held is listed in heldEdition; Stone’s discussion is a separate1909 scholarly witness",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, especially footnotes in the figure/representation discussion(pp.29–37) and sacrifice discussion(pp.43–53); https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/passages and actual holding; exact work date remains qualified/unconfirmed",
  "note": "Section9 is direct Eucharistic context; vocabulary comparisons elsewhere are not independent definitions.",
  "role": "direct/mixed Eucharistic source",
  "holding": "data/corpus/fathers/tertullian-de-pudicitia/thelwall-anf-1885.json",
  "holdingStatus": "draft",
  "heldEdition": "Sydney Thelwall, trans., On Modesty, Ante-Nicene Fathers IV (Buffalo: Christian Literature Publishing Company, 1885), printed page range 74–101 (last-page work/editorial boundary requires visual review).",
  "inventoryId": "stone-tertullian-de-pudicitia",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-tertullian-apologeticus

```json
{
  "author": "Tertullian (traditional full-work attribution; disputed continuations noted separately)",
  "work": "Apology",
  "locator": "15–16,21,23",
  "date": "Individual work date remains to be checked in its dated critical introduction. The completed neutral audit gives a secure literary floruit197–220, which is not used as an exact date for every work.",
  "edition": "Dated English edition actually held is listed in heldEdition; Stone’s discussion is a separate1909 scholarly witness",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, especially footnotes in the figure/representation discussion(pp.29–37) and sacrifice discussion(pp.43–53); https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/passages and actual holding; exact work date remains qualified/unconfirmed",
  "note": "Comparative figure/representation language in Stone’s analysis; not every occurrence is a direct Eucharistic witness.",
  "role": "comparative source in the scholarly argument; not automatically an additional timeline testimony",
  "holding": "data/corpus/fathers/tertullian-apologeticus/thelwall-1869.json",
  "holdingStatus": "verified acquisition in corpus report",
  "heldEdition": "Sydney Thelwall, trans., ‘Apologeticus,’ in The Writings of Tertullian, vol. 1, Ante-Nicene Christian Library, vol. 11 (Edinburgh: T. & T. Clark, 1869), 53–140.",
  "inventoryId": "stone-tertullian-apologeticus",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-tertullian-against-praxeas

```json
{
  "author": "Tertullian (traditional full-work attribution; disputed continuations noted separately)",
  "work": "Against Praxeas",
  "locator": "11,24",
  "date": "Individual work date remains to be checked in its dated critical introduction. The completed neutral audit gives a secure literary floruit197–220, which is not used as an exact date for every work.",
  "edition": "Dated English edition actually held is listed in heldEdition; Stone’s discussion is a separate1909 scholarly witness",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, especially footnotes in the figure/representation discussion(pp.29–37) and sacrifice discussion(pp.43–53); https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/passages and actual holding; exact work date remains qualified/unconfirmed",
  "note": "Comparative representation language; not a direct Eucharistic institution exposition.",
  "role": "comparative source in the scholarly argument; not automatically an additional timeline testimony",
  "holding": "data/corpus/fathers/tertullian-against-praxeas/holmes-anf-1885.json",
  "holdingStatus": "draft",
  "heldEdition": "Peter Holmes, trans., Against Praxeas, Ante-Nicene Fathers III (Buffalo: Christian Literature Publishing Company, 1885), printed page range 597–632 (last-page work/editorial boundary requires visual review).",
  "inventoryId": "stone-tertullian-against-praxeas",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-tertullian-de-patientia

```json
{
  "author": "Tertullian (traditional full-work attribution; disputed continuations noted separately)",
  "work": "On Patience",
  "locator": "3",
  "date": "Individual work date remains to be checked in its dated critical introduction. The completed neutral audit gives a secure literary floruit197–220, which is not used as an exact date for every work.",
  "edition": "Dated English edition actually held is listed in heldEdition; Stone’s discussion is a separate1909 scholarly witness",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, especially footnotes in the figure/representation discussion(pp.29–37) and sacrifice discussion(pp.43–53); https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/passages and actual holding; exact work date remains qualified/unconfirmed",
  "note": "Comparative vocabulary.",
  "role": "comparative source in the scholarly argument; not automatically an additional timeline testimony",
  "holding": "data/corpus/fathers/tertullian-de-patientia/thelwall-1869.json",
  "holdingStatus": "verified acquisition in corpus report",
  "heldEdition": "Sydney Thelwall, trans., ‘De patientia,’ in The Writings of Tertullian, vol. 1, Ante-Nicene Christian Library, vol. 11 (Edinburgh: T. & T. Clark, 1869), 205–230.",
  "inventoryId": "stone-tertullian-de-patientia",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-tertullian-de-ieiunio

```json
{
  "author": "Tertullian (traditional full-work attribution; disputed continuations noted separately)",
  "work": "On Fasting",
  "locator": "13",
  "date": "Individual work date remains to be checked in its dated critical introduction. The completed neutral audit gives a secure literary floruit197–220, which is not used as an exact date for every work.",
  "edition": "Dated English edition actually held is listed in heldEdition; Stone’s discussion is a separate1909 scholarly witness",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, especially footnotes in the figure/representation discussion(pp.29–37) and sacrifice discussion(pp.43–53); https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/passages and actual holding; exact work date remains qualified/unconfirmed",
  "note": "Comparative vocabulary in Stone’s figure-language discussion.",
  "role": "comparative source in the scholarly argument; not automatically an additional timeline testimony",
  "holding": "data/corpus/fathers/tertullian-de-ieiunio/thelwall-anf-1885.json",
  "holdingStatus": "draft",
  "heldEdition": "Sydney Thelwall, trans., On Fasting, Ante-Nicene Fathers IV (Buffalo: Christian Literature Publishing Company, 1885), printed page range 102–115 (last-page work/editorial boundary requires visual review).",
  "inventoryId": "stone-tertullian-de-ieiunio",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-tertullian-de-spectaculis

```json
{
  "author": "Tertullian (traditional full-work attribution; disputed continuations noted separately)",
  "work": "On the Shows",
  "locator": "17",
  "date": "Individual work date remains to be checked in its dated critical introduction. The completed neutral audit gives a secure literary floruit197–220, which is not used as an exact date for every work.",
  "edition": "Dated English edition actually held is listed in heldEdition; Stone’s discussion is a separate1909 scholarly witness",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, especially footnotes in the figure/representation discussion(pp.29–37) and sacrifice discussion(pp.43–53); https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/passages and actual holding; exact work date remains qualified/unconfirmed",
  "note": "Comparative vocabulary; do not present as an explicit Eucharistic definition merely because Stone cites it.",
  "role": "comparative source in the scholarly argument; not automatically an additional timeline testimony",
  "holding": "data/corpus/fathers/tertullian-de-spectaculis/thelwall-1869.json",
  "holdingStatus": "verified acquisition in corpus report",
  "heldEdition": "Sydney Thelwall, trans., ‘De Spectaculis,’ in The Writings of Tertullian, vol. 1, Ante-Nicene Christian Library, vol. 11 (Edinburgh: T. & T. Clark, 1869), 8–35.",
  "inventoryId": "stone-tertullian-de-spectaculis",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-tertullian-de-monogamia

```json
{
  "author": "Tertullian (traditional full-work attribution; disputed continuations noted separately)",
  "work": "On Monogamy",
  "locator": "10",
  "date": "Individual work date remains to be checked in its dated critical introduction. The completed neutral audit gives a secure literary floruit197–220, which is not used as an exact date for every work.",
  "edition": "Dated English edition actually held is listed in heldEdition; Stone’s discussion is a separate1909 scholarly witness",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, especially footnotes in the figure/representation discussion(pp.29–37) and sacrifice discussion(pp.43–53); https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/passages and actual holding; exact work date remains qualified/unconfirmed",
  "note": "Direct commemorative offerings and communion context.",
  "role": "direct/mixed Eucharistic source",
  "holding": "data/corpus/fathers/tertullian-de-monogamia/thelwall-anf-1885.json",
  "holdingStatus": "draft",
  "heldEdition": "Sydney Thelwall, trans., On Monogamy, Ante-Nicene Fathers IV (Buffalo: Christian Literature Publishing Company, 1885), printed page range 59–73 (last-page work/editorial boundary requires visual review).",
  "inventoryId": "stone-tertullian-de-monogamia",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-tertullian-de-paenitentia

```json
{
  "author": "Tertullian (traditional full-work attribution; disputed continuations noted separately)",
  "work": "On Repentance",
  "locator": "3,10",
  "date": "Individual work date remains to be checked in its dated critical introduction. The completed neutral audit gives a secure literary floruit197–220, which is not used as an exact date for every work.",
  "edition": "Dated English edition actually held is listed in heldEdition; Stone’s discussion is a separate1909 scholarly witness",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, especially footnotes in the figure/representation discussion(pp.29–37) and sacrifice discussion(pp.43–53); https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/passages and actual holding; exact work date remains qualified/unconfirmed",
  "note": "Comparative vocabulary.",
  "role": "comparative source in the scholarly argument; not automatically an additional timeline testimony",
  "holding": "data/corpus/fathers/tertullian-de-paenitentia/thelwall-anf-1885.json",
  "holdingStatus": "draft",
  "heldEdition": "Sydney Thelwall, trans., On Repentance, Ante-Nicene Fathers III (Buffalo: Christian Literature Publishing Company, 1885), printed page range 657–668 (last-page work/editorial boundary requires visual review).",
  "inventoryId": "stone-tertullian-de-paenitentia",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-tertullian-de-carne-christi

```json
{
  "author": "Tertullian (traditional full-work attribution; disputed continuations noted separately)",
  "work": "On the Flesh of Christ",
  "locator": "24",
  "date": "Individual work date remains to be checked in its dated critical introduction. The completed neutral audit gives a secure literary floruit197–220, which is not used as an exact date for every work.",
  "edition": "Dated English edition actually held is listed in heldEdition; Stone’s discussion is a separate1909 scholarly witness",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, especially footnotes in the figure/representation discussion(pp.29–37) and sacrifice discussion(pp.43–53); https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/passages and actual holding; exact work date remains qualified/unconfirmed",
  "note": "Comparative vocabulary; distinguish from On the Resurrection of the Flesh.",
  "role": "comparative source in the scholarly argument; not automatically an additional timeline testimony",
  "holding": "data/corpus/fathers/tertullian-de-carne-christi/holmes-anf-1885.json",
  "holdingStatus": "draft",
  "heldEdition": "Peter Holmes, trans., On the Flesh of Christ, Ante-Nicene Fathers III (Buffalo: Christian Literature Publishing Company, 1885), printed page range 521–543 (last-page work/editorial boundary requires visual review).",
  "inventoryId": "stone-tertullian-de-carne-christi",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-tertullian-de-fuga

```json
{
  "author": "Tertullian (traditional full-work attribution; disputed continuations noted separately)",
  "work": "Flight in Persecution",
  "locator": "10",
  "date": "Individual work date remains to be checked in its dated critical introduction. The completed neutral audit gives a secure literary floruit197–220, which is not used as an exact date for every work.",
  "edition": "Dated English edition actually held is listed in heldEdition; Stone’s discussion is a separate1909 scholarly witness",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, especially footnotes in the figure/representation discussion(pp.29–37) and sacrifice discussion(pp.43–53); https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/passages and actual holding; exact work date remains qualified/unconfirmed",
  "note": "Comparative vocabulary.",
  "role": "comparative source in the scholarly argument; not automatically an additional timeline testimony",
  "holding": "data/corpus/fathers/tertullian-de-fuga/thelwall-anf-1885.json",
  "holdingStatus": "draft",
  "heldEdition": "Sydney Thelwall, trans., De Fuga in Persecutione, Ante-Nicene Fathers IV (Buffalo: Christian Literature Publishing Company, 1885), printed page range 116–126 (last-page work/editorial boundary requires visual review).",
  "inventoryId": "stone-tertullian-de-fuga",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-tertullian-de-baptismo

```json
{
  "author": "Tertullian (traditional full-work attribution; disputed continuations noted separately)",
  "work": "On Baptism",
  "locator": "11,13,17",
  "date": "Individual work date remains to be checked in its dated critical introduction. The completed neutral audit gives a secure literary floruit197–220, which is not used as an exact date for every work.",
  "edition": "Dated English edition actually held is listed in heldEdition; Stone’s discussion is a separate1909 scholarly witness",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, especially footnotes in the figure/representation discussion(pp.29–37) and sacrifice discussion(pp.43–53); https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/passages and actual holding; exact work date remains qualified/unconfirmed",
  "note": "Baptismal/priestly terminology used comparatively; not every cited section is about Eucharist.",
  "role": "comparative source in the scholarly argument; not automatically an additional timeline testimony",
  "holding": "data/corpus/fathers/tertullian-de-baptismo/thelwall-1869.json",
  "holdingStatus": "verified acquisition in corpus report",
  "heldEdition": "Sydney Thelwall, trans., ‘De baptismo,’ in The Writings of Tertullian, vol. 1, Ante-Nicene Christian Library, vol. 11 (Edinburgh: T. & T. Clark, 1869), 231–256.",
  "inventoryId": "stone-tertullian-de-baptismo",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-tertullian-de-idololatria

```json
{
  "author": "Tertullian (traditional full-work attribution; disputed continuations noted separately)",
  "work": "On Idolatry",
  "locator": "7",
  "date": "Individual work date remains to be checked in its dated critical introduction. The completed neutral audit gives a secure literary floruit197–220, which is not used as an exact date for every work.",
  "edition": "Dated English edition actually held is listed in heldEdition; Stone’s discussion is a separate1909 scholarly witness",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, especially footnotes in the figure/representation discussion(pp.29–37) and sacrifice discussion(pp.43–53); https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/passages and actual holding; exact work date remains qualified/unconfirmed",
  "note": "Direct Eucharistic body/ministerial practice context.",
  "role": "direct/mixed Eucharistic source",
  "holding": "data/corpus/fathers/tertullian-de-idololatria/thelwall-1869.json",
  "holdingStatus": "verified acquisition in corpus report",
  "heldEdition": "Sydney Thelwall, trans., ‘De idololatria,’ in The Writings of Tertullian, vol. 1, Ante-Nicene Christian Library, vol. 11 (Edinburgh: T. & T. Clark, 1869), 141–177.",
  "inventoryId": "stone-tertullian-de-idololatria",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-tertullian-ad-scapulam

```json
{
  "author": "Tertullian (traditional full-work attribution; disputed continuations noted separately)",
  "work": "To Scapula",
  "locator": "2",
  "date": "Individual work date remains to be checked in its dated critical introduction. The completed neutral audit gives a secure literary floruit197–220, which is not used as an exact date for every work.",
  "edition": "Dated English edition actually held is listed in heldEdition; Stone’s discussion is a separate1909 scholarly witness",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, especially footnotes in the figure/representation discussion(pp.29–37) and sacrifice discussion(pp.43–53); https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/passages and actual holding; exact work date remains qualified/unconfirmed",
  "note": "Sacrifice/Christian worship vocabulary; contextual rather than an institution narrative.",
  "role": "comparative source in the scholarly argument; not automatically an additional timeline testimony",
  "holding": "data/corpus/fathers/tertullian-ad-scapulam/thelwall-1869.json",
  "holdingStatus": "verified acquisition in corpus report",
  "heldEdition": "Sydney Thelwall, trans., ‘Ad Scapulam,’ in The Writings of Tertullian, vol. 1, Ante-Nicene Christian Library, vol. 11 (Edinburgh: T. & T. Clark, 1869), 46–52.",
  "inventoryId": "stone-tertullian-ad-scapulam",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-tertullian-de-exhortatione-castitatis

```json
{
  "author": "Tertullian (traditional full-work attribution; disputed continuations noted separately)",
  "work": "Exhortation to Chastity",
  "locator": "7,11",
  "date": "Individual work date remains to be checked in its dated critical introduction. The completed neutral audit gives a secure literary floruit197–220, which is not used as an exact date for every work.",
  "edition": "Dated English edition actually held is listed in heldEdition; Stone’s discussion is a separate1909 scholarly witness",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, especially footnotes in the figure/representation discussion(pp.29–37) and sacrifice discussion(pp.43–53); https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/passages and actual holding; exact work date remains qualified/unconfirmed",
  "note": "Priestly/commemorative practice references; keep the surrounding argument.",
  "role": "direct/mixed Eucharistic source",
  "holding": "data/corpus/fathers/tertullian-de-exhortatione-castitatis/thelwall-anf-1885.json",
  "holdingStatus": "draft",
  "heldEdition": "Sydney Thelwall, trans., On Exhortation to Chastity, Ante-Nicene Fathers IV (Buffalo: Christian Literature Publishing Company, 1885), printed page range 50–58 (last-page work/editorial boundary requires visual review).",
  "inventoryId": "stone-tertullian-de-exhortatione-castitatis",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-tertullian-adversus-iudaeos

```json
{
  "author": "Tertullian (traditional full-work attribution; disputed continuations noted separately)",
  "work": "An Answer to the Jews",
  "locator": "5–6,14",
  "date": "198 (Pamelius) versus208 (Allix following Baronius), reported by ANFIII(1885),p.151 editorial note; not adopted as a settled date.",
  "edition": "Dated English edition actually held is listed in heldEdition; Stone’s discussion is a separate1909 scholarly witness",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, especially footnotes in the figure/representation discussion(pp.29–37) and sacrifice discussion(pp.43–53); https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/passages and actual holding; exact work date remains qualified/unconfirmed",
  "note": "Malachi/sacrificial argument; chapter14 belongs to the continuation whose attribution is debated in the edition.",
  "role": "direct/mixed Eucharistic source",
  "holding": "data/corpus/fathers/tertullian-adversus-iudaeos/thelwall-anf-1885.json",
  "holdingStatus": "draft",
  "heldEdition": "Sydney Thelwall, trans., An Answer to the Jews, Ante-Nicene Fathers III (Buffalo: Christian Literature Publishing Company, 1885), printed page range 151–173 (last-page work/editorial boundary requires visual review).",
  "inventoryId": "stone-tertullian-adversus-iudaeos",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-tertullian-de-anima

```json
{
  "author": "Tertullian (traditional full-work attribution; disputed continuations noted separately)",
  "work": "On the Soul",
  "locator": "17",
  "date": "Individual work date remains to be checked in its dated critical introduction. The completed neutral audit gives a secure literary floruit197–220, which is not used as an exact date for every work.",
  "edition": "Dated English edition actually held is listed in heldEdition; Stone’s discussion is a separate1909 scholarly witness",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, especially footnotes in the figure/representation discussion(pp.29–37) and sacrifice discussion(pp.43–53); https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/passages and actual holding; exact work date remains qualified/unconfirmed",
  "note": "Comparative wording in Stone’s discussion.",
  "role": "comparative source in the scholarly argument; not automatically an additional timeline testimony",
  "holding": "data/corpus/fathers/tertullian-de-anima/holmes-anf-1885.json",
  "holdingStatus": "draft",
  "heldEdition": "Peter Holmes, trans., A Treatise on the Soul, Ante-Nicene Fathers III (Buffalo: Christian Literature Publishing Company, 1885), printed page range 181–235 (last-page work/editorial boundary requires visual review).",
  "inventoryId": "stone-tertullian-de-anima",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-tertullian-scorpiace

```json
{
  "author": "Tertullian (traditional full-work attribution; disputed continuations noted separately)",
  "work": "Scorpiace",
  "locator": "12",
  "date": "Individual work date remains to be checked in its dated critical introduction. The completed neutral audit gives a secure literary floruit197–220, which is not used as an exact date for every work.",
  "edition": "Dated English edition actually held is listed in heldEdition; Stone’s discussion is a separate1909 scholarly witness",
  "source": "Darwell Stone, History of the Doctrine of the Holy Eucharist I(1909), chapterII, especially footnotes in the figure/representation discussion(pp.29–37) and sacrifice discussion(pp.43–53); https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/passages and actual holding; exact work date remains qualified/unconfirmed",
  "note": "Comparative vocabulary.",
  "role": "comparative source in the scholarly argument; not automatically an additional timeline testimony",
  "holding": "data/corpus/fathers/tertullian-scorpiace/thelwall-anf-1885.json",
  "holdingStatus": "draft",
  "heldEdition": "Sydney Thelwall, trans., Scorpiace, Ante-Nicene Fathers III (Buffalo: Christian Literature Publishing Company, 1885), printed page range 633–648 (last-page work/editorial boundary requires visual review).",
  "inventoryId": "stone-tertullian-scorpiace",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-didache-other

```json
{
  "author": "Anonymous",
  "work": "Didache",
  "locator": "9–10 in addition to14",
  "date": "Latter first century / first half of second, composite layers; completed Cambridge2025/Lake1912 audit in fathers-verification.md.",
  "edition": "Dated held English witness in heldEdition",
  "source": "Stone I(1909),chapterII, Eucharistic food and sacrifice discussions; same dated scan/OCR as above",
  "tag": "CONFIRMED: additional passages within a work already represented; not additional independent authors",
  "note": "Screen10 selects one locus from this work. Its presence does not mean every other locus is already shown.",
  "holding": "data/corpus/fathers/didache/lightfoot-harmer-1891.json",
  "holdingStatus": "verified acquisition in corpus report",
  "heldEdition": "Joseph Barber Lightfoot and J. R. Harmer, The Apostolic Fathers: Revised Texts with Short Introductions and English Translations (London and New York: Macmillan, 1891), 229–235.",
  "inventoryId": "stone-didache-other",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-justin-other

```json
{
  "author": "Justin Martyr",
  "work": "Dialogue with Trypho",
  "locator": "22,28–29,41,70,116–117",
  "date": "After First Apology, conventionallyc.155–160, not an exact date; completed neutral audit.",
  "edition": "Dated held English witness in heldEdition",
  "source": "Stone I(1909),chapterII, Eucharistic food and sacrifice discussions; same dated scan/OCR as above",
  "tag": "CONFIRMED: additional passages within a work already represented; not additional independent authors",
  "note": "Screen10 selects one locus from this work. Its presence does not mean every other locus is already shown.",
  "holding": "data/corpus/fathers/justin-dialogue-trypho/reith-1885.json",
  "holdingStatus": "verified acquisition in corpus report",
  "heldEdition": "George Reith, trans., ‘Dialogue of Justin, Philosopher and Martyr, with Trypho, a Jew,’ in The Ante-Nicene Fathers, vol. 1 (Buffalo, NY: Christian Literature Publishing Company, 1885), 194–270.",
  "inventoryId": "stone-justin-other",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-irenaeus-other

```json
{
  "author": "Irenaeus of Lyon",
  "work": "Against Heresies",
  "locator": "IV.17.5–6;IV.18.1,4–6;IV.33.2;V.2.2–3",
  "date": "c.180–189, completed fathers-verification.md work chronology.",
  "edition": "Dated held English witness in heldEdition",
  "source": "Stone I(1909),chapterII, Eucharistic food and sacrifice discussions; same dated scan/OCR as above",
  "tag": "CONFIRMED: additional passages within a work already represented; not additional independent authors",
  "note": "Screen10 selects one locus from this work. Its presence does not mean every other locus is already shown.",
  "holding": "data/corpus/fathers/irenaeus-against-heresies/roberts-rambaut-1885.json",
  "holdingStatus": "verified acquisition in corpus report",
  "heldEdition": "Alexander Roberts and W. H. Rambaut, trans., ‘Against Heresies,’ in The Ante-Nicene Fathers, vol. 1 (Buffalo, NY: Christian Literature Publishing Company, 1885), 309–567.",
  "inventoryId": "stone-irenaeus-other",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-acts-john

```json
{
  "author": "Anonymous / apocryphal apostolic narrative",
  "work": "Acts of John",
  "locator": "106–110",
  "edition": "Lipsius–Bonnet,Acta Apostolorum Apocrypha II.1,pp.203–209 (imprint not newly checked)",
  "date": "Stone1909 p.24 footnote proposes later-second-century language; retain as his proposal pending current dating.",
  "note": "Not personally authored by the apostle John. The current corpus’s Johannine biblical books are not this apocryphal work.",
  "source": "Darwell Stone,History of the Doctrine of the Holy Eucharist I(1909),chapterII; https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/reference and actual holding; any missing work date/imprint is explicitly unconfirmed",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "stone-acts-john",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-origen-judges

```json
{
  "author": "Origen",
  "work": "Homilies on Judges",
  "locator": "VII.2",
  "edition": "Primary homily citation in Stone1909,p.52 footnote",
  "date": "Work chronology not independently established in this pass.",
  "note": "Additional homily collection, not one of the normalized Origen works.",
  "source": "Darwell Stone,History of the Doctrine of the Holy Eucharist I(1909),chapterII; https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/reference and actual holding; any missing work date/imprint is explicitly unconfirmed",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "stone-origen-judges",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-origen-martyrdom

```json
{
  "author": "Origen",
  "work": "Exhortation to Martyrdom",
  "locator": "30,39",
  "edition": "Primary work cited as Mart.30,39 in Stone1909,p.52 footnote",
  "date": "Exact work date not verified here; keep draft rather than infer it from Origen’s death.",
  "note": "Do not mistake the separately acquired Letter to Gregory for this work.",
  "source": "Darwell Stone,History of the Doctrine of the Holy Eucharist I(1909),chapterII; https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/reference and actual holding; any missing work date/imprint is explicitly unconfirmed",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "stone-origen-martyrdom",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-tertullian-prescription

```json
{
  "author": "Tertullian",
  "work": "Prescription Against Heretics",
  "locator": "41",
  "edition": "Peter Holmes,ANFIII(1885)",
  "date": "Individual work date not established by this inventory.",
  "note": "Stone1909 p.53 uses ministry/priesthood language comparatively; not an additional direct Eucharistic definition.",
  "source": "Darwell Stone,History of the Doctrine of the Holy Eucharist I(1909),chapterII; https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/reference and actual holding; any missing work date/imprint is explicitly unconfirmed",
  "holding": "data/corpus/fathers/tertullian-de-praescriptione/holmes-anf-1885.json",
  "holdingStatus": "draft",
  "heldEdition": "Peter Holmes, trans., The Prescription Against Heretics, Ante-Nicene Fathers III (Buffalo: Christian Literature Publishing Company, 1885), printed page range 243–267 (last-page work/editorial boundary requires visual review).",
  "inventoryId": "stone-tertullian-prescription",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-pseudo-cyprian-shows

```json
{
  "author": "Pseudo-Cyprian / anonymous traditional attribution",
  "work": "On the Shows",
  "locator": "5",
  "edition": "Primary text cited as Pseudo-Cyprian,De spectac.5 in Stone1909,p.40 footnote",
  "date": "Date/authorship must be checked in a current critical introduction.",
  "note": "Stone explicitly distinguishes this from authentic Cyprian; do not label it Cyprian merely because the historical collection includes it.",
  "source": "Darwell Stone,History of the Doctrine of the Holy Eucharist I(1909),chapterII; https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/reference and actual holding; any missing work date/imprint is explicitly unconfirmed",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "stone-pseudo-cyprian-shows",
  "checkedAt": "2026-10-28"
}
```

### Inventory: stone-first-clement-other

```json
{
  "author": "Clement of Rome (traditional attribution)",
  "work": "First Clement",
  "locator": "18,35–36,38,40–41,44,52",
  "edition": "Lightfoot(1890), actual held edition",
  "date": "75–110, last decade of first century most probable, completed neutral chronology audit.",
  "note": "Stone1909 pp.51–52, especially its cross-reference to chapter36, connects the ministry/offerings passages; additional loci in an already listed work.",
  "source": "Darwell Stone,History of the Doctrine of the Holy Eucharist I(1909),chapterII; https://archive.org/details/historyofdoctrin01ston",
  "tag": "CONFIRMED: cited work/reference and actual holding; any missing work date/imprint is explicitly unconfirmed",
  "holding": "data/corpus/fathers/1-clement/lightfoot-1890.json",
  "holdingStatus": "verified acquisition in corpus report",
  "heldEdition": "Joseph Barber Lightfoot, The Apostolic Fathers: A Revised Text with Introductions, Notes, Dissertations, and Translations, Part I, S. Clement of Rome, 2nd ed., vol. II (London: Macmillan, 1890), 271–305.",
  "inventoryId": "stone-first-clement-other",
  "checkedAt": "2026-10-28"
}
```

Theodoret print/holding checkpoint,2026-10-28: the complete Orthodoxus reply was visually read across printedpp.200–201 (PDF216–217), and the1892 imprint read on PDFp.3. This upgrades the earlier pending scan collation of that paragraph. The whole Eranistes, including author prologue,three dialogues and Syllogisms appendix, is now held as a coarse draft; it is no longer only a paragraph/source possession.

### Inventory: frank-theodore-catecheses

```json
{
  "author": "Theodore of Mopsuestia",
  "work": "Catechetical Homilies on the Lord’s Prayer,Baptism and Eucharist",
  "locator": "Mingana volumeVI,homily5,pp.84–88 as cited by Frank; crosswalk to the full16-homily numbering must be retained",
  "date": "Mid-380s–392 is Witkamp’s preferred conjecture; a post-392 setting remains a scholarly alternative. Nathan Witkamp,Tradition and Innovation(2016),pp.8,11–13,already checked in fathers-verification.md.",
  "edition": "Alphonse Mingana,Woodbrooke Studies VI,Commentary of Theodore of Mopsuestia on the Lord’s Prayer and on the Sacraments of Baptism and the Eucharist(Cambridge:Heffer,1933); no full English-text licence cleared here",
  "source": "Georgia Frank,“Taste and See,”Church History70.4(2001),pp.619–643,notes87–92,publisher references checked2026-10-28; complete chronology/dated1933preface reuse fathers-verification.md,Theodore row.",
  "tag": "CONFIRMED: named scholarly citation and edition; date explicitly conjectural; English full-text clearance unestablished",
  "note": "Not included among the twelve screen selections and not held as a normalized work. Preserve Syriac transmission and the edition’s local homily numbering; do not silently equate homily5 with an unverified global number.",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "frank-theodore-catecheses",
  "checkedAt": "2026-10-28"
}
```

### Inventory: frank-chrysostom-catecheses

```json
{
  "author": "John Chrysostom",
  "work": "Baptismal Instructions:Stavronikita,Papadopoulos-Kerameus,and Montfaucon collections",
  "locator": "StavronikitaII.9–10; P-KIII.9–22; collection crosswalk in Frank note53",
  "date": "Precise per-homily preaching dates are not established by this inventory; retain collections separately pending dated critical introductions.",
  "edition": "Wenger,SC50(1957),eight catecheses; Piédagnel,SC366(1990),three catecheses; Montfaucon,PG49:223–240,two sermons; Paul Harkins,Baptismal Instructions,ACW31(1963)",
  "source": "Frank,“Taste and See,”Church History70.4(2001),notes53,75–78,publisher references checked2026-10-28",
  "tag": "CONFIRMED: distinct collection references and overlap; individual dates/licences not established",
  "note": "These are not simply thirteen independent instructions:the article cross-identifies Montfaucon1 with P-K1(Harkins9); Montfaucon2 is Harkins12. None of these collections is proved held by the normalized Matthew/Romans/Corinthians/Hebrews homilies.",
  "holding": "No identified normalized full work",
  "holdingStatus": "not held",
  "inventoryId": "frank-chrysostom-catecheses",
  "checkedAt": "2026-10-28"
}
```
