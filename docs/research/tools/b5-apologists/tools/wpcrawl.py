import sys,json,time,urllib.request,urllib.error,os,html,re
base,out=sys.argv[1],sys.argv[2]
TYPE=sys.argv[3] if len(sys.argv)>3 else "posts"
UA="Mozilla/5.0 (research; doctrina)"
os.makedirs(out,exist_ok=True)
def get(u):
    for i in range(4):
        try:
            r=urllib.request.urlopen(urllib.request.Request(u,headers={"User-Agent":UA}),timeout=60)
            return json.loads(r.read()), r.headers
        except urllib.error.HTTPError as e:
            if e.code==400: return None,None
            time.sleep(5*(i+1))
        except Exception as e:
            time.sleep(5*(i+1))
    return None,None
# authors
au,_=get(base+"/wp-json/wp/v2/users?per_page=100&_fields=id,name")
amap={a['id']:a['name'] for a in au} if au else {}
json.dump(amap,open(out+"/authors.json","w"))
page=1; n=0
while True:
    d,h=get(f"{base}/wp-json/wp/v2/{TYPE}?per_page=100&page={page}&_fields=id,date,link,title,author,content")
    if not d: break
    fn=f"{out}/posts-{page:04d}.json"
    json.dump(d,open(fn,"w"))
    n+=len(d); print(page,n,flush=True)
    if len(d)<100: break
    page+=1; time.sleep(1.5)
print("done",n)
