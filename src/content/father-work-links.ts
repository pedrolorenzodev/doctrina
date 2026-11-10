import { hasItemName, itemName, itemShortName } from "@/content/item-names";
import type { Locale } from "@/lib/locale";

const fatherOfWork: Record<string, string> = {
  "1-clement": "clement-of-rome",
  barnabas: "epistle-of-barnabas",
  didache: "didache",
  "epistle-diognetus": "epistle-to-diognetus",
  "ignatius-ephesians": "ignatius-of-antioch",
  "ignatius-magnesians": "ignatius-of-antioch",
  "ignatius-trallians": "ignatius-of-antioch",
  "ignatius-romans": "ignatius-of-antioch",
  "ignatius-philadelphians": "ignatius-of-antioch",
  "ignatius-smyrnaeans": "ignatius-of-antioch",
  "ignatius-polycarp": "ignatius-of-antioch",
  "papias-fragments": "papias-of-hierapolis",
  "polycarp-philippians": "polycarp-of-smyrna",
  "2-clement": "clement-of-rome",
  "martyrdom-polycarp": "polycarp-of-smyrna",
  "justin-first-apology": "justin-martyr",
  "justin-second-apology": "justin-martyr",
  "justin-dialogue-trypho": "justin-martyr",
  "irenaeus-against-heresies": "irenaeus-of-lyon",
  "irenaeus-demonstration": "irenaeus-of-lyon",
  "clement-alexandria-protrepticus": "clement-of-alexandria",
  "clement-alexandria-paedagogus": "clement-of-alexandria",
  "clement-alexandria-stromata": "clement-of-alexandria",
  "clement-alexandria-quis-dives-salvetur": "clement-of-alexandria",
  "tertullian-apologeticus": "tertullian",
  "tertullian-ad-nationes": "tertullian",
  "tertullian-de-praescriptione": "tertullian",
  "tertullian-against-marcion": "tertullian",
  "tertullian-against-praxeas": "tertullian",
  "tertullian-against-hermogenes": "tertullian",
  "tertullian-against-valentinians": "tertullian",
  "tertullian-scorpiace": "tertullian",
  "tertullian-de-baptismo": "tertullian",
  "tertullian-de-oratione": "tertullian",
  "tertullian-de-paenitentia": "tertullian",
  "tertullian-de-pudicitia": "tertullian",
  "tertullian-de-anima": "tertullian",
  "tertullian-de-carne-christi": "tertullian",
  "tertullian-de-resurrectione-carnis": "tertullian",
  "tertullian-de-testimonio-animae": "tertullian",
  "tertullian-de-spectaculis": "tertullian",
  "tertullian-de-idololatria": "tertullian",
  "tertullian-de-corona": "tertullian",
  "tertullian-de-fuga": "tertullian",
  "tertullian-de-patientia": "tertullian",
  "tertullian-de-ieiunio": "tertullian",
  "tertullian-de-monogamia": "tertullian",
  "tertullian-de-exhortatione-castitatis": "tertullian",
  "tertullian-de-cultu-feminarum": "tertullian",
  "tertullian-de-virginibus-velandis": "tertullian",
  "tertullian-ad-uxorem": "tertullian",
  "tertullian-ad-martyras": "tertullian",
  "tertullian-ad-scapulam": "tertullian",
  "tertullian-de-pallio": "tertullian",
  "hippolytus-refutation": "hippolytus-of-rome",
  "hippolytus-christ-antichrist": "hippolytus-of-rome",
  "hippolytus-against-noetus": "hippolytus-of-rome",
  "origen-against-celsus": "origen",
  "origen-de-principiis": "origen",
  "origen-letter-africanus": "origen",
  "origen-letter-gregory": "origen",
  "cyprian-de-unitate": "cyprian-of-carthage",
  "cyprian-de-lapsis": "cyprian-of-carthage",
  "cyprian-de-dominica-oratione": "cyprian-of-carthage",
  "cyprian-de-habitu-virginum": "cyprian-of-carthage",
  "cyprian-de-mortalitate": "cyprian-of-carthage",
  "cyprian-de-opere-et-eleemosynis": "cyprian-of-carthage",
  "cyprian-de-bono-patientiae": "cyprian-of-carthage",
  "cyprian-de-zelo-et-livore": "cyprian-of-carthage",
  "cyprian-ad-demetrianum": "cyprian-of-carthage",
  "cyprian-ad-fortunatum": "cyprian-of-carthage",
  "cyprian-quod-idola-dii-non-sint": "cyprian-of-carthage",
  "cyprian-testimonia-ad-quirinum": "cyprian-of-carthage",
  "cyprian-correspondence": "cyprian-of-carthage",
  "eusebius-church-history": "eusebius-of-caesarea",
  "athanasius-de-incarnatione": "athanasius-of-alexandria",
  "athanasius-against-arians": "athanasius-of-alexandria",
  "athanasius-life-antony": "athanasius-of-alexandria",
  "basil-de-spiritu-sancto": "basil-of-caesarea",
  "basil-hexaemeron": "basil-of-caesarea",
  "basil-letters": "basil-of-caesarea",
  "cyril-jerusalem-catechetical-lectures": "cyril-of-jerusalem",
  "gregory-nyssa-great-catechism": "gregory-of-nyssa",
  "gregory-nyssa-making-man": "gregory-of-nyssa",
  "gregory-nyssa-soul-resurrection": "gregory-of-nyssa",
  "gregory-nyssa-against-eunomius": "gregory-of-nyssa",
  "gregory-nyssa-answer-eunomius-second-book": "gregory-of-nyssa",
  "gregory-nyssa-virginity": "gregory-of-nyssa",
  "gregory-nyssa-baptism-christ": "gregory-of-nyssa",
  "gregory-nyssa-faith": "gregory-of-nyssa",
  "gregory-nyssa-holy-spirit": "gregory-of-nyssa",
  "gregory-nyssa-holy-trinity": "gregory-of-nyssa",
  "gregory-nyssa-not-three-gods": "gregory-of-nyssa",
  "gregory-nyssa-infants-early-deaths": "gregory-of-nyssa",
  "gregory-nyssa-meletius": "gregory-of-nyssa",
  "gregory-nyssa-pilgrimages": "gregory-of-nyssa",
  "gregory-nyssa-letters": "gregory-of-nyssa",
  "ambrose-de-mysteriis": "ambrose-of-milan",
  "ambrose-de-fide": "ambrose-of-milan",
  "ambrose-de-spiritu-sancto": "ambrose-of-milan",
  "ambrose-de-officiis": "ambrose-of-milan",
  "ambrose-de-paenitentia": "ambrose-of-milan",
  "ambrose-de-virginibus": "ambrose-of-milan",
  "ambrose-de-viduis": "ambrose-of-milan",
  "ambrose-de-excessu-fratris": "ambrose-of-milan",
  "ambrose-selected-letters": "ambrose-of-milan",
  "chrysostom-homilies-matthew": "john-chrysostom",
  "chrysostom-homilies-romans": "john-chrysostom",
  "chrysostom-homilies-1-corinthians": "john-chrysostom",
  "chrysostom-homilies-hebrews": "john-chrysostom",
  "augustine-confessions": "augustine-of-hippo",
  "augustine-city-of-god": "augustine-of-hippo",
  "augustine-tractates-john": "augustine-of-hippo",
  "augustine-de-doctrina-christiana": "augustine-of-hippo",
  "augustine-enchiridion": "augustine-of-hippo",
  "augustine-sermon-on-the-mount": "augustine-of-hippo",
  "augustine-de-catechizandis-rudibus": "augustine-of-hippo",
  "augustine-de-fide-et-symbolo": "augustine-of-hippo",
  "shepherd-hermas": "shepherd-of-hermas",
};

