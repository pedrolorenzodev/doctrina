import json,re,sys,collections
base='/Users/pedrolorenzo/Desktop/dev/doctrina/'
def verses(r):
    # r like Rom.1.19-Rom.1.20 ; single chapter ranges only
    parts=r.split('-')
    a=parts[0].split('.'); b=(parts[1] if len(parts)>1 else parts[0]).split('.')
    assert a[0]==b[0] and a[1]==b[1],r
    return {(a[0],int(a[1]),v) for v in range(int(a[2]),int(b[2])+1)}
def pagerefs(path):
    t=open(path).read()
    i=t.index('scripture: [')
    # up to next top-level key: take refs arrays in region until "\n  ]," 
    j=t.index('\n  ],',i)
    reg=t[i:j]
    out=set()
    for m in re.finditer(r'refs:\s*\[(.*?)\]',reg,re.S):
        for s in re.findall(r'"([^"]+)"',m.group(1)): out|=verses(s)
    return out
for name,page in (('sola-scriptura','sola-scriptura'),('eucharist','eucharist')):
    d=json.load(open(base+f'docs/research/doctrines/scripture-lists/{name}-reformed.json'))
    P=pagerefs(base+f'src/content/pages/{page}/reformed.es.ts')
    print(name,len(d),'page verses',len(P))
    bad=[];n_in=0;n_part=0
    for i,r in enumerate(d,1):
        V=set()
        for x in r['refs']: V|=verses(x)
        full=V<=P; part=bool(V&P)
        if r['inPage']: n_in+=1
        works={c['work'] for c in r['citedBy']}
        locs={c['loc'] for c in r['citedBy']}
        if r['count']!=len(works) or r['locCount']!=len(locs): bad.append(('count',i,r['refs'],r['count'],len(works),r['locCount'],len(locs)))
        if r['inPage']!=full and r['inPage']!=part: bad.append(('inPage',i,r['refs'],r['inPage'],full,part))
        elif r['inPage']!=part: bad.append(('inPage-part-vs-full',i,r['refs'],r['inPage'],full,part))
    print(' inPage true',n_in,'bad',bad)
    # ordering
    keys=[(-r['count'],-r['locCount']) for r in d]
    print(' sorted by count/loc desc:',keys==sorted(keys))
    # duplicates
    c=collections.Counter(tuple(r['refs']) for r in d); print(' dup refs',[k for k,v in c.items() if v>1])
