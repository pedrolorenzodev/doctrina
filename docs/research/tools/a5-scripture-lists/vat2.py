import re,sys
sys.path.insert(0,'/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/65f1fb53-fec5-45ca-9e96-35ddea5dd54a/scratchpad')
from scrlib import *
D='/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/65f1fb53-fec5-45ca-9e96-35ddea5dd54a/scratchpad/docs/'
def fix_commas(s):
    s=re.sub(r'(\d+),\s*(\d+)',r'\1:\2',s)   # "28, 18-20" -> "28:18-20"
    s=re.sub(r'(\d+:\d+(?:-\d+)?),\s*collato',r'\1; collato',s)
    return s
def load(fn):
    t=open(D+fn).read()
    return t
def notes_of(t,start):
    n=re.sub(r'\s+',' ',t[start:])
    d={}
    for m in re.finditer(r'(?:(?<=\s)|^)(\d{1,3}) (.*?)(?=(?<=\.) \d{1,3} [A-Z]|$)',n):
        pass
    return n
