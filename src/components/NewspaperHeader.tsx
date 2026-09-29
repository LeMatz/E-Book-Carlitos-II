import React from 'react';
import { Sparkles } from 'lucide-react';
import { NavWheelMenu } from './NavWheelMenu';

interface NewspaperHeaderProps {
  onOpenRegisterModal: () => void;
}

export const NewspaperHeader: React.FC<NewspaperHeaderProps> = ({
  onOpenRegisterModal,
}) => {

  return (
    <header className="w-full max-w-7xl mx-auto px-2 sm:px-4 pt-3 sm:pt-6 pb-2">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4 sm:gap-6 my-1 sm:my-2">
          {/* Brand Left Ornament / Column */}
          <div className="hidden lg:block w-48 text-left border-r border-[#120e0a]/30 pr-4 text-sm font-serif font-medium text-[#4a2e19] leading-tight">
            &ldquo;No enseñamos teorías muertas. Invitamos a una aventura interior profunda.&rdquo;
          </div>

          {/* Main Title Center - Grand Newspaper Masthead Title */}
          <div className="flex-1 text-center w-full px-1 sm:px-2">
            
            {/* Prominent Masthead Frame Banner */}
            <div className="border-2 sm:border-4 border-[#120e0a] bg-[#e8d7b5] px-3 py-4 sm:p-6 shadow-lg relative my-2 sm:my-3 rounded-xs">
              
              {/* Corner Ornaments */}
              <div className="absolute top-1 left-1 text-xs sm:text-sm font-serif text-[#4a2e19] font-bold">✦</div>
              <div className="absolute top-1 right-1 text-xs sm:text-sm font-serif text-[#4a2e19] font-bold">✦</div>
              <div className="absolute bottom-1 left-1 text-xs sm:text-sm font-serif text-[#4a2e19] font-bold">✦</div>
              <div className="absolute bottom-1 right-1 text-xs sm:text-sm font-serif text-[#4a2e19] font-bold">✦</div>

              {/* Top Banner Tag */}
              <div className="inline-flex items-center gap-1.5 bg-[#120e0a] text-[#e8d7b5] font-playfair font-extrabold text-xs sm:text-sm uppercase tracking-[0.2em] px-3 py-1 mb-2 border border-[#dec8a1] shadow-xs">
                <span>❖</span>
                <span>EDICIÓN BÁSICOS • PRINCIPIOS Y MODELOS</span>
                <span>❖</span>
              </div>

              {/* Main Headline Title */}
              <h1 className="font-playfair font-black text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[6.2rem] uppercase tracking-wide text-[#120e0a] ink-text leading-[0.92] py-1 drop-shadow-sm">
                MI AMIGO CARLITOS
              </h1>

              {/* Decorative Subhead Dividers */}
              <div className="border-t-2 border-b-2 border-[#120e0a] py-2 my-2 sm:my-3 bg-[#f1e2c3]/60">
                <p className="font-serif text-sm xs:text-base sm:text-2xl md:text-3xl text-[#120e0a] font-extrabold tracking-wide uppercase leading-snug">
                  Curso básico de Carl Jung aplicado al coaching y el autoconocimiento
                </p>
              </div>

              <div className="flex items-center justify-between text-xs sm:text-sm font-serif font-bold text-[#4a2e19] uppercase tracking-wider px-1 pt-0.5 pb-2">
                <span>Año IX • Nº 142</span>
                <span className="hidden xs:inline">❖ Küsnacht / Buenos Aires ❖</span>
                <span>Anotaciones Abiertas</span>
              </div>

              {/* Integrated Animated GIF inside the single masthead box */}
              <div className="mt-2 pt-3 border-t-2 border-double border-[#120e0a] max-w-3xl mx-auto">
                <div className="border border-[#120e0a] p-1.5 sm:p-2 bg-[#dec8a1] shadow-xs relative">
                  <div className="relative overflow-hidden border border-[#120e0a] bg-[#120e0a] rounded-xs">
                    <div className="relative w-full h-[220px] xs:h-[280px] sm:h-[360px] overflow-hidden bg-[#120e0a]">
                      <img
                        src="https://i.ibb.co/FL1tH6yj/Jung-Mati.gif"
                        alt="Registro audiovisual histórico de archivo"
                        className="w-full h-full object-cover sepia-vintage"
                        referrerPolicy="no-referrer"
                      />
                      
                      <div className="absolute inset-0 border-4 sm:border-6 border-[#120e0a]/20 pointer-events-none z-10" />

                      {/* Translucent overlay description on bottom of video/gif */}
                      <div className="absolute bottom-0 left-0 right-0 bg-[#120e0a]/75 backdrop-blur-xs text-[#e8d7b5] py-2 px-3 font-serif text-xs flex justify-between items-center border-t border-[#e8d7b5]/30 z-20">
                        <span className="truncate pr-2">Dr. Carl Gustav Jung — Registro audiovisual histórico (Bucle continuo)</span>
                        <span className="font-playfair uppercase text-[10px] tracking-widest text-[#dec8a1] border border-[#dec8a1]/70 px-1.5 py-0.5 hidden xs:inline shrink-0 font-bold bg-[#120e0a]/50">
                          Archivo Vivo
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  };


