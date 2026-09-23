import type { Metadata } from "next";
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
      details: ["LiDAR roofline shading scan", "Historical 12–24 month kilowatt-hour usage review", "Panel azimuth & elevation angle calculation"],
    },
    {
      num: "02",
      title: "Architectural CAD Layout & Engineering",
      time: "Week 1",
      icon: Sliders,
      desc: "Our licensed solar engineers design a CAD layout that aligns with your home's aesthetics. We specify premium all-black monocrystalline modules and calculate your exact guaranteed annual production yield.",
      details: ["Symmetrical roofline aesthetic design", "Single-line electrical diagram drafting", "Physics-based kWh generation modeling"],
    },
    {
      num: "03",
      title: "Custom Energy Plan & Program Review",
      time: "Week 1–2",
      icon: Sparkles,
      desc: "We present a comprehensive plan comparing direct equipment ownership vs zero-down solar subscriptions, battery backup tiers, tax credit eligibility, and estimated 25-year financial savings.",
      details: ["Cash vs $0-down solar loan comparison", "Solar subscription with $0 upfront cost", "30% federal clean energy tax credit breakdown"],
    },
    {
      num: "04",
      title: "Turnkey Municipal Permitting & HOA Approvals",
      time: "Weeks 2–4",
      icon: FileCheck2,
      desc: "Zero paperwork headaches for you. Our compliance desk manages all city building permits, electrical engineering stamps, HOA architectural review submissions, and utility interconnection paperwork.",
      details: ["Licensed PE structural & electrical stamps", "Municipal building & electrical permits", "Formal utility interconnection agreements"],
    },
    {
      num: "05",
      title: "Master Installation & Watertight Racking",
      time: "1–2 Days",
      icon: HardHat,
      desc: "Certified master installers mount roof attachments with dual-seal watertight flashing, run concealed conduit, position inverters, and integrate battery storage switchgear with surgical precision.",
      details: ["Zero-leak mechanical roof flashings", "Tier-1 black-on-black monocrystalline modules", "High-voltage battery islanding switchgear"],
    },
    {
      num: "06",
      title: "City Inspection, PTO & Live Cloud Telemetry",
      time: "Week 5–6",
      icon: Zap,
      desc: "Following final municipal inspection and utility Permission to Operate (PTO), we activate your live system. Our telemetry dashboard gives you real-time smartphone tracking of generation and reserves.",
      details: ["Utility bi-directional net meter installation", "Permission to Operate (PTO) authorization", "24/7 panel-level mobile app telemetry"],
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
    <div className="min-h-screen bg-forest-950 text-white selection:bg-solar-400 selection:text-forest-950">
      <Navbar />

      <main>
        {/* HERO */}
        <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-forest-950">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(217,119,6,0.18),rgba(255,255,255,0))]" />
          <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none" />

          <Container size="xl" padding="normal" className="relative z-10 text-center max-w-4xl mx-auto space-y-6">
            <Badge variant="gold" className="px-4 py-1.5 uppercase tracking-widest text-xs font-semibold">
              Turnkey Engineering Process
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white leading-[1.1]">
              From Satellite Feasibility to{" "}
              <span className="italic font-light text-solar-300">Clean Power Activation</span>
            </h1>
            <p className="text-base sm:text-lg text-beige-200/80 leading-relaxed max-w-2xl mx-auto">
              Going solar should be rigorous in engineering and effortless for the homeowner. Here is how Solar Legacy designs, permits, builds, and monitors your property&apos;s custom energy system.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <Button
                variant="solar"
                size="lg"
                className="rounded-xl px-8 py-6 font-bold shadow-xl shadow-solar-400/20 text-forest-950"
                asChild
              >
                <a href="#plan-form">
                  <span>Build My Custom Energy Plan</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-xl border-white/20 hover:bg-white/10 text-white">
                <a href="#process-steps">Explore All 6 Steps</a>
              </Button>
            </div>
          </Container>
        </section>

        {/* 6-STEP PROCESS TIMELINE */}
        <Section id="process-steps" background="dark" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <Badge variant="glass" className="px-3.5 py-1 text-xs uppercase tracking-widest text-solar-300">
                End-To-End Workflow
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                Six Stages of Precision Engineering
              </h2>
              <p className="text-beige-200/70 text-sm sm:text-base">
                We handle 100% of the technical, bureaucratic, and electrical work. You receive continuous progress updates through our client portal.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
              {steps.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.num}
                    className="p-8 rounded-3xl bg-forest-900/60 border border-white/10 hover:border-solar-400/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-3xl font-serif font-bold text-solar-400/60 group-hover:text-solar-400 transition-colors">
                          {s.num}
                        </span>
                        <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-forest-950 text-solar-300 border border-white/10">
                          {s.time}
                        </span>
                      </div>

                      <div className="w-12 h-12 rounded-2xl bg-solar-400/10 border border-solar-400/20 flex items-center justify-center text-solar-300 mb-5">
                        <Icon className="w-6 h-6" />
                      </div>

                      <h3 className="text-xl font-serif text-white font-medium mb-3">{s.title}</h3>
                      <p className="text-xs sm:text-sm text-beige-200/75 leading-relaxed mb-6">{s.desc}</p>
                    </div>

                    <div className="pt-5 border-t border-white/10 space-y-2">
                      {s.details.map((d) => (
                        <div key={d} className="flex items-start gap-2 text-xs text-beige-200/90">
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

        {/* WARRANTY & GUARANTEE CALLOUT */}
        <Section background="charcoal" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="p-10 sm:p-14 rounded-3xl bg-forest-900/80 border border-solar-400/30 flex flex-col lg:flex-row lg:items-center justify-between gap-8 text-left">
              <div className="space-y-4 max-w-2xl">
                <Badge variant="gold" className="px-3.5 py-1 text-xs uppercase tracking-widest">
                  Our Lifetime Promise
                </Badge>
                <h3 className="text-2xl sm:text-3xl font-serif text-white font-medium">
                  Guaranteed Performance & Watertight Roofs
                </h3>
                <p className="text-sm text-beige-200/80 leading-relaxed">
                  Every Solar Legacy installation is covered by a 25-Year Linear Production Warranty, 25-Year Hardware Inverter Guarantee, and a 10-Year Watertight Penetration Warranty. If your system ever underproduces or requires service, our local technicians resolve it at zero cost.
                </p>
              </div>
              <div className="shrink-0 flex flex-col sm:flex-row gap-4">
                <Button
                  variant="solar"
                  size="lg"
                  className="rounded-xl px-8 font-bold text-forest-950 shadow-xl shadow-solar-400/20"
                  asChild
                >
                  <a href="#plan-form">Start Free Assessment</a>
                </Button>
              </div>
            </div>
          </Container>
        </Section>

        {/* FAQS */}
        <Section background="dark" spacing="loose" className="relative border-t border-white/5">
          <Container size="lg" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
              <Badge variant="glass" className="px-3.5 py-1 text-xs uppercase tracking-widest text-solar-300">
                FAQ
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                Process Questions & Answers
              </h2>
            </div>

            <div className="max-w-3xl mx-auto text-left">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="border border-white/10 rounded-2xl bg-forest-950/80 px-6 overflow-hidden"
                  >
                    <AccordionTrigger className="text-base font-serif font-medium text-white hover:text-solar-300 py-4 hover:no-underline">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm text-beige-200/80 leading-relaxed pb-5">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </Container>
        </Section>

        {/* FINAL LEAD FORM */}
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
