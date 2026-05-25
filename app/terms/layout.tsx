import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Tick Tock Time — Kids Learning Clock",
  description:
    "Review the Terms of Service for Tick Tock Time, a free educational clock game for children. Learn about usage rights, intellectual property, and classroom licensing.",
  openGraph: {
    title: "Terms of Service | Tick Tock Time",
    description:
      "Terms and conditions for using Tick Tock Time, the free interactive learning clock for kids.",
    url: "https://www.kidslearningclock.fun/terms",
  },
  alternates: {
    canonical: "https://www.kidslearningclock.fun/terms",
  },
};

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
