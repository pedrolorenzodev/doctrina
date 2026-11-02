import re,subprocess,html,os,sys,time
S=os.environ['SCR']; C=S+'/corpus'
sm=open(S+'/web/sm.xml').read()
locs=re.findall(r'<loc>([^<]*)</loc>',sm)
secs=sys.argv[1].split(',')
urls=[u for u in locs if any(('/audio/%s/'%s) in u for s in secs)]
urls.sort(key=lambda u: secs.index(u.split('/audio/')[1].split('/')[0]))
print(len(urls),flush=True)
def clean(t):
    ttl=re.search(r'<title>(.*?)</title>',t,re.S)
    ttl=html.unescape(ttl.group(1)).strip() if ttl else ''
    t=re.sub(r'(?s)<(script|style|noscript)[^>]*>.*?</\1>',' ',t)
    t=re.sub(r'(?s)<[^>]+>','\n',t); t=html.unescape(t); t=re.sub(r'\n\s*\n+','\n',t)
    return ttl,t
n=0
for u in urls:
    sec=u.split('/audio/')[1].split('/')[0]; slug=u.rsplit('/',1)[1]
    fn=f'{C}/{sec}__{slug[:120]}.txt'
    if os.path.exists(fn): continue
    r=subprocess.run(['curl','-sL','-m','40','-A','Mozilla/5.0',u],capture_output=True,text=True)
    if len(r.stdout)<2000: 
        time.sleep(3); r=subprocess.run(['curl','-sL','-m','40','-A','Mozilla/5.0',u],capture_output=True,text=True)
    ttl,t=clean(r.stdout)
    open(fn,'w').write('URL: '+u+'\nTITLE: '+ttl+'\n'+t)
    n+=1
    if n%50==0: print(n,flush=True)
    time.sleep(0.7)
print('done',n,flush=True)
