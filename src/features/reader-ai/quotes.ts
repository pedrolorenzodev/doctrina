export type QuoteId =
  | "cyr224"
  | "cyr226"
  | "ddc"
  | "aug275"
  | "ccc1336"
  | "trent8"
  | "phil340"
  | "apol10"
  | "belg35"
  | "bfm7"
  | "matt26"
  | "cor11"
  | "john663";

export type Quote = {
  who: string;
  work: string;
  text: string;
  edition: string;
  father?: { workId: string; at: string; anchor: string; original: string };
  bible?: { book: string; chapter: number; verse: number };
};

export const quotes: Record<QuoteId, Quote> = {
  cyr224: {
    who: "Cirilo de Jerusalén",
    work: "Catequesis 22, 4",
    text: "Cristo, hablando en cierta ocasión con los judíos, dijo: Si no comen mi carne y beben mi sangre, no tienen vida en ustedes. Ellos, por no haber oído su palabra en sentido espiritual, se escandalizaron y se volvieron atrás, pensando que los invitaba a comer carne.",
    edition: "Traducción de Doctrina. Original en inglés: Church y Gifford, 1894. Dominio público.",
    father: {
      workId: "cyril-jerusalem-catechetical-lectures",
      at: "22.4",
      anchor: "22.4",
      original:
        "They not having heard His saying in a spiritual sense were offended, and went back, supposing that He was inviting them to eat flesh.",
    },
  },
  cyr226: {
    who: "Cirilo de Jerusalén",
    work: "Catequesis 22, 6",
    text: "Considera, pues, el pan y el vino no como simples elementos, porque son, según la declaración del Señor, el cuerpo y la sangre de Cristo; […] No juzgues la cosa por el gusto, sino por la fe.",
    edition: "Traducción de Doctrina. Original en inglés: Church y Gifford, 1894. Dominio público.",
    father: {
      workId: "cyril-jerusalem-catechetical-lectures",
      at: "22.6",
      anchor: "22.6",
      original: "Judge not the matter from the taste, but from faith",
    },
  },
  ddc: {
    who: "Agustín de Hipona",
    work: "Sobre la doctrina cristiana III, 16, 24",
    text: "“Si no comiereis la carne del Hijo del hombre y bebiereis su sangre, no tendréis vida en vosotros”, dice Cristo. Esto parece mandar un crimen o una maldad; es, por tanto, una figura, que manda que participemos de los padecimientos del Señor y que guardemos un recuerdo dulce y provechoso de que su carne fue herida y crucificada por nosotros.",
    edition: "Traducción de Doctrina. Original en inglés: J. F. Shaw, 1887. Dominio público.",
    father: {
      workId: "augustine-de-doctrina-christiana",
      at: "3.16",
      anchor: "3.16",
      original:
        "This seems to enjoin a crime or a vice; it is therefore a figure, enjoining that we should have a share in the sufferings of our Lord",
    },
  },
  aug275: {
    who: "Agustín de Hipona",
    work: "Tratados sobre el Evangelio de Juan 27, 5",
    text: "No aprovecha nada, pero solo del modo en que ellos lo entendieron. Ellos entendían la carne como cuando se despedaza en un cadáver o se vende en la carnicería; no como cuando es vivificada por el Espíritu.",
    edition: "Traducción de Doctrina. Original en inglés: Gibb e Innes, 1888. Dominio público.",
    father: {
      workId: "augustine-tractates-john",
      at: "27.5",
      anchor: "27",
      original:
        "They indeed understood the flesh, just as when cut to pieces in a carcass, or sold in the shambles; not as when it is quickened by the Spirit.",
    },
  },
  ccc1336: {
    who: "Catecismo de la Iglesia Católica",
    work: "§1336",
    text: "El primer anuncio de la Eucaristía dividió a los discípulos, igual que el anuncio de la pasión los escandalizó: “Es duro este lenguaje, ¿quién puede escucharlo?” (Jn 6,60). La Eucaristía y la cruz son piedras de escándalo. Es el mismo misterio, y no cesa de ser ocasión de división.",
    edition: "© Libreria Editrice Vaticana: cita breve y enlace.",
  },
  trent8: {
    who: "Concilio de Trento",
    work: "Sesión XIII (1551), canon 8",
    text: "Si alguno dijere, que Cristo, dado en la Eucaristía, sólo se recibe espiritualmente, y no también sacramental y realmente; sea excomulgado.",
    edition: "Castellano de López de Ayala, 1785. Dominio público.",
  },
  phil340: {
    who: "Filareto de Moscú, Catecismo extenso",
    work: "pregunta 340",
    text: "En la exposición de la fe de los patriarcas orientales se dice que la palabra transubstanciación no ha de tomarse como definición del modo en que el pan y el vino se cambian en el cuerpo y la sangre del Señor, pues esto nadie puede entenderlo sino Dios; sino que solo significa que el pan verdadera, real y sustancialmente se convierte en el verdadero cuerpo del Señor, y el vino en la verdadera sangre del Señor.",
    edition:
      "Traducción de Doctrina. Original en inglés: R. W. Blackmore, 1845, en Schaff, Creeds of Christendom II. Dominio público.",
  },
  apol10: {
    who: "Apología de la Confesión de Augsburgo",
    work: "art. X",
    text: "Confesamos que creemos que en la Cena del Señor el cuerpo y la sangre de Cristo están verdadera y sustancialmente presentes, y son verdaderamente ofrecidos, con las cosas que se ven, el pan y el vino, a los que reciben el Sacramento.",
    edition: "Traducción de Doctrina. Original en inglés: Triglot Concordia (Bente y Dau), 1921. Dominio público.",
  },
  belg35: {
    who: "Confesión Belga",
    work: "art. 35",
    text: "No erramos cuando decimos que lo que comemos y bebemos es el propio y natural cuerpo y la propia sangre de Cristo. Pero el modo en que participamos de ellos no es por la boca, sino por el Espíritu mediante la fe.",
    edition: "Traducción de Doctrina. Original en inglés: Schaff, Creeds of Christendom III, 1877. Dominio público.",
  },
  bfm7: {
    who: "Fe y Mensaje Bautistas (2000)",
    work: "art. VII",
    text: "La Cena del Señor es un acto simbólico de obediencia por el cual los miembros de la iglesia, al participar del pan y del fruto de la vid, conmemoran la muerte del Redentor y anuncian su segunda venida.",
    edition: "Texto oficial en español de la Convención Bautista del Sur. © SBC: cita breve y enlace.",
  },
  matt26: {
    who: "Mateo",
    work: "26:26-28",
    text: "Y comiendo ellos, tomó Jesús el pan, y bendijo, y lo partió, y dió á sus discípulos, y dijo: Tomad, comed: esto es mi cuerpo. Y tomando el vaso, y hechas gracias, les dió, diciendo: Bebed de él todos; Porque esto es mi sangre del nuevo pacto, la cual es derramada por muchos para remisión de los pecados.",
    edition: "Reina-Valera 1909",
    bible: { book: "Matt", chapter: 26, verse: 26 },
  },
  cor11: {
    who: "1 Corintios",
    work: "11:24-26",
    text: "Y habiendo dado gracias, lo partió, y dijo: Tomad, comed: esto es mi cuerpo que por vosotros es partido: haced esto en memoria de mí. Asimismo [tomó] también la copa, después de haber cenado, diciendo: Esta copa es el nuevo pacto en mi sangre: haced esto todas las veces que bebiereis, en memoria de mí. Porque todas las veces que comiereis este pan, y bebiereis esta copa, la muerte del Señor anunciáis hasta que venga.",
    edition: "Reina-Valera 1909",
    bible: { book: "1Cor", chapter: 11, verse: 24 },
  },
  john663: {
    who: "Juan",
    work: "6:63",
    text: "El espíritu es el que da vida; la carne nada aprovecha: las palabras que yo os he hablado, son espíritu, y son vida.",
    edition: "Reina-Valera 1909",
    bible: { book: "John", chapter: 6, verse: 63 },
  },
};

export const bibleChapters: [book: string, chapter: number][] = [
  ["Matt", 26],
  ["1Cor", 11],
];

export const johnSix: Record<number, string> = {
  51: "Yo soy el pan vivo que he descendido del cielo: si alguno comiere de este pan, vivirá para siempre; y el pan que yo daré es mi carne, la cual yo daré por la vida del mundo.",
  53: "Y Jesús les dijo: De cierto, de cierto os digo: Si no comiereis la carne del Hijo del hombre, y bebiereis su sangre, no tendréis vida en vosotros.",
  54: "El que come mi carne y bebe mi sangre, tiene vida eterna: y yo le resucitaré en el día postrero.",
  55: "Porque mi carne es verdadera comida, y mi sangre es verdadera bebida.",
  56: "El que come mi carne y bebe mi sangre, en mí permanece, y yo en él.",
  60: "Y muchos de sus discípulos oyéndo[lo], dijeron: Dura es esta palabra: ¿quién la puede oir?",
  63: "El espíritu es el que da vida; la carne nada aprovecha: las palabras que yo os he hablado, son espíritu, y son vida.",
  66: "Desde esto, muchos de sus discípulos volvieron atrás, y ya no andaban con él.",
};
