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
      subtitle: 'El viaje de la individuación, la distancia Yo-arquetipo y el Eje Yo-Self',
      startPage: 5,
      endPage: 8,
      iconName: 'layers',
    },
    {
      chapterId: 2,
      title: 'Capítulo 2 — Los Sueños y el Lenguaje del Alma',
      subtitle: 'Función compensatoria, símbolos, fases dramáticas y transición a la sincronicidad',
      startPage: 9,
      endPage: 12,
      iconName: 'compass',
    },
    {
      chapterId: 3,
      title: 'Capítulo 3 — Sincronicidad: El Principio Acausal',
      subtitle: 'El escarabajo dorado, el tiempo cualitativo, la dimensión psicoide y los límites del sentido',
      startPage: 13,
      endPage: 17,
      iconName: 'award',
    },
    {
      chapterId: 4,
      title: 'Capítulo 4 — El Oráculo del I Ching y la Mente Simbólica',
      subtitle: 'El Libro de las Mutaciones, la consulta reflexiva y la decisión ética',
      startPage: 18,
      endPage: 25,
      iconName: 'grid',
    },
    {
      chapterId: 5,
      title: 'Capítulo 5 — Cuaderno de Trabajo & Bitácora Alquímica',
      subtitle: 'Protocolos de sueños, sincronicidades y el Juego del Tao',
      startPage: 26,
      endPage: 28,
      iconName: 'edit-3',
    },
    {
      chapterId: 6,
      title: 'Cierre — La Gran Coniunctio y el Manifiesto de la Completitud',
      subtitle: 'La piedra filosofal, la reconciliación de los opuestos y la despedida de Carlitos junto al fuego',
      startPage: 29,
      endPage: 29,
      iconName: 'sun',
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
      'Imaginate por un instante entrar a su estudio a orillas del lago de Zúrich en Küsnacht. Hay olor a madera de roble, tabaco aromático de pipa y papel de lino envejecido por décadas de estudio. En una pequeña mesa de té, al lado de los manuscritos del *Libro Rojo*, humea un mate con su bombilla de plata brillante. Carlitos me mira por encima de sus anteojos redondos, sonríe con esa ironía bondadosa que desarmaba a los intelectuales más arrogantes de Europa, y me dice: "Tenías razón, desayunar con esta bebida llamada mate es lo mejor que me pasó en esta etapa de mi vida". Por dentro pienso que Carlitos me recuerda un poco a Dumbledore.',
      'Este manual está dedicado a recorrer un panorama integrador de los Arquetipos avanzados y de la distancia justa que conviene sostener frente a ellos, la mecánica viva de los sueños como brújula compensatoria, la sincronicidad como puente entre la mente y la materia, y el milenario oráculo chino del *I Ching*, al que Jung dedicó décadas de estudio.',
      'No leas este libro como quien estudia para rendir un examen. Leelo como quien descifra una carta escrita con tinta invisible que sólo se revela ante el calor del fuego interior. Si estás dispuesto a sostener la mirada de tus propios símbolos, Carlitos ya tiene el mate servido para empezar a charlar.'
    ],
    carlitosCallout: {
      id: 'carlitos-intro-1',
      title: 'Criterio Epistemológico • Rigor y Apertura Simbólica',
      text: 'El abordaje del inconsciente exige esquivar dos trampas: el clásico pensamiento lógico que niega lo numinoso (lo que nos sobrecoge por su carga de misterio y de sentido) y la credulidad ingenua que evade la realidad. La mente opera como un hecho que debe investigarse con discernimiento crítico y respeto fenomenológico.'
    },
  },
  {
    pageNumber: 2,
    chapterId: 0,
    sectionTitle: 'El Segundo Umbral',
    pageTitle: 'La Realidad Psíquica y el Unus Mundus',
    subtitle: 'El puente sagrado donde la materia y la mente se tocan',
    contentType: 'introduction',
    keyTerms: ['Realidad Psíquica', 'Unus Mundus', 'Materia y mente', 'Microcosmos'],
    clippedPhoto: {
      imageUrl: IMAGE_MANIFEST.mateJournal,
      caption: 'El mate y el cuaderno de notas en Küsnacht',
      rotationDeg: 2.2,
      side: 'right',
      altText: 'Mate y cuaderno de notas de Carlitos',
    },
    paragraphs: [
      'Uno de los aportes más revolucionarios y menos comprendidos de Carl Gustav Jung es el concepto de *realidad psíquica* (*psychische Realität*). Para el hombre contemporáneo, educado en las ciencias lógicas, sólo "existe" aquello que puede pesarse en una balanza, medirse con una regla o fotografiarse con una lente óptica. Si algo ocurre en el interior del ser humano (un terror súbito, una intuición, un sueño premonitorio), la ciencia se apresura a etiquetarlo como "pura imaginación", "ilusión" o un mero desbalance neuroquímico.',
      'Carlitos invertía por completo esa soberbia. Una idea que mueve a una persona a arriesgar su vida, un símbolo que transforma una depresión paralizante en una obra de arte, o un miedo inconsciente que sabotea sistemáticamente una vocación, son hechos con un peso y una causa tan reales como una roca en el camino. Para la experiencia humana, la mente es la única realidad inmediata: todo lo que sabemos del mundo exterior entra filtrado a través de nuestros sesgados sentidos.',
      'Avanzando en su madurez, Jung rescató de la alquimia renacentista el concepto de *Unus Mundus* ("Mundo Uno"). El Unus Mundus plantea que en el estrato más profundo de la existencia, por debajo del velo de la materia, los elementos físicos y la energía mental no son dos sustancias separadas y antagónicas, sino dos aspectos complementarios de una misma realidad que es una sola. Algunos divulgadores la comparan con ideas de la física contemporánea, como la Teoría de Cuerdas, aunque es una analogía y no una equivalencia.',
      'Cuando un suceso exterior (como la aparición de un animal o el encuentro casual con una persona clave) coincide de forma asombrosa con un estado interior cargado de significado, no estamos ante una simple fantasía: Jung lo pensó como una manifestación del *Unus Mundus*, donde el orden físico y el anímico se muestran como dos aspectos complementarios de una misma realidad profunda.'
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
      '1922: Jung adquiere el terreno en Bollingen.',
      '1923: Fallece la madre de Jung; inicia la construcción de la primera torre redonda.',
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
      title: 'Anotación Histórica • La Función Psíquica de Bollingen',
      text: 'La edificación en piedra de Bollingen encarna la necesidad de desaceleración psicofísica para el trabajo analítico. Al prescindir de comodidades técnicas, Jung comprobó que la relación viva con las figuras arquetípicas exige silencio, lentitud y contacto elemental con la materia.'
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
      '1952: Publican juntos el libro conjunto: La interpretación de la naturaleza y la mente (Naturerklärung und Psyche).',
      '1958: Fallecimiento de Pauli; el archivo epistolar confirma una de las colaboraciones interdisciplinarias más brillantes del siglo XX.'
    ],
    paragraphs: [
      'Uno de los argumentos más repetidos por los detractores de Jung consiste en acusarlo de "esoterismo" o "misticismo". Carlitos es en lo profundo un hombre de ciencias y ha expresado en varias ocasiones que le da culpa enseñar ideas que nunca se van a poder comprobar científicamente, pero al menos ha tenido amistades con científicos como Wolfgang Pauli (Premio Nobel de física y uno de los grandes pioneros de la mecánica cuántica).',
      'Pauli llegó a la consulta de Jung en 1932, atravesando un severo colapso nervioso tras un divorcio traumático y una crisis de sentido científico. Jung intuyó de inmediato la extraordinaria potencia intelectual de su paciente y derivó su análisis cotidiano a su discípula Erna Rosenbaum, reservándose la supervisión general. A lo largo de los años, Jung recopiló y analizó minuciosamente más de 400 sueños y visiones de Pauli (que posteriormente constituyeron el material clínico central de su monumental obra *Psicología y alquimia*).',
      'El intercambio epistolar entre ambos fue un auténtico laboratorio donde colisionaron los dos extremos del conocimiento humano: Pauli aportaba el rigor matemático, la física atómica y la noción de complementariedad de Niels Bohr; Jung aportaba la fenomenología arquetípica, la alquimia y el inconsciente colectivo.',
      'De esta colaboración titánica surgió buena parte de la formulación de la *Sincronicidad*: la hipótesis de que el universo no sólo se rige por la causalidad lineal (A empuja a B en el espacio-tiempo), sino también por un *principio acausal* de conexión por sentido o significado. Pauli y Jung exploraron la convergencia entre la física cuántica y la psicología profunda. Esa hipótesis es el hilo que retomaremos en el capítulo 3.'
    ],
    carlitosCallout: {
      id: 'carlitos-bio-pauli',
      title: 'Fundamento Epistolar • Entrelazamiento mente-Materia',
      variant: 'carlitos',
      text: 'El diálogo epistolar entre Jung y Wolfgang Pauli postuló que observador y observado están indisolublemente vinculados. Física cuántica y psicología profunda convergen en el reconocimiento de una base psicoide común que la causalidad mecanicista lineal no logra agotar.'
    }
  },

  // ==========================================
  // CAPÍTULO 1 — ARQUETIPOS II: DINÁMICAS PROFUNDAS (PÁGINAS 5 A 8)
  // ==========================================
  {
    pageNumber: 5,
    chapterId: 1,
    sectionTitle: 'Capítulo 1 — Arquetipos II',
    pageTitle: 'El Viaje de la Individuación: De los Arquetipos a la Totalidad',
    subtitle: 'El itinerario dinámico de la psique: del despertar simbólico a la integración en espiral',
    contentType: 'text',
    keyTerms: [
      'Individuación',
      'Viaje en Espiral',
      'Integración Arquetípica',
      'Totalidad Dinámica',
    ],
    paragraphs: [
      'El trabajo con los arquetipos no es un ejercicio intelectual ni una meta que se conquista de una vez y para siempre; es un movimiento vivo que compromete la existencia entera. Para orientarnos en este territorio, podemos concebir la individuación como un recorrido progresivo organizado en seis momentos formativos que describen cómo una persona madura en su relación con las fuerzas de lo inconsciente:',
      '**1. El descubrimiento y el reconocimiento:** En primer lugar, la persona comienza a advertir que existen fuerzas, imágenes y patrones que influyen en sus decisiones, afectos y conflictos más allá de su voluntad consciente. Poco a poco, aprende a identificar las proyecciones y los complejos que antes atribuía de forma ingenua y exclusiva a los demás o a los azares del mundo exterior.',
      '**2. La confrontación y la integración:** Al ingresar en este diálogo, descubre que relacionarse con la energía arquetípica encierra riesgos reales: perder la distancia necesaria, inflarse con mandatos grandiosos o quedar dominada por una figura fascinante. La madurez exige confrontar esas tensiones sin someterse a ellas, aprendiendo a dialogar con sus contradicciones íntimas para ensanchar la personalidad consciente.',
      '**3. La individuación y el nuevo comienzo:** Con el tiempo, el Yo forja un vínculo más equilibrado con el Self, y la persona se vuelve más diferenciada, sobria y completa. Pero una integración nunca clausura la vida: la individuación no es una línea recta con una meta definitiva, sino un viaje en espiral donde cada ciclo superado constela nuevos desafíos, preguntas y dimensiones insospechadas de la psique.',
      'Conviene subrayar que este recorrido constituye una síntesis pedagógica para ordenar la mirada, y no una secuencia rígida que todas las personas deban transitar de manera idéntica. Comprender esta espiral nos prepara para examinar, en las páginas que siguen, la escala de distancia que salva al Yo de la absorción.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap1-viaje-individua',
      title: 'Dinámica de Proceso • La Espiral de la Individuación',
      text: 'La individuación no persigue una perfección estática ni la eliminación de las contradicciones humanas. Opera como una espiral continua donde cada síntesis alcanzada abre paso a un nivel más hondo de discernimiento ético y autoconocimiento.'
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
    ],
    clippedPhoto: {
      imageUrl: IMAGE_MANIFEST.mateJournal,
      caption: 'Cuaderno de notas y mate en el estudio: calibrando la distancia con lucidez',
      rotationDeg: 2.4,
      side: 'right',
      altText: 'Apuntes de Carlitos sobre la distancia arquetípica',
    },
    paragraphs: [
      'Habiendo cartografiado las figuras arquetípicas en el primer tomo (la Sombra, el Ánima y el Ánimus, el Senex y el Puer), la pregunta que abre este segundo volumen no es quiénes son, sino a qué distancia nos paramos frente a ellas.',
      'Uno de los mapas más reveladores y prácticos que Carlitos nos legó para entender qué nos ocurre cuando una fuerza profunda nos conmueve es el *continuo de pérdida de distancia Yo-arquetipo*. Frente a la energía viva de un arquetipo, nuestro Yo no se queda quieto: se mueve a lo largo de una escala según cuánta distancia y lucidez logre sostener. Este continuo se organiza en torno a tres puntos de referencia fundamentales:',
      '**1. Proyección (Distancia máxima):** En este primer punto, el contenido se deposita afuera; el Yo queda intacto. Vemos la cualidad arquetípica encarnada en otra persona o circunstancia (el líder perfecto, el rival monstruoso, el salvador o el amor idealizado). Aunque nuestra percepción del otro queda teñida por esa imagen, nuestro Yo conserva su capacidad de pensar y su identidad habitual separada.',
      '**2. Identificación / Inflación (Pérdida intermedia de distancia):** Aquí el contenido se funde con el Yo, colapsando en un solo bloque lo que antes eran dos fenómenos separados. Al identificarse con el arquetipo, el Yo se atribuye a su pequeña persona facultades, dones o misiones grandiosas (creerse el Salvador indispensable, el Sabio supremo o el Mártir incomprendido). Se borra la frontera entre nuestra imperfección humana y la magnitud del arquetipo, gestando una embriaguez de grandeza que anticipa el colapso.',
      '**3. Posesión (Colapso total de distancia):** Es el punto extremo del camino. En la posesión, el Yo pierde por completo la capacidad de razonar; el arquetipo tiene el control de nosotros. La voluntad consciente queda a un costado o anulada. Ya no decidimos nosotros: somos hablados y actuados por la fuerza arquetípica que nos tomó por asalto, desde los fanatismos colectivos hasta el arrepentimiento porque en una situación no era yo mismo.',
      'Para cuidar nuestro equilibrio y crecer en sabiduría, necesitamos reconocer en qué punto de este continuo nos encontramos ante cada crisis, evitando tanto la disociación [1] como la literalización [2] del símbolo vivo. En los momentos de mayor soberbia o inflación heroica, figuras como el *Trickster* (el Embaucador) irrumpen oportunamente con un tropiezo, un fallo cómico o una ironía de la vida para desarmar la fusión antes de que sea tarde.'
    ],
    footnotes: [
      {
        number: 1,
        term: 'Disociación',
        note: 'Respuesta defensiva en la que, al verse desbordada la mente frente a una emoción o fuerza arquetípica desmedida, la mente se fractura en partes autónomas que operan a escondidas del Yo consciente.',
      },
      {
        number: 2,
        term: 'Literalización',
        note: 'Error de perspectiva consistente en degradar la metáfora y el símbolo vivo a un hecho puramente literal, material o físico. Al tomar la imagen al pie de la letra, cancelamos su sabiduría profunda y caemos en el dogmatismo ciego o en el malestar somático.',
      },
    ],
    carlitosCallout: {
      id: 'carlitos-cap1-distancia',
      title: 'Principio de Calibración • La Distancia Justa Yo-Arquetipo',
      text: 'La relación con las imágenes numinosas exige una equidistancia precisa: la lejanía defensiva petrifica al Yo en la frialdad de la proyección, mientras que el acercamiento desmedido conduce a la inflación y a la pérdida de la voluntad soberana.'
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
      title: 'Función Homeostática • El Trickster contra la Inflación',
      text: 'La inflación heroica del Yo —creerse el centro indispensable de la realidad— halla su correctivo natural en el humor y el tropiezo. El arquetipo del Trickster desmonta la grandilocuencia egóica recordándole a la conciencia su fragilidad y sus límites terrenales.'
    }
  },
  {
    pageNumber: 8,
    chapterId: 1,
    sectionTitle: 'Capítulo 1 — Arquetipos II',
    pageTitle: 'El Self / Sí-Mismo y la Distancia Justa',
    subtitle: 'La cuadratura del círculo, el mandala de la totalidad y la reconciliación del Eje Yo-Self',
    contentType: 'text',
    keyTerms: ['Self / Sí-Mismo', 'Eje Yo-Self†', 'Distancia Justa'],
    paragraphs: [
      'Llegamos a la cumbre integradora de este primer capítulo: comprender la relación entre el *Yo* y el *Self* (el Sí-Mismo). Para evitar confusiones, conviene distinguirlos con nitidez: el Yo es el centro de la conciencia, el punto focal con el que nos identificamos cada vez que decimos «yo pienso», «yo quiero» o «yo decido». El Self, en cambio, no es una entidad externa que da órdenes ni un Yo idealizado y moralmente perfecto: es la totalidad viva de la psique, que abraza tanto nuestros contenidos conscientes como los inconscientes, funcionando como el principio ordenador de esa totalidad.',
      'Un ejemplo cotidiano ayuda a ver la diferencia: imaginemos a una persona empeñada en conseguir un ascenso laboral. Su Yo consciente está convencido de que ese puesto es indispensable: organiza minuciosamente su agenda, extiende sus jornadas y redobla el esfuerzo. Sin embargo, al cabo de unos meses empieza a padecer agotamiento severo, irritabilidad inexplicable y sueños reiterados en los que se encuentra encerrada en una oficina sin ventanas. Desde una mirada junguiana, esos síntomas no son fallas mecánicas, sino manifestaciones del Self que señalan dimensiones que la actitud consciente desatendió: la necesidad de descanso, el anhelo de libertad o una vocación postergada. El Yo decide, pero el Self contiene el cuadro completo.',
      'El drama contemporáneo ha sido la fractura de este *Eje Yo-Self*. Al creerse dueño absoluto de la realidad psíquica, el intelecto cae en la neurosis y el vacío de sentido. Las tradiciones sapienciales representaron esta totalidad en mandalas de cuatro cuadrantes, cruces simétricas o en el *Lapis* alquímico: símbolos que recuerdan que la vida psíquica posee un centro regulador que trasciende la visión parcial de la conciencia.',
      'La individuación (el proceso de diferenciación e integración por el cual una persona llega a ser la totalidad que verdaderamente es) no exige disolver el Yo, sino educarlo éticamente. Un Yo sano se sitúa en la distancia justa: ni inflado con soberbia ni disociado en el miedo. Se convierte en el piloto atento y respetuoso del Self, sabiendo cuándo actuar en el mundo cotidiano y cuándo guardar silencio para escuchar el rumbo que la totalidad le señala.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap1-self',
      title: 'Estructura Arquetípica • El Eje Yo-Self y la Totalidad',
      text: 'El Yo opera como el centro de la voluntad consciente, mientras que el Self constituye la matriz y la totalidad que lo contiene. El propósito de la individuación no es la soberanía aislada del intelecto, sino su reconciliación subordinada con el centro regulador de la mente.'
    }
  },

  // ==========================================
  // CAPÍTULO 2 — SUEÑOS Y EL LENGUAJE DEL ALMA (PÁGINAS 9 A 12)
  // ==========================================
  {
    pageNumber: 9,
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
      'La premisa fundamental de Carlitos es que la mente es un *sistema autorregulado*, análogo al organismo biológico. Si tu cuerpo se recalienta por el esfuerzo o la fiebre, las glándulas sudoríparas producen sudor para restablecer el equilibrio homeostático. Del mismo modo, si tu mente consciente adopta durante el día una actitud unilateral —por ejemplo, un orgullo desmedido, una frialdad hiperracional o un sacrificio complaciente que borra tus límites—, la mente profunda genera por la noche un sueño para empujar la balanza en la dirección opuesta.',
      'Esta es la *función compensatoria* del sueño. El sueño de una persona que se siente infalible y todopoderosa suele situarla caminando al borde de un precipicio resbaloso o descalza en un lodazal; el sueño de alguien apocado y lleno de culpa puede revelarle un león dorado rugiendo en su sala de estar. No son castigos ni profecías mágicas: son correcciones homeostáticas indispensables.',
      'Asimismo, los sueños poseen una dimensión *teleológica* (orientada a un propósito futuro): no se limitan a indicar de dónde venimos o qué traumas infantiles arrastramos, sino hacia dónde busca fluir la energía psíquica para completar nuestra individuación.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap2-compensacion',
      title: 'Cita Histórica de C. G. Jung (Obras Completas, vol. 10, §304):',
      variant: 'historical_quote',
      text: 'El sueño es la pequeña puerta escondida en el santuario más íntimo y secreto del alma, que se abre hacia esa noche cósmica que era mente mucho antes de que existiera el Yo consciente, y que seguirá siendo mente mucho después de que este haya desaparecido.'
    }
  },
  {
    pageNumber: 10,
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
      title: 'Criterio Hermenéutico • La Polisemia Viva del Símbolo',
      text: 'Los diccionarios oníricos prefijan significados estáticos que destruyen la naturaleza viva del símbolo. La interpretación rigurosa exige el método de amplificación: articular las asociaciones biográficas del soñador con los motivos míticos universales sin encasillarlos en fórmulas cerradas.'
    }
  },
  {
    pageNumber: 11,
    chapterId: 2,
    sectionTitle: 'Capítulo 2 — Los Sueños',
    pageTitle: 'La Estructura Dramática del Sueño Junguiano',
    subtitle: 'Los cuatro actos del drama onírico: Exposición, Desarrollo, Culminación y Lysis',
    contentType: 'text',
    keyTerms: ['Estructura Dramática', 'Exposición', 'Desarrollo', 'Peripeteia', 'Lysis'],
    clippedPhoto: {
      imageUrl: '/src/assets/images/alchemical_dreams_mandala_1790692414590.jpg',
      caption: 'Mandala onírico del inconsciente y los cuatro cuadrantes de la mente',
      rotationDeg: -1.8,
      side: 'right',
      altText: 'Mandala alquímico del sueño',
    },
    paragraphs: [
      'Al observar el material onírico a lo largo de décadas de práctica clínica, Jung comprobó que muchos sueños pueden analizarse mediante una estructura dramática de cuatro fases, análoga a la de un drama clásico. No se trata de una fórmula universal ni de un molde rígido en el que todo sueño deba encajar a la fuerza: funciona más bien como una valiosa herramienta de observación para ordenar el relato e interpretar el movimiento de la psique.',
      '**1. Exposición / Planteamiento:** El sueño suele fijar con precisión el tiempo, el espacio y los personajes involucrados. "Estoy en la casa de mi abuela de la infancia, pero es de noche y el río cercano está crecido". Esta escena inicial sitúa el punto de partida del conflicto psíquico actual del soñador.',
      '**2. Desarrollo / Nudo:** La trama se pone en movimiento y surge una complicación. "Entro a la cocina y descubro que todas las puertas están cerradas con candados antiguos; escucho pasos apresurados afuera". Aquí se revela la tensión entre la actitud consciente y el obstáculo que el Yo no quiere ver.',
      '**3. Culminación o Peripeteia:** Es el clímax o punto de inflexión donde ocurre un giro decisivo, a menudo inesperado o sobrecogedor. "Al forzar la ventana para escapar, un cuervo negro con una llave dorada en el pico entra volando y se posa sobre mi hombro". La energía psíquica alcanza su máxima tensión simbólica.',
      '**4. Desenlace o Lysis:** El desenlace del drama, que contiene la clave de la compensación. La lysis puede ser armónica (la llave abre el sótano), trágica (la casa se derrumba advirtiendo un peligro real) o abierta (el soñador despierta con una pregunta suspendida en el pecho). Registrar minuciosamente la lysis es descubrir qué pide la mente para reorientar el rumbo.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap2-estructura',
      title: 'Guía Metódica • La Clave de la Lysis Onírica',
      text: 'El esquema en cuatro fases no es una plantilla que fuerce a todos los sueños, sino un método analítico de observación. Cuando el sueño presenta desenlace, el examen de su resolución dramática revela la compensación homeostática que el inconsciente ofrece a la vigilia.'
    }
  },
  {
    pageNumber: 12,
    chapterId: 2,
    sectionTitle: 'Capítulo 2 — Los Sueños',
    pageTitle: 'Del Sueño a la Sincronicidad: Cuando el Sentido Encuentra al Mundo Exterior',
    subtitle: 'El puente entre la escena interior y el acontecimiento objetivo',
    contentType: 'text',
    keyTerms: ['Escena Interior', 'Mundo Exterior', 'Sentido Compartido', 'Puente Simbólico'],
    paragraphs: [
      'Los sueños son una manifestación espontánea y autónoma de la actividad inconsciente. Hablan a través de un lenguaje puramente interior: imágenes nocturnas, metáforas afectivas y dramas simbólicos que no dependen de la voluntad consciente. Trabajar con ellos nos permite escuchar aquello que la actitud diurna suele pasar por alto, ampliando el conocimiento sobre nuestras motivaciones más íntimas.',
      'Sin embargo, cuando aprendemos a prestar atención al sentido simbólico, surge una pregunta que trasciende los confines del descanso nocturno: ¿qué sucede cuando un estado interior cargado de significado coincide en el tiempo con un acontecimiento del mundo físico exterior, sin que medie ningún lazo de causa y efecto conocido? Aquí es donde el camino nos conduce desde la escena onírica hacia la *sincronicidad*.',
      'Es fundamental no confundir ambos fenómenos ni tratarlos como idénticos. El sueño se despliega íntegramente dentro de la geografía anímica personal; la sincronicidad, en cambio, entrelaza esa experiencia interna con hechos materiales y objetivos del entorno. Lo que comparten es que ninguno de los dos debe degradarse a profecía mágica o mandato literal: ambos exigen una actitud madura de observación, discernimiento y prudencia hermenéutica.',
      '¿Qué ocurre, entonces, cuando el significado que brota en el silencio de nuestra experiencia interior parece encontrar un correlato inesperado e incontestable en el mundo exterior? Esa es la inquietud acausal que abre el capítulo siguiente.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap2-puente-sincro',
      title: 'Transición Conceptual • De Adentro hacia Afuera',
      text: 'El sueño nos confronta con el lenguaje autónomo de nuestra intimidad psíquica; la sincronicidad nos plantea la resonancia de ese significado en el mundo fáctico. Reconocer la diferencia entre ambos preserva la sobriedad del trabajo analítico.'
    }
  },

  // ==========================================
  // CAPÍTULO 3 — SINCRONICIDAD: EL PRINCIPIO ACAUSAL (PÁGINAS 13 A 17)
  // ==========================================
  {
    pageNumber: 13,
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
      'Si en los capítulos anteriores vimos cómo los arquetipos se expresan hacia adentro (en la dinámica psíquica y en los sueños), en este tercer capítulo exploramos cómo esa misma energía resuena hacia afuera, en los hechos del mundo.',
      'Existe una anécdota clínica célebre en la historia de la psicología moderna que Carlitos solía relatar con una mezcla de picardía y devoción: el caso de la joven paciente suiza y el *escarabajo dorado*.',
      'Se trataba de una mujer de elevada cultura y brillante formación académica, pero cuya actitud psicológica estaba completamente acorazada por un racionalismo cartesiano impenetrable. Cada interpretación, cada intento de aproximación terapéutica era desarmado de inmediato por su intelecto implacable. El análisis se encontraba en un callejón sin salida; la mente de la paciente era como una fortaleza de hormigón donde nada numinoso podía penetrar.',
      'Una tarde primaveral, sentada frente a Carlitos en su consultorio de Küsnacht, la mujer comenzó a relatar un sueño que había tenido la noche previa: alguien le regalaba un costoso broche de oro con la figura de un escarabajo joya egipcio. En el momento exacto en que pronunciaba esas palabras, Jung escuchó un golpecito suave y rítmico en el cristal de la ventana que daba al jardín.',
      'Carlitos se levantó en silencio, abrió la ventana y atrapó al vuelo en el aire a un insecto grande: era un *Cetonia aurata* (el escarabajo verde-oro o escarabajo de las rosas), primo europeo del escarabajo sagrado egipcio, un insecto que, contra sus costumbres, entró volando a un cuarto en penumbra. Jung se acercó a la paciente, abrió su mano y con una sonrisa le dijo suavemente: "Aquí tiene a su escarabajo". La coraza racionalista de la paciente se quebró al instante en lágrimas de conmoción; el racionalismo cedió y la terapia pudo avanzar.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap3-escarabajo',
      title: 'Función Clínica • Ruptura de la Coraza Intelectual',
      text: 'El evento sincrónico de Küsnacht ilustra que la coincidencia acausal irrumpe con máxima eficacia cuando el aparato racional de la conciencia ha llegado a un callejón sin salida, abriendo un canal de afecto y sentido que destraba el proceso analítico.'
    }
  },
  {
    pageNumber: 14,
    chapterId: 3,
    sectionTitle: 'Capítulo 3 — Sincronicidad',
    pageTitle: 'Causalidad vs. Sincronicidad: El Tiempo Cualitativo',
    subtitle: 'De Chronos a Kairos: la diferencia entre la causa mecánica y la coincidencia de sentido',
    contentType: 'text',
    keyTerms: ['Chronos vs Kairos†', 'Causalidad Clásica', 'Conexión Acausal', 'Tiempo Cualitativo'],
    paragraphs: [
      'Para formalizar este fenómeno ante la comunidad científica, Jung formuló en 1952 su célebre tratado *La sincronicidad como principio de conexiones acausales*. ¿Qué es exactamente una sincronicidad? Es la coincidencia temporal de dos o más acontecimientos que no están vinculados por una relación de causa y efecto mecánicos, pero cuyo enlace revela un *significado compartido* y profundamente conmovedor para el sujeto.',
      'La ciencia de Newton se basa en *Chronos*: el tiempo cuantitativo del reloj, medido en segundos y minutos homogéneos e indiferentes. En Chronos, si una piedra cae al suelo es porque la gravedad la atrajo; si una bola de billar choca contra otra, le transfiere su momento cinético. Todo se explica mirando hacia el pasado.',
      'La sincronicidad, en cambio, opera en la dimensión de *Kairos*: el tiempo del momento propicio, el tiempo cualitativo de los griegos donde el universo se carga de sentido. Jung clasificó las sincronicidades en tres categorías operativas: 1. Coincidencia entre un estado mental interior (pensamiento, emoción intensa) y un suceso material exterior simultáneo; 2. Coincidencia entre un estado mental y un suceso exterior distante en el espacio que luego se verifica; 3. Coincidencia entre un estado mental y un suceso futuro que todavía no ha tenido lugar.',
      'Comprender la sincronicidad no nos lleva a una superstición ingenua donde vemos señales en cada semáforo rojo, sino a una reverencia atenta: la realidad parece dialogar con nosotros cuando nos encontramos en un cruce de caminos decisivo.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap3-definicion',
      title: 'Definición Técnica de C. G. Jung (OC 8, §849–850):',
      variant: 'historical_quote',
      text: '«...la coincidencia temporal de dos o más sucesos no vinculados causalmente, que tienen el mismo o semejante significado». Jung propuso este fenómeno como un principio de ordenación acausal que se sitúa en pie de igualdad con la causalidad clásica.'
    }
  },
  {
    pageNumber: 15,
    chapterId: 3,
    sectionTitle: 'Capítulo 3 — Sincronicidad',
    pageTitle: 'Los Arquetipos Psicoides: El Puente entre mente y Materia',
    subtitle: 'Cuando la fuerza arquetípica traspasa las fronteras del cerebro y resuena en la naturaleza física',
    contentType: 'text',
    keyTerms: [
      'Arquetipo Psicoide',
      'Unus Mundus',
      'Límite Psique-Materia',
      'Wolfgang Pauli',
      'Hipótesis Filosófica',
    ],
    clippedPhoto: {
      imageUrl: IMAGE_MANIFEST.goldenScarab,
      caption: 'Reliquia del escarabajo dorado: cuando el arquetipo resuena en la experiencia',
      rotationDeg: 2.6,
      side: 'right',
      altText: 'Escarabajo dorado sobre manuscrito antiguo',
    },
    paragraphs: [
      'Para comprender por qué un estado psíquico interior puede coincidir significativamente con un hecho físico exterior sin una causa mecánica que los ligue, tenemos que profundizar en la naturaleza del arquetipo. Un error habitual consiste en confundir el arquetipo con una imagen mental concreta o con una idea almacenada en los lóbulos cerebrales.',
      'En sus años de madurez —y a raíz del intenso intercambio epistolar y conceptual que mantuvo con el físico Wolfgang Pauli—, Jung acuñó el término *psicoide* (*psychoid*) para señalar una dimensión de la realidad que no puede describirse completamente como un fenómeno psíquico en el sentido convencional. El arquetipo en sí mismo no es directamente accesible a la conciencia: aquello que conocemos son sus manifestaciones a través de imágenes, símbolos, metáforas y conductas.',
      'El concepto de lo psicoide permite explorar el límite sutil entre lo psíquico y lo fisiológico, y reflexionar sobre la relación entre psique y materia. En este marco, Jung recuperó la antigua noción alquímica y filosófica del *Unus Mundus* (el mundo uno): la hipótesis conceptual de que mente y materia podrían constituir dos aspectos complementarios de una realidad subyacente más honda. Conviene subrayar que se trata de una hipótesis filosófica y hermenéutica, no de una ley física comprobada en laboratorio ni de una equivalencia directa con la mecánica cuántica.',
      'Jung buscaba pensar una realidad más profunda que la rígida separación cartesiana entre mente y materia, sin postular en ningún momento que los pensamientos muevan objetos físicos o controlen el mundo material. Psique y naturaleza comparten un trasfondo común de orden, sin que la conciencia ejerza omnipotencia alguna sobre los hechos.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap1-psicoide',
      title: 'Síntesis Conceptual • La Naturaleza Psicoide',
      variant: 'alchemical',
      text: 'El término psicoide nombra la raíz del arquetipo que trasciende la conciencia subjetiva. No afirma que la mente controle la materia, sino que sugiere, como hipótesis filosófica afín al Unus Mundus, una base común donde lo psíquico y lo fáctico convergen en significado.'
    }
  },
  {
    pageNumber: 16,
    chapterId: 3,
    sectionTitle: 'Capítulo 3 — Sincronicidad',
    pageTitle: 'La Brújula del Destino: Señales en la Vida Cotidiana',
    subtitle: 'Cómo y cuándo se constelan las sincronías en los umbrales de transformación personal',
    contentType: 'text',
    keyTerms: ['Coincidencia Significativa', 'Carga Afectiva', 'Umbral de Cambio', 'Reflexión Psicológica'],
    clippedPhoto: {
      imageUrl: '/src/assets/images/golden_scarab_alchemical_relic_1790692388946.jpg',
      caption: 'Amuleto del escarabajo dorado sobre el manuscrito de notas',
      rotationDeg: 2.2,
      side: 'left',
      altText: 'Escarabajo dorado de la sincronicidad',
    },
    paragraphs: [
      '¿En qué circunstancias suelen advertirse las sincronicidades en la vida cotidiana? La experiencia clínica de Jung revela que las coincidencias significativas no se presentan de forma constante ni programada; tienden a constelarse en momentos de intensa carga emocional o encrucijada vital: durante una crisis de vocación, un duelo, el comienzo de un vínculo apasionado o la transición del ecuador de la vida.',
      'Sin embargo, es esencial evitar malentendidos: las sincronicidades no aparecen únicamente durante crisis extremas, no constituyen señales que indiquen un destino obligatorio ni representan instrucciones cósmicas que estemos compelidos a obedecer. Que una coincidencia resulte conmovedora para quien la vive no la transforma en una prueba científica objetiva de que el universo le envía un mandato exterior.',
      'Su auténtico valor psicológico reside en la reflexión que despierta y en las asociaciones personales que permite explorar. En lugar de imaginar la sincronicidad como una brújula infalible que traza el futuro, es más fecundo entenderla como una ocasión privilegiada para observar nuestra propia situación desde otra perspectiva.',
      'Ante una coincidencia significativa, las preguntas pertinentes no buscan predecir sino discernir: ¿por qué este acontecimiento adquirió tanta relevancia íntima para mí? ¿Qué estaba sintiendo o pensando cuando ocurrió? ¿Qué asociaciones me despierta y qué aspecto de mi dilema me ayuda a reconsiderar? ¿Estoy interpretando con libertad o forzando el sentido para confirmar algo que ya deseaba creer?'
    ],
    carlitosCallout: {
      id: 'carlitos-cap3-brujula',
      title: 'Criterio Hermenéutico • Ocasión de Perspectiva',
      text: 'Una coincidencia de sentido no es una orden exterior ni una prueba mágica del destino. Su fecundidad radica en invitar a la conciencia a detenerse, revisar sus supuestos y observar la encrucijada personal desde un ángulo más amplio.'
    }
  },
  {
    pageNumber: 17,
    chapterId: 3,
    sectionTitle: 'Capítulo 3 — Sincronicidad',
    pageTitle: 'Sentido No Es Destino: Alcances y Límites de la Sincronicidad',
    subtitle: 'El discernimiento entre el hecho fáctico, la resonancia subjetiva y la tentación determinista',
    contentType: 'text',
    keyTerms: ['Hecho vs Interpretación', 'Límites Epistemológicos', 'Numens y Subjetividad', 'Puente al I Ching'],
    paragraphs: [
      'Para trabajar con la sincronicidad sin extraviarnos en el pensamiento mágico ni en el escepticismo ciego, necesitamos deslindar con sobriedad sus cinco componentes estructurales:\n1. **El acontecimiento exterior:** el hecho fáctico y verificable que ocurre en el mundo físico.\n2. **El estado psíquico interior:** el pensamiento, emoción, sueño o inquietud que ocupaba a la persona.\n3. **La coincidencia temporal:** el enlace acausal entre ambos sucesos en un mismo tiempo cualitativo.\n4. **La interpretación:** el significado íntimo que la persona atribuye a ese cruce, el cual requiere examen crítico.\n5. **Los límites de validez:** la frontera ética que impide confundir una coincidencia de sentido con una causa física o un mandato del destino.',
      'Un ejemplo cotidiano ayuda a distinguir el hecho de su lectura: imaginemos a una persona que piensa con intensidad y nostalgia en un amigo de la juventud al que no ve desde hace años. Minutos después, suena su teléfono y es precisamente ese amigo. El hecho objetivo es la llamada entrante. La coincidencia es su sincronía temporal con el pensamiento previo. El significado subjetivo puede ser profundo y conmovedor, pero esa intensidad afectiva no demuestra que el pensamiento haya generado la llamada ni que exista una fuerza cósmica ordenando el reencuentro.',
      'El impacto emocional o la sensación de numinosidad son indicios valiosos de la relevancia personal de una experiencia, pero no constituyen una demostración de su carácter acausal objetivo ni una garantía de verdad exterior. Cuando la persona olvida este límite, cae fácilmente en asociaciones forzadas o en la proyección de sus propios anhelos sobre el entorno.',
      'Esta comprensión lúcida nos sitúa ante la puerta del siguiente capítulo: el *I Ching* permite explorar deliberadamente una relación simbólica con el momento presente. Pero al igual que ocurre con la sincronicidad espontánea, su consulta no debe confundirse jamás con una garantía de predicción ni con un mecanismo para controlar el porvenir.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap3-sentido-no-destino',
      title: 'Distinción Metódica • La Frontera del Sentido',
      text: 'El sentido atribuido a una coincidencia es una construcción del sujeto frente a lo vivido, no una propiedad física del hecho exterior. Distinguir el acontecimiento de su interpretación es la garantía ética que protege al autoconocimiento de la superstición.'
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
    subtitle: 'Richard Wilhelm, la sincronicidad y el oráculo como fotografía del tiempo cósmico',
    contentType: 'text',
    keyTerms: ['Richard Wilhelm', 'Reloj del Universo', 'Fotografía de Fuerzas', 'Sincronicidad'],
    illustrationImage: {
      src: IMAGE_MANIFEST.ichingCoins,
      alt: 'Monedas de consulta del I Ching',
      caption: 'Las tres monedas para la consulta: el método que Jung empleó para interrogar la cualidad del momento.',
      credit: 'Ilustración',
      aspect: 'landscape',
    },
    paragraphs: [
      'Carl Gustav Jung afirmó en su prólogo de 1949 que llevaba más de treinta años experimentando con el *I Ching* (*Yì Jīng*, o *Libro de las Mutaciones*). Ese prólogo presentaba la traducción de Richard Wilhelm, el sinólogo alemán que residió más de dos décadas en China traduciendo los clásicos bajo la guía de maestros orientales. Nacido como manual de adivinación, el libro fue sumando con los siglos capas filosóficas que lo volvieron un mapa dinámico del cambio, la polaridad y los ritmos cualitativos de la naturaleza.',
      'Para Jung, el I Ching opera como un **reloj del tiempo del universo** o una **fotografía instantánea que mide las fuerzas en juego**. Mientras la ciencia occidental mide el tiempo cuantitativamente (cuántos minutos u horas pasan), el pensamiento oriental lo comprende de forma cualitativa: cada instante posee una tonalidad psíquica y cósmica irrepetible. Al consultar el libro, la caída azarosa de las monedas captura un mapa de las energías activas en ese preciso segundo.',
      'En ese prólogo, escrito para la traducción inglesa de Cary F. Baynes, Jung cuenta que consultó al propio libro sobre su intención de presentarlo a Occidente. Obtuvo el hexagrama 50, *Dǐng* (*Ting*, El Caldero), la vasija ritual de transformación espiritual. Formuló luego una segunda pregunta sobre su posición, con otro resultado elocuente.',
      /* [VERIFICAR contra el prólogo: la segunda consulta de Jung dio, según dos fuentes secundarias, 29 → 48 (Jǐng, El Pozo), y no 29 → 59. No poner números en el texto visible.] */
      'Esta conexión descansa en la hipótesis de la **sincronicidad**: una coincidencia acausal y significativa entre la mente y los hechos exteriores. Existen tres formas de entenderlo: (a) la sincronicidad de Jung; (b) el reencuadre psicológico, donde los símbolos operan como espejos estructurados; y (c) el azar sin sentido. Para tu práctica no necesitás resolver la metafísica: el procedimiento funciona como una brújula lúcida para pensar y decidir.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap4-18',
      title: 'Clave Conceptual • Sincronicidad y Tiempo Cualitativo',
      variant: 'carlitos',
      text: 'El I Ching no predice desenlaces fijos: opera como una fotografía instantánea del campo cósmico y psíquico. Mide la correlación acausal entre el estado interior del consultante y la constelación del momento presente, permitiendo reencuadrar la encrucijada con lucidez ética.'
    }
  },
  {
    pageNumber: 19,
    chapterId: 4,
    sectionTitle: 'Capítulo 4 — El I Ching',
    pageTitle: 'El mapa del viaje: la consulta de punta a punta',
    subtitle: 'Narrativa lineal del proceso: de la pregunta interior a la lectura de las fuerzas y la decisión',
    contentType: 'text',
    keyTerms: ['Mapa Lineal', 'Seis Estaciones', 'De la Pregunta a la Decisión', 'Visión Panorámica'],
    paragraphs: [
      'Consultar el I Ching no es un acto fragmentario ni una adivinación pasiva: es una experiencia continua y rigurosa que une una inquietud viva en tu mente con una decisión ética en el mundo real. Comprender este trayecto de punta a punta antes de entrar en los detalles técnicos te permite captar la lógica viva que enlaza sus seis estaciones: la pregunta reflexiva, la tirada de monedas, la lectura del presente, el examen de las mutaciones, la tendencia hacia el futuro y el cierre en la bitácora.',
      'El viaje arranca en la intimidad de la **pregunta abierta**: delimitar qué actitud interior cultivar ante una encrucijada concreta. Luego pasás al **acto del lanzamiento**: arrojar tres monedas seis veces consecutivas (o utilizar la app del curso para realizar el cálculo). Cada tirada suma sus valores de abajo hacia arriba: los resultados 7 u 8 fijan líneas estables (yang o yin), mientras que los extremos 6 o 9 señalan energías en máxima tensión que se preparan para mutar en su polaridad opuesta.',
      'Al completarse las seis líneas, contemplás la **fotografía del presente**: una configuración formada por un trigrama inferior (tu disposición anímica interior) y un trigrama superior (las presiones y oportunidades del entorno). En este punto reconocés las fuerzas activas en tu momento. Si surgieron líneas mutantes, identificás allí los focos precisos de conflicto o aprendizaje que reclaman tu discernimiento.',
      'El arco se consuma al proyectar la **tendencia de cambio**: al voltear las líneas mutantes emerge el hexagrama derivado, que no profetiza un resultado sino la dirección hacia la que se inclina la situación si ese cambio se completa. La experiencia concluye integrando todo en una **síntesis de cuatro partes** (*la situación es*, *el momento pide*, *el riesgo es* y *la tendencia apunta a*) y fijando un contraste a tres semanas.'
    ],
    secondaryCallout: {
      id: 'esquema-seis-estaciones',
      title: 'Las Seis Estaciones del Proceso de Consulta:',
      variant: 'context_note',
      text: '1. Pregunta abierta sobre actitud interior. 2. Tirada de monedas de base a cima. 3. Hexagrama presente: fuerzas y entorno. 4. Examen de líneas mutantes. 5. Hexagrama derivado: tendencia evolutiva. 6. Síntesis de cuatro partes y fecha de contraste a tres semanas.'
    },
    carlitosCallout: {
      id: 'carlitos-cap4-19-mapa',
      title: 'Síntesis Operativa • El Sentido del Arco Completo',
      variant: 'carlitos',
      text: 'El circuito de consulta conecta dos polos: parte de la incertidumbre subjetiva y concluye en una decisión ética concreta. Cada estación intermedia (pregunta, monedas, trigramas, presente y tendencia) funciona como un filtro de discernimiento que purifica la intención del consultante.'
    }
  },
  {
    pageNumber: 20,
    chapterId: 4,
    sectionTitle: 'Capítulo 4 — El I Ching',
    pageTitle: 'El arte de formular la pregunta',
    subtitle: 'Claridad reflexiva, preguntas abiertas y el cuidado de no degradar el diálogo con el oráculo',
    contentType: 'table',
    keyTerms: ['Pregunta Abierta', 'Consulta Abierta', 'Hexagrama 4 (Méng)', 'Ética de Consulta'],
    paragraphs: [
      'La consulta no arranca cuando tirás las monedas, sino en la claridad y honestidad con que formulás tu pregunta. El oráculo exige una sola pregunta por tirada, redactada de forma abierta: indagar *cómo* abordar un desafío íntimo o *qué actitud interior* conviene cultivar ante una encrucijada. Las preguntas cerradas de sí o no y los reclamos de predicción pasiva anulan por completo la función reflexiva y psicológica del símbolo.',
      'El I Ching no valida expectativas ni reemplaza la decisión. Una pregunta que parte de qué actitud adoptar devuelve la iniciativa al consultante; una que exige un veredicto la delega en el libro. Por eso conviene preguntar por la propia conducta y por las fuerzas en juego, no por lo que "va a pasar".',
      'Una regla básica: no repitas la consulta sobre el mismo asunto hasta que las circunstancias hayan cambiado. El hexagrama 4, *Méng* (La Necedad Juvenil), lo plantea con el oráculo en el lugar del maestro: responde la primera vez; si el consultante insiste dos o tres veces, es importunidad, y al importuno no se le responde. Quien repite por ansiedad no busca claridad sino la respuesta que desea, y eso enturbia la lectura.',
      'Si no lográs articular una pregunta precisa, podés hacer una **consulta abierta**, donde se interroga por la tonalidad general del momento. La consulta tiene además límites: no reemplaza el consejo médico, legal ni financiero; no se hace por terceros a sus espaldas; y ante una angustia intensa conviene no tirar, frenar y hablar con una persona de confianza o con un profesional.'
    ],
    referenceTables: [
      {
        title: 'Matriz de Formulación: Del Control a la Claridad Reflexiva',
        headers: ['Ámbito de vida', 'Pregunta Adivinatoria / Cerrada (Error)', 'Pregunta Abierta / Simbólica (Fructífera)'],
        rows: [
          [
            'Trabajo y vocación',
            '«¿Me van a ascender o me conviene renunciar ya?»',
            '«¿Qué actitud interior me conviene cultivar ante esta tensión laboral para cuidar mi vocación?»'
          ],
          [
            'Vínculos y relaciones',
            '«¿Mi pareja me va a ser fiel?»',
            '«¿Qué actitud me conviene sostener en este vínculo y qué debo observar con claridad?»'
          ],
          [
            'Encrucijada personal',
            '«¿Voy a tener éxito si inicio este proyecto?»',
            '«¿Cuál es la naturaleza de las fuerzas en juego en este inicio y qué riesgo debo vigilar?»'
          ],
        ],
        footnote: 'Una buena pregunta devuelve la responsabilidad al consultante y abre la escucha interior.',
      },
    ],
    carlitosCallout: {
      id: 'carlitos-cap4-20',
      title: 'Principio Metodológico • La Regla de la Única Consulta',
      variant: 'carlitos',
      text: 'Repetir la tirada sobre el mismo asunto degrada la lectura porque introduce el ruido de la ansiedad egoica. El hexagrama 4 enseña que el oráculo ilumina la primera vez; insistir no busca claridad, sino forzar una respuesta complaciente que anula la función simbólica.'
    }
  },
  {
    pageNumber: 21,
    chapterId: 4,
    sectionTitle: 'Capítulo 4 — El I Ching',
    pageTitle: 'Anatomía del hexagrama y aritmética de la tirada',
    subtitle: 'Seis líneas, polaridades yin y yang, los valores 6, 7, 8 y 9, y la mecánica del cambio',
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
        headers: ['Suma', 'Tipo de línea', 'Trazo y símbolo', 'Probabilidad'],
        rows: [
          [{ line: 6 }, 'Yin mutante (se vuelve yang)', 'Trazo partido con marca × central', '1/8 (12,5 %)'],
          [{ line: 7 }, 'Yang fijo (permanece yang)', 'Trazo continuo firme', '3/8 (37,5 %)'],
          [{ line: 8 }, 'Yin fijo (permanece yin)', 'Trazo partido abierto', '3/8 (37,5 %)'],
          [{ line: 9 }, 'Yang mutante (se vuelve yin)', 'Trazo continuo con marca ○ central', '1/8 (12,5 %)'],
        ],
        footnote: 'Convención de este libro: cara = 3 (yang) y cruz = 2 (yin). Algunas fuentes asignan los valores al revés; las probabilidades no cambian.',
      },
    ],
    extraFigures: [
      {
        lines: [7, 6, 8, 9, 7, 8],
        showDerived: true,
        highlightLines: [2, 4],
        caption: 'Figura (c): principio de mutación. A la izquierda, la tirada con sus líneas mutantes marcadas (× yin que pasa a yang, ○ yang que pasa a yin); a la derecha, el hexagrama que resulta al voltearlas: la tendencia.',
      },
    ],
    paragraphs: [
      'Un hexagrama reúne seis líneas horizontales apiladas que se leen siempre de abajo hacia arriba, desde la base (línea 1) hasta la cima (línea 6). Cada línea es continua (yang) o partida (yin), totalizando 64 combinaciones. Las tres de abajo forman el trigrama inferior (lo propio) y las tres de arriba el superior (el entorno). Ver Figura (a).',
      'La tirada clásica se realiza arrojando tres monedas seis veces consecutivas (o con la app del curso, que simula el mismo cálculo). Asignando cara = 3 (yang) y cruz = 2 (yin), la suma de cada tiro genera los cuatro estados de la tabla. En promedio surgen 1,5 líneas mutantes por tirada y solo el 17,8 % no arroja ninguna; tener mutantes es lo normal.',
      'Una línea mutante (6 o 9) es la parte de tu situación que está en movimiento: una postura que llegó a su extremo y empieza a volverse su opuesta. Por eso, de todo el texto del hexagrama, las líneas mutantes son las que describen tu caso particular. Si salen varias, leelas de abajo hacia arriba, como etapas de un mismo proceso. Al voltearlas aparece un segundo hexagrama, la tendencia.',
      'El hexagrama derivado se lee por contraste con el presente: mirá qué trigrama cambió, qué cualidad se pierde y cuál aparece. Si cambia el inferior (lo propio), el movimiento es interno; si cambia el superior (el entorno), viene del contexto. Es una tendencia condicional: señala hacia dónde se inclina la situación si el cambio se completa, y no es un resultado ni una predicción.'
    ],
  },
  {
    pageNumber: 22,
    chapterId: 4,
    sectionTitle: 'Capítulo 4 — El I Ching',
    pageTitle: 'La estructura de la lectura: juicio, imagen y mutaciones',
    subtitle: 'Cómo decodificar los textos canónicos, las metáforas clásicas y las calificaciones de conducta',
    contentType: 'text',
    keyTerms: ['El Juicio (Tuàn)', 'La Imagen (Xiàng)', 'Metáforas Arcaicas', 'Calificaciones Éticas'],
    paragraphs: [
      'El texto canónico que acompaña a cada hexagrama no es un bloque homogéneo de prosa, sino un tejido compuesto por estratos poéticos y filosóficos complementarios. Para no perderse en la lectura, el consultante debe distinguir qué función cumple cada elemento: el **Juicio** (*Tuàn*) diagnostica la arquitectura general de la época; la **Imagen** (*Xiàng*) deduce una pauta ética inspirada en los elementos de la naturaleza; y las **Líneas Mutantes** (*Yáo*) señalan advertencias puntuales para la posición exacta donde te encontrás.',
      'El Juicio define el "clima" estructural del tiempo: te aclara si el momento favorece la perseverancia silenciosa, la audacia o la espera receptiva. La Imagen, por su parte, observa cómo interactúan los dos elementos naturales del hexagrama (el fuego que asciende, el agua que fluye, la montaña que aquieta) y deduce de esa danza cósmica la conducta que debe adoptar quien busca la nobleza interior. No te dice qué te va a pasar, sino qué actitud encarna la sabiduría ante ese paisaje.',
      'Asimismo, el texto clásico emplea metáforas arcaicas que no deben tomarse al pie de la letra: fórmulas como «es propicio cruzar las grandes aguas» aluden a asumir un riesgo trascendente o iniciar un proyecto postergado; «ver al gran hombre» señala la conveniencia de consultar a alguien de mayor experiencia o escuchar la voz rectora del propio Self; y «el caballo extraviado» representa la confianza en que lo propio regresará sin forzarlo.',
      'Aclaración sobre las traducciones: distintas ediciones canónicas (Wilhelm, Baynes o las versiones de la app del curso) pueden variar en su vocabulario literal, utilizando sinónimos más modernos o accesibles. Lo determinante no es memorizar una redacción fija, sino comprender la estructura invariante: la correlación entre el patrón del momento, la posición que ocupás y la conducta sugerida para actuar con rectitud y sobriedad ante las circunstancias.'
    ],
    carlitosCallout: {
      id: 'curiosidad-tiradas-extremas',
      title: 'Casos Especiales • Hexagramas sin Mutación o con Seis Mutantes',
      variant: 'context_note',
      text: 'Si no surge ninguna línea mutante (hexagrama estable), la situación muestra fijeza o madurez y se leen exclusivamente El Juicio y La Imagen del presente. Si llegaran a mutar las seis líneas, en los hexagramas 1 y 2 rige la regla tradicional 用九 (yòng jiǔ) / 用六 (yòng liù); en los demás casos, se lee El Juicio del hexagrama derivado como tendencia evolutiva.'
    }
  },
  {
    pageNumber: 23,
    chapterId: 4,
    sectionTitle: 'Capítulo 4 — El I Ching',
    pageTitle: 'Dos lentes para profundizar: posiciones y trigramas',
    subtitle: 'El sentido de los seis puestos y la dinámica de los ocho trigramas elementales',
    contentType: 'table',
    keyTerms: ['Puestos 1 a 6', 'Trigramas Ba Gua', 'Trigrama inferior y superior', 'Hexagramas 63 y 64'],
    paragraphs: [
      'Las posiciones de las líneas (de 1 a 6) no son equivalentes ni intercambiables. Cada puesto describe un grado de visibilidad, compromiso y madurez en el desarrollo de cualquier situación. Al leer tus líneas mutantes, contrastá su recomendación con el puesto que ocupan (remitite a la Figura a del folio 21 para ver su ubicación en la estructura).',
      'La segunda lente radica en los ocho trigramas (*Ba Gua*), las fuerzas elementales de la cosmología china. El trigrama inferior describe la situación propia o interna (tus emociones, recursos o disposición anímica), y el superior la externa o ambiental (las presiones, oportunidades o vínculos del entorno). Para leer su interacción, fijate en el movimiento de cada uno: si se encuentran o se alejan, tu impulso fluye o choca con el contexto.'
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
          [{ trigram: 'Qián' }, "Qián (Ch'ien) ☰", 'Cielo', 'Lo Creativo: firmeza e iniciativa', 'Asciende'],
          [{ trigram: 'Kūn' }, "Kūn (K'un) ☷", 'Tierra', 'Lo Receptivo: receptividad y sostén', 'Desciende'],
          [{ trigram: 'Zhèn' }, 'Zhèn (Chen) ☳', 'Trueno', 'Lo Suscitante: arranque que irrumpe', 'Surge desde abajo'],
          [{ trigram: 'Kǎn' }, "Kǎn (K'an) ☵", 'Agua', 'Lo Abismal: riesgo y profundidad', 'Desciende'],
          [{ trigram: 'Gèn' }, 'Gèn (Ken) ☶', 'Montaña', 'El Aquietamiento: detención y límite', 'Permanece quieto'],
          [{ trigram: 'Xùn' }, 'Xùn (Sun) ☴', 'Viento / Madera', 'Lo Suave: influencia gradual', 'Penetra'],
          [{ trigram: 'Lí' }, 'Lí (Li) ☲', 'Fuego', 'Lo Adherente: claridad y adhesión', 'Asciende'],
          [{ trigram: 'Duì' }, 'Duì (Tui) ☱', 'Lago', 'Lo Sereno: apertura y alegría', 'Se asienta'],
        ],
        footnote: 'Los ocho trigramas son las raíces del oráculo: cada hexagrama combina dos.',
      },
    ],
    carlitosCallout: {
      id: 'carlitos-cap4-23-trigramas',
      title: 'Dinámica de Polaridad • Hexagramas 63 y 64',
      variant: 'alchemical',
      text: 'En el 63 el Agua está arriba (desciende) y el Fuego abajo (asciende): se encuentran y la olla hierve. En el 64 ocurre lo inverso: el Fuego arriba sube y el Agua abajo baja, se alejan, y la tarea queda abierta.'
    },
    secondaryCallout: {
      id: 'traducir-texto-situacion',
      title: 'Para traducir un texto a tu situación',
      variant: 'context_note',
      text: 'Ante cada texto de línea, preguntate: ¿en qué fase está mi situación (la posición lo indica)? ¿Quién empuja y quién cede, lo propio o el entorno? ¿Qué conducta pide: esperar, avanzar, ceder o retirarse?'
    }
  },
  {
    pageNumber: 24,
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
      'Examinemos una tirada completa siguiendo las capas de lectura del folio 22 con el caso histórico del prólogo de Jung de 1949. Al preguntar qué opinaba el libro sobre presentarlo a Occidente, el presente fue el Hexagrama 50, El Caldero (*Dǐng* / *Ting*), con líneas mutantes en las posiciones 2 y 3, orientando su tendencia hacia el Hexagrama 35, El Progreso (*Jìn* / *Chin*).',
      'En el hexagrama presente, el Juicio declara: «El Caldero. Suprema ventura. Éxito». La Imagen establece: «Fuego sobre madera: la imagen de El Caldero. Así el noble rectifica su posición consolidando su destino». El caldero es la vasija ritual donde los alimentos crudos se cocinan y consagran para nutrir a la comunidad: el libro mismo concebido como alimento espiritual para Occidente.',
      'En las líneas mutantes, leemos de abajo hacia arriba:\nLínea 2 (nueve en el segundo lugar): «En el caldero hay alimento. Mis compañeros están envidiosos, pero no pueden perjudicarme. Ventura». Revela un valor auténtico que no sufre daño.\nLínea 3 (nueve en el tercer lugar): «Las asas del caldero están alteradas; se obstruye su camino. No se come la grasa del faisán. Cuando caiga la lluvia, el pesar se disipa; al final, ventura». Muestra una obstrucción que se disuelve con el tiempo.',
      'El derivado, el 35 (El Progreso), se lee por contraste: el trigrama inferior, lo propio, pasa de Viento/Madera (influencia gradual) a Tierra (receptividad), mientras el Fuego superior, el entorno, no cambia. Lo propio se vuelve receptivo bajo un entorno que ilumina, y la situación apunta hacia el progreso.'
    ],
    /* [VERIFICAR contra el prólogo: lectura de Jung sobre el Hexagrama 50 como vasija espiritual del propio libro] */
    carlitosCallout: {
      id: 'carlitos-cap4-24-caldero',
      title: 'El Caldero como Vasija Nutricia:',
      variant: 'alchemical',
      text: 'El caldero es la vasija donde lo crudo se cocina y se vuelve alimento. Jung leyó en este hexagrama una imagen del propio libro: un recipiente que nutre espiritualmente a quien lo consulta.'
    },
    secondaryCallout: {
      id: 'lectura-ilustrativa-sintesis-4-partes',
      title: 'Lectura ilustrativa: síntesis de cuatro partes',
      variant: 'context_note',
      text: 'La situación es una obra con alimento espiritual valioso pero de difícil asimilación inicial. El momento pide rectificar la posición interna con paciencia y sostener la tarea sin resentimiento. El riesgo es apresurarse o frustrarse por el recelo antes de que madure. La tendencia apunta a un progreso receptivo, que se despliega a la luz.'
    }
  },
  {
    pageNumber: 25,
    chapterId: 4,
    sectionTitle: 'Capítulo 4 — El I Ching',
    pageTitle: 'Práctica guiada: tu primera tirada',
    subtitle: 'Protocolo paso a paso en siete pasos y registro personal para tu bitácora',
    contentType: 'exercise',
    keyTerms: ['Protocolo de Tirada', 'Siete Pasos', 'Registro de Bitácora', 'Síntesis de Cuatro Partes'],
    paragraphs: [
      'Esta práctica guiada reúne el método para consultar el oráculo con lucidez y criterio ético. Tomate diez minutos en silencio para recorrer cada uno de los siete pasos y registrar tu síntesis personal.'
    ],
    referenceTables: [
      {
        title: 'Vocabulario mínimo para leer los textos',
        headers: ['Palabra', 'Qué indica'],
        rows: [
          ['Ventura', 'La conducta indicada se corresponde con el momento; a veces esa conducta es esperar o retirarse, no necesariamente avanzar.'],
          ['Desventura', 'Esa conducta va a contramano del momento.'],
          ['Sin falta', 'No hay culpa si se actúa con cuidado; el riesgo existe pero es evitable.'],
          ['Arrepentimiento', 'Un desvío leve que todavía se puede corregir.'],
          ['Humillación', 'Error que se agrava por obstinación o por no rectificar a tiempo.'],
          ['Propicio', 'Es oportuno emprender esa acción.'],
          ['Éxito', 'El proceso puede desplegarse; se abre camino.'],
          ['Perseverancia', 'Sostener el rumbo con constancia es lo adecuado; si el texto dice que no es propicia, no conviene insistir.'],
        ],
        footnote: 'Estas palabras califican la conducta, no predicen el resultado.',
      },
    ],
    exerciseData: {
      id: 'ex-primera-tirada-iching',
      title: 'Práctica Guiada — Tu Primera Tirada de I Ching',
      objective: 'Realizar una consulta completa con tres monedas (o con la app del curso), formular una pregunta abierta, registrar el presente y la tendencia, redactar la síntesis de cuatro partes y fijar la fecha de contraste a tres semanas.',
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
          title: 'Elegir el método de tirada',
          instruction: 'Arrojá tres monedas sobre una mesa limpia seis veces consecutivas, o usá la app del curso si la tenés a mano.',
        },
        {
          stepNumber: 4,
          title: 'Generar las seis líneas',
          instruction: 'Lanzá las monedas línea por línea de abajo hacia arriba, anotando el valor (6, 7, 8 o 9) de cada una.',
        },
        {
          stepNumber: 5,
          title: 'Identificar y leer en orden',
          /* [VERIFICAR: Las ediciones tradicionales de Wilhelm/Baynes incluyen la tabla de búsqueda por trigramas para identificar los hexagramas.] */
          instruction: 'Identificá tu hexagrama presente y el derivado en la app del curso, que trae el glosario completo de los 64 hexagramas con Juicio, Imagen y líneas mutantes. Leé El Juicio y La Imagen, y después tus líneas mutantes de abajo hacia arriba.',
        },
        {
          stepNumber: 6,
          title: 'Redactar la síntesis y guardar',
          instruction: 'Elaborá la síntesis de cuatro partes («La situación es… El momento pide… El riesgo es… La tendencia apunta a…») y guardala en tu cuaderno.',
        },
        {
          stepNumber: 7,
          title: 'Fijar fecha de contraste',
          instruction: 'Marcá en tu calendario una fecha a tres semanas para revisar la nota y verificar cómo evolucionó tu decisión.',
        },
      ],
      exampleLabel: 'Ejemplo ilustrativo:',
      applicationExample: 'Pregunta: «¿Qué actitud conviene cultivar ante la propuesta de liderar este nuevo proyecto?». Presente: hexagrama 50, línea 2 mutante. Tendencia: hexagrama 56. Síntesis: «La situación es que cuento con los recursos para el rol; el momento pide humildad y sostén de mi centro; el riesgo es aislarme por temor al qué dirán; la tendencia apunta a moverme como quien llega a un territorio nuevo, con cautela.» Contraste: agendado a los 21 días.',
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
          placeholder: 'Ej. Hexagrama 56, El Caminante',
        },
        {
          key: 'iching_frase_sintesis',
          label: '4. Síntesis de cuatro partes',
          placeholder: 'La situación es… El momento pide… El riesgo es… La tendencia apunta a…',
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
  // CAPÍTULO 5 — CUADERNO DE TRABAJO & BITÁCORA ALQUÍMICA (PÁGINAS 26 A 28)
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
      applicationExample: 'Escena ilustrativa (personaje compuesto): Mateo soñó que conducía a 200 km/h por una autopista lujosa pero sin frenos (Exposición/Desarrollo). En el último segundo, un viejo guardabosques con farol (Senex, el Anciano sabio) le cortaba el paso con una rama verde y el auto se apagaba (Peripeteia/Lysis). Comprendió que su sobreexigencia laboral estaba al borde de provocarle un agotamiento severo. Su acción concreta fue cancelar dos compromisos innecesarios y tomarse una tarde de caminata en silencio.',
    },
    paragraphs: [
      'El trabajo con los sueños es la piedra angular del autoconocimiento y la escucha interior. Dedicarle veinte minutos a la semana a este protocolo te otorga una lucidez sobre tus verdaderas motivaciones que ningún libro teórico puede reemplazar. Este protocolo lleva a la práctica la estructura dramática que vimos en el folio 11.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap5-suenos',
      title: 'Criterio Clínico • El Lenguaje Jeroglífico del Sueño',
      variant: 'marginalia',
      text: 'El inconsciente no habla en prosa conceptual sino en imágenes míticas y paradojas dramáticas. Su propósito es compensar de forma autorregulada la actitud unilateral de la vigilia; la paciencia interpretativa es la clave metódica para descifrar su advertencia.'
    },
    secondaryCallout: {
      id: 'carlitos-prudencia-f13',
      title: 'Criterio Clínico y Deontológico:',
      variant: 'context_note',
      text: 'Las técnicas de amplificación simbólica, sincronías y oráculo son herramientas de autoconocimiento, jamás un sustituto de la psicoterapia o la atención médica. Ante desrealización, disociación o angustia desbordante, debe suspenderse la autoexperimentación y acudir a un profesional de la salud mental.'
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
      title: 'Principio de Verificación • El Anclaje Terrenal del Símbolo',
      variant: 'marginalia',
      text: 'El acontecimiento sincrónico no busca admiración mágica pasiva: adquiere legitimidad cuando se transforma en palanca terapéutica o ética. La numinosidad del símbolo solo cobra sentido pleno cuando se traduce en una acción concreta en la realidad compartida.'
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
      /* [VERIFICAR contra el comentario de Jung a *El secreto de la flor de oro*] */
      'En el taoísmo, *Wu Wei* no significa inacción ni pasividad, sino «no-forzamiento»: actuar en armonía con el curso natural de las cosas, sin imponer la voluntad del ego contra la corriente. Jung profundizó en este principio a través de su amistad con Richard Wilhelm y su estudio de los textos taoístas clásicos, viendo en el Wu Wei una actitud psicológica afín a la escucha del inconsciente.',
      'El Tao no se impone: se atiende. En la tradición oriental que tanto cautivó a Carlitos Jung y a Richard Wilhelm, el sabio no forcejea contra las circunstancias; contempla la corriente y se acomoda a su pulso. El "Juego del Tao" no pretende convertirte en un hacedor de prodigios ni busca fabricar coincidencias artificiales: es una gimnasia cotidiana de la conciencia para aprender a notar cómo se ordenan los acontecimientos fortuitos cuando aflojás la obsesión de control.',
      'Al quitarle al azar la carga de la superstición y al ego la ilusión de omnipotencia, la mente se vuelve receptiva y porosa. De repente, el mundo exterior deja de ser un obstáculo mecánico para convertirse en un paisaje vivo donde cada suceso —desde un semáforo que abre el paso justo al apoyar el pie en la calle hasta el agua del mate— te recuerda la silenciosa alineación que Jung llamó Unus Mundus.',
      'Aclaración: este ejercicio es una propuesta lúdica de los autores para entrenar la atención, no una técnica descrita por Jung.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap5-tao',
      title: 'Principio Taoísta • El Wu Wei y la Renuncia al Control',
      variant: 'alchemical',
      text: 'El juego de la sintonía entrena la renuncia a forzar los acontecimientos exteriores. El principio del Wu Wei enseña que el orden acausal se percibe con mayor nitidez cuando el ego suspende su compulsión manipuladora y aprende a moverse al compás del entorno.'
    }
  },

  // ==========================================
  // CIERRE — LA GRAN CONIUNCTIO Y EL MANIFIESTO DE LA COMPLETITUD (PÁGINA 29)
  // ==========================================
  {
    pageNumber: 29,
    chapterId: 6,
    sectionTitle: 'El Manifiesto de la Completitud',
    pageTitle: 'La Gran Coniunctio y el Manifiesto de la Completitud',
    subtitle: 'La piedra filosofal, la reconciliación de los opuestos y la despedida de Carlitos junto al fuego',
    contentType: 'conclusion',
    keyTerms: ['Ganzheit / Completitud', 'Coniunctio Oppositorum', 'Lapis Philosophorum', 'El Fuego y el Mate'],
    paragraphs: [
      'Hemos recorrido las páginas de este manual por el fascinante segundo territorio de la mente profunda y las enseñanzas de Carlitos. Hemos aprendido a cuidar la distancia justa frente a los arquetipos y a escuchar el teatro de cuatro actos de nuestros sueños nocturnos.',
      'Asimismo, nos atrevimos a abrir la ventana al escarabajo de la sincronicidad y aprendimos a consultar el I Ching con lucidez ética: formular una pregunta auténtica, tirar las monedas, leer el presente y su tendencia, y tomar una decisión propia.',
      'Este viaje alquímico converge en tres conceptos esenciales que articulan la madurez interior: la **completitud** (*Ganzheit*), entendida no como una perfección idealizada ni la eliminación de contradicciones, sino como la integración viva de todas las dimensiones psíquicas; la **unión de los opuestos** (*coniunctio oppositorum*), el arte de reconciliar la luz consciente con la sombra inconsciente sosteniendo la tensión sin quebrarse; y la **piedra filosofal** (*lapis philosophorum*), que en la psicología profunda no alude a un oro material, sino al fruto incorruptible de esa integración: un centro ético capaz de orientar la vida cotidiana con sabiduría y templanza.',
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
      title: 'Cierre de Integración • El Compromiso Ético con la Acción',
      variant: 'carlitos',
      text: 'El autoconocimiento simbólico se desvanece si queda confinado a la especulación abstracta. Cada arquetipo reconocido, cada sueño analizado y cada consulta de I Ching exigen su traducción práctica en decisiones cotidianas y responsabilidad moral ante el propio destino.'
    }
  }
];

export const EBOOK_PAGES: EbookPageData[] = RAW_EBOOK_PAGES.map((page) => ({
  ...page,
  pageTitle: INDICE_TITULOS[page.pageNumber] ?? page.pageTitle,
  subtitle: INDICE_SUBTITULOS[page.pageNumber] ?? page.subtitle,
}));
