"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

export type ClockSkin = "classic" | "candy" | "ocean" | "sunset";

export const CLOCK_SKINS: { id: ClockSkin; label: string; emoji: string }[] = [
  { id: "classic", label: "Classic", emoji: "🪁" },
  { id: "candy", label: "Candy", emoji: "🍭" },
  { id: "ocean", label: "Ocean", emoji: "🌊" },
  { id: "sunset", label: "Sunset", emoji: "🌅" },
];

interface SettingsContextValue {
  muted: boolean;
  toggleMute: () => void;
  is24h: boolean;
  toggle24h: () => void;
  skin: ClockSkin;
  setSkin: (skin: ClockSkin) => void;
  /** True once values have been hydrated from localStorage on the client. */
  ready: boolean;
}

const SettingsContext = createContext<SettingsContextValue | null>(null);

const MUTE_KEY = "tick-tock-mute";
const FORMAT_KEY = "tick-tock-24h";
const SKIN_KEY = "tick-tock-skin";

export default function SettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // Deterministic defaults so SSR and the first client render match (no hydration mismatch).
  const [muted, setMuted] = useState(false);
  const [is24h, setIs24h] = useState(false);
  const [skin, setSkinState] = useState<ClockSkin>("classic");
  const [ready, setReady] = useState(false);

  // Hydrate persisted preferences after mount.
  useEffect(() => {
    try {
      const m = localStorage.getItem(MUTE_KEY);
      const f = localStorage.getItem(FORMAT_KEY);
      const s = localStorage.getItem(SKIN_KEY) as ClockSkin | null;
      if (m !== null) setMuted(m === "true");
      if (f !== null) setIs24h(f === "true");
      if (s && CLOCK_SKINS.some((c) => c.id === s)) setSkinState(s);
    } catch {
      /* localStorage unavailable — fall back to defaults */
    }
    setReady(true);
  }, []);

  const toggleMute = useCallback(() => {
    setMuted((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(MUTE_KEY, String(next));
      } catch {}
      return next;
    });
  }, []);

  const toggle24h = useCallback(() => {
    setIs24h((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(FORMAT_KEY, String(next));
      } catch {}
      return next;
    });
  }, []);

  const setSkin = useCallback((next: ClockSkin) => {
    setSkinState(next);
    try {
      localStorage.setItem(SKIN_KEY, next);
    } catch {}
  }, []);

  return (
    <SettingsContext.Provider
      value={{ muted, toggleMute, is24h, toggle24h, skin, setSkin, ready }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings(): SettingsContextValue {
  const ctx = useContext(SettingsContext);
  if (!ctx) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return ctx;
}
