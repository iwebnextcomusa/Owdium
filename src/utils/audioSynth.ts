/**
 * Simple Web Audio API synthesizer for interactive audio previews on Owdium.
 * Creates rhythmic African ambient chords and pentatonic melody sweeps.
 */

let audioCtx: AudioContext | null = null;
let activeOscillators: OscillatorNode[] = [];
let gainNode: GainNode | null = null;

export function playSynthSample(frequency: number = 432, durationSeconds: number = 6) {
  try {
    if (!audioCtx) {
      const AudioCtxClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtxClass) return;
      audioCtx = new AudioCtxClass();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    stopSynthSample();

    gainNode = audioCtx.createGain();
    gainNode.gain.setValueAtTime(0.001, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.25, audioCtx.currentTime + 0.3);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + durationSeconds);
    gainNode.connect(audioCtx.destination);

    // Pentatonic scale multipliers
    const intervals = [1, 1.25, 1.5, 1.667, 1.875];
    
    intervals.forEach((multiplier, i) => {
      if (!audioCtx || !gainNode) return;
      const osc = audioCtx.createOscillator();
      osc.type = i % 2 === 0 ? 'sine' : 'triangle';
      
      const pitch = frequency * multiplier * (i === 0 ? 0.5 : 1);
      osc.frequency.setValueAtTime(pitch, audioCtx.currentTime);
      
      // Gentle vibrato effect
      const lfo = audioCtx.createOscillator();
      lfo.frequency.value = 4 + i;
      const lfoGain = audioCtx.createGain();
      lfoGain.gain.value = 3;
      lfo.connect(osc.frequency);
      lfo.start();

      osc.connect(gainNode);
      osc.start(audioCtx.currentTime + i * 0.1);
      osc.stop(audioCtx.currentTime + durationSeconds);

      activeOscillators.push(osc);
    });

  } catch (err) {
    console.warn('Web Audio Playback info:', err);
  }
}

export function stopSynthSample() {
  if (activeOscillators.length > 0) {
    activeOscillators.forEach(osc => {
      try {
        osc.stop();
        osc.disconnect();
      } catch (e) {}
    });
    activeOscillators = [];
  }
}
