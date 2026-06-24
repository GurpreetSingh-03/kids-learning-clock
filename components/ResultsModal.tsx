"use client";

import { m, AnimatePresence } from "framer-motion";
import { Star, Trophy, ArrowRight, RotateCcw } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import { useEffect, useRef, useState } from "react";
import { useSound } from "@/hooks/useSound";
import { recordGame, type GameStats } from "@/utils/progress";

interface ResultsModalProps {
  isOpen: boolean;
  score: number;
  totalQuestions: number;
  onPlayAgain: () => void;
  onHome: () => void;
}

export default function ResultsModal({
  isOpen,
  score,
  totalQuestions,
  onPlayAgain,
  onHome,
}: ResultsModalProps) {
  const { playCorrect } = useSound();
  const accuracy = Math.round((score / totalQuestions) * 100);
  const [stats, setStats] = useState<GameStats | null>(null);
  const recordedRef = useRef(false);

  // Determine star rating (0 to 3 stars)
  let starRating = 0;
  if (accuracy >= 90) starRating = 3;
  else if (accuracy >= 60) starRating = 2;
  else if (accuracy >= 30) starRating = 1;

  useEffect(() => {
    if (isOpen) {
      // Play a happy arpeggio when results modal opens
      playCorrect();
      // Persist the result exactly once per opening (guarded against re-renders).
      if (!recordedRef.current) {
        recordedRef.current = true;
        setStats(recordGame(score));
      }
    } else {
      // Reset so the next completed game records again.
      recordedRef.current = false;
      setStats(null);
    }
  }, [isOpen, playCorrect, score]);

  const modalVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 50 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 300, damping: 20 },
    },
    exit: { scale: 0.8, opacity: 0, y: 50, transition: { duration: 0.2 } },
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <m.div
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onHome}
          />

          {/* Modal Container */}
          <m.div
            className="bg-white rounded-3xl border-4 border-purple-400 p-8 w-full max-w-md shadow-2xl relative z-10 text-center flex flex-col items-center"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* Celebration Title */}
            <m.h2
              className="text-3xl md:text-4xl font-black text-purple-600 mb-2 font-sans tracking-wide"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              {accuracy === 100
                ? "Perfect Score!"
                : accuracy >= 70
                ? "Super Job!"
                : "Great Try!"}
            </m.h2>
            <p className="text-slate-500 font-bold mb-6">
              You are becoming a clock master! ⏰
            </p>

            {/* Trophy Icon Area */}
            <div className="relative mb-6">
              <m.div
                initial={{ rotate: -15, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring" as const, delay: 0.2, stiffness: 200, damping: 15 }}
                className="w-32 h-32 bg-yellow-100 rounded-full flex items-center justify-center border-4 border-yellow-300"
              >
                <Trophy className="w-16 h-16 text-yellow-500 fill-yellow-200" />
              </m.div>

              {/* Decorative small stars popping out */}
              {[...Array(6)].map((_, i) => {
                const angle = (i * 60 * Math.PI) / 180;
                const dist = 75;
                const x = Math.sin(angle) * dist;
                const y = -Math.cos(angle) * dist;
                return (
                  <m.div
                    key={i}
                    className="absolute text-yellow-400 top-12 left-12"
                    initial={{ x: 0, y: 0, scale: 0 }}
                    animate={{ x, y, scale: [0, 1.2, 1] }}
                    transition={{ delay: 0.4 + i * 0.05, duration: 0.4 }}
                  >
                    <Star className="w-5 h-5 fill-current" />
                  </m.div>
                );
              })}
            </div>

            {/* Animated Stars Rating */}
            <div className="flex justify-center gap-2 mb-6">
              {[1, 2, 3].map((star) => (
                <m.div
                  key={star}
                  initial={{ scale: 0 }}
                  animate={{ scale: star <= starRating ? 1 : 0.8 }}
                  transition={{ delay: 0.6 + star * 0.1, type: "spring" as const }}
                  className={`${
                    star <= starRating
                      ? "text-yellow-500 fill-yellow-400"
                      : "text-slate-200"
                  }`}
                >
                  <Star className="w-10 h-10 stroke-2" />
                </m.div>
              ))}
            </div>

            {/* Score & Accuracy Stats */}
            <div className="bg-purple-50 rounded-2xl p-4 w-full mb-8 border border-purple-100">
              <div className="flex justify-between items-center mb-2">
                <span className="text-slate-600 font-bold">Stars Earned:</span>
                <span className="text-purple-700 font-black text-xl">
                  {score} / {totalQuestions} ⭐
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-600 font-bold">Accuracy:</span>
                <span className="text-purple-700 font-black text-xl">
                  {accuracy}%
                </span>
              </div>
            </div>

            {/* Lifetime rewards — encourages kids to come back and build a streak */}
            {stats && (
              <div className="flex flex-wrap justify-center gap-2 w-full -mt-4 mb-8 text-sm font-black">
                <span className="bg-yellow-100 border border-yellow-200 text-yellow-700 px-3 py-1 rounded-full">
                  ⭐ {stats.totalStars} total
                </span>
                {stats.streak > 1 && (
                  <span className="bg-orange-100 border border-orange-200 text-orange-700 px-3 py-1 rounded-full">
                    🔥 {stats.streak}-day streak
                  </span>
                )}
                <span className="bg-purple-100 border border-purple-200 text-purple-700 px-3 py-1 rounded-full">
                  🏆 Best {stats.bestScore}/{totalQuestions}
                </span>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <AnimatedButton
                variant="success"
                onClick={onPlayAgain}
                className="w-full gap-2 flex items-center justify-center"
              >
                <RotateCcw className="w-5 h-5" />
                Play Again
              </AnimatedButton>
              <AnimatedButton
                variant="ghost"
                onClick={onHome}
                className="w-full gap-2 flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5" />
                Main Menu
              </AnimatedButton>
            </div>
          </m.div>
        </div>
      )}
    </AnimatePresence>
  );
}
