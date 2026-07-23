import React, { useState, useEffect } from 'react';
import { Volume2, Menu, X, Globe, Sparkles, Headphones, Radio } from 'lucide-react';

interface HeaderProps {
  onStartListeningClick: () => void;
  onExploreLanguagesClick: () => void;
  activeLanguage: string;
  onSelectLanguage: (lang: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onStartListeningClick,
  onExploreLanguagesClick,
  activeLanguage,
  onSelectLanguage,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const languagesQuick = ['All', 'Swahili', 'Yoruba', 'Hausa', 'Igbo', 'Amharic', 'Zulu', 'Akan'];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071912]/90 backdrop-blur-md border-b border-[#D4AF37]/20 py-3 shadow-2xl'
          : 'bg-gradient-to-b from-[#071912]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Concept: Stylized soundwave combined with an abstract African geometric motif */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] via-[#C86D3B] to-[#0D382C] p-[2px] shadow-lg shadow-[#D4AF37]/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#071912] rounded-[10px] flex items-center justify-center relative overflow-hidden">
                {/* Abstract geometric diamond motif */}
                <div className="absolute inset-0 bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:6px_6px] opacity-20" />
                {/* Stylized sound wave bars */}
                <div className="flex items-center space-x-1 z-10">
                  <span className="w-1 h-3 bg-[#D4AF37] rounded-full animate-pulse" />
                  <span className="w-1 h-5 bg-[#E6C200] rounded-full animate-pulse delay-75" />
                  <span className="w-1 h-2 bg-[#C86D3B] rounded-full animate-pulse delay-150" />
                  <span className="w-1 h-4 bg-[#D4AF37] rounded-full animate-pulse delay-100" />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold tracking-tight text-white font-syne flex items-center">
                Owdium
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37] ml-1" />
              </span>
              <span className="text-[10px] tracking-widest text-[#D4AF37]/80 uppercase font-medium">
                African Audio
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium">
            <a href="#about" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
              About
            </a>
            <a href="#features" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
              Features
            </a>
            <a href="#languages" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
              Languages
            </a>
            <a href="#why-owdium" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
              Why Owdium
            </a>
            <a href="#testimonials" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
              Testimonials
            </a>
            <a href="#faq" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-gray-300 hover:text-[#D4AF37] transition-colors">
              Contact
            </a>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Quick Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-[#0D281E] border border-[#D4AF37]/30 text-xs font-medium text-gray-200 hover:border-[#D4AF37] transition-all"
              >
                <Globe className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>{activeLanguage || 'Languages'}</span>
              </button>

              {langDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-xl bg-[#0B231A] border border-[#D4AF37]/30 shadow-2xl py-2 z-50">
                  <div className="px-3 py-1 text-[11px] font-semibold text-[#D4AF37] tracking-wider uppercase border-b border-gray-800">
                    Quick Select
                  </div>
                  {languagesQuick.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => {
                        onSelectLanguage(lang === 'All' ? '' : lang);
                        setLangDropdownOpen(false);
                      }}
                      className="w-full text-left px-3 py-1.5 text-xs text-gray-300 hover:bg-[#134E3E] hover:text-white transition-colors"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Primary CTA: Start Listening */}
            <button
              onClick={onStartListeningClick}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5A93C] to-[#C86D3B] text-[#071912] font-bold text-xs tracking-wide shadow-lg shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/40 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center space-x-2"
            >
              <Headphones className="w-4 h-4 text-[#071912]" />
              <span>Start Listening</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-3 lg:hidden">
            <button
              onClick={onStartListeningClick}
              className="px-3 py-1.5 rounded-lg bg-[#D4AF37] text-[#071912] font-bold text-xs flex items-center gap-1"
            >
              <Headphones className="w-3.5 h-3.5" />
              <span>Listen</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0D281E] text-gray-200 hover:text-white border border-[#D4AF37]/30 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[#D4AF37]" /> : <Menu className="w-6 h-6 text-[#D4AF37]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071912]/95 border-b border-[#D4AF37]/20 backdrop-blur-xl px-6 py-6 transition-all">
          <div className="flex flex-col space-y-4 text-base font-medium">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-200 hover:text-[#D4AF37] py-1 border-b border-gray-800/60"
            >
              About
            </a>
            <a
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-200 hover:text-[#D4AF37] py-1 border-b border-gray-800/60"
            >
              Features
            </a>
            <a
              href="#languages"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-200 hover:text-[#D4AF37] py-1 border-b border-gray-800/60"
            >
              Languages
            </a>
            <a
              href="#why-owdium"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-200 hover:text-[#D4AF37] py-1 border-b border-gray-800/60"
            >
              Why Owdium
            </a>
            <a
              href="#testimonials"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-200 hover:text-[#D4AF37] py-1 border-b border-gray-800/60"
            >
              Testimonials
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-200 hover:text-[#D4AF37] py-1 border-b border-gray-800/60"
            >
              FAQ
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-200 hover:text-[#D4AF37] py-1 border-b border-gray-800/60"
            >
              Contact
            </a>

            <div className="pt-2 flex flex-col space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onStartListeningClick();
                }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C86D3B] text-[#071912] font-bold text-sm flex items-center justify-center space-x-2 shadow-lg"
              >
                <Headphones className="w-4 h-4" />
                <span>Start Listening Now</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onExploreLanguagesClick();
                }}
                className="w-full py-2.5 rounded-xl bg-[#0D281E] border border-[#D4AF37]/40 text-[#D4AF37] font-semibold text-xs flex items-center justify-center space-x-2"
              >
                <Globe className="w-4 h-4" />
                <span>Explore 15+ Languages</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
