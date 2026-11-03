import re,sys
sys.path.insert(0,'/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/860b43de-3998-41a5-bbee-361b678b7c19/scratchpad/tools')
from scrlib import *
T=open('/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/860b43de-3998-41a5-bbee-361b678b7c19/scratchpad/txt/donovan.txt').read().split('\n')
FN=re.compile(r"^\s*[\W\d]{0,4}\s*(?:[123I]\s)?(Gen|Exod|Ex|Lev|Num|Deut|Josh|Judg|Ruth|Kings|Chron|Esd|Neh|Tob|Judith|Esth|Job|Ps|Prov|Eccles|Cant|Wis|Ecclus|Isa|Is|Jer|Lam|Bar|Ezech|Ezek|Dan|Osee|Hos|Joel|Amos|Abd|Jon|Mich|Nah|Hab|Soph|Agg|Zach|Mal|Matt|Mark|Luke|John|Acts|Rom|Cor|Gal|Eph|Phil|Col|Thess|Tim|Tit|Philem|Heb|James|Jac|Pet|Jude|Apoc|Rev)\b")
def refs_in(a,b):
    out=[]
    for i in range(a,b):
        l=re.sub(r'\s+',' ',T[i]).strip()
        if FN.match(l):
            # join next line when ref continues
            seg=l
            rs=refs_ver(seg)
            for r in rs: out.append((i,r,l))
    return out
