# YouTube video covers: policy and branding research

## Progress

- Status: done
- Done: output file created before policy research; read the current official Terms, Developer Policies, compliance guide, Required Minimum Functionality and Branding Guidelines; resolved click/play behavior, caching, attribution, image treatment, embedded-player privacy, and the API/non-API scope boundary.
- In progress: none.
- Next: none for this research task. Recheck the revision history immediately before implementation because YouTube can change the agreement.
- Source restriction: official YouTube or Google pages only.
- Access date: 2026-10-21.
- Usage at start: five-hour window 27%; weekly 61%.

## Executive answer

[verified/inference] A YouTube cover does **not** have one universal rule that it must always start playback. The official documents distinguish three cases:

1. A plain thumbnail/metadata presentation must clearly identify YouTube as its source, keep the thumbnail and title visible and unmodified, and comply with API-data refresh rules.
2. If a custom play button is placed over the thumbnail, tapping it must initiate playback; a fake play affordance that opens an unrelated detail view fails the official example.
3. Any displayed YouTube logo/icon used for attribution must itself be clickable and link to YouTube content or a YouTube component.

[inference] The lowest-risk Doctrina pattern is therefore an unmodified 16:9 YouTube thumbnail, exact video title and channel name, an official YouTube attribution icon, and a single card action that opens the exact YouTube watch URL (including the cited `t=` offset). If a play glyph is shown, that same action must begin the video in YouTube or an unobscured official embed. This is conservative design guidance, not a claim that the policies explicitly require every pixel of every non-player thumbnail to be a link.

## Controlling official documents

