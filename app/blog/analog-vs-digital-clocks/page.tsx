import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AnalogVsDigitalClocks() {
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
                { name: "Analog vs Digital", href: "/blog/analog-vs-digital-clocks" },
              ]}
            />
          </div>
          <div className="bg-purple-600 text-white font-extrabold px-4 py-1.5 rounded-full text-xs md:text-sm shadow-sm select-none w-fit self-end sm:self-auto">
            Education
          </div>
        </div>

        {/* Article Card */}
        <div className="bg-white/90 backdrop-blur-md border-4 border-purple-200 rounded-3xl p-6 md:p-10 shadow-xl">
          <header className="mb-8 border-b-2 border-slate-100 pb-6">
            <h1 className="text-3xl md:text-4xl font-black text-purple-700 leading-tight mb-3">
              Analog vs. Digital Clocks: Why Kids Should Learn Both
            </h1>
            <p className="text-slate-500 font-bold text-sm">
              4 min read • Written by the Tick Tock Time team
            </p>
          </header>

          <div className="prose-custom space-y-6 text-slate-700 text-base md:text-lg leading-relaxed font-medium">
            <p>
              In a world full of digital screens, many parents wonder: is it still worth teaching children to read analog clocks? The short answer is <strong className="text-purple-700">absolutely yes</strong>. While digital clocks provide a quick, convenient way to check the time, analog clocks offer something digital displays simply cannot — a visual representation of how time works.
            </p>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              What Analog Clocks Teach That Digital Clocks Do Not
            </h2>

            <h3 className="text-xl font-extrabold text-purple-600 mt-6 mb-2">
              1. Visual Understanding of Time Passing
            </h3>
            <p>
              An analog clock shows time as movement through space. Children can physically see the minute hand sweep around the dial, which helps them grasp how much time has passed and how much time remains. A digital display like &quot;3:45&quot; is just a number — it does not tell a child whether 3:45 is close to 4:00 or far from it without mental calculation.
            </p>

            <h3 className="text-xl font-extrabold text-purple-600 mt-6 mb-2">
              2. Foundation for Fractions
            </h3>
            <p>
              An analog clock is essentially a circle divided into sections. When children learn that the minute hand pointing at 3 means &quot;quarter past&quot; or pointing at 6 means &quot;half past,&quot; they are building an intuitive understanding of fractions — quarters, halves, and thirds — before they encounter these concepts formally in math class.
            </p>

            <h3 className="text-xl font-extrabold text-purple-600 mt-6 mb-2">
              3. Skip Counting Practice
            </h3>
            <p>
              Reading minutes on an analog clock reinforces skip counting by 5s (5, 10, 15, 20...). This is a core math skill that extends well beyond clock reading — it helps with multiplication, division, and number sense.
            </p>

            <h3 className="text-xl font-extrabold text-purple-600 mt-6 mb-2">
              4. Spatial Reasoning
            </h3>
            <p>
              Interpreting the angle and position of clock hands on a circular face develops spatial reasoning skills. Children must process the relationship between two moving objects (the hour and minute hands) in a circular space — a type of thinking that supports geometry, map reading, and problem-solving.
            </p>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              The Role of Digital Clocks
            </h2>
            <p>
              Digital clocks are not the enemy. They are quick, precise, and ubiquitous — on phones, microwaves, computers, and bedside tables. Children absolutely should be able to read digital time. The key insight is that <strong className="text-purple-700">digital time reading is much easier to learn once analog time is understood</strong>. The reverse is not true — a child who can only read &quot;3:45&quot; digitally may still struggle to understand what that actually looks like on a clock face.
            </p>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              How to Use Both Formats Together
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-slate-600">
              <li><strong className="text-purple-700">Start with analog.</strong> Teach children to read the clock face first, beginning with hours and progressing to minutes.</li>
              <li><strong className="text-purple-700">Show the connection.</strong> When your child reads a time on an analog clock, show them the same time displayed digitally. Ask: &quot;See? 3:15 on this clock looks like this on your tablet.&quot;</li>
              <li><strong className="text-purple-700">Practice both formats.</strong> Interactive games like <Link href="/match-time" className="text-purple-600 font-extrabold underline hover:text-purple-800">Match the Time</Link> present an analog clock and ask children to select the matching digital time — building the bridge between both formats naturally.</li>
              <li><strong className="text-purple-700">Keep analog clocks visible.</strong> Having an analog clock on the wall at home or in the classroom gives children constant, passive exposure to reading time.</li>
            </ul>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              The Bottom Line
            </h2>
            <p>
              Teaching children to read analog clocks is not about rejecting technology — it is about giving them a richer, deeper understanding of time itself. The cognitive benefits (fractions, spatial reasoning, number sense) extend far beyond just knowing &quot;what time is it.&quot; By learning both analog and digital formats, children develop a complete and flexible understanding of time that serves them throughout school and life.
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-sky-50 border-2 border-purple-100 rounded-2xl p-6 mt-8 text-center">
              <h3 className="text-xl font-extrabold text-purple-700 mb-2">
                Practice Reading Analog Clocks
              </h3>
              <p className="text-slate-600 font-bold mb-4">
                Our interactive clock games bridge analog and digital time reading — completely free!
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
