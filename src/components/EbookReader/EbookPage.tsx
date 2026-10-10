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
    md: 'text-base sm:text-[17px] leading-relaxed',
    lg: 'text-base sm:text-lg leading-relaxed',
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
          <strong key={i} className="font-bold text-inherit">
            {cleanText}
          </strong>
        );
      }
      return <React.Fragment key={i}>{part}</React.Fragment>;
    });
  };

  const isFloatedCallout = (c?: CarlitosCallout): boolean =>
    !!c &&
    (c.variant === 'glossary' ||
      c.variant === 'left_callout' ||
      c.position === 'left' ||
      c.position === 'right');

  const chapterStartMeta = ChaptersMetaData.chapters.find(
    (c) => c.startPage === pageData.pageNumber
  );

  const renderSingleClosingBox = (folioNumber: number) => {
    const data = SINGLE_FOLIO_CLOSINGS[folioNumber];
    if (!data) return null;

    return (
      <div className="mt-3 p-3 bg-[#dfcea6]/50 border-2 border-[#8f6e28]/70 rounded-xs shadow-xs space-y-1.5 text-left">
        <div className="flex items-center justify-between border-b border-[#8f6e28]/30 pb-1 font-mono text-[11px] uppercase tracking-wider text-[#7a5820] font-bold">
          <div className="flex items-center gap-1.5">
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

        <div className="space-y-0.5 pt-0.5">
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

  const renderDropCapParagraph = (text: string, key: string) => {
    if (!text) return null;
    const match = text.match(/^([«"“*]*\s*)([A-ZÁÉÍÓÚÑ])(.*)$/s);
    if (!match) {
      return (
        <p key={key} className="text-justify leading-relaxed">
          {renderFormattedText(text)}
        </p>
      );
    }

    const [, leadingSymbols, firstLetter, restOfText] = match;

    return (
      <p key={key} className="text-justify leading-relaxed">
        {leadingSymbols}
        <span className="font-playfair float-left text-[2.8rem] sm:text-[3.2rem] leading-[0.82] pt-0.5 pr-2.5 pb-0 font-black text-[#17120d] select-none inline-block drop-shadow-xs">
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
          className="sm:float-left sm:mr-5 sm:mb-2.5 sm:mt-1 sm:w-60 w-full p-3 bg-[#ebdcb8] border-2 border-[#5a4022] shadow-md relative rounded-xs text-xs z-10 clear-none font-sans"
        >
          <div className="flex items-center gap-1.5 mb-1 pb-1 border-b border-[#5a4022]/40">
            <AntiqueCompassIcon className="w-3.5 h-3.5 text-[#8f6e28] shrink-0" />
            <h3 className="font-playfair text-[11px] font-bold text-[#17120d] uppercase tracking-wider">
              {callout.title || 'Anotación Clave'}
            </h3>
          </div>
          <p className="font-cormorant italic text-sm sm:text-[15px] text-[#17120d] leading-snug font-semibold">
            "{renderFormattedText(callout.text)}"
          </p>
        </aside>
      );
    }

    if (variant === 'historical_quote') {
      return (
        <aside
          key={callout.id}
          className="my-3 sm:my-3.5 p-3.5 sm:p-4 bg-[#ebdcb9] border-l-4 border-r-2 border-y border-[#5a4022] shadow-md relative rounded-xs overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-1.5 border-b border-[#5a4022]/30 pb-1">
            <BookOpen className="w-4 h-4 text-[#8f6e28] shrink-0" />
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#8f6e28] block font-bold">
                Archivo Histórico de Küsnacht
              </span>
              <h3 className="font-playfair text-sm sm:text-base font-bold text-[#17120d] uppercase tracking-wider">
                {callout.title || 'Fragmento Histórico de C. G. Jung:'}
              </h3>
            </div>
          </div>
          <p className="font-cormorant italic text-base sm:text-lg text-[#17120d] leading-relaxed font-semibold">
            "{renderFormattedText(callout.text)}"
          </p>
          <div className="mt-2 pt-1 text-[10px] font-mono text-right text-[#8f6e28] uppercase border-t border-[#5a4022]/20 flex items-center justify-end gap-1.5">
            <span>✦ C. G. Jung (Obras Completas / Archivo Documentado)</span>
          </div>
        </aside>
      );
    }

    if (variant === 'marginalia') {
      return (
        <aside
          key={callout.id}
          className="my-2.5 sm:my-3 p-3 sm:p-3.5 bg-[#d8c399]/70 border-2 border-dashed border-[#8f6e28]/70 shadow-xs relative rounded-xs"
        >
          <div className="flex items-center gap-2 mb-1.5 border-b border-[#8f6e28]/40 pb-1">
            <Layers className="w-3.5 h-3.5 text-[#8f6e28] shrink-0" />
            <div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#8f6e28] block font-bold">
                Nota de Cuaderno & Bitácora
              </span>
              <h3 className="font-playfair text-xs sm:text-sm font-bold text-[#17120d] uppercase tracking-wider">
                {callout.title || 'Nota Marginal de Archivo:'}
              </h3>
            </div>
          </div>
          <p className="font-old-standard text-xs sm:text-sm text-[#17120d] leading-relaxed italic">
            {renderFormattedText(callout.text)}
          </p>
          <div className="mt-1 text-[10px] font-mono text-right text-[#8f6e28]">
            • Cuaderno de Trabajo • Küsnacht / Bollingen
          </div>
        </aside>
      );
    }

    if (variant === 'glossary') {
      return (
        <aside
          key={callout.id}
          className="sm:float-right sm:ml-5 sm:mb-2.5 sm:mt-1 sm:w-56 w-full p-2.5 bg-[#e8d7b2] border border-[#5a4022] shadow-sm relative rounded-xs text-xs z-10 clear-none font-sans"
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
          className="my-3 sm:my-3.5 p-3.5 sm:p-4 bg-[#231a12] text-white border-2 border-[#aa8032] shadow-xl relative rounded-xs overflow-hidden"
        >
          <div className="flex items-center gap-2.5 mb-2 border-b border-[#aa8032]/30 pb-1.5">
            <SolAndLunaIcon className="w-5 h-5 text-[#d4af37] shrink-0" />
            <div>
              <span className="font-signature text-base text-[#ffd700] block -mb-1">
                Coniunctio & Misterio
              </span>
              <h3 className="font-playfair text-xs sm:text-sm font-bold text-white uppercase tracking-wider">
                {callout.title || 'Paralelo Hermético & Alquímico:'}
              </h3>
            </div>
          </div>
          <p className="font-cormorant italic text-base sm:text-lg text-white leading-relaxed">
            "{renderFormattedText(callout.text)}"
          </p>
          <div className="mt-2 pt-1 text-[10px] font-mono text-right text-[#ffd700] border-t border-[#aa8032]/20">
            ✦ Mysterium Coniunctionis • C. G. Jung
          </div>
        </aside>
      );
    }

    if (variant === 'context_note') {
      return (
        <aside
          key={callout.id}
          className="my-2.5 sm:my-3 p-2.5 sm:p-3 bg-[#d8c399]/60 border-l-4 border-[#8f6e28] shadow-xs relative rounded-xs"
        >
          <div className="flex items-center gap-1.5 mb-1 pb-0.5 border-b border-[#8f6e28]/30">
            <HelpCircle className="w-3.5 h-3.5 text-[#8f6e28] shrink-0" />
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
        className="my-3 sm:my-3.5 p-3.5 sm:p-4 bg-[#ebdcb8] border-2 border-double border-[#5a4022] shadow-md relative rounded-xs overflow-hidden"
      >
        <div className="flex items-center justify-between gap-2.5 mb-2 border-b border-[#5a4022]/30 pb-1.5">
          <div className="flex items-center gap-2">
            <div className="p-1 bg-[#231a12] text-[#d4af37] rounded-xs border border-[#8f6e28]">
              <ArgentineMateIcon className="w-4 h-4 text-[#d4af37]" />
            </div>
            <div>
              <span className="font-signature text-base text-[#7a5820] block -mb-1">
                La Charla con el Amigo
              </span>
              <h3 className="font-playfair text-xs sm:text-sm font-bold text-[#17120d] uppercase tracking-wider">
                {callout.title || 'Carlitos dice junto al fuego:'}
              </h3>
            </div>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-[#8f6e28] hidden sm:inline">
            Küsnacht • Zúrich
          </span>
        </div>
        <p className="font-cormorant italic text-base sm:text-[17px] text-[#17120d] leading-relaxed font-semibold">
          "{renderFormattedText(callout.text)}"
        </p>
      </aside>
    );
  };

  // Common Sheet Shell for Legal Size (8.5in x 14in)
  // Each folio occupies exactly 1 full, complete Legal page
  const renderSheetShell = (content: React.ReactNode) => {
    return (
      <article
        key={`folio-${pageData.pageNumber}`}
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
        <header className="border-b border-[#5a4022]/30 pb-2 mb-3 sm:mb-4 flex items-center justify-between gap-4 font-mono text-[11px] sm:text-xs text-[#7a5820]">
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
              Folio {pageData.pageNumber} / {EBOOK_PAGES.length}
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="flex-1 flex flex-col justify-between min-h-0">
          {content}
        </div>

        <OrnamentalDivider variant="double" className="my-2 sm:my-3" />

        {/* Page Footer Navigation Bar */}
        <footer className="pt-1 flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-[10px] sm:text-[11px] text-[#7a5820]">
          <div className="flex items-center gap-2 pl-3">
            <span>COLECCIÓN MITOLOGÍA PERSONAL • MATÍAS PÉREZ ROJAS</span>
          </div>

          <div className="flex items-center gap-3 pr-3 font-bold text-[#17120d]">
            <span>
              Folio {pageData.pageNumber} de {EBOOK_PAGES.length}
            </span>
          </div>
        </footer>
      </article>
    );
  };

  // Standard Single Legal Sheet for ALL pages (100% complete page per folio)
  const singleContent = (
    <div className="space-y-3">
      {chapterStartMeta && (
        <div className="mb-2.5 text-center space-y-1">
          <div className="inline-flex items-center justify-center gap-2.5 px-4 py-1 bg-[#17120d] text-[#d4af37] border-2 border-[#8f6e28] shadow-md rounded-xs">
            <SolAndLunaIcon className="w-3.5 h-3.5 text-[#d4af37] shrink-0" />
            <span className="font-playfair font-black text-xs sm:text-sm uppercase tracking-[0.22em] text-[#f2e6cb]">
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

      {/* Main Page Title & Subtitle */}
      <div className="text-center space-y-1 mb-3">
        <h1 className="font-playfair text-xl sm:text-3xl font-black text-[#17120d] tracking-tight leading-tight uppercase ink-text">
          {pageData.pageTitle}
        </h1>
        {pageData.subtitle && (
          <p className="font-cormorant italic text-sm sm:text-lg text-[#3a281c] max-w-2xl mx-auto font-semibold leading-snug">
            {renderFormattedText(pageData.subtitle)}
          </p>
        )}
        <OrnamentalDivider variant="flourish" className="my-1.5" />
      </div>

      {/* Key Terms Badges */}
      {pageData.keyTerms && pageData.keyTerms.length > 0 && (
        <div className="mb-2.5 flex flex-wrap items-center justify-center gap-2 border-y border-[#5a4022]/20 py-1 bg-[#d8c399]/30 text-xs font-mono text-[#5a4022]">
          <span className="uppercase text-[#8f6e28] font-bold text-[11px]">Conceptos Clave:</span>
          {pageData.keyTerms.map((term, i) => (
            <React.Fragment key={i}>
              <span className="text-[#17120d] font-serif italic text-xs">
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

      {/* Chapter Opening Full-Color / Sepia Illustration (Folios 1, 10, 14, 18) */}
      {pageData.illustrationImage && (
        <figure className="my-2 p-1.5 sm:p-2 bg-[#231a12] text-white border-2 border-[#aa8032] shadow-md rounded-xs text-center max-w-lg mx-auto">
          <div className="overflow-hidden border border-[#aa8032]/60 bg-[#17120d] relative">
            <img
              src={pageData.illustrationImage.src}
              alt={pageData.illustrationImage.alt}
              className="w-full max-h-[140px] sm:max-h-[155px] object-cover mx-auto sepia-vintage"
            />
          </div>
          <figcaption className="mt-1 text-center space-y-0.5">
            <p className="font-cormorant italic text-xs text-white leading-tight font-semibold">
              {pageData.illustrationImage.caption}
            </p>
            {pageData.illustrationImage.credit && (
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#ffd700] block">
                {pageData.illustrationImage.credit}
              </span>
            )}
          </figcaption>
        </figure>
      )}

      {/* I Ching Hexagram Card (Folio 21) */}
      {pageData.iChingHexagram && (
        <div className="my-2.5 p-3 bg-[#211811] text-white border-2 border-[#aa8032] shadow-lg rounded-xs space-y-2">
          <div className="flex items-center justify-between border-b border-[#aa8032]/40 pb-1.5">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#ffd700] font-bold">
                Hexagrama {pageData.iChingHexagram.number} • I Ching
              </span>
              <h3 className="font-playfair text-lg sm:text-xl font-black text-white">
                {pageData.iChingHexagram.nameSpanish}
              </h3>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-[#17120d] border border-[#aa8032] flex items-center justify-center font-serif text-lg text-[#ffd700]">
                {pageData.iChingHexagram.nameChinese}
              </div>
              <IChingCoinsIcon className="w-6 h-6 text-[#ffd700]" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className="p-2 bg-[#17120d] border-l-3 border-[#d4af37] text-white">
              <span className="font-playfair font-bold text-[10px] uppercase text-[#ffd700] block mb-0.5">El Juicio:</span>
              <p className="italic text-white leading-snug">"{pageData.iChingHexagram.judgment}"</p>
            </div>
            <div className="p-2 bg-[#17120d] border-l-3 border-[#aa8032] text-white">
              <span className="font-playfair font-bold text-[10px] uppercase text-[#ffd700] block mb-0.5">La Imagen:</span>
              <p className="italic text-white leading-snug">"{pageData.iChingHexagram.image}"</p>
            </div>
          </div>

          <div className="p-2 bg-[#17120d]/80 border border-[#aa8032]/40 text-xs text-white">
            <span className="font-playfair font-bold text-[10px] uppercase text-[#ffd700] block mb-0.5">Sentido Psicológico Junguiano:</span>
            <p className="text-white leading-relaxed">{pageData.iChingHexagram.psychologicalMeaning}</p>
          </div>
        </div>
      )}

      {/* Exercise / Protocol (Folios 23, 24, 25) */}
      {pageData.exerciseData && (
        <div className="p-3.5 sm:p-4 bg-[#ebdcb8] border-2 border-[#5a4022] space-y-2.5 shadow-md rounded-xs">
          <div className="border-b border-[#5a4022]/30 pb-1.5 space-y-0.5">
            <div className="flex items-center gap-1.5 text-[10px] font-mono uppercase text-[#7a5820] font-bold">
              <Edit3 className="w-3.5 h-3.5 text-[#7a5820]" />
              <span>Protocolo de Bitácora Alquímica • Método Operativo</span>
            </div>
            <h2 className="font-playfair text-base sm:text-xl font-extrabold text-[#17120d] uppercase">
              {pageData.exerciseData.title}
            </h2>
            <p className="font-cormorant italic text-xs sm:text-sm text-[#3a281c] font-semibold leading-snug">
              <strong className="text-[#17120d]">Objetivo Operativo:</strong>{' '}
              {pageData.exerciseData.objective}
            </p>
          </div>

          <div className="space-y-1.5">
            <h3 className="font-playfair font-bold text-xs uppercase tracking-wider text-[#17120d] border-b border-[#5a4022]/20 pb-0.5">
              Pasos de Ejecución ({pageData.exerciseData.steps.length} Pasos):
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-old-standard">
              {pageData.exerciseData.steps.map((step) => (
                <div
                  key={step.stepNumber}
                  className="p-2 bg-[#dfcea6] border border-[#5a4022]/40 flex items-start gap-2 rounded-xs shadow-2xs"
                >
                  <span className="font-playfair font-black text-xs text-[#ebdcb8] bg-[#17120d] border border-[#aa8032] w-5 h-5 flex items-center justify-center shrink-0 rounded-xs mt-0.5">
                    {step.stepNumber}
                  </span>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-playfair font-bold text-[#17120d] text-xs leading-tight">
                      {step.title}
                    </h4>
                    <p className="text-[#2b1f16] text-[11px] leading-relaxed mt-0.5">
                      {step.instruction}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-2.5 font-old-standard text-xs text-[#17120d] rounded-xs bg-[#d8c399]/60 border-l-3 border-[#8f6e28] shadow-xs">
            <span className="font-bold font-playfair uppercase tracking-wider block mb-0.5 text-[11px] text-[#7a5820]">
              {pageData.exerciseData.exampleLabel || 'Ejemplo Práctico Documentado:'}
            </span>
            <p className="italic text-[#2b1f16] text-xs leading-relaxed text-justify">
              {pageData.exerciseData.applicationExample}
            </p>
          </div>
        </div>
      )}

      {/* Ba Gua Trigrams Complete Table (Folio 20) */}
      {pageData.iChingTrigrams && pageData.iChingTrigrams.length > 0 && (
        <div className="my-2.5 overflow-x-auto border-2 border-[#5a4022] bg-[#ebdcb8] shadow-md">
          <table className="w-full text-left font-old-standard text-xs border-collapse">
            <thead>
              <tr className="bg-[#17120d] text-[#ebdcb8] font-playfair uppercase tracking-wider text-xs border-b border-[#aa8032]">
                <th className="p-2 border-r border-[#aa8032]/30 w-1/6">Trigrama</th>
                <th className="p-2 border-r border-[#aa8032]/30 w-1/4">Elemento</th>
                <th className="p-2 border-r border-[#aa8032]/30 w-1/3">Cualidad Arquetípica</th>
                <th className="p-2 w-1/4">Función Psíquica</th>
              </tr>
            </thead>
            <tbody>
              {pageData.iChingTrigrams.map((row, idx) => (
                <tr key={idx} className={`border-b border-[#5a4022]/30 ${idx % 2 === 0 ? 'bg-[#dfcea6]/40' : 'bg-[#ebdcb9]/60'}`}>
                  <td className="p-2 font-bold font-playfair text-[#17120d] border-r border-[#5a4022]/30">
                    <div className="flex items-center gap-1.5">
                      <span className="text-base text-[#7a5820]">{row.symbol}</span>
                      <div>
                        <div className="font-bold text-xs">{row.name}</div>
                        <div className="text-[10px] text-[#7a5820] font-serif">{row.chinese}</div>
                      </div>
                    </div>
                  </td>
                  <td className="p-2 border-r border-[#5a4022]/30 font-semibold text-[#3a281c]">{row.element}</td>
                  <td className="p-2 border-r border-[#5a4022]/30 text-[#17120d]">{renderFormattedText(row.archetypalQuality)}</td>
                  <td className="p-2 italic text-[#5a4022]">{renderFormattedText(row.psychologicalFunction)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Main Content Body */}
      <div className={`space-y-3 ${selectedFontClass} ${selectedTextSizeClass} text-[#17120d]`}>
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
          <div className="my-3 p-3 bg-[#ebdcb9] border-l-4 border-[#8f6e28] font-mono text-xs text-[#17120d] space-y-1 shadow-xs border border-[#5a4022]/20">
            <div className="font-bold uppercase tracking-widest text-[#8f6e28] mb-0.5 flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-[#8f6e28]" />
              <span>Hitos biográficos (síntesis)</span>
            </div>
            <ul className="list-disc list-inside space-y-0.5 font-old-standard text-xs">
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
          <div className="my-3.5 overflow-x-auto border-2 border-[#5a4022] bg-[#ebdcb8] shadow-md">
            <table className="w-full text-left font-old-standard text-xs border-collapse">
              <thead>
                <tr className="bg-[#17120d] text-[#ebdcb8] font-playfair uppercase tracking-wider text-xs border-b border-[#aa8032]">
                  <th className="p-2 border-r border-[#aa8032]/30 w-1/4">Patrón</th>
                  <th className="p-2 border-r border-[#aa8032]/30 w-1/3">Manifestaciones</th>
                  <th className="p-2 w-5/12">Lectura y riesgo</th>
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
                    <td className="p-2 font-bold font-playfair text-[#17120d] border-r border-[#5a4022]/30 align-top">
                      {renderFormattedText(row.archetype)}
                    </td>
                    <td className="p-2 border-r border-[#5a4022]/30 align-top">
                      {renderFormattedText(row.symbols)}
                    </td>
                    <td className="p-2 align-top text-[#2b1f16]">
                      {renderFormattedText(row.distortion)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {pageData.footnotes && pageData.footnotes.length > 0 && (
          <div className="pt-2 mt-3 border-t border-[#5a4022]/40 space-y-1 font-old-standard text-xs text-[#2b1f16]">
            <span className="font-playfair font-bold text-[11px] uppercase tracking-wider text-[#8f6e28] block">
              Notas de Aparato Crítico:
            </span>
            <div className="space-y-0.5 pl-2 border-l-2 border-[#aa8032]/40">
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
          <div className="pt-1.5 mt-2 text-[10px] font-mono italic text-[#7a5820] border-t border-[#aa8032]/30">
            † Formulación de la tradición junguiana posterior, no de Jung.
          </div>
        )}

        {renderSingleClosingBox(pageData.pageNumber)}
      </div>
    </div>
  );

  return renderSheetShell(singleContent);
};
