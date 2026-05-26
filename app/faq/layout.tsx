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
  {
    question: "At what age should a child learn to tell time?",
    answer:
      "Most children begin learning about time between ages 4 and 5, starting with general concepts like morning and afternoon. By age 5–6, many children can read full-hour times (o'clock). Reading half hours and quarter hours typically develops between ages 6 and 7, with 5-minute precision following around age 7–8. Every child develops at their own pace, so there is no need to rush.",
  },
  {
    question: "What is the best way to teach a child to tell time?",
    answer:
      "Start with the hour hand only — focus on o'clock times first. Once your child is comfortable, introduce half hours (:30), then quarter hours (:15 and :45), and finally 5-minute intervals. Use a combination of hands-on practice (moving clock hands), interactive games, and real-world conversations about time throughout the day. Keep sessions short (5–10 minutes) and always make it feel like play, not a test.",
  },
  {
    question: "Why is learning to read an analog clock still important?",
    answer:
      "Analog clocks teach children more than just telling time. They help build spatial reasoning (understanding angles and positions), reinforce skip counting by 5s, introduce fractions visually (quarter past, half past), and develop number sense. These cognitive skills support broader math learning. Digital clocks show a number, but analog clocks show the structure of time itself.",
  },
  {
    question: "What is the difference between the hour hand and the minute hand?",
    answer:
      "The hour hand is the shorter hand on an analog clock — it moves slowly and points to the current hour. The minute hand is the longer hand — it moves faster and points to the current minutes past the hour. In Tick Tock Time, the hour hand is colored blue and the minute hand is colored red to help children distinguish between them easily.",
  },
  {
    question: "What do quarter past, half past, and quarter to mean?",
    answer:
      "'Quarter past' means 15 minutes after the hour (e.g., 3:15 is quarter past 3). 'Half past' means 30 minutes after the hour (e.g., 3:30 is half past 3). 'Quarter to' means 15 minutes before the next hour (e.g., 2:45 is quarter to 3). These terms come from dividing the clock face into quarters — like slices of a pie.",
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