export type FatherWorkRow = { id: string; label: string };

export type WorkRef = { id: string; author: string; title: string };

const fatherOfAuthor: Record<string, string> = { hippolytus: "hippolytus-of-rome" };

function linkOf(work: WorkRef, locale: Locale): { fatherId: string; label: string } | null {
  const label = itemShortName(work.id, locale);
  const fatherId = fatherOfWork[work.id];
  if (fatherId) return { fatherId, label };
  if (work.author === "anonymous") return null;
  return { fatherId: fatherOfAuthor[work.author] ?? work.author, label };
}

export function worksByFather(works: WorkRef[], locale: Locale): Record<string, FatherWorkRow[]> {
  const grouped: Record<string, FatherWorkRow[]> = {};
  const order = Object.keys(fatherOfWork);
  const sorted = [...works].sort((a, b) => {
    const left = order.indexOf(a.id);
    const right = order.indexOf(b.id);
    return (left === -1 ? order.length : left) - (right === -1 ? order.length : right);
  });
  for (const work of sorted) {
    const link = linkOf(work, locale);
    if (link) (grouped[link.fatherId] ??= []).push({ id: work.id, label: link.label });
  }
  return grouped;
}

export function neighborsOfWork(
  id: string,
  works: WorkRef[],
  locale: Locale,
): { previous: FatherWorkRow | null; next: FatherWorkRow | null } {
  const work = works.find((entry) => entry.id === id);
  const link = work ? linkOf(work, locale) : null;
  if (!link) return { previous: null, next: null };
  const siblings = worksByFather(works, locale)[link.fatherId] ?? [];
  const index = siblings.findIndex((entry) => entry.id === id);
  return { previous: siblings[index - 1] ?? null, next: siblings[index + 1] ?? null };
}

export function workName(id: string, locale: Locale, unlisted?: string): string {
  return unlisted !== undefined && !hasItemName(id) ? unlisted : itemName(id, locale);
}
