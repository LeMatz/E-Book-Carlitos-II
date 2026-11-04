import { EbookPageData, ChapterMeta } from '../types/ebook';
import { IMAGE_MANIFEST } from './imageManifest';
import { INDICE_TITULOS, INDICE_SUBTITULOS } from './tableOfContents';

export { INDICE_TITULOS, INDICE_SUBTITULOS, getIndiceTitle } from './tableOfContents';

export class ChaptersMetaData {
  static chapters: ChapterMeta[] = [
    {
      chapterId: 0,
      title: 'Introducción & El Segundo Umbral',
      subtitle: 'El mate en el estudio de Küsnacht, la realidad psíquica y el Unus Mundus',
      startPage: 1,
      endPage: 4,
      iconName: 'book-open',
    },
    {
      chapterId: 1,
      title: 'Capítulo 1 — Arquetipos II: Dinámicas Profundas',
      subtitle: 'El Continuo Yo-Arquetipo, la Inflación, los Arquetipos Psicoides y el Eje Yo-Self',
      startPage: 5,
      endPage: 9,
      iconName: 'layers',
    },
    {
      chapterId: 2,
      title: 'Capítulo 2 — Los Sueños y el Lenguaje del Alma',
      subtitle: 'Función compensatoria, estructura en cuatro actos y la Imaginación Activa',
      startPage: 10,
      endPage: 13,
      iconName: 'compass',
    },
    {
      chapterId: 3,
      title: 'Capítulo 3 — Sincronicidad: El Principio Acausal',
      subtitle: 'El escarabajo dorado de Küsnacht, el tiempo cualitativo y las señales del camino',
      startPage: 14,
      endPage: 17,
      iconName: 'award',
    },
    {
      chapterId: 4,
      title: 'Capítulo 4 — El Oráculo del I Ching y la Mente Simbólica',
      subtitle: 'El Libro de las Mutaciones, la consulta reflexiva y la decisión ética con la app',
      startPage: 18,
      endPage: 25,
      iconName: 'grid',
    },
    {
      chapterId: 5,
      title: 'Capítulo 5 — Cuaderno de Trabajo & Bitácora Alquímica',
      subtitle: 'Protocolos de sueños, sincronías y el Juego del Tao',
      startPage: 26,
      endPage: 29,
      iconName: 'edit-3',
    },
  ];
}

