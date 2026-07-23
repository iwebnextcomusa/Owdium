import React, { useState, useRef } from 'react';
import { Headphones, Globe, Sparkles, ArrowRight, Volume2, VolumeX } from 'lucide-react';

const heroVideoUrl = 'https://je9q7pguifcvzvaa.public.blob.vercel-storage.com/Create_video_for_owdium.com_202607240058.mp4';

interface HeroProps {
  onStartListening: () => void;
  onExploreLanguages: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartListening, onExploreLanguages }) => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current && videoRef.current.duration) {
      const trimThreshold = videoRef.current.duration - 3;
      if (trimThreshold > 0 && videoRef.current.currentTime >= trimThreshold) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden border-b border-[#D4AF37]/15">
      {/* Background Video Container with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          src={heroVideoUrl}
          autoPlay
          muted={isMuted}
          playsInline
          onTimeUpdate={handleTimeUpdate}
          className="w-full h-full object-cover object-center scale-105 filter brightness-100 contrast-105"
        />
        {/* Dark Emerald & Gradient Overlay tuned for high video visibility and clear readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071912]/60 via-[#071912]/45 to-[#071912]/75" />
        <div className="absolute inset-0 bg-[#071912]/15 backdrop-blur-[0.5px]" />
      </div>

      {/* Floating Mute/Unmute Video Audio Toggle */}
      <div className="absolute bottom-6 right-6 z-20">
        <button
          onClick={toggleMute}
          title={isMuted ? 'Unmute Video Audio' : 'Mute Video Audio'}
          className="flex items-center space-x-2 px-3.5 py-2 rounded-full bg-[#071912]/80 hover:bg-[#0D281E] backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
        >
          {isMuted ? (
            <>
              <VolumeX className="w-4 h-4 text-red-400" />
              <span className="hidden sm:inline">Unmute Video</span>
            </>
          ) : (
            <>
              <Volume2 className="w-4 h-4 text-emerald-400 animate-pulse" />
              <span className="hidden sm:inline">Mute Video</span>
            </>
          )}
        </button>
      </div>

      {/* Decorative Golden Gradient Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial from-[#D4AF37]/15 via-[#0D382C]/30 to-transparent blur-3xl pointer-events-none rounded-full z-0" />
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-radial from-[#C86D3B]/20 to-transparent blur-2xl pointer-events-none rounded-full z-0" />

      {/* Subtle African Geometric Border Motif Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
          {/* Cultural Preservation Tag */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0D281E] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold tracking-wide shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Cultural Preservation & Indigenous Audio Platform</span>
          </div>

          {/* Powerful Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] font-syne">
            Experience Audio in{' '}
            <span className="text-gold-gradient inline-block">
              African Languages.
            </span>
          </h1>

          {/* Supporting Mission Text */}
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl font-normal leading-relaxed">
            Owdium is a digital media platform dedicated to preserving rich African heritage, promoting indigenous languages, and making educational, storytelling, entertainment, and informational audio accessible to African audiences worldwide.
          </p>

          {/* Primary & Secondary Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 pt-2 w-full sm:w-auto">
            <button
              onClick={onStartListening}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E5A93C] to-[#C86D3B] text-[#071912] font-bold text-sm tracking-wide shadow-xl shadow-[#D4AF37]/25 hover:shadow-[#D4AF37]/40 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center space-x-3 group"
            >
              <Headphones className="w-5 h-5 text-[#071912] group-hover:rotate-12 transition-transform" />
              <span>Start Listening</span>
              <ArrowRight className="w-4 h-4 text-[#071912] group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreLanguages}
              className="px-7 py-4 rounded-xl bg-[#0D281E]/80 hover:bg-[#134E3E] border border-[#D4AF37]/35 text-white font-semibold text-sm tracking-wide transition-all duration-200 flex items-center justify-center space-x-2 hover:border-[#D4AF37]"
            >
              <Globe className="w-4 h-4 text-[#D4AF37]" />
              <span>Explore Languages</span>
            </button>
          </div>

          {/* Key Trust Signals */}
          <div className="pt-8 border-t border-gray-800/80 w-full max-w-2xl grid grid-cols-3 gap-6">
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white font-syne">15+</p>
              <p className="text-xs text-gray-400">African Languages</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white font-syne">50,000+</p>
              <p className="text-xs text-gray-400">Hours Recorded</p>
            </div>
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-white font-syne">1.2M+</p>
              <p className="text-xs text-gray-400">Global Listeners</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
