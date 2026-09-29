import { EbookPageData, ChapterMeta } from '../types/ebook';
import { IMAGE_MANIFEST } from './imageManifest';

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
      subtitle: 'El Libro de las Mutaciones, las tres monedas de bronce y los hexagramas espejo',
      startPage: 18,
      endPage: 22,
      iconName: 'grid',
    },
    {
      chapterId: 5,
      title: 'Capítulo 5 — Cuaderno de Trabajo & Bitácora Alquímica',
      subtitle: 'Protocolos de sueños, sincronías y consulta existencial al oráculo',
      startPage: 23,
      endPage: 26,
      iconName: 'edit-3',
    },
    {
      chapterId: 6,
      title: 'Apéndice — Fuentes y Lecturas',
      subtitle: 'Obras de referencia, correspondencia y aparato documental',
      startPage: 27,
      endPage: 27,
      iconName: 'bookmark',
    },
  ];
}

export const EBOOK_PAGES: EbookPageData[] = [
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
      credit: 'Grabado de Archivo • Manuscrito de Bollingen',
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
      'Una de las preguntas más habituales que le hacían a Carlitos en sus seminarios era: "¿Qué significa soñar con serpientes, con agua turbia o con la muerte de un pariente?". Y la respuesta de Carlitos era invariablemente una sonrisa paciente seguida de una repregunta: "¿Quién eres tú, qué hiciste ayer y qué significa para ti esa serpiente?".',
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
      text: 'Cuando anotes un sueño al despertar, no lo resumas con prisas. Separá en tu cuaderno: ¿Dónde empieza? ¿Cuál es el problema? ¿Dónde se complica todo? ¿Cómo termina? Si miras la Lysis con atención, ahí está la tarea que la vida te pone para hoy.'
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
      text: 'La Imaginación Activa no es un juego de salón para pasar el rato. Si convocas a los dioses de tu abismo interior, hazlo con la seriedad con la que invitarías a un embajador extranjero a tu casa: con respeto absoluto, pero sin renunciar a tu soberanía.'
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
      credit: 'Archivo Histórico de Sincronicidades • Zúrich',
      aspect: 'square',
    },
    paragraphs: [
      'Existe una anécdota clínica célebre en la historia de la psicología moderna que Carlitos solía relatar con una mezcla de picardía y devoción: el caso de la joven paciente suiza y el *escarabajo dorado*.',
      'Se trataba de una mujer de elevada cultura y brillante formación académica, pero cuya actitud psicológica estaba completamente acorazada por un racionalismo cartesiano impenetrable. Cada interpretación, cada intento de aproximación terapéutica era desarmado de inmediato por su intelecto implacable. El análisis se encontraba en un callejón sin salida; la mente de la paciente era como una fortaleza de hormigón donde nada numinoso podía penetrar.',
      'Una tarde primaveral, sentada frente a Carlitos en su consultorio de Küsnacht, la mujer comenzó a relatar un sueño que había tenido la noche previa: alguien le regalaba un costoso broche de oro con la figura de un escarabajo joya egipcio. En el momento exacto en que pronunciaba esas palabras, Jung escuchó un golpecito suave y rítmico en el cristal de la ventana que daba al jardín.',
      'Carlitos se levantó en silencio, abrió la ventana y atrapó al vuelo en el aire a un insecto grande: era un *Cetonia aurata* (el escarabajo verde-oro o escarabajo de las rosas), pariente biológico directo del escarabajo sagrado egipcio, cuya presencia en esa época del año y en esa latitud era sumamente infrecuente. Jung se acercó a la paciente, abrió su mano y con una sonrisa le dijo suavemente: "Aquí tiene a su escarabajo". La coraza racionalista de la paciente se quebró al instante en lágrimas de conmoción; la terapia despegó hacia su sanación definitiva.'
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
    keyTerms: ['Chronos vs Kairos', 'Causalidad Clásica', 'Conexión Acasual', 'Tiempo Cualitativo'],
    paragraphs: [
      'Para formalizar este fenómeno ante la comunidad científica, Jung formuló en 1952 su célebre tratado *Sincronicidad como principio de conexiones acasuales*. ¿Qué es exactamente una sincronicidad? Es la coincidencia temporal de dos o más acontecimientos que no están vinculados por una relación de causa y efecto mecánicos, pero cuyo enlace revela un *significado compartido* y profundamente conmovedor para el sujeto.',
      'La ciencia de Newton se basa en *Chronos*: el tiempo cuantitativo del reloj, medido en segundos y minutos homogéneos e indiferentes. En Chronos, si una piedra cae al suelo es porque la gravedad la atrajo; si una bola de billar choca contra otra, le transfiere su momento cinético. Todo se explica mirando hacia el pasado.',
      'La sincronicidad, en cambio, opera en la dimensión de *Kairos*: el tiempo del momento propicio, el tiempo cualitativo de los griegos donde el universo se carga de sentido. Jung clasificó las sincronías en tres categorías operativas: 1. Coincidencia entre un estado mental interior (pensamiento, emoción intensa) y un suceso material exterior simultáneo; 2. Coincidencia entre un estado mental y un suceso exterior distante en el espacio que luego se verifica; 3. Coincidencia entre un estado mental y un suceso futuro que todavía no ha tenido lugar.',
      'Comprender la sincronicidad no nos lleva a una superstición ingenua donde vemos señales en cada semáforo rojo, sino a una reverencia atenta: la realidad está viva, nos escucha y dialoga con nosotros cuando nos encontramos en un cruce de caminos decisivo.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap3-definicion',
      title: 'Definición Técnica de C. G. Jung (1952):',
      variant: 'historical_quote',
      text: 'Llamo sincronicidad a la coincidencia temporal de dos o más sucesos no vinculados causalmente, que tienen el mismo o semejante significado. Es un principio de ordenación que se sitúa en pie de igualdad con la causalidad.'
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
      'En esos instantes límite, la tensión entre los opuestos en el interior del individuo se vuelve tan insoportable que la energía psíquica trasciende las fronteras del cráneo biológico y polariza el campo material exterior. De pronto, un libro cae de una estantería abriéndose exactamente en la página que resuelve una duda crucial; te cruzas en la parada de un autobús con una persona que no veías hace diez años y que te ofrece el trabajo que necesitabas; o un sueño nocturno se refleja al día siguiente en las noticias matutinas.',
      'En el coaching y el autoconocimiento, aprender a registrar las sincronicidades no tiene nada que ver con delegar la responsabilidad de tus decisiones en "el universo". Muy por el contrario: la sincronicidad es un *espejo amplificador* del Self. Te indica si estás caminando en consonancia con tu proceso de individuación o si estás forzando una puerta falsa por pura terquedad del ego.',
      'La clave ética para trabajar con las sincronías consiste en guardar silencio, abstenerse de inflarse creyéndose "un elegido del destino" y preguntarse: "¿Qué acción concreta y valiente me está exigiendo esta coincidencia en mi vida de hoy?".'
    ],
    carlitosCallout: {
      id: 'carlitos-cap3-brujula',
      title: 'Carlitos dice:',
      text: 'Cuando el camino por el que vas es el correcto para tu alma, el mundo te envía señales de confirmación; cuando te empeñas en seguir por donde manda tu vanidad, las sincronías se transforman en piedras que te hacen tropezar para que mires el mapa otra vez.'
    }
  },
  {
    pageNumber: 17,
    chapterId: 3,
    sectionTitle: 'Capítulo 3 — Sincronicidad',
    pageTitle: 'Tabla Comparativa de Sincronicidades Cotidianas',
    subtitle: 'Fenómenos documentados, significado arquetípico y protocolos de integración',
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
      'Esta tabla resume los cuatro patrones más frecuentes de fenómenos sincrónicos registrados en los archivos de Küsnacht y en la práctica de acompañamiento personal. Cada evento reúne una perturbación interior, un hecho físico exterior coincidente y un llamado ético a la transformación.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap3-tabla',
      title: 'Regla Metodológica de Carlitos:',
      variant: 'marginalia',
      text: 'Nunca fuerces una sincronicidad. Si tienes que retorcer la lógica para justificar que algo "es una señal", no lo es. La verdadera sincronicidad se reconoce por su huella numinosa: te deja mudo, con la piel de gallina y con la certeza íntima de que no estás solo en tu camino.'
    }
  },

  // ==========================================
  // CAPÍTULO 4 — EL ORÁCULO DEL I CHING (PÁGINAS 18 A 22)
  // ==========================================
  {
    pageNumber: 18,
    chapterId: 4,
    sectionTitle: 'Capítulo 4 — El I Ching',
    pageTitle: 'Carl Jung y el Libro de las Mutaciones',
    subtitle: 'El encuentro con Richard Wilhelm y el prólogo histórico que consagró al oráculo en Occidente',
    contentType: 'text',
    keyTerms: ['I Ching', 'Richard Wilhelm', 'Libro de las Mutaciones', 'Prólogo Histórico 1949'],
    illustrationImage: {
      src: '/src/assets/images/iching_bronze_coins_consultation_1790692401314.jpg',
      alt: 'Monedas de bronce y manuscrito del I Ching',
      caption: 'Las tres monedas de bronce y el Libro de las Mutaciones: el método milenario que Jung consultaba en su jardín de Küsnacht para dialogar con el momento presente.',
      credit: 'Archivo de Estudios Orientales • Zúrich 1949',
      aspect: 'landscape',
    },
    paragraphs: [
      'En el verano de 1920, Carlitos conoció al célebre sinólogo y teólogo alemán *Richard Wilhelm*, quien había residido más de dos décadas en China traduciendo pacientemente los clásicos confucianos y taoístas bajo la guía de venerables sabios orientales como Lao Nai-hsüan.',
      'El impacto de ese encuentro en Jung fue un rayo fulgurante. Wilhelm le presentó el *I Ching* (Yi Jing o *Libro de las Mutaciones*), una obra con más de tres mil años de antigüedad concebida no como un texto adivinatorio vulgar, sino como el más refinado mapa dinámico de las transformaciones de la energía universal.',
      'Jung dedicó casi tres décadas a experimentar con el I Ching en el silencio de su jardín en Küsnacht. Colocaba los tallos secos de milenrama o arrojaba las tres monedas chinas de bronce para consultar sus propias dudas ante decisiones decisivas de su vida y verificar las correlaciones con los sueños de sus pacientes.',
      'En 1949, cuando la traducción inglesa de Cary F. Baynes estaba por publicarse, Jung escribió uno de los prólogos más audaces y bellos de la literatura del siglo XX: decidió "entrevistar" al propio I Ching consultándole qué opinaba sobre su presentación ante el público occidental moderno. El resultado fue el célebre *Hexagrama 50, Ting (El Caldero)*, que simboliza el recipiente sagrado donde se nutre espiritualmente a la comunidad. El I Ching había respondido con una precisión conmovedora.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap4-prologo',
      title: 'Cita Histórica (Prólogo de C. G. Jung al I Ching, 1949):',
      variant: 'historical_quote',
      text: 'Para la mente occidental, la causalidad lo es todo. Para la mente china del I Ching, el punto de partida es la sincronicidad: el cuadro de la totalidad que se manifiesta en el momento exacto en que caen las monedas. El oráculo no halaga ni adivina el futuro: juzga la disposición presente de tu corazón.'
    }
  },
  {
    pageNumber: 19,
    chapterId: 4,
    sectionTitle: 'Capítulo 4 — El I Ching',
    pageTitle: 'La Anatomía del Hexagrama y las Tres Monedas',
    subtitle: 'Líneas Yang y Yin, líneas mutantes y el ritual de lanzamiento de las tres piezas de bronce',
    contentType: 'text',
    keyTerms: ['Hexagrama', 'Líneas Yang y Yin', 'Líneas Mutantes', 'Método de las Tres Monedas'],
    paragraphs: [
      'Para acercarnos al I Ching con hondura, lucidez y sin caer en supersticiones vacías, es indispensable comprender cómo se forma un *hexagrama* (*Kua*). Un hexagrama es una figura compuesta por seis líneas horizontales apiladas verticalmente, que se leen y construyen siempre *de abajo hacia arriba*, desde la línea 1 (la base o raíz en la tierra) hasta la línea 6 (la cima o cielo).',
      'Cada una de las líneas puede ser de dos polaridades fundamentales: una línea continua `------` (*Yang*, principio activo, luminoso, firme y consciente) o una línea quebrada `-- --` (*Yin*, principio receptivo, oscuro, fértil e inconsciente). Al combinar seis líneas se obtienen exactamente las $2^6 = 64$ configuraciones posibles que componen el libro.',
      'El método más accesible y tradicional en Occidente para generar un hexagrama es el *lanzamiento de las tres monedas de bronce*. Se toman tres monedas idénticas (preferentemente réplicas de monedas chinas antiguas con un orificio cuadrado en el centro). Se asigna convencionalmente a cada cara el valor numérico 3 (Yang) y a cada cruz el valor 2 (Yin).',
      'Al arrojar las tres monedas juntas, la suma de sus valores solo puede arrojar cuatro resultados posibles: **6** ($2+2+2$): Yin viejo o *Línea Mutante* quebrada que se transformará en Yang; **7** ($3+2+2$): Yang joven o firme; **8** ($3+3+2$): Yin joven o receptivo; y **9** ($3+3+3$): Yang viejo o *Línea Mutante* continua que se transformará en Yin. Las líneas mutantes indican los puntos exactos de máxima tensión psíquica donde el presente está a punto de convertirse en su opuesto (*enantiodromía*).'
    ],
    carlitosCallout: {
      id: 'carlitos-cap4-monedas',
      title: 'Carlitos dice con una sonrisa:',
      text: 'Cuando tirás las tres monedas, tus dedos no están haciendo un truco de magia. En ese instante fugaz en que las monedas giran por el aire, tu mente inconsciente y la física del mundo están bailando la misma música. Por eso el resultado nunca es una casualidad vacía.'
    }
  },
  {
    pageNumber: 20,
    chapterId: 4,
    sectionTitle: 'Capítulo 4 — El I Ching',
    pageTitle: 'Los Ocho Trigramas Fundamentales (Ba Gua)',
    subtitle: 'La matriz elemental de la naturaleza y sus funciones arquetípicas en la psique',
    contentType: 'table',
    iChingTrigrams: [
      {
        name: "Ch'ien",
        chinese: "乾",
        symbol: "☰",
        element: "Cielo / Padre",
        direction: "Noroeste",
        archetypalQuality: "Fuerza creativa pura, luminosidad, voluntad inquebrantable, espíritu.",
        psychologicalFunction: "Función Pensamiento / La soberanía del Yo alineado con el propósito superior.",
      },
      {
        name: "K'un",
        chinese: "坤",
        symbol: "☷",
        element: "Tierra / Madre",
        direction: "Suroeste",
        archetypalQuality: "Receptividad devota, contención nutricia, fertilidad silenciosa, entrega.",
        psychologicalFunction: "El Inconsciente nutricio / Capacidad de sostener procesos sin forzarlos.",
      },
      {
        name: "Chen",
        chinese: "震",
        symbol: "☳",
        element: "Trueno / Hijo Mayor",
        direction: "Este",
        archetypalQuality: "Movimiento expansivo, conmoción que despierta, brote primaveral.",
        psychologicalFunction: "Intuición que irrumpe / El chispazo que rompe la inercia de una vida dormida.",
      },
      {
        name: "K'an",
        chinese: "坎",
        symbol: "☵",
        element: "Agua / Abismo",
        direction: "Norte",
        archetypalQuality: "El peligro fértil, las profundidades del abismo, fluidez insustancial.",
        psychologicalFunction: "La Sombra y la Noche Oscura del Alma / El coraje de atravesar el abismo.",
      },
      {
        name: "Ken",
        chinese: "艮",
        symbol: "☶",
        element: "Montaña / Hijo Menor",
        direction: "Noreste",
        archetypalQuality: "Quietud, detención meditativa, límite protector, solidez inmutable.",
        psychologicalFunction: "El Silencio de la Individuación / Saber detenerse antes de errar.",
      },
      {
        name: "Sun",
        chinese: "巽",
        symbol: "☴",
        element: "Viento / Madera",
        direction: "Sureste",
        archetypalQuality: "Penetración suave y constante, flexibilidad, influencia invisible.",
        psychologicalFunction: "El Ánima mediadora / Transformación sutil que desgasta la rigidez.",
      },
      {
        name: "Li",
        chinese: "離",
        symbol: "☲",
        element: "Fuego / Sol",
        direction: "Sur",
        archetypalQuality: "Claridad lúcida, calor que une, iluminación intelectual, apego.",
        psychologicalFunction: "La Luz de la Conciencia / Discernimiento claro sin fanatismo ciego.",
      },
      {
        name: "Tui",
        chinese: "兌",
        symbol: "☱",
        element: "Lago / Niebla",
        direction: "Oeste",
        archetypalQuality: "Alegría serena, celebración compartida, apertura comunicativa.",
        psychologicalFunction: "La Celebración de la Completitud / La risa que cura la gravedad del ego.",
      },
    ],
    paragraphs: [
      'Todo hexagrama del I Ching está compuesto por la interacción viva de dos *trigramas* (*Ba Gua*): el trigrama inferior (la realidad interior, el estado psicológico oculto) y el trigrama superior (la manifestación exterior, la situación relacional o cósmica). Comprender los 8 trigramas elementales es dominar el alfabeto con el que el oráculo describe la condición humana.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap4-trigramas',
      title: 'Anotación de Carlitos:',
      variant: 'alchemical',
      text: 'Cuando el Fuego (Li) está sobre la Tierra (K\'un), el sol brilla e ilumina a todos; cuando el Fuego cae debajo del Agua (K\'an), la nave se sumerge en el abismo. Los trigramas son los humores de la naturaleza viva dentro de ti.'
    }
  },
  {
    pageNumber: 21,
    chapterId: 4,
    sectionTitle: 'Capítulo 4 — El I Ching',
    pageTitle: 'Cuatro Hexagramas Espejo para el Viajero Interior',
    subtitle: 'Ch\'ien, K\'un, Ting y Wei Chi: las cuatro estaciones del alma en la rueda de las mutaciones',
    contentType: 'iching',
    iChingHexagram: {
      number: 50,
      nameChinese: '鼎',
      namePinYin: 'Tǐng',
      nameSpanish: 'El Caldero (La Transformación Alquímica)',
      upperTrigram: 'Li (Fuego)',
      lowerTrigram: 'Sun (Viento / Madera)',
      lines: ['yang', 'yin', 'yang', 'yang', 'yang', 'yin'],
      judgment: 'El Caldero: Suprema ventura. Éxito. La madera penetra debajo del fuego para cocinar el alimento sagrado ofrecido a los antepasados y a los dioses.',
      image: 'Fuego sobre madera: la imagen del Caldero. Así el noble consolida su destino poniendo en orden su vida interior y nutriendo a los hombres sabios.',
      psychologicalMeaning: 'El Hexagrama 50 es el símbolo supremo de la Alquimia de Carlitos: el crisol (*vas Hermetis*) donde los contenidos brutos de la vida cotidiana son transmutados por el fuego de la conciencia en alimento espiritual y sabiduría para el alma colectiva.',
      brushImage: '/src/assets/images/hexagram_50_ting_ink_brush_1790694984643.jpg',
    },
    paragraphs: [
      'A lo largo de los 64 hexagramas, existen cuatro estaciones arquetípicas que todo viajero de la mente profunda se encontrará inevitablemente en su camino:',
      '**1. Hexagrama 1 — Ch\'ien (Lo Creativo):** Seis líneas Yang puras. Simboliza el poder generador original, la semilla del Héroe que inicia una empresa. Su advertencia: el dragón que vuela demasiado alto (*línea superior mutante*) se estrella por soberbia. Requiere perseverancia inmaculada.',
      '**2. Hexagrama 2 — K\'un (Lo Receptivo):** Seis líneas Yin puras. La entrega paciente de la Tierra. No busca tomar la delantera, sino dejarse guiar. Para el hombre moderno habituado al control ansioso, K\'un enseña la fuerza sanadora de esperar a que las cosas maduren por su propio peso.',
      '**3. Hexagrama 50 — Ting (El Caldero):** El hexagrama que el I Ching le regaló a Jung en 1949. El fuego sobre la leña. Representa la vasija hermética de la terapia y el autoconocimiento: cocinar la propia sombra hasta que se vuelva sabiduría nutricia para la comunidad.',
      '**4. Hexagrama 64 — Wei Chi (Antes de la Consumación):** Fuego sobre Agua. El último hexagrama del libro, recordándonos que el ciclo nunca termina en una meta estática. Como el zorro joven que cruza el río helado y moja su cola al final, la individuación es un recomenzar perpetuo.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap4-hexagramas',
      title: 'Carlitos dice con afecto:',
      text: '¿Te fijaste que el I Ching no termina con el hexagrama 63 "Después de la Consumación", sino con el 64 "Antes de la Consumación"? El oráculo te recuerda que la vida nunca es una foto terminada colgada en la pared; es un río que siempre está empezando a fluir otra vez.'
    }
  },
  {
    pageNumber: 22,
    chapterId: 4,
    sectionTitle: 'Capítulo 4 — El I Ching',
    pageTitle: 'El I Ching como Espejo Proyectivo en el Coaching',
    subtitle: 'El arte de formular preguntas esenciales y el diálogo sin fatalismo supersticioso',
    contentType: 'text',
    keyTerms: ['Preguntas Esenciales', 'Espejo Proyectivo', 'Coaching Profundo', 'Ética de la Consulta'],
    paragraphs: [
      'Cuando aplicamos el I Ching en el ámbito del coaching, la mentoría y el autoconocimiento, la primera regla innegociable consiste en erradicar cualquier tufillo a adivinación pasiva o fatalismo mágico. El oráculo no te dice si mañana vas a ganar la lotería o si tu pareja te va a engañar: esas son preguntas inmaduras del ego que busca eludir su propia responsabilidad existencial.',
      'El I Ching opera como el más formidable *espejo proyectivo* que la humanidad haya concebido. Es una trampa de luz donde el inconsciente se refleja a sí mismo. Por consiguiente, la calidad de la respuesta dependerá enteramente de la profundidad ética de la pregunta formulada.',
      'En lugar de preguntar: "¿Me conviene cambiar de trabajo el mes que viene?", una persona despierta formula una *pregunta esencial de sentido*: "¿Cuál es la naturaleza de la encrucijada en la que me encuentro y qué energía interior debo cultivar para no actuar desde el miedo?". En lugar de preguntar: "¿Por qué fulano no me llama?", nos preguntamos: "¿Qué parte de mi propia sombra estoy proyectando en este conflicto vincular?".',
      'Al recibir el hexagrama, no te limites a leer las frases como un decreto dogmático: léelo como quien desmenuza un sueño lúcido. Escucha la imagen del trigrama, mira las líneas mutantes que señalan tu tensión viva, y toma una decisión libre y consciente. El oráculo no decide por ti: te devuelve la mirada para que decidas con el corazón despierto.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap4-coaching',
      title: 'Regla de Oro de Carlitos:',
      variant: 'marginalia',
      text: 'El oráculo no es un amo al que obedecer; es un anciano sabio al que consultas en la encrucijada del bosque. Si el anciano te dice que el puente está quebrado, no te está prohibiendo cruzar el río: te está advirtiendo que prepares tu balsa o aprendas a nadar.'
    }
  },

  // ==========================================
  // CAPÍTULO 5 — CUADERNO DE TRABAJO & BITÁCORA ALQUÍMICA (PÁGINAS 23 A 26)
  // ==========================================
  {
    pageNumber: 23,
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
          instruction: 'Identificá el instante exacto de máxima tensión emocional o sorpresa simbólica. ¿Apareció una figura numinosa, un animal, un objeto extraño? No juzgues la imagen: descríbela con detalle.',
        },
        {
          stepNumber: 4,
          title: 'Acto IV: Lysis (El Desenlace Compensatorio)',
          instruction: 'Registrá cómo termina la escena o cómo despertaste. ¿Qué respuesta o advertencia te deja la lysis? Formúlala en una sola frase contundente: "Mi alma me pide que..."',
        },
        {
          stepNumber: 5,
          title: 'Acción Concreta de Integración',
          instruction: 'El sueño muere si se queda en el papel. Definí una acción material mínima para las próximas 24 horas (una carta, una conversación, un cambio de hábito, un dibujo) que ancle la lección en la realidad.',
        },
      ],
      applicationExample: 'Ejemplo Real: Mateo soñó que conducía a 200 km/h por una autopista lujosa pero sin frenos (Exposición/Desarrollo). En el último segundo, un viejo guardabosques con farol (Senex) le cortaba el paso con una rama verde y el auto se apagaba (Peripeteia/Lysis). Comprendió que su sobreexigencia laboral estaba al borde de provocarle un infarto. Su acción concreta fue cancelar dos compromisos innecesarios y tomarse una tarde de caminata en silencio.',
    },
    paragraphs: [
      'El trabajo con los sueños es la piedra angular del autoconocimiento y la escucha interior. Dedicarle veinte minutos a la semana a este protocolo te otorga una lucidez sobre tus verdaderas motivaciones que ningún libro teórico puede reemplazar.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap5-suenos',
      title: 'Carlitos dice con un mate en la mano:',
      variant: 'marginalia',
      text: 'Tu inconsciente es el único consejero que no te cobra un solo centavo y que trabaja mientras duermes. El único problema es que no sabe hablar en prosa de oficina: tenle la paciencia de aprender a leer sus jeroglíficos.'
    }
  },
  {
    pageNumber: 24,
    chapterId: 5,
    sectionTitle: 'Capítulo 5 — Cuaderno de Trabajo',
    pageTitle: 'Protocolo 2: Registro y Auditoría de Sincronicidades',
    subtitle: 'El radar de Kairos: cómo atrapar y documentar las coincidencias con sentido en tu vida',
    contentType: 'exercise',
    exerciseData: {
      id: 'ex-synchronicity-audit',
      title: 'Protocolo 2 — Registro de Sincronicidades Cotidianas',
      objective: 'Entrenar el ojo para reconocer, documentar y descifrar las coincidencias acasuales que se constelan a tu alrededor, evitando tanto la ceguera escéptica como la paranoia mágica.',
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
          instruction: 'Preguntate: ¿Es esto una coincidencia trivial que estoy forzando con mi deseo, o hubo un impacto objetivo que me sacudió? Si el hecho es genuino, pasa al paso 5.',
        },
        {
          stepNumber: 5,
          title: 'Paso 5: La Respuesta Ética',
          instruction: '¿Qué te pide hacer este acontecimiento? La sincronicidad no es para vanagloriarse: es una confirmación de rumbo o un llamado de atención urgente. ¿Qué paso vas a dar hoy?',
        },
      ],
      applicationExample: 'Ejemplo Documentado: Clara dudaba entre abandonar una carrera bancaria opresiva para dedicarse a la restauración de arte. Mientras lloraba en una plaza preguntándose si estaba loca, una anciana desconocida se sentó a su lado, abrió un sobre manchado y le pidió que le leyera una carta porque no tenía sus anteojos. La carta comenzaba: "Nunca temas a empezar de nuevo cuando el arte es la sangre de tus venas". Clara renunció la semana siguiente.',
    },
    paragraphs: [
      'Llevar un cuaderno de sincronías es como afinar un instrumento de cuerda: al principio parece que el universo está callado, pero a medida que afinas tu atención, comienzas a escuchar la sinfonía de conexiones en la que estás inmerso.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap5-radar',
      title: 'Carlitos dice con mirada pícara:',
      variant: 'marginalia',
      text: 'Cuando el escarabajo golpeó la ventana de mi consultorio, no me puse a aplaudir a los espíritus: abrí la ventana, lo agarré y se lo di a mi paciente para que sanara. La magia del mundo solo sirve si la conviertes en medicina terrenal.'
    }
  },
  {
    pageNumber: 25,
    chapterId: 5,
    sectionTitle: 'Capítulo 5 — Cuaderno de Trabajo',
    pageTitle: 'Protocolo 3: Consulta Existencial al I Ching',
    subtitle: 'El paso a paso riguroso para interrogar al oráculo con las tres monedas y dialogar con el hexagrama',
    contentType: 'exercise',
    exerciseData: {
      id: 'ex-iching-consultation',
      title: 'Protocolo 3 — Tirada Existencial del I Ching',
      objective: 'Realizar una consulta seria, respetuosa y metodológicamente rigurosa al Libro de las Mutaciones utilizando las tres monedas de bronce para obtener un mapa proyectivo de tu momento actual.',
      steps: [
        {
          stepNumber: 1,
          title: 'Paso 1: Formulación de la Pregunta Esencial de Sentido',
          instruction: 'Evitá preguntas cerradas o adivinatorias ("¿Me va a ir bien?"). Escribí una pregunta existencial abierta: "¿Qué energía interior requiere mi situación actual frente a...?" o "¿Cuál es mi punto ciego en este momento?".',
        },
        {
          stepNumber: 2,
          title: 'Paso 2: Lanzamiento de las Tres Monedas (6 Tiradas)',
          instruction: 'Tomá tres monedas idénticas. Arrójalas seis veces sobre un paño o mesa de madera, anotando el resultado de abajo hacia arriba (Línea 1 a Línea 6). Cara=3, Cruz=2. Suma: 6 (Yin mutante --x--), 7 (Yang firme ------), 8 (Yin receptivo -- --), 9 (Yang mutante ---o---).',
        },
        {
          stepNumber: 3,
          title: 'Paso 3: Identificar los Dos Trigramas',
          instruction: 'Identificá el trigrama inferior (las 3 líneas de abajo) y el trigrama superior (las 3 líneas de arriba). Buscá en la tabla de la página 20 qué fuerzas elementales están en danza (¿Fuego sobre Montaña? ¿Agua sobre Viento?).',
        },
        {
          stepNumber: 4,
          title: 'Paso 4: Lectura del Juicio y las Líneas Mutantes',
          instruction: 'Leé el dictamen del hexagrama resultante. Si obtuviste líneas 6 o 9, esas líneas mutan en su polaridad opuesta, revelando el Hexagrama Secundario (hacia dónde se desplaza la energía si actúas).',
        },
        {
          stepNumber: 5,
          title: 'Paso 5: La Integración Psicológica',
          instruction: 'Cerrá los ojos y preguntate: "¿En qué punto exacto de mi vida estoy actuando con la terquedad que el oráculo describe?". Anotá una resolución íntima que guíe tus pasos esta semana.',
        },
      ],
      applicationExample: 'Ejemplo de Consulta: Un terapeuta dudaba si confrontar a un alumno deshonesto. Preguntó: "¿Cuál debe ser mi postura ética ante este conflicto?". Obtuvo el Hexagrama 21, Shih Ho (Morder a Través): el juicio describe la necesidad de aplicar la ley con claridad y firmeza para que la comunidad no se pudra. Comprendió que su complacencia era miedo a la desaprobación y no bondad real.',
    },
    paragraphs: [
      'El I Ching no juzga desde afuera: revela la constelación que tú mismo estás creando con tus elecciones inconscientes. Tratado con reverencia, se convierte en el más lúcido consejero de tu vida.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap5-iching',
      title: 'Nota de Práctica de Carlitos:',
      variant: 'alchemical',
      text: 'No consultes al I Ching dos veces por la misma pregunta porque no te gustó la respuesta. El oráculo castiga la impertinencia con el silencio o con el ridículo. Escucha a la primera y ponte a trabajar.'
    }
  },
  {
    pageNumber: 26,
    chapterId: 5,
    sectionTitle: 'El Manifiesto de la Completitud',
    pageTitle: 'La Gran Coniunctio y el Compromiso Ético',
    subtitle: 'La piedra filosofal, la reconciliación de los opuestos y la despedida de Carlitos junto al fuego',
    contentType: 'conclusion',
    keyTerms: ['Ganzheit / Completitud', 'Coniunctio Oppositorum', 'Lapis Philosophorum', 'El Fuego y el Mate'],
    paragraphs: [
      'Hemos recorrido veintiséis páginas por el fascinante segundo territorio de la mente profunda y las enseñanzas de Carlitos. Hemos descendido a los abismos de la Sombra Dorada, navegado las metamorfosis del Ánima y el Ánimus, presenciado el baile eterno entre el viejo Senex y el muchacho Puer, y aprendido a escuchar el teatro de cuatro actos de nuestros sueños nocturnos.',
      'Asimismo, nos atrevimos a abrir la ventana al escarabajo de la sincronicidad y arrojamos las tres monedas de bronce del I Ching para que el oráculo nos devolviera la verdad desnuda de nuestro corazón en el momento presente.',
      'Ahora, la puerta del estudio de Küsnacht vuelve a quedar en silencio. El fuego de la chimenea crepita suavemente en la penumbra. Carlitos toma su pipa de brezo, le da una última cebada al mate argentino y te mira a los ojos con esa intensidad serena que solo tienen aquellos que han mirado a la muerte y al alma sin pestañear.',
      '"Recordá siempre esto —te dice con voz tranquila—: la meta de tu existencia humana jamás fue la perfección. La perfección es una trampa estéril del ego que busca escapar del sufrimiento. Tu verdadera meta es la *completitud* (*Ganzheit*). Completitud significa abrazar tu luz y tu barro, sostener la tensión entre tus opuestos sin quebrarte, y tener el coraje de caminar tu propio mito con la cabeza erguida."',
      'El viaje no termina aquí; apenas está comenzando. Que los símbolos de tus sueños sean tus antorchas, que las sincronías sean las piedras de tu puente, y que el recuerdo de Carlitos sea ese compañero entrañable que te susurra en la noche: *Despierta, camina y sé quien verdaderamente eres*.'
    ],
    carlitosCallout: {
      id: 'carlitos-cap5-cierre',
      title: 'Últimas palabras de C. G. Jung:',
      variant: 'historical_quote',
      text: 'Tu visión se aclarará solamente cuando puedas mirar dentro de tu propio corazón. Quien mira hacia afuera, sueña; quien mira hacia adentro, despierta. El privilegio de una vida es convertirse en quien realmente se es.'
    },
    secondaryCallout: {
      id: 'carlitos-mate-final',
      title: 'Dedicatoria de Carlitos:',
      variant: 'carlitos',
      text: 'Te dejo el mate servido, che. No dejes que se enfríe. La próxima charla la escribís vos con las decisiones que tomes a partir de mañana.'
    }
  },
];
