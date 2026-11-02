import sys,re,html
from html.parser import HTMLParser
class P(HTMLParser):
    def __init__(s):
        super().__init__(convert_charrefs=True); s.out=[]; s.cur=None; s.depth=0; s.skip=0
    def handle_starttag(s,t,a):
        if t in('script','style','noscript'): s.skip+=1
        if t in('p','blockquote','h1','h2','h3','h4','h5','li') :
            if s.cur is None: s.cur=[t,[]]
            else: s.cur[1].append(' ')
        elif s.cur is not None and t=='br': s.cur[1].append(' ')
        if t=='sup' and s.cur is not None: pass
    def handle_endtag(s,t):
        if t in('script','style','noscript'): s.skip-=1
        if t in('p','blockquote','h1','h2','h3','h4','h5','li') and s.cur is not None and s.cur[0]==t:
            s.out.append((t,''.join(s.cur[1]))); s.cur=None
    def handle_data(s,d):
        if s.skip: return
        if s.cur is not None: s.cur[1].append(d)
p=P(); p.feed(open(sys.argv[1],encoding='utf8',errors='replace').read())
for i,(t,x) in enumerate(p.out):
    x=re.sub(r'\s+',' ',x).strip()
    if x: print(i,t,x)
