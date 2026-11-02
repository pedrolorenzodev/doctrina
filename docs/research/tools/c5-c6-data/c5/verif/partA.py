import json, re, sys, unicodedata
from pathlib import Path
SP = Path("/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/54ade58a-a1ac-497a-b68c-690fbe6b2900/scratchpad")
SNAP = SP/"words_snapshot"; SRC = SP/"stepdata"
verses = json.load(open(SP/"verif_verses.json"))
NT = {"Mat":"Matt","Mrk":"Mark","Luk":"Luke","Jhn":"John","Act":"Acts","Rom":"Rom","1Co":"1Cor","2Co":"2Cor","Gal":"Gal","Eph":"Eph","Php":"Phil","Col":"Col","1Th":"1Thess","2Th":"2Thess","1Ti":"1Tim","2Ti":"2Tim","Tit":"Titus","Phm":"Phlm","Heb":"Heb","Jas":"Jas","1Pe":"1Pet","2Pe":"2Pet","1Jn":"1John","2Jn":"2John","3Jn":"3John","Jud":"Jude","Rev":"Rev"}
OT = {"Gen":"Gen","Exo":"Exod","Lev":"Lev","Num":"Num","Deu":"Deut","Jos":"Josh","Jdg":"Judg","Rut":"Ruth","1Sa":"1Sam","2Sa":"2Sam","1Ki":"1Kgs","2Ki":"2Kgs","1Ch":"1Chr","2Ch":"2Chr","Ezr":"Ezra","Neh":"Neh","Est":"Esth","Job":"Job","Psa":"Ps","Pro":"Prov","Ecc":"Eccl","Sng":"Song","Isa":"Isa","Jer":"Jer","Lam":"Lam","Ezk":"Ezek","Dan":"Dan","Hos":"Hos","Jol":"Joel","Amo":"Amos","Oba":"Obad","Jon":"Jonah","Mic":"Mic","Nam":"Nah","Hab":"Hab","Zep":"Zeph","Hag":"Hag","Zec":"Zech","Mal":"Mal"}
# independent source parse: index lines by (osis,ch,verse)
G = {}; H = {}
refre = re.compile(r"^([1-3]?[A-Za-z]{2,3})\.(\d+)\.(\d+)(?:[\(\[\{]([^\)\]\}]*)[\)\]\}])?#(\d+)=(\S+)$")
for f in ["TAGNT_Mat-Jhn.txt","TAGNT_Act-Rev.txt"]:
    for line in (SRC/f).read_text(encoding="utf-8-sig").split("\n"):
        c = line.split("\t")
        m = refre.match(c[0])
        if m and m.group(1) in NT:
            G.setdefault((NT[m.group(1)],int(m.group(2)),int(m.group(3))),[]).append((c, m.group(4), int(m.group(5)), m.group(6)))
for f in ["TAHOT_Gen-Deu.txt","TAHOT_Jos-Est.txt","TAHOT_Job-Sng.txt","TAHOT_Isa-Mal.txt"]:
    for line in (SRC/f).read_text(encoding="utf-8-sig").split("\n"):
        c = line.split("\t")
        m = refre.match(c[0])
        if m and m.group(1) in OT:
            H.setdefault((OT[m.group(1)],int(m.group(2)),int(m.group(3))),[]).append((c, m.group(4), int(m.group(5)), m.group(6)))
defects = []
def d(ref, field, got, exp, note=""):
    defects.append((ref, field, got, exp, note))
