# Doctrina v2 — brief for research and build agents

_Historical brief given to v2 research and build agents (`~/Desktop/dev/doctrina-v2`, October 2026). Superseded by `AGENTS.md` and `docs/PROJECT.md`; kept as research context. Paths refer to that repo._

Read this first. Everything you write in this repo is in **English** (site *content* is bilingual es/en). **Never run `git commit`.**

## The product

Doctrina is a bilingual (Spanish / English) **deep-study** web resource about Christian doctrine. For one doctrine at a time (pilot: the Eucharist) it shows, in depth, what each tradition believes, why, how the doctrine developed in the early Church, every relevant Bible passage and how each tradition reads it, the full primary sources, and the objections each tradition faces with its best answers. It is NOT a chatbot, not a debate forum, not a light comparison site ("if it's this thin it's the same as asking ChatGPT"). Beginners are secondary; the primary user is a serious searcher (often young, Spanish-speaking, consumes hours of YouTube apologetics) and teachers / students.

Traditions (MVP): Catholic, Orthodox, Lutheran, Reformed, Baptist/Evangelical. No Anglican yet.

Old project (thin MVP, for reference only, do not edit): now `~/Desktop/dev/doctrina-v1-archivo`, at `~/Desktop/dev/doctrina` when this brief was written (docs/PLAN.md §9–10 hold the owner's confirmed features).

## Core model (confirmed by the owner)

- **One tradition at a time** is the default reading mode; other traditions one click away. Side-by-side compare only in a few specific places.
- **Neutral (global) sections**, never assigned to a modern tradition: Common ground; History of the doctrine (early Church: Apostolic Fathers and Church Fathers, as literal evidence — what each Father actually wrote); Patristic commentary on key verses. The cutoff is roughly the patristic era (to John of Damascus, d. c. 749), still open.
- **Scripture dossier is per tradition**: each tradition lists the passages *it* uses as arguments (e.g. Catholics read the manna / Melchizedek as types of the Eucharist).

## Confirmed features (owner verdicts)

KEY (top priority)
- **Objections and responses, in depth**: for each objection, the tradition's best full defense, the passages it cites, and videos of creators answering that exact objection.
- **Verse page**: maximum information for every verse a tradition argues from: collapsed to the verse, expandable to the whole chapter with the verse highlighted; as much patristic commentary as exists; many videos explaining the passage.
- **Original-language words for ANY word of a verse**: original script, transliteration, literal lexical meaning (not interpretation). Data idea: STEPBible tagged texts (CC BY), Strong's, public-domain lexicons.
- **Compare translations** (very important): original text with transliteration + several translations the reader picks.
- **Earliest witness of X** (extremely valuable).

YES
- How it is lived (what actually happens at Mass / Divine Liturgy / Lutheran service / Baptist Lord's Supper).
- Connected doctrines (Eucharist → priesthood → apostolic succession → papacy).
- Context of a citation (paragraphs before and after).
- Authenticity and dating notes on every source; dates matter.
- Copy citation with exact reference.
- Level of authority (dogma / doctrine / theological opinion; confession; Father; theologian).
- Word study (where a word appears, how often).
- Timelines: per doctrine AND a general timeline of Christian history (Fathers and their writings, all councils with ecumenical emphasized, heresies with pages, divisions 451 / 1054 with pages, the Reformation and its branches).
- Term explanations in place (glossary popovers; per-tradition definitions where they differ; curated, no AI).
- Original-language words with transliteration first, script on demand; a dedicated Greek font.
- Video commentary per tradition on key verses and per doctrine (Trent Horn, Joe Heschmeyer, Jimmy Akin… and equivalents for each tradition), balanced.

MAYBE / LOWER: geographic map; user-selectable palettes; custom smooth scroll (Lenis) with a custom scrollbar on desktop.
PARKED: internal diversity within a tradition. Not yet reviewed: "Learning", "Video/audio", "Trust" brainstorm groups — don't build these.

## Design non-negotiables

The UI must feel calm and easy despite the depth: never heavy, crowded or dirty. NOT "AI slop": no cream #F4F1EA + terracotta, no gold-on-navy, no parchment, no stock cathedral photos, no identical rounded shadow cards, no ALL-CAPS tracked eyebrows everywhere, no emoji, no icons in colored squares, no gradient decoration, no Inter + centered 60px bold headline, no five-color rainbow per tradition.
