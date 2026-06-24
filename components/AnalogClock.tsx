"use client";

import { useRef, useState } from "react";
import { getHourAngle, getMinuteAngle, getMinutesFromAngle, getHoursFromAngle } from "@/utils/clockLogic";
import { useSound } from "@/hooks/useSound";
import { useSettings, type ClockSkin } from "@/components/SettingsProvider";

interface AnalogClockProps {
  hours: number;
  minutes: number;
  interactive?: boolean;
  onTimeChange?: (hours: number, minutes: number) => void;
  size?: "sm" | "md" | "lg";
}

// Face/rim/accent colors per skin. Hands stay blue (hour) + red (minute)
// across every skin so the in-game "blue/red hand" hints remain accurate.
// Classes are written as full literal strings so Tailwind can detect them.
const SKIN_STYLES: Record<
  ClockSkin,
  { shadow: string; face: string; rim: string; inner: string; tickMajor: string; tickMinor: string; num: string }
> = {
  classic: { shadow: "fill-purple-600/10", face: "fill-amber-50", rim: "stroke-sky-400", inner: "stroke-sky-300", tickMajor: "stroke-purple-400", tickMinor: "stroke-purple-200", num: "fill-purple-700" },
  candy: { shadow: "fill-pink-500/10", face: "fill-rose-50", rim: "stroke-pink-400", inner: "stroke-pink-300", tickMajor: "stroke-fuchsia-400", tickMinor: "stroke-pink-200", num: "fill-fuchsia-600" },
  ocean: { shadow: "fill-teal-500/10", face: "fill-cyan-50", rim: "stroke-teal-400", inner: "stroke-teal-300", tickMajor: "stroke-cyan-500", tickMinor: "stroke-cyan-200", num: "fill-teal-700" },
  sunset: { shadow: "fill-orange-500/10", face: "fill-orange-50", rim: "stroke-amber-400", inner: "stroke-amber-300", tickMajor: "stroke-orange-400", tickMinor: "stroke-orange-200", num: "fill-orange-700" },
};

