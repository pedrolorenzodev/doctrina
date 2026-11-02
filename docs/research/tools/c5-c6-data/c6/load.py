import json,glob,os,pickle
root='/Users/pedrolorenzo/Desktop/dev/doctrina/data/site/words/verses'
H=[];G=[]
for f in sorted(glob.glob(root+'/*/*.json')):
    d=json.load(open(f)); book=d['book']; ch=d['chapter']; lang=d['lang']
    for vn,v in d['verses'].items():
        for i,w in enumerate(v['words']):
            w=dict(w); w['_ref']=f"{book} {ch}:{vn}"; w['_i']=i
            (H if lang=='hbo' else G).append(w)
pickle.dump((H,G),open('words.pkl','wb'))
print(len(H),len(G))
