import json,re,sys,collections
sys.path.insert(0,'/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/65f1fb53-fec5-45ca-9e96-35ddea5dd54a/scratchpad')
from scrlib import *
REPO='/Users/pedrolorenzo/Desktop/dev/doctrina/'
SPD='/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/65f1fb53-fec5-45ca-9e96-35ddea5dd54a/scratchpad/'
page_all=json.load(open(SPD+'page-scripture.json'))
BOOKORDER=list(BOOKS.keys())
def parse_osis(o):
    m=re.match(r'([0-9A-Za-z]+)\.(\d+)(?:\.(\d+))?(?:-(?:[0-9A-Za-z]+)\.(\d+)(?:\.(\d+))?)?$',o)
    if not m: return None
    b=m.group(1); c1=int(m.group(2)); v1=int(m.group(3)) if m.group(3) else 0
    if m.group(4): c2=int(m.group(4)); v2=int(m.group(5)) if m.group(5) else 999
    else: c2=c1; v2=v1 if m.group(3) else 999
    if not m.group(3): v1=0
    return b,(c1,v1),(c2,v2)
def overlap(o1,o2):
    a=parse_osis(o1); b=parse_osis(o2)
    if not a or not b or a[0]!=b[0]: return False
    return not (a[2]<b[1] or b[2]<a[1])
def split_refs(refs):
    out=[]
    for r in refs:
        r=r.strip()
        if r: out.append(r)
    return out
class List:
    def __init__(s,page,doc,trad):
        s.page=page; s.doc=doc; s.trad=trad; s.recs=collections.OrderedDict(); s.notreached=[]; s.notes=[]
        s.pagerefs=[r for grp in page_all.get(page,[]) for r in grp if r]
    def add(s,osis_ref,work,loc,how,sentence,edition,tag,url=None,printed=None,flag=None):
        r=s.recs.setdefault(osis_ref,{'refs':[osis_ref],'citedBy':[],'count':0,'inPage':False,'tag':''})
        e={'work':work,'loc':loc,'how':how,'sentence':sentence,'edition':edition,'tagCite':tag}
        if url: e['url']=url
        if printed: e['printed']=printed
        if flag: e['flag']=flag
        for x in r['citedBy']:
            if x['work']==work and x['loc']==loc and x['how']==how: return
        r['citedBy'].append(e)
    def finalize(s):
        for k,r in s.recs.items():
            r['count']=len({x['work'] for x in r['citedBy']})
            r['locCount']=len({(x['work'],x['loc']) for x in r['citedBy']})
            r['inPage']=any(overlap(k,p) for p in s.pagerefs)
            tags=sorted({x['tagCite'] for x in r['citedBy']})
            r['tag']='; '.join(tags)
    def sortedrecs(s):
        s.finalize()
        def okey(k):
            p=parse_osis(k); bi=BOOKORDER.index(p[0]) if p and p[0] in BOOKORDER else 99
            return (bi,p[1] if p else (0,0))
        return sorted(s.recs.items(), key=lambda kv:(-kv[1]['count'],-kv[1]['locCount'],okey(kv[0])))
    def write(s,outdir,title,intro,extra_md=''):
        recs=s.sortedrecs()
        data=[r for k,r in recs]
        json.dump(data,open(f'{outdir}/{s.doc}-{s.trad}.json','w'),ensure_ascii=False,indent=1)
        newc=sum(1 for k,r in recs if not r['inPage'])
        L=[f'# {title}','','Status: draft, NOT verified by Pedro','',intro,'',f'Passages (single ranges as printed, not merged across footnotes): **{len(recs)}**; already in the page `scripture` list: **{len(recs)-newc}**; new: **{newc}**. Count = distinct works citing it; ties broken by distinct locators.','',
           '| # | Passage (OSIS) | Count (works / locators) | In page | Cited by (locator, how) | Tag |','|---|---|---|---|---|---|']
        for i,(k,r) in enumerate(recs,1):
            by='; '.join(f"{x['work']} {x['loc']} ({x['how']})" for x in r['citedBy'])
            L.append(f"| {i} | `{k}` | {r['count']} / {r['locCount']} | {'yes' if r['inPage'] else '**new**'} | {by} | {r['tag']} |")
        L+=['','## Citing sentences (verbatim from the document at the cited locator)','']
        for k,r in recs:
            L.append(f'### `{k}`')
            for x in r['citedBy']:
                L.append(f"- **{x['work']} {x['loc']}** ({x['how']}; {x['edition']}){' · printed as «'+x['printed']+'»' if x.get('printed') else ''}{' · '+x['flag'] if x.get('flag') else ''}: {x['sentence']}  — {x['tagCite']}"+(f"  <{x['url']}>" if x.get('url') else ''))
            L.append('')
        L+=['## Not reached','']+(['- '+n for n in s.notreached] or ['- (nothing recorded)'])
        if s.notes: L+=['','## Notes']+['- '+n for n in s.notes]
        if extra_md: L+=['',extra_md]
        open(f'{outdir}/{s.doc}-{s.trad}.md','w').write('\n'.join(L)+'\n')
        return len(recs),newc
def clip_words(text,n=40,tail=True):
    w=text.split()
    if len(w)<=n: return text
    return ' '.join(w[:n])+' […]'
def clip_tail_words(text,n=40):
    w=text.split()
    if len(w)<=n: return text
    return '[…] '+' '.join(w[-n:])
