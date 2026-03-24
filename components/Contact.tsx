"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";

// 1. Go to https://formspree.io and create a free account
// 2. Create a new form pointed at gurpreet@myoasiscounselling.com
// 3. Replace YOUR_FORM_ID below with your actual Formspree form ID
const FORMSPREE_ID = "xojkokze";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please email us directly at gurpreet@myoasiscounselling.com");
      }
    } catch {
      setError("Something went wrong. Please email us directly at gurpreet@myoasiscounselling.com");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const inputClass =
    "w-full font-outfit text-base text-forest bg-parchment border border-sand/60 rounded-xl px-4 py-3.5 focus:outline-none focus:border-sage focus:ring-2 focus:ring-sage/20 transition-all duration-200 placeholder:text-forest/30";

  return (
    <section className="py-[clamp(5rem,10vw,9rem)] bg-parchment" id="contact">
      <div className="section-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">

          {/* Left — CTA copy */}
          <div className="lg:sticky lg:top-32 self-start">
            <FadeUp>
              <span className="label flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-sage inline-block" />
                Book a consultation
              </span>
            </FadeUp>
            <FadeUp delay={100}>
              <h2 className="font-cormorant text-display-md text-forest font-light leading-[1.1] mb-6">
                You don&apos;t have to keep managing this alone.
              </h2>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="font-outfit text-forest/65 text-base leading-relaxed max-w-text-sm mb-10">
                The hardest part is often just reaching out. If you&apos;re ready — or even just
                curious — I&apos;d love to hear from you. The first consultation is free, brief,
                and completely no-pressure.
              </p>
            </FadeUp>

            {/* Contact details */}
            <FadeUp delay={280}>
              <div className="flex flex-col gap-4 mb-10">
                {[
                  {
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M2 3.5C2 3.5 4 2 5 3C6 4 5.5 5.5 5.5 5.5C5.5 5.5 7 8 9 9.5C9 9.5 10.5 9 11.5 10C12.5 11 11 12.5 11 12.5C8 14 1 7 2 3.5Z" stroke="#7D5A3C" strokeWidth="1.2"/>
                      </svg>
                    ),
                    label: "Phone",
                    value: "(236) 512-2828",
                    href: "tel:2365122828",
                  },
                  {
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="#7D5A3C" strokeWidth="1.2"/>
                        <path d="M2 6L8 9.5L14 6" stroke="#7D5A3C" strokeWidth="1.2"/>
                      </svg>
                    ),
                    label: "Email",
                    value: "gurpreet@myoasiscounselling.com",
                    href: "mailto:gurpreet@myoasiscounselling.com",
                  },
                  {
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 2C5.8 2 4 3.8 4 6C4 8.8 8 14 8 14C8 14 12 8.8 12 6C12 3.8 10.2 2 8 2Z" stroke="#7D5A3C" strokeWidth="1.2"/>
                        <circle cx="8" cy="6" r="1.5" fill="#7D5A3C"/>
                      </svg>
                    ),
                    label: "Location",
                    value: "Burnaby: 201-3701 Hastings St · Langley: 9440 202 St #321",
                    href: "https://maps.google.com/?q=3701+Hastings+Street+Burnaby+BC",
                  },
                  {
                    icon: (
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="5.5" stroke="#7D5A3C" strokeWidth="1.2"/>
                        <path d="M8 5V8.5L10 10" stroke="#7D5A3C" strokeWidth="1.2" strokeLinecap="round"/>
                      </svg>
                    ),
                    label: "Hours",
                    value: "Monday–Saturday, 8am–9pm",
                    href: null,
                  },
                ].map(({ icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-sage/10 flex items-center justify-center">
                      {icon}
                    </div>
                    <div>
                      <p className="font-outfit text-xs uppercase tracking-wider text-forest/40 mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="font-outfit text-sm text-forest/80 hover:text-sage transition-colors duration-200">
                          {value}
                        </a>
                      ) : (
                        <p className="font-outfit text-sm text-forest/80">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* Session format tags */}
            <FadeUp delay={360}>
              <div className="flex flex-wrap gap-2">
                {["Virtual Sessions (All of BC)", "In-Person (Burnaby)", "In-Person (Langley)"].map((tag) => (
                  <span key={tag} className="font-outfit text-xs text-forest/60 bg-offwhite border border-sand/60 px-3 py-1.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>

          {/* Right — Form */}
          <FadeUp delay={150}>
            <div className="bg-offwhite rounded-3xl border border-sand/50 p-8 lg:p-10">
              {!submitted ? (
                <>
                  <h3 className="font-cormorant text-display-sm text-forest font-light mb-2">
                    Book a Free Consultation
                  </h3>
                  <p className="font-outfit text-sm text-forest/50 mb-8">
                    15 minutes · No obligation · Confidential
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-outfit text-xs uppercase tracking-wider text-forest/50">
                          Your name *
                        </label>
                        <input
                          name="name"
                          type="text"
                          required
                          placeholder="First name is fine"
                          value={form.name}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-outfit text-xs uppercase tracking-wider text-forest/50">
                          Email *
                        </label>
                        <input
                          name="email"
                          type="email"
                          required
                          placeholder="you@email.com"
                          value={form.email}
                          onChange={handleChange}
                          className={inputClass}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-outfit text-xs uppercase tracking-wider text-forest/50">
                        Phone (optional)
                      </label>
                      <input
                        name="phone"
                        type="tel"
                        placeholder="(604) 000-0000"
                        value={form.phone}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-outfit text-xs uppercase tracking-wider text-forest/50">
                        What are you looking for?
                      </label>
                      <select
                        name="service"
                        value={form.service}
                        onChange={handleChange}
                        className={inputClass}
                      >
                        <option value="">Select an area (optional)</option>
                        <option>Individual Counselling</option>
                        <option>Couples Counselling</option>
                        <option>EMDR &amp; Trauma Therapy</option>
                        <option>Family Therapy</option>
                        <option>Not sure yet</option>
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-outfit text-xs uppercase tracking-wider text-forest/50">
                        A little about what&apos;s going on (optional)
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Share as much or as little as you'd like..."
                        value={form.message}
                        onChange={handleChange}
                        className={`${inputClass} resize-none`}
                      />
                    </div>

                    <button type="submit" disabled={loading} className="btn-primary justify-center mt-2 disabled:opacity-60 disabled:cursor-not-allowed">
                      {loading ? "Sending…" : "Send My Request"}
                      {!loading && (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7H12M7 2L12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>

                    {error && (
                      <p className="font-outfit text-sm text-center text-red-500">{error}</p>
                    )}

                    <p className="font-outfit text-xs text-center text-forest/40 -mt-2">
                      Your information is kept private and confidential.
                    </p>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-sage/15 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M7 14L11.5 18.5L21 9" stroke="#7D5A3C" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-cormorant text-display-sm text-forest font-light mb-3">
                      Thank you, {form.name || "friend"}.
                    </h3>
                    <p className="font-outfit text-forest/65 text-base leading-relaxed max-w-[36ch]">
                      Your message has been received. Gurpreet will follow up within 24 hours.
                      You&apos;ve taken a brave step.
                    </p>
                  </div>
                  <a href="tel:2365122828" className="btn-ghost mt-2">
                    Or call: (236) 512-2828
                  </a>
                </div>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
