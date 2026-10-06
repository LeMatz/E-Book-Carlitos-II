import React, { useState } from 'react';
import { EBOOK_PAGES } from './data/ebookContent';
import { INDICE_TITULOS } from './data/tableOfContentsData';
import { EbookCover } from './components/EbookReader/EbookCover';
import { EbookTableOfContents } from './components/EbookReader/EbookTableOfContents';
import { EbookPage } from './components/EbookReader/EbookPage';
import { EbookBackCover } from './components/EbookReader/EbookBackCover';
import { Printer } from 'lucide-react';

export default function App() {
  const [pageTitles, setPageTitles] = useState<Record<number, string>>(() => {
    try {
      const saved = localStorage.getItem('carlitos_ebook_titles');
      if (saved) {
        return { ...INDICE_TITULOS, ...JSON.parse(saved) };
      }
    } catch (e) {
      console.error(e);
    }
    return INDICE_TITULOS;
  });

  const handleUpdateTitle = (pageNumber: number, newTitle: string) => {
    setPageTitles((prev) => {
      const updated = { ...prev, [pageNumber]: newTitle.trim() };
      try {
        localStorage.setItem('carlitos_ebook_titles', JSON.stringify(updated));
      } catch (e) {
        console.error(e);
      }
      return updated;
    });
  };

  const handleResetTitles = () => {
    try {
      localStorage.removeItem('carlitos_ebook_titles');
    } catch (e) {
      console.error(e);
    }
    setPageTitles(INDICE_TITULOS);
  };

  const handlePrintPdf = () => {
    window.print();
  };

  return (
    <div className="min-h-screen newspaper-bg text-[#17120d] font-old-standard flex flex-col justify-between selection:bg-[#aa8032] selection:text-[#17120d] overflow-x-hidden">
      
      {/* Discreet Publisher Utility Header (Excluded from Print/PDF via print:hidden) */}
      <aside
        aria-label="Controles de exportación"
        className="no-print print:hidden sticky top-0 z-50 bg-[#17120d]/95 backdrop-blur-sm border-b border-[#aa8032]/40 py-2.5 px-4 shadow-xl"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#d4af37]">
            <span className="font-playfair font-black tracking-wider uppercase text-sm text-[#f3e8cf]">
              Mi amigo Carlitos II
            </span>
            <span className="text-[#aa8032] hidden sm:inline">•</span>
            <span className="text-[#ebdcb8]/70 hidden sm:inline">
              Edición de Archivo Lista para Exportación a PDF ({EBOOK_PAGES.length} Folios Completos)
            </span>
          </div>

          <button
            onClick={handlePrintPdf}
            className="px-4 py-2 bg-[#aa8032] hover:bg-[#d4af37] text-[#17120d] font-playfair font-bold text-xs uppercase tracking-wider flex items-center gap-2 rounded-xs shadow-md transition-all cursor-pointer"
            title="Guardar o imprimir este libro completo como PDF"
          >
            <Printer className="w-4 h-4" />
            <span>Guardar / Imprimir PDF</span>
          </button>
        </div>
      </aside>

      {/* Main Continuous Document Flow (Cover -> Index -> Pages -> Backcover) */}
      <main className="flex-1 px-2 sm:px-4 py-6 max-w-7xl mx-auto w-full space-y-12 sm:space-y-16">
        
        {/* 1. PORTADA MONUMENTAL */}
        <section id="folio-portada" aria-label="Portada del libro">
          <EbookCover />
        </section>

        {/* 2. ÍNDICE DE CONTENIDOS (Con sincronización directa a los folios) */}
        <section id="folio-indice" aria-label="Índice de materias">
          <EbookTableOfContents
            pageTitles={pageTitles}
            onUpdateTitle={handleUpdateTitle}
            onResetTitles={handleResetTitles}
          />
        </section>

        {/* 3. LOS FOLIOS DE CONTENIDO (Títulos sincronizados en tiempo real) */}
        {EBOOK_PAGES.map((page) => {
          const currentTitle = pageTitles[page.pageNumber] || page.pageTitle;
          const pageDataWithSyncedTitle = {
            ...page,
            pageTitle: currentTitle,
          };

          return (
            <section
              key={page.pageNumber}
              id={`folio-${page.pageNumber}`}
              aria-label={`Folio ${page.pageNumber}: ${currentTitle}`}
            >
              <EbookPage pageData={pageDataWithSyncedTitle} fontSize="md" fontFamily="old-standard" />
            </section>
          );
        })}

        {/* 4. CONTRAPORTADA DE ARCHIVO */}
        <section id="folio-contraportada" aria-label="Contraportada del libro">
          <EbookBackCover />
        </section>

      </main>

    </div>
  );
}

