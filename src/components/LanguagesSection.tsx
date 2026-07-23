import React, { useState } from 'react';
import { AFRICAN_LANGUAGES } from '../data/mockData';
import { LanguageInfo } from '../types';
import { Globe, Play, Pause, Volume2, Sparkles, Filter } from 'lucide-react';
import { playSynthSample, stopSynthSample } from '../utils/audioSynth';

interface LanguagesSectionProps {
  onPlayTrack: (lang: LanguageInfo) => void;
  currentlyPlayingId: string | null;
}

export const LanguagesSection: React.FC<LanguagesSectionProps> = ({
  onPlayTrack,
  currentlyPlayingId,
}) => {
  const [selectedRegion, setSelectedRegion] = useState<string>('All');

  const regions = ['All', 'West Africa', 'East Africa', 'Southern Africa', 'Horn of Africa'];

  const filteredLanguages =
    selectedRegion === 'All'
      ? AFRICAN_LANGUAGES
      : AFRICAN_LANGUAGES.filter((lang) => lang.region === selectedRegion);

  const handleTogglePlay = (lang: LanguageInfo) => {
    if (currentlyPlayingId === lang.id) {
      stopSynthSample();
      onPlayTrack({ ...lang, id: '' });
    } else {
      playSynthSample(lang.synthFrequency, 10);
      onPlayTrack(lang);
    }
  };

  return (
    <section id="languages" className="py-20 lg:py-28 bg-[#092218] relative border-b border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0D281E] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>Indigenous Audio Diversity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-syne tracking-tight">
            Explore Audio in <span className="text-gold-gradient">African Languages</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Click on any language to listen to an authentic native audio sample preview, recorded with proper tonality and cultural pronunciation.
          </p>
        </div>

        {/* Region Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <div className="flex items-center space-x-2 mr-2 text-xs font-semibold text-[#D4AF37]">
            <Filter className="w-3.5 h-3.5" />
            <span>Region:</span>
          </div>
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setSelectedRegion(region)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 border ${
                selectedRegion === region
                  ? 'bg-gradient-to-r from-[#D4AF37] to-[#C86D3B] text-[#071912] border-transparent shadow-lg shadow-[#D4AF37]/20 scale-105'
                  : 'bg-[#0D281E] text-gray-300 border-[#D4AF37]/20 hover:border-[#D4AF37] hover:text-white'
              }`}
            >
              {region}
            </button>
          ))}
        </div>

        {/* Languages Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {filteredLanguages.map((lang) => {
            const isPlaying = currentlyPlayingId === lang.id;
            return (
              <div
                key={lang.id}
                className={`bg-glass-card rounded-2xl p-5 border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${
                  isPlaying
                    ? 'border-[#D4AF37] shadow-xl shadow-[#D4AF37]/25 bg-[#0D382C]/80'
                    : 'border-[#D4AF37]/20 hover:border-[#D4AF37]/60'
                }`}
              >
                <div>
                  {/* Top Bar: Icon, Region Badge, Speaker Count */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl" role="img" aria-label={lang.name}>
                      {lang.flagIcon}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#071912] text-[#D4AF37] border border-[#D4AF37]/30">
                      {lang.region}
                    </span>
                  </div>

                  {/* Language Names */}
                  <h3 className="text-xl font-bold text-white font-syne mb-0.5 group-hover:text-[#D4AF37] transition-colors">
                    {lang.name}
                  </h3>
                  <p className="text-xs text-[#D4AF37] font-semibold mb-3">
                    {lang.nativeName}
                  </p>

                  {/* Native Greeting */}
                  <div className="p-2.5 rounded-xl bg-[#071912]/80 border border-gray-800 mb-3">
                    <p className="text-xs font-bold text-emerald-300">
                      "{lang.greeting}"
                    </p>
                    <p className="text-[11px] text-gray-400 italic">
                      {lang.greetingTranslation}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-300 line-clamp-2 leading-relaxed mb-4">
                    {lang.description}
                  </p>
                </div>

                {/* Bottom Bar: Sample Track & Interactive Audio Play Button */}
                <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-gray-400 uppercase tracking-wider font-semibold">
                      Sample Track
                    </p>
                    <p className="text-xs font-bold text-white truncate max-w-[110px]">
                      {lang.sampleTrackTitle}
                    </p>
                  </div>

                  <button
                    onClick={() => handleTogglePlay(lang)}
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                      isPlaying
                        ? 'bg-[#D4AF37] text-[#071912] scale-110 shadow-lg shadow-[#D4AF37]/40'
                        : 'bg-[#134E3E] text-white hover:bg-[#D4AF37] hover:text-[#071912]'
                    }`}
                    aria-label={`Play audio sample for ${lang.name}`}
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 fill-current" />
                    ) : (
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
