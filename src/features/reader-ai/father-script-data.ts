import type { Quote } from "@/features/reader-ai/quotes";

export type Topic = {
  id: string;
  question: string;
  scope: string;
  quotes: string[];
  prose: string;
  pattern: RegExp;
};

export type WorkScript = { quotes: Record<string, Quote>; topics: Topic[] };

const lightfoot1889 = "Traducción de Doctrina con IA. Original en inglés: J. B. Lightfoot, 1889. Dominio público.";
const lightfootHarmer1891 =
  "Traducción de Doctrina con IA. Original en inglés: J. B. Lightfoot y J. R. Harmer, 1891. Dominio público.";
const dods1885 = "Traducción de Doctrina con IA. Original en inglés: Marcus Dods, 1885. Dominio público.";

const smyrnaeans: WorkScript = {
  quotes: {
    sm21: {
      who: "Ignacio de Antioquía",
      work: "A los esmirniotas 2, 1",
      text: "y padeció verdaderamente, como también se resucitó a sí mismo verdaderamente; no como dicen ciertos incrédulos, que padeció en apariencia",
      edition: lightfoot1889,
      father: {
        workId: "ignatius-smyrnaeans",
        at: "2.1",
        anchor: "2.1",
        original:
          "and He suffered truly, as also He raised Himself truly; not as certain unbelievers say, that He suffered in semblance",
      },
    },
    sm62: {
      who: "Ignacio de Antioquía",
      work: "A los esmirniotas 6, 2",
      text: "Se abstienen de la eucaristía (acción de gracias) y de la oración, porque no admiten que la eucaristía es la carne de nuestro Salvador Jesucristo, la cual carne padeció por nuestros pecados, y a la cual el Padre en su bondad resucitó.",
      edition: lightfoot1889,
      father: {
        workId: "ignatius-smyrnaeans",
        at: "6.2",
        anchor: "6.2",
        original:
          "They abstain from eucharist (thanksgiving) and prayer, because they allow not that the eucharist is the flesh of our Saviour Jesus Christ, which flesh suffered for our sins, and which the Father of His goodness raised up.",
      },
    },
    sm81: {
      who: "Ignacio de Antioquía",
      work: "A los esmirniotas 8, 1",
      text: "Seguid todos a vuestro obispo, como Jesucristo siguió al Padre, y al presbiterio como a los apóstoles; […] Téngase por válida aquella eucaristía que se hace bajo el obispo o bajo uno a quien él la haya confiado.",
      edition: lightfoot1889,
      father: {
        workId: "ignatius-smyrnaeans",
        at: "8.1",
        anchor: "8.1",
        original:
          "Do ye all follow your bishop, as Jesus Christ followed the Father, and the presbytery as the Apostles; […] Let that be held a valid eucharist which is under the bishop or one to whom he shall have committed it.",
      },
    },
    sm82: {
      who: "Ignacio de Antioquía",
      work: "A los esmirniotas 8, 2",
      text: "Dondequiera que aparezca el obispo, allí esté el pueblo; así como donde esté Jesús, allí está la Iglesia universal.",
      edition: lightfoot1889,
      father: {
        workId: "ignatius-smyrnaeans",
        at: "8.2",
        anchor: "8.2",
        original:
          "Wheresoever the bishop shall appear, there let the people be; even as where Jesus may be, there is the universal Church.",
      },
    },
  },
  topics: [
    {
      id: "smyrnaeansEucharist",
      question: "¿Qué dice Ignacio de la eucaristía?",
      scope: "Sobre la carta de Ignacio a los esmirniotas. Pasajes de esta obra, en la edición que tiene Doctrina.",
      quotes: ["sm62", "sm81"],
      prose:
        "Ignacio nombra la eucaristía en dos lugares. De quienes sostienen doctrina extraña dice que se abstienen de ella porque «no admiten que la eucaristía es la carne de nuestro Salvador Jesucristo». Más adelante, al hablar del obispo, escribe que se tenga por válida la eucaristía que se hace bajo el obispo o bajo uno a quien él la haya confiado. Doctrina no los interpreta: aquí están los textos.",
      pattern: /eucarist|comunion|cena|pan\b|carne/,
    },
    {
      id: "smyrnaeansBishop",
      question: "¿Qué dice Ignacio del obispo?",
      scope: "Sobre la carta de Ignacio a los esmirniotas. Pasajes de esta obra, en la edición que tiene Doctrina.",
      quotes: ["sm81", "sm82"],
      prose:
        "Ignacio pide seguir al obispo «como Jesucristo siguió al Padre», y escribe que «dondequiera que aparezca el obispo, allí esté el pueblo». Doctrina no decide cómo se leen estas frases: cada tradición las lee en sus propias palabras en las páginas de doctrina.",
      pattern: /obispo|presbiter|diacono|autoridad|iglesia|jerarqu/,
    },
    {
      id: "smyrnaeansOpponents",
      question: "¿Contra quiénes escribe Ignacio?",
      scope: "Sobre la carta de Ignacio a los esmirniotas. Pasajes de esta obra, en la edición que tiene Doctrina.",
      quotes: ["sm21", "sm62"],
      prose:
        "Ignacio habla de «ciertos incrédulos» que dicen que Cristo «padeció en apariencia», y de quienes «no admiten que la eucaristía es la carne de nuestro Salvador Jesucristo».",
      pattern: /contra|herej|docet|apariencia|incredul|falso/,
    },
  ],
};

