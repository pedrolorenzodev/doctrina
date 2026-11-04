"""Build the whole-Bible word data in data/site/words/ from STEPBible-Data.

Usage (from outside the repo's other scripts' assumptions; python3 -I):
  python3 -I data/scripts/build_words.py --src <dir with TAGNT/TAHOT/TBESG/TBESH/TEGMC/TEHMC> \
      [--out data/site/words] [--glosses data/site/words/glosses-es.json] [--worklist <dir>] [--only John.6]

Outputs under --out: manifest.json, morph.json, verses/<Book>/<chapter>.json, lexicon/<shard>.json,
occurrences/<shard>.json. glosses-es.json is an INPUT (own Spanish glosses, AI-drafted, labelled automatic).
"""
import argparse
import hashlib
import json
import re
import sys
from collections import Counter, OrderedDict, defaultdict
from datetime import date
from pathlib import Path

sys.path.insert(0, str(Path(__file__).resolve().parent))
import greek_common as gc  # noqa: E402
import words_common as wc  # noqa: E402

ap = argparse.ArgumentParser()
ap.add_argument("--src", required=True)
ap.add_argument("--out", default=str(Path(__file__).resolve().parent.parent / "site" / "words"))
ap.add_argument("--glosses", default=None)
ap.add_argument("--worklist", default=None)
ap.add_argument("--only", default=None, help="Book.chapter, e.g. John.6 (writes only that chapter's verse file)")
args = ap.parse_args()

SRC = Path(args.src)
OUT = Path(args.out)
GLOSSES_PATH = Path(args.glosses) if args.glosses else OUT / "glosses-es.json"
wc.point_greek_helpers_at(SRC)

glosses = {"es": {}}
if GLOSSES_PATH.exists():
    glosses.update(json.loads(GLOSSES_PATH.read_text(encoding="utf-8")))
ES = glosses["es"]
_SEP = re.compile(r"(\s*:\s*|\s*/\s*|\s*;\s*)")


def missing_atoms(s):
    return [a.strip() for i, a in enumerate(_SEP.split(s)) if i % 2 == 0 and a.strip() and a.strip() not in ES]


def es_of(s):
    r = _es_of(s)
    if r is not None:
        r = re.sub(r"\bustedes mismos\b", "vosotros mismos", r)
        r = re.sub(r"\bUstedes mismos\b", "Vosotros mismos", r)
        r = re.sub(r"\bustedes\b", "vosotros", r)
        r = re.sub(r"\bUstedes\b", "Vosotros", r)
    if r is not None and r.count("¿") > r.count("?"):
        r += "?"
    return r


def _es_of(s):
    if s in ES:
        return ES[s]
    for suffix, es_suffix in ((" [the]", " [el]"), (" <the>", " <el>")):
        if s.endswith(suffix) and len(s) > len(suffix):
            head = _es_of(s[: -len(suffix)])
            return head + es_suffix if head is not None else None
    if s[:1].isupper() and s[1:] and s[:1].lower() + s[1:] in ES:
        r = ES[s[:1].lower() + s[1:]]
        return r[:1].upper() + r[1:]
    out = []
    for i, tok in enumerate(_SEP.split(s)):
        if i % 2:
            out.append(tok)
            continue
        a = tok.strip()
        if not a:
            out.append(tok)
        elif a in ES:
            out.append(tok.replace(a, ES[a], 1))
        else:
            return None
    return "".join(out)

tegmc = gc.load_tegmc()
tehmc = wc.load_tehmc(SRC)
tbesg = gc.load_tbesg()
tbesh = wc.load_tbesh(SRC)
pos_greek = gc.load_pos_names()


def load_pos_hebrew():
    out = {}
    for line in (SRC / "TEHMC.txt").read_text(encoding="utf-8-sig").splitlines():
        cols = line.split("\t")
        if len(cols) >= 3 and re.match(r"^[HAN]:", cols[0]):
            name = re.sub(r"^(Hebrew|Aramaic) ", "", cols[2].strip()).lower()
            out[cols[0].strip()] = name
    return out


