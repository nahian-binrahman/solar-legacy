"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Container } from "@/components/core/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Zap,
  MapPin,
  TrendingDown,
  Sparkles,
} from "lucide-react";

import { HeroContent, StatItem } from "@/types/content";

interface HeroSectionProps {
  content?: HeroContent;
  statsData?: StatItem[];
}

export function HeroSection({ content, statsData }: HeroSectionProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Track scroll across the pinned 180vh stage
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 85,
    damping: 24,
    restDelta: 0.001,
  });

  // 1. Estate Scene: Zoom-out, Parallax, and Fade on first scroll
  const sceneScale = useTransform(smoothProgress, [0, 0.75], [1.02, 0.88]);
  const sceneY = useTransform(smoothProgress, [0, 0.75], [0, 70]);
  const sceneOpacity = useTransform(smoothProgress, [0, 0.75], [1, 0.2]);

  // 2. Text & Buttons: Scale down a little and float upward together over the house on scroll
  const contentY = useTransform(smoothProgress, [0, 0.65], [0, -280]);
  const contentScale = useTransform(smoothProgress, [0, 0.65], [1, 0.82]);
  const contentOpacity = useTransform(smoothProgress, [0, 0.7], [1, 0.35]);

  // 3. Cards: Remain down at bottom
  const cardsY = useTransform(smoothProgress, [0, 0.75], [0, 30]);
  const cardsScale = useTransform(smoothProgress, [0, 0.75], [1, 0.98]);
  const cardsOpacity = useTransform(smoothProgress, [0, 0.75], [1, 0.6]);

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

  React.useEffect(() => {
    if (content?.bgImageUrl) setBgSrc(content.bgImageUrl);
  }, [content?.bgImageUrl]);

  return (
    <div ref={containerRef} className="relative w-full h-[180vh] bg-forest-950">
      {/* Sticky Hero Viewport: Locks the screen while animations play at first scroll */}
      <section
        id="home"
        className="sticky top-0 h-[100dvh] w-full flex flex-col justify-between overflow-hidden bg-forest-950 text-white"
      >
        {/* 1. Integrated Solar House on Landscape - Shifted upward to keep house well above text */}
        <motion.div
          style={{ y: sceneY, scale: sceneScale, opacity: sceneOpacity }}
          className="absolute inset-[-5%] -top-[14%] sm:-top-[18%] h-[130%] z-0 select-none overflow-hidden pointer-events-none"
        >
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full h-full"
          >
            <Image
              src={bgSrc}
              alt="Next-Gen Architectural Photovoltaics Estate"
              fill
              priority
              sizes="100vw"
              className="object-cover object-[center_top] brightness-95 contrast-[1.02]"
              onError={() => setBgSrc("/hero-solar-estate.jpg")}
            />
            {/* Atmospheric Vignette for contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-forest-950/70 via-transparent to-forest-950/90" />
          </motion.div>
        </motion.div>

        {/* 2. Foreground Content Container */}
        <Container size="xl" padding="normal" className="pt-16 sm:pt-20 pb-3 sm:pb-4 relative z-20 flex flex-col justify-between h-full">
          {/* Upper Stage: Open viewing window for the house */}
          <div className="h-[38vh] sm:h-[42vh] w-full pointer-events-none" />

          {/* Text and buttons positioned strictly BELOW THE HOUSE */}
          <motion.div
            style={{ y: contentY, scale: contentScale, opacity: contentOpacity }}
            className="flex flex-col items-center text-center max-w-2xl mx-auto px-4 z-20 mt-auto mb-2 sm:mb-3"
          >
            {/* Badge: Next-Gen Architectural Photovoltaics */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: -10 }}
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
                className="border-solar-400/40 text-beige-100 px-3 py-1 shadow-lg bg-forest-950/90 backdrop-blur-md text-[11px] tracking-wide font-medium"
              >
                {content?.badge || "Next-Gen Architectural Photovoltaics"}
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
              className="font-heading font-extrabold text-lg sm:text-2xl md:text-3xl tracking-tight text-white leading-tight mb-2.5 drop-shadow-lg"
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

            {/* CTA Buttons: Set directly under the texts */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 240,
                damping: 22,
                delay: 0.65,
              }}
              className="flex flex-wrap items-center justify-center gap-2.5 w-full sm:w-auto mt-1"
            >
              <Button
                variant="solar"
                size="default"
                className="font-bold text-forest-950 shadow-lg shadow-solar-400/25 group cursor-pointer h-8 sm:h-9 px-4 text-xs sm:text-sm justify-center hover:scale-[1.02] transition-transform active:scale-95"
                onClick={() => {
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
                className="border-white/25 text-beige-100 hover:bg-white/10 hover:text-white cursor-pointer backdrop-blur-md h-8 sm:h-9 px-4 text-xs sm:text-sm justify-center hover:scale-[1.02] transition-transform active:scale-95"
                onClick={() => {
                  const el = document.getElementById("solutions");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Sparkles className="w-3.5 h-3.5 text-solar-400 mr-1.5" />
                <span>{content?.secondaryCtaText || "Explore Solutions"}</span>
              </Button>
            </motion.div>
          </motion.div>

          {/* 3. Bottom Cards: Remain down at bottom */}
          <motion.div
            style={{ y: cardsY, scale: cardsScale, opacity: cardsOpacity }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 w-full mt-1"
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
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="group relative overflow-hidden rounded-xl p-2.5 sm:p-3 bg-forest-950/85 backdrop-blur-xl border border-white/15 hover:border-solar-400/60 transition-all duration-300 shadow-xl hover:shadow-solar-400/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-forest-900/90 border border-solar-400/30 text-solar-400 group-hover:bg-solar-400 group-hover:text-forest-950 transition-colors duration-300 shadow-sm shrink-0">
                        <IconComponent className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-heading font-extrabold text-base sm:text-lg text-white tracking-tight group-hover:text-solar-300 transition-colors leading-tight">
                          {stat.value}
                        </span>
                        <span className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-wider text-beige-300 font-sans">
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-[10px] text-beige-400 mt-1 pl-9.5 font-light leading-snug line-clamp-1">
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
