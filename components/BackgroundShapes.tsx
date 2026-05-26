"use client";

import { m } from "framer-motion";
import { useEffect, useState } from "react";

interface FloatingItem {
  id: number;
  type: "star" | "blob" | "cloud";
  x: number; // percentage
  y: number; // percentage
  size: number; // px
  color: string;
  delay: number;
  duration: number;
}

export default function BackgroundShapes() {
  const [shapes, setShapes] = useState<FloatingItem[]>([]);

  useEffect(() => {
    const items: FloatingItem[] = [
      // Soft background blur blobs
      { id: 1, type: "blob", x: 10, y: 15, size: 280, color: "bg-sky-200/50", delay: 0, duration: 25 },
      { id: 2, type: "blob", x: 75, y: 65, size: 320, color: "bg-purple-200/50", delay: 3, duration: 30 },
      { id: 3, type: "blob", x: 70, y: 10, size: 220, color: "bg-amber-200/40", delay: 5, duration: 22 },
      { id: 4, type: "blob", x: 20, y: 75, size: 240, color: "bg-rose-100/50", delay: 1, duration: 28 },
      
      // Floating Stars
      { id: 5, type: "star", x: 12, y: 40, size: 24, color: "text-yellow-400/70", delay: 0.5, duration: 8 },
      { id: 6, type: "star", x: 88, y: 30, size: 30, color: "text-yellow-400/60", delay: 2, duration: 11 },
      { id: 7, type: "star", x: 45, y: 8, size: 20, color: "text-sky-300/70", delay: 1, duration: 7 },
      { id: 8, type: "star", x: 50, y: 88, size: 26, color: "text-purple-300/70", delay: 4, duration: 9 },
      { id: 9, type: "star", x: 92, y: 80, size: 22, color: "text-amber-300/80", delay: 1.5, duration: 8 },

      // Floating/Drifting Clouds
      { id: 10, type: "cloud", x: -10, y: 20, size: 120, color: "text-white/70", delay: 0, duration: 40 },
      { id: 11, type: "cloud", x: -15, y: 55, size: 160, color: "text-white/60", delay: 10, duration: 48 },
      { id: 12, type: "cloud", x: -20, y: 75, size: 100, color: "text-white/50", delay: 5, duration: 36 },
      { id: 13, type: "cloud", x: -10, y: 5, size: 140, color: "text-white/65", delay: 18, duration: 44 },
    ];
    setShapes(items);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10 bg-gradient-to-b from-sky-100 via-indigo-50 to-purple-100/60 min-h-screen">
      {shapes.map((shape) => {
        if (shape.type === "blob") {
          return (
            <m.div
              key={shape.id}
              className={`absolute rounded-full filter blur-3xl ${shape.color}`}
              style={{
                width: shape.size,
                height: shape.size,
                left: `${shape.x}%`,
                top: `${shape.y}%`,
              }}
              animate={{
                x: [0, 50, -40, 0],
                y: [0, -60, 45, 0],
                scale: [1, 1.12, 0.92, 1],
              }}
              transition={{
                duration: shape.duration,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: shape.delay,
              }}
            />
          );
        }

        if (shape.type === "cloud") {
          return (
            <m.svg
              key={shape.id}
              className={`absolute ${shape.color} filter drop-shadow-sm`}
              style={{
                top: `${shape.y}%`,
                width: shape.size,
              }}
              viewBox="0 0 64 64"
              fill="currentColor"
              initial={{ x: "-20vw" }}
              animate={{ x: "120vw" }}
              transition={{
                duration: shape.duration,
                repeat: Infinity,
                ease: "linear",
                delay: shape.delay,
              }}
            >
              <path d="M44 24a12 12 0 00-22.6-5.2A16 16 0 006 32a16 16 0 0016 16h22a14 14 0 000-28z" />
            </m.svg>
          );
        }

        // Rotating Stars
        return (
          <m.svg
            key={shape.id}
            className={`absolute ${shape.color}`}
            style={{
              left: `${shape.x}%`,
              top: `${shape.y}%`,
              width: shape.size,
              height: shape.size,
            }}
            viewBox="0 0 24 24"
            fill="currentColor"
            animate={{
              y: [0, -12, 0],
              rotate: [0, 360],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: shape.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: shape.delay,
            }}
          >
            <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.41l8.2-1.192z" />
          </m.svg>
        );
      })}
    </div>
  );
}
