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
    // User requested keywords
    "learning clock",
    "learn to tell time",
    "teaching clock",
    "tell the time clock",
    "learn to tell the time clock",
    "learn to tell the time watch",
    "teaching time clock",
    "time teaching watch",
    // Highly relevant additional search queries
    "interactive clock for kids",
    "how to read analog clock",
    "telling time games",
    "kids clock learning app",
    "analog clock practice",
    "telling time game for kindergarten",
    "telling time game first grade",
    "elementary clock reading game",
    "tell time clock online free",
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
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Tick Tock Time",
  "operatingSystem": "All",
  "applicationCategory": "EducationalApplication",
  "genre": "Educational Game / Kids Math",
  "description": "Tick Tock Time is an interactive learning clock game designed for kids. It teaches children how to read analog clocks through Match the Time and Set the Clock interactive challenges.",
  "inLanguage": "en",
  "audience": {
    "@type": "PeopleAudience",
    "suggestedMinAge": 4,
    "suggestedMaxAge": 8,
  },
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
  },
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
