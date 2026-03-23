import FadeUp from "./FadeUp";

export default function FinalCTA() {
  return (
    <section className="py-[clamp(5rem,10vw,9rem)] bg-sage/10 relative overflow-hidden">
      {/* Ambient background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-sage/10 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-sand/30 translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="section-wrap relative z-10">
        <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
          <FadeUp>
            <span className="label flex items-center gap-3">
              <span className="w-6 h-px bg-sage inline-block" />
              Ready when you are
              <span className="w-6 h-px bg-sage inline-block" />
            </span>
          </FadeUp>
          <FadeUp delay={100}>
            <h2 className="font-cormorant text-display-lg text-forest font-light leading-[1.05] text-balance">
              You don&apos;t have to keep managing this alone.
            </h2>
          </FadeUp>
          <FadeUp delay={200}>
            <p className="font-outfit text-forest/65 text-lg leading-relaxed max-w-[48ch]">
              The hardest part is often just reaching out. If you&apos;re ready — or even just
              curious — I&apos;d love to hear from you.
            </p>
          </FadeUp>
          <FadeUp delay={300}>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href="#contact" className="btn-primary">
                Book Your Free Consultation
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M7 2L12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="tel:2365122828" className="btn-ghost">
                Call (236) 512-2828
              </a>
            </div>
          </FadeUp>
          <FadeUp delay={380}>
            <p className="font-outfit text-sm text-forest/40">
              Virtual sessions available across BC · In-person in Burnaby · Mon–Sat 8am–9pm
            </p>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
