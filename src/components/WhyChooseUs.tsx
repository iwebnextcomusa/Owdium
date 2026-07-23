import React from 'react';
import { WHY_CHOOSE_REASONS } from '../data/mockData';
import { CheckCircle2, ShieldCheck, Radio, Sparkles, CalendarCheck, Award } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (icon: string) => {
    switch (icon) {
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6 text-[#D4AF37]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />;
      case 'Radio':
        return <Radio className="w-6 h-6 text-[#D4AF37]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#D4AF37]" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <Award className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="why-owdium" className="py-20 lg:py-28 bg-[#092218] relative border-b border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0D281E] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-wider">
              <Award className="w-3.5 h-3.5" />
              <span>Uncompromising Quality</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-syne tracking-tight">
              Why Listeners Choose <span className="text-gold-gradient">Owdium</span>
            </h2>

            <p className="text-base text-gray-300 leading-relaxed">
              We go far beyond generic translation. Owdium works directly with indigenous cultural historians, native storytellers, and voice artists across the African continent to ensure total authenticity, emotional richness, and acoustic fidelity.
            </p>

            <div className="p-6 rounded-2xl bg-glass-card border border-[#D4AF37]/30 space-y-3">
              <p className="text-sm font-bold text-white font-syne">
                Did You Know?
              </p>
              <p className="text-xs text-gray-300 leading-relaxed">
                Over 2,000 languages are spoken across Africa. Owdium’s ongoing archiving mission ensures future generations maintain connection to their native dialect, folklore, and mother tongue.
              </p>
            </div>
          </div>

          {/* Right Column: 5 Feature Highlights List */}
          <div className="lg:col-span-7 space-y-4">
            {WHY_CHOOSE_REASONS.map((reason, idx) => (
              <div
                key={reason.title}
                className="bg-glass-card rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 flex items-start space-x-5 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#134E3E] to-[#071912] border border-[#D4AF37]/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {getIcon(reason.icon)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white font-syne mb-1 group-hover:text-[#D4AF37] transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {reason.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
