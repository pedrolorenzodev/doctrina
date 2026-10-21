# Sidebar: in-page sections vs pages at one level

Research for the «Objeciones» case: in the tree Doctrinas › La Eucaristía › Católica › [Pasajes (page), Objeciones (anchor to a section of the Católica page, whose children are objection pages)], clicking «Objeciones» selects nothing in the sidebar. How do real tree-sidebar sites handle this?

Method: Playwright (Chromium), desktop 1440 px and mobile 390 px where the sidebar changes. Screenshots in the session scratchpad `sidebar-refs/` (not in the repo). "Seen" = observed in the DOM/screenshot on the access date; "Inferred" = my reading of it.

## Progress

- Started 2026-10-20 20:46 -03.
- Sites done: 12 of 12 (Docusaurus, Next.js, Stripe, MDN, Tailwind, Apple, GitBook, Mintlify, Vercel, Wikipedia, Linear, Sefaria). Notion help skipped (Linear covers it).
- Patterns written: A–E. Finished 2026-10-20 20:54 -03.
- Status: done

## Sites

### 1. Docusaurus docs (docusaurus.io)

URLs: https://docusaurus.io/docs/sidebar/items, https://docusaurus.io/docs/api/plugins (accessed 2026-10-20). Screenshots: `docusaurus-d1440-a.png`, `docusaurus-d1440-b-sidebar-item-categor.png`, `docusaurus-m390-a.png`.

- **Mixing pages and sections (seen):** no. Every left-sidebar item is an `<a>` to a page (`/docs/...`, no `#`). In-page headings live only in a right-hand TOC (`table-of-contents__link`, all `href="#..."`).
- **Group nodes (seen):** categories are links *plus* a separate caret `<button aria-expanded>` («Collapse sidebar category 'Guides'»). The link goes either to a generated index page (`/docs/category/getting-started`, `/docs/category/guides`) or to a real doc (`Docs` → `/docs/docs-introduction`; `Plugins` → `/docs/api/plugins`, which is itself a page with child pages). Clicking the label navigates; the caret only toggles. The docs page says: «With category links, clicking on a category can navigate you to another page» and categories without a link just collapse/expand (`collapsible`).
- **Selected state (seen):** current page gets `aria-current="page"` + green text + light background (`rgba(0,0,0,.05)`). Every ancestor category (Guides › Docs › Sidebar) gets `menu__link--active`: green text, no background, no `aria-current`. When on `/docs/api/plugins`, the category «Plugins» itself carries `aria-current="page"` (it is the page). After scrolling to `#sidebar-item-category`, nothing in the left sidebar changed; the right TOC item switched to `table-of-contents__link--active` (green). Scroll-spy lives only in the right TOC.
- **Cues (seen):** categories have a chevron caret button; leaves have none. Same weight (500) for both. Indentation 12 px per level.
- **Mobile 390 (seen):** sidebar goes into the hamburger drawer; the TOC becomes a collapsed «On this page» bar above the H1.

### 2. Next.js docs (nextjs.org)

URLs: https://nextjs.org/docs/app/getting-started/layouts-and-pages, https://nextjs.org/docs/app/api-reference/components/image (accessed 2026-10-20). Screenshots: `nextjs2-d1440-a.png`, `nextjs2-d1440-b-creating-a-nested-ro.png`, `nextjs-d1440-a.png`.

- **Mixing (seen):** no. Left sidebar = pages only (`/docs/app/...`). Headings of the page live in a right «On this page» TOC.
- **Group nodes (seen):** top-level groups («Getting Started», «Guides», «API Reference», «Architecture») are links to their own overview page (`/docs/app/getting-started`) and also show a chevron; children are pages.
- **Selected state (seen):** current page = `aria-current="page"` + grey pill background (`rgb(235,235,235)`). The ancestor group «Getting Started» is only expanded; no extra mark (all top-level labels are already the darker colour). Scrolling to `#creating-a-nested-route` changed nothing in the left sidebar; the right TOC item turned dark (others grey) with a left rail.
- **Anomaly (seen, not explained):** on the Image API page, no left-sidebar item had `aria-current` and «API Reference» stayed collapsed even after an 8.5 s wait. Could be a lazy-render quirk; not used as evidence.
- **Cues (seen):** chevron on groups only; children indented 12 px, lighter grey.

### 3. Stripe docs (docs.stripe.com)

URL: https://docs.stripe.com/payments/checkout/how-checkout-works (accessed 2026-10-20). Screenshots: `stripe-d1440-a.png`, `stripe-quickstart-click.png`.

