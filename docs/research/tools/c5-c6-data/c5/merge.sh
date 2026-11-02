S=/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/54ade58a-a1ac-497a-b68c-690fbe6b2900/scratchpad
cd /Users/pedrolorenzo/Desktop/dev/doctrina
rm -f $S/glosses-es.json
python3 -I data/scripts/merge_glosses_es.py $S/glosses-es.json $S/es/*.tsv | tail -5
rm -rf $S/worklist
python3 -I data/scripts/build_words.py --src $S/stepdata --out $S/words_out --glosses $S/glosses-es.json --worklist $S/worklist | tail -2
python3 -I - <<P
import json,glob
for L,pat in (('greek','G'),('hebrew','H')):
    tot=cov=totn=covn=0
    for f in glob.glob('$S/words_out/lexicon/'+pat+'*.json'):
        for d,e in json.load(open(f)).items():
            tot+=1; cov+= e['glossEs'] is not None
            totn+=e['n']; covn+= e['n'] if e['glossEs'] else 0
    print(L,'lexicon entries',cov,'/',tot,'| by tokens',covn,'/',totn)
tw=cw=0; th=ch=0
for f in glob.glob('$S/words_out/verses/*/*.json'):
    d=json.load(open(f))
    for v in d['verses'].values():
        for w in v['words']:
            if d['lang']=='grc': tw+=1; cw+= 'es' in w
            else: th+=1; ch+= 'es' in w
print('greek words with es',cw,'/',tw,'| hebrew words with es',ch,'/',th)
P
