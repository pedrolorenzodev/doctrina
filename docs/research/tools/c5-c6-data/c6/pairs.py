import json,sys
b='/Users/pedrolorenzo/Desktop/dev/doctrina/data/corpus/'
e=json.load(open(b+'fathers/shepherd-hermas/lightfoot-harmer-1891.json'))['divisions']
s=json.load(open(b+'fathers-es/shepherd-hermas/doctrina-ia-2026.json'))['divisions']
E={d['locator']:d for d in e}; S={d['locator']:d for d in s}
for l in sys.argv[1:]:
    if l not in E: print('MISSING',l); continue
    print('=== ',l, len(E[l]['text'].split()),'/',len(S[l]['text'].split()))
    print('EN:',E[l]['text']); print('ES:',S[l]['text']); print()
