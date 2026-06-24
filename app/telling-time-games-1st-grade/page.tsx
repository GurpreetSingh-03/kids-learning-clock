"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Play, Sparkles, Star, GraduationCap } from "lucide-react";
import dynamic from "next/dynamic";
import { MatchTimeGame } from "../match-time/page";
import { SetClockGame } from "../set-clock/page";
import AnimatedButton from "@/components/AnimatedButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import SceneHero from "@/components/SceneHero";
import { m } from "framer-motion";

const BackgroundShapes = dynamic(() => import("@/components/BackgroundShapes"), { ssr: false });

export default function FirstGradePage() {
  const [activeGame, setActiveGame] = useState<"match" | "set" | null>(null);

  // If a game is active, render it directly on this URL with custom exit logic
  if (activeGame === "match") {
    return (
      <MatchTimeGame
        grade="1st-grade"
        backUrl="/telling-time-games-1st-grade"
        onExit={() => setActiveGame(null)}
      />
    );
  }

  if (activeGame === "set") {
    return (
      <SetClockGame
        grade="1st-grade"
        backUrl="/telling-time-games-1st-grade"
        onExit={() => setActiveGame(null)}
      />
    );
  }

  return (
    <main className="min-h-screen relative flex flex-col items-center px-4 py-8 overflow-hidden">
      <BackgroundShapes />

      <div className="w-full max-w-4xl z-10 flex flex-col gap-6">
        {/* Navigation & Breadcrumbs */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 select-none">
          <div className="flex items-center gap-3">
            <Link href="/">
              <span className="p-2.5 bg-white/80 hover:bg-white text-purple-600 rounded-xl transition-colors border border-slate-200 shadow-sm flex items-center gap-2 cursor-pointer font-bold text-xs md:text-sm">
                <ArrowLeft className="w-5 h-5" />
                Main Menu
              </span>
            </Link>
            <Breadcrumbs items={[{ name: "1st Grade Games", href: "/telling-time-games-1st-grade" }]} />
          </div>
          <div className="bg-sky-500 text-white font-extrabold px-4 py-1.5 rounded-full text-xs md:text-sm shadow-sm select-none flex items-center gap-1.5 w-fit self-end sm:self-auto">
            <GraduationCap className="w-4 h-4" />
            Age 5 - 6
          </div>
        </div>

        {/* Hero Illustration */}
        <SceneHero
          src="/scenes/first-grade.webp"
          alt="Toby the clock mascot helping a first grader read a half-past time on an analog clock"
          priority
        />

        {/* Hero Section */}
        <m.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-md border-4 border-purple-200 rounded-3xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row items-center gap-6"
        >
          <div className="relative w-28 h-28 md:w-36 md:h-36 drop-shadow-md flex-shrink-0 bg-white rounded-full p-2 border border-purple-200">
            <Image
              src="/clock_mascot.png"
              alt="Toby the Mascot"
              width={140}
              height={140}
              className="object-contain"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-black text-purple-700 tracking-wide mb-2 leading-tight">
              Telling Time Games for 1st Grade
            </h1>
            <p className="text-slate-600 font-extrabold text-base md:text-lg mb-4">
              Welcome, first graders! Let's practice reading clocks to the hour and half-hour. Toby is ready to guide you step-by-step with helpful prompts!
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="bg-sky-50 border border-sky-200 text-sky-700 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                ⏰ Hours & Half-Hours
              </span>
              <span className="bg-orange-50 border border-orange-200 text-orange-700 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                🎯 Minute Hand at 6 (:30)
              </span>
              <span className="bg-green-50 border border-green-200 text-green-700 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                ⭐ Intermediate Mode
              </span>
            </div>
          </div>
        </m.div>

        {/* Select Game Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-2">
          {/* Card 1: Match the Time */}
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="bg-white/95 border-4 border-sky-200 hover:border-sky-400 rounded-3xl p-6 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <div>
              <div className="bg-sky-100 text-sky-600 w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl mb-4 shadow-inner">
                1
              </div>
              <h2 className="text-2xl font-black text-sky-600 mb-2 group-hover:underline">
                First Grade Time Matcher
              </h2>
              <p className="text-slate-600 font-bold text-sm leading-relaxed mb-6">
                Look at the analog clock and select the correct digital time option. Difficulty includes full-hour o'clock times and half-past thirty-minute times.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-slate-500 font-bold text-xs">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Covers :00 and :30 intervals
                </li>
                <li className="flex items-center gap-2 text-slate-500 font-bold text-xs">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Multiple choice quiz interface
                </li>
                <li className="flex items-center gap-2 text-slate-500 font-bold text-xs">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Springy, responsive feedback
                </li>
              </ul>
            </div>
            <AnimatedButton
              variant="primary"
              onClick={() => setActiveGame("match")}
              className="w-full flex items-center justify-center gap-2 text-lg py-3 shadow-md"
            >
              <Play className="w-5 h-5 fill-current" />
              Play Match Quiz
            </AnimatedButton>
          </m.div>

          {/* Card 2: Set the Clock */}
          <m.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-white/95 border-4 border-orange-200 hover:border-orange-400 rounded-3xl p-6 shadow-lg flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
          >
            <div>
              <div className="bg-orange-100 text-orange-600 w-12 h-12 rounded-2xl flex items-center justify-center font-black text-xl mb-4 shadow-inner">
                2
              </div>
              <h2 className="text-2xl font-black text-orange-600 mb-2 group-hover:underline">
                Interactive 1st Grade Clock
              </h2>
              <p className="text-slate-600 font-bold text-sm leading-relaxed mb-6">
                Drag the clock hands to match target digital times. Includes real-time guidance if the hour or minute hand is placed incorrectly!
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-slate-500 font-bold text-xs">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Hands-on learning mechanics
                </li>
                <li className="flex items-center gap-2 text-slate-500 font-bold text-xs">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Real-time hint bubble
                </li>
                <li className="flex items-center gap-2 text-slate-500 font-bold text-xs">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Tracks scores across 10 rounds
                </li>
              </ul>
            </div>
            <AnimatedButton
              variant="yellow"
              onClick={() => setActiveGame("set")}
              className="w-full flex items-center justify-center gap-2 text-lg py-3 shadow-md"
            >
              <Play className="w-5 h-5 fill-current" />
              Play Setting Game
            </AnimatedButton>
          </m.div>
        </div>

        {/* Educational Copy Section - Keyword-rich */}
        <section className="w-full mt-6 bg-white/80 backdrop-blur-md border-2 border-purple-100 rounded-3xl p-6 md:p-8 shadow-lg">
          <h2 className="text-2xl font-black text-purple-700 mb-4 text-center">
            First Grade Math: Hours & Half-Hours
          </h2>
          <div className="space-y-4 text-slate-600 font-semibold text-sm md:text-base leading-relaxed">
            <p>
              Under standard elementary curriculums (such as Common Core 1.MD.B.3), first graders are expected to read and write time in hours and half-hours using analog and digital clocks.
            </p>
            
            <h3 className="text-lg font-extrabold text-purple-600 mt-6 mb-2">
              Teaching First Graders the Half-Hour:
            </h3>
            <p>
              Reading half-hours introduces two major cognitive shifts for a child:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-500">
              <li>
                <strong className="text-purple-700">The Minute Hand points to 6:</strong> Rather than pointing to the number 30 directly, the minute hand points to 6. First graders learn to associate 6 with "30 minutes" or "half past."
              </li>
              <li>
                <strong className="text-purple-700">The Hour Hand moves halfway:</strong> Because 30 minutes is half of an hour, the hour hand travels halfway between the current hour and the next hour. For example, at 1:30, the hour hand points exactly between 1 and 2. Children often mistake this for 2:30; our games help them recognize that if the hand hasn't reached the 2 yet, it is still in the 1 o'clock hour!
              </li>
            </ul>

            <h3 className="text-lg font-extrabold text-purple-600 mt-6 mb-2">
              Practical Tips for Parents:
            </h3>
            <p>
              Use everyday activities to reinforce 1st-grade clock reading. If dinner is at 5:30, show them the clock at 5:00 and say, "In half an hour, the big hand will move to the 6, and it will be 5:30!" Combining these real-world discussions with interactive gameplay makes learning stick much faster.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full bg-white/85 backdrop-blur-md border-2 border-purple-100 rounded-3xl p-6 md:p-8 shadow-lg">
          <h2 className="text-2xl font-black text-purple-700 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-extrabold text-purple-600 mb-2">
                What telling time skills are taught in 1st grade?
              </h3>
              <p className="text-slate-600 font-bold text-sm md:text-base">
                In 1st grade, children build on reading hours (o'clock) and learn to read and write time to the half-hour (e.g., 2:30, 5:30). They learn that the minute hand pointing to 6 represents 30 minutes, and that the hour hand sits halfway between two numbers.
              </p>
            </div>
            <div className="border-t border-slate-100 pt-4">
              <h3 className="text-lg font-extrabold text-purple-600 mb-2">
                How do you teach half-hours to a first grader?
              </h3>
              <p className="text-slate-600 font-bold text-sm md:text-base">
                Explain that a half-hour means the minute hand has traveled halfway around the clock circle and points down to 6. Emphasize that the short hour hand is no longer pointing exactly at a number; it sits halfway between the hour that started and the hour that is coming next.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
