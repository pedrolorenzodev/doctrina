import re, os, sys, json
SC = os.environ["SCR"]
sys.path.insert(0, SC + "/tools")
import longform as LF

META = {}
for l in open(SC + "/yt/meta_all.txt"):
    p = l.rstrip("\n").split("|")
    if len(p) >= 5: META[p[0]] = {"date": p[1], "channel": p[2], "dur": p[3], "title": "|".join(p[4:])}

def sec(s):
    p = [int(x) for x in s.split(":")]
    return p[0] * 3600 + p[1] * 60 + p[2] if len(p) == 3 else p[0] * 60 + p[1]

def cues(vid):
    fn = SC + "/yt/tr/" + vid + ".tr.txt"
    out = []
    for l in open(fn, errors="ignore").read().split("\n")[1:]:
        m = re.match(r"^(\d+(?::\d+)+) (?:\d+ (?:hours?|minutes?|seconds?)(?:, )?)+ ?(.*)$", l)
        if m: out.append((m.group(1), m.group(2)))
    return out

UPLOADED = {"GAOv1HrDwgo", "ZtLBpT1rivk", "i9l9Te1KYak", "gpaTKCiLnOc", "cX-5xOZ-XX4", "1xR56XFWoO0", "oehbbqioVl4", "0D-j8VsJlAg", "ABVJGqBj8rg"}
def BOILER(vid):
    if vid in UPLOADED and not re.match(r"^[A-Z][A-Z .]{2,}:", (cues(vid)[0][1] if cues(vid) else "")):
        return "captions uploaded by Ligonier, not machine-made (proper punctuation; the first cue carries no name): the speaker comes from the video's description or title"
    first = cues(vid)[0][1] if cues(vid) else ""
    if re.match(r"^[A-Z][A-Z .]{2,}:", first):
        return "captions supplied with the video, not machine-made: the first cue carries the speaker's name («" + first.split(":")[0] + ":»); punctuation is the uploader's"
    return "auto-captions: machine transcript, mishearings and punctuation are YouTube's; no speaker labels, so the speaker comes from the video's title and channel"

def fmtdate(d):
    return f"{d[:4]}-{d[4:6]}-{d[6:]}" if len(d) == 8 else d

def cap(vid, start, end, person, role="", note="", old=None):
    m = META[vid]
    cs = [(t, x) for t, x in cues(vid) if sec(start) <= sec(t) <= sec(end)]
    text = " ".join(x for _, x in cs)
    text = re.sub(r"\[[^\]]{1,24}\]", "", text)
    text = re.sub(r"\s+", " ", text).strip()
    nw = len(text.split())
    s0 = cs[0][0]; s1 = cs[-1][0]
    head = (f"- **{person}**, «{m['title']}», channel {m['channel']}{(' (' + role + ')') if role else ''}, YouTube, {fmtdate(m['date'])}, "
            f"https://www.youtube.com/watch?v={vid}&t={sec(s0)}s, minutes {s0} to {s1} (first cue to last cue read), {len(cs)} cues, {nw} words "
            f"`[verified: captions]` `[long-form: trim before public release]` ({BOILER(vid)}{'; ' + note if note else ''}):")
    lines = [head, "  > " + text]
    if old: lines.append(f"  - Earlier short quote (B3, kept until a verifier has read the block above): «{old}»")
    return "\n".join(lines), {"person": person, "work": m["title"], "words": nw, "kind": "caption", "vid": vid}

