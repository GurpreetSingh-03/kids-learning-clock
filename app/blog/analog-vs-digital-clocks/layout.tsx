import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analog vs. Digital Clocks: Why Kids Should Learn Both | Tick Tock Time",
  description:
    "Discover why learning to read analog clocks builds stronger cognitive skills, spatial reasoning, and mathematical foundations compared to digital-only time reading.",
  keywords: [
    "analog vs digital clock for kids",
    "why learn analog clock",
    "benefits of analog clock",
    "analog clock vs digital clock education",
    "should kids learn analog clocks",
    "importance of reading analog clocks",
  ],
  openGraph: {
    title: "Analog vs. Digital Clocks: Why Kids Should Learn Both",
    description:
      "Why analog clocks matter for child development — the cognitive benefits beyond just telling time.",
    url: "https://www.kidslearningclock.fun/blog/analog-vs-digital-clocks",
  },
  alternates: {
    canonical: "https://www.kidslearningclock.fun/blog/analog-vs-digital-clocks",
  },
};

const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Analog vs. Digital Clocks: Why Kids Should Learn Both",
  description: "Why learning analog clocks builds stronger cognitive skills than digital-only time reading.",
  author: { "@type": "Organization", name: "Tick Tock Time", url: "https://www.kidslearningclock.fun" },
  publisher: { "@type": "Organization", name: "Tick Tock Time", url: "https://www.kidslearningclock.fun" },
  datePublished: "2025-05-26",
  dateModified: "2025-05-26",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.kidslearningclock.fun/blog/analog-vs-digital-clocks",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kidslearningclock.fun" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.kidslearningclock.fun/blog" },
    { "@type": "ListItem", position: 3, name: "Analog vs. Digital Clocks", item: "https://www.kidslearningclock.fun/blog/analog-vs-digital-clocks" },
  ],
};

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      {children}
    </>
  );
}
