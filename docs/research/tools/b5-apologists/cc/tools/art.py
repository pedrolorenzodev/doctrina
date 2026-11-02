import sys,re,subprocess,html,os
S=os.environ['SCR']
def get(url):
    t=subprocess.run(['curl','-sL','-m','40','-A','Mozilla/5.0',url],capture_output=True,text=True).stdout
    return t
def body(t):
    m=re.search(r'<h1[^>]*>(.*?)</h1>',t,re.S)
    title=re.sub(r'<[^>]+>','',m.group(1)).strip() if m else ''
    d=re.search(r'(\d{1,2}/\d{1,2}/\d{4})',t)
    t2=re.sub(r'(?s)<(script|style|noscript|nav|header|footer)[^>]*>.*?</\1>',' ',t)
    paras=re.findall(r'(?s)<p[^>]*>(.*?)</p>',t2)
    paras=[html.unescape(re.sub(r'<[^>]+>','',p)).strip() for p in paras]
    paras=[re.sub(r'\s+',' ',p) for p in paras if p.strip()]
    return title,d.group(1) if d else '',paras
if __name__=='__main__':
    url=sys.argv[1]; pat=re.compile(sys.argv[2],re.I) if len(sys.argv)>2 else None
    t=get(url); title,date,paras=body(t)
    print('TITLE:',title,'| DATE:',date,'| paras:',len(paras))
    for i,p in enumerate(paras):
        if pat is None or pat.search(p): print('[%d] %s'%(i,p[:1200]))