const didache: WorkScript = {
  quotes: {
    d7: {
      who: "Didajé",
      work: "7",
      text: "bautizad en el nombre del Padre y del Hijo y del Espíritu Santo en agua viva (corriente). Pero si no tienes agua viva, entonces bautiza en otra agua; […] Pero si no tienes ninguna de las dos, entonces derrama agua sobre la cabeza tres veces en el nombre del Padre y del Hijo y del Espíritu Santo.",
      edition: lightfootHarmer1891,
      father: {
        workId: "didache",
        at: "7",
        anchor: "7",
        original:
          "baptize in the name of the Father and of the Son and of the Holy Spirit in living (running) water. But if thou hast not living water, then baptize in other water; […] But if thou hast neither, then pour water on the head thrice in the name of the Father and of the Son and of the Holy Spirit.",
      },
    },
    d8: {
      who: "Didajé",
      work: "8",
      text: "Y que vuestros ayunos no sean con los hipócritas, porque ellos ayunan el segundo y el quinto día de la semana; pero vosotros guardad vuestro ayuno el cuarto y el día de la preparación (el sexto).",
      edition: lightfootHarmer1891,
      father: {
        workId: "didache",
        at: "8",
        anchor: "8",
        original:
          "And let not your fastings be with the hypocrites, for they fast on the second and the fifth day of the week; but do ye keep your fast on the fourth and on the preparation (the sixth) day.",
      },
    },
    d9: {
      who: "Didajé",
      work: "9",
      text: "Así como este pan partido estaba esparcido sobre los montes y, reunido, llegó a ser uno, así sea reunida tu Iglesia desde los confines de la tierra en tu reino; […] Pero que nadie coma ni beba de esta acción de gracias eucarística, sino los que han sido bautizados en el nombre del Señor",
      edition: lightfootHarmer1891,
      father: {
        workId: "didache",
        at: "9",
        anchor: "9",
        original:
          "As this broken bread was scattered upon the mountains and being gathered together became one, so may Thy Church be gathered together from the ends of the earth into Thy kingdom; […] But let no one eat or drink of this eucharistic thanksgiving, but they that have been baptized into the name of the Lord",
      },
    },
    d14: {
      who: "Didajé",
      work: "14",
      text: "Y en el día mismo del Señor reuníos y partid el pan y dad gracias, confesando primero vuestras transgresiones, para que vuestro sacrificio sea puro.",
      edition: lightfootHarmer1891,
      father: {
        workId: "didache",
        at: "14",
        anchor: "14",
        original:
          "And on the Lord's own day gather yourselves together and break bread and give thanks, first confessing your transgressions, that your sacrifice may be pure.",
      },
    },
  },
  topics: [
    {
      id: "didacheBaptism",
      question: "¿Qué dice la Didajé del bautismo?",
      scope: "Sobre la Didajé. Pasajes de esta obra, en la edición que tiene Doctrina.",
      quotes: ["d7"],
      prose:
        "La Didajé manda bautizar «en el nombre del Padre y del Hijo y del Espíritu Santo», en agua viva y, si no la hay, en otra agua; y, si no hay ninguna de las dos, derramar agua sobre la cabeza tres veces.",
      pattern: /bautis|bautiz|agua|inmers/,
    },
    {
      id: "didacheEucharist",
      question: "¿Qué dice la Didajé de la eucaristía?",
      scope: "Sobre la Didajé. Pasajes de esta obra, en la edición que tiene Doctrina.",
      quotes: ["d9", "d14"],
      prose:
        "La Didajé da una oración sobre la copa y otra sobre el pan partido, pide que no coma ni beba de esta «acción de gracias eucarística» quien no haya sido bautizado, y manda reunirse en el día del Señor, partir el pan y dar gracias, confesando antes las transgresiones. Doctrina no los interpreta: aquí están los textos.",
      pattern: /eucarist|comunion|cena|pan\b|copa|sacrific|domingo|dia del senor/,
    },
    {
      id: "didacheFasting",
      question: "¿Qué dice la Didajé del ayuno?",
      scope: "Sobre la Didajé. Pasajes de esta obra, en la edición que tiene Doctrina.",
      quotes: ["d8"],
      prose: "La Didajé dice qué días ayunar y en cuáles no hacerlo, y los distingue de los de «los hipócritas».",
      pattern: /ayun|oracion|padre nuestro|hipocrit/,
    },
  ],
};

