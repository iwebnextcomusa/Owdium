import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/mockData';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 lg:py-28 bg-[#092218] relative border-b border-[#D4AF37]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0D281E] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-syne tracking-tight">
            Frequently Asked <span className="text-gold-gradient">Questions</span>
          </h2>
          <p className="mt-4 text-base text-gray-300 leading-relaxed font-normal">
            Everything you need to know about Owdium's audio library, offline downloads, device support, and cultural streaming.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-glass-card rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-[#D4AF37] shadow-xl shadow-[#D4AF37]/10' : 'border-[#D4AF37]/20 hover:border-[#D4AF37]/50'
                }`}
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-white font-syne pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#071912] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#D4AF37] text-[#071912]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-gray-300 leading-relaxed border-t border-gray-800/60">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
