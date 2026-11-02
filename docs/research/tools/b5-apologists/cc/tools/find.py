import sys,re,os
D=os.environ['CAPDIR']
vid=sys.argv[1]; pat=re.compile(sys.argv[2],re.I); ctx=int(sys.argv[3]) if len(sys.argv)>3 else 3
L=open(f'{D}/{vid}.txt').read().split('\n')
shown=set()
for i,l in enumerate(L):
    if pat.search(l):
        for j in range(max(0,i-ctx),min(len(L),i+ctx+1)):
            if j not in shown: shown.add(j); print(L[j])
        print('--')
