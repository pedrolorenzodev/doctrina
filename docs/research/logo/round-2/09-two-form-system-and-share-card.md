# 09 · Two forms (tile and bare) and the one share card

Accessed 2026-11-04. Tags as in the README. Round 1's link-preview table (01 §5) was re-checked where marked «re-verified».

## 1. The short answer

- **Tile in the tab, bare in the page is a common, coherent system.** Vercel, Substack, Sefaria and Linear all do it; Vercel's bare header mark flips black → white with the theme exactly as Pedro describes (§2) [verified, visual]. It reads as one mark **when the glyph alone carries the identity**. If the tile is part of the sign (Flipboard, The Economist), those brands keep the tile in the header too.
- **Inversion is free in the page, impossible in the tab.** An inline SVG with `fill="currentColor"` inside an element coloured by `--color-ink` takes `#1c1713` in light and `#f2f2f0` in dark from the existing tokens, with no JS. A favicon is an external image: it cannot see the site's `data-theme` toggle; at best it follows the OS via a media query, and Safari ignores even that (01 §3).
- **One source of truth:** keep the glyph as one path string in one module; the header component, `app/icon.svg` (written once by hand or by a script), `app/apple-icon.tsx`/`.png` and `app/opengraph-image.tsx` all use it. Next 16 supports every piece (§4).
- **One site-wide card:** 1200×630 PNG, < 600 KB, mark and wordmark inside the centre square, no domain in the image (every platform prints the domain itself), set `metadataBase` or the URL breaks (a live example of that bug in our sample, §5). X explicitly discourages a site-wide logo card; accept that or add per-page cards later.

## 2. How real brands pair a tile favicon with a bare in-page mark

Header screenshots at 1280 px in light and dark `prefers-color-scheme`, `refs/_sheets/headers-light-dark.png` and `refs/headers/` [verified, visual]; favicons from 02 and `refs/containers/`.

