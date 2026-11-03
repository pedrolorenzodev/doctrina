import sys; sys.path.insert(0,'/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/860b43de-3998-41a5-bbee-361b678b7c19/scratchpad/tools')
from s1blib import *
DOS='Confession of Dositheus (Synod of Jerusalem 1672)'
ROB='J. N. W. B. Robertson, The Acts and Decrees of the Synod of Jerusalem (London: Thomas Baker, 1899), archive.org actsdecreesofsyn00orth'
URL_ROB='https://archive.org/details/actsdecreesofsyn00orth'
TV='[verified: Robertson 1899 page image read by S1b 2026-11-02]'
TO='[unverified: OCR; page image not read]'
PHI='Longer Catechism of the Eastern Church (Philaret)'
SCH='P. Schaff, The Creeds of Christendom, vol. II (New York: Harper, 1877 ed.), archive.org creedschristendo02scha, OCR djvu text; Philaret in the English of Blackmore'
URL_SCH='https://archive.org/details/creedschristendo02scha'
MOG='Orthodox Confession of Peter Mogila'
MOGED='J. Overbeck (ed.), The Orthodox Confession of the Catholic and Apostolic Eastern Church (London: Thomas Baker, 1898), archive.org cu31924029363094, OCR djvu text'
URL_MOG='https://archive.org/details/cu31924029363094'
LIST='printed reference list under the chapter (not tied to a clause)'
def O(ref):
    return ref
def addall(L,refs,work,loc,how,sent,ed,tag,url,flag=None):
    for ref,printed in refs:
        L.add(ref,work,loc,how,sent,ed,tag,url,printed,flag)
def P(book,ch,v=None,v2=None):
    if v is None: return f'{book}.{ch}'
    return f'{book}.{ch}.{v}' if v2 is None or v2==v else f'{book}.{ch}.{v}-{book}.{ch}.{v2}'
# ---------------- Sola Scriptura Orthodox
S=Lst('sola-scriptura-orthodox')
ed=ROB+'; page images read: leaves n220–n223 = printed pp. 209–212'
s1='[…] For neither can we learn from any other source than from the Sacred Scriptures, whether it be by reading the same, or by hearing what is therein expounded by faithful men. […] it is forbidden to no Christian to hear what is in the Sacred Scriptures […] neither it is forbidden to him to read them. […]'
q1=[('Deut.6.6','Deut. vi., 6'),('Deut.17.18','xvii., 18'),('Deut.31.11','Deut. xxxi., 11'),('Josh.1.8','Jos. i., 8'),('Neh.8.31','Neh. viii., 31'),
 ('John.5.39','John v., 39'),('John.10.27','x., 27'),('John.8.31','viii., 31'),('Luke.16.29','Luke xvi., 29'),('Luke.4.16','iv., 16'),
 ('Acts.13.27','Acts xiii., 27'),('Acts.15.21','xv., 21'),('Acts.8.28','viii., 28'),('Acts.17.11','xvii., 11'),('2Tim.3.15','2 Tim. iii., 15'),
 ('Rom.15.4','Rom. xv., 4'),('Col.4.16','Col. iv., 16'),('1Thess.5.27','1 Thes. v., 27'),('1John.1.4','1 John i., 4'),('1John.2.12','ii., 12'),
 ('Isa.5.13','Esai. v., 13'),('Jer.8.9','Jer. viii., 9'),('Hos.4.6','Hos. iv., 6'),('John.7.49','John vii., 49'),('Luke.11.52','Luke xi., 52'),
 ('Matt.23.13','Matt. xxiii., 13'),('Matt.15.14','xv., 14'),('1John.4.1','1 John iv., 1'),('1Thess.5.19-1Thess.5.20','1 Thes. v., 19, 20'),
 ('John.17.3','John xvii., 3'),('John.21.31','xxi., 31'),('Luke.11.28','Luke xi., 28'),('Ps.119.9','Ps. cxviii. [cxix.], 9'),('Ps.1.1-Ps.1.2','i., 1, 2'),('Ps.119.1','cxviii. [cxix.], 1'),('Rev.1.3','Apoc. i., 3')]
