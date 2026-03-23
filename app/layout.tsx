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
  title: "Gurpreet | Registered Clinical Counsellor — Vancouver, BC",
  description:
    "Warm, evidence-based counselling for adults navigating anxiety, burnout, trauma, and life transitions. Virtual & in-person sessions in Burnaby, BC. Book a free 15-minute consultation.",
  keywords: [
    "counselling Vancouver",
    "therapy Burnaby",
    "anxiety counselling BC",
    "EMDR therapist Vancouver",
    "registered clinical counsellor",
    "couples counselling Vancouver",
    "trauma therapy BC",
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
