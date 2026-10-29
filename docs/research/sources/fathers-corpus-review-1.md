# Review 1: ten normalized texts against the print scans

Page file = leaf image in /Users/pedrolorenzo/doctrina-scratch/fathers-corpus/<folder>/pages/ (the printed page number is in brackets).

## Verdicts

- 1-clement: FAIL
- didache: FAIL
- ignatius-ephesians: FAIL
- ignatius-magnesians: FAIL
- ignatius-trallians: FAIL (typographic only)
- ignatius-romans: FAIL
- ignatius-philadelphians: FAIL
- ignatius-smyrnaeans: FAIL
- ignatius-polycarp: FAIL (typographic and structural only)
- polycarp-philippians: FAIL

## Confirmed defects

### 1-clement (folder 1-clement, file lightfoot-1890.json)
- 11: JSON "fore shown"; page prints "foreshown". page-288.jpg [p. 276].
- 12: JSON "are sojourning on the way"; page prints "are journeying on the way". page-289.jpg [p. 277].
- 15: JSON "but they cursed tongue they lied unto Him"; page prints "and with their tongue they lied unto Him" (JSON has "but they cursed" in place of "and with their", the words "with their" are missing). page-290.jpg [p. 278].
- 16: JSON "we belield Him"; page prints "beheld". JSON "shiall divide"; page "shall". JSON "Ttte chastisement"; page "The chastisement". page-291.jpg [p. 279] (belield and Ttte checked on the image; shiall is a non-word and OCR reads "shall").
- 23: JSON "compare yourselves imto a tree"; page "unto". page-296.jpg (OCR reads "unto", non-word in JSON; not looked at on the image).
- 34: JSON "Holy, Jioly, holy"; page "Holy, holy, holy" (OCR reads "holy, holy"). page-300.jpg (not looked at on the image).
- 36: JSON "Thou art My Son, 1 this day have begotten Thee"; page prints "I this day". JSON "I will give tim the Gentiles"; page "I will give Thee the Gentiles". page-302.jpg [p. 290].
- 38: JSON "afore-hand" (hyphen); the printed line breaks "afore-/hand", so the hyphen is a line-end hyphen, see "could not decide". page-303.jpg [p. 291].
- 46: JSON "With the guiltless man than shalt be guiltless"; page "thou shalt be guiltless". page-307.jpg [p. 295]. JSON "It were better for him that a mill-stone were about him"; page "were hanged about him" (word "hanged" missing; it is at the top of the next printed line, same page). page-307.jpg.
- 47: JSON "sted-fast"; the work prints "stedfast" elsewhere (ch. 1 and 17); here the print breaks "sted-/fast" at line end (hyphen is a line-end artefact). page-308.jpg [p. 296] (read from OCR text; image not opened).
- 56: JSON "herbage of tJie field"; page "the". page-312.jpg [p. 300] (image shows "the field" at the line end; the "tJie" itself is on the line above, not opened).
- 57: JSON "when confusion overtakcth you"; page "overtaketh". page-313.jpg (OCR reads "overtaketh", non-word in JSON; not looked at on the image).

### didache (lightfoot-harmer-1891.json). I read all seven pages (page-245 to page-251) against the JSON.
- 4: JSON contains the garbage characters "�LA1�" between "in shame and fear." and "Thou shalt hate all hypocrisy". Nothing is printed there (it is the inter-verse margin mark). page-247.jpg [p. 231].
- 10: JSON "from the four winds--even the Church which has been sanctified--into Thy kingdom"; page prints em dashes. page-249.jpg [p. 233].
- 11: JSON "or if there be need, a but if he abide three days"; page prints "or if there be need, a second likewise; but if he abide three days". Words "second likewise;" are missing and "a" is left dangling. page-249.jpg [p. 233].

### ignatius-ephesians (lightfoot-1889.json)
- prologue: JSON "plentitude of God the Father"; page "plenitude". page-558.jpg [p. 543].
- 20.2: JSON "that ye may obey the bishop and presbytery without distraction of mind"; page "obey the bishop and the presbytery". Word "the" missing. page-564.jpg [p. 549].
- Literal underscores (italic markup from the e-text) left in the text: 5.3, 10.2, 14.2 (twice), 15.1, 16.1, 18.1 (twice), 19.3 (twice). Print has italics, no underscores. Pages 560 to 564.
- Double hyphen "--" where the page prints an em dash: 1.1, 1.2, 1.3, 2.1, 11.1, 14.1, 19.1, 21.2. Pages 558 to 565.

### ignatius-magnesians
- prologue: JSON "Maeander"; page prints "Mæander" (see "could not decide").
- 5.1: JSON "Seeing them that all things have an end"; page "Seeing then that". page-566.jpg [p. 551].
- Underscores left in the text: 5.1, 10.3 (twice), 12.1, 13.1 (twice). page-566.jpg to page-568.jpg.
- "--" where the page prints an em dash: 1.2, 2.1, 5.1, 5.2, 9.1.

