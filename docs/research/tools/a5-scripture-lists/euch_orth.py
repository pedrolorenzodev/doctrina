import sys
sys.path.insert(0,'.')
from lb import *
L=List('eucharist/orthodox.es.ts','eucharist','orthodox')
ROB='J. N. W. B. Robertson, The Acts and Decrees of the Synod of Jerusalem (London: Thomas Baker, 1899), archive.org actsdecreesofsyn00orth; page images read (leaves n154–n157 = printed pp. 143–146; pp. 147–150 print no Scripture reference per V5)'
SCH2='P. Schaff, The Creeds of Christendom, vol. II (New York: Harper, 1877 ed.), archive.org creedschristendo02scha, OCR djvu text; Philaret in the English of Blackmore, Q. 329–350 (printed pp. 496–499)'
OVB='J. Overbeck (ed.), The Orthodox Confession of the Catholic and Apostolic Eastern Church (London: Thomas Baker, 1898), archive.org cu31924029363094, OCR djvu text'
TVI='[verified: Robertson 1899 page image read by A5 2026-11-01]'
TO='[unverified: OCR; page image not read]'
d='Confession of Dositheus (Synod of Jerusalem 1672)'; UR='https://archive.org/details/actsdecreesofsyn00orth'
S1='For taking bread, and blessing, He gave to His Holy Disciples and Apostles, saying: \'Take, eat ye; This is My Body.\' And taking the chalice, and giving thanks, He said: \'Drink ye all of It; This is My Blood, which for you is being poured out, for the remission of sins.\''
L.add('Matt.26.26',d,'Decree XVII, p. 144, fn *','footnote reference (editor\'s)',S1,ROB,TVI,UR,'Matt. xxvi., 26')
L.add('Matt.26.28',d,'Decree XVII, p. 144, fn †','footnote reference (editor\'s)',S1,ROB,TVI,UR,'Ibid., ver. 28')
L.add('John.6.51',d,'Decree XVII, p. 145, fn ‡','footnote reference (editor\'s)','[…] the bread is transmuted, transubstantiated, converted and transformed into the true Body Itself of the Lord, Which was born in Bethlehem of the ever-Virgin […]; and the wine is converted and transubstantiated into the true Blood Itself of the Lord, Which as He hung upon the Cross, was poured out for the life of the world.',ROB,TVI,UR,'John vi., 51',flag='the footnote marker ‡ stands after «the life of the world.»; the marker is placed by the print on the clause about the Blood poured out for the life of the world')
def P(o,loc,sent,printed):
    L.add(o,'Longer Catechism of the Eastern Church (Philaret)',loc,'inline reference',sent,SCH2,TO,'https://archive.org/details/creedschristendo02scha',printed)
