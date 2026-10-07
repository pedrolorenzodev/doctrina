---
paths:
  - "data/**"
---

# Content and data rules

Licensing policy and the data inventory live in `docs/PROJECT.md` ("Content and data"). Per-source details: `docs/research/data.md`. Open doubts to verify: `docs/research/content-notes.md` and `docs/research/history-notes.md`.

- Every record carries provenance: source, edition, license, and a verified flag. A record with no license is not publishable.
- Flag anything written from memory or from search summaries; never present it as verified. Keep `verbatim: false` for paraphrases and `esIsOurs: true` when the Spanish is our translation (the UI must label it as ours).
- Patristic excerpts: publish only entries whose translation is public domain (`translationLicense`). Quarantine entries with no source URL.
- Keep share-alike data (OpenGNT Spanish glosses, CC BY-SA 4.0) in its own layer so the license doesn't spill onto the rest.
- STEPBible: credit and link back to STEPBible.org, keep a changelog of our changes, don't mirror the raw files.
- Don't hand-edit script outputs. Fix the script or the draft and re-run it, recording the download date (STEPBible corrects its data regularly).
- `data/scripts/` are not adapted to this repo yet: don't run them (see `docs/GOTCHAS.md`).
- Never fill an unattested date with a modern estimate as if it were attested: keep the attested value empty and store the estimate in its own field with its source.
- Neutral sections (common ground, history, earliest witnesses, patristic commentary) never assign a Father to a modern tradition. Dating notes say when a date is conventional or contested.
- Pick one numbering convention per corpus and use it everywhere (psalms Hebrew vs Vulgate; Apology of the Augsburg Confession Triglotta vs Kolb–Wengert are still undecided).