pos_hebrew = load_pos_hebrew()

ARTICLE = {("M", "S"): "el", ("M", "P"): "los", ("F", "S"): "la", ("F", "P"): "las", ("N", "S"): "el", ("N", "P"): "los"}


def is_name_greek(dstrong):
    e = tbesg.get(dstrong)
    return bool(e) and pos_greek.get(e["morph"], "").startswith("proper name")


def is_name_hebrew(dstrong):
    e = tbesh.get(dstrong)
    return bool(e) and pos_hebrew.get(e["morph"], "").startswith("proper name")


PREP_ES = {"of": "de", "to": "a", "in": "en", "by": "por", "with": "con", "from": "de", "for": "para",
           "on": "sobre", "at": "en", "than": "que", "over": "sobre"}
ART_ES = {("M", "S"): "el", ("M", "P"): "los", ("F", "S"): "la", ("F", "P"): "las", ("N", "S"): "el", ("N", "P"): "los"}
IRREGULAR_3P = {"dijo": "dijeron", "vino": "vinieron", "dio": "dieron", "fue": "fueron", "hizo": "hicieron",
                "tuvo": "tuvieron", "supo": "supieron", "puso": "pusieron", "pudo": "pudieron", "trajo": "trajeron",
                "vio": "vieron", "quiso": "quisieron", "cayó": "cayeron", "oyó": "oyeron", "creyó": "creyeron"}
DS_OVERRIDES = {("H3588", "for"): "porque", ("H5971", "people"): "pueblo", ("G1063", "for"): "porque", ("G1063", "For"): "Porque"}
PLURAL_2P_FIXES = {"tu": "de vosotros", "Tu": "De vosotros", "tuyo": "vuestro", "tuya": "vuestra", "contigo": "con vosotros",
                   "Contigo": "Con vosotros", "ustedes mismos": "vosotros mismos", "ustedes": "vosotros", "Ustedes": "Vosotros"}
PRESENT_3S_IRREGULAR = {"es": "son", "va": "van", "ha": "han", "está": "están", "hay": "hay", "da": "dan", "sabe": "saben", "ve": "ven"}
FEMININE_NOUNS = {"mujer", "luz", "noche", "sangre", "muerte", "tierra", "carne", "gente", "fuente", "serpiente", "cruz", "paz", "voz", "vez",
                  "nube", "tarde", "ley", "fe", "sed", "leche", "mente", "parte", "sal", "miel", "piel", "flor", "razón", "mano", "madre",
                  "imagen", "virgen", "señal", "cárcel", "pared", "red", "sombra", "isla", "base", "clase", "llave", "hambre", "nieve",
                  "lluvia", "montaña", "calle", "torre", "mañana", "tribu", "vid", "capital", "suerte", "región", "especie", "enfermedad", "salud", "ciudad", "verdad", "edad", "tempestad"}
MASCULINE_A_NOUNS = {"día", "profeta", "mapa", "planeta", "tema", "problema", "poema", "sistema", "idioma", "clima", "programa", "pijama",
                     "cometa", "escriba", "patriarca", "monarca", "poeta", "diploma", "dogma", "enigma", "trauma", "teorema", "esquema", "sofá", "guía", "nada"}


def base_id(d):
    m = re.match(r"^([GH]\d+)[A-Z]?$", d)
    return m.group(1) if m else d


def hebrew_verb_blocks_es(code):
    if len(code) > 1 and code[0] in "HA" and code[1].isupper():
        code = code[1:]
    if code[:1] != "V" or len(code) < 3 or code[2] not in "pifwvhjqc":
        return False
    if code[2] in "vhj":
        return True
    if code[2] == "c":
        return len(code) >= 6
    return len(code) >= 6 and code[3] == "2" and code[5] == "p"