| Document | Version observed | Operative role |
|---|---:|---|
| [YouTube API Services Terms of Service](https://developers.google.com/youtube/terms/api-services-terms-of-service/) | Last updated 2026-09-14 UTC | Legally binding umbrella terms. Section 2 makes the associated agreement documents controlling and gives the Terms precedence on conflict; §24.3 requires deletion of API Data on termination. The English version controls over translations (§25.13). |
| [Developer Policies](https://developers.google.com/youtube/terms/developer-policies) | Last updated 2026-10-15 UTC | Specific rules for handling, storing, displaying and attributing API Data; playback integrity; privacy; no scraping. |
| [Complying with YouTube's Developer Policies](https://developers.google.com/youtube/terms/developer-policies-guide) | Last updated 2026-09-14 UTC | Official examples/clarifications. It says it does not replace the Terms or policies. |
| [Required Minimum Functionality](https://developers.google.com/youtube/terms/required-minimum-functionality) | Last updated 2026-10-15 UTC | Player behavior and minimum thumbnail dimensions when a thumbnail initiates playback. |
| [Branding Guidelines](https://developers.google.com/youtube/terms/branding-guidelines) | Last updated 2025-08-20 UTC | Which YouTube logo/icon to use, placement, alteration and link behavior. |
| [Revision history](https://developers.google.com/youtube/terms/revision-history) | Live page | Change monitoring. The Terms say ordinary changes become effective no sooner than 30 days after posting, while legal/new-functionality changes may be immediate. |

## Does the cover have to link to or play the video?

### What the official text actually says

- [verified] The compliance guide says thumbnails and titles should be visible and unmodified. It expressly permits a custom play button over a thumbnail, but says tapping that button must initiate playback. It also says links should open the YouTube app when available or otherwise the system browser: [guide, “standard experience” examples](https://developers.google.com/youtube/terms/developer-policies-guide).
- [verified] Required Minimum Functionality says a YouTube thumbnail that initiates playback must be at least 120 × 70 px: [playback requirements](https://developers.google.com/youtube/terms/required-minimum-functionality). This is a minimum for playback-triggering thumbnails, not permission to shrink a useful card to that size.
- [verified] The Branding Guidelines say every YouTube logo used in an application must be clickable and link back to YouTube content or a YouTube component. They do **not** say in that sentence that the thumbnail itself must be clickable: [logo sizing and placement](https://developers.google.com/youtube/terms/branding-guidelines).
- [not found] No sentence in the five official documents reviewed says that every standalone thumbnail, in every context, must itself link or play. The stricter conclusion sometimes repeated online overstates the text.

### Doctrina decision

[inference] Make the full video card a normal outbound link to `https://www.youtube.com/watch?v=<id>&t=<seconds>s`; show no play glyph unless clicking starts playback. This satisfies the clearest official expectations, works without JavaScript, preserves timestamp citations, and avoids an ambiguous inert image. Decided by the agent, to confirm.

[inference] Prefer opening in the same browsing context unless product requirements justify a new tab; the YouTube policy specifies the destination/application, not `target=_blank`. If an embedded player is later approved, the cover may replace itself with the official IFrame player after an explicit click, but nothing may obscure the player or its controls.

## Thumbnail integrity

- [verified] The official compliance guide says the video thumbnail must not be altered and treats the title and thumbnail as metadata that should be visible and unmodified.
- [verified] The same guide allows a custom play button over the thumbnail if it initiates playback.
- [verified] Developer Policies prohibit removing, obscuring, altering or disabling links that appear in YouTube players or in API Data, and prohibit changing/interfering with YouTube functionality.
- [inference] Preserve the API-provided aspect ratio and complete image. Avoid crops, recoloring, gradients baked across the image, replacement typography, AI cleanup, composites, or extracting a different video frame as a substitute “thumbnail.” A separate border/card treatment outside the image is safer. A play overlay is the one expressly documented overlay on a thumbnail; it must not be confused with permission to overlay an already loaded player.
- [verified] Once the official embedded player loads, no overlay, frame or visual element may cover any part of it, including controls: [Required Minimum Functionality](https://developers.google.com/youtube/terms/required-minimum-functionality).

## Caching and refresh limits

### Thumbnail and public metadata

- [verified] A public video's thumbnail URL, title, channel name and similar Data API results are Non-Authorized API Data because they can be fetched without user credentials.
- [verified] Developer Policies III.E.4.d allow limited Non-Authorized Data to be stored only as long as necessary and no longer than 30 calendar days. At 30 days the client must delete or refresh it: [Developer Policies, “Refreshing, Storing, and Displaying API Data”](https://developers.google.com/youtube/terms/developer-policies).
- [verified] Stored API Data must be kept consistent with current YouTube data and the user-facing view must display the most updated data available. The policy specifically expects deletion/status changes to be reflected quickly.
- [inference] A downloaded thumbnail file is still stored API Data; bundling it permanently in the repository or a never-expiring CDN is not a compliant default. Store `videoId`, last-refresh timestamp and the current API response/remote image URL; re-fetch within 30 days at the latest and remove cards for deleted/private/unavailable videos promptly. Decided by the agent, to confirm.
- [inference] Browser/CDN HTTP caching shorter than 30 days is compatible with this reading if the application still refreshes/revalidates the API record and can purge removed content. “The CDN cached it” does not remove the client owner's responsibility.

### What may not be cached

- [verified] Developer Policies III.E.1 prohibit downloading, importing, backing up, caching or storing copies of YouTube audiovisual content without prior written approval, and prohibit offline playback. Do not archive video/audio files for the cover or player.
- [verified] On termination or suspension, Terms §24.3 requires immediate cessation and deletion of YouTube API Services/API Data in the client's possession or control.

### Authorized-user data is different

- [verified] Certain authorized analytics/reporting/statistics may be retained longer, but authorization must be reconfirmed every 30 days. Other Authorized Data generally must be deleted or refreshed at 30 days, and revocation/user-deletion rules can require deletion within seven days. This exception does not turn public thumbnail metadata into indefinitely retainable data.

## Attribution and branding

- [verified] Any page/feature displaying YouTube videos, channels, playlists, thumbnails or players must make clear that YouTube is the source by displaying applicable YouTube Brand Features: [Developer Policies III.F.2](https://developers.google.com/youtube/terms/developer-policies).
- [verified] When YouTube results are mixed with other sources, attribution may need to sit beside each individual YouTube item; one generic page-level attribution is insufficient.
- [verified] For a mixed-source Doctrina resource with constrained card space, the Branding Guidelines identify the official YouTube Icon as the appropriate attribution form. Use an asset supplied by the official brand page, not a recreated red play mark.
- [verified] The icon/logo must be clickable, meet the official minimum size, remain fully visible, retain its colors, have sufficient contrast, and not be the page's most prominent element. Do not place it beside the Doctrina name in a way that implies YouTube sponsorship or partnership.
- [inference] Place the official icon adjacent to each cover or its title/channel metadata and link it to that video's YouTube watch page. The thumbnail's main link may go to the timestamped watch URL; the icon can go to the same URL. This supplies per-item provenance without making YouTube the visual brand of the page.

## Title, channel and Doctrina annotations

- [verified] The compliance guide says the API thumbnail and title should be visible and unmodified.
- [inference] Show the exact YouTube title and channel name as returned by the current API response. Put Doctrina's Spanish/English description, doctrinal tags, affiliation status and “why this matters” outside that metadata block and label them as Doctrina editorial content.
- [verified] Developer Policies prohibit replacing API Data with independently calculated data and require a clear, prominent disclosure when non-YouTube information or metrics appear alongside API Data. The prohibition is especially explicit for derived metrics.
- [inference] Do not silently translate or “clean up” the YouTube title in place. If a translated title aids bilingual discovery, retain the exact title and add `Doctrina translation:` as a separate editorial field.

## Embedded-player privacy and behavior

- [verified] Developer Policies III.E.4.i say an embedded player shares some basic user data with YouTube on load to render thumbnail/title, determine playability/restrictions and address fraud/abuse; more data is shared on playback. Autoplay increases collection because playback begins without interaction.
- [verified] Autoplay must not start until the player is visible and more than half visible, and only one player per page/screen may autoplay. Doctrina has no research-driven need for autoplay.
- [verified] The developer policies require API clients' own terms to link YouTube's Terms, and require a privacy policy that names the YouTube API Services and links Google's Privacy Policy. If Doctrina embeds or otherwise becomes an API Client, those legal surfaces are product requirements, not optional footer polish.
- [inference] A click-to-load player reduces pre-interaction data sharing relative to loading every iframe on page render. The safest first release is a static linked cover; if inline viewing is materially valuable, load the official player only after explicit user action and keep autoplay off. Decided by the agent, to confirm.

## API versus ordinary-link boundary

- [verified] The API Terms apply when a site/app accesses or uses YouTube API Services; their definition includes the APIs, related official materials, API Data and credentials. The Developer Policies also forbid scraping YouTube applications and require documented API access.
- [inference] A page containing only ordinary human-authored outbound YouTube links may fall outside the API-client caching regime. But once Doctrina retrieves/displays API thumbnails or metadata, uses the IFrame Player API, or stores API results, it should be designed as an API Client. Do not try to avoid the rules by scraping or constructing an undocumented substitute feed.
- [not found] The reviewed official pages do not grant a general copyright licence to download a creator's thumbnail and publish it forever outside the API framework. If the project wants permanent locally hosted covers independent of refresh/deletion, obtain creator permission or use a separately licensed Doctrina image; do not infer that public visibility equals a reusable licence.

## Release checklist

| Requirement | Conservative pass condition |
|---|---|
| Destination | Full card opens the exact YouTube watch URL and preserved `t=` offset, or an explicit click starts the official embed. |
| Play affordance | No inert/fake play button; any play overlay starts playback. |
| Image | Official current thumbnail, full aspect ratio, no crop or edit; only an actionable custom play overlay if used. |
| Metadata | Exact current title and channel visible; Doctrina translations/notes are separately labelled. |
| Attribution | Official YouTube Icon beside each YouTube item; clickable; official colors/clear space/minimum size; not dominant. |
| Refresh | API metadata and stored/cached thumbnail data refreshed or deleted within 30 days; removals/privacy changes reflected sooner where detected. |
| Media storage | No downloaded video/audio and no offline playback. |
| Embed | Official player only; unobscured controls/branding; no autoplay; click-to-load preferred. |
| Legal UI | YouTube Terms link and the required YouTube/Google disclosures in Doctrina's terms/privacy policy before API-client launch. |
| Maintenance | Subscribe to/check the official revision history before release and during operation. |

## Bottom line for the proposed covers

**PASS:** unmodified current thumbnail + exact title/channel + official linked YouTube attribution + card opens the cited video/time; API data refreshed at least every 30 days.

**FAIL:** permanently checked-in thumbnail, cropped/recolored cover, translated title replacing the original, inert play icon, missing per-item YouTube attribution in mixed-source results, covered/modified embedded player, cached video file, or metadata left stale beyond 30 days.
