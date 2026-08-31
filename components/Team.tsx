import Image from "next/image";
import FadeUp from "./FadeUp";

interface TeamMember {
  name: string;
  title: string;
  image: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Gurpreet",
    title: "Registered Clinical Counsellor",
    image: "/gurpreet.png",
    bio: "Gurpreet is a Registered Clinical Counsellor (RCC #22668) with a passion for helping people heal from relationship wounds, trauma, and life's hardest moments. She specializes in EMDR therapy, anxious attachment, codependency, and emotional abuse recovery. Her approach is warm, evidence-based, and deeply compassionate. Gurpreet believes that healing is not linear, it is a process that can take time and patience — and she's honored to walk alongside you on your journey toward wholeness, self-compassion, and genuine connection.",
  },
];

export default function Team() {
  return (
    <section id="team" className="bg-parchment py-section">
      <div className="section-wrap">
        <FadeUp>
          <span className="label flex items-center gap-3 mb-6">
            <span className="w-6 h-px bg-sage inline-block" />
            Meet The Team
          </span>
          <h2 className="font-cormorant text-display-md text-forest font-light text-balance max-w-[28ch] mb-16">
            Experienced counsellors dedicated to your healing.
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <FadeUp key={member.name} delay={index * 100}>
              <div className="flex flex-col h-full">
                {/* Image */}
                <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-sand-light mb-6">
                  <Image
                    src={member.image}
                    alt={`${member.name}, ${member.title}`}
                    fill
                    className="object-cover object-top"
                    quality={80}
                    loading={index === 0 ? "eager" : "lazy"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <h3 className="font-cormorant text-xl text-forest font-light mb-1">
                    {member.name}
                  </h3>
                  <p className="font-outfit text-xs uppercase tracking-widest text-sage mb-4">
                    {member.title}
                  </p>
                  <p className="font-outfit text-sm text-forest/70 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
