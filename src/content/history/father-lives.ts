import type { FatherLife } from "@/content/model/history";

export const fatherLives: Record<string, FatherLife> = {
  "clement-of-rome": {
    death: {
      kind: "estimated",
      year: 99,
      text: { es: "según la tradición, 99", en: "by tradition, 99" },
      short: { es: "99 (tradición)", en: "99 (tradition)" },
    },
  },
  didache: {
    composed: {
      start: 50,
      end: 150,
      text: {
        es: "segunda mitad del siglo I a primera mitad del siglo II",
        en: "second half of the 1st century to the first half of the 2nd century",
      },
      short: { es: "c. 50–150", en: "c. 50–150" },
    },
  },
  "ignatius-of-antioch": {
    death: {
      kind: "estimated",
      year: 108,
      text: {
        es: "107 o 108 (se discute)",
        en: "107 or 108 (disputed)",
      },
      short: { es: "107 o 108", en: "107 or 108" },
    },
  },
  "papias-of-hierapolis": {
    active: {
      start: 100,
      end: 150,
      text: { es: "c. 100–150", en: "c. 100–150" },
      short: { es: "c. 100–150", en: "c. 100–150" },
    },
  },
  "epistle-of-barnabas": {
    composed: {
      start: 70,
      end: 132,
      text: {
        es: "después del año 70; a fines del siglo I o comienzos del II",
        en: "after 70; late 1st or early 2nd century",
      },
      short: { es: "c. 70–132", en: "c. 70–132" },
    },
  },
  "shepherd-of-hermas": {
    composed: {
      start: 100,
      end: 150,
      text: {
        es: "entre fines del siglo I y mediados del II",
        en: "between the end of the 1st and the middle of the 2nd century",
      },
      short: { es: "c. 100–150", en: "c. 100–150" },
    },
  },
  "epistle-to-diognetus": {
    composed: {
      start: 150,
      end: 200,
      text: { es: "en términos amplios, c. 150–200", en: "broadly c. 150–200" },
      short: { es: "c. 150–200", en: "c. 150–200" },
    },
  },
  "polycarp-of-smyrna": {
    birth: {
      kind: "estimated",
      year: 69,
      text: { es: "no después de c. 69/70 (deducido)", en: "no later than c. 69/70 (inferred)" },
      short: { es: "c. 69/70", en: "c. 69/70" },
    },
    death: {
      kind: "either",
      year: 155,
      yearEnd: 156,
      text: { es: "155 o 156", en: "155 or 156" },
      short: { es: "155 o 156", en: "155 or 156" },
    },
  },
  "justin-martyr": {
    birth: {
      kind: "estimated",
      year: 100,
      text: { es: "c. 100", en: "c. 100" },
      short: { es: "c. 100", en: "c. 100" },
    },
    death: {
      kind: "estimated",
      year: 165,
      text: {
        es: "c. 165",
        en: "c. 165",
      },
      short: { es: "c. 165", en: "c. 165" },
    },
  },
  "melito-of-sardis": {
    death: {
      kind: "estimated",
      year: 180,
      text: { es: "c. 180; ya había muerto hacia c. 190", en: "c. 180; dead by c. 190" },
      short: { es: "c. 180", en: "c. 180" },
    },
  },
  "theophilus-of-antioch": {
    death: {
      kind: "between",
      year: 183,
      yearEnd: 185,
      text: { es: "c. 183–185 (reconstruida a partir de Eusebio)", en: "c. 183–185 (reconstructed from Eusebius)" },
      short: { es: "c. 183–185", en: "c. 183–185" },
    },
  },
  "irenaeus-of-lyon": {
    birth: {
      kind: "between",
      year: 130,
      yearEnd: 149,
      text: { es: "en la década de 130 o la de 140 (deducido)", en: "in the 130s or 140s (inferred)" },
      short: { es: "c. 130–149", en: "c. 130–149" },
    },
    death: {
      kind: "estimated",
      year: 202,
      text: { es: "c. 202 (tradicional, aproximada)", en: "c. 202 (traditional, approximate)" },
      short: { es: "c. 202", en: "c. 202" },
    },
  },
  "clement-of-alexandria": {
    birth: {
      kind: "estimated",
      year: 150,
      text: { es: "c. 150", en: "c. 150" },
      short: { es: "c. 150", en: "c. 150" },
    },
    death: {
      kind: "estimated",
      year: 215,
      text: { es: "antes de c. 215/216; vivía después de 202", en: "by c. 215/216; alive after 202" },
      short: { es: "c. 215", en: "c. 215" },
    },
  },
  tertullian: {
    birth: {
      kind: "between",
      year: 155,
      yearEnd: 160,
      text: { es: "c. 155–160", en: "c. 155–160" },
      short: { es: "c. 155–160", en: "c. 155–160" },
    },
    death: {
      kind: "after",
      year: 220,
      text: { es: "se desconoce; posterior a c. 220", en: "unknown; after c. 220" },
      short: { es: "después de c. 220", en: "after c. 220" },
    },
  },
  "hippolytus-of-rome": {
    death: {
      kind: "either",
      year: 235,
      yearEnd: 236,
      text: { es: "c. 235/236, tras su destierro en 235", en: "c. 235/236, after his exile in 235" },
      short: { es: "c. 235/236", en: "c. 235/236" },
    },
  },
  origen: {
    birth: {
      kind: "estimated",
      year: 185,
      text: { es: "c. 185", en: "c. 185" },
      short: { es: "c. 185", en: "c. 185" },
    },
    death: {
      kind: "either",
      year: 253,
      yearEnd: 254,
      text: { es: "c. 253–254", en: "c. 253–254" },
      short: { es: "c. 253–254", en: "c. 253–254" },
    },
  },
  "cyprian-of-carthage": {
    birth: {
      kind: "between",
      year: 200,
      yearEnd: 210,
      text: { es: "c. 200–210", en: "c. 200–210" },
      short: { es: "c. 200–210", en: "c. 200–210" },
    },
    death: {
      kind: "attested",
      year: 258,
      text: { es: "14 sep 258", en: "14 Sep 258" },
      short: { es: "258", en: "258" },
    },
  },
  "dionysius-of-alexandria": {
    death: {
      kind: "either",
      year: 264,
      yearEnd: 265,
      text: { es: "264 o 265", en: "264 or 265" },
      short: { es: "264 o 265", en: "264 or 265" },
    },
  },
  "methodius-of-olympus": {
    death: {
      kind: "estimated",
      year: 311,
      text: { es: "según la tradición, c. 311–312", en: "by tradition, c. 311–312" },
      short: { es: "c. 311–312 (tradición)", en: "c. 311–312 (tradition)" },
    },
  },
  lactantius: {
    birth: {
      kind: "estimated",
      year: 250,
      text: { es: "c. 250", en: "c. 250" },
      short: { es: "c. 250", en: "c. 250" },
    },
    death: {
      kind: "after",
      year: 317,
      text: { es: "se desconoce; vivía después de 317", en: "unknown; alive after 317" },
      short: { es: "después de 317", en: "after 317" },
    },
  },
  "eusebius-of-caesarea": {
    birth: {
      kind: "between",
      year: 260,
      yearEnd: 265,
      text: { es: "c. 260–265", en: "c. 260–265" },
      short: { es: "c. 260–265", en: "c. 260–265" },
    },
    death: {
      kind: "either",
      year: 339,
      yearEnd: 340,
      text: { es: "339 o 340", en: "339 or 340" },
      short: { es: "339 o 340", en: "339 or 340" },
    },
  },
  aphrahat: {
    active: {
      start: 337,
      end: 345,
      text: { es: "337–345", en: "337–345" },
      short: { es: "337–345", en: "337–345" },
    },
  },
  "hilary-of-poitiers": {
    birth: {
      kind: "between",
      year: 310,
      yearEnd: 320,
      text: { es: "entre c. 310 y 320", en: "between c. 310 and 320" },
      short: { es: "c. 310–320", en: "c. 310–320" },
    },
    death: {
      kind: "either",
      year: 367,
      yearEnd: 368,
      text: { es: "367 o 368", en: "367 or 368" },
      short: { es: "367 o 368", en: "367 or 368" },
    },
  },
  "athanasius-of-alexandria": {
    birth: {
      kind: "between",
      year: 295,
      yearEnd: 300,
      text: { es: "c. 295–300", en: "c. 295–300" },
      short: { es: "c. 295–300", en: "c. 295–300" },
    },
    death: { kind: "attested", year: 373, text: { es: "2 may 373", en: "2 May 373" }, short: { es: "373", en: "373" } },
  },
  "basil-of-caesarea": {
    birth: {
      kind: "between",
      year: 329,
      yearEnd: 330,
      text: { es: "c. 329/330", en: "c. 329/330" },
      short: { es: "c. 329/330", en: "c. 329/330" },
    },
    death: { kind: "attested", year: 379, text: { es: "1 ene 379", en: "1 Jan 379" }, short: { es: "379", en: "379" } },
  },
  "cyril-of-jerusalem": {
    birth: {
      kind: "estimated",
      year: 315,
      text: { es: "c. 315", en: "c. 315" },
      short: { es: "c. 315", en: "c. 315" },
    },
    death: { kind: "attested", year: 386, text: { es: "386", en: "386" }, short: { es: "386", en: "386" } },
  },
  "gregory-of-nyssa": {
    birth: {
      kind: "estimated",
      year: 335,
      text: { es: "c. 335", en: "c. 335" },
      short: { es: "c. 335", en: "c. 335" },
    },
    death: {
      kind: "after",
      year: 394,
      text: { es: "se desconoce; vivía en 394", en: "unknown; still alive in 394" },
      short: { es: "después de 394", en: "after 394" },
    },
  },
  "ambrose-of-milan": {
    birth: {
      kind: "between",
      year: 337,
      yearEnd: 340,
      text: { es: "c. 337–340", en: "c. 337–340" },
      short: { es: "c. 337–340", en: "c. 337–340" },
    },
    death: { kind: "attested", year: 397, text: { es: "4 abr 397", en: "4 Apr 397" }, short: { es: "397", en: "397" } },
  },
  "optatus-of-milevis": {
    active: {
      start: 365,
      end: 385,
      text: {
        es: "de mediados de la década de 360 hasta al menos 384/385",
        en: "from the mid-360s to at least 384/385",
      },
      short: { es: "c. 365–385", en: "c. 365–385" },
    },
  },
  "epiphanius-of-salamis": {
    birth: {
      kind: "between",
      year: 315,
      yearEnd: 320,
      text: { es: "entre 315 y 320", en: "between 315 and 320" },
      short: { es: "315–320", en: "315–320" },
    },
    death: {
      kind: "attested",
      year: 403,
      text: { es: "12 may 403", en: "12 May 403" },
      short: { es: "403", en: "403" },
    },
  },
  "john-chrysostom": {
    birth: {
      kind: "between",
      year: 347,
      yearEnd: 354,
      text: { es: "entre 347 y 354 (se discute)", en: "between 347 and 354 (disputed)" },
      short: { es: "347–354", en: "347–354" },
    },
    death: {
      kind: "attested",
      year: 407,
      text: { es: "14 sep 407", en: "14 Sep 407" },
      short: { es: "407", en: "407" },
    },
  },
  "rufinus-of-aquileia": {
    birth: {
      kind: "between",
      year: 344,
      yearEnd: 345,
      text: { es: "344/345", en: "344/345" },
      short: { es: "344/345", en: "344/345" },
    },
    death: {
      kind: "either",
      year: 410,
      yearEnd: 411,
      text: { es: "410 o 411", en: "410 or 411" },
      short: { es: "410 o 411", en: "410 or 411" },
    },
  },
  jerome: {
    birth: {
      kind: "between",
      year: 342,
      yearEnd: 347,
      text: { es: "c. 342–347", en: "c. 342–347" },
      short: { es: "c. 342–347", en: "c. 342–347" },
    },
    death: {
      kind: "either",
      year: 419,
      yearEnd: 420,
      text: { es: "419 o 420", en: "419 or 420" },
      short: { es: "419 o 420", en: "419 or 420" },
    },
  },
  "augustine-of-hippo": {
    birth: {
      kind: "attested",
      year: 354,
      text: { es: "13 nov 354", en: "13 Nov 354" },
      short: { es: "354", en: "354" },
    },
    death: {
      kind: "attested",
      year: 430,
      text: { es: "28 ago 430", en: "28 Aug 430" },
      short: { es: "430", en: "430" },
    },
  },
  "john-cassian": {
    birth: {
      kind: "estimated",
      year: 360,
      text: { es: "c. 360", en: "c. 360" },
      short: { es: "c. 360", en: "c. 360" },
    },
    death: {
      kind: "estimated",
      year: 435,
      text: {
        es: "c. 435",
        en: "c. 435",
      },
      short: { es: "c. 435", en: "c. 435" },
    },
  },
  "cyril-of-alexandria": {
    birth: {
      kind: "estimated",
      year: 375,
      text: {
        es: "fines del siglo IV; por convención, c. 375/376",
        en: "later 4th century; conventionally c. 375/376",
      },
      short: { es: "c. 375/376", en: "c. 375/376" },
    },
    death: {
      kind: "attested",
      year: 444,
      text: { es: "27 jun 444", en: "27 Jun 444" },
      short: { es: "444", en: "444" },
    },
  },
  "vincent-of-lerins": {
    death: {
      kind: "estimated",
      year: 450,
      text: { es: "se desconoce; antes del 28 jul 450", en: "unknown; before 28 Jul 450" },
      short: { es: "antes de 450", en: "before 450" },
    },
  },
  "peter-chrysologus": {
    death: {
      kind: "estimated",
      year: 450,
      text: { es: "c. 450", en: "c. 450" },
      short: { es: "c. 450", en: "c. 450" },
    },
  },
  "prosper-of-aquitaine": {
    birth: {
      kind: "between",
      year: 388,
      yearEnd: 390,
      text: { es: "c. 388–390", en: "c. 388–390" },
      short: { es: "c. 388–390", en: "c. 388–390" },
    },
    death: {
      kind: "after",
      year: 455,
      text: { es: "se desconoce; vivía en 455", en: "unknown; still alive in 455" },
      short: { es: "después de 455", en: "after 455" },
    },
  },
  "theodoret-of-cyrrhus": {
    birth: {
      kind: "estimated",
      year: 393,
      text: { es: "c. 393", en: "c. 393" },
      short: { es: "c. 393", en: "c. 393" },
    },
    death: {
      kind: "estimated",
      year: 460,
      text: {
        es: "se discute; c. 460 (propuestas: 457/458, 460 y 466)",
        en: "disputed; c. 460 (proposals: 457/458, 460 and 466)",
      },
      short: { es: "c. 460", en: "c. 460" },
    },
  },
  "leo-the-great": {
    death: {
      kind: "attested",
      year: 461,
      text: { es: "10 nov 461", en: "10 Nov 461" },
      short: { es: "461", en: "461" },
    },
  },
  "pseudo-dionysius": {
    composed: {
      start: 485,
      end: 528,
      text: {
        es: "después de 485 y antes de su primer uso claro (518–528)",
        en: "after 485 and before its first clear use (518–528)",
      },
      short: { es: "c. 485–528", en: "c. 485–528" },
    },
  },
  "caesarius-of-arles": {
    birth: {
      kind: "between",
      year: 469,
      yearEnd: 470,
      text: { es: "c. 469/470", en: "c. 469/470" },
      short: { es: "c. 469/470", en: "c. 469/470" },
    },
    death: {
      kind: "attested",
      year: 542,
      text: { es: "27 ago 542", en: "27 Aug 542" },
      short: { es: "542", en: "542" },
    },
  },
  "gregory-the-great": {
    birth: {
      kind: "estimated",
      year: 540,
      text: { es: "c. 540", en: "c. 540" },
      short: { es: "c. 540", en: "c. 540" },
    },
    death: {
      kind: "attested",
      year: 604,
      text: { es: "12 mar 604", en: "12 Mar 604" },
      short: { es: "604", en: "604" },
    },
  },
  "isidore-of-seville": {
    birth: {
      kind: "estimated",
      year: 560,
      text: { es: "c. 560", en: "c. 560" },
      short: { es: "c. 560", en: "c. 560" },
    },
    death: { kind: "attested", year: 636, text: { es: "4 abr 636", en: "4 Apr 636" }, short: { es: "636", en: "636" } },
  },
  "sophronius-of-jerusalem": {
    birth: {
      kind: "estimated",
      year: 560,
      text: { es: "c. 560", en: "c. 560" },
      short: { es: "c. 560", en: "c. 560" },
    },
    death: {
      kind: "attested",
      year: 638,
      text: { es: "11 mar 638", en: "11 Mar 638" },
      short: { es: "638", en: "638" },
    },
  },
  "maximus-the-confessor": {
    birth: {
      kind: "between",
      year: 579,
      yearEnd: 580,
      text: { es: "c. 579/580", en: "c. 579/580" },
      short: { es: "c. 579/580", en: "c. 579/580" },
    },
    death: {
      kind: "attested",
      year: 662,
      text: { es: "13 ago 662", en: "13 Aug 662" },
      short: { es: "662", en: "662" },
    },
  },
  "isaac-of-nineveh": {
    active: {
      start: 650,
      end: 700,
      text: {
        es: "segunda mitad del siglo VII (con seguridad hacia 676)",
        en: "second half of the 7th century (securely c. 676)",
      },
      short: { es: "c. 650–700", en: "c. 650–700" },
    },
  },
  "andrew-of-crete": {
    birth: {
      kind: "estimated",
      year: 660,
      text: { es: "c. 660", en: "c. 660" },
      short: { es: "c. 660", en: "c. 660" },
    },
    death: {
      kind: "estimated",
      year: 740,
      text: {
        es: "740, según las reconstrucciones modernas",
        en: "740, by modern reconstructions",
      },
      short: { es: "c. 740", en: "c. 740" },
    },
  },
  "germanus-of-constantinople": {
    birth: {
      kind: "between",
      year: 630,
      yearEnd: 668,
      text: { es: "entre c. 630 y 668 (se discute)", en: "between c. 630 and 668 (disputed)" },
      short: { es: "c. 630–668", en: "c. 630–668" },
    },
    death: {
      kind: "between",
      year: 733,
      yearEnd: 740,
      text: { es: "entre 733 y 740 (se discute)", en: "between 733 and 740 (disputed)" },
      short: { es: "733–740", en: "733–740" },
    },
  },
  "john-of-damascus": {
    birth: {
      kind: "estimated",
      year: 655,
      text: { es: "c. 655", en: "c. 655" },
      short: { es: "c. 655", en: "c. 655" },
    },
    death: {
      kind: "estimated",
      year: 745,
      text: { es: "c. 745", en: "c. 745" },
      short: { es: "c. 745", en: "c. 745" },
    },
  },
};
