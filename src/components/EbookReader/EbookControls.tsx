import React, { useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Search,
  Type,
  Bookmark,
  Edit3,
  Sparkles,
  Grid,
  Menu,
  X,
  Download,
} from 'lucide-react';

interface EbookControlsProps {
  currentPageNumber: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
  onOpenIndex: () => void;
  onOpenSearch: () => void;
  onOpenWorkbook: () => void;
  onOpenCarlitosAi: () => void;
  onOpenPdfExport?: () => void;
  fontSize: 'sm' | 'md' | 'lg';
  onChangeFontSize: (size: 'sm' | 'md' | 'lg') => void;
  fontFamily: 'playfair' | 'baskerville' | 'cormorant' | 'old-standard';
  onChangeFontFamily: (font: 'playfair' | 'baskerville' | 'cormorant' | 'old-standard') => void;
  viewMode: 'cover' | 'reading' | 'index' | 'backcover';
  onChangeViewMode: (mode: 'cover' | 'reading' | 'index' | 'backcover') => void;
  isBookmarked: boolean;
  onToggleBookmark: () => void;
  bookmarksCount: number;
  completedExercisesCount: number;
}

export const EbookControls: React.FC<EbookControlsProps> = ({
  currentPageNumber,
  totalPages,
  onPageChange,
  onOpenIndex,
  onOpenSearch,
  onOpenWorkbook,
  onOpenCarlitosAi,
  onOpenPdfExport,
  fontSize,
  onChangeFontSize,
  fontFamily,
  onChangeFontFamily,
  viewMode,
  onChangeViewMode,
  isBookmarked,
  onToggleBookmark,
  bookmarksCount,
  completedExercisesCount,
}) => {
  const [jumpInput, setJumpInput] = useState<string>('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const handleJump = (e: React.FormEvent) => {
    e.preventDefault();
    const num = parseInt(jumpInput, 10);
    if (!isNaN(num) && num >= 1 && num <= totalPages) {
      onPageChange(num);
      setJumpInput('');
      if (viewMode !== 'reading') onChangeViewMode('reading');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#17120d] text-[#ebdcb8] border-b-2 border-[#aa8032] shadow-2xl py-2 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4">
        
        {/* Left Side: Brand & Mode Navigation */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => onChangeViewMode('cover')}
            className="flex items-center gap-2 font-playfair font-black text-sm sm:text-base tracking-wider uppercase hover:text-[#d4af37] transition-colors cursor-pointer"
            title="Ir a la Portada"
          >
            <span className="bg-[#241a12] text-[#d4af37] border border-[#aa8032] w-7 h-7 flex items-center justify-center font-bold text-xs rounded-xs shadow-xs">
              II
            </span>
            <span className="hidden md:inline text-[#f3e8cf]">Mi amigo Carlitos II</span>
          </button>

          <div className="h-5 w-[1px] bg-[#aa8032]/40 hidden sm:block" />

          {/* Quick Section Jumpers */}
          <div className="hidden lg:flex items-center gap-1 text-xs font-mono">
            <button
              onClick={() => onChangeViewMode('cover')}
              className={`px-3 py-1 transition-all cursor-pointer rounded-xs ${
                viewMode === 'cover'
                  ? 'bg-[#aa8032] text-[#17120d] font-bold shadow-xs'
                  : 'hover:bg-[#241a12] text-[#ebdcb8]'
              }`}
            >
              Portada
            </button>
            <button
              onClick={onOpenIndex}
              className={`px-3 py-1 transition-all flex items-center gap-1 cursor-pointer rounded-xs ${
                viewMode === 'index'
                  ? 'bg-[#aa8032] text-[#17120d] font-bold shadow-xs'
                  : 'hover:bg-[#241a12] text-[#ebdcb8]'
              }`}
            >
              <Grid className="w-3 h-3" />
              Índice
            </button>
            <button
              onClick={() => onChangeViewMode('reading')}
              className={`px-3 py-1 transition-all flex items-center gap-1 cursor-pointer rounded-xs ${
                viewMode === 'reading'
                  ? 'bg-[#aa8032] text-[#17120d] font-bold shadow-xs'
                  : 'hover:bg-[#241a12] text-[#ebdcb8]'
              }`}
            >
              <BookOpen className="w-3 h-3" />
              Lectura
            </button>
            <button
              onClick={() => onChangeViewMode('backcover')}
              className={`px-3 py-1 transition-all cursor-pointer rounded-xs ${
                viewMode === 'backcover'
                  ? 'bg-[#aa8032] text-[#17120d] font-bold shadow-xs'
                  : 'hover:bg-[#241a12] text-[#ebdcb8]'
              }`}
            >
              Contraportada
            </button>
          </div>
        </div>

        {/* Center: Pagination controls (visible in Reading mode) */}
        {viewMode === 'reading' && (
          <div className="flex items-center gap-1.5 sm:gap-3 bg-[#241a12] px-2.5 sm:px-3.5 py-1 border border-[#aa8032]/50 rounded-xs shadow-inner">
            <button
              disabled={currentPageNumber <= 1}
              onClick={() => onPageChange(currentPageNumber - 1)}
              className="p-1 hover:bg-[#aa8032] hover:text-[#17120d] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#ebdcb8] transition-all cursor-pointer disabled:cursor-not-allowed"
              title="Folio Anterior"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <form onSubmit={handleJump} className="flex items-center gap-1.5">
              <span className="text-xs font-mono font-bold text-[#d4af37]">Folio</span>
              <input
                type="number"
                min={1}
                max={totalPages}
                placeholder={String(currentPageNumber)}
                value={jumpInput}
                onChange={(e) => setJumpInput(e.target.value)}
                className="w-10 sm:w-12 text-center bg-[#17120d] border border-[#aa8032]/60 font-mono text-xs text-[#ebdcb8] py-0.5 focus:outline-none focus:border-[#d4af37]"
              />
              <span className="text-xs font-mono text-[#ebdcb8]/70">/ {totalPages}</span>
            </form>

            <button
              disabled={currentPageNumber >= totalPages}
              onClick={() => onPageChange(currentPageNumber + 1)}
              className="p-1 hover:bg-[#aa8032] hover:text-[#17120d] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-[#ebdcb8] transition-all cursor-pointer disabled:cursor-not-allowed"
              title="Folio Siguiente"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Right Side: Tools & Modals */}
        <div className="hidden md:flex items-center gap-2">
          {/* Search Button */}
          <button
            onClick={onOpenSearch}
            className="p-1.5 bg-[#241a12] hover:bg-[#382618] border border-[#aa8032]/40 text-xs font-mono flex items-center gap-1.5 transition-all cursor-pointer rounded-xs text-[#ebdcb8]"
            title="Buscar término en los manuscritos"
          >
            <Search className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="hidden xl:inline">Buscar</span>
          </button>

          {/* Typography Adjuster */}
          <div className="flex items-center bg-[#241a12] border border-[#aa8032]/40 text-xs font-mono px-2 py-1 gap-1 rounded-xs">
            <Type className="w-3.5 h-3.5 text-[#d4af37]" />
            <button
              onClick={() =>
                onChangeFontSize(
                  fontSize === 'lg' ? 'md' : fontSize === 'md' ? 'sm' : 'lg'
                )
              }
              className="hover:text-[#d4af37] font-bold px-1 uppercase cursor-pointer"
              title="Cambiar tamaño de letra"
            >
              {fontSize}
            </button>
          </div>

          {/* Bookmarks Counter */}
          <button
            onClick={onToggleBookmark}
            className={`p-1.5 text-xs font-mono flex items-center gap-1 border transition-all cursor-pointer rounded-xs ${
              isBookmarked
                ? 'bg-[#aa8032] text-[#17120d] border-[#d4af37]'
                : 'bg-[#241a12] hover:bg-[#382618] border-[#aa8032]/40 text-[#ebdcb8]'
            }`}
            title="Marcar página actual con cinta de lectura"
          >
            <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-[#17120d]' : ''}`} />
            {bookmarksCount > 0 && <span className="font-bold">{bookmarksCount}</span>}
          </button>

          {/* Workbook Manager */}
          <button
            onClick={onOpenWorkbook}
            className="px-3 py-1.5 bg-[#2d2116] hover:bg-[#3e2c1e] border border-[#aa8032] text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer text-[#d4af37] rounded-xs shadow-xs"
            title="Bitácora de Protocolos y Ejercicios"
          >
            <Edit3 className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Bitácora</span>
            {completedExercisesCount > 0 && (
              <span className="bg-[#aa8032] text-[#17120d] rounded-full w-4 h-4 flex items-center justify-center text-[10px] font-bold">
                {completedExercisesCount}
              </span>
            )}
          </button>

          {/* Export PDF Button */}
          {onOpenPdfExport && (
            <button
              onClick={onOpenPdfExport}
              className="px-3 py-1.5 bg-[#aa8032] hover:bg-[#d4af37] text-[#17120d] border border-[#d4af37] text-xs font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer rounded-xs shadow-md"
              title="Exportar libro completo a PDF de alta resolución"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Exportar PDF</span>
            </button>
          )}

          {/* Carlitos AI Helper */}
          <button
            onClick={onOpenCarlitosAi}
            className="px-3 py-1.5 bg-[#59161c] hover:bg-[#781f27] border border-[#d4af37] text-xs font-playfair font-bold flex items-center gap-1.5 transition-all cursor-pointer text-[#f3e8cf] rounded-xs shadow-md"
            title="Consultar a 'Carlitos' (Asistente Junguiano)"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Hablar con Carlitos</span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenCarlitosAi}
            className="p-1.5 bg-[#59161c] text-[#f3e8cf] border border-[#d4af37] rounded-xs cursor-pointer shadow-xs"
            title="Carlitos AI"
          >
            <Sparkles className="w-4 h-4 text-[#d4af37]" />
          </button>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 bg-[#241a12] border border-[#aa8032]/40 hover:bg-[#382618] transition-all cursor-pointer text-[#ebdcb8] rounded-xs"
            title="Menú"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 pt-3 border-t border-[#aa8032]/30 space-y-3 font-mono text-xs bg-[#17120d] p-3 rounded-xs border border-[#aa8032]/40">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                onChangeViewMode('cover');
                setIsMobileMenuOpen(false);
              }}
              className="p-2 bg-[#241a12] text-left hover:bg-[#aa8032] hover:text-[#17120d] rounded-xs"
            >
              • Portada
            </button>
            <button
              onClick={() => {
                onOpenIndex();
                setIsMobileMenuOpen(false);
              }}
              className="p-2 bg-[#241a12] text-left hover:bg-[#aa8032] hover:text-[#17120d] rounded-xs"
            >
              • Índice ({totalPages} folios)
            </button>
            <button
              onClick={() => {
                onChangeViewMode('reading');
                setIsMobileMenuOpen(false);
              }}
              className="p-2 bg-[#241a12] text-left hover:bg-[#aa8032] hover:text-[#17120d] rounded-xs"
            >
              • Modo Lectura
            </button>
            <button
              onClick={() => {
                onChangeViewMode('backcover');
                setIsMobileMenuOpen(false);
              }}
              className="p-2 bg-[#241a12] text-left hover:bg-[#aa8032] hover:text-[#17120d] rounded-xs"
            >
              • Contraportada
            </button>
          </div>

          <div className="flex items-center justify-between pt-2 border-t border-[#aa8032]/20">
            <button
              onClick={() => {
                onOpenSearch();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-1.5 p-2 bg-[#241a12] w-full justify-center rounded-xs text-[#d4af37]"
            >
              <Search className="w-4 h-4 text-[#d4af37]" />
              Buscar en el Texto
            </button>
          </div>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => {
                onOpenWorkbook();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center gap-1.5 p-2 bg-[#2d2116] text-[#d4af37] border border-[#aa8032] w-full justify-center font-bold rounded-xs"
            >
              <Edit3 className="w-4 h-4 text-[#d4af37]" />
              Bitácora de Ejercicios ({completedExercisesCount}/3)
            </button>
          </div>

          {onOpenPdfExport && (
            <div className="flex items-center justify-between pt-2 border-t border-[#aa8032]/20">
              <button
                onClick={() => {
                  onOpenPdfExport();
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center gap-1.5 p-2 bg-[#aa8032] text-[#17120d] border border-[#d4af37] w-full justify-center font-bold rounded-xs shadow-md"
              >
                <Download className="w-4 h-4" />
                Exportar Libro a PDF
              </button>
            </div>
          )}
        </div>
      )}
    </header>
  );
};
