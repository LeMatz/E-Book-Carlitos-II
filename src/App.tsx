import React, { useState } from 'react';
import { EBOOK_PAGES } from './data/ebookContent';
import { INDICE_TITULOS } from './data/tableOfContents';
import { EbookCover } from './components/EbookReader/EbookCover';
import { EbookTableOfContents } from './components/EbookReader/EbookTableOfContents';
import { EbookPage } from './components/EbookReader/EbookPage';
import { EbookBackCover } from './components/EbookReader/EbookBackCover';
import { Printer, Download, Layers, X, Loader2, Sparkles, CheckCircle2 } from 'lucide-react';
import { exportToAdobeIllustrator } from './utils/illustratorExporter';

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

  const [showAiModal, setShowAiModal] = useState(false);
  const [isExportingAi, setIsExportingAi] = useState(false);
  const [selectedFolioForAi, setSelectedFolioForAi] = useState<number>(1);
  const [aiProgress, setAiProgress] = useState<{
    current: number;
    total: number;
    text: string;
  } | null>(null);

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

  const handleExportFullBookAi = async () => {
    setIsExportingAi(true);
    setAiProgress({ current: 0, total: 10, text: 'Iniciando generación de mesas de trabajo .ai...' });
    try {
      await exportToAdobeIllustrator({
        filename: 'mi-amigo-carlitos-ii-completo.ai',
        onProgress: (current, total, text) => {
          setAiProgress({ current, total, text });
        },
      });
      setTimeout(() => {
        setIsExportingAi(false);
        setAiProgress(null);
        setShowAiModal(false);
      }, 1200);
    } catch (error) {
      console.error('Error al exportar a .ai:', error);
      alert('Ocurrió un error al generar el archivo .ai. Por favor intenta de nuevo.');
      setIsExportingAi(false);
      setAiProgress(null);
    }
  };

  const handleExportSingleFolioAi = async (folioNumber: number) => {
    setIsExportingAi(true);
    setAiProgress({ current: 0, total: 2, text: `Preparando Folio ${folioNumber} para Illustrator...` });
    try {
      const elementId = `folio-${folioNumber}`;
      const titleSlug = (pageTitles[folioNumber] || `folio-${folioNumber}`)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      await exportToAdobeIllustrator({
        singleElementId: elementId,
        filename: `folio-${folioNumber}-${titleSlug}.ai`,
        onProgress: (current, total, text) => {
          setAiProgress({ current, total, text });
        },
      });
      setTimeout(() => {
        setIsExportingAi(false);
        setAiProgress(null);
        setShowAiModal(false);
      }, 1000);
    } catch (error) {
      console.error('Error al exportar folio a .ai:', error);
      alert('Ocurrió un error al exportar el folio a .ai.');
      setIsExportingAi(false);
      setAiProgress(null);
    }
  };

  return (
    <div className="min-h-screen newspaper-bg text-[#17120d] font-old-standard flex flex-col justify-between selection:bg-[#aa8032] selection:text-[#17120d] overflow-x-hidden print:overflow-visible print:block print:h-auto print:min-h-0">
      
      {/* Discreet Publisher Utility Header (Excluded from Print/PDF via print:hidden) */}
      <aside
        aria-label="Controles de exportación"
        className="no-print print:hidden sticky top-0 z-50 bg-[#17120d]/95 backdrop-blur-sm border-b border-[#aa8032]/40 py-2.5 px-4 shadow-xl"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono">
          <div className="flex items-center gap-2 text-[#d4af37]">
            <span className="font-playfair font-black tracking-wider uppercase text-sm text-[#f3e8cf]">
              Mi amigo Carlitos II
            </span>
            <span className="text-[#aa8032] hidden sm:inline">•</span>
            <span className="text-[#ebdcb8]/70 hidden sm:inline">
              Edición de Archivo Lista para Exportación a PDF e Illustrator .AI ({EBOOK_PAGES.length} Folios)
            </span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto justify-end flex-wrap sm:flex-nowrap">
            <button
              onClick={handlePrintPdf}
              className="px-3.5 py-1.5 bg-[#aa8032] hover:bg-[#d4af37] text-[#17120d] font-playfair font-bold text-xs uppercase tracking-wider flex items-center gap-2 rounded-xs shadow-md transition-all cursor-pointer"
              title="Guardar o imprimir este libro completo como PDF en tamaño Legal"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Guardar / Imprimir PDF</span>
            </button>

            <button
              onClick={() => setShowAiModal(true)}
              className="px-3.5 py-1.5 bg-[#2a1e14] hover:bg-[#3d2a1c] text-[#d4af37] border border-[#aa8032]/80 hover:border-[#ffd700] font-playfair font-bold text-xs uppercase tracking-wider flex items-center gap-2 rounded-xs shadow-md transition-all cursor-pointer"
              title="Exportar en formato .ai para Adobe Illustrator con mesas de trabajo en tamaño Legal"
            >
              <span className="inline-flex items-center justify-center bg-[#aa8032] text-[#17120d] font-black font-sans text-[10px] px-1 py-0.5 rounded-2xs leading-none">
                AI
              </span>
              <span>Guardar como .AI (Illustrator)</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Modal de Exportación a Adobe Illustrator (.ai) */}
      {showAiModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 no-print print:hidden">
          <div className="bg-[#1c150f] border-2 border-[#aa8032] rounded-xs shadow-2xl max-w-lg w-full p-6 text-[#f3e8cf] relative">
            <button
              onClick={() => !isExportingAi && setShowAiModal(false)}
              disabled={isExportingAi}
              className="absolute top-4 right-4 text-[#ebdcb8]/60 hover:text-[#ffd700] disabled:opacity-30 cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4 border-b border-[#aa8032]/40 pb-3">
              <div className="w-10 h-10 bg-[#aa8032] text-[#17120d] font-black font-sans text-base flex items-center justify-center rounded-xs shadow-md">
                Ai
              </div>
              <div>
                <h3 className="font-playfair text-lg sm:text-xl font-black text-[#f3e8cf] uppercase tracking-wide">
                  Exportar a Adobe Illustrator (.ai)
                </h3>
                <p className="font-mono text-[11px] text-[#d4af37]">
                  Mesas de trabajo en formato Legal (8.5 × 14 in / 612 × 1008 pt)
                </p>
              </div>
            </div>

            <p className="font-old-standard text-xs sm:text-sm text-[#ebdcb8]/90 leading-relaxed mb-5">
              Genera un documento <strong>.ai nativo</strong> compatible con Adobe Illustrator CS6 / CC 2026. Al abrir el archivo en Illustrator, cada página se abrirá directamente como una <em>Mesa de trabajo (Artboard)</em> editable en escala y proporción exacta.
            </p>

            {isExportingAi ? (
              <div className="p-4 bg-[#140e0a] border border-[#aa8032]/40 rounded-xs space-y-3 text-center my-4">
                <Loader2 className="w-7 h-7 text-[#ffd700] animate-spin mx-auto" />
                <p className="font-mono text-xs text-[#d4af37] font-bold">
                  {aiProgress?.text || 'Generando mesas de trabajo...'}
                </p>
                {aiProgress && aiProgress.total > 0 && (
                  <div className="w-full bg-[#2a1e14] h-2 rounded-full overflow-hidden border border-[#aa8032]/40">
                    <div
                      className="bg-[#ffd700] h-full transition-all duration-300"
                      style={{
                        width: `${Math.round((aiProgress.current / aiProgress.total) * 100)}%`,
                      }}
                    />
                  </div>
                )}
                <span className="text-[10px] font-mono text-[#ebdcb8]/60 block">
                  Por favor espera un instante mientras se renderizan los trazados...
                </span>
              </div>
            ) : (
              <div className="space-y-4">
                {/* Opción 1: Todo el libro */}
                <div className="p-3.5 bg-[#231a12] border border-[#aa8032]/60 rounded-xs hover:border-[#ffd700] transition-all">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <Layers className="w-4 h-4 text-[#ffd700]" />
                      <span className="font-playfair font-bold text-sm text-[#f3e8cf]">
                        Libro Completo ({EBOOK_PAGES.length} Folios + Portada + Índice)
                      </span>
                    </div>
                    <span className="text-[10px] font-mono uppercase bg-[#17120d] px-2 py-0.5 text-[#d4af37] border border-[#aa8032]/40">
                      Multi-Artboard .AI
                    </span>
                  </div>
                  <p className="font-old-standard text-xs text-[#ebdcb8]/70 mb-3">
                    Incluye todas las páginas distribuidas en mesas de trabajo secuenciales dentro de un solo archivo .ai.
                  </p>
                  <button
                    onClick={handleExportFullBookAi}
                    className="w-full py-2 bg-[#aa8032] hover:bg-[#d4af37] text-[#17120d] font-playfair font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded-xs shadow-md transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Descargar Libro Completo (.ai)</span>
                  </button>
                </div>

                {/* Opción 2: Folio individual */}
                <div className="p-3.5 bg-[#231a12] border border-[#aa8032]/60 rounded-xs hover:border-[#ffd700] transition-all">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#ffd700]" />
                      <span className="font-playfair font-bold text-sm text-[#f3e8cf]">
                        Folio Individual (.ai)
                      </span>
                    </div>
                    <span className="text-[10px] font-mono uppercase bg-[#17120d] px-2 py-0.5 text-[#d4af37] border border-[#aa8032]/40">
                      1 Mesa de Trabajo
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <select
                      value={selectedFolioForAi}
                      onChange={(e) => setSelectedFolioForAi(Number(e.target.value))}
                      className="flex-1 bg-[#17120d] border border-[#aa8032]/60 text-xs font-mono text-[#f3e8cf] p-1.5 rounded-xs cursor-pointer focus:outline-none focus:border-[#ffd700]"
                    >
                      {EBOOK_PAGES.map((p) => (
                        <option key={p.pageNumber} value={p.pageNumber}>
                          Folio {p.pageNumber}: {pageTitles[p.pageNumber] || p.pageTitle}
                        </option>
                      ))}
                    </select>
                  </div>
                  <button
                    onClick={() => handleExportSingleFolioAi(selectedFolioForAi)}
                    className="w-full py-2 bg-[#2a1e14] hover:bg-[#3d2a1c] text-[#ffd700] border border-[#aa8032] font-playfair font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded-xs shadow-md transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Descargar Folio {selectedFolioForAi} (.ai)</span>
                  </button>
                </div>
              </div>
            )}

            <div className="mt-4 pt-3 border-t border-[#aa8032]/30 flex items-center justify-between text-[11px] font-mono text-[#ebdcb8]/60">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#ffd700]" />
                Compatible con Illustrator CS6, CC 2020-2026
              </span>
              <button
                onClick={() => !isExportingAi && setShowAiModal(false)}
                disabled={isExportingAi}
                className="hover:text-[#ffd700] underline cursor-pointer disabled:opacity-40"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main Continuous Document Flow (Cover -> Index -> Pages -> Backcover) */}
      <main className="flex-1 px-2 sm:px-4 py-6 max-w-7xl mx-auto w-full space-y-12 sm:space-y-16 print:p-0 print:m-0 print:space-y-0 print:w-full print:max-w-none print:block print:overflow-visible">
        
        {/* 1. PORTADA MONUMENTAL */}
        <section id="folio-portada" aria-label="Portada del libro" className="print:block print:p-0 print:m-0 print:w-full">
          <EbookCover />
        </section>

        {/* 2. ÍNDICE DE CONTENIDOS (Con sincronización directa a los folios) */}
        <section id="folio-indice" aria-label="Índice de materias" className="print:block print:p-0 print:m-0 print:w-full">
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
              className="print:block print:p-0 print:m-0 print:w-full"
            >
              <EbookPage pageData={pageDataWithSyncedTitle} fontSize="md" fontFamily="old-standard" />
            </section>
          );
        })}

        {/* 4. CONTRAPORTADA DE ARCHIVO */}
        <section id="folio-contraportada" aria-label="Contraportada del libro" className="print:block print:p-0 print:m-0 print:w-full">
          <EbookBackCover />
        </section>

      </main>

    </div>
  );
}

