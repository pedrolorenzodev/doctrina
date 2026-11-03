import sys,re,json; sys.path.insert(0,'/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/860b43de-3998-41a5-bbee-361b678b7c19/scratchpad/tools')
from s1blib import *
c=json.load(open(SP+'ccc.json'))
CCC_ED='Catechism of the Catholic Church, English text, official page on vatican.va (archive/ENG0015; the page states no edition year); retrieved 2026-11-01 (text cached by session A5)'
def clip_tail(t,n=40):
    w=t.split(); return t if len(w)<=n else '[…] '+' '.join(w[-n:])
S=Lst('sola-scriptura-catholic')
n=0
for p in (91,92,93):
    d=c[str(p)]; url='https://www.vatican.va/archive/ENG0015/'+d['page']
    for f in d['notes']:
        for r in find_refs(f['text']):
            if S.add(osis(*r[:4]),'CCC',f'§{p}, fn {f["n"]}','footnote',clip_tail(f.get('ctx',''),40),CCC_ED,'[verified: official vatican.va page, machine-extracted footnote, 2026-11-01]',url): n+=1
    for r in find_refs(d['text']):
        if S.add(osis(*r[:4]),'CCC',f'§{p}','inline',clip_tail(d['text'],40),CCC_ED,'[verified: official vatican.va page, machine-extracted inline reference, 2026-11-01]',url): n+=1
print('ccc 91-93 added',n)
nr=[x for x in re.findall(r'^- (.*)$',open(OUT+'sola-scriptura-catholic.md').read().split('## Not reached')[1].split('\n## ')[0],re.M) if not x.startswith('CCC 9193')]
S.nr_replace=nr+['CCC 9193: the Catechism has no paragraph 9193 (2,865 paragraphs); agent\'s call in S1b: it is read as §§91–93 (a joined range) and those three paragraphs are collected; the page\'s scripture list was not re-opened to confirm.']
S.save()
