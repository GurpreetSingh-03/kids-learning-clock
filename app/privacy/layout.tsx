import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Tick Tock Time — Kids Learning Clock",
  description:
    "Read Tick Tock Time's privacy policy. We collect zero personal data, use no cookies or advertising trackers, and prioritize child safety in accordance with COPPA guidelines. Your child's safety is our priority.",
  openGraph: {
    title: "Privacy Policy | Tick Tock Time",
    description:
      "No data collection, no cookies, no ads. Learn about our commitment to children's privacy.",
    url: "https://www.kidslearningclock.fun/privacy",
  },
  alternates: {
    canonical: "https://www.kidslearningclock.fun/privacy",
  },
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
