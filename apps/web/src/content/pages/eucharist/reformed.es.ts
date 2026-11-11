import type { TraditionPage } from "@doctrina/core/model/page";
import type { CitationId } from "@/content/registry/citations";

export const eucharistReformed = {
  doctrine: "eucharist",
  tradition: "reformed",
  status: "draft",
  title: "La posición reformada",
  lede: "Cómo los Estándares de Westminster entienden la Cena del Señor, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan los Estándares de Westminster sobre la Cena del Señor, con el lugar que cada texto ocupa entre ellos.",
    definition: {
      text: "Para los Estándares de Westminster, la Cena del Señor es el sacramento instituido por Cristo para que la Iglesia anuncie y recuerde perpetuamente su único sacrificio, selle sus beneficios a los creyentes y los alimente espiritualmente en comunión con él y entre sí. El pan y el vino siguen siendo pan y vino; sin embargo, para quienes los reciben dignamente, Cristo y los beneficios de su muerte son recibidos real y verdaderamente por la fe, de manera espiritual.",
      grades: [
        {
          kind: "church",
          grade: "standards",
          basis: "Confesión de Westminster 29.1, 29.5 y 29.7",
        },
      ],
      sources: [
        {
          citations: ["RWCF29_1"],
          label: "Westminster 29.1",
        },
        {
          citations: ["RWCF29_7"],
          label: "Westminster 29.7",
        },
        {
          citations: ["RWCF29_5"],
          label: "Westminster 29.5",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "la institución y la duración",
        text: "Según la Confesión de Westminster (29.1): Cristo instituyó la Cena la noche en que fue entregado, y debe observarse en la Iglesia hasta el fin del mundo.",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.1",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_1"],
            label: "Westminster 29.1",
          },
        ],
      },
      {
        id: "QE-2",
        short: "la finalidad",
        text: "Según la Confesión de Westminster (29.1): Es recuerdo perpetuo del sacrificio de Cristo, sello de sus beneficios, alimento y crecimiento espiritual, compromiso de obediencia y vínculo de comunión con Cristo y con su cuerpo.",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.1",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_1"],
            label: "Westminster 29.1",
          },
        ],
      },
      {
        id: "QE-3",
        short: "el único sacrificio",
        text: "Según la Confesión de Westminster (29.2): La Cena no vuelve a ofrecer a Cristo ni realiza otro sacrificio por los vivos o los muertos: conmemora su ofrenda única y responde con alabanza.",
        status: ["STWCF~er"],
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.2",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_2"],
            label: "Westminster 29.2",
          },
        ],
      },
      {
        id: "QE-4",
        short: "el signo y la cosa significada",
        text: "Según la Confesión de Westminster (29.5): Los elementos guardan una relación sacramental con Cristo crucificado y por eso reciben sacramentalmente los nombres de su cuerpo y sangre.",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.5",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_5"],
            label: "Westminster 29.5",
          },
        ],
      },
      {
        id: "QE-5",
        short: "la permanencia de los elementos",
        text: "Según la Confesión de Westminster (29.5): Después de ser apartados para el uso instituido, siguen siendo verdadera y sustancialmente pan y vino.",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.5",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_5"],
            label: "Westminster 29.5",
          },
        ],
      },
      {
        id: "QE-6",
        short: "la presencia y la recepción",
        text: "Según la Confesión de Westminster (29.7): Los comulgantes dignos se alimentan real y verdaderamente de Cristo crucificado y reciben sus beneficios por la fe, espiritual y no corporalmente.",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.7",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_7"],
            label: "Westminster 29.7",
          },
        ],
      },
      {
        id: "QE-7",
        short: "el lugar del cuerpo de Cristo",
        text: "Según la Confesión de Westminster (29.7): Su cuerpo y sangre no están corporal o carnalmente «en, con o bajo» el pan y el vino; están tan realmente, aunque espiritualmente, presentes a la fe como los elementos a los sentidos.",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.7",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_7"],
            label: "Westminster 29.7",
          },
        ],
      },
      {
        id: "QE-8",
        short: "la recepción indigna",
        text: "Según la Confesión de Westminster (29.8): Quien recibe indignamente toma los elementos, pero no la cosa significada; se hace culpable del cuerpo y la sangre del Señor para su condenación.",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.8",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_8"],
            label: "Westminster 29.8",
          },
        ],
      },
      {
        id: "QE-9",
        short: "la administración",
        text: "Según la Confesión de Westminster (29.3): Los ministros pronuncian las palabras de institución, oran, apartan pan y vino, parten el pan, toman la copa y dan ambos elementos a los comulgantes presentes.",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.3",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_3"],
            label: "Westminster 29.3",
          },
        ],
      },
      {
        id: "QE-10",
        short: "la preparación",
        text: "Según el Catecismo Menor de Westminster (97) y el Catecismo Mayor de Westminster (171): El participante debe examinarse y acercarse con fe, arrepentimiento, amor y nueva obediencia.",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Catecismo Menor 97 y Catecismo Mayor 171",
          },
        ],
        sources: [
          {
            citations: ["RWSC97"],
            label: "Catecismo Menor de Westminster 97",
          },
          {
            citations: ["RWLC171"],
            label: "Catecismo Mayor de Westminster 171",
          },
        ],
      },
      {
        id: "QE-11",
        short: "la transubstanciación",
        question: "¿El pan y el vino cambian de sustancia?",
        text: "No. La Confesión de Westminster (29.6) rechaza la transubstanciación porque entiende que contradice la Escritura, el carácter sacramental del signo y la permanencia sensible del pan y del vino.",
        status: ["STWCF~er"],
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.6",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_6"],
            label: "Westminster 29.6",
          },
        ],
      },
      {
        id: "QE-12",
        short: "la ofrenda por vivos y difuntos",
        question: "¿La Cena ofrece de nuevo a Cristo por vivos o muertos?",
        text: "No. La Confesión de Westminster (29.2) la llama conmemoración de la ofrenda de Cristo «una vez para siempre», no un sacrificio propiciatorio nuevo.",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.2",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_2"],
            label: "Westminster 29.2",
          },
        ],
      },
      {
        id: "QE-13",
        short: "adorar y reservar los elementos",
        question: "¿Deben adorarse, elevarse, procesionarse o reservarse los elementos?",
        text: "No. La Confesión de Westminster (29.4) juzga esas prácticas contrarias a la naturaleza e institución de la Cena; también rechaza misas privadas y negar la copa al pueblo.",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.4",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_4"],
            label: "Westminster 29.4",
          },
        ],
      },
      {
        id: "QE-14",
        short: "lo espiritual y lo real",
        question: "¿“Espiritual” significa imaginario o meramente simbólico?",
        text: "No. La Confesión de Westminster (29.7) insiste en «real y verdaderamente»: niega una recepción corporal, no la participación real de la fe en Cristo y sus beneficios.",
        grades: [
          {
            kind: "church",
            grade: "standards",
            basis: "Confesión de Westminster 29.7",
          },
        ],
        sources: [
          {
            citations: ["RWCF29_7"],
            label: "Westminster 29.7",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "Para los Estándares de Westminster, la Cena se funda en la institución de Cristo: él ordenó dar y recibir pan y vino, y vinculó ese acto con el anuncio de su muerte (Confesión 27.1–3 y 29.1).",
      "Y el signo no reemplaza la realidad espiritual: el pan y el vino conservan su sustancia, pero guardan una relación sacramental tan estrecha con Cristo crucificado que reciben los nombres de su cuerpo y sangre (Confesión 29.5).",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para los Estándares de Westminster, la Cena se lee bajo la suficiencia de la ofrenda única de Cristo: la Iglesia proclama, recuerda y agradece esa muerte, sin repetirla ni añadir otra propiciación (Confesión 29.2).",
  },
  scriptureSubtitle: "Los pasajes que los Estándares de Westminster citan sobre la Cena del Señor, y cómo los leen.",
  scripture: [
    {
      refs: ["Matt.26.26-Matt.26.28", "Mark.14.22-Mark.14.24", "Luke.22.19-Luke.22.20", "1Cor.11.23-1Cor.11.26"],
      text: "La Confesión y los Catecismos de Westminster citan estos textos para institución, memoria y proclamación hasta que Cristo venga (la Confesión de Westminster (29.1), 29.3; el Catecismo Mayor (168)–169; el Catecismo Menor (96)).",
      apologists: {
        arguments: [
          {
            title:
              "La institución es un mandato de recordar: la Cena mira al pasado, a la comunidad presente y al reino futuro",
            quotes: [
              {
                speaker: "R. C. Sproul",
                work: "The Institution of the Lord’s Supper: Kingdom Feast with R.C. Sproul",
                outlet: "Ligonier Ministries, YouTube",
                date: "4 de enero de 2025",
                locator: "Minutos 2:27 a 5:24",
                url: "https://www.youtube.com/watch?v=fth_FkAk968&t=147s",
                text: "Y tomó pan; dio gracias, lo partió y se lo dio, diciendo: ‘Este es mi cuerpo, que es dado por ustedes; hagan esto en memoria de mí.’ Asimismo también tomó la copa después de cenar, diciendo: ‘Esta copa es el nuevo pacto en mi sangre, que es derramada por ustedes. Pero he aquí, la mano del que me traiciona está conmigo en la mesa. Y ciertamente el Hijo del Hombre va según lo que está determinado, pero ¡ay de aquel hombre por quien es traicionado!’” Ahora bien, en esta descripción de la institución de la Cena del Señor vemos que Jesús hace una referencia específica a dos dimensiones del tiempo. La manera en que solemos medir el paso del tiempo en nuestra cultura es refiriéndonos al pasado, al presente y al futuro. Y cuando miramos el significado y la importancia de la Cena del Señor en la vida de la comunidad cristiana, vemos que la Cena del Señor tiene significado y aplicación en las tres dimensiones del tiempo: el pasado, el presente y el futuro. En primer lugar vemos su relación con el pasado; no solo se relaciona con el pasado por su vínculo con la Pascua, sino que además entendemos ahora que lo que Jesús hablaba en el Aposento Alto, que iba a ocurrir al día siguiente, ya ocurrió, y por eso su muerte en la cruz es pasado para nosotros. Y les dice a los discípulos que deben celebrar este sacramento, en primer lugar, en memoria de él; así que en la medida en que nuestra celebración de la Cena del Señor es un recuerdo, en esa medida se relaciona con algo que ocurrió en el pasado. Ahora bien, desarrollamos tradiciones en las que intentamos mantener vínculos continuos con el pasado. En categorías bíblicas, damas y caballeros, vemos con frecuencia lo que llamamos la sacralización del espacio y del tiempo. Es decir, vemos incontables ejemplos en que Dios, o el pueblo de Israel en particular, da un significado sagrado, santo y consagrado a ciertos tiempos y a ciertos acontecimientos que ocurren en este mundo.",
                original:
                  "And He took bread; He gave thanks and broke it, and gave it to them, saying, ‘This is my body, which is given for you; do this in remembrance of me.’ And likewise He also took the cup after supper, saying, ‘This cup is the new covenant in my blood, which is shed for you. But behold, the hand of my betrayer is with me on the table. And truly the Son of Man goes as it has been determined, but woe to that man by whom He is betrayed!’” Now in this description of the institution of the Lord’s Supper, we see that Jesus makes specific reference to two dimensions of time. The way we generally measure the passing of time in our culture is by referring to the past, to the present, and to the future. And when we look at the meaning and significance of the Lord’s Supper in the life of the Christian community, we see that the Lord’s Supper has significance and application to all three dimensions of time—to the past, to the present, and to the future. Now we see in the first instance its relationship to the past; not only is it related to the past by virtue of its link to the Passover, but also now we understand that what Jesus was talking about in the Upper Room that was to happen on the morrow has since taken place, and so His death on the cross is past to us. And He tells the disciples that they are to do this sacrament, in the first instance, in remembrance of Him; and so to the extent that our celebration of the Lord’s Supper is a remembrance, to that extent, it is that which is related to something that has happened in the past. Now we develop traditions where we try to maintain continual links to the past. In biblical categories, ladies and gentlemen, we see frequently what we call the sacralization of space and of time. That is, we see countless examples where God or where the people of Israel, particularly, give sacred, holy, consecrated significance to particular times and to particular events that take place in this world.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "«Ustedes anuncian la muerte del Señor»: la propia Cena es la proclamación, el evangelio en forma dramática, con signos visibles que se ofrecen para recibirse y transmitirse",
            quotes: [
              {
                speaker: "Sinclair B. Ferguson",
                work: "The Lord’s Supper: A Proclamation: Things Unseen with Sinclair B. Ferguson",
                outlet: "Ligonier Ministries, YouTube",
                date: "7 de octubre de 2024",
                locator: "Minutos 1:17 a 4:41",
                url: "https://www.youtube.com/watch?v=i9l9Te1KYak&t=77s",
                text: "La palabra de hoy es proclamación. Pablo escribe, en 1 Corintios 11:26: “Cada vez que comen este pan y beben la copa, proclaman la muerte del Señor.” Ahora bien, a veces he oído decir que no debería haber Cena del Señor sin un sermón, por lo que Pablo enseña aquí. Bueno, sin duda es correcto tener un sermón y una exposición de la enseñanza bíblica cuando nos acercamos a la mesa, por breve que sea. Pero no estoy nada seguro de que ese sea el tipo de proclamación en que realmente piensa Pablo aquí. No dice que haga falta la Cena del Señor más un sermón. Creo que lo que dice es que la Cena del Señor es el sermón. La Cena del Señor en sí misma es la proclamación. Bien, ¿qué significa eso? Esto, creo: la cena es el Evangelio en forma dramática. Sí, necesitamos palabras para interpretar lo que está pasando, pero cuando entendemos la enseñanza bíblica sobre la cena, nos damos cuenta de que en realidad es una dramatización visible del mensaje del Evangelio. La cena misma es una proclamación del Evangelio. El pan partido representa el cuerpo de Cristo, sacrificado en la cruz por nosotros. El vino derramado representa su sangre, derramada para el perdón de nuestros pecados. Así que en la mesa se representa un drama en miniatura. Incluso podríamos tomar prestadas las palabras de Pablo en Gálatas 3:1 y decir que aquí, en la cena, delante de nuestros ojos, Cristo es públicamente presentado como crucificado. Y luego se nos ofrecen estos símbolos de su cuerpo y su sangre. Se nos invita a recibirlos, a comer y a beber, y a tomarlos para nosotros, así como el Cristo resucitado nos es llevado en la proclamación del Evangelio, y se nos ofrece, y se nos exhorta a recibirlo y a alimentarnos de él. Y luego pasa esto, o al menos en mi opinión debería pasar: siguiendo el patrón de la primera Cena del Señor, nos ofrecemos unos a otros el pan y el vino. Se lo pasamos a la persona sentada a nuestro lado, de modo que en este drama cada uno de nosotros recibe a Cristo en el Evangelio y ofrece a Cristo en el Evangelio por medio de estos signos. Así que aquí hay algo para tener fijo en la mente mientras se nos ofrecen el pan y el vino: Jesús está siendo públicamente presentado ante mis ojos como crucificado, no solo en palabras audibles y en la predicación, o en las palabras de la liturgia, sino en estos signos visibles. Se me anima a mirar tanto como a escuchar, a ver cuánto me ha amado y me sigue amando. Y ahora tengo el privilegio de alimentarme de él al comer el pan y beber el vino, y luego tengo el privilegio de ofrecer el pan y el vino a mi prójimo que está a mi lado, y quizá incluso decirle: “Hagan esto, recordando que Cristo murió por ustedes, y alimenten de él su corazón con acción de gracias.” Eso es realmente asombroso. Es como si cada uno de nosotros pudiera aplicar las palabras de Pablo sobre la cena a lo que hacemos en la mesa: “Yo recibí del Señor lo que también les he transmitido.” Qué privilegio tan maravilloso, tan maravilloso, tenemos. Pero la palabra proclamación representa solo un privilegio,",
                original:
                  "Today’s word is proclamation. Paul writes, in 1 Corinthians 11:26, “As often as you eat this bread and drink the cup, you proclaim the Lord’s death.” Now, I’ve sometimes heard it said that you shouldn’t have the Lord’s Supper without a sermon because of what Paul is teaching here. Well, it’s surely right to have a sermon and exposition of biblical teaching when we come to the table, however short it is. But I’m not at all sure that’s the kind of proclamation Paul is really thinking about here. He’s not saying there needs to be the Lord’s Supper plus a sermon. I think he’s saying that the Lord’s Supper is the sermon. The Lord’s Supper itself is the proclamation. Well, what does that mean? This, I think: the supper is the gospel in dramatic form. Yes, we need words to interpret what’s happening, but when we understand the biblical teaching on the supper, we realize that it’s actually a visible dramatization of the message of the gospel. The supper itself is a gospel proclamation. The broken bread portrays Christ’s body, sacrificed on the cross for us. The poured-out wine portrays His blood, shed for the forgiveness of our sins. And so, a miniature drama is being enacted at the table. We might even borrow Paul’s words in Galatians 3:1 and say that here, at the supper, before our eyes, Christ is publicly portrayed as crucified. And then, these symbols of His body and blood are offered to us. We’re invited to receive them, to eat and to drink, and to take them to ourselves, just as the risen Christ is carried to us in the proclamation of the gospel, and offered to us, and we’re urged to receive Him and to feed on Him. And then this happens—or at least in my own view it should happen: following the pattern of the first Lord’s Supper, we then offer each other the bread and the wine. We pass it to the person sitting beside us so that in this drama, each of us receives Christ in the gospel and offers Christ in the gospel by means of these signs. So here’s something to have fixed in our minds as we are offered the bread and the wine: Jesus is being publicly portrayed before my eyes as crucified, not only in audible words and preaching, or in the words of the liturgy, but in these visible signs. I’m being encouraged to look as well as to listen, to see how much He has loved me and loves me still. And now I have the privilege of feeding on Him as I eat the bread and drink the wine, and then I have the privilege of offering the bread and wine to my neighbor beside me, and perhaps even saying to him or her, “Do this, remembering that Christ died for you, and feed on Him in your heart with thanksgiving.” That’s really amazing. It’s as though each of us can apply Paul’s words about the supper to what we are doing at the table: “I received from the Lord what I also delivered to you.” What a wonderful, wonderful privilege we have. But the word proclamation represents only one privilege,",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.10.16-1Cor.10.17", "1Cor.10.21", "1Cor.12.12-1Cor.12.13"],
      text: "La Confesión y los Catecismos de Westminster citan estos textos para comunión real con Cristo y unidad del cuerpo (la Confesión de Westminster (29.1), 29.7; el Catecismo Mayor (168), 170; el Catecismo Menor (96)).",
      apologists: {
        arguments: [
          {
            title:
              "Ferguson toma «participación» o «comunión» como la palabra del día para la Cena del Señor y lee la pregunta de Pablo en 1 Cor 10:16–17: la copa de bendición y el pan que partimos son una participación en la sangre y en el cuerpo de Cristo, porque hay un solo pan y nosotros, siendo muchos, somos un solo cuerpo; el griego es koinonía, comunión o compartir, y dice que Pablo se hace eco de lo que Jesús dijo en la institución",
            quotes: [
              {
                speaker: "Sinclair B. Ferguson",
                work: "Participation in Christ’s Body and Blood: Things Unseen with Sinclair B. Ferguson",
                outlet: "Ligonier Ministries",
                date: "9 de octubre de 2024",
                locator: "Minutos 0:27 a 1:34",
                url: "https://www.youtube.com/watch?v=8BrhgrMnNWE&t=27s",
                text: "la palabra es participación, o si prefieren, comunión. ¿Recuerdan la pregunta de Pablo a los cristianos de Corinto? La copa de bendición que bendecimos, ¿no es una participación o comunión en la sangre de Cristo? Y el pan que partimos, ¿no es una participación o comunión en el cuerpo de Cristo? Porque hay un solo pan, nosotros, que somos muchos, somos un solo cuerpo, porque todos participamos del único pan. Estoy seguro de que saben que la palabra griega que está detrás de la palabra participación o comunión es koinonía. Es la palabra para comunión, compañerismo, compartir algo. Así que Pablo dice que cuando recibimos la cena, compartimos, tenemos comunión en el cuerpo y la sangre del Señor. Pero ¿qué significa eso? Bueno, él obviamente se hace eco aquí de lo que Jesús dijo cuando instituyó la Cena del Señor. Dio a los discípulos el pan y el vino y dijo: esto es mi cuerpo, esta es mi sangre del pacto que es derramada por muchos para el perdón de los pecados.",
                original:
                  "word is participation, or if you prefer, communion. You remember Paul's question to the Corinthian Christians? The cup of blessing that we bless, is it not a participation or communion in the blood of Christ? And the bread that we break, is it not a participation or communion in the body of Christ? Because there is one bread, we who are many are one body, because we all partake of the one bread. I'm sure you know that the Greek word that lies behind the word participation or communion is koinonia. It's the word for fellowship, communion, sharing in something. So, Paul is saying that when we receive the supper, we are sharing in, we're having communion in the Lord's body and blood. But what does that mean? Well, he's obviously echoing here what Jesus said when he instituted the Lord's Supper. He gave the disciples the bread and the wine and said, this is my body, this is my blood of the covenant which is poured out for many for the forgiveness of sins.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Matt.26.26-Matt.26.29", "1Cor.11.26-1Cor.11.28"],
      text: "La Confesión y los Catecismos de Westminster citan estos textos para pan y vino permanecen como elementos (la Confesión de Westminster (29.5)).",
      apologists: {
        arguments: [
          {
            title:
              "«Ustedes anuncian la muerte del Señor»: la propia Cena es la proclamación, el evangelio en forma dramática, con signos visibles que se ofrecen para recibirse y transmitirse",
            quotes: [
              {
                speaker: "Sinclair B. Ferguson",
                work: "The Lord’s Supper: A Proclamation: Things Unseen with Sinclair B. Ferguson",
                outlet: "Ligonier Ministries, YouTube",
                date: "7 de octubre de 2024",
                locator: "Minutos 1:17 a 4:41",
                url: "https://www.youtube.com/watch?v=i9l9Te1KYak&t=77s",
                text: "La palabra de hoy es proclamación. Pablo escribe, en 1 Corintios 11:26: “Cada vez que comen este pan y beben la copa, proclaman la muerte del Señor.” Ahora bien, a veces he oído decir que no debería haber Cena del Señor sin un sermón, por lo que Pablo enseña aquí. Bueno, sin duda es correcto tener un sermón y una exposición de la enseñanza bíblica cuando nos acercamos a la mesa, por breve que sea. Pero no estoy nada seguro de que ese sea el tipo de proclamación en que realmente piensa Pablo aquí. No dice que haga falta la Cena del Señor más un sermón. Creo que lo que dice es que la Cena del Señor es el sermón. La Cena del Señor en sí misma es la proclamación. Bien, ¿qué significa eso? Esto, creo: la cena es el Evangelio en forma dramática. Sí, necesitamos palabras para interpretar lo que está pasando, pero cuando entendemos la enseñanza bíblica sobre la cena, nos damos cuenta de que en realidad es una dramatización visible del mensaje del Evangelio. La cena misma es una proclamación del Evangelio. El pan partido representa el cuerpo de Cristo, sacrificado en la cruz por nosotros. El vino derramado representa su sangre, derramada para el perdón de nuestros pecados. Así que en la mesa se representa un drama en miniatura. Incluso podríamos tomar prestadas las palabras de Pablo en Gálatas 3:1 y decir que aquí, en la cena, delante de nuestros ojos, Cristo es públicamente presentado como crucificado. Y luego se nos ofrecen estos símbolos de su cuerpo y su sangre. Se nos invita a recibirlos, a comer y a beber, y a tomarlos para nosotros, así como el Cristo resucitado nos es llevado en la proclamación del Evangelio, y se nos ofrece, y se nos exhorta a recibirlo y a alimentarnos de él. Y luego pasa esto, o al menos en mi opinión debería pasar: siguiendo el patrón de la primera Cena del Señor, nos ofrecemos unos a otros el pan y el vino. Se lo pasamos a la persona sentada a nuestro lado, de modo que en este drama cada uno de nosotros recibe a Cristo en el Evangelio y ofrece a Cristo en el Evangelio por medio de estos signos. Así que aquí hay algo para tener fijo en la mente mientras se nos ofrecen el pan y el vino: Jesús está siendo públicamente presentado ante mis ojos como crucificado, no solo en palabras audibles y en la predicación, o en las palabras de la liturgia, sino en estos signos visibles. Se me anima a mirar tanto como a escuchar, a ver cuánto me ha amado y me sigue amando. Y ahora tengo el privilegio de alimentarme de él al comer el pan y beber el vino, y luego tengo el privilegio de ofrecer el pan y el vino a mi prójimo que está a mi lado, y quizá incluso decirle: “Hagan esto, recordando que Cristo murió por ustedes, y alimenten de él su corazón con acción de gracias.” Eso es realmente asombroso. Es como si cada uno de nosotros pudiera aplicar las palabras de Pablo sobre la cena a lo que hacemos en la mesa: “Yo recibí del Señor lo que también les he transmitido.” Qué privilegio tan maravilloso, tan maravilloso, tenemos. Pero la palabra proclamación representa solo un privilegio,",
                original:
                  "Today’s word is proclamation. Paul writes, in 1 Corinthians 11:26, “As often as you eat this bread and drink the cup, you proclaim the Lord’s death.” Now, I’ve sometimes heard it said that you shouldn’t have the Lord’s Supper without a sermon because of what Paul is teaching here. Well, it’s surely right to have a sermon and exposition of biblical teaching when we come to the table, however short it is. But I’m not at all sure that’s the kind of proclamation Paul is really thinking about here. He’s not saying there needs to be the Lord’s Supper plus a sermon. I think he’s saying that the Lord’s Supper is the sermon. The Lord’s Supper itself is the proclamation. Well, what does that mean? This, I think: the supper is the gospel in dramatic form. Yes, we need words to interpret what’s happening, but when we understand the biblical teaching on the supper, we realize that it’s actually a visible dramatization of the message of the gospel. The supper itself is a gospel proclamation. The broken bread portrays Christ’s body, sacrificed on the cross for us. The poured-out wine portrays His blood, shed for the forgiveness of our sins. And so, a miniature drama is being enacted at the table. We might even borrow Paul’s words in Galatians 3:1 and say that here, at the supper, before our eyes, Christ is publicly portrayed as crucified. And then, these symbols of His body and blood are offered to us. We’re invited to receive them, to eat and to drink, and to take them to ourselves, just as the risen Christ is carried to us in the proclamation of the gospel, and offered to us, and we’re urged to receive Him and to feed on Him. And then this happens—or at least in my own view it should happen: following the pattern of the first Lord’s Supper, we then offer each other the bread and the wine. We pass it to the person sitting beside us so that in this drama, each of us receives Christ in the gospel and offers Christ in the gospel by means of these signs. So here’s something to have fixed in our minds as we are offered the bread and the wine: Jesus is being publicly portrayed before my eyes as crucified, not only in audible words and preaching, or in the words of the liturgy, but in these visible signs. I’m being encouraged to look as well as to listen, to see how much He has loved me and loves me still. And now I have the privilege of feeding on Him as I eat the bread and drink the wine, and then I have the privilege of offering the bread and wine to my neighbor beside me, and perhaps even saying to him or her, “Do this, remembering that Christ died for you, and feed on Him in your heart with thanksgiving.” That’s really amazing. It’s as though each of us can apply Paul’s words about the supper to what we are doing at the table: “I received from the Lord what I also delivered to you.” What a wonderful, wonderful privilege we have. But the word proclamation represents only one privilege,",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.10.3-1Cor.10.4", "1Cor.10.16-1Cor.10.17", "1Cor.11.27-1Cor.11.29"],
      text: "La Confesión y los Catecismos de Westminster citan estos textos para participación espiritual por la fe (la Confesión de Westminster (29.7); el Catecismo Mayor (170)).",
      apologists: {
        arguments: [
          {
            title:
              "Ferguson toma «participación» o «comunión» como la palabra del día para la Cena del Señor y lee la pregunta de Pablo en 1 Cor 10:16–17: la copa de bendición y el pan que partimos son una participación en la sangre y en el cuerpo de Cristo, porque hay un solo pan y nosotros, siendo muchos, somos un solo cuerpo; el griego es koinonía, comunión o compartir, y dice que Pablo se hace eco de lo que Jesús dijo en la institución",
            quotes: [
              {
                speaker: "Sinclair B. Ferguson",
                work: "Participation in Christ’s Body and Blood: Things Unseen with Sinclair B. Ferguson",
                outlet: "Ligonier Ministries",
                date: "9 de octubre de 2024",
                locator: "Minutos 0:27 a 1:34",
                url: "https://www.youtube.com/watch?v=8BrhgrMnNWE&t=27s",
                text: "la palabra es participación, o si prefieren, comunión. ¿Recuerdan la pregunta de Pablo a los cristianos de Corinto? La copa de bendición que bendecimos, ¿no es una participación o comunión en la sangre de Cristo? Y el pan que partimos, ¿no es una participación o comunión en el cuerpo de Cristo? Porque hay un solo pan, nosotros, que somos muchos, somos un solo cuerpo, porque todos participamos del único pan. Estoy seguro de que saben que la palabra griega que está detrás de la palabra participación o comunión es koinonía. Es la palabra para comunión, compañerismo, compartir algo. Así que Pablo dice que cuando recibimos la cena, compartimos, tenemos comunión en el cuerpo y la sangre del Señor. Pero ¿qué significa eso? Bueno, él obviamente se hace eco aquí de lo que Jesús dijo cuando instituyó la Cena del Señor. Dio a los discípulos el pan y el vino y dijo: esto es mi cuerpo, esta es mi sangre del pacto que es derramada por muchos para el perdón de los pecados.",
                original:
                  "word is participation, or if you prefer, communion. You remember Paul's question to the Corinthian Christians? The cup of blessing that we bless, is it not a participation or communion in the blood of Christ? And the bread that we break, is it not a participation or communion in the body of Christ? Because there is one bread, we who are many are one body, because we all partake of the one bread. I'm sure you know that the Greek word that lies behind the word participation or communion is koinonia. It's the word for fellowship, communion, sharing in something. So, Paul is saying that when we receive the supper, we are sharing in, we're having communion in the Lord's body and blood. But what does that mean? Well, he's obviously echoing here what Jesus said when he instituted the Lord's Supper. He gave the disciples the bread and the wine and said, this is my body, this is my blood of the covenant which is poured out for many for the forgiveness of sins.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Acts.3.21", "Luke.24.6", "Luke.24.39", "1Cor.11.24-1Cor.11.26"],
      text: "La Confesión y los Catecismos de Westminster citan estos textos para humanidad corporal de Cristo recibida en el cielo (la Confesión de Westminster (29.6); el Catecismo Mayor (170)).",
      apologists: {
        arguments: [
          {
            title:
              "«Ustedes anuncian la muerte del Señor»: la propia Cena es la proclamación, el evangelio en forma dramática, con signos visibles que se ofrecen para recibirse y transmitirse",
            quotes: [
              {
                speaker: "Sinclair B. Ferguson",
                work: "The Lord’s Supper: A Proclamation: Things Unseen with Sinclair B. Ferguson",
                outlet: "Ligonier Ministries, YouTube",
                date: "7 de octubre de 2024",
                locator: "Minutos 1:17 a 4:41",
                url: "https://www.youtube.com/watch?v=i9l9Te1KYak&t=77s",
                text: "La palabra de hoy es proclamación. Pablo escribe, en 1 Corintios 11:26: “Cada vez que comen este pan y beben la copa, proclaman la muerte del Señor.” Ahora bien, a veces he oído decir que no debería haber Cena del Señor sin un sermón, por lo que Pablo enseña aquí. Bueno, sin duda es correcto tener un sermón y una exposición de la enseñanza bíblica cuando nos acercamos a la mesa, por breve que sea. Pero no estoy nada seguro de que ese sea el tipo de proclamación en que realmente piensa Pablo aquí. No dice que haga falta la Cena del Señor más un sermón. Creo que lo que dice es que la Cena del Señor es el sermón. La Cena del Señor en sí misma es la proclamación. Bien, ¿qué significa eso? Esto, creo: la cena es el Evangelio en forma dramática. Sí, necesitamos palabras para interpretar lo que está pasando, pero cuando entendemos la enseñanza bíblica sobre la cena, nos damos cuenta de que en realidad es una dramatización visible del mensaje del Evangelio. La cena misma es una proclamación del Evangelio. El pan partido representa el cuerpo de Cristo, sacrificado en la cruz por nosotros. El vino derramado representa su sangre, derramada para el perdón de nuestros pecados. Así que en la mesa se representa un drama en miniatura. Incluso podríamos tomar prestadas las palabras de Pablo en Gálatas 3:1 y decir que aquí, en la cena, delante de nuestros ojos, Cristo es públicamente presentado como crucificado. Y luego se nos ofrecen estos símbolos de su cuerpo y su sangre. Se nos invita a recibirlos, a comer y a beber, y a tomarlos para nosotros, así como el Cristo resucitado nos es llevado en la proclamación del Evangelio, y se nos ofrece, y se nos exhorta a recibirlo y a alimentarnos de él. Y luego pasa esto, o al menos en mi opinión debería pasar: siguiendo el patrón de la primera Cena del Señor, nos ofrecemos unos a otros el pan y el vino. Se lo pasamos a la persona sentada a nuestro lado, de modo que en este drama cada uno de nosotros recibe a Cristo en el Evangelio y ofrece a Cristo en el Evangelio por medio de estos signos. Así que aquí hay algo para tener fijo en la mente mientras se nos ofrecen el pan y el vino: Jesús está siendo públicamente presentado ante mis ojos como crucificado, no solo en palabras audibles y en la predicación, o en las palabras de la liturgia, sino en estos signos visibles. Se me anima a mirar tanto como a escuchar, a ver cuánto me ha amado y me sigue amando. Y ahora tengo el privilegio de alimentarme de él al comer el pan y beber el vino, y luego tengo el privilegio de ofrecer el pan y el vino a mi prójimo que está a mi lado, y quizá incluso decirle: “Hagan esto, recordando que Cristo murió por ustedes, y alimenten de él su corazón con acción de gracias.” Eso es realmente asombroso. Es como si cada uno de nosotros pudiera aplicar las palabras de Pablo sobre la cena a lo que hacemos en la mesa: “Yo recibí del Señor lo que también les he transmitido.” Qué privilegio tan maravilloso, tan maravilloso, tenemos. Pero la palabra proclamación representa solo un privilegio,",
                original:
                  "Today’s word is proclamation. Paul writes, in 1 Corinthians 11:26, “As often as you eat this bread and drink the cup, you proclaim the Lord’s death.” Now, I’ve sometimes heard it said that you shouldn’t have the Lord’s Supper without a sermon because of what Paul is teaching here. Well, it’s surely right to have a sermon and exposition of biblical teaching when we come to the table, however short it is. But I’m not at all sure that’s the kind of proclamation Paul is really thinking about here. He’s not saying there needs to be the Lord’s Supper plus a sermon. I think he’s saying that the Lord’s Supper is the sermon. The Lord’s Supper itself is the proclamation. Well, what does that mean? This, I think: the supper is the gospel in dramatic form. Yes, we need words to interpret what’s happening, but when we understand the biblical teaching on the supper, we realize that it’s actually a visible dramatization of the message of the gospel. The supper itself is a gospel proclamation. The broken bread portrays Christ’s body, sacrificed on the cross for us. The poured-out wine portrays His blood, shed for the forgiveness of our sins. And so, a miniature drama is being enacted at the table. We might even borrow Paul’s words in Galatians 3:1 and say that here, at the supper, before our eyes, Christ is publicly portrayed as crucified. And then, these symbols of His body and blood are offered to us. We’re invited to receive them, to eat and to drink, and to take them to ourselves, just as the risen Christ is carried to us in the proclamation of the gospel, and offered to us, and we’re urged to receive Him and to feed on Him. And then this happens—or at least in my own view it should happen: following the pattern of the first Lord’s Supper, we then offer each other the bread and the wine. We pass it to the person sitting beside us so that in this drama, each of us receives Christ in the gospel and offers Christ in the gospel by means of these signs. So here’s something to have fixed in our minds as we are offered the bread and the wine: Jesus is being publicly portrayed before my eyes as crucified, not only in audible words and preaching, or in the words of the liturgy, but in these visible signs. I’m being encouraged to look as well as to listen, to see how much He has loved me and loves me still. And now I have the privilege of feeding on Him as I eat the bread and drink the wine, and then I have the privilege of offering the bread and wine to my neighbor beside me, and perhaps even saying to him or her, “Do this, remembering that Christ died for you, and feed on Him in your heart with thanksgiving.” That’s really amazing. It’s as though each of us can apply Paul’s words about the supper to what we are doing at the table: “I received from the Lord what I also delivered to you.” What a wonderful, wonderful privilege we have. But the word proclamation represents only one privilege,",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Acts.2.42", "Acts.2.46-Acts.2.47", "1Cor.11.25-1Cor.11.26"],
      text: "La Confesión y los Catecismos de Westminster citan estos textos para frecuencia y perseverancia (el Catecismo Mayor (175), 177).",
      apologists: {
        arguments: [
          {
            title:
              "«Ustedes anuncian la muerte del Señor»: la propia Cena es la proclamación, el evangelio en forma dramática, con signos visibles que se ofrecen para recibirse y transmitirse",
            quotes: [
              {
                speaker: "Sinclair B. Ferguson",
                work: "The Lord’s Supper: A Proclamation: Things Unseen with Sinclair B. Ferguson",
                outlet: "Ligonier Ministries, YouTube",
                date: "7 de octubre de 2024",
                locator: "Minutos 1:17 a 4:41",
                url: "https://www.youtube.com/watch?v=i9l9Te1KYak&t=77s",
                text: "La palabra de hoy es proclamación. Pablo escribe, en 1 Corintios 11:26: “Cada vez que comen este pan y beben la copa, proclaman la muerte del Señor.” Ahora bien, a veces he oído decir que no debería haber Cena del Señor sin un sermón, por lo que Pablo enseña aquí. Bueno, sin duda es correcto tener un sermón y una exposición de la enseñanza bíblica cuando nos acercamos a la mesa, por breve que sea. Pero no estoy nada seguro de que ese sea el tipo de proclamación en que realmente piensa Pablo aquí. No dice que haga falta la Cena del Señor más un sermón. Creo que lo que dice es que la Cena del Señor es el sermón. La Cena del Señor en sí misma es la proclamación. Bien, ¿qué significa eso? Esto, creo: la cena es el Evangelio en forma dramática. Sí, necesitamos palabras para interpretar lo que está pasando, pero cuando entendemos la enseñanza bíblica sobre la cena, nos damos cuenta de que en realidad es una dramatización visible del mensaje del Evangelio. La cena misma es una proclamación del Evangelio. El pan partido representa el cuerpo de Cristo, sacrificado en la cruz por nosotros. El vino derramado representa su sangre, derramada para el perdón de nuestros pecados. Así que en la mesa se representa un drama en miniatura. Incluso podríamos tomar prestadas las palabras de Pablo en Gálatas 3:1 y decir que aquí, en la cena, delante de nuestros ojos, Cristo es públicamente presentado como crucificado. Y luego se nos ofrecen estos símbolos de su cuerpo y su sangre. Se nos invita a recibirlos, a comer y a beber, y a tomarlos para nosotros, así como el Cristo resucitado nos es llevado en la proclamación del Evangelio, y se nos ofrece, y se nos exhorta a recibirlo y a alimentarnos de él. Y luego pasa esto, o al menos en mi opinión debería pasar: siguiendo el patrón de la primera Cena del Señor, nos ofrecemos unos a otros el pan y el vino. Se lo pasamos a la persona sentada a nuestro lado, de modo que en este drama cada uno de nosotros recibe a Cristo en el Evangelio y ofrece a Cristo en el Evangelio por medio de estos signos. Así que aquí hay algo para tener fijo en la mente mientras se nos ofrecen el pan y el vino: Jesús está siendo públicamente presentado ante mis ojos como crucificado, no solo en palabras audibles y en la predicación, o en las palabras de la liturgia, sino en estos signos visibles. Se me anima a mirar tanto como a escuchar, a ver cuánto me ha amado y me sigue amando. Y ahora tengo el privilegio de alimentarme de él al comer el pan y beber el vino, y luego tengo el privilegio de ofrecer el pan y el vino a mi prójimo que está a mi lado, y quizá incluso decirle: “Hagan esto, recordando que Cristo murió por ustedes, y alimenten de él su corazón con acción de gracias.” Eso es realmente asombroso. Es como si cada uno de nosotros pudiera aplicar las palabras de Pablo sobre la cena a lo que hacemos en la mesa: “Yo recibí del Señor lo que también les he transmitido.” Qué privilegio tan maravilloso, tan maravilloso, tenemos. Pero la palabra proclamación representa solo un privilegio,",
                original:
                  "Today’s word is proclamation. Paul writes, in 1 Corinthians 11:26, “As often as you eat this bread and drink the cup, you proclaim the Lord’s death.” Now, I’ve sometimes heard it said that you shouldn’t have the Lord’s Supper without a sermon because of what Paul is teaching here. Well, it’s surely right to have a sermon and exposition of biblical teaching when we come to the table, however short it is. But I’m not at all sure that’s the kind of proclamation Paul is really thinking about here. He’s not saying there needs to be the Lord’s Supper plus a sermon. I think he’s saying that the Lord’s Supper is the sermon. The Lord’s Supper itself is the proclamation. Well, what does that mean? This, I think: the supper is the gospel in dramatic form. Yes, we need words to interpret what’s happening, but when we understand the biblical teaching on the supper, we realize that it’s actually a visible dramatization of the message of the gospel. The supper itself is a gospel proclamation. The broken bread portrays Christ’s body, sacrificed on the cross for us. The poured-out wine portrays His blood, shed for the forgiveness of our sins. And so, a miniature drama is being enacted at the table. We might even borrow Paul’s words in Galatians 3:1 and say that here, at the supper, before our eyes, Christ is publicly portrayed as crucified. And then, these symbols of His body and blood are offered to us. We’re invited to receive them, to eat and to drink, and to take them to ourselves, just as the risen Christ is carried to us in the proclamation of the gospel, and offered to us, and we’re urged to receive Him and to feed on Him. And then this happens—or at least in my own view it should happen: following the pattern of the first Lord’s Supper, we then offer each other the bread and the wine. We pass it to the person sitting beside us so that in this drama, each of us receives Christ in the gospel and offers Christ in the gospel by means of these signs. So here’s something to have fixed in our minds as we are offered the bread and the wine: Jesus is being publicly portrayed before my eyes as crucified, not only in audible words and preaching, or in the words of the liturgy, but in these visible signs. I’m being encouraged to look as well as to listen, to see how much He has loved me and loves me still. And now I have the privilege of feeding on Him as I eat the bread and drink the wine, and then I have the privilege of offering the bread and wine to my neighbor beside me, and perhaps even saying to him or her, “Do this, remembering that Christ died for you, and feed on Him in your heart with thanksgiving.” That’s really amazing. It’s as though each of us can apply Paul’s words about the supper to what we are doing at the table: “I received from the Lord what I also delivered to you.” What a wonderful, wonderful privilege we have. But the word proclamation represents only one privilege,",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Sproul dice que el «partimiento del pan» de Hch 2:42 tiene dos significados: la comida cotidiana y las cenas de iglesia, y, incorporada en esas comidas, la celebración de la Cena del Señor; junto con el estudio de la Palabra, la comunión y la oración, el sacramento marca la vida de la comunidad del siglo primero",
            quotes: [
              {
                speaker: "R. C. Sproul",
                work: "Life in the Early Church (Acts 2:40–47) — A Sermon by R.C. Sproul",
                outlet: "Ligonier Ministries",
                date: "7 de enero de 2024",
                locator: "Minutos 17:09 a 18:47",
                url: "https://www.youtube.com/watch?v=Dp3LnNXACZ8&t=1029s",
                text: "Así que perseveraban firmemente en la doctrina y en la comunión, en el partimiento del pan. Ahora bien, el partimiento del pan tiene aquí dos significados. Por un lado, el partimiento del pan se refería simplemente a la hora de comer y no siempre exclusivamente al partimiento del pan del que hablamos con respecto a la Cena del Señor. Pero sabemos esto: las cenas de la iglesia eran una gran parte de la iglesia primitiva. La familia que come unida permanece unida. Realmente no hay una experiencia de amistad más cálida que compartir comidas juntos. Hay algo en eso. Nos sentamos alrededor de una mesa, salimos a cenar, invitamos a personas a nuestros hogares, de la forma que sea. Hay una cierta calidez, una cierta intimidad, una cierta empatía que se experimenta cuando las personas se reúnen alrededor de una comida. Y así, en primer lugar, como comían muchas comidas juntos, pero incorporando en esas comidas, como veremos en un minuto, también celebraban la Cena del Señor. Así que tienen la Palabra, el estudio de la Palabra, la proclamación de la Palabra, el disfrute de la comunión, el partimiento del pan, el sacramento de la Cena del Señor, ¿y qué más? Y la oración. Jesús mismo designó a la iglesia, el templo,",
                original:
                  "So they continued steadfastly in doctrine and fellowship in the breaking of bread. Now the breaking of bread has two significances here. On the one hand, the breaking of bread referred simply to mealtime and not always exclusively to the breaking of bread that we speak of with respect to the Lord's Supper. But we know this, church dinners were a big part of the early church. The family that eats together stays together. really is no more warm experience of friendship than sharing meals together. There's just something about it. We sit around a table, we go out to dinner, we invite people into our homes, however it is. There's a certain warmth, a certain intimacy, a certain empathy that is experienced when people gather together around a meal. And so in the first instance, since they were eating a lot of meals together, but incorporated in those meals, as we'll see in a little minute, they also celebrated the Lord's Supper. So you have the Word, study of the Word, the proclamation of the Word, the enjoyment of fellowship, the breaking of bread, the sacrament to the Lord's Supper, and what else? And prayer. Jesus Himself designated the church, the temple,",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.5.7-1Cor.5.8", "1Cor.10.16-1Cor.10.17", "1Cor.11.31"],
      text: "La Confesión y los Catecismos de Westminster citan estos textos para arrepentimiento, amor y nueva obediencia (el Catecismo Mayor (171); el Catecismo Menor (97)).",
      apologists: {
        arguments: [
          {
            title:
              "Ferguson toma «participación» o «comunión» como la palabra del día para la Cena del Señor y lee la pregunta de Pablo en 1 Cor 10:16–17: la copa de bendición y el pan que partimos son una participación en la sangre y en el cuerpo de Cristo, porque hay un solo pan y nosotros, siendo muchos, somos un solo cuerpo; el griego es koinonía, comunión o compartir, y dice que Pablo se hace eco de lo que Jesús dijo en la institución",
            quotes: [
              {
                speaker: "Sinclair B. Ferguson",
                work: "Participation in Christ’s Body and Blood: Things Unseen with Sinclair B. Ferguson",
                outlet: "Ligonier Ministries",
                date: "9 de octubre de 2024",
                locator: "Minutos 0:27 a 1:34",
                url: "https://www.youtube.com/watch?v=8BrhgrMnNWE&t=27s",
                text: "la palabra es participación, o si prefieren, comunión. ¿Recuerdan la pregunta de Pablo a los cristianos de Corinto? La copa de bendición que bendecimos, ¿no es una participación o comunión en la sangre de Cristo? Y el pan que partimos, ¿no es una participación o comunión en el cuerpo de Cristo? Porque hay un solo pan, nosotros, que somos muchos, somos un solo cuerpo, porque todos participamos del único pan. Estoy seguro de que saben que la palabra griega que está detrás de la palabra participación o comunión es koinonía. Es la palabra para comunión, compañerismo, compartir algo. Así que Pablo dice que cuando recibimos la cena, compartimos, tenemos comunión en el cuerpo y la sangre del Señor. Pero ¿qué significa eso? Bueno, él obviamente se hace eco aquí de lo que Jesús dijo cuando instituyó la Cena del Señor. Dio a los discípulos el pan y el vino y dijo: esto es mi cuerpo, esta es mi sangre del pacto que es derramada por muchos para el perdón de los pecados.",
                original:
                  "word is participation, or if you prefer, communion. You remember Paul's question to the Corinthian Christians? The cup of blessing that we bless, is it not a participation or communion in the blood of Christ? And the bread that we break, is it not a participation or communion in the body of Christ? Because there is one bread, we who are many are one body, because we all partake of the one bread. I'm sure you know that the Greek word that lies behind the word participation or communion is koinonia. It's the word for fellowship, communion, sharing in something. So, Paul is saying that when we receive the supper, we are sharing in, we're having communion in the Lord's body and blood. But what does that mean? Well, he's obviously echoing here what Jesus said when he instituted the Lord's Supper. He gave the disciples the bread and the wine and said, this is my body, this is my blood of the covenant which is poured out for many for the forgiveness of sins.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: [
        "Heb.7.23-Heb.7.24",
        "Heb.7.27",
        "Heb.9.22",
        "Heb.9.25-Heb.9.28",
        "Heb.10.11-Heb.10.12",
        "Heb.10.14",
        "Heb.10.18",
      ],
      text: "La Confesión y los Catecismos de Westminster citan estos textos para ofrenda única, no repetida (la Confesión de Westminster (29.2)).",
    },
    {
      refs: ["1Cor.11.27-1Cor.11.32", "2Cor.13.5"],
      text: "La Confesión y los Catecismos de Westminster citan estos textos para examen y peligro de recepción indigna (la Confesión de Westminster (29.8); el Catecismo Mayor (171), 173; el Catecismo Menor (97)).",
    },
  ],
  passages: {
    title: "Los pasajes de la posición reformada",
    lede: "Los versículos que la tradición reformada cita sobre la Cena del Señor, completos y con su propia lectura.",
    officialLabel: "Lo que enseñan los documentos de la tradición reformada.",
    apologistsLabel: "Cómo lo defienden los apologistas reformados.",
  },
  videos: {
    subtitle: "Creadores reformados explican y defienden esta postura. Los videos se abren en YouTube.",
    items: [],
  },
  objections: {
    subtitle:
      "Objeciones a la postura reformada. Abre cada una para leer en profundidad la respuesta de los Estándares de Westminster.",
    videosSubtitle: "Creadores reformados que responden a esta objeción. Los videos se abren en YouTube.",
    order: [],
    items: [],
  },
  life: {
    intro: [
      "Para los Estándares de Westminster, quien comulga se examina antes, atiende durante y considera después su conducta (Catecismo Mayor 171–175).",
      "La Cena se administra repetidamente a quienes tienen edad y capacidad para examinarse (Catecismo Mayor 173 y 177).",
    ],
    items: [
      {
        id: "CV-1",
        label: "Antes",
        text: "El comulgante se examina acerca de su unión con Cristo, sus pecados, su conocimiento, su fe, su arrepentimiento, su amor, su perdón y su deseo de Cristo y de nueva obediencia, y renueva esas gracias con meditación y oración; el examen no exige ausencia de dudas (Catecismo Mayor 171–172; Catecismo Menor 97).",
        sources: [
          {
            citations: ["RWLC171_172"],
            label: "Catecismo Mayor de Westminster 171–172",
          },
          {
            citations: ["RWSC97"],
            label: "Catecismo Menor de Westminster 97",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Durante",
        text: "La congregación recibe ambos elementos de un ministro de la Palabra; los participantes atienden con reverencia, observan las acciones sacramentales, disciernen el cuerpo del Señor y meditan en su muerte (Confesión 29.3; Catecismo Mayor 169 y 174).",
        sources: [
          {
            citations: ["RWCF29_3"],
            label: "Westminster 29.3",
          },
          {
            citations: ["RWLC169"],
            label: "Catecismo Mayor de Westminster 169",
          },
          {
            citations: ["RWLC174"],
            label: "Catecismo Mayor de Westminster 174",
          },
        ],
      },
      {
        id: "CV-3",
        label: "Después",
        text: "El creyente considera su conducta y el fruto de la celebración; si recibió consuelo, agradece, pide continuidad, vigila contra recaídas, cumple sus votos y persevera en la Cena (Catecismo Mayor 175).",
        sources: [
          {
            citations: ["RWLC175"],
            label: "Catecismo Mayor de Westminster 175",
          },
        ],
      },
      {
        id: "CV-4",
        label: "Admisión y frecuencia",
        text: "La Cena se administra repetidamente a quienes tienen edad y capacidad para examinarse; la Iglesia puede excluir a quien permanece ignorante o escandaloso hasta que reciba instrucción y muestre reforma (Confesión 29.8; Catecismo Mayor 173 y 177).",
        sources: [
          {
            citations: ["RWCF29_8"],
            label: "Westminster 29.8",
          },
          {
            citations: ["RWLC173"],
            label: "Catecismo Mayor de Westminster 173",
          },
          {
            citations: ["RWLC177"],
            label: "Catecismo Mayor de Westminster 177",
          },
        ],
      },
    ],
  },
  authority: {
    subtitle:
      "Las categorías de autoridad que los propios Estándares de Westminster aplican a sus textos, con su definición en palabras de los Estándares.",
    grades: {
      scripture: {
        label: "Escritura: única regla infalible",
        definition: "Juez final de toda controversia; la autoridad de la Iglesia es ministerial y declarativa.",
        source: {
          citations: ["RWCF1_10"],
          label: "Westminster 1.10",
        },
      },
      standards: {
        label: "Estándares subordinados de Westminster",
        definition:
          "Vinculan especialmente a los oficiales según la forma de suscripción de cada cuerpo; son falibles y reformables bajo la Escritura.",
        source: {
          citations: ["RWCF31_3_4"],
          label: "Westminster 31.3–4",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