addall(S,q1,DOS,'Confession, appended Question I (printed p. 209; answer pp. 208–209)',LIST,s1,ed,TV,URL_ROB,
 'printed in two columns after the answer, in the order of the print; the print does not say which clause each reference serves; «Neh. viii., 31», «John xxi., 31» and «viii., 31» as printed [not repaired]')
s2='[…] the dogmas of the Faith therein contained are plain and clear to those that are regenerated and enlightened by the Holy Spirit. […] the Scriptures are a lamp and a light enlightening the understandings of the Faithful, and driving away the darkness.'
q2=[('2Pet.3.5','2 Peter iii., 5'),('Ps.19.8','Ps. xviii. [xix.], 8'),('Ps.119.104','cxviii. [cxix.], 104'),('Ps.25.5','xxiv. [xxv.], 5'),('Isa.53.10','Esai. liii., 10'),('Jer.31.33','Jer. xxxi., 33'),
 ('John.6.45','John vi., 45'),('Matt.11.25','Matt. xi., 25'),('Matt.13.11','xiii., 11'),('Matt.16.17','xvi., 17'),('Luke.24.45','Luke xxiv., 45'),('1John.2.27','1 John ii., 27'),('1John.12.3','xii., 3'),
 ('2Cor.1.13','2 Cor. i., 13'),('2Cor.3.9','iii., 9'),('2Cor.3.13','13'),('2Cor.4.3','iv., 3'),('Eph.1.17','Eph. i., 17'),('Eph.3.16','iii., 16'),('Eph.3.19','19'),('Rom.12.6','Rom. xii., 6')]
addall(S,q2,DOS,'Confession, appended Question II (printed pp. 210–211)',LIST,s2,ed,TV,URL_ROB,
 'printed after the answer (p. 210 foot, p. 211 head); the print does not say which clause each reference serves; «2 Peter iii., 5» and «1 John … xii., 3» as printed (no such chapter in 1 John) [not repaired]')
s3='By Sacred Scripture we mean all the Canonical Books, which as a rule of our Faith and salvation we have received and do hold; especially, because they being divinely inspired, teach us doctrine, and are of themselves sufficient to instruct, enlighten, and perfect him that cometh to the Faith. […]'
q3=[('2Tim.3.16','2 Tim. iii., 16'),('1Tim.4.10','1 Tim. iv., 10'),('Rom.3.1-Rom.3.2','Rom. iii., 1, 2'),('1Cor.15.3-1Cor.15.4','1 Cor. xv., 3, 4'),('Deut.4.2','Deut. iv., 2'),('Deut.5.1','v., 1'),('Deut.6','vi.'),
 ('Matt.22.29','Matt. xxii., 29'),('Eph.2.20','Eph. ii., 20'),('Jer.23.28','Jer. xxiii., 28'),('1Pet.4.11','1 Peter iv., 11'),('Eccl.12.10','Eccles. xii., 10'),('1Cor.4.6','1 Cor. iv., 6'),
 ('1Pet.1.21','1 Peter i., 21'),('1John.5.5','1 John v., 5'),('Acts.3.24','Acts iii., 24'),('Acts.26.22','xxvi., 22'),('Acts.17.11','Acts xvii., 11'),('John.1.7','John i., 7'),('John.23.6','xxiii., 6'),
 ('Mark.7.27','Mark vii., 27'),('1Cor.3.10','1 Cor. iii., 10'),('1Cor.11.12','xi., 12'),('John.3.30','John iii., 30'),('Prov.30.5','Prov. xxx., 5'),('Gal.1.8','Gal. i., 8'),('Gal.6.16','vi., 16'),('Gal.3.15','iii., 15'),
 ('Deut.12.32','Deut. xii., 32'),('Rev.22.18-Rev.22.19','Apoc. xxii., 18, 19')]
