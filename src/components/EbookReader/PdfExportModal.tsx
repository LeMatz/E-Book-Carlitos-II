import React, { useState } from 'react';
import {
  FileText,
  Download,
  Printer,
  X,
  CheckCircle2,
  BookOpen,
  Loader2,
  Settings,
  HelpCircle,
} from 'lucide-react';
import { generateEbookPdf, triggerNativePrintPdf, PdfExportProgress } from '../../utils/pdfExporter';

interface PdfExportModalProps {
  isOpen: boolean;
  onClose: () => void;
  displayAllPages: boolean;
  onEnsureAllPagesVisible: () => void;
}

export const PdfExportModal: React.FC<PdfExportModalProps> = ({
  isOpen,
  onClose,
  displayAllPages,
  onEnsureAllPagesVisible,
}) => {
  const [exportMode, setExportMode] = useState<'full' | 'custom'>('full');
  const [includeCover, setIncludeCover] = useState<boolean>(true);
  const [includeToc, setIncludeToc] = useState<boolean>(true);
  const [includeBackCover, setIncludeBackCover] = useState<boolean>(true);
  const [startPage, setStartPage] = useState<number>(1);
  const [endPage, setEndPage] = useState<number>(26);

  const [isExporting, setIsExporting] = useState<boolean>(false);
  const [progress, setProgress] = useState<PdfExportProgress | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [exportSuccess, setExportSuccess] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleStartAutomaticExport = async () => {
    setIsExporting(true);
    setErrorMessage(null);
    setExportSuccess(false);

    onEnsureAllPagesVisible();
    await new Promise((resolve) => setTimeout(resolve, 400));

    try {
      await generateEbookPdf({
        includeCover: exportMode === 'full' ? true : includeCover,
        includeToc: exportMode === 'full' ? true : includeToc,
        includeBackCover: exportMode === 'full' ? true : includeBackCover,
        pageRange: exportMode === 'full' ? 'all' : 'custom',
        startPage: exportMode === 'full' ? 1 : startPage,
        endPage: exportMode === 'full' ? 26 : endPage,
        filename:
          exportMode === 'full'
            ? 'Mi_Amigo_Carlitos_II_Libro_Completo.pdf'
            : `Mi_Amigo_Carlitos_II_Folios_${startPage}_a_${endPage}.pdf`,
        onProgress: (p) => setProgress(p),
      });

      setExportSuccess(true);
    } catch (err: any) {
      console.error('Error al exportar a PDF:', err);
      setErrorMessage(err?.message || 'Ocurrió un error inesperado al generar el PDF.');
    } finally {
      setIsExporting(false);
    }
  };

  const handleNativePrint = () => {
    onEnsureAllPagesVisible();
    setTimeout(() => {
      triggerNativePrintPdf();
      onClose();
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-[#17120d] text-[#ebdcb8] border-2 border-[#aa8032] rounded-xs shadow-2xl max-w-xl w-full p-4 sm:p-6 relative font-old-standard">
        
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[#aa8032]/40 pb-3 mb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-[#241a12] text-[#d4af37] flex items-center justify-center rounded-xs border border-[#aa8032]">
              <Download className="w-5 h-5 text-[#d4af37]" />
            </div>
            <div>
              <h2 className="font-playfair font-bold text-lg sm:text-xl text-[#ebdcb8] uppercase tracking-wider">
                Exportar Libro a PDF
              </h2>
              <p className="font-mono text-xs text-[#aa8032]">
                Guarda "Mi amigo Carlitos II" en tu dispositivo para lectura offline
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-[#ebdcb8]/60 hover:text-[#ebdcb8] p-1 rounded-xs hover:bg-[#241a12] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="space-y-4">
          {/* Export Mode Toggle */}
          <div className="grid grid-cols-2 gap-2 bg-[#241a12] p-1 rounded-xs border border-[#aa8032]/30 text-xs font-mono">
            <button
              type="button"
              onClick={() => setExportMode('full')}
              className={`py-2 px-3 text-center rounded-xs transition-colors cursor-pointer ${
                exportMode === 'full'
                  ? 'bg-[#aa8032] text-[#17120d] font-bold shadow-xs'
                  : 'text-[#ebdcb8]/70 hover:text-[#ebdcb8]'
              }`}
            >
              Libro Completo (26 Folios)
            </button>
            <button
              type="button"
              onClick={() => setExportMode('custom')}
              className={`py-2 px-3 text-center rounded-xs transition-colors cursor-pointer ${
                exportMode === 'custom'
                  ? 'bg-[#aa8032] text-[#17120d] font-bold shadow-xs'
                  : 'text-[#ebdcb8]/70 hover:text-[#ebdcb8]'
              }`}
            >
              Personalizado / Rango
            </button>
          </div>

          {/* Custom Settings (if custom mode) */}
          {exportMode === 'custom' && (
            <div className="p-3 bg-[#241a12] border border-[#aa8032]/30 rounded-xs space-y-3 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span>Rango de folios:</span>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    max={26}
                    value={startPage}
                    onChange={(e) => setStartPage(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-12 bg-[#17120d] border border-[#aa8032]/50 p-1 text-center text-[#ebdcb8]"
                  />
                  <span>a</span>
                  <input
                    type="number"
                    min={startPage}
                    max={26}
                    value={endPage}
                    onChange={(e) => setEndPage(Math.min(26, parseInt(e.target.value) || 26))}
                    className="w-12 bg-[#17120d] border border-[#aa8032]/50 p-1 text-center text-[#ebdcb8]"
                  />
                </div>
              </div>

              <div className="flex flex-wrap gap-4 pt-2 border-t border-[#aa8032]/20">
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeCover}
                    onChange={(e) => setIncludeCover(e.target.checked)}
                    className="accent-[#aa8032]"
                  />
                  <span>Incluir Portada</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeToc}
                    onChange={(e) => setIncludeToc(e.target.checked)}
                    className="accent-[#aa8032]"
                  />
                  <span>Incluir Índice</span>
                </label>
                <label className="flex items-center gap-1.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={includeBackCover}
                    onChange={(e) => setIncludeBackCover(e.target.checked)}
                    className="accent-[#aa8032]"
                  />
                  <span>Contraportada</span>
                </label>
              </div>
            </div>
          )}

          {/* Progress / Success / Error status */}
          {isExporting && progress && (
            <div className="p-3 bg-[#241a12] border border-[#aa8032] rounded-xs space-y-2">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-[#d4af37] flex items-center gap-1.5">
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  {progress.statusMessage}
                </span>
                <span>{progress.percent}%</span>
              </div>
              <div className="w-full bg-[#17120d] h-2 rounded-xs overflow-hidden border border-[#aa8032]/40">
                <div
                  className="bg-[#aa8032] h-full transition-all duration-300"
                  style={{ width: `${progress.percent}%` }}
                />
              </div>
            </div>
          )}

          {exportSuccess && (
            <div className="p-3 bg-emerald-950/70 border border-emerald-500/60 rounded-xs text-xs font-mono text-emerald-200 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>¡PDF generado con éxito y descargado en tu navegador!</span>
            </div>
          )}

          {errorMessage && (
            <div className="p-3 bg-red-950/70 border border-red-500/60 rounded-xs text-xs font-mono text-red-200">
              {errorMessage}
            </div>
          )}

          {/* Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-2">
            <button
              type="button"
              disabled={isExporting}
              onClick={handleStartAutomaticExport}
              className="flex-1 py-2.5 px-4 bg-[#aa8032] hover:bg-[#d4af37] disabled:opacity-50 text-[#17120d] font-playfair font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer rounded-xs shadow-md"
            >
              {isExporting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Generando PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Descargar Archivo PDF</span>
                </>
              )}
            </button>

            <button
              type="button"
              disabled={isExporting}
              onClick={handleNativePrint}
              className="py-2.5 px-4 bg-[#241a12] hover:bg-[#382618] border border-[#aa8032]/60 text-[#ebdcb8] font-playfair text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer rounded-xs"
              title="Abre el cuadro de diálogo del navegador para imprimir o guardar como PDF"
            >
              <Printer className="w-4 h-4" />
              <span>Impresión Nativa</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
