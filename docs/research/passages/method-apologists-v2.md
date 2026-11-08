Status: proposal, NOT decided by Pedro (coordinator, 2026-11-08)

# Apologists layer, method v2: what the runs did, why coverage stayed low, and a faster way

**Goal (Pedro, 2026-11-08):** «encontrar apologistas fieles a sus tradiciones que presenten una defensa y argumento de cada versículo para su tradición», with the largest coverage possible, Catholic and Baptist first.

## 1. How the runs worked (from the repo)

| Run | Method | Sources | Result |
|---|---|---|---|
| Before B4 (rounds 1–3) | passage by passage: web search, read a whole transcript, cut, verify | YouTube captions through `yt-dlp` | many tokens per quote; HTTP 429 after ~20 caption requests (`apologists-catholic.md`) |
| B5 (2026-11-01 night) | **site corpus + verse index**: crawl a site once (WordPress REST, sitemaps), index every Bible reference by regex, read only the top hits | catholic.com, aomin.org, 9Marks, Truth Unites blog, Mohler, Jay's Analysis, LCMS, Credo, Steadfast, Reformation21; YouTube only through `transcript.js` (Pedro's logged-in session, 60–120 s per video) | method written in `method-apologists.md`; verdict: «the limit is the corpus, not the tool» |
| S2 (2026-11-03) | same, on new sites | Ligonier articles, Orthodox blogs (Arakaki, orthodoxinfo, OrthoChristian) | Orthodox and Reformed Sola Scriptura gained a few persons |
| C5 Codex (2026-11-08, 68 min) | same, with a 3-reads-per-passage cap and a read ledger | Catholic: Armstrong (1,470), Marshall (4,186), Catholic Answers (883), Hahn (168), Catholic Productions (24 transcripts); Lutheran Reformation, Steadfast | Catholic rows with ≥ 2 persons 44 → 57 of 64 |
| C5 Claude (2026-11-08, 22 min) | same | 9Marks (2,100), Credo (1,000), Truth Unites blog (577) | Baptist rows with ≥ 2 persons 2 → 48 of 280; **177 rows measured but never read**; 25 not found in those three corpora |

## 2. Why coverage stayed low (diagnosis)

1. **Text-only by rule, while the apologists speak.** Since B5 the method treats YouTube as a last resort «only for creators with no text», and the briefs of 2026-11-08 repeated it. Gavin Ortlund has a blog (577 posts, almost no verse hits), so his channel (≈ 494 videos in the B5 listing), where the arguments are, was excluded. Only 27 distinct videos are cited across all the non-Catholic files.
2. **Site-first, not person-first.** Corpora were chosen as sites, so everything said on **other people's channels** is invisible: debates, interviews and podcasts. Example found today: Ortlund and Joe Heschmeyer discussed the papacy on *The Cordial Catholic* (ep. 098, with Gospel Simplicity); Catholic Answers has several audio responses to Ortlund on the papacy; Ortlund answered Heschmeyer on his podcast. None was in any corpus.
3. **A verse-number index misses spoken arguments.** Speakers say «Matthew chapter 16» or «upon this rock», not «Matt 16:18»; a regex index finds lists, and misses expositions that never print the verse number (`method-apologists.md` already says captions give chapter-level hits only).
4. **Reading is the expensive step, and it ran in the most expensive place.** Claude sessions spend weekly points per window read; the cap of 3 reads per passage left 177 Baptist rows measured and unread.
5. **Some rows will never have two apologists.** The Baptist pages have 280 rows (Sola Scriptura 102) taken from the confessions' proof-text lists; popular apologists do not expound each of them. Without tiers, «complete» is not reachable and every run looks like a failure.

## 3. What the web says (checked 2026-11-08; sources at the end)