addall(S,q3,DOS,'Confession, appended Question III (the canon; printed p. 212)',LIST,s3,ed,TV,URL_ROB,
 'printed after the answer; the print does not say which clause each reference serves; «Deut. … vi.» has no verse; «John xxiii., 6» as printed (John has 21 chapters) [not repaired]')
# set-1 questions (OCR)
ed1=ROB+', OCR djvu text (Decrees, appended Questions I–II, printed pp. 152–154; page image not read)'
S.add('2Tim.3.16',DOS,'Decrees, appended Question I (p. 152, footnote)','footnote reference (editor\'s)','[…] For that all Scripture is divinely-inspired and profitable we know, and is of such necessity, that without the same it is impossible to be Orthodox at all. […]',ed1,TO,URL_ROB,'Cf. 2 Tim. iii., 16 (OCR reads «lii.»)','OCR of the footnote reads «lii.»; read as iii. by Doctrina [unverified]')
S.add('Rom.10.10',DOS,'Decrees, appended Question I (p. 153, footnote)','quoted words, footnote garbled in the OCR','[…] it is permitted to every Orthodox to hear indeed the Scriptures, that he may believe with the heart unto righteousness, and confess with the mouth unto salvation […]',ed1,TO,URL_ROB,None,'the OCR of the footnote is unreadable; the verse is identified from the quoted words by Doctrina [unverified]')
S.add('John.5.39',DOS,'Decrees, appended Question II (p. 154, footnote)','quoted words, footnote garbled in the OCR','If the Divine Scriptures were plain to all Christians that read them, the Lord would not have commanded such as desired to obtain salvation to search the same […]',ed1,TO,URL_ROB,None,'the OCR of the footnote is unreadable; the verse is identified from the words «search the Scriptures» by Doctrina [unverified]')
S.add('1Cor.12.28',DOS,'Decrees, appended Question II (p. 154, footnote)','footnote reference (editor\'s)','[…] and Paul would have said without reason that God had placed the gift of teaching in the Church […]',ed1,TO,URL_ROB,'1 Cor. xii., 28',None)
S.add('2Pet.3.16',DOS,'Decrees, appended Question II (p. 154, footnote)','quoted words, footnote garbled in the OCR','[…] and Peter would not have said of the Epistles of Paul that they contained some things hard to be understood.',ed1,TO,URL_ROB,None,'the OCR of the footnote is unreadable; the verse is identified from the quoted words by Doctrina [unverified]')
# Mogila Q4
sM='Faith (according to the blessed Paul, Heb. xi. 1) is the substance of Things hoped for, the Evidence of Things not seen […]'
S.add('Heb.11.1',MOG,'Part I, Q. 4','inline reference',sM,MOGED,TO,URL_MOG,'Heb. xi. 1')
S.add('Rom.10.10',MOG,'Part I, Q. 4','inline reference','[…] As the same Apostle teacheth us (Rom. x. 10), With the Heart is believed unto Righteousness, and with the Mouth Confession is made unto Salvation.',MOGED,TO,URL_MOG,'Rom. x. 10')
S.add('Ps.116.10',MOG,'Part I, Q. 4','inline reference','[…] according to the holy Psalmist and St. Paul (Psal. cxvi. 10), I believed, and therefore have I spoken; we believe, and therefore speak.',MOGED,TO,URL_MOG,'Psal. cxvi. 10','the print numbers the Psalm cxvi (Hebrew numbering); the verse is not repaired')
# Philaret
def PH(S,ref,q,page,how,sent,printed,flag=None,tag=TO):
    S.add(ref,PHI,f'Q. {q} (Schaff II p. {page})',how,sent,SCH+f', p. {page}',tag,URL_SCH,printed,flag)
