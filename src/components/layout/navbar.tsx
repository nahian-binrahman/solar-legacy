"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/core/container";
import { BrandLogo } from "@/components/ui/brand-logo";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { Menu, X, Phone, Sparkles, ChevronDown } from "lucide-react";
import { NavLinkItem } from "@/types/content";

interface NavbarProps {
  customLinks?: NavLinkItem[];
}

export function Navbar({ customLinks: _customLinks }: NavbarProps = {}) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [isLightBg, setIsLightBg] = React.useState(false);
  const [activeDropdown, setActiveDropdown] = React.useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      // Detect if navbar is currently over a light background section
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

  const solutionsSubmenu = [
    { name: "Overview", href: "/solar-solutions", desc: "Compare all solar & battery options" },
    { name: "Residential Solar", href: "/residential-solar", desc: "Turn your rooftop into an energy asset" },
    { name: "Solar + Battery", href: "/solar-and-battery", desc: "Generate, store & use on your terms" },
    { name: "Battery-Only Systems", href: "/battery-storage", desc: "Backup power without starting over" },
    { name: "Commercial Solar", href: "/commercial-solar", desc: "Turn energy overhead into strategy" },
    { name: "Commercial Battery Storage", href: "/commercial-battery-storage", desc: "Peak-demand & operational resilience" },
  ];

  const programsSubmenu = [
    { name: "Solar Service Subscription", href: "/solar-subscription", desc: "Benefits of solar without buying equipment" },
    { name: "Solar System Ownership", href: "/solar-ownership", desc: "Own your energy system & long-term value" },
    { name: "Battery Backup Program", href: "/battery-backup-program", desc: "Essential, extended, or whole-home backup" },
    { name: "Commercial Energy Solutions", href: "/commercial-solar#financing", desc: "Financing and ownership structures" },
  ];

  return (
    <>
      <ScrollProgress />
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? isLightBg
              ? "bg-beige-50/95 backdrop-blur-2xl border-b border-charcoal-900/10 shadow-lg py-3 text-charcoal-900"
              : "bg-forest-950/95 backdrop-blur-2xl border-b border-solar-400/20 shadow-2xl py-3 text-white"
            : "bg-forest-950/95 backdrop-blur-xl border-b border-white/10 py-3.5 sm:py-4 text-white"
        }`}
      >
        <Container size="xl" padding="normal">
          <div className="flex items-center justify-between">
            {/* Logo Area */}
            <BrandLogo
              size="md"
              href="/"
              scrolled={scrolled}
              variant={isLightBg ? "light" : "dark"}
            />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  isLightBg ? "text-charcoal-800 hover:text-solar-600" : "text-beige-100/90 hover:text-solar-300"
                }`}
              >
                Home
              </Link>

              {/* Solar Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("solutions")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "solutions" ? null : "solutions")}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                    isLightBg ? "text-charcoal-800 hover:text-solar-600" : "text-beige-100/90 hover:text-solar-300"
                  }`}
                >
                  <span>Solar Solutions</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "solutions" ? "rotate-180 text-solar-400" : ""}`} />
                </button>

                {activeDropdown === "solutions" && (
                  <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="rounded-2xl p-2 bg-forest-950/98 backdrop-blur-2xl border border-solar-400/25 shadow-2xl">
                      {solutionsSubmenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block p-2.5 rounded-xl hover:bg-forest-900/80 transition-colors group"
                        >
                          <div className="text-sm font-bold text-white group-hover:text-solar-300 transition-colors">
                            {sub.name}
                          </div>
                          <div className="text-[11px] text-beige-400 font-sans">
                            {sub.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Programs Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setActiveDropdown("programs")}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  onClick={() => setActiveDropdown(activeDropdown === "programs" ? null : "programs")}
                  className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors flex items-center gap-1 cursor-pointer ${
                    isLightBg ? "text-charcoal-800 hover:text-solar-600" : "text-beige-100/90 hover:text-solar-300"
                  }`}
                >
                  <span>Programs</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === "programs" ? "rotate-180 text-solar-400" : ""}`} />
                </button>

                {activeDropdown === "programs" && (
                  <div className="absolute top-full left-0 w-80 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="rounded-2xl p-2 bg-forest-950/98 backdrop-blur-2xl border border-solar-400/25 shadow-2xl">
                      {programsSubmenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setActiveDropdown(null)}
                          className="block p-2.5 rounded-xl hover:bg-forest-900/80 transition-colors group"
                        >
                          <div className="text-sm font-bold text-white group-hover:text-solar-300 transition-colors">
                            {sub.name}
                          </div>
                          <div className="text-[11px] text-beige-400 font-sans">
                            {sub.desc}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/#process"
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  isLightBg ? "text-charcoal-800 hover:text-solar-600" : "text-beige-100/90 hover:text-solar-300"
                }`}
              >
                How It Works
              </Link>

              <Link
                href="/#about"
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  isLightBg ? "text-charcoal-800 hover:text-solar-600" : "text-beige-100/90 hover:text-solar-300"
                }`}
              >
                Why Solar Legacy
              </Link>

              <Link
                href="/#resources"
                className={`text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  isLightBg ? "text-charcoal-800 hover:text-solar-600" : "text-beige-100/90 hover:text-solar-300"
                }`}
              >
                Resources
              </Link>
            </nav>

            {/* CTA Button: Get My Solar Plan */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                variant="solar"
                size="sm"
                className="font-bold text-forest-950 shadow-md shadow-solar-400/20 rounded-xl px-5 h-10"
                onClick={() => {
                  const el = document.getElementById("quote") || document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>Get My Solar Plan</span>
              </Button>
            </div>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isLightBg ? "text-charcoal-900 hover:bg-black/5" : "text-white hover:bg-white/10"
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile menu dropdown */}
          {mobileMenuOpen && (
            <div
              className={`lg:hidden p-5 mt-4 rounded-2xl border shadow-2xl backdrop-blur-2xl flex flex-col gap-2 max-h-[80vh] overflow-y-auto animate-in fade-in slide-in-from-top-3 duration-200 ${
                isLightBg
                  ? "bg-beige-50/98 border-charcoal-900/10 shadow-charcoal-900/10"
                  : "bg-forest-950/98 border-solar-400/25 shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              }`}
            >
              <div className="flex flex-col gap-1 pb-2">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium py-2 px-3 rounded-xl text-beige-100 hover:text-solar-300 hover:bg-forest-900/70"
                >
                  Home
                </Link>

                {/* Mobile Solar Solutions Accordion */}
                <div>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === "solutions" ? null : "solutions")}
                    className="w-full flex items-center justify-between text-base font-medium py-2 px-3 rounded-xl text-beige-100 hover:text-solar-300 hover:bg-forest-900/70"
                  >
                    <span>Solar Solutions</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "solutions" ? "rotate-180 text-solar-400" : ""}`} />
                  </button>

                  {mobileExpanded === "solutions" && (
                    <div className="pl-4 pr-2 py-1 flex flex-col gap-1 border-l-2 border-solar-400/30 ml-4 my-1">
                      {solutionsSubmenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="py-1.5 px-2 text-xs font-medium text-beige-300 hover:text-solar-300"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Programs Accordion */}
                <div>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === "programs" ? null : "programs")}
                    className="w-full flex items-center justify-between text-base font-medium py-2 px-3 rounded-xl text-beige-100 hover:text-solar-300 hover:bg-forest-900/70"
                  >
                    <span>Programs</span>
                    <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === "programs" ? "rotate-180 text-solar-400" : ""}`} />
                  </button>

                  {mobileExpanded === "programs" && (
                    <div className="pl-4 pr-2 py-1 flex flex-col gap-1 border-l-2 border-solar-400/30 ml-4 my-1">
                      {programsSubmenu.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="py-1.5 px-2 text-xs font-medium text-beige-300 hover:text-solar-300"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/#process"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium py-2 px-3 rounded-xl text-beige-100 hover:text-solar-300 hover:bg-forest-900/70"
                >
                  How It Works
                </Link>

                <Link
                  href="/#about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium py-2 px-3 rounded-xl text-beige-100 hover:text-solar-300 hover:bg-forest-900/70"
                >
                  Why Solar Legacy
                </Link>

                <Link
                  href="/#resources"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-medium py-2 px-3 rounded-xl text-beige-100 hover:text-solar-300 hover:bg-forest-900/70"
                >
                  Resources
                </Link>
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
                    const el = document.getElementById("quote") || document.getElementById("contact");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <Sparkles className="w-4 h-4 text-forest-950" />
                  <span>Get My Solar Plan</span>
                </Button>
              </div>
            </div>
          )}
        </Container>
      </header>
    </>
  );
}
