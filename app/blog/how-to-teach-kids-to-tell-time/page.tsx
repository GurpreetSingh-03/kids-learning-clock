import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, BookOpen, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";
import SceneHero from "@/components/SceneHero";

export default function HowToTeachKidsToTellTime() {
  return (
    <main className="min-h-screen relative flex flex-col items-center px-4 py-8 bg-slate-50">
      <article className="w-full max-w-3xl z-10 flex flex-col gap-6">
        {/* Navigation & Breadcrumbs */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 select-none">
          <div className="flex items-center gap-3">
            <Link href="/blog">
              <span className="p-2.5 bg-white/80 hover:bg-white text-purple-600 rounded-xl transition-colors border border-slate-200 shadow-sm flex items-center gap-2 cursor-pointer font-bold text-xs md:text-sm">
                <ArrowLeft className="w-5 h-5" />
                All Articles
              </span>
            </Link>
            <Breadcrumbs
              items={[
                { name: "Blog", href: "/blog" },
                { name: "How to Teach Kids", href: "/blog/how-to-teach-kids-to-tell-time" },
              ]}
            />
          </div>
          <div className="bg-gradient-to-r from-sky-500 to-purple-600 text-white font-extrabold px-4 py-1.5 rounded-full text-xs md:text-sm shadow-sm select-none w-fit self-end sm:self-auto">
            Guide
          </div>
        </div>

        {/* Article Hero Illustration */}
        <SceneHero
          src="/scenes/teach-time.webp"
          alt="Toby the clock mascot teaching a young child how to read an analog clock in a sky castle"
          priority
        />

        {/* Article Card */}
        <div className="bg-white/90 backdrop-blur-md border-4 border-purple-200 rounded-3xl p-6 md:p-10 shadow-xl">
          {/* Article Header */}
          <header className="mb-8 border-b-2 border-slate-100 pb-6">
            <h1 className="text-3xl md:text-4xl font-black text-purple-700 leading-tight mb-3">
              How to Teach Kids to Tell Time: A Step-by-Step Guide
            </h1>
            <p className="text-slate-500 font-bold text-sm">
              6 min read • Written by the Tick Tock Time team
            </p>
          </header>

          {/* Article Body */}
          <div className="prose-custom space-y-6 text-slate-700 text-base md:text-lg leading-relaxed font-medium">
            <p>
              Teaching a child to read an analog clock is one of the most rewarding milestones in early education. While it can seem daunting at first — after all, a clock face packs a lot of information into a small circle — the right approach makes all the difference. This guide breaks the process into manageable steps that work for children ages 4 to 8.
            </p>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              When Should You Start Teaching Time?
            </h2>
            <p>
              Most children are ready to begin learning about time between ages 4 and 5. At this stage, they can recognize numbers 1 through 12 and understand daily routines (&quot;breakfast time,&quot; &quot;bedtime&quot;). Formal clock reading — understanding the hour and minute hands — is typically introduced in kindergarten and 1st grade, with more precise time-telling (to the nearest 5 minutes) following in 2nd grade.
            </p>
            <p>
              There is no rush. Every child develops at their own pace. The goal is to make the learning process enjoyable, not stressful.
            </p>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              Step 1: Build Time Vocabulary First
            </h2>
            <p>
              Before touching a clock, help your child understand the concept of time through daily conversation:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong className="text-purple-700">Morning, afternoon, evening, night</strong> — connect these to activities they know (morning = school, evening = dinner).</li>
              <li><strong className="text-purple-700">Before and after</strong> — &quot;We eat lunch <em>before</em> we play outside.&quot;</li>
              <li><strong className="text-purple-700">Earlier and later</strong> — &quot;Bedtime is <em>later</em> than dinner.&quot;</li>
            </ul>
            <p>
              This foundational vocabulary gives children a mental framework for understanding what clocks actually measure.
            </p>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              Step 2: Introduce the Clock Face
            </h2>
            <p>
              Show your child a large, clear analog clock (a physical one or an interactive one like Tick Tock Time). Point out the key parts:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong className="text-purple-700">The numbers 1–12</strong> arranged in a circle.</li>
              <li><strong className="text-purple-700">The short hand (hour hand)</strong> — explain that this is the slower hand that tells us the hour.</li>
              <li><strong className="text-purple-700">The long hand (minute hand)</strong> — explain that this moves faster and tells us the minutes.</li>
              <li><strong className="text-purple-700">The direction</strong> — both hands move in the same direction, which we call &quot;clockwise.&quot;</li>
            </ul>
            <p>
              A helpful tip: use color coding. In Tick Tock Time, the hour hand is blue and the minute hand is red, making it easier for children to distinguish between them.
            </p>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              Step 3: Master &quot;O&apos;Clock&quot; Times First
            </h2>
            <p>
              Start with the simplest times — when the minute hand points straight up at the 12. At these times, the hour hand points directly at a number, making it easy to read:
            </p>
            <div className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-4 my-4">
              <p className="text-purple-800 font-bold">
                &quot;When the long hand points to 12, look at the short hand. Whatever number it points to is the hour. If the short hand points to 3, it is 3 o&apos;clock!&quot;
              </p>
            </div>
            <p>
              Practice this with many examples. Ask your child to identify times like 1:00, 5:00, 9:00, and 12:00. Our interactive <Link href="/match-time" className="text-purple-600 font-extrabold underline hover:text-purple-800">clock reading quiz</Link> starts at this level, making it an excellent practice tool.
            </p>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              Step 4: Introduce Half Hours
            </h2>
            <p>
              Once your child is comfortable with o&apos;clock times, introduce &quot;half past&quot; (or &quot;thirty&quot;). Explain that when the minute hand points straight down at the 6, it means 30 minutes have passed:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>The long hand pointing to 6 means &quot;:30&quot; or &quot;half past.&quot;</li>
              <li>The short hand will be between two numbers — it has moved partway to the next hour because time has passed.</li>
            </ul>
            <p>
              This is a great opportunity to explain that the hour hand does not &quot;jump&quot; from one number to the next — it moves slowly and continuously throughout the hour.
            </p>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              Step 5: Teach Skip Counting by 5s
            </h2>
            <p>
              Before introducing quarter hours and 5-minute intervals, make sure your child can skip count by 5s: 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60. This skill is essential because each number on the clock face represents 5 minutes:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>The 1 = 5 minutes</li>
              <li>The 2 = 10 minutes</li>
              <li>The 3 = 15 minutes (quarter past)</li>
              <li>The 6 = 30 minutes (half past)</li>
              <li>The 9 = 45 minutes (quarter to the next hour)</li>
              <li>The 12 = 0 minutes (o&apos;clock)</li>
            </ul>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              Step 6: Practice with Interactive Tools
            </h2>
            <p>
              The best way to solidify clock-reading skills is through hands-on practice. Interactive tools where children can physically move clock hands build a much deeper understanding than passive observation:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong className="text-purple-700">Setting clock hands:</strong> Our online <Link href="/set-clock" className="text-purple-600 font-extrabold underline hover:text-purple-800">telling time game for kids</Link> lets children drag the hour and minute hands to match a target time, with helpful hints along the way.</li>
              <li><strong className="text-purple-700">Reading clocks:</strong> Our free <Link href="/match-time" className="text-purple-600 font-extrabold underline hover:text-purple-800">analog clock quiz</Link> presents an analog clock and asks children to identify the correct digital time from multiple choices.</li>
              <li><strong className="text-purple-700">Connecting to daily life:</strong> Point out clocks around the house and ask, &quot;What time is it now?&quot; throughout the day.</li>
            </ul>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              Tips for Success
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong className="text-purple-700">Be patient.</strong> Clock reading is a complex skill that involves number recognition, spatial reasoning, and mathematical thinking all at once.</li>
              <li><strong className="text-purple-700">Keep sessions short.</strong> 5–10 minutes of focused practice is more effective than long, tiring sessions.</li>
              <li><strong className="text-purple-700">Celebrate progress.</strong> Every correctly read time is a win worth acknowledging.</li>
              <li><strong className="text-purple-700">Use both analog and digital.</strong> Help your child see the connection between the two formats. When they read an analog clock, show them what the same time looks like on a digital display.</li>
              <li><strong className="text-purple-700">Make it fun.</strong> Games, songs, and everyday conversations about time are far more effective than drills or worksheets alone.</li>
            </ul>

            <div className="bg-gradient-to-r from-purple-50 to-sky-50 border-2 border-purple-100 rounded-2xl p-6 mt-8 text-center">
              <h3 className="text-xl font-extrabold text-purple-700 mb-2">
                Ready to Practice?
              </h3>
              <p className="text-slate-600 font-bold mb-4">
                Try our free interactive clock games — no download or account needed!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/match-time"
                  className="bg-sky-500 hover:bg-sky-600 text-white font-extrabold px-6 py-3 rounded-2xl transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  Match the Time
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/set-clock"
                  className="bg-orange-500 hover:bg-orange-600 text-white font-extrabold px-6 py-3 rounded-2xl transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  Set the Clock
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
}
