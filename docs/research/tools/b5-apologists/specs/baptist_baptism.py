import os, sys
sys.path.insert(0, os.environ["SCR"] + "/tools")
from gen import *

O = "Gavin Ortlund"
OROLE = "Truth Unites; placed under Baptist on `apologists.md`'s recommendation (open point V39 there about the 1689 line)"
RB = ("https://www.9marks.org/article/dont-take-the-supper-at-youth-camp-or-get-baptized-in-the-jordan/", "Baptism is an act of obedience for every believer", "becoming a Christian is always a personal act", "Ben Robin", "Don't Take the Supper at Youth Camp or Get Baptized in the Jordan", "9Marks", "2025-10-06")
RBN = "byline «Ben Robin», «a staff pastor of Trinity River Baptist Church in Fort Worth, Texas» (the page's own line); not a person of `apologists.md`; the footnote numbers and notes inside the text are the page's"
ZA = ("https://credomag.com/2012/10/baptism-saves/", "In 1 Peter 3:21 we find a statement that has been puzzling to many", "In this way we may also say that", "Fred Zaspel", "Baptism Saves?", "Credo Magazine", "2012-10-24")
ZAN = "byline «By Fred Zaspel»; the page prints a bio, «He is currently a pastor at the Reformed Baptist Church of Franconia, PA» and a Ph.D. line (read by the verifier, not by the author of this file); not a person of `apologists.md`"
ACTS = lambda note="": cap("C4BoIc2-P8M", "11:50", "15:57", O, OROLE, note=note)

spec = {
 "title": "Pasajes · apologists for the Baptist Baptism passages (session B3 found none; rebuilt in B5)",
 "progress": [
  "- B3 found no on-point quote in three Ortlund videos with a keyword search for «romans 6», «colossians», «eunuch»… B5 (late night) read the longest of them (*Baptismal Regeneration: Responding to Common Arguments*) around the passages it does treat (Acts, 1 Pet 3:21, John 3, Heb 10:22, Eph 5:26) and added two written voices found with the verse index: Fred Zaspel (Credo Magazine, 2012) and Ben Robin (9Marks, 2025).",
  "- Core set of the Baptist Baptism page (`doctrines/scripture-lists/core-sets.md`, A5, rows as of 23:35; the Baptist page itself prints the references together, `baptist.es.ts`): Matt 28:19–20, Acts 8:35–39, Rom 6:3–5, John 3:23, Acts 2:38 (the file may have more rows).",
  "- **Voices outside `apologists.md` (agent's calls, Pedro decides):** Zaspel and Robin are named on their pages' bylines (Robin: «a staff pastor of Trinity River Baptist Church in Fort Worth, Texas»; Zaspel: a bio line on his page); nothing else about their standing was checked. Ortlund is placed under Baptist as `apologists.md` recommended (open point V39 there).",
  "- Verifier pass (B5, `passages/verification-b5-2.md`): 27 items, 7 wrong, 2 unconfirmable; corrected here (the Acts headings, the Acts 2:38 argument B removed, «Ezekiel 16», the core-set labels, the claims about John 3:23, Matt 3:13–17 and Mark 1:9–11). Its flags remain (mid-sentence starts and ends).",
 ],
 "entries": [],
}
e1 = {"heading": "Matt 28:19–20 (core set)", "arguments": [{"id": "A", "title": "Jesus requires his followers to be baptized: baptism is the first command a new Christian obeys.", "items": [web(*RB, note=RBN)]}]}
e2 = {"heading": "Rom 6:3–5 (core set)", "arguments": [
        {"id": "A", "title": "Paul assumes every Christian he writes to was baptized; baptism and becoming a Christian are so close that one can stand for the other.", "items": [web(*RB, note=RBN + "; same block as under Matt 28:19–20")]},
        {"id": "B", "title": "«Buried with Christ in baptism» and «baptism now saves» speak of baptism as the expression of saving faith; justification stays by faith alone.", "items": [web(*ZA, note=ZAN)]}]}
e3 = {"heading": "Acts 8:35–39 (core set; the block names «acts 8» as an episode and no verse)", "arguments": [{"id": "A", "title": "In the baptismal episodes of Acts that Ortlund names (Acts 2, 8, 10, 19, with Acts 9:17–18 and Cornelius), he reads regeneration and the Spirit as coming before baptism; baptism is the response and the seal.", "items": [ACTS("the video's «book of Acts» section; he names «acts 2 acts 8 acts 10 and acts 19» at 12:37 and never names the Ethiopian eunuch or a verse of Acts 8:35–39 in this block, so that Acts 8 here means that passage is `[inference]`")]}]}
e5 = {"heading": "Acts 2:38 (core set)", "arguments": [
        {"id": "A", "title": "Peter and Luke can use baptism and conversion for each other (Acts 2:38, 1 Pet 3:21).", "items": [web(*RB, note=RBN + "; same block as under Matt 28:19–20")]}]}
e6 = {"heading": "Col 2:12 (not a row of the core set read at 23:35; Zaspel and the Baptist page print it)", "arguments": [{"id": "A", "title": "The earliest believers first expressed faith in baptism (Col 2:12; Acts 22:16; 1 Pet 3:21).", "items": [web(*ZA, note=ZAN + "; same block as under Rom 6:3–5")]}]}
x1 = {"heading": "Other passages in the same sources (not in the core set)", "arguments": [
        {"id": "A", "title": "1 Pet 3:21: «baptism now saves you» is said of baptism even where the person was already regenerate; the language is not necessarily causal.", "items": [
            cap("C4BoIc2-P8M", "20:12", "21:08", O, OROLE, note="the argument that closes the section on Acts"),
            web(*ZA, note=ZAN + "; same block as under Rom 6:3–5")]},
        {"id": "B", "title": "John 3:5, Heb 10:22 and Eph 5:26: cleansing-water language is a wider category that baptism participates in and fulfils, not always and only baptism.", "items": [
            cap("C4BoIc2-P8M", "22:47", "26:04", O, OROLE, note="Ezekiel 16, John 3, 4 and 7, Heb 10:22, Eph 5:26; Titus 3:5 is announced at the end and not treated")]}],
      "count": "**Count and independence.** By person and work: 1 person on 1 Pet 3:21 beyond Zaspel (Ortlund: 2 persons in all); 1 person (Ortlund) on John 3, Heb 10:22 and Eph 5:26."}
spec["entries"] = [e1, e2, e3, e5, e6, x1]
spec["not_covered"] = [
 "- Mark 16:16, John 3:23, Mark 1:9–11 and Matt 3:13–17: no block here. Leads found (not cut): Credo Magazine, Timothy Raymond, «How Infant Immersion is Similar to Alligator Wrestling» (2014; John 3:23 and Calvin on the mode of baptism); Robin's block cites Matt 3:13–17; Credo's Matthew Claridge series on Mark treats Mark 1:9–15; R. C. Sproul's *Baptism: What Did Jesus Do?* (Ligonier, a Reformed voice) treats Jesus' baptism.",
 "- Most passages have one person; only Rom 6:3–5 and Acts 2:38 have two, and the second person in both cases is outside `apologists.md`.",
 "- Leads not used: 9Marks, «Yes, the Ordinances Really Do Change People» (Tiago Oliveira, 2021: Acts 22:16, Col 2:11–12, Rom 6:3–4) and «Does the Book of Acts Teach Spontaneous Baptisms?» (Caleb Morell, 2020: argues the timing of baptism in Acts and quotes Greear, Jamieson and Schreiner) were found and not cut.",
]
st = render(spec, "/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/passages/apologists-baptist-baptism.md")
print(st)
