import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function FunClockActivities() {
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
                { name: "Classroom Activities", href: "/blog/fun-clock-activities-for-classroom" },
              ]}
            />
          </div>
          <div className="bg-amber-500 text-white font-extrabold px-4 py-1.5 rounded-full text-xs md:text-sm shadow-sm select-none w-fit self-end sm:self-auto">
            Activities
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur-md border-4 border-purple-200 rounded-3xl p-6 md:p-10 shadow-xl">
          <header className="mb-8 border-b-2 border-slate-100 pb-6">
            <h1 className="text-3xl md:text-4xl font-black text-purple-700 leading-tight mb-3">
              5 Fun Clock Activities for the Classroom
            </h1>
            <p className="text-slate-500 font-bold text-sm">
              5 min read • Written by the Tick Tock Time team
            </p>
          </header>

          <div className="prose-custom space-y-6 text-slate-700 text-base md:text-lg leading-relaxed font-medium">
            <p>
              Teaching children to tell time does not have to involve staring at worksheets. The most effective learning happens when children are actively engaged — moving, creating, and problem-solving. Here are five classroom-tested activities that make clock reading practice genuinely fun.
            </p>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              Activity 1: Paper Plate Clocks
            </h2>
            <p>
              Have each student create their own clock using a paper plate, a brass fastener, and two cardboard arrows (one shorter for hours, one longer for minutes). Students can color-code their hands — for example, blue for the hour hand and red for the minute hand. Once built, call out different times and have students set their clocks to match.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
              <p className="text-amber-800 font-bold text-sm">
                <strong>Why it works:</strong> Building a clock from scratch helps children understand the relationship between the parts. The physical act of moving the hands reinforces the connection between hand position and time.
              </p>
            </div>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              Activity 2: Time Bingo
            </h2>
            <p>
              Create bingo cards where each square contains a different analog clock face showing a specific time. The teacher calls out times in digital format (&quot;Who has 3:30?&quot; or &quot;Who has quarter past 7?&quot;) and students mark the matching clock on their card. The first to complete a row wins.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
              <p className="text-amber-800 font-bold text-sm">
                <strong>Why it works:</strong> Bingo is naturally exciting and competitive. Students practice reading analog clocks quickly while listening to time expressed in multiple formats.
              </p>
            </div>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              Activity 3: Daily Schedule Timeline
            </h2>
            <p>
              Together as a class, create a visual timeline of the school day. For each activity (circle time, reading, recess, lunch, math), draw a small analog clock showing when it happens. Place the timeline on the wall and reference it throughout the day: &quot;Look at our timeline — the clock says 10:30, so it is time for recess!&quot;
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
              <p className="text-amber-800 font-bold text-sm">
                <strong>Why it works:</strong> Connecting clock reading to real events gives time concrete meaning. Students begin to associate specific clock positions with activities they care about.
              </p>
            </div>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              Activity 4: Interactive Clock Games on the Smartboard
            </h2>
            <p>
              Project an interactive clock game onto the classroom smartboard and have students take turns answering. With tools like <Link href="/" className="text-purple-600 font-extrabold underline hover:text-purple-800">Tick Tock Time</Link>, you can run through our online <Link href="/match-time" className="text-purple-600 font-extrabold underline hover:text-purple-800">clock reading quiz</Link> as a whole-class activity, with students voting or raising hands to select their answer. The progressive difficulty (from full hours to 5-minute intervals) naturally differentiates for mixed-ability classrooms.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
              <p className="text-amber-800 font-bold text-sm">
                <strong>Why it works:</strong> Digital interactive tools provide instant feedback and keep the whole class engaged. The visual animations and sound effects add excitement that paper materials cannot match.
              </p>
            </div>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              Activity 5: Clock Scavenger Hunt
            </h2>
            <p>
              Place printed analog clock cards around the classroom or hallway, each showing a different time. Give each student or pair a worksheet with digital times listed, and have them find the matching analog clock card for each one. When they find a match, they write down where they found it.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4">
              <p className="text-amber-800 font-bold text-sm">
                <strong>Why it works:</strong> Movement and exploration make learning active rather than passive. The matching format reinforces the connection between analog and digital representations.
              </p>
            </div>

            <h2 className="text-2xl font-extrabold text-purple-700 mt-8 mb-3">
              Making Time Stick
            </h2>
            <p>
              The common thread across all these activities is <strong className="text-purple-700">active engagement</strong>. Whether students are building, hunting, playing bingo, or dragging clock hands on a screen, they are doing far more than memorizing — they are developing a genuine understanding of how time works. Mix and rotate these activities throughout the week to keep practice fresh and enjoyable.
            </p>

            <div className="bg-gradient-to-r from-purple-50 to-sky-50 border-2 border-purple-100 rounded-2xl p-6 mt-8 text-center">
              <h3 className="text-xl font-extrabold text-purple-700 mb-2">
                Try Tick Tock Time in Your Classroom
              </h3>
              <p className="text-slate-600 font-bold mb-4">
                Free, no login required, and works on any device — perfect for smartboards, tablets, or individual computers.
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
