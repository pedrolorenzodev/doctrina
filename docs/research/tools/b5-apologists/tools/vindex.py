import re, json, os, sys, glob, html, collections

SC = os.environ["SCR"]
BOOKS = {
 "Gen":["Genesis","Gen","Ge","Gn"],"Exod":["Exodus","Exod","Ex","Exo"],"Lev":["Leviticus","Lev","Lv"],"Num":["Numbers","Num","Nm","Nu"],
 "Deut":["Deuteronomy","Deut","Dt","Deu"],"Josh":["Joshua","Josh","Jos"],"Judg":["Judges","Judg","Jdg"],"Ruth":["Ruth"],
 "1Sam":["1 Samuel","1 Sam","1 Sm"],"2Sam":["2 Samuel","2 Sam","2 Sm"],"1Kgs":["1 Kings","1 Kgs","1 Ki"],"2Kgs":["2 Kings","2 Kgs","2 Ki"],
 "1Chr":["1 Chronicles","1 Chron","1 Chr"],"2Chr":["2 Chronicles","2 Chron","2 Chr"],"Ezra":["Ezra"],"Neh":["Nehemiah","Neh"],"Esth":["Esther","Esth"],
 "Job":["Job"],"Ps":["Psalms","Psalm","Ps","Pss","Psa"],"Prov":["Proverbs","Prov","Pr"],"Eccl":["Ecclesiastes","Eccl","Eccles","Ecc"],"Song":["Song of Solomon","Song of Songs","Song"],
 "Isa":["Isaiah","Isa","Is"],"Jer":["Jeremiah","Jer"],"Lam":["Lamentations","Lam"],"Ezek":["Ezekiel","Ezek","Eze"],"Dan":["Daniel","Dan","Dn"],
 "Hos":["Hosea","Hos"],"Joel":["Joel"],"Amos":["Amos"],"Obad":["Obadiah","Obad"],"Jonah":["Jonah"],"Mic":["Micah","Mic"],"Nah":["Nahum","Nah"],
 "Hab":["Habakkuk","Hab"],"Zeph":["Zephaniah","Zeph"],"Hag":["Haggai","Hag"],"Zech":["Zechariah","Zech"],"Mal":["Malachi","Mal"],
 "Matt":["Matthew","Matt","Mt"],"Mark":["Mark","Mk"],"Luke":["Luke","Lk","Lu"],"John":["John","Jn","Joh"],"Acts":["Acts of the Apostles","Acts","Ac"],
 "Rom":["Romans","Rom","Rm","Ro"],"1Cor":["1 Corinthians","1 Cor","1 Co"],"2Cor":["2 Corinthians","2 Cor","2 Co"],"Gal":["Galatians","Gal","Ga"],
 "Eph":["Ephesians","Eph"],"Phil":["Philippians","Phil","Php"],"Col":["Colossians","Col"],"1Thess":["1 Thessalonians","1 Thess","1 Th"],
 "2Thess":["2 Thessalonians","2 Thess","2 Th"],"1Tim":["1 Timothy","1 Tim","1 Ti"],"2Tim":["2 Timothy","2 Tim","2 Ti"],"Titus":["Titus","Tit"],
 "Phlm":["Philemon","Phlm","Phm"],"Heb":["Hebrews","Heb"],"Jas":["James","Jas","Jm"],"1Pet":["1 Peter","1 Pet","1 Pt"],"2Pet":["2 Peter","2 Pet","2 Pt"],
 "1John":["1 John","1 Jn"],"2John":["2 John","2 Jn"],"3John":["3 John","3 Jn"],"Jude":["Jude"],"Rev":["Revelation","Rev","Rv","Apocalypse"],
}
ORD = {"first":"1","second":"2","third":"3","i":"1","ii":"2","iii":"3"}
NW = {"one":1,"two":2,"three":3,"four":4,"five":5,"six":6,"seven":7,"eight":8,"nine":9,"ten":10,"eleven":11,"twelve":12,"thirteen":13,
 "fourteen":14,"fifteen":15,"sixteen":16,"seventeen":17,"eighteen":18,"nineteen":19,"twenty":20,"thirty":30,"forty":40,"fifty":50,"sixty":60,"seventy":70,"eighty":80,"ninety":90}
