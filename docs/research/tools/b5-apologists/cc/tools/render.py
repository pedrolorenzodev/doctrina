import sys,os,re
sys.path.insert(0,os.environ['SCR']+'/tools')
import build
OUT={'sp':('Shameless Popery (Catholic Answers), transcript on catholic.com','Joe Heschmeyer'),
     'drk':('Dr. Karlo (Catholic Answers), transcript on catholic.com','Karlo Broussard'),
     'tjap':('The Jimmy Akin Podcast (Catholic Answers), transcript on catholic.com','Jimmy Akin'),
     'ddp':('A Daily Defense (Catholic Answers), catholic.com','Jimmy Akin'),
     'cot':('Counsel of Trent (Catholic Answers), transcript on catholic.com','Trent Horn')}
def render_quote(q):
    src=q['src']; ok,miss=build.check(src,q['quote'])
    if not ok: raise SystemExit('QUOTE NOT FOUND in %s: %s'%(src,miss))
    if src.startswith('art:'):
        url=src[4:]; body,title,d=build.art_text(url)
        date=q.get('date',''); outlet=q.get('outlet','Catholic Answers Magazine'); who=q['who']
        return "- **%s**, «%s», %s, %s, %s, %s `[verified: page]`: «%s»"%(who,q.get('title',title),outlet,date,url,q['loc'],q['quote'])
    if src.startswith('cap:'):
        raise SystemExit('cap quotes are written by hand')
    sec=src.split(':')[0]
    url,title,date=build.corpus_meta(src)
    if sec in ('magazine','tract','article'):
        return "- **%s**, «%s», *Catholic Answers Magazine*, %s, %s, %s `[verified: page]`: «%s»"%(q['who'],title or q.get('title',''),date,url,q['loc'],q['quote'])
    outlet,who=OUT[sec]
    return "- **%s**, «%s», %s, %s, %s, %s `[verified: page]` (speaker per the page's label or byline): «%s»"%(q.get('who',who),q.get('title',title),outlet,date,url,q['loc'],q['quote'])
def render_passage(num,head,args,count,notes=''):
    s="## %s\n\n"%head
    for title,qs in args:
        s+="**%s**\n"%title
        for q in qs: s+=render_quote(q)+"\n"
        s+="\n"
    s+=count+"\n"
    if notes: s+=notes+"\n"
    return s+"\n"
