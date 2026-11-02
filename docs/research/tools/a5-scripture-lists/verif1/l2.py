import re
exec(open('luth.py').read().split("d=json.load")[0])
for pat in [r'Of Baptism\.',r'IX\. Of Baptism',r'The Sacrament of Holy Baptism',r'THE SACRAMENT OF HOLY BAPTISM',r'Fifthly',r'IX\. OF BAPTISM',r'OF BAPTISM']:
    print(pat,[m.start() for m in re.finditer(pat,N)][:40])
print(N[1733600:1735400]); print('=====AP'); print(N[2688300:2693500]); print('=====SA'); print(N[3825073:3828000])
print('=====SC'); print(N[4060589+900:4066400])
