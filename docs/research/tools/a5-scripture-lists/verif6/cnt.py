import json,sys,re
R='/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/doctrines/scripture-lists/papacy-%s.json'
def expand(o):
    parts=o.split('-')
    def p(x):
        a=x.split('.'); 
        return a[0],int(a[1]),(int(a[2]) if len(a)>2 else None)
    b,c,v=p(parts[0])
    if len(parts)==1:
        return {(b,c,v)} if v else {(b,c,x) for x in range(1,201)}
    b2,c2,v2=p(parts[1])
    s=set()
    if v is None: # chapter range
        for cc in range(c,c2+1):
            for x in range(1,201): s.add((b,cc,x))
        return s
    if c==c2:
        return {(b,c,x) for x in range(v,v2+1)}
    for cc in range(c,c2+1):
        lo=v if cc==c else 1; hi=v2 if cc==c2 else 200
        for x in range(lo,hi+1): s.add((b,cc,x))
    return s
w=sys.argv[1]
d=json.load(open(R%w)); page=json.load(open('page_%s.json'%w))
cov=set()
for o in page: cov|=expand(o)
bad=[];nc=0;ni=0
for i,r in enumerate(d):
    works={c['work'] for c in r['citedBy']}
    if len(works)!=r['count']: bad.append(('count',i,r['refs'],r['count'],len(works)))
    v=set()
    for o in r['refs']: v|=expand(o)
    ip=v<=cov
    if ip!=r['inPage']: bad.append(('inPage',i,r['refs'],r['inPage'],ip))
    nc+=1
print(w,nc,'mismatches:',bad)
print('inPage true',sum(r['inPage'] for r in d),'false',sum(not r['inPage'] for r in d))
tok=set()
for r in d:
    for o in r['refs']:
        if re.fullmatch(r'[0-9A-Za-z]+\.\d+(-[0-9A-Za-z]+\.\d+)?',o):
            # chapter-only token
            if o in page: continue
            tok.add(o); continue
        for x in sorted(expand(o)):
            if x not in cov: tok.add(x)
print('uncovered tokens',len(tok))
