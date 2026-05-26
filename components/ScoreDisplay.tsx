"use client";

import { m, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Link from "next/link";
import { Home, Volume2, VolumeX, Star } from "lucide-react";
import { useSound } from "@/hooks/useSound";

interface ScoreDisplayProps {
  score: number;
  questionNumber?: number;
  totalQuestions?: number;
  onHomeClick?: () => void;
}

export default function ScoreDisplay({
  score,
  questionNumber,
  totalQuestions,
  onHomeClick,
}: ScoreDisplayProps) {
  const { muted, toggleMute, playClick } = useSound();
  const controls = useAnimation();

  // Wiggle star when score changes
  useEffect(() => {
    if (score > 0) {
      controls.start({
        scale: [1, 1.4, 0.9, 1.1, 1],
        rotate: [0, 15, -15, 5, 0],
        transition: { duration: 0.5, ease: "easeInOut" },
      });
    }
  }, [score, controls]);

  return (
    <div className="w-full flex items-center justify-between px-4 py-3 bg-white/70 backdrop-blur-md rounded-2xl border-2 border-purple-100 shadow-md">
      {/* Home Button */}
      <div className="flex items-center gap-2">
        {onHomeClick ? (
          <button
            onClick={() => {
              playClick();
              onHomeClick();
            }}
            className="p-2.5 bg-sky-100 hover:bg-sky-200 text-sky-600 rounded-xl transition-colors border-b-2 border-sky-300 active:translate-y-0.5 active:border-b-0 cursor-pointer"
          >
            <Home className="w-6 h-6" />
          </button>
        ) : (
          <Link href="/">
            <span
              onClick={playClick}
              className="inline-block p-2.5 bg-sky-100 hover:bg-sky-200 text-sky-600 rounded-xl transition-colors border-b-2 border-sky-300 active:translate-y-0.5 active:border-b-0 cursor-pointer"
            >
              <Home className="w-6 h-6" />
            </span>
          </Link>
        )}

        {/* Sound Toggle */}
        <button
          onClick={toggleMute}
          className={`p-2.5 rounded-xl transition-colors border-b-2 active:translate-y-0.5 active:border-b-0 cursor-pointer ${
            muted
              ? "bg-slate-100 hover:bg-slate-200 text-slate-500 border-slate-300"
              : "bg-amber-100 hover:bg-amber-200 text-amber-600 border-amber-300"
          }`}
        >
          {muted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
        </button>
      </div>

      {/* Progress / Info */}
      {questionNumber !== undefined && totalQuestions !== undefined && (
        <div className="bg-purple-100 border-b-2 border-purple-200 text-purple-700 px-4 py-1.5 rounded-full font-bold text-sm md:text-base select-none">
          ✨ Question {questionNumber} / {totalQuestions}
        </div>
      )}

      {/* Star Score */}
      <div className="flex items-center gap-2 bg-yellow-100 border-b-2 border-yellow-200 text-yellow-700 px-4 py-1.5 rounded-full font-bold select-none shadow-sm">
        <m.div animate={controls} className="text-yellow-500">
          <Star className="w-6 h-6 fill-current" />
        </m.div>
        <span className="text-lg md:text-xl font-black">{score}</span>
      </div>
    </div>
  );
}
