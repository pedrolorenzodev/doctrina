import json,sys,re
morph=json.load(open('morph.json'))['greek']
for ref in sys.argv[1:]:
    b,c=ref.split('.')
    d=json.load(open(f'verses/{b}/{c}.json'))
    for vn,v in d['verses'].items():
        for w in v['words']:
            en=w.get('en','')
            m=w.get('m','')
            if re.search(r'(^|\s)(of the|to the|all|every|All|Every|Of the|To the)(\s|$)',en) or re.search(r'-[123]P$|-2P',m) or en.startswith('they') or ' they ' in en or ' you' in en or en.startswith('you') or en.startswith('ye'):
                print(f"{b} {c}:{vn} {w['g']} | en={en!r} | m={m} ({morph.get(m,'?')}) | es={w.get('es')!r}")
