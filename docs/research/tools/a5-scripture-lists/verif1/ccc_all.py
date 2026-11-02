exec(open('ccc.py').read())
import os
allp={}   # para number -> (code, text, fns)
for f in sorted(glob.glob('ccc/P*.htm')):
    code=f.split('/P')[1][:-4]
    t=open(f,encoding='latin-1').read()
    paras,fns=parse(t)
    for p in paras:
        m=re.match(r'(\d{3,4})\s',p)
        if m: allp[int(m.group(1))]=(code,p,fns)
print(len(allp))
cec=[405,845,977,980,1094,1123,1127,1128,1212,1213,1214,1215,1216,1219,1223,1225,1226,1227,1228,1232,1234,1239,1243,1244,1247,1250,1251,1252,1253,1254,1255,1256,1257,1258,1259,1260,1261,1262,1263,1264,1265,1266,1267,1268,1269,1271,1272,1273,1274,1275,1278,1282,1283,1284,1306,1426,1427,1428,1446]
import json
d=json.load(open('/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/doctrines/scripture-lists/baptism-catholic.json'))
have=set()
for r in d:
    for c in r['citedBy']:
        if c['work']=='CCC':
            m=re.match(r'§(\d+), fn (\d+)',c['loc']); have.add((int(m.group(1)),int(m.group(2))))
for n in cec:
    if n not in allp: print(n,'NOT FOUND'); continue
    code,p,fns=allp[n]
    marks=[int(x) for x in re.findall(r'@@FN(\d+)@@',p)]
    # also inline refs in text (parentheses)
    out=[]
    for mk in marks:
        t=fns.get(mk,'?')
        flag='' if (n,mk) in have else '  <-- not in list'
        out.append(f'fn{mk}: {t[:130]}{flag}')
    inl=re.findall(r'\((?:cf\. )?(?:[1-3] )?[A-Z][a-z]{1,4}\.? ?\d+[:,]?\d*[^)]*\)',re.sub(r'@@FN\d+@@','',p))
    print(n,code,out, 'INLINE:',inl if inl else '')
