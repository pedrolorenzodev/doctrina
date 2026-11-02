exec(open('ccc.py').read())
for code,n in [('49',1427),('2X',1094),('3N',1269),('3I',1219),('3N',1274),('3M',1261)]:
    t=open(f'ccc/P{code}.htm',encoding='latin-1').read(); paras,fns=parse(t)
    for p in paras:
        if re.match(r'%d\s'%n,p): print(p,'\n')
