"""Carries the WEB's own red-letter marks to the other editions through Strong's numbers.

Usage:
  python3 data/scripts/red-letters-align.py own <usfm.zip> <edition-id>            phrases the edition itself marks with \\wj
  python3 data/scripts/red-letters-align.py align <web.zip> <usfm.zip> <edition-id>  phrases computed by alignment with the WEB
  python3 data/scripts/red-letters-align.py consensus <web.zip> <kjv.zip> <usfm.zip> <edition-id>  what the WEB's and the KJV's marks both give
  python3 data/scripts/red-letters-align.py check <web.zip> <kjv.zip>              precision and recall of the alignment against the KJV's own marks

Writes data/corpus/bibles/<edition-id>.red.json for `own` and `consensus` (read by the site) and <edition-id>.red.computed.json for `align` (the
single-source experiment, not read by the site); the shape is web-c.red.json's: verse key -> phrases.
"""
import difflib
import json
import re
import sys
import zipfile
from pathlib import Path

BOOKS = {
    "GEN": "Gen", "EXO": "Exod", "LEV": "Lev", "NUM": "Num", "DEU": "Deut", "JOS": "Josh", "JDG": "Judg", "RUT": "Ruth",
    "1SA": "1Sam", "2SA": "2Sam", "1KI": "1Kgs", "2KI": "2Kgs", "1CH": "1Chr", "2CH": "2Chr", "EZR": "Ezra",
    "NEH": "Neh", "EST": "Esth", "JOB": "Job", "PSA": "Ps", "PRO": "Prov", "ECC": "Eccl", "SNG": "Song", "ISA": "Isa",
    "JER": "Jer", "LAM": "Lam", "EZK": "Ezek", "DAN": "Dan", "HOS": "Hos", "JOL": "Joel", "AMO": "Amos", "OBA": "Obad",
    "JON": "Jonah", "MIC": "Mic", "NAM": "Nah", "HAB": "Hab", "ZEP": "Zeph", "HAG": "Hag", "ZEC": "Zech", "MAL": "Mal",
    "TOB": "Tob", "JDT": "Jdt", "WIS": "Wis", "SIR": "Sir", "BAR": "Bar", "1MA": "1Macc", "2MA": "2Macc",
    "MAT": "Matt", "MRK": "Mark", "LUK": "Luke", "JHN": "John", "ACT": "Acts", "ROM": "Rom", "1CO": "1Cor", "2CO": "2Cor",
    "GAL": "Gal", "EPH": "Eph", "PHP": "Phil", "COL": "Col", "1TH": "1Thess", "2TH": "2Thess", "1TI": "1Tim",
    "2TI": "2Tim", "TIT": "Titus", "PHM": "Phlm", "HEB": "Heb", "JAS": "Jas", "1PE": "1Pet", "2PE": "2Pet",
    "1JN": "1John", "2JN": "2John", "3JN": "3John", "JUD": "Jude", "REV": "Rev",
}
SEPARATE_AFTER = 3
AGREEMENT = 0.85
MIN_COVERAGE = 0.5
MIN_PIECE = 3


def strong(raw):
    match = re.match(r"([GH])0*(\d+)", raw)
    return match.group(1) + match.group(2) if match else raw


