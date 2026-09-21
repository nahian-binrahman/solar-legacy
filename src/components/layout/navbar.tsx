"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/core/container";
import { BrandLogo } from "@/components/ui/brand-logo";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { Menu, X, Phone, Sparkles } from "lucide-react";

import { NavLinkItem } from "@/types/content";

interface NavbarProps {
  customLinks?: NavLinkItem[];
}

export function Navbar({ customLinks }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [isLightBg, setIsLightBg] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Detect if navbar is currently over a light background section (testimonials, faq, etc.)
      const lightElements = document.querySelectorAll(
        '[data-theme="light"], section.bg-white, section.bg-beige-50, section.bg-beige-100'
      );

      let overLight = false;
      const navHeight = 70;

      lightElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= navHeight && rect.bottom >= navHeight) {
          overLight = true;
        }
      });

      setIsLightBg(overLight);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const defaultLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Solutions", href: "#solutions" },
    { name: "Projects", href: "#projects" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" },
  ];

  const navLinks = customLinks
    ? customLinks.filter((l) => l.isVisible).map((l) => ({ name: l.label, href: l.href }))
    : defaultLinks;

  return (
    <>
      <ScrollProgress />
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? isLightBg
              ? "bg-beige-50/95 backdrop-blur-2xl border-b border-charcoal-900/10 shadow-lg py-3 text-charcoal-900"
              : "bg-forest-950/95 backdrop-blur-2xl border-b border-solar-400/20 shadow-2xl py-3 text-white"
            : "bg-forest-950/95 backdrop-blur-xl border-b border-white/10 py-4 sm:py-5 text-white"
        }`}
      >
        <Container size="xl" padding="normal">
          <div className="flex items-center justify-between">
            {/* Logo Area: automatically adjusts PNG between light and dark background */}
            <BrandLogo
              size="md"
              href="/"
              scrolled={scrolled}
              variant={isLightBg ? "light" : "dark"}
            />

            {/* Desktop Navigation Links (Clean layout without quote button) */}
            <nav className="hidden md:flex items-center gap-5 lg:gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    isLightBg
                      ? "text-charcoal-800 hover:text-solar-600"
                      : "text-beige-100/90 hover:text-solar-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button (only on small screens < 768px) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isLightBg
                  ? "text-charcoal-900 hover:bg-black/5"
                  : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div
              className={`md:hidden p-5 mt-4 rounded-2xl border shadow-2xl backdrop-blur-2xl flex flex-col gap-2 animate-in fade-in slide-in-from-top-3 duration-200 ${
                isLightBg
                  ? "bg-beige-50/98 border-charcoal-900/10 shadow-charcoal-900/10"
                  : "bg-forest-950/98 border-solar-400/25 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              }`}
            >
              <div className="flex flex-col gap-1 pb-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-base font-medium transition-all py-2.5 px-3 rounded-xl flex items-center justify-between group ${
                      isLightBg
                        ? "text-charcoal-800 hover:text-solar-600 hover:bg-black/5"
                        : "text-beige-100 hover:text-solar-300 hover:bg-forest-900/70"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs text-solar-400/60 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  </Link>
                ))}
              </div>

              {/* Direct call & CTA */}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
                <a
                  href="tel:+18005557652"
                  className="flex items-center justify-center gap-2 py-2 text-xs font-semibold tracking-wider uppercase text-solar-300 hover:text-solar-200 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Direct: +1 (800) 555-7652</span>
                </a>

                <Button
                  variant="solar"
                  size="default"
                  className="w-full justify-center font-bold text-forest-950 h-11 rounded-xl shadow-lg shadow-solar-400/20 text-xs sm:text-sm"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const el = document.getElementById("quote");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Sparkles className="w-4 h-4 text-forest-950" />
                  <span>Request Architectural Assessment</span>
                </Button>
              </div>
            </div>
          )}
        </Container>
      </header>
    </>
  );
}
