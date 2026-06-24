"use client";

import { useEffect, useState } from "react";
import { getStats, type GameStats } from "@/utils/progress";

// Shows the player's accumulated rewards on the home page once they've played
// at least one game. Renders nothing on the server / before hydration to avoid
// mismatches, and nothing for brand-new visitors.
export default function RewardsBadge() {
  const [stats, setStats] = useState<GameStats | null>(null);

  useEffect(() => {
    setStats(getStats());
  }, []);

  if (!stats || stats.totalStars <= 0) return null;

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm font-black">
      <span className="bg-yellow-100 border border-yellow-200 text-yellow-700 px-3 py-1 rounded-full">
        ⭐ {stats.totalStars} stars earned
      </span>
      {stats.streak > 1 && (
        <span className="bg-orange-100 border border-orange-200 text-orange-700 px-3 py-1 rounded-full">
          🔥 {stats.streak}-day streak
        </span>
      )}
      {stats.bestScore > 0 && (
        <span className="bg-purple-100 border border-purple-200 text-purple-700 px-3 py-1 rounded-full">
          🏆 Best: {stats.bestScore}/10
        </span>
      )}
    </div>
  );
}
