import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Match the Time Game | Interactive Clock Reading Quiz for Kids",
  description:
    "Test your clock reading skills! Look at the analog clock and choose the correct digital time. Progressive difficulty from full hours to 5-minute intervals — perfect for ages 4–8.",
  keywords: [
    "match the time game",
    "clock reading quiz for kids",
    "telling time multiple choice",
    "analog clock quiz",
    "what time does the clock show",
    "telling time practice online",
    "clock reading practice for kindergarten",
    "telling time game for 1st grade",
  ],
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

// LearningResource + Quiz schema for Education rich results
const matchTimeJsonLd = {
  "@context": "https://schema.org",
  "@type": ["WebApplication", "LearningResource"],
  name: "Match the Time — Clock Reading Game",
  url: "https://www.kidslearningclock.fun/match-time",
  description:
    "An interactive multiple-choice game where children look at an analog clock face and select the correct digital time. Difficulty progresses from reading full hours to 5-minute intervals across 10 questions.",
  educationalLevel: "Kindergarten through 2nd Grade",
  teaches: "Reading analog clocks and telling time",
  educationalUse: "practice",
  learningResourceType: "interactive resource",
  typicalAgeRange: "4-8",
  isAccessibleForFree: true,
  inLanguage: "en",
  audience: {
    "@type": "EducationalAudience",
    educationalRole: "student",
    audienceType: "children",
  },
  about: {
    "@type": "Thing",
    name: "Telling time on analog clocks",
  },
};

// BreadcrumbList schema
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
      name: "Match the Time",
      item: "https://www.kidslearningclock.fun/match-time",
    },
  ],
};

export default function MatchTimeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(matchTimeJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
