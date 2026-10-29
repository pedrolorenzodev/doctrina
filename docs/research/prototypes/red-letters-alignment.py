import zipfile,re,difflib,sys,json
def norm(x):
    m=re.match(r'([GH])0*(\d+)',x)
    return (m.group(1)+m.group(2)) if m else x
def load(zipname):
    z=zipfile.ZipFile(zipname); out={}
    for name in z.namelist():
        if not name.lower().endswith((".usfm",".sfm")): continue
        t=z.read(name).decode("utf-8-sig")
        m=re.search(r"^\\id ([1-4A-Z]{3})",t,re.M)
        if not m: continue
        book=m.group(1); chap=None; red=False
        t=re.sub(r"\\f .*?\\f\*","",t,flags=re.S); t=re.sub(r"\\x .*?\\x\*","",t,flags=re.S)
        for line in t.splitlines():
            c=re.match(r"\\c (\d+)",line)
            if c: chap=int(c.group(1)); continue
            for part in re.split(r"(\\v \d+[a-z]?(?:-\d+)?)",line):
                v=re.match(r"\\v (\d+)",part)
                if v: cur=(book,chap,int(v.group(1))); out.setdefault(cur,[]); continue
                if chap is None or 'cur' not in dir(): continue
                # tokenise
                for tok in re.finditer(r"(\\wj\*?)|\\\+?w ([^|\\]+)\|([^\\]*?)\\\+?w\*|([^\s\\]+)",part):
                    if tok.group(1):
                        red = not tok.group(1).endswith("*"); continue
                    if tok.group(2):
                        st=re.findall(r'strong="([^"]*)"',tok.group(3)); out[cur].append((tok.group(2).strip(), norm(st[0].split(",")[0]) if st else None, red))
                    elif tok.group(4):
                        w=tok.group(4)
                        if re.match(r"^[\\|]",w): continue
                        out[cur].append((w,None,red))
    return out
def predict(src,tgt):
    # src: tokens with red flags; tgt: tokens
    sa=[(i,s) for i,(w,s,r) in enumerate(src) if s]; ta=[(i,s) for i,(w,s,r) in enumerate(tgt) if s]
    reds=[i for i,(w,s,r) in enumerate(src) if r and s]
    if not reds: return set()
    sm=difflib.SequenceMatcher(None,[s for _,s in sa],[s for _,s in ta],autojunk=False)
    mp={}
    for a,b,n in sm.get_matching_blocks():
        for k in range(n): mp[sa[a+k][0]]=ta[b+k][0]
    # first/last red anchor that maps
    cand=[mp[i] for i in reds if i in mp]
    if not cand: return set()
    lo,hi=min(cand),max(cand)
    r0,r1=min(reds),max(reds)
    before=[i for i,(w,s_,r) in enumerate(src) if i<r0 and s_]
    after=[i for i,(w,s_,r) in enumerate(src) if i>r1 and s_]
    if not before: lo=0
    if not after: hi=len(tgt)-1
    # extend one tagged word at the edges when the neighbour in the source is red-adjacent and unmapped
    return set(range(lo,hi+1))
if __name__=="__main__":
    web=load("eng-web-c.zip"); kjv=load("eng-kjv2006.zip")
    tp=fp=fn=0; vtp=0;vn=0;bad=[]
    for key,src in web.items():
        if not any(r for _,_,r in src): continue
        if key not in kjv: continue
        tgt=kjv[key]; truth={i for i,(w,s,r) in enumerate(tgt) if r}
        pred=predict(src,tgt)
        # compare only tagged words to avoid punctuation/untagged noise
        T={i for i in truth if tgt[i][1]}; P={i for i in pred if tgt[i][1]}
        tp+=len(T&P); fp+=len(P-T); fn+=len(T-P); vn+=1
        if T==P: vtp+=1
        else: bad.append((key,len(T),len(P),len(T&P)))
    print("verses",vn,"exact",vtp,"word precision",tp/(tp+fp),"recall",tp/(tp+fn))
    print(bad[:12])
