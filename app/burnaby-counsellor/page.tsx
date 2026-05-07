import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import Contact from "@/components/Contact";

const siteUrl = "https://www.myoasiscentre.com";
const pageUrl = `${siteUrl}/burnaby-counsellor`;

export const metadata: Metadata = {
  title: "Burnaby Counsellor | RCC Gurpreet | MyOasis Counselling",
  description:
    "Gurpreet is a Registered Clinical Counsellor in Burnaby offering in-person and virtual counselling for relationship issues, anxiety, trauma, EMDR therapy, and emotional support. Serving Burnaby and across BC.",
  keywords: [
    "Burnaby counsellor",
    "counsellor in Burnaby",
    "Burnaby therapist",
    "RCC Burnaby",
    "counselling Burnaby BC",
    "therapist Burnaby",
    "Burnaby relationship counselling",
    "anxiety therapy Burnaby",
    "trauma counselling Burnaby",
    "EMDR therapist Burnaby",
    "mental health counselling Burnaby",
    "registered counsellor Burnaby",
    "emotional support Burnaby",
    "grief counselling Burnaby",
    "depression therapy Burnaby",
    "stress management Burnaby",
    "attachment therapy Burnaby",
    "codependency counselling Burnaby",
    "couples therapy Burnaby",
    "Burnaby counselling services",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: pageUrl,
    siteName: "MyOasis Counselling",
    title: "Burnaby Counsellor | Registered Clinical Counsellor — Gurpreet",
    description:
      "In-person and virtual counselling in Burnaby, BC. Gurpreet offers professional therapy for relationships, anxiety, trauma, and emotional support.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Counsellor in Burnaby — MyOasis Counselling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Burnaby Counsellor | RCC Gurpreet | MyOasis Counselling",
    description:
      "Registered Clinical Counsellor in Burnaby providing compassionate therapy for relationships, anxiety, trauma, and mental health. In-person & virtual.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": `${pageUrl}/#webpage`,
      url: pageUrl,
      name: "Burnaby Counsellor | RCC Gurpreet | MyOasis Counselling",
      description:
        "Registered Clinical Counsellor in Burnaby, BC. Gurpreet offers compassionate, evidence-based counselling for relationship issues, anxiety, trauma, and emotional support. In-person and virtual.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#business` },
      inLanguage: "en-CA",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
          {
            "@type": "ListItem",
            position: 2,
            name: "Burnaby Counsellor",
            item: pageUrl,
          },
        ],
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${pageUrl}/#business`,
      name: "MyOasis Counselling",
      description: "Professional counselling services in Burnaby, BC",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Burnaby",
        addressLocality: "Burnaby",
        addressRegion: "BC",
        addressCountry: "CA",
      },
      areaServed: [
        { "@type": "City", name: "Burnaby" },
        { "@type": "State", name: "British Columbia" },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "(236) 512-2828",
        contactType: "Customer Service",
        availableLanguage: ["English"],
      },
    },
    {
      "@type": "MedicalTherapy",
      "@id": `${pageUrl}/#service`,
      name: "In-Person & Virtual Counselling",
      description:
        "Professional counselling for anxiety, relationship issues, trauma, attachment wounds, and emotional support. EMDR therapy available in-person and virtual.",
      provider: { "@id": `${pageUrl}/#business` },
      areaServed: { "@type": "State", name: "British Columbia" },
      availableChannel: [
        { "@type": "ServiceChannel", serviceType: "In-Person", availableLanguage: "English" },
        { "@type": "ServiceChannel", serviceType: "Virtual / Online", availableLanguage: "English" },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${pageUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Do you offer in-person counselling in Burnaby?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Gurpreet offers in-person counselling appointments in Burnaby, as well as virtual sessions for clients anywhere in British Columbia.",
          },
        },
        {
          "@type": "Question",
          name: "What makes a good counsellor in Burnaby?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A good counsellor listens without judgment, has proper credentials (like RCC certification), uses evidence-based approaches, and creates a safe space for healing. Gurpreet brings warmth, expertise, and professionalism to every session.",
          },
        },
        {
          "@type": "Question",
          name: "What issues do you treat as a Burnaby counsellor?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gurpreet specializes in relationship challenges, anxiety, depression, trauma recovery, grief, attachment wounds, codependency, and life transitions. EMDR is available for trauma processing.",
          },
        },
        {
          "@type": "Question",
          name: "How do I find a counsellor in Burnaby?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can reach Gurpreet by calling (236) 512-2828 or submitting the contact form below. A free consultation is available to see if it's a good fit for your needs.",
          },
        },
      ],
    },
  ],
};

const painPoints = [
  "You're struggling with relationship patterns that keep repeating",
  "Anxiety or depression is affecting your work, relationships, or self-esteem",
  "Past trauma or grief is still weighing on you",
  "You feel disconnected from yourself or your partner",
  "You've tried self-help but need professional guidance",
  "You want in-person support in a comfortable, safe environment",
  "You're ready to make real change but don't know where to start",
];

