import sys,re,subprocess,difflib
base='/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/28fa39c0-1913-4185-baa3-8c66bc722000/scratchpad/verify2/'
m={'reformation21.org/why-presbyterians':'duncan.html','calvin-and-baptism':'cassidy.html','9marks.org':'robin.html','credomag':'zaspel.html'}
cache={}
def paras(f):
    if f not in cache:
        out=subprocess.run(['python3','-I',base+'paras.py',base+'pages/'+f],capture_output=True,text=True).stdout
        L=[]
        for l in out.split('\n'):
            mm=re.match(r'^(\d+) (\w+) (.*)$',l)
            if mm: L.append((mm.group(2),mm.group(3)))
        cache[f]=L
    return cache[f]
def norm(s): return re.sub(r'\s+',' ',s.replace(' ',' ')).strip()
for fn in sys.argv[1:]:
    txt=open(fn,encoding='utf8').read().split('\n')
    for i,l in enumerate(txt):
        mm=re.search(r'(https://\S+?), (\d+) paragraph\(s\), (\d+) words, from the paragraph beginning «(.*?)» to the one ending «(.*?)»',l)
        if not mm: continue
        url,n,w,beg,end=mm.groups(); n=int(n);w=int(w)
        f=[v for k,v in m.items() if k in url][0]
        q=[]; j=i+1
        while j<len(txt) and txt[j].startswith('  > '): q.append(norm(txt[j][4:])); j+=1
        P=[(t,norm(x)) for t,x in paras(f)]
        b=beg.replace('…','').strip(); e=end.replace('…','').strip()
        bi=[k for k,(t,x) in enumerate(P) if x.startswith(b[:30])]
        ei=[k for k,(t,x) in enumerate(P) if x.endswith(e[-30:])]
        print('\n==',fn.split('/')[-1],i+1,f,'beg idx',bi,'end idx',ei,'stated n',n,'quote paras',len(q),'stated words',w,'quote words',len(' '.join(q).split()))
        if not bi or not ei: continue
        sel=P[bi[0]:ei[0]+1]
        print(' page paras in range',len(sel),[t for t,x in sel])
        print(' page words',len(' '.join(x for t,x in sel).split()))
        print(' EQUAL' if [x for t,x in sel]==q else ' DIFF')
        if [x for t,x in sel]!=q:
            a=' '.join(x for t,x in sel); bq=' '.join(q)
            sm=difflib.SequenceMatcher(None,bq.split(),a.split(),autojunk=False)
            for op in sm.get_opcodes():
                if op[0]!='equal': print('  ',op[0],'quote:',' '.join(bq.split()[op[1]:op[2]])[:200],'| page:',' '.join(a.split()[op[3]:op[4]])[:200])
        print(' prev para:',P[bi[0]-1][1][:100]); print(' next para:',P[ei[0]+1][1][:100])
        print(' first para starts with beg?',P[bi[0]][1][:60]); print(' last para end',P[ei[0]][1][-60:])
