import json,re,base64,io
from PIL import Image
R="../../../../../"
tex=json.load(open("tex.json"))
b=json.load(open(R+"data/corpus/bibles/rv1909.json"))
def vs(keys): return " ".join(re.sub(r"\s+"," ",b[k]).strip() for k in keys)
src=open(R+"src/features/reader-ai/quotes.ts").read()
def grab(qid):
    i=src.index(f"  {qid}: {{")
    seg=src[i:i+1500]
    g=lambda f: re.search(f+r':\s*\n?\s*"((?:[^"\\]|\\.)*)"',seg).group(1)
    return {"who":g("who"),"work":g("work"),"text":g("text").replace('\\"','"')}
Q={k:grab(k) for k in ["cyr224","cyr226","ddc","aug275","ccc1336","trent8","phil340","apol10","belg35","bfm7"]}
Q["matt26"]={"who":"Mateo","work":"26:26-28","text":vs(["Matt.26.26","Matt.26.27","Matt.26.28"]),"verse":True}
Q["cor11"]={"who":"1 Corintios","work":"11:24-26","text":vs(["1Cor.11.24","1Cor.11.25","1Cor.11.26"]),"verse":True}
Q["john663"]={"who":"Juan","work":"6:63","text":vs(["John.6.63"]),"verse":True}
verses={v:re.sub(r"\s+"," ",b[f"John.6.{v}"]).strip() for v in range(51,60)}
data={"Q":Q,"verses":verses}
def img(name,w=720):
    im=Image.open(f"../../../ai-chat-ux-round2/{name}.png").convert("RGB")
    im=im.resize((w,int(im.height*w/im.width)),Image.LANCZOS)
    bio=io.BytesIO(); im.save(bio,"JPEG",quality=62,optimize=True)
    return "data:image/jpeg;base64,"+base64.b64encode(bio.getvalue()).decode()
tpl=open("template.html").read()
out=(tpl.replace("/*DATA*/{}",json.dumps(data,ensure_ascii=False))
  .replace("/*TEX_LIGHT*/",tex["light"]).replace("/*TEX_DARK*/",tex["dark"]).replace("/*EXT*/",tex["ext"])
  .replace("/*IMG_CHATGPT*/",img("chatgpt-bottom")).replace("/*IMG_CLAUDE*/",img("claude-answer")).replace("/*IMG_PPLX*/",img("perplexity-bottom")))
open("cajon.html","w").write(out)
print(len(out)//1024,"KB")
