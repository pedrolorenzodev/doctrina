import re
T=open('../txt/cu31924029369760.txt',encoding='utf8',errors='replace').read()
N=re.sub(r'-\s*\n\s*','',T); N=re.sub(r'\s+',' ',N)
print(len(N))
for pat in ['Acts iv. 2','Rom. viii','John iii. 5','Lam. v. 21','Gal. v. 3','Gal. iii. 23','Gal. iii. 27','Rom. v. 12','Acts ii. 38','Rom. iii. 24','Rom. X. 17']:
    print(pat,[m.start() for m in re.finditer(re.escape(pat),N)])
print('====V'); print(N[561300:564200])
print('====V0'); print(N[559600:561400])
print('====pre-p24'); 
i=N.find('Acts iv. 2'); 
print([ (m.start(),N[m.start()-60:m.start()+10]) for m in re.finditer(r'no other name|other name under heaven',N)][:6])
print('====V2'); print(N[564200:566000])
print('====VI'); print(N[580500:583300])
print('====VI2'); print(N[583300:584600])
print('====VI0'); print(N[579400:580700])
print('====VI3'); print(N[584560:585000])
print('====VII'); print(N[625700:627800])
print('====XIV'); print(N[697700:699900])
