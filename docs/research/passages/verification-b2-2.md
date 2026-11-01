Status: draft, NOT verified by Pedro

# Verification B2-2 · round-2 sections of the four Catholic-apologist passage files (session B2)

## Progress
- 2026-11-01 evening: DONE. All 45 quotes of the 33 round-2 sections checked (papacy 18, sola scriptura 13, eucharist 10 incl. the 2 YouTube caption quotes, baptism 4). Nothing left to do.
- Method: every distinct catholic.com URL (32 pages, HTTP 200, about 1 request per second, `curl -sL -A "Mozilla/5.0"`) turned into text with `python3 -I` (block tags = line breaks, whitespace normalised); each quote matched by exact string (whitespace only normalised, curly quotes and dashes NOT normalised) against the page text. Paragraph of each quote compared with the locator («begins «…»», «mid-paragraph at «…»»); nearest speaker label above each quote read on the page («Joe:», «Joe Heschmeyer:», «Karlo:»); title and printed date (M/D/YYYY) read from the page and its byline; headings and count lines read against the quotes. Captions of Mo0BEpnpL5g fetched with `yt-dlp --write-subs --sub-langs en --sub-format vtt` (no 429); cue times read from the VTT.
- Legend: CONFIRMED / WRONG (correction and matching string) / UNCONFIRMABLE. «Quote line» below = words verbatim + paragraph/locator + «mid-paragraph» claim + speaker/byline + title + date, all together. «Heading/count» = argument heading and count line read against the quotes.
- Result in one line: every quote string occurs verbatim on its page, in the paragraph the locator names, by the person named, with the right title and date (44 of 45; the 45th, a YouTube caption quote, has a wrong end time). The defects are all in headings, count lines and one cue range; none is a changed quote.
- Scratch (outside the repo): `/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/68e8ba31-f9f4-4d2d-82ce-0ec785ffc67e/scratchpad` (`pages/`, `tools/strict.py`, `yt2/`).

