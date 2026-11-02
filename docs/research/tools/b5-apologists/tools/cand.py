import json, os, re, sys, collections
SC=os.environ["SCR"]; R="/Users/pedrolorenzo/Desktop/dev/doctrina"
docs=json.load(open(SC+"/idx/docs.json")); idx=json.load(open(SC+"/idx/index.json"))
bible=json.load(open(R+"/data/corpus/bibles/bsb.json"))
used=set()
import glob, pickle
texts=None
for f in glob.glob(R+"/docs/research/passages/apologists-catholic*.md"):
    used|=set(re.findall(r"https://www\.catholic\.com/[^\s,)`»]+", open(f).read()))
used={u.rstrip(".") for u in used}
def expand(ref):
    a,_,b=ref.partition("-")
    bk,ch,*v=a.split(".")
    if not v:
        return [k for k in bible if k.startswith(f"{bk}.{ch}.")]
    v1=int(v[0])
    if b:
        bk2,ch2,v2=b.split("."); 
        return [k for k in bible if k.split(".")[0]==bk and int(k.split(".")[1])*1000+int(k.split(".")[2])>=int(ch)*1000+v1 and int(k.split(".")[1])*1000+int(k.split(".")[2])<=int(ch2)*1000+int(v2)]
    return [a]
def entries(doc):
    t=open(f"{R}/src/content/pages/{doc}/catholic.es.ts").read()
    return [re.findall(r'"([^"]+)"',m) for m in re.findall(r'refs: \[([^\]]*)\]',t)]
doc=sys.argv[1]; nums=[int(x) for x in sys.argv[2].split(",")]; per=int(sys.argv[3]) if len(sys.argv)>3 else 3
SNIP=int(sys.argv[4]) if len(sys.argv)>4 else 0
E=entries(doc)
for n in nums:
    refs=E[n-1]; keys=set()
    for r in refs: keys|=set(expand(r))
    hits=collections.defaultdict(set)
    for k in keys:
        for di,pos in idx.get(k,[]): hits[di].add(pos)
    best={}
    for di,ps in hits.items():
        d=docs[di]
        if not d["src"].startswith("catholic.com"): continue
        if d["url"] in used: continue
        who=re.sub(r"\s*\(show host\)","",d["author"]) or d["src"]
        sc=len(ps)
        if who not in best or sc>best[who][0]: best[who]=(sc,d["title"][:70],d["url"],d["date"])
    print(f"## {doc} #{n} {refs}")
    top=[w for w,_ in sorted(best.items(), key=lambda x:-x[1][0])[:per]]
    for who,(sc,t,u,dt) in sorted(best.items(), key=lambda x:-x[1][0])[:per+3]:
        print(f"  {sc:3d} | {who[:22]:22s} | {dt:10s} | {t} | {u.replace('https://www.catholic.com/','')}")
        if SNIP and sc>=1 and (who in top):
            if texts is None: texts=pickle.load(open(SC+"/idx/texts.pkl","rb"))
            di=[i for i,d in enumerate(docs) if d["url"]==u][0]
            p=min(hits[di])
            print("       >>", re.sub(r"\s+"," ",texts[di][max(0,p-SNIP):p+SNIP]))
