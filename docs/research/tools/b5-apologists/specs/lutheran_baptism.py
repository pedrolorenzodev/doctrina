import os, sys
sys.path.insert(0, os.environ["SCR"] + "/tools")
from gen import *

C = "Jordan B. Cooper"
ROLE = "his own channel; AALC pastor 2012–2018 and Chair of Lutheran Dogmatics at ALTS per his own site, `apologists.md`"
OLD = "baptism unites us to Jesus it connects us to Christ and it connects us specifically to his saving death we are baptized into to his death and we are raised then to newness of life…"

spec = {
 "title": "Pasajes · apologists for the Lutheran Baptism passages (session B3 pilot, extended in B5)",
 "progress": [
  "- B3 (2026-11-01 evening) wrote entry 4 (one short quote). **B5 (late night):** entries 3 and 4 and four further passages that Cooper reads in the same videos, stored long (DECISIONS 2026-11-01 late night). Source set: Cooper's lecture *The Doctrine of Holy Baptism* (Intro to Christian Theology 21, 2026-07-06), *Five Scriptural Proofs that Baptism Saves* (2017) and the 5-minute *The Doctrine of Baptism Explained Quickly and Simply*; both captions read in full for passage mentions with `vq.py`/`capseg.py` (method: `passages/method-apologists.md`).",
  "- Core set of the Lutheran Baptism page (`doctrines/scripture-lists/core-sets.md`, A5): Matt 28:19, Mark 16:16, Titus 3:5–8, Eph 5:26, Rom 6:4. **Covered here:** Matt 28:19, Titus 3:5–7, Rom 6:4 (three of the five core passages), plus household baptisms and the passages of the second video. **Not covered:** Mark 16:16, Eph 5:26 (see «Not covered»).",
  "- **One person only.** Cooper is the only Lutheran creator whose text or captions on these passages were found; the criterion of `apologists.md` also names Wilken and Fiene (Wilken's show is audio without transcripts (two latest posts read); no Fiene video on these passages was found, and his channel's titles read as comedy). Cooper's church body is the AALC, not the LCMS (`apologists.md`).",
  "- Verifier pass (B5, `passages/verification-b5-1.md`): 36 items, 3 wrong, 1 unconfirmable; corrected here (a count line, a claim about which pages share passages, the lecture's passage list). Its flags remain (blocks start or end mid-sentence; Titus is chapter-level). The 1 Pet 3:21 block from the 2026 lecture, the narrower Titus and Rom 6 cuts and every block from the 5-minute video were made after the pass and have not been read by a verifier.",
 ],
 "entries": [],
 "not_covered": [
  "- Mark 16:16 (entries 2 and 9), Eph 5:26 (entry 6), Eph 4:5–6 (entry 7): no Cooper caption read treats them. Matt 23:2 (entry 8): not for baptism; his video on the Pharisees sitting in Moses' seat (`a9li8Mg8sPQ`) treats Matt 23:2–7 for papal authority. The lecture's passages include John 3:5, Gal 3, Rom 6, Acts 2:38, Titus 3, 1 Pet 3:21, and also Luke 18 (40:03), 1 Cor 7:14 (41:00), Ps 51 (44:39) and Rom 9–11 (13:16), with a mention of Ezek 36 at 51:53. Cooper's *Does Baptism Save?* (2:38) was fetched and not cut (it repeats the same points).",
  "- Second and third persons: none found for any passage.",
 ],
}

e1 = {"heading": "1. and 5. Baptism · Matt 28:19 (page entries 1 and 5; core set #1)",
      "arguments": [
        {"id": "A", "title": "Baptism needs water and the Triune name, the words Jesus instituted in Matthew 28; baptism is received, not done.", "items": [
          cap("sFXYH_xu5pA", "0:08", "1:34", C, ROLE, note="a 5-minute video «explained quickly and simply»; the lecture series' own intro is not in this video, the speaker is named by the channel and the video's context")]},
        {"id": "B", "title": "Baptism is for all nations (Matt 28:19), broader than the old covenant, so infants are included.", "items": [
          cap("sFXYH_xu5pA", "3:37", "4:31", C, ROLE, note="same video; the last cue ends where the household-baptism argument begins")]}]}
