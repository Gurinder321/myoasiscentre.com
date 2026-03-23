import FadeUp from "./FadeUp";

const steps = [
  {
    num: "01",
    title: "Reach out",
    body: "Send a message or give a call — no long forms, no waiting rooms. Just a simple hello when you're ready.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 7C4 5.9 4.9 5 6 5H22C23.1 5 24 5.9 24 7V18C24 19.1 23.1 20 22 20H16L10 24V20H6C4.9 20 4 19.1 4 18V7Z" stroke="#7A9E7E" strokeWidth="1.4" strokeLinejoin="round"/>
        <path d="M9 11H19M9 15H15" stroke="#7A9E7E" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: "02",
    title: "Free 15-min consultation",
    body: "We'll have a brief, no-pressure call to see if we're a good fit. You can ask questions, share what's going on, and decide in your own time.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="9" stroke="#7A9E7E" strokeWidth="1.4"/>
        <path d="M14 9V14.5L17 17" stroke="#7A9E7E" strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="1.5" fill="#7A9E7E"/>
      </svg>
    ),
  },
  {
    num: "03",
    title: "Begin your sessions",
    body: "Book your first full session — virtual from anywhere in BC, or in-person at our Burnaby office. We'll go at your pace, always.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M7 14L11.5 18.5L21 9" stroke="#7A9E7E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="14" r="10" stroke="#7A9E7E" strokeWidth="1.4"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="py-[clamp(5rem,10vw,9rem)] bg-parchment" id="how-it-works">
      <div className="section-wrap">
        {/* Header */}
        <div className="max-w-xl mb-16 lg:mb-20">
          <FadeUp>
            <span className="label flex items-center gap-3 mb-6">
              <span className="w-6 h-px bg-sage inline-block" />
              Getting started
            </span>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="font-cormorant text-display-md text-forest font-light leading-[1.1]">
              Getting started is easier than you think.
            </h2>
          </FadeUp>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <FadeUp key={step.num} delay={i * 120}>
              <div className="relative flex flex-col gap-6 p-8 bg-offwhite rounded-3xl border border-sand/40 hover:border-sage/40 hover:shadow-lg hover:shadow-forest/5 transition-all duration-500 group h-full">
                {/* Large step number (background) */}
                <span className="absolute top-6 right-7 font-cormorant text-6xl text-forest/5 font-light leading-none select-none pointer-events-none">
                  {step.num}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-sage/10 flex items-center justify-center group-hover:bg-sage/20 transition-colors duration-300">
                  {step.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3 className="font-cormorant text-display-sm text-forest font-light leading-tight">
                    {step.title}
                  </h3>
                  <p className="font-outfit text-forest/65 text-base leading-relaxed">
                    {step.body}
                  </p>
                </div>

                {/* Connector line between cards (desktop only) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-14 -right-4 w-8 h-px bg-sage/30 z-10" />
                )}
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeUp delay={400}>
          <div className="mt-14 flex flex-col sm:flex-row items-center gap-6 justify-center">
            <a href="#contact" className="btn-primary">
              Book Your Free Consultation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7H12M7 2L12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <p className="font-outfit text-sm text-forest/50">
              No commitment required · Reply within 24 hours
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
