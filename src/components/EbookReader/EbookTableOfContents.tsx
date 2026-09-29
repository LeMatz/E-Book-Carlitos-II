import React from 'react';
import { ChaptersMetaData, EBOOK_PAGES } from '../../data/ebookContent';
import { OrnamentalDivider } from '../OrnamentalDivider';
import { OrnamentalCorner } from '../VintageSvgIcons';

export const EbookTableOfContents: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-6 sm:my-10 p-5 sm:p-10 paper-card border-2 border-[#5a4022] rounded-sm shadow-2xl print-page-sheet min-h-[1100px] sm:min-h-[1280px] flex flex-col justify-between relative overflow-hidden select-none">
      
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

      <div className="border-4 border-double border-[#aa8032] p-4 sm:p-8 relative bg-[#ebdcb8]/40 min-h-[1020px] sm:min-h-[1180px] flex-1 flex flex-col justify-between">
        
        {/* Header Section */}
        <div className="text-center space-y-2 mb-4">
          <div className="flex items-center justify-center gap-2 text-xs font-mono tracking-[0.25em] text-[#aa8032] uppercase font-bold">
            <span>✦</span>
            <span>TABLA DE MATERIAS & ARQUITECTURA DEL MANUAL</span>
            <span>✦</span>
          </div>

          <h2 className="font-playfair text-3xl sm:text-4xl font-black text-[#17120d] uppercase tracking-wide ink-text">
            Índice de Contenidos
          </h2>
          
          <p className="font-cormorant italic text-sm sm:text-base text-[#5a4022] max-w-xl mx-auto font-semibold">
            "Mi Amigo Carlitos II" — {EBOOK_PAGES.length} Folios de Arquetipos Profundos, Sueños, Sincronicidades y el Oráculo del I Ching
          </p>

          <OrnamentalDivider variant="stars" className="my-3" />
        </div>

        {/* Chapters Table - Classic Static Dot-Leader Style */}
        <div className="space-y-4 my-2">
          {ChaptersMetaData.chapters.map((chapter) => {
            const chapterPages = EBOOK_PAGES.filter(
              (p) => p.pageNumber >= chapter.startPage && p.pageNumber <= chapter.endPage
            );

            return (
              <div
                key={chapter.chapterId}
                className="bg-[#dfcea6]/60 p-3.5 sm:p-4 border border-[#5a4022]/40 rounded-xs space-y-2.5 shadow-xs"
              >
                {/* Chapter Title Row with Dot Leader */}
                <div className="flex items-baseline justify-between gap-2">
                  <div className="font-playfair font-bold text-base sm:text-lg text-[#17120d] shrink-0 flex items-center gap-2">
                    <span className="text-xs text-[#aa8032]">❖</span>
                    <span>{chapter.title}</span>
                  </div>

                  {/* Dot Leader Line */}
                  <div className="flex-1 border-b-2 border-dotted border-[#aa8032]/60 mx-2 min-w-[20px]" />

                  <div className="font-mono font-bold text-xs bg-[#17120d] text-[#d4af37] border border-[#aa8032] px-2.5 py-0.5 rounded-xs shrink-0 shadow-xs">
                    Folios {chapter.startPage} – {chapter.endPage}
                  </div>
                </div>

                <p className="font-cormorant italic text-xs sm:text-sm text-[#5a4022] -mt-1 font-semibold pl-4">
                  {chapter.subtitle}
                </p>

                {/* Static Page Outline List with Dot Leaders */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5 pt-2 border-t border-[#5a4022]/20 font-old-standard">
                  {chapterPages.map((page) => (
                    <div
                      key={page.pageNumber}
                      className="flex items-baseline justify-between text-xs py-1 border-b border-dotted border-[#5a4022]/30 text-[#17120d]"
                    >
                      <span className="truncate pr-2">
                        <strong className="font-mono text-[#8f6e28] mr-2 font-bold">
                          {page.pageNumber}.
                        </strong>
                        {page.pageTitle}
                      </span>
                      <span className="font-mono text-[11px] text-[#aa8032] shrink-0 font-bold">
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
