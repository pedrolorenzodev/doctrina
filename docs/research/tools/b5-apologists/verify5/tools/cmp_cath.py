import json,hashlib,re,sys
from html.parser import HTMLParser
B=json.load(open("blocks.json"))
BLK={"p","h1","h2","h3","h4","h5","h6","blockquote","li"}
class P(HTMLParser):
    def __init__(s):
        super().__init__(convert_charrefs=True); s.out=[]; s.cur=None; s.buf=[]; s.skip=0; s.bq=0
    def flush(s):
        if s.cur is not None:
            txt=re.sub(r"\s+"," ","".join(s.buf)).strip()
            if txt: s.out.append((s.cur,txt))
        s.cur=None; s.buf=[]
    def handle_starttag(s,t,a):
        if t in("script","style","noscript"): s.skip+=1; return
        if t=="br" and s.cur: s.buf.append(" "); return
        if t=="blockquote":
            s.flush(); s.bq+=1; s.cur="blockquote"; s.buf=[]; return
        if s.bq: return
        if t in("p","h1","h2","h3","h4","h5","h6","li"):
            s.flush(); s.cur=t; s.buf=[]
        elif t in("div","section","ul","ol","table","tr","td","article","header","footer","nav","aside"):
            s.flush()
    def handle_endtag(s,t):
        if t in("script","style","noscript"): s.skip-=1; return
        if t=="blockquote":
            s.bq=max(0,s.bq-1)
            if s.bq==0: s.flush()
            return
        if s.bq: return
        if t in("p","h1","h2","h3","h4","h5","h6","li","div","section","ul","ol","article","footer","nav"): s.flush()
    def handle_data(s,d):
        if s.cur is not None and not s.skip: s.buf.append(d)
def paras(url):
    h=open("pages/"+hashlib.md5(url.encode()).hexdigest()+".html",errors="ignore").read()
    p=P(); p.feed(h); return p.out
cache={}
res=[]
for k,b in enumerate(B):
    u=b["url"]
    if u not in cache: cache[u]=paras(u)
    pp=[t for _,t in cache[u]]
    n=len(b["paras"])
    found=None
    for i in range(len(pp)-n+1):
        if all(pp[i+j]==b["paras"][j] for j in range(n)): found=i; break
    # allow label-only paragraphs between (speaker labels skipped)
    note=""
    if found is None:
        # try matching first and last
        fi=[i for i,t in enumerate(pp) if t==b["paras"][0]]
        la=[i for i,t in enumerate(pp) if t==b["paras"][-1]]
        note=f"first at {fi} last at {la}"
        if fi and la:
            a=fi[0]; z=[x for x in la if x>=a]
            if z:
                seg=pp[a:z[0]+1]
                note+=" | page segment has %d paras; extra/missing: %s"%(len(seg),[s[:50] for s in seg if s not in b["paras"]][:6])
    words=sum(len(t.split()) for t in b["paras"])
    beg=" ".join(b["paras"][0].split()[:9]); end=" ".join(b["paras"][-1].split()[-9:])
    chk=dict(n=(n==b["n"]),w=(words==b["w"]),beg=(beg==b["beg"]),end=(end==b["end"]))
    labels=[t for t in b["paras"] if re.match(r"^[A-Z][A-Za-z’' .]{1,28}:",t)]
    res.append(dict(idx=k,file=b["file"],line=b["line"],kind=b["kind"],url=u,found=found,n=n,words=words,stated=(b["n"],b["w"]),chk=chk,labels=[l[:40] for l in labels],note=note,
        before=(pp[found-1][:80] if found else None) if found is not None else None,
        after=(pp[found+n][:80] if found is not None and found+n<len(pp) else None)))
json.dump(res,open("cmp_res.json","w"),ensure_ascii=False,indent=0)
bad=[r for r in res if r["found"] is None or not all(r["chk"].values())]
print(len(res),"blocks;",len(bad),"with issues")
for r in bad: print(r["idx"],r["file"],r["line"],r["kind"],r["found"],r["n"],r["words"],r["stated"],r["chk"],r["note"][:300])
