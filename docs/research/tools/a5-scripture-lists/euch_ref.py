import sys,re
sys.path.insert(0,'.')
from lb import *
L=List('eucharist/reformed.es.ts','eucharist','reformed')
W94='The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at large (Edinburgh, 1894), archive.org confessionoffaith00chur; page images read (WCF 29: leaves n96–n98 = pp. 93–95; Larger Catechism Q. 168: leaves n206–n207; Shorter Catechism Q. 96–97: leaves n248–n249, confirmed by verifier V9)'
SCH='P. Schaff, The Creeds of Christendom, vol. III (New York: Harper, 1877), archive.org creedsofchristen187803scha, OCR djvu text'
U94='https://archive.org/details/confessionoffaith00chur'; USC='https://archive.org/details/creedsofchristen187803scha'
TO='[unverified: OCR; scan page image not read]'
t=open(SPD+'txt/confessionoffaith00chur.txt',errors='replace').read()
def clean(s): return re.sub(r'\s+',' ',s)
# WCF 29 (page images read by A5)
TVI='[verified: page images of the 1894 print read by A5 2026-11-01 (leaves n96–n98, printed pp. 93–95)]'
T={1:"Our Lord Jesus, in the night wherein he was betrayed, instituted the sacrament of his body and blood, called the Lord's Supper, to be observed in his church unto the end of the world, for the perpetual remembrance of the sacrifice of himself in his death, the sealing all benefits thereof unto true believers, their spiritual nourishment and growth in him, their further engagement in and to all duties which they owe unto him, and to be a bond and pledge of their communion with him, and with each other, as members of his mystical body.",
2:"In this sacrament Christ is not offered up to his Father, nor any real sacrifice made at all for remission of sins of the quick or dead; but only a commemoration of that one offering up of himself, by himself, upon the cross, once for all, and a spiritual oblation of all possible praise unto God for the same; so that the Popish sacrifice of the mass, as they call it, is most abominably injurious to Christ's one only sacrifice, the alone propitiation for all the sins of the elect.",
3:"The Lord Jesus hath, in this ordinance, appointed his ministers to declare his word of institution to the people, to pray, and bless the elements of bread and wine, and thereby to set them apart from a common to a holy use; and to take and break the bread, to take the cup, and (they communicating also themselves) to give both to the communicants; but to none who are not then present in the congregation.",
4:"Private masses, or receiving this sacrament by a priest, or any other, alone; as likewise the denial of the cup to the people; worshipping the elements, the lifting them up, or carrying them about for adoration, and the reserving them for any pretended religious use; are all contrary to the nature of this sacrament, and to the institution of Christ.",
5:"The outward elements in this sacrament, duly set apart to the uses ordained by Christ, have such relation to him crucified, as that truly, yet sacramentally only, they are sometimes called by the name of the things they represent, to wit, the body and blood of Christ; albeit, in substance and nature, they still remain truly and only bread and wine, as they were before.",
6:"That doctrine which maintains a change of the substance of bread and wine into the substance of Christ's body and blood (commonly called Transubstantiation) by consecration of a priest, or by any other way, is repugnant not to Scripture alone, but even to common sense and reason; overthroweth the nature of the sacrament; and hath been and is the cause of manifold superstitions, yea, of gross idolatries.",
7:"Worthy receivers, outwardly partaking of the visible elements in this sacrament, do then also inwardly by faith, really and indeed, yet not carnally and corporally, but spiritually, receive and feed upon Christ crucified, and all benefits of his death: the body and blood of Christ being then not corporally or carnally in, with, or under the bread and wine; yet as really, but spiritually, present to the faith of believers in that ordinance, as the elements themselves are to their outward senses.",
8:"Although ignorant and wicked men receive the outward elements in this sacrament, yet they receive not the thing signified thereby; but by their unworthy coming thereunto are guilty of the body and blood of the Lord, to their own damnation. Wherefore all ignorant and ungodly persons, as they are unfit to enjoy communion with him, so are they unworthy of the Lord's table, and cannot, without great sin against Christ, while they remain such, partake of these holy mysteries, or be admitted thereunto."}
P=[(1,'a',['1Cor.11.23-1Cor.11.26','1Cor.10.16-1Cor.10.17','1Cor.10.21','1Cor.12.13'],'1 Cor. xi. 23, 24, 25, 26; x. 16, 17, 21; xii. 13'),
(2,'b',['Heb.9.22','Heb.9.25-Heb.9.26','Heb.9.28'],'Heb. ix. 22; Ver. 25, 26, 28'),
(2,'c',['1Cor.11.24-1Cor.11.26','Matt.26.26-Matt.26.27'],'1 Cor. xi. 24, 25, 26 [See them in letter a]; Matt. xxvi. 26; Ver. 27'),
(2,'d',['Heb.7.23-Heb.7.24','Heb.7.27','Heb.10.11-Heb.10.12','Heb.10.14','Heb.10.18'],'Heb. vii. 23, 24, 27; x. 11, 12, 14, 18'),
(3,'e',['Matt.26.26-Matt.26.28','Mark.14.22-Mark.14.24','Luke.22.19-Luke.22.20','1Cor.11.23-1Cor.11.26'],'Matt. xxvi. 26, 27 [See in letter c]; Ver. 28; Mark xiv. 22, 23, 24; Luke xxii. 19, 20; 1 Cor. xi. 23–26 [See all in letter a]'),
(3,'f',['Acts.20.7','1Cor.11.20'],'Acts xx. 7; 1 Cor. xi. 20'),
(4,'g',['1Cor.10.6'],'1 Cor. x. 6'),
(4,'h',['Mark.14.23','1Cor.11.25-1Cor.11.29'],'Mark xiv. 23 [See in letter c]; 1 Cor. xi. 25, 26 [See in letter a]; Ver. 27, 28, 29'),
(4,'i',['Matt.15.9'],'Matt. xv. 9'),
(5,'k',['Matt.26.26-Matt.26.28'],'Matt. xxvi. 26, 27, 28'),
(5,'l',['1Cor.11.26-1Cor.11.28','Matt.26.29'],'1 Cor. xi. 26, 27, 28; Matt. xxvi. 29'),
(6,'m',['Acts.3.21','1Cor.11.24-1Cor.11.26','Luke.24.6','Luke.24.39'],'Acts iii. 21; 1 Cor. xi. 24, 25, 26 [See in letter l]; Luke xxiv. 6; Ver. 39'),
(7,'n',['1Cor.11.28'],'1 Cor. xi. 28 [See in letter l]'),
(7,'o',['1Cor.10.16'],'1 Cor. x. 16'),
(8,'p',['1Cor.11.27-1Cor.11.29','2Cor.6.14-2Cor.6.16'],'1 Cor. xi. 27, 28 [See in letter l]; Ver. 29; 2 Cor. vi. 14, 15, 16'),
(8,'q',['1Cor.5.6-1Cor.5.7','1Cor.5.13','2Thess.3.6','2Thess.3.14-2Thess.3.15','Matt.7.6'],'1 Cor. v. 6; Ver. 7, 13; 2 Thess. iii. 6, 14, 15; Matt. vii. 6')]
for sec,let,refs,pr in P:
    for o in refs: L.add(o,'Westminster Confession of Faith',f'29.{sec} (letter {let})','proof text (1894 Scripture-Proofs, by letter)',T[sec],W94,TVI,U94,pr,None)
