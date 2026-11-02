import json,re
T=open('../txt/concordiatriglot00unse.txt',encoding='utf8',errors='replace').read()
def norm(s):
    s=re.sub(r'-\s*\n\s*','',s)
    s=re.sub(r'\s+',' ',s)
    return s
N=norm(T)
print(len(N))
d=json.load(open('/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/doctrines/scripture-lists/baptism-lutheran.json'))
for r in d:
  for c in r['citedBy']:
    s=c['sentence']
    parts=[p.strip() for p in s.split('[…]') if p.strip()]
    for p in parts:
        p2=norm(p)
        hits=[m.start() for m in re.finditer(re.escape(p2),N)]
        print(r['refs'],c['work'],len(p2),hits[:5], p2[:50])
        if not hits:
            # find longest prefix
            for L in range(len(p2),10,-5):
                h=N.find(p2[:L])
                if h>=0: print('  prefix match',L,N[h:h+L+80]); break
print('=====')
for pos in [2689960,4060118-300,3825085,4065805,4060589,4803325,4803512,4828657]:
    print(pos, N[pos-500:pos+600]); print('-----')
