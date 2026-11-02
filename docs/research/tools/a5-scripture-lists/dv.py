import re,sys
sys.path.insert(0,'.')
from lb import *
from papal import para, sentences
def clip_ref(clean_s,raw,n=40):
    w=clean_s.split()
    if len(w)<=n: return clean_s
    i=clean_s.find(raw) if raw in clean_s else 0
    pre=len(clean_s[:i].split())
    st=max(0,min(pre-n//2,len(w)-n)); seg=w[st:st+n]
    return ('[… ] ' if st>0 else '')+' '.join(seg)+(' […]' if st+n<len(w) else '')

def dv_collect(L,arts,fn='dv.txt',work='Dei verbum',ed='Dei verbum (18 Nov 1965), official English text on vatican.va (vat-ii_const_19651118_dei-verbum_en.html); retrieved 2026-11-01',url='https://www.vatican.va/archive/hist_councils/ii_vatican_council/documents/vat-ii_const_19651118_dei-verbum_en.html'):
    t=open(SPD+'docs/'+fn).read()
    j=t.rfind('NOTES'); notes=t[j:]; body=t[:j]
    nt={}  # article -> list of (n,text)
    cur=None
    for line in re.split(r'\s(?=Article \d+:)',re.sub(r'\s+',' ',notes)):
        m=re.match(r'Article (\d+):(.*)',line)
        if m:
            a=int(m.group(1)); nt[a]=[(int(x),re.sub(r'\s+',' ',y).strip()) for x,y in re.findall(r'(\d+)\.\s(.*?)(?=\s\d+\.\s|$)',m.group(2))]
    for a in arts:
        p=para(body,a)
        if p is None: L.notreached.append(f'DV {a}: paragraph not found'); continue
        p=p.replace('Jn 3;34','Jn 3:34').replace('John 3;34','John 3:34').replace('Acts 2, 42','Acts 2:42').replace('2 Peter 1:19-20, 3:15-16','2 Peter 1:19-20; 2 Peter 3:15-16')
        sents=sentences(p)
        for s in sents:
            clean=re.sub(r'\s*\(\d{1,3}\)','',s)
            for r in find_refs(re.sub(r'\s+',' ',s)):
                L.add(osis(*r[:4]),work,f'§{a}','inline reference',clip_ref(clean,r[4].strip()),ed,'[verified: official vatican.va page, machine-extracted, 2026-11-01]',url)
            for mk in [int(x) for x in re.findall(r'\((\d{1,3})\)',s)]:
                for (n,txt) in nt.get(a,[]):
                    if n==mk:
                        txt2=re.sub(r'(\d+),\s*(\d+)',r'\1:\2',txt)
                        for r in find_refs(txt2): L.add(osis(*r[:4]),work,f'§{a}, fn {mk}','footnote',clip_words(clean,40),ed,'[verified: official vatican.va page, machine-extracted, 2026-11-01]',url,printed=txt)
if __name__=='__main__':
    L=List('sola-scriptura/catholic.es.ts','sola-scriptura','catholic')
    dv_collect(L,[4,5,7,8,9,10,11,12,21,22,24,25])
    for k,r in L.recs.items(): print(k,[(x['loc'],x['how']) for x in r['citedBy']])
    print(L.notreached)