L.notes.append('WCF 29 was rebuilt from the page images (V5 found the OCR-parsed first version unusable: sections 29.7–29.8 missing, junk verses, refs in the wrong section). The sentence is the whole section (the letters sit on clauses; the clause-to-letter matching is not done). «Ver. N» items are recorded as the verse numbers the print gives.')
# WLC blocks
B=[('168',1202177,1206137)]
QPOS={'168':1199667-5500,'169':1199667,'171':1205477,'172':1210418,'173':1217301,'174':1223671,'175':1229937,'176':1236626}
for n,a,b in B:
    seg_=t[a:b]
    qa=None
    q=re.search(r'Q\.\s*'+n+r'\.(.{40,700}?)(?=Q\.\s*\d{3}\.)',t[QPOS[n]-300:QPOS[n]+8000],re.S) if n in QPOS else None
    sent=('(answer text not isolated in the OCR; see the Larger Catechism Q. '+n+'; V9 gives it on LC p. 203)')
    for r in refs_ver(seg_):
        o=osis(*r[:4]); fl='verse numbers of this block can be OCR errors (e.g. «Luke 22.80», «Zech. 12.26–28» read from the block); block boundaries follow the printed question numbers found in the OCR, and Q. 170 and Q. 177 markers were not found, so their proofs may sit in a neighbouring block'
        L.add(o,'Larger Catechism',f'Q. {n} (proof block)','proof-text block of the answer',sent,W94,TO,U94,re.sub(r'\s+',' ',r[4]),fl)