export default function BurnabycounsellorPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav hideLinks />
      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-[100dvh] flex items-center bg-parchment overflow-hidden">
          <div
            className="absolute top-0 right-0 w-[55%] h-full bg-sand-light/40 rounded-bl-[80px] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 opacity-[0.025] pointer-events-none"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          <div className="section-wrap relative z-10 w-full pt-28 pb-20 md:pt-32 md:pb-24">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
              {/* Left — Copy */}
              <div className="flex flex-col gap-8">
                <span className="label flex items-center gap-3">
                  <span className="w-6 h-px bg-sage inline-block" />
                  Counselling in Burnaby · Registered Clinical Counsellor · In-Person & Virtual
                </span>

                <h1 className="font-cormorant text-display-xl text-forest text-balance leading-[1.0] font-light">
                  Compassionate counselling{" "}
                  <em className="not-italic text-sage">right here in Burnaby.</em>
                </h1>

                <p className="font-outfit text-forest/65 text-lg leading-relaxed max-w-[44ch] font-light">
                  You deserve support from someone who truly listens and understands. Gurpreet is a Registered Clinical Counsellor offering in-person sessions in Burnaby and virtual appointments across BC. Evidence-based, warm, and judgment-free.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <a href="#contact" className="btn-primary">
                    Book a Free Consultation
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7H12M7 2L12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a
                    href="tel:2365122828"
                    className="font-outfit text-sm text-forest/60 hover:text-sage transition-colors duration-200 flex items-center gap-2"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 2.5C2 2.5 3.5 1 4.5 2C5.5 3 5 4.5 5 4.5C5 4.5 6.5 7 9 8.5C9 8.5 10.5 8 11.5 9C12.5 10 11 11.5 11 11.5C8 13 1 6 2 2.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                    </svg>
                    (236) 512-2828
                  </a>
                </div>

                <div className="flex flex-wrap gap-3">
                  {[
                    "In-Person Counselling",
                    "Relationship Support",
                    "Anxiety & Depression",
                    "Trauma & EMDR",
                    "Burnaby & BC Virtual",
                    "RCC #22668",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="font-outfit text-xs text-forest/60 bg-offwhite border border-sand/50 px-3 py-1.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right — Photo */}
              <div className="relative hidden lg:flex justify-center items-center">
                <div className="absolute w-[105%] h-[105%] rounded-[40px] border border-sage/20 pointer-events-none" />
                <div className="relative w-full aspect-[3/4] max-w-sm rounded-[36px] overflow-hidden bg-sand-light">
                  <Image
                    src="/gurpreet.png"
                    alt="Gurpreet, Registered Clinical Counsellor — In-person Counselling in Burnaby, BC"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute bottom-5 left-5 right-5 bg-offwhite/95 backdrop-blur-sm rounded-2xl p-4 border border-sand/40 shadow-lg shadow-forest/5">
                    <p className="font-outfit text-[10px] uppercase tracking-widest text-sage mb-1">
                      Registered Clinical Counsellor
                    </p>
                    <p className="font-cormorant text-lg text-forest font-medium">Gurpreet</p>
                    <p className="font-outfit text-xs text-forest/50">
                      BC Association of Clinical Counsellors · #22668
                    </p>
                  </div>
                </div>
                <div
                  className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full bg-sage/10 pointer-events-none"
                  style={{ animation: "float 6s ease-in-out infinite" }}
                />
                <div
                  className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-sand/40 pointer-events-none"
                  style={{ animation: "float 8s ease-in-out infinite 1s" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── PAIN POINTS ── */}
        <section className="bg-offwhite py-section">
          <div className="section-wrap">
            <FadeUp>
              <span className="label flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-sage inline-block" />
                Do any of these resonate?
              </span>
              <h2 className="font-cormorant text-display-md text-forest font-light text-balance max-w-[22ch] mb-12">
                You deserve to feel better.
              </h2>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              {painPoints.map((point, i) => (
                <FadeUp key={i} delay={i * 60}>
                  <div className="flex items-start gap-4 bg-parchment rounded-2xl px-6 py-5 border border-sand/30">
                    <span className="mt-1 w-5 h-5 rounded-full bg-sage/15 flex items-center justify-center flex-shrink-0">
                      <span className="w-1.5 h-1.5 rounded-full bg-sage block" />
                    </span>
                    <p className="font-outfit text-forest/75 text-sm leading-relaxed">{point}</p>
                  </div>
                </FadeUp>
              ))}
            </div>

            <FadeUp delay={420}>
              <p className="mt-12 font-outfit text-forest/60 text-base leading-relaxed max-w-[52ch]">
                With the right support, you can heal from past pain, understand your patterns, and create the relationships and life you truly want.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── CONTACT FORM ── */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
