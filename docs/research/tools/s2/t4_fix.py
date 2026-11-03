import re, os
D = "/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/passages/"

def load(fn): return open(D + fn).read().split("\n")
def save(fn, L): open(D + fn, "w").write("\n".join(L))
def find(L, sub, start=0):
    return next(i for i in range(start, len(L)) if sub in L[i])
def words(s): return len(s.split())

# A4: papacy, block of «this-argument-proves-sola-scriptura-false»: three list items dropped
fn = "apologists-catholic-papacy.md"; L = load(fn)
if "The Bible is an infallible rule of faith." not in "\n".join(L):
    h = find(L, "(transcript, 23 paragraph(s), 688 words")
    L[h] = L[h].replace("(transcript, 23 paragraph(s), 688 words", "(transcript, 26 paragraph(s), 714 words, the three list items of the page's syllogism included")
    k = find(L, "    > And they arrive at this conclusion like this:", h)
    L[k + 1:k + 1] = ["    > The Bible is an infallible rule of faith.", "    > There are no other infallible rules of faith.", "    > Therefore, the Bible alone is our infallible rule of faith."]
    save(fn, L)

# A27: eucharist, Broussard on 1 Cor 11:34: three list items dropped; last paragraphs are James White's words
fn = "apologists-catholic-eucharist.md"; L = load(fn)
if "Jesus will not appear again to appoint new apostles." not in "\n".join(L):
    h = find(L, "tradition-and-scripture-meeting-the-identity-challenge, 20 paragraph(s), 725 words")
    L[h] = L[h].replace("20 paragraph(s), 725 words", "23 paragraph(s), 751 words, the three list items of the page included").replace("(speaker per the page's byline or label; added by session B5;", "(speaker per the page's byline or label; the block's last paragraphs, from «Here’s how White put it in his debate with Alex:», quote James White's debate clip, not Broussard; added by session B5;")
    k = next(i for i in range(h, h + 40) if L[i].startswith("  > Finally, Protestants themselves believe certain truths") and L[i].rstrip().endswith("the three are:"))
    L[k + 1:k + 1] = ["  > Jesus will not appear again to appoint new apostles.", "  > Public revelation ceased with the death of the last apostle.", "  > There will be no new inspired Scriptures."]
    save(fn, L)

# A5: eucharist, «james-white-debate-debrief»: the page's «Speaker 5:» and «When» labels sit between Joe's turns
L = load(fn)
h = next(i for i, l in enumerate(L) if "(transcript, 6 paragraph(s), 626 words" in l)
if "    > Speaker 5:" in L[h:h + 10]:
    L[h] = L[h].replace("(transcript, 6 paragraph(s), 626 words", "(transcript, 4 paragraph(s), 623 words, the two label lines «Speaker 5:» and «When» that the page prints between the third and fourth paragraphs replaced by the marker line; the fourth paragraph is Joe Heschmeyer's turn again (label «Joe:» on the page)")
    a = h + L[h:h + 10].index("    > Speaker 5:")
    L[a:a + 2] = ["    > [the page prints the labels «Speaker 5:» and «When» here, then «Joe:»]"]
    save(fn, L)

# A6: eucharist, «do-st-pauls-words-disprove-the-catholic-eucharist»: two 2,867-word one-paragraph blocks cut to a window around the old quote
L = load(fn)
def window(txt, quote, before=300, after=300):
    sents = re.findall(r"[^.!?]+[.!?]+[”’\"']?\s*|[^.!?]+$", txt)
    pos = 0; starts = []
    for s in sents: starts.append(pos); pos += len(s)
    q = txt.find(quote[:60])
    if q < 0: raise SystemExit("quote not found: " + quote[:60])
    i = max(j for j, s in enumerate(starts) if s <= q)
    wb = 0; a = i
    while a > 0 and wb < before: a -= 1; wb += words(sents[a])
    wa = 0; b = i
    while b < len(sents) - 1 and wa < after: b += 1; wa += words(sents[b])
    seg = "".join(sents[a:b + 1]).strip()
    return seg, sents[a].split()[:9], sents[b].split()[-9:]
for _ in range(2):
    h = next((i for i, l in enumerate(L) if "(transcript, 1 paragraph(s), 2867 words" in l), None)
    if h is None: break
    q = next(i for i in range(h, 0, -1) if L[i].startswith("- **Joe Heschmeyer**") and "do-st-pauls-words" in L[i])
    m = re.search(r"«([^«»]{60,})»\s*$", L[q])
    quote = m.group(1).replace("[…]", "").strip() if m else None
    full = L[h + 1][len("    > "):]
    seg, hd, tl = window(full, quote)
    L[h] = re.sub(r"\(transcript, 1 paragraph\(s\), 2867 words, from the paragraph beginning «[^»]*» to the one ending «[^»]*»",
                  f"(transcript, 1 paragraph(s), {words(seg)} words: a window of the page's single 2,867-word transcript paragraph (the page prints the whole show as one paragraph), cut at sentence boundaries about 300 words before and after the old quote, from the sentence beginning «{' '.join(hd)}…» to the one ending «…{' '.join(tl)}»", L[h])
    L[h + 1] = "    > " + seg
save(fn, L)

# A7: sola scriptura, «are-catholics-still-wrong-about-pauls-traditions»: the block is the episode summary
fn = "apologists-catholic-sola-scriptura.md"; L = load(fn)
h = next(i for i, l in enumerate(L) if "(transcript, 1 paragraph(s), 78 words" in l and "In this episode, Karlo Broussard examines" in l)
L[h] = L[h].replace("(transcript, 1 paragraph(s), 78 words", "(episode summary printed above the page's «TRANSCRIPT:» line, 1 paragraph(s), 78 words; its first sentence is the page's third person")
save(fn, L)
print("ok")
