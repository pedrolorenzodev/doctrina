# 01 · Technical spec 2026: favicons, app icons, link previews

All sources accessed 2026-11-04. Tags: [verified] = primary or authoritative page read this run; [snippet] = only seen in search results; [memory] = agent's own knowledge, never used for numbers or who-uses-what; [inference] = the agent's conclusion from the cited facts.

## 1. What the file set should be (the short answer)

| File | Size | Why | Source |
|---|---|---|---|
| `icon.svg` | vector, square viewBox | Chrome/Edge 80+, Firefox 41+, Safari 26+ (desktop and iOS) render SVG favicons | caniuse [verified] |
| `favicon.ico` | one 32×32 image (add 16×16 only if 32 blurs when downscaled) | legacy fallback, crawlers that request `/favicon.ico` | Evil Martians [verified] |
| `apple-icon.png` (= apple-touch-icon) | 180×180, opaque background, ~20 px padding | iOS/iPadOS home screen, Safari favourites, iMessage link icon | Evil Martians [verified]; Apple TN3156 [verified] |
| manifest `icon-192.png`, `icon-512.png` | 192, 512 | Android home screen, PWA splash | Evil Martians [verified] |
| manifest maskable `icon-mask.png` | 512, content inside a centred circle of radius 40 % of width | Android adaptive shapes crop the outer 10 % | web.dev [verified] |
| `opengraph-image.png` | 1200×630 (1.91:1), < 600 KB for WhatsApp | WhatsApp, Facebook, LinkedIn, Slack, Discord, Telegram, X | Meta, WhatsApp, LinkedIn docs [verified] |

Not needed any more: Safari `mask-icon` (pinned tabs use the normal favicon since Safari 12), Windows tile / `msapplication-*` (Chromium Edge ignores them), `rel="shortcut"` (non-conforming), Opera Coast 228 px. Sources: Evil Martians [verified]; Next.js `generate-metadata.md` says «The `msapplication-*` meta tags are no longer supported in Chromium builds of Microsoft Edge, and thus no longer needed» [verified, local docs]; MDN «web authors must not use it anymore» (about `shortcut`) [verified].

## 2. Favicon formats and how browsers pick

