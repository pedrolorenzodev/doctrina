import json,re,base64,io
from PIL import Image
R="../../../../../"
tex=json.load(open("tex.json"))
b=json.load(open(R+"data/corpus/bibles/rv1909.json"))
src=open(R+"src/features/reader-ai/quotes.ts").read()
def grab(qid):
    i=src.index(f"  {qid}: {{"); seg=src[i:i+1800]
    g=lambda f: re.search(f+r':\s*\n?\s*"((?:[^"\\]|\\.)*)"',seg).group(1)
    return {"who":g("who"),"work":g("work"),"text":g("text").replace('\\"','"')}
Q={k:grab(k) for k in ["ccc1336","phil340","apol10","belg35","bfm7"]}
data={"Q":Q,"v53":re.sub(r"\s+"," ",b["John.6.53"]).strip()}
def img(path,w=1500):
    im=Image.open(path).convert("RGB"); im=im.resize((w,int(im.height*w/im.width)),Image.LANCZOS)
    bio=io.BytesIO(); im.save(bio,"JPEG",quality=60,optimize=True); return "data:image/jpeg;base64,"+base64.b64encode(bio.getvalue()).decode()
tpl=open("template.html").read()
out=(tpl.replace("/*DATA*/{}",json.dumps(data,ensure_ascii=False)).replace("/*TEX_LIGHT*/",tex["light"]).replace("/*TEX_DARK*/",tex["dark"]).replace("/*EXT*/",tex["ext"])
 .replace("/*IMG_REFS*/",img("../../../selectors-refs/montage.png")))
open("selectores.html","w").write(out); print(len(out)//1024,"KB")
