import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
  display: "swap",
});

const siteUrl = "https://www.myoasiscentre.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MyOasis Counselling | EMDR & Registered Clinical Counsellor — Burnaby & Langley, BC",
    template: "%s | MyOasis Counselling",
  },
  description:
    "Gurpreet is an EMDR-trained Registered Clinical Counsellor offering trauma therapy, anxiety counselling, couples counselling, and life transitions support. In-person in Burnaby & Langley — virtual across BC. Book a free 15-minute consultation.",
  keywords: [
    "EMDR therapist Vancouver",
    "EMDR therapy Burnaby",
    "EMDR therapy Langley",
    "trauma therapy BC",
    "trauma counselling Burnaby",
    "registered clinical counsellor Burnaby",
    "registered clinical counsellor Langley",
    "counselling Burnaby BC",
    "counselling Langley BC",
    "anxiety counselling Vancouver",
    "anxiety counselling Burnaby",
    "couples counselling Vancouver",
    "couples counselling Burnaby",
    "burnout counselling BC",
    "grief counselling Burnaby",
    "virtual counselling BC",
    "online therapy BC",
    "RCC Burnaby",
    "MyOasis Counselling",
    "Gurpreet counsellor",
  ],
  authors: [{ name: "Gurpreet", url: siteUrl }],
  creator: "Gurpreet — MyOasis Counselling",
  publisher: "MyOasis Counselling",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: "MyOasis Counselling",
    title: "MyOasis Counselling | EMDR & Registered Clinical Counsellor — Burnaby & Langley, BC",
    description:
      "Warm, evidence-based counselling for adults navigating anxiety, trauma, burnout, and life transitions. In-person in Burnaby & Langley — virtual across BC.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MyOasis Counselling — Gurpreet, Registered Clinical Counsellor",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MyOasis Counselling | EMDR & Registered Clinical Counsellor",
    description:
      "Warm, evidence-based counselling for adults navigating anxiety, trauma, burnout, and life transitions. Virtual & in-person in Burnaby & Langley, BC.",
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
  verification: {
    // Add your Google Search Console verification code here once you set it up
    // google: "your-verification-code",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": `${siteUrl}/#business`,
      name: "MyOasis Counselling",
      url: siteUrl,
      telephone: "+12365122828",
      email: "gurpreet@myoasiscounselling.com",
      description:
        "EMDR-trained Registered Clinical Counsellor offering trauma therapy, anxiety counselling, couples counselling, and support for life transitions. In-person in Burnaby & Langley, BC — virtual across BC.",
      priceRange: "$$",
      currenciesAccepted: "CAD",
      openingHours: "Mo-Sa 08:00-21:00",
      image: `${siteUrl}/gurpreet.png`,
      sameAs: [],
      hasMap: "https://maps.google.com/?q=3701+Hastings+Street+Burnaby+BC",
      location: [
        {
          "@type": "Place",
          name: "MyOasis Counselling — Burnaby",
          address: {
            "@type": "PostalAddress",
            streetAddress: "201-3701 Hastings St",
            addressLocality: "Burnaby",
            addressRegion: "BC",
            postalCode: "V5C 2H4",
            addressCountry: "CA",
          },
        },
        {
          "@type": "Place",
          name: "MyOasis Counselling — Langley",
          address: {
            "@type": "PostalAddress",
            streetAddress: "9440 202 St #321",
            addressLocality: "Langley Township",
            addressRegion: "BC",
            postalCode: "V1M 4A6",
            addressCountry: "CA",
          },
        },
      ],
      medicalSpecialty: "Counselling Psychology",
      availableService: [
        { "@type": "MedicalTherapy", name: "EMDR Therapy" },
        { "@type": "MedicalTherapy", name: "Individual Counselling" },
        { "@type": "MedicalTherapy", name: "Couples Counselling" },
        { "@type": "MedicalTherapy", name: "Trauma Therapy" },
        { "@type": "MedicalTherapy", name: "Family Therapy" },
        { "@type": "MedicalTherapy", name: "Anxiety Counselling" },
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#counsellor`,
      name: "Gurpreet",
      jobTitle: "Registered Clinical Counsellor",
      worksFor: { "@id": `${siteUrl}/#business` },
      url: siteUrl,
      image: `${siteUrl}/gurpreet.png`,
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Master of Arts in Counselling Psychology",
          educationalLevel: "Graduate",
          recognizedBy: { "@type": "Organization", name: "Yorkville University" },
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "Bachelor of Arts in Psychology",
          educationalLevel: "Undergraduate",
          recognizedBy: { "@type": "Organization", name: "Simon Fraser University" },
        },
        {
          "@type": "EducationalOccupationalCredential",
          name: "Registered Clinical Counsellor #22668",
          recognizedBy: {
            "@type": "Organization",
            name: "BC Association of Clinical Counsellors",
          },
        },
      ],
      knowsAbout: [
        "EMDR Therapy",
        "Trauma Counselling",
        "Anxiety Therapy",
        "Couples Counselling",
        "CBT",
        "ACT",
        "Emotion-Focused Therapy",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "MyOasis Counselling",
      description: "Registered Clinical Counselling in Burnaby & Langley, BC",
      publisher: { "@id": `${siteUrl}/#business` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-outfit">{children}</body>
    </html>
  );
}
