import json,re
R="../../../../../"
eds=[("rv1909","RV1909","Reina-Valera 1909","es"),("bsb","BSB","Berean Standard Bible","en"),("kjv","KJV","King James Version","en"),("web-c","WEB","World English Bible, edición católica","en"),("dra","DRA","Douay-Rheims, Challoner","en")]
bib={e[0]:json.load(open(R+f"data/corpus/bibles/{e[0]}.json")) for e in eds}
page=open(R+"src/content/pages/baptism/catholic.es.ts").read()
names={"John":"Juan","Matt":"Mateo","Mark":"Marcos","Luke":"Lucas","Acts":"Hechos","Rom":"Romanos","Col":"Colosenses","Titus":"Tito","Gal":"Gálatas","1Cor":"1 Corintios","2Cor":"2 Corintios","Eph":"Efesios","1Pet":"1 Pedro","1Tim":"1 Timoteo"}
def parse(r):
    a,_,b=r.partition("-")
    bk,ch,v=a.split("."); v2=int(b.split(".")[2]) if b else int(v)
    return bk,int(ch),int(v),v2
def label(bk,ch,a,b):
    return f"{names[bk]} {ch}:{a}"+(f"–{b}" if b!=a else "")
def block(bk,ch,a,b):
    vs=[]
    for v in range(a,b+1):
        vs.append({"n":v,"t":{e[0]:re.sub(r"\s+"," ",bib[e[0]].get(f"{bk}.{ch}.{v}","")).strip() for e in eds}})
    return {"ref":label(bk,ch,a,b),"book":bk,"verses":vs}
def clean(t):
    t=re.sub(r"\{c:[^|}]+\|([^}]+)\}",lambda m:f"<a class='cite' href='#c'>{m.group(1)}</a>",t)
    t=re.sub(r"\{v:[^|}]+\|([^}]+)\}",lambda m:m.group(1),t)
    t=re.sub(r"\{v:[^}]+\}","",t)
    assert "{" not in t,t
    return t
i=page.index("scripture:")
seg=page[i:]
items=[]
for m in re.finditer(r'refs:\s*\[(.*?)\],\s*text:\s*\n?\s*"((?:[^"\\]|\\.)*)"',seg,re.S):
    refs=re.findall(r'"([^"]+)"',m.group(1))
    items.append((refs,m.group(2)))
# keep only the first 19 sequential items of the scripture list
items=items[:19]
extra={"Mark.10.14":[("Matt",19,14,14),("Luke",18,16,16)],"Matt.3.13-Matt.3.17":[("Mark",1,9,11),("Luke",3,21,22)]}
entries=[]
for k,(refs,text) in enumerate(items):
    main=[block(*parse(r)) for r in refs]
    short=" · ".join(b["ref"] for b in main[:2])+(f" y {len(main)-2} más" if len(main)>2 else "")
    par=[block(*p) for p in extra.get(refs[0],[])]
    entries.append({"id":f"p{k+1}","short":short,"main":main,"parallels":par,"reading":clean(text)})
from apol import APOL
for k,(refs,text) in enumerate(items):
    if refs[0] in APOL: entries[k]["apol"]=APOL[refs[0]]
data={"eds":[{"id":e[0],"ab":e[1],"name":e[2],"lang":e[3]} for e in eds],"entries":entries}

tex=json.load(open("tex.json"))
for e in entries:
    if not e.get("apol"): continue
    for a in e["apol"]["args"]:
        for q in a["quotes"]:
            w=q["who"]
            if w=="Karlo Broussard": q.update(work="In Baptism Our Sins Are Forgiven",outlet="Catholic Answers Magazine",date="21 de mayo de 2020",loc="Artículo en línea")
            elif w=="Joe Heschmeyer": q.update(work="6 Bible Verses PROVING Water Baptism Saves (REBUTTAL to @NeedGodnet)",outlet="Shameless Popery, en YouTube",date="27 de mayo de 2025")
            elif w=="Trent Horn": q.update(work="A Catholic Apologist Challenged Everything I Believe (EP 198)",outlet="Bryce Crawford Podcast, en YouTube",date="8 de junio de 2026")
            elif w=="Alejandro Otálora": q.update(work="",outlet="Video en YouTube",date="2020")
            q["loc"]=re.sub(r"^min\. (.+)–(.+)$",r"Minutos \1 a \2",q["loc"])
data={"eds":[{"id":e[0],"ab":e[1],"name":e[2],"lang":e[3]} for e in eds],"entries":entries}
tpl=open("template.html").read()
out=tpl.replace("/*DATA*/{}",json.dumps(data,ensure_ascii=False)).replace("/*TEX_LIGHT*/",tex["light"]).replace("/*TEX_DARK*/",tex["dark"]).replace("/*EXT*/",tex["ext"])
open("pasajes.html","w").write(out)
print(len(entries),"entries;",sum(1 for e in entries if e.get("apol")),"with apologists")
