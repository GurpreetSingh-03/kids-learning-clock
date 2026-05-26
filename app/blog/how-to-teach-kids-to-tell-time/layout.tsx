import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Teach Kids to Tell Time: A Step-by-Step Guide | Tick Tock Time",
  description:
    "Learn the best strategies for teaching children ages 4–8 to read analog clocks. A practical, step-by-step guide covering clock vocabulary, hour hands, minute hands, and skip counting by 5s.",
  keywords: [
    "how to teach kids to tell time",
    "teach child to tell time",
    "how to read analog clock for kids",
    "teaching time step by step",
    "when to teach kids time",
    "clock reading for beginners",
  ],
  openGraph: {
    title: "How to Teach Kids to Tell Time: A Step-by-Step Guide",
    description:
      "Practical strategies for helping children ages 4–8 learn to read analog clocks — from clock vocabulary to skip counting by 5s.",
    url: "https://www.kidslearningclock.fun/blog/how-to-teach-kids-to-tell-time",
  },
  alternates: {
    canonical: "https://www.kidslearningclock.fun/blog/how-to-teach-kids-to-tell-time",
  },
};

// Article schema
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "How to Teach Kids to Tell Time: A Step-by-Step Guide",
  description:
    "A practical, step-by-step guide for parents and teachers covering how to teach children ages 4–8 to read analog clocks.",
  author: {
    "@type": "Organization",
    name: "Tick Tock Time",
    url: "https://www.kidslearningclock.fun",
  },
  publisher: {
    "@type": "Organization",
    name: "Tick Tock Time",
    url: "https://www.kidslearningclock.fun",
  },
  datePublished: "2025-05-26",
  dateModified: "2025-05-26",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.kidslearningclock.fun/blog/how-to-teach-kids-to-tell-time",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kidslearningclock.fun" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.kidslearningclock.fun/blog" },
    { "@type": "ListItem", position: 3, name: "How to Teach Kids to Tell Time", item: "https://www.kidslearningclock.fun/blog/how-to-teach-kids-to-tell-time" },
  ],
};

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
