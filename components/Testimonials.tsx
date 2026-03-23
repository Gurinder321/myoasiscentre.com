import FadeUp from "./FadeUp";

const testimonials = [
  {
    quote:
      "I came in feeling completely overwhelmed and stuck. Gurpreet helped me understand patterns I'd carried for years and gave me real tools to work through them. I feel like myself again — that's not something I said lightly.",
    service: "Individual Counselling",
    initial: "S.M.",
  },
  {
    quote:
      "The EMDR work we did together changed my relationship with a traumatic experience I thought I'd have to live with forever. It wasn't easy, but Gurpreet made it feel safe. I'm genuinely grateful.",
    service: "EMDR & Trauma Therapy",
    initial: "R.K.",
  },
  {
    quote:
      "My partner and I were at a point where we weren't sure we'd make it through. Gurpreet created a space where we could actually hear each other for the first time in years. We're in a much better place now.",
    service: "Couples Counselling",
    initial: "T. & A.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-[clamp(5rem,10vw,9rem)] bg-sand-light/40" id="testimonials">
      <div className="section-wrap">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <FadeUp>
              <span className="label flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-sage inline-block" />
                Client experiences
              </span>
            </FadeUp>
            <FadeUp delay={100}>
              <h2 className="font-cormorant text-display-md text-forest font-light leading-[1.1]">
                What clients say.
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={150}>
            <p className="font-outfit text-forest/50 text-sm max-w-[32ch] md:text-right">
              Names are abbreviated to protect privacy.
            </p>
          </FadeUp>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <FadeUp key={i} delay={i * 120}>
              <div className="flex flex-col justify-between h-full bg-offwhite rounded-3xl p-8 border border-sand/40 hover:border-sage/30 hover:shadow-md hover:shadow-forest/5 transition-all duration-500">
                {/* Quote mark */}
                <div className="mb-5">
                  <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
                    <path d="M0 24V14.4C0 6.4 4.267 1.6 12.8 0L14.4 2.4C10.133 3.467 7.467 5.867 6.4 9.6H12.8V24H0ZM19.2 24V14.4C19.2 6.4 23.467 1.6 32 0L33.6 2.4C29.333 3.467 26.667 5.867 25.6 9.6H32V24H19.2Z" fill="#7D5A3C" fillOpacity="0.2"/>
                  </svg>
                </div>

                {/* Quote text */}
                <p className="font-cormorant text-xl text-forest/80 font-light italic leading-snug flex-1 mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Attribution */}
                <div className="flex items-center justify-between border-t border-sand/50 pt-5">
                  <div>
                    <p className="font-outfit text-sm font-medium text-forest">{t.initial}</p>
                    <p className="font-outfit text-xs text-forest/45 mt-0.5">{t.service}</p>
                  </div>
                  {/* Star rating */}
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, s) => (
                      <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill="#7D5A3C">
                        <path d="M6 1L7.5 4.5L11 4.9L8.5 7.3L9.2 11L6 9.3L2.8 11L3.5 7.3L1 4.9L4.5 4.5L6 1Z"/>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
