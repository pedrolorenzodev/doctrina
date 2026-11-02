import json,sys
d=json.load(open(sys.argv[1]))
a=int(sys.argv[2]) if len(sys.argv)>2 else 0; b=int(sys.argv[3]) if len(sys.argv)>3 else None
print('TITLE:',d['work']['title']); print('NOTES:',d['edition'].get('locatorNotes'))
for x in d['divisions'][a:b]:
    print('===',x['locator'], ('## '+x.get('heading')) if x.get('heading') else ''); print(x['text'])
