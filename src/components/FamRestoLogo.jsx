import React from 'react';
import logoUrl from '../assets/logo.svg';

export default function FamRestoLogo({
  variant = 'header', // 'header', 'welcome', 'compact'
  showTagline = true,
  className = ''
}) {
  if (variant === 'welcome') {
    return (
      <div className={`flex flex-col items-center select-none ${className}`}>
        {/* Chef Hat with glowing halo */}
        <div className="relative mb-2">
          <div className="absolute inset-0 bg-[#FF5A1F]/20 rounded-full blur-xl scale-125 pointer-events-none" />
          <img
            src={logoUrl}
            alt="FamResto Chef Hat Logo"
            className="w-16 h-16 object-contain relative drop-shadow-[0_4px_12px_rgba(255,90,31,0.25)]"
          />
        </div>

        {/* Wordmark */}
        <span className="font-script text-4xl sm:text-5xl font-bold text-[#382216] tracking-wide leading-none">
          FamResto
        </span>

        {/* Tagline */}
        {showTagline && (
          <span className="text-[11px] font-bold tracking-[0.22em] text-[#C94316] uppercase mt-1">
            Good Food • Happy People
          </span>
        )}
      </div>
    );
  }

  // Header / default variant
  return (
    <div className={`flex items-center gap-1.5 select-none ${className}`}>
      <img
        src={logoUrl}
        alt="FamResto Logo"
        className="w-8 h-8 object-contain shrink-0 drop-shadow-[0_2px_6px_rgba(255,90,31,0.2)]"
      />
      <div className="flex flex-col leading-none">
        <span className="font-script text-2xl font-bold text-[#382216] tracking-tight hover:text-[#FF5A1F] transition-colors">
          FamResto
        </span>
        {variant === 'with-tagline' && (
          <span className="text-[9px] font-bold tracking-widest text-[#C94316] uppercase">
            Good Food • Happy People
          </span>
        )}
      </div>
    </div>
  );
}

