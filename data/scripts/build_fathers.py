"""Build data/raw/john6.fathers.json.

Primary: SermonIndex "Early Church Fathers - Scripture Citation Index" (Hugging Face,
sermonindex/early-church-fathers, CC BY 4.0 for the alignment).
Enrichment: HistoricalChristianFaith/Commentaries-Database TOML files (public-domain
dedication for the compilation; some excerpts are copyrighted fair-use material), matched by
quote text to recover the original source title/URL, verse range and a date.
"""
import glob
import json
import re
import tomllib
import urllib.parse
from collections import Counter, OrderedDict
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "raw" / "src"
CH = 6
FOCUS = (47, 58)
CUTOFF = 749  # John of Damascus

# English translations known to be public domain (ANF / NPNF / Library of the Fathers / Newman's Catena Aurea)
PD_WORKS = [
    (r"Augustine of Hippo/TRACTATES ON JOHN", "NPNF series 1, vol. 7 (J. Gibb & J. Innes, 1888)"),
    (r"John Chrysostom/Homilies/On John", "NPNF series 1, vol. 14 (1889)"),
    (r"Thomas Aquinas/Catena Aurea", "Catena Aurea, Oxford translation ed. J. H. Newman (1841-45)"),
    (r"Cyril of Alexandria/Commentary on the Gospel of John", "Library of the Fathers, P. E. Pusey & T. Randell (1874-85)"),
    (r"Clement of Alexandria/The Instructor", "ANF vol. 2 (1885)"),
    (r"Cyprian/", "ANF vol. 5 (1886)"),
    (r"Tertullian/", "ANF vol. 3 (1885)"),
    (r"Ignatius of Antioch/", "ANF vol. 1 (1885)"),
    (r"Irenaeus/", "ANF vol. 1 (1885)"),
    (r"Hippolytus of Rome/", "ANF vol. 5 (1886)"),
    (r"Hilary of Poitiers/On the Trinity", "NPNF series 2, vol. 9 (1899)"),
    (r"newadvent.org/fathers/", "ANF/NPNF via New Advent"),
    (r"John Chrysostom/Homilies", "NPNF series 1 (1886-89)"),
    (r"Augustine of Hippo/Letters", "NPNF series 1, vol. 1 (1886)"),
    (r"Augustine of Hippo/City of God", "NPNF series 1, vol. 2 (1887)"),
    (r"Augustine of Hippo/Confessions", "NPNF series 1, vol. 1 (1886)"),
    (r"Augustine of Hippo/On the Trinity", "NPNF series 1, vol. 3 (1887)"),
    (r"Athanasius of Alexandria/(Against the Arians|Four Discourses|Letters|De Decretis)", "NPNF series 2, vol. 4 (1892)"),
    (r"Origen of Alexandria/(Against Celsus|De Principiis|Commentary on the Gospel of John|Commentary on Matthew)", "ANF vols. 4 & 9 (1885-96)"),
    (r"Justin Martyr/", "ANF vol. 1 (1885)"),
    (r"Gregory of Nyssa/(Great Catechism|Against Eunomius|On the Making of Man)", "NPNF series 2, vol. 5 (1893)"),
    (r"Cyril of Jerusalem/Catechetical Lectures", "NPNF series 2, vol. 7 (1894)"),
    (r"Ambrose of Milan/On the Mysteries", "NPNF series 2, vol. 10 (1896)"),
    (r"Basil of Caesarea/(Letters|On the Holy Spirit|Hexaemeron)", "NPNF series 2, vol. 8 (1895)"),
    (r"Jerome/(Letters|Against Jovinianus|Against the Pelagians)", "NPNF series 2, vol. 6 (1893)"),
    (r"Gregory of Nazianzus/(Orations|Oration|Letters)", "NPNF series 2, vol. 7 (1894)"),
    (r"Bede \(as quoted|Alcuin of York \(as quoted", "Catena Aurea (Newman, 1841-45)"),
]
KNOWN_COPYRIGHTED = [
    (r"Augustine of Hippo/Sermons/Sermon 83", "Modern wording (\"God's beggar\"); matches E. Hill (tr.), Works of Saint Augustine III/3 (New City Press, 1991)"),
    (r"books.google.com/books/about/The_Desert_Fathers", "Benedicta Ward (tr.), The Desert Fathers: Sayings of the Early Christian Monks (Penguin, 2003)"),
    (r"Origen of Alexandria/Homilies on Exodus", "Likely R. E. Heine (tr.), Fathers of the Church vol. 71 (1982)"),
    (r"Origen of Alexandria/Treatise on the Passover", "Text discovered 1941; English translations (e.g. R. Daly, 1992) are copyrighted"),
    (r"Ambrose of Milan/On the Blessings of the Patriarchs", "Not in NPNF; English likely Fathers of the Church vol. 65 (1972)"),
    (r"Ambrose of Milan/Letters/Letters 71-80", "Letter 79 is not in NPNF; English likely Fathers of the Church vol. 26 (1954)"),
]