- **Mixing (seen):** no anchors in the left sidebar. But it mixes three node kinds at one level: plain page links, page links with children («Build a payments page» → `/payments/checkout`), and **href-less** group nodes with a chevron («Quickstart guides», «Custom integration», «Payouts»). Above them, uppercase non-link section headings («ONLINE PAYMENTS», «IN-PERSON PAYMENTS», 14 px, weight 600).
- **Group nodes (seen):** clicking «Quickstart guides» (an `<a>` with no `href`) did not change the URL; it expanded three quickstart pages. So: some groups are pages, some are expand-only, and the only visual difference is that page-groups can be selected; both have the same chevron.
- **Selected state (seen):** the current page «How Checkout works» is rendered with `aria-current="true"`, blue text, and **no `href`** (it is not a link while you are on it). The parent «Build a payments page» gets `aria-current="true"` too and goes bold (700). Right TOC «ON THIS PAGE» highlights the active section in blue (scroll-spy); the left sidebar does not.
- **Cues (seen):** chevron to the left of expandable items; leaves without chevron; parent of current page bold.

### 4. MDN Web Docs (developer.mozilla.org)

URL: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/details (accessed 2026-10-20). Screenshots: `mdn-d1440-a.png`, `mdn-d1440-b-scrolled.png`, `mdn-d1440-c-sidebar-top.png`.

- **Mixing (seen):** no anchors in the left sidebar. Bold headings that *are* links to index pages («HTML», «How to», «Reference», weight 600) sit above `<details><summary>` disclosure groups that are *not* links («Guides», «Elements», «Attributes»).
- **Group nodes (seen):** «Elements» in the sidebar is a `<summary>`, toggle only, even though an Elements index page exists (the breadcrumb «Elements» links to `/Reference/Elements`). So the group and its page are decoupled: the sidebar never sends you to the group page.
- **Selected state (seen):** current page `<details>` = `aria-current="page"`, light-blue background bar with a darker left border. Ancestor «Elements» is simply open; no mark on it. Right TOC «In this article» uses `aria-current="true"` with a blue left bar; after wheel-scrolling, it marked **every section in view** (Try it + Attributes at once, then Examples), not just one. Note: `scrollIntoView` alone did not trigger it; a real wheel scroll did.
- **Cues (seen):** chevron (› / ⌄) only on `<summary>` groups; link headings have no chevron and are bold; leaves are monospace for element names.

### 5. Tailwind CSS docs (tailwindcss.com)

URL: https://tailwindcss.com/docs/padding (accessed 2026-10-20). Screenshot: `tailwind-d1440-a.png`.

- **Mixing (seen):** no. Only one level of page links under non-link `<h3>` group headings («GETTING STARTED», «SPACING», uppercase 12 px, weight 500). No collapsing, no nested pages.
- **Group nodes (seen):** headings are plain text, not clickable.
- **Selected state (seen):** current page «padding» = `aria-current="page"`, weight 600, dark text, left border on the item's rail. Right TOC uses `aria-current="location"` for the active section, same bold style as the left current page.
- **Cues (seen):** hierarchy is only typographic: small uppercase grey for groups, normal-case for pages.

### 6. Apple Developer Documentation (developer.apple.com)

URL: https://developer.apple.com/documentation/swiftui/text (accessed 2026-10-20). Screenshots: `apple-d1440-a.png`, `apple-d1440-b-choosing-a-font.png`, `apple-m390-a.png`.

- **Mixing (seen): yes, the closest analog to «Objeciones».** Under the current page «Text», the sidebar shows grey labels «Creating a text view», «Choosing a font», «Styling the view's text». Those labels are the `<h3>` headings of the page's own **Topics** section (in-page anchors `#Creating-a-text-view`, `#Choosing-a-font`), and their children (`init(_:)`, `font(_:)`…) are separate pages. So an in-page section appears in the tree as a group whose children are pages.
- **How they keep it apart (seen):** the section label is not a link (`<h3 class="leaf-link">`, `cursor: auto`), no chevron, no icon, lighter grey and smaller than page items. Every page item has a symbol icon (S for structure, M for method). Result: the section reads as a caption, not as a destination, so nobody expects it to be selected.
- **Selected state (seen):** current page «Text» = `aria-current="page"`, grey rounded background, weight 600. The ancestor «Text input and output» is also weight 600 (`bolded` class), no background. There is no right TOC at all. When the page scrolls, the section label stays grey (inferred from the DOM: the label has no active-state class; my scroll attempt moved the sidebar, not the page, so a scroll-spy on it was not tested properly).
- **Mobile 390 (seen):** the sidebar is hidden behind a «Documentation» bar with a chevron at the top.

