import { PGlite } from "@electric-sql/pglite";
import { readFileSync, readdirSync } from "node:fs";
const dir = process.argv[2];
const db = new PGlite();
await db.exec(`create role anon; create role authenticated; create role service_role;
create table public.translations (id text primary key);
create table public.verses (translation_id text, book text, chapter smallint, verse smallint, text text, primary key (translation_id, book, chapter, verse));
insert into public.translations values ('bsb'),('rv1909'),('dra');
insert into public.verses values ('bsb','John',6,53,'Jesus said to them, Truly, truly, I tell you, unless you eat the flesh of the Son of Man and drink His blood, you have no life in you.'),
 ('rv1909','John',6,53,'Y Jesús les dijo: De cierto, de cierto os digo: Si no comiereis la carne del Hijo del hombre, y bebiereis su sangre, no tendréis vida en vosotros.');`);
for (const f of readdirSync(dir).filter((f) => f.endsWith(".sql")).sort()) {
  try { await db.exec(readFileSync(`${dir}/${f}`, "utf8").replace(/notify pgrst.*;/g, "")); console.log("OK", f); }
  catch (e) { console.log("FAIL", f, e.message); process.exit(1); }
}
await db.exec(`insert into public.ai_passages (source_key, collection, speaker, lang, author, title, edition_label, licence, max_quote_words, text, corpus_version)
 values ('fathers:ign:6.2:0','fathers','shared','en','ignatius-of-antioch','To the Smyrnaeans','Lightfoot 1889','public-domain',80,'They abstain from eucharist and prayer, because they allow not that the eucharist is the flesh of our Saviour Jesus Christ','v1'),
 ('tradition:x','tradition','catholic','es',null,'CEC','CEC','short-quote',40,'En el santísimo sacramento de la Eucaristía están contenidos verdadera, real y sustancialmente el Cuerpo y la Sangre','v1');`);
const r1 = await db.query(`select source_key, rank from public.ai_search_passages(array['eucharist'], array['flesh of our Saviour'], array['eucaristía'], array['cuerpo y la sangre'], array['fathers','tradition'], null, null, null, null, 10, 2)`);
console.log(r1.rows);
const r2 = await db.query(`select book, verse, translation_id from public.ai_search_verses('es', array['carne','sangre'], array['hijo del hombre'], array['John'], 6::smallint, 5)`);
console.log(r2.rows);
const r3 = await db.query(`select public.ai_take(current_date,'chat','v1',2) a, public.ai_take(current_date,'chat','v1',2) b, public.ai_take(current_date,'chat','v1',2) c`);
console.log(r3.rows);
const r4 = await db.query(`select public.ai_reserve('2026-11-06','2026-11',6000,250000,4000000) a`);
await db.query(`select public.ai_settle('2026-11-06','2026-11',6000,2800)`);
console.log(r4.rows, (await db.query(`select * from public.ai_spend order by 1`)).rows);
await db.query(`select public.ai_cleanup()`);
console.log("cleanup ok");
