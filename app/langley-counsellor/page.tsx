import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

const siteUrl = "https://www.myoasiscentre.com";
const pageUrl = `${siteUrl}/langley-counsellor`;

export const metadata: Metadata = {
  title: "Langley Counsellor | RCC Gurpreet | MyOasis Counselling",
  description:
    "Gurpreet is a Registered Clinical Counsellor serving Langley and surrounding areas. Compassionate, evidence-based counselling for relationship issues, anxiety, trauma, and EMDR therapy. In-person in Burnaby & virtual across BC.",
  keywords: [
    "langley counsellor",
    "counsellor in Langley",
    "Langley therapist",
    "RCC Langley",
    "counselling Langley BC",
    "therapist Langley",
    "Langley relationship counselling",
    "anxiety therapy Langley",
    "trauma counselling Langley",
    "EMDR therapist Langley",
    "mental health counselling Langley",
    "counselling near Langley",
    "registered counsellor Langley",
    "emotional support Langley",
    "grief counselling Langley",
    "depression therapy Langley",
    "stress management Langley",
    "attachment therapy Langley",
    "codependency counselling Langley",
    "life coaching Langley",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: pageUrl,
    siteName: "MyOasis Counselling",
    title: "Langley Counsellor | Registered Clinical Counsellor — Gurpreet",
    description:
      "Professional counselling in Langley, BC. Gurpreet offers compassionate, evidence-based therapy for relationship challenges, anxiety, trauma, and emotional support.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Counsellor in Langley — MyOasis Counselling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Langley Counsellor | RCC Gurpreet | MyOasis Counselling",
    description:
      "Registered Clinical Counsellor in Langley offering compassionate therapy for relationships, anxiety, trauma, and mental health support. Virtual & in-person.",
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
      name: "Langley Counsellor | RCC Gurpreet | MyOasis Counselling",
      description:
        "Registered Clinical Counsellor serving Langley and BC. Gurpreet offers compassionate, evidence-based counselling for relationship issues, anxiety, trauma, and emotional support.",
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
            name: "Langley Counsellor",
            item: pageUrl,
          },
        ],
      },
    },
    {
      "@type": "MedicalBusiness",
      "@id": `${pageUrl}/#business`,
      name: "MyOasis Counselling — Langley",
      description: "Professional counselling services in Langley, BC",
      areaServed: [
        { "@type": "City", name: "Langley" },
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
      name: "Counselling Services",
      description:
        "Compassionate, evidence-based counselling for anxiety, relationship issues, trauma, attachment wounds, and emotional support. EMDR therapy available.",
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
          name: "Does a Langley counsellor offer online sessions?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. While based in Burnaby, Gurpreet offers virtual counselling to clients anywhere in British Columbia, including those in Langley. In-person sessions are available in Burnaby.",
          },
        },
        {
          "@type": "Question",
          name: "What is an RCC and why does it matter?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "RCC stands for Registered Clinical Counsellor. It means Gurpreet is regulated by the BC Association of Clinical Counsellors and meets strict professional standards for training, ethics, and practice.",
          },
        },
        {
          "@type": "Question",
          name: "What conditions does a counsellor in Langley treat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gurpreet specializes in relationship issues, anxiety, trauma recovery, attachment wounds, codependency, grief, depression, and life transitions. EMDR therapy is available for trauma.",
          },
        },
        {
          "@type": "Question",
          name: "How do I book a counselling appointment?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You can call (236) 512-2828 or fill out the contact form below. Gurpreet offers free consultations to discuss your needs and see if it's a good fit.",
          },
        },
      ],
    },
  ],
};

const painPoints = [
  "You're carrying stress, anxiety, or emotional weight you can't seem to shake",
  "Relationship difficulties are affecting your peace of mind and daily life",
  "Past hurts or trauma keep showing up in your current relationships",
  "You feel misunderstood or unsupported in your struggles",
  "You've tried to fix things on your own but nothing seems to help long-term",
  "You're not sure if counselling is right for you or what to expect",
  "You want professional support but value the flexibility of virtual options",
];

export default function LangleyCounsellorPage() {
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
                  Counselling in Langley · Registered Clinical Counsellor · Serving BC
                </span>

                <h1 className="font-cormorant text-display-xl text-forest text-balance leading-[1.0] font-light">
                  Professional counselling{" "}
                  <em className="not-italic text-sage">when you need it most.</em>
                </h1>

                <p className="font-outfit text-forest/65 text-lg leading-relaxed max-w-[44ch] font-light">
                  Whether you're facing relationship challenges, anxiety, grief, or past trauma — you deserve compassionate, evidence-based support. Gurpreet is a Registered Clinical Counsellor offering virtual sessions across BC and in-person appointments in Burnaby.
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
                    "Anxiety & Stress",
                    "Relationship Counselling",
                    "Trauma & EMDR",
                    "Grief Support",
                    "Virtual & In-Person",
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
                    alt="Gurpreet, Registered Clinical Counsellor — Counselling in Langley, BC"
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
                Sound familiar?
              </span>
              <h2 className="font-cormorant text-display-md text-forest font-light text-balance max-w-[22ch] mb-12">
                You don&apos;t have to carry this alone.
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
                Counselling isn&apos;t just about managing symptoms — it&apos;s about understanding yourself better and building the life you actually want. Let&apos;s work together.
              </p>
            </FadeUp>
          </div>
        </section>

        {/* ── TEAM ── */}
        <Team />

        {/* ── CONTACT FORM ── */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
