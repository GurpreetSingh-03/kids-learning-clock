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
import { m } from "framer-motion";

const BackgroundShapes = dynamic(() => import("@/components/BackgroundShapes"), { ssr: false });

export default function KindergartenPage() {
  const [activeGame, setActiveGame] = useState<"match" | "set" | null>(null);

  // If a game is active, render it directly on this URL with custom exit logic
  if (activeGame === "match") {
    return (
      <MatchTimeGame
        grade="kindergarten"
        backUrl="/telling-time-games-kindergarten"
        onExit={() => setActiveGame(null)}
      />
    );
  }

  if (activeGame === "set") {
    return (
      <SetClockGame
        grade="kindergarten"
        backUrl="/telling-time-games-kindergarten"
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
            <Breadcrumbs items={[{ name: "Kindergarten Games", href: "/telling-time-games-kindergarten" }]} />
          </div>
          <div className="bg-emerald-500 text-white font-extrabold px-4 py-1.5 rounded-full text-xs md:text-sm shadow-sm select-none flex items-center gap-1.5 w-fit self-end sm:self-auto">
            <GraduationCap className="w-4 h-4" />
            Age 4 - 5
          </div>
        </div>

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
              Telling Time Games for Kindergarten
            </h1>
            <p className="text-slate-600 font-extrabold text-base md:text-lg mb-4">
              Hi! I'm Toby! 👋 Let's practice reading o'clock times. These games are designed just for kindergarteners who are learning numbers 1 to 12!
            </p>
            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="bg-sky-50 border border-sky-200 text-sky-700 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                ⏰ Full Hours Only
              </span>
              <span className="bg-orange-50 border border-orange-200 text-orange-700 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                🎯 Simple Hands
              </span>
              <span className="bg-green-50 border border-green-200 text-green-700 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider">
                ⭐ Instant Hints
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
                Toby's Time Matcher
              </h2>
              <p className="text-slate-600 font-bold text-sm leading-relaxed mb-6">
                Look at the analog clock face and click the correct matching digital hour from 4 choices. Excellent practice for understanding what the numbers on the clock mean.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-slate-500 font-bold text-xs">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Focus on o'clock hours
                </li>
                <li className="flex items-center gap-2 text-slate-500 font-bold text-xs">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> 10 interactive questions
                </li>
                <li className="flex items-center gap-2 text-slate-500 font-bold text-xs">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Colorful animations and feedback
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
                Hands-on Clock Builder
              </h2>
              <p className="text-slate-600 font-bold text-sm leading-relaxed mb-6">
                Drag the big red hand or little blue hand to match the target digital time. Toby provides helpful guidelines and prompts to make setting the hands easy!
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-2 text-slate-500 font-bold text-xs">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Drag-and-drop mechanics
                </li>
                <li className="flex items-center gap-2 text-slate-500 font-bold text-xs">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Hour hand tracking practice
                </li>
                <li className="flex items-center gap-2 text-slate-500 font-bold text-xs">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> Interactive guidance from Toby
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
            How Kindergarteners Learn to Read Clocks
          </h2>
          <div className="space-y-4 text-slate-600 font-semibold text-sm md:text-base leading-relaxed">
            <p>
              Telling time is an abstract concept that children begin mastering in early elementary school. For kindergarten math learners, the focus is entirely on identifying clock parts and reading hours.
            </p>
            
            <h3 className="text-lg font-extrabold text-purple-600 mt-6 mb-2">
              Key Milestones for Kindergarten Time-Telling:
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-500">
              <li>
                <strong className="text-purple-700">Identifying Clock Hands:</strong> Recognizing that the shorter hand (blue in our games) represents hours, while the longer hand (red in our games) represents minutes.
              </li>
              <li>
                <strong className="text-purple-700">Understanding "O'Clock":</strong> Learning that when the minute hand points straight up at the 12, it is a full hour, and the hour hand dictates exactly what time it is.
              </li>
              <li>
                <strong className="text-purple-700">Connecting to Routines:</strong> Associating time with real-world context (e.g., 12:00 means lunch, 8:00 is school time).
              </li>
            </ul>

            <h3 className="text-lg font-extrabold text-purple-600 mt-6 mb-2">
              Why Choose Interactive Clock Games?
            </h3>
            <p>
              Traditional paper worksheets can be frustrating because kids cannot see the hands moving relative to one another. Our interactive games allow kindergarteners to move hands and click selections, building spatial math logic naturally. With Toby's encouraging prompts and zero ads, it is a safe and highly productive screen time activity.
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
                What time telling skills do kindergarteners learn?
              </h3>
              <p className="text-slate-600 font-bold text-sm md:text-base">
                In kindergarten, children learn the basic structure of a clock face. They learn to identify the short hour hand, the long minute hand, and how to read full-hour times (e.g., 1:00, 4:00, 10:00) when the minute hand points straight up to 12.
              </p>
            </div>
            <div className="border-t border-slate-100 pt-4">
              <h3 className="text-lg font-extrabold text-purple-600 mb-2">
                How can I help my kindergarten child learn to tell time?
              </h3>
              <p className="text-slate-600 font-bold text-sm md:text-base">
                Keep it fun and visual! Start by focusing on the blue hour hand and full hours. Point to physical clocks throughout the day during activities, like pointing to 8:00 for school or 7:00 for bedtime, and play interactive online games that provide real-time audio and visual rewards.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
