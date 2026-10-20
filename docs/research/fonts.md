# Font licences

## Progress

- Status: done
- Done: verified Lust Text's designer, seller, retail and trial terms, Spanish coverage, current web pricing and public variable-font availability; verified the three expected OFL families; compared three OFL headline substitutes.
- In progress: none.
- Next: use the recommendation as input to the design proposal; do not add font files until Pedro approves the typography.

Research snapshot: 2026-10-20. Prices are the official storefront's displayed USD prices before any tax or currency conversion and can change.

## Lust Text

### Identity and availability

| Question | Finding | Evidence |
|---|---|---|
| Who designed it? | Neil Summerour; Potch Auacherdkul is credited as engineer. | [Positype family page](https://positype.com/lust-text) |
| Who sells it? | Positype, the trade name used by Swash and Kern LLC. The official store is the primary seller checked here. | [Positype family page](https://positype.com/lust-text), [Positype EULA](https://positype.com/support/eula) |
| Is there a free/open edition? | No production-safe free or open edition was found. Positype offers a no-cost **trial**, but it is proprietary, reduced to basic characters, lacks the complete OpenType feature set, and forbids public, production, commercial and live-web use. It is not an OFL substitute. | [Trial License, Addendum I](https://positype.com/support/eula) |
| Does it cover Spanish? | Yes. Positype lists Spanish among 306 predicted supported languages, and its glyph inventory includes the needed accented Latin characters and `ñ`. The site cautions that language support is predicted from codepoint coverage rather than guaranteed. | [Positype family page](https://positype.com/lust-text) |
| What styles exist? | Ten static styles: Light, Light Italic, Book, Italic, Medium, Medium Italic, Bold, Bold Italic, Black and Black Italic. | [Positype family page](https://positype.com/lust-text) |
| Is a variable font available? | The public Lust Text product and licence configurator expose ten separate styles, not a variable file. Positype says variable versions exist for many families but are being added to the store gradually and invites requests. Therefore a Lust Text variable font must be treated as **not publicly orderable without written confirmation**, not as proven nonexistent. | [Lust Text product](https://positype.com/lust-text), [Positype variable-font notice](https://positype.com/) |

### Web licence and current price

The relevant category for Doctrina is **Web (Self-Hosted)**, not Desktop. It permits WOFF/WOFF2 files served with `@font-face` on one primary domain and its subdomains, including associated development and staging environments. Price is based on average monthly pageviews measured across three consecutive months. Annual and perpetual terms are offered. Each distinct primary domain needs a licence. The files must be protected from hotlinking and direct download; a developer or host may receive them only for implementation and must destroy its copies afterward. Desktop installation is separate. [Official licence overview](https://positype.com/support/licensing), [Web License, Addendum C](https://positype.com/support/eula).

Official configurator snapshot for one primary domain and one year:

| Average monthly pageviews | Light only | Light + Light Italic | Full 10-style family |
|---:|---:|---:|---:|
| 10,000 | USD 29 | USD 58 | USD 169 |
| 25,000 | USD 70 | USD 139 | USD 406 |

These are licence prices, not subscriptions to a font CDN: Doctrina would self-host the delivered WOFF/WOFF2 files. The two-style price is the relevant comparison for the current headline-plus-italic-quote concept. Source: [official Lust Text licence configurator](https://positype.com/license/lust-text), observed 2026-10-20.

### Decision consequence

Lust Text is legally usable if Pedro buys the web licence matching the real domain and traffic tier, but it introduces a recurring compliance check as traffic grows and no confirmed public variable file. It should not enter the repository from a trial download. Before purchase, confirm with Positype whether the perpetual option and any unlisted variable build materially change the price for Light plus Light Italic.

## Expected open families

All three are licensed under the SIL Open Font License 1.1. That permits self-hosted web and commercial use, modification and redistribution under the licence's conditions; include the OFL text with redistributed font files and respect any Reserved Font Names when distributing modified versions.

| Family and intended role | Upstream verification | Variable files and useful limits | Spanish coverage |
|---|---|---|---|
| Work Sans — interface and labels | Wei Huang's [official repository](https://github.com/weiweihuanghuang/Work-Sans) identifies it as an OFL project and includes the OFL text. | Separate upright and italic variable files; `wght` 100–900. | Google Fonts records Latin Extended; upstream documents the Google Latin Expert expansion. Spanish is covered. |
| Source Serif 4 — reading body | Adobe's [official repository](https://github.com/adobe-fonts/source-serif) and [release licence](https://github.com/adobe-fonts/source-serif/blob/release/LICENSE.md) identify OFL 1.1 with Reserved Font Name “Source.” | Separate upright and italic variable files; `wght` 200–900 and `opsz` 8–60. | Latin Extended, plus Greek and Cyrillic; Spanish is covered. [Google Fonts metadata](https://github.com/google/fonts/blob/main/ofl/sourceserif4/METADATA.pb). |
| Newsreader — current headline and quotation candidate | Production Type's [official repository](https://github.com/productiontype/Newsreader) states OFL 1.1 and describes the family as intended for continuous on-screen reading. | Separate upright and italic variable files; `wght` 200–800 and `opsz` 6–72. | Latin Plus / Latin Extended and Vietnamese; Spanish is covered. [Google Fonts metadata](https://github.com/google/fonts/blob/main/ofl/newsreader/METADATA.pb). |

## OFL alternatives to Lust Text Light

This is a licence and technical assessment, not final visual approval. “Closest” means the same current role: a light, high-contrast serif with a real italic for large headings and quotations. It does not mean a metric-compatible replacement.

| Rank | Family | What matches | What it costs visually | Technical fit |
|---:|---|---|---|---|
| 1 | **Newsreader** | The closest of the already-tested families: warm contrast, restrained display forms, a convincing italic, and optical-size control. At `wght` 200–300 and larger `opsz` it can approach Lust Text Light without copying its sharper fashion-editorial manner. | Less dramatic and less luxurious than Lust Text; this is beneficial for a study resource but loses some of the reference's tension. | OFL 1.1; upright and italic VFs; `wght` 200–800, `opsz` 6–72; Spanish. Best operational choice. |
| 2 | **Cormorant Garamond** | True Light and Light Italic, high stroke contrast and elegant display proportions. | More historical and calligraphic, with a smaller x-height and more fragile thin strokes. It can look ecclesiastical or ornamental sooner than Lust Text, so it needs careful sizes and cannot replace the body face. | OFL 1.1; current upstream provides separate upright and italic variable builds; five weights; Spanish through Latin Extended. [Official repository](https://github.com/CatharsisFonts/Cormorant), [Google Fonts upstream record](https://github.com/google/fonts/blob/main/ofl/cormorantgaramond/upstream_info.md). |
| 3 | **Fraunces** | Very broad variable control, including a true 100–900 weight range, optical size and separate italic; it can produce thin, high-contrast display settings. | Its soft and “wonky” early-twentieth-century personality is more playful than Lust Text. Neutral axis settings reduce that, but it remains the least faithful and could become conspicuously designed. | OFL 1.1; upright and italic VFs with `wght`, `opsz`, `SOFT` and `WONK`; Latin coverage includes Spanish. [Official repository](https://github.com/undercasetype/Fraunces), [Google Fonts family record](https://github.com/google/fonts/blob/main/ofl/fraunces/upstream_info.md). |

Source Serif 4 is not listed again as a headline alternative because the current concept already assigns it the reading-body role. It is technically capable of light display typography, but using one serif for both roles would remove the intentional contrast being evaluated.

## Recommendation

Keep **Newsreader** as the default proposal face. It is the strongest balance of resemblance, restraint, variable-font control and zero licence cost. Show **Lust Text Light + Light Italic** only as a clearly labelled commercial upgrade, priced against the expected traffic tier, after a real-font trial comparison. Keep **Cormorant Garamond** as the sharper free comparison. Do not advance Fraunces unless Pedro explicitly prefers its more expressive personality.
