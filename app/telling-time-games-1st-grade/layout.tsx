import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Telling Time Games for 1st Grade | Hour and Half Hour Clock Game",
  description:
    "Play interactive telling time games for 1st grade! Practice reading analog clocks to the hour and half-hour (:00 and :30) with Toby the Clock Buddy. Free & ad-free.",
  keywords: [
    "telling time game first grade",
    "telling time game for 1st grade",
    "telling time games 1st grade",
    "1st grade clock reading practice",
    "hour and half hour clock game",
    "learn to tell time age 6",
  ],
  openGraph: {
    title: "Telling Time Games for 1st Grade | Tick Tock Time",
    description:
      "Fun clock practice for first graders! Master hours and half-hours with interactive quizzes and hands-on clocks. Zero ads, 100% free.",
    url: "https://www.kidslearningclock.fun/telling-time-games-1st-grade",
  },
  alternates: {
    canonical: "https://www.kidslearningclock.fun/telling-time-games-1st-grade",
  },
};

const firstGradeFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What telling time skills are taught in 1st grade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In 1st grade, children build on reading hours (o'clock) and learn to read and write time to the half-hour (e.g., 2:30, 5:30). They learn that the minute hand pointing to 6 represents 30 minutes, and that the hour hand sits halfway between two numbers.",
      },
    },
    {
      "@type": "Question",
      name: "How do you teach half-hours to a first grader?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Explain that a half-hour means the minute hand has traveled halfway around the clock circle and points down to 6. Emphasize that the short hour hand is no longer pointing exactly at a number; it sits halfway between the hour that started and the hour that is coming next.",
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
      name: "1st Grade Games",
      item: "https://www.kidslearningclock.fun/telling-time-games-1st-grade",
    },
  ],
};

export default function FirstGradeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(firstGradeFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
