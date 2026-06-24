import { useCallback } from "react";
import { useSettings } from "@/components/SettingsProvider";

export function useSound() {
  // Mute state is shared app-wide via SettingsProvider so a single toggle
  // affects every sound (clicks, ticks, correct/incorrect, results).
  const { muted, toggleMute } = useSettings();

  // Safe Web Audio Context initializer
  const getAudioContext = (): AudioContext | null => {
    if (typeof window === "undefined") return null;
    const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextClass) return null;
    return new AudioContextClass();
  };

  const playSound = useCallback(
    (type: "click" | "correct" | "incorrect" | "tick") => {
      if (muted) return;
      const ctx = getAudioContext();
      if (!ctx) return;

      // Resume context if suspended (common in browsers)
      if (ctx.state === "suspended") {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === "click") {
        // High pitch blip
        osc.type = "sine";
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(100, now + 0.1);
        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
      } else if (type === "tick") {
        // Short mechanical tick sound
        osc.type = "triangle";
        osc.frequency.setValueAtTime(120, now);
        gain.gain.setValueAtTime(0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.03);
        osc.start(now);
        osc.stop(now + 0.03);
      } else if (type === "correct") {
        // Warm happy arpeggio (C major triad: C5, E5, G5, C6)
        const notes = [523.25, 659.25, 783.99, 1046.5];
        osc.type = "triangle";
        gain.gain.setValueAtTime(0.1, now);
        
        notes.forEach((freq, i) => {
          const noteTime = now + i * 0.08;
          osc.frequency.setValueAtTime(freq, noteTime);
          gain.gain.setValueAtTime(0.1, noteTime);
          gain.gain.exponentialRampToValueAtTime(0.01, noteTime + 0.12);
        });
        
        osc.start(now);
        osc.stop(now + 0.4);
      } else if (type === "incorrect") {
        // Flat, slightly buzzing buzz (descending frequency)
        osc.type = "sawtooth";
        osc.frequency.setValueAtTime(180, now);
        osc.frequency.linearRampToValueAtTime(130, now + 0.25);
        gain.gain.setValueAtTime(0.12, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.25);
        osc.start(now);
        osc.stop(now + 0.25);
      }
    },
    [muted]
  );

  return {
    muted,
    toggleMute,
    playClick: () => playSound("click"),
    playTick: () => playSound("tick"),
    playCorrect: () => playSound("correct"),
    playIncorrect: () => playSound("incorrect"),
  };
}
