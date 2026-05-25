import type { Metadata } from "next";

// FAQ items for schema
const faqItems = [
  {
    question: "What is Tick Tock Time?",
    answer:
      "Tick Tock Time is a free, interactive online game that teaches children aged 4–8 how to read analog clocks. It features two game modes: Match the Time and Set the Clock.",
  },
  {
    question: "What age group is Tick Tock Time designed for?",
    answer:
      "Tick Tock Time is designed for children between 4 and 8 years old, covering kindergarten through second grade. The difficulty levels adapt from simple hour-only times to 5-minute intervals.",
  },
  {
    question: "Is Tick Tock Time free to use?",
    answer:
      "Yes! Tick Tock Time is completely free. There are no in-app purchases, subscriptions, or hidden fees. It is ad-free and safe for children.",
  },
  {
    question: "How does the Match the Time game work?",
    answer:
      "In Match the Time, a large analog clock is displayed and the child must choose the correct digital time from four multiple-choice options. Difficulty increases across 10 questions from full hours to 5-minute increments.",
  },
  {
    question: "How does the Set the Clock game work?",
    answer:
      "In Set the Clock, a digital target time is shown and the child drags the hour and minute hands on an interactive analog clock face to match it. Toby the mascot provides real-time hints.",
  },
  {
    question: "Does Tick Tock Time collect any personal data from children?",
    answer:
      "No. Tick Tock Time does not collect any personal data, does not require registration, and does not use cookies or advertising trackers. We do not collect personal information from children and are committed to protecting children's privacy in accordance with COPPA guidelines.",
  },
  {
    question: "Can teachers use Tick Tock Time in the classroom?",
    answer:
      "Absolutely! Teachers and schools are encouraged to use Tick Tock Time as a supplementary learning tool. You can project the game on a smartboard or have students play individually on tablets or computers.",
  },
  {
    question: "What devices and browsers are supported?",
    answer:
      "Tick Tock Time works on any modern web browser including Chrome, Safari, Firefox, and Edge. It is fully responsive and works on desktops, laptops, tablets, and smartphones.",
  },
  {
    question: "How can I help my child get the most out of Tick Tock Time?",
    answer:
      "Play alongside your child! Ask guiding questions like 'Which hand is shorter?' or 'How many minutes pass when the big hand moves from 12 to 1?' Encourage them to use the Set the Clock mode to build muscle memory.",
  },
  {
    question: "How do I contact the Tick Tock Time team?",
    answer:
      "You can reach us through our Contact page or by emailing kidslearningclock@gmail.com. We welcome feedback, feature suggestions, and partnership inquiries from parents, teachers, and educators.",
  },
];

// FAQPage JSON-LD Schema for rich snippets
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const metadata: Metadata = {
  title:
    "FAQ | Tick Tock Time — Common Questions About Learning to Tell Time",
  description:
    "Find answers to frequently asked questions about Tick Tock Time, our free interactive clock learning game for kids. Learn about game modes, privacy, classroom use, and more.",
  openGraph: {
    title: "FAQ | Tick Tock Time",
    description:
      "Answers to common questions about our free kids' clock learning game — game modes, privacy, classroom tips, and more.",
    url: "https://www.kidslearningclock.fun/faq",
  },
  alternates: {
    canonical: "https://www.kidslearningclock.fun/faq",
  },
};

export default function FaqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {children}
    </>
  );
}
