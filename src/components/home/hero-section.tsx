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

  // Controlled scroll threshold controller:
  // First scroll input triggers full first-scroll transition to checkpoint state (no stopping halfway).
  // Reverse scroll reverses naturally back to top.
  React.useEffect(() => {
    let isAutoScrolling = false;
    let scrollTimer: NodeJS.Timeout | null = null;

    const getCheckpointY = () => {
      if (!containerRef.current) return window.innerHeight * 0.24;
      const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
      return totalScrollable * 0.22;
    };

    const handleWheel = (e: WheelEvent) => {
      const scrollY = window.scrollY;
      const checkpointY = getCheckpointY();

      // Forward transition from top:
      if (scrollY < 30 && e.deltaY > 5) {
        e.preventDefault();
        if (isAutoScrolling) return;
        isAutoScrolling = true;
        window.scrollTo({ top: checkpointY, behavior: "smooth" });
        if (scrollTimer) clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          isAutoScrolling = false;
        }, 850);
      }
      // Reverse transition from checkpoint:
      else if (scrollY <= checkpointY + 40 && scrollY >= 30 && e.deltaY < -5) {
        e.preventDefault();
        if (isAutoScrolling) return;
        isAutoScrolling = true;
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (scrollTimer) clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          isAutoScrolling = false;
        }, 850);
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY;
      const scrollY = window.scrollY;
      const checkpointY = getCheckpointY();

      if (scrollY < 30 && deltaY > 25) {
        if (isAutoScrolling) return;
        isAutoScrolling = true;
        window.scrollTo({ top: checkpointY, behavior: "smooth" });
        if (scrollTimer) clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          isAutoScrolling = false;
        }, 850);
      } else if (scrollY <= checkpointY + 40 && scrollY >= 30 && deltaY < -25) {
        if (isAutoScrolling) return;
        isAutoScrolling = true;
        window.scrollTo({ top: 0, behavior: "smooth" });
        if (scrollTimer) clearTimeout(scrollTimer);
        scrollTimer = setTimeout(() => {
          isAutoScrolling = false;
        }, 850);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      if (scrollTimer) clearTimeout(scrollTimer);
    };
  }, []);

  // =========================================================================
  // PARALLAX & ANIMATION TRANSFORMS
  // =========================================================================

  // =========================================================================
  // MULTI-STAGE ARCHITECTURAL CAMERA TIMELINE
  // Stage 1 (p: 0.00 -> 0.050): Camera Crane Downward Settle (~4cm / ~26px)
  // Stage 2 (p: 0.005 -> 0.145): Logo Exit & Subtle Initial Camera Depth
  // Stage 3 (p: 0.095 -> 0.190): Content Reveal (Heading, Subtitle, Buttons) above the house
  // Checkpoint 1 (p ~ 0.22): House stays LARGE & DOMINANT (almost original size), logo gone, text fully revealed, cards peeking at bottom
  // Stage 4 (p: 0.220 -> 0.500): Later Scroll - Camera Pulls Backward, Deep Parallax, Cards Fully Elevate
  // Stage 5 (p: 0.550 -> 0.950): Horizontal Card Expansion into Next Section
  // =========================================================================

  // 1. Background Nature Parallax:
  // - First scroll: settles downward slightly (~16px desktop, ~12px mobile) and stays close (1.15 -> 1.135)
  // - Later scroll: pulls backward into deep parallax (1.135 -> 1.08, z: -15px -> -85px)
  const bgScale = useTransform(smoothProgress, (p) => {
    const initialScale = isMobile ? 1.25 : 1.15;
    const stage1Scale = isMobile ? 1.24 : 1.135; // Kept close during first scroll!
    const finalScale = isMobile ? 1.18 : 1.08;

    if (p <= 0.04) return initialScale;
    if (p <= 0.22) {
      const t = (p - 0.04) / (0.22 - 0.04);
      const eased = t * t * (3 - 2 * t);
      return initialScale - eased * (initialScale - stage1Scale);
    }
    if (p <= 0.50) {
      const t = (p - 0.22) / (0.50 - 0.22);
      const eased = t * t * (3 - 2 * t);
      return stage1Scale - eased * (stage1Scale - finalScale);
    }
    return finalScale;
  });

  const bgZ = useTransform(smoothProgress, (p) => {
    if (p <= 0.04) return 0;
    if (p <= 0.22) {
      const t = (p - 0.04) / (0.22 - 0.04);
      return -t * 15;
    }
    if (p <= 0.50) {
      const t = (p - 0.22) / (0.50 - 0.22);
      const eased = t * t * (3 - 2 * t);
      return -15 - eased * (85 - 15);
    }
    return -85;
  });

  const bgY = useTransform(smoothProgress, (p) => {
    const settleY = isMobile ? 12 : 16;
    const finalY = isMobile ? 20 : 26;
    if (p <= 0.050) {
      const t = p / 0.050;
      return t * t * (3 - 2 * t) * settleY;
    }
    if (p <= 0.50) {
      const t = (p - 0.050) / (0.50 - 0.050);
      const eased = t * t * (3 - 2 * t);
      return settleY + eased * (finalY - settleY);
    }
    return finalY;
  });

  // Background opacity transition when cards reveal (maintaining house prominence)
  const bgOpacity = useTransform(smoothProgress, [0, 0.24, 0.35, 0.85, 1], [1, 1, 0.85, 0.80, 0.35]);

  // Sun flare parallax, dynamic radiance, and cursor/touch drift
  const sunGlowX = useTransform(mouseX, [0, 1], [-25, 25]);
  const sunGlowY = useTransform(smoothProgress, [0, 1], [0, 40]);
  const sunGlowScale = useTransform(smoothProgress, [0, 1], [1, 1.25]);
  const sunGlowOpacity = useTransform(smoothProgress, (p) => (p <= 0.22 ? 1 - (p / 0.22) * 0.85 : 0.15));

  // =========================================================================
  // 2. LOGO BEHAVIOR:
  // - Step 1: Moves downward ~4cm (~26px) with the house
  // - Step 2: Moves straight backward in 3D depth slowly and fades away
  // - Fades out completely by p = 0.145 before content reveal completes
  // =========================================================================
  const logoProgress = useTransform(smoothProgress, (p) => {
    const pStart = 0.005;
    const pEnd = 0.145;
    if (p <= pStart) return 0;
    if (p >= pEnd) return 1;
    const t = (p - pStart) / (pEnd - pStart);
    return t * t * (3 - 2 * t);
  });

  const logoScrollY = useTransform(smoothProgress, (p) => {
    const settleY = isMobile ? 22 : 26;
    if (p <= 0.050) {
      const t = p / 0.050;
      return t * t * (3 - 2 * t) * settleY;
    }
    return settleY;
  });

  const logoScrollZ = useTransform(logoProgress, [0, 1], [0, -280]);
  const logoScrollScale = useTransform(logoProgress, [0, 0.40, 0.75, 1.0], [1.0, 0.92, 0.65, 0.40]);
  const logoScrollOpacity = useTransform(logoProgress, [0, 0.25, 0.65, 1.0], [1.0, 0.95, 0.40, 0.0]);
  const logoScrollBlur = useTransform(logoProgress, [0, 0.30, 0.70, 1.0], [0, 0.3, 2.0, 4.8]);
  const logoScrollFilter = useTransform(logoScrollBlur, (b) => (b <= 0.2 ? "none" : `blur(${b.toFixed(1)}px)`));
  const logoPointerEvents = useTransform(logoProgress, (pr) => (pr < 0.65 ? "auto" : "none"));

  // Minimalist scroll cue visible on mobile initial load
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.03], [1, 0]);

  // =========================================================================
  // 3. CONTENT REVEAL (MAIN HEADING, SUBHEADING & CTA BUTTONS):
  // - After logo removal (starts at 0.095, settles by 0.190)
  // - Emerges to foreground above the house (z-25)
  // - House is STILL large, dominant, and close!
  // =========================================================================
  const textProgress = useTransform(smoothProgress, (p) => {
    if (p <= 0.095) return 0;
    if (p >= 0.190) return 1;
    const t = (p - 0.095) / (0.190 - 0.095);
    return 1 - Math.pow(1 - t, 2.5);
  });

  const textOpacity = useTransform(textProgress, [0, 1], [0, 1]);
  const textY = useTransform(textProgress, [0, 1], [50, 0]);
  const textBlur = useTransform(textProgress, [0, 1], [8, 0]);
  const textFilter = useTransform(textBlur, (b) => (b <= 0.2 ? "none" : `blur(${b}px)`));
  const textScale = useTransform(textProgress, [0, 1], [0.95, 1.0]);
  const textPointerEvents = useTransform(smoothProgress, (p) => (p >= 0.12 ? "auto" : "none"));

  // =========================================================================
  // 4. STATS CARDS REVEAL (2-STAGE):
  // - First scroll (p: 0.180 -> 0.240): Cards only START appearing at the bottom edge (subtle peek, low opacity).
  // - Later scroll (p: 0.240 -> 0.440): Cards fully elevate to their prominent settled position above the floor.
  // =========================================================================
  const cardsProgress = useTransform(smoothProgress, (p) => {
    if (p <= 0.180) return 0;
    if (p <= 0.240) {
      // First scroll checkpoint: only 25% peek at bottom edge
      const t = (p - 0.180) / (0.240 - 0.180);
      return t * 0.25;
    }
    if (p <= 0.440) {
      // Later scroll: elevates fully from 0.25 to 1.0
      const t = (p - 0.240) / (0.440 - 0.240);
      const eased = t * t * (3 - 2 * t);
      return 0.25 + eased * 0.75;
    }
    return 1.0;
  });

  const cardsOpacity = useTransform(cardsProgress, (cp) => {
    if (cp <= 0) return 0;
    if (cp <= 0.25) return (cp / 0.25) * 0.30; // Subtle peek (max 30% opacity at first scroll checkpoint)
    return 0.30 + ((cp - 0.25) / 0.75) * 0.70; // Rises to 100% opacity during later scroll
  });

  const cardsY = useTransform(cardsProgress, [0, 0.25, 1.0], [56, 36, 0]);
  const cardsScale = useTransform(cardsProgress, [0, 0.25, 1.0], [0.92, 0.94, 1.0]);
  const cardsPointerEvents = useTransform(cardsProgress, (cp) => (cp >= 0.60 ? "auto" : "none"));

  // Side gap between 3 cards increases during 3rd scroll (0.55 -> 0.95)
  // as the screen reaches the end of the hero container and scrolls down
  const cardSpread = useTransform(smoothProgress, (p) => {
    if (p <= 0.55) return 0;
    if (p <= 0.95) {
      const t = (p - 0.55) / (0.95 - 0.55);
      const eased = t * t * (3 - 2 * t);
      return eased * spreadDistance;
    }
    return spreadDistance;
  });

  const leftCardX = useTransform(cardSpread, (v) => -v);
  const rightCardX = useTransform(cardSpread, (v) => v);

  // Ambient & floor shade overlay: reveals with 1st scroll into the settled scene
  const sideVignetteOpacity = useTransform(smoothProgress, (p) => (p < 0.07 ? 0 : Math.min(1, (p - 0.07) / 0.12)));

  // =========================================================================
  // 5. HOUSE CAMERA PULLBACK & FLOOR GROUNDING:
  // - Step 1 (p: 0.00 -> 0.050): Moves downward ~4cm (~26px) with the camera lowering
  // - First Scroll Checkpoint (p: 0.040 -> 0.220): House stays LARGE & DOMINANT (scale 1.03 -> 1.01, z: 0 -> -20px)
  // - Later Scroll (p: 0.220 -> 0.500): Camera gradually pulls backward away from the estate (scale 1.01 -> 0.88, z: -20px -> -240px)
  // - Floor dark shadow (Layer 3B) moves in 100% synchronization throughout all phases
  // =========================================================================
  const houseY = useTransform(smoothProgress, (p) => {
    const settleY = isMobile ? 22 : 26;
    if (p <= 0.050) {
      const t = p / 0.050;
      return t * t * (3 - 2 * t) * settleY;
    }
    return settleY;
  });

  const houseZ = useTransform(smoothProgress, (p) => {
    if (p <= 0.04) return 0;
    if (p <= 0.22) {
      // First scroll: subtle 3D depth movement (-20px)
      const t = (p - 0.04) / (0.22 - 0.04);
      const eased = t * t * (3 - 2 * t);
      return -eased * 20;
    }
    if (p <= 0.50) {
      // Later scroll: cinematic camera physically pulls backward away from the house
      const t = (p - 0.22) / (0.50 - 0.22);
      const eased = t * t * (3 - 2 * t);
      return -20 - eased * (240 - 20);
    }
    return -240;
  });

  const houseScale = useTransform(smoothProgress, (p) => {
    const initialScale = isMobile ? 1.06 : 1.03;
    const stage1Scale = isMobile ? 1.04 : 1.01; // House stays large and dominant during first scroll!
    const finalScale = isMobile ? 0.92 : 0.88;  // Pullback achieved during later scroll

    if (p <= 0.04) return initialScale;
    if (p <= 0.22) {
      // First scroll: subtle depth only (visual size virtually unchanged)
      const t = (p - 0.04) / (0.22 - 0.04);
      const eased = t * t * (3 - 2 * t);
      return initialScale - eased * (initialScale - stage1Scale);
    }
    if (p <= 0.50) {
      // Later scroll: camera gradually moves away
      const t = (p - 0.22) / (0.50 - 0.22);
      const eased = t * t * (3 - 2 * t);
      return stage1Scale - eased * (stage1Scale - finalScale);
    }
    return finalScale;
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
      className="relative w-full h-[210vh] bg-forest-950"
    >
      {/* Sticky Viewport Stage: Locks screen while the cinematic sequence unfolds */}
      <section
        id="home"
        style={{ perspective: 1200 }}
        className="sticky top-0 h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-forest-950 text-white select-none [transform-style:preserve-3d]"
      >
        {/* =========================================================================
            LAYER 1 (Z-0): BACKGROUND NATURE LANDSCAPE (Deep Parallax)
           ========================================================================= */}
        <motion.div
          style={{ y: bgY, z: bgZ, scale: bgScale, opacity: bgOpacity }}
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

            {/* Bottom vignette to blend into ground, kept low strictly at floor level */}
            <div className="absolute inset-x-0 bottom-0 h-12 sm:h-16 md:h-20 bg-gradient-to-t from-forest-950/90 via-forest-950/30 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* =========================================================================
            LAYER 2A (Z-10): PHASE 1 - SOLAR LEGACY LOGO
            On mount: 1.05s load animation rising from behind house roofline!
            On 1st scroll: moves straight backward in 3D space with blur and fades out.
           ========================================================================= */}
        <motion.div
          style={{
            y: logoScrollY,
            z: logoScrollZ,
            scale: logoScrollScale,
            opacity: logoScrollOpacity,
            filter: logoScrollFilter,
            pointerEvents: logoPointerEvents,
            transformOrigin: "center center",
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
            LAYER 2C (Z-[12]): AMBIENT OVERLAY FOR CONTRAST
           ========================================================================= */}
        <motion.div
          style={{ opacity: sideVignetteOpacity }}
          className="absolute inset-0 z-[12] pointer-events-none select-none overflow-hidden"
        >
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(to bottom, rgba(2, 8, 5, 0.50) 0%, rgba(2, 8, 5, 0.35) 28%, rgba(2, 8, 5, 0.08) 50%, rgba(2, 8, 5, 0.03) 75%, rgba(2, 8, 5, 0.10) 88%, rgba(2, 8, 5, 0.60) 94%, #020805 100%)",
            }}
          />
        </motion.div>

        {/* =========================================================================
            LAYER 3 (Z-10): HOUSE CUTOUT (Foreground Architectural Plane)
            Layer order: Background (z-0) -> House (z-10) -> Dark Floor Shadow (z-15) -> Content (z-25) -> Cards (z-30)
           ========================================================================= */}
        <motion.div
          style={{
            y: houseY,
            z: houseZ,
            scale: houseScale,
            transformOrigin: "center 75%",
          }}
          className="absolute inset-x-0 bottom-0 sm:inset-[-4%] sm:w-[108%] sm:h-[108%] z-10 pointer-events-none select-none flex items-end justify-center"
        >
          {/* Horizontal Ground Contact Shadow */}
          <div
            className="absolute -bottom-1 sm:-bottom-2 md:-bottom-3 inset-x-0 h-10 sm:h-12 md:h-14 pointer-events-none -z-10"
            style={{
              background: "radial-gradient(ellipse 75% 50% at 50% 70%, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.45) 50%, transparent 85%)",
              filter: "blur(6px)",
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
              className="object-contain object-bottom sm:object-cover sm:object-[center_60%] drop-shadow-[0_16px_28px_rgba(0,0,0,0.45)]"
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
            LAYER 3B (Z-15): HORIZONTAL GROUND TERRAIN DARK SHADE (ATTACHED TO BASELINE)
            Layer order: Background (z-0) -> House (z-10) -> Dark floor shadow (z-15) -> Content (z-25) -> Cards (z-30)
            Blends the house foundation into the ground, grounding it during all scroll states so it never floats.
           ========================================================================= */}
        <motion.div
          style={{
            y: houseY,
            z: houseZ,
            scale: houseScale,
            transformOrigin: "center 75%",
          }}
          className="absolute inset-x-0 bottom-0 h-28 sm:h-36 md:h-44 z-15 pointer-events-none select-none"
        >
          {/* Deep horizontal grounding terrain gradient */}
          <div
            className="w-full h-full"
            style={{
              background: "linear-gradient(to bottom, rgba(2, 8, 5, 0) 0%, rgba(2, 8, 5, 0.40) 30%, rgba(2, 8, 5, 0.85) 70%, #020805 100%)",
            }}
          />

          {/* Foundation baseline contact shadow strip */}
          <div
            className="absolute inset-x-0 bottom-3 sm:bottom-5 md:bottom-7 h-12 sm:h-16 opacity-85"
            style={{
              background: "radial-gradient(ellipse 85% 55% at 50% 60%, rgba(0, 0, 0, 0.90) 0%, rgba(0, 0, 0, 0.55) 50%, rgba(0, 0, 0, 0.15) 80%, transparent 100%)",
              filter: "blur(6px)",
            }}
          />
        </motion.div>

        {/* =========================================================================
            LAYER 2B (Z-25): PHASE 4 - HEADLINE, SUBTITLE & CTA BUTTONS
            Layer order: Background (z-0) -> House (z-10) -> Dark floor shadow (z-15) -> Content (z-25) -> Cards (z-30)
            Emerges in the foreground ABOVE the house roof so buttons are ALWAYS 100% visible!
           ========================================================================= */}
        <motion.div
          style={{
            y: textY,
            scale: textScale,
            opacity: textOpacity,
            filter: textFilter,
            pointerEvents: textPointerEvents,
          }}
          className="absolute left-1/2 -translate-x-1/2 top-[64px] sm:top-[68px] md:top-[72px] w-full max-w-3xl sm:max-w-4xl px-4 flex flex-col items-center text-center z-25"
        >
          {/* Main Headline - Line breaks strictly matched to reference */}
          <h1 className="font-heading font-extrabold text-2xl xs:text-3xl sm:text-4xl md:text-[38px] lg:text-[42px] tracking-tight text-white leading-[1.12] mb-2 sm:mb-2.5 drop-shadow-[0_4px_24px_rgba(0,0,0,0.95)] max-w-2xl text-center">
            Architectural Solar <br />
            &amp; Renewable Energy Systems
          </h1>

          {/* Subtitle - Centered alignment, matched width & spacing */}
          <p className="text-xs xs:text-[13px] sm:text-[14.5px] md:text-base text-beige-100/90 font-light leading-relaxed max-w-sm sm:max-w-xl md:max-w-2xl mb-3.5 sm:mb-4.5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)] px-2 text-center">
            {content?.subtitle ||
              "Precision-engineered solar integrations designed to harmonize luxury architectural aesthetics with cutting-edge microinverter yield efficiency."}
          </p>

          {/* CTA Buttons - Fully visible below subheading, never covered by roof */}
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
