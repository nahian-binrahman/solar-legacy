"use client";

import * as React from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/core/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  MapPin,
  TrendingDown,
  Sparkles,
  Sun,
  BatteryCharging,
} from "lucide-react";

import { HeroContent, StatItem } from "@/types/content";

interface HeroSectionProps {
  content?: HeroContent;
  statsData?: StatItem[];
}

export function HeroSection({ content, statsData }: HeroSectionProps) {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 800], [0, 180]);

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

  const [bgSrc, setBgSrc] = React.useState(content?.bgImageUrl || "/hero-solar.jpg");

  React.useEffect(() => {
    if (content?.bgImageUrl) setBgSrc(content.bgImageUrl);
  }, [content?.bgImageUrl]);

  return (
    <section
      id="home"
      className="relative w-full min-h-[100dvh] flex items-center justify-center overflow-hidden bg-forest-950 text-white"
    >
      {/* 1. Large Solar Estate Background Image with Parallax Scroll (z-0) */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-[-10%] z-0 select-none overflow-hidden"
      >
        <Image
          src={bgSrc}
          alt="Luxury modern estate with solar panels"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center brightness-95 contrast-105 scale-105"
          onError={() => setBgSrc("/hero-solar.jpg")}
        />
      </motion.div>

      {/* 2. Dark Luxury Gradient Overlays (z-1) */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-forest-950/90 via-forest-950/65 to-forest-950/35" />
      <div className="absolute inset-0 z-1 bg-gradient-to-t from-forest-950 via-forest-950/15 to-forest-950/60" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-solar-400/15 blur-[140px] rounded-full pointer-events-none z-1" />

      {/* 3. Hero Content (z-10) */}
      <Container size="xl" padding="normal" className="py-16 sm:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-5"
            >
              <Badge
                variant="glass"
                size="default"
                dot
                dotColor="solar"
                pulse
                className="border-solar-400/40 text-beige-100 px-4 py-1.5 shadow-lg bg-forest-950/80 backdrop-blur-md"
              >
                {content?.badge || "Next-Gen Architectural Solar & Intelligent Storage"}
              </Badge>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.08] mb-6"
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

            {/* Supporting Text */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-beige-200 font-sans max-w-2xl leading-relaxed mb-9 font-light"
            >
              {content?.subtitle ||
                "We design and install customized high-efficiency solar arrays and intelligent battery storage systems engineered to elevate architectural aesthetics, eliminate grid vulnerability, and secure long-term energy independence."}
            </motion.p>

            {/* Primary & Secondary CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              <Button
                variant="solar"
                size="lg"
                className="font-bold text-forest-950 shadow-xl shadow-solar-400/25 group cursor-pointer"
                onClick={() => {
                  const el = document.getElementById("quote");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <span>Get Solar Quote</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="forestOutline"
                size="lg"
                className="border-white/20 text-beige-100 hover:bg-white/10 hover:text-white cursor-pointer backdrop-blur-sm"
                onClick={() => {
                  const el = document.getElementById("solutions");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <Sparkles className="w-4 h-4 text-solar-400 mr-2" />
                <span>Explore Solutions</span>
              </Button>
            </motion.div>

            {/* Trust Micro-Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="flex flex-wrap items-center gap-5 mt-10 pt-8 border-t border-white/10 text-xs sm:text-sm text-beige-300"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-solar-400" />
                <span>25-Year Production Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <BatteryCharging className="w-4 h-4 text-solar-400" />
                <span>Solid-State Battery Ready</span>
              </div>
              <div className="flex items-center gap-2">
                <Sun className="w-4 h-4 text-solar-400" />
                <span>Tier-1 Monocrystalline Cells</span>
              </div>
            </motion.div>
          </div>

          {/* Floating Statistics Cards with Framer Motion */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5 w-full">
            {stats.map((stat) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: stat.delay, ease: "easeOut" }}
                  whileHover={{ scale: 1.02, x: -4 }}
                  className="group relative overflow-hidden rounded-2xl p-5 sm:p-6 bg-forest-950/80 backdrop-blur-xl border border-white/15 hover:border-solar-400/60 transition-all duration-300 shadow-2xl hover:shadow-solar-400/10"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-forest-900/90 border border-solar-400/30 text-solar-400 group-hover:bg-solar-400 group-hover:text-forest-950 transition-colors duration-300 shadow-sm">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight group-hover:text-solar-300 transition-colors">
                          {stat.value}
                        </span>
                        <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-beige-300 font-sans">
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-beige-400 mt-2.5 pl-16">
                    {stat.detail}
                  </p>
                  {/* Subtle hover accent bar */}
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-solar-400/0 via-solar-400/50 to-solar-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
