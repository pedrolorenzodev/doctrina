import re,json
src=open("tools/cmp_cath.py").read()
exec("from html.parser import HTMLParser\nimport json,hashlib,re\n"+src[src.index("BLK="):src.index("def paras")])
def nz(s): return re.sub(r"\s+"," ",s.replace("\xa0"," ")).strip()
def pparse(path):
    h=open(path,errors="ignore").read(); p=P(); p.feed(h); return [(k,nz(t)) for k,t in p.out]
import sys
def getblocks(fn,marker):
    L=open("/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/passages/"+fn).read().split("\n"); out=[]
    for k,l in enumerate(L):
        if l.startswith("- ") and marker in l and "paragraph(s)" in l:
            paras=[]; j=k+1
            while j<len(L) and L[j].startswith("  > "): paras.append(L[j][4:]); j+=1
            m=re.search(r"(\d+) paragraph\(s\), (\d+) words, from the paragraph beginning «(.*?)…» to the one ending «…(.*?)»",l)
            out.append((k+1,l,paras,m.groups()))
    return out
def check(path,fn,marker):
    pp=pparse(path); plist=[t for _,t in pp]; txt=" ".join(plist)
    for ln,l,paras,(n,w,beg,end) in getblocks(fn,marker):
        bt=" ".join(nz(p) for p in paras)
        print("== line",ln,"stated",n,"paras",w,"words | block paras",len(paras),"words",len(bt.split()),"| beg/end ok",
              " ".join(nz(paras[0]).split()[:9])==beg," ".join(nz(paras[-1]).split()[-9:])==end)
        if bt in txt:
            pos=txt.find(bt); 
            # which page paragraphs
            offs=[];c=0
            for t in plist: offs.append(c); c+=len(t)+1
            s=max(i for i,o in enumerate(offs) if o<=pos); e=max(i for i,o in enumerate(offs) if o<pos+len(bt))
            print("  contiguous exact; page paragraphs",e-s+1,"idx",s,e,"starts_at_boundary",offs[s]==pos,"ends_at_boundary",offs[e]+len(plist[e])==pos+len(bt))
            print("  before:",[x[:80] for x in plist[max(0,s-2):s]]); print("  after:",[(pp[i][0],plist[i][:80]) for i in range(e+1,min(len(plist),e+3))])
            print("  kinds in:",[pp[i][0] for i in range(s,e+1)])
        else:
            lo=0
            for L in range(20,len(bt),10):
                if bt[:L] in txt: lo=L
                else: break
            i=txt.find(bt[:lo]); j=lo
            while j<len(bt) and bt[:j+1] in txt: j+=1
            print("  NOT contiguous; prefix ok",j,"/",len(bt)); print("  block:",bt[max(0,j-60):j+100]); print("  page :",txt[i+j-60:i+j+200])
if __name__=="__main__":
    check("web/white.html","apologists-reformed-baptism.md","aomin.org/aoblog/reformed-apologetics/a-brief-rebuttal")
