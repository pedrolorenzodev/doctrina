import re
BOOKS = {
 'Gen':['Gen','Gn','Genesis'],'Exod':['Exod','Ex','Exodus'],'Lev':['Lev','Lv','Leviticus'],'Num':['Num','Nm','Numbers'],'Deut':['Deut','Dt','Deuteronomy'],
 'Josh':['Josh','Jos','Joshua'],'Judg':['Judg','Jgs','Judges'],'Ruth':['Ruth','Ru'],'1Sam':['1 Sam','1 Sm','1Sam','1 Samuel'],'2Sam':['2 Sam','2 Sm','2Sam','2 Samuel'],
 '1Kgs':['1 Kings','1 Kgs','1 Kg','1Kings'],'2Kgs':['2 Kings','2 Kgs','2 Kg','2Kings'],'1Chr':['1 Chr','1 Chron','1 Chronicles'],'2Chr':['2 Chr','2 Chron','2 Chronicles'],
 'Ezra':['Ezra'],'Neh':['Neh','Nehemiah'],'Tob':['Tob','Tobit'],'Jdt':['Jdt','Judith'],'Esth':['Esth','Est','Esther'],'1Macc':['1 Mac','1 Macc','1 Maccabees'],'2Macc':['2 Mac','2 Macc','2 Maccabees'],
 'Job':['Job'],'Ps':['Ps','Psalm','Psalms'],'Prov':['Prov','Pr','Proverbs'],'Eccl':['Eccl','Eccles','Qoh','Ecclesiastes'],'Song':['Song','Sg','Cant'],'Wis':['Wis','Wisd','Wisdom'],'Sir':['Sir','Ecclus','Sirach'],
 'Isa':['Isa','Is','Isaiah'],'Jer':['Jer','Jeremiah'],'Lam':['Lam','Lamentations'],'Bar':['Bar','Baruch'],'Ezek':['Ezek','Ez','Ezekiel'],'Dan':['Dan','Daniel'],'Hos':['Hos','Hosea'],'Joel':['Joel','Jl'],
 'Amos':['Amos','Am'],'Obad':['Obad','Ob'],'Jonah':['Jonah','Jon'],'Mic':['Mic','Mi','Micah'],'Nah':['Nah','Nahum'],'Hab':['Hab','Habakkuk'],'Zeph':['Zeph','Zep','Zephaniah'],'Hag':['Hag','Haggai'],'Zech':['Zech','Zec','Zechariah'],'Mal':['Mal','Malachi'],
 'Matt':['Matt','Mt','Matthew'],'Mark':['Mark','Mk'],'Luke':['Luke','Lk'],'John':['John','Jn'],'Acts':['Acts','Ac'],'Rom':['Rom','Rm','Romans'],'1Cor':['1 Cor','1 Corinthians','1Cor'],'2Cor':['2 Cor','2 Corinthians','2Cor'],
 'Gal':['Gal','Galatians'],'Eph':['Eph','Ephesians'],'Phil':['Phil','Phillipians','Philippians'],'Col':['Col','Colossians'],'1Thess':['1 Thess','1 Thes','1 Thessalonians','1Thess'],'2Thess':['2 Thess','2 Thes','2 Thessalonians','2Thess'],
 '1Tim':['1 Tim','1 Timothy','1Tim'],'2Tim':['2 Tim','2 Timothy','2Tim'],'Titus':['Titus','Tit'],'Phlm':['Philem','Phlm','Philemon'],'Heb':['Heb','Hebrews'],'Jas':['Jas','James','Jm'],
 '1Pet':['1 Pet','1 Peter','1 Pt','1Pet'],'2Pet':['2 Pet','2 Peter','2 Pt','2Pet'],'1John':['1 Jn','1 John','1John'],'2John':['2 Jn','2 John','2John'],'3John':['3 Jn','3 John','3John'],'Jude':['Jude'],'Rev':['Rev','Rv','Revelation','Apoc']}
ALIAS={}
for k,v in BOOKS.items():
    for a in v: ALIAS[a]=k
alts='|'.join(sorted((re.escape(a) for a in ALIAS),key=len,reverse=True))
# "Book ch:v" ; optional trailing . after abbrev ("Matt. 28:19")
BOOKRE=re.compile(r'(?<![A-Za-z0-9])('+alts.replace(r'\ ',r'\s?')+r')\.?\s*(\d+)(?:\s*[:.]\s*(\d+[a-z]?(?:\s*[-–]\s*\d+[a-z]?)?(?:\s*,\s*\d+[a-z]?(?:\s*[-–]\s*\d+[a-z]?)?)*)|(?=[\s;,.)]|$))')
def norm_book(raw):
    raw=re.sub(r'\s+',' ',raw.strip().rstrip('.'))
    return ALIAS.get(raw) or ALIAS.get(raw.replace(' ',''))
def vlist(vs):
    vs=vs.replace('G','6').replace('O','0')
    """'5-6, 9' -> [(5,6),(9,9)]"""
    out=[]
    for part in re.split(r'\s*,\s*',vs):
        m=re.match(r'(\d+)[a-z]?(?:\s*[-–]\s*(\d+)[a-z]?)?$',part.strip())
        if m:
            a=int(m.group(1)); b=int(m.group(2) or a); out.append((a,b))
    return out
def osis(book,ch,a,b):
    if a is None: return f'{book}.{ch}'
    return f'{book}.{ch}.{a}' if a==b else f'{book}.{ch}.{a}-{book}.{ch}.{b}'
