"""Shared helpers for STEPBible TAGNT / TBESG / TEGMC parsing.

Source data: STEPBible-Data (https://github.com/STEPBible/STEPBible-Data), CC BY 4.0.
"""
import re
import unicodedata
from pathlib import Path

SRC = Path(__file__).resolve().parent.parent / "raw" / "src"
TAGNT_FILES = [SRC / "TAGNT_Mat-Jhn.txt", SRC / "TAGNT_Act-Rev.txt"]
TBESG_FILE = SRC / "TBESG.txt"
TEGMC_FILE = SRC / "TEGMC.txt"

# ---------------------------------------------------------------- transliteration
# SBL Handbook of Style (2nd ed.) "academic" Greek scheme, with two documented
# simplifications: accents are not marked, iota subscript is not marked.
_BASE = {
    "α": "a", "β": "b", "γ": "g", "δ": "d", "ε": "e", "ζ": "z", "η": "ē",
    "θ": "th", "ι": "i", "κ": "k", "λ": "l", "μ": "m", "ν": "n", "ξ": "x",
    "ο": "o", "π": "p", "ρ": "r", "σ": "s", "ς": "s", "τ": "t", "υ": "y",
    "φ": "ph", "χ": "ch", "ψ": "ps", "ω": "ō", "ϲ": "s",
}
_VOWELS = set("αεηιουω")
_DIPHTHONGS = {"αι", "ει", "οι", "υι", "αυ", "ευ", "ηυ", "ου", "ωυ"}
_ROUGH, _SMOOTH, _DIAER, _ISUB = "̔", "̓", "̈", "ͅ"
_NASAL_BEFORE = set("γκξχ")


def _letters(word):
    """Split a Greek word into (base_lower, is_upper, rough, diaeresis) tuples."""
    out = []
    for ch in unicodedata.normalize("NFD", word):
        if unicodedata.combining(ch):
            if not out:
                continue
            base, up, rough, dia = out[-1]
            if ch == _ROUGH:
                rough = True
            elif ch == _DIAER:
                dia = True
            out[-1] = (base, up, rough, dia)
            continue
        low = ch.lower()
        if low in _BASE:
            out.append((low, ch != low, False, False))
        # anything else (punctuation, elision marks) is dropped
    return out


def transliterate(word):
    """SBL-style transliteration of a single Greek word (accents ignored)."""
    L = _letters(word)
    res = []
    i = 0
    while i < len(L):
        base, up, rough, dia = L[i]
        nxt = L[i + 1] if i + 1 < len(L) else None
        # diphthong?
        if base in _VOWELS and nxt and (base + nxt[0]) in _DIPHTHONGS and not nxt[3]:
            pair = base + nxt[0]
            t = {"αι": "ai", "ει": "ei", "οι": "oi", "υι": "ui", "αυ": "au",
                 "ευ": "eu", "ηυ": "ēu", "ου": "ou", "ωυ": "ōu"}[pair]
            if rough or nxt[2]:
                t = "h" + t
            if up or nxt[1]:
                t = t[0].upper() + t[1:]
            res.append(t)
            i += 2
            continue
        if base == "γ" and nxt and nxt[0] in _NASAL_BEFORE:
            t = "n"
        elif base == "ρ" and rough:
            t = "rh"
        elif base == "ρ" and nxt and nxt[0] == "ρ" and nxt[2]:
            t = "r"  # ῤῥ -> rrh (second rho gets rh)
        else:
            t = _BASE[base]
            if base in _VOWELS and rough:
                t = "h" + t
        if up:
            t = t[0].upper() + t[1:]
        res.append(t)
        i += 1
    out = "".join(res)
    if word.rstrip().endswith(("\u1fbd", "\u2019", "'")):
        out += "\u2019"  # elision
    return out


# ---------------------------------------------------------------- morphology
_PARSE_ORDER = ["Tense", "Voice", "Mood", "Form", "Person", "Case", "Gender", "Number"]


