// Lightweight, privacy-friendly progress tracking stored entirely in the
// browser's localStorage. No accounts, no network — just local rewards that
// make kids want to come back and keep their streak alive.

export interface GameStats {
  totalStars: number; // cumulative correct answers across every game ever played
  gamesPlayed: number;
  bestScore: number; // best single-game score (out of the game's total questions)
  streak: number; // consecutive days played
  lastPlayed: string; // YYYY-M-D of the most recent completed game
}

const STATS_KEY = "tick-tock-stats";

const EMPTY_STATS: GameStats = {
  totalStars: 0,
  gamesPlayed: 0,
  bestScore: 0,
  streak: 0,
  lastPlayed: "",
};

function dayKey(date: Date): string {
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function getStats(): GameStats {
  if (typeof window === "undefined") return { ...EMPTY_STATS };
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (raw) {
      return { ...EMPTY_STATS, ...(JSON.parse(raw) as Partial<GameStats>) };
    }
  } catch {
    /* ignore malformed/unavailable storage */
  }
  return { ...EMPTY_STATS };
}

// Record a finished game and return the updated stats.
export function recordGame(score: number): GameStats {
  const prev = getStats();
  const now = new Date();
  const today = dayKey(now);

  let streak = prev.streak;
  if (prev.lastPlayed === today) {
    // Already counted today — keep the streak (ensure at least 1).
    streak = Math.max(streak, 1);
  } else {
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    streak = prev.lastPlayed === dayKey(yesterday) ? prev.streak + 1 : 1;
  }

  const next: GameStats = {
    totalStars: prev.totalStars + score,
    gamesPlayed: prev.gamesPlayed + 1,
    bestScore: Math.max(prev.bestScore, score),
    streak,
    lastPlayed: today,
  };

  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(next));
  } catch {
    /* ignore unavailable storage */
  }
  return next;
}
