"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Scale, ScaleIcon, FileText } from "lucide-react";
import BackgroundShapes from "@/components/BackgroundShapes";

export default function TermsPage() {
  return (
    <main className="min-h-screen relative flex flex-col items-center px-4 py-8 overflow-hidden">
      <BackgroundShapes />

      <div className="w-full max-w-2xl z-10 flex flex-col gap-6">
        {/* Back Navigation */}
        <div className="w-full flex items-center justify-between">
          <Link href="/">
            <span className="p-2.5 bg-white/80 hover:bg-white text-purple-600 rounded-xl transition-colors border border-slate-200 shadow-sm flex items-center gap-2 cursor-pointer font-bold">
              <ArrowLeft className="w-5 h-5" />
              Main Menu
            </span>
          </Link>
          <div className="bg-purple-600 text-white font-extrabold px-4 py-1.5 rounded-full text-sm shadow-sm select-none flex items-center gap-1.5">
            <FileText className="w-4 h-4" />
            Terms
          </div>
        </div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-white/90 backdrop-blur-md border-4 border-purple-200 rounded-3xl p-6 md:p-8 shadow-xl"
        >
          <h1 className="text-3xl font-black text-purple-700 font-sans tracking-wide mb-2">
            Terms of Service
          </h1>
          <p className="text-slate-500 font-bold mb-6">
            Last Updated: May 2026
          </p>

          <div className="space-y-6 text-slate-700 text-base md:text-lg leading-relaxed font-sans">
            <div>
              <h2 className="text-xl font-extrabold text-purple-600 mb-2 flex items-center gap-2">
                <Scale className="w-6 h-6 text-purple-500" />
                1. Acceptance of Terms
              </h2>
              <p>
                By using **Tick Tock Time**, you agree to these Terms of Service. If you do not agree to these terms, you should not access or use the application.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-purple-600 mb-2 flex items-center gap-2">
                <Scale className="w-6 h-6 text-purple-500" />
                2. Educational & Classroom Usage
              </h2>
              <p>
                Tick Tock Time is a free tool provided for educational and non-commercial purposes. 
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Teachers and schools are welcome and encouraged to link to our learning clock game for student practice.</li>
                <li>You may not wrap, host, or republish this game within paid platforms, frame widgets, or containers for commercial profit without prior written permission.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-purple-600 mb-2 flex items-center gap-2">
                <Scale className="w-6 h-6 text-purple-500" />
                3. Intellectual Property
              </h2>
              <p>
                The game logic, custom synthesized sound oscillators, mascot images, layouts, and SVG clock designs are the proprietary assets of Tick Tock Time. You may not extract or copy components for reuse in other software products.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-extrabold text-purple-600 mb-2 flex items-center gap-2">
                <Scale className="w-6 h-6 text-purple-500" />
                4. Disclaimer of Warranties
              </h2>
              <p>
                The application is provided "as is" and "as available" with zero warranties of any kind. We strive to maintain continuous uptime and cross-browser responsiveness but do not guarantee that the application will be completely bug-free.
              </p>
            </div>

            <div className="pt-6 border-t border-slate-100">
              <p className="text-sm text-slate-500 font-bold">
                For questions regarding terms, licensing, or integration queries, contact us at: 
                <span className="block mt-1 text-purple-600">hello@ticktocktime.com</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
