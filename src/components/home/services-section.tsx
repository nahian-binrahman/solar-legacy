"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/core/container";
import { Section } from "@/components/core/section";
import { Heading } from "@/components/core/heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Home,
  Building2,
  BatteryCharging,
  Compass,
  ArrowRight,
  TrendingDown,
  Zap,
  Sliders,
  LifeBuoy,
} from "lucide-react";

export function ServicesSection() {
  const services = [
    {
      title: "Residential Solar",
      description:
        "Bespoke monocrystalline roof installations designed to integrate seamlessly with luxury architectural residences.",
      icon: Home,
      highlight: "Tier-1 Black Silicon",
    },
    {
      title: "Commercial Solar",
      description:
        "Megawatt-scale arrays and solar canopies engineered for high ROI, ESG compliance, and zero carbon footprint.",
      icon: Building2,
      highlight: "Commercial Net-Zero",
    },
    {
      title: "Solar + Battery Storage",
      description:
        "Next-generation solid-state battery modules delivering uninterrupted 24/7 power and true off-grid independence.",
      icon: BatteryCharging,
      highlight: "Solid-State Tech",
    },
    {
      title: "Energy Consultation",
      description:
        "Comprehensive site irradiation analysis, utility tariff modeling, and customized system architecture design.",
      icon: Compass,
      highlight: "Full System Audit",
    },
  ];

  const benefits = [
    {
      title: "Lower Energy Bills",
      description: "Slash utility costs by up to 80% with high-yield bifacial harvesting and smart peak shaving.",
      icon: TrendingDown,
    },
    {
      title: "Energy Independence",
      description: "Insulate your home and business against grid outages and volatile rate inflation forever.",
      icon: Zap,
    },
    {
      title: "Custom System Design",
      description: "Tailored CAD micro-grid engineering harmonized with your rooflines and electrical infrastructure.",
      icon: Sliders,
    },
    {
      title: "Long-Term Support",
      description: "25-year full performance warranty backed by active 24/7 AI telemetry and dedicated field care.",
      icon: LifeBuoy,
    },
  ];

  return (
    <Section id="solutions" spacing="screenFit" background="forestDeep" className="text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-solar-400/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-forest-600/15 blur-[130px] rounded-full pointer-events-none" />

      <Container size="xl" padding="normal">
        {/* 1. Header Area */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="glass" size="sm" dot dotColor="solar" pulse className="mb-4 text-solar-300 border-solar-400/40">
            Engineered Energy Services
          </Badge>
          <Heading level={2} align="center" theme="white" solarAccent="Renewable Solutions">
            Comprehensive
          </Heading>
          <p className="text-sm sm:text-base text-beige-200 mt-4 leading-relaxed">
            From iconic private estates to commercial enterprises, our engineering delivers
            maximum solar output with uncompromising architectural elegance.
          </p>
        </div>

        {/* 2. Four Premium Glass Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className="group relative flex flex-col justify-between rounded-2xl p-7 bg-forest-900/60 backdrop-blur-xl border border-white/10 hover:border-solar-400/50 shadow-xl hover:shadow-2xl hover:shadow-solar-400/10 transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-xl bg-forest-950/80 border border-solar-400/30 flex items-center justify-center text-solar-400 group-hover:bg-solar-400 group-hover:text-forest-950 transition-colors duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-beige-400 font-semibold">
                      0{index + 1}
                    </span>
                  </div>

                  <Badge variant="glass" size="sm" className="mb-3 text-[10px] text-solar-300 border-solar-400/30">
                    {service.highlight}
                  </Badge>

                  <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-solar-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-beige-300 leading-relaxed font-sans mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-between px-0 text-solar-300 hover:text-white group/btn hover:bg-transparent"
                    onClick={() => {
                      const el = document.getElementById("quote");
                      el?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span className="font-semibold text-xs tracking-wide">Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 text-solar-400" />
                  </Button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3. Benefits Section: Why Choose Solar Legacy */}
        <div id="about" className="pt-8 border-t border-white/10">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <Badge variant="glass" size="sm" className="mb-3 border-solar-400/30 text-beige-100">
              The Solar Legacy Standard
            </Badge>
            <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
              Why Choose <span className="solar-gradient-text">Solar Legacy?</span>
            </h3>
            <p className="text-xs sm:text-sm text-beige-300 mt-3 leading-relaxed">
              We combine cutting-edge clean energy physics with architectural craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, i) => {
              const BIcon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-xl bg-forest-950/70 border border-white/10 hover:border-solar-400/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-solar-400/15 text-solar-400 flex items-center justify-center mb-4">
                    <BIcon className="w-5 h-5" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-white mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-xs text-beige-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
