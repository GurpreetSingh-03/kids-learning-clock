"use client";

import { m } from "framer-motion";
import { ReactNode } from "react";
import { useSound } from "@/hooks/useSound";

interface AnimatedButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "success" | "orange" | "yellow" | "danger" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  disabled?: boolean;
}

export default function AnimatedButton({
  children,
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  disabled = false,
}: AnimatedButtonProps) {
  const { playClick } = useSound();

  const handlePress = () => {
    if (disabled) return;
    playClick();
    if (onClick) onClick();
  };

  // 3D tactile color styling
  const variantStyles = {
    primary: "bg-sky-400 hover:bg-sky-300 text-white border-sky-600 shadow-[0_6px_0_0_#0284c7]",
    secondary: "bg-purple-400 hover:bg-purple-300 text-white border-purple-600 shadow-[0_6px_0_0_#7c3aed]",
    success: "bg-green-400 hover:bg-green-300 text-white border-green-600 shadow-[0_6px_0_0_#16a34a]",
    orange: "bg-orange-400 hover:bg-orange-300 text-white border-orange-600 shadow-[0_6px_0_0_#ea580c]",
    yellow: "bg-yellow-400 hover:bg-yellow-300 text-slate-800 border-yellow-600 shadow-[0_6px_0_0_#ca8a04]",
    danger: "bg-red-400 hover:bg-red-300 text-white border-red-600 shadow-[0_6px_0_0_#dc2626]",
    ghost: "bg-white/80 hover:bg-white text-slate-700 border-slate-200 shadow-[0_4px_0_0_#e2e8f0] border",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm rounded-xl font-bold",
    md: "px-6 py-3 text-base rounded-2xl font-bold text-lg",
    lg: "px-8 py-4 text-xl rounded-3xl font-extrabold tracking-wide",
    xl: "px-10 py-5 text-2xl rounded-3xl font-black tracking-wider uppercase",
  };

  return (
    <m.button
      onClick={handlePress}
      disabled={disabled}
      className={`
        relative inline-flex items-center justify-center transition-all duration-75 outline-none
        border-b-2 select-none active:translate-y-[4px] active:shadow-[0_2px_0_0_transparent]
        ${disabled ? "opacity-50 cursor-not-allowed transform-none shadow-none" : "cursor-pointer"}
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}
      whileHover={disabled ? {} : { scale: 1.05 }}
      whileTap={disabled ? {} : { scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
    >
      {children}
    </m.button>
  );
}
