"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/core/container";
import { Menu, X, ArrowUpRight, SunMedium } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Solutions", href: "#solutions" },
    { name: "Projects", href: "#projects" },
    { name: "Resources", href: "#resources" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-forest-950/85 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3.5"
          : "bg-forest-950/60 backdrop-blur-md border-b border-white/5 py-4 sm:py-5"
      }`}
    >
      <Container size="xl" padding="normal">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-forest-900 border border-solar-400/40 shadow-sm transition-transform duration-300 group-hover:scale-105">
              <SunMedium className="w-5 h-5 text-solar-400 transition-transform duration-500 group-hover:rotate-45" />
              <div className="absolute inset-0 rounded-xl bg-solar-400/10 blur-xs -z-10" />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-lg sm:text-xl tracking-tight text-white flex items-center gap-1.5">
                SOLAR <span className="solar-gradient-text">LEGACY</span>
              </span>
              <span className="text-[9px] tracking-[0.22em] uppercase font-semibold text-beige-300 font-sans -mt-0.5">
                Renewable Energy Architecture
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-beige-100/90 hover:text-solar-300 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="solar"
              size="sm"
              className="font-bold text-forest-950 shadow-lg shadow-solar-400/20 gap-1.5"
              onClick={() => {
                const el = document.getElementById("quote");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Get Solar Quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-6 mt-4 border-t border-white/10 flex flex-col gap-3.5 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-beige-100 hover:text-solar-300 transition-colors py-1"
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
  );
}
