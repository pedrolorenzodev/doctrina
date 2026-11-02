import re,os
S="/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/28fa39c0-1913-4185-baa3-8c66bc722000/scratchpad"
TR=S+"/yt/tr/"
meta={}
for l in open(S+"/yt/meta_all.txt",encoding="utf-8"):
    p=l.rstrip("\n").split("|")
    if len(p)>=5: meta[p[0]]=p
def tsec(t):
    s=0
    for x in t.split(":"): s=s*60+int(x)
    return s
def label(sec):
    h,r=divmod(sec,3600); m,sc=divmod(r,60)
    parts=[]
    if h: parts.append(f"{h} hour"+("s" if h!=1 else ""))
    if m: parts.append(f"{m} minute"+("s" if m!=1 else ""))
    if sc or not parts: parts.append(f"{sc} second"+("s" if sc!=1 else ""))
    return ", ".join(parts)
def load(vid):
    cues=[]
    for i,l in enumerate(open(TR+vid+".tr.txt",encoding="utf-8")):
        if i==0:
            hdr=l.strip(); continue
        l=l.rstrip("\n")
        m=re.match(r"^(\d+(?::\d+)+) (.*)$",l)
        if not m: continue
        t,rest=m.group(1),m.group(2)
        lab=label(tsec(t))
        if rest==lab: txt=""
        elif rest.startswith(lab+" "): txt=rest[len(lab)+1:]
        else: txt=rest
        cues.append((t,txt))
    return cues
def allvids():
    return sorted(f[:-7] for f in os.listdir(TR) if f.endswith(".tr.txt"))
def header(vid):
    return open(TR+vid+".tr.txt",encoding="utf-8").readline().strip()
