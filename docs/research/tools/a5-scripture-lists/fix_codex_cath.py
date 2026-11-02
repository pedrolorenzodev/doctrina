import json,re,sys
sys.path.insert(0,'/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/65f1fb53-fec5-45ca-9e96-35ddea5dd54a/scratchpad')
from lb import *
c=json.load(open(SPD+'ccc/ccc.json'))
fn=REPO+'docs/research/doctrines/scripture-lists/papacy-catholic.json'
d=json.load(open(fn))
page=[r for g in page_all['papacy/catholic.es.ts'] for r in g if r]
have=set(); paras=set()
for r in d:
    for x in r['citedBy']:
        m=re.match(r'§(\d+), note (\d+)',x['loc'])
        if m and x['work'].startswith('Catechism'): have.add((m.group(1),m.group(2))); paras.add(m.group(1))
added=[]
for p in sorted(paras,key=int):
    for f in c[p]['notes']:
        if (p,f['n']) in have: continue
        for r in find_refs(f['text']):
            o=osis(*r[:4])
            entry={'work':'Catechism of the Catholic Church','loc':f'§{p}, note {f["n"]}; https://www.vatican.va/archive/ENG0015/{c[p]["page"]}','how':'inline (footnote reference)','sentence':f['ctx'],'edition':'1992 promulgation; English Vatican IntraText, online edition undated','addedBy':'A5 2026-11-01 (footnote missed by the first pass; found by verifier V3 and a parser audit)'}
            rec=next((x for x in d if x['refs']==[o]),None)
            if rec: rec['citedBy'].append(entry)
            else:
                d.append({'refs':[o],'citedBy':[entry],'count':1,'inPage':any(overlap(o,q) for q in page),'tag':'[verified: official HTML, explicit reference matched (A5 addition); online edition caveat in scope]'})
            added.append((p,f['n'],o))
# Pastor aeternus identified references
for r in d:
    ident=[x for x in r['citedBy'] if 'Pastor aeternus' in x['work'] and 'no numbered reference supplied' in x['work'] and not re.search(r'\((?:Ioan|Matth|Luc|Mat|Joan)\.?\s',x['sentence'])]
    if r['refs'][0] in ('Luke.22.32','Matt.16.18') and ident:
        for x in ident:
            x['identified']=True; x['flag']='the print gives no Scripture reference here; the verse is identified from the quoted words by Codex [unverified]'
        r['tag']='[verified: official HTML for the documents that print the reference; the Pastor aeternus ch. IV row quotes the Latin but prints no reference: identification [unverified]]'
# Ut unum sint bare parentheticals
for r in d:
    for x in r['citedBy']:
        if 'Ut unum sint' in x['work'] and re.fullmatch(r'\(cf\.? ?[0-9:,\- ]+\)',x['sentence'].strip()):
            x['flag']='the quoted fragment has no book name; the book is taken from the preceding text of the paragraph (not verified by A5)'
for r in d:
    r['count']=len({x['work'] for x in r['citedBy'] if not x.get('identified')})
json.dump(d,open(fn,'w'),ensure_ascii=False,indent=1)
print(len(d),added)
