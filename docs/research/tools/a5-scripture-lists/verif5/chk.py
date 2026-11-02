import json,re,sys
base='docs/research/doctrines/scripture-lists/eucharist-%s'
def ps(o):
    a=o.split('-')[0]; b=o.split('-')[-1]
    def p(x):
        m=re.match(r'(\w+)\.(\d+)\.(\d+)',x); return m.group(1),int(m.group(2)),int(m.group(3))
    s=p(a); e=p(b); return s,e
def overlap(r,pr):
    for x in r:
        for y in pr:
            (b1,c1,v1),(b2,c2,v2)=ps(x)
            (b3,c3,v3),(b4,c4,v4)=ps(y)
            if b1!=b3: continue
            s1=(c1,v1);e1=(c2,v2);s2=(c3,v3);e2=(c4,v4)
            if s1<=e2 and s2<=e1: return True
    return False
for t in ['orthodox','reformed']:
    d=json.load(open(base%t+'.json'))
    src=open('src/content/pages/eucharist/%s.es.ts'%t).read()
    m=re.search(r'\n  scripture: \[(.*?)\n  \],\n',src,re.S)
    prefs=re.findall(r'"([1-3A-Za-z]+\.\d+\.\d+(?:-[1-3A-Za-z]+\.\d+\.\d+)?)"',m.group(1))
    print(t,'page refs',len(prefs),prefs)
    bad=[]
    for i,r in enumerate(d):
        works={c['work'] for c in r['citedBy']}
        locs={(c['work'],c['loc']) for c in r['citedBy']}
        ip=overlap(r['refs'],prefs)
        if len(works)!=r['count'] or len(locs)!=r['locCount'] or ip!=r['inPage']:
            bad.append((i+1,r['refs'],len(works),r['count'],len(locs),r['locCount'],ip,r['inPage']))
    print(t,len(d),'rows; mismatches:',bad)
    print('inPage yes',sum(r['inPage'] for r in d))
