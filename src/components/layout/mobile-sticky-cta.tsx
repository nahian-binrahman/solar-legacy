"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowUpRight, SunMedium } from "lucide-react";

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling past hero section (300px)
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="lg:hidden fixed bottom-3 left-3 right-3 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="rounded-2xl bg-forest-950/90 backdrop-blur-xl border border-solar-400/30 p-2.5 shadow-2xl flex items-center justify-between gap-2.5">
        {/* Quick Call Button */}
        <a
          href="tel:+18005557652"
          className="flex items-center justify-center w-11 h-11 rounded-xl bg-forest-900 border border-white/10 text-solar-400 hover:bg-forest-800 transition-colors shrink-0"
          aria-label="Call Solar Legacy Engineers"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Primary Quote CTA Button */}
        <Button
          variant="solar"
          size="default"
          className="flex-1 font-bold text-xs sm:text-sm h-11 rounded-xl shadow-lg shadow-solar-400/20 justify-between px-4 text-forest-950 cursor-pointer"
          onClick={() => {
            const el = document.getElementById("quote");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="flex items-center gap-1.5">
            <SunMedium className="w-4 h-4 animate-spin-slow text-forest-950" />
            <span>Get Solar Quote</span>
          </div>
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
