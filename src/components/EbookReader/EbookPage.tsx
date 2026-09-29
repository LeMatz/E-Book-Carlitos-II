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
      return part;
    });
  };

  const renderDropCapParagraph = (pText: string) => {
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
          <p className="text-justify leading-relaxed">
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
        <p className="text-justify leading-relaxed">
          {renderFormattedText(pText)}
        </p>
      );
    }

    const [, leadingSymbols, firstLetter, restOfText] = match;

    return (
      <p className="text-justify leading-relaxed">
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

  return (
    <article className="w-full max-w-4xl mx-auto my-6 sm:my-10 p-5 sm:p-10 paper-card rounded-sm shadow-2xl relative transition-all min-h-[1100px] sm:min-h-[1280px] flex flex-col justify-between print-page-sheet overflow-hidden select-none">
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
      <header className="border-b border-[#5a4022]/30 pb-3 mb-6 flex items-center justify-between gap-4 font-mono text-xs text-[#7a5820]">
        <div className="flex items-center gap-2 pl-4">
          <span className="font-bold uppercase tracking-wider text-[#17120d]">
            {pageData.sectionTitle}
          </span>
          <span className="text-[#5a4022]/40">•</span>
          <span className="italic hidden sm:inline text-[#5a4022]">
            Mi amigo Carlitos II
          </span>
        </div>

        <div className="flex items-center gap-3 pr-4">
          <div className="bg-[#17120d] text-[#ebdcb8] border border-[#8f6e28] font-mono font-bold px-3 py-1 text-xs shadow-xs">
            Folio {pageData.pageNumber} / {EBOOK_PAGES.length}
          </div>
        </div>
      </header>

      {/* Chapter Marker Banner if beginning a chapter */}
      {chapterStartMeta && (
        <div className="mb-6 text-center space-y-2 animate-fadeIn">
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
      <div className="text-center space-y-2 mb-8">
        <h1 className="font-playfair text-2xl sm:text-4xl md:text-5xl font-black text-[#17120d] tracking-tight leading-tight uppercase ink-text">
          {pageData.pageTitle}
        </h1>
        {pageData.subtitle && (
          <p className="font-cormorant italic text-lg sm:text-2xl text-[#3a281c] max-w-2xl mx-auto font-semibold">
            {renderFormattedText(pageData.subtitle)}
          </p>
        )}
        <OrnamentalDivider variant="flourish" className="my-3" />
      </div>

      {/* Key Terms Badges (Editorial metadata style - no pills) */}
      {pageData.keyTerms && pageData.keyTerms.length > 0 && (
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3 border-y border-[#5a4022]/20 py-2 bg-[#d8c399]/30 text-xs font-mono text-[#5a4022]">
          <span className="uppercase text-[#8f6e28] font-bold">
            Conceptos Clave:
          </span>
          {pageData.keyTerms.map((term, i) => (
            <React.Fragment key={i}>
              <span className="text-[#17120d] font-serif italic text-sm">
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

      {/* Embedded High-Fidelity Illustration (if present) */}
      {pageData.illustrationImage && (
        <figure className="my-6 p-3 sm:p-4 bg-[#231a12] border-2 border-[#aa8032] shadow-2xl rounded-xs text-center">
          <div className="overflow-hidden border border-[#aa8032]/60 bg-[#17120d] relative group">
            <img
              src={pageData.illustrationImage.src}
              alt={pageData.illustrationImage.alt}
              className={`w-full object-cover mx-auto sepia-vintage ${
                pageData.illustrationImage.aspect === 'portrait'
                  ? 'max-h-[500px]'
                  : 'max-h-[380px]'
              }`}
            />
          </div>
          <figcaption className="mt-3 text-center space-y-1">
            <p className="font-cormorant italic text-sm sm:text-base text-[#f2e6cb] font-semibold leading-snug">
              {pageData.illustrationImage.caption}
            </p>
            {pageData.illustrationImage.credit && (
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#aa8032] block">
                {pageData.illustrationImage.credit}
              </span>
            )}
          </figcaption>
        </figure>
      )}

      {/* Main Content Body */}
      <div className={`space-y-6 ${selectedFontClass} ${selectedTextSizeClass} text-[#17120d]`}>
        {/* Handcrafted Clipped Photograph on side margin with paperclip */}
        {pageData.clippedPhoto && (
          <VintageClippedPhoto
            imageUrl={pageData.clippedPhoto.imageUrl}
            caption={pageData.clippedPhoto.caption}
            rotationDeg={pageData.clippedPhoto.rotationDeg}
            side={pageData.clippedPhoto.side}
            altText={pageData.clippedPhoto.altText}
          />
        )}

        {/* Paragraphs with Drop-Cap on first paragraph & distributed callouts */}
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
                renderDropCapParagraph(pText)
              ) : (
                <p className="text-justify leading-relaxed">
                  {renderFormattedText(pText)}
                </p>
              )}
            </React.Fragment>
          ));
        })()}

        {/* Fallback for floated callouts if page has 1 or fewer paragraphs */}
        {pageData.paragraphs.length <= 1 && (
          <>
            {isFloatedCallout(pageData.carlitosCallout) &&
              renderCalloutBox(pageData.carlitosCallout!)}
            {isFloatedCallout(pageData.secondaryCallout) &&
              renderCalloutBox(pageData.secondaryCallout!)}
          </>
        )}

        {/* Historical Timeline / Notes Box for Biography (if present) */}
        {pageData.historicalNotes && pageData.historicalNotes.length > 0 && (
          <div className="my-6 p-4 bg-[#ebdcb9] border-l-4 border-[#8f6e28] font-mono text-xs sm:text-sm text-[#17120d] space-y-2 shadow-sm border border-[#5a4022]/20">
            <div className="font-bold uppercase tracking-widest text-[#8f6e28] mb-2 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#8f6e28]" />
              <span>Hitos biográficos (síntesis)</span>
            </div>
            <ul className="list-disc list-inside space-y-1.5 font-old-standard text-xs sm:text-sm">
              {pageData.historicalNotes.map((note, idx) => (
                <li key={idx}>{renderFormattedText(note)}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Non-floated Editorial Callout / Ornaments */}
        {pageData.carlitosCallout &&
          !isFloatedCallout(pageData.carlitosCallout) &&
          renderCalloutBox(pageData.carlitosCallout)}
        {pageData.secondaryCallout &&
          !isFloatedCallout(pageData.secondaryCallout) &&
          renderCalloutBox(pageData.secondaryCallout)}

        {/* I CHING HEXAGRAM SHOWCASE (If present) */}
        {pageData.iChingHexagram && (
          <div className="my-8 p-6 sm:p-8 bg-[#211811] text-[#ebdcb8] border-2 border-[#aa8032] shadow-2xl rounded-xs">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-[#aa8032]/40 pb-5">
              <div className="text-center sm:text-left space-y-1">
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#d4af37] font-bold">
                  Hexagrama {pageData.iChingHexagram.number} • I Ching
                </span>
                <h3 className="font-playfair text-2xl sm:text-3xl font-black text-[#f2e6cb]">
                  {pageData.iChingHexagram.nameSpanish}
                </h3>
                <p className="font-cormorant italic text-sm text-[#d4af37]">
                  Trigrama Superior: {pageData.iChingHexagram.upperTrigram} • Trigrama Inferior: {pageData.iChingHexagram.lowerTrigram}
                </p>
              </div>

              {/* Chinese Ideogram and Monies */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-[#17120d] border-2 border-[#aa8032] flex items-center justify-center font-serif text-3xl text-[#d4af37] shadow-inner">
                  {pageData.iChingHexagram.nameChinese}
                </div>
                <IChingCoinsIcon className="w-14 h-14 text-[#d4af37]" />
              </div>
            </div>

            {/* Hexagram Painted with Traditional Ink Brushstrokes (Pinceladas de Tinta China) */}
            <div className="my-6 max-w-sm mx-auto text-center">
              <div className="p-3 bg-[#1e1710] border-2 border-[#aa8032] shadow-2xl rounded-xs">
                <div className="overflow-hidden border border-[#aa8032]/50 bg-[#140e09] relative p-1.5 shadow-inner">
                  <img
                    src={
                      pageData.iChingHexagram.brushImage ||
                      '/src/assets/images/hexagram_50_ting_ink_brush_1790694984643.jpg'
                    }
                    alt={`Pincelada tradicional del Hexagrama ${pageData.iChingHexagram.number} - ${pageData.iChingHexagram.nameSpanish}`}
                    className="w-full max-h-[300px] object-contain mx-auto sepia-[0.22] contrast-[1.12]"
                    loading="lazy"
                  />
                </div>
                <div className="pt-2.5 text-center space-y-0.5">
                  <span className="text-[10px] font-mono text-[#d4af37] uppercase tracking-widest block font-bold">
                    Pincelada Tradicional de Tinta China • Seis Líneas Sagradas
                  </span>
                  <span className="text-[11px] font-cormorant italic text-[#dfcea6] block">
                    Trigrama Superior: {pageData.iChingHexagram.upperTrigram} • Trigrama Inferior: {pageData.iChingHexagram.lowerTrigram}
                  </span>
                </div>
              </div>
            </div>

            {/* Judgment & Psychological Meaning */}
            <div className="space-y-4 font-old-standard text-xs sm:text-sm">
              <div className="p-3 bg-[#17120d] border-l-4 border-[#d4af37]">
                <span className="font-playfair font-bold text-xs uppercase tracking-wider text-[#d4af37] block mb-1">
                  El Juicio del Oráculo:
                </span>
                <p className="italic text-[#ebdcb8] leading-relaxed">
                  "{pageData.iChingHexagram.judgment}"
                </p>
              </div>

              <div className="p-3 bg-[#17120d] border-l-4 border-[#aa8032]">
                <span className="font-playfair font-bold text-xs uppercase tracking-wider text-[#d4af37] block mb-1">
                  La Imagen del Símbolo:
                </span>
                <p className="italic text-[#ebdcb8] leading-relaxed">
                  "{pageData.iChingHexagram.image}"
                </p>
              </div>

              <div className="p-3.5 bg-[#2d2116] border border-[#aa8032]/50">
                <span className="font-playfair font-bold text-xs uppercase tracking-wider text-[#f2e6cb] block mb-1">
                  Interpretación Psicológica Junguiana:
                </span>
                <p className="text-[#ebdcb8] leading-relaxed">
                  {pageData.iChingHexagram.psychologicalMeaning}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* BA GUA TRIGRAMS TABLE (If present) */}
        {pageData.iChingTrigrams && pageData.iChingTrigrams.length > 0 && (
          <div className="my-8 overflow-x-auto border-2 border-[#5a4022] bg-[#ebdcb8] shadow-lg">
            <table className="w-full text-left font-old-standard text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[#17120d] text-[#ebdcb8] font-playfair uppercase tracking-wider text-xs border-b border-[#aa8032]">
                  <th className="p-3 border-r border-[#aa8032]/30 w-1/6">Trigrama</th>
                  <th className="p-3 border-r border-[#aa8032]/30 w-1/4">Elemento & Imagen</th>
                  <th className="p-3 border-r border-[#aa8032]/30 w-1/3">Cualidad Arquetípica</th>
                  <th className="p-3 w-1/4">Función Psíquica</th>
                </tr>
              </thead>
              <tbody>
                {pageData.iChingTrigrams.map((row, idx) => (
                  <tr
                    key={idx}
                    className={`border-b border-[#5a4022]/30 ${
                      idx % 2 === 0 ? 'bg-[#dfcea6]/40' : 'bg-[#ebdcb9]/60'
                    }`}
                  >
                    <td className="p-3 font-bold font-playfair text-[#17120d] border-r border-[#5a4022]/30 align-top">
                      <div className="flex items-center gap-2">
                        <span className="text-xl text-[#7a5820]">{row.symbol}</span>
                        <div>
                          <div className="font-bold">{row.name}</div>
                          <div className="text-[10px] text-[#7a5820] font-serif">{row.chinese}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-3 border-r border-[#5a4022]/30 align-top font-semibold text-[#3a281c]">
                      {row.element}
                    </td>
                    <td className="p-3 border-r border-[#5a4022]/30 align-top text-[#17120d]">
                      {renderFormattedText(row.archetypalQuality)}
                    </td>
                    <td className="p-3 align-top italic text-[#5a4022]">
                      {renderFormattedText(row.psychologicalFunction)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* COMPARISON / SYNCHRONICITY TABLE (If present) */}
        {pageData.tableData && pageData.tableData.length > 0 && (
          <div className="my-8 overflow-x-auto border-2 border-[#5a4022] bg-[#ebdcb8] shadow-lg">
            <table className="w-full text-left font-old-standard text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="bg-[#17120d] text-[#ebdcb8] font-playfair uppercase tracking-wider text-xs border-b border-[#aa8032]">
                  <th className="p-3 border-r border-[#aa8032]/30 w-1/4">Patrón</th>
                  <th className="p-3 border-r border-[#aa8032]/30 w-1/3">Manifestaciones</th>
                  <th className="p-3 w-5/12">Lectura y riesgo</th>
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
                    <td className="p-3 font-bold font-playfair text-[#17120d] border-r border-[#5a4022]/30 align-top">
                      {renderFormattedText(row.archetype)}
                    </td>
                    <td className="p-3 border-r border-[#5a4022]/30 align-top">
                      {renderFormattedText(row.symbols)}
                    </td>
                    <td className="p-3 align-top text-[#2b1f16]">
                      {renderFormattedText(row.distortion)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* PRACTICAL EXERCISE PROTOCOL CONTENT (Printed Journal Format - Zero web inputs) */}
        {pageData.exerciseData && (
          <div className="my-6 p-5 sm:p-8 bg-[#ebdcb8] border-2 border-[#5a4022] space-y-5 shadow-lg rounded-xs">
            {/* Exercise Header */}
            <div className="border-b border-[#5a4022]/30 pb-3 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#7a5820] font-bold">
                <Edit3 className="w-4 h-4 text-[#7a5820]" />
                <span>Protocolo de Bitácora Alquímica</span>
              </div>
              <h2 className="font-playfair text-xl sm:text-3xl font-extrabold text-[#17120d] uppercase tracking-wide">
                {pageData.exerciseData.title}
              </h2>
              <p className="font-cormorant italic text-sm sm:text-base text-[#3a281c] font-semibold leading-relaxed pt-1">
                <strong className="text-[#17120d]">Objetivo Operativo:</strong>{' '}
                {pageData.exerciseData.objective}
              </p>
            </div>

            {/* Exercise Numbered Steps */}
            <div className="space-y-3">
              <h3 className="font-playfair font-bold text-xs sm:text-sm text-[#17120d] uppercase tracking-wider border-b border-[#5a4022]/20 pb-1">
                Pasos de Ejecución ({pageData.exerciseData.steps.length} Pasos):
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-old-standard">
                {pageData.exerciseData.steps.map((step) => (
                  <div
                    key={step.stepNumber}
                    className="p-3.5 bg-[#dfcea6] border border-[#5a4022]/40 flex items-start gap-3 rounded-xs shadow-xs"
                  >
                    <span className="font-playfair font-black text-xs sm:text-sm text-[#ebdcb8] bg-[#17120d] border border-[#aa8032] w-6 h-6 flex items-center justify-center shrink-0 rounded-xs mt-0.5 shadow-xs">
                      {step.stepNumber}
                    </span>
                    <div className="min-w-0 flex-1">
                      <h4 className="font-playfair font-bold text-[#17120d] text-xs sm:text-sm leading-tight">
                        {step.title}
                      </h4>
                      <p className="text-[#2b1f16] text-xs leading-relaxed mt-1">
                        {step.instruction}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Example Box */}
            <div className="p-4 font-old-standard text-xs sm:text-sm text-[#17120d] rounded-xs bg-[#d8c399]/60 border-l-4 border-[#8f6e28]">
              <span className="font-bold font-playfair uppercase tracking-wider block mb-1 text-xs text-[#7a5820]">
                {pageData.exerciseData.exampleLabel || 'Ejemplo Práctico Documentado:'}
              </span>
              <p className="italic text-[#2b1f16] text-xs sm:text-sm leading-relaxed">
                {pageData.exerciseData.applicationExample}
              </p>
            </div>

          </div>
        )}

        {/* Footnotes Apparatus (Notas al pie funcionales) */}
        {pageData.footnotes && pageData.footnotes.length > 0 && (
          <div className="pt-4 mt-6 border-t border-[#5a4022]/40 space-y-2 font-old-standard text-xs text-[#2b1f16]">
            <span className="font-playfair font-bold text-[11px] uppercase tracking-wider text-[#8f6e28] block">
              Notas de Aparato Crítico:
            </span>
            <div className="space-y-1.5 pl-2 border-l-2 border-[#aa8032]/40">
              {pageData.footnotes.map((fn) => (
                <div key={fn.number} className="leading-snug">
                  <span className="font-mono font-bold text-[#8f6e28] mr-1.5 text-[11px]">
                    [{fn.number}] {fn.term}:
                  </span>
                  <span className="italic text-[#17120d]">{fn.note}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Post-Jungian Clarification Note if any keyTerm contains † */}
        {pageData.keyTerms?.some((k) => k.includes('†')) && (
          <div className="pt-2 mt-4 text-[11px] font-mono italic text-[#7a5820] border-t border-[#aa8032]/30">
            † Formulación de la tradición junguiana posterior, no de Jung.
          </div>
        )}
      </div>

      <OrnamentalDivider variant="double" className="my-8" />

      {/* Page Footer Navigation Bar (Editorial metadata only, zero buttons) */}
      <footer className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#7a5820]">
        <div className="flex items-center gap-2 pl-4">
          <span>COLECCIÓN MITOLOGÍA PERSONAL • MATÍAS PÉREZ ROJAS</span>
        </div>

        <div className="flex items-center gap-3 pr-4">
          <span className="font-bold text-[#17120d]">
            Folio {pageData.pageNumber} de {EBOOK_PAGES.length}
          </span>
        </div>
      </footer>
    </article>
  );
};
