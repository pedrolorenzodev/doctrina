import re,subprocess,html,os,sys,time
S=os.environ['SCR']; C=S+'/corpus'
sm=open(S+'/web/sm.xml').read()
locs=re.findall(r'<loc>([^<]*)</loc>',sm)
pat=re.compile(sys.argv[1])
urls=[u for u in locs if re.search(r'/(magazine|tract|article)/',u) and pat.search(u)]
print(len(urls),flush=True)
for u in urls:
    sec=u.split('catholic.com/')[1].split('/')[0]; slug=u.rsplit('/',1)[1]
    fn=f'{C}/{sec}__{slug[:120]}.txt'
    if os.path.exists(fn): continue
    r=subprocess.run(['curl','-sL','-m','40','-A','Mozilla/5.0',u],capture_output=True,text=True)
    t=r.stdout
    t=re.sub(r'(?s)<(script|style|noscript)[^>]*>.*?</\1>',' ',t)
    t=re.sub(r'(?s)<[^>]+>','\n',t); t=html.unescape(t); t=re.sub(r'\n\s*\n+','\n',t)
    open(fn,'w').write('URL: '+u+'\nTITLE: \n'+t)
    time.sleep(0.8)
print('done',flush=True)
