import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function TimeTellingMilestones() {
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
                { name: "Milestones by Age", href: "/blog/time-telling-milestones-by-age" },
              ]}
            />
          </div>
          <div className="bg-emerald-500 text-white font-extrabold px-4 py-1.5 rounded-full text-xs md:text-sm shadow-sm select-none w-fit self-end sm:self-auto">
            Parenting
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-md border-4 border-purple-200 rounded-3xl p-6 md:p-10 shadow-xl">
          <header className="mb-8 border-b-2 border-slate-100 pb-6">
            <h1 className="text-3xl md:text-4xl font-black text-purple-700 leading-tight mb-3">
              Time-Telling Milestones: What Kids Should Know by Age
            </h1>
            <p className="text-slate-500 font-bold text-sm">
              5 min read • Written by the Tick Tock Time team
            </p>
          </header>

          <div className="prose-custom space-y-6 text-slate-700 text-base md:text-lg leading-relaxed font-medium">
            <p>
              One of the most common questions parents ask is: &quot;When should my child be able to tell time?&quot; The answer depends on the specific skill — telling time is not a single ability but a progression of related skills that develop over several years. Here is what you can generally expect at each age, along with practical ways to support your child at every stage.
            </p>

            <p className="bg-purple-50 border-2 border-purple-200 rounded-2xl p-4 text-purple-800 font-bold">
              <strong>Important note:</strong> Every child develops differently. These milestones are general guidelines, not rigid benchmarks. If your child is slightly ahead or behind in any area, that is completely normal.
            </p>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              Ages 4–5: Building the Foundation
            </h2>
            <p><strong className="text-purple-700">What to expect:</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Understands basic time concepts: morning, afternoon, evening, night</li>
              <li>Can connect activities to times of day (&quot;We eat breakfast in the morning&quot;)</li>
              <li>Recognizes numbers 1 through 12</li>
              <li>Begins to identify a clock as a &quot;thing that tells time&quot;</li>
              <li>May be able to read full hours (o&apos;clock times) with guidance</li>
            </ul>
            <p><strong className="text-purple-700">How to help:</strong> Use time-related language throughout the day. Point to clocks and say, &quot;The short hand is on the 8 — it is 8 o&apos;clock, time for school!&quot; Keep it casual and conversational.</p>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              Ages 5–6: Learning the Hour Hand
            </h2>
            <p><strong className="text-purple-700">What to expect:</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Can reliably read full-hour times on an analog clock</li>
              <li>Understands that the short hand shows the hour</li>
              <li>Begins to learn about half hours (:30)</li>
              <li>Can distinguish between the short (hour) and long (minute) hands</li>
              <li>May begin skip counting by 5s</li>
            </ul>
            <p><strong className="text-purple-700">How to help:</strong> Focus on o&apos;clock and half-past times. Use interactive tools like our <Link href="/match-time" className="text-purple-600 font-extrabold underline hover:text-purple-800">clock reading quiz</Link> at Level 1 and Level 2 difficulty — these cover exactly these skills.</p>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              Ages 6–7: Adding Minutes
            </h2>
            <p><strong className="text-purple-700">What to expect:</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Reads time to the hour and half hour independently</li>
              <li>Begins reading quarter hours (:15 and :45)</li>
              <li>Understands &quot;quarter past&quot; and &quot;quarter to&quot; vocabulary</li>
              <li>Can skip count by 5s reliably</li>
              <li>Starts reading time to the nearest 5 minutes with support</li>
            </ul>
            <p><strong className="text-purple-700">How to help:</strong> Introduce 5-minute intervals. Practice with our online <Link href="/set-clock" className="text-purple-600 font-extrabold underline hover:text-purple-800">telling time game for kids</Link> where children physically drag clock hands — this builds deep understanding of how hand positions map to specific times.</p>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              Ages 7–8: Mastery and Real-World Application
            </h2>
            <p><strong className="text-purple-700">What to expect:</strong></p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li>Reads analog clocks to the nearest 5 minutes independently</li>
              <li>May begin reading to the nearest minute</li>
              <li>Understands the connection between analog and digital time formats</li>
              <li>Can calculate simple elapsed time (&quot;If it is 2:00 now and we leave at 3:00, how long do we have to wait?&quot;)</li>
              <li>Uses time information to manage daily routines</li>
            </ul>
            <p><strong className="text-purple-700">How to help:</strong> Give your child real responsibilities that involve time — &quot;Let me know when it is 4:30 so we can start cooking.&quot; This turns clock reading from an academic exercise into a practical life skill.</p>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              What If My Child Is Behind?
            </h2>
            <p>
              First, do not worry. Telling time combines number recognition, spatial reasoning, and mathematical thinking — it is genuinely complex. Some children grasp it quickly; others need more time and repetition. The most important thing you can do is:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong className="text-purple-700">Keep it positive.</strong> Never make clock reading feel like a test or a source of stress.</li>
              <li><strong className="text-purple-700">Practice regularly but briefly.</strong> Short, daily exposure is far more effective than occasional long sessions.</li>
              <li><strong className="text-purple-700">Use multiple approaches.</strong> Combine physical clocks, interactive games, and real-world conversation to give your child many different ways to engage with the concept.</li>
            </ul>

            <div className="bg-gradient-to-r from-purple-50 to-sky-50 border-2 border-purple-100 rounded-2xl p-6 mt-8 text-center">
              <h3 className="text-xl font-extrabold text-purple-700 mb-2">
                Practice at Every Stage
              </h3>
              <p className="text-slate-600 font-bold mb-4">
                Tick Tock Time adapts from simple hour times to 5-minute intervals — matching your child&apos;s stage of development.
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
      </article>
    </main>
  );
}
