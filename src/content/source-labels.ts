import type { Locale } from "@/lib/locale";

const dates: Record<string, Record<Locale, string>> = {
  "c. 396–397 (Books I–III.35)": { es: "c. 396–397 (libros I–III.35)", en: "c. 396–397 (Books I–III.35)" },
  "c. 4th-5th c.; textus receptus later": {
    es: "c. siglos IV–V; texto recibido posterior",
    en: "c. 4th–5th centuries; received text later",
  },
  "c. 4th c.": { es: "c. siglo IV", en: "c. 4th century" },
  "1830 (approved by the Russian Holy Synod)": {
    es: "1830 (aprobado por el Santo Sínodo ruso)",
    en: "1830 (approved by the Russian Holy Synod)",
  },
  "1640; approved 1642-1643": { es: "1640; aprobado en 1642–1643", en: "1640; approved 1642–1643" },
};

const englishTitles: Record<string, string> = {
  "lateran-4": "Fourth Lateran Council",
  vienne: "Council of Vienne, Fidei catholicae",
  "florence-exsultate": "Council of Florence, Exsultate Deo",
  "florence-laetentur": "Council of Florence, Laetentur caeli",
  treatise: "Treatise on the Power and Primacy of the Pope",
  pft: "Professio fidei Tridentina",
  "roman-catechism": "Roman Catechism",
  wsc: "Westminster Shorter Catechism",
  "oros-1755": "Oros of Constantinople (1755/56)",
  "enc-1848": "Encyclical of the Eastern Patriarchs of 1848",
  "new-hampshire": "New Hampshire Confession (1853)",
  "dei-filius": "First Vatican Council, Dei Filius",
  "pastor-aeternus": "First Vatican Council, Pastor aeternus",
  providentissimus: "Leo XIII, Providentissimus Deus",
  "enc-1895": "Patriarchal and Synodal Encyclical of 1895",
  "divino-afflante": "Pius XII, Divino afflante Spiritu",
  "sempiternus-rex": "Pius XII, Sempiternus Rex Christus",
  sc: "Second Vatican Council, Sacrosanctum Concilium",
  lg: "Second Vatican Council, Lumen gentium",
  oe: "Second Vatican Council, Orientalium Ecclesiarum",
  ur: "Second Vatican Council, Unitatis redintegratio",
  "dei-verbum": "Second Vatican Council, Dei Verbum",
  dh: "Second Vatican Council, Dignitatis humanae",
  gs: "Second Vatican Council, Gaudium et spes",
  "mysterium-fidei": "Paul VI, Mysterium fidei",
  "mysterium-ecclesiae": "CDF, Mysterium Ecclesiae",
  cic: "Code of Canon Law",
  "jp-audience-1989": "John Paul II, general audience of 13 September 1989",
  "pf-1989": "Professio fidei (1989)",
  "donum-veritatis": "CDF, Donum veritatis",
  "jp-audience-1991": "John Paul II, general audience of 30 January 1991",
  "fidei-depositum": "John Paul II, Fidei depositum",
  uus: "John Paul II, Ut unum sint",
  "cdf-primado": "CDF, The Primacy of the Successor of Peter in the Mystery of the Church",
  "cdf-note-1998": "CDF, Doctrinal Commentary on the Concluding Formula of the Professio fidei",
  "pcpcu-2001":
    "PCPCU, Guidelines for Admission to the Eucharist between the Chaldean Church and the Assyrian Church of the East",
  "sacramentum-caritatis": "Benedict XVI, Sacramentum caritatis",
  "verbum-domini": "Benedict XVI, Verbum Domini",
  "gestis-verbisque": "Dicastery for the Doctrine of the Faith, Gestis verbisque",
  "ag-sft": "Assemblies of God, Statement of Fundamental Truths",
  trullo: "Quinisext Council (Trullo)",
  misal: "Roman Missal, Eucharistic Prayer I (Roman Canon)",
  ogmr: "General Instruction of the Roman Missal",
  "constantinople-1": "First Council of Constantinople",
};

export function sourceDate(label: string, locale: Locale): string {
  return (dates[label]?.[locale] ?? label).replace(/(\d)-(\d)/g, "$1–$2");
}

export function sourceTitle(id: string, title: string, locale: Locale): string {
  return locale === "en" ? (englishTitles[id] ?? title) : title;
}
