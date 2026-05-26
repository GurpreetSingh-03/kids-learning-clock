import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "For Parents | Tick Tock Time — Help Your Child Learn to Tell Time",
  description:
    "Practical tips for parents to help children ages 4–8 learn to tell time at home. Discover age-appropriate milestones, practice strategies, and how Tick Tock Time makes learning fun.",
  keywords: [
    "teach child to tell time at home",
    "help child learn to read clock",
    "telling time tips for parents",
    "educational screen time for kids",
    "learning clock app for parents",
    "time learning activities at home",
  ],
  openGraph: {
    title: "For Parents | Help Your Child Learn to Tell Time",
    description: "Practical tips and free tools to help your child learn to read analog clocks at home.",
    url: "https://www.kidslearningclock.fun/for-parents",
  },
  alternates: { canonical: "https://www.kidslearningclock.fun/for-parents" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kidslearningclock.fun" },
    { "@type": "ListItem", position: 2, name: "For Parents", item: "https://www.kidslearningclock.fun/for-parents" },
  ],
};

export default function ForParentsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  );
}
