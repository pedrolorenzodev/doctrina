import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const papacyLutheran = {
  doctrine: "papacy",
  tradition: "lutheran",
  status: "draft",
  title: "La posición luterana",
  lede: "Cómo las confesiones luteranas entienden el ministerio y el papado, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan las confesiones luteranas sobre el ministerio y el papado, con el lugar que cada texto ocupa en el Libro de Concordia.",
    definition: {
      text: "El Tratado sobre el poder y la primacía del papa confiesa: «El evangelio atribuye a quienes presiden las iglesias el mandato de enseñar el evangelio, perdonar los pecados y administrar los sacramentos».",
      grades: [
        {
          kind: "church",
          grade: "confession",
          basis: "Tratado 60 (1537)",
        },
      ],
      sources: [
        {
          citations: ["LTr60"],
          label: "Tratado 60",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "el ministerio común",
        text: "El Tratado sobre el poder y la primacía del papa enseña: «que esta potestad es común por derecho divino a todos los que presiden las iglesias, ya se los llame pastores, presbíteros u obispos».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Tratado 61 (1537)",
          },
        ],
        sources: [
          {
            citations: ["LTr61"],
            label: "Tratado 61",
          },
        ],
      },
      {
        id: "QE-2",
        short: "el oficio del Evangelio",
        text: "La Confesión de Augsburgo llama poder de las llaves, o poder de los obispos según el Evangelio, al mandato de Dios de predicar, perdonar y retener los pecados y administrar los sacramentos (art. XXVIII.5).",
        grades: [
          {
            kind: "church",
            grade: "augsburg",
            basis: "art. XXVIII",
          },
        ],
        sources: [
          {
            citations: ["LACXXVIII_5"],
            label: "Confesión de Augsburgo XXVIII.5",
          },
        ],
      },
      {
        id: "QE-3",
        short: "las llaves de la Iglesia",
        text: "El Tratado enseña: «Por tanto, atribuye las llaves a la iglesia de manera principal e inmediata, así como por esa misma razón la iglesia tiene de manera principal el derecho de llamar».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Tratado 24 (1537)",
          },
        ],
        sources: [
          {
            citations: ["LTr24"],
            label: "Tratado 24",
          },
        ],
      },
      {
        id: "QE-4",
        short: "la superioridad del papa",
        text: "El Tratado sostiene que el obispo de Roma no es superior por derecho divino a los demás obispos y pastores (Tratado 7). Los Artículos de Esmalcalda niegan que el papa sea la cabeza de toda la Iglesia por derecho divino, atribuyen esa jefatura a Jesucristo y lo describen como obispo y pastor de Roma y de quienes se le unen (II.4.1).",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Tratado 7 y Artículos de Esmalcalda II.4.1",
          },
        ],
        sources: [
          {
            citations: ["LTr7"],
            label: "Tratado 7",
          },
          {
            citations: ["LSAII_4_1"],
            label: "Esmalcalda II.4.1",
          },
        ],
      },
      {
        id: "QE-5",
        short: "la designación de Anticristo",
        text: "Los Artículos de Esmalcalda, en su formulación histórica, afirman: «que el papa es el verdadero Anticristo o adversario de Cristo, que se ha puesto y elevado por encima y en contra de Cristo, porque pretende no dejar que los cristianos se salven sin su poder, que sin embargo nada es, ni está ordenado ni mandado por Dios».",
        status: ["STSA~pl"],
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Artículos de Esmalcalda II.4.10",
          },
        ],
        sources: [
          {
            citations: ["LSAII_4_10"],
            label: "Esmalcalda II.4.10",
          },
        ],
      },
      {
        id: "QE-6",
        short: "los arreglos humanos",
        text: "Los Artículos de Esmalcalda consideran como hipótesis una cabeza elegida por autoridad humana, por la paz y la unidad, con las limitaciones y críticas que ellos mismos señalan (II.4.7–9). La suscripción individual de Melanchthon da su propia formulación condicionada, de derecho humano; ninguna de las dos se toma como la enseñanza de toda la colección.",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Artículos de Esmalcalda II.4.7–9",
          },
        ],
        sources: [
          {
            citations: ["LSAII_4_7_9"],
            label: "Esmalcalda II.4.7–9",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "Para el Tratado, Cristo envió por igual a los apóstoles: «Cristo envía por igual a los apóstoles, sin distinción, cuando dice: Como me envió el Padre, así también yo os envío» {c:LTr9|Tratado 9}.",
      "Y en las palabras dirigidas a Pedro, el Tratado ve a Pedro representando a la asamblea de los apóstoles: «En todos esos dichos Pedro representa a toda la asamblea de los apóstoles» {c:LTr23|Tratado 23}.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Sobre Mateo 16, el Tratado dice: «ciertamente la iglesia no está edificada sobre la autoridad de un hombre, sino sobre el ministerio de aquella confesión que Pedro había hecho, en la cual proclama que Jesús es el Cristo, el Hijo de Dios» {c:LTr25|Tratado 25}.",
  },
  scriptureSubtitle:
    "Los pasajes que las confesiones luteranas citan sobre el ministerio y el papado, y cómo los leen.",
  scripture: [
    {
      refs: ["Luke.22.25"],
      text: "El Tratado lo cita para contraponer el servicio común al dominio entre los apóstoles (Tratado 8).",
    },
    {
      refs: ["Matt.18.2"],
      text: "El Tratado lo cita en la disputa sobre quién es el mayor, con el niño como ejemplo (Tratado 8).",
    },
    {
      refs: ["John.20.21"],
      text: "El Tratado lo cita para el envío igual de los apóstoles (Tratado 9).",
    },
    {
      refs: ["Gal.2.7"],
      text: "El Tratado lo cita para el llamamiento de Pablo y su relación con Pedro (Tratado 10).",
    },
    {
      refs: ["1Cor.3.6"],
      text: "El Tratado lo cita para los ministros y la iglesia (Tratado 11).",
    },
    {
      refs: ["Matt.16.18-Matt.16.19"],
      text: "El Tratado lo cita para Pedro, la roca, las llaves y la confesión (Tratado 22–25).",
      apologists: {
        arguments: [
          {
            title:
              "El texto no dice nada sobre sucesores ni sobre infalibilidad; el argumento gira en torno a la roca («petros»/«petra») y a si el arameo puede o no zanjarlo",
            quotes: [
              {
                speaker: "Jordan B. Cooper",
                work: "A Critique of the Papacy",
                outlet: "Dr. Jordan B Cooper, YouTube",
                date: "31 de enero de 2019",
                locator: "Minutos 8:04 a 13:24",
                url: "https://www.youtube.com/watch?v=LHk-pmg-9LE&t=484s",
                text: "jesus the christ okay so that's the that's the text in short okay so what we have here is peter's great confession of jesus um as the son of the living god peter recognizes who jesus is we are told that god himself has revealed this truth to peter in terms of who jesus is and then jesus gives this blessing to peter and so this idea in the roman catholic tradition it's taught that what jesus does here is he says you are peter upon this rock meaning peter's the rock upon you i will build my church and then he gives the keys of the kingdom of heaven specifically to peter and then those keys are passed on from peter to the popes who are the successors of saint peter the bishops of rome um that's a lot to read into that text i think first of all um you know the primary point that i bring up first is this test text says absolutely nothing about peter having successors it says absolutely nothing about peter passing on these keys of the kingdom of heaven to his successors it says absolutely nothing about uh you know these keys you know meaning that peter and his successors would have infallibility would be the heads of the church all of this comes from later history and it's very much read into this text all we're told in this text is that um peter is blessed and there are these things called the keys of the kingdom of heaven that are given to peter and that results in this power of forgiveness binding sins on earth uh and in heaven and then freeing those from sins on earth in heaven so let's talk about what that means so the primary place where the roman catholic argument starts is in making an identification between the rock and peter okay so peter's name petros means rock and what the term that jesus uses in matthew's gospel is is petra to refer to rock later so upon you pratras okay so sorry you are peter petros uh and upon this rock petra i will build my church so the argument is there's overlap between petross and petra and so what jesus is is trying to say here essentially is that peter is that rock upon which he builds the church um and protestant commentators generally have handled this in in a couple different ways one is to point out that the fact that there is a masculine and then there is a feminine so there is a distinction between peter as petros and the rock which is petra so there is a difference in language there and that may be a way of matthew hinting that these are not exactly identical things that are being spoken about here because jesus just does not say petros both times now the response to that from rome and roman apologists oftentimes is to say well jesus wasn't speaking greek jesus was speaking aramaic and the term kipha which we know as you know the background for the term cephas which is what peter is often called uh throughout the new testament um the aramaic term that would have been used there there is no differentiation between masculine and feminine in terms of both the name and the noun so jesus himself when he originally spoke in aramaic would have been using the same term both times um you know that's kind of a i'm sorry but i think that's kind of a silly argument i i just don't think it's it really makes sense of what's going on in the writing of the gospels so um you know matthew writes this in in greek and writes down the words in a very specific way for the readers of that gospel to understand so i'm not convinced that you can try to make a theological argument by what the original authors would have said in the way that these things would have been worded in the original language in which they were spoken face to face um the gospels write things in very particular ways because they're trying to get across very particular ideas um you know so for example this is the case when anybody you know tells a story or tells history you you may be writing out you know a sentence that someone said and it's a truthful sentence but perhaps the word order of the person in speaking was actually different than in the actual sentence so you see this in the gospels you'll find the same events a couple times maybe the words aren't exactly in the same order but it's this the truths are the same because that is in essence what jesus said it's not you know lying or false about what jesus said but the gospel writers put things in such a way and use certain wording to get specific ideas across through through the words of jesus and they're writing in greek so there's necessarily just going to be a little bit of a differentiation between the exact way in which jesus said things and then the way that the gospel writers put them out because jesus would have been speaking in aramaic and so they have to make a decision how are we going to translate this in greek that gets across the idea of what jesus was trying to say and also get it to fit then with the the broader thematic construction of the gospels so that's what's going on here um so we can't really just go back i mean we could do this so many other times in greek and try to find other meanings behind what jesus said by",
                lang: "en",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["John.21.15"],
      text: "El Tratado nombra «Apacienta mis ovejas» entre los textos disputados (Tratado 22).",
    },
    {
      refs: ["Matt.18.18"],
      text: "El Tratado lo cita para el encargo en plural junto a la palabra dirigida a uno (Tratado 23).",
    },
    {
      refs: ["John.20.23"],
      text: "El Tratado lo cita para las llaves dadas a todos los apóstoles (Tratado 23).",
    },
    {
      refs: ["Matt.18.19"],
      text: "El Tratado lo cita para las llaves que pertenecen a la iglesia (Tratado 24).",
    },
    {
      refs: ["2Thess.2.4"],
      text: "Los Artículos de Esmalcalda lo citan en la designación histórica de Anticristo (II.4.10–11).",
    },
    {
      refs: ["Titus.1.5"],
      text: "El Tratado lo cita, por medio de Jerónimo, para obispos y presbíteros (Tratado 62).",
    },
    {
      refs: ["John.20.21-John.20.23", "Mark.16.15"],
      text: "La Confesión de Augsburgo los cita para el ministerio del Evangelio y las llaves (art. XXVIII.5–7).",
    },
    {
      refs: ["Rom.1.16"],
      text: "La Confesión de Augsburgo lo cita para el Evangelio como poder de Dios para salvación (art. XXVIII.9).",
    },
    {
      refs: ["John.18.36", "Luke.12.14"],
      text: "La Confesión de Augsburgo los cita para distinguir el oficio de la Iglesia del oficio civil (art. XXVIII.13–15).",
    },
  ],
  passages: {
    title: "Los pasajes de la posición luterana",
    lede: "Los versículos que la tradición luterana cita sobre el ministerio y el papado, completos y con su propia lectura.",
    officialLabel: "Lo que enseñan los documentos de la tradición luterana.",
    apologistsLabel: "Cómo lo defienden los apologistas luteranos.",
  },
  videos: {
    subtitle: "Creadores luteranos explican y defienden esta postura. Los videos se abren en YouTube.",
    items: [],
  },
  objections: {
    subtitle:
      "Objeciones a la postura luterana. Abre cada una para leer en profundidad la respuesta de las confesiones luteranas.",
    videosSubtitle: "Creadores luteranos que responden a esta objeción. Los videos se abren en YouTube.",
    order: [],
    items: [],
  },
  life: {
    intro: [
      "Para las confesiones luteranas, el poder de la Iglesia se ejerce enseñando y predicando la Palabra y administrando los sacramentos, según el llamamiento (Confesión de Augsburgo XXVIII.8).",
      "El Tratado añade la jurisdicción: «además, jurisdicción, es decir, el mandato de excomulgar a quienes tienen delitos conocidos y de absolver nuevamente a quienes se arrepienten» {c:LTr60|Tratado 60}.",
    ],
    items: [
      {
        id: "CV-1",
        label: "Enseñar y administrar los sacramentos",
        text: "El poder de la Iglesia se ejerce enseñando o predicando la Palabra y administrando los sacramentos, según el llamamiento.",
        sources: [
          {
            citations: ["LACXXVIII_8"],
            label: "Confesión de Augsburgo XXVIII.8",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Disciplina y restauración",
        text: "El Tratado describe la jurisdicción así: «además, jurisdicción, es decir, el mandato de excomulgar a quienes tienen delitos conocidos y de absolver nuevamente a quienes se arrepienten».",
        sources: [
          {
            citations: ["LTr60"],
            label: "Tratado 60",
          },
        ],
      },
      {
        id: "CV-3",
        label: "Gobierno e igualdad de oficio",
        text: "El Tratado atribuye el poder a quienes presiden las iglesias, se los llame pastores, presbíteros u obispos.",
        sources: [
          {
            citations: ["LTr61"],
            label: "Tratado 61",
          },
        ],
      },
      {
        id: "CV-4",
        label: "El juicio de la Iglesia",
        text: "El Tratado llama a los juicios sinodales juicios de la Iglesia y no de los pontífices, y habla de juzgar y decidir desde la Palabra de Dios.",
        sources: [
          {
            citations: ["LTr56"],
            label: "Tratado 56",
          },
        ],
      },
    ],
  },
  authority: {
    subtitle:
      "Las categorías de autoridad que las propias confesiones luteranas usan para sus textos, con su definición en palabras de las confesiones.",
    grades: {
      scripture: {
        label: "Escritura: única regla y norma",
        definition:
          "«la única regla y norma según la cual deben ser estimados y juzgados todos los dogmas y todos los maestros» son «los escritos proféticos y apostólicos del Antiguo y del Nuevo Testamento» (unicam regulam et normam); «la sola Sagrada Escritura es reconocida como juez, norma y regla», «piedra de toque»",
        source: {
          citations: ["LFCEpRN_1_y_7"],
          label: "Epítome RN 1 y 7",
        },
      },
      confession: {
        label: "Confesión (símbolo)",
        definition:
          "Los demás escritos «no son jueces, como la Sagrada Escritura, sino solo testimonio y declaración de la fe», de cómo se entendió la Escritura en los artículos discutidos; y la doctrina común no ha de fundarse en escritos privados, sino en libros «compuestos, aprobados y recibidos en nombre de las iglesias»",
        source: {
          citations: ["LFCEpRN_8"],
          label: "Epítome RN 8",
        },
      },
      augsburg: {
        label: "Confesión de Augsburgo: «el símbolo de nuestro tiempo»",
        definition:
          "Aceptada «no porque la compusieran nuestros teólogos, sino porque ha sido tomada de la Palabra de Dios»",
        source: {
          citations: ["LFCEpRN_4"],
          label: "Epítome RN 4",
        },
      },
      catechism: {
        label: "Catecismos: «Biblia de los laicos»",
        definition:
          "Los catecismos Menor y Mayor, «en los que está comprendido todo lo que se trata más extensamente en la Sagrada Escritura y es necesario que un cristiano sepa para su salvación»",
        source: {
          citations: ["LFCEpRN_5"],
          label: "Epítome RN 5",
        },
      },
      thesis: {
        label: "Tesis afirmativa / antítesis (condena)",
        definition:
          "La Fórmula de Concordia confiesa «Creemos, enseñamos y confesamos…» y rechaza «Rechazamos y condenamos…»; sus antítesis son el rechazo de la propia tradición, en sus palabras",
        source: {
          citations: ["LFCEpVII"],
          label: "Epítome VII",
        },
      },
      witnesses: {
        label: "Testigos",
        definition:
          "Los Padres y los maestros posteriores «no deben ser recibidos de otro modo ni más allá que como testigos»",
        source: {
          citations: ["LFCEpRN_2"],
          label: "Epítome RN 2",
        },
      },
      adiaphora: {
        label: "Adiáforos (ritos)",
        definition:
          "Ceremonias «ni mandadas ni prohibidas en la Palabra de Dios», que «no son en sí mismas culto divino, ni siquiera parte de él»",
        source: {
          citations: ["LFCEpX_3"],
          label: "Epítome X.3",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