STRESSED_A_FEMININE = {"arca", "agua", "alma", "águila", "hacha", "hambre", "arma", "ala", "aula", "asa", "ave", "hada", "área", "arpa",
                       "alba", "ancla", "ascua", "ansia", "aya", "arte", "ánima"}
MASCULINE_ION = {"avión", "camión", "millón", "guión", "embrión", "gorrión", "centurión", "aguijón", "sermón", "corazón", "campeón",
                 "montón", "pendón", "bastión", "escorpión", "león", "faraón", "alción", "histrión"}
FEMININE_ITA_EXCEPTIONS = {"cita", "visita", "ermita", "dieta", "pita"}


def _singular_candidates(first):
    cands = [first]
    if first.endswith("iones"):
        cands.append(first[:-5] + "ión")
    if first.endswith("es"):
        cands.append(first[:-2])
    if first.endswith("s"):
        cands.append(first[:-1])
    return cands


def spanish_gender(noun_es):
    first = re.sub(r"[\[\]<>]", "", noun_es.split("/")[0]).split(" ")[0].lower()
    if not first:
        return "M"
    cands = _singular_candidates(first)
    for w in cands:
        if w in FEMININE_NOUNS or w in STRESSED_A_FEMININE:
            return "F"
        if w in MASCULINE_A_NOUNS:
            return "M"
    for w in cands:
        if w.endswith("ita") and w not in FEMININE_ITA_EXCEPTIONS:
            return "M"
        if w.endswith(("ción", "sión", "dad", "tad", "tud", "umbre", "itis")):
            return "F"
        if w.endswith("ión"):
            return "M" if w in MASCULINE_ION else "F"
        if w.endswith("a"):
            return "F"
        if w.endswith("o"):
            return "M"
    return "M"


def hebrew_article(noun_es, num):
    gender = spanish_gender(noun_es)
    first = re.sub(r"[\[\]<>]", "", noun_es.split("/")[0]).split(" ")[0].lower()
    if gender == "F" and num == "S" and first in STRESSED_A_FEMININE:
        return "el"
    return ART_ES[(gender, num)]


def hebrew_next_number(code):
    if len(code) > 1 and code[0] in "HA" and code[1].isupper():
        code = code[1:]
    if code[:1] == "V" and len(code) >= 5 and code[2] in "rs":
        return "P" if code[4] == "p" else "S"
    if code[:1] in "NA" and len(code) >= 4 and code[3] in "sp":
        return "P" if code[3] == "p" else "S"
    return "S"


def greek_case_number_gender(morph):
    m = re.match(r"^[A-Z]+-([NGDAV])([SP])([MFN])", morph)
    return m.groups() if m else None


def article_phrase(en, morph):
    cng = greek_case_number_gender(morph) if morph.startswith("T-") else None
    if not cng:
        return None
    _, num, gen = cng
    m = re.match(r"^(?:(of|to|in|by|with|from|for|on|at|than|over) )?(the)$", en, re.I)
    if not m:
        return None
    art = ART_ES[(gen, num)]
    prep = PREP_ES.get(m.group(1).lower()) if m.group(1) else None
    if prep is None:
        out = art
    elif prep == "de" and art == "el":
        out = "del"
    elif prep == "a" and art == "el":
        out = "al"
    else:
        out = f"{prep} {art}"
    return out[:1].upper() + out[1:] if en[:1].isupper() else out


def plural_preterite(es):
    low = es[:1].lower() + es[1:]
    if low in IRREGULAR_3P:
        out = IRREGULAR_3P[low]
    elif low.endswith("yó"):
        out = low[:-2] + "yeron"
    elif low.endswith("ió"):
        out = low[:-2] + "ieron"
    elif low.endswith("ó"):
        out = low[:-1] + "aron"
    else:
        return es
    return out[:1].upper() + out[1:] if es[:1].isupper() else out