L.notreached+=['Larger Catechism Q. 169–177 proof blocks: the first OCR parse was rejected by verifier V5 (about a third of the records wrong, Q. 170 refs filed under Q. 171, Q. 176 refs belonging to Q. 177, dozens of printed refs missing) and removed; they need a page-image reading (printed pp. 202–210, leaves n205–n213). Only Q. 168 (confirmed by V5) and the Shorter Catechism Q. 96–97 (confirmed) are kept.','WLC/WSC clause-to-letter matching not done (interleaved columns).']
# WSC 96-97
for n,a,b in [('96',1441737,1443600),('97',1443600,1445400)]:
    seg_=t[a:b]
    for r in refs_ver(seg_):
        L.add(osis(*r[:4]),'Shorter Catechism',f'Q. {n} (proof block)','proof-text block of the answer','(answer text not isolated; see the Shorter Catechism Q. '+n+')',W94,'[verified: page images read by verifier V9 2026-11-02]',U94,re.sub(r'\s+',' ',r[4]),'block boundaries guessed from the Q. 96 marker (1441737) and an arbitrary 1.8k-character window; refs may include the next question\'s proofs')
# Belgic 35
a=t.find('XXXV.') 
tb=open(SPD+'txt/creedsofchristen187803scha.txt',errors='replace').read()
i=tb.find('XXXV.',1144657); j=tb.find('XXXVI.',i)
print('Belgic 35',i,j)
seg_=tb[i:j]
for line in seg_.split('\n'):
    l=re.sub(r'\s+',' ',line.strip())
    if re.match(r'^[>"\^\*\d\'\(]{0,3}\s*(?:[123]\s)?[A-Z][a-z]{1,8}\.?,?\s+[ivxlX]{1,6}[\.,]\s*\w',l):
        for r in refs_ver(l):
            o=osis(*r[:4]); fl=None
            if o=='Eph.3.1': o='Eph.3.17'; fl='OCR line reads «Eph. iii. 1» / verse cut; V5 read 3:17 on the page'
            L.add(o,'Belgic Confession','Art. 35 (footnote printed on the page)','footnote reference printed with the text','(English sentence not matched to the note)',SCH,TO,USC,l,fl)
L.notes.append('Heidelberg Catechism Q. 75–82: Schaff vol. III prints no Scripture references in the English column (the Q. 71 pattern of the Baptism list); nothing listed. Belgic Art. 35: notes printed on the page of Schaff; the sentence is not matched.')
L.notreached+=['Belgic Art. 35: about 20 notes in French abbreviations (Marc, Luc, Jean, Act., Es.) printed with the French column were skipped by the parser (V5).','Heidelberg Q. 75–82 quoted institution words (1 Cor. 11, Matt. 26) are not assigned to verses.','Schaff III page images not read: the Belgic Art. 35 records are `[unverified: OCR]` (V9: the `printed` strings are OCR noise and the 8 records are an incomplete subset); WCF 29, LC Q. 168 and SC Q. 96–97 were read on the page images and confirmed by V9.']
print(L.write(REPO+'docs/research/doctrines/scripture-lists','Scripture lists: Eucharist · Reformed','Official documents used by the page `eucharist/reformed`: Westminster Confession 29, Larger Catechism 168, Shorter Catechism 96–97 (Edinburgh 1894), Heidelberg 75–82 and Belgic Art. 35 (Schaff 1877). Collected 2026-11-01 by session A5; OCR-heavy, treat as a draft with known noise.'))