e3 = {"heading": "3. Baptism · Titus 3:5–7 (page entry 3; core set)",
      "arguments": [{"id": "A", "title": "«The washing of regeneration» ties water and Spirit together; the language is about baptism.", "items": [
        cap("sFXYH_xu5pA", "1:43", "2:17", C, ROLE, note="same short video as under Matt 28:19; Titus 3 is named at 2:07"),
        cap("lcRHfOBzPBM", "55:20", "56:06", C, ROLE, note="the lecture's own intro names the speaker («I'm your host Dr. Jordan Cooper», 0:22 to 0:25); the cut starts at «So this language is used throughout scripture»; «Titus chapter 3» is said at 55:40 and no verse is named")]}]}
e4 = {"heading": "4. Baptism · Rom 6:4 (page entry 4 and core set: Rom 6:4; the 2017 block reads Rom 6:3–4; the 5-minute video names «Romans 6:3» in a list and the lecture says «Romans chapter 6» without a verse; the Small Catechism cites it for the new life, Catecismo Menor IV.13–14)",
      "arguments": [{"id": "A", "title": "Baptism unites the baptized with Christ's death and raises them to new life; «baptism» here is baptism.", "items": [
        cap("9yN2plB-Bb8", "5:12", "6:11", C, ROLE, old=OLD),
        cap("sFXYH_xu5pA", "2:17", "3:28", C, ROLE, note="the same short video; the block lists what baptism gives: union with Christ (Rom 6:3), forgiveness (Acts 22:16), the Spirit (Acts 2:38), salvation (1 Pet 3:21), life (Col 2:12–13), new birth (John 3:5)"),
        cap("lcRHfOBzPBM", "53:58", "55:14", C, ROLE, note="the lecture's own intro names the speaker (0:22 to 0:25); the speaker says «in Galatians» and «Romans chapter 6» without a chapter or verse for Galatians (that Gal 3:27 is meant is `[inference]` from «clothed with Christ»); the block also covers Acts 2:38 («Acts chapter 238») and, by wording («be baptized and wash away your sins»), Acts 22:16 `[inference]`")]}]}
x1 = {"heading": "Other passages Cooper reads for baptism in the same videos (not in the page's list)",
      "arguments": [
        {"id": "A", "title": "Acts 2:38 and Acts 22:16: forgiveness and washing are tied to baptism.", "items": [
          cap("9yN2plB-Bb8", "1:05", "2:20", C, ROLE, note="Acts 2:38; the last cue ends mid-sentence"),
          cap("9yN2plB-Bb8", "2:29", "3:26", C, ROLE, note="Acts 22:16")]},
        {"id": "B", "title": "Gal 3:26–27: baptism puts the baptized into Christ.", "items": [
          cap("9yN2plB-Bb8", "3:34", "4:55", C, ROLE)]},
        {"id": "C", "title": "1 Pet 3:20–21: Noah's flood as the type of baptism; «not the removal of dirt» does not make it a symbol.", "items": [
          cap("9yN2plB-Bb8", "6:19", "10:20", C, ROLE),
          cap("lcRHfOBzPBM", "48:01", "50:25", C, ROLE, note="the lecture's own intro names the speaker (0:22 to 0:25); the last cue ends mid-sentence")]},
      ],
      "count": "**Count and independence.** By person and work: **1 person** (Cooper), 2 works (the 2017 video for all four passages; the 2026 lecture for 1 Pet 3:21 too). These passages are not entries of `lutheran.es.ts`; they are kept because Cooper reads them and other pages use them (Acts 2:38 is on the Orthodox page; Gal 3:27 and 1 Pet 3:21 are on the Reformed and Catholic pages)."}
xh = {"heading": "Acts 16:33 and the household baptisms (not in the Lutheran page's list; Orthodox core set #4)",
      "arguments": [{"id": "A", "title": "Households were baptized, so children were; if baptism gives all these gifts, infants need them.", "items": [
        cap("sFXYH_xu5pA", "4:24", "5:21", C, ROLE, note="same short video; the last cue is the end of the transcript")]}],
      "count": "**Count and independence.** By person and work: **1 person** (Cooper), 1 work."}
spec["entries"] = [e1, e3, e4, x1, xh]
st = render(spec, "/Users/pedrolorenzo/Desktop/dev/doctrina/docs/research/passages/apologists-lutheran-baptism.md")
print(st)
