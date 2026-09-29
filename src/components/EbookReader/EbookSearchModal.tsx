import React, { useState } from 'react';
import { EBOOK_PAGES } from '../../data/ebookContent';
import { Search, X, ArrowRight, BookOpen } from 'lucide-react';
import { OrnamentalDivider } from '../OrnamentalDivider';

interface EbookSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectPage: (pageNumber: number) => void;
}

export const EbookSearchModal: React.FC<EbookSearchModalProps> = ({
  isOpen,
  onClose,
  onSelectPage,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const query = searchTerm.trim().toLowerCase();

  // Filter matching pages
  const results =
    query.length < 2
      ? []
      : EBOOK_PAGES.filter((page) => {
          const inTitle = page.pageTitle.toLowerCase().includes(query);
          const inSubtitle = page.subtitle?.toLowerCase().includes(query) || false;
          const inTerms = page.keyTerms?.some((t) => t.toLowerCase().includes(query)) || false;
          const inParagraphs = page.paragraphs.some((p) => p.toLowerCase().includes(query));
          const inCallout = page.carlitosCallout?.text.toLowerCase().includes(query) || false;
          const inTable =
            page.tableData?.some(
              (r) =>
                r.archetype.toLowerCase().includes(query) ||
                r.symbols.toLowerCase().includes(query) ||
                r.distortion.toLowerCase().includes(query)
            ) || false;
          const inHexagram =
            page.iChingHexagram &&
            (page.iChingHexagram.nameSpanish.toLowerCase().includes(query) ||
              page.iChingHexagram.judgment.toLowerCase().includes(query) ||
              page.iChingHexagram.psychologicalMeaning.toLowerCase().includes(query));
          const inTrigrams =
            page.iChingTrigrams?.some(
              (t) =>
                t.name.toLowerCase().includes(query) ||
                t.element.toLowerCase().includes(query) ||
                t.archetypalQuality.toLowerCase().includes(query)
            ) || false;

          return (
            inTitle ||
            inSubtitle ||
            inTerms ||
            inParagraphs ||
            inCallout ||
            inTable ||
            inHexagram ||
            inTrigrams
          );
        });

  return (
    <div className="fixed inset-0 z-50 bg-[#17120d]/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#dfcea6] border-4 border-[#5a4022] w-full max-w-2xl p-4 sm:p-6 shadow-2xl relative paper-card max-h-[90vh] flex flex-col rounded-sm">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b-2 border-[#5a4022]">
          <div className="flex items-center gap-2 font-playfair font-black text-lg sm:text-xl text-[#17120d] uppercase">
            <Search className="w-5 h-5 text-[#8f6e28]" />
            <span>Búsqueda en los 26 Folios del Manual</span>
          </div>

          <button
            onClick={onClose}
            className="p-1 hover:bg-[#17120d] hover:text-[#ebdcb8] text-[#17120d] transition-all cursor-pointer border border-[#5a4022] rounded-xs"
            title="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Input Bar */}
        <div className="my-4">
          <div className="relative">
            <input
              type="text"
              autoFocus
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar (ej: sincronía, escarabajo, i ching, senex, ánima, sueño)..."
              className="w-full pl-10 pr-4 py-3 bg-[#f2e6cb] border-2 border-[#5a4022] font-old-standard text-sm text-[#17120d] focus:outline-none focus:border-[#aa8032] shadow-inner placeholder:text-[#8f6e28]/60 rounded-xs"
            />
            <Search className="w-5 h-5 text-[#8f6e28] absolute left-3 top-3.5" />
          </div>
          <div className="text-[10px] font-mono text-[#5a4022] mt-1.5 flex justify-between">
            <span>Búsqueda integral en textos, hexagramas, trigramas, citas y bitácora</span>
            {query.length >= 2 && (
              <span className="font-bold text-[#8f6e28]">{results.length} folios encontrados</span>
            )}
          </div>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto space-y-3 pr-1 font-old-standard">
          {query.length < 2 ? (
            <div className="text-center py-10 font-cormorant italic text-base text-[#5a4022]">
              Ingresa al menos 2 caracteres para explorar los manuscritos del libro...
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-10 space-y-2">
              <p className="font-playfair font-bold text-base text-[#17120d]">
                No se encontraron coincidencias para "{searchTerm}"
              </p>
              <p className="font-cormorant italic text-sm text-[#5a4022]">
                Sugerencias: sombra dorada, escarabajo, Pauli, Bollingen, lysis, hexagrama, trickster.
              </p>
            </div>
          ) : (
            results.map((page) => {
              const matchedParagraph =
                page.paragraphs.find((p) => p.toLowerCase().includes(query)) ||
                page.paragraphs[0];

              return (
                <div
                  key={page.pageNumber}
                  onClick={() => {
                    onSelectPage(page.pageNumber);
                    onClose();
                  }}
                  className="p-3 bg-[#ebdcb9] border border-[#5a4022]/40 rounded-xs hover:border-[#aa8032] hover:bg-[#ebdcb8] transition-all cursor-pointer group shadow-xs"
                >
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-[#ebdcb8] bg-[#17120d] px-2 py-0.5 rounded-xs">
                        Folio {page.pageNumber}
                      </span>
                      <h4 className="font-playfair font-bold text-sm text-[#17120d] group-hover:text-[#8f6e28] transition-colors">
                        {page.pageTitle}
                      </h4>
                    </div>

                    <ArrowRight className="w-4 h-4 text-[#8f6e28] group-hover:translate-x-1 transition-transform" />
                  </div>

                  {page.subtitle && (
                    <p className="font-cormorant italic text-xs text-[#5a4022] mb-1">
                      {page.subtitle}
                    </p>
                  )}

                  {matchedParagraph && (
                    <p className="text-xs text-[#2b1f16] line-clamp-2 leading-relaxed">
                      "{matchedParagraph}"
                    </p>
                  )}
                </div>
              );
            })
          )}
        </div>

      </div>
    </div>
  );
};