| Brand | Favicon | Header (light → dark) | One mark? |
|---|---|---|---|
| **Vercel** | white triangle in a black circle | bare triangle, **black → white** | yes: the triangle carries it |
| **Linear** | white striped disc in a black rounded tile | bare striped disc + wordmark, white (site always dark) | yes |
| **Substack** | white bookmark ribbon on an orange rounded tile | bare **orange** ribbon, same in both modes | yes |
| **Sefaria** | white Hebrew letter on a navy tile | bare grey letter + «Sefaria Library», no tile | yes, quieter |
| **Medium** | `Me` on black | wordmark «Medium», black → white | by name only |
| **Are.na** | bare asterisks, dark-aware SVG | bare asterisks, black → white | yes (no tile anywhere) |
| **Flipboard** | white `F` cut from a red square | **same red square** + wordmark that flips black → white | tile kept because it *is* the F |
| **The Economist** | white `E` on red | the red block wordmark, unchanged | tile = logo |
| **Readwise** | serif `R` on white tile | `R` in a pale rounded tile, unchanged | tile kept |
| **Stripe Press** | (serves Stripe's favicon, 02 §3) | bare line mark + name, white on dark | different from favicon |
| **Anthropic** | `A\` on cream tile | wordmark only, page does not change in dark | by name |

Practitioner guidance:
- Michael Flarup (App Icon designer), «Icons and logos are not the same», 2015-01-05, https://applypixels.com/icons-and-logos-are-not-the-same [verified]: «Icons and Logos are two completely separate design disciplines»; icons are shaped by «the technical dimensions and the restrictions of the systems that display them»; «Far the most icons operate within a complete square canvas», logos are not bound to one.
- Vercel brand guidelines, https://vercel.com/geist/brands [verified]: «Use the full logo or logotype when space allows. Use a symbol for constrained spaces»; «Choose the variant for the destination's background, independently of your browser theme» (black artwork for light backgrounds, white for dark).
- Louie Mantia (08 §2): container vs canvas — if «the icon **is** the squircle», the tile cannot be dropped.
- Apple HIG (04 §1.1): keep «core visual features the same» across appearances.
- Made Good Designs: if a logo fails small, make «a simplified logo icon» for app icons and favicons (https://madegooddesigns.com/logo-vs-icon/ [snippet]).

Rule for Doctrina [inference]: **choose the container per form, but never let the tile carry meaning the bare glyph lacks.** If a variant uses «tile = part of the sign», the header must show that same block (as Flipboard does), which conflicts with Pedro's «sin tile» header — flag it per variant.

## 3. Dark-mode inversion of a mono mark

- **MDN, `currentColor`**, https://developer.mozilla.org/en-US/docs/Web/CSS/color_value [verified]: «The `currentColor` keyword represents the value of an element's `color` property. This lets you use the `color` value on properties that do not receive it by default.» → `<svg fill="currentColor">` inline in the header takes `color` from its parent.
- The site's tokens already flip under `[data-theme="dark"]` (DESIGN §1 + preamble: «tokens are redefined under that selector»): `--color-ink` `#1c1713` → `#f2f2f0`. So `className="text-ink"` on the header link gives Pedro's «opposite colour to the theme» automatically, including when the reader overrides the OS theme with the toggle [verified, read from DESIGN.md; inference on the wiring].
- **Only inline SVG inherits.** An SVG used through `<img>`, CSS `background-image` or as a favicon is a separate document and does not see the page's `color` or custom properties [memory — standard browser behaviour; not re-checked this run]. That is why the favicon needs its own colours (tile) and the header needs inline SVG.
- Contrast of the bare mark on the site background [verified, computed]: ink `#1c1713` on bg `#e8e5de` = 14.1; dark ink `#f2f2f0` on dark bg `#1d1d1c` = 15.1. Accent as the bare mark: 6.5 light / 8.1 dark (`#9eb3ee`) — possible if Pedro wants the mark in the accent, but DESIGN reserves the accent for «selection, current position, focus ring» (DESIGN §1), so a blue header mark would read as «selected/current» [inference].
- Favicon dark handling (from 01 §3, unchanged): `@media (prefers-color-scheme: dark)` inside `icon.svg` works in Chromium/Firefox, follows the OS not the tab or the site toggle, is ignored by Safari 26 (WebKit bug 309949). With a tile it is unnecessary.

## 4. One SVG source, Next.js 16.3.8 wiring

Read from `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/app-icons.md`, `opengraph-image.md`, `04-functions/image-response.md`, `generate-metadata.md`, `01-getting-started/14-metadata-and-og-images.md` [verified, local].

| Asset | File | Notes from the docs |
|---|---|---|
| Tab icon (vector) | `src/app/icon.svg` | `icon` accepts `.ico .jpg .jpeg .png .svg` anywhere in `app/**`; SVG gets `sizes="any"`. Static file = the tile form, hand-written from the shared path. |
| Legacy | `src/app/favicon.ico` | only in the top level of `app/`; output `sizes="any"` (round-1 conflict with Evil Martians' `32x32`, 01 §6 — test which one Chrome picks). |
| Home screen / iMessage icon | `src/app/apple-icon.png` or `apple-icon.tsx` | **no SVG** for `apple-icon`; `.tsx` with `ImageResponse` is allowed (PNG). Opaque full-bleed tile (01 §4). |
| Share card | `src/app/opengraph-image.tsx` (or `.png`) + `opengraph-image.alt.txt` / `export const alt` | «create a `opengraph-image.jpg` file in the root of the app folder» to cover the app; build fails if > 8 MB (`twitter-image` > 5 MB); generated images are «statically optimized (generated at build time and cached)» unless they use request-time APIs. |
| Header | a component (e.g. `src/components/brand-mark.tsx`) rendering inline `<svg viewBox="0 0 32 32" fill="currentColor">` with the shared path | Server Component; no `"use client"` needed. |
| Absolute URLs | `metadataBase` in `generateMetadata` of `src/app/[lang]/layout.tsx` | «Using a relative path in a URL-based `metadata` field without configuring a `metadataBase` will cause a build error.» |

- `ImageResponse` (`next/og`): Satori + Resvg → PNG; «Only flexbox and a subset of CSS properties»; «Maximum bundle size of `500KB`» including fonts; «Only `ttf`, `otf`, and `woff` font formats are supported» (so Newsreader for a wordmark in the card must be a TTF instance, not the site's woff2) [verified, local]. Satori renders inline `<svg>` elements (its README lists «The `transform` attribute of inline `<svg>`» as supported; https://raw.githubusercontent.com/vercel/satori/main/README.md [verified; README of main, the version bundled in Next may lag]).
- **Single source:** export the glyph as `export const markPath = "M…Z"` from one module; header component and `opengraph-image.tsx` / `apple-icon.tsx` import it; `icon.svg` must be a static file (the `icon` file convention can also be `icon.tsx`, but that outputs PNG, losing the vector tab icon) → keep `icon.svg` hand-synced or generate it with a small script, and add a check [inference].
- **Repo specifics** [verified, read 2026-11-04]: there is no `src/app/layout.tsx`; the root layout is `src/app/[lang]/layout.tsx`, whose `generateMetadata` returns only `title` and `description` (no `metadataBase`, no `openGraph`, no `icons`). Top-level `src/app/` holds `[lang]`, `api`, `global-error.tsx`, `global-not-found.tsx`, `globals.css`. Metadata files placed in `src/app/` should apply to every route; **verify after `next build` by reading the `<head>` of `/es` and `/en`** (I did not build) [inference].
- Metadata merge gotcha (generate-metadata.md «Inheriting fields» [verified]): a page that sets its own `openGraph` object replaces the parent's whole `openGraph`; file-based metadata «has the higher priority and will override the `metadata` object».

## 5. One site-wide share image

### Platform rules (re-verified this run unless noted)

| Platform | Rule | Source |
|---|---|---|
| WhatsApp | og:image «under 600KB», «300px or more in width with 4:1 width/height or less aspect ratio»; small previews are a best-effort fallback that «should not be relied on»; nothing on cropping | https://developers.facebook.com/documentation/business-messaging/whatsapp/link-previews/ [re-verified] |
| iMessage (Apple TN3156) | «Icons should be square, at least 108 pixels per side»; «Images should be at least 900 pixels in width»; «Images less than 150 pixels in width may be ignored or presented as icons»; «If you do not have a preview image of sufficient size or quality, use an `apple-touch-icon` instead»; «**Avoid text in preview images.** Images may be displayed at varying sizes» | Apple JSON of TN3156 [re-verified] |
| Slack | Slackbot-LinkExpanding reads «oEmbed and Twitter Card / Open Graph tags», fetches the image «to check validity»; cache «around 30 minutes» | https://api.slack.com/robots [re-verified] |
| X | `summary_large_image`: «aspect ratio of 2:1 with minimum dimensions of 300x157 or maximum of 4096x4096», «less than 5MB», JPG/PNG/WEBP/GIF, «SVG is not supported»; and: «**You should not use a generic image such as your website logo**, author photo, or other image that spans multiple pages» | archived developer.x.com page, Wayback snapshot 2024-11-25: https://web.archive.org/web/20241125061302/https://developer.x.com/en/docs/x-for-websites/cards/overview/summary-card-with-large-image [verified; live page 402/404] |
| LinkedIn | «Minimum image dimensions: 1200 (w) x 627 (h)», «Recommended ratio: 1.91:1», «Max file size: 5 MB», «Images less than 401 pixels wide display as a thumbnail» | https://www.linkedin.com/help/linkedin/answer/a521928 [re-verified] |
| Facebook / Meta | ≥ 1200×630, ~1.91:1, ≤ 8 MB, cached per URL | 01 §5 [round 1, not re-fetched] |
| Telegram | official API only exposes sender-side `force_large_media` / `force_small_media` («If set, specifies that a large media preview should be used»); no official image-size rule found; community: use `twitter:card=summary_large_image`, refresh via @WebpageBot | https://core.telegram.org/constructor/inputMediaWebPage [verified]; SO mirror [snippet] |

Safe area [inference from the rules above; no platform documents a crop box]: put mark and wordmark inside the **centre 630×630 square** of the 1200×630 card so a square thumbnail crop keeps them; keep the 300-px-wide rendering legible (WhatsApp minimum) → mark ≥ ~120 px tall on the card, wordmark ≥ ~56 px cap height.

### Current practice (32 site-wide default cards looked at, `refs/_sheets/og-cards.png`, files in `refs/og/`) [verified, visual]

- **Wordmark or mark centred on a flat brand colour** is the norm: Aeon, Anthropic, Christianity Today, Claude, Grilli Type, Klim, Linear, Sefaria, Stripe Press, The Atlantic, The Verge, Typewolf, Kagi, Letterboxd, Our World in Data, Fundéu, Mediapart.
- **Plus a one-line tagline**: Letterboxd («Your life in film.»), Our World in Data, Mediapart («L'info part de là»), Goodreads («Meet your next favorite book.»), Readwise, Every, Raycast.
- **No card shows the domain.** Platforms print it themselves (iMessage shows «page title, domain and small icon», 01 §5; WhatsApp reads `og:url`).
- Sizes: most 1200×630 or 2400×1260; outliers are square (Are.na 1200², The Atlantic 600², Letterboxd 500², Fundéu 400²) or tiny (Blue Letter Bible 343×257).
- **Missing `metadataBase` in the wild:** Buttondown's `og:image` is `http://localhost:3000/opengraph-image` (from `refs/containers/buttondown/meta.json`) — exactly the failure §4 warns about [verified].

### Recommendation for Doctrina's single card [inference]

- 1200×630 PNG (< 600 KB), background = site paper `#e8e5de` with the site texture or flat ink `#1c1713`; the **bare** mark (not the tile) + «Doctrina» in Newsreader, both inside the centre square; optional tagline in the site's voice. Flat colour, no gradient (DESIGN §7).
- No domain in the image (redundant; and `doctrina.elpepo.dev` is a provisional name on a personal subdomain). If Pedro still wants it, small, at the bottom, in Work Sans `ink-3`.
- Language: one card for both locales means one tagline; either no tagline, or a bilingual-neutral one. Apple advises no text at all; the market does the opposite. Keep text to the wordmark if in doubt.
- Accept X's «not a generic logo» advice as a known trade-off of «one image for the whole site»; per-doctrine cards remain possible later with `src/app/[lang]/.../opengraph-image.tsx` (round 1 open question 7).

## Could not confirm

- Whether a `opengraph-image` in `src/app/` (above the `[lang]` root layout) is emitted for `/es` and `/en` routes: docs imply yes, not built.
- X's current live card docs (402/404); only a 2024 archive.
- Telegram's real thresholds for large vs small previews.
- Whether WhatsApp crops a wide card to a square thumbnail (common claim; not in the official page).
