"use client";

import { m } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import GameCard from "@/components/GameCard";
import dynamic from "next/dynamic";

const BackgroundShapes = dynamic(() => import("@/components/BackgroundShapes"), { ssr: false });

export default function Home() {
  // Stagger variants for the game cards
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  } as const;

  const cardItemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 120,
        damping: 14,
      },
    },
  } as const;

  return (
    <main className="min-h-screen relative flex flex-col items-center justify-between px-4 py-8 md:py-16 overflow-hidden">
      {/* Sky-Castle Themed Animated Background */}
      <BackgroundShapes />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl z-10">
        
        {/* Mascot & Hero Section */}
        <div className="flex flex-col items-center text-center mb-10 md:mb-14">
          
          {/* Toby the Mascot - Drifts/Bounces gently */}
          <div className="flex flex-col md:flex-row items-center gap-6 mb-4 md:mb-6">
            
            {/* Toby Image Container */}
            <m.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut",
              }}
              className="relative w-36 h-36 md:w-44 md:h-44 drop-shadow-[0_15px_15px_rgba(0,0,0,0.15)] flex items-center justify-center rounded-full bg-white/40 p-2 border-2 border-white/50 backdrop-blur-sm"
            >
              <Image
                src="/clock_mascot.png"
                alt="Toby the Clock Buddy"
                width={160}
                height={160}
                className="object-contain"
                priority
                fetchPriority="high"
              />
              {/* Pulsing Sparkles */}
              <m.span
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-1 -right-1 text-3xl select-none"
              >
                ✨
              </m.span>
              <m.span
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 2.2, delay: 0.5 }}
                className="absolute -bottom-2 -left-1 text-2xl select-none"
              >
                🌟
              </m.span>
            </m.div>

            {/* Mascot Greeting Speech Bubble */}
            <m.div
              initial={{ opacity: 0, scale: 0.85, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ type: "spring", delay: 0.4 }}
              className="bg-white/95 border-4 border-purple-400 p-5 rounded-3xl shadow-lg max-w-xs md:max-w-md relative select-none"
            >
              {/* Speech bubble tail for desktop (left) */}
              <div className="hidden md:block absolute left-[-16px] top-[50%] translate-y-[-50%] w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-r-[16px] border-r-purple-400" />
              <div className="hidden md:block absolute left-[-11px] top-[50%] translate-y-[-50%] w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[14px] border-r-white" />
              
              {/* Speech bubble tail for mobile (top) */}
              <div className="md:hidden absolute top-[-16px] left-[50%] translate-x-[-50%] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[16px] border-b-purple-400" />
              <div className="md:hidden absolute top-[-11px] left-[50%] translate-x-[-50%] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-white" />

              <h2 className="text-xl md:text-2xl font-black text-purple-600 mb-1">
                Hi! I'm Toby! 👋
              </h2>
              <p className="text-slate-600 font-extrabold text-base md:text-lg leading-snug">
                Welcome to my sky castle! Let's learn how to read analog clocks together! ⏰
              </p>
            </m.div>
          </div>

          {/* Game Title */}
          <m.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-purple-500 to-orange-500 font-sans filter drop-shadow-sm select-none mt-2"
          >
            TICK TOCK TIME
          </m.h1>
        </div>

        {/* Game Cards Container */}
        <m.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full flex flex-col md:flex-row gap-8 items-center justify-center px-4"
        >
          <m.div variants={cardItemVariants} className="w-full max-w-sm">
            <GameCard
              title="Match the Time"
              description="Look at the analog clock and choose the correct digital time!"
              theme="blue"
              href="/match-time"
              previewTime={{ hours: 10, minutes: 10 }}
            />
          </m.div>

          <m.div variants={cardItemVariants} className="w-full max-w-sm">
            <m.div variants={cardItemVariants} className="w-full max-w-sm">
              <GameCard
                title="Set the Clock"
                description="Drag the hands on the clock face to match the digital target!"
                theme="orange"
                href="/set-clock"
                previewTime={{ hours: 4, minutes: 30 }}
              />
            </m.div>
          </m.div>
        </m.div>
      </div>

      {/* Educational Content Section — SEO-rich text for crawlers */}
      <section className="w-full max-w-4xl z-10 mt-12 md:mt-16 px-4">
        <div className="bg-white/80 backdrop-blur-md border-2 border-purple-100 rounded-3xl p-6 md:p-8 shadow-lg">
          <h2 className="text-2xl md:text-3xl font-black text-purple-700 mb-4 text-center">
            Learn to Tell Time with Interactive Clock Games
          </h2>
          <div className="space-y-4 text-slate-600 font-semibold text-sm md:text-base leading-relaxed">
            <p>
              <strong className="text-purple-700">Tick Tock Time</strong> is a free online learning clock designed to help children ages 4 to 8 master the skill of reading analog clocks. Through two interactive game modes, kids build confidence in telling time while having fun with colorful visuals and encouraging feedback from Toby the Clock Buddy.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4">
                <h3 className="text-lg font-extrabold text-sky-600 mb-2">🕐 Match the Time</h3>
                <p>
                  Look at the analog clock face and choose the correct digital time from four options. This clock reading quiz starts with simple full-hour times and gradually introduces half hours, quarter hours, and 5-minute intervals — perfect for kindergarten through 2nd grade learners.
                </p>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
                <h3 className="text-lg font-extrabold text-orange-600 mb-2">🕐 Set the Clock</h3>
                <p>
                  Drag the hour and minute hands on the interactive clock face to match a target digital time. Toby provides real-time hints, telling your child exactly which hand needs adjusting. This hands-on approach builds spatial understanding of how analog clocks work.
                </p>
              </div>
            </div>

            <h3 className="text-xl font-extrabold text-purple-700 mt-6 mb-2">
              Why Use an Interactive Teaching Clock?
            </h3>
            <p>
              Learning to read an analog clock is an important milestone for children in kindergarten through elementary school. Unlike digital displays, analog clocks help kids understand the passage of time visually — they can see relationships between hours and minutes, learn to skip-count by 5s, and build a foundation for understanding fractions like &quot;quarter past&quot; and &quot;half past.&quot;
            </p>
            <p>
              Tick Tock Time makes this process engaging by turning clock reading practice into a game. With progressive difficulty levels, children start with the basics and work their way up to more challenging times — building real mastery at their own pace.
            </p>

            <h3 className="text-xl font-extrabold text-purple-700 mt-6 mb-2">
              Designed for Parents and Teachers
            </h3>
            <p>
              Whether you are a parent looking for educational screen time at home, or a teacher seeking an interactive tool for your classroom, Tick Tock Time is designed to be used anywhere. It works on any device — desktops, tablets, and phones — and requires no downloads, accounts, or personal information. It is completely free with no ads, keeping the focus entirely on learning.
            </p>
          </div>
        </div>
      </section>

      {/* Footer Links for SEO crawlers and mandatory guidelines */}
      <div className="mt-8 flex flex-col items-center gap-2 z-10 select-none">
        <div className="text-slate-500 font-bold text-xs md:text-sm text-center bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full border border-white/30">
          🏫 Designed for elementary math learners • Free & Private
        </div>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs font-black text-purple-600">
          <Link href="/about" className="hover:text-purple-800 transition-colors">About & How to Play</Link>
          <span className="text-slate-300">•</span>
          <Link href="/blog" className="hover:text-purple-800 transition-colors">Blog & Resources</Link>
          <span className="text-slate-300">•</span>
          <Link href="/faq" className="hover:text-purple-800 transition-colors">FAQ</Link>
          <span className="text-slate-300">•</span>
          <Link href="/interactive-teaching-clock" className="hover:text-purple-800 transition-colors">Interactive Clock</Link>
          <span className="text-slate-300">•</span>
          <Link href="/for-teachers" className="hover:text-purple-800 transition-colors">For Teachers</Link>
          <span className="text-slate-300">•</span>
          <Link href="/for-parents" className="hover:text-purple-800 transition-colors">For Parents</Link>
          <span className="text-slate-300">•</span>
          <Link href="/contact" className="hover:text-purple-800 transition-colors">Contact</Link>
          <span className="text-slate-300">•</span>
          <Link href="/privacy" className="hover:text-purple-800 transition-colors">Privacy Policy</Link>
          <span className="text-slate-300">•</span>
          <Link href="/terms" className="hover:text-purple-800 transition-colors">Terms of Service</Link>
        </div>
      </div>
    </main>
  );
}