def norm(s):
    return re.sub(r"[^a-z0-9]+", "", (s or "").lower())[:160]


# ---------------------------------------------------------------- HCF index
hcf_meta = {}
for p in glob.glob(str(SRC / "hcf" / "repo" / "*" / "metadata.toml")):
    try:
        hcf_meta[Path(p).parent.name] = tomllib.load(open(p, "rb"))
    except Exception:
        pass

hcf = {}
hcf_counts = Counter()
for p in glob.glob(str(SRC / "hcf" / "repo" / "*" / f"John {CH}_*.toml")):
    father = Path(p).parent.name
    m = re.search(rf"John {CH}_(\d+)(?:-(\d+))?\.toml$", p)
    if not m:
        continue
    a, b = int(m.group(1)), int(m.group(2) or m.group(1))
    for c in tomllib.load(open(p, "rb")).get("commentary", []):
        hcf_counts[a] += 1
        rec = {"father": father, "verseStart": a, "verseEnd": b, **{k: v for k, v in c.items()}}
        hcf.setdefault(norm(c.get("quote", "")), []).append(rec)

# ---------------------------------------------------------------- SermonIndex rows
_full = SRC / "hf_ecf" / "quotation.jsonl"  # 95 MB; deleted after extraction (re-download from Hugging Face)
if _full.exists():
    rows = [json.loads(l) for l in open(_full, encoding="utf-8")]
    rows = [r for r in rows if r["book"] == "JHN" and r["chapter"] == CH]
else:
    rows = json.load(open(SRC / "hf_ecf" / f"john{CH}_quotations.raw.json", encoding="utf-8"))
per_verse = Counter(r["verse"] for r in rows)


def classify(path_or_url, has_url, father_display):
    s = urllib.parse.unquote(urllib.parse.unquote(path_or_url or ""))
    for pat, note in KNOWN_COPYRIGHTED:
        if re.search(pat, s):
            return "likely-copyrighted", note
    for pat, note in PD_WORKS:
        if re.search(pat, s) or re.search(pat, father_display):
            return "public-domain", note
    if not has_url:
        return "unverified", ("No source URL; citation style (ALL-CAPS work + section) matches the Ancient Christian "
                              "Commentary on Scripture (IVP), whose translations are copyrighted. Do not publish until verified.")
    return "unverified", "Source translation not identified; check before publishing."


