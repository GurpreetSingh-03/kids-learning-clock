"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Sparkles, Smile, RefreshCw } from "lucide-react";
import AnalogClock from "@/components/AnalogClock";
import AnimatedButton from "@/components/AnimatedButton";
import ProgressBar from "@/components/ProgressBar";
import ScoreDisplay from "@/components/ScoreDisplay";
import ConfettiEffect from "@/components/ConfettiEffect";
import ResultsModal from "@/components/ResultsModal";
import BackgroundShapes from "@/components/BackgroundShapes";
import { generateRandomTime, generateMultipleChoiceOptions, formatTime, ClockTime } from "@/utils/clockLogic";
import { useSound } from "@/hooks/useSound";

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

export default function MatchTimeGame() {
  const { playCorrect, playIncorrect } = useSound();
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

  // Ramps up difficulty: 1 (Q1-2), 2 (Q3-5), 3 (Q6-8), 4 (Q9-10)
  const getDifficultyForIndex = (index: number): number => {
    if (index < 2) return 1;
    if (index < 5) return 2;
    if (index < 8) return 3;
    return 4;
  };

  // Generate a new question
  const loadQuestion = useCallback((index: number) => {
    const diff = getDifficultyForIndex(index);
    const newTime = generateRandomTime(diff);
    const newOptions = generateMultipleChoiceOptions(newTime, 4);

    setCurrentTime(newTime);
    setOptions(newOptions);
    setSelectedOption(null);
    setIsAnswered(false);
    setIsCorrect(null);
    setConfettiActive(false);
    setMascotText("What time does the clock show?");
  }, []);

  // Initialize first question
  useEffect(() => {
    loadQuestion(0);
  }, [loadQuestion]);

  // Option select handler
  const handleOptionClick = (option: string) => {
    if (isAnswered) return;
    
    setSelectedOption(option);
    setIsAnswered(true);

    const correctStr = formatTime(currentTime.hours, currentTime.minutes);
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

  const correctOptionStr = formatTime(currentTime.hours, currentTime.minutes);

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

        {/* Game Area Card */}
        <motion.div
          key={questionIndex} // keyframes trigger slide-in on next question
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
            <motion.div
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
            </motion.div>

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
                <motion.div
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
                </motion.div>
              );
            })}
          </div>

          {/* Bottom Actions: Next Question */}
          <AnimatePresence>
            {isAnswered && (
              <motion.div
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
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
