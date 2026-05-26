"use client";

import dynamic from "next/dynamic";

const BackgroundShapes = dynamic(() => import("@/components/BackgroundShapes"), { ssr: false });

export default function ClientBackgroundShapes() {
  return <BackgroundShapes />;
}
