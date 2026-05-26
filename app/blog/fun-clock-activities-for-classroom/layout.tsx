import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "5 Fun Clock Activities for the Classroom | Tick Tock Time",
  description:
    "Engage your students with these creative hands-on activities that make learning to tell time exciting and memorable. Perfect for kindergarten through 2nd grade classrooms.",
  keywords: [
    "clock activities for classroom",
    "telling time activities",
    "fun ways to teach time",
    "clock games for classroom",
    "telling time lesson ideas",
    "time activities for kindergarten",
    "clock activities for 1st grade",
  ],
  openGraph: {
    title: "5 Fun Clock Activities for the Classroom",
    description: "Creative hands-on activities that make learning to tell time exciting for students.",
    url: "https://www.kidslearningclock.fun/blog/fun-clock-activities-for-classroom",
  },
  alternates: { canonical: "https://www.kidslearningclock.fun/blog/fun-clock-activities-for-classroom" },
};

const articleJsonLd = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "5 Fun Clock Activities for the Classroom",
  description: "Creative classroom activities for teaching children to tell time using hands-on methods.",
  author: { "@type": "Organization", name: "Tick Tock Time", url: "https://www.kidslearningclock.fun" },
  publisher: { "@type": "Organization", name: "Tick Tock Time", url: "https://www.kidslearningclock.fun" },
  datePublished: "2025-05-26", dateModified: "2025-05-26",
  mainEntityOfPage: { "@type": "WebPage", "@id": "https://www.kidslearningclock.fun/blog/fun-clock-activities-for-classroom" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org", "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.kidslearningclock.fun" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.kidslearningclock.fun/blog" },
    { "@type": "ListItem", position: 3, name: "Fun Clock Activities", item: "https://www.kidslearningclock.fun/blog/fun-clock-activities-for-classroom" },
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
