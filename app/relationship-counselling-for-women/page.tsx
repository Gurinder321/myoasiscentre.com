import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";
import Contact from "@/components/Contact";

const siteUrl = "https://www.myoasiscentre.com";
const pageUrl = `${siteUrl}/relationship-counselling-for-women`;

export const metadata: Metadata = {
  title: "Relationship Counselling for Women in BC | MyOasis Counselling",
  description:
    "Struggling in your relationship? Gurpreet is a Registered Clinical Counsellor helping women across BC heal from anxious attachment, codependency, emotional abuse, and unhealthy relationship patterns. Virtual across BC & in-person in Burnaby.",
  keywords: [
    "relationship counselling for women",
    "relationship therapist for women Burnaby",
    "relationship counselling Vancouver women",
    "women relationship therapy BC",
    "codependency counselling Burnaby",
    "codependency therapy Vancouver",
    "anxious attachment therapy BC",
    "anxious attachment counsellor Burnaby",
    "toxic relationship help BC",
    "emotional abuse support therapy Burnaby",
    "relationship anxiety counselling Vancouver",
    "women therapist Burnaby",
    "break unhealthy relationship patterns therapy",
    "self-worth counselling women BC",
    "people pleasing therapy Burnaby",
    "couples counselling women Burnaby",
    "relationship trauma therapy BC",
    "attachment issues counselling Vancouver",
    "RCC relationship counselling Burnaby",
    "online relationship therapy BC women",
    "EMDR relationship trauma Burnaby",
    "EMDR therapy for women Vancouver",
    "EMDR emotional abuse recovery BC",
    "EMDR attachment trauma counselling",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: pageUrl,
    siteName: "MyOasis Counselling",
    title: "Relationship Counselling for Women | MyOasis Counselling — BC",
    description:
      "Feel stuck, anxious, or lost in your relationship? Gurpreet is an RCC helping women across BC break unhealthy patterns, heal from emotional pain, and reconnect with themselves.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Relationship Counselling for Women — MyOasis Counselling, BC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relationship Counselling for Women | MyOasis Counselling",
    description:
      "Anxious attachment, codependency, emotional abuse recovery — warm, evidence-based support for women across BC. Virtual & in-person in Burnaby.",
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
      name: "Relationship Counselling for Women in BC | MyOasis Counselling",
      description:
        "Counselling for women struggling with anxious attachment, codependency, emotional abuse, and unhealthy relationship patterns. RCC Gurpreet serves clients across BC virtually and in-person in Burnaby.",
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
            name: "Relationship Counselling for Women",
            item: pageUrl,
          },
        ],
      },
    },
    {
      "@type": "MedicalTherapy",
      "@id": `${pageUrl}/#service`,
      name: "Relationship Counselling for Women",
      description:
        "Specialized counselling for women navigating relationship struggles including anxious attachment, codependency, emotional abuse recovery, EMDR for relationship trauma, and breaking unhealthy patterns.",
      provider: { "@id": `${siteUrl}/#business` },
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
          name: "Do I need to be in a relationship to benefit from relationship counselling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not at all. Many women come to relationship counselling on their own — to understand past patterns, work through a breakup or separation, build self-worth, or prepare for healthier connections in the future.",
          },
        },
        {
          "@type": "Question",
          name: "What is anxious attachment and can therapy help?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Anxious attachment is a relationship pattern where you feel insecure, fear abandonment, and may seek constant reassurance from a partner. It often develops in childhood. Therapy is highly effective at helping you understand and shift these patterns.",
          },
        },
        {
          "@type": "Question",
          name: "Is relationship counselling available online in BC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Gurpreet offers virtual counselling to clients anywhere in British Columbia. In-person sessions are also available in Burnaby and Langley.",
          },
        },
        {
          "@type": "Question",
          name: "What is EMDR and how does it help with relationship issues?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based therapy that helps the brain reprocess distressing memories — including past relationship trauma, childhood wounds, or betrayal. When unresolved experiences drive your current relationship patterns, EMDR can help clear the root cause.",
          },
        },
      ],
    },
  ],
};

const painPoints = [
  "You keep ending up in the same type of relationship, no matter how hard you try",
  "You feel anxious, clingy, or terrified of being abandoned — even when things seem fine",
  "You lose yourself trying to keep your partner happy",
  "You walk on eggshells, never knowing what mood they'll be in",
  "You've been told you're \"too sensitive\" or \"too much\"",
  "You stayed longer than you should have because you thought things would change",
  "You don't trust yourself anymore when it comes to love",
];

export default function RelationshipCounsellingForWomenPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
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
                  Relationship Counselling · Women · Accepting Clients Across BC
                </span>

                <h1 className="font-cormorant text-display-xl text-forest text-balance leading-[1.0] font-light">
                  You deserve a relationship{" "}
                  <em className="not-italic text-sage">that feels safe.</em>
                </h1>

                <p className="font-outfit text-forest/65 text-lg leading-relaxed max-w-[44ch] font-light">
                  If you feel anxious, lost, or like you keep ending up in the
                  same painful place — this is for you. Warm, evidence-based
                  counselling for women ready to understand their patterns and
                  build something healthier. Virtual across BC, in-person in Burnaby.
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
                    "Anxious Attachment",
                    "Codependency",
                    "EMDR Therapy",
                    "Emotional Abuse Recovery",
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
                    alt="Gurpreet, Registered Clinical Counsellor — Relationship Counselling for Women across BC"
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
                Does this sound familiar?
              </span>
              <h2 className="font-cormorant text-display-md text-forest font-light text-balance max-w-[22ch] mb-12">
                You&apos;re not broken. You&apos;re exhausted.
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
                These feelings are real, and they make sense. But they don&apos;t have to be permanent.
                Counselling can help you understand <em>why</em> you end up here — and build something different.
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
