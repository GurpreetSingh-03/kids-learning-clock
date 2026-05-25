"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Play } from "lucide-react";
import AnimatedButton from "./AnimatedButton";
import AnalogClock from "./AnalogClock";
import { useSound } from "@/hooks/useSound";

interface GameCardProps {
  title: string;
  description: string;
  theme: "blue" | "orange";
  href: string;
  previewTime: { hours: number; minutes: number };
}

export default function GameCard({
  title,
  description,
  theme,
  href,
  previewTime,
}: GameCardProps) {
  const { playClick } = useSound();

  const isBlue = theme === "blue";

  const cardStyle = isBlue
    ? "from-indigo-400 to-sky-400 border-indigo-600 hover:shadow-[0_20px_40px_rgba(99,102,241,0.4)] shadow-[0_10px_20px_rgba(99,102,241,0.2)]"
    : "from-amber-400 to-orange-400 border-orange-600 hover:shadow-[0_20px_40px_rgba(249,115,22,0.4)] shadow-[0_10px_20px_rgba(249,115,22,0.2)]";

  const buttonVariant = isBlue ? "secondary" : "orange";

  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className={`
        relative w-full max-w-sm rounded-3xl p-6 bg-gradient-to-br border-b-[10px] text-white
        flex flex-col items-center justify-between text-center select-none min-h-[460px]
        ${cardStyle}
      `}
    >
      {/* Decorative Blob */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full filter blur-xl -z-10" />

      {/* Clock Preview Graphic */}
      <div className="bg-white/95 rounded-2xl p-4 mb-6 shadow-inner border border-white/20 scale-90 md:scale-95 transition-transform">
        <AnalogClock
          hours={previewTime.hours}
          minutes={previewTime.minutes}
          interactive={false}
          size="sm"
        />
      </div>

      {/* Card Info */}
      <div className="flex-1 flex flex-col items-center">
        <h3 className="text-3xl font-black mb-3 tracking-wide drop-shadow-sm font-sans">
          {title}
        </h3>
        <p className="text-white/90 text-base font-bold leading-relaxed mb-6 max-w-[280px]">
          {description}
        </p>
      </div>

      {/* Play Button */}
      <Link href={href} className="w-full">
        <span
          onClick={playClick}
          className="w-full block"
        >
          <AnimatedButton
            variant={buttonVariant}
            size="lg"
            className="w-full gap-2 border-b-4 hover:brightness-105 active:brightness-95 cursor-pointer"
          >
            <Play className="w-6 h-6 fill-current" />
            PLAY
          </AnimatedButton>
        </span>
      </Link>
    </motion.div>
  );
}