def wnum(s):
    s=s.lower().replace("-"," ").split()
    t=0
    for w in s:
        if w in NW: t+=NW[w]
        elif w=="hundred": t=max(t,1)*100
        else: return None
    return t or None
NUMW = r"(?:(?:one hundred|ninety|eighty|seventy|sixty|fifty|forty|thirty|twenty)(?:[- ](?:one|two|three|four|five|six|seven|eight|nine))?|eleven|twelve|thirteen|fourteen|fifteen|sixteen|seventeen|eighteen|nineteen|ten|one|two|three|four|five|six|seven|eight|nine)"
NUM = r"(?:\d{1,3}|" + NUMW + r")"
names = []
for k, vs in BOOKS.items():
    for v in vs: names.append((v, k))
names.sort(key=lambda x: -len(x[0]))
alt = []
for v, k in names:
    m = re.match(r"^([123]) (.*)$", v)
    if m: alt.append(r"(?:%s|%s|%s)\s*%s" % (m.group(1), {"1":"First|I","2":"Second|II","3":"Third|III"}[m.group(1)], "", re.escape(m.group(2))))
    else: alt.append(re.escape(v))
lookup = {}
for v, k in names:
    lookup[v.lower()] = k
    m = re.match(r"^([123]) (.*)$", v)
    if m:
        for p in [m.group(1), {"1":"first","2":"second","3":"third"}[m.group(1)], {"1":"i","2":"ii","3":"iii"}[m.group(1)]]:
            lookup[(p + " " + m.group(2)).lower()] = k
            lookup[(p + m.group(2)).lower()] = k
bk_alt = []
for v, k in names:
    m = re.match(r"^([123]) (.*)$", v)
    if m:
        bk_alt.append(r"(?:[123]|First|Second|Third|I{1,3})\s?" + re.escape(m.group(2)))
    else:
        bk_alt.append(re.escape(v))
BKRE = r"(?P<bk>" + "|".join(bk_alt) + r")"
SEP = r"(?:\s*[:.]\s*|\s*(?:,\s*)?(?:chapter\s+)?)"
REF = re.compile(
    r"\b" + BKRE + r"\.?\s*(?:,\s*)?(?:chapters?\s+)?(?P<ch>" + NUM + r")"
    r"(?:\s*(?::|,?\s*verses?|,?\s*verse|\.)\s*(?P<v1>" + NUM + r")(?:\s*(?:[-–—]|to|through|and)\s*(?P<v2>" + NUM + r"))?)?",
    re.I)

def tonum(s):
    if s is None: return None
    s = s.strip()
    if s.isdigit(): return int(s)
    return wnum(s)

def normbk(s):
    s = re.sub(r"\s+", " ", s.strip().rstrip(".")).lower()
    s = re.sub(r"^(first|i) ?", "1 ", s) if re.match(r"^(first|i)\b", s) and not s.startswith("isa") else s
    s = re.sub(r"^(second|ii) ?", "2 ", s) if re.match(r"^(second|ii)\b", s) else s
    s = re.sub(r"^(third|iii) ?", "3 ", s) if re.match(r"^(third|iii)\b", s) else s
    s = re.sub(r"^([123])(?=[a-z])", r"\1 ", s)
    return lookup.get(s)

def refs_in(text):
    out = []
    for m in REF.finditer(text):
        bk = normbk(m.group("bk"))
        if not bk: continue
        word = m.group("bk").lower()
        # ambiguous short names must be followed by verse numbers to count
        ch = tonum(m.group("ch")); v1 = tonum(m.group("v1")); v2 = tonum(m.group("v2"))
        if ch is None or ch > 150: continue
        if word in ("is", "mark", "job", "acts", "ac", "am", "ex", "num", "pr", "ge", "la", "ro", "jo", "john", "luke") and v1 is None and m.group("ch").isalpha():
            continue
        if v1 is None and m.group("ch").isalpha(): continue
        if v1 is not None and v1 > 176: continue
        out.append((bk, ch, v1, v2, m.start(), m.end()))
    return out

