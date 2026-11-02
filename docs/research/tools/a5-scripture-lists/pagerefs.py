import re,glob,json,sys
out={}
for f in sorted(glob.glob('src/content/pages/*/*.es.ts')):
    s=open(f).read()
    i=s.find('\n  scripture: [')
    if i<0: continue
    j=s.find('\n  ],',i)
    blk=s[i:j]
    refs=re.findall(r'refs:\s*\[([^\]]*)\]',blk)
    lst=[[r.strip().strip('"') for r in x.split(',')] for x in refs]
    out[f.split('pages/')[1]]=lst
    print(f.split('pages/')[1],len(lst))
    for x in lst: print('   ','+'.join(x))
json.dump(out,open(sys.argv[1],'w'))