def load_tegmc():
    codes = {}
    for line in TEGMC_FILE.read_text(encoding="utf-8-sig").splitlines():
        m = re.match(r"^([A-Z0-9][A-Z0-9-]*)\t(Function=[^\t]*)", line)
        if not m:
            continue
        fields = {}
        extras = []
        for part in m.group(2).split(";"):
            if "=" not in part:
                continue
            k, v = [x.strip() for x in part.split("=", 1)]
            if not v:
                continue
            if k in ("Extra", "Name type", "Original language", "Indeclinable",
                     "Name in Original language"):
                if v not in extras:
                    extras.append(v)
            else:
                fields[k] = v
        codes[m.group(1)] = (fields, extras)
    return codes


def human_parse(code, tegmc):
    """'N-ASF' -> 'noun, accusative feminine singular'."""
    parts = []
    for c in [c.strip() for c in code.split("+")]:
        if c not in tegmc:
            parts.append(c)
            continue
        fields, extras = tegmc[c]
        func = fields.get("Function", "").lower()
        rest = []
        for k in _PARSE_ORDER:
            v = fields.get(k)
            if not v:
                continue
            if k == "Person":
                v = v + " person"
            rest.append(v.lower())
        s = func + (", " + " ".join(rest) if rest else "")
        ex = [e for e in extras if e.lower() not in func]
        if ex:
            s += " (" + "; ".join(e.lower() for e in ex) + ")"
        parts.append(s)
    return " + ".join(parts)


def load_pos_names():
    """TEGMC short codes like 'G:N-F' -> 'noun (feminine)'."""
    out = {}
    for line in TEGMC_FILE.read_text(encoding="utf-8-sig").splitlines():
        cols = line.split("\t")
        if len(cols) >= 3 and re.match(r"^[GHN]:", cols[0]):
            name = cols[2].strip()
            name = re.sub(r"^Greek ", "", name)
            name = re.sub(r" (OR|WITH|JOINED TO) Greek ", lambda m: " " + m.group(1).lower() + " ", name)
            name = name.lower().replace("intjection", "interjection").replace("interogative", "interrogative")
            name = name.replace("demonstrativepronoun", "demonstrative pronoun")
            out[cols[0].strip()] = name
    return out


NT_OSIS = {"Mat": "Matt", "Mrk": "Mark", "Luk": "Luke", "Jhn": "John", "Act": "Acts", "Rom": "Rom",
           "1Co": "1Cor", "2Co": "2Cor", "Gal": "Gal", "Eph": "Eph", "Php": "Phil", "Col": "Col",
           "1Th": "1Thess", "2Th": "2Thess", "1Ti": "1Tim", "2Ti": "2Tim", "Tit": "Titus", "Phm": "Phlm",
           "Heb": "Heb", "Jas": "Jas", "1Pe": "1Pet", "2Pe": "2Pet", "1Jn": "1John", "2Jn": "2John",
           "3Jn": "3John", "Jud": "Jude", "Rev": "Rev"}


# ---------------------------------------------------------------- TAGNT
WORD_RE = re.compile(r"^([1-3]?[A-Z][a-z]{1,2})\.(\d+)\.(\d+)(?:[\[\(\{][^\]\)\}]*[\]\)\}])?#(\d+)=(\S+)$")
_PUNCT_RE = re.compile(r"[\s,.;·:!?¶᾽’'—\-\[\]()]+$")


def split_greek(cell):
    """'Ἰησοῦς· (Iēsous)' -> ('Ἰησοῦς', '·', 'Iēsous', True/False paragraph)."""
    m = re.match(r"^(.*?)\s*\(([^)]*)\)\s*$", cell)
    raw, step_tr = (m.group(1), m.group(2)) if m else (cell, None)
    raw = unicodedata.normalize("NFC", raw.strip())
    para = "¶" in raw
    raw = raw.replace("¶", "")
    word = raw
    punct = ""
    pm = re.search(r"[,.;·\u0387\u037e:!?—]+$", raw)
    if pm:
        word = raw[: pm.start()]
        punct = pm.group(0)
    return word.strip(), punct, step_tr, para


