import json,re,sys
base='/Users/pedrolorenzo/Desktop/dev/doctrina/'
def pagerefs(f,start_pat,end_pat):
    s=open(base+'src/content/pages/sola-scriptura/'+f).read()
    a=re.search(start_pat,s).start()
    b=s.find(end_pat,a)
    blk=s[a:b]
    out=[]
    for m in re.finditer(r'refs:\s*\[([^\]]*)\]',blk): out+=re.findall(r'"([^"]+)"',m.group(1))
    return out
def expand(o):
    parts=o.split('-')
    def p(x):
        a=x.split('.'); return a[0],int(a[1]),(int(a[2]) if len(a)>2 else None)
    b,c,v=p(parts[0])
    if len(parts)==1:
        return {(b,c,v)} if v else {(b,c,x) for x in range(1,201)}
    b2,c2,v2=p(parts[1])
    if c==c2: return {(b,c,x) for x in range(v,v2+1)}
    s=set()
    for cc in range(c,c2+1):
        lo=v if cc==c else 1; hi=v2 if cc==c2 else 200
        for x in range(lo,hi+1): s.add((b,cc,x))
    return s
for w,f,end in (('lutheran','lutheran.es.ts','scriptureSubtitle'),('catholic','catholic.es.ts','videos:')):
    page=pagerefs(f,r'\n  scripture: \[',end if w=='catholic' else '\n  ],\n')
    if w=='lutheran':
        s=open(base+'src/content/pages/sola-scriptura/'+f).read(); a=s.find('\n  scripture: ['); b=s.find('\n  ],',a); page=[x for m in re.finditer(r'refs:\s*\[([^\]]*)\]',s[a:b]) for x in re.findall(r'"([^"]+)"',m.group(1))]
    print(w,'page refs',len(page))
    cov=set()
    for o in page: cov|=expand(o)
    d=json.load(open(base+'docs/research/doctrines/scripture-lists/sola-scriptura-%s.json'%w))
    bad=[]
    for i,r in enumerate(d):
        works={c['work'] for c in r['citedBy']}
        locs={(c['work'],c['loc'],c['how']) for c in r['citedBy']}
        locs2={(c['work'],c['loc']) for c in r['citedBy']}
        if len(works)!=r['count']: bad.append(('count',i,r['refs'],r['count'],len(works)))
        if len(locs)!=r['locCount'] and len(locs2)!=r['locCount']: bad.append(('loc',i,r['refs'],r['locCount'],len(locs),len(locs2)))
        v=set()
        for o in r['refs']: v|=expand(o)
        ip=v<=cov
        if ip!=r['inPage']: bad.append(('inPage',i,r['refs'],r['inPage'],ip))
    print(w,len(d),'mismatches',bad)
    # md vs json check
    md=open(base+'docs/research/doctrines/scripture-lists/sola-scriptura-%s.md'%w).read()
    rows=re.findall(r'^\| (\d+) \| `([^`]+)` \| (\d+) / (\d+) \| (yes|\*\*new\*\*|no)',md,re.M)
    print('md rows',len(rows))
    for (n,ref,c,l,ip),r in zip(rows,d):
        if ref!=', '.join(r['refs']).replace(', ',', ') and ref!=r['refs'][0] : print('ref diff',n,ref,r['refs'])
        if int(c)!=r['count'] or int(l)!=r['locCount'] or ((ip=='yes')!=r['inPage']): print('md diff',n,ref,c,l,ip,r['count'],r['locCount'],r['inPage'])
print('--- page refs not covered by list records')
for w,f in (('lutheran','lutheran.es.ts'),('catholic','catholic.es.ts')):
    s=open(base+'src/content/pages/sola-scriptura/'+f).read(); a=s.find('\n  scripture: ['); b=s.find('\n  ],',a) if w=='lutheran' else s.find('videos:',a)
    page=[x for m in re.finditer(r'refs:\s*\[([^\]]*)\]',s[a:b]) for x in re.findall(r'"([^"]+)"',m.group(1))]
    d=json.load(open(base+'docs/research/doctrines/scripture-lists/sola-scriptura-%s.json'%w))
    lst=set()
    for r in d:
        for o in r['refs']: lst|=expand(o)
    for o in page:
        e=expand(o)
        if not e<=lst: print(w,o,'missing',len(e-lst),'of',len(e))