def load(archive):
    zipped = zipfile.ZipFile(archive)
    out = {}
    for name in zipped.namelist():
        if not name.lower().endswith((".usfm", ".sfm")):
            continue
        text = zipped.read(name).decode("utf-8-sig")
        found = re.search(r"^\\id ([1-4A-Z]{3})", text, re.M)
        if not found or found.group(1) not in BOOKS:
            continue
        book = BOOKS[found.group(1)]
        text = re.sub(r"\\f .*?\\f\*", "", text, flags=re.S)
        text = re.sub(r"\\x .*?\\x\*", "", text, flags=re.S)
        chapter = None
        current = None
        red = False
        for line in text.splitlines():
            if re.match(r"\\(?:s\d?|r|d|mt\d?|ms\d?|mr|sp|h|toc\d|rem|cl|cp|id|ide|sts|restore|usfm)\b", line):
                continue
            chapter_match = re.match(r"\\c (\d+)", line)
            if chapter_match:
                chapter = int(chapter_match.group(1))
                continue
            for part in re.split(r"(\\v \d+[a-z]?(?:-\d+)?)", line):
                verse_match = re.match(r"\\v (\d+)", part)
                if verse_match:
                    current = f"{book}.{chapter}.{verse_match.group(1)}"
                    out.setdefault(current, [])
                    continue
                if chapter is None or current is None:
                    continue
                part = re.sub(r"\\(?!wj|\+?w[ *])\+?[a-z]+\d*\*?", " ", part)
                for token in re.finditer(r"(\\wj\*?)|\\\+?w ([^|\\]+)\|([^\\]*?)\\\+?w\*|([^\s\\]+)", part):
                    if token.group(1):
                        red = not token.group(1).endswith("*")
                    elif token.group(2):
                        tags = re.findall(r'strong="([^"]*)"', token.group(3))
                        out[current].append((token.group(2).strip(), strong(tags[0].split(",")[0]) if tags else None, red))
                    elif token.group(4) and not re.match(r"^[\\|]", token.group(4)):
                        out[current].append((token.group(4), None, red))
    return out


def runs(indexes):
    groups = []
    for index in sorted(indexes):
        if groups and index == groups[-1][-1] + 1:
            groups[-1].append(index)
        else:
            groups.append([index])
    return groups


def source_segments(source):
    tagged_red = [i for i, (_, tag, red) in enumerate(source) if red and tag]
    segments = []
    for index in tagged_red:
        if segments:
            gap = [i for i in range(segments[-1][-1] + 1, index) if source[i][1] and not source[i][2]]
            if len(gap) < SEPARATE_AFTER:
                segments[-1].append(index)
                continue
        segments.append([index])
    return segments


COMMON = set()


def common_tags(books):
    counts = {}
    total = 0
    for tokens in books.values():
        for _, tag, _ in tokens:
            if tag:
                counts[tag] = counts.get(tag, 0) + 1
                total += 1
    return {tag for tag, count in counts.items() if count / total > 0.004}


END = re.compile(r"[.?!:;”»]+$")
START = re.compile(r"^[“«¿¡‘]")
REACH = 15


def snap(target, low, high):
    words = [word for word, _, _ in target]
    start = low
    while start > 0 and low - start < REACH and not START.match(words[start]) and not END.search(words[start - 1]):
        start -= 1
    if START.match(words[start]) or start == 0 or END.search(words[start - 1]):
        low = start
    end = high
    while end < len(words) - 1 and end - high < REACH and not END.search(words[end]):
        end += 1
    if END.search(words[end]):
        high = end
    last = max((i for i in range(low, high + 1) if END.search(words[i])), default=None)
    if last is not None and high - last <= 2:
        high = last
    return low, high


def predict(source, target):
    source_tags = [(i, tag) for i, (_, tag, _) in enumerate(source) if tag]
    target_tags = [(i, tag) for i, (_, tag, _) in enumerate(target) if tag]
    matcher = difflib.SequenceMatcher(None, [tag for _, tag in source_tags], [tag for _, tag in target_tags], autojunk=False)
    mapping = {}
    for a, b, size in matcher.get_matching_blocks():
        for k in range(size):
            mapping[source_tags[a + k][0]] = target_tags[b + k][0]
    segments = source_segments(source)
    red_tags = [i for segment in segments for i in segment if source[i][1] not in COMMON] or [i for segment in segments for i in segment]
    if red_tags and sum(1 for i in red_tags if i in mapping) / len(red_tags) < MIN_COVERAGE:
        return []
    predicted = []
    for segment in segments:
        anchors = [mapping[i] for i in segment if i in mapping and source[i][1] not in COMMON]
        anchors = anchors or [mapping[i] for i in segment if i in mapping]
        if not anchors:
            continue
        low, high = min(anchors), max(anchors)
        before = [i for i, (_, tag, _) in enumerate(source) if i < segment[0] and tag]
        after = [i for i, (_, tag, _) in enumerate(source) if i > segment[-1] and tag]
        if not before:
            low = 0
        if not after:
            high = len(target) - 1
        low, high = snap(target, low, high)
        predicted.append(list(range(low, high + 1)))
    return predicted


