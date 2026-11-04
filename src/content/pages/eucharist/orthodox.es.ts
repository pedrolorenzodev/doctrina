import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const eucharistOrthodox = {
  doctrine: "eucharist",
  tradition: "orthodox",
  status: "draft",
  title: "La posición ortodoxa",
  lede: "Cómo la Iglesia ortodoxa entiende la Eucaristía, con sus propias fuentes.",
  teach: {
    subtitle: "Lo que enseñan los textos ortodoxos sobre la Eucaristía, con el lugar que cada texto ocupa entre ellos.",
    definition: {
      text: "La Confesión de Dositeo confiesa: «El santísimo misterio de la sagrada Eucaristía, que antes colocamos cuarto en el orden, es aquel que el Señor entregó la noche en que se entregaba a sí mismo por la vida del mundo».",
      grades: [
        {
          kind: "church",
          grade: "confession",
          basis: "Confesión de Dositeo, decreto XVII",
        },
      ],
      sources: [
        {
          citations: ["ODositheusXVII"],
          label: "Dositeo XVII",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "el cuerpo y la sangre",
        text: "La Confesión de Dositeo enseña: «Sino verdadera y realmente, de modo que después de la consagración del pan y del vino el pan se cambia, se transustancia, se transforma, se convierte en el mismo cuerpo verdadero del Señor […]».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, decreto XVII",
          },
        ],
        sources: [
          {
            citations: ["ODositheusXVII"],
            label: "Dositeo XVII",
          },
        ],
      },
      {
        id: "QE-2",
        short: "la sustancia y las apariencias",
        text: "La Confesión de Dositeo enseña: «Después de la consagración del pan y del vino ya no permanece la sustancia del pan y del vino, sino el cuerpo mismo y la sangre misma del Señor bajo la apariencia y figura del pan y del vino; es decir, bajo los accidentes del pan».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, decreto XVII",
          },
        ],
        sources: [
          {
            citations: ["ODositheusXVII"],
            label: "Dositeo XVII",
          },
        ],
      },
      {
        id: "QE-3",
        short: "Cristo entero en cada porción",
        text: "La Confesión de Dositeo enseña: «Sino al Señor Cristo entero, totalmente, según la sustancia, con alma y divinidad, es decir, perfecto Dios y perfecto hombre».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, decreto XVII",
          },
        ],
        sources: [
          {
            citations: ["ODositheusXVII"],
            label: "Dositeo XVII",
          },
        ],
      },
      {
        id: "QE-4",
        short: "la recepción y su fruto",
        text: "La Confesión de Dositeo enseña: «A los piadosos y dignos les procura remisión de los pecados y vida eterna; a los impíos e indignos, condenación y castigo eterno».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, decreto XVII",
          },
        ],
        sources: [
          {
            citations: ["ODositheusXVII"],
            label: "Dositeo XVII",
          },
        ],
      },
      {
        id: "QE-5",
        short: "el sacrificio por vivos y difuntos",
        text: "La Confesión de Dositeo enseña: «Es un sacrificio verdadero y propiciatorio, ofrecido por todos los piadosos vivos y difuntos y para beneficio de todos […]».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, decreto XVII",
          },
        ],
        sources: [
          {
            citations: ["ODositheusXVII"],
            label: "Dositeo XVII",
          },
        ],
      },
      {
        id: "QE-6",
        short: "el término y el modo",
        text: "La Confesión de Dositeo enseña: «Con la palabra transustanciación no se significa el modo por el que el pan y el vino se transforman en el cuerpo y la sangre del Señor […]». El Catecismo extenso de Filareto añade que el término no define el modo, que Dios conoce (preguntas 339 y 340).",
        status: ["STORT~eo"],
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de Dositeo, decreto XVII",
          },
          {
            kind: "church",
            grade: "catechism",
            basis: "Catecismo extenso de Filareto, preguntas 339 y 340",
          },
        ],
        sources: [
          {
            citations: ["ODositheusXVII"],
            label: "Dositeo XVII",
          },
          {
            citations: ["OPhilaret339_340"],
            label: "Filareto, pregunta 339–340",
          },
        ],
      },
      {
        id: "QE-7",
        short: "el testimonio de Mogila",
        text: "Pedro Mogila, en su Confesión ortodoxa (I.106–107), es el segundo testimonio confesional del siglo XVII y no una paráfrasis de Dositeo.",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión ortodoxa de Pedro Mogila I.106–107",
          },
        ],
        sources: [
          {
            citations: ["OMogila106"],
            label: "Mogila, pregunta 106",
          },
          {
            citations: ["OMogila107"],
            label: "Mogila, pregunta 107",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "La Confesión de Dositeo transmite las palabras de Cristo: «Pues tomó pan, lo bendijo y lo dio a sus santos discípulos y apóstoles diciendo: tomen, coman; esto es mi cuerpo» {c:ODositheusXVII|Dositeo XVII}.",
      "Y el Catecismo extenso de Filareto añade la invocación del Espíritu Santo y la bendición de los dones, el pan y el vino ofrecidos (pregunta 338) {c:OPhilaret338|Filareto, pregunta 338}.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para el Catecismo extenso de Filareto, quien comulga se une estrechamente con Jesucristo y participa de la vida eterna (pregunta 342), y la comunión significa que, siendo muchos, somos un solo pan y un solo cuerpo (pregunta 329).",
  },
  scriptureSubtitle: "Los pasajes que los textos ortodoxos citan sobre la Eucaristía, y cómo los leen.",
  scripture: [
    {
      refs: ["Matt.26.26-Matt.26.28"],
      text: "El Catecismo extenso lo cita para las palabras de la institución antes de la invocación (Filareto, pregunta 338); la Confesión de Dositeo transmite esas palabras (decreto XVII).",
      apologists: {
        arguments: [
          {
            title:
              "Cristo instituye la Eucaristía como la Pascua renovada, antes del acontecimiento, sin otro fin declarado que su regreso",
            quotes: [
              {
                speaker: "the hosts of The Lord of Spirits",
                work: "Lord of Spirits - Thanksgiving [Ep. 55]",
                outlet: "Ancient Faith",
                date: "4 de febrero de 2025",
                locator: "Minutos 1:16:30 a 1:18:29",
                url: "https://www.youtube.com/watch?v=W5HhTyuo6Dg&t=4590s",
                text: "porque bueno, ahí no es donde está el foco, y vemos lo mismo con la Eucaristía. Cristo describe cómo se va a celebrar la Eucaristía; dice: este es mi cuerpo, partido por ustedes, antes de que su cuerpo hubiera sido partido; esta es mi sangre derramada por ustedes, antes de que su sangre hubiera sido derramada. Hay una participación incluso antes del acontecimiento, en términos de tiempo histórico lineal. Así que lo instituye antes de que el acontecimiento ocurra para transmitir lo mismo; no solo como paralelo, porque lo hace en la Pascua. Sí, esta es la nueva Pascua, la Pascua renovada: Cristo lo hace en la Pascua, y no lo presenta simplemente como que su muerte y su resurrección van a ser un acontecimiento histórico que algún día estará en un pasado lejano, y que nosotros reflexionaremos mirando hacia atrás, porque eso ni siquiera era posible. No es como decir: acuérdense de cuando mañana... Sí, sí. Y esto es algo continuo; él está creando de nuevo, no es solo este singular Acto Poderoso de Dios en la historia, sino una realidad que va a continuar sin un final declarado, salvo el regreso de Cristo, el fin del mundo. Sí, y ese es el lenguaje de: cada vez que hagan esto anunciarán su muerte y su resurrección hasta que él venga. Así que es algo continuo, y el hecho de que esta relación temporal entre el momento en que Cristo instituye la Eucaristía y el momento en que realmente muere y resucita se reitera en nuestra",
                original:
                  "because right that's not where it's focused um and uh we see this the same thing right the same thing with the Eucharist right right that Christ describes how the Eucharist will be celebrated right it says this is my body broken for you before his body had been broken yeah this is my bloodshed for you before his blood had been shed right there's a participation even before the event in terms of historical linear time right and and so he's instituting this before the event happens to convey the same thing right not just to parallel because he's doing this at Passover yeah this is the new Passover the renewed Passover CHR is doing it at Passover and he's not just presenting this as his death and his resurrection are going to be this historical event that will someday be in the distant past and we will reflect and look back at right because that wasn't even possible you know cuz yeah he's not like okay remember when tomorrow uh yeah yeah right and this is so this is an ongoing he's creating again it's not just this singular Mighty Act of God in history but it is this reality that will continue with no stated Endo right other than right the return of Christ the end of the world right um right and that's the language of as often as you do this you'll Proclaim his death and his resurrection until he comes right um so it is this ongoing thing and the fact that this temporal relationship between uh when Christ institutes the Eucharist and when he actually dies and rises again right is reiterated in our",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.10.17"],
      text: "El Catecismo extenso lo cita para un solo pan y un solo cuerpo (Filareto, pregunta 329).",
      apologists: {
        arguments: [
          {
            title:
              "La Eucaristía es un sacrificio y una mesa en un altar (1 Corintios 10:14–22); «memorial» en la Escritura es el lenguaje del sacrificio, no del mero recuerdo",
            quotes: [
              {
                speaker: "the hosts of The Lord of Spirits",
                work: "Lord of Spirits - Thanksgiving [Ep. 55]",
                outlet: "Ancient Faith",
                date: "4 de febrero de 2025",
                locator: "Minutos 40:32 a 49:12",
                url: "https://www.youtube.com/watch?v=W5HhTyuo6Dg&t=2432s",
                text: "Y así, en el capítulo 10, versículos 14 al 22, él en realidad va y viene entre un par de temas en toda esta sección de Primera de Corintios: los dos temas principales son, por un lado, no coman comida ofrecida a los ídolos, y aquí tienen 18 razones por las que, y por otro lado, habla de la Eucaristía. Sí, porque estas cosas están vinculadas, están vinculadas, y él hace explícito ese vínculo aquí. Sí, estás o en el equipo de Dios o en el equipo de los demonios. Sí. Bien, sí. Así que 1 Corintios capítulo 10, versículos 14 al 22: Por tanto, amados míos, huyan de la idolatría. Hablo como a personas sensatas; juzguen ustedes mismos lo que digo. La copa de bendición que bendecimos, ¿no es la comunión con la sangre de Cristo? El pan que partimos, ¿no es la comunión con el cuerpo de Cristo? Porque hay un solo pan, y nosotros, siendo muchos, somos un cuerpo, pues todos participamos de ese único pan. Consideren a Israel según la carne: los que comen de los sacrificios, ¿no son partícipes del altar? ¿Qué digo, pues, que lo sacrificado a los ídolos sea algo, o que el ídolo sea algo? Sino que lo que los gentiles sacrifican, a los demonios lo sacrifican, y no a Dios. Y no quiero que ustedes sean partícipes con los demonios. No pueden beber la copa del Señor y la copa de los demonios; no pueden participar de la mesa del Señor y de la mesa de los demonios. ¿O provocaremos a celos al Señor? ¿Acaso somos más fuertes que él? Una pequeña amenaza al final, sí. Buena suerte. Sí, claro. ¿Quieren pelear con Dios? Buena suerte. Sí, sí. Sí, especialmente en el versículo 18: consideren a Israel según la carne, los que comen de los sacrificios, ¿no son partícipes del altar? Él está usando la misma palabra. Es la participación en la sangre de Cristo, la participación en el cuerpo de Cristo, participar del único pan, partícipes del altar: es la misma palabra, koinonía en griego, en distintas formas. Y lo mismo con los partícipes con los demonios más adelante. Así que San Pablo aquí describe muy claramente lo que intenta describir, cómo funciona la Eucaristía o qué hace. Sus comparaciones inmediatas sirven para enseñarles, porque lo que ellos no conocen es la Eucaristía; conocen los sacrificios que se hacen en el Templo de Jerusalén, conocen los sacrificios paganos, viven en Corinto, por Dios, saben lo que pasa ahí. Y entonces él dice que esto funciona exactamente igual que eso. Sí. Así que Pablo dice muy claramente y de forma directa que la Eucaristía es un sacrificio. Sí, como el sacrificio que se ofrece en el altar del Templo de Jerusalén, que todavía estaba en funcionamiento en ese momento, como los sacrificios a los demonios que se ofrecen en esos templos paganos. Es la misma forma: la Eucaristía es un sacrificio en el mismo sentido, no en un sentido metafórico; no está haciendo una comparación metafórica, es una comparación directa. Y esta es, otra vez, la primera cosa escrita sobre la Eucaristía, está en esa carta. Así que hay un montón de distinciones que han surgido desde el siglo XVI para intentar disociarse de eso. La razón, para dejar constancia, por la que decimos Reforma y ese tipo de cosas es que esto no es algo propiamente protestante, porque nuestros amigos luteranos tienen sacerdotes, tienen altar, y ven la Eucaristía como un sacrificio; al menos algunos de nuestros amigos anglicanos también lo hacen, hay mucha diversidad en la comunión anglicana, digamos. Sí. Sí, pero al menos ahí hay una tradición fuerte de ver las cosas de esa manera. Así que esto no es solo protestantismo: es realmente una corriente particular del protestantismo que, francamente, arranca con Juan Calvino. Sí, pero como en Estados Unidos... Estados Unidos es simplemente protestante, la cultura es profundamente protestante, y no solo protestante, sino puritana, y en la medida en que es puritana y calvinista, esta es una corriente muy común en el protestantismo evangélico estadounidense, digamos, por eso empecé con mi pregunta medio en broma: ¿no es solo un símbolo? Sí. Ya sabes, no solo representa otra cosa. Y así, para alejarse de la idea de sacrificio, altar y sacerdocio en la Eucaristía, se hacen varias distinciones que, francamente, no son distinciones que puedas hacer bíblicamente. Sí, claro. Que no están en la Biblia. Es decir, por supuesto que puedes hacer distinciones en el discurso teológicamente, pero sola scriptor, si no están ahí, la pregunta posible es: ¿la distinción que haces es coherente con lo que está en la Escritura, aunque no se encuentre en ella? Claro, claro. Y por ejemplo, cuando Cristo instituye la Eucaristía, dice, como suele traducirse al inglés, no por casualidad: hagan esto en memoria de mí. Ven, lo llama un recuerdo o un memorial. Sí, claro, y eso no es un sacrificio, es un memorial; pero, como es mi costumbre, remito a la gente a Números 10:1 en la Septuaginta, donde se usa la misma palabra griega memorial para referirse a los sacrificios de la Fiesta de las trompetas. Así que los sacrificios son, por definición, memoriales; no es que una cosa sea un sacrificio y otra sea esto. Esto les ayudará a pensar en ello. Así que llamarlo memorial no significa que no sea un sacrificio. Sí, de hecho, puede muy bien significar sacrificio, sí. Y así te encuentras con todo ese lenguaje de recordar a alguien ante Dios, que no significa pararse ante Dios y decir: sí, lo recuerdo; o, Dios, déjame recordarte sobre el hermano Robert, por si lo olvidaste. Sí, eso no es lo que significa; se trata realmente de un sacrificio en favor de otro. Sí, una ofrenda. Así que también aparece esta distinción entre altar y mesa. Muchas iglesias no quieren llamarlo altar; tienen una mesa, y con la frecuencia con que celebran la Eucaristía, y llegaremos a no querer llamarla Eucaristía aquí en un minuto, pero bueno, la llaman mesa en lugar de altar, y el problema es que en la mayoría de las lenguas antiguas, hasta el latín, se trata literalmente de la misma palabra: ARA significa tanto mesa como altar. Y solo tienes que volver a 1 Corintios 10:14-22, que acabamos de leer: no pueden participar de la mesa del Señor y de la mesa de los demonios. Sí, ¿qué es la mesa de los demonios? Se refiere, claramente, a un altar pagano. Así que él puede ir y venir entre altar y mesa. Sí, lo mismo. Hay un altar a Dios y hay un altar a los demonios; no adoren al equivocado, y el altar de Dios también puede llamarse la mesa del Señor, y el altar de los demonios puede llamarse la mesa de los demonios.",
                original:
                  "um and so in in chapter 10: 14- 22 he's um actually at this one so he Segways back and forth between a couple of topics in this whole section of First Corinthians those two main topics being hey don't eat food offered to Idols right right and here's 18 reasons why um on the one hand and then on the other hand talking about the Eucharist yeah because these things are linked you're these things are linked and he makes that link explicit here yeah you're either on team God or team demons yeah right yeah okay so 1 Corinthians chapter 10: 14-22 therefore my beloved flee from idolatry I speak as to sensible people judge for yourselves what I say the cup of blessing that we bless is it not a participation in the blood of Christ the bread that we break is it not a participation in the body of Christ because there is one bread we who are many are one body for we all partake of the one bread consider the people of Israel are not those who eat the sacrifices participants in the altar what do I imply then that food offered to Idols is anything or that an idol is anything no I imply that what pagans sacrifice they offer to demons and not to God I do not want you to be participants with demons you cannot drink the cup of the Lord and the cup of demons you cannot partake of the table of the Lord and the table of demons shall we provoke the Lord to jealousy are we stronger than he little threat there at the end yeah good luck yeah right you want to fight it out with God good luck yeah yeah um yeah especially Verse 18 there right consider the people of Israel are not those who eat the sacrifices participants in the altar which is right he's using that same word right it's participation in the blood of Christ participation in the body of Christ partake of the one bread participants in the altar it's the same word it's kinia in Greek various forms right um and the same thing with participants with demons later on right so St Paul here very clearly what he's trying to describe sort of how the Eucharist works or what it does right uh his immediately immediate comparisons right to teach them cuz they what they don't know about is the Eucharist they know about oh there's sacrifices that go on at the Temple of Jerusalem they know about pagan sacrifices they live in Corinth for Pete's sake right they know what goes on there right and so he's saying this works just like that yeah so say Paul is very clearly and directly saying the Eucharist is a sacrifice yep like the sacrifice that happens on the altar at the temple in Jerusalem which was still in operation at this point like the sacrifices to Demons that go out in those Pagan temples right in the same way right the Eucharist is a sacrifice in the same sense not in a metaphorical sense he's not making a metaphorical comparison it's a direct comparison right and this is again the earliest written thing about the Eucharist it's from that that letter so um there are a bunch of distinctions that have come up uh since uh the 16th century to try to dissociate um and the reason for the record that we're saying reformation and that kind of thing is that this isn't a Protestant thing per se right because our Lutheran friends have priests have an altar see the Eucharist as a sacrifice right at least some some uh number of our Anglican friends right do there's a lot diversity in the Anglican communion shall we say Yes um yep but at least there there is at least a strong tradition there of uh of seeing things that way so this isn't this isn't just protestantism this is really a particular thread of protestantism that really frankly kind of gets started with John Calvin yeah but since in the United States um the United States is just Protestant the culture is deeply Protestant and not just Protestant but Puritan and in so far as Puritan calvinist this is a very common threat in American Evangelical protestantism shall I say which is why I started out with my half joking question isn't it just a symbol yeah you know it doesn't just this stand for something else right and so to try to get away from the idea of sacrifice alter priesthood with the Eucharist there are a number of distinctions that get made um that are frankly not distinctions you can make biblically yeah right yeah right that like they're not there in the Bible I mean you could certainly make distinctions in speech theologically right but solo scriptor you know um if they they're not there the question possible the question is you know is the distinction you're making consistent with what's in the scripture even if it's not found in the scripture right right and so for example you get well when when Christ inst institutes the Eucharist right he says as it's usually translated in English not coincidentally uh do this in remembrance of me see he calls it a reme remembrance or a memorial yeah right and see that's not a sacrifice it's it's a memorial but as is my want I refer people to numbers 10:1 in the septent uh where um the same Greek word memorial is used to refer to the sacrifices on the Feast of trumpets so sacrifices are then by definition memorials there's not right one thing is a sacrifice and another is a this will help you to think about this right so calling it a memorial does not mean not a sacrifice yeah I mean in fact it may very well mean sacrifice yeah like and so thus you get all this language in there of remembering someone before God that doesn't mean to stand before God and say yeah I remember him you know or you know or even like God let me remind you about about brother Robert you know in case you forgot yeah that's not what that is it's it's really about a sacrifice on behalf of someone else yeah you know an offering yeah so you also get this distinction made between an altar and a table so a lot of churches right they don't want to call it an altar they'll have a table where however often they do the Eucharist we'll get to not wanting to call it the Eucharist here in a minute but um the uh they they'll call it a table right instead of an altar and the problem is this is literally the same word right in most ancient languages up to it including Latin ARA means both table and Altar and you could just look back at 1 Corinthians 10 14-22 that we just read right you cannot partake of the table of the Lord and the table of demons yeah what's the table of demons he's is referring to well clearly a pagan altar right so he can switch back and forth between Altar and table yeah the same there's there's a there's a there's there's an altar to God and there's an altar to Demons don't don't worship the wrong one and and the altar to God can also be called the table of the Lord and the altar to Demons can be called the table of demons",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.11.28-1Cor.11.29"],
      text: "El Catecismo extenso lo cita para el examen y la recepción indigna (Filareto, pregunta 341).",
    },
    {
      refs: ["John.6.54", "John.6.56"],
      text: "El Catecismo extenso lo cita para la unión con Cristo y la vida eterna (Filareto, pregunta 342).",
      apologists: {
        arguments: [
          {
            title:
              "Juan 6 trata de la Eucaristía: la carne y la sangre son alimento y bebida reales; responde en el episodio a las lecturas que lo toman como metáfora o como añadido de una comunidad posterior",
            quotes: [
              {
                speaker: "the hosts of The Lord of Spirits",
                work: "Lord of Spirits - Thanksgiving [Ep. 55]",
                outlet: "Ancient Faith",
                date: "4 de febrero de 2025",
                locator: "Minutos 2:22:11 a 2:34:33",
                url: "https://www.youtube.com/watch?v=W5HhTyuo6Dg&t=8531s",
                text: "que eso les suena absurdo, por lo que dicen a continuación. Sí, bien, entonces, versículo 52: los judíos dicen que suena absurdo. Los judíos entonces disputaban entre sí diciendo: ¿cómo puede este hombre darnos su carne para comer? Entonces Jesús les dijo: de cierto, de cierto les digo que si no comen la carne del Hijo del Hombre y beben su sangre, no tienen vida en ustedes. El que se alimenta de mi carne y bebe mi sangre tiene vida eterna, y yo lo resucitaré en el último día, porque mi carne es verdadera comida y mi sangre es verdadera bebida. El que se alimenta de mi carne y bebe mi sangre permanece en mí, y yo en él. Como el Padre viviente me envió, y yo vivo por el Padre, así también el que me come vivirá por mí. Este es el pan que descendió del cielo, no como el F, no como el pan que comieron los padres y murieron; el que come de este pan vivirá para siempre. Jesús dijo estas cosas en la sinagoga, mientras enseñaba en Capernaum. Sí, y ese último versículo es importante, porque no tuvimos el escenario al principio: solo nos dijeron que fueron a buscar a Jesús y lo encontraron en Capernaum. Pero en realidad está diciendo todas estas cosas en la sinagoga, mientras enseña en la sinagoga. Sí, exacto, lo cual parece especialmente extraño para mucha gente; esto no es lo que vinimos a ver hoy. Sí. Bueno, hablamos un poco de la comparación y el contraste que se da aquí con el maná, el pan del cielo del Antiguo Testamento. También hay un pequeño vínculo con lo que ocurre con los panes de la proposición, porque Cristo aquí conecta el llegar a conocer a Dios y aprender de Dios, este elemento relacional, con el comer del pan, de la misma manera en que el pan de la proposición se comía en la presencia de Dios. Así que hay una conexión entre comer el pan y acercarse a Dios, que también está entrelazada ahí. Algunos de los versículos que salteamos lo desarrollan un poco más, pero bueno, ya fue lo bastante largo. Claro. Pero entonces, otra vez, no pretendemos atacar a los oyentes protestantes que puedan seguir escuchando, pero este pasaje que acabamos de leer, y creo que esto de nuevo viene de la misma clase de pensamiento reaccionario contra el catolicismo romano medieval, que habla muy claramente de comer la carne de Cristo y beber su sangre. Ha habido muchos esfuerzos históricos, desde algunos sectores, por argumentar que esto no tiene nada que ver con la Eucaristía. Sí. Y esos argumentos son bastante raros y no muy buenos. Así que uno de estos argumentos es realmente cir... y la «D» de este argumento la hizo Rudolph boltman, que era un alemán del siglo XX. Así que al menos estoy diversificando a quién critico. Era una especie de coco en las clases de Escritura cuando yo estaba en el seminario. No era malo del todo, no lo sabría, más bien en su mayoría malo, malo en todo. Solo hay una cosa que se puede hacer. Tenía muchas citas que ahora resultan súper irónicas, como: ¿quién podría creer en la resurrección de los muertos en la era de la radio? Uy, uy, estamos en la era de los inalámbricos, ¿cómo podríamos creer en esta superstición primitiva? Es el año en curso, así que es increíble, un erudito de la AAL schol haciendo el argumento del año en curso. Sí, excelente. Pero lo que esto se basa, otra vez, en la prueba A de Bolton, se encuentra más extendido de lo que debería. La gente ha notado que, sobre el Evangelio de San Juan, los lugares tradicionales a los que irías a buscar cosas sobre los sacramentos en los otros evangelios no están en el Evangelio de San Juan. ¿Qué quiero decir con eso? Por ejemplo, está esta cosa extraña en la forma en que se narra el bautismo de Cristo. El bautismo de Cristo está en el Evangelio de San Juan, pero lo que se narra ahí tiene algo raro: no describe en realidad el bautismo. Sí, exacto. Va y se relaciona con San Juan el Precursor, y luego habla de él saliendo del agua. Así que San Juan evita los sacramentos, como si los salteara. Y algo todavía más importante: el Evangelio de San Juan no tiene la institución de la Eucaristía. Cuando llegas al lugar de la cena mística en el Evangelio de San Juan, describe a Jesús lavando los pies de los discípulos, y no describe que instituya la Eucaristía. Sí, exacto. Eso está en los otros tres evangelios. Y entonces, con Bolton y algunos de los otros que sostienen este argumento, es en parte una reliquia de esa visión, ya muy desactualizada, de que los evangelios, sobre todo el de San Juan, eran una composición independiente y extraña que no tenía nada que ver con los demás, y que fueron producidos por distintas comunidades. Esta es la llamada «communities WR books Theory». Sí. Lo que me dice que esta gente nunca fue miembro de un comité, pero sí, a veces una comunidad puede traducir libros; pero no, son personas individuales las que hacen la traducción, y luego los comités discuten sobre ella, y eso retrasa el proceso. Claro, claro. Así que la idea es esta: lo que sea que veamos, tenemos que aislar el Evangelio de San Juan, y entonces cualquier rasgo que queramos notar, que refleje la comunidad que lo produjo. Y entonces la comunidad joanina, claramente, como no está ahí la institución de la Eucaristía, y el bautismo se omite, era una comunidad que no tenía sacramentos. Sí. O San Juan mismo, si tenemos a este escritor, que por supuesto la mayoría de los que sostienen esta teoría no sostendrían que fuera el verdadero San Juan, pero me desvío. Que el autor o los autores del Evangelio de San Juan estaban en contra de los sacramentos. Así que una vez que haces ese argumento y llegas a decir que cuando Cristo le dice a San Nicodemo que debe nacer de agua y del Espíritu, eso no puede referirse al bautismo, porque tienes este compromiso a priori: San Juan está en contra del bautismo, está en contra de los sacramentos. Y entonces, cuando Cristo, en Juan 6, habla de comer su cuerpo, comer su carne y beber su sangre, no puede estar hablando de la Eucaristía, porque San Juan y su comunidad no tenían la Eucaristía, no hacían sacrificio. Por eso digo que esto es como un argumento circular de manual: asumir lo que quieres probar. Claro, claro, exactamente. Tomas la mitad de los datos, argumentas a favor de una conclusión basada en esa mitad de los datos, y después usas esa conclusión para excluir la otra mitad de los datos. Bueno, no lo intenten en casa, chicos. Ni en ningún otro lado, la verdad. Sí, definitivamente no en la escuela, mal. Esto es una pérdida de tiempo, esto es sofistería. Sí, eso no cuela. A veces también se escucha: bueno, miren, vamos a aceptar que San Juan es realmente San Juan, o solo que la comunidad de San Juan era una iglesia realmente existente de la que tenemos evidencia, que tenía la Eucaristía. Pero Cristo no instituye la Eucaristía sino justo antes de su muerte, mientras que Juan 6 ocurre mucho antes. Entonces, ¿cómo puede Cristo estar hablando de la Eucaristía si todavía no la ha instituido? ¿Están tratando de decir que no se le había ocurrido, que todavía no la había pensado, y que de pronto dice: ah, espera, no estoy seguro? Normalmente no dicen eso. Normalmente dicen algo como: nadie habría entendido de qué estaba hablando. Y es como si Cristo hablara de cosas durante su ministerio que nadie entendió hasta después de la resurrección. Claro. Eso es lo que dicen los evangelios una y otra vez: que Cristo decía cosas todo el tiempo durante su ministerio terrenal que nadie entendió hasta después de la resurrección. Exacto. Así que esto sería lo de siempre, cargas de profundidad, como te gusta hacer, y sobre todo en este caso, porque en el propio Juan 6 se nos dice literalmente que nadie entendió lo que él decía. Sí. Después de que nos quedamos ahí, los discípulos se acercan a Jesús y dicen básicamente: esta es una palabra dura, ¿de qué estás hablando? Sí, y él les dice: muchachos, ¿también ustedes se van a ir? Sí, sí. Me parece muy notable que en ningún momento de esto diga: esperen, perdón, muchachos, ustedes malinterpretaron; esto es una metáfora de otra cosa, así que tranquilos, no estoy hablando de comer carne ni de beber sangre, me refiero a comer carne, entre comillas, y beber sangre, entre comillas. Claro, claro. Y si, supongamos por el bien del argumento que la Eucaristía es, entre comillas, solo simbólica. Pou acaba de romper otro lápiz. Digamos que es solo, claro, una sensación nebulosa y esotérica de que es el cuerpo y la sangre de Cristo; lo representa de alguna manera, o algo así, pero ¿por qué sería esta la metáfora que elegirías? Sí, una metáfora de canibalismo, aparentemente, si no hay ninguna realidad detrás. Es como canibalismo, muchachos. Ay, si pudieras elegir cualquier metáfora en el mundo, podrías elegir cualquier metáfora, porque la metáfora no tiene conexión con la realidad, es puramente una metáfora. ¿Por qué elegirías esta? Sí, quiero decir, incluso entre los paganos el canibalismo se consideraba algo súper espeluznante; solo ciertos paganos hacían este tipo de cosas. Claro, y lo sabemos por fuentes romanas posteriores. Exacto, exacto, exacto. Se juntan y comen el cuerpo y beben la sangre de este Cresus. Sí, son como: estos cristianos son caníbales, ¿qué pasa? Sí. Los acusan de",
                original:
                  "that sounds nuts to them by what they say next yes yeah so okay verse 52 the Jew the Jews say that it sounds nuts uh the Jews then disputed among themselves saying how can this man give us his flesh to eat so Jesus said to them truly truly I say to you unless you eat the Flesh of the son of man and drink his blood you have no life in you whoever feeds on my flesh and drinks my blood has eternal life and I will raise him up on the last day for my flesh is True Food and my blood is true drink whoever feeds on my flesh and drinks my blood abides in me and I in him as the living father sent me and I live because of the father so whoever feeds on me he also will live because of me this is the bread that came down from heaven not the bread like the F not like the bread the fathers ate and died whoever feeds on this bread will live forever Jesus said these things in the synagogue as he taught at Capernaum yeah and uh that last verse is is important because uh we didn't get the setting at the beginning we were just told they went looking for Jesus and found him in capernum yeah but he's actually saying all these things in the synagogue as he's teaching in the synagogue yeah right which kind of seem especially weird to to a lot of what this isn't what we came here for today uh yeah um right um so um we talked a little bit about the the comparison and contrast that goes on here with the Mana right the bread bread from heaven in uh the Old Testament there's also a little bit of a connection to what's going on with the showbread right in that Christ here connects coming to know God right and and learning from God this relational element with the eating of the bread right in the same way in which the showbread was eaten in the presence of God right so there's this there's this connection between eating the bread and drawing close to God that's also sort of interwoven right in there and some of the verses we skipped developed that a little more but I mean it was long enough right sure um but so um so again uh um uh we're we're not intending to pick on whatever uh Protestant listeners may still be listening but um this passage we just read right and again I think this really stems from some of the same kind of reactionary thinking against medieval Roman Catholicism uh which speaks very clearly about eating Christ's flesh and drinking his blood uh there have been a lot of historical efforts from some quarters uh to try to argue that this has nothing to do with the Eucharist yeah um right and those and those arguments are kind of weird um and not very good so uh one of these arguments is kind of really cir um and sort of the the D of this argument was made by Rudolph boltman um who's a 20th century German so at least I'm branching out in who I pick on he was kind of the the Boogeyman in scripture classes when I was in seminary he wasn't all bad I I wouldn't know just mostly mostly bad all bad there's only one thing you can do he had he had a lot of quotes that are super ironic now right like who could believe in the resurrection of the Dead in the age of radio um wow wow we're in the age of the wireless people how could we possibly believe in this primitive Superstition it's current year so it's amazing AAL schol scholar making the current year argument yes great um so so but but um what this is based on again Bolton's exhibit a but this is found more widely than it should be uh people have noticed about St John's gospel that um sort of the traditional places you'd go to look for things about the sacraments in the other gospels aren't there in St John's gospel what do I mean by that well for example there's this weird little thing in the way Christ baptism Christ baptism is in St John's gospel but the way it's narrated there's this weird thing where it doesn't actually describe the baptism yeah right right he goes and he interacts with St John the Forerunner and then it talks about him coming up out of the water yeah so St John is avoiding sacraments like it skips right and even more sort of major is St John's gospel doesn't have the institution of the Eucharist in it yeah when you get to the place of the mystical supper in St John's gospel it describes him washing the disciples feet Christ washing the disciples feet uh and doesn't describe him instituting the Eucharist yeah right that's in that's in the other three gospels um and so with boltman and some of the other people who make this argument it is in part A Relic of this older now very outdated view that the gospels especially St John's gospel was sort of this weird independent composition that had nothing to do with the other ones and that it was that they were produced by these different communities right this is the communities WR books Theory yeah uh which tells me that these people have never been a member of a committee um but yeah Community sometimes can translate books uh but no they don't individual people do the Translating and then committees argue about it right right and hold up the process right um so the uh but so there's this idea that oh whatever we see we have to isolate St John's gospel and then whatever we see in it whatever features we want to notice that then reflects the community that produced it and so the johanning community well clearly since there's not the institution of the Eucharist there and baptism get gift this is a community that didn't have sacraments yeah or St John himself if we have this writer who of course most of the people who hold this Theory wouldn't hold was the actual St John but I digress right that the author or authors of St John's gospel were anti-scaling sacraments right so once you then make that argument and you come to say Christ telling St Nicodemus that he had to be born of water and the spirit that can't be referring to baptism right because you've got this AR priori commitment because St John is anti baptism he's anti-ac and so when Christ and John 6 talks about eating his body eating his flesh and drinking his blood he can't be talking about the Eucharist because St John and his community didn't have the Eucharist they didn't do sacrifice this is why I say this is like a textbook circular argument right of assuming what you want to prove right right right exactly exactly you take half the data argue for a conclusion based on that half the data and then use that conclusion to exclude the other half of the data right um don't try this at home kids yeah or anywhere really yes definitely not in school bad this is a waste of time this is sophistry right um yeah so right that dog don't don't hunt right um you sometimes also get uh well well look um you know we're we're going to accept that say John is actually St John or just that St John's Community was an actually existing church that we have evidence of right that had the Eucharist um but right Christ doesn't Institute the Eucharist until like right before his death whereas John 6 takes place like way before that right so how can how can Christ be talking about the the Eucharist right because he hasn't instituted it yet are they trying to say like he hasn't thought it up hasn't come up with that yet and he's like oh wait I'm not sure I'm not usually they don't say that usually they say something like no one would have understood what he was talking about and it's like what Christ talked about things during his ministry and no one understood what he was talking about until after the resurrection you don't say right yeah like the gospels literally say over and over again that Christ said things all the time right during his Earthly Ministry that no one understood until after the resurrection right right there so this would be par for the course depth charges right as as you like to do and and especially in this case we're literally told in John 6 in the text itself that no one understood what he was talking about yeah after we left off the disciples come to Jesus and say basically like this is a hard saying like what are you talking about right yeah he's like guys yeah will you now also leave right like yeah yeah it's really notable I think that he doesn't at any point in this say okay wait sorry guys guys you misunderstood I this is like a metaphor for something else uh so so calm down I'm not talking about eating flesh or drinking blood I mean I'm talking about eating flesh quote unquote drinking blood quote unquote right right and and if right so let's let's suppose for the sake of argument that the Eucharist is quote unquote just symbolic Pou just broke another pencil right let's say it's just right this is just some nebulous woow woo sense that it's the body and blood of Christ right it represents it in some way or something but isn't right why would this be the metaphor you'd choose yeah a a cannibalism metaphor apparently if there's no reality to it it's like cannibalism guys oh if you could choose any metaphor right you could choose any metaphor in the world because the metaphor has no connection to the reality it's purely a metaphor why would you choose this one yeah I mean this is you know even among pagans cannibalism was considered to be super Oogie you know only certain pagans even did this kind of thing right yeah well and we know that from later Roman sources right right right they get together and eat the body and drink the blood of this cresus right yeah they're like the these Christians are like cannibals what's wrong yes right they get accused of",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Luke.22.19"],
      text: "El Catecismo extenso lo cita para la oración, la fe y el recuerdo de quienes asisten sin comulgar (Filareto, pregunta 344).",
      apologists: {
        arguments: [
          {
            title:
              "Cristo instituye la Eucaristía como la Pascua renovada, antes del acontecimiento, sin otro fin declarado que su regreso",
            quotes: [
              {
                speaker: "the hosts of The Lord of Spirits",
                work: "Lord of Spirits - Thanksgiving [Ep. 55]",
                outlet: "Ancient Faith",
                date: "4 de febrero de 2025",
                locator: "Minutos 1:16:30 a 1:18:29",
                url: "https://www.youtube.com/watch?v=W5HhTyuo6Dg&t=4590s",
                text: "porque bueno, ahí no es donde está el foco, y vemos lo mismo con la Eucaristía. Cristo describe cómo se va a celebrar la Eucaristía; dice: este es mi cuerpo, partido por ustedes, antes de que su cuerpo hubiera sido partido; esta es mi sangre derramada por ustedes, antes de que su sangre hubiera sido derramada. Hay una participación incluso antes del acontecimiento, en términos de tiempo histórico lineal. Así que lo instituye antes de que el acontecimiento ocurra para transmitir lo mismo; no solo como paralelo, porque lo hace en la Pascua. Sí, esta es la nueva Pascua, la Pascua renovada: Cristo lo hace en la Pascua, y no lo presenta simplemente como que su muerte y su resurrección van a ser un acontecimiento histórico que algún día estará en un pasado lejano, y que nosotros reflexionaremos mirando hacia atrás, porque eso ni siquiera era posible. No es como decir: acuérdense de cuando mañana... Sí, sí. Y esto es algo continuo; él está creando de nuevo, no es solo este singular Acto Poderoso de Dios en la historia, sino una realidad que va a continuar sin un final declarado, salvo el regreso de Cristo, el fin del mundo. Sí, y ese es el lenguaje de: cada vez que hagan esto anunciarán su muerte y su resurrección hasta que él venga. Así que es algo continuo, y el hecho de que esta relación temporal entre el momento en que Cristo instituye la Eucaristía y el momento en que realmente muere y resucita se reitera en nuestra",
                original:
                  "because right that's not where it's focused um and uh we see this the same thing right the same thing with the Eucharist right right that Christ describes how the Eucharist will be celebrated right it says this is my body broken for you before his body had been broken yeah this is my bloodshed for you before his blood had been shed right there's a participation even before the event in terms of historical linear time right and and so he's instituting this before the event happens to convey the same thing right not just to parallel because he's doing this at Passover yeah this is the new Passover the renewed Passover CHR is doing it at Passover and he's not just presenting this as his death and his resurrection are going to be this historical event that will someday be in the distant past and we will reflect and look back at right because that wasn't even possible you know cuz yeah he's not like okay remember when tomorrow uh yeah yeah right and this is so this is an ongoing he's creating again it's not just this singular Mighty Act of God in history but it is this reality that will continue with no stated Endo right other than right the return of Christ the end of the world right um right and that's the language of as often as you do this you'll Proclaim his death and his resurrection until he comes right um so it is this ongoing thing and the fact that this temporal relationship between uh when Christ institutes the Eucharist and when he actually dies and rises again right is reiterated in our",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.11.26"],
      text: "El Catecismo extenso lo cita para la continuación hasta la venida de Cristo (Filareto, pregunta 350).",
    },
    {
      refs: ["John.19.34", "John.20.29"],
      text: "Mogila lo cita para el agua y la sangre, y para la fe y la vista (Mogila I.107).",
      apologists: {
        arguments: [
          {
            title:
              "La sangre y el agua del costado traspasado recuerdan el costado de Adán abierto en Génesis 2 y se conectan con la Eucaristía y con la Iglesia como esposa",
            quotes: [
              {
                speaker: "the hosts of The Lord of Spirits",
                work: "Lord of Spirits - Thanksgiving [Ep. 55]",
                outlet: "Ancient Faith",
                date: "4 de febrero de 2025",
                locator: "Minutos 2:43:58 a 2:46:03",
                url: "https://www.youtube.com/watch?v=W5HhTyuo6Dg&t=9838s",
                text: "El Evangelio de Juan y luego se la llama madre junto a la cruz, y la forma en que ella se convierte en Eva, ¿no? Ahí él recurre a toda esta imaginería, y una de esas imágenes que creo que pasamos por alto o de la que hablamos rápido es la de esa sección de Juan 19 que describe la apertura del costado de Cristo, cuando Cristo es traspasado con la lanza. La apertura de su costado nos hace volver al costado de Adán, que se abre en Génesis, capítulo 2, para crear a la mujer, para crear a su esposa; y cuando la ve, dice: 'Este es hueso de mis huesos y carne de mi carne'. Y se nos dice que por esto los dos se hacen una sola carne. Entonces, cuando el costado de Cristo se abre, salen sangre y agua, y elijan cualquier padre de la Iglesia y busquen ese pasaje: esto se conecta con el agua del bautismo y con la sangre de la Eucaristía, que, como hemos hablado muchas veces, forman a su esposa, la Iglesia. Así que parte de esta imaginería de comer la carne de Cristo es hacerse una sola carne con Cristo. Eso es interesante. Pero la sangre que sale de su costado, la sangre que interviene en la Eucaristía; para cualquiera que esté mínimamente familiarizado con la Torá, la idea de beber la sangre de Cristo",
                original:
                  "John's gospel and then gets referred to as mother uh at the side of the Cross and the way sha becomes Eve right um so there's there he he's drawing on all of this imagery and one of those that I think we pass by or quickly uh is the um in that section of John 19 it describes the opening of Christ side right when Christ is pierced with the spear right um and the opening of his side is supposed to call us back to Adam's side right being opened in uh Genesis chapter 2 and Adam's side is open to create woman to create his bride and when he sees her he says this is bone of my bone and Flesh of My Flesh H right and we're told because of this the Two Become One flesh right and so when Christ's sight is open blood and water flow out right and pick your church father and look this passage up right this is connected to right the water of baptism and blood in the Eucharist right which sort of create right as we've talked about many times his his his uh bride the church and so part of this imagery of eating Christ's flesh is becoming one flesh with Christ that's cool right uh this imagery um but so the the blood uh there right yeah coming out of his side the blood being involved in the Eucharist to anyone who's passingly familiar with the Torah right the idea of drinking Christ's",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
  ],
  passages: {
    title: "Los pasajes de la posición ortodoxa",
    lede: "Los versículos que la tradición ortodoxa cita sobre la Eucaristía, completos y con su propia lectura.",
    officialLabel: "Lo que enseñan los documentos de la tradición ortodoxa.",
    apologistsLabel: "Cómo lo defienden los apologistas ortodoxos.",
  },
  videos: {
    subtitle: "Creadores ortodoxos explican y defienden esta postura. Los videos se abren en YouTube.",
    items: [],
  },
  objections: {
    subtitle:
      "Objeciones a la postura ortodoxa. Abre cada una para leer en profundidad la respuesta de los textos ortodoxos.",
    videosSubtitle: "Creadores ortodoxos que responden a esta objeción. Los videos se abren en YouTube.",
    order: [],
    items: [],
  },
  life: {
    intro: [
      "Para el Catecismo extenso de Filareto, primero se preparan los elementos, luego los fieles y por último se consagra el sacramento (pregunta 323) {c:OPhilaret323|Filareto, pregunta 323}.",
      "Y la Confesión de Dositeo dice: «Pues una es la adoración de la santa Trinidad y del cuerpo y la sangre del Señor» {c:ODositheusXVII|Dositeo XVII}.",
    ],
    items: [
      {
        id: "CV-1",
        label: "Preparar los elementos",
        text: "Se prepara primero el pan, que es leudado, puro y de trigo (preguntas 323 y 328).",
        sources: [
          {
            citations: ["OPhilaret323"],
            label: "Filareto, pregunta 323",
          },
          {
            citations: ["OPhilaret328"],
            label: "Filareto, pregunta 328",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Examen, penitencia, ayuno y oración",
        text: "Quien comulga debe examinar su conciencia ante Dios y limpiarla del pecado por la penitencia, con la ayuda del ayuno y de la oración (pregunta 341).",
        sources: [
          {
            citations: ["OPhilaret341"],
            label: "Filareto, pregunta 341",
          },
        ],
      },
      {
        id: "CV-3",
        label: "La frecuencia, según el catecismo histórico",
        text: "El catecismo ruso del siglo XIX llama a quienes quieren vivir religiosamente a confesarse con su padre espiritual y comulgar cuatro veces al año, o incluso cada mes, y exige a todos comulgar por lo menos una vez al año (pregunta 343).",
        sources: [
          {
            citations: ["OPhilaret343"],
            label: "Filareto, pregunta 343",
          },
        ],
      },
      {
        id: "CV-4",
        label: "Participar sin comulgar",
        text: "Quienes no comulgan pueden y deben participar en la Liturgia por la oración y la fe, y sobre todo por el recuerdo continuo de nuestro Señor Jesucristo (pregunta 344).",
        sources: [
          {
            citations: ["OPhilaret344"],
            label: "Filareto, pregunta 344",
          },
        ],
      },
      {
        id: "CV-5",
        label: "La adoración",
        text: "La Confesión de Dositeo dice: «Pues una es la adoración de la santa Trinidad y del cuerpo y la sangre del Señor».",
        sources: [
          {
            citations: ["ODositheusXVII"],
            label: "Dositeo XVII",
          },
        ],
      },
    ],
  },
  authority: {
    subtitle:
      "Las categorías de autoridad que los propios textos ortodoxos reconocen para sus textos, con su definición en palabras de los textos.",
    grades: {
      confession: {
        label: "Confesión de Dositeo (Jerusalén, 1672)",
        definition:
          "Confesión del Sínodo de Jerusalén de 1672. Pedro Mogila tiene la aprobación patriarcal de su revisión griega del 11 de marzo de 1643, limitada al griego y no a toda traducción posterior.",
        source: {
          citations: ["ODositheusXVII"],
          label: "Dositeo XVII",
        },
      },
      catechism: {
        label: "Catecismo extenso de Filareto (1839)",
        definition:
          "Catecismo sinodal ruso de 1839, con la numeración de preguntas de Schaff. Su descripción doctrinal no es un relevamiento de todas las Iglesias autocéfalas.",
        source: {
          citations: ["OPhilaret338"],
          label: "Filareto, pregunta 338",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
