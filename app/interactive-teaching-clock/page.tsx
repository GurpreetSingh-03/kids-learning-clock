"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { ArrowLeft, ArrowRight, Eye, EyeOff, Volume2, VolumeX, RotateCcw, Plus, Minus, Sun, Moon } from "lucide-react";
import AnalogClock from "@/components/AnalogClock";
import AnimatedButton from "@/components/AnimatedButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useSound } from "@/hooks/useSound";
import { useSettings } from "@/components/SettingsProvider";
import { formatTime } from "@/utils/clockLogic";

const BackgroundShapes = dynamic(() => import("@/components/BackgroundShapes"), { ssr: false });

export default function InteractiveClockPage() {
  const { muted, toggleMute, playClick, playTick } = useSound();
  const { is24h } = useSettings();
  const [hours, setHours] = useState(10);
  const [minutes, setMinutes] = useState(10);
  const [isAm, setIsAm] = useState(true);
  const [showDigital, setShowDigital] = useState(true);
  const [mascotText, setMascotText] = useState("Let's explore time! Drag my hands or click the buttons below!");

  // Sync analog hand change with AM/PM crossing logic
  const handleTimeChange = useCallback((newHours: number, newMinutes: number) => {
    // Check if we crossed 12 o'clock boundary to toggle AM/PM
    if ((hours === 11 && newHours === 12) || (hours === 12 && newHours === 11)) {
      setIsAm((prev) => !prev);
      setMascotText(
        (hours === 11 && newHours === 12) 
          ? `Look! We crossed 12! We just changed from ${isAm ? "AM to PM 🌙" : "PM to AM ☀️"}!`
          : `Look! We moved backward past 12! We just changed from ${isAm ? "AM to PM 🌙" : "PM to AM ☀️"}!`
      );
    } else {
      setMascotText("You are dragging the hands! Watch the digital clock change.");
    }
    setHours(newHours);
    setMinutes(newMinutes);
  }, [hours, isAm]);

  // Adjust hours
  const adjustHours = (amount: number) => {
    playClick();
    setHours((prev) => {
      let next = prev + amount;
      if (next > 12) next = 1;
      if (next < 1) next = 12;

      // Handle AM/PM crossing
      if ((prev === 11 && next === 12) || (prev === 12 && next === 11)) {
        setIsAm((a) => !a);
      }
      return next;
    });
  };

  // Adjust minutes
  const adjustMinutes = (amount: number) => {
    playClick();
    setMinutes((prev) => {
      let nextMin = prev + amount;
      let hourChange = 0;

      if (nextMin >= 60) {
        nextMin = nextMin - 60;
        hourChange = 1;
      } else if (nextMin < 0) {
        nextMin = nextMin + 60;
        hourChange = -1;
      }

      if (hourChange !== 0) {
        setHours((prevHour) => {
          let nextHour = prevHour + hourChange;
          if (nextHour > 12) nextHour = 1;
          if (nextHour < 1) nextHour = 12;

          // Handle AM/PM crossing
          if ((prevHour === 11 && nextHour === 12) || (prevHour === 12 && nextHour === 11)) {
            setIsAm((a) => !a);
          }
          return nextHour;
        });
      }

      return nextMin;
    });
  };

  // Reset clock to 12:00 AM
  const handleReset = () => {
    playClick();
    setHours(12);
    setMinutes(0);
    setIsAm(true);
    setMascotText("Back to 12:00 o'clock sharp! ☀️");
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center px-4 py-6 md:py-8 overflow-hidden bg-slate-50">
      <BackgroundShapes />

      <div className="w-full max-w-4xl z-10 flex flex-col gap-5">
        {/* Navigation & Breadcrumbs Row */}
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Link href="/">
              <span className="p-2.5 bg-white/80 hover:bg-white text-purple-600 rounded-xl transition-colors border border-slate-200/60 shadow-sm flex items-center gap-2 cursor-pointer font-bold select-none text-xs md:text-sm">
                <ArrowLeft className="w-4 h-4" />
                Main Menu
              </span>
            </Link>
            <Breadcrumbs items={[{ name: "Interactive Clock", href: "/interactive-teaching-clock" }]} />
          </div>

          {/* Audio Controls */}
          <button
            onClick={toggleMute}
            className={`p-2.5 rounded-xl border border-slate-200/60 shadow-sm font-bold text-xs md:text-sm flex items-center gap-2 transition-colors self-end md:self-auto ${
              muted 
                ? "bg-rose-50 text-rose-500 hover:bg-rose-100" 
                : "bg-white/80 hover:bg-white text-emerald-600"
            }`}
          >
            {muted ? (
              <>
                <VolumeX className="w-4 h-4" />
                Muted
              </>
            ) : (
              <>
                <Volume2 className="w-4 h-4" />
                Sounds On
              </>
            )}
          </button>
        </div>

        {/* Mascot Message Banner */}
        <div className="bg-white/90 border-4 border-purple-200 rounded-3xl p-4 shadow-md flex items-center gap-4 select-none">
          <div className="relative w-12 h-12 flex-shrink-0 bg-purple-50 rounded-full border border-purple-200 p-1">
            <Image src="/clock_mascot.png" alt="Toby Mascot" width={40} height={40} className="object-contain animate-bounce" />
          </div>
          <div>
            <h4 className="text-xs font-black text-purple-600 uppercase tracking-wider">Toby says:</h4>
            <p className="text-slate-600 font-extrabold text-sm md:text-base leading-snug">{mascotText}</p>
          </div>
        </div>

        {/* Interactive Main Area Card */}
        <div className="bg-white/95 backdrop-blur-md border-4 border-purple-200 rounded-3xl p-6 md:p-8 shadow-xl">
          <h1 className="text-3xl font-black text-purple-700 font-sans tracking-wide text-center mb-6">
            Interactive Online Teaching Clock
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Left: Clock Face (7 cols) */}
            <div className="md:col-span-7 flex justify-center">
              <AnalogClock
                hours={hours}
                minutes={minutes}
                interactive={true}
                onTimeChange={handleTimeChange}
                size="lg"
              />
            </div>

            {/* Right: Controls & Displays (5 cols) */}
            <div className="md:col-span-5 flex flex-col gap-6 w-full">
              
              {/* Digital Time Panel */}
              <div className="bg-slate-50 border-2 border-slate-200 rounded-2xl p-5 flex flex-col items-center shadow-inner relative overflow-hidden">
                <h3 className="text-slate-400 font-black text-xs uppercase tracking-widest mb-2 select-none">
                  Digital Display
                </h3>
                
                {showDigital ? (
                  <div className="flex items-center gap-4 select-none">
                    <div className="font-mono text-5xl font-black text-slate-800 tracking-wider">
                      {is24h
                        ? formatTime(isAm ? hours % 12 : (hours % 12) + 12, minutes, true)
                        : formatTime(hours, minutes)}
                    </div>
                    {/* AM/PM Indicator Badge */}
                    <button
                      onClick={() => {
                        playClick();
                        setIsAm(!isAm);
                        setMascotText(`Switched to ${!isAm ? "AM ☀️" : "PM 🌙"}!`);
                      }}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs uppercase shadow-sm transition-all duration-300 border ${
                        isAm 
                          ? "bg-sky-100 border-sky-200 text-sky-700 hover:bg-sky-200" 
                          : "bg-indigo-900 border-indigo-950 text-indigo-100 hover:bg-indigo-950"
                      }`}
                    >
                      {isAm ? (
                        <>
                          <Sun className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                          AM
                        </>
                      ) : (
                        <>
                          <Moon className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
                          PM
                        </>
                      )}
                    </button>
                  </div>
                ) : (
                  <div className="py-2.5 font-bold text-slate-400 text-sm italic select-none">
                    Digital Clock Hidden
                  </div>
                )}
              </div>

              {/* Show/Hide & Reset Controls */}
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    playClick();
                    setShowDigital(!showDigital);
                  }}
                  className="flex-1 flex items-center justify-center gap-2 bg-purple-50 hover:bg-purple-100 border border-purple-200 text-purple-600 font-extrabold py-3 px-4 rounded-xl shadow-sm transition-colors text-sm"
                >
                  {showDigital ? (
                    <>
                      <EyeOff className="w-4 h-4" />
                      Hide Time
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4" />
                      Show Time
                    </>
                  )}
                </button>

                <button
                  onClick={handleReset}
                  className="flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-600 font-extrabold py-3 px-5 rounded-xl shadow-sm transition-colors text-sm"
                >
                  <RotateCcw className="w-4 h-4" />
                  Reset
                </button>
              </div>

              {/* Step Adjustment Buttons */}
              <div className="flex flex-col gap-3.5">
                <h4 className="text-slate-500 font-black text-xs uppercase tracking-wider mb-0 select-none">
                  Adjust Hour Hand
                </h4>
                <div className="flex gap-2">
                  <button
                    onClick={() => adjustHours(-1)}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-sky-500 hover:bg-sky-600 text-white font-extrabold py-2.5 rounded-xl transition-colors shadow-sm text-xs md:text-sm"
                  >
                    <Minus className="w-3.5 h-3.5" /> 1 Hour
                  </button>
                  <button
                    onClick={() => adjustHours(1)}
                    className="flex-1 flex items-center justify-center gap-1.5 bg-sky-500 hover:bg-sky-600 text-white font-extrabold py-2.5 rounded-xl transition-colors shadow-sm text-xs md:text-sm"
                  >
                    <Plus className="w-3.5 h-3.5" /> 1 Hour
                  </button>
                </div>

                <h4 className="text-slate-500 font-black text-xs uppercase tracking-wider mb-0 mt-1 select-none">
                  Adjust Minute Hand
                </h4>
                <div className="flex flex-col gap-2">
                  <div className="flex gap-2">
                    <button
                      onClick={() => adjustMinutes(-5)}
                      className="flex-1 flex items-center justify-center gap-1 bg-red-500 hover:bg-red-600 text-white font-extrabold py-2.5 rounded-xl transition-colors shadow-sm text-xs"
                    >
                      <Minus className="w-3 h-3" /> 5 Min
                    </button>
                    <button
                      onClick={() => adjustMinutes(5)}
                      className="flex-1 flex items-center justify-center gap-1 bg-red-500 hover:bg-red-600 text-white font-extrabold py-2.5 rounded-xl transition-colors shadow-sm text-xs"
                    >
                      <Plus className="w-3 h-3" /> 5 Min
                    </button>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => adjustMinutes(-15)}
                      className="flex-1 flex items-center justify-center gap-1 bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-2.5 rounded-xl transition-colors shadow-sm text-xs"
                    >
                      <Minus className="w-3 h-3" /> 15 Min
                    </button>
                    <button
                      onClick={() => adjustMinutes(15)}
                      className="flex-1 flex items-center justify-center gap-1 bg-orange-500 hover:bg-orange-600 text-white font-extrabold py-2.5 rounded-xl transition-colors shadow-sm text-xs"
                    >
                      <Plus className="w-3 h-3" /> 15 Min
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Play Game Callout */}
        <div className="bg-gradient-to-r from-purple-50 to-sky-50 border-4 border-purple-200 rounded-3xl p-6 shadow-md text-center">
          <h3 className="text-xl font-extrabold text-purple-700 mb-2">Ready for a Time-Telling Challenge?</h3>
          <p className="text-slate-600 font-bold mb-4">Put your clock-reading skills to the test with Toby&apos;s interactive games!</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/match-time" className="bg-sky-500 hover:bg-sky-600 text-white font-extrabold px-6 py-3 rounded-2xl transition-colors flex items-center justify-center gap-2 shadow-md">
              Match the Time <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/set-clock" className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-6 py-3 rounded-2xl transition-colors flex items-center justify-center gap-2 shadow-md">
              Set the Clock <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Educational Content Below the Fold — Optimized for SEO & Teachers */}
        <div className="bg-white/90 border-2 border-purple-100 rounded-3xl p-6 md:p-8 shadow-lg space-y-6 text-slate-700 text-sm md:text-base leading-relaxed font-semibold">
          
          <h2 className="text-2xl font-black text-purple-700 text-center mb-4">
            How to Use this Interactive Clock in the Classroom
          </h2>

          <p>
            An <strong className="text-purple-700">interactive teaching clock</strong> is one of the most effective tools for introducing mathematical clock concepts to elementary schoolers. It allows educators and parents to demonstrate how hands relate, bypass static illustrations, and engage children in active visual instruction.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-6">
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4">
              <h3 className="font-extrabold text-purple-700 mb-1">⏰ Learn Hour & Minute Relations</h3>
              <p className="text-xs text-slate-600 font-medium">
                Drag the red minute hand one full circle (60 minutes) and watch the blue hour hand slowly drift forward to the next hour. Point this relationship out to help children grasp hour progression.
              </p>
            </div>
            <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4">
              <h3 className="font-extrabold text-sky-700 mb-1">☀️ Teach AM and PM Cycles</h3>
              <p className="text-xs text-slate-600 font-medium">
                Adjusting the hands past 12:00 automatically updates our AM/PM sun and moon indicator. Use this to explain how a full day has 24 hours, and why the hands circle the clock face twice.
              </p>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
              <h3 className="font-extrabold text-orange-700 mb-1">🙈 Play &quot;Hide the Digital Clock&quot;</h3>
              <p className="text-xs text-slate-600 font-medium">
                Click &quot;Hide Time,&quot; drag the hands to a secret hour, and ask your child or class to guess the time. Toggle &quot;Show Time&quot; to reveal the digital equivalent, reinforcing instant self-assessment.
              </p>
            </div>
          </div>

          <h3 className="text-lg font-black text-purple-700">Explaining the Clock Hands to Kids</h3>
          <p>
            When teaching children how to read an analog clock face, encourage them to identify the hands by their colors and lengths:
          </p>
          <ul className="list-disc pl-6 space-y-1 bg-slate-50 border border-slate-100 rounded-xl p-4 font-medium text-xs md:text-sm text-slate-600">
            <li>
              <strong className="text-sky-600">The Hour Hand (Blue and Short):</strong> This hand points directly to the hour numbers. It moves slowly. When the minute hand points to 12, the hour hand tells the exact hour.
            </li>
            <li>
              <strong className="text-red-600">The Minute Hand (Red and Long):</strong> This hand tracks the minutes. Each number on the clock represents 5 minutes. Tell your kids to skip-count by 5s to find the minutes!
            </li>
          </ul>

          <h3 className="text-lg font-black text-purple-700">Common Core Curriculum Standard Alignment</h3>
          <p>
            This interactive learning clock directly supports national math standard objectives:
          </p>
          <ul className="list-disc pl-6 space-y-1 font-medium text-xs md:text-sm text-slate-600">
            <li>
              <strong>CCSS Math 1.MD.B.3:</strong> Tell and write time in hours and half-hours using analog and digital clocks.
            </li>
            <li>
              <strong>CCSS Math 2.MD.C.7:</strong> Tell and write time from analog and digital clocks to the nearest five minutes, using a.m. and p.m.
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
