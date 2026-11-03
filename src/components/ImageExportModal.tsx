import React, { useState } from 'react';
import { X, Download, Image, Archive, Loader2, CheckCircle2, Sparkles } from 'lucide-react';
import { EBOOK_PAGES } from '../data/ebookContent';
import {
  ImageFormat,
  ImageQuality,
  PageExportItem,
  exportPageToImage,
  exportAllPagesToZip,
} from '../utils/imageExporter';

interface ImageExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  pageTitles: Record<number, string>;
}

export const ImageExportModal: React.FC<ImageExportModalProps> = ({
  isOpen,
  onClose,
  pageTitles,
}) => {
  const [format, setFormat] = useState<ImageFormat>('png');
  const [quality, setQuality] = useState<ImageQuality>('high');
  const [selectedPageId, setSelectedPageId] = useState<string>('folio-1');
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState<{
    current: number;
    total: number;
    message: string;
  } | null>(null);

  if (!isOpen) return null;

  // Build the complete list of 29 pages
  const allExportItems: PageExportItem[] = [
    {
      id: 'folio-portada',
      filename: '00-portada-monumental',
      title: 'Portada Monumental',
    },
    {
      id: 'folio-indice',
      filename: '00-indice-de-contenidos',
      title: 'Índice de Contenidos',
    },
    ...EBOOK_PAGES.map((p) => {
      const title = pageTitles[p.pageNumber] || p.pageTitle;
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      const numPad = String(p.pageNumber).padStart(2, '0');
      return {
        id: `folio-${p.pageNumber}`,
        filename: `${numPad}-folio-${p.pageNumber}-${slug}`,
        title: `Folio ${p.pageNumber}: ${title}`,
      };
    }),
    {
      id: 'folio-contraportada',
      filename: '27-contraportada-de-archivo',
      title: 'Contraportada de Archivo',
    },
  ];

  const handleDownloadSingle = async () => {
    const item = allExportItems.find((p) => p.id === selectedPageId);
    if (!item) return;

    setIsProcessing(true);
    setProgress({ current: 1, total: 1, message: `Generando ${item.title}...` });

    try {
      await exportPageToImage(item.id, item.filename, format, quality);
      setTimeout(() => {
        setIsProcessing(false);
        setProgress(null);
      }, 700);
    } catch (error) {
      console.error('Error al exportar página:', error);
      alert('Ocurrió un error al generar la imagen. Por favor intenta de nuevo.');
      setIsProcessing(false);
      setProgress(null);
    }
  };

  const handleDownloadAllZip = async () => {
    setIsProcessing(true);
    setProgress({
      current: 0,
      total: allExportItems.length,
      message: 'Preparando motor de renderizado...',
    });

    try {
      await exportAllPagesToZip(
        allExportItems,
        format,
        quality,
        (current, total, message) => {
          setProgress({ current, total, message });
        }
      );

      setTimeout(() => {
        setIsProcessing(false);
        setProgress(null);
        onClose();
      }, 1200);
    } catch (error) {
      console.error('Error al exportar todas las imágenes en ZIP:', error);
      alert('Ocurrió un error al exportar las imágenes. Por favor intenta de nuevo.');
      setIsProcessing(false);
      setProgress(null);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-4 no-print print:hidden">
      <div className="bg-[#1c150f] border-2 border-[#aa8032] rounded-xs shadow-2xl max-w-xl w-full p-5 sm:p-6 text-[#f3e8cf] relative max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={() => !isProcessing && onClose()}
          disabled={isProcessing}
          className="absolute top-4 right-4 text-[#ebdcb8]/60 hover:text-[#ffd700] disabled:opacity-30 cursor-pointer"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-5 border-b border-[#aa8032]/40 pb-3">
          <div className="w-10 h-10 bg-[#aa8032] text-[#17120d] flex items-center justify-center rounded-xs shadow-md shrink-0">
            <Image className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-playfair text-lg sm:text-xl font-black text-[#f3e8cf] uppercase tracking-wide">
              Descargar Páginas como Imágenes
            </h3>
            <p className="font-mono text-[11px] text-[#d4af37]">
              Formatos PNG y JPG de alta definición (Individuales o libro completo)
            </p>
          </div>
        </div>

        {/* Format & Quality Selector Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5 p-3 bg-[#140e0a] border border-[#aa8032]/40 rounded-xs">
          {/* Format selection */}
          <div>
            <label className="block text-[11px] font-mono text-[#d4af37] uppercase font-bold mb-1.5">
              Formato de Imagen:
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setFormat('png')}
                disabled={isProcessing}
                className={`flex-1 py-1.5 px-3 rounded-xs text-xs font-mono font-bold transition-all cursor-pointer ${
                  format === 'png'
                    ? 'bg-[#aa8032] text-[#17120d] shadow-sm'
                    : 'bg-[#231a12] text-[#ebdcb8]/70 hover:text-white border border-[#aa8032]/30'
                }`}
              >
                PNG (Sin pérdidas)
              </button>
              <button
                type="button"
                onClick={() => setFormat('jpg')}
                disabled={isProcessing}
                className={`flex-1 py-1.5 px-3 rounded-xs text-xs font-mono font-bold transition-all cursor-pointer ${
                  format === 'jpg'
                    ? 'bg-[#aa8032] text-[#17120d] shadow-sm'
                    : 'bg-[#231a12] text-[#ebdcb8]/70 hover:text-white border border-[#aa8032]/30'
                }`}
              >
                JPG (Calidad 95%)
              </button>
            </div>
          </div>

          {/* Quality selection */}
          <div>
            <label className="block text-[11px] font-mono text-[#d4af37] uppercase font-bold mb-1.5">
              Resolución:
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setQuality('high')}
                disabled={isProcessing}
                className={`flex-1 py-1.5 px-3 rounded-xs text-xs font-mono font-bold transition-all cursor-pointer ${
                  quality === 'high'
                    ? 'bg-[#aa8032] text-[#17120d] shadow-sm'
                    : 'bg-[#231a12] text-[#ebdcb8]/70 hover:text-white border border-[#aa8032]/30'
                }`}
              >
                Alta Def. (2x)
              </button>
              <button
                type="button"
                onClick={() => setQuality('standard')}
                disabled={isProcessing}
                className={`flex-1 py-1.5 px-3 rounded-xs text-xs font-mono font-bold transition-all cursor-pointer ${
                  quality === 'standard'
                    ? 'bg-[#aa8032] text-[#17120d] shadow-sm'
                    : 'bg-[#231a12] text-[#ebdcb8]/70 hover:text-white border border-[#aa8032]/30'
                }`}
              >
                Estándar (1x)
              </button>
            </div>
          </div>
        </div>

        {/* Progress Bar when working */}
        {isProcessing && (
          <div className="p-4 bg-[#140e0a] border border-[#aa8032]/60 rounded-xs space-y-3 text-center my-4">
            <Loader2 className="w-7 h-7 text-[#ffd700] animate-spin mx-auto" />
            <p className="font-mono text-xs text-[#ffd700] font-bold">
              {progress?.message || 'Procesando imágenes...'}
            </p>
            {progress && progress.total > 0 && (
              <div className="w-full bg-[#2a1e14] h-2.5 rounded-full overflow-hidden border border-[#aa8032]/40">
                <div
                  className="bg-[#ffd700] h-full transition-all duration-300"
                  style={{
                    width: `${Math.round((progress.current / progress.total) * 100)}%`,
                  }}
                />
              </div>
            )}
            <span className="text-[10px] font-mono text-[#ebdcb8]/70 block">
              Capturando páginas en alta fidelidad fotográfica. Por favor espera...
            </span>
          </div>
        )}

        {/* Options */}
        {!isProcessing && (
          <div className="space-y-4">
            {/* Opción 1: Descargar todas las páginas en ZIP */}
            <div className="p-4 bg-[#231a12] border border-[#aa8032]/70 rounded-xs hover:border-[#ffd700] transition-all">
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <Archive className="w-4 h-4 text-[#ffd700]" />
                  <span className="font-playfair font-bold text-sm text-[#f3e8cf]">
                    Todas las Páginas ({allExportItems.length} Láminas en ZIP)
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase bg-[#17120d] px-2 py-0.5 text-[#d4af37] border border-[#aa8032]/40">
                  Libro Completo
                </span>
              </div>
              <p className="font-old-standard text-xs text-[#ebdcb8]/75 mb-3 leading-relaxed">
                Descarga automáticamente todas las páginas (Portada, Índice, los 26 Folios y
                Contraportada) empaquetadas en un único archivo <strong>.ZIP</strong> en formato{' '}
                <strong>.{format.toUpperCase()}</strong>.
              </p>
              <button
                type="button"
                onClick={handleDownloadAllZip}
                className="w-full py-2.5 bg-[#aa8032] hover:bg-[#d4af37] text-[#17120d] font-playfair font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded-xs shadow-md transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>
                  Descargar Todas las Páginas en .ZIP ({format.toUpperCase()})
                </span>
              </button>
            </div>

            {/* Opción 2: Descargar página individual */}
            <div className="p-4 bg-[#231a12] border border-[#aa8032]/70 rounded-xs hover:border-[#ffd700] transition-all">
              <div className="flex items-center justify-between gap-3 mb-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#ffd700]" />
                  <span className="font-playfair font-bold text-sm text-[#f3e8cf]">
                    Página Individual
                  </span>
                </div>
                <span className="text-[10px] font-mono uppercase bg-[#17120d] px-2 py-0.5 text-[#d4af37] border border-[#aa8032]/40">
                  1 Lámina .{format.toUpperCase()}
                </span>
              </div>

              <label className="block text-[11px] font-mono text-[#ebdcb8]/70 mb-1.5">
                Selecciona la página que deseas descargar:
              </label>
              <select
                value={selectedPageId}
                onChange={(e) => setSelectedPageId(e.target.value)}
                className="w-full bg-[#17120d] border border-[#aa8032]/60 text-xs font-mono text-[#f3e8cf] p-2 rounded-xs cursor-pointer focus:outline-none focus:border-[#ffd700] mb-3"
              >
                {allExportItems.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={handleDownloadSingle}
                className="w-full py-2.5 bg-[#2a1e14] hover:bg-[#3d2a1c] text-[#ffd700] border border-[#aa8032] font-playfair font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 rounded-xs shadow-md transition-all cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>
                  Descargar {format.toUpperCase()} de Página Seleccionada
                </span>
              </button>
            </div>
          </div>
        )}

        {/* Modal Footer Note */}
        <div className="mt-5 pt-3 border-t border-[#aa8032]/30 flex items-center justify-between text-[11px] font-mono text-[#ebdcb8]/60">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-[#ffd700]" />
            Resolución nativa optimizada para impresión y archivo
          </span>
          <button
            onClick={() => !isProcessing && onClose()}
            disabled={isProcessing}
            className="hover:text-[#ffd700] underline cursor-pointer disabled:opacity-40"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};
