import json,re,unicodedata
from pathlib import Path
SP=Path("/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/54ade58a-a1ac-497a-b68c-690fbe6b2900/scratchpad")
SNAP=SP/"words_snapshot";SRC=SP/"stepdata"
ids=json.load(open(SP/"verif_lex.json"))
def rows(fn):
    out=[]
    for l in (SRC/fn).read_text(encoding="utf-8-sig").split("\n"):
        c=l.split("\t")
        if len(c)>=8 and re.match(r"^[GH]\d{4}",c[0]): out.append(c)
    return out
G=rows("TBESG.txt");H=rows("TBESH.txt")
pos={}
for fn in ("TEGMC.txt","TEHMC.txt"):
    for l in (SRC/fn).read_text(encoding="utf-8-sig").split("\n"):
        c=l.split("\t")
        if len(c)>=3 and re.match(r"^[GHAN]:",c[0]): pos[c[0].strip()]=c[2].strip()
def clean(s):
    s=re.sub(r"<ref='[^']*'>([^<]*)</ref>",r"\1",s); s=re.sub(r"<(BR|br|lb)\s*/?>","\n",s); s=re.sub(r"<[^>]+>","",s)
    s=s.replace("__",""); s=re.sub(r"[ \t]+"," ",s); s=re.sub(r"\s*\n\s*","\n",s).strip(); return s
nd=0
for i in ids:
    m=re.match(r"^([GH])(\d+)(.*)$",i); sh=f"{m.group(1)}{int(m.group(2))//100:03d}"
    lex=json.load(open(SNAP/"lexicon"/f"{sh}.json")).get(i)
    rs=G if i[0]=="G" else H
    row=None
    for c in rs:
        if re.sub(r"\s*=.*$","",c[1]).strip().startswith(i) : row=c;break
    if row is None and not m.group(3):
        for c in rs:
            if c[0].strip()==i: row=c;break
    print("=====",i, "ROW" if row else "NO ROW")
    if lex is None: print("  NO LEX ENTRY"); nd+=1; continue
    print("  out:",{k:(v if k!="def" else (v or "")[:80]) for k,v in lex.items()})
    if not row: continue
    rel=row[1].split("=",1)[1].strip() if "=" in row[1] else ""
    exp={"lemma":row[3].strip(),"gloss":row[6].strip(),"morph":row[5].strip(),"uStrong":row[2].strip(),"rel":rel,"step_tr":row[4].strip()}
    print("  src:",exp, "dStrongCell=",row[1])
    p=pos.get(exp["morph"]); print("  pos src:",p,"| out pos:",lex["pos"])
    if lex["lemma"]!=exp["lemma"]: print("  DEFECT lemma",lex["lemma"],exp["lemma"]); nd+=1
    if lex["gloss"]!=exp["gloss"]: print("  DEFECT gloss",lex["gloss"],exp["gloss"]); nd+=1
    ef=exp["uStrong"] if "Form" in rel else None
    if lex["formOf"]!=ef: print("  DEFECT formOf",lex["formOf"],ef); nd+=1
    if i[0]=="G":
        full=clean(row[7].strip()); lines=[l.strip() for l in full.split("\n") if l.strip()]
        body=lines[1:] if len(lines)>1 else lines
        body="\n".join(l for l in body if l!="(AS)")
        if lex["def"]!=body: print("  DEFECT def\n   got:",repr(lex["def"])[:300],"\n   exp:",repr(body)[:300]); nd+=1
        if lex["as"]!=row[7].strip().endswith("(AS)"): print("  DEFECT as"); nd+=1
        print("  def head line (headword):",lines[0][:80] if lines else None)
        if lex["strong"]!=re.match(r"[GH]\d+",i).group(0).replace(i[0],i[0],1): pass
    else:
        if lex["def"] is not None: print("  DEFECT def not null"); nd+=1
        if lex["tr"]!=exp["step_tr"]: print("  DEFECT tr",lex["tr"],exp["step_tr"]); nd+=1
    print("  glossEs:",lex["gloss"],"->",lex["glossEs"])
print("mechanical defects",nd)
