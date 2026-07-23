import { LanguageInfo, AudioTrack, FeatureCard, Testimonial, FAQItem } from '../types';

export const AFRICAN_LANGUAGES: LanguageInfo[] = [
  {
    id: 'swahili',
    name: 'Swahili',
    nativeName: 'Kiswahili',
    region: 'East Africa',
    speakers: '150M+ speakers',
    greeting: 'Jambo / Habari gani!',
    greetingTranslation: 'Hello / How are you!',
    flagIcon: '🌍',
    description: 'Widely spoken lingua franca across Kenya, Tanzania, Uganda, Rwanda, and DRC.',
    sampleTrackTitle: 'Tales of Mount Kilimanjaro',
    sampleAudioDuration: '3:45',
    sampleCategory: 'Storytelling',
    synthFrequency: 432,
  },
  {
    id: 'yoruba',
    name: 'Yoruba',
    nativeName: 'Èdè Yorùbá',
    region: 'West Africa',
    speakers: '45M+ speakers',
    greeting: 'Ẹ kãrọ̀ / Ẹ ku ãlẹ́!',
    greetingTranslation: 'Good morning / Good evening!',
    flagIcon: '🕊️',
    description: 'Rich tonal language known for profound proverbs, Orisha mythology, and vibrant oral literature.',
    sampleTrackTitle: 'Wisdom of Oduduwa Legends',
    sampleAudioDuration: '4:12',
    sampleCategory: 'Culture & History',
    synthFrequency: 480,
  },
  {
    id: 'hausa',
    name: 'Hausa',
    nativeName: 'Harshen Hausa',
    region: 'West Africa',
    speakers: '75M+ speakers',
    greeting: 'Sannu da zuwa!',
    greetingTranslation: 'Welcome to you!',
    flagIcon: '☀️',
    description: 'Major trade and cultural language across Northern Nigeria, Niger, and Sahelian West Africa.',
    sampleTrackTitle: 'Trade Stories of Ancient Kano',
    sampleAudioDuration: '3:18',
    sampleCategory: 'Educational',
    synthFrequency: 512,
  },
  {
    id: 'igbo',
    name: 'Igbo',
    nativeName: 'Asụsụ Igbo',
    region: 'West Africa',
    speakers: '30M+ speakers',
    greeting: 'Ndewọ / Nnọọ!',
    greetingTranslation: 'Greetings / Welcome!',
    flagIcon: '🌴',
    description: 'Tone language with rich oral proverbs, epic songs, and ancient philosophy.',
    sampleTrackTitle: 'Echoes of the Sacred Forest',
    sampleAudioDuration: '4:50',
    sampleCategory: 'Storytelling',
    synthFrequency: 450,
  },
  {
    id: 'amharic',
    name: 'Amharic',
    nativeName: 'አማርኛ (Amarɨñña)',
    region: 'Horn of Africa',
    speakers: '55M+ speakers',
    greeting: 'ሰላም (Selam)!',
    greetingTranslation: 'Peace / Hello!',
    flagIcon: '👑',
    description: 'Official working language of Ethiopia using the ancient Ge’ez script.',
    sampleTrackTitle: 'The Lalibela Rock Chronicles',
    sampleAudioDuration: '5:05',
    sampleCategory: 'History',
    synthFrequency: 528,
  },
  {
    id: 'zulu',
    name: 'Zulu',
    nativeName: 'isiZulu',
    region: 'Southern Africa',
    speakers: '27M+ speakers',
    greeting: 'Sawubona!',
    greetingTranslation: 'I see you / Hello!',
    flagIcon: '🛡️',
    description: 'Melodic Nguni language famous for click consonants, royal poetry, and rhythmic chants.',
    sampleTrackTitle: 'Poetry of King Shaka',
    sampleAudioDuration: '3:30',
    sampleCategory: 'Culture',
    synthFrequency: 396,
  },
  {
    id: 'xhosa',
    name: 'Xhosa',
    nativeName: 'isiXhosa',
    region: 'Southern Africa',
    speakers: '20M+ speakers',
    greeting: 'Molo / Molweni!',
    greetingTranslation: 'Hello / Welcome everyone!',
    flagIcon: '🌊',
    description: 'Expressive click language deeply rooted in storytelling, song, and oral histories.',
    sampleTrackTitle: 'Voices of the Great Kei River',
    sampleAudioDuration: '4:02',
    sampleCategory: 'Podcast',
    synthFrequency: 415,
  },
  {
    id: 'oromo',
    name: 'Oromo',
    nativeName: 'Afaan Oromoo',
    region: 'Horn of Africa',
    speakers: '38M+ speakers',
    greeting: 'Akkam / Ashamaa!',
    greetingTranslation: 'How are you / Hello!',
    flagIcon: '🌳',
    description: 'Cushitic language of Ethiopia and Kenya with deep egalitarian Gadaa traditions.',
    sampleTrackTitle: 'Gadaa System & Harmony',
    sampleAudioDuration: '3:55',
    sampleCategory: 'Educational',
    synthFrequency: 460,
  },
  {
    id: 'akan',
    name: 'Akan (Twi)',
    nativeName: 'Twi',
    region: 'West Africa',
    speakers: '22M+ speakers',
    greeting: 'Akwaaba!',
    greetingTranslation: 'Welcome!',
    flagIcon: '🏺',
    description: 'Primary language of Ghana famous for Anansi spider folklore, highlife rhythms, and wisdom.',
    sampleTrackTitle: 'Anansi and the Golden Stool',
    sampleAudioDuration: '3:40',
    sampleCategory: 'Storytelling',
    synthFrequency: 494,
  },
  {
    id: 'somali',
    name: 'Somali',
    nativeName: 'Af-Soomaali',
    region: 'Horn of Africa',
    speakers: '25M+ speakers',
    greeting: 'Nabad / Soomaaliyeed!',
    greetingTranslation: 'Peace be with you!',
    flagIcon: '⭐',
    description: 'Renowned "Nation of Poets" language with vast poetic traditions and desert oral epics.',
    sampleTrackTitle: 'Desert Wind & Nomadic Verses',
    sampleAudioDuration: '4:20',
    sampleCategory: 'Poetry & Music',
    synthFrequency: 440,
  }
];

