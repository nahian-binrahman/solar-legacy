import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Container } from "@/components/core/container";
import { Section } from "@/components/core/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  TrendingDown,
  ShieldAlert,
  Activity,
  CheckCircle2,
  Cpu,
  BarChart4,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Commercial Battery Storage | Solar Legacy",
  description:
    "Store energy, shave peak-demand charges, and ensure mission-critical continuity with utility-grade commercial battery energy storage systems (BESS).",
};

export default function CommercialBatteryStoragePage() {
  const corePillars = [
    {
      title: "Peak Demand Charge Reduction",
      desc: "In many commercial tariffs, instantaneous 15-minute demand spikes account for 30% to 70% of total monthly electric costs. Batteries automatically discharge during peak consumption windows to compress peak demand charges.",
      icon: TrendingDown,
      metric: "Up to 50% demand fee drop",
    },
    {
      title: "Mission-Critical Continuity",
      desc: "Grid disruptions mean lost revenue, spoiled refrigerated inventory, stopped production lines, and damaged industrial equipment. BESS provides seamless sub-cycle emergency transfer for critical loads.",
      icon: ShieldAlert,
      metric: "<16ms transfer time",
    },
    {
      title: "Arbitrage & Time-of-Use Optimization",
      desc: "Charge battery banks when electricity is cheapest (or direct from rooftop solar) and automatically discharge power into your facility during high-cost on-peak utility periods.",
      icon: Activity,
      metric: "Dynamic algorithm dispatch",
    },
  ];

  const analysisSteps = [
    {
      step: "01",
      title: "15-Minute Interval Data Audit",
      desc: "We analyze your utility meter interval data (Green Button / 814 EDI files) to map exact 365-day peak load profiles and power factor variations.",
    },
    {
      step: "02",
      title: "Critical Load Isolation",
      desc: "Our electrical master engineers segment non-essential equipment from mission-critical circuits (servers, cooling, life safety, automation).",
    },
    {
      step: "03",
      title: "System Sizing & Simulation",
      desc: "Physics-based modeling calculates exact optimal kWh energy capacity and kW instantaneous power output to maximize financial payback.",
    },
    {
      step: "04",
      title: "Turnkey Interconnection & Deployment",
      desc: "From utility substation coordination and NFPA 855 fire safety compliance to commissioning and ongoing predictive battery maintenance.",
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

          <Container size="xl" padding="normal" className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-6 text-left">
                <Badge variant="gold" className="px-4 py-1.5 uppercase tracking-widest text-xs font-semibold">
                  Commercial & Industrial Storage
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium tracking-tight text-white leading-[1.1]">
                  Store Energy. Control Demand.{" "}
                  <span className="italic font-light text-solar-300">Protect Operations.</span>
                </h1>
                <p className="text-base sm:text-lg text-beige-200/80 leading-relaxed max-w-2xl">
                  Commercial electricity rates are increasingly dictated by peak-demand surcharges. Solar Legacy deploys utility-grade Battery Energy Storage Systems (BESS) that eliminate demand spikes and deliver unwavering operational resilience.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                  <Button asChild variant="solar" size="lg" className="rounded-xl px-8 py-6 font-bold shadow-xl shadow-solar-400/20 text-forest-950">
                    <a href="#facility-eval">
                      Evaluate My Facility
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-xl border-white/20 hover:bg-white/10 text-white">
                    <a href="#architecture">How Demand Shaving Works</a>
                  </Button>
                </div>
              </div>

              <div className="lg:col-span-5 relative">
                <div className="relative rounded-3xl overflow-hidden border border-solar-400/30 shadow-2xl aspect-[4/3] group">
                  <Image
                    src="/battery-project.jpg"
                    alt="Utility grade battery energy storage system"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest-950 via-forest-950/20 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-forest-900/80 backdrop-blur-md border border-white/10 text-left">
                    <div className="text-xs uppercase tracking-widest text-solar-400 font-bold mb-1">Grid-Scale Industrial BESS</div>
                    <div className="text-sm font-medium text-white">Lithium Iron Phosphate (LFP) chemistry with active liquid thermal regulation</div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 3 CORE PILLARS */}
        <Section id="architecture" background="dark" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <Badge variant="glass" className="px-3.5 py-1 text-xs uppercase tracking-widest text-solar-300">
                Strategic Advantages
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                Engineered for High-Consequence Environments
              </h2>
              <p className="text-beige-200/70 text-sm sm:text-base">
                Whether deployed in conjunction with on-site solar generation or as a standalone facility asset, commercial BESS converts uncontrollable utility overhead into an automated operational hedge.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              {corePillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-8 rounded-2xl bg-forest-900/50 border border-white/10 hover:border-solar-400/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="w-12 h-12 rounded-xl bg-solar-400/10 border border-solar-400/20 flex items-center justify-center text-solar-300 mb-6 group-hover:bg-solar-400 group-hover:text-forest-950 transition-colors">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-serif text-white font-medium mb-3">{pillar.title}</h3>
                      <p className="text-beige-200/70 text-sm leading-relaxed mb-6">{pillar.desc}</p>
                    </div>
                    <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-solar-400">
                      <span>{pillar.metric}</span>
                      <CheckCircle2 className="w-4 h-4 text-solar-400" />
                    </div>
                  </div>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* ENGINEERING AUDIT WORKFLOW */}
        <Section background="charcoal" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <Badge variant="glass" className="px-3.5 py-1 text-xs uppercase tracking-widest text-solar-300">
                Evaluation Process
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                How We Engineer Your Commercial Storage System
              </h2>
              <p className="text-beige-200/70 text-sm sm:text-base">
                We avoid generic guesswork. Every commercial BESS array is calculated against 8,760 hours of real operational interval utility data.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
              {analysisSteps.map((step) => (
                <div key={step.step} className="p-7 rounded-2xl bg-forest-950/80 border border-white/10 flex flex-col justify-between">
                  <div>
                    <div className="text-3xl font-serif font-bold text-solar-400/50 mb-4">{step.step}</div>
                    <h3 className="text-lg font-serif text-white font-medium mb-2">{step.title}</h3>
                    <p className="text-xs text-beige-200/70 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* TELEMETRY & DISPATCH */}
        <Section background="dark" spacing="loose" className="relative border-t border-white/5">
          <Container size="xl" padding="normal">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6 text-left">
                <Badge variant="gold" className="px-3.5 py-1 text-xs uppercase tracking-widest">
                  AI Energy Management Software
                </Badge>
                <h2 className="text-3xl sm:text-4xl font-serif font-medium text-white">
                  Continuous Autonomous Dispatch & Telemetry
                </h2>
                <p className="text-beige-200/80 text-sm sm:text-base leading-relaxed">
                  Your commercial battery does not wait for human intervention. Our cloud telemetry engine runs machine learning algorithms tracking weather forecasts, facility schedules, and real-time utility pricing tariffs to trigger predictive discharge seconds before expensive demand limits are breached.
                </p>
                <ul className="space-y-3">
                  {[
                    "Live sub-second telemetry dashboards with automated reporting",
                    "Predictive weather and utility tariff modeling",
                    "NFPA 855 and UL 9540A certified thermal management safety",
                    "Seamless coordination with existing diesel or natural gas backup generators",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-beige-100/90">
                      <CheckCircle2 className="w-4 h-4 text-solar-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-6">
                <div className="p-8 rounded-3xl bg-forest-900/60 border border-solar-400/25 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <Cpu className="w-6 h-6 text-solar-400" />
                      <span className="font-mono text-sm font-semibold text-white">Solar Legacy EMS Engine</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-mono">STATUS: OPTIMAL</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-beige-200/70">Peak Demand Threshold Capped</span>
                      <span className="font-mono text-solar-300 font-bold">120 kW (Targeted)</span>
                    </div>
                    <div className="w-full bg-forest-950 h-3 rounded-full overflow-hidden border border-white/10">
                      <div className="bg-solar-400 h-full w-[65%]" />
                    </div>

                    <div className="flex justify-between items-center text-xs pt-2">
                      <span className="text-beige-200/70">Simulated Demand Shaving Value</span>
                      <span className="font-mono text-emerald-400 font-bold">$18,400 / yr</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-beige-200/70">Uninterrupted Backup Reserve</span>
                      <span className="font-mono text-white font-bold">98.4% Capacity</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* FACILITY EVALUATION CTA */}
        <Section id="facility-eval" background="charcoal" spacing="loose" className="relative border-t border-white/10">
          <Container size="lg" padding="normal">
            <div className="p-10 sm:p-14 rounded-3xl bg-gradient-to-br from-forest-900 via-forest-950 to-charcoal-900 border border-solar-400/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
              <div className="w-16 h-16 rounded-2xl bg-solar-400/10 border border-solar-400/30 flex items-center justify-center text-solar-400 mx-auto">
                <BarChart4 className="w-8 h-8" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif text-white font-medium">
                Evaluate Your Facility&apos;s Peak Demand Profile
              </h2>
              <p className="text-beige-200/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Connect with our commercial engineering desk for an interval load simulation. We will quantify your exact demand charge exposure and illustrate the ROI of a tailored BESS setup.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <Button asChild variant="solar" size="lg" className="rounded-xl px-8 font-bold text-forest-950 shadow-xl shadow-solar-400/20">
                  <Link href="/#quote">
                    Request Facility Evaluation
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                <a
                  href="tel:+18005557652"
                  className="text-sm font-semibold tracking-wide text-beige-200 hover:text-solar-300 py-3 px-4"
                >
                  Direct Desk: +1 (800) 555-7652
                </a>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
