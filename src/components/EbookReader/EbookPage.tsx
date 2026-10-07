import React from 'react';
import { EbookPageData, CarlitosCallout } from '../../types/ebook';
import { ChaptersMetaData, EBOOK_PAGES } from '../../data/ebookContent';
import { OrnamentalDivider } from '../OrnamentalDivider';
import {
  OrnamentalCorner,
  IChingCoinsIcon,
  SolAndLunaIcon,
  AntiqueCompassIcon,
  ArgentineMateIcon,
  QuillInkwellIcon,
  OuroborosIcon,
  CompassStarIcon,
  VintageClippedPhoto,
} from '../VintageSvgIcons';
import { BookOpen, Layers, Edit3, HelpCircle } from 'lucide-react';

interface EbookPageProps {
  pageData: EbookPageData;
  fontSize?: 'sm' | 'md' | 'lg';
  fontFamily?: 'playfair' | 'baskerville' | 'cormorant' | 'old-standard';
}

interface FolioIntegrationData {
  title: string;
  quote?: string;
  reflectionQuestion: string;
  actionGuideline: string;
}

const FOLIO_INTEGRATIONS: Record<number, FolioIntegrationData> = {
  1: {
    title: 'Reflexión Alquímica • La Disposición al Segundo Viaje',
    quote: '«Quien mira hacia afuera, sueña; quien mira hacia adentro, despierta.» — C.G. Jung',
    reflectionQuestion: '¿Qué certezas del Yo estás dispuesto a soltar para permitir que el inconsciente te revele su sabiduría no planificada?',
    actionGuideline: 'Registra en tu bitácora una situación reciente donde intentar controlarlo todo bloqueó la solución natural.',
  },
  2: {
    title: 'Integración Operativa • La Realidad del Alma',
    quote: '«La psique no es un derivado del cerebro; es un principio de realidad sui generis con su propia gravedad y leyes.»',
    reflectionQuestion: '¿Tratas a tus sueños, intuiciones y vivencias simbólicas como meras fantasías o como hechos psíquicos con consecuencias reales?',
    actionGuideline: 'Elige un símbolo recurrente en tu vida y trátalo hoy como un interlocutor autónomo, no como un invento de tu intelecto.',
  },
  5: {
    title: 'Bitácora Interior • El Diálogo con las Figuras Internas',
    quote: '«No nos iluminamos imaginando figuras de luz, sino haciendo consciente la oscuridad.» — C.G. Jung',
    reflectionQuestion: '¿Qué cualidad que admiras o detestas profundamente en otro es en realidad un potencial oculto de tu propia psique (Sombra Dorada)?',
    actionGuideline: 'Anota tres rasgos de una persona que te impacte fuertemente y pregúntate cómo operan esos mismos rasgos dentro de ti.',
  },
  6: {
    title: 'Auditoría de Distancia Crítica • El Eje Yo-Self',
    quote: '«El peligro no es el arquetipo, sino la pérdida de frontera que transforma la inspiración en fascinación o posesión.»',
    reflectionQuestion: '¿En qué área de tu vida (vocación, ideología, rol) sientes que el arquetipo ha devorado tu juicio personal?',
    actionGuideline: 'Practica hoy el desasimiento consciente: "Yo sirvo a esta vocación, pero yo no soy la causa ni la verdad absoluta".',
  },
  7: {
    title: 'Antídoto a la Inflación • El Ancla de la Humildad',
    quote: '«Cuanto más alta es la torre que el Yo edifica en el aire, más profunda debe ser la raíz que toque la tierra común.»',
    reflectionQuestion: '¿Dónde te descubres hablando como si fueras infalible o invulnerable al error y a la sombra común?',
    actionGuideline: 'Conversa con alguien de confianza y pídeles una mirada honesta sobre tus puntos ciegos sin intentar defenderte.',
  },
  8: {
    title: 'Observación Fenomenológica • La Resonancia Psicosomática',
    quote: '«En su nivel más profundo, la materia y la psique son dos caras de un mismo continuum que Jung denominó psicoid.»',
    reflectionQuestion: '¿Qué síntomas corporales o sensaciones físicas preceden a tus mayores intuiciones o decisiones cruciales?',
    actionGuideline: 'Deténte tres minutos durante el día para escuchar el lenguaje del cuerpo antes de que la mente arme su explicación.',
  },
  10: {
    title: 'Protocolo de Recepción Onírica • La Actitud del Investigador',
    quote: '«El sueño es una pequeña puerta oculta en el santuario más íntimo del alma.» — C.G. Jung',
    reflectionQuestion: '¿Qué mensaje incómodo te ha traído un sueño recientemente que tu mente diurna prefirió desestimar?',
    actionGuideline: 'Coloca tu libreta de sueños junto a la cama y anota las primeras impresiones sensoriales antes de poner los pies en el suelo.',
  },
  12: {
    title: 'Práctica Dramática • El Cuarto Acto (Lysis)',
    quote: '«Comprender un sueño es captar hacia dónde se mueve la trama: la catarsis o la compensación que el inconsciente busca.»',
    reflectionQuestion: '¿Cómo termina la escena central de tu último sueño significativo? ¿Es una resolución, una advertencia o un llamado a la acción?',
    actionGuideline: 'Divide una hoja en cuatro columnas (Exposición, Nudo, Peripecia, Lysis) y desglosa tu sueño más memorable.',
  },
  14: {
    title: 'Atención a la Grieta de la Realidad • El Escarabajo Cotidiano',
    quote: '«La sincronicidad no prueba una causa mágica; revela que el universo tiene un orden que trasciende la causalidad lineal.»',
    reflectionQuestion: '¿Qué coincidencia aparentemente imposible te obligó a detenerte y replantearte el rumbo de una decisión?',
    actionGuideline: 'Mantén una página especial en tu bitácora para registrar coincidencias significativas sin forzar interpretaciones prematuras.',
  },
  16: {
    title: 'Orientación Arquetípica • Navegar con la Brújula Interior',
    quote: '«El destino no está escrito en las estrellas, sino en el tejido sincrónico entre tu actitud consciente y el centro organizador.»',
    reflectionQuestion: '¿Hacia qué dirección te apuntan las sincronicidades recurrentes de este último tiempo?',
    actionGuideline: 'Identifica qué resistencias conscientes estás oponiendo a las señales que la vida te ha presentado de manera reiterada.',
  },
  18: {
    title: 'La Actitud ante el Oráculo • El Respeto al Momento Presente',
    quote: '«El I Ching no te dice lo que va a pasar; te dice en qué calidad de momento te encuentras para que actúes en armonía con el Tao.»',
    reflectionQuestion: '¿Consultas las decisiones desde el deseo de control del Yo o desde la apertura a comprender el momento cósmico?',
    actionGuideline: 'Antes de cualquier consulta oracular, respira profundamente y clarifica tu pregunta en una sola oración transparente.',
  },
  21: {
    title: 'La Alquimia del Caldero (Ting) • Transformación Interior',
    quote: '«En el caldero alquímico, las materias crudas del sufrimiento y la confusión se cocinan hasta transformarse en alimento espiritual.»',
    reflectionQuestion: '¿Qué conflicto actual tuyo está pidiendo ser llevado al caldero interior en lugar de reaccionar impulsivamente hacia afuera?',
    actionGuideline: 'Medita en la quietud del Caldero: sostener el calor de la tensión sin derramar el contenido antes de tiempo.',
  },
};

