import json,hashlib,re,sys
exec(open("tools/cmp_cath.py").read().split("cache={}")[0])
def nz(s): return re.sub(r"\s+"," ",s.replace("\xa0"," ")).strip()
cache={}; res=[]
for k,b in enumerate(B):
    u=b["url"]
    if u not in cache:
        pp=[(kd,nz(t)) for kd,t in paras(u)]
        # joined text with offsets
        offs=[];pos=0;txt=""
        for kd,t in pp:
            offs.append(pos); txt+=t+" "; pos+=len(t)+1
        cache[u]=(pp,offs,txt)
    pp,offs,txt=cache[u]
    bt=" ".join(nz(p) for p in b["paras"])
    pos=txt.find(bt)
    multi=txt.count(bt)
    r=dict(idx=k,file=b["file"],line=b["line"],kind=b["kind"],url=u,exact=pos>=0,multi=multi)
    if pos>=0:
        # which page paragraphs does it cover
        s=max(i for i,o in enumerate(offs) if o<=pos)
        e=max(i for i,o in enumerate(offs) if o<pos+len(bt))
        r["page_paras"]=e-s+1; r["stated_n"]=b["n"]
        r["starts_at_boundary"]=(offs[s]==pos)
        r["ends_at_boundary"]=(offs[e]+len(pp[e][1])==pos+len(bt))
        r["before"]=[x[1][:70] for x in pp[max(0,s-2):s]]
        r["after"]=[x[1][:70] for x in pp[e+1:e+3]]
        r["kinds_in"]=sorted(set(x[0] for x in pp[s:e+1]))
    else:
        # find longest common prefix
        lo=0
        for L in range(20,len(bt),20):
            if bt[:L] in txt: lo=L
            else: break
        r["prefix_ok"]=lo; 
        i=txt.find(bt[:lo]) if lo else -1
        if i>=0:
            j=lo
            while j<len(bt) and bt[:j+1] in txt: j+=1
            r["fail_at"]=j; r["block_ctx"]=bt[max(0,j-60):j+60]; r["page_ctx"]=txt[i+j-60:i+j+60]
    res.append(r)
json.dump(res,open("cmp2_res.json","w"),ensure_ascii=False,indent=0)
print("exact",sum(r["exact"] for r in res),"of",len(res))
for r in res:
    if not r["exact"]: print(r)
for r in res:
    if r["exact"] and (r["page_paras"]!=r["stated_n"] or not r["starts_at_boundary"] or not r["ends_at_boundary"] or r["multi"]>1): print("N/BOUND",r["idx"],r["file"][18:],r["line"],r["kind"],r["page_paras"],r["stated_n"],r["starts_at_boundary"],r["ends_at_boundary"],r["multi"])
