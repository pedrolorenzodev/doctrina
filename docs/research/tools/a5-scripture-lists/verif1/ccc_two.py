exec(open('ccc.py').read())
for code,n in [('1C',405),('4C',1446),('1C',404)]:
    t=open(f'ccc/P{code}.htm',encoding='latin-1').read()
    paras,fns=parse(t)
    for p in paras:
        if re.match(r'%d\s'%n,p):
            marks=[int(x) for x in re.findall(r'@@FN(\d+)@@',p)]
            print(n,code,p[:200],{m:fns.get(m) for m in marks})
