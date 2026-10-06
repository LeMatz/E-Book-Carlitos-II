import React from 'react';
import { ChaptersMetaData, EBOOK_PAGES, INDICE_TITULOS } from '../../data/ebookContent';
import { OrnamentalDivider } from '../OrnamentalDivider';
import { OrnamentalCorner } from '../VintageSvgIcons';

/**
 * =========================================================================
 * ÍNDICE DE CONTENIDOS (TABLA DE MATERIAS)
 * =========================================================================
 * Para cambiar el título de cualquier folio o punto del libro:
 * Modificalo directamente en: `src/data/tableOfContents.ts` (objeto INDICE_TITULOS).
 *
 * Al cambiarlo allí en el código del índice, se actualiza AUTOMÁTICAMENTE
 * tanto en esta Tabla de Contenidos como en el folio correspondiente del libro.
 * =========================================================================
 */
export { INDICE_TITULOS } from '../../data/tableOfContents';

export const EbookTableOfContents: React.FC = () => {
  return (
    <div className="w-full max-w-[816px] mx-auto my-6 p-4 sm:p-6 paper-card border-2 border-[#5a4022] rounded-sm shadow-2xl print-page-sheet legal-sheet flex flex-col justify-between relative overflow-hidden">
      
      {/* Decorative Corners */}
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

      <div className="border-4 border-double border-[#aa8032] p-3 sm:p-5 relative bg-[#ebdcb8]/40 flex-1 flex flex-col justify-between">
        
        {/* Header Section */}
        <div className="text-center space-y-1 mb-2 sm:mb-3">
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-[0.25em] text-[#aa8032] uppercase font-bold">
            <span>✦</span>
            <span>TABLA DE MATERIAS & ARQUITECTURA DEL MANUAL</span>
            <span>✦</span>
          </div>

          <h2 className="font-playfair text-2xl sm:text-3xl font-black text-[#17120d] uppercase tracking-wide ink-text">
            Índice de Contenidos
          </h2>
          
          <p className="font-cormorant italic text-xs sm:text-sm text-[#5a4022] max-w-xl mx-auto font-semibold">
            "Mi Amigo Carlitos II" — {EBOOK_PAGES.length} Folios de Arquetipos Profundos, Sueños, Sincronicidades y el Oráculo del I Ching
          </p>

          <OrnamentalDivider variant="stars" className="my-1.5 sm:my-2" />
        </div>

        {/* Chapters Table - Classic Static Dot-Leader Style */}
        <div className="space-y-2 sm:space-y-2.5 my-1">
          {ChaptersMetaData.chapters.map((chapter) => {
            const chapterPages = EBOOK_PAGES.filter(
              (p) => p.pageNumber >= chapter.startPage && p.pageNumber <= chapter.endPage
            );

            return (
              <div
                key={chapter.chapterId}
                className="bg-[#dfcea6]/60 p-2 sm:p-2.5 border border-[#5a4022]/40 rounded-xs space-y-1.5 shadow-xs"
              >
                {/* Chapter Title Row with Dot Leader */}
                <div className="flex items-baseline justify-between gap-2">
                  <div className="font-playfair font-bold text-xs sm:text-sm text-[#17120d] shrink-0 flex items-center gap-1.5">
                    <span className="text-[10px] text-[#aa8032]">❖</span>
                    <span>{chapter.title}</span>
                  </div>

                  {/* Dot Leader Line */}
                  <div className="flex-1 border-b-2 border-dotted border-[#aa8032]/60 mx-1.5 min-w-[15px]" />

                  <div className="font-mono font-bold text-[10px] sm:text-xs bg-[#17120d] text-[#d4af37] border border-[#aa8032] px-2 py-0.5 rounded-xs shrink-0 shadow-xs">
                    Folios {chapter.startPage} – {chapter.endPage}
                  </div>
                </div>

                <p className="font-cormorant italic text-[11px] sm:text-xs text-[#5a4022] -mt-0.5 font-semibold pl-3">
                  {chapter.subtitle}
                </p>

                {/* Static Page Outline List with Dot Leaders */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 pt-1 border-t border-[#5a4022]/20 font-old-standard">
                  {chapterPages.map((page) => (
                    <div
                      key={page.pageNumber}
                      className="flex items-baseline justify-between text-[11px] sm:text-xs py-0.5 border-b border-dotted border-[#5a4022]/30 text-[#17120d]"
                    >
                      <span className="truncate pr-2">
                        <strong className="font-mono text-[#8f6e28] mr-1.5 font-bold">
                          {page.pageNumber}.
                        </strong>
                        {page.pageTitle}
                      </span>
                      <span className="font-mono text-[10px] text-[#aa8032] shrink-0 font-bold">
                        Pág. {page.pageNumber}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Section */}
        <div className="mt-4 pt-3 border-t border-[#aa8032]/40">
          <OrnamentalDivider variant="double" className="my-2" />
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono text-[#7a5820]">
            <span>COLECCIÓN DE MITOLOGÍA PERSONAL • EDICIÓN ESPECIAL 2026</span>
            <span>TEXTO ÍNTEGRO • {EBOOK_PAGES.length} FOLIOS • BITÁCORA ALQUÍMICA INCLUIDA</span>
          </div>
        </div>

      </div>
    </div>
  );
};