def web(url, a_start, a_end, person, work, outlet, date, note="", cap_words=900):
    h = LF.fetch(url); paras = LF.paragraphs(h)
    ns = LF.norm(a_start); ne = LF.norm(a_end)
    i = next((k for k, (_, t) in enumerate(paras) if ns in LF.norm(t)), None)
    j = next((k for k, (_, t) in enumerate(paras) if k >= (i or 0) and ne in LF.norm(t)), None)
    if i is None or j is None: raise SystemExit(f"NO MATCH in {url}: start={i} end={j}")
    seg = [t for k, t in paras[i:j + 1]]
    text = "\n\n".join(seg)
    nw = len(text.split())
    def hd(s, n=9): return " ".join(s.split()[:n])
    def tl(s, n=9): return " ".join(s.split()[-n:])
    lines = [f"- **{person}**, «{work}», {outlet}, {date}, {url}, {len(seg)} paragraph(s), {nw} words, from the paragraph beginning «{hd(seg[0])}…» to the one ending «…{tl(seg[-1])}» `[verified: page]` `[long-form: trim before public release]` (speaker per the page's byline{'; ' + note if note else ''}):"]
    lines += ["  > " + s for s in seg]
    return "\n".join(lines), {"person": person, "work": work, "words": nw, "kind": "web", "url": url}

def render(spec, out):
    L = ["Status: draft, NOT verified by Pedro", "", f"# {spec['title']}", "", "## Progress"]
    L += spec["progress"]
    L += ["", "## Tags", "- `[verified: captions]`: the words occur in YouTube's auto-generated captions of that video at the cue times given (read through the logged-in transcript panel, `transcript.js`). Auto-captions are machine-made: mishearings stay in the text, and they carry no speaker labels.",
          "- `[verified: page]`: the text was fetched with `curl` from the URL given and copied from the page's paragraphs.",
          "- `[long-form: trim before public release]`: stored whole while the project is private (DECISIONS 2026-11-01 late night); the locator is exact, so trimming needs no new research.",
          "- AI Spanish: none in this file; every quote is in the original English."]
    stats = []
    for e in spec["entries"]:
        L += ["", "## " + e["heading"]]
        persons = set(); works = set()
        for a in e["arguments"]:
            L += ["", f"**Argument {a['id']} · {a['title']}**"]
            for it in a["items"]:
                txt, st = it
                L.append(txt)
                persons.add(st["person"]); works.add(st["work"])
        if "count" in e:
            L += ["", e["count"]]
        else:
            L += ["", f"**Count and independence.** By person and work: **{len(persons)} person{'s' if len(persons) != 1 else ''}** ({', '.join(sorted(persons))}), {len(works)} work{'s' if len(works) != 1 else ''}. " + e.get("count_tail", "")]
        if e.get("contested"): L.append(e["contested"])
        else: L.append("**Contested within the tradition:** `[not searched]`. **Applies the official teaching:** `[not re-read here]`.")
        stats.append((e["heading"][:60], len(persons), len(works)))
    L += ["", "## Not covered"] + spec.get("not_covered", ["(see the session log)"])
    open(out, "w").write("\n".join(L) + "\n")
    return stats

def web_auto(url, anchor, person, work, outlet, date, note="", cap_words=700):
    h = LF.fetch(url); paras = LF.paragraphs(h)
    i = LF.locate(paras, anchor)
    if i is None: raise SystemExit(f"NO MATCH in {url}")
    kind, a, b = LF.segment(paras, i, url, cap_words)
    seg = [t for k, t in paras[a:b + 1] if not re.match(r"^[A-Z][A-Za-z’' .]{1,28}:$", t)]
    text = "\n\n".join(seg); nw = len(text.split())
    def hd(s, n=9): return " ".join(s.split()[:n])
    def tl(s, n=9): return " ".join(s.split()[-n:])
    lines = [f"- **{person}**, «{work}», {outlet}, {date}, {url}, {len(seg)} paragraph(s), {nw} words, from the paragraph beginning «{hd(seg[0])}…» to the one ending «…{tl(seg[-1])}» `[verified: page]` `[long-form: trim before public release]` (speaker per the page's byline or label{'; ' + note if note else ''}):"]
    lines += ["  > " + s for s in seg]
    return "\n".join(lines), {"person": person, "work": work, "words": nw}
