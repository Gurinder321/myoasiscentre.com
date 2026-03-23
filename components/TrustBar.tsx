import FadeUp from "./FadeUp";

const credentials = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="3" width="12" height="10" rx="1.5" stroke="#7D5A3C" strokeWidth="1.2"/>
        <path d="M5 7.5L7 9.5L11 5.5" stroke="#7D5A3C" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    text: "RCC #22668",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2L10 6L14 6.5L11 9.5L11.8 14L8 12L4.2 14L5 9.5L2 6.5L6 6L8 2Z" stroke="#7D5A3C" strokeWidth="1.2" strokeLinejoin="round"/>
      </svg>
    ),
    text: "EMDR Trained",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="5.5" stroke="#7D5A3C" strokeWidth="1.2"/>
        <path d="M8 5V8.5L10 10" stroke="#7D5A3C" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    text: "Mon–Sat 8am–9pm",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <rect x="2" y="5" width="12" height="9" rx="1.5" stroke="#7D5A3C" strokeWidth="1.2"/>
        <path d="M5 5V4C5 2.9 6 2 8 2C10 2 11 2.9 11 4V5" stroke="#7D5A3C" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
    text: "Virtual & In-Person",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 2C5.2 2 3 4.2 3 7C3 9.8 8 14 8 14C8 14 13 9.8 13 7C13 4.2 10.8 2 8 2Z" stroke="#7D5A3C" strokeWidth="1.2"/>
        <circle cx="8" cy="7" r="1.5" fill="#7D5A3C"/>
      </svg>
    ),
    text: "Burnaby, BC",
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M3 13L3 8C3 5.2 5.2 3 8 3C10.8 3 13 5.2 13 8V13" stroke="#7D5A3C" strokeWidth="1.2" strokeLinecap="round"/>
        <rect x="1" y="10" width="3" height="4" rx="1" stroke="#7D5A3C" strokeWidth="1.2"/>
        <rect x="12" y="10" width="3" height="4" rx="1" stroke="#7D5A3C" strokeWidth="1.2"/>
      </svg>
    ),
    text: "CBT · ACT · EFT",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-offwhite border-y border-sand/40 py-6">
      <div className="section-wrap">
        <FadeUp>
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
            {credentials.map((cred) => (
              <div key={cred.text} className="flex items-center gap-2.5 text-forest/70">
                <span className="flex-shrink-0">{cred.icon}</span>
                <span className="font-outfit text-sm">{cred.text}</span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