PH(S,'Heb.1.1-Heb.1.2',14,447,'quoted words, book named, no verse printed','The Apostle Paul says, in the beginning of his Epistle to the Hebrews: God, who at sundry times, and in divers manners, spake in times past unto the Fathers by the Prophets, hath in these last days spoken unto us by his Son […]','beginning of his Epistle to the Hebrews','no chapter or verse printed: «the beginning of his Epistle to the Hebrews»; verses identified from the quoted words by Doctrina [unverified]')
PH(S,'1Cor.2.7-1Cor.2.8',14,447,'inline reference','The same Apostle writes as follows to the Corinthians: But we speak the wisdom of God in a mystery, even the hidden things which God ordained before the world unto our glory, which none of the princes of this world knew. […]','1 Cor. ii. 7, 8, 10')
PH(S,'1Cor.2.10',14,447,'inline reference','[…] But God hath revealed them unto us by his Spirit; for the Spirit searcheth all things, yea, the deep things of God.','1 Cor. ii. 7, 8, 10')
PH(S,'John.1.18',14,447,'inline reference','The Evangelist John writes in his Gospel: No man hath seen God at any time; the only-begotten Son, which is in the bosom of the Father, he hath declared him.','John i. 18')
PH(S,'Matt.11.27',14,447,'inline reference','Jesus Christ himself says: No man knoweth the Son but the Father; neither knoweth any man the Father save the Son, and he to whomsoever the Son will reveal him.','Matt. xi. 27')
PH(S,'Rom.1.20',15,448,'inline reference','For the invisible things of him, from the creation of the world, are clearly seen, being understood by the things that are made, even his eternal power and Godhead.','Rom. i. 20')
PH(S,'Acts.17.26-Acts.17.28',15,448,'inline reference','And he hath made of one blood all nations of men, for to dwell on all the face of the earth […] For in him we live, and move, and have our being.','Acts xvii. 26-28')
PH(S,'Luke.24.44',37,452,'inline reference','Jesus Christ himself gives to these books the general name of the Law of Moses.','Luke xxiv. 44 (OCR «xxiv. -i-i»)','OCR of the reference reads «xxiv. -i-i»; read as 44 by Doctrina [unverified]')
PH(S,'Matt.1.22-Matt.1.23',58,454,'inline reference','[…] the holy Evangelist Matthew, when relating the birth of Christ, brings forward the prophecy of Isaiah: Now all this was done, that it might be fulfilled which was spoken of the Lord by the Prophet, saying: Behold a Virgin shall be with child […]','Matt. i. 22, 23')
PH(S,'John.5.36',60,455,'inline reference','[…] our Lord Jesus Christ himself owns miracles as a powerful testimony to his divine mission: The works which the Father hath given me to finish, the same works that I do, bear witness of me, that the Father hath sent me.','John v. 36')
S.nr_replace=['Philaret Q. 1–62 read (OCR, Schaff II pp. 445–455): references collected from Q. 14, 15, 18, 23, 32, 37, 58, 60; Q. 2, 4, 5, 6, 8 and 62 print references about catechism, faith and works and the theological virtues, not collected; Q. 16–17, 19–22, 24–31, 33–36, 38–57 print no Scripture reference (Q. 33 and 34 name the books of the Old Testament, Q. 44–55 the New Testament, none with a verse; Q. 24 quotes Basil, Q. 18 Irenaeus).',
 'Philaret page images not read (`[unverified: OCR]`).',
 'Mogila Part I Q. 1–12 read in the OCR: Q. 4 (the sources of the articles of faith: Scripture and tradition) collected; Q. 1 (James), Q. 8 (the Trinity), Q. 9, 11, 12 print references about faith and the Trinity, not collected; the rest of Mogila Part I that mentions Scripture (Q. 16–36, Q. 54–126) was not read for this page.',
 'Dositheus: Decree II (p. 113, three footnotes), the Decrees\' appended Questions I–III (pp. 152–156, OCR; Question III prints none), and the Confession\'s appended Questions I–III (pp. 208–212, read on the page images, reference lists). Decree III (predestination) prints 1 Tim 2:4, James 1:13, Luke 15:7: not collected (not about Scripture). Question IV (images) prints none in the lines read.',
 'Jeremiah\'s Answers and the 1848 Encyclical: not read (no print in the cached texts).']
