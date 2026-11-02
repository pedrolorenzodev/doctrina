import os, sys, re
sys.path.insert(0, os.environ["SCR"] + "/tools")
from gen import *
R = "/Users/pedrolorenzo/Desktop/dev/doctrina"
OUT = R + "/docs/research/passages/"

def entry_no(doc, trad, key):
    t = open(f"{R}/src/content/pages/{doc}/{trad}.es.ts").read()
    for i, m in enumerate(re.findall(r'refs: \[([^\]]*)\]', t), 1):
        if key in m: return i
    return None

COMMON = [
 "- **Core sets of these Papacy pages** (`doctrines/scripture-lists/core-sets.md`, A5; rows as of 23:35) are made largely of the proof-texts the confessions print for church discipline, the offices of the church and Christ's headship (1 Cor 5, Matt 18:17–18, Rev 2–3, 1 Cor 12:28, Acts 15, Eph 4:11–12 for the Reformed; Gal 1:8, John 20:21, 2 Cor 10:4, Acts 5:29 for the Lutheran; Col 1:18, 1 Cor 5, Acts 15 for the Baptist). The first verse-index pass found almost no creator of `apologists.md` on them (incidental citations in blog posts and sermons); the verifier then found several (White on 1 Cor 12:28 and Acts 15, Ortlund on Acts 15, Eph 4:11 and Matt 18:20, Sproul on Luke 22). Where a creator treats a passage in an exposition, the block is below; the rest are leads at the end. Matt 16:18–19 is the passage creators argue when they speak on the papacy.",
 "- Method: captions through the logged-in transcript panel, passage mentions found with `vq.py` (chapter level), boundaries read cue by cue (`passages/method-apologists.md`).",
 "- Verifier pass (B5, `passages/verification-b5-2.md`): Lutheran 16 items, 3 wrong; Reformed 16 items, 6 wrong; Baptist 16 items, 5 wrong; corrected here (the blanket negative claims, the argument titles, the entry numbers, the cross-reference). The blocks added after the pass (White on 1 Cor 12:28 and Acts 15, Ortlund on Acts 15) have not been read by a verifier.",
]

# ---- Lutheran
C = "Jordan B. Cooper"; CROLE = "his own channel; AALC pastor 2012–2018 and Chair of Lutheran Dogmatics at ALTS per his own site, `apologists.md`"
n = entry_no("papacy", "lutheran", "Matt.16.18")
spec = {"title": "Pasajes · apologists for the Lutheran Papacy passages (B5)", "progress": COMMON, "entries": [
  {"heading": f"{n}. Papacy · Matt 16:18–19 (page entry {n})",
   "arguments": [{"id": "A", "title": "The text says nothing about successors or infallibility; the argument turns on the rock («petros»/«petra») and on how Aramaic can or cannot settle it.", "items": [
      cap("LHk-pmg-9LE", "8:04", "13:24", C, CROLE, note="the last cue ends mid-sentence: the argument about the Aramaic continues in the video")]}],
   "count": "**Count and independence.** By person and work: **1 person** (Cooper), 1 work. A second Cooper video (*Why Arguments for the Papacy Fail*, 2024) says in its minutes 9–11 that a Protestant exegetical critique of Matt 16 cannot be conclusive against Rome because of how Rome reads the text; it is not an exposition of the verse and is not cut."}],
  "not_covered": ["- The other passages of the page and of A5's Lutheran core set (Gal 1:8, John 20:21, 2 Cor 10:4, Acts 5:29, Luke 22:25, Matt 18:2, Gal 2:7, 1 Cor 3:6…): no block; no Lutheran creator of `apologists.md` was found treating them (Steadfast Lutherans and Lutheran Reformation hits are posts and sermons by many authors; aomin.org has 25 documents on Gal 1:8, not read).", "- Cooper's *Does the Pharisees Sitting in Moses's Seat Support Papal Authority?* (Matt 23:2–7, 17 min; an article of his read aloud) is not cut: Matt 23 is not an entry of the Lutheran Papacy page (`lutheran.es.ts`, entries read for `Matt.23`: 0).",
                  "- Second and third persons: none found."]}
render(spec, OUT + "apologists-lutheran-papacy.md")

