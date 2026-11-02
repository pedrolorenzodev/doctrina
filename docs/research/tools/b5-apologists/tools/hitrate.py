import json, os, collections, sys
SC=os.environ["SCR"]
docs=json.load(open(SC+"/idx/docs.json")); idx=json.load(open(SC+"/idx/index.json"))
fam=lambda s: s.split("/")[0] if not s.startswith("catholic") else "catholic.com"
verses=sys.argv[1:]
print("verse".ljust(14)+" | ".join(["catholic","aomin","truthunites","mohler","9marks","tabletalk","jaysanalysis"]))
for v in verses:
    c=collections.Counter()
    for di,pos in set((d,p) for d,p in idx.get(v,[])): pass
    seen=set()
    for di,pos in idx.get(v,[]):
        if di in seen: continue
        seen.add(di); c[fam(docs[di]["src"])]+=1
    print(v.ljust(14)+" | ".join(str(c[k]).rjust(len(k)) for k in ["catholic.com","aomin","truthunites","mohler","9marks","tabletalk","jaysanalysis"]))
