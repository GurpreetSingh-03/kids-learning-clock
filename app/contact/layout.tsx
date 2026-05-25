import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Tick Tock Time — Kids Learning Clock",
  description:
    "Have a question, suggestion, or partnership inquiry? Get in touch with the Tick Tock Time team. We'd love to hear from parents, teachers, and educators.",
  openGraph: {
    title: "Contact Us | Tick Tock Time",
    description:
      "Reach out to the Tick Tock Time team with questions, feedback, or collaboration ideas.",
    url: "https://www.kidslearningclock.fun/contact",
  },
  alternates: {
    canonical: "https://www.kidslearningclock.fun/contact",
  },
};

// ContactPoint schema for Google
const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Tick Tock Time",
  url: "https://www.kidslearningclock.fun",
  contactPoint: {
    "@type": "ContactPoint",
    email: "kidslearningclock@gmail.com",
    contactType: "customer support",
    availableLanguage: "English",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }}
      />
      {children}
    </>
  );
}
