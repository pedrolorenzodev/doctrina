import json,re,sys
base='/Users/pedrolorenzo/Desktop/dev/doctrina/'
def expand(ref):
    out=set()
    parts=ref.split('-')
    a=parts[0]; b=parts[-1]
    m=re.match(r'(.+)\.(\d+)\.(\d+)$',a); bk,ch,v1=m.group(1),int(m.group(2)),int(m.group(3))
    m2=re.match(r'(.+)\.(\d+)\.(\d+)$',b); bk2,ch2,v2=m2.group(1),int(m2.group(2)),int(m2.group(3))
    assert ch==ch2 and bk==bk2,(ref)
    for v in range(v1,v2+1): out.add((bk,ch,v))
    return out
def pagerefs(trad):
    t=open(base+f'src/content/pages/baptism/{trad}.es.ts').read()
    i=t.index('scripture: [')
    seg=t[i:]
    # only the scripture block at top-level: up to 'videos' / next key; take until first 'subtitle' after
    j=seg.find('\n  },',0)
    seg=seg[:j] if j>0 else seg
    refs=re.findall(r'refs:\s*\[([^\]]*)\]',seg)
    s=set(); lst=[]
    for r in refs:
        for x in re.findall(r'"([^"]+)"',r):
            s|=expand(x); lst.append(x)
    return s,lst
for trad in sys.argv[1:]:
    d=json.load(open(base+f'docs/research/doctrines/scripture-lists/baptism-{trad}.json'))
    P,lst=pagerefs(trad)
    print(trad,'page refs',len(lst))
    bad=0
    for i,r in enumerate(d,1):
        v=set()
        for x in r['refs']: v|=expand(x)
        anyo=bool(v&P); allc=v<=P
        works={c['work'] for c in r['citedBy']}
        locs={(c['work'],c['loc']) for c in r['citedBy']}
        flag=[]
        if len(works)!=r['count']: flag.append(f"count {len(works)}!={r['count']}")
        if len(locs)!=r['locCount']: flag.append(f"loc {len(locs)}!={r['locCount']}")
        if anyo!=r['inPage'] : flag.append(f"inPage json={r['inPage']} any={anyo} all={allc}")
        elif allc!=r['inPage']: flag.append(f"(any ok; all={allc})")
        if flag: print(i,r['refs'],flag)