def pluralize_3s_verb(es, morph):
    m = re.match(r"^V-\d?[PIFARL][AMPEDONQ]([IMSONP])-3P$", morph)
    if not m or m.group(1) == "M":
        return None
    words = es.split(" ")
    if len(words) == 3 and words[0] == "se" and words[1].isalpha():
        head = pluralize_3s_verb_word(words[1])
        return None if head is None else " ".join(["se", head] + words[2:])
    if len(words) == 2 and words[0] == "se":
        head = pluralize_3s_verb_word(words[1])
        return None if head is None else f"se {head}"
    if len(words) != 1:
        return None
    return pluralize_3s_verb_word(es)


def pluralize_3s_verb_word(es):
    low = es[:1].lower() + es[1:]
    if low.endswith(("ó", "yó", "ió")) or low in IRREGULAR_3P:
        return plural_preterite(es)
    out = None
    if low in PRESENT_3S_IRREGULAR:
        out = PRESENT_3S_IRREGULAR[low]
    elif low.endswith("á"):
        out = low + "n"
    elif low.endswith(("aba", "ía")):
        out = low + "n"
    elif low.endswith(("a", "e")):
        out = low + "n"
    elif low.endswith(("ron", "ran", "ren", "an", "en", "ndo", "ar", "er", "ir")):
        return es
    if out is None:
        return None
    return out[:1].upper() + out[1:] if es[:1].isupper() else out


def name_es(en):
    m = re.match(r"^(of |to )?(.+)$", en)
    prefix = {"of ": "de ", "to ": "a ", None: ""}[m.group(1)]
    name = m.group(2)
    if not re.match(r"^\[?[A-Z][^\s\[\]—]*\]?$", name):
        return None
    inner = name.strip("[]")
    if inner not in ES and inner.endswith("s") and inner[:-1] in ES:
        single = ES[inner[:-1]]
        bare = single + ("s" if single[-1] in "aeiouáéíóú" else "es")
    else:
        bare = ES.get(inner, inner)
    return prefix + (f"[{bare}]" if name.startswith("[") else bare)


def greek_word_es(en, morph, dstrong=""):
    single = dstrong and " + " not in dstrong
    if single and (dstrong, en) in DS_OVERRIDES:
        return DS_OVERRIDES[(dstrong, en)]
    art = article_phrase(en, morph)
    if art:
        return art
    cng = greek_case_number_gender(morph)
    if cng and en in ("all", "All", "every", "Every") and morph.startswith("A-"):
        _, num, gen = cng
        es = ("todas" if gen == "F" else "todos") if num == "P" else ("toda" if gen == "F" else "todo")
        return es.capitalize() if en[0].isupper() else es
    r = es_of(en)
    if r is None and single and is_name_greek(dstrong):
        r = name_es(en)
    if r is None:
        return None
    if morph.startswith("V-") and morph.endswith("-3P"):
        r = pluralize_3s_verb(r, morph)
        if r is None:
            return None
    if re.search(r"(^|-)2P$", morph) or re.match(r"^P-2[NGDA]P$", morph):
        if re.search(r"(^|\s)(tú|Tú)\s", r) or morph.startswith("V-"):
            return None
        r = PLURAL_2P_FIXES.get(r, r)
        r = re.sub(r"\b(ti|tú)\b", "vosotros", r)
        r = re.sub(r"\b(Ti|Tú)\b", "Vosotros", r)
        r = re.sub(r"\beres\b", "sois", r)
    if r.count("[") != r.count("]"):
        return None
    return r


def in_na28_any(w):
    return any(re.match(r"^NA28([»«]\d+)?$", t) for t in w["editions"].split("+"))


def clean_gloss(s):
    return re.sub(r"[,.;:·!?]+$", "", s or "").strip()


# ------------------------------------------------------------------ Greek words
greek_verses = defaultdict(lambda: defaultdict(lambda: {"words": [], "omitted": [], "para": False}))
nt_n = Counter()
nt_nany = Counter()
nt_refs = defaultdict(lambda: defaultdict(list))
nt_forms = defaultdict(Counter)
nt_fm = defaultdict(lambda: defaultdict(Counter))
greek_morphs = {}
greek_used = set()

