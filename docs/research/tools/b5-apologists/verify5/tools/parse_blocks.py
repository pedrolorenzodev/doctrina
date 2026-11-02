import re,sys,json
R="/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/passages/"
files=["apologists-catholic-baptism.md","apologists-catholic-papacy.md","apologists-catholic-sola-scriptura.md","apologists-catholic-eucharist.md"]
blocks=[]
for f in files:
    L=open(R+f).read().split("\n")
    i=0
    lastbullet=None
    while i<len(L):
        l=L[i]
        if re.match(r"^\s*- \*\*Long-form\*\*",l):
            m=re.search(r"\((ddp|article|transcript), (\d+) paragraph\(s\), (\d+) words, from the paragraph beginning «(.*?)…» to the one ending «…(.*?)»; the old quote",l)
            paras=[]
            j=i+1
            while j<len(L) and re.match(r"^\s+> ",L[j]):
                paras.append(re.sub(r"^\s+> ","",L[j])); j+=1
            url=re.search(r"https://www\.catholic\.com/[^\s,)`»]+",lastbullet)
            blocks.append(dict(file=f,line=i+1,kind=m.group(1),n=int(m.group(2)),w=int(m.group(3)),beg=m.group(4),end=m.group(5),paras=paras,url=url.group(0).rstrip(".") if url else None,bullet=lastbullet,header=l))
            i=j; continue
        if re.match(r"^\s*- \*\*",l): lastbullet=l
        i+=1
json.dump(blocks,open("blocks.json","w"),ensure_ascii=False,indent=0)
print(len(blocks))
from collections import Counter
print(Counter(b["file"] for b in blocks)); print(Counter(b["kind"] for b in blocks))
print(len(set(b["url"] for b in blocks)))
print([b for b in blocks if not b["url"]][:2])
