import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Telling Time Games for Kindergarten | Free Online Learning Clock",
  description:
    "Fun, interactive telling time games for kindergarten! Help your child learn to read analog clocks to the hour (o'clock) with Toby the mascot. 100% free & ad-free.",
  keywords: [
    "telling time game for kindergarten",
    "telling time games for kindergarten",
    "kindergarten clock learning",
    "reading analog clocks kindergarten",
    "learn to tell time age 5",
    "kindergarten math time games",
  ],
  openGraph: {
    title: "Telling Time Games for Kindergarten | Tick Tock Time",
    description:
      "Play interactive kindergarten telling time games! Learn to read o'clock times on analog clocks with Toby the Clock Buddy. Free and ad-free.",
    url: "https://www.kidslearningclock.fun/telling-time-games-kindergarten",
  },
  alternates: {
    canonical: "https://www.kidslearningclock.fun/telling-time-games-kindergarten",
  },
};

const kindergartenFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What time telling skills do kindergarteners learn?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In kindergarten, children learn the basic structure of a clock face. They learn to identify the short hour hand, the long minute hand, and how to read full-hour times (e.g., 1:00, 4:00, 10:00) when the minute hand points straight up to 12.",
      },
    },
    {
      "@type": "Question",
      name: "How can I help my kindergarten child learn to tell time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keep it fun and visual! Start by focusing on the blue hour hand and full hours. Point to physical clocks throughout the day during activities, like pointing to 8:00 for school or 7:00 for bedtime, and play interactive online games that provide real-time audio and visual rewards.",
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
      name: "Kindergarten Games",
      item: "https://www.kidslearningclock.fun/telling-time-games-kindergarten",
    },
  ],
};

export default function KindergartenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(kindergartenFaqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