# ---- Reformed
W = "James White"; WROLE = "Apologia Studios; Alpha & Omega Ministries; pastor/elder of Apologia Church, whose doctrine page names no confession (`apologists.md`)"
n18 = entry_no("papacy", "reformed", "Matt.16.18"); n19 = entry_no("papacy", "reformed", "Matt.16.19")
spec = {"title": "Pasajes · apologists for the Reformed Papacy passages (B5)", "progress": COMMON, "entries": [
  {"heading": f"{n18}. Papacy · Matt 16:18 (page entry {n18}); {n19}. Matt 16:19 with Matt 18:17–18 (page entry {n19})",
   "arguments": [{"id": "A", "title": "The rock is Peter's confession of Christ; the authority of the keys is given in Matt 18:18 to the apostles together, and the giving of the keys to Peter as superior over the others is recorded nowhere.", "items": [
      cap("N2CbLHUBcs4", "35:29", "42:47", W, WROLE, note="the passage is read at 34:39 and 35:05; the video is a stream (the verifier read the description as a sermon series)")]},
     {"id": "B", "title": "The notion that Peter himself is the rock rather than his confession is first articulated by a bishop of Rome in the third century, a solitary view not even followed by all later bishops of Rome, and a late development in the West, never in the East.", "items": [cap("gpaTKCiLnOc", "0:00", "0:56", "W. Robert Godfrey (named in the video's description)", "Ligonier Ministries; an «Ask Ligonier» clip; listed among Ligonier's teaching fellows on its About page (`apologists.md`)", note="the clip's description quotes Matt 16:18; the speaker does not say the verse number; the claim about the third-century bishop of Rome is the speaker's, not checked here")]}],
   "count": "**Count and independence.** By person and work: **2 persons** (White; Godfrey in a Ligonier clip), 2 works."},
  {"heading": f"{entry_no('papacy','reformed','1Cor.12.28')}. Papacy · 1 Cor 12:28 (page entry {entry_no('papacy','reformed','1Cor.12.28')}; core set)",
   "arguments": [{"id": "A", "title": "Paul ranks apostles, then prophets, teachers: the New Testament lists offices without a pope.", "items": [cap("N2CbLHUBcs4", "19:19", "20:07", W, WROLE, note="the passage is named at 19:35; the segment is short and the last cue ends on the point about Paul's letters")]}], "count": "**Count and independence.** By person and work: **1 person** (White), 1 work."},
  {"heading": f"{entry_no('papacy','reformed','Acts.15')}. Papacy · Acts 15 (page entry {entry_no('papacy','reformed','Acts.15')}; core set: Acts 15:14–16)",
   "arguments": [{"id": "A", "title": "At the Jerusalem council Peter speaks as an apostle, James presides and decides; the decision is the apostles' and elders', not a pope's.", "items": [cap("N2CbLHUBcs4", "25:35", "28:21", W, WROLE, note="the passage is called «the supposed Jerusalem Council»; the last cue ends where the argument moves to Matthew 16 and John 21")]}], "count": "**Count and independence.** By person and work: **1 person** (White), 1 work."}],
  "not_covered": ["- Other passages of the page and of A5's Reformed core set: no block for Eph 1:22–23, Col 1:18, Eph 5:23, 1 Cor 5, Rev 2–3, Ps 2:8. Leads: Ortlund treats Eph 4:11 (z7zwIN8vEkA 5:53 to 7:14) but he is not a Reformed (Westminster) voice; Sproul `BABm0VFfDFI` (Luke 22:24–34, Peter's denial) was not cut.", "- Second person: Godfrey (a clip, above). No third person found."]}
render(spec, OUT + "apologists-reformed-papacy.md")

# ---- Baptist
O = "Gavin Ortlund"; OROLE = "Truth Unites; Baptist per `apologists.md` (agent's call, with the 1689)"
n = entry_no("papacy", "baptist", "Matt.16.15")
spec = {"title": "Pasajes · apologists for the Baptist Papacy passages (B5)", "progress": COMMON, "entries": [
  {"heading": f"{n}. Papacy · Matt 16:15–19; 18:15–20 (page entry {n})",
   "arguments": [
     {"id": "A", "title": "Ortlund argues the rock is Peter in his confession of Christ (Augustine's final view) and that authority to govern is given to the apostles together; Matt 18:18 is cited in the first block for that last point (the second says «two chapters later» without a verse).", "items": [
        cap("Mslw0lS1ZLQ", "0:00", "11:38", O, OROLE, note="the whole video is about Matt 16"),
        cap("z7zwIN8vEkA", "16:06", "18:50", O, OROLE, note="inside a longer video on the papacy; the passage is introduced at 15:59")]}],
   "count": "**Count and independence.** By person and work: **1 person** (Ortlund), 2 works. Matt 18:18 is cited inside the first block only; Matt 18:15–20 as church discipline is not expounded in these captions."},
  {"heading": f"{entry_no('papacy','baptist','Acts.15')}. Papacy · Acts 15 (page entry {entry_no('papacy','baptist','Acts.15')}; core set)",
   "arguments": [{"id": "A", "title": "At the council of Acts 15 Peter is one apostle among several who speak; James is seen in the Fathers as having the greater authority.", "items": [cap("z7zwIN8vEkA", "13:35", "15:28", O, OROLE, note="the last cue ends with the question «where in the New Testament do we find this office?»")]}], "count": "**Count and independence.** By person and work: **1 person** (Ortlund), 1 work."}],
  "not_covered": ["- The page's third entry (1 Cor 5, 7, 12, Rom 1:7…) and the core-set rows Col 1:18, 1 Cor 5, Eph 1:22, Eph 5: no block; Ortlund also treats Matt 18:20 (z7zwIN8vEkA 40:57), not cut.", "- Second and third persons: none found. 9Marks cites Matt 16:18–19 for church polity (56 documents mention Matt 16:18; the top ones read: «Why New Testament Polity Is Prescriptive», 2013, and Trent Hunter's «What Happens When We Turn the Keys?», 2026, a pastor's letter on receiving and releasing members), and Credo Magazine and Mohler's sermon texts mention it in passing; none was cut: they argue the keys as the local church's authority, not the papal reading (the verifier calls them on point for page entry 1)."]}
render(spec, OUT + "apologists-baptist-papacy.md")
print("ok")