const SINGLE_FOLIO_CLOSINGS: Record<number, FolioIntegrationData> = {
  17: {
    title: 'Síntesis de Archivo • Clave de Lectura de la Tabla',
    quote: '«El evento sincrónico no es un milagro fortuito: es la irrupción momentánea del orden psicofísico fundamental.»',
    reflectionQuestion: '¿En cuál de las tres categorías de la matriz reconoces tus experiencias sincrónicas más potentes?',
    actionGuideline: 'Revisa tu historial personal y anota al menos un evento en cada fila de la matriz para verificar el patrón.',
  },
  20: {
    title: 'Brújula del Ba Gua • Integración de los Ocho Vientos',
    quote: '«Quien domina los ocho trigramas en su propia psique no teme el movimiento de las estaciones ni el cambio del destino.»',
    reflectionQuestion: '¿Cuál de las ocho funciones arquetípicas está más desatendida en tu vida cotidiana actual?',
    actionGuideline: 'Identifica el trigrama complementario a tu tendencia habitual y formula una acción concreta para integrarlo esta semana.',
  },
  24: {
    title: 'Auditoría Sincrónica • Registro y Verificación',
    quote: '«La coincidencia no se busca con avidez; se recibe con la serenidad de quien sabe que el significado ya está allí.»',
    reflectionQuestion: '¿Qué sesgo de confirmación sueles proyectar sobre los eventos diarios y cómo puedes purificar tu registro?',
    actionGuideline: 'Aplica el protocolo durante 7 días continuos antes de sacar conclusiones definitivas sobre tus sincronicidades.',
  },
};

