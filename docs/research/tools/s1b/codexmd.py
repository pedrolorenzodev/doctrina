import json,re,sys
sys.path.insert(0,'/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/860b43de-3998-41a5-bbee-361b678b7c19/scratchpad/tools')
from s1blib import OUT,parse_osis
def tokens(refs):
    t=set()
    for o in refs:
        p=parse_osis(o)
        if not p: t.add(o); continue
        b,(c1,v1),(c2,v2)=p
        if v1==0: t.add((b,c1)); continue
        if c1==c2 and v2<900:
            for v in range(v1,v2+1): t.add((b,c1,v))
        else: t.add((b,c1,v1)); t.add((b,c2,v2))
    return t
def render(name):
    d=json.load(open(OUT+name+'.json')); md=open(OUT+name+'.md').read()
    m=re.search(r'^Records: .*$',md,re.M)
    head=md[:m.start()]
    t=re.search(r'^## Not reached',md,re.M)
    tail=md[t.start():] if t else ''
    new=[r for r in d if not r.get('inPage')]
    toks=set()
    for r in new: toks|=tokens(r['refs'])
    L=[f'Records: {len(d)}; new or extended ranges: {len(new)}; distinct uncovered verse/chapter tokens: {len(toks)} (recomputed by S1b from the JSON: a verse range is expanded into verses, a chapter is one token).','',
       '| Passage (OSIS) | Citing documents and locators | How | Citing sentence / printed reference | In page or new | Tag |','|---|---|---|---|---|---|']
    for r in d:
        cit='<br>'.join(f"{x['work']} — {x['loc']} — {x['edition']}" for x in r['citedBy'])+f" (count: {r['count']})"
        how='<br>'.join(x['how'] for x in r['citedBy'])
        sen='<br>'.join('“'+x['sentence']+'”' for x in r['citedBy'])
        L.append(f"| {', '.join(r['refs'])} | {cit} | {how} | {sen} | {'in page' if r.get('inPage') else 'new / extended'} | {r.get('tag','')} |")
    open(OUT+name+'.md','w').write(head+'\n'.join(L)+'\n\n'+tail)
    return len(d),len(new),len(toks)
if __name__=='__main__':
    for n in ['papacy-catholic','papacy-orthodox','papacy-lutheran','papacy-reformed']: print(n,render(n))
