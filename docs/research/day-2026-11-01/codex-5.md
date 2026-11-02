Status: draft, NOT verified by Pedro
Status: paused: weekly new-page threshold 95% used; reset 2026-11-04 08:54:04 UTC (05:54:04 Argentina)

## Progress

| Page | State | Records | New or extended ranges | Uncovered verse/chapter tokens |
|---|---|---:|---:|---:|
| Papacy Catholic | partial, checkpoint saved | 113 | 78 | 183 |
| Papacy Orthodox | partial, checkpoint saved | 46 | 38 | 39 |
| Papacy Lutheran | partial, checkpoint saved | 55 | 39 | 48 |
| Papacy Reformed | partial, checkpoint saved | 102 | 56 | 77 |
| Papacy Baptist | not started, usage threshold | — | — | — |
| Sola Scriptura Catholic | not started, usage threshold | — | — | — |
| Sola Scriptura Orthodox | not started, usage threshold | — | — | — |
| Sola Scriptura Lutheran | not started, usage threshold | — | — | — |
| Sola Scriptura Reformed | not started, usage threshold | — | — | — |
| Sola Scriptura Baptist | not started, usage threshold | — | — | — |

No page is certified exhaustive. Each saved page has its own Not reached section, including sources not extracted and evidence still needing image collation. Read-only inputs: AGENTS.md, requested Decisions entries, A3 Shared choices, import-spec shape, ROADMAP current state, PROJECT architecture, the four Papacy dossiers and their apply logs (Catholic apply filename absent; corrections are inside its dossier and other named logs), Papacy shared content, and each current Scripture array. Nothing in src/ or data/ was edited.

## Usage

- Initial prescribed grep returned no output because session JSON contains spaces. Parsed the latest `event_msg/token_count/rate_limits` instead: primary 1%, weekly 92%; primary reset 1793594273, weekly reset 1793782444 (Unix seconds).

## Agent's calls

- Follow this order's explicit write boundary: only the assigned scripture lists and this log; no shared decisions, roadmap or feature files, to avoid the concurrent A5 lane.
- Work order supplies the brief, acceptance criteria and verification method; the dossier playbook was consulted for quotation and edition rules only. No subagents or runner launched.
- Count distinct works, not paragraphs, editions, or repeated citations. `inPage` means every verse of a passage is covered by the current scripture array; partial overlap is described separately.
- CCC publication is dated 1992, with the 1997 typical edition distinguished from the undated online English rendering. Do not claim the HTML is a collated 1997 print. Preserve this edition uncertainty.

## Verification

- Research only; no application edits or downloads in the repo. Scratch: `~/codex-round5-scratch/`.

- Usage before Papacy Orthodox: prescribed grep re-tried via the same parsed-event fallback (see tool output for percentages).

- Papacy Orthodox: images checked for Philaret (Schaff II 488–490), Mogila (Overbeck 65–68), Dositheus (Robertson 122–123, 125, 128–129, 131), and 1895 English reply (37, 39, 41, 49). Routes not reached are named in its list. Usage during this page: primary 12%, weekly 93%.

- Usage before Papacy Lutheran: primary 13%, weekly 94%; allowed to start (<52/<95). Orthodox provisional ranges do not infer endpoints of open ranges or biblical allusions. Mogila Q.86 included because it explicitly discusses judging popes.

- Usage before Papacy Reformed: primary 18%, weekly 94%; allowed to start. Papacy Lutheran English Triglot pp.505–527 read as OCR, AC XXVIII pp.85–93, Ap XXVIII pp.443–451, SA II.4 pp.471–475. Images read for Treatise pp.513/515/517/523; remaining OCR tags retained. No claim of corpus completeness.


## Final cutoff and handoff

