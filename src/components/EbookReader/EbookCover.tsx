import React from 'react';
import { EBOOK_PAGES } from '../../data/ebookContent';
import { OrnamentalDivider } from '../OrnamentalDivider';
import {
  OrnamentalCorner,
  GoldenScarabIcon,
  IChingCoinsIcon,
  AntiqueCompassIcon,
  ArgentineMateIcon,
  AntiquePostageStamp,
} from '../VintageSvgIcons';

export const EbookCover: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto my-6 sm:my-10 p-5 sm:p-10 paper-dark-leather rounded-sm shadow-2xl relative overflow-hidden transition-all duration-300 print-page-sheet min-h-[1400px] sm:min-h-[1600px] flex flex-col justify-between select-none">
      
      {/* Outer Monumental Ornamental Gold Frame */}
      <div className="border-4 border-double border-[#aa8032] p-5 sm:p-10 relative bg-[#1c150f]/90 min-h-[1320px] sm:min-h-[1520px] flex-1 flex flex-col justify-between shadow-2xl overflow-hidden">
        
        {/* Four Antique Ornamental Filigree Corners */}
        <div className="absolute top-2 left-2">
          <OrnamentalCorner position="top-left" className="w-12 h-12 sm:w-16 sm:h-16" color="#d4af37" />
        </div>
        <div className="absolute top-2 right-2">
          <OrnamentalCorner position="top-right" className="w-12 h-12 sm:w-16 sm:h-16" color="#d4af37" />
        </div>
        <div className="absolute bottom-2 left-2">
          <OrnamentalCorner position="bottom-left" className="w-12 h-12 sm:w-16 sm:h-16" color="#d4af37" />
        </div>
        <div className="absolute bottom-2 right-2">
          <OrnamentalCorner position="bottom-right" className="w-12 h-12 sm:w-16 sm:h-16" color="#d4af37" />
        </div>

        {/* Top Header Label & Astronomical / Alchemical Glyphs */}
        <div className="text-center pt-2 sm:pt-4">
          <div className="flex items-center justify-center gap-3 text-xs tracking-[0.35em] font-mono text-[#d4af37] font-bold uppercase">
            <span>✦</span>
            <span>MANUAL DE INVESTIGACIÓN PSÍQUICA & AUTOCONOCIMIENTO</span>
            <span>✦</span>
          </div>

          <div className="mt-2 text-[10px] tracking-[0.25em] font-serif text-[#aa8032] uppercase">
            BIBLIOTECA PRIVADA DE MITOLOGÍA PERSONAL • VOLUMEN II
          </div>

          <div className="w-full my-4 flex items-center justify-center gap-4 text-[#d4af37]">
            <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#aa8032] to-[#d4af37]" />
            <div className="flex items-center gap-3 text-xs text-[#d4af37]">
              <span>☿</span>
              <span>☉</span>
              <span>☯</span>
              <span>☽</span>
              <span>🜍</span>
            </div>
            <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#aa8032] to-[#d4af37]" />
          </div>
        </div>

        {/* Central Monumental Title Block & Alchemical Medallion */}
        <div className="flex flex-col items-center justify-center text-center my-auto py-6 space-y-6">
          
          {/* Author Kicker */}
          <div className="space-y-1">
            <span className="font-signature text-3xl sm:text-4xl text-[#d4af37] block -mb-2">
              Edición Magistral de Archivo
            </span>
            <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#aa8032] font-semibold block">
              GUIADO POR LA EXPERIENCIA DE CARL GUSTAV JUNG
            </span>
          </div>

          {/* Monumental Title */}
          <div className="space-y-2 max-w-3xl">
            <h1 className="font-playfair text-4xl sm:text-6xl md:text-7xl font-black text-[#f3e8cf] tracking-tight leading-none uppercase gold-text-emboss">
              Mi amigo Carlitos
            </h1>
            <div className="inline-block px-6 py-1 bg-[#231a12] border-y border-[#aa8032] text-[#d4af37] font-playfair font-black tracking-[0.4em] text-lg sm:text-2xl uppercase mt-1">
              VOLUMEN II
            </div>
          </div>

          {/* Subtitle in Classical Sloping Elegant Typography */}
          <div className="max-w-xl mx-auto space-y-2">
            <p className="font-cormorant italic text-xl sm:text-2xl md:text-3xl text-[#dfcea6] font-semibold leading-snug">
              Arquetipos Profundos • El Teatro de los Sueños • Sincronicidades • El Oráculo del I Ching
            </p>
          </div>

          {/* Golden Fillet Divider */}
          <div className="w-full max-w-md my-2 flex items-center justify-center gap-3 text-[#d4af37]">
            <div className="flex-1 h-[1.5px] bg-gradient-to-r from-transparent via-[#aa8032] to-[#d4af37]" />
            <span className="text-lg">❖</span>
            <div className="flex-1 h-[1.5px] bg-gradient-to-l from-transparent via-[#aa8032] to-[#d4af37]" />
          </div>

          {/* Central Sacred Symbol: The Golden Scarab + I Ching Hexagrams */}
          <div className="relative my-4 p-6 sm:p-8 bg-[#17120d] border-2 border-[#aa8032] rounded-full w-60 h-60 sm:w-72 sm:h-72 flex flex-col items-center justify-center shadow-2xl overflow-hidden">
            
            {/* Concentric Celestial Rings */}
            <div className="absolute inset-2 rounded-full border border-dashed border-[#aa8032]/40" />
            <div className="absolute inset-5 rounded-full border border-[#aa8032]/30" />
            <div className="absolute inset-8 rounded-full border border-dashed border-[#d4af37]/20" />
            
            {/* Four Trigrams around the rim */}
            <div className="absolute top-2 text-[#d4af37] font-serif text-sm">☰</div>
            <div className="absolute bottom-2 text-[#d4af37] font-serif text-sm">☷</div>
            <div className="absolute left-2 text-[#d4af37] font-serif text-sm">☵</div>
            <div className="absolute right-2 text-[#d4af37] font-serif text-sm">☲</div>

            {/* Central Golden Scarab with Sun disc */}
            <div className="z-10 transform scale-110 sm:scale-125">
              <GoldenScarabIcon className="w-24 h-24 sm:w-28 sm:h-28 text-[#d4af37]" color="#d4af37" />
            </div>

            {/* Subtle Latin Motto under Scarab */}
            <div className="z-10 mt-1">
              <span className="text-[9px] font-mono tracking-widest text-[#d4af37] uppercase font-bold">
                UNUS MUNDUS • 1920-1961
              </span>
            </div>
          </div>

          {/* Three Key Relic Icons in a Row */}
          <div className="flex items-center justify-center gap-8 text-[#d4af37] pt-2">
            <div className="flex flex-col items-center gap-1">
              <AntiqueCompassIcon className="w-8 h-8 text-[#d4af37]" />
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#aa8032]">
                Brújula
              </span>
            </div>

            <div className="h-8 w-[1px] bg-[#aa8032]/40" />

            <div className="flex flex-col items-center gap-1">
              <IChingCoinsIcon className="w-10 h-8 text-[#d4af37]" />
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#aa8032]">
                I Ching
              </span>
            </div>

            <div className="h-8 w-[1px] bg-[#aa8032]/40" />

            <div className="flex flex-col items-center gap-1">
              <ArgentineMateIcon className="w-8 h-8 text-[#d4af37]" />
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#aa8032]">
                El Mate
              </span>
            </div>
          </div>

          {/* Author and Publishing Seal */}
          <div className="pt-4 space-y-3 flex flex-col items-center">
            <div className="text-center">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#aa8032] font-semibold block">
                TEXTO & INVESTIGACIÓN
              </span>
              <h3 className="font-playfair text-2xl sm:text-3xl font-black text-[#f3e8cf] tracking-wide mt-0.5">
                Matías Pérez Rojas
              </h3>
            </div>

            {/* Antique Editorial Postage Stamp (Sello postal de archivo) */}
            <div className="pt-2">
              <AntiquePostageStamp
                denomination="25 CTS"
                region="HELVETIA"
                title="ARCHIVO CARLITOS"
                subtitle="SELLO EDITORIAL"
                className="w-36 h-48 sm:w-40 sm:h-52 transform -rotate-1 hover:rotate-0 transition-transform shadow-2xl"
              />
            </div>
          </div>

        </div>

        {/* Footer Editorial Metadata (Zero interactive buttons) */}
        <div className="pt-4 border-t border-[#aa8032]/30 flex flex-col sm:flex-row justify-between items-center text-xs font-mono text-[#aa8032] gap-3">
          <div className="text-center sm:text-left">
            <span>MANUAL ILUSTRADO DE ESTUDIO</span>
          </div>

          <div className="text-center">
            <span className="text-[#d4af37]">✦ {EBOOK_PAGES.length} FOLIOS DE ESTUDIO ✦</span>
          </div>

          <div className="text-center sm:text-right">
            <span>ZÚRICH • KÜSNACHT • BOLLINGEN</span>
          </div>
        </div>

      </div>
    </div>
  );
};
