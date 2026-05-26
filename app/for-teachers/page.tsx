import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Monitor, Tablet, GraduationCap, Shield, Clock, Users } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ForTeachersPage() {
  return (
    <main className="min-h-screen relative flex flex-col items-center px-4 py-8 bg-slate-50">
      <div className="w-full max-w-3xl z-10 flex flex-col gap-6">
        {/* Navigation & Breadcrumbs */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 select-none">
          <div className="flex items-center gap-3">
            <Link href="/">
              <span className="p-2.5 bg-white/80 hover:bg-white text-purple-600 rounded-xl transition-colors border border-slate-200 shadow-sm flex items-center gap-2 cursor-pointer font-bold text-xs md:text-sm">
                <ArrowLeft className="w-5 h-5" />
                Home
              </span>
            </Link>
            <Breadcrumbs items={[{ name: "For Teachers", href: "/for-teachers" }]} />
          </div>
          <div className="bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-extrabold px-4 py-1.5 rounded-full text-xs md:text-sm shadow-sm select-none flex items-center gap-1.5 w-fit self-end sm:self-auto">
            <GraduationCap className="w-4 h-4" />
            For Teachers
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-md border-4 border-purple-200 rounded-3xl p-6 md:p-10 shadow-xl">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-center gap-5 mb-8 border-b-2 border-slate-100 pb-6">
            <div className="w-20 h-20 relative flex-shrink-0 drop-shadow-md rounded-full bg-white p-2 border border-purple-200">
              <Image src="/clock_mascot.png" alt="Toby the Clock Buddy" width={80} height={80} className="object-contain" />
            </div>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-black text-purple-700 font-sans tracking-wide">
                Tick Tock Time for Teachers
              </h1>
              <p className="text-slate-500 font-bold mt-1">
                A free, interactive clock learning tool for your classroom 🏫
              </p>
            </div>
          </div>

          <div className="space-y-6 text-slate-700 text-base md:text-lg leading-relaxed font-medium">
            <p>
              Tick Tock Time is designed to be used as a classroom teaching tool for time-telling instruction. Whether you are introducing clocks for the first time in kindergarten or reinforcing 5-minute reading in 2nd grade, our interactive games adapt to your students&apos; skill level.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 flex gap-3">
                <Monitor className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-extrabold text-sky-700 mb-1">Smartboard Ready</h3>
                  <p className="text-sm text-slate-600">Project on your classroom display for whole-class instruction and group activities.</p>
                </div>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex gap-3">
                <Tablet className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-extrabold text-emerald-700 mb-1">Works on Any Device</h3>
                  <p className="text-sm text-slate-600">Fully responsive on tablets, Chromebooks, and computers. No app download required.</p>
                </div>
              </div>
              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 flex gap-3">
                <Shield className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-extrabold text-purple-700 mb-1">Safe for Schools</h3>
                  <p className="text-sm text-slate-600">No accounts, no data collection, no ads, no cookies. Safe for student use.</p>
                </div>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4 flex gap-3">
                <Clock className="w-6 h-6 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-extrabold text-orange-700 mb-1">Progressive Difficulty</h3>
                  <p className="text-sm text-slate-600">From full hours to 5-minute intervals — difficulty adapts across 10 questions.</p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              How to Use Tick Tock Time in Your Classroom
            </h2>

            <h3 className="text-xl font-extrabold text-purple-600 mt-4 mb-2">Whole-Class Instruction</h3>
            <p>
              Project the <Link href="/match-time" className="text-purple-600 font-extrabold underline hover:text-purple-800">Match the Time</Link> game on your smartboard. Have students discuss each clock face before voting on the answer. Use the difficulty progression to introduce new concepts (half hours, quarter hours) as the questions advance.
            </p>

            <h3 className="text-xl font-extrabold text-purple-600 mt-4 mb-2">Math Center Activity</h3>
            <p>
              Set up a telling time station in your math center rotation. Students can play <Link href="/set-clock" className="text-purple-600 font-extrabold underline hover:text-purple-800">Set the Clock</Link> independently on a tablet — Toby the mascot provides hints so students can self-correct without teacher intervention.
            </p>

            <h3 className="text-xl font-extrabold text-purple-600 mt-4 mb-2">Assessment Tool</h3>
            <p>
              Each game session includes 10 questions with progressive difficulty. The final score screen shows performance, making it easy to informally assess where each student stands. You can note which difficulty level students begin to struggle with to identify areas for targeted reteaching.
            </p>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              Skills Covered
            </h2>
            <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-5">
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold mt-0.5">✓</span>
                  <span>Reading time to the hour (o&apos;clock)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold mt-0.5">✓</span>
                  <span>Reading time to the half hour (:30)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold mt-0.5">✓</span>
                  <span>Reading time to the quarter hour (:15, :45)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold mt-0.5">✓</span>
                  <span>Reading time to the nearest 5 minutes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold mt-0.5">✓</span>
                  <span>Distinguishing between the hour hand and minute hand</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold mt-0.5">✓</span>
                  <span>Connecting analog clock faces to digital time representations</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-500 font-bold mt-0.5">✓</span>
                  <span>Skip counting by 5s (reinforced through minute reading)</span>
                </li>
              </ul>
            </div>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              Questions?
            </h2>
            <p>
              We welcome feedback and partnership inquiries from educators. Visit our <Link href="/contact" className="text-purple-600 font-extrabold underline hover:text-purple-800">contact page</Link> to get in touch with us, or check the <Link href="/faq" className="text-purple-600 font-extrabold underline hover:text-purple-800">FAQ</Link> for answers to common questions.
            </p>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-50 to-sky-50 border-2 border-purple-100 rounded-2xl p-6 mt-8 text-center">
              <h3 className="text-xl font-extrabold text-purple-700 mb-2">
                Start Using Tick Tock Time Today
              </h3>
              <p className="text-slate-600 font-bold mb-4">
                Just open the link — no setup, no accounts, no downloads needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/match-time" className="bg-sky-500 hover:bg-sky-600 text-white font-extrabold px-6 py-3 rounded-2xl transition-colors flex items-center justify-center gap-2 shadow-md">
                  Match the Time <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href="/set-clock" className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-6 py-3 rounded-2xl transition-colors flex items-center justify-center gap-2 shadow-md">
                  Set the Clock <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
