import React, { useEffect } from 'react';
import { X, Instagram, Youtube } from 'lucide-react';

interface SocialModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: 'dark' | 'light';
}

export const SocialModal: React.FC<SocialModalProps> = ({
  isOpen,
  onClose,
  theme,
}) => {
  const isDark = theme === 'dark';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className={`w-full max-w-xs rounded-2xl p-5 shadow-2xl relative border transition-all ${
          isDark
            ? 'bg-[#111114] border-zinc-800 text-white'
            : 'bg-white border-slate-200 text-slate-900 shadow-xl'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 p-1.5 rounded-lg transition-colors ${
            isDark
              ? 'text-zinc-500 hover:text-white hover:bg-zinc-800'
              : 'text-slate-400 hover:text-slate-900 hover:bg-slate-100'
          }`}
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Minimal Title */}
        <h3 className="text-sm font-bold uppercase tracking-tight mb-4 pr-6">
          Connect With Us
        </h3>

        {/* Just the icons and title */}
        <div className="grid grid-cols-2 gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center justify-center gap-2.5 p-4 rounded-xl border transition-all ${
              isDark
                ? 'bg-zinc-900/80 border-zinc-800 hover:border-[#CCFF00] hover:text-[#CCFF00]'
                : 'bg-slate-50 border-slate-200 hover:border-[#0066FF] hover:text-[#0066FF] hover:bg-white'
            }`}
          >
            <Instagram className="w-6 h-6" />
            <span className="text-xs font-semibold">Instagram</span>
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col items-center justify-center gap-2.5 p-4 rounded-xl border transition-all ${
              isDark
                ? 'bg-zinc-900/80 border-zinc-800 hover:border-[#CCFF00] hover:text-[#CCFF00]'
                : 'bg-slate-50 border-slate-200 hover:border-[#0066FF] hover:text-[#0066FF] hover:bg-white'
            }`}
          >
            <Youtube className="w-6 h-6" />
            <span className="text-xs font-semibold">YouTube</span>
          </a>
        </div>
      </div>
    </div>
  );
};
