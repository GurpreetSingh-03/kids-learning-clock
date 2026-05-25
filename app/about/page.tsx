"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, BookOpen, Clock, Heart } from "lucide-react";
import BackgroundShapes from "@/components/BackgroundShapes";
import AnimatedButton from "@/components/AnimatedButton";

export default function AboutPage() {
  return (
    <main className="min-h-screen relative flex flex-col items-center px-4 py-8 overflow-hidden">
      <BackgroundShapes />

      <div className="w-full max-w-2xl z-10 flex flex-col gap-6">
        {/* Back navigation */}
        <div className="w-full flex items-center justify-between">
          <Link href="/">
            <span className="p-2.5 bg-white/80 hover:bg-white text-purple-600 rounded-xl transition-colors border border-slate-200 shadow-sm flex items-center gap-2 cursor-pointer font-bold">
              <ArrowLeft className="w-5 h-5" />
              Main Menu
            </span>
          </Link>
          <div className="bg-purple-600 text-white font-extrabold px-4 py-1.5 rounded-full text-sm shadow-sm select-none">
            About Toby 🦉
          </div>
        </div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-white/90 backdrop-blur-md border-4 border-purple-200 rounded-3xl p-6 md:p-8 shadow-xl"
        >
          {/* Hero Row with Mascot */}
          <div className="flex flex-col sm:flex-row items-center gap-6 mb-8 border-b-2 border-slate-100 pb-6">
            <div className="w-24 h-24 relative flex-shrink-0 drop-shadow-md rounded-full bg-white p-2 border border-purple-200">
              <Image
                src="/clock_mascot.png"
                alt="Toby Mascot"
                width={96}
                height={96}
                className="object-contain"
              />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-black text-purple-700 font-sans tracking-wide">
                About Tick Tock Time
              </h1>
              <p className="text-slate-500 font-bold mt-1">
                Learn to tell time, read analog clocks, and explore watch faces with Toby!
              </p>
            </div>
          </div>

          {/* Educational Philosophy Section */}
          <div className="space-y-6 text-slate-700 text-base md:text-lg leading-relaxed font-sans">
            <div>
              <h2 className="text-xl font-extrabold text-purple-600 mb-2 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-purple-500" />
                Why We Built Toby's Clock
              </h2>
              <p>
                Reading a traditional <strong className="font-extrabold text-purple-700">learning clock</strong> can be challenging for kids aged 4–8. With thick mechanical hands and numbers placed around circles, children must map angles directly into hours and minutes. 
              </p>
              <p className="mt-2">
                <strong className="font-extrabold text-purple-700">Tick Tock Time</strong> turns clock practice into a fun, responsive experience. By combining bright visuals, audio ticking feedback, and instant helpful hints, children build spatial memory and gain confidence in reading <strong className="font-extrabold text-purple-700">teaching clocks</strong> and <strong className="font-extrabold text-purple-700">time teaching watches</strong>.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-purple-600 mb-2 flex items-center gap-2">
                <Clock className="w-6 h-6 text-purple-500" />
                How to Play the Game Modes
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong className="text-purple-700">Match the Time:</strong> Look at the large analog clock and find the matching digital time from the multiple-choice buttons. The levels progress from full hours up to 5-minute ticks.
                </li>
                <li>
                  <strong className="text-purple-700">Set the Clock:</strong> Drag the blue hour hand and the red minute hand to match the target digital time. Toby is right next to you, giving tips like pointing out which hand needs adjusting!
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-purple-600 mb-2 flex items-center gap-2">
                <Heart className="w-6 h-6 text-purple-500" />
                Parent & Teacher Guide
              </h2>
              <p>
                To make the most of this <strong className="font-extrabold text-purple-700">teaching clock</strong>, practice alongside your child. Ask them questions like <em className="text-purple-600 font-bold">"Which hand is shorter?"</em> or <em className="text-purple-600 font-bold">"How many minutes pass when the red hand moves from 12 to 1?"</em> Encourage them to drag the interactive hands slowly to listen to the mechanical tick chimes!
              </p>
            </div>
          </div>

          {/* Call to action */}
          <div className="mt-8 pt-6 border-t-2 border-slate-100 flex justify-center">
            <Link href="/" className="w-full sm:w-auto">
              <span className="w-full block">
                <AnimatedButton variant="primary" className="w-full px-8 py-3.5">
                  Let's Play Now! ⏰
                </AnimatedButton>
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
