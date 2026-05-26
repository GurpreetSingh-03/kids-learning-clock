import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Teachers | Tick Tock Time — Free Classroom Clock Learning Tool",
  description:
    "Use Tick Tock Time as a free interactive clock teaching tool in your classroom. Works on smartboards, tablets, and computers. No accounts, no ads, no data collection — safe for school use.",
  keywords: [
    "clock game for classroom",
    "teaching clock for school",
    "free telling time game for teachers",
    "smartboard clock game",
    "clock activities for elementary school",
    "math center telling time",
    "interactive clock for classroom",
  ],
  openGraph: {
    title: "For Teachers | Free Classroom Clock Learning Tool",
    description: "Use Tick Tock Time for free in your classroom — works on smartboards, tablets, and computers.",
    url: "https://www.kidslearningclock.fun/for-teachers",
  },
  alternates: { canonical: "https://www.kidslearningclock.fun/for-teachers" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kidslearningclock.fun" },
    { "@type": "ListItem", position: 2, name: "For Teachers", item: "https://www.kidslearningclock.fun/for-teachers" },
  ],
};

export default function ForTeachersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  );
}
