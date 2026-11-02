import re,sys
sys.path.insert(0,'.')
from lb import *
from vat2 import fix_commas
TRI=open(SPD+'txt/concordiatriglot00unse.txt',errors='replace').read()
EN=set('the and of to that is in we it for with are be not by this as which from our or but have his who they their his shall has'.split())
def english_ratio(s):
    w=re.findall(r"[A-Za-z']+",s.lower()); 
    return (sum(1 for x in w if x in EN)/len(w)) if w else 0
PAT=re.compile(r'(?<![A-Za-z0-9])((?:[123]\s?)?[A-Z][a-z]{1,9})[.\u2024]?\s*(\d{1,3})\s*[,:]\s*(\d{1,3}(?:\s*[-–f]+\.?\s*\d{0,3})?(?:\s*[,;]\s*\d{1,3}(?:\s*[-–]\s*\d{1,3})?)*)')
ABBR=r'(?:Matt|Mark|Luke|John|Cor|Rom|Ps|Ex|Lev|Num|Deut|Gen|Heb|Gal|Eph|Col|Tit|Tim|Pet|Acts|Jer|Isa|Dan|Mal|St|Phil|Thess|Chap|chap|Art|Ap|Jas|Rev|Josh|Judg|Sam|Kings|Chron|Prov|Eccl|Hos|Joel|Amos|Mic|Zech|Hab|Hag|Nah)'
def protect(seg): return re.sub(r'\b('+ABBR+r')\.',lambda m:m.group(1)+'\u2024',seg)
def unprotect(s): return s.replace('\u2024','.')
def tri_refs(a,b):
    seg0=re.sub(r'\s+',' ',TRI[a:b]); seg=protect(seg0); out=[]
    for m in PAT.finditer(seg):
        bk=norm_book(unprotect(m.group(1)))
        if not bk: continue
        ch=int(m.group(2)); vs=m.group(3)
        vs=re.sub(r'\s*f+\u2024?\.?','',vs)
        main=vs.split(';')[0]
        vl=vlist(main)
        if not vl: continue
        extra=[]
        tail=seg[m.end():]
        cm=re.match(r'(?:\s*[;,]\s*(\d{1,3})\s*,\s*(\d{1,3})(?:\s*[-–]\s*\d{1,3})?)+',tail)
        if cm:
            for mm in re.finditer(r'(\d{1,3})\s*,\s*(\d{1,3})(?:\s*[-–]\s*(\d{1,3}))?',cm.group(0)):
                extra.append((int(mm.group(1)),int(mm.group(2)),int(mm.group(3) or mm.group(2))))
        # chapter-continuation inside group: "9, 12; 11, 5"
        for part in vs.split(';')[1:]:
            mm=re.match(r'\s*(\d{1,3})\s*,\s*(\d{1,3})',part)
            if mm: extra.append((int(mm.group(1)),int(mm.group(2)),int(mm.group(2))))
        pre=seg[max(0,m.start()-520):m.start()]; post=seg[m.end():m.end()+200]
        sp=re.split(r'(?<=[.!?])\s+(?=[A-Z])',pre)
        pre_s=sp[-1] if len(sp)>1 else pre
        if len(sp)>1 and len(pre_s.split())<6: pre_s=' '.join(sp[-2:])
        pp=re.split(r'(?<=[.!?])\s',post)
        post_s=pp[0] if len(pp)>1 else post
        win=unprotect((pre_s+m.group(0)+post_s).strip())
        if len(sp)<=1 and not re.match(r'[A-Z"\u201c]',win): win='[\u2026] '+win
        if not re.search(r'[.!?]["\u201d]?$',win): win=win+' [\u2026]'
        hm=list(re.finditer(r'\s[SMR]?\.?\d{3}\s',win))
        if hm:
            refpos=win.find(unprotect(m.group(0)))
            best=win
            for h in hm:
                if h.start()<refpos: best='[\u2026] '+win[h.end():]; 
            win=best
        er=english_ratio(win)
        if er<0.18: continue
        for x,y in vl: out.append((osis(bk,ch,x,y),unprotect(m.group(0)),win,m.start(),er))
        for c2,x,y in extra: out.append((osis(bk,c2,x,y),unprotect(m.group(0)),win,m.start(),er))
    return out
