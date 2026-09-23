"use client";

import * as React from "react";
import { Phone, ArrowRight, Sparkles } from "lucide-react";

export function MobileActionDock() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    // Show after scrolling slightly (50px) to not interfere with initial hero render
    const handleScroll = () => {
      setVisible(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handlePlanClick = () => {
    const el =
      document.getElementById("plan-form") ||
      document.getElementById("quote") ||
      document.getElementById("contact");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <aside
      aria-label="Mobile Quick Actions"
      className="fixed bottom-0 inset-x-0 z-40 md:hidden transition-all duration-300 animate-in slide-in-from-bottom-5"
    >
      <div className="bg-forest-950/95 backdrop-blur-2xl border-t border-solar-400/30 px-3.5 py-2.5 pb-[calc(0.65rem+env(safe-area-inset-bottom,0px))] shadow-[0_-12px_36px_rgba(0,0,0,0.85)] flex items-center gap-2.5">
        {/* Quick Direct Call */}
        <a
          href="tel:+18005557652"
          className="flex-1 min-w-0 h-11 rounded-xl bg-forest-900/90 border border-white/15 flex items-center justify-center gap-1.5 text-solar-300 text-xs font-semibold uppercase tracking-wider active:scale-95 transition-all shadow-sm"
        >
          <Phone className="w-3.5 h-3.5 text-solar-400" />
          <span className="truncate">Call Direct</span>
        </a>

        {/* Primary Conversion CTA */}
        <button
          onClick={handlePlanClick}
          className="flex-[2] min-w-0 h-11 rounded-xl bg-gradient-to-r from-solar-400 to-solar-300 text-forest-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-lg shadow-solar-400/25 active:scale-95 transition-all cursor-pointer px-2"
        >
          <Sparkles className="w-4 h-4 shrink-0 text-forest-950" />
          <span className="truncate font-extrabold tracking-tight">Build Custom Plan</span>
          <ArrowRight className="w-3.5 h-3.5 shrink-0" />
        </button>
      </div>
    </aside>
  );
}
