import re,sys
sys.path.insert(0,'.')
from lb import *
D=SPD+'docs/'
def load(fn): return open(D+fn).read()
def para(t,n):
    ms=[m for m in re.finditer(r'\n\s*'+str(n)+r'\.\s',t)]
    if not ms: return None
    # choose first occurrence that is followed (within 40k) by next number; skip note lines
    m=ms[0]
    nxt=re.search(r'\n\s*'+str(n+1)+r'\.\s',t[m.end():])
    e=m.end()+(nxt.start() if nxt else 4000)
    return t[m.end():e]
def sentences(txt):
    txt=re.sub(r'\s+',' ',txt)
    return re.split(r'(?<=[.!?])\s+(?=[A-Z"“‘(])',txt)
def notes_map(t):
    d={}
    for m in re.finditer(r'\n\((\d+)\)\s(.*?)(?=\n\(\d+\)\s|\Z)',t,re.S):
        d[int(m.group(1))]=re.sub(r'\s+',' ',m.group(2)).strip()
    return d
def papal(L,fn,pars,work,ed,url,prefix,tag='[verified: official vatican.va page, machine-extracted, 2026-11-01]'):
    t=load(fn); nm=notes_map(t)
    for n in pars:
        p=para(t,n)
        if p is None: L.notreached.append(f'{work} §{n}: paragraph not found'); continue
        sents=sentences(p)
        for s in sents:
            refs=find_refs(re.sub(r'\s+',' ',s))
            markers=[int(x) for x in re.findall(r'\((\d{1,3})\)',s)]
            clean_s=re.sub(r'\s*\(\d{1,3}\)','',s)
            for r in refs:
                L.add(osis(*r[:4]),work,f'§{n}','inline reference',clip_words(clean_s,40) if len(clean_s.split())>40 else clean_s,ed,tag,url)
            for mk in markers:
                note=nm.get(mk)
                if note:
                    for r in find_refs(note):
                        L.add(osis(*r[:4]),work,f'§{n}, fn {mk}','footnote',clip_words(clean_s,40) if len(clean_s.split())>40 else clean_s,ed,tag,url,printed=note[:120])
