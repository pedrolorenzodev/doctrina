import re,os,sys,json,subprocess,html
S=os.environ['SCR']; C=S+'/corpus'
def norm(s):
    s=s.replace('’',"'").replace('‘',"'").replace('“','"').replace('”','"').replace('—','-').replace('–','-').replace('\xa0',' ')
    return re.sub(r'\s+',' ',s).strip().lower()
_cache={}
def corpus_text(key):
    if key in _cache: return _cache[key]
    sec,slug=key.split(':',1)
    fn='%s/%s__%s.txt'%(C,sec,slug[:120])
    t=open(fn,errors='ignore').read()
    _cache[key]=t; return t
def corpus_meta(key):
    t=corpus_text(key)
    url=t.split('\n',1)[0][5:]
    lines=t.split('\n')
    title=''
    for l in lines[2:]:
        l=l.strip()
        if l and ' | Catholic Answers' in l: title=l.split(' | Catholic Answers')[0].strip(); break
    d=re.search(r'\n(\d{1,2})/(\d{1,2})/(20\d\d)\n',t)
    date=''
    if d:
        mo=['','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][int(d.group(1))]
        date='%d %s %s'%(int(d.group(2)),mo,d.group(3))
    return url,title,date
def art_text(url):
    if url in _cache: return _cache[url]
    t=subprocess.run(['curl','-sL','-m','40','-A','Mozilla/5.0',url],capture_output=True,text=True).stdout
    h=re.search(r'<h1[^>]*>(.*?)</h1>',t,re.S)
    title=re.sub(r'<[^>]+>','',h.group(1)).strip() if h else ''
    d=re.search(r'(\d{1,2})/(\d{1,2})/(20\d\d|19\d\d)',t)
    t2=re.sub(r'(?s)<(script|style|noscript)[^>]*>.*?</\1>',' ',t)
    body=html.unescape(re.sub(r'(?s)<[^>]+>','\n',t2))
    _cache[url]=(body,title,d.groups() if d else None); return _cache[url]
def cap_text(vid):
    for p in (S+'/pw/%s.tr.txt'%vid, S+'/caps/%s.txt'%vid):
        if os.path.exists(p):
            L=open(p).read().split('\n'); out=[]
            for l in L:
                m=re.match(r'^\d+:(?:\d\d:)?\d\d(?: \d+ (?:hours?|minutes?|seconds?)(?:, \d+ (?:minutes?|seconds?))*(?:, \d+ seconds?)?)? (.*)$',l) or re.match(r'^\d+:\d\d (.*)$',l)
                out.append(m.group(1) if m else l)
            return ' '.join(out)
    raise FileNotFoundError(vid)
def check(src,quote):
    parts=[p.strip() for p in re.split(r'\s*(?:\[…\]|…)\s*',quote) if p.strip()]
    if src.startswith('art:'): hay=norm(art_text(src[4:])[0])
    elif src.startswith('cap:'): hay=norm(cap_text(src[4:]))
    else: hay=norm(corpus_text(src))
    ok=True; miss=[]
    for p in parts:
        p=p.strip('«»')
        if norm(p) not in hay: ok=False; miss.append(p[:60])
    return ok,miss
def maybe_fix(src,quote):
    return check(src,quote)
