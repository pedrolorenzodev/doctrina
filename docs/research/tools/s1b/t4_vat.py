import sys,re; sys.path.insert(0,'/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/860b43de-3998-41a5-bbee-361b678b7c19/scratchpad/tools')
from s1blib import *
raw=open(SP+'txt/t.html').read()
items=re.findall(r'<li>(\d+) (.*?)</li>',raw,re.S)
AB={'Mt':'Matt','Mk':'Mark','Lk':'Luke','Jn':'John','Rm':'Rom','Heb':'Heb','Is':'Isa','Wis':'Wis','Col':'Col','Tm':'Tim','Pt':'Pet','Cor':'Cor','Eph':'Eph','Gal':'Gal'}
REF=re.compile(r'(?:(\d)\s)?(Mt|Mk|Lk|Jn|Rm|Heb|Is|Wis|Col|Tm|Pt|Cor|Eph|Gal|Acts|Ps|Prov|Sir|Gen|Exod)\.?\s+(\d+)\s*,\s*(\d+(?:\s*[-–]\s*\d+)?(?:\s+\d+)?(?:\s*,\s*\d+(?:\s*[-–]\s*\d+)?)*)')
def parse(txt):
    out=[]
    for m in REF.finditer(txt):
        num,ab,ch,vs=m.groups()
        book=AB.get(ab,ab)
        if num: book=num+book
        if book=='1Rm': continue
        b=norm_book(book) or norm_book(book.replace('1','1 '))
        if not b: continue
        vs=vs.strip()
        mm=re.match(r'^(\d+)\s+(\d+)$',vs)
        if mm: vs=f'{mm.group(1)}-{mm.group(2)}'
        for a,bb in vlist(vs): out.append((b,int(ch),a,bb,m.group(0)))
    return out
ED='Decrees of the First Vatican Council, English text with the editors\' footnotes as reproduced on papalencyclicals.net (https://www.papalencyclicals.net/councils/ecum20.htm, fetched 2026-11-02); the footnote style («see above, p. 230», «Bruns 2, 178; Msi 8, 713») is that of Tanner, Decrees of the Ecumenical Councils (1990), an attribution not printed on the page'
URL='https://www.papalencyclicals.net/councils/ecum20.htm'
TO='[unverified: online reproduction; footnote marker not present in the text, clause not located]'
FL='the Latin of the council (Holy See, vatican.va) prints no Scripture reference; this one is the editors\' footnote; the footnote marker is absent from the online text, so the sentence it belongs to is not located'
S=Lst('sola-scriptura-catholic'); P=Lst('papacy-catholic')
nS=nP=0
for n,txt in items:
    n=int(n); txt=re.sub(r'<[^>]+>','',txt).strip()
    refs=parse(txt)
    if not refs: continue
    if 3<=n<=36:
        for b,ch,a,bb,rawr in refs:
            if S.add(osis(b,ch,a,bb),'Dei filius (First Vatican Council, 1870)',f'editors\' footnote {n}','footnote reference (editors\')',f'[editors\' footnote {n}] {txt}',ED,TO,URL,rawr,FL): nS+=1
    elif 37<=n<=60:
        for b,ch,a,bb,rawr in refs:
            if P.add(osis(b,ch,a,bb),'Pastor aeternus (First Vatican Council, 1870)',f'editors\' footnote {n}; added in S1b','footnote reference (editors\')',f'[editors\' footnote {n}] {txt}',ED,TO,URL,rawr,FL+'; added by S1b'): nP+=1
for r in P.data:
    for x in r['citedBy']:
        if 'tagCite' in x and 'addedBy' not in x and 'S1b' in x['loc']: x['addedBy']='S1b'
nr=[x for x in re.findall(r'^- (.*)$',open(OUT+'sola-scriptura-catholic.md').read().split('## Not reached')[1].split('\n## ')[0],re.M)]
S.nr_replace=nr+['Dei filius: the Holy See Latin prints no reference; the editors\' footnotes 3–35 of the online English reproduction were collected in S1b (marker positions not available).']
S.save(); P.finalize_codex(); print('SSC',nS,len(S.data),'PC',nP,len(P.data))
