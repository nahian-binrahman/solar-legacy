"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/core/container";
import { Section } from "@/components/core/section";
import { Heading } from "@/components/core/heading";
import { Badge } from "@/components/ui/badge";
import {
  MessageSquareCheck,
  Compass,
  Zap,
  Activity,
  CheckCircle2,
} from "lucide-react";

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      subtitle: "Site & Energy Audit",
      description:
        "We evaluate your utility tariffs, architectural blueprints, and solar irradiance to model peak generation potential.",
      icon: MessageSquareCheck,
      details: ["Zero-obligation assessment", "Satellite shade mapping"],
    },
    {
      number: "02",
      title: "Custom Design",
      subtitle: "Architectural CAD",
      description:
        "Our engineers craft a bespoke monocrystalline layout aligned with roof planes and electrical switchgear.",
      icon: Compass,
      details: ["3D structural render", "Battery sizing simulation"],
    },
    {
      number: "03",
      title: "Installation",
      subtitle: "Precision Engineering",
      description:
        "Master electricians deploy Tier-1 black silicon arrays, inverters, and battery storage with zero roof penetration damage.",
      icon: Zap,
      details: ["Rapid permit clearance", "Clean conduit concealment"],
    },
    {
      number: "04",
      title: "Monitoring & Support",
      subtitle: "24/7 AI Telemetry",
      description:
        "Real-time yield tracking, automated utility peak arbitration, and guaranteed 25-year proactive maintenance.",
      icon: Activity,
      details: ["Live smartphone app", "Instant alert dispatch"],
    },
  ];

  return (
    <Section id="projects" spacing="screenFit" background="forestDeep" className="text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-solar-400/5 blur-[160px] rounded-full pointer-events-none" />

      <Container size="xl" padding="normal">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <Badge variant="glass" size="sm" dot dotColor="solar" pulse className="mb-3 text-solar-300 border-solar-400/30">
            Streamlined Execution
          </Badge>
          <Heading level={2} align="center" theme="white" solarAccent="How Solar Works">
            The Solar Legacy Pathway:
          </Heading>
          <p className="text-sm text-beige-300 mt-3 leading-relaxed">
            From initial concept to multi-decade clean energy generation in four seamless milestones.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Horizontal Connecting Line */}
          <div className="hidden lg:block absolute top-[52px] left-[8%] right-[8%] h-[2px] bg-white/10 z-0 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="h-full w-full bg-gradient-to-r from-solar-400/20 via-solar-400 to-solar-400/20 origin-left"
            />
          </div>

          {/* Mobile Vertical Connecting Line */}
          <div className="lg:hidden absolute top-6 bottom-6 left-[27px] w-[2px] bg-white/10 z-0" />

          {/* 4 Steps Grid / Timeline */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="flex flex-col items-start lg:items-center text-left lg:text-center group"
                >
                  {/* Step Icon Badge & Number */}
                  <div className="relative flex items-center justify-center w-14 h-14 rounded-2xl bg-forest-950 border-2 border-white/20 group-hover:border-solar-400 transition-colors duration-300 shadow-xl mb-6 ml-0 lg:mx-auto">
                    <Icon className="w-6 h-6 text-solar-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="absolute -top-2 -right-2 text-[10px] font-mono font-bold px-1.5 py-0.5 rounded-full bg-solar-400 text-forest-950 shadow-sm">
                      {step.number}
                    </span>
                  </div>

                  {/* Card Body */}
                  <div className="w-full rounded-2xl bg-forest-900/40 backdrop-blur-md border border-white/10 group-hover:border-solar-400/40 p-6 transition-all duration-300 group-hover:-translate-y-1 shadow-lg group-hover:shadow-solar-400/10">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-solar-400 font-sans block mb-1">
                      {step.subtitle}
                    </span>
                    <h3 className="font-heading font-bold text-xl text-white mb-2.5">
                      {step.title}
                    </h3>
                    <p className="text-xs text-beige-300 leading-relaxed font-sans mb-4">
                      {step.description}
                    </p>

                    <div className="pt-3 border-t border-white/10 flex flex-col gap-1.5 text-left">
                      {step.details.map((detail) => (
                        <div key={detail} className="flex items-center gap-2 text-[11px] text-beige-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-solar-400 shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
