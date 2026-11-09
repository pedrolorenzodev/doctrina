import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { parseApologists } from "./apologists-md.mjs";

const FIXTURE = `# Fixture

## Baptism and the Lord's Supper as visible signs of union with Christ (Rom 6:3–4, Col 2:11–12, Acts 22:16, Acts 2:38) (C5 additions: 9Marks, Credo and Truth Unites corpora)

**C5 addition (2026-11-08) · Baptism shows the sinner washed and united to Christ.**
- **Tiago Oliveira**, «Yes, the Ordinances Really Do Change People», 9Marks, 2021-07-26, https://www.9marks.org/article/yes-the-ordinances-really-do-change-people/, 4 paragraph(s), 247 words, from the paragraph beginning «In baptism, we see the gospel…» to the one ending «…he will return (1 Cor. 11:23–26).» \`[verified: page]\` (speaker per the page's byline):
  > In baptism, we see the gospel represented in the immersion of the repentant sinner.

**C5 count and independence.** 1 person.

## Method v2 additions · 1 Corinthians 12:13 and John the Baptist's words (Matt 3:11) · Schreiner on baptism in the Spirit

**Argument · Schreiner reads 1 Cor 12:13 in light of John the Baptist's words.**
- **Thomas Schreiner**, the video title names Dr. Thomas Schreiner as the session's speaker (see https://example.org/about); standing: to verify before publishing. Work: «The Waters That Divide [Session 3]»; show/channel: YouTube; ; https://www.youtube.com/watch?v=IWhoZjKfXis&t=32s; minutes 0:32–4:33 (segment boundaries). \`[verified: own transcription, whisper large-v3-turbo, 2026-11-08]\`
  > The common experience of baptism is communicated in 1 Corinthians 12, verse 13.

**Count and independence:** 1 person.

## Method v2 additions · codex-murr-disciple-command · baptism entries 6, 7, 8, 9, 29

**Argument · Murr reads the baptism command as requiring discipleship.**
- **Carlos Andres Murr**, named in the source title; standing: to verify before publishing. Work: «Sobre el Bautismo, sobre la Biblia»; show/channel: Carlos Andres Murr; upload date 2026-01-26 (saved uploader metadata); https://www.youtube.com/watch?v=cTuYpH8AzSw&t=1252s; minute range 20:52–21:24. Edition: original Spanish.
  > ¿Por qué no darse cuenta que el bautismo es una ordenanza de Jesús? Jesús dijo vayan y hagan discípulos.

**Count and independence:** 1 person.

## Method v2 additions · Catholic Baptism entry 18 · codex-horn-eph425

**Argument · Horn reads Eph 4:25.**
- **Trent Horn**, speaker of the episode; standing: to verify before publishing. Work: «Rebutting Gavin Ortlund»; show/channel: Catholic Answers; 2026-11-01; https://www.catholic.com/audio/cot/example; minute range 11:56–12:29.
  > Paul says to put away falsehood.

## Method v2 additions · fixtures of dates

**Argument · Dates that are not the retrieval date.**
- **Tim Staples**, named author in the page’s byline, «What Does the Bible Say About Confirmation?», Catholic Answers, 5/30/2023; public online article/transcript edition retrieved 2026-11-08, https://www.catholic.com/magazine/online-edition/where-is-confirmation-in-the-bible. Locator: whole paragraph beginning “Yet the Bible knows nothing of this”; 90 words. \`[verified: page]\`:
  > Yet the Bible knows nothing of this.
- **Scott Hahn**, named as the commentator in the page title, «Knowing God: Scott Hahn Reflects on the Seventh Sunday of Easter», St. Paul Center, publication date not established on the page examined; public online edition retrieved 2026-11-08, https://stpaulcenter.com/posts/knowing-god-scott-hahn-reflects-on-the-seventh-sunday-of-easter. Locator: paragraphs beginning «Jesus has been taken up». \`[verified: page]\`:
  > Jesus has been taken up into heaven.
- **James White**, named by the page’s byline; standing: to verify before publishing. Work: «A Brief Rebuttal of Baptismal Regeneration»; outlet: Alpha and Omega Ministries; page date May 8, 1998, also displaying August 17, 2018 without an explanation of that second date; https://www.aomin.org/aoblog/reformed-apologetics/a-brief-rebuttal-of-baptismal-regeneration/. Edition: author’s English online article reopened 2026-11-09.
  > A tremendously large number of interpretations.
`;

const dir = fs.mkdtempSync(path.join(os.tmpdir(), "apologists-md-"));
const file = path.join(dir, "fixture.md");
fs.writeFileSync(file, FIXTURE);
const { sections, issues } = parseApologists(file);
fs.rmSync(dir, { recursive: true });

assert.deepEqual(issues, []);
assert.equal(sections.length, 5);
const quotes = sections.flatMap((s) => s.arguments.flatMap((a) => a.quotes));
assert.equal(quotes.length, 7);

assert.equal(sections[0].arguments[0].title, "Baptism shows the sinner washed and united to Christ");
assert.ok(sections[0].verses.length > 0);

const [article, schreiner, murr, horn] = quotes;
assert.equal(article.locator, "4 párrafos: del párrafo que empieza «In baptism, we see the gospel…» al que termina «…he will return (1 Cor. 11:23–26).»");

assert.equal(sections[1].arguments[0].title, "Schreiner reads 1 Cor 12:13 in light of John the Baptist's words");
assert.equal(schreiner.work, "The Waters That Divide [Session 3]");
assert.equal(schreiner.outlet, "YouTube");
assert.equal(schreiner.date, "Sin fecha indicada");
assert.equal(schreiner.url, "https://www.youtube.com/watch?v=IWhoZjKfXis&t=32s");
assert.equal(schreiner.locator, "Minutos 0:32 a 4:33");
assert.equal(schreiner.language, "en");

assert.equal(murr.speaker, "Carlos Andrés Murr");
assert.equal(murr.date, "26 de enero de 2026");
assert.equal(murr.locator, "Minutos 20:52 a 21:24");
assert.equal(murr.language, "es");
assert.deepEqual(sections[2].entries, [6, 7, 8, 9, 29]);

assert.deepEqual(sections[3].entries, [18]);
assert.equal(horn.date, "1 de noviembre de 2026");
assert.equal(horn.locator, "Minutos 11:56 a 12:29");

const [staples, hahn, white] = quotes.slice(4);
assert.equal(staples.date, "30 de mayo de 2023");
assert.equal(staples.outlet, "Catholic Answers");
assert.equal(staples.locator, "Párrafo que empieza «Yet the Bible knows nothing of this»");
assert.equal(hahn.date, "Sin fecha indicada");
assert.equal(hahn.outlet, "St. Paul Center");
assert.equal(white.date, "8 de mayo de 1998");
assert.equal(white.outlet, "Alpha and Omega Ministries");

console.log("apologists-md: audio headers, C5 lead-ins, entry headings, name aliases and quote language read as expected");