for w in gc.iter_tagnt():
    osis = wc.NT_OSIS[w["book"]]
    sg = gc.split_strong_grammar(w["strongGrammar"])
    greek, punct, step_tr, para = gc.split_greek(w["greekCell"])
    lp = wc.lemma_parts(w["lemmaGloss"])
    morph = " + ".join(g for _, g in sg)
    dstrong = " + ".join(d for d, _ in sg)
    ver = greek_verses[(osis, w["chapter"])][w["verse"]]
    if para:
        ver["para"] = True
    for d, _ in sg:
        nt_nany[d] += 1
        greek_used.add(d)
    en = clean_gloss(w["english"])
    if in_na28_any(w):
        ref = f"{w['chapter']}.{w['verse']}"
        for d, g in sg:
            nt_fm[d][greek][g] += 1
        for d, _ in sg:
            nt_n[d] += 1
            lst = nt_refs[d][osis]
            if not lst or lst[-1] != ref:
                lst.append(ref)
            nt_forms[d][greek] += 1
        item = OrderedDict([
            ("g", greek), ("p", punct or ""), ("t", gc.transliterate(greek)),
            ("l", " + ".join(l for l, _ in lp)),
            ("lt", " + ".join(gc.transliterate(l.split(",")[-1].strip()) for l, _ in lp)),
            ("s", dstrong), ("m", morph),
            ("en", en), ("es", greek_word_es(en, morph, dstrong)),
        ])
        if w["meaningVariants"]:
            item["var"] = w["meaningVariants"]
        ver["words"].append(item)
        if morph not in greek_morphs:
            greek_morphs[morph] = wc.fix_case(gc.human_parse(morph, tegmc))
    else:
        after = ver["words"][-1]["g"] if ver["words"] else None
        ver["omitted"].append(OrderedDict([
            ("g", greek), ("t", gc.transliterate(greek)), ("en", en), ("es", greek_word_es(en, morph, dstrong)),
            ("eds", w["editions"].split("+") if w["editions"] else []), ("after", after),
        ]))

# ------------------------------------------------------------------ Hebrew words
heb_verses = defaultdict(lambda: defaultdict(lambda: {"words": []}))
ot_n = Counter()
ot_refs = defaultdict(lambda: defaultdict(list))
ot_forms = defaultdict(Counter)
ot_fm = defaultdict(lambda: defaultdict(Counter))
heb_morphs = {}
heb_used = set()
heb_part_counts = Counter()
heb_es_missing = Counter()

