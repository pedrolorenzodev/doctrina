# AI chat in the reader and paragraph simplifier: research

Researched 2026-10-28 (twelfth session). Foundation for a proposal Artifact with many final-design variants of two features: (1) an AI chat inside the source reader (Bible chapter or a Father's work), (2) a paragraph simplifier (hard text to plain language, with a way back to the original).

Tags: `[verified]` = read today at the URL (page fetched); `[search]` = reported by a search result summary, page itself not fetched or blocked; `[inference]` = my reasoning; `[not verified]` = could not confirm.

## Progress

- **Status:** DONE (2026-10-28). All sections written; nothing verified for Reddit or App Store reviews.
- Done: 1 products; 2 user voices; 3 research on reading and plain language; 4 patterns; 5 pitfalls; 6 candidate guardrails; 7 Doctrina context; 8 variants (18 chat, 18 simplifier, motion rules, demo sets, discarded); 9 decisions.
- Not reached, so say so in the proposal: Reddit and App Store reviews (not indexed by the search tool), Speechify and Rewordify as products, Copilot in Edge beyond a Canary report, Claude Projects, Arc Max, how Gemini in Docs shows sources, Apple Writing Tools revert behaviour, Ars Technica «pretty bad» article (blocked), OpenAI help pages (403).
- Reading note: sources fetched but vendor-authored (Google Research, Logos, Amazon) are marked as vendor claims. Fetches returned model-summarised page content, so quotes are short and should be re-read at the URL before being printed in the product.

---

## 1. Products, factual notes

### 1.1 Kindle «Ask this Book» and «Recaps» (Amazon)

- **Ask this Book** `[verified]` https://www.digitaltrends.com/phones/kindles-new-ask-this-book-feature-lets-readers-get-answers-without-leaving-the-page/ : Q&A in the Kindle iOS app (US only at launch). Entry: highlight a confusing passage, or open a menu, and ask about plot, characters, themes without leaving the book. The AI «knows only what you've read up to that exact page» (a «spoiler guard»). The app proposes suggested questions and you can type your own. Android and e-readers announced as later. The article does not say how answers are labelled or whether they cite passages `[not verified]`.
- **Recaps / Story So Far** `[verified]` https://www.aboutamazon.com/news/books-and-authors/kindle-recaps-feature-ebook-series-refreshers : «Previously on» refreshers for series; «Story So Far» is spoiler-free up to the page you are on, reachable from the three-dot menu while reading or by press-and-hold on a book. Only books bought or borrowed. No labelling scheme described.
- **Why it matters for Doctrina** `[inference]`: the useful idea is **scope by reading position** (the AI is bounded to a declared window of text). For Doctrina the equivalent is «bounded to this chapter / this work / the corpus», shown to the reader as a visible scope chip.

### 1.2 Readwise Reader «Ghostreader»

- Source `[verified]` https://docs.readwise.io/reader/guides/ghostreader/chat
- **Entry (web/desktop):** «Chat» in the right sidebar; backtick twice cycles panels. **Mobile:** an «Ask anything…» field in the bottom toolbar, the «…» menu, or a ghost icon in a highlight's annotation bar. Chat opens as a **sheet over the document**, swipe down to close.
- **Context:** the model sees the document, its metadata and your reading position, plus chat history for follow-ups. Starting from a highlight attaches that passage and the preset prompts change by selection type (word, passage, whole document).
- **Saving:** a notebook icon under each answer saves it into the document note; a copy icon copies it. «Clear chat» erases everything.
- **Models:** «Fast» vs «Thinking» selector at the bottom of the chat field.
- **Citations:** none described for single-document chat (only for the library-wide «Global Ghostreader») `[verified]`.
- **Highlight-level prompts** `[search]` https://docs.readwise.io/reader/guides/ghostreader/overview : select text, invoke from context menu or `G`; default prompts: summarize, look up terms, translate; selecting 1-4 words shows a different menu than a passage.
- **Takeaway** `[inference]`: three-level entry (word / passage / whole) with different preset prompts; «save the answer as a note» turns AI text into the reader's own annotation.

### 1.3 Logos Bible Software

- Source `[search]` (Logos pages return 403 to the fetcher): https://support.logos.com/hc/en-us/articles/23526184005261-Smart-Search , https://community.logos.com/discussion/comment/1312205 , https://wiki.logos.com/36.0.0_$281360000852$29
- **Smart Search Synopsis (v36):** takes the top 5 results from the user's library and writes one answer **with citations to Logos books**; «Search Summary» condenses a single article. Requires Premium or higher; consumes monthly **AI credits**. Logos says it tells the user when it cannot find a good answer. Known issue: some encyclopedia citations not formatted per SBL (they still link to the right article).
- Subscriber feedback is mixed: wants the AI to prioritise the resources set in the Library; one error message after an update `[search]`.
- **Takeaway** `[inference]`: the model is a **retrieval-first** one: answer = synthesis of retrieved passages from named books, each with a citation that links to the book. This is the closest commercial analog to Doctrina's rule «no claim without a citation».

### 1.4 Apple Intelligence: Writing Tools and notification summaries

- **Notification summaries, BBC and the pause** `[verified]` https://www.siliconrepublic.com/business/apple-halt-ai-notification-summaries-backlash-features (17 Jan 2025): after the BBC complained about false alerts (e.g. a false line about a named murder suspect), and Reporters Without Borders called for changes, Apple paused summaries for News & Entertainment apps in iOS 18.3 beta. Announced fixes: a **label saying the summary is beta and may contain errors**, **italic text** to set summaries apart from normal notifications, and an off switch per app from the Lock Screen. Also `[search]` https://www.mediaite.com/media/news/apple-suspends-ai-news-alerts-after-false-bbc-story-claimed-luigi-mangione-shot-himself . Silicon UK additionally reported inaccurate summaries of New York Times content `[search]`.
- **Lesson** `[inference]`: the failure was compression of a source into one line **without the source visible next to it and without marking**; the fix was marking (italics, label), not accuracy. For a simplifier: never separate the summary from the original.
- **Writing Tools** (select text, Rewrite / Proofread / Summarize / Key Points; Friendly, Professional, Concise tones; revert): the Apple support page fetched today did not contain the section `[not verified]` https://support.apple.com/guide/iphone/use-writing-tools-iphe2b7bb3a4/ios . To be re-checked before the proposal quotes it.

### 1.5 Google app «Simplify» (iOS) and Chrome/Gemini

- **Simplify** `[search]` (neowin returned 403): https://www.neowin.net/news/google-app-for-ios-gets-new-ai-powered-simplify-text-feature , https://www.androidcentral.com/apps-software/google-assistant/google-app-on-ios-gets-a-new-feature-that-will-simplify-text-online . Launched May 2025 in the Google app (iOS 6.110+, US English). A «Simplify» icon appears on dense text; tapping it shows a **simpler version of the highlighted text**. Google Research says the aim is to keep the facts, unlike summarisation (omits) or explanation (adds). One source claims on-device processing; I found no confirmation `[not verified]`.
- **Gemini in Chrome side panel** `[search]` https://oneit.charlotte.edu/2026/05/28/ai-helpful-tips-ask-chrome/ , https://www.androidauthority.com/gemini-chrome-integration-3635307/ : icon top-right opens a side panel that uses the current tab as context by default; needs sign-in, not in Incognito. Whether a highlighted passage can be sent to it was not confirmed `[not verified]`.
- **Takeaway** `[inference]`: Google's explicit design goal «simplify, not summarise, not explain» is exactly the contract Doctrina wants for the simplifier: same content, shorter words and sentences, nothing added.

### 1.6 Dia (The Browser Company) «ask the page»

- Source `[verified]` https://www.testingcatalog.com/dia-browser-debuts-in-public-beta-for-arc-members-with-ai-powered-tools ; also `[search]` https://www.igeeksblog.com/dia-ai-browser-mac-launch/ . The address bar doubles as chat input. A Chat button in the tab opens a sidebar assistant. Open tabs can be added as context with @; the sidebar can be detached; «Skills» are reusable instruction sets (shortcut-triggered). No model selector. It cannot yet act on pages. Selected-text handling and citations not covered by the article `[not verified]`.
- **Takeaway** `[inference]`: «Skills» = saved prompts is an easy pattern for Doctrina: a few fixed, curated actions («Explain this word», «Who cites this?», «What does each tradition say?») instead of an empty box.

### 1.7 Microsoft Edge: Copilot and Immersive Reader

- Source `[search]` https://windowsreport.com/microsoft-edge-tests-copilot-immersive-reader-mode/ , https://support.microsoft.com/topic/78a7a17d-52e1-47ee-b0ac-eff8539015e1 . Immersive Reader's own tools are non-AI: text size/spacing/themes, **Line Focus (1, 3 or 5 lines)**, picture dictionary, read aloud, translate. Microsoft was testing (Canary) Copilot actions (Summarize, Explain, Chat) in the reader toolbar that open **in the side panel, not inside the reader**. No per-user reading-level setting found `[not verified]`.
- **Takeaway** `[inference]`: separating deterministic reading aids (line focus, spacing, define-a-word) from generative ones is a useful trust ladder: the first never changes the text.

### 1.8 YouVersion and Bible AI

- Source `[verified]` https://www.christianpost.com/news/ais-bible-misquotes-range-from-15-to-60-youversion-ceo.html : CEO Bobby Gruenewald said top AI models with popular Bible versions «misquote Scripture at least 15% of the time», some up to 60%; **no study, dataset or model names are cited** (so treat the number as an unsourced claim `[inference]`). YouVersion **chose not to launch a public chatbot that answers theological questions**; it uses AI internally. It is challenging model makers to improve; Gloo is building values-based evaluations (per a 2025 Reuters report cited there). He urges people to know Scripture and consult pastors.
- Related `[search]` https://www.christiantoday.com/news/ai-still-too-inaccurate-when-it-comes-to-scripture-says-youversion-founder , https://christianpost.com/news/youversion-founder-talks-concerns-about-pastors-embrace-of-ai.html .

### 1.9 ChatGPT: canvas, «ask about selection», reading level

- Source `[verified]` (secondary but fetched) https://www.datacamp.com/blog/chatgpt-canvas ; primary `[search]` (OpenAI pages returned 403): https://help.openai.com/en/articles/9930697-what-is-the-canvas-feature-in-chatgpt-and-how-do-i-use-it , https://openai.com/index/introducing-canvas/
- **Layout:** side by side, chat left, document right. **Selection:** select text and a small prompt popup asks for a change (or a question) on that section. **Shortcut menu** (bottom-right): adjust length, **adjust reading level «Kindergarten to Graduate School»**, final polish, emojis; a tool icon first turns into an arrow and needs a second click to run (prevents accidental runs).
- **Suggest mode:** proposed edits are marked **beside the text** and each can be **accepted or ignored**. **Versions:** back/forward arrows top-right once a second version exists, and a **diff button** shows what changed between versions. Export is copy-only.
- Canvas was reported as web/desktop only, not mobile app (March 2026 Coursera guide) `[search]`.
- **Takeaway** `[inference]`: the reading-level slider (K to graduate) is the most copied simplifier control; the accept/ignore diff and version arrows are the best «way back» pattern in the market. Canvas is built for writing (the user's own text), so «Replace» semantics do not transfer: for sacred sources the original must never be overwritten.

### 1.10 Claude: highlight-to-edit, Citations API

- **Highlight to improve** `[search]` https://www.tomsguide.com/ai/claude-artifacts-get-a-big-update-now-you-can-highlight-and-edit-code-with-text , https://zapier.com/fr/blog/claude-artifacts : select part of an artifact, a floating toolbar offers «Improve», you describe the change; only that section changes (inpainting-style).
- **Citations API** `[verified]` https://platform.claude.com/docs/en/build-with-claude/citations : the app passes documents with `citations: {enabled: true}`; the model returns answer text blocks each carrying `citations` of type `char_location`, `page_location` or `content_block_location`, with the **exact `cited_text`** and indices into the provided document. Docs say these are «guaranteed to contain valid pointers to the provided documents» (the pointer is valid; whether the sentence is *supported* is a separate question `[inference]`), `cited_text` does not count toward output tokens, streaming delivers a `citations_delta` per citation, and citations are **incompatible with structured outputs** (400 error). Custom content documents let the developer choose the citation granularity (e.g. one block per verse or paragraph) `[inference from the three location types]`.
- **Takeaway:** for Doctrina, if the chat is built on a model with a native citation mechanism, each citation chip can carry the exact quoted words and a location (work, chapter, paragraph) that the UI can open in the reader and highlight.

### 1.11 NotebookLM (Google)

- Source `[verified]` https://support.google.com/notebooklm/answer/16179559 : chat answers draw on the user's uploaded sources, the user chooses which sources are active; citations appear as quotes, text or images; **hover a citation to see the full quote, select it to see the passage in context**; «Configure chat» sets style (Default, Learning Guide, Custom) and response length; responses can be **saved as notes keeping tables and inline citations**; chat history private; **Stop / Keep generating** while a request runs; for questions it cannot answer it says so (a «can't answer this question» message).
- Secondary `[search]` https://www.tomsguide.com/ai/i-didnt-know-notebooklm-could-do-this-10-features-hiding-in-plain-sight , https://techradar.com/computing/artificial-intelligence/googles-notebooklm-is-now-an-even-smarter-assistant-and-better-fact-checker : numbered inline citations; clicking jumps to the highlighted passage in the source pane; a very short source may be cited whole.
- **Takeaway** `[inference]`: hover = quote, click = passage in context is the best source pattern, and it fits Doctrina's reader exactly (the source *is* the page).

### 1.12 Perplexity (citations) and the audits of AI citations

- Source `[search]` https://futureagi.com/blog/perplexity-ai-review-citations/ (review blog, SEO-style, low weight): numbered citations are attached after the answer is composed, so a number marks a document that informed the answer, not a checked quotation of that sentence `[not verified as a product fact]`.
- **Tow Center / CJR, March 2025** `[verified]` https://www.cjr.org/tow_center/we-compared-eight-ai-search-engines-theyre-all-bad-at-citing-news.php : eight AI search tools were given exact excerpts of news articles and asked to identify headline, publisher, date and URL (1,600 queries). Collectively wrong on more than 60 % of queries; Perplexity wrong 37 %, Grok 3 94 %; most tools **rarely declined or hedged**; Copilot declined more than it answered; more than half of Gemini's and Grok 3's answers cited fabricated or broken URLs; premium versions were more confidently wrong. Limit: one run per excerpt, news only.
- Another audit (Haus Research: 34.7 % of citations on numeric claims did not support the figure) comes only from a search summary `[not verified]`.
- **Takeaway** `[inference]`: a citation is not evidence unless the UI lets the reader see the quoted words next to the claim. Doctrina can do better than Perplexity because the source is local: it can verify mechanically that the quoted string exists in the cited edition before showing the chip.

### 1.13 Notion AI, Kagi, Gemini in Docs, Copilot

- **Notion AI** `[verified]` https://www.notion.com/help/guides/notion-ai-for-docs : highlight text, «Edit with AI», give an instruction, then **accept, discard or try again**. Older menu (six-dot handle, «Ask AI», «Simplify language», «Change tone») and «Replace selection» / «Insert below» from third-party guides `[search]` https://www.slashgear.com/1304573/notion-ai-note-taking/ . Insert-below is the «keep the original beside the new text» pattern.
- **Kagi Universal Summarizer** `[verified]` https://blog.kagi.com/universal-summarizer : «Summary» vs «Key moments» modes, a formal engine (Agnes) vs a friendly one (Daphne), output language chosen separately (30), handles very long documents, billing capped per document; chat with the document was «on the roadmap» at the time of the post `[verified as of that post]`. No accuracy claims.
- **Gemini in Docs** `[not verified]` (the search returned nothing usable); **Copilot in Edge** summarised in 1.7.

### 1.14 Bible and religious AI products

- **Bible Society and Cambridge, «AI, Bible Apps and Theological Bias» (Jan 2026)** `[verified]` https://www.christiantoday.com/news/concerns-raised-over-theological-bias-in-ai-bible-chatbots : tested ChatGPT, Bible GPT, Cross Talk, Biblia Chat and Bible Chat on theological questions drafted with theologians. Findings: answers leaned to **US evangelical** interpretation; **one interpretation was presented as definitive** with little mention of historical, sacramental or tradition-based readings; users tend to assume AI answers are neutral; instant confident answers may discourage slow study. Pastoral tone was praised. Recommendation: tools should **expose users to a range of interpretations** while supporting deeper engagement in their own tradition. Bible Society is building its own tool that «encourages deeper engagement rather than quick or simplified answers». Also `[search]` https://www.churchtimes.co.uk/articles/2026/23-january/news/uk/bible-society-backs-testing-of-chatbots-on-scripture , https://scripture-engagement.org/content/ai-bible-apps-and-theological-bias/ .
- **Catholic Answers «Father Justin» (April 2024)** `[verified]` https://americamagazine.org/faith/2024/04/25/ai-priest-catholic-answers-laicized-father-justin-247799 : an AI avatar dressed as a priest claimed it could absolve and marry; within a day Catholic Answers made it a lay «Justin». Critics: weak edge-case testing, and one chaplain said it «should've just been a plain search engine». Lessons stated there: test sacramental and identity edge cases, explicit rules so it does not overstate its authority, verify against official teaching, be transparent that it is automated.
- **Magisterium AI (Longbeard)** `[search]` https://www.usccb.org/news/2024/catholic-chat-bot-putting-ai-service-church , https://www.ncregister.com/news/magisterium-ai-a-game-changer-for-the-church : answers drawn from a restricted corpus (reported as 5,700+ magisterial documents and 2,300+ theological works) with references linking to the documents; the founder: «The AI is not the Magisterium». One report says it answered «no» on a question where a recent Vatican decision had changed practice `[not verified]` (Christian Today). Closest religious analog to a corpus-bound, cited assistant.
- **Logos** (see 1.3) plus the **AI Sermon Assistant** controversy `[search]` https://christoverall.com/article/concise/encore-a-brave-new-world-of-preaching-logos-ai-sermon-assistant-and-the-ethics-of-sermon-prep/ and https://puritanboard.com/threads/ai-and-sermon-prep-how-far-is-too-far.114506/ : critics object to AI *writing* sermons (not to AI search); a Logos employee had written «Preachers, don't have AI write your sermons». I found no Faithlife statement `[not verified]`.
- **YouVersion** (see 1.8): no public theological chatbot, by choice.
- **biblechat.ai** appears on HN with 3 comments `[search]` https://hn.algolia.com/api/v1/search?query=AI%20Bible%20chat&tags=story ; not reviewed `[not verified]`.
- **Vatican, «Antiqua et Nova» (28 Jan 2025)** `[verified]` https://www.vatican.va/roman_curia/congregations/cfaith/documents/rc_ddf_doc_20250128_antiqua-et-nova_en.html : ¶84 «current AI programs have been known to provide biased or fabricated information» and «the use of AI should always be transparent and never misrepresented»; ¶86 describes «hallucination»; ¶70 «AI should assist, not replace, human judgment»; ¶82 many AI systems «merely provide answers instead of prompting students to arrive at answers themselves»; ¶82 education should promote critical thinking. (Only the first 100,000 characters were read.)

### 1.15 Additions found late

- **Logos Study Assistant (v46/47, Premium and up)** `[verified]` https://www.logos.com/grow/release-november-2025/ and `[search]` https://community.logos.com/kb/articles/2919-logos-46-0 , https://support.logos.com/hc/en-us/articles/40263191750285 : a conversation over the user's library that returns a **cited answer**; follow-ups allowed; opens from the Tools menu, from Factbook, or from a Smart Search Synopsis; Factbook has a «Questions» section where clicking a question shows a cited answer and a path into the chat; the user chooses **«Your books» or «All books»** as scope. Citations are inline, open the surrounding context, and (per the release notes) point to the specific passage used. Hover on a footnote shows a snippet and which part of the answer comes from it; click opens the book with a **temporary highlight** `[search]`. Marketing claims that, since all answers come from Logos resources, the AI isn't making things up `[verified as a claim, promotional, not an evaluation]`. Called a «first iteration». Needs AI credits `[search]`.
- **Gemini side panel in Docs** `[search]` https://support.google.com/docs/answer/14355406 , https://www.neowin.net/news/gemini-side-panel-is-now-rolling-out-to-google-docs-drive-slides-and-other-apps/ : «Ask Gemini» button top right opens a **side panel**; on open it shows a summary of the document and suggested prompts; highlight text and ask for a summary; each response has thumbs up/down and a **preview before inserting**. Source display not confirmed `[not verified]`.
- **Safari Reader summaries (Apple)** `[search]` https://webkit.org/blog/16188/webkit-features-in-safari-18-1 , https://9to5mac.com/2024/07/30/safari-gets-apple-intelligence-upgrade-in-ios-181-with-new-summarize-feature : a «Summarize» button at the top of Reader; summary appears **at the top of the page on iPhone and in a sidebar on iPad and Mac**; 2-3 sentences.
- **Writing Tools** `[search]` https://www.macrumors.com/guide/apple-intelligence : Proofread, Rewrite, Friendly / Professional / Concise, Summary, Key Points, List, Table and an open «describe your change» field; Apple's press release says Rewrite offers **several alternative versions to choose from** and Proofread shows edits **with explanations** `[verified]` https://www.apple.com/newsroom/2024/06/introducing-apple-intelligence-for-iphone-ipad-and-mac/ . Revert behaviour `[not verified]`.
- **Small Bible chat apps** `[search]` (app-store and press listings, self-reported): bible.ai, BiblicalAi, Holy Word's «BibleGPT», ChooseGOD (says it uses RAG so answers come from specific verses and a «fidelity system»). None reviewed `[not verified]`.
- **Amazon pulled earlier AI Video Recaps after wrong summaries** `[search]` https://www.theromancestudio.com/?p=56861 (a commentary site, low weight).

---

## 2. What users and institutions say

HN links use `https://news.ycombinator.com/item?id=<id>`. The quotes below are short, taken from the HN search API response read today `[verified]` unless stated; I could not read Reddit or App Store reviews (not indexed by the search tool) `[not verified]`.

### 2.1 Positive

- **Citations raise confidence.** HN, NotebookLM threads: hrpnk (id 45316814) «the citations that NotebookLM provide increase the confidence in answers»; kazinator (43665940) uploaded traffic codes and got «accurate, on-point answers … with citations pointing into the document»; retrac (46611126) tested it on an obscure 19th-century French novel: accurate answers, citations link to the original text; scarface_74 (42674249) recommends «a trusted source plus RAG» because it «will give you citations». Even a fan caveats: summaries «passable», podcast feature weak (42898856).
- **Reading tools with AI beside the text.** HN on Readwise Reader: towelpluswater (34156055) and jostyee (34007947) praise Ghostreader (2022, GPT-3 era; no negatives in those comments).
- **Notification summaries, some like them.** HN joecool1029 (46212091) «the notification summaries work pretty well!» for cutting clutter.
- **Speed and sense of coverage.** NN/g usability study of AI review summaries `[verified]` https://www.nngroup.com/articles/ai-reviews/ : users liked that summaries needed no input and condensed 1,600 ratings; they worked best **next to** traditional tools (averages, histograms, filters); Amazon's clickable themes with counts, excerpts and links to the full reviews were well received.
- **Plain language helps comprehension, with the original available.** Google's study (4,563 participants, 31 excerpts): accuracy +4 points overall and +15 on complex PubMed texts, and the gain held when readers could not look back at the text; confidence and perceived ease improved `[verified]` https://www.research.google/blog/making-complex-text-understandable-minimally-lossy-text-simplification-with-gemini/ (Google's own study, authors are the vendor).
- **Pastoral tone.** The Bible Society study found Bible chatbot answers «clear, accessible, pastoral», offering reassurance `[verified]` https://www.christiantoday.com/news/concerns-raised-over-theological-bias-in-ai-bible-chatbots

### 2.2 Negative

- **Wrong or distorted summaries of real text.**
  - Apple: HN nunez (42451584) a Slack summary concluded he «disliked the entire book club channel»; thewebguyd (44827959) an example of a summary distorting a text message («Mom died on hike»); drcongo (47221927) turned it off as «less than useful»; freetime2 (45585648) said Apple had to pull it back after it became «out of control»; BBC complaint and the pause (see 1.4); Ars Technica «pretty bad» thread (HN 42176081, page not readable by the fetcher `[not verified]`).
  - BBC's own test of ChatGPT, Copilot, Gemini and Perplexity with 100 news questions `[verified]` https://www.theregister.com/2025/02/12/bbc_ai_news_accuracy/ : 51 % of answers had significant issues; 19 % of answers citing BBC content added factual errors; **13 % of quotes attributed to BBC articles were altered or absent from the cited article**.
  - NN/g: summaries sometimes omitted critical details, felt generic, or hid negative content; Etsy's themes with no visible evidence undermined trust; users often did not realise themes were clickable `[verified]`.
- **Citations that do not support the claim.** Tow Center (CJR) `[verified]` and the Stanford RegLab/HAI legal study `[verified]` https://hai.stanford.edu/news/ai-trial-legal-models-hallucinate-1-out-6-or-more-benchmarking-queries : Lexis+ AI and Ask Practical Law AI wrong more than 17 % of the time, Westlaw AI-Assisted Research more than 34 %, even though vendors had called their retrieval tools «hallucination-free»; the authors separate **incorrect** answers from **misgrounded** ones (correct statement, source does not support it). A citation that exists is not a citation that supports.
- **Quoting Scripture from memory.** Developer benchmark of 11 models on six verse-recall tasks `[verified]` https://benkaiser.dev/can-llms-accurately-recall-the-bible/ : big models mostly exact on popular verses; smaller models mixed translations, one added a word from another translation (John 3:16 NIV), another swapped «they» for «Levites»; the author says to use a real Bible for exact text. HN thread (153 comments): seanhunter (42548905) «lossy compression of their training data», suggests RAG; danpalmer (42547375) proposes tool use that pulls exact text from a database; suprjami (42547984) «LLMs are not databases». HYPOTHESIS to keep in mind `[inference]`: in Doctrina, verbatim text should always come from our edition, never from the model.
- **Bias presented as neutrality.** Bible Society/Cambridge `[verified]` (see 1.14): US-evangelical leaning, one interpretation as definitive, users assume neutrality, instant answers may displace slow study.
- **Authors and rights.** Authors Guild on Kindle «Ask this Book» `[verified]` https://authorsguild.org/news/statement-on-amazon-kindle-ask-this-book-ai-feature/ (23 Dec 2025, updated 7 Jan 2026): added without permission from publishers or authors, no opt-out or opt-in, may usurp the licensing market; HN item https://news.ycombinator.com/item?id=46446317 . Commentary notes it is on by default for readers too `[search]` https://pipedot.org/724NW . Not an accuracy complaint; relevant to Doctrina only in the sense that **its sources are public domain or licensed and the licence line must appear next to answers** `[inference]`.
- **Authority theatre.** Father Justin (1.14): a bot that claimed to absolve sins; critics wanted «a plain search engine».
- **Pastors on AI writing sermons.** Logos AI Sermon Assistant criticism (1.14); this is about replacing the preacher's work, not about search.
- **Cost, latency, privacy** (little direct user testimony found `[not verified]`): Logos and Readwise gate AI behind plans and credits `[verified]`; Kagi caps billing at 10,000 tokens per summary (at most about $0.30 via API) `[verified]` https://blog.kagi.com/universal-summarizer ; Gemini in Chrome needs sign-in and does not work in Incognito `[search]`. No source found on distraction while reading beyond practitioner opinion `[not verified]`.

---

## 3. Research on reading, plain language and comprehension

- **AI help is not uniformly good for readers.** Etkin, Etkin, Carter and Rolle, *Frontiers in Education* 2025 (pre-registered, 195 US adults aged 18-22, ACT passages, four GPT tools) `[verified]` https://frontiersin.org/journals/education/articles/10.3389/feduc.2025.1506752/full : weaker readers improved with all four tools (Socratic chatbot best, d = 0.86; summary tool d = 0.45); stronger readers got worse with all four, **the summary tool hurt most (d = 0.83)** and the Socratic chatbot least (d = 0.33). The authors warn that blanket rollout may harm stronger readers. Limits: one short session, specific tools. Implication `[inference]`: Doctrina's readers are likely stronger or motivated readers; the simplifier should **sit beside the original and be optional**, never replace it, and the chat should ask the reader to look at the text, not only answer.
- **Illusion of coverage.** An 8-week preprint with 15 undergraduates found students often read *through* AI, with summaries as the main interface `[search]` https://www.themoonlight.io/review/self-regulated-reading-with-ai-support-an-eight-week-study-with-students (not peer reviewed, small n).
- **Simplification quality.** Wu and Arase, error-based human assessment (arXiv 2403.04963) `[verified]` https://arxiv.org/abs/2403.04963 : LLMs make fewer erroneous simplifications than earlier systems; GPT-4 and Qwen2.5-72B struggle with lexical paraphrasing; common automatic metrics are not sensitive enough. A separate paper argues Flesch-Kincaid should not be used to evaluate simplification `[search]` https://www.paperswithcode.com/paper/flesch-kincaid-is-not-a-text-simplification (fetch failed). Google's own pipeline scores readability with a model prompt that matched human ratings better than Flesch-Kincaid and uses a second model that maps claims from the original to the simplified text, flagging loss, addition or distortion `[verified]` (Google Research blog above). The Register notes the unanswered question: who checks the checker if the reader cannot follow the original `[verified]`.
- **Plain-language as accessibility.** WCAG 3.1.5 (AAA): when text needs reading ability above lower-secondary level, **supplemental content or a version at that level should be available**; techniques include a text summary at that level (G86) `[verified]` https://www.w3.org/WAI/WCAG21/Understanding/reading-level.html . It treats the simpler version as **supplemental**, not a replacement.
- **Hard texts are not only hard words.** `[inference]` For the 1885 Ante-Nicene translations (long periodic sentences, archaic terms) and the 1909 Reina-Valera, the failure modes of a simplifier are (a) dropping a qualification that carries the doctrine («only if», «not however»), (b) modernising a technical term (consubstantial, hypostasis, «Verbo»), (c) smoothing a rhetorical or ironic passage into a flat claim. No study found on Patristic or Early Modern texts specifically; the only adjacent results were general (AAR session lists, Kyoto catechism chatbot) `[not verified]`.
- **AI marking and explanation guidance.** Google PAIR People + AI Guidebook (chapter «Explainability + Trust») `[verified]` https://pair.withgoogle.com/chapter/explainability-trust/ : users should not trust completely; flagging that a prediction may be wrong lowers trust in that one prediction but prevents over-trust; prefer partial explanations tied to the user's action; skip a confidence display unless it changes a decision, and avoid numeric percentages; test with diverse users. It had nothing on labelling AI content. NN/g: «Label AI content clearly, and add it only where it meaningfully improves the experience» `[verified]`.
- **Streaming and motion.** Smashing Magazine (May 2026) `[verified]` https://smashingmagazine.com/2026/05/designing-stable-interfaces-streaming-content/ : append to existing text nodes rather than rebuilding the message; follow the stream only while the user is near the bottom (their threshold 60 px), stop on manual scroll up and reset on a new stream; respect `prefers-reduced-motion` by rendering the whole answer at once and stopping cursor blink; `role="log"` with `aria-live="polite"` and `aria-atomic="false"`; buffer chunks and flush once per animation frame. Upstash `[verified]` https://upstash.com/blog/smooth-streaming : buffer and reveal at a constant pace (their custom hook: 5 ms per character, about 200 characters per second; the SDK's built-in smoothing defaults to 10 ms per word chunk); smoothing adds artificial delay, a trade-off. These numbers are one developer's taste, not research.

---

## 4. Patterns that work for reading (synthesis)

Each point says where it comes from. `[inference]` = my conclusion from the sources above, not something a source states.

1. **Scope is chosen and visible.** Kindle bounds the AI by reading position (1.1); Logos lets the user pick «Your books» or «All books» (1.15); NotebookLM lets the user pick active sources (1.11); Readwise attaches the document and reading position (1.2). For Doctrina: a scope control that reads like a sentence («Sobre este capítulo», «Sobre esta obra», «En todo el corpus») `[inference]`.
2. **Start from the selection, not an empty box.** Readwise (highlight attaches the passage and changes the preset prompts by word, passage or document), Kindle (highlight, then suggested questions), ChatGPT canvas (select, then a prompt popup) (1.1, 1.2, 1.9). Doctrina already has a selection toolbar, so this is the cheapest entry `[inference]`. Pedro's own note (ROADMAP, 2026-10-27 night): the selection travels as a quiet pill above the input.
3. **Suggested questions that change with the selection** (Kindle, Readwise, Gemini in Docs, Logos Factbook «Questions»). Fixed, curated question sets beat a blank field and cap the cost and the range of answers `[inference]`.
4. **Sources: hover shows the quote, click opens it in place.** NotebookLM (hover = full quote, select = passage in context), Logos (hover = snippet, click = book with a temporary highlight), Claude Citations (`cited_text` plus a location) (1.10, 1.11, 1.15). In Doctrina the reader itself is the destination, and the app already has an arrival highlight (`--color-mark`) and a citation window (`--color-cite`) `[inference]`.
5. **Original beside, not instead.** NN/g: summaries worked best next to the traditional tools (2.1); WCAG 3.1.5 treats the simple version as supplemental; the Etkin study shows replacement summaries hurt strong readers (3). Notion's «Insert below» and ChatGPT's suggest-mode (marks beside the text) keep the original (1.9, 1.13).
6. **A way back in one action.** Canvas back/forward arrows and a diff button (1.9); Notion accept / discard / try again (1.13); Gemini Docs preview before insert (1.15). For a reader the «back» must be the default state: the original is always the truth and the AI view is a toggle `[inference]`.
7. **Mark AI text with form, not only a label.** Apple's fix after the BBC complaint: a label saying it is beta and may be wrong, plus italic text to set the summary apart (1.4). NN/g: label AI content clearly. PAIR: a flag that the output may be wrong lowers trust in the single output and prevents over-trust. For Doctrina, a typographic voice change (interface sans for AI, serif for the source) plus a one-line label is stronger than a badge `[inference]`.
8. **Stop and keep control while it streams.** NotebookLM: Stop / Keep generating (1.11); Readwise: Fast vs Thinking (1.2). Streaming is the baseline people expect, but it must not move the page (3, Smashing).
9. **Save the answer as the reader's note, marked.** Readwise (notebook icon saves to the document note), NotebookLM (save as a note keeping inline citations) (1.2, 1.11). Doctrina already has «Tus notas»; saved AI answers should carry the AI mark `[inference]`.
10. **Deterministic aids first.** Immersive Reader's Line Focus, text spacing and picture dictionary change nothing about the text (1.7). Doctrina already has a glossary dataset (`data/site/glossary.json`) and A−/A+; a word-level tier needs no generation at all `[inference]`.
11. **Retrieval over memory.** HN thread on verses (2.2), the Stanford legal study and the Hadith benchmark (search result) all point the same way: exact text must come from a verified corpus; models paraphrase and blend translations. Logos, Magisterium AI and NotebookLM all ground in a restricted corpus (1.3, 1.14, 1.11).
12. **Refuse and redirect in the product's own voice.** NotebookLM has a «can't answer» message (1.11); Logos says when it cannot find a good answer (1.3); the Father Justin lessons ask for explicit rules about identity and sacraments (1.14).

## 5. Pitfalls (what the sources warn about)

- **The citation that does not support the claim** (Stanford «misgrounded», Tow Center fabricated or broken URLs, BBC altered quotes: 13 %). Mitigation for Doctrina `[inference]`: show the quoted words, and verify mechanically that the quoted string occurs in the cited edition before rendering the chip; drop a claim whose quote fails.
- **Compression without the source in view** (Apple notifications): never show an AI condensation without the original reachable in one tap.
- **Bias dressed as neutrality** (Bible Society): the model's default theological register can be evangelical; each tradition must speak only through quoted material from that tradition, not through the model's paraphrase.
- **Silent loss of qualifications and technical terms** (3, plain-language writing): the simplifier must keep terms of art and flag them.
- **Authority theatre** (Father Justin): no avatar, no first person, no pastoral register («te absuelvo», «Dios quiere»).
- **Replacement summaries for strong readers** (Etkin): the default must send readers to the text, not around it.
- **Layout jumps and forced scroll while streaming** (Smashing); animation for users with `prefers-reduced-motion`.
- **Dead affordances** (Doctrina design principles): an «Ask» button that has no answer yet, suggested questions that fail, a toggle that does nothing. Per repo rule, UI of an approved design is built inert with TODO, never hidden (standing rule from Pedro).
- **Cost surprises**: Logos and Readwise gate it behind plans and credits; Kagi bills per summary (up to a cap) (1.3, 1.2, 1.13). Doctrina's planned Supabase Auth and rate limits sit behind it (ROADMAP line 174).
- **Rights**: the Authors Guild objection to Ask this Book; Doctrina's corpus is public-domain or licensed per edition, so the answer UI should always name the edition and licence in the citation `[inference]`.

## 6. Guardrails for a neutral theology site (candidate policy)

Sources: Vatican note ¶84 (AI use «should always be transparent and never misrepresented»), ¶86 (hallucination), ¶70 (AI assists, never replaces human judgment), ¶82 (tools that «merely provide answers» vs prompting the student to arrive at them); Bible Society (expose a range of interpretations); Father Justin (rules against overstated authority); Magisterium AI («The AI is not the Magisterium»); YouVersion (no public theological chatbot, by choice) (1.14, 1.8). Doctrina's own invariants: no claim without a citation and an edition; the site never concludes and never says «we believe»; each tradition in its own words; Fathers are never assigned to a modern tradition (AGENTS.md).

Candidate rules for the assistant `[inference]`, each testable:

1. **Quote-only for doctrine.** Any statement about what a tradition, council, Father or confession says is a quotation (or a bounded paraphrase that carries the quotation beside it) with work, edition, location. If no quote exists in the corpus the answer says so; it does not fill the gap from the model's memory.
2. **Exact text comes from the edition.** Scripture and patristic wording is inserted from our data by reference, never generated.
3. **No verdicts.** Questions of the form «who is right», «what should I believe», «is X heresy» get the **disputed-question response**: the question restated, the positions each in their own quoted words, where they agree and differ stated as structure (which texts each cites), and no ranking. «Doctrina no decide» is a designed state, not an error.
4. **No first person plural, no «the Church teaches» in the AI's voice.** Attribution is always to a named source: «Agustín, *Sobre la Trinidad* V, 1 (ed. …)».
5. **Fathers and traditions are not matched across eras by the AI.** It may list who cited whom; it may not say «this is the Catholic / Reformed view» of a Father.
6. **Disclosure.** Every AI-made block is marked as such, says what it was given (scope) and offers the original.
7. **Persona.** No avatar, no pastoral or confessional voice; plain register.
8. **Sacramental and pastoral edge cases.** Requests for absolution, blessing, counselling or crisis: a short fixed text that points to a human (priest, pastor, line) and does not engage `[inference; no source gives wording]`.
9. **Edge-case test set before launch**, as Catholic Answers' critics asked: identity, sacraments, disputed doctrines, requests to «summarize the Church's view», prompt injection from the texts themselves (a corpus passage that says «ignore previous instructions»).
10. **Logging for review**: thumbs, report-an-error, and an error report that feeds the same queue as the site's content errors (PROJECT mentions error reports) `[inference]`.

## 7. Doctrina's own context the variants must respect

From the repo (read today): `docs/DESIGN.md`, `docs/ROADMAP.md` lines 173-174, DECISIONS «Design principles carried into the restart».

- **Existing reader pieces** `[verified in repo]`: the **selection toolbar** (`hl-tb`: five colour dots, remove, «Nota»; panel surface, 1 px `rule-2`, radius 8; appears in 150 ms `ease-reveal`, 4 px up; docks to the bottom edge at ≤ 720); the **side panel «Pestañas»** (400 px; ≥ 1100 slides in 260 ms `ease-move` with 24 px; < 1100 a half sheet 52vh with grip); **note cards at the side** (240 px, from 1280); the **citation window** (400 px, `--color-cite`); the **search overlay**; the glossary and arrival highlight (`--color-mark`); «Latín · original» No / Debajo / Al lado; second translation menu. Panels move blocks with FLIP (380 ms `ease-reveal`).
- **Tokens**: `--color-bg #e8e5de` / `#1d1d1c`; `ink`, `ink-2`, `ink-3`; the one accent `#2c4a9e` / `#9eb3ee` (selection, current position, focus); `cite` `#5f3d0c` / `#d6a865` (links that open in place); `panel`; `rule`, `rule-2`; fonts Newsreader (head), Source Serif 4 (body), Work Sans (UI), Gentium Book Plus (Greek). Highlight tones are reserved for the reader's own marks; underline means link; the four marks (browser selection, sentence open in the panel, arrival, user highlight) must never be confused with an AI mark. Eases: `--ease-reveal cubic-bezier(.22,1,.36,1)`, `--ease-move cubic-bezier(.4,0,.2,1)`, `--ease-standard`, `--ease-exit`.
- **AI-slop list to avoid** (DECISIONS 2026-10-05): cream + terracotta, gold on navy, parchment, stock cathedrals, crosses as decoration, identical rounded shadow cards, gradients, ALL-CAPS tracked eyebrows, «·»-joined meta strings, «→» glued to links, emoji, icons in coloured squares, giant decorative quotes, Inter + centred bold hero, monospace locators, one colour per tradition, squeezed parallel columns on mobile, dead affordances. Add for AI specifically `[inference]`: sparkle icons, purple-blue gradients, «Ask AI» pill in a gradient border, glowing borders on streaming text, typing-dots bubbles, a robot avatar.
- **Pedro's notes already in the repo** (ROADMAP, «under discussion, not agreed»): (a) «Explicar en palabras simples»: on a technical paragraph, streams below it a plain-language version, faithful, not caricatured; the agent's objection was that live text has no citation or review, and proposed generating ahead, reviewing and labelling as generated. (b) AI chat in the reader (screen 05, Bible and Fathers): a small panel, maybe on the left, that knows the reader's notes and highlights by colour and reaches every biblical book, every patristic writing and every Father's commentary; a new option in the selection toolbar sends the selection to the chat as a quiet pill above the input; questions like what the Fathers said about a verse, how [x] Fathers saw [x] topic, an explanation that takes into account the Father's position across his life and writings. The agent's reading: one engine with two entry points; retrieval over the verified corpus that quotes and links; accounts, rate limits and a running cost.

---

## 8. Design variants

How to read them. Each variant lists: **Placement**, **Entry**, **Steps**, **Motion**, **Marking** (AI text and sources), **Mobile**, **Borrows from**. Everything is `[inference]` (a design proposal built from the verified sources above); the «Borrows from» line names the verified source. Values (400 px panel, 150 ms, `ease-reveal`) are Doctrina's real tokens (section 7). Every variant assumes the guardrails of section 6 and the shared **response anatomy** below, so a designer should build the demos with the same answer content and vary only the container.

**Shared response anatomy (use real content in every demo).** Example selection: Tertullian, *Against Praxeas* ch. 2 (1885 ANF translation) or John 6:53 (1909 Reina-Valera). Answer = (1) a one-line scope statement («Sobre: Juan 6:53, Reina-Valera 1909»), (2) a short framing sentence in the AI voice, (3) **quoted material blocks**, each with the speaker's own words, work, edition, location, and a way to open it in the reader, (4) a line on where the positions agree and differ by cited text, with no ranking, (5) follow-up chips, (6) actions: copy, save as note, report an error. The AI voice is set in Work Sans in `ink-2`; quotations are set in the source serif with the cite colour on the locator (never monospace).

### 8.1 AI chat inside the source reader: 18 variants

**C1. Tab in the side panel («Preguntar» beside «Verso»)**
- Placement: the existing 400 px panel «Pestañas» gets a tab «Preguntar»; the text column makes room as it does today (padding-right = panel + 48).
- Entry: a tap on a verse already opens the panel; the tab is next to the verse's tabs; selection toolbar button «Preguntar» opens it with the selection attached.
- Steps: tap verse, panel opens on «Verso», switch to «Preguntar», see 3 suggested questions for that verse, tap one, the answer builds in the panel; the verse stays highlighted in the text (`accent-weak`).
- Motion: tab content swaps with 16 px rise and `ease-reveal`; answer blocks arrive one at a time with FLIP (380 ms), quotations first, framing sentence last (see 8.3 on streaming).
- Marking: tab label says «Preguntar»; the whole answer lives under a hairline header «Respuesta generada · sobre este versículo» in `ink-3` UI sans (no «·»-joined string in the final build: use two lines); quotes carry `cite` locators.
- Mobile: the panel is already a half sheet (52vh, grip) under 1100 px; the tab bar becomes a segmented control on the sheet.
- Borrows from: Readwise sidebar chat and the Gemini/Docs side panel (1.2, 1.15); the repo's own panel.

**C2. Anchored popover from the selection toolbar**
- Placement: a small card (max 340 px) anchored under the selection, above the toolbar's z-layer (86).
- Entry: «Preguntar» button added after «Nota» in the selection toolbar.
- Steps: select a sentence, tap «Preguntar», the toolbar grows into a card with the selection as a quiet pill, three suggested questions and an input; an answer appears inside the card up to ~6 lines with «Seguir en el panel» to promote it to the side panel.
- Motion: the toolbar morphs into the card (shared-element FLIP, 220 ms `ease-reveal`); the pill fades in 80 ms after.
- Marking: card header «Sobre tu selección»; AI text in UI sans; the pill shows the first 6 words and the reference.
- Mobile: docks to the bottom as the toolbar already does, then rises as a sheet (52vh).
- Borrows from: ChatGPT canvas select-then-prompt popup, Claude highlight «Improve» toolbar, Readwise highlight bar (1.9, 1.10, 1.2).

**C3. Bottom sheet, mobile-first, same on desktop at the bottom of the reader**
- Placement: a sheet rising from the bottom edge to 52vh, text above remains scrollable and the selected sentence stays visible above the sheet.
- Entry: «Preguntar» in the docked toolbar, or a persistent «Preguntar sobre esta página» row in the reader's bottom bar.
- Steps: sheet opens with suggested questions, answer streams, swipe down closes, a second swipe up expands to full height for a long thread.
- Motion: sheet rises with `ease-move` 260 ms; grip 28 × 4; the page behind dims with `scrim-strong` only at full height.
- Marking: first line of the sheet: scope chip («Esta página»); each answer begins with a hairline rule.
- Mobile: this is the mobile design; desktop shows the same at 560 px width centred on the reader column.
- Borrows from: Readwise mobile sheet (1.2), the repo's half-sheet panel.

**C4. Left drawer chat (Pedro's idea)**
- Placement: left side, over or beside the tree; the reader column stays in place; 360 px.
- Entry: a button in the reader header (left zone) and the selection toolbar option; keyboard `/`.
- Steps: open the drawer, see «Contexto» (what it can see: the chapter, your notes n, your highlights by colour), type or pick a question, the selection pill sits above the input, the answer cites into the reader on the right.
- Motion: slides from the left in 260 ms `ease-move` the way the drawer does (z 60) but without a scrim; the reader column shifts using `left` (not `transform`, as the repo's note cards do).
- Marking: «Lo que puede ver» line is always visible: this is the honesty line (scope plus personal data); AI text UI sans.
- Mobile: becomes the C3 sheet; the drawer pattern is not used under 900 px.
- Borrows from: Dia sidebar (1.6), Readwise Chat panel (1.2), ROADMAP note.

**C5. Margin thread: the Q&A sits beside the paragraph like a note card**
- Placement: a 240 px card in the right margin at ≥ 1280 px, in the lane used by «Notas al costado»; below that a card inserted under the paragraph.
- Entry: the selection toolbar button «Preguntar»; the card becomes a thread tied to that paragraph.
- Steps: ask, the card grows with the answer; quotes inside the card are truncated to 3 lines with «Abrir»; the paragraph shows a small mark at its right edge like note marks; reopening the page keeps the thread if the reader saves it.
- Motion: card enters with 5 px rise and fade, `ease-reveal`; siblings reflow with FLIP.
- Marking: the card has the `rule-2` border like note cards plus a one-line header «Pregunta»; AI answer in UI sans so it does not read as the reader's own note.
- Mobile: notes marks move to the right edge below 900 px; the card opens as a sheet.
- Borrows from: the repo's note cards; Readwise saving an answer to the document note (1.2).

**C6. Command bar: ask from the search box**
- Placement: the existing search overlay (z 90) gets a second mode.
- Entry: `/` or the search button; type a sentence ending with «?» or press Tab to switch from «Buscar» to «Preguntar».
- Steps: the box shows search results while typing; Tab switches to «Preguntar», where the same text becomes a question over the current work; answer renders below the input as quoted blocks; Esc returns to the page at the same scroll.
- Motion: overlay motion already exists (`overlay-motion`); the mode switch is a 120 ms cross-fade of the results area, the input does not move.
- Marking: a segmented control «Buscar / Preguntar» that states the contract; AI answers show the verification line «Citas comprobadas en la edición».
- Mobile: full-width overlay with the segmented control above the input.
- Borrows from: Dia's address bar that doubles as chat (1.6), Kagi bang summarizer (1.13), Logos Smart Search → Study Assistant (1.15).

**C7. Quotes-only answers («Respuesta en citas»)**
- Placement: any container (panel recommended); the content design is the variant.
- Entry: any.
- Steps: the answer contains no model prose beyond a one-line framing and labelled connectors; it is a stack of quotation blocks grouped by author or tradition, each with edition and a button «Ver en el texto»; a final line states «El corpus no tiene más citas sobre esto» when true.
- Motion: blocks arrive in reading order with 8 px rise, 60 ms stagger; no typing effect at all.
- Marking: quotes in source serif with `cite` locator; the connectors in UI sans in `ink-3`; the whole answer carries the single label «Selección de citas hecha por IA».
- Mobile: blocks stack; locators wrap under the quote.
- Borrows from: Logos Synopsis (citations to books) (1.3), Claude Citations `cited_text` (1.10), Magisterium AI (1.14); also the safest option against the BBC 13 % altered quotes.

**C8. Scope bar**
- Placement: a one-line control above the input in any container: «Preguntar sobre: Esta página / Esta obra / Todo el corpus / Tus notas».
- Entry: always visible in the chat.
- Steps: default is «Esta página»; widening the scope is a deliberate tap; the answer begins with «Busqué en: …» and lists how many passages were consulted and which works.
- Motion: a travelling indicator between the options (as the tradition switch «Deslizar» already does), no cut.
- Marking: the scope chip repeats on every answer so a screenshot carries its context.
- Mobile: horizontal scroll-snap segmented control or a compact menu.
- Borrows from: Logos «Your books / All books» (1.15), Kindle's position bound (1.1), NotebookLM source toggles (1.11).

**C9. Curated questions only (no free text): «Preguntas de este pasaje»**
- Placement: a list in the verse panel under the verse, or at the end of a paragraph.
- Entry: the questions are visible without any button: 3 to 5 per verse or paragraph.
- Steps: tap a question, the pre-written, reviewed, cited answer unfolds in place; a final line says «¿Otra pregunta?» and opens a free-text mode only if the product enables it.
- Motion: accordion unfold with FLIP (380 ms); no streaming because nothing is generated live.
- Marking: «Respuesta preparada y revisada, fecha»; if generated by a model and reviewed by a person, say both.
- Mobile: same list in the half sheet.
- Borrows from: Logos Factbook «Questions to ask» (1.15); YouVersion's cautious stance (1.8); Pedro's objection to live generation (ROADMAP line 173). Trade-off: zero hallucination risk, limited range, cost paid once.

**C10. Hybrid: reviewed answers first, live ask second, with different marks**
- Placement: panel or sheet.
- Entry: suggested questions (reviewed) and an input («Preguntar otra cosa»).
- Steps: reviewed questions answer instantly; a typed question runs live retrieval and shows an answer with a clear second-level mark.
- Motion: reviewed answers appear instantly; live ones stream calmly (8.3).
- Marking: two states, always visible: «Revisada» (a human checked it) and «Generada ahora, sin revisar»; the second state uses a dashed hairline on the left of the block and a one-line reminder to open the quotes.
- Mobile: states stay as a single-line label above the answer.
- Borrows from: Apple's post-BBC label and italics (1.4); PAIR on flagging possible errors (3).

**C11. Split reader: chat as a column, the text keeps scrolling**
- Placement: at ≥ 1280 the reader becomes two columns (text 720, chat 400) like «Latín · original · Al lado»; the chat is a full-height column rather than an overlay panel.
- Entry: a header button «Preguntar»; closing returns to one column.
- Steps: ask; clicking a citation scrolls the text column to the quoted passage and applies the arrival highlight, the chat column stays; «Volver» in the chat restores the scroll position.
- Motion: the column shift uses `left`, with FLIP on blocks; scroll to the passage uses the programmatic ease-in-out cubic the reader already has.
- Marking: a vertical hairline between columns; the chat column sets a tinted `panel` background that differs from the page.
- Mobile: not offered under 900; use C3.
- Borrows from: ChatGPT canvas side by side (1.9), NotebookLM source pane (1.11).

**C12. Citation chips with a quote hover and an arrival highlight**
- Placement: inside any answer; the chips are the variant.
- Entry: every claim ends with a small superscript number or a short locator chip («Tert., *Adv. Prax.* 2»).
- Steps: hover or long-press shows the exact quoted words and the edition in a small card (200 ms delay); click scrolls the reader to the passage and fades an arrival highlight (`--color-mark`) and a 2 px accent bar at the left of the paragraph (`.was`) marks where you came from; «Volver al chat» returns.
- Motion: the card appears 150 ms `ease-reveal`; the arrival highlight fades out completely (repo's motion rule).
- Marking: `cite` colour on locators; no underline (underline means link: so chips are underlined only on hover for links that do open); a failed verification shows no chip at all and a note «No encontré la cita».
- Mobile: tap shows the quote card as a sheet with «Ir al texto».
- Borrows from: NotebookLM hover / select (1.11), Logos hover snippet + temporary highlight (1.15), Claude Citations (1.10).

**C13. Traditions in their own words («Qué dice cada tradición»)**
- Placement: panel or sheet, as a result type; invoked by a suggested question «¿Qué dice cada tradición sobre este pasaje?».
- Entry: a suggested question and a button in the verse panel (where traditions already exist in the site).
- Steps: answer shows the existing «Deslizar» switcher with one tab per tradition that has material; each tab holds only quotations from that tradition's sources, each with edition; no model summary of a tradition; a final line «Textos citados por más de una tradición» lists shared passages.
- Motion: the travelling indicator moves between tabs; content slides by direction of order (existing behaviour).
- Marking: no colour per tradition (rainbow banned); tradition names in `ink`, quotes in source serif.
- Mobile: tabs scroll horizontally; no side-by-side columns (squeezed parallel columns are on the slop list).
- Borrows from: the site's own tradition switch; Bible Society's recommendation to expose a range of interpretations (1.14).

**C14. Socratic first move**
- Placement: panel or sheet.
- Entry: suggested prompt «Ayudame a leerlo» alongside the normal ones.
- Steps: instead of answering, the assistant asks one question that sends the reader to the text («¿Qué verbo repite el autor en este párrafo?»), the reader answers or taps «Mostrame», then it gives a cited reading of the sentence; one question at most, never a quiz.
- Motion: calm; the question appears as a single line, the «Mostrame» button fades in after 600 ms.
- Marking: the question is labelled «Pregunta para leer»; the reading that follows is a normal cited answer.
- Mobile: same.
- Borrows from: Etkin et al., Socratic chatbot helped weaker readers most and hurt strong readers least (3); Vatican ¶82 on prompting the student to arrive at answers (6). Optional because it can irritate experts.

**C15. Chat that knows your notes and highlights (personal scope)**
- Placement: panel; a toggle inside «Lo que puede ver».
- Entry: «Con tus notas» switch, off by default.
- Steps: when on, the assistant can answer «¿qué subrayé en verde en este libro?» and uses highlight colour as a filter; its answers cite the reader's own notes with the mark and date.
- Motion: switching shows the count of notes in scope sliding in.
- Marking: a different locator style for the reader's notes («Tu nota, 12 oct.») than for sources; AI never rewrites the notes.
- Mobile: same.
- Borrows from: Readwise (document, metadata, reading position) (1.2); ROADMAP note on notes and colours. Privacy note: needs a clear statement of what leaves the device `[not verified how it would be built]`.

**C16. Marginal question marks (opt-in ambient)**
- Placement: a faint mark in the gutter next to sentences the system finds hard, appearing on hover or when «Ayudas» is on.
- Entry: a reader preference «Mostrar ayudas»; off by default.
- Steps: hovering the mark shows a one-line question («¿Qué significa “sustancia” aquí?»); tap runs the curated answer (C9) or opens the chat with the question prefilled.
- Motion: marks fade in 150 ms; none appear while scrolling; at most 1 in view per screen.
- Marking: the mark is a small open circle in `ink-3`, not a sparkle.
- Mobile: marks sit at the right edge as note marks do; tap opens the sheet.
- Borrows from: Kindle's suggested questions (1.1) and Notion/Copilot ambient hints `[not verified]`. Risk: noise and dead affordance; test before proposing it as default.

**C17. Full page «Preguntar» (corpus-wide) linked from the reader**
- Placement: its own route with a single input; from the reader a link «Seguir en Preguntar» carries the selection.
- Entry: header link; reader button «Ampliar a todo el corpus» from C8.
- Steps: the page is a calm column: question, scope, answer in quoted blocks, a left rail with the works consulted; every citation opens the reader in a new position and returns with Back.
- Motion: none beyond the answer blocks; the page uses the title entrance.
- Marking: the scope and the list of works are always above the answer.
- Mobile: single column.
- Borrows from: Perplexity's answer-with-sources page (1.12), Logos Study Assistant (1.15). Included as the baseline to compare in-reader options against.

**C18. Bottom dock: a one-line field that expands upward**
- Placement: a slim field fixed at the bottom of the reader column («Preguntar sobre este capítulo»), 44 px high.
- Entry: the field is always there (desktop and mobile), nothing to discover.
- Steps: tap, the field lifts into a 52vh sheet with suggested questions; typing sends; collapse keeps the thread in memory until the page changes.
- Motion: height expands with `ease-move` 260 ms; the page scroll position does not change.
- Marking: the resting field states the scope in its placeholder; the answer header repeats it.
- Mobile: the bottom bar already exists on mobile; this is the mobile default.
- Borrows from: Readwise «Ask anything…» in the bottom toolbar (1.2).

### 8.2 Paragraph simplifier: 18 variants

**S1. In place, with a visible toggle («En palabras simples»)**
- Placement: replaces the paragraph's text in place, same width, same column.
- Entry: a small control at the paragraph's left gutter on hover (focus-visible for keyboard) and an item in the selection toolbar when a paragraph is selected.
- Steps: activate, the paragraph cross-fades to the simple version; a header line above it reads «En palabras simples. Texto generado por IA, no es el original»; a switch «Original» next to it returns.
- Motion: height animates with FLIP (380 ms `ease-reveal`), text cross-fades 180 ms; the original fades out completely, no ghost.
- Marking: the simple version is set in Work Sans (the interface voice) while the original is serif; a 2 px `rule-2` hairline at the left; label in `ink-3`.
- Mobile: same, with the switch inside the paragraph header; no hover needed.
- Borrows from: Google Simplify in place (1.5), Notion replace (1.13). Risk: replacing hides the original; mitigated by the toggle and the voice change.

**S2. Below the paragraph, original untouched**
- Placement: a block inserted directly under the paragraph, with the paragraph still visible.
- Entry: same as S1.
- Steps: activate, the block unfolds under the paragraph; a close control folds it; the paragraph never changes.
- Motion: unfold with FLIP (380 ms), content rises 8 px.
- Marking: block in `panel` colour, 1 px `rule-2` border, radius 4; header «En palabras simples» + one line «Generado por IA. La fuente es el párrafo de arriba.»
- Mobile: identical, full width.
- Borrows from: Notion «Insert below» (1.13), Pedro's own formulation (ROADMAP line 173: «a small panel below»). The safest default.

**S3. Beside, in the margin**
- Placement: a card in the right margin aligned with the paragraph's first line (the lane of note cards), 240 px; ≥ 1280.
- Entry: same; the card shares the lane with notes, so a note and a simplification can co-exist.
- Steps: activate, the card appears beside the paragraph; text column shifts the way it does for notes.
- Motion: 5 px rise + fade; the column shifts with `left`.
- Marking: card border `rule-2`, header «En palabras simples», UI sans.
- Mobile: becomes S2 below 900 px (note cards already move to a different pattern).
- Borrows from: the repo's note cards; ChatGPT canvas suggested edits shown beside the text (1.9).

**S4. Sentence-aligned pairs (interlinear)**
- Placement: the paragraph is split by sentence; each sentence has its plain version directly under it in a smaller UI-sans line.
- Entry: a reader-level toggle in the header «Frase por frase»; applies to the visible paragraph or the section.
- Steps: toggle on, each sentence gains a line; hover or tap on either line highlights its pair; toggle off removes them.
- Motion: lines unfold in a quick cascade (list cascade, 40 ms stagger) with `ease-reveal`.
- Marking: plain lines in `ink-3` UI sans with a hairline above the first; header label once per paragraph.
- Mobile: same, one column; a long sentence may take 3 lines.
- Borrows from: interlinear Bibles, Immersive Reader's line focus (1.7), Google's claim mapping (1.5). Strength: the reader sees exactly which sentence each simplification belongs to; cost: needs sentence-level generation and alignment.

**S5. «Qué cambió»: a diff overlay**
- Placement: in place or below; the variant is the comparison mode.
- Entry: a secondary action «Ver cambios» inside the simplification header.
- Steps: the original text is shown with replaced words underlined softly and each hover shows what replaced it; the omitted clauses are marked with a thin strike; total change count in the header.
- Motion: marks fade in 150 ms; the hover card follows `ease-standard`.
- Marking: strike and replacement use `ink-3` and `cite` only (no red/green; the highlight tones are the reader's own).
- Mobile: tap a word to see the replacement; list view of changes under the paragraph.
- Borrows from: ChatGPT canvas diff and suggest-mode (1.9), Apple's Proofread with explanations (1.15). Strength: directly answers the «it changed the meaning» fear.

**S6. Reading-level stepper (Original / Más claro / Muy simple)**
- Placement: a three-stop control on the paragraph header or in the reader's tools.
- Entry: the control appears after the first activation, or in the reader header as «Nivel de lectura».
- Steps: choose a stop; each stop is a pre-generated version; going back to «Original» is always one tap on the first stop.
- Motion: the indicator travels between stops (continuous, no cut); the text cross-fades, with the same FLIP height change.
- Marking: stop labels in words, not grade numbers or «K-12»; each non-original state shows the AI label.
- Mobile: segmented control above the paragraph.
- Borrows from: ChatGPT canvas reading level (Kindergarten to Graduate School) (1.9), Kagi engines (1.13). Warning: Flesch-Kincaid is a poor judge; the levels are set by prompt and human review, not by score (3).

**S7. Words, not paragraphs: gloss only the hard terms**
- Placement: in place; no generated paragraph.
- Entry: «Ayudas de lectura» in the reader tools; or tap a word (the site already has a word card).
- Steps: with the aid on, hard terms in the passage get a faint dotted guide; tap shows a one-line gloss from the verified glossary (e.g. «consustancial: de la misma sustancia»), with the entry's own citation.
- Motion: guides fade in 150 ms; the word card follows the existing one.
- Marking: glosses come from reviewed data, no AI mark needed; if the gloss is generated, it carries the same label as other AI.
- Mobile: tap opens the existing word card under the words.
- Borrows from: Immersive Reader picture dictionary (1.7), the repo's glossary (`data/site/glossary.json`). Strength: no meaning drift; cost: does not fix syntax.

**S8. Gutter affordance per paragraph**
- Placement: a small round mark in the gutter beside each paragraph that qualifies (long or flagged as hard), visible on hover or focus.
- Entry: the mark itself; tooltip «Explicar en palabras simples».
- Steps: tap the mark; the choice of container (S1 or S2 as chosen in settings) opens.
- Motion: the mark fades in 150 ms; no animation at rest.
- Marking: the mark is a plain ring in `ink-3`; once a simplification is open it fills with `ink`.
- Mobile: marks sit at the right edge like notes marks; tap target 44 px.
- Borrows from: Notion hover handle (1.13), ChatGPT canvas hover over a paragraph (1.9). Risk: discoverability and visual noise on long works.

**S9. Selection toolbar button («Simplificar»)**
- Placement: new button in the existing selection toolbar, after «Nota»; works for one sentence, several, or a whole paragraph.
- Entry: select text, press the button; `S` shortcut.
- Steps: toolbar morphs into a card under the selection with the plain version; actions «Reemplazar vista», «Guardar como nota», «Cerrar».
- Motion: card appears as in C2; text enters with a 180 ms fade.
- Marking: card header «En palabras simples. Generado por IA.»
- Mobile: docked card rising from the bottom.
- Borrows from: Apple Writing Tools, Google Simplify (select, tap) (1.4, 1.5). Strength: zero new UI at rest; best for the selection-first reader.

**S10. Reader-wide mode («Leer en palabras simples»)**
- Placement: a mode of the whole chapter or section.
- Entry: a toggle in the reader header with three states Original / Simple / Lado a lado.
- Steps: toggle on, every paragraph shows its pre-generated simple version, each marked; scrolling and position stay; toggling returns to the original at the same paragraph.
- Motion: no wave animation across all paragraphs; paragraphs in view cross-fade, others change silently.
- Marking: a persistent ribbon at the top of the reader «Estás leyendo una versión simplificada por IA» and the voice change.
- Mobile: same toggle in the reader header menu.
- Borrows from: Immersive Reader's reading preferences (1.7); WCAG 3.1.5 supplemental version (3). Warning: Etkin results suggest strong readers do worse with replacement summaries; offer «Lado a lado» as default.

**S11. Popover with accept / keep original**
- Placement: a small card attached to the paragraph; the text is not changed until the reader accepts.
- Entry: S8 or S9.
- Steps: card shows the plain version; «Usar esta vista» swaps the paragraph in place (S1); «Seguir con el original» closes; «Probar otra» asks for another version.
- Motion: card 150 ms; swap via FLIP on accept.
- Marking: card header and, after accept, S1 marking.
- Mobile: bottom sheet.
- Borrows from: Notion accept / discard / try again (1.13), Gemini Docs preview before insert (1.15), Writing Tools alternatives (1.15).

**S12. Pre-generated, reviewed, dated**
- Placement: S2 or S3 container.
- Entry: the control only appears on paragraphs that have a reviewed simplification; there is no live generation.
- Steps: tap, the block opens instantly; header shows «Redactado con IA, revisado por [persona/rol], fecha»; a link «Cómo se hizo» explains the check (original sentence mapped to simplified sentence).
- Motion: instant unfold, no streaming.
- Marking: provenance line is the whole point; if not reviewed, the control does not exist (no dead affordance).
- Mobile: same.
- Borrows from: Pedro's roadmap objection and the agent's proposal (ROADMAP line 173), Google's fidelity check (1.5), Apple's lesson that unmarked machine summaries fail (1.4). Trade-off: coverage grows slowly; cost paid once per paragraph.

**S13. Live with calm streaming («Generando ahora»)**
- Placement: S2 container.
- Entry: S8 or S9.
- Steps: block opens, the plain text appears in word-sized chunks; a «Detener» control is visible during generation; when done a line says «Generado ahora, sin revisar» and the quoted original sentences are linked.
- Motion: chunk fade-in, 120 ms per word group at a constant pace, block height reserved up front from the length of the original so nothing below jumps; stops and renders everything at once under `prefers-reduced-motion`.
- Marking: dashed left hairline while generating (it turns solid when done), label in `ink-3`.
- Mobile: same; the page does not auto-scroll unless the reader is already at the block.
- Borrows from: Smashing and Upstash streaming rules (3), NotebookLM Stop (1.11). Cost: live tokens per press, and no review (C10's second state).

**S14. Claim-linked simplification (hover pairs)**
- Placement: S1 or S2.
- Entry: after activation, small superscripts appear in the simple text.
- Steps: each simple sentence has a superscript; hover or tap highlights the original words it was derived from (soft `accent-weak`); sentences with no match are flagged in `ink-3` with «sin base en el original» or are not shown.
- Motion: highlight fades in 120 ms and out completely.
- Marking: the superscripts are the marking; no underline.
- Mobile: tap shows the original words in a sheet header.
- Borrows from: Claude Citations `char_location` (1.10), Google's claim mapping (1.5). Strength: makes «nothing added» checkable by eye.

**S15. Technical terms preserved**
- Placement: S1, S2 or S9; the rule is the variant.
- Entry: same.
- Steps: the simple version keeps terms of art in place and glosses them in parentheses (e.g. «consustancial (de la misma sustancia)»), keeps Greek and Latin terms in their script, and never replaces a name or a number; qualifications («solo si», «sin embargo no») stay as written.
- Motion: none beyond the container.
- Marking: kept terms carry the dotted guide of S7; a footer «Se conservaron n términos técnicos».
- Mobile: same.
- Borrows from: Google «minimally lossy» goal (1.5), Scientific simplification emphasis on terminology and claim strength `[search]` (3). Addresses the Patristic failure modes in section 3.

**S16. Three verbs, three contracts: Simplificar / Explicar / Resumir**
- Placement: a small menu on the selection or gutter mark.
- Entry: S8 or S9 opens the menu.
- Steps: «Simplificar» rewrites in plain words with the same content; «Explicar» adds context and must cite sources, shown in the C1 container; «Resumir» gives a shorter version. Each verb has its contract shown as one line under it.
- Motion: menu 150 ms; each verb opens its own container.
- Marking: different labels per verb: «Misma información en palabras simples», «Contexto con fuentes», «Versión corta, puede omitir».
- Mobile: bottom menu.
- Borrows from: Google's separation of simplification, summarisation and explanation (1.5); Apple's Rewrite / Summary / Key Points (1.15).

**S17. Sheet with the original pinned (mobile-first)**
- Placement: bottom sheet at 52vh.
- Entry: long-press or the docked toolbar on a paragraph.
- Steps: the sheet shows the original paragraph collapsed to two lines at the top (tap to expand), and under it the plain version; swipe down closes.
- Motion: the sheet rises with `ease-move`; the collapsed original expands with FLIP.
- Marking: the AI label is inside the sheet, original is always above.
- Mobile: this is the mobile version; on desktop it is S2.
- Borrows from: Readwise mobile sheet (1.2), Safari Reader summary placement on iPhone (1.15).

**S18. Before/after reveal slider** (included for completeness; recommendation: show it in the proposal as the discarded fashionable option)
- Placement: in place, a draggable divider reveals the original on one side and the plain text on the other.
- Entry: S1's control.
- Steps: drag a handle across the paragraph.
- Motion: continuous clip reveal.
- Marking: handle labels «Original» and «En palabras simples».
- Mobile: poor: text lines break differently, dragging fights vertical scroll.
- Borrows from: image compare sliders, not from a reading product. Why likely discard: the two texts do not align line by line, so the compare is decorative.

### 8.3 Motion rules for streaming text (apply to chat and S13)

`[inference]` from Smashing, Upstash and the repo's motion principles.
- Decouple arrival from display: buffer chunks and reveal at a constant pace per animation frame (about 5-10 ms per character, or one word group per 60-120 ms); the rate never speeds up to catch up; at the end the rest renders at once.
- No cursor, no blinking caret, no typing-dots bubble; a still line «Buscando en el corpus» in `ink-3` while retrieval runs, then quoted blocks arrive.
- **Quotes first, prose last** (Doctrina's rule): render the retrieved quotation blocks before the connecting sentence so the reader sees evidence before interpretation.
- Reserve block height from a first estimate and grow in place; no layout jump for the text below; follow the stream only if the reader is within 60 px of the bottom and stop on any manual scroll.
- `prefers-reduced-motion`: render the whole answer at once, no fade.
- `role="log"`, `aria-live="polite"`, `aria-atomic="false"`.
- Arrival of a citation chip: fade 120 ms; nothing slides in from the side.

### 8.4 Variants to put side by side in the proposal (suggested demo sets)

- **Chat, container comparison** (same answer, same content): C1 side-panel tab, C2 popover, C3 bottom sheet, C4 left drawer, C5 margin thread, C11 split column, C18 bottom dock.
- **Chat, answer design comparison** (same container): C7 quotes only, C10 reviewed vs live, C12 citation chips, C13 traditions in their own words, C14 Socratic.
- **Simplifier, container comparison**: S1 in place, S2 below, S3 beside, S4 sentence pairs, S9 selection card, S17 mobile sheet.
- **Simplifier, trust comparison**: S5 diff, S12 reviewed, S13 live, S14 claim-linked, S15 terms preserved, S7 words only.
- **Entry points**: selection toolbar (C2, S9), gutter mark (S8), command bar (C6), bottom dock (C18), header mode (S10).
- **What exists today next to them**: selection toolbar with Nota, the verse side panel, note cards, glossary word card.

### 8.5 Discarded patterns and why

- Chat-first full-screen takeover with the reader hidden (breaks reading, fails the Etkin warning).
- Avatar, character or «teacher» persona (Father Justin).
- «Ask AI» gradient pill, sparkle icon, glowing streaming border, purple-blue gradients (AI-slop; repo list).
- Numeric confidence percentages (PAIR warns users misread probabilities; also unsupported by the models).
- Auto-summary at the top of every chapter by default (Safari-style): it replaces reading, hurts strong readers (Etkin), and Apple's own pause shows the risk.
- Color per tradition or per model confidence (rainbow ban; highlight tones are reserved).
- Free generation of what a Father «believed» or of a verse's text (section 6).
- Per-grade labels («Grade 6») on content for adults (patronising; Flesch-Kincaid is a weak proxy).
- Voice persona or audio of the AI reading doctrine (no source supports it; out of scope).

---

## 9. What has to be decided (for Pedro, after seeing the demos)

1. Chat container: panel tab (C1), popover (C2), sheet (C3/C18), drawer (C4) or column (C11), and whether the mobile design is the sheet.
2. Is the chat free-text from day one, or curated and reviewed questions first (C9/C10)? Same question for the simplifier: pre-generated and reviewed (S12) or live (S13).
3. Source style: quotes-only answers (C7) or framed prose plus chips (C12).
4. Simplifier container: in place with a toggle (S1), below (S2) or beside (S3), and whether sentence pairs (S4) or the diff (S5) are offered.
5. How AI text looks: voice change (UI sans vs serif), the label wording, the dashed «sin revisar» state.
6. Scope control: the sentence-like scope bar (C8) in the first version or only «esta página»?
7. Whether the assistant may answer the «disputed question» form at all, or only list quoted positions.
8. What is saved to «Tus notas» from an answer and how it stays marked.
9. Accounts, rate limits and who pays tokens (not a UI question, but it decides whether live generation can exist).
10. Which verbs the simplifier has (only «Simplificar», or the three of S16).
