"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useTransform, useMotionValue, animate } from "framer-motion";
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
  // TWO-STAGE SCROLL INTERACTION CONTROLLER
  // Stage 1 (First Scroll): Logo exit, house camera settle, content reveal, compact cards appear.
  // Stage 2 (Second Scroll): Bottom cards spacing expands horizontally with breathing room.
  // Both stages support full bidirectional playback.
  // =========================================================================
  const heroProgress = useMotionValue(0);
  const cardProgress = useMotionValue(0);

  const heroAnimRef = React.useRef<{ stop: () => void } | null>(null);
  const cardAnimRef = React.useRef<{ stop: () => void } | null>(null);

  // Phase tracking:
  // 0: Initial loaded hero state
  // 1: First scroll complete (Content visible, house large, cards compact)
  // 2: Second scroll complete (Cards expanded horizontally with breathing room)
  const phaseRef = React.useRef<0 | 1 | 2>(0);

  const getCheckpoints = React.useCallback(() => {
    if (!containerRef.current) {
      const vh = window.innerHeight;
      return { cp1: vh * 0.45, cp2: vh * 0.95 };
    }
    const total = containerRef.current.offsetHeight - window.innerHeight;
    return {
      cp1: total * 0.45,
      cp2: total * 0.95,
    };
  }, []);

  // First Scroll Sequence Forward:
  const playHeroForward = React.useCallback(() => {
    if (phaseRef.current !== 0) return;
    phaseRef.current = 1;
    if (heroAnimRef.current) heroAnimRef.current.stop();

    // Exactly 5 seconds duration for the slow luxury cinematic camera movement
    heroAnimRef.current = animate(heroProgress, 1, {
      duration: 5.0,
      ease: [0.16, 1, 0.3, 1],
    });

    const { cp1 } = getCheckpoints();
    window.scrollTo({ top: cp1, behavior: "smooth" });
  }, [heroProgress, getCheckpoints]);

  // Second Scroll Sequence Forward (Cards only):
  const playCardsForward = React.useCallback(() => {
    if (phaseRef.current !== 1) return;
    phaseRef.current = 2;
    if (cardAnimRef.current) cardAnimRef.current.stop();

    cardAnimRef.current = animate(cardProgress, 1, {
      duration: 1.2,
      ease: [0.16, 1, 0.3, 1],
    });

    const { cp2 } = getCheckpoints();
    window.scrollTo({ top: cp2, behavior: "smooth" });
  }, [cardProgress, getCheckpoints]);

  // Second Scroll Sequence Reverse (Cards contract back to compact):
  const playCardsReverse = React.useCallback(() => {
    if (phaseRef.current !== 2) return;
    phaseRef.current = 1;
    if (cardAnimRef.current) cardAnimRef.current.stop();

    cardAnimRef.current = animate(cardProgress, 0, {
      duration: 1.0,
      ease: [0.16, 1, 0.3, 1],
    });

    const { cp1 } = getCheckpoints();
    window.scrollTo({ top: cp1, behavior: "smooth" });
  }, [cardProgress, getCheckpoints]);

  // First Scroll Sequence Reverse (Hero returns to initial loaded state):
  const playHeroReverse = React.useCallback(() => {
    if (phaseRef.current !== 1) return;
    phaseRef.current = 0;
    if (heroAnimRef.current) heroAnimRef.current.stop();

    heroAnimRef.current = animate(heroProgress, 0, {
      duration: 3.5,
      ease: [0.16, 1, 0.3, 1],
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [heroProgress]);

  React.useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const scrollY = window.scrollY;
      const { cp1, cp2 } = getCheckpoints();

      if (e.deltaY > 6) {
        // Forward scroll down:
        if (phaseRef.current === 0 && scrollY <= cp1 * 0.7) {
          e.preventDefault();
          playHeroForward();
        } else if (phaseRef.current === 1 && scrollY <= cp2 + 40) {
          e.preventDefault();
          playCardsForward();
        }
      } else if (e.deltaY < -6) {
        // Reverse scroll up:
        if (phaseRef.current === 2 && scrollY <= cp2 + 80) {
          e.preventDefault();
          playCardsReverse();
        } else if (phaseRef.current === 1 && scrollY <= cp1 + 50) {
          e.preventDefault();
          playHeroReverse();
        }
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
      const { cp1, cp2 } = getCheckpoints();

      if (deltaY > 20) {
        if (phaseRef.current === 0 && scrollY <= cp1 * 0.7) {
          playHeroForward();
        } else if (phaseRef.current === 1 && scrollY <= cp2 + 40) {
          playCardsForward();
        }
      } else if (deltaY < -20) {
        if (phaseRef.current === 2 && scrollY <= cp2 + 80) {
          playCardsReverse();
        } else if (phaseRef.current === 1 && scrollY <= cp1 + 50) {
          playHeroReverse();
        }
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      const scrollY = window.scrollY;
      const { cp1, cp2 } = getCheckpoints();
      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        if (phaseRef.current === 0 && scrollY <= cp1 * 0.7) {
          playHeroForward();
        } else if (phaseRef.current === 1 && scrollY <= cp2 + 40) {
          playCardsForward();
        }
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        if (phaseRef.current === 2 && scrollY <= cp2 + 80) {
          playCardsReverse();
        } else if (phaseRef.current === 1 && scrollY <= cp1 + 50) {
          playHeroReverse();
        }
      }
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const { cp1, cp2 } = getCheckpoints();

      if (scrollY >= cp2 * 0.85 && phaseRef.current < 2) {
        phaseRef.current = 2;
        heroProgress.set(1);
        cardProgress.set(1);
      } else if (scrollY >= cp1 * 0.7 && scrollY < cp2 * 0.85) {
        if (phaseRef.current === 0) {
          phaseRef.current = 1;
          heroProgress.set(1);
        } else if (phaseRef.current === 2) {
          phaseRef.current = 1;
          cardProgress.set(0);
        }
      } else if (scrollY <= 10 && phaseRef.current > 0) {
        phaseRef.current = 0;
        heroProgress.set(0);
        cardProgress.set(0);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("scroll", handleScroll);
      if (heroAnimRef.current) heroAnimRef.current.stop();
      if (cardAnimRef.current) cardAnimRef.current.stop();
    };
  }, [playHeroForward, playCardsForward, playCardsReverse, playHeroReverse, getCheckpoints, heroProgress, cardProgress]);

  // =========================================================================
  // 1. FIRST SCROLL SEQUENCE (HERO TIMELINE - EXACT 5-SECOND CINEMATIC DURATION):
  // 0.0s – 1.5s (p: 0.00 -> 0.30):
  // - Hero scene slightly lowers (~4cm / ~26px).
  // - Logo starts moving backward in depth.
  // - Logo opacity gradually decreases.
  // 1.5s – 3.0s (p: 0.30 -> 0.60):
  // - Camera pullback continues, house moves backward with depth effect (-20px).
  // - Background parallax starts.
  // - Logo disappears completely by 3.0s.
  // 3.0s – 4.5s (p: 0.60 -> 0.90):
  // - Heading + subheading reveal.
  // - Buttons come forward above the house (z-25).
  // - House remains large and dominant.
  // 4.5s – 5.0s (p: 0.90 -> 1.00):
  // - First scroll sequence settles.
  // - Cards remain in their initial compact position (no card gap expansion).
  // =========================================================================

  // Background Nature Parallax (starts at 1.5s / p = 0.30):
  const bgScale = useTransform(heroProgress, (p) => {
    const initialScale = isMobile ? 1.25 : 1.15;
    const finalScale = isMobile ? 1.24 : 1.135; // Kept close during first scroll
    if (p <= 0.30) return initialScale;
    const t = (p - 0.30) / (1.0 - 0.30);
    const eased = t * t * (3 - 2 * t);
    return initialScale - eased * (initialScale - finalScale);
  });

  const bgZ = useTransform(heroProgress, (p) => {
    if (p <= 0.30) return 0;
    const t = (p - 0.30) / (1.0 - 0.30);
    return -t * 15;
  });

  const bgY = useTransform(heroProgress, (p) => {
    const settleY = isMobile ? 12 : 16;
    const t = Math.min(1, p / 0.30); // Lowers during 0.0s - 1.5s
    return t * t * (3 - 2 * t) * settleY;
  });

  const bgOpacity = useTransform(heroProgress, [0, 1], [1, 0.95]);

  // Sun flare parallax, dynamic radiance, and cursor/touch drift
  const sunGlowX = useTransform(mouseX, [0, 1], [-25, 25]);
  const sunGlowY = useTransform(heroProgress, [0, 1], [0, 30]);
  const sunGlowScale = useTransform(heroProgress, [0, 1], [1, 1.15]);
  const sunGlowOpacity = useTransform(heroProgress, [0, 0.6, 1], [1, 0.45, 0.25]);

  // Logo Behavior:
  // 0.0s - 1.5s (p: 0.00 -> 0.30): Lowers with settle, starts moving backward in 3D depth, opacity gradually decreases
  // 1.5s - 3.0s (p: 0.30 -> 0.60): Continues moving away and disappears completely by 3.0s
  const logoProgress = useTransform(heroProgress, (p) => {
    const pStart = 0.02;
    const pEnd = 0.60; // Disappears completely by 3.0s
    if (p <= pStart) return 0;
    if (p >= pEnd) return 1;
    const t = (p - pStart) / (pEnd - pStart);
    return t * t * (3 - 2 * t);
  });

  const logoScrollY = useTransform(heroProgress, (p) => {
    const settleY = isMobile ? 22 : 26;
    const t = Math.min(1, p / 0.30); // Lowers over 0s - 1.5s
    return t * t * (3 - 2 * t) * settleY;
  });

  const logoScrollZ = useTransform(logoProgress, [0, 0.40, 1.0], [0, -100, -320]);
  const logoScrollScale = useTransform(logoProgress, [0, 0.40, 0.75, 1.0], [1.0, 0.88, 0.60, 0.35]);
  const logoScrollOpacity = useTransform(logoProgress, [0, 0.20, 0.50, 1.0], [1.0, 0.95, 0.60, 0.0]);
  const logoScrollBlur = useTransform(logoProgress, [0, 0.35, 0.70, 1.0], [0, 0.4, 2.2, 5.0]);
  const logoScrollFilter = useTransform(logoScrollBlur, (b) => (b <= 0.2 ? "none" : `blur(${b.toFixed(1)}px)`));
  const logoPointerEvents = useTransform(logoProgress, (pr) => (pr < 0.50 ? "auto" : "none"));

  const scrollIndicatorOpacity = useTransform(heroProgress, [0, 0.12], [1, 0]);

  // House Camera Movement:
  // 0.0s - 1.5s (p: 0.00 -> 0.30): Lowers slightly (~26px / ~4cm)
  // 1.5s - 3.0s (p: 0.30 -> 0.60): Moves backward with depth effect (-20px), subtle scale (1.03 -> 1.01)
  // 3.0s - 5.0s (p: 0.60 -> 1.00): House remains large and dominant as content settles
  const houseY = useTransform(heroProgress, (p) => {
    const settleY = isMobile ? 22 : 26;
    const t = Math.min(1, p / 0.30);
    return t * t * (3 - 2 * t) * settleY;
  });

  const houseZ = useTransform(heroProgress, (p) => {
    if (p <= 0.30) return 0;
    const t = (p - 0.30) / (1.0 - 0.30);
    return -t * 20; // Subtle depth only (-20px)
  });

  const houseScale = useTransform(heroProgress, (p) => {
    const initialScale = isMobile ? 1.06 : 1.03;
    const stage1Scale = isMobile ? 1.04 : 1.01; // Maintained large and dominant!
    if (p <= 0.30) return initialScale;
    const t = (p - 0.30) / (1.0 - 0.30);
    const eased = t * t * (3 - 2 * t);
    return initialScale - eased * (initialScale - stage1Scale);
  });

  // Content Reveal (Heading, Subheading & CTA Buttons):
  // 3.0s – 4.5s (p: 0.60 -> 0.90): Heading + subheading reveal, buttons come forward above house (z-25)
  const textProgress = useTransform(heroProgress, (p) => {
    if (p <= 0.60) return 0; // Starts right at 3.0s as logo disappears
    if (p >= 0.90) return 1; // Fully settles by 4.5s
    const t = (p - 0.60) / (0.90 - 0.60);
    return 1 - Math.pow(1 - t, 2.5);
  });

  const textOpacity = useTransform(textProgress, [0, 1], [0, 1]);
  const textY = useTransform(textProgress, [0, 1], [45, 0]);
  const textBlur = useTransform(textProgress, [0, 1], [6, 0]);
  const textFilter = useTransform(textBlur, (b) => (b <= 0.2 ? "none" : `blur(${b}px)`));
  const textScale = useTransform(textProgress, [0, 1], [0.94, 1.0]);
  const textPointerEvents = useTransform(heroProgress, (p) => (p >= 0.75 ? "auto" : "none"));

  // Cards Appearance in First Scroll:
  // Appears during 3.5s – 4.8s (p: 0.70 -> 0.96) at the bottom in compact position with UNCHANGED gaps
  const cardsOpacity = useTransform(heroProgress, [0.70, 0.96], [0, 1]);
  const cardsY = useTransform(heroProgress, [0.70, 0.96], [16, 0]);
  const cardsScale = useTransform(heroProgress, [0.70, 0.96], [0.97, 1.0]);
  const cardsPointerEvents = useTransform(heroProgress, (p) => (p >= 0.80 ? "auto" : "none"));

  // Ambient overlay for contrast:
  const sideVignetteOpacity = useTransform(heroProgress, (p) => {
    if (p < 0.30) return 0;
    if (p >= 0.70) return 1;
    return (p - 0.30) / (0.70 - 0.30);
  });

  // =========================================================================
  // 2. SECOND SCROLL SEQUENCE (CARDS TIMELINE ONLY):
  // Triggered only after user scrolls again when first sequence is complete.
  // Expands horizontal spacing between the 3 bottom cards, creating breathing room.
  // House, background, and text content remain completely stable.
  // =========================================================================
  const cardSpread = useTransform(cardProgress, (p) => {
    const eased = p * p * (3 - 2 * p);
    return eased * spreadDistance;
  });

  const leftCardX = useTransform(cardSpread, (v) => -v);
  const rightCardX = useTransform(cardSpread, (v) => v);

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
      className="relative w-full h-[180vh] bg-forest-950"
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
