"use client";

import { m } from "framer-motion";
import React from "react";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}

export default function FadeIn({ children, delay = 0, y = 30 }: FadeInProps) {
  return (
    <m.div
      initial={{ opacity: 0, y }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay,
      }}
    >
      {children}
    </m.div>
  );
}
