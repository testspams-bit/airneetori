/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Logo } from './components/Logo.tsx';
import { SocialModal } from './components/SocialModal.tsx';
import { saveLogoBlob, getLogoBlob } from './utils/logoStorage.ts';
import { RefreshCw, Sun, Moon } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const isDark = theme === 'dark';

  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [darkLogoSrc, setDarkLogoSrc] = useState<string | null>(null);
  const [lightLogoSrc, setLightLogoSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Load user's uploaded PNGs from IndexedDB on startup
  useEffect(() => {
    getLogoBlob('dark').then((src) => {
      if (src) setDarkLogoSrc(src);
    });
    getLogoBlob('light').then((src) => {
      if (src) setLightLogoSrc(src);
    });
  }, []);

  const handleReplaceLogo = (file: File) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const result = e.target?.result as string;
      if (result) {
        if (isDark) {
          setDarkLogoSrc(result);
          await saveLogoBlob('dark', result);
        } else {
          setLightLogoSrc(result);
          await saveLogoBlob('light', result);
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const currentLogoOverride = isDark ? darkLogoSrc : lightLogoSrc;

  return (
    <div
      className={`min-h-screen transition-colors duration-200 ${
        isDark ? 'bg-[#080808] text-white' : 'bg-white text-slate-900'
      }`}
    >
      {/* Top Header / Navigation Bar with Logo locked in at top-left */}
      <header
        className={`w-full border-b transition-colors ${
          isDark ? 'border-zinc-800/80 bg-[#080808]' : 'border-slate-200 bg-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 min-h-32 py-4 flex items-center justify-between">
          {/* Top-Left Logo Button (Click to open Instagram & YouTube links) */}
          <div className="flex items-center gap-3 group relative">
            <button
              onClick={() => setIsSocialOpen(true)}
              className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#CCFF00] rounded-2xl transition-transform active:scale-98 cursor-pointer flex items-center"
              title="Click to view Instagram & YouTube channels"
              aria-label="Open AIR NEETwork social links"
            >
              <Logo
                theme={theme}
                size="md"
                showTagline
                overrideSrc={currentLogoOverride}
              />
            </button>

            {/* Subtle replace logo file button on hover */}
            <button
              onClick={() => fileInputRef.current?.click()}
              className="opacity-0 group-hover:opacity-100 transition-opacity text-[10px] font-semibold px-2 py-1 rounded bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-700 flex items-center gap-1 ml-2"
              title="Replace current theme logo PNG"
            >
              <RefreshCw className="w-3 h-3" />
              <span>Replace</span>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              accept="image/png,image/*"
              onChange={(e) => {
                if (e.target.files?.[0]) handleReplaceLogo(e.target.files[0]);
              }}
              className="hidden"
            />
          </div>

          {/* Sliding Theme Toggle Switch */}
          <button
            type="button"
            role="switch"
            aria-checked={isDark}
            onClick={() => setTheme(isDark ? 'light' : 'dark')}
            className={`relative w-16 h-8 rounded-full p-1 transition-colors duration-300 ease-in-out border focus:outline-none flex items-center justify-between cursor-pointer select-none ${
              isDark
                ? 'bg-zinc-900 border-zinc-700'
                : 'bg-slate-200 border-slate-300'
            }`}
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle dark and light mode"
          >
            {/* Track Background Icons */}
            <Sun
              className={`w-3.5 h-3.5 ml-1 transition-opacity duration-200 ${
                isDark ? 'text-zinc-600 opacity-60' : 'text-[#0066FF] opacity-90'
              }`}
            />
            <Moon
              className={`w-3.5 h-3.5 mr-1 transition-opacity duration-200 ${
                isDark ? 'text-[#CCFF00] opacity-90' : 'text-slate-400 opacity-60'
              }`}
            />

            {/* Sliding Thumb Knob */}
            <div
              className={`absolute top-1 left-1 w-6 h-6 rounded-full shadow-md transition-transform duration-300 ease-out flex items-center justify-center ${
                isDark
                  ? 'translate-x-8 bg-black text-[#CCFF00] border border-zinc-700'
                  : 'translate-x-0 bg-white text-[#0066FF]'
              }`}
            >
              {isDark ? (
                <Moon className="w-3.5 h-3.5" />
              ) : (
                <Sun className="w-3.5 h-3.5" />
              )}
            </div>
          </button>
        </div>
      </header>

      {/* Main Content Area: Ready for your next instruction */}
      <main className="max-w-7xl mx-auto px-6 py-28 flex flex-col items-center justify-center text-center">
        <div className="text-xs uppercase tracking-widest font-semibold text-zinc-500">
          Click the logo to test Instagram & YouTube pop-up · Ready for your next instruction
        </div>
      </main>

      {/* Instagram & YouTube Pop-up Modal */}
      <SocialModal
        isOpen={isSocialOpen}
        onClose={() => setIsSocialOpen(false)}
        theme={theme}
      />
    </div>
  );
}
