"""Parsers for the STEPBible files behind the whole-Bible word data (TAGNT, TAHOT, TBESG, TBESH, TEGMC, TEHMC).

Source: STEPBible-Data (https://github.com/STEPBible/STEPBible-Data), CC BY 4.0.
Reuses the Greek helpers of greek_common.py (read-only) with the file paths redirected to --src.
"""
import re
import unicodedata
from pathlib import Path

import greek_common as gc

TAGNT_NAMES = ["TAGNT_Mat-Jhn.txt", "TAGNT_Act-Rev.txt"]
TAHOT_NAMES = ["TAHOT_Gen-Deu.txt", "TAHOT_Jos-Est.txt", "TAHOT_Job-Sng.txt", "TAHOT_Isa-Mal.txt"]

OT_OSIS = {
    "Gen": "Gen", "Exo": "Exod", "Lev": "Lev", "Num": "Num", "Deu": "Deut", "Jos": "Josh", "Jdg": "Judg",
    "Rut": "Ruth", "1Sa": "1Sam", "2Sa": "2Sam", "1Ki": "1Kgs", "2Ki": "2Kgs", "1Ch": "1Chr", "2Ch": "2Chr",
    "Ezr": "Ezra", "Neh": "Neh", "Est": "Esth", "Job": "Job", "Psa": "Ps", "Pro": "Prov", "Ecc": "Eccl",
    "Sng": "Song", "Isa": "Isa", "Jer": "Jer", "Lam": "Lam", "Ezk": "Ezek", "Dan": "Dan", "Hos": "Hos",
    "Jol": "Joel", "Amo": "Amos", "Oba": "Obad", "Jon": "Jonah", "Mic": "Mic", "Nam": "Nah", "Hab": "Hab",
    "Zep": "Zeph", "Hag": "Hag", "Zec": "Zech", "Mal": "Mal",
}
NT_OSIS = gc.NT_OSIS


def point_greek_helpers_at(src):
    src = Path(src)
    gc.TAGNT_FILES = [src / n for n in TAGNT_NAMES]
    gc.TBESG_FILE = src / "TBESG.txt"
    gc.TEGMC_FILE = src / "TEGMC.txt"


def lemma_parts(cell):
    out = []
    for p in cell.split(" + "):
        if "=" in p:
            l, g = p.split("=", 1)
            out.append((l.strip(), g.strip()))
        else:
            out.append((p.strip(), None))
    return out


def fix_case(s):
    return s.replace("hebrew", "Hebrew").replace("aramaic", "Aramaic")


# ---------------------------------------------------------------- TAHOT
HEB_REF_RE = re.compile(r"^([1-3]?[A-Za-z]{2,3})\.(\d+)\.(\d+)(?:\((\d+)\.(\d+)\))?#(\d+)=(\S+)$")
_BRACED = re.compile(r"\{([^}]*)\}")


def iter_tahot(src):
    for name in TAHOT_NAMES:
        for line in (Path(src) / name).read_text(encoding="utf-8-sig").splitlines():
            cols = line.split("\t")
            if len(cols) < 5 or "#" not in cols[0]:
                continue
            m = HEB_REF_RE.match(cols[0])
            if not m:
                continue
            cols += [""] * (13 - len(cols))
            book, ch, vs, hch, hvs, pos, typ = m.groups()
            yield {
                "book": book, "chapter": int(ch), "verse": int(vs),
                "hebChapter": int(hch) if hch else None, "hebVerse": int(hvs) if hvs else None,
                "position": int(pos), "type": typ,
                "hebrew": cols[1].strip(), "translit": cols[2].strip(), "english": cols[3].strip(),
                "dStrongs": cols[4].strip(), "grammar": cols[5].strip(),
                "meaningVariants": cols[6].strip(), "spellingVariants": cols[7].strip(),
                "root": cols[8].strip(), "expanded": cols[11].strip(),
            }


def split_hebrew_word(w):
    """TAHOT cells -> (word with '/' separators, punctuation, dStrong parts, root dStrong)."""
    heb = unicodedata.normalize("NFC", w["hebrew"])
    word, _, punct = heb.partition("\\")
    ds = w["dStrongs"].split("\\", 1)[0]
    roots = _BRACED.findall(ds)
    parts = [re.sub(r"[{}+\s]", "", p) for p in ds.split("/")]
    return word, punct.replace("\\", ""), parts, roots[0] if roots else None


def heb_gloss_parts(english):
    return [p.strip() for p in english.split("/")]


# ---------------------------------------------------------------- TBESH
def load_tbesh(src):
    entries = {}
    for line in (Path(src) / "TBESH.txt").read_text(encoding="utf-8-sig").splitlines():
        cols = line.split("\t")
        if len(cols) < 8 or not re.match(r"^H\d{4}", cols[0]):
            continue
        dstrong = re.sub(r"\s*=.*$", "", cols[1]).strip()
        rel = cols[1].split("=", 1)[1].strip() if "=" in cols[1] else ""
        rec = {
            "eStrong": cols[0].strip(), "dStrong": dstrong, "uStrong": cols[2].strip(), "relation": rel,
            "lemma": cols[3].strip(), "stepTranslit": cols[4].strip(), "morph": cols[5].strip(),
            "gloss": cols[6].strip(),
        }
        entries.setdefault(dstrong, rec)
        entries.setdefault(cols[0].strip(), rec)
    return entries


def load_tehmc(src):
    codes = {}
    for line in (Path(src) / "TEHMC.txt").read_text(encoding="utf-8-sig").splitlines():
        m = re.match(r"^(\S+)\t(Function=[^\t]*)", line)
        if not m:
            continue
        fields = {}
        for part in m.group(2).split(";"):
            if "=" not in part:
                continue
            k, v = [x.strip() for x in part.split("=", 1)]
            if v:
                fields[k] = v
        codes[m.group(1)] = fields
    return codes


def human_hebrew_parse(code, tehmc):
    """'HR/Ncfsa' -> 'preposition + noun, common feminine singular absolute' (one expansion per part)."""
    parts = code.split("/")
    lang = parts[0][:1] if parts and parts[0][:1] in ("H", "A") else "H"
    out = []
    for i, p in enumerate(parts):
        key = p if (i == 0 or p in tehmc) else lang + p
        f = tehmc.get(key) or tehmc.get(lang + p)
        if not f:
            out.append(p)
            continue
        bits = []
        func = f.get("Function", "").lower()
        for k in ("Stem", "Form", "Person", "Gender", "Number", "State"):
            if f.get(k):
                bits.append(re.sub(r"\s*\(hence[^)]*\)", "", f[k]).lower())
        out.append(func + (", " + " ".join(bits) if bits else ""))
    return " + ".join(out)


def shard_of(dstrong):
    m = re.match(r"^([GH])0*(\d+)", dstrong)
    return f"{m.group(1)}{int(m.group(2)) // 100:03d}" if m else None