nwords = 0; nom = 0
dump = []
def pad(c,n=17): return c+[""]*(n-len(c))
for book, ch, v in verses:
    key = (book, int(ch), int(v)); ref = f"{book} {ch}:{v}"
    out = json.load(open(SNAP/"verses"/book/f"{ch}.json"))
    ov = out["verses"].get(str(v))
    if ov is None: d(ref,"verse","missing","present"); continue
    if key in G:
        rows = G[key]
        exp_in = []; exp_om = []
        for c, br, pos, typ in rows:
            c = pad(c)
            (exp_in if "NA28" in c[5].split("+") else exp_om).append((c,pos,typ))
        ow = ov["words"]; oo = ov.get("omitted", [])
        if len(ow) != len(exp_in): d(ref,"count words",len(ow),len(exp_in))
        if len(oo) != len(exp_om): d(ref,"count omitted",len(oo),len(exp_om))
        expPara = any("¶" in pad(c)[1] for c,_,_,_ in rows)
        if bool(ov.get("para")) != expPara: d(ref,"para",ov.get("para"),expPara)
        lexc = {}
        def lex(s):
            m = re.match(r"^G(\d+)", s); sh = f"G{int(m.group(1))//100:03d}"
            if sh not in lexc: lexc[sh] = json.load(open(SNAP/"lexicon"/f"{sh}.json"))
            return lexc[sh].get(s)
        for i,(c,pos,typ) in enumerate(exp_in):
            if i >= len(ow): break
            w = ow[i]; nwords += 1
            cell = c[1]
            txt = re.sub(r"\s*\([^)]*\)\s*$","",cell).replace("¶","").strip()
            trs = re.search(r"\(([^)]*)\)\s*$",cell); src_tr = trs.group(1) if trs else None
            if unicodedata.normalize("NFC",txt) != unicodedata.normalize("NFC", w["g"]+w.get("p","")):
                d(ref+f"#{pos}","g+p",w["g"]+w.get("p",""),txt)
            sg = [p.strip().split("=",1) for p in c[3].split("+")]
            es_ = " + ".join(x[0].strip() for x in sg); ms = " + ".join(x[1].strip() if len(x)>1 else "" for x in sg)
            if w["s"]!=es_: d(ref+f"#{pos}","s",w["s"],es_)
            if w["m"]!=ms: d(ref+f"#{pos}","m",w["m"],ms)
            en = re.sub(r"[,.;:·!?]+$","",c[2]).strip()
            if w["en"]!=en: d(ref+f"#{pos}","en",w["en"],en,"raw="+c[2])
            if c[2]!=en and c[2].strip()!=en: dump.append(("en-trailing-punct-stripped",ref+f"#{pos}",c[2],w["en"]))
            if w.get("var","")!=c[6]: d(ref+f"#{pos}","var",w.get("var"),c[6])
            lm = [p.split("=",1)[0].strip() for p in c[4].split(" + ")]
            expl = " + ".join(lm)
            lx = lex(w["s"]) if " + " not in w["s"] else None
            gotl = w["l"] if "l" in w else (lx["lemma"] if lx else None)
            if gotl != expl: d(ref+f"#{pos}","l",gotl,expl, "(l absent -> lexicon lemma)" if "l" not in w else "")
            if src_tr is not None:
                a = unicodedata.normalize("NFD",src_tr.lower()); b = unicodedata.normalize("NFD",w["t"].lower())
                strip = lambda s: re.sub(r"[̀-ͯ]","",s)
                if strip(a)!=strip(b): dump.append(("t-differs",ref+f"#{pos}",src_tr,w["t"]))
            dump.append(("w",ref,w["g"]+w.get("p",""),w["en"],w.get("es"),w["m"]))
        for i,(c,pos,typ) in enumerate(exp_om):
            if i >= len(oo): break
            o = oo[i]; nom += 1
            txt = re.sub(r"\s*\([^)]*\)\s*$","",c[1]).replace("¶","").strip()
            if o["g"]!=txt and o["g"]+"" != re.sub(r"[,.;··;:!?—]+$","",txt): d(ref+f"#{pos}(om)","g",o["g"],txt)
            en = re.sub(r"[,.;:·!?]+$","",c[2]).strip()
            if o["en"]!=en: d(ref+f"#{pos}(om)","en",o["en"],en)
            if "+".join(o["eds"])!=c[5].strip(): d(ref+f"#{pos}(om)","eds",o["eds"],c[5])
            dump.append(("om",ref,o["g"],o["en"],o.get("es"),c[5]))
        # after
        for i,(c,pos,typ) in enumerate(exp_om):
            if i>=len(oo): break
            prev = [x for x in rows if x[2]<pos and "NA28" in pad(x[0])[5].split("+")]
            expafter = None
            if prev:
                pc = pad(prev[-1][0]); expafter = re.sub(r"\s*\([^)]*\)\s*$","",pc[1]).replace("¶","").strip()
                expafter = unicodedata.normalize("NFC",re.sub(r"[,.;··;:!?—]+$","",expafter))
            if oo[i].get("after")!=expafter: d(ref+f"#{pos}(om)","after",oo[i].get("after"),expafter)
    elif key in H:
        rows = H[key]
        ow = ov["words"]
        if len(ow)!=len(rows): d(ref,"count words",len(ow),len(rows))
        hebs = {r[1] for r in rows if r[1]}
        if hebs:
            exp = f"{list(hebs)[0]}"
            if ov.get("heb")!=exp: d(ref,"heb",ov.get("heb"),exp)
        elif ov.get("heb"): d(ref,"heb",ov.get("heb"),None)
        for i,(c,br,pos,typ) in enumerate(rows):
            if i>=len(ow): break
            c = pad(c,13); w = ow[i]; nwords += 1
            r_ = f"{ref}#{pos}"
            hw, _, hp = unicodedata.normalize("NFC",c[1].strip()).partition("\\")
            if w["g"]!=hw: d(r_,"g",w["g"],hw)
            if w.get("p","")!=hp.replace("\\",""): d(r_,"p",w.get("p",""),hp.replace("\\",""))
            if w["t"]!=c[2].strip(): d(r_,"t",w["t"],c[2].strip())
            dsr = c[4].strip().split("\\",1)[0]
            parts = [re.sub(r"[{}+\s]","",p) for p in dsr.split("/")]
            if w["s"]!="/".join(parts): d(r_,"s",w["s"],"/".join(parts))
            br_ = re.findall(r"\{([^}]*)\}",dsr)
            if w["r"]!=(br_[0] if br_ else None): d(r_,"r",w["r"],br_[0] if br_ else None)
            if br_ and c[8].strip()!=br_[0]: d(r_,"r vs col8",w["r"],c[8].strip(),"col8 differs from braced root")
            if w["m"]!=c[5].strip(): d(r_,"m",w["m"],c[5].strip())
            if w["en"]!=c[3].strip(): d(r_,"en",w["en"],c[3].strip())
            if typ!="L":
                if w.get("ty")!=typ: d(r_,"ty",w.get("ty"),typ)
            elif "ty" in w: d(r_,"ty",w["ty"],"(absent)")
            if w.get("var","")!=c[6].strip(): d(r_,"var",w.get("var"),c[6].strip())
            dump.append(("hw",ref,w["g"]+w.get("p",""),w["en"],w.get("es"),w["m"]))
    else:
        d(ref,"source","no source lines","")
print("words checked",nwords,"omitted checked",nom,"defects",len(defects))
for x in defects: print("DEFECT",x)
json.dump(dump,open(SP/"verif/dump.json","w"),ensure_ascii=False)
