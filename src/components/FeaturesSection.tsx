import React from 'react';
import { FEATURES_LIST } from '../data/mockData';
import { Library, Headphones, Mic, GraduationCap, Download, Smartphone, Sparkles, Check } from 'lucide-react';

export const FeaturesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Library':
        return <Library className="w-6 h-6 text-[#D4AF37]" />;
      case 'Headphones':
        return <Headphones className="w-6 h-6 text-[#D4AF37]" />;
      case 'Mic':
        return <Mic className="w-6 h-6 text-[#D4AF37]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-6 h-6 text-[#D4AF37]" />;
      case 'Download':
        return <Download className="w-6 h-6 text-[#D4AF37]" />;
      case 'Smartphone':
        return <Smartphone className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="features" className="py-20 lg:py-28 bg-african-pattern relative border-b border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0D281E] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Built For Audio Excellence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-syne tracking-tight">
            Designed for <span className="text-gold-gradient">Seamless Listening</span> Everywhere
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Whether you are on a daily commute in Lagos, a flight across continents, or relaxing at home, Owdium offers advanced streaming capabilities engineered for native audio lovers.
          </p>
        </div>

        {/* 6 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES_LIST.map((feature) => (
            <div
              key={feature.id}
              className="bg-glass-card rounded-2xl p-7 border border-[#D4AF37]/20 hover:border-[#D4AF37] hover:shadow-2xl hover:shadow-[#D4AF37]/15 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#134E3E] to-[#071912] border border-[#D4AF37]/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(feature.iconName)}
                  </div>
                  {feature.badge && (
                    <span className="px-2.5 py-1 rounded-full bg-[#0D281E] border border-[#D4AF37]/30 text-[11px] font-bold text-[#D4AF37]">
                      {feature.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white font-syne mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-800/60 flex items-center text-xs font-semibold text-[#D4AF37]">
                <Check className="w-4 h-4 mr-1.5 text-emerald-400" />
                <span>Production Ready & Optimized</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
