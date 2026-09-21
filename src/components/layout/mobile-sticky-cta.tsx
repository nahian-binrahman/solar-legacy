"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowUpRight, SunMedium } from "lucide-react";

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      // Strictly mobile only (< 768px)
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      // Show only after scrolling past hero section (300px)
      setIsVisible(window.scrollY > 300);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Guarantee it never renders in DOM on desktop
  if (!isVisible || !isMobile) return null;

  return (
    <div className="md:hidden fixed bottom-[max(0.75rem,env(safe-area-inset-bottom))] left-3.5 right-3.5 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="rounded-2xl bg-forest-950/95 backdrop-blur-2xl border border-solar-400/35 p-2 shadow-[0_12px_35px_rgba(0,0,0,0.75)] flex items-center justify-between gap-2.5 ring-1 ring-white/10">
        {/* Quick Call Button */}
        <a
          href="tel:+18005557652"
          className="flex items-center justify-center w-11 h-11 rounded-xl bg-forest-900 border border-white/15 text-solar-400 hover:bg-forest-800 active:scale-95 transition-all shrink-0"
          aria-label="Call Solar Legacy Engineers"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Primary Quote CTA Button */}
        <Button
          variant="solar"
          size="default"
          className="flex-1 font-bold text-xs sm:text-sm h-11 rounded-xl shadow-md shadow-solar-400/25 justify-between px-4 text-forest-950 cursor-pointer active:scale-[0.98] transition-transform"
          onClick={() => {
            const el = document.getElementById("quote");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="flex items-center gap-2">
            <SunMedium className="w-4 h-4 animate-spin-slow text-forest-950" />
            <span>Get Solar Quote</span>
          </div>
          <ArrowUpRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}
