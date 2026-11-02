import sys,subprocess,re,os,time
D=os.environ['CAPDIR']
def conv(vtt,out):
    cues=[];last=None
    t=open(vtt,errors='ignore').read()
    for blk in re.split(r'\n\n+',t):
        lines=blk.strip().split('\n')
        m=None
        for i,l in enumerate(lines):
            m=re.match(r'(\d+):(\d\d):(\d\d)\.\d+ --> ',l) or re.match(r'(\d\d):(\d\d)\.\d+ --> ',l)
            if m: 
                g=m.groups(); 
                sec=int(g[0])*3600+int(g[1])*60+int(g[2]) if len(g)==3 else int(g[0])*60+int(g[1])
                txt=' '.join(lines[i+1:]); txt=re.sub(r'<[^>]+>','',txt).strip()
                if txt and txt!=last: cues.append((sec,txt)); last=txt
                break
    # dedupe overlapping rolling captions: keep lines whose text not contained in previous
    res=[]
    for s,tx in cues:
        res.append('%d:%02d %s'%(s//60,s%60,tx))
    open(out,'w').write('\n'.join(res))
    return len(res)
for vid in sys.argv[1:]:
    out=f'{D}/{vid}.txt'
    if os.path.exists(out): print(vid,'cached'); continue
    r=subprocess.run(['yt-dlp','--skip-download','--write-auto-subs','--sub-langs','en','--sub-format','vtt','--sleep-subtitles','5','-o',f'{D}/%(id)s',f'https://www.youtube.com/watch?v={vid}'],capture_output=True,text=True)
    vtt=f'{D}/{vid}.en.vtt'
    if os.path.exists(vtt): print(vid,'ok',conv(vtt,out))
    else:
        print(vid,'FAIL',('429' if '429' in r.stderr else r.stderr.strip().split('\n')[-1][:100]))
        if '429' in r.stderr: sys.exit(2)
