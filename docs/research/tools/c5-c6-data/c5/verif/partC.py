import json,re,unicodedata
from pathlib import Path
from collections import Counter,defaultdict
SP=Path("/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/54ade58a-a1ac-497a-b68c-690fbe6b2900/scratchpad")
SNAP=SP/"words_snapshot";SRC=SP/"stepdata"
ids=json.load(open(SP/"verif_lex.json"))
NT={"Mat":"Matt","Mrk":"Mark","Luk":"Luke","Jhn":"John","Act":"Acts","Rom":"Rom","1Co":"1Cor","2Co":"2Cor","Gal":"Gal","Eph":"Eph","Php":"Phil","Col":"Col","1Th":"1Thess","2Th":"2Thess","1Ti":"1Tim","2Ti":"2Tim","Tit":"Titus","Phm":"Phlm","Heb":"Heb","Jas":"Jas","1Pe":"1Pet","2Pe":"2Pet","1Jn":"1John","2Jn":"2John","3Jn":"3John","Jud":"Jude","Rev":"Rev"}
OT={"Gen":"Gen","Exo":"Exod","Lev":"Lev","Num":"Num","Deu":"Deut","Jos":"Josh","Jdg":"Judg","Rut":"Ruth","1Sa":"1Sam","2Sa":"2Sam","1Ki":"1Kgs","2Ki":"2Kgs","1Ch":"1Chr","2Ch":"2Chr","Ezr":"Ezra","Neh":"Neh","Est":"Esth","Job":"Job","Psa":"Ps","Pro":"Prov","Ecc":"Eccl","Sng":"Song","Isa":"Isa","Jer":"Jer","Lam":"Lam","Ezk":"Ezek","Dan":"Dan","Hos":"Hos","Jol":"Joel","Amo":"Amos","Oba":"Obad","Jon":"Jonah","Mic":"Mic","Nam":"Nah","Hab":"Hab","Zep":"Zeph","Hag":"Hag","Zec":"Zech","Mal":"Mal"}
refre=re.compile(r"^([1-3]?[A-Za-z]{2,3})\.(\d+)\.(\d+)(?:[\(\[\{][^\)\]\}]*[\)\]\}])?#(\d+)=(\S+)$")
gn=Counter();gany=Counter();gref=defaultdict(lambda:defaultdict(list));gforms=defaultdict(Counter);gn_loose=Counter()
for f in ["TAGNT_Mat-Jhn.txt","TAGNT_Act-Rev.txt"]:
    for l in (SRC/f).read_text(encoding="utf-8-sig").split("\n"):
        c=l.split("\t"); m=refre.match(c[0])
        if not m or m.group(1) not in NT or len(c)<6: continue
        bk=NT[m.group(1)]; ref=f"{int(m.group(2))}.{int(m.group(3))}"
        ds=[p.split("=")[0].strip() for p in c[3].split("+")]
        eds=c[5].split("+")
        for d in ds:
            gany[d]+=1
            if "NA28" in eds:
                gn[d]+=1; gref[d][bk].append(ref)
                t=unicodedata.normalize("NFC",re.sub(r"\s*\([^)]*\)\s*$","",c[1]).replace("¶","").strip()); t=re.sub(r"[,.;·\u0387\u037e:!?—]+$","",t)
                gforms[d][t]+=1
            if any(e.startswith("NA28") for e in eds): gn_loose[d]+=1
hn=Counter();href=defaultdict(lambda:defaultdict(list));hforms=defaultdict(Counter)
for f in ["TAHOT_Gen-Deu.txt","TAHOT_Jos-Est.txt","TAHOT_Job-Sng.txt","TAHOT_Isa-Mal.txt"]:
    for l in (SRC/f).read_text(encoding="utf-8-sig").split("\n"):
        c=l.split("\t"); m=refre.match(c[0])
        if not m or m.group(1) not in OT or len(c)<9: continue
        bk=OT[m.group(1)]; ref=f"{int(m.group(2))}.{int(m.group(3))}"
        dsr=c[4].strip().split("\\",1)[0]
        parts=[re.sub(r"[{}+\s]","",p) for p in dsr.split("/")]
        for p in parts:
            if p: hn[p]+=1; href[p][bk].append(ref)
        br=re.findall(r"\{([^}]*)\}",dsr)
        if br:
            w=unicodedata.normalize("NFC",c[1].strip()).partition("\\")[0].replace("/","")
            hforms[br[0]][w]+=1
def dd(l): 
    o=[]
    for x in l:
        if not o or o[-1]!=x: o.append(x)
    return o
bad=0
for i in ids:
    sh=f"{i[0]}{int(re.match(r'[GH](\d+)',i).group(1))//100:03d}"
    occ=json.load(open(SNAP/"occurrences"/f"{sh}.json"))[i]
    if i[0]=="G": n,na,refs,forms=gn[i],gany[i],gref[i],gforms[i]
    else: n,na,refs,forms=hn[i],hn[i],href[i],hforms[i]
    b={bk:dd(v) for bk,v in refs.items()}
    v=sum(len(x) for x in b.values())
    vset=sum(len(set(x)) for x in b.values())
    ok=(occ["n"]==n and occ["nAny"]==na and occ["v"]==v and occ["b"]==b and occ["f"]==dict(forms))
    # also check the lexicon n/nAny
    lex=json.load(open(SNAP/"lexicon"/f"{sh}.json"))[i]
    okl=(lex["n"]==n and lex["nAny"]==na)
    print(i,"n",occ["n"],n,"nAny",occ["nAny"],na,"v",occ["v"],v,"(set",vset,")","b-eq",occ["b"]==b,"f-eq",occ["f"]==dict(forms),"lex n eq",okl, "ALLOK" if ok and okl else "MISMATCH", "(NA28-loose n:",gn_loose[i],")" if i[0]=="G" else "")
    if not (ok and okl):
        bad+=1
        if occ["b"]!=b: print("  b got",{k:x[:5] for k,x in occ["b"].items()},"\n  b exp",{k:x[:5] for k,x in b.items()})
        if occ["f"]!=dict(forms): print("  f got",list(occ["f"].items())[:5],"\n  f exp",list(forms.most_common(5)))
print("mismatches",bad)
