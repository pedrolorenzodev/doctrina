import json
tex=json.load(open("tex.json")); S=json.load(open("sources.json"))
tpl=open("template.html").read().replace("/*BASE*/",open("base.css.txt").read())
out=tpl.replace("/*DATA*/[]",json.dumps(S,ensure_ascii=False)).replace("/*TEX_LIGHT*/",tex["light"]).replace("/*TEX_DARK*/",tex["dark"]).replace("/*EXT*/",tex["ext"])
open("fuentes.html","w").write(out); print(len(out)//1024,"KB")