### ignatius-trallians
- Underscore left in the text: 8.2 ("_Woe unto him ..._"). page-571.jpg.
- "--" where the page prints an em dash: 3.2, 5.2, 6.1, 9.2, 11.1.
- Text otherwise matches the OCR chapter by chapter.

### ignatius-romans
- 1.2: JSON "hinderance"; page "hindrance". page-574.jpg [p. 559].
- 5.1: JSON "May nought of things visible and things invisible envy me"; page "May naught of ...". page-575.jpg [p. 560] (seen on the image).
- 7.2: JSON "+and speaking+"; page prints daggers "†and speaking†" (the JSON uses a plus sign). page-576.jpg [p. 561].
- Underscore left in the text: 5.1 ("_yet am I not hereby justified._").
- "--" where the page prints an em dash: 8.2, 9.1.

### ignatius-philadelphians
- 4.1: JSON "presbtery"; page "presbytery". page-579.jpg [p. 564].
- Underscores left in the text: 3.3 (twice), 7.1 (twice). pages 578, 580.
- "--" where the page prints an em dash: 1.2, 11.1.

### ignatius-smyrnaeans
- 9.1: JSON "is houroured of God"; page "is honoured of God". page-585.jpg [p. 570].
- "--" where the page prints an em dash: 1.2, 4.1.

### ignatius-polycarp
- "--" where the page prints an em dash: 2.3, 7.2, 8.1.
- No mid-sentence division boundary found in this letter.

### polycarp-philippians
- 4.2: JSON "and then our wives also"; page "and then your wives also". page-484.jpg [p. 472] (OCR reads "your wives"; the line is only partly visible on the image crop).
- 7.2: JSON "The Spirit is indeed willing"; page "The spirit indeed is willing" (word order). page-486.jpg [p. 474].
- 10.2: JSON "that your good works both ye may receive praise"; page "that from your good works both ye may receive praise". Word "from" missing. page-487.jpg [p. 475].
- 10.3: JSON "through whom the name of the Lord be blasphemed"; page "is blasphemed". page-487.jpg [p. 475].
- 11.3: JSON "which alone at that time knew God"; page "knew the Lord". page-487.jpg [p. 475].
- 11.3: JSON "labored"; page "laboured". page-487.jpg.
- 11.4: JSON "Therefore I am exceedingly grieved for him"; page "Therefore, brethren, I am exceedingly grieved for him and for his wife". Word "brethren" missing. page-487.jpg.
- 12.2: JSON "the eternal High-priest Himself the [Son of God Jesus Christ"; page "the eternal High priest Himself, the [Son of] God Jesus Christ" (hyphen added, the closing bracket after "of" is missing and moved/lost). page-488.jpg [p. 476].

### Structure, all Ignatius letters and Polycarp
- The edition prints chapter numbers only. The chapter.section divisions (for example 1.1, 1.2, 1.3) come from the e-text and are not printed. Several of these splits fall inside a sentence: ignatius-ephesians 20.1/20.2 (after "resurrection,"), ignatius-smyrnaeans 1.1/1.2 (after "by Him,"), polycarp-philippians 1.2/1.3 (after "on whom,"), polycarp-philippians 3.2/3.3 (after "given to you,"), Also lower-case starts at ephesians 1.2, 1.3, magnesians 5.2, 8.2, 9.2, trallians 6.2, 9.2, romans 1.2, philadelphians 8.2, smyrnaeans 3.2, 5.2, polycarp-philippians 2.3, 4.2, 9.2.
- "Epistolary greeting" is given as a heading on every `prologue`; the print has no such heading (it prints the letter title only).
- All chapter numbers printed in the edition have a division (Clement 1 to 65 plus prologue; Didache 1 to 16; Ephesians 1 to 21; Magnesians 1 to 15; Trallians 1 to 13; Romans 1 to 10; Philadelphians 1 to 11; Smyrnaeans 1 to 13; Ignatius to Polycarp 1 to 8; Polycarp 1 to 14). No chapter is duplicated or merged. No page header or footnote text found in any division.

## Could not decide
- Hyphens at a line end in the print where the JSON keeps a hyphen: 1-clement 38 "afore-hand"; polycarp-philippians 4.3 "sober-minded" and 7.1 "first-born" (printed "sober-/minded" and "first-/born"). The page cannot tell a line-end hyphen from a real hyphen.
- The ligature "æ": print shows "Mæander" (Magnesians prologue) and "Smyrnæans" (Magnesians 15.1, Trallians 13, Philadelphians 11.1, Ignatius to Polycarp prologue); the JSON writes "ae". Clement 6 JSON "Dircae" (OCR reads "Dirce"; image not opened).
- Punctuation only (not listed as defects): didache 1 "with him, one mile" (JSON has a comma the page does not), didache 5 "full of a curse murders" (page has a semicolon after "curse").
- The e-text and the print could not be compared for Didache by OCR (the OCR of that scan is cut at the right margin); all Didache comparison was done by reading the page images. I read each chapter against the page once; a one-letter slip could still have escaped.
- Ignatius Romans prologue and 4: OCR was too damaged for two short stretches ("church that is beloved", "yet if I shall suffer then am I"); JSON reads normally there, not checked on the image.