entries = []
unmatched = 0
for r in rows:
    m = hcf.get(norm(r["quotation"]))
    h = None
    if m:
        same = [x for x in m if r["father"].startswith(x["father"])] or m
        h = next((x for x in same if x["verseStart"] == r["verse"]), same[0])
    else:
        unmatched += 1
    base_father = re.sub(r"\s*\(\(.*\)\)\s*$", "", r["father"]).strip()
    via = None
    vm = re.search(r"\(\((?:as quoted by )?(.*?)\)\)", r["father"])
    if vm:
        via = vm.group(1)
    src_url = (h or {}).get("source_url") or None
    src_path = urllib.parse.unquote(urllib.parse.unquote(src_url or "")).replace(
        "https://historicalchristian.faith/by_father.php?file=", "")
    lic, lic_note = classify(src_path or src_url, bool(src_url), r["father"])
    meta = hcf_meta.get(base_father, {})
    year = (h or {}).get("time") or meta.get("default_year")
    entries.append(OrderedDict([
        ("id", f"si-{r['id']}"),
        ("ref", f"John.{CH}.{r['verse']}"),
        ("verseStart", r["verse"]),
        ("verseEnd", (h or {}).get("verseEnd") or r.get("verse_end") or r["verse"]),
        ("father", base_father),
        ("transmittedVia", via),
        ("work", r["source_work"]),
        ("year", year if year != 9999 else None),
        ("yearBasis", "work date (HCF 'time')" if (h or {}).get("time") else
                      ("HCF default_year for the author (usually death year)" if year else None)),
        ("withinPatristicCutoff", (year is not None and year <= CUTOFF) if year else None),
        ("text", r["quotation"]),
        ("words", r["words"]),
        ("sourceUrl", r["url"]),
        ("originalSourceUrl", src_url),
        ("originalSourceTitle", (h or {}).get("source_title")),
        ("translationLicense", lic),
        ("translationLicenseNote", lic_note),
        ("inFocus", (r.get("verse_end") or r["verse"]) >= FOCUS[0] and r["verse"] <= FOCUS[1]),
    ]))

focus = [e for e in entries if e["inFocus"]]
for e in focus:
    del e["inFocus"]

out = OrderedDict([
    ("book", "John"), ("chapter", CH), ("focusRange", f"John {CH}:{FOCUS[0]}-{FOCUS[1]}"),
    ("sources", [
        OrderedDict([("name", "SermonIndex - Early Church Fathers: Scripture Citation Index"),
                     ("url", "https://huggingface.co/datasets/sermonindex/early-church-fathers"),
                     ("license", "CC BY 4.0 (verse alignment, name normalisation). Underlying texts claimed public domain by the publisher, but see translationLicense per entry."),
                     ("attribution", "SermonIndex, Early Church Fathers: Scripture Citation Index (2026), https://huggingface.co/datasets/sermonindex/early-church-fathers, CC BY 4.0")]),
        OrderedDict([("name", "HistoricalChristianFaith Commentaries-Database (used only to recover source titles, URLs, verse ranges and dates)"),
                     ("url", "https://github.com/HistoricalChristianFaith/Commentaries-Database"),
                     ("license", "Public-domain dedication for the compilation and PD excerpts; some excerpts are copyrighted and included there under a US fair-use notice (not licensed to us).")]),
    ]),
    ("licenseWarning", "SermonIndex's data appears to derive from the HistoricalChristianFaith database, which mixes public-domain "
                       "19th-century translations (ANF/NPNF, Newman's Catena Aurea, Library of the Fathers) with copyrighted modern "
                       "excerpts (e.g. ACCS-style citations without URLs, Benedicta Ward's Desert Fathers). Only publish entries with "
                       "translationLicense = 'public-domain' until the others are verified or replaced by a PD translation."),
    ("countsPerVerseSermonIndex", OrderedDict((str(v), per_verse.get(v, 0)) for v in range(1, 72))),
    ("countsPerVerseHCF", OrderedDict((str(v), hcf_counts.get(v, 0)) for v in range(1, 72))),
    ("totalChapterEntriesSermonIndex", len(rows)),
    ("focusEntryCount", len(focus)),
    ("focusLicenseSummary", dict(Counter(e["translationLicense"] for e in focus))),
    ("unmatchedToHCF", sum(1 for e in focus if e["originalSourceTitle"] is None)),
    ("entries", focus),
])
(ROOT / "raw" / f"john{CH}.fathers.json").write_text(json.dumps(out, ensure_ascii=False, indent=1), encoding="utf-8")
print("chapter rows", len(rows), "focus", len(focus), "unmatched(all)", unmatched)
print(out["focusLicenseSummary"])
print(Counter((e["father"], e["work"][:40], e["translationLicense"]) for e in focus if e["translationLicense"] != "public-domain"))
