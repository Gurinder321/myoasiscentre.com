"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    setMounted(false);
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-center bg-parchment overflow-hidden">
      {/* Subtle ambient background shape */}
      <div
        className="absolute top-0 right-0 w-[55%] h-full bg-sand-light/40 rounded-bl-[80px] pointer-events-none"
        aria-hidden="true"
      />
      {/* Grain texture overlay */}
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
            {/* Pre-heading label */}
            <div
              className="transition-all duration-700 ease-spring"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "100ms",
              }}
            >
              <span className="label flex items-center gap-3">
                <span className="w-6 h-px bg-sage inline-block" />
                Registered Clinical Counsellor · Vancouver, BC
              </span>
            </div>

            {/* Main headline */}
            <div
              className="transition-all duration-700 ease-spring"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(28px)",
                transitionDelay: "200ms",
              }}
            >
              <h1 className="font-cormorant text-display-xl text-forest text-balance leading-[1.0] font-light">
                You deserve to feel{" "}
                <em className="not-italic text-sage">like yourself</em>{" "}
                again.
              </h1>
            </div>

            {/* Subhead */}
            <div
              className="transition-all duration-700 ease-spring"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "340ms",
              }}
            >
              <p className="font-outfit text-forest/65 text-lg leading-relaxed max-w-[42ch] font-light">
                Evidence-based counselling for adults navigating anxiety,
                burnout, trauma, relationship challenges, and life transitions —
                virtual or in-person across BC.
              </p>
            </div>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 transition-all duration-700 ease-spring"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(20px)",
                transitionDelay: "460ms",
              }}
            >
              <a href="#contact" className="btn-primary">
                Book a Free 15-Min Consultation
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                  <path d="M2 7H12M7 2L12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="tel:2365122828"
                className="font-outfit text-sm text-forest/60 hover:text-sage transition-colors duration-200 flex items-center gap-2"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 2.5C2 2.5 3.5 1 4.5 2C5.5 3 5 4.5 5 4.5C5 4.5 6.5 7 9 8.5C9 8.5 10.5 8 11.5 9C12.5 10 11 11.5 11 11.5C8 13 1 6 2 2.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                </svg>
                (236) 512-2828
              </a>
            </div>

            {/* Quick trust signals */}
            <div
              className="flex flex-wrap gap-3 transition-all duration-700 ease-spring"
              style={{
                opacity: mounted ? 1 : 0,
                transitionDelay: "560ms",
              }}
            >
              {["Virtual & In-Person", "Free Consultation", "Mon–Sat 8am–9pm", "RCC #22668"].map((tag) => (
                <span
                  key={tag}
                  className="font-outfit text-xs text-forest/60 bg-offwhite border border-sand/50 px-3 py-1.5 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right — Photo placeholder with ambient design */}
          <div
            className="relative hidden lg:flex justify-center items-center transition-all duration-1000 ease-spring"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0) scale(1)" : "translateY(16px) scale(0.98)",
              transitionDelay: "300ms",
            }}
          >
            {/* Decorative ring */}
            <div className="absolute w-[105%] h-[105%] rounded-[40px] border border-sage/20 pointer-events-none" />

            {/* Photo container */}
            <div className="relative w-full aspect-[3/4] max-w-sm rounded-[36px] overflow-hidden bg-sand-light">
              {/* Placeholder — replace with <Image src="/gurpreet.jpg" ... /> */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-gradient-to-b from-sand-light via-sand to-forest/10">
                <div className="w-20 h-20 rounded-full bg-sage/30 flex items-center justify-center">
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <circle cx="16" cy="12" r="6" stroke="#7A9E7E" strokeWidth="1.5"/>
                    <path d="M4 28C4 22 9 18 16 18C23 18 28 22 28 28" stroke="#7A9E7E" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <p className="font-cormorant text-lg text-forest/50 italic">Gurpreet's photo here</p>
                <p className="font-outfit text-xs text-forest/40 text-center px-6">
                  Replace this div with:<br/>
                  <code className="text-sage text-[10px]">&lt;Image src="/gurpreet.jpg" fill .../&gt;</code>
                </p>
              </div>

              {/* Floating credential badge */}
              <div className="absolute bottom-5 left-5 right-5 bg-offwhite/95 backdrop-blur-sm rounded-2xl p-4 border border-sand/40 shadow-lg shadow-forest/5">
                <p className="font-outfit text-[10px] uppercase tracking-widest text-sage mb-1">Registered Clinical Counsellor</p>
                <p className="font-cormorant text-lg text-forest font-medium">Gurpreet</p>
                <p className="font-outfit text-xs text-forest/50">BC Association of Clinical Counsellors · #22668</p>
              </div>
            </div>

            {/* Ambient decorative element */}
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

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 ease-spring hidden md:flex flex-col items-center gap-2"
          style={{ opacity: mounted ? 0.4 : 0, transitionDelay: "800ms" }}
        >
          <div className="w-px h-8 bg-forest/30 animate-[pulse_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
