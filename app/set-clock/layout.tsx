import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Set the Clock Game | Drag Clock Hands to Learn Time",
  description:
    "Drag the hour and minute hands to match the target time! This interactive clock game helps kids aged 4–8 build confidence in reading and setting analog clocks.",
  openGraph: {
    title: "Set the Clock | Hands-On Clock Learning Game for Kids",
    description:
      "An interactive drag-and-drop game where kids set analog clock hands to match digital times.",
    url: "https://www.kidslearningclock.fun/set-clock",
  },
  alternates: {
    canonical: "https://www.kidslearningclock.fun/set-clock",
  },
};

export default function SetClockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
