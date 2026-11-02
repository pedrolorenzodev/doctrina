Status: draft, NOT verified by Pedro

# Method for the apologists layer: local corpus, verse index, read only the best segments (session B5, 2026-11-01 late night)

## Progress
- Written 2026-11-01 late night (session B5), after building and testing the pipeline on one source per tradition. Numbers below are what was counted that night; nothing here was read by a verifier yet.
- Scripts live in the session's scratchpad (outside the repo, by rule): `wpcrawl.py` (WordPress REST crawler), `vindex.py` (verse index builder), `vq.py` (query), `hitrate.py`, `longform.py` (Catholic long-form re-cut), `transcript.js` (the logged-in YouTube transcript route with 60–120 s random waits). If the next session needs them, they have to be rewritten or copied before the scratchpad is cleaned; the logic is described here.

## Why a new method
Until B4, work went passage by passage: search, read a whole transcript, cut, verify. It cost many tokens and hit YouTube's HTTP 429. The pipeline below moves the reading cost to scripts: crawl once, index every Bible reference, then ask the index «which texts say most about this verse» and read only the top candidates.

## The pipeline
1. **Corpus once per source.**
   - **catholic.com:** 1,963 pages (audio transcripts `sp`, `cot`, `ddp`, `tjap`, `drk`, and `magazine`, `tract`, `article`), reused from B2's crawl (the sitemap `…/sitemap` listing, pages fetched with curl and stripped to text). For quotes, the HTML is fetched again and split into `<p>`/`<h>` paragraphs (the stripped text loses paragraph breaks inside magazine articles).
   - **WordPress sites through the REST API** (`/wp-json/wp/v2/posts?per_page=100&page=N`, `content.rendered`, 1.5 s between pages; about 5 minutes for 8,000 posts, a verifier's re-run; longer for the largest sites): the site's own public API, not scraping around a block. Sites crawled that night: aomin.org blog (James White), 8,061 posts; Truth Unites (Ortlund), 577; Albert Mohler, 9,764; 9Marks (custom type `article`), 2,168; Jay's Analysis (Jay Dyer), 2,320; later in the night Lutheran Reformation (LCMS), Credo Magazine, Steadfast Lutherans, Reformation21 (see the crawl list in the log).
   - **YouTube captions:** `transcript.js` through Pedro's saved, logged-in session (one instance at a time; 60–120 s random wait between videos; stop at «sorry»/consent/captcha). Channel listings with `yt-dlp --flat-playlist` (one request per channel: Cooper 896 videos, Patristic Nectar 784, Ligonier first 1,200, Ortlund 494). Measured: one batch of 7 videos took about 9–10 minutes with the waits and returned the full caption list for each; no block or 429 in the batches run.
2. **Verse index.** A regular expression reads «John 6:53», «Jn 6», «1 Cor. 10:16–17», «Romans chapter six verses three and four», ranges up to 40 verses, chapter-only mentions, and the spoken forms of the transcripts; every verse of a range is indexed. Output `{John.6.53 → [(document, character offset)]}` with the repo's own book keys (`John`, `1Cor`, `Matt`…), so the result joins `data/corpus/bibles/*.json` directly. On 25,551 documents: 14,339 keys, 89,678 mentions, 164 s to build (a few seconds per query).
3. **Query per verse.** Documents are ranked by how many times they mention the verse (a document that cites it ten times is an exposition; one that cites it once is a list). Only the top hits are read, in a window of ±1,500 characters around the first hit, then the whole segment is cut by hand or script for the long-form record.
4. **YouTube is the last resort** (the written route first): captions are read only for creators with no text and only the videos whose titles name the doctrine or the passage. Auto-captions mostly give chapter-level references («Titus chapter 3»), almost never the verse number, so a caption hit is a lead to the minute, never a verse hit.

## What worked, per source (the tests: six verses, counts are documents that mention the verse; read 2026-11-01 night)

| Verse | catholic.com | aomin.org (White) | 9Marks | Truth Unites (Ortlund) | Mohler | Jay's Analysis (Dyer) |
|---|---|---|---|---|---|---|
| John 3:5 | 44 | 6 | 10 | 0 | 1 | 1 |
| Titus 3:5 | 18 | 8 | 6 | 0 | 2 | 0 |
| Acts 2:38 | 37 | 9 | 21 | 0 | 0 | 0 |
| Matt 16:18 | 109 | 48 | 56 | 3 | 4 | 8 |
| 2 Tim 3:16 | 31 | 47 | 53 | 2 | 7 | 5 |
| 1 Cor 11:24 | 15 | 7 | 15 | 0 | 1 | 0 |

| Col 2:12 | 20 | 5 | 6 | 0 | 1 | 0 |
| John 21:17 | 37 | 9 | 17 | 0 | 1 | 0 |
| 2 Thess 2:15 | 38 | 23 | 1 | 0 | 0 | 5 |
| John 6:53 | 26 | 11 | 2 | 0 | 2 | 0 |
| 1 Cor 10:16 | 20 | 2 | 15 | 0 | 1 | 0 |
| Gal 3:27 | 11 | 4 | 15 | 2 | 1 | 0 |
| 1 Cor 15:5 | 8 | 7 | 6 | 1 | 4 | 0 |
| Heb 1:1 | 5 | 17 | 10 | 2 | 4 | 2 |

(The table above was counted by `hitrate.py` on the index built that night: 25,551 documents, before the later crawls were added. Ortlund's blog never had more than 3 documents on any of the 14 verses tested. Tabletalk is not in the table: its posts are empty, see below.)

- **Catholic:** every tested verse has 15–109 pages. The index is enough; the limit is the independence of persons (see the Catholic files).
- **Reformed (aomin.org):** most hits are passing citations; the exceptions are real expositions: «Does The Bible Teach Sola Scriptura?» (James White, aomin.org, 10 mentions of 2 Tim 3:16–17). White's blog has real expositions on some passages (2 Tim 3:16–17 above; Acts 2:38, 1 Pet 3:21 and Acts 22:16 in «A Brief Rebuttal of Baptismal Regeneration», 1998); his church's doctrine page names no confession (`apologists.md`). For the Reformed (Westminster) Baptism page the routes were Sproul and Ferguson captions, Reformation21 articles and that White article.
- **Baptist:** 9Marks has articles written to a single point (for example «Does the Book of Acts Teach Spontaneous Baptisms?», 2020, mentions Acts 2:38, 41, 8, 9, 10, 16); it is a ministry with many authors, so a quote is attributed to the byline, never to «9Marks». Truth Unites is a blog on broad topics: almost no verse hits. Mohler's posts include sermon manuscripts; the WordPress author field on that site prints the same name («Luke Pierce») on the sermon manuscripts and addresses sampled, so it is a site user and not the speaker: the speaker must be read from the page itself before any quote is attributed.
- **Lutheran:** no large text corpus found for a recognised person: Issues, Etc. posts are audio players with a one-line guest description (no transcripts); Just and Sinner has no REST API (404); Cooper's videos are the usable text, through captions only. His one-hour lectures cite many verses briefly (Titus 3:5 once, in the 56th minute of the baptism lecture).
- **Orthodox:** Jay's Analysis (Dyer) has few verse hits and mostly polemic; Ancient Faith's episode pages sell transcripts per episode («$1.25 per audio minute») and show none; Patristic Nectar's sitemap has 29 URLs, 14 of them written articles (none on these doctrines), and short videos. The Orthodox side has the thinnest text.

## What did not work (so nobody tries it again)
- **Tabletalk** (`tabletalkmagazine.com`): the REST API returns 694 posts with empty `content` (median length 0).
- **Ligonier:** my first look at `learn.ligonier.org/articles` found no article links in the page and I took it for a JavaScript application behind a sign-in; the verifier found it server-rendered and open, with an articles sitemap of 2,814 URLs: **not crawled** (a lead for the next pass, for Reformed Sola Scriptura and the Orthodox-free gaps). The `www.ligonier.org` sitemap has 2,272 posts (giving posts and «Ask Ligonier» Q&A pages with a video and no transcript in the HTML), 114 FAQs and 34 giving pages.
- **Monergism, Desiring God, The Gospel Coalition:** HTTP 403 for scripted requests: not worked around.
- **yt-dlp subtitles in bulk:** blocked by 429 in earlier sessions; the logged-in transcript route replaced it.
- **A verse index over auto-captions** gives chapter-level hits only (the speakers say «Titus chapter 3»).

## Verdict
Adopted for everything below. The index finds the candidates cheaply and tells which documents spend real space on a verse; it does **not** decide that a candidate explains the tradition's reading in depth, so each candidate is read before it is cut, and every record keeps the tag `[long-form: trim before public release]` with the exact paragraph boundaries. For the non-Catholic traditions the limit is not the tool but the corpus: the recognised creators speak mostly in video and audio, so the in-depth, verse-level text that exists is a handful of articles and sermons per tradition. Coverage per verse, tradition and apologist is in the non-Catholic files; where a verse has no second person, the file says so.

## Legal and safety notes
- Crawled through public APIs and sitemaps, one request at a time with waits, no login except Pedro's own YouTube session for captions (authorised by him for this use). Texts stay in the scratchpad; the repo gets only the cited segments with URL and locator.
- Long-form storage is allowed only while the project is private (DECISIONS 2026-11-01 late night); every segment is tagged for trimming before launch.
