export interface LanguageInfo {
  id: string;
  name: string;
  nativeName: string;
  region: 'East Africa' | 'West Africa' | 'Southern Africa' | 'Horn of Africa' | 'Central Africa';
  speakers: string;
  greeting: string;
  greetingTranslation: string;
  flagIcon: string;
  description: string;
  sampleTrackTitle: string;
  sampleAudioDuration: string;
  sampleCategory: string;
  synthFrequency: number;
}

export interface AudioTrack {
  id: string;
  title: string;
  language: string;
  narrator: string;
  category: 'Storytelling' | 'Podcast' | 'Educational' | 'News' | 'Culture' | 'History' | 'Poetry & Music';
  duration: string;
  coverImage: string;
  synthFrequency: number;
  description: string;
}

export interface FeatureCard {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  quote: string;
  favoriteLanguage: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: string;
}
