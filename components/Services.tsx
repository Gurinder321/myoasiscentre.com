import FadeUp from "./FadeUp";

const services = [
  {
    id: "individual",
    label: "01 — Individual Counselling",
    title: "Space to breathe, think, and heal.",
    body: "Whether you're managing anxiety, depression, grief, burnout, or simply feeling stuck — individual sessions offer a confidential, non-judgmental space to work through what's weighing on you, at your own pace, using approaches tailored specifically to you.",
    themes: ["Anxiety", "Depression", "Burnout", "Grief", "Life Transitions", "Self-Esteem"],
    bgColor: "bg-sand-light/50",
    accent: "bg-sage/15",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="5" stroke="#7A9E7E" strokeWidth="1.4"/>
        <path d="M5 24C5 19 9 16 14 16C19 16 23 19 23 24" stroke="#7A9E7E" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "couples",
    label: "02 — Couples Counselling",
    title: "Reconnect. Communicate. Rebuild.",
    body: "Relationships go through seasons. Whether you're navigating recurring conflict, trust issues, communication breakdown, or a major life change together — couples counselling creates a structured, safe space to hear each other and find your way back.",
    themes: ["Communication", "Trust & Conflict", "Intimacy", "Life Changes", "Reconnection"],
    bgColor: "bg-parchment",
    accent: "bg-sand/30",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="10" r="4" stroke="#7A9E7E" strokeWidth="1.4"/>
        <circle cx="18" cy="10" r="4" stroke="#7A9E7E" strokeWidth="1.4"/>
        <path d="M2 24C2 20 5.5 17 10 17" stroke="#7A9E7E" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M18 17C22.5 17 26 20 26 24" stroke="#7A9E7E" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M14 19C14 19 12 21 14 23C16 21 14 19 14 19Z" stroke="#7A9E7E" strokeWidth="1.2" fill="#7A9E7E20"/>
      </svg>
    ),
  },
  {
    id: "emdr",
    label: "03 — EMDR & Trauma Therapy",
    title: "Heal what words alone can't reach.",
    body: "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based therapy that helps your nervous system process traumatic memories — without needing to talk through every detail. Many clients experience lasting relief they didn't think was possible.",
    themes: ["Trauma & PTSD", "Complex Trauma", "Childhood Experiences", "Phobias", "Disturbing Memories"],
    bgColor: "bg-sage/8",
    accent: "bg-sage/10",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 14C4 14 8 6 14 6C20 6 24 14 24 14C24 14 20 22 14 22C8 22 4 14 4 14Z" stroke="#7A9E7E" strokeWidth="1.4"/>
        <circle cx="14" cy="14" r="3" stroke="#7A9E7E" strokeWidth="1.4"/>
        <path d="M6 14H8M20 14H22" stroke="#7A9E7E" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "family",
    label: "04 — Family Therapy",
    title: "Stronger relationships start here.",
    body: "Family dynamics are complex. Whether you're working through conflict, parenting challenges, major transitions, or communication patterns that keep repeating — family therapy helps everyone feel heard and builds a foundation for genuine change.",
    themes: ["Family Conflict", "Parenting", "Communication", "Major Transitions", "Intergenerational Patterns"],
    bgColor: "bg-offwhite",
    accent: "bg-forest/5",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="7" r="3.5" stroke="#7A9E7E" strokeWidth="1.4"/>
        <circle cx="7" cy="16" r="3" stroke="#7A9E7E" strokeWidth="1.4"/>
        <circle cx="21" cy="16" r="3" stroke="#7A9E7E" strokeWidth="1.4"/>
        <path d="M14 10.5V14M14 14L7 14M14 14L21 14" stroke="#7A9E7E" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M7 19V22M21 19V22" stroke="#7A9E7E" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section className="py-[clamp(5rem,10vw,9rem)] bg-offwhite" id="services">
      <div className="section-wrap">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
          <div>
            <FadeUp>
              <span className="label flex items-center gap-3 mb-6">
                <span className="w-6 h-px bg-sage inline-block" />
                Areas of support
              </span>
            </FadeUp>
            <FadeUp delay={100}>
              <h2 className="font-cormorant text-display-md text-forest font-light leading-[1.1]">
                Where can I help?
              </h2>
            </FadeUp>
          </div>
          <FadeUp delay={200}>
            <p className="font-outfit text-forest/60 text-base leading-relaxed max-w-[38ch] md:text-right">
              Every person's situation is different. Sessions are tailored to you — not a script.
            </p>
          </FadeUp>
        </div>

        {/* Services — zig-zag layout */}
        <div className="flex flex-col gap-6">
          {services.map((service, i) => (
            <FadeUp key={service.id} delay={i * 80}>
              <div
                className={`group grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-0 rounded-3xl overflow-hidden border border-sand/40 hover:border-sage/40 transition-all duration-500 hover:shadow-lg hover:shadow-forest/5 ${
                  i % 2 === 1 ? "md:grid-cols-[1.4fr_1fr]" : ""
                }`}
              >
                {/* Info side */}
                <div
                  className={`p-8 lg:p-10 flex flex-col justify-between ${service.bgColor} ${
                    i % 2 === 1 ? "md:order-2" : ""
                  }`}
                >
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-2xl ${service.accent} flex items-center justify-center`}>
                        {service.icon}
                      </div>
                      <span className="font-outfit text-xs uppercase tracking-widest text-forest/40">
                        {service.label}
                      </span>
                    </div>

                    <h3 className="font-cormorant text-display-sm text-forest font-light leading-tight">
                      {service.title}
                    </h3>

                    <p className="font-outfit text-forest/65 text-base leading-relaxed max-w-text-sm">
                      {service.body}
                    </p>
                  </div>

                  <div className="mt-8">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 font-outfit text-sm text-sage hover:text-forest transition-colors duration-200 group/link"
                    >
                      Book a consultation
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        className="transition-transform duration-300 group-hover/link:translate-x-1"
                      >
                        <path d="M2 7H12M7 2L12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Tags / themes side */}
                <div
                  className={`p-8 lg:p-10 bg-parchment/60 flex flex-col justify-center ${
                    i % 2 === 1 ? "md:order-1" : ""
                  }`}
                >
                  <p className="font-outfit text-xs uppercase tracking-widest text-forest/40 mb-6">
                    Commonly addressed
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {service.themes.map((theme) => (
                      <span
                        key={theme}
                        className="font-outfit text-sm text-forest/70 bg-offwhite border border-sand/60 px-4 py-2 rounded-full hover:border-sage/50 hover:text-sage transition-all duration-200"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>

                  {/* Decorative number */}
                  <div className="mt-auto pt-8">
                    <span className="font-cormorant text-[80px] leading-none text-forest/5 font-light select-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>
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
