"use client";

import { useState, useEffect, useCallback } from "react";
import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, HelpCircle, FastForward, Check, ArrowLeft } from "lucide-react";
import AnalogClock from "@/components/AnalogClock";
import AnimatedButton from "@/components/AnimatedButton";
import ProgressBar from "@/components/ProgressBar";
import ScoreDisplay from "@/components/ScoreDisplay";
import Breadcrumbs from "@/components/Breadcrumbs";
import dynamic from "next/dynamic";
import { generateRandomTime, formatTime, ClockTime } from "@/utils/clockLogic";
import { useSound } from "@/hooks/useSound";

const BackgroundShapes = dynamic(() => import("@/components/BackgroundShapes"), { ssr: false });
const ConfettiEffect = dynamic(() => import("@/components/ConfettiEffect"), { ssr: false });
const ResultsModal = dynamic(() => import("@/components/ResultsModal"), { ssr: false });

const TOTAL_QUESTIONS = 10;

const CORRECT_FEEDBACK = [
  "Wow! Perfect match! 🌟",
  "Exactly! You are super fast! ⚡",
  "Outstanding clock setting! 🏆",
  "Yes! That is 100% correct! 🌈",
  "Double stars! Great job! ✨",
];

export default function SetClockGame() {
  const { playCorrect, playIncorrect } = useSound();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  // Time states
  const [targetTime, setTargetTime] = useState<ClockTime>({ hours: 7, minutes: 45 });
  const [currentHours, setCurrentHours] = useState(12);
  const [currentMinutes, setCurrentMinutes] = useState(0);

  // Game UI flow states
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [showHint, setShowHint] = useState(false);
  const [confettiActive, setConfettiActive] = useState(false);
  const [mascotText, setMascotText] = useState("Move the hands to match the time!");
  const [showResults, setShowResults] = useState(false);

  // Shake trigger
  const [shakeTrigger, setShakeTrigger] = useState(false);

  // Ramps up difficulty
  const getDifficultyForIndex = (index: number): number => {
    if (index < 2) return 1;
    if (index < 5) return 2;
    if (index < 8) return 3;
    return 4;
  };

  // Load a new target time
  const loadQuestion = useCallback((index: number) => {
    const diff = getDifficultyForIndex(index);
    const newTarget = generateRandomTime(diff);
    
    // Ensure starting clock position is NOT equal to target
    let startHours = 12;
    let startMinutes = 0;
    while (startHours === newTarget.hours && startMinutes === newTarget.minutes) {
      startHours = Math.floor(Math.random() * 12) + 1;
      startMinutes = Math.floor(Math.random() * 12) * 5;
    }

    setTargetTime(newTarget);
    setCurrentHours(startHours);
    setCurrentMinutes(startMinutes);
    setIsChecked(false);
    setIsCorrect(null);
    setShowHint(false);
    setConfettiActive(false);
    setMascotText(`Can you set the clock to ${formatTime(newTarget.hours, newTarget.minutes)}?`);
  }, []);

  // Initialize
  useEffect(() => {
    loadQuestion(0);
  }, [loadQuestion]);

  // Handle hand drag movements from AnalogClock
  const handleTimeChange = (h: number, m: number) => {
    if (isChecked && isCorrect) return; // disable change once correctly solved
    setCurrentHours(h);
    setCurrentMinutes(m);
    
    // If they change hands, reset warning feedback slightly
    if (isChecked) {
      setIsChecked(false);
      setIsCorrect(null);
    }
  };

  // Validate current clock settings
  const handleCheckAnswer = () => {
    const correct = currentHours === targetTime.hours && currentMinutes === targetTime.minutes;
    setIsCorrect(correct);
    setIsChecked(true);

    if (correct) {
      setScore((prev) => prev + 1);
      playCorrect();
      setConfettiActive(true);
      setMascotText(CORRECT_FEEDBACK[Math.floor(Math.random() * CORRECT_FEEDBACK.length)]);
    } else {
      playIncorrect();
      setShakeTrigger(true);
      setTimeout(() => setShakeTrigger(false), 500);

      // Tailored guiding mascot response
      if (currentHours === targetTime.hours && currentMinutes !== targetTime.minutes) {
        // Hour is correct, minutes wrong
        const minTip = targetTime.minutes === 0 ? "12" : String(targetTime.minutes / 5);
        setMascotText(`Your blue hour hand is perfect! Try moving the red minute hand to point at ${minTip} (${targetTime.minutes} minutes).`);
      } else if (currentMinutes === targetTime.minutes && currentHours !== targetTime.hours) {
        // Minutes correct, hour wrong
        setMascotText(`The red minute hand is in the right spot! Try moving the blue hour hand to ${targetTime.hours}.`);
      } else {
        // Both wrong
        setMascotText(`Let's try again! The short blue hand is for hours (${targetTime.hours}), and the long red hand is for minutes (${targetTime.minutes}).`);
      }
    }
  };

  // Show detailed textual guidance on how to position hands
  const handleHintClick = () => {
    setShowHint(true);
    const minutePosition = targetTime.minutes === 0 ? "12 (top)" : String(targetTime.minutes / 5);
    setMascotText(
      `Hint: Move the blue hour hand to ${targetTime.hours}, and the red minute hand to point at ${minutePosition}!`
    );
  };

  // Skip current question
  const handleSkipClick = () => {
    handleNextClick();
  };

  // Next question
  const handleNextClick = () => {
    if (questionIndex + 1 < TOTAL_QUESTIONS) {
      const nextIdx = questionIndex + 1;
      setQuestionIndex(nextIdx);
      loadQuestion(nextIdx);
    } else {
      setShowResults(true);
    }
  };

  // Restart
  const handleRestart = () => {
    setScore(0);
    setQuestionIndex(0);
    setShowResults(false);
    loadQuestion(0);
  };

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
        onHome={() => window.location.assign("/")}
      />

      <div className="w-full max-w-2xl flex flex-col gap-3 md:gap-4 z-10">
        {/* Back Navigation & Breadcrumbs */}
        <div className="w-full flex items-center gap-3 select-none">
          <Link href="/">
            <span className="p-2.5 bg-white/80 hover:bg-white text-purple-600 rounded-xl transition-colors border border-slate-200 shadow-sm flex items-center gap-2 cursor-pointer font-bold text-xs md:text-sm">
              <ArrowLeft className="w-4 h-4" />
              Exit Game
            </span>
          </Link>
          <Breadcrumbs items={[{ name: "Set the Clock", href: "/set-clock" }]} />
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
        <h1 className="sr-only">Set the Clock — Interactive Telling Time Practice for Kids</h1>

        {/* Game Area Card */}
        <m.div
          key={questionIndex}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="bg-white/80 backdrop-blur-md border-4 border-purple-200 rounded-3xl p-4 md:p-5 shadow-xl flex flex-col items-center"
        >
          {/* Target Title */}
          <div className="w-full text-center mb-3 select-none">
            <h2 className="text-lg md:text-xl font-bold text-slate-500 mb-0.5">
              Target Time:
            </h2>
            <m.div
              animate={isChecked && isCorrect ? { scale: [1, 1.15, 1] } : {}}
              className="inline-block bg-purple-600 text-white font-mono font-black text-3xl md:text-4xl px-4 py-1.5 rounded-2xl shadow-md border-b-4 border-purple-800"
            >
              {formatTime(targetTime.hours, targetTime.minutes)}
            </m.div>
          </div>

          {/* Interactive Clock Face */}
          <m.div
            animate={shakeTrigger ? { x: [0, -10, 10, -10, 10, 0] } : {}}
            transition={{ duration: 0.5 }}
            className={`mb-4 bg-white rounded-full p-2 border-4 shadow-md transition-colors ${
              isChecked && isCorrect
                ? "border-green-400 bg-green-50/50"
                : isChecked && !isCorrect
                ? "border-red-400"
                : "border-sky-100"
            }`}
          >
            <AnalogClock
              hours={currentHours}
              minutes={currentMinutes}
              interactive={!(isChecked && isCorrect)} // freeze interaction if solved correctly
              onTimeChange={handleTimeChange}
              size="md"
            />
          </m.div>

          {/* Mascot Section */}
          <div className="flex items-center gap-4 w-full max-w-md mb-4 justify-center select-none">
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

          {/* Interactive Control Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            {isChecked && isCorrect ? (
              <AnimatedButton
                variant="primary"
                onClick={handleNextClick}
                className="w-full gap-2 flex items-center justify-center border-b-4 py-2.5 text-lg"
              >
                {questionIndex + 1 === TOTAL_QUESTIONS ? "Finish Game! 🏆" : "Next Question ➡️"}
              </AnimatedButton>
            ) : (
              <>
                <AnimatedButton
                  variant="success"
                  onClick={handleCheckAnswer}
                  className="w-full sm:w-1/2 gap-2 flex items-center justify-center border-b-4 py-2.5 text-lg"
                >
                  <Check className="w-6 h-6" />
                  Check
                </AnimatedButton>
                
                <div className="flex gap-4 w-full sm:w-1/2">
                  <AnimatedButton
                    variant="yellow"
                    onClick={handleHintClick}
                    className="w-full gap-1 flex items-center justify-center border-b-4 py-2.5 text-base"
                  >
                    <HelpCircle className="w-5 h-5" />
                    Hint
                  </AnimatedButton>

                  <AnimatedButton
                    variant="ghost"
                    onClick={handleSkipClick}
                    className="w-full gap-1 flex items-center justify-center border-b-4 border-slate-300 py-2.5 text-base"
                  >
                    <FastForward className="w-5 h-5" />
                    Skip
                  </AnimatedButton>
                </div>
              </>
            )}
          </div>
        </m.div>
      </div>
    </main>
  );
}
