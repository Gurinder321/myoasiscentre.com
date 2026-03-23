import FadeUp from "./FadeUp";

const credentials = [
  { title: "RCC #22668", body: "Registered Clinical Counsellor, BC Association of Clinical Counsellors" },
  { title: "MA Counselling Psychology", body: "Yorkville University" },
  { title: "BA Psychology", body: "Simon Fraser University" },
  { title: "EMDR Trained", body: "Eye Movement Desensitization & Reprocessing" },
];

const approaches = ["CBT", "ACT", "Emotion-Focused Therapy", "Trauma-Informed", "EMDR"];

export default function About() {
  return (
    <section className="py-[clamp(5rem,10vw,9rem)] bg-forest" id="about">
      <div className="section-wrap">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-16 lg:gap-24 items-start">

          {/* Left — Photo + credential cards */}
          <div className="flex flex-col gap-6">
            <FadeUp>
              {/* Photo area */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-forest-muted/40 border border-sage/20">
                {/* Photo placeholder — replace with <Image src="/gurpreet-about.jpg" fill .../> */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-b from-forest-muted/20 to-forest/80">
                  <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center">
                    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                      <circle cx="14" cy="10" r="5" stroke="#7A9E7E" strokeWidth="1.4"/>
                      <path d="M5 24C5 19 9 16 14 16C19 16 23 19 23 24" stroke="#7A9E7E" strokeWidth="1.4" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <p className="font-cormorant text-offwhite/50 italic text-base">Add photo: /public/gurpreet-about.jpg</p>
                </div>

                {/* Floating quote */}
                <div className="absolute bottom-5 left-5 right-5 bg-offwhite/10 backdrop-blur-sm border border-offwhite/15 rounded-2xl p-5">
                  <p className="font-cormorant text-lg text-offwhite/90 italic leading-snug">
                    &ldquo;Therapy works best when you feel genuinely safe.&rdquo;
                  </p>
                  <p className="font-outfit text-xs text-offwhite/50 mt-2">— Gurpreet</p>
                </div>
              </div>
            </FadeUp>

            {/* Approach tags */}
            <FadeUp delay={100}>
              <div className="bg-forest-muted/30 border border-sage/20 rounded-2xl p-5">
                <p className="font-outfit text-xs uppercase tracking-widest text-sage/70 mb-4">Therapeutic approaches</p>
                <div className="flex flex-wrap gap-2">
                  {approaches.map((a) => (
                    <span key={a} className="font-outfit text-sm text-offwhite/70 bg-sage/10 border border-sage/20 px-3.5 py-1.5 rounded-full">
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right — Bio + credentials */}
          <div className="flex flex-col gap-10">
            <div>
              <FadeUp>
                <span className="label flex items-center gap-3 mb-6 text-sage/80">
                  <span className="w-6 h-px bg-sage inline-block" />
                  About Gurpreet
                </span>
              </FadeUp>
              <FadeUp delay={100}>
                <h2 className="font-cormorant text-display-md text-offwhite font-light leading-[1.1] mb-8">
                  Hi, I&apos;m Gurpreet.
                </h2>
              </FadeUp>
              <FadeUp delay={180}>
                <div className="flex flex-col gap-5 font-outfit text-offwhite/70 text-base leading-relaxed">
                  <p>
                    I&apos;m a Registered Clinical Counsellor based in Burnaby, BC, and I&apos;ve built
                    my practice around one belief: therapy works best when you feel genuinely safe.
                  </p>
                  <p>
                    I trained at Simon Fraser University and completed my Master of Arts in Counselling
                    Psychology at Yorkville University. I&apos;m an EMDR-trained therapist and I draw from
                    CBT, ACT, and Emotion-Focused Therapy — but more than any framework, I lead with
                    curiosity, warmth, and a real commitment to meeting you where you are.
                  </p>
                  <p>
                    I work with adults across all of life&apos;s challenges: anxiety, burnout,
                    relationship difficulties, grief, trauma, identity, and the quieter struggles that
                    don&apos;t have easy names.
                  </p>
                  <p className="text-offwhite/90 font-light">
                    You deserve a counsellor who will sit{" "}
                    <em>with</em> you — not just{" "}
                    <em>at</em> you.
                  </p>
                </div>
              </FadeUp>
            </div>

            {/* Credential cards */}
            <FadeUp delay={260}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {credentials.map((cred) => (
                  <div
                    key={cred.title}
                    className="bg-forest-muted/30 border border-sage/15 rounded-2xl p-5 hover:border-sage/35 transition-colors duration-300"
                  >
                    <p className="font-outfit text-sage text-sm font-medium mb-1">{cred.title}</p>
                    <p className="font-outfit text-offwhite/55 text-sm leading-snug">{cred.body}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* CTA */}
            <FadeUp delay={340}>
              <a href="#contact" className="btn-primary self-start">
                Work with Gurpreet
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M7 2L12 7L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
