import sys,re,os
sys.path.insert(0,os.environ['SCR']+'/tools')
import build
key=sys.argv[1]; pat=re.compile(sys.argv[2],re.I); w=int(sys.argv[3]) if len(sys.argv)>3 else 600
n=int(sys.argv[4]) if len(sys.argv)>4 else 2
if key.startswith('art:'): t=build.art_text(key[4:])[0]
elif key.startswith('cap:'): t=build.cap_text(key[4:])
else: t=build.corpus_text(key)
t=re.sub(r'\s+',' ',t)
c=0
for m in pat.finditer(t):
    print('>>',t[max(0,m.start()-w//3):m.start()+w]); print(); c+=1
    if c>=n: break
if c==0: print('no match')
