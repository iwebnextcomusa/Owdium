import React, { useState, useEffect } from 'react';
import { Play, Pause, X, Volume2, VolumeX, Download, Sparkles, Radio } from 'lucide-react';
import { LanguageInfo } from '../types';
import { stopSynthSample } from '../utils/audioSynth';

interface GlobalAudioPlayerProps {
  currentTrack: LanguageInfo | null;
  onClose: () => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
}

export const GlobalAudioPlayer: React.FC<GlobalAudioPlayerProps> = ({
  currentTrack,
  onClose,
  isPlaying,
  onTogglePlay,
}) => {
  const [progress, setProgress] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 300);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#071912]/95 border-t border-[#D4AF37]/40 backdrop-blur-2xl shadow-2xl px-4 py-3 animate-in slide-in-from-bottom-5 duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* Track Metadata */}
        <div className="flex items-center space-x-3 min-w-0">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D4AF37] to-[#C86D3B] p-[1.5px] shrink-0">
            <div className="w-full h-full bg-[#071912] rounded-[10px] flex items-center justify-center text-2xl">
              {currentTrack.flagIcon}
            </div>
          </div>

          <div className="min-w-0">
            <h4 className="text-sm font-bold text-white font-syne truncate">
              {currentTrack.sampleTrackTitle}
            </h4>
            <p className="text-xs text-[#D4AF37] font-medium truncate">
              {currentTrack.name} ({currentTrack.nativeName}) • Native Narrator
            </p>
          </div>
        </div>

        {/* Player Controls & Scrubber */}
        <div className="flex-1 max-w-xl mx-4 hidden sm:flex flex-col items-center space-y-1">
          <div className="flex items-center space-x-4">
            <button
              onClick={onTogglePlay}
              className="w-10 h-10 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#C86D3B] text-[#071912] flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-transform"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5 fill-current" />
              ) : (
                <Play className="w-5 h-5 fill-current ml-0.5" />
              )}
            </button>
          </div>

          <div className="w-full flex items-center space-x-2 text-[10px] text-gray-400 font-medium">
            <span>0:{(Math.floor((progress / 100) * 180) % 60).toString().padStart(2, '0')}</span>
            <div className="flex-1 h-1.5 bg-gray-800 rounded-full overflow-hidden relative cursor-pointer">
              <div
                className="h-full bg-gradient-to-r from-[#D4AF37] to-[#C86D3B] rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
            <span>{currentTrack.sampleAudioDuration}</span>
          </div>
        </div>

        {/* Right Utility Buttons */}
        <div className="flex items-center space-x-3">
          {/* Mute Button */}
          <button
            onClick={() => setIsMuted(!isMuted)}
            className="p-2 rounded-lg text-gray-300 hover:text-[#D4AF37] transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Download Offline Button */}
          <button
            onClick={() => setDownloaded(true)}
            className={`p-2 rounded-lg text-xs font-semibold flex items-center space-x-1 transition-all ${
              downloaded
                ? 'bg-emerald-950 text-emerald-400 border border-emerald-500/40'
                : 'bg-[#0D281E] text-gray-300 border border-[#D4AF37]/30 hover:text-[#D4AF37]'
            }`}
          >
            <Download className="w-4 h-4" />
            <span className="hidden md:inline">{downloaded ? 'Downloaded' : 'Offline'}</span>
          </button>

          {/* Close Player */}
          <button
            onClick={() => {
              stopSynthSample();
              onClose();
            }}
            className="p-2 rounded-lg text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
