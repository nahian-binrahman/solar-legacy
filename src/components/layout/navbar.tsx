"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/core/container";
import { BrandLogo } from "@/components/ui/brand-logo";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
              ? "bg-beige-50/90 backdrop-blur-2xl border-b border-charcoal-900/10 shadow-lg py-3 text-charcoal-900"
              : "bg-forest-950/90 backdrop-blur-2xl border-b border-solar-400/20 shadow-2xl py-3 text-white"
            : "bg-forest-950/40 backdrop-blur-md border-b border-white/5 py-4 sm:py-5 text-white"
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
              className={`md:hidden pt-4 pb-6 mt-4 border-t flex flex-col gap-3.5 animate-in fade-in slide-in-from-top-2 duration-200 ${
                isLightBg ? "border-charcoal-900/10" : "border-white/10"
              }`}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors py-1 ${
                    isLightBg
                      ? "text-charcoal-800 hover:text-solar-600"
                      : "text-beige-100 hover:text-solar-300"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <Button
                  variant="solar"
                  size="default"
                  className="w-full justify-center font-bold text-forest-950"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    const el = document.getElementById("quote");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <span>Get Solar Quote</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          )}
        </Container>
      </header>
    </>
  );
}
