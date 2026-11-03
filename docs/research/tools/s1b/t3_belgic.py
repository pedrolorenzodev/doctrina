import sys; sys.path.insert(0,'/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/860b43de-3998-41a5-bbee-361b678b7c19/scratchpad/tools')
from s1blib import *
BC='Belgic Confession'
SCH3='P. Schaff, The Creeds of Christendom, vol. III (New York: Harper, 1877), archive.org creedsofchristen187803scha'
URL='https://archive.org/details/creedsofchristen187803scha'
TV='[verified: Schaff III 1877 page image read by S1b 2026-11-02]'
TO='[unverified: OCR; scan page image not read]'
NOTE='footnote reference (editor\'s, French-column abbreviations)'
def add(L,items,loc,sent,ed,tag,flag,how=NOTE):
    for ref,pr in items:
        L.add(ref,BC,loc,how,sent,ed,tag,URL,pr,flag)
# ---- Sola Scriptura Reformed
S=Lst('sola-scriptura-reformed')
FL='the footnote numbers sit on words of the French column that the print and Doctrina do not tie to the English clause here; the notes of the page are listed as printed'
S.add('Rom.1.20',BC,'Art. II (By what means God is made known unto us)','inline reference','[…] the invisible things of God, namely, his eternal power and Godhead, as the Apostle Paul saith (Rom. i. 20). All which things are sufficient to convince men, and leave them without excuse.',SCH3+', English column; page image read: leaf n399 = printed p. 384',TV,URL,'Rom. i. 20')
add(S,[('Ps.19.2','Psa. xix. 2'),('Eph.4.6','Eph. iv. 6'),('Ps.19.8','Psa. xix. 8'),('1Cor.12.6','1 Cor. xii. 6')],'Art. II, notes 3–4 at the foot of p. 384','We know him by two means: first, by the creation, preservation, and government of the universe […] Secondly, he makes himself more clearly and fully known to us by his holy and divine Word […]',SCH3+'; page image read: leaf n399 = printed p. 384',TV,FL+'; «1 Cor. xii. 6» is printed with a blot on the verse number (6 or 8)')
e385=SCH3+'; page image read: leaf n400 = printed p. 385'
add(S,[('2Pet.1.21','2 Pier. i. 21')],'Art. III (Of the written Word of God), note 1 at the foot of p. 385','We confess that this Word of God was not sent nor delivered by the will of man, but that holy men of God spake as they were moved by the Holy Ghost, as the Apostle Peter saith. […]',e385,TV,'note 1 stands on «saint Pierre» in the French column; the print reads «2 Pier.» (2 Peter)')
add(S,[('Exod.24.4','Exod. xxiv. 4'),('Ps.102.19','Psa. cii. 19'),('Hab.2.2','Hab. ii. 2')],'Art. III, note 2 at the foot of p. 385','[…] our God, of his special care for us and our salvation, commanded his servants, the Prophets and Apostles, to commit his revealed word to writing […]',e385,TV,'note 2 stands on the Prophets in the French column; verse numbers as printed (the print numbers the Psalm cii, Hebrew numbering)')
add(S,[('2Tim.3.16','2 Tim. iii. 16'),('Rev.1.11','Apoc. i. 11')],'Art. III, note 3 at the foot of p. 385','[…] and he himself wrote with his own finger the two tables of the law. Therefore we call such writings holy and divine Scriptures. (note 3 stands on the Apostles in the French column)',e385,TV,'the print gives the Revelation as «Apoc. i. 11»')
add(S,[('Exod.31.18','Exod. xxxi. 18')],'Art. III, note 4 at the foot of p. 385','[…] and he himself wrote with his own finger the two tables of the law. […]',e385,TV,'note 4 stands on the tables of the Law in the French column')
e388=SCH3+'; page image read: leaf n403 = printed p. 388'
SENT7='We believe that these Holy Scriptures fully contain the will of God, and that whatsoever man ought to believe unto salvation is sufficiently taught therein. […] we reject with all our hearts whatsoever doth not agree with this infallible rule […]'
n7=[
 [('Rom.15.4','Rom. xv. 4'),('John.4.25','Jean iv. 25'),('2Tim.3.15-2Tim.3.17','2 Tim. iii. 15, 16, 17'),('1Pet.1.1','1 Pier. i. 1'),('Prov.30.5','Prov. xxx. 5'),('Gal.30.15','Gal. xxx. 15'),('Rev.22.18','Apoc. xxii. 18'),('John.15.15','Jean xv. 15'),('Acts.2.27','Act. ii. 27')],
 [('1Pet.4.11','1 Pier. iv. 11'),('1Cor.15.2-1Cor.15.3','1 Cor. xv. 2, 3'),('2Tim.3.14','2 Tim. iii. 14'),('1Tim.1.3','1 Tim. i. 3'),('2John.1.10','2 Jean 10')],
 [('Gal.1.8-Gal.1.9','Gal. i. 8, 9'),('1Cor.15.2','1 Cor. xv. 2'),('Acts.26.22','Act. xxvi. 22'),('Rom.15.4','Rom. xv. 4'),('1Pet.4.11','1 Pier. iv. 11'),('2Tim.3.14','2 Tim. iii. 14')],
 [('Deut.12.32','Deut. xii. 32'),('Prov.30.6','Prov. xxx. 6'),('Rev.22.18','Apoc. xxii. 18'),('John.4.25','Jean iv. 25')],
 [('Matt.15.3','Matt. xv. 3'),('Matt.17.5','xvii. 5'),('Mark.7.7','Marc vii. 7'),('Isa.1.12','Es. i. 12'),('1Cor.2.4','1 Cor. ii. 4')],
 [('Isa.1.12','Es. i. 12'),('Rom.3.4','Rom. iii. 4'),('2Tim.4.3-2Tim.4.4','2 Tim. iv. 3, 4')],
 [('Ps.62.10','Psa. lxii. 10')]]
