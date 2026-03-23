import FadeUp from "./FadeUp";

const resonanceItems = [
  "You wake up already exhausted",
  "You replay conversations in your head",
  "You've been putting everyone else first for so long",
  "Something happened that you haven't been able to shake",
  "Nothing dramatic happened — and that almost makes it harder",
  "You know something needs to change, but you don't know where to start",
];

export default function Resonance() {
  return (
    <section className="py-[clamp(5rem,10vw,9rem)] bg-parchment" id="resonance">
      <div className="section-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24 items-start">

          {/* Left — Heading */}
          <div className="lg:sticky lg:top-32">
            <FadeUp>
              <span className="label flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-sage inline-block" />
                You're not alone
              </span>
            </FadeUp>
            <FadeUp delay={100}>
              <h2 className="font-cormorant text-display-md text-forest font-light leading-[1.1] text-balance mb-8">
                If any of this sounds familiar…
              </h2>
            </FadeUp>
            <FadeUp delay={200}>
              <p className="font-outfit text-forest/65 text-base leading-relaxed max-w-text-sm mb-10">
                You don&apos;t need to have it all figured out before you call.
                Most people come to therapy feeling exactly like this — uncertain,
                exhausted, and quietly hoping someone can help.
              </p>
            </FadeUp>
            <FadeUp delay={300}>
              <a href="#contact" className="btn-ghost group">
                Let&apos;s talk about what&apos;s going on
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  <path d="M2 7H12M7 2L12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </FadeUp>
          </div>

          {/* Right — Resonance list */}
          <div className="flex flex-col gap-0">
            {resonanceItems.map((item, i) => (
              <FadeUp key={item} delay={i * 80}>
                <div className="flex items-start gap-5 py-5 border-b border-sand/40 last:border-b-0 group">
                  <div className="flex-shrink-0 mt-1 w-1.5 h-1.5 rounded-full bg-sage/50 group-hover:bg-sage transition-colors duration-300 mt-2" />
                  <p className="font-cormorant text-xl text-forest/80 font-light italic leading-snug group-hover:text-forest transition-colors duration-300">
                    &ldquo;{item}&rdquo;
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
