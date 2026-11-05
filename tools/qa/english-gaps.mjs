const base = "http://localhost:3801";
const pages = [
  "/en",
  "/en/history/timeline",
  "/en/history/fathers",
  "/en/history/fathers/clement-of-rome",
  "/en/history/councils",
  "/en/history/councils/elvira",
  "/en/history/currents/docetism",
  "/en/history/divisions",
  "/en/history/divisions/chalcedon-451",
  "/en/history/reformation",
  "/en/history/reformation/waldensians",
  "/en/history/works/1-clement",
  "/en/bible/john/6",
  "/en/bible/john/6/53",
  "/en/bible/tobit/1",
];
const es =
  /\b(el|la|los|las|del|que|una|un|con|para|por|sus|se|como|más|esta|este|desde|entre|sobre|también|fue|era|según|obra|padre|concilio|años?)\b|[ñ¿¡áéíóú]/i;
for (const p of pages) {
  const res = await fetch(base + p);
  if (res.status !== 200) {
    console.log(p, res.status);
    continue;
  }
  let html = await res.text();
  html = html.replace(/<script[\s\S]*?<\/script>/g, "").replace(/<style[\s\S]*?<\/style>/g, "");
  const texts = [...html.matchAll(/>([^<>]{3,})</g)]
    .map((m) => m[1].replace(/&[a-z#0-9]+;/g, " ").trim())
    .filter(Boolean);
  const hits = [...new Set(texts.filter((t) => es.test(t) && !/^\d/.test(t)))];
  console.log(p, "text nodes", texts.length, "spanish-looking", hits.length);
  for (const h of hits.slice(0, 6)) console.log("    ", h.slice(0, 110));
}
