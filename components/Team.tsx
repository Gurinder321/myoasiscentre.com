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
  {
    name: "Duncan White",
    title: "Canadian Certified Counsellor",
    image: "/Duncan.jpg",
    bio: "Duncan is a Canadian Certified Counsellor and Certified School Counsellor who believes everyone deserves the opportunity to live their good life. His core therapeutic focus is Acceptance and Commitment Therapy, combined with a lens of Mindful Self-Compassion. With over 10 years of experience in schools, Duncan brings strength-based, solution-focused approaches to his work. He's open to supporting adults and young people from all backgrounds, specializing in neurodivergence, anxiety, stress management, relationships, and developing psychological flexibility to live a mindful, values-based life.",
  },
  {
    name: "Helen Liu",
    title: "Pre Registered Counsellor",
    image: "/Helen Liu.jpg",
    bio: "Helen holds an MA in Counselling Psychology from Simon Fraser University and completed her practicum at SFU's Health & Counselling Centre. She's passionate about supporting young people and adults, with a particular focus on racialized individuals and immigrants. Her clinical practice is deeply relational, grounded in anti-oppressive practice and integrated mind-body-emotion approaches. Helen draws on emotion-focused therapy, somatic therapies, inner child work, and narrative therapy. Her research explored cultural foods as a path to eating disorder recovery for ethnic minority immigrants, informing her commitment to culturally responsive, holistic healing.",
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
