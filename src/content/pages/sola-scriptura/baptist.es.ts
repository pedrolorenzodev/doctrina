import type { TraditionPage } from "@/content/model/page";
import type { CitationId } from "@/content/registry/citations";

export const solaScripturaBaptist = {
  doctrine: "sola-scriptura",
  tradition: "baptist",
  status: "draft",
  title: "La posición bautista",
  lede: "Cómo la línea de las convenciones bautistas entiende la Escritura, con sus propias fuentes.",
  teach: {
    subtitle:
      "Lo que enseñan la Confesión de New Hampshire y Fe y Mensaje Bautistas sobre la Escritura, con el lugar que cada texto ocupa entre ellos.",
    definition: {
      text: "La Confesión de New Hampshire dice de la Biblia: «la norma suprema por la que deben examinarse toda conducta humana, los credos y las opiniones».",
      grades: [
        {
          kind: "church",
          grade: "confession",
          basis: "Confesión de New Hampshire (1853), art. I",
        },
      ],
      sources: [
        {
          citations: ["BNHI"],
          label: "New Hampshire I",
        },
      ],
    },
    statements: [
      {
        id: "QE-1",
        short: "la norma suprema",
        text: "La Confesión de New Hampshire dice de la Biblia: «la norma suprema por la que deben examinarse toda conducta humana, los credos y las opiniones».",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Confesión de New Hampshire (1853), art. I",
          },
        ],
        sources: [
          {
            citations: ["BNHI"],
            label: "New Hampshire I",
          },
        ],
      },
      {
        id: "QE-2",
        short: "la revelación y Cristo",
        text: "Para Fe y Mensaje Bautistas, la Biblia fue escrita por personas inspiradas por Dios y es su revelación al ser humano. Dios es su autor, la salvación su fin y la verdad sin mezcla de error su contenido. La Escritura es la norma que examina la conducta, los credos y las opiniones religiosas; toda ella testimonia a Cristo, centro de la revelación divina.",
        grades: [
          {
            kind: "church",
            grade: "confession",
            basis: "Fe y Mensaje Bautistas (2000), art. I",
          },
        ],
        sources: [
          {
            citations: ["BBFMI"],
            label: "Fe y Mensaje I",
          },
        ],
      },
    ],
  },
  why: {
    intro: [
      "Para la Confesión de New Hampshire: «la Santa Biblia fue escrita por personas divinamente inspiradas y es un tesoro perfecto de instrucción celestial» {c:BNHI|New Hampshire I}.",
      "Fe y Mensaje Bautistas da su propia razón, centrada en la revelación divina y en Cristo (art. I) {c:BBFMI|Fe y Mensaje I}.",
    ],
    fathers: [],
    note: "Los mismos textos los leen de otro modo otras tradiciones: lo verás en {s:early-witnesses|Lo que escribieron los primeros cristianos}, que es una sección neutral.",
    closing:
      "Para Fe y Mensaje Bautistas, Dios es el autor de la Biblia, la salvación su fin y la verdad, sin mezcla de error, su contenido (art. I).",
  },
  scriptureSubtitle: "Los pasajes que los textos bautistas citan sobre la Escritura, y cómo los leen.",
  scripture: [
    {
      refs: ["Exod.24.4"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Deut.4.1-Deut.4.2"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Deut.12.32"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Deut.17.19"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Josh.1.7"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Josh.8.34"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Ps.19.7-Ps.19.10"],
      text: "Fe y Mensaje Bautistas (1925), I (1963 Annual, p. 270, columna derecha): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Ps.19.7"],
      text: "Segunda Confesión de Londres (1689), 1.7 nota (n) (1719 p. 30): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] the unlearned, in a due use of ordinary means, may attain to a sufficient understanding of them.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 1.7 nota (n) (1688 p. 7): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] those things which are necessary to be known, believed, and observed for Salvation, are so clearly propounded, and opened in some place of Scripture or other, that not onely the learned, but the unlearned, in a due use of ordinary means, may attain to a sufficient understanding of them.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 6–7.",
    },
    {
      refs: ["Ps.119.1-Ps.119.8"],
      text: "Fe y Mensaje Bautistas (1925), I (1963 Annual, p. 270, columna derecha): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270.",
    },
    {
      refs: ["Ps.119.11"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Ps.119.89"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Ps.119.105"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Ps.119.130"],
      text: "Segunda Confesión de Londres (1689), 1.7 nota (n) (1719 p. 30): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] the unlearned, in a due use of ordinary means, may attain to a sufficient understanding of them.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 1.7 nota (n) (1688 p. 7): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] those things which are necessary to be known, believed, and observed for Salvation, are so clearly propounded, and opened in some place of Scripture or other, that not onely the learned, but the unlearned, in a due use of ordinary means, may attain to a sufficient understanding of them.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 6–7.",
    },
    {
      refs: ["Ps.119.140"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Prov.30.5-Prov.30.6"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Isa.8.20"],
      text: "Segunda Confesión de Londres (1689), 1.8 nota (p) (1688 p. 7): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] being immediately inspired by God, and by his singular Care and Providence kept pure in all Ages, are therefore authentical; so as in all Controversies of Religion, the Church is finally to […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 6–7. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "Durbin introduce Is 8:20 como ejemplo, por medio del profeta Isaías, de la centralidad de la revelación de Dios en la historia, y lo lee: «A la ley y al testimonio; si no hablan conforme a esta palabra, es porque no tienen aurora.»",
            quotes: [
              {
                speaker: "Jeff Durbin",
                work: "Jeff Durbin: Sola Scriptura & Rome Pt. 3 | Biblical Support",
                outlet: "Apologia Studios",
                date: "12 de febrero de 2024",
                locator: "Minutos 1:33 a 1:59",
                url: "https://www.youtube.com/watch?v=smfg66pQP_c&t=93s",
                text: "Pero aquí hay un ejemplo, a través del profeta Isaías, de la centralidad de la revelación de Dios en la historia. Isaías capítulo 8 versículo 20. Escuchen ahora la palabra del Dios vivo y verdadero. A la ley y al testimonio: si no hablan conforme a esta palabra, es porque no tienen amanecer ni luz en ellos.",
                original:
                  "But here is an example through the prophet Isaiah of the centrality of the revelation of God in history. Isaiah chapter 8 and verse 20. Hear now the word of the living and the true God. To the law and to the testimony, if they will not speak according to this word, it is because they have no dawn or no light in them.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Isa.34.16"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Isa.40.8"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Jer.15.16"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Jer.36"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270.",
    },
    {
      refs: ["Jer.36.1-Jer.36.32"],
      text: "Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Matt.5.17-Matt.5.18"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Matt.15.9"],
      text: "Primera Confesión de Londres (1646), VII, p. 176: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] but onely the word of God contained in the Canonicall Scriptures.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "Ortlund lee Mt 15 y Mc 7 como Jesús dando prioridad a la Escritura sobre la tradición: los fariseos sostenían una ley oral de autoridad casi igual, y Jesús sopesa sus tradiciones contra el mandamiento escrito de Dios; la Biblia no necesita anticipar todos los errores posteriores, pues basta con que la Escritura sea la palabra inspirada de Dios y que las tradiciones orales no lo sean",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The ULTIMATE Case for Sola Scriptura",
                outlet: "Truth Unites",
                date: "19 de agosto de 2025",
                locator: "Minutos 21:00 a 23:32",
                url: "https://podcasters.spotify.com/pod/show/truth-unites/episodes/The-ULTIMATE-Case-for-Sola-Scriptura-e371tfb#t=1260",
                text: "es la priorización que hace Jesús de la Escritura por sobre la tradición en Mateo 15 y Marcos 7, donde dice: ¿por qué ustedes quebrantan el mandamiento de Dios por causa de su tradición? Ahora bien, lo que con frecuencia se responde es que este pasaje solo trata de tradiciones humanas, las tradiciones de los hombres, no de tradiciones divinas. Pero surge la pregunta de cómo alguien podría haber sabido que estas eran solo tradiciones de hombres. Jesús mismo afirma que los fariseos tenían una autoridad legítima, dada por Dios, para enseñar al pueblo de Dios. Se sientan en la cátedra de Moisés, así que hagan lo que ellos digan. Los fariseos mismos, en ese oficio de enseñanza con autoridad, no consideraban sus tradiciones como meramente humanas. Por eso es tan escandaloso que se les desobedeciera. Afirmaban tener una ley oral dada a Moisés, transmitida por sucesión lineal, y sostenían que tenía una autoridad comparable a la de la ley escrita de Moisés. Esto equivalía a una especie de teoría de las dos fuentes de la revelación divina, similar a la que encontramos, por ejemplo, en la Iglesia católica romana de hoy. F.F. Bruce dice: con el correr del tiempo se sostuvo que esta ley oral, como la misma ley escrita, fue recibida por Moisés en el Sinaí, y se le asignó la misma autoridad. De manera similar, D.A. Carson señala que los fariseos consideraban que su tradición oral tenía una autoridad casi igual, muy casi igual, a la del canon. Para defender esta visión de lo escrito y lo oral, dos formas de la ley de Moisés, los fariseos podrían haber hecho a Jesús la misma apelación que hoy se opone a la sola scriptura, y es: ¿dónde dice la Escritura explícitamente que tiene mayor autoridad que nuestras tradiciones orales? Bien, pero la respuesta es que la Biblia no necesita anticipar cada posible error posterior que pueda surgir después. Basta con saber que la Escritura es la Palabra de Dios inspirada, y que estas tradiciones orales no son la Palabra de Dios inspirada, y por lo tanto es razonable medir las tradiciones orales posteriores contra el texto inspirado de la Escritura. Igual que uno sopesaría las palabras de una persona menos confiable contra las de una más confiable, y eso es lo que Jesús hace en este pasaje.",
                original:
                  "is Jesus's prioritization of Scripture over tradition in Matthew 15 and Mark 7, where he says, why do you break the commandment of God for the sake of your tradition? Now, what will frequently be brought up in response is that, well, this passage is just about human traditions, the traditions of men, not divine traditions. But a question that arises is, how could anybody have known that these were just the traditions of men? Jesus himself affirms that the Pharisees had a legitimate God-given authority to teach God's people. They sit on the seat of Moses, so do whatever they say. The Pharisees themselves in that authoritative teaching office did not regard their traditions as merely human. This is why it's so scandalous that they were disobeyed. They claimed that they had an oral law for Moses handed down through successive lineage, and they claimed that it was comparable in authority to the written law of Moses. This amounted to a similar kind of two-source theory of divine revelation to what we find, for example, in the Roman Catholic Church today. F.F. Bruce says, as time went on, the claim was made that this oral law, like the written law itself, was received by Moses on Sinai, and it was accorded with the same authority. Similarly, D.A. Carson notes that the Pharisees regarded their oral tradition as having authority nearly equal, very nearly equal to the canon. To defend this view of written and oral, two forms of the law of Moses, the Pharisees could have made the same appeal to Jesus that is often put against sola scriptura today, and that is, where does the scripture explicitly say that it has greater authority than our oral traditions? Okay, but the answer to that is, the Bible doesn't need to anticipate every possible later error that will come about subsequently. It's enough to know that the Scripture is the inspired Word of God, and these oral traditions are not the inspired Word of God, and therefore it is reasonable to measure the subsequent oral traditions against the inspired text of Scripture. Just like you would weigh the words of a less trustworthy person against those of a more trustworthy person, and that is what Jesus does in this passage.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Durbin dice que en un conflicto con una tradición querida de los ancianos, Jesús enfrenta «Dios dice» contra «ustedes dicen», cita a Moisés y les reprocha anular la palabra de Dios por su tradición: para Durbin este es el principal ejemplo de Jesús sobre cómo tratar las tradiciones religiosas, con la palabra de Dios como suprema",
            quotes: [
              {
                speaker: "Jeff Durbin",
                work: 'Does The Bible Teach "Scripture Alone" (Sola Scriptura)?',
                outlet: "Apologia Studios",
                date: "22 de enero de 2020",
                locator: "Minutos 58:09 a 1:00:54",
                url: "https://www.youtube.com/watch?v=KPTdOoeofpc&t=3489s",
                text: "uno, cuando el Señor Jesús tuvo un conflicto, lo leímos al principio, miren Mateo 15: cuando tuvo un conflicto en su día, podría haber apelado, porque es Dios encarnado, a su propia autoridad. Y a veces lo hace, tiene ese derecho. Yahvé tiene ese derecho. Yahvé en carne puede hablar con autoridad. Jesús puede apelar a su propia autoridad. Y fue una de las cosas que los sorprendió cuando se paraba en la sinagoga, predicaba y enseñaba, y la gente decía: ¡vaya!, enseña como quien tiene autoridad, y no como sus escribas. ¿Por qué? Porque los escribas decían algo como: bueno, esto es verdad porque el rabino fulano lo dice, porque el rabino fulano lo dice. Jesús llega y usa su propia autoridad como Hijo de Dios, como Dios en carne. Sin embargo, nos enseña algo importante aquí en Mateo 15. Muy importante. Ya lo leí, así que no lo voy a leer de nuevo. Pero en un conflicto con lo que se habría visto como la tradición de la iglesia, tienes que hacer esto. ¿Por qué? Porque la iglesia siempre lo ha enseñado. Tienes que hacer esto. ¿Por qué? Porque es una tradición de los ancianos. Esto se habría visto de alguna manera como una especie de depósito sagrado. Como si esta fuera nuestra tradición muy sagrada. Tienes que hacer esto para estar bien con Dios. Tienes que hacer esto para ser obediente a Dios. Y Jesús maneja ese tipo de controversia con este mismo contraste. Dice: Dios dice. Y cita a Moisés, el Antiguo Testamento. Dice: Dios dice esto. Dice: pero ustedes dicen aquello. ¿Y qué hace? Alinea la afirmación de Dios con la de ellos. Y dice: así anulan la palabra de Dios por causa de su tradición. Así que Jesús nos da este ejemplo principal de cómo debemos manejar incluso nuestras propias tradiciones religiosas: toma la palabra de Dios y dice que esta es suprema; tu tradición no tiene que anularla. Y tomó lo que habían sido tradiciones muy apreciadas por los judíos de su día, y dice: no es verdad, y en realidad han anulado la palabra de Dios por su tradición. Así manejó Jesús una tradición en su época que se veía como una tradición religiosa muy valiosa y hermosa. Siguiente y",
                original:
                  "one when the lord jesus had a conflict we read this at the beginning look at matthew 15 when he had a conflict in his day he could have appealed because he's god in the flesh to his own authority. And at times he does, he has that right. Yahweh has that right. Yahweh in the flesh can speak authoritatively. Jesus can appeal to his own authority. And it was one of the things that shocked them is when he stands up in the synagogue and he's preaching and he's teaching the people are like, wow, he teaches as one having authority and not like our scribes. Why? Because the scribes would say something like, well, you know this is true because Rabbi so-and-so says it, because Rabbi so-and-so says it. Jesus comes in and he uses his own authority as the Son of God, as God in the flesh. However, he teaches us something important here in Matthew 15. Very important. I already read it, so I won't read it again. But in a conflict with what it would have been seen as the tradition of the church, you need to do this. Why? Because the church has always taught this. You need to do this. Why? Because it's a tradition of the elders. This would have been seen in some way, sort of as a kind of sacred deposit in a sense. Like this is our very sacred tradition. You got to do this to be right with God. You got to do this to be obedient to God. And Jesus handles that kind of controversy with this same contrast. He says, God says. And he quotes Moses. Old Testament. He says, God says this. He says, but you say that. And so what does he do? He lines up God's claim with their claim. And he says, thus, you make void. You invalidate the word of God for the sake of your tradition. so Jesus gives us this premier example how are we to actually even handle our own religious traditions he takes the word of God and says this is supreme your tradition has to not make this void and he took what have been very cherished tradition by the Jews of his day and he says not true and you've actually voided god's word because of your tradition that's how jesus handled a tradition in his day that was seen as a very valuable beautiful religious tradition next and",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Matt.18.17-Matt.18.19"],
      text: "Credo Ortodoxo (1678), XXXIX, p. 154: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "El congregacionalismo deja que la congregación funcione como instancia final de apelación en los asuntos de la iglesia local, viviendo bajo el señorío de Cristo y bajo pastores o ancianos que la dirigen; las cartas del Nuevo Testamento están escritas a iglesias enteras (Gál 1:8), y toda la congregación ejerce disciplina (Mt 18:15–20; 1 Cor 5:1–13; 2 Cor 2:5–11)",
            quotes: [
              {
                speaker: "Stephen J. Wellum",
                work: "The Priesthood of All Believers and Why the New Covenant Requires Congregationalism",
                outlet: "9Marks",
                date: "16 de septiembre de 2025",
                locator:
                  "2 párrafos: del párrafo que empieza «Evidence for congregationalism can be found…» al que termina «…affairs under the lordship of Christ.»",
                url: "https://www.9marks.org/article/the-priesthood-of-all-believers-and-why-the-new-covenant-requires-congregationalism/",
                text: "Hay evidencia del congregacionalismo en todo el NT. Como creyentes pactados juntos, se escogieron ancianos (Hech. 14:23; Tito 1:5), se predicó la Palabra de Dios y se practicaron las ordenanzas (Hech. 2:42; 1 Cor. 11:26), y la iglesia tomó expresión visible en asambleas locales que gobernaban sus propios asuntos. Por eso una gran cantidad de cartas del NT fueron escritas a iglesias locales, no meramente a oficiales de la iglesia o a algún cuerpo eclesiástico más grande. Las cartas fueron escritas para instruir a toda la congregación sobre sus responsabilidades de gobernarse a sí misma y de protegerse de falsos maestros. Por ejemplo, en Gálatas, Pablo espera que esta joven iglesia juzgue la autoridad angelical y apostólica si predicaran algo contrario al mensaje apostólico (Gal. 1:8). Como dice Mark Dever, “Él [Pablo] no escribe meramente a los pastores, al presbiterio, al obispo o a la conferencia, a la convención, o al seminario. Escribe a los cristianos que componen las iglesias, ¡y deja muy claro que no solo son competentes para juzgar lo que pretende ser el evangelio, sino que deben hacerlo!”Mark Dever, A Display of God’s Glory: Basics of Church Structure—Deacons, Elders, Congregationalism, and Membership (2nd ed.; Washington, DC: 9Marks Ministries, 2001), 35.\n\nEl congregacionalismo se confirma además en la práctica de la disciplina eclesiástica. No son solo los líderes quienes deben ejercer disciplina sino toda la congregación. La iglesia debe ejercer autoridad sobre los falsos maestros (2 Cor. 10–13; Gal. 1:8; 2 Juan) y sobre la vida de las personas (Mat. 18:15–20; 1 Cor. 5:1–13; 2 Cor. 2:5–11). Por eso Pablo se angustia por el comportamiento de la iglesia de Corinto, que no puede resolver disputas desde dentro y en cambio busca la ayuda de no cristianos. Para Pablo, la iglesia está actuando en contra de lo que ella es, y mediante una serie de preguntas punzantes, lo deja abundantemente claro (ver 1 Cor. 6:2–5a). La consternación de Pablo con la iglesia solo tiene sentido si asume que toda la iglesia está involucrada en este tipo de decisiones. Cada miembro tiene un papel que cumplir porque toda la iglesia es, en última instancia, la corte final de apelación para sus propios asuntos bajo el señorío de Cristo.",
                original:
                  "Evidence for congregationalism can be found throughout the NT. As believers covenanted together, elders were chosen (Acts 14:23; Titus 1:5), God’s Word was preached, and the ordinances were practiced (Acts 2:42; 1 Cor. 11:26), the church took on visible expression in local assemblies that governed their own affairs. This is why a vast number of NT letters were written to local churches, not merely to church officers or some larger ecclesiastical body. The letters were written to instruct the entire congregation of their responsibilities to govern themselves and to protect themselves from false teachers. For example, in Galatians, Paul expects this young church to sit in judgment of angelic and apostolic authority if they should preach something contrary to the apostolic message (Gal. 1:8). As Mark Dever notes, “He [Paul] doesn’t write merely to the pastors, to the presbytery, to the bishop or the conference, to the convention, or to the seminary. He writes to the Christians who compose the churches, and he makes it quite clear that not only are they competent to sit in judgment on what claims to be the gospel, but that they must!”Mark Dever, A Display of God’s Glory: Basics of Church Structure—Deacons, Elders, Congregationalism, and Membership (2nd ed.; Washington, DC: 9Marks Ministries, 2001), 35.\n\nCongregationalism is further confirmed in the practice of church discipline. It’s not only leaders who are to exercise discipline but the entire congregation. The church is to exercise authority over false teachers (2 Cor. 10–13; Gal. 1:8; 2 John) and people’s lives (Matt. 18:15–20; 1 Cor. 5:1–13; 2 Cor. 2:5–11). This is why Paul is distraught by the behavior of the Corinthian church who cannot settle disputes from within and instead seeks the help of non-Christians. For Paul, the church is acting contrary to what she is, and by a series of pointed questions, he makes this abundantly clear (see 1 Cor. 6:2–5a). Paul’s consternation with the church only makes sense if he assumes that the entire church is involved in these kinds of decisions. Each member has a role to play because the entire church is ultimately the final court of appeal for her own affairs under the lordship of Christ.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Murr dice que Mt 18 da el poder de atar y desatar a todos los apóstoles, no solo a Pedro; lee «lo que atan en la tierra» como un modismo rabínico para permitir o prohibir, y dice que atar y desatar en Mt 16 y 18 tiene que ver con la disciplina eclesiástica: quien peca contra su hermano es confrontado y, si no se arrepiente, llevado ante toda la iglesia, porque «donde dos o tres se reúnen en su nombre, allí está él en medio de ellos»",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "¿El Ángel de Jehová era Jesús? – El Diezmo - ¿Es todo lo que pasa voluntad de Dios? - El Papado.",
                outlet: "Carlos Andres Murr",
                date: "5 de agosto de 2024",
                locator: "Minutos 1:26:07 a 1:28:25",
                url: "https://www.youtube.com/watch?v=csB9S0RKO2Y&t=5167s",
                text: "en primer lugar porque en Mateo 18 Jesús le dice al resto de los apóstoles. En Mateo 16 les dice lo que atare será atado y en Mateo 16, pero en Mateo 18 se lo dice a todos los apóstoles, no solo a Pedro, que lo que atare en la tierra será atado en el cielo. Y esto viene de un término rabínico que significa permitir o prohibir. O sea, ustedes deben permitir lo que Dios permite en el cielo y deben prohibir lo que Dios prohíbe. porque hay un hebraísmo ahí donde los judíos expresan consecuencias como si fueran propósitos. Por ejemplo, dice Jesús, yo no he venido a traer paz sino espada porque por mi culpa estarán divididos en una familia. No es que Jesús había venido para traer disensión en la familia y espada, pero la forma de expresarlo del judío en sus hebraísmos lo están poniendo como que la consecuencia de abrazar la verdad de Cristo es que tristemente en una familia estarán divididos y que los creyentes serán perseguidos y por eso vino a traer espada. Y algunos interpretan, algunos eruditos bíblicos interpretan que ese es el sentido del texto cuando dice lo que atares en la tierra será atado en el cielo, que lo que quiere dar a entender es que debes atar en la tierra lo que está atado en el cielo. O sea, debes prohibir entre los hombres las cosas que Dios prohíbe en el cielo y debes permitir lo que Dios, conforme a su voluntad, permita. Y eso de atar y desatar que se ve en Mateo 16 y en Mateo 18 tiene que ver con la disciplina en la iglesia, con guiar a la iglesia de Cristo. porque en Mateo 18 está hablando de que una persona peca contra su hermano y tiene que ser confrontada y si no se arrepiente debe ser traída delante de toda la iglesia porque donde dos o tres se reúnen en su nombre ahí está él en medio de ellos y entonces dice de que ahí es donde dice que lo que atar en ser atado porque es ejercitar disciplina en la iglesia entonces el poder de atar y desatar que fue dado a Pedro en Mateo 16 es dado a todos los apóstoles por igual",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Matt.18.20"],
      text: "Credo Ortodoxo (1678), XXXIX, p. 154: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "El congregacionalismo deja que la congregación funcione como instancia final de apelación en los asuntos de la iglesia local, viviendo bajo el señorío de Cristo y bajo pastores o ancianos que la dirigen; las cartas del Nuevo Testamento están escritas a iglesias enteras (Gál 1:8), y toda la congregación ejerce disciplina (Mt 18:15–20; 1 Cor 5:1–13; 2 Cor 2:5–11)",
            quotes: [
              {
                speaker: "Stephen J. Wellum",
                work: "The Priesthood of All Believers and Why the New Covenant Requires Congregationalism",
                outlet: "9Marks",
                date: "16 de septiembre de 2025",
                locator:
                  "2 párrafos: del párrafo que empieza «Evidence for congregationalism can be found…» al que termina «…affairs under the lordship of Christ.»",
                url: "https://www.9marks.org/article/the-priesthood-of-all-believers-and-why-the-new-covenant-requires-congregationalism/",
                text: "Hay evidencia del congregacionalismo en todo el NT. Como creyentes pactados juntos, se escogieron ancianos (Hech. 14:23; Tito 1:5), se predicó la Palabra de Dios y se practicaron las ordenanzas (Hech. 2:42; 1 Cor. 11:26), y la iglesia tomó expresión visible en asambleas locales que gobernaban sus propios asuntos. Por eso una gran cantidad de cartas del NT fueron escritas a iglesias locales, no meramente a oficiales de la iglesia o a algún cuerpo eclesiástico más grande. Las cartas fueron escritas para instruir a toda la congregación sobre sus responsabilidades de gobernarse a sí misma y de protegerse de falsos maestros. Por ejemplo, en Gálatas, Pablo espera que esta joven iglesia juzgue la autoridad angelical y apostólica si predicaran algo contrario al mensaje apostólico (Gal. 1:8). Como dice Mark Dever, “Él [Pablo] no escribe meramente a los pastores, al presbiterio, al obispo o a la conferencia, a la convención, o al seminario. Escribe a los cristianos que componen las iglesias, ¡y deja muy claro que no solo son competentes para juzgar lo que pretende ser el evangelio, sino que deben hacerlo!”Mark Dever, A Display of God’s Glory: Basics of Church Structure—Deacons, Elders, Congregationalism, and Membership (2nd ed.; Washington, DC: 9Marks Ministries, 2001), 35.\n\nEl congregacionalismo se confirma además en la práctica de la disciplina eclesiástica. No son solo los líderes quienes deben ejercer disciplina sino toda la congregación. La iglesia debe ejercer autoridad sobre los falsos maestros (2 Cor. 10–13; Gal. 1:8; 2 Juan) y sobre la vida de las personas (Mat. 18:15–20; 1 Cor. 5:1–13; 2 Cor. 2:5–11). Por eso Pablo se angustia por el comportamiento de la iglesia de Corinto, que no puede resolver disputas desde dentro y en cambio busca la ayuda de no cristianos. Para Pablo, la iglesia está actuando en contra de lo que ella es, y mediante una serie de preguntas punzantes, lo deja abundantemente claro (ver 1 Cor. 6:2–5a). La consternación de Pablo con la iglesia solo tiene sentido si asume que toda la iglesia está involucrada en este tipo de decisiones. Cada miembro tiene un papel que cumplir porque toda la iglesia es, en última instancia, la corte final de apelación para sus propios asuntos bajo el señorío de Cristo.",
                original:
                  "Evidence for congregationalism can be found throughout the NT. As believers covenanted together, elders were chosen (Acts 14:23; Titus 1:5), God’s Word was preached, and the ordinances were practiced (Acts 2:42; 1 Cor. 11:26), the church took on visible expression in local assemblies that governed their own affairs. This is why a vast number of NT letters were written to local churches, not merely to church officers or some larger ecclesiastical body. The letters were written to instruct the entire congregation of their responsibilities to govern themselves and to protect themselves from false teachers. For example, in Galatians, Paul expects this young church to sit in judgment of angelic and apostolic authority if they should preach something contrary to the apostolic message (Gal. 1:8). As Mark Dever notes, “He [Paul] doesn’t write merely to the pastors, to the presbytery, to the bishop or the conference, to the convention, or to the seminary. He writes to the Christians who compose the churches, and he makes it quite clear that not only are they competent to sit in judgment on what claims to be the gospel, but that they must!”Mark Dever, A Display of God’s Glory: Basics of Church Structure—Deacons, Elders, Congregationalism, and Membership (2nd ed.; Washington, DC: 9Marks Ministries, 2001), 35.\n\nCongregationalism is further confirmed in the practice of church discipline. It’s not only leaders who are to exercise discipline but the entire congregation. The church is to exercise authority over false teachers (2 Cor. 10–13; Gal. 1:8; 2 John) and people’s lives (Matt. 18:15–20; 1 Cor. 5:1–13; 2 Cor. 2:5–11). This is why Paul is distraught by the behavior of the Corinthian church who cannot settle disputes from within and instead seeks the help of non-Christians. For Paul, the church is acting contrary to what she is, and by a series of pointed questions, he makes this abundantly clear (see 1 Cor. 6:2–5a). Paul’s consternation with the church only makes sense if he assumes that the entire church is involved in these kinds of decisions. Each member has a role to play because the entire church is ultimately the final court of appeal for her own affairs under the lordship of Christ.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Murr dice que Mt 18 da el poder de atar y desatar a todos los apóstoles, no solo a Pedro; lee «lo que atan en la tierra» como un modismo rabínico para permitir o prohibir, y dice que atar y desatar en Mt 16 y 18 tiene que ver con la disciplina eclesiástica: quien peca contra su hermano es confrontado y, si no se arrepiente, llevado ante toda la iglesia, porque «donde dos o tres se reúnen en su nombre, allí está él en medio de ellos»",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "¿El Ángel de Jehová era Jesús? – El Diezmo - ¿Es todo lo que pasa voluntad de Dios? - El Papado.",
                outlet: "Carlos Andres Murr",
                date: "5 de agosto de 2024",
                locator: "Minutos 1:26:07 a 1:28:25",
                url: "https://www.youtube.com/watch?v=csB9S0RKO2Y&t=5167s",
                text: "en primer lugar porque en Mateo 18 Jesús le dice al resto de los apóstoles. En Mateo 16 les dice lo que atare será atado y en Mateo 16, pero en Mateo 18 se lo dice a todos los apóstoles, no solo a Pedro, que lo que atare en la tierra será atado en el cielo. Y esto viene de un término rabínico que significa permitir o prohibir. O sea, ustedes deben permitir lo que Dios permite en el cielo y deben prohibir lo que Dios prohíbe. porque hay un hebraísmo ahí donde los judíos expresan consecuencias como si fueran propósitos. Por ejemplo, dice Jesús, yo no he venido a traer paz sino espada porque por mi culpa estarán divididos en una familia. No es que Jesús había venido para traer disensión en la familia y espada, pero la forma de expresarlo del judío en sus hebraísmos lo están poniendo como que la consecuencia de abrazar la verdad de Cristo es que tristemente en una familia estarán divididos y que los creyentes serán perseguidos y por eso vino a traer espada. Y algunos interpretan, algunos eruditos bíblicos interpretan que ese es el sentido del texto cuando dice lo que atares en la tierra será atado en el cielo, que lo que quiere dar a entender es que debes atar en la tierra lo que está atado en el cielo. O sea, debes prohibir entre los hombres las cosas que Dios prohíbe en el cielo y debes permitir lo que Dios, conforme a su voluntad, permita. Y eso de atar y desatar que se ve en Mateo 16 y en Mateo 18 tiene que ver con la disciplina en la iglesia, con guiar a la iglesia de Cristo. porque en Mateo 18 está hablando de que una persona peca contra su hermano y tiene que ser confrontada y si no se arrepiente debe ser traída delante de toda la iglesia porque donde dos o tres se reúnen en su nombre ahí está él en medio de ellos y entonces dice de que ahí es donde dice que lo que atar en ser atado porque es ejercitar disciplina en la iglesia entonces el poder de atar y desatar que fue dado a Pedro en Mateo 16 es dado a todos los apóstoles por igual",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Matt.22.29"],
      text: "Segunda Confesión de Londres (1689), 1.10 nota (x) (1688 p. 9): este versículo figura como nota al margen junto a la cláusula, en inglés, «The supream Judge by which all Controversies of Religion are to be determined, and all Decrees of Councels, Opinions of ancient Writers, Doctrines of Men, and private Spirits, are to be examined, and in whose sentence we are to rest, can be no other but the Holy Scripture delivered by the Spirit, into which Scripture so delivered, our Faith is finally resolved.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
      apologists: {
        arguments: [
          {
            title:
              "En la lectura del autor, al menos un problema principal de los saduceos era doctrinal: Jesús no eludió su pregunta sobre la resurrección, sino que les dijo que estaban equivocados porque no conocían las Escrituras ni el poder de Dios (Mt 22:29); un punto sobre la importancia de la doctrina, no una exposición de la autoridad de la Escritura",
            quotes: [
              {
                speaker: "Samuel Parkison",
                work: "Jesus Cared About Doctrine",
                outlet: "9Marks",
                date: "16 de noviembre de 2021",
                locator:
                  "1 párrafo: del párrafo que empieza «Another favorite example of Christ’s doctrinal…» al que termina «…but of the living” (Matt. 22:32).»",
                url: "https://www.9marks.org/article/jesus-cared-about-doctrine/",
                text: "Otro ejemplo favorito de la corrección doctrinal de Cristo es cuando Jesús les dice a los saduceos el veredicto contundente, al estilo paulino: “Están equivocados, porque no conocen las Escrituras ni el poder de Dios” (Matt. 22:29). Ahora bien, a lo largo de los Evangelios vemos a Jesús señalar muchos problemas de los saduceos, pero al menos uno de ellos era doctrinal. El contexto de esta reprensión tiene todo que ver con un debate intelectual intramuros entre fariseos y saduceos. Si aceptamos la falsa dicotomía de preocuparnos por la doctrina o seguir las enseñanzas de Jesús, esperaríamos que nuestro Señor eludiera la pregunta hipotética que los saduceos le plantean sobre el matrimonio y la resurrección, y simplemente ofreciera algún tipo de consejo “práctico”. Pero en cambio, les dice sin ambigüedad que están doctrinalmente extraviados, y sitúa su enseñanza sobre la resurrección dentro de la confesión dogmática general y muy cargada: “No es Dios de muertos, sino de vivos” (Matt. 22:32).",
                original:
                  "Another favorite example of Christ’s doctrinal correction is when Jesus utters to the Sadducees the Pauline-like blunt verdict: “You are wrong, because you know neither the Scriptures nor the power of God” (Matt. 22:29). Now, throughout the Gospels we see Jesus identifying many problems with the Sadducees, but at least one major problem was doctrinal. The context of this rebuke has everything to do with an intermural intellectual debate between the Pharisees and the Sadducees. If we accept the false dichotomy of caring about doctrine or following the teachings of Jesus, we would expect our Lord to sidestep the hypothetical question the Sadducees ask about marriage and the resurrection, and simply offer some sort of “practical” advice. But instead, he tells them in no uncertain terms that they are doctrinally misled, and he situates his teaching about the resurrection within the overarching, heavily loaded dogmatic confession: “He is not the God of the dead, but of the living” (Matt. 22:32).",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Durbin dice que Jesús, en conflicto con otros, desafió al pueblo judío de su tiempo con las Escrituras: «ustedes erran, no conociendo las Escrituras ni el poder de Dios» y «¿no han leído lo que les fue dicho por Dios?»; deduce de ello que la Escritura citada desde mucho antes es Dios hablando al lector",
            quotes: [
              {
                speaker: "Jeff Durbin",
                work: "Jeff Durbin: Sola Scriptura & Rome Pt. 4",
                outlet: "Apologia Studios",
                date: "19 de febrero de 2024",
                locator: "Minutos 24:09 a 25:01",
                url: "https://www.youtube.com/watch?v=nalITU86Iqs&t=1449s",
                text: "Y luego, Jesús, en conflicto con otros, desafiaría al pueblo judío de su día usando las Escrituras. Y decía cosas como Mateo 22:31 sobre su controversia. Dice: ustedes yerran, no conociendo las Escrituras ni el poder de Dios. Y dice: ¿no han leído lo que les fue dicho por Dios? ¿No es interesante? ¿No es asombroso? Es increíble que Jesús pudiera citarles la Escritura, palabras dichas a otras personas mucho tiempo antes, y que pudiera decir: ¿no han leído lo que les fue dicho por Dios? Dios hablando. Leer la Escritura es Dios hablándote. Él te está hablando.",
                original:
                  "And next, Jesus, in conflict with others, would challenge the Jewish people of his day using the scriptures. And he said things like Matthew 22, 31 about their controversy. He says, you do err not knowing the scriptures or the power of God. And he says, have you not read what was spoken to you by God? Isn't that interesting? Isn't that amazing? It's incredible that Jesus could quote Scripture to them, words that were said to other people long before, and he could say, have you not read what was spoken to you by God? God's speaking. Reading Scripture is God speaking to you. He's talking to you.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Matt.22.29-Matt.22.30"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "En la lectura del autor, al menos un problema principal de los saduceos era doctrinal: Jesús no eludió su pregunta sobre la resurrección, sino que les dijo que estaban equivocados porque no conocían las Escrituras ni el poder de Dios (Mt 22:29); un punto sobre la importancia de la doctrina, no una exposición de la autoridad de la Escritura",
            quotes: [
              {
                speaker: "Samuel Parkison",
                work: "Jesus Cared About Doctrine",
                outlet: "9Marks",
                date: "16 de noviembre de 2021",
                locator:
                  "1 párrafo: del párrafo que empieza «Another favorite example of Christ’s doctrinal…» al que termina «…but of the living” (Matt. 22:32).»",
                url: "https://www.9marks.org/article/jesus-cared-about-doctrine/",
                text: "Otro ejemplo favorito de la corrección doctrinal de Cristo es cuando Jesús les dice a los saduceos el veredicto contundente, al estilo paulino: “Están equivocados, porque no conocen las Escrituras ni el poder de Dios” (Matt. 22:29). Ahora bien, a lo largo de los Evangelios vemos a Jesús señalar muchos problemas de los saduceos, pero al menos uno de ellos era doctrinal. El contexto de esta reprensión tiene todo que ver con un debate intelectual intramuros entre fariseos y saduceos. Si aceptamos la falsa dicotomía de preocuparnos por la doctrina o seguir las enseñanzas de Jesús, esperaríamos que nuestro Señor eludiera la pregunta hipotética que los saduceos le plantean sobre el matrimonio y la resurrección, y simplemente ofreciera algún tipo de consejo “práctico”. Pero en cambio, les dice sin ambigüedad que están doctrinalmente extraviados, y sitúa su enseñanza sobre la resurrección dentro de la confesión dogmática general y muy cargada: “No es Dios de muertos, sino de vivos” (Matt. 22:32).",
                original:
                  "Another favorite example of Christ’s doctrinal correction is when Jesus utters to the Sadducees the Pauline-like blunt verdict: “You are wrong, because you know neither the Scriptures nor the power of God” (Matt. 22:29). Now, throughout the Gospels we see Jesus identifying many problems with the Sadducees, but at least one major problem was doctrinal. The context of this rebuke has everything to do with an intermural intellectual debate between the Pharisees and the Sadducees. If we accept the false dichotomy of caring about doctrine or following the teachings of Jesus, we would expect our Lord to sidestep the hypothetical question the Sadducees ask about marriage and the resurrection, and simply offer some sort of “practical” advice. But instead, he tells them in no uncertain terms that they are doctrinally misled, and he situates his teaching about the resurrection within the overarching, heavily loaded dogmatic confession: “He is not the God of the dead, but of the living” (Matt. 22:32).",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Durbin dice que Jesús, en conflicto con otros, desafió al pueblo judío de su tiempo con las Escrituras: «ustedes erran, no conociendo las Escrituras ni el poder de Dios» y «¿no han leído lo que les fue dicho por Dios?»; deduce de ello que la Escritura citada desde mucho antes es Dios hablando al lector",
            quotes: [
              {
                speaker: "Jeff Durbin",
                work: "Jeff Durbin: Sola Scriptura & Rome Pt. 4",
                outlet: "Apologia Studios",
                date: "19 de febrero de 2024",
                locator: "Minutos 24:09 a 25:01",
                url: "https://www.youtube.com/watch?v=nalITU86Iqs&t=1449s",
                text: "Y luego, Jesús, en conflicto con otros, desafiaría al pueblo judío de su día usando las Escrituras. Y decía cosas como Mateo 22:31 sobre su controversia. Dice: ustedes yerran, no conociendo las Escrituras ni el poder de Dios. Y dice: ¿no han leído lo que les fue dicho por Dios? ¿No es interesante? ¿No es asombroso? Es increíble que Jesús pudiera citarles la Escritura, palabras dichas a otras personas mucho tiempo antes, y que pudiera decir: ¿no han leído lo que les fue dicho por Dios? Dios hablando. Leer la Escritura es Dios hablándote. Él te está hablando.",
                original:
                  "And next, Jesus, in conflict with others, would challenge the Jewish people of his day using the scriptures. And he said things like Matthew 22, 31 about their controversy. He says, you do err not knowing the scriptures or the power of God. And he says, have you not read what was spoken to you by God? Isn't that interesting? Isn't that amazing? It's incredible that Jesus could quote Scripture to them, words that were said to other people long before, and he could say, have you not read what was spoken to you by God? God's speaking. Reading Scripture is God speaking to you. He's talking to you.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Matt.22.29-Matt.22.31"],
      text: "Fe y Mensaje Bautistas (1925), I (1963 Annual, p. 270, columna derecha): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270.",
      apologists: {
        arguments: [
          {
            title:
              "En la lectura del autor, al menos un problema principal de los saduceos era doctrinal: Jesús no eludió su pregunta sobre la resurrección, sino que les dijo que estaban equivocados porque no conocían las Escrituras ni el poder de Dios (Mt 22:29); un punto sobre la importancia de la doctrina, no una exposición de la autoridad de la Escritura",
            quotes: [
              {
                speaker: "Samuel Parkison",
                work: "Jesus Cared About Doctrine",
                outlet: "9Marks",
                date: "16 de noviembre de 2021",
                locator:
                  "1 párrafo: del párrafo que empieza «Another favorite example of Christ’s doctrinal…» al que termina «…but of the living” (Matt. 22:32).»",
                url: "https://www.9marks.org/article/jesus-cared-about-doctrine/",
                text: "Otro ejemplo favorito de la corrección doctrinal de Cristo es cuando Jesús les dice a los saduceos el veredicto contundente, al estilo paulino: “Están equivocados, porque no conocen las Escrituras ni el poder de Dios” (Matt. 22:29). Ahora bien, a lo largo de los Evangelios vemos a Jesús señalar muchos problemas de los saduceos, pero al menos uno de ellos era doctrinal. El contexto de esta reprensión tiene todo que ver con un debate intelectual intramuros entre fariseos y saduceos. Si aceptamos la falsa dicotomía de preocuparnos por la doctrina o seguir las enseñanzas de Jesús, esperaríamos que nuestro Señor eludiera la pregunta hipotética que los saduceos le plantean sobre el matrimonio y la resurrección, y simplemente ofreciera algún tipo de consejo “práctico”. Pero en cambio, les dice sin ambigüedad que están doctrinalmente extraviados, y sitúa su enseñanza sobre la resurrección dentro de la confesión dogmática general y muy cargada: “No es Dios de muertos, sino de vivos” (Matt. 22:32).",
                original:
                  "Another favorite example of Christ’s doctrinal correction is when Jesus utters to the Sadducees the Pauline-like blunt verdict: “You are wrong, because you know neither the Scriptures nor the power of God” (Matt. 22:29). Now, throughout the Gospels we see Jesus identifying many problems with the Sadducees, but at least one major problem was doctrinal. The context of this rebuke has everything to do with an intermural intellectual debate between the Pharisees and the Sadducees. If we accept the false dichotomy of caring about doctrine or following the teachings of Jesus, we would expect our Lord to sidestep the hypothetical question the Sadducees ask about marriage and the resurrection, and simply offer some sort of “practical” advice. But instead, he tells them in no uncertain terms that they are doctrinally misled, and he situates his teaching about the resurrection within the overarching, heavily loaded dogmatic confession: “He is not the God of the dead, but of the living” (Matt. 22:32).",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "White dice que Jesús pudo decir en Mt 22 «¿no han leído lo que Dios les dijo?», citando a Moisés 1.400 años antes y responsabilizando a los hombres como si Dios se lo hubiera dicho a ellos; de ello deduce que la Escritura es única (inspirada por Dios) y por tanto debe ser sola scriptura, no Escritura junto con otras cosas, sin desechar la historia de la iglesia",
            quotes: [
              {
                speaker: "James White",
                work: "Sola Scriptura: Do You Really Believe?",
                outlet: "Alpha & Omega Ministries",
                date: "15 de marzo de 2022",
                locator: "Minutos 55:25 a 56:49",
                url: "https://www.youtube.com/watch?v=IAl0GFBCYjQ&t=3325s",
                text: "es que la naturaleza de la Escritura la coloca por encima de cualquier otra cosa; no es simplemente una subcategoría de la tradición sagrada, es única. Jesús podía decir literalmente en el Evangelio de Mateo capítulo 22: ¿no han leído lo que Dios les dijo, diciendo...?, y citar a los hombres que tenía delante lo que Moisés escribió 1,400 años antes, y responsabilizarlos como si Dios se lo hubiera hablado a ellos. No hay nada en todo este mundo, en todo este universo, que sea como esto. Nada. Es única porque es theanustas y no hay nada más como ella. Y eso es lo central que deben entender. Por eso tiene que ser sola scriptura, no scriptura junto con esta cosa de allá y scriptura junto con aquella cosa de allá. Sola scriptura no significa que cuando tomo esto, tengo que tirar toda mi comprensión de la historia de la iglesia. Eso no se sigue. Pero lo que la historia de la iglesia me enseña es que si tomo lo que aquellos hombres de allá dijeron y permito que se conviertan en el lente a través del cual miro esto, seré letter straight.",
                original:
                  "is that the nature of Scripture places it above anything else it is not simply a subcategory of sacred tradition it is unique Jesus could literally say in the Gospel of Matthew chapter 22 have you not read what God spoke to you saying and quote to the men standing in front of him from what Moses wrote 1,400 years earlier and hold them accountable as if God had spoken it to them. There is nothing else in this entire world, this entire universe like this. Nothing. It is unique because it is theanustas and there's nothing else like it. And that's the central thing you must understand. that's why it must be sola scriptura, not scriptura together with this thing over there and scriptura together with that thing over there. Sola scriptura does not mean that when I take this, I have to throw out all of my understanding of church history. That does not follow. But what church history teaches me is that if I take what those men back there said and allow them to become the lens through which I look this, I will be led astray. I will be letter straight.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Durbin dice que Jesús, en conflicto con otros, desafió al pueblo judío de su tiempo con las Escrituras: «ustedes erran, no conociendo las Escrituras ni el poder de Dios» y «¿no han leído lo que les fue dicho por Dios?»; deduce de ello que la Escritura citada desde mucho antes es Dios hablando al lector",
            quotes: [
              {
                speaker: "Jeff Durbin",
                work: "Jeff Durbin: Sola Scriptura & Rome Pt. 4",
                outlet: "Apologia Studios",
                date: "19 de febrero de 2024",
                locator: "Minutos 24:09 a 25:01",
                url: "https://www.youtube.com/watch?v=nalITU86Iqs&t=1449s",
                text: "Y luego, Jesús, en conflicto con otros, desafiaría al pueblo judío de su día usando las Escrituras. Y decía cosas como Mateo 22:31 sobre su controversia. Dice: ustedes yerran, no conociendo las Escrituras ni el poder de Dios. Y dice: ¿no han leído lo que les fue dicho por Dios? ¿No es interesante? ¿No es asombroso? Es increíble que Jesús pudiera citarles la Escritura, palabras dichas a otras personas mucho tiempo antes, y que pudiera decir: ¿no han leído lo que les fue dicho por Dios? Dios hablando. Leer la Escritura es Dios hablándote. Él te está hablando.",
                original:
                  "And next, Jesus, in conflict with others, would challenge the Jewish people of his day using the scriptures. And he said things like Matthew 22, 31 about their controversy. He says, you do err not knowing the scriptures or the power of God. And he says, have you not read what was spoken to you by God? Isn't that interesting? Isn't that amazing? It's incredible that Jesus could quote Scripture to them, words that were said to other people long before, and he could say, have you not read what was spoken to you by God? God's speaking. Reading Scripture is God speaking to you. He's talking to you.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Matt.22.31"],
      text: "Segunda Confesión de Londres (1689), 1.10 nota (x) (1688 p. 9): este versículo figura como nota al margen junto a la cláusula, en inglés, «The supream Judge by which all Controversies of Religion are to be determined, and all Decrees of Councels, Opinions of ancient Writers, Doctrines of Men, and private Spirits, are to be examined, and in whose sentence we are to rest, can be no other but the Holy Scripture delivered by the Spirit, into which Scripture so delivered, our Faith is finally resolved.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "En la lectura del autor, al menos un problema principal de los saduceos era doctrinal: Jesús no eludió su pregunta sobre la resurrección, sino que les dijo que estaban equivocados porque no conocían las Escrituras ni el poder de Dios (Mt 22:29); un punto sobre la importancia de la doctrina, no una exposición de la autoridad de la Escritura",
            quotes: [
              {
                speaker: "Samuel Parkison",
                work: "Jesus Cared About Doctrine",
                outlet: "9Marks",
                date: "16 de noviembre de 2021",
                locator:
                  "1 párrafo: del párrafo que empieza «Another favorite example of Christ’s doctrinal…» al que termina «…but of the living” (Matt. 22:32).»",
                url: "https://www.9marks.org/article/jesus-cared-about-doctrine/",
                text: "Otro ejemplo favorito de la corrección doctrinal de Cristo es cuando Jesús les dice a los saduceos el veredicto contundente, al estilo paulino: “Están equivocados, porque no conocen las Escrituras ni el poder de Dios” (Matt. 22:29). Ahora bien, a lo largo de los Evangelios vemos a Jesús señalar muchos problemas de los saduceos, pero al menos uno de ellos era doctrinal. El contexto de esta reprensión tiene todo que ver con un debate intelectual intramuros entre fariseos y saduceos. Si aceptamos la falsa dicotomía de preocuparnos por la doctrina o seguir las enseñanzas de Jesús, esperaríamos que nuestro Señor eludiera la pregunta hipotética que los saduceos le plantean sobre el matrimonio y la resurrección, y simplemente ofreciera algún tipo de consejo “práctico”. Pero en cambio, les dice sin ambigüedad que están doctrinalmente extraviados, y sitúa su enseñanza sobre la resurrección dentro de la confesión dogmática general y muy cargada: “No es Dios de muertos, sino de vivos” (Matt. 22:32).",
                original:
                  "Another favorite example of Christ’s doctrinal correction is when Jesus utters to the Sadducees the Pauline-like blunt verdict: “You are wrong, because you know neither the Scriptures nor the power of God” (Matt. 22:29). Now, throughout the Gospels we see Jesus identifying many problems with the Sadducees, but at least one major problem was doctrinal. The context of this rebuke has everything to do with an intermural intellectual debate between the Pharisees and the Sadducees. If we accept the false dichotomy of caring about doctrine or following the teachings of Jesus, we would expect our Lord to sidestep the hypothetical question the Sadducees ask about marriage and the resurrection, and simply offer some sort of “practical” advice. But instead, he tells them in no uncertain terms that they are doctrinally misled, and he situates his teaching about the resurrection within the overarching, heavily loaded dogmatic confession: “He is not the God of the dead, but of the living” (Matt. 22:32).",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "White dice que Jesús pudo decir en Mt 22 «¿no han leído lo que Dios les dijo?», citando a Moisés 1.400 años antes y responsabilizando a los hombres como si Dios se lo hubiera dicho a ellos; de ello deduce que la Escritura es única (inspirada por Dios) y por tanto debe ser sola scriptura, no Escritura junto con otras cosas, sin desechar la historia de la iglesia",
            quotes: [
              {
                speaker: "James White",
                work: "Sola Scriptura: Do You Really Believe?",
                outlet: "Alpha & Omega Ministries",
                date: "15 de marzo de 2022",
                locator: "Minutos 55:25 a 56:49",
                url: "https://www.youtube.com/watch?v=IAl0GFBCYjQ&t=3325s",
                text: "es que la naturaleza de la Escritura la coloca por encima de cualquier otra cosa; no es simplemente una subcategoría de la tradición sagrada, es única. Jesús podía decir literalmente en el Evangelio de Mateo capítulo 22: ¿no han leído lo que Dios les dijo, diciendo...?, y citar a los hombres que tenía delante lo que Moisés escribió 1,400 años antes, y responsabilizarlos como si Dios se lo hubiera hablado a ellos. No hay nada en todo este mundo, en todo este universo, que sea como esto. Nada. Es única porque es theanustas y no hay nada más como ella. Y eso es lo central que deben entender. Por eso tiene que ser sola scriptura, no scriptura junto con esta cosa de allá y scriptura junto con aquella cosa de allá. Sola scriptura no significa que cuando tomo esto, tengo que tirar toda mi comprensión de la historia de la iglesia. Eso no se sigue. Pero lo que la historia de la iglesia me enseña es que si tomo lo que aquellos hombres de allá dijeron y permito que se conviertan en el lente a través del cual miro esto, seré letter straight.",
                original:
                  "is that the nature of Scripture places it above anything else it is not simply a subcategory of sacred tradition it is unique Jesus could literally say in the Gospel of Matthew chapter 22 have you not read what God spoke to you saying and quote to the men standing in front of him from what Moses wrote 1,400 years earlier and hold them accountable as if God had spoken it to them. There is nothing else in this entire world, this entire universe like this. Nothing. It is unique because it is theanustas and there's nothing else like it. And that's the central thing you must understand. that's why it must be sola scriptura, not scriptura together with this thing over there and scriptura together with that thing over there. Sola scriptura does not mean that when I take this, I have to throw out all of my understanding of church history. That does not follow. But what church history teaches me is that if I take what those men back there said and allow them to become the lens through which I look this, I will be led astray. I will be letter straight.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Durbin dice que Jesús, en conflicto con otros, desafió al pueblo judío de su tiempo con las Escrituras: «ustedes erran, no conociendo las Escrituras ni el poder de Dios» y «¿no han leído lo que les fue dicho por Dios?»; deduce de ello que la Escritura citada desde mucho antes es Dios hablando al lector",
            quotes: [
              {
                speaker: "Jeff Durbin",
                work: "Jeff Durbin: Sola Scriptura & Rome Pt. 4",
                outlet: "Apologia Studios",
                date: "19 de febrero de 2024",
                locator: "Minutos 24:09 a 25:01",
                url: "https://www.youtube.com/watch?v=nalITU86Iqs&t=1449s",
                text: "Y luego, Jesús, en conflicto con otros, desafiaría al pueblo judío de su día usando las Escrituras. Y decía cosas como Mateo 22:31 sobre su controversia. Dice: ustedes yerran, no conociendo las Escrituras ni el poder de Dios. Y dice: ¿no han leído lo que les fue dicho por Dios? ¿No es interesante? ¿No es asombroso? Es increíble que Jesús pudiera citarles la Escritura, palabras dichas a otras personas mucho tiempo antes, y que pudiera decir: ¿no han leído lo que les fue dicho por Dios? Dios hablando. Leer la Escritura es Dios hablándote. Él te está hablando.",
                original:
                  "And next, Jesus, in conflict with others, would challenge the Jewish people of his day using the scriptures. And he said things like Matthew 22, 31 about their controversy. He says, you do err not knowing the scriptures or the power of God. And he says, have you not read what was spoken to you by God? Isn't that interesting? Isn't that amazing? It's incredible that Jesus could quote Scripture to them, words that were said to other people long before, and he could say, have you not read what was spoken to you by God? God's speaking. Reading Scripture is God speaking to you. He's talking to you.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Matt.24.23"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Luke.16.29-Luke.16.31"],
      text: "Fe y Mensaje Bautistas (1925), I (1963 Annual, p. 270, columna derecha): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270.",
    },
    {
      refs: ["Luke.21.33"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Luke.24.44-Luke.24.46"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
      apologists: {
        arguments: [
          {
            title:
              "Ortlund sostiene que Jesús daba por supuesto un conjunto fijo de escritos del Antiguo Testamento conocido por sus oyentes (la ley, los profetas y los escritos, abreviados a veces como la ley y los profetas, como en Lc 24), no le preguntaron cuáles profetas, avaló esos escritos y responsabilizó al pueblo judío ante la autoridad de esa Escritura",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "A Fallible List of Infallible Books?",
                outlet: "Gavin Ortlund",
                date: "2 de septiembre de 2024",
                locator: "Minutos 17:32 a 18:25",
                url: "https://www.youtube.com/watch?v=rRMgYS1Taes&t=1052s",
                text: "ahora podrías decir: bueno, Josefo simplemente estaba equivocado. Está bien, ¿y qué pasa con Jesús? Jesús también se refería con frecuencia a un Antiguo Testamento tripartito: la ley, los profetas y los escritos. Lo ves en algunos pasajes, como Lucas 24; también a veces se acorta solo a la ley y los profetas. Jesús parece suponer un conjunto establecido de escritos que es comúnmente conocido. Nadie le pregunta cuáles profetas. Son simplemente los profetas. No parece ver la necesidad de aclarar. Eso parece ser conocido por sus oyentes: ¿qué profetas? Y él recomienda estos escritos. Hace responsables a los judíos de ellos. Dice: estas son las Escrituras que hablan de mí, por lo tanto deben creer en mí. Y está sujetando a la gente de su día a la autoridad de esa Escritura. Sin embargo, en ninguna parte había habido una acción infalible entre el pueblo judío",
                original:
                  "now you might say well josephus was just wrong okay well what about jesus jesus also frequently referred to a tripartite Old Testament scripture, the law, the prophets, and the writings. You see that in some passages, like Luke 24, you can also see it shortened to just the law and the prophets at times. Jesus seems to be assuming a set body of writings that is commonly known. No one is asking him which prophets. It's just the prophets. He doesn't appear to see the need to clarify. that seems to be known by his hearers, which prophets. And he commends these writings. He holds the Jewish people accountable to them. He says, these are the scriptures that are talking about me, therefore you should believe in me. And he's holding the people of his day to the authority of that scripture. Yet nowhere had there been an infallible action among the Jewish people",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["John.5.39"],
      text: "Segunda Confesión de Londres (1689), 1.8 nota (r) (1688 p. 8): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] and are commanded in the fear of God to read and search them […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Primera Confesión de Londres (1646), VII, p. 176: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] but onely the word of God contained in the Canonicall Scriptures.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
      apologists: {
        arguments: [
          {
            title:
              "Murr dice que Juan subraya que Jesús es el enviado por el Padre, a quien los dirigentes judíos desprecian como un falso mesías, y que Jesús les dice que si escudriñan las Escrituras, las Escrituras dan testimonio de él (cf. Jn 5:39), y que nadie puede venir a él si el Padre no lo atrae",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "23. La Eucaristía - Ejemplo de Exégesis - Hermenéutica - Dr. Carlos Andrés Murr",
                outlet: "Carlos Andres Murr",
                date: "5 de julio de 2022",
                locator: "Minutos 1:25:42 a 1:26:23",
                url: "https://www.youtube.com/watch?v=vHxJyQNuIW0&t=5142s",
                text: "dios el padre su sello de aprobación mucho juan habla de que jesús es un enviado del padre porque los líderes religiosos judíos lo desprecian como un falso un falso líder o un falso mesías y Jesús constantemente dice que nadie puede venir a él si el padre no le trae no dice eso constantemente sino cuando dice que él es enviado del padre que si escudriñan las escrituras las escrituras dan testimonio de él y habla constantemente de que no vino a ser su voluntad sino la del padre y por eso dice nadie puede venir a mí si el padre no le trae porque el que es sensible a la voz del padre y realmente está obedeciendo al Padre, va a creer en las señales que hace Jesús y va a creer en él.",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["John.5.46-John.5.47"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["John.6.45"],
      text: "Segunda Confesión de Londres (1689), 1.6 notas (i), (k) (1719 pp. 29–30; McGlothlin p. 229): este versículo figura como nota al margen junto a la cláusula, en inglés, «The whole Councel of God concerning all things necessary for his own Glory, Mans Salvation, Faith and Life, is either expressely set down or necessarily contained in the Holy Scripture […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 1.6 nota (k) (1688 p. 6): este versículo figura como nota al margen junto a la cláusula, en inglés, «Nevertheless we acknowledge the inward Illumination of the Spirit of God, to be necessary for the saving understanding of such things as are revealed in the Word […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 6–7.",
    },
    {
      refs: ["John.10.35"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "«Inspirada por Dios» habla de la Escritura como discurso propio de Dios, infalible y ontológicamente única; ese punto por sí solo no establece la Sola Scriptura, y todas las tradiciones pueden estar de acuerdo en él",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The ULTIMATE Case for Sola Scriptura",
                outlet: "Gavin Ortlund, YouTube",
                date: "19 de agosto de 2025",
                locator: "Minutos 13:12 a 18:44",
                url: "https://www.youtube.com/watch?v=rpmcr7jOev4&t=792s",
                text: "usar el propio lenguaje bíblico para esto. Quizá el versículo más sobreutilizado, que seguramente conocen si siguen estas discusiones, es 2 Timoteo 3:16, donde Pablo dice que toda Escritura es exhalada por Dios. La palabra griega theanustas recibe mucha atención en estas conversaciones. A veces se traduce como inspirada por Dios, como en la NASB, o exhalada por Dios, como en la ESV aquí. Eh, no piensen en esto como si la idea fuera que la Escritura ya existe y luego Dios viene y sopla encima del texto para darle más poder o algo así. Más bien, piensen en la Escritura misma: las palabras mismas son las que son exhaladas por Dios. Así que John Stodd, en su comentario sobre este pasaje, dice que se podría usar la palabra griega espiración, como en Dios exhalando. Si estás afuera en una noche fría y respiras, y puedes ver tu aliento, el aliento de Dios: esa es la zona semántica aproximada de este término. Así que puedes llamar palabra de Dios, en un sentido más general, a un sermón que escuchas un domingo por la mañana, pero no lo llamamos exhalado por Dios en este sentido. Y esa es la distinción ontológica que intentamos transmitir con el adjetivo inspirada. Ahora bien, a veces esto se discute en 2 Timoteo 3:16; la palabra aparece y luego se usa de forma más amplia, y así sucesivamente, y entonces esto se complica. Así que digamos que el punto aquí no depende de ese único pasaje, como veremos. Este es un punto en el que todas las tradiciones pueden estar de acuerdo hoy, y es algo que se expresa de muchas maneras distintas en diferentes pasajes. Por ejemplo, 2 Pedro 1:21 habla de hombres que hablaron de parte de Dios mientras eran llevados por el Espíritu Santo. La gran idea de este pasaje es que la Escritura llega por un medio humano. El profeta es el que habla o escribe, pero el origen no es humano sino divino. Dios habla a través de ese medio humano. En su clásico tratamiento de la inspiración bíblica y la autoridad bíblica, BB Warfield comenta el verbo que se usa aquí en la frase llevados por el Espíritu Santo. Y lo que nos ayuda a entender es que esto es más que una guía general. Lo que está en juego aquí es que las palabras del autor humano son de Dios. De manera más coloquial, podríamos decir: la Escritura son las palabras de Dios. Es el habla de Dios. Así es como la Escritura habla de sí misma. Por ejemplo, Romanos 3:2 dice que a los judíos se les confiaron los oráculos de Dios. Talogu, las palabras de Dios; o la NASB dice: las palabras reales de Dios; la NIV: las palabras mismas de Dios. Doug Moo, en su comentario, sostiene que este término se entiende mejor como una referencia al Antiguo Testamento en su conjunto, como pueden ver en pantalla. Bien. Entonces el Antiguo Testamento son las palabras de Dios. Eh, Jesús en Mateo 19 citará Escritura del Antiguo Testamento. Ahora bien, no es Dios hablando dentro de la Escritura del Antiguo Testamento, no un relato en el que Dios dice algo que queda registrado dentro de la estructura más amplia, sino el texto mismo como habla de Dios. Eso es en realidad uno de los pasajes más relevantes en toda esta discusión. Y por eso entra en escena la infalibilidad: decimos que la Escritura es infalible porque es el habla de Dios, y Dios es omnisciente y perfecto. Así que Dios es infalible. Por lo tanto, el habla de Dios es infalible. Y sobre esa base decimos que la Escritura no puede heredar. No puede equivocarse. O, como dice Jesús en Juan 10:35, con un matiz de significado algo distinto: no puede ser quebrantada. Así que en este punto no tiene por qué ser, y a menudo no es, un desacuerdo con otras tradiciones cristianas que la Escritura es ontológicamente única en su naturaleza como palabra de Dios. Siempre quiero animar a la gente, especialmente cuando hacen videos de refutación: todavía no estoy haciendo el argumento. Este es un principio que va a estar dentro del contexto más amplio de un argumento que se despliega. Así que aguanten conmigo para ver la relevancia de esto. No se adelanten. No estoy estableciendo solos scriptor todavía. Bien, solo estamos estableciendo un punto: la Escritura es ontológicamente única como habla de Dios. Eh, la Iglesia Católica Romana enseña que la Escritura es el habla de Dios. Es puesta por escrito bajo el aliento del Espíritu Santo. En la teología católica romana, la Sagrada Escritura y la Sagrada Tradición juntas constituyen la palabra de Dios, pero de diferentes maneras. La Sagrada Tradición no es inspirada por el Espíritu Santo de la misma manera que la Sagrada Escritura. Y el papel del magisterio, incluso cuando funciona con infalibilidad, no es lo mismo que el habla divina. Eh, el charrorismo de la infalibilidad que se extiende a la iglesia en la teología católica romana se distingue de la revelación divina. Es una interpretación de la revelación divina que se sostiene como infalible, pero no es lo mismo que el habla de Dios. Así que cuando un papa habla ex cathedra, eso es infalible, pero no es exhalado por Dios, no es habla divina llevada por el Espíritu, los oráculos de Dios. No es lo mismo que la Escritura, y no está añadiendo cosas nuevas al depósito apostólico de la revelación divina. Es una interpretación de ese depósito. Eh, de manera similar, la teología católica romana concuerda en que la revelación divina pública ha cesado con la muerte de los últimos apóstoles.",
                original:
                  "use the biblical language itself for this. Maybe the most overutilized verse that I'm sure you're familiar with if you're into these discussions at all is 2 Timothy 3:16 where Paul says that all scripture is breathed out by God. The Greek word theanustas gets a lot of discussion in these conversations. Sometimes translated as inspired by God as in the NASB or breathed out by God in the ESV here. Um don't think of this as though the idea is the scripture already exists and then God comes along and like breathes on top of the text so as to give it extra power or something like that. Rather think of the scripture itself the very words themselves are what is breathed out by God. So John Stodd in his commentary on this passage says you could use uh the Greek word expiration as in you know God breathing out. If you're out on a cold night and you breathe and you can see your breath, the the breath of God, uh that's the in the semantic ballpark here of this term. So you you can call a sermon that you hear on a Sunday morning the word of God in a more general sense, but we don't call it God breathed in this sense. And that is the ontological distinction we're trying to convey with the adjective inspired. Now, sometimes this is disputed in 2 Timothy 3:16. this word comes up and because later it's used more broadly and so forth and so this gets complicated. So let's just say that the point here is not dependent on that one passage as we'll see. This is a point all traditions can agree upon today and it's just something that that is put in many different ways in different passages. For example, second Peter 1:21 uh speaks about men speaking from God as they were carried along by the Holy Spirit. The the big idea here in this passage is that uh scripture comes through a human medium. The prophet is is the one sp speaking or writing uh but the origin is not human but is rather divine. God is speaking through that human medium. In his classic treatment of biblical inspiration and biblical authority, BB Warfield comments on the verb used here in this phrase carried along by the Holy Spirit. And what he helps us understand is that this is more than just a general guidance. What is in view here is that the words of the human author are from God. More colloquially, we could say scripture is God's words. It is God's speech. This is how the scripture speaks of itself. For example, Romans 3:2 says that the Jews were entrusted with the oracles of God. Talogu, the words of God or NASB says the actual words of God. NIV, the very words of God. Doug Moo in his commentary argues that this term is best taken as a reference to the Old Testament as a whole, as you can see on screen. Okay. So this so the Old Testament is the words of God. Uh Jesus in Matthew 19 will quote Old Testament scripture. Now not God speaking in Old Testament scripture, not a narrative in which God says something that is sort of recorded within the larger structure, but just the the text itself as God speaking. That's actually one of the most relevant texts in this whole discussion. And so this is why infallibility will come into the picture is because we say the scripture is infallible because it's God's speech and God is omnisient and perfect. So God is infallible. So God's speech is therefore infallible. And it's on that basis that we say the scripture cannot heir. It cannot get it wrong. Or as Jesus puts it in John 10:35 uh with a slightly different nuance of meaning, it cannot be broken. So when it comes to this point, this need not be and often is not a point of disagreement with other Christian traditions that scripture is ontologically unique in its nature as the as the word of God. I always want to encourage people especially when they do rebuttal videos. I I'm not making the argument yet. This is one principle that is going to be in the larger context of an unfolding argument. So hang with me here for the relevance of this. Don't get ahead of me. I'm not this is not establishing solos scriptor yet. Okay? Okay, we're just establishing one point. The scripture is unique ontologically as the speech of God. Um the Roman Catholic Church uh teaches that scripture is the speech of God. Uh it is put down in writing under the breath of the Holy Spirit. In Roman Catholic theology, sacred scripture and sacred tradition together constitute the word of God, but in different ways. Sacred tradition is not inspired by the Holy Spirit in the same way that sacred scripture is. And the role of the magisterium, even when functioning with infallibility, isn't the same thing as divine speech. Uh the charrorism of infallibility that's extended to the church in Roman Catholic theology is distinguished from divine revelation. It's an interpretation of divine revelation that that is held to be infallible, but it's not the same thing as the speech of God. So when a pope speaks ex cathedra, that's infallible, but it's not God breathed, spirit carried divine speech, the oracles of God. It's not the same thing as scripture, and it's not adding new things on to the to the apostolic deposit of divine revelation. It's an interpretation of that. Um, similarly, Roman Catholic theology agrees that public divine revelation has ceased with the death of the last apostles.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Ortlund sostiene que la Escritura es en sí misma palabra inspirada por Dios: lee «inspirada por Dios» (2 Tim 3:16), hombres llevados por el Espíritu Santo (2 Pe 1:21) y los «oráculos de Dios» (Rom 3:2) como que las mismas palabras de la Escritura son palabras de Dios, y sobre esa base llama a la Escritura infalible, como dice Jesús que «no puede ser quebrantada» (Jn 10:35); dice que este punto por sí solo aún no establece la sola scriptura",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The ULTIMATE Case for Sola Scriptura",
                outlet: "Truth Unites",
                date: "19 de agosto de 2025",
                locator: "Minutos 13:38 a 17:00",
                url: "https://podcasters.spotify.com/pod/show/truth-unites/episodes/The-ULTIMATE-Case-for-Sola-Scriptura-e371tfb#t=818",
                text: "No pienses en esto como si la idea fuera que la Escritura ya existe, y que después Dios viene y, por así decirlo, sopla sobre el texto para darle un poder extra o algo así. Piensa más bien en la Escritura misma. Las palabras mismas son las que Dios exhaló. Por eso John Stott, en su comentario sobre este pasaje, dice que podrías usar la palabra griega que significa «expiración», como en Dios exhalando. Si estás afuera en una noche fría, respiras y puedes ver tu aliento, el aliento de Dios. Eso cae en el campo semántico de este término. Así que puedes llamar a un sermón que escuchas un domingo por la mañana la Palabra de Dios en un sentido más general, pero no lo llamamos exhalado por Dios en este sentido, y esa es la distinción ontológica que intentamos transmitir con el adjetivo inspirada. Ahora bien, a veces esto se discute en 2 Tim. 3:16. Esta palabra aparece ahí porque más adelante se usa de manera más amplia, y así sucesivamente, y esto se complica. Así que digamos solamente que el punto aquí no depende de ese pasaje. Como veremos, este es un punto en el que todas las tradiciones pueden estar de acuerdo hoy, y simplemente se expresa de muchas maneras distintas en diferentes pasajes. Por ejemplo, 2 Pet. 1:21 habla de hombres que hablaron de parte de Dios siendo llevados por el Espíritu Santo. La gran idea de este pasaje es que la Escritura llega por un medio humano. El profeta es quien habla o escribe. Pero el origen no es humano, sino divino. Dios habla por ese medio humano. En su clásico tratamiento de la inspiración bíblica y la autoridad bíblica, B.B. Warfield comenta el verbo que se usa aquí en la frase llevados por el Espíritu Santo, y lo que nos ayuda a entender es que esto es más que una guía general. Lo que está en vista aquí es que las palabras del autor humano son de Dios. De forma más coloquial, podríamos decir que la Escritura son las palabras de Dios. Es el discurso de Dios. Así habla la Escritura de sí misma. Por ejemplo, Rom. 3:2 dice que a los judíos les fueron confiados los oráculos de Dios, Ta-logia tu-tha-u, las palabras de Dios, o la NASB dice las palabras reales de Dios, la NIV, las mismísimas palabras de Dios. Doug Moo, en su comentario, sostiene que este término se entiende mejor como una referencia al Antiguo Testamento en su conjunto, como pueden ver en pantalla. Bien, entonces el Antiguo Testamento son las palabras de Dios. Jesús en Mat. 19 citará Escritura del Antiguo Testamento. Ahora bien, no Dios hablando en el Antiguo Testamento, no una narración en la que Dios dice algo que queda registrado dentro de la estructura mayor, sino solo el texto mismo como Dios hablando. Eso es en realidad uno de los textos más relevantes en toda esta discusión. Y por eso entra en escena la infalibilidad, porque decimos que la Escritura es infalible porque es el discurso de Dios. Y Dios es omnisciente y perfecto, así que Dios es infalible. Por lo tanto, el discurso de Dios es infalible. Y sobre esa base decimos que la Escritura no puede errar, no puede equivocarse, o como dice Jesús en Juan 10:35 con un matiz de significado algo distinto, no puede ser quebrantada.",
                original:
                  "Don't think of this as though the idea is the Scripture already exists, and then God comes along and like breathes on top of the text so as to give it extra power or something like that. Rather, think of the scripture itself. The very words themselves are what is breathed out by God. So John Stott in his commentary on this passage says you could use the Greek word expiration, as in God breathing out. If you're out on a cold night and you breathe and you can see your breath, the breath of God. That's in the semantic ballpark here of this term. So you can call a sermon that you hear on a Sunday morning the Word of God in a more general sense, but we don't call it God breathed in this sense, and that is the ontological distinction we're trying to convey with the adjective inspired. Now, sometimes this is disputed in 2 Timothy 3.16. This word comes up because later it's used more broadly and so forth, and so this gets complicated. So let's just say that the point here is not dependent on that one passage. As we'll see, this is a point all traditions can agree upon today, and it's just something that is put in many different ways in different passages. For example, 2 Peter 1.21 speaks about men speaking from God as they were carried along by the Holy Spirit. The big idea here in this passage is that Scripture comes through a human medium. The prophet is the one speaking or writing. But the origin is not human, but is rather divine. God is speaking through that human medium. In his classic treatment of biblical inspiration and biblical authority, B.B. Warfield comments on the verb used here in this phrase, carried along by the Holy Spirit. and what he helps us understand is that this is more than just a general guidance. What is in view here is that the words of the human author are from God. More colloquially, we could say scripture is God's words. It is God's speech. This is how the scripture speaks of itself. For example, Romans 3.2 says that the Jews were entrusted with the oracles of God, Ta-logia tu-tha-u, the words of God, or NASB says the actual words of God, NIV, the very words of God. Doug Moo in his commentary argues that this term is best taken as a reference to the Old Testament as a whole, as you can see on screen. Okay, so the Old Testament is the words of God. Jesus in Matthew 19 will quote Old Testament scripture. Now, not God speaking in Old Testament Scripture, not a narrative in which God says something that is sort of recorded within the larger structure, but just the text itself as God speaking. That's actually one of the most relevant texts in this whole discussion. And so this is why infallibility will come into the picture, is because we say the Scripture is infallible because it's God's speech. And God is omniscient and perfect, so God is infallible. So God's speech is therefore infallible. And it's on that basis that we say the scripture cannot err, it cannot get it wrong, or as Jesus puts it in John 10.35 with a slightly different nuance of meaning, it cannot be broken.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["John.16.13-John.16.15"],
      text: "Fe y Mensaje Bautistas (1925), I (1963 Annual, p. 270, columna derecha): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["John.16.13-John.16.14"],
      text: "Segunda Confesión de Londres (1689), 1.5 nota (b) (1688 p. 5; McGlothlin p. 229): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] our full perswasion, and assurance of the infallible truth, and divine authority thereof, is from the inward work of the Holy Spirit, bearing witness by and with the Word in our Hearts.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["John.17.12"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["John.17.17"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
      apologists: {
        arguments: [
          {
            title:
              "Durbin cita a Jesús en Jn 17:17, en la oración sacerdotal («Padre, santifícalos en tu verdad. Tu palabra es verdad»), como muestra de que la palabra de Dios es suprema y el criterio para probar, y añade que incluso en tiempos de revelación continua la revelación previa de Dios era el criterio",
            quotes: [
              {
                speaker: "Jeff Durbin",
                work: "Jeff Durbin: Overcoming Objections to Sola Scriptura",
                outlet: "Apologia Studios",
                date: "26 de febrero de 2024",
                locator: "Minutos 29:11 a 29:50",
                url: "https://www.youtube.com/watch?v=vHJxo2jkQ7E&t=1751s",
                text: "de carácter último y de autoridad. ¿Cómo lo sabes? ¿Sobre qué te estás parando? Es suprema. Es el estándar para probar. Jesús dijo en Juan 17:17, en su oración sacerdotal por nosotros, por el pueblo de Dios. Dijo: Padre, santifícalos en tu verdad. Tu palabra es verdad. Tu palabra es verdad. Ese es el estándar. Así lo hace Dios. Ahora, aquí está lo clave. Incluso durante tiempos de revelación continua, Dios y su revelación previa eran el estándar para probar. Ahora,",
                original:
                  "of ultimacy and authority. How do you know? What are you standing on? It's supreme. It's the standard for testing. Jesus said in John 17, 17, in his high priestly prayer about us, about God's people. He said, Father, sanctify them in your truth. Thy word is truth. Thy word is truth. That's the standard. That's how God does it. Now, here's the key thing. Even during times of continuing revelation, God and his previous revelation was the standard for testing. Now,",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["John.20.30-John.20.31"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "Murr lee Jn 20:31 («estas cosas se han escrito para que crean que Jesús es el Cristo… y para que creyendo tengan vida en su nombre») y concluye que Juan fue escrito principalmente para personas que no creían en Jesús, por lo que el verbo «creer» aparece unas cien veces en él",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "23. La Eucaristía - Ejemplo de Exégesis - Hermenéutica - Dr. Carlos Andrés Murr",
                outlet: "Carlos Andres Murr",
                date: "5 de julio de 2022",
                locator: "Minutos 1:30:23 a 1:31:01",
                url: "https://www.youtube.com/watch?v=vHxJyQNuIW0&t=5423s",
                text: "interesante el propósito del evangelio de juan se ve en juan 20 31 juan 20 31 dice hizo jesús muchas otras señales en presencia de sus discípulos pero estas las que están aquí en el evangelio de juan se han escrito para que crean que jesús es el cristo el mesías y para que creyendo en él tengan vida en su nombre entonces juan 20 31 muestra que juan fue escrito para gente no cristiana principalmente para gente que no creía en jesús por eso es que 100 veces se menciona el verbo",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["John.21.25"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Acts.2.16"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["Acts.3.22-Acts.3.23"],
      text: "Primera Confesión de Londres (1646), VIII, p. 176: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Acts.15.1"],
      text: "Credo Ortodoxo (1678), XXXIX, p. 154: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "Murr lee Hch 15:1 («algunos que venían de Judea enseñaban que si no se circuncidaban conforme a la costumbre de Moisés no podían ser salvos»), recuerda el pacto de Dios con Abraham en Gn 17, y explica que los creyentes judíos pedían algo dentro de la ley de Dios, por eso decir que los gentiles no podían salvarse de otro modo era grave",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "Hechos 15 ¿Es necesario someterse a la ley de Moisés para ser salvos? Dr. Carlos Andres Murr",
                outlet: "Carlos Andres Murr",
                date: "25 de febrero de 2021",
                locator: "Minutos 3:43 a 5:10",
                url: "https://www.youtube.com/watch?v=kgYGy2v_Xo4&t=223s",
                text: "Dice el versículo 1. Algunos que llegaron de Judea enseñaban a los hermanos, si no se circuncidan conforme al rito de Moisés, no pueden ser salvos. Dios había hecho un pacto con Israel y en Génesis 17 Dios pidió a Abraham que fuera circuncidado y dijo que este iba a ser un pacto eterno con su descendencia donde la carne del prepucio de los varones israelitas iba a ser quitada a los ocho días de nacido como un recordatorio físico visible en lo íntimo de la persona en el que recordaba que era un pueblo bajo pacto con Dios. Y es interesante porque aunque Dios había dicho que era algo eterno, vemos que va a haber una diferencia en lo que los apóstoles concluyen guiados por el Espíritu de Dios en este pasaje. Y en Hechos 15, lo único que estaba sucediendo es que estos cristianos judíos que habían creído en Jesucristo como el Mesías prometido en los profetas, lo que esperaban era que los que no eran judíos, puesto que no habían sido circuncidados a los ocho días de nacidos, que debían ser circuncidados para estar dentro del pacto de Dios, dentro del pueblo de Dios. pues es lo que ellos conocían por generaciones y es lo que la ley de Dios misma, la ley de Moisés demandaba. Entonces lo que estaban pidiendo no era algo fuera de la ley de Dios, era algo dentro de la ley de Dios.",
              },
            ],
          },
          {
            title:
              "White dice que la cuestión es a qué mira la iglesia después de los apóstoles; Hch 15 registra la obra del Espíritu mientras la iglesia luchaba con que el evangelio llegara a los gentiles, y la idea de que un concilio conocido solo por la Escritura muestra que la sola scriptura es falsa es, para él, «simplemente absurda»",
            quotes: [
              {
                speaker: "James White",
                work: "Happenings in Rome, Acts 15, and Provisionist Rhetoric",
                outlet: "Alpha & Omega Ministries",
                date: "10 de enero de 2024",
                locator: "Minutos 30:31 a 31:28",
                url: "https://www.youtube.com/watch?v=ht49ctjUawY&t=1831s",
                text: "después de los apóstoles, ¿cuál es la soul and foul rule of faith? Y así Hechos 15 es un registro de la obra del Espíritu, y mucho de lo que vemos en las epístolas de Pablo, y allí en Hechos, se ocupa de la iglesia que llega a luchar con el evangelio que va a los gentiles, y con la naturaleza de lo que será el nuevo pacto, y cómo ha de aplicarse, y todo este tipo de cosas. Y entonces, la idea de que un concilio del que solo conocemos, y solo sabemos cuál fue la conclusión de la conversación apostólica porque se halla en la Escritura, de que eso de alguna manera demuestra que la sola scriptura no es verdad, hace que todos digamos: eso es simplemente absurdo.",
                original:
                  "after the apostles, what is the soul and foul rule of faith? And so Acts 15 is a recording of the work of the spirit and so much of what we see in paul's epistles and there in acts is dealing with the church is coming to wrestle with the gospel going to the gentiles and the nature of what the new covenant is going to be um and how it's to be applied and all of this kind of stuff. And so the idea that a council that we only know about and we only know about what the conclusion of the apostolic conversation was because it's found in scripture that that somehow demonstrates that solo scriptura isn't true makes all of us go, that's just silly.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Acts.15.11"],
      text: "Credo Ortodoxo (1678), XXXIX, p. 154: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "Murr dice que el yugo de la ley es uno que ni los apóstoles ni sus padres pudieron llevar, porque nadie ha guardado perfectamente la ley de Dios, y lee Hch 15:11 («creemos que somos salvos por la gracia del Señor Jesús»); agrega que el «consumado es» de Cristo no dejó obras de la ley que añadir",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "Hechos 15 ¿Es necesario someterse a la ley de Moisés para ser salvos? Dr. Carlos Andres Murr",
                outlet: "Carlos Andres Murr",
                date: "25 de febrero de 2021",
                locator: "Minutos 22:21 a 23:00",
                url: "https://www.youtube.com/watch?v=kgYGy2v_Xo4&t=1341s",
                text: "Es un yugo fuerte y dice que es un yugo que ni nosotros ni nuestros padres hemos podido llevar porque nadie ha podido cumplir la ley de Dios a su perfección. Todos fallamos en diferentes puntos. Y dice el verso 11, creemos más bien que somos salvos por la gracia del Señor Jesús. Amén. Somos salvos por el amor inmerecido del Señor Jesucristo que extendió sus brazos en la cruz y dijo, consumado es. Jesús dijo, aquí se ha terminado la redención del ser humano. No dijo, aparte tú tienes que guardar las obras de la ley el sábado, circuncidarte y guardar las leyes alimenticias.",
              },
            ],
          },
          {
            title:
              "White dice que la cuestión es a qué mira la iglesia después de los apóstoles; Hch 15 registra la obra del Espíritu mientras la iglesia luchaba con que el evangelio llegara a los gentiles, y la idea de que un concilio conocido solo por la Escritura muestra que la sola scriptura es falsa es, para él, «simplemente absurda»",
            quotes: [
              {
                speaker: "James White",
                work: "Happenings in Rome, Acts 15, and Provisionist Rhetoric",
                outlet: "Alpha & Omega Ministries",
                date: "10 de enero de 2024",
                locator: "Minutos 30:31 a 31:28",
                url: "https://www.youtube.com/watch?v=ht49ctjUawY&t=1831s",
                text: "después de los apóstoles, ¿cuál es la soul and foul rule of faith? Y así Hechos 15 es un registro de la obra del Espíritu, y mucho de lo que vemos en las epístolas de Pablo, y allí en Hechos, se ocupa de la iglesia que llega a luchar con el evangelio que va a los gentiles, y con la naturaleza de lo que será el nuevo pacto, y cómo ha de aplicarse, y todo este tipo de cosas. Y entonces, la idea de que un concilio del que solo conocemos, y solo sabemos cuál fue la conclusión de la conversación apostólica porque se halla en la Escritura, de que eso de alguna manera demuestra que la sola scriptura no es verdad, hace que todos digamos: eso es simplemente absurdo.",
                original:
                  "after the apostles, what is the soul and foul rule of faith? And so Acts 15 is a recording of the work of the spirit and so much of what we see in paul's epistles and there in acts is dealing with the church is coming to wrestle with the gospel going to the gentiles and the nature of what the new covenant is going to be um and how it's to be applied and all of this kind of stuff. And so the idea that a council that we only know about and we only know about what the conclusion of the apostolic conversation was because it's found in scripture that that somehow demonstrates that solo scriptura isn't true makes all of us go, that's just silly.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Acts.15.15-Acts.15.16"],
      text: "Segunda Confesión de Londres (1689), 1.9 nota (u) (1688 p. 8): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Infallible Rule of interpretation of Scripture is the Scripture itself: And therefore when there is a question about the true and full sence of any Scripture, (which is not manifold but one) it must be searched by other places, that speak more clearly.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "Murr lee Hch 15:15–16, la cita de Santiago de que «con esto concuerdan las palabras de los profetas», sobre Dios reedificando el tabernáculo caído de David, y lo explica como el Mesías, descendiente de David, que trae a los gentiles al Señor",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "Hechos 15 ¿Es necesario someterse a la ley de Moisés para ser salvos? Dr. Carlos Andres Murr",
                outlet: "Carlos Andres Murr",
                date: "25 de febrero de 2021",
                locator: "Minutos 25:22 a 26:09",
                url: "https://www.youtube.com/watch?v=kgYGy2v_Xo4&t=1522s",
                text: "verso 15 y con esto concuerdan las palabras de los profetas tal como está escrito. Verso 16 Después de esto volveré y redificaré el tabernáculo o la tienda de David que ha caído. O sea, la casa de David que Dios iba a tener un descendiente de David que fuera quien iba a traer justicia a las naciones y este descendiente es el Mesías Jesucristo. al venir Jesús como salvador es redificar esa casa de David porque Jesús es descendiente de David dice y redificaré sus ruinas y lo levantaré de nuevo para que el resto de los hombres busque al señor y todos los gentiles sobre quien mi nombre es invocado dice el señor que hace saber todo esto desde tiempos antiguos.",
              },
            ],
          },
          {
            title:
              "White dice que la cuestión es a qué mira la iglesia después de los apóstoles; Hch 15 registra la obra del Espíritu mientras la iglesia luchaba con que el evangelio llegara a los gentiles, y la idea de que un concilio conocido solo por la Escritura muestra que la sola scriptura es falsa es, para él, «simplemente absurda»",
            quotes: [
              {
                speaker: "James White",
                work: "Happenings in Rome, Acts 15, and Provisionist Rhetoric",
                outlet: "Alpha & Omega Ministries",
                date: "10 de enero de 2024",
                locator: "Minutos 30:31 a 31:28",
                url: "https://www.youtube.com/watch?v=ht49ctjUawY&t=1831s",
                text: "después de los apóstoles, ¿cuál es la soul and foul rule of faith? Y así Hechos 15 es un registro de la obra del Espíritu, y mucho de lo que vemos en las epístolas de Pablo, y allí en Hechos, se ocupa de la iglesia que llega a luchar con el evangelio que va a los gentiles, y con la naturaleza de lo que será el nuevo pacto, y cómo ha de aplicarse, y todo este tipo de cosas. Y entonces, la idea de que un concilio del que solo conocemos, y solo sabemos cuál fue la conclusión de la conversación apostólica porque se halla en la Escritura, de que eso de alguna manera demuestra que la sola scriptura no es verdad, hace que todos digamos: eso es simplemente absurdo.",
                original:
                  "after the apostles, what is the soul and foul rule of faith? And so Acts 15 is a recording of the work of the spirit and so much of what we see in paul's epistles and there in acts is dealing with the church is coming to wrestle with the gospel going to the gentiles and the nature of what the new covenant is going to be um and how it's to be applied and all of this kind of stuff. And so the idea that a council that we only know about and we only know about what the conclusion of the apostolic conversation was because it's found in scripture that that somehow demonstrates that solo scriptura isn't true makes all of us go, that's just silly.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Acts.15.15"],
      text: "Segunda Confesión de Londres (1689), 1.8 nota (q) (1688 p. 8): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] the Church is finally to appeal unto them.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "Murr lee Hch 15:15–16, la cita de Santiago de que «con esto concuerdan las palabras de los profetas», sobre Dios reedificando el tabernáculo caído de David, y lo explica como el Mesías, descendiente de David, que trae a los gentiles al Señor",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "Hechos 15 ¿Es necesario someterse a la ley de Moisés para ser salvos? Dr. Carlos Andres Murr",
                outlet: "Carlos Andres Murr",
                date: "25 de febrero de 2021",
                locator: "Minutos 25:22 a 26:09",
                url: "https://www.youtube.com/watch?v=kgYGy2v_Xo4&t=1522s",
                text: "verso 15 y con esto concuerdan las palabras de los profetas tal como está escrito. Verso 16 Después de esto volveré y redificaré el tabernáculo o la tienda de David que ha caído. O sea, la casa de David que Dios iba a tener un descendiente de David que fuera quien iba a traer justicia a las naciones y este descendiente es el Mesías Jesucristo. al venir Jesús como salvador es redificar esa casa de David porque Jesús es descendiente de David dice y redificaré sus ruinas y lo levantaré de nuevo para que el resto de los hombres busque al señor y todos los gentiles sobre quien mi nombre es invocado dice el señor que hace saber todo esto desde tiempos antiguos.",
              },
            ],
          },
          {
            title:
              "White dice que la cuestión es a qué mira la iglesia después de los apóstoles; Hch 15 registra la obra del Espíritu mientras la iglesia luchaba con que el evangelio llegara a los gentiles, y la idea de que un concilio conocido solo por la Escritura muestra que la sola scriptura es falsa es, para él, «simplemente absurda»",
            quotes: [
              {
                speaker: "James White",
                work: "Happenings in Rome, Acts 15, and Provisionist Rhetoric",
                outlet: "Alpha & Omega Ministries",
                date: "10 de enero de 2024",
                locator: "Minutos 30:31 a 31:28",
                url: "https://www.youtube.com/watch?v=ht49ctjUawY&t=1831s",
                text: "después de los apóstoles, ¿cuál es la soul and foul rule of faith? Y así Hechos 15 es un registro de la obra del Espíritu, y mucho de lo que vemos en las epístolas de Pablo, y allí en Hechos, se ocupa de la iglesia que llega a luchar con el evangelio que va a los gentiles, y con la naturaleza de lo que será el nuevo pacto, y cómo ha de aplicarse, y todo este tipo de cosas. Y entonces, la idea de que un concilio del que solo conocemos, y solo sabemos cuál fue la conclusión de la conversación apostólica porque se halla en la Escritura, de que eso de alguna manera demuestra que la sola scriptura no es verdad, hace que todos digamos: eso es simplemente absurdo.",
                original:
                  "after the apostles, what is the soul and foul rule of faith? And so Acts 15 is a recording of the work of the spirit and so much of what we see in paul's epistles and there in acts is dealing with the church is coming to wrestle with the gospel going to the gentiles and the nature of what the new covenant is going to be um and how it's to be applied and all of this kind of stuff. And so the idea that a council that we only know about and we only know about what the conclusion of the apostolic conversation was because it's found in scripture that that somehow demonstrates that solo scriptura isn't true makes all of us go, that's just silly.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Acts.15.30-Acts.15.31"],
      text: "Credo Ortodoxo (1678), XXXIX, p. 154: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "Murr lee que los delegados, una vez despedidos, bajaron a Antioquía y entregaron la carta, y los hermanos se regocijaron por su aliento (Hch 15:30–31); dice que los gentiles fueron aceptados por Dios sin guardar las reglamentaciones ni hacerse judíos en su modo de vivir",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "Hechos 15 ¿Es necesario someterse a la ley de Moisés para ser salvos? Dr. Carlos Andres Murr",
                outlet: "Carlos Andres Murr",
                date: "25 de febrero de 2021",
                locator: "Minutos 33:06 a 33:36",
                url: "https://www.youtube.com/watch?v=kgYGy2v_Xo4&t=1986s",
                text: "el siguiente versículo. Dice, así que ellos después de ser despedidos descendieron a Antioquía y Reuniendo a la congregación entregaron la carta, se las leyeron ahora sí. Y dice que cuando los hermanos la leyeron se regocijaron por el consuelo que les impartía. Somos aceptados por Dios. Gloria a Dios, no necesitamos guardar todos estos reglamentos y empezar a hacernos judíos en nuestra forma de vivir en pleno obediencia a la Torah, a la ley de Moisés y circuncidarnos.",
              },
            ],
          },
          {
            title:
              "White dice que la cuestión es a qué mira la iglesia después de los apóstoles; Hch 15 registra la obra del Espíritu mientras la iglesia luchaba con que el evangelio llegara a los gentiles, y la idea de que un concilio conocido solo por la Escritura muestra que la sola scriptura es falsa es, para él, «simplemente absurda»",
            quotes: [
              {
                speaker: "James White",
                work: "Happenings in Rome, Acts 15, and Provisionist Rhetoric",
                outlet: "Alpha & Omega Ministries",
                date: "10 de enero de 2024",
                locator: "Minutos 30:31 a 31:28",
                url: "https://www.youtube.com/watch?v=ht49ctjUawY&t=1831s",
                text: "después de los apóstoles, ¿cuál es la soul and foul rule of faith? Y así Hechos 15 es un registro de la obra del Espíritu, y mucho de lo que vemos en las epístolas de Pablo, y allí en Hechos, se ocupa de la iglesia que llega a luchar con el evangelio que va a los gentiles, y con la naturaleza de lo que será el nuevo pacto, y cómo ha de aplicarse, y todo este tipo de cosas. Y entonces, la idea de que un concilio del que solo conocemos, y solo sabemos cuál fue la conclusión de la conversación apostólica porque se halla en la Escritura, de que eso de alguna manera demuestra que la sola scriptura no es verdad, hace que todos digamos: eso es simplemente absurdo.",
                original:
                  "after the apostles, what is the soul and foul rule of faith? And so Acts 15 is a recording of the work of the spirit and so much of what we see in paul's epistles and there in acts is dealing with the church is coming to wrestle with the gospel going to the gentiles and the nature of what the new covenant is going to be um and how it's to be applied and all of this kind of stuff. And so the idea that a council that we only know about and we only know about what the conclusion of the apostolic conversation was because it's found in scripture that that somehow demonstrates that solo scriptura isn't true makes all of us go, that's just silly.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Acts.17.10"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Acts.17.11"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
      apologists: {
        arguments: [
          {
            title:
              "Ortlund sostiene que la iglesia del Nuevo Testamento pone a prueba las afirmaciones inciertas de autoridad divina contra lo que es cierto: los de Berea son llamados nobles en Hch 17:11 por examinar las Escrituras, y Pablo dice en Gál 1:8 que incluso la enseñanza angelical debe probarse contra el depósito ya recibido",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The ULTIMATE Case for Sola Scriptura",
                outlet: "Truth Unites",
                date: "19 de agosto de 2025",
                locator: "Minutos 25:29 a 26:46",
                url: "https://podcasters.spotify.com/pod/show/truth-unites/episodes/The-ULTIMATE-Case-for-Sola-Scriptura-e371tfb#t=1529",
                text: "Y así es bueno, apropiado, edificante y pertinente probar las afirmaciones de autoridad divina que son inciertas a la luz de las que son ciertas, y así es como vemos que funcionaba también la iglesia del Nuevo Testamento. Otra vez, a pesar de las objeciones comunes en contra, por eso se llama nobles a los de Berea en Hechos 17:11, porque examinaban las Escrituras para ver si estas cosas eran así. El verbo que se usa aquí para examinar, nota John Stott, se usa en otros pasajes del libro de Hechos para investigaciones judiciales. Así que el elogio aquí es por examinar las Escrituras para probar el mensaje que se predica. En Gálatas 1:8, Pablo incluso dice que la enseñanza angelical debe probarse según el depósito de revelación que ya se ha dado. Así que tomas lo que... El instinto aquí es conservador y razonable. Queremos tomar lo que sabemos que Dios ha dicho y vivir a la luz de ello. Y si surgen nuevas afirmaciones y no estamos seguros de si vienen de Dios, las probamos a la luz de lo que sí tenemos. Prueba lo que no es la Palabra inspirada de Dios por lo que sí es la Palabra inspirada de Dios, porque el discurso de Dios tiene mayor autoridad que cualquier otro discurso.",
                original:
                  "And so it is good and fitting and edifying and appropriate to test claims of divine authority that are uncertain in the light of those that are certain, and that is how we see the New Testament church functioning as well. Again, despite the common pushbacks against it, this is why the Bereans are called noble in Acts 17, 11, because they are examining the scriptures to see if these things were so. The verb used for examine here, John Stott notes, is used of judicial investigations elsewhere in the book of Acts. So the praise here is for examining the scriptures to test the message being preached. In Galatians 1.8, Paul even says that angelic teaching should be tested according to the deposit of revelation that has already been given. So you take what... The instinct here is conservative and reasonable. We want to take what we know God has said and live in light of that. And if new claims come along and we're not sure if they are from God, we test them in light of what we do have. Test that which isn't the inspired Word of God by that which is the inspired Word of God because God's speech is of greater authority than all other speech.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Durbin dice que la Escritura dedica a los de Berea un cumplido: más nobles de mente que los de Tesalónica, escudriñaban las Escrituras a diario para probar lo que predicaba un apóstol inspirado; lo toma como ejemplo de probar incluso las palabras de un apóstol contra la palabra escrita",
            quotes: [
              {
                speaker: "Jeff Durbin",
                work: 'Does The Bible Teach "Scripture Alone" (Sola Scriptura)?',
                outlet: "Apologia Studios",
                date: "22 de enero de 2020",
                locator: "Minutos 1:05:36 a 1:06:49",
                url: "https://www.youtube.com/watch?v=KPTdOoeofpc&t=3936s",
                text: "Otro ejemplo, y es uno famoso, ya lo conocen. En Hechos 17:11, la Escritura hace un cumplido. Dios, en su Palabra, les hace un cumplido a los creyentes de Berea. ¿Por qué? ¿Por qué? Dice que eran más nobles de mente que los de Tesalónica. ¿Por qué? Porque cuando el apóstol Pablo llegó a ellos, un apóstol inspirado con autoridad que llega a ellos, predicándoles, ¿qué dice de ellos? Escudriñaban las Escrituras cada día, ¿para qué? Para ver si lo que Pablo decía era verdad. Así que los cristianos de Berea estaban diciendo: Pablo, ¿eso qué es? Bueno, ¿qué es eso? Y entonces iban a la Palabra de Dios para ver si lo que él decía era realmente verdad. Más nobles de mente que los de Tesalónica. Estaban poniendo a prueba las palabras del apóstol Pablo. ¿Cuántos de nosotros, si Pablo entrara aquí ahora mismo y empezara a predicar, ustedes simplemente, así, solo lo tomarían todo sin pensar críticamente, ¿no? Solo aceptándolo. Pero ellos decían: bueno, esperen un momento. Espera, espera, espera, espera. Déjenme, déjenme ver. Déjenme, bueno, estaban así. Déjenme ver. Déjenme, déjenme ver. ¿Dónde, dónde dice eso? Están poniendo a prueba lo que dice el apóstol Pablo.",
                original:
                  "Another example, and it's a famous one, you know it. In Acts 17, verse 11, Scripture pays a compliment. God in His Word pays a compliment to the believers in Berea. Why? Why? It says they were more noble-minded than the ones in Thessalonica. Why? Because when the apostle Paul came to them, an inspired apostle with authority comes to them, preaching to them, it says what about them? They searched the scriptures daily to do what? To see if what Paul was saying was true. So the Berean Christians were saying, Paul, what's that? Okay, what's that? And then they were going to the word of God to see if what he was saying was actually true. More noble minded than those in Thessalonica. They were testing the words of the apostle Paul. How many of us, if Paul came in here right now and started preaching, you would just be like, like just, just take it all in and not thinking critically ultimately, right? Just accepting. But they're like, well, hang on now. Wait, wait, wait, wait. Let me, let me see. Let me, well, they were like this. Let me see. Let me, let me see. Where, where does it say that? They're testing what the apostle Paul says.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Acts.18.28"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Acts.28.23"],
      text: "Segunda Confesión de Londres (1689), 1.10 nota (x) (1688 p. 9): este versículo figura como nota al margen junto a la cláusula, en inglés, «The supream Judge by which all Controversies of Religion are to be determined, and all Decrees of Councels, Opinions of ancient Writers, Doctrines of Men, and private Spirits, are to be examined, and in whose sentence we are to rest, can be no other but the Holy Scripture delivered by the Spirit, into which Scripture so delivered, our Faith is finally resolved.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Rom.1.16"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Rom.3.2"],
      text: "Segunda Confesión de Londres (1689), 1.8 nota (o) (1688 p. 7): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Old Testament in Hebrew, (which was the Native Language of the People of God of old) and the New Testament in Greek […] are therefore authentical […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 6–7. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "«Inspirada por Dios» habla de la Escritura como discurso propio de Dios, infalible y ontológicamente única; ese punto por sí solo no establece la Sola Scriptura, y todas las tradiciones pueden estar de acuerdo en él",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The ULTIMATE Case for Sola Scriptura",
                outlet: "Gavin Ortlund, YouTube",
                date: "19 de agosto de 2025",
                locator: "Minutos 13:12 a 18:44",
                url: "https://www.youtube.com/watch?v=rpmcr7jOev4&t=792s",
                text: "usar el propio lenguaje bíblico para esto. Quizá el versículo más sobreutilizado, que seguramente conocen si siguen estas discusiones, es 2 Timoteo 3:16, donde Pablo dice que toda Escritura es exhalada por Dios. La palabra griega theanustas recibe mucha atención en estas conversaciones. A veces se traduce como inspirada por Dios, como en la NASB, o exhalada por Dios, como en la ESV aquí. Eh, no piensen en esto como si la idea fuera que la Escritura ya existe y luego Dios viene y sopla encima del texto para darle más poder o algo así. Más bien, piensen en la Escritura misma: las palabras mismas son las que son exhaladas por Dios. Así que John Stodd, en su comentario sobre este pasaje, dice que se podría usar la palabra griega espiración, como en Dios exhalando. Si estás afuera en una noche fría y respiras, y puedes ver tu aliento, el aliento de Dios: esa es la zona semántica aproximada de este término. Así que puedes llamar palabra de Dios, en un sentido más general, a un sermón que escuchas un domingo por la mañana, pero no lo llamamos exhalado por Dios en este sentido. Y esa es la distinción ontológica que intentamos transmitir con el adjetivo inspirada. Ahora bien, a veces esto se discute en 2 Timoteo 3:16; la palabra aparece y luego se usa de forma más amplia, y así sucesivamente, y entonces esto se complica. Así que digamos que el punto aquí no depende de ese único pasaje, como veremos. Este es un punto en el que todas las tradiciones pueden estar de acuerdo hoy, y es algo que se expresa de muchas maneras distintas en diferentes pasajes. Por ejemplo, 2 Pedro 1:21 habla de hombres que hablaron de parte de Dios mientras eran llevados por el Espíritu Santo. La gran idea de este pasaje es que la Escritura llega por un medio humano. El profeta es el que habla o escribe, pero el origen no es humano sino divino. Dios habla a través de ese medio humano. En su clásico tratamiento de la inspiración bíblica y la autoridad bíblica, BB Warfield comenta el verbo que se usa aquí en la frase llevados por el Espíritu Santo. Y lo que nos ayuda a entender es que esto es más que una guía general. Lo que está en juego aquí es que las palabras del autor humano son de Dios. De manera más coloquial, podríamos decir: la Escritura son las palabras de Dios. Es el habla de Dios. Así es como la Escritura habla de sí misma. Por ejemplo, Romanos 3:2 dice que a los judíos se les confiaron los oráculos de Dios. Talogu, las palabras de Dios; o la NASB dice: las palabras reales de Dios; la NIV: las palabras mismas de Dios. Doug Moo, en su comentario, sostiene que este término se entiende mejor como una referencia al Antiguo Testamento en su conjunto, como pueden ver en pantalla. Bien. Entonces el Antiguo Testamento son las palabras de Dios. Eh, Jesús en Mateo 19 citará Escritura del Antiguo Testamento. Ahora bien, no es Dios hablando dentro de la Escritura del Antiguo Testamento, no un relato en el que Dios dice algo que queda registrado dentro de la estructura más amplia, sino el texto mismo como habla de Dios. Eso es en realidad uno de los pasajes más relevantes en toda esta discusión. Y por eso entra en escena la infalibilidad: decimos que la Escritura es infalible porque es el habla de Dios, y Dios es omnisciente y perfecto. Así que Dios es infalible. Por lo tanto, el habla de Dios es infalible. Y sobre esa base decimos que la Escritura no puede heredar. No puede equivocarse. O, como dice Jesús en Juan 10:35, con un matiz de significado algo distinto: no puede ser quebrantada. Así que en este punto no tiene por qué ser, y a menudo no es, un desacuerdo con otras tradiciones cristianas que la Escritura es ontológicamente única en su naturaleza como palabra de Dios. Siempre quiero animar a la gente, especialmente cuando hacen videos de refutación: todavía no estoy haciendo el argumento. Este es un principio que va a estar dentro del contexto más amplio de un argumento que se despliega. Así que aguanten conmigo para ver la relevancia de esto. No se adelanten. No estoy estableciendo solos scriptor todavía. Bien, solo estamos estableciendo un punto: la Escritura es ontológicamente única como habla de Dios. Eh, la Iglesia Católica Romana enseña que la Escritura es el habla de Dios. Es puesta por escrito bajo el aliento del Espíritu Santo. En la teología católica romana, la Sagrada Escritura y la Sagrada Tradición juntas constituyen la palabra de Dios, pero de diferentes maneras. La Sagrada Tradición no es inspirada por el Espíritu Santo de la misma manera que la Sagrada Escritura. Y el papel del magisterio, incluso cuando funciona con infalibilidad, no es lo mismo que el habla divina. Eh, el charrorismo de la infalibilidad que se extiende a la iglesia en la teología católica romana se distingue de la revelación divina. Es una interpretación de la revelación divina que se sostiene como infalible, pero no es lo mismo que el habla de Dios. Así que cuando un papa habla ex cathedra, eso es infalible, pero no es exhalado por Dios, no es habla divina llevada por el Espíritu, los oráculos de Dios. No es lo mismo que la Escritura, y no está añadiendo cosas nuevas al depósito apostólico de la revelación divina. Es una interpretación de ese depósito. Eh, de manera similar, la teología católica romana concuerda en que la revelación divina pública ha cesado con la muerte de los últimos apóstoles.",
                original:
                  "use the biblical language itself for this. Maybe the most overutilized verse that I'm sure you're familiar with if you're into these discussions at all is 2 Timothy 3:16 where Paul says that all scripture is breathed out by God. The Greek word theanustas gets a lot of discussion in these conversations. Sometimes translated as inspired by God as in the NASB or breathed out by God in the ESV here. Um don't think of this as though the idea is the scripture already exists and then God comes along and like breathes on top of the text so as to give it extra power or something like that. Rather think of the scripture itself the very words themselves are what is breathed out by God. So John Stodd in his commentary on this passage says you could use uh the Greek word expiration as in you know God breathing out. If you're out on a cold night and you breathe and you can see your breath, the the breath of God, uh that's the in the semantic ballpark here of this term. So you you can call a sermon that you hear on a Sunday morning the word of God in a more general sense, but we don't call it God breathed in this sense. And that is the ontological distinction we're trying to convey with the adjective inspired. Now, sometimes this is disputed in 2 Timothy 3:16. this word comes up and because later it's used more broadly and so forth and so this gets complicated. So let's just say that the point here is not dependent on that one passage as we'll see. This is a point all traditions can agree upon today and it's just something that that is put in many different ways in different passages. For example, second Peter 1:21 uh speaks about men speaking from God as they were carried along by the Holy Spirit. The the big idea here in this passage is that uh scripture comes through a human medium. The prophet is is the one sp speaking or writing uh but the origin is not human but is rather divine. God is speaking through that human medium. In his classic treatment of biblical inspiration and biblical authority, BB Warfield comments on the verb used here in this phrase carried along by the Holy Spirit. And what he helps us understand is that this is more than just a general guidance. What is in view here is that the words of the human author are from God. More colloquially, we could say scripture is God's words. It is God's speech. This is how the scripture speaks of itself. For example, Romans 3:2 says that the Jews were entrusted with the oracles of God. Talogu, the words of God or NASB says the actual words of God. NIV, the very words of God. Doug Moo in his commentary argues that this term is best taken as a reference to the Old Testament as a whole, as you can see on screen. Okay. So this so the Old Testament is the words of God. Uh Jesus in Matthew 19 will quote Old Testament scripture. Now not God speaking in Old Testament scripture, not a narrative in which God says something that is sort of recorded within the larger structure, but just the the text itself as God speaking. That's actually one of the most relevant texts in this whole discussion. And so this is why infallibility will come into the picture is because we say the scripture is infallible because it's God's speech and God is omnisient and perfect. So God is infallible. So God's speech is therefore infallible. And it's on that basis that we say the scripture cannot heir. It cannot get it wrong. Or as Jesus puts it in John 10:35 uh with a slightly different nuance of meaning, it cannot be broken. So when it comes to this point, this need not be and often is not a point of disagreement with other Christian traditions that scripture is ontologically unique in its nature as the as the word of God. I always want to encourage people especially when they do rebuttal videos. I I'm not making the argument yet. This is one principle that is going to be in the larger context of an unfolding argument. So hang with me here for the relevance of this. Don't get ahead of me. I'm not this is not establishing solos scriptor yet. Okay? Okay, we're just establishing one point. The scripture is unique ontologically as the speech of God. Um the Roman Catholic Church uh teaches that scripture is the speech of God. Uh it is put down in writing under the breath of the Holy Spirit. In Roman Catholic theology, sacred scripture and sacred tradition together constitute the word of God, but in different ways. Sacred tradition is not inspired by the Holy Spirit in the same way that sacred scripture is. And the role of the magisterium, even when functioning with infallibility, isn't the same thing as divine speech. Uh the charrorism of infallibility that's extended to the church in Roman Catholic theology is distinguished from divine revelation. It's an interpretation of divine revelation that that is held to be infallible, but it's not the same thing as the speech of God. So when a pope speaks ex cathedra, that's infallible, but it's not God breathed, spirit carried divine speech, the oracles of God. It's not the same thing as scripture, and it's not adding new things on to the to the apostolic deposit of divine revelation. It's an interpretation of that. Um, similarly, Roman Catholic theology agrees that public divine revelation has ceased with the death of the last apostles.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Ortlund sostiene que la Escritura es en sí misma palabra inspirada por Dios: lee «inspirada por Dios» (2 Tim 3:16), hombres llevados por el Espíritu Santo (2 Pe 1:21) y los «oráculos de Dios» (Rom 3:2) como que las mismas palabras de la Escritura son palabras de Dios, y sobre esa base llama a la Escritura infalible, como dice Jesús que «no puede ser quebrantada» (Jn 10:35); dice que este punto por sí solo aún no establece la sola scriptura",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The ULTIMATE Case for Sola Scriptura",
                outlet: "Truth Unites",
                date: "19 de agosto de 2025",
                locator: "Minutos 13:38 a 17:00",
                url: "https://podcasters.spotify.com/pod/show/truth-unites/episodes/The-ULTIMATE-Case-for-Sola-Scriptura-e371tfb#t=818",
                text: "No pienses en esto como si la idea fuera que la Escritura ya existe, y que después Dios viene y, por así decirlo, sopla sobre el texto para darle un poder extra o algo así. Piensa más bien en la Escritura misma. Las palabras mismas son las que Dios exhaló. Por eso John Stott, en su comentario sobre este pasaje, dice que podrías usar la palabra griega que significa «expiración», como en Dios exhalando. Si estás afuera en una noche fría, respiras y puedes ver tu aliento, el aliento de Dios. Eso cae en el campo semántico de este término. Así que puedes llamar a un sermón que escuchas un domingo por la mañana la Palabra de Dios en un sentido más general, pero no lo llamamos exhalado por Dios en este sentido, y esa es la distinción ontológica que intentamos transmitir con el adjetivo inspirada. Ahora bien, a veces esto se discute en 2 Tim. 3:16. Esta palabra aparece ahí porque más adelante se usa de manera más amplia, y así sucesivamente, y esto se complica. Así que digamos solamente que el punto aquí no depende de ese pasaje. Como veremos, este es un punto en el que todas las tradiciones pueden estar de acuerdo hoy, y simplemente se expresa de muchas maneras distintas en diferentes pasajes. Por ejemplo, 2 Pet. 1:21 habla de hombres que hablaron de parte de Dios siendo llevados por el Espíritu Santo. La gran idea de este pasaje es que la Escritura llega por un medio humano. El profeta es quien habla o escribe. Pero el origen no es humano, sino divino. Dios habla por ese medio humano. En su clásico tratamiento de la inspiración bíblica y la autoridad bíblica, B.B. Warfield comenta el verbo que se usa aquí en la frase llevados por el Espíritu Santo, y lo que nos ayuda a entender es que esto es más que una guía general. Lo que está en vista aquí es que las palabras del autor humano son de Dios. De forma más coloquial, podríamos decir que la Escritura son las palabras de Dios. Es el discurso de Dios. Así habla la Escritura de sí misma. Por ejemplo, Rom. 3:2 dice que a los judíos les fueron confiados los oráculos de Dios, Ta-logia tu-tha-u, las palabras de Dios, o la NASB dice las palabras reales de Dios, la NIV, las mismísimas palabras de Dios. Doug Moo, en su comentario, sostiene que este término se entiende mejor como una referencia al Antiguo Testamento en su conjunto, como pueden ver en pantalla. Bien, entonces el Antiguo Testamento son las palabras de Dios. Jesús en Mat. 19 citará Escritura del Antiguo Testamento. Ahora bien, no Dios hablando en el Antiguo Testamento, no una narración en la que Dios dice algo que queda registrado dentro de la estructura mayor, sino solo el texto mismo como Dios hablando. Eso es en realidad uno de los textos más relevantes en toda esta discusión. Y por eso entra en escena la infalibilidad, porque decimos que la Escritura es infalible porque es el discurso de Dios. Y Dios es omnisciente y perfecto, así que Dios es infalible. Por lo tanto, el discurso de Dios es infalible. Y sobre esa base decimos que la Escritura no puede errar, no puede equivocarse, o como dice Jesús en Juan 10:35 con un matiz de significado algo distinto, no puede ser quebrantada.",
                original:
                  "Don't think of this as though the idea is the Scripture already exists, and then God comes along and like breathes on top of the text so as to give it extra power or something like that. Rather, think of the scripture itself. The very words themselves are what is breathed out by God. So John Stott in his commentary on this passage says you could use the Greek word expiration, as in God breathing out. If you're out on a cold night and you breathe and you can see your breath, the breath of God. That's in the semantic ballpark here of this term. So you can call a sermon that you hear on a Sunday morning the Word of God in a more general sense, but we don't call it God breathed in this sense, and that is the ontological distinction we're trying to convey with the adjective inspired. Now, sometimes this is disputed in 2 Timothy 3.16. This word comes up because later it's used more broadly and so forth, and so this gets complicated. So let's just say that the point here is not dependent on that one passage. As we'll see, this is a point all traditions can agree upon today, and it's just something that is put in many different ways in different passages. For example, 2 Peter 1.21 speaks about men speaking from God as they were carried along by the Holy Spirit. The big idea here in this passage is that Scripture comes through a human medium. The prophet is the one speaking or writing. But the origin is not human, but is rather divine. God is speaking through that human medium. In his classic treatment of biblical inspiration and biblical authority, B.B. Warfield comments on the verb used here in this phrase, carried along by the Holy Spirit. and what he helps us understand is that this is more than just a general guidance. What is in view here is that the words of the human author are from God. More colloquially, we could say scripture is God's words. It is God's speech. This is how the scripture speaks of itself. For example, Romans 3.2 says that the Jews were entrusted with the oracles of God, Ta-logia tu-tha-u, the words of God, or NASB says the actual words of God, NIV, the very words of God. Doug Moo in his commentary argues that this term is best taken as a reference to the Old Testament as a whole, as you can see on screen. Okay, so the Old Testament is the words of God. Jesus in Matthew 19 will quote Old Testament scripture. Now, not God speaking in Old Testament Scripture, not a narrative in which God says something that is sort of recorded within the larger structure, but just the text itself as God speaking. That's actually one of the most relevant texts in this whole discussion. And so this is why infallibility will come into the picture, is because we say the Scripture is infallible because it's God's speech. And God is omniscient and perfect, so God is infallible. So God's speech is therefore infallible. And it's on that basis that we say the scripture cannot err, it cannot get it wrong, or as Jesus puts it in John 10.35 with a slightly different nuance of meaning, it cannot be broken.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Durbin toma 2 Tim 3:16 como una explicación, en la revelación inspirada, de la naturaleza de la Escritura: «toda Escritura» se refiere principalmente al Antiguo Testamento, que Pablo dice en Romanos 3 que fue confiado a Israel como «los oráculos de Dios», y lo llama habla propia de Dios; luego dice que la afirmación debe pensarse en confrontación con las pretensiones de Roma sobre el papado y el magisterio docente, y que la Escritura es única y distinta",
            quotes: [
              {
                speaker: "Jeff Durbin",
                work: "Jeff Durbin: Overcoming Objections to Sola Scriptura",
                outlet: "Apologia Studios",
                date: "26 de febrero de 2024",
                locator: "Minutos 7:00 a 8:54",
                url: "https://www.youtube.com/watch?v=vHJxo2jkQ7E&t=420s",
                text: "pero Dios ha hablado. Y lo que tenemos aquí es una explicación, en la revelación inspirada, sobre la naturaleza de la Escritura. Eso es lo principal que quieren captar ahora mismo. La naturaleza de la Escritura. ¿Qué es esto? ¿Qué es? Sabemos que es Dios hablando, pero Pablo dijo algo sobre su naturaleza. Dice: toda Escritura, y aquí se refiere principalmente a las Escrituras del Antiguo Testamento, porque la revelación del Nuevo Testamento todavía está en curso cuando esto se escribe. Pablo es un apóstol inspirado; en este mismo momento, en 2 Timoteo capítulo 3 versículo 16, está literalmente dando revelación continua. La revelación todavía está sucediendo, pero ¿a qué se refiere principalmente? ¿Qué? A la revelación del Antiguo Testamento, lo que Dios le había dado al pueblo judío, a Israel. Dice en Romanos 3 que les fueron confiados, no se pierdan esto, los oráculos de Dios: que Dios soberanamente determina dar su propio discurso, su revelación divina, a Israel. Se la confió a Israel. La custodia con Israel. Y los judíos tenían los oráculos de Dios. Y aquí Pablo está diciendo: ustedes conocen las Escrituras, y ¿qué dice de ellas? Que son theonustos, exhaladas por Dios. Ahora bien, en una serie como esta, tienen que pensar en las implicaciones de esa afirmación sobre la Escritura en relación, por ejemplo, con el catolicismo romano, las afirmaciones del papado, el magisterio de enseñanza, tal vez sus amigos ortodoxos orientales, o sus amigos mormones, o los testigos de Jehová. Tienen que pensarlo a la luz de ese conflicto y decir: bueno, pero la Escritura es única. Es distinta. Es el discurso mismo de Dios. Pero tenemos que ir más allá de eso.",
                original:
                  "but God has spoken. And what we have here is an explanation in inspired revelation about the nature of scripture. That's the key thing you want to get across right now. The nature of scripture. What is this? What is it? We know that it's God speaking, but Paul said something about its nature. He says, all scripture, and he's referring here to the Old Testament scriptures primarily because New Testament revelation is still ongoing when this is written. Paul's an inspired apostle. He's literally giving continued revelation at this moment in 2 Timothy chapter 3 verse 16. Revelation is still happening, but he's primarily referring to what? The Old Testament revelation, what God had given to the Jewish people, to Israel. He says in Romans 3, they were entrusted with, don't miss this, the oracles of God, that God sovereignly determines to give his own speech, his divine revelation to Israel. He entrusted to Israel. He guards it with Israel. And the Jews had the oracles of God. And here Paul is saying, you've known the scriptures. and what is he saying about them that they are theonustos breathed out by god now i know in a series like this you you have to because it's part of what we're doing you have to think about the implications of that claim in scripture related to say roman catholicism the claims of the papacy the teaching magisterium maybe your eastern orthodox friends or your mormon friends or the Jehovah's Witnesses. You have to think about it in the light of that conflict and go, okay, but scripture is unique. It's distinct. It's the very speech of God. But we need to go beyond that.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Rom.10.13"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Rom.11.31-Rom.11.32"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Rom.15.4"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
      apologists: {
        arguments: [
          {
            title:
              "White dice que Pablo reconoce la intencionalidad de la revelación escrituraria en Rom 15:4 («todo lo que fue escrito en tiempos anteriores fue escrito para nuestra instrucción, a fin de que por la perseverancia y el aliento de las Escrituras tengamos esperanza») y en 1 Cor 10:11; las cosas se escribieron con el conocimiento de Dios, mediante su decreto de edificar la iglesia, para que quienes vinieran después tuvieran esperanza",
            quotes: [
              {
                speaker: "James White",
                work: "An In Depth Study of Tradition and the Canon",
                outlet: "Alpha & Omega Ministries",
                date: "14 de abril de 2022",
                locator: "Minutos 51:28 a 53:00",
                url: "https://www.youtube.com/watch?v=RR0RXeCQdL0&t=3088s",
                text: "Y eso lo reconoce el apóstol Pablo en Romanos 15:4. Dice: porque todo lo que fue escrito en tiempos anteriores fue escrito para nuestra instrucción, para que por la perseverancia y el consuelo de las Escrituras tengamos esperanza. Así que para Pablo, había cosas escritas en tiempos anteriores que quienes vivieron en esos tiempos no experimentaron realmente el cumplimiento de lo que esas Escrituras decían. Pero fueron escritas con el conocimiento de Dios, mediante su decreto de la edificación de la iglesia, la construcción de la iglesia, para que por la perseverancia y el consuelo de las Escrituras tengamos esperanza. Esa es la promesa de Pablo para nosotros. Y de igual manera, en 1 Corintios 10:11, dice: estas cosas les sucedieron como ejemplo, y fueron escritas para nuestra instrucción, sobre quienes han llegado los fines de los siglos. Y así hay una comprensión de que en el gran acto de la encarnación, la muerte, la sepultura y la resurrección de Cristo, ahora derramando el Espíritu Santo y ahora edificando el cuerpo de Cristo, estas Escrituras, que originalmente habían sido para un pequeño grupo de personas, en realidad contienen ejemplos y consuelo para nosotros, para la edificación del cuerpo de Cristo mismo. Y así, sí, hay esa intencionalidad que viene con eso.",
                original:
                  "And that's recognized by the Apostle Paul in Romans 15.4. He says, for whatever was written in earlier times was written for our instruction, so that through perseverance and the encouragement of the scriptures, we might have hope. So for Paul, there were things written in earlier times that those in earlier times did not actually experience the fulfillment of what those scriptures were saying. But they were written with God's knowledge via his decree of the building of the church, the construction of the church, so that through perseverance and encouragement of the scriptures, we might have hope. That is Paul's promise to us. And likewise, in 1 Corinthians 10, 11, he says, now these things happen to them as an example, and they were written for our instruction, upon whom the ends of the ages have come. And so there is understanding that in the great act of the incarnation and the death and burial and resurrection of Christ, now pouring the Holy Spirit and now the building the body of Christ, these scriptures, which had originally been for a small group of people, actually contain examples and encouragement for us for the building of the body of Christ itself. And so, yes, there is that intentionality that comes with that.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Rom.15.4-Rom.15.5"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "White dice que Pablo reconoce la intencionalidad de la revelación escrituraria en Rom 15:4 («todo lo que fue escrito en tiempos anteriores fue escrito para nuestra instrucción, a fin de que por la perseverancia y el aliento de las Escrituras tengamos esperanza») y en 1 Cor 10:11; las cosas se escribieron con el conocimiento de Dios, mediante su decreto de edificar la iglesia, para que quienes vinieran después tuvieran esperanza",
            quotes: [
              {
                speaker: "James White",
                work: "An In Depth Study of Tradition and the Canon",
                outlet: "Alpha & Omega Ministries",
                date: "14 de abril de 2022",
                locator: "Minutos 51:28 a 53:00",
                url: "https://www.youtube.com/watch?v=RR0RXeCQdL0&t=3088s",
                text: "Y eso lo reconoce el apóstol Pablo en Romanos 15:4. Dice: porque todo lo que fue escrito en tiempos anteriores fue escrito para nuestra instrucción, para que por la perseverancia y el consuelo de las Escrituras tengamos esperanza. Así que para Pablo, había cosas escritas en tiempos anteriores que quienes vivieron en esos tiempos no experimentaron realmente el cumplimiento de lo que esas Escrituras decían. Pero fueron escritas con el conocimiento de Dios, mediante su decreto de la edificación de la iglesia, la construcción de la iglesia, para que por la perseverancia y el consuelo de las Escrituras tengamos esperanza. Esa es la promesa de Pablo para nosotros. Y de igual manera, en 1 Corintios 10:11, dice: estas cosas les sucedieron como ejemplo, y fueron escritas para nuestra instrucción, sobre quienes han llegado los fines de los siglos. Y así hay una comprensión de que en el gran acto de la encarnación, la muerte, la sepultura y la resurrección de Cristo, ahora derramando el Espíritu Santo y ahora edificando el cuerpo de Cristo, estas Escrituras, que originalmente habían sido para un pequeño grupo de personas, en realidad contienen ejemplos y consuelo para nosotros, para la edificación del cuerpo de Cristo mismo. Y así, sí, hay esa intencionalidad que viene con eso.",
                original:
                  "And that's recognized by the Apostle Paul in Romans 15.4. He says, for whatever was written in earlier times was written for our instruction, so that through perseverance and the encouragement of the scriptures, we might have hope. So for Paul, there were things written in earlier times that those in earlier times did not actually experience the fulfillment of what those scriptures were saying. But they were written with God's knowledge via his decree of the building of the church, the construction of the church, so that through perseverance and encouragement of the scriptures, we might have hope. That is Paul's promise to us. And likewise, in 1 Corinthians 10, 11, he says, now these things happen to them as an example, and they were written for our instruction, upon whom the ends of the ages have come. And so there is understanding that in the great act of the incarnation and the death and burial and resurrection of Christ, now pouring the Holy Spirit and now the building the body of Christ, these scriptures, which had originally been for a small group of people, actually contain examples and encouragement for us for the building of the body of Christ itself. And so, yes, there is that intentionality that comes with that.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Rom.16.25-Rom.16.26"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["1Cor.1.20"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1Cor.2.6-1Cor.2.7"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1Cor.2.9-1Cor.2.12"],
      text: "Segunda Confesión de Londres (1689), 1.6 notas (i), (k) (1719 pp. 29–30; McGlothlin p. 229): este versículo figura como nota al margen junto a la cláusula, en inglés, «The whole Councel of God concerning all things necessary for his own Glory, Mans Salvation, Faith and Life, is either expressely set down or necessarily contained in the Holy Scripture […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 1.6 nota (k) (1688 p. 6): este versículo figura como nota al margen junto a la cláusula, en inglés, «Nevertheless we acknowledge the inward Illumination of the Spirit of God, to be necessary for the saving understanding of such things as are revealed in the Word […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 6–7.",
      apologists: {
        arguments: [
          {
            title:
              "La Escritura sola, no Escritura más Tradición más Magisterio, es la autoridad última de la iglesia; la iglesia no carece de toda otra autoridad, y la tradición (con t minúscula) se conserva como sabiduría acumulada; la autoridad de la Palabra va con el Espíritu Santo, que la inspiró y capacita a la iglesia para entenderla",
            quotes: [
              {
                speaker: "Gregg R. Allison",
                work: "Two Views on Church Authority: Protestant vs. Roman Catholic",
                outlet: "9Marks",
                date: "26 de septiembre de 2017",
                locator:
                  "4 párrafos: del párrafo que empieza «The Protestant authority structure consists of…» al que termina «…were forged in the early church.»",
                url: "https://www.9marks.org/article/two-views-on-church-authority-protestant-vs-roman-catholic/",
                text: "La estructura de autoridad protestante consta de un solo elemento: la Escritura como Palabra escrita de Dios, inspirada divinamente, autoritativa, verdadera, suficiente, necesaria, clara y transformadora para personas pecadoras. En contraste con los católicos romanos, los protestantes sostienen la sola Scriptura: la Escritura es la única autoridad de la iglesia, determinante en última instancia para la doctrina, la práctica, la fe, la adoración y el ministerio. En tiempos de la Reforma, este principio se unió a un rechazo explícito de la estructura de autoridad católico-romana. La Escritura sola, no la Escritura más la Tradición más el Magisterio, es la autoridad de la iglesia.\n\nTres precisiones son necesarias en este punto: Primero, la autoridad bíblica debe relacionarse siempre con Dios mismo, quien como Señor soberano se revela a sí mismo y sus caminos por medio de la Escritura inspirada, y por tanto autoritativa. Dios sostiene la relación más estrecha posible con su Palabra. En consecuencia, obedecer la Palabra de Dios es obedecer a Dios mismo. Desobedecer la Palabra de Dios es desobedecer a Dios mismo. Confiar en la Palabra de Dios es confiar en Dios mismo. Desconfiar de la Palabra de Dios es desconfiar de Dios mismo. En palabras de Timothy Ward: “Dios se ha identificado tanto con sus palabras que lo que alguien le hace a las palabras de Dios . . . lo hace directamente a Dios mismo”. Esta afirmación no iguala a Dios con su Palabra. Pero sí deja claro que el Dios a quien pertenece toda autoridad para mandar lo que los creyentes deben hacer y creer, y para prohibir lo que no deben hacer ni creer, está detrás de su Palabra autoritativa.\n\nAsí, la autoridad de la Palabra de Dios va de la mano con la autoridad del Espíritu Santo, quien inspiró esa Palabra (2 Pet. 1:19–21; 2 Tim. 3:15–17) y capacita a la iglesia para entenderla (1 Cor. 2:10–16).\n\nSegundo, la sola Scriptura es el principio de autoridad última, y no significa que la iglesia carezca de cualquier otra autoridad. Aunque las iglesias protestantes rechazan con razón la Tradición (con T mayúscula) de la Iglesia católica, no rechazan la tradición (con t minúscula), es decir, la sabiduría acumulada de la iglesia histórica. Ejemplos de tradición son las doctrinas de la Trinidad (un Dios, tres personas) y de Cristo (una persona, dos naturalezas), que se formularon en la iglesia primitiva.",
                original:
                  "The Protestant authority structure consists of one element: Scripture as the written Word of God, divinely inspired, authoritative, true, sufficient, necessary, clear, and transformative for sinful people. In contrast to Roman Catholics, Protestants hold to  sola Scriptura: Scripture is the church’s sole authority, ultimately determinative for doctrine, practice, faith, worship, and ministry. At the time of the Reformation, this principle was coupled with an explicit rejection of the Roman Catholic authority structure. Scripture alone, not Scripture plus Tradition plus the Magisterium, is the church’s authority.\n\nThree qualifications are needed at this point: First, biblical authority must always be related to God himself, who as the sovereign Lord reveals himself and his ways through inspired, and thus authoritative, Scripture. God sustains the closest possible relationship to his Word. Accordingly, to obey God’s Word is to obey God himself. To disobey God’s Word is to disobey God himself. To trust God’s Word is to trust God himself. To mistrust God’s Word is to mistrust God himself. In the words of Timothy Ward: “God has so identified himself with his words that whatever someone does to God’s words . . . they do directly to God himself.” This affirmation does not equate God with his Word. But it does make clear that the God to whom all authority belongs to command what believers are to do and believe, and prohibit what they are not to do and believe, stands behind his authoritative Word.\n\nThus, the authority of the Word of God goes hand in hand with the authority of the Holy Spirit, who inspired that Word (2 Pet. 1:19–21; 2 Tim. 3:15–17) and enables the church to understand it (1 Cor. 2:10–16).\n\nSecond, sola Scriptura is the principle of ultimate authority and does not mean the church is without any other authority. Though Protestant churches rightly reject the Tradition (capital T) of the Catholic Church, they do not reject tradition (small t), or the accumulated wisdom of the historical church. Examples of tradition include the doctrines of the Trinity (one God, three persons) and of Christ (one person, two natures) that were forged in the early church.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.2.10-1Cor.2.12"],
      text: "Segunda Confesión de Londres (1689), 1.5 nota (b) (1688 p. 5; McGlothlin p. 229): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] our full perswasion, and assurance of the infallible truth, and divine authority thereof, is from the inward work of the Holy Spirit, bearing witness by and with the Word in our Hearts.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "La Escritura sola, no Escritura más Tradición más Magisterio, es la autoridad última de la iglesia; la iglesia no carece de toda otra autoridad, y la tradición (con t minúscula) se conserva como sabiduría acumulada; la autoridad de la Palabra va con el Espíritu Santo, que la inspiró y capacita a la iglesia para entenderla",
            quotes: [
              {
                speaker: "Gregg R. Allison",
                work: "Two Views on Church Authority: Protestant vs. Roman Catholic",
                outlet: "9Marks",
                date: "26 de septiembre de 2017",
                locator:
                  "4 párrafos: del párrafo que empieza «The Protestant authority structure consists of…» al que termina «…were forged in the early church.»",
                url: "https://www.9marks.org/article/two-views-on-church-authority-protestant-vs-roman-catholic/",
                text: "La estructura de autoridad protestante consta de un solo elemento: la Escritura como Palabra escrita de Dios, inspirada divinamente, autoritativa, verdadera, suficiente, necesaria, clara y transformadora para personas pecadoras. En contraste con los católicos romanos, los protestantes sostienen la sola Scriptura: la Escritura es la única autoridad de la iglesia, determinante en última instancia para la doctrina, la práctica, la fe, la adoración y el ministerio. En tiempos de la Reforma, este principio se unió a un rechazo explícito de la estructura de autoridad católico-romana. La Escritura sola, no la Escritura más la Tradición más el Magisterio, es la autoridad de la iglesia.\n\nTres precisiones son necesarias en este punto: Primero, la autoridad bíblica debe relacionarse siempre con Dios mismo, quien como Señor soberano se revela a sí mismo y sus caminos por medio de la Escritura inspirada, y por tanto autoritativa. Dios sostiene la relación más estrecha posible con su Palabra. En consecuencia, obedecer la Palabra de Dios es obedecer a Dios mismo. Desobedecer la Palabra de Dios es desobedecer a Dios mismo. Confiar en la Palabra de Dios es confiar en Dios mismo. Desconfiar de la Palabra de Dios es desconfiar de Dios mismo. En palabras de Timothy Ward: “Dios se ha identificado tanto con sus palabras que lo que alguien le hace a las palabras de Dios . . . lo hace directamente a Dios mismo”. Esta afirmación no iguala a Dios con su Palabra. Pero sí deja claro que el Dios a quien pertenece toda autoridad para mandar lo que los creyentes deben hacer y creer, y para prohibir lo que no deben hacer ni creer, está detrás de su Palabra autoritativa.\n\nAsí, la autoridad de la Palabra de Dios va de la mano con la autoridad del Espíritu Santo, quien inspiró esa Palabra (2 Pet. 1:19–21; 2 Tim. 3:15–17) y capacita a la iglesia para entenderla (1 Cor. 2:10–16).\n\nSegundo, la sola Scriptura es el principio de autoridad última, y no significa que la iglesia carezca de cualquier otra autoridad. Aunque las iglesias protestantes rechazan con razón la Tradición (con T mayúscula) de la Iglesia católica, no rechazan la tradición (con t minúscula), es decir, la sabiduría acumulada de la iglesia histórica. Ejemplos de tradición son las doctrinas de la Trinidad (un Dios, tres personas) y de Cristo (una persona, dos naturalezas), que se formularon en la iglesia primitiva.",
                original:
                  "The Protestant authority structure consists of one element: Scripture as the written Word of God, divinely inspired, authoritative, true, sufficient, necessary, clear, and transformative for sinful people. In contrast to Roman Catholics, Protestants hold to  sola Scriptura: Scripture is the church’s sole authority, ultimately determinative for doctrine, practice, faith, worship, and ministry. At the time of the Reformation, this principle was coupled with an explicit rejection of the Roman Catholic authority structure. Scripture alone, not Scripture plus Tradition plus the Magisterium, is the church’s authority.\n\nThree qualifications are needed at this point: First, biblical authority must always be related to God himself, who as the sovereign Lord reveals himself and his ways through inspired, and thus authoritative, Scripture. God sustains the closest possible relationship to his Word. Accordingly, to obey God’s Word is to obey God himself. To disobey God’s Word is to disobey God himself. To trust God’s Word is to trust God himself. To mistrust God’s Word is to mistrust God himself. In the words of Timothy Ward: “God has so identified himself with his words that whatever someone does to God’s words . . . they do directly to God himself.” This affirmation does not equate God with his Word. But it does make clear that the God to whom all authority belongs to command what believers are to do and believe, and prohibit what they are not to do and believe, stands behind his authoritative Word.\n\nThus, the authority of the Word of God goes hand in hand with the authority of the Holy Spirit, who inspired that Word (2 Pet. 1:19–21; 2 Tim. 3:15–17) and enables the church to understand it (1 Cor. 2:10–16).\n\nSecond, sola Scriptura is the principle of ultimate authority and does not mean the church is without any other authority. Though Protestant churches rightly reject the Tradition (capital T) of the Catholic Church, they do not reject tradition (small t), or the accumulated wisdom of the historical church. Examples of tradition include the doctrines of the Trinity (one God, three persons) and of Christ (one person, two natures) that were forged in the early church.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.5.4-1Cor.5.6"],
      text: "Credo Ortodoxo (1678), XXXIX, p. 154: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "En el resumen del autor de una serie de sermones, los casos de 1 Cor 5:1–13 y 2 Cor 2:5–11 (con Gál 1:6–9) muestran cómo los apóstoles aplicaron la enseñanza de Cristo sobre la membresía de la iglesia; Mt 18:15–20 se cita, no se expone",
            quotes: [
              {
                speaker: "Trent Hunter",
                work: "What Happens When We Turn the Keys?",
                outlet: "9Marks",
                date: "8 de mayo de 2026",
                locator:
                  "3 párrafos: del párrafo que empieza «In September we worked through a…» al que termina «…Cor. 5:1–13, and 2 Cor. 2:5–11).»",
                url: "https://www.9marks.org/article/what-happens-when-we-turn-the-keys/",
                text: "En septiembre trabajamos con un conjunto de textos de nuestro Nuevo Testamento que delinean el plan de Jesús para edificar su iglesia. En Mateo 16, Pedro confesó que Jesús es “el Cristo, el Hijo del Dios viviente” (Mt. 16:16). Jesús respondió,\n\nTú eres Pedro, y sobre esta roca edificaré mi iglesia, y las puertas del infierno no prevalecerán contra ella. Te daré las llaves del reino de los cielos, y todo lo que ates en la tierra será atado en los cielos, y todo lo que desates en la tierra será desatado en los cielos. (Mt. 16:18–19)\n\nSi es crucial asegurarse de que las personas adecuadas tengan las llaves de tu casa, Jesús se toma la pregunta no menos en serio para su propio reino. Tres sermones de septiembre respondieron a la pregunta: Who Holds the Keys? Del primer sermón, “The King and His Kingdom”, aprendimos que Jesús es el rey del cielo que manifiesta su reinado en las iglesias que confiesan su nombre (Mt. 16:13–18). En la segunda semana, “The Keys and the Keepers”, aprendimos que es trabajo de cada miembro guardar el nombre de Jesús (Mt. 16:19; 18:15–20). En nuestra tercera semana, “Turning the Keys Together”, examinamos tres casos de estudio para mostrar cómo los apóstoles instruyeron a las iglesias sobre la base de la enseñanza de Cristo: cómo aplicaron su plano para la membresía de la iglesia (Gál. 1:6–9, 1 Cor. 5:1–13 y 2 Cor. 2:5–11).",
                original:
                  "In September we worked through a set of texts in our New Testament that outline Jesus’s plan for building his church. In Matthew 16, Peter confessed that Jesus is “the Christ, the Son of the living God” (Matt. 16:16). Jesus responded,\n\nYou are Peter, and on this rock I will build my church, and the gates of hell shall not prevail against it. I will give you the keys of the kingdom of heaven, and whatever you bind on earth shall be bound in heaven, and whatever you loose on earth shall be loosed in heaven. (Matt. 16:18–19)\n\nIf it’s crucial to make sure the right people have the keys to your house, Jesus takes the question no less seriously for his own kingdom. Three sermons in September answered the question, Who Holds the Keys? From our first sermon, “The King and His Kingdom,” we learned that Jesus is heaven’s king who manifests his reign in churches that confess his name (Matt. 16:13–18). In week two, “The Keys and the Keepers,” we learned that it is every member’s job to guard Jesus’s name (Matt. 16:19; 18:15–20). In our third week, “Turning the Keys Together,” we examined three case studies to show how the apostles instructed the churches on the basis of Christ’s teaching—how they applied his blueprint for church membership (Gal. 1:6–9, 1 Cor. 5:1–13, and 2 Cor. 2:5–11).",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "El congregacionalismo deja que la congregación funcione como instancia final de apelación en los asuntos de la iglesia local, viviendo bajo el señorío de Cristo y bajo pastores o ancianos que la dirigen; las cartas del Nuevo Testamento están escritas a iglesias enteras (Gál 1:8), y toda la congregación ejerce disciplina (Mt 18:15–20; 1 Cor 5:1–13; 2 Cor 2:5–11)",
            quotes: [
              {
                speaker: "Stephen J. Wellum",
                work: "The Priesthood of All Believers and Why the New Covenant Requires Congregationalism",
                outlet: "9Marks",
                date: "16 de septiembre de 2025",
                locator:
                  "2 párrafos: del párrafo que empieza «Evidence for congregationalism can be found…» al que termina «…affairs under the lordship of Christ.»",
                url: "https://www.9marks.org/article/the-priesthood-of-all-believers-and-why-the-new-covenant-requires-congregationalism/",
                text: "Hay evidencia del congregacionalismo en todo el NT. Como creyentes pactados juntos, se escogieron ancianos (Hech. 14:23; Tito 1:5), se predicó la Palabra de Dios y se practicaron las ordenanzas (Hech. 2:42; 1 Cor. 11:26), y la iglesia tomó expresión visible en asambleas locales que gobernaban sus propios asuntos. Por eso una gran cantidad de cartas del NT fueron escritas a iglesias locales, no meramente a oficiales de la iglesia o a algún cuerpo eclesiástico más grande. Las cartas fueron escritas para instruir a toda la congregación sobre sus responsabilidades de gobernarse a sí misma y de protegerse de falsos maestros. Por ejemplo, en Gálatas, Pablo espera que esta joven iglesia juzgue la autoridad angelical y apostólica si predicaran algo contrario al mensaje apostólico (Gal. 1:8). Como dice Mark Dever, “Él [Pablo] no escribe meramente a los pastores, al presbiterio, al obispo o a la conferencia, a la convención, o al seminario. Escribe a los cristianos que componen las iglesias, ¡y deja muy claro que no solo son competentes para juzgar lo que pretende ser el evangelio, sino que deben hacerlo!”Mark Dever, A Display of God’s Glory: Basics of Church Structure—Deacons, Elders, Congregationalism, and Membership (2nd ed.; Washington, DC: 9Marks Ministries, 2001), 35.\n\nEl congregacionalismo se confirma además en la práctica de la disciplina eclesiástica. No son solo los líderes quienes deben ejercer disciplina sino toda la congregación. La iglesia debe ejercer autoridad sobre los falsos maestros (2 Cor. 10–13; Gal. 1:8; 2 Juan) y sobre la vida de las personas (Mat. 18:15–20; 1 Cor. 5:1–13; 2 Cor. 2:5–11). Por eso Pablo se angustia por el comportamiento de la iglesia de Corinto, que no puede resolver disputas desde dentro y en cambio busca la ayuda de no cristianos. Para Pablo, la iglesia está actuando en contra de lo que ella es, y mediante una serie de preguntas punzantes, lo deja abundantemente claro (ver 1 Cor. 6:2–5a). La consternación de Pablo con la iglesia solo tiene sentido si asume que toda la iglesia está involucrada en este tipo de decisiones. Cada miembro tiene un papel que cumplir porque toda la iglesia es, en última instancia, la corte final de apelación para sus propios asuntos bajo el señorío de Cristo.",
                original:
                  "Evidence for congregationalism can be found throughout the NT. As believers covenanted together, elders were chosen (Acts 14:23; Titus 1:5), God’s Word was preached, and the ordinances were practiced (Acts 2:42; 1 Cor. 11:26), the church took on visible expression in local assemblies that governed their own affairs. This is why a vast number of NT letters were written to local churches, not merely to church officers or some larger ecclesiastical body. The letters were written to instruct the entire congregation of their responsibilities to govern themselves and to protect themselves from false teachers. For example, in Galatians, Paul expects this young church to sit in judgment of angelic and apostolic authority if they should preach something contrary to the apostolic message (Gal. 1:8). As Mark Dever notes, “He [Paul] doesn’t write merely to the pastors, to the presbytery, to the bishop or the conference, to the convention, or to the seminary. He writes to the Christians who compose the churches, and he makes it quite clear that not only are they competent to sit in judgment on what claims to be the gospel, but that they must!”Mark Dever, A Display of God’s Glory: Basics of Church Structure—Deacons, Elders, Congregationalism, and Membership (2nd ed.; Washington, DC: 9Marks Ministries, 2001), 35.\n\nCongregationalism is further confirmed in the practice of church discipline. It’s not only leaders who are to exercise discipline but the entire congregation. The church is to exercise authority over false teachers (2 Cor. 10–13; Gal. 1:8; 2 John) and people’s lives (Matt. 18:15–20; 1 Cor. 5:1–13; 2 Cor. 2:5–11). This is why Paul is distraught by the behavior of the Corinthian church who cannot settle disputes from within and instead seeks the help of non-Christians. For Paul, the church is acting contrary to what she is, and by a series of pointed questions, he makes this abundantly clear (see 1 Cor. 6:2–5a). Paul’s consternation with the church only makes sense if he assumes that the entire church is involved in these kinds of decisions. Each member has a role to play because the entire church is ultimately the final court of appeal for her own affairs under the lordship of Christ.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Ortlund cita 1 Cor 5 para mostrar que la iglesia local es responsable de expulsar al miembro, dentro de su argumento de que la autoridad final corresponde a la congregación local y de que en la iglesia del Nuevo Testamento no aparece una sede central",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "Why I'm a Baptist",
                outlet: "Truth Unites",
                date: "30 de abril de 2023",
                locator: "Minutos 1:18 a 2:24",
                url: "https://podcasters.spotify.com/pod/show/truth-unites/episodes/Why-Im-a-Baptist-e239cuq#t=78",
                text: "Número dos, gobierno congregacional de la iglesia. Me parece que cada iglesia local debería tener relación, asociación, etc. con otras iglesias. Distinguimos el poder de consejo y el poder de mandato, así que tenemos muchísima relación, pero la rendición de cuentas última, la autoridad última, el poder de hacer cumplir algo, debería recaer en los miembros de esa misma iglesia para asuntos de disciplina, disputa, doctrina, membresía. Lo ven en el Nuevo Testamento, 2 Corintios 2: esa iglesia tiene la responsabilidad de recibir de nuevo al miembro. 1 Corintios 5: esa iglesia tiene la responsabilidad de expulsar al miembro. Está, ya saben, Mateo 18, la última instancia de apelación: díselo a la iglesia. Parece que en la iglesia primitiva no había una sede central que dictara cómo debían funcionar las iglesias locales particulares, ni a la que se hiciera la apelación final. La única excepción a eso, donde hay una especie de autoridad pan-eclesial, sería el oficio de apóstol, pero ese es único en la historia de la redención.",
                original:
                  "Number two, congregational church government. It seems to me that each local church should have relationship, partnership, etc. with other churches. We distinguish the power of counsel and the power of command, so we have lots of relationship, but the ultimate accountability, the ultimate authority, the power to enforce something should be that own church's members for matters of discipline, dispute, doctrine, membership. You see this in the New Testament, 2 Corinthians 2, that church is accountable to receive the member back in. 1 Corinthians 5, that church is accountable to put the member out. There's supposed to be, you know, Matthew 18, the final court of appeal, tell it to the church. It seems like there's no central headquarters in the early church that dictates how particular local churches should be functioning or that you make the final appeal to. The only exception of that where you have a kind of pan church authority would be the office of apostle, but that is redemptive historically unique.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Cor.11.13-1Cor.11.14"],
      text: "Segunda Confesión de Londres (1689), 1.6 nota (l) (1719 p. 30; McGlothlin p. 230): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 1.6 nota (l) (1688 p. 6): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] and that there are some circumstances concerning the Worship of God, and Government of the Church, common to Humane Actions and Societies; which are to be ordered by the Light of Nature, and Christian Prudence, according to the general Rules of the Word, which are always to be observed.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 6–7.",
    },
    {
      refs: ["1Cor.14.4"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1Cor.14.6"],
      text: "Segunda Confesión de Londres (1689), 1.8 nota (s) (1688 p. 8): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] therefore they are to be translated into the vulgar Language of every Nation, unto which they come […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1Cor.14.9"],
      text: "Segunda Confesión de Londres (1689), 1.8 nota (s) (1688 p. 8): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] therefore they are to be translated into the vulgar Language of every Nation, unto which they come […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1Cor.14.11-1Cor.14.12"],
      text: "Segunda Confesión de Londres (1689), 1.8 nota (s) (1688 p. 8): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] therefore they are to be translated into the vulgar Language of every Nation, unto which they come […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1Cor.14.24"],
      text: "Segunda Confesión de Londres (1689), 1.8 nota (s) (1688 p. 8): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] therefore they are to be translated into the vulgar Language of every Nation, unto which they come […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1Cor.14.26"],
      text: "Segunda Confesión de Londres (1689), 1.6 nota (l) (1719 p. 30; McGlothlin p. 230): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 1.6 nota (l) (1688 p. 6): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] and that there are some circumstances concerning the Worship of God, and Government of the Church, common to Humane Actions and Societies; which are to be ordered by the Light of Nature, and Christian Prudence, according to the general Rules of the Word, which are always to be observed.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 6–7.",
    },
    {
      refs: ["1Cor.14.28"],
      text: "Segunda Confesión de Londres (1689), 1.8 nota (s) (1688 p. 8): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] therefore they are to be translated into the vulgar Language of every Nation, unto which they come […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1Cor.14.40"],
      text: "Segunda Confesión de Londres (1689), 1.6 nota (l) (1719 p. 30; McGlothlin p. 230): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 1.6 nota (l) (1688 p. 6): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] and that there are some circumstances concerning the Worship of God, and Government of the Church, common to Humane Actions and Societies; which are to be ordered by the Light of Nature, and Christian Prudence, according to the general Rules of the Word, which are always to be observed.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 6–7.",
    },
    {
      refs: ["2Cor.1.20"],
      text: "Primera Confesión de Londres (1646), VIII, p. 176: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Gal.1.8-Gal.1.9"],
      text: "Segunda Confesión de Londres (1689), 1.6 notas (i), (k) (1719 pp. 29–30; McGlothlin p. 229): este versículo figura como nota al margen junto a la cláusula, en inglés, «The whole Councel of God concerning all things necessary for his own Glory, Mans Salvation, Faith and Life, is either expressely set down or necessarily contained in the Holy Scripture […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 1.6 nota (i) (1688 p. 6): este versículo figura como nota al margen junto a la cláusula, en inglés, «The whole Councel of God concerning all things necessary for his own Glory, Man's Salvation, Faith and Life, is either expresly set down or necessarily contained in the Holy Scripture; unto which nothing at any time is to be added, whether by new Revelation of the Spirit, or Traditions of Men.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 6–7.",
      apologists: {
        arguments: [
          {
            title:
              "En el resumen del autor de una serie de sermones, los casos de 1 Cor 5:1–13 y 2 Cor 2:5–11 (con Gál 1:6–9) muestran cómo los apóstoles aplicaron la enseñanza de Cristo sobre la membresía de la iglesia; Mt 18:15–20 se cita, no se expone",
            quotes: [
              {
                speaker: "Trent Hunter",
                work: "What Happens When We Turn the Keys?",
                outlet: "9Marks",
                date: "8 de mayo de 2026",
                locator:
                  "3 párrafos: del párrafo que empieza «In September we worked through a…» al que termina «…Cor. 5:1–13, and 2 Cor. 2:5–11).»",
                url: "https://www.9marks.org/article/what-happens-when-we-turn-the-keys/",
                text: "En septiembre trabajamos con un conjunto de textos de nuestro Nuevo Testamento que delinean el plan de Jesús para edificar su iglesia. En Mateo 16, Pedro confesó que Jesús es “el Cristo, el Hijo del Dios viviente” (Mt. 16:16). Jesús respondió,\n\nTú eres Pedro, y sobre esta roca edificaré mi iglesia, y las puertas del infierno no prevalecerán contra ella. Te daré las llaves del reino de los cielos, y todo lo que ates en la tierra será atado en los cielos, y todo lo que desates en la tierra será desatado en los cielos. (Mt. 16:18–19)\n\nSi es crucial asegurarse de que las personas adecuadas tengan las llaves de tu casa, Jesús se toma la pregunta no menos en serio para su propio reino. Tres sermones de septiembre respondieron a la pregunta: Who Holds the Keys? Del primer sermón, “The King and His Kingdom”, aprendimos que Jesús es el rey del cielo que manifiesta su reinado en las iglesias que confiesan su nombre (Mt. 16:13–18). En la segunda semana, “The Keys and the Keepers”, aprendimos que es trabajo de cada miembro guardar el nombre de Jesús (Mt. 16:19; 18:15–20). En nuestra tercera semana, “Turning the Keys Together”, examinamos tres casos de estudio para mostrar cómo los apóstoles instruyeron a las iglesias sobre la base de la enseñanza de Cristo: cómo aplicaron su plano para la membresía de la iglesia (Gál. 1:6–9, 1 Cor. 5:1–13 y 2 Cor. 2:5–11).",
                original:
                  "In September we worked through a set of texts in our New Testament that outline Jesus’s plan for building his church. In Matthew 16, Peter confessed that Jesus is “the Christ, the Son of the living God” (Matt. 16:16). Jesus responded,\n\nYou are Peter, and on this rock I will build my church, and the gates of hell shall not prevail against it. I will give you the keys of the kingdom of heaven, and whatever you bind on earth shall be bound in heaven, and whatever you loose on earth shall be loosed in heaven. (Matt. 16:18–19)\n\nIf it’s crucial to make sure the right people have the keys to your house, Jesus takes the question no less seriously for his own kingdom. Three sermons in September answered the question, Who Holds the Keys? From our first sermon, “The King and His Kingdom,” we learned that Jesus is heaven’s king who manifests his reign in churches that confess his name (Matt. 16:13–18). In week two, “The Keys and the Keepers,” we learned that it is every member’s job to guard Jesus’s name (Matt. 16:19; 18:15–20). In our third week, “Turning the Keys Together,” we examined three case studies to show how the apostles instructed the churches on the basis of Christ’s teaching—how they applied his blueprint for church membership (Gal. 1:6–9, 1 Cor. 5:1–13, and 2 Cor. 2:5–11).",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "El congregacionalismo deja que la congregación funcione como instancia final de apelación en los asuntos de la iglesia local, viviendo bajo el señorío de Cristo y bajo pastores o ancianos que la dirigen; las cartas del Nuevo Testamento están escritas a iglesias enteras (Gál 1:8), y toda la congregación ejerce disciplina (Mt 18:15–20; 1 Cor 5:1–13; 2 Cor 2:5–11)",
            quotes: [
              {
                speaker: "Stephen J. Wellum",
                work: "The Priesthood of All Believers and Why the New Covenant Requires Congregationalism",
                outlet: "9Marks",
                date: "16 de septiembre de 2025",
                locator:
                  "2 párrafos: del párrafo que empieza «Evidence for congregationalism can be found…» al que termina «…affairs under the lordship of Christ.»",
                url: "https://www.9marks.org/article/the-priesthood-of-all-believers-and-why-the-new-covenant-requires-congregationalism/",
                text: "Hay evidencia del congregacionalismo en todo el NT. Como creyentes pactados juntos, se escogieron ancianos (Hech. 14:23; Tito 1:5), se predicó la Palabra de Dios y se practicaron las ordenanzas (Hech. 2:42; 1 Cor. 11:26), y la iglesia tomó expresión visible en asambleas locales que gobernaban sus propios asuntos. Por eso una gran cantidad de cartas del NT fueron escritas a iglesias locales, no meramente a oficiales de la iglesia o a algún cuerpo eclesiástico más grande. Las cartas fueron escritas para instruir a toda la congregación sobre sus responsabilidades de gobernarse a sí misma y de protegerse de falsos maestros. Por ejemplo, en Gálatas, Pablo espera que esta joven iglesia juzgue la autoridad angelical y apostólica si predicaran algo contrario al mensaje apostólico (Gal. 1:8). Como dice Mark Dever, “Él [Pablo] no escribe meramente a los pastores, al presbiterio, al obispo o a la conferencia, a la convención, o al seminario. Escribe a los cristianos que componen las iglesias, ¡y deja muy claro que no solo son competentes para juzgar lo que pretende ser el evangelio, sino que deben hacerlo!”Mark Dever, A Display of God’s Glory: Basics of Church Structure—Deacons, Elders, Congregationalism, and Membership (2nd ed.; Washington, DC: 9Marks Ministries, 2001), 35.\n\nEl congregacionalismo se confirma además en la práctica de la disciplina eclesiástica. No son solo los líderes quienes deben ejercer disciplina sino toda la congregación. La iglesia debe ejercer autoridad sobre los falsos maestros (2 Cor. 10–13; Gal. 1:8; 2 Juan) y sobre la vida de las personas (Mat. 18:15–20; 1 Cor. 5:1–13; 2 Cor. 2:5–11). Por eso Pablo se angustia por el comportamiento de la iglesia de Corinto, que no puede resolver disputas desde dentro y en cambio busca la ayuda de no cristianos. Para Pablo, la iglesia está actuando en contra de lo que ella es, y mediante una serie de preguntas punzantes, lo deja abundantemente claro (ver 1 Cor. 6:2–5a). La consternación de Pablo con la iglesia solo tiene sentido si asume que toda la iglesia está involucrada en este tipo de decisiones. Cada miembro tiene un papel que cumplir porque toda la iglesia es, en última instancia, la corte final de apelación para sus propios asuntos bajo el señorío de Cristo.",
                original:
                  "Evidence for congregationalism can be found throughout the NT. As believers covenanted together, elders were chosen (Acts 14:23; Titus 1:5), God’s Word was preached, and the ordinances were practiced (Acts 2:42; 1 Cor. 11:26), the church took on visible expression in local assemblies that governed their own affairs. This is why a vast number of NT letters were written to local churches, not merely to church officers or some larger ecclesiastical body. The letters were written to instruct the entire congregation of their responsibilities to govern themselves and to protect themselves from false teachers. For example, in Galatians, Paul expects this young church to sit in judgment of angelic and apostolic authority if they should preach something contrary to the apostolic message (Gal. 1:8). As Mark Dever notes, “He [Paul] doesn’t write merely to the pastors, to the presbytery, to the bishop or the conference, to the convention, or to the seminary. He writes to the Christians who compose the churches, and he makes it quite clear that not only are they competent to sit in judgment on what claims to be the gospel, but that they must!”Mark Dever, A Display of God’s Glory: Basics of Church Structure—Deacons, Elders, Congregationalism, and Membership (2nd ed.; Washington, DC: 9Marks Ministries, 2001), 35.\n\nCongregationalism is further confirmed in the practice of church discipline. It’s not only leaders who are to exercise discipline but the entire congregation. The church is to exercise authority over false teachers (2 Cor. 10–13; Gal. 1:8; 2 John) and people’s lives (Matt. 18:15–20; 1 Cor. 5:1–13; 2 Cor. 2:5–11). This is why Paul is distraught by the behavior of the Corinthian church who cannot settle disputes from within and instead seeks the help of non-Christians. For Paul, the church is acting contrary to what she is, and by a series of pointed questions, he makes this abundantly clear (see 1 Cor. 6:2–5a). Paul’s consternation with the church only makes sense if he assumes that the entire church is involved in these kinds of decisions. Each member has a role to play because the entire church is ultimately the final court of appeal for her own affairs under the lordship of Christ.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Ortlund sostiene que la iglesia del Nuevo Testamento pone a prueba las afirmaciones inciertas de autoridad divina contra lo que es cierto: los de Berea son llamados nobles en Hch 17:11 por examinar las Escrituras, y Pablo dice en Gál 1:8 que incluso la enseñanza angelical debe probarse contra el depósito ya recibido",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The ULTIMATE Case for Sola Scriptura",
                outlet: "Truth Unites",
                date: "19 de agosto de 2025",
                locator: "Minutos 25:29 a 26:46",
                url: "https://podcasters.spotify.com/pod/show/truth-unites/episodes/The-ULTIMATE-Case-for-Sola-Scriptura-e371tfb#t=1529",
                text: "Y así es bueno, apropiado, edificante y pertinente probar las afirmaciones de autoridad divina que son inciertas a la luz de las que son ciertas, y así es como vemos que funcionaba también la iglesia del Nuevo Testamento. Otra vez, a pesar de las objeciones comunes en contra, por eso se llama nobles a los de Berea en Hechos 17:11, porque examinaban las Escrituras para ver si estas cosas eran así. El verbo que se usa aquí para examinar, nota John Stott, se usa en otros pasajes del libro de Hechos para investigaciones judiciales. Así que el elogio aquí es por examinar las Escrituras para probar el mensaje que se predica. En Gálatas 1:8, Pablo incluso dice que la enseñanza angelical debe probarse según el depósito de revelación que ya se ha dado. Así que tomas lo que... El instinto aquí es conservador y razonable. Queremos tomar lo que sabemos que Dios ha dicho y vivir a la luz de ello. Y si surgen nuevas afirmaciones y no estamos seguros de si vienen de Dios, las probamos a la luz de lo que sí tenemos. Prueba lo que no es la Palabra inspirada de Dios por lo que sí es la Palabra inspirada de Dios, porque el discurso de Dios tiene mayor autoridad que cualquier otro discurso.",
                original:
                  "And so it is good and fitting and edifying and appropriate to test claims of divine authority that are uncertain in the light of those that are certain, and that is how we see the New Testament church functioning as well. Again, despite the common pushbacks against it, this is why the Bereans are called noble in Acts 17, 11, because they are examining the scriptures to see if these things were so. The verb used for examine here, John Stott notes, is used of judicial investigations elsewhere in the book of Acts. So the praise here is for examining the scriptures to test the message being preached. In Galatians 1.8, Paul even says that angelic teaching should be tested according to the deposit of revelation that has already been given. So you take what... The instinct here is conservative and reasonable. We want to take what we know God has said and live in light of that. And if new claims come along and we're not sure if they are from God, we test them in light of what we do have. Test that which isn't the inspired Word of God by that which is the inspired Word of God because God's speech is of greater authority than all other speech.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Gal.5.22"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Eph.2.20"],
      text: "Segunda Confesión de Londres (1689), 1.10 nota (x) (1688 p. 9): este versículo figura como nota al margen junto a la cláusula, en inglés, «The supream Judge by which all Controversies of Religion are to be determined, and all Decrees of Councels, Opinions of ancient Writers, Doctrines of Men, and private Spirits, are to be examined, and in whose sentence we are to rest, can be no other but the Holy Scripture delivered by the Spirit, into which Scripture so delivered, our Faith is finally resolved.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Fe y Mensaje Bautistas (1925), I (1963 Annual, p. 270, columna derecha): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270.",
      apologists: {
        arguments: [
          {
            title:
              "Murr concede que la iglesia primitiva no tenía Nuevo Testamento y dependía de la enseñanza de los apóstoles (Hch 2:42), cita Ef 2:20 sobre el fundamento de los apóstoles y profetas con Cristo Jesús como piedra angular, señala que el fundamento se menciona en plural, no como el de Pedro, y dice que la enseñanza de los apóstoles llegó por medio de sus cartas, los evangelios y lo que las iglesias habían aprendido",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "¿Tradición Mata Escritura? - Dr. Carlos Andrés Murr",
                outlet: "Carlos Andres Murr",
                date: "7 de diciembre de 2023",
                locator: "Minutos 26:30 a 27:34",
                url: "https://www.youtube.com/watch?v=onKYVgsaFPY&t=1590s",
                text: "la verdadera tradición precede a la escritura. Es verdad, la iglesia católica dice, no, es que la iglesia primitiva no tenía el Nuevo Testamento. ¿Estamos de acuerdo? Claro que sí. La iglesia dependía de las enseñanzas de los apóstoles, como lo dice Hechos capítulo 2, verso 42, que la iglesia perseverada en la enseñanza de los apóstoles amén y dice efesios 2 20 sobre el fundamento de los apóstoles y profetas siendo cristo jesús mismo la piedra angular y es interesante porque se habla en plural del fundamento de los apóstoles no se habla del fundamento de pedro que pedro ni mucho menos que había una sucesión que pedro nombró a otro como jefe de la iglesia y que se nombró a otro hasta los mismos eruditos historiadores católicos romanos reconocen que no hay fundamento para el papado en los primeros siglos de la iglesia, como Edmond Duffy y otros que tengo que he comprado sus libros, ellos mismos lo reconocen. Ahora, pero lo cierto es que las enseñanzas de los apóstoles fueron a través de sus cartas, a través de los evangelios, a través de lo que eran enseñadas las iglesias.",
              },
            ],
          },
          {
            title:
              "En una charla sobre Agustín y Mt 16, Ortlund dice que a lo largo del Nuevo Testamento Cristo es llamado la roca o piedra angular sobre la que se edifica la iglesia, y que a veces los apóstoles participan de esa imagen, a veces todos ellos, como en Ef 2:20, a veces algunos, como en Gál 2:9",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: 'Augustine on the "Rock" of Matthew 16 (This Will Surprise You)',
                outlet: "Gavin Ortlund",
                date: "18 de diciembre de 2024",
                locator: "Minutos 7:03 a 7:44",
                url: "https://www.youtube.com/watch?v=Mslw0lS1ZLQ&t=423s",
                text: "el Nuevo Testamento. Y de manera consistente, Cristo es llamado la roca o la piedra angular sobre la cual se edifica la iglesia. Ya hemos visto 1 Corintios 10 citado por Agustín, y tienes esta imaginería del Salmo 118 sobre Cristo como piedra de tropiezo y roca de ofensa. Esto proviene de este lenguaje sobre la piedra que los edificadores rechazaron y que llegó a ser la piedra angular. Y luego, a veces en el Nuevo Testamento, tienes a los apóstoles participando de esa imaginería. A veces todos los apóstoles, como en Efesios 2:20; a veces ciertos apóstoles, como en Gálatas 2:9, con el círculo interno de los tres: Santiago, Pedro y Juan. Así que parece haber una tensión aquí entre la manera de Agustín",
                original:
                  "the New Testament. And consistently, Christ is called the rock or the cornerstone on which the church is built. We've already seen 1 Corinthians 10 quoted by Augustine, and you have this imagery from Psalm 118 about Christ as the stone of stumbling and rock of offense. This is from this language about the stone that the builders rejected becoming the cornerstone. And then at times in the New Testament, you have the apostles participating in that imagery. Sometimes all of the apostles, as in Ephesians 2.20, sometimes certain of the apostles, as in Galatians 2.9, with sort of the inner three of James and Peter and John. So there seems to be a tension here between Augustine's way",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Col.2.18"],
      text: "Primera Confesión de Londres (1646), VII, p. 176: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] but onely the word of God contained in the Canonicall Scriptures.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Col.2.23"],
      text: "Primera Confesión de Londres (1646), VII, p. 176: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] but onely the word of God contained in the Canonicall Scriptures.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Col.3.16"],
      text: "Segunda Confesión de Londres (1689), 1.8 nota (t) (1688 p. 8): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] that the Word of God dwelling plentifully in all, they may worship him in an acceptable manner, and through patience and comfort of the Scriptures may have hope.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["2Thess.2.7"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["2Thess.2.13"],
      text: "Segunda Confesión de Londres (1689), 1.4 nota (g) (1719 p. 28; 1688 p. 4): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] dependeth not upon the testimony of any man, or Church; but wholly upon God (who is truth it self) the Author thereof; therefore it is to be received, because it is the Word of God.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["2Tim.3.15-2Tim.3.17"],
      text: "Segunda Confesión de Londres (1689), 1.6 notas (i), (k) (1719 pp. 29–30; McGlothlin p. 229): este versículo figura como nota al margen junto a la cláusula, en inglés, «The whole Councel of God concerning all things necessary for his own Glory, Mans Salvation, Faith and Life, is either expressely set down or necessarily contained in the Holy Scripture […]». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 1.6 nota (i) (1688 p. 6): este versículo figura como nota al margen junto a la cláusula, en inglés, «The whole Councel of God concerning all things necessary for his own Glory, Man's Salvation, Faith and Life, is either expresly set down or necessarily contained in the Holy Scripture; unto which nothing at any time is to be added, whether by new Revelation of the Spirit, or Traditions of Men.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 6–7. Primera Confesión de Londres (1646), VII, p. 176: este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] but onely the word of God contained in the Canonicall Scriptures.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Primera Confesión de Londres (1646), VIII, p. 176: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Fe y Mensaje Bautistas (1925), I (1963 Annual, p. 270, columna derecha): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
      apologists: {
        arguments: [
          {
            title:
              "«Inspirada por Dios» habla de la Escritura como discurso propio de Dios, infalible y ontológicamente única; ese punto por sí solo no establece la Sola Scriptura, y todas las tradiciones pueden estar de acuerdo en él",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The ULTIMATE Case for Sola Scriptura",
                outlet: "Gavin Ortlund, YouTube",
                date: "19 de agosto de 2025",
                locator: "Minutos 13:12 a 18:44",
                url: "https://www.youtube.com/watch?v=rpmcr7jOev4&t=792s",
                text: "usar el propio lenguaje bíblico para esto. Quizá el versículo más sobreutilizado, que seguramente conocen si siguen estas discusiones, es 2 Timoteo 3:16, donde Pablo dice que toda Escritura es exhalada por Dios. La palabra griega theanustas recibe mucha atención en estas conversaciones. A veces se traduce como inspirada por Dios, como en la NASB, o exhalada por Dios, como en la ESV aquí. Eh, no piensen en esto como si la idea fuera que la Escritura ya existe y luego Dios viene y sopla encima del texto para darle más poder o algo así. Más bien, piensen en la Escritura misma: las palabras mismas son las que son exhaladas por Dios. Así que John Stodd, en su comentario sobre este pasaje, dice que se podría usar la palabra griega espiración, como en Dios exhalando. Si estás afuera en una noche fría y respiras, y puedes ver tu aliento, el aliento de Dios: esa es la zona semántica aproximada de este término. Así que puedes llamar palabra de Dios, en un sentido más general, a un sermón que escuchas un domingo por la mañana, pero no lo llamamos exhalado por Dios en este sentido. Y esa es la distinción ontológica que intentamos transmitir con el adjetivo inspirada. Ahora bien, a veces esto se discute en 2 Timoteo 3:16; la palabra aparece y luego se usa de forma más amplia, y así sucesivamente, y entonces esto se complica. Así que digamos que el punto aquí no depende de ese único pasaje, como veremos. Este es un punto en el que todas las tradiciones pueden estar de acuerdo hoy, y es algo que se expresa de muchas maneras distintas en diferentes pasajes. Por ejemplo, 2 Pedro 1:21 habla de hombres que hablaron de parte de Dios mientras eran llevados por el Espíritu Santo. La gran idea de este pasaje es que la Escritura llega por un medio humano. El profeta es el que habla o escribe, pero el origen no es humano sino divino. Dios habla a través de ese medio humano. En su clásico tratamiento de la inspiración bíblica y la autoridad bíblica, BB Warfield comenta el verbo que se usa aquí en la frase llevados por el Espíritu Santo. Y lo que nos ayuda a entender es que esto es más que una guía general. Lo que está en juego aquí es que las palabras del autor humano son de Dios. De manera más coloquial, podríamos decir: la Escritura son las palabras de Dios. Es el habla de Dios. Así es como la Escritura habla de sí misma. Por ejemplo, Romanos 3:2 dice que a los judíos se les confiaron los oráculos de Dios. Talogu, las palabras de Dios; o la NASB dice: las palabras reales de Dios; la NIV: las palabras mismas de Dios. Doug Moo, en su comentario, sostiene que este término se entiende mejor como una referencia al Antiguo Testamento en su conjunto, como pueden ver en pantalla. Bien. Entonces el Antiguo Testamento son las palabras de Dios. Eh, Jesús en Mateo 19 citará Escritura del Antiguo Testamento. Ahora bien, no es Dios hablando dentro de la Escritura del Antiguo Testamento, no un relato en el que Dios dice algo que queda registrado dentro de la estructura más amplia, sino el texto mismo como habla de Dios. Eso es en realidad uno de los pasajes más relevantes en toda esta discusión. Y por eso entra en escena la infalibilidad: decimos que la Escritura es infalible porque es el habla de Dios, y Dios es omnisciente y perfecto. Así que Dios es infalible. Por lo tanto, el habla de Dios es infalible. Y sobre esa base decimos que la Escritura no puede heredar. No puede equivocarse. O, como dice Jesús en Juan 10:35, con un matiz de significado algo distinto: no puede ser quebrantada. Así que en este punto no tiene por qué ser, y a menudo no es, un desacuerdo con otras tradiciones cristianas que la Escritura es ontológicamente única en su naturaleza como palabra de Dios. Siempre quiero animar a la gente, especialmente cuando hacen videos de refutación: todavía no estoy haciendo el argumento. Este es un principio que va a estar dentro del contexto más amplio de un argumento que se despliega. Así que aguanten conmigo para ver la relevancia de esto. No se adelanten. No estoy estableciendo solos scriptor todavía. Bien, solo estamos estableciendo un punto: la Escritura es ontológicamente única como habla de Dios. Eh, la Iglesia Católica Romana enseña que la Escritura es el habla de Dios. Es puesta por escrito bajo el aliento del Espíritu Santo. En la teología católica romana, la Sagrada Escritura y la Sagrada Tradición juntas constituyen la palabra de Dios, pero de diferentes maneras. La Sagrada Tradición no es inspirada por el Espíritu Santo de la misma manera que la Sagrada Escritura. Y el papel del magisterio, incluso cuando funciona con infalibilidad, no es lo mismo que el habla divina. Eh, el charrorismo de la infalibilidad que se extiende a la iglesia en la teología católica romana se distingue de la revelación divina. Es una interpretación de la revelación divina que se sostiene como infalible, pero no es lo mismo que el habla de Dios. Así que cuando un papa habla ex cathedra, eso es infalible, pero no es exhalado por Dios, no es habla divina llevada por el Espíritu, los oráculos de Dios. No es lo mismo que la Escritura, y no está añadiendo cosas nuevas al depósito apostólico de la revelación divina. Es una interpretación de ese depósito. Eh, de manera similar, la teología católica romana concuerda en que la revelación divina pública ha cesado con la muerte de los últimos apóstoles.",
                original:
                  "use the biblical language itself for this. Maybe the most overutilized verse that I'm sure you're familiar with if you're into these discussions at all is 2 Timothy 3:16 where Paul says that all scripture is breathed out by God. The Greek word theanustas gets a lot of discussion in these conversations. Sometimes translated as inspired by God as in the NASB or breathed out by God in the ESV here. Um don't think of this as though the idea is the scripture already exists and then God comes along and like breathes on top of the text so as to give it extra power or something like that. Rather think of the scripture itself the very words themselves are what is breathed out by God. So John Stodd in his commentary on this passage says you could use uh the Greek word expiration as in you know God breathing out. If you're out on a cold night and you breathe and you can see your breath, the the breath of God, uh that's the in the semantic ballpark here of this term. So you you can call a sermon that you hear on a Sunday morning the word of God in a more general sense, but we don't call it God breathed in this sense. And that is the ontological distinction we're trying to convey with the adjective inspired. Now, sometimes this is disputed in 2 Timothy 3:16. this word comes up and because later it's used more broadly and so forth and so this gets complicated. So let's just say that the point here is not dependent on that one passage as we'll see. This is a point all traditions can agree upon today and it's just something that that is put in many different ways in different passages. For example, second Peter 1:21 uh speaks about men speaking from God as they were carried along by the Holy Spirit. The the big idea here in this passage is that uh scripture comes through a human medium. The prophet is is the one sp speaking or writing uh but the origin is not human but is rather divine. God is speaking through that human medium. In his classic treatment of biblical inspiration and biblical authority, BB Warfield comments on the verb used here in this phrase carried along by the Holy Spirit. And what he helps us understand is that this is more than just a general guidance. What is in view here is that the words of the human author are from God. More colloquially, we could say scripture is God's words. It is God's speech. This is how the scripture speaks of itself. For example, Romans 3:2 says that the Jews were entrusted with the oracles of God. Talogu, the words of God or NASB says the actual words of God. NIV, the very words of God. Doug Moo in his commentary argues that this term is best taken as a reference to the Old Testament as a whole, as you can see on screen. Okay. So this so the Old Testament is the words of God. Uh Jesus in Matthew 19 will quote Old Testament scripture. Now not God speaking in Old Testament scripture, not a narrative in which God says something that is sort of recorded within the larger structure, but just the the text itself as God speaking. That's actually one of the most relevant texts in this whole discussion. And so this is why infallibility will come into the picture is because we say the scripture is infallible because it's God's speech and God is omnisient and perfect. So God is infallible. So God's speech is therefore infallible. And it's on that basis that we say the scripture cannot heir. It cannot get it wrong. Or as Jesus puts it in John 10:35 uh with a slightly different nuance of meaning, it cannot be broken. So when it comes to this point, this need not be and often is not a point of disagreement with other Christian traditions that scripture is ontologically unique in its nature as the as the word of God. I always want to encourage people especially when they do rebuttal videos. I I'm not making the argument yet. This is one principle that is going to be in the larger context of an unfolding argument. So hang with me here for the relevance of this. Don't get ahead of me. I'm not this is not establishing solos scriptor yet. Okay? Okay, we're just establishing one point. The scripture is unique ontologically as the speech of God. Um the Roman Catholic Church uh teaches that scripture is the speech of God. Uh it is put down in writing under the breath of the Holy Spirit. In Roman Catholic theology, sacred scripture and sacred tradition together constitute the word of God, but in different ways. Sacred tradition is not inspired by the Holy Spirit in the same way that sacred scripture is. And the role of the magisterium, even when functioning with infallibility, isn't the same thing as divine speech. Uh the charrorism of infallibility that's extended to the church in Roman Catholic theology is distinguished from divine revelation. It's an interpretation of divine revelation that that is held to be infallible, but it's not the same thing as the speech of God. So when a pope speaks ex cathedra, that's infallible, but it's not God breathed, spirit carried divine speech, the oracles of God. It's not the same thing as scripture, and it's not adding new things on to the to the apostolic deposit of divine revelation. It's an interpretation of that. Um, similarly, Roman Catholic theology agrees that public divine revelation has ceased with the death of the last apostles.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "La Escritura sola, no Escritura más Tradición más Magisterio, es la autoridad última de la iglesia; la iglesia no carece de toda otra autoridad, y la tradición (con t minúscula) se conserva como sabiduría acumulada; la autoridad de la Palabra va con el Espíritu Santo, que la inspiró y capacita a la iglesia para entenderla",
            quotes: [
              {
                speaker: "Gregg R. Allison",
                work: "Two Views on Church Authority: Protestant vs. Roman Catholic",
                outlet: "9Marks",
                date: "26 de septiembre de 2017",
                locator:
                  "4 párrafos: del párrafo que empieza «The Protestant authority structure consists of…» al que termina «…were forged in the early church.»",
                url: "https://www.9marks.org/article/two-views-on-church-authority-protestant-vs-roman-catholic/",
                text: "La estructura de autoridad protestante consta de un solo elemento: la Escritura como Palabra escrita de Dios, inspirada divinamente, autoritativa, verdadera, suficiente, necesaria, clara y transformadora para personas pecadoras. En contraste con los católicos romanos, los protestantes sostienen la sola Scriptura: la Escritura es la única autoridad de la iglesia, determinante en última instancia para la doctrina, la práctica, la fe, la adoración y el ministerio. En tiempos de la Reforma, este principio se unió a un rechazo explícito de la estructura de autoridad católico-romana. La Escritura sola, no la Escritura más la Tradición más el Magisterio, es la autoridad de la iglesia.\n\nTres precisiones son necesarias en este punto: Primero, la autoridad bíblica debe relacionarse siempre con Dios mismo, quien como Señor soberano se revela a sí mismo y sus caminos por medio de la Escritura inspirada, y por tanto autoritativa. Dios sostiene la relación más estrecha posible con su Palabra. En consecuencia, obedecer la Palabra de Dios es obedecer a Dios mismo. Desobedecer la Palabra de Dios es desobedecer a Dios mismo. Confiar en la Palabra de Dios es confiar en Dios mismo. Desconfiar de la Palabra de Dios es desconfiar de Dios mismo. En palabras de Timothy Ward: “Dios se ha identificado tanto con sus palabras que lo que alguien le hace a las palabras de Dios . . . lo hace directamente a Dios mismo”. Esta afirmación no iguala a Dios con su Palabra. Pero sí deja claro que el Dios a quien pertenece toda autoridad para mandar lo que los creyentes deben hacer y creer, y para prohibir lo que no deben hacer ni creer, está detrás de su Palabra autoritativa.\n\nAsí, la autoridad de la Palabra de Dios va de la mano con la autoridad del Espíritu Santo, quien inspiró esa Palabra (2 Pet. 1:19–21; 2 Tim. 3:15–17) y capacita a la iglesia para entenderla (1 Cor. 2:10–16).\n\nSegundo, la sola Scriptura es el principio de autoridad última, y no significa que la iglesia carezca de cualquier otra autoridad. Aunque las iglesias protestantes rechazan con razón la Tradición (con T mayúscula) de la Iglesia católica, no rechazan la tradición (con t minúscula), es decir, la sabiduría acumulada de la iglesia histórica. Ejemplos de tradición son las doctrinas de la Trinidad (un Dios, tres personas) y de Cristo (una persona, dos naturalezas), que se formularon en la iglesia primitiva.",
                original:
                  "The Protestant authority structure consists of one element: Scripture as the written Word of God, divinely inspired, authoritative, true, sufficient, necessary, clear, and transformative for sinful people. In contrast to Roman Catholics, Protestants hold to  sola Scriptura: Scripture is the church’s sole authority, ultimately determinative for doctrine, practice, faith, worship, and ministry. At the time of the Reformation, this principle was coupled with an explicit rejection of the Roman Catholic authority structure. Scripture alone, not Scripture plus Tradition plus the Magisterium, is the church’s authority.\n\nThree qualifications are needed at this point: First, biblical authority must always be related to God himself, who as the sovereign Lord reveals himself and his ways through inspired, and thus authoritative, Scripture. God sustains the closest possible relationship to his Word. Accordingly, to obey God’s Word is to obey God himself. To disobey God’s Word is to disobey God himself. To trust God’s Word is to trust God himself. To mistrust God’s Word is to mistrust God himself. In the words of Timothy Ward: “God has so identified himself with his words that whatever someone does to God’s words . . . they do directly to God himself.” This affirmation does not equate God with his Word. But it does make clear that the God to whom all authority belongs to command what believers are to do and believe, and prohibit what they are not to do and believe, stands behind his authoritative Word.\n\nThus, the authority of the Word of God goes hand in hand with the authority of the Holy Spirit, who inspired that Word (2 Pet. 1:19–21; 2 Tim. 3:15–17) and enables the church to understand it (1 Cor. 2:10–16).\n\nSecond, sola Scriptura is the principle of ultimate authority and does not mean the church is without any other authority. Though Protestant churches rightly reject the Tradition (capital T) of the Catholic Church, they do not reject tradition (small t), or the accumulated wisdom of the historical church. Examples of tradition include the doctrines of the Trinity (one God, three persons) and of Christ (one person, two natures) that were forged in the early church.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "El autor dice que creer en la inerrancia no es requisito para la predicación expositiva, pero le da poco viento en las velas por lo demás; si toda la Escritura es inspirada por Dios y los hombres hablaron siendo llevados por el Espíritu Santo, el predicador debe predicar el mensaje de Dios tal como fue dado (un punto sobre la predicación, no directamente sobre la Escritura frente a la tradición)",
            quotes: [
              {
                speaker: "David King",
                work: "Why Must We Preach Expositionally?",
                outlet: "9Marks",
                date: "26 de febrero de 2010",
                locator:
                  "2 párrafos: del párrafo que empieza «A third issue to consider is…» al que termina «…essential link between inerrancy and proclamation.3»",
                url: "https://www.9marks.org/article/why-must-we-preach-expositionally/",
                text: "Una tercera cuestión a considerar es la de la INERRANCIA bíblica. No hace falta creer que Dios preservó su palabra del error durante el proceso de inspiración para creer en la predicación expositiva, pero si no lo crees, vas a encontrar poco viento en tus velas. La doctrina de la inerrancia es un viento de fuerza de vendaval que llena las velas de la predicación expositiva. Si “toda Escritura es exhalada por Dios” (2 Tim. 3:16), si “hombres hablaron de parte de Dios siendo llevados por el Espíritu Santo” (2 Pet. 1:21), si “toda palabra de Dios resulta verdadera” (Prov. 30:5), si los tiempos verbales en presente y los sustantivos en plural son críticos (Mar. 12:26; Gál. 3:16), ¿entonces no debería el predicador preocuparse por predicar el mensaje de Dios tal como fue dado? John MacArthur expone el punto con belleza:\n\nLa inerrancia exige un proceso exegético y una proclamación expositiva. Solo el proceso exegético preserva la Palabra de Dios por completo, guardando el tesoro de la revelación y declarando su significado exactamente como Él quiso que fuera proclamado. La predicación expositiva es el resultado del proceso exegético. Así, es el eslabón esencial entre la inerrancia y la proclamación.3",
                original:
                  "A third issue to consider is that of biblical INERRANCY. You do not have to believe that God preserved his word from error during the process of inspiration in order to believe in expository preaching, but you will find little wind in your sails otherwise. The doctrine of inerrancy is a gale force wind that fills the sails of expository preaching. If “all Scripture is breathed out by God” (2 Tim. 3:16), if “men spoke from God as they were carried along by the Holy Spirit” (2 Pet. 1:21), if “every word of God proves true” (Prov. 30:5), if present tense verbs and plural nouns are critical (Mar. 12:26; Gal. 3:16), then ought not the preacher be concerned to preach God’s message as given? John MacArthur states the point beautifully:\n\nInerrancy demands an exegetical process and an expository proclamation. Only the exegetical process preserves God’s Word entirely, guarding the treasure of revelation and declaring its meaning exactly as He intended it to be proclaimed. Expository preaching is the result of the exegetical process. Thus, it is the essential link between inerrancy and proclamation.3",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Ortlund sostiene que la Escritura es en sí misma palabra inspirada por Dios: lee «inspirada por Dios» (2 Tim 3:16), hombres llevados por el Espíritu Santo (2 Pe 1:21) y los «oráculos de Dios» (Rom 3:2) como que las mismas palabras de la Escritura son palabras de Dios, y sobre esa base llama a la Escritura infalible, como dice Jesús que «no puede ser quebrantada» (Jn 10:35); dice que este punto por sí solo aún no establece la sola scriptura",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The ULTIMATE Case for Sola Scriptura",
                outlet: "Truth Unites",
                date: "19 de agosto de 2025",
                locator: "Minutos 13:38 a 17:00",
                url: "https://podcasters.spotify.com/pod/show/truth-unites/episodes/The-ULTIMATE-Case-for-Sola-Scriptura-e371tfb#t=818",
                text: "No pienses en esto como si la idea fuera que la Escritura ya existe, y que después Dios viene y, por así decirlo, sopla sobre el texto para darle un poder extra o algo así. Piensa más bien en la Escritura misma. Las palabras mismas son las que Dios exhaló. Por eso John Stott, en su comentario sobre este pasaje, dice que podrías usar la palabra griega que significa «expiración», como en Dios exhalando. Si estás afuera en una noche fría, respiras y puedes ver tu aliento, el aliento de Dios. Eso cae en el campo semántico de este término. Así que puedes llamar a un sermón que escuchas un domingo por la mañana la Palabra de Dios en un sentido más general, pero no lo llamamos exhalado por Dios en este sentido, y esa es la distinción ontológica que intentamos transmitir con el adjetivo inspirada. Ahora bien, a veces esto se discute en 2 Tim. 3:16. Esta palabra aparece ahí porque más adelante se usa de manera más amplia, y así sucesivamente, y esto se complica. Así que digamos solamente que el punto aquí no depende de ese pasaje. Como veremos, este es un punto en el que todas las tradiciones pueden estar de acuerdo hoy, y simplemente se expresa de muchas maneras distintas en diferentes pasajes. Por ejemplo, 2 Pet. 1:21 habla de hombres que hablaron de parte de Dios siendo llevados por el Espíritu Santo. La gran idea de este pasaje es que la Escritura llega por un medio humano. El profeta es quien habla o escribe. Pero el origen no es humano, sino divino. Dios habla por ese medio humano. En su clásico tratamiento de la inspiración bíblica y la autoridad bíblica, B.B. Warfield comenta el verbo que se usa aquí en la frase llevados por el Espíritu Santo, y lo que nos ayuda a entender es que esto es más que una guía general. Lo que está en vista aquí es que las palabras del autor humano son de Dios. De forma más coloquial, podríamos decir que la Escritura son las palabras de Dios. Es el discurso de Dios. Así habla la Escritura de sí misma. Por ejemplo, Rom. 3:2 dice que a los judíos les fueron confiados los oráculos de Dios, Ta-logia tu-tha-u, las palabras de Dios, o la NASB dice las palabras reales de Dios, la NIV, las mismísimas palabras de Dios. Doug Moo, en su comentario, sostiene que este término se entiende mejor como una referencia al Antiguo Testamento en su conjunto, como pueden ver en pantalla. Bien, entonces el Antiguo Testamento son las palabras de Dios. Jesús en Mat. 19 citará Escritura del Antiguo Testamento. Ahora bien, no Dios hablando en el Antiguo Testamento, no una narración en la que Dios dice algo que queda registrado dentro de la estructura mayor, sino solo el texto mismo como Dios hablando. Eso es en realidad uno de los textos más relevantes en toda esta discusión. Y por eso entra en escena la infalibilidad, porque decimos que la Escritura es infalible porque es el discurso de Dios. Y Dios es omnisciente y perfecto, así que Dios es infalible. Por lo tanto, el discurso de Dios es infalible. Y sobre esa base decimos que la Escritura no puede errar, no puede equivocarse, o como dice Jesús en Juan 10:35 con un matiz de significado algo distinto, no puede ser quebrantada.",
                original:
                  "Don't think of this as though the idea is the Scripture already exists, and then God comes along and like breathes on top of the text so as to give it extra power or something like that. Rather, think of the scripture itself. The very words themselves are what is breathed out by God. So John Stott in his commentary on this passage says you could use the Greek word expiration, as in God breathing out. If you're out on a cold night and you breathe and you can see your breath, the breath of God. That's in the semantic ballpark here of this term. So you can call a sermon that you hear on a Sunday morning the Word of God in a more general sense, but we don't call it God breathed in this sense, and that is the ontological distinction we're trying to convey with the adjective inspired. Now, sometimes this is disputed in 2 Timothy 3.16. This word comes up because later it's used more broadly and so forth, and so this gets complicated. So let's just say that the point here is not dependent on that one passage. As we'll see, this is a point all traditions can agree upon today, and it's just something that is put in many different ways in different passages. For example, 2 Peter 1.21 speaks about men speaking from God as they were carried along by the Holy Spirit. The big idea here in this passage is that Scripture comes through a human medium. The prophet is the one speaking or writing. But the origin is not human, but is rather divine. God is speaking through that human medium. In his classic treatment of biblical inspiration and biblical authority, B.B. Warfield comments on the verb used here in this phrase, carried along by the Holy Spirit. and what he helps us understand is that this is more than just a general guidance. What is in view here is that the words of the human author are from God. More colloquially, we could say scripture is God's words. It is God's speech. This is how the scripture speaks of itself. For example, Romans 3.2 says that the Jews were entrusted with the oracles of God, Ta-logia tu-tha-u, the words of God, or NASB says the actual words of God, NIV, the very words of God. Doug Moo in his commentary argues that this term is best taken as a reference to the Old Testament as a whole, as you can see on screen. Okay, so the Old Testament is the words of God. Jesus in Matthew 19 will quote Old Testament scripture. Now, not God speaking in Old Testament Scripture, not a narrative in which God says something that is sort of recorded within the larger structure, but just the text itself as God speaking. That's actually one of the most relevant texts in this whole discussion. And so this is why infallibility will come into the picture, is because we say the Scripture is infallible because it's God's speech. And God is omniscient and perfect, so God is infallible. So God's speech is therefore infallible. And it's on that basis that we say the scripture cannot err, it cannot get it wrong, or as Jesus puts it in John 10.35 with a slightly different nuance of meaning, it cannot be broken.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Durbin toma 2 Tim 3:16 como una explicación, en la revelación inspirada, de la naturaleza de la Escritura: «toda Escritura» se refiere principalmente al Antiguo Testamento, que Pablo dice en Romanos 3 que fue confiado a Israel como «los oráculos de Dios», y lo llama habla propia de Dios; luego dice que la afirmación debe pensarse en confrontación con las pretensiones de Roma sobre el papado y el magisterio docente, y que la Escritura es única y distinta",
            quotes: [
              {
                speaker: "Jeff Durbin",
                work: "Jeff Durbin: Overcoming Objections to Sola Scriptura",
                outlet: "Apologia Studios",
                date: "26 de febrero de 2024",
                locator: "Minutos 7:00 a 8:54",
                url: "https://www.youtube.com/watch?v=vHJxo2jkQ7E&t=420s",
                text: "pero Dios ha hablado. Y lo que tenemos aquí es una explicación, en la revelación inspirada, sobre la naturaleza de la Escritura. Eso es lo principal que quieren captar ahora mismo. La naturaleza de la Escritura. ¿Qué es esto? ¿Qué es? Sabemos que es Dios hablando, pero Pablo dijo algo sobre su naturaleza. Dice: toda Escritura, y aquí se refiere principalmente a las Escrituras del Antiguo Testamento, porque la revelación del Nuevo Testamento todavía está en curso cuando esto se escribe. Pablo es un apóstol inspirado; en este mismo momento, en 2 Timoteo capítulo 3 versículo 16, está literalmente dando revelación continua. La revelación todavía está sucediendo, pero ¿a qué se refiere principalmente? ¿Qué? A la revelación del Antiguo Testamento, lo que Dios le había dado al pueblo judío, a Israel. Dice en Romanos 3 que les fueron confiados, no se pierdan esto, los oráculos de Dios: que Dios soberanamente determina dar su propio discurso, su revelación divina, a Israel. Se la confió a Israel. La custodia con Israel. Y los judíos tenían los oráculos de Dios. Y aquí Pablo está diciendo: ustedes conocen las Escrituras, y ¿qué dice de ellas? Que son theonustos, exhaladas por Dios. Ahora bien, en una serie como esta, tienen que pensar en las implicaciones de esa afirmación sobre la Escritura en relación, por ejemplo, con el catolicismo romano, las afirmaciones del papado, el magisterio de enseñanza, tal vez sus amigos ortodoxos orientales, o sus amigos mormones, o los testigos de Jehová. Tienen que pensarlo a la luz de ese conflicto y decir: bueno, pero la Escritura es única. Es distinta. Es el discurso mismo de Dios. Pero tenemos que ir más allá de eso.",
                original:
                  "but God has spoken. And what we have here is an explanation in inspired revelation about the nature of scripture. That's the key thing you want to get across right now. The nature of scripture. What is this? What is it? We know that it's God speaking, but Paul said something about its nature. He says, all scripture, and he's referring here to the Old Testament scriptures primarily because New Testament revelation is still ongoing when this is written. Paul's an inspired apostle. He's literally giving continued revelation at this moment in 2 Timothy chapter 3 verse 16. Revelation is still happening, but he's primarily referring to what? The Old Testament revelation, what God had given to the Jewish people, to Israel. He says in Romans 3, they were entrusted with, don't miss this, the oracles of God, that God sovereignly determines to give his own speech, his divine revelation to Israel. He entrusted to Israel. He guards it with Israel. And the Jews had the oracles of God. And here Paul is saying, you've known the scriptures. and what is he saying about them that they are theonustos breathed out by god now i know in a series like this you you have to because it's part of what we're doing you have to think about the implications of that claim in scripture related to say roman catholicism the claims of the papacy the teaching magisterium maybe your eastern orthodox friends or your mormon friends or the Jehovah's Witnesses. You have to think about it in the light of that conflict and go, okay, but scripture is unique. It's distinct. It's the very speech of God. But we need to go beyond that.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["2Tim.3.16"],
      text: "Segunda Confesión de Londres (1689), 1.4 nota (g) (1719 p. 28; 1688 p. 4): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] dependeth not upon the testimony of any man, or Church; but wholly upon God (who is truth it self) the Author thereof; therefore it is to be received, because it is the Word of God.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "«Inspirada por Dios» habla de la Escritura como discurso propio de Dios, infalible y ontológicamente única; ese punto por sí solo no establece la Sola Scriptura, y todas las tradiciones pueden estar de acuerdo en él",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The ULTIMATE Case for Sola Scriptura",
                outlet: "Gavin Ortlund, YouTube",
                date: "19 de agosto de 2025",
                locator: "Minutos 13:12 a 18:44",
                url: "https://www.youtube.com/watch?v=rpmcr7jOev4&t=792s",
                text: "usar el propio lenguaje bíblico para esto. Quizá el versículo más sobreutilizado, que seguramente conocen si siguen estas discusiones, es 2 Timoteo 3:16, donde Pablo dice que toda Escritura es exhalada por Dios. La palabra griega theanustas recibe mucha atención en estas conversaciones. A veces se traduce como inspirada por Dios, como en la NASB, o exhalada por Dios, como en la ESV aquí. Eh, no piensen en esto como si la idea fuera que la Escritura ya existe y luego Dios viene y sopla encima del texto para darle más poder o algo así. Más bien, piensen en la Escritura misma: las palabras mismas son las que son exhaladas por Dios. Así que John Stodd, en su comentario sobre este pasaje, dice que se podría usar la palabra griega espiración, como en Dios exhalando. Si estás afuera en una noche fría y respiras, y puedes ver tu aliento, el aliento de Dios: esa es la zona semántica aproximada de este término. Así que puedes llamar palabra de Dios, en un sentido más general, a un sermón que escuchas un domingo por la mañana, pero no lo llamamos exhalado por Dios en este sentido. Y esa es la distinción ontológica que intentamos transmitir con el adjetivo inspirada. Ahora bien, a veces esto se discute en 2 Timoteo 3:16; la palabra aparece y luego se usa de forma más amplia, y así sucesivamente, y entonces esto se complica. Así que digamos que el punto aquí no depende de ese único pasaje, como veremos. Este es un punto en el que todas las tradiciones pueden estar de acuerdo hoy, y es algo que se expresa de muchas maneras distintas en diferentes pasajes. Por ejemplo, 2 Pedro 1:21 habla de hombres que hablaron de parte de Dios mientras eran llevados por el Espíritu Santo. La gran idea de este pasaje es que la Escritura llega por un medio humano. El profeta es el que habla o escribe, pero el origen no es humano sino divino. Dios habla a través de ese medio humano. En su clásico tratamiento de la inspiración bíblica y la autoridad bíblica, BB Warfield comenta el verbo que se usa aquí en la frase llevados por el Espíritu Santo. Y lo que nos ayuda a entender es que esto es más que una guía general. Lo que está en juego aquí es que las palabras del autor humano son de Dios. De manera más coloquial, podríamos decir: la Escritura son las palabras de Dios. Es el habla de Dios. Así es como la Escritura habla de sí misma. Por ejemplo, Romanos 3:2 dice que a los judíos se les confiaron los oráculos de Dios. Talogu, las palabras de Dios; o la NASB dice: las palabras reales de Dios; la NIV: las palabras mismas de Dios. Doug Moo, en su comentario, sostiene que este término se entiende mejor como una referencia al Antiguo Testamento en su conjunto, como pueden ver en pantalla. Bien. Entonces el Antiguo Testamento son las palabras de Dios. Eh, Jesús en Mateo 19 citará Escritura del Antiguo Testamento. Ahora bien, no es Dios hablando dentro de la Escritura del Antiguo Testamento, no un relato en el que Dios dice algo que queda registrado dentro de la estructura más amplia, sino el texto mismo como habla de Dios. Eso es en realidad uno de los pasajes más relevantes en toda esta discusión. Y por eso entra en escena la infalibilidad: decimos que la Escritura es infalible porque es el habla de Dios, y Dios es omnisciente y perfecto. Así que Dios es infalible. Por lo tanto, el habla de Dios es infalible. Y sobre esa base decimos que la Escritura no puede heredar. No puede equivocarse. O, como dice Jesús en Juan 10:35, con un matiz de significado algo distinto: no puede ser quebrantada. Así que en este punto no tiene por qué ser, y a menudo no es, un desacuerdo con otras tradiciones cristianas que la Escritura es ontológicamente única en su naturaleza como palabra de Dios. Siempre quiero animar a la gente, especialmente cuando hacen videos de refutación: todavía no estoy haciendo el argumento. Este es un principio que va a estar dentro del contexto más amplio de un argumento que se despliega. Así que aguanten conmigo para ver la relevancia de esto. No se adelanten. No estoy estableciendo solos scriptor todavía. Bien, solo estamos estableciendo un punto: la Escritura es ontológicamente única como habla de Dios. Eh, la Iglesia Católica Romana enseña que la Escritura es el habla de Dios. Es puesta por escrito bajo el aliento del Espíritu Santo. En la teología católica romana, la Sagrada Escritura y la Sagrada Tradición juntas constituyen la palabra de Dios, pero de diferentes maneras. La Sagrada Tradición no es inspirada por el Espíritu Santo de la misma manera que la Sagrada Escritura. Y el papel del magisterio, incluso cuando funciona con infalibilidad, no es lo mismo que el habla divina. Eh, el charrorismo de la infalibilidad que se extiende a la iglesia en la teología católica romana se distingue de la revelación divina. Es una interpretación de la revelación divina que se sostiene como infalible, pero no es lo mismo que el habla de Dios. Así que cuando un papa habla ex cathedra, eso es infalible, pero no es exhalado por Dios, no es habla divina llevada por el Espíritu, los oráculos de Dios. No es lo mismo que la Escritura, y no está añadiendo cosas nuevas al depósito apostólico de la revelación divina. Es una interpretación de ese depósito. Eh, de manera similar, la teología católica romana concuerda en que la revelación divina pública ha cesado con la muerte de los últimos apóstoles.",
                original:
                  "use the biblical language itself for this. Maybe the most overutilized verse that I'm sure you're familiar with if you're into these discussions at all is 2 Timothy 3:16 where Paul says that all scripture is breathed out by God. The Greek word theanustas gets a lot of discussion in these conversations. Sometimes translated as inspired by God as in the NASB or breathed out by God in the ESV here. Um don't think of this as though the idea is the scripture already exists and then God comes along and like breathes on top of the text so as to give it extra power or something like that. Rather think of the scripture itself the very words themselves are what is breathed out by God. So John Stodd in his commentary on this passage says you could use uh the Greek word expiration as in you know God breathing out. If you're out on a cold night and you breathe and you can see your breath, the the breath of God, uh that's the in the semantic ballpark here of this term. So you you can call a sermon that you hear on a Sunday morning the word of God in a more general sense, but we don't call it God breathed in this sense. And that is the ontological distinction we're trying to convey with the adjective inspired. Now, sometimes this is disputed in 2 Timothy 3:16. this word comes up and because later it's used more broadly and so forth and so this gets complicated. So let's just say that the point here is not dependent on that one passage as we'll see. This is a point all traditions can agree upon today and it's just something that that is put in many different ways in different passages. For example, second Peter 1:21 uh speaks about men speaking from God as they were carried along by the Holy Spirit. The the big idea here in this passage is that uh scripture comes through a human medium. The prophet is is the one sp speaking or writing uh but the origin is not human but is rather divine. God is speaking through that human medium. In his classic treatment of biblical inspiration and biblical authority, BB Warfield comments on the verb used here in this phrase carried along by the Holy Spirit. And what he helps us understand is that this is more than just a general guidance. What is in view here is that the words of the human author are from God. More colloquially, we could say scripture is God's words. It is God's speech. This is how the scripture speaks of itself. For example, Romans 3:2 says that the Jews were entrusted with the oracles of God. Talogu, the words of God or NASB says the actual words of God. NIV, the very words of God. Doug Moo in his commentary argues that this term is best taken as a reference to the Old Testament as a whole, as you can see on screen. Okay. So this so the Old Testament is the words of God. Uh Jesus in Matthew 19 will quote Old Testament scripture. Now not God speaking in Old Testament scripture, not a narrative in which God says something that is sort of recorded within the larger structure, but just the the text itself as God speaking. That's actually one of the most relevant texts in this whole discussion. And so this is why infallibility will come into the picture is because we say the scripture is infallible because it's God's speech and God is omnisient and perfect. So God is infallible. So God's speech is therefore infallible. And it's on that basis that we say the scripture cannot heir. It cannot get it wrong. Or as Jesus puts it in John 10:35 uh with a slightly different nuance of meaning, it cannot be broken. So when it comes to this point, this need not be and often is not a point of disagreement with other Christian traditions that scripture is ontologically unique in its nature as the as the word of God. I always want to encourage people especially when they do rebuttal videos. I I'm not making the argument yet. This is one principle that is going to be in the larger context of an unfolding argument. So hang with me here for the relevance of this. Don't get ahead of me. I'm not this is not establishing solos scriptor yet. Okay? Okay, we're just establishing one point. The scripture is unique ontologically as the speech of God. Um the Roman Catholic Church uh teaches that scripture is the speech of God. Uh it is put down in writing under the breath of the Holy Spirit. In Roman Catholic theology, sacred scripture and sacred tradition together constitute the word of God, but in different ways. Sacred tradition is not inspired by the Holy Spirit in the same way that sacred scripture is. And the role of the magisterium, even when functioning with infallibility, isn't the same thing as divine speech. Uh the charrorism of infallibility that's extended to the church in Roman Catholic theology is distinguished from divine revelation. It's an interpretation of divine revelation that that is held to be infallible, but it's not the same thing as the speech of God. So when a pope speaks ex cathedra, that's infallible, but it's not God breathed, spirit carried divine speech, the oracles of God. It's not the same thing as scripture, and it's not adding new things on to the to the apostolic deposit of divine revelation. It's an interpretation of that. Um, similarly, Roman Catholic theology agrees that public divine revelation has ceased with the death of the last apostles.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "La Escritura sola, no Escritura más Tradición más Magisterio, es la autoridad última de la iglesia; la iglesia no carece de toda otra autoridad, y la tradición (con t minúscula) se conserva como sabiduría acumulada; la autoridad de la Palabra va con el Espíritu Santo, que la inspiró y capacita a la iglesia para entenderla",
            quotes: [
              {
                speaker: "Gregg R. Allison",
                work: "Two Views on Church Authority: Protestant vs. Roman Catholic",
                outlet: "9Marks",
                date: "26 de septiembre de 2017",
                locator:
                  "4 párrafos: del párrafo que empieza «The Protestant authority structure consists of…» al que termina «…were forged in the early church.»",
                url: "https://www.9marks.org/article/two-views-on-church-authority-protestant-vs-roman-catholic/",
                text: "La estructura de autoridad protestante consta de un solo elemento: la Escritura como Palabra escrita de Dios, inspirada divinamente, autoritativa, verdadera, suficiente, necesaria, clara y transformadora para personas pecadoras. En contraste con los católicos romanos, los protestantes sostienen la sola Scriptura: la Escritura es la única autoridad de la iglesia, determinante en última instancia para la doctrina, la práctica, la fe, la adoración y el ministerio. En tiempos de la Reforma, este principio se unió a un rechazo explícito de la estructura de autoridad católico-romana. La Escritura sola, no la Escritura más la Tradición más el Magisterio, es la autoridad de la iglesia.\n\nTres precisiones son necesarias en este punto: Primero, la autoridad bíblica debe relacionarse siempre con Dios mismo, quien como Señor soberano se revela a sí mismo y sus caminos por medio de la Escritura inspirada, y por tanto autoritativa. Dios sostiene la relación más estrecha posible con su Palabra. En consecuencia, obedecer la Palabra de Dios es obedecer a Dios mismo. Desobedecer la Palabra de Dios es desobedecer a Dios mismo. Confiar en la Palabra de Dios es confiar en Dios mismo. Desconfiar de la Palabra de Dios es desconfiar de Dios mismo. En palabras de Timothy Ward: “Dios se ha identificado tanto con sus palabras que lo que alguien le hace a las palabras de Dios . . . lo hace directamente a Dios mismo”. Esta afirmación no iguala a Dios con su Palabra. Pero sí deja claro que el Dios a quien pertenece toda autoridad para mandar lo que los creyentes deben hacer y creer, y para prohibir lo que no deben hacer ni creer, está detrás de su Palabra autoritativa.\n\nAsí, la autoridad de la Palabra de Dios va de la mano con la autoridad del Espíritu Santo, quien inspiró esa Palabra (2 Pet. 1:19–21; 2 Tim. 3:15–17) y capacita a la iglesia para entenderla (1 Cor. 2:10–16).\n\nSegundo, la sola Scriptura es el principio de autoridad última, y no significa que la iglesia carezca de cualquier otra autoridad. Aunque las iglesias protestantes rechazan con razón la Tradición (con T mayúscula) de la Iglesia católica, no rechazan la tradición (con t minúscula), es decir, la sabiduría acumulada de la iglesia histórica. Ejemplos de tradición son las doctrinas de la Trinidad (un Dios, tres personas) y de Cristo (una persona, dos naturalezas), que se formularon en la iglesia primitiva.",
                original:
                  "The Protestant authority structure consists of one element: Scripture as the written Word of God, divinely inspired, authoritative, true, sufficient, necessary, clear, and transformative for sinful people. In contrast to Roman Catholics, Protestants hold to  sola Scriptura: Scripture is the church’s sole authority, ultimately determinative for doctrine, practice, faith, worship, and ministry. At the time of the Reformation, this principle was coupled with an explicit rejection of the Roman Catholic authority structure. Scripture alone, not Scripture plus Tradition plus the Magisterium, is the church’s authority.\n\nThree qualifications are needed at this point: First, biblical authority must always be related to God himself, who as the sovereign Lord reveals himself and his ways through inspired, and thus authoritative, Scripture. God sustains the closest possible relationship to his Word. Accordingly, to obey God’s Word is to obey God himself. To disobey God’s Word is to disobey God himself. To trust God’s Word is to trust God himself. To mistrust God’s Word is to mistrust God himself. In the words of Timothy Ward: “God has so identified himself with his words that whatever someone does to God’s words . . . they do directly to God himself.” This affirmation does not equate God with his Word. But it does make clear that the God to whom all authority belongs to command what believers are to do and believe, and prohibit what they are not to do and believe, stands behind his authoritative Word.\n\nThus, the authority of the Word of God goes hand in hand with the authority of the Holy Spirit, who inspired that Word (2 Pet. 1:19–21; 2 Tim. 3:15–17) and enables the church to understand it (1 Cor. 2:10–16).\n\nSecond, sola Scriptura is the principle of ultimate authority and does not mean the church is without any other authority. Though Protestant churches rightly reject the Tradition (capital T) of the Catholic Church, they do not reject tradition (small t), or the accumulated wisdom of the historical church. Examples of tradition include the doctrines of the Trinity (one God, three persons) and of Christ (one person, two natures) that were forged in the early church.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "El autor dice que creer en la inerrancia no es requisito para la predicación expositiva, pero le da poco viento en las velas por lo demás; si toda la Escritura es inspirada por Dios y los hombres hablaron siendo llevados por el Espíritu Santo, el predicador debe predicar el mensaje de Dios tal como fue dado (un punto sobre la predicación, no directamente sobre la Escritura frente a la tradición)",
            quotes: [
              {
                speaker: "David King",
                work: "Why Must We Preach Expositionally?",
                outlet: "9Marks",
                date: "26 de febrero de 2010",
                locator:
                  "2 párrafos: del párrafo que empieza «A third issue to consider is…» al que termina «…essential link between inerrancy and proclamation.3»",
                url: "https://www.9marks.org/article/why-must-we-preach-expositionally/",
                text: "Una tercera cuestión a considerar es la de la INERRANCIA bíblica. No hace falta creer que Dios preservó su palabra del error durante el proceso de inspiración para creer en la predicación expositiva, pero si no lo crees, vas a encontrar poco viento en tus velas. La doctrina de la inerrancia es un viento de fuerza de vendaval que llena las velas de la predicación expositiva. Si “toda Escritura es exhalada por Dios” (2 Tim. 3:16), si “hombres hablaron de parte de Dios siendo llevados por el Espíritu Santo” (2 Pet. 1:21), si “toda palabra de Dios resulta verdadera” (Prov. 30:5), si los tiempos verbales en presente y los sustantivos en plural son críticos (Mar. 12:26; Gál. 3:16), ¿entonces no debería el predicador preocuparse por predicar el mensaje de Dios tal como fue dado? John MacArthur expone el punto con belleza:\n\nLa inerrancia exige un proceso exegético y una proclamación expositiva. Solo el proceso exegético preserva la Palabra de Dios por completo, guardando el tesoro de la revelación y declarando su significado exactamente como Él quiso que fuera proclamado. La predicación expositiva es el resultado del proceso exegético. Así, es el eslabón esencial entre la inerrancia y la proclamación.3",
                original:
                  "A third issue to consider is that of biblical INERRANCY. You do not have to believe that God preserved his word from error during the process of inspiration in order to believe in expository preaching, but you will find little wind in your sails otherwise. The doctrine of inerrancy is a gale force wind that fills the sails of expository preaching. If “all Scripture is breathed out by God” (2 Tim. 3:16), if “men spoke from God as they were carried along by the Holy Spirit” (2 Pet. 1:21), if “every word of God proves true” (Prov. 30:5), if present tense verbs and plural nouns are critical (Mar. 12:26; Gal. 3:16), then ought not the preacher be concerned to preach God’s message as given? John MacArthur states the point beautifully:\n\nInerrancy demands an exegetical process and an expository proclamation. Only the exegetical process preserves God’s Word entirely, guarding the treasure of revelation and declaring its meaning exactly as He intended it to be proclaimed. Expository preaching is the result of the exegetical process. Thus, it is the essential link between inerrancy and proclamation.3",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Ortlund sostiene que la Escritura es en sí misma palabra inspirada por Dios: lee «inspirada por Dios» (2 Tim 3:16), hombres llevados por el Espíritu Santo (2 Pe 1:21) y los «oráculos de Dios» (Rom 3:2) como que las mismas palabras de la Escritura son palabras de Dios, y sobre esa base llama a la Escritura infalible, como dice Jesús que «no puede ser quebrantada» (Jn 10:35); dice que este punto por sí solo aún no establece la sola scriptura",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The ULTIMATE Case for Sola Scriptura",
                outlet: "Truth Unites",
                date: "19 de agosto de 2025",
                locator: "Minutos 13:38 a 17:00",
                url: "https://podcasters.spotify.com/pod/show/truth-unites/episodes/The-ULTIMATE-Case-for-Sola-Scriptura-e371tfb#t=818",
                text: "No pienses en esto como si la idea fuera que la Escritura ya existe, y que después Dios viene y, por así decirlo, sopla sobre el texto para darle un poder extra o algo así. Piensa más bien en la Escritura misma. Las palabras mismas son las que Dios exhaló. Por eso John Stott, en su comentario sobre este pasaje, dice que podrías usar la palabra griega que significa «expiración», como en Dios exhalando. Si estás afuera en una noche fría, respiras y puedes ver tu aliento, el aliento de Dios. Eso cae en el campo semántico de este término. Así que puedes llamar a un sermón que escuchas un domingo por la mañana la Palabra de Dios en un sentido más general, pero no lo llamamos exhalado por Dios en este sentido, y esa es la distinción ontológica que intentamos transmitir con el adjetivo inspirada. Ahora bien, a veces esto se discute en 2 Tim. 3:16. Esta palabra aparece ahí porque más adelante se usa de manera más amplia, y así sucesivamente, y esto se complica. Así que digamos solamente que el punto aquí no depende de ese pasaje. Como veremos, este es un punto en el que todas las tradiciones pueden estar de acuerdo hoy, y simplemente se expresa de muchas maneras distintas en diferentes pasajes. Por ejemplo, 2 Pet. 1:21 habla de hombres que hablaron de parte de Dios siendo llevados por el Espíritu Santo. La gran idea de este pasaje es que la Escritura llega por un medio humano. El profeta es quien habla o escribe. Pero el origen no es humano, sino divino. Dios habla por ese medio humano. En su clásico tratamiento de la inspiración bíblica y la autoridad bíblica, B.B. Warfield comenta el verbo que se usa aquí en la frase llevados por el Espíritu Santo, y lo que nos ayuda a entender es que esto es más que una guía general. Lo que está en vista aquí es que las palabras del autor humano son de Dios. De forma más coloquial, podríamos decir que la Escritura son las palabras de Dios. Es el discurso de Dios. Así habla la Escritura de sí misma. Por ejemplo, Rom. 3:2 dice que a los judíos les fueron confiados los oráculos de Dios, Ta-logia tu-tha-u, las palabras de Dios, o la NASB dice las palabras reales de Dios, la NIV, las mismísimas palabras de Dios. Doug Moo, en su comentario, sostiene que este término se entiende mejor como una referencia al Antiguo Testamento en su conjunto, como pueden ver en pantalla. Bien, entonces el Antiguo Testamento son las palabras de Dios. Jesús en Mat. 19 citará Escritura del Antiguo Testamento. Ahora bien, no Dios hablando en el Antiguo Testamento, no una narración en la que Dios dice algo que queda registrado dentro de la estructura mayor, sino solo el texto mismo como Dios hablando. Eso es en realidad uno de los textos más relevantes en toda esta discusión. Y por eso entra en escena la infalibilidad, porque decimos que la Escritura es infalible porque es el discurso de Dios. Y Dios es omnisciente y perfecto, así que Dios es infalible. Por lo tanto, el discurso de Dios es infalible. Y sobre esa base decimos que la Escritura no puede errar, no puede equivocarse, o como dice Jesús en Juan 10:35 con un matiz de significado algo distinto, no puede ser quebrantada.",
                original:
                  "Don't think of this as though the idea is the Scripture already exists, and then God comes along and like breathes on top of the text so as to give it extra power or something like that. Rather, think of the scripture itself. The very words themselves are what is breathed out by God. So John Stott in his commentary on this passage says you could use the Greek word expiration, as in God breathing out. If you're out on a cold night and you breathe and you can see your breath, the breath of God. That's in the semantic ballpark here of this term. So you can call a sermon that you hear on a Sunday morning the Word of God in a more general sense, but we don't call it God breathed in this sense, and that is the ontological distinction we're trying to convey with the adjective inspired. Now, sometimes this is disputed in 2 Timothy 3.16. This word comes up because later it's used more broadly and so forth, and so this gets complicated. So let's just say that the point here is not dependent on that one passage. As we'll see, this is a point all traditions can agree upon today, and it's just something that is put in many different ways in different passages. For example, 2 Peter 1.21 speaks about men speaking from God as they were carried along by the Holy Spirit. The big idea here in this passage is that Scripture comes through a human medium. The prophet is the one speaking or writing. But the origin is not human, but is rather divine. God is speaking through that human medium. In his classic treatment of biblical inspiration and biblical authority, B.B. Warfield comments on the verb used here in this phrase, carried along by the Holy Spirit. and what he helps us understand is that this is more than just a general guidance. What is in view here is that the words of the human author are from God. More colloquially, we could say scripture is God's words. It is God's speech. This is how the scripture speaks of itself. For example, Romans 3.2 says that the Jews were entrusted with the oracles of God, Ta-logia tu-tha-u, the words of God, or NASB says the actual words of God, NIV, the very words of God. Doug Moo in his commentary argues that this term is best taken as a reference to the Old Testament as a whole, as you can see on screen. Okay, so the Old Testament is the words of God. Jesus in Matthew 19 will quote Old Testament scripture. Now, not God speaking in Old Testament Scripture, not a narrative in which God says something that is sort of recorded within the larger structure, but just the text itself as God speaking. That's actually one of the most relevant texts in this whole discussion. And so this is why infallibility will come into the picture, is because we say the Scripture is infallible because it's God's speech. And God is omniscient and perfect, so God is infallible. So God's speech is therefore infallible. And it's on that basis that we say the scripture cannot err, it cannot get it wrong, or as Jesus puts it in John 10.35 with a slightly different nuance of meaning, it cannot be broken.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Durbin toma 2 Tim 3:16 como una explicación, en la revelación inspirada, de la naturaleza de la Escritura: «toda Escritura» se refiere principalmente al Antiguo Testamento, que Pablo dice en Romanos 3 que fue confiado a Israel como «los oráculos de Dios», y lo llama habla propia de Dios; luego dice que la afirmación debe pensarse en confrontación con las pretensiones de Roma sobre el papado y el magisterio docente, y que la Escritura es única y distinta",
            quotes: [
              {
                speaker: "Jeff Durbin",
                work: "Jeff Durbin: Overcoming Objections to Sola Scriptura",
                outlet: "Apologia Studios",
                date: "26 de febrero de 2024",
                locator: "Minutos 7:00 a 8:54",
                url: "https://www.youtube.com/watch?v=vHJxo2jkQ7E&t=420s",
                text: "pero Dios ha hablado. Y lo que tenemos aquí es una explicación, en la revelación inspirada, sobre la naturaleza de la Escritura. Eso es lo principal que quieren captar ahora mismo. La naturaleza de la Escritura. ¿Qué es esto? ¿Qué es? Sabemos que es Dios hablando, pero Pablo dijo algo sobre su naturaleza. Dice: toda Escritura, y aquí se refiere principalmente a las Escrituras del Antiguo Testamento, porque la revelación del Nuevo Testamento todavía está en curso cuando esto se escribe. Pablo es un apóstol inspirado; en este mismo momento, en 2 Timoteo capítulo 3 versículo 16, está literalmente dando revelación continua. La revelación todavía está sucediendo, pero ¿a qué se refiere principalmente? ¿Qué? A la revelación del Antiguo Testamento, lo que Dios le había dado al pueblo judío, a Israel. Dice en Romanos 3 que les fueron confiados, no se pierdan esto, los oráculos de Dios: que Dios soberanamente determina dar su propio discurso, su revelación divina, a Israel. Se la confió a Israel. La custodia con Israel. Y los judíos tenían los oráculos de Dios. Y aquí Pablo está diciendo: ustedes conocen las Escrituras, y ¿qué dice de ellas? Que son theonustos, exhaladas por Dios. Ahora bien, en una serie como esta, tienen que pensar en las implicaciones de esa afirmación sobre la Escritura en relación, por ejemplo, con el catolicismo romano, las afirmaciones del papado, el magisterio de enseñanza, tal vez sus amigos ortodoxos orientales, o sus amigos mormones, o los testigos de Jehová. Tienen que pensarlo a la luz de ese conflicto y decir: bueno, pero la Escritura es única. Es distinta. Es el discurso mismo de Dios. Pero tenemos que ir más allá de eso.",
                original:
                  "but God has spoken. And what we have here is an explanation in inspired revelation about the nature of scripture. That's the key thing you want to get across right now. The nature of scripture. What is this? What is it? We know that it's God speaking, but Paul said something about its nature. He says, all scripture, and he's referring here to the Old Testament scriptures primarily because New Testament revelation is still ongoing when this is written. Paul's an inspired apostle. He's literally giving continued revelation at this moment in 2 Timothy chapter 3 verse 16. Revelation is still happening, but he's primarily referring to what? The Old Testament revelation, what God had given to the Jewish people, to Israel. He says in Romans 3, they were entrusted with, don't miss this, the oracles of God, that God sovereignly determines to give his own speech, his divine revelation to Israel. He entrusted to Israel. He guards it with Israel. And the Jews had the oracles of God. And here Paul is saying, you've known the scriptures. and what is he saying about them that they are theonustos breathed out by god now i know in a series like this you you have to because it's part of what we're doing you have to think about the implications of that claim in scripture related to say roman catholicism the claims of the papacy the teaching magisterium maybe your eastern orthodox friends or your mormon friends or the Jehovah's Witnesses. You have to think about it in the light of that conflict and go, okay, but scripture is unique. It's distinct. It's the very speech of God. But we need to go beyond that.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Heb.1.1-Heb.1.2"],
      text: "Primera Confesión de Londres (1646), VIII, p. 176: este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
      apologists: {
        arguments: [
          {
            title:
              "White cita Hebreos 1 («en tiempos pasados Dios habló a los padres por los profetas, pero en estos últimos días nos ha hablado por el Hijo») para argumentar que no hay nada más allá de esa revelación del Hijo, con los apóstoles como sus testigos, y pregunta si hay algo más que necesitemos saber sobre Jesús",
            quotes: [
              {
                speaker: "James White",
                work: "Sola Scriptura: Do You Really Believe?",
                outlet: "Alpha & Omega Ministries",
                date: "15 de marzo de 2022",
                locator: "Minutos 34:34 a 34:50",
                url: "https://www.youtube.com/watch?v=IAl0GFBCYjQ&t=2074s",
                text: "Porque, saben, Hebreos 1 dice: en otro tiempo, Dios habló a los padres por los profetas; pero en estos últimos días nos ha hablado por el Hijo. No va a haber nada más allá de eso. Oh, pero técnicamente sí lo hay con los apóstoles, pero ese es justamente el punto. Es la revelación del Hijo. Entonces, ¿hay algo más que necesitemos saber sobre Jesús?",
                original:
                  "Because, you know, Hebrews 1 says, in times past, God spoke to the fathers, but the prophets. But in these last days, he's spoken unto us by his son. There's not going to be anything past that. Oh, but there technically is with the apostles, but that's just it. That's the revelation of the Son. So is there something more we need to know about Jesus?",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Murr lee Heb 1:1–2: Dios habló por los profetas y en estos últimos días por su Hijo. Concede que la Escritura no es el único modo en que Dios ha hablado (profetas, Cristo, apóstoles), luego sostiene que el versículo nombra a los profetas y a Cristo, no a la tradición y el magisterio, y pregunta dónde se hallan hoy las palabras compiladas de lo que Dios habló por medio de los profetas, respondiendo «Solo en la escritura»",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "Objeciones a Sola Escritura:  No esta en la Biblia, ni tampoco el canon.  - Dr. Carlos Andrés Murr",
                outlet: "Carlos Andres Murr",
                date: "26 de agosto de 2023",
                locator: "Minutos 57:37 a 59:41",
                url: "https://www.youtube.com/watch?v=zhnj5XDpQSc&t=3457s",
                text: "se le da esa autoridad. Ahora, este mismo versículo que vimos de Hebreos 1.11 también prueba que, mira lo que dice, Dios habiendo hablado por los profetas, en estos últimos días nos ha hablado por su Hijo. A la vez que este versículo prueba de que las Escrituras no son la única manera que Dios ha hablado, porque Dios ha hablado por profetas, por Cristo, por los apóstoles. Entonces, cuando piensas en dónde se encuentra la compilación de las palabras por las cuales Dios habló, llegas a la conclusión ineludible de que el principio de sola escritura se sostiene y no es derrumbado. Te voy a decir por qué. Vamos a hacer preguntas. ¿A través de quiénes se dice que Dios ha hablado? A través de los profetas y ahora a través de Cristo. No dice que Dios habló por la tradición y el magisterio porque el autor de A los Hebreos pudo haber dicho Dios habiendo hablado a través de las escrituras, a través de la tradición, a través del magisterio infaliblemente. Pero fue a través de los profetas y ahora a través de Cristo. Ahora, ¿dónde encontramos hoy lo que Dios habló a través de los profetas? Te pregunto, amigo católico. Si Dios ha hablado no solo por las Escrituras, sino también a través de los profetas y a través de Cristo, y podemos saber que Cristo dejó a sus apóstoles y a través de los apóstoles, ¿dónde encontramos hoy lo que Dios habló a través de los profetas? ¿Tienes algún escrito profético? ¿Tenemos la declaración exacta de lo que dijeron las cuatro hijas de Felipe que profetizaban en el libro de los hechos? No. Los únicos profetas que tenemos es Isaías, Jeremías, Ezequiel, Amós, Oseas, los profetas del Antiguo Testamento. ¿Dónde encontramos lo que Dios habló a través de los profetas? Solo en la escritura",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Heb.1.1"],
      text: "Fe y Mensaje Bautistas (1925), I (1963 Annual, p. 270, columna derecha): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270.",
      apologists: {
        arguments: [
          {
            title:
              "White cita Hebreos 1 («en tiempos pasados Dios habló a los padres por los profetas, pero en estos últimos días nos ha hablado por el Hijo») para argumentar que no hay nada más allá de esa revelación del Hijo, con los apóstoles como sus testigos, y pregunta si hay algo más que necesitemos saber sobre Jesús",
            quotes: [
              {
                speaker: "James White",
                work: "Sola Scriptura: Do You Really Believe?",
                outlet: "Alpha & Omega Ministries",
                date: "15 de marzo de 2022",
                locator: "Minutos 34:34 a 34:50",
                url: "https://www.youtube.com/watch?v=IAl0GFBCYjQ&t=2074s",
                text: "Porque, saben, Hebreos 1 dice: en otro tiempo, Dios habló a los padres por los profetas; pero en estos últimos días nos ha hablado por el Hijo. No va a haber nada más allá de eso. Oh, pero técnicamente sí lo hay con los apóstoles, pero ese es justamente el punto. Es la revelación del Hijo. Entonces, ¿hay algo más que necesitemos saber sobre Jesús?",
                original:
                  "Because, you know, Hebrews 1 says, in times past, God spoke to the fathers, but the prophets. But in these last days, he's spoken unto us by his son. There's not going to be anything past that. Oh, but there technically is with the apostles, but that's just it. That's the revelation of the Son. So is there something more we need to know about Jesus?",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Murr lee Heb 1:1–2: Dios habló por los profetas y en estos últimos días por su Hijo. Concede que la Escritura no es el único modo en que Dios ha hablado (profetas, Cristo, apóstoles), luego sostiene que el versículo nombra a los profetas y a Cristo, no a la tradición y el magisterio, y pregunta dónde se hallan hoy las palabras compiladas de lo que Dios habló por medio de los profetas, respondiendo «Solo en la escritura»",
            quotes: [
              {
                speaker: "Carlos Andrés Murr",
                work: "Objeciones a Sola Escritura:  No esta en la Biblia, ni tampoco el canon.  - Dr. Carlos Andrés Murr",
                outlet: "Carlos Andres Murr",
                date: "26 de agosto de 2023",
                locator: "Minutos 57:37 a 59:41",
                url: "https://www.youtube.com/watch?v=zhnj5XDpQSc&t=3457s",
                text: "se le da esa autoridad. Ahora, este mismo versículo que vimos de Hebreos 1.11 también prueba que, mira lo que dice, Dios habiendo hablado por los profetas, en estos últimos días nos ha hablado por su Hijo. A la vez que este versículo prueba de que las Escrituras no son la única manera que Dios ha hablado, porque Dios ha hablado por profetas, por Cristo, por los apóstoles. Entonces, cuando piensas en dónde se encuentra la compilación de las palabras por las cuales Dios habló, llegas a la conclusión ineludible de que el principio de sola escritura se sostiene y no es derrumbado. Te voy a decir por qué. Vamos a hacer preguntas. ¿A través de quiénes se dice que Dios ha hablado? A través de los profetas y ahora a través de Cristo. No dice que Dios habló por la tradición y el magisterio porque el autor de A los Hebreos pudo haber dicho Dios habiendo hablado a través de las escrituras, a través de la tradición, a través del magisterio infaliblemente. Pero fue a través de los profetas y ahora a través de Cristo. Ahora, ¿dónde encontramos hoy lo que Dios habló a través de los profetas? Te pregunto, amigo católico. Si Dios ha hablado no solo por las Escrituras, sino también a través de los profetas y a través de Cristo, y podemos saber que Cristo dejó a sus apóstoles y a través de los apóstoles, ¿dónde encontramos hoy lo que Dios habló a través de los profetas? ¿Tienes algún escrito profético? ¿Tenemos la declaración exacta de lo que dijeron las cuatro hijas de Felipe que profetizaban en el libro de los hechos? No. Los únicos profetas que tenemos es Isaías, Jeremías, Ezequiel, Amós, Oseas, los profetas del Antiguo Testamento. ¿Dónde encontramos lo que Dios habló a través de los profetas? Solo en la escritura",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["Heb.4.12"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
      apologists: {
        arguments: [
          {
            title:
              "Durbin lee Heb 4:12 («la palabra de Dios es viva y eficaz, más cortante que toda espada de dos filos…») como parte de su punto sobre el efecto o poder de la Escritura, dice que allí se dice algo sobre la Palabra de Dios, y aplaza su desarrollo para más adelante en la serie",
            quotes: [
              {
                speaker: "Jeff Durbin",
                work: "Jeff Durbin: Sola Scriptura & Rome, Pt 1 | Foundations",
                outlet: "Apologia Studios",
                date: "29 de enero de 2024",
                locator: "Minutos 1:13:27 a 1:14:34",
                url: "https://www.youtube.com/watch?v=LJ7lIRhi3VE&t=4407s",
                text: "Vayan a Hebreos capítulo 4. Hebreos capítulo 4. Hebreos capítulo 4. Perdón, mis páginas están pegadas aquí. Hebreos capítulo 4, versículo 12: Porque la palabra de Dios es viva y eficaz, y más cortante que toda espada de dos filos; penetra hasta partir el alma y el espíritu, las coyunturas y los tuétanos, y discierne los pensamientos y las intenciones del corazón. Algo se dice allí sobre la Palabra de Dios. Podemos desarrollar todo esto en términos del poder de Dios, del efecto de Dios, pero llegaremos a eso más adelante.",
                original:
                  "Go to Hebrews chapter 4. Hebrews chapter 4. Hebrews chapter 4. Sorry, my pages are stuck together here. Hebrews chapter 4, verse 12. For the word of God is living and active, sharper than any two-edged sword, piercing to the division of soul and of spirit, of joints and of marrow, and discerning the thoughts and the intentions of the heart. Something being said there about the Word of God. We can unpack all of this in terms of the power of God, the effect of God, but we'll get more to that later.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["1Pet.1.25"],
      text: "Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
    },
    {
      refs: ["2Pet.1.19-2Pet.1.21"],
      text: "Segunda Confesión de Londres (1689), 1.4 nota (g) (1719 p. 28; 1688 p. 4): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] dependeth not upon the testimony of any man, or Church; but wholly upon God (who is truth it self) the Author thereof; therefore it is to be received, because it is the Word of God.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Fe y Mensaje Bautistas (1925), I (1963 Annual, p. 270, columna derecha): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (1963), I (Annual, p. 270, columna izquierda): este versículo figura como lista de textos de prueba. Edición: Annual of the Southern Baptist Convention 1963, p. 270. Fe y Mensaje Bautistas (2000), I (página oficial; las 29 referencias del artículo): este versículo figura como lista de textos de prueba. Edición: texto oficial en línea.",
      apologists: {
        arguments: [
          {
            title:
              "«Inspirada por Dios» habla de la Escritura como discurso propio de Dios, infalible y ontológicamente única; ese punto por sí solo no establece la Sola Scriptura, y todas las tradiciones pueden estar de acuerdo en él",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The ULTIMATE Case for Sola Scriptura",
                outlet: "Gavin Ortlund, YouTube",
                date: "19 de agosto de 2025",
                locator: "Minutos 13:12 a 18:44",
                url: "https://www.youtube.com/watch?v=rpmcr7jOev4&t=792s",
                text: "usar el propio lenguaje bíblico para esto. Quizá el versículo más sobreutilizado, que seguramente conocen si siguen estas discusiones, es 2 Timoteo 3:16, donde Pablo dice que toda Escritura es exhalada por Dios. La palabra griega theanustas recibe mucha atención en estas conversaciones. A veces se traduce como inspirada por Dios, como en la NASB, o exhalada por Dios, como en la ESV aquí. Eh, no piensen en esto como si la idea fuera que la Escritura ya existe y luego Dios viene y sopla encima del texto para darle más poder o algo así. Más bien, piensen en la Escritura misma: las palabras mismas son las que son exhaladas por Dios. Así que John Stodd, en su comentario sobre este pasaje, dice que se podría usar la palabra griega espiración, como en Dios exhalando. Si estás afuera en una noche fría y respiras, y puedes ver tu aliento, el aliento de Dios: esa es la zona semántica aproximada de este término. Así que puedes llamar palabra de Dios, en un sentido más general, a un sermón que escuchas un domingo por la mañana, pero no lo llamamos exhalado por Dios en este sentido. Y esa es la distinción ontológica que intentamos transmitir con el adjetivo inspirada. Ahora bien, a veces esto se discute en 2 Timoteo 3:16; la palabra aparece y luego se usa de forma más amplia, y así sucesivamente, y entonces esto se complica. Así que digamos que el punto aquí no depende de ese único pasaje, como veremos. Este es un punto en el que todas las tradiciones pueden estar de acuerdo hoy, y es algo que se expresa de muchas maneras distintas en diferentes pasajes. Por ejemplo, 2 Pedro 1:21 habla de hombres que hablaron de parte de Dios mientras eran llevados por el Espíritu Santo. La gran idea de este pasaje es que la Escritura llega por un medio humano. El profeta es el que habla o escribe, pero el origen no es humano sino divino. Dios habla a través de ese medio humano. En su clásico tratamiento de la inspiración bíblica y la autoridad bíblica, BB Warfield comenta el verbo que se usa aquí en la frase llevados por el Espíritu Santo. Y lo que nos ayuda a entender es que esto es más que una guía general. Lo que está en juego aquí es que las palabras del autor humano son de Dios. De manera más coloquial, podríamos decir: la Escritura son las palabras de Dios. Es el habla de Dios. Así es como la Escritura habla de sí misma. Por ejemplo, Romanos 3:2 dice que a los judíos se les confiaron los oráculos de Dios. Talogu, las palabras de Dios; o la NASB dice: las palabras reales de Dios; la NIV: las palabras mismas de Dios. Doug Moo, en su comentario, sostiene que este término se entiende mejor como una referencia al Antiguo Testamento en su conjunto, como pueden ver en pantalla. Bien. Entonces el Antiguo Testamento son las palabras de Dios. Eh, Jesús en Mateo 19 citará Escritura del Antiguo Testamento. Ahora bien, no es Dios hablando dentro de la Escritura del Antiguo Testamento, no un relato en el que Dios dice algo que queda registrado dentro de la estructura más amplia, sino el texto mismo como habla de Dios. Eso es en realidad uno de los pasajes más relevantes en toda esta discusión. Y por eso entra en escena la infalibilidad: decimos que la Escritura es infalible porque es el habla de Dios, y Dios es omnisciente y perfecto. Así que Dios es infalible. Por lo tanto, el habla de Dios es infalible. Y sobre esa base decimos que la Escritura no puede heredar. No puede equivocarse. O, como dice Jesús en Juan 10:35, con un matiz de significado algo distinto: no puede ser quebrantada. Así que en este punto no tiene por qué ser, y a menudo no es, un desacuerdo con otras tradiciones cristianas que la Escritura es ontológicamente única en su naturaleza como palabra de Dios. Siempre quiero animar a la gente, especialmente cuando hacen videos de refutación: todavía no estoy haciendo el argumento. Este es un principio que va a estar dentro del contexto más amplio de un argumento que se despliega. Así que aguanten conmigo para ver la relevancia de esto. No se adelanten. No estoy estableciendo solos scriptor todavía. Bien, solo estamos estableciendo un punto: la Escritura es ontológicamente única como habla de Dios. Eh, la Iglesia Católica Romana enseña que la Escritura es el habla de Dios. Es puesta por escrito bajo el aliento del Espíritu Santo. En la teología católica romana, la Sagrada Escritura y la Sagrada Tradición juntas constituyen la palabra de Dios, pero de diferentes maneras. La Sagrada Tradición no es inspirada por el Espíritu Santo de la misma manera que la Sagrada Escritura. Y el papel del magisterio, incluso cuando funciona con infalibilidad, no es lo mismo que el habla divina. Eh, el charrorismo de la infalibilidad que se extiende a la iglesia en la teología católica romana se distingue de la revelación divina. Es una interpretación de la revelación divina que se sostiene como infalible, pero no es lo mismo que el habla de Dios. Así que cuando un papa habla ex cathedra, eso es infalible, pero no es exhalado por Dios, no es habla divina llevada por el Espíritu, los oráculos de Dios. No es lo mismo que la Escritura, y no está añadiendo cosas nuevas al depósito apostólico de la revelación divina. Es una interpretación de ese depósito. Eh, de manera similar, la teología católica romana concuerda en que la revelación divina pública ha cesado con la muerte de los últimos apóstoles.",
                original:
                  "use the biblical language itself for this. Maybe the most overutilized verse that I'm sure you're familiar with if you're into these discussions at all is 2 Timothy 3:16 where Paul says that all scripture is breathed out by God. The Greek word theanustas gets a lot of discussion in these conversations. Sometimes translated as inspired by God as in the NASB or breathed out by God in the ESV here. Um don't think of this as though the idea is the scripture already exists and then God comes along and like breathes on top of the text so as to give it extra power or something like that. Rather think of the scripture itself the very words themselves are what is breathed out by God. So John Stodd in his commentary on this passage says you could use uh the Greek word expiration as in you know God breathing out. If you're out on a cold night and you breathe and you can see your breath, the the breath of God, uh that's the in the semantic ballpark here of this term. So you you can call a sermon that you hear on a Sunday morning the word of God in a more general sense, but we don't call it God breathed in this sense. And that is the ontological distinction we're trying to convey with the adjective inspired. Now, sometimes this is disputed in 2 Timothy 3:16. this word comes up and because later it's used more broadly and so forth and so this gets complicated. So let's just say that the point here is not dependent on that one passage as we'll see. This is a point all traditions can agree upon today and it's just something that that is put in many different ways in different passages. For example, second Peter 1:21 uh speaks about men speaking from God as they were carried along by the Holy Spirit. The the big idea here in this passage is that uh scripture comes through a human medium. The prophet is is the one sp speaking or writing uh but the origin is not human but is rather divine. God is speaking through that human medium. In his classic treatment of biblical inspiration and biblical authority, BB Warfield comments on the verb used here in this phrase carried along by the Holy Spirit. And what he helps us understand is that this is more than just a general guidance. What is in view here is that the words of the human author are from God. More colloquially, we could say scripture is God's words. It is God's speech. This is how the scripture speaks of itself. For example, Romans 3:2 says that the Jews were entrusted with the oracles of God. Talogu, the words of God or NASB says the actual words of God. NIV, the very words of God. Doug Moo in his commentary argues that this term is best taken as a reference to the Old Testament as a whole, as you can see on screen. Okay. So this so the Old Testament is the words of God. Uh Jesus in Matthew 19 will quote Old Testament scripture. Now not God speaking in Old Testament scripture, not a narrative in which God says something that is sort of recorded within the larger structure, but just the the text itself as God speaking. That's actually one of the most relevant texts in this whole discussion. And so this is why infallibility will come into the picture is because we say the scripture is infallible because it's God's speech and God is omnisient and perfect. So God is infallible. So God's speech is therefore infallible. And it's on that basis that we say the scripture cannot heir. It cannot get it wrong. Or as Jesus puts it in John 10:35 uh with a slightly different nuance of meaning, it cannot be broken. So when it comes to this point, this need not be and often is not a point of disagreement with other Christian traditions that scripture is ontologically unique in its nature as the as the word of God. I always want to encourage people especially when they do rebuttal videos. I I'm not making the argument yet. This is one principle that is going to be in the larger context of an unfolding argument. So hang with me here for the relevance of this. Don't get ahead of me. I'm not this is not establishing solos scriptor yet. Okay? Okay, we're just establishing one point. The scripture is unique ontologically as the speech of God. Um the Roman Catholic Church uh teaches that scripture is the speech of God. Uh it is put down in writing under the breath of the Holy Spirit. In Roman Catholic theology, sacred scripture and sacred tradition together constitute the word of God, but in different ways. Sacred tradition is not inspired by the Holy Spirit in the same way that sacred scripture is. And the role of the magisterium, even when functioning with infallibility, isn't the same thing as divine speech. Uh the charrorism of infallibility that's extended to the church in Roman Catholic theology is distinguished from divine revelation. It's an interpretation of divine revelation that that is held to be infallible, but it's not the same thing as the speech of God. So when a pope speaks ex cathedra, that's infallible, but it's not God breathed, spirit carried divine speech, the oracles of God. It's not the same thing as scripture, and it's not adding new things on to the to the apostolic deposit of divine revelation. It's an interpretation of that. Um, similarly, Roman Catholic theology agrees that public divine revelation has ceased with the death of the last apostles.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "La Escritura sola, no Escritura más Tradición más Magisterio, es la autoridad última de la iglesia; la iglesia no carece de toda otra autoridad, y la tradición (con t minúscula) se conserva como sabiduría acumulada; la autoridad de la Palabra va con el Espíritu Santo, que la inspiró y capacita a la iglesia para entenderla",
            quotes: [
              {
                speaker: "Gregg R. Allison",
                work: "Two Views on Church Authority: Protestant vs. Roman Catholic",
                outlet: "9Marks",
                date: "26 de septiembre de 2017",
                locator:
                  "4 párrafos: del párrafo que empieza «The Protestant authority structure consists of…» al que termina «…were forged in the early church.»",
                url: "https://www.9marks.org/article/two-views-on-church-authority-protestant-vs-roman-catholic/",
                text: "La estructura de autoridad protestante consta de un solo elemento: la Escritura como Palabra escrita de Dios, inspirada divinamente, autoritativa, verdadera, suficiente, necesaria, clara y transformadora para personas pecadoras. En contraste con los católicos romanos, los protestantes sostienen la sola Scriptura: la Escritura es la única autoridad de la iglesia, determinante en última instancia para la doctrina, la práctica, la fe, la adoración y el ministerio. En tiempos de la Reforma, este principio se unió a un rechazo explícito de la estructura de autoridad católico-romana. La Escritura sola, no la Escritura más la Tradición más el Magisterio, es la autoridad de la iglesia.\n\nTres precisiones son necesarias en este punto: Primero, la autoridad bíblica debe relacionarse siempre con Dios mismo, quien como Señor soberano se revela a sí mismo y sus caminos por medio de la Escritura inspirada, y por tanto autoritativa. Dios sostiene la relación más estrecha posible con su Palabra. En consecuencia, obedecer la Palabra de Dios es obedecer a Dios mismo. Desobedecer la Palabra de Dios es desobedecer a Dios mismo. Confiar en la Palabra de Dios es confiar en Dios mismo. Desconfiar de la Palabra de Dios es desconfiar de Dios mismo. En palabras de Timothy Ward: “Dios se ha identificado tanto con sus palabras que lo que alguien le hace a las palabras de Dios . . . lo hace directamente a Dios mismo”. Esta afirmación no iguala a Dios con su Palabra. Pero sí deja claro que el Dios a quien pertenece toda autoridad para mandar lo que los creyentes deben hacer y creer, y para prohibir lo que no deben hacer ni creer, está detrás de su Palabra autoritativa.\n\nAsí, la autoridad de la Palabra de Dios va de la mano con la autoridad del Espíritu Santo, quien inspiró esa Palabra (2 Pet. 1:19–21; 2 Tim. 3:15–17) y capacita a la iglesia para entenderla (1 Cor. 2:10–16).\n\nSegundo, la sola Scriptura es el principio de autoridad última, y no significa que la iglesia carezca de cualquier otra autoridad. Aunque las iglesias protestantes rechazan con razón la Tradición (con T mayúscula) de la Iglesia católica, no rechazan la tradición (con t minúscula), es decir, la sabiduría acumulada de la iglesia histórica. Ejemplos de tradición son las doctrinas de la Trinidad (un Dios, tres personas) y de Cristo (una persona, dos naturalezas), que se formularon en la iglesia primitiva.",
                original:
                  "The Protestant authority structure consists of one element: Scripture as the written Word of God, divinely inspired, authoritative, true, sufficient, necessary, clear, and transformative for sinful people. In contrast to Roman Catholics, Protestants hold to  sola Scriptura: Scripture is the church’s sole authority, ultimately determinative for doctrine, practice, faith, worship, and ministry. At the time of the Reformation, this principle was coupled with an explicit rejection of the Roman Catholic authority structure. Scripture alone, not Scripture plus Tradition plus the Magisterium, is the church’s authority.\n\nThree qualifications are needed at this point: First, biblical authority must always be related to God himself, who as the sovereign Lord reveals himself and his ways through inspired, and thus authoritative, Scripture. God sustains the closest possible relationship to his Word. Accordingly, to obey God’s Word is to obey God himself. To disobey God’s Word is to disobey God himself. To trust God’s Word is to trust God himself. To mistrust God’s Word is to mistrust God himself. In the words of Timothy Ward: “God has so identified himself with his words that whatever someone does to God’s words . . . they do directly to God himself.” This affirmation does not equate God with his Word. But it does make clear that the God to whom all authority belongs to command what believers are to do and believe, and prohibit what they are not to do and believe, stands behind his authoritative Word.\n\nThus, the authority of the Word of God goes hand in hand with the authority of the Holy Spirit, who inspired that Word (2 Pet. 1:19–21; 2 Tim. 3:15–17) and enables the church to understand it (1 Cor. 2:10–16).\n\nSecond, sola Scriptura is the principle of ultimate authority and does not mean the church is without any other authority. Though Protestant churches rightly reject the Tradition (capital T) of the Catholic Church, they do not reject tradition (small t), or the accumulated wisdom of the historical church. Examples of tradition include the doctrines of the Trinity (one God, three persons) and of Christ (one person, two natures) that were forged in the early church.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "El autor dice que creer en la inerrancia no es requisito para la predicación expositiva, pero le da poco viento en las velas por lo demás; si toda la Escritura es inspirada por Dios y los hombres hablaron siendo llevados por el Espíritu Santo, el predicador debe predicar el mensaje de Dios tal como fue dado (un punto sobre la predicación, no directamente sobre la Escritura frente a la tradición)",
            quotes: [
              {
                speaker: "David King",
                work: "Why Must We Preach Expositionally?",
                outlet: "9Marks",
                date: "26 de febrero de 2010",
                locator:
                  "2 párrafos: del párrafo que empieza «A third issue to consider is…» al que termina «…essential link between inerrancy and proclamation.3»",
                url: "https://www.9marks.org/article/why-must-we-preach-expositionally/",
                text: "Una tercera cuestión a considerar es la de la INERRANCIA bíblica. No hace falta creer que Dios preservó su palabra del error durante el proceso de inspiración para creer en la predicación expositiva, pero si no lo crees, vas a encontrar poco viento en tus velas. La doctrina de la inerrancia es un viento de fuerza de vendaval que llena las velas de la predicación expositiva. Si “toda Escritura es exhalada por Dios” (2 Tim. 3:16), si “hombres hablaron de parte de Dios siendo llevados por el Espíritu Santo” (2 Pet. 1:21), si “toda palabra de Dios resulta verdadera” (Prov. 30:5), si los tiempos verbales en presente y los sustantivos en plural son críticos (Mar. 12:26; Gál. 3:16), ¿entonces no debería el predicador preocuparse por predicar el mensaje de Dios tal como fue dado? John MacArthur expone el punto con belleza:\n\nLa inerrancia exige un proceso exegético y una proclamación expositiva. Solo el proceso exegético preserva la Palabra de Dios por completo, guardando el tesoro de la revelación y declarando su significado exactamente como Él quiso que fuera proclamado. La predicación expositiva es el resultado del proceso exegético. Así, es el eslabón esencial entre la inerrancia y la proclamación.3",
                original:
                  "A third issue to consider is that of biblical INERRANCY. You do not have to believe that God preserved his word from error during the process of inspiration in order to believe in expository preaching, but you will find little wind in your sails otherwise. The doctrine of inerrancy is a gale force wind that fills the sails of expository preaching. If “all Scripture is breathed out by God” (2 Tim. 3:16), if “men spoke from God as they were carried along by the Holy Spirit” (2 Pet. 1:21), if “every word of God proves true” (Prov. 30:5), if present tense verbs and plural nouns are critical (Mar. 12:26; Gal. 3:16), then ought not the preacher be concerned to preach God’s message as given? John MacArthur states the point beautifully:\n\nInerrancy demands an exegetical process and an expository proclamation. Only the exegetical process preserves God’s Word entirely, guarding the treasure of revelation and declaring its meaning exactly as He intended it to be proclaimed. Expository preaching is the result of the exegetical process. Thus, it is the essential link between inerrancy and proclamation.3",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Ortlund sostiene que la Escritura es en sí misma palabra inspirada por Dios: lee «inspirada por Dios» (2 Tim 3:16), hombres llevados por el Espíritu Santo (2 Pe 1:21) y los «oráculos de Dios» (Rom 3:2) como que las mismas palabras de la Escritura son palabras de Dios, y sobre esa base llama a la Escritura infalible, como dice Jesús que «no puede ser quebrantada» (Jn 10:35); dice que este punto por sí solo aún no establece la sola scriptura",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The ULTIMATE Case for Sola Scriptura",
                outlet: "Truth Unites",
                date: "19 de agosto de 2025",
                locator: "Minutos 13:38 a 17:00",
                url: "https://podcasters.spotify.com/pod/show/truth-unites/episodes/The-ULTIMATE-Case-for-Sola-Scriptura-e371tfb#t=818",
                text: "No pienses en esto como si la idea fuera que la Escritura ya existe, y que después Dios viene y, por así decirlo, sopla sobre el texto para darle un poder extra o algo así. Piensa más bien en la Escritura misma. Las palabras mismas son las que Dios exhaló. Por eso John Stott, en su comentario sobre este pasaje, dice que podrías usar la palabra griega que significa «expiración», como en Dios exhalando. Si estás afuera en una noche fría, respiras y puedes ver tu aliento, el aliento de Dios. Eso cae en el campo semántico de este término. Así que puedes llamar a un sermón que escuchas un domingo por la mañana la Palabra de Dios en un sentido más general, pero no lo llamamos exhalado por Dios en este sentido, y esa es la distinción ontológica que intentamos transmitir con el adjetivo inspirada. Ahora bien, a veces esto se discute en 2 Tim. 3:16. Esta palabra aparece ahí porque más adelante se usa de manera más amplia, y así sucesivamente, y esto se complica. Así que digamos solamente que el punto aquí no depende de ese pasaje. Como veremos, este es un punto en el que todas las tradiciones pueden estar de acuerdo hoy, y simplemente se expresa de muchas maneras distintas en diferentes pasajes. Por ejemplo, 2 Pet. 1:21 habla de hombres que hablaron de parte de Dios siendo llevados por el Espíritu Santo. La gran idea de este pasaje es que la Escritura llega por un medio humano. El profeta es quien habla o escribe. Pero el origen no es humano, sino divino. Dios habla por ese medio humano. En su clásico tratamiento de la inspiración bíblica y la autoridad bíblica, B.B. Warfield comenta el verbo que se usa aquí en la frase llevados por el Espíritu Santo, y lo que nos ayuda a entender es que esto es más que una guía general. Lo que está en vista aquí es que las palabras del autor humano son de Dios. De forma más coloquial, podríamos decir que la Escritura son las palabras de Dios. Es el discurso de Dios. Así habla la Escritura de sí misma. Por ejemplo, Rom. 3:2 dice que a los judíos les fueron confiados los oráculos de Dios, Ta-logia tu-tha-u, las palabras de Dios, o la NASB dice las palabras reales de Dios, la NIV, las mismísimas palabras de Dios. Doug Moo, en su comentario, sostiene que este término se entiende mejor como una referencia al Antiguo Testamento en su conjunto, como pueden ver en pantalla. Bien, entonces el Antiguo Testamento son las palabras de Dios. Jesús en Mat. 19 citará Escritura del Antiguo Testamento. Ahora bien, no Dios hablando en el Antiguo Testamento, no una narración en la que Dios dice algo que queda registrado dentro de la estructura mayor, sino solo el texto mismo como Dios hablando. Eso es en realidad uno de los textos más relevantes en toda esta discusión. Y por eso entra en escena la infalibilidad, porque decimos que la Escritura es infalible porque es el discurso de Dios. Y Dios es omnisciente y perfecto, así que Dios es infalible. Por lo tanto, el discurso de Dios es infalible. Y sobre esa base decimos que la Escritura no puede errar, no puede equivocarse, o como dice Jesús en Juan 10:35 con un matiz de significado algo distinto, no puede ser quebrantada.",
                original:
                  "Don't think of this as though the idea is the Scripture already exists, and then God comes along and like breathes on top of the text so as to give it extra power or something like that. Rather, think of the scripture itself. The very words themselves are what is breathed out by God. So John Stott in his commentary on this passage says you could use the Greek word expiration, as in God breathing out. If you're out on a cold night and you breathe and you can see your breath, the breath of God. That's in the semantic ballpark here of this term. So you can call a sermon that you hear on a Sunday morning the Word of God in a more general sense, but we don't call it God breathed in this sense, and that is the ontological distinction we're trying to convey with the adjective inspired. Now, sometimes this is disputed in 2 Timothy 3.16. This word comes up because later it's used more broadly and so forth, and so this gets complicated. So let's just say that the point here is not dependent on that one passage. As we'll see, this is a point all traditions can agree upon today, and it's just something that is put in many different ways in different passages. For example, 2 Peter 1.21 speaks about men speaking from God as they were carried along by the Holy Spirit. The big idea here in this passage is that Scripture comes through a human medium. The prophet is the one speaking or writing. But the origin is not human, but is rather divine. God is speaking through that human medium. In his classic treatment of biblical inspiration and biblical authority, B.B. Warfield comments on the verb used here in this phrase, carried along by the Holy Spirit. and what he helps us understand is that this is more than just a general guidance. What is in view here is that the words of the human author are from God. More colloquially, we could say scripture is God's words. It is God's speech. This is how the scripture speaks of itself. For example, Romans 3.2 says that the Jews were entrusted with the oracles of God, Ta-logia tu-tha-u, the words of God, or NASB says the actual words of God, NIV, the very words of God. Doug Moo in his commentary argues that this term is best taken as a reference to the Old Testament as a whole, as you can see on screen. Okay, so the Old Testament is the words of God. Jesus in Matthew 19 will quote Old Testament scripture. Now, not God speaking in Old Testament Scripture, not a narrative in which God says something that is sort of recorded within the larger structure, but just the text itself as God speaking. That's actually one of the most relevant texts in this whole discussion. And so this is why infallibility will come into the picture, is because we say the Scripture is infallible because it's God's speech. And God is omniscient and perfect, so God is infallible. So God's speech is therefore infallible. And it's on that basis that we say the scripture cannot err, it cannot get it wrong, or as Jesus puts it in John 10.35 with a slightly different nuance of meaning, it cannot be broken.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Durbin lee 2 Pe 1:16–21: el testimonio de testigo ocular de Pedro en el monte se pone junto a algo más seguro, la palabra profética, que viene del Espíritu Santo, pues hombres hablaron de parte de Dios llevados por él; concluye que la Escritura es inspirada por Dios e infalible: «Dios habló»",
            quotes: [
              {
                speaker: "Jeff Durbin",
                work: 'Does The Bible Teach "Scripture Alone" (Sola Scriptura)?',
                outlet: "Apologia Studios",
                date: "22 de enero de 2020",
                locator: "Minutos 31:07 a 34:23",
                url: "https://www.youtube.com/watch?v=KPTdOoeofpc&t=1867s",
                text: "Entonces, número uno: hablamos de la naturaleza de la Escritura como exhalada por Dios. Y cuando vayan a sus Biblias a 2 Pedro capítulo 1, 2 Pedro capítulo 1, verán el versículo 16, muy importante, del apóstol aquí: capítulo 1 versículo 16: 2 Pedro 1:16: porque no seguimos fábulas ingeniosamente inventadas cuando les dimos a conocer el poder y la venida de nuestro Señor Jesucristo, sino que fuimos testigos oculares de su majestad, pues cuando él recibió de Dios Padre honra y gloria, y la voz le fue dirigida desde la gloria majestuosa: y la voz le fue nacida por la gloria majestuosa. Este es mi Hijo amado, en quien me complazco. Nosotros mismos oímos esta voz que venía del cielo, porque estábamos con él en el monte santo, y tenemos la palabra profética más firme, a la cual hacen bien en prestar atención, como a una lámpara que alumbra en lugar oscuro. ¿Lo captaron? ¿De qué está hablando? Está hablando del monte de la Transfiguración. ¿Pueden imaginarse estar ahí para eso? El monte de la Transfiguración, aparecen Moisés y Elías. Ahora Pedro está diciendo aquí: su testimonio es este: miren, yo estuve ahí, fui testigo de esto, tuve la oportunidad de estar y verlo, aquí está mi testimonio, pero ¿qué dice Pedro realmente? Dice en el versículo 18: nosotros mismos oímos esta voz que venía del cielo, porque estábamos con él en el monte santo; y tenemos aquí, miren, la palabra profética más firmemente confirmada, a la cual harán bien en prestar atención, como a una lámpara que alumbra en lugar oscuro, hasta que amanezca el día y el lucero de la mañana salga en sus corazones. Sepan ante todo esto: que ninguna profecía de la Escritura proviene de la propia interpretación de alguien, porque ninguna profecía fue jamás producida por la voluntad del hombre. Pero hombres hablaron de parte de Dios cuando eran llevados por el Espíritu Santo. Entonces el apóstol está comparando su testimonio en el monte de la Transfiguración con lo que realmente vio. Pero dice que hay algo más seguro. ¿Qué es? La palabra de Dios, que viene del Espíritu Santo de Dios. Hombres santos de Dios hablaron, dicen algunas traducciones, siendo llevados por el Espíritu Santo. Así que sabemos por Pablo que la Escritura es exhalada por Dios. Sabemos por el apóstol Pedro que el origen de la Escritura es el Espíritu Santo de Dios. Las personas son llevadas por el Espíritu Santo para escribir o decir lo que escribieron o dijeron. Sabemos que Holy Sola Scriptura sí dice que la Escritura es la regla infalible. Es el punto de referencia infalible para todas las cuestiones referidas a la verdad. Aquí está. ¿Están listos? Esta es la esencia del asunto. Dios habló. Dios habló. Por eso lo creo.",
                original:
                  "So number one, we talk about the nature of Scripture as God breathed. And as you go to your Bibles to 2 Peter chapter 1, 2 Peter chapter 1, you'll see verse 16 very important from the apostle here chapter 1 verse 16 2nd peter 1 16 for we did not follow cleverly devised myths when we made known to you the power and coming of our lord jesus christ but we were eyewitnesses of his majesty for when we received honor and glory from god the father and the voice was for when he received honor and glory from god the father and the voice was born to him by the majestic glory. This is my beloved son with whom I am well pleased. We ourselves heard this very voice born from heaven for we were with him on the holy mountain and we have the prophetic word more fully confirmed to which you will do well to pay attention as to a lamp shining in a dark place. Did you catch that? What's he talking about? He's talking about the Mount of Transfiguration. Can you imagine being there for that? the mountain transfiguration Moses and Elijah show up now Peter's saying here his testimony is this look I was there I was a witness to this I got to be there and see it here's my testimony but what does Peter actually say he says in verse 18 we ourselves heard this very voice voice born from heaven for we were with him on the holy mountain and we have here it is the prophetic word more fully confirmed to which you will do well to pay attention as to a lamp shining in a dark place until the day dawns and the morning star rises in your hearts. Knowing this first of all, that no prophecy of scripture comes from someone's own interpretation for no prophecy was ever produced by the will of man. But men spoke from God as they were carried along by the Holy Spirit. So here the apostle is comparing his witness on the Mount of Transfiguration and what he actually saw. But he says there's something more sure. What is that? The word of God, which comes from the Holy Spirit of God. Holy men of God spoke, some translations say, as they were carried along by the Holy Spirit. So we know from Paul that scripture is God breathed. We know from the apostle Peter that scripture, its origin is from the Holy Spirit of God. People are carried along by the Holy Spirit to write or say what they wrote or said. We know that Holy Sola Scriptura does say that scripture is the infallible rule. It's the infallible reference point for all questions regarding truth. Here it is. Are you ready? This is the nuts and bolts of it. God spoke. God spoke. That's why I believe it.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["2Pet.1.19"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "La Escritura sola, no Escritura más Tradición más Magisterio, es la autoridad última de la iglesia; la iglesia no carece de toda otra autoridad, y la tradición (con t minúscula) se conserva como sabiduría acumulada; la autoridad de la Palabra va con el Espíritu Santo, que la inspiró y capacita a la iglesia para entenderla",
            quotes: [
              {
                speaker: "Gregg R. Allison",
                work: "Two Views on Church Authority: Protestant vs. Roman Catholic",
                outlet: "9Marks",
                date: "26 de septiembre de 2017",
                locator:
                  "4 párrafos: del párrafo que empieza «The Protestant authority structure consists of…» al que termina «…were forged in the early church.»",
                url: "https://www.9marks.org/article/two-views-on-church-authority-protestant-vs-roman-catholic/",
                text: "La estructura de autoridad protestante consta de un solo elemento: la Escritura como Palabra escrita de Dios, inspirada divinamente, autoritativa, verdadera, suficiente, necesaria, clara y transformadora para personas pecadoras. En contraste con los católicos romanos, los protestantes sostienen la sola Scriptura: la Escritura es la única autoridad de la iglesia, determinante en última instancia para la doctrina, la práctica, la fe, la adoración y el ministerio. En tiempos de la Reforma, este principio se unió a un rechazo explícito de la estructura de autoridad católico-romana. La Escritura sola, no la Escritura más la Tradición más el Magisterio, es la autoridad de la iglesia.\n\nTres precisiones son necesarias en este punto: Primero, la autoridad bíblica debe relacionarse siempre con Dios mismo, quien como Señor soberano se revela a sí mismo y sus caminos por medio de la Escritura inspirada, y por tanto autoritativa. Dios sostiene la relación más estrecha posible con su Palabra. En consecuencia, obedecer la Palabra de Dios es obedecer a Dios mismo. Desobedecer la Palabra de Dios es desobedecer a Dios mismo. Confiar en la Palabra de Dios es confiar en Dios mismo. Desconfiar de la Palabra de Dios es desconfiar de Dios mismo. En palabras de Timothy Ward: “Dios se ha identificado tanto con sus palabras que lo que alguien le hace a las palabras de Dios . . . lo hace directamente a Dios mismo”. Esta afirmación no iguala a Dios con su Palabra. Pero sí deja claro que el Dios a quien pertenece toda autoridad para mandar lo que los creyentes deben hacer y creer, y para prohibir lo que no deben hacer ni creer, está detrás de su Palabra autoritativa.\n\nAsí, la autoridad de la Palabra de Dios va de la mano con la autoridad del Espíritu Santo, quien inspiró esa Palabra (2 Pet. 1:19–21; 2 Tim. 3:15–17) y capacita a la iglesia para entenderla (1 Cor. 2:10–16).\n\nSegundo, la sola Scriptura es el principio de autoridad última, y no significa que la iglesia carezca de cualquier otra autoridad. Aunque las iglesias protestantes rechazan con razón la Tradición (con T mayúscula) de la Iglesia católica, no rechazan la tradición (con t minúscula), es decir, la sabiduría acumulada de la iglesia histórica. Ejemplos de tradición son las doctrinas de la Trinidad (un Dios, tres personas) y de Cristo (una persona, dos naturalezas), que se formularon en la iglesia primitiva.",
                original:
                  "The Protestant authority structure consists of one element: Scripture as the written Word of God, divinely inspired, authoritative, true, sufficient, necessary, clear, and transformative for sinful people. In contrast to Roman Catholics, Protestants hold to  sola Scriptura: Scripture is the church’s sole authority, ultimately determinative for doctrine, practice, faith, worship, and ministry. At the time of the Reformation, this principle was coupled with an explicit rejection of the Roman Catholic authority structure. Scripture alone, not Scripture plus Tradition plus the Magisterium, is the church’s authority.\n\nThree qualifications are needed at this point: First, biblical authority must always be related to God himself, who as the sovereign Lord reveals himself and his ways through inspired, and thus authoritative, Scripture. God sustains the closest possible relationship to his Word. Accordingly, to obey God’s Word is to obey God himself. To disobey God’s Word is to disobey God himself. To trust God’s Word is to trust God himself. To mistrust God’s Word is to mistrust God himself. In the words of Timothy Ward: “God has so identified himself with his words that whatever someone does to God’s words . . . they do directly to God himself.” This affirmation does not equate God with his Word. But it does make clear that the God to whom all authority belongs to command what believers are to do and believe, and prohibit what they are not to do and believe, stands behind his authoritative Word.\n\nThus, the authority of the Word of God goes hand in hand with the authority of the Holy Spirit, who inspired that Word (2 Pet. 1:19–21; 2 Tim. 3:15–17) and enables the church to understand it (1 Cor. 2:10–16).\n\nSecond, sola Scriptura is the principle of ultimate authority and does not mean the church is without any other authority. Though Protestant churches rightly reject the Tradition (capital T) of the Catholic Church, they do not reject tradition (small t), or the accumulated wisdom of the historical church. Examples of tradition include the doctrines of the Trinity (one God, three persons) and of Christ (one person, two natures) that were forged in the early church.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Durbin lee 2 Pe 1:16–21: el testimonio de testigo ocular de Pedro en el monte se pone junto a algo más seguro, la palabra profética, que viene del Espíritu Santo, pues hombres hablaron de parte de Dios llevados por él; concluye que la Escritura es inspirada por Dios e infalible: «Dios habló»",
            quotes: [
              {
                speaker: "Jeff Durbin",
                work: 'Does The Bible Teach "Scripture Alone" (Sola Scriptura)?',
                outlet: "Apologia Studios",
                date: "22 de enero de 2020",
                locator: "Minutos 31:07 a 34:23",
                url: "https://www.youtube.com/watch?v=KPTdOoeofpc&t=1867s",
                text: "Entonces, número uno: hablamos de la naturaleza de la Escritura como exhalada por Dios. Y cuando vayan a sus Biblias a 2 Pedro capítulo 1, 2 Pedro capítulo 1, verán el versículo 16, muy importante, del apóstol aquí: capítulo 1 versículo 16: 2 Pedro 1:16: porque no seguimos fábulas ingeniosamente inventadas cuando les dimos a conocer el poder y la venida de nuestro Señor Jesucristo, sino que fuimos testigos oculares de su majestad, pues cuando él recibió de Dios Padre honra y gloria, y la voz le fue dirigida desde la gloria majestuosa: y la voz le fue nacida por la gloria majestuosa. Este es mi Hijo amado, en quien me complazco. Nosotros mismos oímos esta voz que venía del cielo, porque estábamos con él en el monte santo, y tenemos la palabra profética más firme, a la cual hacen bien en prestar atención, como a una lámpara que alumbra en lugar oscuro. ¿Lo captaron? ¿De qué está hablando? Está hablando del monte de la Transfiguración. ¿Pueden imaginarse estar ahí para eso? El monte de la Transfiguración, aparecen Moisés y Elías. Ahora Pedro está diciendo aquí: su testimonio es este: miren, yo estuve ahí, fui testigo de esto, tuve la oportunidad de estar y verlo, aquí está mi testimonio, pero ¿qué dice Pedro realmente? Dice en el versículo 18: nosotros mismos oímos esta voz que venía del cielo, porque estábamos con él en el monte santo; y tenemos aquí, miren, la palabra profética más firmemente confirmada, a la cual harán bien en prestar atención, como a una lámpara que alumbra en lugar oscuro, hasta que amanezca el día y el lucero de la mañana salga en sus corazones. Sepan ante todo esto: que ninguna profecía de la Escritura proviene de la propia interpretación de alguien, porque ninguna profecía fue jamás producida por la voluntad del hombre. Pero hombres hablaron de parte de Dios cuando eran llevados por el Espíritu Santo. Entonces el apóstol está comparando su testimonio en el monte de la Transfiguración con lo que realmente vio. Pero dice que hay algo más seguro. ¿Qué es? La palabra de Dios, que viene del Espíritu Santo de Dios. Hombres santos de Dios hablaron, dicen algunas traducciones, siendo llevados por el Espíritu Santo. Así que sabemos por Pablo que la Escritura es exhalada por Dios. Sabemos por el apóstol Pedro que el origen de la Escritura es el Espíritu Santo de Dios. Las personas son llevadas por el Espíritu Santo para escribir o decir lo que escribieron o dijeron. Sabemos que Holy Sola Scriptura sí dice que la Escritura es la regla infalible. Es el punto de referencia infalible para todas las cuestiones referidas a la verdad. Aquí está. ¿Están listos? Esta es la esencia del asunto. Dios habló. Dios habló. Por eso lo creo.",
                original:
                  "So number one, we talk about the nature of Scripture as God breathed. And as you go to your Bibles to 2 Peter chapter 1, 2 Peter chapter 1, you'll see verse 16 very important from the apostle here chapter 1 verse 16 2nd peter 1 16 for we did not follow cleverly devised myths when we made known to you the power and coming of our lord jesus christ but we were eyewitnesses of his majesty for when we received honor and glory from god the father and the voice was for when he received honor and glory from god the father and the voice was born to him by the majestic glory. This is my beloved son with whom I am well pleased. We ourselves heard this very voice born from heaven for we were with him on the holy mountain and we have the prophetic word more fully confirmed to which you will do well to pay attention as to a lamp shining in a dark place. Did you catch that? What's he talking about? He's talking about the Mount of Transfiguration. Can you imagine being there for that? the mountain transfiguration Moses and Elijah show up now Peter's saying here his testimony is this look I was there I was a witness to this I got to be there and see it here's my testimony but what does Peter actually say he says in verse 18 we ourselves heard this very voice voice born from heaven for we were with him on the holy mountain and we have here it is the prophetic word more fully confirmed to which you will do well to pay attention as to a lamp shining in a dark place until the day dawns and the morning star rises in your hearts. Knowing this first of all, that no prophecy of scripture comes from someone's own interpretation for no prophecy was ever produced by the will of man. But men spoke from God as they were carried along by the Holy Spirit. So here the apostle is comparing his witness on the Mount of Transfiguration and what he actually saw. But he says there's something more sure. What is that? The word of God, which comes from the Holy Spirit of God. Holy men of God spoke, some translations say, as they were carried along by the Holy Spirit. So we know from Paul that scripture is God breathed. We know from the apostle Peter that scripture, its origin is from the Holy Spirit of God. People are carried along by the Holy Spirit to write or say what they wrote or said. We know that Holy Sola Scriptura does say that scripture is the infallible rule. It's the infallible reference point for all questions regarding truth. Here it is. Are you ready? This is the nuts and bolts of it. God spoke. God spoke. That's why I believe it.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["2Pet.1.20-2Pet.1.21"],
      text: "Segunda Confesión de Londres (1689), 1.9 nota (u) (1688 p. 8): este versículo figura como nota al margen junto a la cláusula, en inglés, «The Infallible Rule of interpretation of Scripture is the Scripture itself: And therefore when there is a question about the true and full sence of any Scripture, (which is not manifold but one) it must be searched by other places, that speak more clearly.». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 8–9. Segunda Confesión de Londres (1689), 1.8–1.10, McGlothlin pp. 230–231 (1677): este versículo figura como notas al margen 15–21. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
      apologists: {
        arguments: [
          {
            title:
              "«Inspirada por Dios» habla de la Escritura como discurso propio de Dios, infalible y ontológicamente única; ese punto por sí solo no establece la Sola Scriptura, y todas las tradiciones pueden estar de acuerdo en él",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The ULTIMATE Case for Sola Scriptura",
                outlet: "Gavin Ortlund, YouTube",
                date: "19 de agosto de 2025",
                locator: "Minutos 13:12 a 18:44",
                url: "https://www.youtube.com/watch?v=rpmcr7jOev4&t=792s",
                text: "usar el propio lenguaje bíblico para esto. Quizá el versículo más sobreutilizado, que seguramente conocen si siguen estas discusiones, es 2 Timoteo 3:16, donde Pablo dice que toda Escritura es exhalada por Dios. La palabra griega theanustas recibe mucha atención en estas conversaciones. A veces se traduce como inspirada por Dios, como en la NASB, o exhalada por Dios, como en la ESV aquí. Eh, no piensen en esto como si la idea fuera que la Escritura ya existe y luego Dios viene y sopla encima del texto para darle más poder o algo así. Más bien, piensen en la Escritura misma: las palabras mismas son las que son exhaladas por Dios. Así que John Stodd, en su comentario sobre este pasaje, dice que se podría usar la palabra griega espiración, como en Dios exhalando. Si estás afuera en una noche fría y respiras, y puedes ver tu aliento, el aliento de Dios: esa es la zona semántica aproximada de este término. Así que puedes llamar palabra de Dios, en un sentido más general, a un sermón que escuchas un domingo por la mañana, pero no lo llamamos exhalado por Dios en este sentido. Y esa es la distinción ontológica que intentamos transmitir con el adjetivo inspirada. Ahora bien, a veces esto se discute en 2 Timoteo 3:16; la palabra aparece y luego se usa de forma más amplia, y así sucesivamente, y entonces esto se complica. Así que digamos que el punto aquí no depende de ese único pasaje, como veremos. Este es un punto en el que todas las tradiciones pueden estar de acuerdo hoy, y es algo que se expresa de muchas maneras distintas en diferentes pasajes. Por ejemplo, 2 Pedro 1:21 habla de hombres que hablaron de parte de Dios mientras eran llevados por el Espíritu Santo. La gran idea de este pasaje es que la Escritura llega por un medio humano. El profeta es el que habla o escribe, pero el origen no es humano sino divino. Dios habla a través de ese medio humano. En su clásico tratamiento de la inspiración bíblica y la autoridad bíblica, BB Warfield comenta el verbo que se usa aquí en la frase llevados por el Espíritu Santo. Y lo que nos ayuda a entender es que esto es más que una guía general. Lo que está en juego aquí es que las palabras del autor humano son de Dios. De manera más coloquial, podríamos decir: la Escritura son las palabras de Dios. Es el habla de Dios. Así es como la Escritura habla de sí misma. Por ejemplo, Romanos 3:2 dice que a los judíos se les confiaron los oráculos de Dios. Talogu, las palabras de Dios; o la NASB dice: las palabras reales de Dios; la NIV: las palabras mismas de Dios. Doug Moo, en su comentario, sostiene que este término se entiende mejor como una referencia al Antiguo Testamento en su conjunto, como pueden ver en pantalla. Bien. Entonces el Antiguo Testamento son las palabras de Dios. Eh, Jesús en Mateo 19 citará Escritura del Antiguo Testamento. Ahora bien, no es Dios hablando dentro de la Escritura del Antiguo Testamento, no un relato en el que Dios dice algo que queda registrado dentro de la estructura más amplia, sino el texto mismo como habla de Dios. Eso es en realidad uno de los pasajes más relevantes en toda esta discusión. Y por eso entra en escena la infalibilidad: decimos que la Escritura es infalible porque es el habla de Dios, y Dios es omnisciente y perfecto. Así que Dios es infalible. Por lo tanto, el habla de Dios es infalible. Y sobre esa base decimos que la Escritura no puede heredar. No puede equivocarse. O, como dice Jesús en Juan 10:35, con un matiz de significado algo distinto: no puede ser quebrantada. Así que en este punto no tiene por qué ser, y a menudo no es, un desacuerdo con otras tradiciones cristianas que la Escritura es ontológicamente única en su naturaleza como palabra de Dios. Siempre quiero animar a la gente, especialmente cuando hacen videos de refutación: todavía no estoy haciendo el argumento. Este es un principio que va a estar dentro del contexto más amplio de un argumento que se despliega. Así que aguanten conmigo para ver la relevancia de esto. No se adelanten. No estoy estableciendo solos scriptor todavía. Bien, solo estamos estableciendo un punto: la Escritura es ontológicamente única como habla de Dios. Eh, la Iglesia Católica Romana enseña que la Escritura es el habla de Dios. Es puesta por escrito bajo el aliento del Espíritu Santo. En la teología católica romana, la Sagrada Escritura y la Sagrada Tradición juntas constituyen la palabra de Dios, pero de diferentes maneras. La Sagrada Tradición no es inspirada por el Espíritu Santo de la misma manera que la Sagrada Escritura. Y el papel del magisterio, incluso cuando funciona con infalibilidad, no es lo mismo que el habla divina. Eh, el charrorismo de la infalibilidad que se extiende a la iglesia en la teología católica romana se distingue de la revelación divina. Es una interpretación de la revelación divina que se sostiene como infalible, pero no es lo mismo que el habla de Dios. Así que cuando un papa habla ex cathedra, eso es infalible, pero no es exhalado por Dios, no es habla divina llevada por el Espíritu, los oráculos de Dios. No es lo mismo que la Escritura, y no está añadiendo cosas nuevas al depósito apostólico de la revelación divina. Es una interpretación de ese depósito. Eh, de manera similar, la teología católica romana concuerda en que la revelación divina pública ha cesado con la muerte de los últimos apóstoles.",
                original:
                  "use the biblical language itself for this. Maybe the most overutilized verse that I'm sure you're familiar with if you're into these discussions at all is 2 Timothy 3:16 where Paul says that all scripture is breathed out by God. The Greek word theanustas gets a lot of discussion in these conversations. Sometimes translated as inspired by God as in the NASB or breathed out by God in the ESV here. Um don't think of this as though the idea is the scripture already exists and then God comes along and like breathes on top of the text so as to give it extra power or something like that. Rather think of the scripture itself the very words themselves are what is breathed out by God. So John Stodd in his commentary on this passage says you could use uh the Greek word expiration as in you know God breathing out. If you're out on a cold night and you breathe and you can see your breath, the the breath of God, uh that's the in the semantic ballpark here of this term. So you you can call a sermon that you hear on a Sunday morning the word of God in a more general sense, but we don't call it God breathed in this sense. And that is the ontological distinction we're trying to convey with the adjective inspired. Now, sometimes this is disputed in 2 Timothy 3:16. this word comes up and because later it's used more broadly and so forth and so this gets complicated. So let's just say that the point here is not dependent on that one passage as we'll see. This is a point all traditions can agree upon today and it's just something that that is put in many different ways in different passages. For example, second Peter 1:21 uh speaks about men speaking from God as they were carried along by the Holy Spirit. The the big idea here in this passage is that uh scripture comes through a human medium. The prophet is is the one sp speaking or writing uh but the origin is not human but is rather divine. God is speaking through that human medium. In his classic treatment of biblical inspiration and biblical authority, BB Warfield comments on the verb used here in this phrase carried along by the Holy Spirit. And what he helps us understand is that this is more than just a general guidance. What is in view here is that the words of the human author are from God. More colloquially, we could say scripture is God's words. It is God's speech. This is how the scripture speaks of itself. For example, Romans 3:2 says that the Jews were entrusted with the oracles of God. Talogu, the words of God or NASB says the actual words of God. NIV, the very words of God. Doug Moo in his commentary argues that this term is best taken as a reference to the Old Testament as a whole, as you can see on screen. Okay. So this so the Old Testament is the words of God. Uh Jesus in Matthew 19 will quote Old Testament scripture. Now not God speaking in Old Testament scripture, not a narrative in which God says something that is sort of recorded within the larger structure, but just the the text itself as God speaking. That's actually one of the most relevant texts in this whole discussion. And so this is why infallibility will come into the picture is because we say the scripture is infallible because it's God's speech and God is omnisient and perfect. So God is infallible. So God's speech is therefore infallible. And it's on that basis that we say the scripture cannot heir. It cannot get it wrong. Or as Jesus puts it in John 10:35 uh with a slightly different nuance of meaning, it cannot be broken. So when it comes to this point, this need not be and often is not a point of disagreement with other Christian traditions that scripture is ontologically unique in its nature as the as the word of God. I always want to encourage people especially when they do rebuttal videos. I I'm not making the argument yet. This is one principle that is going to be in the larger context of an unfolding argument. So hang with me here for the relevance of this. Don't get ahead of me. I'm not this is not establishing solos scriptor yet. Okay? Okay, we're just establishing one point. The scripture is unique ontologically as the speech of God. Um the Roman Catholic Church uh teaches that scripture is the speech of God. Uh it is put down in writing under the breath of the Holy Spirit. In Roman Catholic theology, sacred scripture and sacred tradition together constitute the word of God, but in different ways. Sacred tradition is not inspired by the Holy Spirit in the same way that sacred scripture is. And the role of the magisterium, even when functioning with infallibility, isn't the same thing as divine speech. Uh the charrorism of infallibility that's extended to the church in Roman Catholic theology is distinguished from divine revelation. It's an interpretation of divine revelation that that is held to be infallible, but it's not the same thing as the speech of God. So when a pope speaks ex cathedra, that's infallible, but it's not God breathed, spirit carried divine speech, the oracles of God. It's not the same thing as scripture, and it's not adding new things on to the to the apostolic deposit of divine revelation. It's an interpretation of that. Um, similarly, Roman Catholic theology agrees that public divine revelation has ceased with the death of the last apostles.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "La Escritura sola, no Escritura más Tradición más Magisterio, es la autoridad última de la iglesia; la iglesia no carece de toda otra autoridad, y la tradición (con t minúscula) se conserva como sabiduría acumulada; la autoridad de la Palabra va con el Espíritu Santo, que la inspiró y capacita a la iglesia para entenderla",
            quotes: [
              {
                speaker: "Gregg R. Allison",
                work: "Two Views on Church Authority: Protestant vs. Roman Catholic",
                outlet: "9Marks",
                date: "26 de septiembre de 2017",
                locator:
                  "4 párrafos: del párrafo que empieza «The Protestant authority structure consists of…» al que termina «…were forged in the early church.»",
                url: "https://www.9marks.org/article/two-views-on-church-authority-protestant-vs-roman-catholic/",
                text: "La estructura de autoridad protestante consta de un solo elemento: la Escritura como Palabra escrita de Dios, inspirada divinamente, autoritativa, verdadera, suficiente, necesaria, clara y transformadora para personas pecadoras. En contraste con los católicos romanos, los protestantes sostienen la sola Scriptura: la Escritura es la única autoridad de la iglesia, determinante en última instancia para la doctrina, la práctica, la fe, la adoración y el ministerio. En tiempos de la Reforma, este principio se unió a un rechazo explícito de la estructura de autoridad católico-romana. La Escritura sola, no la Escritura más la Tradición más el Magisterio, es la autoridad de la iglesia.\n\nTres precisiones son necesarias en este punto: Primero, la autoridad bíblica debe relacionarse siempre con Dios mismo, quien como Señor soberano se revela a sí mismo y sus caminos por medio de la Escritura inspirada, y por tanto autoritativa. Dios sostiene la relación más estrecha posible con su Palabra. En consecuencia, obedecer la Palabra de Dios es obedecer a Dios mismo. Desobedecer la Palabra de Dios es desobedecer a Dios mismo. Confiar en la Palabra de Dios es confiar en Dios mismo. Desconfiar de la Palabra de Dios es desconfiar de Dios mismo. En palabras de Timothy Ward: “Dios se ha identificado tanto con sus palabras que lo que alguien le hace a las palabras de Dios . . . lo hace directamente a Dios mismo”. Esta afirmación no iguala a Dios con su Palabra. Pero sí deja claro que el Dios a quien pertenece toda autoridad para mandar lo que los creyentes deben hacer y creer, y para prohibir lo que no deben hacer ni creer, está detrás de su Palabra autoritativa.\n\nAsí, la autoridad de la Palabra de Dios va de la mano con la autoridad del Espíritu Santo, quien inspiró esa Palabra (2 Pet. 1:19–21; 2 Tim. 3:15–17) y capacita a la iglesia para entenderla (1 Cor. 2:10–16).\n\nSegundo, la sola Scriptura es el principio de autoridad última, y no significa que la iglesia carezca de cualquier otra autoridad. Aunque las iglesias protestantes rechazan con razón la Tradición (con T mayúscula) de la Iglesia católica, no rechazan la tradición (con t minúscula), es decir, la sabiduría acumulada de la iglesia histórica. Ejemplos de tradición son las doctrinas de la Trinidad (un Dios, tres personas) y de Cristo (una persona, dos naturalezas), que se formularon en la iglesia primitiva.",
                original:
                  "The Protestant authority structure consists of one element: Scripture as the written Word of God, divinely inspired, authoritative, true, sufficient, necessary, clear, and transformative for sinful people. In contrast to Roman Catholics, Protestants hold to  sola Scriptura: Scripture is the church’s sole authority, ultimately determinative for doctrine, practice, faith, worship, and ministry. At the time of the Reformation, this principle was coupled with an explicit rejection of the Roman Catholic authority structure. Scripture alone, not Scripture plus Tradition plus the Magisterium, is the church’s authority.\n\nThree qualifications are needed at this point: First, biblical authority must always be related to God himself, who as the sovereign Lord reveals himself and his ways through inspired, and thus authoritative, Scripture. God sustains the closest possible relationship to his Word. Accordingly, to obey God’s Word is to obey God himself. To disobey God’s Word is to disobey God himself. To trust God’s Word is to trust God himself. To mistrust God’s Word is to mistrust God himself. In the words of Timothy Ward: “God has so identified himself with his words that whatever someone does to God’s words . . . they do directly to God himself.” This affirmation does not equate God with his Word. But it does make clear that the God to whom all authority belongs to command what believers are to do and believe, and prohibit what they are not to do and believe, stands behind his authoritative Word.\n\nThus, the authority of the Word of God goes hand in hand with the authority of the Holy Spirit, who inspired that Word (2 Pet. 1:19–21; 2 Tim. 3:15–17) and enables the church to understand it (1 Cor. 2:10–16).\n\nSecond, sola Scriptura is the principle of ultimate authority and does not mean the church is without any other authority. Though Protestant churches rightly reject the Tradition (capital T) of the Catholic Church, they do not reject tradition (small t), or the accumulated wisdom of the historical church. Examples of tradition include the doctrines of the Trinity (one God, three persons) and of Christ (one person, two natures) that were forged in the early church.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "El autor dice que creer en la inerrancia no es requisito para la predicación expositiva, pero le da poco viento en las velas por lo demás; si toda la Escritura es inspirada por Dios y los hombres hablaron siendo llevados por el Espíritu Santo, el predicador debe predicar el mensaje de Dios tal como fue dado (un punto sobre la predicación, no directamente sobre la Escritura frente a la tradición)",
            quotes: [
              {
                speaker: "David King",
                work: "Why Must We Preach Expositionally?",
                outlet: "9Marks",
                date: "26 de febrero de 2010",
                locator:
                  "2 párrafos: del párrafo que empieza «A third issue to consider is…» al que termina «…essential link between inerrancy and proclamation.3»",
                url: "https://www.9marks.org/article/why-must-we-preach-expositionally/",
                text: "Una tercera cuestión a considerar es la de la INERRANCIA bíblica. No hace falta creer que Dios preservó su palabra del error durante el proceso de inspiración para creer en la predicación expositiva, pero si no lo crees, vas a encontrar poco viento en tus velas. La doctrina de la inerrancia es un viento de fuerza de vendaval que llena las velas de la predicación expositiva. Si “toda Escritura es exhalada por Dios” (2 Tim. 3:16), si “hombres hablaron de parte de Dios siendo llevados por el Espíritu Santo” (2 Pet. 1:21), si “toda palabra de Dios resulta verdadera” (Prov. 30:5), si los tiempos verbales en presente y los sustantivos en plural son críticos (Mar. 12:26; Gál. 3:16), ¿entonces no debería el predicador preocuparse por predicar el mensaje de Dios tal como fue dado? John MacArthur expone el punto con belleza:\n\nLa inerrancia exige un proceso exegético y una proclamación expositiva. Solo el proceso exegético preserva la Palabra de Dios por completo, guardando el tesoro de la revelación y declarando su significado exactamente como Él quiso que fuera proclamado. La predicación expositiva es el resultado del proceso exegético. Así, es el eslabón esencial entre la inerrancia y la proclamación.3",
                original:
                  "A third issue to consider is that of biblical INERRANCY. You do not have to believe that God preserved his word from error during the process of inspiration in order to believe in expository preaching, but you will find little wind in your sails otherwise. The doctrine of inerrancy is a gale force wind that fills the sails of expository preaching. If “all Scripture is breathed out by God” (2 Tim. 3:16), if “men spoke from God as they were carried along by the Holy Spirit” (2 Pet. 1:21), if “every word of God proves true” (Prov. 30:5), if present tense verbs and plural nouns are critical (Mar. 12:26; Gal. 3:16), then ought not the preacher be concerned to preach God’s message as given? John MacArthur states the point beautifully:\n\nInerrancy demands an exegetical process and an expository proclamation. Only the exegetical process preserves God’s Word entirely, guarding the treasure of revelation and declaring its meaning exactly as He intended it to be proclaimed. Expository preaching is the result of the exegetical process. Thus, it is the essential link between inerrancy and proclamation.3",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Ortlund sostiene que la Escritura es en sí misma palabra inspirada por Dios: lee «inspirada por Dios» (2 Tim 3:16), hombres llevados por el Espíritu Santo (2 Pe 1:21) y los «oráculos de Dios» (Rom 3:2) como que las mismas palabras de la Escritura son palabras de Dios, y sobre esa base llama a la Escritura infalible, como dice Jesús que «no puede ser quebrantada» (Jn 10:35); dice que este punto por sí solo aún no establece la sola scriptura",
            quotes: [
              {
                speaker: "Gavin Ortlund",
                work: "The ULTIMATE Case for Sola Scriptura",
                outlet: "Truth Unites",
                date: "19 de agosto de 2025",
                locator: "Minutos 13:38 a 17:00",
                url: "https://podcasters.spotify.com/pod/show/truth-unites/episodes/The-ULTIMATE-Case-for-Sola-Scriptura-e371tfb#t=818",
                text: "No pienses en esto como si la idea fuera que la Escritura ya existe, y que después Dios viene y, por así decirlo, sopla sobre el texto para darle un poder extra o algo así. Piensa más bien en la Escritura misma. Las palabras mismas son las que Dios exhaló. Por eso John Stott, en su comentario sobre este pasaje, dice que podrías usar la palabra griega que significa «expiración», como en Dios exhalando. Si estás afuera en una noche fría, respiras y puedes ver tu aliento, el aliento de Dios. Eso cae en el campo semántico de este término. Así que puedes llamar a un sermón que escuchas un domingo por la mañana la Palabra de Dios en un sentido más general, pero no lo llamamos exhalado por Dios en este sentido, y esa es la distinción ontológica que intentamos transmitir con el adjetivo inspirada. Ahora bien, a veces esto se discute en 2 Tim. 3:16. Esta palabra aparece ahí porque más adelante se usa de manera más amplia, y así sucesivamente, y esto se complica. Así que digamos solamente que el punto aquí no depende de ese pasaje. Como veremos, este es un punto en el que todas las tradiciones pueden estar de acuerdo hoy, y simplemente se expresa de muchas maneras distintas en diferentes pasajes. Por ejemplo, 2 Pet. 1:21 habla de hombres que hablaron de parte de Dios siendo llevados por el Espíritu Santo. La gran idea de este pasaje es que la Escritura llega por un medio humano. El profeta es quien habla o escribe. Pero el origen no es humano, sino divino. Dios habla por ese medio humano. En su clásico tratamiento de la inspiración bíblica y la autoridad bíblica, B.B. Warfield comenta el verbo que se usa aquí en la frase llevados por el Espíritu Santo, y lo que nos ayuda a entender es que esto es más que una guía general. Lo que está en vista aquí es que las palabras del autor humano son de Dios. De forma más coloquial, podríamos decir que la Escritura son las palabras de Dios. Es el discurso de Dios. Así habla la Escritura de sí misma. Por ejemplo, Rom. 3:2 dice que a los judíos les fueron confiados los oráculos de Dios, Ta-logia tu-tha-u, las palabras de Dios, o la NASB dice las palabras reales de Dios, la NIV, las mismísimas palabras de Dios. Doug Moo, en su comentario, sostiene que este término se entiende mejor como una referencia al Antiguo Testamento en su conjunto, como pueden ver en pantalla. Bien, entonces el Antiguo Testamento son las palabras de Dios. Jesús en Mat. 19 citará Escritura del Antiguo Testamento. Ahora bien, no Dios hablando en el Antiguo Testamento, no una narración en la que Dios dice algo que queda registrado dentro de la estructura mayor, sino solo el texto mismo como Dios hablando. Eso es en realidad uno de los textos más relevantes en toda esta discusión. Y por eso entra en escena la infalibilidad, porque decimos que la Escritura es infalible porque es el discurso de Dios. Y Dios es omnisciente y perfecto, así que Dios es infalible. Por lo tanto, el discurso de Dios es infalible. Y sobre esa base decimos que la Escritura no puede errar, no puede equivocarse, o como dice Jesús en Juan 10:35 con un matiz de significado algo distinto, no puede ser quebrantada.",
                original:
                  "Don't think of this as though the idea is the Scripture already exists, and then God comes along and like breathes on top of the text so as to give it extra power or something like that. Rather, think of the scripture itself. The very words themselves are what is breathed out by God. So John Stott in his commentary on this passage says you could use the Greek word expiration, as in God breathing out. If you're out on a cold night and you breathe and you can see your breath, the breath of God. That's in the semantic ballpark here of this term. So you can call a sermon that you hear on a Sunday morning the Word of God in a more general sense, but we don't call it God breathed in this sense, and that is the ontological distinction we're trying to convey with the adjective inspired. Now, sometimes this is disputed in 2 Timothy 3.16. This word comes up because later it's used more broadly and so forth, and so this gets complicated. So let's just say that the point here is not dependent on that one passage. As we'll see, this is a point all traditions can agree upon today, and it's just something that is put in many different ways in different passages. For example, 2 Peter 1.21 speaks about men speaking from God as they were carried along by the Holy Spirit. The big idea here in this passage is that Scripture comes through a human medium. The prophet is the one speaking or writing. But the origin is not human, but is rather divine. God is speaking through that human medium. In his classic treatment of biblical inspiration and biblical authority, B.B. Warfield comments on the verb used here in this phrase, carried along by the Holy Spirit. and what he helps us understand is that this is more than just a general guidance. What is in view here is that the words of the human author are from God. More colloquially, we could say scripture is God's words. It is God's speech. This is how the scripture speaks of itself. For example, Romans 3.2 says that the Jews were entrusted with the oracles of God, Ta-logia tu-tha-u, the words of God, or NASB says the actual words of God, NIV, the very words of God. Doug Moo in his commentary argues that this term is best taken as a reference to the Old Testament as a whole, as you can see on screen. Okay, so the Old Testament is the words of God. Jesus in Matthew 19 will quote Old Testament scripture. Now, not God speaking in Old Testament Scripture, not a narrative in which God says something that is sort of recorded within the larger structure, but just the text itself as God speaking. That's actually one of the most relevant texts in this whole discussion. And so this is why infallibility will come into the picture, is because we say the Scripture is infallible because it's God's speech. And God is omniscient and perfect, so God is infallible. So God's speech is therefore infallible. And it's on that basis that we say the scripture cannot err, it cannot get it wrong, or as Jesus puts it in John 10.35 with a slightly different nuance of meaning, it cannot be broken.",
                translation: "ai-assisted",
              },
            ],
          },
          {
            title:
              "Durbin lee 2 Pe 1:16–21: el testimonio de testigo ocular de Pedro en el monte se pone junto a algo más seguro, la palabra profética, que viene del Espíritu Santo, pues hombres hablaron de parte de Dios llevados por él; concluye que la Escritura es inspirada por Dios e infalible: «Dios habló»",
            quotes: [
              {
                speaker: "Jeff Durbin",
                work: 'Does The Bible Teach "Scripture Alone" (Sola Scriptura)?',
                outlet: "Apologia Studios",
                date: "22 de enero de 2020",
                locator: "Minutos 31:07 a 34:23",
                url: "https://www.youtube.com/watch?v=KPTdOoeofpc&t=1867s",
                text: "Entonces, número uno: hablamos de la naturaleza de la Escritura como exhalada por Dios. Y cuando vayan a sus Biblias a 2 Pedro capítulo 1, 2 Pedro capítulo 1, verán el versículo 16, muy importante, del apóstol aquí: capítulo 1 versículo 16: 2 Pedro 1:16: porque no seguimos fábulas ingeniosamente inventadas cuando les dimos a conocer el poder y la venida de nuestro Señor Jesucristo, sino que fuimos testigos oculares de su majestad, pues cuando él recibió de Dios Padre honra y gloria, y la voz le fue dirigida desde la gloria majestuosa: y la voz le fue nacida por la gloria majestuosa. Este es mi Hijo amado, en quien me complazco. Nosotros mismos oímos esta voz que venía del cielo, porque estábamos con él en el monte santo, y tenemos la palabra profética más firme, a la cual hacen bien en prestar atención, como a una lámpara que alumbra en lugar oscuro. ¿Lo captaron? ¿De qué está hablando? Está hablando del monte de la Transfiguración. ¿Pueden imaginarse estar ahí para eso? El monte de la Transfiguración, aparecen Moisés y Elías. Ahora Pedro está diciendo aquí: su testimonio es este: miren, yo estuve ahí, fui testigo de esto, tuve la oportunidad de estar y verlo, aquí está mi testimonio, pero ¿qué dice Pedro realmente? Dice en el versículo 18: nosotros mismos oímos esta voz que venía del cielo, porque estábamos con él en el monte santo; y tenemos aquí, miren, la palabra profética más firmemente confirmada, a la cual harán bien en prestar atención, como a una lámpara que alumbra en lugar oscuro, hasta que amanezca el día y el lucero de la mañana salga en sus corazones. Sepan ante todo esto: que ninguna profecía de la Escritura proviene de la propia interpretación de alguien, porque ninguna profecía fue jamás producida por la voluntad del hombre. Pero hombres hablaron de parte de Dios cuando eran llevados por el Espíritu Santo. Entonces el apóstol está comparando su testimonio en el monte de la Transfiguración con lo que realmente vio. Pero dice que hay algo más seguro. ¿Qué es? La palabra de Dios, que viene del Espíritu Santo de Dios. Hombres santos de Dios hablaron, dicen algunas traducciones, siendo llevados por el Espíritu Santo. Así que sabemos por Pablo que la Escritura es exhalada por Dios. Sabemos por el apóstol Pedro que el origen de la Escritura es el Espíritu Santo de Dios. Las personas son llevadas por el Espíritu Santo para escribir o decir lo que escribieron o dijeron. Sabemos que Holy Sola Scriptura sí dice que la Escritura es la regla infalible. Es el punto de referencia infalible para todas las cuestiones referidas a la verdad. Aquí está. ¿Están listos? Esta es la esencia del asunto. Dios habló. Dios habló. Por eso lo creo.",
                original:
                  "So number one, we talk about the nature of Scripture as God breathed. And as you go to your Bibles to 2 Peter chapter 1, 2 Peter chapter 1, you'll see verse 16 very important from the apostle here chapter 1 verse 16 2nd peter 1 16 for we did not follow cleverly devised myths when we made known to you the power and coming of our lord jesus christ but we were eyewitnesses of his majesty for when we received honor and glory from god the father and the voice was for when he received honor and glory from god the father and the voice was born to him by the majestic glory. This is my beloved son with whom I am well pleased. We ourselves heard this very voice born from heaven for we were with him on the holy mountain and we have the prophetic word more fully confirmed to which you will do well to pay attention as to a lamp shining in a dark place. Did you catch that? What's he talking about? He's talking about the Mount of Transfiguration. Can you imagine being there for that? the mountain transfiguration Moses and Elijah show up now Peter's saying here his testimony is this look I was there I was a witness to this I got to be there and see it here's my testimony but what does Peter actually say he says in verse 18 we ourselves heard this very voice voice born from heaven for we were with him on the holy mountain and we have here it is the prophetic word more fully confirmed to which you will do well to pay attention as to a lamp shining in a dark place until the day dawns and the morning star rises in your hearts. Knowing this first of all, that no prophecy of scripture comes from someone's own interpretation for no prophecy was ever produced by the will of man. But men spoke from God as they were carried along by the Holy Spirit. So here the apostle is comparing his witness on the Mount of Transfiguration and what he actually saw. But he says there's something more sure. What is that? The word of God, which comes from the Holy Spirit of God. Holy men of God spoke, some translations say, as they were carried along by the Holy Spirit. So we know from Paul that scripture is God breathed. We know from the apostle Peter that scripture, its origin is from the Holy Spirit of God. People are carried along by the Holy Spirit to write or say what they wrote or said. We know that Holy Sola Scriptura does say that scripture is the infallible rule. It's the infallible reference point for all questions regarding truth. Here it is. Are you ready? This is the nuts and bolts of it. God spoke. God spoke. That's why I believe it.",
                translation: "ai-assisted",
              },
            ],
          },
        ],
      },
    },
    {
      refs: ["2Pet.3.16"],
      text: "Segunda Confesión de Londres (1689), 1.7 nota (m) (1719 p. 30; McGlothlin p. 230): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] those things which are necessary to be known, believed, and observed for Salvation, are so clearly propounded, and opened in some place of Scripture or other, that not only the learned, but the unlearned, in a due use of ordinary means, may attain to a sufficient understanding of them.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911). Segunda Confesión de Londres (1689), 1.7 nota (m) (1688 p. 7): este versículo figura como nota al margen junto a la cláusula, en inglés, «All things in Scripture are not alike plain in themselves, nor alike clear unto all […]». Edición: A Confession of Faith (Londres: John Harris, 1688), págs. 6–7.",
    },
    {
      refs: ["1John.1.2"],
      text: "Segunda Confesión de Londres (1689), 1.5 nota (b) (1719 p. 29): este versículo figura como nota al margen (variante) junto a la cláusula, en inglés, «[…] the inward work of the Holy Spirit, bearing witness by and with the Word in our Hearts.». Edición: A Confession of Faith, cuarta edición (Londres, 1719).",
    },
    {
      refs: ["1John.2.2"],
      text: "Segunda Confesión de Londres (1689), 1.5 nota (b) (1688 p. 5; McGlothlin p. 229): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] our full perswasion, and assurance of the infallible truth, and divine authority thereof, is from the inward work of the Holy Spirit, bearing witness by and with the Word in our Hearts.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1John.2.20"],
      text: "Segunda Confesión de Londres (1689), 1.5 nota (b) (1688 p. 5; McGlothlin p. 229): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] our full perswasion, and assurance of the infallible truth, and divine authority thereof, is from the inward work of the Holy Spirit, bearing witness by and with the Word in our Hearts.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1John.2.27"],
      text: "Segunda Confesión de Londres (1689), 1.5 nota (b) (1688 p. 5; McGlothlin p. 229): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] our full perswasion, and assurance of the infallible truth, and divine authority thereof, is from the inward work of the Holy Spirit, bearing witness by and with the Word in our Hearts.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1John.5.9"],
      text: "Segunda Confesión de Londres (1689), 1.4 nota (g) (1719 p. 28; 1688 p. 4): este versículo figura como nota al margen junto a la cláusula, en inglés, «[…] dependeth not upon the testimony of any man, or Church; but wholly upon God (who is truth it self) the Author thereof; therefore it is to be received, because it is the Word of God.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["1John.5.19"],
      text: "Segunda Confesión de Londres (1689), 1.4 nota 7 (McGlothlin p. 229; 1677): este versículo figura como nota al margen (variante) junto a la cláusula, en inglés, «[…] it is to be received, because it is the Word of God.». Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["2John.1.7-2John.1.10"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
    {
      refs: ["Rev.22.18"],
      text: "Credo Ortodoxo (1678), XXXVII, p. 152 (margen impreso completo): este versículo figura como nota al margen. Edición: W. J. McGlothlin, Baptist Confessions of Faith (Filadelfia: American Baptist Publication Society, 1911).",
    },
  ],
  passages: {
    title: "Los pasajes de la posición bautista",
    lede: "Los versículos que la tradición bautista cita sobre la Escritura, completos y con su propia lectura.",
    officialLabel: "Lo que enseñan los documentos de la tradición bautista.",
    apologistsLabel: "Cómo lo defienden los apologistas bautistas.",
  },
  videos: {
    subtitle: "Creadores bautistas explican y defienden esta postura. Los videos se abren en YouTube.",
    items: [],
  },
  objections: {
    subtitle:
      "Objeciones a la postura bautista. Abre cada una para leer en profundidad la respuesta de los textos bautistas.",
    videosSubtitle: "Creadores bautistas que responden a esta objeción. Los videos se abren en YouTube.",
    order: [],
    items: [],
  },
  life: {
    intro: [
      "Fe y Mensaje Bautistas dice en su preámbulo: «Las confesiones son sólo guías para la interpretación» {c:BBFMpre_mbulo|Fe y Mensaje preámbulo}.",
      "Para ese preámbulo, la Escritura tiene autoridad única para la fe y la práctica; las confesiones guían la interpretación sin autoridad sobre la conciencia, sirven como instrumentos de rendición de cuentas doctrinal y admiten revisión.",
    ],
    items: [
      {
        id: "CV-1",
        label: "Las confesiones como guías",
        text: "El preámbulo de Fe y Mensaje Bautistas dice: «Las confesiones son sólo guías para la interpretación».",
        sources: [
          {
            citations: ["BBFMpre_mbulo"],
            label: "Fe y Mensaje preámbulo",
          },
        ],
      },
      {
        id: "CV-2",
        label: "Leer sin iglesia ni confesión",
        text: "No se afirma una regla de lectura solo privada: el preámbulo une la guía de interpretación, la autoridad de la Escritura y la rendición de cuentas doctrinal.",
        sources: [
          {
            citations: ["BBFMpre_mbulo"],
            label: "Fe y Mensaje preámbulo",
          },
        ],
      },
      {
        id: "CV-3",
        label: "Plan de lectura o versión bíblica universal",
        text: "Los artículos seleccionados no dicen nada sobre un plan de lectura fijo ni sobre una versión bíblica universal.",
        sources: [
          {
            citations: ["BNHI"],
            label: "New Hampshire I",
          },
          {
            citations: ["BBFMI"],
            label: "Fe y Mensaje I",
          },
        ],
      },
    ],
  },
  authority: {
    subtitle:
      "Las categorías de autoridad que los propios textos bautistas se aplican, con su definición en palabras de los textos.",
    grades: {
      scripture: {
        label: "Escritura: autoridad única",
        definition:
          "Autoridad única para la fe y la práctica en el preámbulo de la convención; norma suprema de examen en la Confesión de New Hampshire I y en Fe y Mensaje Bautistas I.",
        source: {
          citations: ["BBFMI"],
          label: "Fe y Mensaje I",
        },
      },
      confession: {
        label: "Confesiones de la convención",
        definition:
          "La Confesión de New Hampshire de 1853 es una confesión histórica, sin jurisdicción bautista universal. Fe y Mensaje Bautistas 2000, enmendada en 2023, es la declaración de la convención nombrada: guía y rendición de cuentas doctrinal bajo la Escritura, revisable, no infalible ni una norma que obligue la conciencia como la Escritura.",
        source: {
          citations: ["BNHI"],
          label: "New Hampshire I",
        },
      },
    },
    other: {},
  },
} satisfies TraditionPage<CitationId>;
