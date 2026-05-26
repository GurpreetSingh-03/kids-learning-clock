import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import FramerMotionProvider from "@/components/FramerMotionProvider";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-fredoka",
});

export const metadata: Metadata = {
  title: "Tick Tock Time | Interactive Learning Clock & Telling Time Game for Kids",
  description: "Learn to tell time with Tick Tock Time, the ultimate free online teaching clock game! Help children ages 4-8 read analog clocks through fun matching & setting challenges.",
  keywords: [
    // Core keywords
    "learning clock",
    "learn to tell time",
    "teaching clock",
    "tell the time clock",
    "learn to tell the time clock",
    "learn to tell the time watch",
    "teaching time clock",
    "time teaching watch",
    // High-volume search queries
    "interactive clock for kids",
    "how to read analog clock",
    "telling time games",
    "kids clock learning app",
    "analog clock practice",
    "tell time clock online free",
    // Grade-specific targeting
    "telling time game for kindergarten",
    "telling time game first grade",
    "telling time game for 1st grade",
    "telling time game for 2nd grade",
    "elementary clock reading game",
    // Intent-based keywords
    "what time is it game for kids",
    "clock reading practice",
    "telling time game online free",
    "analog clock for kids online",
    "interactive clock online",
    "clock face learning tool",
    // Skill-level keywords
    "telling time to the hour",
    "telling time to the half hour",
    "telling time to 5 minutes",
  ],
  openGraph: {
    title: "Tick Tock Time | Interactive Learning Clock for Kids",
    description: "Fun, colorful, and interactive analog clock games designed to help children tell time easily.",
    type: "website",
    locale: "en_US",
    url: "https://www.kidslearningclock.fun",
    siteName: "Tick Tock Time",
    images: [
      {
        url: "https://www.kidslearningclock.fun/og-image.png",
        width: 512,
        height: 512,
        alt: "Tick Tock Time — Toby the Clock Buddy mascot",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://www.kidslearningclock.fun",
  },
};

// Structured Schema Data (JSON-LD) for Google Rich Snippets
const appJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Tick Tock Time",
  "url": "https://www.kidslearningclock.fun",
  "operatingSystem": "All",
  "applicationCategory": "EducationalApplication",
  "genre": "Educational Game",
  "description": "Tick Tock Time is a free interactive learning clock game for kids aged 4–8. Children learn to read analog clocks through two game modes: Match the Time (multiple-choice quiz) and Set the Clock (drag the clock hands). Progressive difficulty from full hours to 5-minute intervals.",
  "inLanguage": "en",
  "isAccessibleForFree": true,
  "audience": {
    "@type": "EducationalAudience",
    "educationalRole": "student",
    "audienceType": "children",
  },
  "typicalAgeRange": "4-8",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
  },
};

// WebSite schema for sitelinks search box eligibility
const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Tick Tock Time",
  "alternateName": "Kids Learning Clock",
  "url": "https://www.kidslearningclock.fun",
  "description": "Free interactive learning clock games for kids — learn to tell time by reading and setting analog clocks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fredoka.variable} h-full antialiased`}
    >
      <head>
        {/* Injecting Structured Schema Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(appJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className="font-sans min-h-full flex flex-col bg-slate-50 text-slate-800">
        <FramerMotionProvider>
          {children}
        </FramerMotionProvider>
      </body>
    </html>
  );
}