S.extra_notes=[f'Added in S1b: {len(q1)} + {len(q2)} + {len(q3)} references from the three reference lists of the Confession\'s appended Questions I–III (printed pp. 209–212, leaves n220–n223 read on 2026-11-02); the print gives the references in two columns after each answer and does not tie them to clauses; every row carries the first sentence of the answer only as the place where the list sits.']
S.save(); print('SS',S.before,len(S.data),S.newcites)
# ---------------- Baptism Orthodox
B=Lst('baptism-orthodox')
edc=ROB+'; page image read: leaf n213 = printed p. 202'
sB='We believe that Baptism is a Mystery instituted by the Lord, which, except any one receive, he hath no communion with Christ […] so that those that are washed in the Name of the Father, and of the Son, and of the Holy Spirit, are regenerated, cleansed, and justified. […]'
q16=[('Mark.1.4','Mark i., 4'),('Matt.28.19','Matt. xxviii., 19'),('Rom.6.3','Rom. vi., 3'),('Gal.3.12','Gal. iii., 12'),('Luke.3.13','Luke iii., 13'),('Titus.3.5','Tit. iii., 5'),
 ('John.1.6','John i., 6'),('John.1.33','33'),('John.3.32','iii., 32'),('Mark.16.16','Mark xvi., 16'),('Col.2.12','Col. ii., 12'),('Gal.3.26','Gal. iii., 26'),('Acts.2.38','Acts ii., 38'),('Acts.10.47','x., 47'),('Acts.22.16','xxii., 16'),('Eph.4.5','Eph. iv., 5'),('Heb.6.4','Heb. vi., 4')]
addall(B,q16,DOS,'Confession, Chapter XVI (printed p. 202)',LIST,sB,edc,TV,URL_ROB,'printed in two columns after the chapter, in the order of the print; the print does not say which clause each reference serves; «Gal. iii., 12», «Luke iii., 13», «John … iii., 32» as printed [not repaired]')
sX='We believe that there are in the Church Evangelical Mysteries […] that they are seven […]'
edx=ROB+'; page image read: leaf n212 = printed p. 201'
q15=[('Matt.28.19-Matt.28.20','Matt. xxviii., 19, 20'),('Mark.16.16','Mark xvi., 16'),('John.3.5','John iii., 5'),('Acts.8.36','Acts viii., 36'),('Rom.4.11','Rom. iv., 11'),('Col.2.11','Col. ii., 11'),('1Pet.3.21','1 Peter iii., 21'),('Heb.10.22','Heb. x., 22'),('Mark.1.4','Mark i., 4'),('Rom.2.28-Rom.2.29','Rom. ii., 28, 29'),('Eph.5.25','Eph. v., 25')]
addall(B,q15,DOS,'Confession, Chapter XV (the Mysteries; printed p. 201)',LIST,sX,edx,TV,URL_ROB,'the print gives one list for all seven Mysteries without saying which Mystery each reference serves; listed here as the references of that list that name baptism, circumcision of the heart or washing, chosen by Doctrina from the wording of the verses [unverified]')
edd=ROB+', OCR djvu text (Decree XV, printed pp. 135–136; page image not read)'
B.add('Matt.28.19',DOS,'Decree XV (the Mysteries), p. 135, footnote *','footnote reference (editor\'s)','[…] our Lord instituted Holy Baptism by the words, \'Go ye and make disciples of all the nations, baptising them in the name of the Father, and of the Son, and of the Holy Spirit\' […]',edd,TO,URL_ROB,'Matt. xxviii., 19 (OCR «xxvill., το»)','OCR of the footnote reads «xxvill., το»; read as xxviii., 19 by Doctrina [unverified]')
B.add('Mark.16.16',DOS,'Decree XV (the Mysteries), p. 135, footnote †','footnote reference (editor\'s)','[…] and by the words, \'He that believeth and is baptised shall be saved, but he that disbelieveth shall be condemned.\'',edd,TO,URL_ROB,'Mark xvi., 16')
sP='[…] Hence they hang upon the baptized a Cross […] As a visible expression and continual remembrance of Christ\'s command: If any man will come after me, let him deny himself, and take up his cross, and follow me.'
PH(B,'Matt.16.24',301,493,'inline reference',sP,'Matt. xvi. 24')
PH(B,'2Pet.2.20',305,493,'inline reference','[…] That they are more guilty in their sins than the unbaptized […] For if after they have escaped the pollutions of the world through the knowledge of the Lord and Saviour Jesus Christ, they are again entangled therein and overcome, the latter end is worse with them than the beginning.','2 Peter ii. 20')
B.nr_replace=['Philaret Q. 285–306 (Of Baptism) read in full on the OCR text (Schaff II pp. 491–493): Q. 288, 289, 291, 294, 296, 297 (already listed), 301 (Matt 16:24) and 305 (2 Pet 2:20) added; Q. 285–287, 290, 292, 293, 295, 298, 299, 300, 302, 303, 304, 306 print no Scripture reference (Q. 298 quotes Cyril of Jerusalem, Q. 295 Dionysius, Q. 299 Dionysius and Tertullian, with no Scripture reference); Q. 307–314 (Unction with Chrism: 1 John 2:20, 27; 2 Cor 1:21–22; Acts 8:14, 16; Exod 30:25; 1 Kings 1:39) belong to a different Mystery and are not collected.',
 'Dositheus: Decree XV (OCR, pp. 135–137), Chapter XV and Chapter XVI of the Confession (page images, pp. 201–202) read; the Decrees\' Mystery lists give Mark 1:4 etc. only through Chapter XV. 1895 Encyclical (reception of Western baptism) and Jeremiah\'s Answers: not read (no print in the cached texts).',
 'Philaret and Mogila records are `[unverified: OCR]`; Mogila Q. 102–103 was not re-read in this session; Dositheus Decree XVI (pp. 139, 140, 142) and Confession Chapters XV–XVI were read on page images.']
