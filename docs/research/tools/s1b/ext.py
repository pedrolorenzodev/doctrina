import sys,re
sys.path.insert(0,'/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/860b43de-3998-41a5-bbee-361b678b7c19/scratchpad/tools')
from scrlib import *
T=open('/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/860b43de-3998-41a5-bbee-361b678b7c19/scratchpad/txt/concordiatriglot00unse.txt').read().split('\n')
def region(a,b): return '\n'.join(T[a-1:b])
def show_refs(a,b,ctx=140):
    txt=re.sub(r'\s+',' ',region(a,b))
    seen=[]
    for m in BOOKRE.finditer(txt):
        bk=norm_book(m.group(1))
        if bk: print(f'  [{m.group(0)}] ...{txt[max(0,m.start()-ctx):m.end()+60]}')
    # chapter-only references like "in the last chapter of Matthew"
    for m in re.finditer(r'(?i)(chapter|chap\.)\s+(of|in)?\s*(St\.\s*)?[A-Z][a-z]+',txt):
        print('  CH:',txt[max(0,m.start()-100):m.end()+80])