const RAW_EBOOK_PAGES: EbookPageData[] = [
  // ==========================================
  // INTRODUCCIÓN & SEGUNDO UMBRAL (PÁGINAS 1 A 4)
  // ==========================================
  {
    pageNumber: 1,
    chapterId: 0,
    sectionTitle: 'El Segundo Umbral',
    pageTitle: 'El Mate con Carlitos y el Segundo Territorio',
    subtitle: 'Navegando las aguas profundas: Arquetipos II, Sueños, Sincronías y el I Ching',
    contentType: 'introduction',
    keyTerms: ['Segundo Umbral', 'Mente Objetiva', 'Sincronía', 'Oráculo Viviente'],
    illustrationImage: {
      src: IMAGE_MANIFEST.studyLibrary,
      alt: 'Estudio de Carlitos en Küsnacht con libros antiguos y mate',
      caption: 'El estudio de Carlitos: donde los infolios, la leña encendida y el mate argentino abren el diálogo con la mente profunda.',
      credit: 'Ilustración',
      aspect: 'portrait',
    },
    paragraphs: [
      'Entrar en el segundo volumen de esta travesía es cruzar un umbral mucho más íntimo y desafiante. En el primer tomo ordenamos el mapa de superficie: las diferencias entre Freud y Jung, la arquitectura elemental de la máscara y la sombra, y los conceptos fundacionales que nos permitieron dejar de temerle al inconsciente. Pero Carlitos no escribió miles de páginas para que nos quedáramos cómodamente sentados en la orilla describiendo el mar desde lejos.',
      'Imaginate por un instante entrar a su estudio a orillas del lago de Zúrich en Küsnacht. Hay olor a madera de roble, tabaco aromático de pipa y papel de lino envejecido por décadas de estudio. En una pequeña mesa de té, al lado de los manuscritos del *Liber Novus*, humea un mate argentino con su bombilla de plata brillante. Carlitos me mira por encima de sus anteojos redondos, sonríe con esa ironía bondadosa que desarmaba a los intelectuales más arrogantes de Europa, y me dice: "Bueno, che... ya terminamos con los preliminares. Ahora decime con qué soñaste anoche y qué coincidencia inexplicable te dio un escalofrío esta semana".',
      'Este manual está dedicado a recorrer un panorama integrador de los Arquetipos avanzados en su danza de relaciones (la Sombra Dorada, el Ánima y el Ánimus en el amor, el conflicto entre el viejo sabio Senex y el eterno muchacho Puer Aeternus), la mecánica viva de los sueños como brújula compensatoria, la sincronicidad como puente entre la mente y la materia, y el milenario oráculo chino del *I Ching*, al que Jung dedicó décadas de estudio.',
      'No leas este libro como quien estudia para rendir un examen. Leelo como quien descifra una carta escrita con tinta invisible que sólo se revela ante el calor del fuego interior. Si estás dispuesto a sostener la mirada de tus propios símbolos, Carlitos ya tiene el mate servido para empezar a charlar.'
    ],
    carlitosCallout: {
      id: 'carlitos-intro-1',
      title: 'Carlitos dice junto al fuego:',
      text: 'Quien entra al segundo territorio de la mente debe abandonar dos muletas: el escepticismo burlón de los que temen al asombro, y la credulidad infantil de los que confunden la magia con la evasión de la realidad. El alma es una realidad empírica rigurosa; tratala con el respeto que le tendrías a un océano.'
    },
    secondaryCallout: {
      id: 'carlitos-intro-author-note',
      title: 'Nota del autor:',
      variant: 'context_note',
      text: 'Carlitos es un personaje literario y las charlas narradas son imaginadas con fines de divulgación y coaching. Los textos expresamente rotulados como «Cita» pertenecen a la obra histórica de C. G. Jung y cuentan con fuente verificable; el resto constituye una lectura e interpretación del autor.',
    }
  },
  {
    pageNumber: 2,
    chapterId: 0,
    sectionTitle: 'El Segundo Umbral',
    pageTitle: 'La Realidad Psíquica y el Unus Mundus',
    subtitle: 'El puente sagrado donde la materia y la mente se tocan',
    contentType: 'introduction',
    keyTerms: ['Realidad Psíquica', 'Unus Mundus', 'Materia y Psique', 'Microcosmos'],
    clippedPhoto: {
      imageUrl: IMAGE_MANIFEST.mateJournal,
      caption: 'El mate y el cuaderno de notas en Küsnacht',
      rotationDeg: 2.2,
      side: 'right',
      altText: 'Mate y cuaderno de notas de Carlitos',
    },
    paragraphs: [
      'Uno de los aportes más revolucionarios y menos comprendidos de Carl Gustav Jung es el concepto de *realidad psíquica* (*psychische Realität*). Para el hombre contemporáneo, educado en el materialismo científico, sólo "existe" aquello que puede pesarse en una balanza, medirse con una regla o fotografiarse con una lente óptica. Si algo ocurre en el interior del ser humano —un terror súbito, una intuición certera, un sueño premonitorio—, la ciencia reduccionista se apresura a etiquetarlo como "pura imaginación", "ilusión" o un mero desbalance neuroquímico.',
      'Carlitos invertía por completo esa soberbia metodológica. Una idea que mueve a una persona a arriesgar su vida, un símbolo que transforma una depresión paralizante en una obra de arte, o un complejo inconsciente que sabotea sistemáticamente una vocación, son hechos con un peso y una eficacia causal tan tangibles como una roca en el camino. Para la experiencia humana, la psique es la única realidad inmediata: todo lo que sabemos del mundo físico exterior entra filtrado a través de nuestra conciencia psíquica.',
      'Avanzando en su madurez, Jung rescató de la alquimia renacentista (Gerhard Dorn) el concepto de *Unus Mundus* ("Mundo Uno"). El Unus Mundus plantea que en el estrato más profundo de la existencia, por debajo del velo de las apariencias sensibles, la materia física y la energía psíquica no son dos sustancias separadas y antagónicas, sino dos aspectos complementarios de una misma realidad unitaria.',
      'Cuando un suceso exterior (como la aparición de un animal o el encuentro casual con una persona clave) coincide de forma asombrosa con un estado interior cargado de significado, no estamos ante una causalidad física ni ante una simple fantasía: Jung lo pensó como una manifestación del *Unus Mundus*, donde el orden físico y el anímico se muestran como dos aspectos complementarios de una misma realidad profunda.'
    ],
    carlitosCallout: {
      id: 'carlitos-intro-2',
      title: 'Nota de Archivo Alquímico:',
      variant: 'alchemical',
      text: 'Mundus est unus: El mundo es uno solo. La separación tajante entre cuerpo y mente, entre el átomo y el arquetipo, es una limitación de nuestros instrumentos intelectuales, no de la naturaleza del cosmos.'
    },
    secondaryCallout: {
      id: 'unus-mundus-glossary',
      title: 'Glosario:',
      variant: 'glossary',
      text: 'Unus Mundus: Concepto recuperado por Jung a partir de la alquimia de Gerhard Dorn para designar la unidad potencial subyacente entre el mundo físico y el reino psíquico.'
    }
  },
  {
    pageNumber: 3,
    chapterId: 0,
    sectionTitle: 'El Marco Biográfico',
    pageTitle: 'La Torre de Bollingen: El Taller del Alma',
    subtitle: 'Construyendo con piedra y silencio el santuario de la individuación',
    contentType: 'biography',
    keyTerms: ['Bollingen', 'Torre de Piedra', 'Soledad Creadora', 'Pintura Simbólica'],
    historicalNotes: [
      '1923: Fallece la madre de Jung; adquiere el terreno en Bollingen e inicia la construcción de la primera torre redonda.',
      '1927: Añade la estructura central y pinta el techo con motivos astrológicos y alquímicos.',
      '1935: Construye una habitación superior de retiro absoluto donde nadie más podía ingresar.',
      '1950: Cincela el célebre monolito de piedra con inscripciones en latín y griego dedicadas a Mercurius y al Huésped del Alma.'
    ],
    paragraphs: [
      'Para entender la psicología profunda de Carlitos es imposible quedarse en su consultorio médico de Küsnacht. Hay que viajar unos kilómetros al este, hacia las orillas solitarias del lago superior de Zúrich, donde a partir de 1923 Jung comenzó a edificar con sus propias manos la famosa *Torre de Bollingen*.',
      'Bollingen no era una casa de fin de semana ni una villa de descanso aristocrático. Era un útero de piedra bruta, carente de electricidad, agua corriente o teléfono. Jung cortaba su propia leña con hacha, cocinaba en una pequeña estufa de hierro, sacaba agua de un pozo con balde y alumbraba sus noches con lámparas de aceite. En Bollingen, Carlitos sentía que volvía a ser él mismo en el sentido más hondo: allí se reencontraba con la sencillez del campesino y con la paciencia silenciosa de quien trabaja con la piedra y el fuego.',
      'En sus muros, Carlitos pintó frescos con el Ouroboros, el Sol Niger y figuras del *Liber Novus*. En el patio talló con cincel y maza una enorme piedra cúbica con el rostro de Telesforo, el duendecillo sanador de Esculapio, y versos alquímicos que recordaban que "lo despreciado por el mundo se convertirá en la piedra angular del templo".',
      'Bollingen nos enseña que el trabajo con los arquetipos, los sueños y el oráculo requiere un espacio físico y mental desacelerado. No se puede escuchar la voz tenue del inconsciente en medio del zumbido frenético de las notificaciones digitales. Hacen falta piedras, fuego y silencio.'
    ],
    carlitosCallout: {
      id: 'carlitos-bio-bollingen',
      title: 'Carlitos dice desde Bollingen:',
      text: 'A veces me siento como un trozo de madera flotando en un río que no veo. Cuando amasás tu propio pan, encendés tu propio fuego y mirás las olas del lago sin un reloj en la muñeca, de pronto te das cuenta de que el alma nunca tuvo prisa por llegar a ninguna parte.'
    }
  },
  {
    pageNumber: 4,
    chapterId: 0,
    sectionTitle: 'El Marco Biográfico',
    pageTitle: 'La Ciencia de lo Imposible: Jung y Wolfgang Pauli',
    subtitle: 'El diálogo epistolar entre el psicólogo del alma y el pionero cuántico',
    contentType: 'biography',
    keyTerms: ['Wolfgang Pauli', 'Física Cuántica', 'Principio de Exclusión', 'Sincronicidad Cuántica'],
    historicalNotes: [
      '1932: Wolfgang Pauli acude en crisis anímica a consultar a Jung en Zúrich; Jung analiza más de 400 sueños de Pauli.',
      '1945: Pauli recibe el Premio Nobel de Física por el descubrimiento del Principio de Exclusión.',
      '1952: Publican juntos el libro conjunto: La interpretación de la naturaleza y la psique (Naturerklärung und Psyche).',
      '1958: Fallecimiento de Pauli; el archivo epistolar confirma una de las colaboraciones interdisciplinarias más brillantes del siglo XX.'
    ],
    paragraphs: [
      'Uno de los argumentos más repetidos por los detractores de Jung consiste en acusarlo de "esoterismo" o "misticismo acientífico". Nada derriba con mayor contundencia esa calumnia que examinar la profunda amistad intelectual de más de veinticinco años que unió a Carlitos con *Wolfgang Pauli*, uno de los padres indiscutidos de la mecánica cuántica y Premio Nobel de Física.',
      'Pauli llegó a la consulta de Jung en 1932, atravesando un severo colapso nervioso tras un divorcio traumático y una crisis de sentido científico. Jung intuyó de inmediato la extraordinaria potencia intelectual de su paciente y derivó su análisis cotidiano a su discípula Erna Rosenbaum, reservándose la supervisión general. A lo largo de los años, Jung recopiló y analizó minuciosamente más de 400 sueños y visiones de Pauli (que posteriormente constituyeron el material clínico central de su monumental obra *Psicología y alquimia*).',
      'El intercambio epistolar entre ambos fue un auténtico laboratorio donde colisionaron los dos extremos del conocimiento humano: Pauli aportaba el rigor matemático, la física atómica y la noción de complementariedad de Niels Bohr; Jung aportaba la fenomenología arquetípica, la alquimia y el inconsciente colectivo.',
      'De esta colaboración titánica nació la formulación de la *Sincronicidad*: la hipótesis de que el universo no sólo se rige por la causalidad lineal (A empuja a B en el espacio-tiempo), sino también por un principio acausal de conexión por sentido o significado. Pauli y Jung exploraron la convergencia entre la física cuántica y la psicología profunda.'
    ],
    carlitosCallout: {
      id: 'carlitos-bio-pauli',
      title: 'Carlitos recuerda sus charlas con Pauli:',
      variant: 'carlitos',
      text: 'Wolfgang me repetía a menudo que la física cuántica había llegado al mismo límite que nosotros: el observador y lo observado están entrelazados. La mente y la materia responden a un orden común que ninguna fórmula puramente mecánica puede agotar.'
    }
  },

  // ==========================================
  // CAPÍTULO 1 — ARQUETIPOS II: DINÁMICAS PROFUNDAS (PÁGINAS 5 A 9)
  // ==========================================
  {
    pageNumber: 5,
    chapterId: 1,
    sectionTitle: 'Capítulo 1 — Arquetipos II',
    pageTitle: 'Las Figuras Arquetípicas: Sombra, Vínculos y Polaridades',
    subtitle: 'Sombra colectiva y dorada, la imagen del alma y el eje Senex-Puer en síntesis',
    contentType: 'text',
    keyTerms: ['Sombra Dorada†', 'Sombra Colectiva', 'Ánima y Ánimus', 'Senex-Puer', 'Mapa Interior'],
    clippedPhoto: {
      imageUrl: IMAGE_MANIFEST.carlitosLake,
      caption: 'Carlitos junto al lago de Zúrich: observando las mareas del mundo interior',
      rotationDeg: -2.2,
      side: 'left',
      altText: 'Carlitos contemplando el lago de Zúrich',
    },
    paragraphs: [
      'Antes de sumergirnos en la cuestión capital de cómo nos relacionamos con los arquetipos sin perder la cordura ni el libre albedrío, conviene ordenar en una mirada panorámica las tres grandes familias de figuras que pueblan este segundo territorio de la mente humana: la Sombra en sus dos reflejos, la imagen interior del vínculo amoroso y la eterna tensión entre la madurez y la juventud.',
      '**1. La Sombra Colectiva y la Sombra Dorada:** En el primer tomo vimos que la Sombra personal guarda lo que nuestra máscara social oculta. Pero a escala grupal surge la *Sombra Colectiva*: la agresividad atávica que una masa o sociedad proyecta en el vecino o el disidente para sentirse moralmente pura. En el otro extremo brilla la *Sombra Dorada*: el tesoro de talentos, audacia y grandeza que no nos atrevemos a encarnar y que regalamos mediante una admiración desmedida a líderes o figuras lejanas. Reclamar ese oro propio es el primer paso hacia la soberanía.',
      '**2. Ánima y Ánimus en el Vínculo:** Son las figuras profundas de relación que llevamos por dentro: el Ánima (la imagen del alma nutricia, inspiradora y sabia en el varón) y el Ánimus (la fuerza de acción, discernimiento y sentido en la mujer). El gran conflicto en los vínculos afectivos nace de proyectar ciegamente este arquetipo sobre la pareja real, exigiéndole que sea una musa infalible o un héroe salvador. Amar maduramente exige retirar esa máscara mítica y abrazar al ser humano concreto con sus luces y sus límites.',
      '**3. Senex y Puer Aeternus:** La polaridad entre el Anciano estructurado (Saturno, la disciplina, la paciencia y el límite de la realidad) y el Muchacho Eterno (Mercurio, el entusiasmo, la imaginación y las ganas de volar). El Puer sin Senex se estrella por falta de arraigo; el Senex sin Puer se seca en amargura y burocracia. Madurar es llevar al sabio anciano tomado de la mano del niño creador.',
      'Todas estas figuras no son etiquetas en un museo: son manantiales de energía viva. La pregunta decisiva no es sólo quiénes son, sino *a qué distancia* nos paramos frente a ellas para no ser devorados.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap1-sintesis',
      title: 'Carlitos dice con una sonrisa serena:',
      text: 'Los arquetipos son como corrientes profundas en un gran río: no podés pretender secar el río ni taparlo con las manos. Si no sabés nadar a la distancia adecuada, la corriente te arrastra; pero si aprendés a orientar la proa, la fuerza misma del agua te lleva a descubrir continentes enteros.'
    }
  },
  {
    pageNumber: 6,
    chapterId: 1,
    sectionTitle: 'Capítulo 1 — Arquetipos II',
    pageTitle: 'El Continuo de Pérdida de Distancia Yo-Arquetipo',
    subtitle: 'De la proyección a la posesión: la escala de absorción entre la conciencia y la fuerza numinosa',
    contentType: 'text',
    keyTerms: [
      'Continuo Yo-Arquetipo†',
      'Proyección',
      'Identificación / Inflación',
      'Posesión',
      'Disociación',
      'Literalización',
    ],
    clippedPhoto: {
      imageUrl: IMAGE_MANIFEST.mateJournal,
      caption: 'Cuaderno de notas y mate en el estudio: calibrando la distancia con lucidez',
      rotationDeg: 2.4,
      side: 'right',
      altText: 'Apuntes de Carlitos sobre la distancia arquetípica',
    },
    paragraphs: [
      'Uno de los mapas más reveladores y prácticos que Carlitos nos legó para entender qué nos ocurre cuando una fuerza profunda nos conmueve es el *continuo de pérdida de distancia Yo-arquetipo*. Frente a la energía viva de un arquetipo, nuestro Yo no se queda quieto: se mueve a lo largo de una escala según cuánta distancia y lucidez logre sostener. Este continuo se organiza en torno a tres puntos de referencia fundamentales:',
      '**1. Proyección (Distancia máxima):** En este primer punto de referencia, el contenido se deposita afuera; el Yo queda intacto. Vemos la cualidad arquetípica encarnada en otra persona o circunstancia (el líder perfecto, el rival monstruoso, el salvador providencial o el amor idealizado). Aunque nuestra percepción del otro queda teñida por esa imagen, nuestro Yo conserva su capacidad de pensar y su identidad habitual separada.',
      '**2. Identificación / Inflación (Pérdida intermedia de distancia):** Aquí el contenido se funde con el Yo, colapsando en un solo bloque lo que antes eran dos fenómenos separados. Al identificarse con el arquetipo, el Yo se atribuye a su pequeña persona facultades, dones o misiones grandiosas (creerse el Salvador indispensable, el Sabio supremo o el Mártir incomprendido). Se borra la frontera entre nuestra imperfección humana y la magnitud del arquetipo, gestando una embriaguez de grandeza que anticipa el colapso.',
      '**3. Posesión (Colapso total de distancia):** Es el punto extremo del camino. En la posesión, el Yo pierde por completo la función decisoria; el arquetipo opera sin mediación alguna. La voluntad consciente queda a un costado o anulada. Ya no decidimos nosotros: somos hablados y actuados por la fuerza arquetípica que nos tomó por asalto, desde los fanatismos colectivos hasta los arranques viscerales donde "no éramos nosotros mismos".',
      'Para cuidar nuestro equilibrio y crecer en sabiduría, necesitamos reconocer en qué punto de este continuo nos encontramos ante cada crisis, evitando tanto la disociación [1] como la literalización [2] del símbolo vivo. En los momentos de mayor soberbia o inflación heroica, figuras como el *Trickster* (el Embaucador) irrumpen oportunamente con un tropiezo, un fallo cómico o una ironía de la vida para desarmar la fusión antes de que sea tarde.'
    ],
    footnotes: [
      {
        number: 1,
        term: 'Disociación',
        note: 'Respuesta defensiva en la que, al verse desbordada la mente frente a una emoción o fuerza arquetípica desmedida, la psique se fractura en partes autónomas que operan a escondidas del Yo consciente.',
      },
      {
        number: 2,
        term: 'Literalización',
        note: 'Error de perspectiva consistente en degradar la metáfora y el símbolo vivo a un hecho puramente literal, material o físico. Al tomar la imagen al pie de la letra, cancelamos su sabiduría profunda y caemos en el dogmatismo ciego o en el malestar somático.',
      },
    ],
    carlitosCallout: {
      id: 'carlitos-cap1-distancia',
      title: 'Carlitos dice con gravedad:',
      text: 'Tratar con un arquetipo es como pararse frente a una fogata en la noche del bosque. Si te quedás demasiado lejos proyectando tu calor en las sombras, te congelás de frío; pero si das un paso de más y te tirás de cabeza al fuego creyendo que sos la llama, te convertís en ceniza. La sabiduría consiste en sentarte a una distancia justa: la suficiente para abrigar tu alma sin quemar tu humanidad.'
    },
  },
  {
    pageNumber: 7,
    chapterId: 1,
    sectionTitle: 'Capítulo 1 — Arquetipos II',
    pageTitle: 'Anatomía de la Inflación y la Pérdida del Yo',
    subtitle: 'Cuando el arquetipo anula la función decisoria: soberbia heroica, fanatismos y el rescate del Trickster',
    contentType: 'text',
    keyTerms: [
      'Inflación Heroica',
      'Pérdida de Función Decisoria',
      'Posesión Colectiva',
      'El Trickster',
      'Distancia Justa',
    ],
    clippedPhoto: {
      imageUrl: IMAGE_MANIFEST.bollingenStone,
      caption: 'La roca de Bollingen: anclando la sobriedad terrenal frente a la inflación',
      rotationDeg: -2.1,
      side: 'left',
      altText: 'Monolito de piedra en Bollingen tallado por Jung',
    },
    paragraphs: [
      'Nadie se levanta por la mañana diciendo: "Hoy voy a perder mi distancia yo-arquetipo". La absorción ocurre de manera sigilosa. El proceso suele iniciarse bajo disfraces nobles: la entrega generosa en el trabajo, el deber de proteger a la familia o la defensa apasionada de una causa justa. Poco a poco, el Yo empieza a atribuirse en exclusiva la energía del arquetipo del Héroe o del Salvador: se convence de que sin su intervención todo se derrumbará, deja de pedir ayuda, no tolera el reposo y mira a los demás con condescendencia impaciente.',
      'Cuando esta fusión avanza, se cruza el umbral de la *Posesión*: el Yo pierde la función decisoria. Ya no es una persona que opina libremente, sino un vehículo secuestrado por una narrativa arquetípica que actúa sin mediación. Esto se observa claramente en las discusiones viscerales donde un resentimiento atávico habla por la boca de quien jura tener el control, y se manifiesta de manera devastadora en los fenómenos de masa, donde multitudes educadas pierden todo criterio ético individual y repiten consignas feroces hipnotizadas por el contagio anímico.',
      'Frente a semejante peligro de fusión, la naturaleza psíquica cuenta con un mecanismo corrector implacable: el *Trickster* (el Embaucador o Bufón sagrado). Cuando el Yo se infla hasta rozar la omnipotencia, el Trickster hace su aparición a través de un tropiezo ridículo en un evento solemne, un olvido flagrante frente al público o una ironía del destino que pincha la burbuja de la grandilocuencia. Carlitos consideraba que el sentido del humor y la capacidad de reírse sinceramente de uno mismo son la vacuna más eficaz contra la posesión.',
      'El antídoto cotidiano para preservar la distancia justa consiste en cultivar la mirada de testigo. Ante cualquier emoción desbordante o vocación mesiánica, el ejercicio mental es nombrar la fuerza: "Esta energía de batalla que siento no me pertenece; es el arquetipo del Guerrero que pasa a través de mí, pero yo sigo siendo un ser humano con pies de barro". Mantener esa pequeña rendija de distancia salva vidas y restituye la libertad ética.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap1-inflacion',
      title: 'Carlitos dice con picardía saludable:',
      text: 'Cuando sientas la tentación irresistible de salvar al mundo entero antes de las cinco de la tarde, tomate una pausa, mirate los zapatos gastados y salí a regar las plantas del patio. El universo funcionó bastante bien millones de años antes de que nacieras, y se las arreglará sin que tengas que sostener el cielo con las manos.'
    }
  },
  {
    pageNumber: 8,
    chapterId: 1,
    sectionTitle: 'Capítulo 1 — Arquetipos II',
    pageTitle: 'Los Arquetipos Psicoides: El Puente entre Psique y Materia',
    subtitle: 'Cuando la fuerza arquetípica traspasa las fronteras del cerebro y resuena en la naturaleza física',
    contentType: 'text',
    keyTerms: [
      'Arquetipo Psicoide',
      'Espectro instinto–imagen',
      'Instinto Biológico',
      'Unus Mundus',
      'Raíz de la Sincronía',
    ],
    clippedPhoto: {
      imageUrl: IMAGE_MANIFEST.goldenScarab,
      caption: 'Reliquia del escarabajo dorado: cuando el arquetipo toma cuerpo físico',
      rotationDeg: 2.6,
      side: 'right',
      altText: 'Escarabajo dorado sobre manuscrito antiguo',
    },
    paragraphs: [
      'Uno de los errores más comunes consiste en imaginar que los arquetipos son meras "ideas en la cabeza", fantasías poéticas o esquemas abstractos guardados en los lóbulos cerebrales. En sus años de madurez —y gracias al fecundo diálogo que mantuvo con el físico cuántico Wolfgang Pauli—, Jung propuso que el arquetipo en su raíz más honda no es puramente mental: posee una naturaleza *psicoide* (*psychoid*).',
      '¿Qué significa exactamente que sea "psicoide"? El término alude a una realidad que es "semejante al alma", pero que trasciende los límites de lo psíquico consciente e inconsciente. El arquetipo se comporta como un espectro lumínico continuo con dos polos inseparables: en su extremo superior (el polo imaginativo y espiritual), el arquetipo se viste de metáforas, relatos míticos, sueños numinosos y anhelos de sentido. Pero en su extremo inferior (el polo somático y físico), el arquetipo se ancla de forma directa en los procesos biológicos, el instinto animal, la química celular y la materia inorgánica.',
      'Carlitos habría dicho que basta observar la naturaleza para encontrar analogías vivas de este orden: las aves migratorias que recorren continentes sin compás ni mapas de papel, las colonias de hormigas que construyen ciudades ventiladas sin un ingeniero a cargo, o el latido cardíaco que se organiza en el cuerpo en formación. Para él, estas dinámicas ilustran cómo ciertos patrones ordenadores parecen operar en el tejido biológico mucho antes de que intervenga la razón consciente.',
      'Esta naturaleza psicoide es el cimiento silencioso sobre el cual reposa el fenómeno de la *Sincronicidad*. Cuando un estado interior cargado de significado coincide de forma asombrosa con un hecho físico exterior (como aquel célebre escarabajo dorado que golpeó la ventana del consultorio de Küsnacht), no es que la mente haya movido la materia por telequinesis. Lo que ocurre es que psique y materia son dos caras de una misma moneda arquetípica activada simultáneamente en el tejido del *Unus Mundus*.',
      'Comprender la dimensión psicoide nos rescata de dos trampas: el materialismo reduccionista que niega el significado del cosmos, y la superstición mágica que cree controlar el mundo con el pensamiento. La naturaleza y el alma respiran al unísono.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap1-psicoide',
      title: 'Anotación de Archivo (Carlitos en Bollingen):',
      variant: 'alchemical',
      text: 'El arquetipo no es un pájaro encerrado en la jaula de tu cráneo. Es el aire que sostiene las alas del pájaro, la rama del árbol donde reposa y la roca donde ambos se posan al atardecer. Cuando aprendés a escuchar tu cuerpo con respeto, descubrís que la tierra entera piensa y sueña con vos.'
    }
  },
  {
    pageNumber: 9,
    chapterId: 1,
    sectionTitle: 'Capítulo 1 — Arquetipos II',
    pageTitle: 'El Self / Sí-Mismo y la Distancia Justa',
    subtitle: 'La cuadratura del círculo, el mandala de la totalidad y la reconciliación del Eje Yo-Self',
    contentType: 'text',
    keyTerms: ['Self / Sí-Mismo', 'Eje Yo-Self†', 'Distancia Justa', 'Mandala', 'Lapis Philosophorum'],
    paragraphs: [
      'Llegamos a la cumbre integradora de este primer capítulo: el arquetipo del *Self* (el Sí-Mismo). Habiendo comprendido los riesgos de la inflación y la posesión, el Self aparece precisamente como la fuente y el custodio de la *distancia justa*. Para Carlitos, el Self no compite con el Yo ni busca anularlo; representa el centro coordinador, la brújula orientadora y la totalidad que abraza tanto nuestra luz consciente como nuestra noche profunda.',
      'El drama de la cultura contemporánea ha sido la fractura del *Eje Yo-Self*. El ser humano moderno vive como si su pequeño intelecto fuera el dueño absoluto de la realidad. Cuando esta desconexión se agrava, sobreviene la neurosis, el vacío de propósito y la sensación de sequedad espiritual. El Self responde enviando síntomas, crisis de vida o sueños intensos para obligar al Yo a detener su carrera desenfrenada y reorientarse hacia lo esencial.',
      'En todas las tradiciones sapienciales, el Self se proyectó en imágenes de totalidad cuaternaria: el mandala circular con cuatro cuadrantes, la cruz de brazos iguales, la flor de loto o la *piedra filosofal* (*Lapis*) de los alquimistas, símbolo de aquello que resiste el fuego porque ha reconciliado los opuestos. Cuando en momentos de desconcierto dibujamos círculos o soñamos con recintos sagrados, es el Self recordándonos que el aparente desorden de la vida tiene un centro de calma.',
      'La individuación no exige disolver el Yo, sino educarlo éticamente. Un Yo sano se sitúa en la distancia justa: ni inflado con soberbia ni disociado en el miedo. Se convierte en el piloto atento y respetuoso del Self, sabiendo cuándo actuar en el mundo cotidiano y cuándo guardar silencio para escuchar el rumbo que la totalidad le señala.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap1-self',
      title: 'Carlitos dice con solemnidad:',
      text: 'El Yo es el capitán del timón, pero el Self es el océano, el barco y la estrella del norte que marca el rumbo. No intentes mandar sobre el océano ni te tires por la borda: aprende a navegar sus corrientes con asombro, respeto y humildad.'
    }
  },

  // ==========================================
  // CAPÍTULO 2 — SUEÑOS Y EL LENGUAJE DEL ALMA (PÁGINAS 10 A 13)
  // ==========================================
  {
    pageNumber: 10,
    chapterId: 2,
    sectionTitle: 'Capítulo 2 — Los Sueños',
    pageTitle: 'El Sueño como Mensajero Autónomo y Compensatorio',
    subtitle: 'La mente profunda como órgano vivo de autorregulación biológica y espiritual',
    contentType: 'text',
    keyTerms: ['Función Compensatoria', 'Autorregulación Psíquica', 'Naturaleza del Sueño', 'Teleología Onírica'],
    illustrationImage: {
      src: '/src/assets/images/alchemical_dreams_mandala_1790692414590.jpg',
      alt: 'Mandala alquímico del inconsciente y los sueños',
      caption: 'El mandala del inconsciente: los sueños tejen en círculos de luz y sombra la compensación que el Yo diurno necesita para no extraviarse.',
      credit: 'Ilustración',
      aspect: 'square',
    },
    paragraphs: [
      'Pocas intuiciones distanciaron tanto a Carlitos del psicoanálisis clásico vienés como su concepción sobre la naturaleza de los sueños. Para Freud, el sueño era una fachada astuta destinada a disfrazar impulsos inconfesables mediante un mecanismo de censura. Para Jung, por el contrario, *el sueño no disfraza nada*: habla el único lenguaje natural que posee el inconsciente, que es el jeroglífico del símbolo vivo.',
      'La premisa fundamental de Carlitos es que la psique es un *sistema autorregulado*, exactamente idéntico al organismo biológico. Si tu cuerpo se recalienta por el esfuerzo o la fiebre, las glándulas sudoríparas producen sudor para restablecer el equilibrio homeostático. Del mismo modo, si tu mente consciente adopta durante el día una actitud unilateral —por ejemplo, un orgullo desmedido, una frialdad hiperracional o un sacrificio complaciente que borra tus límites—, la mente profunda genera por la noche un sueño para empujar la balanza en la dirección opuesta.',
      'Esta es la *función compensatoria* del sueño. El sueño de una persona que se siente infalible y todopoderosa suele situarla caminando al borde de un precipicio resbaloso o descalza en un lodazal; el sueño de alguien apocado y lleno de culpa puede revelarle un león dorado rugiendo en su sala de estar. No son castigos ni profecías mágicas: son correcciones homeostáticas indispensables.',
      'Asimismo, los sueños poseen una dimensión *teleológica* (orientada a un propósito futuro): no se limitan a indicar de dónde venimos o qué traumas infantiles arrastramos, sino hacia dónde busca fluir la energía psíquica para completar nuestra individuación.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap2-compensacion',
      title: 'Cita Histórica de C. G. Jung (Obras Completas, vol. 10, §304):',
      variant: 'historical_quote',
      text: 'El sueño es la pequeña puerta escondida en el santuario más íntimo y secreto del alma, que se abre hacia esa noche cósmica que era psique mucho antes de que existiera el Yo consciente, y que seguirá siendo psique mucho después de que este haya desaparecido.'
    }
  },
  {
    pageNumber: 11,
    chapterId: 2,
    sectionTitle: 'Capítulo 2 — Los Sueños',
    pageTitle: 'Símbolos vs. Signos y el Error del Diccionario',
    subtitle: 'Por qué las recetas prefabricadas destruyen la sabiduría viva de la imagen onírica',
    contentType: 'text',
    keyTerms: ['Símbolo vs Signo', 'Diccionario de Sueños', 'Amplificación', 'Asociación Personal'],
    paragraphs: [
      'Una de las preguntas más habituales que le hacían a Carlitos en sus seminarios era: "¿Qué significa soñar con serpientes, con agua turbia o con la muerte de un pariente?". Y la respuesta de Carlitos era invariablemente una sonrisa paciente seguida de una repregunta: "¿Quién sos vos, qué hiciste ayer y qué significa para vos esa serpiente?".',
      'Aquí radica una diferencia fundamental para entender el lenguaje de los sueños: la distinción entre un *signo* y un *símbolo*. Un signo es una convención arbitraria que representa algo ya conocido por el intelecto consciente: una señal de tránsito con una raya roja significa "no pasar"; el dibujo de un tenedor y un cuchillo significa "restaurante". Los signos son estáticos, unívocos y pueden recopilarse en un diccionario.',
      'Un verdadero *símbolo*, en cambio, es la mejor formulación posible de una realidad viviente que la razón todavía no alcanza a comprender cabalmente. El símbolo es polisémico, numinoso y cambia según la biografía del soñador. Para un biólogo especialista en reptiles, la serpiente evoca asombro por la adaptación evolutiva; para una persona con una fobia infantil, terror visceral; para un iniciado en la tradición yóguica y tántrica, la energía de la Kundalini o el renacimiento dérmico. Ningún diccionario puede contemplar esa singularidad.',
      'El método junguiano para descifrar el mensaje onírico es la *Amplificación*. Se parte de las asociaciones íntimas y personales del sujeto ("¿A qué me recuerda esto en mi momento actual?"), para luego enriquecer la imagen con los paralelos arquetípicos de los mitos, el arte y los cuentos de hadas universales.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap2-diccionario',
      title: 'Carlitos dice con picardía:',
      text: 'Comprar un "diccionario de los sueños" para interpretar lo que tu alma te dice de noche es tan absurdo como usar una guía telefónica de Zúrich para declararle tu amor a una mujer. Te dará un montón de números, pero no sabrás cómo tocarle el corazón.'
    }
  },
  {
    pageNumber: 12,
    chapterId: 2,
    sectionTitle: 'Capítulo 2 — Los Sueños',
    pageTitle: 'La Estructura Dramática del Sueño Junguiano',
    subtitle: 'Los cuatro actos del drama onírico: Exposición, Desarrollo, Culminación y Lysis',
    contentType: 'text',
    keyTerms: ['Estructura Dramática', 'Exposición', 'Desarrollo', 'Peripeteia', 'Lysis'],
    clippedPhoto: {
      imageUrl: '/src/assets/images/alchemical_dreams_mandala_1790692414590.jpg',
      caption: 'Mandala onírico del inconsciente y los cuatro cuadrantes de la psique',
      rotationDeg: -1.8,
      side: 'right',
      altText: 'Mandala alquímico del sueño',
    },
    paragraphs: [
      'Al analizar miles de sueños a lo largo de seis décadas de práctica médica, Jung descubrió que la inmensa mayoría de los relatos oníricos no son una mezcolanza caótica de fragmentos inconexos, sino un drama clásico rigurosamente estructurado en cuatro actos bien definidos, idénticos a los de una tragedia o comedia griega.',
      '**1. Exposición / Planteamiento:** El sueño fija con precisión el tiempo, el espacio y los personajes involucrados. "Estoy en la casa de mi abuela de la infancia, pero es de noche y el río cercano está crecido". Esta escena inicial sitúa el punto de partida del conflicto psíquico actual del soñador.',
      '**2. Desarrollo / Nudo:** La trama se pone en movimiento y surge una complicación. "Entro a la cocina y descubro que todas las puertas están cerradas con candados antiguos; escucho pasos apresurados afuera". Aquí se revela la tensión entre la actitud consciente y el obstáculo que el Yo no quiere ver.',
      '**3. Culminación o Peripeteia:** Es el clímax o punto de inflexión donde ocurre un giro decisivo, a menudo inesperado o sobrecogedor. "Al forzar la ventana para escapar, un cuervo negro con una llave dorada en el pico entra volando y se posa sobre mi hombro". La energía psíquica alcanza su máxima tensión simbólica.',
      '**4. Desenlace o Lysis:** El desenlace del drama, que contiene la clave de la compensación. La lysis puede ser armónica (la llave abre el sótano), trágica (la casa se derrumba advirtiendo un peligro real) o abierta (el soñador despierta con una pregunta suspendida en el pecho). Registrar minuciosamente la lysis es descubrir qué pide la mente para reorientar el rumbo.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap2-estructura',
      title: 'Consejo Práctico de Carlitos:',
      text: 'Cuando anotes un sueño al despertar, no lo resumas con prisas. Separá en tu cuaderno: ¿Dónde empieza? ¿Cuál es el problema? ¿Dónde se complica todo? ¿Cómo termina? Si mirás la Lysis con atención, ahí está la tarea que la vida te pone para hoy.'
    }
  },
  {
    pageNumber: 13,
    chapterId: 2,
    sectionTitle: 'Capítulo 2 — Los Sueños',
    pageTitle: 'El Arte de la Imaginación Activa',
    subtitle: 'El diálogo despierto de igual a igual con las figuras del inconsciente',
    contentType: 'text',
    keyTerms: [
      'Imaginación Activa',
      'Liber Novus',
      'Diálogo Interior',
      'Confrontación Ética',
      'Principios de Imaginación Activa†'
    ],
    paragraphs: [
      'Entre 1913 y c. 1917, tras su dolorosa ruptura con Freud y el estallido de la Primera Guerra Mundial, Jung atravesó un período de profunda desorientación que denominó su «confrontación con el inconsciente». En lugar de eludir sus visiones interiores, decidió hacer algo radical: desarrolló la técnica de la *Imaginación Activa*.',
      'La Imaginación Activa no es una ensoñación pasiva ni una fantasía dirigida de autoayuda donde el ego se imagina en una playa paradisíaca recibiendo elogios. Muy por el contrario, consiste en apaciguar el murmullo de la razón consciente, convocar una figura o símbolo onírico cargado de afecto, otorgarle *completa autonomía dramática* y entablar con ella una conversación despierta de igual a igual.',
      'Los principios de la práctica junguiana formulados para este diálogo establecen: 1. *No manipules a la figura*: si la figura del sueño es un anciano hosco, un animal salvaje o un rival irritante, dejá que hable con sus propias palabras sin dictarle las respuestas. 2. *No te disuelvas en la fantasía*: el Yo debe mantener su juicio crítico, sus valores éticos y su perspectiva humana. Podés debatir, discrepar, pedir aclaraciones o negarte a cumplir pedidos absurdos.',
      'Jung dialogó durante años con figuras como *Filemón* (el anciano sabio pagano con alas de martín pescador y cuernos de toro) y *Salomé*, volcando sus diálogos e ilustraciones en los folios de cuero rojo del *Liber Novus*. La Imaginación Activa transforma la energía reprimida en conciencia viva.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap2-imaginacion',
      title: 'Nota de Advertencia de Carlitos:',
      variant: 'alchemical',
      text: 'La Imaginación Activa no es un juego de salón para pasar el rato. Si convocás a las figuras de tu abismo interior, hacelo con la seriedad con la que invitarías a un embajador extranjero a tu casa: con respeto absoluto, pero sin renunciar a tu soberanía.'
    },
    secondaryCallout: {
      id: 'carlitos-prudencia-f13',
      title: 'Nota de prudencia de Carlitos:',
      variant: 'context_note',
      text: 'Una aclaración ética indispensable: la imaginación activa, las sincronías y el oráculo son herramientas de autoconocimiento, jamás un sustituto de la psicoterapia o la atención médica. Si experimentás voces intrusivas, desrealización, disociación o pensamientos de daño, no te pongas a experimentar solo: consultá de inmediato a un profesional de la salud mental.'
    }
  },

  // ==========================================
  // CAPÍTULO 3 — SINCRONICIDAD: EL PRINCIPIO ACAUSAL (PÁGINAS 14 A 17)
  // ==========================================
  {
    pageNumber: 14,
    chapterId: 3,
    sectionTitle: 'Capítulo 3 — Sincronicidad',
    pageTitle: 'El Escarabajo Dorado de Küsnacht',
    subtitle: 'La historia fundacional del evento sincrónico que derrumbó el caparazón cartesiano',
    contentType: 'text',
    keyTerms: ['Escarabajo Dorado', 'Küsnacht', 'Sincronicidad', 'Cetonia Aurata', 'Racionalismo Defensivo'],
    illustrationImage: {
      src: '/src/assets/images/golden_scarab_alchemical_relic_1790692388946.jpg',
      alt: 'El amuleto del escarabajo dorado de Jung',
      caption: 'El escarabajo verde-dorado (*Cetonia aurata*) de Küsnacht: el instante milagroso donde el símbolo onírico y la realidad física tocaron a la ventana del consultorio.',
      credit: 'Ilustración',
      aspect: 'square',
    },
    paragraphs: [
      'Existe una anécdota clínica célebre en la historia de la psicología moderna que Carlitos solía relatar con una mezcla de picardía y devoción: el caso de la joven paciente suiza y el *escarabajo dorado*.',
      'Se trataba de una mujer de elevada cultura y brillante formación académica, pero cuya actitud psicológica estaba completamente acorazada por un racionalismo cartesiano impenetrable. Cada interpretación, cada intento de aproximación terapéutica era desarmado de inmediato por su intelecto implacable. El análisis se encontraba en un callejón sin salida; la mente de la paciente era como una fortaleza de hormigón donde nada numinoso podía penetrar.',
      'Una tarde primaveral, sentada frente a Carlitos en su consultorio de Küsnacht, la mujer comenzó a relatar un sueño que había tenido la noche previa: alguien le regalaba un costoso broche de oro con la figura de un escarabajo joya egipcio. En el momento exacto en que pronunciaba esas palabras, Jung escuchó un golpecito suave y rítmico en el cristal de la ventana que daba al jardín.',
      'Carlitos se levantó en silencio, abrió la ventana y atrapó al vuelo en el aire a un insecto grande: era un *Cetonia aurata* (el escarabajo verde-oro o escarabajo de las rosas), primo europeo del escarabajo sagrado egipcio, un insecto que, contra sus costumbres, entró volando a un cuarto en penumbra. Jung se acercó a la paciente, abrió su mano y con una sonrisa le dijo suavemente: "Aquí tiene a su escarabajo". La coraza racionalista de la paciente se quebró al instante en lágrimas de conmoción; el racionalismo cedió y la terapia pudo avanzar.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap3-escarabajo',
      title: 'Carlitos dice recordando a la paciente:',
      text: 'A veces el inconsciente es un maestro piadoso pero contundente: cuando ve que tus argumentos racionales te están ahogando en vida, golpea el vidrio de tu ventana con la fuerza de un milagro terrenal para obligarte a despertar.'
    }
  },
  {
    pageNumber: 15,
    chapterId: 3,
    sectionTitle: 'Capítulo 3 — Sincronicidad',
    pageTitle: 'Causalidad vs. Sincronicidad: El Tiempo Cualitativo',
    subtitle: 'De Chronos a Kairos: la diferencia entre la causa mecánica y la coincidencia de sentido',
    contentType: 'text',
    keyTerms: ['Chronos vs Kairos†', 'Causalidad Clásica', 'Conexión Acausal', 'Tiempo Cualitativo'],
    paragraphs: [
      'Para formalizar este fenómeno ante la comunidad científica, Jung formuló en 1952 su célebre tratado *La sincronicidad como principio de conexiones acausales*. ¿Qué es exactamente una sincronicidad? Es la coincidencia temporal de dos o más acontecimientos que no están vinculados por una relación de causa y efecto mecánicos, pero cuyo enlace revela un *significado compartido* y profundamente conmovedor para el sujeto.',
      'La ciencia de Newton se basa en *Chronos*: el tiempo cuantitativo del reloj, medido en segundos y minutos homogéneos e indiferentes. En Chronos, si una piedra cae al suelo es porque la gravedad la atrajo; si una bola de billar choca contra otra, le transfiere su momento cinético. Todo se explica mirando hacia el pasado.',
      'La sincronicidad, en cambio, opera en la dimensión de *Kairos*: el tiempo del momento propicio, el tiempo cualitativo de los griegos donde el universo se carga de sentido. Jung clasificó las sincronías en tres categorías operativas: 1. Coincidencia entre un estado mental interior (pensamiento, emoción intensa) y un suceso material exterior simultáneo; 2. Coincidencia entre un estado mental y un suceso exterior distante en el espacio que luego se verifica; 3. Coincidencia entre un estado mental y un suceso futuro que todavía no ha tenido lugar.',
      'Comprender la sincronicidad no nos lleva a una superstición ingenua donde vemos señales en cada semáforo rojo, sino a una reverencia atenta: la realidad está viva, nos escucha y dialoga con nosotros cuando nos encontramos en un cruce de caminos decisivo.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap3-definicion',
      title: 'Definición Técnica de C. G. Jung (OC 8, §849–850):',
      variant: 'historical_quote',
      text: '«...la coincidencia temporal de dos o más sucesos no vinculados causalmente, que tienen el mismo o semejante significado». Jung propuso este fenómeno como un principio de ordenación acausal que se sitúa en pie de igualdad con la causalidad clásica.'
    }
  },
  {
    pageNumber: 16,
    chapterId: 3,
    sectionTitle: 'Capítulo 3 — Sincronicidad',
    pageTitle: 'La Brújula del Destino: Señales en la Vida Cotidiana',
    subtitle: 'Cómo y cuándo se constelan las sincronías en los umbrales de transformación personal',
    contentType: 'text',
    keyTerms: ['Constelación Sincrónica', 'Umbrales Existenciales', 'Lectura de Señales', 'Coaching Profundo'],
    clippedPhoto: {
      imageUrl: '/src/assets/images/golden_scarab_alchemical_relic_1790692388946.jpg',
      caption: 'Amuleto del escarabajo dorado sobre el manuscrito de notas',
      rotationDeg: 2.2,
      side: 'left',
      altText: 'Escarabajo dorado de la sincronicidad',
    },
    paragraphs: [
      '¿Cuándo aparecen las sincronicidades en la vida de una persona? No se presentan de forma caprichosa ni constante; se *constelan* prioritariamente en momentos de máxima turbulencia psíquica: durante una crisis vocacional profunda, en el duelo por la pérdida de un ser amado, al inicio de un enamoramiento apasionado, o durante la llamada "crisis del ecuador de la vida" (los 40 años), cuando el mapa del ego ya no sirve para transitar la segunda mitad de la existencia.',
      'En esos instantes límite, Jung observaba que estas coincidencias se agrupan en momentos de fuerte carga afectiva y de encrucijada existencial. De pronto, un libro cae de una estantería abriéndose exactamente en la página que resuelve una duda crucial; te cruzás en la parada de un colectivo con una persona que no veías hace diez años y que te ofrece el trabajo que necesitabas; o un sueño nocturno se refleja al día siguiente en una noticia inesperada.',
      'En el coaching y el autoconocimiento, aprender a registrar las sincronicidades no tiene nada que ver con delegar la responsabilidad de tus decisiones en "el universo". Muy por el contrario: la sincronicidad es un *espejo amplificador* del Self. Te indica si estás caminando en consonancia con tu proceso de individuación o si estás forzando una puerta falsa por pura terquedad del ego.',
      'La clave ética para trabajar con las sincronías consiste en guardar silencio, abstenerse de inflarse creyéndose "un elegido del destino" y preguntarse: "¿Qué acción concreta y valiente me está exigiendo esta coincidencia en mi vida de hoy?".'
    ],
    carlitosCallout: {
      id: 'carlitos-cap3-brujula',
      title: 'Carlitos dice:',
      text: 'No sé si el mundo responde; sé que vos respondés al mundo. Cuando estás alineado con lo profundo, cada coincidencia parece iluminar el camino; cuando te empecinás en forzar las cosas por vanidad, los tropiezos te recuerdan que frenes y vuelvas a mirar el mapa.'
    }
  },
  {
    pageNumber: 17,
    chapterId: 3,
    sectionTitle: 'Capítulo 3 — Sincronicidad',
    pageTitle: 'Tabla Comparativa de Sincronicidades Cotidianas',
    subtitle: 'Patrones frecuentes (clasificación del autor)',
    contentType: 'table',
    tableData: [
      {
        archetype: 'El Escarabajo / Aparición Animal Inesperada',
        symbols: 'Insectos dorados, aves en ventanas, encuentros con animales salvajes en momentos de dolor o decisión.',
        distortion: 'Superstición fóbica ("es mala suerte") o inflación mágica. La integración requiere preguntar qué instinto vital o renacimiento representa ese animal.',
      },
      {
        archetype: 'El Encuentro Fortuito en la Encrucijada',
        symbols: 'Toparse casualmente con la persona exacta necesaria para destrabar un proyecto o vínculo tras años de silencio.',
        distortion: 'Atribuir a la otra persona una cualidad divina infalible. Reconocer que el vínculo es el vehículo de un arquetipo que pide maduración.',
      },
      {
        archetype: 'El Objeto Perdido o Hallazgo Extraño',
        symbols: 'Encontrar una joya antigua, una carta olvidada o un libro que se abre solo en una frase determinante.',
        distortion: 'Fijación obsesiva con el objeto físico. El objeto es un puntero hacia un contenido de la Sombra o del Ánima que necesita ser recuperado.',
      },
      {
        archetype: 'La Falla Sincrónica de Aparatos / Reloj Detenido',
        symbols: 'Relojes que se frenan en la hora de una partida, interferencias en dispositivos durante una revelación emocional.',
        distortion: 'Pánico conspirativo. Carlitos lo entendía como una perturbación psico-física del campo por una descarga afectiva de máxima tensión.',
      },
    ],
    paragraphs: [
      'Esta tabla resume cuatro patrones frecuentes de fenómenos sincrónicos (clasificación del autor) y de la práctica de acompañamiento personal. Cada evento reúne una perturbación interior, un hecho físico exterior coincidente y un llamado ético a la transformación.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap3-tabla',
      title: 'Regla Metodológica de Carlitos:',
      variant: 'marginalia',
      text: 'Nunca fuerces una sincronicidad. Si tenés que retorcer la lógica para justificar que algo "es una señal", no lo es. La verdadera sincronicidad se reconoce por su huella numinosa: te deja mudo, con la piel de gallina y con la certeza íntima de que no estás solo en tu camino.'
    }
  },

  // ==========================================
  // CAPÍTULO 4 — EL ORÁCULO DEL I CHING Y LA MENTE SIMBÓLICA (PÁGINAS 18 A 25)
  // ==========================================
  {
    pageNumber: 18,
    chapterId: 4,
    sectionTitle: 'Capítulo 4 — El I Ching',
    pageTitle: 'Jung y el Libro de las Mutaciones',
    subtitle: 'El encuentro con Richard Wilhelm, el prólogo de 1949 y tres modos de comprender el oráculo',
    contentType: 'text',
    keyTerms: ['Richard Wilhelm', 'Prólogo de 1949', 'Sincronicidad', 'Reencuadre Psicológico'],
    illustrationImage: {
      src: IMAGE_MANIFEST.ichingCoins,
      alt: 'Monedas de consulta del I Ching',
      caption: 'Las tres monedas para la consulta: el método que Jung empleó para interrogar la cualidad del momento.',
      credit: 'Fotografía de archivo',
      aspect: 'landscape',
    },
    paragraphs: [
      'En la década de 1920, Carl Gustav Jung profundizó en la obra de Richard Wilhelm, sinólogo y teólogo alemán que residió más de dos décadas en China traduciendo pacientemente las fuentes clásicas bajo la guía de maestros orientales. Wilhelm le transmitió una comprensión viva del *I Ching* (*Yì Jīng*, o *Libro de las Mutaciones*), concebido no como adivinación vulgar, sino como un mapa dinámico del cambio, la polaridad y los ritmos del tiempo.',
      'En su prólogo de 1949 para la traducción inglesa de Cary F. Baynes, Jung afirmó que llevaba más de treinta años experimentando con esta técnica. Para presentar la obra a Occidente, decidió consultar al libro sobre el sentido de su propia publicación. Obtuvo el hexagrama 50, *Dǐng* (*Ting*, El Caldero), la vasija ritual de transformación espiritual. Formuló luego una segunda pregunta sobre su posición, con otro resultado elocuente.',
      /* [VERIFICAR: En el prólogo de 1949, la segunda consulta de Jung sobre su propia posición dio el Hexagrama 29 (K'an, El Abismo) con mutaciones, derivando al Hexagrama 59 (Huan, La Disolución). Conforme a la regla de contenido, no se mencionan números en el texto visible.] */
      'Para comprender por qué funciona una consulta, existen tres posturas posibles: (a) la sincronicidad propuesta por Jung, como hipótesis de una conexión acausal entre la psique y el azar exterior; (b) el reencuadre psicológico, donde las imágenes del texto operan como estímulos estructurados que ordenan tus pensamientos; y (c) el azar puro sin significado intrínseco.',
      'Para tu práctica cotidiana no necesitás decidir cuál de las tres posturas es la verdadera. El procedimiento funciona como un reencuadre estructurado que aclara tus decisiones, mientras que Jung sostenía la hipótesis sincrónica como una resonancia entre el estado interno y el instante en que caen las monedas.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap4-18',
      title: 'Carlitos dice junto al fuego:',
      variant: 'carlitos',
      text: 'No busques en el oráculo una certeza mágica que te ahorre pensar, che. El I Ching no te adivina el porvenir ni te da órdenes: te devuelve un espejo lúcido para que descubras qué estás sintiendo y decidas con responsabilidad.'
    }
  },
  {
    pageNumber: 19,
    chapterId: 4,
    sectionTitle: 'Capítulo 4 — El I Ching',
    pageTitle: 'Antes de abrir la app: la pregunta',
    subtitle: 'El arte de formular la consulta, las categorías operativas y el cuidado de no degradar el diálogo',
    contentType: 'text',
    keyTerms: ['Pregunta Abierta', 'Consulta Abierta', 'Hexagrama 4 (Méng)', 'Ética de Consulta'],
    paragraphs: [
      'La consulta no arranca cuando tocás la pantalla del celular, sino en la claridad con que formulás tu pregunta. El libro exige una sola pregunta por tirada, redactada de forma abierta: indagar *cómo* abordar un desafío o *qué actitud* conviene cultivar. Las preguntas cerradas de sí o no y los pedidos de predicción anulan la función reflexiva del símbolo.',
      'Un ejemplo constructivo sería: «¿Qué actitud interior me conviene sostener ante esta renegociación laboral para cuidar mi vocación?». En cambio, una mala formulación busca predicción pasiva: «¿Me van a aumentar el sueldo el mes que viene?». La primera te devuelve la iniciativa y la madurez; la segunda delega tu responsabilidad en una respuesta mágica.',
      'Para orientarte, la app de I Ching del curso organiza sugerencias en cuatro categorías: *Decisiones y Encrucijadas*, *Vínculos y Relaciones*, *Autoconocimiento y Procesos Internos*, y *Proyectos y Trabajo*. Si atravesás un momento difuso y no encontrás palabras exactas, podés recurrir al modo de *Consulta abierta*, donde el oráculo refleja la cualidad general de tu presente.',
      'Una regla esencial: no repitas la consulta sobre el mismo asunto hasta que las circunstancias reales hayan cambiado. El hexagrama 4, *Méng* (La Necedad Juvenil), advierte que consultar una y otra vez lo mismo degrada la lectura y confunde el discernimiento. Quien insiste por ansiedad no busca claridad, sino escuchar lo que su ego quiere oír.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap4-19',
      title: 'Carlitos dice con el mate en la mano:',
      variant: 'carlitos',
      text: 'Si le preguntás tres veces lo mismo a un amigo sabio en diez minutos, te va a mirar con paciencia y te va a convidar un mate para que te calmes. Con el I Ching pasa igual: respetá la primera respuesta y date tiempo para digerirla.'
    }
  },
  {
    pageNumber: 20,
    chapterId: 4,
    sectionTitle: 'Capítulo 4 — El I Ching',
    pageTitle: 'Qué es un hexagrama y qué hace la app por vos',
    subtitle: 'Estructura de seis líneas, polaridades de valor, líneas mutantes y la tirada en pantalla',
    contentType: 'table',
    keyTerms: ['Hexagrama', 'Trigrama Inferior y Superior', 'Líneas Mutantes', 'Valores 6, 7, 8, 9'],
    hexagramFigure: {
      lines: [8, 7, 8, 7, 8, 7],
      annotate: 'both',
      caption: 'Figura (a): Anatomía de un hexagrama. Seis líneas numeradas de abajo hacia arriba. Las tres inferiores forman el trigrama inferior (lo propio); las tres superiores, el trigrama superior (el entorno).',
    },
    referenceTables: [
      {
        title: 'Figura (b): Tabla de valores de tirada y probabilidades',
        headers: ['Suma', 'Tipo de línea', 'Cómo se ve en la app', 'Probabilidad'],
        rows: [
          [{ line: 6 }, 'Yin mutante (se vuelve yang)', 'Trazo partido con marca × central', '1/8 (12,5 %)'],
          [{ line: 7 }, 'Yang fijo (permanece yang)', 'Trazo continuo firme', '3/8 (37,5 %)'],
          [{ line: 8 }, 'Yin fijo (permanece yin)', 'Trazo partido abierto', '3/8 (37,5 %)'],
          [{ line: 9 }, 'Yang mutante (se vuelve yin)', 'Trazo continuo con marca ○ central', '1/8 (12,5 %)'],
        ],
        footnote: 'Convención de la app: cara = 3 (yang) y cruz = 2 (yin). Sumas de tres monedas.',
      },
    ],
    paragraphs: [
      'Un hexagrama reúne seis líneas horizontales apiladas que se leen siempre de abajo hacia arriba, desde la base (línea 1) hasta la cima (línea 6). Cada línea es continua (yang) o partida (yin), totalizando 64 combinaciones. Las tres de abajo forman el trigrama inferior (lo propio) y las tres de arriba el superior (el entorno). Ver Figura (a).',
      'La app simula el lanzamiento de tres monedas por cada una de las seis líneas. Al sumar los valores de cada tiro (cara = 3, cruz = 2), se producen los cuatro estados de la tabla. En promedio surgen 1,5 líneas mutantes por tirada y solo el 17,8 % de las tiradas no arroja ninguna; por lo tanto, tener mutantes es lo normal.',
      'Una línea mutante es una energía llegada a su extremo que empieza a volverse su opuesto: al voltearla aparece un segundo hexagrama. En la app, la tirada línea por línea tocando *Tirar monedas* es el camino principal de atención; *Completar Rápido* funciona solo como un atajo práctico.',
      'Nota sobre la tirada manual: sin la app para celular, la tirada tradicional requiere lanzar manualmente tres monedas seis veces consecutivas, registrando cada valor de abajo hacia arriba para trazar el hexagrama y calcular las mutaciones a mano.'
    ],
    secondaryCallout: {
      id: 'carlitos-cap4-20-der',
      title: 'Figura (c): Principio de mutación y tendencia',
      variant: 'context_note',
      text: 'Cuando una línea alcanza el extremo de su polaridad (6 o 9), muta en su opuesto al voltearse. Esa transformación engendra un segundo hexagrama que señala la tendencia hacia donde gravita el presente.'
    }
  },
  {
    pageNumber: 21,
    chapterId: 4,
    sectionTitle: 'Capítulo 4 — El I Ching',
    pageTitle: 'Leer el resultado, pantalla por pantalla',
    subtitle: 'Interpretación rápida, juicio, imagen, líneas del caso y calificaciones de conducta',
    contentType: 'table',
    keyTerms: ['Interpretación Rápida', 'Juicio e Imagen', 'Líneas Mutantes', 'Calificaciones Éticas'],
    paragraphs: [
      'Al completar la tirada, la app muestra primero la pantalla de *Interpretación Rápida*, dividida en tres bloques: *1. Tu Presente*, *2. Actitud Recomendada* y *3. ¿Hacia dónde evoluciona?*. Es tu punto de partida. Advertí que es una síntesis orientadora: el caso singular del lector está en el Juicio, la Imagen y las líneas mutantes.',
      'Al avanzar, navegás las pestañas *Presente* y *Tendencia*. En el presente leés *El Juicio* (la estructura de la situación) y *La Imagen* (los elementos naturales puestos en relación, que culmina siempre en una conducta del noble). Debajo encontrás *Tus Líneas Mutantes*: son las líneas de tu caso particular y se leen de abajo hacia arriba, como etapas de un proceso que madura.',
      'Al presionar *Ver Hexagrama Derivado*, examinás la tendencia de evolución, comparando qué cambia respecto del presente. Aclaración metodológica: la app puede mostrar una traducción con variantes de vocabulario respecto a otros libros; lo decisivo es interpretar siempre la estructura: el patrón arquetípico, la posición y la conducta sugerida.'
    ],
    referenceTables: [
      {
        title: 'Casos especiales de tirada',
        headers: ['Condición de la tirada', 'Criterio operativo en la app'],
        rows: [
          ['Sin mutantes (Hexagrama Estable)', 'La situación muestra fijeza o madurez. Se leen exclusivamente El Juicio y La Imagen del hexagrama presente.'],
          ['Seis mutantes', 'En hexagramas 1 y 2 rige la regla 用九 (yòng jiǔ) / 用六 (yòng liù). En los demás casos, se lee el Juicio del derivado como tendencia.'],
        ],
        footnote: 'Un hexagrama estable indica que la situación no exige cambios apresurados de posición.',
      },
      {
        title: 'Calificaciones de conducta en el texto canónico',
        headers: ['Término canónico', 'Qué indica para tu conducta'],
        rows: [
          ['Ventura', 'La actitud sintoniza con el orden del momento; avanzar con confianza serena.'],
          ['Desventura', 'La acción planeada va a contramano de la situación; riesgo de tropiezo si insistís.'],
          ['Sin falta', 'No hay error ético en tu postura ante la dificultad; mantener la rectitud interior.'],
          ['Arrepentimiento', 'Señal de desvío temprano; momento propicio para rectificar el rumbo a tiempo.'],
          ['Humillación', 'Pérdida momentánea de compostura o tropiezo menor; exige humildad y aprendizaje.'],
          ['Propicio (Es propicio...)', 'El contexto acompaña la iniciativa (ej. «cruzar las grandes aguas»); actuar sin dudar.'],
        ],
        footnote: 'Estas valoraciones no son sentencias fatales sobre tu persona, sino calificaciones de la conducta sugerida.',
      },
    ],
  },
  {
    pageNumber: 22,
    chapterId: 4,
    sectionTitle: 'Capítulo 4 — El I Ching',
    pageTitle: 'Dos lentes para profundizar: posiciones y trigramas',
    subtitle: 'El sentido de los seis puestos y la dinámica de los ocho trigramas elementales',
    contentType: 'table',
    keyTerms: ['Puestos 1 a 6', 'Trigramas Ba Gua', 'Estructura de Trigramas', 'Hexagramas 63 y 64'],
    paragraphs: [
      'Las posiciones de las líneas (de 1 a 6) no son equivalentes ni intercambiables. Cada puesto describe un grado de visibilidad, compromiso y madurez en el desarrollo de cualquier situación. Al leer tus líneas mutantes, contrastá su recomendación con el puesto que ocupan (remitite a la Figura a del folio 20 para ver su ubicación en la estructura).',
      'La segunda lente radica en los ocho trigramas (*Ba Gua*), que la app despliega bajo la etiqueta *Estructura de Trigramas*. El trigrama inferior describe la situación propia o interna (tus emociones, recursos o disposición anímica), y el superior la externa o ambiental (las presiones, oportunidades o vínculos del entorno). Comprender su interacción aclara si tu impulso choca o fluye con el contexto.'
    ],
    referenceTables: [
      {
        title: 'Tabla 1: Significado de las seis posiciones (de 1 a 6)',
        headers: ['Posición', 'Estadio psíquico y significado operativo'],
        rows: [
          ['Línea 1 (Base)', 'Inicio sin forma visible, raíz o germen. Conviene observar y prepararse sin exponerse.'],
          ['Línea 2 (Centro interior)', 'Centro interno y ejecución; equilibrio de la emoción y rectitud en lo íntimo.'],
          ['Línea 3 (Umbral)', 'Límite del mundo interno; transición crítica, riesgo y exigencia de prudencia.'],
          ['Línea 4 (Cercanía al poder)', 'Ingreso al espacio público exterior; cercanía al poder, lealtad y adaptabilidad.'],
          ['Línea 5 (Lugar del poder)', 'Lugar del poder y madurez plena; autoridad serena, visión de conjunto y justicia.'],
          ['Línea 6 (Tope)', 'Exceso o final de ciclo; agotamiento de la fase, llamado al desapego o renacimiento.'],
        ],
        footnote: 'Las líneas 2 y 5 representan los centros armónicos de cada trigrama.',
      },
      {
        title: 'Tabla 2: Figura (d) — Los ocho trigramas fundamentales (Ba Gua)',
        headers: ['Trigrama', 'Nombre Pinyin (Wade-Giles)', 'Imagen natural', 'Cualidad', 'Movimiento'],
        rows: [
          [{ trigram: 'Qián' }, "Qián (Ch'ien) ☰", 'Cielo', 'Lo Creativo', 'Fuerza generadora, iniciativa pura'],
          [{ trigram: 'Kūn' }, "Kūn (K'un) ☷", 'Tierra', 'Lo Receptivo', 'Entrega, sustento, docilidad fecunda'],
          [{ trigram: 'Zhèn' }, 'Zhèn (Chen) ☳', 'Trueno', 'Lo Suscitante', 'Despertar, conmoción, impulso inicial'],
          [{ trigram: 'Kǎn' }, "Kǎn (K'an) ☵", 'Agua', 'Lo Abismal', 'Peligro, profundidad, flujo constante'],
          [{ trigram: 'Gèn' }, 'Gèn (Ken) ☶', 'Montaña', 'El Aquietamiento', 'Quietud, discernimiento del límite'],
          [{ trigram: 'Xùn' }, 'Xùn (Sun) ☴', 'Viento / Madera', 'Lo Suave', 'Penetración sutil, constancia flexible'],
          [{ trigram: 'Lí' }, 'Lí (Li) ☲', 'Fuego', 'Lo Adherente', 'Claridad, lucidez consciente'],
          [{ trigram: 'Duì' }, 'Duì (Tui) ☱', 'Lago', 'Lo Sereno', 'Alegría compartida, apertura comunicativa'],
        ],
        footnote: 'En la app se consultan tocando la pestaña «Estructura de Trigramas».',
      },
    ],
    carlitosCallout: {
      id: 'carlitos-cap4-22',
      title: 'Contraste entre los Hexagramas 63 y 64:',
      variant: 'alchemical',
      text: 'Fijate en la danza de los trigramas: en el hexagrama 63 (Agua sobre Fuego, Después de la Consumación), la olla está al fuego y todo parece resuelto, pero ese equilibrio perfecto ya empieza a enfriarse. En el hexagrama 64 (Fuego sobre Agua, Antes de la Consumación), el fuego arde arriba y el agua fluye abajo: la tarea está pendiente y el viaje vuelve a empezar.'
    }
  },
  {
    pageNumber: 23,
    chapterId: 4,
    sectionTitle: 'Capítulo 4 — El I Ching',
    pageTitle: 'Una tirada completa: el caso del prólogo de Jung',
    subtitle: 'Hexagrama 50 (El Caldero), mutación de líneas 2 y 3, y la tendencia hacia el Hexagrama 35',
    contentType: 'iching',
    keyTerms: ['Hexagrama 50 (Dǐng)', 'Hexagrama 35 (Jìn)', 'Líneas 2 y 3 Mutantes', 'Plantilla de Decisión'],
    hexagramFigure: {
      lines: [8, 9, 9, 7, 8, 7],
      showDerived: true,
      primaryName: '50. El Caldero (Dǐng / Ting)',
      derivedName: '35. El Progreso (Jìn / Chin)',
      highlightLines: [2, 3],
      caption: 'Figura (e): Ejemplo trabajado del prólogo de Jung (1949). Hexagrama 50 (Dǐng / Ting) con líneas mutantes en las posiciones 2 y 3, transformándose en el hexagrama 35, El Progreso (Jìn / Chin).',
    },
    paragraphs: [
      'Examinemos una tirada completa siguiendo las pantallas del folio 21 con el caso histórico del prólogo de Jung de 1949. Al preguntar qué opinaba el libro sobre presentarlo a Occidente, el presente fue el Hexagrama 50, El Caldero (*Dǐng* / *Ting*), con líneas mutantes en las posiciones 2 y 3, orientando su tendencia hacia el Hexagrama 35, El Progreso (*Jìn* / *Chin*).',
      'En la pantalla del presente, el Juicio declara: «El Caldero. Suprema ventura. Éxito». La Imagen establece: «Fuego sobre madera: la imagen de El Caldero. Así el noble rectifica su posición consolidando su destino». El caldero es la vasija ritual donde los alimentos crudos se cocinan y consagran para nutrir a la comunidad: el libro mismo concebido como alimento espiritual para Occidente.',
      'En *Tus Líneas Mutantes*, leemos de abajo hacia arriba:\nLínea 2 (nueve en el segundo puesto): «En el caldero hay alimento. Mis compañeros están envidiosos, pero no pueden perjudicarme. Ventura». Revela un valor auténtico que no sufre daño.\nLínea 3 (nueve en el tercer puesto): «El asa del caldero está rota. Se ve impedido en su marcha. La grasa del faisán no se come. Mas cae la lluvia que apaga el ardor: arrepentimiento se desvanece. Al final llega la ventura». Muestra el obstáculo inicial hasta que la situación madura.',
      'En la pestaña *Tendencia*, el Hexagrama 35 anuncia el avance y expansión luminosa de la obra. Concluimos con la plantilla de tres partes (rotulada como lectura ilustrativa y vinculada a las secciones de Interpretación Rápida):\n*La situación es:* una obra con alimento espiritual valioso pero de difícil asimilación inicial.\n*El momento pide:* rectificar la posición interna con paciencia y sostener la tarea sin resentimiento.\n*El riesgo es:* apresurarse o frustrarse por el recelo inicial antes de que madure el progreso.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap4-23',
      title: 'La vasija nutricia del Caldero:',
      variant: 'alchemical',
      text: 'El caldero es el corazón de la alquimia: no rechaza los ingredientes crudos ni la leña quemada, sino que los cocina a fuego lento. Jung vio en este hexagrama que el I Ching se ofrecía como una vasija nutricia para quienes buscan integrar su psique.'
    }
  },
  {
    pageNumber: 24,
    chapterId: 4,
    sectionTitle: 'Capítulo 4 — El I Ching',
    pageTitle: 'Del texto a la decisión: usar sin abusar',
    subtitle: 'Límites éticos de la consulta, uso metódico del historial y el contraste a tres semanas',
    contentType: 'text',
    keyTerms: ['Ética de Consulta', 'Historial de la App', 'Nota Personal', 'Contraste a Tres Semanas'],
    paragraphs: [
      'El uso del oráculo se sostiene sobre una ética de responsabilidad. La regla fundamental es no delegar la decisión: el I Ching reencuadra la escena y te ofrece un espejo simbólico, pero la elección y sus consecuencias son tuyas. Realizá una sola consulta por tema; repreguntar de inmediato para forzar una respuesta complaciente desvirtúa la lectura y genera ruido.',
      'Asimismo, rigen límites estrictos: no consultar por terceros a sus espaldas vulnerando su autonomía; jamás sustituir con el oráculo diagnósticos médicos, asesoramiento legal ni decisiones financieras; y ante estados de angustia aguda o desborde emocional, no tirar monedas: detenerse, serenar el cuerpo y conversar con un profesional o una persona cercana.',
      'Para el seguimiento, utilizá la sección *Historial* de la app, que conserva las últimas diez consultas y permite la opción *Proteger consulta* para que no se borren. Registrá en el campo *Nota personal* la frase de tres partes del folio 23. Realizá un contraste a tres semanas: releé tu nota antes de volver a consultar sobre esa situación.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap4-24',
      title: 'El hexagrama 64 y la tarea inconclusa:',
      variant: 'carlitos',
      text: 'El I Ching concluye con el hexagrama 64, Wèi Jì (Antes de la Consumación), donde el zorro joven cruza el agua y moja su cola al final. El libro no promete un cierre definitivo ni una perfección estática: te recuerda que toda conclusión es el inicio de una nueva travesía.'
    }
  },
  {
    pageNumber: 25,
    chapterId: 4,
    sectionTitle: 'Capítulo 4 — El I Ching',
    pageTitle: 'Práctica guiada: tu primera tirada',
    subtitle: 'Protocolo paso a paso en siete estaciones y registro personal para tu bitácora',
    contentType: 'exercise',
    keyTerms: ['Protocolo de Tirada', 'Siete Estaciones', 'Registro de Bitácora', 'Fórmula de Tres Partes'],
    paragraphs: [
      'Esta práctica guiada reúne el método para consultar el oráculo con lucidez y criterio ético. Tomate diez minutos en silencio para recorrer cada una de las siete estaciones y registrar tu síntesis personal.'
    ],
    exerciseData: {
      id: 'ex-primera-tirada-iching',
      title: 'Práctica Guiada — Tu Primera Tirada de I Ching',
      objective: 'Realizar una consulta completa con la app del curso, formular una pregunta abierta, registrar las pantallas de presente y tendencia, redactar la frase de tres partes y fijar la fecha de contraste a tres semanas.',
      steps: [
        {
          stepNumber: 1,
          title: 'Delimitar la situación',
          instruction: 'Elegí un dilema actual personal o laboral donde tengas poder de decisión y necesites mayor perspectiva.',
        },
        {
          stepNumber: 2,
          title: 'Escribir la pregunta',
          instruction: 'Redactá una pregunta abierta orientada a tu actitud («¿Qué actitud conviene cultivar ante...?») sin buscar predicciones ni sí/no.',
        },
        {
          stepNumber: 3,
          title: 'Abrir la app',
          instruction: 'Entrá a la app de I Ching del curso y elegí una de las 4 categorías o seleccioná Consulta abierta.',
        },
        {
          stepNumber: 4,
          title: 'Tirar las monedas',
          instruction: 'Pulsá Tirar monedas línea por línea seis veces consecutivas, prestando atención a cada valor generado.',
        },
        {
          stepNumber: 5,
          title: 'Leer en orden metódico',
          instruction: 'Revisá la Interpretación Rápida, profundizá en El Juicio y La Imagen, y leé tus líneas mutantes de abajo hacia arriba.',
        },
        {
          stepNumber: 6,
          title: 'Redactar la frase y guardar',
          instruction: 'Elaborá la síntesis («La situación es... / El momento pide... / El riesgo es...») y guardala en Nota personal de la app.',
        },
        {
          stepNumber: 7,
          title: 'Fijar fecha de contraste',
          instruction: 'Marcá en tu calendario una fecha a tres semanas para revisar la nota y verificar cómo evolucionó tu decisión.',
        },
      ],
      exampleLabel: 'Ejemplo ilustrativo:',
      applicationExample: 'Pregunta: «¿Qué actitud conviene cultivar ante la propuesta de liderar este nuevo proyecto?». Presente: Hexagrama 50 con línea 2 mutante; Tendencia: Hexagrama 56. Frase registrada: «La situación es que cuento con los recursos para el rol; el momento pide humildad y sostén de mi centro; el riesgo es aislarme por temor al qué dirán». Contraste: agendado a los 21 días.',
      fields: [
        {
          key: 'iching_pregunta_personal',
          label: '1. Pregunta formulada (abierta y sin predicción):',
          placeholder: '¿Qué actitud conviene cultivar ante...?',
        },
        {
          key: 'iching_hex_presente',
          label: '2. Hexagrama presente y líneas mutantes:',
          placeholder: 'Ej. Hexagrama 50, línea 2 mutante',
        },
        {
          key: 'iching_hex_tendencia',
          label: '3. Hexagrama de tendencia:',
          placeholder: 'Ej. Hexagrama 35, El Progreso',
        },
        {
          key: 'iching_frase_sintesis',
          label: '4. Frase de tres partes (La situación es... / El momento pide... / El riesgo es...):',
          placeholder: 'La situación es... El momento pide... El riesgo es...',
          multiline: true,
        },
        {
          key: 'iching_fecha_contraste',
          label: '5. Fecha de contraste a tres semanas:',
          placeholder: 'Ej. 25 de noviembre',
        },
      ],
    },
  },

  // ==========================================
  // CAPÍTULO 5 — CUADERNO DE TRABAJO & BITÁCORA ALQUÍMICA (PÁGINAS 26 A 29)
  // ==========================================
  {
    pageNumber: 26,
    chapterId: 5,
    sectionTitle: 'Capítulo 5 — Cuaderno de Trabajo',
    pageTitle: 'Protocolo 1: Bitácora de Sueños en Cuatro Actos',
    subtitle: 'Estructuración metódica de la imagen onírica para extraer la compensación viva',
    contentType: 'exercise',
    clippedPhoto: {
      imageUrl: '/src/assets/images/vintage_mate_journal_snapshot_1790695120216.jpg',
      caption: 'El mate y el cuaderno de notas: registro matinal de los sueños',
      rotationDeg: -2.2,
      side: 'right',
      altText: 'Registro de sueños en el cuaderno de notas',
    },
    exerciseData: {
      id: 'ex-dream-journal-4acts',
      title: 'Protocolo 1 — Bitácora de Sueños en Cuatro Actos',
      objective: 'Desarmar un sueño reciente o recurrente utilizando el esquema dramático de Carlitos (Exposición, Desarrollo, Peripeteia y Lysis) para identificar la compensación homeostática exacta que tu inconsciente te está ofreciendo.',
      steps: [
        {
          stepNumber: 1,
          title: 'Acto I: Exposición (El Escenario Inicial)',
          instruction: 'Anotá dónde empieza el sueño, la atmósfera de luz o penumbra, y quiénes son los personajes presentes. ¿Qué conflicto o situación de tu vida diurna refleja este punto de partida?',
        },
        {
          stepNumber: 2,
          title: 'Acto II: Desarrollo (La Complicación)',
          instruction: 'Describí el giro donde la situación pacífica se altera: un obstáculo, un camino bloqueado, una persecución o una pérdida. ¿Qué miedo estás eludiendo reconocer de día?',
        },
        {
          stepNumber: 3,
          title: 'Acto III: Peripeteia (El Clímax)',
          instruction: 'Identificá el instante exacto de máxima tensión emocional o sorpresa simbólica. ¿Apareció una figura numinosa, un animal, un objeto extraño? No juzgues la imagen: describila con detalle.',
        },
        {
          stepNumber: 4,
          title: 'Acto IV: Lysis (El Desenlace Compensatorio)',
          instruction: 'Registrá cómo termina la escena o cómo despertaste. ¿Qué respuesta o advertencia te deja la lysis? Formulala en una sola frase contundente: "Mi alma me pide que..."',
        },
        {
          stepNumber: 5,
          title: 'Acción Concreta de Integración',
          instruction: 'El sueño muere si se queda en el papel. Definí una acción material mínima para las próximas 24 horas (una carta, una conversación, un cambio de hábito, un dibujo) que ancle la lección en la realidad.',
        },
      ],
      applicationExample: 'Escena ilustrativa (personaje compuesto): Mateo soñó que conducía a 200 km/h por una autopista lujosa pero sin frenos (Exposición/Desarrollo). En el último segundo, un viejo guardabosques con farol (Senex) le cortaba el paso con una rama verde y el auto se apagaba (Peripeteia/Lysis). Comprendió que su sobreexigencia laboral estaba al borde de provocarle un agotamiento severo. Su acción concreta fue cancelar dos compromisos innecesarios y tomarse una tarde de caminata en silencio.',
    },
    paragraphs: [
      'El trabajo con los sueños es la piedra angular del autoconocimiento y la escucha interior. Dedicarle veinte minutos a la semana a este protocolo te otorga una lucidez sobre tus verdaderas motivaciones que ningún libro teórico puede reemplazar.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap5-suenos',
      title: 'Carlitos dice con un mate en la mano:',
      variant: 'marginalia',
      text: 'Tu inconsciente es el único consejero que no te cobra un solo centavo y que trabaja mientras dormís. El único problema es que no sabe hablar en prosa de oficina: tenele paciencia para aprender a leer sus jeroglíficos.'
    }
  },
  {
    pageNumber: 27,
    chapterId: 5,
    sectionTitle: 'Capítulo 5 — Cuaderno de Trabajo',
    pageTitle: 'Protocolo 2: Registro y Auditoría de Sincronicidades',
    subtitle: 'El radar de Kairos: cómo atrapar y documentar las coincidencias con sentido en tu vida',
    contentType: 'exercise',
    exerciseData: {
      id: 'ex-synchronicity-audit',
      title: 'Protocolo 2 — Registro de Sincronicidades Cotidianas',
      objective: 'Entrenar el ojo para reconocer, documentar y descifrar las coincidencias acausales que se constelan a tu alrededor, evitando tanto la ceguera escéptica como la paranoia mágica.',
      steps: [
        {
          stepNumber: 1,
          title: 'Paso 1: El Estado Interior (La Carga Afectiva)',
          instruction: 'Anotá con precisión qué estabas sintiendo, rumiando o soñando en las últimas 48 horas. ¿Estabas angustiado por una decisión? ¿Pensando intensamente en alguien? ¿Atravesando un duelo?',
        },
        {
          stepNumber: 2,
          title: 'Paso 2: El Suceso Físico Exterior (El Hecho Material)',
          instruction: 'Describí con sobriedad el hecho fáctico que ocurrió: el libro que cayó, la llamada que entró en ese minuto, el animal que apareció, la frase exacta que alguien dijo al pasar.',
        },
        {
          stepNumber: 3,
          title: 'Paso 3: El Puente de Significado (La Chispa)',
          instruction: '¿Cuál es el significado invisible que conecta el estado interior con el hecho exterior? ¿Por qué te generó un escalofrío o sensación de numinosidad? Anotá el símbolo central.',
        },
        {
          stepNumber: 4,
          title: 'Paso 4: Auditoría Crítica (Filtro Anti-ilusión)',
          instruction: 'Aplicá tres criterios de auditoría: 1) ¿Habrías notado este suceso sin el estado emocional previo? 2) ¿Existe una explicación causal trivial o inmediata? 3) ¿Cuántas veces pensaste en algo similar sin que ocurriera nada exterior? Si tras este filtro el impacto de sentido se sostiene, pasá al paso 5.',
        },
        {
          stepNumber: 5,
          title: 'Paso 5: La Respuesta Ética',
          instruction: '¿Qué actitud o reflexión pide este acontecimiento? Regla fundamental: jamás tomes decisiones irreversibles basadas únicamente en una sincronía. Esperá a que baje la marea emocional y conversá lo ocurrido con alguien de confianza antes de actuar.',
        },
      ],
      applicationExample: 'Escena ilustrativa (personaje compuesto): Clara dudaba entre permanecer en una rutina bancaria o explorar su vocación por el arte. Mientras caminaba por una plaza preguntándose si estaba loca, una anciana desconocida se sentó a su lado, abrió un sobre manchado y le pidió que le leyera una carta porque no tenía sus anteojos. La carta comenzaba: "Nunca temas a empezar de nuevo cuando el arte es la sangre de tus venas". Clara se anotó en un taller nocturno de restauración para explorar el camino paso a paso.',
    },
    paragraphs: [
      'Llevar un cuaderno de sincronías es como afinar un instrumento de cuerda: al principio parece que el universo está callado, pero a medida que afinás tu atención, comenzás a escuchar la sinfonía de conexiones en la que estás inmerso.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap5-radar',
      title: 'Carlitos dice con mirada pícara:',
      variant: 'marginalia',
      text: 'Cuando el escarabajo golpeó la ventana de mi consultorio, no me puse a aplaudir a los espíritus: abrí la ventana, lo agarré y se lo di a mi paciente para que sanara. La magia del mundo solo sirve si la convertís en medicina terrenal.'
    }
  },
  {
    pageNumber: 28,
    chapterId: 5,
    sectionTitle: 'Capítulo 5 — Cuaderno de Trabajo',
    pageTitle: 'Protocolo 3: El Juego del Tao y la Sintonía Azarosa',
    subtitle: 'Entrenar la atención abierta a la alineación de eventos fortuitos sin forzar sincronicidades',
    contentType: 'exercise',
    exerciseData: {
      id: 'ex-juego-del-tao',
      title: 'Protocolo 3 — El Juego del Tao: Atención a la Alineación de Eventos Azarosos',
      objective: 'Ejercitar la presencia y la atención receptiva a través de una regla autoimpuesta que conecte una acción propia con un evento aleatorio cotidiano, observando cómo se alinean los hechos sin intentar manipularlos, forzarlos ni demandar sincronicidades al destino.',
      steps: [
        {
          stepNumber: 1,
          title: 'Paso 1: Establecer la Regla Autoimpuesta',
          instruction: 'El Juego del Tao comienza cuando definís una «regla autoimpuesta» que conecte de forma lúdica una acción tuya cotidiana con un evento completamente aleatorio fuera de tu control voluntario. Vos fijás el punto de encuentro: por ejemplo, caminar a paso constante y chequear si el semáforo peatonal cambia a verde en el exacto instante en que uno de tus pies toca la calle; poner a calentar la pava para el mate y acercarte a chequearla por primera vez esperando que esté en la temperatura justa sin mirar el reloj; o circular en auto y que los semáforos se abran en verde justo antes de que tengas que frenar. La regla autoimpuesta no busca predecir el futuro, sino crear un marco lúdico de atención donde tu acción y el azar del mundo se encuentran.',
        },
        {
          stepNumber: 2,
          title: 'Paso 2: Renuncia al Control y Wu Wei (No-Forzamiento)',
          instruction: 'El objetivo cardinal no es "hacer magia" ni pretender forzar una sincronicidad doblando la realidad a tu favor. Si notás tensión muscular, urgencia de ganar o ansiedad por demostrar algo, frená: ese es el ego queriendo manipular el mundo. El principio rector es el Wu Wei taoísta: actuar sin forzar, soltar la expectativa del resultado y disponerte a contemplar lo que acontezca con serenidad.',
        },
        {
          stepNumber: 3,
          title: 'Paso 3: Sintonía y Presencia Somática',
          instruction: 'Mientras el evento sigue su curso autónomo, habitá tu cuerpo en el presente. Sentí el contacto del volante o los pasos en el piso, escuchá el rumor incipiente del agua en la cocina, relajá los hombros y respirá con calma. El Juego del Tao entrena la transición de Chronos (la prisa cuantitativa) a Kairos (el momento cualitativo oportuno).',
        },
        {
          stepNumber: 4,
          title: 'Paso 4: Observación del Desenlace sin Apego ni Juicio',
          instruction: 'Llegó el momento del chequeo: ¿el semáforo abrió el paso en verde? ¿El agua estaba a 75°–80°C para cebar el mate? Si los hechos se alinearon con asombrosa precisión, disfrutá la caricia de fluidez y sintonía con el entorno sin inflarte de orgullo. Si el semáforo se puso rojo o el agua requirió más tiempo, sonreí con igual calma: el azar sigue su ley y el cosmos no trabaja como sirviente de tus caprichos.',
        },
        {
          stepNumber: 5,
          title: 'Paso 5: Registro Breve en la Bitácora',
          instruction: 'Anotá en tu cuaderno qué evento elegiste, qué grado de tensión o soltura experimentaste en la espera y qué sentiste con el desenlace. ¿Descubriste qué tan a menudo vivís intentando empujar el río? Con la práctica reiterada, este ejercicio te devuelve una agudeza perceptiva sutil para reconocer cuándo la vida te invita a avanzar y cuándo te pide esperar.',
        },
      ],
      exampleLabel: 'Bitácora de Matías (Ejemplo Real):',
      applicationExample: 'Mi propio "Juego del Tao" trata de que cuando salgo a caminar por la ciudad pongo a prueba esta sintonía con los semáforos: observar si el semáforo cambia a verde en el instante exacto en que uno de mis pies baja de la vereda y toca el asfalto de la calle. La única regla inviolable es no alterar el paso: no apurar la marcha con ansiedad para "llegar a tiempo", ni alargar o demorar la zancada para hacerla coincidir a la fuerza. Se trata de caminar con el cuerpo suelto, la respiración tranquila y la atención despierta. Cuando el pie toca la calle y la luz verde destella en ese preciso segundo sin haber intervenido en absoluto, no hay magia ni control mental sobre el tráfico: hay una silenciosa y reconfortante sensación de entrar en fase, de estar caminando en el compás exacto en el que el mundo se desenvuelve.',
    },
    paragraphs: [
      'El Tao no se impone: se atiende. En la tradición oriental que tanto cautivó a Carlitos Jung y a Richard Wilhelm, el sabio no forcejea contra las circunstancias; contempla la corriente y se acomoda a su pulso. El "Juego del Tao" no pretende convertirte en un hacedor de prodigios ni busca fabricar coincidencias artificiales: es una gimnasia cotidiana de la conciencia para aprender a notar cómo se ordenan los acontecimientos fortuitos cuando aflojás la obsesión de control.',
      'Al quitarle al azar la carga de la superstición y al ego la ilusión de omnipotencia, la mente se vuelve receptiva y porosa. De repente, el mundo exterior deja de ser un obstáculo mecánico para convertirse en un paisaje vivo donde cada suceso —desde un semáforo que abre el paso justo al apoyar el pie en la calle hasta el agua del mate— te recuerda la silenciosa alineación del Unus Mundus.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap5-tao',
      title: 'Nota de Práctica de Carlitos:',
      variant: 'alchemical',
      text: '¿Querés empujar el río para que corra más rápido, che? Te vas a cansar antes de que el agua llegue al lago. El Juego del Tao no es para que te creas un brujo que maneja los semáforos con el pensamiento; es para que te des cuenta de lo lindo que es caminar en sintonía con las cosas sin pretender mandonear al universo.'
    }
  },
  {
    pageNumber: 29,
    chapterId: 5,
    sectionTitle: 'El Manifiesto de la Completitud',
    pageTitle: 'La Gran Coniunctio y el Compromiso Ético',
    subtitle: 'La piedra filosofal, la reconciliación de los opuestos y la despedida de Carlitos junto al fuego',
    contentType: 'conclusion',
    keyTerms: ['Ganzheit / Completitud', 'Coniunctio Oppositorum', 'Lapis Philosophorum', 'El Fuego y el Mate'],
    paragraphs: [
      'Hemos recorrido las páginas de este manual por el fascinante segundo territorio de la mente profunda y las enseñanzas de Carlitos. Hemos recorrido un panorama de la Sombra Dorada, el Ánima y el Ánimus, la tensión entre el viejo Senex y el muchacho Puer, y aprendido a escuchar el teatro de cuatro actos de nuestros sueños nocturnos.',
      'Asimismo, nos atrevimos a abrir la ventana al escarabajo de la sincronicidad y aprendimos a consultar el I Ching con lucidez ética: formular una pregunta auténtica, tirar las monedas, leer el presente y su tendencia, y tomar una decisión propia.',
      'Ahora, la puerta del estudio de Küsnacht vuelve a quedar en silencio. El fuego de la chimenea crepita suavemente en la penumbra. Carlitos toma su pipa de brezo, le da una última cebada al mate argentino y te mira a los ojos con esa intensidad serena que solo tienen aquellos que han mirado a la muerte y al alma sin pestañear.',
      '"Recordá siempre esto —te dice con voz tranquila—: la meta de tu existencia humana jamás fue la perfección. La perfección es una trampa estéril del ego que busca escapar del sufrimiento. Tu verdadera meta es la *completitud* (*Ganzheit*). Completitud significa abrazar tu luz y tu barro, sostener la tensión entre tus opuestos sin quebrarte, y tener el coraje de caminar tu propio mito con la cabeza erguida."',
      'El viaje no termina aquí; apenas está comenzando. Que los símbolos de tus sueños sean tus antorchas, que las sincronías sean las piedras de tu puente, y que el recuerdo de Carlitos sea ese compañero entrañable que te susurra en la noche: *Despertá, caminá y sé quien verdaderamente sos*.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap5-cierre',
      title: 'Jung a Fanny Bowditch, carta del 22 de octubre de 1916:',
      variant: 'historical_quote',
      text: 'Tu visión se aclarará solamente cuando puedas mirar dentro de tu propio corazón. Quien mira hacia afuera sueña; quien mira hacia adentro despierta.'
    },
    secondaryCallout: {
      id: 'carlitos-mate-final',
      title: 'Dedicatoria de Carlitos:',
      variant: 'carlitos',
      text: 'Te dejo el mate servido, che. No dejes que se enfríe. La próxima charla la escribís vos con las decisiones que tomes a partir de mañana.'
    }
  }
];

export const EBOOK_PAGES: EbookPageData[] = RAW_EBOOK_PAGES.map((page) => ({
  ...page,
  pageTitle: INDICE_TITULOS[page.pageNumber] ?? page.pageTitle,
  subtitle: INDICE_SUBTITULOS[page.pageNumber] ?? page.subtitle,
}));
