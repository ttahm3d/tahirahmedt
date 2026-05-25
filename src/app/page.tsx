import type { Metadata } from "next";
import Hero from "@/components/hero";

export const metadata: Metadata = {
  title: "Tahir Ahmed T - Full Stack Developer",
  description:
    "Full stack developer with 7+ years of experience in React, Node.js, Next.js, and cloud technologies. Building scalable web applications.",
  openGraph: {
    title: "Tahir Ahmed T - Full Stack Developer",
    description:
      "Full stack developer with 7+ years of experience building scalable web applications.",
    url: "https://tahirahmedt.com",
    type: "website",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Tahir Ahmed T",
            url: "https://tahirahmedt.com",
            jobTitle: "Senior Software Developer",
            sameAs: [
              "https://github.com/ttahm3d",
              "https://linkedin.com/in/tahirahmedt",
            ],
            workLocation: {
              "@type": "Place",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
            },
            knowsAbout: [
              "Full-stack development",
              "React",
              "Next.js",
              "Node.js",
              "TypeScript",
              "AWS",
              "Azure",
            ],
          }),
        }}
      />
      <Hero />
    </>
  );
}