## General notes (apply to every section)
- Titles and dates: all 32 pages match. Four Shameless Popery pages print no name in the byline (`will-rejecting-marian-dogmas-send-you-to-hell`, `this-brand-new-sola-scriptura-argument-surprised-me`, `the-new-covenant-argument-against-baptist-theology`, `the-critical-disagreements-that-sparked-the-sspx-schism`): the speaker is the page's own label «Joe:» and the summary line («Joe examines…», «Joe reviews…», «Joe responds…»), and the host introduces himself («I’m Joe Heshmeyer», the page's spelling): CONFIRMED as Heschmeyer. Their printed dates 7/28/2026, 5/5/2026, 8/4/2026, 7/21/2026 match the file (the hidden ISO stamp of the covenant episode is 2026-08-03; the printed date is 8/4/2026).
- Typography only (not defects): file titles use «—» or straight quotes where the page prints «–» or curly quotes (e.g. «Refuting Papal Myths – “Peter Was Not a Pope”»).
- No quote in these sections is clipped without a mark: every clipped end is marked «[…]» (papacy 2 Horn; SS 5 Broussard; Eucharist 3 both); the other quotes end where the sentence ends on the page.
- Every quote that does not start at the start of its paragraph says so in the locator, and the words it names are the quote's first words. No locator is off by one paragraph.
- The two Horn articles quoted for the papacy («Peter Was Not a Pope», «The Papacy is Unbiblical and Unhistorical») are both reprinted in the print-edition article «Defending the Papacy» (https://www.catholic.com/magazine/print-edition/defending-the-papacy, Trent Horn, 9/1/2015): all five Horn sentences used in papacy 2, 3, 7, 10, 11 occur there. The count lines that say «also in the print reprint (one work)» are CONFIRMED.

## Papacy (`apologists-catholic-papacy.md`)

### 2. John 1:42
- P2-1 Heschmeyer, «St. Peter: Rock or Stumbling-Stone?», 21 Feb 2018: CONFIRMED. Paragraph «Much ink has been spilled…», quote starts mid-paragraph at «An answer to this seems…»; byline Joe Heschmeyer • 2/21/2018.
- P2-2 Horn, «Peter Was Not a Pope», 22 Sep 2015: CONFIRMED (quote line). Paragraph begins «According to John 1:42, Jesus gave Simon the…»; the clip ends «Kepha […]» correctly.
- P2 heading/count: WRONG (heading). The heading says «the Aramaic Cephas, which means “rock”» but Horn’s clipped quote stops before the meaning. Only Heschmeyer’s quote says «a name that simply means “Rock.”». Fix: either extend Horn’s quote to the full sentence, which the page has: «According to John 1:42, Jesus gave Simon the Aramaic name Kepha, which means simply “rock.”» (https://www.catholic.com/magazine/online-edition/refuting-papal-myths-peter-was-not-a-pope), or word the heading «Jesus’s name for Simon is the Aramaic Cephas/Kepha (Heschmeyer: it means “Rock”)». Count line (2 persons, 2 works, 1 organisation; reprint = one work): CONFIRMED.

### 3. John 21:15–17
- P3-1 Broussard, «Protestant Comebacks When Catholics Say Peter Is Pope», 29 Nov 2022: CONFIRMED. Paragraph begins «For Catholics, the exclusive command to feed Jesus’…»; byline Karlo Broussard • 11/29/2022.
- P3-2 Horn, «Peter Was Not a Pope»: CONFIRMED. Paragraph begins «Moreover, Christ made Peter alone the shepherd over…»; the quote is the paragraph's first sentence, ends where the sentence ends.
- P3-3 Heschmeyer, «The Fisher Pope», 5 Oct 2020 (print edition): CONFIRMED. Paragraph «After breakfast, Jesus famously asks Peter three times,…», quote starts mid-paragraph at «Here there is less subtlety:…» (offset after «(John 21:15). »).
- P3 heading/count: Argument A CONFIRMED. Argument B: WRONG-minor (overreach). The heading says «the triple question answers the triple denial»; Heschmeyer’s quoted sentence says Peter’s threefold *proclamation of faith* heals the threefold denial (it does not mention Jesus’s three questions). Wording: «Peter’s threefold profession heals his threefold denial». The «Ut unum sint 91» remark is about the page entry, not about these pages: not checked. Count (3 persons, 3 works): CONFIRMED.

### 6. John 20:21
- P6-1 Heschmeyer, «Who Can Forgive Sins?», 5 Jan 2023: CONFIRMED. Page label «Joe Heschmeyer:», byline Joe Heschmeyer • 1/5/2023; paragraph «He says to them, “Peace be with you.…», quote starts mid-paragraph at «Notice the theme of sending…».
- P6-2 Heschmeyer, «Why Confess Your Sins to a Priest?», 22 Oct 2024: CONFIRMED. Label «Joe:» (no CLIP: between label and quote); paragraph «Really it’s 20 to 23. But if you…»; the quote starts mid-paragraph and mid-sentence with «[…] he’s been given authority by…» (page: «…So I send you notice, he’s been given authority by the Father.»).
- P6 heading/count: CONFIRMED (1 person, 2 works).

### 7. Matt 10:2; Mark 3:16; Luke 6:14; Acts 1:13
- P7-1 Horn, «Peter Was Not a Pope»: CONFIRMED. Paragraph «Peter’s role as “chief apostle” is evident in…» is the whole of the paragraph's first sentence. Heading/count CONFIRMED; «Horn’s paragraph does not name the four verses» is true (paragraph: «…placed first in every list of the apostles. Since Judas is always listed last…»).

### 8. Acts 2:14; 2:37; 5:29
- P8-1 Horn, «Peter Was Not a Pope»: CONFIRMED. Same paragraph as P3-2, quote starts mid-paragraph at «the book of Acts describes…» and opens with «[…]». Heading «no verse of the three is named» is true (the paragraph names John 21:15–17 and Acts 15 only). Count CONFIRMED.

### 9. 1 Cor 15:5
- P9-1 Horn, «Peter Was Not a Pope»: CONFIRMED. Paragraph «Now, it’s true that Christ once called Peter…», quote is its last sentence, starts mid-paragraph at «After his Resurrection, Jesus even…».
- P9 count line: WRONG-minor (wording). «One sentence in an article on Peter’s failings»: the article is «Refuting Papal Myths – “Peter Was Not a Pope”» (a series of replies to objections); only that paragraph answers the objection about Peter’s failings. Say «one sentence in the paragraph that answers the objection from Peter’s failings».

### 10. Matt 16:23; John 13:38; Luke 5:8
- P10-1 Heschmeyer, «St. Peter: Rock or Stumbling-Stone?»: CONFIRMED. Paragraph begins «It’s here of all places that we get…» (the quote is the whole paragraph's first two sentences).
- P10-2 Horn, «Peter Was Not a Pope»: CONFIRMED. Paragraph «Now, it’s true that Christ once called Peter…» (quote = its first two sentences; the paragraph continues).
- P10-3 Broussard, «Protestant Comebacks When Catholics Say Peter Is Pope»: CONFIRMED. Paragraph «Catholics have no problem with identifying the connection…» is the whole quote; the paragraph before it is the Protestant objection and the heading «Answering the Comeback», so the count-line remark is true.
- P10 heading/count: CONFIRMED (3 persons, 3 works). The heading names no verse; the quotes name Matt 16:23 only (Horn).

### 11. Luke 22:26–27; Matt 20:25
- P11-1 Heschmeyer, «The Papacy in the Early Church», 23 Oct 2019 (print edition): CONFIRMED. Paragraph begins «At the Last Supper, contrasting the authority of…»; the quote ends at the end of the sentence, the paragraph continues.
- P11-2 Horn, «The Papacy is Unbiblical and Unhistorical», 21 Sep 2015: CONFIRMED. Paragraph «Some people object that if Peter and his…», quote starts mid-paragraph at «Jesus did say, however, that…».
- P11-3 Broussard, «Six Keys to Christian Unity», 20 Feb 2018 (print edition): CONFIRMED. Paragraph «I realize there are some who would like…», quote starts mid-paragraph at «Jesus tells the apostles they…».
- P11 heading/count: WRONG-minor (overreach). The heading’s «the model of the pope as “servant of the servants of God”» is said by Horn and Broussard only; Heschmeyer’s quoted sentence is about service in the Church and does not mention the pope or the title. Matt 20:25 (in the section title) is named in none of the three quotes (they name Luke 22:26). Count (3 persons, 3 works; reprint = one work): CONFIRMED.

### 13. John 17:21
- P13-1 Broussard, «Six Keys to Christian Unity»: CONFIRMED. Paragraph begins «Christian unity is something that cannot be ignored.…»; the quote names John 17:21.
- P13-2 Heschmeyer, «Why I Don’t Believe in Sola Scriptura», 9 Feb 2023: CONFIRMED. Label «Joe Heschmeyer:» (the page's other labels do not govern this paragraph), byline Joe Heschmeyer • 2/9/2023; paragraph «So he doesn’t tell the reformers in the…», quote starts mid-paragraph at «He tells them, don’t split…».
- P13 heading/count: Argument A CONFIRMED. Argument B: WRONG-minor (overreach). «Jesus prays for unity» is not in the quoted words (they say «He tells them, don’t split off… That’s John 17:20-23… I’m obviously paraphrasing»); the heading gives as Jesus’s statement what Heschmeyer calls his own paraphrase. Wording: «Heschmeyer, paraphrasing John 17:20–23: Jesus tells future generations to remain one». Count CONFIRMED.

## Sola Scriptura (`apologists-catholic-sola-scriptura.md`)

### 1. Matt 28:19–20; Mark 16:15
- SS1-1 Akin, «Magisterium», 13 Jan 2019 (print edition): CONFIRMED. Paragraph begins «A biblical basis for the Church’s teaching authority…», the quote is the paragraph's first sentence (the «. . .» inside the Bible quotation is the page's). Heading/count CONFIRMED.

### 5. 1 Tim 6:20; 2 Tim 1:12–14
- SS5-1 Horn, «Protestant Traditions You Won’t Find in the Bible», 6 Nov 2017: CONFIRMED. Paragraph «Protestants claim that the word of God is…», quote starts mid-paragraph at «Catholics agree that public revelation,…».
- SS5-2 Heschmeyer, «Will Rejecting Marian Dogmas Send You To Hell?», 28 Jul 2026: CONFIRMED. Label «Joe:», paragraph «So as we’ve already seen, for something to…», quote starts mid-paragraph at «We disagree, number one, on…».
- SS5-3 Broussard, «Where Catholics Go Wrong in Critiquing Sola Scriptura», 2 Feb 2026: CONFIRMED. Label «Karlo:» (the page also has «Adrian:»; it does not govern this paragraph); paragraph «Yeah, great question. My response is those apostolic…», quote starts mid-paragraph at «And so they’re of equal…» and ends «[…]» before «, which means in both cases…».
- SS5 heading/count: CONFIRMED (3 persons, 3 works). «None of the three names 1 Tim 6:20 or 2 Tim 1:12–14» is true.

### 7. Acts 2:42
- SS7-1 Heschmeyer, «Is the Bible “Self-Attesting,” or Do We Need the Church?», 20 Jul 2023: CONFIRMED. Label «Joe Heschmeyer:»; paragraph begins «We know this because the next verse says…» (the quote is the whole first three sentences; it opens with «this», whose antecedent is in the paragraph before).
- SS7-2 Horn, «What You Need to Know About the Reality of the Church and Ecumenism», 28 Mar 2017: CONFIRMED. Paragraph «Both the New Testament and the records of…».
- SS7 heading/count: WRONG-minor (overreach). «…under the apostles’ succession» is Horn’s point only (Heschmeyer’s quote speaks of communion/fellowship with the apostles and says nothing about succession). Count CONFIRMED.

### 11. 1 Thess 2:13; Heb 4:12; Acts 20:32
- SS11-1 Heschmeyer, «7 Bible Verses That DON’T Prove Sola Scriptura», 19 Dec 2024: CONFIRMED. Label «Joe:»; paragraph «It does not include only the written transmission…», quote starts mid-paragraph at «So when you cite to…». «one Thessalonians two 13» is the page's wording.
- SS11-2 Horn, «The Bible Blitzkrieg», 18 Mar 2024: CONFIRMED. Paragraph «“Right,” I told him, “but the word of…», quote starts mid-paragraph at «First Thessalonians 2:13 says the…» (the inner quotation marks ‘the word of God,’ are the page's). Heading/count CONFIRMED (the paragraph is Horn’s report of what he told a man, as the count line says).

### 13. Rom 12:6
- SS13-1 Horn, «The Bible Blitzkrieg»: CONFIRMED. Paragraph «But the Church has infallibly defined the meaning…», quote starts mid-paragraph at «The Church allows biblical scholars…».
- SS13-2 Akin, «The Limits of Scripture Interpretation», 1 Jan 2001 (print edition): CONFIRMED. Paragraph begins «Finally, the third limiting criterion named by Vatican…» (the quote is the first two sentences).
- SS13 heading/count: CONFIRMED. «Neither quoted line names Rom 12:6» is true; both name CCC 114 and «analogy of faith».

### 14. 1 John 2:20–27; John 16:13
- SS14-1 Heschmeyer, «Protestants Are Wrong About Mary’s Assumption. Here’s Why:», 15 Aug 2024: CONFIRMED. Label «Joe:»; paragraph «Now, that’s not just an argument from history,…», quote starts mid-paragraph at «At the last supper, Jesus…».
- SS14 heading/count: WRONG-minor (overreach). The heading says the Spirit of truth «guides the Church into all truth»; Heschmeyer says «Now, who’s that you? Well, probably the church.» The hedge is lost. Wording: «the Spirit of truth promised at the Last Supper guides «you» into all the truth: probably the Church (Heschmeyer)». John 16:13 is not named in the quote (only «At the last supper… spirit of truth»). Count CONFIRMED.

### 15. Heb 1:1–2
- SS15-1 Heschmeyer, «This Brand New Sola Scriptura Argument Surprised Me…», 5 May 2026: CONFIRMED. Label «Joe:»; paragraph «Now, Protestants will sometimes argue from this verse…», quote starts mid-paragraph at «And we know from history…» (page transcription «was incomplete on his own» is the page's wording).
- SS15-2 Heschmeyer, «What Sola Scriptura Gets Wrong About Revelation», 30 Dec 2019 (print edition): CONFIRMED. Paragraph begins «This conflation is genuinely tragic because Protestants are…», quote is the paragraph's first two sentences.
- SS15 heading/count: CONFIRMED (1 person, 2 distinct works: audio and magazine texts differ).

## Eucharist (`apologists-catholic-eucharist.md`)

### 3 (supplement to the pilot) · captions of Mo0BEpnpL5g
- Video facts CONFIRMED with `yt-dlp --dump-json`: title «AMA: LIVE from the Catholic Answers Conference w/ Joe & Jimmy | September 26, 2024», channel Catholic Answers Live, release date 2024-09-26 (live), upload 2024-09-27, duration 2:00:35. English track is a subtitle track (`subtitles: en`), file header «Kind: captions», no speaker labels and no punctuation. `&t=5969s` = 1:39:29 and `&t=6026s` = 1:40:26 are right.
- E3-1 Akin, «if the flesh profits nothing then Jesus died for nothing because he sacrificed his flesh on the cross for us […]»: WRONG (cue range only). The words are verbatim, in cues 1:39:29.56–1:39:39.44 («…I would say is if the flesh profits nothing then / Jesus died for nothing because he sacrificed his») and 1:39:39.44–1:39:47.48 («flesh on the cross for us and and he’s talking…»). The quote ends in the second cue, so the range is «1:39:29 to 1:39:47», not «to 1:39:54» (the cue 1:39:47–1:39:54 holds «if he’s saying my flesh profits nothing then he he died for no reason…», not quoted).
- E3-2 Akin, «the spirit gives life so the flesh the human perspective that’s closed off to Divine Miracles […]»: CONFIRMED. Cues 1:40:26.04–1:40:35 («…John / 6 the spirit gives life so the flesh the human») and 1:40:35.28–1:40:42 («perspective that’s closed off to Divine Miracles / um at least…»); «Divine Miracles» is capitalised in the captions.
- Speaker: the captions carry no label. The question runs from 1:34:30 («Andrea from boyy Idaho… hi Jimmy I love your show»; the live's description lists 01:35:15 «Bread of life discourse… the flesh of no avail» and names both Heschmeyer and Akin as guests); the answer begins at 1:35:27. Attribution to Akin rests on the caller’s «hi Jimmy» and on the clip's own title and description («Answering a Protestant Objection to the Eucharist (John 6:63) w/ @JimmyAkin», «Jimmy Akin helps a listener navigate a Protestant objection»): CONFIRMED as far as the page allows; it is an inference from the greeting and the clip's description, not a label.
- Clip `PucLuJsfekA`: CONFIRMED that it has no captions and no subtitles (`yt-dlp --list-subs`), duration 6:14, description «Full episode: https://youtube.com/live/Mo0BEpnpL5g»; the answer's last words at 1:40:48–1:40:55 are «…so that’s a basic look at how I would deal with it in outline form», so «the end of the answer (1:40:48)» is a few seconds early, still within the file's own «about 6 minutes» and its `[inference]` tag.
- E3 heading/count: heading CONFIRMED («the flesh the human perspective that’s closed off to Divine Miracles»). Count (3 persons joined with the pilot: pilot lines 17–18 Heschmeyer, 23–24 Broussard on John 6:63): CONFIRMED.

### 1. Matt 26:26–28; Mark 14:22–24; Luke 22:19–20; 1 Cor 11:23–26
- E1-1 Broussard, «Evidence Christ Offered the Last Supper as a Sacrifice», 26 Oct 2016: CONFIRMED. Paragraph «What’s the biblical support? Notice in the Last…», quote starts mid-paragraph at «In all of the institution…».
- E1-2 Heschmeyer, «The New Covenant Argument Against Baptist Theology», 4 Aug 2026: CONFIRMED. Label «Joe:»; paragraph «Well, since God is the author of both…», quote starts mid-paragraph at «Now, the parallel between behold…».
- E1 heading/count: WRONG-minor (overreach). Both speakers hedge and the heading drops it: Broussard «This suggests that the bloody sacrifice… was mysteriously made present…», Heschmeyer «I would suggest is already strong evidence that… what Jesus has in that chalice really is blood». Wording: «suggests / strong evidence». Count CONFIRMED.

### 10. Heb 7:11–27; Heb 9:12–14; Heb 9:27
- E10-1 Heschmeyer, «Does the Mass Put Jesus Back on the Cross?», 17 Apr 2025: CONFIRMED. Label «Joe:»; paragraph «But as it is, he has appeared once…», quote starts mid-paragraph at «So anyone who tells you…».
- E10-2 Broussard, «The Catholic Mass Is Profoundly Biblical», 1 Jul 2012 (print edition): CONFIRMED. Paragraph «As the Mass moves into the Liturgy of…», quote starts mid-paragraph at «For example, the bread and…».
- E10 heading/count: WRONG-minor (overreach). The heading’s «(«once for all» includes the offering in heaven)» is not in Heschmeyer’s quoted sentence; it says only that the once-for-all sacrifice is not «done on Good Friday» (the page says earlier, in the paragraph before the quote, «That is not when Christ entered into the holy place»). Quote the earlier sentence or drop the parenthesis. Broussard's remark «his sentence cites Heb 5:10, not chapter 7» is true. Count CONFIRMED.

### 11. Exod 12; 1 Cor 5:7
- E11-1 Horn, «The ‘Death Cookie’ and Other Eucharistic Whoppers», 26 Oct 2022 (print edition): CONFIRMED. Paragraph «John the Baptist said that Jesus was “the…», quote starts mid-paragraph at «The Passover lamb in the…» and ends with the paragraph.
- E11-2 Heschmeyer, «Do Protestants Really Worship God?», 29 Jun 2023: CONFIRMED. Label «Joe Heschmeyer:»; paragraph «First, he’s going to compare it to the…», quote starts mid-paragraph at «That’s Passover. This prefigures the…». The count-line remark («First Corinthians 15» for 1 Cor 5:7, the page's mishearing) is true: the paragraph ends «St. Paul says in First Corinthians 15.»
- E11 heading/count: CONFIRMED (2 persons, 2 works).

### 14. Acts 2:42; 2:46; 20:7
- E14-1 Horn, «What You Need to Know About the Reality of the Church and Ecumenism»: CONFIRMED. Paragraph «Both the New Testament and the records of…» (the quote is the whole paragraph; the same page used in SS 7).
- E14-2 Heschmeyer, «Are Seventh-Day Adventists Right about Sunday Worship?», 5 Oct 2023: CONFIRMED. Label «Joe Heschmeyer:»; paragraph «That doesn’t make sense. That’s fundraising 101. You…», quote starts mid-paragraph at «Now that’s important because we…» and ends with the paragraph.
- E14 heading/count: CONFIRMED with a note: the quoted Horn paragraph spends its first two sentences on apostolic succession; only the Acts 2:42 sentence and the Didache sentence support the heading. The count-line remark (Heschmeyer’s paragraph cites Acts 20:7 and 2:42) is true: the paragraph quotes Acts 20:7 before the quoted words and names Acts 2:42 in them; Acts 2:46 is not named.

## Baptism (`apologists-catholic-baptism.md`)

### 7. 1 Cor 6:11; 12:13
- B7-1 Heschmeyer, «The Critical Disagreements That Sparked The SSPX Schism…», 21 Jul 2026: CONFIRMED. Label «Joe:»; paragraph «They’re made members even in the priesthood of…», quote starts mid-paragraph at «It’s rooted in the words…».
- B7 heading/count: WRONG-minor (overreach). The heading says «baptism by other Christians is valid»; the quote says «the Catholic church recognizes the validity of Orthodox and Protestant baptism so long as they’re done in the proper way and with the proper intention». State the condition and that it is the Catholic Church's recognition. Count CONFIRMED.

### 8. Rom 5:12
- B8-1 Broussard, «Using the Bible to Explain Original Sin», 10 Jan 2023: CONFIRMED (quote line). Paragraph begins «The biblical text that the Magisterium has appealed…»; the quote is the first two sentences.
- B8-2 Akin, «The Limits of Scripture Interpretation», 1 Jan 2001 (print edition): CONFIRMED. Paragraph «(6) Romans 5:12 refers to the reality of original sin.» (a one-line list item). Count-line facts CONFIRMED: it is the sixth entry of Akin's list of seven, the lead-in is verbatim on the page («As far as I have been able to document, only seven passages of Scripture have had their senses partially (not fully) defined by the extraordinary magisterium. These definitions were made by the Council of Trent:»), and items (2–3) and (4–5) are pairs, so «sixth of the seven passages» holds.
- B8 heading/count: WRONG (heading). «Trent’s decree and the Catechism appeal to it (Broussard)»: Broussard’s quoted words mention only Trent. The Catechism is in the next sentence of the same paragraph, not in the quote: «The Catechism of the Catholic Church appeals to it, too, along with Romans 5:18-19, in its teaching that original sin is a consequence of Adam’s sin for all of humanity (402).» (https://www.catholic.com/magazine/online-edition/using-the-bible-to-explain-original-sin). Add that sentence to the quote or drop the Catechism from the heading. «Trent defined that sense (Akin)» is supported only by Akin's lead-in, not by the quoted line (the count line cites it). Count CONFIRMED.

### 13. Eph 4:30; Eph 1:13–14; 2 Cor 1:21–22
- B13-1 Heschmeyer, «SHOCKINGLY STRONG (and a lil cringe) Moments From the Alex O’Connor vs David Wood DEBATE», 10 Apr 2025: CONFIRMED. Label «Joe:»; paragraph «You see this in Acts explicitly, but nobody…», quote starts mid-paragraph at «So as a result, Judas…».
- B13 heading/count: WRONG-minor (overreach). «Baptism given by Christ through any minister is not repeated» is the paragraph's argument («it is Christ who baptizes… even a bad priest, a bad bishop, a bad pope»), but the quoted words say only that Judas’s baptism «sticks… creates this indelible mark» and John’s «has to be redone». The words «after Augustine» are supported by the paragraph («St. Augustine talks about this») but not by the quote. The count-line remark («paraphrases Augustine») is true. «none of the three verses is named» is true. Count CONFIRMED.

## Tally
| File | Quotes | CONFIRMED (quote line) | WRONG (quote line) | UNCONFIRMABLE | Heading/count: WRONG | Heading/count: WRONG-minor |
|---|---|---|---|---|---|---|
| papacy | 18 | 18 | 0 | 0 | 1 (P2) | 4 (P3-B, P9 count, P11, P13-B) |
| sola scriptura | 13 | 13 | 0 | 0 | 0 | 2 (SS7, SS14) |
| eucharist | 10 | 9 | 1 (E3-1 cue range) | 0 | 0 | 2 (E1, E10) |
| baptism | 4 | 4 | 0 | 0 | 1 (B8) | 2 (B7, B13) |
| total | 45 | 44 | 1 | 0 | 2 | 10 |

## Wrong items
1. Papacy 2, heading: «Cephas, which means “rock”» is shown only by Heschmeyer; Horn’s clipped quote ends before the meaning. Correct: extend Horn to «According to John 1:42, Jesus gave Simon the Aramaic name Kepha, which means simply “rock.”» (https://www.catholic.com/magazine/online-edition/refuting-papal-myths-peter-was-not-a-pope) or reword the heading.
2. Eucharist 3 supplement, first caption quote: cue range «1:39:29 to 1:39:54» should be «1:39:29 to 1:39:47» (the quoted words end in the cue 1:39:39.44–1:39:47.48).
3. Baptism 8, heading: «and the Catechism» is not in Broussard’s quoted words; the next sentence of his paragraph says it: «The Catechism of the Catholic Church appeals to it, too, along with Romans 5:18-19, in its teaching that original sin is a consequence of Adam’s sin for all of humanity (402).» Add it to the quote or cut the heading. «Trent defined that sense (Akin)» rests on Akin's lead-in, not on the quoted line.
4. Papacy 9, count line: «an article on Peter’s failings» is inexact; the article is «Refuting Papal Myths – “Peter Was Not a Pope”» (one paragraph answers the objection from Peter’s failings).
5. Heading overreach, minor (the quotes are right; the headings say more or less than the quoted words): Papacy 3 Argument B (Heschmeyer says Peter’s threefold *profession* heals the denial, not that the three *questions* do); Papacy 11 (Heschmeyer’s sentence does not mention the pope or «servus servorum Dei»; Matt 20:25 is in no quote); Papacy 13 Argument B (Heschmeyer: «I’m obviously paraphrasing»; «prays» is not in the quote); Sola Scriptura 7 (succession is Horn’s point only); Sola Scriptura 14 (the hedge «probably the church» is lost); Eucharist 1 (both hedge: «This suggests», «I would suggest is already strong evidence»); Eucharist 10 (the parenthesis about the offering in heaven is not in the quoted sentence); Baptism 7 (the validity holds «so long as they’re done in the proper way and with the proper intention», and it is the Catholic Church that recognises it); Baptism 13 («by Christ through any minister» and «after Augustine» are in the paragraph, not in the quoted words).

## Unconfirmable
- None at quote level.
- Statements in the count lines about pages not quoted («Akin’s “Peter the Rock” (1998) argues Kepha for Matt 16:17–19», «Heschmeyer’s “Corinthian Creed” episode uses 1 Cor 15:5 for the resurrection», «Akin cites John 16:13 in “Does God Pick the Pope?”», «Horn quotes 1 Cor 6:11 in an article on homosexual behaviour», «Horn’s hit on this passage is a quotation of Justin Martyr», every «not found» line) were not re-read: they need other pages and were outside the quotes. Neither confirmed nor denied here.
- «The reading the page takes from Ut unum sint 91» (papacy 3, Argument B) and «the reading of Lumen gentium 18 on the page» (papacy 6) refer to the site's own page entries, not to these sources: not checked.
- Speaker of the two YouTube quotes: the captions carry no labels; Akin is inferred from the caller's «hi Jimmy» and the clip's title and description (see Eucharist 3 above).

## Outside this file
- Nothing outside `verification-b2-2.md` needs a fix beyond the four checked files listed above. The `Progress` lines of the four checked files («Not yet read by a second reader») can now say that the quotes, locators, speakers, titles and dates of the round-2 sections were read against the pages by this pass; the count lines and headings need the corrections above first.
