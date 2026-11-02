exec(open('luth.py').read().split("d=json.load")[0])
import re
t=N[4802300:4888400]
pat=re.compile(r'\b(?:[1-3] )?(?:Matt|Mark|Luke|John|Acts|Rom|Gal|Eph|Col|Titus|Tit|Cor|Tim|Pet|Heb|Gen|Ex|Isa?|Ps|Jer|Ezek|Joel|Deut|Num|Lev|Hos|Mal|Rev|Jas|Phil|Mt|Mk|Lk|Joh)\w*\.? ?\d+(?:, ?\d+(?:[-–]\d+)?)?|chapter \w+|, ch\.|v\.\s?\d+|St\. (?:Mark|Matthew|Paul|Peter|John|Luke)[^.]{0,80}')
for m in pat.finditer(t):
    print(m.start()+4802300, repr(t[max(0,m.start()-110):m.end()+70]))