### 7. GitBook docs (gitbook.com/docs)

URL: https://gitbook.com/docs/create-content/blocks (accessed 2026-10-20; redirected from `/docs/creating-content/blocks`). Screenshot: `gitbook-d1440-a.png`.

- **Mixing (seen):** no. Left = pages; right = «ON THIS PAGE» TOC with `#` links.
- **Group nodes (seen):** two kinds. (a) Uppercase section headers («GET STARTED», «CREATE CONTENT») are `<button aria-expanded="true">` that only collapse/expand. (b) A page can have child pages: «Blocks» → `/docs/create-content/blocks` is a page and parent of «Paragraphs», «Headings»…; clicking it opens the Blocks page.
- **Selected state (seen):** current page «Blocks» = `aria-current="page"`, orange text, weight 600. Right TOC shows the active section in orange, weight 600 (scroll-spy), others grey.
- **Cues (seen):** child pages indented ~21 px with a thin vertical guide line; parents with a chevron.

### 8. Mintlify docs (mintlify.com/docs)

URL: https://www.mintlify.com/docs/organize/navigation (accessed 2026-10-20). Screenshots: `mintlify-d1440-a.png`, `mintlify-pages-click.png`.

- **Mixing (seen):** no. Left = pages and groups; right TOC with `#` links and `aria-current="location"`.
- **Group nodes (seen + documented):** top-level groups are non-link labels («Get started», «Create content», 12 px weight 600). Nested groups («CLI», «Pages», «Formatting») are `<button aria-expanded>`: clicking «Pages» did not change the URL and revealed «Pages», «Hidden pages», «Related topics», where the first child has the same name as the group (the group's own page lives as its first child). Mintlify's docs say a group can optionally get a `root` page: «When a group has a root page, clicking the group title in the sidebar navigation opens the root page».
- **Selected state (seen):** current page «Navigation» = `aria-current="page"`, green text. Right TOC active section = green, weight 500.
- **Cues (seen):** chevron on buttons (groups), none on page links.

### 9. Vercel docs (vercel.com/docs)

URL: https://vercel.com/docs/functions (accessed 2026-10-20). Screenshot: `vercel-d1440-a.png`.

- **Mixing (seen):** no. Left = pages; right «On this page» TOC.
- **Group nodes (seen):** drill-down sidebar. At root, «Functions» is a page link. Inside the Functions panel (header «‹ Functions»), the group's own page appears as the first child **«Overview»** (`/docs/functions`, same URL). Nested groups like «Runtimes» are a link to a page *plus* a separate «Expand menu» chevron button, as in Docusaurus.
- **Selected state (seen):** «Overview» = `aria-current="page"`, grey pill background; other items carry explicit `aria-current="false"`.
- **Cues (seen):** chevrons on the right edge for expandable items; children indented 12 px.

### 10. Wikipedia, Vector 2022 (en.wikipedia.org)

URL: https://en.wikipedia.org/wiki/Eucharist (accessed 2026-10-20). Screenshots: `wikipedia-d1440-a.png`, `wikipedia-d1440-b-Eucharistic_theology.png`.

- **Mixing (seen):** the opposite case: the left sidebar is **only** in-page sections (`vector-toc-link`, all `href="#..."`), starting with «(Top)». No page tree at all; other pages are reached through links in the text.
- **Group nodes (seen):** a section with subsections has a link (jumps to the section) plus a separate «Toggle … subsection» button that only collapses/expands.
- **Selected state (seen):** scroll-spy in the sidebar itself. On load «(Top)» is black bold (700); after scrolling to «Eucharistic theology», that item became black bold and «(Top)» went back to blue regular. Inactive items are blue links; the active one stops looking like a link.
- **Cues (seen):** none distinguish page vs section, because there is only one kind.

### 11. Linear docs (linear.app/docs)

URL: https://linear.app/docs/conceptual-model (accessed 2026-10-20). Screenshot: `linear-d1440-a.png`.

- **Mixing (seen):** no. Left = pages; right = section TOC (`/docs/conceptual-model#issues`).
- **Group nodes (seen):** every group («Getting started», «Intake», «Projects and initiatives») is a `<button aria-expanded>`, expand only, no group page.
- **Selected state (seen):** current page «Concepts» = `aria-current="page"`, bright text (others grey). The open ancestor group «Getting started» is also bright, so the path is marked by colour on both levels. Right TOC: first section bright, others grey.
- **Cues (seen):** groups have a chevron icon; pages none.

### 12. Sefaria (sefaria.org)

URLs: https://www.sefaria.org/Genesis.1, https://www.sefaria.org/Genesis (accessed 2026-10-20). Screenshots: `sefaria-d1440-a.png`, `sefaria-index-d1440-a.png`.

- **Seen:** the reader has **no tree sidebar**. The header shows «Genesis 1 · Revised JPS, 2023». The book has its own index page (`/Genesis`) with tabs «Contents | Versions», a «Chapters» grid and parashot below; a right column holds «About This Text», «Related Topics». So the container (the book) is a real page with its own overview, and its parts are reached from there.
- **Not checked:** the connections side panel that opens when you click a verse.

## Recurring patterns

Observed across the 12 sites (2026-10-20). One line each, with what it would mean for «Objeciones».

### A. Sections never enter the tree; they live in a right-hand TOC with scroll-spy

Docusaurus, Next.js, Stripe, MDN, GitBook, Mintlify, Vercel, Linear, Tailwind (9 of 12). The left sidebar holds only pages; headings of the current page appear in «On this page», which highlights the section in view. The left sidebar never reacts to scrolling on any of them.
**For Doctrina:** «Objeciones» leaves the left tree as an item; «Pasajes» stays a page; the Católica page gets an «En esta página» list (Pasajes summary, Objeciones…) that highlights while reading. The objection pages would need another home in the tree (see B or C), or be reached only from the section.

### B. The group is its own page (index/overview), clickable, with its children below

Docusaurus (category link to `/docs/category/...` or a doc), Next.js («Getting Started»), Stripe («Build a payments page»), GitBook («Blocks»), Vercel («Functions» → «Overview» as first child), Mintlify (`root` page, or a same-name first child «Pages»), Sefaria (book index page). Selected state then works normally: the group itself gets `aria-current="page"` when you are on it, and stays marked as ancestor (Docusaurus green, Stripe bold) when you are on a child.
**For Doctrina:** «Objeciones» becomes a real page (`…/catolica/objeciones`), same level and same nature as «Pasajes», listing the objections; clicking it selects it, and on an objection page it shows as ancestor. The «Objeciones» section of Católica could stay as a summary that links there.

### C. The group is a non-link label (heading or expand-only toggle)

Tailwind and Mintlify (top-level text headings), Stripe (uppercase headings + href-less «Quickstart guides»), MDN (`<summary>` «Elements», even though an Elements page exists), GitBook (uppercase collapsible headers), Linear (all groups are buttons). Clicking only expands; nothing is expected to be selected. They tell it apart from pages by chevron, uppercase/small type, or by being a button.
**For Doctrina:** «Objeciones» stops being a link and reads as a caption/toggle over its objection pages; the problem «I clicked and nothing is selected» disappears because it is no longer a destination. Cost: the in-page «Objeciones» section is no longer reachable from the tree.

### D. In-page sections shown in the tree as captions over child pages

Apple Developer only (seen): the page's own Topics headings («Choosing a font») appear under the current page as grey, smaller, non-link `<h3>` labels, with their member pages under them; no chevron, no icon, no selected state, no right TOC. This is the one site whose structure matches «Objeciones» exactly (a section of the page whose children are pages).
**For Doctrina:** keep «Objeciones» under Católica but styled as a caption (lighter, no link, no hover), clearly a different kind from «Pasajes».

### E. Sections in the left sidebar with scroll-spy (single-page TOC)

Wikipedia only, and only because it has no page tree: every item is a section, and the active one turns bold black while the rest stay blue links. No site in the sample mixes page links and anchor links at one level and gives the anchors a scroll-spy state.
**For Doctrina:** «Objeciones» stays a link to `#objeciones` and gets its own «you are here» state while that section is in view, styled differently from the page selection. Inferred: this would be custom; none of the 12 sites shows a model for it.

### Side notes (seen)

- Ancestor marking varies: Docusaurus colours the whole path (no background), Stripe and Apple bold the parent, Linear brightens the open group, Next.js/MDN/Vercel do nothing beyond keeping it open.
- Group = link + separate chevron button (Docusaurus, Next.js, Vercel, Wikipedia) is how sites let one node both navigate and toggle.
- Stripe renders the current page without `href`; MDN highlights every section in view, not just one.
- Mobile 390 (Docusaurus, Apple): the tree goes into a drawer behind a top bar; Docusaurus turns the right TOC into a collapsed «On this page» bar above the H1.