for i,items in enumerate(n7,1):
    add(S,items,f'Art. VII (The sufficiency of the Holy Scriptures to be the only rule of faith), note {i} at the foot of p. 388',SENT7,e388,TV,'the notes of the page are listed as printed; the footnote numbers stand on words of the French column that the print does not tie to the English clause here; «Gal. xxx. 15» and «Jean iv. 25» as printed [not repaired]')
S.nr_replace=[x for x in S.nr_replace] if S.nr_replace else None
S.extra_notes=['Added in S1b: Belgic Confession Art. II, III and VII notes (Schaff III 1877, pp. 384, 385, 388) read on the page images. Arts. IV–VI (the canon, the authority of the books, the Apocrypha) print no note on pp. 386–387 in the lines read; Art. I notes belong to the doctrine of God. Larger Catechism Q. 2–4, 157–159 and Shorter Catechism Q. 2–3: see the T3 entry of the closure file.']
S.save(); print('SSR',S.before,len(S.data),S.newcites)
# ---- Eucharist Reformed (Belgic Art. 35, OCR)
E=Lst('eucharist-reformed')
SE35='We believe and confess that our Saviour Jesus Christ did ordain and institute the Sacrament of the Holy Supper, to nourish and support those whom he hath already regenerated and incorporated into his family, which is his Church. […]'
FLO='read from the OCR text of the French-column notes; the footnote numbers and the clauses they stand on were not collated on the page image; the notes of the page are listed as printed'
def eadd(items,page,notes):
    add(E,items,f'Art. XXXV (Of the Holy Supper of our Lord Jesus Christ), notes at the foot of p. {page}',SE35,SCH3+', OCR djvu text',TO,notes+'; '+FLO)
eadd([('Matt.26.26','Matt. xxvi. 26'),('Mark.14.22','Marc xiv. 22'),('Luke.22.19','Luc xxii. 11)'),('1Cor.11.23-1Cor.11.25','1 Cor. xi. 23-25')],428,'the OCR reads «Luc xxii. 11)»; read as xxii. 19 by Doctrina [unverified]')
eadd([('John.3.6','Jean iii. G'),('John.3.5','Jean iii. 5'),('John.5.23','Jean v. 23, 25'),('John.5.25','Jean v. 23, 25'),('1John.5.12','1 Jean v. 12'),('John.10.28','Jean x. 28')],428,'the OCR reads «Jean iii. G» (read 3:6 by Doctrina) and «Jean v. 23, 25» as printed')
eadd([('John.6.32-John.6.33','Jean vi. 32, 33, 51'),('John.6.51','Jean vi. 32, 33, 51'),('John.6.63','Jean vi. 63'),('Mark.6.26','Marc vi. 26'),('1Cor.10.16-1Cor.10.17','1 Cor. x. 16, 17'),('Eph.3.17','Eph. iii. 17'),('John.6.35','Jean vi. 35')],429,'«Marc vi. 26» as printed in the OCR')
eadd([('John.6.55-John.6.56','Jean vi. 55, 56'),('1Cor.10.16','1 Cor. x. 16'),('Acts.3.21','Act. iii. 21'),('Mark.16.19','Marc xvi. 19'),('Matt.26.11','Matt. xxvi. 11'),('Matt.26.26','Matt. xxvi. 26, etc.'),('Luke.22.19-Luke.22.20','Luc xxii. 19, 20'),('1Cor.10.2-1Cor.10.4','1 Cor. x. 2-4'),('Isa.55.2','Es. Iv. 2'),('Rom.8.22-Rom.8.23','Rom. viii. 22, 23'),('1Cor.11.29','1 Cor. xi. 29'),('2Cor.6.14-2Cor.6.15','2 Cor. vi. 14, 15'),('1Cor.2.14','1 Cor. ii. 14')],430,'the OCR reads «Es. Iv. 2»; read as Isa. lv. 2 by Doctrina [unverified]')
eadd([('Acts.2.42','Act. ii. 42'),('Acts.20.7','xx. 7'),('1Cor.11.27-1Cor.11.28','1 Cor. xi. 27, 28')],431,'')
E.nr_replace=['Larger Catechism Q. 169–177 proof blocks: see the closure file for what was read in S1b.',
 'WLC/WSC clause-to-letter matching: see the closure file.',
 'Belgic Art. 35: the notes of pp. 428–431 were read in the OCR text (S1b), with the French-column abbreviations (Marc, Luc, Jean, Act., Es.) mapped; the page images were not read for this article.',
 'Heidelberg Q. 75–82 quoted institution words (1 Cor. 11, Matt. 26) are not assigned to verses.',
 'Schaff III page images of Art. 35 not read: the Belgic Art. 35 records are `[unverified: OCR]`; WCF 29, LC Q. 168 and SC Q. 96–97 were read on the page images and confirmed by V9.']
E.save(); print('ER',E.before,len(E.data),E.newcites)
