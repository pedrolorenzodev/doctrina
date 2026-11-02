import sys,re,os
sys.path.insert(0,os.environ['SCR']+'/tools')
import build
key=sys.argv[1]; pat=re.compile(sys.argv[2],re.I); w=int(sys.argv[3]) if len(sys.argv)>3 else 700
t=re.sub(r'\s+',' ',build.corpus_text(key))
m=pat.search(t)
if not m: print('no match'); sys.exit()
pre=t[max(0,m.start()-4000):m.start()]
labs=list(re.finditer(r'\b((?:[A-Z][a-z]+\.? )?[A-Z][a-z]+(?: [A-Z][a-z]+)?|[A-Z]{3,}):',pre))
print('SPEAKER-LABELS before:',[l.group(1) for l in labs[-3:]],'| CLIP before?', 'CLIP:' in pre[-1500:])
print('>>',t[max(0,m.start()-150):m.start()+w])
