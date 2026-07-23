import React from 'react';
import { BookOpen, Radio, Shield, Users, HeartHandshake, Sparkles, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#092218] relative overflow-hidden border-b border-[#D4AF37]/15">
      {/* Background African motif weave */}
      <div className="absolute inset-0 bg-african-weave opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0D281E] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Preserving Culture Through Sound</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-syne tracking-tight">
            Connecting Global Communities to{' '}
            <span className="text-gold-gradient">African Heritage</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Language is the vessel of culture, identity, and memory. Owdium bridges generations by recording and broadcasting audio storytelling, literature, news, and learning tools in indigenous African mother tongues.
          </p>
        </div>

        {/* 4 Core Mission Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Pillar 1 */}
          <div className="bg-glass-card p-6 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#0D382C] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-5 group-hover:scale-110 transition-transform">
              <Radio className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-syne mb-2">
              Multi-Language Delivery
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Delivers rich audio content in multiple African languages including Swahili, Yoruba, Hausa, Igbo, Amharic, Zulu, and more.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="bg-glass-card p-6 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#0D382C] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-5 group-hover:scale-110 transition-transform">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-syne mb-2">
              Language Preservation
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Actively protects and archives indigenous dialects, proverbs, and oral histories before they fade in a digital world.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="bg-glass-card p-6 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#0D382C] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-5 group-hover:scale-110 transition-transform">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-syne mb-2">
              Stories, Education & News
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Makes engaging folklore, daily news, educational lessons, and literary audiobooks accessible anywhere, anytime.
            </p>
          </div>

          {/* Pillar 4 */}
          <div className="bg-glass-card p-6 rounded-2xl border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 hover:-translate-y-1 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#0D382C] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] mb-5 group-hover:scale-110 transition-transform">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white font-syne mb-2">
              Global African Connection
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Connects diaspora communities and younger generations directly with native-language storytellers and cultural elders.
            </p>
          </div>
        </div>

        {/* Highlight Banner / Interactive Quote */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0D382C] via-[#134E3E] to-[#071912] p-8 lg:p-12 border border-[#D4AF37]/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest flex items-center gap-2">
                <HeartHandshake className="w-4 h-4" />
                Our Commitment to Oral Traditions
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white font-syne">
                "Until the lion tells his story, the tale of the hunt will always glorify the hunter."
              </h3>
              <p className="text-sm text-gray-300 font-serif-heading italic">
                — Ancient African Proverb
              </p>
              <p className="text-xs sm:text-sm text-gray-300 leading-relaxed max-w-2xl">
                By partnering directly with native voice actors, linguists, and cultural historians across Africa, Owdium ensures every recording captures accurate pronunciation, cadence, and emotional warmth.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="p-6 rounded-2xl bg-[#071912]/80 border border-[#D4AF37]/30 text-center w-full max-w-xs space-y-2">
                <Award className="w-8 h-8 text-[#D4AF37] mx-auto" />
                <p className="text-2xl font-bold text-white font-syne">100%</p>
                <p className="text-xs text-gray-300 font-medium">Native Speaker Narration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