def load_docs():
    docs = []
    # catholic.com corpus
    for fn in sorted(glob.glob(SC + "/cc/corpus/*.txt")):
        t = open(fn, errors="ignore").read()
        m = re.match(r"URL: (.*)\nTITLE: (.*)\n", t)
        if not m: continue
        body = t[m.end():]
        sec = os.path.basename(fn).split("__")[0]
        # drop the site menu: keep from the first line that is long text after boilerplate
        ls = body.split("\n")
        author = ""; title = ""; date = ""
        try:
            k = next(j for j, l in enumerate(ls) if l.strip() == "www.catholic.com")
            for j in range(k, min(k + 40, len(ls) - 2)):
                if ls[j + 1].strip() == "•":
                    author = ls[j].strip(); date = ls[j + 2].strip(); title = ls[j - 1].strip() if j > 0 else ""
                    if not re.match(r"^[A-Z][A-Za-z.' -]+$", author): author = ""
                    break
        except StopIteration:
            pass
        defaults = {"sp": "Joe Heschmeyer (show host)", "cot": "Trent Horn (show host)", "tjap": "Jimmy Akin (show host)", "drk": "Karlo Broussard (show host)"}
        if not author: author = defaults.get(sec, "")
        docs.append({"src": "catholic.com/" + sec, "url": m.group(1), "title": title or m.group(2), "date": date, "author": author, "text": body})
    # YouTube caption files (transcript panel: «mm:ss N seconds text»)
    for fn in sorted(glob.glob(SC + "/yt/tr/*.tr.txt")):
        L = open(fn, errors="ignore").read().split("\n")
        head = L[0].lstrip("# ").split(" | ")
        vid = os.path.basename(fn).split(".")[0]
        lines = []
        for l in L[1:]:
            m = re.match(r"^(\d+(?::\d+)+) (?:\d+ (?:hours?|minutes?|seconds?)(?:, )?)+ ?(.*)$", l)
            if m: lines.append(m.group(1) + " " + m.group(2))
        docs.append({"src": "yt/" + (head[1] if len(head) > 1 else ""), "url": "https://www.youtube.com/watch?v=" + vid, "title": head[0], "date": "", "author": head[1] if len(head) > 1 else "", "text": "\n".join(lines)})
    # WP corpora
    for d in sorted(glob.glob(SC + "/corp/*/")):
        name = os.path.basename(d.rstrip("/"))
        am = {}
        if os.path.exists(d + "authors.json"):
            am = {str(k): v for k, v in json.load(open(d + "authors.json")).items()}
        for fn in sorted(glob.glob(d + "posts-*.json")):
            for p in json.load(open(fn)):
                t = p["content"]["rendered"]
                t = re.sub(r"(?s)<(script|style)[^>]*>.*?</\1>", " ", t)
                t = re.sub(r"</(p|div|li|h\d|blockquote)>", "\n", t)
                t = re.sub(r"<br\s*/?>", "\n", t)
                t = re.sub(r"<[^>]+>", "", t)
                t = html.unescape(t)
                docs.append({"src": name, "url": p["link"], "title": html.unescape(p["title"]["rendered"]), "date": p["date"][:10],
                             "author": am.get(str(p.get("author")), ""), "text": t})
    return docs

def build():
    docs = load_docs()
    idx = collections.defaultdict(list)
    for di, d in enumerate(docs):
        for bk, ch, v1, v2, s, e in refs_in(d["text"]):
            if v1 is None:
                idx[f"{bk}.{ch}.*"].append((di, s))
            else:
                hi = v2 if (v2 and v1 <= v2 <= v1 + 40) else v1
                for v in range(v1, hi + 1):
                    idx[f"{bk}.{ch}.{v}"].append((di, s))
    os.makedirs(SC + "/idx", exist_ok=True)
    json.dump([{k: v for k, v in d.items() if k != "text"} for d in docs], open(SC + "/idx/docs.json", "w"))
    json.dump(idx, open(SC + "/idx/index.json", "w"))
    import pickle
    pickle.dump([d["text"] for d in docs], open(SC + "/idx/texts.pkl", "wb"))
    print("docs", len(docs), "keys", len(idx), "mentions", sum(len(v) for v in idx.values()))
    c = collections.Counter(d["src"] for d in docs)
    for k, v in c.most_common(): print(" ", k, v)

if __name__ == "__main__":
    build()
