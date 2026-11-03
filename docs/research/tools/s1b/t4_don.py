import sys,re; sys.path.insert(0,'/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/860b43de-3998-41a5-bbee-361b678b7c19/scratchpad/tools')
from s1blib import *
import don
ED='The Catechism of the Council of Trent, published by command of Pope Pius the Fifth, translated into English by the Rev. J. Donovan (Baltimore: Lucas Brothers, [1829]), archive.org thecatechismofth00donouoft, OCR djvu text'
URL='https://archive.org/details/thecatechismofth00donouoft'
TO='[unverified: OCR; page not collated, footnote marker lost]'
WORK='Roman Catechism (Catechism of the Council of Trent)'
HEADS=[(1076,25),(1483,31),(1854,37),(2204,43),(2724,51),(2977,55),(3102,57),(3386,61),(3748,67),(4018,71),(4390,77),(4538,79),(4673,81),(4932,85),(5441,93),(5891,101),(6683,113),(7479,125),(7597,127),(8290,137),(8960,147),(9366,153),(9543,155),(11076,177)]
def pages(i):
    prev=[p for l,p in HEADS if l<=i]; nxt=[p for l,p in HEADS if l>i]
    a=prev[-1] if prev else None; b=nxt[0] if nxt else None
    return f'pp. {a}–{b}'
def clean(l):
    l=re.sub(r'\s+',' ',l).strip()
    return l
def fix(book,ch,a,b):
    if book in ('2John','3John'): return 'John',ch,a,b
    return book,ch,a,b
def collect(L,section,a,b,how_sec):
    n=0
    for r in L.data:
        r['citedBy']=[x for x in r['citedBy'] if x['work']!=WORK]
    L.data=[r for r in L.data if r['citedBy']]
    for i,r,line in don.refs_in(a,b):
        book,ch,v1,v2,raw=r
        if book in ('1Kgs','2Kgs','1Chr','2Chr'): continue
        book,ch,v1,v2=fix(book,ch,v1,v2)
        o=osis(book,ch,v1,v2)
        loc=f'{how_sec}, footnote, {pages(i)} (running heads of the print; page not collated)'
        flag='the footnote is read from the OCR line; the footnote marker and the sentence of the catechism it belongs to were not recovered; the 1829 date is the Internet Archive record\'s, the OCR title page has no year'
        if book!=r[0]: flag+='; the OCR line begins with a footnote number that was joined to the book («2 John» read as John)'
        if L.add(o,WORK,loc,'footnote reference (print\'s footnote)',clean(line),ED,TO,URL,raw,flag): n+=1
    return n
B=Lst('baptism-catholic'); nb=collect(B,'Baptism',6330,8290,'Part II, On the Sacrament of Baptism')
B.nr_replace=[x for x in re.findall(r'^- (.*)$',open(OUT+'baptism-catholic.md').read().split('## Not reached')[1].split('\n## ')[0],re.M)]
B.nr_replace=[x for x in B.nr_replace if not x.startswith('Roman Catechism')]
B.nr_replace.append('Roman Catechism (Donovan 1829, OCR): the footnote lines of the chapter on baptism were read by script (lines that begin with a book abbreviation; Part II, about pp. 109–137); the running heads give every second page only; the quoted-words-without-reference cases of the text were not collected; Florence *Exsultate Deo* and Lateran IV c. 1: see the closure file.')
B.save(); print('baptism-catholic',nb,len(B.data))
E=Lst('eucharist-catholic'); ne=collect(E,'Eucharist',8700,11076,'Part II, On the Sacrament of the Eucharist')
nr=[x for x in re.findall(r'^- (.*)$',open(OUT+'eucharist-catholic.md').read().split('## Not reached')[1].split('\n## ')[0],re.M) if not x.startswith('Florence') ]
nr.append('Roman Catechism (Donovan 1829, OCR): the footnote lines of the chapter on the Eucharist were read by script (Part II, about pp. 143–177); markers and pages not collated. Florence and Lateran IV: see the closure file.')
E.nr_replace=nr
E.save(); print('eucharist-catholic',ne,len(E.data))
# Papacy Catholic: the Peter and head-of-the-Church passages of the ninth article
P=Lst('papacy-catholic')
npc=0
for r in P.data:
    r['citedBy']=[x for x in r['citedBy'] if x['work']!=WORK]
P.data=[r for r in P.data if r['citedBy']]
for i,r,line in don.refs_in(4200,4540):
    book,ch,v1,v2,raw=r
    book,ch,v1,v2=fix(book,ch,v1,v2); o=osis(book,ch,v1,v2)
    if (book,ch) in (('John',21),('John',20),('Matt',16),('Matt',18)):
        if P.add(o,WORK,f'On the ninth article of the Creed (the Church), footnote, {pages(i)} (page not collated); added in S1b','footnote reference (print\'s footnote)',clean(line),ED,TO,URL,raw,'read from the OCR line; the footnote marker and the sentence it belongs to were not recovered; added by S1b'): npc+=1
P.add('Matt.16.18',WORK,'On the ninth article of the Creed (the Church), the successors of Peter, p. 77 area (page not collated); added in S1b','quoted words, footnote reference not recovered','The Lord said to Peter, «I say to thee Peter! thou art Peter: and upon this rock I will build my Church» […]',ED,TO,URL,None,'verse identified from the quoted words by Doctrina; the footnote that follows the quotation (marker 3) is not legible in the OCR [unverified]; added by S1b'); npc+=1
for r in P.data:
    for x in r['citedBy']:
        if x['work']==WORK and 'addedBy' not in x: x['addedBy']='S1b'
P.finalize_codex(); print('papacy-catholic',npc,len(P.data))
