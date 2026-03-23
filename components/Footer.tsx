const currentYear = new Date().getFullYear();

const footerLinks = [
  {
    heading: "Services",
    links: [
      { label: "Individual Counselling", href: "#services" },
      { label: "Couples Counselling", href: "#services" },
      { label: "EMDR & Trauma", href: "#services" },
      { label: "Family Therapy", href: "#services" },
    ],
  },
  {
    heading: "Navigate",
    links: [
      { label: "About Gurpreet", href: "#about" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "FAQ", href: "#faq" },
      { label: "Book a Consultation", href: "#contact" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "(236) 512-2828", href: "tel:2365122828" },
      { label: "gurpreet@myoasiscounselling.com", href: "mailto:gurpreet@myoasiscounselling.com" },
      { label: "201-3701 Hastings St, Burnaby BC", href: "https://maps.google.com/?q=3701+Hastings+Street+Burnaby+BC" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-offwhite pt-16 pb-8">
      <div className="section-wrap">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_repeat(3,1fr)] gap-10 mb-14">

          {/* Brand column */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="3" fill="#FBF8F3"/>
                  <path d="M8 2C8 2 5 5 5 8C5 11 8 14 8 14" stroke="#FBF8F3" strokeWidth="1.2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-cormorant font-medium text-lg tracking-tight">
                MyOasis Counselling
              </span>
            </div>

            <p className="font-outfit text-offwhite/55 text-sm leading-relaxed max-w-[28ch]">
              Registered Clinical Counselling in Burnaby, BC. Warm, evidence-based support for adults.
            </p>

            <div className="flex gap-2">
              {["Virtual · BC", "In-Person · Burnaby", "RCC #22668"].map((tag) => (
                <span
                  key={tag}
                  className="font-outfit text-xs text-offwhite/40 border border-offwhite/15 px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.heading} className="flex flex-col gap-4">
              <h4 className="font-outfit text-xs uppercase tracking-widest text-sage/70">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-outfit text-sm text-offwhite/55 hover:text-offwhite transition-colors duration-200 leading-snug"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-offwhite/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-outfit text-xs text-offwhite/30">
            © {currentYear} MyOasis Counselling. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-outfit text-xs text-offwhite/30 hover:text-offwhite/60 transition-colors duration-200"
              >
                {link}
              </a>
            ))}
          </div>
          <p className="font-outfit text-xs text-offwhite/20">
            Serving clients across British Columbia
          </p>
        </div>
      </div>
    </footer>
  );
}
