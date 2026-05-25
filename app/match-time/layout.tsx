import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Match the Time Game | Interactive Clock Reading Quiz for Kids",
  description:
    "Test your clock reading skills! Look at the analog clock and choose the correct digital time. Progressive difficulty from full hours to 5-minute intervals — perfect for ages 4–8.",
  openGraph: {
    title: "Match the Time | Clock Reading Quiz for Kids",
    description:
      "A fun multiple-choice game where kids match analog clock faces to the correct digital time.",
    url: "https://www.kidslearningclock.fun/match-time",
  },
  alternates: {
    canonical: "https://www.kidslearningclock.fun/match-time",
  },
};

export default function MatchTimeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
