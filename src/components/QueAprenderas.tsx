import React, { useEffect, useState } from 'react';
import { WHAT_YOU_WILL_LEARN } from '../data/courseData';
import { OrnamentalDivider } from './OrnamentalDivider';
import { WaxSealBadge } from './VintageSvgIcons';
import { Sparkles, BookOpen, Compass, Eye, Feather, Lightbulb, Target, CheckCircle2 } from 'lucide-react';
import Carousel, { CarouselItemData } from './Carousel';

interface QueAprenderasProps {
  onOpenRegisterModal: () => void;
}

const ICONS = [
  <BookOpen className="carousel-icon" key="1" />,
  <Compass className="carousel-icon" key="2" />,
  <Eye className="carousel-icon" key="3" />,
  <Sparkles className="carousel-icon" key="4" />,
  <Feather className="carousel-icon" key="5" />,
  <Lightbulb className="carousel-icon" key="6" />,
  <Target className="carousel-icon" key="7" />,
  <CheckCircle2 className="carousel-icon" key="8" />,
];

export const QueAprenderas: React.FC<QueAprenderasProps> = ({ onOpenRegisterModal }) => {
  const [baseWidth, setBaseWidth] = useState(360);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setBaseWidth(Math.min(window.innerWidth - 48, 320));
      } else if (window.innerWidth < 768) {
        setBaseWidth(350);
      } else {
        setBaseWidth(420);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const carouselItems: CarouselItemData[] = WHAT_YOU_WILL_LEARN.map((item, idx) => ({
    id: idx + 1,
    title: item.title,
    description: item.desc,
    badge: `OBJETIVO 0${idx + 1}`,
    footer: 'Habilidad Práctica',
    icon: ICONS[idx % ICONS.length]
  }));

  return (
    <section id="que-aprenderas" className="w-full max-w-7xl mx-auto px-2 sm:px-4 my-8 sm:my-12">
      <div className="border-4 border-double border-[#120e0a] p-3.5 sm:p-8 bg-[#e8d7b5] shadow-md">
        
        {/* Header Title */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b-2 border-[#120e0a] pb-4 sm:pb-6 mb-6 gap-3 sm:gap-4">
          <div className="text-center md:text-left">
            <span className="font-serif text-xs sm:text-sm font-bold uppercase tracking-widest text-[#4a2e19]">
              MANIFIESTO PEDAGÓGICO
            </span>
            <h2 className="font-playfair font-black text-3xl sm:text-5xl md:text-6xl text-[#120e0a] uppercase tracking-tight mt-1 ink-text">
              ¿Qué aprenderás en esta experiencia?
            </h2>
            <p className="font-im-fell text-sm sm:text-xl md:text-2xl text-[#4a2e19] max-w-2xl font-semibold mt-1">
              Carlitos desde 0. Herramientas de transformación listas para usar. Desliza las tarjetas para explorar.
            </p>
          </div>

          <div className="shrink-0 hidden md:block">
            <WaxSealBadge text="CONTENIDO VERIFICADO" className="w-24 h-24 sm:w-28 sm:h-28" />
          </div>
        </div>

        {/* 3D Interactive Carousel */}
        <div className="py-4 sm:py-6 flex justify-center items-center w-full overflow-hidden">
          <Carousel
            items={carouselItems}
            baseWidth={baseWidth}
            autoplay={true}
            autoplayDelay={3500}
            pauseOnHover={true}
            loop={true}
            round={false}
          />
        </div>

      </div>
    </section>
  );
};



