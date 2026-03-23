import FadeUp from "./FadeUp";

const services = [
  {
    id: "emdr",
    label: "01 — EMDR & Trauma Therapy",
    title: "Heal what words alone can't reach.",
    featured: true,
    body: "EMDR (Eye Movement Desensitization and Reprocessing) is Gurpreet's primary specialization and the most powerful tool in her practice. It's an evidence-based therapy that helps your nervous system process traumatic memories — without having to relive or talk through every detail. Whether you're dealing with a single incident or years of accumulated pain, EMDR works at the level where trauma actually lives: in the body and nervous system. Many clients experience lasting relief they didn't think was possible.",
    themes: ["Trauma & PTSD", "Complex Trauma", "Childhood Experiences", "Accidents & Loss", "Phobias", "Anxiety", "Disturbing Memories"],
    bgColor: "bg-forest",
    accent: "bg-sage/20",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 14C4 14 8 6 14 6C20 6 24 14 24 14C24 14 20 22 14 22C8 22 4 14 4 14Z" stroke="#7D5A3C" strokeWidth="1.4"/>
        <circle cx="14" cy="14" r="3" stroke="#7D5A3C" strokeWidth="1.4"/>
        <path d="M6 14H8M20 14H22" stroke="#7D5A3C" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "individual",
    label: "02 — Individual Counselling",
    title: "Space to breathe, think, and heal.",
    body: "Whether you're managing anxiety, depression, grief, burnout, or simply feeling stuck — individual sessions offer a confidential, non-judgmental space to work through what's weighing on you, at your own pace, using approaches tailored specifically to you.",
    themes: ["Anxiety", "Depression", "Burnout", "Grief", "Life Transitions", "Self-Esteem"],
    bgColor: "bg-sand-light/50",
    accent: "bg-sage/15",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="10" r="5" stroke="#7D5A3C" strokeWidth="1.4"/>
        <path d="M5 24C5 19 9 16 14 16C19 16 23 19 23 24" stroke="#7D5A3C" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "couples",
    label: "03 — Couples Counselling",
    title: "Reconnect. Communicate. Rebuild.",
    body: "Relationships go through seasons. Whether you're navigating recurring conflict, trust issues, communication breakdown, or a major life change together — couples counselling creates a structured, safe space to hear each other and find your way back.",
    themes: ["Communication", "Trust & Conflict", "Intimacy", "Life Changes", "Reconnection"],
    bgColor: "bg-parchment",
    accent: "bg-sand/30",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="10" cy="10" r="4" stroke="#7D5A3C" strokeWidth="1.4"/>
        <circle cx="18" cy="10" r="4" stroke="#7D5A3C" strokeWidth="1.4"/>
        <path d="M2 24C2 20 5.5 17 10 17" stroke="#7D5A3C" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M18 17C22.5 17 26 20 26 24" stroke="#7D5A3C" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M14 19C14 19 12 21 14 23C16 21 14 19 14 19Z" stroke="#7D5A3C" strokeWidth="1.2" fill="#7D5A3C20"/>
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
        <circle cx="14" cy="7" r="3.5" stroke="#7D5A3C" strokeWidth="1.4"/>
        <circle cx="7" cy="16" r="3" stroke="#7D5A3C" strokeWidth="1.4"/>
        <circle cx="21" cy="16" r="3" stroke="#7D5A3C" strokeWidth="1.4"/>
        <path d="M14 10.5V14M14 14L7 14M14 14L21 14" stroke="#7D5A3C" strokeWidth="1.4" strokeLinecap="round"/>
        <path d="M7 19V22M21 19V22" stroke="#7D5A3C" strokeWidth="1.4" strokeLinecap="round"/>
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
              Every person&apos;s situation is different. Sessions are tailored to you — not a script.
            </p>
          </FadeUp>
        </div>

        {/* EMDR — Featured hero card */}
        <FadeUp>
          <div className="rounded-3xl overflow-hidden bg-forest border border-sand/20 mb-6 group hover:shadow-xl hover:shadow-forest/15 transition-all duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr]">
              {/* Left — content */}
              <div className="p-10 lg:p-12 flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-sage/20 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <path d="M4 14C4 14 8 6 14 6C20 6 24 14 24 14C24 14 20 22 14 22C8 22 4 14 4 14Z" stroke="#B8956A" strokeWidth="1.4"/>
                      <circle cx="14" cy="14" r="3" stroke="#B8956A" strokeWidth="1.4"/>
                      <path d="M6 14H8M20 14H22" stroke="#B8956A" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-outfit text-xs uppercase tracking-widest text-sand/60">01 — Primary Specialization</span>
                    <span className="font-outfit text-xs bg-sand/20 text-sand px-3 py-1 rounded-full border border-sand/30">Gurpreet&apos;s Niche</span>
                  </div>
                </div>

                <h3 className="font-cormorant text-display-md text-offwhite font-light leading-tight">
                  EMDR & Trauma Therapy
                </h3>

                <p className="font-outfit text-offwhite/65 text-base leading-relaxed max-w-text-sm">
                  EMDR (Eye Movement Desensitization and Reprocessing) is Gurpreet&apos;s primary specialization. It&apos;s an evidence-based therapy that helps your nervous system process traumatic memories — without having to relive every detail. Whether you&apos;re dealing with a single incident or years of accumulated pain, EMDR works at the level where trauma actually lives: the body and the nervous system.
                </p>

                <p className="font-cormorant text-xl text-sand italic font-light">
                  &ldquo;Many clients experience relief they didn&apos;t think was possible.&rdquo;
                </p>

                <div className="mt-2">
                  <a href="#contact" className="btn-primary bg-sand text-forest hover:bg-offwhite inline-flex items-center gap-2">
                    Book an EMDR Consultation
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7H12M7 2L12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Right — themes */}
              <div className="p-10 lg:p-12 bg-forest-muted/40 border-t lg:border-t-0 lg:border-l border-offwhite/10 flex flex-col justify-between">
                <div>
                  <p className="font-outfit text-xs uppercase tracking-widest text-sand/60 mb-6">Commonly addressed</p>
                  <div className="flex flex-wrap gap-2.5">
                    {["Trauma & PTSD", "Complex Trauma", "Childhood Experiences", "Accidents & Loss", "Phobias", "Anxiety", "Disturbing Memories"].map((theme) => (
                      <span key={theme} className="font-outfit text-sm text-offwhite/70 bg-offwhite/8 border border-offwhite/15 px-4 py-2 rounded-full">
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-10">
                  <p className="font-outfit text-xs text-offwhite/30 mb-3 uppercase tracking-widest">Why EMDR works</p>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Evidence-based & widely researched",
                      "No need to talk through every detail",
                      "Works where talk therapy can't reach",
                      "Lasting results, not just coping skills",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2.5 font-outfit text-sm text-offwhite/60">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-sand/60 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Remaining services — zig-zag */}
        <div className="flex flex-col gap-6">
          {services.slice(1).map((service, i) => (
            <FadeUp key={service.id} delay={i * 80}>
              <div
                className={`group grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-0 rounded-3xl overflow-hidden border border-sand/40 hover:border-sage/40 transition-all duration-500 hover:shadow-lg hover:shadow-forest/5 ${
                  i % 2 === 1 ? "md:grid-cols-[1.4fr_1fr]" : ""
                }`}
              >
                <div className={`p-8 lg:p-10 flex flex-col justify-between ${service.bgColor} ${i % 2 === 1 ? "md:order-2" : ""}`}>
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
                    <a href="#contact" className="inline-flex items-center gap-2 font-outfit text-sm text-sage hover:text-forest transition-colors duration-200 group/link">
                      Book a consultation
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-300 group-hover/link:translate-x-1">
                        <path d="M2 7H12M7 2L12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>

                <div className={`p-8 lg:p-10 bg-parchment/60 flex flex-col justify-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <p className="font-outfit text-xs uppercase tracking-widest text-forest/40 mb-6">Commonly addressed</p>
                  <div className="flex flex-wrap gap-3">
                    {service.themes.map((theme) => (
                      <span key={theme} className="font-outfit text-sm text-forest/70 bg-offwhite border border-sand/60 px-4 py-2 rounded-full hover:border-sage/50 hover:text-sage transition-all duration-200">
                        {theme}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto pt-8">
                    <span className="font-cormorant text-[80px] leading-none text-forest/5 font-light select-none">
                      {String(i + 2).padStart(2, "0")}
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
