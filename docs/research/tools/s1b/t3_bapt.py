import sys,re; sys.path.insert(0,'/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/860b43de-3998-41a5-bbee-361b678b7c19/scratchpad/tools')
from s1blib import *
ED='A Confession of Faith, put forth by the Elders and Brethren of many Congregations of Christians (Baptized upon Profession of their Faith) in London and the Country (London: John Harris, 1688), archive.org bim_early-english-books-1641-1700_a-confession-of-faith-p_1688; page image read: leaf n125 = printed p. 102 (microfilm frame)'
URL='https://archive.org/details/bim_early-english-books-1641-1700_a-confession-of-faith-p_1688'
TV='[verified: 1688 print page image read by S1b 2026-11-02]'
W='Second London Confession (1689)'
E=Lst('eucharist-baptist')
s7='[…] spiritually receive, and feed upon Christ crucified, (l) and all the benefits of his Death; the Body and Blood of Christ being then not corporally, or carnally, but spiritually present to the Faith of Believers, in that Ordinance, as the Elements themselves are to their outward senses.'
E.add('1Cor.10.16',W,'30.7, 1688 print p. 102 (margin note l)','margin note',s7,ED,TV,URL,'1 Cor.10.16.','the margin prints «1 Cor.10.16. ch.11.23—26.»; «ch.11.23—26» is read as 1 Cor. 11:23–26 [Doctrina]')
E.add('1Cor.11.23-1Cor.11.26',W,'30.7, 1688 print p. 102 (margin note l)','margin note',s7,ED,TV,URL,'ch.11.23—26.','read as 1 Cor. 11:23–26 from the preceding «1 Cor.10.16.» [Doctrina]')
s8='All ignorant and ungodly Persons, as they are unfit to enjoy Communion (m) with Christ, so are they unworthy of the Lord\'s Table, and cannot, without great sin against him, while they remain such, partake of these Holy Mysteries, (n) or be admitted thereunto: yea, whosoever shall receive unworthily, are guilty of the Body and Blood of the Lord, eating and drinking Judgment to themselves.'
E.add('2Cor.6.14-2Cor.6.15',W,'30.8, 1688 print p. 102 (margin note m)','margin note',s8,ED,TV,URL,'2 Cor. 6, 14,15.')
E.add('1Cor.11.29',W,'30.8, 1688 print p. 102 (margin note n)','margin note',s8,ED,TV,URL,'1 Cor.11.29.')
E.add('Matt.7.6',W,'30.8, 1688 print p. 102 (margin note n)','margin note',s8,ED,TV,URL,'Mat. 7. 6.')
nr=[x for x in re.findall(r'^- (.*)$',open(OUT+'eucharist-baptist.md').read().split('## Not reached')[1].split('\n## ')[0],re.M)]
nr=[x for x in nr if not x.startswith('2LCF 30.7')]
nr.insert(0,'2LCF 30.7–30.8: the 1688 print p. 102 was read on the page image in S1b (margin notes l, m, n: the same references as McGlothlin\'s 1677 text at 30.8; 30.7\'s note l is new to this list); the 1688 margins of chapter 30 for 30.2–30.6 were read earlier by A5; chapter 30 in the 1719 print was not read; p. 102 ends with the catchword «CHAP.» (a new chapter follows); p. 103 was not read.')
E.nr_replace=nr; E.save(); print(len(E.data))
