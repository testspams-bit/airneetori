import React, { useState, useEffect } from 'react';
import { getLogoBlob } from '../utils/logoStorage.ts';

interface LogoProps {
  className?: string;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  overrideSrc?: string | null;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  theme = 'dark',
  size = 'md',
  showTagline = false,
  overrideSrc = null,
}) => {
  const [storedLogo, setStoredLogo] = useState<string | null>(null);

  useEffect(() => {
    // Load from IndexedDB if available
    getLogoBlob(theme).then((data) => {
      if (data) setStoredLogo(data);
    });
  }, [theme]);

  // Noticeably larger dimensions for the PNG image
  const sizeClasses = {
    sm: 'h-14 w-14 sm:h-16 sm:w-16',
    md: 'h-24 w-24 sm:h-28 sm:w-28',
    lg: 'h-36 w-36 sm:h-44 sm:w-44',
  }[size];

  // Default: Blue logo for light mode, Dark logo for dark mode
  const fallbackSrc = theme === 'light' ? '/logo-blue.svg' : '/logo-dark.svg';
  const activeSrc = overrideSrc || storedLogo || fallbackSrc;

  return (
    <div className={`inline-flex items-center gap-4 select-none ${className}`}>
      <div className="relative shrink-0">
        <img
          src={activeSrc}
          alt="AIR NEETwork Logo"
          className={`${sizeClasses} rounded-2xl object-contain shadow-lg transition-transform duration-200 group-hover:scale-105`}
        />
      </div>

      <div className="flex flex-col text-left">
        <span
          className={`font-black tracking-tight text-2xl sm:text-3xl leading-none uppercase ${
            theme === 'dark' ? 'text-white' : 'text-slate-950'
          }`}
        >
          AIR NEETwork
        </span>
        {showTagline && (
          <span
            className={`text-xs tracking-widest uppercase font-semibold mt-1.5 ${
              theme === 'dark' ? 'text-zinc-500' : 'text-slate-500'
            }`}
          >
            All India Rank Mentorship
          </span>
        )}
      </div>
    </div>
  );
};
