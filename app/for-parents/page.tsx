import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Heart, Clock, Sparkles, BookOpen, Shield } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function ForParentsPage() {
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
            <Breadcrumbs items={[{ name: "For Parents", href: "/for-parents" }]} />
          </div>
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white font-extrabold px-4 py-1.5 rounded-full text-xs md:text-sm shadow-sm select-none flex items-center gap-1.5 w-fit self-end sm:self-auto">
            <Heart className="w-4 h-4" />
            For Parents
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
                Help Your Child Learn to Tell Time
              </h1>
              <p className="text-slate-500 font-bold mt-1">
                Practical tips and a free tool to make clock reading fun at home 🏡
              </p>
            </div>
          </div>

          <div className="space-y-6 text-slate-700 text-base md:text-lg leading-relaxed font-medium">
            <p>
              Learning to read an analog clock is one of those milestones that every child reaches at their own pace. The good news is that it does not have to feel like homework — with the right approach, telling time can be as enjoyable as playing a game. Because that is exactly what it is.
            </p>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              When Is My Child Ready?
            </h2>
            <p>
              Most children are ready to start learning about time between ages 4 and 5, beginning with general concepts like morning and afternoon. By ages 5 to 6, many children can learn to read full-hour times. Reading to the half hour and quarter hour typically develops between ages 6 and 7, with 5-minute precision following in 2nd grade (ages 7–8).
            </p>
            <p>
              For a more detailed breakdown, see our article on <Link href="/blog/time-telling-milestones-by-age" className="text-purple-600 font-extrabold underline hover:text-purple-800">time-telling milestones by age</Link>.
            </p>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              5 Tips for Teaching Time at Home
            </h2>

            <div className="space-y-4">
              <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4">
                <h3 className="font-extrabold text-purple-700 mb-1">1. Use Time in Daily Conversation</h3>
                <p className="text-sm text-slate-600">
                  Throughout the day, casually mention times: &quot;It is 7 o&apos;clock — time for breakfast!&quot; or &quot;We need to leave at 3:30 — can you watch the clock and let me know?&quot; This builds awareness naturally without any pressure.
                </p>
              </div>

              <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4">
                <h3 className="font-extrabold text-sky-700 mb-1">2. Start with the Hour Hand</h3>
                <p className="text-sm text-slate-600">
                  Focus on the short hand first. Cover the minute hand and practice identifying the hour. Once your child can reliably tell the hour, introduce the minute hand and half-past times.
                </p>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4">
                <h3 className="font-extrabold text-emerald-700 mb-1">3. Keep Practice Sessions Short</h3>
                <p className="text-sm text-slate-600">
                  5–10 minutes of focused practice is more effective than 30 minutes of frustrated drilling. Short, positive sessions build confidence and prevent clock reading from feeling like a chore.
                </p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-2xl p-4">
                <h3 className="font-extrabold text-orange-700 mb-1">4. Play Together</h3>
                <p className="text-sm text-slate-600">
                  Sit with your child while they play <Link href="/match-time" className="text-purple-600 font-extrabold underline hover:text-purple-800">Match the Time</Link> or <Link href="/set-clock" className="text-purple-600 font-extrabold underline hover:text-purple-800">Set the Clock</Link>. Ask guiding questions: &quot;Which hand is shorter?&quot; &quot;Where is the minute hand pointing?&quot; Your involvement makes learning social and fun.
                </p>
              </div>

              <div className="bg-pink-50 border border-pink-200 rounded-2xl p-4">
                <h3 className="font-extrabold text-pink-700 mb-1">5. Celebrate Every Win</h3>
                <p className="text-sm text-slate-600">
                  Every correctly read time is a genuine achievement. Acknowledge it! Positive reinforcement builds the confidence children need to tackle harder times like :15, :45, and 5-minute intervals.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              Why Tick Tock Time?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="text-center bg-white border-2 border-purple-100 rounded-2xl p-4">
                <Shield className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <h3 className="font-extrabold text-purple-700 text-sm mb-1">100% Private</h3>
                <p className="text-xs text-slate-500 font-bold">No accounts, no data collection, no ads. Safe for children.</p>
              </div>
              <div className="text-center bg-white border-2 border-purple-100 rounded-2xl p-4">
                <Sparkles className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <h3 className="font-extrabold text-purple-700 text-sm mb-1">Completely Free</h3>
                <p className="text-xs text-slate-500 font-bold">No in-app purchases, no subscriptions, no hidden costs.</p>
              </div>
              <div className="text-center bg-white border-2 border-purple-100 rounded-2xl p-4">
                <BookOpen className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                <h3 className="font-extrabold text-purple-700 text-sm mb-1">Helpful Feedback</h3>
                <p className="text-xs text-slate-500 font-bold">Toby the mascot guides children with hints — not just right/wrong answers.</p>
              </div>
            </div>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              Learn More
            </h2>
            <p>
              Visit our <Link href="/blog" className="text-purple-600 font-extrabold underline hover:text-purple-800">blog</Link> for in-depth articles on teaching time, including our popular guides on <Link href="/blog/how-to-teach-kids-to-tell-time" className="text-purple-600 font-extrabold underline hover:text-purple-800">how to teach kids to tell time step-by-step</Link> and <Link href="/blog/analog-vs-digital-clocks" className="text-purple-600 font-extrabold underline hover:text-purple-800">why analog clocks matter for child development</Link>.
            </p>

            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-50 to-sky-50 border-2 border-purple-100 rounded-2xl p-6 mt-8 text-center">
              <h3 className="text-xl font-extrabold text-purple-700 mb-2">
                Try It Now — It Takes 2 Minutes
              </h3>
              <p className="text-slate-600 font-bold mb-4">
                No download needed. Just pick a game and play!
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