for w in wc.iter_tahot(SRC):
    osis = wc.OT_OSIS[w["book"]]
    word, punct, parts, root = wc.split_hebrew_word(w)
    ver = heb_verses[(osis, w["chapter"])][w["verse"]]
    if w["hebChapter"] is not None:
        ver["heb"] = f"{w['hebChapter']}.{w['hebVerse']}"
    ref = f"{w['chapter']}.{w['verse']}"
    for p in parts:
        d = p
        if not d:
            continue
        heb_used.add(d)
        ot_n[d] += 1
        lst = ot_refs[d][osis]
        if not lst or lst[-1] != ref:
            lst.append(ref)
    if root:
        ot_forms[root][re.sub(r"[/]", "", word)] += 1
        root_grammar = w["grammar"].split("/")
        if len(root_grammar) == len(parts) and root in parts:
            ot_fm[root][re.sub(r"[/]", "", word)][root_grammar[parts.index(root)]] += 1
    gparts = wc.heb_gloss_parts(w["english"])
    es_parts = []
    mparts = w["grammar"].split("/")
    aligned = len(gparts) == len(parts)
    is_article = [g in ("the", "[the]", "<the>") and aligned for g in gparts]
    fused = [g[:-4] if (aligned and g.endswith(" the") and not is_article[k] and k + 1 < len(gparts)) else None for k, g in enumerate(gparts)]
    for i, g in enumerate(gparts):
        e = None
        if is_article[i]:
            es_parts.append(None)
            continue
        if aligned and (base_id(parts[i]), g) in DS_OVERRIDES:
            e = DS_OVERRIDES[(base_id(parts[i]), g)]
        else:
            e = es_of(g)
            if e is None and aligned and is_name_hebrew(parts[i]):
                e = name_es(g)
        if e is not None and aligned and i < len(mparts) and hebrew_verb_blocks_es(mparts[i]):
            e = None
        if e is not None and e.count("[") != e.count("]"):
            e = None
        es_parts.append(e)
    for i, g in enumerate(gparts):
        if not is_article[i] and fused[i] is None:
            continue
        nxt = es_parts[i + 1] if i + 1 < len(es_parts) else None
        if nxt is None:
            if fused[i] is not None:
                es_parts[i] = None
            continue
        code = mparts[i + 1] if i + 1 < len(mparts) else ""
        art = hebrew_article(nxt, hebrew_next_number(code))
        if is_article[i]:
            es_parts[i] = {"the": art, "[the]": f"[{art}]", "<the>": f"<{art}>"}[g]
            continue
        prep = es_of(fused[i])
        if prep is None or "[" in prep or "<" in prep or fused[i] != fused[i].strip():
            continue
        if prep == "de" and art == "el":
            es_parts[i] = "del"
        elif prep == "a" and art == "el":
            es_parts[i] = "al"
        else:
            es_parts[i] = f"{prep} {art}"
        if g[:1].isupper():
            es_parts[i] = es_parts[i][:1].upper() + es_parts[i][1:]
    for g, e in zip(gparts, es_parts):
        heb_part_counts[g] += 1
        if e is None:
            heb_es_missing[g] += 1
    item = OrderedDict([
        ("g", word), ("p", punct), ("t", w["translit"]),
        ("s", "/".join(parts)), ("r", root), ("m", w["grammar"]),
        ("en", w["english"]), ("es", "/".join(es_parts) if all(e is not None for e in es_parts) else None),
    ])
    if w["type"] != "L":
        item["ty"] = w["type"]
    if w["meaningVariants"]:
        item["var"] = w["meaningVariants"]
    ver["words"].append(item)
    if w["grammar"] not in heb_morphs:
        heb_morphs[w["grammar"]] = wc.human_hebrew_parse(w["grammar"], tehmc)

# ------------------------------------------------------------------ lexicon
def trim_def(full):
    lines = [l.strip() for l in full.split("\n") if l.strip()]
    if len(lines) > 1:
        lines = lines[1:]
    return "\n".join(l for l in lines if l != "(AS)")


lexicon = {}
missing = {"G": [], "H": []}
for d in sorted(greek_used):
    e = tbesg.get(d) or tbesg.get(gc.simple_strong(d))
    if not e:
        missing["G"].append(d)
        continue
    full = gc.clean_html(e["definitionHtml"])
    lexicon[d] = OrderedDict([
        ("lemma", e["lemma"]), ("tr", gc.transliterate(e["lemma"])), ("strong", gc.simple_strong(d)),
        ("pos", wc.fix_case(pos_greek.get(e["morph"], e["morph"]))),
        ("gloss", e["gloss"]), ("glossEs", DS_OVERRIDES.get((base_id(d), e["gloss"])) or es_of(e["gloss"]) or (e["gloss"] if is_name_greek(d) else None)),
        ("def", trim_def(full)), ("as", e["definitionHtml"].rstrip().endswith("(AS)")),
        ("formOf", e["uStrong"] if "Form" in e["relation"] else None),
        ("n", nt_n.get(d, 0)), ("nAny", nt_nany.get(d, 0)),
    ])