B.extra_notes=[f'Added in S1b: the Confession\'s Chapter XVI reference list ({len(q16)} references, printed p. 202) and the baptism-related references of the Chapter XV list (p. 201), Decree XV (OCR) and Philaret Q. 301, 305. Several of the new references are not in the dossier lists (Mark 1:4, Rom 6:3, Gal 3:26, Acts 10:47, Acts 22:16, Eph 4:5, 1 Pet 3:21, Heb 10:22, and others).']
B.save(); print('B',B.before,len(B.data),B.newcites)
# ---------------- Eucharist Orthodox
E=Lst('eucharist-orthodox')
edc=ROB+'; page image read: leaf n216 = printed p. 205'
sE='We believe the other Mystery instituted by the Lord to be what we call the Eucharist. For in the night wherein the Lord gave Himself up, taking bread and blessing, He said to His Apostles: \'Take, eat ye; This is My Body.\' […] \'Drink ye all of It, This is My Blood […]\' […]'
q17=[('Matt.26.26','Matt. xxvi., 26'),('Mark.14.22','Mark xiv., 22'),('Luke.22.19','Luke xxii., 19'),('1Cor.11.23','1 Cor. xi., 23'),('1Cor.10.16','x., 16'),('Acts.1.9','Acts i., 9'),('Acts.3.21','iii., 21'),('Col.3.1','Col. iii., 1'),('Eph.3.17','Eph. iii., 17'),('1Cor.12.13','1 Cor. xii., 13'),('Gal.2.30','Gal. ii., 30'),('2Cor.5.7','2 Cor. v., 7'),('Heb.11.1','Heb. xi., 1'),
 ('John.6.35','John vi., 35'),('John.6.53','53'),('John.6.56','56'),('John.6.57','57'),('John.6.58','58'),('John.6.60','60')]
