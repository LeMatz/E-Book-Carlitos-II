import React from 'react';
import { EBOOK_PAGES } from '../../data/ebookContent';
import { Edit3, X, CheckCircle, Printer, Copy, Check, ArrowRight } from 'lucide-react';
import { OrnamentalDivider } from '../OrnamentalDivider';

interface WorkbookManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  userWorkbookState: Record<string, string>;
  onNavigateToExercisePage: (pageNumber: number) => void;
}

export const WorkbookManagerModal: React.FC<WorkbookManagerModalProps> = ({
  isOpen,
  onClose,
  userWorkbookState,
  onNavigateToExercisePage,
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  // Extract exercise pages (Pages 23, 24, 25)
  const exercisePages = EBOOK_PAGES.filter((p) => p.exerciseData);

  const handleCopyAll = () => {
    let summaryText = `MI AMIGO CARLITOS II — BITÁCORA ALQUÍMICA DE EJERCICIOS\n==========================================================\n\n`;

    exercisePages.forEach((page) => {
      const ex = page.exerciseData!;
      const key = ex.inputFieldKey || '';
      const answer = (key && userWorkbookState[key]) ? userWorkbookState[key] : '[Pendiente de registro]';
      summaryText += `--- ${ex.title} (Folio ${page.pageNumber}) ---\nObjetivo: ${ex.objective}\n\nRegistro Personal:\n${answer}\n\n`;
    });

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#17120d]/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#dfcea6] border-4 border-[#5a4022] w-full max-w-3xl p-5 sm:p-8 shadow-2xl relative paper-card max-h-[90vh] flex flex-col rounded-sm">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-3 border-b-2 border-[#5a4022]">
          <div>
            <span className="text-[10px] font-mono uppercase text-[#8f6e28] font-bold tracking-widest">
              Capítulo 5 • Cuaderno de Trabajo & Bitácora Alquímica
            </span>
            <h2 className="font-playfair text-xl sm:text-3xl font-black text-[#17120d] uppercase ink-text">
              Bitácora de Protocolos Prácticos
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 hover:bg-[#17120d] hover:text-[#ebdcb8] text-[#17120d] transition-all cursor-pointer border border-[#5a4022] rounded-xs"
            title="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Action Bar */}
        <div className="my-4 flex flex-wrap items-center justify-between gap-2 p-3 bg-[#ebdcb8] border border-[#5a4022]/60 rounded-xs">
          <span className="text-xs font-mono text-[#5a4022] font-semibold">
            ✦ Registros guardados automáticamente en tu navegador
          </span>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyAll}
              className="px-3 py-1.5 bg-[#dfcea6] text-[#17120d] border border-[#5a4022] font-playfair font-bold text-xs uppercase hover:bg-[#ebdcb9] transition-all flex items-center gap-1.5 cursor-pointer rounded-xs"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-800" /> : <Copy className="w-3.5 h-3.5 text-[#8f6e28]" />}
              <span>{copied ? 'Copiado al Portapapeles' : 'Copiar Todo'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-[#17120d] text-[#d4af37] border border-[#aa8032] font-playfair font-bold text-xs uppercase hover:bg-[#2b1f16] transition-all flex items-center gap-1.5 cursor-pointer rounded-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Imprimir Bitácora</span>
            </button>
          </div>
        </div>

        {/* Exercises List */}
        <div className="flex-1 overflow-y-auto space-y-5 pr-1 font-old-standard">
          {exercisePages.map((page) => {
            const ex = page.exerciseData!;
            const key = ex.inputFieldKey || '';
            const answer = key ? userWorkbookState[key] : '';
            const isFilled = answer && answer.trim().length > 0;

            return (
              <div
                key={ex.id}
                className="p-4 sm:p-5 bg-[#ebdcb9] border-2 border-[#5a4022]/70 rounded-xs space-y-3 shadow-xs"
              >
                <div className="flex items-start justify-between gap-3 border-b border-[#5a4022]/30 pb-2">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#8f6e28] font-bold">
                      Folio {page.pageNumber} • Protocolo {ex.id.replace('ex-', '')}
                    </span>
                    <h3 className="font-playfair font-bold text-base sm:text-lg text-[#17120d]">
                      {ex.title}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {isFilled ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-800 bg-emerald-100/80 px-2 py-0.5 border border-emerald-300 rounded-xs">
                        <CheckCircle className="w-3 h-3" />
                        Completado
                      </span>
                    ) : (
                      <span className="text-[11px] font-mono text-[#8f6e28] italic">
                        Pendiente
                      </span>
                    )}

                    <button
                      onClick={() => {
                        onClose();
                        onNavigateToExercisePage(page.pageNumber);
                      }}
                      className="px-2 py-1 bg-[#17120d] text-[#d4af37] text-xs font-mono flex items-center gap-1 hover:bg-[#2b1f16] transition-colors rounded-xs cursor-pointer"
                      title="Ir a este folio en el libro"
                    >
                      <span>Abrir</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>

                <p className="font-cormorant italic text-xs sm:text-sm text-[#3a281c] font-semibold">
                  {ex.objective}
                </p>

                {/* Display Current Answer or Empty notice */}
                <div className="p-3 bg-[#f2e6cb] border border-[#5a4022]/40 rounded-xs text-xs sm:text-sm text-[#17120d]">
                  {isFilled ? (
                    <p className="whitespace-pre-wrap leading-relaxed">{answer}</p>
                  ) : (
                    <p className="italic text-[#8f6e28]/70">
                      Aún no has registrado notas para este protocolo. Navega al folio {page.pageNumber} para redactar tu reflexión.
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