for d in sorted(heb_used):
    e = tbesh.get(d)
    if not e:
        missing["H"].append(d)
        continue
    lexicon[d] = OrderedDict([
        ("lemma", e["lemma"]), ("tr", e["stepTranslit"]), ("strong", gc.simple_strong(d)),
        ("pos", pos_hebrew.get(e["morph"], e["morph"])),
        ("gloss", e["gloss"]), ("glossEs", DS_OVERRIDES.get((base_id(d), e["gloss"])) or es_of(e["gloss"]) or (e["gloss"] if is_name_hebrew(d) else None)),
        ("def", None), ("as", False),
        ("formOf", e["uStrong"] if "Form" in e["relation"] else None),
        ("n", ot_n.get(d, 0)), ("nAny", ot_n.get(d, 0)),
    ])

# ------------------------------------------------------------------ occurrences
occurrences = {}
for d in sorted(set(nt_nany) | set(ot_n)):
    if d.startswith("G"):
        refs, forms, n, nany = nt_refs.get(d, {}), nt_forms.get(d, {}), nt_n.get(d, 0), nt_nany.get(d, 0)
        fm = nt_fm.get(d, {})
    else:
        refs, forms, n, nany = ot_refs.get(d, {}), ot_forms.get(d, {}), ot_n.get(d, 0), ot_n.get(d, 0)
        fm = ot_fm.get(d, {})
    occurrences[d] = OrderedDict([
        ("n", n), ("nAny", nany), ("v", sum(len(x) for x in refs.values())),
        ("b", {b: x for b, x in refs.items()}),
        ("f", dict(sorted(forms.items(), key=lambda kv: (-kv[1], kv[0])))),
        ("fm", {f: dict(c.most_common()) for f, c in sorted(fm.items(), key=lambda kv: (-forms.get(kv[0], 0), kv[0]))}),
    ])


# ------------------------------------------------------------------ write
def dump(path, obj):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(obj, ensure_ascii=False, separators=(",", ":")), encoding="utf-8")


def slim_greek_word(item):
    d = dict(item)
    s = d["s"]
    lex = lexicon.get(s)
    if lex is not None:
        if d["l"] == lex["lemma"]:
            del d["l"]
        if d["lt"] == lex["tr"]:
            del d["lt"]
    if d["es"] is None:
        del d["es"]
    return d


def slim_heb_word(item):
    d = dict(item)
    if d["es"] is None:
        del d["es"]
    if not d["p"]:
        del d["p"]
    return d


only = tuple(args.only.rsplit(".", 1)) if args.only else None
n_files = 0
for (book, ch), vs in list(greek_verses.items()) + list(heb_verses.items()):
    if only and (book, str(ch)) != only:
        continue
    is_greek = (book, ch) in greek_verses
    out_v = {}
    for v in sorted(vs):
        rec = vs[v]
        if is_greek:
            o = {"words": [slim_greek_word(x) for x in rec["words"]]}
            if rec["omitted"]:
                o["omitted"] = [{k: x for k, x in om.items() if not (k == "es" and x is None)} for om in rec["omitted"]]
            if rec["para"]:
                o["para"] = True
        else:
            o = {"words": [slim_heb_word(x) for x in rec["words"]]}
            if rec.get("heb"):
                o["heb"] = rec["heb"]
        out_v[str(v)] = o
    dump(OUT / "verses" / book / f"{ch}.json", {"book": book, "chapter": ch, "lang": "grc" if is_greek else "hbo", "verses": out_v})
    n_files += 1

by_shard = defaultdict(dict)
for d, e in lexicon.items():
    by_shard[wc.shard_of(d)][d] = e
