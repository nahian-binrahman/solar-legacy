"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Sparkles,
  MapPin,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";

import { HeroContent, StatItem } from "@/types/content";
import { sounds } from "@/lib/sound-effects";

interface HeroSectionProps {
  content?: HeroContent;
  statsData?: StatItem[];
}

export function HeroSection({ content, statsData }: HeroSectionProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Dynamic interactive cursor & touch tracking for ambient solar glow
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (rect.width && rect.height) {
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    }
  }, [mouseX, mouseY]);

  const handleTouchMove = React.useCallback((e: React.TouchEvent<HTMLDivElement>) => {
    const touch = e.touches[0];
    if (touch && containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.width && rect.height) {
        mouseX.set((touch.clientX - rect.left) / rect.width);
        mouseY.set((touch.clientY - rect.top) / rect.height);
      }
    }
  }, [mouseX, mouseY]);

  // Track scroll across the pinned 280vh stage
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 95,
    damping: 25,
    mass: 0.8,
    restDelta: 0.001,
  });

  // Mobile and responsive dimensions detection
  const [isMobile, setIsMobile] = React.useState(false);
  const [spreadDistance, setSpreadDistance] = React.useState(60);

  React.useEffect(() => {
    const checkDimensions = () => {
      const w = window.innerWidth;
      setIsMobile(w < 640);
      if (w < 640) {
        setSpreadDistance(14);
      } else if (w < 1024) {
        setSpreadDistance(38);
      } else {
        setSpreadDistance(65);
      }
    };
    checkDimensions();
    window.addEventListener("resize", checkDimensions);
    return () => window.removeEventListener("resize", checkDimensions);
  }, []);

  // =========================================================================
  // PARALLAX & ANIMATION TRANSFORMS
  // =========================================================================

  // 1. Background Nature Parallax: deeply zoomed in on initial load (1.35 desktop / 1.45 mobile), then settles smoothly (1.06)
  const bgY = useTransform(smoothProgress, (p) => (p <= 0.20 ? (p / 0.20) * 20 : 20));
  const bgScale = useTransform(smoothProgress, (p) => {
    const initialScale = isMobile ? 1.65 : 1.50;
    if (p <= 0.20) {
      return initialScale - (p / 0.20) * (initialScale - 1.06);
    }
    return 1.06;
  });
  const bgOpacity = useTransform(smoothProgress, [0, 0.85, 1], [1, 0.95, 0.35]);

  // Sun flare parallax, dynamic radiance, and cursor/touch drift
  const sunGlowX = useTransform(mouseX, [0, 1], [-25, 25]);
  const sunGlowY = useTransform(smoothProgress, [0, 1], [0, 40]);
  const sunGlowScale = useTransform(smoothProgress, [0, 1], [1, 1.25]);
  const sunGlowOpacity = useTransform(smoothProgress, (p) => (p <= 0.20 ? 1 - (p / 0.20) * 0.9 : 0.1));

  // 2. PHASE 1: SOLAR LEGACY LOGO
  // Starts with 1.05s load animation rising from behind roofline.
  // On 1st scroll (0 to 0.16), it smoothly fades and moves up.
  const logoScrollOpacity = useTransform(smoothProgress, (p) => (p <= 0.15 ? 1 - p / 0.15 : 0));
  const logoScrollY = useTransform(smoothProgress, (p) => (p <= 0.15 ? -(p / 0.15) * 35 : -35));
  const logoScrollScale = useTransform(smoothProgress, (p) => (p <= 0.15 ? 1 - (p / 0.15) * 0.06 : 0.94));
  const logoPointerEvents = useTransform(smoothProgress, (p) => (p < 0.08 ? "auto" : "none"));

  // Minimalist scroll cue visible on mobile initial load
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.04], [1, 0]);

  // 3. PHASE 2: EMERGING HEADLINE, SUBTITLE, CTA BUTTONS & STAT CARDS
  // On 1st scroll (0.04 to 0.20), the animation executes.
  // On 2nd scroll (0.20 to 0.50), the entire scene freezes like a still picture.
  const textOpacity = useTransform(smoothProgress, (p) => (p < 0.04 ? 0 : Math.min(1, (p - 0.04) / 0.14)));
  const textY = useTransform(smoothProgress, (p) => (p <= 0.20 ? 30 - (p / 0.20) * 30 : 0));
  const textScale = useTransform(smoothProgress, (p) => (p <= 0.20 ? 0.95 + (p / 0.20) * 0.05 : 1));
  const textPointerEvents = useTransform(smoothProgress, (p) => (p >= 0.08 ? "auto" : "none"));

  // 4. STAT CARDS (REVEAL ON 1ST SCROLL, FREEZE ON 2ND SCROLL, SPREAD ON 3RD SCROLL AS SCREEN SCROLLS DOWN)
  const cardsOpacity = useTransform(smoothProgress, (p) => (p < 0.04 ? 0 : Math.min(1, (p - 0.04) / 0.14)));
  const cardsY = useTransform(smoothProgress, (p) => (p <= 0.20 ? 25 - (p / 0.20) * 25 : 0));
  const cardsScale = useTransform(smoothProgress, (p) => (p <= 0.20 ? 0.95 + (p / 0.20) * 0.05 : 1));
  const cardsPointerEvents = useTransform(smoothProgress, (p) => (p >= 0.08 ? "auto" : "none"));

  // Side gap between 3 cards increases during 3rd scroll (0.50 -> 0.95)
  // as the screen reaches the end of the hero container and scrolls down
  const cardSpread = useTransform(smoothProgress, (p) => {
    if (p <= 0.50) return 0;
    if (p <= 0.95) {
      const t = (p - 0.50) / (0.95 - 0.50);
      // Smooth cubic easeInOut for fluid animation
      const eased = t * t * (3 - 2 * t);
      return eased * spreadDistance;
    }
    return spreadDistance;
  });

  const leftCardX = useTransform(cardSpread, (v) => -v);
  const rightCardX = useTransform(cardSpread, (v) => v);

  // Side dark vignettes beside the wall: reveals with 1st scroll into the settled scene
  const sideVignetteOpacity = useTransform(smoothProgress, (p) => (p < 0.04 ? 0 : Math.min(1, (p - 0.04) / 0.14)));
  // 5. House Cutout Parallax & Responsive Zoom:
  // After 1st scroll (p > 0.20), the scene is frozen like a still picture!
  // houseScaleX expands horizontally for a majestic wide architectural estate presence.
  const houseScaleX = useTransform(smoothProgress, (p) => {
    if (isMobile) {
      if (p <= 0.20) {
        const t = p / 0.20;
        return 2.05 - t * (2.05 - 1.28);
      }
      return 1.28; // Freezed still picture (a little bit more wider)
    } else {
      if (p <= 0.20) {
        const t = p / 0.20;
        return 1.28 - t * (1.28 - 0.73);
      }
      return 0.73; // Freezed still picture (a little bit more wider)
    }
  });

  const houseScaleY = useTransform(smoothProgress, (p) => {
    if (isMobile) {
      if (p <= 0.20) {
        const t = p / 0.20;
        return 1.85 - t * (1.85 - 1.20);
      }
      return 1.20;
    } else {
      if (p <= 0.20) {
        const t = p / 0.20;
        return 1.10 - t * (1.10 - 0.65);
      }
      return 0.65;
    }
  });

  const houseY = useTransform(smoothProgress, (p) => {
    if (isMobile) {
      if (p <= 0.20) {
        const t = p / 0.20;
        return 28 - t * (28 - -16);
      }
      return -16; // Freezed still picture
    } else {
      if (p <= 0.20) {
        const t = p / 0.20;
        return 58 - t * (58 - 20);
      }
      return 20; // Freezed still picture
    }
  });

  const defaultStats = [
    {
      value: "15+",
      label: "YEARS EXPERIENCE",
      icon: Sparkles,
      detail: "Continuous innovation in renewable energy",
    },
    {
      value: "2,400+",
      label: "PROJECTS COMPLETED",
      icon: MapPin,
      detail: "Residential, commercial & microgrids",
    },
    {
      value: "99.4%",
      label: "CUSTOMER SATISFACTION",
      icon: CheckCircle2,
      detail: "Independently audited verified client index",
    },
  ];

  const stats = statsData && statsData.length >= 3
    ? statsData.slice(0, 3).map((s, idx) => ({
        value: s.value,
        label: s.label.toUpperCase(),
        icon: [Sparkles, MapPin, CheckCircle2][idx] || Sparkles,
        detail: s.description || "Architectural solar integration",
      }))
    : defaultStats;

  const [bgSrc, setBgSrc] = React.useState(content?.bgImageUrl || "/hero-nature-bg.png");
  const [houseSrc, setHouseSrc] = React.useState(content?.houseImageUrl || "/hero-house.png");

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if ("scrollRestoration" in window.history) {
        window.history.scrollRestoration = "manual";
      }
      window.scrollTo(0, 0);
    }
  }, []);

  React.useEffect(() => {
    if (content?.bgImageUrl) setBgSrc(content.bgImageUrl);
    if (content?.houseImageUrl) setHouseSrc(content.houseImageUrl);
  }, [content?.bgImageUrl, content?.houseImageUrl]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
      className="relative w-full h-[195vh] bg-forest-950"
    >
      {/* Sticky Viewport Stage: Locks screen while the 3-phase emergence unfolds */}
      <section
        id="home"
        className="sticky top-0 h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-forest-950 text-white select-none"
      >
        {/* =========================================================================
            LAYER 1 (Z-0): BACKGROUND NATURE LANDSCAPE (Deep Parallax)
           ========================================================================= */}
        <motion.div
          style={{ y: bgY, scale: bgScale, opacity: bgOpacity }}
          className="absolute inset-[-4%] w-[108%] h-[108%] z-0 select-none overflow-hidden pointer-events-none"
        >
          <div className="relative w-full h-full">
            <Image
              src={bgSrc}
              alt="Architectural Estate Landscape Background"
              fill
              priority
              sizes="100vw"
              quality={95}
              className="object-cover object-[center_55%] sm:object-[center_60%] brightness-[0.92] contrast-[1.03]"
              onError={() => setBgSrc("/hero-nature-bg.png")}
            />

            {/* Top vignette for crisp navbar contrast */}
            <div className="absolute inset-x-0 top-0 h-36 sm:h-44 bg-gradient-to-b from-forest-950/85 via-forest-950/30 to-transparent pointer-events-none" />

            {/* Ambient solar flare glow in sky with cursor & touch interaction (dims on scroll) */}
            <motion.div
              style={{ x: sunGlowX, y: sunGlowY, scale: sunGlowScale, opacity: sunGlowOpacity }}
              className="absolute top-[14%] sm:top-[14%] left-1/2 -translate-x-1/2 w-[340px] xs:w-[480px] sm:w-[720px] h-[220px] sm:h-[340px] bg-gradient-radial from-solar-400/28 via-solar-300/12 to-transparent blur-[70px] sm:blur-[110px] pointer-events-none"
            />

            {/* Bottom vignette to blend into ground */}
            <div className="absolute inset-x-0 bottom-0 h-40 sm:h-48 bg-gradient-to-t from-forest-950/95 via-forest-950/50 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* =========================================================================
            LAYER 2A (Z-10): PHASE 1 - SOLAR LEGACY LOGO
            On mount: 1.05s load animation rising from behind house roofline!
            On 1st scroll: smoothly transitions out.
           ========================================================================= */}
        <motion.div
          style={{
            y: logoScrollY,
            scale: logoScrollScale,
            opacity: logoScrollOpacity,
            pointerEvents: logoPointerEvents,
          }}
          className="absolute left-1/2 -translate-x-1/2 -top-2 xs:-top-1.5 sm:-top-1 md:-top-0.5 lg:top-0 z-10 flex flex-col items-center select-none w-full px-4"
        >
          {/* Inner motion div: Rises up from behind roofline over 1.05s on initial load */}
          <motion.div
            initial={{ y: 120, opacity: 0, scale: 0.94 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{
              duration: 1.05,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.08,
            }}
            className="relative flex flex-col items-center"
          >
            {/* Ambient golden sun radiance behind logo */}
            <div className="absolute inset-0 -top-6 bg-solar-400/25 blur-3xl rounded-full scale-150 pointer-events-none" />

            {/* Solar Legacy Logo with outer drop-shadow to prevent rectangular clipping */}
            <div className="relative filter drop-shadow-[0_8px_30px_rgba(0,0,0,0.85)] brightness-105">
              <div
                className="relative w-[340px] xs:w-[420px] sm:w-[540px] md:w-[640px] lg:w-[700px] aspect-[664/169]"
                style={{
                  WebkitMaskImage: "linear-gradient(to right, #000 0%, #000 52%, transparent 52%), linear-gradient(to bottom, #000 0%, #000 68%, rgba(0,0,0,0.75) 75%, rgba(0,0,0,0.22) 90%, rgba(0,0,0,0.06) 100%)",
                  maskImage: "linear-gradient(to right, #000 0%, #000 52%, transparent 52%), linear-gradient(to bottom, #000 0%, #000 68%, rgba(0,0,0,0.75) 75%, rgba(0,0,0,0.22) 90%, rgba(0,0,0,0.06) 100%)",
                }}
              >
                <Image
                  src="/logo-dark.png"
                  alt="Solar Legacy"
                  fill
                  priority
                  sizes="(max-width: 640px) 430px, (max-width: 1024px) 680px, 750px"
                  quality={100}
                  className="object-contain"
                />
              </div>
            </div>


            {/* Scroll cue for mobile view only */}
            <motion.div
              style={{ opacity: scrollIndicatorOpacity }}
              className="flex sm:hidden items-center gap-1.5 mt-3 text-[9px] tracking-widest uppercase text-beige-200/90 font-mono pointer-events-none bg-forest-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 shadow-lg"
            >
              <span>Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronDown className="w-3 h-3 text-solar-400" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* =========================================================================
            LAYER 2B (Z-10): PHASE 2 - HEADLINE, SUBTITLE & CTA BUTTONS
            Reveals on FIRST SCROLL from behind house roofline!
           ========================================================================= */}
        <motion.div
          style={{
            y: textY,
            scale: textScale,
            opacity: textOpacity,
            pointerEvents: textPointerEvents,
          }}
          className="absolute left-1/2 -translate-x-1/2 top-[68px] sm:top-[72px] md:top-[76px] w-full max-w-3xl sm:max-w-4xl px-4 flex flex-col items-center text-center z-25"
        >
          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-xl xs:text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] tracking-tight text-white leading-[1.14] mb-2 sm:mb-2.5 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] max-w-3xl">
            {content?.title ? (
              content.title
            ) : (
              <>
                Architectural Solar <br className="hidden sm:inline" />
                &amp; Renewable Energy Systems
              </>
            )}
          </h1>

          {/* Subtitle */}
          <p className="text-xs xs:text-[13px] sm:text-[14.5px] md:text-base text-beige-100/90 font-light leading-relaxed max-w-sm sm:max-w-2xl mb-3 sm:mb-3.5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] px-2">
            {content?.subtitle ||
              "Precision-engineered solar integrations designed to harmonize luxury architectural aesthetics with cutting-edge microinverter yield efficiency."}
          </p>

          {/* CTA Buttons - Mobile and Desktop Optimized (a little bit bigger) */}
          <div className="flex flex-row items-center justify-center gap-2.5 xs:gap-3.5 sm:gap-4 w-full max-w-xs sm:max-w-none px-2">
            <Button
              variant="solar"
              size="default"
              className="flex-1 sm:flex-initial font-bold text-forest-950 bg-gradient-to-r from-solar-400 to-solar-500 hover:from-solar-300 hover:to-solar-400 shadow-[0_4px_22px_rgba(245,158,11,0.45)] hover:shadow-[0_6px_28px_rgba(245,158,11,0.6)] group cursor-pointer h-9.5 sm:h-10 md:h-11 px-4.5 sm:px-6 text-xs sm:text-[13px] md:text-sm justify-center hover:scale-[1.03] transition-all active:scale-95 rounded-xl border-none"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => {
                sounds.playPrimaryClick();
                const el = document.getElementById("quote") || document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="truncate">{content?.primaryCtaText || "Get Solar Quote"}</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1 shrink-0" />
            </Button>

            <Button
              variant="forestOutline"
              size="default"
              className="flex-1 sm:flex-initial border border-solar-400/40 bg-[#06140e]/95 hover:bg-[#0d261b] hover:border-solar-400 text-white cursor-pointer backdrop-blur-md h-9.5 sm:h-10 md:h-11 px-4.5 sm:px-6 text-xs sm:text-[13px] md:text-sm justify-center hover:scale-[1.03] transition-all active:scale-95 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.8)] font-semibold"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => {
                sounds.playSecondaryClick();
                const el = document.getElementById("solutions") || document.getElementById("about");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Sparkles className="w-4 h-4 text-solar-400 mr-1.5 shrink-0" />
              <span className="truncate">{content?.secondaryCtaText || "Explore Solutions"}</span>
            </Button>
          </div>
        </motion.div>

        {/* =========================================================================
            LAYER 2C (Z-15): AMBIENT & SIDE DARK VIGNETTES
            Reveals on 1st scroll:
            1. Overall background darkening across the screen (low opacity ~38-45%).
            2. Deep dark beside the lower walls (~75-77%) and solid dark at the bottom floor.
           ========================================================================= */}
        <motion.div
          style={{ opacity: sideVignetteOpacity }}
          className="absolute inset-0 z-[15] pointer-events-none select-none overflow-hidden"
        >
          {/* Overall ambient darkening overlay: low-opacity dark tint across the upper/middle screen */}
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(2, 8, 5, 0.60) 0%, rgba(2, 8, 5, 0.48) 35%, rgba(2, 8, 5, 0.52) 65%, rgba(2, 8, 5, 0.78) 85%, #020805 100%)",
            }}
          />

          {/* Left side dark: starts lower beside the garage wall, opacity smoothly increasing top to bottom */}
          <div
            className="absolute bottom-0 top-[75%] sm:top-[76%] md:top-[77%] left-0 w-[30%] sm:w-[26%] lg:w-[24%]"
            style={{
              background: "linear-gradient(to bottom, rgba(2, 8, 5, 0) 0%, rgba(2, 8, 5, 0.25) 25%, rgba(2, 8, 5, 0.6) 55%, rgba(2, 8, 5, 0.9) 80%, #020805 100%)",
              WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,1) 75%, transparent 100%)",
              maskImage: "linear-gradient(to right, rgba(0,0,0,1) 75%, transparent 100%)",
            }}
          />

          {/* Right side dark: starts lower beside the right wall, opacity smoothly increasing top to bottom */}
          <div
            className="absolute bottom-0 top-[75%] sm:top-[76%] md:top-[77%] right-0 w-[30%] sm:w-[26%] lg:w-[24%]"
            style={{
              background: "linear-gradient(to bottom, rgba(2, 8, 5, 0) 0%, rgba(2, 8, 5, 0.25) 25%, rgba(2, 8, 5, 0.6) 55%, rgba(2, 8, 5, 0.9) 80%, #020805 100%)",
              WebkitMaskImage: "linear-gradient(to left, rgba(0,0,0,1) 75%, transparent 100%)",
              maskImage: "linear-gradient(to left, rgba(0,0,0,1) 75%, transparent 100%)",
            }}
          />

          {/* Bottom floor ground darkening: soft lower opacity increasing to bottom */}
          <div
            className="absolute bottom-0 top-[84%] sm:top-[85%] inset-x-0"
            style={{
              background: "linear-gradient(to bottom, rgba(3, 13, 8, 0) 0%, rgba(3, 13, 8, 0.25) 40%, rgba(3, 13, 8, 0.7) 100%)",
            }}
          />
        </motion.div>

        {/* =========================================================================
            LAYER 3 (Z-20): HOUSE CUTOUT (Foreground Parallax Plane)
            Mobile: object-contain object-bottom so the FULL HOUSE WIDTH (garage to entrance) is 100% visible without clipping.
            Desktop: object-cover sm:object-[center_60%] for seamless widescreen landscape alignment.
           ========================================================================= */}
        <motion.div
          style={{
            y: houseY,
            scaleX: houseScaleX,
            scaleY: houseScaleY,
            transformOrigin: "center 92%",
          }}
          className="absolute inset-x-0 bottom-0 sm:inset-[-4%] sm:w-[108%] sm:h-[108%] z-20 pointer-events-none select-none flex items-end justify-center"
        >
          {/* Horizontal Ground Contact Shadow - runs parallel to the ground directly beneath the house foundation */}
          <div
            className="absolute -bottom-3 sm:-bottom-4 md:-bottom-6 inset-x-0 h-20 sm:h-28 md:h-36 pointer-events-none -z-10"
            style={{
              background: "radial-gradient(ellipse 98% 70% at 50% 30%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.85) 45%, rgba(0, 0, 0, 0.35) 78%, transparent 100%)",
              filter: "blur(10px)",
            }}
          />

          <div
            className="relative w-full h-[42vh] sm:w-full sm:h-full max-w-lg sm:max-w-none"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, #000 84%, rgba(0,0,0,0.92) 89%, rgba(0,0,0,0.45) 96%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, #000 84%, rgba(0,0,0,0.92) 89%, rgba(0,0,0,0.45) 96%, transparent 100%)",
            }}
          >
            <Image
              src={houseSrc}
              alt="Architectural Solar Residence"
              fill
              priority
              sizes="(max-width: 640px) 100vw, 100vw"
              quality={100}
              className="object-contain object-bottom sm:object-cover sm:object-[center_60%] drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]"
              onError={() => setHouseSrc("/hero-house.png")}
            />

            {/* Subtle horizontal foundation baseline shade: only darkens the bottom stone threshold */}
            <div
              className="absolute inset-x-0 bottom-0 h-8 sm:h-12 md:h-14 pointer-events-none"
              style={{
                background: "linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.45) 40%, rgba(0, 0, 0, 0.90) 100%)",
              }}
            />
          </div>
        </motion.div>

        {/* =========================================================================
            LAYER 3B (Z-15): HORIZONTAL GROUND TERRAIN DARK SHADE (UNDER THE HOUSE)
            Runs parallel to the floor across the terrain in the first scene,
            firmly anchoring the house so it feels deeply grounded into the background.
           ========================================================================= */}
        <div
          className="absolute inset-x-0 bottom-0 h-44 sm:h-56 md:h-72 z-[15] pointer-events-none select-none"
        >
          {/* Deep horizontal terrain shade parallel to the ground */}
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(to bottom, rgba(1, 5, 3, 0) 0%, rgba(1, 5, 3, 0.60) 30%, rgba(1, 5, 3, 0.94) 65%, #010503 100%)",
            }}
          />

          {/* Deep horizontal contact shadow strip running parallel to the ground */}
          <div
            className="absolute inset-x-0 bottom-8 sm:bottom-12 md:bottom-18 h-24 sm:h-32 opacity-95"
            style={{
              background: "radial-gradient(ellipse 98% 70% at 50% 50%, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.90) 48%, rgba(0, 0, 0, 0.40) 80%, transparent 100%)",
              filter: "blur(10px)",
            }}
          />
        </div>

        {/* =========================================================================
            LAYER 4 (Z-30): 3 STAT CARDS (HEAD STARTS A LITTLE UPPER TO HOUSE FLOOR)
           ========================================================================= */}
        <motion.div
          style={{
            y: cardsY,
            scale: cardsScale,
            opacity: cardsOpacity,
            pointerEvents: cardsPointerEvents,
          }}
          className="absolute bottom-2 sm:bottom-2.5 md:bottom-3 inset-x-0 z-30 px-3 sm:px-6 max-w-4xl mx-auto w-full"
        >
          <div className="grid grid-cols-3 gap-2 sm:gap-2.5 md:gap-3.5 w-full">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              const cardX = idx === 0 ? leftCardX : idx === 2 ? rightCardX : 0;
              return (
                <motion.div
                  key={stat.label}
                  style={{ x: cardX }}
                  whileHover={{ scale: 1.025, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onMouseEnter={() => sounds.playCardHover(idx)}
                  onClick={() => sounds.playCardClick(idx)}
                  className="group relative overflow-hidden rounded-xl py-1.5 sm:py-2 px-2.5 sm:px-3 bg-[#05130d]/95 backdrop-blur-md border border-solar-400/40 transition-all duration-300 shadow-[0_12px_36px_rgba(0,0,0,0.95)] hover:border-solar-400/80 cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-2 text-center sm:text-left">
                    <div className="flex items-center justify-center w-5 h-5 sm:w-7 sm:h-7 rounded-lg bg-forest-900 border border-solar-400/40 text-solar-400 group-hover:bg-solar-400 group-hover:text-forest-950 transition-colors duration-300 shadow-sm shrink-0">
                      <IconComponent className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </div>
                    <div className="flex flex-col min-w-0 w-full">
                      <span className="font-heading font-extrabold text-xs sm:text-base text-white tracking-tight group-hover:text-solar-300 transition-colors leading-tight truncate">
                        {stat.value}
                      </span>
                      <span className="text-[6.5px] xs:text-[7.5px] sm:text-[8px] md:text-[9px] font-bold uppercase tracking-wider text-solar-400 font-mono truncate leading-tight mt-0.5">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                  <p className="hidden sm:block text-[7.5px] md:text-[8.5px] text-white/70 mt-0.5 pl-7 sm:pl-9 font-light leading-tight line-clamp-1">
                    {stat.detail}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-solar-400/0 via-solar-400/60 to-solar-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
