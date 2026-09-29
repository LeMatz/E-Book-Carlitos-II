import React from 'react';

interface ImageItem {
  url: string;
  caption?: string;
  tag?: string;
}

interface VintageImageGalleryProps {
  variant?: 'books' | 'compass' | 'printing' | 'philosophy';
  caption?: string;
  title?: string;
  subtitle?: string;
  imageUrl?: string;
  images?: ImageItem[];
  imageClassName?: string;
}

export const VintageImageGallery: React.FC<VintageImageGalleryProps> = ({
  variant = 'books',
  caption = 'Archivos de la Imprenta y Gabinete de Lectura (Colección Histórica).',
  title,
  subtitle,
  imageUrl,
  images,
  imageClassName
}) => {
  const imageMap = {
    books: {
      url: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&q=80&w=1200',
      title: 'GRABADO Nº 04 • LA BIBLIOTECA DEL PENSADOR',
      desc: 'Manuscritos antiguos y tomos de filosofía aplicada que inspiran la travesía del héroe.'
    },
    compass: {
      url: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&q=80&w=1200',
      title: 'ILUSTRACIÓN Nº 12 • LA BRÚJULA SIMBÓLICA',
      desc: 'Instrumentos de navegación interior para orientarse entre el consciente y la sombra.'
    },
    printing: {
      url: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=1200',
      title: 'PLANCHA DE IMPRENTA Nº 08 • ESCRITURA Y DIARIO',
      desc: 'La pluma y la tinta como canales de integración y diálogo activo con nuestro mundo interno.'
    },
    philosophy: {
      url: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=1200',
      title: 'CÓDICE DE ÉPOCA • EL MAPA DEL PROCESO',
      desc: 'El viaje de individuación retratado en manuscritos de mitología comparada y autoconocimiento.'
    }
  };

  const activeUrl = imageUrl || (images && images[0]?.url) || imageMap[variant].url;
  const activeTitle = title || imageMap[variant].title;
  const activeDesc = subtitle || imageMap[variant].desc;

  return (
    <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 my-6 sm:my-8">
      <div className="border-2 border-[#120e0a] p-2 sm:p-3 bg-[#dec8a1] shadow-xs">
        <div className="relative overflow-hidden border border-[#120e0a]">
          <img 
            src={activeUrl} 
            alt={activeTitle}
            className={`w-full h-48 xs:h-64 sm:h-80 md:h-96 sepia-vintage ${imageClassName || 'object-cover'}`}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 border-4 sm:border-8 border-[#120e0a]/20 pointer-events-none" />
          
          <div className="absolute bottom-0 inset-x-0 bg-[#120e0a]/90 text-[#e8d7b5] p-2 sm:p-3 font-im-fell text-xs sm:text-sm flex flex-col sm:flex-row justify-between items-start sm:items-center border-t border-[#e8d7b5]/30 gap-1 sm:gap-0 font-medium">
            <div>
              <span className="font-playfair font-bold uppercase text-[10px] sm:text-xs text-[#dec8a1] mr-2">
                {activeTitle}
              </span>
              <span className="hidden md:inline">{activeDesc}</span>
            </div>
            <span className="font-serif uppercase text-[9px] sm:text-[10px] tracking-widest text-[#dec8a1] border border-[#dec8a1] px-1.5 py-0.5 shrink-0">
              {caption}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