addall(E,q17,DOS,'Confession, Chapter XVII (printed pp. 203–205; list on p. 205)',LIST,sE,edc,TV,URL_ROB,'printed in two columns after the chapter; the print does not say which clause each reference serves; «Gal. ii., 30» as printed (Galatians 2 has 21 verses) [not repaired]')
edd=ROB+', OCR djvu text (Decree XV, printed pp. 136–137; page image not read)'
sD='And the unbloody Sacrifice by the words, \'Take, eat ye; This is My Body\'; and \'Drink ye all of It; This is My Blood of the New Testament\'; and by the words, \'Except ye eat the Flesh of the Son of Man, ye have not life in yourselves.\''
E.add('Matt.26.26',DOS,'Decree XV (the Mysteries), p. 136, footnote ||','footnote reference (editor\'s)',sD,edd,TO,URL_ROB,'Matt. xxvi., 26; Mark xiv., 22; and cf. Luke xxii., 19')
E.add('Matt.26.27',DOS,'Decree XV (the Mysteries), p. 136, footnote ¶','footnote reference (editor\'s)',sD,edd,TO,URL_ROB,'Matt. xxvi., 27; and cf. Mark xiv., 24; Luke xxii.')
E.add('Mark.14.22',DOS,'Decree XV (the Mysteries), p. 136, footnote ||','footnote reference (editor\'s)',sD,edd,TO,URL_ROB,'Matt. xxvi., 26; Mark xiv., 22; and cf. Luke xxii., 19')
E.add('Mark.14.24',DOS,'Decree XV (the Mysteries), p. 136, footnote ¶','footnote reference (editor\'s)',sD,edd,TO,URL_ROB,'Matt. xxvi., 27; and cf. Mark xiv., 24; Luke xxii.')
E.add('Luke.22.19',DOS,'Decree XV (the Mysteries), p. 136, footnote ||','footnote reference (editor\'s)',sD,edd,TO,URL_ROB,'and cf. Luke xxii., 19','OCR of the footnote reads «xxi, το»; read as xxii., 19 by Doctrina [unverified]; the cf. to Luke xxii. in the second footnote is not read (OCR illegible)')
E.add('John.6.53',DOS,'Decree XV (the Mysteries), p. 137, footnote *','footnote reference (editor\'s)',sD,edd,TO,URL_ROB,'John vi., 53','OCR of the footnote reads «Jobn νι, 53»; read as John vi., 53 by Doctrina [unverified]')
sX2='We believe that there are in the Church Evangelical Mysteries […] that they are seven […]'
for ref,pr in [('1Cor.11.23','1 Cor. xi., 23'),('1Cor.11.27','1 Cor. xi., 27'),('Luke.22.19','Luke xxii., 19')]:
    E.add(ref,DOS,'Confession, Chapter XV (the Mysteries; printed p. 201)',LIST,sX2,ROB+'; page image read: leaf n212 = printed p. 201',TV,URL_ROB,pr,'the print gives one list for all seven Mysteries without saying which Mystery each reference serves; listed here for the verses that name the Supper, chosen by Doctrina from the wording [unverified]')
E.nr_replace=['Philaret Q. 315–350 read in full on the OCR text (Schaff II pp. 495–499): references printed at Q. 329, 338, 341, 342, 344, 350 (all already listed); Q. 315–328, 330–337, 339, 340, 343, 345–349 print no Scripture reference (Q. 340 quotes John of Damascus; Q. 343 refers to Mogila I Q. 90; Q. 332 mentions blood and water from the pierced side without a reference).',
 'Dositheus: Decree XV (OCR; footnotes partly garbled), Chapter XV and Chapter XVII of the Confession (page images, pp. 201, 205) read; Decree XVII read earlier on page images (pp. 143–150).',
 'Mogila Q. 106–107 read earlier (six references in Q. 107); Q. 108 onward is other Mysteries. 1895 Encyclical and Jeremiah\'s Answers: not read (no print in the cached texts).',
 'Mogila and Philaret: `[unverified: OCR]`, page images not read.']
E.extra_notes=[f'Added in S1b: the Confession\'s Chapter XVII reference list ({len(q17)} references, printed p. 205) and Decree XV footnotes (OCR) and the Chapter XV list entries that name the Supper.']
E.save(); print('E',E.before,len(E.data),E.newcites)
