import React, { useState } from 'react';
import { HERO_TAGLINES } from '../data/courseData';
import { GreekGoddessIcon, DoorwayShadowIcon, CompassStarIcon, WhatsappIcon } from './VintageSvgIcons';
import { Calendar, Clock, ChevronDown, ChevronUp, Tag } from 'lucide-react';

interface HeroSectionProps {
  onOpenRegisterModal: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenRegisterModal
}) => {
  // State for collapsible pillars (Accordion)
  const [openPillar, setOpenPillar] = useState<string | null>(null);

  const togglePillar = (id: string) => {
    setOpenPillar(openPillar === id ? null : id);
  };

  const pillars = [
    {
      id: 'arquetipos',
      title: 'ARQUETIPOS',
      subtitle: 'Los Moldes Primordiales de la Experiencia Humana',
      quote: 'Desmitificamos los arquetipos y aprendemos a utilizarlos como verdaderos mapas existenciales.',
      icon: <GreekGoddessIcon className="w-8 h-8 text-[#120e0a] shrink-0" />,
      bodyText: 'Los arquetipos no son personajes de ficción ni entidades místicas distantes; son urnas vacías con las que venimos de nacimiento y rellenamos con información a medida que crecemos. Al aprender a identificar los arquetipos, dejamos de luchar contra las señales de nuestra mente que se comunica con nosotros como puede y podemos integrarlos de manera natural.',
      keyTakeaways: [
        'Mapeo de los arquetipos principales en sueños y proyecciones',
        'Sus funciones, mensajes y aspectos negativos',
        'Mitología y narrativa como arquetipos culturales'
      ]
    },
    {
      id: 'sombra',
      title: 'TRABAJO CON LA SOMBRA',
      subtitle: 'La Integración de lo Negado',
      quote: 'Lo que niegas te domina. Lo que integras te libera.',
      icon: <DoorwayShadowIcon className="w-8 h-8 text-[#120e0a] shrink-0" />,
      bodyText: 'La Sombra alberga todo aquello que la educación, la cultura o el miedo nos obligaron a esconder en el desván inconsciente. Lejos de ser mala, Carlitos decía que es la mayor reserva de vitalidad, creatividad y autenticidad reprimida. Aprender a dialogar con ella sin juzgarnos es la clave definitiva de la claridad interior.',
      keyTakeaways: [
        'Identificación de proyecciones emocionales y enojos inexplicables',
        'También hablaremos de la Sombra Dorada',
        'Reconocerla e integrarla'
      ]
    },
    {
      id: 'simbolos',
      title: 'SÍMBOLOS',
      subtitle: 'El Lenguaje Sagrado de Nuestra Intuición',
      quote: 'Cuando la palabra no alcanza nos quedan los símbolos.',
      icon: <CompassStarIcon className="w-8 h-8 text-[#120e0a] shrink-0" />,
      bodyText: 'La mente consciente habla en términos de lógica lineal; el inconsciente habla únicamente mediante símbolos e imágenes. Al reabrir el canal del pensamiento simbólico, recuperamos la conexión con los sueños, las sincronicidades y las corazonadas certeras.',
      keyTakeaways: [
        'Como es que el inconsciente nos habla en Símbolos',
        'No son solo imágenes sino también emociones fuertes',
        'Técnicas básicas para trabajar con ellos'
      ]
    }
  ];

  return (
    <section id="portada" className="w-full max-w-7xl mx-auto px-2 sm:px-4 mb-8 sm:mb-12">
      {/* Newspaper Broadsheet Main Wrapper */}
      <div className="border-4 border-double border-[#120e0a] p-3 sm:p-6 bg-[#e8d7b5] shadow-md relative">
        
        {/* 2-Column Front Page Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-start">
          
          {/* LEFT COLUMN: Collapsible Accordion Boxes for 3 Fundamental Pillars (7 cols) */}
          <div id="pilares" className="lg:col-span-7 flex flex-col space-y-3 border-b lg:border-b-0 lg:border-r border-[#120e0a] lg:pr-6 pb-5 lg:pb-0">
            <div className="text-center border-b-2 border-[#120e0a] pb-2 mb-3 bg-[#f1e2c3] p-2">
              <h2 className="font-playfair font-black text-xl sm:text-3xl md:text-4xl uppercase tracking-tight text-[#120e0a] ink-text">
                TRES PILARES FUNDAMENTALES DEL CURSO
              </h2>
            </div>

            <div className="space-y-2.5">
              {pillars.map((pillar, idx) => {
                const isOpen = openPillar === pillar.id;
                return (
                  <div 
                    key={pillar.id}
                    className="border-2 border-[#120e0a] bg-[#dec8a1] transition-all overflow-hidden shadow-xs"
                  >
                    {/* Accordion Header */}
                    <button
                      onClick={() => togglePillar(pillar.id)}
                      className="w-full text-left p-3.5 flex items-center justify-between gap-2.5 cursor-pointer hover:bg-[#f1e2c3] transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 border border-[#120e0a] bg-[#e8d7b5] shrink-0">
                          {pillar.icon}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-serif font-bold text-xs text-[#4a2e19] uppercase border border-[#4a2e19] px-1.5 py-0.5">
                              PILAR 0{idx + 1}
                            </span>
                          </div>
                          <h3 className="font-playfair font-black text-base sm:text-lg md:text-xl uppercase text-[#120e0a] leading-tight mt-0.5">
                            {pillar.title}
                          </h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0 text-[#120e0a]">
                        <span className="text-xs font-bold uppercase hidden xs:inline text-[#4a2e19]">
                          {isOpen ? 'Ocultar' : 'Ver detalle'}
                        </span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-[#120e0a]" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-[#4a2e19] animate-bounce" />
                        )}
                      </div>
                    </button>

                    {/* Accordion Content (Collapsible) */}
                    {isOpen && (
                      <div className="p-4 border-t border-[#120e0a] bg-[#f1e2c3] font-old-standard text-sm sm:text-base text-[#120e0a] space-y-3">
                        <p className="font-serif font-bold text-sm sm:text-base text-[#4a2e19]">
                          {pillar.subtitle}
                        </p>

                        <div className="p-2.5 border-l-2 border-[#120e0a] bg-[#e8d7b5] font-serif text-sm text-[#120e0a] font-medium">
                          &ldquo;{pillar.quote}&rdquo;
                        </div>

                        <p className="leading-relaxed text-justify">
                          {pillar.bodyText}
                        </p>

                        <div className="border-t border-[#120e0a]/30 pt-2.5">
                          <span className="block font-playfair font-bold text-sm uppercase text-[#4a2e19] mb-1.5">
                            Claves prácticas de este pilar:
                          </span>
                          <ul className="space-y-1.5 text-sm">
                            {pillar.keyTakeaways.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-[#4a2e19] font-bold">✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT COLUMN: Iconic Jung Quote and Event Schedule (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            
            {/* Iconic Jung Quote Clipping Box */}
            <div className="border-2 border-[#120e0a] bg-[#dec8a1] p-4 sm:p-6 relative flex flex-col justify-center shadow-xs">
              <div className="text-4xl font-serif text-[#4a2e19] opacity-25 leading-none mb-1">&ldquo;</div>
              <p className="font-serif text-base sm:text-lg text-[#120e0a] leading-relaxed text-center font-semibold">
                &ldquo;Quien mira hacia afuera, sueña; quien mira hacia adentro, despierta.&rdquo;
              </p>
              <p className="font-playfair font-bold text-xs sm:text-sm uppercase tracking-widest text-[#4a2e19] mt-3 text-center">
                — CARL GUSTAV JUNG
              </p>
            </div>

            {/* Quick Event Summary Strip */}
            <div className="p-4 bg-[#f1e2c3] border-2 border-[#120e0a] space-y-3.5 shadow-xs">
              <div className="border-b border-[#120e0a]/30 pb-2 text-center">
                <span className="font-playfair font-black text-sm sm:text-base uppercase text-[#120e0a] tracking-wider">
                  CONVOCATORIA EN VIVO
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm font-serif text-[#120e0a]">
                <Calendar className="w-5 h-5 text-[#4a2e19] shrink-0" />
                <div>
                  <span className="font-bold block uppercase text-xs text-[#4a2e19]">Fecha de Inicio:</span>
                  <span className="font-bold text-base">Viernes 21 de Agosto</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm font-serif text-[#120e0a]">
                <Clock className="w-5 h-5 text-[#4a2e19] shrink-0" />
                <div>
                  <span className="font-bold block uppercase text-xs text-[#4a2e19]">Horario Vivo:</span>
                  <span className="font-bold text-sm">18:00 hs (Arg)</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-sm font-serif text-[#120e0a] pt-2 border-t border-[#120e0a]/20">
                <Tag className="w-5 h-5 text-[#4a2e19] shrink-0" />
                <div>
                  <span className="font-bold block uppercase text-xs text-[#4a2e19]">Financiación:</span>
                  <span className="font-bold text-xs sm:text-sm uppercase text-[#4a2e19]">3 Cuotas sin interés • Débito y Crédito</span>
                </div>
              </div>

              <button
                onClick={onOpenRegisterModal}
                className="w-full mt-2 bg-[#120e0a] text-[#e8d7b5] font-playfair text-xs sm:text-sm uppercase font-bold py-3 px-3 hover:bg-[#4a2e19] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-2xs"
              >
                <WhatsappIcon className="w-5 h-5 text-[#25D366]" />
                <span>Reservar Vacante para el 21 de Agosto</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

