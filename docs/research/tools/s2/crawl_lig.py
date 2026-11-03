import re, sys, json, time, html, os, urllib.request, urllib.error
kind = sys.argv[1]; OUTD = sys.argv[2]
OUT = f"{OUTD}/{kind}.jsonl"; UA = "Mozilla/5.0 (research; doctrina)"
def get(u):
    for i in range(4):
        try: return urllib.request.urlopen(urllib.request.Request(u, headers={"User-Agent": UA}), timeout=60).read().decode("utf8", "ignore")
        except urllib.error.HTTPError as e:
            if e.code in (404, 410): return None
            time.sleep(10 * (i + 1))
        except Exception: time.sleep(10 * (i + 1))
    return None
clean = lambda s: re.sub(r"\s+", " ", html.unescape(re.sub(r"<[^>]+>", "", s))).strip()
urls = re.findall(r"<loc>([^<]+)</loc>", get(f"https://learn.ligonier.org/sitemap-{kind}.xml"))
done = set(json.loads(l)["url"] for l in open(OUT)) if os.path.exists(OUT) else set()
f = open(OUT, "a")
for u in urls:
    if u in done: continue
    h = get(u)
    if h is None: f.write(json.dumps({"url": u, "err": 1}) + "\n"); time.sleep(1.2); continue
    t = re.search(r"<title>([^<]*)</title>", h); title = clean(t.group(1)) if t else ""
    body = re.sub(r"(?s)<(script|style|nav|header|footer)[^>]*>.*?</\1>", "", h)
    i = body.find("Min Read"); seg = body[i:] if i >= 0 else body
    paras = [p for p in (clean(x) for x in re.findall(r"(?s)<p[^>]*>(.*?)</p>", seg)) if p]
    f.write(json.dumps({"url": u, "title": title, "paras": paras}) + "\n"); f.flush(); time.sleep(1.2)
print("done")