- Last observed usage: primary 24%, weekly 95%. No fifth page started. Stop is the required **new-page threshold**, not exhaustion of the 97% hard cap. Primary reset: 2026-11-02 04:37:53 UTC (01:37:53 Argentina); weekly reset: 2026-11-04 08:54:04 UTC (05:54:04 Argentina).
- Catholic gaps: secondary Holy See documents/canons and Florence; full inline-reference audit; English CCC edition not collated to a dated print; defective LG §12 notes; many sentence fields deliberately contain exact citing parentheses or footnotes, not surrounding prose. Official Latin Pastor aeternus was read, but Schaff print not collated.
- Orthodox gaps: dated print of 1848; complete 1895 Greek apparatus and its open Romans range; received canons and other conciliar loci. Dositheus recension genealogy not newly established. Mogila and Philaret image checks are specifically identified in the list.
- Lutheran gaps: wider Catechisms/Formula of Concord/AC/Ap/SA corpus; visual collation of OCR rows; provisional paragraph numbering in AC/Ap. SA Revelation 12 chapter-only reference and ambiguous 2 John 1 noted outside JSON. Some Treatise rows verified on images, the rest remain OCR.
- Reformed gaps: Heidelberg and Belgic were downloaded but not extracted or edition-collated; remaining WCF/WLC/WSC loci, open-ended proof ranges and every image collation remain. WCF25.6’s 1894 range is not replaced with the 1880 range.
- No finished/exhaustive pages; four useful partial page lists, six unstarted pages. No application copy or doctrinal conclusions produced.

### Additional agent's calls

- **Exact extents rather than a global union:** overlapping ranges with different printed endpoints remain separate. This avoids attributing a longer passage to a work citing only one verse. Count = distinct works citing that exact record range; the same work’s repeated loci or editions never increase it. Adjacent verses explicitly printed together are joined. A new/extended range may overlap current content.
- **Whole chapters:** current Scripture includes `1Cor.5`; treat it as covering its verses when comparing `inPage`. Output also retains explicit chapter ranges in the Reformed apparatus. The uncovered summary counts a chapter as one token, not a made-up number of verses. Five verses under the current whole chapter were removed from the Reformed uncovered-token count during validation (82 → 77); its 56 new/extended records did not change.
- **Holy See sentence budget:** where surrounding prose would exceed the project quotation policy, retain the exact citing parenthesis/footnote and its URL. This does not fulfill a full surrounding-sentence audit; the affected list states that limitation instead of fabricating a shorter sentence.
- **Mogila Q.86:** include the immediately adjacent question because it explicitly discusses conciliar judgment of popes; the older dossier’s I.82–85 boundary would omit relevant material. English is preserved directly, no Spanish through English.
- **Psalm number:** Robertson p.122 explicitly prints both xciv and bracketed xcv; encode Ps.95.7 using that printed alternative, retaining both in the locator. No silent Psalm remapping.
- **OCR anomalies:** preserve the printed/OCR range with an unverified tag, or hold it out with a precise note, rather than repairing it from biblical memory. Examples: WLC45 Isa.55:6; Tr §39 2 Thess.2:3; Tr §11 1 Cor.3:6; LG §12 defects.

### Checks actually run

- All four JSON arrays parse; exact required keys checked; every citation has work, locator, method, sentence and edition; counts equal the distinct-work set; rows sorted by descending count; OSIS syntax checked, including chapter-only references; all excerpts at most 120 words; all Markdown first lines match the requested draft status. Passed.
- `git diff --check` scoped to the nine owned paths: passed (new untracked files are not fully covered by that command; JSON/content checks above read the new files directly).
- `npm run verify` not run: this is research only, and typegen/build would write generated files outside this order’s strict permitted write paths. No application-build success is claimed.
- No Git write command run. Downloads, virtual environment, helper scripts and bytecode are exclusively in `~/codex-round5-scratch/`. Pre-existing scratch images were read from `~/doctrina-scratch/orthodox-drafting/`, never modified.
- Only nine repository files written: the Papacy Catholic, Orthodox, Lutheran and Reformed `.md`/`.json` pairs, plus this log. No shared docs or concurrent A5 files touched. Browser metadata opens failed for Archive.org; direct Archive.org metadata/XML/page-image requests succeeded, so those browser failures did not block acquisition.
