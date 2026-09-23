import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/core/container";
import { Section } from "@/components/core/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CustomEnergyPlanForm } from "@/components/service/custom-energy-plan-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Compass,
  FileCheck2,
  HardHat,
  Zap,
  ArrowRight,
  CheckCircle2,
  Sliders,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works | Turnkey Engineering Process | Solar Legacy",
  description:
    "Explore Solar Legacy's step-by-step turnkey engineering process from satellite LiDAR modeling and municipal permits to master installation and live telemetry.",
};

export default function HowItWorksPage() {
  const steps = [
    {
      num: "01",
      title: "Remote 3D Solar Audit & LiDAR Scan",
      time: "Day 1–2",
      icon: Compass,
      desc: "Using high-resolution aerial imagery and LiDAR irradiance scans, we calculate your roofline pitch, sun angles, azimuth, and micro-climate shading variations without setting foot on your property.",
      details: [
        "LiDAR roofline shading scan",
        "Historical 12–24 month kilowatt-hour usage review",
        "Panel azimuth & elevation angle calculation",
      ],
    },
    {
      num: "02",
      title: "Architectural CAD Layout & Engineering",
      time: "Week 1",
      icon: Sliders,
      desc: "Our licensed solar engineers design a CAD layout that aligns with your home's aesthetics. We specify premium all-black monocrystalline modules and calculate your exact guaranteed annual production yield.",
      details: [
        "Symmetrical roofline aesthetic design",
        "Single-line electrical diagram drafting",
        "Physics-based kWh generation modeling",
      ],
    },
    {
      num: "03",
      title: "Custom Energy Plan & Program Review",
      time: "Week 1–2",
      icon: Sparkles,
      desc: "We present a comprehensive plan comparing direct equipment ownership vs zero-down solar subscriptions, battery backup tiers, tax credit eligibility, and estimated 25-year financial savings.",
      details: [
        "Cash vs $0-down solar loan comparison",
        "Solar subscription with $0 upfront cost",
        "30% federal clean energy tax credit breakdown",
      ],
    },
    {
      num: "04",
      title: "Turnkey Municipal Permitting & HOA Approvals",
      time: "Weeks 2–4",
      icon: FileCheck2,
      desc: "Zero paperwork headaches for you. Our compliance desk manages all city building permits, electrical engineering stamps, HOA architectural review submissions, and utility interconnection paperwork.",
      details: [
        "Licensed PE structural & electrical stamps",
        "Municipal building & electrical permits",
        "Formal utility interconnection agreements",
      ],
    },
    {
      num: "05",
      title: "Master Installation & Watertight Racking",
      time: "1–2 Days",
      icon: HardHat,
      desc: "Certified master installers mount roof attachments with dual-seal watertight flashing, run concealed conduit, position inverters, and integrate battery storage switchgear with surgical precision.",
      details: [
        "Zero-leak mechanical roof flashings",
        "Tier-1 black-on-black monocrystalline modules",
        "High-voltage battery islanding switchgear",
      ],
    },
    {
      num: "06",
      title: "City Inspection, PTO & Live Cloud Telemetry",
      time: "Week 5–6",
      icon: Zap,
      desc: "Following final municipal inspection and utility Permission to Operate (PTO), we activate your live system. Our telemetry dashboard gives you real-time smartphone tracking of generation and reserves.",
      details: [
        "Utility bi-directional net meter installation",
        "Permission to Operate (PTO) authorization",
        "24/7 panel-level mobile app telemetry",
      ],
    },
  ];

  const faqs = [
    {
      q: "Do I need to be home during the installation?",
      a: "You only need to be home for the initial electrical panel inspection and final walkthrough. The physical rooftop racking and module mounting takes place outside with zero disruption to your daily routine.",
    },
    {
      q: "How long does the entire process take from consultation to activation?",
      a: "Physical installation takes just 1 to 2 days. The total elapsed time—dominated by municipal permitting and utility interconnection approval—typically averages 4 to 6 weeks.",
    },
    {
      q: "Will Solar Legacy handle my HOA approvals?",
      a: "Yes. In states with Solar Access laws, HOAs cannot legally deny solar installations. We provide complete architectural CAD packets and shadow studies to ensure rapid HOA approval.",
    },
    {
      q: "What if my roof needs repair or replacement before solar?",
      a: "During our engineering audit, if your roof shows significant wear, we coordinate integrated roofing solutions so both roof work and solar installation are synchronized under a single warranty.",
    },
  ];

  return (
    <div className="min-h-screen bg-forest-950 text-white selection:bg-solar-400 selection:text-forest-950 font-sans relative">
      {/* =========================================================================
          GLOBAL LOW-OPACITY RELEVANT BACKGROUND (Architectural Solar Blueprint)
          Clearly visible across the entire page, fading to zero behind text
         ========================================================================= */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden select-none">
        <Image
          src="/bg-how-it-works.jpg"
          alt="Architectural solar blueprint background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30 brightness-115 contrast-110"
        />
        {/* Soft base dark overlay */}
        <div className="absolute inset-0 bg-forest-950/50" />
      </div>

      <Navbar />

      <main className="relative z-10">
        {/* =========================================================================
            HERO SECTION with Radial Mask (Opacity goes close to zero behind text)
           ========================================================================= */}
        <section className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden">
          {/* Radial mask that brings image opacity to ZERO directly behind the text */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 48%, rgba(4,20,14,0.98) 0%, rgba(4,20,14,0.85) 45%, transparent 100%)",
            }}
          />
          {/* Subtle vertical luxury gradient transitions */}
          <div className="absolute inset-0 bg-gradient-to-b from-forest-950/80 via-transparent to-forest-950 pointer-events-none" />
          {/* Ambient Solar Gold Accent Glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[550px] sm:w-[750px] h-[300px] sm:h-[400px] bg-solar-400/10 blur-[140px] rounded-full pointer-events-none z-1" />

          {/* Hero Content - Pristine Contrast on Zero-Opacity Cleared Area */}
          <Container size="xl" padding="normal" className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <Badge
              variant="glass"
              size="default"
              dot
              dotColor="solar"
              pulse
              className="border-solar-400/40 text-beige-100 px-3.5 sm:px-4 py-1.5 shadow-lg bg-forest-950/80 backdrop-blur-md text-xs mb-4 sm:mb-5"
            >
              Turnkey Engineering Process
            </Badge>

            <h1 className="font-heading font-extrabold text-[2.15rem] xs:text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.12] mb-5 sm:mb-6">
              From Satellite Feasibility to{" "}
              <span className="solar-gradient-text block sm:inline">
                Clean Power Activation
              </span>
            </h1>

            <p className="text-sm sm:text-xl text-beige-200 font-sans max-w-2xl mx-auto leading-relaxed mb-7 sm:mb-9 font-light">
              Going solar should be rigorous in engineering and effortless for the homeowner. Here is how Solar Legacy designs, permits, builds, and monitors your property&apos;s custom energy system.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
              <Button
                variant="solar"
                size="lg"
                className="font-bold text-forest-950 shadow-xl shadow-solar-400/25 group cursor-pointer h-12 sm:h-14 px-8 text-sm sm:text-base justify-center rounded-xl"
                asChild
              >
                <a href="#plan-form">
                  <span>Build My Custom Energy Plan</span>
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                variant="forestOutline"
                size="lg"
                className="border-white/20 text-beige-100 hover:bg-white/10 hover:text-white cursor-pointer backdrop-blur-sm h-12 sm:h-14 px-8 text-sm sm:text-base justify-center rounded-xl"
              >
                <a href="#process-steps">Explore All 6 Steps</a>
              </Button>
            </div>
          </Container>
        </section>

        {/* =========================================================================
            6-STEP PROCESS TIMELINE with Transparent BG & Zero-Opacity Behind Cards/Text
           ========================================================================= */}
        <Section id="process-steps" background="transparent" spacing="loose" className="relative border-t border-white/5 overflow-hidden">
          {/* Radial zero-opacity mask behind section title & description */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(4,20,14,0.98) 0%, rgba(4,20,14,0.8) 50%, transparent 100%)",
            }}
          />
          {/* Subtle Ambient Blueprint Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-solar-400/5 blur-[160px] rounded-full pointer-events-none z-1" />

          <Container size="xl" padding="normal" className="relative z-10">
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <Badge variant="glass" size="sm" dot dotColor="solar" pulse className="mb-3 text-solar-300 border-solar-400/30">
                End-To-End Workflow
              </Badge>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl leading-[1.2] text-white tracking-tight">
                Six Stages of <span className="solar-gradient-text">Precision Engineering</span>
              </h2>
              <p className="text-sm sm:text-base text-beige-300 mt-3 sm:mt-4 leading-relaxed font-sans max-w-2xl mx-auto">
                We handle 100% of the technical, bureaucratic, and electrical work. You receive continuous progress updates through our client portal.
              </p>
            </div>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 text-left">
              {steps.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.num}
                    className="p-7 sm:p-8 rounded-2xl bg-forest-900/60 backdrop-blur-xl border border-white/10 hover:border-solar-400/50 shadow-xl hover:shadow-2xl hover:shadow-solar-400/10 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      {/* Top Bar: Number & Duration Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <span className="text-2xl font-mono font-extrabold text-solar-400 group-hover:scale-105 transition-transform duration-300">
                          {s.num}
                        </span>
                        <Badge variant="glass" size="sm" className="font-mono text-[11px] text-solar-300 border-solar-400/30">
                          {s.time}
                        </Badge>
                      </div>

                      {/* Icon Box */}
                      <div className="w-12 h-12 rounded-xl bg-forest-950/80 border border-solar-400/30 flex items-center justify-center text-solar-400 group-hover:bg-solar-400 group-hover:text-forest-950 transition-colors duration-300 shadow-sm mb-5">
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Title & Description */}
                      <h3 className="font-heading font-bold text-xl text-white mb-3 group-hover:text-solar-300 transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-beige-300 leading-relaxed font-sans mb-6">
                        {s.desc}
                      </p>
                    </div>

                    {/* Details checklist */}
                    <div className="pt-4 border-t border-white/10 space-y-2">
                      {s.details.map((d) => (
                        <div key={d} className="flex items-start gap-2 text-xs text-beige-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-solar-400 shrink-0 mt-0.5" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* =========================================================================
            WARRANTY & LIFETIME PROMISE CALLOUT
           ========================================================================= */}
        <Section background="transparent" spacing="loose" className="relative border-t border-white/5 overflow-hidden">
          <Container size="xl" padding="normal">
            <div className="p-8 sm:p-12 md:p-14 rounded-3xl bg-forest-900/80 backdrop-blur-xl border border-solar-400/30 flex flex-col lg:flex-row lg:items-center justify-between gap-8 text-left shadow-2xl relative">
              <div className="space-y-4 max-w-2xl">
                <Badge variant="glass" size="sm" dot dotColor="solar" pulse className="mb-3 text-solar-300 border-solar-400/30">
                  Our Lifetime Promise
                </Badge>
                <h3 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl leading-[1.2] text-white tracking-tight">
                  Guaranteed Performance & <span className="solar-gradient-text">Watertight Roofs</span>
                </h3>
                <p className="text-sm sm:text-base text-beige-300 mt-3 leading-relaxed font-sans">
                  Every Solar Legacy installation is covered by a 25-Year Linear Production Warranty, 25-Year Hardware Inverter Guarantee, and a 10-Year Watertight Penetration Warranty. If your system ever underproduces or requires service, our local master technicians resolve it at zero cost.
                </p>
              </div>
              <div className="shrink-0 flex flex-col sm:flex-row gap-4">
                <Button
                  variant="solar"
                  size="lg"
                  className="rounded-xl px-8 font-bold text-forest-950 shadow-xl shadow-solar-400/20 group cursor-pointer"
                  asChild
                >
                  <a href="#plan-form">
                    <span>Start Free Assessment</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* =========================================================================
            FAQ SECTION
           ========================================================================= */}
        <Section background="transparent" spacing="loose" className="relative border-t border-white/5">
          {/* Radial zero-opacity mask behind FAQ header */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-72 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 70% 60% at 50% 30%, rgba(4,20,14,0.98) 0%, rgba(4,20,14,0.8) 50%, transparent 100%)",
            }}
          />
          <Container size="lg" padding="normal" className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
              <Badge variant="glass" size="sm" dot dotColor="solar" pulse className="mb-3 text-solar-300 border-solar-400/30">
                Frequently Asked Questions
              </Badge>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl leading-[1.2] text-white tracking-tight">
                Process <span className="solar-gradient-text">Questions & Answers</span>
              </h2>
              <p className="text-sm sm:text-base text-beige-300 mt-3 sm:mt-4 leading-relaxed font-sans max-w-2xl mx-auto">
                Everything you need to know about engineering, permitting, roof preservation, and system deployment.
              </p>
            </div>

            <div className="max-w-3xl mx-auto text-left">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="border border-white/10 rounded-2xl bg-forest-950/80 backdrop-blur-md px-6 overflow-hidden transition-colors hover:border-solar-400/30"
                  >
                    <AccordionTrigger className="text-base sm:text-lg font-heading font-semibold text-white hover:text-solar-300 py-4.5 hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-beige-200 leading-relaxed font-sans pb-5">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Container>
        </Section>

        {/* =========================================================================
            FINAL LEAD CONVERSION FORM
           ========================================================================= */}
        <Section id="plan-form" background="charcoal" spacing="loose" className="relative border-t border-white/10">
          <Container size="xl" padding="normal">
            <CustomEnergyPlanForm defaultInterest="Both (Solar + Battery)" defaultProperty="Residential" />
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
