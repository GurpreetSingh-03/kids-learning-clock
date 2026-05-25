import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Blog | Tick Tock Time — Tips & Resources for Teaching Kids to Tell Time",
  description:
    "Explore helpful articles, tips, and activities for teaching children to tell time. Expert guides for parents and teachers on analog clocks, time-telling milestones, and more.",
  openGraph: {
    title: "Blog | Tick Tock Time",
    description:
      "Articles, tips, and fun activities to help kids learn to tell time at home or in the classroom.",
    url: "https://www.kidslearningclock.fun/blog",
  },
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "https://www.kidslearningclock.fun/blog",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
