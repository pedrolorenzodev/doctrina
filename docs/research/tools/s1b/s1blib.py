import json,re,os,sys,collections
SP='/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/860b43de-3998-41a5-bbee-361b678b7c19/scratchpad/'
sys.path.insert(0,SP+'tools')
from scrlib import BOOKS,find_refs,find_refs_roman,osis,norm_book,vlist,refs_ver,rom
OUT='/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/doctrines/scripture-lists/'
PAGE=json.load(open(SP+'page-scripture.json'))
BOOKORDER=list(BOOKS.keys())
def parse_osis(o):
    m=re.match(r'([0-9A-Za-z]+)\.(\d+)(?:\.(\d+))?(?:-(?:[0-9A-Za-z]+)\.(\d+)(?:\.(\d+))?)?$',o)
    if not m: return None
    b=m.group(1); c1=int(m.group(2)); v1=int(m.group(3)) if m.group(3) else 0
    if m.group(4): c2=int(m.group(4)); v2=int(m.group(5)) if m.group(5) else 999
    else: c2=c1; v2=v1 if m.group(3) else 999
    return b,(c1,v1),(c2,v2)
def overlap(o1,o2):
    a=parse_osis(o1); b=parse_osis(o2)
    if not a or not b or a[0]!=b[0]: return False
    return not (a[2]<b[1] or b[2]<a[1])
def okey(k):
    p=parse_osis(k); bi=BOOKORDER.index(p[0]) if p and p[0] in BOOKORDER else 99
    return (bi,p[1] if p else (0,0))
class Lst:
    def __init__(s,name):
        s.name=name; s.doc,s.trad=name.rsplit('-',1) if not name.startswith('sola') else ('sola-scriptura',name.split('-')[-1])
        s.json=OUT+name+'.json'; s.mdp=OUT+name+'.md'
        s.data=json.load(open(s.json)); s.md=open(s.mdp).read()
        s.before=len(s.data)
        s.pagerefs=[r for grp in PAGE.get(f'{s.doc}/{s.trad}.es.ts',[]) for r in grp if r]
        s.new_before=sum(1 for r in s.data if not r.get('inPage'))
        s.added=0; s.newcites=0; s.changed=0
        s.nr_replace=None; s.extra_notes=[]
    def find(s,ref):
        for r in s.data:
            if r['refs']==[ref]: return r
        return None
    def add(s,ref,work,loc,how,sentence,edition,tag,url=None,printed=None,flag=None):
        r=s.find(ref)
        if r is None:
            r={'refs':[ref],'citedBy':[],'count':0,'inPage':False,'tag':''}; s.data.append(r); s.added+=1
        for x in r['citedBy']:
            if x['work']==work and x['loc']==loc and x.get('how')==how: return False
        e={'work':work,'loc':loc,'how':how,'sentence':sentence,'edition':edition,'tagCite':tag}
        if url: e['url']=url
        if printed: e['printed']=printed
        if flag: e['flag']=flag
        r['citedBy'].append(e); s.newcites+=1
        return True
    def finalize(s):
        for r in s.data:
            r['count']=len({x['work'] for x in r['citedBy']})
            r['locCount']=len({(x['work'],x['loc']) for x in r['citedBy']})
            r['inPage']=any(overlap(k,p) for k in r['refs'] for p in s.pagerefs)
            tg={x['tagCite'] for x in r['citedBy'] if 'tagCite' in x}
            if all('tagCite' in x for x in r['citedBy']): r['tag']='; '.join(sorted(tg))
            else:
                old=r.get('tag','')
                r['tag']='; '.join([old]+[t for t in sorted(tg) if t not in old]) if tg else old
        s.data.sort(key=lambda r:(-r['count'],-r['locCount'],okey(r['refs'][0])))
    def finalize_codex(s):
        old={tuple(r['refs']):r.get('inPage') for r in s.data}
        for r in s.data:
            r['count']=len({x['work'] for x in r['citedBy']})
            if tuple(r['refs']) in old and old[tuple(r['refs'])] is not None and r.get('inPage') is not None and r['citedBy']:
                pass
        for r in s.data:
            if not r.get('inPage') and any(overlap(k,p) for k in r['refs'] for p in s.pagerefs): r['inPage']=True
        json.dump(s.data,open(s.json,'w'),ensure_ascii=False,indent=1)
    def save(s):
        s.finalize()
        json.dump(s.data,open(s.json,'w'),ensure_ascii=False,indent=1)
        s.write_md()
    def write_md(s):
        md=s.md
        m=re.search(r'^Passages \(',md,re.M)
        head=md[:m.start()] if m else md.split('| # |')[0]
        t=re.search(r'^## Not reached',md,re.M)
        tail=md[t.start():] if t else '## Not reached\n\n- (nothing recorded)\n'
        if s.nr_replace is not None:
            mm=re.match(r'## Not reached\s*\n(.*?)(?=\n## |\Z)',tail,re.S)
            rest=tail[mm.end():] if mm else ''
            tail='## Not reached\n\n'+'\n'.join('- '+x for x in s.nr_replace)+'\n'+rest
        if s.extra_notes:
            mm=re.search(r'\n## Session S1b additions \(2026-11-02\)\n\n(.*?)(?=\n## |\Z)',tail,re.S)
            ex=[]
            if mm:
                ex=[l[2:] for l in mm.group(1).split('\n') if l.startswith('- ')]
                tail=tail[:mm.start()]+tail[mm.end():]
            allx=ex+[n for n in s.extra_notes if n not in ex]
            tail=tail.rstrip('\n')+'\n\n## Session S1b additions (2026-11-02)\n\n'+'\n'.join('- '+x for x in allx)+'\n'
        newc=sum(1 for r in s.data if not r['inPage'])
        L=[f'Passages (single ranges as printed, not merged across footnotes): **{len(s.data)}**; already in the page `scripture` list: **{len(s.data)-newc}**; new: **{newc}**. Count = distinct works citing it; ties broken by distinct locators.','',
           '| # | Passage (OSIS) | Count (works / locators) | In page | Cited by (locator, how) | Tag |','|---|---|---|---|---|---|']
        for i,r in enumerate(s.data,1):
            by='; '.join(f"{x['work']} {x['loc']} ({x['how']})" for x in r['citedBy'])
            L.append(f"| {i} | `{', '.join(r['refs'])}` | {r['count']} / {r['locCount']} | {'yes' if r['inPage'] else '**new**'} | {by} | {r['tag']} |")
        L+=['','## Citing sentences (verbatim from the document at the cited locator)','']
        for r in s.data:
            L.append('### `'+', '.join(r['refs'])+'`')
            for x in r['citedBy']:
                L.append(f"- **{x['work']} {x['loc']}** ({x['how']}; {x['edition']}){' · printed as «'+x['printed']+'»' if x.get('printed') else ''}{' · '+x['flag'] if x.get('flag') else ''}: {x['sentence']}  — {x['tagCite']}"+(f"  <{x['url']}>" if x.get('url') else ''))
            L.append('')
        open(s.mdp,'w').write(head+'\n'.join(L)+'\n'+tail)
def words(t): return len(t.split())
def clip(text,n=100):
    w=text.split()
    return text if len(w)<=n else ' '.join(w[:n])+' […]'
def squash(t): return re.sub(r'\s+',' ',t).strip()
