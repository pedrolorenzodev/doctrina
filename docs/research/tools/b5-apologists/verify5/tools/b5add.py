import re,json,subprocess,hashlib,os,time
R="/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/passages/"
files=["apologists-catholic-baptism.md","apologists-catholic-papacy.md","apologists-catholic-sola-scriptura.md","apologists-catholic-eucharist.md"]
adds=[]
for f in files:
    L=open(R+f).read().split("\n")
    for i,l in enumerate(L):
        if "added by session B5" in l and l.startswith("- **"):
            paras=[]; j=i+1
            while j<len(L) and L[j].startswith("  > "): paras.append(L[j][4:]); j+=1
            m=re.search(r"(\d+) paragraph\(s\), (\d+) words, from the paragraph beginning «(.*?)…» to the one ending «…(.*?)»",l)
            url=re.search(r"https://www\.catholic\.com/[^\s,)`»]+",l).group(0).rstrip(".")
            adds.append(dict(file=f,line=i+1,url=url,n=int(m.group(1)),w=int(m.group(2)),beg=m.group(3),end=m.group(4),paras=paras,head=l))
json.dump(adds,open("adds.json","w"),ensure_ascii=False,indent=0)
for a in adds:
    fn="pages/"+hashlib.md5(a["url"].encode()).hexdigest()+".html"
    if not os.path.exists(fn):
        r=subprocess.run(["curl","-sL","-m","45","-o",fn,"-w","%{http_code}","-A","Mozilla/5.0 (research; doctrina verification)",a["url"]],capture_output=True,text=True); print(a["url"].split("catholic.com/")[1],r.stdout); time.sleep(1.2)
for u in ["https://www.catholic.com/profile/tim-staples","https://www.catholic.com/profile/tom-nash","https://www.catholic.com/profile/karl-keating"]:
    fn="pages/"+hashlib.md5(u.encode()).hexdigest()+".html"
    r=subprocess.run(["curl","-sL","-m","45","-o",fn,"-w","%{http_code}","-A","Mozilla/5.0 (research; doctrina verification)",u],capture_output=True,text=True); print(u,r.stdout,os.path.getsize(fn)); time.sleep(1.2)
print([(a["file"][18:-3],a["line"],a["n"],len(a["paras"]),a["w"],sum(len(p.split()) for p in a["paras"])) for a in adds])