def find_refs(text):
    """returns list of (book,ch,a,b,raw) ; handles '; 8:11' continuations after a book match"""
    res=[]; pos=0
    for m in BOOKRE.finditer(text):
        book=norm_book(m.group(1))
        if not book: continue
        ch=int(m.group(2)); vs=m.group(3)
        if vs is None: res.append((book,ch,None,None,m.group(0))); end=m.end()
        else:
            for a,b in vlist(vs): res.append((book,ch,a,b,m.group(0)))
            end=m.end()
        # continuations: ; ch:v  or , ch:v
        rest=text[end:]
        while True:
            cm=re.match(r'\s*[;,]\s*(?:[Cc]f\.?\s*)?(\d+)\s*:\s*(\d+[a-z]?(?:\s*[-–]\s*\d+[a-z]?)?(?:\s*,\s*\d+[a-z]?(?:\s*[-–]\s*\d+[a-z]?)?)*)',rest)
            if not cm: break
            ch=int(cm.group(1))
            for a,b in vlist(cm.group(2)): res.append((book,ch,a,b,cm.group(0).strip(' ;,')))
            end+=cm.end(); rest=text[end:]
    return res
def key(book,ch,v,order=None):
    return (book,ch,v)

ROMAN={'i':1,'ii':2,'iii':3,'iv':4,'v':5,'vi':6,'vii':7,'viii':8,'ix':9,'x':10,'xi':11,'xii':12,'xiii':13,'xiv':14,'xv':15,'xvi':16,'xvii':17,'xviii':18,'xix':19,'xx':20,'xxi':21,'xxii':22,'xxiii':23,'xxiv':24,'xxv':25,'xxvi':26,'xxvii':27,'xxviii':28,'xxix':29,'xxx':30,'xxxi':31,'xxxii':32,'xxxiii':33,'xxxiv':34,'xxxv':35,'xxxvi':36,'xxxvii':37,'xxxviii':38,'xxxix':39,'xl':40,'xli':41,'xlii':42,'xliii':43,'xliv':44,'xlv':45,'xlvi':46,'xlvii':47,'xlviii':48,'xlix':49,'l':50}
def rom(x):
    return ROMAN.get(x.lower().replace('l','l'))
ROMBOOK=re.compile(r'(?<![A-Za-z0-9])((?:[123]\s?|[IVX]{1,3}\.?\s)?[A-Z][a-z]{1,10})[.,]?\s+([ivxl]{1,6})\s*[.,]\s*([\dGO]+[a-z]?(?:\s*[-–]\s*[\dGO]+)?(?:\s*,\s*[\dGO]+(?:\s*[-–]\s*[\dGO]+)?)*)')
def find_refs_roman(text):
    res=[]
    for m in ROMBOOK.finditer(text):
        braw=m.group(1).strip()
        braw=re.sub(r'^I\s','1 ',braw); braw=re.sub(r'^II\s','2 ',braw); braw=re.sub(r'^III\s','3 ',braw)
        braw=re.sub(r'^([123])([A-Z])',r'\1 \2',braw)
        book=norm_book(braw)
        if not book: continue
        ch=rom(m.group(2))
        if not ch: continue
        for a,b in vlist(m.group(3)): res.append((book,ch,a,b,m.group(0)))
    return res

ALIAS['Roin']='Rom'; ALIAS['Rotn']='Rom'; ALIAS['Gal']='Gal'
def refs_ver(seg):
    """roman-numeral refs; 'Ver. N' tokens after a ref add verses (merged into ranges only when consecutive)"""
    seg=re.sub(r'\s+',' ',seg)
    ms=list(ROMBOOK.finditer(seg)); out=[]
    for i,m in enumerate(ms):
        rs=find_refs_roman(m.group(0))
        if not rs: continue
        nxt=ms[i+1].start() if i+1<len(ms) else len(seg)
        between=seg[m.end():nxt]
        vers=[int(x) for x in re.findall(r'(?<![A-Za-z])Ver\.\s*(\d+)',between)]
        for r in rs:
            book,ch,a,b,raw=r
            if vers and a is not None and len(rs)==1:
                vs=sorted(set(range(a,b+1))|set(vers))
                groups=[]; cur=[vs[0]]
                for v in vs[1:]:
                    if v==cur[-1]+1: cur.append(v)
                    else: groups.append(cur); cur=[v]
                groups.append(cur)
                for g in groups: out.append((book,ch,g[0],g[-1],raw+(' … Ver. '+', '.join(map(str,vers)))))
            else: out.append((book,ch,a,b,raw))
    return out

ALIAS['Matth']='Matt'; ALIAS['Ephes']='Eph'; ALIAS['Zach']='Zech'; ALIAS['Eccli']='Sir'; ALIAS['Actsii']='Acts'; ALIAS['Philipp']='Phil'; ALIAS['Coloss']='Col'; ALIAS['Tit']='Titus'

ALIAS['Malach']='Mal'; ALIAS['Malac']='Mal'; ALIAS['Lam']='Lam'

for _a,_b in [('I Tim','1Tim'),('II Tim','2Tim'),('I Jn','1John'),('I Cor','1Cor'),('II Cor','2Cor'),('I Pt','1Pet'),('I Thess','1Thess'),('Th','1Thess')]:
    ALIAS[_a]=_b
SINGLE={'Jude','Phlm','2John','3John','Obad'}
_osis0=osis
def osis(book,ch,a,b):
    if book in SINGLE and a is None: return f'{book}.1.{ch}'
    return _osis0(book,ch,a,b)

alts='|'.join(sorted((re.escape(a) for a in ALIAS),key=len,reverse=True))
BOOKRE=re.compile(r'(?<![A-Za-z0-9])('+alts.replace(r'\ ',r'\s?')+r')\.?\s*(\d+)(?:\s*[:.]\s*(\d+[a-z]?(?:\s*[-–]\s*\d+[a-z]?)?(?:\s*,\s*\d+[a-z]?(?:\s*[-–]\s*\d+[a-z]?)?)*)|(?=[\s;,.)]|$))')