- **Podcasts are the open door.** Many of the listed apologists publish podcasts (Truth Unites, The Counsel of Trent, Shameless Popery, Pints with Aquinas, Issues, Etc., Ancient Faith shows); a podcast's RSS audio is published to be downloaded. Third-party transcript sites already hold some episodes (tapesearch, podscripts), machine-made and «not guaranteed to be accurate».
- **Local transcription is fast on this Mac class.** Whisper large-v3-turbo runs roughly 10–20× real time on Apple Silicon by the community benchmarks found (no controlled MLX podcast benchmark; this Mac is an M1 Pro, so expect the low end and measure it). An hour of audio would take a few minutes, costs no tokens and no API money.
- **YouTube captions:** 429s hit mostly auto-translated captions; original-language captions with fresh cookies and browser impersonation (`curl_cffi`) work better; «sign in to confirm» needs cookies; anecdotal reports only. The YouTube Data API allows 100 searches a day free and does not give captions of other people's videos.
- **Per-verse tradition commentary exists free for one tradition:** the *Reformation Study Bible* (R. C. Sproul, general editor) is free on Bible Gateway per passage, by Ligonier's permission. Other traditions' study Bibles found are paid (Bible Gateway Plus). Not checked: Bible Gateway's terms for automated reading.
- **Paid discovery search:** Exa costs about $7 per 1,000 searches with page contents (several 2026 sources; not read on Exa's own page).

## 4. Proposed method v2

1. **Person-first roster.** Per tradition, 5–10 apologists who pass `apologists.md`'s three proxies (Pedro approves the list); harvest **everything each one says on the four doctrines, wherever he says it**: own channel and podcast, appearances on other channels and podcasts, articles.
2. **Audio and transcripts as the main corpus.** Podcast RSS audio → local Whisper turbo with timestamps (and speaker separation for debates) → a transcript corpus with the episode URL and minute for every line. YouTube only where there is no podcast: captions through the logged-in route, original language only. Third-party transcripts only as leads, re-checked against the audio.
3. **Find the appearances.** Search per apologist × doctrine («Ortlund papacy debate», «Heschmeyer Ortlund») with the free web search the sessions already have, or a paid API if Pedro wants scale.
4. **Retrieval by meaning, not only by verse number.** Keep the verse index, add a local embedding index over transcript chunks, and query each row with the verse text plus the tradition's claim about it.
5. **Bulk screening in Codex, judgement in Claude.** Codex (subscription, no weekly Claude points) reads the candidate windows and proposes cuts with speaker and minute; Claude verifies a sample and writes the final records.
6. **Tiers and an honest finish line.** Tier 1: the core sets (`doctrines/scripture-lists/core-sets.md`); tier 2: the rest of the page rows. A row is finished when it has ≥ 2 persons or the whole roster was searched for it («no roster member expounds this verse for this doctrine»).
7. **Measure first.** Pilot: Baptist · Papacy with Ortlund's podcast and the debates found, one evening; report rows gained per hour and per point before scaling.

## 5. Open for Pedro

1. YouTube: download the audio and transcribe it locally (YouTube's terms forbid downloading without permission), or captions only through the logged-in route (slower, no download), or podcasts only.
2. Do the notes of a tradition's study Bible (the *Reformation Study Bible*, Sproul) count as part of this layer, labelled as such, or only named persons' arguments?
3. Discovery: the sessions' free web search, or a paid search API (Exa, about $7 per 1,000 searches).
4. The roster per tradition: approve or edit the names before the harvest.

## Sources
- The Cordial Catholic, ep. 098 «Is the Papacy True?» with Joe Heschmeyer and Gavin Ortlund: https://www.buzzsprout.com/268742/7986547 and https://nl.player.fm/series/the-cordial-catholic/ep-098-is-the-papacy-true-w-joe-heschmeyer-dr-gavin-ortlund-and-austin-suggs
- Catholic Answers responses to Ortlund: https://www.catholic.com/audio/sp/responding-to-gavin-ortlunds-the-papacy-is-not-from-god , https://www.catholic.com/audio/cot/responding-to-gavin-ortlund-on-the-papacy , https://www.catholic.com/audio/tjap/gavin-ortlund-the-papacy
- Truth Unites podcast transcripts (third party): https://podscripts.co/podcasts/truth-unites/when-did-the-papacy-begin-response-to-joe-heschmeyer
- Tapesearch transcripts (Pints with Aquinas, The Counsel of Trent): https://tapesearch.com/episode/the-early-church-was-catholic-joe-heschmeyer-ep-333/BgsohVXb7wuYjJoMGFWfLY
- yt-dlp subtitles and 429: https://github.com/yt-dlp/yt-dlp/issues/13831 , https://git.majorshouse.com/majorlinux/majorwiki/src/commit/1c17bdb60af941f67734f88377e2c981ec3bb222/05-troubleshooting/yt-dlp-fedora-js-challenge.md , https://vazdeng.pages.dev/en/2026/06/04/youtube-timedtext-bloqueia-googlevideo-nao/
- Whisper turbo on Apple Silicon: https://www.promptquorum.com/local-llms/apple-silicon-whisper-metal-benchmark , https://soniqo.audio/benchmarks , https://github.com/anvanvan/mac-whisper-speedtest
- YouTube Data API quota: https://developers.google.com/youtube/v3/determine_quota_cost
- Reformation Study Bible on Bible Gateway: https://www.biblegateway.com/blog/?p=24062 , https://theaquilareport.com/reformation-study-bible-available-on-bible-gateway/ ; Bible Gateway free and Plus: https://www.biblegateway.com/blog/2017/07/understand-your-bible-better-how-to-use-commentaries-study-bibles/amp/
- Exa pricing: https://exa.ai/docs/changelog/pricing-update.md , https://www.tinyfish.ai/blog/exa-pricing
