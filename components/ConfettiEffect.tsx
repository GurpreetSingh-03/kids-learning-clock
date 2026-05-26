"use client";

import { m } from "framer-motion";
import { useEffect, useState } from "react";

interface ConfettiEffectProps {
  active: boolean;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  color: string;
  size: number;
  shape: "circle" | "square" | "triangle" | "star";
  angle: number;
  speed: number;
}

const COLORS = [
  "#38bdf8", // Sky Blue
  "#c084fc", // Purple
  "#fb923c", // Orange
  "#facc15", // Yellow
  "#4ade80", // Green
  "#f87171", // Red
  "#2dd4bf", // Teal
];

const SHAPES: ("circle" | "square" | "triangle" | "star")[] = ["circle", "square", "triangle", "star"];

export default function ConfettiEffect({ active }: ConfettiEffectProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!active) {
      setParticles([]);
      return;
    }

    const newParticles: Particle[] = Array.from({ length: 45 }).map((_, i) => {
      // Launch angle: mostly upwards (220 to 320 degrees)
      const angle = (Math.random() * 100 + 220) * (Math.PI / 180);
      const speed = Math.random() * 250 + 150; // pixels per second

      return {
        id: i,
        x: 0,
        y: 0,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: Math.random() * 12 + 8, // 8px to 20px
        shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
        angle,
        speed,
      };
    });

    setParticles(newParticles);

    // Auto-clear after animation completes
    const timer = setTimeout(() => {
      setParticles([]);
    }, 2500);

    return () => clearTimeout(timer);
  }, [active]);

  if (!active || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center overflow-hidden">
      <div className="relative">
        {particles.map((p) => {
          // Physics coordinates over time
          const dx = Math.cos(p.angle) * p.speed;
          const dy = Math.sin(p.angle) * p.speed;

          return (
            <m.div
              key={p.id}
              className="absolute"
              initial={{ x: 0, y: 100, scale: 0, opacity: 1, rotate: 0 }}
              animate={{
                // Curve movement using keyframes
                x: [0, dx * 0.4, dx * 0.8, dx, dx * 1.1],
                y: [100, dy * 0.6 - 150, dy * 0.9 - 100, dy, dy + 250],
                rotate: [0, Math.random() * 360 + 180, Math.random() * 720 + 360],
                scale: [0, 1.2, 1, 0.8, 0],
                opacity: [1, 1, 1, 0.8, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeOut",
              }}
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: p.shape !== "star" && p.shape !== "triangle" ? p.color : undefined,
                borderRadius: p.shape === "circle" ? "50%" : p.shape === "square" ? "4px" : undefined,
              }}
            >
              {p.shape === "triangle" && (
                <div
                  className="w-0 h-0 border-l-transparent border-r-transparent"
                  style={{
                    borderLeftWidth: p.size / 2,
                    borderRightWidth: p.size / 2,
                    borderBottomWidth: p.size,
                    borderBottomColor: p.color,
                  }}
                />
              )}
              {p.shape === "star" && (
                <svg
                  viewBox="0 0 24 24"
                  fill={p.color}
                  style={{ width: p.size, height: p.size }}
                >
                  <path d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.41l8.2-1.192z" />
                </svg>
              )}
            </m.div>
          );
        })}
      </div>
    </div>
  );
}
