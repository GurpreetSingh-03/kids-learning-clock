"use client";

import { m } from "framer-motion";

interface ProgressBarProps {
  current: number;
  total: number;
}

export default function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (current / total) * 100));

  return (
    <div className="w-full max-w-md bg-purple-100 rounded-full h-6 relative p-1 shadow-inner border-2 border-purple-200">
      <m.div
        className="bg-gradient-to-r from-sky-400 to-emerald-400 h-full rounded-full relative"
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ type: "spring", stiffness: 80, damping: 15 }}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-white/20 rounded-full" />

        {/* Sliding Mascot (Clock Emoji) */}
        {percentage > 0 && (
          <m.div
            className="absolute right-[-10px] top-[-8px] text-2xl filter drop-shadow-md select-none"
            initial={{ scale: 0.8 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            ⏰
          </m.div>
        )}
      </m.div>
    </div>
  );
}
