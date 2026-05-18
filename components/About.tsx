import FadeUp from "./FadeUp";
import Image from "next/image";

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
        <div className="flex justify-center">
          {/* Photo + approaches */}
          <div className="flex flex-col gap-6 max-w-sm">
            <FadeUp>
              {/* Photo area */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-forest-muted/40 border border-sage/20">
                <Image
                  src="/gurpreet.png"
                  alt="Gurpreet, Registered Clinical Counsellor"
                  fill
                  className="object-cover object-top"
                />

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

        </div>
      </div>
    </section>
  );
}
