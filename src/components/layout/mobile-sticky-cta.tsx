"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Sparkles } from "lucide-react";

export function MobileStickyCTA() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      // Show only after scrolling slightly past hero section (120px)
      setIsVisible(window.scrollY > 120);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible || !isMobile) return null;

  return (
    <aside
      aria-label="Mobile Navigation Quick Action"
      className="md:hidden fixed bottom-[max(0.75rem,env(safe-area-inset-bottom,0px))] left-3 right-3 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300"
    >
      <div className="rounded-2xl bg-forest-950/95 backdrop-blur-2xl border border-solar-400/40 p-2 shadow-[0_16px_40px_rgba(0,0,0,0.85)] flex items-center justify-between gap-2.5 ring-1 ring-white/10">
        {/* Quick Call Button */}
        <a
          href="tel:+18005557652"
          className="flex items-center justify-center w-11 h-11 rounded-xl bg-forest-900 border border-solar-400/30 text-solar-400 hover:bg-forest-800 active:scale-95 transition-all shrink-0 shadow-inner"
          aria-label="Call Solar Legacy Engineers"
        >
          <Phone className="w-4 h-4 text-solar-400" />
        </a>

        {/* Primary Company-Wide CTA Button */}
        <Button
          variant="solar"
          size="default"
          className="flex-1 font-extrabold text-xs sm:text-sm h-11 rounded-xl shadow-lg shadow-solar-400/30 justify-between px-3.5 text-forest-950 cursor-pointer active:scale-[0.98] transition-transform"
          onClick={() => {
            const el =
              document.getElementById("plan-form") ||
              document.getElementById("quote") ||
              document.getElementById("contact");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <div className="flex items-center gap-2 truncate">
            <Sparkles className="w-4 h-4 text-forest-950 shrink-0" />
            <span className="truncate">Build My Custom Energy Plan</span>
          </div>
          <ArrowRight className="w-4 h-4 shrink-0" />
        </Button>
      </div>
    </aside>
  );
}
