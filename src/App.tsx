import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { LanguagesSection } from './components/LanguagesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { AIChatbot } from './components/AIChatbot';
import { ScrollToTop } from './components/ScrollToTop';
import { Footer } from './components/Footer';
import { GlobalAudioPlayer } from './components/GlobalAudioPlayer';
import { LanguageInfo } from './types';
import { AFRICAN_LANGUAGES } from './data/mockData';
import { stopSynthSample } from './utils/audioSynth';

export default function App() {
  const [activeTrack, setActiveTrack] = useState<LanguageInfo | null>(null);
  const [isPlayingTrack, setIsPlayingTrack] = useState(false);
  const [activeLangFilter, setActiveLangFilter] = useState('');

  const handleStartListening = () => {
    // Select first track (Swahili) and start audio playback
    const swahiliTrack = AFRICAN_LANGUAGES[0];
    setActiveTrack(swahiliTrack);
    setIsPlayingTrack(true);
    const element = document.getElementById('languages');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExploreLanguages = () => {
    const element = document.getElementById('languages');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePlayTrack = (lang: LanguageInfo) => {
    if (!lang.id) {
      setIsPlayingTrack(false);
      setActiveTrack(null);
    } else {
      setActiveTrack(lang);
      setIsPlayingTrack(true);
    }
  };

  const handleToggleGlobalPlay = () => {
    if (isPlayingTrack) {
      stopSynthSample();
      setIsPlayingTrack(false);
    } else {
      setIsPlayingTrack(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#071912] text-[#E8EFEA] flex flex-col font-sans selection:bg-[#D4AF37] selection:text-[#071912]">
      {/* Navbar Header */}
      <Header
        onStartListeningClick={handleStartListening}
        onExploreLanguagesClick={handleExploreLanguages}
        activeLanguage={activeLangFilter}
        onSelectLanguage={(lang) => {
          setActiveLangFilter(lang);
          handleExploreLanguages();
        }}
      />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onStartListening={handleStartListening}
          onExploreLanguages={handleExploreLanguages}
        />

        {/* About Section */}
        <AboutSection />

        {/* Features Section */}
        <FeaturesSection />

        {/* Languages Section */}
        <LanguagesSection
          onPlayTrack={handlePlayTrack}
          currentlyPlayingId={isPlayingTrack && activeTrack ? activeTrack.id : null}
        />

        {/* Why Choose Owdium */}
        <WhyChooseUs />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* FAQ Accordion */}
        <FAQSection />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating AI Assistant Chatbot */}
      <AIChatbot />

      {/* Floating Scroll-To-Top Button */}
      <ScrollToTop />

      {/* Persistent Bottom Audio Player Bar */}
      <GlobalAudioPlayer
        currentTrack={activeTrack}
        onClose={() => {
          setActiveTrack(null);
          setIsPlayingTrack(false);
        }}
        isPlaying={isPlayingTrack}
        onTogglePlay={handleToggleGlobalPlay}
      />
    </div>
  );
}
