import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interactive Clock for 2nd Grade | Telling Time Game",
  description:
    "Fun interactive clock games for 2nd grade! Master telling time to the nearest 5 minutes, including quarter hours and skip counting by 5s. 100% free and ad-free.",
  keywords: [
    "interactive clock for 2nd grade",
    "telling time game for 2nd grade",
    "telling time games 2nd grade",
    "2nd grade telling time practice",
    "5-minute interval clock game",
    "reading clock face second grade",
  ],
  openGraph: {
    title: "Interactive Clock for 2nd Grade | Tick Tock Time",
    description:
      "Help second graders tell time to the nearest 5 minutes with our interactive learning clock. Free, ad-free, and optimized for math students.",
    url: "https://www.kidslearningclock.fun/interactive-clock-for-2nd-grade",
  },
  alternates: {
    canonical: "https://www.kidslearningclock.fun/interactive-clock-for-2nd-grade",
  },
};

const secondGradeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What telling time standards are taught in 2nd grade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In 2nd grade, children learn to read and write time from analog and digital clocks to the nearest five minutes (e.g., 8:05, 8:25, 8:55). They also learn to distinguish between a.m. and p.m. and understand phrases like 'quarter past', 'half past', and 'quarter to'.",
      },
    },
    {
      "@type": "Question",
      name: "How do you teach a child to read minutes in 5-minute intervals?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ensure the child is comfortable skip counting by 5s. Then, show them how each number on the clock represents 5 minutes of travel for the big hand (e.g., 1 = 5 min, 2 = 10 min, 3 = 15 min... up to 11 = 55 min). Connect these numbers to the lines on the dial through interactive practice.",
      },
    },
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.kidslearningclock.fun",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "2nd Grade Interactive Clock",
      item: "https://www.kidslearningclock.fun/interactive-clock-for-2nd-grade",
    },
  ],
};

export default function SecondGradeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(secondGradeFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
