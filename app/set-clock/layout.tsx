import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Set the Clock Game | Drag Clock Hands to Learn Time",
  description:
    "Drag the hour and minute hands to match the target time! This interactive clock game helps kids aged 4–8 build confidence in reading and setting analog clocks.",
  keywords: [
    "set the clock game",
    "drag clock hands game",
    "interactive clock for kids",
    "learn to set analog clock",
    "clock hands practice",
    "teaching clock online",
    "telling time practice for kids",
    "telling time game for 2nd grade",
  ],
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

// LearningResource schema for Education rich results
const setClockJsonLd = {
  "@context": "https://schema.org",
  "@type": ["WebApplication", "LearningResource"],
  name: "Set the Clock — Interactive Telling Time Practice",
  url: "https://www.kidslearningclock.fun/set-clock",
  description:
    "An interactive game where children drag the hour and minute hands on an analog clock face to match a target digital time. Includes real-time hints and progressive difficulty from full hours to 5-minute intervals.",
  educationalLevel: "Kindergarten through 2nd Grade",
  teaches: "Setting analog clock hands and telling time",
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
    name: "Setting time on analog clocks",
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
      name: "Set the Clock",
      item: "https://www.kidslearningclock.fun/set-clock",
    },
  ],
};

export default function SetClockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(setClockJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
