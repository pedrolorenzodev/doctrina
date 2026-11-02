import json,re
base='docs/research/doctrines/scripture-lists/eucharist-%s'
for t in ['orthodox','reformed']:
    d=json.load(open(base%t+'.json'))
    md=open(base%t+'.md').read()
    rows=[l for l in md.split('\n') if re.match(r'\| \d+ \|',l)]
    print(t,len(rows),len(d))
    mism=0
    for i,(l,r) in enumerate(zip(rows,d)):
        cells=[c.strip() for c in l.strip().strip('|').split(' | ')]
        ref='`'+'`, `'.join(r['refs'])+'`'
        cnt='%d / %d'%(r['count'],r['locCount'])
        ok = cells[1]==ref and cells[2]==cnt and (('**new**' in cells[3])==(not r['inPage']))
        if not ok:
            mism+=1; print('MISMATCH',i+1,cells[:4],ref,cnt,r['inPage'])
        # locs
        for c in r['citedBy']:
            if c['loc'] not in cells[4]: print('LOC missing',i+1,c['loc']); mism+=1
    print('mism',mism)
    # citing sentences blocks
    secs=re.findall(r'^### `([^`]+)`',md,re.M)
    print('sections',len(secs))