- **Evil Martians, «How to Favicon in 2021: Six files that fit most needs»** (Andrey Sitnik; editor's notes say re-checked through 2026), https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs [verified]:
  - «Instead of serving dozens of icons, all you need is just five icons and one JSON file.»
  - HTML: `<link rel="icon" href="/favicon.ico" sizes="32x32">`, `<link rel="icon" href="/icon.svg" type="image/svg+xml">`, `<link rel="apple-touch-icon" href="/apple-touch-icon.png">` (180×180).
  - Changelog 2023-07-11: replaced `sizes="any"` on the ICO link with `sizes="32x32"`; the article ties `sizes` on the ICO to a Chrome bug where Chrome picks the ICO over the SVG.
  - «Since Safari 12, we can use a regular favicon for pinned tabs.»
  - Maskable: «The safe zone is a 409×409 circle» (of 512).
- **MDN, `rel` attribute, `icon`**, https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/rel#icon [verified]: «If there are multiple `<link rel="icon">`s, the browser uses their media, type, and sizes attributes to select the most appropriate icon. If several icons are equally appropriate, the last one is used.» Also: `crossorigin` is not supported for `rel="icon"` in Chromium.
- **caniuse, SVG favicons**, https://caniuse.com/link-icon-svg [verified]: Chrome 80+, Edge 80+, Firefox 41+ (partial 4–40), Opera 67+, **Safari desktop 26.0+, iOS Safari 26.0+** (not supported up to 18.7).
- **WebKit, «News from WWDC25: WebKit in Safari 26 beta»** (2025-06-09), https://webkit.org/?p=16993 [verified]: «Safari 26 beta now supports the SVG file format for icons everyplace there are icons in the interface, including favicons.» Data-URL icons also supported.
- **Chromium source, `ui/gfx/favicon_size.h`**, https://chromium.googlesource.com/chromium/src/+/main/ui/gfx/favicon_size.h [verified]: `inline constexpr int kFaviconSize = 16;` → the tab draws the favicon in a 16×16 DIP box, i.e. 32×32 device pixels on a 2× screen. Dia is Chromium-based (Wikipedia, https://en.wikipedia.org/wiki/Dia_(web_browser) [snippet]); whether Dia's own tab UI uses the same 16 px box was **not confirmed** (its tab strip is custom UI; nothing found). Pedro should check the variants live in Dia.
- **Chromium does not add a background or recolour web favicons.** `chrome/browser/favicon/favicon_utils.cc`, `ShouldThemifyFavicon()` returns false for anything that is not a `chrome://` URL: https://raw.githubusercontent.com/chromium/chromium/main/chrome/browser/favicon/favicon_utils.cc [verified]. So in Chrome/Dia a dark glyph on a dark tab simply disappears [inference].
- **Google Search**, https://developers.google.com/search/docs/appearance/favicon-in-search [verified]: at least 8×8; «we recommend using a favicon that's larger than 48x48px»; «must be a square (1:1 aspect ratio)»; supported formats listed: BMP, GIF, ICO, PNG, JPEG, PPM, TIFF — **SVG is not in the list** in the page text read this run (the brief's «48px multiples, SVG» could not be confirmed on the current page; serve a PNG/ICO ≥ 48 px too). One favicon per hostname; recrawl takes «several days to several weeks»; should be «visually representative of your website's brand».
- **Google crops to a circle in results.** Search results show the favicon on a grey circular background (Search Engine Roundtable 2022–2023, https://www.seroundtable.com/google-search-site-name-favicon-design-34253.html [snippet]); John Mueller (Google), 2024: «Round-croppable favicons, for those who like technical SEO.» (Search Engine Journal, 2024-09-03, https://searchenginejournal.com/googlers-tip-about-favicons-can-make-a-big-difference/525979 [verified]). → the mark must survive a circular crop [inference].

## 3. Dark tabs: the `prefers-color-scheme` SVG trick and where it fails

- **How it works** (web.dev, Adam Argyle, «Building an adaptive favicon», https://web.dev/articles/building/an-adaptive-favicon [verified]): a `<style>` inside the SVG with `@media (prefers-color-scheme: dark) { … }` overriding fills. «As of writing this, SVG favicons allowing inline media queries are supported in Firefox and Chromium based browsers.»
- **Safari ignores it.** WebKit bug 309949 «SVG favicons don't respect media query overrides, notably for dark mode», reported 2026-03-13 by Pawel Grzybek on Safari 26.3, status NEW, confirmed by Karl Dubost; Anne van Kesteren: favicons «need a different approach»; also reproduced in WebKitGTK (2026-07-04). https://bugs.webkit.org/show_bug.cgi?id=309949 [verified]. → in Safari the light version always shows.
- **The media query follows the OS, not the tab colour.** Chris Coyier, «You kinda want an orange favicon.» (2023-02-10), https://chriscoyier.net/?p=8896 [verified]: tabs are dark in Incognito too and «there is no @media query for that!»; «you have no idea what the tab color behind a favicon will be like»; a favicon «should be able to withstand any color behind it», often via «a solid background» in the icon; pick a hue that «works on dark and light equally well». CSS-Tricks (search snippet, https://css-tricks.com/?p=343598): the query «does not mean that your favicon is being rendered against a dark background» [snippet]. Several guides say a reload is needed after the theme changes (spacejelly.dev, dev.to) [snippet].
- **Firefox new-tab tiles:** Mozilla bug 1936587 — a `prefers-color-scheme` favicon turned white on a white new-tab tile; partially fixed (tiles now go dark when the page is dark), the general light/dark favicon problem tracked in bug 1792046. https://bugzilla.mozilla.org/show_bug.cgi?id=1936587 [verified].
- **Safari draws a white plate behind low-contrast favicons in dark mode.** Paco Coursey, «Safari favicon showing white background on dark mode» (2023-04-19), https://paco.me/writing/safari-favicon-showing-white-background [verified]: «It's because your favicon fails to meet contrast requirements»; fix: make the primary colour «brighter», reduce whitespace or add a border (his example: Linear's darker blue → lighter blue). Cendio bug 8036 attributes some white boxes to opaque apple-touch-icons in dark mode (https://bugzilla.cendio.com/show_bug.cgi?id=8036 [snippet]). Apple publishes no threshold (could not confirm).

**Design consequences** [inference from the above]:
1. A bare glyph in the site's ink `#1c1713` vanishes in a dark Chrome/Dia tab and gets a white plate in dark Safari; a bare glyph in white vanishes in light tabs.
2. Robust options: (a) a filled tile (the glyph sits on its own background, so the tab colour no longer matters); (b) a single mid-luminance colour that contrasts with both ~#fff and ~#202124/#1d1d1c; (c) the SVG media-query swap, which works in Chromium and Firefox only — Safari would show the light version always.
3. The site accent `#2c4a9e` is dark (≈ 2.5:1 against a typical dark tab, see 05) — as a bare glyph it is weak on dark tabs; the dark-theme accent `#9eb3ee` is weak on light tabs. A tile solves this.

## 4. Home-screen icons

- **Apple, Safari Web Content Guide, «Configuring Web Applications»** (archived), https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html [verified]: root `apple-touch-icon.png`; `sizes` per device; «If there is no icon that matches the recommended size for the device, the smallest icon larger than the recommended size is used.» «Safari on iOS 7 doesn't add effects to icons.»
- **MDN** [verified]: «Apple's iOS does not use this link type [icon], nor the sizes attribute … Instead it uses the non-standard apple-touch-icon».
- **Transparent apple-touch-icons turn black; iOS applies its own rounded mask.** Apple Developer Forums thread 713895 «Website icon with transparent background becomes black» (https://developer.apple.com/forums/thread/713895) and several guides [snippet]. → ship an opaque full-bleed square, let iOS round it.
- **Android / PWA maskable** (web.dev, «Adaptive icon support in PWAs with maskable icons», https://web.dev/articles/maskable-icon [verified]): keep content inside «a circular area in the center of the icon with a radius equal to 40% of the icon width»; icons without `purpose` are «shrunk onto a white background» on Android; «We don't recommend using multiple purposes for maskable icons.»
- Safari 26 also shows icons on the Start Page, Home Screen and Dock (WebKit WWDC25 post [verified]).

## 5. Link previews (og:image vs favicon)

| Platform | What it shows | Image rules | Source |
|---|---|---|---|
| **WhatsApp** | `og:title`, `og:description`, `og:url`, `og:image` as thumbnail or large image | `og:image` absolute URL, «under 600KB», «300px or more in width with 4:1 width/height or less aspect ratio»; `<head>` within first 300 KB of HTML; may fall back to «small link previews» | WhatsApp Business Platform docs, https://developers.facebook.com/documentation/business-messaging/whatsapp/link-previews/ [verified] |
| WhatsApp (folk wisdom) | — | many blogs cite 300 KB; the official page says 600 KB; whether the preview is large or a small square thumbnail is not specified officially | flarum, Rank Math threads [snippet] |
| **Facebook** (and Meta crawler generally) | og:image | «at least 1200 x 630 pixels»; minimum 200×200; «as close to 1.91:1»; ≤ 8 MB; cached per image URL — change URL to change image; first share may lack an image unless `og:image:width/height` are set | https://developers.facebook.com/docs/sharing/webmasters/images [verified] |
| **iMessage / Messages** | page title, domain and «small icon belonging to the linked web page»; large image if og:image | «The link preview will use an apple-touch-icon, a favicon, or an icon specified by og:image»; «Icons should be square, at least 108 pixels per side»; «Images should be at least 900 pixels in width»; images < 150 px wide may be shown as icons; avoid text in preview images; no JS; page ≤ 1 MB, assets ≤ 10 MB | Apple TN3156 «Create rich previews for Messages» (2024-04-30), https://developer.apple.com/documentation/technotes/tn3156-create-rich-previews-for-messages [verified via Apple's JSON] |
| **Slack** | oEmbed / Twitter Card / Open Graph; site name and icon line | Slackbot «fetches as little of the page as it can (using HTTP Range headers)»; cache «around 30 minutes» | https://api.slack.com/robots [verified]; whether the small site icon is the favicon: not stated there (could not confirm; Slack's unfurl blog post returned 403) |
| **LinkedIn** | og:image | max 5 MB; min 1200×627; 1.91:1; «Images less than 401 pixels wide display as a thumbnail image.» | https://www.linkedin.com/help/linkedin/answer/a521928 [verified] |
| **X** | `twitter:card` = `summary_large_image` | official page returned 402/404 this run; third-party: ~2:1, min 300×157, max 4096×4096, 5 MB | og-image-app, dev.to [snippet]; Next.js docs link the 5 MB limit to X's docs [verified, local] |
| **Telegram** | og:image large or small; caches the first scrape for a long time; @WebpageBot re-scrapes | no official doc found; one Stack Overflow answer says the large card needs `twitter:card=summary_large_image` | kiwix mirror of SO 53685817 [snippet] |
| **Discord** | og:site_name, title, description, og:image; `theme-color` paints the embed's side bar | no official doc found; third-party: images > ~400 px wide show large | wildandfreetools, ellietheyeen.github.io [snippet] |

Notes:
- A square logo used as `og:image` can render **giant** in Slack/Discord: Swift Forums thread «Site logo is giant in Discord and Slack embeds» (2018-05-09, still reported 2026-01-13), https://forums.swift.org/t/site-logo-is-giant-in-discord-and-slack-embeds/12505 [verified]; one participant suspected `twitter:card=summary_large_image` on the home page (unconfirmed in the thread). → keep the og:image a designed 1200×630 card (mark small, title large), never the bare logo [inference].
- iMessage uses the apple-touch-icon as the small icon when there is no large image → the 180 px icon is a link-preview asset too [inference from TN3156].
- Apple: «Avoid text in preview images.» Meta and LinkedIn crop to 1.91:1; WhatsApp may show a small square crop → a 1200×630 card whose mark sits in the centre square survives both [inference].
- Caching: Facebook caches by image URL; Telegram caches long; Slack ~30 min. → version the og:image URL when changing it [inference]. Next generates hashed URLs for file-based images [memory — check in build output].

## 6. Next.js 16.3.8 (this repo) — file conventions

Read from `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/` [verified, local]:

- `favicon.ico`: only in the top level of `app/`; output `<link rel="icon" href="/favicon.ico" sizes="any" />`. You cannot generate a favicon with code.
- `icon.(ico|jpg|jpeg|png|svg)` anywhere in `app/**`; `icon.svg` gets `sizes="any"`; numbered `icon1.png`, `icon2.png` sort lexically. Code-generated `icon.tsx` via `ImageResponse` from `next/og` (PNG), statically generated at build.
- `apple-icon.(jpg|jpeg|png)` only — **no SVG**; or `apple-icon.tsx`.
- `opengraph-image` / `twitter-image` (.jpg/.png/.gif or .tsx) per route segment, with `opengraph-image.alt.txt` or `export const alt`. Build fails if `twitter-image` > 5 MB or `opengraph-image` > 8 MB. `params` is a Promise (v16), so `app/[lang]/opengraph-image.tsx` can render a Spanish or English card per locale.
- `manifest.(json|webmanifest)` or `manifest.ts` returning `MetadataRoute.Manifest`, root of `app` only.
- Metadata `icons` API (`generate-metadata.md`) accepts arrays with `media`, e.g. `{ url: '/icon-dark.png', media: '(prefers-color-scheme: dark)' }`, and `apple` with `sizes`. The docs recommend the file-based API where possible.

Repo-specific [inference, read from the tree on 2026-11-04]: there is no `src/app/layout.tsx`; the root layout is `src/app/[lang]/layout.tsx`, and no icon, manifest or opengraph file exists yet. `favicon.ico` and `manifest` must sit in `src/app/`; `icon.svg` and `apple-icon.png` can also sit there and apply to every route.

**Conflict to test:** Next emits `sizes="any"` for `favicon.ico`, while Evil Martians changed theirs to `sizes="32x32"` (2023-07-11) because of a Chrome bug that prefers the ICO over the SVG. If both `favicon.ico` and `icon.svg` are shipped via file conventions, check in Chrome/Dia which one the tab actually uses; alternatives: skip `favicon.ico` and ship `icon.svg` + `icon.png` (32) only, or declare the ICO through the `icons` metadata with `sizes: '32x32'` [inference; not tested this run].

**Dark-mode-aware SVG in Next:** put the `<style>@media (prefers-color-scheme: dark){…}</style>` inside `app/icon.svg` (works in Chromium and Firefox, ignored by Safari 26, see §3); or two PNGs through `metadata.icons` with `media`. Either way it follows the OS setting, not the site's own `data-theme` toggle and not Incognito [inference from §3].

## 7. Sizes the variants must be checked at

16 (1× tab), 32 (2× tab, ICO), 48 (Google minimum recommendation), 64 (preview), 108 (iMessage icon minimum), 180 (apple-touch, opaque, iOS rounds it), 192/512 (Android, maskable: inside a circle of r = 0.4·w), circular crop (Google results), og card 1200×630 with the centre square safe for a WhatsApp/LinkedIn thumbnail.

## Could not confirm

- X's official card image limits (developer.x.com returned 402; docs.x.com 404).
- Slack's source for the small site icon in unfurls (blog post 403).
- Whether Dia's custom tab strip renders favicons at 16 CSS px like Chrome, and whether it respects `prefers-color-scheme` in SVG favicons (Chromium engine suggests yes; untested).
- Google Search SVG favicon support: not listed on the current page.
- Safari's exact contrast threshold for the white plate.