if not only:
    for sh, ents in by_shard.items():
        dump(OUT / "lexicon" / f"{sh}.json", ents)
    occ_shard = defaultdict(dict)
    for d, e in occurrences.items():
        occ_shard[wc.shard_of(d)][d] = e
    for sh, ents in occ_shard.items():
        dump(OUT / "occurrences" / f"{sh}.json", ents)
    dump(OUT / "morph.json", {"greek": greek_morphs, "hebrew": heb_morphs})

    def sha(p):
        return hashlib.sha256((SRC / p).read_bytes()).hexdigest()

    manifest = OrderedDict([
        ("status", "draft, NOT verified by Pedro"),
        ("generated", str(date.today())),
        ("generator", "data/scripts/build_words.py"),
        ("source", OrderedDict([
            ("name", "STEPBible-Data (TAGNT, TAHOT, TBESG, TBESH, TEGMC, TEHMC)"),
            ("url", "https://github.com/STEPBible/STEPBible-Data"),
            ("license", "CC BY 4.0"),
            ("attribution", "Data from STEP Bible (www.STEPBible.org), based on work at Tyndale House Cambridge. CC BY 4.0."),
            ("downloaded", "2026-11-01"),
            ("files", {n: sha(n) for n in wc.TAGNT_NAMES + wc.TAHOT_NAMES + ["TBESG.txt", "TBESH.txt", "TEGMC.txt", "TEHMC.txt"]}),
        ])),
        ("changes", [
            "Occurrences carry fm: each form with the morphology codes of its occurrences and their counts (the word page's table of forms).",
            "Greek and Hebrew split from punctuation; morphology codes expanded to English through TEGMC and TEHMC; lexicon definitions cleaned of markup.",
            "Greek words: l and lt are written only when they differ from the lexicon entry's lemma and transliteration; parse is in morph.json.",
            "Hebrew lexicon definitions are NOT included (def is null): TBESH's header says its definitions are Online Bible's abridged BDB and that permission must be asked before use.",
            "Spanish glosses (glossEs, es) are Doctrina's own, AI-drafted from STEPBible's English glosses and automatic (not reviewed); OpenGNT's Spanish column is not used.",
        ]),
        ("counts", OrderedDict([
            ("greekChapters", len(greek_verses)), ("hebrewChapters", len(heb_verses)),
            ("greekWordsNA28", sum(len(v["words"]) for ch in greek_verses.values() for v in ch.values())),
            ("greekWordsOmittedOtherEditions", sum(len(v["omitted"]) for ch in greek_verses.values() for v in ch.values())),
            ("greekDStrongTagsNA28", sum(nt_n.values())),
            ("hebrewWords", sum(len(v["words"]) for ch in heb_verses.values() for v in ch.values())),
            ("hebrewDStrongTags", sum(ot_n.values())),
            ("lexiconGreek", sum(1 for d in lexicon if d.startswith("G"))),
            ("lexiconHebrew", sum(1 for d in lexicon if d.startswith("H"))),
            ("lexiconMissing", {k: v for k, v in missing.items()}),
        ])),
    ])
    dump(OUT / "manifest.json", manifest)

if args.worklist:
    wl = Path(args.worklist)
    wl.mkdir(parents=True, exist_ok=True)

    def write_atoms(name, weighted):
        atoms = Counter()
        for text, w in weighted:
            for a in missing_atoms(text):
                atoms[a] += w
        (wl / name).write_text("\n".join(f"{a}\t{c}" for a, c in atoms.most_common()) + "\n", encoding="utf-8")

    for L in "GH":
        write_atoms(f"lexicon-{L}-atoms.tsv", [(e["gloss"], max(e["n"], 1)) for d, e in lexicon.items() if d[0] == L and e["glossEs"] is None])
    wcount = Counter()
    for (book, ch), vs in greek_verses.items():
        for v in vs.values():
            for x in v["words"]:
                if x["es"] is None:
                    wcount[x["en"]] += 1
    write_atoms("words-greek-atoms.tsv", list(wcount.items()))
    write_atoms("parts-hebrew-atoms.tsv", list(heb_es_missing.items()))

print("greek chapters", len(greek_verses), "hebrew chapters", len(heb_verses), "files", n_files)
print("lexicon", len(lexicon), "missing", {k: len(v) for k, v in missing.items()}, missing["G"][:5], missing["H"][:5])
print("glossEs", sum(1 for e in lexicon.values() if e["glossEs"]), "of", len(lexicon))
