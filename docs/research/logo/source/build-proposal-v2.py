import re, json
css = open('/Users/pedrolorenzo/Desktop/dev/doctrina/src/app/globals.css').read()
tex = re.findall(r'--texture-image:\s*(url\("[^"]+"\));', css)
V1 = json.load(open('variants.json')); V2 = json.load(open('variants2.json'))
t = open('template-v2.html').read()
t = t.replace('</style>', open('r2.css').read() + '</style>', 1)
t = t.replace('</main>', '</main>', 1)
t = t + '\n<script>\n' + open('r2.js').read() + '\n</script>\n'
t = t.replace('__TEX_L__', tex[0]).replace('__TEX_D__', tex[1])
t = t.replace('__VARIANTS__', json.dumps(V1, ensure_ascii=False)).replace('__VARIANTS2__', json.dumps(V2, ensure_ascii=False))
open('marca-doctrina.html', 'w').write(t)
print(len(t))
