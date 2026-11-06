import type { CorpusSearch, Passage } from "@/content/ai-search/types";

const PASSAGES: Passage[] = [
  {
    doctrine: "eucharist",
    translatedByAi: false,
    refs: [],
    author: null,
    year: null,
    father: null,
    bible: {
      book: "John",
      chapter: 6,
      verse: 53,
      verseEnd: null,
      translationId: "rv1909",
    },
    href: null,
    key: "bible:rv1909:John.6.53",
    collection: "bible",
    speaker: "shared",
    lang: "es",
    title: "Juan 6:53",
    who: "Juan",
    locatorLabel: "Juan 6:53",
    editionLabel: "Reina-Valera 1909. Dominio público.",
    licence: "public-domain",
    maxQuoteWords: 80,
    text: "Y Jesús les dijo: De cierto, de cierto os digo: Si no comiereis la carne del Hijo del hombre, y bebiereis su sangre, no tendréis vida en vosotros.",
  },
  {
    doctrine: "eucharist",
    translatedByAi: false,
    refs: [],
    author: null,
    year: null,
    father: null,
    bible: {
      book: "John",
      chapter: 6,
      verse: 53,
      verseEnd: null,
      translationId: "bsb",
    },
    href: null,
    key: "bible:bsb:John.6.53",
    collection: "bible",
    speaker: "shared",
    lang: "en",
    title: "John 6:53",
    who: "John",
    locatorLabel: "John 6:53",
    editionLabel: "Berean Standard Bible. Dominio público.",
    licence: "cc0-translation",
    maxQuoteWords: 80,
    text: "So Jesus said to them, “Truly, truly, I tell you, unless you eat the flesh and drink the blood of the Son of Man, you have no life in you.",
  },
  {
    doctrine: "eucharist",
    translatedByAi: false,
    refs: [],
    author: null,
    year: 100,
    father: {
      workId: "didache",
      editionId: "lightfoot-harmer-1891",
      locator: "9",
    },
    bible: null,
    href: null,
    key: "fathers:didache:lightfoot-harmer-1891:9:0",
    collection: "fathers",
    speaker: "shared",
    lang: "en",
    title: "Didajé",
    who: "Didajé",
    locatorLabel: "Didajé 9",
    editionLabel: "Lightfoot y Harmer, 1891. Dominio público.",
    licence: "public-domain",
    maxQuoteWords: 80,
    text: "But as touching the eucharistic thanksgiving give ye thanks thus. First, as regards the cup: We give Thee thanks, O our Father, for the holy vine of Thy son David, which Thou madest known unto us through Thy Son Jesus; Thine is the glory for ever and ever. Then as regards the broken bread: We give Thee thanks, O our Father, for the life and knowledge which Thou didst make known unto us through Thy Son Jesus; Thine is the glory for ever and ever. As this broken bread was scattered upon the mountains and being gathered together became one, so may Thy Church be gathered together from the ends of the earth into Thy kingdom; for Thine is the glory and the power through Jesus Christ for ever and ever. But let no one eat or drink of this eucharistic thanksgiving, but they that have been baptized into the name of the Lord; for concerning this also the Lord hath said: Give not that which is holy to the dogs.",
  },
  {
    doctrine: "eucharist",
    translatedByAi: false,
    refs: [],
    author: "ignatius-of-antioch",
    year: 110,
    father: {
      workId: "ignatius-smyrnaeans",
      editionId: "lightfoot-1889",
      locator: "6.2",
    },
    bible: null,
    href: null,
    key: "fathers:ignatius-smyrnaeans:lightfoot-1889:6.2:0",
    collection: "fathers",
    speaker: "shared",
    lang: "en",
    title: "A los esmirniotas",
    who: "Ignacio de Antioquía",
    locatorLabel: "A los esmirniotas 6.2",
    editionLabel: "J. B. Lightfoot, 1889. Dominio público.",
    licence: "public-domain",
    maxQuoteWords: 80,
    text: "But mark ye those who hold strange doctrine touching the grace of Jesus Christ which came to us, how that they are contrary to the mind of God. They have no care for love, none for the widow, none for the orphan, none for the afflicted, none for the prisoner, none for the hungry or thirsty. They abstain from eucharist (thanksgiving) and prayer, because they allow not that the eucharist is the flesh of our Saviour Jesus Christ, which flesh suffered for our sins, and which the Father of His goodness raised up.",
  },
  {
    doctrine: "eucharist",
    translatedByAi: false,
    refs: [],
    author: "justin-martyr",
    year: 155,
    father: {
      workId: "justin-first-apology",
      editionId: "dods-1885",
      locator: "66",
    },
    bible: null,
    href: null,
    key: "fathers:justin-first-apology:dods-1885:66:0",
    collection: "fathers",
    speaker: "shared",
    lang: "en",
    title: "Primera Apología",
    who: "Justino Mártir",
    locatorLabel: "1 Apol. 66",
    editionLabel: "M. Dods, 1885. Dominio público.",
    licence: "public-domain",
    maxQuoteWords: 80,
    text: "And this food is called among us Εὐχαριστία [the Eucharist], of which no one is allowed to partake but the man who believes that the things which we teach are true, and who has been washed with the washing that is for the remission of sins, and unto regeneration, and who is so living as Christ has enjoined. For not as common bread and common drink do we receive these; but in like manner as Jesus Christ our Saviour, having been made flesh by the Word of God, had both flesh and blood for our salvation, so likewise have we been taught that the food which is blessed by the prayer of His word, and from which our blood and flesh by transmutation are nourished, is the flesh and blood of that Jesus who was made flesh. For the apostles, in the memoirs composed by them, which are called Gospels, have thus delivered unto us what was enjoined upon them; that Jesus took bread, and when He had given thanks, said, “This do ye in remembrance of Me, this is My body;” and that, after the same manner, having taken the cup and given thanks, He said, “This is My blood;” and gave it to them alone. Which the wicked devils have imitated in the mysteries of Mithras, commanding the same thing to be done. For, that bread and a cup of water are placed with certain incantations in the mystic rites of one who is being initiated, you either know or can learn.",
  },
  {
    doctrine: "eucharist",
    translatedByAi: false,
    refs: [],
    author: null,
    year: null,
    father: null,
    bible: null,
    href: "/es/doctrines/eucharist/catholic",
    key: "tradition:eucharist:catholic:definition",
    collection: "tradition",
    speaker: "catholic",
    lang: "es",
    title: "Definición de la Eucaristía",
    who: "Iglesia católica",
    locatorLabel: "Definición de la Eucaristía",
    editionLabel: "Texto de Doctrina sobre la tradición católica.",
    licence: "site-authored",
    maxQuoteWords: 80,
    text: "Para la Iglesia católica, la Eucaristía es el sacrificio del cuerpo y la sangre de Cristo, instituido en la última Cena para hacer presente el sacrificio de la cruz hasta que él vuelva, y a la vez el banquete en el que se recibe a Cristo mismo.",
  },
];

