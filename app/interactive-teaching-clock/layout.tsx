import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Interactive Teaching Clock | Online Clock Learning Tool for Kids",
  description:
    "Explore our free interactive teaching clock! Drag the hour and minute hands, sync with a digital clock, toggle AM/PM, and learn to tell time. Perfect for classroom smartboards, teachers, and parents.",
  keywords: [
    "interactive teaching clock",
    "online teaching clock",
    "teaching clock free",
    "interactive clock for kids",
    "clock face learning tool",
    "interactive clock online",
    "learn to read clock hands",
    "analog clock teaching tool",
    "telling time teaching clock",
  ],
  openGraph: {
    title: "Free Interactive Teaching Clock | Kids Learning Clock Game",
    description:
      "A free, hands-on online interactive clock tool. Drag hands, view digital sync, and practice reading clock faces.",
    url: "https://www.kidslearningclock.fun/interactive-teaching-clock",
  },
  alternates: {
    canonical: "https://www.kidslearningclock.fun/interactive-teaching-clock",
  },
};

// LearningResource schema for Education rich results
const teachingClockJsonLd = {
  "@context": "https://schema.org",
  "@type": ["WebApplication", "LearningResource"],
  name: "Interactive Teaching Clock — Free Online Clock Tool",
  url: "https://www.kidslearningclock.fun/interactive-teaching-clock",
  description:
    "A free interactive analog and digital clock synchronization tool designed for classrooms and home learning. Users can drag the clock hands, step time by intervals, toggle digital displays, and observe AM/PM shifts.",
  educationalLevel: "Kindergarten through 3rd Grade",
  teaches: "Telling time, reading analog clock hands, AM and PM concepts",
  educationalUse: "instruction",
  learningResourceType: "interactive resource",
  typicalAgeRange: "4-9",
  isAccessibleForFree: true,
  inLanguage: "en",
  audience: {
    "@type": "EducationalAudience",
    educationalRole: ["teacher", "parent", "student"],
    audienceType: "children",
  },
  about: {
    "@type": "Thing",
    name: "Analog and Digital Time telling",
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
      name: "Interactive Teaching Clock",
      item: "https://www.kidslearningclock.fun/interactive-teaching-clock",
    },
  ],
};

export default function InteractiveClockLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teachingClockJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