export const EbookPage: React.FC<EbookPageProps> = ({
  pageData,
  fontSize = 'md',
  fontFamily = 'old-standard',
}) => {
  const fontClassMap = {
    playfair: 'font-playfair',
    baskerville: 'font-baskerville',
    cormorant: 'font-cormorant',
    'old-standard': 'font-old-standard',
  };

  const textSizeMap = {
    sm: 'text-sm sm:text-base leading-relaxed',
    md: 'text-base sm:text-lg leading-relaxed sm:leading-loose',
    lg: 'text-lg sm:text-xl leading-relaxed sm:leading-loose',
  };

  const selectedFontClass = fontClassMap[fontFamily] || 'font-old-standard';
  const selectedTextSizeClass = textSizeMap[fontSize] || textSizeMap['md'];

  const renderFormattedText = (text: string | undefined): React.ReactNode => {
    if (!text) return null;
    const parts = text.split(/(\*{1,2}[^*]+\*{1,2})/g);
    return parts.map((part, i) => {
      if (part.startsWith('*') && part.endsWith('*')) {
        const cleanText = part.replace(/^\*{1,2}|\*{1,2}$/g, '');
        return (
          <strong key={i} className="font-bold text-[#17120d]">
            {cleanText}
          </strong>
        );
      }
      return <React.Fragment key={i}>{part}</React.Fragment>;
    });
  };

  const renderDropCapParagraph = (pText: string, key?: React.Key) => {
    const trimmed = pText.trim();
    if (!trimmed) return null;

    const markdownStartMatch = trimmed.match(/^(\*{1,2})([a-zA-ZÁÉÍÓÚáéíóúÑñÜü0-9])(.*)$/s);

    if (markdownStartMatch) {
      const [, asterisks, firstLetter, remainder] = markdownStartMatch;
      const closeIdx = remainder.indexOf(asterisks);
      if (closeIdx !== -1) {
        const boldOrItalicPart = remainder.slice(0, closeIdx);
        const restOfParagraph = remainder.slice(closeIdx + asterisks.length);
        const isBold = asterisks === '**';

        return (
          <p key={key} className="text-justify leading-relaxed">
            <span className="font-playfair float-left text-[3.4rem] sm:text-[3.8rem] leading-[0.8] pt-1 pr-3 pb-0.5 font-black text-[#17120d] select-none inline-block drop-shadow-xs">
              {firstLetter}
            </span>
            {isBold ? (
              <strong className="font-bold text-[#17120d]">{boldOrItalicPart}</strong>
            ) : (
              <em className="italic">{boldOrItalicPart}</em>
            )}
            {renderFormattedText(restOfParagraph)}
          </p>
        );
      }
    }

    const match = trimmed.match(/^([^a-zA-ZÁÉÍÓÚáéíóúÑñÜü0-9]*)([a-zA-ZÁÉÍÓÚáéíóúÑñÜü0-9])(.*)$/s);

    if (!match) {
      return (
        <p key={key} className="text-justify leading-relaxed">
          {renderFormattedText(pText)}
        </p>
      );
    }

    const [, leadingSymbols, firstLetter, restOfText] = match;

    return (
      <p key={key} className="text-justify leading-relaxed">
        {leadingSymbols}
        <span className="font-playfair float-left text-[3.4rem] sm:text-[3.8rem] leading-[0.8] pt-1 pr-3 pb-0.5 font-black text-[#17120d] select-none inline-block drop-shadow-xs">
          {firstLetter}
        </span>
        {renderFormattedText(restOfText)}
      </p>
    );
  };

  const renderCalloutBox = (callout: CarlitosCallout) => {
    const variant = callout.variant || 'carlitos';

    if (variant === 'left_callout' || callout.position === 'left') {
      return (
        <aside
          key={callout.id}
          className="sm:float-left sm:mr-6 sm:mb-3 sm:mt-1 sm:w-64 w-full p-3.5 bg-[#ebdcb8] border-2 border-[#5a4022] shadow-md relative rounded-xs text-xs z-10 clear-none font-sans"
        >
          <div className="flex items-center gap-1.5 mb-1.5 pb-1 border-b border-[#5a4022]/40">
            <AntiqueCompassIcon className="w-4 h-4 text-[#8f6e28] shrink-0" />
            <h3 className="font-playfair text-[11px] font-bold text-[#17120d] uppercase tracking-wider">
              {callout.title || 'Anotación Clave'}
            </h3>
          </div>
          <p className="font-cormorant italic text-sm sm:text-base text-[#17120d] leading-snug font-semibold">
            "{renderFormattedText(callout.text)}"
          </p>
        </aside>
      );
    }

    if (variant === 'historical_quote') {
      return (
        <aside
          key={callout.id}
          className="my-7 p-5 sm:p-7 bg-[#ebdcb9] border-l-4 border-r-2 border-y border-[#5a4022] shadow-md relative rounded-xs overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-2 opacity-15 pointer-events-none">
            <QuillInkwellIcon className="w-16 h-16 text-[#5a4022]" />
          </div>
          <div className="flex items-center gap-3 mb-3 border-b border-[#5a4022]/30 pb-2">
            <BookOpen className="w-5 h-5 text-[#8f6e28] shrink-0" />
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#8f6e28] block font-bold">
                Archivo Histórico de Küsnacht
              </span>
              <h3 className="font-playfair text-base sm:text-lg font-bold text-[#17120d] uppercase tracking-wider">
                {callout.title || 'Fragmento Histórico de C. G. Jung:'}
              </h3>
            </div>
          </div>
          <p className="font-cormorant italic text-lg sm:text-xl text-[#17120d] leading-relaxed font-semibold">
            "{renderFormattedText(callout.text)}"
          </p>
          <div className="mt-3 pt-2 text-[10px] font-mono text-right text-[#8f6e28] uppercase border-t border-[#5a4022]/20 flex items-center justify-end gap-2">
            <span>✦ C. G. Jung (Obras Completas / Archivo Documentado)</span>
          </div>
        </aside>
      );
    }

    if (variant === 'marginalia') {
      return (
        <aside
          key={callout.id}
          className="my-6 p-4 sm:p-5 bg-[#d8c399]/70 border-2 border-dashed border-[#8f6e28]/70 shadow-xs relative rounded-xs"
        >
          <div className="flex items-center gap-2.5 mb-2 border-b border-[#8f6e28]/40 pb-1.5">
            <Layers className="w-4 h-4 text-[#8f6e28] shrink-0" />
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#8f6e28] block font-bold">
                Nota de Cuaderno & Bitácora
              </span>
              <h3 className="font-playfair text-sm sm:text-base font-bold text-[#17120d] uppercase tracking-wider">
                {callout.title || 'Nota Marginal de Archivo:'}
              </h3>
            </div>
          </div>
          <p className="font-old-standard text-sm sm:text-base text-[#17120d] leading-relaxed italic">
            {renderFormattedText(callout.text)}
          </p>
          <div className="mt-2 text-[10px] font-mono text-right text-[#8f6e28]">
            • Cuaderno de Trabajo • Küsnacht / Bollingen
          </div>
        </aside>
      );
    }

    if (variant === 'glossary') {
      return (
        <aside
          key={callout.id}
          className="sm:float-right sm:ml-6 sm:mb-3 sm:mt-1 sm:w-56 w-full p-3 bg-[#e8d7b2] border border-[#5a4022] shadow-sm relative rounded-xs text-xs z-10 clear-none font-sans"
        >
          <div className="flex items-center gap-1.5 mb-1 pb-1 border-b border-[#5a4022]/30">
            <CompassStarIcon className="w-3.5 h-3.5 text-[#8f6e28] shrink-0" />
            <h3 className="font-playfair text-[11px] font-bold text-[#17120d] uppercase tracking-wider">
              {callout.title || 'Glosario Esencial'}
            </h3>
          </div>
          <p className="font-old-standard text-[11px] sm:text-xs text-[#17120d] leading-snug">
            {renderFormattedText(callout.text)}
          </p>
        </aside>
      );
    }

    if (variant === 'alchemical' || variant === 'iching') {
      return (
        <aside
          key={callout.id}
          className="my-7 p-5 sm:p-7 bg-[#231a12] text-[#ebdcb8] border-2 border-[#aa8032] shadow-xl relative rounded-xs overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-3 opacity-15 pointer-events-none">
            <OuroborosIcon className="w-24 h-24 text-[#aa8032]" />
          </div>
          <div className="flex items-center gap-3 mb-3 border-b border-[#aa8032]/30 pb-2">
            <SolAndLunaIcon className="w-7 h-7 text-[#d4af37] shrink-0" />
            <div>
              <span className="font-signature text-lg text-[#d4af37] block -mb-1">
                Coniunctio & Misterio
              </span>
              <h3 className="font-playfair text-sm sm:text-base font-bold text-[#f2e6cb] uppercase tracking-wider">
                {callout.title || 'Paralelo Hermético & Alquímico:'}
              </h3>
            </div>
          </div>
          <p className="font-cormorant italic text-lg sm:text-xl text-[#f3e8cf] leading-relaxed">
            "{renderFormattedText(callout.text)}"
          </p>
          <div className="mt-3 pt-2 text-[10px] font-mono text-right text-[#d4af37] border-t border-[#aa8032]/20">
            ✦ Mysterium Coniunctionis • C. G. Jung
          </div>
        </aside>
      );
    }

    if (variant === 'context_note') {
      return (
        <aside
          key={callout.id}
          className="my-4 p-3.5 sm:p-4 bg-[#d8c399]/60 border-l-4 border-[#8f6e28] shadow-xs relative rounded-xs"
        >
          <div className="flex items-center gap-2 mb-1.5 pb-1 border-b border-[#8f6e28]/30">
            <HelpCircle className="w-4 h-4 text-[#8f6e28] shrink-0" />
            <h3 className="font-playfair text-xs sm:text-sm font-bold text-[#17120d] uppercase tracking-wider">
              {callout.title || 'Nota de Contexto:'}
            </h3>
          </div>
          <p className="font-old-standard text-xs sm:text-sm text-[#17120d] leading-relaxed">
            {renderFormattedText(callout.text)}
          </p>
        </aside>
      );
    }

    // Default 'carlitos' variant: the warm companion with Argentine Mate
    return (
      <aside
        key={callout.id}
        className="my-7 p-5 sm:p-7 bg-[#ebdcb8] border-2 border-double border-[#5a4022] shadow-lg relative rounded-xs overflow-hidden"
      >
        <div className="flex items-center justify-between gap-3 mb-3 border-b border-[#5a4022]/30 pb-2">
          <div className="flex items-center gap-3">
            <div className="p-1.5 bg-[#231a12] text-[#d4af37] rounded-xs border border-[#8f6e28]">
              <ArgentineMateIcon className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <span className="font-signature text-xl text-[#7a5820] block -mb-1">
                La Charla con el Amigo
              </span>
              <h3 className="font-playfair text-base sm:text-lg font-bold text-[#17120d] uppercase tracking-wider">
                {callout.title || 'Carlitos dice junto al fuego:'}
              </h3>
            </div>
          </div>
          <span className="text-xs text-[#aa8032] font-serif hidden sm:inline">❖ ✦ ❖</span>
        </div>

        <p className="font-cormorant italic text-lg sm:text-xl text-[#17120d] leading-relaxed font-semibold">
          "{renderFormattedText(callout.text)}"
        </p>

        <div className="mt-3 pt-2 text-[10px] font-mono text-right text-[#7a5820] uppercase border-t border-[#5a4022]/15">
          • Carlitos Jung • Küsnacht / Diálogo con el Autor
        </div>
      </aside>
    );
  };

  const isFloatedCallout = (c?: CarlitosCallout) =>
    !!c &&
    (c.variant === 'glossary' ||
      c.variant === 'left_callout' ||
      c.position === 'left' ||
      c.position === 'right');

  const chapterStartMeta = ChaptersMetaData.chapters.find(
    (c) => c.startPage === pageData.pageNumber
  );

  // Split pages: only the extensive topics that genuinely exceed a single Legal sheet
  // (Folios 1, 2, 5, 6, 7, 8, 10, 12, 14, 16, 18, 21)
  const SPLIT_PAGES = new Set([
    1, 2, 5, 6, 7, 8, 10, 12, 14, 16, 18, 21,
  ]);
  const isSplit = SPLIT_PAGES.has(pageData.pageNumber);

  const renderIntegrationBox = (folioNumber: number) => {
    const data = FOLIO_INTEGRATIONS[folioNumber];
    if (!data) return null;

    return (
      <div className="mt-3 sm:mt-4 p-3.5 sm:p-4 bg-[#dfcea6]/45 border-2 border-[#8f6e28]/70 rounded-xs shadow-xs space-y-2 text-left">
        <div className="flex items-center justify-between border-b border-[#8f6e28]/30 pb-1 font-mono text-[11px] uppercase tracking-wider text-[#7a5820] font-bold">
          <div className="flex items-center gap-2">
            <QuillInkwellIcon className="w-3.5 h-3.5 text-[#8f6e28]" />
            <span>{data.title}</span>
          </div>
          <span className="italic text-[#8f6e28] text-[10px]">Bitácora Interior</span>
        </div>

        {data.quote && (
          <p className="font-cormorant italic text-xs sm:text-sm text-[#4a3622] leading-snug pl-2 border-l-2 border-[#aa8032]">
            {data.quote}
          </p>
        )}

        <div className="space-y-1 pt-0.5">
          <p className="font-playfair text-xs sm:text-[13px] font-bold text-[#17120d] leading-snug">
            {data.reflectionQuestion}
          </p>
          <p className="font-old-standard text-[11px] sm:text-xs text-[#2b1f16] leading-relaxed">
            <strong className="font-mono uppercase text-[#7a5820] text-[10px] mr-1">Consigna práctica:</strong>
            {data.actionGuideline}
          </p>
        </div>
      </div>
    );
  };

  const renderSingleClosingBox = (folioNumber: number) => {
    const data = SINGLE_FOLIO_CLOSINGS[folioNumber];
    if (!data) return null;

    return (
      <div className="mt-4 p-3.5 sm:p-4 bg-[#dfcea6]/50 border-2 border-[#8f6e28]/70 rounded-xs shadow-xs space-y-2 text-left">
        <div className="flex items-center justify-between border-b border-[#8f6e28]/30 pb-1 font-mono text-[11px] uppercase tracking-wider text-[#7a5820] font-bold">
          <div className="flex items-center gap-2">
            <CompassStarIcon className="w-3.5 h-3.5 text-[#8f6e28]" />
            <span>{data.title}</span>
          </div>
          <span className="italic text-[#8f6e28] text-[10px]">Síntesis Operativa</span>
        </div>

        {data.quote && (
          <p className="font-cormorant italic text-xs sm:text-sm text-[#4a3622] leading-snug pl-2 border-l-2 border-[#aa8032]">
            {data.quote}
          </p>
        )}

        <div className="space-y-1 pt-0.5">
          <p className="font-playfair text-xs sm:text-[13px] font-bold text-[#17120d] leading-snug">
            {data.reflectionQuestion}
          </p>
          <p className="font-old-standard text-[11px] sm:text-xs text-[#2b1f16] leading-relaxed">
            <strong className="font-mono uppercase text-[#7a5820] text-[10px] mr-1">Consigna práctica:</strong>
            {data.actionGuideline}
          </p>
        </div>
      </div>
    );
  };

  // Common Sheet Shell for Legal Size (8.5in x 14in)
  const renderSheetShell = (
    content: React.ReactNode,
    sheetPart: 'part1' | 'part2' | 'single',
    keySuffix: string
  ) => {
    const isPart1 = sheetPart === 'part1';
    const isPart2 = sheetPart === 'part2';
    const partLabel = isPart1 ? ' • Parte I' : isPart2 ? ' • Parte II' : '';

    return (
      <article
        key={`folio-${pageData.pageNumber}-${keySuffix}`}
        className="w-full max-w-[816px] mx-auto my-6 sm:my-8 print:my-0 p-4 sm:p-6 print:p-0 paper-card rounded-sm shadow-2xl relative transition-all flex flex-col justify-between print-page-sheet legal-sheet overflow-hidden print:overflow-visible"
      >
        {/* Decorative Ornamental Corners */}
        <div className="absolute top-2 left-2">
          <OrnamentalCorner position="top-left" color="#aa8032" />
        </div>
        <div className="absolute top-2 right-2">
          <OrnamentalCorner position="top-right" color="#aa8032" />
        </div>
        <div className="absolute bottom-2 left-2">
          <OrnamentalCorner position="bottom-left" color="#aa8032" />
        </div>
        <div className="absolute bottom-2 right-2">
          <OrnamentalCorner position="bottom-right" color="#aa8032" />
        </div>

        {/* Top Header & Page Header Bar */}
        <header className="border-b border-[#5a4022]/30 pb-2.5 mb-4 sm:mb-5 flex items-center justify-between gap-4 font-mono text-[11px] sm:text-xs text-[#7a5820]">
          <div className="flex items-center gap-2 pl-3">
            <span className="font-bold uppercase tracking-wider text-[#17120d]">
              {pageData.sectionTitle}
            </span>
            <span className="text-[#5a4022]/40">•</span>
            <span className="italic hidden sm:inline text-[#5a4022]">
              Mi amigo Carlitos II
            </span>
          </div>

          <div className="flex items-center gap-2 pr-3">
            <div className="bg-[#17120d] text-[#ebdcb8] border border-[#8f6e28] font-mono font-bold px-2.5 py-0.5 text-[11px] shadow-xs">
              Folio {pageData.pageNumber}{partLabel} / {EBOOK_PAGES.length}
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="flex-1 flex flex-col justify-between min-h-0">
          {content}
        </div>

        <OrnamentalDivider variant="double" className="my-3 sm:my-4" />

        {/* Page Footer Navigation Bar */}
        <footer className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[10px] sm:text-[11px] text-[#7a5820]">
          <div className="flex items-center gap-2 pl-3">
            <span>COLECCIÓN MITOLOGÍA PERSONAL • MATÍAS PÉREZ ROJAS</span>
          </div>

          <div className="flex items-center gap-3 pr-3 font-bold text-[#17120d]">
            {isPart1 ? (
              <span className="text-[#8f6e28] italic font-semibold">
                [ Continúa en Folio {pageData.pageNumber} — Parte II ]
              </span>
            ) : (
              <span>
                Folio {pageData.pageNumber}{partLabel} de {EBOOK_PAGES.length}
              </span>
            )}
          </div>
        </footer>
      </article>
    );
  };

  // Continuation Header Banner for Sheet II
  const renderContinuationHeader = (subtitleText?: string) => (
    <div className="text-center space-y-1 mb-4">
      <div className="inline-flex items-center justify-center gap-2 px-3 py-0.5 bg-[#17120d] text-[#d4af37] border border-[#8f6e28] rounded-2xs text-[10px] font-mono uppercase tracking-widest font-bold">
        <span>✦</span>
        <span>CONTINUACIÓN DEL FOLIO {pageData.pageNumber}</span>
        <span>✦</span>
      </div>
      <h2 className="font-playfair text-xl sm:text-2xl font-black text-[#17120d] uppercase tracking-wide">
        {pageData.pageTitle}
      </h2>
      {subtitleText && (
        <p className="font-cormorant italic text-xs sm:text-sm text-[#5a4022] font-semibold max-w-xl mx-auto">
          {subtitleText}
        </p>
      )}
      <OrnamentalDivider variant="flourish" className="my-2" />
    </div>
  );

  // If page is divided into two Legal sheets
  if (isSplit) {
    let sheet1Content: React.ReactNode = null;
    let sheet2Content: React.ReactNode = null;

    // Case 1: Illustrated Chapter Starters (Folios 1, 10, 14, 18)
    if (pageData.illustrationImage) {
      sheet1Content = (
        <div className="space-y-4">
          {chapterStartMeta && (
            <div className="mb-3 text-center space-y-1">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-1 bg-[#17120d] text-[#d4af37] border-2 border-[#8f6e28] shadow-md rounded-xs">
                <SolAndLunaIcon className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span className="font-playfair font-black text-xs uppercase tracking-[0.2em] text-[#f2e6cb]">
                  {chapterStartMeta.chapterId === 0
                    ? '— INTRODUCCIÓN —'
                    : `— CAPÍTULO ${chapterStartMeta.chapterId} —`}
                </span>
                <SolAndLunaIcon className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
              </div>
              <p className="font-playfair italic text-xs sm:text-sm text-[#5a4022] font-semibold max-w-xl mx-auto">
                {chapterStartMeta.title}
              </p>
              <OrnamentalDivider variant="stars" className="my-1.5" />
            </div>
          )}

          <div className="text-center space-y-1 mb-3">
            <h1 className="font-playfair text-xl sm:text-3xl font-black text-[#17120d] tracking-tight uppercase ink-text">
              {pageData.pageTitle}
            </h1>
            {pageData.subtitle && (
              <p className="font-cormorant italic text-base sm:text-lg text-[#3a281c] max-w-xl mx-auto font-semibold">
                {renderFormattedText(pageData.subtitle)}
              </p>
            )}
            <OrnamentalDivider variant="flourish" className="my-2" />
          </div>

          {pageData.keyTerms && pageData.keyTerms.length > 0 && (
            <div className="mb-3 flex flex-wrap items-center justify-center gap-2 border-y border-[#5a4022]/20 py-1.5 bg-[#d8c399]/30 text-xs font-mono text-[#5a4022]">
              <span className="uppercase text-[#8f6e28] font-bold">Conceptos:</span>
              {pageData.keyTerms.map((term, i) => (
                <span key={i} className="text-[#17120d] font-serif italic text-xs">
                  {renderFormattedText(term)}{i < pageData.keyTerms!.length - 1 ? ' ·' : ''}
                </span>
              ))}
            </div>
          )}

          <figure className="my-3 p-2.5 sm:p-3 bg-[#231a12] border-2 border-[#aa8032] shadow-xl rounded-xs text-center">
            <div className="overflow-hidden border border-[#aa8032]/60 bg-[#17120d] relative">
              <img
                src={pageData.illustrationImage.src}
                alt={pageData.illustrationImage.alt}
                className="w-full max-h-[340px] object-cover mx-auto sepia-vintage"
              />
            </div>
            <figcaption className="mt-2 text-center space-y-0.5">
              <p className="font-cormorant italic text-xs sm:text-sm text-[#f2e6cb] font-semibold leading-snug">
                {pageData.illustrationImage.caption}
              </p>
              {pageData.illustrationImage.credit && (
                <span className="text-[9px] font-mono uppercase tracking-widest text-[#aa8032] block">
                  {pageData.illustrationImage.credit}
                </span>
              )}
            </figcaption>
          </figure>

          <div className={`space-y-3.5 ${selectedFontClass} ${selectedTextSizeClass} text-[#17120d]`}>
            {pageData.paragraphs.slice(0, 2).map((pText, idx) => (
              <React.Fragment key={idx}>
                {idx === 0 ? renderDropCapParagraph(pText, `dropcap-${idx}`) : (
                  <p className="text-justify leading-relaxed">
                    {renderFormattedText(pText)}
                  </p>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      );

      sheet2Content = (
        <div className="space-y-4">
          {renderContinuationHeader('Segunda Parte: Desarrollo e Integración')}

          <div className={`space-y-3.5 ${selectedFontClass} ${selectedTextSizeClass} text-[#17120d]`}>
            {pageData.paragraphs.slice(2).map((pText, idx) => (
              <p key={idx} className="text-justify leading-relaxed">
                {renderFormattedText(pText)}
              </p>
            ))}
          </div>

          {pageData.carlitosCallout && renderCalloutBox(pageData.carlitosCallout)}
          {pageData.secondaryCallout && renderCalloutBox(pageData.secondaryCallout)}

          {pageData.footnotes && pageData.footnotes.length > 0 && (
            <div className="pt-3 mt-4 border-t border-[#5a4022]/40 space-y-1.5 font-old-standard text-xs text-[#2b1f16]">
              <span className="font-playfair font-bold text-[11px] uppercase tracking-wider text-[#8f6e28] block">
                Notas de Aparato Crítico:
              </span>
              <div className="space-y-1 pl-2 border-l-2 border-[#aa8032]/40">
                {pageData.footnotes.map((fn) => (
                  <div key={fn.number} className="leading-snug">
                    <span className="font-mono font-bold text-[#8f6e28] mr-1 text-[11px]">
                      [{fn.number}] {fn.term}:
                    </span>
                    <span className="italic text-[#17120d]">{fn.note}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {renderIntegrationBox(pageData.pageNumber)}
        </div>
      );
    }

    // Case 2: Hexagram 50 (Folio 21)
    else if (pageData.iChingHexagram) {
      sheet1Content = (
        <div className="space-y-4">
          <div className="text-center space-y-1 mb-3">
            <h1 className="font-playfair text-xl sm:text-3xl font-black text-[#17120d] tracking-tight uppercase ink-text">
              {pageData.pageTitle}
            </h1>
            {pageData.subtitle && (
              <p className="font-cormorant italic text-base sm:text-lg text-[#3a281c] max-w-xl mx-auto font-semibold">
                {renderFormattedText(pageData.subtitle)}
              </p>
            )}
            <OrnamentalDivider variant="flourish" className="my-1.5" />
          </div>

          <div className="my-3 p-4 sm:p-5 bg-[#211811] text-[#ebdcb8] border-2 border-[#aa8032] shadow-xl rounded-xs space-y-3">
            <div className="flex items-center justify-between border-b border-[#aa8032]/40 pb-3">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#d4af37] font-bold">
                  Hexagrama {pageData.iChingHexagram.number} • I Ching
                </span>
                <h3 className="font-playfair text-xl sm:text-2xl font-black text-[#f2e6cb]">
                  {pageData.iChingHexagram.nameSpanish}
                </h3>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#17120d] border-2 border-[#aa8032] flex items-center justify-center font-serif text-2xl text-[#d4af37]">
                  {pageData.iChingHexagram.nameChinese}
                </div>
                <IChingCoinsIcon className="w-10 h-10 text-[#d4af37]" />
              </div>
            </div>

            <div className="my-2 max-w-xs mx-auto text-center">
              <div className="p-2 bg-[#1e1710] border border-[#aa8032] shadow-inner rounded-xs">
                <img
                  src={pageData.iChingHexagram.brushImage || '/src/assets/images/hexagram_50_ting_ink_brush_1790694984643.jpg'}
                  alt="Hexagrama Ting"
                  className="w-full max-h-[220px] object-contain mx-auto sepia-[0.22]"
                />
              </div>
            </div>

            <div className="p-3 bg-[#17120d] border-l-4 border-[#d4af37] text-xs">
              <span className="font-playfair font-bold text-[11px] uppercase text-[#d4af37] block mb-0.5">El Juicio:</span>
              <p className="italic text-[#ebdcb8]">"{pageData.iChingHexagram.judgment}"</p>
            </div>
            <div className="p-3 bg-[#17120d] border-l-4 border-[#aa8032] text-xs">
              <span className="font-playfair font-bold text-[11px] uppercase text-[#d4af37] block mb-0.5">La Imagen:</span>
              <p className="italic text-[#ebdcb8]">"{pageData.iChingHexagram.image}"</p>
            </div>
          </div>

          <div className={`space-y-3 ${selectedFontClass} ${selectedTextSizeClass} text-[#17120d]`}>
            {pageData.paragraphs.slice(0, 2).map((pText, idx) => (
              <React.Fragment key={idx}>
                {idx === 0 ? renderDropCapParagraph(pText, `dropcap-${idx}`) : (
                  <p className="text-justify leading-relaxed">
                    {renderFormattedText(pText)}
                  </p>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      );

      sheet2Content = (
        <div className="space-y-4">
          {renderContinuationHeader('Interpretación Psicológica & Cuatro Hexagramas Espejo')}

          <div className="p-4 bg-[#2d2116] border border-[#aa8032]/50 text-xs sm:text-sm text-[#ebdcb8] leading-relaxed">
            <span className="font-playfair font-bold text-xs uppercase text-[#f2e6cb] block mb-1">
              Interpretación Psicológica Junguiana:
            </span>
            <p>{pageData.iChingHexagram.psychologicalMeaning}</p>
          </div>

          <div className={`space-y-3 ${selectedFontClass} ${selectedTextSizeClass} text-[#17120d]`}>
            {pageData.paragraphs.slice(2).map((pText, idx) => (
              <p key={idx} className="text-justify leading-relaxed">
                {renderFormattedText(pText)}
              </p>
            ))}
          </div>

          {pageData.carlitosCallout && renderCalloutBox(pageData.carlitosCallout)}

          {renderIntegrationBox(21)}
        </div>
      );
    }

    // Case 3: All other split theoretical folios (Folios 2, 5, 6, 7, 8, 12, 16)
    else {
      const hasPhoto = !!pageData.clippedPhoto;
      const hasHistoricalNotes = !!pageData.historicalNotes && pageData.historicalNotes.length > 0;
      const hasSecondaryCallout = !!pageData.secondaryCallout;

      // Determine balanced split point for paragraphs
      let splitIdx: number;
      if (hasPhoto) {
        splitIdx = Math.min(2, Math.max(1, pageData.paragraphs.length - 2));
      } else if (hasHistoricalNotes || hasSecondaryCallout) {
        splitIdx = Math.min(2, Math.max(1, Math.floor(pageData.paragraphs.length / 2)));
      } else {
        splitIdx = Math.ceil(pageData.paragraphs.length / 2);
      }

      const pSlice1 = pageData.paragraphs.slice(0, splitIdx);
      const pSlice2 = pageData.paragraphs.slice(splitIdx);

      // Distribute secondary boxes to keep both sheets balanced
      const putNotesOnSheet1 = hasHistoricalNotes && !hasPhoto;
      const putSecCalloutOnSheet1 = hasSecondaryCallout && !hasPhoto && !hasHistoricalNotes;

      sheet1Content = (
        <div className="space-y-4">
          {chapterStartMeta && (
            <div className="mb-3 text-center space-y-1">
              <div className="inline-flex items-center justify-center gap-2 px-4 py-1 bg-[#17120d] text-[#d4af37] border-2 border-[#8f6e28] shadow-md rounded-xs">
                <SolAndLunaIcon className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
                <span className="font-playfair font-black text-xs uppercase tracking-[0.2em] text-[#f2e6cb]">
                  {chapterStartMeta.chapterId === 0
                    ? '— INTRODUCCIÓN —'
                    : `— CAPÍTULO ${chapterStartMeta.chapterId} —`}
                </span>
                <SolAndLunaIcon className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
              </div>
              <p className="font-playfair italic text-xs sm:text-sm text-[#5a4022] font-semibold max-w-xl mx-auto">
                {chapterStartMeta.title}
              </p>
              <OrnamentalDivider variant="stars" className="my-1.5" />
            </div>
          )}

          <div className="text-center space-y-1 mb-3">
            <h1 className="font-playfair text-xl sm:text-3xl font-black text-[#17120d] tracking-tight uppercase ink-text">
              {pageData.pageTitle}
            </h1>
            {pageData.subtitle && (
              <p className="font-cormorant italic text-base sm:text-lg text-[#3a281c] max-w-xl mx-auto font-semibold">
                {renderFormattedText(pageData.subtitle)}
              </p>
            )}
            <OrnamentalDivider variant="flourish" className="my-1.5" />
          </div>

          {pageData.keyTerms && pageData.keyTerms.length > 0 && (
            <div className="mb-3 flex flex-wrap items-center justify-center gap-2 border-y border-[#5a4022]/20 py-1.5 bg-[#d8c399]/30 text-xs font-mono text-[#5a4022]">
              <span className="uppercase text-[#8f6e28] font-bold">Conceptos:</span>
              {pageData.keyTerms.map((term, i) => (
                <span key={i} className="text-[#17120d] font-serif italic text-xs">
                  {renderFormattedText(term)}{i < pageData.keyTerms!.length - 1 ? ' ·' : ''}
                </span>
              ))}
            </div>
          )}

          {pageData.clippedPhoto && (
            <VintageClippedPhoto
              imageUrl={pageData.clippedPhoto.imageUrl}
              caption={pageData.clippedPhoto.caption}
              rotationDeg={pageData.clippedPhoto.rotationDeg}
              side={pageData.clippedPhoto.side}
              altText={pageData.clippedPhoto.altText}
            />
          )}

          <div className={`space-y-3.5 ${selectedFontClass} ${selectedTextSizeClass} text-[#17120d]`}>
            {pSlice1.map((pText, idx) => (
              <React.Fragment key={idx}>
                {idx === 0 ? renderDropCapParagraph(pText, `dropcap-${idx}`) : (
                  <p className="text-justify leading-relaxed">
                    {renderFormattedText(pText)}
                  </p>
                )}
              </React.Fragment>
            ))}
          </div>

          {putNotesOnSheet1 && pageData.historicalNotes && (
            <div className="my-3 p-3.5 bg-[#ebdcb9] border-l-4 border-[#8f6e28] font-mono text-xs text-[#17120d] space-y-1 shadow-xs border border-[#5a4022]/20">
              <div className="font-bold uppercase tracking-widest text-[#8f6e28] mb-1 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#8f6e28]" />
                <span>Hitos documentados (síntesis de archivo)</span>
              </div>
              <ul className="list-disc list-inside space-y-1 font-old-standard text-xs">
                {pageData.historicalNotes.map((note, idx) => (
                  <li key={idx}>{renderFormattedText(note)}</li>
                ))}
              </ul>
            </div>
          )}

          {putSecCalloutOnSheet1 && pageData.secondaryCallout && (
            renderCalloutBox(pageData.secondaryCallout)
          )}
        </div>
      );

      sheet2Content = (
        <div className="space-y-4">
          {renderContinuationHeader('Segunda Parte: Desarrollo e Integración')}

          <div className={`space-y-3.5 ${selectedFontClass} ${selectedTextSizeClass} text-[#17120d]`}>
            {pSlice2.map((pText, idx) => (
              <p key={idx} className="text-justify leading-relaxed">
                {renderFormattedText(pText)}
              </p>
            ))}
          </div>

          {!putSecCalloutOnSheet1 && pageData.secondaryCallout && (
            renderCalloutBox(pageData.secondaryCallout)
          )}

          {pageData.carlitosCallout && renderCalloutBox(pageData.carlitosCallout)}

          {!putNotesOnSheet1 && pageData.historicalNotes && pageData.historicalNotes.length > 0 && (
            <div className="my-3 p-3.5 bg-[#ebdcb9] border-l-4 border-[#8f6e28] font-mono text-xs text-[#17120d] space-y-1 shadow-xs border border-[#5a4022]/20">
              <div className="font-bold uppercase tracking-widest text-[#8f6e28] mb-1 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#8f6e28]" />
                <span>Hitos documentados (síntesis de archivo)</span>
              </div>
              <ul className="list-disc list-inside space-y-1 font-old-standard text-xs">
                {pageData.historicalNotes.map((note, idx) => (
                  <li key={idx}>{renderFormattedText(note)}</li>
                ))}
              </ul>
            </div>
          )}

          {pageData.tableData && pageData.tableData.length > 0 && (
            <div className="my-4 overflow-x-auto border-2 border-[#5a4022] bg-[#ebdcb8] shadow-md">
              <table className="w-full text-left font-old-standard text-xs border-collapse">
                <thead>
                  <tr className="bg-[#17120d] text-[#ebdcb8] font-playfair uppercase tracking-wider text-xs border-b border-[#aa8032]">
                    <th className="p-2.5 border-r border-[#aa8032]/30 w-1/4">Patrón</th>
                    <th className="p-2.5 border-r border-[#aa8032]/30 w-1/3">Manifestaciones</th>
                    <th className="p-2.5 w-5/12">Lectura y riesgo</th>
                  </tr>
                </thead>
                <tbody>
                  {pageData.tableData.map((row, idx) => (
                    <tr
                      key={idx}
                      className={`border-b border-[#5a4022]/30 ${
                        idx % 2 === 0 ? 'bg-[#dfcea6]/40' : 'bg-[#ebdcb9]/60'
                      }`}
                    >
                      <td className="p-2.5 font-bold font-playfair text-[#17120d] border-r border-[#5a4022]/30 align-top">
                        {renderFormattedText(row.archetype)}
                      </td>
                      <td className="p-2.5 border-r border-[#5a4022]/30 align-top">
                        {renderFormattedText(row.symbols)}
                      </td>
                      <td className="p-2.5 align-top text-[#2b1f16]">
                        {renderFormattedText(row.distortion)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {pageData.footnotes && pageData.footnotes.length > 0 && (
            <div className="pt-3 mt-4 border-t border-[#5a4022]/40 space-y-1.5 font-old-standard text-xs text-[#2b1f16]">
              <span className="font-playfair font-bold text-[11px] uppercase tracking-wider text-[#8f6e28] block">
                Notas de Aparato Crítico:
              </span>
              <div className="space-y-1 pl-2 border-l-2 border-[#aa8032]/40">
                {pageData.footnotes.map((fn) => (
                  <div key={fn.number} className="leading-snug">
                    <span className="font-mono font-bold text-[#8f6e28] mr-1 text-[11px]">
                      [{fn.number}] {fn.term}:
                    </span>
                    <span className="italic text-[#17120d]">{fn.note}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {pageData.keyTerms?.some((k) => k.includes('†')) && (
            <div className="pt-2 mt-4 text-[11px] font-mono italic text-[#7a5820] border-t border-[#aa8032]/30">
              † Formulación de la tradición junguiana posterior, no de Jung.
            </div>
          )}

          {renderIntegrationBox(pageData.pageNumber)}
        </div>
      );
    }

    return (
      <div className="split-sheets-container space-y-8 sm:space-y-12 print:space-y-0 print:block print:p-0 print:m-0">
        {renderSheetShell(sheet1Content, 'part1', 'parte-1')}
        {renderSheetShell(sheet2Content, 'part2', 'parte-2')}
      </div>
    );
  }

  // Standard Single Legal Sheet for all other pages
  const singleContent = (
    <div className="space-y-4">
      {chapterStartMeta && (
        <div className="mb-4 text-center space-y-1.5">
          <div className="inline-flex items-center justify-center gap-3 px-5 py-1.5 bg-[#17120d] text-[#d4af37] border-2 border-[#8f6e28] shadow-md rounded-xs">
            <SolAndLunaIcon className="w-4 h-4 text-[#d4af37] shrink-0" />
            <span className="font-playfair font-black text-xs sm:text-sm uppercase tracking-[0.25em] text-[#f2e6cb]">
              {chapterStartMeta.chapterId === 0
                ? '— INTRODUCCIÓN —'
                : `— CAPÍTULO ${chapterStartMeta.chapterId} —`}
            </span>
            <SolAndLunaIcon className="w-4 h-4 text-[#d4af37] shrink-0" />
          </div>
          <p className="font-playfair italic text-sm sm:text-base text-[#5a4022] font-semibold max-w-xl mx-auto">
            {chapterStartMeta.title}
          </p>
          <OrnamentalDivider variant="stars" className="my-2" />
        </div>
      )}

      {/* Main Page Title & Subtitle */}
      <div className="text-center space-y-1.5 mb-5">
        <h1 className="font-playfair text-2xl sm:text-4xl font-black text-[#17120d] tracking-tight leading-tight uppercase ink-text">
          {pageData.pageTitle}
        </h1>
        {pageData.subtitle && (
          <p className="font-cormorant italic text-base sm:text-xl text-[#3a281c] max-w-2xl mx-auto font-semibold">
            {renderFormattedText(pageData.subtitle)}
          </p>
        )}
        <OrnamentalDivider variant="flourish" className="my-2 sm:my-2.5" />
      </div>

      {/* Key Terms Badges */}
      {pageData.keyTerms && pageData.keyTerms.length > 0 && (
        <div className="mb-4 flex flex-wrap items-center justify-center gap-2.5 border-y border-[#5a4022]/20 py-1.5 bg-[#d8c399]/30 text-xs font-mono text-[#5a4022]">
          <span className="uppercase text-[#8f6e28] font-bold">Conceptos Clave:</span>
          {pageData.keyTerms.map((term, i) => (
            <React.Fragment key={i}>
              <span className="text-[#17120d] font-serif italic text-xs sm:text-sm">
                {renderFormattedText(term)}
              </span>
              {i < pageData.keyTerms!.length - 1 && (
                <span className="text-[#aa8032]" aria-hidden="true">
                  ·
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Exercise / Protocol (Folios 23, 24, 25) */}
      {pageData.exerciseData && (
        <div className="p-4 sm:p-5 bg-[#ebdcb8] border-2 border-[#5a4022] space-y-3.5 shadow-md rounded-xs">
          <div className="border-b border-[#5a4022]/30 pb-2 space-y-1">
            <div className="flex items-center gap-2 text-[11px] font-mono uppercase text-[#7a5820] font-bold">
              <Edit3 className="w-3.5 h-3.5 text-[#7a5820]" />
              <span>Protocolo de Bitácora Alquímica • Método Operativo</span>
            </div>
            <h2 className="font-playfair text-lg sm:text-2xl font-extrabold text-[#17120d] uppercase">
              {pageData.exerciseData.title}
            </h2>
            <p className="font-cormorant italic text-xs sm:text-sm text-[#3a281c] font-semibold leading-relaxed pt-1">
              <strong className="text-[#17120d]">Objetivo Operativo:</strong>{' '}
              {pageData.exerciseData.objective}
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="font-playfair font-bold text-xs uppercase tracking-wider text-[#17120d] border-b border-[#5a4022]/20 pb-0.5">
              Pasos de Ejecución ({pageData.exerciseData.steps.length} Pasos):
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-old-standard">
              {pageData.exerciseData.steps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="p-2.5 sm:p-3 bg-[#dfcea6] border border-[#5a4022]/40 flex items-start gap-2.5 rounded-xs shadow-2xs"
                >
                  <span className="font-playfair font-black text-xs text-[#ebdcb8] bg-[#17120d] border border-[#aa8032] w-5 h-5 flex items-center justify-center shrink-0 rounded-xs mt-0.5">
                    {step.stepNumber}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-playfair font-bold text-[#17120d] text-xs leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-[#2b1f16] text-[11px] sm:text-xs leading-relaxed mt-1">
                      {step.instruction}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3 sm:p-3.5 font-old-standard text-xs sm:text-sm text-[#17120d] rounded-xs bg-[#d8c399]/60 border-l-4 border-[#8f6e28] shadow-xs">
            <span className="font-bold font-playfair uppercase tracking-wider block mb-1 text-xs text-[#7a5820]">
              {pageData.exerciseData.exampleLabel || 'Ejemplo Práctico Documentado:'}
            </span>
            <p className="italic text-[#2b1f16] text-xs sm:text-sm leading-relaxed text-justify">
              {pageData.exerciseData.applicationExample}
            </p>
          </div>
        </div>
      )}

      {/* Ba Gua Trigrams Complete Table (Folio 20) */}
      {pageData.iChingTrigrams && pageData.iChingTrigrams.length > 0 && (
        <div className="my-3 overflow-x-auto border-2 border-[#5a4022] bg-[#ebdcb8] shadow-md">
          <table className="w-full text-left font-old-standard text-xs border-collapse">
            <thead>
              <tr className="bg-[#17120d] text-[#ebdcb8] font-playfair uppercase tracking-wider text-xs border-b border-[#aa8032]">
                <th className="p-2.5 border-r border-[#aa8032]/30 w-1/6">Trigrama</th>
                <th className="p-2.5 border-r border-[#aa8032]/30 w-1/4">Elemento</th>
                <th className="p-2.5 border-r border-[#aa8032]/30 w-1/3">Cualidad Arquetípica</th>
                <th className="p-2.5 w-1/4">Función Psíquica</th>
              </tr>
            </thead>
            <tbody>
              {pageData.iChingTrigrams.map((row, idx) => (
                <tr key={idx} className={`border-b border-[#5a4022]/30 ${idx % 2 === 0 ? 'bg-[#dfcea6]/40' : 'bg-[#ebdcb9]/60'}`}>
                  <td className="p-2.5 font-bold font-playfair text-[#17120d] border-r border-[#5a4022]/30">
                    <div className="flex items-center gap-2">
                      <span className="text-lg text-[#7a5820]">{row.symbol}</span>
                      <div>
                        <div className="font-bold">{row.name}</div>
                        <div className="text-[10px] text-[#7a5820] font-serif">{row.chinese}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-2.5 border-r border-[#5a4022]/30 font-semibold text-[#3a281c]">{row.element}</td>
                  <td className="p-2.5 border-r border-[#5a4022]/30 text-[#17120d]">{renderFormattedText(row.archetypalQuality)}</td>
                  <td className="p-2.5 italic text-[#5a4022]">{renderFormattedText(row.psychologicalFunction)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Main Content Body */}
      <div className={`space-y-4 ${selectedFontClass} ${selectedTextSizeClass} text-[#17120d]`}>
        {pageData.clippedPhoto && (
          <VintageClippedPhoto
            imageUrl={pageData.clippedPhoto.imageUrl}
            caption={pageData.clippedPhoto.caption}
            rotationDeg={pageData.clippedPhoto.rotationDeg}
            side={pageData.clippedPhoto.side}
            altText={pageData.clippedPhoto.altText}
          />
        )}

        {(() => {
          const hasCarlitosFloated = isFloatedCallout(pageData.carlitosCallout);
          const hasSecondaryFloated = isFloatedCallout(pageData.secondaryCallout);
          const hasBothFloated = hasCarlitosFloated && hasSecondaryFloated;

          let carlitosTargetIdx = -1;
          let secondaryTargetIdx = -1;

          if (pageData.paragraphs.length > 1) {
            if (hasBothFloated) {
              carlitosTargetIdx = Math.max(1, Math.floor(pageData.paragraphs.length / 3));
              secondaryTargetIdx = Math.max(carlitosTargetIdx + 1, pageData.paragraphs.length - 1);
            } else {
              const mid = Math.max(1, Math.floor(pageData.paragraphs.length / 2));
              if (hasCarlitosFloated) carlitosTargetIdx = mid;
              if (hasSecondaryFloated) secondaryTargetIdx = mid;
            }
          }

          return pageData.paragraphs.map((pText, idx) => (
            <React.Fragment key={idx}>
              {hasCarlitosFloated &&
                idx === carlitosTargetIdx &&
                renderCalloutBox(pageData.carlitosCallout!)}
              {hasSecondaryFloated &&
                idx === secondaryTargetIdx &&
                renderCalloutBox(pageData.secondaryCallout!)}
              {idx === 0 ? (
                renderDropCapParagraph(pText, `dropcap-${idx}`)
              ) : (
                <p className="text-justify leading-relaxed">
                  {renderFormattedText(pText)}
                </p>
              )}
            </React.Fragment>
          ));
        })()}

        {pageData.paragraphs.length <= 1 && (
          <>
            {isFloatedCallout(pageData.carlitosCallout) &&
              renderCalloutBox(pageData.carlitosCallout!)}
            {isFloatedCallout(pageData.secondaryCallout) &&
              renderCalloutBox(pageData.secondaryCallout!)}
          </>
        )}

        {pageData.historicalNotes && pageData.historicalNotes.length > 0 && (
          <div className="my-4 p-4 bg-[#ebdcb9] border-l-4 border-[#8f6e28] font-mono text-xs text-[#17120d] space-y-1.5 shadow-xs border border-[#5a4022]/20">
            <div className="font-bold uppercase tracking-widest text-[#8f6e28] mb-1 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#8f6e28]" />
              <span>Hitos biográficos (síntesis)</span>
            </div>
            <ul className="list-disc list-inside space-y-1 font-old-standard text-xs">
              {pageData.historicalNotes.map((note, idx) => (
                <li key={idx}>{renderFormattedText(note)}</li>
              ))}
            </ul>
          </div>
        )}

        {pageData.carlitosCallout &&
          !isFloatedCallout(pageData.carlitosCallout) &&
          renderCalloutBox(pageData.carlitosCallout)}
        {pageData.secondaryCallout &&
          !isFloatedCallout(pageData.secondaryCallout) &&
          renderCalloutBox(pageData.secondaryCallout)}

        {pageData.tableData && pageData.tableData.length > 0 && (
          <div className="my-5 overflow-x-auto border-2 border-[#5a4022] bg-[#ebdcb8] shadow-md">
            <table className="w-full text-left font-old-standard text-xs border-collapse">
              <thead>
                <tr className="bg-[#17120d] text-[#ebdcb8] font-playfair uppercase tracking-wider text-xs border-b border-[#aa8032]">
                  <th className="p-2.5 border-r border-[#aa8032]/30 w-1/4">Patrón</th>
                  <th className="p-2.5 border-r border-[#aa8032]/30 w-1/3">Manifestaciones</th>
                  <th className="p-2.5 w-5/12">Lectura y riesgo</th>
                </tr>
              </thead>
              <tbody>
                {pageData.tableData.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-[#5a4022]/30 ${
                      idx % 2 === 0 ? 'bg-[#dfcea6]/40' : 'bg-[#ebdcb9]/60'
                    }`}
                  >
                    <td className="p-2.5 font-bold font-playfair text-[#17120d] border-r border-[#5a4022]/30 align-top">
                      {renderFormattedText(row.archetype)}
                    </td>
                    <td className="p-2.5 border-r border-[#5a4022]/30 align-top">
                      {renderFormattedText(row.symbols)}
                    </td>
                    <td className="p-2.5 align-top text-[#2b1f16]">
                      {renderFormattedText(row.distortion)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {pageData.footnotes && pageData.footnotes.length > 0 && (
          <div className="pt-3 mt-4 border-t border-[#5a4022]/40 space-y-1.5 font-old-standard text-xs text-[#2b1f16]">
            <span className="font-playfair font-bold text-[11px] uppercase tracking-wider text-[#8f6e28] block">
              Notas de Aparato Crítico:
            </span>
            <div className="space-y-1 pl-2 border-l-2 border-[#aa8032]/40">
              {pageData.footnotes.map((fn) => (
                <div key={fn.number} className="leading-snug">
                  <span className="font-mono font-bold text-[#8f6e28] mr-1 text-[11px]">
                    [{fn.number}] {fn.term}:
                  </span>
                  <span className="italic text-[#17120d]">{fn.note}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {pageData.keyTerms?.some((k) => k.includes('†')) && (
          <div className="pt-2 mt-3 text-[11px] font-mono italic text-[#7a5820] border-t border-[#aa8032]/30">
            † Formulación de la tradición junguiana posterior, no de Jung.
          </div>
        )}

        {renderSingleClosingBox(pageData.pageNumber)}
      </div>
    </div>
  );

  return renderSheetShell(singleContent, 'single', 'single-page');
};
