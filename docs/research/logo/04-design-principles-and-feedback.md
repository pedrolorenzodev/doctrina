# 04 · Design principles for tiny marks, and what people actually say

Accessed 2026-11-04. Tags as in README. «Pattern (n)» = how many independent sources in this file say the same thing; a single source is marked «single opinion».

## Part 1 · Principles

### 1.1 What a logo is for (identity theory)

- **Paul Rand**, «Logos, Flags, and Escutcheons» (1991), https://www.paulrand.design/writing/articles/1991-logos-flags-and-escutcheons.html [verified]: a logo «doesn't sell (directly), it identifies»; «A logo derives its meaning from the quality of the thing it symbolizes, not the other way around»; it «is rarely a description of a business»; «The role of the logo is to point, to designate-in as simple a manner as possible»; «Simplicity is difficult to achieve, yet worth the effort.»
- **Michael Bierut**, Design Indaba talk reported by Rob Alderson, It's Nice That, 2015-03-25, https://www.itsnicethat.com/articles/michael-bierut-logos-indaba [verified]: «A lot of what we see when we're looking at the logo isn't really happening in the logo; it happens in our own mind.» The «empty vessel» wording is attributed to him in a Vox video transcript [snippet only].
- **Sagi Haviv** (Chermayeff & Geismar & Haviv), interview on Logo Design Love, October 2010, https://www.logodesignlove.com/sagi-haviv-interview [verified]: «For a logo to work — and work for a long time — it must be simple»; «if the mark is simple and distinctive enough, it can take on any treatment or filter»; «I start off with the premise that there has to be a good reason for a symbol … Without a good reason such as these, the focus should be on the name of the entity represented.» His three criteria (appropriate, distinctive, simple) recur in secondary write-ups [snippet].
- **Apple HIG, App icons** (current page, via Apple's JSON), https://developer.apple.com/design/human-interface-guidelines/app-icons [verified]: «Embrace simplicity in your icon design»; «Find a concept or element that captures the essence of your app … and express it in a simple, unique way with a minimal number of shapes. Prefer a simple background, such as a solid color …»; «Include text only when it's essential to your experience or brand. Text in icons … is often too small to read easily»; «Prefer illustrations to photos»; keep «core visual features the same in the default, dark, clear, and tinted appearances».
- **NN/g**, Aurora Harley, «Icon Usability», 2014-07-27, https://www.nngroup.com/articles/icon-usability/ [verified]: «most icons continue to be ambiguous to users»; «Keep the design simple and schematic»; «Intricate details are difficult to distinguish at smaller sizes.»

Implications [inference]:
1. Rand + Bierut: the mark does not have to *explain* doctrine; it has to be a clean vessel that the product fills. Don't try to show «five traditions» in 16 px.
2. Haviv's rule cuts in Doctrina's favour for a **symbol**: the product name is provisional — that is «a good reason for a symbol» — so a non-letter mark survives a rename; a «D» does not.
3. Apple + NN/g + the survey (02): no text, no photos, no multi-letter monograms at 16 px.

### 1.2 Tiny-mark craft (16 px)

- **Pixel budget.** The tab draws 16×16 CSS px → 16 device px on 1× screens, 32 on 2× (Chromium `kFaviconSize = 16`, 01 §2 [verified]). Practitioners' guides converge on: one bold shape, 1–2 colours, no thin lines, no gradients, check at real size (wildandfreetools, faviconbuilder guides, gowintools «16x16 favicon story») [snippet]. Pattern (5+), but all vendor/tool blogs.
- **Separate small masters.** «The 16px and 32px versions often need different detail and hinting» (search summary of practitioner guides) [snippet]; the Evil Martians guide says add a 16×16 frame to the ICO only if the 32 blurs (01 §2 [verified]). A 2009 Typophile thread re-drew YouTube and BBC favicons with sub-pixel rendering and was widely discussed on HN (154 points, https://news.ycombinator.com/item?id=824359) [verified: HN metadata; the Typophile page itself not opened].
- **Stroke minimum** [inference from the rasters in 02]: strokes that render ≥ 2 device px at 32 px (i.e. ≥ 1/16 of the icon) survive; ESV's script, Ancient Faith's line dome and Quran.com's calligraphy (thinner) break up; Logos's magnifier ring (~3 px at 32) holds.
- **Counters and negative space** [inference from 02]: marks with one big counter (Sefaria's letter, USCCB's cross in circle, Vercel's triangle, Ghost's ring) read at 16 px; marks with many small counters (Vatican keys, GOARCH seal, JSTOR's ornate J, Olive Tree) collapse into a blob.
- **Filled beats outline** [inference]: of the bare outline marks in 02 (Ancient Faith, Library of America, ESV), all fail on at least one tab colour; filled tiles never vanish.
- **Squint / silhouette test** (classic studio test; stated in many guides) [memory — no primary source fetched]: blur or squint; if the silhouette doesn't say «this site», simplify.
- **Round-croppable**: Google shows favicons in a circle; John Mueller, 2024: «Round-croppable favicons, for those who like technical SEO.» (01 §2 [verified]).
- **Maskable**: content inside a centred circle of radius 40 % (web.dev, 01 §4 [verified]).

### 1.3 Colour and the tab strip

- **John Gruber**, «Safari Should Display Favicons in Its Tabs», 2017-08-10, https://daringfireball.net/2017/08/safari_should_display_favicons_in_its_tabs [verified]: for heavy tab users «favicons are the only way to identify tabs»; «Chrome's tabs are more usable because they show favicons».
- **Chris Coyier**, «You kinda want an orange favicon.», 2023-02-10, https://chriscoyier.net/?p=8896 [verified]: «you have no idea what the tab color behind a favicon will be like»; a favicon «should be able to withstand any color behind it», e.g. «a solid background»; pick a colour that «works on dark and light equally well».
- **Paco Coursey**, 2023-04-19, https://paco.me/writing/safari-favicon-showing-white-background [verified]: Safari plates low-contrast favicons in white in dark mode; fix by making the colour «brighter».
- **Squarespace help** (search summary): a favicon helps «differentiate one brand from another when several tabs are open»; avoid looking too similar to a well-known brand or peer [snippet].
- Pattern (4 independent: Gruber, Coyier, Paco, Squarespace + the 02 measurements): **the tab strip is a colour-and-silhouette game; a tile or a mid-luminance colour survives both themes.**

### 1.4 One system, many sizes

- Apple: keep core features the same across appearances (above).
- Haviv: a simple distinctive mark «can take on any treatment» (above).
- The surveyed brands that read best at 16 px (02 §4) use the *same* glyph from favicon to touch icon to header (Medium, Sefaria, Vercel, Aeon) [verified, visual]; YouVersion's touch icon carries «HOLY BIBLE» text that dies in the tab (02).
- Consequence [inference]: design the 16 px version first, then grow it (180 px touch, 1200×630 card, header lockup), not the reverse.

## Part 2 · What people actually say

### 2.1 Religious/Christian logo clichés

- **Church Marketing Sucks reader poll** (2006): most overused church-logo symbol — the cross «57%», the dove «29%» (https://churchmarketingsucks.com/2006/07/church-symbols-poll) [snippet — page not opened]. Same site: «Design Basics: How to Avoid the Overused Lambs, Doves & Flames in Your Church Imagery» (https://churchmarketingsucks.com/?p=8973) [snippet].
- **Logo-contest briefs** (LogoTournament): clients asking designers to «utilize a shape other than a cross»; a Westminster Presbyterian entry iterated by making the cross bigger and offering a dove-over-cross option (search summary of logotournament.com contest pages) [snippet].
- **LogoDesign.net guide**: a search for «free church logos images» returns «several very similar logos» built on a building silhouette with a cross on top [snippet].
- A church-branding article: new church plants launch with a template logo and end up with «the same dove-with-cross composition that forty other congregations in the metro also use» [snippet; author/URL not captured — weak].
- Pattern (4 sources, all snippets, mostly church-marketing trade): **cross, dove, flame, open Bible are the default; designers and clients alike try to escape them.** DESIGN.md's AI-slop list independently bans «crosses as decoration» and «stock Bibles».

### 2.2 What makes a Bible/theology brand look credible to serious readers

No study or thread found that answers this directly (could not confirm). Indirect evidence:
- **Christianity Today, 2024 redesign**: «Much of its inspiration was drawn from our 1960s era, particularly in the design of our new logo» (Daniel Silliman, CT, July/August 2024, https://www.christianitytoday.com/2024/07/ct-redesign-design-history-layout-font [verified]) — a serious Christian magazine went back to its mid-century typographic mark, not to a symbol. Its favicon is «CT» on black (02).
- **Alabaster × Pentagram** (early 2025): a faith publisher's rebrand with «a refined logo system with a newly designed icon, a structured grid system for all future books and a natural color palette»; the icon's filigree lines are said to represent the fragrance of the broken alabaster jar (Digital Journal / LA Weekly coverage, partner Luke Hayman) [snippet; Pentagram's and Alabaster's own pages returned 404/429].
- **IVP (2019)**: logo redesign to «reinforce our purpose, clarify our communication with readers» (ivpress.com press release) [snippet].
- **Sefaria** (02): the closest analog in mission (free library of primary religious texts, many voices, commentaries) uses one Hebrew letter on navy — scholarly, script-based, no symbol of a denomination [verified, visual].
- **Taylor, Halstead & Haynes 2010** (03 §7): Christian symbols in ads lowered perceived quality among less-religious consumers [snippet].
- Synthesis [inference]: serious reference brands in the sample signal credibility through **typography and restraint** (CT, Loeb «L», Folio «FS», Sefaria, Wikipedia «W», SEP), not through devotional imagery.

### 2.3 Rebrands of religious-adjacent apps and how they landed

| Brand | What changed | Reception | Source |
|---|---|---|---|
| YouVersion (2021) | new in-house logo; «spent months exploring dozens of ideas»; app icon «evolved» since 2008; «YouVersion Red, unique to us and recognizable» | designer's own posts; no public reaction found | Andrew Coss (@designbyremedy), Dribbble, 2021-11-16/17/29, https://dribbble.com/designbyremedy/projects/5305519-YouVersion [verified] |
| Bible Gateway (2013) | replaced «a stylized person proclaiming God's Word» with a doorway mark: «a place where you can enter into a deeper experience of engagement with the Bible» | announcement only | Andy Rau, Bible Gateway blog, 2013-12-03, https://www.biblegateway.com/blog/?p=8256 [verified] |
| Faithlife → green icon (2020) | one green Faithlife favicon across faithlife.com, ebooks and forum | Bruce Dunning: «I sort of preferred the old blue one but I must adjust with the times»; NB.Mick: all properties «share the same icon, which is a bit annoying … it still doesn't work well», suggests different colours or glyphs per property | Logos forum thread «New Green Faithlife Icon on Browser», 2020-12-02, https://community.logos.com/discussion/196899/new-green-faithlife-icon-on-browser [verified, 3 replies, 2.9k views] |
| Faithlife → Logos (2023) | company de-emphasised the green Faithlife mark to re-emphasise the blue Logos brand | trade press; forum mixed | Cascadia Daily, 2023-06-14 [snippet]; Logos forum «branding pivot» thread blocked (403) |
| Christianity Today (2013; 2024) | 2013: Metaleap Creative, short «CT» logo replaced the full masthead; 2024: logo inspired by the 1960s | — | christianitytoday.org press release 2013 [snippet]; CT 2024 [verified] |
| Alabaster (2025) | Pentagram, new icon and grid | — | [snippet] |
| Uniting Church in Australia welfare arm | dropped the cross/dove/boat logo for «Uniting» | criticised in Christian press | christiantoday.com [snippet] |
| UMC cross and flame | a Texas conference sought to replace it because of its association «for many with the racist imagery of a burning cross» | — | [snippet] |

Brand New (UnderConsideration) has a «Religion» archive (LDS 2020, Crossroads, Sandals, NewSpring, Centre for Public Christianity 2018 «Negatively Positive, Positively Negative») but reviews are paywalled; poll results and comments could not be read (https://www.underconsideration.com/brandnew/archives/industry/religion/ [verified listing]).

### 2.4 Favicon failures and tab-strip complaints

- **Hacker News, «Safari Should Display Favicons in Its Tabs»** (256 points, 135 comments, 2017-08-11, https://news.ycombinator.com/item?id=14993336 [verified via HN API]): yoodenvranx: «there is a general trend towards removing colorful icons and I hate that trend … they all have the same color and it is really difficult to tell them apart»; eugeniub: with 20 Stack Overflow tabs, «I'd prefer knowing that a particular range of tabs is all stackoverflow»; counter-view drcongo: favicons are «a really poor indicator of the content of the tab, especially when 20 of them are Stack Overflow»; m3kw9: «Favicons rainbowing up my top tab just acts as even more distractions.» Pattern: users rely on favicon **colour** to find a site among many tabs; a minority finds colour noise.
- **HN, «SVG favicons have some cool benefits»** (197 points, 2021-07-07, https://news.ycombinator.com/item?id=27762970 [verified]): mjsir911: in Firefox «prefers-color-scheme matches the content, not the chrome» (a dark browser UI with light content gets the light favicon); account42: Firefox with enhanced tracking protection «will always claim prefers-color-scheme: light». → second and third independent reasons the dark-mode SVG trick is unreliable (with WebKit bug 309949 and Coyier, 01 §3).
- **HN, «We analyzed 425k favicons»** (550 points, 2021-10-20, https://news.ycombinator.com/item?id=28933391 [verified]): mostly about method; the article's data are in 02 §4.
- **Faithlife forum** (above): one icon for several properties confuses users who keep them all open.
- **Measured in this run (02)**: 8 of 88 icons vanish on Chrome's dark tab (BibleGateway, LCMS, ELCA, Hallow, NYT, GitHub, Mubi, Library of America); 3 are weak on light tabs.
- Pattern (5 independent: Coyier, Paco, WebKit bug, two HN commenters, + measurements): **dark tabs break bare dark glyphs, and the media-query fix is partial.**

### 2.5 Monogram vs symbol

- Haviv: a symbol needs «a good reason», otherwise focus on the name [verified, above].
- Apple HIG: text only «when it's essential» [verified].
- In the survey (02 §4), monogram-on-tile is the most common editorial pattern (14/42) and the second in Christian media (8/36); letters work at 16 px only when single (Aeon «a», Economist «E», Sefaria) — two- and three-letter monograms (TGC, NYR, OCA, «Me») degrade [verified, visual].
- No forum debate specific to monogram vs symbol for religious brands was found (could not confirm).

## Could not open / confirm

- Reddit (r/logodesign, r/graphic_design, r/Christianity, r/Reformed, r/Catholicism, r/OrthodoxChristianity): reddit.com, old.reddit (login wall), the JSON API (403) and two archive APIs (Arctic Shift timeouts, PullPush 521) were all blocked this run. No Reddit quotes are included.
- Brand New review texts and comments (paywall).
- Bluesky / Mastodon / X designer threads (not searched: quota and access).
- Dribbble/Behance case studies for Hallow, Glorify, Dwell, BibleProject (none found).
- Material Design product-icon guidelines (page is client-rendered; not read).
- Draplin quotes on small sizes (only secondary).
