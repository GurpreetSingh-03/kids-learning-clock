"use client";

import { useState, useEffect, useCallback, Suspense } from "react";
import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { ArrowLeft, Sparkles, Smile, RefreshCw } from "lucide-react";
import AnalogClock from "@/components/AnalogClock";
import AnimatedButton from "@/components/AnimatedButton";
import ProgressBar from "@/components/ProgressBar";
import ScoreDisplay from "@/components/ScoreDisplay";
import Breadcrumbs from "@/components/Breadcrumbs";
import dynamic from "next/dynamic";
import { generateRandomTime, generateMultipleChoiceOptions, formatTime, getDayPeriod, ClockTime } from "@/utils/clockLogic";
import { useSound } from "@/hooks/useSound";
import { useSettings } from "@/components/SettingsProvider";

const BackgroundShapes = dynamic(() => import("@/components/BackgroundShapes"), { ssr: false });
const ConfettiEffect = dynamic(() => import("@/components/ConfettiEffect"), { ssr: false });
const ResultsModal = dynamic(() => import("@/components/ResultsModal"), { ssr: false });

const TOTAL_QUESTIONS = 10;

// Mascot feedback phrases
const CORRECT_FEEDBACK = [
  "Fantastic job! ⭐",
  "You got it! Way to go! 🎈",
  "Super star clock reader! 🌟",
  "Brilliant! Keep it up! 🥳",
  "Woohoo! That's correct! 🌈",
];

const WRONG_FEEDBACK = [
  "Not quite, but you can do it! 💫",
  "Let's try another look! You're getting closer! ⏰",
  "Almost! Remember, the blue hand is shorter! 🔍",
  "Oops! Let's check the numbers. Try again next time! 🧸",
];

