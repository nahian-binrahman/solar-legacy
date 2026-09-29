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

  // =========================================================================
  // PARALLAX & ANIMATION TRANSFORMS
  // =========================================================================

  // 1. Background Nature Parallax: moves subtly with cinematic scale
  const bgY = useTransform(smoothProgress, [0, 1], [0, 50]);
  const bgScale = useTransform(smoothProgress, [0, 1], [1.02, 1.12]);
  const bgOpacity = useTransform(smoothProgress, [0, 0.85, 1], [1, 0.95, 0.35]);

  // Sun flare parallax, dynamic radiance, and cursor/touch drift
  const sunGlowX = useTransform(mouseX, [0, 1], [-25, 25]);
  const sunGlowY = useTransform(smoothProgress, [0, 1], [0, 40]);
  const sunGlowScale = useTransform(smoothProgress, [0, 1], [1, 1.25]);

  // 2. PHASE 1: SOLAR LEGACY LOGO
  // Starts with 1.05s load animation rising from behind roofline.
  // On 1st scroll (0.05 to 0.22), it smoothly fades and moves up.
  const logoScrollOpacity = useTransform(smoothProgress, [0, 0.04, 0.20], [1, 0.9, 0]);
  const logoScrollY = useTransform(smoothProgress, [0, 0.20], [0, -35]);
  const logoScrollScale = useTransform(smoothProgress, [0, 0.20], [1, 0.94]);
  const logoPointerEvents = useTransform(smoothProgress, (val) => (val < 0.12 ? "auto" : "none"));

  // Minimalist scroll cue visible on mobile initial load
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.04], [1, 0]);



  // 3. PHASE 2: EMERGING HEADLINE, SUBTITLE & CTA BUTTONS (REVEALS ON 1ST SCROLL)
  // Rises up and fades in as logo departs (0.12 to 0.30), stays visible through scroll phase 2 & 3
  const textOpacity = useTransform(smoothProgress, [0.12, 0.28, 0.78, 0.96], [0, 1, 1, 0.2]);
  const textY = useTransform(smoothProgress, [0.12, 0.28, 0.85, 1], [70, 0, 0, -30]);
  const textScale = useTransform(smoothProgress, [0.12, 0.28], [0.94, 1]);
  const textPointerEvents = useTransform(smoothProgress, (val) => (val >= 0.16 && val <= 0.85 ? "auto" : "none"));

  // 4. PHASE 3: 3 STAT CARDS (REVEALS ON 2ND SCROLL)
  // Slides up and fades in after headline has settled (0.38 to 0.60)
  const cardsOpacity = useTransform(smoothProgress, [0.38, 0.58, 0.85, 1], [0, 1, 1, 0.25]);
  const cardsY = useTransform(smoothProgress, [0.38, 0.58, 0.85, 1], [45, 0, 0, -20]);
  const cardsScale = useTransform(smoothProgress, [0.38, 0.58], [0.94, 1]);
  const cardsPointerEvents = useTransform(smoothProgress, (val) => (val >= 0.45 && val <= 0.88 ? "auto" : "none"));

  // 5. House Cutout Parallax & Deep Zoom-out:
  // Zooms out noticeably (down to 0.68 on 1st scroll) to reveal wide architectural panorama
  const houseY = useTransform(smoothProgress, [0, 0.26, 0.85], [0, 55, 95]);
  const houseScale = useTransform(smoothProgress, [0, 0.26, 0.85], [1, 0.68, 0.58]);

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
      className="relative w-full h-[280vh] bg-forest-950"
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
            <div className="absolute inset-x-0 top-0 h-36 sm:h-44 bg-gradient-to-b from-forest-950/85 via-forest-950/30 to-transparent" />

            {/* Ambient solar flare glow in sky with cursor & touch interaction */}
            <motion.div
              style={{ x: sunGlowX, y: sunGlowY, scale: sunGlowScale }}
              className="absolute top-[14%] sm:top-[14%] left-1/2 -translate-x-1/2 w-[340px] xs:w-[480px] sm:w-[720px] h-[220px] sm:h-[340px] bg-gradient-radial from-solar-400/28 via-solar-300/12 to-transparent blur-[70px] sm:blur-[110px] pointer-events-none"
            />

            {/* Bottom vignette to blend into ground and bottom cards */}
            <div className="absolute inset-x-0 bottom-0 h-40 sm:h-48 bg-gradient-to-t from-forest-950/95 via-forest-950/50 to-transparent" />
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
          className="absolute left-1/2 -translate-x-1/2 top-[12%] xs:top-[13%] sm:top-[9.5%] md:top-[9.5%] lg:top-[10%] z-10 flex flex-col items-center select-none w-full px-4"
        >
          {/* Inner motion div: Rises up from behind roofline over 1.05s on initial load */}
          <motion.div
            initial={{ y: 220, opacity: 0, scale: 0.92 }}
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

            {/* Solar Legacy Logo Image - Vector sharp HD */}
            <div className="relative w-[240px] xs:w-[280px] sm:w-[360px] md:w-[440px] lg:w-[480px] aspect-[664/169]">
              <Image
                src="/logo-dark.png"
                alt="Solar Legacy"
                fill
                priority
                sizes="(max-width: 640px) 280px, (max-width: 1024px) 440px, 480px"
                quality={100}
                className="object-contain filter drop-shadow-[0_8px_30px_rgba(0,0,0,0.85)] brightness-105"
              />
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
          className="absolute left-1/2 -translate-x-1/2 top-[9%] xs:top-[10%] sm:top-[13%] md:top-[15%] w-full max-w-4xl px-4 flex flex-col items-center text-center z-10"
        >
          {/* Top Badge */}
          <div className="mb-1.5 sm:mb-2.5">
            <Badge
              variant="glass"
              size="default"
              dot
              dotColor="solar"
              pulse
              onClick={() => sounds.playEnergySurge()}
              onMouseEnter={() => sounds.playHover()}
              className="border-solar-400/40 text-beige-100 px-3 sm:px-3.5 py-0.5 sm:py-1 shadow-[0_4px_25px_rgba(245,158,11,0.2)] bg-forest-950/90 backdrop-blur-md text-[10px] sm:text-[11px] tracking-wide font-medium relative overflow-hidden group cursor-pointer"
            >
              <span className="relative z-10">{content?.badge || "Next-Gen Architectural Photovoltaics"}</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-solar-400/25 to-transparent" />
            </Badge>
          </div>

          {/* Main Headline */}
          <h1 className="font-heading font-extrabold text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[42px] tracking-tight text-white leading-tight mb-1.5 sm:mb-2.5 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] max-w-3xl">
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
          <p className="text-[11px] xs:text-xs sm:text-sm lg:text-base text-beige-100/90 font-light leading-relaxed max-w-xs sm:max-w-2xl mb-3.5 sm:mb-5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] px-2 line-clamp-2 sm:line-clamp-none">
            {content?.subtitle ||
              "Precision-engineered solar integrations designed to harmonize luxury architectural aesthetics with cutting-edge microinverter yield efficiency."}
          </p>

          {/* CTA Buttons - Mobile and Desktop Optimized */}
          <div className="flex flex-row items-center justify-center gap-2 xs:gap-3 sm:gap-4 w-full max-w-xs sm:max-w-none px-2">
            <Button
              variant="solar"
              size="default"
              className="flex-1 sm:flex-initial font-bold text-forest-950 bg-gradient-to-r from-solar-400 to-solar-500 hover:from-solar-300 hover:to-solar-400 shadow-[0_4px_22px_rgba(245,158,11,0.4)] hover:shadow-[0_6px_28px_rgba(245,158,11,0.55)] group cursor-pointer h-9 sm:h-10 md:h-11 px-3 sm:px-6 text-[11px] xs:text-xs sm:text-sm justify-center hover:scale-[1.03] transition-all active:scale-95 rounded-xl border-none"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => {
                sounds.playPrimaryClick();
                const el = document.getElementById("quote") || document.getElementById("contact");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span className="truncate">{content?.primaryCtaText || "Get Solar Quote"}</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform group-hover:translate-x-1 shrink-0" />
            </Button>

            <Button
              variant="forestOutline"
              size="default"
              className="flex-1 sm:flex-initial border border-white/25 bg-black/35 hover:bg-white/15 text-white cursor-pointer backdrop-blur-md h-9 sm:h-10 md:h-11 px-3 sm:px-6 text-[11px] xs:text-xs sm:text-sm justify-center hover:scale-[1.03] transition-all active:scale-95 rounded-xl shadow-lg"
              onMouseEnter={() => sounds.playHover()}
              onClick={() => {
                sounds.playSecondaryClick();
                const el = document.getElementById("solutions") || document.getElementById("about");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-solar-400 mr-1.5 shrink-0" />
              <span className="truncate">{content?.secondaryCtaText || "Explore Solutions"}</span>
            </Button>
          </div>
        </motion.div>

        {/* =========================================================================
            LAYER 3 (Z-20): HOUSE CUTOUT (Foreground Parallax Plane)
            Opaque house PNG with solar panels.
            Uses exact same coordinate space and object-cover alignment as Layer 1,
            guaranteeing 100% pixel-perfect alignment and scale on BOTH mobile & desktop!
            Logo and headline sit behind its roofline (Z-10), while cards sit in front (Z-30).
           ========================================================================= */}
        <motion.div
          style={{
            y: houseY,
            scale: houseScale,
            transformOrigin: "center 85%",
          }}
          className="absolute inset-[-4%] w-[108%] h-[108%] z-20 pointer-events-none select-none overflow-hidden"
        >
          <div className="relative w-full h-full">
            <Image
              src={houseSrc}
              alt="Architectural Solar Residence"
              fill
              priority
              sizes="100vw"
              quality={100}
              className="object-cover object-[center_55%] sm:object-[center_60%] drop-shadow-[0_25px_50px_rgba(0,0,0,0.7)]"
              onError={() => setHouseSrc("/hero-house.png")}
            />
          </div>
        </motion.div>

        {/* =========================================================================
            LAYER 4 (Z-30): PHASE 3 - 3 STAT CARDS (REVEALS ON 2ND SCROLL)
            Slides up and reveals in front of the lower house base.
           ========================================================================= */}
        <motion.div
          style={{
            y: cardsY,
            scale: cardsScale,
            opacity: cardsOpacity,
            pointerEvents: cardsPointerEvents,
          }}
          className="absolute bottom-3 xs:bottom-4 sm:bottom-6 md:bottom-8 inset-x-0 z-30 px-2.5 xs:px-3 sm:px-6 max-w-5xl mx-auto w-full"
        >
          <div className="grid grid-cols-3 gap-1.5 xs:gap-2 sm:gap-3 md:gap-4 w-full">
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.025, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  onMouseEnter={() => sounds.playCardHover(idx)}
                  onClick={() => sounds.playCardClick(idx)}
                  className="group relative overflow-hidden rounded-xl p-2 xs:p-2.5 sm:p-3.5 md:p-4 bg-[#081510]/90 backdrop-blur-xl border border-white/15 hover:border-solar-400/60 transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.7)] hover:shadow-[0_16px_45px_rgba(245,158,11,0.2)] cursor-pointer"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1.5 sm:gap-3 text-center sm:text-left">
                    <div className="flex items-center justify-center w-6 h-6 xs:w-7 xs:h-7 sm:w-9 sm:h-9 rounded-lg bg-forest-900/90 border border-solar-400/30 text-solar-400 group-hover:bg-solar-400 group-hover:text-forest-950 transition-colors duration-300 shadow-sm shrink-0">
                      <IconComponent className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <div className="flex flex-col min-w-0 w-full">
                      <span className="font-heading font-extrabold text-xs xs:text-sm sm:text-xl md:text-2xl text-white tracking-tight group-hover:text-solar-300 transition-colors leading-tight truncate">
                        {stat.value}
                      </span>
                      <span className="text-[7.5px] xs:text-[8px] sm:text-[9px] md:text-[11px] font-bold uppercase tracking-wider text-solar-400/90 font-mono truncate leading-tight mt-0.5">
                        {stat.label}
                      </span>
                    </div>
                  </div>
                  <p className="hidden sm:block text-[9px] md:text-[11px] text-white/70 mt-1.5 pl-9 sm:pl-12 font-light leading-snug line-clamp-1">
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
