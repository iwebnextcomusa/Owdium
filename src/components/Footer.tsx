import React, { useState } from 'react';
import { Volume2, Send, CheckCircle2, AlertCircle, Shield, FileText, Globe } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [modalType, setModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleNewsletter = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitting(true);
    setNewsletterStatus(null);

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setNewsletterStatus({
          success: true,
          message: data.message || 'Subscribed successfully!',
        });
        setEmail('');
      } else {
        setNewsletterStatus({
          success: false,
          message: data.error || 'Failed to subscribe.',
        });
      }
    } catch (err) {
      setNewsletterStatus({
        success: false,
        message: 'Subscription error. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-[#05130e] text-gray-300 border-t border-[#D4AF37]/20 relative overflow-hidden pt-16 pb-12">
      {/* Subtle African background weave */}
      <div className="absolute inset-0 bg-african-weave opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-gray-800">
          {/* Col 1: Logo & Company Overview */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] via-[#C86D3B] to-[#0D382C] p-[2px]">
                <div className="w-full h-full bg-[#071912] rounded-[10px] flex items-center justify-center">
                  <div className="flex items-center space-x-1">
                    <span className="w-1 h-3 bg-[#D4AF37] rounded-full" />
                    <span className="w-1 h-5 bg-[#E6C200] rounded-full" />
                    <span className="w-1 h-2 bg-[#C86D3B] rounded-full" />
                  </div>
                </div>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-syne">
                Owdium
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#D4AF37] ml-1" />
              </span>
            </a>

            <p className="text-xs text-gray-400 leading-relaxed max-w-sm">
              Owdium is a digital media platform dedicated to providing high-quality audio content in indigenous African languages. Preserving culture, promoting storytelling, and connecting communities worldwide.
            </p>

            <div className="pt-2 flex items-center space-x-3 text-xs text-[#D4AF37]">
              <Globe className="w-4 h-4" />
              <span>15+ Indigenous African Languages Recorded</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white font-syne uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">
                  About Owdium
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-[#D4AF37] transition-colors">
                  Platform Features
                </a>
              </li>
              <li>
                <a href="#languages" className="hover:text-[#D4AF37] transition-colors">
                  Supported Languages
                </a>
              </li>
              <li>
                <a href="#why-owdium" className="hover:text-[#D4AF37] transition-colors">
                  Why Choose Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Legal & Support */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white font-syne uppercase tracking-wider">
              Legal & Info
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => setModalType('privacy')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setModalType('terms')}
                  className="hover:text-[#D4AF37] transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#D4AF37] transition-colors">
                  FAQ & Support
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition-colors">
                  Contact Studio
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter Signup */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold text-white font-syne uppercase tracking-wider">
              Subscribe To Audio Circle
            </h4>
            <p className="text-xs text-gray-400">
              Receive weekly audio story releases, new language drops, and cultural podcasts directly in your inbox.
            </p>

            {newsletterStatus && (
              <div
                className={`p-3 rounded-xl text-xs font-semibold flex items-center space-x-2 ${
                  newsletterStatus.success
                    ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                    : 'bg-rose-950 text-rose-300 border border-rose-500/40'
                }`}
              >
                {newsletterStatus.success ? (
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                ) : (
                  <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                )}
                <span>{newsletterStatus.message}</span>
              </div>
            )}

            <form onSubmit={handleNewsletter} className="flex items-center space-x-2">
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-[#071912] border border-gray-800 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-[#D4AF37] transition-colors"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#C86D3B] text-[#071912] font-bold text-xs hover:scale-105 active:scale-95 disabled:opacity-50 transition-all flex items-center space-x-1"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Join</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Exact Required Developer Credit */}
        <div className="pt-8 text-center space-y-3">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Owdium Digital Media Inc. All rights reserved. Preserving African Voices worldwide.
          </p>

          {/* Explicit requirement: Developed by <a href="https://iwebnext.com" target="_blank">iWebNext</a> centered */}
          <p className="text-xs text-gray-400 font-medium">
            Developed by <a href="https://iwebnext.com" target="_blank" rel="noopener noreferrer" className="text-[#D4AF37] hover:underline font-bold">iWebNext</a>
          </p>
        </div>
      </div>

      {/* Privacy / Terms Modal */}
      {modalType && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#071912] border border-[#D4AF37]/40 rounded-2xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto relative text-left">
            <h3 className="text-xl font-bold text-white font-syne mb-4">
              {modalType === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
            </h3>
            <div className="text-xs text-gray-300 space-y-3 leading-relaxed">
              <p>
                Owdium is deeply committed to privacy, data protection, and cultural respect. We do not sell or rent personal information to third parties.
              </p>
              <p>
                All user interactions, preferred languages, and optional newsletter subscriptions are encrypted and managed in accordance with international digital data protection standards.
              </p>
            </div>
            <button
              onClick={() => setModalType(null)}
              className="mt-6 w-full py-2.5 rounded-xl bg-[#D4AF37] text-[#071912] font-bold text-xs"
            >
              Close Window
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
