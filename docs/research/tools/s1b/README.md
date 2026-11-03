# Scripts of session S1b (2026-11-02)

Status: draft, NOT verified by Pedro

Copied from the session scratchpad at the end of the session. They were written against that scratchpad (`/private/tmp/claude-501/-Users-pedrolorenzo-Desktop-dev-doctrina/860b43de-…/scratchpad/`) and the A5 scripts (`docs/research/tools/a5-scripture-lists/scrlib.py` is imported unchanged from there); change the paths at the top before re-running. Each script is idempotent (a row is added once per work, locator and kind) and rewrites the `.json` and then the `.md` of the list from it. Order of the session: `t1_orth.py`, `t1_luth.py` (also T2), `t3_belgic.py`, `t3_hc.py`, `t3_bapt.py`, `t3_lc.py`, `t4_don.py`, `t4_vat.py`, `t4_trent.py`, `t4_flor.py`, `t4_ccc.py`, `t5_trim.py`, then `codexmd.py` (the four Codex Papacy lists), `coresets_s1b.py`, `gaps_s1b.py`, `t5_closure.py`.

- `s1blib.py`: list class (load, add a citation, recount, write `.json` and `.md`, keeps the «Not reached» and later sections of the `.md`).
- `wc_proofs.json`: the 70 proof blocks of the Westminster Larger Catechism Q. 168–177 read from the 1894 page images by one extraction subagent (letters matched to clauses by eye; not re-checked).
- `ext.py`, `mog.py`, `hc.py`, `don.py`: text extractors for the Triglot, Mogila, the Palatinate Heidelberg print and Donovan's Roman Catechism.
- `t5_closure.py` recounts every number of `scripture-lists/s1b-closure-2026-11-02.md` from the JSON at HEAD and the JSON on disk.
