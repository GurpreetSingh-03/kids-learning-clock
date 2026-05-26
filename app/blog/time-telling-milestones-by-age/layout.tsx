import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Time-Telling Milestones: What Kids Should Know by Age | Tick Tock Time",
  description:
    "A parent-friendly breakdown of clock reading skills to expect at ages 4, 5, 6, 7, and 8. Learn what is developmentally appropriate and how to support each stage.",
  keywords: [
    "when should child learn to tell time",
    "time telling milestones by age",
    "what age learn to tell time",
    "telling time milestones kindergarten",
    "clock reading skills by grade",
    "child development telling time",
  ],
  openGraph: {
    title: "Time-Telling Milestones: What Kids Should Know by Age",
    description: "What clock reading skills to expect at ages 4 through 8 — and how to support each stage.",
    url: "https://www.kidslearningclock.fun/blog/time-telling-milestones-by-age",
  },
  alternates: { canonical: "https://www.kidslearningclock.fun/blog/time-telling-milestones-by-age" },
};

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "Time-Telling Milestones: What Kids Should Know by Age",
  description: "A parent-friendly breakdown of clock reading milestones for children ages 4 through 8.",
  author: { "@type": "Organization", name: "Tick Tock Time", url: "https://www.kidslearningclock.fun" },
  publisher: { "@type": "Organization", name: "Tick Tock Time", url: "https://www.kidslearningclock.fun" },
  datePublished: "2025-05-26", dateModified: "2025-05-26",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.kidslearningclock.fun/blog/time-telling-milestones-by-age" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kidslearningclock.fun" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.kidslearningclock.fun/blog" },
    { "@type": "ListItem", position: 3, name: "Time-Telling Milestones", item: "https://www.kidslearningclock.fun/blog/time-telling-milestones-by-age" },
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
