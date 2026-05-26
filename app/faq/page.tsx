"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronDown, HelpCircle } from "lucide-react";
import BackgroundShapes from "@/components/BackgroundShapes";
import AnimatedButton from "@/components/AnimatedButton";
import Breadcrumbs from "@/components/Breadcrumbs";

const FAQ_ITEMS = [
  {
    question: "What is Tick Tock Time?",
    answer:
      "Tick Tock Time is a free, interactive online game that teaches children aged 4–8 how to read analog clocks. It features two game modes: Match the Time and Set the Clock, both designed with colorful visuals and helpful feedback from Toby the Clock Buddy.",
  },
  {
    question: "What age group is Tick Tock Time designed for?",
    answer:
      "Tick Tock Time is designed for children between 4 and 8 years old, covering kindergarten through second grade. The difficulty levels adapt from simple hour-only times to 5-minute intervals, so it grows with your child.",
  },
  {
    question: "Is Tick Tock Time free to use?",
    answer:
      "Yes! Tick Tock Time is completely free. There are no in-app purchases, subscriptions, or hidden fees. It is also ad-free to ensure a safe and focused learning environment for children.",
  },
  {
    question: "How does the Match the Time game work?",
    answer:
      "In Match the Time, a large analog clock face is displayed and the child must choose the correct digital time from four multiple-choice options. Difficulty increases across 10 questions — starting with full hours and progressing to 5-minute increments.",
  },
  {
    question: "How does the Set the Clock game work?",
    answer:
      "In Set the Clock, a digital target time is shown and the child drags the hour and minute hands on an interactive analog clock face to match it. Toby the mascot provides real-time hints, like telling the child which hand needs adjusting.",
  },
  {
    question: "Does Tick Tock Time collect any personal data from children?",
    answer:
      "No. Tick Tock Time does not collect any personal data, does not require registration or account creation, and does not use cookies or advertising trackers. Everything runs locally in your browser. We do not collect personal information from children and are committed to protecting children's privacy in accordance with COPPA guidelines.",
  },
  {
    question: "Can teachers use Tick Tock Time in the classroom?",
    answer:
      "Absolutely! Teachers and schools are encouraged to use Tick Tock Time as a supplementary learning tool. You can project the game on a smartboard for group activities or have students play individually on tablets or computers.",
  },
  {
    question: "What devices and browsers are supported?",
    answer:
      "Tick Tock Time works on any modern web browser including Chrome, Safari, Firefox, and Edge. It is fully responsive and works beautifully on desktops, laptops, tablets, and smartphones.",
  },
  {
    question: "How can I help my child get the most out of Tick Tock Time?",
    answer:
      "Play alongside your child! Ask guiding questions like 'Which hand is shorter?' or 'How many minutes pass when the big hand moves from 12 to 1?' Encourage them to use the Set the Clock mode to build muscle memory with the clock hands.",
  },
  {
    question: "How do I contact the Tick Tock Time team?",
    answer:
      "You can reach us through our Contact page or by emailing kidslearningclock@gmail.com. We welcome feedback, feature suggestions, and partnership inquiries from parents, teachers, and educators.",
  },
  {
    question: "At what age should a child learn to tell time?",
    answer:
      "Most children begin learning about time between ages 4 and 5, starting with general concepts like morning and afternoon. By age 5–6, many children can read full-hour times (o'clock). Reading half hours and quarter hours typically develops between ages 6 and 7, with 5-minute precision following around age 7–8. Every child develops at their own pace, so there is no need to rush.",
  },
  {
    question: "What is the best way to teach a child to tell time?",
    answer:
      "Start with the hour hand only — focus on o'clock times first. Once your child is comfortable, introduce half hours (:30), then quarter hours (:15 and :45), and finally 5-minute intervals. Use a combination of hands-on practice (moving clock hands), interactive games, and real-world conversations about time throughout the day. Keep sessions short (5–10 minutes) and always make it feel like play, not a test.",
  },
  {
    question: "Why is learning to read an analog clock still important?",
    answer:
      "Analog clocks teach children more than just telling time. They help build spatial reasoning (understanding angles and positions), reinforce skip counting by 5s, introduce fractions visually (quarter past, half past), and develop number sense. These cognitive skills support broader math learning. Digital clocks show a number, but analog clocks show the structure of time itself.",
  },
  {
    question: "What is the difference between the hour hand and the minute hand?",
    answer:
      "The hour hand is the shorter hand on an analog clock — it moves slowly and points to the current hour. The minute hand is the longer hand — it moves faster and points to the current minutes past the hour. In Tick Tock Time, the hour hand is colored blue and the minute hand is colored red to help children distinguish between them easily.",
  },
  {
    question: "What do quarter past, half past, and quarter to mean?",
    answer:
      "'Quarter past' means 15 minutes after the hour (e.g., 3:15 is quarter past 3). 'Half past' means 30 minutes after the hour (e.g., 3:30 is half past 3). 'Quarter to' means 15 minutes before the next hour (e.g., 2:45 is quarter to 3). These terms come from dividing the clock face into quarters — like slices of a pie.",
  },
];

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: typeof FAQ_ITEMS[number];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={false}
      className="border-2 border-purple-100 rounded-2xl overflow-hidden bg-white/70"
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-4 md:p-5 text-left font-black text-purple-700 hover:bg-purple-50/50 transition-colors"
      >
        <span className="text-base md:text-lg">{item.question}</span>
        <ChevronDown
          className={`w-5 h-5 text-purple-500 transition-transform duration-300 flex-shrink-0 ml-2 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-4 pt-0">
              <p className="text-slate-600 font-bold text-sm md:text-base leading-relaxed border-t-2 border-purple-50 pt-3">
                {item.answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="min-h-screen relative flex flex-col items-center px-4 py-8 overflow-hidden">
      <BackgroundShapes />

      <div className="w-full max-w-2xl z-10 flex flex-col gap-6">
        {/* Back Navigation & Breadcrumbs */}
        <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-3 select-none">
          <div className="flex items-center gap-3">
            <Link href="/">
              <span className="p-2.5 bg-white/80 hover:bg-white text-purple-600 rounded-xl transition-colors border border-slate-200 shadow-sm flex items-center gap-2 cursor-pointer font-bold text-xs md:text-sm">
                <ArrowLeft className="w-5 h-5" />
                Main Menu
              </span>
            </Link>
            <Breadcrumbs items={[{ name: "FAQ", href: "/faq" }]} />
          </div>
          <div className="bg-amber-500 text-white font-extrabold px-4 py-1.5 rounded-full text-xs md:text-sm shadow-sm select-none flex items-center gap-1.5 w-fit self-end sm:self-auto">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
        </div>

        {/* Content Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="bg-white/90 backdrop-blur-md border-4 border-purple-200 rounded-3xl p-6 md:p-8 shadow-xl"
        >
          {/* Header with Mascot */}
          <div className="flex flex-col sm:flex-row items-center gap-5 mb-8 border-b-2 border-slate-100 pb-6">
            <motion.div
              animate={{ y: [0, -6, 0], rotate: [0, 3, -3, 0] }}
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
            </motion.div>
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-black text-purple-700 font-sans tracking-wide">
                Frequently Asked Questions
              </h1>
              <p className="text-slate-500 font-bold mt-1">
                Everything you need to know about Tick Tock Time! 🤔
              </p>
            </div>
          </div>

          <div className="space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <AccordionItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                onToggle={() => handleToggle(index)}
              />
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-8 pt-6 border-t-2 border-slate-100 text-center space-y-3">
            <p className="text-slate-500 font-bold text-sm">
              Still have questions? We&apos;d love to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact">
                <AnimatedButton
                  variant="primary"
                  className="px-6 py-2.5 w-full sm:w-auto"
                >
                  Contact Us 💌
                </AnimatedButton>
              </Link>
              <Link href="/">
                <AnimatedButton
                  variant="ghost"
                  className="px-6 py-2.5 w-full sm:w-auto"
                >
                  Play the Game ⏰
                </AnimatedButton>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
