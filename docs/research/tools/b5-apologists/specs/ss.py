import os, sys, re
sys.path.insert(0, os.environ["SCR"] + "/tools")
from gen import *
OUT = "/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/passages/"
COMMON = [
 "- **Core sets of these Sola Scriptura pages** (`doctrines/scripture-lists/core-sets.md`, A5) are the proof-texts the confessions print (for the Lutheran: Gal 1:8, 1 Tim 3, 2 Cor 10:4, 2 Tim 3:16, Acts 15…). The verse index found **no creator of `apologists.md` of this tradition who treats most of them as an exposition** (the hits are incidental citations in blog posts and sermons; creators of other traditions do treat some, e.g. Ortlund and White on Acts 15, Ortlund on Gal 1:8 at `rpmcr7jOev4` 26:06, but they are not voices of this tradition); the exceptions are below. This file records the passages that this tradition's creators do argue (2 Tim 3:16–17, Matt 15:1–9), and says so.",
 "- Method: captions through the logged-in transcript panel, passage mentions found with `vq.py` (chapter level), boundaries read cue by cue (`passages/method-apologists.md`).",
 "- Verifier pass (B5, `passages/verification-b5-3.md`, Lutheran 15 items, 1 wrong; Orthodox 17 items, 3 wrong; Baptist 14 items, 3 wrong): corrected here (the speaker's role, the title quote, the 2 Thess 2:15 and Luke 24:44 statements). Flags remain (blocks start mid-thought; 1 Tim 3:15 is about 30 of 517 words of its block).",
]
C = "Jordan B. Cooper"; CROLE = "his own channel; AALC pastor 2012–2018 and Chair of Lutheran Dogmatics at ALTS per his own site, `apologists.md`"
DOE = ("https://lutheranreformation.org/theology/bible-study-with-luther-galatians-16-20/", "3. Read Acts 9:1-19", "the Formula of Concord states", "Rev. Paul Doellinger", "Bible Study with Luther: Galatians 1:6-20", "Lutheran Reformation", "9 Jan 2016")
spec = {"title": "Pasajes · apologists for the Lutheran Sola Scriptura passages (B5)", "progress": COMMON, "entries": [
 {"heading": "Gal 1:8–9 and 1:16 (A5's Lutheran core set: Gal 1:8)",
  "arguments": [{"id": "A", "title": "Paul curses a false gospel and claims his authority from a revelation that came through the outward Word; the Word makes assertions of truth and rejections of falsehood, and the rule of teaching is the prophetic and apostolic writings (the page quotes the Formula of Concord).", "items": [web(*DOE, note="byline «Rev. Paul Doellinger»; the page is a Bible-study guide in the series «Bible Study with Luther» on the Lutheran Reformation site; the page prints «The Rev. Paul M. Doellinger is pastor of St. Paul Lutheran Church, Cassopolis, MI» (church body not stated in that line); not a person of `apologists.md`: admitted as an agent's call, the only Lutheran text found on a core-set passage; the block includes the guide's questions and a quotation of Luther and of the Formula of Concord that the page prints")]}],
  "count": "**Count and independence.** By person and work: **1 person** (Doellinger), 1 work."},
 {"heading": "2 Tim 3:16–17 (in A5's Lutheran core set for Sola Scriptura)",
  "arguments": [{"id": "A", "title": "Scripture presents itself as God-breathed; nothing else is said to be, so the burden of proof is on whoever claims the same authority for tradition; «equipped for every good work» is sufficiency.", "items": [
     cap("4LhwvpAH4VU", "2:11", "8:07", C, CROLE, note="the last cue ends where the next topic begins («the other place that I would go is from Matthew 15 and»)")]}]},
 {"heading": "Matt 15:1–9 (not in the core set; Cooper's second text in the same video)",
  "arguments": [{"id": "A", "title": "The Pharisees' claim of an infallible tradition from Moses is the parallel of Rome's claim; Jesus sets the commandment of God against it.", "items": [
     cap("4LhwvpAH4VU", "10:30", "17:01", C, CROLE, note="to the last cue of the file, which stops mid-sentence at 17:01; the video is longer")]}],
  "count": "**Count and independence.** By person and work: **1 person** (Cooper), 1 work for each passage. A second Cooper video, *Sola Scriptura and the Canon*, and his Moses'-seat video also mention Matt 15; not cut."}],
 "not_covered": ["- 1 Tim 3, 2 Cor 10:4, Acts 15 and the rest of A5's Lutheran core set (Gal 1:8 is covered above): no block. No Lutheran creator of `apologists.md` was found treating them; the top hits read (Steadfast Lutherans posts: a sermon, a report, a set of quotations) are incidental.",
                 "- Second and third persons: none found."]}
