"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import GameCard from "@/components/GameCard";
import BackgroundShapes from "@/components/BackgroundShapes";

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
            <motion.div
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
              />
              {/* Pulsing Sparkles */}
              <motion.span
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-1 -right-1 text-3xl select-none"
              >
                ✨
              </motion.span>
              <motion.span
                animate={{ scale: [1, 1.3, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ repeat: Infinity, duration: 2.2, delay: 0.5 }}
                className="absolute -bottom-2 -left-1 text-2xl select-none"
              >
                🌟
              </motion.span>
            </motion.div>

            {/* Mascot Greeting Speech Bubble */}
            <motion.div
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
            </motion.div>
          </div>

          {/* Game Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-sky-500 via-purple-500 to-orange-500 font-sans filter drop-shadow-sm select-none mt-2"
          >
            TICK TOCK TIME
          </motion.h1>
        </div>

        {/* Game Cards Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="w-full flex flex-col md:flex-row gap-8 items-center justify-center px-4"
        >
          <motion.div variants={cardItemVariants} className="w-full max-w-sm">
            <GameCard
              title="Match the Time"
              description="Look at the analog clock and choose the correct digital time!"
              theme="blue"
              href="/match-time"
              previewTime={{ hours: 10, minutes: 10 }}
            />
          </motion.div>

          <motion.div variants={cardItemVariants} className="w-full max-w-sm">
            <GameCard
              title="Set the Clock"
              description="Drag the hands on the clock face to match the digital target!"
              theme="orange"
              href="/set-clock"
              previewTime={{ hours: 4, minutes: 30 }}
            />
          </motion.div>
        </motion.div>
      </div>

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
