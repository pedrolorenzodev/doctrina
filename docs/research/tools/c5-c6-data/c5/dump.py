import json,glob,sys
w=sys.argv[1]; locs=sys.argv[2:]
en=json.load(open(glob.glob(f'/Users/pedrolorenzo/Desktop/dev/doctrina/data/corpus/fathers/{w}/*.json')[0]))
es=json.load(open(f'/Users/pedrolorenzo/Desktop/dev/doctrina/data/corpus/fathers-es/{w}/doctrina-ia-2026.json'))
E={x['locator']:x for x in en['divisions']}; S={x['locator']:x for x in es['divisions']}
for l in (locs or list(E)):
    print(f'=== {w} {l}')
    if E[l].get('heading') or S[l].get('heading'): print('H:',E[l].get('heading'),'|',S[l].get('heading'))
    print('EN:',E[l]['text']); print('ES:',S[l]['text']); print()
