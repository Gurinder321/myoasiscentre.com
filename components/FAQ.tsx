"use client";

import { useState } from "react";
import FadeUp from "./FadeUp";

const faqs = [
  {
    q: "What happens in the first session?",
    a: "The first session is about getting to know each other. We'll talk about what brought you in, what you're hoping to work on, and what feels important to you. There's no pressure to share more than you're comfortable with — we'll move at your pace.",
  },
  {
    q: "Do you offer virtual sessions?",
    a: "Yes. Virtual sessions are available for anyone in BC via a secure, HIPAA-compliant video platform. Many clients find virtual sessions just as effective as in-person — and more convenient.",
  },
  {
    q: "How long are sessions and how often should I come?",
    a: "Sessions are 50 minutes. How often you attend depends on your goals and needs — most clients start weekly, then adjust as they progress. We'll discuss what makes sense for you.",
  },
  {
    q: "Do you accept extended health insurance?",
    a: "Many extended health plans cover Registered Clinical Counsellors. I'd recommend checking with your provider directly. I can provide receipts for reimbursement.",
  },
  {
    q: "What's EMDR and how do I know if it's right for me?",
    a: "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based therapy for trauma, PTSD, and distressing memories. It doesn't require you to talk through every detail of what happened. We'll discuss whether it's a good fit during the consultation.",
  },
  {
    q: "What if I'm not sure therapy is for me?",
    a: "That's completely normal. The free 15-minute consultation is specifically designed for this — no commitment, no pressure. You can ask questions, get a sense of how I work, and decide in your own time.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border-b border-sand/50 last:border-b-0 transition-colors duration-300 ${open ? "" : "hover:border-sage/40"}`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-6 py-6 text-left group"
      >
        <span className="font-cormorant text-xl text-forest font-light group-hover:text-sage transition-colors duration-200">
          {q}
        </span>
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-full border border-sand/60 flex items-center justify-center transition-all duration-300 ${
            open ? "border-sage bg-sage/10 rotate-45" : "group-hover:border-sage"
          }`}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 2V10M2 6H10" stroke={open ? "#7D5A3C" : "#1E1208"} strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-spring ${
          open ? "max-h-96 pb-6" : "max-h-0"
        }`}
      >
        <p className="font-outfit text-forest/65 text-base leading-relaxed max-w-text">
          {a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="py-[clamp(5rem,10vw,9rem)] bg-offwhite" id="faq">
      <div className="section-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24">

          {/* Left */}
          <div className="lg:sticky lg:top-32 self-start">
            <FadeUp>
              <span className="label flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-sage inline-block" />
                Common questions
              </span>
            </FadeUp>
            <FadeUp delay={100}>
              <h2 className="font-cormorant text-display-md text-forest font-light leading-[1.1] mb-6">
                Things people often ask.
              </h2>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="font-outfit text-forest/60 text-base leading-relaxed mb-8">
                Don&apos;t see your question? Reach out directly — I&apos;m happy to answer anything before you commit to anything.
              </p>
            </FadeUp>
            <FadeUp delay={300}>
              <a href="mailto:gurpreet@myoasiscounselling.com" className="btn-ghost">
                Email a question
              </a>
            </FadeUp>
          </div>

          {/* Right — FAQ accordion */}
          <FadeUp delay={100}>
            <div>
              {faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