P('1Cor.10.17','Q. 329','It signifies, as the Apostle explains, that we, being many, are one bread, and one body; for we are all partakers of that one bread. 1 Cor. x. 17.','1 Cor. x. 17')
P('Matt.26.26-Matt.26.28','Q. 338','The utterance of the words which Jesus Christ spake in instituting the Sacrament: Take, eat; this is my body. Drink ye all of it; for this is my Blood of the New Testament. Matt. xxvi. 26, 27, 28.','Matt. xxvi. 26, 27, 28')
P('1Cor.11.28-1Cor.11.29','Q. 341','[…] Let a man examine himself, and so let him eat of that bread, and drink of that cup; for he that eateth and drinketh unworthily, eateth and drinketh damnation to himself not discerning the Lord\'s Body. 1 Cor. xi. 28, 29.','1 Cor. xi. 28, 29')
P('John.6.56','Q. 342','He is in the closest manner united to Jesus Christ himself, and, in him, is made partaker of everlasting life. He that eateth my Flesh, and drinketh my Blood, dwelleth in me, and I in him. John vi. 56.','John vi. 56')
P('John.6.54','Q. 342','Whoso eateth my Flesh, and drinketh my Blood, hath eternal life. John vi. 54.','John vi. 54')
P('Luke.22.19','Q. 344','[…] by a continual remembrance of our Lord Jesus Christ, who expressly has commanded us to do this in remembrance of him. Luke xxii. 19.','Luke xxii. 19')
m='Orthodox Confession of Peter Mogila'; UO='https://archive.org/details/cu31924029363094'
def M(o,loc,sent,printed): L.add(o,m,loc,'inline reference',sent,OVB,TO,UO,printed)
M('John.19.34','I. Q. 107','[…] whereto, in the Time of Celebration, let Water be added; that the Scripture may be fulfilled, which sayeth (John xix. 34), One of the Soldiers pierced his side, and forthwith came thereout Water and Blood.','John xix. 34')
M('John.20.29','I. Q. 107','[…] depending and trusting rather in the Words and Power of our Lord than on our own Senses; and so becoming Partakers of the Blessing which is the Reward of Faith (John xx. 29), Blessed are they that have not seen, and yet have believed.','John xx. 29')
M('John.6.54','I. Q. 107','[…] For so Christ commanded, without making any Distinction (John vi. 54), Except ye eat the Flesh of the Son of Man, and drink his Blood, ye have no Life in you.','John vi. 54')
M('1Cor.11.23','I. Q. 107','[…] As St. Paul writes to the Corinthians (1 Cor. xi. 23), For I received of the Lord that which I also delivered unto you; that the Lord Jesus, in the same Night in which he was betrayed, took Bread […]','1 Cor. xi. 23')
M('Matt.16.16','I. Q. 107','[…] as St. Peter, speaking in the Name of all the Apostles, and, as it were, with their Mouth, said, (Matth. xvi. 16), Thou art Christ, the Son of the living God […]','Matth. xvi. 16')
P('1Cor.11.26','Q. 350','Assuredly it will ever continue, even to Christ\'s coming again, agreeably to the words of the Apostle Paul: For as oft as ye eat this bread, and drink this cup, ye do shew forth the Lord\'s death till he come. 1 Cor. xi. 26.','1 Cor. xi. 26')
M('1Cor.11.26','I. Q. 107','The Fruits of this Mystery are chiefly these: First, A Commemoration of the Sufferings and of the Death of Christ […]: As saith the Scripture (I Cor. xi. 26), As often as ye eat this Bread and drink this Cup, ye do shew the Lord\'s Death till he come.','I Cor. xi. 26')
L.notes.append('Every item of the page scripture list (Matt 26:26–28, 1 Cor 10:17, 1 Cor 11:28–29, John 6:54 and 6:56, Luke 22:19, 1 Cor 11:26, John 19:34 and 20:29) was found in these three documents. New against the page: John 6:51 (Dositheus XVII), 1 Cor 11:23 and Matt 16:16 (Mogila).')
L.notes.append('Dositheus XVII (pp. 143–150): pages 143–146 read by A5; V5 read pp. 147–150 and found no Scripture reference; footnotes on p. 144 (Matt 26:26; ver. 28) and p. 145 (John 6:51) are the only Scripture references; p. 146 carries a liturgical quotation only.')
L.notreached+=['Mogila: V5 found the six references under Q. 107 in the print (the OCR run from the «Question 106» heading covers Q. 106–107); Q. 108 onward is other mysteries.','Philaret Q. 318–346 (the Liturgy) was scanned by regex for «Book roman. N»; Philaret Q. 350 added after V5. Orthodox 1895 encyclical and Jeremiah\'s Answers not searched.','Mogila and Philaret: `[unverified: OCR]`, page images not read.']
print(L.write(REPO+'docs/research/doctrines/scripture-lists','Scripture lists: Eucharist · Orthodox','Official documents used by the page `eucharist/orthodox`: Dositheus Decree XVII (Robertson 1899), Philaret\'s Longer Catechism Q. 318–346, Mogila I Q. 106 (Overbeck 1898). Collected 2026-11-01 by session A5.'))