export const AUDIO_TRACKS: AudioTrack[] = [
  {
    id: 'track-1',
    title: 'Anansi & The Golden Pot',
    language: 'Akan (Twi)',
    narrator: 'Kwame Mensah',
    category: 'Storytelling',
    duration: '12:45',
    coverImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=600&q=80',
    synthFrequency: 494,
    description: 'The legendary tale of Kwaku Anansi learning the true meaning of wisdom and sharing.',
  },
  {
    id: 'track-2',
    title: 'Legends of Mount Kilimanjaro',
    language: 'Swahili',
    narrator: 'Amina Kimaro',
    category: 'Culture',
    duration: '18:20',
    coverImage: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&w=600&q=80',
    synthFrequency: 432,
    description: 'Explore the Chagga myths surrounding the snow-capped peak of Africa.',
  },
  {
    id: 'track-3',
    title: 'The Orisha Chronicles: Sango',
    language: 'Yoruba',
    narrator: 'Tunde Adebayo',
    category: 'Podcast',
    duration: '24:10',
    coverImage: 'https://images.unsplash.com/photo-1523821741446-edb2b68bb7a0?auto=format&fit=crop&w=600&q=80',
    synthFrequency: 480,
    description: 'Deep dive into the thunder deity Sango and ancient Oyo Kingdom history.',
  },
  {
    id: 'track-4',
    title: 'Hausa Traders of Old Kano',
    language: 'Hausa',
    narrator: 'Balarabe Bello',
    category: 'Educational',
    duration: '15:30',
    coverImage: 'https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80',
    synthFrequency: 512,
    description: 'Discover how trans-Saharan trade routes shaped Northern Nigeria culture.',
  },
  {
    id: 'track-5',
    title: 'The Great Wall of Great Zimbabwe',
    language: 'Shona',
    narrator: 'Chipo Moyo',
    category: 'History',
    duration: '21:05',
    coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80',
    synthFrequency: 396,
    description: 'An architectural and oral journey through medieval Southern African civilizations.',
  },
  {
    id: 'track-6',
    title: 'Echoes of the Serengeti',
    language: 'Swahili',
    narrator: 'Juma Omondi',
    category: 'News',
    duration: '10:15',
    coverImage: 'https://images.unsplash.com/photo-1534567153574-2b12153a87f0?auto=format&fit=crop&w=600&q=80',
    synthFrequency: 440,
    description: 'Wildlife conservation insights recorded in authentic Kiswahili.',
  }
];

export const FEATURES_LIST: FeatureCard[] = [
  {
    id: 'feat-1',
    title: 'Extensive African Language Library',
    description: 'Access thousands of hours of audio spanning Swahili, Yoruba, Hausa, Igbo, Amharic, Zulu, Xhosa, Oromo, Akan, Somali, and growing weekly.',
    iconName: 'Library',
    badge: '15+ Languages'
  },
  {
    id: 'feat-2',
    title: 'High-Quality Audio Streaming',
    description: 'Engineered for pristine studio-quality listening with adaptive bitrate for ultra-smooth playback even on low-data cellular networks.',
    iconName: 'Headphones',
    badge: 'HD 320kbps'
  },
  {
    id: 'feat-3',
    title: 'Podcasts & Oral Storytelling',
    description: 'Immerse in indigenous fables, ancestral folklore, historical sagas, contemporary fiction, and inspiring podcasts by local storytellers.',
    iconName: 'Mic',
    badge: 'Authentic Voices'
  },
  {
    id: 'feat-4',
    title: 'Educational & Language Audio',
    description: 'Master indigenous languages with interactive audio pronunciation guides, children’s learning tracks, and cultural history lessons.',
    iconName: 'GraduationCap',
    badge: 'Interactive'
  },
  {
    id: 'feat-5',
    title: 'Offline Listening Mode',
    description: 'Download audio episodes directly to your device with one tap. Enjoy uninterrupted listening without relying on active internet connectivity.',
    iconName: 'Download',
    badge: 'Zero Data'
  },
  {
    id: 'feat-6',
    title: 'Cross-Device Compatibility',
    description: 'Seamlessly switch playback between your desktop browser, tablet, smartphone, or smart home audio setup with synchronized state.',
    iconName: 'Smartphone',
    badge: 'Sync Everywhere'
  }
];

