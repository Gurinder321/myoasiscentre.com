import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import Team from "@/components/Team";
import Contact from "@/components/Contact";

const siteUrl = "https://www.myoasiscentre.com";
const pageUrl = `${siteUrl}/emdr-therapist`;

export const metadata: Metadata = {
  title: "EMDR Therapist | Trauma Recovery | Gurpreet | MyOasis Counselling",
  description:
    "EMDR (Eye Movement Desensitization and Reprocessing) therapist specializing in trauma, PTSD, childhood wounds, and relationship trauma. Gurpreet is an RCC offering EMDR therapy in Burnaby and virtually across BC.",
  keywords: [
    "EMDR therapist",
    "EMDR therapy",
    "trauma therapist",
    "PTSD treatment",
    "EMDR counselling",
    "eye movement desensitization",
    "trauma recovery therapy",
    "EMDR for PTSD",
    "childhood trauma therapy",
    "relationship trauma EMDR",
    "EMDR in Burnaby",
    "EMDR therapist BC",
    "registered EMDR therapist",
    "trauma-focused therapy",
    "EMDR for anxiety",
    "grief counselling EMDR",
    "attachment trauma therapy",
    "emotional abuse recovery EMDR",
    "EMDR for women",
    "evidence-based trauma therapy",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: pageUrl,
    siteName: "MyOasis Counselling",
    title: "EMDR Therapist | Trauma Recovery Specialist — Gurpreet",
    description:
      "Professional EMDR therapy for trauma, PTSD, and childhood wounds. Gurpreet is an RCC specializing in evidence-based trauma treatment. In-person in Burnaby & virtual across BC.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "EMDR Therapist | Trauma Recovery — MyOasis Counselling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EMDR Therapist | Trauma Recovery | MyOasis Counselling",
    description:
      "EMDR specialist for trauma, PTSD, and emotional wounds. Gurpreet offers evidence-based trauma therapy in Burnaby and across BC. Healing is possible.",
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
      name: "EMDR Therapist | Trauma Recovery | MyOasis Counselling",
      description:
        "EMDR (Eye Movement Desensitization and Reprocessing) therapist specializing in trauma recovery, PTSD, childhood wounds, and relationship trauma. Gurpreet is a Registered Clinical Counsellor offering evidence-based EMDR therapy.",
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
            name: "EMDR Therapist",
            item: pageUrl,
          },
        ],
      },
    },
    {
      "@type": "MedicalBusiness",
      "@id": `${pageUrl}/#business`,
      name: "MyOasis Counselling — EMDR Therapy",
      description: "Professional EMDR therapy and trauma counselling services",
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
      name: "EMDR Therapy for Trauma",
      description:
        "Evidence-based EMDR (Eye Movement Desensitization and Reprocessing) therapy for trauma, PTSD, childhood wounds, relationship trauma, grief, anxiety, and emotional processing.",
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
          name: "What is EMDR therapy and how does it work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based therapy that helps the brain reprocess traumatic memories. Using bilateral stimulation (eye movements, tapping, or sounds), EMDR helps reduce the emotional charge of traumatic experiences and allows your brain to naturally process and integrate these memories.",
          },
        },
        {
          "@type": "Question",
          name: "What can EMDR therapy treat?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EMDR is effective for PTSD, childhood trauma, relationship trauma, emotional abuse, grief, loss, anxiety, panic attacks, and other distressing life experiences. It's particularly powerful for trauma that feels 'stuck' or continues to affect your daily life.",
          },
        },
        {
          "@type": "Question",
          name: "Is EMDR therapy evidence-based?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. EMDR is recognized by the American Psychiatric Association, the World Health Organization, and the Veterans Affairs as an effective trauma treatment. Decades of research support its effectiveness for PTSD and trauma.",
          },
        },
        {
          "@type": "Question",
          name: "How long does EMDR therapy take?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The length of EMDR therapy varies depending on the complexity and duration of your trauma. Some people experience significant relief in a few sessions, while others may benefit from ongoing therapy. Gurpreet will discuss your timeline and expectations during your consultation.",
          },
        },
      ],
    },
  ],
};

const painPoints = [
  "Traumatic memories feel like they're happening right now, even though they're in the past",
  "You experience flashbacks, nightmares, or intrusive thoughts about past events",
  "Certain situations, people, or sounds trigger intense fear or emotional reactions",
  "You've tried traditional talk therapy but feel stuck or like something's missing",
  "Childhood wounds are affecting your adult relationships and self-esteem",
  "You carry guilt, shame, or blame about something that happened to you",
  "You're ready for real change but need a specialized approach to trauma",
];

export default function EMDRTherapistPage() {
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
                  EMDR Therapy · Trauma Specialist · Registered Clinical Counsellor
                </span>

                <h1 className="font-cormorant text-display-xl text-forest text-balance leading-[1.0] font-light">
                  Trauma doesn&apos;t have to{" "}
                  <em className="not-italic text-sage">define your future.</em>
                </h1>

                <p className="font-outfit text-forest/65 text-lg leading-relaxed max-w-[44ch] font-light">
                  EMDR therapy is an evidence-based approach that helps your brain reprocess traumatic memories — reducing their emotional grip and allowing you to move forward. Gurpreet is a Registered Clinical Counsellor specializing in EMDR for trauma, PTSD, and childhood wounds.
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
                    "EMDR Therapy",
                    "Trauma Recovery",
                    "PTSD Treatment",
                    "Childhood Trauma",
                    "Evidence-Based",
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
                    alt="Gurpreet, EMDR Therapist & Registered Clinical Counsellor — Trauma Recovery"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute bottom-5 left-5 right-5 bg-offwhite/95 backdrop-blur-sm rounded-2xl p-4 border border-sand/40 shadow-lg shadow-forest/5">
                    <p className="font-outfit text-[10px] uppercase tracking-widest text-sage mb-1">
                      EMDR Therapist & RCC
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
                If any of this sounds familiar
              </span>
              <h2 className="font-cormorant text-display-md text-forest font-light text-balance max-w-[22ch] mb-12">
                Healing is possible.
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
                EMDR doesn&apos;t erase what happened, but it helps your brain process the memory in a new way — reducing its power over your present moment and your future.
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
