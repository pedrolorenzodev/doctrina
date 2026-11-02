exec(open('luth.py').read().split("d=json.load")[0])
i=N.find('Fourthly. What does such baptizing with water signify')
print(N[i:i+700])
print('====')
# Scripture refs in English baptism sections
import re
secs={'AC IX':(1733750,1734076+400),'Apol IX':(2688800,2692200),'SA III V':(3825073,3825900),'SC IV':(4059379,4062500)}
pat=re.compile(r'(?:[1-3] )?(?:Matt|Mark|Luke|John|Acts|Rom|Gal|Eph|Col|Titus|Tit|Cor|Tim|Pet|Heb|Gen|Ex|Is|Isa|Ps|Jer|Ezek|Joel|Deut|Num|Lev|Hos|Mal|Rev|Jas|Phil)\w*\.?,? ?\d+[,:]? ?\d*|chapter|Chap|[Vv]\. ?\d+|v\.\d+')
for k,(a,b) in secs.items():
    t=N[a:b]
    print(k,[ (m.group(0)) for m in pat.finditer(t)])
