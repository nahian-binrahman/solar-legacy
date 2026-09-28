"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";
import { Container } from "@/components/core/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Zap,
  MapPin,
  TrendingDown,
  Sparkles,
  ChevronDown,
  Volume2,
  VolumeX,
} from "lucide-react";

import { HeroContent, StatItem } from "@/types/content";
import { sounds } from "@/lib/sound-effects";

interface HeroSectionProps {
  content?: HeroContent;
  statsData?: StatItem[];
}

export function HeroSection({ content, statsData }: HeroSectionProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [soundEnabled, setSoundEnabled] = React.useState<boolean>(false);

  React.useEffect(() => {
    setSoundEnabled(sounds.isEnabled());
    const handleSoundChange = (e: CustomEvent<{ enabled: boolean }>) => {
      setSoundEnabled(e.detail.enabled);
    };
    window.addEventListener("solar-sound-changed", handleSoundChange as EventListener);
    return () => {
      window.removeEventListener("solar-sound-changed", handleSoundChange as EventListener);
    };
  }, []);

  const handleSoundToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newState = sounds.toggle();
    setSoundEnabled(newState);
  };

  // Dynamic interactive cursor tracking for ambient solar glow
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const handleMouseMove = React.useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (rect.width && rect.height) {
      mouseX.set((e.clientX - rect.left) / rect.width);
      mouseY.set((e.clientY - rect.top) / rect.height);
    }
  }, [mouseX, mouseY]);

  // Track scroll across the pinned 180vh stage
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    mass: 0.8,
    restDelta: 0.001,
  });

  // 1. Estate Scene: Smooth zoom-out, parallax drift, and fade on first scroll
  const sceneScale = useTransform(smoothProgress, [0, 0.75], [1.02, 0.89]);
  const sceneY = useTransform(smoothProgress, [0, 0.75], [0, 75]);
  const sceneOpacity = useTransform(smoothProgress, [0, 0.75], [1, 0.18]);

  // 2. Text & Buttons: Float upward across and over the house on scroll with gentle shrink
  const contentY = useTransform(smoothProgress, [0, 0.65], [0, -290]);
  const contentScale = useTransform(smoothProgress, [0, 0.65], [1, 0.82]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.7], [1, 0.3]);

  // 3. Scroll Indicator: Fades immediately on scroll
  const scrollIndicatorOpacity = useTransform(smoothProgress, [0, 0.12], [1, 0]);

  // 4. Cards: Remain down at bottom
  const cardsY = useTransform(smoothProgress, [0, 0.75], [0, 25]);
  const cardsScale = useTransform(smoothProgress, [0, 0.75], [1, 0.98]);
  const cardsOpacity = useTransform(smoothProgress, [0, 0.75], [1, 0.65]);

  const defaultStats = [
    {
      value: "10,000+",
      label: "Installations",
      icon: Zap,
      detail: "Clean micro-grids deployed",
      delay: 0.25,
    },
    {
      value: "25+",
      label: "States Served",
      icon: MapPin,
      detail: "Nationwide engineering network",
      delay: 0.35,
    },
    {
      value: "30%",
      label: "Average Savings",
      icon: TrendingDown,
      detail: "Lower annual energy overhead",
      delay: 0.45,
    },
  ];

  const stats = statsData && statsData.length >= 3
    ? statsData.slice(0, 3).map((s, idx) => ({
        value: s.value,
        label: s.label,
        icon: [Zap, MapPin, TrendingDown][idx] || Zap,
        detail: s.description || "Architectural solar integration",
        delay: 0.25 + idx * 0.1,
      }))
    : defaultStats;

  const [bgSrc, setBgSrc] = React.useState(content?.bgImageUrl || "/hero-solar-estate.jpg");
  const [bgMobileSrc, setBgMobileSrc] = React.useState(content?.bgImageUrlMobile || "/hero-solar-estate-mobile.jpg");

  React.useEffect(() => {
    if (content?.bgImageUrl) setBgSrc(content.bgImageUrl);
    if (content?.bgImageUrlMobile) setBgMobileSrc(content.bgImageUrlMobile);
  }, [content?.bgImageUrl, content?.bgImageUrlMobile]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[180vh] bg-forest-950"
    >
      {/* Sticky Hero Viewport: Locks the screen while animations play at first scroll */}
      <section
        id="home"
        className="sticky top-0 h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-forest-950 text-white select-none"
      >
        {/* 1. Integrated Solar House on Landscape */}
        <motion.div
          style={{ y: sceneY, scale: sceneScale, opacity: sceneOpacity }}
          className="absolute inset-[-5%] -top-[14%] sm:-top-[18%] h-[130%] z-0 select-none overflow-hidden pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full"
          >
            {/* Dedicated 9:16 Vertical Mobile Photo (< 768px) */}
            <div className="block md:hidden relative w-full h-full">
              <Image
                src={bgMobileSrc}
                alt="Next-Gen Architectural Photovoltaics Estate Mobile"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[center_28%] brightness-95 contrast-[1.02]"
                onError={() => setBgMobileSrc("/hero-solar-estate-mobile.jpg")}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-forest-950/75 via-transparent to-forest-950/95" />
            </div>

            {/* Desktop Landscape Photo (>= 768px) */}
            <div className="hidden md:block relative w-full h-full">
              <Image
                src={bgSrc}
                alt="Next-Gen Architectural Photovoltaics Estate"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[center_top] brightness-95 contrast-[1.02]"
                onError={() => setBgSrc("/hero-solar-estate.jpg")}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-forest-950/75 via-transparent to-forest-950/90" />
            </div>

            {/* Subtle solar flare shimmer */}
            <div className="absolute top-[22%] left-1/2 -translate-x-1/2 w-[700px] h-[320px] bg-gradient-radial from-solar-400/12 via-solar-300/5 to-transparent blur-[120px] pointer-events-none" />
          </motion.div>
        </motion.div>

        {/* 2. Interactive Audio Toggle Floating Control (Icon Only) */}
        <div className="absolute top-20 sm:top-24 right-4 sm:right-8 z-30">
          <button
            onClick={handleSoundToggle}
            onMouseEnter={() => sounds.playHover()}
            title={soundEnabled ? "Mute audio" : "Enable audio"}
            aria-label={soundEnabled ? "Mute audio" : "Enable audio"}
            className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-forest-950/80 hover:bg-forest-900 border border-white/15 hover:border-solar-400/50 backdrop-blur-md transition-all duration-300 shadow-lg group cursor-pointer"
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 text-solar-400" />
            ) : (
              <VolumeX className="w-4 h-4 text-beige-400 group-hover:text-white transition-colors" />
            )}
          </button>
        </div>

        {/* 3. Foreground Content Container */}
        <Container size="xl" padding="normal" className="pt-16 sm:pt-20 pb-3 sm:pb-4 relative z-20 flex flex-col justify-between h-full">
          {/* Upper Stage: Open viewing window for the house */}
          <div className="h-[34vh] sm:h-[42vh] w-full pointer-events-none" />

          {/* Text and buttons positioned strictly BELOW THE HOUSE */}
          <motion.div
            style={{ y: contentY, scale: contentScale, opacity: contentOpacity }}
            className="flex flex-col items-center text-center max-w-2xl mx-auto px-4 z-20 mt-auto mb-1.5 sm:mb-3"
          >
            {/* Badge: Next-Gen Architectural Photovoltaics with Solar Shimmer */}
            <motion.div
              initial={{ opacity: 0, scale: 0.82, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 240,
                damping: 20,
                delay: 0.45,
              }}
              className="mb-1"
            >
              <Badge
                variant="glass"
                size="default"
                dot
                dotColor="solar"
                pulse
                onClick={() => {
                  sounds.playEnergySurge();
                }}
                onMouseEnter={() => sounds.playHover()}
                className="border-solar-400/50 text-beige-100 px-3 sm:px-3.5 py-0.5 sm:py-1 shadow-[0_4px_20px_rgba(245,158,11,0.15)] bg-forest-950/90 backdrop-blur-md text-[10px] sm:text-[11px] tracking-wide font-medium relative overflow-hidden group cursor-pointer"
              >
                <span className="relative z-10">{content?.badge || "Next-Gen Architectural Photovoltaics"}</span>
                {/* Luminous sheen across badge */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-solar-400/20 to-transparent" />
              </Badge>
            </motion.div>

            {/* Headline: Clean, fitted typography below the house */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.55,
              }}
              className="font-heading font-extrabold text-lg xs:text-xl sm:text-2xl md:text-3xl tracking-tight text-white leading-tight mb-2 sm:mb-2.5 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
            >
              {content?.title ? (
                content.title
              ) : (
                <>
                  Power Today.{" "}
                  <span className="solar-gradient-text block sm:inline">
                    Build Your Legacy.
                  </span>
                </>
              )}
            </motion.h1>

            {/* CTA Buttons: Set directly under the texts with micro-interactions & audio */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 240,
                damping: 22,
                delay: 0.65,
              }}
              className="flex flex-row items-center justify-center gap-2 sm:gap-2.5 w-full max-w-sm sm:max-w-none mx-auto mt-0.5 sm:mt-1"
            >
              <Button
                variant="solar"
                size="default"
                className="font-bold text-forest-950 shadow-[0_4px_25px_rgba(245,158,11,0.3)] hover:shadow-[0_6px_30px_rgba(245,158,11,0.45)] group cursor-pointer h-8 sm:h-9 px-3.5 sm:px-4.5 text-xs sm:text-sm justify-center hover:scale-[1.03] transition-all active:scale-95 flex-1 sm:flex-initial"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => {
                  sounds.playPrimaryClick();
                  const el = document.getElementById("quote") || document.getElementById("contact");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>{content?.primaryCtaText || "Get Solar Quote"}</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="forestOutline"
                size="default"
                className="border-white/25 text-beige-100 hover:bg-white/10 hover:text-white cursor-pointer backdrop-blur-md h-8 sm:h-9 px-3.5 sm:px-4.5 text-xs sm:text-sm justify-center hover:scale-[1.03] transition-all active:scale-95 flex-1 sm:flex-initial"
                onMouseEnter={() => sounds.playHover()}
                onClick={() => {
                  sounds.playSecondaryClick();
                  const el = document.getElementById("solutions");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Sparkles className="w-3.5 h-3.5 text-solar-400 mr-1 sm:mr-1.5" />
                <span>{content?.secondaryCtaText || "Explore Solutions"}</span>
              </Button>
            </motion.div>

            {/* Minimalist Micro Scroll Cue: Fades upon scrolling */}
            <motion.div
              style={{ opacity: scrollIndicatorOpacity }}
              className="hidden sm:flex items-center gap-1.5 mt-2.5 text-[10px] tracking-widest uppercase text-beige-300/80 font-mono pointer-events-none"
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

          {/* 4. Bottom Cards: Mobile-optimized 3-column micro-grid with haptic sound */}
          <motion.div
            style={{ y: cardsY, scale: cardsScale, opacity: cardsOpacity }}
            className="grid grid-cols-3 gap-1.5 sm:gap-3 w-full mt-1"
          >
            {stats.map((stat, idx) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.7 + idx * 0.1,
                  }}
                  onMouseEnter={() => sounds.playCardHover(idx)}
                  onClick={() => sounds.playCardClick(idx)}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group relative overflow-hidden rounded-lg sm:rounded-xl p-2 sm:p-3 bg-forest-950/85 backdrop-blur-xl border border-white/15 hover:border-solar-400/60 transition-all duration-300 shadow-xl hover:shadow-[0_8px_30px_rgba(245,158,11,0.12)] cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 sm:gap-2.5">
                      <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-md sm:rounded-lg bg-forest-900/90 border border-solar-400/30 text-solar-400 group-hover:bg-solar-400 group-hover:text-forest-950 transition-colors duration-300 shadow-sm shrink-0">
                        <IconComponent className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-heading font-extrabold text-xs sm:text-base md:text-lg text-white tracking-tight group-hover:text-solar-300 transition-colors leading-tight">
                          {stat.value}
                        </span>
                        <span className="text-[8px] sm:text-[9px] md:text-[10px] font-semibold uppercase tracking-wider text-beige-300 font-sans truncate">
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="hidden md:block text-[10px] text-beige-400 mt-1 pl-9.5 font-light leading-snug line-clamp-1">
                    {stat.detail}
                  </p>
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-solar-400/0 via-solar-400/50 to-solar-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
