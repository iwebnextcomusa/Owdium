import React from 'react';
import { TESTIMONIALS } from '../data/mockData';
import { Star, Quote, Heart, Sparkles } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-african-pattern relative border-b border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0D281E] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
            <Heart className="w-3.5 h-3.5 fill-current" />
            <span>Voices From Around The World</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-syne tracking-tight">
            Loved By <span className="text-gold-gradient">Global Listeners</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Hear how Owdium is bringing mother tongue storytelling into homes, commutes, and classrooms across Africa and the global diaspora.
          </p>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-glass-card rounded-2xl p-6 border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-[#D4AF37] fill-[#D4AF37]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-gray-200 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author Details */}
              <div className="pt-4 border-t border-gray-800/80 flex items-center space-x-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-[#D4AF37]/40"
                />
                <div>
                  <h3 className="text-sm font-bold text-white font-syne">{t.name}</h3>
                  <p className="text-[11px] text-gray-400">{t.role} • {t.location}</p>
                  <span className="inline-block text-[10px] text-[#D4AF37] font-semibold mt-0.5">
                    Favorite: {t.favoriteLanguage}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
