import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Tick Tock Time | How Kids Learn to Tell Time with Toby",
  description:
    "Discover how Tick Tock Time helps children aged 4–8 learn to read analog clocks through interactive games. Meet Toby the Clock Buddy and explore our educational philosophy.",
  openGraph: {
    title: "About Tick Tock Time | How Kids Learn to Tell Time",
    description:
      "Meet Toby and learn how our interactive clock games teach children to tell time through play.",
    url: "https://www.kidslearningclock.fun/about",
  },
  alternates: {
    canonical: "https://www.kidslearningclock.fun/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
