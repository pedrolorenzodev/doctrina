import re,sys,difflib
S='/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/28fa39c0-1913-4185-baa3-8c66bc722000/scratchpad/yt/'
meta={}
for l in open(S+'meta_all.txt',encoding='utf8'):
    p=l.rstrip('\n').split('|',4)
    if len(p)>=5: meta[p[0]]=p[1:]
def tosec(t):
    p=[int(x) for x in t.split(':')]
    s=0
    for x in p: s=s*60+x
    return s
def load(v):
    cues=[]
    for i,l in enumerate(open(S+'tr/%s.tr.txt'%v,encoding='utf8')):
        if i==0: continue
        l=l.rstrip('\n')
        m=re.match(r'^(\S+) ((?:\d+ (?:hours?|minutes?|seconds?)(?:, )?)+) ?(.*)$',l)
        if not m: print('BAD LINE',v,i,l[:80]); continue
        cues.append((tosec(m.group(1)),m.group(1),m.group(3)))
    return cues
def clean(t):
    return re.sub(r'\s+',' ',re.sub(r'\[[^\]]*\]','',t)).strip()
for f in sys.argv[1:]:
    txt=open(f,encoding='utf8').read().split('\n')
    for i,l in enumerate(txt):
        m=re.search(r'watch\?v=([\w-]+)&t=(\d+)s, minutes ([\d:]+) to ([\d:]+) .*?, (\d+) cues, (\d+) words',l)
        if not m: continue
        v,t,a,b,nc,nw=m.groups(); t=int(t);nc=int(nc);nw=int(nw)
        quote=txt[i+1].strip()
        assert quote.startswith('> '),(i,quote[:20])
        quote=quote[2:]
        cues=load(v)
        sa,sb=tosec(a),tosec(b)
        idx=[k for k,c in enumerate(cues) if c[0]==sa]
        idxb=[k for k,c in enumerate(cues) if c[0]==sb]
        print('\n==',f.split('/')[-1],'line',i+1,v,a,b)
        print(' &t',t,'first cue sec',sa,'OK' if t==sa else 'MISMATCH')
        print(' cue idx first',idx,'last',idxb)
        if not idx or not idxb: continue
        k0,k1=idx[0],idxb[-1] if True else None
        sel=cues[k0:k1+1]
        rebuilt=' '.join(x for x in (clean(c[2]) for c in sel) if x)
        print(' cues in range',len(sel),'stated',nc,'OK' if len(sel)==nc else 'MISMATCH', '| nonempty after clean',sum(1 for c in sel if clean(c[2])))
        w=len(rebuilt.split()); print(' words rebuilt',w,'stated',nw,'quote words',len(quote.split()),'OK' if w==nw else 'MISMATCH')
        if rebuilt==quote: print(' TEXT EQUAL')
        else:
            print(' TEXT DIFFERS')
            sm=difflib.SequenceMatcher(None,quote.split(),rebuilt.split(),autojunk=False)
            for op in sm.get_opcodes():
                if op[0]!='equal': print('   ',op[0],'quote:',' '.join(quote.split()[op[1]:op[2]])[:200],'| caps:',' '.join(rebuilt.split()[op[3]:op[4]])[:200])
        # surrounding cues
        print(' prev cue:',cues[k0-1][1] if k0>0 else None, clean(cues[k0-1][2])[-80:] if k0>0 else '')
        print(' next cue:',cues[k1+1][1] if k1+1<len(cues) else None, clean(cues[k1+1][2])[:80] if k1+1<len(cues) else '')
        print(' first words:',quote[:70],'| last words:',quote[-70:])
        # meta
        mt=meta.get(v); print(' meta',mt[:3] if mt else None)
