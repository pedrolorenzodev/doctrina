import re,json,unicodedata,difflib,sys
def norm(s):
    s=unicodedata.normalize('NFKD',s)
    s=s.replace('’',"'").replace('‘',"'").replace('“','"').replace('”','"').replace('—','-').replace('–','-')
    s=re.sub(r'-\s*\n\s*','',s)
    s=re.sub(r'\s+',' ',s)
    return s
files={'Philaret':'creedschristendo02scha','Dositheus':'actsdecreesofsyn00orth','Mogila':'cu31924029363094'}
txt={k:norm(open(f'txt/{f}.txt',errors='replace').read()) for k,f in files.items()}
d=json.load(open('/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/doctrines/scripture-lists/papacy-orthodox.json'))
def locate(core,t):
    w=core.split()
    best=None
    # anchor on first 3 words with fuzzy: search for regex of first 3 words allowing any non-alnum
    ms=[]
    for off in range(0,max(1,len(w)-3),max(1,len(w)//4)):
        pat=r'\W+'.join(re.escape(x) for x in w[off:off+3])
        for m in re.finditer(pat,t,re.I):
            class M: pass
            q=M(); q.start=lambda off=off,m=m: max(0,m.start()-len(' '.join(w[:off]))-2)
            ms.append(q)
    out=[]
    for m in ms[:8]:
        win=t[m.start():m.start()+len(core)+40]
        r=difflib.SequenceMatcher(None,core.lower(),win.lower()).ratio()
        out.append((r,m.start(),win))
    out.sort(reverse=True)
    return out[:1]
sel=[int(x) for x in sys.argv[1:]]
for i in sel:
    r=d[i]
    for c in r['citedBy']:
        k=c['work'].split(',')[0].split(' ')[0]
        if k not in txt: continue
        core=norm(c['sentence']).replace(' […]','').replace('[…]','').strip().strip('"“”\'‘’ ')
        res=locate(core,txt[k])
        print(i,k,c['loc'].split(';')[0])
        print('  REC:',core)
        for rr,pos,win in res: print('  OCR: %.2f @%d %s'%(rr,pos,win))
