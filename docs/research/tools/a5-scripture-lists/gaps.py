import json,os,re,sys
sys.path.insert(0,'.')
from lb import *
OUT=REPO+'docs/research/doctrines/scripture-lists/'
def nr(fn):
    t=open(fn).read(); m=re.search(r'## Not reached\s*\n(.*?)(?=\n## |\Z)',t,re.S)
    if not m: return []
    return [re.sub(r'\s+',' ',x.strip()[2:]) for x in m.group(1).split('\n') if x.strip().startswith('- ')]
L=['# Gaps summary: Scripture lists against the pages\' `scripture` lists','','Status: draft, NOT verified by Pedro','',
 'Generated 2026-11-01 by session A5 from the 20 `scripture-lists/*.json` files (the four Papacy files for Catholic, Orthodox, Lutheran, Reformed are Codex\'s partial checkpoints; the other 16 are A5\'s). «New» = a passage the documents cite that no verse of the page\'s `scripture` list covers (A5 files: single-range records; Codex files: its own `inPage`). Ranking of the «ten most important new»: distinct documents citing it, then distinct locators. A passage cited by one document at one locator is the usual case; a new passage is not yet a recommendation to add it to a page. All counts come from drafts: see each file\'s tags and the verification files.','',
 '| Page | Records | New | Verifier (Sonnet) | Main routes not reached |','|---|---|---|---|---|']
rows=[];details=[]
VER={'baptism-catholic':'V1 (+ parser audit)','baptism-lutheran':'V1','baptism-reformed':'V2','baptism-baptist':'V2 (+1688 margins read by A5)','baptism-orthodox':'no','eucharist-catholic':'V4','eucharist-lutheran':'V4','eucharist-reformed':'V5 + V9 (rebuilt from images)','eucharist-orthodox':'V5','eucharist-baptist':'no (1688 margins read by A5)','papacy-catholic':'V3 (corrections applied to JSON)','papacy-orthodox':'V3 (corrections applied to JSON)','papacy-lutheran':'V6 (corrections applied to JSON)','papacy-reformed':'V6 (corrections applied to JSON)','papacy-baptist':'V8','sola-scriptura-catholic':'V7','sola-scriptura-lutheran':'V7','sola-scriptura-reformed':'V9 (rebuilt from images)','sola-scriptura-baptist':'V8','sola-scriptura-orthodox':'no'}
for doc in ['baptism','eucharist','papacy','sola-scriptura']:
    for trad in ['catholic','lutheran','reformed','baptist','orthodox']:
        base=OUT+f'{doc}-{trad}'
        if not os.path.exists(base+'.json'): rows.append(f'| {doc} · {trad} | — | — | — | list not written |'); continue
        d=json.load(open(base+'.json'))
        newr=[r for r in d if not r.get('inPage')]
        newr.sort(key=lambda r:(-r.get('count',0),-len({(x.get('work'),x.get('loc')) for x in r['citedBy']}),r['refs'][0]))
        n=nr(base+'.md')
        key=f'{doc}-{trad}'
        ver=VER.get(key,'no')
        rows.append(f"| {doc} · {trad} | {len(d)} | {len(newr)} | {ver} | {'; '.join(x[:140] for x in n[:2]) or '—'} |")
        details+=[f'## {doc} · {trad}','',f'{len(d)} records, {len(newr)} new against the page.','','Ten most important new passages:','']
        for r in newr[:10]:
            by=sorted({x.get('work','') for x in r['citedBy']})
            details.append(f"- `{', '.join(r['refs'])}`: {r.get('count',0)} document(s) ({'; '.join(by)})")
        details+=['','Not reached (from the list\'s own section):','']+[f'- {x}' for x in n]+['']
open(OUT+'gaps-summary.md','w').write('\n'.join(L+rows+['']+details))
print(len(rows))
