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

export const metadata: Metadata = {
  title: "Gurpreet | EMDR & Counselling — Burnaby & Langley, BC",
  description:
    "EMDR-trained Registered Clinical Counsellor offering trauma therapy, anxiety counselling, and couples counselling. In-person in Burnaby & Langley, BC — virtual across BC. Book a free 15-minute consultation.",
  keywords: [
    "EMDR therapist Vancouver",
    "EMDR therapy Burnaby",
    "EMDR therapy Langley",
    "trauma therapy BC",
    "registered clinical counsellor Burnaby",
    "counselling Langley BC",
    "anxiety counselling BC",
    "couples counselling Vancouver",
    "virtual counselling BC",
  ],
  openGraph: {
    title: "MyOasis Counselling | Registered Clinical Counsellor — Vancouver, BC",
    description:
      "Warm, evidence-based counselling for adults in Vancouver navigating anxiety, burnout, trauma, and life transitions.",
    type: "website",
    locale: "en_CA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="font-outfit">{children}</body>
    </html>
  );
}
