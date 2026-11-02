import sys
exec(open('ccc.py').read())
d=json.load(open('/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/doctrines/scripture-lists/baptism-catholic.json'))
for code,n in [('2E',977),('3I',1223),('3I',1226),('3N',1264),('3J',1244),('3K',1250),('3L',1256)]:
    t=open(f'ccc/P{code}.htm',encoding='latin-1').read(); paras,fns=parse(t)
    for p in paras:
        if re.match(r'%d\s'%n,p): print(p,'\n')
for r in d:
  for c in r['citedBy']:
    if c['loc'] in ('§977, fn 520','§1223, fn 18','§1226, fn 27','§1264, fn 67','§1244, fn 45'): print(c['loc'],'=>',c['sentence'],'\n')
