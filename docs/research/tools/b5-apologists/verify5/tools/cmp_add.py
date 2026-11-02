import json,re,hashlib
exec(open("tools/cmp_cath.py").read().split("B=json.load")[0]) if False else None
src=open("tools/cmp_cath.py").read()
a=src.index("BLK="); b=src.index("cache={}")
exec(src[src.index("from html.parser"):src.index("import json")] if False else "from html.parser import HTMLParser")
exec(src[a:src.index("def paras")]+src[src.index("def paras"):b].replace("B=json.load(open(\"blocks.json\"))",""))
def nz(s): return re.sub(r"\s+"," ",s.replace("\xa0"," ")).strip()
A=json.load(open("adds.json"))
for k,ad in enumerate(A):
    pp=[(kd,nz(t)) for kd,t in paras(ad["url"])]
    txt=" ".join(t for _,t in pp)
    bt=" ".join(nz(p) for p in ad["paras"])
    print("=====",k,ad["file"][18:-3],ad["line"],ad["url"].split(".com/")[1])
    print(" exact contiguous:",bt in txt)
    if bt in txt:
        pos=txt.find(bt)
        print("  before:",txt[max(0,pos-150):pos]); print("  after:",txt[pos+len(bt):pos+len(bt)+200])
    else:
        lo=0
        for L in range(20,len(bt),10):
            if bt[:L] in txt: lo=L
            else: break
        i=txt.find(bt[:lo]); j=lo
        while j<len(bt) and bt[:j+1] in txt: j+=1
        print("  prefix ok up to",j,"of",len(bt)); print("  block ctx:",bt[max(0,j-80):j+120]); print("  page  ctx:",txt[i+j-80:i+j+250])
    # paragraph level
    plist=[t for _,t in pp]
    missing=[p[:60] for p in ad["paras"] if nz(p) not in plist]
    print("  block paras not equal to a page paragraph:",len(missing),missing[:5])
    beg=" ".join(nz(ad["paras"][0]).split()[:9]); end=" ".join(nz(ad["paras"][-1]).split()[-9:])
    print("  beg ok",beg==ad["beg"],"end ok",end==ad["end"])