def iter_tagnt():
    """Yield dicts for every word line in TAGNT (both files)."""
    for f in TAGNT_FILES:
        for line in f.read_text(encoding="utf-8-sig").splitlines():
            if not line or line[0] in "#\t$ " or "#" not in line.split("\t", 1)[0]:
                continue
            cols = line.split("\t")
            m = WORD_RE.match(cols[0])
            if not m:
                continue
            book, ch, vs, pos, wtype = m.groups()
            cols += [""] * (17 - len(cols))
            yield {
                "book": book, "chapter": int(ch), "verse": int(vs), "position": int(pos),
                "type": wtype, "greekCell": cols[1], "english": cols[2].strip(),
                "strongGrammar": cols[3].strip(), "lemmaGloss": cols[4].strip(),
                "editions": cols[5].strip(), "meaningVariants": cols[6].strip(),
                "spellingVariants": cols[7].strip(), "spanish": cols[8].strip(),
                "subMeaning": cols[9].strip(), "conjoin": cols[10].strip(),
                "sStrongInstance": cols[11].strip(), "altStrongs": cols[12].strip(),
                "variantNote": cols[13].strip(),
            }


def split_strong_grammar(sg):
    """'G2424G=N-NSM-P' -> [('G2424G','N-NSM-P')]; handles 'A=X + B=Y'."""
    out = []
    for part in sg.split("+"):
        part = part.strip()
        if "=" in part:
            s, g = part.split("=", 1)
            out.append((s.strip(), g.strip()))
        elif part:
            out.append((part, ""))
    return out


def simple_strong(d):
    """'G2424G' -> 'G2424'; 'G0129G' -> 'G129' is NOT applied (keep 4-digit padding)."""
    m = re.match(r"^([GH])(\d+)", d)
    return f"{m.group(1)}{int(m.group(2)):04d}" if m else d


def unpadded(s):
    m = re.match(r"^([GH])0*(\d+)(.*)$", s)
    return f"{m.group(1)}{m.group(2)}{m.group(3)}" if m else s


def in_na28(w):
    return "NA28" in w["editions"].split("+")


def in_tr(w):
    eds = w["editions"].split("+")
    return "TR" in eds or "KJV" in eds


# ---------------------------------------------------------------- TBESG
def clean_html(s):
    s = re.sub(r"<ref='[^']*'>([^<]*)</ref>", r"\1", s)
    s = re.sub(r"<(BR|br|lb)\s*/?>", "\n", s)
    s = re.sub(r"<[^>]+>", "", s)
    s = s.replace("__", "")
    s = re.sub(r"[ \t]+", " ", s)
    s = re.sub(r"\s*\n\s*", "\n", s).strip()
    return s


def load_tbesg():
    """Map dStrong -> entry dict (first match wins)."""
    entries = {}
    for line in TBESG_FILE.read_text(encoding="utf-8-sig").splitlines():
        cols = line.split("\t")
        if len(cols) < 8 or not re.match(r"^G\d{4}", cols[0]):
            continue
        estrong = cols[0].strip()
        dstrong = re.sub(r"\s*=.*$", "", cols[1]).strip()
        rel = cols[1].split("=", 1)[1].strip() if "=" in cols[1] else ""
        ustrong = cols[2].strip()
        e = {
            "eStrong": estrong, "dStrong": dstrong, "uStrong": ustrong,
            "relation": rel, "lemma": cols[3].strip(), "stepTranslit": cols[4].strip(),
            "morph": cols[5].strip(), "gloss": cols[6].strip(), "definitionHtml": cols[7].strip(),
        }
        entries.setdefault(dstrong, e)
        entries.setdefault(estrong, e)
    return entries
