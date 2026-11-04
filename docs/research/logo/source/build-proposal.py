import re, json
css = open('/Users/pedrolorenzo/Desktop/dev/doctrina/src/app/globals.css').read()
tex = re.findall(r'--texture-image:\s*(url\("[^"]+"\));', css)
print(len(tex), [len(t) for t in tex])
V = json.load(open('variants.json'))
t = open('template.html').read()
t = t.replace('__TEX_L__', tex[0]).replace('__TEX_D__', tex[1]).replace('__VARIANTS__', json.dumps(V, ensure_ascii=False))
open('marca-doctrina.html','w').write(t)
print(len(t))
