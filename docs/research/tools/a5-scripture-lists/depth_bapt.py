import re,sys
OUT='/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/doctrines/scripture-lists/'
HEAD='## Lectura de los documentos, en profundidad'
def put(fn,body):
    t=open(OUT+fn).read()
    t=re.split(r'\n'+re.escape(HEAD),t)[0].rstrip('\n')
    open(OUT+fn,'w').write(t+'\n\n'+HEAD+'\n\n'+body.strip()+'\n')
U='Status of this section: draft, NOT verified by Pedro. Public-domain texts only (up to ~250 words per passage); the paragraph the locator points to, as printed, with footnote letters or markers of the print removed; the passage the document attaches to the verse is named. OCR text is `[unverified: OCR]` until the page image is read; Robertson 1899 passages were read on page images (`[verified: page image, A5]`).\n'
# ---- Orthodox
put('baptism-orthodox.md',U+'''
### John 3:5 (Dositheus, Philaret, Mogila)

**Dositheus, Decree XVI, Robertson 1899 p. 139 (footnote † gives «John iii., 5») `[verified: page image, A5]`:** «We believe Holy Baptism, which was instituted by the Lord, and is conferred in the name of the Holy Trinity, to be of the highest necessity. For without it none is able to be saved, as the Lord saith, ‘Whosoever is not born of water and of the Spirit, shall in no wise enter into the Kingdom of the Heavens.’ And, therefore, it is necessary even for infants, since they also are subject to original sin, and without Baptism are not able to obtain its remission. Which the Lord shewed when he said, not of some only, but simply and absolutely, ‘Whosoever is not born [again],’ which is the same as saying, ‘All that after the coming of Christ the Saviour would enter into the Kingdom of the Heavens must be regenerated.’» (pp. 139–140)

**Philaret, Longer Catechism Q. 288, Schaff II p. 491 (Blackmore) `[unverified: OCR]`:** «Baptism is a Sacrament, in which a man who believes, having his body thrice plunged in water in the name of God the Father, the Son, and the Holy Ghost, dies to the carnal life of sin, and is born again of the Holy Ghost to a life spiritual and holy. Except a man be born of water and of the Spirit, he can not enter into the kingdom of God. John iii. 5.»

**Mogila, Part I, Q. 102, Overbeck 1898 pp. 75–76 `[unverified: OCR]`:** «Baptism is a washing away and rooting out of original Sin, by being thrice immersed in Water; the Priest pronouncing these Words: In the Name of the Father, Amen; and of the Son, Amen; and of the Holy Ghost, Amen. After which Regeneration by Water and the Spirit a Man is restored to the Grace of God, and the Way opened him into the Kingdom of Heaven; as our Saviour said (John iii. 5), Except a Man be born of Water and of the Spirit, he cannot enter into the Kingdom of God.»

### Matthew 28:19, Acts 19:4, Acts 2:38, Mark 16:16 (Philaret Q. 289–291)

**Philaret Q. 289 `[unverified: OCR]`:** «First, John baptized with the baptism of repentance, saying unto the people, that they should believe on him which should come after him, that is, on Christ Jesus. Acts xix. 4. Afterwards, Jesus Christ, by his own example, sanctified Baptism, when he received it from John. Lastly, after his resurrection, he gave the Apostles this solemn commandment: Go ye and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost. Matt. xxviii. 19.»

**Philaret Q. 291 `[unverified: OCR]`:** «Repentance and faith; for which cause, also, before Baptism they recite the Creed. Repent, and be baptized every one of you in the name of Jesus Christ for the remission of sins, and ye shall receive the gift of the Holy Ghost. Acts ii. 38. He that believeth and is baptized shall be saved. Mark xvi. 16.»

### The effects of baptism (Dositheus XVI, p. 142: Matt 3:11, Heb 6:4, Tit 3:5, Col 3:9, Gal 3:27, Rom 5:19) `[verified: page image, A5]`

«For if Baptism be by the Spirit and by fire, it is manifest that it is in all a perfect cleansing; for the Spirit cleanseth perfectly. If it be light, it dispelleth the darkness. If it be regeneration, old things are passed away. And what are these except sins? If the baptised putteth off the old man, then sin also. If he putteth on Christ, then in effect he becometh free from sin through Baptism. For God is far from sinners. This Paul also teacheth more plainly, saying: ‘As through one [man] we, being many, were made sinners, so through one [are we made] righteous.’ And if righteous, then free from sin.» (Robertson 1899 p. 142; the footnotes of the editor give, in order, Matt. iii., 11; Heb. vi., 4; Tit. iii., 5; Col. iii., 9; Gal. iii., 27; Rom. v., 19.)

### Infants (Dositheus XVI, p. 140: Matt 19:12 as printed, Acts 8:12 and 16:33) `[verified: page image, A5]`

«Moreover, infants are saved, as is said in Matthew; but he that is not baptised is not saved. And consequently even infants must of necessity be baptised. And in the Acts it is said that the whole houses were baptised, and consequently the infants.» (footnotes: Matt. xix., 12; Acts viii., 12; xvi., 33)
''')
# ---- Lutheran
put('baptism-lutheran.md',U+'''
Concordia Triglotta 1921, English column, archive.org `concordiatriglot00unse`, OCR text `[unverified: OCR; Triglot page image not read]`.

### Matthew 28:19 and Mark 16:16

**Small Catechism IV:** «Baptism is not simple water only, but it is the water comprehended in God's command and connected with God's Word. Which is that word of God? Answer. Christ, our Lord, says in the last chapter of Matthew: Go ye into all the world and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost. Secondly. What does Baptism give or profit? Answer. It works forgiveness of sins, delivers from death and the devil, and gives eternal salvation to all who believe this, as the words and promises of God declare. Which are such words and promises of God? Answer. Christ, our Lord, says in the last chapter of Mark: He that believeth and is baptized shall be saved; but he that believeth not shall be damned.» (the OCR reads «@o ye»; read as «Go ye»)

**Large Catechism IV, §§3–5:** «…we must above all things know well the words upon which Baptism is founded, and to which everything refers that is to be said on the subject, namely, where the Lord Christ speaks in the last chapter of Matthew, v.19: Go ye therefore and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost. Likewise in St. Mark, the last chapter, v.16: He that believeth and is baptized shall be saved; but he that believeth not shall be damned. In these words you must note, in the first place, that here stand God's commandment and institution, lest we doubt that Baptism is divine, not devised nor invented by men.» (clipped at the start)

**Apology IX:** «…it is necessary to baptize little children, that the promise of salvation may be applied to them, according to Christ's command, Matt. 28, 19: Baptize all nations. Just as here salvation is offered to all, so Baptism is offered to all, to men, women, children, infants.»

### Titus 3:5–8 and Romans 6:4 (Small Catechism IV)

«Thirdly. How can water do such great things? Answer. It is not the water indeed that does them, but the word of God which is in and with the water, and faith, which trusts such word of God in the water. For without the word of God the water is simple water and no baptism. But with the word of God it is a baptism, that is, a gracious water of life and a washing of regeneration in the Holy Ghost, as St. Paul says, Titus, chapter three: By the washing of regeneration and renewing of the Holy Ghost, which He shed on us abundantly through Jesus Christ, our Savior, that, being justified by His grace, we should be made heirs according to the hope of eternal life. This is a faithful saying. Fourthly. What does such baptizing with water signify? Answer. It signifies that the old Adam in us should, by daily contrition and repentance, be drowned and die with all sins and evil lusts, and, again, a new man daily come forth and arise, who shall live before God in righteousness and purity forever.» Then, after the Latin and German columns: «Where is this written? — Answer. St. Paul says Romans, chapter 6: We are buried with Christ by Baptism into death, that, like as He was raised up from the dead by the glory of the Father, even so we also should walk in newness of life.»

### Ephesians 5:26 (Smalcald Articles III V; no reference printed)

«Baptism is nothing else than the Word of God in the water, commanded by His institution, or, as Paul says, a washing in the Word; as also Augustine says: Let the Word come to the element, and it becomes a Sacrament.»
''')
