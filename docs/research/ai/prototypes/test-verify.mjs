import { verifyQuote } from "./verify-quote.mjs";
const justin = `And this food is called among us Εὐχαριστία [the Eucharist], of which no one is allowed to partake but the man who believes that the things which we teach are true, and who has been washed with the washing that is for the remission of sins, and unto regeneration, and who is so living as Christ has enjoined. For not as common bread and common drink do we receive these; but in like manner as Jesus Christ our Saviour, having been made flesh by the Word of God, had both flesh and blood for our salvation, so likewise have we been taught that the food which is blessed by the prayer of His word, and from which our blood and flesh by transmutation are nourished, is the flesh and blood of that Jesus who was made flesh. For the apostles, in the memoirs composed by them, which are called Gospels, have thus delivered unto us what was enjoined upon them; that Jesus took bread, and when He had given thanks, said, “This do ye in remembrance of Me, this is My body;”`;
const es = "dijo: «Haced esto en memoria de Mí, esto es mi cuerpo»; y que";
const cases = [
  [justin, "For not as common bread and common drink do we receive these"],
  [justin, "for not as common bread and common drink do we receive these"],
  [justin, "called among us Εὐχαριστία the Eucharist, of which no one"],
  [justin, "the food which is blessed by the prayer of His word ... is the flesh and blood of that Jesus who was made flesh"],
  [justin, "\"This do ye in remembrance of Me, this is My body\""],
  [justin, "the food which is blessed is the flesh and blood of Jesus"],
  [justin, "is the real flesh and blood of that Jesus"],
  [es, "\"Haced esto en memoria de Mí, esto es mi cuerpo\""],
  [justin, "of that Jesus"],
];
for (const [p, q] of cases) {
  const r = verifyQuote(p, q);
  console.log(r.ok ? "PASS" : `FAIL(${r.reason})`, "|", q.slice(0, 60), r.ok ? "=> " + r.display.slice(0, 70) : "");
}
const big = justin.repeat(40); let t = performance.now(); for (let i = 0; i < 200; i++) verifyQuote(big, "is the flesh and blood of that Jesus who was made flesh"); console.log("ms per verify on", big.length, "chars:", ((performance.now() - t) / 200).toFixed(3));