export function MatchTimeGame({
  grade,
  backUrl = "/",
  onExit,
}: {
  grade?: "kindergarten" | "1st-grade" | "2nd-grade";
  backUrl?: string;
  onExit?: () => void;
}) {
  const { playCorrect, playIncorrect } = useSound();
  const { is24h, ready } = useSettings();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  
  // Game states
  const [currentTime, setCurrentTime] = useState<ClockTime>({ hours: 12, minutes: 0 });
  const [options, setOptions] = useState<string[]>([]);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  
  // Visual effects
  const [confettiActive, setConfettiActive] = useState(false);
  const [mascotText, setMascotText] = useState("Let's tell the time! Look at the clock hands!");
  const [showResults, setShowResults] = useState(false);

  // Ramps up difficulty based on index and optional grade target
  const getDifficultyForIndex = (index: number): number => {
    if (grade === "kindergarten") return 1; // Hours only
    if (grade === "1st-grade") {
      return index < 5 ? 1 : 2; // Hours and Half-hours
    }
    if (grade === "2nd-grade") {
      if (index < 3) return 2; // Start with half hours
      if (index < 7) return 3; // Introduce quarter hours
      return 4; // End with 5-minute intervals
    }
    // Default progression
    if (index < 2) return 1;
    if (index < 5) return 2;
    if (index < 8) return 3;
    return 4;
  };

  // Generate a new question
  const loadQuestion = useCallback((index: number) => {
    const diff = getDifficultyForIndex(index);
    const newTime = generateRandomTime(diff, is24h);
    const newOptions = generateMultipleChoiceOptions(newTime, 4, is24h);

    setCurrentTime(newTime);
    setOptions(newOptions);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(null);
    setConfettiActive(false);
    setMascotText("What time does the clock show?");
  }, [is24h]);

  // Load the current question once settings are hydrated, and reload it if the
  // 12h/24h format changes mid-game so the displayed options match.
  useEffect(() => {
    if (ready) loadQuestion(questionIndex);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ready, is24h]);

  // Option select handler
  const handleOptionClick = (option: string) => {
    if (isAnswered) return;
    
    setSelectedOption(option);
    setIsAnswered(true);

    const correctStr = formatTime(currentTime.hours, currentTime.minutes, is24h);
    const correct = option === correctStr;
    setIsCorrect(correct);

    if (correct) {
      setScore((prev) => prev + 1);
      playCorrect();
      setConfettiActive(true);
      setMascotText(CORRECT_FEEDBACK[Math.floor(Math.random() * CORRECT_FEEDBACK.length)]);
    } else {
      playIncorrect();
      setMascotText(WRONG_FEEDBACK[Math.floor(Math.random() * WRONG_FEEDBACK.length)]);
    }
  };

  // Move to next question or end game
  const handleNextClick = () => {
    if (questionIndex + 1 < TOTAL_QUESTIONS) {
      const nextIdx = questionIndex + 1;
      setQuestionIndex(nextIdx);
      loadQuestion(nextIdx);
    } else {
      setShowResults(true);
    }
  };

  // Restart game
  const handleRestart = () => {
    setScore(0);
    setQuestionIndex(0);
    setShowResults(false);
    loadQuestion(0);
  };

  const correctOptionStr = formatTime(currentTime.hours, currentTime.minutes, is24h);
  const dayPeriod = getDayPeriod(currentTime.hours);

  return (
    <main className="min-h-screen relative flex flex-col items-center px-4 py-6 md:py-8 overflow-hidden">
      <BackgroundShapes />
      <ConfettiEffect active={confettiActive} />

      {/* Results Screen */}
      <ResultsModal
        isOpen={showResults}
        score={score}
        totalQuestions={TOTAL_QUESTIONS}
        onPlayAgain={handleRestart}
        onHome={() => {
          if (onExit) {
            onExit();
          } else {
            window.location.assign(backUrl);
          }
        }}
      />

      <div className="w-full max-w-2xl flex flex-col gap-3 md:gap-4 z-10">
        {/* Back Navigation & Breadcrumbs */}
        <div className="w-full flex items-center gap-3 select-none">
          <button
            onClick={() => {
              if (onExit) {
                onExit();
              } else {
                window.location.assign(backUrl);
              }
            }}
            className="p-2.5 bg-white/80 hover:bg-white text-purple-600 rounded-xl transition-colors border border-slate-200 shadow-sm flex items-center gap-2 cursor-pointer font-bold text-xs md:text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Exit Game
          </button>
          <Breadcrumbs items={[{ name: "Match the Time", href: `/match-time${grade ? `?grade=${grade}` : ""}` }]} />
        </div>

        {/* Compact Header Layout: Side by Side */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex-1 w-full">
            <ScoreDisplay
              score={score}
              questionNumber={questionIndex + 1}
              totalQuestions={TOTAL_QUESTIONS}
            />
          </div>
          <div className="w-full sm:w-48 flex-shrink-0 flex justify-center">
            <ProgressBar current={questionIndex + 1} total={TOTAL_QUESTIONS} />
          </div>
        </div>

        {/* SEO heading */}
        <h1 className="sr-only">Match the Time — Clock Reading Game for Kids</h1>

        {/* Game Area Card */}
        <m.div
          key={questionIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="bg-white/80 backdrop-blur-md border-4 border-purple-200 rounded-3xl p-4 md:p-5 shadow-xl flex flex-col items-center"
        >
          {/* Difficulty Badge */}
          <div className="mb-2 bg-sky-100 border border-sky-200 text-sky-700 px-3 py-0.5 rounded-full font-bold text-xs uppercase tracking-wider select-none">
            {questionIndex < 2
              ? "Level 1: Hour Time ⏰"
              : questionIndex < 5
              ? "Level 2: Half Hours 🌟"
              : questionIndex < 8
              ? "Level 3: Quarter Hours 🎈"
              : "Level 4: Master Clock 🏆"}
          </div>

          {/* In 24-hour mode the analog face (1–12) is ambiguous, so show an
              AM/PM cue that tells kids which half of the day it is. */}
          {is24h && (
            <div
              className={`mb-2 flex items-center gap-1.5 px-3 py-0.5 rounded-full font-black text-xs uppercase tracking-wider select-none border ${
                dayPeriod === "am"
                  ? "bg-sky-100 border-sky-200 text-sky-700"
                  : "bg-indigo-900 border-indigo-950 text-indigo-100"
              }`}
            >
              {dayPeriod === "am" ? "☀️ Morning (AM)" : "🌙 Afternoon / Night (PM)"}
            </div>
          )}

          {/* Clock Face container */}
          <div className="mb-4 bg-white rounded-full p-1.5 border-4 border-sky-100 shadow-md">
            <AnalogClock
              hours={currentTime.hours}
              minutes={currentTime.minutes}
              interactive={false}
              size="sm"
            />
          </div>

          {/* Mascot Section */}
          <div className="flex items-center gap-4 w-full max-w-md mb-6 justify-center select-none">
            <m.div
              animate={
                isCorrect === true
                  ? { y: [0, -15, 0], rotate: [0, 8, -8, 0] }
                  : isCorrect === false
                  ? { x: [0, -6, 6, -6, 6, 0] }
                  : { y: [0, -4, 0] }
              }
              transition={{
                duration: isCorrect === null ? 4 : 0.5,
                repeat: isCorrect === null ? Infinity : 0,
                ease: "easeInOut",
              }}
              className="w-16 h-16 md:w-20 md:h-20 relative flex-shrink-0 drop-shadow-md rounded-full bg-white/60 p-1 border border-white/40"
            >
              <Image
                src="/clock_mascot.png"
                alt="Toby Mascot"
                width={80}
                height={80}
                className="object-contain"
              />
            </m.div>

            {/* Mascot Speech Bubble */}
            <div className="flex-1 bg-white border-2 border-purple-300 rounded-2xl px-4 py-2.5 shadow-sm relative">
              <div className="absolute left-[-10px] top-[50%] translate-y-[-50%] w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-r-[10px] border-r-purple-300" />
              <div className="absolute left-[-7px] top-[50%] translate-y-[-50%] w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[8px] border-r-white" />
              <p className="text-purple-800 font-extrabold text-sm md:text-base leading-snug">
                {mascotText}
              </p>
            </div>
          </div>

          {/* Multiple Choice Buttons */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-md">
            {options.map((option) => {
              const isSelected = selectedOption === option;
              const isCorrectOption = option === correctOptionStr;
              
              let buttonVariant: "ghost" | "success" | "danger" | "primary" = "ghost";
              if (isAnswered) {
                if (isCorrectOption) {
                  buttonVariant = "success";
                } else if (isSelected) {
                  buttonVariant = "danger";
                }
              }

              // Apply shake animation if incorrect selection
              const shouldWiggle = isAnswered && isSelected && !isCorrect;

              return (
                <m.div
                  key={option}
                  animate={shouldWiggle ? { x: [0, -10, 10, -10, 10, 0] } : {}}
                  transition={{ duration: 0.4 }}
                >
                  <AnimatedButton
                    variant={buttonVariant}
                    onClick={() => handleOptionClick(option)}
                    disabled={isAnswered}
                    className="w-full py-2.5 text-xl font-black md:py-3 font-mono shadow-md"
                  >
                    {option}
                  </AnimatedButton>
                </m.div>
              );
            })}
          </div>

          {/* Bottom Actions: Next Question */}
          <AnimatePresence>
            {isAnswered && (
              <m.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="mt-4 w-full max-w-md"
              >
                <AnimatedButton
                  variant="primary"
                  onClick={handleNextClick}
                  className="w-full gap-2 flex items-center justify-center border-b-4 py-2.5 text-lg"
                >
                  {questionIndex + 1 === TOTAL_QUESTIONS ? "Finish Game! 🏆" : "Next Question ➡️"}
                </AnimatedButton>
              </m.div>
            )}
          </AnimatePresence>
        </m.div>
      </div>
    </main>
  );
}

function MatchTimePageContent() {
  const searchParams = useSearchParams();
  const grade = searchParams.get("grade") as any;
  return <MatchTimeGame grade={grade} backUrl="/" />;
}

export default function MatchTimePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-slate-50 font-sans text-purple-600 text-xl font-bold">
        Loading Tick Tock Quiz... ⏰
      </div>
    }>
      <MatchTimePageContent />
    </Suspense>
  );
}