const lower = (text: string) => text.toLowerCase();

function score(passage: Passage, terms: string[]): number {
  const text = lower(`${passage.text} ${passage.who} ${passage.title}`);
  return terms.reduce((total, term) => total + (term && text.includes(lower(term)) ? 1 : 0), 0);
}

function ranked(terms: string[], filter: (passage: Passage) => boolean): (Passage & { rank: number })[] {
  return PASSAGES.filter(filter).map((passage, index) => ({
    ...passage,
    rank: terms.length ? score(passage, terms) : PASSAGES.length - index,
  }));
}

// TODO(RET): replace this stub with the Supabase and fixture search.
const fixtureSearch: CorpusSearch = {
  id: "fixture",
  async searchPassages(query) {
    const terms = [...query.termsEn, ...query.termsEs, ...query.phrasesEn, ...query.phrasesEs];
    return ranked(terms, (passage) => query.collections.length === 0 || query.collections.includes(passage.collection))
      .sort((a, b) => b.rank - a.rank)
      .slice(0, query.limit);
  },
  async searchVerses(query) {
    return ranked(query.terms, (passage) => passage.collection === "bible" && passage.lang === query.lang).slice(
      0,
      query.limit,
    );
  },
  async lookupVerses(refs, translationId) {
    return PASSAGES.filter(
      (passage) =>
        passage.bible?.translationId === translationId &&
        refs.some((ref) => ref === `${passage.bible?.book}.${passage.bible?.chapter}.${passage.bible?.verse}`),
    );
  },
  async traditionPassages(doctrine) {
    return PASSAGES.filter((passage) => passage.collection === "tradition" && passage.doctrine === doctrine);
  },
  async authors() {
    return [
      {
        id: "ignatius-of-antioch",
        name: "Ignacio de Antioquía",
        works: [{ id: "ignatius-smyrnaeans", title: "A los esmirniotas" }],
      },
      {
        id: "justin-martyr",
        name: "Justino Mártir",
        works: [{ id: "justin-first-apology", title: "Primera Apología" }],
      },
    ];
  },
  async corpusVersion() {
    return "fixture";
  },
};

export function getCorpusSearch(): CorpusSearch {
  return fixtureSearch;
}
