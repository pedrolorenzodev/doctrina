import json,hashlib,re,sys,difflib
exec(open("tools/cmp_cath.py").read().split("cache={}")[0])
idx=[int(x) for x in sys.argv[1:]]
for k in idx:
    b=B[k]; pp=[t for _,t in paras(b["url"])]
    first=b["paras"][0]
    # find best start by prefix match
    cand=[i for i,t in enumerate(pp) if t[:40]==first[:40]]
    print("=== block",k,b["file"],b["line"],b["url"],"cand",cand)
    if not cand: 
        print("  FIRST block para:",first[:120]); continue
    a=cand[0]; n=len(b["paras"])
    seg=pp[a:a+n+3]
    sm=difflib.SequenceMatcher(None,b["paras"],seg,autojunk=False)
    for op,i1,i2,j1,j2 in sm.get_opcodes():
        if op=="equal": continue
        print(" ",op,"BLOCK",[x[:200] for x in b["paras"][i1:i2]],"PAGE",[x[:200] for x in seg[j1:j2]])
