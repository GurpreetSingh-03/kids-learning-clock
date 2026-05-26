"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  BookOpen,
  Clock,
  Lightbulb,
  GraduationCap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import BackgroundShapes from "@/components/BackgroundShapes";
import AnimatedButton from "@/components/AnimatedButton";
import Breadcrumbs from "@/components/Breadcrumbs";

const BLOG_ARTICLES = [
  {
    slug: "how-to-teach-kids-to-tell-time",
    title: "How to Teach Kids to Tell Time: A Step-by-Step Guide",
    excerpt:
      "Learn the best strategies for teaching children to read analog clocks, from understanding the hour hand to mastering 5-minute intervals.",
    icon: GraduationCap,
    color: "sky",
    readTime: "6 min read",
    tag: "Guide",
  },
  {
    slug: "analog-vs-digital-clocks",
    title: "Analog vs. Digital Clocks: Why Kids Should Learn Both",
    excerpt:
      "Discover why learning analog clocks builds stronger cognitive skills and spatial reasoning compared to digital-only time reading.",
    icon: Clock,
    color: "purple",
    readTime: "4 min read",
    tag: "Education",
  },
  {
    slug: "fun-clock-activities-for-classroom",
    title: "5 Fun Clock Activities for the Classroom",
    excerpt:
      "Engage your students with these creative hands-on activities that make learning to tell time exciting and memorable.",
    icon: Lightbulb,
    color: "amber",
    readTime: "5 min read",
    tag: "Activities",
  },
  {
    slug: "time-telling-milestones-by-age",
    title: "Time-Telling Milestones: What Kids Should Know by Age",
    excerpt:
      "A parent-friendly breakdown of what clock reading skills to expect at ages 4, 5, 6, 7, and 8 — and how to support each stage.",
    icon: BookOpen,
    color: "emerald",
    readTime: "5 min read",
    tag: "Parenting",
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; tag: string }> = {
  sky: {
    bg: "bg-sky-50",
    border: "border-sky-200",
    text: "text-sky-600",
    tag: "bg-sky-100 text-sky-700",
  },
  purple: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    text: "text-purple-600",
    tag: "bg-purple-100 text-purple-700",
  },
  amber: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    text: "text-amber-600",
    tag: "bg-amber-100 text-amber-700",
  },
  emerald: {
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    text: "text-emerald-600",
    tag: "bg-emerald-100 text-emerald-700",
  },
};

export default function BlogPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 120, damping: 14 },
    },
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center px-4 py-8 overflow-hidden">
      <BackgroundShapes />

      <div className="w-full max-w-3xl z-10 flex flex-col gap-6">
        {/* Back Navigation & Breadcrumbs */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 select-none">
          <div className="flex items-center gap-3">
            <Link href="/">
              <span className="p-2.5 bg-white/80 hover:bg-white text-purple-600 rounded-xl transition-colors border border-slate-200 shadow-sm flex items-center gap-2 cursor-pointer font-bold text-xs md:text-sm">
                <ArrowLeft className="w-5 h-5" />
                Main Menu
              </span>
            </Link>
            <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
          </div>
          <div className="bg-gradient-to-r from-purple-600 to-sky-500 text-white font-extrabold px-4 py-1.5 rounded-full text-xs md:text-sm shadow-sm select-none flex items-center gap-1.5 w-fit self-end sm:self-auto">
            <BookOpen className="w-4 h-4" />
            Blog & Resources
          </div>
        </div>

        {/* Header Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-white/90 backdrop-blur-md border-4 border-purple-200 rounded-3xl p-6 md:p-8 shadow-xl"
        >
          {/* Hero with Mascot */}
          <div className="flex flex-col sm:flex-row items-center gap-5 mb-6 border-b-2 border-slate-100 pb-6">
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [0, 2, -2, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="w-20 h-20 relative flex-shrink-0 drop-shadow-md rounded-full bg-white p-2 border border-purple-200"
            >
              <Image
                src="/clock_mascot.png"
                alt="Toby the Clock Buddy"
                width={80}
                height={80}
                className="object-contain"
              />
              <motion.span
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute -top-1 -right-1 text-lg select-none"
              >
                ✨
              </motion.span>
            </motion.div>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-black text-purple-700 font-sans tracking-wide">
                Tips & Resources
              </h1>
              <p className="text-slate-500 font-bold mt-1">
                Helpful articles for parents and teachers on teaching kids to tell
                time 📚
              </p>
            </div>
          </div>

          {/* Articles Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {BLOG_ARTICLES.map((article) => {
              const colors = colorMap[article.color];
              const IconComp = article.icon;

              return (
                <motion.div key={article.slug} variants={cardVariants}>
                  <Link href={`/blog/${article.slug}`} className="block">
                    <article
                      className={`group ${colors.bg} border-2 ${colors.border} rounded-2xl p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer relative overflow-hidden`}
                    >
                      {/* Tag */}
                      <div className="flex items-center justify-between mb-3">
                        <span
                          className={`${colors.tag} font-bold text-xs px-2.5 py-0.5 rounded-full`}
                        >
                          {article.tag}
                        </span>
                        <span className="text-slate-400 font-bold text-xs">
                          {article.readTime}
                        </span>
                      </div>

                      {/* Icon */}
                      <div
                        className={`w-10 h-10 ${colors.bg} border ${colors.border} rounded-xl flex items-center justify-center mb-3`}
                      >
                        <IconComp className={`w-5 h-5 ${colors.text}`} />
                      </div>

                      {/* Title */}
                      <h2
                        className={`text-lg font-extrabold ${colors.text} mb-2 leading-snug group-hover:underline decoration-2 underline-offset-2`}
                      >
                        {article.title}
                      </h2>

                      {/* Excerpt */}
                      <p className="text-slate-600 font-bold text-sm leading-relaxed mb-3">
                        {article.excerpt}
                      </p>

                      {/* Read Article CTA */}
                      <div className="flex items-center gap-1.5 text-purple-600 font-extrabold text-xs">
                        <ArrowRight className="w-3.5 h-3.5" />
                        Read Article
                      </div>
                    </article>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Newsletter / CTA Section */}
          <div className="mt-8 pt-6 border-t-2 border-slate-100">
            <div className="bg-gradient-to-r from-purple-50 to-sky-50 border-2 border-purple-100 rounded-2xl p-5 text-center">
              <h3 className="text-lg font-extrabold text-purple-700 mb-1">
                More Articles Coming Soon! 🚀
              </h3>
              <p className="text-slate-500 font-bold text-sm mb-4">
                We&apos;re working on in-depth guides and activities. In the meantime,
                try our interactive games!
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="/match-time">
                  <AnimatedButton
                    variant="primary"
                    className="px-6 py-2.5 w-full sm:w-auto flex items-center justify-center gap-1.5"
                  >
                    Match the Time
                    <ArrowRight className="w-4 h-4" />
                  </AnimatedButton>
                </Link>
                <Link href="/set-clock">
                  <AnimatedButton
                    variant="ghost"
                    className="px-6 py-2.5 w-full sm:w-auto flex items-center justify-center gap-1.5"
                  >
                    Set the Clock
                    <ArrowRight className="w-4 h-4" />
                  </AnimatedButton>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
