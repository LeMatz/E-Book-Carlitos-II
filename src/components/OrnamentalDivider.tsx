import React from 'react';

interface OrnamentalDividerProps {
  variant?: 'simple' | 'flourish' | 'stars' | 'double' | 'fleuron' | 'alchemical' | 'iching';
  className?: string;
  color?: string;
}

export const OrnamentalDivider: React.FC<OrnamentalDividerProps> = ({
  variant = 'flourish',
  className = '',
  color = '#8f6e28',
}) => {
  if (variant === 'simple') {
    return (
      <div className={`w-full flex items-center justify-center my-4 ${className}`}>
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#8f6e28]/60 to-transparent" />
      </div>
    );
  }

  if (variant === 'double') {
    return (
      <div className={`w-full my-4 flex flex-col gap-[3px] items-center justify-center ${className}`}>
        <div className="w-full h-[1.5px] bg-gradient-to-r from-transparent via-[#aa8032] to-transparent" />
        <div className="w-3/4 h-[0.75px] bg-gradient-to-r from-transparent via-[#8f6e28]/70 to-transparent" />
      </div>
    );
  }

  if (variant === 'stars') {
    return (
      <div className={`w-full my-5 flex items-center justify-center gap-4 text-[#8f6e28] ${className}`}>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#8f6e28]/80" />
        <span className="font-serif text-sm tracking-widest text-[#aa8032] select-none flex items-center gap-2">
          <span>✧</span>
          <span className="text-base text-[#c59b3f]">✦</span>
          <span>✧</span>
        </span>
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#8f6e28]/80" />
      </div>
    );
  }

  if (variant === 'iching') {
    return (
      <div className={`w-full my-5 flex items-center justify-center gap-3 text-[#8f6e28] ${className}`}>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#8f6e28]/70" />
        <div className="flex items-center gap-2 px-2 select-none">
          {/* Subtle Yang and Yin symbols */}
          <span className="inline-block w-6 h-[3px] bg-[#1a130c] rounded-xs" />
          <span className="text-xs text-[#c59b3f]">☯</span>
          <span className="inline-flex gap-1">
            <span className="inline-block w-2.5 h-[3px] bg-[#1a130c] rounded-xs" />
            <span className="inline-block w-2.5 h-[3px] bg-[#1a130c] rounded-xs" />
          </span>
        </div>
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#8f6e28]/70" />
      </div>
    );
  }

  if (variant === 'alchemical') {
    return (
      <div className={`w-full my-6 flex items-center justify-center gap-3 text-[#aa8032] ${className}`}>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#8f6e28]" />
        <span className="text-xs tracking-widest select-none flex items-center gap-2 text-[#c59b3f]">
          <span>☿</span>
          <span>☉</span>
          <span>☽</span>
          <span>🜍</span>
        </span>
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#8f6e28]" />
      </div>
    );
  }

  if (variant === 'fleuron') {
    return (
      <div className={`w-full my-6 flex items-center justify-center gap-3 text-[#8f6e28] ${className}`}>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent to-[#8f6e28]/80" />
        <svg width="22" height="22" viewBox="0 0 24 24" fill={color} className="opacity-90 shrink-0">
          <path d="M12 2C10.5 4.5 8 5 6 5C6 7.5 8 9.5 12 12C16 9.5 18 7.5 18 5C16 5 13.5 4.5 12 2ZM12 22C10.5 19.5 8 19 6 19C6 16.5 8 14.5 12 12C16 14.5 18 16.5 18 19C16 19 13.5 19.5 12 22Z" />
        </svg>
        <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent to-[#8f6e28]/80" />
      </div>
    );
  }

  // Default: flourish
  return (
    <div className={`w-full my-5 flex items-center justify-center gap-3 text-[#8f6e28] ${className}`}>
      <div className="flex-1 h-[1.2px] bg-gradient-to-r from-transparent via-[#8f6e28]/60 to-[#8f6e28]" />
      <svg width="44" height="14" viewBox="0 0 48 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
        <path d="M24 0C21 4 15 6 8 6C8 9 12 11 24 16C36 11 40 9 40 6C33 6 27 4 24 0Z" fill={color} />
        <circle cx="6" cy="6" r="2" fill={color} />
        <circle cx="42" cy="6" r="2" fill={color} />
      </svg>
      <div className="flex-1 h-[1.2px] bg-gradient-to-l from-transparent via-[#8f6e28]/60 to-[#8f6e28]" />
    </div>
  );
};