render(spec, OUT + "apologists-lutheran-sola-scriptura.md")
O = "Gavin Ortlund"; OROLE = "Truth Unites; Baptist per `apologists.md` (agent's call, with the 1689)"
BAPT_PROG = [
 "- **Core set of the Baptist Sola Scriptura page** (`doctrines/scripture-lists/core-sets.md`, A5, rows as of 23:35): 2 Tim 3:15–17, 2 Pet 1:19–21, John 5:39, Matt 22:29, Ps 19:7–10 (the Baptist page itself has one entry that prints a block of references). **Covered here:** 2 Tim 3:16 and 2 Pet 1:21 (rows 1 and 2) in one Ortlund block, with Rom 3:2 and John 10:35 which he also reads. **Not covered:** John 5:39, Matt 22:29, Ps 19:7–10 (no caption read names them).",
 "- Ortlund is placed under Baptist on `apologists.md`'s recommendation (open point V39 there about the 1689 line); here he argues the doctrine common to Protestants, not a Baptist-specific reading.",
 "- Method: captions through the logged-in transcript panel, passage mentions found with `vq.py` (chapter level), boundaries read cue by cue (`passages/method-apologists.md`).",
 "- Verifier pass (B5, `passages/verification-b5-3.md`): 14 items, 3 wrong; corrected here (the Progress block, the video title, the «not a voice» sentence)."]
spec = {"title": "Pasajes · apologists for the Baptist Sola Scriptura passages (B5)", "progress": BAPT_PROG, "entries": [
 {"heading": "2 Tim 3:16 with 2 Pet 1:21, Rom 3:2 and John 10:35 (the Baptist page has one entry; the passages are those Ortlund argues)",
  "arguments": [{"id": "A", "title": "«God-breathed» speaks of Scripture as God's own speech, infallible and ontologically unique; that point does not by itself establish sola scriptura, and every tradition can agree on it.", "items": [
     cap("rpmcr7jOev4", "13:12", "18:44", O, OROLE, note="the last cue ends at «public divine revelation has ceased with the death of the last apostles»")]}],
  "count": "**Count and independence.** By person and work: **1 person** (Ortlund), 1 work. His video «\"Obey Tradition!\" is LITERALLY IN THE BIBLE!» (2 Thess 2:15) is not cut here: 2 Thess 2:15 belongs to the Catholic and Orthodox pages, and there Ortlund would be a critic of the tradition, not a voice of it."}],
 "not_covered": ["- The Baptist page's single entry (2 Tim 3:15–17 and 2 Pet 1:19–21 among its references per the verifier) matches the block above.",
                 "- Second and third persons: none found (Mohler's, 9Marks' and Truth Unites' posts mention 2 Tim 3:16: 7, 53 and 2 documents in the first verse index, built before Credo Magazine was added; none was read as an exposition, so they are leads, not records)."]}
render(spec, OUT + "apologists-baptist-sola-scriptura.md")
T = "Fr. Josiah Trenham (named in the video's description: «Father Josiah Trenham explores…»)"
TROLE = "Patristic Nectar"
spec = {"title": "Pasajes · apologists for the Orthodox Sola Scriptura passages (B5)", "progress": [
 "- **Covered here:** 1 Tim 3:15 (page entry 1 of `orthodox.es.ts`, the first of its four entries). **Not covered:** 2 Thess 2:15, Rom 3:2 (page entries 2 and 3; A5's Orthodox core set also has Eph 5:27 and Ps 26:5, with no creator found): the Orthodox captions read name Rom 3:2 only inside a dialogue with a Catholic host (R&T Media, Rom 3:2 at 22:15 and 2 Thess 2:15 is not named by book at 47:05 and only «the Thessalonians» at 1:04:41), an interview by Michael Lofton and Erick Ybarra (the description) with Trenham as guest, where the captions have no speaker labels, so no sentence can be given to Trenham; that video is not cut. Luke 24:44 is named in no caption read.",
 "- Method: captions through the logged-in transcript panel, passage mentions found with `vq.py` (chapter level) and keyword searches, boundaries read cue by cue (`passages/method-apologists.md`).",
 "- Verifier pass (B5, `passages/verification-b5-3.md`): 17 items, 3 wrong; corrected here (the title wording «support», the 2 Thess 2:15 and Luke 24:44 statements, the interview description). Flags remain (the block starts mid-sentence; 1 Tim 3:15 is about 30 of 517 words)."], "entries": [
 {"heading": "1 Tim 3:15 (page entry 1)",
  "arguments": [{"id": "A", "title": "The Church is «the pillar and support of the truth»: Scripture and the Church are not opposed; one who wants the truth goes to the Church, which the Spirit guides into all the truth.", "items": [
     cap("79MwTNPlzdU", "11:11", "14:08", T, TROLE, note="the passage is alluded to at 11:46 («what does the great St Paul call the church in his first epistle to his spiritual son Timothy»); the captions give no verse number, so that the verse is 1 Tim 3:15 is `[inference]`; the last cue ends mid-thought")]}],
  "count": "**Count and independence.** By person and work: **1 person** (Trenham, per the description), 1 work."}],
 "not_covered": ["- 2 Thess 2:15, Rom 3:2, Eph 5:27, Ps 26:5, Luke 24:44: see Progress. The Ancient Faith live show «The Fallacy of Sola Scriptura» (`uz_TbcoSvQ4`) discusses 2 Tim 3:16 but its description does not name the host: not used.",
                 "- Second and third persons: none found."]}
render(spec, OUT + "apologists-orthodox-sola-scriptura.md")
print("ok")
