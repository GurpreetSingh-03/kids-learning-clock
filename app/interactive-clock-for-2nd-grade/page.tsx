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

export default function SecondGradePage() {
  const [activeGame, setActiveGame] = useState<"match" | "set" | null>(null);

  // If a game is active, render it directly on this URL with custom exit logic
  if (activeGame === "match") {
    return (
      <MatchTimeGame
        grade="2nd-grade"
        backUrl="/interactive-clock-for-2nd-grade"
        onExit={() => setActiveGame(null)}
      />
    );
  }

  if (activeGame === "set") {
    return (
      <SetClockGame
        grade="2nd-grade"
        backUrl="/interactive-clock-for-2nd-grade"
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
            <Breadcrumbs items={[{ name: "2nd Grade Clock", href: "/interactive-clock-for-2nd-grade" }]} />
          </div>
          <div className="bg-orange-500 text-white font-extrabold px-4 py-1.5 rounded-full text-xs md:text-sm shadow-sm select-none flex items-center gap-1.5 w-fit self-end sm:self-auto">
            <GraduationCap className="w-4 h-4" />
            Age 6 - 8
          </div>
        </div>

        {/* Hero Illustration */}
        <SceneHero
          src="/scenes/second-grade.webp"
          alt="Toby the clock mascot celebrating a second grader reading a clock to five minutes"
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
              Interactive Clock for 2nd Grade
            </h1>
            <p className="text-slate-600 font-extrabold text-base md:text-lg mb-4">
              Hi, second grade superstars! Let's practice reading clocks to 5-minute intervals. Practice matching digital options or dragging hands with Toby's expert tips!
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="bg-sky-50 border border-sky-200 text-sky-700 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                ⏰ 5-Minute Intervals
              </span>
              <span className="bg-orange-50 border border-orange-200 text-orange-700 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                🎯 Quarter-Hours (:15 & :45)
              </span>
              <span className="bg-green-50 border border-green-200 text-green-700 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                ⭐ Advanced Mode
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
                Second Grade Time Matcher
              </h2>
              <p className="text-slate-600 font-bold text-sm leading-relaxed mb-6">
                Test your skills by looking at the analog clock and selecting the correct 5-minute digital time option. Difficulty starts at half-hours and moves up to 5-minute settings.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-slate-500 font-bold text-xs">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Focuses on 5-minute precision
                </li>
                <li className="flex items-center gap-2 text-slate-500 font-bold text-xs">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Challenging multiple choice options
                </li>
                <li className="flex items-center gap-2 text-slate-500 font-bold text-xs">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Sound effects and visual feedback
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
                Hands-on 2nd Grade Clock
              </h2>
              <p className="text-slate-600 font-bold text-sm leading-relaxed mb-6">
                Drag the hands to match specific digital times like 7:25 or 10:40. Toby offers guiding tips to help you set both hands perfectly.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-slate-500 font-bold text-xs">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Interactive dragging physics
                </li>
                <li className="flex items-center gap-2 text-slate-500 font-bold text-xs">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Tailored tips for hour & minute adjustments
                </li>
                <li className="flex items-center gap-2 text-slate-500 font-bold text-xs">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Dynamic score progression tracking
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
            Second Grade Math: Telling Time to 5 Minutes
          </h2>
          <div className="space-y-4 text-slate-600 font-semibold text-sm md:text-base leading-relaxed">
            <p>
              Telling time becomes significantly more precise in the second grade. Under standard math curriculums (such as Common Core 2.MD.C.7), students are expected to read and write time to the nearest 5 minutes.
            </p>
            
            <h3 className="text-lg font-extrabold text-purple-600 mt-6 mb-2">
              Skip Counting by 5s & Clock Reading:
            </h3>
            <p>
              To read analog clocks at this stage, second graders connect skip-counting by 5s to the layout of the clock face:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-500">
              <li>
                <strong className="text-purple-700">Five Minutes per Number:</strong> They learn that each of the 12 numbers on the clock represents 5 minutes (e.g., pointing to 1 = 5, 2 = 10, 3 = 15, ..., 11 = 55).
              </li>
              <li>
                <strong className="text-purple-700">Quarter Hours:</strong> Mastering key terminology such as "quarter past" (:15), "half past" (:30), and "quarter to" (:45).
              </li>
              <li>
                <strong className="text-purple-700">Hour Hand Movement:</strong> Recognizing that as minutes increase, the hour hand moves closer and closer to the next number. For example, at 3:55, the hour hand points almost directly to the 4, but since it is not quite 4:00, the time is still in the 3 o'clock hour.
              </li>
            </ul>

            <h3 className="text-lg font-extrabold text-purple-600 mt-6 mb-2">
              How Our Interactive Tool Helps:
            </h3>
            <p>
              Telling time to the nearest 5 minutes requires fine motor coordination and spatial understanding. When children drag the hands in our 2nd Grade game, they see how the hour hand moves gradually in response to the minute hand. This visual feedback bridges the gap between digital times and analog hand structures, reinforcing classroom lessons.
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
                What telling time standards are taught in 2nd grade?
              </h3>
              <p className="text-slate-600 font-bold text-sm md:text-base">
                In 2nd grade, children learn to read and write time from analog and digital clocks to the nearest five minutes (e.g., 8:05, 8:25, 8:55). They also learn to distinguish between a.m. and p.m. and understand phrases like 'quarter past', 'half past', and 'quarter to'.
              </p>
            </div>
            <div className="border-t border-slate-100 pt-4">
              <h3 className="text-lg font-extrabold text-purple-600 mb-2">
                How do you teach a child to read minutes in 5-minute intervals?
              </h3>
              <p className="text-slate-600 font-bold text-sm md:text-base">
                Ensure the child is comfortable skip counting by 5s. Then, show them how each number on the clock represents 5 minutes of travel for the big hand (e.g., 1 = 5 min, 2 = 10 min, 3 = 15 min... up to 11 = 55 min). Connect these numbers to the lines on the dial through interactive practice.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
