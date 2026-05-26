"use client";

import { m } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Home, Search, ArrowRight } from "lucide-react";
import BackgroundShapes from "@/components/BackgroundShapes";
import AnimatedButton from "@/components/AnimatedButton";

export default function NotFound() {
  return (
    <main className="min-h-screen relative flex flex-col items-center justify-center px-4 py-8 overflow-hidden">
      <BackgroundShapes />

      <div className="w-full max-w-lg z-10 flex flex-col items-center gap-6">
        {/* Confused Mascot */}
        <m.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, -5, 5, 0],
          }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="relative w-32 h-32 drop-shadow-lg rounded-full bg-white/60 p-3 border-2 border-white/50 backdrop-blur-sm"
        >
          <Image
            src="/clock_mascot.png"
            alt="Toby is confused"
            width={128}
            height={128}
            className="object-contain"
          />
          {/* Floating question marks */}
          <m.span
            animate={{ y: [0, -10, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="absolute -top-2 -right-2 text-3xl select-none"
          >
            ❓
          </m.span>
          <m.span
            animate={{ y: [0, -8, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.2, delay: 0.5 }}
            className="absolute -top-1 -left-3 text-2xl select-none"
          >
            🔍
          </m.span>
        </m.div>

        {/* Content Card */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-white/90 backdrop-blur-md border-4 border-purple-200 rounded-3xl p-8 shadow-xl text-center w-full"
        >
          {/* 404 Number */}
          <m.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, delay: 0.2 }}
            className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-sky-500 to-orange-400 select-none"
          >
            404
          </m.h1>

          {/* Speech Bubble */}
          <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-4 mt-4 mb-6">
            <h2 className="text-xl font-black text-purple-700 mb-1">
              Oops! This page ran out of time! ⏰
            </h2>
            <p className="text-slate-500 font-bold text-sm md:text-base">
              Looks like the clock hands got tangled up. Don&apos;t worry — Toby will
              help you find your way back!
            </p>
          </div>

          {/* Navigation Options */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="w-full">
              <AnimatedButton
                variant="primary"
                className="w-full py-3 flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Back to Home
              </AnimatedButton>
            </Link>

            <div className="flex gap-3">
              <Link href="/match-time" className="flex-1">
                <AnimatedButton
                  variant="ghost"
                  className="w-full py-2.5 flex items-center justify-center gap-1.5 text-sm"
                >
                  Match Time
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </Link>
              <Link href="/set-clock" className="flex-1">
                <AnimatedButton
                  variant="ghost"
                  className="w-full py-2.5 flex items-center justify-center gap-1.5 text-sm"
                >
                  Set Clock
                  <ArrowRight className="w-4 h-4" />
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </m.div>
      </div>
    </main>
  );
}
