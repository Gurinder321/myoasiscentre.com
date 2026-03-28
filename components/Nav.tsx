"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "FAQ", href: "#faq" },
];

export default function Nav({ hideLinks = false }: { hideLinks?: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-spring
          ${scrolled
            ? "py-4 bg-parchment/95 backdrop-blur-md border-b border-sand/30 shadow-sm"
            : "py-6 bg-transparent"
          }`}
      >
        <div className="section-wrap flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-full bg-sage flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="3" fill="#FBF8F3"/>
                <path d="M8 2C8 2 5 5 5 8C5 11 8 14 8 14" stroke="#FBF8F3" strokeWidth="1.2" strokeLinecap="round"/>
              </svg>
            </div>
            <span className="font-cormorant font-medium text-lg text-forest tracking-tight">
              MyOasis Counselling
            </span>
          </Link>

          {/* Desktop Links */}
          {!hideLinks && (
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-outfit text-sm text-forest/70 hover:text-forest transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-sage transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          )}

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex btn-primary text-sm"
          >
            Book a Consultation
          </a>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 -mr-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-px bg-forest transition-all duration-300 origin-center
                ${menuOpen ? "rotate-45 translate-y-[5px]" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-forest transition-all duration-300
                ${menuOpen ? "opacity-0 translate-x-2" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-forest transition-all duration-300 origin-center
                ${menuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-parchment flex flex-col justify-center px-10 transition-all duration-500 ease-spring
          ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none translate-y-4"}`}
      >
        {!hideLinks && (
          <div className="flex flex-col gap-8 mb-12">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-cormorant text-display-sm text-forest hover:text-sage transition-colors duration-200"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="btn-primary self-start"
        >
          Book a Consultation
        </a>
        <p className="mt-8 font-outfit text-sm text-forest/50">(236) 512-2828</p>
      </div>
    </>
  );
}
