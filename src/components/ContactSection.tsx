import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Globe, Radio } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    language: 'Swahili',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitStatus({
          success: true,
          message: data.message || 'Thank you! Your message has been received.',
        });
        setFormData({ name: '', email: '', language: 'Swahili', message: '' });
      } else {
        setSubmitStatus({
          success: false,
          message: data.error || 'Failed to submit message. Please try again.',
        });
      }
    } catch (err) {
      setSubmitStatus({
        success: false,
        message: 'Network error. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-african-pattern relative border-b border-[#D4AF37]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#0D281E] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect With Owdium</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-syne tracking-tight">
            Get In Touch With <span className="text-gold-gradient">Our Team</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 leading-relaxed font-normal">
            Have questions about language partnership, content submission, voice acting opportunities, or media licensing? We would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Contact Info & Map Placeholder */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-glass-card rounded-2xl p-7 border border-[#D4AF37]/20 space-y-6">
              <h3 className="text-xl font-bold text-white font-syne">
                Contact Details
              </h3>

              {/* Phone */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#0D281E] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Direct Phone</p>
                  <a
                    href="tel:+16136637200"
                    className="text-base font-bold text-white hover:text-[#D4AF37] transition-colors"
                  >
                    +1 (613) 663-7200
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#0D281E] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Official Email</p>
                  <a
                    href="mailto:pharouk@duck.com"
                    className="text-base font-bold text-white hover:text-[#D4AF37] transition-colors"
                  >
                    pharouk@duck.com
                  </a>
                </div>
              </div>

              {/* Global Studios Location */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#0D281E] border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 font-medium">Global Audio Studios</p>
                  <p className="text-sm font-bold text-white">
                    Nairobi • Lagos • Accra • Johannesburg • London
                  </p>
                </div>
              </div>
            </div>

            {/* Embedded Google Map Placeholder Card */}
            <div className="bg-glass-card rounded-2xl p-4 border border-[#D4AF37]/20 relative overflow-hidden group">
              <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#071912]">
                <iframe
                  title="Owdium Map Location"
                  src="https://maps.google.com/maps?q=Nairobi&t=&z=5&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-70 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#071912]/90 px-3 py-1.5 rounded-lg border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
                  <span>Owdium Recording Network</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-glass-card rounded-2xl p-8 border border-[#D4AF37]/30 shadow-2xl">
              <h3 className="text-2xl font-bold text-white font-syne mb-2">
                Send Us a Message
              </h3>
              <p className="text-xs text-gray-300 mb-6">
                Fill out the form below and an Owdium representative will respond within 24 hours.
              </p>

              {submitStatus && (
                <div
                  className={`p-4 rounded-xl mb-6 flex items-start space-x-3 text-xs font-semibold ${
                    submitStatus.success
                      ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-500/40'
                      : 'bg-rose-950/80 text-rose-300 border border-rose-500/40'
                  }`}
                >
                  {submitStatus.success ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  )}
                  <span>{submitStatus.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kwame Mensah"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#071912] border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. kwame@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#071912] border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
                    Primary Language Interest
                  </label>
                  <select
                    value={formData.language}
                    onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#071912] border border-gray-800 text-white text-sm focus:outline-none focus:border-[#D4AF37] transition-colors"
                  >
                    <option value="Swahili">Swahili (Kiswahili)</option>
                    <option value="Yoruba">Yoruba (Èdè Yorùbá)</option>
                    <option value="Hausa">Hausa (Harshen Hausa)</option>
                    <option value="Igbo">Igbo (Asụsụ Igbo)</option>
                    <option value="Amharic">Amharic (አማርኛ)</option>
                    <option value="Zulu">Zulu (isiZulu)</option>
                    <option value="Xhosa">Xhosa (isiXhosa)</option>
                    <option value="Oromo">Oromo (Afaan Oromoo)</option>
                    <option value="Akan">Akan (Twi)</option>
                    <option value="Somali">Somali (Af-Soomaali)</option>
                    <option value="Other">Other African Language</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-300 mb-1.5 uppercase tracking-wider">
                    Your Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your story, partnership request, or feedback..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#071912] border border-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-[#D4AF37] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5A93C] to-[#C86D3B] text-[#071912] font-bold text-sm tracking-wide shadow-xl shadow-[#D4AF37]/20 hover:scale-[1.01] active:scale-95 disabled:opacity-50 transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
