import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FadeUp from "@/components/FadeUp";

const siteUrl = "https://www.myoasiscentre.com";
const pageUrl = `${siteUrl}/relationship-counselling-for-women`;

export const metadata: Metadata = {
  title: "Relationship Counselling for Women in Burnaby & Vancouver | MyOasis Counselling",
  description:
    "Struggling in your relationship? Gurpreet is a Registered Clinical Counsellor in Burnaby helping women heal from anxious attachment, codependency, emotional abuse, and unhealthy relationship patterns. Virtual across BC & in-person in Burnaby.",
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
    title: "Relationship Counselling for Women | MyOasis Counselling — Burnaby & Vancouver BC",
    description:
      "Feel stuck, anxious, or lost in your relationship? Gurpreet is an RCC helping women in BC break unhealthy patterns, heal from emotional pain, and reconnect with themselves.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Relationship Counselling for Women — MyOasis Counselling, Burnaby BC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Relationship Counselling for Women | MyOasis Counselling",
    description:
      "Anxious attachment, codependency, emotional abuse recovery — warm, evidence-based support for women in BC. Virtual & in-person in Burnaby.",
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
      name: "Relationship Counselling for Women in Burnaby & Vancouver | MyOasis Counselling",
      description:
        "Counselling for women struggling with anxious attachment, codependency, emotional abuse, and unhealthy relationship patterns. RCC Gurpreet serves Burnaby, Vancouver, and virtual clients across BC.",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#business` },
      inLanguage: "en-CA",
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteUrl,
          },
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
        "Specialized counselling for women navigating relationship struggles including anxious attachment, codependency, emotional abuse recovery, and breaking unhealthy patterns.",
      provider: { "@id": `${siteUrl}/#business` },
      areaServed: [
        { "@type": "City", name: "Burnaby", containedInPlace: { "@type": "Province", name: "British Columbia" } },
        { "@type": "City", name: "Vancouver", containedInPlace: { "@type": "Province", name: "British Columbia" } },
        { "@type": "City", name: "Langley", containedInPlace: { "@type": "Province", name: "British Columbia" } },
        { "@type": "State", name: "British Columbia" },
      ],
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
            text: "Not at all. Many women come to relationship counselling on their own — to understand past patterns, work through a breakup or separation, build self-worth, or prepare for healthier connections in the future. You don't need a partner present.",
          },
        },
        {
          "@type": "Question",
          name: "What is anxious attachment and can therapy help?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Anxious attachment is a relationship pattern where you feel insecure, fear abandonment, and may seek constant reassurance from a partner. It often develops in childhood. Yes — therapy is highly effective at helping you understand and shift attachment patterns so you can feel more secure in relationships.",
          },
        },
        {
          "@type": "Question",
          name: "How do I know if I'm in an emotionally abusive relationship?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Emotional abuse can be subtle. Common signs include feeling constantly criticized, walking on eggshells, being isolated from friends or family, having your feelings dismissed or minimized, and feeling like nothing you do is ever good enough. A counsellor can help you make sense of your experience in a safe, non-judgmental space.",
          },
        },
        {
          "@type": "Question",
          name: "Is relationship counselling available online in BC?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Gurpreet offers virtual counselling to clients anywhere in British Columbia, making it easy to access support from the comfort of your own home. In-person sessions are also available in Burnaby and Langley.",
          },
        },
        {
          "@type": "Question",
          name: "What approaches does Gurpreet use for relationship counselling?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Gurpreet draws on Emotion-Focused Therapy (EFT), Attachment Theory, Cognitive Behavioural Therapy (CBT), Acceptance and Commitment Therapy (ACT), and EMDR for trauma-related relationship wounds. Sessions are warm, collaborative, and tailored to your specific needs.",
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

const services = [
  {
    title: "Anxious Attachment",
    description:
      "Constant worry about your relationship. Needing reassurance. Fear of abandonment. Learn where these patterns come from and build genuine security — within yourself first.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 3C11 3 5 7 5 12.5C5 15.5376 7.68629 18 11 18C14.3137 18 17 15.5376 17 12.5C17 7 11 3 11 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M11 10V14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="11" cy="16" r="0.7" fill="currentColor"/>
      </svg>
    ),
  },
  {
    title: "Codependency",
    description:
      "Giving endlessly while your own needs go unmet. Difficulty saying no. Feeling responsible for your partner's emotions. Therapy helps you reclaim your sense of self.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="11" r="4.5" stroke="currentColor" strokeWidth="1.4"/>
        <circle cx="14" cy="11" r="4.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
  {
    title: "Emotional Abuse Recovery",
    description:
      "Gaslighting. Constant criticism. Isolation. Feeling like you've lost yourself. In a safe, non-judgmental space, we'll help you name what happened and begin to heal.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 4L13.5 9H18L14 12.5L15.5 18L11 15L6.5 18L8 12.5L4 9H8.5L11 4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Relationship Patterns & Cycles",
    description:
      "Why do you keep attracting the same kind of person? Together, we'll explore the underlying beliefs and experiences driving your choices — and gently shift them.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 11C5 7.68629 7.68629 5 11 5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M17 11C17 14.3137 14.3137 17 11 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M9 3L11 5L9 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13 15L11 17L13 19" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Self-Worth & Boundaries",
    description:
      "Chronic people-pleasing. Difficulty saying no. Feeling like you're never enough. We work on rebuilding a solid sense of self so that your relationships reflect your value.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 4V18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M4 11H18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    title: "Post-Breakup Healing",
    description:
      "Grief, anger, confusion, relief — all at once. Whether you left or were left, therapy gives you a space to process the loss and reconnect with who you are outside of the relationship.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 18C11 18 4 13.5 4 8.5C4 6.01472 6.01472 4 8.5 4C9.8 4 11 4.8 11 4.8C11 4.8 12.2 4 13.5 4C15.9853 4 18 6.01472 18 8.5C18 13.5 11 18 11 18Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M13.5 8.5L10.5 11.5L9 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "EMDR for Relationship Trauma",
    description:
      "Past experiences — childhood wounds, betrayal, or abuse — can quietly drive how you show up in relationships today. EMDR is an evidence-based therapy that helps reprocess these memories so they no longer control your present.",
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 11C4 11 6 7 11 7C16 7 18 11 18 11C18 11 16 15 11 15C6 15 4 11 4 11Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
        <circle cx="11" cy="11" r="2.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
  },
];

const steps = [
  {
    number: "01",
    title: "Book a Free Consultation",
    description:
      "A no-pressure 15-minute call to see if we're a good fit. You can ask questions, share a bit about what's going on, and get a feel for how Gurpreet works.",
  },
  {
    number: "02",
    title: "Begin at Your Own Pace",
    description:
      "Sessions are 50 minutes, weekly or bi-weekly. We start where you are — no homework, no pressure, just an honest conversation. Virtual or in-person in Burnaby.",
  },
  {
    number: "03",
    title: "Build the Life You Want",
    description:
      "Over time, you'll develop clarity, self-trust, and tools to navigate relationships differently — feeling more like yourself than you have in years.",
  },
];

const faqs = [
  {
    q: "Do I need to be in a relationship to benefit from relationship counselling?",
    a: "Not at all. Many women come on their own — to understand past patterns, work through a breakup, build self-worth, or prepare for healthier connections in the future. You don't need a partner present.",
  },
  {
    q: "What is anxious attachment and can therapy help?",
    a: "Anxious attachment is a relationship pattern where you feel insecure, fear abandonment, and may seek constant reassurance. It often develops in childhood. Yes — therapy is highly effective at helping you understand and shift these patterns so you can feel more secure.",
  },
  {
    q: "How do I know if I'm in an emotionally abusive relationship?",
    a: "Emotional abuse can be subtle. Common signs include feeling constantly criticized, walking on eggshells, being isolated from people you love, having your feelings dismissed, and feeling like nothing you do is good enough. A counsellor can help you make sense of your experience safely.",
  },
  {
    q: "Is relationship counselling available online in BC?",
    a: "Yes. Gurpreet offers virtual counselling to clients anywhere in British Columbia, making it easy to access support from the comfort of your own home. In-person sessions are available in Burnaby and Langley.",
  },
  {
    q: "What approaches does Gurpreet use?",
    a: "Gurpreet draws on Emotion-Focused Therapy (EFT), Attachment Theory, CBT, ACT, and EMDR for trauma-related relationship wounds. Sessions are warm, collaborative, and tailored to you.",
  },
  {
    q: "What is EMDR and how does it help with relationship issues?",
    a: "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based therapy that helps the brain reprocess distressing memories — including past relationship trauma, childhood wounds, or betrayal. When unresolved experiences drive your current relationship patterns (like chronic anxiety, mistrust, or shutting down emotionally), EMDR can help clear the root cause rather than just managing the symptoms.",
  },
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
                  Relationship Counselling · Women · Burnaby &amp; Virtual BC
                </span>

                <h1 className="font-cormorant text-display-xl text-forest text-balance leading-[1.0] font-light">
                  You deserve a relationship{" "}
                  <em className="not-italic text-sage">that feels safe.</em>
                </h1>

                <p className="font-outfit text-forest/65 text-lg leading-relaxed max-w-[44ch] font-light">
                  If you feel anxious, lost, or like you keep ending up in the
                  same painful place — this is for you. Warm, evidence-based
                  counselling for women ready to understand their patterns and
                  build something healthier.
                </p>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <a href="#contact" className="btn-primary">
                    Book a Free 15-Min Consultation
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
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
                    alt="Gurpreet, Registered Clinical Counsellor — Relationship Counselling for Women in Burnaby BC"
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

        {/* ── WHAT WE WORK ON ── */}
        <section className="bg-parchment py-section" id="relationship-services">
          <div className="section-wrap">
            <FadeUp>
              <span className="label flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-sage inline-block" />
                What we work on together
              </span>
              <h2 className="font-cormorant text-display-md text-forest font-light text-balance max-w-[26ch] mb-4">
                Areas of focus for women in{" "}
                <em className="not-italic text-sage">relationship counselling</em>
              </h2>
              <p className="font-outfit text-forest/60 text-base leading-relaxed max-w-[54ch] mb-14">
                Every woman&apos;s experience is different. Gurpreet tailors each session to your specific
                situation — no cookie-cutter approaches.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {services.map((service, i) => (
                <FadeUp key={i} delay={i * 80}>
                  <div className="group bg-offwhite rounded-3xl p-7 border border-sand/30 hover:border-sage/40 hover:shadow-lg hover:shadow-forest/5 transition-all duration-300 h-full flex flex-col gap-5">
                    <div className="w-10 h-10 rounded-xl bg-sand-light/70 flex items-center justify-center text-sage group-hover:bg-sage/15 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="font-cormorant text-display-sm text-forest font-medium mb-3">
                        {service.title}
                      </h3>
                      <p className="font-outfit text-forest/60 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT GURPREET ── */}
        <section className="bg-sand-light/40 py-section">
          <div className="section-wrap">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FadeUp className="order-2 lg:order-1">
                <span className="label flex items-center gap-3 mb-6">
                  <span className="w-6 h-px bg-sage inline-block" />
                  Your counsellor
                </span>
                <h2 className="font-cormorant text-display-md text-forest font-light text-balance mb-6">
                  A safe space to be{" "}
                  <em className="not-italic text-sage">fully honest.</em>
                </h2>
                <div className="flex flex-col gap-5 font-outfit text-forest/65 text-base leading-relaxed">
                  <p>
                    I&apos;m Gurpreet — a Registered Clinical Counsellor (RCC #22668) with a Master of Arts
                    in Counselling Psychology. I work with women who are tired of feeling stuck,
                    anxious, or unseen in their relationships.
                  </p>
                  <p>
                    My approach is warm, direct, and non-judgmental. I draw on Attachment Theory,
                    Emotion-Focused Therapy, CBT, and EMDR to help you understand the roots of
                    your patterns — not just manage the surface symptoms.
                  </p>
                  <p>
                    You don&apos;t have to figure this out alone. And you don&apos;t have to be in crisis to
                    reach out. If you&apos;re just starting to question things, that&apos;s enough.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "MA Counselling Psychology",
                    "BA Psychology, SFU",
                    "EMDR Trained",
                    "Emotion-Focused Therapy",
                    "RCC #22668",
                  ].map((cred) => (
                    <span
                      key={cred}
                      className="font-outfit text-xs text-forest/60 bg-offwhite border border-sand/50 px-3 py-1.5 rounded-full"
                    >
                      {cred}
                    </span>
                  ))}
                </div>
              </FadeUp>

              <FadeUp delay={150} className="order-1 lg:order-2 flex justify-center">
                <div className="relative w-full max-w-xs">
                  <div className="absolute w-full h-full rounded-[32px] border border-sage/20 translate-x-3 translate-y-3 pointer-events-none" />
                  <div className="relative aspect-[3/4] rounded-[32px] overflow-hidden bg-sand-light">
                    <Image
                      src="/gurpreet.png"
                      alt="Gurpreet — Registered Clinical Counsellor specializing in relationship counselling for women in Burnaby BC"
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="bg-parchment py-section">
          <div className="section-wrap">
            <FadeUp>
              <span className="label flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-sage inline-block" />
                Getting started
              </span>
              <h2 className="font-cormorant text-display-md text-forest font-light text-balance mb-14">
                Simple, straightforward,{" "}
                <em className="not-italic text-sage">at your pace.</em>
              </h2>
            </FadeUp>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {steps.map((step, i) => (
                <FadeUp key={i} delay={i * 100}>
                  <div className="flex flex-col gap-5">
                    <span className="font-cormorant text-[3rem] text-sage/30 font-light leading-none">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-cormorant text-display-sm text-forest font-medium mb-3">
                        {step.title}
                      </h3>
                      <p className="font-outfit text-forest/60 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="bg-offwhite py-section" id="relationship-faq">
          <div className="section-wrap">
            <FadeUp>
              <span className="label flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-sage inline-block" />
                Common questions
              </span>
              <h2 className="font-cormorant text-display-md text-forest font-light text-balance mb-14 max-w-[24ch]">
                Questions about relationship counselling for women
              </h2>
            </FadeUp>

            <div className="max-w-2xl flex flex-col divide-y divide-sand/40">
              {faqs.map((faq, i) => (
                <FadeUp key={i} delay={i * 70}>
                  <div className="py-7">
                    <h3 className="font-cormorant text-display-sm text-forest font-medium mb-3">
                      {faq.q}
                    </h3>
                    <p className="font-outfit text-forest/60 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="bg-forest py-section" id="contact">
          <div className="section-wrap text-center">
            <FadeUp>
              <span className="label flex items-center justify-center gap-3 mb-6 text-sand/50">
                <span className="w-6 h-px bg-sand/30 inline-block" />
                Take the first step
              </span>
              <h2 className="font-cormorant text-display-lg text-offwhite font-light text-balance mb-6 max-w-[22ch] mx-auto">
                You don&apos;t have to keep feeling this way.
              </h2>
              <p className="font-outfit text-offwhite/55 text-base leading-relaxed max-w-[48ch] mx-auto mb-10">
                Reaching out is the hardest part. A free 15-minute consultation is a no-pressure
                conversation — just a chance to connect and see if counselling might help.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:gurpreet@myoasiscounselling.com"
                  className="inline-flex items-center gap-2.5 bg-offwhite text-forest font-outfit text-sm font-medium px-7 py-3.5 rounded-full hover:bg-sand-light transition-colors duration-200"
                >
                  Book a Free Consultation
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7H12M7 2L12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href="tel:2365122828"
                  className="font-outfit text-sm text-offwhite/50 hover:text-offwhite/80 transition-colors duration-200 flex items-center gap-2"
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 2.5C2 2.5 3.5 1 4.5 2C5.5 3 5 4.5 5 4.5C5 4.5 6.5 7 9 8.5C9 8.5 10.5 8 11.5 9C12.5 10 11 11.5 11 11.5C8 13 1 6 2 2.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
                  </svg>
                  (236) 512-2828
                </a>
              </div>

              <p className="mt-10 font-outfit text-xs text-offwhite/30 tracking-wide uppercase">
                Virtual across BC &nbsp;·&nbsp; In-Person in Burnaby &amp; Langley
              </p>
            </FadeUp>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