def phrases_of(tokens, indexes):
    pieces = []
    for index in indexes:
        word = tokens[index][0]
        if pieces and re.fullmatch(r"[,.;:!?”’)\]]+", word):
            pieces[-1] += word
        else:
            pieces.append(word)
    return " ".join(pieces)


def own(archive):
    tokens = load(archive)
    result = {}
    for key, verse in tokens.items():
        indexes = [i for i, (_, _, red) in enumerate(verse) if red]
        if indexes:
            result[key] = [phrases_of(verse, group) for group in runs(indexes)]
    return result


def align(web_archive, archive):
    web = load(web_archive)
    COMMON.update(common_tags(web))
    target = load(archive)
    result = {}
    for key, source in web.items():
        if key not in target or not any(red for _, _, red in source):
            continue
        phrases = [phrases_of(target[key], group) for group in predict(source, target[key])]
        phrases = [phrase for phrase in phrases if phrase]
        if phrases:
            result[key] = phrases
    return result


def consensus(sources, archive):
    """Keeps only what every source edition agrees on; a verse they disagree on gets no red."""
    target = load(archive)
    loaded = []
    for source_archive in sources:
        tokens = load(source_archive)
        COMMON.update(common_tags(tokens))
        loaded.append(tokens)
    result = {}
    reasons = {}
    for key, tokens_target in target.items():
        guesses = []
        for source in loaded:
            if key in source and any(red for _, _, red in source[key]):
                guess = {i for group in predict(source[key], tokens_target) for i in group}
                guesses.append(guess)
        if len(guesses) < len(loaded):
            continue
        guesses = [guess for guess in guesses if guess]
        if not guesses:
            reasons["no source can place the verse"] = reasons.get("no source can place the verse", 0) + 1
            continue
        union = set.union(*guesses)
        shared = set.intersection(*guesses)
        if not shared or len(shared) / len(union) < AGREEMENT:
            reasons["the sources disagree"] = reasons.get("the sources disagree", 0) + 1
            continue
        groups = runs(shared)
        if len(groups) > 1:
            groups = [group for group in groups if len(group) >= MIN_PIECE]
        phrases = [phrases_of(tokens_target, group) for group in groups]
        phrases = [phrase for phrase in phrases if phrase]
        if phrases:
            result[key] = phrases
    print(f"{len(result)} verses with red; left without red: {reasons}")
    return result


def check(web_archive, kjv_archive):
    web = load(web_archive)
    COMMON.update(common_tags(web))
    kjv = load(kjv_archive)
    true_pos = false_pos = false_neg = exact = total = 0
    for key, source in web.items():
        if key not in kjv or not any(red for _, _, red in source):
            continue
        tokens = kjv[key]
        truth = {i for i, (_, tag, red) in enumerate(tokens) if red and tag}
        guess = {i for group in predict(source, tokens) for i in group if tokens[i][1]}
        true_pos += len(truth & guess)
        false_pos += len(guess - truth)
        false_neg += len(truth - guess)
        total += 1
        exact += truth == guess
    print(f"verses {total} identical {exact} precision {true_pos / (true_pos + false_pos):.3f} recall {true_pos / (true_pos + false_neg):.3f}")


if __name__ == "__main__":
    mode = sys.argv[1]
    if mode == "check":
        check(sys.argv[2], sys.argv[3])
    else:
        edition = sys.argv[-1]
        if mode == "own":
            phrases = own(sys.argv[2])
        elif mode == "consensus":
            phrases = consensus(sys.argv[2:-2], sys.argv[-2])
        else:
            phrases = align(sys.argv[2], sys.argv[3])
        suffix = "red.computed.json" if mode == "align" else "red.json"
        target = Path("data/corpus/bibles") / f"{edition}.{suffix}"
        target.write_text(json.dumps(phrases, ensure_ascii=False) + "\n", encoding="utf-8")
        print(f"{len(phrases)} verses -> {target}")
