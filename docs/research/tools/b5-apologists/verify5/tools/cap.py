import re,sys
TR="/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/28fa39c0-1913-4185-baa3-8c66bc722000/scratchpad/yt/tr/"
def tsec(t):
    s=0
    for x in t.split(":"): s=s*60+int(x)
    return s
def label(sec):
    h,r=divmod(sec,3600); m,sc=divmod(r,60); p=[]
    if h: p.append(f"{h} hour"+("s" if h!=1 else ""))
    if m: p.append(f"{m} minute"+("s" if m!=1 else ""))
    if sc or not p: p.append(f"{sc} second"+("s" if sc!=1 else ""))
    return ", ".join(p)
def load(v):
    cues=[]
    L=open(TR+v+".tr.txt",encoding="utf-8").read().split("\n")
    for l in L[1:]:
        if not l.strip(): continue
        m=re.match(r"^(\d+(?::\d+)+) (.*)$",l)
        t,rest=m.groups(); lab=label(tsec(t))
        if rest==lab: txt=""
        elif rest.startswith(lab+" "): txt=rest[len(lab)+1:]
        else: raise Exception("label? "+l[:80])
        cues.append((t,txt))
    return L[0],cues
def rebuild(v,a,b):
    h,cues=load(v)
    i=[k for k,(t,_) in enumerate(cues) if t==a][0]; j=[k for k,(t,_) in enumerate(cues) if t==b][-1]
    txt=" ".join(c[1] for c in cues[i:j+1]); txt=re.sub(r"\[[^\]]*\]","",txt); txt=re.sub(r"\s+"," ",txt).strip()
    return txt,j-i+1,cues,i,j
if __name__=="__main__":
    import json
    P="/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/passages/"
    for fn,vid in (("apologists-reformed-baptism.md","ZtLBpT1rivk"),("apologists-reformed-papacy.md","gpaTKCiLnOc"),("apologists-reformed-eucharist.md","i9l9Te1KYak")):
        L=open(P+fn).read().split("\n")
        for k,l in enumerate(L):
            m=re.search(r"watch\?v="+vid+r"&t=(\d+)s, minutes ([\d:]+) to ([\d:]+) \(first cue to last cue read\), (\d+) cues, (\d+) words",l)
            if not m: continue
            t,a,b,nc,nw=m.groups()
            q=[x for x in L[k+1:k+4] if x.startswith("  > ")][0][4:]
            txt,n,cues,i,j=rebuild(vid,a,b)
            print("=====",fn,vid,"line",k+1)
            print(" header: t=",t,"->",tsec(a),"| tsec(a)==t:",tsec(a)==int(t),"| stated cues",nc,"rebuilt",n,"| stated words",nw,"quote words",len(q.split()),"rebuilt words",len(txt.split()))
            print(" text equal:",txt==q.strip())
            if txt!=q.strip():
                import difflib
                sm=difflib.SequenceMatcher(None,q.split(),txt.split(),autojunk=False)
                for op,i1,i2,j1,j2 in sm.get_opcodes():
                    if op!="equal": print("   ",op,q.split()[i1:i2],txt.split()[j1:j2])
            print(" first cue:",cues[i]); print(" cue before:",cues[i-1] if i>0 else None); print(" last cue:",cues[j]); print(" cue after:",cues[j+1] if j+1<len(cues) else None)
            print(" header line:",l[:100])
            print(" first cue of video:",cues[0])