const apology: WorkScript = {
  quotes: {
    j61: {
      who: "Justino Mártir",
      work: "Primera Apología 61",
      text: "Luego son llevados por nosotros donde hay agua, y son regenerados de la misma manera en que nosotros mismos fuimos regenerados. Porque en el nombre de Dios, el Padre y Señor del universo, y de nuestro Salvador Jesucristo, y del Espíritu Santo, reciben entonces el lavamiento con agua.",
      edition: dods1885,
      father: {
        workId: "justin-first-apology",
        at: "61",
        anchor: "61",
        original:
          "Then they are brought by us where there is water, and are regenerated in the same manner in which we were ourselves regenerated. For, in the name of God, the Father and Lord of the universe, and of our Saviour Jesus Christ, and of the Holy Spirit, they then receive the washing with water.",
      },
    },
    j65: {
      who: "Justino Mártir",
      work: "Primera Apología 65",
      text: "Luego se trae al presidente de los hermanos pan y una copa de vino mezclado con agua; y él, tomándolos, da alabanza y gloria al Padre del universo, por el nombre del Hijo y del Espíritu Santo, y ofrece acciones de gracias con considerable extensión por ser tenidos por dignos de recibir estas cosas de su mano.",
      edition: dods1885,
      father: {
        workId: "justin-first-apology",
        at: "65",
        anchor: "65",
        original:
          "There is then brought to the president of the brethren bread and a cup of wine mixed with water; and he taking them, gives praise and glory to the Father of the universe, through the name of the Son and of the Holy Ghost, and offers thanks at considerable length for our being counted worthy to receive these things at His hands.",
      },
    },
    j66: {
      who: "Justino Mártir",
      work: "Primera Apología 66",
      text: "Porque no como pan común y bebida común recibimos estos; sino que, de igual manera que Jesucristo nuestro Salvador, habiéndose hecho carne por el Verbo de Dios, tuvo carne y sangre para nuestra salvación, así también se nos ha enseñado que el alimento que es bendecido por la oración de su palabra, y del cual nuestra sangre y carne por transmutación son nutridas, es la carne y sangre de aquel Jesús que se hizo carne.",
      edition: dods1885,
      father: {
        workId: "justin-first-apology",
        at: "66",
        anchor: "66",
        original:
          "For not as common bread and common drink do we receive these; but in like manner as Jesus Christ our Saviour, having been made flesh by the Word of God, had both flesh and blood for our salvation, so likewise have we been taught that the food which is blessed by the prayer of His word, and from which our blood and flesh by transmutation are nourished, is the flesh and blood of that Jesus who was made flesh.",
      },
    },
    j67: {
      who: "Justino Mártir",
      work: "Primera Apología 67",
      text: "Pero el domingo es el día en que todos celebramos nuestra asamblea común, porque es el primer día en que Dios, habiendo obrado un cambio en las tinieblas y la materia, hizo el mundo; y Jesucristo nuestro Salvador en el mismo día resucitó de entre los muertos.",
      edition: dods1885,
      father: {
        workId: "justin-first-apology",
        at: "67",
        anchor: "67",
        original:
          "But Sunday is the day on which we all hold our common assembly, because it is the first day on which God, having wrought a change in the darkness and matter, made the world; and Jesus Christ our Saviour on the same day rose from the dead.",
      },
    },
  },
  topics: [
    {
      id: "apologyBaptism",
      question: "¿Qué dice Justino del bautismo?",
      scope: "Sobre la Primera Apología. Pasajes de esta obra, en la edición que tiene Doctrina.",
      quotes: ["j61"],
      prose:
        "Justino cuenta cómo reciben el bautismo quienes creen lo que la Iglesia enseña: son llevados donde hay agua y reciben «el lavamiento con agua» en el nombre del Padre, de Jesucristo y del Espíritu Santo.",
      pattern: /bautis|bautiz|agua|regenera/,
    },
    {
      id: "apologyEucharist",
      question: "¿Qué dice Justino de la eucaristía?",
      scope: "Sobre la Primera Apología. Pasajes de esta obra, en la edición que tiene Doctrina.",
      quotes: ["j65", "j66"],
      prose:
        "Justino describe cómo se trae el pan y la copa al presidente, que da gracias, y escribe que el alimento bendecido «es la carne y sangre de aquel Jesús que se hizo carne». Doctrina no lo interpreta: aquí están los textos.",
      pattern: /eucarist|comunion|cena|pan\b|copa|carne|sangre/,
    },
    {
      id: "apologySunday",
      question: "¿Qué dice Justino del domingo?",
      scope: "Sobre la Primera Apología. Pasajes de esta obra, en la edición que tiene Doctrina.",
      quotes: ["j67"],
      prose:
        "Justino dice por qué se reúnen el domingo: por ser el primer día de la creación y el día en que Jesucristo resucitó.",
      pattern: /domingo|asamblea|reunion|culto|sabado/,
    },
  ],
};

export const fatherScriptData: Record<string, WorkScript> = {
  "ignatius-smyrnaeans": smyrnaeans,
  didache,
  "justin-first-apology": apology,
};
