import React, { useState, useRef, useEffect } from 'react';
import { OptionWheel } from './OptionWheel';
import { Menu, X, Compass } from 'lucide-react';

interface NavWheelMenuProps {
  onOpenRegisterModal?: () => void;
}

const MENU_ITEMS = [
  { label: 'I. Portada', id: 'portada' },
  { label: 'II. Tres Pilares', id: 'pilares' },
  { label: 'III. Noticia del Día', id: 'noticia-del-dia' },
  { label: 'IV. Qué Aprenderás', id: 'que-aprenderas' },
  { label: 'V. Para Quién Es', id: 'para-quien' },
  { label: 'VI. Sobre el Curso', id: 'sobre-el-curso' },
  { label: 'VII. Inscripción', id: 'cta-final' },
  { label: 'VIII. Preguntas FAQ', id: 'faq' }
];

export const NavWheelMenu: React.FC<NavWheelMenuProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const goToSection = (index: number) => {
    const target = MENU_ITEMS[index];
    if (target) {
      const el = document.getElementById(target.id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed top-3 right-3 sm:top-5 sm:right-5 z-50 flex flex-col items-end" ref={menuRef}>
      {/* Floating Conventional Menu Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#120e0a] text-[#e8d7b5] border-2 border-[#dec8a1] px-3.5 py-2 sm:px-4 sm:py-2.5 flex items-center gap-2.5 rounded-full sm:rounded-md shadow-2xl hover:bg-[#dec8a1] hover:text-[#120e0a] hover:border-[#120e0a] transition-all cursor-pointer group active:scale-95"
        aria-expanded={isOpen}
        aria-label="Abrir menú de navegación"
      >
        {isOpen ? (
          <X className="w-5 h-5 text-[#dec8a1] group-hover:text-[#120e0a] transition-colors" />
        ) : (
          <Menu className="w-5 h-5 text-[#dec8a1] group-hover:text-[#120e0a] transition-colors" />
        )}
        <span className="font-playfair font-black text-xs uppercase tracking-widest flex items-center gap-1.5">
          <span>{isOpen ? 'CERRAR' : 'MENÚ'}</span>
          <Compass className="w-3.5 h-3.5 text-[#dec8a1] group-hover:text-[#120e0a] transition-colors" />
        </span>
      </button>

      {/* Floating Curved Wheel Directly Attached */}
      {isOpen && (
        <div className="mt-2 w-72 sm:w-80 h-[380px] pointer-events-auto flex flex-col items-end animate-in fade-in zoom-in-95 duration-200">
          
          {/* Subtle Close Pill */}
          <div className="flex items-center justify-between w-full px-3 py-1.5 bg-[#120e0a] text-[#e8d7b5] text-[10px] font-serif uppercase tracking-widest rounded-t-md shadow-md">
            <span className="flex items-center gap-1 font-bold">
              <Compass className="w-3.5 h-3.5 text-[#dec8a1]" /> SELECCIONA SECCIÓN:
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-[#dec8a1] hover:text-white p-0.5 cursor-pointer"
              title="Cerrar rueda"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Floating Wheel Area with minimal background blur */}
          <div className="w-full flex-1 relative bg-[#120e0a]/92 backdrop-blur-md border-x-2 border-b-2 border-[#120e0a] shadow-2xl rounded-b-md overflow-hidden">
            <OptionWheel
              items={MENU_ITEMS.map((item) => item.label)}
              defaultSelected={selectedIndex}
              textColor="#dec8a1"
              activeColor="#ffffff"
              side="right"
              fontSize={1.25}
              spacing={1.6}
              curve={1.25}
              tilt={7}
              blur={0.4}
              fade={0.25}
              minOpacity={0.15}
              smoothing={180}
              inset={20}
              loop={true}
              draggable={true}
              onChange={(index) => setSelectedIndex(index)}
              onOptionClick={(index) => goToSection(index)}
            />
          </div>
        </div>
      )}
    </div>
  );
};