export default function AnalogClock({
  hours,
  minutes,
  interactive = false,
  onTimeChange,
  size = "md",
}: AnalogClockProps) {
  const { playTick } = useSound();
  const { skin } = useSettings();
  const sk = SKIN_STYLES[skin] ?? SKIN_STYLES.classic;
  const svgRef = useRef<SVGSVGElement | null>(null);
  const [activeHand, setActiveHand] = useState<"hour" | "minute" | null>(null);

  // Dimension scaling
  const sizeClasses = {
    sm: "w-48 h-48 md:w-56 md:h-56",
    md: "w-64 h-64 md:w-80 md:h-80",
    lg: "w-80 h-80 md:w-96 md:h-96",
  };

  const center = 150;
  const radius = 135;

  // Hand angles
  const hourAngle = getHourAngle(hours, minutes);
  const minuteAngle = getMinuteAngle(minutes);

  // Pointer drag start handler
  const handlePointerDown = (hand: "hour" | "minute") => (e: React.PointerEvent) => {
    if (!interactive) return;
    e.preventDefault();
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
    setActiveHand(hand);
  };

  // Pointer drag move handler
  const handlePointerMove = (e: React.PointerEvent) => {
    if (!interactive || !activeHand || !svgRef.current || !onTimeChange) return;

    const rect = svgRef.current.getBoundingClientRect();
    const clientX = e.clientX;
    const clientY = e.clientY;

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = clientX - centerX;
    const dy = clientY - centerY;

    // Angle relative to positive y-axis (12 o'clock)
    let rad = Math.atan2(dy, dx);
    let deg = rad * (180 / Math.PI) + 90;
    if (deg < 0) deg += 360;

    if (activeHand === "minute") {
      const nextMinutes = getMinutesFromAngle(deg, 5);
      if (nextMinutes !== minutes) {
        playTick();
        onTimeChange(hours, nextMinutes);
      }
    } else if (activeHand === "hour") {
      const nextHours = getHoursFromAngle(deg);
      if (nextHours !== hours) {
        playTick();
        onTimeChange(nextHours, minutes);
      }
    }
  };

  // Pointer drag end handler
  const handlePointerUp = (e: React.PointerEvent) => {
    if (!interactive || !activeHand) return;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    setActiveHand(null);
  };

  // Clock numbers positioning helper
  const clockNumbers = Array.from({ length: 12 }).map((_, i) => {
    const num = i + 1;
    const angle = (num * 30 * Math.PI) / 180;
    const r = radius - 30; // distance from center
    const x = center + r * Math.sin(angle);
    const y = center - r * Math.cos(angle);
    return { num, x, y };
  });

  // Ticks positioning helper (every 5 mins / 30 deg, and every minute / 6 deg)
  const clockTicks = Array.from({ length: 60 }).map((_, i) => {
    const angle = (i * 6 * Math.PI) / 180;
    const isFiveMin = i % 5 === 0;
    const rStart = radius - (isFiveMin ? 12 : 6);
    const rEnd = radius - 2;
    const x1 = center + rStart * Math.sin(angle);
    const y1 = center - rStart * Math.cos(angle);
    const x2 = center + rEnd * Math.sin(angle);
    const y2 = center - rEnd * Math.cos(angle);
    return { id: i, x1, y1, x2, y2, isFiveMin };
  });

  return (
    <div className="relative flex items-center justify-center select-none touch-none">
      <svg
        ref={svgRef}
        viewBox="0 0 300 300"
        className={`${sizeClasses[size]} drop-shadow-xl`}
        onPointerMove={handlePointerMove}
      >
        {/* Outer Rim Shadow */}
        <circle cx={center} cy={center} r={radius} className={sk.shadow} />

        {/* Outer Rim Border */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          className={`${sk.face} ${sk.rim} stroke-[10]`}
        />

        {/* Inner Border Ring */}
        <circle
          cx={center}
          cy={center}
          r={radius - 8}
          className={`fill-none ${sk.inner} stroke-[2] stroke-dasharray-[4_4]`}
        />

        {/* Clock Ticks */}
        {clockTicks.map((tick) => (
          <line
            key={tick.id}
            x1={tick.x1}
            y1={tick.y1}
            x2={tick.x2}
            y2={tick.y2}
            className={
              tick.isFiveMin
                ? `${sk.tickMajor} stroke-[3]`
                : `${sk.tickMinor} stroke-[1.5]`
            }
          />
        ))}

        {/* Numbers 1-12 */}
        {clockNumbers.map((item) => (
          <text
            key={item.num}
            x={item.x}
            y={item.y + 7} // offset vertically for alignment
            className={`${sk.num} text-[26px] font-black text-center cursor-default select-none font-sans`}
            textAnchor="middle"
          >
            {item.num}
          </text>
        ))}

        {/* HOUR HAND (Blue) */}
        <g transform={`rotate(${hourAngle} ${center} ${center})`}>
          {/* Invisible thick line for easier hit detection on mobile */}
          {interactive && (
            <line
              x1={center}
              y1={center}
              x2={center}
              y2={center - 70}
              className="stroke-transparent stroke-[24] cursor-pointer"
              onPointerDown={handlePointerDown("hour")}
              onPointerUp={handlePointerUp}
            />
          )}
          {/* Visible Hour Hand */}
          <line
            x1={center}
            y1={center + 15} // extends slightly backwards
            x2={center}
            y2={center - 70}
            className="stroke-sky-500 stroke-[10]"
            strokeLinecap="round"
          />
          {/* Drag Handle for Hour Hand */}
          {interactive && (
            <circle
              cx={center}
              cy={center - 70}
              r={activeHand === "hour" ? 16 : 12}
              className={`fill-sky-400 stroke-white stroke-[3] cursor-pointer shadow-md transition-all duration-150 ${
                activeHand === "hour" ? "fill-sky-300" : ""
              }`}
              onPointerDown={handlePointerDown("hour")}
              onPointerUp={handlePointerUp}
            />
          )}
        </g>

        {/* MINUTE HAND (Red) */}
        <g transform={`rotate(${minuteAngle} ${center} ${center})`}>
          {/* Invisible thick line for hit detection */}
          {interactive && (
            <line
              x1={center}
              y1={center}
              x2={center}
              y2={center - 105}
              className="stroke-transparent stroke-[24] cursor-pointer"
              onPointerDown={handlePointerDown("minute")}
              onPointerUp={handlePointerUp}
            />
          )}
          {/* Visible Minute Hand */}
          <line
            x1={center}
            y1={center + 20} // extends backwards
            x2={center}
            y2={center - 105}
            className="stroke-red-500 stroke-[6]"
            strokeLinecap="round"
          />
          {/* Drag Handle for Minute Hand */}
          {interactive && (
            <circle
              cx={center}
              cy={center - 105}
              r={activeHand === "minute" ? 16 : 12}
              className={`fill-red-400 stroke-white stroke-[3] cursor-pointer shadow-md transition-all duration-150 ${
                activeHand === "minute" ? "fill-red-300" : ""
              }`}
              onPointerDown={handlePointerDown("minute")}
              onPointerUp={handlePointerUp}
            />
          )}
        </g>

        {/* Center Metal Pin */}
        <circle cx={center} cy={center} r={10} className="fill-amber-400 stroke-amber-600 stroke-[2]" />
        <circle cx={center} cy={center} r={4} className="fill-slate-800" />
      </svg>
    </div>
  );
}
