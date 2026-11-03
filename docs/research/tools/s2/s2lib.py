import os, re, sys
R = "/Users/pedrolorenzo/Desktop/dev/doctrina"
sys.path.insert(0, R + "/docs/research/tools/b5-apologists/tools")
os.environ.setdefault("SCR", "/private/tmp/claude-501/s2-cache")
os.makedirs(os.environ["SCR"] + "/html", exist_ok=True)
import longform as LF

OUT = R + "/docs/research/passages/"
BEGIN = "<!-- S2-ADDITIONS-BEGIN -->"
END = "<!-- S2-ADDITIONS-END -->"


def entry_no(doc, trad, key):
    t = open(f"{R}/src/content/pages/{doc}/{trad}.es.ts").read()
    for i, m in enumerate(re.findall(r'refs: \[([^\]]*)\]', t), 1):
        if key in m: return i
    return None


def web(url, a_start, a_end, person, work, outlet, date, note="", cut=()):
    h = LF.fetch(url); paras = LF.paragraphs(h)
    ns = LF.norm(a_start); ne = LF.norm(a_end)
    i = next((k for k, (_, t) in enumerate(paras) if ns in LF.norm(t)), None)
    j = next((k for k, (_, t) in enumerate(paras) if k >= (i or 0) and ne in LF.norm(t)), None)
    if i is None or j is None: raise SystemExit(f"NO MATCH in {url}: start={i} end={j} ({a_start[:40]} / {a_end[:40]})")
    seg = [t for k, t in paras[i:j + 1]]
    cutnote = ""
    for c in cut:
        for n, s in enumerate(seg):
            if c in s:
                seg[n] = s[: s.index(c)].rstrip()
                cutnote = f"; the HTML appends an unrelated site box after «{seg[n][-30:]}» in the last paragraph, removed"
    text = "\n\n".join(seg)
    nw = len(text.split())
    hd = lambda s, n=9: " ".join(s.split()[:n])
    tl = lambda s, n=9: " ".join(s.split()[-n:])
    lines = [f"- **{person}**, «{work}», {outlet}, {date}, {url}, {len(seg)} paragraph(s), {nw} words, from the paragraph beginning «{hd(seg[0])}…» to the one ending «…{tl(seg[-1])}» `[verified: page]` `[long-form: trim before public release]` (speaker per the page's byline{'; ' + note if note else ''}{cutnote}):"]
    lines += ["  > " + s for s in seg]
    return "\n".join(lines), {"person": person, "work": work, "words": nw, "kind": "web", "url": url}


def entry_lines(e):
    L = ["", "## " + e["heading"]]
    persons = {}; works = set()
    for a in e["arguments"]:
        L += ["", f"**Argument {a['id']} · {a['title']}**"]
        for txt, st in a["items"]:
            L.append(txt)
            persons[st["person"]] = persons.get(st["person"], 0) + st["words"]; works.add(st["work"])
    if "count" in e: L += ["", e["count"]]
    else: L += ["", f"**Count and independence.** By person and work: **{len(persons)} person{'s' if len(persons) != 1 else ''}** ({', '.join(sorted(persons))}), {len(works)} work{'s' if len(works) != 1 else ''}. " + e.get("count_tail", "")]
    L.append(e.get("contested", "**Contested within the tradition:** `[not searched]`. **Applies the official teaching:** `[not re-read here]`."))
    return L, persons


def render_new(spec, out):
    L = ["Status: draft, NOT verified by Pedro", "", f"# {spec['title']}", "", "## Progress"] + spec["progress"]
    L += ["", "## Tags",
          "- `[verified: captions]`: the words occur in YouTube's auto-generated captions of that video at the cue times given. Auto-captions are machine-made and carry no speaker labels.",
          "- `[verified: page]`: the text was fetched with `curl` from the URL given and copied from the page's paragraphs.",
          "- `[long-form: trim before public release]`: stored whole while the project is private (DECISIONS 2026-11-01 late night); the locator is exact, so trimming needs no new research.",
          "- AI Spanish: none in this file; every quote is in the original English."]
    stats = []
    for e in spec["entries"]:
        lines, persons = entry_lines(e); L += lines
        stats.append((e["heading"][:70], len(persons)))
    L += ["", "## Not covered"] + spec.get("not_covered", ["(see the session log)"])
    open(out, "w").write("\n".join(L) + "\n")
    return stats


def extend(fn, spec):
    path = OUT + fn
    t = open(path).read()
    t = re.sub(re.escape(BEGIN) + r"(?s:.*?)" + re.escape(END) + r"\n?", "", t)
    t = re.sub(r"\n- \*\*Session S2 \(2026-11-03\)[^\n]*", "", t)
    stats = []
    block = [BEGIN, "", "## S2 additions (session S2, 2026-11-03)"]
    for e in spec["entries"]:
        lines, persons = entry_lines(e); block += lines
        stats.append((e["heading"][:70], len(persons)))
    if spec.get("not_covered"): block += ["", "**Not covered after S2:**"] + spec["not_covered"]
    block += ["", END, ""]
    k = t.rfind("\n## Not covered")
    if k < 0: t = t.rstrip("\n") + "\n" + "\n".join(block)
    else: t = t[:k].rstrip("\n") + "\n" + "\n".join(block) + t[k:]
    t = t.replace("\n## Tags", "\n" + "\n".join(spec["progress"]) + "\n\n## Tags", 1)
    open(path, "w").write(t)
    return stats
