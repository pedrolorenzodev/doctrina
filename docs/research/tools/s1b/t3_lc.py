import sys,re,json; sys.path.insert(0,'/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/860b43de-3998-41a5-bbee-361b678b7c19/scratchpad/tools')
from s1blib import *
d=json.load(open(SP+'wc_proofs.json'))['blocks']
ED='The Confession of Faith; the Larger and Shorter Catechisms, with the Scripture-Proofs at large (Edinburgh: Johnstone, Hunter, & Co., 1894), archive.org confessionoffaith00chur; page images, leaves n205–n213 = printed pp. 202–210'
URL='https://archive.org/details/confessionoffaith00chur'
TAG='[unverified: read from the page images by an extraction subagent (Sonnet), not re-checked; clause words typed from the image]'
ROM=r'[ivxlc]+'
def r2i(x):
    v={'i':1,'v':5,'x':10,'l':50,'c':100}; t=0; x=x.lower()
    for i,c in enumerate(x):
        t+= -v[c] if i+1<len(x) and v[c]<v[x[i+1]] else v[c]
    return t
def parse(s):
    s=s.strip()
    flag=None
    m=re.match(r'^(?:(\d)\s)?([A-Za-z]+)\.?,?\s*(?:chapter\s+)?(?:ver\.\s*)?(.*)$',s)
    if not m: return None,None
    num,bk,rest=m.groups()
    b=norm_book(((num+bk) if num else bk)) or norm_book(((num+' '+bk) if num else bk)) or norm_book(bk+'.')
    if not b: return None,None
    if b=='Jude' or (b in ('Phlm',)):
        v=re.findall(r'\d+',rest); return [osis(b,1,int(v[0]),int(v[0]))] if v else None,'Jude has one chapter; the print gives «ver. N»'
    mm=re.match(r'^('+ROM+r')\.?\s*(.*)$',rest)
    if not mm: return None,None
    ch=r2i(mm.group(1)); tail=mm.group(2)
    if ch is None: return None,None
    if 'throughout' in tail or (not re.search(r'\d',tail) and 'to the end' in tail): return [osis(b,ch,None,None)],'«'+tail.strip('. ')+'»: whole chapter' 
    if tail=='' : return [osis(b,ch,None,None)],None
    if 'to the end' in tail or 'to verse' in tail: flag='open range («'+tail.strip()+'»): only the verses named are encoded'
    nums=[int(x) for x in re.findall(r'(?<![A-Za-z])\d+',re.sub(r'to the end|to verse \d+','',tail))]
    # first number belongs to the verse; "Ver. N" adds
    vs=sorted(set(nums))
    groups=[]; cur=[vs[0]] if vs else []
    for v in vs[1:]:
        if v==cur[-1]+1: cur.append(v)
        else: groups.append(cur); cur=[v]
    if cur: groups.append(cur)
    return [osis(b,ch,g[0],g[-1]) for g in groups],flag
E=Lst('eucharist-reformed')
for r in E.data:
    r['citedBy']=[x for x in r['citedBy'] if not (x['work']=='Larger Catechism' and 'proof ' in x['loc'] and 'pp. 202' not in x['loc'] and x['tagCite']==TAG)]
E.data=[r for r in E.data if r['citedBy']]
n=0; bad=[]
for b in d:
    q=b['q']; L=b['letter']
    for pr in b['printed']:
        if isinstance(pr,dict): continue
        refs,fl=parse(pr)
        if not refs: bad.append((q,L,pr)); continue
        fg=(b.get('note') or '')
        flag='proof block as printed under Q. %d, letter %s; %s'%(q,L,('note of the reader: '+fg) if fg else 'no note')
        if fl: flag+='; '+fl
        for o in refs:
            if E.add(o,'Larger Catechism',f'Q. {q}, proof {L} (printed p. {b["page"]})',f'proof-text reference (letter {L} on the clause)',b['clause'],ED,TAG,URL,pr,flag): n+=1
print('added',n,'bad',bad)
nr=[x for x in re.findall(r'^- (.*)$',open(OUT+'eucharist-reformed.md').read().split('## Not reached')[1].split('\n## ')[0],re.M)]
nr=[x for x in nr if not x.startswith('Larger Catechism Q. 169') and not x.startswith('WLC/WSC clause')]
nr.insert(0,'Larger Catechism Q. 168–177 proof blocks (printed pp. 203–210): read on the page images by an extraction subagent in S1b (70 blocks; letters matched to clauses by eye, clause words typed from the image; not re-checked by S1b nor by a verifier): a verifier should re-read the Q. 171 and Q. 175 blocks first (Q. 171 «p»: the print reads «1 Cor. xiii. 5. [See above in letter m.]» while block m prints 2 Cor. xiii. 5; Q. 168 first block is lettered z).')
nr.append('WLC/WSC clause-to-letter matching: done for Q. 168–177 only (the clause field of each row is the answer words carrying the letter); the other questions of the Larger and Shorter Catechisms are not matched.')
E.nr_replace=nr
E.save(); print(len(E.data))
