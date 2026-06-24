"use client";

import { useState } from "react";
import { m, AnimatePresence } from "framer-motion";
import { Settings, Volume2, VolumeX, Check, X } from "lucide-react";
import { useSettings, CLOCK_SKINS } from "@/components/SettingsProvider";

export default function SettingsBar() {
  const { muted, toggleMute, is24h, toggle24h, skin, setSkin } = useSettings();
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-3 right-3 z-40 flex flex-col items-end gap-2 select-none">
      {/* Gear toggle */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close settings" : "Open settings"}
        aria-expanded={open}
        className="p-2.5 bg-white/90 hover:bg-white text-purple-600 rounded-2xl border-2 border-purple-200 shadow-md transition-colors cursor-pointer backdrop-blur-sm"
      >
        {open ? (
          <X className="w-5 h-5" />
        ) : (
          <Settings className="w-5 h-5 motion-safe:animate-[spin_8s_linear_infinite]" />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <m.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 320, damping: 24 }}
            className="w-64 bg-white/95 backdrop-blur-md border-2 border-purple-200 rounded-2xl shadow-xl p-4 flex flex-col gap-4"
          >
            <p className="text-xs font-black uppercase tracking-wider text-purple-500">
              Settings
            </p>

            {/* Sound */}
            <div className="flex items-center justify-between gap-2">
              <span className="font-extrabold text-slate-600 text-sm">Sound</span>
              <button
                onClick={toggleMute}
                aria-label={muted ? "Unmute sounds" : "Mute sounds"}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs border-b-2 active:translate-y-0.5 active:border-b-0 transition-colors cursor-pointer ${
                  muted
                    ? "bg-slate-100 text-slate-500 border-slate-300"
                    : "bg-amber-100 text-amber-700 border-amber-300"
                }`}
              >
                {muted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                {muted ? "Off" : "On"}
              </button>
            </div>

            {/* Time format — the global-reach feature */}
            <div className="flex items-center justify-between gap-2">
              <span className="font-extrabold text-slate-600 text-sm">Time format</span>
              <div className="flex rounded-xl overflow-hidden border-2 border-purple-200">
                <button
                  onClick={() => is24h && toggle24h()}
                  aria-pressed={!is24h}
                  className={`px-2.5 py-1 text-xs font-black transition-colors cursor-pointer ${
                    !is24h ? "bg-purple-500 text-white" : "bg-white text-purple-500 hover:bg-purple-50"
                  }`}
                >
                  12h
                </button>
                <button
                  onClick={() => !is24h && toggle24h()}
                  aria-pressed={is24h}
                  className={`px-2.5 py-1 text-xs font-black transition-colors cursor-pointer ${
                    is24h ? "bg-purple-500 text-white" : "bg-white text-purple-500 hover:bg-purple-50"
                  }`}
                >
                  24h
                </button>
              </div>
            </div>

            {/* Clock theme */}
            <div className="flex flex-col gap-2">
              <span className="font-extrabold text-slate-600 text-sm">Clock theme</span>
              <div className="grid grid-cols-2 gap-2">
                {CLOCK_SKINS.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setSkin(s.id)}
                    aria-pressed={skin === s.id}
                    className={`flex items-center justify-between gap-1 px-2.5 py-1.5 rounded-xl text-xs font-bold border-2 transition-colors cursor-pointer ${
                      skin === s.id
                        ? "bg-purple-50 border-purple-400 text-purple-700"
                        : "bg-white border-slate-200 text-slate-500 hover:border-purple-200"
                    }`}
                  >
                    <span className="flex items-center gap-1">
                      <span aria-hidden>{s.emoji}</span>
                      {s.label}
                    </span>
                    {skin === s.id && <Check className="w-3.5 h-3.5 flex-shrink-0" />}
                  </button>
                ))}
              </div>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
