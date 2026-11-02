import json,sys
es=json.load(open('fathers-es/irenaeus-against-heresies/doctrina-ia-2026.json'))
en=json.load(open('fathers/irenaeus-against-heresies/roberts-rambaut-1885.json'))
E={d['locator']:d for d in en['divisions']}
S={d['locator']:d for d in es['divisions']}
for l in sys.argv[1:]:
    print('=====',l,'EN heading:',E[l].get('heading'),'| ES heading:',S[l].get('heading'))
    print('EN:',E[l]['text']);print('ES:',S[l]['text']);print()
