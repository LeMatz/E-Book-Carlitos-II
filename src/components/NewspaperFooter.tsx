import React from 'react';

export const NewspaperFooter: React.FC = () => {
  return (
    <footer className="w-full max-w-7xl mx-auto px-2 sm:px-4 pb-8 sm:pb-12">
      <div className="border-t-2 border-b-2 border-[#120e0a] py-6 sm:py-8 px-3 sm:px-4 bg-[#e8d7b5] text-center">
        
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          <h3 className="font-playfair font-black text-xl sm:text-2xl uppercase tracking-wider text-[#120e0a] ink-text">
            HEROÍSMO COSMOGÓNICO
          </h3>

          <p className="font-im-fell text-xs sm:text-sm text-[#4a2e19] font-semibold">
            Edición Especial Digital • Archivos de Coaching, Mitología Personal y Autoconocimiento.
          </p>

          <div className="border-t border-b border-[#120e0a] py-2 flex flex-wrap justify-center items-center gap-2 sm:gap-4 text-[10px] sm:text-xs font-serif uppercase tracking-widest text-[#120e0a]">
            <span>LUMEN | FORMACIÓN PROFESIONAL EN PNL Y COACHING.</span>
            <span className="hidden xs:inline">•</span>
            <span>MAR DEL PLATA • ARGENTINA</span>
            <span className="hidden xs:inline">•</span>
            <span>MATÍAS PEREZ ROJAS</span>
          </div>

          <div className="text-[11px] sm:text-xs font-old-standard text-[#120e0a]/80 max-w-2xl mx-auto leading-relaxed">
            Este periódico es una publicación independiente inspirada en el legado de mi amigo Carlitos Jung y destinada a la difusión educativa del autoconocimiento y el coaching con PNL.
          </div>

          <p className="font-serif text-[10px] sm:text-[11px] font-bold text-[#4a2e19] uppercase tracking-widest pt-1">
            © {new Date().getFullYear()} HEROÍSMO COSMOGÓNICO — TODOS LOS DERECHOS RESERVADOS.
          </p>
        </div>

      </div>
    </footer>
  );
};