export const WHY_CHOOSE_REASONS = [
  {
    title: 'Authentic Native-Language Content',
    desc: 'Narrated exclusively by native speakers and cultural custodians who preserve regional accents, nuances, and oral phrasing.',
    icon: 'CheckCircle2'
  },
  {
    title: 'Cultural Preservation & Heritage',
    desc: 'Archiving endangered stories, oral histories, and folk wisdom for future generations across the global African diaspora.',
    icon: 'ShieldCheck'
  },
  {
    title: 'High-Quality & Data-Smart Audio',
    desc: 'Crystal-clear 320kbps audio output accompanied by data-saving mode options optimized for regional connectivity.',
    icon: 'Radio'
  },
  {
    title: 'Intuitive & Accessible Interface',
    desc: 'Designed with high accessibility standards, warm themes, dark mode luxury, and easy language switching.',
    icon: 'Sparkles'
  },
  {
    title: 'Regularly Updated Weekly Content',
    desc: 'Fresh stories, daily news digests, children’s podcasts, and audiobooks added every single week.',
    icon: 'CalendarCheck'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Dr. Fatima Abubakar',
    role: 'Linguist & Educator',
    location: 'Kano, Nigeria',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    quote: 'Owdium is a masterpiece for African language preservation. My children listen to Hausa folklore every evening in pristine audio quality. It bridges our heritage effortlessly!',
    favoriteLanguage: 'Hausa',
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Kiprono Mutai',
    role: 'Software Engineer & Listener',
    location: 'Nairobi, Kenya',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    quote: 'Being away from home in London, Owdium brings the warmth of Kiswahili storytelling directly to my commute. The offline download feature works like a charm on flights!',
    favoriteLanguage: 'Swahili',
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Nneka Orakwue',
    role: 'Cultural Curator',
    location: 'Enugu, Nigeria',
    avatar: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=200&q=80',
    quote: 'The depth of Igbo proverbs and historical podcasts on Owdium is unmatched. The audio production clarity and background atmospheric scoring are truly world-class.',
    favoriteLanguage: 'Igbo',
    rating: 5
  },
  {
    id: 'test-4',
    name: 'Siyabonga Dlamini',
    role: 'Music Producer',
    location: 'Johannesburg, South Africa',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    quote: 'As an isiZulu speaker, hearing poetic recitations in native rhythm is deeply moving. Owdium gives our voices the global spotlight they deserve.',
    favoriteLanguage: 'Zulu',
    rating: 5
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Languages',
    question: 'Which African languages are currently supported on Owdium?',
    answer: 'Owdium currently features rich audio libraries in Swahili, Yoruba, Hausa, Igbo, Amharic, Zulu, Xhosa, Oromo, Akan (Twi), and Somali. We regularly onboard new regional dialects and languages every month.'
  },
  {
    id: 'faq-2',
    category: 'Membership',
    question: 'Is Owdium free to listen to?',
    answer: 'Yes! Owdium offers a generous free tier with access to hundreds of public stories, daily news digests, and sample language lessons. Premium membership unlocks full audiobooks, offline downloading, and ad-free studio quality listening.'
  },
  {
    id: 'faq-3',
    category: 'Offline',
    question: 'How does offline listening work?',
    answer: 'Simply tap the download icon on any episode or audiobook. The content is securely cached on your mobile device or web storage, allowing full playback without internet access.'
  },
  {
    id: 'faq-4',
    category: 'Devices',
    question: 'Can I access Owdium on my smartphone or tablet?',
    answer: 'Absolutely. Owdium is built with a responsive web app optimized for desktop browsers, tablets, and smartphones, as well as native mobile companions for Android and iOS.'
  },
  {
    id: 'faq-5',
    category: 'Updates',
    question: 'How often is new audio content added?',
    answer: 'New podcasts, children’s bedtime stories, educational guides, and news bulletins are published daily and weekly through partnerships with indigenous voice artists and storytellers.'
  }
];
